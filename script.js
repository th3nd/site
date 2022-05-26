
function select() {
    const txtbox = document.getElementById('txt');
    txtbox.focus();
    txtbox.select();
}

document.addEventListener("keyup", function(e) {
    const txtbox = document.getElementById('txt');
    const content = document.getElementById('content');
    if (e.key === "Enter") {
        content.innerHTML += "<p>> " + txtbox.value + "</p>"
        validate(txtbox.value)
        txtbox.value = ""
    }
}); 

function validate(txt) {
    const content = document.getElementById('content');

    if (content.offsetHeight > 400) {
        content.innerHTML = ""
    }

    if (txt.includes("title")) {
        txt = txt.slice(6)
        document.title = (txt)
        txt = "title"
    }

    /* does not look nice */
    switch (txt) {
        case "help":
            content.innerHTML += "<p style='color: rgb(100, 200, 100)'>" + "list of commands: " + "</p>"
            content.innerHTML += "<p style='color: rgb(100, 100, 100)'>" + "help - what do u think" + "</p>"
            content.innerHTML += "<p style='color: rgb(100, 100, 100)'>" + "acc - list of current steam accounts" + "</p>"
            content.innerHTML += "<p style='color: rgb(100, 100, 100)'>" + "contact - contact information" + "</p>"
            content.innerHTML += "<p style='color: rgb(100, 100, 100)'>" + "playlist - link to my playlist (wow)" + "</p>"
            content.innerHTML += "<p style='color: rgb(100, 100, 100)'>" + "cls - clears the cmd." + "</p>"
            content.innerHTML += "<p style='color: rgb(100, 100, 100)'>" + "title - sets the sites title" + "</p>"
            break
        case "acc":
            content.innerHTML += "<p style='color: rgb(100, 200, 100)'>" + "list of accounts: " + "</>"
            content.innerHTML += "<a href='https://steamcommunity.com/id/63u' style='color: rgb(100, 200, 100)'>" + "main" + "</a>"
            content.innerHTML += "<a href='https://steamcommunity.com/id/leandoer2k' style='color: rgb(100, 200, 100)'>" + " | fresh" + "</a>"
            content.innerHTML += "<a href='https://steamcommunity.com/id/srcengine' style='color: rgb(100, 200, 100)'>" + " | lvl 50+" + "</a>"
            content.innerHTML += "<a href='https://steamcommunity.com/id/srcsdk' style='color: rgb(100, 200, 100)'>" + " | 2016 medal" + "</a>"
            break
        case "contact":
            content.innerHTML += "<p style='color: rgb(100, 200, 100)'>" + "discord: thn#3690" + "</p>"
            break
        case "playlist":
            content.innerHTML += "<a href='https://open.spotify.com/playlist/7wf0WXwT4OwJNac3oHG4HO?si=cc1622b2366d4fd4' style='color: rgb(100, 200, 100)'>" + "click here" + "</a>"
            break
        case "cls":
            content.innerHTML = ""
            break
        case "title":
            content.innerHTML += "<p style='color: rgb(100, 200, 100)'>" + "success." + "</p>"
            break
        default:
            content.innerHTML += "<p style='color: rgb(200, 100, 100)'>" + "not a valid command. type 'help' for a list of commands." + "</p>"
            break
    }
}

