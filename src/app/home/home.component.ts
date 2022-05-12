import { Component, OnInit, Optional } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre:string="";
  apellidos:string="";
  sexo:string="";
  email:string=""
  fechanac:string="";
  usuarios:any="";
  usuario={
    nombre:"",
    apellidos:"",
    sexo:"",
    email:"",
    fechanac:""
  }

  constructor() { }

  ngOnInit(): void {
    this.usuarios=localStorage.getItem("users");
    this.usuarios=JSON.parse(this.usuarios);
    if(this.usuarios==null) this.usuarios=[];
  } 
  
  guardar(){
    var expreg = /^[a-z]+[a-z0-9._-]+@[a-z]+\.[a-z.]{2,5}$/;
    if(expreg.test(this.email)){
      if(this.nombre!="" && this.apellidos!="" && this.sexo != "" && this.email != "" && this.fechanac != ""){
        this.usuario.nombre=this.nombre;
        this.usuario.apellidos=this.apellidos;
        this.usuario.sexo=this.sexo;
        this.usuario.email=this.email;
        this.usuario.fechanac=this.fechanac;
        var user= JSON.stringify(this.usuario); //usuario nuevo en forma de texto
        this.usuarios.push(user);
        localStorage.setItem("users",JSON.stringify(this.usuarios));
        Swal.fire({
          icon: 'success',
          title: 'Haz sido registrado con exito',
          text: 'Esta pendiente de nuestros correos',
          timer: 2500,
          timerProgressBar:true,
          showConfirmButton: true
  
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Existen campos vacios',
          timer: 2500,
          timerProgressBar:true,
          showConfirmButton: true
  
        })
      }
    }
    else{
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error en el email',
          timer: 2500,
          timerProgressBar:true,
          showConfirmButton: true
  
        })
    }
    
  }
}
    