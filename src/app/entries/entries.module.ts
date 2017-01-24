import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesComponent } from './entries.component'

import { EntryListComponent } from './entry-list.component'

import { routing } from './entries.routing'


@NgModule({
    declarations: [
        EntriesComponent,
        EntryListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    exports: []
})
export class EntriesModule {
    
}