import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Turismo } from 'src/modelo/turismo';
import { UUID } from 'angular2-uuid';
import {​​ finalize }​​ from 'rxjs/operators';
import { RegistrarService } from '../../servicios/registrar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  imageProdu:any;
  turismo:Turismo= new Turismo();
  turi:any;
  constructor(public router: Router, public registroService: RegistrarService, public storage:AngularFireStorage) { }

  ngOnInit() {
  }

  crearProducto(){
    console.log(this.imageProdu)
    this.registroService.guardarProducto(this.turismo);
    this.router.navigate(["/"])
  }

  cargarImgBase(){
    let uuid = UUID.UUID();
    let path= "imagenes/"+uuid;
    let varRef = this.storage.ref(path);
    let subiendo=this.storage.upload(path,this.imageProdu);
    subiendo.snapshotChanges().pipe(finalize(()=>{
      varRef.getDownloadURL().subscribe((subs)=>{
        this.turismo.img=subs;
        this.crearProducto();
      })
    })).subscribe((ano)=>{})
    

  }

  cargaImagen(event){
    console.log(event);
    if(event.target.files && event.target.files[0]){
      let recupera= new FileReader();
      this.imageProdu=  event.target.files[0];

    }
  }



}
