import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage  {
items: string[];
public selected:String;
public item;
public ciudad;

constructor(public navCtrl: NavController,public events: Events){
this.initializeItems();
this.item;
}

onChange(item){
    this.ciudad=this.item;
    this.events.publish('ciudad', item);
    this.switchTabs();

} 
    
    
switchTabs() {
  this.navCtrl.parent.select(1);
}    
    
initializeItems() {
    this.items = [
      'Cordoba',
      'Villa Allende, Cordoba',
      'Mendoza',
      'La Plata, Buenos Aires',
      'Rosario',
      'Misiones, Posadas',
    ];
  }
  
    
    
}

