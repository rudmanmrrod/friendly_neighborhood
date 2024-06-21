import { Component } from '@angular/core';
// Data
import { activities } from 'src/crimes';
// Utils
import { mapData } from 'src/utils';
// Tyoes
import type { Activities } from 'src/types/activities';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list_items: Activities[] = [] as Activities[];

  
  constructor() {}

  ngOnInit() {
    this.list_items = mapData(activities);
  }

}
