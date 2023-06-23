function reverseArray(arr) {
    const reversedArray = [];
    
    //loop thru the array in reverse
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    
    return reversedArray;
  }
  
  
  const originalArray = [20, 50, 30, 60, 200];
  const reversedArray = reverseArray(originalArray);
  console.log(reversedArray);