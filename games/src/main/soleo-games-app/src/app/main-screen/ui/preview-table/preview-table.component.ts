import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor } from '@angular/common';
import { TableCellComponent } from './table-cell/table-cell.component';
import { PreviewItem } from '../../main-screen.component';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-preview-table',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, NgFor, TableCellComponent, MatSortModule],
  templateUrl: './preview-table.component.html',
})
export class PreviewTableComponent implements OnChanges, AfterViewInit {

  private _liveAnnouncer = inject(LiveAnnouncer);
  @ViewChild(MatSort) sort!: MatSort;

  @Input() itemsData!: PreviewItem[];
  @Input() itemsColumns!: string[];
  @Input() searchTerm!: string;

  @Output() editClick = new EventEmitter<PreviewItem>();
  @Output() selectedItems = new EventEmitter<PreviewItem[]>();


  dataSource!: MatTableDataSource<PreviewItem>;
  allColumns: string[] = [];

  selection = new SelectionModel<PreviewItem>(true, []);

  constructor() {
    this.dataSource = new MatTableDataSource<PreviewItem>([]);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['itemsData']) {
      this.allColumns = ['Select', ...this.itemsColumns, 'Edit'];
      this.dataSource = new MatTableDataSource(this.itemsData);
      this.dataSource.sort = this.sort;
    }
    if (changes['searchTerm']) {
      this.dataSource.filter = this.searchTerm.trim().toLowerCase();
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

  onRowClick(row: PreviewItem, event: Event) {
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

  onEditClick(item: PreviewItem) {
    this.editClick.emit(item);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
