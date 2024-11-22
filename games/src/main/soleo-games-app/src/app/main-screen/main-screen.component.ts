import { Component } from '@angular/core';
import { ActionsBarComponent } from './ui/actions-bar/actions-bar.component';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { PreviewItems, PreviewTableComponent } from './ui/preview-table/preview-table.component';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [ActionsBarComponent, SideNavComponent, PreviewTableComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'

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

  itemsCategoryChanged(category: ItemCategory) {
    console.log(category);
  }

  onEditClick(item: any) {
    console.log(item);
  }

  onSelectedItems(selectedItems: any) {
    console.log(selectedItems);

  }
}

export enum ItemCategory {
  corporate = "corporate",
  personalized = "personalized",
  tasks = "tasks"
}

export interface Language {
  countryCode: string
  language: string
}

export interface SortParameter {
  propertyName: string
  assending: boolean
}
