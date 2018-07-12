function myFunction() {
   document.getElementById("demo").innerHTML = "The way";
};

f = function () {
  document.getElementById("demo").innerHTML = "&nbspLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit sapien, consectetur ut laoreet quis, sollicitudin eu nibh. Nam sed posuere eros. Vivamus convallis lacus pellentesque, volutpat libero at, facilisis justo. Suspendisse fermentum sagittis urna in maximus. Proin nulla eros, egestas nec mauris at, mollis scelerisque libero. In hac habitasse platea dictumst. Proin quis ante vulputate, pulvinar tellus blandit, aliquet sapien. Curabitur tincidunt lacus mauris, tempor luctus sapien porttitor et. Curabitur semper vel odio nec malesuada. Nullam commodo tincidunt lacus sodales dignissim. Fusce non eros non leo suscipit pretium. Sed eu felis at dolor dignissim venenatis. Sed eu blandit arcu, quis fringilla turpis. Etiam sit amet tristique erat.<br>&nbspDuis porta purus diam, volutpat malesuada ipsum pellentesque in. Maecenas bibendum metus mi. Sed sodales tortor id lobortis congue. Ut auctor facilisis fringilla. Nulla rutrum vulputate hendrerit. Cras sed elit sed erat convallis mollis. Nulla auctor et ligula accumsan porta. Vestibulum condimentum, sem at dictum molestie, libero nibh rhoncus est, at vestibulum lorem diam sit amet nisi. Duis luctus neque a posuere convallis. Nulla cursus metus non velit iaculis iaculis.";
};

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("es-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Arquivo não encontrado.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("es-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function changePage() {
	alert("I am an alert box!");
}
