import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComp1 } from './component/databinding-comp1/databinding-comp1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComp1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng_learner');
}
