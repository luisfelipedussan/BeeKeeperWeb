import { Routes } from '@angular/router';

import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RecargaComponent } from './components/recarga/recarga.component';



export const routes: Routes = [
    { title: "", path: '' , component : NavHomeComponent},
    { title: "BM Home", path: 'Home' , component : LoginComponent },
    { title: "BM Contact", path: 'contact' , component : ContactComponent },
    { title: "BM Login", path: 'login' , component : LoginComponent },
    { title: "BM Recarga", path: 'recarga' , component : RecargaComponent }

];
