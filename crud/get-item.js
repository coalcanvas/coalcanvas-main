/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */

const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `https://raw.githubusercontent.com/coalcanvas/database-schema/main/database/schemata.json`;
    // Create options for the fetch function.
    const options = { cache: "force-cache" };
    // Get a response from the API.
    const response = await fetch(apiUrl, options);
    // Parse response into JSON.
    const data = await response.json();
    // Print fetched data to the console.
    console.log("(App) Data fetched from API:", data);
    // Return fetched data.
    return data;
  } catch (error) {
    // Print catched error to the console.
    console.log("(App) Error occured while getting data.", error);
  }
};
