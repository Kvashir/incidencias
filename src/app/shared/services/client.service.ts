import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Client } from '../model/client';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private fs: AngularFirestore) { }

  getDataByUserID$(id:string):Observable<Client[]>{
    return this.fs.collection<Client>('clients', ref=>
    ref.where('id', '==', id)).valueChanges().pipe(
      tap(data =>{ return data}),
      first());
  }

  setPerfilByUserID(user:User){
    this.fs.collection('clients').doc(user.id).set(user);
  }
}
