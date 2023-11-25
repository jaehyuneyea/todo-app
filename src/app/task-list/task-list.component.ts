import { Component } from '@angular/core';

import {Task} from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  rando = Math.random();
  tasks: Task[];

  constructor() {
    this.tasks = [new Task("this is my first task", false), new Task("this is my second task", false)];
  }
}
