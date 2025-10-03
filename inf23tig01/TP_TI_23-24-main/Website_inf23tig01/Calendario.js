document.addEventListener('DOMContentLoaded', function() {
    loadXMLData();
});

function loadXMLData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'CalendarioF1.xml', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayEvents(xhr.responseXML);
        }
    };
    xhr.send();
}

function displayEvents(xml) {
    var calendarioDiv = document.getElementById('calendario');
    var eventos = xml.getElementsByTagName('evento');

    for (var i = 0; i < eventos.length; i++) {
        var evento = eventos[i];
        var nome = evento.getElementsByTagName('nome')[0].textContent;
        var data = evento.getElementsByTagName('data')[0].textContent;
        var detalhesDaPista = evento.getElementsByTagName('detalhesDaPista')[0].textContent;

        var eventoDiv = document.createElement('div');
        eventoDiv.className = 'evento';

        var img = document.createElement('img');
        img.src = detalhesDaPista;
        eventoDiv.appendChild(img);

        var h2 = document.createElement('h2');
        h2.textContent = nome;
        eventoDiv.appendChild(h2);

        var pData = document.createElement('p');
        pData.textContent = 'Data: ' + data;
        eventoDiv.appendChild(pData);

        calendarioDiv.appendChild(eventoDiv);
    }
}
