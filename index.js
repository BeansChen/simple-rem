module.exports = function() {
	var doc = document;
	//设计稿分辨率
	var rWidth = arguments[0] || 750;
	//设置视口
	var vMeta = doc.getElementById("viewport");
	vMeta.name = "viewport";
	vMeta.content = "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no";
	//设置缩放值
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			clientWidth = (clientWidth > rWidth) ? rWidth : clientWidth;
			docEl.style.fontSize = 100 * (clientWidth / rWidth) + 'px';
		};
	if(!doc.addEventListener) return;
	window.addEventListener(resizeEvt, recalc, false);
	recalc();
};