import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Locations } from '../providers/locations';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    MapPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    MapPage,
    ListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Locations, GoogleMaps, Connectivity]
})
export class AppModule {}
