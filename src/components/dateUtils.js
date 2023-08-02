// Function to format the date in a human-readable format
export const formatUpdatedDate = (dateString) => {
    // Create a new Date object from the given 'dateString'
    const date = new Date(dateString);
  
    // Define the options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
  
    // Return the date in a human-readable format using the 'toLocaleDateString' method
    // The 'toLocaleDateString' method converts the date to a string representing the date in the current locale's time zone
    // The 'options' object specifies how the date should be formatted, including the display of the year, month, and day
    return date.toLocaleDateString(undefined, options);
  };
  