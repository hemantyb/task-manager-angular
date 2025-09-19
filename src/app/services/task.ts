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

  markAsStatus(text: string, updatedStatus: string) {
    this.tasks.update((prev) => {
      const findTask = prev.find((x) => x.task === text);

      if (findTask) {
        return [...prev.filter((x) => x.task !== text), { task: text, status: updatedStatus }];
      } else {
        return prev;
      }
    });
  }
}
