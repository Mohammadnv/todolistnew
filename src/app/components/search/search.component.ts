import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { TodolistService } from '../../services/todolist/todolist.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'search-selector',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    imports: [FormsModule, CommonModule,]
})

export class SearchComponent implements OnInit {
todo: any;
convertToJalali(arg0: any) {
throw new Error('Method not implemented.');
}

    @Output() searchchanged = new EventEmitter<string>();
    searchvalue: string = ""


    constructor() { }

    searchbtn() {
        this.searchchanged.emit(this.searchvalue)
        debugger
    }

    today = new Date()

    ngOnInit() { }
}