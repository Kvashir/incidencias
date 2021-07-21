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
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Base64, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    }); 
    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    let src="data:image/png;base64, "
    return src.concat(capturedPhoto.base64String as string);
  }
   

  private async savePicture(cameraPhoto: Photo) {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(cameraPhoto);
 
  
    // Use webPath to display the new image instead of base64 since it's
    // already loaded into memory
    return base64Data
    
  }
  private async readAsBase64(cameraPhoto: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    console.log(cameraPhoto.webPath);
    let response = await fetch(cameraPhoto.webPath!);
    let blob = await response.blob();
    console.log(blob);
    return await this.convertBlobToBase64(blob) as string;
  }
  
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    let reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsBinaryString(blob);
  });
}