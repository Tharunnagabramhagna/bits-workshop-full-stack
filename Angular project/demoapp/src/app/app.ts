import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo1 } from './demo1/demo1';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Demo1,UpperCasePipe,LowerCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demoapp');
  name = "I'm Tharun";
  check = true;
}