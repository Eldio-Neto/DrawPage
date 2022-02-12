<<<<<<< HEAD
var participantes = []

function idGenerator() {
    var timeStamp = new Date()
    var id = timeStamp.getHours().toString() +
        timeStamp.getMinutes().toString() +
        timeStamp.getSeconds().toString() +
        timeStamp.getMilliseconds().toString();

    return id

}


function createPerson() {
    if (document.getElementById("names").value != "") {
        var participante = document.getElementById("names").value;

        var list = {

            id: idGenerator(),
            data: {
                description: participante
            }

        }

        participantes.push(list)
        updateScreen()
    }
    else{
        alert("You must to write a name")
    }


}


function updateScreen() {

    var list1 = "<ul>"

    participantes.forEach((list => {

        list1 += "<li id-data=" + list.id + ">" + list.data.description + "<button  onclick= removePerson(this) id-data=" + list.id + ">" + "remove</button>" + "</li>"

    }))
    list1 += "</ul>"

    document.getElementById("participantList").innerHTML = list1;
    document.getElementById("names").value = ""

}

function removePerson(element) {

    participantes = participantes.filter(list => list.id != element.getAttribute("id-data"))

    updateScreen()


}



function sort() {

    let vencedor = participantes;

    let np = vencedor.length;

    let sp = Math.floor(Math.random() * np)

    document.getElementById("Winner").innerText = "Quem ganhou foi " + vencedor[sp].data.description

}














=======
var participantes = []

function idGenerator() {
    var timeStamp = new Date()
    var id = timeStamp.getHours().toString() +
        timeStamp.getMinutes().toString() +
        timeStamp.getSeconds().toString() +
        timeStamp.getMilliseconds().toString();

    return id

}


function createPerson() {
    if (document.getElementById("names").value != "") {
        var participante = document.getElementById("names").value;

        var list = {

            id: idGenerator(),
            data: {
                description: participante
            }

        }

        participantes.push(list)
        updateScreen()
    }
    else{
        alert("You must to write a name")
    }


}


function updateScreen() {

    var list1 = "<ul>"

    participantes.forEach((list => {

        list1 += "<li id-data=" + list.id + ">" + list.data.description + "<button  onclick= removePerson(this) id-data=" + list.id + ">" + "remove</button>" + "</li>"

    }))
    list1 += "</ul>"

    document.getElementById("participantList").innerHTML = list1;
    document.getElementById("names").value = ""

}

function removePerson(element) {

    participantes = participantes.filter(list => list.id != element.getAttribute("id-data"))

    updateScreen()


}



function sort() {

    let vencedor = participantes;

    let np = vencedor.length;

    let sp = Math.floor(Math.random() * np)

    document.getElementById("Winner").innerText = "Quem ganhou foi " + vencedor[sp].data.description

}














>>>>>>> c0714bea28d18a48abde08a144efd81a7cfe60c1
