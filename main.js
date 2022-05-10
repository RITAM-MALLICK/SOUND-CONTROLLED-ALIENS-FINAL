function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/C3tyeA33h/model.json',modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      
      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');
  
      if (results[0].label == "clap") {
          img.src = "aliens-01.gif";
          img1.src = "aliens-02.png";
          img2.src = "alien-03.png";
          img3.src = "alien-04.png";
      }else if (results[0].label == "bell") {
        img.src = "aliens-01.png";
        img1.src = "aliens-02.gif";
        img2.src = "alien-03.png";
        img3.src = "alien-04.png";
      }else if (results[0].label == "snapping") {
        img.src = "aliens-01.png";
        img1.src = "aliens-02.png";
        img2.src = "alien-03.gif";
        img3.src = "alien-04.png";
      }else {
        img.src = "aliens-01.png";
        img1.src = "aliens-02.png";
        img2.src = "alien-03.png";
        img3.src = "alien-04.gif";
      }
   }
  }