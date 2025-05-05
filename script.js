window.onload = function() {
  const secondNav = document.getElementById("second-nav");
  const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/"; // Adjust for your index file path

  if (isIndexPage) {
      secondNav.style.position = "absolute";
  } else {
      secondNav.style.position = "static";
  }
};

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  const secondNav = document.getElementById("second-nav");

  if (window.innerWidth < 801) {
      secondNav.style.position = "relative";
  } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      secondNav.style.position = "fixed";
      secondNav.style.top = "0";
      secondNav.style.width = "100%";
  } else {
      const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/"; // Adjust for your index file path

      if (isIndexPage) {
          secondNav.style.position = "absolute";
      } else {
          secondNav.style.position = "static";
      }
  }
}
// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     const secondNav = document.getElementById("second-nav");

//     if (window.innerWidth < 801) {
//         secondNav.style.position = "relative";
//     } else if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         secondNav.style.position = "fixed";
//         secondNav.style.top = "0";
//         secondNav.style.width = "100%";
//     } else {
//         secondNav.style.position = "static"; // Adjust this if your desired default is different
//     }
// }

// Call the function initially to set the correct position based on the current scroll and window size
scrollFunction();

// Add event listener for window resize to adjust


// let flag = 0;

// function controller(x){
//     flag = flag + x;
//     slideshow(flag);
// }
// slideshow(flag);

// function slideshow(num){
//     let slides = document.getElementsByClassName('slide');

//     if(num == slides.length){
//         flag = 0;
//         num = 0;
//     }
//     if(num < 0 ){
//         flag = slides.length-1;
//         num = slides.length-1;
//     }           
//     for(let y of slides){
//         y.style.display = "none";
//     }
    
//     slides[num].style.display = "block";
//     setInterval(function() {
//     controller(1);
//     }, 10000);
// }

// let flag = 0;

// function controller(x) {
//     flag = flag + x;
//     slideshow(flag);
// }

// For sliding effect to the whole body

// document.addEventListener("DOMContentLoaded", function() {
//     document.body.classList.add('slide-in');
// });

// function slideshow(num) {
//     let slides = document.getElementsByClassName('slide');

//     // Reset flag and num if num is equal to the number of slides
//     if (num === slides.length) {
//         flag = 0;
//         num = 0;
//     }

//     // Adjust flag and num if num is less than 0
//     if (num < 0) {
//         flag = slides.length - 1;
//         num = slides.length - 1;
//     }

//     // Hide all slides
//     for (let y of slides) {
//         y.style.display = "none";
//     }

//     // Display the current slide
//     slides[num].style.display = "block";

//     // Call controller(1) every 10 seconds
//     setTimeout(function() {
//         controller(1);
//     }, 5000);
// }

// // Start the slideshow
// slideshow(flag);



function toggleNav() {
    var sideNav = document.getElementById("sideNav");
    var menuIcon = document.getElementById("menu-icon");
    var navLinks = document.getElementById("nav-links");

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        menuIcon.innerHTML = "&#9776;"; // Hamburger icon
        navLinks.classList.remove("hidden"); // Show main nav links
        sideNav.classList.remove("fixed"); // Remove fixed positioning
    } else {
        sideNav.style.width = "250px";
        menuIcon.innerHTML = ""; // Close icon
        navLinks.classList.add("hidden"); // Hide main nav links
        sideNav.classList.add("fixed"); // Add fixed positioning
    }
}


function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("menu-icon").innerHTML = "&#9776;"; // Hamburger icon
    document.getElementById("nav-links").classList.remove("hidden"); // Show main nav links
}

// New slide bar
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  const current = slider.querySelector('.current');
  const currentIndex = Array.from(slides).indexOf(current);
  current.classList.remove('current');
  const nextIndex = (currentIndex + 1) % slides.length;
  slides[nextIndex].classList.add('current');
};

const prevSlide = () => {
  const current = slider.querySelector('.current');
  const currentIndex = Array.from(slides).indexOf(current);
  current.classList.remove('current');
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[prevIndex].classList.add('current');
};

next.addEventListener('click', () => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', () => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
