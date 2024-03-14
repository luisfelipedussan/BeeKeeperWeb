import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink ,RouterLinkActive} from '@angular/router';

import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavHomeComponent } from '../nav-home/nav-home.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavHomeComponent,  
    FooterComponent,  
    MatGridListModule, MatCardModule, MatInputModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
