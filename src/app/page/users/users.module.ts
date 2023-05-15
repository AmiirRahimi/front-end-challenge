import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TableModule } from 'primeng/table';
import { UserService } from 'src/shared/services/user.service';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports:[UsersComponent],
  providers:[UserService]
})
export class UsersModule { }
