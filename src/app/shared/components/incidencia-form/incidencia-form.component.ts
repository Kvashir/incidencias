import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Incidencia } from '../../model/incidencia';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidenciaService } from '../../services/incidencia.service';
import { formatDate } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { PhotoService } from '../../services/photo.service';  
import { Foto } from '../../model/photo';

@Component({
  selector: 'app-incidencia-form',
  templateUrl: './incidencia-form.component.html',
  styleUrls: ['./incidencia-form.component.scss']
})
export class IncidenciaFormComponent implements OnInit {
  formGroup!:FormGroup;
  incidencia!:Incidencia;
  photo:Foto=new Foto;
  foto:string="https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png";
  constructor(public photoService:PhotoService, private fb:FormBuilder, private incidenciaService:IncidenciaService,private router:Router, private auth:AuthService) {
    this.incidencia = new Incidencia();
    defineCustomElements(window);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group(this.incidencia);
    Object.keys(this.formGroup.controls).map(ctrl=>{
      const validators=[Validators.required];
      if(ctrl==="titulo") validators.push(Validators.required);
      if(ctrl==="descripcion") validators.push(Validators.required);

      this.formGroup.controls[ctrl].setValidators(validators);
    });
  }


  submit(){
    this.incidencia = this.formGroup.value;
    this.addInfoComplementaria();
    console.log(this.incidencia)
    this.incidenciaService.insertarIncidencia$(this.incidencia);
    this.formGroup.reset();
    this.router.navigate(['/client']);
  }

  addInfoComplementaria(){
    this.incidencia = this.formGroup.value;
    this.incidencia.fechaCreacion=formatDate(new Date(), 'dd/MM/yyyy', 'en');
    this.incidencia.usuarioId =this.auth.getCurrenUserId();
    this.incidencia.estadoincidencia="Sin Técnico Assignado";
    this.incidencia.fotoIncidencia = this.foto;
  }
  addPhotoToGallery() {
     this.photoService.addNewToGallery().then(data => this.foto=data); 
  }
}

