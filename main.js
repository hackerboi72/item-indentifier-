function whatisgonnahappenoooo() {
    Webcam.snap(
        function (result_image) {
            document.getElementById("result").innerHTML = '<img id = "captured_image" src = "' + result_image + '">';

        }
    )
}
function identifyimage () {
    
}
Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpg', 
    jpg_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera")
console.log("ml5version: " , ml5.version); 

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/V9ENMcfVT/model.json", modelloaded)
function modelloaded () {
    console.log("model is loaded ");
    
}
function identifyimage() {
     img = document.getElementById("captured_image"); 
     classifier.classify(img, gotresult) 
}
function gotresult(error, result) {
    if(error) {
        console.error(error)
    }else{
        console.log(result)
        document.getElementById("object_name").innerHTML = result[0].label 
        document.getElementById("object_accuracy").innerHTML = result[0].confidence.toFixed(3)
    }
}
