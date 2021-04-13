Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,

})
Webcam.attach("#camera");


function clickPicture(){
    Webcam.snap(
        function(picture){
            document.getElementById("snapshot").innerHTML=`<img id="captured_image" src=${picture}>`
        }
       
    )
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("model has been loaded")
}

function identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("output").innerHTML=results[0].label;
    }
}
