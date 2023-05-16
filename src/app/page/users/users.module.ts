import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TableModule } from 'primeng/table';
import { UserService } from 'src/shared/services/user.service';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    SpeedDialModule,
    SidebarModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputNumberModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule
  ],
  exports:[UsersComponent],
  providers:[UserService]
})
export class UsersModule { }
