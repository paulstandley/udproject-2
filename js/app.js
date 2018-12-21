
windowObject();

function windowObject() {

    document.getElementById("button").addEventListener("click", clicked);
    function clicked(evt) {
        evt.preventDefault();
        document.getElementById("me").innerHTML = `<div id="template"><h1 id="h1Id">I have had a lot of gip for my style</h1><img src="http://res.cloudinary.com/pieol2/image/upload/v1520446386/funPicWebDev.jpg" width="20%" id="clickPick"><h2 id="h2Id">This I don't compute</h2><object class="hide_object" id="clickMessage" data="img/noYD.wav"><param name="autoplay" value="true"></object></div>`;
    }

// end of the window object    
}