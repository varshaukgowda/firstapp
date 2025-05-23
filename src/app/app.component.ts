import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  //  THIS tells Angular to use <app-root>
  imports: [HeaderComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users=DUMMY_USERS;
}
// So when Angular sees <app-root></app-root> in index.html, it:
// Finds the AppComponent class.
// Loads its HTML (from app.component.html).
// Replaces <app-root> with that HTML.

