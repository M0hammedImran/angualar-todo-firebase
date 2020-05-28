import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../models/todos';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TODOS[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'something',
        iscompleted: false,
      },
      {
        id: 2,
        title: 'something else',
        iscompleted: true,
      },
      {
        id: 3,
        title: 'todo something',
        iscompleted: false,
      },
      {
        id: 4,
        title: 'todo something else',
        iscompleted: true,
      },
    ];
  }
}
