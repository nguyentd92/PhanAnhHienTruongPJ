import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzFormModule,
  NzInputModule,
  NzLayoutModule
} from 'ng-zorro-antd';
import { LoginComponent } from './containers';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzCheckboxModule,
    RouterModule.forChild(routes)
  ],
})
export class AdminModule {}
