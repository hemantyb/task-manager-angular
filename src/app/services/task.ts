import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item';

@Injectable({
  providedIn: 'root',
})
export class Task {
  tasks = signal<TaskItem[]>([]);

  addTask(task: string, status: string) {
    this.tasks.update((prev) => {
      return [...prev, { task, status }];
    });
  }
}
