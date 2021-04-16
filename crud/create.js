import { XMLHttpRequest } from "xmlhttprequest";
import dotenv from "dotenv";
const req = new XMLHttpRequest();
dotenv.config();
req.onreadystatechange = async () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
  }
};

req.open("POST", "https://api.jsonbin.io/v3/b", true);
req.setRequestHeader("Content-Type", "application/json");
req.setRequestHeader("X-Master-Key", `${process.env.JSONBIN_API_KEY}`);
req.setRequestHeader("X-Bin-Name", `${process.env.JSONBIN_NAME}`);
req.setRequestHeader("X-Collection-Id", `${process.env.JSONBIN_COLLECTION_ID}`);
req.send('{"sample": "Hello World"}');
