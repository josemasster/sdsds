export class usuario{
    nombre:string="";
    cargo:string="";
    correo:string="";
    password:string="";

    constructor(nombre:string,cargo:string,correo:string , password:string){
        this.nombre= nombre;
        this.cargo= cargo;
        this.correo=correo;
        this.password=password;

    }
}