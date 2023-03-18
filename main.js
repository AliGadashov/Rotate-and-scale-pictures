
    let zM = 1; 
    let zP = 1; 
    let degreeM = 0;
    let degreeP = 0;
    let stepZM = 0.5;
    let stepZP = 0.5;
    let step_degM = 90;
    let step_degP = 90;
    let div_height = 200;
    let photo_width = 100;

    class pictureOperator {
      constructor ( picture ) {
        this.picture = picture;
      }
      rotate (oriantation) {
        if(this.picture == "mustang"){
          document.getElementById("mustang").style.transition =
          "transform 0.5s linear ";

         if (oriantation=="left"){
            degreeM = degreeM - step_degM;
         }
         else{
            degreeM = degreeM + step_degM;
          }

          document.getElementById("mustang").style.transform =
            "translate(0px,0px) rotate(" + degreeM + "deg) scale(" + zM + ")";
       }else{
        document.getElementById("porshe").style.transition =
          "transform 0.5s linear ";

         if (oriantation=="left"){
            degreeP = degreeP - step_degP;
         }
         else{
            degreeP = degreeP + step_degP;
          }

          document.getElementById("porshe").style.transform =
            "translate(0px,0px) rotate(" + degreeP + "deg) scale(" + zP + ")";
       }
      }
      scale (weight) {
        if(this.picture == "mustang"){
          document.getElementById("mustang").style.transition =
        "transform 0.5s linear ";
      if ( photo_width < div_height && weight=="out") {
       zM = zM + stepZM;
      } else if ( photo_width > 0){
          zM = zM - stepZM;
        }
        photo_width = zM * 100;

          document.getElementById("mustang").style.transform =
           "translate(0px,0px) rotate(" + degreeM + "deg) scale(" + zM +")";
        }else{
          document.getElementById("porshe").style.transition =
        "transform 0.5s linear ";

      if ( photo_width < div_height && weight=="out") {

       zP = zP + stepZP;
      
      } else if ( photo_width > 0){
          zP = zP - stepZP;
        }
        photo_width = zP * 100;

          document.getElementById("porshe").style.transform =
           "translate(0px,0px) rotate(" + degreeP + "deg) scale(" + zP +")";
        }
      }
      reset () {
        if (this.picture == "mustang"){
          document.getElementById("mustang").style.transition =
        "transform 2s linear ";

        document.getElementById("mustang").style.transform =
        "translate(0px,0px) rotate(0deg) scale(1)";
      
        }else{
          document.getElementById("porshe").style.transition =
        "transform 2s linear ";

        document.getElementById("porshe").style.transform =
        "translate(0px,0px) rotate(0deg) scale(1)";
        
        }
        
        zM=1;
        zP=1;
        degreeM = 0;
        degreeP = 0;
        photo_width = 100;

      }
    }

    let ref1 = new pictureOperator ("mustang");
    let ref2 = new pictureOperator ("porshe");
    