import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { QuestionResponse } from '../model/question-response';
import { PaginationResponse } from '../model/pagination-response';
import { questionResponseToPreviewItem } from '../mapper/question-mapper';
import { PreviewQuestionItem } from '../../main-screen/model/preview-item';
import { environment } from '../../../environments/environment';
import { QUESTIONS_MOCK_DATA } from './mock-question-data';

@Injectable({
  providedIn: 'root'
})
export class QuestionsRepositoryService {

  constructor(private http: HttpClient) { }

  private _useMockData = environment.useMockData;

  private apiUrl = "http://localhost:8080/api/v1/questions"


  getQuestion(): Observable<PaginationResponse<PreviewQuestionItem>> {
    if (this._useMockData) {
      return of({
        total: 1,
        limit: 1,
        offset: 0,
        items: QUESTIONS_MOCK_DATA.items.map(question => questionResponseToPreviewItem(question))
      });
    } else {
      return this.http.get<PaginationResponse<QuestionResponse>>(this.apiUrl).pipe(
        map(response => ({
          ...response,
          items: response.items.map(question => questionResponseToPreviewItem(question))
        }))
      );
    }
  }
}




