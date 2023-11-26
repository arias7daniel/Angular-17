import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [],
  template: `<h1>Hola mundo</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserLoaderComponent {
  constructor() { }
}
