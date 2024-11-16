import { Component } from '@angular/core';
import { ActionsBarComponent } from '../shell/actions-bar/actions-bar.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [ActionsBarComponent],
  templateUrl: './main-screen.component.html',
})
export class MainScreenComponent {
  languages: Language[] = [{
    countryCode: "gb",
    language: "English"
  }, {
    countryCode: "fr",
    language: "French"
  }
  ];
  sortParameters: SortParameter[] = [{
    propertyName: "Name",
    assending: true
  }, {
    propertyName: "Name",
    assending: false
  }]


  addNewClicked() {
    console.log("addNewClicked");
  }
  languageSelected(language: Language) {
    console.log(language);

  }
  filterSelected() {
    console.log("filterSelected");

  }
  sortSelected(sortParameter: SortParameter) {
    console.log(sortParameter);

  }
  exportClicked() {
    console.log("exportClicked");

  }
  autoExportCliecked() {
    console.log("autoExportCliecked");

  }
  searchStringEntered(searchTerm: string) {
    console.log(searchTerm);

  }


}

export interface Language {
  countryCode: string
  language: string
}

export interface SortParameter {
  propertyName: string
  assending: boolean
}
