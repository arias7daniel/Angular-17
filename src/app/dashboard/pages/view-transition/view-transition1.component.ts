import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-1',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <app-title title="View Transition"></app-title>
  <section class="flex justify-start">
    <img
      srcset="https://picsum.photos/id/237/200/300"
      alt="picsum"
      width="200"
      height="200"
      style="view-transition-name: hero1"
    />

    <div
    class="bg-blue-500 w-56 h-56"
    style="view-transition-name: hero2"
    ></div>
  </section>
  `,
  styleUrl: './view-transition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition1Component { }
