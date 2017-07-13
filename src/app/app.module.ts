import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Header_Contents_Component } from "./layout/header_contents.component";
import { MdMenuTestComponent } from "./test/MdMenuTest/MdMenuTest.component";

import { AppRoutingModule } from "./app.routing";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdCommonModule
  ,MdMenuModule
  ,MdButtonModule
} from "@angular/material";

import 'hammerjs';


@NgModule({
  declarations: [
      AppComponent
    , Header_Contents_Component
    , MdMenuTestComponent
  ],
  imports: [

    BrowserModule
    , FormsModule
    , HttpModule
    , AppRoutingModule
    , MdCommonModule
    , MdMenuModule
    , MdButtonModule
    , BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
