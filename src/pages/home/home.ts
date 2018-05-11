import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { pruebaPage } from '../prueba/prueba';
import { registerPage } from '../register/register';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	nombre:string = '';
	password:string = '';

  constructor(public navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(pruebaPage, {
      nombre: this.nombre,
      password: this.password
    });
    }

  crearUsuario(){
    this.navCtrl.push(registerPage, {
      
    });
    }

}
