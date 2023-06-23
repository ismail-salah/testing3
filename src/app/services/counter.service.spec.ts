import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getCounter and setCounter function ', () => {
    //new value
    const counterValue = 1;
    //['counter] becouse counter private vareable
    // .next to put new value in counter vareable
    service['counter'].next(counterValue);
    //to know if new value == counter vareable
    service.getCounter().subscribe((value) => {
      expect(value).toEqual(counterValue);
    });
  });

})
