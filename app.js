import dotenv from "dotenv";
dotenv.config();

const parseConf = () => {
  const conf = {
    // Build conf variable.
    app_name: process.env.APP_NAME,
    API_DEVELOPMENT: process.env.API_DEVELOPMENT,
    API_PRODUCTION: process.env.API_PRODUCTION,
    DOMAIN_DEVELOPMENT: process.env.DOMAIN_DEVELOPMENT,
    DOMAIN_PRODUCTION: process.env.DOMAIN_PRODUCTION,
    FB_APP_ID: process.env.FB_APP_ID,
    DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  };
  // Print it in the console.
  console.log("(App) Parsed url:", conf);

  // Return and object with params.
  return conf;
};
