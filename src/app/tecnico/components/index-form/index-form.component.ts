import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Incidencia } from 'src/app/shared/model/incidencia';


@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.scss']
})
export class IndexFormComponent implements OnInit {
  
  @Input() incidencias!:Array<Incidencia>;
  @Input() titulo!:string;

  @Output() nuevasEvent = new EventEmitter();
  @Output() assignadasEvent = new EventEmitter();
  @Output() perfilEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  nuevas(){
    this.nuevasEvent.emit();
  }
  assignadas(){
    this.assignadasEvent.emit();
  }
  perfil(){
    this.perfilEvent.emit();
  }
}
