(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {

const launchPage = document.getElementById('launch-page');
    const mainContent = document.getElementById('main');
    const enterBtn = document.getElementById('enter-btn');

    if (!enterBtn || !launchPage || !mainContent) {
      console.error('Launch elements missing');
      return;
    }

    enterBtn.addEventListener('click', () => {
      launchPage.classList.add('hidden');
      mainContent.classList.remove('hidden');
    });
const photos = [
 
  {
    img: "imgs/Buvaani.JPG",
    letter: "HAPPY 24TH BIRTHDAY THENU!! You have been there for me since the moment I was born and have helped me navigate so many moments in my life. I have always admired you being a natural leader with a kind heart. I still remember the time you took me out of the koyil during sapparam, so I wouldn't have to see the kaavadi lol. It was so nice to spend time with you and Shampi in Cali last winter, just like the old times when you would come for thiruvizha. I will cherish the memories we made, and here's to many more we'll create together! It sucks I won’t be there for your birthday but I know you will have an amazing one :))一 BK"
  },
  {
    img: "imgs/Chabeshan.jpeg",
    letter: "Happy birthday Thenu!!! I honestly don’t even know where to start — you’ve helped me so much, more than you probably realize. The advice you’ve given me and the way you’ve always been there when I needed someone has truly made such a difference in my life. You’ve guided me through so many moments and always know how to keep it real. You made me start believing in myself again, and I honestly needed that reassurance more than you know. Thank you for your kindness, your honesty, and for always believing in me. I hope your day is filled with all the love and happiness you bring to everyone else. – Much love, chabean♥️"
  },
  {
    img: "imgs/EelavanJ.jpeg",
    letter: "Happy Birthday, Thenu! Hope you have a fantastic day with your family and friends! Celebrate your birthday to how far you've come and everything that's still ahead. You're one of the kindest and genuine people I have met, and you truly deserve the best. Wishing you an amazing year ahead, filled with memories, new experiences, exciting opportunities, peace, and many more Tharavadu runs 🙏. Enjoy your special day & All the Best, Eelavan"
  },
  {
    img: "imgs/Harni.jpeg",
    letter: "Happy birthday to the only roommate I've had that didn’t make me lose my mind. Thanks for keeping me sane by entertaining and dealing with premi’s delulu so I didn’t have to. Can’t believe it’s been 6 years since the little Thenu moved to Toronto for undergrad to now being a full-on working corporate girlie (and soon to be married?? Hurry up please, I want to dress up) - so proud of how far you’re come!! Thanks for everything and for being such a great friend <3 Hope your birthday is filled with lots of good eats, laughter and a lot of happiness. Next year, 25th in Toronto!!!! <3"
  },
  {
    img: "imgs/Kiruthigan.jpeg",
    letter: "To my dear corporate Thangatchi Thenu, Hope you have an amazing day filled with lots of laughter and fun! I wish you a great year ahead. Thank you for being a great friend and I wish you a happy birthday. From your annan, Kiruthigan"
  },
  {
    img: "imgs/Mohammed.jpeg",
    letter: "Dear Thenu, One of the blessings of having been a part of the MHI program for me was making a few golden and genuine connections with my classmates that are integral to my life. I can most certainly say that you are one of them. Thank you for being the 2nd youngest MHI with me and for all our Turunno and scarbs adventures. You have the coolest personality and such a genuine character, a truly truly rare type of person to find nowadays (let alone call a close friend). I look forward to many many years of drawing inspiration from your unbeatable swag and inshallah more global linkups. Sincerely, Mohammed AlHabboub"
  },
  {
    img: "imgs/Prameshta.JPG",
    letter: "HAPPY BIRTHDAY GF!!! Hope 24 is amazing (you better live it up!!), wishing the best for you always! Lol I already blabbed in your card but thank you sm again for being YOU, your genuine and authentic self! Always so selfless and considerate. You’ve come so far with your masters and big girl job, I’m so proud of you!! I was scrolling through our chat trying to find a favourite picture of us for this and just couldn’t stop smiling at all the different memories throughout the last few years from 2 graduations, blue jays game, Tyler concert, birthdays, endless restaurants and summer outings. It all made me so happy and I can’t wait to make even more memories this year! Thenu, you’re one of those rare people who makes everyone’s life brighter just by being in it. You have the biggest heart, you always go out of your way for others, and it never goes unnoticed. Thank you for always being there, I don’t know what I’d do without you. So grateful for you always and love you so much! -Prameshta 🤍"
  },
  {
    img: "imgs/Ronisha.jpg",
    letter: "Happy Birthday Thenu Thank you for being such an amazing friend a person could ever ask for. I know that it can be very difficult to be my friend in terms of keeping me close and just keeping me in the loop of things, but the way you make sure to keep in touch and to not let go of our friendship, or anyone’s friendship that I have seen, make me respect you more and more everyday. Your respect towards your friends is beyond beautiful to experience and see. You know how to treat people well and you bring positive energy wherever you go. You are the life of the party and it's crazy how you are able to keep up that energy. You are honestly such an amazing soul and I'm glad to call you my friend. You are probably one of my most honest friends. I will shout out to Chubby in this message for being the friend to introduce you (somewhat) into my life. You are probably one of the only friends in which I remember the story of how we met, and that will never get old. God bless you and I wish you the very best in everything you do. Love you loads, and again Thank you for being you, and never in any universe or reincarnation change the way you are. Lots of Love, Ronisha"
  },

  {
    img: "imgs/Shraddha.JPG",
    letter: " HAPPY TEAKAY DAY!!!!! TWEKNEE FOH IZ CRAYZEE Thank you so very much for being my comfort person. I look back on pictures and you exude radiance, peace & warmth. I know a lot of people are gonna say “finding pics with you is so easy”, and it’s easy for me too but I’m glad 90% of the times I’ve seen you don’t involve photos or videos because I value those random conversations, drives home dropping you off or you beefing with my dad more than anything in the world. No words could ever do justice for expressing how immensely proud I am of you. If there’s anything I hope the world learns from you, I hope it’s the ability to make your presence known. I admire the ability you have to step into rooms where barely anybody knows you and then step out of that room with everyone knowing your name. I know you look up to people as mentors, but the truth is, I never had to look far for a mentor because I’ve had the absolute privilege to look up to you. I think everyone deserves a TeaKay in their life and all of us writing these messages for you are blessed to have you in ours. Thank you for making UofT bearable, thank you for always listening no matter how stupid I sound. Life wouldn’t be the same without you. You make the job of proud best friend easy, I’m eternally grateful for you and eye lauv yew shraddhu 🫶🏽"
  },

  {
    img: "imgs/Veena.JPG",
    letter: "Dear former tenant, Happy birthday and welcome to your mid twenties! This year will be the best one yet. In the months since I got evicted, I have missed our yap sessions, movie nights and having a cup of tea brought to my desk every morning without fail. You unexpectedly entered our lives 6 years ago and very quickly became a part of our family and completed the Kani Rasi holy trinity. Regardless of where you go, the doors at 32 Gillingham will always be open for you. May this year bring you happiness, prosperity, health, and perfectly steeped tea. With love, Your former (and best) landlord"
  },
  {
    img: "imgs/Vibooboo2.JPG",
    letter: "Many happy returns of the day thangatchi"
  },
  {
    img: "imgs/Vithiya.png",
    letter: "happy happy 24th birthday thenu!!! you probably already know this but i hope you truly understand how much of a bright light you are to everyone around you, and how important you are to me and everyone else who are so lucky to know you 🥹🩷i am so so proud of everything you’ve accomplished so far, this is only the beginning of the greatest journey! thank you for always being there for everyone whenever they need it, and i truly hope that we can even do half as much as you do for us. I hope that 24 brings you so many more amazing opportunities, and i cannot wait to see where life takes you. have the best day ever! - vee (vithiya 🩷)"
  },
  {
    img: "imgs/jujumuju.JPG", 
    letter: "ajnnjbhvggvhyghfgsddfhbncfvfdc  hbgffrftghuvbvfdsx fvffgfrfrgtgtfcdfswaqr`b c sd.  translation: ur alive another yr. old head. let this be another opportunity to feed me and watch me flourish into the rightful leader of this household. -booj"
  },


  // Add more photo/letter pairs as needed
];

// Select elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalLetter = document.getElementById('modal-letter');
const flipBtn = document.getElementById('flip-btn');
const closeBtn = document.getElementById('close-btn');
const card = modal.querySelector('.card');

// Event: when a gallery photo is clicked
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', () => {
    const index = photo.dataset.index;
    const { img, letter } = photos[index];
// Update modal contents
modalImg.src = img;
modalLetter.textContent = letter;

// RESET scroll so letter starts at the top
modalLetter.parentElement.scrollTop = 0;

// Reset state
card.classList.remove('flipped');
modal.classList.remove('hidden');

  });
});

// Event: flip button
flipBtn.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Event: close button
closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Optional: close modal when clicking outside the card
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

  });

}());
