import { Component, Input, OnInit } from '@angular/core';
import { Incidencia } from 'src/app/shared/model/incidencia';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  @Input() incidencias!:Array<Incidencia>;

  constructor() { }

  ngOnInit(): void {
  }

}
