import { Component } from '@angular/core';

import { WeatherPage } from '../weather/weather';
import { SettingsPage } from '../settings/settings';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = WeatherPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
