function sendRequest() {
    console.log("Send");
    var xhr = new XMLHttpRequest();
    var url = "https://github.com/AlionaSauchuk/HW06/blob/master/db.json";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
            /*
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            */
        }
    };
    var formElements=document.getElementById("createForm").elements;    
        var obj={};
        for (var i=0; i<formElements.length; i++){
            obj[formElements[i].name]=formElements[i].value;
        }

    var data = JSON.stringify(obj);
    console.log(data);
    xhr.send(data);
};