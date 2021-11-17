'use strict'

$(function () {
    // スムーススクロール
    // <a href =”#”> をクリックしたとき
    $('a[href^="#"]').click(function () {
        // 時間
        var speed = 500;
        // クリックした要素のhref
        var href = $(this).attr("href");
        /* if文の別の書き方(三項演算子)
        もしhrefの値が # または "" のとき html を target に代入
        そうでない場合、href を target に代入 */
        var target = $(href == "#" || href == "" ? 'html' : href);
        //ヘッダーの高さを取得
        var header = $('header').height();
        //対象先の高さ - ヘッダーの高さ をpositionに代入
        var position = target.offset().top - header;
        /* positionの位置まで、speedの速さで、swingという動作で移動する */
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });

    // メニューの表示切り替えファンクション
    function toggleMenu() {
        $('#mobile-nav').toggleClass('show')
        $('#open-nav').toggleClass('open-image').toggleClass('close-image');
    };

    // ハンバーガーメニュー、メニュー、リンク、ロゴがクリックされたら
    $('#open-nav, #mobile-nav, #mobile-nav a').on('click', function () {
        toggleMenu()
    });
    // ロゴをクリックしたときメニューが表示されていたら非表示にする
    $('.logo').on('click', function () {
        if ($('#mobile-nav').hasClass('show')) {
            toggleMenu()
        }
    });
});