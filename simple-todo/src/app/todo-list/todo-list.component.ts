import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'] // <-- Corrected this
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) {
      this.newTask = '';
     return;
    }

    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // <-- Corrected this
  }
}
