import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../models/todos.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TODOS[];
  data: any;
  constructor(private service: TodoService) {}

  async ngOnInit() {
    this.service.getTodos().subscribe((todos) => {
      this.todos = todos.map((todo) => {
        const { id, isCompleted, title } = todo.payload.doc.data();

        return {
          fireID: todo.payload.doc.id,
          id,
          title,
          isCompleted,
        };
      });
    });
  }
}
