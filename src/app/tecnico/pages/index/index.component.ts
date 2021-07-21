import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IncidenciaService } from 'src/app/shared/services/incidencia.service';

@Component({
  selector: 'app-index',
  template: `<app-index-form [incidencias]='incidencias'
  [titulo]='titulo'
  (nuevasEvent)=nuevas()
  (assignadasEvent)=assignadas()
  (incidenciaEvent)=abrirFichaIncidencia($event)
  (perfilEvent)=perfil()></app-index-form>`
})
export class IndexComponent implements OnInit {
  incidencias!:Array<any>;
  titulo!:string;

  constructor(private auth:AuthService,private incidenciaService:IncidenciaService,private router: Router) { }

  ngOnInit(): void {
    this.titulo ="Nuevas Incidencias"
    this.incidenciaService.getIncidenciasSinAssignar().subscribe(data =>{ this.incidencias = data });
    this.nuevas();
  }


  abrirFichaIncidencia(id:any){ 
    console.log(id);
    this.router.navigate(['/incidencia/',id]);
    this.incidenciaService.getIncidenciaById(id).subscribe(data => console.log(data));
 
  } 
  perfil(){
    
    this.router.navigate(['/perfil/',this.auth.getCurrenUserId()]);
  }
  nuevas(){
    this.titulo ="Nuevas Incidencias"
    this.incidenciaService.getIncidenciasSinAssignar().subscribe(data =>{ this.incidencias = data });
  }
  assignadas(){
    this.titulo ="Incidencias Assignadas"
    this.incidenciaService.getIncidenciasAssignadas().subscribe(data =>{ this.incidencias = data });
  
  }

}
