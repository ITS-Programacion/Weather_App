import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ActionSheetController } from 'ionic-angular'

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage  {
    items: string[];
    public item;
    public ciudad;
    tags:string[];
    public eltag;

    constructor(public navCtrl: NavController,
                 public events: Events,
                 public actionSheetCtrl:ActionSheetController){
        this.initializeItems();
        this.item;
    }

    onChange(item){
        this.events.publish('ciudad', item);
        this.switchTabs();

    }
    
    onChange2(tag){
        this.events.publish('Seleccionado', tag);
        this.switchTabs2();
        console.log('eligio'+tag)
    } 

    switchTabs() {
        this.navCtrl.parent.select(1);
    }
    
    switchTabs2() {
        this.navCtrl.parent.select(0);
    }      

    initializeItems() {
        this.items = [
            'Cordoba',
            'Villa Allende',
            'Mendoza',
            'La Plata',
            'Rosario',
            'Posadas',
        ];
        this.tags =[
            'Deportes y Clima',
            'Noticias',
            'Musica',

        ]
    }




}

