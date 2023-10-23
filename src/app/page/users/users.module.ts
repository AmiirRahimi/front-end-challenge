import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { UsersService } from './users.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/shared/stores/userStore/user.effects';
import { userReducer } from 'src/shared/stores/userStore/user.reducer';

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
    CalendarModule,
    SidebarModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputNumberModule,
    ButtonModule,
    RadioButtonModule,
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  exports:[UsersComponent],
  providers:[UsersService]
})
export class UsersModule { }
