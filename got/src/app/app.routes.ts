import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'characters', 
        loadComponent: () => 
            import('./got-list/got-list.component').then((c) => c.GotListComponent)
    }, 
    {
        path: '', 
        loadComponent: () => 
            import('./home/home.component').then((c) => c.HomeComponent)
    }
];
