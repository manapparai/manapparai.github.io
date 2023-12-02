import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent {
  listItem: any;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.listItem = history.state.listItem;
    console.log(this.listItem);
  }

  goBack(): void {
    this.location.back();
  }
}
