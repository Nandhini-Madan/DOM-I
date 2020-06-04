const siteContent = {
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let cta_id=document.getElementById("cta-img");
cta_id.setAttribute('src',siteContent["cta"]["img-src"]);
let middle_img=document.getElementById("middle-img");
middle_img.setAttribute('src',siteContent["main-content"]["middle-img-src"]);
let sitec=siteContent["nav"]["nav-item-1"];
console.log(sitec);

let nav_a=document.getElementsByTagName("a");

nav_a[0].textContent=siteContent["nav"]["nav-item-1"];
nav_a[1].textContent=siteContent["nav"]["nav-item-2"];
nav_a[2].textContent=siteContent["nav"]["nav-item-3"];
nav_a[3].textContent=siteContent["nav"]["nav-item-4"];
nav_a[4].textContent=siteContent["nav"]["nav-item-5"];
nav_a[5].textContent=siteContent["nav"]["nav-item-6"];

console.log(nav_a);

let cta_h1=document.querySelector("cta-text,h1");
cta_h1.textContent=siteContent["cta"]["h1"];
console.log(cta_h1);
let cta_button=document.querySelector("cta-text,button");
console.log(cta_button);
cta_button.textContent=siteContent["cta"]["button"];
console.log(cta_button);

let features_h4=document.querySelectorAll('h4')[0];
features_h4.textContent=siteContent["main-content"]["features-h4"];

let features_p=document.querySelectorAll('p')[0];
features_p.textContent=siteContent["main-content"]["features-content"];

let about_h4=document.querySelectorAll('h4')[1];
about_h4.textContent=siteContent["main-content"]["about-h4"];

let about_p=document.querySelectorAll('p')[1];
about_p.textContent=siteContent["main-content"]["about-content"];

let services_h4=document.querySelectorAll('h4')[2];
services_h4.textContent=siteContent["main-content"]["services-h4"];
let services_p=document.querySelectorAll('p')[2];
services_p.textContent=siteContent["main-content"]["services-content"];

let product_h4=document.querySelectorAll("h4")[3];
product_h4.textContent=siteContent["main-content"]["product-h4"];
let product_content=document.querySelectorAll("p")[3];
product_content.textContent=siteContent["main-content"]["product-content"];
let vision_p=document.querySelectorAll("h4")[4];
vision_p.textContent=siteContent["main-content"]["vision-h4"];
let vision_content=document.querySelectorAll("p")[4];
vision_content.textContent=siteContent["main-content"]["vision-content"];

let contact_h4=document.querySelectorAll('h4')[5];
contact_h4.textContent=siteContent["contact"]["contact-h4"];
let contact_content1=document.querySelectorAll('p')[5];
contact_content1.textContent=siteContent["contact"]["address"];
let contact_content2=document.querySelectorAll('p')[6];
contact_content2.textContent=siteContent["contact"]["phone"];
let contact_content3=document.querySelectorAll('p')[7];
contact_content3.textContent=siteContent["contact"]["email"];

let footer_p=document.querySelectorAll('p')[8];
console.log(footer_p);
footer_p.textContent=siteContent["footer"]["copyright"];

console.log(footer_p);

let color_change=document.querySelectorAll('a');
color_change.forEach(Element=>{
  Element.style.color="green";
});

let test1=document.createElement('a');
test1.textContent="test1";
nav_a[5].appendChild(test1);

let test2=document.createElement('a');
test2.textContent="test2";
nav_a[6].prepend(test2);

console.log(cta_h1.textContent);

let br1=doument.createElement('br');
let words=cta_h1.textContent.split(' ');
cta_h1.appendChild(br1);
























