import { ListEntry } from './list-entry'

export class EntryService {

    getEntries() : ListEntry[] {
        return [
            {title: 'Title', author: 'Author', description: 'Jo'},
            {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'AnotherJo'}
        ]
    }


}