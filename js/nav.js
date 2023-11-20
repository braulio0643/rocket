const bigMac = document.querySelector(".bigMac")
const nav = document.getElementById("navBar")

bigMac.addEventListener("click", ()=> {
    if (nav.classList.contains("showMenu")) {
      nav.classList.remove("showMenu");
    } else {
      nav.classList.add("showMenu");
    }
})