    function initMap() {
      var mapPosition = {lat: 35.6700532, lng: 139.703357};
      var mapArea = document.getElementById('maps');
      var mapOptions = {
        center: mapPosition,
        zoom: 16,
      };
      var map = new google.maps.Map(mapArea, mapOptions);

      var markerOptions = {
        map: map,
        position: mapPosition,
        icon: 'img/koduchi.png', //新しく指定
      };

      var markerOptions = {
        map: map,
        position: mapPosition,
        icon: new google.maps.MarkerImage(
            'img/koduchi.png',
            new google.maps.Size(42,65),    //マーカー画像のサイズ
            new google.maps.Point(0,0),     //位置（0,0で固定）

        ),
    };

    var marker = new google.maps.Marker(markerOptions);

    }