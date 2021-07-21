import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Client } from '../model/client';
import { Incidencia } from '../model/incidencia';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
  incidencias:Array<any>=[];
  constructor(private fs: AngularFirestore,private auth:AuthService) { }


  insertarIncidencia$(i:Incidencia){
    this.fs.collection('incidencias').doc().set(i);
  }
  getIncidenciasByUserId(){

    let id = this.auth.getCurrenUserId();
    console.log(id)
    return this.fs.collection<Array<Incidencia>>('incidencias', ref => ref.where('usuarioId', '==', id))
    .valueChanges()


  }
}
