import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

export const routes: Routes = [
    { path: 'sitemap', component: CrisisListComponent },
    { path: '', component: CrisisListComponent },
    {   
        path: 'crisis-list', 
        component: CrisisListComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'view-books' }
    },
    {
        path: 'heroes-list', 
        component: HeroesListComponent,
        canActivate: [canActivateAuthRole],
        data: { role: 'view-profile' }
    
    },
    { 
        path: 'forbidden', 
        component: ForbiddenComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
