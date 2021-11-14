Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
var prediction_1="";
var prediction_2="";
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_img"/>';

    });
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GriVfGGWS/model.json",modelloded);
function modelloded(){
    console.log("model loded");
}
function speak(){
  var synth=window.speechSynthesis;
 speak_data="the first prediction is "+prediction_1;
 speak_data2="the second prediction is "+prediction_2;
 var utterthis=new SpeechSynthesisUtterance(speak_data+speak_data2);
 synth.speak(utterthis);
}
function nul(){
    window.alert("Nullllll sorry do not click again ");
}
function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        document.getElementById("emotion_name").innerHTML=result[0].label;
        console.log(result);
        document.getElementById("emotion_name2").innerHTML=result[1].label;
        prediction_1=result[0].label;
        prediction_2=result[1].label;
     speak();
     if(result[0].label=="happy"){
         document.getElementById("update_emoji").innerHTML="&#128522;";
     }
     if(result[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML="&#128532;";
    }
    if(result[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML="&#128548;";
    }
    if(result[1].label=="happy"){
        document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if(result[1].label=="sad"){
        document.getElementById("update_emoji2").innerHTML="&#128532;";
    }
    if(result[1].label=="angry"){
        document.getElementById("update_emoji2").innerHTML="&#128548;";
    }
    }

}
