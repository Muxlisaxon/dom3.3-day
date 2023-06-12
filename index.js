let mus = document.querySelector(".mus")
let mus1 = document.querySelector(".mus1")
let mus2 = document.querySelector(".mus2")
let mus3 = document.querySelector(".mus3")

let audio = document.querySelector(".audio")
let audio1 = document.querySelector(".audio1")
let audio2 = document.querySelector(".audio2")
let audio3 = document.querySelector(".audio3")


mus.onclick = () => {
    audio.play()
}

mus1.onclick = () => {
    audio1.play()
}

mus2.onclick = () => {
    audio2.play()
}

mus3.onclick = () => {
    audio3.play()
}