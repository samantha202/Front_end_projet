import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './views/navigation/navigation.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SearchrComponent } from './views/searchr/searchr.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AchatComponent } from './views/achat/achat.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {NgxStripeModule } from "ngx-stripe";
import {NgxWebstorageModule} from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    SearchrComponent,
    AchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    GooglePlaceModule,
    NgxWebstorageModule.forRoot(),
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_51IbmXgDHFVIVSFomcH3KsE2Oo1ofJFAjowTVbektCku0K91PjnTOfarXkC82nBMXLYGYUYZtiAursVeUajLlTMfY009K7T2PgM'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2cPvVFGpXFhzNgEYoqrrGgZ-MW8ZDWQo'
     }),
    NgbModule,
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
 }
