import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  template: `<app-login-form [formGroup]='formGroup'
  (submitEvent)=loginUser($event)></app-login-form>`
})
export class LoginComponent implements OnInit {
  
  user!:User;
  formGroup!:FormGroup;
  
  constructor(private fb:FormBuilder,
    private AuthService: AuthService,
    private router: Router) {
      
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
    this.router.navigate(['/register/']);

   }
}
