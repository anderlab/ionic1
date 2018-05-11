import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html'
})
export class pruebaPage {

  nombre:string = '';
  password:string = '';
  imagen:string = '';
  newpassword:string = '';
  oldpassword:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre = navParams.get('nombre');
    this.password = navParams.get('password');
    this.imagen = navParams.get('imagen');
  }

  cambiar(){
    this.oldpassword= "<p>tu antigua contraseña era</p>" + this.password;
    this.password = this.newpassword;
  }


}
