import { XMLHttpRequest } from "xmlhttprequest";
import dotenv from "dotenv";
const req = new XMLHttpRequest();
dotenv.config();
const route = `/${process.env.JSONBIN_SUBCOLLECTION_ID}/meta/${process.env.JSONBIN_NAME}`;
req.onreadystatechange = async () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("PUT", `https://api.jsonbin.io/v3/c` + route, true);
req.setRequestHeader("X-Collection-Name", "Mainframe");
req.setRequestHeader("X-Master-Key", `${process.env.JSONBIN_API_KEY}`);
req.send();
