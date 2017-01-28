import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { EntriesComponent } from './entries/entries.component'
import { PageNotFoundComponent } from './common/page-not-found.component'

const routes : Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'entries', loadChildren: 'app/entries/entries.module#EntriesModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**',   component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);