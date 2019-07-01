import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';

import { Web3ServiceService } from './services/web3-service.service';
import { AuthService } from './services/auth.service';
import { TemplatingService } from './services/templating.service';

import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NewstreamComponent } from './newstream/newstream.component';
import { DrafterComponent } from './drafter/drafter.component';
import { TemplatingComponent } from './templating/templating.component';
import { SafePipe } from './safe.pipe';
import { ViewarticleComponent } from './viewarticle/viewarticle.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavbarComponent,
    RegistrationComponent,
    LoginComponent,
    NewstreamComponent,
    DrafterComponent,
    TemplatingComponent,
    SafePipe,
    ViewarticleComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    Web3ServiceService,
    AuthService,
    TemplatingService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
