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

    $(function(){

      var map;
      var geocoder;
      var storage = localStorage;
      var currentInfo;
    
      /*----------------------------------------*/
      /* 初期化 */
      /*----------------------------------------*/
      var initialize = function(){
    
        //マップ初期設定
        var mapOptions = {
          zoom: 15,//倍率
          center: new google.maps.LatLng(35.6813, 139.766),//マップの中心座標
          mapTypeId: google.maps.MapTypeId.ROADMAP//マップタイプ
        }
    
        //マップ生成
        map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
        //ジオコード生成
        geocoder = new google.maps.Geocoder();
    
        //イベントリスナーセット
        setListener();
    
        //マーカーセット
        setMarkers();
    
      }
      //初期化
      initialize();
    
    
      /*----------------------------------------*/
      /* イベントリスナー */
      /*----------------------------------------*/
      function setListener(){
    
        //クリックイベント
        google.maps.event.addListener(map,'click',function(event){
    
          //緯度経度取得
          var latLng = event.latLng;
    
          //緯度経度から住所を取得してフォームに代入
          getAdress(latLng);
        });
    
      }
    
    
      /*----------------------------------------*/
      /* マーカーセット */
      /*----------------------------------------*/
      function setMarkers(){
    
        if(storage.getItem('markers')){
          //ローカルストレージに記録していたデータを取得
          var markers = JSON.parse(storage.getItem('markers'));
    
          //マーカーセット
          for(var i=0,len=markers.length;i<len;i++){
            setMarker(markers[i]);
          }
    
        }
    
      }
    
      //マーカーセット
      function setMarker(mark){
    
        //座標設定
        var position = new google.maps.LatLng(mark.lat,mark.lng);
    
        //マーカーセット
        var marker = new google.maps.Marker({
          position:position,
          map:map
        });
    
        //情報ウィンドウに表示するコンテンツ生成
        var content = '<p>住所 : '+mark.address+'</p>';
        content += '<p>内容 : '+mark.content+'</p>';
    
        //infowindwoをセット
        setInfoWindow(marker,content);
      }
    
      //infowindow設定
      function setInfoWindow(marker,content){
    
        //infowindow設定
        var infowindow = new google.maps.InfoWindow({
          content:content
        });
    
        //イベントリスナー追加
        google.maps.event.addListener(marker,'click',function(){
    
          //表示中のinfowindowがあったら閉じる
          if(currentInfo){
            currentInfo.close();
          }
    
          //新規にinfowindowを表示
          infowindow.open(marker.get('map'),marker);
          currentInfo = infowindow;
        });
      }
    
    // 参考コードhttp://jsfiddle.net/4qv2S/
      /*----------------------------------------*/
      /* 緯度経度から住所を取得してフォームに代入 */
      /*----------------------------------------*/
      var getAdress = function(latLng){
    
        //ジオコード逆引きする、
        geocoder.geocode({'latLng':latLng},function(results,status){
    
          //ステータスがOKだったら、
          if(status == google.maps.GeocoderStatus.OK){
    
            //データが存在したら、
            if(results[0].geometry){
    
              //住所取得 ※[日本,]の文字を削除したいときは、.replace(/^日本,/,'') とかする。
              var address = results[0].formatted_address;
    
              //フォームに代入
              $(".modal-header h4").html(address);//タイトル
              $("#address").val(address);//住所
              $("#lat").val(latLng.lat());//緯度
              $("#lng").val(latLng.lng());//緯度
              $("#inputExpl").val('');//インプットボックスはクリア
    
              //モーダル表示
              $('#infomation').modal('show');
    
            //データがなかったら、
            }else{
              alert('No results found');
            }
    
          //ステータスがOK以外だったら、
          }else{
            alert('Geocoder faild :'+ status);
          }
        });
    
      }
    
      /*----------------------------------------*/
      /* 登録ボタンを押したら */
      /*----------------------------------------*/
      $("#infomation form").submit(function(event){
        //submitキャンセル用
        event.preventDefault();
    
        //値取得
        var marker = {
          address:$('#address').val(),
          lat:parseFloat($('#lat').val()),
          lng:parseFloat($('#lng').val()),
          content:$('#inputExpl').val()
        };
    
        //ウェブストレージにセット
        var markers = JSON.parse(storage.getItem('markers'));
        markers ? markers.push(marker):markers = [marker];
        storage.setItem('markers',JSON.stringify(markers));
    
        //マーカーセット
        setMarker(marker);
    
        //モーダルを閉じる
        $('#infomation').modal('hide');
    
      });
    
    
    });
    