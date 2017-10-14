import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherDataProvider {
    public datos:any[];
    public jaja;
  constructor(public http: Http) {
      this.datos;
    console.log('Soy el WeatherDataProvider Provider');
  }
aja(){
console.log("lasdlasdl"); 
return this.jaja;
}
    
async traerFafa(){
    await this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Cordoba,arg&appid=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
    .map(res => res.json())
    .subscribe(
      data => {
        this.datos = data;
        console.log(this.datos);
        return this.datos;
      },
      err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );
  }   
    
    
}


