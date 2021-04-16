/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */
const getUsers = async () => {
  try {
    // Set API url.
    const apiUrl = `http://143.198.201.63/api/products/100`;
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

const Users = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Get users data.
    const users = await getUsers();
    // Map over users and build card components.
    const userList = users
      .map(
        ({ title, description, images, price, slug, quantity }) => /*html*/ `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card simpleCart_shelfItem mb-3" style="width: 13rem;">
            <a href="/#/users/${slug}">
              <img src=${images[0].url} class="card-img-top" alt=${slug}>
            </a>
            <div class="card-body">
              <h5 class="card-title user_name font-weight-bold">${title}</h5>
              <h5 class="card-title">$ ${price.toFixed(2)}</h5>
              <a class="user_add"  data-drawer-trigger aria-controls="drawer-name" aria-expanded="false" href="javascript:;"> Add to Cart </a>
            </div>
          </div>
        </div>
      `
      )
      .join("\n");
    return /*html*/ `
      <section class="container-md">
        <h1 class="text-center">User Profile</h1>
        <div class="row m-4">
          ${userList}
        </div>
      </section>  
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {},
};

export default Users;
