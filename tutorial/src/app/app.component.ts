import { Component, ViewChild  } from '@angular/core';
import { Platform, MenuController, Nav  } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';



import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { MapPage } from '../pages/map/map';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // rootPage = TabsPage;
  //
  // constructor(platform: Platform) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     StatusBar.styleDefault();
  //     Splashscreen.hide();
  //   });
  // }

  // make UsersPage the root (or first) page
  @ViewChild(Nav) nav: Nav;
  rootPage: any = UsersPage;
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage },
      { title: 'Organisations', component: OrganisationsPage },
      { title: 'MapPage', component: MapPage },
      { title: 'ListPage', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
