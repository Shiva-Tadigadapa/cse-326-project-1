

        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 2000); 
        }



        
 hoverBox = document.getElementById("de-footer-links");
 spanhover = document.getElementById("-fotter-span");

 hoverBox1 = document.getElementById("de-footer-links1");
 spanhover1 = document.getElementById("-fotter-span1");

 hoverBox2 = document.getElementById("de-footer-links2");
 spanhover2 = document.getElementById("-fotter-span2");

 hoverBox3 = document.getElementById("de-footer-links3");
 spanhover3 = document.getElementById("-fotter-span3");

 
hoverBox.addEventListener('mouseover',function(){
    spanhover.classList.add('span-hover');
});
hoverBox.addEventListener('mouseleave',function(){
        spanhover.className = spanhover.className.replace('span-hover','');
});
 

hoverBox1.addEventListener('mouseover',function(){
    spanhover1.classList.add('span-hover');
    console.log("got it");
});
hoverBox1.addEventListener('mouseleave',function(){
        spanhover1.className = spanhover.className.replace('span-hover','');
        console.log("t it");    
});


hoverBox2.addEventListener('mouseover',function(){
    spanhover2.classList.add('span-hover');
    console.log("got it");
});
hoverBox2.addEventListener('mouseleave',function(){
        spanhover2.className = spanhover.className.replace('span-hover','');
        console.log("t it");    
});

hoverBox3.addEventListener('mouseover',function(){
    spanhover3.classList.add('span-hover');
    console.log("got it");
});
hoverBox3.addEventListener('mouseleave',function(){
        spanhover3.className = spanhover.className.replace('span-hover','');
        console.log("t it");    
});


hover1 = document.getElementById("social-logo1");

hover1.addEventListener('mouseover',function(){
   hover1.style.color = "white";
   hover1.style.transition = "0.70s"
});
hover1.addEventListener('mouseleave',function(){
   hover1.style.color = "black";
});

hover1 = document.getElementById("social-logo1");

hover1.addEventListener('mouseover',function(){
   hover1.style.color = "white";
   hover1.style.transition = "0.70s"

    // console.log("got it");
});
hover1.addEventListener('mouseleave',function(){
   hover1.style.color = "black";
    // console.log("t it");    
});

hover2 = document.getElementById("social-logo2");

hover2.addEventListener('mouseover',function(){
   hover2.style.color = "white";
   hover2.style.transition = "0.70s"
    // console.log("got it");
});
hover2.addEventListener('mouseleave',function(){
   hover2.style.color = "black";
    // console.log("t it");    
});

hover3 = document.getElementById("social-logo3");

hover3.addEventListener('mouseover',function(){
   hover3.style.color = "white";
   hover3.style.transition = "0.70s"
    // console.log("got it");
});
hover3.addEventListener('mouseleave',function(){
   hover3.style.color = "black";
    // console.log("t it");    
});

hover4 = document.getElementById("social-logo4");

hover4.addEventListener('mouseover',function(){
   hover4.style.color = "white";
   hover4.style.transition = "0.70s"
    // console.log("got it");
});
hover4.addEventListener('mouseleave',function(){
   hover4.style.color = "black";
    // console.log("t it");    
});

hover5 = document.getElementById("social-logo5");

hover5.addEventListener('mouseover',function(){
   hover5.style.color = "white";
   hover5.style.transition = "0.70s"
    // console.log("got it");
});
hover5.addEventListener('mouseleave',function(){
   hover5.style.color = "black";
    // console.log("t it");    
});


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

email=document.getElementById("-email").value;
password=document.getElementById("-password").value;
function checkfunction(){
  if(email || password == "" )
  {
      alert("pls enter valid details!");
  }
}