import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ title: string; note: string }> = [];
  constructor(private router: Router) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Event ' + i,
        note: 'This is event' + i
      });
    }
  }

  ngOnInit() {
  }

  navigate(item) {
    this.router.navigate(['/list', JSON.stringify(item)]);
  }
}
