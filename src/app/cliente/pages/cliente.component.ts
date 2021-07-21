import { Component, OnInit } from '@angular/core';
import { Incidencia } from 'src/app/shared/model/incidencia';
import { IncidenciaService } from 'src/app/shared/services/incidencia.service';

@Component({
  selector: 'app-cliente',
  template: `<app-cliente-form [incidencias]='incidencias'></app-cliente-form>`
})
export class ClienteComponent implements OnInit {

  incidencias!:Array<any>;

  constructor(private incidenciaService:IncidenciaService) { }

  ngOnInit(): void {
    this.incidenciaService.getIncidenciasByUserId().subscribe(data =>{ this.incidencias = data });
    
    console.log(this.incidencias)
  }

}
