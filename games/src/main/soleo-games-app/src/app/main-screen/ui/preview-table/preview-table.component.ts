import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { TableCellComponent } from './table-cell/table-cell.component';

export interface PreviewItems {
  Question: string;
  Answer: string;
  Category: string;
  Tags: string[];
  Difficulty: String;
  Languages: LanguageToCountryCode[];
}

export interface LanguageToCountryCode {
  language: string,
  countryCode: string
}

const ITEMS_DATA: PreviewItems[] = [
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }, { language: "French", countryCode: "fr" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Chemistry'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Chemistry'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Titanic'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Capital Cities', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Titanic', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Chemistry', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
];
@Component({
  selector: 'app-preview-table',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, NgFor, TableCellComponent],
  templateUrl: './preview-table.component.html',
})
export class PreviewTableComponent implements OnInit {


  @Output() editClick = new EventEmitter<PreviewItems>();
  @Output() selectedItems = new EventEmitter<any>();


  dataSource!: MatTableDataSource<any>;
  dataColumns: string[] = [];
  allColumns: string[] = [];

  selection = new SelectionModel<any>(true, []);

  ngOnInit() {
    if (ITEMS_DATA.length > 0) {
      this.dataColumns = Object.keys(ITEMS_DATA[0]);
      this.allColumns = ['Select', ...this.dataColumns, 'Edit'];
      this.dataSource = new MatTableDataSource(ITEMS_DATA);
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.emitSelected()

  }

  onRowClick(row: any, event: Event) {
    // Prevent row selection if edit button or its children are clicked
    const target = event.target as HTMLElement;
    if (target.closest('button, mat-icon')) {
      return;
    }
    this.selection.toggle(row);
    this.emitSelected()
  }

  emitSelected() {
    this.selectedItems.emit(this.selection.selected);
  }

  onEditClick(item: PreviewItems) {
    this.editClick.emit(item);
  }
}
