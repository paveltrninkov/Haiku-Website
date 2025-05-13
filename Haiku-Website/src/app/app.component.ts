import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import data from '../data/data.json'

@Component({
  selector: 'app-root',
  template: `
    @for (line of data[pointer]; track line) {
        <p>
        {{line}}
        </p>
      }
    <button (click)="prev()"><<</button>
    <button (click)="next()">>></button>
  `
})
export class AppComponent {
  title = 'Haiku-Website';
  data = data.data;
  pointer = 2;
  next() {
    this.pointer++;
    if (this.pointer == this.data.length - 1) {
      this.pointer = 0
    }
  }
  prev() {
    this.pointer--;
    if (this.pointer == 0) {
      this.pointer = this.data.length - 1;
    }
  }
}
