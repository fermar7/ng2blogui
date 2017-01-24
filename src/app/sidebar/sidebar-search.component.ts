import { Component } from '@angular/core'

@Component({
    selector: 'sidebar-search',
    template: `
        <div class="input-group searchbar">
        <input type="text" class="form-control" placeholder="Search for...">
        <span class="input-group-btn">
            <button class="btn btn-default" type="button">
            <i class="fa fa-search" aria-hidden="true"></i>
            </button>
        </span>
        </div>
    `,
    styles: [`
        .searchbar {
            margin-top: 20px;
        }
    `]
})
export class SidebarSearchComponent {

}