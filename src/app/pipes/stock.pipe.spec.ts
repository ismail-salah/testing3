import { TestBed } from '@angular/core/testing';
import { StockPipe } from './stock.pipe';

describe('StockPipe', () => {
  let pipe :StockPipe;
  
  beforeEach(function(){
    //to defind orgenl pipe to use it here in var(pipe)
    pipe = new StockPipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


    it('test if greater than 0', () => {
    // new value
    const value = 1;
    //test function
    const transformedFunction = pipe.transform(value);
    expect(transformedFunction).toEqual('In Stock');
  });


  it('test if less than 0', () => {
    // new value
    const value = -1;
    //test function
    const transformedFunction = pipe.transform(value);
    expect(transformedFunction).toEqual('Out Stock');
  });

});
