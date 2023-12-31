import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JsonDataService } from '../json-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  selectedFileName: string = '';
  jsonData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jsonDataService: JsonDataService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedFileName = params.get('fileName') || 'atm';
      this.loadFileData();
    });
  }

  loadFileData() {
    this.jsonDataService
    .getAllJsonData([this.selectedFileName])[0]
    .subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }

  goBack(): void {
    this.location.back();
  }

  navigateToMoreDetail(listItem: any) {
    this.router.navigate(['/more-detail'], { state: { listItem: listItem } });
  }
}
