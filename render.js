module.exports = function(scene) {
    var buttons = "";
    for (let i = 0; i < scene.options.length; i++) {
        const option = scene.options[i];
        buttons += `<a class="mx-auto text-center btn btn-${option.style || "secondary"}" href="/story/${option.result}">${option.text}</a><br>`

    }
    var scriptsStr = "";
    if (scene.scripts) {
        for (let i = 0; i < scene.scripts.length; i++) {
            scriptsStr = scriptsStr + `<script src="/scripts/${scene.scripts[i]}"></script>`

        }
    }
    var imgSrc = "/images/" + scene.pic
    var coreStr = `<!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>var params = ${JSON.stringify(scene.params) || "{}"}</script>
    <script>var text="${scene.text}"</script>
    ${scriptsStr}
    <script src="/scripts/core.js"></script>
    <h2 id="main-text" style='color:${scene.color || "black"}' class="text-center display-4"></h2><br>${buttons}`;
    //ALL RENDERING HERE






    var built = `<html><head></head><body style="background-image: url('${imgSrc}'); background-size: 100% 100%;">` + coreStr + `</body></html>`
    return built;
}