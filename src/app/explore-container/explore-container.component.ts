import { Component, Input } from '@angular/core';
// Type
import type { Activities } from 'src/types/activities';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() items?: Activities[];
  @Input() type: string = 'activity';

}
