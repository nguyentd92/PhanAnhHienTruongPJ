import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  NzAlertModule, NzButtonModule,



  NzCheckboxModule, NzFormModule,
  NzInputModule,
  NzLayoutModule
} from 'node_modules/ng-zorro-antd';
import { PostItemComponent } from './components';
import { HomeComponent, LoginComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [PostItemComponent, HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzCheckboxModule,
    NzAlertModule,
    ReactiveFormsModule,
  ],
})
export class EndUserModule {}
