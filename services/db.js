require("dotenv").config();


const db = async () => {
 
  const app_name = await connect(process.env.APP_NAME),
  const API_DEVELOPMENT = await connect(process.env.API_DEVELOPMENT),
 const  API_PRODUCTION = await connect(process.env.API_PRODUCTION),
 const  DOMAIN_DEVELOPMENT = await connect(process.env.DOMAIN_DEVELOPMENT),
 const  DOMAIN_PRODUCTION = await connect(process.env.DOMAIN_PRODUCTION),
 const  FB_APP_ID = await connect(process.env.FB_APP_ID),
  const DISQUS_SHORTNAME = await connect(process.env.DISQUS_SHORTNAME),
 const  GOOGLE_CLIENT_ID = await connect(process.env.GOOGLE_CLIENT_ID),
 const  APPSCRIPT_WEB_URL = await connect(process.env.APPSCRIPT_WEB_URL),
 
};

 
export default db;