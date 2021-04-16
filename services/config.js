require("dotenv").config();

module.exports = {
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
