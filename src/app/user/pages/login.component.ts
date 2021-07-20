import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/model/client';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ClientService } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-login',
  template: `<app-login-form [formGroup]='formGroup'
  (submitEvent)=loginUser($event)></app-login-form>`
})
export class LoginComponent implements OnInit {

  user!:User;
  formGroup!:FormGroup;
  client!:Client;

  constructor(private fb:FormBuilder,
    private AuthService: AuthService,
    private router: Router,
    private clientService:ClientService) {

    this.user = new User();
  }
  ngOnInit(): void {

    this.formGroup = this.fb.group(this.user);
    Object.keys(this.formGroup.controls).map(ctrl =>{
      this.formGroup.controls[ctrl].setValidators(Validators.required);

    });
  }
  async loginUser(user:User){

    const result: any = await this.AuthService.login(user);
    const token = await result.user.getIdToken();
    const id = result.user.uid;
    this.AuthService.setToken(id,token);

    this.clientService.getDataByUserID$(id).subscribe(data=> {

          this.client=data[0]

          if(this.client.rol == 'Cliente'){
            this.router.navigate(['/client/']);
          }
          else{
            this.router.navigate(['/tec/']);
          }
        });
   }
}
