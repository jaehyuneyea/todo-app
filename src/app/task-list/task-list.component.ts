import { Component, inject } from '@angular/core';
import { Firestore, query, collection, collectionData, orderBy, addDoc, CollectionReference, serverTimestamp, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { NgForm }from '@angular/forms'

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
    const timestamp = serverTimestamp();
    let task = {
      createdAt: timestamp, 
      description: taskForm.value.description, 
      isDone: false
    };
    addDoc(this.taskCollection, task);
    taskForm.resetForm();
  }

  async updateTask(id: string, isDone: boolean) {
    const ref = doc(this.firestore, 'tasks', id);
    const updatedData = {
      isDone: !isDone
    }
    updateDoc(ref, updatedData);
  }

  deleteTask(id: string) {
    const ref = doc(this.firestore, 'tasks', id);
    deleteDoc(ref);
  }

  constructor() {
    this.taskCollection = collection(this.firestore, 'tasks'), { idField: 'id'};
    const ref = query(
      this.taskCollection,
      orderBy("createdAt")
    );
    this.tasks$ = collectionData(ref, { idField: 'id' }) as Observable<Task[]>;
  }
}
