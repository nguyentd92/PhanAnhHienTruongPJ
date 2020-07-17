import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  NzButtonModule,
  NzCheckboxModule,
  NzDescriptionsModule,
  NzDropDownModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzLayoutModule,
  NzPageHeaderModule,
  NzTableModule
} from 'ng-zorro-antd';
import { AdminLayoutComponent, LoginComponent } from './containers';
import { AuthAdminService } from './services/auth-admin.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthAdminService],
    children: [
      {
        path: '',
      },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    NzCheckboxModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzTableModule,
    NzIconModule,
    NzDropDownModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {}
