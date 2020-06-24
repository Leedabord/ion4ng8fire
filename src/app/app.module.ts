import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
/*
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';  
// , FirestoreSettingsToken
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { FirebaseAuthService } from './firebase-auth.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2aPage } from './tab2a/tab2a.page';
// import { NewTaskModalPage } from './new-task-modal/new-task-modal.page';

@NgModule({
  declarations: [ AppComponent, Tab2aPage ],
  entryComponents: [ Tab2aPage ],
  // declarations: [AppComponent, NewTaskModalPage],
  // entryComponents: [NewTaskModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule, // firestore
    AngularFireStorageModule, // storage
    FormsModule,
    ReactiveFormsModule
],
  providers: [
    FirebaseAuthService,
//    StatusBar,
//    SplashScreen,
//    ImagePicker,
//    WebView,
//    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
