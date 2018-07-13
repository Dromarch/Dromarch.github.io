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

function loadDoc(page_name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", page_name + ".html", true);
  xhttp.send();
  var divs = loader.getElementsByTagName("div");
  id = "i_" + page_name;
  for(var i=0; i<divs.length; i++) {
  	if (divs[i].id != id){
  		alert(div[i].id)
	  	divs[i].className = "li";
  	} else {
  		alert(div[i].id)
  		divs[i].className = "active";
	};
  };
}

function pageChange() {
	var url = document.URL
	var section = url.substr(url.lastIndexOf('/') + 1);
	var name = section.substr(section.lastIndexOf('#') + 1);

	switch (section) {
	case section:
		loadDoc(name);
		break;
	}

}
