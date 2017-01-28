import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './navbar.component'
import { PageNotFoundComponent } from './page-not-found.component'

@NgModule({
    declarations: [
        NavBarComponent,
        PageNotFoundComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class AppCommonModule { }