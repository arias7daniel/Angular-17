import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    SidemenuComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
