import { Component,OnInit } from '@angular/core'
import { ListEntry } from '../services/list-entry'
import { EntryService } from '../services/entry.service'

@Component({
    selector: 'entry-list',
    templateUrl: './entry-list.component.html'
})
export class EntryListComponent implements OnInit {

    entries: ListEntry[];

    constructor(private _entryService: EntryService) {
        
    }

    ngOnInit() {
        this.entries = this._entryService.getEntries();
    }

}