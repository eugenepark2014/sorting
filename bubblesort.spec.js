beforeAll(function () {
    spyOn(window, swap).and.callThrough(); 
  });
  it('getting to the center of tootsiepop involves exactly three licks', function () {
    
    expect(window.swap.count()).toEqual(3);
  });

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort', function(){
    it('can sort numbers', function(){
      expect( bubbleSort([3,2,1,99,0]) ).toEqual( [0,1,2,3,99] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles an array with numbers only', function(){
      expect( bubbleSort([0,100,99,12, null]) ).toEqual( [undefined] );
    });
  });
