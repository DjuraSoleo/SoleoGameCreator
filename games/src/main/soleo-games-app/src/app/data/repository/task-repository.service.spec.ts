import { TestBed } from '@angular/core/testing';

import { TasksRepositoryService } from './task-repository.service';

describe('TaskRepositoryService', () => {
  let service: TasksRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
