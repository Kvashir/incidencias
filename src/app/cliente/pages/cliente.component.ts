import { Component, OnInit } from '@angular/core';
import { Incidencia } from 'src/app/shared/model/incidencia';
import { IncidenciaService } from 'src/app/shared/services/incidencia.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cliente',
  template: `<app-cliente-form [incidencias]='incidencias'
  (perfilEvent)=perfil()
                                (incidenciaEvent)=abrirFichaIncidencia($event)></app-cliente-form>`
})
export class ClienteComponent implements OnInit {

  incidencias!:Array<any>;

  constructor(private incidenciaService:IncidenciaService,private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.incidenciaService.getIncidenciasByUserId().subscribe(data =>{ this.incidencias = data });
        
  }

  abrirFichaIncidencia(id:any){
    console.log(id);
    this.router.navigate(['/incidencia/',id]);
    this.incidenciaService.getIncidenciaById(id).subscribe(data => console.log(data));

  }
  perfil(){
    
    this.router.navigate(['/perfil/',this.auth.getCurrenUserId()]);
  }
}
