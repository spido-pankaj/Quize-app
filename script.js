const quizeDB = [
  {
    question: 'Q1: What is the full form of HTML ?',
    a: 'Hello To My Land',
    b: 'Hey Text Markup Language',
    c: 'HyperText Makeup Language',
    d: 'HyperText Markup Language',
    ans: 'ans4',
  },

  {
    question: 'Q2: What is the full form of CSS ?',
    a: 'Cascading Style Sheets',
    b: 'Cascading Style store',
    c: 'Cascading Style sheep',
    d: 'Cascading Super Sheets',
    ans: 'ans1',
  },

  {
    question: 'Q3: What is the full form of HTTPS ?',
    a: 'Hypertext Test Protocol',
    b: 'Hyper Transfer Protocol',
    c: 'Hypertext Transfer Paper',
    d: 'Hypertext Transfer Protocol',
    ans: 'ans2',
  },

  {
    question: 'Q4: What is the full form of JS ?',
    a: 'Javasource',
    b: 'Javascript',
    c: 'Javascience',
    d: 'Jangoscope',
    ans: 'ans2',
  },
]

// getting reference for question and answer we get and store it in a variable

const question = document.querySelector('.question')
const option1 = document.querySelector('#opt-1')
const option2 = document.querySelector('#opt-2')
const option3 = document.querySelector('#opt-3')
const option4 = document.querySelector('#opt-4')
const submit = document.querySelector('#submit')
const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#score')

// now we creating auto loading question and options after click on centerr div button

let questionCount = 0
let score = 0 // score is for showing score

const loadQueation = () => {
  const questionList = quizeDB[questionCount]
  question.innerText = questionList.question

  option1.innerText = questionList.a
  option2.innerText = questionList.b
  option3.innerText = questionList.c
  option4.innerText = questionList.d
}
loadQueation()

// now getting radio button data after clicking submit button
const getCheckAnswer = () => {
  let answer

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id
    }
  })

  return answer
}

// here i create deselect function

const deselectAnswer = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false))
}

// end deselect function

submit.addEventListener('click', () => {
  const checkAnswer = getCheckAnswer()
  console.log(checkAnswer)

  // now here we compare answer and load next question

  // comparing

  if (checkAnswer === quizeDB[questionCount].ans) {
    score++
  }

  // load next qustiion

  questionCount++

  deselectAnswer() // here i call deselect function

  if (questionCount < quizeDB.length) {
    loadQueation()
  } else {
    showScore.innerHTML = `<h3 class="h3"> You scored ${score} / ${quizeDB.length} ✌️</h3>
      <button class="btn" onclick = location.reload()>Play Again</button>`

    showScore.classList.remove('score-div')
  }
})
