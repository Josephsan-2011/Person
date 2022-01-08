//https://teachablemachine.withgoogle.com/models/l6B8qc6Id/
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
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/l6B8qc6Id/model.json',model_loaded)
function model_loaded() {
    console.log('model_loaded')
}