import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../../model/incidencia';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IncidenciaService } from '../../services/incidencia.service';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss']
})
export class IncidenciaComponent implements OnInit {
  cliente:Array<any>=[""];
  tecnico:Array<any>=[""];

  i: Incidencia = new Incidencia();


  constructor(private auth: AuthService,private client:ClientService ,private iservice:IncidenciaService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:Params)=>{
      this.iservice.getIncidenciaById(params.get('id')).subscribe(data => {
        
        this.i =data[0]
      
        this.client.getDataByUserID$(this.i.usuarioId!).subscribe(data=>{this.cliente = data;
          //this.i.usuarioId=`${this.cliente[0]?.name} ${this.cliente[0]?.surname}`
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
 

        if(this.i.usuarioId==this.auth.getCurrenUserId()){
          this.router.navigate(['/client/']);
        }
        else{
          this.router.navigate(['/tec/']);
        }
      
  }
  
}
