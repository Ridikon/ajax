loaded.innerHTML = (new Date()).toLocaleTimeString();

document.getElementById('btn-get').addEventListner('click', getData());

function getData(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = data.name;
            document.getElementById('client-addres').innerHTML = data.addres;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}