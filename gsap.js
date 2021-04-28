// timeline 
let tl = gsap.timeline({ duration: 1 });



// gsap 
tl.from(".overlay", {
    duration: 1,
    backgroundColor: "#000"
});
tl.from(".title-overlay", {
    duration: 2,
    opacity: 0,
    x: -100
});
tl.from(".menu-tendina", {
    duration: 2,
    opacity: 0,
    height: 0
}, "-=1");
tl.from(".form", {
    duration: 1,
    opacity: 0,
    delay: 1
}, "-=1.5");