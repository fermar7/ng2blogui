import { NgModule } from '@angular/core'
import { SidebarSearchComponent } from './sidebar-search.component'


@NgModule({
    declarations: [  
        SidebarSearchComponent
    ],
    exports: [
        SidebarSearchComponent
    ]
})
export class SidebarModule {}