import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  users: Array<any> = []
  filteresUsers: Array<any> = []
  searchValue: any = ''
  items: Array<string> = ['amir']
  sidebarVisible!: boolean
  genderForm!: FormGroup
  checked: boolean = true
  gender: [] = []
  ageText: string = ''
  ageNumber: number = 0

  constructor(
    private userService: UserService, 
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.getUsersList()
  }  

  getUsersList(){
    this.userService.getUsersList().subscribe(res => {
      this.users = res
      this.filteresUsers = this.users
    })
  }

  search(mode: string = ''){
    switch (mode) {
      case 'searchInpt':
        this.filteresUsers = this.bySearchInpt()
        break;
      case 'byGender':
        this.filteresUsers = this.byGender()
        break;
      case 'byAge' :
        this.filteresUsers = this.byAge()
        break;
      default:
        break;
    }
  }

  bySearchInpt(){
    let users = []
    users = this.users.filter(user => {
      if (user['firstName'].includes(this.searchValue) || user['lastName'].includes(this.searchValue)) {
        return user
      }
    })
    return users
  }

  byGender(){
    let users = this.users
    if (this.gender.length != 0) {
      users = this.users.filter(user => {
        for (const i of this.gender) {
          if (user.gender == i) {
            return user
          }
        }
      })
    }
    return users
  }

  byAge(){
    let users = []
    switch (this.ageText) {
      case 'equal':
        users = this.users.filter(user => user.age == this.ageNumber)
        break;
      case 'greater':
        users = this.users.filter(user => user.age > this.ageNumber)
        break;
      case 'smaller':
        users = this.users.filter(user => user.age < this.ageNumber)
        break;
      default:
        break;
    }
    return users
  }

  removeFilters(){
    this.filteresUsers = this.users
  }
}
