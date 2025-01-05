import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { PaginationResponse } from '../model/pagination-response';
import { PreviewTaskItem } from '../../main-screen/model/preview-item';
import { TASKS_MOCK_DATA } from './mock-task-data';
import { taskResponseToPreviewItem } from '../mapper/task-mapper';
import { TaskResponse } from '../model/task-response';

@Injectable({
  providedIn: 'root'
})
export class TasksRepositoryService {

  constructor(private http: HttpClient) { }

  private _useMockData = environment.useMockData;

  private apiUrl = "http://localhost:8080/api/v1/tasks"

  getTasks(): Observable<PaginationResponse<PreviewTaskItem>> {
    if (this._useMockData) {
      return of({
        total: 1,
        limit: 1,
        offset: 0,
        items: TASKS_MOCK_DATA.items.map(task => taskResponseToPreviewItem(task))
      });
    } else {
      return this.http.get<PaginationResponse<TaskResponse>>(this.apiUrl).pipe(
        map(response => ({
          ...response,
          items: response.items.map(task => taskResponseToPreviewItem(task))
        }))
      );
    }
  }
}
