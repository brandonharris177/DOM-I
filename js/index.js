const greatIdeas = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', greatIdeas["nav"]["img-src"])

const nav = document.querySelectorAll("nav a");
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

const logo = document.querySelector("#logo-img");
logo.src = "img/logo.png"

const ctaH1 = document.querySelector(".cta h1");
ctaH1.textContent = greatIdeas[`cta`][`h1`];

const ctaButton = document.querySelector(".cta button");
ctaButton.textContent = "Get Started";

const ctaImg =  document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png";

const topContentH4 = document.querySelectorAll(".top-content h4")
topContentH4[0].textContent = "Features";
topContentH4[1].textContent ="About";

const topContent = document.querySelectorAll(" .top-content .text-content p");
topContent[0].textContent = greatIdeas[`main-content`] ["features-content"];
topContent[1].textContent = greatIdeas["main-content"]['about-content']

const middleImg = document.querySelector(`.middle-img`);
middleImg.src = "img/mid-page-accent.jpg"

const bottomContentH4 = document.querySelectorAll(".bottom-content h4");
bottomContentH4[0].textContent = "Services";
bottomContentH4[1].textContent = "Product";
bottomContentH4[2].textContent = "Vision";

const bottomContent = document.querySelectorAll(" .bottom-content .text-content p");
bottomContent[0].textContent = greatIdeas[`main-content`] ["services-content"];
bottomContent[1].textContent = greatIdeas["main-content"]['product-content']
bottomContent[2].textContent = greatIdeas["main-content"][`vision-content`]

const contactH4 = document.querySelector(`.contact h4`);
contactH4.textContent = greatIdeas[`contact`]["contact-h4"];

const contactinfo = document.querySelectorAll(`.contact p`);
contactinfo.forEach(
  (element, index) => (
    element.textContent = Object.values(greatIdeas.contact) [index + 1]
  ),
);

const copyright = document.querySelector(`footer p`);
copyright.textContent = greatIdeas[`footer`][`copyright`];

nav.forEach(
  (element, index) =>
  element.style.color = 'green'
  );

const last = document.createElement(`a`);

last.textContent = `Last`;

document.querySelector(`nav`).appendChild(last);

const first = document.createElement(`a`);

first.textContent = `First`

document.querySelector(`nav`).prepend(first);

mainHeader.innerText = greatIdeas.cta.h1.split(' ').join('\n');