import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  selectedFileName: string = '';
  jsonData!: any[];

  constructor(
    private route: ActivatedRoute,
    private jsonDataService: JsonDataService
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
    });
  }
}
