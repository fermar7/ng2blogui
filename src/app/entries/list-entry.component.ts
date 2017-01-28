import { Component, Input, trigger, state, style, transition, animate } from '@angular/core'

import { ListEntry } from '../services/list-entry'

@Component({
    selector: 'list-entry',
    template: `

        <div class="media entry" [@hoverState]="entryState" (mouseenter)="entryState = 'on'" (mouseleave)="entryState = 'off'">
            <div class="media-left">
                
                <img class="media-object" src="/assets/images/What-Salt-Bae-Meme.jpg" alt="...">
               
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ ix + 1 }} {{ entry.title }}</h4>
                {{ entry.description }}
                <div class="author">By: {{ entry.author }}</div>
            </div>
        </div>
    `,
    styles: [`
        .author {
            color: #aaa;
            font-style:italic;
            padding-top: 10px;
        }

        .entry {
            margin-top: 2px;
            margin-bottom: 2px;
            border: 1px solid #eee;
            //cursor: pointer;
        }
    `],
    animations: [
        trigger('hoverState', [
            state('on', style({
                border: '1px solid #8cb8ff'
            })),
            state('off', style({
                border: '1px solid #eee'
            })),
            transition('off=>on', animate('100ms ease-in')),
            transition('on=>off', animate('100ms ease-out'))
        ])
    ]
})
export class ListEntryComponent {

    @Input() entry: ListEntry;

    @Input() ix: number;

    entryState: string = 'off';

   

}