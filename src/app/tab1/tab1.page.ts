import { Component } from '@angular/core';
import { activities } from 'src/crimes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  list_items = activities;
  
  constructor() {}

}
