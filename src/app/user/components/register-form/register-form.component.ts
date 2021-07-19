import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Input() formGroup!:FormGroup;

  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("submit")
    this.submitEvent.emit(this.formGroup.value);
    this.formGroup.reset(); 
  }
}
