import { Color } from "../../services/color.js";

// console.log(Color);
const id = "1FMn-QLHeogYKnNu4Cqzbjaa2j9Gyq3S20JGcmq2vlW0";
const url =
  "https://spreadsheets.google.com/feeds/list/" +
  id +
  "/1/public/values?alt=json";
// console.log(url);
const questions = [];
//load url
loadQuestions();
function loadQuestions() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.feed.entry.forEach((el) => {
        // console.log(el.content["$t"]);
        for (let key in el) {
          let holder = [];
          let temp = [];
          let mainTemp = {};
          if (key.substring(0, 3) == "gsx") {
            let header = key.slice(4); // start from fifth letter in the key e.g. gsx$ slced from gsx$question
            let val = el[key]["$t"];
            if (header == "question") {
              mainTemp.question = val;
            }
            if (header == "correct") {
              mainTemp.correct = val;
            }

            // console.log(header);
            // console.log(el[key]["$t"]); //get value of each key
          }
          questions.push(mainTemp);
        }
      });
      // document.write(JSON.stringify(data.feed.entry));
    });
}

// let temp = []
// el.incorrect.forEach((ans) => {
//   let tempObj = {
//     "response": ans,
//     "correct": false
//   }
//   temp.push(tempObj)
// })
// let tempObj = {
//   "response": el.correct,
//   "correct": true
// }
// temp.push(tempObj)
// // // console.log(temp)
//           let mainTemp = {
//             question: el.question,
//             options: temp,
//             correct: el.correct,
//           };
//           questions.push(mainTemp)
// add stylesheet

// Your CSS as text
var pgStyles = `
.confirmed {
  filter: contrast(125%);
  background-color: #acc29d;
  color: #5eb95e;

}
.notConfirmed {

  filter:grayscale(25%);

}
`;

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = pgStyles;
document.body.appendChild(styleSheet);
const Profiles = {
  /**
   * Render the page content.
   */
  render: async () => {
    return /*html*/ `

<section scoped onload="scrollTop()" id='profiles' class='col-md-10 col-10 offset-md-1 text-center offset-md-1 offset-1 col-auto col-md-auto'>
  <h4 class="title-tag text-center blur-bg pt-2" data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="800">Profiles</h4>
        <hr class='ultralight-border text-center w-25 higher' />
<div class='contact-form'>  

<output class='output' id='output' </output>
</div>
    <button type="button" id='btn-profiles' class="btn btn-sm isomorph-o pearl d-flex offset-4 align-content-center flex-end">Submit</button>
 
</section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */

  after_render: async () => {},
};
export default Profiles;
