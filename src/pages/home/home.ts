import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { InfoPage } from '../info/info';
import { BuscarmatePage } from '../buscarmate/buscarmate';
import { BuscarprofePage } from '../buscarprofe/buscarprofe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  oferta = [];
  infoPage = InfoPage;
  buscarmatePage = BuscarmatePage;
  buscarprofePage = BuscarprofePage;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.http.get('/v1/api/v1/oferta/')
      .subscribe(data => {
      this.oferta = data;
      //console.log(JSON.stringify(this.oferta));
    },error =>{
      console.log(JSON.stringify(error));
    });

  }
  info(carrera){
    console.log('click');
    //console.log(JSON.stringify(this.oferta));
    this.navCtrl.push(this.infoPage,{oferta:this.oferta,carrera:carrera});
  }
  buscarmate(){
    console.log('buscarmate');
    this.navCtrl.push(this.buscarmatePage,{oferta:this.oferta});
  }
  buscarprofe(){
    console.log('buscarprofe');
    this.navCtrl.push(this.buscarprofePage, {oferta:this.oferta});
  }

}
