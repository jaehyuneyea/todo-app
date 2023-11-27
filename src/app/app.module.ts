import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"todo-list-test-app-b7446","appId":"1:679799246674:web:1aabbd5a7f21207f0d348b","storageBucket":"todo-list-test-app-b7446.appspot.com","apiKey":"AIzaSyA5DBqX3qTzxgcM_s_elS1XzHV1ybn6Ri4","authDomain":"todo-list-test-app-b7446.firebaseapp.com","messagingSenderId":"679799246674"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
