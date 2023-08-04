import { SlLogin } from "react-icons/sl";
import { PATH } from "../service/path";
import { BsPlusLg } from "react-icons/bs"

const navbarList = [
  {
    id:1,
    logo: "1M-Studio",
    routess: PATH.layoutPath.home,
  },
  {
    id:2,
    caption: "Инструкторы",
    routess: PATH.layoutPath.instructor
  },
  {
    id:3,
    caption: "Расписание",
    routess: PATH.layoutPath.schedule
  }, 
  {
    id:4,
    icon: SlLogin,
    routess: PATH.Auth.login
  },
  {
    id:5,
    caption: "Выйти",
    routess: PATH.Auth.login,
  },  
];

const sliderList = [
  {
    id:1,
    image: "https://show-biz.by/upimg/image/upimg_file/3727/800"
  },
  {
    id:2,
    image: "https://avatars.dzeninfra.ru/get-zen_doc/1587710/pub_5d0146b6582ec400ab67fa18_5d0146d642211f00abc3f73d/scale_1200",
  }, 
  {
    id:3,
    image: "https://www.yesasia.ru/wp-content/uploads/2019/03/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9-113.jpg"
  },
];

const categoriesList = [
  {
    id: 1,
    caption: "FAQ",
    routes: PATH.layoutPath.faq
  },
  {
    id: 2,
    caption: "CONTACT US"
  },
  {
    id: 3,
    caption: "AGENCY"
  },
  {
    id:4,
    caption: "RECRUITMENT"
  }
];

const footerListLeft = [
  {
    id: 1,
    names: "Classes"
  },
  {
    id: 2,
    caption: "Schedule"
  },
  {
    id: 3,
    caption: "Buy tickets"
  },
  {
    id: 4,
    caption: "Instructor"
  },
];

const footerListRight = [
  {
    id: 1,
    names: "Infos"
  },
  {
    id: 2,
    caption: "About Us"
  },
  {
    id: 3,
    caption: "FAQ"
  },
  {
    id: 4,
    caption: "Contact Us"
  },
];

const cardList = [
  {
    id:1,
    caption: "Алекс",
    img: "https://cdn.hswstatic.com/gif/now-a1206e17-134e-4a52-80e0-036e9c6d01b8-1210-680.jpg"
  },
  {
    id:2,
    caption: "Ара Чо",
    img: "https://img.freepik.com/free-photo/happy-young-man-dancing-in-casual-clothes-or-suit-remaking-legendary-moves-of-celebrity_155003-44137.jpg?w=2000"
  },
  {
    id:3,
    caption: "Остин Пак",
    img: "https://i.pinimg.com/1200x/a0/a4/a1/a0a4a1079e72372ddcb1db611d182269.jpg"
  },
  {
    id:4,
    caption: "Бейл",
    img: "https://media.istockphoto.com/id/1310527796/photo/japanese-male-ballet-dancer.jpg?s=612x612&w=0&k=20&c=nBLc8kbofXrOZv96pZeX4Tex6wHDYoy-WqLgvRU4YJk="
  },
  {
    id:5,
    caption: "Цвет",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1FzyFguqPc9qbEakMguOpgaZgh2RKvKQ5g&usqp=CAU"
  },
  {
    id:6,
    img: "https://i.gifer.com/origin/58/583b923b140aac2ffbdac007052f3d40_w200.gif"
  },
  {
    id:7,
    caption: "Кроу",
    img: "https://cdn.quotesgram.com/img/88/89/398393837-male-dance.jpg"
  },
  {
    id:8,
    caption: "Дабин",
    img: "https://cdn.pixabay.com/photo/2020/06/11/05/57/dance-5285354_960_720.jpg"
  },
  {
    id:9,
    caption: "Деббин",
    img: "https://as2.ftcdn.net/v2/jpg/03/54/93/41/1000_F_354934190_WnQjJ27jHek1TVxSTvQJpzujxiI0q3WD.jpg"
  },
];

const QuestionList = [
  {
    id: 1,
    caption: "자주하는 질문",
    word: "Часто задаваемые вопросы?",
    routes: PATH.layoutPath.faq
  },
  {
    id: 2,
    caption: "문의하기",
    word: "Связаться с нами"
  },
  {
    id: 3,
    caption: "에이전시",
    word: "Агентсво"
  },
  {
    id: 4,
    caption: "채용",
    word: "Набор персонала"
  },
];

const faqList = [
  {
    id:1,
    question:"Являются ли курсы 1MILLION открытыми для всех?",
    img: BsPlusLg,
  },
  {
    id:2,
    question:"Я забыл свой адрес электронный почты/пароль",
    img: BsPlusLg,
  },
  {
    id:3,
    question:"Какие существует уровни классов?",
    img: BsPlusLg,
  },
  {
    id:4,
    question:"Другие запросы",
    img: BsPlusLg,
  },
  {
    id:5,
    question:"Как пройти занятие,",
    img: BsPlusLg,
  },
  {
    id:6,
    question:"Как я могу войти в класс после покупки билета?",
    img: BsPlusLg,
  },
  {
    id:7,
    question:"Как я могу записаться на занятие?",
    img: BsPlusLg,
  },
  {
    id:8,
    question:"Как я могу забронировать занятие?",
    img: BsPlusLg,
  },
  {
    id:9,
    question:"Какие жанры преподоет 1MIILION?",
    img: BsPlusLg,
  },
  {
    id:10,
    question:"Я не могу забронировать занятие что мне делать?",
    img: BsPlusLg,
  },
  {
    id:11,
    question:"Как проходят занятие?",
    img: BsPlusLg,
  },
  {
    id:12,
    question:"Когда я могу забронировать занятие на следующей недели?",
    img: BsPlusLg,
  },
  {
    id:13,
    question:"Что я должен принести на урок?",
    img: BsPlusLg,
  },
  {
    id:14,
    question:"Могу ли я изменить или отменить бронирование класса?",
    img: BsPlusLg,
  },
];


export const  list = {
  navbarList,
  sliderList ,
  categoriesList,
  footerListLeft,
  footerListRight,
  cardList,
  QuestionList,
  faqList
}