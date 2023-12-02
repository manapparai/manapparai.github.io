import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  @Input() data: any;
  keys: any[] = [];

  ngOnChanges() {
    console.log(this.data);
    if (this.data) {
      // Extract keys
      this.keys = Object.keys(this.data);
    }
  }
}