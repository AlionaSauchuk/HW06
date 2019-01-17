

(function () {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/data";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            var el = document.getElementById("data");
            Array.from(json).forEach(element => {
                el.innerHTML+='<tr><td><button id="'+element.id+'" onclick="startUpdate(this)">Update</button></td>'+
                '<td><button id="'+element.id+'" onclick="startDelete(this)">Delete</button></td><td>'+element.userId+'</td><td>'+element.id+'</td><td>'+element.title+'</td><td>'+element.body+'</td></tr>';
            });
        }
    };
    xhr.send();
})();


function startUpdate(obj){
    sessionStorage.setItem('idUpdate', obj.id);
    window.location.href = "http://127.0.0.1:5500/PUT/index.html";
}

function startDelete(obj){

    sessionStorage.setItem('idDelete', obj.id);
    window.location.href = "http://127.0.0.1:5500/DELETE/index.html";
    
}