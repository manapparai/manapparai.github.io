import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fileData: { uiName: string, fileName: string }[] = [
    { uiName: 'ATM', fileName: 'atm' },
    { uiName: 'Bank', fileName: 'bank' },
    { uiName: 'College', fileName: 'college' },
    { uiName: 'Company', fileName: 'company' },
    { uiName: 'Devotion', fileName: 'devotion' },
    { uiName: 'Goffice', fileName: 'goffice' },
    { uiName: 'Hospital', fileName: 'hospital' },
    { uiName: 'Hotel', fileName: 'hotel' },
    { uiName: 'Mahal', fileName: 'mahal' },
    { uiName: 'Parlour', fileName: 'parlour' },
    { uiName: 'Petrol', fileName: 'petrol' },
    { uiName: 'Private', fileName: 'private' },
    { uiName: 'School', fileName: 'school' },
    { uiName: 'Shop', fileName: 'shop' },
    { uiName: 'Theatre', fileName: 'theatre' },
    { uiName: 'Train', fileName: 'train' },
    { uiName: 'Travel', fileName: 'travel' },
  ];

  constructor(private router: Router) {}

  navigateToDetail(selectedFile: { uiName: string, fileName: string }) {
    this.router.navigate(['/detail', selectedFile.fileName]);
  }
}
