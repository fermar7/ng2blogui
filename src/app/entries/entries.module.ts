import { NgModule } from '@angular/core'
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesComponent } from './entries.component'
import { routing } from './entries.routing'


@NgModule({
    declarations: [
        EntriesComponent
    ],
    imports: [
        routing
    ],
    exports: []
})
export class EntriesModule {
    
}