import { Component, OnInit } from '@angular/core';
import { TODOS } from 'src/app/models/todos.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(private service: TodoService) {}
  message: string;
  title: string;
  todo: TODOS;

  ngOnInit(): void {}
  onSubmit(element: any) {
    this.title = element.value;
    if (this.title.length > 0) {
      this.todo = {
        title: this.title,
        isCompleted: false,
      };
      this.service.createNewTodo(this.todo);
      this.message = '';
      element.value = '';
    } else {
      this.message = 'Error: Enter a Value.';
    }
  }
}
