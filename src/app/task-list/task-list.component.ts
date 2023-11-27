import { Component, inject } from '@angular/core';
import { Firestore, query, collection, collectionData, orderBy } from '@angular/fire/firestore';

import {Task} from './task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  private firestore: Firestore = inject(Firestore);
  rando = Math.random();
  tasks$: Observable<Task[]>;

  constructor() {
    const ref = query(
      collection(this.firestore,'tasks'),
      orderBy("createdAt")
    );
    this.tasks$ = collectionData(ref) as Observable<Task[]>;
  }
}
