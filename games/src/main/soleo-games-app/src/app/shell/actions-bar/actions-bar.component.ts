import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-actions-bar',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, FormsModule, MatMenuModule, CommonModule],
  templateUrl: './actions-bar.component.html',
})
export class ActionsBarComponent implements OnInit {

  @Input()
  languages!: Language[];
  @Input()
  sortParameters!: SortParameter[];

  @Output() addNewClicked = new EventEmitter<void>();
  @Output() languageSelected = new EventEmitter<Language>();
  @Output() filterSelected = new EventEmitter<void>();
  @Output() sortSelected = new EventEmitter<SortParameter>();
  @Output() exportClicked = new EventEmitter<void>();
  @Output() autoExportCliecked = new EventEmitter<void>();
  @Output() searchStringEntered = new EventEmitter<string>();


  searchTerm: string = '';

  defaultLanguage:Language = {
    countryCode: "gb",
    language: "English"
  }


  ngOnInit(): void {
    this.sortParameters.forEach(param => {
      param.matIcon = param.assending ? 'arrow_upward' : 'arrow_downward';
    });
  }

  addNew() {
    this.addNewClicked.emit();
  }

  languageSelectedClick(language: Language) {
    this.defaultLanguage = language;
    this.languageSelected.emit(language);
  }

  filterClick() {
    this.filterSelected.emit();
  }

  sortItemClick(parameter: SortParameter) {
    this.sortSelected.emit(parameter);
  }

  exportClick() {
    this.exportClicked.emit();
  }

  autoExportClick() {
    this.autoExportCliecked.emit();
  }

  searchFilterChange(searchTerm: any) {
    this.searchStringEntered.emit(searchTerm);
  }
}

export interface Language {
  countryCode: string
  language: string
}

export interface SortParameter {
  propertyName: string
  assending: boolean
  matIcon?: string
}
