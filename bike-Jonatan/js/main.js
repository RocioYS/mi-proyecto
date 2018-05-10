function mostrarPosicion(){
        navigator.geolocation.getCurrentPosition(mostrarMapa,errorPosicion);
}



function mostrarMapa(position){
    // Get location data
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var latlong = new google.maps.LatLng(lat, long);

    var opcionesMapa = {
        center: latlong,
        zoom: 16,
        mapTypeControl: true,
        navigationControlOptions: {style:google.maps.NavigationControlStyle.SMALL}
    }

    var map = new google.maps.Map(document.getElementById("mapa"), opcionesMapa);
    var marker = new google.maps.Marker({position:latlong, map:map, title:"Estás aquí!"});
}

function errorPosicion(error) {
    resultado = document.getElementById("resultado")
    if(error.code == 1){
        resultado.innerHTML = "Has decidido no compartir tu posición";
    } else if(error.code == 2){
        resultado.innerHTML = "La red no responde i tu posición no está disponible";
    } else if(error.code == 3){
        resultado.innerHTML = "Se agotó el tiempo de espera antes de obtener tu ubicación";
    } else{
        resultado.innerHTML = "Se produjo un error al obtener tu posición";
    }
}