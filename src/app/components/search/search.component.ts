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
    currentTime: string = ''
    today = new Date()
    time = new Date
    currentDate: string = ''



    @Output() searchchanged = new EventEmitter<string>();
    searchvalue: string = ""



    handellivesearch() {
        this.searchchanged.emit(this.searchvalue)
        
    }







    ngOnInit() {

        setInterval(() => {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString("fa-IR")
        }, 1000);

        this.currentDate = this.today.toLocaleDateString('fa-IR');

    }



}