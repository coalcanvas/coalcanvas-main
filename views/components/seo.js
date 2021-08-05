/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */

const getItems = async () => {
  try {
    // Set API url.
    const apiUrl = `https://raw.githubusercontent.com/coalcanvas/coalcanvas.github.io/gh-pages/db.json`; //http://localhost:3000/config
    // Create options for the fetch function.
    const options = { cache: "no-cache" };
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

const seo = {
  render: async () => {
    return `
        <title>Lifelong Learning | ${APP_NAME}</title>
      <meta
        name="description"
        content="Sharing little nuggets on lifestyle, financial planning, and personal development."
      />
      <link rel="canonical" href=${DOMAIN}${router.pathname} />
      <meta
        property="og:title"
        content={Latest nuggets of learning | ${APP_NAME}}
      />
      <meta
        property="og:description"
        content="Learning blogs and knowledge center on matters that touch on lifestyle, financial planning, and personal development."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={${DOMAIN}${router.pathname}} />
      <meta property="og:site_name" content={${APP_NAME}} />

      <meta
        property="og:image"
        content={${DOMAIN}/static/images/lifelong-blog.png}
      />
      <meta
        property="og:image:secure_url"
        content={${DOMAIN}/static/images/lifelong-blog.png}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:app_id" content={${FB_APP_ID}} />
        
        `;
  },

  after_render: async () => {
    const config = await getItems();
    console.log(config);

    const prefix = "https://script.google.com/macros/s/";
    const suffix = "/exec";
    const url = prefix + config.config[0].APPSCRIPT_DEPLOYMENT_ID + suffix;
    const headers = config.config[0].headers;
    console.log(url);
  },
};

export default seo;
