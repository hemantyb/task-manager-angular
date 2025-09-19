import { Component, computed, inject, signal } from '@angular/core';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Task } from './services/task';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-task-manager');
  taskService = inject(Task);

  private tasks = this.taskService.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'Todo');
  });

  inProgressItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'InProgress');
  });

  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'Completed');
  });
}
