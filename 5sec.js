/*
* ミニゲーム 5秒で決めろ: 無名関数でまとめました。
*/
(function(){

    var start;
    var stop;
    var FIVE_SECONDS = 5 * 1000;

    /*
    * startボタンを押した時刻を取得
    */
    function start_five(){

        start = new Date().getTime();
    }

    /*
    * stopボタンを押した時刻を取得して、5秒と比較。結果発表。
    */
    function stop_five(){

        stop = new Date().getTime();


        // 5秒から差を算出して、5秒と比較(0ならぴったし。)
        var diff = FIVE_SECONDS - (stop - start);


        // 結果を表示
        if(diff == 0){

            document.getElementById('result').innerHTML = '5秒ぴったし！すごい！！'
        }else if(diff < 0){

            document.getElementById('result').innerHTML = -(diff / 1000).toFixed(2) + '秒遅かった。。';
        }else{

            document.getElementById('result').innerHTML = (diff / 1000).toFixed(2) + '秒早かった。。';
        }
    }
}());