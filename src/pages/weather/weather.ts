import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { Events } from 'ionic-angular';
// importa el provider tonto salame chupachichi
import { WeatherDataProvider } from '../../providers/weather-data/weather-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

enableProdMode();
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers:[WeatherDataProvider],
})
export class WeatherPage {
  public datoo;
  public datos;
  public lacity;
  public lacityid;
  public saludador;
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.temp_actual();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  constructor(public navCtrl: NavController, 
              public http: Http,
              public WeatherDataProvider:WeatherDataProvider,
              public events: Events){

events.subscribe('ciudad', (item) => {
    //console.log(item.replace(' ', ''));
    this.lacity=item+", ar";
    console.log("evento capto: "+this.lacity)
  });
this.temp_actual();
}

async temp_actual(){
if(this.lacity== null){
this.temp_horas_dias();
this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Cordoba,arg&appid=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datoo = data;
        console.log(this.datoo);
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
}
else{
  this.temp_horas_dias();
  this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.lacity+',arg&appid=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datoo = data;
        console.log(this.datoo);
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
    
} 
}
    

async temp_horas_dias(){ 
if(this.lacity=="Cordoba, Mendiolaza, ar"){
//this.lacityid="3844424"
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+3844424+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
}
else if (this.lacity=="Villa Allende, ar") { 
this.lacityid="3832815"
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
    
}
else if(this.lacity=="Cordoba, ar"){
this.lacityid="3860259";
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
    
    
}
else if(this.lacity=="Cordoba,La Calera, ar"){
this.lacityid="3852374"
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
}
else if(this.lacity=="Buenos Aires, La Plata, ar"){
this.lacityid="3432043"
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
}
else if(this.lacity=="Misiones, Posadas, ar"){
this.lacityid="3429886"
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
}    
else{
console.log("Ciudad no encontrada por defecto: "+this.lacity ) 
this.lacityid="3860259";
this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
}
}
    
llamarTranza(){
this.WeatherDataProvider.traerFafa()
return this.WeatherDataProvider.datos;

}
}
