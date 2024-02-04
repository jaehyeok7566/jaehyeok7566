const quotes = [
  {
    quote: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    author: "AAA",
  },
  {
    quote: "bbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    author: "BBB",
  },
  {
    quote: "cccccccccccccccccccc",
    author: "CCC",
  },
  {
    quote: "dddddddddddddddddddddddddddddd",
    author: "DDD",
  },
  {
    quote: "eeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    author: "EEE",
  },
  {
    quote: "ffffffffffffffffffffffffffffff",
    author: "FFF",
  },
  {
    quote: "ggggggggggggggggggggggggggg",
    author: "GGG",
  },
  {
    quote: "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
    author: "HHH",
  },
  {
    quote: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    author: "III",
  },
  {
    quote: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    author: "JJJ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;