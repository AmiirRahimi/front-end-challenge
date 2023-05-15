import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: [] = []

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.getUsersList()
  }  

  getUsersList(){
    this.userService.getUsersList().subscribe(res => {
      this.users = res
      console.log(res);
      
    })
  }
}
