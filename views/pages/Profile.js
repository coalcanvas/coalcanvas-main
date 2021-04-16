// Import utils to extract id from url.
import { parseRequestUrl } from "../../services/utils.js";

/**
 * Fetch data from external API.
 * @param  {String} id Item's id.
 * @return {Object}    Data fetched.
 */
const getItem = async (id) => {
  try {
    // Set API url.
    const apiUrl = `http://143.198.201.63/api/product/${id}`;
    // Create options for the fetch function.
    const options = { cache: "force-cache" };
    // Get a response from the API.
    const response = await fetch(apiUrl, options);
    // Parse and destructure response into JSON.
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

const ItemShow = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Get current URL params.
    const params = parseRequestUrl();
    // Get destructured data from API based on id provided.
    const { title, description, images, price, slug } = await getItem(
      params.id
    );
    return /*html*/ `
      <section class="container-md" style="width: 20rem;">
        <div class="card simpleCart_shelfItem">
          <img src=${
            images[0].url
          } class="card-img-top" alt=${slug} id="productImage">
          <div class="card-body">
            <h5 class="card-title item_name">${title}</h5>
            <p class="card-text">${description}.</p>
            <p class="card-text">Price ${price.toFixed(2)}.</p>
            <input type="text" value="1" class="item_Quantity">
            <a class="item_add" data-drawer-trigger aria-controls="drawer-name" aria-expanded="false" href="javascript:;"> Add to Cart </a>
            <a href="/#/items" class="btn btn-dark">Go Back</a>
          </div>
        </div>
      </section>
    `;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted.
  after_render: async () => {
    // Add event listener with a simple alert.
    document
      .querySelector("#productImage")
      .addEventListener("click", () => alert("You have clicked on the photo!"));
  },
};

export default ItemShow;
