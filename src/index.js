import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>
);

function DisplayRes(event) {
  let ans1 = event.target.q1.value;
  let ans2 = event.target.q2.value;
  let ans3 = event.target.q3.value;
  let ans4 = event.target.q4.value;
  let ans5 = event.target.q5.value;
  let ans6 = event.target.q6.value;
  let ans7 = event.target.q7.value;
  let ans8 = event.target.q8.value;
  let ans9 = event.target.q9.value;
  let ans10 = event.target.q10.value;
  let marks = 0;
  let name = document.getElementById("name").value;

  if (ans1 === "Green") {
    marks++;
  }
  if (ans2 === "Seven") {
    marks++;
  }
  if (ans3 === "PeaCock") {
    marks++;
  }
  if (ans4 === "Tiger") {
    marks++;
  }
  if (ans5 === "Pacific Ocean") {
    marks++;
  }
  if (ans6 === "Spring") {
    marks++;
  }
  if (ans7 === "India") {
    marks++;
  }
  if (ans8 === "Bengaluru") {
    marks++;
  }
  if (ans9 === "Kannada") {
    marks++;
  }
  if (ans10 === "26") {
    marks++;
  }
  if (marks === 10) {
    alert(`Congrulations😎 ${name}: You scored 10 out of 10`);
    alert(`Your the surprise 😁😁`);
  } else {
    alert(` ${name} Try once again😇 Your Score: ${marks} `);
  }
}

function Header() {
  return <h1 className="header">General Knowledge Quiz🧠</h1>;
}

function Content() {
  return (
    <div className="content">
      <form onSubmit={DisplayRes}>
        <h2>
          Enter your Name
          <input type="text" id="name" required></input>
        </h2>
        <h1 className="answer">
          Answer all the questions correctly a surprise treasure uncovers😮
        </h1>
        <Question
          ques="1. What is the color of the Tree ?"
          ans1="Yellow"
          ans2="Red"
          ans3="Green"
          name="q1"
        />
        <Question
          ques="2. How many days are there in a week ?"
          ans1="Seven"
          ans2="Five"
          ans3="Six"
          name="q2"
        />
        <Question
          ques="3. What is the national bird of india ?"
          ans1="PeaCock"
          ans2="Parrot"
          ans3="Pigeon"
          name="q3"
        />
        <Question
          ques="4. What is the national Animal of india ?"
          ans1="Lion"
          ans2="Tiger"
          ans3="Elephant"
          name="q4"
        />
        <Question
          ques="5. Which is the largest ocean in the world ?"
          ans1="Pacific Ocean"
          ans2="Atlantic Ocean"
          ans3="Indian Ocean"
          name="q5"
        />
        <Question
          ques="6. Which season comes after winter ?"
          ans1="Spring"
          ans2="Summer"
          ans3="Rainy"
          name="q6"
        />
        <Question
          ques="7. Which Country has more population ?"
          ans1="India"
          ans2="China"
          ans3="America"
          name="q7"
        />
        <Question
          ques="8. Capital of karnataka ?"
          ans1="Bangalore"
          ans2="Bengaluru"
          ans3="Mysuru"
          name="q8"
        />
        <Question
          ques="9. Language the people most speak in karnataka ?"
          ans1="Kannada"
          ans2="English"
          ans3="Telugu"
          name="q9"
        />
        <Question
          ques="10. Number of alphabets ?"
          ans1="26"
          ans2="25"
          ans3="30"
          name="q10"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

function Question(props) {
  return (
    <div>
      <h2>{props.ques}</h2>
      <input type="radio" name={props.name} value={props.ans1} required />
      <label>{props.ans1}</label>

      <input type="radio" name={props.name} value={props.ans2} required />
      <label>{props.ans2}</label>

      <input type="radio" name={props.name} value={props.ans3} required />
      <label>{props.ans3}</label>
    </div>
  );
}
