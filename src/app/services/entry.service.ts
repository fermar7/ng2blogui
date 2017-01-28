import { ListEntry } from './list-entry'

export class EntryService {

    dummyDB : ListEntry[] = [
                    {title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"}
                    ,{title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"},
                    {title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"},
                    {title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"},
                    {title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"}
                    ,{title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"},
                    {title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"},
                    {title: 'Title', author: 'Author', description: 'Jo'},
                    {title: 'AnotherTitle', author: 'AnotherAuthor', description: 'HeyHo'},
                    {title: "Hey", author: "TheAuthor", description: "test"}
                ]


    getEntries(page: number) : ListEntry[] {

        return this.dummyDB.filter((value, index) => index + 1 > (page - 1) * 10 && index < (10 * page));

        //return this.dummyDB.splice(0, 10);
    }

    getPageCount() : number[] {
        let pageCount = Math.ceil(this.dummyDB.length / 10);
        
        return Array(pageCount).fill(pageCount).map((x, i) => i + 1)
    }


}