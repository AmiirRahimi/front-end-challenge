import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ageFilter } from 'src/shared/constants/usersTableFilter';
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
  ageFilter: Array<string> = []
  eyeColor: Array<string> = []
  eyeColors: Array<string> = []
  birthdateRange: Array<string> = []

  constructor(
    private userService: UserService, 
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    this.ageFilter = ageFilter
    this.getUsersList()
  }  

  getUsersList(){
    this.userService.getUsersList().subscribe(res => {
      this.users = res
      this.filteresUsers = this.users
      this.getColors()
    })
  }

  search(){
    this.filteresUsers = this.users
    this.bySearchInpt()
    this.byGender()
    this.byEyeColor()
    this.byAge()
  }

  bySearchInpt(){
    this.filteresUsers = this.filteresUsers.filter(user => {
      if (user['firstName'].includes(this.searchValue) || user['lastName'].includes(this.searchValue)) {
        return user
      }
    })
  }

  byGender(){
    if (this.gender.length != 0) {
      this.filteresUsers = this.filteresUsers.filter(user => {
        for (const i of this.gender) {
          if (user.gender == i) {
            return user
          }
        }
      })
    }
  }

  byAge(){
    switch (this.ageText) {
      case 'equal':
        this.filteresUsers = this.filteresUsers.filter(user => user.age == this.ageNumber)
        break;
      case 'greater':
        this.filteresUsers = this.filteresUsers.filter(user => user.age > this.ageNumber)
        break;
      case 'smaller':
        this.filteresUsers = this.filteresUsers.filter(user => user.age < this.ageNumber)
        break;
      default:
        break;
    }
  }

  byEyeColor(){
    if (this.eyeColor.length != 0) {
      this.filteresUsers = this.filteresUsers.filter(user => {
        for (const i of this.eyeColor) {
          if (user.eyeColor == i) {
            return user
          }
        }
      })
    }
  }

  byDate(){
    console.log(this.birthdateRange);
    
  }

  removeFilters(){
    this.filteresUsers = this.users
    this.gender = []
    this.eyeColor = []
    this.ageText = 'equal'
    this.ageNumber = 0
  }

  getColors(){
    let colors: Array<string> = []
    this.users.forEach(user => {
      colors.push(user.eyeColor)
    })
    this.eyeColors = [... new Set(colors)]
  }
}
