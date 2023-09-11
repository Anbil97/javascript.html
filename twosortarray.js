function findMedianSortedArrays(nums1, nums2) {
    // Merge the two sorted arrays into one sorted array
    const mergedArray = mergeSortedArrays(nums1, nums2);
    
    // Find the median of the merged array
    const length = mergedArray.length;
    
    // If the length of the merged array is even, return the average of the middle two elements
    if (length % 2 === 0) {
      const midIndex1 = length / 2 - 1;
      const midIndex2 = length / 2;
      return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
      // If the length of the merged array is odd, return the middle element
      const midIndex = Math.floor(length / 2);
      return mergedArray[midIndex];
    }
  }
  
  // Helper function to merge two sorted arrays
  function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    
    // Add any remaining elements from arr1 and arr2
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
    
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
    
    return merged;
  }
  
  // Example usage:
  const nums1 = [1, 3, 8];
  const nums2 = [2, 6, 9];
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log(median); 
  