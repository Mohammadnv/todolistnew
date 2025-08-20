import { Component, Input, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodolistService } from '../../services/todolist/todolist.service';
import { todoitems } from '../../services/todolist/todolist.model';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from "@angular/forms";
import { PopupService } from '../../services/pop-up/popup.service';

@Component({
    selector: 'todo-selector',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss'],
    imports: [MatCardModule, CommonModule, ScrollingModule, FormsModule]
})


export class TodoComponent implements OnInit {

    @Input() filtertext: string = ""


    constructor(private todolistservice: TodolistService, private popupservice: PopupService) { }

    items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    todos: todoitems[] = []
    filtertodos: todoitems[] = []
    activ: boolean = true
    alltsks: number = 0;
    comtasks: number = 0;
    newuserid: number = 0;
    newusertask: string = ''
    deletetask: todoitems[] = []

    ngOnInit() {
        this.todolistservice.gettodolist().subscribe((data: todoitems[]) => {
            //console.log(data)
            this.todos = data;
            this.filtertodos = data
            this.alltsks = this.todos.length;
            this.comtasks = this.todos.filter(todo => todo.completed).length;
        })
        this.popupservice.popup$.subscribe(() => {
            this.isopenpopup = true;
        })

    }

    adddingtask() {
        const newTask = {
            todo: this.newusertask,
            completed: false,
            userId: this.newuserid
        };

        this.todolistservice.addtotodolist(newTask).subscribe({
            next: (data: todoitems) => {
                console.log('Task added:', data);
                this.todos.push(data);
                this.filtertodos = this.todos;
                this.alltsks = this.todos.length;
                this.comtasks = this.todos.filter(todo => todo.completed).length;
            },
            error: (err) => {
                console.error('خطا در افزودن تسک:', err);
            }
        });
    }

    alltasksonclick() {
        debugger
        this.activ
        this.filtertodos = this.todos
    }

    completedonclick() {
        debugger
        console.log("test1")
        this.filtertodos = this.todos.filter(todo => todo.completed)
    }

    isopenpopup: boolean = false;

    openpopup() {
        this.isopenpopup = true
    }

    closepopup() {
        this.isopenpopup = false
    }

    handeltasksstatus(todo: todoitems) {
        todo.completed = true;

        this.comtasks = this.todos.filter(i => i.completed).length
        this.filtertodos = [...this.todos]
    }

    handeldeletetask() {
        this.deletetask = this.todos.filter(x => x.todo)
        this.filtertodos = this.deletetask
    }


    ngOnChanges() {
        this.filtertodos = this.todos.filter(todo => todo.todo.toLowerCase().includes(this.filtertext.toLowerCase()))
        console.log(this.filtertodos)
    }

    showpopup = false


}