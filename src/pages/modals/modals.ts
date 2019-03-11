import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  nombre:string="";
  edad:number=0;

  constructor( public navParams: NavParams, public viewCtrl:ViewController) {
  
    this.nombre=this.navParams.get("nombre");
    this.edad=this.navParams.get("edad");

  }

  cerrarConPararmetros(){
    let data={
      nombre:"Gabriel Jimenez",
      edad:21,
      coords:{
        lat:10,
        lon:-10
      }
    };

    this.viewCtrl.dismiss(data);
  }

  cerrarSinPararmetros(){
    this.viewCtrl.dismiss();
  }


}
