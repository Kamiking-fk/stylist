$(function () {
	// ハンバーガーメニュー
	$(".js_btn , .js_nav").on("click", function () {
		$(".bl_nav , .el_btn_line , .el_nav_item > a").toggleClass("is_open");
	});

	// スライドショー
	var slideCurrent = 0;
	var lastCurrent = $(".js_slide_list").length - 1;

	$(".js_slide_list").css("display", "none"); // 一旦すべてのスライドを非表示
	$(".js_slide_list").eq(slideCurrent).css("display", "block"); // 最初のスライドを表示

	function changeslide() {
		$(".js_slide_list").fadeOut(1500);
		$(".js_slide_list").eq(slideCurrent).fadeIn(1500);
	}

	var Timer;
	function startTimer() {
		Timer = setInterval(function () {
			if (slideCurrent === lastCurrent) {
				slideCurrent = 0;
				changeslide();
			} else {
				slideCurrent++;
				changeslide();
			}
		}, 3000);
	}
	startTimer();

	// iosハック
	var userAgent = navigator.userAgent; // ユーザーエージェント判定
	// aタグを踏んだ時の端末判定とhover装飾
	if (userAgent.indexOf("iPhone") >= 0) {
		$(".el_btn").css("width", "55px");
	}

	//画像のモーダル
	$(".gallery__list").modaal({
		type: "image",
		overlay_close: true, //モーダル背景クリック時に閉じるか
		before_open: function () {
			// モーダルが開く前に行う動作
			$("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
		},
		after_close: function () {
			// モーダルが閉じた後に行う動作
			$("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
		},
	});
});
