import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todoitems } from './todolist.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodolistService {
  constructor(private http: HttpClient) { }

  gettodolist(): Observable<todoitems[]> {
    const todolistapi = 'https://dummyjson.com/todos';

    return this.http.get<{ todos: todoitems[] }>(todolistapi).pipe(
      map(response => response.todos)
    );
  }

  addtotodolist(newTask: Partial<todoitems>): Observable<todoitems> {
  const addtaskapi = 'https://dummyjson.com/todos/add';
  return this.http.post<todoitems>(addtaskapi, newTask);
}


}

