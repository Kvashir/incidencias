import { Component, OnInit } from '@angular/core';
import { Incidencia } from '../../model/incidencia';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.component.html',
  styleUrls: ['./incidencia.component.scss']
})
export class IncidenciaComponent implements OnInit {

  i: Incidencia = {
    titulo: "titulo",
    descripcion: "descripcion",
    fotoIncidencia:"FOTO",
    fechaCreacion: "fecha",
    estadoincidencia: "estado",
    usuarioId:"asdf",
    tecnicoId: "tecnico",
    feedback:["123","123","123","123","123","123","123"]
  };
  cliente:string="joan";
  tecnico:string="pepe"

  constructor() { }

  ngOnInit(): void {
  }

}
