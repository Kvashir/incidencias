import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../../model/user';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  
  user:User=new User();

  constructor(private client:ClientService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void { 

    this.route.paramMap.subscribe(
      (params:Params)=>{
      this.client.getDataByUserID$(params.get('id')).subscribe(data => this.user = data[0])
    });

  }
  volver(){
    if(this.user.rol=="Cliente"){
      this.router.navigate(['/client/']);
    }
    else{
      this.router.navigate(['/tec/']);
    }
  }
}
