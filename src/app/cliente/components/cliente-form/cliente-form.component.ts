import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Incidencia } from 'src/app/shared/model/incidencia';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  @Input() incidencias!:Array<Incidencia>;
  @Output() perfilEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  perfil(){
    this.perfilEvent.emit();
  }
}
