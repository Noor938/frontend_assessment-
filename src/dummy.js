import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";

export const comment_data = [
  {
    img: user1,
    name: "Maria",
    content:
      "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
    reply: [
      {
        img: user1,
        name: "Ali",
        content: "Old rivalry! Consider me in ;-)",
      },
    ],
  },
  {
    img: user2,
    name: "Alex Benjamin",
    content:
      "  Home sweet home! I’m glad you are back. It’s been two year and miss the football matches we have together. A lot has been changed since you left. Let’s meet at the ground tomorrow evening? ",
    reply: [
      {
        img: user1,
        name: "Ali",
        content: "Old rivalry! Consider me in ;-)",
      },
    ],
  },
  {
    img: user3,
    name: "Tania",
    content:
      " Hey bud, welcome back to home. It’s so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
    reply: [
      {
        img: user1,
        name: "Ali",
        content: "Old rivalry! Consider me in ;-)",
      },
    ],
  },
];
