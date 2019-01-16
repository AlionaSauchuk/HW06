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
                el.innerHTML+='<tr><td>'+element.userId+'</td><td>'+element.id+'</td><td>'+element.title+'</td><td>'+element.body+'</td></tr>';
            });
        }
    };
    xhr.send();
})();