const emailSendButton = document.getElementById('email-button');
const emailNoti       =  document.getElementById("noti");
const emailName       = document.getElementById('email-text');
const errorNoti       =  document.querySelector(".error-noti");
console.log(emailName.value);
emailSendButton.addEventListener("click",(e)=>{
      e.preventDefault();
      const params= {
        from_name : document.getElementById("name").value,
        email_id  : document.getElementById("email").value,
        message   : document.getElementById("message").value
      }
      if(params.from_name !== '' || params.email_id || params.message){
           emailjs.send("service_dy8pwss","template_71i5q4m",params).then((res)=>{
            emailName.textContent = `Email have been received. Thanks ${params.from_name}`;  
            emailNoti.classList.add("active-noti");
              setTimeout(()=>{
                emailNoti.classList.remove("active-noti");
              },4000); 
     });
     }

     else {
         errorNoti.classList.add("active-error");
         setTimeout(()=>{
          errorNoti.classList.remove("active-error");
        },3000); 
     }
})

const scroll =  document.querySelector(".scroll-icon")
window.addEventListener("scroll",()=>{
    scroll.classList.toggle("active-scroll", window.scrollY > 700);
})
//scroll to top
scroll.addEventListener("click",()=>{
    window.scrollTo({
        top:0
    })
});

const menu = document.getElementById('menu');
const mobileNav = document.querySelector(".mobile-nav");
menu.addEventListener('click',(m)=>{
    mobileNav.classList.toggle("active-mobile");
})
ScrollReveal().reveal('main', {delay:700, duration:1000, interval:4});
ScrollReveal().reveal('nav',{delay:500, duration:1200, scale:1.5, interval:4 ,origin:"bottom"});

ScrollReveal().reveal('.profile-info-left', {delay:600,duration:1000,distance:"20rem",origin:"left",interval:5,easing:"ease"});
ScrollReveal().reveal('.profile-info-right', {delay:600,duration:1000,distance:"20rem",origin:"right",interval:5,easing:"ease" });

ScrollReveal().reveal('.info-section-left', {delay:600,duration:1500,interval:2,origin:"left",easing:"ease"});
ScrollReveal().reveal('.info-section-right', {delay:600,duration:1500,interval:2,origin:"left",easing:"ease" });

ScrollReveal().reveal('.skill-section', {delay:500,duration:1200,origin:"bottom",easing:"ease",scale:1.1 });

ScrollReveal().reveal('.chillflix', {delay:500,duration:1000,origin:"left",easing:"ease",scale:1.05 });
ScrollReveal().reveal('.shortern', {delay:500,duration:1000,origin:"top",easing:"ease",scale:1.02 });
ScrollReveal().reveal('.modern', {delay:500,duration:1000,origin:"right",easing:"ease",scale:1.06  });
ScrollReveal().reveal('.bank', {delay:500,duration:1000,origin:"bottom",easing:"ease",scale:1.03  });

ScrollReveal().reveal('.service-1', {delay:"500",duration:"1000",distance:"10rem",origin:"left",easing:"ease",scale:1.05 });
ScrollReveal().reveal('.service-2', {delay:"600",duration:"1200",distance:"10rem",origin:"right",easing:"ease",scale:1.1 });
ScrollReveal().reveal('.service-3', {delay:"700",duration:"1400",distance:"10rem",origin:"top",easing:"ease",scale:1.3 });

ScrollReveal().reveal('.footer-contact', {delay:"100",duration:"1000",distance:"20rem",origin:"right",easing:"ease" });
ScrollReveal().reveal('.footer-control', {delay:"1200",duration:"1300",distance:"20rem",origin:"left",easing:"ease"});


// ScrollReveal().reveal('main', {delay:700, duration:1000});
// ScrollReveal().reveal('main', {delay:700, duration:1000});

// ScrollReveal().reveal('nav,header,section,.skills-section,article,.project-section,.services-section,footer',

// {delay:"700",easing:"ease-in",useDelay:"always"});


// ScrollReveal().reveal('.profile-info-left', {delay:"700",duration:"1000",distance:"20rem",origin:"left",interval:500,easing:"ease"});
// ScrollReveal().reveal('.profile-info-right', {delay:"700",duration:"1000",distance:"20rem",origin:"right",interval:500,easing:"ease" });

// ScrollReveal().reveal('.info-section-left', {delay:"700",duration:"1000",distance:"20rem",origin:"left",easing:"ease"});
// ScrollReveal().reveal('.info-section-right', {delay:"700",duration:"1000",distance:"20rem",origin:"right",easing:"ease" });

// ScrollReveal().reveal('.skill-section', {delay:"700",duration:"1000",distance:"20rem",origin:"left",easing:"ease",scale:1.1 });

// // ScrollReveal().reveal('.project-section', {delay:"800",duration:"1000",easing:"ease" });
// ScrollReveal().reveal('.chillflix', {delay:"800",duration:"1500",distance:"20rem",origin:"left",easing:"ease" });
// ScrollReveal().reveal('.bank', {delay:"1000",duration:"1800",distance:"20rem",origin:"right",easing:"ease" });
// ScrollReveal().reveal('.shortern', {delay:"1200",duration:"2100",distance:"20rem",origin:"left",easing:"ease" });
// ScrollReveal().reveal('.modern', {delay:"1400",duration:"2400",distance:"20rem",origin:"right",easing:"ease" });

// // ScrollReveal().reveal('.services-section', {delay:"1200",duration:"1000",distance:"20rem",origin:"left",easing:"ease" });
// ScrollReveal().reveal('.service-1', {delay:"1000",duration:"1200",distance:"20rem",origin:"left",easing:"ease",scale:1.05 });
// ScrollReveal().reveal('.service-2', {delay:"1300",duration:"1800",distance:"20rem",origin:"left",easing:"ease",scale:1.1 });
// ScrollReveal().reveal('.service-3', {delay:"1500",duration:"2500",distance:"20rem",origin:"left",easing:"ease",scale:1.3 });


// ScrollReveal().reveal('.footer-contact', {delay:"1300",duration:"1800",distance:"20rem",origin:"right",easing:"ease" });
// ScrollReveal().reveal('.footer-control', {delay:"1500",duration:"2000",distance:"20rem",origin:"left",easing:"ease"});