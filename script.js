const navMenu = document.querySelector('.list')
const navMenuOpen = document.querySelector('.nav_menu-open')
const navMenuClose = document.querySelector('.nav_menu-close')
 

navMenuOpen.addEventListener('click',()=>{
    navMenu.style.display ='flex'
    navMenuOpen.style.display ='none'
    navMenuClose.style.display='inline-block'
})
navMenuClose.addEventListener('click',()=>{
    navMenu.style.display ='none'
    navMenuOpen.style.display ='inline-block'
    navMenuClose.style.display='none'
})



gsap.registerPlugin(ScrollTrigger);



gsap.from("nav h1",{
    opacity:0,
    x:-100,
    duration:1,
    delay:1,

})
gsap.from(".list a",{
    opacity:0,
    y:-100,
    duration:1,
    delay:1,
    stagger:0.2

})
gsap.from(".title",{
    opacity:0,
    duration:2,
    delay:1,
    
})


gsap.from(".title button",{
    opacity:0,
    x:100,
    duration:1,
    delay:1,
    stagger:0.3
})
gsap.from(".img", {
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".img", // Specifies the element to observe
        start: "top 50%", // Starts when the top of .img is 80% of the viewport height
        end: "top 10%", // Ends when the top of .img reaches 30%
         // Show scroll markers (for debugging)
        scrub: 1, // Smooth scrolling animation
        toggleActions: "play none none none"
    }
});
gsap.from(".left h3, .left p",{
    opacity:0,
    y:-100,
    duration:1,
    delay:1,
    stagger:0.9,
    scrollTrigger: {
        trigger: ".img", // Specifies the element to observe
        start: "top 50%", // Starts when the top of .img is 80% of the viewport height
        end: "top 10%", // Ends when the top of .img reaches 30%
        // Show scroll markers (for debugging)
        scrub: 3 ,// Smooth scrolling animation
        toggleActions: "play none none none"
    }
})
gsap.from(".right h1",{
    opacity:0,
    x:100,
    duration:1,
    delay:1,
    scrollTrigger: {
        trigger: ".img", // Specifies the element to observe
        start: "top 50%", // Starts when the top of .img is 80% of the viewport height
        end: "top 10%", // Ends when the top of .img reaches 30%
         // Show scroll markers (for debugging)
        scrub: 3 // Smooth scrolling animation
    }
     
})
 
gsap.from(".right p",{
    opacity:0,
    x:150,
    duration:1,
    delay:1.5,
    scrollTrigger: {
        trigger: ".img", // Specifies the element to observe
        start: "top 50%", // Starts when the top of .img is 80% of the viewport height
        end: "top 10%", // Ends when the top of .img reaches 30%
        // Show scroll markers (for debugging)
        scrub: 4, // Smooth scrolling animation
        toggleActions: "play none none none"
    }
     
})
gsap.from(".skill-title",{
    opacity:0,
    x:-150,
    duration:1,
    delay:1.5,
    scrollTrigger: {
        trigger: ".skill-title", // Specifies the element to observe
        start: "top 70%", // Starts when the top of .img is 80% of the viewport height
        end: "top 40%", // Ends when the top of .img reaches 30%
        // Show scroll markers (for debugging)
        scrub: 4, // Smooth scrolling animation
    }
     
})
gsap.from(".rt ul li",{
    opacity:0,
    x:150,
    duration:1,
    delay:1.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".rt ul li", // Specifies the element to observe
        start: "top 70%", // Starts when the top of .img is 80% of the viewport height
        end: "top 10%", // Ends when the top of .img reaches 30%
          // Show scroll markers (for debugging)
        scrub: 3, // Smooth scrolling animation
    }
     
})
gsap.from(".rh img",{
    opacity:0.5,
    scale:0,
    duration:1,
    delay:1.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".rh img", // Specifies the element to observe
        start: "top 90%", // Starts when the top of .img is 80% of the viewport height
        end: "top 0%", // Ends when the top of .img reaches 30%
         // Show scroll markers (for debugging)
        scrub: 4, // Smooth scrolling animation
    }
     
})
gsap.from(".cards",{
    opacity:0.5,
    scale:0,
    duration:1,
    delay:1.5,
    stagger:1,
    scrollTrigger: {
        trigger: ".cards", // Specifies the element to observe
        start: "top 85%", // Starts when the top of .img is 80% of the viewport height
        end: "top 40%", // Ends when the top of .img reaches 30%
        // Show scroll markers (for debugging)
        scrub: 4, // Smooth scrolling animation
    }
     
})
gsap.from(" .pro a",{
    opacity:0.2,
    scale:0,
    duration:1,
    delay:1,
    stagger:4,
    scrollTrigger: {
        trigger: "  .pro a", // Specifies the element to observe
        start: "top 85%", // Starts when the top of .img is 80% of the viewport height
        end: "top 40%", // Ends when the top of .img reaches 30%
          // Show scroll markers (for debugging)
        scrub: 5, // Smooth scrolling animation
    }
     
})

