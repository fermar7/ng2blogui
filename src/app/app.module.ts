import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { routing } from './app.routing'

import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppCommonModule } from './common/app-common.module'
import { SidebarModule } from './sidebar/sidebar.module'

import {EntryService} from './services/entry.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppCommonModule,
    SidebarModule,
    RouterModule,
    routing
  ],
  providers: [
    EntryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
