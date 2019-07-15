import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {RouterModule,Routes} from '@angular/router';
const appRouter: Routes = [
    {path:'inicio', component: InicioComponent},
    {path: 'acerca-de', component: AcercaDeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path: '**', component: ContactoComponent}
];
export const APP_ROUTES = RouterModule.forRoot(appRouter, {useHash:true});