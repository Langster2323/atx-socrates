import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users$: User[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    return this.userService.getUsers().subscribe(user => this.users$ = user);
  }
}
