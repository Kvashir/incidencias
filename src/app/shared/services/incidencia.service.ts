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

  incidencia:Incidencia=new Incidencia();

  insertarIncidencia$(i:Incidencia){
    i.id = this.makeid();
    this.fs.collection('incidencias').doc().set(i);
  }
  getIncidenciasByUserId(){

    let id = this.auth.getCurrenUserId(); 
    return this.fs.collection<Array<Incidencia>>('incidencias', ref => ref.where('usuarioId', '==', id))
    .valueChanges()
  }

  getIncidenciaById(id?:string){
    
    return this.fs.collection<Incidencia>('incidencias', ref => ref.where('id', '==', id))
    .valueChanges().pipe(
      tap(data =>{return data}),
      first()); 
  }
  getIncidenciasSinAssignar(){
    
    return this.fs.collection<Incidencia>('incidencias', ref => ref.where('tecnicoId', '==', ""))
    .valueChanges()

  }

  getIncidenciasAssignadas(){
    
    return this.fs.collection<Incidencia>('incidencias', ref => ref.where('tecnicoId', '==', this.auth.getCurrenUserId()))
    .valueChanges()

  }

  assignarIncidencia(incidencia:Incidencia){
    incidencia.estadoincidencia="Técnico assignado!"
    let jobskill_query = this.fs.collection('incidencias', ref => ref.where('id','==',incidencia.id));

    jobskill_query.get().subscribe(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.update(incidencia);
      });
    }); 
  }

  delete(id:string){ 
    let jobskill_query = this.fs.collection('incidencias', ref => ref.where('id','==',id));

    jobskill_query.get().subscribe(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });

  }
  
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 20; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
}
