
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

    if (content.offsetHeight > (screen.height * 0.65)) {
        content.innerHTML = ""
    }

    if (txt.includes("title")) {
        txt = txt.slice(6)
        document.title = (txt)
        txt = "succ"
    }
    
    if (txt.includes("bg")) {
        txt = txt.slice(3)
        document.body.style.backgroundColor  = (txt)
        txt = "succ" // kan ändras
    }

    switch (txt) {
        case "help":
            content.innerHTML += "<p id='green'>" + "list of commands: " + "</p>"
            content.innerHTML += "<p id='grey'>" + "help - what do u think" + "</p>"
            content.innerHTML += "<p id='grey'>" + "acc - list of current steam accounts" + "</p>"
            content.innerHTML += "<p id='grey'>" + "contact - contact information" + "</p>"
            content.innerHTML += "<p id='grey'>" + "playlist - link to my playlist (wow)" + "</p>"
            content.innerHTML += "<p id='grey'>" + "cls - clears the cmd" + "</p>"
            content.innerHTML += "<p id='grey'>" + "title %text% - sets the sites title" + "</p>"
            content.innerHTML += "<p id='grey'>" + "bg %color% - sets the sites bg-color" + "</p>"
            break
        case "acc":
            content.innerHTML += "<p id='green'>" + "list of accounts: " + "</>"
            content.innerHTML += "<p onclick=link('steamcommunity.com/id/63u') id='l'>" + "main" + "</p>"
            content.innerHTML += "<p onclick=link('steamcommunity.com/id/leandoer2k') id='l'>" + "fresh" + "</p>"
            content.innerHTML += "<p onclick=link('steamcommunity.com/id/srcengine') id='l'>" + "lvl 50+" + "</p>"
            content.innerHTML += "<p onclick=link('steamcommunity.com/id/srcsdk') id='l'>" + "2016 medal" + "</p>"
            break
        case "contact":
            content.innerHTML += "<p id='green'>" + "discord: thn#3690" + "</p>"
            break
        case "playlist":
            content.innerHTML += "<p onclick=link('open.spotify.com/playlist/7wf0WXwT4OwJNac3oHG4HO?si=cc1622b2366d4fd4') id='l'>" + "click here" + "</p>"
            break
        case "cls":
            content.innerHTML = ""
            break
        case "succ":
            content.innerHTML += "<p id='green'>" + "success." + "</p>"
            break
        case "ree":
            content.innerHTML += "<p id='red'>" + "doesnt work lmao" + "</p>"
            break
        default:
            content.innerHTML += "<p id='red'>" + "not a valid command. type 'help' for a list of commands." + "</p>"
            break
    }
}

function link(url) {
    window.open("https://" + url)
}