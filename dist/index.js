!function (e, n) {
    "object" == typeof exports && "object" == typeof module
        ? module.exports = n()
        : "function" == typeof define && define.amd
            ? define([], n)
            : "object" == typeof exports
                ? exports.CountDown = n()
                : e.CountDown = n()
}(
    "undefined" != typeof self
        ? self
        : this,
    function () {
        return function (e) {
            var n = {};
            function t(i) {
                if (n[i]) 
                    return n[i].exports;
                var o = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(o.exports, o, o.exports, t),
                o.l = !0,
                o.exports
            }
            return t.m = e,
            t.c = n,
            t.d = function (e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            },
            t.n = function (e) {
                var n = e && e.__esModule
                    ? function () {
                        return e.default
                    }
                    : function () {
                        return e
                    };
                return t.d(n, "a", n),
                n
            },
            t.o = function (e, n) {
                return Object
                    .prototype
                    .hasOwnProperty
                    .call(e, n)
            },
            t.p = "",
            t(t.s = "xoxu")
        }({
            xoxu: function (e, n, t) {
                "use strict";
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function () {
                    function e(e, n) {
                        for (var t = 0; t < n.length; t++) {
                            var i = n[t];
                            i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (n, t, i) {
                        return t && e(n.prototype, t),
                        i && e(n, i),
                        n
                    }
                }();
                var o = function () {
                    function e(n) {
                        !function (e, n) {
                            if (!(e instanceof n)) 
                                throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        this.isMs = n.isMs || !1,
                        this.container = document.querySelector(n.container || "body"),
                        this.endTime = n.endTime,
                        this.callBack = n.callBack || !1,
                        this.dayEndShow = n.dayEndShow || !0,
                        this.colon = n.colon || !1,
                        this.symbol = n.symbol || ":",
                        this.init()
                    }
                    return i(e, [
                        {
                            key: "init",
                            value: function () {
                                this.render(),
                                this.bindEvent()
                            }
                        }, {
                            key: "render",
                            value: function () {
                                this.colon
                                    ? this.renderColonFormat()
                                    : this.renderTimeFormat()
                            }
                        }, {
                            key: "renderTimeFormat",
                            value: function () {
                                var e = document.createElement("div");
                                e
                                    .classList
                                    .add("con"),
                                e.style.fontSize = 0,
                                e.innerHTML = '\n      <div class="box" style="display: inline-block" id="day">\n        <div' +
                                        ' id="t_d" class="box_num" style="display: inline-block;font-size: 12px"></div>' +
                                        '\n        <span class="box_unit" style="display: inline-block;font-size: 12px"' +
                                        '>天</span>\n      </div>\n      <div class="box" style="display: inline-block">' +
                                        '\n        <div id="t_h" class="box_num" style="display: inline-block;font-size' +
                                        ': 12px"></div>\n        <span class="box_unit" style="display: inline-block;fo' +
                                        'nt-size: 12px">时</span>\n      </div>\n      <div class="box" style="display: ' +
                                        'inline-block">\n        <div id="t_m" class="box_num" style="display: inline-b' +
                                        'lock;font-size: 12px"></div>\n        <span class="box_unit" style="display: i' +
                                        'nline-block;font-size: 12px">分</span>\n      </div>\n      <div class="box" st' +
                                        'yle="display: inline-block">\n        <div id="t_s" class="box_num" style="dis' +
                                        'play: inline-block;font-size: 12px"></div>\n        <span class="box_unit" sty' +
                                        'le="display: inline-block;font-size: 12px">秒</span>\n      </div>\n      <div ' +
                                        'class="none box" id="ms" style="display: none;">\n        <div id="t_ms" class' +
                                        '="box_num" style="display: inline-block;font-size: 12px"></div>\n        <span' +
                                        ' class="box_unit" style="font-size: 12px;">分秒</span>\n      </div>\n    ',
                                this
                                    .container
                                    .appendChild(e),
                                this.isMs && (document.querySelector("#ms").style.display = "inline-block")
                            }
                        }, {
                            key: "renderColonFormat",
                            value: function () {
                                var e = document.createElement("div");
                                e
                                    .classList
                                    .add("con"),
                                e.style.fontSize = 0,
                                e.innerHTML = '\n      <div class="box" style="display: inline-block">\n        <div id="t_h"' +
                                        ' class="box_num" style="display: inline-block;font-size: 12px"></div>\n       ' +
                                        ' <span class="box_unit" style="display: inline-block;font-size: 12px">:</span>' +
                                        '\n      </div>\n      <div class="box" style="display: inline-block">\n       ' +
                                        ' <div id="t_m" class="box_num" style="display: inline-block;font-size: 12px"><' +
                                        '/div>\n        <span class="box_unit" style="display: inline-block;font-size: ' +
                                        '12px">:</span>\n      </div>\n      <div class="box" style="display: inline-bl' +
                                        'ock">\n        <div id="t_s" class="box_num" style="display: inline-block;font' +
                                        '-size: 12px"></div>\n        <span class="box_unit" style="display: inline-blo' +
                                        'ck;font-size: 12px" id="lastSymbol"></span>\n      </div>\n      <div class="n' +
                                        'one box" id="ms" style="display: none;">\n        <div id="t_ms" class="box_nu' +
                                        'm" style="display: inline-block;font-size: 12px"></div>\n      </div>\n    ',
                                this
                                    .container
                                    .appendChild(e),
                                this.isMs && (document.querySelector("#ms").style.display = "inline-block")
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                this.colon
                                    ? this.colonFormatEvent()
                                    : this.timerFormatEvent()
                            }
                        }, {
                            key: "timerFormatEvent",
                            value: function () {
                                var e = this,
                                    n = this.endTime;
                                this.colon;
                                "number" != typeof n && (n = new Date(n).getTime());
                                var t = n - (new Date).getTime(),
                                    i = Math.floor(t / 1e3 / 60 / 60 / 24) < 0
                                        ? 0
                                        : Math.floor(t / 1e3 / 60 / 60 / 24),
                                    o = Math.floor(t / 1e3 / 60 / 60 % 24) < 0
                                        ? 0
                                        : Math.floor(t / 1e3 / 60 / 60 % 24),
                                    l = Math.floor(t / 1e3 / 60 % 60) < 0
                                        ? 0
                                        : Math.floor(t / 1e3 / 60 % 60),
                                    s = Math.floor(t / 1e3 % 60) <= 0
                                        ? 0
                                        : Math.floor(t / 1e3 % 60),
                                    a = Math.floor(t % 1e3 / 100) <= 0
                                        ? 0
                                        : Math.floor(t % 1e3 / 100);
                                a = 0 === a && 0 !== s
                                    ? "1" + a
                                    : "0" + a,
                                document
                                    .querySelector("#t_d")
                                    .innerHTML = i,
                                document
                                    .querySelector("#t_h")
                                    .innerHTML = o,
                                document
                                    .querySelector("#t_m")
                                    .innerHTML = l,
                                document
                                    .querySelector("#t_s")
                                    .innerHTML = s,
                                document
                                    .querySelector("#t_ms")
                                    .innerHTML = a,
                                i <= 0 && (document.querySelector("#day").style.display = "none"),
                                i <= 0 && this.dayEndShow && (
                                    document.querySelector("#ms").style.display = "inline-block"
                                );
                                var r = setTimeout(function () {
                                    e.bindEvent()
                                }, 1);
                                i <= 0 && o <= 0 && l <= 0 && s <= 0 && a <= 0 && (
                                    clearTimeout(r),
                                    this.callBack && this.callBack()
                                )
                            }
                        }, {
                            key: "colonFormatEvent",
                            value: function () {
                                var e = this,
                                    n = this.endTime,
                                    t = this.isMs;
                                "number" != typeof n && (n = new Date(n).getTime());
                                var i = n - (new Date).getTime(),
                                    o = Math.floor(i / 1e3 / 60 / 60) < 0
                                        ? 0
                                        : Math.floor(i / 1e3 / 60 / 60),
                                    l = Math.floor(i / 1e3 / 60 % 60) < 0
                                        ? 0
                                        : Math.floor(i / 1e3 / 60 % 60),
                                    s = Math.floor(i / 1e3 % 60) <= 0
                                        ? 0
                                        : Math.floor(i / 1e3 % 60),
                                    a = Math.floor(i % 1e3 / 100) <= 0
                                        ? 0
                                        : Math.floor(i % 1e3 / 100);
                                a = 0 === a && 0 !== s
                                    ? "1" + a
                                    : "0" + a,
                                o = o < 10
                                    ? "0" + o
                                    : o,
                                l = l < 10
                                    ? "0" + l
                                    : l,
                                s = s < 10
                                    ? "0" + s
                                    : s,
                                document
                                    .querySelector("#t_h")
                                    .innerHTML = o,
                                document
                                    .querySelector("#t_m")
                                    .innerHTML = l,
                                document
                                    .querySelector("#t_s")
                                    .innerHTML = s,
                                document
                                    .querySelector("#t_ms")
                                    .innerHTML = a,
                                (o <= 0 || t) && (
                                    document.querySelector("#lastSymbol").innerHTML = this.symbol,
                                    document.querySelector("#ms").style.display = "inline-block"
                                );
                                var r = setTimeout(function () {
                                    e.colonFormatEvent()
                                }, 1);
                                o <= 0 && l <= 0 && s <= 0 && a <= 0 && (
                                    clearTimeout(r),
                                    this.callBack && this.callBack()
                                )
                            }
                        }
                    ]),
                    e
                }();
                n.default = o
            }
        })
    }
);