import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesComponent } from './entries.component'

const routes: Routes = [
  { path: '', component: EntriesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)