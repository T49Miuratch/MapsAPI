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

    };

          // // Function:地図データの取得
          // function getMapdata(){

          //   //APIにてデータを取得して、位置とマーカーをセットするfunctionを呼び出す
          //   const request = new XMLHttpRequest();
          //   const bookid = '145fpXZDJRVHyUloPXsmIWGPpi2YqP_HnU80HwQtMXEQ';
          //   const sheetname = 'ハッピーラッキー幸運スポット+緯度経度自動';
          //   const googleapi = 'AIzaSyAGW-PczU-lwC8LzpK8WIUKk3lNtJXkuB0';
          //   const url = 'https://sheets.googleapis.com/v4/spreadsheets/' + bookid + '/values/' + sheetname + '?key=' + googleapi;
    
          //   request.open('GET', url, true);
          //   request.responseType = 'json';
    
          //   request.onload = function () {
          //     const data = this.response;     // 取得できた値を格納
          //     // 後続処理を記載
          //   };
    
          //   request.send();
    
          // }