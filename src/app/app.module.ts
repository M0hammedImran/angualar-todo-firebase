import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { HeaderComponent } from './component/header/header.component';
import { TodoListItemsComponent } from './component/todo-list-items/todo-list-items.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { todoService } from './services/todo.service';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    TodoListItemsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'todos'),
    AngularFireDatabaseModule,
  ],
  providers: [todoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
