import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Incidencia } from '../../model/incidencia';
import { IncidenciaService } from '../../services/incidencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-incidencias',
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.scss']
})

export class ListaIncidenciasComponent implements OnInit {
  id:string="";

  @Input() incidencias!:Array<Incidencia>;
   

  @Output() incidenciaEvent = new EventEmitter<string>();

  constructor(private iservice:IncidenciaService,private router: Router) { }

  ngOnInit(): void {

  }
  abrirIncidencia(id:string = "0"){
    this.id =id;
     console.log(this.id);
    this.incidenciaEvent.emit(this.id);
    
    this.router.navigate(['/incidencia/',id]); 
  }
}
