import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: number = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounterStatus(): string {
    if (this.counter > 0) {
      return 'positive';
    } else if (this.counter === 0) {
      return 'neutral';
    } else {
      return 'negative'; // fixed typo here
    }
  }
}
