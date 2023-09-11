// Sample string array
const stringArray = ["hello world", "this is a test", "javascript is fun"];

// Function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (text) {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
}

// Function to convert all strings in an array to title case
function convertArrayToTitleCase(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(toTitleCase(arr[i]));
  }
  return result;
}

// Call the function to convert the string array to title case
const titleCaseArray = convertArrayToTitleCase(stringArray);

// Print the resulting array
console.log(titleCaseArray);

