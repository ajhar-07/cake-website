const swiper = new Swiper('.my-swiper', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  autoplay: {
   delay: 2500,
 },
});


// buttons section
const menu=document.getElementById('menu');

const menuCross=document.getElementById('"menu-cross');
const menuPage = document.getElementById('menu-page');

menu.addEventListener('click',()=>{
menuPage.style.display="block";


})

function cross(){
menuPage.style.display="none";

}


// order
const name1=document.getElementById("name1");
const price1=document.getElementById("price1");
const name2=document.getElementById("name2");
const price2=document.getElementById("price2");
const name3=document.getElementById("name3");
const price3=document.getElementById("price3");
const name4=document.getElementById("name4");
const price4=document.getElementById("price4");
const name5=document.getElementById("name5");
const price5=document.getElementById("price5");
const name6=document.getElementById("name6");
const price6=document.getElementById("price6");
const name7=document.getElementById("name7");
const price7=document.getElementById("price7");
const name8=document.getElementById("name8");
const price8=document.getElementById("price8");

// const qty=document.getElementById('input-qty');

// function ended(){
//   document.getElementById('order-page').style.display="none"
// }

document.getElementById("order-cross").addEventListener("click",()=>{
  document.getElementById('order-page').style.display="none"
})

// btn1
const btn1=document.getElementById('btn1');
btn1.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price1.innerText
cakeName.value=name1.innerText



})


// btn2

const btn2=document.getElementById('btn2');
btn2.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price2.innerText
cakeName.value=name2.textContent




})




// btn3

const btn3=document.getElementById('btn3');
btn3.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price3.innerText
cakeName.value=name3.textContent


})



// btn4

const btn4=document.getElementById('btn4');
btn4.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price4.innerText
cakeName.value=name4.textContent

})



// btn5

const btn5=document.getElementById('btn5');
btn5.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price5.innerText
cakeName.value=name5.textContent

})




// btn6

const btn6=document.getElementById('btn6');
btn6.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price6.innerText
cakeName.value=name6.textContent

})



// btn7

const btn7=document.getElementById('btn7');
btn7.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price7.innerText
cakeName.value=name7.textContent

})




// btn8

const btn8=document.getElementById('btn8');
btn8.addEventListener("click",(e)=>{
  e.preventDefault()
  document.getElementById('order-page').style.display="flex";

  const total=document.getElementById('input-total');
const cakeName=document.getElementById('input-cakeName');
total.value=price8.innerText
cakeName.value=name8.textContent

})


// function emailsend(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "farzuscake@gmail.com",
//     Password : "F7790A43FEFE4CF27FA00583489209A27027",
//     To : 'mostokinali20@gmail.com',
//     From : document.getElementById('input-email').value,
//     Subject : "New Order!!!",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }

// need to use in form teg  <form onsubmit="emailsend();reset();return false">


function cross2(){
  document.getElementById('order-btn-page').style.display="none"
}

document.getElementById('btn').addEventListener("click",(e)=>{
  e.preventDefault()
   document.getElementById('order-btn-page').style.display="block"
   document.getElementById('menu-page').style.display="none"
})

