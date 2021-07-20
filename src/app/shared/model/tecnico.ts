export class Tecnico {
  id?:string;
  name?:string='';
  surname?:string='';
  email:string='';
  password:string='';
  confirmPassword?:string='';
  tlf?:string='';
  valoracion?:{puntos:number,numClientes:number};
}
