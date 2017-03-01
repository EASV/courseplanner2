import { TestBed, inject } from '@angular/core/testing';
import { MockBackendService } from './mock-backend.service';

describe('MockBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockBackendService]
    });
  });

  it('should ...', inject([MockBackendService], (service: MockBackendService) => {
    expect(service).toBeTruthy();
  }));
});
