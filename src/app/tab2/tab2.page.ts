import { Component } from '@angular/core';
// Data
import { crime } from 'src/crimes';
// Utils
import { mapData } from 'src/utils';
// Tyoes
import type { Activities } from 'src/types/activities';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  list_items: Activities[] = [] as Activities[];

  
  constructor() {}

  ngOnInit() {
    this.list_items = mapData(crime);
  }

}
