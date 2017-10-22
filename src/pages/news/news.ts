import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
    public info:string[];
    public newstag;
    public tag;


  constructor(public navCtrl: NavController,
              public http: Http,
              public loadingCtrl: LoadingController,
            public events: Events,){
this.presentLoadingCustom();
events.subscribe('Seleccionado', (tag) => {
    //console.log(item.replace(' ', ''));
    this.newstag=tag;
    console.log("evento cazo: "+this.newstag)
    this.presentLoadingCustom();
  });  
  }
    
    
    
    
doRefresh(refresher) {
 console.log('Begin async operation', refresher);
    this.get_news();
  setTimeout(() => {
    console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }    
    
    
presentLoadingCustom() {
  this.get_news();
  const loading = this.loadingCtrl.create({
    spinner: 'ios',
    content: 'Buscado datos del Server...',
    duration: 3000
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');

  });

  loading.present();
}

    
    
    
    
    
    
    
    
    
//http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508154276349&sort=crawled&q=language%3Aspanish%20thread.country%3AAR%20site_category%3Asports


async get_news(){
console.log("haciendo noticias")
if(this.newstag=="Deportes y Clima"){
console.log("Noticias Default")
this.http.get('http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508264700420&sort=published&q=language%3Aspanish%20thread.country%3AAR%20(site_category:sports%20OR%20site_category:weather%20OR%20site_category:world_soccer)&latest=true&size=11')
.map(res => res.json())
.subscribe(data => {this.info = data;
                        console.log(this.info);}
                        ,err => {
          console.log("Mamaaa cortastes toda la loz!");}
    );    
    
   }
else if(this.newstag=="Noticias"){
console.log("Elegio Normal")
this.http.get('http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508599518358&sort=published&q=language%3Aspanish%20thread.country%3AAR%20site_category%3Abusiness&latest=true&size=11')
.map(res => res.json())
.subscribe(data => {this.info = data;
                        console.log(this.info);}
                        ,err => {
          console.log("Mamaaa cortastes toda la loz!");}
    );    
    
    

}
else if(this.newstag=="Musica"){
this.http.get('http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508599911691&sort=published&q=language%3Aspanish%20thread.country%3AAR%20site_category%3Amusic&latest=true&size=11')
.map(res=> res.json())
.subscribe(data => {this.info = data;
                   console.log(this.info);}
          ,err =>{
    console.log("mama cortazte la loz")
});

}
else{
console.log("No hay tag voy else")
this.http.get('http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508264700420&sort=published&q=language%3Aspanish%20thread.country%3AAR%20(site_category:sports%20OR%20site_category:weather%20OR%20site_category:world_soccer)&latest=true&size=11')
.map(res => res.json())
.subscribe(data => {this.info = data;
                        console.log(this.info);}
                        ,err => {
          console.log("Mamaaa cortastes toda la loz!");}
    );    
    
    
}

    
    
}      

    
    
}
