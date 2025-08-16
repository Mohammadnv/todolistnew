import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TodoComponent } from "../todolist/todo.component";

@Component({
    selector: 'main-selector',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss',],
    imports: [SearchComponent, TodoComponent]
})

export class MainComponent implements OnInit {

    searchText: string = '';

    onSearchChanged(value: string) {
        this.searchText = value;
        debugger
    }

    constructor() { }

    ngOnInit() { }
}