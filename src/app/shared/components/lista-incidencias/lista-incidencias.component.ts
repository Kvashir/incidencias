import { Component, Input, OnInit } from '@angular/core';
import { Incidencia } from '../../model/incidencia';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.scss']
})

export class ListaIncidenciasComponent implements OnInit {

  // incidencias:Array<Incidencia>=[
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"},
  //   {titulo:"titulo",descripcion:"descripcion",fechaCreacion:"fecha",estadoincidencia:"estado",tecnicoId:"tecnico"}
  // ];

  @Input() incidencias!:Array<Incidencia>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
