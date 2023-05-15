const quotes = {
  'Dr. Kris Heap': "Isn't temporarily sacrificing a little comfort worth meaningful work?",
  'Steve Harvey': "If you are going through hell, keep going.",
  'Zig Ziglar': "You can't climb a smooth mountain.",
  'Jack Canfield': "If someone else can do it, I can do it.",
  'Earl Nightingale': "Success is won or lost by our ability to serve others.",
  'Darren Hardy': "If you want to have more, you have to become more.",
  'Wayne Dyer': "Don't believe everything you think.",
  'Inky Johnson': "Every storm has an expiration date.",
  'Andrew Tate': "My unmatched perspicacity coupled with sheer indefeatability makes me a feirce opponent in any realm of human endeavor.",
  'Gary Vee': "Ideas are shit. Execution is the game.",
  'Gary Vaynerchuk': "Smart work will never replace hard work, it only supplements it.",
  'Hamza': "Do the hard work, especially when you don't feel like it.",
  'Brian Tracy': "Your ability to concentrate single-mindedly on one thing, the most important thing, and stay at it until it is complete, is an essential prerequisite for success.",
  'Jim Rohn': "Don't wish it were easier. Wish you were better.",
  'Iman Ghadzhi': "Imperfect action is better than inaction."
}
const entries = Object.entries(quotes); //converts quotes object into a 2D array for simpler access.

function getRBG() { //function to get a random rgb color code
  let rgbValue = [];
    for(let i = 0; i < 3;i++){
      let a = Math.floor(Math.random()*256);
      rgbValue.push(a);
    }
    let colorRGB = "rgb("+rgbValue.join(",")+")";
  return colorRGB;
}

function randomGradient(color) { //function to get random gradient 
  return 'linear-gradient(to bottom right,'+color+",rgb(1, 255, 77)" ;
}

function change() { //what to change every time button is clicked
  let randomIndex = Math.floor(Math.random()*entries.length); //choose random quote from quotes array
  let author = entries[randomIndex][0];
  let quote = entries[randomIndex][1];
  
  $('#tweet-quote').attr( //modifies href attribute to share quote as a tweet
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author)
  );
  $("#author").animate({opacity: 0}, 500, function() { //text to fade into the browser
    $(this).animate({opacity: 1}, 500)
    $("#author").text(author)
  });
  $("#text").animate({opacity: 0}, 450, function() { //text to fade into the browser
    $(this).animate({opacity: 1}, 450)
    $("#text").text(quote);
  });
  $("#quote-box").css("background", randomGradient(getRBG())) //change background color each time browser loads
}

document.addEventListener("keydown", function(event) { //change function executed when 'Enter' key is clicked
  if (event.keyCode === 13) {
    change();
  }
});
const btn = document.querySelector("button")
btn.addEventListener("click", change); //the change function to run when btn is clicked
document.onload = change(); //when the browser loads to run the change function, not to wait for the click