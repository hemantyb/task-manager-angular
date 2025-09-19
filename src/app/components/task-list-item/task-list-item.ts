import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.html',
})
export class TaskListItem {
  taskItem = input.required<TaskItem>();
  statusValue = ['Todo', 'InProgress', 'Completed'];
  taskService = inject(Task);

  action = computed(() => {
    const taskItemValue = this.taskItem();
    return this.statusValue.filter((x) => taskItemValue.status !== x);
  });

  markAs(text: string, updatedStatus: string) {
    this.taskService.markAsStatus(text, updatedStatus);
  }
}
