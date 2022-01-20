//https://teachablemachine.withgoogle.com/models/v9B0pEMJd/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 90
});
var camera = document.getElementById("camera")
Webcam.attach("#camera")

function snapshot() {
    Webcam.snap(function (data_URI) {
        document.getElementById("result").innerHTML = '<img id = "capture_image" src="' + data_URI + '"/>'
    })
}
console.log(ml5.version)
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v9B0pEMJd/model.json',model_loaded)
function model_loaded() {
    console.log('model_loaded')
}
function check() {
    img = document.getElementById('capture_image')
    classifier.classify(img,gotresult)
}
function gotresult(error,results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}