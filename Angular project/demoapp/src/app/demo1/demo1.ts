import { Component } from '@angular/core';
import { Demo2 } from '../demo2/demo2';

@Component({
  selector: 'app-demo1',
  imports: [Demo2],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {
}
