import { TestBed } from '@angular/core/testing';

import { DataTableService } from './data-table.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataTableService', () => {
  let service: DataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
