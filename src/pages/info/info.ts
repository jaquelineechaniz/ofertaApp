import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfomPage } from '../infom/infom';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  materias=[];
  carrera ="";
  oferta = [];
  infomPage= InfomPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oferta = this.navParams.get('oferta');
    //console.log(JSON.stringify(this.oferta));
    this.carrera = this.navParams.get('carrera');
    this.getItems();

  }

  getItems(){
    this.materias = this.oferta.filter(oferta => {return oferta.Carrera.includes(this.carrera)});

    //console.log(JSON.stringify(this.materias));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  infom(materia){
    console.log('infom');
    this.navCtrl.push(this.infomPage,{materia:materia});
  }

}
