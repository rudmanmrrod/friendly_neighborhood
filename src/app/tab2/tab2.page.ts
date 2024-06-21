import { Component } from '@angular/core';
import { crime } from 'src/crimes';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list_items = crime;

  constructor() {}

}
