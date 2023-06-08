import { Component, OnInit } from '@angular/core';
import { UsersService } from '../app/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userList: any = [];

  constructor(private user: UsersService) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((response) => (this.userList = response));
  }
}
