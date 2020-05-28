import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { TODOS } from '../../models/todos.model';
import { TodoService } from 'src/app/services/todo.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.scss'],
})
export class TodoListItemsComponent implements AfterViewChecked {
  @Input() todo: TODOS;
  @ViewChild('tref', { read: ElementRef }) tref: ElementRef;
  constructor(private firestore: AngularFirestore) {}

  ngAfterViewChecked(): void {
    this.tref.nativeElement.checked = this.todo.isCompleted;
  }

  setClasses() {
    const classes = {
      'is-complete': this.todo.isCompleted,
    };

    return classes;
  }

  onToggle(todo: any) {
    this.firestore.collection('todos').doc(this.todo.fireID).update({
      isCompleted: !this.todo.isCompleted,
    });
    this.todo.isCompleted = !todo.isCompleted;
  }

  onDelete(todo: any) {
    console.log('delete');
  }
}
