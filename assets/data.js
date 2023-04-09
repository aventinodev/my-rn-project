const avatar1 = require("./images/avatarSmall.jpg");
const images1 = require("./images/mountains.png");
const images2 = require("./images/sunset.png");
const images3 = require("./images/house.png");

export const profilesAll = [
  {
    id: "45k6-j54k-4jth",
    name: "Natali Romanova",
    email: "nat@gmail.com",
    avatar: avatar1,
  },
  // {
  //   id: "4116-jfk5-43rh",
  //   name: "Romanova Natali",
  //   email: "nat@gmail.com",
  //   avatar: avatar1,
  // },
];

export const postsAll = [
  {
    id: "1",
    image: images1,
    text: "Лес",
    comments: 8,
    likes: 153,
    location: "Ukraine",
  },
  {
    id: "2",
    image: images2,
    text: "Закат на Черном море",
    comments: 3,
    likes: 200,
    location: "Ukraine",
  },
  {
    id: "3",
    image: images3,
    text: "Старый домик в Венеции",
    comments: 50,
    likes: 200,
    location: "Italy",
  },
];
