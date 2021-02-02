import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { RegistrarService } from '../../servicios/registrar.service';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage implements OnInit {
  turi:any[];
  constructor(public router: Router, public registroService: RegistrarService, public storage:AngularFireStorage) { }

  ngOnInit() {
    this.recuperarCategoriasEm();
  }

  async recuperarCategoriasEm(){
    await this.registroService.getTurismo().subscribe((respuesta:any)=>{
     
      this.turi = respuesta;
      console.log( this.turi);

    })
   
  }

}
