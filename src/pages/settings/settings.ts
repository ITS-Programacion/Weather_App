import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
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
} 
    
initializeItems() {
    this.items = [
      'Villa Allende',
      'Cordoba',
      'Buenos Aires, La Plata',
      'Cordoba, La Calera',
      'Cordoba, Mendiolaza',
      'Misiones, Posadas',
    ];
  }

}