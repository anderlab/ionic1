import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { pruebaPage } from '../prueba/prueba';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class registerPage {
  
  nombre:string = '';
  password:string = '';
  imagen:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  login(){
    this.navCtrl.push(pruebaPage, {
      nombre: this.nombre,
      password: this.password,
      imagen: this.imagen
    });
    }

}
