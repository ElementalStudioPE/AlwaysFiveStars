function headerBg() {
    var t = $(window),
        e = $("#about").offset().top - 350;
    t.on("load scroll", function() {
        t.scrollTop() > e ? $("#header").addClass("header--bg") : $("#header").removeClass("header--bg")
    })
}
$(function() {
    var t = Modernizr.touch,
        e = slidr.create("slider", {
            breadcrumbs: !0,
            timing: {
                cube: "0.5s ease-out"
            },
            transition: "fade"
        });
    e.add("h", ["2", "3", "4", "5", "2"]).auto(), $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().top - 80
            }, 800), !1
        }
    }), $("#nav__btn").on("click", function() {
        $("body").toggleClass("nav-open")
    }), $("#nav a").on("click", function() {
        $("body").queue(function() {
            $("body").removeClass("nav-open").dequeue()
        })
    }), $("#insta-btn").on("click", function() {
        $("#instagram ").toggleClass("open")
    }), $("#insta-btn").hover(function() {
        $("#instagram ").addClass("interact")
    }, function() {
        $("#instagram ").removeClass("interact")
    }), $("#slider-breadcrumbs").appendTo("body"), $("#slider-control").appendTo("body"), t || skrollr.init({
        easing: "cubic",
        forceHeight: !1
    }), window.sr = new ScrollReveal({
        viewFactor: .1
    }), sr.reveal(".box"), sr.reveal(".riders__odd", {
        origin: "right",
        distance: "300px"
    }), sr.reveal(".riders__even", {
        origin: "left",
        distance: "300px"
    }), sr.reveal(".riders__odd .profile__title", {
        origin: "right",
        distance: "300px",
        delay: 100
    }), sr.reveal(".riders__odd .profile__content", {
        origin: "right",
        distance: "300px",
        delay: 200
    }), sr.reveal(".riders__even .profile__title", {
        origin: "left",
        distance: "300px",
        delay: 100
    }), sr.reveal(".riders__even .profile__content", {
        origin: "left",
        distance: "300px",
        delay: 200
    }), sr.reveal(".event--odd", {
        origin: "right",
        distance: "300px"
    }), sr.reveal(".event--even", {
        origin: "left",
        distance: "300px"
    }), headerBg()
});
var timer = !1;
$(window).resize(function() {
        timer !== !1 && clearTimeout(timer), timer = setTimeout(function() {
            headerBg(), $(window).width() > 960 && $("#nav").removeClass("open")
        }, 200)
    }),
    function() {
        for (var t, e = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], n = i.length, s = window.console = window.console || {}; n--;) t = i[n], s[t] || (s[t] = e)
    }(),
    function(t, e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.slidr = e()
    }(this, function() {
        "use strict";

        function t(t, e) {
            var i = t;
            for (var n in e) {
                if (!i || !i.hasOwnProperty(e[n])) return null;
                i = i[e[n]]
            }
            return i === t ? null : i
        }

        function e() {
            for (var t = {}, e = 0, i; i = arguments[e]; e++)
                for (var n in i) t[n] = i[n];
            return t
        }

        function i(t, e) {
            return t.contains ? t.contains(e) : t.compareDocumentPosition ? 16 & t.compareDocumentPosition(e) : 0
        }

        function n(t) {
            return t.tagName ? t.tagName.toLowerCase() : null
        }

        function s(t, e) {
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }

        function o(t) {
            return "".trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }

        function r(t, e) {
            var i = document.createElement(t);
            for (var n in e) i[n] = e[n];
            return i
        }

        function a(t, e) {
            var i = o(t.className);
            i = i ? i.split(/\s+/) : [];
            for (var n = 2, r, a; r = arguments[n]; n++) a = s(i, r), "add" === e && 0 > a && i.push(r), "rm" === e && a >= 0 && i.splice(a, 1);
            return t.className = i.join(" "), t
        }

        function l(t) {
            return t.replace(/[\s'"]/gi, "").split("").sort().join("")
        }

        function u(t, e, i) {
            return t && t.setAttribute && t.setAttribute(e, i), t
        }

        function c(t, e) {
            return t && t.getAttribute ? t.getAttribute(e) : null
        }

        function h(t, e) {
            if ("string" == typeof e) {
                var i = document.defaultView ? document.defaultView.getComputedStyle(t) : t.currentStyle,
                    n = i[g.fix(e)];
                if (n || "opacity" !== e || (n = i.filter ? i.filter.split("=")[1].replace(")", "") : "1"), n) {
                    var s = n.slice(0, -2);
                    return "px" === n.slice(-2) && !isNaN(parseInt(s)) && s.search("px") <= 0 ? parseInt(s) : n
                }
                return "none"
            }
            for (var o in e) g.fix(o) && (t.style[g.fix(o)] = e[o]);
            return t
        }

        function d(t, e, i, n) {
            "string" == typeof e && (e = [e]);
            for (var o = 0, r, a; r = e[o]; o++) a = s(g.animations, r) > 0, r = "click" === r && "ontouchstart" in window ? "touchend" : t.attachEvent && !a ? "on" + r : r, t.attachEvent && !a ? n ? t.detachEvent(r, i) : t.attachEvent(r, i) : n ? t.removeEventListener(r, i) : t.addEventListener(r, i)
        }

        function p(t, e, i) {
            d(t, e, i, !0)
        }

        function f(t) {
            return "border-box" === h(t, "box-sizing")
        }
        var g = {
                prefixes: ["webkit", "Moz", "ms", "O"],
                cache: {},
                keyframes: {},
                isIE: function() {
                    return g.supports("filter") && !g.supports("opacity") ? g.isIE = function() {
                        return !0
                    } : g.isIE = function() {
                        return !1
                    }, g.isIE()
                },
                styleEl: document.getElementsByTagName("html")[0].style,
                styleSheet: function() {
                    var t = r("style", {
                        type: "text/css"
                    });
                    return document.getElementsByTagName("head")[0].appendChild(t), t.sheet || t.styleSheet
                }(),
                cssRules: function() {
                    return g.cssRules = function() {
                        return g.styleSheet.cssRules || g.styleSheet.rules
                    }, g.cssRules()
                },
                insertRule: function(t) {
                    g.styleSheet.insertRule ? g.insertRule = function(t) {
                        g.styleSheet.insertRule(t, g.cssRules().length)
                    } : g.insertRule = function(t) {
                        var e = t.split(" {");
                        if (2 === e.length) {
                            var i = e[0],
                                n = o(e[1].replace(/;?\s?}$/g, ""));
                            i && n && g.styleSheet.addRule(i, n)
                        }
                    }, g.insertRule(t)
                },
                addCSSRule: function(t, e, i) {
                    t = l(t);
                    for (var n = 0, s, o; s = g.cssRules()[n]; n++)
                        if (o = l(s.name || s.selectorText || s.cssText.split(" {")[0] || ""), o === t) {
                            if (i || l(s.cssText) === l(e)) return;
                            g.styleSheet.deleteRule(n);
                            break
                        }
                    g.insertRule(e)
                },
                createRule: function(t, e) {
                    var i = [t, "{"];
                    for (var n in e) g.fix(n, !0) && i.push(g.fix(n, !0) + ":" + e[n] + ";");
                    return i.push("}"), i.join(" ")
                },
                createStyle: function(t, e, i) {
                    g.addCSSRule(t, g.createRule(t, e), i)
                },
                prefix: function(t) {
                    return 3 === t.split("-").length ? "-" + t.split("-")[1] + "-" : ""
                },
                createKeyframe: function(t, e) {
                    var i = g.fix("animation", !0);
                    if (i && !g.keyframes[t]) {
                        var n = ["@" + g.prefix(i) + "keyframes " + t + " {"];
                        for (var s in e) n.push(g.createRule(s + "%", e[s]));
                        n.push("}"), g.addCSSRule(t, n.join(" ")), g.keyframes[t] = !0
                    }
                },
                fix: function(t, e) {
                    if (!(t in g.cache)) {
                        for (var i = t.split("-"), n = 0, s; s = i[n]; n++) i[n] = s[0].toUpperCase() + s.toLowerCase().slice(1);
                        var o = i.join("");
                        if (o = o[0].toLowerCase() + o.slice(1), void 0 !== g.styleEl[o]) g.cache[t] = {
                            css: t,
                            dom: o
                        };
                        else
                            for (o = i.join(""), n = 0; n < g.prefixes.length; n++) void 0 !== g.styleEl[g.prefixes[n] + o] && (g.cache[t] = {
                                css: "-" + g.prefixes[n].toLowerCase() + "-" + t,
                                dom: g.prefixes[n] + o
                            });
                        g.cache[t] || (g.cache[t] = null)
                    }
                    return null !== g.cache[t] ? e ? g.cache[t].css : g.cache[t].dom : null
                },
                supports: function() {
                    for (var t = 0, e; e = arguments[t]; t++)
                        if (!g.fix(e)) return !1;
                    return !0
                },
                add: {
                    fade: function(t, e, i) {
                        g.createKeyframe(t, {
                            0: {
                                opacity: e,
                                visibility: "visible"
                            },
                            100: {
                                opacity: i,
                                visibility: "hidden"
                            }
                        })
                    },
                    linear: function(t, e, i, n, s, o) {
                        g.createKeyframe(t, {
                            0: {
                                transform: "translate" + i[0] + "(0%)",
                                opacity: "in" === e ? "0" : s,
                                visibility: "visible"
                            },
                            1: {
                                transform: "translate" + i + "px)",
                                opacity: s
                            },
                            99: {
                                transform: "translate" + n + "px)",
                                opacity: o
                            },
                            100: {
                                transform: "translate" + n[0] + "(0%)",
                                opacity: "out" === e ? "0" : o,
                                visibility: "hidden"
                            }
                        })
                    },
                    cube: function(t, e, i, n, s, o) {
                        g.createKeyframe(t, {
                            0: {
                                transform: "rotate" + e + "0deg) translateZ(" + n + "px)",
                                opacity: s,
                                visibility: "visible"
                            },
                            100: {
                                transform: "rotate" + i + "0deg) translateZ(" + n + "px)",
                                opacity: o,
                                visibility: "hidden"
                            }
                        })
                    }
                },
                classnames: function(t) {
                    return {
                        main: t,
                        maincss: 'aside[id*="-' + t + '"]',
                        nav: "slidr-" + t,
                        navcss: 'aside[id*="-' + t + '"] .slidr-' + t,
                        data: "data-slidr-" + t,
                        id: function(e, i) {
                            return i ? 'aside[id="' + e.id + "-" + t + '"]' : e.id + "-" + t
                        }
                    }
                },
                sanitize: function(t) {
                    return t = t || window.event, t.target || (t.target = t.srcElement), t.currentTarget || (t.currentTarget = t.srcElement), !t.which && t.keyCode && (t.which = t.keyCode), t
                },
                stop: function(t) {
                    return t = t || window.event, t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), !1
                },
                animations: ["animationend", "webkitAnimationEnd", "oanimationend", "MSAnimationEnd"]
            },
            m = {
                available: ["cube", "fade", "linear", "none"],
                validate: function(t, e) {
                    return e = e || t.settings.transition, s(m.available, e) < 0 || !w.supported[e] ? "none" : e
                },
                get: function(e, i, n, s) {
                    return t(e.trans, [i, "in" === n ? y.opposite(s) : s])
                },
                set: function(t, e, i, n) {
                    return n = m.validate(t, n), t.trans[e] || (t.trans[e] = {}), t.trans[e][i] = n, n
                },
                apply: function(t, e, i, n, s) {
                    _.update(t, e, i), w.animate(t, e, s, i, n)
                }
            },
            v = {
                cache: {},
                hash: function(t) {
                    return [t.id, t["in"].slidr, t["in"].trans, t["in"].dir, t.out.slidr, t.out.trans, t.out.dir].join("-")
                },
                meta: function(t, e, i, n, s, o, r) {
                    return {
                        id: t.id,
                        "in": {
                            el: y.get(t, i).el,
                            slidr: i,
                            trans: r,
                            dir: s
                        },
                        out: {
                            el: y.get(t, e).el,
                            slidr: e,
                            trans: o,
                            dir: y.opposite(n)
                        }
                    }
                },
                before: function(t, e) {
                    var i = v.hash(e);
                    if (v.cache[i] || (v.cache[i] = {}), !v.cache[i].before) {
                        v.cache[i].before = !0;
                        var n = t.settings.before;
                        "function" == typeof n && n(e)
                    }
                },
                after: function(t, e) {
                    var i = v.hash(e);
                    if (!v.cache[i].after) {
                        v.cache[i].after = !0;
                        var n = t.settings.after;
                        "function" == typeof n && v.bindonce(n, e)
                    }
                },
                bindonce: function(t, e) {
                    if (g.supports("animation") && "none" !== e["in"].trans) {
                        var i = function(n) {
                            g.keyframes[n.animationName] && (t(e), p(e["in"].el, g.animations, i), v.reset(e))
                        };
                        d(e["in"].el, g.animations, i)
                    } else t(e), v.reset(e)
                },
                reset: function(t) {
                    var e = v.hash(t);
                    v.cache[e].before = !1, v.cache[e].after = !1
                }
            },
            y = {
                directions: ["left", "up", "top", "right", "down", "bottom"],
                isdir: function(t) {
                    return s(y.directions, t) >= 0
                },
                opposite: function(t) {
                    var e = y.directions.length;
                    return y.isdir(t) ? y.directions[(s(y.directions, t) + e / 2) % e] : null
                },
                get: function(e) {
                    for (var i = [], n = 1, s; void 0 !== (s = arguments[n++]); i.push(s));
                    return t(e.slides, i)
                },
                display: function(t) {
                    !t.displayed && y.get(t, t.start) && (t.current = t.start, _.create(t), b.create(t), w.init(t, t.current, "fade"), w.animate(t, t.current, "fade", "in"), t.displayed = !0, k.controls(t, t.settings.controls), t.settings.breadcrumbs && k.breadcrumbs(t))
                },
                slide: function(t, e) {
                    return y.isdir(e) ? y.go(t, y.get(t, t.current, e), e, e) : y.jump(t, e)
                },
                jump: function(t, e) {
                    if (e && e !== t.current && y.get(t, e)) {
                        var i = t.crumbs[t.current],
                            n = t.crumbs[e],
                            s = i.x < n.x ? "right" : i.x > n.x ? "left" : null,
                            o = i.y < n.y ? "up" : i.y > n.y ? "down" : null,
                            r = m.get(t, t.current, "out", s) ? s : m.get(t, t.current, "out", o) ? o : null,
                            a = m.get(t, e, "in", s) ? s : m.get(t, e, "in", o) ? o : null;
                        y.go(t, e, r, a, r ? null : "fade", a ? null : "fade")
                    }
                },
                go: function(t, e, i, n, s, o) {
                    if (t.current && e) {
                        var r = o || m.get(t, e, "in", n),
                            a = s || m.get(t, t.current, "out", i),
                            l = v.meta(t, t.current, e, i, n, a, r);
                        return v.before(t, l), m.apply(t, e, "in", n, r), m.apply(t, t.current, "out", i, a), v.after(t, l), t.current = e, b.update(t), !0
                    }
                    return !1
                },
                find: function(t, e) {
                    for (var i = e ? [] : {}, n = 0, o, r; o = t.slidr.childNodes[n]; n++) r = c(o, "data-slidr"), r && (e && s(i, r) < 0 ? i.push(r) : r in i || (i[r] = o));
                    return i
                },
                validate: function(t, e, i, n, s, o) {
                    if (!e || e.constructor !== Array) return !1;
                    for (var r = 0, a, l, u, c, h, d, p, f; a = e[r]; r++) {
                        if (!(a in n)) return !1;
                        if (y.get(t, a) && (l = e[r - 1] || null, u = e[r + 1] || null, c = y.get(t, a, s), h = y.get(t, a, o), d = y.get(t, u, s), p = m.get(t, a, "out", s), f = m.get(t, a, "out", o), h && u && h != u || c && l && c != l || d && d != a || l && p && p != i || u && f && f != i)) return !1
                    }
                    return !0
                },
                add: function(t, e, i, n, s, o) {
                    for (var r = 0, a; a = e[r]; r++) {
                        t.slides[a] = t.slides[a] || {};
                        var l = y.get(t, a);
                        l.el = n[a], e[r - 1] && (l[s] = e[r - 1], m.set(t, a, s, i)), e[r + 1] && (l[o] = e[r + 1], m.set(t, a, o, i)), w.init(t, a, i), t.start = t.start ? t.start : a
                    }
                    return t.started && (t.displayed ? _.create(t) : y.display(t)), !0
                }
            },
            b = {
                cls: g.classnames("control"),
                types: ["border", "corner", "none"],
                valid: function(t) {
                    return s(b.types, t) >= 0
                },
                create: function(t) {
                    if (t.slidr && !t.controls) {
                        t.controls = h(a(r("aside", {
                            id: b.cls.id(t)
                        }), "add", "disabled"), {
                            opacity: "0",
                            filter: "alpha(opacity=0)",
                            "z-index": "0",
                            visibility: "hidden",
                            "pointer-events": "none"
                        });
                        for (var e in t.nav) t.nav[e] = u(a(r("div"), "add", b.cls.nav, e), b.cls.data, e), t.controls.appendChild(t.nav[e]);
                        b.css(t), t.slidr.appendChild(t.controls), d(t.controls, "click", b.onclick(t))
                    }
                },
                css: function(t) {
                    g.createStyle(b.cls.maincss, {
                        position: "absolute",
                        bottom: h(t.slidr, "padding-bottom") + "px",
                        right: h(t.slidr, "padding-right") + "px",
                        padding: "10px",
                        "box-sizing": "border-box",
                        width: "75px",
                        height: "75px",
                        transform: "translateZ(9998px)"
                    }, !0), g.createStyle(b.cls.maincss + ".disabled", {
                        transform: "translateZ(0px) !important"
                    }, !0), g.createStyle(b.cls.maincss + ".breadcrumbs", {
                        left: h(t.slidr, "padding-left") + "px",
                        right: "auto"
                    }, !0), g.createStyle(b.cls.maincss + ".border", {
                        bottom: "0",
                        right: "0",
                        left: "0",
                        width: "100%",
                        height: "100%"
                    }, !0), g.createStyle(b.cls.navcss, {
                        position: "absolute",
                        "pointer-events": "auto",
                        cursor: "pointer",
                        transition: "opacity 0.2s linear"
                    }, !0);
                    var e = {
                        opacity: "0.05",
                        cursor: "auto"
                    };
                    g.isIE() && (e.display = "none"), g.createStyle(b.cls.navcss + ".disabled", e, !0);
                    var i, n, s, o, r, a, l, u;
                    for (i in t.nav) n = "left" === i || "right" === i, s = "up" === i ? "top" : "down" === i ? "bottom" : i, o = n ? "top" : "left", r = {
                        width: n ? "22px" : "16px",
                        height: n ? "16px" : "22px",
                        "tap-highlight-color": "rgba(0, 0, 0, 0)",
                        "touch-callout": "none",
                        "user-select": "none"
                    }, r[s] = "0", r[o] = "50%", r["margin-" + o] = "-8px", g.createStyle(b.cls.navcss + "." + i, r, !0), a = {
                        width: "0",
                        height: "0",
                        content: '""',
                        position: "absolute",
                        border: "8px solid transparent"
                    }, a["border-" + y.opposite(s) + "-width"] = "12px", a["border-" + s + "-width"] = "10px", a["border-" + y.opposite(s) + "-color"] = t.settings.theme, a[s] = "0", a[o] = "50%", a["margin-" + o] = "-8px", g.createStyle(b.cls.id(t, !0) + " ." + b.cls.nav + "." + i + ":after", a, !0), l = {}, l[n ? "height" : "width"] = "100%", l[o] = "0", l["margin-" + o] = "0", g.createStyle(b.cls.maincss + ".border ." + b.cls.nav + "." + i, l, !0), u = {}, u[s] = h(t.slidr, "padding-" + s) + "px", g.createStyle(b.cls.id(t, !0) + ".border ." + b.cls.nav + "." + i, u, !0)
                },
                onclick: function(t) {
                    return function e(i) {
                        k.slide(t, c(g.sanitize(i).target, b.cls.data))
                    }
                },
                update: function(t) {
                    for (var e in t.nav) a(t.nav[e], k.canSlide(t, e) ? "rm" : "add", "disabled")
                }
            },
            _ = {
                cls: g.classnames("breadcrumbs"),
                init: function(t) {
                    t.slidr && !t.breadcrumbs && (t.breadcrumbs = h(a(r("aside", {
                        id: _.cls.id(t)
                    }), "add", "disabled"), {
                        opacity: "0",
                        filter: "alpha(opacity=0)",
                        "z-index": "0",
                        "pointer-events": "none",
                        visibility: "hidden"
                    }), _.css(t), t.slidr.appendChild(t.breadcrumbs), d(t.breadcrumbs, "click", _.onclick(t)))
                },
                css: function(t) {
                    g.createStyle(_.cls.maincss, {
                        position: "absolute",
                        bottom: h(t.slidr, "padding-bottom") + "px",
                        right: h(t.slidr, "padding-right") + "px",
                        padding: "10px",
                        "box-sizing": "border-box",
                        transform: "translateZ(9999px)"
                    }, !0), g.createStyle(_.cls.maincss + ".disabled", {
                        transform: "translateZ(0px) !important"
                    }, !0), g.createStyle(_.cls.navcss, {
                        padding: "0",
                        "font-size": "0",
                        "line-height": "0"
                    }, !0), g.createStyle(_.cls.navcss + " li", {
                        width: "10px",
                        height: "10px",
                        display: "inline-block",
                        margin: "3px",
                        "tap-highlight-color": "rgba(0, 0, 0, 0)",
                        "touch-callout": "none",
                        "user-select": "none"
                    }, !0), g.createStyle(_.cls.id(t, !0) + " ." + _.cls.nav + " li.normal", {
                        "border-radius": "100%",
                        border: "1px " + t.settings.theme + " solid",
                        cursor: "pointer",
                        "pointer-events": "auto"
                    }, !0), g.createStyle(_.cls.id(t, !0) + " ." + _.cls.nav + " li.active", {
                        width: "12px",
                        height: "12px",
                        margin: "2px",
                        "background-color": t.settings.theme
                    }, !0)
                },
                onclick: function(t) {
                    return function e(i) {
                        k.slide(t, c(g.sanitize(i).target, _.cls.data))
                    }
                },
                offsets: {
                    right: {
                        x: 1,
                        y: 0
                    },
                    up: {
                        x: 0,
                        y: 1
                    },
                    left: {
                        x: -1,
                        y: 0
                    },
                    down: {
                        x: 0,
                        y: -1
                    }
                },
                find: function(t, e, i, n, s, o) {
                    if (n) {
                        e[n] || (e[n] = {
                            x: s,
                            y: o
                        }, s < i.x.min && (i.x.min = s), s > i.x.max && (i.x.max = s), o < i.y.min && (i.y.min = o), o > i.y.max && (i.y.max = o)), n = y.get(t, n);
                        for (var r in _.offsets) n[r] && !e[n[r]] && _.find(t, e, i, n[r], s + _.offsets[r].x, o + _.offsets[r].y)
                    }
                },
                update: function(t, e, i) {
                    a(t.crumbs[e].el, "in" === i ? "add" : "rm", "active")
                },
                create: function(t) {
                    if (_.init(t), t.breadcrumbs) {
                        var e = {},
                            i = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                        _.find(t, e, i, t.start, 0, 0), i.x.modifier = 0 - i.x.min, i.y.modifier = 0 - i.y.min;
                        var n = {};
                        for (var s in e) e[s].x += i.x.modifier, e[s].y += i.y.modifier, n[e[s].x + "," + e[s].y] = s;
                        for (var o = i.y.max - i.y.min + 1, l = i.x.max - i.x.min + 1; t.breadcrumbs.firstChild;) t.breadcrumbs.removeChild(t.breadcrumbs.firstChild);
                        for (var c = a(r("ul"), "add", _.cls.nav), h = r("li"), d = o - 1, p; d >= 0; d--) {
                            p = c.cloneNode(!1);
                            for (var f = 0, g, m; l > f; f++) g = h.cloneNode(!1), m = n[f + "," + d], m && (a(g, "add", "normal", m === t.current ? "active" : null), u(g, _.cls.data, m), e[m].el = g), p.appendChild(g);
                            t.breadcrumbs.appendChild(p)
                        }
                        t.crumbs = e
                    }
                }
            },
            w = {
                init: function(t, i, n) {
                    var s = y.get(t, i);
                    if (!s.initialized) {
                        var o = h(s.el, "display"),
                            r = {
                                display: "none" === o ? "block" : o,
                                visibility: "hidden",
                                position: "absolute",
                                opacity: "0",
                                filter: "alpha(opacity=0)",
                                "z-index": "0",
                                "pointer-events": "none",
                                "backface-visibility": "hidden",
                                "transform-style": "preserve-3d"
                            };
                        g.isIE() && (r = e(r, {
                            display: "none",
                            visibility: "visible"
                        })), s.initialized = !0, h(s.el, r)
                    }
                },
                supported: {
                    none: !0,
                    fade: g.supports("animation", "opacity"),
                    linear: g.supports("animation", "opacity", "transform"),
                    cube: g.supports("animation", "backface-visibility", "opacity", "transform", "transform-style")
                },
                animation: {
                    fade: function() {
                        g.add.fade("slidr-fade-in", "0", "1"), g.add.fade("slidr-fade-out", "1", "0")
                    }(),
                    linear: {
                        "in": {
                            left: function(t, e, i) {
                                g.add.linear(t, "in", "X(-" + e, "X(0", i, "1")
                            },
                            right: function(t, e, i) {
                                g.add.linear(t, "in", "X(" + e, "X(0", i, "1")
                            },
                            up: function(t, e, i) {
                                g.add.linear(t, "in", "Y(-" + e, "Y(0", i, "1")
                            },
                            down: function(t, e, i) {
                                g.add.linear(t, "in", "Y(" + e, "Y(0", i, "1")
                            }
                        },
                        out: {
                            left: function(t, e, i) {
                                g.add.linear(t, "out", "X(0", "X(" + e, "1", i)
                            },
                            right: function(t, e, i) {
                                g.add.linear(t, "out", "X(0", "X(-" + e, "1", i)
                            },
                            up: function(t, e, i) {
                                g.add.linear(t, "out", "Y(0", "Y(" + e, "1", i)
                            },
                            down: function(t, e, i) {
                                g.add.linear(t, "out", "Y(0", "Y(-" + e, "1", i)
                            }
                        }
                    },
                    cube: {
                        "in": {
                            left: function(t, e, i) {
                                g.add.cube(t, "Y(-9", "Y(", e / 2, i, "1")
                            },
                            right: function(t, e, i) {
                                g.add.cube(t, "Y(9", "Y(", e / 2, i, "1")
                            },
                            up: function(t, e, i) {
                                g.add.cube(t, "X(9", "X(", e / 2, i, "1")
                            },
                            down: function(t, e, i) {
                                g.add.cube(t, "X(-9", "X(", e / 2, i, "1")
                            }
                        },
                        out: {
                            left: function(t, e, i) {
                                g.add.cube(t, "Y(", "Y(9", e / 2, "1", i)
                            },
                            right: function(t, e, i) {
                                g.add.cube(t, "Y(", "Y(-9", e / 2, "1", i)
                            },
                            up: function(t, e, i) {
                                g.add.cube(t, "X(", "X(-9", e / 2, "1", i)
                            },
                            down: function(t, e, i) {
                                g.add.cube(t, "X(", "X(9", e / 2, "1", i)
                            }
                        }
                    }
                },
                name: function(e, i, n, s, o) {
                    var r = ["slidr", n, s];
                    if (("linear" === n || "cube" === n) && o) {
                        r.push(o);
                        var a = e.settings.fade ? "0" : "1";
                        "0" === a && r.push("fade");
                        var l = "up" === o || "down" === o ? "h" : "w",
                            u = "h" === l ? x.getHeight(i) : x.getWidth(i);
                        r.push(l, u);
                        var c = t(w.animation, [n, s, o]);
                        c && c(r.join("-"), u, a)
                    }
                    return r.join("-")
                },
                animate: function(t, i, n, s, o, r, a, l) {
                    var u = {
                        opacity: "in" === s ? "1" : "0",
                        filter: "alpha(opacity=" + ("in" === s ? "100" : "0") + ")",
                        "z-index": a || ("in" === s ? "1" : "0"),
                        visibility: "in" === s ? "visible" : "hidden",
                        "pointer-events": l || ("in" === s ? "auto" : "none")
                    };
                    g.isIE() && (u = e(u, {
                        display: "in" === s ? "block" : "none",
                        visibility: "visible"
                    }));
                    var c = r || y.get(t, i).el,
                        d = t.settings.timing[n];
                    if (w.supported[n] && d) {
                        var p = w.name(t, c, n, s, o);
                        u.animation = "none" === n ? "none" : [p, d].join(" ")
                    }
                    h(c, u), y.get(t, i) && g.supports("transform") && w.fixTranslateZ(t, c, s)
                },
                fixTranslateZ: function(t, e, i) {
                    var s = e.getElementsByTagName("aside");
                    if (s.length)
                        for (var o = 0, r, l, u, d; r = s[o]; o++)
                            if (r.getAttribute("id")) {
                                for (l = r.parentNode; !c(l, "data-slidr") && "body" !== n(l);) l = l.parentNode;
                                "body" === n(l) && (l = t.slidr), d = h(l, "visibility"), u = "out" === i || !i && "hidden" === d ? "add" : "visible" === d ? "rm" : null, u && a(r, u, "disabled")
                            }
                }
            },
            x = {
                active: {},
                autoResize: function(t) {
                    x.active[t.id] = {
                        src: t,
                        w: 0,
                        h: 0,
                        d: x.dynamic(t)
                    }
                },
                dynamic: function(t) {
                    var e = h(t.slidr.cloneNode(!1), {
                            position: "absolute",
                            opacity: "0",
                            filter: "alpha(opacity=0)"
                        }),
                        i = h(r("div"), {
                            width: "42px",
                            height: "42px"
                        });
                    e.appendChild(i), t.slidr.parentNode.insertBefore(e, t.slidr);
                    var n = (f(e) ? x.extraWidth(t.slidr) : 0) + 42,
                        s = (f(e) ? x.extraHeight(t.slidr) : 0) + 42,
                        o = h(e, "width"),
                        a = h(e, "height"),
                        l = h(e, "min-width"),
                        u = h(e, "min-height"),
                        c = {
                            width: "auto" === o || o === n || 0 !== l && "auto" != l,
                            height: "auto" === a || a === s || 0 !== u && "auto" != u
                        };
                    return t.slidr.parentNode.removeChild(e), c
                },
                sum: function() {
                    for (var t = 0, e = 0, i; i = arguments[t]; t++) e += i;
                    return isNaN(e) ? 0 : e
                },
                widthMargin: function(t) {
                    return x.sum(Math.max(0, h(t, "margin-left")), Math.max(0, h(t, "margin-right")))
                },
                heightMargin: function(t) {
                    return x.sum(Math.max(0, h(t, "margin-top")), Math.max(0, h(t, "margin-bottom")))
                },
                widthPad: function(t) {
                    return x.sum(h(t, "padding-left"), h(t, "padding-right"))
                },
                heightPad: function(t) {
                    return x.sum(h(t, "padding-top"), h(t, "padding-bottom"))
                },
                widthBorder: function(t) {
                    return x.sum(h(t, "border-left-width"), h(t, "border-right-width"))
                },
                heightBorder: function(t) {
                    return x.sum(h(t, "border-top-width"), h(t, "border-bottom-width"))
                },
                extraWidth: function(t) {
                    return x.sum(x.widthPad(t), x.widthBorder(t))
                },
                extraHeight: function(t) {
                    return x.sum(x.heightPad(t), x.heightBorder(t))
                },
                getWidth: function(t) {
                    var e = h(t, "width");
                    return g.isIE() && "auto" === e && t.clientWidth && (e = t.clientWidth), "auto" !== e && (e += x.widthMargin(t) + (f(t) ? 0 : x.extraWidth(t))), e
                },
                getHeight: function(t) {
                    var e = h(t, "height");
                    return g.isIE() && "auto" === e && t.clientHeight && (e = t.clientHeight), "auto" !== e && (e += x.heightMargin(t) + (f(t) ? 0 : x.extraHeight(t))), e
                },
                setWidth: function(t, e) {
                    var i = e;
                    return "auto" !== e && "" !== e && (i = e + (f(t) ? x.extraWidth(t) : 0) + "px"), h(t, {
                        width: i
                    }), e
                },
                setHeight: function(t, e) {
                    var i = e;
                    return "auto" !== e && "" !== e && (i = e + (f(t) ? x.extraHeight(t) : 0) + "px"), h(t, {
                        height: i
                    }), e
                }
            },
            T = {
                mouse: {
                    over: [],
                    isOver: function(t) {
                        return s(T.mouse.over, t) >= 0
                    },
                    add: function(t) {
                        T.mouse.isOver(t) || T.mouse.over.push(t)
                    },
                    remove: function(t) {
                        T.mouse.isOver(t) && T.mouse.over.splice(s(T.mouse.over, t), 1)
                    },
                    current: function() {
                        for (var t = T.mouse.over[T.mouse.over.length - 1], e = 0, n = T.mouse.over.length, s = T.mouse.over[e]; n > e; e++) i(t, s) && (t = s);
                        return t
                    },
                    track: function(t) {
                        d(t, "mouseenter", function(t) {
                            T.mouse.add(g.sanitize(t).currentTarget.id)
                        }), d(t, "mouseleave", function(t) {
                            T.mouse.remove(g.sanitize(t).currentTarget.id)
                        })
                    }
                },
                keyboard: function() {
                    d(document, "keydown", function(t) {
                        if (t = g.sanitize(t), T.mouse.current() && t.which <= 40 && t.which >= 37) {
                            var e = S[T.mouse.current()],
                                i = null;
                            40 === t.which && e.canSlide("down") ? i = "down" : 39 === t.which && e.canSlide("right") ? i = "right" : 38 === t.which && e.canSlide("up") ? i = "up" : 37 === t.which && e.canSlide("left") && (i = "left"), i && e.slide(i) && g.stop(t)
                        }
                    })
                }(),
                touch: function(t) {
                    var e = {},
                        i = {};
                    d(t.slidr, "touchstart", function(t) {
                        t = g.sanitize(t), e = {
                            x: t.touches[0].pageX,
                            y: t.touches[0].pageY,
                            time: +new Date
                        }, i = {
                            x: 0,
                            y: 0,
                            duration: 0
                        }
                    }), d(t.slidr, "touchmove", function(t) {
                        t = g.sanitize(t), t.touches.length > 1 || t.scale && 1 !== t.scale || (i.x = t.touches[0].pageX - e.x, i.y = t.touches[0].pageY - e.y, i.duration = +new Date - e.time, i.duration > 100 && (Math.abs(i.x) + Math.abs(i.y)) / i.duration < .25 || g.stop(t))
                    }), d(t.slidr, "touchend", function(n) {
                        if (n = g.sanitize(n), Number(+new Date - e.time) < 250) {
                            var s = Math.abs(i.x),
                                o = Math.abs(i.y),
                                r = s > 20,
                                a = o > 20,
                                l = i.x < 0 ? "right" : "left",
                                u = i.y < 0 ? "down" : "up",
                                c = r && a ? s > o ? l : u : r ? l : a ? u : null;
                            c && k.slide(t, c), g.stop(n)
                        }
                    })
                }
            },
            k = {
                start: function(t, e) {
                    if (!t.started && t.slidr) {
                        var i = h(t.slidr, "display"),
                            n = h(t.slidr, "position"),
                            s = h(t.slidr, "opacity");
                        h(t.slidr, {
                            visibility: "visible",
                            opacity: s,
                            filter: "alpha(opacity=" + 100 * s + ")",
                            display: "inline-block" === i || "inline" === i ? "inline-block" : "block",
                            position: "static" === n ? "relative" : n,
                            overflow: t.settings.overflow ? h(t.slidr, "overflow") : "hidden",
                            transition: "height 0.05s ease-out, width 0.05s ease-out",
                            "tap-highlight-color": "rgba(0, 0, 0, 0)",
                            "touch-callout": "none"
                        }), t.start || k.add(t, t.settings.direction, y.find(t, !0), t.settings.transition), y.get(t, e) && (t.start = e), y.display(t), x.autoResize(t), w.fixTranslateZ(t, t.slidr), t.settings.keyboard && T.mouse.track(t.slidr), t.settings.touch && T.touch(t), t.started = !0, b.update(t)
                    }
                },
                canSlide: function(t, e) {
                    return t.started && e && (y.isdir(e) ? !!y.get(t, t.current, e) : !!y.get(t, e))
                },
                slide: function(t, e) {
                    k.canSlide(t, e) && y.slide(t, e)
                },
                add: function(t, e, i, n, s) {
                    if (t.slidr) {
                        var o = m.validate(t, n),
                            r = y.find(t),
                            a = "horizontal" === e || "h" === e ? "left" : "up",
                            l = "horizontal" === e || "h" === e ? "right" : "down";
                        y.validate(t, i, o, r, a, l) || s ? y.add(t, i, o, r, a, l) : console.warn("[Slidr] Error adding [" + e + "] slides for [" + t.id + "].")
                    }
                },
                auto: function(t, e, i) {
                    t.started && y.isdir(i) && (k.stop(t), t.auto.msec = e, t.auto.direction = i, t.auto.id = setInterval(function() {
                        t.settings.pause && T.mouse.isOver(t.id) || y.slide(t, i)
                    }, e))
                },
                stop: function(t) {
                    t.started && t.auto.id && (clearInterval(t.auto.id), t.auto.id = null)
                },
                breadcrumbs: function(t) {
                    if (t.breadcrumbs && t.displayed) {
                        var e = "0" === h(t.breadcrumbs, "opacity") ? "in" : "out";
                        w.animate(t, null, "fade", e, null, t.breadcrumbs, "3", "none"), t.controls && a(t.controls, "in" === e ? "add" : "rm", "breadcrumbs")
                    }
                },
                controls: function(t, e) {
                    if (t.controls && t.displayed) {
                        b.valid(e) || (e = null);
                        var i = "hidden" === h(t.controls, "visibility"),
                            n = e && "none" !== e ? "in" : "out";
                        if ("out" === n && i) return;
                        "border" === e ? a(t.controls, "add", "border") : "corner" === e && a(t.controls, "rm", "border"), w.animate(t, null, "fade", n, null, t.controls, "2", "none")
                    }
                }
            },
            C = function(t, i, n) {
                var s = {
                        id: t,
                        slidr: i,
                        breadcrumbs: null,
                        controls: null,
                        settings: n,
                        started: !1,
                        displayed: !1,
                        start: null,
                        current: null,
                        auto: {
                            id: null,
                            msec: 5e3,
                            direction: "right"
                        },
                        slides: {},
                        trans: {},
                        crumbs: {},
                        nav: {
                            up: null,
                            down: null,
                            left: null,
                            right: null
                        }
                    },
                    o = {
                        start: function(t) {
                            return k.start(s, t), this
                        },
                        canSlide: function(t) {
                            return k.canSlide(s, t)
                        },
                        slide: function(t) {
                            return k.slide(s, t), this
                        },
                        add: function(t, e, i, n) {
                            return k.add(s, t, e, i, n), this
                        },
                        auto: function(t, e, i) {
                            return k.start(s, i), k.auto(s, t || s.auto.msec, e || s.auto.direction), this
                        },
                        stop: function() {
                            return k.stop(s), this
                        },
                        timing: function(t, i) {
                            return t && t.constructor === Object ? s.settings.timing = e(s.settings.timing, t) : "string" == typeof t && "string" == typeof i && (s.settings.timing[t] = i), this
                        },
                        breadcrumbs: function() {
                            return k.breadcrumbs(s), this
                        },
                        controls: function(t) {
                            return k.controls(s, t), this
                        }
                    };
                return o
            },
            j = setInterval(function M() {
                var t, e, n, s, o, r;
                for (n in x.active) e = x.active[n], t = e.src, g.isIE() || i(document, t.slidr) ? "hidden" === h(t.slidr, "visibility") ? (x.active[n].w = x.setWidth(t.slidr, 0), x.active[n].h = x.setHeight(t.slidr, 0)) : y.get(t, t.current) && (s = y.get(t, t.current).el, o = x.getWidth(s), r = x.getHeight(s), e.d.width && e.w != o && (x.active[n].w = x.setWidth(t.slidr, o)), e.d.height && e.h != r && (x.active[n].h = x.setHeight(t.slidr, r))) : (delete x.active[n], delete S[t.id]);
                return M
            }(), 250),
            E = "0.5.0",
            S = {},
            O = function() {},
            P = {
                after: O,
                before: O,
                breadcrumbs: !1,
                controls: "border",
                direction: "horizontal",
                fade: !0,
                keyboard: !1,
                overflow: !1,
                pause: !1,
                theme: "#fff",
                timing: {},
                touch: !1,
                transition: "linear"
            },
            D = {
                none: "none",
                fade: "0.4s ease-out",
                linear: "0.6s ease-out",
                cube: "1s cubic-bezier(0.15, 0.9, 0.25, 1)"
            };
        return {
            version: function() {
                return E
            },
            transitions: function() {
                return m.available.slice(0)
            },
            create: function(t, i) {
                var n = document.getElementById(t);
                if (!n) return void console.warn("[Slidr] Could not find element with id [" + t + "].");
                var s = e(P, i || {});
                return s.timing = e(D, s.timing), S[t] = S[t] || new C(t, n, s), S[t]
            }
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function($) {
        function t(t, i) {
            var n, s, o, r = t.nodeName.toLowerCase();
            return "area" === r ? (n = t.parentNode, s = n.name, t.href && s && "map" === n.nodeName.toLowerCase() ? (o = $("img[usemap='#" + s + "']")[0], !!o && e(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && e(t)
        }

        function e(t) {
            return $.expr.filters.visible(t) && !$(t).parents().addBack().filter(function() {
                return "hidden" === $.css(this, "visibility")
            }).length
        }

        function i(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function n() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.regional.en = $.extend(!0, {}, this.regional[""]), this.regional["en-US"] = $.extend(!0, {}, this.regional.en), this.dpDiv = s($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function s(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout", function() {
                $(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(e, "mouseover", o)
        }

        function o() {
            $.datepicker._isDisabledDatepicker(T.inline ? T.dpDiv.parent()[0] : T.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
        }

        function r(t, e) {
            $.extend(t, e);
            for (var i in e) null == e[i] && (t[i] = e[i]);
            return t
        }

        function a(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        $.ui = $.ui || {}, $.extend($.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), $.fn.extend({
            scrollParent: function(t) {
                var e = this.css("position"),
                    i = "absolute" === e,
                    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    s = this.parents().filter(function() {
                        var t = $(this);
                        return i && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== e && s.length ? s : $(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id")
                })
            }
        }), $.extend($.expr[":"], {
            data: $.expr.createPseudo ? $.expr.createPseudo(function(t) {
                return function(e) {
                    return !!$.data(e, t)
                }
            }) : function(t, e, i) {
                return !!$.data(t, i[3])
            },
            focusable: function(e) {
                return t(e, !isNaN($.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var i = $.attr(e, "tabindex"),
                    n = isNaN(i);
                return (n || i >= 0) && t(e, !n)
            }
        }), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(t, e) {
            function i(t, e, i, s) {
                return $.each(n, function() {
                    e -= parseFloat($.css(t, "padding" + this)) || 0, i && (e -= parseFloat($.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat($.css(t, "margin" + this)) || 0)
                }), e
            }
            var n = "Width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                s = e.toLowerCase(),
                o = {
                    innerWidth: $.fn.innerWidth,
                    innerHeight: $.fn.innerHeight,
                    outerWidth: $.fn.outerWidth,
                    outerHeight: $.fn.outerHeight
                };
            $.fn["inner" + e] = function(t) {
                return void 0 === t ? o["inner" + e].call(this) : this.each(function() {
                    $(this).css(s, i(this, t) + "px")
                })
            }, $.fn["outer" + e] = function(t, n) {
                return "number" != typeof t ? o["outer" + e].call(this, t) : this.each(function() {
                    $(this).css(s, i(this, t, !0, n) + "px")
                })
            }
        }), $.fn.addBack || ($.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = function(t) {
            return function(e) {
                return arguments.length ? t.call(this, $.camelCase(e)) : t.call(this)
            }
        }($.fn.removeData)), $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), $.fn.extend({
            focus: function(t) {
                return function(e, i) {
                    return "number" == typeof e ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            $(t).focus(), i && i.call(t)
                        }, e)
                    }) : t.apply(this, arguments)
                }
            }($.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var e = $(this[0]), i, n; e.length && e[0] !== document;) {
                        if (i = e.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        e = e.parent()
                    }
                return 0
            }
        }), $.ui.plugin = {
            add: function(t, e, i) {
                var n, s = $.ui[t].prototype;
                for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        };
        var l = 0,
            u = Array.prototype.slice;
        $.cleanData = function(t) {
            return function(e) {
                var i, n, s;
                for (s = 0; null != (n = e[s]); s++) try {
                    i = $._data(n, "events"), i && i.remove && $(n).triggerHandler("remove")
                } catch (o) {}
                t(e)
            }
        }($.cleanData), $.widget = function(t, e, i) {
            var n, s, o, r, a = {},
                l = t.split(".")[0];
            return t = t.split(".")[1], n = l + "-" + t, i || (i = e, e = $.Widget), $.expr[":"][n.toLowerCase()] = function(t) {
                return !!$.data(t, n)
            }, $[l] = $[l] || {}, s = $[l][t], o = $[l][t] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, $.extend(o, s, {
                version: i.version,
                _proto: $.extend({}, i),
                _childConstructors: []
            }), r = new e, r.options = $.widget.extend({}, r.options), $.each(i, function(t, i) {
                return $.isFunction(i) ? void(a[t] = function() {
                    var n = function() {
                            return e.prototype[t].apply(this, arguments)
                        },
                        s = function(i) {
                            return e.prototype[t].apply(this, i)
                        };
                    return function() {
                        var t = this._super,
                            e = this._superApply,
                            o;
                        return this._super = n, this._superApply = s, o = i.apply(this, arguments), this._super = t, this._superApply = e, o
                    }
                }()) : void(a[t] = i)
            }), o.prototype = $.widget.extend(r, {
                widgetEventPrefix: s ? r.widgetEventPrefix || t : t
            }, a, {
                constructor: o,
                namespace: l,
                widgetName: t,
                widgetFullName: n
            }), s ? ($.each(s._childConstructors, function(t, e) {
                var i = e.prototype;
                $.widget(i.namespace + "." + i.widgetName, o, e._proto)
            }), delete s._childConstructors) : e._childConstructors.push(o), $.widget.bridge(t, o), o
        }, $.widget.extend = function(t) {
            for (var e = u.call(arguments, 1), i = 0, n = e.length, s, o; n > i; i++)
                for (s in e[i]) o = e[i][s], e[i].hasOwnProperty(s) && void 0 !== o && ($.isPlainObject(o) ? t[s] = $.isPlainObject(t[s]) ? $.widget.extend({}, t[s], o) : $.widget.extend({}, o) : t[s] = o);
            return t
        }, $.widget.bridge = function(t, e) {
            var i = e.prototype.widgetFullName || t;
            $.fn[t] = function(n) {
                var s = "string" == typeof n,
                    o = u.call(arguments, 1),
                    r = this;
                return s ? this.each(function() {
                    var e, s = $.data(this, i);
                    return "instance" === n ? (r = s, !1) : s ? $.isFunction(s[n]) && "_" !== n.charAt(0) ? (e = s[n].apply(s, o), e !== s && void 0 !== e ? (r = e && e.jquery ? r.pushStack(e.get()) : e, !1) : void 0) : $.error("no such method '" + n + "' for " + t + " widget instance") : $.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + n + "'")
                }) : (o.length && (n = $.widget.extend.apply(null, [n].concat(o))), this.each(function() {
                    var t = $.data(this, i);
                    t ? (t.option(n || {}), t._init && t._init()) : $.data(this, i, new e(n, this))
                })), r
            }
        }, $.Widget = function() {}, $.Widget._childConstructors = [], $.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, e) {
                e = $(e || this.defaultElement || this)[0], this.element = $(e), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = $(), this.hoverable = $(), this.focusable = $(), e !== this && ($.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === e && this.destroy()
                    }
                }), this.document = $(e.style ? e.ownerDocument : e.document || e), this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), this.options = $.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: $.noop,
            _getCreateEventData: $.noop,
            _create: $.noop,
            _init: $.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: $.noop,
            widget: function() {
                return this.element
            },
            option: function(t, e) {
                var i = t,
                    n, s, o;
                if (0 === arguments.length) return $.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (i = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (s = i[t] = $.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                        s[t] = e
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        i[t] = e
                    }
                return this._setOptions(i), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(t, e, i) {
                var n, s = this;
                "boolean" != typeof t && (i = e, e = t, t = !1), i ? (e = n = $(e), this.bindings = this.bindings.add(e)) : (i = e, e = this.element, n = this.widget()), $.each(i, function(i, o) {
                    function r() {
                        return t || s.options.disabled !== !0 && !$(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
                    }
                    "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || $.guid++);
                    var a = i.match(/^([\w:-]*)\s*(.*)$/),
                        l = a[1] + s.eventNamespace,
                        u = a[2];
                    u ? n.delegate(u, l, r) : e.bind(l, r)
                })
            },
            _off: function(t, e) {
                e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = $(this.bindings.not(t).get()), this.focusable = $(this.focusable.not(t).get()), this.hoverable = $(this.hoverable.not(t).get())
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        $(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        $(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        $(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        $(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, e, i) {
                var n, s, o = this.options[t];
                if (i = i || {}, e = $.Event(e), e.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent)
                    for (n in s) n in e || (e[n] = s[n]);
                return this.element.trigger(e, i), !($.isFunction(o) && o.apply(this.element[0], [e].concat(i)) === !1 || e.isDefaultPrevented())
            }
        }, $.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, e) {
            $.Widget.prototype["_" + t] = function(i, n, s) {
                "string" == typeof n && (n = {
                    effect: n
                });
                var o, r = n ? n === !0 || "number" == typeof n ? e : n.effect || e : t;
                n = n || {}, "number" == typeof n && (n = {
                    duration: n
                }), o = !$.isEmptyObject(n), n.complete = s, n.delay && i.delay(n.delay), o && $.effects && $.effects.effect[r] ? i[t](n) : r !== t && i[r] ? i[r](n.duration, n.easing, s) : i.queue(function(e) {
                    $(this)[t](), s && s.call(i[0]), e()
                })
            }
        });
        var c = $.widget,
            h = !1;
        $(document).mouseup(function() {
            h = !1
        });
        var d = $.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(e) {
                    return !0 === $.data(e.target, t.widgetName + ".preventClickEvent") ? ($.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!h) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this,
                        i = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? $(t.target).closest(this.options.cancel).length : !1;
                    return i && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        e.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === $.data(t.target, this.widgetName + ".preventClickEvent") && $.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return e._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return e._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), h = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && $.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), h = !1, !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        });
        ! function() {
            function t(t, e, i) {
                return [parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
            }

            function e(t, e) {
                return parseInt($.css(t, e), 10) || 0
            }

            function i(t) {
                var e = t[0];
                return 9 === e.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : $.isWindow(e) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : e.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: e.pageY,
                        left: e.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            $.ui = $.ui || {};
            var n, s, o = Math.max,
                r = Math.abs,
                a = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                d = /%$/,
                p = $.fn.position;
            $.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var t, e, i = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = i.children()[0];
                        return $("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), e = s.offsetWidth, t === e && (e = i[0].clientWidth), i.remove(), n = t - e
                    },
                    getScrollInfo: function(t) {
                        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth,
                            s = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                        return {
                            width: s ? $.position.scrollbarWidth() : 0,
                            height: n ? $.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var e = $(t || window),
                            i = $.isWindow(e[0]),
                            n = !!e[0] && 9 === e[0].nodeType;
                        return {
                            element: e,
                            isWindow: i,
                            isDocument: n,
                            offset: e.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: e.scrollLeft(),
                            scrollTop: e.scrollTop(),
                            width: i || n ? e.width() : e.outerWidth(),
                            height: i || n ? e.height() : e.outerHeight()
                        }
                    }
                }, $.fn.position = function(n) {
                    if (!n || !n.of) return p.apply(this, arguments);
                    n = $.extend({}, n);
                    var d, f, g, m, v, y, b = $(n.of),
                        _ = $.position.getWithinInfo(n.within),
                        w = $.position.getScrollInfo(_),
                        x = (n.collision || "flip").split(" "),
                        T = {};
                    return y = i(b), b[0].preventDefault && (n.at = "left top"), f = y.width, g = y.height, m = y.offset, v = $.extend({}, m), $.each(["my", "at"], function() {
                        var t = (n[this] || "").split(" "),
                            e, i;
                        1 === t.length && (t = l.test(t[0]) ? t.concat(["center"]) : u.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = l.test(t[0]) ? t[0] : "center", t[1] = u.test(t[1]) ? t[1] : "center", e = c.exec(t[0]), i = c.exec(t[1]), T[this] = [e ? e[0] : 0, i ? i[0] : 0], n[this] = [h.exec(t[0])[0], h.exec(t[1])[0]]
                    }), 1 === x.length && (x[1] = x[0]), "right" === n.at[0] ? v.left += f : "center" === n.at[0] && (v.left += f / 2), "bottom" === n.at[1] ? v.top += g : "center" === n.at[1] && (v.top += g / 2), d = t(T.at, f, g), v.left += d[0], v.top += d[1], this.each(function() {
                        var i, l, u = $(this),
                            c = u.outerWidth(),
                            h = u.outerHeight(),
                            p = e(this, "marginLeft"),
                            y = e(this, "marginTop"),
                            k = c + p + e(this, "marginRight") + w.width,
                            C = h + y + e(this, "marginBottom") + w.height,
                            j = $.extend({}, v),
                            E = t(T.my, u.outerWidth(), u.outerHeight());
                        "right" === n.my[0] ? j.left -= c : "center" === n.my[0] && (j.left -= c / 2), "bottom" === n.my[1] ? j.top -= h : "center" === n.my[1] && (j.top -= h / 2), j.left += E[0], j.top += E[1], s || (j.left = a(j.left), j.top = a(j.top)), i = {
                            marginLeft: p,
                            marginTop: y
                        }, $.each(["left", "top"], function(t, e) {
                            $.ui.position[x[t]] && $.ui.position[x[t]][e](j, {
                                targetWidth: f,
                                targetHeight: g,
                                elemWidth: c,
                                elemHeight: h,
                                collisionPosition: i,
                                collisionWidth: k,
                                collisionHeight: C,
                                offset: [d[0] + E[0], d[1] + E[1]],
                                my: n.my,
                                at: n.at,
                                within: _,
                                elem: u
                            })
                        }), n.using && (l = function(t) {
                            var e = m.left - j.left,
                                i = e + f - c,
                                s = m.top - j.top,
                                a = s + g - h,
                                l = {
                                    target: {
                                        element: b,
                                        left: m.left,
                                        top: m.top,
                                        width: f,
                                        height: g
                                    },
                                    element: {
                                        element: u,
                                        left: j.left,
                                        top: j.top,
                                        width: c,
                                        height: h
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                                };
                            c > f && r(e + i) < f && (l.horizontal = "center"), h > g && r(s + a) < g && (l.vertical = "middle"), o(r(e), r(i)) > o(r(s), r(a)) ? l.important = "horizontal" : l.important = "vertical", n.using.call(this, t, l)
                        }), u.offset($.extend(j, {
                            using: l
                        }))
                    })
                }, $.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i = e.within,
                                n = i.isWindow ? i.scrollLeft : i.offset.left,
                                s = i.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                a = n - r,
                                l = r + e.collisionWidth - s - n,
                                u;
                            e.collisionWidth > s ? a > 0 && 0 >= l ? (u = t.left + a + e.collisionWidth - s - n, t.left += a - u) : l > 0 && 0 >= a ? t.left = n : a > l ? t.left = n + s - e.collisionWidth : t.left = n : a > 0 ? t.left += a : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                        },
                        top: function(t, e) {
                            var i = e.within,
                                n = i.isWindow ? i.scrollTop : i.offset.top,
                                s = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                a = n - r,
                                l = r + e.collisionHeight - s - n,
                                u;
                            e.collisionHeight > s ? a > 0 && 0 >= l ? (u = t.top + a + e.collisionHeight - s - n, t.top += a - u) : l > 0 && 0 >= a ? t.top = n : a > l ? t.top = n + s - e.collisionHeight : t.top = n : a > 0 ? t.top += a : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i = e.within,
                                n = i.offset.left + i.scrollLeft,
                                s = i.width,
                                o = i.isWindow ? i.scrollLeft : i.offset.left,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = a - o,
                                u = a + e.collisionWidth - s - o,
                                c = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                h = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                d = -2 * e.offset[0],
                                p, f;
                            0 > l ? (p = t.left + c + h + d + e.collisionWidth - s - n, (0 > p || p < r(l)) && (t.left += c + h + d)) : u > 0 && (f = t.left - e.collisionPosition.marginLeft + c + h + d - o, (f > 0 || r(f) < u) && (t.left += c + h + d))
                        },
                        top: function(t, e) {
                            var i = e.within,
                                n = i.offset.top + i.scrollTop,
                                s = i.height,
                                o = i.isWindow ? i.scrollTop : i.offset.top,
                                a = t.top - e.collisionPosition.marginTop,
                                l = a - o,
                                u = a + e.collisionHeight - s - o,
                                c = "top" === e.my[1],
                                h = c ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                p = -2 * e.offset[1],
                                f, g;
                            0 > l ? (g = t.top + h + d + p + e.collisionHeight - s - n, (0 > g || g < r(l)) && (t.top += h + d + p)) : u > 0 && (f = t.top - e.collisionPosition.marginTop + h + d + p - o, (f > 0 || r(f) < u) && (t.top += h + d + p))
                        }
                    },
                    flipfit: {
                        left: function() {
                            $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, e, i, n, o, r = document.getElementsByTagName("body")[0],
                        a = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), i = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, r && $.extend(i, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in i) t.style[o] = i[o];
                    t.appendChild(a), e = r || document.documentElement, e.insertBefore(t, e.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", n = $(a).offset().left, s = n > 10 && 11 > n, t.innerHTML = "", e.removeChild(t)
                }()
        }();
        var p = $.ui.position,
            f = $.widget("ui.accordion", {
                version: "1.11.4",
                options: {
                    active: 0,
                    animate: {},
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child,> :not(li):even",
                    heightStyle: "auto",
                    icons: {
                        activeHeader: "ui-icon-triangle-1-s",
                        header: "ui-icon-triangle-1-e"
                    },
                    activate: null,
                    beforeActivate: null
                },
                hideProps: {
                    borderTopWidth: "hide",
                    borderBottomWidth: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide",
                    height: "hide"
                },
                showProps: {
                    borderTopWidth: "show",
                    borderBottomWidth: "show",
                    paddingTop: "show",
                    paddingBottom: "show",
                    height: "show"
                },
                _create: function() {
                    var t = this.options;
                    this.prevShow = this.prevHide = $(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
                },
                _getCreateEventData: function() {
                    return {
                        header: this.active,
                        panel: this.active.length ? this.active.next() : $()
                    }
                },
                _createIcons: function() {
                    var t = this.options.icons;
                    t && ($("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() {
                    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                },
                _destroy: function() {
                    var t;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
                },
                _keydown: function(t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var e = $.ui.keyCode,
                            i = this.headers.length,
                            n = this.headers.index(t.target),
                            s = !1;
                        switch (t.keyCode) {
                            case e.RIGHT:
                            case e.DOWN:
                                s = this.headers[(n + 1) % i];
                                break;
                            case e.LEFT:
                            case e.UP:
                                s = this.headers[(n - 1 + i) % i];
                                break;
                            case e.SPACE:
                            case e.ENTER:
                                this._eventHandler(t);
                                break;
                            case e.HOME:
                                s = this.headers[0];
                                break;
                            case e.END:
                                s = this.headers[i - 1]
                        }
                        s && ($(t.target).attr("tabIndex", -1), $(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
                    }
                },
                _panelKeyDown: function(t) {
                    t.keyCode === $.ui.keyCode.UP && t.ctrlKey && $(t.currentTarget).prev().focus()
                },
                refresh: function() {
                    var t = this.options;
                    this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = $()) : t.active === !1 ? this._activate(0) : this.active.length && !$.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = $()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                },
                _processPanels: function() {
                    var t = this.headers,
                        e = this.panels;
                    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
                },
                _refresh: function() {
                    var t, e = this.options,
                        i = e.heightStyle,
                        n = this.element.parent();
                    this.active = this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                        var t = $(this),
                            e = t.uniqueId().attr("id"),
                            i = t.next(),
                            n = i.uniqueId().attr("id");
                        t.attr("aria-controls", n), i.attr("aria-labelledby", e)
                    }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }).next().attr({
                        "aria-hidden": "true"
                    }).hide(), this.active.length ? this.active.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }).next().attr({
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(e.event), "fill" === i ? (t = n.height(), this.element.siblings(":visible").each(function() {
                        var e = $(this),
                            i = e.css("position");
                        "absolute" !== i && "fixed" !== i && (t -= e.outerHeight(!0))
                    }), this.headers.each(function() {
                        t -= $(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        $(this).height(Math.max(0, t - $(this).innerHeight() + $(this).height()))
                    }).css("overflow", "auto")) : "auto" === i && (t = 0, this.headers.next().each(function() {
                        t = Math.max(t, $(this).css("height", "").height())
                    }).height(t))
                },
                _activate: function(t) {
                    var e = this._findActive(t)[0];
                    e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
                        target: e,
                        currentTarget: e,
                        preventDefault: $.noop
                    }))
                },
                _findActive: function(t) {
                    return "number" == typeof t ? this.headers.eq(t) : $()
                },
                _setupEvents: function(t) {
                    var e = {
                        keydown: "_keydown"
                    };
                    t && $.each(t.split(" "), function(t, i) {
                        e[i] = "_eventHandler"
                    }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, e), this._on(this.headers.next(), {
                        keydown: "_panelKeyDown"
                    }), this._hoverable(this.headers), this._focusable(this.headers)
                },
                _eventHandler: function(t) {
                    var e = this.options,
                        i = this.active,
                        n = $(t.currentTarget),
                        s = n[0] === i[0],
                        o = s && e.collapsible,
                        r = o ? $() : n.next(),
                        a = i.next(),
                        l = {
                            oldHeader: i,
                            oldPanel: a,
                            newHeader: o ? $() : n,
                            newPanel: r
                        };
                    t.preventDefault(), s && !e.collapsible || this._trigger("beforeActivate", t, l) === !1 || (e.active = o ? !1 : this.headers.index(n), this.active = s ? $() : n, this._toggle(l), i.removeClass("ui-accordion-header-active ui-state-active"), e.icons && i.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header), s || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), e.icons && n.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(t) {
                    var e = t.newPanel,
                        i = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({
                        "aria-hidden": "true"
                    }), i.prev().attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), e.length && i.length ? i.prev().attr({
                        tabIndex: -1,
                        "aria-expanded": "false"
                    }) : e.length && this.headers.filter(function() {
                        return 0 === parseInt($(this).attr("tabIndex"), 10)
                    }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _animate: function(t, e, i) {
                    var n, s, o, r = this,
                        a = 0,
                        l = t.css("box-sizing"),
                        u = t.length && (!e.length || t.index() < e.index()),
                        c = this.options.animate || {},
                        h = u && c.down || c,
                        d = function() {
                            r._toggleComplete(i)
                        };
                    return "number" == typeof h && (o = h), "string" == typeof h && (s = h), s = s || h.easing || c.easing, o = o || h.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                        duration: o,
                        easing: s,
                        step: function(t, e) {
                            e.now = Math.round(t)
                        }
                    }), void t.hide().animate(this.showProps, {
                        duration: o,
                        easing: s,
                        complete: d,
                        step: function(t, i) {
                            i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0)
                        }
                    })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
                },
                _toggleComplete: function(t) {
                    var e = t.oldPanel;
                    e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
                }
            }),
            g = $.widget("ui.menu", {
                version: "1.11.4",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left-1 top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                        "mousedown .ui-menu-item": function(t) {
                            t.preventDefault()
                        },
                        "click .ui-menu-item": function(t) {
                            var e = $(t.target);
                            !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && $(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(t) {
                            if (!this.previousFilter) {
                                var e = $(t.currentTarget);
                                e.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, e)
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var i = this.active || this.element.find(this.options.items).eq(0);
                            e || this.focus(t, i)
                        },
                        blur: function(t) {
                            this._delay(function() {
                                $.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                            })
                        },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, {
                        click: function(t) {
                            this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var t = $(this);
                        t.data("ui-menu-submenu-carat") && t.remove()
                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(t) {
                    var e, i, n, s, o = !0;
                    switch (t.keyCode) {
                        case $.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case $.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case $.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case $.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case $.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case $.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case $.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case $.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case $.ui.keyCode.ENTER:
                        case $.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case $.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            o = !1, i = this.previousFilter || "", n = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), n === i ? s = !0 : n = i + n, e = this._filterMenuItems(n), e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e, e.length || (n = String.fromCharCode(t.keyCode), e = this._filterMenuItems(n)), e.length ? (this.focus(t, e), this.previousFilter = n, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                    }
                    o && t.preventDefault()
                },
                _activate: function(t) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
                },
                refresh: function() {
                    var t, e, i = this,
                        n = this.options.icons.submenu,
                        s = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var t = $(this),
                            e = t.parent(),
                            i = $("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                        e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
                    }), t = s.add(this.element), e = t.find(this.options.items), e.not(".ui-menu-item").each(function() {
                        var t = $(this);
                        i._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                    }), e.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    }), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !$.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(t, e) {
                    "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
                },
                focus: function(t, e) {
                    var i, n;
                    this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                        item: e
                    })
                },
                _scrollIntoView: function(t) {
                    var e, i, n, s, o, r;
                    this._hasScroll() && (e = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - e - i, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(s + n) : n + r > o && this.activeMenu.scrollTop(s + n - o + r))
                },
                blur: function(t, e) {
                    e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                        item: this.active
                    }))
                },
                _startOpening: function(t) {
                    clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(), this._open(t)
                    }, this.delay))
                },
                _open: function(t) {
                    var e = $.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
                },
                collapseAll: function(t, e) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var i = e ? this.element : $(t && t.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element), this._close(i), this.blur(t), this.activeMenu = i
                    }, this.delay)
                },
                _close: function(t) {
                    t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                },
                _closeOnDocumentClick: function(t) {
                    return !$(t.target).closest(".ui-menu").length
                },
                _isDivider: function(t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text())
                },
                collapse: function(t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e))
                },
                expand: function(t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e && e.length && (this._open(e.parent()), this._delay(function() {
                        this.focus(t, e)
                    }))
                },
                next: function(t) {
                    this._move("next", "first", t)
                },
                previous: function(t) {
                    this._move("prev", "last", t)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(t, e, i) {
                    var n;
                    this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
                },
                nextPage: function(t) {
                    var e, i, n;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return e = $(this), e.offset().top - i - n < 0
                    }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
                },
                previousPage: function(t) {
                    var e, i, n;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return e = $(this), e.offset().top - i + n > 0
                    }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(t) {
                    this.active = this.active || $(t.target).closest(".ui-menu-item");
                    var e = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
                },
                _filterMenuItems: function(t) {
                    var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        i = new RegExp("^" + e, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return i.test($.trim($(this).text()))
                    })
                }
            });
        $.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, e, i, n = this.element[0].nodeName.toLowerCase(),
                    s = "textarea" === n,
                    o = "input" === n;
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return t = !0, i = !0, void(e = !0);
                        t = !1, i = !1, e = !1;
                        var s = $.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                t = !0, this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                t = !0, this._move("nextPage", n);
                                break;
                            case s.UP:
                                t = !0, this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                t = !0, this._keyEvent("next", n);
                                break;
                            case s.ENTER:
                                this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case s.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case s.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                e = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(i) {
                        if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
                        if (!e) {
                            var n = $.ui.keyCode;
                            switch (i.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", i);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", i)
                            }
                        }
                    },
                    input: function(t) {
                        return i ? (i = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = $("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var e = this.menu.element[0];
                        $(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(i) {
                                i.target === t.element[0] || i.target === e || $.contains(e, i.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, e) {
                        var i, n;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            $(t.target).trigger(t.originalEvent)
                        })) : (n = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: n
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), i = e.item.attr("aria-label") || n.value, void(i && $.trim(i).length && (this.liveRegion.children().hide(), $("<div>").text(i).appendTo(this.liveRegion))))
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = $("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? $(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, e, i = this;
                $.isArray(this.options.source) ? (t = this.options.source, this.source = function(e, i) {
                    i($.ui.autocomplete.filter(t, e.term))
                }) : "string" == typeof this.options.source ? (e = this.options.source, this.source = function(t, n) {
                    i.xhr && i.xhr.abort(), i.xhr = $.ajax({
                        url: e,
                        data: t,
                        dataType: "json",
                        success: function(t) {
                            n(t)
                        },
                        error: function() {
                            n([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return $.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : $.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : $.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var e = this.menu.element.empty();
                this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position($.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, e) {
                var i = this;
                $.each(e, function(e, n) {
                    i._renderItemData(t, n)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(t, e) {
                return $("<li>").text(e.label).appendTo(t)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), $.extend($.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, e) {
                var i = new RegExp($.ui.autocomplete.escapeRegex(e), "i");
                return $.grep(t, function(t) {
                    return i.test(t.label || t.value || t)
                })
            }
        }), $.widget("ui.autocomplete", $.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), $("<div>").text(e).appendTo(this.liveRegion))
            }
        });
        var m = $.ui.autocomplete,
            v, y = "ui-button ui-widget ui-state-default ui-corner-all",
            b = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            _ = function() {
                var t = $(this);
                setTimeout(function() {
                    t.find(":ui-button").button("refresh")
                }, 1)
            },
            w = function(t) {
                var e = t.name,
                    i = t.form,
                    n = $([]);
                return e && (e = e.replace(/'/g, "\\'"), n = i ? $(i).find("[name='" + e + "'][type=radio]") : $("[name='" + e + "'][type=radio]", t.ownerDocument).filter(function() {
                    return !this.form
                })), n
            };
        $.widget("ui.button", {
            version: "1.11.4",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, _), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var t = this,
                    e = this.options,
                    i = "checkbox" === this.type || "radio" === this.type,
                    n = i ? "" : "ui-state-active";
                null === e.label && (e.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(y).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    e.disabled || this === v && $(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    e.disabled || $(this).removeClass(n)
                }).bind("click" + this.eventNamespace, function(t) {
                    e.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                }), this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), i && this.element.bind("change" + this.eventNamespace, function() {
                    t.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return e.disabled ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (e.disabled) return !1;
                    $(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                    var i = t.element[0];
                    w(i).not(i).map(function() {
                        return $(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return e.disabled ? !1 : ($(this).addClass("ui-state-active"), v = this, void t.document.one("mouseup", function() {
                        v = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return e.disabled ? !1 : void $(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(t) {
                    return e.disabled ? !1 : void((t.keyCode === $.ui.keyCode.SPACE || t.keyCode === $.ui.keyCode.ENTER) && $(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    $(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === $.ui.keyCode.SPACE && $(this).click()
                })), this._setOption("disabled", e.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var t, e, i;
                this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(y + " ui-state-active " + b).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(t, e) {
                return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? w(this.element[0]).each(function() {
                    $(this).is(":checked") ? $(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : $(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var t = this.buttonElement.removeClass(b),
                    e = $("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    i = this.options.icons,
                    n = i.primary && i.secondary,
                    s = [];
                i.primary || i.secondary ? (this.options.text && s.push("ui-button-text-icon" + (n ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (s.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", $.trim(e)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
            }
        }), $.widget("ui.buttonset", {
            version: "1.11.4",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(t, e) {
                "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
            },
            refresh: function() {
                var t = "rtl" === this.element.css("direction"),
                    e = this.element.find(this.options.items),
                    i = e.filter(":ui-button");
                e.not(":ui-button").button(), i.button("refresh"), this.buttons = e.map(function() {
                    return $(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return $(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        });
        var x = $.ui.button;
        $.extend($.ui, {
            datepicker: {
                version: "1.11.4"
            }
        });
        var T;
        $.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return r(this._defaults, t || {}), this
            },
            _attachDatepicker: function(t, e) {
                var i, n, s;
                i = t.nodeName.toLowerCase(), n = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst($(t), n), s.settings = $.extend({}, e || {}), "input" === i ? this._connectDatepicker(t, s) : n && this._inlineDatepicker(t, s)
            },
            _newInst: function(t, e) {
                var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: i,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? s($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, e) {
                var i = $(t);
                e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(e), $.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, e) {
                var i, n, s, o = this._get(e, "appendText"),
                    r = this._get(e, "isRTL");
                e.append && e.append.remove(), o && (e.append = $("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove(), i = this._get(e, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (n = this._get(e, "buttonText"), s = this._get(e, "buttonImage"), e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: n,
                    title: n
                }) : $("<button type='button'></button>").addClass(this._triggerClass).html(s ? $("<img/>").attr({
                    src: s,
                    alt: n,
                    title: n
                }) : n)), t[r ? "before" : "after"](e.trigger), e.trigger.click(function() {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput === t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput !== t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function(t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), $.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, e, i, n, s) {
                var o, a, l, u, c, h = this._dialogInst;
                return h || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = $("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), h = this._dialogInst = this._newInst(this._dialogInput, !1), h.settings = {}, $.data(this._dialogInput[0], "datepicker", h)), r(h.settings, n || {}), e = e && e.constructor === Date ? this._formatDate(h, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (a = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + u, l / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], "datepicker", h), this
            },
            _destroyDatepicker: function(t) {
                var e, i = $(t),
                    n = $.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), $.removeData(t, "datepicker"), "input" === e ? (n.append.remove(), n.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === e || "span" === e) && i.removeClass(this.markerClassName).empty(), T === n && (T = null))
            },
            _enableDatepicker: function(t) {
                var e, i, n = $(t),
                    s = $.data(t, "datepicker");
                n.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), "input" === e ? (t.disabled = !1, s.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === e || "span" === e) && (i = n.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function(t) {
                var e, i, n = $(t),
                    s = $.data(t, "datepicker");
                n.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), "input" === e ? (t.disabled = !0, s.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === e || "span" === e) && (i = n.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return $.data(t, "datepicker")
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, e, i) {
                var n, s, o, a, l = this._getInst(t);
                return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? $.extend({}, $.datepicker._defaults) : l ? "all" === e ? $.extend({}, l.settings) : this._get(l, e) : null : (n = e || {}, "string" == typeof e && (n = {}, n[e] = i), void(l && (this._curInst === l && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), a = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== a && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, a)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments($(t), l), this._autoSize(l), this._setDate(l, s), this._updateAlternate(l), this._updateDatepicker(l))))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var e, i, n, s = $.datepicker._getInst(t.target),
                    o = !0,
                    r = s.dpDiv.is(".ui-datepicker-rtl");
                if (s._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", s.dpDiv), n[0] && $.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, n[0]), e = $.datepicker._get(s, "onSelect"), e ? (i = $.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [i, s])) : $.datepicker._hideDatepicker(), !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(s, "stepBigMonths") : -$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(s, "stepBigMonths") : +$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(s, "stepBigMonths") : -$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(s, "stepBigMonths") : +$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var e, i, n = $.datepicker._getInst(t.target);
                return $.datepicker._get(n, "constrainInput") ? (e = $.datepicker._possibleChars($.datepicker._get(n, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !e || e.indexOf(i) > -1) : void 0
            },
            _doKeyUp: function(t) {
                var e, i = $.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    e = $.datepicker.parseDate($.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, $.datepicker._getFormatConfig(i)), e && ($.datepicker._setDateFromField(i), $.datepicker._updateAlternate(i), $.datepicker._updateDatepicker(i))
                } catch (n) {}
                return !0
            },
            _showDatepicker: function(t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput !== t) {
                    var e, n, s, o, a, l, u;
                    e = $.datepicker._getInst(t), $.datepicker._curInst && $.datepicker._curInst !== e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])), n = $.datepicker._get(e, "beforeShow"), s = n ? n.apply(t, [t, e]) : {}, s !== !1 && (r(e.settings, s), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight), o = !1, $(t).parents().each(function() {
                        return o |= "fixed" === $(this).css("position"), !o
                    }), a = {
                        left: $.datepicker._pos[0],
                        top: $.datepicker._pos[1]
                    }, $.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), $.datepicker._updateDatepicker(e), a = $.datepicker._checkOffset(e, a, o), e.dpDiv.css({
                        position: $.datepicker._inDialog && $.blockUI ? "static" : o ? "fixed" : "absolute",
                        display: "none",
                        left: a.left + "px",
                        top: a.top + "px"
                    }), e.inline || (l = $.datepicker._get(e, "showAnim"), u = $.datepicker._get(e, "duration"), e.dpDiv.css("z-index", i($(t)) + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects.effect[l] ? e.dpDiv.show(l, $.datepicker._get(e, "showOptions"), u) : e.dpDiv[l || "show"](l ? u : null), $.datepicker._shouldFocusInput(e) && e.input.focus(), $.datepicker._curInst = e))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, T = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var e, i = this._getNumberOfMonths(t),
                    n = i[1],
                    s = 17,
                    r = t.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", s * n + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (e = t.yearshtml, setTimeout(function() {
                    e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(t, e, i) {
                var n = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    r = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? n - o : 0, e.left -= i && e.left === t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + r ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && a > n ? Math.abs(e.left + n - a) : 0), e.top -= Math.min(e.top, e.top + s > l && l > s ? Math.abs(s + r) : 0), e
            },
            _findPos: function(t) {
                for (var e, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || $.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
                return e = $(t).offset(), [e.left, e.top]
            },
            _hideDatepicker: function(t) {
                var e, i, n, s, o = this._curInst;
                !o || t && o !== $.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), n = function() {
                    $.datepicker._tidyDialog(o)
                }, $.effects && ($.effects.effect[e] || $.effects[e]) ? o.dpDiv.hide(e, $.datepicker._get(o, "showOptions"), i, n) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, n), e || n(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        i = $.datepicker._getInst(e[0]);
                    (e[0].id !== $.datepicker._mainDivId && 0 === e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
            },
            _gotoToday: function(t) {
                var e, i = $(t),
                    n = this._getInst(i[0]);
                this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (e = new Date, n.selectedDay = e.getDate(), n.drawMonth = n.selectedMonth = e.getMonth(), n.drawYear = n.selectedYear = e.getFullYear()), this._notifyChange(n), this._adjustDate(i)
            },
            _selectMonthYear: function(t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
            },
            _selectDay: function(t, e, i, n) {
                var s, o = $(t);
                $(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = $("a", n).html(), s.selectedMonth = s.currentMonth = e, s.selectedYear = s.currentYear = i, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
            },
            _clearDate: function(t) {
                var e = $(t);
                this._selectDate(e, "")
            },
            _selectDate: function(t, e) {
                var i, n = $(t),
                    s = this._getInst(n[0]);
                e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s), i = this._get(s, "onSelect"), i ? i.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var e, i, n, s = this._get(t, "altField");
                s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), n = this.formatDate(e, i, this._getFormatConfig(t)), $(s).each(function() {
                    $(this).val(n)
                }))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(t, e, i) {
                if (null == t || null == e) throw "Invalid arguments";
                if (e = "object" == typeof e ? e.toString() : e + "", "" === e) return null;
                var n, s, o, r = 0,
                    a = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    l = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                    u = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    h = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    d = (i ? i.monthNames : null) || this._defaults.monthNames,
                    p = -1,
                    f = -1,
                    g = -1,
                    m = -1,
                    v = !1,
                    y, b = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    _ = function(t) {
                        var i = b(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && i ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = e.substring(r).match(o);
                        if (!a) throw "Missing number at position " + r;
                        return r += a[0].length, parseInt(a[0], 10)
                    },
                    w = function(t, i, n) {
                        var s = -1,
                            o = $.map(b(t) ? n : i, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if ($.each(o, function(t, i) {
                                var n = i[1];
                                return e.substr(r, n.length).toLowerCase() === n.toLowerCase() ? (s = i[0], r += n.length, !1) : void 0
                            }), -1 !== s) return s + 1;
                        throw "Unknown name at position " + r
                    },
                    x = function() {
                        if (e.charAt(r) !== t.charAt(n)) throw "Unexpected literal at position " + r;
                        r++
                    };
                for (n = 0; n < t.length; n++)
                    if (v) "'" !== t.charAt(n) || b("'") ? x() : v = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            g = _("d");
                            break;
                        case "D":
                            w("D", u, c);
                            break;
                        case "o":
                            m = _("o");
                            break;
                        case "m":
                            f = _("m");
                            break;
                        case "M":
                            f = w("M", h, d);
                            break;
                        case "y":
                            p = _("y");
                            break;
                        case "@":
                            y = new Date(_("@")), p = y.getFullYear(), f = y.getMonth() + 1, g = y.getDate();
                            break;
                        case "!":
                            y = new Date((_("!") - this._ticksTo1970) / 1e4), p = y.getFullYear(), f = y.getMonth() + 1, g = y.getDate();
                            break;
                        case "'":
                            b("'") ? x() : v = !0;
                            break;
                        default:
                            x()
                    }
                    if (r < e.length && (o = e.substr(r), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= p ? 0 : -100)), m > -1)
                    for (f = 1, g = m;;) {
                        if (s = this._getDaysInMonth(p, f - 1), s >= g) break;
                        f++, g -= s
                    }
                if (y = this._daylightSavingAdjust(new Date(p, f - 1, g)), y.getFullYear() !== p || y.getMonth() + 1 !== f || y.getDate() !== g) throw "Invalid date";
                return y
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    u = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    c = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    h = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? h += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                h += u("d", e.getDate(), 2);
                                break;
                            case "D":
                                h += c("D", e.getDay(), s, o);
                                break;
                            case "o":
                                h += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                h += u("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                h += c("M", e.getMonth(), r, a);
                                break;
                            case "y":
                                h += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                h += e.getTime();
                                break;
                            case "!":
                                h += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? h += "'" : d = !0;
                                break;
                            default:
                                h += t.charAt(n)
                        }
                        return h
            },
            _possibleChars: function(t) {
                var e, i = "",
                    n = !1,
                    s = function(i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                    return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        r = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, r) || s
                    } catch (a) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(t, e, i) {
                var n = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    s = function(e) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                        } catch (i) {}
                        for (var n = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(e); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, o));
                                    break;
                                case "y":
                                case "Y":
                                    s += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, o))
                            }
                            l = a.exec(e)
                        }
                        return new Date(s, o, r)
                    },
                    o = null == e || "" === e ? i : "string" == typeof e ? s(e) : "number" == typeof e ? isNaN(e) ? i : n(e) : new Date(e.getTime());
                return o = o && "Invalid Date" === o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            $.datepicker._adjustDate(i, -e, "M")
                        },
                        next: function() {
                            $.datepicker._adjustDate(i, +e, "M")
                        },
                        hide: function() {
                            $.datepicker._hideDatepicker()
                        },
                        today: function() {
                            $.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return $.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return $.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return $.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, r, a, l, u, c, h, d, p, f, g, m, v, y, b, _, w, x, T, k, C, j, E, S, O, P, D, M, I, A, N, H, F, R, z, L = new Date,
                    W = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                    B = this._get(t, "isRTL"),
                    V = this._get(t, "showButtonPanel"),
                    Y = this._get(t, "hideIfNoPrevNext"),
                    q = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    K = this._get(t, "showCurrentAtPos"),
                    X = this._get(t, "stepMonths"),
                    G = 1 !== U[0] || 1 !== U[1],
                    J = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Z = this._getMinMaxDate(t, "min"),
                    Q = this._getMinMaxDate(t, "max"),
                    tt = t.drawMonth - K,
                    et = t.drawYear;
                if (0 > tt && (tt += 12, et--), Q)
                    for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = Z && Z > e ? Z : e; this._daylightSavingAdjust(new Date(et, tt, 1)) > e;) tt--, 0 > tt && (tt = 11, et--);
                for (t.drawMonth = tt, t.drawYear = et, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, tt - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, et, tt) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = q ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, tt + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, et, tt) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? J : W, r = q ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", u = V ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, h = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", x = 0; x < U[0]; x++) {
                    for (T = "", this.maxRows = 4, k = 0; k < U[1]; k++) {
                        if (C = this._daylightSavingAdjust(new Date(et, tt, t.selectedDay)), j = " ui-corner-all", E = "", G) {
                            if (E += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
                                case 0:
                                    E += " ui-datepicker-group-first", j = " ui-corner-" + (B ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    E += " ui-datepicker-group-last", j = " ui-corner-" + (B ? "left" : "right");
                                    break;
                                default:
                                    E += " ui-datepicker-group-middle", j = ""
                            }
                            E += "'>"
                        }
                        for (E += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + j + "'>" + (/all|left/.test(j) && 0 === x ? B ? o : n : "") + (/all|right/.test(j) && 0 === x ? B ? n : o : "") + this._generateMonthYearHeader(t, tt, et, Z, Q, x > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) O = (w + c) % 7, S += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[O] + "'>" + p[O] + "</span></th>";
                        for (E += S + "</tr></thead><tbody>", P = this._getDaysInMonth(et, tt), et === t.selectedYear && tt === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), D = (this._getFirstDayOfMonth(et, tt) - c + 7) % 7, M = Math.ceil((D + P) / 7), I = G && this.maxRows > M ? this.maxRows : M, this.maxRows = I, A = this._daylightSavingAdjust(new Date(et, tt, 1 - D)), N = 0; I > N; N++) {
                            for (E += "<tr>", H = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) F = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], R = A.getMonth() !== tt, z = R && !y || !F[0] || Z && Z > A || Q && A > Q, H += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (R ? " ui-datepicker-other-month" : "") + (A.getTime() === C.getTime() && tt === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (R && !v ? "" : " " + F[1] + (A.getTime() === J.getTime() ? " " + this._currentClass : "") + (A.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (R && !v || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (R && !v ? "&#xa0;" : z ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === W.getTime() ? " ui-state-highlight" : "") + (A.getTime() === J.getTime() ? " ui-state-active" : "") + (R ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                            E += H + "</tr>"
                        }
                        tt++, tt > 11 && (tt = 0, et++), E += "</tbody></table>" + (G ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), T += E
                    }
                    _ += T
                }
                return _ += u, t._keyEvent = !1, _
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
                var l, u, c, h, d, p, f, g, m = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    y = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (o || !m) _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, u = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!u || c <= s.getMonth()) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                    _ += "</select>"
                }
                if (y || (b += _ + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (h = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? d : e
                            }, f = p(h[0]), g = Math.max(f, p(h[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"), y && (b += (!o && m && v ? "" : "&#xa0;") + _), b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.drawYear + ("Y" === i ? e : 0),
                    s = t.drawMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    r = null,
                    a = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), $.fn.datepicker = function(t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick), $.datepicker.initialized = !0), 0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
                "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
            }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
        }, $.datepicker = new n, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.11.4";
        var k = $.datepicker;
        $.widget("ui.draggable", $.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(t) {
                var e = this.options;
                return this._blurActiveElement(t), this.helper || e.disabled || $(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(e.iframeFix === !0 ? "iframe" : e.iframeFix), !0) : !1)
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = $(this);
                    return $("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var e = this.document[0];
                if (this.handleElement.is(t.target)) try {
                    e.activeElement && "body" !== e.activeElement.nodeName.toLowerCase() && $(e.activeElement).blur()
                } catch (i) {}
            },
            _mouseStart: function(t) {
                var e = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === $(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), $.ui.ddmanager && !e.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, e) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                    var i = this._uiHash();
                    if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                    this.position = i.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", $.ui.ddmanager && $.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var e = this,
                    i = !1;
                return $.ui.ddmanager && !this.options.dropBehaviour && (i = $.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || $.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    e._trigger("stop", t) !== !1 && e._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), $.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!$(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(t) {
                var e = this.options,
                    i = $.isFunction(e.helper),
                    n = i ? $(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), $.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    e = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== e && $.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, e, i, n = this.options,
                    s = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, $(s).width() - this.helperProportions.width - this.margins.left, ($(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), e = $(n.containment), i = e[0], void(i && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, r = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    u = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, u = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (u = this.originalPageY)), {
                    top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(t, e, i) {
                return i = i || this._uiHash(), $.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), $.Widget.prototype._trigger.call(this, t, e, i)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), $.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, e, i) {
                var n = $.extend({}, e, {
                    item: i.element
                });
                i.sortables = [], $(i.options.connectToSortable).each(function() {
                    var e = $(this).sortable("instance");
                    e && !e.options.disabled && (i.sortables.push(e), e.refreshPositions(), e._trigger("activate", t, n))
                })
            },
            stop: function(t, e, i) {
                var n = $.extend({}, e, {
                    item: i.element
                });
                i.cancelHelperRemoval = !1, $.each(i.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, i.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                        position: e.placeholder.css("position"),
                        top: e.placeholder.css("top"),
                        left: e.placeholder.css("left")
                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
                })
            },
            drag: function(t, e, i) {
                $.each(i.sortables, function() {
                    var n = !1,
                        s = this;
                    s.positionAbs = i.positionAbs, s.helperProportions = i.helperProportions, s.offset.click = i.offset.click, s._intersectsWith(s.containerCache) && (n = !0, $.each(i.sortables, function() {
                        return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== s && this._intersectsWith(this.containerCache) && $.contains(s.element[0], this.element[0]) && (n = !1), n
                    })), n ? (s.isOver || (s.isOver = 1, i._parent = e.helper.parent(), s.currentItem = e.helper.appendTo(s.element).data("ui-sortable-item", !0), s.options._helper = s.options.helper, s.options.helper = function() {
                        return e.helper[0]
                    }, t.target = s.currentItem[0], s._mouseCapture(t, !0), s._mouseStart(t, !0, !0), s.offset.click.top = i.offset.click.top, s.offset.click.left = i.offset.click.left, s.offset.parent.left -= i.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= i.offset.parent.top - s.offset.parent.top, i._trigger("toSortable", t), i.dropped = s.element, $.each(i.sortables, function() {
                        this.refreshPositions()
                    }), i.currentItem = i.element, s.fromOutside = i), s.currentItem && (s._mouseDrag(t), e.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger("out", t, s._uiHash(s)), s._mouseStop(t, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), e.helper.appendTo(i._parent), i._refreshOffsets(t), e.position = i._generatePosition(t, !0), i._trigger("fromSortable", t), i.dropped = !1, $.each(i.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), $.ui.plugin.add("draggable", "cursor", {
            start: function(t, e, i) {
                var n = $("body"),
                    s = i.options;
                n.css("cursor") && (s._cursor = n.css("cursor")), n.css("cursor", s.cursor)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._cursor && $("body").css("cursor", n._cursor)
            }
        }), $.ui.plugin.add("draggable", "opacity", {
            start: function(t, e, i) {
                var n = $(e.helper),
                    s = i.options;
                n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._opacity && $(e.helper).css("opacity", n._opacity)
            }
        }), $.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(t, e, i) {
                var n = i.options,
                    s = !1,
                    o = i.scrollParentNotHidden[0],
                    r = i.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = s = o.scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = s = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - $(r).scrollTop() < n.scrollSensitivity ? s = $(r).scrollTop($(r).scrollTop() - n.scrollSpeed) : $(window).height() - (t.pageY - $(r).scrollTop()) < n.scrollSensitivity && (s = $(r).scrollTop($(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - $(r).scrollLeft() < n.scrollSensitivity ? s = $(r).scrollLeft($(r).scrollLeft() - n.scrollSpeed) : $(window).width() - (t.pageX - $(r).scrollLeft()) < n.scrollSensitivity && (s = $(r).scrollLeft($(r).scrollLeft() + n.scrollSpeed)))), s !== !1 && $.ui.ddmanager && !n.dropBehaviour && $.ui.ddmanager.prepareOffsets(i, t)
            }
        }), $.ui.plugin.add("draggable", "snap", {
            start: function(t, e, i) {
                var n = i.options;
                i.snapElements = [], $(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = $(this),
                        e = t.offset();
                    this !== i.element[0] && i.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: e.top,
                        left: e.left
                    })
                })
            },
            drag: function(t, e, i) {
                var n, s, o, r, a, l, u, c, h, d, p = i.options,
                    f = p.snapTolerance,
                    g = e.offset.left,
                    m = g + i.helperProportions.width,
                    v = e.offset.top,
                    y = v + i.helperProportions.height;
                for (h = i.snapElements.length - 1; h >= 0; h--) a = i.snapElements[h].left - i.margins.left, l = a + i.snapElements[h].width, u = i.snapElements[h].top - i.margins.top, c = u + i.snapElements[h].height, a - f > m || g > l + f || u - f > y || v > c + f || !$.contains(i.snapElements[h].item.ownerDocument, i.snapElements[h].item) ? (i.snapElements[h].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, $.extend(i._uiHash(), {
                    snapItem: i.snapElements[h].item
                })), i.snapElements[h].snapping = !1) : ("inner" !== p.snapMode && (n = Math.abs(u - y) <= f, s = Math.abs(c - v) <= f, o = Math.abs(a - m) <= f, r = Math.abs(l - g) <= f, n && (e.position.top = i._convertPositionTo("relative", {
                    top: u - i.helperProportions.height,
                    left: 0
                }).top), s && (e.position.top = i._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: a - i.helperProportions.width
                }).left), r && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)), d = n || s || o || r, "outer" !== p.snapMode && (n = Math.abs(u - v) <= f, s = Math.abs(c - y) <= f, o = Math.abs(a - g) <= f, r = Math.abs(l - m) <= f, n && (e.position.top = i._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), s && (e.position.top = i._convertPositionTo("relative", {
                    top: c - i.helperProportions.height,
                    left: 0
                }).top), o && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left), r && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left)), !i.snapElements[h].snapping && (n || s || o || r || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, $.extend(i._uiHash(), {
                    snapItem: i.snapElements[h].item
                })), i.snapElements[h].snapping = n || s || o || r || d)
            }
        }), $.ui.plugin.add("draggable", "stack", {
            start: function(t, e, i) {
                var n, s = i.options,
                    o = $.makeArray($(s.stack)).sort(function(t, e) {
                        return (parseInt($(t).css("zIndex"), 10) || 0) - (parseInt($(e).css("zIndex"), 10) || 0)
                    });
                o.length && (n = parseInt($(o[0]).css("zIndex"), 10) || 0, $(o).each(function(t) {
                    $(this).css("zIndex", n + t)
                }), this.css("zIndex", n + o.length))
            }
        }), $.ui.plugin.add("draggable", "zIndex", {
            start: function(t, e, i) {
                var n = $(e.helper),
                    s = i.options;
                n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._zIndex && $(e.helper).css("zIndex", n._zIndex)
            }
        });
        var C = $.ui.draggable;
        $.widget("ui.resizable", $.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseInt(t, 10) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseInt(t, 10))
            },
            _hasScroll: function(t, e) {
                if ("hidden" === $(t).css("overflow")) return !1;
                var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                    n = !1;
                return t[i] > 0 ? !0 : (t[i] = 1, n = t[i] > 0, t[i] = 0, n)
            },
            _create: function() {
                var t, e, i, n, s, o = this,
                    r = this.options;
                if (this.element.addClass("ui-resizable"), $.extend(this, {
                        _aspectRatio: !!r.aspectRatio,
                        aspectRatio: r.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = r.handles || ($(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = $(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, e = 0; e < t.length; e++) i = $.trim(t[e]), s = "ui-resizable-" + i, n = $("<div class='ui-resizable-handle " + s + "'></div>"), n.css({
                        zIndex: r.zIndex
                    }), "se" === i && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(n);
                this._renderAxis = function(t) {
                    var e, i, n, s;
                    t = t || this.element;
                    for (e in this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = $(this.handles[e]), this._on(this.handles[e], {
                        mousedown: o._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = $(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), n = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(n, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                    o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
                }), r.autoHide && (this._handles.hide(), $(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    r.disabled || ($(this).removeClass("ui-resizable-autohide"), o._handles.show())
                }).mouseleave(function() {
                    r.disabled || o.resizing || ($(this).addClass("ui-resizable-autohide"), o._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, e = function(t) {
                    $(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var e, i, n = !1;
                for (e in this.handles) i = $(this.handles[e])[0], (i === t.target || $.contains(i, t.target)) && (n = !0);
                return !this.options.disabled && n
            },
            _mouseStart: function(t) {
                var e, i, n, s = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += $(s.containment).scrollLeft() || 0, i += $(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: e,
                    top: i
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.originalSize = this._helper ? {
                    width: o.outerWidth(),
                    height: o.outerHeight()
                } : {
                    width: o.width(),
                    height: o.height()
                }, this.sizeDiff = {
                    width: o.outerWidth() - o.width(),
                    height: o.outerHeight() - o.height()
                }, this.originalPosition = {
                    left: e,
                    top: i
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = $(".ui-resizable-" + this.axis).css("cursor"), $("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var e, i, n = this.originalMousePosition,
                    s = this.axis,
                    o = t.pageX - n.left || 0,
                    r = t.pageY - n.top || 0,
                    a = this._change[s];
                return this._updatePrevProperties(), a ? (e = a.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), $.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var e, i, n, s, o, r, a, l = this.options,
                    u = this;
                return this._helper && (e = this._proportionallyResizeElements, i = e.length && /textarea/i.test(e[0].nodeName), n = i && this._hasScroll(e[0], "left") ? 0 : u.sizeDiff.height, s = i ? 0 : u.sizeDiff.width, o = {
                    width: u.helper.width() - s,
                    height: u.helper.height() - n
                }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, a = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css($.extend(o, {
                    top: a,
                    left: r
                })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), $("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, n, s, o, r = this.options;
                o = {
                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.position.top + this.size.height,
                    u = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && u && (t.left = a - e.minWidth), n && u && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(s[e], 10) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    e = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || $("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++e.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, e, i) {
                    return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                },
                sw: function(t, e, i) {
                    return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                },
                ne: function(t, e, i) {
                    return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                },
                nw: function(t, e, i) {
                    return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                }
            },
            _propagate: function(t, e) {
                $.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), $.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var e = $(this).resizable("instance"),
                    i = e.options,
                    n = e._proportionallyResizeElements,
                    s = n.length && /textarea/i.test(n[0].nodeName),
                    o = s && e._hasScroll(n[0], "left") ? 0 : e.sizeDiff.height,
                    r = s ? 0 : e.sizeDiff.width,
                    a = {
                        width: e.size.width - r,
                        height: e.size.height - o
                    },
                    l = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
                    u = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
                e.element.animate($.extend(a, u && l ? {
                    top: u,
                    left: l
                } : {}), {
                    duration: i.animateDuration,
                    easing: i.animateEasing,
                    step: function() {
                        var i = {
                            width: parseInt(e.element.css("width"), 10),
                            height: parseInt(e.element.css("height"), 10),
                            top: parseInt(e.element.css("top"), 10),
                            left: parseInt(e.element.css("left"), 10)
                        };
                        n && n.length && $(n[0]).css({
                            width: i.width,
                            height: i.height
                        }), e._updateCache(i), e._propagate("resize", t)
                    }
                })
            }
        }), $.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, e, i, n, s, o, r, a = $(this).resizable("instance"),
                    l = a.options,
                    u = a.element,
                    c = l.containment,
                    h = c instanceof $ ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
                h && (a.containerElement = $(h), /document/.test(c) || c === document ? (a.containerOffset = {
                    left: 0,
                    top: 0
                }, a.containerPosition = {
                    left: 0,
                    top: 0
                }, a.parentData = {
                    element: $(document),
                    left: 0,
                    top: 0,
                    width: $(document).width(),
                    height: $(document).height() || document.body.parentNode.scrollHeight
                }) : (t = $(h), e = [], $(["Top", "Right", "Left", "Bottom"]).each(function(i, n) {
                    e[i] = a._num(t.css("padding" + n))
                }), a.containerOffset = t.offset(), a.containerPosition = t.position(), a.containerSize = {
                    height: t.innerHeight() - e[3],
                    width: t.innerWidth() - e[1]
                }, i = a.containerOffset, n = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(h, "left") ? h.scrollWidth : s, r = a._hasScroll(h) ? h.scrollHeight : n, a.parentData = {
                    element: h,
                    left: i.left,
                    top: i.top,
                    width: o,
                    height: r
                }))
            },
            resize: function(t) {
                var e, i, n, s, o = $(this).resizable("instance"),
                    r = o.options,
                    a = o.containerOffset,
                    l = o.position,
                    u = o._aspectRatio || t.shiftKey,
                    c = {
                        top: 0,
                        left: 0
                    },
                    h = o.containerElement,
                    d = !0;
                h[0] !== document && /static/.test(h.css("position")) && (c = a), l.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = r.helper ? a.left : 0), l.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? a.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), n && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, u && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, u && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = $(this).resizable("instance"),
                    e = t.options,
                    i = t.containerOffset,
                    n = t.containerPosition,
                    s = t.containerElement,
                    o = $(t.helper),
                    r = o.offset(),
                    a = o.outerWidth() - t.sizeDiff.width,
                    l = o.outerHeight() - t.sizeDiff.height;
                t._helper && !e.animate && /relative/.test(s.css("position")) && $(this).css({
                    left: r.left - n.left - i.left,
                    width: a,
                    height: l
                }), t._helper && !e.animate && /static/.test(s.css("position")) && $(this).css({
                    left: r.left - n.left - i.left,
                    width: a,
                    height: l
                })
            }
        }), $.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = $(this).resizable("instance"),
                    e = t.options;
                $(e.alsoResize).each(function() {
                    var t = $(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            },
            resize: function(t, e) {
                var i = $(this).resizable("instance"),
                    n = i.options,
                    s = i.originalSize,
                    o = i.originalPosition,
                    r = {
                        height: i.size.height - s.height || 0,
                        width: i.size.width - s.width || 0,
                        top: i.position.top - o.top || 0,
                        left: i.position.left - o.left || 0
                    };
                $(n.alsoResize).each(function() {
                    var t = $(this),
                        i = $(this).data("ui-resizable-alsoresize"),
                        n = {},
                        s = t.parents(e.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    $.each(s, function(t, e) {
                        var s = (i[e] || 0) + (r[e] || 0);
                        s && s >= 0 && (n[e] = s || null)
                    }), t.css(n)
                })
            },
            stop: function() {
                $(this).removeData("resizable-alsoresize")
            }
        }), $.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = $(this).resizable("instance"),
                    e = t.options,
                    i = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = $(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = $(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), $.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, e = $(this).resizable("instance"),
                    i = e.options,
                    n = e.size,
                    s = e.originalSize,
                    o = e.originalPosition,
                    r = e.axis,
                    a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    l = a[0] || 1,
                    u = a[1] || 1,
                    c = Math.round((n.width - s.width) / l) * l,
                    h = Math.round((n.height - s.height) / u) * u,
                    d = s.width + c,
                    p = s.height + h,
                    f = i.maxWidth && i.maxWidth < d,
                    g = i.maxHeight && i.maxHeight < p,
                    m = i.minWidth && i.minWidth > d,
                    v = i.minHeight && i.minHeight > p;
                i.grid = a, m && (d += l), v && (p += u), f && (d -= l), g && (p -= u), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - h) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((0 >= p - u || 0 >= d - l) && (t = e._getPaddingPlusBorderDimensions(this)), p - u > 0 ? (e.size.height = p, e.position.top = o.top - h) : (p = u - t.height, e.size.height = p, e.position.top = o.top + s.height - p), d - l > 0 ? (e.size.width = d, e.position.left = o.left - c) : (d = l - t.width, e.size.width = d, e.position.left = o.left + s.width - d))
            }
        });
        var j = $.ui.resizable,
            E = $.widget("ui.dialog", {
                version: "1.11.4",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    closeOnEscape: !0,
                    closeText: "Close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(t) {
                            var e = $(this).css(t).offset().top;
                            0 > e && $(this).css("top", t.top - e)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                sizeRelatedOptions: {
                    buttons: !0,
                    height: !0,
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0,
                    width: !0
                },
                resizableRelatedOptions: {
                    maxHeight: !0,
                    maxWidth: !0,
                    minHeight: !0,
                    minWidth: !0
                },
                _create: function() {
                    this.originalCss = {
                        display: this.element[0].style.display,
                        width: this.element[0].style.width,
                        minHeight: this.element[0].style.minHeight,
                        maxHeight: this.element[0].style.maxHeight,
                        height: this.element[0].style.height
                    }, this.originalPosition = {
                        parent: this.element.parent(),
                        index: this.element.parent().children().index(this.element)
                    }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && $.fn.draggable && this._makeDraggable(), this.options.resizable && $.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                },
                _init: function() {
                    this.options.autoOpen && this.open()
                },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t.jquery || t.nodeType) ? $(t) : this.document.find(t || "body").eq(0)
                },
                _destroy: function() {
                    var t, e = this.originalPosition;
                    this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                disable: $.noop,
                enable: $.noop,
                close: function(t) {
                    var e, i = this;
                    if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                            e = this.document[0].activeElement, e && "body" !== e.nodeName.toLowerCase() && $(e).blur()
                        } catch (n) {}
                        this._hide(this.uiDialog, this.options.hide, function() {
                            i._trigger("close", t)
                        })
                    }
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function() {
                    this._moveToTop()
                },
                _moveToTop: function(t, e) {
                    var i = !1,
                        n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                            return +$(this).css("z-index")
                        }).get(),
                        s = Math.max.apply(null, n);
                    return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), i = !0), i && !e && this._trigger("focus", t), i
                },
                open: function() {
                    var t = this;
                    return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = $(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                        t._focusTabbable(), t._trigger("focus")
                    }), this._makeFocusTarget(), void this._trigger("open"))
                },
                _focusTabbable: function() {
                    var t = this._focusedElement;
                    t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
                },
                _keepFocus: function(t) {
                    function e() {
                        var t = this.document[0].activeElement,
                            e = this.uiDialog[0] === t || $.contains(this.uiDialog[0], t);
                        e || this._focusTabbable()
                    }
                    t.preventDefault(), e.call(this), this._delay(e)
                },
                _createWrapper: function() {
                    this.uiDialog = $("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                        tabIndex: -1,
                        role: "dialog"
                    }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                        keydown: function(t) {
                            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === $.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                            if (t.keyCode === $.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                                var e = this.uiDialog.find(":tabbable"),
                                    i = e.filter(":first"),
                                    n = e.filter(":last");
                                t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                                    n.focus()
                                }), t.preventDefault()) : (this._delay(function() {
                                    i.focus()
                                }), t.preventDefault())
                            }
                        },
                        mousedown: function(t) {
                            this._moveToTop(t) && this._focusTabbable()
                        }
                    }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                        "aria-describedby": this.element.uniqueId().attr("id")
                    })
                },
                _createTitlebar: function() {
                    var t;
                    this.uiDialogTitlebar = $("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                        mousedown: function(t) {
                            $(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                        }
                    }), this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
                        label: this.options.closeText,
                        icons: {
                            primary: "ui-icon-closethick"
                        },
                        text: !1
                    }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                        click: function(t) {
                            t.preventDefault(), this.close(t)
                        }
                    }), t = $("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                        "aria-labelledby": t.attr("id")
                    })
                },
                _title: function(t) {
                    this.options.title || t.html("&#160;"), t.text(this.options.title)
                },
                _createButtonPane: function() {
                    this.uiDialogButtonPane = $("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = $("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
                },
                _createButtons: function() {
                    var t = this,
                        e = this.options.buttons;
                    return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), $.isEmptyObject(e) || $.isArray(e) && !e.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : ($.each(e, function(e, i) {
                        var n, s;
                        i = $.isFunction(i) ? {
                            click: i,
                            text: e
                        } : i, i = $.extend({
                            type: "button"
                        }, i), n = i.click, i.click = function() {
                            n.apply(t.element[0], arguments)
                        }, s = {
                            icons: i.icons,
                            text: i.showText
                        }, delete i.icons, delete i.showText, $("<button></button>", i).button(s).appendTo(t.uiButtonSet)
                    }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
                },
                _makeDraggable: function() {
                    function t(t) {
                        return {
                            position: t.position,
                            offset: t.offset
                        }
                    }
                    var e = this,
                        i = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(i, n) {
                            $(this).addClass("ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, t(n))
                        },
                        drag: function(i, n) {
                            e._trigger("drag", i, t(n))
                        },
                        stop: function(n, s) {
                            var o = s.offset.left - e.document.scrollLeft(),
                                r = s.offset.top - e.document.scrollTop();
                            i.position = {
                                my: "left top",
                                at: "left" + (o >= 0 ? "+" : "") + o + " top" + (r >= 0 ? "+" : "") + r,
                                of: e.window
                            }, $(this).removeClass("ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", n, t(s))
                        }
                    })
                },
                _makeResizable: function() {
                    function t(t) {
                        return {
                            originalPosition: t.originalPosition,
                            originalSize: t.originalSize,
                            position: t.position,
                            size: t.size
                        }
                    }
                    var e = this,
                        i = this.options,
                        n = i.resizable,
                        s = this.uiDialog.css("position"),
                        o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: i.maxWidth,
                        maxHeight: i.maxHeight,
                        minWidth: i.minWidth,
                        minHeight: this._minHeight(),
                        handles: o,
                        start: function(i, n) {
                            $(this).addClass("ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, t(n))
                        },
                        resize: function(i, n) {
                            e._trigger("resize", i, t(n))
                        },
                        stop: function(n, s) {
                            var o = e.uiDialog.offset(),
                                r = o.left - e.document.scrollLeft(),
                                a = o.top - e.document.scrollTop();
                            i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = {
                                my: "left top",
                                at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a,
                                of: e.window
                            }, $(this).removeClass("ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", n, t(s))
                        }
                    }).css("position", s)
                },
                _trackFocus: function() {
                    this._on(this.widget(), {
                        focusin: function(t) {
                            this._makeFocusTarget(), this._focusedElement = $(t.target)
                        }
                    })
                },
                _makeFocusTarget: function() {
                    this._untrackInstance(), this._trackingInstances().unshift(this)
                },
                _untrackInstance: function() {
                    var t = this._trackingInstances(),
                        e = $.inArray(this, t); - 1 !== e && t.splice(e, 1)
                },
                _trackingInstances: function() {
                    var t = this.document.data("ui-dialog-instances");
                    return t || (t = [], this.document.data("ui-dialog-instances", t)), t
                },
                _minHeight: function() {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function() {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
                },
                _setOptions: function(t) {
                    var e = this,
                        i = !1,
                        n = {};
                    $.each(t, function(t, s) {
                        e._setOption(t, s), t in e.sizeRelatedOptions && (i = !0), t in e.resizableRelatedOptions && (n[t] = s)
                    }), i && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
                },
                _setOption: function(t, e) {
                    var i, n, s = this.uiDialog;
                    "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                            label: "" + e
                        }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(),
                        "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function() {
                    var t, e, i, n = this.options;
                    this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        maxHeight: "none",
                        height: 0
                    }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                        height: "auto",
                        width: n.width
                    }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                        minHeight: e,
                        maxHeight: i,
                        height: "auto"
                    }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function() {
                    this.iframeBlocks = this.document.find("iframe").map(function() {
                        var t = $(this);
                        return $("<div>").css({
                            position: "absolute",
                            width: t.outerWidth(),
                            height: t.outerHeight()
                        }).appendTo(t.parent()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function() {
                    this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                },
                _allowInteraction: function(t) {
                    return $(t.target).closest(".ui-dialog").length ? !0 : !!$(t.target).closest(".ui-datepicker").length
                },
                _createOverlay: function() {
                    if (this.options.modal) {
                        var t = !0;
                        this._delay(function() {
                            t = !1
                        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                            focusin: function(e) {
                                t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                            }
                        }), this.overlay = $("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                            mousedown: "_keepFocus"
                        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                },
                _destroyOverlay: function() {
                    if (this.options.modal && this.overlay) {
                        var t = this.document.data("ui-dialog-overlays") - 1;
                        t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                    }
                }
            });
        $.widget("ui.droppable", {
            version: "1.11.4",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, e = this.options,
                    i = e.accept;
                this.isover = !1, this.isout = !0, this.accept = $.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }, this.proportions = function() {
                    return arguments.length ? void(t = arguments[0]) : t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(e.scope), e.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(t) {
                $.ui.ddmanager.droppables[t] = $.ui.ddmanager.droppables[t] || [], $.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function(t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var t = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, e) {
                if ("accept" === t) this.accept = $.isFunction(e) ? e : function(t) {
                    return t.is(e)
                };
                else if ("scope" === t) {
                    var i = $.ui.ddmanager.droppables[this.options.scope];
                    this._splice(i), this._addToManager(e)
                }
                this._super(t, e)
            },
            _activate: function(t) {
                var e = $.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), e && this._trigger("activate", t, this.ui(e))
            },
            _deactivate: function(t) {
                var e = $.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), e && this._trigger("deactivate", t, this.ui(e))
            },
            _over: function(t) {
                var e = $.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(e)))
            },
            _out: function(t) {
                var e = $.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(e)))
            },
            _drop: function(t, e) {
                var i = e || $.ui.ddmanager.current,
                    n = !1;
                return i && (i.currentItem || i.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var e = $(this).droppable("instance");
                    return e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && $.ui.intersect(i, $.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance, t) ? (n = !0, !1) : void 0
                }), n ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element) : !1) : !1
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            }
        }), $.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function(e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    a = o + e.helperProportions.width,
                    l = r + e.helperProportions.height,
                    u = i.offset.left,
                    c = i.offset.top,
                    h = u + i.proportions().width,
                    d = c + i.proportions().height;
                switch (n) {
                    case "fit":
                        return o >= u && h >= a && r >= c && d >= l;
                    case "intersect":
                        return u < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < h && c < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case "pointer":
                        return t(s.pageY, c, i.proportions().height) && t(s.pageX, u, i.proportions().width);
                    case "touch":
                        return (r >= c && d >= r || l >= c && d >= l || c > r && l > d) && (o >= u && h >= o || a >= u && h >= a || u > o && a > h);
                    default:
                        return !1
                }
            }
        }(), $.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, e) {
                var i, n, s = $.ui.ddmanager.droppables[t.options.scope] || [],
                    o = e ? e.type : null,
                    r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                t: for (i = 0; i < s.length; i++)
                    if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                        for (n = 0; n < r.length; n++)
                            if (r[n] === s[i].element[0]) {
                                s[i].proportions().height = 0;
                                continue t
                            }
                        s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === o && s[i]._activate.call(s[i], e), s[i].offset = s[i].element.offset(), s[i].proportions({
                            width: s[i].element[0].offsetWidth,
                            height: s[i].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(t, e) {
                var i = !1;
                return $.each(($.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && $.ui.intersect(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
                }), i
            },
            dragStart: function(t, e) {
                t.element.parentsUntil("body").bind("scroll.droppable", function() {
                    t.options.refreshPositions || $.ui.ddmanager.prepareOffsets(t, e)
                })
            },
            drag: function(t, e) {
                t.options.refreshPositions && $.ui.ddmanager.prepareOffsets(t, e), $.each($.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var i, n, s, o = $.ui.intersect(t, this, this.options.tolerance, e),
                            r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (n = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                            return $(this).droppable("instance").options.scope === n
                        }), s.length && (i = $(s[0]).droppable("instance"), i.greedyChild = "isover" === r)), i && "isover" === r && (i.isover = !1, i.isout = !0, i._out.call(i, e)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, e), i && "isout" === r && (i.isout = !1, i.isover = !0, i._over.call(i, e)))
                    }
                })
            },
            dragStop: function(t, e) {
                t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || $.ui.ddmanager.prepareOffsets(t, e)
            }
        };
        var S = $.ui.droppable,
            O = "ui-effects-",
            P = $;
        $.effects = {
                effect: {}
            },
            function(t, e) {
                function i(t, e, i) {
                    var n = c[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                }

                function n(e) {
                    var i = l(),
                        n = i._rgba = [];
                    return e = e.toLowerCase(), f(a, function(t, s) {
                        var o, r = s.re.exec(e),
                            a = r && s.parse(r),
                            l = s.space || "rgba";
                        return a ? (o = i[l](a), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1) : void 0
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, p.transparent), i) : p[e]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    a = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    l = t.Color = function(e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    c = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    h = l.support = {},
                    d = t("<p>")[0],
                    p, f = t.each;
                d.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = d.style.backgroundColor.indexOf("rgba") > -1, f(u, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), l.fn = t.extend(l.prototype, {
                    parse: function(s, o, r, a) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(o), o = e);
                        var c = this,
                            h = t.type(s),
                            d = this._rgba = [];
                        return o !== e && (s = [s, o, r, a], h = "array"), "string" === h ? this.parse(n(s) || p._default) : "array" === h ? (f(u.rgba.props, function(t, e) {
                            d[e.idx] = i(s[e.idx], e)
                        }), this) : "object" === h ? (s instanceof l ? f(u, function(t, e) {
                            s[e.cache] && (c[e.cache] = s[e.cache].slice())
                        }) : f(u, function(e, n) {
                            var o = n.cache;
                            f(n.props, function(t, e) {
                                if (!c[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    c[o] = n.to(c._rgba)
                                }
                                c[o][e.idx] = i(s[t], e, !0)
                            }), c[o] && t.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
                        }), this) : void 0
                    },
                    is: function(t) {
                        var e = l(t),
                            i = !0,
                            n = this;
                        return f(u, function(t, s) {
                            var o, r = e[s.cache];
                            return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                                return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return f(u, function(i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var n = l(t),
                            s = n._space(),
                            o = u[s],
                            r = 0 === this.alpha() ? l("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            h = a.slice();
                        return n = n[o.cache], f(o.props, function(t, s) {
                            var o = s.idx,
                                r = a[o],
                                l = n[o],
                                u = c[s.type] || {};
                            null !== l && (null === r ? h[o] = l : (u.mod && (l - r > u.mod / 2 ? r += u.mod : r - l > u.mod / 2 && (r -= u.mod)), h[o] = i((l - r) * e + r, s)))
                        }), this[s](h)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = l(e)._rgba;
                        return l(t.map(i, function(t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function(e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), l.fn.parse.prototype = l.fn, u.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 255,
                        i = t[1] / 255,
                        n = t[2] / 255,
                        s = t[3],
                        o = Math.max(e, i, n),
                        r = Math.min(e, i, n),
                        a = o - r,
                        l = o + r,
                        u = .5 * l,
                        c, h;
                    return c = r === o ? 0 : e === o ? 60 * (i - n) / a + 360 : i === o ? 60 * (n - e) / a + 120 : 60 * (e - i) / a + 240, h = 0 === a ? 0 : .5 >= u ? a / l : a / (2 - l), [Math.round(c) % 360, h, u, null == s ? 1 : s]
                }, u.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = .5 >= n ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
                }, f(u, function(n, s) {
                    var o = s.props,
                        a = s.cache,
                        u = s.to,
                        c = s.from;
                    l.fn[n] = function(n) {
                        if (u && !this[a] && (this[a] = u(this._rgba)), n === e) return this[a].slice();
                        var s, r = t.type(n),
                            h = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return f(o, function(t, e) {
                            var n = h["object" === r ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        }), c ? (s = l(c(d)), s[a] = d, s) : l(d)
                    }, f(o, function(e, i) {
                        l.fn[e] || (l.fn[e] = function(s) {
                            var o = t.type(s),
                                a = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                l = this[a](),
                                u = l[i.idx],
                                c;
                            return "undefined" === o ? u : ("function" === o && (s = s.call(this, u), o = t.type(s)), null == s && i.empty ? this : ("string" === o && (c = r.exec(s), c && (s = u + parseFloat(c[2]) * ("+" === c[1] ? 1 : -1))), l[i.idx] = s, this[a](l)))
                        })
                    })
                }), l.hook = function(e) {
                    var i = e.split(" ");
                    f(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, s) {
                                var o, r, a = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = l(o || s), !h.rgba && 1 !== s._rgba[3]) {
                                        for (r = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && r && r.style;) try {
                                            a = t.css(r, "backgroundColor"), r = r.parentNode
                                        } catch (u) {}
                                        s = s.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (u) {}
                            }
                        }, t.fx.step[i] = function(e) {
                            e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, l.hook(o), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, p = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(P),
            function() {
                function t(t) {
                    var e, i, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        s = {};
                    if (n && n.length && n[0] && n[n[0]])
                        for (i = n.length; i--;) e = n[i], "string" == typeof n[e] && (s[$.camelCase(e)] = n[e]);
                    else
                        for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
                    return s
                }

                function e(t, e) {
                    var i = {},
                        s, o;
                    for (s in e) o = e[s], t[s] !== o && (n[s] || ($.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o));
                    return i
                }
                var i = ["add", "remove", "toggle"],
                    n = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
                    $.fx.step[e] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (P.style(t.elem, e, t.end), t.setAttr = !0)
                    }
                }), $.fn.addBack || ($.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), $.effects.animateClass = function(n, s, o, r) {
                    var a = $.speed(s, o, r);
                    return this.queue(function() {
                        var s = $(this),
                            o = s.attr("class") || "",
                            r, l = a.children ? s.find("*").addBack() : s;
                        l = l.map(function() {
                            var e = $(this);
                            return {
                                el: e,
                                start: t(this)
                            }
                        }), r = function() {
                            $.each(i, function(t, e) {
                                n[e] && s[e + "Class"](n[e])
                            })
                        }, r(), l = l.map(function() {
                            return this.end = t(this.el[0]), this.diff = e(this.start, this.end), this
                        }), s.attr("class", o), l = l.map(function() {
                            var t = this,
                                e = $.Deferred(),
                                i = $.extend({}, a, {
                                    queue: !1,
                                    complete: function() {
                                        e.resolve(t)
                                    }
                                });
                            return this.el.animate(this.diff, i), e.promise()
                        }), $.when.apply($, l.get()).done(function() {
                            r(), $.each(arguments, function() {
                                var t = this.el;
                                $.each(this.diff, function(e) {
                                    t.css(e, "")
                                })
                            }), a.complete.call(s[0])
                        })
                    })
                }, $.fn.extend({
                    addClass: function(t) {
                        return function(e, i, n, s) {
                            return i ? $.effects.animateClass.call(this, {
                                add: e
                            }, i, n, s) : t.apply(this, arguments)
                        }
                    }($.fn.addClass),
                    removeClass: function(t) {
                        return function(e, i, n, s) {
                            return arguments.length > 1 ? $.effects.animateClass.call(this, {
                                remove: e
                            }, i, n, s) : t.apply(this, arguments)
                        }
                    }($.fn.removeClass),
                    toggleClass: function(t) {
                        return function(e, i, n, s, o) {
                            return "boolean" == typeof i || void 0 === i ? n ? $.effects.animateClass.call(this, i ? {
                                add: e
                            } : {
                                remove: e
                            }, n, s, o) : t.apply(this, arguments) : $.effects.animateClass.call(this, {
                                toggle: e
                            }, i, n, s)
                        }
                    }($.fn.toggleClass),
                    switchClass: function(t, e, i, n, s) {
                        return $.effects.animateClass.call(this, {
                            add: e,
                            remove: t
                        }, i, n, s)
                    }
                })
            }(),
            function() {
                function t(t, e, i, n) {
                    return $.isPlainObject(t) && (e = t, t = t.effect), t = {
                        effect: t
                    }, null == e && (e = {}), $.isFunction(e) && (n = e, i = null, e = {}), ("number" == typeof e || $.fx.speeds[e]) && (n = i, i = e, e = {}), $.isFunction(i) && (n = i, i = null), e && $.extend(t, e), i = i || e.duration, t.duration = $.fx.off ? 0 : "number" == typeof i ? i : i in $.fx.speeds ? $.fx.speeds[i] : $.fx.speeds._default, t.complete = n || e.complete, t
                }

                function e(t) {
                    return !t || "number" == typeof t || $.fx.speeds[t] ? !0 : "string" != typeof t || $.effects.effect[t] ? $.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }
                $.extend($.effects, {
                    version: "1.11.4",
                    save: function(t, e) {
                        for (var i = 0; i < e.length; i++) null !== e[i] && t.data(O + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        var i, n;
                        for (n = 0; n < e.length; n++) null !== e[n] && (i = t.data(O + e[n]), void 0 === i && (i = ""), t.css(e[n], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createWrapper: function(t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var e = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                "float": t.css("float")
                            },
                            i = $("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            n = {
                                width: t.width(),
                                height: t.height()
                            },
                            s = document.activeElement;
                        try {
                            s.id
                        } catch (o) {
                            s = document.body
                        }
                        return t.wrap(i), (t[0] === s || $.contains(t[0], s)) && $(s).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : ($.extend(e, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), $.each(["top", "left", "bottom", "right"], function(i, n) {
                            e[n] = t.css(n), isNaN(parseInt(e[n], 10)) && (e[n] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(n), i.css(e).show()
                    },
                    removeWrapper: function(t) {
                        var e = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === e || $.contains(t[0], e)) && $(e).focus()), t
                    },
                    setTransition: function(t, e, i, n) {
                        return n = n || {}, $.each(e, function(e, s) {
                            var o = t.cssUnit(s);
                            o[0] > 0 && (n[s] = o[0] * i + o[1])
                        }), n
                    }
                }), $.fn.extend({
                    effect: function() {
                        function e(t) {
                            function e() {
                                $.isFunction(s) && s.call(n[0]), $.isFunction(t) && t()
                            }
                            var n = $(this),
                                s = i.complete,
                                r = i.mode;
                            (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), e()) : o.call(n[0], i, e)
                        }
                        var i = t.apply(this, arguments),
                            n = i.mode,
                            s = i.queue,
                            o = $.effects.effect[i.effect];
                        return $.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                            i.complete && i.complete.call(this)
                        }) : s === !1 ? this.each(e) : this.queue(s || "fx", e)
                    },
                    show: function(i) {
                        return function(n) {
                            if (e(n)) return i.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }($.fn.show),
                    hide: function(i) {
                        return function(n) {
                            if (e(n)) return i.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }($.fn.hide),
                    toggle: function(i) {
                        return function(n) {
                            if (e(n) || "boolean" == typeof n) return i.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }($.fn.toggle),
                    cssUnit: function(t) {
                        var e = this.css(t),
                            i = [];
                        return $.each(["em", "px", "%", "pt"], function(t, n) {
                            e.indexOf(n) > 0 && (i = [parseFloat(e), n])
                        }), i
                    }
                })
            }(),
            function() {
                var t = {};
                $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                    t[i] = function(t) {
                        return Math.pow(t, e + 2)
                    }
                }), $.extend(t, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), $.each(t, function(t, e) {
                    $.easing["easeIn" + t] = e, $.easing["easeOut" + t] = function(t) {
                        return 1 - e(1 - t)
                    }, $.easing["easeInOut" + t] = function(t) {
                        return .5 > t ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
                    }
                })
            }();
        var D = $.effects,
            M = $.effects.effect.blind = function(t, e) {
                var i = $(this),
                    n = /up|down|vertical/,
                    s = /up|left|vertical|horizontal/,
                    o = ["position", "top", "bottom", "left", "right", "height", "width"],
                    r = $.effects.setMode(i, t.mode || "hide"),
                    a = t.direction || "up",
                    l = n.test(a),
                    u = l ? "height" : "width",
                    c = l ? "top" : "left",
                    h = s.test(a),
                    d = {},
                    p = "show" === r,
                    f, g, m;
                i.parent().is(".ui-effects-wrapper") ? $.effects.save(i.parent(), o) : $.effects.save(i, o), i.show(), f = $.effects.createWrapper(i).css({
                    overflow: "hidden"
                }), g = f[u](), m = parseFloat(f.css(c)) || 0, d[u] = p ? g : 0, h || (i.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
                    position: "absolute"
                }), d[c] = p ? m : g + m), p && (f.css(u, 0), h || f.css(c, m + g)), f.animate(d, {
                    duration: t.duration,
                    easing: t.easing,
                    queue: !1,
                    complete: function() {
                        "hide" === r && i.hide(), $.effects.restore(i, o), $.effects.removeWrapper(i), e()
                    }
                })
            },
            I = $.effects.effect.bounce = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "effect"),
                    o = "hide" === s,
                    r = "show" === s,
                    a = t.direction || "up",
                    l = t.distance,
                    u = t.times || 5,
                    c = 2 * u + (r || o ? 1 : 0),
                    h = t.duration / c,
                    d = t.easing,
                    p = "up" === a || "down" === a ? "top" : "left",
                    f = "up" === a || "left" === a,
                    g, m, v, y = i.queue(),
                    b = y.length;
                for ((r || o) && n.push("opacity"), $.effects.save(i, n), i.show(), $.effects.createWrapper(i), l || (l = i["top" === p ? "outerHeight" : "outerWidth"]() / 3), r && (v = {
                        opacity: 1
                    }, v[p] = 0, i.css("opacity", 0).css(p, f ? 2 * -l : 2 * l).animate(v, h, d)), o && (l /= Math.pow(2, u - 1)), v = {}, v[p] = 0, g = 0; u > g; g++) m = {}, m[p] = (f ? "-=" : "+=") + l, i.animate(m, h, d).animate(v, h, d), l = o ? 2 * l : l / 2;
                o && (m = {
                    opacity: 0
                }, m[p] = (f ? "-=" : "+=") + l, i.animate(m, h, d)), i.queue(function() {
                    o && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e()
                }), b > 1 && y.splice.apply(y, [1, 0].concat(y.splice(b, c + 1))), i.dequeue()
            },
            A = $.effects.effect.clip = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "hide"),
                    o = "show" === s,
                    r = t.direction || "vertical",
                    a = "vertical" === r,
                    l = a ? "height" : "width",
                    u = a ? "top" : "left",
                    c = {},
                    h, d, p;
                $.effects.save(i, n), i.show(), h = $.effects.createWrapper(i).css({
                    overflow: "hidden"
                }), d = "IMG" === i[0].tagName ? h : i, p = d[l](), o && (d.css(l, 0), d.css(u, p / 2)), c[l] = o ? p : 0, c[u] = o ? 0 : p / 2, d.animate(c, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        o || i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e()
                    }
                })
            },
            N = $.effects.effect.drop = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "hide"),
                    o = "show" === s,
                    r = t.direction || "left",
                    a = "up" === r || "down" === r ? "top" : "left",
                    l = "up" === r || "left" === r ? "pos" : "neg",
                    u = {
                        opacity: o ? 1 : 0
                    },
                    c;
                $.effects.save(i, n), i.show(), $.effects.createWrapper(i), c = t.distance || i["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, o && i.css("opacity", 0).css(a, "pos" === l ? -c : c), u[a] = (o ? "pos" === l ? "+=" : "-=" : "pos" === l ? "-=" : "+=") + c, i.animate(u, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        "hide" === s && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e()
                    }
                })
            },
            H = $.effects.effect.explode = function(t, e) {
                function i() {
                    d.push(this), d.length === s * o && n()
                }

                function n() {
                    r.css({
                        visibility: "visible"
                    }), $(d).remove(), l || r.hide(), e()
                }
                var s = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                    o = s,
                    r = $(this),
                    a = $.effects.setMode(r, t.mode || "hide"),
                    l = "show" === a,
                    u = r.show().css("visibility", "hidden").offset(),
                    c = Math.ceil(r.outerWidth() / o),
                    h = Math.ceil(r.outerHeight() / s),
                    d = [],
                    p, f, g, m, v, y;
                for (p = 0; s > p; p++)
                    for (m = u.top + p * h, y = p - (s - 1) / 2, f = 0; o > f; f++) g = u.left + f * c, v = f - (o - 1) / 2, r.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -f * c,
                        top: -p * h
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: c,
                        height: h,
                        left: g + (l ? v * c : 0),
                        top: m + (l ? y * h : 0),
                        opacity: l ? 0 : 1
                    }).animate({
                        left: g + (l ? 0 : v * c),
                        top: m + (l ? 0 : y * h),
                        opacity: l ? 1 : 0
                    }, t.duration || 500, t.easing, i)
            },
            F = $.effects.effect.fade = function(t, e) {
                var i = $(this),
                    n = $.effects.setMode(i, t.mode || "toggle");
                i.animate({
                    opacity: n
                }, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: e
                })
            },
            R = $.effects.effect.fold = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "hide"),
                    o = "show" === s,
                    r = "hide" === s,
                    a = t.size || 15,
                    l = /([0-9]+)%/.exec(a),
                    u = !!t.horizFirst,
                    c = o !== u,
                    h = c ? ["width", "height"] : ["height", "width"],
                    d = t.duration / 2,
                    p, f, g = {},
                    m = {};
                $.effects.save(i, n), i.show(), p = $.effects.createWrapper(i).css({
                    overflow: "hidden"
                }), f = c ? [p.width(), p.height()] : [p.height(), p.width()], l && (a = parseInt(l[1], 10) / 100 * f[r ? 0 : 1]), o && p.css(u ? {
                    height: 0,
                    width: a
                } : {
                    height: a,
                    width: 0
                }), g[h[0]] = o ? f[0] : a, m[h[1]] = o ? f[1] : 0, p.animate(g, d, t.easing).animate(m, d, t.easing, function() {
                    r && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e()
                })
            },
            z = $.effects.effect.highlight = function(t, e) {
                var i = $(this),
                    n = ["backgroundImage", "backgroundColor", "opacity"],
                    s = $.effects.setMode(i, t.mode || "show"),
                    o = {
                        backgroundColor: i.css("backgroundColor")
                    };
                "hide" === s && (o.opacity = 0), $.effects.save(i, n), i.show().css({
                    backgroundImage: "none",
                    backgroundColor: t.color || "#ffff99"
                }).animate(o, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        "hide" === s && i.hide(), $.effects.restore(i, n), e()
                    }
                })
            },
            L = $.effects.effect.size = function(t, e) {
                var i, n, s, o = $(this),
                    r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    l = ["width", "height", "overflow"],
                    u = ["fontSize"],
                    c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    d = $.effects.setMode(o, t.mode || "effect"),
                    p = t.restore || "effect" !== d,
                    f = t.scale || "both",
                    g = t.origin || ["middle", "center"],
                    m = o.css("position"),
                    v = p ? r : a,
                    y = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                "show" === d && o.show(), i = {
                    height: o.height(),
                    width: o.width(),
                    outerHeight: o.outerHeight(),
                    outerWidth: o.outerWidth()
                }, "toggle" === t.mode && "show" === d ? (o.from = t.to || y, o.to = t.from || i) : (o.from = t.from || ("show" === d ? y : i), o.to = t.to || ("hide" === d ? y : i)), s = {
                    from: {
                        y: o.from.height / i.height,
                        x: o.from.width / i.width
                    },
                    to: {
                        y: o.to.height / i.height,
                        x: o.to.width / i.width
                    }
                }, ("box" === f || "both" === f) && (s.from.y !== s.to.y && (v = v.concat(c), o.from = $.effects.setTransition(o, c, s.from.y, o.from), o.to = $.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (v = v.concat(h), o.from = $.effects.setTransition(o, h, s.from.x, o.from), o.to = $.effects.setTransition(o, h, s.to.x, o.to))), ("content" === f || "both" === f) && s.from.y !== s.to.y && (v = v.concat(u).concat(l), o.from = $.effects.setTransition(o, u, s.from.y, o.from), o.to = $.effects.setTransition(o, u, s.to.y, o.to)), $.effects.save(o, v), o.show(), $.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = $.effects.getBaseline(g, i), o.from.top = (i.outerHeight - o.outerHeight()) * n.y, o.from.left = (i.outerWidth - o.outerWidth()) * n.x, o.to.top = (i.outerHeight - o.to.outerHeight) * n.y, o.to.left = (i.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === f || "both" === f) && (c = c.concat(["marginTop", "marginBottom"]).concat(u), h = h.concat(["marginLeft", "marginRight"]), l = r.concat(c).concat(h), o.find("*[width]").each(function() {
                    var e = $(this),
                        i = {
                            height: e.height(),
                            width: e.width(),
                            outerHeight: e.outerHeight(),
                            outerWidth: e.outerWidth()
                        };
                    p && $.effects.save(e, l), e.from = {
                        height: i.height * s.from.y,
                        width: i.width * s.from.x,
                        outerHeight: i.outerHeight * s.from.y,
                        outerWidth: i.outerWidth * s.from.x
                    }, e.to = {
                        height: i.height * s.to.y,
                        width: i.width * s.to.x,
                        outerHeight: i.height * s.to.y,
                        outerWidth: i.width * s.to.x
                    }, s.from.y !== s.to.y && (e.from = $.effects.setTransition(e, c, s.from.y, e.from), e.to = $.effects.setTransition(e, c, s.to.y, e.to)), s.from.x !== s.to.x && (e.from = $.effects.setTransition(e, h, s.from.x, e.from), e.to = $.effects.setTransition(e, h, s.to.x, e.to)), e.css(e.from), e.animate(e.to, t.duration, t.easing, function() {
                        p && $.effects.restore(e, l)
                    })
                })), o.animate(o.to, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === d && o.hide(), $.effects.restore(o, v), p || ("static" === m ? o.css({
                            position: "relative",
                            top: o.to.top,
                            left: o.to.left
                        }) : $.each(["top", "left"], function(t, e) {
                            o.css(e, function(e, i) {
                                var n = parseInt(i, 10),
                                    s = t ? o.to.left : o.to.top;
                                return "auto" === i ? s + "px" : n + s + "px"
                            })
                        })), $.effects.removeWrapper(o), e()
                    }
                })
            },
            W = $.effects.effect.scale = function(t, e) {
                var i = $(this),
                    n = $.extend(!0, {}, t),
                    s = $.effects.setMode(i, t.mode || "effect"),
                    o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === s ? 0 : 100),
                    r = t.direction || "both",
                    a = t.origin,
                    l = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    },
                    u = {
                        y: "horizontal" !== r ? o / 100 : 1,
                        x: "vertical" !== r ? o / 100 : 1
                    };
                n.effect = "size", n.queue = !1, n.complete = e, "effect" !== s && (n.origin = a || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === s ? {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                } : l), n.to = {
                    height: l.height * u.y,
                    width: l.width * u.x,
                    outerHeight: l.outerHeight * u.y,
                    outerWidth: l.outerWidth * u.x
                }, n.fade && ("show" === s && (n.from.opacity = 0, n.to.opacity = 1), "hide" === s && (n.from.opacity = 1, n.to.opacity = 0)), i.effect(n)
            },
            B = $.effects.effect.puff = function(t, e) {
                var i = $(this),
                    n = $.effects.setMode(i, t.mode || "hide"),
                    s = "hide" === n,
                    o = parseInt(t.percent, 10) || 150,
                    r = o / 100,
                    a = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                $.extend(t, {
                    effect: "scale",
                    queue: !1,
                    fade: !0,
                    mode: n,
                    complete: e,
                    percent: s ? o : 100,
                    from: s ? a : {
                        height: a.height * r,
                        width: a.width * r,
                        outerHeight: a.outerHeight * r,
                        outerWidth: a.outerWidth * r
                    }
                }), i.effect(t)
            },
            V = $.effects.effect.pulsate = function(t, e) {
                var i = $(this),
                    n = $.effects.setMode(i, t.mode || "show"),
                    s = "show" === n,
                    o = "hide" === n,
                    r = s || "hide" === n,
                    a = 2 * (t.times || 5) + (r ? 1 : 0),
                    l = t.duration / a,
                    u = 0,
                    c = i.queue(),
                    h = c.length,
                    d;
                for ((s || !i.is(":visible")) && (i.css("opacity", 0).show(), u = 1), d = 1; a > d; d++) i.animate({
                    opacity: u
                }, l, t.easing), u = 1 - u;
                i.animate({
                    opacity: u
                }, l, t.easing), i.queue(function() {
                    o && i.hide(), e()
                }), h > 1 && c.splice.apply(c, [1, 0].concat(c.splice(h, a + 1))), i.dequeue()
            },
            Y = $.effects.effect.shake = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "effect"),
                    o = t.direction || "left",
                    r = t.distance || 20,
                    a = t.times || 3,
                    l = 2 * a + 1,
                    u = Math.round(t.duration / l),
                    c = "up" === o || "down" === o ? "top" : "left",
                    h = "up" === o || "left" === o,
                    d = {},
                    p = {},
                    f = {},
                    g, m = i.queue(),
                    v = m.length;
                for ($.effects.save(i, n), i.show(), $.effects.createWrapper(i), d[c] = (h ? "-=" : "+=") + r, p[c] = (h ? "+=" : "-=") + 2 * r, f[c] = (h ? "-=" : "+=") + 2 * r, i.animate(d, u, t.easing), g = 1; a > g; g++) i.animate(p, u, t.easing).animate(f, u, t.easing);
                i.animate(p, u, t.easing).animate(d, u / 2, t.easing).queue(function() {
                    "hide" === s && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e()
                }), v > 1 && m.splice.apply(m, [1, 0].concat(m.splice(v, l + 1))), i.dequeue()
            },
            q = $.effects.effect.slide = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "width", "height"],
                    s = $.effects.setMode(i, t.mode || "show"),
                    o = "show" === s,
                    r = t.direction || "left",
                    a = "up" === r || "down" === r ? "top" : "left",
                    l = "up" === r || "left" === r,
                    u, c = {};
                $.effects.save(i, n), i.show(), u = t.distance || i["top" === a ? "outerHeight" : "outerWidth"](!0), $.effects.createWrapper(i).css({
                    overflow: "hidden"
                }), o && i.css(a, l ? isNaN(u) ? "-" + u : -u : u), c[a] = (o ? l ? "+=" : "-=" : l ? "-=" : "+=") + u, i.animate(c, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        "hide" === s && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e()
                    }
                })
            },
            U = $.effects.effect.transfer = function(t, e) {
                var i = $(this),
                    n = $(t.to),
                    s = "fixed" === n.css("position"),
                    o = $("body"),
                    r = s ? o.scrollTop() : 0,
                    a = s ? o.scrollLeft() : 0,
                    l = n.offset(),
                    u = {
                        top: l.top - r,
                        left: l.left - a,
                        height: n.innerHeight(),
                        width: n.innerWidth()
                    },
                    c = i.offset(),
                    h = $("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                        top: c.top - r,
                        left: c.left - a,
                        height: i.innerHeight(),
                        width: i.innerWidth(),
                        position: s ? "fixed" : "absolute"
                    }).animate(u, t.duration, t.easing, function() {
                        h.remove(), e()
                    })
            },
            K = $.widget("ui.progressbar", {
                version: "1.11.4",
                options: {
                    max: 100,
                    value: 0,
                    change: null,
                    complete: null
                },
                min: 0,
                _create: function() {
                    this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                        role: "progressbar",
                        "aria-valuemin": this.min
                    }), this.valueDiv = $("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
                },
                _destroy: function() {
                    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
                },
                value: function(t) {
                    return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
                },
                _constrainedValue: function(t) {
                    return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
                },
                _setOptions: function(t) {
                    var e = t.value;
                    delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
                },
                _setOption: function(t, e) {
                    "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
                },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function() {
                    var t = this.options.value,
                        e = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = $("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": t
                    }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
                }
            }),
            X = $.widget("ui.selectable", $.ui.mouse, {
                version: "1.11.4",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch",
                    selected: null,
                    selecting: null,
                    start: null,
                    stop: null,
                    unselected: null,
                    unselecting: null
                },
                _create: function() {
                    var t, e = this;
                    this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                        t = $(e.options.filter, e.element[0]), t.addClass("ui-selectee"), t.each(function() {
                            var t = $(this),
                                e = t.offset();
                            $.data(this, "selectable-item", {
                                element: this,
                                $element: t,
                                left: e.left,
                                top: e.top,
                                right: e.left + t.outerWidth(),
                                bottom: e.top + t.outerHeight(),
                                startselected: !1,
                                selected: t.hasClass("ui-selected"),
                                selecting: t.hasClass("ui-selecting"),
                                unselecting: t.hasClass("ui-unselecting")
                            })
                        })
                    }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = $("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
                },
                _mouseStart: function(t) {
                    var e = this,
                        i = this.options;
                    this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = $(i.filter, this.element[0]), this._trigger("start", t), $(i.appendTo).append(this.helper), this.helper.css({
                        left: t.pageX,
                        top: t.pageY,
                        width: 0,
                        height: 0
                    }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                        var i = $.data(this, "selectable-item");
                        i.startselected = !0, t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, e._trigger("unselecting", t, {
                            unselecting: i.element
                        }))
                    }), $(t.target).parents().addBack().each(function() {
                        var i, n = $.data(this, "selectable-item");
                        return n ? (i = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), n.unselecting = !i, n.selecting = i, n.selected = i, i ? e._trigger("selecting", t, {
                            selecting: n.element
                        }) : e._trigger("unselecting", t, {
                            unselecting: n.element
                        }), !1) : void 0
                    }))
                },
                _mouseDrag: function(t) {
                    if (this.dragged = !0, !this.options.disabled) {
                        var e, i = this,
                            n = this.options,
                            s = this.opos[0],
                            o = this.opos[1],
                            r = t.pageX,
                            a = t.pageY;
                        return s > r && (e = r, r = s, s = e), o > a && (e = a, a = o, o = e), this.helper.css({
                            left: s,
                            top: o,
                            width: r - s,
                            height: a - o
                        }), this.selectees.each(function() {
                            var e = $.data(this, "selectable-item"),
                                l = !1;
                            e && e.element !== i.element[0] && ("touch" === n.tolerance ? l = !(e.left > r || e.right < s || e.top > a || e.bottom < o) : "fit" === n.tolerance && (l = e.left > s && e.right < r && e.top > o && e.bottom < a), l ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, i._trigger("selecting", t, {
                                selecting: e.element
                            }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), i._trigger("unselecting", t, {
                                unselecting: e.element
                            }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, i._trigger("unselecting", t, {
                                unselecting: e.element
                            })))))
                        }), !1
                    }
                },
                _mouseStop: function(t) {
                    var e = this;
                    return this.dragged = !1, $(".ui-unselecting", this.element[0]).each(function() {
                        var i = $.data(this, "selectable-item");
                        i.$element.removeClass("ui-unselecting"), i.unselecting = !1, i.startselected = !1, e._trigger("unselected", t, {
                            unselected: i.element
                        })
                    }), $(".ui-selecting", this.element[0]).each(function() {
                        var i = $.data(this, "selectable-item");
                        i.$element.removeClass("ui-selecting").addClass("ui-selected"), i.selecting = !1, i.selected = !0, i.startselected = !0, e._trigger("selected", t, {
                            selected: i.element
                        })
                    }), this._trigger("stop", t), this.helper.remove(), !1
                }
            }),
            G = $.widget("ui.selectmenu", {
                version: "1.11.4",
                defaultElement: "<select>",
                options: {
                    appendTo: null,
                    disabled: null,
                    icons: {
                        button: "ui-icon-triangle-1-s"
                    },
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    width: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    select: null
                },
                _create: function() {
                    var t = this.element.uniqueId().attr("id");
                    this.ids = {
                        element: t,
                        button: t + "-button",
                        menu: t + "-menu"
                    }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
                },
                _drawButton: function() {
                    var t = this;
                    this.label = $("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                        click: function(t) {
                            this.button.focus(), t.preventDefault()
                        }
                    }), this.element.hide(), this.button = $("<span>", {
                        "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                        tabindex: this.options.disabled ? -1 : 0,
                        id: this.ids.button,
                        role: "combobox",
                        "aria-expanded": "false",
                        "aria-autocomplete": "list",
                        "aria-owns": this.ids.menu,
                        "aria-haspopup": "true"
                    }).insertAfter(this.element), $("<span>", {
                        "class": "ui-icon " + this.options.icons.button
                    }).prependTo(this.button), this.buttonText = $("<span>", {
                        "class": "ui-selectmenu-text"
                    }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                        t.menuItems || t._refreshMenu()
                    }), this._hoverable(this.button), this._focusable(this.button)
                },
                _drawMenu: function() {
                    var t = this;
                    this.menu = $("<ul>", {
                        "aria-hidden": "true",
                        "aria-labelledby": this.ids.button,
                        id: this.ids.menu
                    }), this.menuWrap = $("<div>", {
                        "class": "ui-selectmenu-menu ui-front"
                    }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                        role: "listbox",
                        select: function(e, i) {
                            e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e)
                        },
                        focus: function(e, i) {
                            var n = i.item.data("ui-selectmenu-item");
                            null != t.focusIndex && n.index !== t.focusIndex && (t._trigger("focus", e, {
                                item: n
                            }), t.isOpen || t._select(n, e)), t.focusIndex = n.index, t.button.attr("aria-activedescendant", t.menuItems.eq(n.index).attr("id"))
                        }
                    }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                        return !1
                    }, this.menuInstance._isDivider = function() {
                        return !1
                    }
                },
                refresh: function() {
                    this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
                },
                _refreshMenu: function() {
                    this.menu.empty();
                    var t, e = this.element.find("option");
                    e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                },
                open: function(t) {
                    this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
                },
                _position: function() {
                    this.menuWrap.position($.extend({
                        of: this.button
                    }, this.options.position))
                },
                close: function(t) {
                    this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
                },
                widget: function() {
                    return this.button
                },
                menuWidget: function() {
                    return this.menu
                },
                _renderMenu: function(t, e) {
                    var i = this,
                        n = "";
                    $.each(e, function(e, s) {
                        s.optgroup !== n && ($("<li>", {
                            "class": "ui-selectmenu-optgroup ui-menu-divider" + (s.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                            text: s.optgroup
                        }).appendTo(t), n = s.optgroup), i._renderItemData(t, s)
                    })
                },
                _renderItemData: function(t, e) {
                    return this._renderItem(t, e).data("ui-selectmenu-item", e)
                },
                _renderItem: function(t, e) {
                    var i = $("<li>");
                    return e.disabled && i.addClass("ui-state-disabled"), this._setText(i, e.label), i.appendTo(t)
                },
                _setText: function(t, e) {
                    e ? t.text(e) : t.html("&#160;")
                },
                _move: function(t, e) {
                    var i, n, s = ".ui-menu-item";
                    this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
                },
                _getSelectedItem: function() {
                    return this.menuItems.eq(this.element[0].selectedIndex)
                },
                _toggle: function(t) {
                    this[this.isOpen ? "close" : "open"](t)
                },
                _setSelection: function() {
                    var t;
                    this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
                },
                _documentClick: {
                    mousedown: function(t) {
                        this.isOpen && ($(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                    }
                },
                _buttonEvents: {
                    mousedown: function() {
                        var t;
                        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                    },
                    click: function(t) {
                        this._setSelection(), this._toggle(t)
                    },
                    keydown: function(t) {
                        var e = !0;
                        switch (t.keyCode) {
                            case $.ui.keyCode.TAB:
                            case $.ui.keyCode.ESCAPE:
                                this.close(t), e = !1;
                                break;
                            case $.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(t);
                                break;
                            case $.ui.keyCode.UP:
                                t.altKey ? this._toggle(t) : this._move("prev", t);
                                break;
                            case $.ui.keyCode.DOWN:
                                t.altKey ? this._toggle(t) : this._move("next", t);
                                break;
                            case $.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                                break;
                            case $.ui.keyCode.LEFT:
                                this._move("prev", t);
                                break;
                            case $.ui.keyCode.RIGHT:
                                this._move("next", t);
                                break;
                            case $.ui.keyCode.HOME:
                            case $.ui.keyCode.PAGE_UP:
                                this._move("first", t);
                                break;
                            case $.ui.keyCode.END:
                            case $.ui.keyCode.PAGE_DOWN:
                                this._move("last", t);
                                break;
                            default:
                                this.menu.trigger(t), e = !1
                        }
                        e && t.preventDefault()
                    }
                },
                _selectFocusedItem: function(t) {
                    var e = this.menuItems.eq(this.focusIndex);
                    e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
                },
                _select: function(t, e) {
                    var i = this.element[0].selectedIndex;
                    this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                        item: t
                    }), t.index !== i && this._trigger("change", e, {
                        item: t
                    }), this.close(e)
                },
                _setAria: function(t) {
                    var e = this.menuItems.eq(t.index).attr("id");
                    this.button.attr({
                        "aria-labelledby": e,
                        "aria-activedescendant": e
                    }), this.menu.attr("aria-activedescendant", e)
                },
                _setOption: function(t, e) {
                    "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
                },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t = t.jquery || t.nodeType ? $(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
                },
                _toggleAttr: function() {
                    this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
                },
                _resizeButton: function() {
                    var t = this.options.width;
                    t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
                },
                _resizeMenu: function() {
                    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                },
                _getCreateOptions: function() {
                    return {
                        disabled: this.element.prop("disabled")
                    }
                },
                _parseOptions: function(t) {
                    var e = [];
                    t.each(function(t, i) {
                        var n = $(i),
                            s = n.parent("optgroup");
                        e.push({
                            element: n,
                            index: t,
                            value: n.val(),
                            label: n.text(),
                            optgroup: s.attr("label") || "",
                            disabled: s.prop("disabled") || n.prop("disabled")
                        })
                    }), this.items = e
                },
                _destroy: function() {
                    this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
                }
            }),
            J = $.widget("ui.slider", $.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                numPages: 5,
                _create: function() {
                    this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
                },
                _createHandles: function() {
                    var t, e, i = this.options,
                        n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        s = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                        o = [];
                    for (e = i.values && i.values.length || 1, n.length > e && (n.slice(e).remove(), n = n.slice(0, e)), t = n.length; e > t; t++) o.push(s);
                    this.handles = n.add($(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                        $(this).data("ui-slider-handle-index", t)
                    })
                },
                _createRange: function() {
                    var t = this.options,
                        e = "";
                    t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : $.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = $("<div></div>").appendTo(this.element), e = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(e + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() {
                    this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
                },
                _destroy: function() {
                    this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
                },
                _mouseCapture: function(t) {
                    var e, i, n, s, o, r, a, l, u = this,
                        c = this.options;
                    return c.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), e = {
                        x: t.pageX,
                        y: t.pageY
                    }, i = this._normValueFromMouse(e), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                        var e = Math.abs(i - u.values(t));
                        (n > e || n === e && (t === u._lastChangedValue || u.values(t) === c.min)) && (n = e, s = $(this), o = t)
                    }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), l = !$(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                        left: 0,
                        top: 0
                    } : {
                        left: t.pageX - a.left - s.width() / 2,
                        top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0, !0))
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(t) {
                    var e = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i), !1
                },
                _mouseStop: function(t) {
                    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() {
                    this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(t) {
                    var e, i, n, s, o;
                    return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
                },
                _start: function(t, e) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
                },
                _slide: function(t, e, i) {
                    var n, s, o;
                    this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                        handle: this.handles[e],
                        value: i,
                        values: s
                    }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                        handle: this.handles[e],
                        value: i
                    }), o !== !1 && this.value(i))
                },
                _stop: function(t, e) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
                },
                _change: function(t, e) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var i = {
                            handle: this.handles[e],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                    }
                },
                value: function(t) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                },
                values: function(t, e) {
                    var i, n, s;
                    if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                    if (!arguments.length) return this._values();
                    if (!$.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                    for (i = this.options.values, n = arguments[0], s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(n[s]), this._change(null, s);
                    this._refreshValue()
                },
                _setOption: function(t, e) {
                    var i, n = 0;
                    switch ("range" === t && this.options.range === !0 && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), $.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e), this._super(t, e), t) {
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), i = 0; n > i; i += 1) this._change(null, i);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                    }
                },
                _value: function() {
                    var t = this.options.value;
                    return t = this._trimAlignValue(t)
                },
                _values: function(t) {
                    var e, i, n;
                    if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                    if (this.options.values && this.options.values.length) {
                        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                        return i
                    }
                    return []
                },
                _trimAlignValue: function(t) {
                    if (t <= this._valueMin()) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = this.options.step > 0 ? this.options.step : 1,
                        i = (t - this._valueMin()) % e,
                        n = t - i;
                    return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
                },
                _calculateNewMax: function() {
                    var t = this.options.max,
                        e = this._valueMin(),
                        i = this.options.step,
                        n = Math.floor(+(t - e).toFixed(this._precision()) / i) * i;
                    t = n + e, this.max = parseFloat(t.toFixed(this._precision()))
                },
                _precision: function() {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                },
                _precisionOf: function(t) {
                    var e = t.toString(),
                        i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.max
                },
                _refreshValue: function() {
                    var t, e, i, n, s, o = this.options.range,
                        r = this.options,
                        a = this,
                        l = this._animateOff ? !1 : r.animate,
                        u = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(i) {
                        e = (a.values(i) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, u["horizontal" === a.orientation ? "left" : "bottom"] = e + "%", $(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), a.options.range === !0 && ("horizontal" === a.orientation ? (0 === i && a.range.stop(1, 1)[l ? "animate" : "css"]({
                            left: e + "%"
                        }, r.animate), 1 === i && a.range[l ? "animate" : "css"]({
                            width: e - t + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        })) : (0 === i && a.range.stop(1, 1)[l ? "animate" : "css"]({
                            bottom: e + "%"
                        }, r.animate), 1 === i && a.range[l ? "animate" : "css"]({
                            height: e - t + "%"
                        }, {
                            queue: !1,
                            duration: r.animate
                        }))), t = e
                    }) : (i = this.value(), n = this._valueMin(), s = this._valueMax(), e = s !== n ? (i - n) / (s - n) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = e + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        width: e + "%"
                    }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
                        width: 100 - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
                        height: e + "%"
                    }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
                        height: 100 - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))
                },
                _handleEvents: {
                    keydown: function(t) {
                        var e, i, n, s, o = $(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case $.ui.keyCode.HOME:
                            case $.ui.keyCode.END:
                            case $.ui.keyCode.PAGE_UP:
                            case $.ui.keyCode.PAGE_DOWN:
                            case $.ui.keyCode.UP:
                            case $.ui.keyCode.RIGHT:
                            case $.ui.keyCode.DOWN:
                            case $.ui.keyCode.LEFT:
                                if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, $(t.target).addClass("ui-state-active"), e = this._start(t, o), e === !1)) return
                        }
                        switch (s = this.options.step, i = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                            case $.ui.keyCode.HOME:
                                n = this._valueMin();
                                break;
                            case $.ui.keyCode.END:
                                n = this._valueMax();
                                break;
                            case $.ui.keyCode.PAGE_UP:
                                n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case $.ui.keyCode.PAGE_DOWN:
                                n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case $.ui.keyCode.UP:
                            case $.ui.keyCode.RIGHT:
                                if (i === this._valueMax()) return;
                                n = this._trimAlignValue(i + s);
                                break;
                            case $.ui.keyCode.DOWN:
                            case $.ui.keyCode.LEFT:
                                if (i === this._valueMin()) return;
                                n = this._trimAlignValue(i - s)
                        }
                        this._slide(t, o, n)
                    },
                    keyup: function(t) {
                        var e = $(t.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), $(t.target).removeClass("ui-state-active"))
                    }
                }
            }),
            Z = $.widget("ui.sortable", $.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function(t, e, i) {
                    return t >= e && e + i > t
                },
                _isFloating: function(t) {
                    return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                },
                _create: function() {
                    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                },
                _setOption: function(t, e) {
                    this._super(t, e), "handle" === t && this._setHandleClassName()
                },
                _setHandleClassName: function() {
                    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), $.each(this.items, function() {
                        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                    })
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                    for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(t, e) {
                    var i = null,
                        n = !1,
                        s = this;
                    return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), $(t.target).parents().each(function() {
                        return $.data(this, s.widgetName + "-item") === s ? (i = $(this), !1) : void 0
                    }), $.data(t.target, s.widgetName + "-item") === s && (i = $(t.target)), i && (!this.options.handle || e || ($(this.options.handle, i).find("*").addBack().each(function() {
                        this === t.target && (n = !0)
                    }), n)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
                },
                _mouseStart: function(t, e, i) {
                    var n, s, o = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        }, $.extend(this.offset, {
                            click: {
                                left: t.pageX - this.offset.left,
                                top: t.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                        for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                    return $.ui.ddmanager && ($.ui.ddmanager.current = this), $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
                },
                _mouseDrag: function(t) {
                    var e, i, n, s, o = this.options,
                        r = !1;
                    for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                        if (i = this.items[e], n = i.item[0], s = this._intersectsWithPointer(i), s && i.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== n && !$.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !$.contains(this.element[0], n) : !0)) {
                            if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                            break
                        }
                    return this._contactContainers(t), $.ui.ddmanager && $.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(t, e) {
                    if (t) {
                        if ($.ui.ddmanager && !this.options.dropBehaviour && $.ui.ddmanager.drop(this, t), this.options.revert) {
                            var i = this,
                                n = this.placeholder.offset(),
                                s = this.options.axis,
                                o = {};
                            s && "x" !== s || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, $(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                                i._clear(t)
                            })
                        } else this._clear(t, e);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), $.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? $(this.domPosition.prev).after(this.currentItem) : $(this.domPosition.parent).prepend(this.currentItem)), this
                },
                serialize: function(t) {
                    var e = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, $(e).each(function() {
                        var e = ($(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        e && i.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
                    }), !i.length && t.key && i.push(t.key + "="), i.join("&")
                },
                toArray: function(t) {
                    var e = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, e.each(function() {
                        i.push($(t.item || this).attr(t.attribute || "id") || "")
                    }), i
                },
                _intersectsWith: function(t) {
                    var e = this.positionAbs.left,
                        i = e + this.helperProportions.width,
                        n = this.positionAbs.top,
                        s = n + this.helperProportions.height,
                        o = t.left,
                        r = o + t.width,
                        a = t.top,
                        l = a + t.height,
                        u = this.offset.click.top,
                        c = this.offset.click.left,
                        h = "x" === this.options.axis || n + u > a && l > n + u,
                        d = "y" === this.options.axis || e + c > o && r > e + c,
                        p = h && d;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(t) {
                    var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                        i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                        n = e && i,
                        s = this._getDragVerticalDirection(),
                        o = this._getDragHorizontalDirection();
                    return n ? this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
                },
                _intersectsWithSides: function(t) {
                    var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                        n = this._getDragVerticalDirection(),
                        s = this._getDragHorizontalDirection();
                    return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
                },
                _getDragVerticalDirection: function() {
                    var t = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== t && (t > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var t = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== t && (t > 0 ? "right" : "left")
                },
                refresh: function(t) {
                    return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
                },
                _connectWith: function() {
                    var t = this.options;
                    return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                },
                _getItemsAsjQuery: function(t) {
                    function e() {
                        r.push(this)
                    }
                    var i, n, s, o, r = [],
                        a = [],
                        l = this._connectWith();
                    if (l && t)
                        for (i = l.length - 1; i >= 0; i--)
                            for (s = $(l[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = $.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([$.isFunction(o.options.items) ? o.options.items.call(o.element) : $(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                    for (a.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(e);
                    return $(r)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = $.grep(this.items, function(e) {
                        for (var i = 0; i < t.length; i++)
                            if (t[i] === e.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(t) {
                    this.items = [], this.containers = [this];
                    var e, i, n, s, o, r, a, l, u = this.items,
                        c = [
                            [$.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                                item: this.currentItem
                            }) : $(this.options.items, this.element), this]
                        ],
                        h = this._connectWith();
                    if (h && this.ready)
                        for (e = h.length - 1; e >= 0; e--)
                            for (n = $(h[e], this.document[0]), i = n.length - 1; i >= 0; i--) s = $.data(n[i], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([$.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, {
                                item: this.currentItem
                            }) : $(s.options.items, s.element), s]), this.containers.push(s));
                    for (e = c.length - 1; e >= 0; e--)
                        for (o = c[e][1], r = c[e][0], i = 0, l = r.length; l > i; i++) a = $(r[i]), a.data(this.widgetName + "-item", o), u.push({
                            item: a,
                            instance: o,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                },
                refreshPositions: function(t) {
                    this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var e, i, n, s;
                    for (e = this.items.length - 1; e >= 0; e--) i = this.items[e], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? $(this.options.toleranceElement, i.item) : i.item, t || (i.width = n.outerWidth(), i.height = n.outerHeight()), s = n.offset(), i.left = s.left, i.top = s.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (e = this.containers.length - 1; e >= 0; e--) s = this.containers[e].element.offset(), this.containers[e].containerCache.left = s.left, this.containers[e].containerCache.top = s.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(t) {
                    t = t || this;
                    var e, i = t.options;
                    i.placeholder && i.placeholder.constructor !== String || (e = i.placeholder, i.placeholder = {
                        element: function() {
                            var i = t.currentItem[0].nodeName.toLowerCase(),
                                n = $("<" + i + ">", t.document[0]).addClass(e || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), $("<tr>", t.document[0]).appendTo(n)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, n) : "img" === i && n.attr("src", t.currentItem.attr("src")), e || n.css("visibility", "hidden"), n
                        },
                        update: function(n, s) {
                            (!e || i.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }), t.placeholder = $(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
                },
                _createTrPlaceholder: function(t, e) {
                    var i = this;
                    t.children().each(function() {
                        $("<td>&#160;</td>", i.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(e)
                    })
                },
                _contactContainers: function(t) {
                    var e, i, n, s, o, r, a, l, u, c, h = null,
                        d = null;
                    for (e = this.containers.length - 1; e >= 0; e--)
                        if (!$.contains(this.currentItem[0], this.containers[e].element[0]))
                            if (this._intersectsWith(this.containers[e].containerCache)) {
                                if (h && $.contains(this.containers[e].element[0], h.element[0])) continue;
                                h = this.containers[e], d = e
                            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                    if (h)
                        if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1);
                        else {
                            for (n = 1e4, s = null, u = h.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", c = u ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) $.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (a = this.items[i].item.offset()[o], l = !1, t[c] - a > this.items[i][r] / 2 && (l = !0), Math.abs(t[c] - a) < n && (n = Math.abs(t[c] - a), s = this.items[i], this.direction = l ? "up" : "down"));
                            if (!s && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[d]) return void(this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                            s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
                        }
                },
                _createHelper: function(t) {
                    var e = this.options,
                        i = $.isFunction(e.helper) ? $(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || $("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), (!i[0].style.width || e.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || e.forceHelperSize) && i.height(this.currentItem.height()), i
                },
                _adjustOffsetFromHelper: function(t) {
                    "string" == typeof t && (t = t.split(" ")), $.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && $.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var t = this.currentItem.position();
                        return {
                            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, e, i, n = this.options;
                    "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = $(n.containment)[0], e = $(n.containment).offset(), i = "hidden" !== $(t).css("overflow"), this.containment = [e.left + (parseInt($(t).css("borderLeftWidth"), 10) || 0) + (parseInt($(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt($(t).css("borderTopWidth"), 10) || 0) + (parseInt($(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt($(t).css("borderLeftWidth"), 10) || 0) - (parseInt($(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt($(t).css("borderTopWidth"), 10) || 0) - (parseInt($(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(t, e) {
                    e || (e = this.position);
                    var i = "absolute" === t ? 1 : -1,
                        n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        s = /(html|body)/i.test(n[0].tagName);
                    return {
                        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i,
                        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i
                    }
                },
                _generatePosition: function(t) {
                    var e, i, n = this.options,
                        s = t.pageX,
                        o = t.pageY,
                        r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        a = /(html|body)/i.test(r[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - n.grid[1] : e + n.grid[1] : e, i = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - n.grid[0] : i + n.grid[0] : i)), {
                        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : r.scrollTop()),
                        left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : r.scrollLeft())
                    }
                },
                _rearrange: function(t, e, i, n) {
                    i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                    var s = this.counter;
                    this._delay(function() {
                        s === this.counter && this.refreshPositions(!n)
                    })
                },
                _clear: function(t, e) {
                    function i(t, e, i) {
                        return function(n) {
                            i._trigger(t, n, e._uiHash(e))
                        }
                    }
                    this.reverting = !1;
                    var n, s = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    for (this.fromOutside && !e && s.push(function(t) {
                            this._trigger("receive", t, this._uiHash(this.fromOutside))
                        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                            this._trigger("update", t, this._uiHash())
                        }), this !== this.currentContainer && (e || (s.push(function(t) {
                            this._trigger("remove", t, this._uiHash())
                        }), s.push(function(t) {
                            return function(e) {
                                t._trigger("receive", e, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)), s.push(function(t) {
                            return function(e) {
                                t._trigger("update", e, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                        for (n = 0; n < s.length; n++) s[n].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval
                },
                _trigger: function() {
                    $.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                },
                _uiHash: function(t) {
                    var e = t || this;
                    return {
                        helper: e.helper,
                        placeholder: e.placeholder || $([]),
                        position: e.position,
                        originalPosition: e.originalPosition,
                        offset: e.positionAbs,
                        item: e.currentItem,
                        sender: t ? t.element : null
                    }
                }
            }),
            Q = $.widget("ui.spinner", {
                version: "1.11.4",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: {
                    culture: null,
                    icons: {
                        down: "ui-icon-triangle-1-s",
                        up: "ui-icon-triangle-1-n"
                    },
                    incremental: !0,
                    max: null,
                    min: null,
                    numberFormat: null,
                    page: 10,
                    step: 1,
                    change: null,
                    spin: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _getCreateOptions: function() {
                    var t = {},
                        e = this.element;
                    return $.each(["min", "max", "step"], function(i, n) {
                        var s = e.attr(n);
                        void 0 !== s && s.length && (t[n] = s)
                    }), t
                },
                _events: {
                    keydown: function(t) {
                        this._start(t) && this._keydown(t) && t.preventDefault()
                    },
                    keyup: "_stop",
                    focus: function() {
                        this.previous = this.element.val()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                    },
                    mousewheel: function(t, e) {
                        if (e) {
                            if (!this.spinning && !this._start(t)) return !1;
                            this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                                this.spinning && this._stop(t)
                            }, 100), t.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(t) {
                        function e() {
                            var t = this.element[0] === this.document[0].activeElement;
                            t || (this.element.focus(), this.previous = i, this._delay(function() {
                                this.previous = i
                            }))
                        }
                        var i;
                        i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, e.call(this)
                        }), this._start(t) !== !1 && this._repeat(null, $(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(t) {
                        return $(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : void this._repeat(null, $(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
                },
                _keydown: function(t) {
                    var e = this.options,
                        i = $.ui.keyCode;
                    switch (t.keyCode) {
                        case i.UP:
                            return this._repeat(null, 1, t), !0;
                        case i.DOWN:
                            return this._repeat(null, -1, t), !0;
                        case i.PAGE_UP:
                            return this._repeat(null, e.page, t), !0;
                        case i.PAGE_DOWN:
                            return this._repeat(null, -e.page, t), !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() {
                    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                },
                _buttonHtml: function() {
                    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                },
                _start: function(t) {
                    return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
                },
                _repeat: function(t, e, i) {
                    t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                        this._repeat(40, e, i)
                    }, t), this._spin(e * this.options.step, i)
                },
                _spin: function(t, e) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                        value: i
                    }) === !1 || (this._value(i), this.counter++)
                },
                _increment: function(t) {
                    var e = this.options.incremental;
                    return e ? $.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
                },
                _precision: function() {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                },
                _precisionOf: function(t) {
                    var e = t.toString(),
                        i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1
                },
                _adjustValue: function(t) {
                    var e, i, n = this.options;
                    return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
                },
                _stop: function(t) {
                    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
                },
                _setOption: function(t, e) {
                    if ("culture" === t || "numberFormat" === t) {
                        var i = this._parse(this.element.val());
                        return this.options[t] = e, void this.element.val(this._format(i))
                    }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
                },
                _setOptions: a(function(t) {
                    this._super(t)
                }),
                _parse: function(t) {
                    return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
                },
                _format: function(t) {
                    return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                },
                _refresh: function() {
                    this.element.attr({
                        "aria-valuemin": this.options.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._parse(this.element.val())
                    })
                },
                isValid: function() {
                    var t = this.value();
                    return null === t ? !1 : t === this._adjustValue(t)
                },
                _value: function(t, e) {
                    var i;
                    "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
                },
                _destroy: function() {
                    this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
                },
                stepUp: a(function(t) {
                    this._stepUp(t)
                }),
                _stepUp: function(t) {
                    this._start() && (this._spin((t || 1) * this.options.step), this._stop())
                },
                stepDown: a(function(t) {
                    this._stepDown(t)
                }),
                _stepDown: function(t) {
                    this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
                },
                pageUp: a(function(t) {
                    this._stepUp((t || 1) * this.options.page)
                }),
                pageDown: a(function(t) {
                    this._stepDown((t || 1) * this.options.page)
                }),
                value: function(t) {
                    return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val())
                },
                widget: function() {
                    return this.uiSpinner
                }
            }),
            tt = $.widget("ui.tabs", {
                version: "1.11.4",
                delay: 300,
                options: {
                    active: null,
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _isLocal: function() {
                    var t = /#.*$/;
                    return function(e) {
                        var i, n;
                        e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                        try {
                            i = decodeURIComponent(i)
                        } catch (s) {}
                        try {
                            n = decodeURIComponent(n)
                        } catch (s) {}
                        return e.hash.length > 1 && i === n
                    }
                }(),
                _create: function() {
                    var t = this,
                        e = this.options;
                    this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible), this._processTabs(), e.active = this._initialActive(), $.isArray(e.disabled) && (e.disabled = $.unique(e.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                        return t.tabs.index(e)
                    }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(e.active) : this.active = $(), this._refresh(), this.active.length && this.load(e.active)
                },
                _initialActive: function() {
                    var t = this.options.active,
                        e = this.options.collapsible,
                        i = location.hash.substring(1);
                    return null === t && (i && this.tabs.each(function(e, n) {
                        return $(n).attr("aria-controls") === i ? (t = e, !1) : void 0
                    }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = e ? !1 : 0)), !e && t === !1 && this.anchors.length && (t = 0), t
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : $()
                    }
                },
                _tabKeydown: function(t) {
                    var e = $(this.document[0].activeElement).closest("li"),
                        i = this.tabs.index(e),
                        n = !0;
                    if (!this._handlePageNav(t)) {
                        switch (t.keyCode) {
                            case $.ui.keyCode.RIGHT:
                            case $.ui.keyCode.DOWN:
                                i++;
                                break;
                            case $.ui.keyCode.UP:
                            case $.ui.keyCode.LEFT:
                                n = !1, i--;
                                break;
                            case $.ui.keyCode.END:
                                i = this.anchors.length - 1;
                                break;
                            case $.ui.keyCode.HOME:
                                i = 0;
                                break;
                            case $.ui.keyCode.SPACE:
                                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                            case $.ui.keyCode.ENTER:
                                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i === this.options.active ? !1 : i);
                            default:
                                return
                        }
                        t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, n), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                            this.option("active", i)
                        }, this.delay))
                    }
                },
                _panelKeydown: function(t) {
                    this._handlePageNav(t) || t.ctrlKey && t.keyCode === $.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
                },
                _handlePageNav: function(t) {
                    return t.altKey && t.keyCode === $.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === $.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                },
                _findNextTab: function(t, e) {
                    function i() {
                        return t > n && (t = 0), 0 > t && (t = n), t
                    }
                    for (var n = this.tabs.length - 1; - 1 !== $.inArray(i(), this.options.disabled);) t = e ? t + 1 : t - 1;
                    return t
                },
                _focusNextTab: function(t, e) {
                    return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
                },
                _sanitizeSelector: function(t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var t = this.options,
                        e = this.tablist.children(":has(a[href])");
                    t.disabled = $.map(e.filter(".ui-state-disabled"), function(t) {
                        return e.index(t)
                    }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !$.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = $()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = $()), this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-hidden": "true"
                    }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var t = this,
                        e = this.tabs,
                        i = this.anchors,
                        n = this.panels;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                        $(this).is(".ui-state-disabled") && t.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                        $(this).closest("li").is(".ui-state-disabled") && this.blur()
                    }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    }), this.anchors = this.tabs.map(function() {
                        return $("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    }), this.panels = $(), this.anchors.each(function(e, i) {
                        var n, s, o, r = $(i).uniqueId().attr("id"),
                            a = $(i).closest("li"),
                            l = a.attr("aria-controls");
                        t._isLocal(i) ? (n = i.hash, o = n.substring(1), s = t.element.find(t._sanitizeSelector(n))) : (o = a.attr("aria-controls") || $({}).uniqueId()[0].id, n = "#" + o, s = t.element.find(n), s.length || (s = t._createPanel(o), s.insertAfter(t.panels[e - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), l && a.data("ui-tabs-aria-controls", l), a.attr({
                            "aria-controls": o,
                            "aria-labelledby": r
                        }), s.attr("aria-labelledby", r)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), e && (this._off(e.not(this.tabs)), this._off(i.not(this.anchors)), this._off(n.not(this.panels)))
                },
                _getList: function() {
                    return this.tablist || this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(t) {
                    return $("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(t) {
                    $.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                    for (var e = 0, i; i = this.tabs[e]; e++) t === !0 || -1 !== $.inArray(e, t) ? $(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : $(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = t
                },
                _setupEvents: function(t) {
                    var e = {};
                    t && $.each(t.split(" "), function(t, i) {
                        e[i] = "_eventHandler"
                    }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                        click: function(t) {
                            t.preventDefault()
                        }
                    }), this._on(this.anchors, e), this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    }), this._on(this.panels, {
                        keydown: "_panelKeydown"
                    }), this._focusable(this.tabs), this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(t) {
                    var e, i = this.element.parent();
                    "fill" === t ? (e = i.height(), e -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                        var t = $(this),
                            i = t.css("position");
                        "absolute" !== i && "fixed" !== i && (e -= t.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        e -= $(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        $(this).height(Math.max(0, e - $(this).innerHeight() + $(this).height()))
                    }).css("overflow", "auto")) : "auto" === t && (e = 0, this.panels.each(function() {
                        e = Math.max(e, $(this).height("").height())
                    }).height(e))
                },
                _eventHandler: function(t) {
                    var e = this.options,
                        i = this.active,
                        n = $(t.currentTarget),
                        s = n.closest("li"),
                        o = s[0] === i[0],
                        r = o && e.collapsible,
                        a = r ? $() : this._getPanelForTab(s),
                        l = i.length ? this._getPanelForTab(i) : $(),
                        u = {
                            oldTab: i,
                            oldPanel: l,
                            newTab: r ? $() : s,
                            newPanel: a
                        };
                    t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !e.collapsible || this._trigger("beforeActivate", t, u) === !1 || (e.active = r ? !1 : this.tabs.index(s),
                        this.active = o ? $() : s, this.xhr && this.xhr.abort(), l.length || a.length || $.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, u))
                },
                _toggle: function(t, e) {
                    function i() {
                        s.running = !1, s._trigger("activate", t, e)
                    }

                    function n() {
                        e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, i) : (o.show(), i())
                    }
                    var s = this,
                        o = e.newPanel,
                        r = e.oldPanel;
                    this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                        e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
                    }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), e.oldTab.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), o.length && r.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                        return 0 === $(this).attr("tabIndex")
                    }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), e.newTab.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _activate: function(t) {
                    var e, i = this._findActive(t);
                    i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                        target: e,
                        currentTarget: e,
                        preventDefault: $.noop
                    }))
                },
                _findActive: function(t) {
                    return t === !1 ? $() : this.tabs.eq(t)
                },
                _getIndex: function(t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                        $.data(this, "ui-tabs-destroy") ? $(this).remove() : $(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                    }), this.tabs.each(function() {
                        var t = $(this),
                            e = t.data("ui-tabs-aria-controls");
                        e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(t) {
                    var e = this.options.disabled;
                    e !== !1 && (void 0 === t ? e = !1 : (t = this._getIndex(t), e = $.isArray(e) ? $.map(e, function(e) {
                        return e !== t ? e : null
                    }) : $.map(this.tabs, function(e, i) {
                        return i !== t ? i : null
                    })), this._setupDisabled(e))
                },
                disable: function(t) {
                    var e = this.options.disabled;
                    if (e !== !0) {
                        if (void 0 === t) e = !0;
                        else {
                            if (t = this._getIndex(t), -1 !== $.inArray(t, e)) return;
                            e = $.isArray(e) ? $.merge([t], e).sort() : [t]
                        }
                        this._setupDisabled(e)
                    }
                },
                load: function(t, e) {
                    t = this._getIndex(t);
                    var i = this,
                        n = this.tabs.eq(t),
                        s = n.find(".ui-tabs-anchor"),
                        o = this._getPanelForTab(n),
                        r = {
                            tab: n,
                            panel: o
                        },
                        a = function(t, e) {
                            "abort" === e && i.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === i.xhr && delete i.xhr
                        };
                    this._isLocal(s[0]) || (this.xhr = $.ajax(this._ajaxSettings(s, e, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(t, n, s) {
                        setTimeout(function() {
                            o.html(t), i._trigger("load", e, r), a(s, n)
                        }, 1)
                    }).fail(function(t, e) {
                        setTimeout(function() {
                            a(t, e)
                        }, 1)
                    })))
                },
                _ajaxSettings: function(t, e, i) {
                    var n = this;
                    return {
                        url: t.attr("href"),
                        beforeSend: function(t, s) {
                            return n._trigger("beforeLoad", e, $.extend({
                                jqXHR: t,
                                ajaxSettings: s
                            }, i))
                        }
                    }
                },
                _getPanelForTab: function(t) {
                    var e = $(t).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + e))
                }
            }),
            et = $.widget("ui.tooltip", {
                version: "1.11.4",
                options: {
                    content: function() {
                        var t = $(this).attr("title") || "";
                        return $("<a>").text(t).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: {
                        my: "left top+15",
                        at: "left bottom",
                        collision: "flipfit flip"
                    },
                    show: !0,
                    tooltipClass: null,
                    track: !1,
                    close: null,
                    open: null
                },
                _addDescribedBy: function(t, e) {
                    var i = (t.attr("aria-describedby") || "").split(/\s+/);
                    i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", $.trim(i.join(" ")))
                },
                _removeDescribedBy: function(t) {
                    var e = t.data("ui-tooltip-id"),
                        i = (t.attr("aria-describedby") || "").split(/\s+/),
                        n = $.inArray(e, i); - 1 !== n && i.splice(n, 1), t.removeData("ui-tooltip-id"), i = $.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = $("<div>").attr({
                        role: "log",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                },
                _setOption: function(t, e) {
                    var i = this;
                    return "disabled" === t ? (this[e ? "_disable" : "_enable"](), void(this.options[t] = e)) : (this._super(t, e), void("content" === t && $.each(this.tooltips, function(t, e) {
                        i._updateContent(e.element)
                    })))
                },
                _disable: function() {
                    var t = this;
                    $.each(this.tooltips, function(e, i) {
                        var n = $.Event("blur");
                        n.target = n.currentTarget = i.element[0], t.close(n, !0)
                    }), this.element.find(this.options.items).addBack().each(function() {
                        var t = $(this);
                        t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var t = $(this);
                        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                    })
                },
                open: function(t) {
                    var e = this,
                        i = $(t ? t.target : this.element).closest(this.options.items);
                    i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() {
                        var t = $(this),
                            i;
                        t.data("ui-tooltip-open") && (i = $.Event("blur"), i.target = i.currentTarget = this, e.close(i, !0)), t.attr("title") && (t.uniqueId(), e.parents[this.id] = {
                            element: this,
                            title: t.attr("title")
                        }, t.attr("title", ""))
                    }), this._registerCloseHandlers(t, i), this._updateContent(i, t))
                },
                _updateContent: function(t, e) {
                    var i, n = this.options.content,
                        s = this,
                        o = e ? e.type : null;
                    return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                        s._delay(function() {
                            t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                        })
                    }), void(i && this._open(e, t, i)))
                },
                _open: function(t, e, i) {
                    function n(t) {
                        l.of = t, o.is(":hidden") || o.position(l)
                    }
                    var s, o, r, a, l = $.extend({}, this.options.position);
                    if (i) {
                        if (s = this._find(e)) return void s.tooltip.find(".ui-tooltip-content").html(i);
                        e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), s = this._tooltip(e), o = s.tooltip, this._addDescribedBy(e, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), i.clone ? (a = i.clone(), a.removeAttr("id").find("[id]").removeAttr("id")) : a = i, $("<div>").html(a).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                            mousemove: n
                        }), n(t)) : o.position($.extend({
                            of: e
                        }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                            o.is(":visible") && (n(l.of), clearInterval(r))
                        }, $.fx.interval)), this._trigger("open", t, {
                            tooltip: o
                        })
                    }
                },
                _registerCloseHandlers: function(t, e) {
                    var i = {
                        keyup: function(t) {
                            if (t.keyCode === $.ui.keyCode.ESCAPE) {
                                var i = $.Event(t);
                                i.currentTarget = e[0], this.close(i, !0)
                            }
                        }
                    };
                    e[0] !== this.element[0] && (i.remove = function() {
                        this._removeTooltip(this._find(e).tooltip)
                    }), t && "mouseover" !== t.type || (i.mouseleave = "close"), t && "focusin" !== t.type || (i.focusout = "close"), this._on(!0, e, i)
                },
                close: function(t) {
                    var e, i = this,
                        n = $(t ? t.currentTarget : this.element),
                        s = this._find(n);
                    return s ? (e = s.tooltip, void(s.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), s.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function() {
                        i._removeTooltip($(this))
                    }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && $.each(this.parents, function(t, e) {
                        $(e.element).attr("title", e.title), delete i.parents[t]
                    }), s.closing = !0, this._trigger("close", t, {
                        tooltip: e
                    }), s.hiding || (s.closing = !1)))) : void n.removeData("ui-tooltip-open")
                },
                _tooltip: function(t) {
                    var e = $("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                        i = e.uniqueId().attr("id");
                    return $("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[i] = {
                        element: t,
                        tooltip: e
                    }
                },
                _find: function(t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null
                },
                _removeTooltip: function(t) {
                    t.remove(), delete this.tooltips[t.attr("id")]
                },
                _destroy: function() {
                    var t = this;
                    $.each(this.tooltips, function(e, i) {
                        var n = $.Event("blur"),
                            s = i.element;
                        n.target = n.currentTarget = s[0], t.close(n, !0), $("#" + e).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
                    }), this.liveRegion.remove()
                }
            })
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || [];
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    s = i[n];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; s;) {
                    var r = o && o[s];
                    r && (this.off(t, s), delete o[s]), s.apply(this, e), n += r ? 0 : 1, s = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function t(e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function s(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, i) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), $ && (this.jqDeferred = new $.Deferred), void setTimeout(function() {
                this.check()
            }.bind(this))) : new o(t, e, i)
        }

        function r(t) {
            this.img = t
        }

        function a(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var $ = e.jQuery,
            l = e.console;
        o.prototype = Object.create(i.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && u[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var s = i[n];
                    this.addImage(s)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (n = 0; n < o.length; n++) {
                        var r = o[n];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var s = n && n[2];
                    s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function(t) {
            var e = new r(t);
            this.images.push(e)
        }, o.prototype.addBackground = function(t, e) {
            var i = new a(t, e);
            this.images.push(i)
        }, o.prototype.check = function() {
            function t(t, i, n) {
                setTimeout(function() {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function(t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, r.prototype = Object.create(i.prototype), r.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype = Object.create(r.prototype), a.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function(t) {
            t = t || e.jQuery, t && ($ = t, $.fn.imagesLoaded = function(t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise($(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    /**
     * @license
     * Video.js 5.9.2 <http://videojs.com/>
     * Copyright Brightcove, Inc. <https://www.brightcove.com/>
     * Available under Apache License Version 2.0
     * <https://github.com/videojs/video.js/blob/master/LICENSE>
     *
     * Includes vtt.js <https://github.com/mozilla/vtt.js>
     * Available under Apache License Version 2.0
     * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
     */
    function(t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.videojs = t()
        }
    }(function() {
        var t, e, i;
        return function n(t, e, i) {
            function s(r, a) {
                if (!e[r]) {
                    if (!t[r]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(r, !0);
                        if (o) return o(r, !0);
                        var u = new Error("Cannot find module '" + r + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = e[r] = {
                        exports: {}
                    };
                    t[r][0].call(c.exports, function(e) {
                        var i = t[r][1][e];
                        return s(i ? i : e)
                    }, c, c.exports, n, t, e, i)
                }
                return e[r].exports
            }
            for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) s(i[r]);
            return s
        }({
            1: [function(t, e, i) {
                (function(i) {
                    var n = "undefined" != typeof i ? i : "undefined" != typeof window ? window : {},
                        s = t("min-document");
                    if ("undefined" != typeof document) e.exports = document;
                    else {
                        var o = n["__GLOBAL_DOCUMENT_CACHE@4"];
                        o || (o = n["__GLOBAL_DOCUMENT_CACHE@4"] = s), e.exports = o
                    }
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {
                "min-document": 3
            }],
            2: [function(t, e, i) {
                (function(t) {
                    "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : "undefined" != typeof self ? e.exports = self : e.exports = {}
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            3: [function(t, e, i) {}, {}],
            4: [function(t, e, i) {
                var n = t("../internal/getNative"),
                    s = n(Date, "now"),
                    o = s || function() {
                        return (new Date).getTime()
                    };
                e.exports = o
            }, {
                "../internal/getNative": 20
            }],
            5: [function(t, e, i) {
                function n(t, e, i) {
                    function n() {
                        v && clearTimeout(v), p && clearTimeout(p), b = 0, p = v = y = void 0
                    }

                    function l(e, i) {
                        i && clearTimeout(i), p = v = y = void 0, e && (b = o(), f = t.apply(m, d), v || p || (d = m = void 0))
                    }

                    function u() {
                        var t = e - (o() - g);
                        0 >= t || t > e ? l(y, p) : v = setTimeout(u, t)
                    }

                    function c() {
                        l(w, v)
                    }

                    function h() {
                        if (d = arguments, g = o(), m = this, y = w && (v || !x), _ === !1) var i = x && !v;
                        else {
                            p || x || (b = g);
                            var n = _ - (g - b),
                                s = 0 >= n || n > _;
                            s ? (p && (p = clearTimeout(p)), b = g, f = t.apply(m, d)) : p || (p = setTimeout(c, n))
                        }
                        return s && v ? v = clearTimeout(v) : v || e === _ || (v = setTimeout(u, e)), i && (s = !0, f = t.apply(m, d)), !s || v || p || (d = m = void 0), f
                    }
                    var d, p, f, g, m, v, y, b = 0,
                        _ = !1,
                        w = !0;
                    if ("function" != typeof t) throw new TypeError(r);
                    if (e = 0 > e ? 0 : +e || 0, i === !0) {
                        var x = !0;
                        w = !1
                    } else s(i) && (x = !!i.leading, _ = "maxWait" in i && a(+i.maxWait || 0, e), w = "trailing" in i ? !!i.trailing : w);
                    return h.cancel = n, h
                }
                var s = t("../lang/isObject"),
                    o = t("../date/now"),
                    r = "Expected a function",
                    a = Math.max;
                e.exports = n
            }, {
                "../date/now": 4,
                "../lang/isObject": 33
            }],
            6: [function(t, e, i) {
                function n(t, e) {
                    if ("function" != typeof t) throw new TypeError(s);
                    return e = o(void 0 === e ? t.length - 1 : +e || 0, 0),
                        function() {
                            for (var i = arguments, n = -1, s = o(i.length - e, 0), r = Array(s); ++n < s;) r[n] = i[e + n];
                            switch (e) {
                                case 0:
                                    return t.call(this, r);
                                case 1:
                                    return t.call(this, i[0], r);
                                case 2:
                                    return t.call(this, i[0], i[1], r)
                            }
                            var a = Array(e + 1);
                            for (n = -1; ++n < e;) a[n] = i[n];
                            return a[e] = r, t.apply(this, a)
                        }
                }
                var s = "Expected a function",
                    o = Math.max;
                e.exports = n
            }, {}],
            7: [function(t, e, i) {
                function n(t, e, i) {
                    var n = !0,
                        a = !0;
                    if ("function" != typeof t) throw new TypeError(r);
                    return i === !1 ? n = !1 : o(i) && (n = "leading" in i ? !!i.leading : n, a = "trailing" in i ? !!i.trailing : a), s(t, e, {
                        leading: n,
                        maxWait: +e,
                        trailing: a
                    })
                }
                var s = t("./debounce"),
                    o = t("../lang/isObject"),
                    r = "Expected a function";
                e.exports = n
            }, {
                "../lang/isObject": 33,
                "./debounce": 5
            }],
            8: [function(t, e, i) {
                function n(t, e) {
                    var i = -1,
                        n = t.length;
                    for (e || (e = Array(n)); ++i < n;) e[i] = t[i];
                    return e
                }
                e.exports = n
            }, {}],
            9: [function(t, e, i) {
                function n(t, e) {
                    for (var i = -1, n = t.length; ++i < n && e(t[i], i, t) !== !1;);
                    return t
                }
                e.exports = n
            }, {}],
            10: [function(t, e, i) {
                function n(t, e, i) {
                    i || (i = {});
                    for (var n = -1, s = e.length; ++n < s;) {
                        var o = e[n];
                        i[o] = t[o]
                    }
                    return i
                }
                e.exports = n
            }, {}],
            11: [function(t, e, i) {
                var n = t("./createBaseFor"),
                    s = n();
                e.exports = s
            }, {
                "./createBaseFor": 18
            }],
            12: [function(t, e, i) {
                function n(t, e) {
                    return s(t, e, o)
                }
                var s = t("./baseFor"),
                    o = t("../object/keysIn");
                e.exports = n
            }, {
                "../object/keysIn": 39,
                "./baseFor": 11
            }],
            13: [function(t, e, i) {
                function n(t, e, i, d, p) {
                    if (!l(t)) return t;
                    var f = a(e) && (r(e) || c(e)),
                        g = f ? void 0 : h(e);
                    return s(g || e, function(s, r) {
                        if (g && (r = s, s = e[r]), u(s)) d || (d = []), p || (p = []), o(t, e, r, n, i, d, p);
                        else {
                            var a = t[r],
                                l = i ? i(a, s, r, t, e) : void 0,
                                c = void 0 === l;
                            c && (l = s), void 0 === l && (!f || r in t) || !c && (l === l ? l === a : a !== a) || (t[r] = l)
                        }
                    }), t
                }
                var s = t("./arrayEach"),
                    o = t("./baseMergeDeep"),
                    r = t("../lang/isArray"),
                    a = t("./isArrayLike"),
                    l = t("../lang/isObject"),
                    u = t("./isObjectLike"),
                    c = t("../lang/isTypedArray"),
                    h = t("../object/keys");
                e.exports = n
            }, {
                "../lang/isArray": 30,
                "../lang/isObject": 33,
                "../lang/isTypedArray": 36,
                "../object/keys": 38,
                "./arrayEach": 9,
                "./baseMergeDeep": 14,
                "./isArrayLike": 21,
                "./isObjectLike": 26
            }],
            14: [function(t, e, i) {
                function n(t, e, i, n, h, d, p) {
                    for (var f = d.length, g = e[i]; f--;)
                        if (d[f] == g) return void(t[i] = p[f]);
                    var m = t[i],
                        v = h ? h(m, g, i, t, e) : void 0,
                        y = void 0 === v;
                    y && (v = g, a(g) && (r(g) || u(g)) ? v = r(m) ? m : a(m) ? s(m) : [] : l(g) || o(g) ? v = o(m) ? c(m) : l(m) ? m : {} : y = !1), d.push(g), p.push(v), y ? t[i] = n(v, g, h, d, p) : (v === v ? v !== m : m === m) && (t[i] = v)
                }
                var s = t("./arrayCopy"),
                    o = t("../lang/isArguments"),
                    r = t("../lang/isArray"),
                    a = t("./isArrayLike"),
                    l = t("../lang/isPlainObject"),
                    u = t("../lang/isTypedArray"),
                    c = t("../lang/toPlainObject");
                e.exports = n
            }, {
                "../lang/isArguments": 29,
                "../lang/isArray": 30,
                "../lang/isPlainObject": 34,
                "../lang/isTypedArray": 36,
                "../lang/toPlainObject": 37,
                "./arrayCopy": 8,
                "./isArrayLike": 21
            }],
            15: [function(t, e, i) {
                function n(t) {
                    return function(e) {
                        return null == e ? void 0 : s(e)[t]
                    }
                }
                var s = t("./toObject");
                e.exports = n
            }, {
                "./toObject": 28
            }],
            16: [function(t, e, i) {
                function n(t, e, i) {
                    if ("function" != typeof t) return s;
                    if (void 0 === e) return t;
                    switch (i) {
                        case 1:
                            return function(i) {
                                return t.call(e, i)
                            };
                        case 3:
                            return function(i, n, s) {
                                return t.call(e, i, n, s)
                            };
                        case 4:
                            return function(i, n, s, o) {
                                return t.call(e, i, n, s, o)
                            };
                        case 5:
                            return function(i, n, s, o, r) {
                                return t.call(e, i, n, s, o, r)
                            }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                var s = t("../utility/identity");
                e.exports = n
            }, {
                "../utility/identity": 42
            }],
            17: [function(t, e, i) {
                function n(t) {
                    return r(function(e, i) {
                        var n = -1,
                            r = null == e ? 0 : i.length,
                            a = r > 2 ? i[r - 2] : void 0,
                            l = r > 2 ? i[2] : void 0,
                            u = r > 1 ? i[r - 1] : void 0;
                        for ("function" == typeof a ? (a = s(a, u, 5), r -= 2) : (a = "function" == typeof u ? u : void 0, r -= a ? 1 : 0), l && o(i[0], i[1], l) && (a = 3 > r ? void 0 : a, r = 1); ++n < r;) {
                            var c = i[n];
                            c && t(e, c, a)
                        }
                        return e
                    })
                }
                var s = t("./bindCallback"),
                    o = t("./isIterateeCall"),
                    r = t("../function/restParam");
                e.exports = n
            }, {
                "../function/restParam": 6,
                "./bindCallback": 16,
                "./isIterateeCall": 24
            }],
            18: [function(t, e, i) {
                function n(t) {
                    return function(e, i, n) {
                        for (var o = s(e), r = n(e), a = r.length, l = t ? a : -1; t ? l-- : ++l < a;) {
                            var u = r[l];
                            if (i(o[u], u, o) === !1) break
                        }
                        return e
                    }
                }
                var s = t("./toObject");
                e.exports = n
            }, {
                "./toObject": 28
            }],
            19: [function(t, e, i) {
                var n = t("./baseProperty"),
                    s = n("length");
                e.exports = s
            }, {
                "./baseProperty": 15
            }],
            20: [function(t, e, i) {
                function n(t, e) {
                    var i = null == t ? void 0 : t[e];
                    return s(i) ? i : void 0
                }
                var s = t("../lang/isNative");
                e.exports = n
            }, {
                "../lang/isNative": 32
            }],
            21: [function(t, e, i) {
                function n(t) {
                    return null != t && o(s(t))
                }
                var s = t("./getLength"),
                    o = t("./isLength");
                e.exports = n
            }, {
                "./getLength": 19,
                "./isLength": 25
            }],
            22: [function(t, e, i) {
                var n = function() {
                    try {
                        Object({
                            toString: 0
                        } + "")
                    } catch (t) {
                        return function() {
                            return !1
                        }
                    }
                    return function(t) {
                        return "function" != typeof t.toString && "string" == typeof(t + "")
                    }
                }();
                e.exports = n
            }, {}],
            23: [function(t, e, i) {
                function n(t, e) {
                    return t = "number" == typeof t || s.test(t) ? +t : -1, e = null == e ? o : e, t > -1 && t % 1 == 0 && e > t
                }
                var s = /^\d+$/,
                    o = 9007199254740991;
                e.exports = n
            }, {}],
            24: [function(t, e, i) {
                function n(t, e, i) {
                    if (!r(i)) return !1;
                    var n = typeof e;
                    if ("number" == n ? s(i) && o(e, i.length) : "string" == n && e in i) {
                        var a = i[e];
                        return t === t ? t === a : a !== a
                    }
                    return !1
                }
                var s = t("./isArrayLike"),
                    o = t("./isIndex"),
                    r = t("../lang/isObject");
                e.exports = n
            }, {
                "../lang/isObject": 33,
                "./isArrayLike": 21,
                "./isIndex": 23
            }],
            25: [function(t, e, i) {
                function n(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && s >= t
                }
                var s = 9007199254740991;
                e.exports = n
            }, {}],
            26: [function(t, e, i) {
                function n(t) {
                    return !!t && "object" == typeof t
                }
                e.exports = n
            }, {}],
            27: [function(t, e, i) {
                function n(t) {
                    for (var e = u(t), i = e.length, n = i && t.length, c = !!n && a(n) && (o(t) || s(t) || l(t)), d = -1, p = []; ++d < i;) {
                        var f = e[d];
                        (c && r(f, n) || h.call(t, f)) && p.push(f)
                    }
                    return p
                }
                var s = t("../lang/isArguments"),
                    o = t("../lang/isArray"),
                    r = t("./isIndex"),
                    a = t("./isLength"),
                    l = t("../lang/isString"),
                    u = t("../object/keysIn"),
                    c = Object.prototype,
                    h = c.hasOwnProperty;
                e.exports = n
            }, {
                "../lang/isArguments": 29,
                "../lang/isArray": 30,
                "../lang/isString": 35,
                "../object/keysIn": 39,
                "./isIndex": 23,
                "./isLength": 25
            }],
            28: [function(t, e, i) {
                function n(t) {
                    if (r.unindexedChars && o(t)) {
                        for (var e = -1, i = t.length, n = Object(t); ++e < i;) n[e] = t.charAt(e);
                        return n
                    }
                    return s(t) ? t : Object(t)
                }
                var s = t("../lang/isObject"),
                    o = t("../lang/isString"),
                    r = t("../support");
                e.exports = n
            }, {
                "../lang/isObject": 33,
                "../lang/isString": 35,
                "../support": 41
            }],
            29: [function(t, e, i) {
                function n(t) {
                    return o(t) && s(t) && a.call(t, "callee") && !l.call(t, "callee")
                }
                var s = t("../internal/isArrayLike"),
                    o = t("../internal/isObjectLike"),
                    r = Object.prototype,
                    a = r.hasOwnProperty,
                    l = r.propertyIsEnumerable;
                e.exports = n
            }, {
                "../internal/isArrayLike": 21,
                "../internal/isObjectLike": 26
            }],
            30: [function(t, e, i) {
                var n = t("../internal/getNative"),
                    s = t("../internal/isLength"),
                    o = t("../internal/isObjectLike"),
                    r = "[object Array]",
                    a = Object.prototype,
                    l = a.toString,
                    u = n(Array, "isArray"),
                    c = u || function(t) {
                        return o(t) && s(t.length) && l.call(t) == r
                    };
                e.exports = c
            }, {
                "../internal/getNative": 20,
                "../internal/isLength": 25,
                "../internal/isObjectLike": 26
            }],
            31: [function(t, e, i) {
                function n(t) {
                    return s(t) && a.call(t) == o
                }
                var s = t("./isObject"),
                    o = "[object Function]",
                    r = Object.prototype,
                    a = r.toString;
                e.exports = n
            }, {
                "./isObject": 33
            }],
            32: [function(t, e, i) {
                function n(t) {
                    return null == t ? !1 : s(t) ? h.test(u.call(t)) : r(t) && (o(t) ? h : a).test(t)
                }
                var s = t("./isFunction"),
                    o = t("../internal/isHostObject"),
                    r = t("../internal/isObjectLike"),
                    a = /^\[object .+?Constructor\]$/,
                    l = Object.prototype,
                    u = Function.prototype.toString,
                    c = l.hasOwnProperty,
                    h = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                e.exports = n
            }, {
                "../internal/isHostObject": 22,
                "../internal/isObjectLike": 26,
                "./isFunction": 31
            }],
            33: [function(t, e, i) {
                function n(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }
                e.exports = n
            }, {}],
            34: [function(t, e, i) {
                function n(t) {
                    var e;
                    if (!a(t) || d.call(t) != u || r(t) || o(t) || !h.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
                    var i;
                    return l.ownLast ? (s(t, function(t, e, n) {
                        return i = h.call(n, e), !1
                    }), i !== !1) : (s(t, function(t, e) {
                        i = e
                    }), void 0 === i || h.call(t, i))
                }
                var s = t("../internal/baseForIn"),
                    o = t("./isArguments"),
                    r = t("../internal/isHostObject"),
                    a = t("../internal/isObjectLike"),
                    l = t("../support"),
                    u = "[object Object]",
                    c = Object.prototype,
                    h = c.hasOwnProperty,
                    d = c.toString;
                e.exports = n
            }, {
                "../internal/baseForIn": 12,
                "../internal/isHostObject": 22,
                "../internal/isObjectLike": 26,
                "../support": 41,
                "./isArguments": 29
            }],
            35: [function(t, e, i) {
                function n(t) {
                    return "string" == typeof t || s(t) && a.call(t) == o
                }
                var s = t("../internal/isObjectLike"),
                    o = "[object String]",
                    r = Object.prototype,
                    a = r.toString;
                e.exports = n
            }, {
                "../internal/isObjectLike": 26
            }],
            36: [function(t, e, i) {
                function n(t) {
                    return o(t) && s(t.length) && !!O[D.call(t)]
                }
                var s = t("../internal/isLength"),
                    o = t("../internal/isObjectLike"),
                    r = "[object Arguments]",
                    a = "[object Array]",
                    l = "[object Boolean]",
                    u = "[object Date]",
                    c = "[object Error]",
                    h = "[object Function]",
                    d = "[object Map]",
                    p = "[object Number]",
                    f = "[object Object]",
                    g = "[object RegExp]",
                    m = "[object Set]",
                    v = "[object String]",
                    y = "[object WeakMap]",
                    b = "[object ArrayBuffer]",
                    _ = "[object Float32Array]",
                    w = "[object Float64Array]",
                    x = "[object Int8Array]",
                    T = "[object Int16Array]",
                    k = "[object Int32Array]",
                    C = "[object Uint8Array]",
                    j = "[object Uint8ClampedArray]",
                    E = "[object Uint16Array]",
                    S = "[object Uint32Array]",
                    O = {};
                O[_] = O[w] = O[x] = O[T] = O[k] = O[C] = O[j] = O[E] = O[S] = !0, O[r] = O[a] = O[b] = O[l] = O[u] = O[c] = O[h] = O[d] = O[p] = O[f] = O[g] = O[m] = O[v] = O[y] = !1;
                var P = Object.prototype,
                    D = P.toString;
                e.exports = n
            }, {
                "../internal/isLength": 25,
                "../internal/isObjectLike": 26
            }],
            37: [function(t, e, i) {
                function n(t) {
                    return s(t, o(t))
                }
                var s = t("../internal/baseCopy"),
                    o = t("../object/keysIn");
                e.exports = n
            }, {
                "../internal/baseCopy": 10,
                "../object/keysIn": 39
            }],
            38: [function(t, e, i) {
                var n = t("../internal/getNative"),
                    s = t("../internal/isArrayLike"),
                    o = t("../lang/isObject"),
                    r = t("../internal/shimKeys"),
                    a = t("../support"),
                    l = n(Object, "keys"),
                    u = l ? function(t) {
                        var e = null == t ? void 0 : t.constructor;
                        return "function" == typeof e && e.prototype === t || ("function" == typeof t ? a.enumPrototypes : s(t)) ? r(t) : o(t) ? l(t) : []
                    } : r;
                e.exports = u
            }, {
                "../internal/getNative": 20,
                "../internal/isArrayLike": 21,
                "../internal/shimKeys": 27,
                "../lang/isObject": 33,
                "../support": 41
            }],
            39: [function(t, e, i) {
                function n(t) {
                    if (null == t) return [];
                    c(t) || (t = Object(t));
                    var e = t.length;
                    e = e && u(e) && (r(t) || o(t) || h(t)) && e || 0;
                    for (var i = t.constructor, n = -1, s = a(i) && i.prototype || k, p = s === t, f = Array(e), g = e > 0, v = d.enumErrorProps && (t === T || t instanceof Error), y = d.enumPrototypes && a(t); ++n < e;) f[n] = n + "";
                    for (var _ in t) y && "prototype" == _ || v && ("message" == _ || "name" == _) || g && l(_, e) || "constructor" == _ && (p || !j.call(t, _)) || f.push(_);
                    if (d.nonEnumShadows && t !== k) {
                        var O = t === C ? w : t === T ? m : E.call(t),
                            P = S[O] || S[b];
                        for (O == b && (s = k), e = x.length; e--;) {
                            _ = x[e];
                            var D = P[_];
                            p && D || (D ? !j.call(t, _) : t[_] === s[_]) || f.push(_)
                        }
                    }
                    return f
                }
                var s = t("../internal/arrayEach"),
                    o = t("../lang/isArguments"),
                    r = t("../lang/isArray"),
                    a = t("../lang/isFunction"),
                    l = t("../internal/isIndex"),
                    u = t("../internal/isLength"),
                    c = t("../lang/isObject"),
                    h = t("../lang/isString"),
                    d = t("../support"),
                    p = "[object Array]",
                    f = "[object Boolean]",
                    g = "[object Date]",
                    m = "[object Error]",
                    v = "[object Function]",
                    y = "[object Number]",
                    b = "[object Object]",
                    _ = "[object RegExp]",
                    w = "[object String]",
                    x = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    T = Error.prototype,
                    k = Object.prototype,
                    C = String.prototype,
                    j = k.hasOwnProperty,
                    E = k.toString,
                    S = {};
                S[p] = S[g] = S[y] = {
                    constructor: !0,
                    toLocaleString: !0,
                    toString: !0,
                    valueOf: !0
                }, S[f] = S[w] = {
                    constructor: !0,
                    toString: !0,
                    valueOf: !0
                }, S[m] = S[v] = S[_] = {
                    constructor: !0,
                    toString: !0
                }, S[b] = {
                    constructor: !0
                }, s(x, function(t) {
                    for (var e in S)
                        if (j.call(S, e)) {
                            var i = S[e];
                            i[t] = j.call(i, t)
                        }
                }), e.exports = n
            }, {
                "../internal/arrayEach": 9,
                "../internal/isIndex": 23,
                "../internal/isLength": 25,
                "../lang/isArguments": 29,
                "../lang/isArray": 30,
                "../lang/isFunction": 31,
                "../lang/isObject": 33,
                "../lang/isString": 35,
                "../support": 41
            }],
            40: [function(t, e, i) {
                var n = t("../internal/baseMerge"),
                    s = t("../internal/createAssigner"),
                    o = s(n);
                e.exports = o
            }, {
                "../internal/baseMerge": 13,
                "../internal/createAssigner": 17
            }],
            41: [function(t, e, i) {
                var n = Array.prototype,
                    s = Error.prototype,
                    o = Object.prototype,
                    r = o.propertyIsEnumerable,
                    a = n.splice,
                    l = {};
                ! function(t) {
                    var e = function() {
                            this.x = t
                        },
                        i = {
                            0: t,
                            length: t
                        },
                        n = [];
                    e.prototype = {
                        valueOf: t,
                        y: t
                    };
                    for (var o in new e) n.push(o);
                    l.enumErrorProps = r.call(s, "message") || r.call(s, "name"), l.enumPrototypes = r.call(e, "prototype"), l.nonEnumShadows = !/valueOf/.test(n), l.ownLast = "x" != n[0], l.spliceObjects = (a.call(i, 0, 1), !i[0]), l.unindexedChars = "x" [0] + Object("x")[0] != "xx"
                }(1, 0), e.exports = l
            }, {}],
            42: [function(t, e, i) {
                function n(t) {
                    return t
                }
                e.exports = n
            }, {}],
            43: [function(t, e, i) {
                "use strict";
                var n = t("object-keys");
                e.exports = function s() {
                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" == typeof Symbol.iterator) return !0;
                    var t = {},
                        e = Symbol("test");
                    if ("string" == typeof e) return !1;
                    var i = 42;
                    t[e] = i;
                    for (e in t) return !1;
                    if (0 !== n(t).length) return !1;
                    if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                    var s = Object.getOwnPropertySymbols(t);
                    if (1 !== s.length || s[0] !== e) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                        var o = Object.getOwnPropertyDescriptor(t, e);
                        if (o.value !== i || o.enumerable !== !0) return !1
                    }
                    return !0
                }
            }, {
                "object-keys": 50
            }],
            44: [function(t, e, i) {
                "use strict";
                var n = t("object-keys"),
                    s = t("function-bind"),
                    o = function(t) {
                        return "undefined" != typeof t && null !== t
                    },
                    r = t("./hasSymbols")(),
                    a = Object,
                    l = s.call(Function.call, Array.prototype.push),
                    u = s.call(Function.call, Object.prototype.propertyIsEnumerable);
                e.exports = function c(t, e) {
                    if (!o(t)) throw new TypeError("target must be an object");
                    var i = a(t),
                        s, c, h, d, p, f, g;
                    for (s = 1; s < arguments.length; ++s) {
                        if (c = a(arguments[s]), d = n(c), r && Object.getOwnPropertySymbols)
                            for (p = Object.getOwnPropertySymbols(c), h = 0; h < p.length; ++h) g = p[h], u(c, g) && l(d, g);
                        for (h = 0; h < d.length; ++h) g = d[h], f = c[g], u(c, g) && (i[g] = f)
                    }
                    return i
                }
            }, {
                "./hasSymbols": 43,
                "function-bind": 49,
                "object-keys": 50
            }],
            45: [function(t, e, i) {
                "use strict";
                var n = t("define-properties"),
                    s = t("./implementation"),
                    o = t("./polyfill"),
                    r = t("./shim");
                n(s, {
                    implementation: s,
                    getPolyfill: o,
                    shim: r
                }), e.exports = s
            }, {
                "./implementation": 44,
                "./polyfill": 52,
                "./shim": 53,
                "define-properties": 46
            }],
            46: [function(t, e, i) {
                "use strict";
                var n = t("object-keys"),
                    s = t("foreach"),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol(),
                    r = Object.prototype.toString,
                    a = function(t) {
                        return "function" == typeof t && "[object Function]" === r.call(t)
                    },
                    l = function() {
                        var t = {};
                        try {
                            Object.defineProperty(t, "x", {
                                enumerable: !1,
                                value: t
                            });
                            for (var e in t) return !1;
                            return t.x === t
                        } catch (i) {
                            return !1
                        }
                    },
                    u = Object.defineProperty && l(),
                    c = function(t, e, i, n) {
                        (!(e in t) || a(n) && n()) && (u ? Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: i,
                            writable: !0
                        }) : t[e] = i)
                    },
                    h = function(t, e) {
                        var i = arguments.length > 2 ? arguments[2] : {},
                            r = n(e);
                        o && (r = r.concat(Object.getOwnPropertySymbols(e))), s(r, function(n) {
                            c(t, n, e[n], i[n])
                        })
                    };
                h.supportsDescriptors = !!u, e.exports = h
            }, {
                foreach: 47,
                "object-keys": 50
            }],
            47: [function(t, e, i) {
                var n = Object.prototype.hasOwnProperty,
                    s = Object.prototype.toString;
                e.exports = function o(t, e, i) {
                    if ("[object Function]" !== s.call(e)) throw new TypeError("iterator must be a function");
                    var o = t.length;
                    if (o === +o)
                        for (var r = 0; o > r; r++) e.call(i, t[r], r, t);
                    else
                        for (var a in t) n.call(t, a) && e.call(i, t[a], a, t)
                }
            }, {}],
            48: [function(t, e, i) {
                var n = "Function.prototype.bind called on incompatible ",
                    s = Array.prototype.slice,
                    o = Object.prototype.toString,
                    r = "[object Function]";
                e.exports = function a(t) {
                    var e = this;
                    if ("function" != typeof e || o.call(e) !== r) throw new TypeError(n + e);
                    for (var i = s.call(arguments, 1), a, l = function() {
                            if (this instanceof a) {
                                var n = e.apply(this, i.concat(s.call(arguments)));
                                return Object(n) === n ? n : this
                            }
                            return e.apply(t, i.concat(s.call(arguments)))
                        }, u = Math.max(0, e.length - i.length), c = [], h = 0; u > h; h++) c.push("$" + h);
                    if (a = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
                        var d = function p() {};
                        d.prototype = e.prototype, a.prototype = new d, d.prototype = null
                    }
                    return a
                }
            }, {}],
            49: [function(t, e, i) {
                var n = t("./implementation");
                e.exports = Function.prototype.bind || n
            }, {
                "./implementation": 48
            }],
            50: [function(t, e, i) {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                    s = Object.prototype.toString,
                    o = Array.prototype.slice,
                    r = t("./isArguments"),
                    a = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    l = function() {}.propertyIsEnumerable("prototype"),
                    u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    c = function(t) {
                        var e = t.constructor;
                        return e && e.prototype === t
                    },
                    h = {
                        $console: !0,
                        $frame: !0,
                        $frameElement: !0,
                        $frames: !0,
                        $parent: !0,
                        $self: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $window: !0
                    },
                    d = function() {
                        if ("undefined" == typeof window) return !1;
                        for (var t in window) try {
                            if (!h["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                                c(window[t])
                            } catch (e) {
                                return !0
                            }
                        } catch (e) {
                            return !0
                        }
                        return !1
                    }(),
                    p = function(t) {
                        if ("undefined" == typeof window || !d) return c(t);
                        try {
                            return c(t)
                        } catch (e) {
                            return !1
                        }
                    },
                    f = function g(t) {
                        var e = null !== t && "object" == typeof t,
                            i = "[object Function]" === s.call(t),
                            o = r(t),
                            c = e && "[object String]" === s.call(t),
                            h = [];
                        if (!e && !i && !o) throw new TypeError("Object.keys called on a non-object");
                        var d = l && i;
                        if (c && t.length > 0 && !n.call(t, 0))
                            for (var f = 0; f < t.length; ++f) h.push(String(f));
                        if (o && t.length > 0)
                            for (var g = 0; g < t.length; ++g) h.push(String(g));
                        else
                            for (var m in t) d && "prototype" === m || !n.call(t, m) || h.push(String(m));
                        if (a)
                            for (var v = p(t), y = 0; y < u.length; ++y) v && "constructor" === u[y] || !n.call(t, u[y]) || h.push(u[y]);
                        return h
                    };
                f.shim = function m() {
                    if (Object.keys) {
                        var t = function() {
                            return 2 === (Object.keys(arguments) || "").length
                        }(1, 2);
                        if (!t) {
                            var e = Object.keys;
                            Object.keys = function i(t) {
                                return e(r(t) ? o.call(t) : t)
                            }
                        }
                    } else Object.keys = f;
                    return Object.keys || f
                }, e.exports = f
            }, {
                "./isArguments": 51
            }],
            51: [function(t, e, i) {
                "use strict";
                var n = Object.prototype.toString;
                e.exports = function s(t) {
                    var e = n.call(t),
                        i = "[object Arguments]" === e;
                    return i || (i = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), i
                }
            }, {}],
            52: [function(t, e, i) {
                "use strict";
                var n = t("./implementation"),
                    s = function() {
                        if (!Object.assign) return !1;
                        for (var t = "abcdefghijklmnopqrst", e = t.split(""), i = {}, n = 0; n < e.length; ++n) i[e[n]] = e[n];
                        var s = Object.assign({}, i),
                            o = "";
                        for (var r in s) o += r;
                        return t !== o
                    },
                    o = function() {
                        if (!Object.assign || !Object.preventExtensions) return !1;
                        var t = Object.preventExtensions({
                            1: 2
                        });
                        try {
                            Object.assign(t, "xy")
                        } catch (e) {
                            return "y" === t[1]
                        }
                    };
                e.exports = function r() {
                    return Object.assign ? s() ? n : o() ? n : Object.assign : n
                }
            }, {
                "./implementation": 44
            }],
            53: [function(t, e, i) {
                "use strict";
                var n = t("define-properties"),
                    s = t("./polyfill");
                e.exports = function o() {
                    var t = s();
                    return n(Object, {
                        assign: t
                    }, {
                        assign: function() {
                            return Object.assign !== t
                        }
                    }), t
                }
            }, {
                "./polyfill": 52,
                "define-properties": 46
            }],
            54: [function(t, e, i) {
                function n(t, e) {
                    var i, n = null;
                    try {
                        i = JSON.parse(t, e)
                    } catch (s) {
                        n = s
                    }
                    return [n, i]
                }
                e.exports = n
            }, {}],
            55: [function(t, e, i) {
                function n(t) {
                    return t.replace(/\n\r?\s*/g, "")
                }
                e.exports = function s(t) {
                    for (var e = "", i = 0; i < arguments.length; i++) e += n(t[i]) + (arguments[i + 1] || "");
                    return e
                }
            }, {}],
            56: [function(t, e, i) {
                "use strict";

                function n(t, e) {
                    for (var i = 0; i < t.length; i++) e(t[i])
                }

                function s(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e)) return !1;
                    return !0
                }

                function o(t, e, i) {
                    var n = t;
                    return h(e) ? (i = e, "string" == typeof t && (n = {
                        uri: t
                    })) : n = p(e, {
                        uri: t
                    }), n.callback = i, n
                }

                function r(t, e, i) {
                    return e = o(t, e, i), a(e)
                }

                function a(t) {
                    function e() {
                        4 === u.readyState && o()
                    }

                    function i() {
                        var t = void 0;
                        if (u.response ? t = u.response : "text" !== u.responseType && u.responseType || (t = u.responseText || u.responseXML), b) try {
                            t = JSON.parse(t)
                        } catch (e) {}
                        return t
                    }

                    function n(t) {
                        clearTimeout(_), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, a(t, l)
                    }

                    function o() {
                        if (!p) {
                            var e;
                            clearTimeout(_), e = t.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                            var n = l,
                                s = null;
                            0 !== e ? (n = {
                                body: i(),
                                statusCode: e,
                                method: g,
                                headers: {},
                                url: f,
                                rawRequest: u
                            }, u.getAllResponseHeaders && (n.headers = d(u.getAllResponseHeaders()))) : s = new Error("Internal XMLHttpRequest Error"), a(s, n, n.body)
                        }
                    }
                    var a = t.callback;
                    if ("undefined" == typeof a) throw new Error("callback argument missing");
                    a = c(a);
                    var l = {
                            body: void 0,
                            headers: {},
                            statusCode: 0,
                            method: g,
                            url: f,
                            rawRequest: u
                        },
                        u = t.xhr || null;
                    u || (u = t.cors || t.useXDR ? new r.XDomainRequest : new r.XMLHttpRequest);
                    var h, p, f = u.url = t.uri || t.url,
                        g = u.method = t.method || "GET",
                        m = t.body || t.data || null,
                        v = u.headers = t.headers || {},
                        y = !!t.sync,
                        b = !1,
                        _;
                    if ("json" in t && (b = !0, v.accept || v.Accept || (v.Accept = "application/json"), "GET" !== g && "HEAD" !== g && (v["content-type"] || v["Content-Type"] || (v["Content-Type"] = "application/json"), m = JSON.stringify(t.json))), u.onreadystatechange = e, u.onload = o, u.onerror = n, u.onprogress = function() {}, u.ontimeout = n, u.open(g, f, !y, t.username, t.password), y || (u.withCredentials = !!t.withCredentials), !y && t.timeout > 0 && (_ = setTimeout(function() {
                            p = !0, u.abort("timeout");
                            var t = new Error("XMLHttpRequest timeout");
                            t.code = "ETIMEDOUT", n(t)
                        }, t.timeout)), u.setRequestHeader)
                        for (h in v) v.hasOwnProperty(h) && u.setRequestHeader(h, v[h]);
                    else if (t.headers && !s(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                    return "responseType" in t && (u.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(u), u.send(m), u
                }

                function l() {}
                var u = t("global/window"),
                    c = t("once"),
                    h = t("is-function"),
                    d = t("parse-headers"),
                    p = t("xtend");
                e.exports = r, r.XMLHttpRequest = u.XMLHttpRequest || l, r.XDomainRequest = "withCredentials" in new r.XMLHttpRequest ? r.XMLHttpRequest : u.XDomainRequest, n(["get", "put", "post", "patch", "head", "delete"], function(t) {
                    r["delete" === t ? "del" : t] = function(e, i, n) {
                        return i = o(e, i, n), i.method = t.toUpperCase(), a(i)
                    }
                })
            }, {
                "global/window": 2,
                "is-function": 57,
                once: 58,
                "parse-headers": 61,
                xtend: 62
            }],
            57: [function(t, e, i) {
                function n(t) {
                    var e = s.call(t);
                    return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
                }
                e.exports = n;
                var s = Object.prototype.toString
            }, {}],
            58: [function(t, e, i) {
                function n(t) {
                    var e = !1;
                    return function() {
                        return e ? void 0 : (e = !0, t.apply(this, arguments))
                    }
                }
                e.exports = n, n.proto = n(function() {
                    Object.defineProperty(Function.prototype, "once", {
                        value: function() {
                            return n(this)
                        },
                        configurable: !0
                    })
                })
            }, {}],
            59: [function(t, e, i) {
                function n(t, e, i) {
                    if (!a(e)) throw new TypeError("iterator must be a function");
                    arguments.length < 3 && (i = this), "[object Array]" === l.call(t) ? s(t, e, i) : "string" == typeof t ? o(t, e, i) : r(t, e, i)
                }

                function s(t, e, i) {
                    for (var n = 0, s = t.length; s > n; n++) u.call(t, n) && e.call(i, t[n], n, t)
                }

                function o(t, e, i) {
                    for (var n = 0, s = t.length; s > n; n++) e.call(i, t.charAt(n), n, t)
                }

                function r(t, e, i) {
                    for (var n in t) u.call(t, n) && e.call(i, t[n], n, t)
                }
                var a = t("is-function");
                e.exports = n;
                var l = Object.prototype.toString,
                    u = Object.prototype.hasOwnProperty
            }, {
                "is-function": 57
            }],
            60: [function(t, e, i) {
                function n(t) {
                    return t.replace(/^\s*|\s*$/g, "")
                }
                i = e.exports = n, i.left = function(t) {
                    return t.replace(/^\s*/, "")
                }, i.right = function(t) {
                    return t.replace(/\s*$/, "")
                }
            }, {}],
            61: [function(t, e, i) {
                var n = t("trim"),
                    s = t("for-each"),
                    o = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    };
                e.exports = function(t) {
                    if (!t) return {};
                    var e = {};
                    return s(n(t).split("\n"), function(t) {
                        var i = t.indexOf(":"),
                            s = n(t.slice(0, i)).toLowerCase(),
                            r = n(t.slice(i + 1));
                        "undefined" == typeof e[s] ? e[s] = r : o(e[s]) ? e[s].push(r) : e[s] = [e[s], r]
                    }), e
                }
            }, {
                "for-each": 59,
                trim: 60
            }],
            62: [function(t, e, i) {
                function n() {
                    for (var t = {}, e = 0; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) s.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }
                e.exports = n;
                var s = Object.prototype.hasOwnProperty
            }, {}],
            63: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./button.js"),
                    a = n(r),
                    l = t("./component.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e), t.call(this, i, n)
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-big-play-button"
                        }, e.prototype.handleClick = function n() {
                            this.player_.play()
                        }, e
                    }(a["default"]);
                c.prototype.controlText_ = "Play Video", u["default"].registerComponent("BigPlayButton", c), i["default"] = c, e.exports = i["default"]
            }, {
                "./button.js": 64,
                "./component.js": 67
            }],
            64: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./clickable-component.js"),
                    l = s(a),
                    u = t("./component"),
                    c = s(u),
                    h = t("./utils/events.js"),
                    d = n(h),
                    p = t("./utils/fn.js"),
                    f = n(p),
                    g = t("./utils/log.js"),
                    m = s(g),
                    v = t("global/document"),
                    y = s(v),
                    b = t("object.assign"),
                    _ = s(b),
                    w = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? "button" : arguments[0],
                                e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            e = _["default"]({
                                className: this.buildCSSClass()
                            }, e), "button" !== t && (m["default"].warn("Creating a Button with an HTML element of " + t + " is deprecated; use ClickableComponent instead."), e = _["default"]({
                                tabIndex: 0
                            }, e), i = _["default"]({
                                role: "button"
                            }, i)), i = _["default"]({
                                type: "button",
                                "aria-live": "polite"
                            }, i);
                            var n = c["default"].prototype.createEl.call(this, t, e, i);
                            return this.createControlTextEl(n), n
                        }, e.prototype.addChild = function n(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                i = this.constructor.name;
                            return m["default"].warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), c["default"].prototype.addChild.call(this, t, e)
                        }, e.prototype.handleKeyPress = function s(e) {
                            32 === e.which || 13 === e.which || t.prototype.handleKeyPress.call(this, e)
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("Button", w), i["default"] = w, e.exports = i["default"]
            }, {
                "./clickable-component.js": 65,
                "./component": 67,
                "./utils/events.js": 135,
                "./utils/fn.js": 136,
                "./utils/log.js": 139,
                "global/document": 1,
                "object.assign": 45
            }],
            65: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./component"),
                    l = s(a),
                    u = t("./utils/dom.js"),
                    c = n(u),
                    h = t("./utils/events.js"),
                    d = n(h),
                    p = t("./utils/fn.js"),
                    f = n(p),
                    g = t("./utils/log.js"),
                    m = s(g),
                    v = t("global/document"),
                    y = s(v),
                    b = t("object.assign"),
                    _ = s(b),
                    w = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.emitTapEvents(), this.on("tap", this.handleClick), this.on("click", this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0],
                                i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            i = _["default"]({
                                className: this.buildCSSClass(),
                                tabIndex: 0
                            }, i), "button" === e && m["default"].error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = _["default"]({
                                role: "button",
                                "aria-live": "polite"
                            }, n);
                            var s = t.prototype.createEl.call(this, e, i, n);
                            return this.createControlTextEl(s), s
                        }, e.prototype.createControlTextEl = function n(t) {
                            return this.controlTextEl_ = c.createEl("span", {
                                className: "vjs-control-text"
                            }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_), this.controlTextEl_
                        }, e.prototype.controlText = function s(t) {
                            return t ? (this.controlText_ = t, this.controlTextEl_.innerHTML = this.localize(this.controlText_), this) : this.controlText_ || "Need Text"
                        }, e.prototype.buildCSSClass = function a() {
                            return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.addChild = function l(e) {
                            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            return t.prototype.addChild.call(this, e, i)
                        }, e.prototype.enable = function u() {
                            return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), this
                        }, e.prototype.disable = function h() {
                            return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), this
                        }, e.prototype.handleClick = function p() {}, e.prototype.handleFocus = function g() {
                            d.on(y["default"], "keydown", f.bind(this, this.handleKeyPress))
                        }, e.prototype.handleKeyPress = function v(e) {
                            32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleClick(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e);
                        }, e.prototype.handleBlur = function b() {
                            d.off(y["default"], "keydown", f.bind(this, this.handleKeyPress))
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("ClickableComponent", w), i["default"] = w, e.exports = i["default"]
            }, {
                "./component": 67,
                "./utils/dom.js": 134,
                "./utils/events.js": 135,
                "./utils/fn.js": 136,
                "./utils/log.js": 139,
                "global/document": 1,
                "object.assign": 45
            }],
            66: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./button"),
                    a = n(r),
                    l = t("./component"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e), t.call(this, i, n), this.controlText(n && n.controlText || this.localize("Close"))
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.handleClick = function n() {
                            this.trigger({
                                type: "close",
                                bubbles: !1
                            })
                        }, e
                    }(a["default"]);
                u["default"].registerComponent("CloseButton", c), i["default"] = c, e.exports = i["default"]
            }, {
                "./button": 64,
                "./component": 67
            }],
            67: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                i.__esModule = !0;
                var r = t("global/window"),
                    a = s(r),
                    l = t("./utils/dom.js"),
                    u = n(l),
                    c = t("./utils/fn.js"),
                    h = n(c),
                    d = t("./utils/guid.js"),
                    p = n(d),
                    f = t("./utils/events.js"),
                    g = n(f),
                    m = t("./utils/log.js"),
                    v = s(m),
                    y = t("./utils/to-title-case.js"),
                    b = s(y),
                    _ = t("object.assign"),
                    w = s(_),
                    x = t("./utils/merge-options.js"),
                    T = s(x),
                    k = function() {
                        function t(e, i, n) {
                            if (o(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = T["default"]({}, this.options_), i = this.options_ = T["default"](this.options_, i), this.id_ = i.id || i.el && i.el.id, !this.id_) {
                                var s = e && e.id && e.id() || "no_player";
                                this.id_ = s + "_component_" + p.newGUID()
                            }
                            this.name_ = i.name || null, i.el ? this.el_ = i.el : i.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, i.initChildren !== !1 && this.initChildren(), this.ready(n), i.reportTouchActivity !== !1 && this.enableTouchActivity()
                        }
                        return t.prototype.dispose = function e() {
                            if (this.trigger({
                                    type: "dispose",
                                    bubbles: !1
                                }), this.children_)
                                for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                            this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                        }, t.prototype.player = function i() {
                            return this.player_
                        }, t.prototype.options = function n(t) {
                            return v["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = T["default"](this.options_, t), this.options_) : this.options_
                        }, t.prototype.el = function s() {
                            return this.el_
                        }, t.prototype.createEl = function r(t, e, i) {
                            return u.createEl(t, e, i)
                        }, t.prototype.localize = function l(t) {
                            var e = this.player_.language && this.player_.language(),
                                i = this.player_.languages && this.player_.languages();
                            if (!e || !i) return t;
                            var n = i[e];
                            if (n && n[t]) return n[t];
                            var s = e.split("-")[0],
                                o = i[s];
                            return o && o[t] ? o[t] : t
                        }, t.prototype.contentEl = function c() {
                            return this.contentEl_ || this.el_
                        }, t.prototype.id = function d() {
                            return this.id_
                        }, t.prototype.name = function f() {
                            return this.name_
                        }, t.prototype.children = function m() {
                            return this.children_
                        }, t.prototype.getChildById = function y(t) {
                            return this.childIndex_[t]
                        }, t.prototype.getChild = function _(t) {
                            return this.childNameIndex_[t]
                        }, t.prototype.addChild = function x(e) {
                            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = arguments.length <= 2 || void 0 === arguments[2] ? this.children_.length : arguments[2],
                                s = void 0,
                                o = void 0;
                            if ("string" == typeof e) {
                                o = e, i || (i = {}), i === !0 && (v["default"].warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."), i = {});
                                var r = i.componentClass || b["default"](o);
                                i.name = o;
                                var a = t.getComponent(r);
                                if (!a) throw new Error("Component " + r + " does not exist");
                                if ("function" != typeof a) return null;
                                s = new a(this.player_ || this, i)
                            } else s = e;
                            if (this.children_.splice(n, 0, s), "function" == typeof s.id && (this.childIndex_[s.id()] = s), o = o || s.name && s.name(), o && (this.childNameIndex_[o] = s), "function" == typeof s.el && s.el()) {
                                var l = this.contentEl().children,
                                    u = l[n] || null;
                                this.contentEl().insertBefore(s.el(), u)
                            }
                            return s
                        }, t.prototype.removeChild = function k(t) {
                            if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                                for (var e = !1, i = this.children_.length - 1; i >= 0; i--)
                                    if (this.children_[i] === t) {
                                        e = !0, this.children_.splice(i, 1);
                                        break
                                    }
                                if (e) {
                                    this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                                    var n = t.el();
                                    n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                                }
                            }
                        }, t.prototype.initChildren = function C() {
                            var e = this,
                                i = this.options_.children;
                            i && ! function() {
                                var n = e.options_,
                                    s = function a(t) {
                                        var i = t.name,
                                            s = t.opts;
                                        if (void 0 !== n[i] && (s = n[i]), s !== !1) {
                                            s === !0 && (s = {}), s.playerOptions = e.options_.playerOptions;
                                            var o = e.addChild(i, s);
                                            o && (e[i] = o)
                                        }
                                    },
                                    o = void 0,
                                    r = t.getComponent("Tech");
                                o = Array.isArray(i) ? i : Object.keys(i), o.concat(Object.keys(e.options_).filter(function(t) {
                                    return !o.some(function(e) {
                                        return "string" == typeof e ? t === e : t === e.name
                                    })
                                })).map(function(t) {
                                    var n = void 0,
                                        s = void 0;
                                    return "string" == typeof t ? (n = t, s = i[n] || e.options_[n] || {}) : (n = t.name, s = t), {
                                        name: n,
                                        opts: s
                                    }
                                }).filter(function(e) {
                                    var i = t.getComponent(e.opts.componentClass || b["default"](e.name));
                                    return i && !r.isTech(i)
                                }).forEach(s)
                            }()
                        }, t.prototype.buildCSSClass = function j() {
                            return ""
                        }, t.prototype.on = function E(t, e, i) {
                            var n = this;
                            return "string" == typeof t || Array.isArray(t) ? g.on(this.el_, t, h.bind(this, e)) : ! function() {
                                var s = t,
                                    o = e,
                                    r = h.bind(n, i),
                                    a = function u() {
                                        return n.off(s, o, r)
                                    };
                                a.guid = r.guid, n.on("dispose", a);
                                var l = function c() {
                                    return n.off("dispose", a)
                                };
                                l.guid = r.guid, t.nodeName ? (g.on(s, o, r), g.on(s, "dispose", l)) : "function" == typeof t.on && (s.on(o, r), s.on("dispose", l))
                            }(), this
                        }, t.prototype.off = function S(t, e, i) {
                            if (!t || "string" == typeof t || Array.isArray(t)) g.off(this.el_, t, e);
                            else {
                                var n = t,
                                    s = e,
                                    o = h.bind(this, i);
                                this.off("dispose", o), t.nodeName ? (g.off(n, s, o), g.off(n, "dispose", o)) : (n.off(s, o), n.off("dispose", o))
                            }
                            return this
                        }, t.prototype.one = function O(t, e, i) {
                            var n = this,
                                s = arguments;
                            return "string" == typeof t || Array.isArray(t) ? g.one(this.el_, t, h.bind(this, e)) : ! function() {
                                var o = t,
                                    r = e,
                                    a = h.bind(n, i),
                                    l = function u() {
                                        n.off(o, r, u), a.apply(null, s)
                                    };
                                l.guid = a.guid, n.on(o, r, l)
                            }(), this
                        }, t.prototype.trigger = function P(t, e) {
                            return g.trigger(this.el_, t, e), this
                        }, t.prototype.ready = function D(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                            return t && (this.isReady_ ? e ? t.call(this) : this.setTimeout(t, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(t))), this
                        }, t.prototype.triggerReady = function M() {
                            this.isReady_ = !0, this.setTimeout(function() {
                                var t = this.readyQueue_;
                                this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(t) {
                                    t.call(this)
                                }, this), this.trigger("ready")
                            }, 1)
                        }, t.prototype.$ = function $(t, e) {
                            return u.$(t, e || this.contentEl())
                        }, t.prototype.$$ = function I(t, e) {
                            return u.$$(t, e || this.contentEl())
                        }, t.prototype.hasClass = function A(t) {
                            return u.hasElClass(this.el_, t)
                        }, t.prototype.addClass = function N(t) {
                            return u.addElClass(this.el_, t), this
                        }, t.prototype.removeClass = function H(t) {
                            return u.removeElClass(this.el_, t), this
                        }, t.prototype.toggleClass = function F(t, e) {
                            return u.toggleElClass(this.el_, t, e), this
                        }, t.prototype.show = function R() {
                            return this.removeClass("vjs-hidden"), this
                        }, t.prototype.hide = function z() {
                            return this.addClass("vjs-hidden"), this
                        }, t.prototype.lockShowing = function L() {
                            return this.addClass("vjs-lock-showing"), this
                        }, t.prototype.unlockShowing = function W() {
                            return this.removeClass("vjs-lock-showing"), this
                        }, t.prototype.width = function B(t, e) {
                            return this.dimension("width", t, e)
                        }, t.prototype.height = function V(t, e) {
                            return this.dimension("height", t, e)
                        }, t.prototype.dimensions = function Y(t, e) {
                            return this.width(t, !0).height(e)
                        }, t.prototype.dimension = function q(t, e, i) {
                            if (void 0 !== e) return (null === e || e !== e) && (e = 0), -1 !== ("" + e).indexOf("%") || -1 !== ("" + e).indexOf("px") ? this.el_.style[t] = e : "auto" === e ? this.el_.style[t] = "" : this.el_.style[t] = e + "px", i || this.trigger("resize"), this;
                            if (!this.el_) return 0;
                            var n = this.el_.style[t],
                                s = n.indexOf("px");
                            return -1 !== s ? parseInt(n.slice(0, s), 10) : parseInt(this.el_["offset" + b["default"](t)], 10)
                        }, t.prototype.currentDimension = function U(t) {
                            var e = 0;
                            if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
                            if ("function" == typeof a["default"].getComputedStyle) {
                                var i = a["default"].getComputedStyle(this.el_);
                                e = i.getPropertyValue(t) || i[t]
                            } else if (this.el_.currentStyle) {
                                var n = "offset" + b["default"](t);
                                e = this.el_[n]
                            }
                            return e = parseFloat(e)
                        }, t.prototype.currentDimensions = function K() {
                            return {
                                width: this.currentDimension("width"),
                                height: this.currentDimension("height")
                            }
                        }, t.prototype.currentWidth = function X() {
                            return this.currentDimension("width")
                        }, t.prototype.currentHeight = function G() {
                            return this.currentDimension("height")
                        }, t.prototype.emitTapEvents = function J() {
                            var t = 0,
                                e = null,
                                i = 10,
                                n = 200,
                                s = void 0;
                            this.on("touchstart", function(i) {
                                1 === i.touches.length && (e = w["default"]({}, i.touches[0]), t = (new Date).getTime(), s = !0)
                            }), this.on("touchmove", function(t) {
                                if (t.touches.length > 1) s = !1;
                                else if (e) {
                                    var n = t.touches[0].pageX - e.pageX,
                                        o = t.touches[0].pageY - e.pageY,
                                        r = Math.sqrt(n * n + o * o);
                                    r > i && (s = !1)
                                }
                            });
                            var o = function r() {
                                s = !1
                            };
                            this.on("touchleave", o), this.on("touchcancel", o), this.on("touchend", function(i) {
                                if (e = null, s === !0) {
                                    var o = (new Date).getTime() - t;
                                    n > o && (i.preventDefault(), this.trigger("tap"))
                                }
                            })
                        }, t.prototype.enableTouchActivity = function Z() {
                            if (this.player() && this.player().reportUserActivity) {
                                var t = h.bind(this.player(), this.player().reportUserActivity),
                                    e = void 0;
                                this.on("touchstart", function() {
                                    t(), this.clearInterval(e), e = this.setInterval(t, 250)
                                });
                                var i = function n(i) {
                                    t(), this.clearInterval(e)
                                };
                                this.on("touchmove", t), this.on("touchend", i), this.on("touchcancel", i)
                            }
                        }, t.prototype.setTimeout = function Q(t, e) {
                            t = h.bind(this, t);
                            var i = a["default"].setTimeout(t, e),
                                n = function s() {
                                    this.clearTimeout(i)
                                };
                            return n.guid = "vjs-timeout-" + i, this.on("dispose", n), i
                        }, t.prototype.clearTimeout = function tt(t) {
                            a["default"].clearTimeout(t);
                            var e = function i() {};
                            return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
                        }, t.prototype.setInterval = function et(t, e) {
                            t = h.bind(this, t);
                            var i = a["default"].setInterval(t, e),
                                n = function s() {
                                    this.clearInterval(i)
                                };
                            return n.guid = "vjs-interval-" + i, this.on("dispose", n), i
                        }, t.prototype.clearInterval = function it(t) {
                            a["default"].clearInterval(t);
                            var e = function i() {};
                            return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
                        }, t.registerComponent = function nt(e, i) {
                            return t.components_ || (t.components_ = {}), t.components_[e] = i, i
                        }, t.getComponent = function st(e) {
                            return t.components_ && t.components_[e] ? t.components_[e] : a["default"] && a["default"].videojs && a["default"].videojs[e] ? (v["default"].warn("The " + e + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), a["default"].videojs[e]) : void 0
                        }, t.extend = function ot(e) {
                            e = e || {}, v["default"].warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");
                            var i = e.init || e.init || this.prototype.init || this.prototype.init || function() {},
                                n = function o() {
                                    i.apply(this, arguments)
                                };
                            n.prototype = Object.create(this.prototype), n.prototype.constructor = n, n.extend = t.extend;
                            for (var s in e) e.hasOwnProperty(s) && (n.prototype[s] = e[s]);
                            return n
                        }, t
                    }();
                k.registerComponent("Component", k), i["default"] = k, e.exports = i["default"]
            }, {
                "./utils/dom.js": 134,
                "./utils/events.js": 135,
                "./utils/fn.js": 136,
                "./utils/guid.js": 138,
                "./utils/log.js": 139,
                "./utils/merge-options.js": 140,
                "./utils/to-title-case.js": 143,
                "global/window": 2,
                "object.assign": 45
            }],
            68: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../component.js"),
                    a = n(r),
                    l = t("./play-toggle.js"),
                    u = n(l),
                    c = t("./time-controls/current-time-display.js"),
                    h = n(c),
                    d = t("./time-controls/duration-display.js"),
                    p = n(d),
                    f = t("./time-controls/time-divider.js"),
                    g = n(f),
                    m = t("./time-controls/remaining-time-display.js"),
                    v = n(m),
                    y = t("./live-display.js"),
                    b = n(y),
                    _ = t("./progress-control/progress-control.js"),
                    w = n(_),
                    x = t("./fullscreen-toggle.js"),
                    T = n(x),
                    k = t("./volume-control/volume-control.js"),
                    C = n(k),
                    j = t("./volume-menu-button.js"),
                    E = n(j),
                    S = t("./mute-toggle.js"),
                    O = n(S),
                    P = t("./text-track-controls/chapters-button.js"),
                    D = n(P),
                    M = t("./text-track-controls/descriptions-button.js"),
                    I = n(M),
                    A = t("./text-track-controls/subtitles-button.js"),
                    N = n(A),
                    H = t("./text-track-controls/captions-button.js"),
                    F = n(H),
                    R = t("./playback-rate-menu/playback-rate-menu-button.js"),
                    z = n(R),
                    L = t("./spacer-controls/custom-control-spacer.js"),
                    W = n(L),
                    B = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-control-bar",
                                dir: "ltr"
                            }, {
                                role: "group"
                            })
                        }, e
                    }(a["default"]);
                B.prototype.options_ = {
                    loadEvent: "play",
                    children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "fullscreenToggle"]
                }, a["default"].registerComponent("ControlBar", B), i["default"] = B, e.exports = i["default"]
            }, {
                "../component.js": 67,
                "./fullscreen-toggle.js": 69,
                "./live-display.js": 70,
                "./mute-toggle.js": 71,
                "./play-toggle.js": 72,
                "./playback-rate-menu/playback-rate-menu-button.js": 73,
                "./progress-control/progress-control.js": 78,
                "./spacer-controls/custom-control-spacer.js": 81,
                "./text-track-controls/captions-button.js": 84,
                "./text-track-controls/chapters-button.js": 85,
                "./text-track-controls/descriptions-button.js": 87,
                "./text-track-controls/subtitles-button.js": 89,
                "./time-controls/current-time-display.js": 92,
                "./time-controls/duration-display.js": 93,
                "./time-controls/remaining-time-display.js": 94,
                "./time-controls/time-divider.js": 95,
                "./volume-control/volume-control.js": 97,
                "./volume-menu-button.js": 99
            }],
            69: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../button.js"),
                    a = n(r),
                    l = t("../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.handleClick = function n() {
                            this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText("Non-Fullscreen"))
                        }, e
                    }(a["default"]);
                c.prototype.controlText_ = "Fullscreen", u["default"].registerComponent("FullscreenToggle", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../button.js": 64,
                "../component.js": 67
            }],
            70: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../component"),
                    l = s(a),
                    u = t("../utils/dom.js"),
                    c = n(u),
                    h = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.updateShowing(), this.on(this.player(), "durationchange", this.updateShowing)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = t.prototype.createEl.call(this, "div", {
                                className: "vjs-live-control vjs-control"
                            });
                            return this.contentEl_ = c.createEl("div", {
                                className: "vjs-live-display",
                                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                            }, {
                                "aria-live": "off"
                            }), e.appendChild(this.contentEl_), e
                        }, e.prototype.updateShowing = function n() {
                            this.player().duration() === 1 / 0 ? this.show() : this.hide()
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("LiveDisplay", h), i["default"] = h, e.exports = i["default"]
            }, {
                "../component": 67,
                "../utils/dom.js": 134
            }],
            71: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../button"),
                    l = s(a),
                    u = t("../component"),
                    c = s(u),
                    h = t("../utils/dom.js"),
                    d = n(h),
                    p = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "volumechange", this.update), i.tech_ && i.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(i, "loadstart", function() {
                                this.update(), i.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                            })
                        }
                        return r(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.handleClick = function n() {
                            this.player_.muted(this.player_.muted() ? !1 : !0)
                        }, e.prototype.update = function s() {
                            var t = this.player_.volume(),
                                e = 3;
                            0 === t || this.player_.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2);
                            var i = this.player_.muted() ? "Unmute" : "Mute";
                            this.controlText() !== i && this.controlText(i);
                            for (var n = 0; 4 > n; n++) d.removeElClass(this.el_, "vjs-vol-" + n);
                            d.addElClass(this.el_, "vjs-vol-" + e)
                        }, e
                    }(l["default"]);
                p.prototype.controlText_ = "Mute", c["default"].registerComponent("MuteToggle", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../button": 64,
                "../component": 67,
                "../utils/dom.js": 134
            }],
            72: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../button.js"),
                    a = n(r),
                    l = t("../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e), t.call(this, i, n), this.on(i, "play", this.handlePlay), this.on(i, "pause", this.handlePause)
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.handleClick = function n() {
                            this.player_.paused() ? this.player_.play() : this.player_.pause()
                        }, e.prototype.handlePlay = function r() {
                            this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                        }, e.prototype.handlePause = function a() {
                            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                        }, e
                    }(a["default"]);
                c.prototype.controlText_ = "Play", u["default"].registerComponent("PlayToggle", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../button.js": 64,
                "../component.js": 67
            }],
            73: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../menu/menu-button.js"),
                    l = s(a),
                    u = t("../../menu/menu.js"),
                    c = s(u),
                    h = t("./playback-rate-menu-item.js"),
                    d = s(h),
                    p = t("../../component.js"),
                    f = s(p),
                    g = t("../../utils/dom.js"),
                    m = n(g),
                    v = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.updateVisibility(), this.updateLabel(), this.on(i, "loadstart", this.updateVisibility), this.on(i, "ratechange", this.updateLabel)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = t.prototype.createEl.call(this);
                            return this.labelEl_ = m.createEl("div", {
                                className: "vjs-playback-rate-value",
                                innerHTML: 1
                            }), e.appendChild(this.labelEl_), e
                        }, e.prototype.buildCSSClass = function n() {
                            return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.createMenu = function s() {
                            var t = new c["default"](this.player()),
                                e = this.playbackRates();
                            if (e)
                                for (var i = e.length - 1; i >= 0; i--) t.addChild(new d["default"](this.player(), {
                                    rate: e[i] + "x"
                                }));
                            return t
                        }, e.prototype.updateARIAAttributes = function a() {
                            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                        }, e.prototype.handleClick = function l() {
                            for (var t = this.player().playbackRate(), e = this.playbackRates(), i = e[0], n = 0; n < e.length; n++)
                                if (e[n] > t) {
                                    i = e[n];
                                    break
                                }
                            this.player().playbackRate(i)
                        }, e.prototype.playbackRates = function u() {
                            return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                        }, e.prototype.playbackRateSupported = function h() {
                            return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                        }, e.prototype.updateVisibility = function p() {
                            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                        }, e.prototype.updateLabel = function f() {
                            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                        }, e
                    }(l["default"]);
                v.prototype.controlText_ = "Playback Rate", f["default"].registerComponent("PlaybackRateMenuButton", v), i["default"] = v, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../menu/menu-button.js": 106,
                "../../menu/menu.js": 108,
                "../../utils/dom.js": 134,
                "./playback-rate-menu-item.js": 74
            }],
            74: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../../menu/menu-item.js"),
                    a = n(r),
                    l = t("../../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e);
                            var o = n.rate,
                                r = parseFloat(o, 10);
                            n.label = o, n.selected = 1 === r, t.call(this, i, n), this.label = o, this.rate = r, this.on(i, "ratechange", this.update)
                        }
                        return o(e, t), e.prototype.handleClick = function i() {
                            t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                        }, e.prototype.update = function n() {
                            this.selected(this.player().playbackRate() === this.rate)
                        }, e
                    }(a["default"]);
                c.prototype.contentElType = "button", u["default"].registerComponent("PlaybackRateMenuItem", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../menu/menu-item.js": 107
            }],
            75: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../component.js"),
                    l = s(a),
                    u = t("../../utils/dom.js"),
                    c = n(u),
                    h = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "progress", this.update)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-load-progress",
                                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                            })
                        }, e.prototype.update = function n() {
                            var t = this.player_.buffered(),
                                e = this.player_.duration(),
                                i = this.player_.bufferedEnd(),
                                n = this.el_.children,
                                s = function u(t, e) {
                                    var i = t / e || 0;
                                    return 100 * (i >= 1 ? 1 : i) + "%"
                                };
                            this.el_.style.width = s(i, e);
                            for (var o = 0; o < t.length; o++) {
                                var r = t.start(o),
                                    a = t.end(o),
                                    l = n[o];
                                l || (l = this.el_.appendChild(c.createEl())), l.style.left = s(r, i), l.style.width = s(a - r, i)
                            }
                            for (var o = n.length; o > t.length; o--) this.el_.removeChild(n[o - 1])
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("LoadProgressBar", h), i["default"] = h, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134
            }],
            76: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("global/window"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("../../utils/dom.js"),
                    d = n(h),
                    p = t("../../utils/fn.js"),
                    f = n(p),
                    g = t("../../utils/format-time.js"),
                    m = s(g),
                    v = t("lodash-compat/function/throttle"),
                    y = s(v),
                    b = function(t) {
                        function e(i, n) {
                            var s = this;
                            o(this, e), t.call(this, i, n), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (this.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), this.keepTooltipsInside && (this.tooltip = d.createEl("div", {
                                className: "vjs-time-tooltip"
                            }), this.el().appendChild(this.tooltip), this.addClass("vjs-keep-tooltips-inside")), this.update(0, 0), i.on("ready", function() {
                                s.on(i.controlBar.progressControl.el(), "mousemove", y["default"](f.bind(s, s.handleMouseMove), 25))
                            })
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-mouse-display"
                            })
                        }, e.prototype.handleMouseMove = function n(t) {
                            var e = this.player_.duration(),
                                i = this.calculateDistance(t) * e,
                                n = t.pageX - d.findElPosition(this.el().parentNode).left;
                            this.update(i, n)
                        }, e.prototype.update = function s(t, e) {
                            var i = m["default"](t, this.player_.duration());
                            if (this.el().style.left = e + "px", this.el().setAttribute("data-current-time", i), this.keepTooltipsInside) {
                                var n = this.clampPosition_(e),
                                    s = e - n + 1,
                                    o = parseFloat(l["default"].getComputedStyle(this.tooltip).width),
                                    r = o / 2;
                                this.tooltip.innerHTML = i, this.tooltip.style.right = "-" + (r - s) + "px"
                            }
                        }, e.prototype.calculateDistance = function a(t) {
                            return d.getPointerPosition(this.el().parentNode, t).x
                        }, e.prototype.clampPosition_ = function u(t) {
                            if (!this.keepTooltipsInside) return t;
                            var e = parseFloat(l["default"].getComputedStyle(this.player().el()).width),
                                i = parseFloat(l["default"].getComputedStyle(this.tooltip).width),
                                n = i / 2,
                                s = t;
                            return n > t ? s = Math.ceil(n) : t > e - n && (s = Math.floor(e - n)), s
                        }, e
                    }(c["default"]);
                c["default"].registerComponent("MouseTimeDisplay", b), i["default"] = b, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134,
                "../../utils/fn.js": 136,
                "../../utils/format-time.js": 137,
                "global/window": 2,
                "lodash-compat/function/throttle": 7
            }],
            77: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../component.js"),
                    l = s(a),
                    u = t("../../utils/fn.js"),
                    c = n(u),
                    h = t("../../utils/dom.js"),
                    d = n(h),
                    p = t("../../utils/format-time.js"),
                    f = s(p),
                    g = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.updateDataAttr(), this.on(i, "timeupdate", this.updateDataAttr), i.ready(c.bind(this, this.updateDataAttr)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (this.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), this.keepTooltipsInside && this.addClass("vjs-keep-tooltips-inside")
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-play-progress vjs-slider-bar",
                                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                            })
                        }, e.prototype.updateDataAttr = function n() {
                            var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                            this.el_.setAttribute("data-current-time", f["default"](t, this.player_.duration()))
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("PlayProgressBar", g), i["default"] = g, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134,
                "../../utils/fn.js": 136,
                "../../utils/format-time.js": 137
            }],
            78: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../../component.js"),
                    a = n(r),
                    l = t("./seek-bar.js"),
                    u = n(l),
                    c = t("./mouse-time-display.js"),
                    h = n(c),
                    d = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-progress-control vjs-control"
                            })
                        }, e
                    }(a["default"]);
                d.prototype.options_ = {
                    children: ["seekBar"]
                }, a["default"].registerComponent("ProgressControl", d), i["default"] = d, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./mouse-time-display.js": 76,
                "./seek-bar.js": 79
            }],
            79: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("global/window"),
                    l = s(a),
                    u = t("../../slider/slider.js"),
                    c = s(u),
                    h = t("../../component.js"),
                    d = s(h),
                    p = t("./load-progress-bar.js"),
                    f = s(p),
                    g = t("./play-progress-bar.js"),
                    m = s(g),
                    v = t("./tooltip-progress-bar.js"),
                    y = s(v),
                    b = t("../../utils/fn.js"),
                    _ = n(b),
                    w = t("../../utils/format-time.js"),
                    x = s(w),
                    T = t("object.assign"),
                    k = s(T),
                    C = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "timeupdate", this.updateProgress), this.on(i, "ended", this.updateProgress), i.ready(_.bind(this, this.updateProgress)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (this.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), this.keepTooltipsInside && (this.tooltipProgressBar = this.addChild("TooltipProgressBar"))
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-progress-holder"
                            }, {
                                "aria-label": "progress bar"
                            })
                        }, e.prototype.updateProgress = function n() {
                            if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) {
                                this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;
                                var t = parseFloat(l["default"].getComputedStyle(this.player().el()).width),
                                    e = parseFloat(l["default"].getComputedStyle(this.tooltipProgressBar.tooltip).width),
                                    i = this.tooltipProgressBar.el().style;
                                i.maxWidth = Math.floor(t - e / 2) + "px", i.minWidth = Math.ceil(e / 2) + "px", i.right = "-" + e / 2 + "px"
                            }
                        }, e.prototype.updateAriaAttributes = function s(t) {
                            var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                            t.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), t.setAttribute("aria-valuetext", x["default"](e, this.player_.duration()))
                        }, e.prototype.getPercent = function a() {
                            var t = this.player_.currentTime() / this.player_.duration();
                            return t >= 1 ? 1 : t
                        }, e.prototype.handleMouseDown = function u(e) {
                            t.prototype.handleMouseDown.call(this, e), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
                        }, e.prototype.handleMouseMove = function c(t) {
                            var e = this.calculateDistance(t) * this.player_.duration();
                            e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                        }, e.prototype.handleMouseUp = function h(e) {
                            t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                        }, e.prototype.stepForward = function d() {
                            this.player_.currentTime(this.player_.currentTime() + 5)
                        }, e.prototype.stepBack = function p() {
                            this.player_.currentTime(this.player_.currentTime() - 5)
                        }, e
                    }(c["default"]);
                C.prototype.options_ = {
                    children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                    barName: "playProgressBar"
                }, C.prototype.playerEvent = "timeupdate", d["default"].registerComponent("SeekBar", C), i["default"] = C, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../slider/slider.js": 116,
                "../../utils/fn.js": 136,
                "../../utils/format-time.js": 137,
                "./load-progress-bar.js": 75,
                "./play-progress-bar.js": 77,
                "./tooltip-progress-bar.js": 80,
                "global/window": 2,
                "object.assign": 45
            }],
            80: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../component.js"),
                    l = s(a),
                    u = t("../../utils/fn.js"),
                    c = n(u),
                    h = t("../../utils/dom.js"),
                    d = n(h),
                    p = t("../../utils/format-time.js"),
                    f = s(p),
                    g = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.updateDataAttr(), this.on(i, "timeupdate", this.updateDataAttr), i.ready(c.bind(this, this.updateDataAttr))
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = t.prototype.createEl.call(this, "div", {
                                className: "vjs-tooltip-progress-bar vjs-slider-bar",
                                innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                            });
                            return this.tooltip = e.querySelector(".vjs-time-tooltip"), e
                        }, e.prototype.updateDataAttr = function n() {
                            var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                                e = f["default"](t, this.player_.duration());
                            this.el_.setAttribute("data-current-time", e), this.tooltip.innerHTML = e
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("TooltipProgressBar", g), i["default"] = g, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134,
                "../../utils/fn.js": 136,
                "../../utils/format-time.js": 137
            }],
            81: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./spacer.js"),
                    a = n(r),
                    l = t("../../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.createEl = function n() {
                            var e = t.prototype.createEl.call(this, {
                                className: this.buildCSSClass()
                            });
                            return e.innerHTML = "&nbsp;", e
                        }, e
                    }(a["default"]);
                u["default"].registerComponent("CustomControlSpacer", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./spacer.js": 82
            }],
            82: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../../component.js"),
                    a = n(r),
                    l = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.createEl = function n() {
                            return t.prototype.createEl.call(this, "div", {
                                className: this.buildCSSClass()
                            })
                        }, e
                    }(a["default"]);
                a["default"].registerComponent("Spacer", l), i["default"] = l, e.exports = i["default"]
            }, {
                "../../component.js": 67
            }],
            83: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./text-track-menu-item.js"),
                    a = n(r),
                    l = t("../../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e), n.track = {
                                kind: n.kind,
                                player: i,
                                label: n.kind + " settings",
                                selectable: !1,
                                "default": !1,
                                mode: "disabled"
                            }, n.selectable = !1, t.call(this, i, n), this.addClass("vjs-texttrack-settings"), this.controlText(", opens " + n.kind + " settings dialog")
                        }
                        return o(e, t), e.prototype.handleClick = function i() {
                            this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus()
                        }, e
                    }(a["default"]);
                u["default"].registerComponent("CaptionSettingsMenuItem", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./text-track-menu-item.js": 91
            }],
            84: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./text-track-button.js"),
                    a = n(r),
                    l = t("../../component.js"),
                    u = n(l),
                    c = t("./caption-settings-menu-item.js"),
                    h = n(c),
                    d = function(t) {
                        function e(i, n, o) {
                            s(this, e), t.call(this, i, n, o), this.el_.setAttribute("aria-label", "Captions Menu")
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.update = function n() {
                            var e = 2;
                            t.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (e = 1), this.items && this.items.length > e ? this.show() : this.hide()
                        }, e.prototype.createItems = function r() {
                            var e = [];
                            return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || e.push(new h["default"](this.player_, {
                                kind: this.kind_
                            })), t.prototype.createItems.call(this, e)
                        }, e
                    }(a["default"]);
                d.prototype.kind_ = "captions", d.prototype.controlText_ = "Captions", u["default"].registerComponent("CaptionsButton", d), i["default"] = d, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./caption-settings-menu-item.js": 83,
                "./text-track-button.js": 90
            }],
            85: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./text-track-button.js"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("./text-track-menu-item.js"),
                    d = s(h),
                    p = t("./chapters-track-menu-item.js"),
                    f = s(p),
                    g = t("../../menu/menu.js"),
                    m = s(g),
                    v = t("../../utils/dom.js"),
                    y = n(v),
                    b = t("../../utils/fn.js"),
                    _ = n(b),
                    w = t("../../utils/to-title-case.js"),
                    x = s(w),
                    T = t("global/window"),
                    k = s(T),
                    C = function(t) {
                        function e(i, n, s) {
                            o(this, e), t.call(this, i, n, s), this.el_.setAttribute("aria-label", "Chapters Menu")
                        }
                        return r(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.createItems = function n() {
                            var t = [],
                                e = this.player_.textTracks();
                            if (!e) return t;
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.kind === this.kind_ && t.push(new d["default"](this.player_, {
                                    track: n
                                }))
                            }
                            return t
                        }, e.prototype.createMenu = function s() {
                            for (var t = this, e = this.player_.textTracks() || [], i = void 0, n = this.items = [], s = 0, o = e.length; o > s; s++) {
                                var r = e[s];
                                if (r.kind === this.kind_) {
                                    i = r;
                                    break
                                }
                            }
                            var a = this.menu;
                            if (void 0 === a) {
                                a = new m["default"](this.player_);
                                var l = y.createEl("li", {
                                    className: "vjs-menu-title",
                                    innerHTML: x["default"](this.kind_),
                                    tabIndex: -1
                                });
                                a.children_.unshift(l), y.insertElFirst(l, a.contentEl())
                            }
                            if (i && null == i.cues) {
                                i.mode = "hidden";
                                var u = this.player_.remoteTextTrackEls().getTrackElementByTrack_(i);
                                u && u.addEventListener("load", function(e) {
                                    return t.update()
                                })
                            }
                            if (i && i.cues && i.cues.length > 0) {
                                for (var c = i.cues, h = void 0, s = 0, d = c.length; d > s; s++) {
                                    h = c[s];
                                    var p = new f["default"](this.player_, {
                                        track: i,
                                        cue: h
                                    });
                                    n.push(p), a.addChild(p)
                                }
                                this.addChild(a)
                            }
                            return this.items.length > 0 && this.show(), a
                        }, e
                    }(l["default"]);
                C.prototype.kind_ = "chapters", C.prototype.controlText_ = "Chapters", c["default"].registerComponent("ChaptersButton", C), i["default"] = C, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../menu/menu.js": 108,
                "../../utils/dom.js": 134,
                "../../utils/fn.js": 136,
                "../../utils/to-title-case.js": 143,
                "./chapters-track-menu-item.js": 86,
                "./text-track-button.js": 90,
                "./text-track-menu-item.js": 91,
                "global/window": 2
            }],
            86: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../menu/menu-item.js"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("../../utils/fn.js"),
                    d = n(h),
                    p = function(t) {
                        function e(i, n) {
                            o(this, e);
                            var s = n.track,
                                r = n.cue,
                                a = i.currentTime();
                            n.label = r.text, n.selected = r.startTime <= a && a < r.endTime, t.call(this, i, n), this.track = s, this.cue = r, s.addEventListener("cuechange", d.bind(this, this.update))
                        }
                        return r(e, t), e.prototype.handleClick = function i() {
                            t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                        }, e.prototype.update = function n() {
                            var t = this.cue,
                                e = this.player_.currentTime();
                            this.selected(t.startTime <= e && e < t.endTime)
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("ChaptersTrackMenuItem", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../menu/menu-item.js": 107,
                "../../utils/fn.js": 136
            }],
            87: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./text-track-button.js"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("../../utils/fn.js"),
                    d = n(h),
                    p = function(t) {
                        function e(i, n, s) {
                            var r = this;
                            o(this, e), t.call(this, i, n, s), this.el_.setAttribute("aria-label", "Descriptions Menu");
                            var a = i.textTracks();
                            a && ! function() {
                                var t = d.bind(r, r.handleTracksChange);
                                a.addEventListener("change", t), r.on("dispose", function() {
                                    a.removeEventListener("change", t)
                                })
                            }()
                        }
                        return r(e, t), e.prototype.handleTracksChange = function i(t) {
                            for (var e = this.player().textTracks(), i = !1, n = 0, s = e.length; s > n; n++) {
                                var o = e[n];
                                if (o.kind !== this.kind_ && "showing" === o.mode) {
                                    i = !0;
                                    break
                                }
                            }
                            i ? this.disable() : this.enable()
                        }, e.prototype.buildCSSClass = function n() {
                            return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
                        }, e
                    }(l["default"]);
                p.prototype.kind_ = "descriptions", p.prototype.controlText_ = "Descriptions", c["default"].registerComponent("DescriptionsButton", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/fn.js": 136,
                "./text-track-button.js": 90
            }],
            88: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./text-track-menu-item.js"),
                    a = n(r),
                    l = t("../../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e), n.track = {
                                kind: n.kind,
                                player: i,
                                label: n.kind + " off",
                                "default": !1,
                                mode: "disabled"
                            }, n.selectable = !0, t.call(this, i, n), this.selected(!0)
                        }
                        return o(e, t), e.prototype.handleTracksChange = function i(t) {
                            for (var e = this.player().textTracks(), i = !0, n = 0, s = e.length; s > n; n++) {
                                var o = e[n];
                                if (o.kind === this.track.kind && "showing" === o.mode) {
                                    i = !1;
                                    break
                                }
                            }
                            this.selected(i)
                        }, e
                    }(a["default"]);
                u["default"].registerComponent("OffTextTrackMenuItem", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./text-track-menu-item.js": 91
            }],
            89: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./text-track-button.js"),
                    a = n(r),
                    l = t("../../component.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n, o) {
                            s(this, e), t.call(this, i, n, o), this.el_.setAttribute("aria-label", "Subtitles Menu")
                        }
                        return o(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
                        }, e
                    }(a["default"]);
                c.prototype.kind_ = "subtitles", c.prototype.controlText_ = "Subtitles", u["default"].registerComponent("SubtitlesButton", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./text-track-button.js": 90
            }],
            90: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../menu/menu-button.js"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("../../utils/fn.js"),
                    d = n(h),
                    p = t("./text-track-menu-item.js"),
                    f = s(p),
                    g = t("./off-text-track-menu-item.js"),
                    m = s(g),
                    v = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n);
                            var s = this.player_.textTracks();
                            if (this.items.length <= 1 && this.hide(), s) {
                                var r = d.bind(this, this.update);
                                s.addEventListener("removetrack", r), s.addEventListener("addtrack", r), this.player_.on("dispose", function() {
                                    s.removeEventListener("removetrack", r), s.removeEventListener("addtrack", r)
                                })
                            }
                        }
                        return r(e, t), e.prototype.createItems = function i() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                            t.push(new m["default"](this.player_, {
                                kind: this.kind_
                            }));
                            var e = this.player_.textTracks();
                            if (!e) return t;
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n.kind === this.kind_ && t.push(new f["default"](this.player_, {
                                    selectable: !0,
                                    track: n
                                }))
                            }
                            return t
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("TextTrackButton", v), i["default"] = v, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../menu/menu-button.js": 106,
                "../../utils/fn.js": 136,
                "./off-text-track-menu-item.js": 88,
                "./text-track-menu-item.js": 91
            }],
            91: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../menu/menu-item.js"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("../../utils/fn.js"),
                    d = n(h),
                    p = t("global/window"),
                    f = s(p),
                    g = t("global/document"),
                    m = s(g),
                    v = function(t) {
                        function e(i, n) {
                            var s = this;
                            o(this, e);
                            var r = n.track,
                                a = i.textTracks();
                            n.label = r.label || r.language || "Unknown", n.selected = r["default"] || "showing" === r.mode, t.call(this, i, n), this.track = r, a && ! function() {
                                var t = d.bind(s, s.handleTracksChange);
                                a.addEventListener("change", t), s.on("dispose", function() {
                                    a.removeEventListener("change", t)
                                })
                            }(), a && void 0 === a.onchange && ! function() {
                                var t = void 0;
                                s.on(["tap", "click"], function() {
                                    if ("object" != typeof f["default"].Event) try {
                                        t = new f["default"].Event("change")
                                    } catch (e) {}
                                    t || (t = m["default"].createEvent("Event"), t.initEvent("change", !0, !0)), a.dispatchEvent(t)
                                })
                            }()
                        }
                        return r(e, t), e.prototype.handleClick = function i(e) {
                            var i = this.track.kind,
                                n = this.player_.textTracks();
                            if (t.prototype.handleClick.call(this, e), n)
                                for (var s = 0; s < n.length; s++) {
                                    var o = n[s];
                                    o.kind === i && (o === this.track ? o.mode = "showing" : o.mode = "disabled")
                                }
                        }, e.prototype.handleTracksChange = function n(t) {
                            this.selected("showing" === this.track.mode)
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("TextTrackMenuItem", v), i["default"] = v, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../menu/menu-item.js": 107,
                "../../utils/fn.js": 136,
                "global/document": 1,
                "global/window": 2
            }],
            92: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../component.js"),
                    l = s(a),
                    u = t("../../utils/dom.js"),
                    c = n(u),
                    h = t("../../utils/format-time.js"),
                    d = s(h),
                    p = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "timeupdate", this.updateContent)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = t.prototype.createEl.call(this, "div", {
                                className: "vjs-current-time vjs-time-control vjs-control"
                            });
                            return this.contentEl_ = c.createEl("div", {
                                className: "vjs-current-time-display",
                                innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                            }, {
                                "aria-live": "off"
                            }), e.appendChild(this.contentEl_), e
                        }, e.prototype.updateContent = function n() {
                            var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                                e = this.localize("Current Time"),
                                i = d["default"](t, this.player_.duration());
                            i !== this.formattedTime_ && (this.formattedTime_ = i, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + i)
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("CurrentTimeDisplay", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134,
                "../../utils/format-time.js": 137
            }],
            93: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../component.js"),
                    l = s(a),
                    u = t("../../utils/dom.js"),
                    c = n(u),
                    h = t("../../utils/format-time.js"),
                    d = s(h),
                    p = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "timeupdate", this.updateContent), this.on(i, "loadedmetadata", this.updateContent)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = t.prototype.createEl.call(this, "div", {
                                className: "vjs-duration vjs-time-control vjs-control"
                            });
                            return this.contentEl_ = c.createEl("div", {
                                className: "vjs-duration-display",
                                innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                            }, {
                                "aria-live": "off"
                            }), e.appendChild(this.contentEl_), e
                        }, e.prototype.updateContent = function n() {
                            var t = this.player_.duration();
                            if (t && this.duration_ !== t) {
                                this.duration_ = t;
                                var e = this.localize("Duration Time"),
                                    i = d["default"](t);
                                this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + i
                            }
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("DurationDisplay", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134,
                "../../utils/format-time.js": 137
            }],
            94: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../component.js"),
                    l = s(a),
                    u = t("../../utils/dom.js"),
                    c = n(u),
                    h = t("../../utils/format-time.js"),
                    d = s(h),
                    p = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "timeupdate", this.updateContent)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var e = t.prototype.createEl.call(this, "div", {
                                className: "vjs-remaining-time vjs-time-control vjs-control"
                            });
                            return this.contentEl_ = c.createEl("div", {
                                className: "vjs-remaining-time-display",
                                innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                            }, {
                                "aria-live": "off"
                            }), e.appendChild(this.contentEl_), e
                        }, e.prototype.updateContent = function n() {
                            if (this.player_.duration()) {
                                var t = this.localize("Remaining Time"),
                                    e = d["default"](this.player_.remainingTime());
                                e !== this.formattedTime_ && (this.formattedTime_ = e, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> -" + e)
                            }
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("RemainingTimeDisplay", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../utils/dom.js": 134,
                "../../utils/format-time.js": 137
            }],
            95: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../../component.js"),
                    a = n(r),
                    l = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-time-control vjs-time-divider",
                                innerHTML: "<div><span>/</span></div>"
                            })
                        }, e
                    }(a["default"]);
                a["default"].registerComponent("TimeDivider", l), i["default"] = l, e.exports = i["default"]
            }, {
                "../../component.js": 67
            }],
            96: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../../slider/slider.js"),
                    l = s(a),
                    u = t("../../component.js"),
                    c = s(u),
                    h = t("../../utils/fn.js"),
                    d = n(h),
                    p = t("./volume-level.js"),
                    f = s(p),
                    g = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "volumechange", this.updateARIAAttributes), i.ready(d.bind(this, this.updateARIAAttributes))
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-volume-bar vjs-slider-bar"
                            }, {
                                "aria-label": "volume level"
                            })
                        }, e.prototype.handleMouseMove = function n(t) {
                            this.checkMuted(), this.player_.volume(this.calculateDistance(t))
                        }, e.prototype.checkMuted = function s() {
                            this.player_.muted() && this.player_.muted(!1)
                        }, e.prototype.getPercent = function a() {
                            return this.player_.muted() ? 0 : this.player_.volume()
                        }, e.prototype.stepForward = function l() {
                            this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                        }, e.prototype.stepBack = function u() {
                            this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                        }, e.prototype.updateARIAAttributes = function c() {
                            var t = (100 * this.player_.volume()).toFixed(2);
                            this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                        }, e
                    }(l["default"]);
                g.prototype.options_ = {
                    children: ["volumeLevel"],
                    barName: "volumeLevel"
                }, g.prototype.playerEvent = "volumechange", c["default"].registerComponent("VolumeBar", g), i["default"] = g, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "../../slider/slider.js": 116,
                "../../utils/fn.js": 136,
                "./volume-level.js": 98
            }],
            97: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../../component.js"),
                    a = n(r),
                    l = t("./volume-bar.js"),
                    u = n(l),
                    c = function(t) {
                        function e(i, n) {
                            s(this, e), t.call(this, i, n), i.tech_ && i.tech_.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), this.on(i, "loadstart", function() {
                                i.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                            })
                        }
                        return o(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-volume-control vjs-control"
                            })
                        }, e
                    }(a["default"]);
                c.prototype.options_ = {
                    children: ["volumeBar"]
                }, a["default"].registerComponent("VolumeControl", c), i["default"] = c, e.exports = i["default"]
            }, {
                "../../component.js": 67,
                "./volume-bar.js": 96
            }],
            98: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../../component.js"),
                    a = n(r),
                    l = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-volume-level",
                                innerHTML: '<span class="vjs-control-text"></span>'
                            })
                        }, e
                    }(a["default"]);
                a["default"].registerComponent("VolumeLevel", l), i["default"] = l, e.exports = i["default"]
            }, {
                "../../component.js": 67
            }],
            99: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../utils/fn.js"),
                    l = s(a),
                    u = t("../component.js"),
                    c = n(u),
                    h = t("../popup/popup.js"),
                    d = n(h),
                    p = t("../popup/popup-button.js"),
                    f = n(p),
                    g = t("./mute-toggle.js"),
                    m = n(g),
                    v = t("./volume-control/volume-bar.js"),
                    y = n(v),
                    b = function(t) {
                        function e(i) {
                            function n() {
                                i.tech_ && i.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                            }
                            var s = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            o(this, e), void 0 === s.inline && (s.inline = !0), void 0 === s.vertical && (s.inline ? s.vertical = !1 : s.vertical = !0), s.volumeBar = s.volumeBar || {}, s.volumeBar.vertical = !!s.vertical, t.call(this, i, s), this.on(i, "volumechange", this.volumeUpdate), this.on(i, "loadstart", this.volumeUpdate), n.call(this), this.on(i, "loadstart", n), this.on(this.volumeBar, ["slideractive", "focus"], function() {
                                this.addClass("vjs-slider-active")
                            }), this.on(this.volumeBar, ["sliderinactive", "blur"], function() {
                                this.removeClass("vjs-slider-active")
                            }), this.on(this.volumeBar, ["focus"], function() {
                                this.addClass("vjs-lock-showing")
                            }), this.on(this.volumeBar, ["blur"], function() {
                                this.removeClass("vjs-lock-showing")
                            })
                        }
                        return r(e, t), e.prototype.buildCSSClass = function i() {
                            var e = "";
                            return e = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + t.prototype.buildCSSClass.call(this) + " " + e
                        }, e.prototype.createPopup = function n() {
                            var t = new d["default"](this.player_, {
                                    contentElType: "div"
                                }),
                                e = new y["default"](this.player_, this.options_.volumeBar);
                            return t.addChild(e), this.menuContent = t, this.volumeBar = e, this.attachVolumeBarEvents(), t
                        }, e.prototype.handleClick = function s() {
                            m["default"].prototype.handleClick.call(this), t.prototype.handleClick.call(this)
                        }, e.prototype.attachVolumeBarEvents = function a() {
                            this.menuContent.on(["mousedown", "touchdown"], l.bind(this, this.handleMouseDown))
                        }, e.prototype.handleMouseDown = function u(t) {
                            this.on(["mousemove", "touchmove"], l.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp)
                        }, e.prototype.handleMouseUp = function c(t) {
                            this.off(["mousemove", "touchmove"], l.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                        }, e
                    }(f["default"]);
                b.prototype.volumeUpdate = m["default"].prototype.update, b.prototype.controlText_ = "Mute", c["default"].registerComponent("VolumeMenuButton", b), i["default"] = b, e.exports = i["default"]
            }, {
                "../component.js": 67,
                "../popup/popup-button.js": 112,
                "../popup/popup.js": 113,
                "../utils/fn.js": 136,
                "./mute-toggle.js": 71,
                "./volume-control/volume-bar.js": 96
            }],
            100: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./component"),
                    l = s(a),
                    u = t("./modal-dialog"),
                    c = s(u),
                    h = t("./utils/dom"),
                    d = n(h),
                    p = t("./utils/merge-options"),
                    f = s(p),
                    g = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.on(i, "error", this.open)
                        }
                        return r(e, t), e.prototype.buildCSSClass = function i() {
                            return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.content = function n() {
                            var t = this.player().error();
                            return t ? this.localize(t.message) : ""
                        }, e
                    }(c["default"]);
                g.prototype.options_ = f["default"](c["default"].prototype.options_, {
                    fillAlways: !0,
                    temporary: !1,
                    uncloseable: !0
                }), l["default"].registerComponent("ErrorDisplay", g), i["default"] = g, e.exports = i["default"]
            }, {
                "./component": 67,
                "./modal-dialog": 109,
                "./utils/dom": 134,
                "./utils/merge-options": 140
            }],
            101: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }
                i.__esModule = !0;
                var s = t("./utils/events.js"),
                    o = n(s),
                    r = function a() {};
                r.prototype.allowedEvents_ = {}, r.prototype.on = function(t, e) {
                    var i = this.addEventListener;
                    this.addEventListener = Function.prototype, o.on(this, t, e), this.addEventListener = i
                }, r.prototype.addEventListener = r.prototype.on, r.prototype.off = function(t, e) {
                    o.off(this, t, e)
                }, r.prototype.removeEventListener = r.prototype.off, r.prototype.one = function(t, e) {
                    o.one(this, t, e)
                }, r.prototype.trigger = function(t) {
                    var e = t.type || t;
                    "string" == typeof t && (t = {
                        type: e
                    }), t = o.fixEvent(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), o.trigger(this, t)
                }, r.prototype.dispatchEvent = r.prototype.trigger, i["default"] = r, e.exports = i["default"]
            }, {
                "./utils/events.js": 135
            }],
            102: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("./utils/log"),
                    o = n(s),
                    r = function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (t.super_ = e)
                    },
                    a = function u(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            i = function a() {
                                t.apply(this, arguments)
                            },
                            n = {};
                        "object" == typeof e ? ("function" == typeof e.init && (o["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), e.constructor = e.init), e.constructor !== Object.prototype.constructor && (i = e.constructor), n = e) : "function" == typeof e && (i = e), r(i, t);
                        for (var s in n) n.hasOwnProperty(s) && (i.prototype[s] = n[s]);
                        return i
                    };
                i["default"] = a, e.exports = i["default"]
            }, {
                "./utils/log": 139
            }],
            103: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                for (var s = t("global/document"), o = n(s), r = {}, a = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], l = a[0], u = void 0, c = 0; c < a.length; c++)
                    if (a[c][1] in o["default"]) {
                        u = a[c];
                        break
                    }
                if (u)
                    for (var c = 0; c < u.length; c++) r[l[c]] = u[c];
                i["default"] = r, e.exports = i["default"]
            }, {
                "global/document": 1
            }],
            104: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("./component"),
                    a = n(r),
                    l = function(t) {
                        function e() {
                            s(this, e), t.apply(this, arguments)
                        }
                        return o(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-loading-spinner",
                                dir: "ltr"
                            })
                        }, e
                    }(a["default"]);
                a["default"].registerComponent("LoadingSpinner", l), i["default"] = l, e.exports = i["default"]
            }, {
                "./component": 67
            }],
            105: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("object.assign"),
                    o = n(s),
                    r = function l(t) {
                        "number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : "object" == typeof t && o["default"](this, t), this.message || (this.message = l.defaultMessages[this.code] || "")
                    };
                r.prototype.code = 0, r.prototype.message = "", r.prototype.status = null, r.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], r.defaultMessages = {
                    1: "You aborted the media playback",
                    2: "A network error caused the media download to fail part-way.",
                    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                    5: "The media is encrypted and we do not have the keys to decrypt it."
                };
                for (var a = 0; a < r.errorTypes.length; a++) r[r.errorTypes[a]] = a, r.prototype[r.errorTypes[a]] = a;
                i["default"] = r, e.exports = i["default"]
            }, {
                "object.assign": 45
            }],
            106: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../clickable-component.js"),
                    l = s(a),
                    u = t("../component.js"),
                    c = s(u),
                    h = t("./menu.js"),
                    d = s(h),
                    p = t("../utils/dom.js"),
                    f = n(p),
                    g = t("../utils/fn.js"),
                    m = n(g),
                    v = t("../utils/to-title-case.js"),
                    y = s(v),
                    b = function(t) {
                        function e(i) {
                            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            o(this, e), t.call(this, i, n), this.update(), this.enabled_ = !0, this.el_.setAttribute("aria-haspopup", "true"), this.el_.setAttribute("role", "menuitem"), this.on("keydown", this.handleSubmenuKeyPress)
                        }
                        return r(e, t), e.prototype.update = function i() {
                            var t = this.createMenu();
                            this.menu && this.removeChild(this.menu), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                        }, e.prototype.createMenu = function n() {
                            var t = new d["default"](this.player_);
                            if (this.options_.title) {
                                var e = f.createEl("li", {
                                    className: "vjs-menu-title",
                                    innerHTML: y["default"](this.options_.title),
                                    tabIndex: -1
                                });
                                t.children_.unshift(e), f.insertElFirst(e, t.contentEl())
                            }
                            if (this.items = this.createItems(), this.items)
                                for (var i = 0; i < this.items.length; i++) t.addItem(this.items[i]);
                            return t
                        }, e.prototype.createItems = function s() {}, e.prototype.createEl = function a() {
                            return t.prototype.createEl.call(this, "div", {
                                className: this.buildCSSClass()
                            })
                        }, e.prototype.buildCSSClass = function l() {
                            var e = "vjs-menu-button";
                            return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.handleClick = function u() {
                            this.one("mouseout", m.bind(this, function() {
                                this.menu.unlockShowing(), this.el_.blur()
                            })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                        }, e.prototype.handleKeyPress = function c(e) {
                            27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && e.preventDefault()) : 38 === e.which || 40 === e.which ? this.buttonPressed_ || (this.pressButton(), e.preventDefault()) : t.prototype.handleKeyPress.call(this, e)
                        }, e.prototype.handleSubmenuKeyPress = function h(t) {
                            (27 === t.which || 9 === t.which) && (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && t.preventDefault())
                        }, e.prototype.pressButton = function p() {
                            this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus())
                        }, e.prototype.unpressButton = function g() {
                            this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus())
                        }, e.prototype.disable = function v() {
                            return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, t.prototype.disable.call(this)
                        }, e.prototype.enable = function b() {
                            return this.enabled_ = !0, t.prototype.enable.call(this)
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("MenuButton", b), i["default"] = b, e.exports = i["default"]
            }, {
                "../clickable-component.js": 65,
                "../component.js": 67,
                "../utils/dom.js": 134,
                "../utils/fn.js": 136,
                "../utils/to-title-case.js": 143,
                "./menu.js": 108
            }],
            107: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../clickable-component.js"),
                    a = n(r),
                    l = t("../component.js"),
                    u = n(l),
                    c = t("object.assign"),
                    h = n(c),
                    d = function(t) {
                        function e(i, n) {
                            s(this, e), t.call(this, i, n), this.selectable = n.selectable, this.selected(n.selected), this.selectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitem")
                        }
                        return o(e, t), e.prototype.createEl = function i(e, n, s) {
                            return t.prototype.createEl.call(this, "li", h["default"]({
                                className: "vjs-menu-item",
                                innerHTML: this.localize(this.options_.label),
                                tabIndex: -1
                            }, n), s)
                        }, e.prototype.handleClick = function n() {
                            this.selected(!0)
                        }, e.prototype.selected = function r(t) {
                            this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                        }, e
                    }(a["default"]);
                u["default"].registerComponent("MenuItem", d), i["default"] = d, e.exports = i["default"]
            }, {
                "../clickable-component.js": 65,
                "../component.js": 67,
                "object.assign": 45
            }],
            108: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../component.js"),
                    l = s(a),
                    u = t("../utils/dom.js"),
                    c = n(u),
                    h = t("../utils/fn.js"),
                    d = n(h),
                    p = t("../utils/events.js"),
                    f = n(p),
                    g = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.focusedChild_ = -1, this.on("keydown", this.handleKeyPress)
                        }
                        return r(e, t), e.prototype.addItem = function i(t) {
                            this.addChild(t), t.on("click", d.bind(this, function() {
                                this.unlockShowing()
                            }))
                        }, e.prototype.createEl = function n() {
                            var e = this.options_.contentElType || "ul";
                            this.contentEl_ = c.createEl(e, {
                                className: "vjs-menu-content"
                            }), this.contentEl_.setAttribute("role", "menu");
                            var i = t.prototype.createEl.call(this, "div", {
                                append: this.contentEl_,
                                className: "vjs-menu"
                            });
                            return i.setAttribute("role", "presentation"), i.appendChild(this.contentEl_), f.on(i, "click", function(t) {
                                t.preventDefault(), t.stopImmediatePropagation()
                            }), i
                        }, e.prototype.handleKeyPress = function s(t) {
                            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : (38 === t.which || 39 === t.which) && (t.preventDefault(), this.stepBack())
                        }, e.prototype.stepForward = function a() {
                            var t = 0;
                            void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
                        }, e.prototype.stepBack = function l() {
                            var t = 0;
                            void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
                        }, e.prototype.focus = function u() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                                e = this.children().slice(),
                                i = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
                            i && e.shift(), e.length > 0 && (0 > t ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("Menu", g), i["default"] = g, e.exports = i["default"]
            }, {
                "../component.js": 67,
                "../utils/dom.js": 134,
                "../utils/events.js": 135,
                "../utils/fn.js": 136
            }],
            109: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./utils/dom"),
                    l = s(a),
                    u = t("./utils/fn"),
                    c = s(u),
                    h = t("./utils/log"),
                    d = n(h),
                    p = t("./component"),
                    f = n(p),
                    g = t("./close-button"),
                    m = n(g),
                    v = "vjs-modal-dialog",
                    y = 27,
                    b = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1, this.closeable(!this.options_.uncloseable), this.content(this.options_.content), this.contentEl_ = l.createEl("div", {
                                className: v + "-content"
                            }, {
                                role: "document"
                            }), this.descEl_ = l.createEl("p", {
                                className: v + "-description vjs-offscreen",
                                id: this.el().getAttribute("aria-describedby")
                            }), l.textContent(this.descEl_, this.description()), this.el_.appendChild(this.descEl_), this.el_.appendChild(this.contentEl_)
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: this.buildCSSClass(),
                                tabIndex: -1
                            }, {
                                "aria-describedby": this.id() + "_description",
                                "aria-hidden": "true",
                                "aria-label": this.label(),
                                role: "dialog"
                            })
                        }, e.prototype.buildCSSClass = function n() {
                            return v + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
                        }, e.prototype.handleKeyPress = function s(t) {
                            t.which === y && this.closeable() && this.close()
                        }, e.prototype.label = function a() {
                            return this.options_.label || this.localize("Modal Window")
                        }, e.prototype.description = function u() {
                            var t = this.options_.description || this.localize("This is a modal window.");
                            return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
                        }, e.prototype.open = function h() {
                            if (!this.opened_) {
                                var t = this.player();
                                this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", c.bind(this, this.handleKeyPress)), t.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                            }
                            return this
                        }, e.prototype.opened = function d(t) {
                            return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
                        }, e.prototype.close = function p() {
                            if (this.opened_) {
                                var t = this.player();
                                this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", c.bind(this, this.handleKeyPress)), t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose()
                            }
                            return this
                        }, e.prototype.closeable = function f(t) {
                            if ("boolean" == typeof t) {
                                var f = this.closeable_ = !!t,
                                    e = this.getChild("closeButton");
                                if (f && !e) {
                                    var i = this.contentEl_;
                                    this.contentEl_ = this.el_, e = this.addChild("closeButton"), this.contentEl_ = i, this.on(e, "close", this.close)
                                }!f && e && (this.off(e, "close", this.close), this.removeChild(e), e.dispose())
                            }
                            return this.closeable_
                        }, e.prototype.fill = function g() {
                            return this.fillWith(this.content())
                        }, e.prototype.fillWith = function m(t) {
                            var e = this.contentEl(),
                                i = e.parentNode,
                                n = e.nextSibling;
                            return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(e), this.empty(), l.insertContent(e, t), this.trigger("modalfill"), n ? i.insertBefore(e, n) : i.appendChild(e), this
                        }, e.prototype.empty = function b() {
                            return this.trigger("beforemodalempty"), l.emptyEl(this.contentEl()), this.trigger("modalempty"), this
                        }, e.prototype.content = function _(t) {
                            return "undefined" != typeof t && (this.content_ = t), this.content_
                        }, e
                    }(f["default"]);
                b.prototype.options_ = {
                    temporary: !0
                }, f["default"].registerComponent("ModalDialog", b), i["default"] = b, e.exports = i["default"]
            }, {
                "./close-button": 66,
                "./component": 67,
                "./utils/dom": 134,
                "./utils/fn": 136,
                "./utils/log": 139
            }],
            110: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./component.js"),
                    l = s(a),
                    u = t("global/document"),
                    c = s(u),
                    h = t("global/window"),
                    d = s(h),
                    p = t("./utils/events.js"),
                    f = n(p),
                    g = t("./utils/dom.js"),
                    m = n(g),
                    v = t("./utils/fn.js"),
                    y = n(v),
                    b = t("./utils/guid.js"),
                    _ = n(b),
                    w = t("./utils/browser.js"),
                    x = n(w),
                    T = t("./utils/log.js"),
                    k = s(T),
                    C = t("./utils/to-title-case.js"),
                    j = s(C),
                    E = t("./utils/time-ranges.js"),
                    S = t("./utils/buffer.js"),
                    O = t("./utils/stylesheet.js"),
                    P = n(O),
                    D = t("./fullscreen-api.js"),
                    M = s(D),
                    I = t("./media-error.js"),
                    A = s(I),
                    N = t("safe-json-parse/tuple"),
                    H = s(N),
                    F = t("object.assign"),
                    R = s(F),
                    z = t("./utils/merge-options.js"),
                    L = s(z),
                    W = t("./tracks/text-track-list-converter.js"),
                    B = s(W),
                    V = t("./tech/loader.js"),
                    Y = s(V),
                    q = t("./poster-image.js"),
                    U = s(q),
                    K = t("./tracks/text-track-display.js"),
                    X = s(K),
                    G = t("./loading-spinner.js"),
                    J = s(G),
                    Z = t("./big-play-button.js"),
                    Q = s(Z),
                    tt = t("./control-bar/control-bar.js"),
                    et = s(tt),
                    it = t("./error-display.js"),
                    nt = s(it),
                    st = t("./tracks/text-track-settings.js"),
                    ot = s(st),
                    rt = t("./modal-dialog"),
                    at = s(rt),
                    lt = t("./tech/tech.js"),
                    ut = s(lt),
                    ct = t("./tech/html5.js"),
                    ht = s(ct),
                    dt = function(t) {
                        function e(i, n, s) {
                            var r = this;
                            if (o(this, e), i.id = i.id || "vjs_video_" + _.newGUID(), n = R["default"](e.getTagSettings(i), n), n.initChildren = !1, n.createEl = !1, n.reportTouchActivity = !1, t.call(this, null, n, s), !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                            this.tag = i, this.tagAttributes = i && m.getElAttributes(i), this.language(this.options_.language), n.languages ? ! function() {
                                var t = {};
                                Object.getOwnPropertyNames(n.languages).forEach(function(e) {
                                    t[e.toLowerCase()] = n.languages[e]
                                }), r.languages_ = t
                            }() : this.languages_ = e.prototype.options_.languages, this.cache_ = {}, this.poster_ = n.poster || "", this.controls_ = !!n.controls, i.controls = !1, this.scrubbing_ = !1, this.el_ = this.createEl();
                            var a = L["default"](this.options_);
                            n.plugins && ! function() {
                                var t = n.plugins;
                                Object.getOwnPropertyNames(t).forEach(function(e) {
                                    "function" == typeof this[e] ? this[e](t[e]) : k["default"].error("Unable to find plugin:", e)
                                }, r)
                            }(), this.options_.playerOptions = a, this.initChildren(), this.isAudio("audio" === i.nodeName.toLowerCase()), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.el_.setAttribute("role", "region"), this.isAudio() ? this.el_.setAttribute("aria-label", "audio player") : this.el_.setAttribute("aria-label", "video player"), this.isAudio() && this.addClass("vjs-audio"), this.flexNotSupported_() && this.addClass("vjs-no-flex"), x.IS_IOS || this.addClass("vjs-workinghover"), e.players[this.id_] = this, this.userActive(!0), this.reportUserActivity(), this.listenForUserActivity_(), this.on("fullscreenchange", this.handleFullscreenChange_), this.on("stageclick", this.handleStageClick_)
                        }
                        return r(e, t), e.prototype.dispose = function i() {
                            this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), t.prototype.dispose.call(this)
                        }, e.prototype.createEl = function n() {
                            var e = this.el_ = t.prototype.createEl.call(this, "div"),
                                i = this.tag;
                            i.removeAttribute("width"), i.removeAttribute("height");
                            var n = m.getElAttributes(i);
                            if (Object.getOwnPropertyNames(n).forEach(function(t) {
                                    "class" === t ? e.className = n[t] : e.setAttribute(t, n[t])
                                }), i.playerId = i.id, i.id += "_html5_api", i.className = "vjs-tech", i.player = e.player = this, this.addClass("vjs-paused"), d["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                                this.styleEl_ = P.createStyleElement("vjs-styles-dimensions");
                                var s = m.$(".vjs-styles-defaults"),
                                    o = m.$("head");
                                o.insertBefore(this.styleEl_, s ? s.nextSibling : o.firstChild)
                            }
                            this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                            for (var r = i.getElementsByTagName("a"), a = 0; a < r.length; a++) {
                                var l = r.item(a);
                                m.addElClass(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
                            }
                            return i.initNetworkState_ = i.networkState, i.parentNode && i.parentNode.insertBefore(e, i), m.insertElFirst(i, e), this.children_.unshift(i), this.el_ = e, e
                        }, e.prototype.width = function s(t) {
                            return this.dimension("width", t)
                        }, e.prototype.height = function a(t) {
                            return this.dimension("height", t)
                        }, e.prototype.dimension = function u(t, e) {
                            var i = t + "_";
                            if (void 0 === e) return this[i] || 0;
                            if ("" === e) this[i] = void 0;
                            else {
                                var n = parseFloat(e);
                                if (isNaN(n)) return k["default"].error('Improper value "' + e + '" supplied for for ' + t), this;
                                this[i] = n
                            }
                            return this.updateStyleEl_(), this
                        }, e.prototype.fluid = function h(t) {
                            return void 0 === t ? !!this.fluid_ : (this.fluid_ = !!t, void(t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid")))
                        }, e.prototype.aspectRatio = function p(t) {
                            if (void 0 === t) return this.aspectRatio_;
                            if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                            this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                        }, e.prototype.updateStyleEl_ = function g() {
                            if (d["default"].VIDEOJS_NO_DYNAMIC_STYLE === !0) {
                                var t = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                    e = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                    i = this.tech_ && this.tech_.el();
                                return void(i && (t >= 0 && (i.width = t), e >= 0 && (i.height = e)))
                            }
                            var n = void 0,
                                s = void 0,
                                o = void 0,
                                r = void 0;
                            o = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                            var a = o.split(":"),
                                l = a[1] / a[0];
                            n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, s = void 0 !== this.height_ ? this.height_ : n * l, r = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(r), P.setTextContent(this.styleEl_, "\n      ." + r + " {\n        width: " + n + "px;\n        height: " + s + "px;\n      }\n\n      ." + r + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
                        }, e.prototype.loadTech_ = function v(t, e) {
                            this.tech_ && this.unloadTech_(), "Html5" !== t && this.tag && (ut["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = t, this.isReady_ = !1;
                            var i = R["default"]({
                                nativeControlsForTouch: this.options_.nativeControlsForTouch,
                                source: e,
                                playerId: this.id(),
                                techId: this.id() + "_" + t + "_api",
                                textTracks: this.textTracks_,
                                autoplay: this.options_.autoplay,
                                preload: this.options_.preload,
                                loop: this.options_.loop,
                                muted: this.options_.muted,
                                poster: this.poster(),
                                language: this.language(),
                                "vtt.js": this.options_["vtt.js"]
                            }, this.options_[t.toLowerCase()]);
                            this.tag && (i.tag = this.tag), e && (this.currentType_ = e.type, e.src === this.cache_.src && this.cache_.currentTime > 0 && (i.startTime = this.cache_.currentTime), this.cache_.src = e.src);
                            var n = ut["default"].getTech(t);
                            n || (n = l["default"].getComponent(t)), this.tech_ = new n(i), this.tech_.ready(y.bind(this, this.handleTechReady_), !0), B["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "progress", this.handleTechProgress_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "suspend", this.handleTechSuspend_), this.on(this.tech_, "abort", this.handleTechAbort_), this.on(this.tech_, "emptied", this.handleTechEmptied_), this.on(this.tech_, "stalled", this.handleTechStalled_), this.on(this.tech_, "loadedmetadata", this.handleTechLoadedMetaData_), this.on(this.tech_, "loadeddata", this.handleTechLoadedData_), this.on(this.tech_, "timeupdate", this.handleTechTimeUpdate_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.on(this.tech_, "volumechange", this.handleTechVolumeChange_), this.on(this.tech_, "texttrackchange", this.handleTechTextTrackChange_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === t && this.tag || m.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                        }, e.prototype.unloadTech_ = function b() {
                            this.textTracks_ = this.textTracks(), this.textTracksJson_ = B["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                        }, e.prototype.tech = function w(t) {
                            if (t && t.IWillNotUseThisInPlugins) return this.tech_;
                            var e = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                            throw d["default"].alert(e), new Error(e)
                        }, e.prototype.addTechControlsListeners_ = function T() {
                            this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                        }, e.prototype.removeTechControlsListeners_ = function C() {
                            this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_),
                                this.off(this.tech_, "mousedown", this.handleTechClick_)
                        }, e.prototype.handleTechReady_ = function O() {
                            this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), this.src() && this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
                        }, e.prototype.handleTechLoadStart_ = function D() {
                            this.removeClass("vjs-ended"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                        }, e.prototype.hasStarted = function I(t) {
                            return void 0 !== t ? (this.hasStarted_ !== t && (this.hasStarted_ = t, t ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                        }, e.prototype.handleTechPlay_ = function N() {
                            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                        }, e.prototype.handleTechWaiting_ = function F() {
                            var t = this;
                            this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
                                return t.removeClass("vjs-waiting")
                            })
                        }, e.prototype.handleTechCanPlay_ = function z() {
                            this.removeClass("vjs-waiting"), this.trigger("canplay")
                        }, e.prototype.handleTechCanPlayThrough_ = function W() {
                            this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                        }, e.prototype.handleTechPlaying_ = function V() {
                            this.removeClass("vjs-waiting"), this.trigger("playing")
                        }, e.prototype.handleTechSeeking_ = function Y() {
                            this.addClass("vjs-seeking"), this.trigger("seeking")
                        }, e.prototype.handleTechSeeked_ = function q() {
                            this.removeClass("vjs-seeking"), this.trigger("seeked")
                        }, e.prototype.handleTechFirstPlay_ = function U() {
                            this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started"), this.trigger("firstplay")
                        }, e.prototype.handleTechPause_ = function K() {
                            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                        }, e.prototype.handleTechProgress_ = function X() {
                            this.trigger("progress")
                        }, e.prototype.handleTechEnded_ = function G() {
                            this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                        }, e.prototype.handleTechDurationChange_ = function J() {
                            this.duration(this.techGet_("duration"))
                        }, e.prototype.handleTechClick_ = function Z(t) {
                            0 === t.button && this.controls() && (this.paused() ? this.play() : this.pause())
                        }, e.prototype.handleTechTap_ = function Q() {
                            this.userActive(!this.userActive())
                        }, e.prototype.handleTechTouchStart_ = function tt() {
                            this.userWasActive = this.userActive()
                        }, e.prototype.handleTechTouchMove_ = function et() {
                            this.userWasActive && this.reportUserActivity()
                        }, e.prototype.handleTechTouchEnd_ = function it(t) {
                            t.preventDefault()
                        }, e.prototype.handleFullscreenChange_ = function nt() {
                            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                        }, e.prototype.handleStageClick_ = function st() {
                            this.reportUserActivity()
                        }, e.prototype.handleTechFullscreenChange_ = function ot(t, e) {
                            e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                        }, e.prototype.handleTechError_ = function rt() {
                            var t = this.tech_.error();
                            this.error(t && t.code)
                        }, e.prototype.handleTechSuspend_ = function lt() {
                            this.trigger("suspend")
                        }, e.prototype.handleTechAbort_ = function ct() {
                            this.trigger("abort")
                        }, e.prototype.handleTechEmptied_ = function ht() {
                            this.trigger("emptied")
                        }, e.prototype.handleTechStalled_ = function dt() {
                            this.trigger("stalled")
                        }, e.prototype.handleTechLoadedMetaData_ = function pt() {
                            this.trigger("loadedmetadata")
                        }, e.prototype.handleTechLoadedData_ = function ft() {
                            this.trigger("loadeddata")
                        }, e.prototype.handleTechTimeUpdate_ = function gt() {
                            this.trigger("timeupdate")
                        }, e.prototype.handleTechRateChange_ = function mt() {
                            this.trigger("ratechange")
                        }, e.prototype.handleTechVolumeChange_ = function vt() {
                            this.trigger("volumechange")
                        }, e.prototype.handleTechTextTrackChange_ = function yt() {
                            this.trigger("texttrackchange")
                        }, e.prototype.getCache = function bt() {
                            return this.cache_
                        }, e.prototype.techCall_ = function _t(t, e) {
                            if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function() {
                                this[t](e)
                            }, !0);
                            else try {
                                this.tech_[t](e)
                            } catch (i) {
                                throw k["default"](i), i
                            }
                        }, e.prototype.techGet_ = function wt(t) {
                            if (this.tech_ && this.tech_.isReady_) try {
                                return this.tech_[t]()
                            } catch (e) {
                                throw void 0 === this.tech_[t] ? k["default"]("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e) : "TypeError" === e.name ? (k["default"]("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1) : k["default"](e), e
                            }
                        }, e.prototype.play = function xt() {
                            return this.techCall_("play"), this
                        }, e.prototype.pause = function Tt() {
                            return this.techCall_("pause"), this
                        }, e.prototype.paused = function kt() {
                            return this.techGet_("paused") === !1 ? !1 : !0
                        }, e.prototype.scrubbing = function Ct(t) {
                            return void 0 !== t ? (this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                        }, e.prototype.currentTime = function jt(t) {
                            return void 0 !== t ? (this.techCall_("setCurrentTime", t), this) : this.cache_.currentTime = this.techGet_("currentTime") || 0
                        }, e.prototype.duration = function Et(t) {
                            return void 0 === t ? this.cache_.duration || 0 : (t = parseFloat(t) || 0, 0 > t && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                        }, e.prototype.remainingTime = function St() {
                            return this.duration() - this.currentTime()
                        }, e.prototype.buffered = function Ot() {
                            var Ot = this.techGet_("buffered");
                            return Ot && Ot.length || (Ot = E.createTimeRange(0, 0)), Ot
                        }, e.prototype.bufferedPercent = function Pt() {
                            return S.bufferedPercent(this.buffered(), this.duration())
                        }, e.prototype.bufferedEnd = function Dt() {
                            var t = this.buffered(),
                                e = this.duration(),
                                i = t.end(t.length - 1);
                            return i > e && (i = e), i
                        }, e.prototype.volume = function Mt(t) {
                            var e = void 0;
                            return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), this) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                        }, e.prototype.muted = function It(t) {
                            return void 0 !== t ? (this.techCall_("setMuted", t), this) : this.techGet_("muted") || !1
                        }, e.prototype.supportsFullScreen = function At() {
                            return this.techGet_("supportsFullScreen") || !1
                        }, e.prototype.isFullscreen = function Nt(t) {
                            return void 0 !== t ? (this.isFullscreen_ = !!t, this) : !!this.isFullscreen_
                        }, e.prototype.requestFullscreen = function Ht() {
                            var t = M["default"];
                            return this.isFullscreen(!0), t.requestFullscreen ? (f.on(c["default"], t.fullscreenchange, y.bind(this, function e(i) {
                                this.isFullscreen(c["default"][t.fullscreenElement]), this.isFullscreen() === !1 && f.off(c["default"], t.fullscreenchange, e), this.trigger("fullscreenchange")
                            })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                        }, e.prototype.exitFullscreen = function Ft() {
                            var t = M["default"];
                            return this.isFullscreen(!1), t.requestFullscreen ? c["default"][t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                        }, e.prototype.enterFullWindow = function Rt() {
                            this.isFullWindow = !0, this.docOrigOverflow = c["default"].documentElement.style.overflow, f.on(c["default"], "keydown", y.bind(this, this.fullWindowOnEscKey)), c["default"].documentElement.style.overflow = "hidden", m.addElClass(c["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                        }, e.prototype.fullWindowOnEscKey = function zt(t) {
                            27 === t.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                        }, e.prototype.exitFullWindow = function Lt() {
                            this.isFullWindow = !1, f.off(c["default"], "keydown", this.fullWindowOnEscKey), c["default"].documentElement.style.overflow = this.docOrigOverflow, m.removeElClass(c["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                        }, e.prototype.canPlayType = function Wt(t) {
                            for (var e = void 0, i = 0, n = this.options_.techOrder; i < n.length; i++) {
                                var s = j["default"](n[i]),
                                    o = ut["default"].getTech(s);
                                if (o || (o = l["default"].getComponent(s)), o) {
                                    if (o.isSupported() && (e = o.canPlayType(t))) return e
                                } else k["default"].error('The "' + s + '" tech is undefined. Skipped browser support check for that tech.')
                            }
                            return ""
                        }, e.prototype.selectSource = function Bt(t) {
                            var e = this.options_.techOrder.map(j["default"]).map(function(t) {
                                    return [t, ut["default"].getTech(t) || l["default"].getComponent(t)]
                                }).filter(function(t) {
                                    var e = t[0],
                                        i = t[1];
                                    return i ? i.isSupported() : (k["default"].error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                                }),
                                i = function r(t, e, i) {
                                    var n = void 0;
                                    return t.some(function(t) {
                                        return e.some(function(e) {
                                            return n = i(t, e), n ? !0 : void 0
                                        })
                                    }), n
                                },
                                n = void 0,
                                s = function a(t) {
                                    return function(e, i) {
                                        return t(i, e)
                                    }
                                },
                                o = function u(t, e) {
                                    var i = t[0],
                                        n = t[1];
                                    return n.canPlaySource(e) ? {
                                        source: e,
                                        tech: i
                                    } : void 0
                                };
                            return n = this.options_.sourceOrder ? i(t, e, s(o)) : i(e, t, o), n || !1
                        }, e.prototype.src = function Vt(t) {
                            if (void 0 === t) return this.techGet_("src");
                            var e = ut["default"].getTech(this.techName_);
                            return e || (e = l["default"].getComponent(this.techName_)), Array.isArray(t) ? this.sourceList_(t) : "string" == typeof t ? this.src({
                                src: t
                            }) : t instanceof Object && (t.type && !e.canPlaySource(t) ? this.sourceList_([t]) : (this.cache_.src = t.src, this.currentType_ = t.type || "", this.ready(function() {
                                e.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                            }, !0))), this
                        }, e.prototype.sourceList_ = function Yt(t) {
                            var e = this.selectSource(t);
                            e ? e.tech === this.techName_ ? this.src(e.source) : this.loadTech_(e.tech, e.source) : (this.setTimeout(function() {
                                this.error({
                                    code: 4,
                                    message: this.localize(this.options_.notSupportedMessage)
                                })
                            }, 0), this.triggerReady())
                        }, e.prototype.load = function qt() {
                            return this.techCall_("load"), this
                        }, e.prototype.reset = function Ut() {
                            return this.loadTech_(j["default"](this.options_.techOrder[0]), null), this.techCall_("reset"), this
                        }, e.prototype.currentSrc = function $t() {
                            return this.techGet_("currentSrc") || this.cache_.src || ""
                        }, e.prototype.currentType = function Kt() {
                            return this.currentType_ || ""
                        }, e.prototype.preload = function Xt(t) {
                            return void 0 !== t ? (this.techCall_("setPreload", t), this.options_.preload = t, this) : this.techGet_("preload")
                        }, e.prototype.autoplay = function Gt(t) {
                            return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet_("autoplay", t)
                        }, e.prototype.loop = function Jt(t) {
                            return void 0 !== t ? (this.techCall_("setLoop", t), this.options_.loop = t, this) : this.techGet_("loop")
                        }, e.prototype.poster = function Zt(t) {
                            return void 0 === t ? this.poster_ : (t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange"), this)
                        }, e.prototype.handleTechPosterChange_ = function Qt() {
                            !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                        }, e.prototype.controls = function te(t) {
                            return void 0 !== t ? (t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                        }, e.prototype.usingNativeControls = function ee(t) {
                            return void 0 !== t ? (t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                        }, e.prototype.error = function ie(t) {
                            return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), this.errorDisplay.close(), this) : (t instanceof A["default"] ? this.error_ = t : this.error_ = new A["default"](t), this.addClass("vjs-error"), k["default"].error("(CODE:" + this.error_.code + " " + A["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                        }, e.prototype.ended = function ne() {
                            return this.techGet_("ended")
                        }, e.prototype.seeking = function se() {
                            return this.techGet_("seeking")
                        }, e.prototype.seekable = function oe() {
                            return this.techGet_("seekable")
                        }, e.prototype.reportUserActivity = function re(t) {
                            this.userActivity_ = !0
                        }, e.prototype.userActive = function ae(t) {
                            return void 0 !== t ? (t = !!t, t !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function(t) {
                                t.stopPropagation(), t.preventDefault()
                            }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                        }, e.prototype.listenForUserActivity_ = function le() {
                            var t = void 0,
                                e = void 0,
                                i = void 0,
                                n = y.bind(this, this.reportUserActivity),
                                s = function u(t) {
                                    (t.screenX !== e || t.screenY !== i) && (e = t.screenX, i = t.screenY, n())
                                },
                                o = function c() {
                                    n(), this.clearInterval(t), t = this.setInterval(n, 250)
                                },
                                r = function h(e) {
                                    n(), this.clearInterval(t)
                                };
                            this.on("mousedown", o), this.on("mousemove", s), this.on("mouseup", r), this.on("keydown", n), this.on("keyup", n);
                            var a = void 0,
                                l = this.setInterval(function() {
                                    if (this.userActivity_) {
                                        this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                                        var t = this.options_.inactivityTimeout;
                                        t > 0 && (a = this.setTimeout(function() {
                                            this.userActivity_ || this.userActive(!1)
                                        }, t))
                                    }
                                }, 250)
                        }, e.prototype.playbackRate = function ue(t) {
                            return void 0 !== t ? (this.techCall_("setPlaybackRate", t), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                        }, e.prototype.isAudio = function ce(t) {
                            return void 0 !== t ? (this.isAudio_ = !!t, this) : !!this.isAudio_
                        }, e.prototype.networkState = function he() {
                            return this.techGet_("networkState")
                        }, e.prototype.readyState = function de() {
                            return this.techGet_("readyState")
                        }, e.prototype.textTracks = function pe() {
                            return this.tech_ && this.tech_.textTracks()
                        }, e.prototype.remoteTextTracks = function fe() {
                            return this.tech_ && this.tech_.remoteTextTracks()
                        }, e.prototype.remoteTextTrackEls = function ge() {
                            return this.tech_ && this.tech_.remoteTextTrackEls()
                        }, e.prototype.addTextTrack = function me(t, e, i) {
                            return this.tech_ && this.tech_.addTextTrack(t, e, i)
                        }, e.prototype.addRemoteTextTrack = function ve(t) {
                            return this.tech_ && this.tech_.addRemoteTextTrack(t)
                        }, e.prototype.removeRemoteTextTrack = function ye() {
                            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                e = t.track,
                                i = void 0 === e ? arguments[0] : e;
                            this.tech_ && this.tech_.removeRemoteTextTrack(i)
                        }, e.prototype.videoWidth = function be() {
                            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                        }, e.prototype.videoHeight = function _e() {
                            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                        }, e.prototype.language = function we(t) {
                            return void 0 === t ? this.language_ : (this.language_ = ("" + t).toLowerCase(), this)
                        }, e.prototype.languages = function xe() {
                            return L["default"](e.prototype.options_.languages, this.languages_)
                        }, e.prototype.toJSON = function Te() {
                            var t = L["default"](this.options_),
                                e = t.tracks;
                            t.tracks = [];
                            for (var i = 0; i < e.length; i++) {
                                var n = e[i];
                                n = L["default"](n), n.player = void 0, t.tracks[i] = n
                            }
                            return t
                        }, e.prototype.createModal = function ke(t, e) {
                            var i = this;
                            e = e || {}, e.content = t || "";
                            var n = new at["default"](i, e);
                            return i.addChild(n), n.on("dispose", function() {
                                i.removeChild(n)
                            }), n.open()
                        }, e.getTagSettings = function Ce(t) {
                            var e = {
                                    sources: [],
                                    tracks: []
                                },
                                i = m.getElAttributes(t),
                                n = i["data-setup"];
                            if (null !== n) {
                                var s = H["default"](n || "{}"),
                                    o = s[0],
                                    r = s[1];
                                o && k["default"].error(o), R["default"](i, r)
                            }
                            if (R["default"](e, i), t.hasChildNodes())
                                for (var a = t.childNodes, l = 0, u = a.length; u > l; l++) {
                                    var c = a[l],
                                        h = c.nodeName.toLowerCase();
                                    "source" === h ? e.sources.push(m.getElAttributes(c)) : "track" === h && e.tracks.push(m.getElAttributes(c))
                                }
                            return e
                        }, e
                    }(l["default"]);
                dt.players = {};
                var pt = d["default"].navigator;
                dt.prototype.options_ = {
                    techOrder: ["html5", "flash"],
                    html5: {},
                    flash: {},
                    defaultVolume: 0,
                    inactivityTimeout: 2e3,
                    playbackRates: [],
                    children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                    language: c["default"].getElementsByTagName("html")[0].getAttribute("lang") || pt.languages && pt.languages[0] || pt.userLanguage || pt.language || "en",
                    languages: {},
                    notSupportedMessage: "No compatible source was found for this media."
                }, dt.prototype.handleLoadedMetaData_, dt.prototype.handleLoadedData_, dt.prototype.handleUserActive_, dt.prototype.handleUserInactive_, dt.prototype.handleTimeUpdate_, dt.prototype.handleTechEnded_, dt.prototype.handleVolumeChange_, dt.prototype.handleError_, dt.prototype.flexNotSupported_ = function() {
                    var t = c["default"].createElement("i");
                    return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
                }, l["default"].registerComponent("Player", dt), i["default"] = dt, e.exports = i["default"]
            }, {
                "./big-play-button.js": 63,
                "./component.js": 67,
                "./control-bar/control-bar.js": 68,
                "./error-display.js": 100,
                "./fullscreen-api.js": 103,
                "./loading-spinner.js": 104,
                "./media-error.js": 105,
                "./modal-dialog": 109,
                "./poster-image.js": 114,
                "./tech/html5.js": 119,
                "./tech/loader.js": 120,
                "./tech/tech.js": 121,
                "./tracks/text-track-display.js": 125,
                "./tracks/text-track-list-converter.js": 127,
                "./tracks/text-track-settings.js": 129,
                "./utils/browser.js": 131,
                "./utils/buffer.js": 132,
                "./utils/dom.js": 134,
                "./utils/events.js": 135,
                "./utils/fn.js": 136,
                "./utils/guid.js": 138,
                "./utils/log.js": 139,
                "./utils/merge-options.js": 140,
                "./utils/stylesheet.js": 141,
                "./utils/time-ranges.js": 142,
                "./utils/to-title-case.js": 143,
                "global/document": 1,
                "global/window": 2,
                "object.assign": 45,
                "safe-json-parse/tuple": 54
            }],
            111: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("./player.js"),
                    o = n(s),
                    r = function a(t, e) {
                        o["default"].prototype[t] = e
                    };
                i["default"] = r, e.exports = i["default"]
            }, {
                "./player.js": 110
            }],
            112: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../clickable-component.js"),
                    l = s(a),
                    u = t("../component.js"),
                    c = s(u),
                    h = t("./popup.js"),
                    d = s(h),
                    p = t("../utils/dom.js"),
                    f = n(p),
                    g = t("../utils/fn.js"),
                    m = n(g),
                    v = t("../utils/to-title-case.js"),
                    y = s(v),
                    b = function(t) {
                        function e(i) {
                            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                            o(this, e), t.call(this, i, n), this.update()
                        }
                        return r(e, t), e.prototype.update = function i() {
                            var t = this.createPopup();
                            this.popup && this.removeChild(this.popup), this.popup = t, this.addChild(t), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                        }, e.prototype.createPopup = function n() {}, e.prototype.createEl = function s() {
                            return t.prototype.createEl.call(this, "div", {
                                className: this.buildCSSClass()
                            })
                        }, e.prototype.buildCSSClass = function a() {
                            var e = "vjs-menu-button";
                            return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("PopupButton", b), i["default"] = b, e.exports = i["default"]
            }, {
                "../clickable-component.js": 65,
                "../component.js": 67,
                "../utils/dom.js": 134,
                "../utils/fn.js": 136,
                "../utils/to-title-case.js": 143,
                "./popup.js": 113
            }],
            113: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../component.js"),
                    l = s(a),
                    u = t("../utils/dom.js"),
                    c = n(u),
                    h = t("../utils/fn.js"),
                    d = n(h),
                    p = t("../utils/events.js"),
                    f = n(p),
                    g = function(t) {
                        function e() {
                            o(this, e), t.apply(this, arguments)
                        }
                        return r(e, t), e.prototype.addItem = function i(t) {
                            this.addChild(t), t.on("click", d.bind(this, function() {
                                this.unlockShowing()
                            }))
                        }, e.prototype.createEl = function n() {
                            var e = this.options_.contentElType || "ul";
                            this.contentEl_ = c.createEl(e, {
                                className: "vjs-menu-content"
                            });
                            var i = t.prototype.createEl.call(this, "div", {
                                append: this.contentEl_,
                                className: "vjs-menu"
                            });
                            return i.appendChild(this.contentEl_), f.on(i, "click", function(t) {
                                t.preventDefault(), t.stopImmediatePropagation()
                            }), i
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("Popup", g), i["default"] = g, e.exports = i["default"]
            }, {
                "../component.js": 67,
                "../utils/dom.js": 134,
                "../utils/events.js": 135,
                "../utils/fn.js": 136
            }],
            114: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./clickable-component.js"),
                    l = s(a),
                    u = t("./component.js"),
                    c = s(u),
                    h = t("./utils/fn.js"),
                    d = n(h),
                    p = t("./utils/dom.js"),
                    f = n(p),
                    g = t("./utils/browser.js"),
                    m = n(g),
                    v = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.update(), i.on("posterchange", d.bind(this, this.update))
                        }
                        return r(e, t), e.prototype.dispose = function i() {
                            this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
                        }, e.prototype.createEl = function n() {
                            var t = f.createEl("div", {
                                className: "vjs-poster",
                                tabIndex: -1
                            });
                            return m.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = f.createEl("img"), t.appendChild(this.fallbackImg_)), t
                        }, e.prototype.update = function s() {
                            var t = this.player().poster();
                            this.setSrc(t), t ? this.show() : this.hide()
                        }, e.prototype.setSrc = function a(t) {
                            if (this.fallbackImg_) this.fallbackImg_.src = t;
                            else {
                                var e = "";
                                t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                            }
                        }, e.prototype.handleClick = function l() {
                            this.player_.paused() ? this.player_.play() : this.player_.pause()
                        }, e
                    }(l["default"]);
                c["default"].registerComponent("PosterImage", v), i["default"] = v, e.exports = i["default"]
            }, {
                "./clickable-component.js": 65,
                "./component.js": 67,
                "./utils/browser.js": 131,
                "./utils/dom.js": 134,
                "./utils/fn.js": 136
            }],
            115: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }
                i.__esModule = !0;
                var o = t("./utils/events.js"),
                    r = s(o),
                    a = t("global/document"),
                    l = n(a),
                    u = t("global/window"),
                    c = n(u),
                    h = !1,
                    d = void 0,
                    p = function m() {
                        var t = l["default"].getElementsByTagName("video"),
                            e = l["default"].getElementsByTagName("audio"),
                            i = [];
                        if (t && t.length > 0)
                            for (var n = 0, s = t.length; s > n; n++) i.push(t[n]);
                        if (e && e.length > 0)
                            for (var n = 0, s = e.length; s > n; n++) i.push(e[n]);
                        if (i && i.length > 0)
                            for (var n = 0, s = i.length; s > n; n++) {
                                var o = i[n];
                                if (!o || !o.getAttribute) {
                                    f(1);
                                    break
                                }
                                if (void 0 === o.player) {
                                    var r = o.getAttribute("data-setup");
                                    if (null !== r) var a = d(o)
                                }
                            } else h || f(1)
                    },
                    f = function v(t, e) {
                        e && (d = e), setTimeout(p, t)
                    };
                "complete" === l["default"].readyState ? h = !0 : r.one(c["default"], "load", function() {
                    h = !0
                });
                var g = function y() {
                    return h
                };
                i.autoSetup = p, i.autoSetupTimeout = f, i.hasLoaded = g
            }, {
                "./utils/events.js": 135,
                "global/document": 1,
                "global/window": 2
            }],
            116: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../component.js"),
                    l = s(a),
                    u = t("../utils/dom.js"),
                    c = n(u),
                    h = t("object.assign"),
                    d = s(h),
                    p = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.bar = this.getChild(this.options_.barName), this.vertical(!!this.options_.vertical), this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(i, "controlsvisible", this.update), this.on(i, this.playerEvent, this.update)
                        }
                        return r(e, t), e.prototype.createEl = function i(e) {
                            var i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                                n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                            return i.className = i.className + " vjs-slider", i = d["default"]({
                                tabIndex: 0
                            }, i), n = d["default"]({
                                role: "slider",
                                "aria-valuenow": 0,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                tabIndex: 0
                            }, n), t.prototype.createEl.call(this, e, i, n)
                        }, e.prototype.handleMouseDown = function n(t) {
                            var e = this.bar.el_.ownerDocument;
                            t.preventDefault(), c.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
                        }, e.prototype.handleMouseMove = function s() {}, e.prototype.handleMouseUp = function a() {
                            var t = this.bar.el_.ownerDocument;
                            c.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
                        }, e.prototype.update = function l() {
                            if (this.el_) {
                                var t = this.getPercent(),
                                    e = this.bar;
                                if (e) {
                                    ("number" != typeof t || t !== t || 0 > t || t === 1 / 0) && (t = 0);
                                    var i = (100 * t).toFixed(2) + "%";
                                    this.vertical() ? e.el().style.height = i : e.el().style.width = i
                                }
                            }
                        }, e.prototype.calculateDistance = function u(t) {
                            var e = c.getPointerPosition(this.el_, t);
                            return this.vertical() ? e.y : e.x
                        }, e.prototype.handleFocus = function h() {
                            this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                        }, e.prototype.handleKeyPress = function p(t) {
                            37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : (38 === t.which || 39 === t.which) && (t.preventDefault(), this.stepForward())
                        }, e.prototype.handleBlur = function f() {
                            this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                        }, e.prototype.handleClick = function g(t) {
                            t.stopImmediatePropagation(), t.preventDefault()
                        }, e.prototype.vertical = function m(t) {
                            return void 0 === t ? this.vertical_ || !1 : (this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                        }, e
                    }(l["default"]);
                l["default"].registerComponent("Slider", p), i["default"] = p, e.exports = i["default"]
            }, {
                "../component.js": 67,
                "../utils/dom.js": 134,
                "object.assign": 45
            }],
            117: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t.streamingFormats = {
                        "rtmp/mp4": "MP4",
                        "rtmp/flv": "FLV"
                    }, t.streamFromParts = function(t, e) {
                        return t + "&" + e
                    }, t.streamToParts = function(t) {
                        var e = {
                            connection: "",
                            stream: ""
                        };
                        if (!t) return e;
                        var i = t.search(/&(?!\w+=)/),
                            n = void 0;
                        return -1 !== i ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1, 0 === i && (i = n = t.length)), e.connection = t.substring(0, i), e.stream = t.substring(n, t.length), e
                    }, t.isStreamingType = function(e) {
                        return e in t.streamingFormats
                    }, t.RTMP_RE = /^rtmp[set]?:\/\//i, t.isStreamingSrc = function(e) {
                        return t.RTMP_RE.test(e)
                    }, t.rtmpSourceHandler = {}, t.rtmpSourceHandler.canPlayType = function(e) {
                        return t.isStreamingType(e) ? "maybe" : ""
                    }, t.rtmpSourceHandler.canHandleSource = function(e) {
                        var i = t.rtmpSourceHandler.canPlayType(e.type);
                        return i ? i : t.isStreamingSrc(e.src) ? "maybe" : ""
                    }, t.rtmpSourceHandler.handleSource = function(e, i) {
                        var n = t.streamToParts(e.src);
                        i.setRtmpConnection(n.connection), i.setRtmpStream(n.stream)
                    }, t.registerSourceHandler(t.rtmpSourceHandler), t
                }
                i.__esModule = !0, i["default"] = n, e.exports = i["default"]
            }, {}],
            118: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function a(t) {
                    var e = t.charAt(0).toUpperCase() + t.slice(1);
                    j["set" + e] = function(e) {
                        return this.el_.vjs_setProperty(t, e)
                    }
                }

                function l(t) {
                    j[t] = function() {
                        return this.el_.vjs_getProperty(t)
                    }
                }
                i.__esModule = !0;
                for (var u = t("./tech"), c = s(u), h = t("../utils/dom.js"), d = n(h), p = t("../utils/url.js"), f = n(p), g = t("../utils/time-ranges.js"), m = t("./flash-rtmp"), v = s(m), y = t("../component"), b = s(y), _ = t("global/window"), w = s(_), x = t("object.assign"), T = s(x), k = w["default"].navigator, C = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), i.source && this.ready(function() {
                                this.setSource(i.source)
                            }, !0), i.startTime && this.ready(function() {
                                this.load(), this.play(), this.currentTime(i.startTime)
                            }, !0), w["default"].videojs = w["default"].videojs || {}, w["default"].videojs.Flash = w["default"].videojs.Flash || {}, w["default"].videojs.Flash.onReady = e.onReady, w["default"].videojs.Flash.onEvent = e.onEvent, w["default"].videojs.Flash.onError = e.onError, this.on("seeked", function() {
                                this.lastSeekTarget_ = void 0
                            })
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            var t = this.options_;
                            t.swf || (t.swf = "//vjs.zencdn.net/swf/5.0.1/video-js.swf");
                            var i = t.techId,
                                n = T["default"]({
                                    readyFunction: "videojs.Flash.onReady",
                                    eventProxyFunction: "videojs.Flash.onEvent",
                                    errorEventProxyFunction: "videojs.Flash.onError",
                                    autoplay: t.autoplay,
                                    preload: t.preload,
                                    loop: t.loop,
                                    muted: t.muted
                                }, t.flashVars),
                                s = T["default"]({
                                    wmode: "opaque",
                                    bgcolor: "#000000"
                                }, t.params),
                                o = T["default"]({
                                    id: i,
                                    name: i,
                                    "class": "vjs-tech"
                                }, t.attributes);
                            return this.el_ = e.embed(t.swf, n, s, o), this.el_.tech = this, this.el_
                        }, e.prototype.play = function n() {
                            this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                        }, e.prototype.pause = function s() {
                            this.el_.vjs_pause()
                        }, e.prototype.src = function a(t) {
                            return void 0 === t ? this.currentSrc() : this.setSrc(t)
                        }, e.prototype.setSrc = function l(t) {
                            if (t = f.getAbsoluteURL(t), this.el_.vjs_src(t), this.autoplay()) {
                                var e = this;
                                this.setTimeout(function() {
                                    e.play()
                                }, 0)
                            }
                        }, e.prototype.seeking = function u() {
                            return void 0 !== this.lastSeekTarget_
                        }, e.prototype.setCurrentTime = function c(e) {
                            var i = this.seekable();
                            i.length && (e = e > i.start(0) ? e : i.start(0), e = e < i.end(i.length - 1) ? e : i.end(i.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), t.prototype.setCurrentTime.call(this))
                        }, e.prototype.currentTime = function h(t) {
                            return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                        }, e.prototype.currentSrc = function d() {
                            return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                        }, e.prototype.load = function p() {
                            this.el_.vjs_load()
                        }, e.prototype.poster = function m() {
                            this.el_.vjs_getProperty("poster")
                        }, e.prototype.setPoster = function v() {}, e.prototype.seekable = function y() {
                            var t = this.duration();
                            return 0 === t ? g.createTimeRange() : g.createTimeRange(0, t)
                        }, e.prototype.buffered = function b() {
                            var t = this.el_.vjs_getProperty("buffered");
                            return 0 === t.length ? g.createTimeRange() : g.createTimeRange(t[0][0], t[0][1])
                        }, e.prototype.supportsFullScreen = function _() {
                            return !1
                        }, e.prototype.enterFullScreen = function x() {
                            return !1
                        }, e
                    }(c["default"]), j = C.prototype, E = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), S = "networkState,readyState,initialTime,duration,startOffsetTime,paused,ended,videoTracks,audioTracks,videoWidth,videoHeight".split(","), O = 0; O < E.length; O++) l(E[O]), a(E[O]);
                for (var O = 0; O < S.length; O++) l(S[O]);
                C.isSupported = function() {
                    return C.version()[0] >= 10
                }, c["default"].withSourceHandlers(C), C.nativeSourceHandler = {}, C.nativeSourceHandler.canPlayType = function(t) {
                    return t in C.formats ? "maybe" : ""
                }, C.nativeSourceHandler.canHandleSource = function(t) {
                    function e(t) {
                        var e = f.getFileExtension(t);
                        return e ? "video/" + e : ""
                    }
                    var i;
                    return i = t.type ? t.type.replace(/;.*/, "").toLowerCase() : e(t.src), C.nativeSourceHandler.canPlayType(i)
                }, C.nativeSourceHandler.handleSource = function(t, e) {
                    e.setSrc(t.src)
                }, C.nativeSourceHandler.dispose = function() {}, C.registerSourceHandler(C.nativeSourceHandler), C.formats = {
                    "video/flv": "FLV",
                    "video/x-flv": "FLV",
                    "video/mp4": "MP4",
                    "video/m4v": "MP4"
                }, C.onReady = function(t) {
                    var e = d.getEl(t),
                        i = e && e.tech;
                    i && i.el() && C.checkReady(i)
                }, C.checkReady = function(t) {
                    t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function() {
                        C.checkReady(t)
                    }, 50))
                }, C.onEvent = function(t, e) {
                    var i = d.getEl(t).tech;
                    i.trigger(e)
                }, C.onError = function(t, e) {
                    var i = d.getEl(t).tech;
                    return "srcnotfound" === e ? i.error(4) : void i.error("FLASH: " + e)
                }, C.version = function() {
                    var t = "0,0,0";
                    try {
                        t = new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                    } catch (e) {
                        try {
                            k.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (k.plugins["Shockwave Flash 2.0"] || k.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                        } catch (i) {}
                    }
                    return t.split(",")
                }, C.embed = function(t, e, i, n) {
                    var s = C.getEmbedCode(t, e, i, n),
                        o = d.createEl("div", {
                            innerHTML: s
                        }).childNodes[0];
                    return o
                }, C.getEmbedCode = function(t, e, i, n) {
                    var s = '<object type="application/x-shockwave-flash" ',
                        o = "",
                        r = "",
                        a = "";
                    return e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        o += t + "=" + e[t] + "&amp;"
                    }), i = T["default"]({
                        movie: t,
                        flashvars: o,
                        allowScriptAccess: "always",
                        allowNetworking: "all"
                    }, i), Object.getOwnPropertyNames(i).forEach(function(t) {
                        r += '<param name="' + t + '" value="' + i[t] + '" />'
                    }), n = T["default"]({
                        data: t,
                        width: "100%",
                        height: "100%"
                    }, n), Object.getOwnPropertyNames(n).forEach(function(t) {
                        a += t + '="' + n[t] + '" '
                    }), "" + s + a + ">" + r + "</object>"
                }, v["default"](C), b["default"].registerComponent("Flash", C), c["default"].registerTech("Flash", C), i["default"] = C, e.exports = i["default"]
            }, {
                "../component": 67,
                "../utils/dom.js": 134,
                "../utils/time-ranges.js": 142,
                "../utils/url.js": 144,
                "./flash-rtmp": 117,
                "./tech": 121,
                "global/window": 2,
                "object.assign": 45
            }],
            119: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./tech.js"),
                    l = s(a),
                    u = t("../component"),
                    c = s(u),
                    h = t("../utils/dom.js"),
                    d = n(h),
                    p = t("../utils/url.js"),
                    f = n(p),
                    g = t("../utils/fn.js"),
                    m = n(g),
                    v = t("../utils/log.js"),
                    y = s(v),
                    b = t("../utils/browser.js"),
                    _ = n(b),
                    w = t("global/document"),
                    x = s(w),
                    T = t("global/window"),
                    k = s(T),
                    C = t("object.assign"),
                    j = s(C),
                    E = t("../utils/merge-options.js"),
                    S = s(E),
                    O = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n);
                            var s = i.source;
                            if (s && (this.el_.currentSrc !== s.src || i.tag && 3 === i.tag.initNetworkState_) ? this.setSource(s) : this.handleLateInit_(this.el_), this.el_.hasChildNodes()) {
                                for (var r = this.el_.childNodes, a = r.length, l = []; a--;) {
                                    var u = r[a],
                                        c = u.nodeName.toLowerCase();
                                    "track" === c && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(u), this.remoteTextTracks().addTrack_(u.track)) : l.push(u))
                                }
                                for (var h = 0; h < l.length; h++) this.el_.removeChild(l[h])
                            }
                            this.featuresNativeTextTracks && (this.handleTextTrackChange_ = m.bind(this, this.handleTextTrackChange), this.handleTextTrackAdd_ = m.bind(this, this.handleTextTrackAdd), this.handleTextTrackRemove_ = m.bind(this, this.handleTextTrackRemove), this.proxyNativeTextTracks_()), (_.TOUCH_ENABLED && i.nativeControlsForTouch === !0 || _.IS_IPHONE || _.IS_NATIVE_ANDROID) && this.setControls(!0), this.triggerReady()
                        }
                        return r(e, t), e.prototype.dispose = function i() {
                            var i = this.el().textTracks,
                                n = this.textTracks();
                            i && i.removeEventListener && (i.removeEventListener("change", this.handleTextTrackChange_), i.removeEventListener("addtrack", this.handleTextTrackAdd_), i.removeEventListener("removetrack", this.handleTextTrackRemove_));
                            for (var s = n.length; s--;) n.removeTrack_(n[s]);
                            e.disposeMediaElement(this.el_), t.prototype.dispose.call(this)
                        }, e.prototype.createEl = function n() {
                            var t = this.options_.tag;
                            if (!t || this.movingMediaElementInDOM === !1)
                                if (t) {
                                    var i = t.cloneNode(!0);
                                    t.parentNode.insertBefore(i, t), e.disposeMediaElement(t), t = i
                                } else {
                                    t = x["default"].createElement("video");
                                    var n = this.options_.tag && d.getElAttributes(this.options_.tag),
                                        s = S["default"]({}, n);
                                    _.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete s.controls, d.setElAttributes(t, j["default"](s, {
                                        id: this.options_.techId,
                                        "class": "vjs-tech"
                                    }))
                                }
                            for (var o = ["autoplay", "preload", "loop", "muted"], r = o.length - 1; r >= 0; r--) {
                                var a = o[r],
                                    l = {};
                                "undefined" != typeof this.options_[a] && (l[a] = this.options_[a]), d.setElAttributes(t, l)
                            }
                            return t
                        }, e.prototype.handleLateInit_ = function s(t) {
                            var e = this;
                            if (0 !== t.networkState && 3 !== t.networkState) {
                                if (0 === t.readyState) {
                                    var i = function() {
                                        var t = !1,
                                            i = function s() {
                                                t = !0
                                            };
                                        e.on("loadstart", i);
                                        var n = function o() {
                                            t || this.trigger("loadstart")
                                        };
                                        return e.on("loadedmetadata", n), e.ready(function() {
                                            this.off("loadstart", i), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                                        }), {
                                            v: void 0
                                        }
                                    }();
                                    if ("object" == typeof i) return i.v
                                }
                                var n = ["loadstart"];
                                n.push("loadedmetadata"), t.readyState >= 2 && n.push("loadeddata"), t.readyState >= 3 && n.push("canplay"), t.readyState >= 4 && n.push("canplaythrough"), this.ready(function() {
                                    n.forEach(function(t) {
                                        this.trigger(t)
                                    }, this)
                                })
                            }
                        }, e.prototype.proxyNativeTextTracks_ = function a() {
                            var t = this.el().textTracks;
                            if (t) {
                                for (var e = 0; e < t.length; e++) this.textTracks().addTrack_(t[e]);
                                t.addEventListener && (t.addEventListener("change", this.handleTextTrackChange_), t.addEventListener("addtrack", this.handleTextTrackAdd_), t.addEventListener("removetrack", this.handleTextTrackRemove_))
                            }
                        }, e.prototype.handleTextTrackChange = function l(t) {
                            var e = this.textTracks();
                            this.textTracks().trigger({
                                type: "change",
                                target: e,
                                currentTarget: e,
                                srcElement: e
                            })
                        }, e.prototype.handleTextTrackAdd = function u(t) {
                            this.textTracks().addTrack_(t.track)
                        }, e.prototype.handleTextTrackRemove = function c(t) {
                            this.textTracks().removeTrack_(t.track)
                        }, e.prototype.play = function h() {
                            this.el_.play()
                        }, e.prototype.pause = function p() {
                            this.el_.pause()
                        }, e.prototype.paused = function f() {
                            return this.el_.paused
                        }, e.prototype.currentTime = function g() {
                            return this.el_.currentTime
                        }, e.prototype.setCurrentTime = function v(t) {
                            try {
                                this.el_.currentTime = t
                            } catch (e) {
                                y["default"](e, "Video is not ready. (Video.js)")
                            }
                        }, e.prototype.duration = function b() {
                            return this.el_.duration || 0
                        }, e.prototype.buffered = function w() {
                            return this.el_.buffered
                        }, e.prototype.volume = function T() {
                            return this.el_.volume
                        }, e.prototype.setVolume = function C(t) {
                            this.el_.volume = t
                        }, e.prototype.muted = function E() {
                            return this.el_.muted
                        }, e.prototype.setMuted = function O(t) {
                            this.el_.muted = t
                        }, e.prototype.width = function P() {
                            return this.el_.offsetWidth
                        }, e.prototype.height = function D() {
                            return this.el_.offsetHeight
                        }, e.prototype.supportsFullScreen = function M() {
                            if ("function" == typeof this.el_.webkitEnterFullScreen) {
                                var t = k["default"].navigator.userAgent;
                                if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                            }
                            return !1
                        }, e.prototype.enterFullScreen = function I() {
                            var t = this.el_;
                            "webkitDisplayingFullscreen" in t && this.one("webkitbeginfullscreen", function() {
                                this.one("webkitendfullscreen", function() {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                }), this.trigger("fullscreenchange", {
                                    isFullscreen: !0
                                })
                            }), t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                                t.pause(), t.webkitEnterFullScreen()
                            }, 0)) : t.webkitEnterFullScreen()
                        }, e.prototype.exitFullScreen = function A() {
                            this.el_.webkitExitFullScreen()
                        }, e.prototype.src = function N(t) {
                            return void 0 === t ? this.el_.src : void this.setSrc(t)
                        }, e.prototype.setSrc = function H(t) {
                            this.el_.src = t
                        }, e.prototype.load = function F() {
                            this.el_.load()
                        }, e.prototype.reset = function R() {
                            e.resetMediaElement(this.el_)
                        }, e.prototype.currentSrc = function z() {
                            return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                        }, e.prototype.poster = function L() {
                            return this.el_.poster
                        }, e.prototype.setPoster = function W(t) {
                            this.el_.poster = t
                        }, e.prototype.preload = function B() {
                            return this.el_.preload
                        }, e.prototype.setPreload = function V(t) {
                            this.el_.preload = t
                        }, e.prototype.autoplay = function Y() {
                            return this.el_.autoplay
                        }, e.prototype.setAutoplay = function q(t) {
                            this.el_.autoplay = t
                        }, e.prototype.controls = function U() {
                            return this.el_.controls
                        }, e.prototype.setControls = function K(t) {
                            this.el_.controls = !!t
                        }, e.prototype.loop = function X() {
                            return this.el_.loop
                        }, e.prototype.setLoop = function G(t) {
                            this.el_.loop = t
                        }, e.prototype.error = function J() {
                            return this.el_.error
                        }, e.prototype.seeking = function Z() {
                            return this.el_.seeking
                        }, e.prototype.seekable = function Q() {
                            return this.el_.seekable
                        }, e.prototype.ended = function tt() {
                            return this.el_.ended
                        }, e.prototype.defaultMuted = function et() {
                            return this.el_.defaultMuted
                        }, e.prototype.playbackRate = function it() {
                            return this.el_.playbackRate
                        }, e.prototype.played = function nt() {
                            return this.el_.played
                        }, e.prototype.setPlaybackRate = function st(t) {
                            this.el_.playbackRate = t
                        }, e.prototype.networkState = function ot() {
                            return this.el_.networkState
                        }, e.prototype.readyState = function rt() {
                            return this.el_.readyState
                        }, e.prototype.videoWidth = function at() {
                            return this.el_.videoWidth
                        }, e.prototype.videoHeight = function lt() {
                            return this.el_.videoHeight
                        }, e.prototype.textTracks = function ut() {
                            return t.prototype.textTracks.call(this)
                        }, e.prototype.addTextTrack = function ct(e, i, n) {
                            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, i, n) : t.prototype.addTextTrack.call(this, e, i, n)
                        }, e.prototype.addRemoteTextTrack = function ht() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            if (!this.featuresNativeTextTracks) return t.prototype.addRemoteTextTrack.call(this, e);
                            var i = x["default"].createElement("track");
                            return e.kind && (i.kind = e.kind), e.label && (i.label = e.label), (e.language || e.srclang) && (i.srclang = e.language || e.srclang), e["default"] && (i["default"] = e["default"]), e.id && (i.id = e.id), e.src && (i.src = e.src), this.el().appendChild(i), this.remoteTextTrackEls().addTrackElement_(i), this.remoteTextTracks().addTrack_(i.track), i
                        }, e.prototype.removeRemoteTextTrack = function dt(e) {
                            if (!this.featuresNativeTextTracks) return t.prototype.removeRemoteTextTrack.call(this, e);
                            var i = void 0,
                                n = void 0,
                                s = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                            for (this.remoteTextTrackEls().removeTrackElement_(s), this.remoteTextTracks().removeTrack_(e), i = this.$$("track"), n = i.length; n--;)(e === i[n] || e === i[n].track) && this.el().removeChild(i[n])
                        }, e
                    }(l["default"]);
                O.TEST_VID = x["default"].createElement("video");
                var P = x["default"].createElement("track");
                P.kind = "captions", P.srclang = "en", P.label = "English", O.TEST_VID.appendChild(P), O.isSupported = function() {
                    try {
                        O.TEST_VID.volume = .5
                    } catch (t) {
                        return !1
                    }
                    return !!O.TEST_VID.canPlayType
                }, l["default"].withSourceHandlers(O), O.nativeSourceHandler = {}, O.nativeSourceHandler.canPlayType = function(t) {
                    try {
                        return O.TEST_VID.canPlayType(t)
                    } catch (e) {
                        return ""
                    }
                }, O.nativeSourceHandler.canHandleSource = function(t) {
                    var e, i;
                    return t.type ? O.nativeSourceHandler.canPlayType(t.type) : t.src ? (i = f.getFileExtension(t.src), O.nativeSourceHandler.canPlayType("video/" + i)) : ""
                }, O.nativeSourceHandler.handleSource = function(t, e) {
                    e.setSrc(t.src)
                }, O.nativeSourceHandler.dispose = function() {}, O.registerSourceHandler(O.nativeSourceHandler), O.canControlVolume = function() {
                    var t = O.TEST_VID.volume;
                    return O.TEST_VID.volume = t / 2 + .1, t !== O.TEST_VID.volume
                }, O.canControlPlaybackRate = function() {
                    if (_.IS_ANDROID && _.IS_CHROME) return !1;
                    var t = O.TEST_VID.playbackRate;
                    return O.TEST_VID.playbackRate = t / 2 + .1, t !== O.TEST_VID.playbackRate
                }, O.supportsNativeTextTracks = function() {
                    var t;
                    return t = !!O.TEST_VID.textTracks, t && O.TEST_VID.textTracks.length > 0 && (t = "number" != typeof O.TEST_VID.textTracks[0].mode), t && _.IS_FIREFOX && (t = !1), !t || "onremovetrack" in O.TEST_VID.textTracks || (t = !1), t
                }, O.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], O.prototype.featuresVolumeControl = O.canControlVolume(), O.prototype.featuresPlaybackRate = O.canControlPlaybackRate(), O.prototype.movingMediaElementInDOM = !_.IS_IOS, O.prototype.featuresFullscreenResize = !0, O.prototype.featuresProgressEvents = !0, O.prototype.featuresNativeTextTracks = O.supportsNativeTextTracks();
                var D = void 0,
                    M = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                    I = /^video\/mp4/i;
                O.patchCanPlayType = function() {
                    _.ANDROID_VERSION >= 4 && (D || (D = O.TEST_VID.constructor.prototype.canPlayType), O.TEST_VID.constructor.prototype.canPlayType = function(t) {
                        return t && M.test(t) ? "maybe" : D.call(this, t)
                    }), _.IS_OLD_ANDROID && (D || (D = O.TEST_VID.constructor.prototype.canPlayType), O.TEST_VID.constructor.prototype.canPlayType = function(t) {
                        return t && I.test(t) ? "maybe" : D.call(this, t)
                    })
                }, O.unpatchCanPlayType = function() {
                    var t = O.TEST_VID.constructor.prototype.canPlayType;
                    return O.TEST_VID.constructor.prototype.canPlayType = D, D = null, t
                }, O.patchCanPlayType(), O.disposeMediaElement = function(t) {
                    if (t) {
                        for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                            try {
                                t.load()
                            } catch (e) {}
                        }()
                    }
                }, O.resetMediaElement = function(t) {
                    if (t) {
                        for (var e = t.querySelectorAll("source"), i = e.length; i--;) t.removeChild(e[i]);
                        t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                            try {
                                t.load()
                            } catch (e) {}
                        }()
                    }
                }, c["default"].registerComponent("Html5", O), l["default"].registerTech("Html5", O), i["default"] = O, e.exports = i["default"]
            }, {
                "../component": 67,
                "../utils/browser.js": 131,
                "../utils/dom.js": 134,
                "../utils/fn.js": 136,
                "../utils/log.js": 139,
                "../utils/merge-options.js": 140,
                "../utils/url.js": 144,
                "./tech.js": 121,
                "global/document": 1,
                "global/window": 2,
                "object.assign": 45
            }],
            120: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function o(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var r = t("../component.js"),
                    a = n(r),
                    l = t("./tech.js"),
                    u = n(l),
                    c = t("global/window"),
                    h = n(c),
                    d = t("../utils/to-title-case.js"),
                    p = n(d),
                    f = function(t) {
                        function e(i, n, o) {
                            if (s(this, e), t.call(this, i, n, o), n.playerOptions.sources && 0 !== n.playerOptions.sources.length) i.src(n.playerOptions.sources);
                            else
                                for (var r = 0, l = n.playerOptions.techOrder; r < l.length; r++) {
                                    var c = p["default"](l[r]),
                                        h = u["default"].getTech(c);
                                    if (c || (h = a["default"].getComponent(c)), h && h.isSupported()) {
                                        i.loadTech_(c);
                                        break
                                    }
                                }
                        }
                        return o(e, t), e
                    }(a["default"]);
                a["default"].registerComponent("MediaLoader", f), i["default"] = f, e.exports = i["default"]
            }, {
                "../component.js": 67,
                "../utils/to-title-case.js": 143,
                "./tech.js": 121,
                "global/window": 2
            }],
            121: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../component"),
                    l = s(a),
                    u = t("../tracks/html-track-element"),
                    c = s(u),
                    h = t("../tracks/html-track-element-list"),
                    d = s(h),
                    p = t("../utils/merge-options.js"),
                    f = s(p),
                    g = t("../tracks/text-track"),
                    m = s(g),
                    v = t("../tracks/text-track-list"),
                    y = s(v),
                    b = t("../utils/fn.js"),
                    _ = n(b),
                    w = t("../utils/log.js"),
                    x = s(w),
                    T = t("../utils/time-ranges.js"),
                    k = t("../utils/buffer.js"),
                    C = t("../media-error.js"),
                    j = s(C),
                    E = t("global/window"),
                    S = s(E),
                    O = t("global/document"),
                    P = s(O),
                    D = function(t) {
                        function e() {
                            var i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                                n = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                            o(this, e), i.reportTouchActivity = !1, t.call(this, null, i, n), this.hasStarted_ = !1, this.on("playing", function() {
                                this.hasStarted_ = !0
                            }), this.on("loadstart", function() {
                                this.hasStarted_ = !1
                            }), this.textTracks_ = i.textTracks, this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), (i.nativeCaptions === !1 || i.nativeTextTracks === !1) && (this.featuresNativeTextTracks = !1), this.featuresNativeTextTracks || this.on("ready", this.emulateTextTracks), this.initTextTrackListeners(), this.emitTapEvents()
                        }
                        return r(e, t), e.prototype.manualProgressOn = function i() {
                            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                        }, e.prototype.manualProgressOff = function n() {
                            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                        }, e.prototype.trackProgress = function s() {
                            this.stopTrackingProgress(), this.progressInterval = this.setInterval(_.bind(this, function() {
                                var t = this.bufferedPercent();
                                this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                            }), 500)
                        }, e.prototype.onDurationChange = function a() {
                            this.duration_ = this.duration()
                        }, e.prototype.buffered = function l() {
                            return T.createTimeRange(0, 0)
                        }, e.prototype.bufferedPercent = function u() {
                            return k.bufferedPercent(this.buffered(), this.duration_)
                        }, e.prototype.stopTrackingProgress = function h() {
                            this.clearInterval(this.progressInterval)
                        }, e.prototype.manualTimeUpdatesOn = function p() {
                            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                        }, e.prototype.manualTimeUpdatesOff = function g() {
                            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                        }, e.prototype.trackCurrentTime = function m() {
                            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                                this.trigger({
                                    type: "timeupdate",
                                    target: this,
                                    manuallyTriggered: !0
                                })
                            }, 250)
                        }, e.prototype.stopTrackingCurrentTime = function v() {
                            this.clearInterval(this.currentTimeInterval), this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, e.prototype.dispose = function b() {
                            var e = this.textTracks();
                            if (e)
                                for (var i = e.length; i--;) this.removeRemoteTextTrack(e[i]);
                            this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                        }, e.prototype.reset = function w() {}, e.prototype.error = function C(t) {
                            return void 0 !== t && (t instanceof j["default"] ? this.error_ = t : this.error_ = new j["default"](t), this.trigger("error")), this.error_
                        }, e.prototype.played = function E() {
                            return this.hasStarted_ ? T.createTimeRange(0, 0) : T.createTimeRange()
                        }, e.prototype.setCurrentTime = function O() {
                            this.manualTimeUpdates && this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, e.prototype.initTextTrackListeners = function D() {
                            var t = _.bind(this, function() {
                                    this.trigger("texttrackchange")
                                }),
                                e = this.textTracks();
                            e && (e.addEventListener("removetrack", t), e.addEventListener("addtrack", t), this.on("dispose", _.bind(this, function() {
                                e.removeEventListener("removetrack", t), e.removeEventListener("addtrack", t)
                            })))
                        }, e.prototype.emulateTextTracks = function I() {
                            var t = this,
                                e = this.textTracks();
                            if (e) {
                                S["default"].WebVTT || null == this.el().parentNode || ! function() {
                                    var e = P["default"].createElement("script");
                                    e.src = t.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", e.onload = function() {
                                        t.trigger("vttjsloaded")
                                    }, e.onerror = function() {
                                        t.trigger("vttjserror")
                                    }, t.on("dispose", function() {
                                        e.onload = null, e.onerror = null
                                    }), t.el().parentNode.appendChild(e), S["default"].WebVTT = !0
                                }();
                                var i = function s() {
                                        return t.trigger("texttrackchange")
                                    },
                                    n = function o() {
                                        i();
                                        for (var t = 0; t < e.length; t++) {
                                            var n = e[t];
                                            n.removeEventListener("cuechange", i), "showing" === n.mode && n.addEventListener("cuechange", i)
                                        }
                                    };
                                n(), e.addEventListener("change", n), this.on("dispose", function() {
                                    e.removeEventListener("change", n)
                                })
                            }
                        }, e.prototype.textTracks = function A() {
                            return this.textTracks_ = this.textTracks_ || new y["default"], this.textTracks_
                        }, e.prototype.remoteTextTracks = function N() {
                            return this.remoteTextTracks_ = this.remoteTextTracks_ || new y["default"], this.remoteTextTracks_
                        }, e.prototype.remoteTextTrackEls = function H() {
                            return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new d["default"], this.remoteTextTrackEls_
                        }, e.prototype.addTextTrack = function F(t, e, i) {
                            if (!t) throw new Error("TextTrack kind is required but was not provided");
                            return M(this, t, e, i)
                        }, e.prototype.addRemoteTextTrack = function R(t) {
                            var e = f["default"](t, {
                                    tech: this
                                }),
                                i = new c["default"](e);
                            return this.remoteTextTrackEls().addTrackElement_(i), this.remoteTextTracks().addTrack_(i.track), this.textTracks().addTrack_(i.track), i
                        }, e.prototype.removeRemoteTextTrack = function z(t) {
                            this.textTracks().removeTrack_(t);
                            var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                            this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack_(t)
                        }, e.prototype.setPoster = function L() {}, e.prototype.canPlayType = function W() {
                            return ""
                        }, e.isTech = function B(t) {
                            return t.prototype instanceof e || t instanceof e || t === e
                        }, e.registerTech = function V(t, i) {
                            if (e.techs_ || (e.techs_ = {}), !e.isTech(i)) throw new Error("Tech " + t + " must be a Tech");
                            return e.techs_[t] = i, i
                        }, e.getTech = function Y(t) {
                            return e.techs_ && e.techs_[t] ? e.techs_[t] : S["default"] && S["default"].videojs && S["default"].videojs[t] ? (x["default"].warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), S["default"].videojs[t]) : void 0
                        }, e
                    }(l["default"]);
                D.prototype.textTracks_;
                var M = function I(t, e, i, n) {
                    var s = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4],
                        o = t.textTracks();
                    s.kind = e, i && (s.label = i), n && (s.language = n), s.tech = t;
                    var r = new m["default"](s);
                    return o.addTrack_(r), r
                };
                D.prototype.featuresVolumeControl = !0, D.prototype.featuresFullscreenResize = !1, D.prototype.featuresPlaybackRate = !1, D.prototype.featuresProgressEvents = !1, D.prototype.featuresTimeupdateEvents = !1, D.prototype.featuresNativeTextTracks = !1, D.withSourceHandlers = function(t) {
                    t.registerSourceHandler = function(e, i) {
                        var n = t.sourceHandlers;
                        n || (n = t.sourceHandlers = []), void 0 === i && (i = n.length), n.splice(i, 0, e)
                    }, t.canPlayType = function(e) {
                        for (var i = t.sourceHandlers || [], n = void 0, s = 0; s < i.length; s++)
                            if (n = i[s].canPlayType(e)) return n;
                        return ""
                    }, t.selectSourceHandler = function(e) {
                        for (var i = t.sourceHandlers || [], n = void 0, s = 0; s < i.length; s++)
                            if (n = i[s].canHandleSource(e)) return i[s];
                        return null
                    }, t.canPlaySource = function(e) {
                        var i = t.selectSourceHandler(e);
                        return i ? i.canHandleSource(e) : ""
                    };
                    var e = ["seekable", "duration"];
                    e.forEach(function(t) {
                        var e = this[t];
                        "function" == typeof e && (this[t] = function() {
                            return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
                        })
                    }, t.prototype), t.prototype.setSource = function(e) {
                        var i = t.selectSourceHandler(e);
                        return i || (t.nativeSourceHandler ? i = t.nativeSourceHandler : x["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ = e, this.sourceHandler_ = i.handleSource(e, this), this.on("dispose", this.disposeSourceHandler), this
                    }, t.prototype.disposeSourceHandler = function() {
                        this.sourceHandler_ && this.sourceHandler_.dispose && this.sourceHandler_.dispose()
                    }
                }, l["default"].registerComponent("Tech", D), l["default"].registerComponent("MediaTechController", D), D.registerTech("Tech", D), i["default"] = D, e.exports = i["default"]
            }, {
                "../component": 67,
                "../media-error.js": 105,
                "../tracks/html-track-element": 123,
                "../tracks/html-track-element-list": 122,
                "../tracks/text-track": 130,
                "../tracks/text-track-list": 128,
                "../utils/buffer.js": 132,
                "../utils/fn.js": 136,
                "../utils/log.js": 139,
                "../utils/merge-options.js": 140,
                "../utils/time-ranges.js": 142,
                "global/document": 1,
                "global/window": 2
            }],
            122: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                i.__esModule = !0;
                var r = t("../utils/browser.js"),
                    a = s(r),
                    l = t("global/document"),
                    u = n(l),
                    c = function() {
                        function t() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                            o(this, t);
                            var i = this;
                            if (a.IS_IE8) {
                                i = u["default"].createElement("custom");
                                for (var n in t.prototype) "constructor" !== n && (i[n] = t.prototype[n])
                            }
                            i.trackElements_ = [], Object.defineProperty(i, "length", {
                                get: function l() {
                                    return this.trackElements_.length
                                }
                            });
                            for (var s = 0, r = e.length; r > s; s++) i.addTrackElement_(e[s]);
                            return a.IS_IE8 ? i : void 0
                        }
                        return t.prototype.addTrackElement_ = function e(t) {
                            this.trackElements_.push(t)
                        }, t.prototype.getTrackElementByTrack_ = function i(t) {
                            for (var e = void 0, i = 0, n = this.trackElements_.length; n > i; i++)
                                if (t === this.trackElements_[i].track) {
                                    e = this.trackElements_[i];
                                    break
                                }
                            return e
                        }, t.prototype.removeTrackElement_ = function n(t) {
                            for (var e = 0, i = this.trackElements_.length; i > e; e++)
                                if (t === this.trackElements_[e]) {
                                    this.trackElements_.splice(e, 1);
                                    break
                                }
                        }, t
                    }();
                i["default"] = c, e.exports = i["default"]
            }, {
                "../utils/browser.js": 131,
                "global/document": 1
            }],
            123: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../utils/browser.js"),
                    l = s(a),
                    u = t("global/document"),
                    c = n(u),
                    h = t("../event-target"),
                    d = n(h),
                    p = t("../tracks/text-track"),
                    f = n(p),
                    g = 0,
                    m = 1,
                    v = 2,
                    y = 3,
                    b = function(t) {
                        function e() {
                            var i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            o(this, e), t.call(this);
                            var n = void 0,
                                s = this;
                            if (l.IS_IE8) {
                                s = c["default"].createElement("custom");
                                for (var r in e.prototype) "constructor" !== r && (s[r] = e.prototype[r])
                            }
                            var a = new f["default"](i);
                            return s.kind = a.kind, s.src = a.src, s.srclang = a.language, s.label = a.label, s["default"] = a["default"], Object.defineProperty(s, "readyState", {
                                get: function u() {
                                    return n
                                }
                            }), Object.defineProperty(s, "track", {
                                get: function h() {
                                    return a
                                }
                            }), n = g, a.addEventListener("loadeddata", function() {
                                n = v, s.trigger({
                                    type: "load",
                                    target: s
                                })
                            }), l.IS_IE8 ? s : void 0
                        }
                        return r(e, t), e
                    }(d["default"]);
                b.prototype.allowedEvents_ = {
                    load: "load"
                }, b.NONE = g, b.LOADING = m, b.LOADED = v, b.ERROR = y, i["default"] = b, e.exports = i["default"]
            }, {
                "../event-target": 101,
                "../tracks/text-track": 130,
                "../utils/browser.js": 131,
                "global/document": 1
            }],
            124: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }
                i.__esModule = !0;
                var r = t("../utils/browser.js"),
                    a = s(r),
                    l = t("global/document"),
                    u = n(l),
                    c = function() {
                        function t(e) {
                            o(this, t);
                            var i = this;
                            if (a.IS_IE8) {
                                i = u["default"].createElement("custom");
                                for (var n in t.prototype) "constructor" !== n && (i[n] = t.prototype[n])
                            }
                            return t.prototype.setCues_.call(i, e), Object.defineProperty(i, "length", {
                                get: function s() {
                                    return this.length_
                                }
                            }), a.IS_IE8 ? i : void 0
                        }
                        return t.prototype.setCues_ = function e(t) {
                            var e = this.length || 0,
                                i = 0,
                                n = t.length;
                            this.cues_ = t, this.length_ = t.length;
                            var s = function o(t) {
                                "" + t in this || Object.defineProperty(this, "" + t, {
                                    get: function e() {
                                        return this.cues_[t]
                                    }
                                })
                            };
                            if (n > e)
                                for (i = e; n > i; i++) s.call(this, i)
                        }, t.prototype.getCueById = function i(t) {
                            for (var e = null, i = 0, n = this.length; n > i; i++) {
                                var s = this[i];
                                if (s.id === t) {
                                    e = s;
                                    break
                                }
                            }
                            return e
                        }, t
                    }();
                i["default"] = c, e.exports = i["default"]
            }, {
                "../utils/browser.js": 131,
                "global/document": 1
            }],
            125: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function a(t, e) {
                    return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
                }

                function l(t, e, i) {
                    try {
                        t.style[e] = i
                    } catch (n) {}
                }
                i.__esModule = !0;
                var u = t("../component"),
                    c = s(u),
                    h = t("../menu/menu.js"),
                    d = s(h),
                    p = t("../menu/menu-item.js"),
                    f = s(p),
                    g = t("../menu/menu-button.js"),
                    m = s(g),
                    v = t("../utils/fn.js"),
                    y = n(v),
                    b = t("global/document"),
                    _ = s(b),
                    w = t("global/window"),
                    x = s(w),
                    T = "#222",
                    k = "#ccc",
                    C = {
                        monospace: "monospace",
                        sansSerif: "sans-serif",
                        serif: "serif",
                        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                        monospaceSerif: '"Courier New", monospace',
                        proportionalSansSerif: "sans-serif",
                        proportionalSerif: "serif",
                        casual: '"Comic Sans MS", Impact, fantasy',
                        script: '"Monotype Corsiva", cursive',
                        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                    },
                    j = function(t) {
                        function e(i, n, s) {
                            o(this, e), t.call(this, i, n, s), i.on("loadstart", y.bind(this, this.toggleDisplay)), i.on("texttrackchange", y.bind(this, this.updateDisplay)), i.ready(y.bind(this, function() {
                                if (i.tech_ && i.tech_.featuresNativeTextTracks) return void this.hide();
                                i.on("fullscreenchange", y.bind(this, this.updateDisplay));
                                for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    this.player_.addRemoteTextTrack(n)
                                }
                                var s = {
                                        captions: 1,
                                        subtitles: 1
                                    },
                                    o = this.player_.textTracks(),
                                    r = void 0,
                                    a = void 0;
                                if (o) {
                                    for (var e = 0; e < o.length; e++) {
                                        var n = o[e];
                                        n["default"] && ("descriptions" !== n.kind || r ? n.kind in s && !a && (a = n) : r = n)
                                    }
                                    a ? a.mode = "showing" : r && (r.mode = "showing")
                                }
                            }))
                        }
                        return r(e, t), e.prototype.toggleDisplay = function i() {
                            this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                        }, e.prototype.createEl = function n() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-text-track-display"
                            }, {
                                "aria-live": "assertive",
                                "aria-atomic": "true"
                            })
                        }, e.prototype.clearDisplay = function s() {
                            "function" == typeof x["default"].WebVTT && x["default"].WebVTT.processCues(x["default"], [], this.el_)
                        }, e.prototype.updateDisplay = function u() {
                            var t = this.player_.textTracks();
                            if (this.clearDisplay(), t) {
                                for (var e = null, i = null, n = t.length; n--;) {
                                    var s = t[n];
                                    "showing" === s.mode && ("descriptions" === s.kind ? e = s : i = s)
                                }
                                i ? this.updateForTrack(i) : e && this.updateForTrack(e)
                            }
                        }, e.prototype.updateForTrack = function c(t) {
                            if ("function" == typeof x["default"].WebVTT && t.activeCues) {
                                for (var e = this.player_.textTrackSettings.getValues(), i = [], n = 0; n < t.activeCues.length; n++) i.push(t.activeCues[n]);
                                x["default"].WebVTT.processCues(x["default"], i, this.el_);
                                for (var s = i.length; s--;) {
                                    var o = i[s];
                                    if (o) {
                                        var r = o.displayState;
                                        if (e.color && (r.firstChild.style.color = e.color), e.textOpacity && l(r.firstChild, "color", a(e.color || "#fff", e.textOpacity)), e.backgroundColor && (r.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && l(r.firstChild, "backgroundColor", a(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? l(r, "backgroundColor", a(e.windowColor, e.windowOpacity)) : r.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? r.firstChild.style.textShadow = "2px 2px 3px " + T + ", 2px 2px 4px " + T + ", 2px 2px 5px " + T : "raised" === e.edgeStyle ? r.firstChild.style.textShadow = "1px 1px " + T + ", 2px 2px " + T + ", 3px 3px " + T : "depressed" === e.edgeStyle ? r.firstChild.style.textShadow = "1px 1px " + k + ", 0 1px " + k + ", -1px -1px " + T + ", 0 -1px " + T : "uniform" === e.edgeStyle && (r.firstChild.style.textShadow = "0 0 4px " + T + ", 0 0 4px " + T + ", 0 0 4px " + T + ", 0 0 4px " + T)), e.fontPercent && 1 !== e.fontPercent) {
                                            var u = x["default"].parseFloat(r.style.fontSize);
                                            r.style.fontSize = u * e.fontPercent + "px", r.style.height = "auto", r.style.top = "auto", r.style.bottom = "2px"
                                        }
                                        e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? r.firstChild.style.fontVariant = "small-caps" : r.firstChild.style.fontFamily = C[e.fontFamily])
                                    }
                                }
                            }
                        }, e
                    }(c["default"]);
                c["default"].registerComponent("TextTrackDisplay", j), i["default"] = j, e.exports = i["default"]
            }, {
                "../component": 67,
                "../menu/menu-button.js": 106,
                "../menu/menu-item.js": 107,
                "../menu/menu.js": 108,
                "../utils/fn.js": 136,
                "global/document": 1,
                "global/window": 2
            }],
            126: [function(t, e, i) {
                "use strict";
                i.__esModule = !0;
                var n = {
                        disabled: "disabled",
                        hidden: "hidden",
                        showing: "showing"
                    },
                    s = {
                        subtitles: "subtitles",
                        captions: "captions",
                        descriptions: "descriptions",
                        chapters: "chapters",
                        metadata: "metadata"
                    };
                i.TextTrackMode = n, i.TextTrackKind = s
            }, {}],
            127: [function(t, e, i) {
                "use strict";
                i.__esModule = !0;
                var n = function r(t) {
                        var e = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, i, n) {
                            return t[i] && (e[i] = t[i]), e
                        }, {
                            cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
                                return {
                                    startTime: t.startTime,
                                    endTime: t.endTime,
                                    text: t.text,
                                    id: t.id
                                }
                            })
                        });
                        return e
                    },
                    s = function a(t) {
                        var e = t.$$("track"),
                            i = Array.prototype.map.call(e, function(t) {
                                return t.track
                            }),
                            s = Array.prototype.map.call(e, function(t) {
                                var e = n(t.track);
                                return t.src && (e.src = t.src), e
                            });
                        return s.concat(Array.prototype.filter.call(t.textTracks(), function(t) {
                            return -1 === i.indexOf(t)
                        }).map(n))
                    },
                    o = function l(t, e) {
                        return t.forEach(function(t) {
                            var i = e.addRemoteTextTrack(t).track;
                            !t.src && t.cues && t.cues.forEach(function(t) {
                                return i.addCue(t)
                            })
                        }), e.textTracks()
                    };
                i["default"] = {
                    textTracksToJson: s,
                    jsonToTextTracks: o,
                    trackToJson_: n
                }, e.exports = i["default"]
            }, {}],
            128: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("../event-target"),
                    l = s(a),
                    u = t("../utils/fn.js"),
                    c = n(u),
                    h = t("../utils/browser.js"),
                    d = n(h),
                    p = t("global/document"),
                    f = s(p),
                    g = function(t) {
                        function e() {
                            var i = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                            o(this, e), t.call(this);
                            var n = this;
                            if (d.IS_IE8) {
                                n = f["default"].createElement("custom");
                                for (var s in e.prototype) "constructor" !== s && (n[s] = e.prototype[s])
                            }
                            n.tracks_ = [], Object.defineProperty(n, "length", {
                                get: function a() {
                                    return this.tracks_.length
                                }
                            });
                            for (var r = 0; r < i.length; r++) n.addTrack_(i[r]);
                            return d.IS_IE8 ? n : void 0
                        }
                        return r(e, t), e.prototype.addTrack_ = function i(t) {
                            var e = this.tracks_.length;
                            "" + e in this || Object.defineProperty(this, e, {
                                get: function i() {
                                    return this.tracks_[e]
                                }
                            }), t.addEventListener("modechange", c.bind(this, function() {
                                this.trigger("change")
                            })), -1 === this.tracks_.indexOf(t) && (this.tracks_.push(t), this.trigger({
                                track: t,
                                type: "addtrack"
                            }))
                        }, e.prototype.removeTrack_ = function n(t) {
                            for (var e = void 0, i = 0, n = this.length; n > i; i++)
                                if (this[i] === t) {
                                    e = this[i], e.off && e.off(), this.tracks_.splice(i, 1);
                                    break
                                }
                            e && this.trigger({
                                track: e,
                                type: "removetrack"
                            })
                        }, e.prototype.getTrackById = function s(t) {
                            for (var e = null, i = 0, n = this.length; n > i; i++) {
                                var s = this[i];
                                if (s.id === t) {
                                    e = s;
                                    break
                                }
                            }
                            return e
                        }, e
                    }(l["default"]);
                g.prototype.allowedEvents_ = {
                    change: "change",
                    addtrack: "addtrack",
                    removetrack: "removetrack"
                };
                for (var m in g.prototype.allowedEvents_) g.prototype["on" + m] = null;
                i["default"] = g, e.exports = i["default"]
            }, {
                "../event-target": 101,
                "../utils/browser.js": 131,
                "../utils/fn.js": 136,
                "global/document": 1
            }],
            129: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function a(t) {
                    var e = void 0;
                    return t.selectedOptions ? e = t.selectedOptions[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
                }

                function l(t, e) {
                    if (e) {
                        var i = void 0;
                        for (i = 0; i < t.options.length; i++) {
                            var n = t.options[i];
                            if (n.value === e) break
                        }
                        t.selectedIndex = i
                    }
                }

                function u() {
                    var t = '<div class="vjs-tracksettings">\n      <div class="vjs-tracksettings-colors">\n        <div class="vjs-fg-color vjs-tracksetting">\n            <label class="vjs-label">Foreground</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <select>\n                <option value="">---</option>\n                <option value="1">Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n        </div> <!-- vjs-fg-color -->\n        <div class="vjs-bg-color vjs-tracksetting">\n            <label class="vjs-label">Background</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-bg-color -->\n        <div class="window-color vjs-tracksetting">\n            <label class="vjs-label">Window</label>\n            <select>\n              <option value="">---</option>\n              <option value="#FFF">White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n                <select>\n                  <option value="">---</option>\n                  <option value="1">Opaque</option>\n                  <option value="0.5">Semi-Transparent</option>\n                  <option value="0">Transparent</option>\n                </select>\n            </span>\n        </div> <!-- vjs-window-color -->\n      </div> <!-- vjs-tracksettings -->\n      <div class="vjs-tracksettings-font">\n        <div class="vjs-font-percent vjs-tracksetting">\n          <label class="vjs-label">Font Size</label>\n          <select>\n            <option value="0.50">50%</option>\n            <option value="0.75">75%</option>\n            <option value="1.00" selected>100%</option>\n            <option value="1.25">125%</option>\n            <option value="1.50">150%</option>\n            <option value="1.75">175%</option>\n            <option value="2.00">200%</option>\n            <option value="3.00">300%</option>\n            <option value="4.00">400%</option>\n          </select>\n        </div> <!-- vjs-font-percent -->\n        <div class="vjs-edge-style vjs-tracksetting">\n          <label class="vjs-label">Text Edge Style</label>\n          <select>\n            <option value="none">None</option>\n            <option value="raised">Raised</option>\n            <option value="depressed">Depressed</option>\n            <option value="uniform">Uniform</option>\n            <option value="dropshadow">Dropshadow</option>\n          </select>\n        </div> <!-- vjs-edge-style -->\n        <div class="vjs-font-family vjs-tracksetting">\n          <label class="vjs-label">Font Family</label>\n          <select>\n            <option value="">Default</option>\n            <option value="monospaceSerif">Monospace Serif</option>\n            <option value="proportionalSerif">Proportional Serif</option>\n            <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n            <option value="proportionalSansSerif">Proportional Sans-Serif</option>\n            <option value="casual">Casual</option>\n            <option value="script">Script</option>\n            <option value="small-caps">Small Caps</option>\n          </select>\n        </div> <!-- vjs-font-family -->\n      </div>\n    </div>\n    <div class="vjs-tracksettings-controls">\n      <button class="vjs-default-button">Defaults</button>\n      <button class="vjs-done-button">Done</button>\n    </div>';
                    return t
                }
                i.__esModule = !0;
                var c = t("../component"),
                    h = s(c),
                    d = t("../utils/events.js"),
                    p = n(d),
                    f = t("../utils/fn.js"),
                    g = n(f),
                    m = t("../utils/log.js"),
                    v = s(m),
                    y = t("safe-json-parse/tuple"),
                    b = s(y),
                    _ = t("global/window"),
                    w = s(_),
                    x = function(t) {
                        function e(i, n) {
                            o(this, e), t.call(this, i, n), this.hide(), void 0 === n.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings), p.on(this.$(".vjs-done-button"), "click", g.bind(this, function() {
                                this.saveSettings(), this.hide()
                            })), p.on(this.$(".vjs-default-button"), "click", g.bind(this, function() {
                                this.$(".vjs-fg-color > select").selectedIndex = 0, this.$(".vjs-bg-color > select").selectedIndex = 0, this.$(".window-color > select").selectedIndex = 0, this.$(".vjs-text-opacity > select").selectedIndex = 0, this.$(".vjs-bg-opacity > select").selectedIndex = 0, this.$(".vjs-window-opacity > select").selectedIndex = 0, this.$(".vjs-edge-style select").selectedIndex = 0, this.$(".vjs-font-family select").selectedIndex = 0, this.$(".vjs-font-percent select").selectedIndex = 2, this.updateDisplay()
                            })), p.on(this.$(".vjs-fg-color > select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-bg-color > select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".window-color > select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-text-opacity > select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-bg-opacity > select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-window-opacity > select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-font-percent select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-edge-style select"), "change", g.bind(this, this.updateDisplay)), p.on(this.$(".vjs-font-family select"), "change", g.bind(this, this.updateDisplay)), this.options_.persistTextTrackSettings && this.restoreSettings()
                        }
                        return r(e, t), e.prototype.createEl = function i() {
                            return t.prototype.createEl.call(this, "div", {
                                className: "vjs-caption-settings vjs-modal-overlay",
                                innerHTML: u()
                            })
                        }, e.prototype.getValues = function n() {
                            var t = a(this.$(".vjs-edge-style select")),
                                e = a(this.$(".vjs-font-family select")),
                                i = a(this.$(".vjs-fg-color > select")),
                                n = a(this.$(".vjs-text-opacity > select")),
                                s = a(this.$(".vjs-bg-color > select")),
                                o = a(this.$(".vjs-bg-opacity > select")),
                                r = a(this.$(".window-color > select")),
                                l = a(this.$(".vjs-window-opacity > select")),
                                u = w["default"].parseFloat(a(this.$(".vjs-font-percent > select"))),
                                c = {
                                    backgroundOpacity: o,
                                    textOpacity: n,
                                    windowOpacity: l,
                                    edgeStyle: t,
                                    fontFamily: e,
                                    color: i,
                                    backgroundColor: s,
                                    windowColor: r,
                                    fontPercent: u
                                };
                            for (var h in c)("" === c[h] || "none" === c[h] || "fontPercent" === h && 1 === c[h]) && delete c[h];
                            return c
                        }, e.prototype.setValues = function s(t) {
                            l(this.$(".vjs-edge-style select"), t.edgeStyle), l(this.$(".vjs-font-family select"), t.fontFamily), l(this.$(".vjs-fg-color > select"), t.color), l(this.$(".vjs-text-opacity > select"), t.textOpacity), l(this.$(".vjs-bg-color > select"), t.backgroundColor), l(this.$(".vjs-bg-opacity > select"), t.backgroundOpacity), l(this.$(".window-color > select"), t.windowColor), l(this.$(".vjs-window-opacity > select"), t.windowOpacity);
                            var e = t.fontPercent;
                            e && (e = e.toFixed(2)), l(this.$(".vjs-font-percent > select"), e)
                        }, e.prototype.restoreSettings = function c() {
                            var t = void 0,
                                e = void 0;
                            try {
                                var i = b["default"](w["default"].localStorage.getItem("vjs-text-track-settings"));
                                t = i[0], e = i[1], t && v["default"].error(t)
                            } catch (n) {
                                v["default"].warn(n)
                            }
                            e && this.setValues(e)
                        }, e.prototype.saveSettings = function h() {
                            if (this.options_.persistTextTrackSettings) {
                                var t = this.getValues();
                                try {
                                    Object.getOwnPropertyNames(t).length > 0 ? w["default"].localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : w["default"].localStorage.removeItem("vjs-text-track-settings")
                                } catch (e) {
                                    v["default"].warn(e)
                                }
                            }
                        }, e.prototype.updateDisplay = function d() {
                            var t = this.player_.getChild("textTrackDisplay");
                            t && t.updateDisplay()
                        }, e
                    }(h["default"]);
                h["default"].registerComponent("TextTrackSettings", x), i["default"] = x, e.exports = i["default"]
            }, {
                "../component": 67,
                "../utils/events.js": 135,
                "../utils/fn.js": 136,
                "../utils/log.js": 139,
                "global/window": 2,
                "safe-json-parse/tuple": 54
            }],
            130: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function r(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }
                i.__esModule = !0;
                var a = t("./text-track-cue-list"),
                    l = s(a),
                    u = t("../utils/fn.js"),
                    c = n(u),
                    h = t("../utils/guid.js"),
                    d = n(h),
                    p = t("../utils/browser.js"),
                    f = n(p),
                    g = t("./text-track-enums"),
                    m = n(g),
                    v = t("../utils/log.js"),
                    y = s(v),
                    b = t("../event-target"),
                    _ = s(b),
                    w = t("global/document"),
                    x = s(w),
                    T = t("global/window"),
                    k = s(T),
                    C = t("../utils/url.js"),
                    j = t("xhr"),
                    E = s(j),
                    S = function D(t, e) {
                        var i = new k["default"].WebVTT.Parser(k["default"], k["default"].vttjs, k["default"].WebVTT.StringDecoder()),
                            n = [];
                        i.oncue = function(t) {
                            e.addCue(t)
                        }, i.onparsingerror = function(t) {
                            n.push(t)
                        }, i.onflush = function() {
                            e.trigger({
                                type: "loadeddata",
                                target: e
                            })
                        }, i.parse(t), n.length > 0 && (console.groupCollapsed && console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function(t) {
                            return y["default"].error(t)
                        }), console.groupEnd && console.groupEnd()), i.flush()
                    },
                    O = function M(t, e) {
                        var i = {
                                uri: t
                            },
                            n = C.isCrossOrigin(t);
                        n && (i.cors = n), E["default"](i, c.bind(this, function(t, i, n) {
                            return t ? y["default"].error(t, i) : (e.loaded_ = !0, void("function" != typeof k["default"].WebVTT ? e.tech_ && ! function() {
                                var t = function i() {
                                    return S(n, e)
                                };
                                e.tech_.on("vttjsloaded", t), e.tech_.on("vttjserror", function() {
                                    y["default"].error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", t)
                                })
                            }() : S(n, e)))
                        }))
                    },
                    P = function(t) {
                        function e() {
                            var i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            if (o(this, e), t.call(this), !i.tech) throw new Error("A tech was not provided.");
                            var n = this;
                            if (f.IS_IE8) {
                                n = x["default"].createElement("custom");
                                for (var s in e.prototype) "constructor" !== s && (n[s] = e.prototype[s])
                            }
                            n.tech_ = i.tech;
                            var r = m.TextTrackMode[i.mode] || "disabled",
                                a = m.TextTrackKind[i.kind] || "subtitles",
                                u = i["default"],
                                h = i.label || "",
                                p = i.language || i.srclang || "",
                                g = i.id || "vjs_text_track_" + d.newGUID();
                            ("metadata" === a || "chapters" === a) && (r = "hidden"), n.cues_ = [], n.activeCues_ = [];
                            var v = new l["default"](n.cues_),
                                y = new l["default"](n.activeCues_),
                                b = !1,
                                _ = c.bind(n, function() {
                                    this.activeCues, b && (this.trigger("cuechange"), b = !1)
                                });
                            return "disabled" !== r && n.tech_.on("timeupdate", _), Object.defineProperty(n, "kind", {
                                get: function w() {
                                    return a
                                },
                                set: function T() {}
                            }), Object.defineProperty(n, "label", {
                                get: function k() {
                                    return h
                                },
                                set: function C() {}
                            }), Object.defineProperty(n, "language", {
                                get: function j() {
                                    return p
                                },
                                set: function E() {}
                            }), Object.defineProperty(n, "id", {
                                get: function S() {
                                    return g
                                },
                                set: function P() {}
                            }), Object.defineProperty(n, "default", {
                                get: function D() {
                                    return u
                                },
                                set: function M() {}
                            }), Object.defineProperty(n, "mode", {
                                get: function I() {
                                    return r
                                },
                                set: function A(t) {
                                    m.TextTrackMode[t] && (r = t, "showing" === r && this.tech_.on("timeupdate", _), this.trigger("modechange"))
                                }
                            }), Object.defineProperty(n, "cues", {
                                get: function N() {
                                    return this.loaded_ ? v : null
                                },
                                set: function H() {}
                            }), Object.defineProperty(n, "activeCues", {
                                get: function F() {
                                    if (!this.loaded_) return null;
                                    if (0 === this.cues.length) return y;
                                    for (var t = this.tech_.currentTime(), e = [], i = 0, n = this.cues.length; n > i; i++) {
                                        var s = this.cues[i];
                                        s.startTime <= t && s.endTime >= t ? e.push(s) : s.startTime === s.endTime && s.startTime <= t && s.startTime + .5 >= t && e.push(s)
                                    }
                                    if (b = !1, e.length !== this.activeCues_.length) b = !0;
                                    else
                                        for (var i = 0; i < e.length; i++) - 1 === this.activeCues_.indexOf(e[i]) && (b = !0);
                                    return this.activeCues_ = e, y.setCues_(this.activeCues_), y
                                },
                                set: function R() {}
                            }), i.src ? (n.src = i.src, O(i.src, n)) : n.loaded_ = !0, f.IS_IE8 ? n : void 0
                        }
                        return r(e, t), e.prototype.addCue = function i(t) {
                            var e = this.tech_.textTracks();
                            if (e)
                                for (var i = 0; i < e.length; i++) e[i] !== this && e[i].removeCue(t);
                            this.cues_.push(t), this.cues.setCues_(this.cues_)
                        }, e.prototype.removeCue = function n(t) {
                            for (var e = !1, i = 0, n = this.cues_.length; n > i; i++) {
                                var s = this.cues_[i];
                                s === t && (this.cues_.splice(i, 1), e = !0)
                            }
                            e && this.cues.setCues_(this.cues_)
                        }, e
                    }(_["default"]);
                P.prototype.allowedEvents_ = {
                    cuechange: "cuechange"
                }, i["default"] = P, e.exports = i["default"]
            }, {
                "../event-target": 101,
                "../utils/browser.js": 131,
                "../utils/fn.js": 136,
                "../utils/guid.js": 138,
                "../utils/log.js": 139,
                "../utils/url.js": 144,
                "./text-track-cue-list": 124,
                "./text-track-enums": 126,
                "global/document": 1,
                "global/window": 2,
                xhr: 56
            }],
            131: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("global/document"),
                    o = n(s),
                    r = t("global/window"),
                    a = n(r),
                    l = a["default"].navigator.userAgent,
                    u = /AppleWebKit\/([\d.]+)/i.exec(l),
                    c = u ? parseFloat(u.pop()) : null,
                    h = /iPad/i.test(l);
                i.IS_IPAD = h;
                var d = /iPhone/i.test(l) && !h;
                i.IS_IPHONE = d;
                var p = /iPod/i.test(l);
                i.IS_IPOD = p;
                var f = d || h || p;
                i.IS_IOS = f;
                var g = function() {
                    var t = l.match(/OS (\d+)_/i);
                    return t && t[1] ? t[1] : void 0
                }();
                i.IOS_VERSION = g;
                var m = /Android/i.test(l);
                i.IS_ANDROID = m;
                var v = function() {
                    var t = l.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
                        e, i;
                    return t ? (e = t[1] && parseFloat(t[1]), i = t[2] && parseFloat(t[2]), e && i ? parseFloat(t[1] + "." + t[2]) : e ? e : null) : null
                }();
                i.ANDROID_VERSION = v;
                var y = m && /webkit/i.test(l) && 2.3 > v;
                i.IS_OLD_ANDROID = y;
                var b = m && 5 > v && 537 > c;
                i.IS_NATIVE_ANDROID = b;
                var _ = /Firefox/i.test(l);
                i.IS_FIREFOX = _;
                var w = /Edge/i.test(l);
                i.IS_EDGE = w;
                var x = !w && /Chrome/i.test(l);
                i.IS_CHROME = x;
                var T = /MSIE\s8\.0/.test(l);
                i.IS_IE8 = T;
                var k = !!("ontouchstart" in a["default"] || a["default"].DocumentTouch && o["default"] instanceof a["default"].DocumentTouch);
                i.TOUCH_ENABLED = k;
                var C = "backgroundSize" in o["default"].createElement("video").style;
                i.BACKGROUND_SIZE_SUPPORTED = C
            }, {
                "global/document": 1,
                "global/window": 2
            }],
            132: [function(t, e, i) {
                "use strict";

                function n(t, e) {
                    var i = 0,
                        n, o;
                    if (!e) return 0;
                    t && t.length || (t = s.createTimeRange(0, 0));
                    for (var r = 0; r < t.length; r++) n = t.start(r), o = t.end(r), o > e && (o = e), i += o - n;
                    return i / e
                }
                i.__esModule = !0, i.bufferedPercent = n;
                var s = t("./time-ranges.js")
            }, {
                "./time-ranges.js": 142
            }],
            133: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("./log.js"),
                    o = n(s),
                    r = {
                        get: function a(t, e) {
                            return t[e]
                        },
                        set: function l(t, e, i) {
                            return t[e] = i, !0
                        }
                    };
                i["default"] = function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if ("function" == typeof Proxy) {
                        var i = function() {
                            var i = {};
                            return Object.keys(e).forEach(function(t) {
                                r.hasOwnProperty(t) && (i[t] = function() {
                                    return o["default"].warn(e[t]), r[t].apply(this, arguments)
                                })
                            }), {
                                v: new Proxy(t, i)
                            }
                        }();
                        if ("object" == typeof i) return i.v
                    }
                    return t
                }, e.exports = i["default"]
            }, {
                "./log.js": 139
            }],
            134: [function(t, e, i) {
                "use strict";

                function n(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function s(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function o(t, e) {
                    return t.raw = e, t
                }

                function r(t) {
                    return "string" == typeof t && /\S/.test(t)
                }

                function a(t) {
                    if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
                }

                function l(t) {
                    return new RegExp("(^|\\s)" + t + "($|\\s)")
                }

                function u(t) {
                    return function(e, i) {
                        return r(e) ? (r(i) && (i = N["default"].querySelector(i)), (E(i) ? i : N["default"])[t](e)) : N["default"][t](null)
                    }
                }

                function c(t) {
                    return 0 === t.indexOf("#") && (t = t.slice(1)), N["default"].getElementById(t)
                }

                function h() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0],
                        e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        n = N["default"].createElement(t);
                    return Object.getOwnPropertyNames(e).forEach(function(t) {
                        var i = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? (W["default"].warn(V["default"](I, t, i)), n.setAttribute(t, i)) : n[t] = i
                    }), Object.getOwnPropertyNames(i).forEach(function(t) {
                        var e = i[t];
                        n.setAttribute(t, i[t])
                    }), n
                }

                function d(t, e) {
                    "undefined" == typeof t.textContent ? t.innerText = e : t.textContent = e
                }

                function p(t, e) {
                    e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
                }

                function f(t) {
                    var e = t[q];
                    return e || (e = t[q] = z.newGUID()), Y[e] || (Y[e] = {}), Y[e]
                }

                function g(t) {
                    var e = t[q];
                    return e ? !!Object.getOwnPropertyNames(Y[e]).length : !1
                }

                function m(t) {
                    var e = t[q];
                    if (e) {
                        delete Y[e];
                        try {
                            delete t[q]
                        } catch (i) {
                            t.removeAttribute ? t.removeAttribute(q) : t[q] = null
                        }
                    }
                }

                function v(t, e) {
                    return t.classList ? t.classList.contains(e) : (a(e), l(e).test(t.className))
                }

                function y(t, e) {
                    return t.classList ? t.classList.add(e) : v(t, e) || (t.className = (t.className + " " + e).trim()), t
                }

                function b(t, e) {
                    return t.classList ? t.classList.remove(e) : (a(e), t.className = t.className.split(/\s+/).filter(function(t) {
                        return t !== e
                    }).join(" ")), t
                }

                function _(t, e, i) {
                    var n = v(t, e);
                    return "function" == typeof i && (i = i(t, e)), "boolean" != typeof i && (i = !n), i !== n ? (i ? y(t, e) : b(t, e), t) : void 0
                }

                function w(t, e) {
                    Object.getOwnPropertyNames(e).forEach(function(i) {
                        var n = e[i];
                        null === n || "undefined" == typeof n || n === !1 ? t.removeAttribute(i) : t.setAttribute(i, n === !0 ? "" : n)
                    })
                }

                function x(t) {
                    var e, i, n, s, o;
                    if (e = {}, i = ",autoplay,controls,loop,muted,default,", t && t.attributes && t.attributes.length > 0) {
                        n = t.attributes;
                        for (var r = n.length - 1; r >= 0; r--) s = n[r].name, o = n[r].value, ("boolean" == typeof t[s] || -1 !== i.indexOf("," + s + ",")) && (o = null !== o ? !0 : !1), e[s] = o
                    }
                    return e
                }

                function T() {
                    N["default"].body.focus(), N["default"].onselectstart = function() {
                        return !1
                    }
                }

                function k() {
                    N["default"].onselectstart = function() {
                        return !0
                    }
                }

                function C(t) {
                    var e = void 0;
                    if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                        left: 0,
                        top: 0
                    };
                    var i = N["default"].documentElement,
                        n = N["default"].body,
                        s = i.clientLeft || n.clientLeft || 0,
                        o = F["default"].pageXOffset || n.scrollLeft,
                        r = e.left + o - s,
                        a = i.clientTop || n.clientTop || 0,
                        l = F["default"].pageYOffset || n.scrollTop,
                        u = e.top + l - a;
                    return {
                        left: Math.round(r),
                        top: Math.round(u)
                    }
                }

                function j(t, e) {
                    var i = {},
                        n = C(t),
                        s = t.offsetWidth,
                        o = t.offsetHeight,
                        r = n.top,
                        a = n.left,
                        l = e.pageY,
                        u = e.pageX;
                    return e.changedTouches && (u = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (r - l + o) / o)), i.x = Math.max(0, Math.min(1, (u - a) / s)), i
                }

                function E(t) {
                    return !!t && "object" == typeof t && 1 === t.nodeType
                }

                function S(t) {
                    return !!t && "object" == typeof t && 3 === t.nodeType
                }

                function O(t) {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    return t
                }

                function P(t) {
                    return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function(t) {
                        return "function" == typeof t && (t = t()), E(t) || S(t) ? t : "string" == typeof t && /\S/.test(t) ? N["default"].createTextNode(t) : void 0
                    }).filter(function(t) {
                        return t
                    })
                }

                function D(t, e) {
                    return P(e).forEach(function(e) {
                        return t.appendChild(e)
                    }), t
                }

                function M(t, e) {
                    return D(O(t), e)
                }
                i.__esModule = !0, i.getEl = c, i.createEl = h, i.textContent = d, i.insertElFirst = p, i.getElData = f, i.hasElData = g, i.removeElData = m, i.hasElClass = v, i.addElClass = y, i.removeElClass = b, i.toggleElClass = _, i.setElAttributes = w, i.getElAttributes = x, i.blockTextSelection = T, i.unblockTextSelection = k, i.findElPosition = C, i.getPointerPosition = j, i.isEl = E, i.isTextNode = S, i.emptyEl = O, i.normalizeContent = P, i.appendContent = D, i.insertContent = M;
                var I = o(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]),
                    A = t("global/document"),
                    N = s(A),
                    H = t("global/window"),
                    F = s(H),
                    R = t("./guid.js"),
                    z = n(R),
                    L = t("./log.js"),
                    W = s(L),
                    B = t("tsml"),
                    V = s(B),
                    Y = {},
                    q = "vdata" + (new Date).getTime(),
                    $ = u("querySelector");
                i.$ = $;
                var U = u("querySelectorAll");
                i.$$ = U
            }, {
                "./guid.js": 138,
                "./log.js": 139,
                "global/document": 1,
                "global/window": 2,
                tsml: 55
            }],
            135: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t, e, i) {
                    if (Array.isArray(e)) return h(o, t, e, i);
                    var n = p.getElData(t);
                    n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), i.guid || (i.guid = g.newGUID()), n.handlers[e].push(i), n.dispatcher || (n.disabled = !1, n.dispatcher = function(e, i) {
                        if (!n.disabled) {
                            e = u(e);
                            var s = n.handlers[e.type];
                            if (s)
                                for (var o = s.slice(0), r = 0, a = o.length; a > r && !e.isImmediatePropagationStopped(); r++) o[r].call(t, e, i)
                        }
                    }), 1 === n.handlers[e].length && (t.addEventListener ? t.addEventListener(e, n.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, n.dispatcher))
                }

                function r(t, e, i) {
                    if (p.hasElData(t)) {
                        var n = p.getElData(t);
                        if (n.handlers) {
                            if (Array.isArray(e)) return h(r, t, e, i);
                            var s = function u(e) {
                                n.handlers[e] = [], c(t, e)
                            };
                            if (e) {
                                var o = n.handlers[e];
                                if (o) {
                                    if (!i) return void s(e);
                                    if (i.guid)
                                        for (var a = 0; a < o.length; a++) o[a].guid === i.guid && o.splice(a--, 1);
                                    c(t, e)
                                }
                            } else
                                for (var l in n.handlers) s(l)
                        }
                    }
                }

                function a(t, e, i) {
                    var n = p.hasElData(t) ? p.getElData(t) : {},
                        s = t.parentNode || t.ownerDocument;
                    if ("string" == typeof e && (e = {
                            type: e,
                            target: t
                        }), e = u(e), n.dispatcher && n.dispatcher.call(t, e, i), s && !e.isPropagationStopped() && e.bubbles === !0) a.call(null, s, e, i);
                    else if (!s && !e.defaultPrevented) {
                        var o = p.getElData(e.target);
                        e.target[e.type] && (o.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), o.disabled = !1)
                    }
                    return !e.defaultPrevented
                }

                function l(t, e, i) {
                    if (Array.isArray(e)) return h(l, t, e, i);
                    var n = function s() {
                        r(t, e, s), i.apply(this, arguments)
                    };
                    n.guid = i.guid = i.guid || g.newGUID(), o(t, e, n)
                }

                function u(t) {
                    function e() {
                        return !0
                    }

                    function i() {
                        return !1
                    }
                    if (!t || !t.isPropagationStopped) {
                        var n = t || v["default"].event;
                        t = {};
                        for (var s in n) "layerX" !== s && "layerY" !== s && "keyLocation" !== s && "webkitMovementX" !== s && "webkitMovementY" !== s && ("returnValue" === s && n.preventDefault || (t[s] = n[s]));
                        if (t.target || (t.target = t.srcElement || b["default"]), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                                n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                            }, t.defaultPrevented = !1, t.stopPropagation = function() {
                                n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                            }, t.isPropagationStopped = i, t.stopImmediatePropagation = function() {
                                n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                            }, t.isImmediatePropagationStopped = i, null != t.clientX) {
                            var o = b["default"].documentElement,
                                r = b["default"].body;
                            t.pageX = t.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)
                        }
                        t.which = t.charCode || t.keyCode, null != t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                    }
                    return t
                }

                function c(t, e) {
                    var i = p.getElData(t);
                    0 === i.handlers[e].length && (delete i.handlers[e], t.removeEventListener ? t.removeEventListener(e, i.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && p.removeElData(t)
                }

                function h(t, e, i, n) {
                    i.forEach(function(i) {
                        t(e, i, n)
                    })
                }
                i.__esModule = !0, i.on = o, i.off = r, i.trigger = a, i.one = l, i.fixEvent = u;
                var d = t("./dom.js"),
                    p = s(d),
                    f = t("./guid.js"),
                    g = s(f),
                    m = t("global/window"),
                    v = n(m),
                    y = t("global/document"),
                    b = n(y)
            }, {
                "./dom.js": 134,
                "./guid.js": 138,
                "global/document": 1,
                "global/window": 2
            }],
            136: [function(t, e, i) {
                "use strict";
                i.__esModule = !0;
                var n = t("./guid.js"),
                    s = function o(t, e, i) {
                        e.guid || (e.guid = n.newGUID());
                        var s = function o() {
                            return e.apply(t, arguments)
                        };
                        return s.guid = i ? i + "_" + e.guid : e.guid, s
                    };
                i.bind = s
            }, {
                "./guid.js": 138
            }],
            137: [function(t, e, i) {
                "use strict";

                function n(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? t : arguments[1];
                    return function() {
                        t = 0 > t ? 0 : t;
                        var i = Math.floor(t % 60),
                            n = Math.floor(t / 60 % 60),
                            s = Math.floor(t / 3600),
                            o = Math.floor(e / 60 % 60),
                            r = Math.floor(e / 3600);
                        return (isNaN(t) || t === 1 / 0) && (s = n = i = "-"), s = s > 0 || r > 0 ? s + ":" : "", n = ((s || o >= 10) && 10 > n ? "0" + n : n) + ":", i = 10 > i ? "0" + i : i, s + n + i
                    }()
                }
                i.__esModule = !0, i["default"] = n, e.exports = i["default"]
            }, {}],
            138: [function(t, e, i) {
                "use strict";

                function n() {
                    return s++
                }
                i.__esModule = !0, i.newGUID = n;
                var s = 1
            }, {}],
            139: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    var i = Array.prototype.slice.call(e),
                        n = function o() {},
                        s = r["default"].console || {
                            log: n,
                            warn: n,
                            error: n
                        };
                    t ? i.unshift(t.toUpperCase() + ":") : t = "log", a.history.push(i), i.unshift("VIDEOJS:"), s[t].apply ? s[t].apply(s, i) : s[t](i.join(" "))
                }
                i.__esModule = !0;
                var o = t("global/window"),
                    r = n(o),
                    a = function l() {
                        s(null, arguments)
                    };
                a.history = [], a.error = function() {
                    s("error", arguments)
                }, a.warn = function() {
                    s("warn", arguments)
                }, i["default"] = a, e.exports = i["default"]
            }, {
                "global/window": 2
            }],
            140: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t) {
                    return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
                }

                function o() {
                    var t = Array.prototype.slice.call(arguments);
                    return t.unshift({}), t.push(l), a["default"].apply(null, t), t[0]
                }
                i.__esModule = !0, i["default"] = o;
                var r = t("lodash-compat/object/merge"),
                    a = n(r),
                    l = function u(t, e) {
                        return s(e) ? s(t) ? void 0 : o(e) : e
                    };
                e.exports = i["default"]
            }, {
                "lodash-compat/object/merge": 40
            }],
            141: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("global/document"),
                    o = n(s),
                    r = function l(t) {
                        var e = o["default"].createElement("style");
                        return e.className = t, e
                    };
                i.createStyleElement = r;
                var a = function u(t, e) {
                    t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
                };
                i.setTextContent = a
            }, {
                "global/document": 1
            }],
            142: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function s(t, e) {
                    return Array.isArray(t) ? o(t) : void 0 === t || void 0 === e ? o() : o([
                        [t, e]
                    ])
                }

                function o(t) {
                    return void 0 === t || 0 === t.length ? {
                        length: 0,
                        start: function e() {
                            throw new Error("This TimeRanges object is empty")
                        },
                        end: function i() {
                            throw new Error("This TimeRanges object is empty")
                        }
                    } : {
                        length: t.length,
                        start: r.bind(null, "start", 0, t),
                        end: r.bind(null, "end", 1, t)
                    }
                }

                function r(t, e, i, n) {
                    return void 0 === n && (u["default"].warn("DEPRECATED: Function '" + t + "' on 'TimeRanges' called without an index argument."), n = 0), a(t, n, i.length - 1), i[n][e]
                }

                function a(t, e, i) {
                    if (0 > e || e > i) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is greater than or equal to the maximum bound (" + i + ").")
                }
                i.__esModule = !0, i.createTimeRanges = s;
                var l = t("./log.js"),
                    u = n(l);
                i.createTimeRange = s
            }, {
                "./log.js": 139
            }],
            143: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }
                i.__esModule = !0, i["default"] = n, e.exports = i["default"]
            }, {}],
            144: [function(t, e, i) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                i.__esModule = !0;
                var s = t("global/document"),
                    o = n(s),
                    r = t("global/window"),
                    a = n(r),
                    l = function d(t) {
                        var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                            i = o["default"].createElement("a");
                        i.href = t;
                        var n = "" === i.host && "file:" !== i.protocol,
                            s = void 0;
                        n && (s = o["default"].createElement("div"), s.innerHTML = '<a href="' + t + '"></a>', i = s.firstChild, s.setAttribute("style", "display:none; position:absolute;"), o["default"].body.appendChild(s));
                        for (var r = {}, a = 0; a < e.length; a++) r[e[a]] = i[e[a]];
                        return "http:" === r.protocol && (r.host = r.host.replace(/:80$/, "")), "https:" === r.protocol && (r.host = r.host.replace(/:443$/, "")), n && o["default"].body.removeChild(s), r
                    };
                i.parseUrl = l;
                var u = function p(t) {
                    if (!t.match(/^https?:\/\//)) {
                        var e = o["default"].createElement("div");
                        e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                    }
                    return t
                };
                i.getAbsoluteURL = u;
                var c = function f(t) {
                    if ("string" == typeof t) {
                        var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                            i = e.exec(t);
                        if (i) return i.pop().toLowerCase()
                    }
                    return ""
                };
                i.getFileExtension = c;
                var h = function g(t) {
                    var e = a["default"].location,
                        i = l(t),
                        n = ":" === i.protocol ? e.protocol : i.protocol,
                        s = n + i.host !== e.protocol + e.host;
                    return s
                };
                i.isCrossOrigin = h
            }, {
                "global/document": 1,
                "global/window": 2
            }],
            145: [function(e, i, n) {
                "use strict";

                function s(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e["default"] = t, e
                }

                function o(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }
                n.__esModule = !0;
                var r = e("global/window"),
                    a = o(r),
                    l = e("global/document"),
                    u = o(l),
                    c = e("./setup"),
                    h = s(c),
                    d = e("./utils/stylesheet.js"),
                    p = s(d),
                    f = e("./component"),
                    g = o(f),
                    m = e("./event-target"),
                    v = o(m),
                    y = e("./utils/events.js"),
                    b = s(y),
                    _ = e("./player"),
                    w = o(_),
                    x = e("./plugins.js"),
                    T = o(x),
                    k = e("../../src/js/utils/merge-options.js"),
                    C = o(k),
                    j = e("./utils/fn.js"),
                    E = s(j),
                    S = e("./tracks/text-track.js"),
                    O = o(S),
                    P = e("object.assign"),
                    D = o(P),
                    M = e("./utils/time-ranges.js"),
                    I = e("./utils/format-time.js"),
                    A = o(I),
                    N = e("./utils/log.js"),
                    H = o(N),
                    F = e("./utils/dom.js"),
                    R = s(F),
                    z = e("./utils/browser.js"),
                    L = s(z),
                    W = e("./utils/url.js"),
                    B = s(W),
                    V = e("./extend.js"),
                    Y = o(V),
                    q = e("lodash-compat/object/merge"),
                    U = o(q),
                    K = e("./utils/create-deprecation-proxy.js"),
                    X = o(K),
                    G = e("xhr"),
                    J = o(G),
                    Z = e("./tech/tech.js"),
                    Q = o(Z),
                    tt = e("./tech/html5.js"),
                    et = o(tt),
                    it = e("./tech/flash.js"),
                    nt = o(it);
                "undefined" == typeof HTMLVideoElement && (u["default"].createElement("video"), u["default"].createElement("audio"), u["default"].createElement("track"));
                var st = function at(t, e, i) {
                    var n = void 0;
                    if ("string" == typeof t) {
                        if (0 === t.indexOf("#") && (t = t.slice(1)), at.getPlayers()[t]) return e && H["default"].warn('Player "' + t + '" is already initialised. Options will not be applied.'), i && at.getPlayers()[t].ready(i), at.getPlayers()[t];
                        n = R.getEl(t)
                    } else n = t;
                    if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                    return n.player || w["default"].players[n.playerId] || new w["default"](n, e, i)
                };
                if (a["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                    var ot = R.$(".vjs-styles-defaults");
                    if (!ot) {
                        ot = p.createStyleElement("vjs-styles-defaults");
                        var rt = R.$("head");
                        rt.insertBefore(ot, rt.firstChild), p.setTextContent(ot, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                    }
                }
                h.autoSetupTimeout(1, st), st.VERSION = "5.9.2", st.options = w["default"].prototype.options_, st.getPlayers = function() {
                    return w["default"].players
                }, st.players = X["default"](w["default"].players, {
                    get: "Access to videojs.players is deprecated; use videojs.getPlayers instead",
                    set: "Modification of videojs.players is deprecated"
                }), st.getComponent = g["default"].getComponent, st.registerComponent = function(t, e) {
                    Q["default"].isTech(e) && H["default"].warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), g["default"].registerComponent.call(g["default"], t, e)
                }, st.getTech = Q["default"].getTech, st.registerTech = Q["default"].registerTech, st.browser = L, st.TOUCH_ENABLED = L.TOUCH_ENABLED, st.extend = Y["default"], st.mergeOptions = C["default"], st.bind = E.bind, st.plugin = T["default"], st.addLanguage = function(t, e) {
                    var i;
                    return t = ("" + t).toLowerCase(), U["default"](st.options.languages, (i = {}, i[t] = e, i))[t]
                }, st.log = H["default"], st.createTimeRange = st.createTimeRanges = M.createTimeRanges, st.formatTime = A["default"], st.parseUrl = B.parseUrl, st.isCrossOrigin = B.isCrossOrigin, st.EventTarget = v["default"], st.on = b.on, st.one = b.one, st.off = b.off, st.trigger = b.trigger, st.xhr = J["default"], st.TextTrack = O["default"], st.isEl = R.isEl, st.isTextNode = R.isTextNode, st.createEl = R.createEl, st.hasClass = R.hasElClass, st.addClass = R.addElClass, st.removeClass = R.removeElClass, st.toggleClass = R.toggleElClass, st.setAttributes = R.setElAttributes, st.getAttributes = R.getElAttributes, st.emptyEl = R.emptyEl, st.appendContent = R.appendContent, st.insertContent = R.insertContent, "function" == typeof t && t.amd ? t("videojs", [], function() {
                    return st
                }) : "object" == typeof n && "object" == typeof i && (i.exports = st), n["default"] = st, i.exports = n["default"]
            }, {
                "../../src/js/utils/merge-options.js": 140,
                "./component": 67,
                "./event-target": 101,
                "./extend.js": 102,
                "./player": 110,
                "./plugins.js": 111,
                "./setup": 115,
                "./tech/flash.js": 118,
                "./tech/html5.js": 119,
                "./tech/tech.js": 121,
                "./tracks/text-track.js": 130,
                "./utils/browser.js": 131,
                "./utils/create-deprecation-proxy.js": 133,
                "./utils/dom.js": 134,
                "./utils/events.js": 135,
                "./utils/fn.js": 136,
                "./utils/format-time.js": 137,
                "./utils/log.js": 139,
                "./utils/stylesheet.js": 141,
                "./utils/time-ranges.js": 142,
                "./utils/url.js": 144,
                "global/document": 1,
                "global/window": 2,
                "lodash-compat/object/merge": 40,
                "object.assign": 45,
                xhr: 56
            }]
        }, {}, [145])(145)
    }),
    function(t) {
        var e = t.vttjs = {},
            i = e.VTTCue,
            n = e.VTTRegion,
            s = t.VTTCue,
            o = t.VTTRegion;
        e.shim = function() {
            e.VTTCue = i, e.VTTRegion = n
        }, e.restore = function() {
            e.VTTCue = s, e.VTTRegion = o
        }
    }(this),
    function(t, e) {
        function i(t) {
            if ("string" != typeof t) return !1;
            var e = a[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function n(t) {
            if ("string" != typeof t) return !1;
            var e = l[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var n in i) t[n] = i[n]
            }
            return t
        }

        function o(t, e, o) {
            var a = this,
                l = /MSIE\s8\.0/.test(navigator.userAgent),
                u = {};
            l ? a = document.createElement("custom") : u.enumerable = !0, a.hasBeenReset = !1;
            var c = "",
                h = !1,
                d = t,
                p = e,
                f = o,
                g = null,
                m = "",
                v = !0,
                y = "auto",
                b = "start",
                _ = 50,
                w = "middle",
                x = 50,
                T = "middle";
            return Object.defineProperty(a, "id", s({}, u, {
                get: function() {
                    return c
                },
                set: function(t) {
                    c = "" + t
                }
            })), Object.defineProperty(a, "pauseOnExit", s({}, u, {
                get: function() {
                    return h
                },
                set: function(t) {
                    h = !!t
                }
            })), Object.defineProperty(a, "startTime", s({}, u, {
                get: function() {
                    return d
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                    d = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "endTime", s({}, u, {
                get: function() {
                    return p
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                    p = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "text", s({}, u, {
                get: function() {
                    return f
                },
                set: function(t) {
                    f = "" + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "region", s({}, u, {
                get: function() {
                    return g
                },
                set: function(t) {
                    g = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "vertical", s({}, u, {
                get: function() {
                    return m
                },
                set: function(t) {
                    var e = i(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    m = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "snapToLines", s({}, u, {
                get: function() {
                    return v
                },
                set: function(t) {
                    v = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "line", s({}, u, {
                get: function() {
                    return y
                },
                set: function(t) {
                    if ("number" != typeof t && t !== r) throw new SyntaxError("An invalid number or illegal string was specified.");
                    y = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "lineAlign", s({}, u, {
                get: function() {
                    return b
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    b = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "position", s({}, u, {
                get: function() {
                    return _
                },
                set: function(t) {
                    if (0 > t || t > 100) throw new Error("Position must be between 0 and 100.");
                    _ = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "positionAlign", s({}, u, {
                get: function() {
                    return w
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    w = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "size", s({}, u, {
                get: function() {
                    return x
                },
                set: function(t) {
                    if (0 > t || t > 100) throw new Error("Size must be between 0 and 100.");
                    x = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "align", s({}, u, {
                get: function() {
                    return T
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    T = e, this.hasBeenReset = !0
                }
            })), a.displayState = void 0, l ? a : void 0
        }
        var r = "auto",
            a = {
                "": !0,
                lr: !0,
                rl: !0
            },
            l = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
        o.prototype.getCueAsHTML = function() {
            return WebVTT.convertCueToDOMTree(window, this.text)
        }, t.VTTCue = t.VTTCue || o, e.VTTCue = o
    }(this, this.vttjs || {}),
    function(t, e) {
        function i(t) {
            if ("string" != typeof t) return !1;
            var e = o[t.toLowerCase()];
            return e ? t.toLowerCase() : !1
        }

        function n(t) {
            return "number" == typeof t && t >= 0 && 100 >= t
        }

        function s() {
            var t = 100,
                e = 3,
                s = 0,
                o = 100,
                r = 0,
                a = 100,
                l = "";
            Object.defineProperties(this, {
                width: {
                    enumerable: !0,
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (!n(e)) throw new Error("Width must be between 0 and 100.");
                        t = e
                    }
                },
                lines: {
                    enumerable: !0,
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                        e = t
                    }
                },
                regionAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(t) {
                        if (!n(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                        o = t
                    }
                },
                regionAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        if (!n(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                        s = t
                    }
                },
                viewportAnchorY: {
                    enumerable: !0,
                    get: function() {
                        return a
                    },
                    set: function(t) {
                        if (!n(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                        a = t
                    }
                },
                viewportAnchorX: {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        if (!n(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                        r = t
                    }
                },
                scroll: {
                    enumerable: !0,
                    get: function() {
                        return l
                    },
                    set: function(t) {
                        var e = i(t);
                        if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                        l = e
                    }
                }
            })
        }
        var o = {
            "": !0,
            up: !0
        };
        t.VTTRegion = t.VTTRegion || s, e.VTTRegion = s
    }(this, this.vttjs || {}),
    function(t) {
        function e(t, e) {
            this.name = "ParsingError", this.code = t.code, this.message = e || t.message
        }

        function i(t) {
            function e(t, e, i, n) {
                return 3600 * (0 | t) + 60 * (0 | e) + (0 | i) + (0 | n) / 1e3
            }
            var i = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return i ? i[3] ? e(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? e(i[1], i[2], 0, i[4]) : e(0, i[1], i[2], i[4]) : null
        }

        function n() {
            this.values = f(null)
        }

        function s(t, e, i, n) {
            var s = n ? t.split(n) : [t];
            for (var o in s)
                if ("string" == typeof s[o]) {
                    var r = s[o].split(i);
                    if (2 === r.length) {
                        var a = r[0],
                            l = r[1];
                        e(a, l)
                    }
                }
        }

        function o(t, o, r) {
            function a() {
                var n = i(t);
                if (null === n) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + c);
                return t = t.replace(/^[^\sa-zA-Z-]+/, ""), n
            }

            function l(t, e) {
                var i = new n;
                s(t, function(t, e) {
                    switch (t) {
                        case "region":
                            for (var n = r.length - 1; n >= 0; n--)
                                if (r[n].id === e) {
                                    i.set(t, r[n].region);
                                    break
                                }
                            break;
                        case "vertical":
                            i.alt(t, e, ["rl", "lr"]);
                            break;
                        case "line":
                            var s = e.split(","),
                                o = s[0];
                            i.integer(t, o), i.percent(t, o) ? i.set("snapToLines", !1) : null, i.alt(t, o, ["auto"]), 2 === s.length && i.alt("lineAlign", s[1], ["start", "middle", "end"]);
                            break;
                        case "position":
                            s = e.split(","), i.percent(t, s[0]), 2 === s.length && i.alt("positionAlign", s[1], ["start", "middle", "end"]);
                            break;
                        case "size":
                            i.percent(t, e);
                            break;
                        case "align":
                            i.alt(t, e, ["start", "middle", "end", "left", "right"])
                    }
                }, /:/, /\s/), e.region = i.get("region", null), e.vertical = i.get("vertical", ""), e.line = i.get("line", "auto"), e.lineAlign = i.get("lineAlign", "start"), e.snapToLines = i.get("snapToLines", !0), e.size = i.get("size", 100), e.align = i.get("align", "middle"), e.position = i.get("position", {
                    start: 0,
                    left: 0,
                    middle: 50,
                    end: 100,
                    right: 100
                }, e.align), e.positionAlign = i.get("positionAlign", {
                    start: "start",
                    left: "start",
                    middle: "middle",
                    end: "end",
                    right: "end"
                }, e.align)
            }

            function u() {
                t = t.replace(/^\s+/, "")
            }
            var c = t;
            if (u(), o.startTime = a(), u(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
            t = t.substr(3), u(), o.endTime = a(), u(), l(t, o)
        }

        function r(t, e) {
            function n() {
                function t(t) {
                    return e = e.substr(t.length), t
                }
                if (!e) return null;
                var i = e.match(/^([^<]*)(<[^>]+>?)?/);
                return t(i[1] ? i[1] : i[2])
            }

            function s(t) {
                return g[t]
            }

            function o(t) {
                for (; f = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(f[0], s);
                return t
            }

            function r(t, e) {
                return !y[e.localName] || y[e.localName] === t.localName
            }

            function a(e, i) {
                var n = m[e];
                if (!n) return null;
                var s = t.document.createElement(n);
                s.localName = n;
                var o = v[e];
                return o && i && (s[o] = i.trim()), s
            }
            for (var l = t.document.createElement("div"), u = l, c, h = []; null !== (c = n());)
                if ("<" !== c[0]) u.appendChild(t.document.createTextNode(o(c)));
                else {
                    if ("/" === c[1]) {
                        h.length && h[h.length - 1] === c.substr(2).replace(">", "") && (h.pop(), u = u.parentNode);
                        continue
                    }
                    var d = i(c.substr(1, c.length - 2)),
                        p;
                    if (d) {
                        p = t.document.createProcessingInstruction("timestamp", d), u.appendChild(p);
                        continue
                    }
                    var f = c.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                    if (!f) continue;
                    if (p = a(f[1], f[3]), !p) continue;
                    if (!r(u, p)) continue;
                    f[2] && (p.className = f[2].substr(1).replace(".", " ")), h.push(f[1]), u.appendChild(p), u = p
                }
            return l
        }

        function a(t) {
            function e(t, e) {
                for (var i = e.childNodes.length - 1; i >= 0; i--) t.push(e.childNodes[i])
            }

            function i(t) {
                if (!t || !t.length) return null;
                var n = t.pop(),
                    s = n.textContent || n.innerText;
                if (s) {
                    var o = s.match(/^.*(\n|\r)/);
                    return o ? (t.length = 0, o[0]) : s
                }
                return "ruby" === n.tagName ? i(t) : n.childNodes ? (e(t, n), i(t)) : void 0
            }
            var n = [],
                s = "",
                o;
            if (!t || !t.childNodes) return "ltr";
            for (e(n, t); s = i(n);)
                for (var r = 0; r < s.length; r++) {
                    o = s.charCodeAt(r);
                    for (var a = 0; a < b.length; a++)
                        if (b[a] === o) return "rtl"
                }
            return "ltr"
        }

        function l(t) {
            if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
            if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
            for (var e = t.track, i = e.textTrackList, n = 0, s = 0; s < i.length && i[s] !== e; s++) "showing" === i[s].mode && n++;
            return -1 * ++n
        }

        function u() {}

        function c(t, e, i) {
            var n = /MSIE\s8\.0/.test(navigator.userAgent),
                s = "rgba(255, 255, 255, 1)",
                o = "rgba(0, 0, 0, 0.8)";
            n && (s = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), u.call(this), this.cue = e, this.cueDiv = r(t, e.text);
            var l = {
                color: s,
                backgroundColor: o,
                position: "relative",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "inline"
            };
            n || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
                textAlign: "middle" === e.align ? "center" : e.align,
                font: i.font,
                whiteSpace: "pre-line",
                position: "absolute"
            }, n || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
            var c = 0;
            switch (e.positionAlign) {
                case "start":
                    c = e.position;
                    break;
                case "middle":
                    c = e.position - e.size / 2;
                    break;
                case "end":
                    c = e.position - e.size
            }
            "" === e.vertical ? this.applyStyles({
                left: this.formatStyle(c, "%"),
                width: this.formatStyle(e.size, "%")
            }) : this.applyStyles({
                top: this.formatStyle(c, "%"),
                height: this.formatStyle(e.size, "%")
            }), this.move = function(t) {
                this.applyStyles({
                    top: this.formatStyle(t.top, "px"),
                    bottom: this.formatStyle(t.bottom, "px"),
                    left: this.formatStyle(t.left, "px"),
                    right: this.formatStyle(t.right, "px"),
                    height: this.formatStyle(t.height, "px"),
                    width: this.formatStyle(t.width, "px")
                })
            }
        }

        function h(t) {
            var e = /MSIE\s8\.0/.test(navigator.userAgent),
                i, n, s, o;
            if (t.div) {
                n = t.div.offsetHeight, s = t.div.offsetWidth, o = t.div.offsetTop;
                var r = (r = t.div.childNodes) && (r = r[0]) && r.getClientRects && r.getClientRects();
                t = t.div.getBoundingClientRect(), i = r ? Math.max(r[0] && r[0].height || 0, t.height / r.length) : 0
            }
            this.left = t.left, this.right = t.right, this.top = t.top || o, this.height = t.height || n, this.bottom = t.bottom || o + (t.height || n), this.width = t.width || s, this.lineHeight = void 0 !== i ? i : t.lineHeight, e && !this.lineHeight && (this.lineHeight = 13)
        }

        function d(t, e, i, n) {
            function s(t, e) {
                for (var s, o = new h(t), r = 1, a = 0; a < e.length; a++) {
                    for (; t.overlapsOppositeAxis(i, e[a]) || t.within(i) && t.overlapsAny(n);) t.move(e[a]);
                    if (t.within(i)) return t;
                    var l = t.intersectPercentage(i);
                    r > l && (s = new h(t), r = l), t = new h(o)
                }
                return s || o
            }
            var o = new h(e),
                r = e.cue,
                a = l(r),
                u = [];
            if (r.snapToLines) {
                var c;
                switch (r.vertical) {
                    case "":
                        u = ["+y", "-y"], c = "height";
                        break;
                    case "rl":
                        u = ["+x", "-x"], c = "width";
                        break;
                    case "lr":
                        u = ["-x", "+x"], c = "width"
                }
                var d = o.lineHeight,
                    p = d * Math.round(a),
                    f = i[c] + d,
                    g = u[0];
                Math.abs(p) > f && (p = 0 > p ? -1 : 1, p *= Math.ceil(f / d) * d), 0 > a && (p += "" === r.vertical ? i.height : i.width, u = u.reverse()), o.move(g, p)
            } else {
                var m = o.lineHeight / i.height * 100;
                switch (r.lineAlign) {
                    case "middle":
                        a -= m / 2;
                        break;
                    case "end":
                        a -= m
                }
                switch (r.vertical) {
                    case "":
                        e.applyStyles({
                            top: e.formatStyle(a, "%")
                        });
                        break;
                    case "rl":
                        e.applyStyles({
                            left: e.formatStyle(a, "%")
                        });
                        break;
                    case "lr":
                        e.applyStyles({
                            right: e.formatStyle(a, "%")
                        })
                }
                u = ["+y", "-x", "+x", "-y"], o = new h(e)
            }
            var v = s(o, u);
            e.move(v.toCSSCompatValues(i))
        }

        function p() {}
        var f = Object.create || function() {
            function t() {}
            return function(e) {
                if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                return t.prototype = e, new t
            }
        }();
        e.prototype = f(Error.prototype), e.prototype.constructor = e, e.Errors = {
            BadSignature: {
                code: 0,
                message: "Malformed WebVTT signature."
            },
            BadTimeStamp: {
                code: 1,
                message: "Malformed time stamp."
            }
        }, n.prototype = {
            set: function(t, e) {
                this.get(t) || "" === e || (this.values[t] = e)
            },
            get: function(t, e, i) {
                return i ? this.has(t) ? this.values[t] : e[i] : this.has(t) ? this.values[t] : e
            },
            has: function(t) {
                return t in this.values
            },
            alt: function(t, e, i) {
                for (var n = 0; n < i.length; ++n)
                    if (e === i[n]) {
                        this.set(t, e);
                        break
                    }
            },
            integer: function(t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
            },
            percent: function(t, e) {
                var i;
                return (i = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && 100 >= e) ? (this.set(t, e), !0) : !1
            }
        };
        var g = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&lrm;": "‎",
                "&rlm;": "‏",
                "&nbsp;": " "
            },
            m = {
                c: "span",
                i: "i",
                b: "b",
                u: "u",
                ruby: "ruby",
                rt: "rt",
                v: "span",
                lang: "span"
            },
            v = {
                v: "title",
                lang: "lang"
            },
            y = {
                rt: "ruby"
            },
            b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
        u.prototype.applyStyles = function(t, e) {
            e = e || this.div;
            for (var i in t) t.hasOwnProperty(i) && (e.style[i] = t[i])
        }, u.prototype.formatStyle = function(t, e) {
            return 0 === t ? 0 : t + e
        }, c.prototype = f(u.prototype), c.prototype.constructor = c, h.prototype.move = function(t, e) {
            switch (e = void 0 !== e ? e : this.lineHeight, t) {
                case "+x":
                    this.left += e, this.right += e;
                    break;
                case "-x":
                    this.left -= e, this.right -= e;
                    break;
                case "+y":
                    this.top += e, this.bottom += e;
                    break;
                case "-y":
                    this.top -= e, this.bottom -= e
            }
        }, h.prototype.overlaps = function(t) {
            return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
        }, h.prototype.overlapsAny = function(t) {
            for (var e = 0; e < t.length; e++)
                if (this.overlaps(t[e])) return !0;
            return !1
        }, h.prototype.within = function(t) {
            return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
        }, h.prototype.overlapsOppositeAxis = function(t, e) {
            switch (e) {
                case "+x":
                    return this.left < t.left;
                case "-x":
                    return this.right > t.right;
                case "+y":
                    return this.top < t.top;
                case "-y":
                    return this.bottom > t.bottom
            }
        }, h.prototype.intersectPercentage = function(t) {
            var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
                i = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)),
                n = e * i;
            return n / (this.height * this.width)
        }, h.prototype.toCSSCompatValues = function(t) {
            return {
                top: this.top - t.top,
                bottom: t.bottom - this.bottom,
                left: this.left - t.left,
                right: t.right - this.right,
                height: this.height,
                width: this.width
            }
        }, h.getSimpleBoxPosition = function(t) {
            var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
                i = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
            t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
            var s = {
                left: t.left,
                right: t.right,
                top: t.top || n,
                height: t.height || e,
                bottom: t.bottom || n + (t.height || e),
                width: t.width || i
            };
            return s
        }, p.StringDecoder = function() {
            return {
                decode: function(t) {
                    if (!t) return "";
                    if ("string" != typeof t) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(t))
                }
            }
        }, p.convertCueToDOMTree = function(t, e) {
            return t && e ? r(t, e) : null
        };
        var _ = .05,
            w = "sans-serif",
            x = "1.5%";
        p.processCues = function(t, e, i) {
            function n(t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e].hasBeenReset || !t[e].displayState) return !0;
                return !1
            }
            if (!t || !e || !i) return null;
            for (; i.firstChild;) i.removeChild(i.firstChild);
            var s = t.document.createElement("div");
            if (s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.margin = x, i.appendChild(s), n(e)) {
                var o = [],
                    r = h.getSimpleBoxPosition(s),
                    a = Math.round(r.height * _ * 100) / 100,
                    l = {
                        font: a + "px " + w
                    };
                ! function() {
                    for (var i, n, a = 0; a < e.length; a++) n = e[a], i = new c(t, n, l), s.appendChild(i.div), d(t, i, r, o), n.displayState = i.div, o.push(h.getSimpleBoxPosition(i))
                }()
            } else
                for (var u = 0; u < e.length; u++) s.appendChild(e[u].displayState)
        }, p.Parser = function(t, e, i) {
            i || (i = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
        }, p.Parser.prototype = {
            reportOrThrowError: function(t) {
                if (!(t instanceof e)) throw t;
                this.onparsingerror && this.onparsingerror(t)
            },
            parse: function(t) {
                function i() {
                    for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                    var i = t.substr(0, e);
                    return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), i
                }

                function r(t) {
                    var e = new n;
                    if (s(t, function(t, i) {
                            switch (t) {
                                case "id":
                                    e.set(t, i);
                                    break;
                                case "width":
                                    e.percent(t, i);
                                    break;
                                case "lines":
                                    e.integer(t, i);
                                    break;
                                case "regionanchor":
                                case "viewportanchor":
                                    var s = i.split(",");
                                    if (2 !== s.length) break;
                                    var o = new n;
                                    if (o.percent("x", s[0]), o.percent("y", s[1]), !o.has("x") || !o.has("y")) break;
                                    e.set(t + "X", o.get("x")), e.set(t + "Y", o.get("y"));
                                    break;
                                case "scroll":
                                    e.alt(t, i, ["up"])
                            }
                        }, /=/, /\s/), e.has("id")) {
                        var i = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                        i.width = e.get("width", 100), i.lines = e.get("lines", 3), i.regionAnchorX = e.get("regionanchorX", 0), i.regionAnchorY = e.get("regionanchorY", 100), i.viewportAnchorX = e.get("viewportanchorX", 0), i.viewportAnchorY = e.get("viewportanchorY", 100), i.scroll = e.get("scroll", ""), l.onregion && l.onregion(i), l.regionList.push({
                            id: e.get("id"),
                            region: i
                        })
                    }
                }

                function a(t) {
                    s(t, function(t, e) {
                        switch (t) {
                            case "Region":
                                r(e)
                        }
                    }, /:/)
                }
                var l = this;
                t && (l.buffer += l.decoder.decode(t, {
                    stream: !0
                }));
                try {
                    var u;
                    if ("INITIAL" === l.state) {
                        if (!/\r\n|\n/.test(l.buffer)) return this;
                        u = i();
                        var c = u.match(/^WEBVTT([ \t].*)?$/);
                        if (!c || !c[0]) throw new e(e.Errors.BadSignature);
                        l.state = "HEADER"
                    }
                    for (var h = !1; l.buffer;) {
                        if (!/\r\n|\n/.test(l.buffer)) return this;
                        switch (h ? h = !1 : u = i(), l.state) {
                            case "HEADER":
                                /:/.test(u) ? a(u) : u || (l.state = "ID");
                                continue;
                            case "NOTE":
                                u || (l.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(u)) {
                                    l.state = "NOTE";
                                    break
                                }
                                if (!u) continue;
                                if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", -1 === u.indexOf("-->")) {
                                    l.cue.id = u;
                                    continue
                                }
                            case "CUE":
                                try {
                                    o(u, l.cue, l.regionList)
                                } catch (d) {
                                    l.reportOrThrowError(d), l.cue = null, l.state = "BADCUE";
                                    continue
                                }
                                l.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var p = -1 !== u.indexOf("-->");
                                if (!u || p && (h = !0)) {
                                    l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                    continue
                                }
                                l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                                continue;
                            case "BADCUE":
                                u || (l.state = "ID");
                                continue
                        }
                    }
                } catch (d) {
                    l.reportOrThrowError(d), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
                }
                return this
            },
            flush: function() {
                var t = this;
                try {
                    if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
                } catch (i) {
                    t.reportOrThrowError(i)
                }
                return t.onflush && t.onflush(), this
            }
        }, t.WebVTT = p
    }(this, this.vttjs || {}),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery", "videojs", "imagesloaded", "jquery-ui"], t) : t(jQuery, videojs)
    }(function($, t) {
        $.BigVideo = function(e) {
            function i() {
                var t = j.container.outerWidth() < $(window).width() ? j.container.outerWidth() : $(window).width(),
                    e = j.container.outerHeight() < $(window).height() ? j.container.outerHeight() : $(window).height(),
                    i = t / e;
                j.container.is($("body")) && $("html,body").css("height", $(window).height() > $("body").css("height", "auto").height() ? "100%" : "auto"), g > i ? "video" == C ? (h.width(e * g).height(e), j.shrinkable ? $(d).css("top", -(t / g - e) / 2).css("left", 0).css("height", t / g) : $(d).css("top", 0).css("left", -(e * g - t) / 2).css("height", e), $(d + "_html5_api").css("width", e * g).css("height", e), $(d + "_flash_api").css("width", e * g).css("height", e)) : $("#big-video-image").css({
                    width: "auto",
                    height: e,
                    top: 0,
                    left: -(e * g - t) / 2
                }) : "video" == C ? (h.width(t).height(t / g), $(d).css("top", -(t / g - e) / 2).css("left", 0).css("height", t / g), $(d + "_html5_api").css("width", $(d + "_html5_api").parent().width() + "px").css("height", "auto"), $(d + "_flash_api").css("width", t).css("height", t / g)) : $("#big-video-image").css({
                    width: t,
                    height: "auto",
                    top: -(t / g - e) / 2,
                    left: 0
                })
            }

            function n() {
                var t = '<div id="big-video-control-container"><div id="big-video-control"><a href="#" id="big-video-control-play"></a><div id="big-video-control-middle"><div id="big-video-control-bar"><div id="big-video-control-bound-left"></div><div id="big-video-control-progress"></div><div id="big-video-control-track"></div><div id="big-video-control-bound-right"></div></div></div>	<div id="big-video-control-timer"></div></div></div>';
                j.container.append(t), $("#big-video-control-container").css("display", "none"), $("#big-video-control-timer").css("display", "none"), $("#big-video-control-track").slider({
                    animate: !0,
                    step: .01,
                    slide: function(t, e) {
                        b = !0, $("#big-video-control-progress").css("width", e.value - .16 + "%"), h.currentTime(e.value / 100 * h.duration())
                    },
                    stop: function(t, e) {
                        b = !1, h.currentTime(e.value / 100 * h.duration())
                    }
                }), $("#big-video-control-bar").click(function(t) {
                    h.currentTime(t.offsetX / $(this).width() * h.duration())
                }), $("#big-video-control-play").click(function(t) {
                    t.preventDefault(), s("toggle")
                }), h.on("timeupdate", function() {
                    if (!b && h.currentTime() / h.duration()) {
                        var t = h.currentTime(),
                            e = Math.floor(t / 60),
                            i = Math.floor(t) - 60 * e;
                        10 > i && (i = "0" + i);
                        var n = h.currentTime() / h.duration() * 100;
                        $("#big-video-control-track").slider("value", n), $("#big-video-control-progress").css("width", n - .16 + "%"), $("#big-video-control-timer").text(e + ":" + i + "/" + m)
                    }
                })
            }

            function s(t) {
                var e = t || "toggle";
                "toggle" == e && (e = _ ? "pause" : "play"), "pause" == e ? (h.pause(), $("#big-video-control-play").css("background-position", "-16px"), _ = !1) : "play" == e ? (h.play(), $("#big-video-control-play").css("background-position", "0"), _ = !0) : "skip" == e && r()
            }

            function o() {
                h.play(), j.container.off("click", o)
            }

            function r() {
                k++, k === T.length && (k = 0), a(T[k])
            }

            function a(t) {
                $(d).css("display", "block"), C = "video", h.src(t), _ = !0, x ? ($("#big-video-control-container").css("display", "none"), h.ready(function() {
                    h.volume(0)
                }), doLoop = !0) : ($("#big-video-control-container").css("display", "block"), h.ready(function() {
                    h.volume(v)
                }), doLoop = !1), $("#big-video-image").css("display", "none"), $(d).css("display", "block")
            }

            function l(t) {
                $("#big-video-image").remove(), h.pause(), $(d).css("display", "none"), $("#big-video-control-container").css("display", "none"), C = "image";
                var e = $('<img id="big-video-image" src=' + t + " />");
                p.append(e), $("#big-video-image").imagesLoaded(function() {
                    g = $("#big-video-image").width() / $("#big-video-image").height(), i()
                })
            }
            var u = {
                    useFlashForFirefox: !0,
                    forceAutoplay: !1,
                    controls: !1,
                    doLoop: !1,
                    container: $("body"),
                    shrinkable: !1
                },
                c = {},
                h, d = "#big-video-vid",
                p = $('<div id="big-video-wrap"></div>'),
                f = $(""),
                g = 16 / 9,
                m = 0,
                v = .8,
                y = !1,
                b = !1,
                _ = !1,
                w = !1,
                x = !1,
                T = [],
                k, C, j = $.extend({}, u, e);
            return c.init = function() {
                if (!y) {
                    j.container.prepend(p);
                    var e = j.forceAutoplay ? "autoplay" : "";
                    h = $('<video id="' + d.substr(1) + '" class="video-js vjs-default-skin" height="1" width="1" preload="auto" data-setup="{}" ' + e + " webkit-playsinline></video>"), h.css("position", "absolute"), p.append(h);
                    var s = ["html5", "flash"],
                        a = navigator.userAgent.toLowerCase(),
                        l = -1 != a.indexOf("firefox");
                    j.useFlashForFirefox && l && (s = ["flash", "html5"]), h = t(d.substr(1), {
                        controls: !1,
                        autoplay: !0,
                        preload: "auto",
                        techOrder: s
                    }), j.controls && n(), i(), y = !0, _ = !1, j.forceAutoplay && $("body").on("click", o), $("#big-video-vid_flash_api").attr("scale", "noborder").attr("width", "100%").attr("height", "100%"), $(window).on("resize.bigvideo", function() {
                        i()
                    }), h.on("loadedmetadata", function(t) {
                        g = document.getElementById("big-video-vid_flash_api") ? document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoWidth") / document.getElementById("big-video-vid_flash_api").vjs_getProperty("videoHeight") : $("#big-video-vid_html5_api").prop("videoWidth") / $("#big-video-vid_html5_api").prop("videoHeight"), i();
                        var e = Math.round(h.duration()),
                            n = Math.floor(e / 60),
                            s = e - 60 * n;
                        10 > s && (s = "0" + s), m = n + ":" + s
                    }), h.on("ended", function() {
                        j.doLoop && (h.currentTime(0), h.play()), w && r()
                    })
                }
            }, c.show = function(t, e) {
                if (void 0 === e && (e = {}), x = e.ambient === !0, (x || e.doLoop) && (j.doLoop = !0), "string" == typeof t) {
                    var i = t.lastIndexOf("?") > 0 ? t.substring(t.lastIndexOf(".") + 1, t.lastIndexOf("?")) : t.substring(t.lastIndexOf(".") + 1);
                    "jpg" == i || "gif" == i || "png" == i ? l(t) : ("mp4" == i || "ogg" == i || "ogv" == i || "webm" == i) && (a(t), e.onShown && e.onShown(), w = !1)
                } else if ($.isArray(t)) a(t);
                else {
                    if ("object" != typeof t || !t.src || !t.type) throw "BigVideo.show received invalid input for parameter source";
                    a([t])
                }
            }, c.showPlaylist = function(t, e) {
                if (!$.isArray(t)) throw "BigVideo.showPlaylist parameter files accepts only arrays";
                void 0 === e && (e = {}), x = e.ambient === !0, (x || e.doLoop) && (j.doLoop = !0), T = t, k = 0, this.show(T[k]), e.onShown && e.onShown(), w = !0
            }, c.getPlayer = function() {
                return h
            }, c.remove = c.dispose = function() {
                y = !1, p.remove(), $(window).off("resize.bigvideo"), h && (h.off("loadedmetadata"), h.off("ended"), h.dispose())
            }, c.triggerPlayer = function(t) {
                s(t)
            }, c
        }
    }),
    function(t, e, i) {
        "use strict";

        function n(i) {
            if (l = e.documentElement, u = e.body, q(), wt = this, i = i || {}, St = i.constants || {}, i.easing)
                for (var n in i.easing) X[n] = i.easing[n];
            Bt = i.edgeStrategy || "set", kt = {
                beforerender: i.beforerender,
                render: i.render,
                keyframe: i.keyframe
            }, Ct = i.forceHeight !== !1, Ct && (Et = i.scale || 1), Ot = i.mobileDeceleration || k, Ft = i.smoothScrolling !== !1, Rt = i.smoothScrollingDuration || j, zt = {
                targetTop: wt.getScrollTop()
            }, Vt = (i.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
            })(), Vt ? (Tt = e.getElementById(i.skrollrBody || C), Tt && at(), G(), mt(l, [y, w], [b])) : mt(l, [y, _], [b]), wt.refresh(), lt(t, "resize orientationchange", function() {
                var t = l.clientWidth,
                    e = l.clientHeight;
                (e !== At || t !== It) && (At = e, It = t, Nt = !0)
            });
            var s = U();
            return function o() {
                Q(), $t = s(o)
            }(), wt
        }
        var s = {
                get: function() {
                    return wt
                },
                init: function(t) {
                    return wt || new n(t)
                },
                VERSION: "0.6.29"
            },
            o = Object.prototype.hasOwnProperty,
            r = t.Math,
            a = t.getComputedStyle,
            l, u, c = "touchstart",
            h = "touchmove",
            d = "touchcancel",
            p = "touchend",
            f = "skrollable",
            g = f + "-before",
            m = f + "-between",
            v = f + "-after",
            y = "skrollr",
            b = "no-" + y,
            _ = y + "-desktop",
            w = y + "-mobile",
            x = "linear",
            T = 1e3,
            k = .004,
            C = "skrollr-body",
            j = 200,
            E = "start",
            S = "end",
            O = "center",
            P = "bottom",
            D = "___skrollable_id",
            M = /^(?:input|textarea|button|select)$/i,
            I = /^\s+|\s+$/g,
            A = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            N = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            H = /^(@?[a-z\-]+)\[(\w+)\]$/,
            F = /-([a-z0-9_])/g,
            R = function(t, e) {
                return e.toUpperCase()
            },
            z = /[\-+]?[\d]*\.?[\d]+/g,
            L = /\{\?\}/g,
            W = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            B = /[a-z\-]+-gradient/g,
            V = "",
            Y = "",
            q = function() {
                var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (a) {
                    var e = a(u, null);
                    for (var i in e)
                        if (V = i.match(t) || +i == i && e[i].match(t)) break;
                    if (!V) return void(V = Y = "");
                    V = V[0], "-" === V.slice(0, 1) ? (Y = V, V = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[V]) : Y = "-" + V.toLowerCase() + "-"
                }
            },
            U = function() {
                var e = t.requestAnimationFrame || t[V.toLowerCase() + "RequestAnimationFrame"],
                    i = bt();
                return (Vt || !e) && (e = function(e) {
                    var n = bt() - i,
                        s = r.max(0, 1e3 / 60 - n);
                    return t.setTimeout(function() {
                        i = bt(), e()
                    }, s)
                }), e
            },
            K = function() {
                var e = t.cancelAnimationFrame || t[V.toLowerCase() + "CancelAnimationFrame"];
                return (Vt || !e) && (e = function(e) {
                    return t.clearTimeout(e)
                }), e
            },
            X = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(t) {
                    return t
                },
                quadratic: function(t) {
                    return t * t
                },
                cubic: function(t) {
                    return t * t * t
                },
                swing: function(t) {
                    return -r.cos(t * r.PI) / 2 + .5
                },
                sqrt: function(t) {
                    return r.sqrt(t)
                },
                outCubic: function(t) {
                    return r.pow(t - 1, 3) + 1
                },
                bounce: function(t) {
                    var e;
                    if (.5083 >= t) e = 3;
                    else if (.8489 >= t) e = 9;
                    else if (.96208 >= t) e = 27;
                    else {
                        if (!(.99981 >= t)) return 1;
                        e = 91
                    }
                    return 1 - r.abs(3 * r.cos(t * e * 1.028) / e)
                }
            };
        n.prototype.refresh = function(t) {
            var n, s, o = !1;
            for (t === i ? (o = !0, xt = [], Wt = 0, t = e.getElementsByTagName("*")) : t.length === i && (t = [t]), n = 0, s = t.length; s > n; n++) {
                var r = t[n],
                    a = r,
                    l = [],
                    u = Ft,
                    c = Bt,
                    h = !1;
                if (o && D in r && delete r[D], r.attributes) {
                    for (var d = 0, p = r.attributes.length; p > d; d++) {
                        var g = r.attributes[d];
                        if ("data-anchor-target" !== g.name)
                            if ("data-smooth-scrolling" !== g.name)
                                if ("data-edge-strategy" !== g.name)
                                    if ("data-emit-events" !== g.name) {
                                        var m = g.name.match(A);
                                        if (null !== m) {
                                            var v = {
                                                props: g.value,
                                                element: r,
                                                eventType: g.name.replace(F, R)
                                            };
                                            l.push(v);
                                            var y = m[1];
                                            y && (v.constant = y.substr(1));
                                            var b = m[2];
                                            /p$/.test(b) ? (v.isPercentage = !0, v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
                                            var _ = m[3],
                                                w = m[4] || _;
                                            _ && _ !== E && _ !== S ? (v.mode = "relative", v.anchors = [_, w]) : (v.mode = "absolute", _ === S ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * Et))
                                        }
                                    } else h = !0;
                        else c = g.value;
                        else u = "off" !== g.value;
                        else if (a = e.querySelector(g.value), null === a) throw 'Unable to find anchor target "' + g.value + '"'
                    }
                    if (l.length) {
                        var x, T, k;
                        !o && D in r ? (k = r[D], x = xt[k].styleAttr, T = xt[k].classAttr) : (k = r[D] = Wt++, x = r.style.cssText, T = gt(r)), xt[k] = {
                            element: r,
                            styleAttr: x,
                            classAttr: T,
                            anchorTarget: a,
                            keyFrames: l,
                            smoothScrolling: u,
                            edgeStrategy: c,
                            emitEvents: h,
                            lastFrameIndex: -1
                        }, mt(r, [f], [])
                    }
                }
            }
            for (dt(), n = 0, s = t.length; s > n; n++) {
                var C = xt[t[n][D]];
                C !== i && (tt(C), it(C))
            }
            return wt
        }, n.prototype.relativeToAbsolute = function(t, e, i) {
            var n = l.clientHeight,
                s = t.getBoundingClientRect(),
                o = s.top,
                r = s.bottom - s.top;
            return e === P ? o -= n : e === O && (o -= n / 2), i === P ? o += r : i === O && (o += r / 2), o += wt.getScrollTop(), o + .5 | 0
        }, n.prototype.animateTo = function(t, e) {
            e = e || {};
            var n = bt(),
                s = wt.getScrollTop(),
                o = e.duration === i ? T : e.duration;
            return Ht = {
                startTop: s,
                topDiff: t - s,
                targetTop: t,
                duration: o,
                startTime: n,
                endTime: n + o,
                easing: X[e.easing || x],
                done: e.done
            }, Ht.topDiff || (Ht.done && Ht.done.call(wt, !1), Ht = i), wt
        }, n.prototype.stopAnimateTo = function() {
            Ht && Ht.done && Ht.done.call(wt, !0), Ht = i
        }, n.prototype.isAnimatingTo = function() {
            return !!Ht
        }, n.prototype.isMobile = function() {
            return Vt
        }, n.prototype.setScrollTop = function(e, i) {
            return Lt = i === !0, Vt ? Yt = r.min(r.max(e, 0), jt) : t.scrollTo(0, e), wt
        }, n.prototype.getScrollTop = function() {
            return Vt ? Yt : t.pageYOffset || l.scrollTop || u.scrollTop || 0
        }, n.prototype.getMaxScrollTop = function() {
            return jt
        }, n.prototype.on = function(t, e) {
            return kt[t] = e, wt
        }, n.prototype.off = function(t) {
            return delete kt[t], wt
        }, n.prototype.destroy = function() {
            var t = K();
            t($t), ct(), mt(l, [b], [y, _, w]);
            for (var e = 0, n = xt.length; n > e; e++) rt(xt[e].element);
            l.style.overflow = u.style.overflow = "", l.style.height = u.style.height = "", Tt && s.setStyle(Tt, "transform", "none"), wt = i, Tt = i, kt = i, Ct = i, jt = 0, Et = 1, St = i, Ot = i, Pt = "down", Dt = -1, It = 0, At = 0, Nt = !1, Ht = i, Ft = i, Rt = i, zt = i, Lt = i, Wt = 0, Bt = i, Vt = !1, Yt = 0, qt = i
        };
        var G = function() {
                var n, s, o, a, f, g, m, v, y, b, _, w;
                lt(l, [c, h, d, p].join(" "), function(t) {
                    var l = t.changedTouches[0];
                    for (a = t.target; 3 === a.nodeType;) a = a.parentNode;
                    switch (f = l.clientY, g = l.clientX, b = t.timeStamp, M.test(a.tagName) || t.preventDefault(), t.type) {
                        case c:
                            n && n.blur(), wt.stopAnimateTo(), n = a, s = m = f, o = g, y = b;
                            break;
                        case h:
                            M.test(a.tagName) && e.activeElement !== a && t.preventDefault(), v = f - m, w = b - _, wt.setScrollTop(Yt - v, !0), m = f, _ = b;
                            break;
                        default:
                        case d:
                        case p:
                            var u = s - f,
                                x = o - g,
                                T = x * x + u * u;
                            if (49 > T) {
                                if (!M.test(n.tagName)) {
                                    n.focus();
                                    var k = e.createEvent("MouseEvents");
                                    k.initMouseEvent("click", !0, !0, t.view, 1, l.screenX, l.screenY, l.clientX, l.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), n.dispatchEvent(k)
                                }
                                return
                            }
                            n = i;
                            var C = v / w;
                            C = r.max(r.min(C, 3), -3);
                            var j = r.abs(C / Ot),
                                E = C * j + .5 * Ot * j * j,
                                S = wt.getScrollTop() - E,
                                O = 0;
                            S > jt ? (O = (jt - S) / E, S = jt) : 0 > S && (O = -S / E, S = 0), j *= 1 - O, wt.animateTo(S + .5 | 0, {
                                easing: "outCubic",
                                duration: j
                            })
                    }
                }), t.scrollTo(0, 0), l.style.overflow = u.style.overflow = "hidden"
            },
            J = function() {
                var t = l.clientHeight,
                    e = pt(),
                    i, n, s, o, a, u, c, h, d, p, f;
                for (h = 0, d = xt.length; d > h; h++)
                    for (i = xt[h], n = i.element, s = i.anchorTarget, o = i.keyFrames, a = 0, u = o.length; u > a; a++) c = o[a], p = c.offset, f = e[c.constant] || 0, c.frame = p, c.isPercentage && (p *= t, c.frame = p), "relative" === c.mode && (rt(n), c.frame = wt.relativeToAbsolute(s, c.anchors[0], c.anchors[1]) - p, rt(n, !0)), c.frame += f, Ct && !c.isEnd && c.frame > jt && (jt = c.frame);
                for (jt = r.max(jt, ft()), h = 0, d = xt.length; d > h; h++) {
                    for (i = xt[h], o = i.keyFrames, a = 0, u = o.length; u > a; a++) c = o[a], f = e[c.constant] || 0, c.isEnd && (c.frame = jt - c.offset + f);
                    i.keyFrames.sort(_t)
                }
            },
            Z = function(t, e) {
                for (var i = 0, n = xt.length; n > i; i++) {
                    var r = xt[i],
                        a = r.element,
                        l = r.smoothScrolling ? t : e,
                        u = r.keyFrames,
                        c = u.length,
                        h = u[0],
                        d = u[u.length - 1],
                        p = l < h.frame,
                        y = l > d.frame,
                        b = p ? h : d,
                        _ = r.emitEvents,
                        w = r.lastFrameIndex,
                        x, T;
                    if (p || y) {
                        if (p && -1 === r.edge || y && 1 === r.edge) continue;
                        switch (p ? (mt(a, [g], [v, m]), _ && w > -1 && (ht(a, h.eventType, Pt), r.lastFrameIndex = -1)) : (mt(a, [v], [g, m]), _ && c > w && (ht(a, d.eventType, Pt), r.lastFrameIndex = c)), r.edge = p ? -1 : 1, r.edgeStrategy) {
                            case "reset":
                                rt(a);
                                continue;
                            case "ease":
                                l = b.frame;
                                break;
                            default:
                            case "set":
                                var k = b.props;
                                for (x in k) o.call(k, x) && (T = ot(k[x].value), 0 === x.indexOf("@") ? a.setAttribute(x.substr(1), T) : s.setStyle(a, x, T));
                                continue
                        }
                    } else 0 !== r.edge && (mt(a, [f, m], [g, v]), r.edge = 0);
                    for (var C = 0; c - 1 > C; C++)
                        if (l >= u[C].frame && l <= u[C + 1].frame) {
                            var j = u[C],
                                E = u[C + 1];
                            for (x in j.props)
                                if (o.call(j.props, x)) {
                                    var S = (l - j.frame) / (E.frame - j.frame);
                                    S = j.props[x].easing(S), T = st(j.props[x].value, E.props[x].value, S), T = ot(T), 0 === x.indexOf("@") ? a.setAttribute(x.substr(1), T) : s.setStyle(a, x, T)
                                }
                            _ && w !== C && ("down" === Pt ? ht(a, j.eventType, Pt) : ht(a, E.eventType, Pt), r.lastFrameIndex = C);
                            break
                        }
                }
            },
            Q = function() {
                Nt && (Nt = !1, dt());
                var t = wt.getScrollTop(),
                    e, n = bt(),
                    o;
                if (Ht) n >= Ht.endTime ? (t = Ht.targetTop, e = Ht.done, Ht = i) : (o = Ht.easing((n - Ht.startTime) / Ht.duration), t = Ht.startTop + o * Ht.topDiff | 0), wt.setScrollTop(t, !0);
                else if (!Lt) {
                    var r = zt.targetTop - t;
                    r && (zt = {
                        startTop: Dt,
                        topDiff: t - Dt,
                        targetTop: t,
                        startTime: Mt,
                        endTime: Mt + Rt
                    }), n <= zt.endTime && (o = X.sqrt((n - zt.startTime) / Rt), t = zt.startTop + o * zt.topDiff | 0)
                }
                if (Lt || Dt !== t) {
                    Pt = t > Dt ? "down" : Dt > t ? "up" : Pt, Lt = !1;
                    var a = {
                            curTop: t,
                            lastTop: Dt,
                            maxTop: jt,
                            direction: Pt
                        },
                        l = kt.beforerender && kt.beforerender.call(wt, a);
                    l !== !1 && (Z(t, wt.getScrollTop()), Vt && Tt && s.setStyle(Tt, "transform", "translate(0, " + -Yt + "px) " + qt), Dt = t, kt.render && kt.render.call(wt, a)), e && e.call(wt, !1)
                }
                Mt = n
            },
            tt = function(t) {
                for (var e = 0, i = t.keyFrames.length; i > e; e++) {
                    for (var n = t.keyFrames[e], s, o, r, a = {}, l; null !== (l = N.exec(n.props));) r = l[1], o = l[2], s = r.match(H), null !== s ? (r = s[1], s = s[2]) : s = x, o = o.indexOf("!") ? et(o) : [o.slice(1)], a[r] = {
                        value: o,
                        easing: X[s]
                    };
                    n.props = a
                }
            },
            et = function(t) {
                var e = [];
                return W.lastIndex = 0, t = t.replace(W, function(t) {
                    return t.replace(z, function(t) {
                        return t / 255 * 100 + "%"
                    })
                }), Y && (B.lastIndex = 0, t = t.replace(B, function(t) {
                    return Y + t
                })), t = t.replace(z, function(t) {
                    return e.push(+t), "{?}"
                }), e.unshift(t), e
            },
            it = function(t) {
                var e = {},
                    i, n;
                for (i = 0, n = t.keyFrames.length; n > i; i++) nt(t.keyFrames[i], e);
                for (e = {}, i = t.keyFrames.length - 1; i >= 0; i--) nt(t.keyFrames[i], e)
            },
            nt = function(t, e) {
                var i;
                for (i in e) o.call(t.props, i) || (t.props[i] = e[i]);
                for (i in t.props) e[i] = t.props[i]
            },
            st = function(t, e, i) {
                var n, s = t.length;
                if (s !== e.length) throw "Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
                var o = [t[0]];
                for (n = 1; s > n; n++) o[n] = t[n] + (e[n] - t[n]) * i;
                return o
            },
            ot = function(t) {
                var e = 1;
                return L.lastIndex = 0, t[0].replace(L, function() {
                    return t[e++]
                })
            },
            rt = function(t, e) {
                t = [].concat(t);
                for (var i, n, s = 0, o = t.length; o > s; s++) n = t[s], i = xt[n[D]], i && (e ? (n.style.cssText = i.dirtyStyleAttr, mt(n, i.dirtyClassAttr)) : (i.dirtyStyleAttr = n.style.cssText, i.dirtyClassAttr = gt(n), n.style.cssText = i.styleAttr, mt(n, i.classAttr)))
            },
            at = function() {
                qt = "translateZ(0)", s.setStyle(Tt, "transform", qt);
                var t = a(Tt),
                    e = t.getPropertyValue("transform"),
                    i = t.getPropertyValue(Y + "transform"),
                    n = e && "none" !== e || i && "none" !== i;
                n || (qt = "")
            };
        s.setStyle = function(t, e, i) {
            var n = t.style;
            if (e = e.replace(F, R).replace("-", ""), "zIndex" === e) isNaN(i) ? n[e] = i : n[e] = "" + (0 | i);
            else if ("float" === e) n.styleFloat = n.cssFloat = i;
            else try {
                V && (n[V + e.slice(0, 1).toUpperCase() + e.slice(1)] = i), n[e] = i
            } catch (s) {}
        };
        var lt = s.addEvent = function(e, i, n) {
                var s = function(e) {
                    return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                        e.returnValue = !1, e.defaultPrevented = !0
                    }), n.call(this, e)
                };
                i = i.split(" ");
                for (var o, r = 0, a = i.length; a > r; r++) o = i[r], e.addEventListener ? e.addEventListener(o, n, !1) : e.attachEvent("on" + o, s), Ut.push({
                    element: e,
                    name: o,
                    listener: n
                })
            },
            ut = s.removeEvent = function(t, e, i) {
                e = e.split(" ");
                for (var n = 0, s = e.length; s > n; n++) t.removeEventListener ? t.removeEventListener(e[n], i, !1) : t.detachEvent("on" + e[n], i)
            },
            ct = function() {
                for (var t, e = 0, i = Ut.length; i > e; e++) t = Ut[e], ut(t.element, t.name, t.listener);
                Ut = []
            },
            ht = function(t, e, i) {
                kt.keyframe && kt.keyframe.call(wt, t, e, i)
            },
            dt = function() {
                var t = wt.getScrollTop();
                jt = 0, Ct && !Vt && (u.style.height = ""), J(), Ct && !Vt && (u.style.height = jt + l.clientHeight + "px"), Vt ? wt.setScrollTop(r.min(wt.getScrollTop(), jt)) : wt.setScrollTop(t, !0), Lt = !0
            },
            pt = function() {
                var t = l.clientHeight,
                    e = {},
                    i, n;
                for (i in St) n = St[i], "function" == typeof n ? n = n.call(wt) : /p$/.test(n) && (n = n.slice(0, -1) / 100 * t), e[i] = n;
                return e
            },
            ft = function() {
                var t = 0,
                    e;
                return Tt && (t = r.max(Tt.offsetHeight, Tt.scrollHeight)), e = r.max(t, u.scrollHeight, u.offsetHeight, l.scrollHeight, l.offsetHeight, l.clientHeight), e - l.clientHeight
            },
            gt = function(e) {
                var i = "className";
                return t.SVGElement && e instanceof t.SVGElement && (e = e[i], i = "baseVal"), e[i]
            },
            mt = function(e, n, s) {
                var o = "className";
                if (t.SVGElement && e instanceof t.SVGElement && (e = e[o], o = "baseVal"), s === i) return void(e[o] = n);
                for (var r = e[o], a = 0, l = s.length; l > a; a++) r = yt(r).replace(yt(s[a]), " ");
                r = vt(r);
                for (var u = 0, c = n.length; c > u; u++) - 1 === yt(r).indexOf(yt(n[u])) && (r += " " + n[u]);
                e[o] = vt(r)
            },
            vt = function(t) {
                return t.replace(I, "")
            },
            yt = function(t) {
                return " " + t + " "
            },
            bt = Date.now || function() {
                return +new Date
            },
            _t = function(t, e) {
                return t.frame - e.frame
            },
            wt, xt, Tt, kt, Ct, jt = 0,
            Et = 1,
            St, Ot, Pt = "down",
            Dt = -1,
            Mt = bt(),
            It = 0,
            At = 0,
            Nt = !1,
            Ht, Ft, Rt, zt, Lt, Wt = 0,
            Bt, Vt = !1,
            Yt = 0,
            qt, Ut = [],
            $t;
        "function" == typeof define && define.amd ? define([], function() {
            return s
        }) : "undefined" != typeof module && module.exports ? module.exports = s : t.skrollr = s
    }(window, document),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e()
    }(this, function(t, e, i) {
        return function() {
            "use strict";
            var t, e, i;
            this.ScrollReveal = function() {
                function n(i) {
                    return "undefined" == typeof this || Object.getPrototypeOf(this) !== n.prototype ? new n(i) : (t = this, t.tools = new e, t.isSupported() ? (t.tools.extend(t.defaults, i || {}), s(t.defaults), t.store = {
                        elements: {},
                        containers: []
                    }, t.sequences = {}, t.history = [], t.uid = 0, t.initialized = !1) : "undefined" != typeof console && null !== console && console.log("ScrollReveal is not supported in this browser."), t)
                }

                function s(e) {
                    var i = e.container;
                    return i && "string" == typeof i ? e.container = window.document.querySelector(i) : (i && !t.tools.isNode(i) && (console.log("ScrollReveal: Invalid container provided, using <html> instead."), e.container = null), null == i && (e.container = window.document.documentElement), e.container)
                }

                function o() {
                    return ++t.uid
                }

                function r(e, i) {
                    e.config ? e.config = t.tools.extendClone(e.config, i) : e.config = t.tools.extendClone(t.defaults, i), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X", ("top" === e.config.origin || "left" === e.config.origin) && (e.config.distance = "-" + e.config.distance)
                }

                function a(t) {
                    var e = window.getComputedStyle(t.domEl);
                    t.styles || (t.styles = {
                        transition: {},
                        transform: {},
                        computed: {}
                    }, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = e.opacity, e.transition && "all 0s ease 0s" != e.transition ? t.styles.computed.transition = e.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = l(t, 0), t.styles.transition.delayed = l(t, t.config.delay), t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", u(t), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", u(t)
                }

                function l(t, e) {
                    var i = t.config;
                    return "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; "
                }

                function u(t) {
                    var e = t.config,
                        i = t.styles.transform;
                    parseInt(e.distance) && (i.initial += " translate" + e.axis + "(" + e.distance + ")", i.target += " translate" + e.axis + "(0)"), e.scale && (i.initial += " scale(" + e.scale + ")", i.target += " scale(1)"), e.rotate.x && (i.initial += " rotateX(" + e.rotate.x + "deg)", i.target += " rotateX(0)"), e.rotate.y && (i.initial += " rotateY(" + e.rotate.y + "deg)", i.target += " rotateY(0)"), e.rotate.z && (i.initial += " rotateZ(" + e.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + e.opacity + ";", i.target += "; opacity: " + t.styles.computed.opacity + ";"
                }

                function c(e) {
                    var i = e.config.container;
                    i && -1 == t.store.containers.indexOf(i) && t.store.containers.push(e.config.container), t.store.elements[e.id] = e
                }

                function h(e, i, n) {
                    var s = {
                        selector: e,
                        config: i,
                        interval: n
                    };
                    t.history.push(s)
                }

                function d() {
                    if (t.isSupported()) {
                        g();
                        for (var e = 0; e < t.store.containers.length; e++) t.store.containers[e].addEventListener("scroll", p), t.store.containers[e].addEventListener("resize", p);
                        t.initialized || (window.addEventListener("scroll", p), window.addEventListener("resize", p), t.initialized = !0)
                    }
                    return t
                }

                function p() {
                    i(g)
                }

                function f() {
                    var e, i, n, s;
                    t.tools.forOwn(t.sequences, function(o) {
                        s = t.sequences[o], e = !1;
                        for (var r = 0; r < s.elemIds.length; r++) n = s.elemIds[r], i = t.store.elements[n], k(i) && !e && (e = !0);
                        s.active = e
                    })
                }

                function g() {
                    var e, i;
                    f(), t.tools.forOwn(t.store.elements, function(n) {
                        i = t.store.elements[n], e = b(i), y(i) ? (e ? i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.delayed) : i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.instant), v("reveal", i, e), i.revealing = !0, i.seen = !0, i.sequence && m(i, e)) : _(i) && (i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.initial + i.styles.transition.instant), v("reset", i), i.revealing = !1)
                    })
                }

                function m(e, i) {
                    var n = 0,
                        s = 0,
                        o = t.sequences[e.sequence.id];
                    o.blocked = !0, i && "onload" == e.config.useDelay && (s = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
                        started: new Date
                    }, e.sequence.timer.clock = window.setTimeout(function() {
                        o.blocked = !1, e.sequence.timer = null, p()
                    }, Math.abs(o.interval) + s - n)
                }

                function v(t, e, i) {
                    var n = 0,
                        s = 0,
                        o = "after";
                    switch (t) {
                        case "reveal":
                            s = e.config.duration, i && (s += e.config.delay), o += "Reveal";
                            break;
                        case "reset":
                            s = e.config.duration, o += "Reset"
                    }
                    e.timer && (n = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = {
                        started: new Date
                    }, e.timer.clock = window.setTimeout(function() {
                        e.config[o](e.domEl), e.timer = null
                    }, s - n)
                }

                function y(e) {
                    if (e.sequence) {
                        var i = t.sequences[e.sequence.id];
                        return i.active && !i.blocked && !e.revealing && !e.disabled
                    }
                    return k(e) && !e.revealing && !e.disabled
                }

                function b(e) {
                    var i = e.config.useDelay;
                    return "always" === i || "onload" === i && !t.initialized || "once" === i && !e.seen
                }

                function _(e) {
                    if (e.sequence) {
                        var i = t.sequences[e.sequence.id];
                        return !i.active && e.config.reset && e.revealing && !e.disabled
                    }
                    return !k(e) && e.config.reset && e.revealing && !e.disabled
                }

                function w(t) {
                    return {
                        width: t.clientWidth,
                        height: t.clientHeight
                    }
                }

                function x(t) {
                    if (t && t !== window.document.documentElement) {
                        var e = T(t);
                        return {
                            x: t.scrollLeft + e.left,
                            y: t.scrollTop + e.top
                        }
                    }
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                }

                function T(t) {
                    var e = 0,
                        i = 0,
                        n = t.offsetHeight,
                        s = t.offsetWidth;
                    do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
                    return {
                        top: e,
                        left: i,
                        height: n,
                        width: s
                    }
                }

                function k(t) {
                    function e() {
                        var e = u + a * r,
                            i = c + l * r,
                            n = h - a * r,
                            p = d - l * r,
                            f = o.y + t.config.viewOffset.top,
                            g = o.x + t.config.viewOffset.left,
                            m = o.y - t.config.viewOffset.bottom + s.height,
                            v = o.x - t.config.viewOffset.right + s.width;
                        return m > e && n > f && i > g && v > p
                    }

                    function i() {
                        return "fixed" === window.getComputedStyle(t.domEl).position
                    }
                    var n = T(t.domEl),
                        s = w(t.config.container),
                        o = x(t.config.container),
                        r = t.config.viewFactor,
                        a = n.height,
                        l = n.width,
                        u = n.top,
                        c = n.left,
                        h = u + a,
                        d = c + l;
                    return e() || i()
                }
                return n.prototype.defaults = {
                    origin: "bottom",
                    distance: "20px",
                    duration: 500,
                    delay: 0,
                    rotate: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    opacity: 0,
                    scale: .9,
                    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
                    container: null,
                    mobile: !0,
                    reset: !1,
                    useDelay: "always",
                    viewFactor: .2,
                    viewOffset: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    afterReveal: function(t) {},
                    afterReset: function(t) {}
                }, n.prototype.isSupported = function() {
                    var t = document.documentElement.style;
                    return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t
                }, n.prototype.reveal = function(e, i, n, l) {
                    var u, p, f, g, m, v;
                    if (u = i && i.container ? s(i) : t.defaults.container, p = t.tools.isNode(e) ? [e] : Array.prototype.slice.call(u.querySelectorAll(e)), !p.length) return console.log('ScrollReveal: reveal on "' + e + '" failed, no elements found.'), t;
                    i && "number" == typeof i && (n = i, i = {}), n && "number" == typeof n && (v = o(), m = t.sequences[v] = {
                        id: v,
                        interval: n,
                        elemIds: [],
                        active: !1
                    });
                    for (var y = 0; y < p.length; y++) g = p[y].getAttribute("data-sr-id"), g ? f = t.store.elements[g] : (f = {
                        id: o(),
                        domEl: p[y],
                        seen: !1,
                        revealing: !1
                    }, f.domEl.setAttribute("data-sr-id", f.id)), m && (f.sequence = {
                        id: m.id,
                        index: m.elemIds.length
                    }, m.elemIds.push(f.id)), r(f, i || {}), a(f), c(f), t.tools.isMobile() && !f.config.mobile || !t.isSupported() ? (f.domEl.setAttribute("style", f.styles.inline), f.disabled = !0) : f.revealing || f.domEl.setAttribute("style", f.styles.inline + f.styles.transform.initial);
                    return !l && t.isSupported() && (h(e, i), t.initTimeout && window.clearTimeout(t.initTimeout), t.initTimeout = window.setTimeout(d, 0)), t
                }, n.prototype.sync = function() {
                    if (t.history.length && t.isSupported()) {
                        for (var e = 0; e < t.history.length; e++) {
                            var i = t.history[e];
                            t.reveal(i.selector, i.config, i.interval, !0)
                        }
                        d()
                    } else console.log("ScrollReveal: sync failed, no reveals found.");
                    return t
                }, n
            }(), e = function() {
                function t() {}
                return t.prototype.isObject = function(t) {
                    return null !== t && "object" == typeof t && t.constructor == Object
                }, t.prototype.isNode = function(t) {
                    return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                }, t.prototype.forOwn = function(t, e) {
                    if (!this.isObject(t)) throw new TypeError('Expected "object", but received "' + typeof t + '".');
                    for (var i in t) t.hasOwnProperty(i) && e(i)
                }, t.prototype.extend = function(t, e) {
                    return this.forOwn(e, function(i) {
                        this.isObject(e[i]) ? (t[i] && this.isObject(t[i]) || (t[i] = {}), this.extend(t[i], e[i])) : t[i] = e[i]
                    }.bind(this)), t
                }, t.prototype.extendClone = function(t, e) {
                    return this.extend(this.extend({}, t), e)
                }, t.prototype.isMobile = function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                }, t
            }(), i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
        }.call(this), this.ScrollReveal;
    });
//# sourceMappingURL=./script.js.map