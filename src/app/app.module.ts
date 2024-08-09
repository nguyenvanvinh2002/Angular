import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './conponents/login/login.component';
import { HomeComponent } from './conponents/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListCategoriesComponent } from './conponents/list-categories/list-categories.component';
import { register } from 'swiper/element/bundle';

register();







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListCategoriesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
