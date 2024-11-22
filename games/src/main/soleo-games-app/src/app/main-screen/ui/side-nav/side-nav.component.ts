import { Component, EventEmitter, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ItemCategory } from '../../main-screen.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatButton, MatIconModule, MatDividerModule],
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {

  itemCategory = ItemCategory;

  @Output() categoryClicked = new EventEmitter<ItemCategory>();


  onCategoryClick(category: ItemCategory){
    this.categoryClicked.emit(category);
  }
}
