import { Injectable } from '@angular/core';
import { TODOS } from '../models/todos.model';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Observable<DocumentChangeAction<TODOS>[]>;

  constructor(private firestore: AngularFirestore) {
    this.todos = firestore.collection('todos').snapshotChanges();
  }

  createNewTodo(todo: TODOS) {
    return this.firestore.collection('todos').add(todo);
  }

  getTodos() {
    return this.todos;
  }

  updateTodos(fireID: string, todo: string) {
    this.firestore.doc(`todos/${fireID}`).update(todo);
  }

  deleteTodo(fireID: string) {
    this.firestore.doc(`todos/${fireID}`).delete();
  }
}
