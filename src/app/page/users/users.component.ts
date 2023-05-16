import { Component, OnInit } from '@angular/core';
import { ageFilter } from 'src/shared/constants/usersTableFilter';
import { MonthEnums } from 'src/shared/enums/monthEnum';
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
  sidebarVisible!: boolean
  checked: boolean = true
  gender: [] = []
  ageText: string = ''
  ageNumber: number = 0
  ageFilter: Array<string> = []
  eyeColor: Array<string> = []
  eyeColors: Array<string> = []
  minBirthdateRange: any = ''
  maxBirthdateRange: any = ''

  constructor(
    private userService: UserService, 
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
    this.byDate()
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
    const [x, minMonth, minDay, minYear] = String(this.minBirthdateRange).split(' ')
    const [y, maxMonth, maxDay, maxYear] = String(this.maxBirthdateRange).split(' ')
    if (Number(minDay) > 0 && Number(minDay) > 0) {
      this.filteresUsers = this.filteresUsers.filter(user => {
        const [birthYear, birthMonth, birthDay] = this.splitBirthDate(user.birthdate)
        if (Number(minYear) <= Number(birthYear) && Number(birthYear) <= Number(maxYear)) {    
          if (Number(this.changeMonth(minMonth)) <= Number(birthMonth) && Number(birthMonth) <= Number(this.changeMonth(maxMonth))) {   
            if (Number(this.changeMonth(minMonth)) == Number(this.changeMonth(maxMonth))) {
              if (Number(minDay) <= Number(birthDay) && Number(birthDay) <= Number(maxDay)) {
                return user
              }
            }
            return user
          }
        }
      })
    }
  }

  changeMonth(month: string): Number{
    switch (month) {
      case 'Jan':
        return 1
      case 'Feb':
        return 1
      case 'Mar':
        return 3
      case 'Apr':
        return 4
      case 'May':
        return 5
      case 'Jun':
        return 6
      case 'Jul':
        return 7
      case 'Aug':
        return 8
      case 'Sep':
        return 9
      case 'Oct':
        return 10
      case 'Sep':
        return 11
      case 'Oct':
        return 12
      default:
        return 0
    }
  }

  splitBirthDate(fullDate: string){
    const date = fullDate.split('T')[0]
    const [year,  month, day] = date.split('-')
    return [year, month, day]
  }

  removeFilters(){
    this.filteresUsers = this.users
    this.gender = []
    this.eyeColor = []
    this.ageText = 'equal'
    this.ageNumber = 0
    this.maxBirthdateRange = ''
    this.minBirthdateRange = ''
  }

  getColors(){
    let colors: Array<string> = []
    this.users.forEach(user => {
      colors.push(user.eyeColor)
    })
    this.eyeColors = [... new Set(colors)]
  }
}
