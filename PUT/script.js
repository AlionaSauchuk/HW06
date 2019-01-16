function sendRequest() {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/data";
    var formElements=document.getElementById("updateForm").elements;    
    var data={};
    for (var i=0; i<formElements.length; i++){
        data[formElements[i].name]=formElements[i].value;
    }

    xhr.open("PUT", url+'/'+data.id, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {        
        }
    };

    xhr.send(JSON.stringify(data));
    
};