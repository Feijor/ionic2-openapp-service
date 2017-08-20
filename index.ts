import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { AppAvailability } from '@ionic-native/app-availability';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class Ionic2openappService {

  apps = {
    "facebook": {"ios":'fb://','android':'com.facebook.katana','appurl':'fb://profile/','url':'https://www.facebook.com/'},
    "twitter": {"ios":'twitter://','android':'com.twitter.android','appurl':'twitter://user?screen_name=','url':'https://www.twitter.com/'},
    "linkedin": {"linkedin":'fb://','android':'com.linkedin.katana','appurl':'linkedin://profile/','url':'https://www.linkedin.com/'},
    "instagram": {"ios":'instagram://','android':'com.instagram.katana','appurl':'instagram://user?username=','url':'https://www.instagram.com/'}
  };

  constructor(public platform: Platform, public iab: InAppBrowser, public appAvailability: AppAvailability) {
  }

  launchExternalApp(openapp: string, username: string) {
    let app = this.apps[openapp]

    if(!this.platform.is('cordova')){
      let browser = this.iab.create(app.url + username, '_system');
    }

    this.appAvailability.check((this.platform.is('android') ? app.android : app.ios)).then(
      () => { // success callback
        let browser = this.iab.create(app.appurl  + username, '_system');
      },
      () => { // error callback
        let browser = this.iab.create(app.url + username, '_system');
      }
    );
  }

}
