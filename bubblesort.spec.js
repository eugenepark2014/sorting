
  // Expected [ 2, 1, 3, 0, 99 ] to equal [ 0, 1, 2, 3, 99 ].
describe('Bubble Sort', function(){
    let array, array2;
  beforeAll(function() {
    spyOn(window, "swap").and.callThrough();
  });
  beforeEach(function(){
    array = [3,2,1,99,0], array2 = [5,3,4,1,10,94,0,16,2]
  });
  it("calls swap 16 times", function() {
    bubbleSort(array);
    bubbleSort(array2);
    expect(window.swap.calls.count()).toEqual(16);
  });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

    it('can sort numbers', function(){
      expect( bubbleSort([3,2,1,99,0]) ).toEqual( [0,1,2,3,99] );
    });

    it('longer array', function(){
      expect( bubbleSort([5,3,4,1,10,94,0,16,2]) ).toEqual( [0,1,2,3,4,5,10,16,94] );
    });



