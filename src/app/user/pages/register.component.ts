import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-register',
  template: `<app-register-form
              [formGroup]='formGroup'
              (submitEvent)=registrarUsuario($event)>
            </app-register-form>`
})
export class RegisterComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;

  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router, private clientService:ClientService) {

    this.user=new User();

  }

  ngOnInit(): void {

    this.formGroup = this.fb.group(this.user);
    // console.log(this.user)
    Object.keys(this.formGroup.controls).map(ctrl =>{
      const validators =[Validators.required];
      if(ctrl==='email') validators.push(Validators.email);
      if(ctrl==='confirmPassword')validators.push(this.passwordValidator().bind(this));

      this.formGroup.controls[ctrl].setValidators(validators);
    });
  }

async registrarUsuario(user:User){
    await this.auth.registrarUsuario$(user);
    this.clientService.setPerfilByUserID(user);
    this.router.navigate(['/login']);
  }

  passwordValidator(): ValidatorFn {
    return (ctrl: AbstractControl): ValidationErrors | null =>
       this.formGroup?.get('password')?.value !== ctrl?.value?{mismatch: true}:null;
}
}
