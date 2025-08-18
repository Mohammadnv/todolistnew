import { Component, EventEmitter, OnInit, Output, Signal, signal } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TodoComponent } from '../todolist/todo.component';





@Component({
    selector: 'main-selector',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss',],
    imports: [SearchComponent, TodoComponent,]
})

export class MainComponent implements OnInit {

    searchText: string = '';
    ispopupopen = false;

    openpopup(){
        this.ispopupopen = true;
    }

    closepopup(){
        this.ispopupopen = false
    }

    onSearchChanged(value: string) {
        this.searchText = value;
        debugger
    }

    adddata(){
        
    }

    constructor() { }

    ngOnInit() { }


}