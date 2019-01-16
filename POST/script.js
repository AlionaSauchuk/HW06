function sendRequest() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/data";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {          
        }
    };
    var formElements=document.getElementById("createForm").elements;    
    var data={};
    for (var i=0; i<formElements.length; i++){
        data[formElements[i].name]=formElements[i].value;
    }
    xhr.send(JSON.stringify(data));
};