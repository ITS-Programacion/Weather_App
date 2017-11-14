import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {enableProdMode} from '@angular/core';
import { Events } from 'ionic-angular';
// importa el provider tonto salame chupachichi
import { WeatherDataProvider } from '../../providers/weather-data/weather-data';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';


enableProdMode();
@Component({
    selector: 'page-weather',
    templateUrl: 'weather.html',
    providers:[WeatherDataProvider],
})
export class WeatherPage {
    public datoo;public datos;public lacity;public lacityid;public dia_hora_0;public dia_hora_1; public dia_2;public dia_3;public dia_4;


    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        this.temp_actual();
        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1500);
    }

    constructor(public navCtrl: NavController, 
                 public http: Http,
                 public WeatherDataProvider:WeatherDataProvider,
                 public events: Events,
                 public loadingCtrl: LoadingController,){
        this.presentLoadingCustom()
        events.subscribe('ciudad', (item) => {
            //item.replace('', '');
            this.lacity=item+", ar";
            console.log("evento capto: "+this.lacity)
            this.temp_actual();
        });
    }


    presentLoadingCustom() {
        this.temp_actual();
        const loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'Buscado datos del Server...',
            duration: 1000
        });

        loading.onDidDismiss(() => {
            console.log('Dismissed loading');

        });

        loading.present();
    }    

    async temp_actual(){
        if(this.lacity== null){
            this.temp_horas_dias();
            this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Cordoba,ar&appid=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datoo = data;
                    //let obj=JSON.stringify(data)
                    console.log(this.datoo)
                },err => {
                    console.log("Mamaaa cortastes toda la loz!");
                }
            );
        }
        else{
            this.temp_horas_dias();
            this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+this.lacity+'&appid=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datoo = data;
                    console.log(this.datoo);
                },err => {
                    console.log("se rompio");
                }
            );

        } 
    }  

    async temp_horas_dias(){
        if(this.lacity=="Villa Allende, ar"){
            this.lacityid="3832815"
            this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datos = data;
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
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
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
                },err => {
                    console.log("Mamaaa cortastes toda la loz!");
                }
            );


        }
        else if(this.lacity=="Mendoza, ar"){
            this.lacityid="3844421"
            this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datos = data;
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
                },err => {
                    console.log("Mamaaa cortastes toda la loz!");
                }
            );
        }
        else if(this.lacity=="La Plata, ar"){
            this.lacityid="3432043"
            this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datos = data;
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
                },err => {
                    console.log("Mamaaa cortastes toda la loz!");
                }
            );
        }
        else if(this.lacity=="Misiones, ar"){
            this.lacityid="3429886"
            this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datos = data;
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
                },err => {
                    console.log("Mamaaa cortastes toda la loz!");
                }
            );
        }
        else if(this.lacity=="Rosario, ar"){
            this.lacityid="3838583"
            this.http.get('http://api.openweathermap.org/data/2.5/forecast?id='+this.lacityid+'&APPID=aa02e2e3e20b08dda6c7f1156b0fe6e0&units=metric&lang=es')
                .map(res => res.json())
                .subscribe(
                data => {
                    this.datos = data;
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
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
                    this.diador0();
                    this.diador1();
                    this.diador2();
                    this.diador3();
                    this.diador4();
                },err => {
                    console.log("Mamaaa cortastes toda la loz!");
                }
            );
        }
    }


    async diador0(){
        console.log(" Haciendo dia 0")
        var date = new Date(this.datos.list[0].dt*1000);
        /*        var mes= new Array(12);
        mes[0] = "Enero";
        mes[1] = "Febrero";
        mes[2] = "Marzo";
        mes[3] = "Abril";
        mes[4] = "Mayo";
        mes[5] = "Junio";
        mes[6] = "Julio";
        mes[7] = "Agosto";
        mes[8] = "Septiembre";
        mes[9] = "Octubre";
        mes[10] = "Noviembre";
        mes[11] = "Diciembre";
        var elmes = mes[date.getDay()];*/
        var weekday = new Array(7);
        weekday[0] =  "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miercoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernes Cheto";
        weekday[6] = "Sabaduki";
        var eldia = weekday[date.getDay()];
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        this.dia_hora_0= eldia + ", "+formattedTime+" hrs";

    }    


    async diador1(){
        console.log(" Haciendo dia 1")
        var date = new Date(this.datos.list[8].dt*1000);
        /*        var mes= new Array(12);
        mes[0] = "Enero";
        mes[1] = "Febrero";
        mes[2] = "Marzo";
        mes[3] = "Abril";
        mes[4] = "Mayo";
        mes[5] = "Junio";
        mes[6] = "Julio";
        mes[7] = "Agosto";
        mes[8] = "Septiembre";
        mes[9] = "Octubre";
        mes[10] = "Noviembre";
        mes[11] = "Diciembre";
        var elmes = mes[date.getDay()];*/
        var weekday = new Array(7);
        weekday[0] =  "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miercoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernes Cheto";
        weekday[6] = "El Sabaduki";
        var eldia = weekday[date.getDay()];
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);
        this.dia_hora_1= eldia+", " + formattedTime+ " hrs"

    }    


    async diador2(){
        console.log(" Haciendo dia 2")
        var date = new Date(this.datos.list[12].dt*1000);
        var weekday = new Array(7);
        weekday[0] =  "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miercoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernes Cheto";
        weekday[6] = "Sabaduki";
        var eldia = weekday[date.getDay()];
        this.dia_2= eldia;

    }    


    async diador3(){
        console.log(" Haciendo dia 2")
        var date = new Date(this.datos.list[20].dt*1000);
        var weekday = new Array(7);
        weekday[0] = "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miercoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernesuli";
        weekday[6] = "Sabaduki";
        var eldia = weekday[date.getDay()];
        this.dia_3= eldia;

    }     


    async diador4(){
        console.log(" Haciendo dia 2")
        var date = new Date(this.datos.list[28].dt*1000);
        var weekday = new Array(7);
        weekday[0] = "Domingo";
        weekday[1] = "Lunes";
        weekday[2] = "Martes";
        weekday[3] = "Miercoles";
        weekday[4] = "Jueves";
        weekday[5] = "Viernesuli";
        weekday[6] = "Sabaduki";
        var eldia = weekday[date.getDay()];
        this.dia_4= eldia;

    }     


    llamarTranza(){
        this.WeatherDataProvider.traerFafa()
        return this.WeatherDataProvider.datos;

    }
}
