gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var crsr = document.querySelector("#cursor")
var main = document.querySelector("body")

main.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x + 20 +"px"
  crsr.style.top = dets.y + 20 +"px"
})

var vid = document.querySelector("#page1 video")

vid.addEventListener("mouseenter",function(dets){
  crsr.style.left = dets.x +"px"
  crsr.style.top = dets.y + "px"
  crsr.innerHTML = "sound on";
  crsr.style.padding = "15px 20px"
  crsr.style.borderRadius = "30px"
  crsr.style.width = "110px"
  crsr.style.objectFit = cover
  crsr.style.objectPosition = center
})

vid.addEventListener("mouseleave",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  crsr.innerHTML = "";
  crsr.style.padding = "0px"
  crsr.style.borderRadius = "50%"
  crsr.style.width = "20px"
})

var image = document.querySelector("#page3 #ppl img")

image.addEventListener("mouseenter",function(){
  crsr.innerHTML = "view";
  crsr.style.padding = "15px 30px"
  crsr.style.borderRadius = "30px"
})

image.addEventListener("mouseleave",function(){
  crsr.innerHTML = "";
  crsr.style.padding = "0px"
  crsr.style.borderRadius = "50%"
  crsr.style.width = "20px"
})

var ved =document.querySelector("#page3 video")

ved.addEventListener("mouseenter",function(){
  crsr.innerHTML = "view";
  crsr.style.padding = "15px 30px"
  crsr.style.borderRadius = "30px"
})

ved.addEventListener("mouseleave",function(){
  crsr.innerHTML = "";
  crsr.style.padding = "0px"
  crsr.style.borderRadius = "50%"
  crsr.style.width = "20px"
})

var boxes = document.querySelectorAll(".page5-box")

boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.width = "300px"
    crsr.style.height = "300px"
    crsr.style.borderRadius = "0px"
    crsr.style.backgroundImage = `url(${att})`
    crsr.zIndex = 99
  })
  elem.addEventListener("mouseleave",function(){
    var att = elem.getAttribute("")
    crsr.style.width = "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `url(none)`
    crsr.style.backgroundColor = "#EDBFFF"
  })
})

var h4 = document.querySelectorAll("#nav h4")
var pp = document.querySelector("#purple")

h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    pp.style.display = "block"
    pp.style.opacity = "1"
  })
  elem.addEventListener("mouseleave",function(){
    pp.style.display = "none"
    pp.style.opacity = "0"
  })
})

var tl = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page1>h1",
        // markers:true,
        start:"top 28%",
        end:"top -10%",
        scrub:3
    }
})
tl.to("#page1>h1",{
    x:-200,
},"anim")

tl.to("#page1>h2",{
    x:200
},"anim")

tl.to("#page1 video",{
    width:"90%"
})

var tl2 = gsap.timeline({
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page1>h1",
      // markers:true,
      start:"top -120%",
      end:"top -130%",
      scrub:3
  }
})

tl2.to("#main",{
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page1>h1",
      // markers:true,
      start:"top -480%",
      end:"top -500%",
      scrub:3
  }
})

tl3.to("#main",{
  backgroundColor:"#000"
})