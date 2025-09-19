import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
})
export class TaskForm {
  taskService = inject(Task);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),
    status: new FormControl('Todo', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    const rawValue = this.taskForm.getRawValue();
    this.taskService.addTask(rawValue.task, rawValue.status);

    this.taskForm.reset();
  }
}
