import { Injectable } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage'; 
import { Foto} from "src/app/shared/model/photo";
@Injectable({
  providedIn: 'root'
})
export class PhotoService { 

  photos:Array<Foto>=[];
  photo:Foto=new Foto;
  
  constructor() { }
  
  public async addNewToGallery() {
    
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64,  
      source: CameraSource.Camera,  
      quality: 100  
    });  
    let src="data:image/png;base64,"
    return src.concat(capturedPhoto.base64String as string);
  }
   
}