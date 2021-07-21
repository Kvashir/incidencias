import { Component, OnInit, Output } from '@angular/core';
import { Incidencia } from '../../model/incidencia';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IncidenciaService } from '../../services/incidencia.service';
import { ClientService } from '../../services/client.service';
import { AuthService } from '../../services/auth.service';
 

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss']
})
export class IncidenciaComponent implements OnInit {
  cliente:Array<any>=[""];
  tecnico:Array<any>=[""];
  esClient:boolean = true; 
  foto:string="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
  i: Incidencia = new Incidencia();
 

  constructor(private auth: AuthService,private client:ClientService ,private iservice:IncidenciaService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:Params)=>{
      this.iservice.getIncidenciaById(params.get('id')).subscribe(data => {
        
        this.i =data[0];

        if(this.i.usuarioId==this.auth.getCurrenUserId()){
          this.esClient=true;
        }
        else{
          this.esClient=false;  
        }
        this.foto= this.i.fotoIncidencia as string;
        
        this.client.getDataByUserID$(this.i.usuarioId!).subscribe(data=>{this.cliente = data;
           
        });

        this.client.getDataByUserID$(this.i.tecnicoId!).subscribe(data=>{ 
          if(data){
            this.tecnico = data;
            

          }
 
        });
      })});
      

  }

  deleteIncidencia(){
    console.log(this.i.id)
      this.iservice.delete(this.i.id!);
      this.volver();
      
  }
  volver(){
    if(this.i.usuarioId==this.auth.getCurrenUserId()){
      this.router.navigate(['/client/']);
    }
    else{
      this.router.navigate(['/tec/']);
    }
  }
  assignar(){ 
    this.i.tecnicoId =this.auth.getCurrenUserId();
    this.iservice.assignarIncidencia(this.i);
    this.router.navigate(['/tec/']);
  }
}
