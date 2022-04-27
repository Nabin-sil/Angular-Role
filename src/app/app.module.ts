import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './components/home';
import { AdminComponent } from './admin';
import { LoginComponent } from './components/login';;
import { NavigationComponent } from './components/navigation/navigation.component'
;
import { RegisterComponent } from './components/register/register.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { SidenavComponent } from './components/sidenav/sidenav.component'

import { ToastrModule } from 'ngx-toastr';;
import { ProfileComponent } from './components/profile/profile.component'
// For MDB Angular Free
import {  CarouselModule, ModalModule } from 'angular-bootstrap-md'
;
import { SettingComponent } from './components/setting/setting.component'
;
import { CreateComponent } from './components/create/create.component'
;
import { ReadComponent } from './components/read/read.component';
import { ApiService } from './_services';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        NavigationComponent,
        RegisterComponent,
        SidenavComponent,
        ProfileComponent,
        SettingComponent
,
        CreateComponent
,
        ReadComponent,
     ],

        imports: [
            BrowserModule,
            ReactiveFormsModule,
            HttpClientModule,
            AppRoutingModule,
            NgbModule,
            MDBBootstrapModule.forRoot(),
            ToastrModule.forRoot(), 
            BrowserAnimationsModule,
            ButtonsModule,
            WavesModule,
            NavbarModule,
            CarouselModule,
            ModalModule
            
        ],

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider , 
    ],
    bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})

export class AppModule { }