import { Component } from '@angular/core';
import { ActionsBarComponent } from './ui/actions-bar/actions-bar.component';
import { SideNavComponent } from './ui/side-nav/side-nav.component';
import { PreviewTableComponent } from './ui/preview-table/preview-table.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-main-screen',
  standalone: true,
  imports: [ActionsBarComponent, SideNavComponent, PreviewTableComponent, MatDivider],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css'

})
export class MainScreenComponent {
  languages: Language[] = LANGUAGES;
  sortParameters: SortParameter[] = SORT_PARAMETERS


  questionsColumns = ["Question", "Answer", "Category", "Tags", "Difficulty", "Languages"];
  tasksColumns = ["Task", "Category", "Tags", "Difficulty", "Languages"];

  itemsData: PreviewItem[] = QUESTIONS_DATA;
  itemsColumns = this.questionsColumns;
  searchTerm: string = "";

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
        this.itemsColumns = this.questionsColumns;
        this.itemsData = QUESTIONS_DATA;
        break;
      case ItemCategory.personalized:
        this.itemsColumns = this.questionsColumns;
        this.itemsData = QUESTIONS_DATA;
        break;
      case ItemCategory.tasks:
        this.itemsColumns = this.tasksColumns;
        this.itemsData = TASKS_DATA;
        break;
    }
    console.log(category);
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

export interface Language {
  countryCode: string
  language: string
}

export interface SortParameter {
  propertyName: string
  assending: boolean
}

export interface PreviewItem {
  Category: string;
  Tags: string[];
  Difficulty: String;
  Languages: LanguageToCountryCode[];
}

interface PreviewQuestionItem extends PreviewItem {
  Question: string;
  Answer: string;
}

interface PreviewTaskItem extends PreviewItem {
  Task: string;
}

export interface LanguageToCountryCode {
  language: string,
  countryCode: string
}


const LANGUAGES: Language[] = [{
  countryCode: "gb",
  language: "English"
}, {
  countryCode: "fr",
  language: "French"
}
];

const SORT_PARAMETERS: SortParameter[] = [{
  propertyName: "Name",
  assending: true
}, {
  propertyName: "Name",
  assending: false
}]

const QUESTIONS_DATA: PreviewQuestionItem[] = [
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }, { language: "French", countryCode: "fr" }] },
  { Question: "The capital of Serbia?", Answer: 'Belgrade', Category: "Geography", Tags: ['Ljubljana', 'Chemistry'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Macedonia?", Answer: 'Skopje', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Japan?", Answer: 'Tokio', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "Which team won the 2018 FIFA World Cup?", Answer: 'France', Category: "Sport", Tags: ['Ljubljana', 'Chemistry'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "Which country hosted the 2020 Olympic Games, which were held in 2021 due...", Answer: 'Japan', Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "What is the chemical symbol for gold?", Answer: 'Au', Category: "General Knowledge", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "Who composed the Four Seasons?", Answer: 'Antonio Vivaldi', Category: "Music", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "What is the largest organ in the human body?", Answer: 'Skin', Category: "General Knowledge", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "What is the smallest country in the world?", Answer: 'Vatican', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Titanic'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Capital Cities', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Titanic', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Capital Cities', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Titanic', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Question: "The capital of Slovenia?", Answer: 'Ljubljana', Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
];

const TASKS_DATA: PreviewTaskItem[] = [
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }, { language: "French", countryCode: "fr" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Chemistry'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Chemistry'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Medium", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Titanic'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Sport", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Capital Cities', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Titanic', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
  { Task: "The capital of Slovenia?", Category: "Geography", Tags: ['Ljubljana', 'Slovenia'], Difficulty: "Easy", Languages: [{ language: "Englis", countryCode: "gb" }] },
];
