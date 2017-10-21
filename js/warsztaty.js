'use strict'; // ta linijka mówi, żeby JS pilnował, żebyśmy nei robili głupot

console.log("Działa!");

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      // MAmy 100% pewności, że cały HTML się wczytał zanim załaduje się JAvaScript
      var menuList = document.querySelectorAll(".nav-list > li"); // poszukaj tylko bezośrednie dzieci (jest to CSS selektor)
      console.log(menuList); //Mamy tutaj tablice!!!!! Dlatego musimy zastosować pętlę.

      for(var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("mouseover", function(){
          // This to taka zmienna, która jest tym na co najechał w tym momencie użytkownik
          //this.style.fontSize="100px"
          var dropdown = this.querySelector(".dropdown")
          console.log(dropdown);

          if(dropdown != null){
          dropdown.style.display = "block"
        }
        })
      }

      for(var i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("mouseout", function(){
          // This to taka zmienna, która jest tym na co najechał w tym momencie użytkownik
          var dropdown = this.querySelector(".dropdown")
          console.log(dropdown);

          if(dropdown != null){
          dropdown.style.display = "none"
        }
        })
      }


    });
