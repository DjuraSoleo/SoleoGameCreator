import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageToCountryCode } from '../preview-table.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnInit {

  @Input() dataToShow!: any;
  @Input() columnName!: string;

  @Output() editClick = new EventEmitter<void>();


  bgColor!: string;
  cellType!: CellType;
  cellTypeEnum = CellType;

  tagsBackgrounds: tagBackground[] = [];

  languages!: LanguageToCountryCode[];

  private tailwindColors = [
    'bg-red-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-indigo-300',
    'bg-teal-300',
    'bg-orange-300',
    'bg-cyan-300',
    'bg-emerald-300',
    'bg-lime-300',
    'bg-violet-300',
    'bg-fuchsia-300',
    'bg-rose-300',
    'bg-sky-300',
    'bg-amber-300',
    'bg-slate-300',
    'bg-gray-300',
    'bg-zinc-300',
    'bg-neutral-300',
    'bg-stone-300'
  ];


  private hashCode(word: string): number {
    let hash = 0;
    for (let i = 0; i < word.length; i++) {
      const char = word.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  getColorClassForWord(word: string): string {
    const hash = this.hashCode(word.toLowerCase());
    const colorIndex = hash % this.tailwindColors.length;
    return this.tailwindColors[colorIndex];
  }

  ngOnInit(): void {

    switch (this.columnName) {
      case 'Question':
        this.cellType = CellType.text;
        break;
      case 'Answer':
        this.cellType = CellType.text;
        break;
      case 'Category':
        this.cellType = CellType.singleColorElement;
        this.bgColor = this.getColorClassForWord(this.dataToShow);
        break;
      case 'Tags':
        this.cellType = CellType.tags;
        this.dataToShow.forEach((tag: string) => {
          this.tagsBackgrounds.push({ tag: tag, background: this.getColorClassForWord(tag) });
        });
        break;
      case 'Difficulty':
        this.cellType = CellType.singleColorElement;
        this.bgColor = this.getColorClassForWord(this.dataToShow);
        break;
      case 'Languages':
        this.cellType = CellType.languageIcons;
        this.languages = this.dataToShow;
        break;
      case 'Edit':
        this.cellType = CellType.iconButtonElement;
        break;
      default:
        this.cellType = CellType.text;
        break;
    }
  }

  onEditClick() {
    this.editClick.emit()
  }

}

enum CellType {
  text,
  languageIcons,
  tags,
  singleColorElement,
  iconButtonElement
}

interface tagBackground {
  tag: string,
  background: string
}
