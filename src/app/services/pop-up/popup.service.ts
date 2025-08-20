import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PopupService {
    constructor() { }
    
    private popuptriger = new Subject<void>();
    
    popup$ = this.popuptriger.asObservable();

    openpopup(){
        this.popuptriger.next();
    }
}