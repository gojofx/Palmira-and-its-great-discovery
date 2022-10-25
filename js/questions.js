// creating an array and passing the number, questions, options, and answers
// let questions = [
//     {
//     numb: 1,
//     question: "What does HTML stand for?",
//     answer: "Hyper Text Markup Language",
//     options: [
//       "Hyper Text Preprocessor",
//       "Hyper Text Markup Language",
//       "Hyper Text Multiple Language",
//       "Hyper Tool Multi Language"
//     ]
//   },
//     {
//     numb: 2,
//     question: "What does CSS stand for?",
//     answer: "Cascading Style Sheet",
//     options: [
//       "Common Style Sheet",
//       "Colorful Style Sheet",
//       "Computer Style Sheet",
//       "Cascading Style Sheet"
//     ]
//   },
//     {
//     numb: 3,
//     question: "What does PHP stand for?",
//     answer: "Hypertext Preprocessor",
//     options: [
//       "Hypertext Preprocessor",
//       "Hypertext Programming",
//       "Hypertext Preprogramming",
//       "Hometext Preprocessor"
//     ]
//   },
//     {
//     numb: 4,
//     question: "What does SQL stand for?",
//     answer: "Structured Query Language",
//     options: [
//       "Stylish Question Language",
//       "Stylesheet Query Language",
//       "Statement Question Language",
//       "Structured Query Language"
//     ]
//   },
//     {
//     numb: 5,
//     question: "What does XML stand for?",
//     answer: "eXtensible Markup Language",
//     options: [
//       "eXtensible Markup Language",
//       "eXecutable Multiple Language",
//       "eXTra Multi-Program Language",
//       "eXamine Multiple Language"
//     ]
//   },
//   // you can uncomment the below codes and make duplicate as more as you want to add question
//   // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   //   {
//   //   numb: 6,
//   //   question: "Your Question is Here",
//   //   answer: "Correct answer of the question is here",
//   //   options: [
//   //     "Option 1",
//   //     "option 2",
//   //     "option 3",
//   //     "option 4"
//   //   ]
//   // },
// ];
let questions;
const banner = document.querySelector('#banner');
const infoBanner = document.querySelector('#quesTy');

function re(){
  if (resultado == 1){
    // alert('shit');
    questions = [
      {
      numb: 1,
      question: "By what name(s) is/are palmira known?",
      answer: "Villa de las palmas & Llanogrande",
      options: [
        "Villa de las palmas",
        "Only known as palmira",
        "Llanogrande",
        "Villa de las palmas & Llanogrande"
      ]
    },
      {
      numb: 2,
      question: "The most common river to spend a weekend break is?",
      answer: "Los chorros",
      options: [
        "Los chorros",
        "Confandi",
        "Puerto amor",
        "Parque del azucar"
      ]
    },
      {
      numb: 3,
      question: "The most common point of reference in the city is?",
      answer: "Ferrocarril del pacifico",
      options: [
        "a church near the city center",
        "the station",
        "Ferrocarril del pacifico",
        "bolivar square"
      ]
    },
      {
      numb: 4,
      question: "The most spoken word by every palmireño is?",
      answer: "Vé",
      options: [
        "Vé",
        "Oís",
        "ñapa",
        "sereno"
      ]
    },
      {
      numb: 5,
      question: "What are the city's tourist attractions??",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language"
      ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
  ];
  banner.classList.add('bannerPalmira');
  banner.classList.remove('bannerMalagana');
  infoBanner.innerHTML = "Palmira";
  }else if (resultado == 0){
    // alert('wenas');
    questions = [
      {
      numb: 1,
      question: "Malagana?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
      ]
    },
      {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ]
    },
      {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor"
      ]
    },
      {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
      ]
    },
      {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language"
      ]
    },
    // you can uncomment the below codes and make duplicate as more as you want to add question
    // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  
    //   {
    //   numb: 6,
    //   question: "Your Question is Here",
    //   answer: "Correct answer of the question is here",
    //   options: [
    //     "Option 1",
    //     "option 2",
    //     "option 3",
    //     "option 4"
    //   ]
    // },
  ];
  banner.classList.remove('bannerPalmira');
  banner.classList.add('bannerMalagana');
  infoBanner.innerHTML = "Cultura Malagana";

  }

}


