import { Component, inject } from '@angular/core';
import { Firestore, query, collection, collectionData, orderBy, addDoc, CollectionReference } from '@angular/fire/firestore';
import { NgForm }from '@angular/forms'
import {v4 as uuidv4} from 'uuid'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

import { Task } from './task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  private firestore: Firestore = inject(Firestore);
  tasks$: Observable<Task[]>;
  taskCollection: CollectionReference;

  addTask(taskForm: NgForm) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    let task = new Task(timestamp, uuidv4(), taskForm.value.description, false);
    let temp = Object.assign({}, task);

    addDoc(this.taskCollection, <Task> temp);
  }

  constructor() {
    this.taskCollection = collection(this.firestore, 'tasks');
    const ref = query(
      this.taskCollection,
      orderBy("createdAt")
    );
    this.tasks$ = collectionData(ref) as Observable<Task[]>;
  }

}
