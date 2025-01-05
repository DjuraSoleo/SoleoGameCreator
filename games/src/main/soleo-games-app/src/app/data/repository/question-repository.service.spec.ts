import { TestBed } from '@angular/core/testing';

import { QuestionsRepositoryService } from './question-repository.service';

describe('QuestionsRepositoryService', () => {
  let service: QuestionsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
