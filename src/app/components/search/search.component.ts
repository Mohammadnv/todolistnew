import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { TodolistService } from '../../services/todolist/todolist.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopupService } from '../../services/pop-up/popup.service';

@Component({
    selector: 'search-selector',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    imports: [FormsModule, CommonModule,]
})

export class SearchComponent implements OnInit {
    todo: any;
    currentTime:string =''

    @Output() searchchanged = new EventEmitter<string>();
    searchvalue: string = ""


    constructor( private popupservice : PopupService) { setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
    }, 1000);
  
}

    openform(){
        this.popupservice.openpopup();
    }

    searchbtn() {
        this.searchchanged.emit(this.searchvalue)
        debugger
    }
    

    today = new Date()

     
  
    

    ngOnInit() { }
}