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

      //Zadanie 2
      function showHide () {
          var textArea = this.previousElementSibling;
          console.log(textArea);
          if (textArea.style.display=="none" || textArea.style.display == "") {
            textArea.style.display = "block";
            // console.log(this.innerHTML);
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = "none";
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        }
    }

      var buttons = document.querySelectorAll('.read-more');
      // console.log(buttons);

      // console.log(buttons[0].previousElementSibling); // Powinnaś zobaczyć w konsoli paragraf o klasie `more`

      // buttons[0].addEventListener("click", showHide )

      for(var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", showHide )
    }







});
