function loadDoc(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange"), function() {
        if(xhttp.readyState === 4 && xhttp.status === 200)
     document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
   }