import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { routing } from './app.routing'

import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CommonModule } from './common/common.module'
import { SidebarModule } from './sidebar/sidebar.module'
import { EntriesModule } from './entries/entries.module'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    SidebarModule,
    RouterModule,
    EntriesModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
