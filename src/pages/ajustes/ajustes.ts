import { Component } from '@angular/core';
import {  NavController, NavParams, ModalController} from 'ionic-angular';

import { ModalsPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal(){
    let modal=this.modalCtrl.create( ModalsPage, { nombre:"Gabriel", edad:21 } );
    modal.present();
    modal.onDidDismiss( parametros=>{

      if(parametros){
        console.log(parametros);
      }else{
        console.log("Sin parametros");
      }
      
    });
  }

}
