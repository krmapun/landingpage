import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BodyComponent } from './shared/body/body.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Content1Component } from './shared/content1/content1.component';
import { Content3Component } from './shared/content3/content3.component';
import { Content2Component } from './shared/content2/content2.component';
import { Content4Component } from './shared/content4/content4.component';

// Importar HttpClientModule para la peticion HTTP
import {HttpClientModule} from '@angular/common/http';

// Services
import {DataSwapiService} from './services/data-swapi.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    Content1Component,
    Content3Component,
    Content2Component,
    Content4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // cargamos el módulo en el array de imports
  ],
  providers: [DataSwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
