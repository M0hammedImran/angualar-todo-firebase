import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { TodoService } from './services/todo.service';

import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { HeaderComponent } from './component/header/header.component';
import { TodoListItemsComponent } from './component/todo-list-items/todo-list-items.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { ActionButtonsComponent } from './component/action-buttons/action-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoListItemsComponent,
    AddTodoComponent,
    ActionButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'todos'),
    AngularFireDatabaseModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
