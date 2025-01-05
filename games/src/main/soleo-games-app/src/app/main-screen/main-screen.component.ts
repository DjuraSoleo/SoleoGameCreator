import { TasksRepositoryService } from '../data/repository/task-repository.service';
import { Component, OnInit } from '@angular/core';
import { ActionsBarComponent, Language } from './ui/actions-bar/actions-bar.component';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { PreviewTableComponent } from './ui/preview-table/preview-table.component';
import { MatDivider } from '@angular/material/divider';
import { PreviewItem } from './model/preview-item';
import { QuestionsRepositoryService } from '../data/repository/question-repository.service';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [ActionsBarComponent, SideNavComponent, PreviewTableComponent, MatDivider],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'

})
export class MainScreenComponent implements OnInit {
  languages: Language[] = [];
  sortParameters: SortParameter[] = SORT_PARAMETERS


  questionsColumns = ["question", "answer", "category", "tags", "difficulty", "languages"];
  tasksColumns = ["task", "category", "tags", "difficulty", "languages"];

  itemsData: PreviewItem[] = [];
  itemsColumns = this.questionsColumns;
  searchTerm: string = "";
  _questionsRepositoryService!:QuestionsRepositoryService
  _tasksRepositoryService!:TasksRepositoryService


  constructor(_questionsRepositoryService: QuestionsRepositoryService, _tasksRepositoryService:TasksRepositoryService) {
    this._questionsRepositoryService = _questionsRepositoryService;
    this._tasksRepositoryService = _tasksRepositoryService;
  }

  ngOnInit(): void {
    this.loadQuestions()
  }


  extractDistinctLanguages() {
    this.itemsData.forEach(item => {
      this.languages.push(...item.languages)
    })
    this.languages = this.languages.filter(
      (translation, index, self) =>
        index === self.findIndex(t => t.language === translation.language && t.countryCode === translation.countryCode)
    );
  }

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
    this.searchTerm = searchTerm;

  }

  itemsCategoryChanged(category: ItemCategory) {
    switch (category) {
      case ItemCategory.corporate:
        this.loadQuestions()
        break;
      case ItemCategory.personalized:
        this.loadQuestions()
        break;
      case ItemCategory.tasks:
        this.loadTasks()
        break;
    }
    console.log(category);
  }

  loadQuestions(){
    this.itemsColumns = this.questionsColumns;
    this._questionsRepositoryService.getQuestion().subscribe({
      next: (response) =>{
        this.itemsData = response.items;
        this.extractDistinctLanguages();
      },
      error: (error) => {
        console.log('API error: ', error);
      },
    });
  }

  loadTasks(){
    this.itemsColumns = this.tasksColumns;
    this._tasksRepositoryService.getTasks().subscribe({
      next: (response) =>{
        this.itemsData = response.items;
        this.extractDistinctLanguages();
      },
      error: (error) => {
        console.log('API error: ', error);
      },
    });
  }

  onEditClick(item: PreviewItem) {
    console.log(item);
  }

  onSelectedItems(selectedItems: PreviewItem[]) {
    console.log(selectedItems);

  }
}

export enum ItemCategory {
  corporate = "corporate",
  personalized = "personalized",
  tasks = "tasks"
}

export interface SortParameter {
  propertyName: string
  assending: boolean
}

const SORT_PARAMETERS: SortParameter[] = [{
  propertyName: "Name",
  assending: true
}, {
  propertyName: "Name",
  assending: false
}]
