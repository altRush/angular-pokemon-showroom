import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowroomComponent } from './showroom/showroom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowroomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-pokemon-showroom';
}
