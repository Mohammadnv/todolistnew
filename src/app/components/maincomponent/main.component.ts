import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../searchcomponent/search.component';
import { TodoComponent } from "../todolistcomponent/todo.component";

@Component({
    selector: 'main-selector',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss',],
    imports: [SearchComponent, TodoComponent]
})

export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}