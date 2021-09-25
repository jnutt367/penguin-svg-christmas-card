const tl = gsap.timeline().to("#test", { fill: "aqua" }, 3)
    .to("#bg", { fill: "red", opacity: 0.8, repeat: -1 })