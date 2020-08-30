if (!params.disableCore) {
    var i = 0;
    var txtSpeed = txtSpeed || 50
    setInterval(function() {

        if (text[i]) {
            $("#main-text").text($("#main-text").text() + text[i]);
            i++
        }

    }, txtSpeed)
}