import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { TODOS } from 'src/app/models/todos.model';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss'],
})
export class ActionButtonsComponent implements OnInit {
  constructor(
    private service: TodoService,
    private firebase: AngularFirestore
  ) {}

  // todo: TODOS = {
  //   isCompleted: true,
  // };

  ngOnInit(): void {}

  removeAll() {
    this.service.deleteAll();
  }

  allDone() {
    this.firebase
      .collection('todos')
      .get()
      .subscribe((todos) => {
        // console.log(todos);
        todos.forEach((item) => {
          // console.log(item.id);
          this.service.updateTodos(item.id, { isCompleted: true });
        });
      });
  }
}
