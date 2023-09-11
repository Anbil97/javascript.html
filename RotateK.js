function rotateArray(arr, k) {
    const n = arr.length;
    
    // Calculate the effective number of rotations (k may be greater than n)
    k = k % n;
  
    // Rotate the array using array slicing
    const rotatedPart = arr.slice(0, n - k);
    const remainingPart = arr.slice(n - k);
  
    // Concatenate the rotated and remaining parts to get the final rotated array
    return remainingPart.concat(rotatedPart);
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const k = 2;
  
  const rotatedArray = rotateArray(originalArray, k);
  console.log(rotatedArray); 
  