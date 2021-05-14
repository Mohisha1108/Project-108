//https://teachablemachine.withgoogle.com/models/M56rsVMlr/
var prediction1 = "";
var prediction2 = "";
Webcam.set({
  width: 350,
  height:300,
  image_format: 'png',
  png_quality:100
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img src="+data_uri+" id='captured_image'>";
  });
}
console.log("ml5 version",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M56rsVMlr/model.json',modelLoaded);
function modelLoaded(){
  console.log("model has been loaded");
}
function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first Prediction is "+ prediction1;
  speak_data_2 = "The second Prediction is "+ prediction2;
  var utter_this = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
  synth.speak(utter_this);
}
function check(){
    var img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error, result){
      if (error){
          console.error(error);
      }
      else{
          console.log(result);
      }
      document.getElementById("result_emotion_name").innerHTML = result[0].label;
      document.getElementById("result_emotion_name2").innerHTML = result[1].label;
      prediction1 = result[0].label;
      prediction2 = result[1].label;
      speak();
      if (result[0].label == "Waving hand")
      {
          document.getElementById("update_emoji").innerHTML = "👋🏼";
      }
      if (result[0].label == "Thumbs Up")
      {
          document.getElementById("update_emoji").innerHTML = "👍🏼";
      }
      if (result[0].label == "Thumbs Down")
      {
          document.getElementById("update_emoji").innerHTML = "👎🏼";
      }
      if (result[0].label == "Pointing Finger")
      {
          document.getElementById("update_emoji").innerHTML = "☝🏼";
      }
      if (result[0].label == "Victory")
      {
          document.getElementById("update_emoji").innerHTML = "✌🏼";
      }
      if (result[0].label == "Greeting Friends")
      {
          document.getElementById("update_emoji").innerHTML = "👊🏼";
      }
      if (result[0].label == "Ok gestu re")
      {
          document.getElementById("update_emoji").innerHTML = "👌🏼";
      }
      if (result[0].label == "Crossed fingers")
      {
          document.getElementById("update_emoji").innerHTML = "🤞🏼";
      }
      if (result[1].label == "Waving hand")
      {
          document.getElementById("update_emoji2").innerHTML = "👋🏼";
      }
      if (result[1].label == "Thumbs Up")
      {
          document.getElementById("update_emoji2").innerHTML = "👍🏼";
      }
      if (result[1].label == "Thumbs Down")
      {
          document.getElementById("update_emoji2").innerHTML = "👎🏼";
      }
      if (result[1].label == "Pointing Finger")
      {
          document.getElementById("update_emoji2").innerHTML = "☝🏼";
      }
      if (result[1].label == "Victory")
      {
          document.getElementById("update_emoji2").innerHTML = "✌🏼";
      }
      if (result[1].label == "Greeting Friends")
      {
          document.getElementById("update_emoji2").innerHTML = "👊🏼";
      }
      if (result[1].label == "Ok gestu re")
      {
          document.getElementById("update_emoji2").innerHTML = "👌🏼";
      }
      if (result[1].label == "Crossed fingers")
      {
          document.getElementById("update_emoji2").innerHTML = "🤞🏼";
      }
}