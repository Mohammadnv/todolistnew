import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from "@angular/forms";
import { TodolistService } from '../../services/todolist/todolist.service';
import { todoitems } from '../../services/todolist/todolist.model';

@Component({
  selector: 'todo-selector',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, ScrollingModule, FormsModule]
})
export class TodoComponent implements OnInit, OnChanges {
  @Input() filtertext: string = "";

  constructor(private todolistservice: TodolistService) {}

  todos: todoitems[] = [];
  taskslist: { title: string, completed: boolean }[] = [];
  filteredTasks: { title: string, completed: boolean }[] = [];
  gettask: string = "";

  ngOnInit() {
    this.loadTasks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.filtertext.trim()) {
      this.filterLocalTasks();
    } else {
      this.filteredTasks = [...this.taskslist];
    }
  }

  loadTasks() {
    const storedTasks: string[] = JSON.parse(localStorage.getItem("task") || "[]");
    this.taskslist = storedTasks.map(task => ({
      title: task,
      completed: false
    }));

    this.filteredTasks = [...this.taskslist];
  }

  handeltasknew() {
    const trimmed = this.gettask.trim();
    if (!trimmed) return;

    this.taskslist.push({ title: trimmed, completed: false });
    this.saveTasksToLocal();
    this.gettask = "";
    this.filteredTasks = [...this.taskslist];
  }

  handeldonetask(index: number) {
    const task = this.filteredTasks[index];

    const realIndex = this.taskslist.findIndex(t => t.title === task.title);
    if (realIndex !== -1) {
      this.taskslist[realIndex].completed = !this.taskslist[realIndex].completed;
      this.filteredTasks[index].completed = this.taskslist[realIndex].completed;
    }

    this.saveTasksToLocal();
  }

  handeldeltetask(index: number) {
    const taskToDelete = this.filteredTasks[index];

    // حذف از لیست اصلی
    this.taskslist = this.taskslist.filter(task => task.title !== taskToDelete.title);

    // آپدیت لیست فیلتر شده
    this.filteredTasks = this.taskslist.filter(task =>
      task.title.toLowerCase().includes(this.filtertext.toLowerCase())
    );

    this.saveTasksToLocal();
  }

  filterLocalTasks() {
    this.filteredTasks = this.taskslist.filter(task =>
      task.title.toLowerCase().includes(this.filtertext.toLowerCase())
    );
  }

  saveTasksToLocal() {
    const taskTitles = this.taskslist.map(task => task.title);
    localStorage.setItem("task", JSON.stringify(taskTitles));
  }
}
