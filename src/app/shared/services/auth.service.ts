
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //pendiente private error: ErrorService
  constructor(private fireAuth: AngularFireAuth,
    private firestore: AngularFirestore) { }


  async registrarUsuario$(user:User): Promise<any>{
    try {
      const credentials = await this.fireAuth.createUserWithEmailAndPassword(user.email,user.password);
      user.id = credentials.user?.uid;
      credentials.user?.updateProfile({
        displayName: user.name +' '+user.surname
      });

    } catch (error) {
      throw error;
    }
  }

  login(user:User):Promise<any>{
    return this.fireAuth.signInWithEmailAndPassword(user.email,user.password);
  }

  setToken(id:any,token:any):void{
    sessionStorage.setItem(id,token);
  }

  getToken():string{
    return sessionStorage.getItem('accesToken') as string;
  }
  getCurrenUserId():string{
    return sessionStorage.key(0) as string;
  }
}
