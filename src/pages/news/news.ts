import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
    doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
    public info:string[];


  constructor(public navCtrl: NavController,
              public http: Http,
              public loadingCtrl: LoadingController){
this.presentLoadingCustom();
  }
    
presentLoadingCustom() {
  this.get_news();
  const loading = this.loadingCtrl.create({
    spinner: 'show',
    content: 'Buscado datos del Server...',
    duration: 1000
  });

  loading.onDidDismiss(() => {
    console.log('Dismissed loading');

  });

  loading.present();
}

//http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508154276349&sort=crawled&q=language%3Aspanish%20thread.country%3AAR%20site_category%3Asports
    
async get_news(){
console.log("haciendo noticias")
this.http.get('http://webhose.io/filterWebContent?token=09733bad-5500-4ce3-8e6d-75146faeb598&format=json&ts=1508264932447&sort=published&q=language%3Aspanish%20thread.country%3AAR%20site_category%3Asports&size=10')
    .map(res => res.json())
    .subscribe(
      data => {
        this.info = data;
        console.log(this.info);
      },err => {
          console.log("Mamaaa cortastes toda la loz!");
      }
    );    
    
    
    
    
}       
    
}
