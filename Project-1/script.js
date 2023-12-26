var cursr=document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets) {
    cursr.style.left=dets.x-100+"px"
    cursr.style.top=dets.y-100+"px"
})


gsap.to("#nav", {
    backgroundColor: "black",
    // duration:0.5,
    height: "120px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end :"top -11%",
        scrub:1,
    }
})
gsap.to("#main", {
    backgroundColor: "black",
    duration:1,
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -80%",
        scrub:2,

    }
})