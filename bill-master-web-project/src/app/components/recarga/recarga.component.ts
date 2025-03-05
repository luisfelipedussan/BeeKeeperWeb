import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from '../footer/footer.component';
import { MainNavComponent } from '../main-nav/main-nav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';


@Component({
  selector: 'app-recarga',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    MatSidenavModule, MatToolbarModule, MatCardModule, MatIconModule, MatExpansionModule,
    MatButtonToggleModule, MatButtonToggleGroup, MatGridListModule, MatInputModule,
    MainNavComponent, FooterComponent],
  templateUrl: './recarga.component.html',
  styleUrl: './recarga.component.scss'
})
export class RecargaComponent {

}
