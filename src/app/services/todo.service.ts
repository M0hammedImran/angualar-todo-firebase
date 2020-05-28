import { Injectable } from '@angular/core';
import { TODOS } from '../models/todos.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Observable<TODOS[]>;

  constructor(private firestore: AngularFirestore) {
    this.todos = firestore.collection('todos').valueChanges();
  }

  createNewTodo(todo: TODOS) {
    return this.firestore.collection('todos').add(todo);
  }

  getTodos() {
    return this.todos;
  }

  updateTodos(todoID: string, todo: string) {
    this.firestore.doc(`todos/${todoID}`).update(todo);
  }

  deleteTodo(todoID: string) {
    this.firestore.doc(`todos/${todoID}`).delete();
  }
}
