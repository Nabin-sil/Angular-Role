import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { AdminComponent } from './admin';
import { LoginComponent } from './components/login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'navigation',
        component: NavigationComponent
        },

        {
            path: 'profile',
            component: ProfileComponent
            },


            {
                path: 'setting',
                component: SettingComponent
                },

                {
                    path: 'create',
                    component: CreateComponent,
                    canActivate: [AuthGuard],
                    },

                    {
                        path: 'read',
                        component: ReadComponent,
                        canActivate: [AuthGuard],
                    
                         

                        
                        },
  { path: 'create/:id', component: CreateComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
