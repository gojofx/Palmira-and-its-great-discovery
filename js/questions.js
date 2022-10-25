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
  if ((resultado%2) == 0){
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
      answer: "All",
      options: [
        "Parapente La buitrera",
        "Bosque municipal",
        "Plaza de Bolivar",
        "All",
        "None"
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
  }else if ((resultado%2) != 0){
    // alert('wenas');
    questions = [
      {
      numb: 1,
      question: "What is malagana in palmira?",
      answer: "one and three are true",
      options: [
        "is the culture that inhabited the territory a long time ago.",
        "is a national heritage",
        "an almost forgotten culture that is being recognized through events.",
        "one and three are true",
        "being in a bad mood",
        "All answers are not true"
      ]
    },
      {
      numb: 2,
      question: "There are two museums in Malagana, where are they located?",
      answer: "The station of Ferrocarril and El Bolo",
      options: [
        "The station of Ferrocarril and El Bolo",
        "Amaime and The starion of Ferricarril",
        "Zamorano and El Bolo",
        "Amaime and El Bolo",
        "All answers are not true",
        "all are true"
      ]
    },
      {
      numb: 3,
      question: "today 2022, __ years have passed since the discovery of La Cultura Malagana",
      answer: "30",
      options: [
        "10",
        "48",
        "23",
        "30"
      ]
    },
      {
      numb: 4,
      question: "the cultural center for learning any kind of art is..",
      answer: "La casa de la cultura",
      options: [
        "The church Trinidad",
        "La casa de la cultura",
        "Teatro materon",
        "Universidad nacional"
      ]
    },
      {
      numb: 5,
      question: "are efforts currently being made in palmira to revive this culture?",
      answer: "yes, because it is important to know the Roots of the territory",
      options: [
        "No, it is not important to know about a culture that is already dead.",
        "yes, because it is important to know the Roots of the territory.",
        "yes, because there is money involved",
        "yes, because yes"
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


