import { Component,OnInit } from '@angular/core'
import { ListEntry } from '../services/list-entry'
import { EntryService } from '../services/entry.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'entry-list',
    templateUrl: './entry-list.component.html',
    styles: [`
        ul {
            padding: 2px;
        }

        .pagination {
            padding: 0px;
            margin: 0px;
            
        }

        .active {
            background-
        }
    `]
})
export class EntryListComponent implements OnInit {

    entries: ListEntry[];
    pages: number[];

    currPage: number;
    nextPage: number;
    prevPage: number;

    isLoading: boolean;


    constructor(
        private _entryService: EntryService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
            this.isLoading = true;
    }

    ngOnInit() {
        this._activatedRoute.queryParams
            .subscribe((params: Params) => {
                
                this.isLoading = true;

                if(params['page']) {
                    this.currPage = +params['page'];
                } else {
                    this.currPage = 1;
                }

                

                this.entries = this._entryService.getEntries(this.currPage);
                this.pages = this._entryService.getPageCount();

                this.nextPage = this.currPage < this.pages.length ? this.currPage + 1 : this.currPage;
                this.prevPage = this.currPage > 1 ? this.currPage - 1 : this.currPage;

                this.isLoading = false;
            });
    }

}