let typeContainer = document.querySelector("#typeContainer")
let typeSelection = document.querySelector("#typeSelection")

let typeRemove = document.querySelector("#typeRemove")
let typeRemovePartially = document.querySelector("#typeRemovePartially")
let typeRemoveEx = document.querySelector("#typeRemoveEx")
let typeCut = document.querySelector("#typeCut")
let typeSpray = document.querySelector("#typeSpray")

typeRemove.addEventListener("click", selectTR)
typeRemovePartially.addEventListener("click", selectTRP)
typeRemoveEx.addEventListener("click", selectTRE)
typeCut.addEventListener("click", selectC)
typeSpray.addEventListener("click", selectS)

function selectTR() {
    for (const i of typeSelection.children) {
        i.classList.remove("type-selected")
    }
    typeRemove.classList.toggle("type-selected")
    document.querySelector("#type1How").classList.remove("d-none")
    document.querySelector("#type2How").classList.add("d-none")
    document.querySelector("#type3How").classList.add("d-none")
    document.querySelector("#type4How").classList.add("d-none")
    document.querySelector("#type41How").classList.add("d-none")
    document.querySelector("#type5How").classList.add("d-none")
}

function selectTRP() {
    for (const i of typeSelection.children) {
        i.classList.remove("type-selected")
    }
    typeRemovePartially.classList.toggle("type-selected")
    document.querySelector("#type1How").classList.add("d-none")
    document.querySelector("#type2How").classList.remove("d-none")
    document.querySelector("#type3How").classList.add("d-none")
    document.querySelector("#type4How").classList.add("d-none")
    document.querySelector("#type41How").classList.add("d-none")
    document.querySelector("#type5How").classList.add("d-none")
}

function selectTRE() {
    for (const i of typeSelection.children) {
        i.classList.remove("type-selected")
    }
    typeRemoveEx.classList.toggle("type-selected")
    document.querySelector("#type1How").classList.add("d-none")
    document.querySelector("#type2How").classList.add("d-none")
    document.querySelector("#type3How").classList.remove("d-none")
    document.querySelector("#type4How").classList.add("d-none")
    document.querySelector("#type41How").classList.add("d-none")
    document.querySelector("#type5How").classList.add("d-none")
}

function selectC() {
    for (const i of typeSelection.children) {
        i.classList.remove("type-selected")
    }
    typeCut.classList.toggle("type-selected")
    document.querySelector("#type1How").classList.add("d-none")
    document.querySelector("#type2How").classList.add("d-none")
    document.querySelector("#type3How").classList.add("d-none")
    document.querySelector("#type4How").classList.remove("d-none")
    document.querySelector("#type41How").classList.remove("d-none")
    document.querySelector("#type5How").classList.add("d-none")
}

function selectS() {
    for (const i of typeSelection.children) {
        i.classList.remove("type-selected")
    }
    typeSpray.classList.toggle("type-selected")
    document.querySelector("#type1How").classList.add("d-none")
    document.querySelector("#type2How").classList.add("d-none")
    document.querySelector("#type3How").classList.add("d-none")
    document.querySelector("#type4How").classList.add("d-none")
    document.querySelector("#type41How").classList.add("d-none")
    document.querySelector("#type5How").classList.remove("d-none")
}