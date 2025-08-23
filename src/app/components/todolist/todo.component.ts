import { Component, Input, input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TodolistService } from '../../services/todolist/todolist.service';
import { todoitems } from '../../services/todolist/todolist.model';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from "@angular/forms";
import { PopupService } from '../../services/pop-up/popup.service';
import { SearchComponent } from "../search/search.component";


@Component({
    selector: 'todo-selector',
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.scss'],
    imports: [MatCardModule, CommonModule, ScrollingModule, FormsModule, SearchComponent]
})


export class TodoComponent implements OnInit {
    addNewTask($event: Event) {
        throw new Error('Method not implemented.');
    }

    @Input() filtertext: string = ""


    constructor(private todolistservice: TodolistService, private popupservice: PopupService) {

        const taskoflocal = JSON.parse(localStorage.getItem("tasks") || "[]")

    }

    items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    todos: todoitems[] = []
    filtertodos: todoitems[] = []
    activ: boolean = true
    alltsks: number = 0;
    comtasks: number = 0;
    newuserid: number = 0;
    newusertask: string = ''
    deletetask: todoitems[] = []
    taskslist: string[] = []
    tasknew: string = ""

    gettask: string = ""

    tstinput: string[] = []

    ngOnInit() {

        this.loadTasks()

        this.todolistservice.gettodolist().subscribe((data: todoitems[]) => {
            //console.log(data)
            this.todos = data;
            this.filtertodos = data
            this.alltsks = this.todos.length;
            this.comtasks = this.todos.filter(todo => todo.completed).length;
        })


    }




    loadTasks() {
        const stordtask = JSON.parse(localStorage.getItem("task") || "[]")
        this.taskslist = stordtask
    }

    handeltasknew() {
        const extratask = JSON.parse(localStorage.getItem('task') || "[]")
        if (this.gettask.trim()) {
            extratask.push(this.gettask.trim())
            localStorage.setItem("task", JSON.stringify(extratask))
            this.gettask = ""
            this.loadTasks()
        }

    }



    ngOnChanges() {
        this.filtertodos = this.todos.filter(todo => todo.todo.toLowerCase().includes(this.filtertext.toLowerCase()))
        console.log(this.filtertodos)
    }




}