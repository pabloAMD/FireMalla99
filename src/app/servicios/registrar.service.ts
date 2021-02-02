import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Turismo } from '../../modelo/turismo';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(public afs: AngularFirestore) { }

  guardarProducto(turismo: Turismo){
    const refTu= this.afs.collection("turismo");

    if (turismo.uid==null) {
        turismo.uid= this.afs.createId();
    }

    refTu.doc(turismo.uid).set(Object.assign({},turismo),{merge:true});
  }

  getTurismo() : Observable<any>{
    return this.afs.collection("turismo").valueChanges();
  }
}
