function makeScreenshot()
{
    html2canvas(document.getElementById("screenshot"), {scale: 2}).then(canvas =>
    {
        canvas.id = "canvasID";
        var main = document.getElementById("right");
        //while (main.firstChild) { main.removeChild(main.firstChild); }
        child = document.getElementById("canvasID");
        if(child != undefined){
            main.replaceChild(canvas, child);
        }
        main.appendChild(canvas);
        document.getElementById("canvasID").style.display = "none";
    });
}


document.getElementById("a-make").addEventListener('click', function()
{
    //document.getElementById("a-make").style.display = "none";
    makeScreenshot();
    document.getElementById("a-download").style.display = "inline";
}, false);

document.getElementById("a-download").addEventListener('click', function()
{
    this.href = document.getElementById("canvasID").toDataURL();
    this.download = "image.png";
}, false);