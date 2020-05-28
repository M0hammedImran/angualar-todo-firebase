import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { TODOS } from '../../models/todos.model';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.scss'],
})
export class TodoListItemsComponent implements AfterViewChecked {
  @Input() todo: TODOS;
  @ViewChild('tref', { read: ElementRef }) tref: ElementRef;
  constructor() {}

  ngAfterViewChecked(): void {
    this.tref.nativeElement.checked = this.todo.iscompleted;
  }

  setClasses() {
    const classes = {
      'is-complete': this.todo.iscompleted,
    };

    return classes;
  }

  onToggle(todo: any) {
    this.todo.iscompleted = !todo.iscompleted;
  }

  onDelete(todo: any) {
    console.log('delete');
  }
}
