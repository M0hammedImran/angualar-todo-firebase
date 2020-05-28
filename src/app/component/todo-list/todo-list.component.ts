import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../models/todos.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TODOS[];
  data: any;
  constructor(
    private service: TodoService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.firestore
      .collection('todos')
      .doc('user')
      .snapshotChanges()
      .subscribe((item) => {
        console.log(item.payload.data());
      });

    this.todos = [
      {
        id: '1',
        title: 'something',
        iscompleted: false,
      },
    ];
  }
}
