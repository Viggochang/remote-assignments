function ajax(src, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText);
            }
        }
    };
    xhr.open("GET", src);
    xhr.send();
}

function render(data) {
    let dataJson = JSON.parse(data);
    let currentDiv = document.getElementById("data");
    for (let i = 0; i < dataJson.length; i++) {
        let dataMerge = Object.values(dataJson[i]).reduce((acc, cur) => acc + " / " + cur);

        let newContent = document.createTextNode(dataMerge);
        let newLi = document.createElement("li");
        newLi.appendChild(newContent);
        currentDiv.appendChild(newLi);
    }
}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function (response) {
    render(response);
});