import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  rolbool:boolean = false;
  rol:string="Cliente";
  @Input() formGroup!:FormGroup;

  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.formGroup.value.rol = this.rol;
    this.submitEvent.emit(this.formGroup.value);
    this.formGroup.reset();
  }

  changeRol(){
    this.rolbool=!this.rolbool;

    if(this.rolbool){
      this.rol ="Técnico";
    }
    else{
      this.rol ="Cliente";
    }
  }
}
