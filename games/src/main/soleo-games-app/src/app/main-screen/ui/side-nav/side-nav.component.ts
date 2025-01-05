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

  isCorporateActive = true;
  isPersonalizedActive = false;
  isTasksActive = false;


  itemCategory = ItemCategory;

  @Output() categoryClicked = new EventEmitter<ItemCategory>();


  onCategoryClick(category: ItemCategory){
    switch(category){
      case ItemCategory.corporate:
        this.isCorporateActive = true;
        this.isPersonalizedActive = false;
        this.isTasksActive = false;
        break;
      case ItemCategory.personalized:
        this.isCorporateActive = false;
        this.isPersonalizedActive = true;
        this.isTasksActive = false;
        break;
      case ItemCategory.tasks:
        this.isCorporateActive = false;
        this.isPersonalizedActive = false;
        this.isTasksActive = true;
        break;
    }
    this.categoryClicked.emit(category);
  }
}
