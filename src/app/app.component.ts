import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastrComponent } from './components/toastr/toastr.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ToastrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '2b-task';
}
