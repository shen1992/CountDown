var CountDown = function () {
  function CountDown(option) {
    this.isMs = option.isMs;
    this.container = document.querySelector(option.container || 'body');
    this.endTime = option.endTime;
    this.callBack = option.callBack;
    this.dayEndShow = option.dayEndShow ? option.dayEndShow : true;
    this.colon = option.colon;
    this.symbol = option.symbol || ':';
    this.init();
  }

  var _proto = CountDown.prototype;

  _proto.init = function init() {
    this.render();
    this.bindEvent();
  };

  _proto.render = function render() {
    if (this.colon) {
      this.renderColonFormat();
      return;
    }

    this.renderTimeFormat();
  };

  _proto.renderTimeFormat = function renderTimeFormat() {
    var el = document.createElement('div');
    el.classList.add('con');
    el.style.overflow = 'hidden';
    el.innerHTML = "\n      <div class=\"box\" style=\"float: left\" id=\"day\">\n        <div id=\"t_d\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">\u5929</span>\n      </div>\n      <div class=\"box\" style=\"float: left\">\n        <div id=\"t_h\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">\u65F6</span>\n      </div>\n      <div class=\"box\" style=\"float: left\">\n        <div id=\"t_m\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">\u5206</span>\n      </div>\n      <div class=\"box\" style=\"float: left\">\n        <div id=\"t_s\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">\u79D2</span>\n      </div>\n      <div class=\"none box\" id=\"ms\" style=\"float: left; display: none\">\n        <div id=\"t_ms\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">\u5206\u79D2</span>\n      </div>\n    ";
    this.container.appendChild(el);

    if (this.isMs) {
      document.querySelector('#ms').style.display = 'block';
    }
  };

  _proto.renderColonFormat = function renderColonFormat() {
    var el = document.createElement('div');
    el.classList.add('con');
    el.style.overflow = 'hidden';
    el.innerHTML = "\n      <div class=\"box\" style=\"float: left\">\n        <div id=\"t_h\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">:</span>\n      </div>\n      <div class=\"box\" style=\"float: left\">\n        <div id=\"t_m\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\">:</span>\n      </div>\n      <div class=\"box\" style=\"float: left\">\n        <div id=\"t_s\" class=\"box_num\" style=\"float: left\"></div>\n        <span class=\"box_unit\" style=\"float: left\" id=\"lastSymbol\"></span>\n      </div>\n      <div class=\"none box\" id=\"ms\" style=\"display: none; float: left\">\n        <div id=\"t_ms\" class=\"box_num\" style=\"float: left\"></div>\n      </div>\n    ";
    this.container.appendChild(el);

    if (this.isMs) {
      document.querySelector('#ms').style.display = 'block';
    }
  };

  _proto.bindEvent = function bindEvent() {
    if (this.colon) {
      this.colonFormatEvent();
      return;
    }

    this.timerFormatEvent();
  };

  _proto.timerFormatEvent = function timerFormatEvent() {
    var _this = this;

    var endTime = this.endTime,
        dayEndShow = this.dayEndShow,
        isMs = this.isMs;

    if (typeof endTime !== "number") {
      endTime = new Date(endTime).getTime();
    }

    var time = endTime - new Date().getTime(),
        day = Math.floor(time / 1000 / 60 / 60 / 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 / 24),
        hour = Math.floor(time / 1000 / 60 / 60 % 24) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60 % 24),
        minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
        second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
        ms = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100);
    document.querySelector('#t_d').innerHTML = day;
    document.querySelector('#t_h').innerHTML = hour;
    document.querySelector('#t_m').innerHTML = minute;
    document.querySelector('#t_s').innerHTML = second;
    document.querySelector('#t_ms').innerHTML = ms;

    if (day <= 0 && dayEndShow) {
      document.querySelector('#day').style.display = 'none';
    }

    if (isMs) {
      document.querySelector('#ms').style.display = 'block';
    }

    var timer = setTimeout(function () {
      _this.timerFormatEvent();
    }, 0);

    if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0 && ms <= 0) {
      clearTimeout(timer);
      this.callBack && this.callBack();
    }
  };

  _proto.colonFormatEvent = function colonFormatEvent() {
    var _this2 = this;

    var endTime = this.endTime,
        isMs = this.isMs,
        symbol = this.symbol;

    if (typeof endTime !== "number") {
      endTime = new Date(endTime).getTime();
    }

    var time = endTime - new Date().getTime(),
        hour = Math.floor(time / 1000 / 60 / 60) < 0 ? 0 : Math.floor(time / 1000 / 60 / 60),
        minute = Math.floor(time / 1000 / 60 % 60) < 0 ? 0 : Math.floor(time / 1000 / 60 % 60),
        second = Math.floor(time / 1000 % 60) <= 0 ? 0 : Math.floor(time / 1000 % 60),
        ms = Math.floor(time % 1000 / 100) <= 0 ? 0 : Math.floor(time % 1000 / 100);
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    document.querySelector('#t_h').innerHTML = hour;
    document.querySelector('#t_m').innerHTML = minute;
    document.querySelector('#t_s').innerHTML = second;
    document.querySelector('#t_ms').innerHTML = ms;

    if (isMs) {
      document.querySelector('#lastSymbol').innerHTML = symbol;
      document.querySelector('#ms').style.display = 'block';
    }

    var timer = setTimeout(function () {
      _this2.colonFormatEvent();
    }, 0);

    if (hour <= 0 && minute <= 0 && second <= 0 && ms <= 0) {
      clearTimeout(timer);
      this.callBack && this.callBack();
    }
  };

  return CountDown;
}();

export { CountDown as default };