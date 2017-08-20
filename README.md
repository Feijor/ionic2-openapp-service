# ionic2-openapp-service

Ionic2openappService help you link in app.

## Install

```bash
$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install --save @ionic-native/in-app-browser

$ ionic cordova plugin add cordova-plugin-appavailability
$ npm install --save @ionic-native/app-availability

$ ionic cordova plugin add cordova-plugin-device
$ npm install --save @ionic-native/device
```

## Import directive

Import the service into your app module.

```typescript
import {Ionic2openappService} from "ionic2-openapp-service";

@NgModule({
    declarations: [
        MyApp,
        HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Ionic2openappService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}        
    ]
})
export class AppModule {
}
```

## Usage

Call the method "launchExternalApp".

launchExternalApp(<name-app>,<username>)

## Example

```html

this.Ionic2openappService.launchExternalApp('twitter','ofeijor');

```

## Contribute

Any pull-request and issue is more than welcome.

## License

[The MIT License (MIT) Copyright (c) 2013](http://opensource.org/licenses/MIT) 
 