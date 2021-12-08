import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NinjagoldComponent } from './ninjagold/ninjagold.component';
import {GoldService} from './ninjagold/gold.service';

@NgModule({
  declarations: [
    AppComponent,
    NinjagoldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }