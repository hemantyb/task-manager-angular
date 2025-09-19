import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
})
export class TaskList {
  heading = input.required<string>();
}
