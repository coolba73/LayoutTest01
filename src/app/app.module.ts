import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Layout01Component } from "./layout/layout01.component";
import { Layout02Component } from "./layout/layout02.component";
import { Header_Contents_Component } from "./layout/header_contents.component";
import { header_contents_menu_Component } from "./layout/header_contents_menu.component";

import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    Layout01Component,
    Layout02Component,
    Header_Contents_Component,
    header_contents_menu_Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
