import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-2',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <app-title title="View Transition"></app-title>
    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="picsum"
        width="200"
        height="200"
        style="view-transition-name: hero1"
      />

      <div
      class="fixed bottom-16 right-10 bg-blue-500 w-32 h-32 rounded"
      style="view-transition-name: hero2"
      ></div>
    </section>
`,
  styleUrl: './view-transition.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransition2Component { }
