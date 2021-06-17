  camera=document.getElementById("camera");
Webcam.set({
    height:300,
    width:300,
image_format:'png',
png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_url+'">';
});
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);
function modelLoaded() {
    console.log("Model Loaded")
}
function check() {
    var img=document.getElementById("captured_image");
     classfier.classfy(img , gotResult());
  }
  function gotResult(error, results) {
    if (error) {
       console.error(error);
       document.getElementById("result_object_result").innerHTML= "You can't enter" ;
    }
    else {
       console.log(results);
       document.getElementById("result_object_name").innerHTML=results[0].label;
       document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(2);
       document.getElementById("result_accuracy_result").innerHTML= "You are safer to enter" ;
    }
 }
    }
