import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";

const routes: Routes = [
    { path: '', component: ListUserComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    // { path: 'add-user', component: AddUserComponent,canActivate: [AuthGuard] },
    { path: 'list-user', component: ListUserComponent,canActivate: [AuthGuard] },
    // { path: 'edit-user', component: EditUserComponent,canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);