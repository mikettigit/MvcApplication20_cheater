function NormalizePosition(a) {
    var b = $("." + a).height(), c = $(window).height(), d = (c - b / 2) / 2, e = (c + b) / 2;
    $("." + a).css("top", b < 150 ? e : d + "px");
}

function MenuExpander(a) {
    var b = $(".social-list").find("a");
    b.each(function() {
        a == $(this).attr("id") && ($(this).closest(".sub-menu").css("display", "block"), 
        $(this).closest("li").css("border-left", "2px solid #d2dfee"));
    });
}

function AppendToQS(a, b) {
    a.preventDefault();
    a.stopPropagation();
    var c = "http://" + b + $(".create-btn").attr("href"), d = "";
    $("input:visible").each(function() {
        d += "&" + $(this).attr("id") + "=" + $(this).val();
    });
    d += "&Summ=" + $("#total-summ").text().replace(/ /g, "");
    d += "&SocialNWName=" + $(".page-name").text().replace(/ /g, "");
    d += "&OrderName=" + $(".order-type").text();
    $("#Email").closest("form").submit();
}

function CopyEmailToLogin() {
    $("#UserName").val($("#Email").val());
}

if (!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length, c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Hb.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a);
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c;
        });
    }
    function e(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    function f(a) {
        var b = lb[a] = {};
        return _.each(a.match(kb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1);
        a.removeEventListener("load", g, !1);
        _.ready();
    }
    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        });
        this.expando = _.expando + h.uid++;
    }
    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Lb, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Kb.test(c) ? _.parseJSON(c) : c;
            } catch (e) {}
            Jb.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function j() {
        return !0;
    }
    function k() {
        return !1;
    }
    function l() {
        try {
            return Z.activeElement;
        } catch (a) {}
    }
    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function o(a) {
        var b = $b.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) Ib.set(a[c], "globalEval", !b || Ib.get(b[c], "globalEval"));
    }
    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Ib.hasData(a) && (f = Ib.access(a), g = Ib.set(b, f), j = f.events)) {
                delete g.handle;
                g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c]);
            }
            Jb.hasData(a) && (h = Jb.access(a), i = _.extend({}, h), Jb.set(b, i));
        }
    }
    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([ a ], c) : c;
    }
    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Pb.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f;
    }
    function u(a) {
        var b = Z, c = qb[a];
        return c || (c = t(a, b), "none" !== c && c || (pb = (pb || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = pb[0].contentDocument, b.write(), b.close(), c = t(a, b), pb.detach()), qb[a] = c), 
        c;
    }
    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || dc(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), 
        cc.test(g) && bc.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = jc.length; e--; ) if (b = jc[e] + c, 
        b in a) return b;
        return d;
    }
    function y(a, b, c) {
        var d = fc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + Nb[f], !0, e)), 
        d ? ("content" === c && (g -= _.css(a, "padding" + Nb[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + Nb[f] + "Width", !0, e))) : (g += _.css(a, "padding" + Nb[f], !0, e), 
        "padding" !== c && (g += _.css(a, "border" + Nb[f] + "Width", !0, e)));
        return g;
    }
    function A(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = dc(a), g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), cc.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0;
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = Ib.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ob(d) && (f[g] = Ib.access(d, "olddisplay", u(d.nodeName)))) : (e = Ob(d), 
        "none" === c && e || Ib.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e);
    }
    function D() {
        return setTimeout(function() {
            kc = void 0;
        }), kc = _.now();
    }
    function E(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Nb[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function F(a, b, c) {
        for (var d, e = (qc[b] || []).concat(qc["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ob(a), p = Ib.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--;
                _.queue(a, "fx").length || h.empty.fire();
            });
        }));
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ n.overflow, n.overflowX, n.overflowY ], 
        j = _.css(a, "display"), k = "none" === j ? Ib.get(a, "olddisplay") || u(a.nodeName) : j, 
        "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block"));
        c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0];
            n.overflowX = c.overflow[1];
            n.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], mc.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0;
            }
            m[d] = p && p[d] || _.style(a, d);
        } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = Ib.access(a, "fxshow", {});
            f && (p.hidden = !o);
            o ? _(a).show() : l.done(function() {
                _(a).hide();
            });
            l.done(function() {
                var b;
                Ib.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b]);
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function H(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
            f = g.expand(f);
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function I(a, b, c) {
        var d, e, f = 0, g = pc.length, h = _.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = kc || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: _.extend({}, b),
            opts: _.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: kc || D(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++) if (d = pc[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(kb) || [];
            if (_.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                e(j), !1);
            }), i;
        }
        var f = {}, g = a === yc;
        return e(b.dataTypes[0]) || !f["*"] && e("*");
    }
    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a;
    }
    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        if (f) return f !== i[0] && i.unshift(f), c[f];
    }
    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a.throws) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || Dc.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) O(a + "[" + e + "]", b[e], c, d);
    }
    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var Q = [], R = Q.slice, S = Q.concat, T = Q.push, U = Q.indexOf, V = {}, W = V.toString, X = V.hasOwnProperty, Y = {}, Z = a.document, $ = "2.1.4", _ = function(a, b) {
        return new _.fn.init(a, b);
    }, ab = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bb = /^-ms-/, cb = /-([\da-z])/gi, db = function(a, b) {
        return b.toUpperCase();
    }, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb;
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this);
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return _.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    };
    _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, 
        f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    };
    _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a);
            a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, 
            Z.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(bb, "ms-").replace(cb, db);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) {
                    for (;g > f; f++) if (e = b.apply(a[f], d), e === !1) break;
                } else for (f in a) if (e = b.apply(a[f], d), e === !1) break;
            } else if (h) {
                for (;g > f; f++) if (e = b.call(a[f], f, a[f]), e === !1) break;
            } else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ab, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [ a ] : a) : T.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), 
            null != e && i.push(e);
            return S.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)));
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0;
        },
        now: Date.now,
        support: Y
    });
    _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
    });
    eb = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, 
            "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sb.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ub, "\\$&") : b.setAttribute("id", n), 
                        n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        o = tb.test(a) && k(b.parentNode) || b;
                        p = j.join(",");
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        l || b.removeAttribute("id");
                    }
                }
            }
            return B(a.replace(ib, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d;
            }
            var b = [];
            return a;
        }
        function d(a) {
            return a[N] = !0, a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b);
                b = null;
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ P, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [ h ] : h, []), s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--; ) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i);
                        }
                        for (k = t.length; k--; ) (l = t[k]) && (j = f ? ab(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b;
            }, g, !0), j = n(function(a) {
                return ab(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e;
            } ]; e > h; h++) if (c = w.relative[a[h].type]) k = [ n(o(k), c) ]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d; d++) if (w.relative[a[d].type]) break;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ib, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a));
                }
                k.push(c);
            }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function(d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j), u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++]; ) if (m(k, g, h)) {
                            i.push(k);
                            break;
                        }
                        j && (P = u);
                    }
                    e && ((k = !m && k) && n--, d && p.push(k));
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++]; ) m(p, r, g, h);
                    if (d) {
                        if (n > 0) while (o--) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r);
                    }
                    $.apply(i, r);
                    j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                }
                return j && (P = u, C = s), p;
            };
            return e ? d(g) : g;
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date(), O = a.document, P = 0, Q = 0, R = c(), S = c(), T = c(), U = function(a, b) {
            return a === b && (E = !0), 0;
        }, V = -2147483648, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice, ab = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, bb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cb = "[\\x20\\t\\r\\n\\f]", db = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", eb = db.replace("w", "w#"), fb = "\\[" + cb + "*(" + db + ")(?:" + cb + "*([*^$|!~]?=)" + cb + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + eb + "))|)" + cb + "*\\]", gb = ":(" + db + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fb + ")*)|.*)\\)|)", hb = new RegExp(cb + "+", "g"), ib = new RegExp("^" + cb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cb + "+$", "g"), jb = new RegExp("^" + cb + "*," + cb + "*"), kb = new RegExp("^" + cb + "*([>+~]|" + cb + ")" + cb + "*"), lb = new RegExp("=" + cb + "*([^\\]'\"]*?)" + cb + "*\\]", "g"), mb = new RegExp(gb), nb = new RegExp("^" + eb + "$"), ob = {
            ID: new RegExp("^#(" + db + ")"),
            CLASS: new RegExp("^\\.(" + db + ")"),
            TAG: new RegExp("^(" + db.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + fb),
            PSEUDO: new RegExp("^" + gb),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cb + "*(even|odd|(([+-]|)(\\d*)n|)" + cb + "*(?:([+-]|)" + cb + "*(\\d+)|))" + cb + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + bb + ")$", "i"),
            needsContext: new RegExp("^" + cb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cb + "*((?:-\\d)?\\d*)" + cb + "*\\)|)(?=[^-]|$)", "i")
        }, pb = /^(?:input|select|textarea|button)$/i, qb = /^h\d$/i, rb = /^[^{]+\{\s*\[native \w/, sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tb = /[+~]/, ub = /'|\\/g, vb = new RegExp("\\\\([\\da-f]{1,6}" + cb + "?|(" + cb + ")|.)", "ig"), wb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, xb = function() {
            F();
        };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes);
            X[O.childNodes.length].nodeType;
        } catch (yb) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        v = b.support = {};
        y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        };
        F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, 
            c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xb, !1) : c.attachEvent && c.attachEvent("onunload", xb)), 
            I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
            }), v.getElementsByClassName = rb.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length;
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(vb, wb);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                if (I) return b.getElementsByClassName(a);
            }, K = [], J = [], (v.qsa = rb.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + cb + "*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || J.push("\\[" + cb + "*(?:value|" + bb + ")");
                a.querySelectorAll("[id~=" + N + "-]").length || J.push("~=");
                a.querySelectorAll(":checked").length || J.push(":checked");
                a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && J.push("name" + cb + "*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                J.push(",.*:");
            })), (v.matchesSelector = rb.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div");
                L.call(a, "[s!='']:x");
                K.push("!=", gb);
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), 
            b = rb.test(H.compareDocumentPosition), M = b || rb.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? ab(D, a) - ab(D, b) : 0 : 4 & c ? -1 : 1);
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [ a ], j = [ b ];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? ab(D, a) - ab(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode; ) i.unshift(c);
                for (c = b; c = c.parentNode; ) j.unshift(c);
                while (i[e] === j[e]) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, d) : G;
        };
        b.matches = function(a, c) {
            return b(a, null, null, c);
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(lb, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return b(c, G, null, [ a ]).length > 0;
        };
        b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()], d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        };
        b.error = function(a) {
            //throw new Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                while (b = a[e++]) b === a[e] && (d = c.push(e));
                while (d--) a.splice(c[d], 1);
            }
            return D = null, a;
        };
        x = b.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else while (b = a[d++]) c += x(b);
            return c;
        };
        w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(vb, wb), a[3] = (a[3] || a[4] || a[5] || "").replace(vb, wb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return ob.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && mb.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(vb, wb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + cb + ")" + a + "(" + cb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(hb, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d == 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [ a, a, "", c ], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--; ) d = ab(a, e[g]), a[d] = !(b[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, e);
                    }) : f;
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [], c = [], e = A(a.replace(ib, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0;
                    };
                }),
                contains: d(function(a) {
                    return a = a.replace(vb, wb), function(b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                    };
                }),
                lang: d(function(a) {
                    return nb.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(vb, wb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !w.pseudos.empty(a);
                },
                header: function(a) {
                    return qb.test(a.nodeName);
                },
                input: function(a) {
                    return pb.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: j(function() {
                    return [ 0 ];
                }),
                last: j(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: j(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        };
        w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l(), z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h; ) {
                (!d || (e = jb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = []));
                d = !1;
                (e = kb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ib, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) (e = ob[g].exec(h)) && (!j[g] || (e = j[g](e))) && (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
        }, A = b.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d));
                f.selector = a;
            }
            return f;
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(vb, wb), b) || [])[0], !b) return c;
                    j && (b = b.parentNode);
                    a = a.slice(f.shift().value.length);
                }
                for (e = ob.needsContext.test(a) ? 0 : f.length; e--; ) {
                    if (g = f[e], w.relative[h = g.type]) break;
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(vb, wb), tb.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break;
                    }
                }
            }
            return (j || A(a, l))(d, b, !I, c, tb.test(a) && k(b.parentNode) || b), c;
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, 
        F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }), e(function(a) {
            return null == a.getAttribute("disabled");
        }) || f(bb, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), b;
    }(a);
    _.find = eb;
    _.expr = eb.selectors;
    _.expr[":"] = _.expr.pseudos;
    _.unique = eb.uniqueSort;
    _.text = eb.getText;
    _.isXMLDoc = eb.isXML;
    _.contains = eb.contains;
    var Fb = _.expr.match.needsContext, Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Hb = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [ d ] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    };
    _.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++) if (_.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0));
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && Fb.test(a) ? _(a) : a || [], !1).length;
        }
    });
    gb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    hb = _.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : gb.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || fb).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), 
                Gb.test(c[1]) && _.isPlainObject(b)) for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = Z, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof fb.ready ? fb.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), _.makeArray(a, this));
    };
    hb.prototype = _.fn;
    fb = _(Z);
    ib = /^(?:parents|prev(?:Until|All))/;
    jb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
                if (e && _(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    _.fn.extend({
        has: function(a) {
            var b = _(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (_.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Fb.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? _.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return _.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c);
        },
        next: function(a) {
            return e(a, "nextSibling");
        },
        prev: function(a) {
            return e(a, "previousSibling");
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return _.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes);
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), 
            this.length > 1 && (jb[a] || _.unique(e), ib.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    kb = /\S+/g;
    lb = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? lb[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function(f) {
            for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++) if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1;
            i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable());
        }, l = {
            add: function() {
                if (i) {
                    var c = i.length;
                    !function f(b) {
                        _.each(b, function(b, c) {
                            var d = _.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments);
                    d ? g = i.length : b && (e = c, k(b));
                }
                return this;
            },
            remove: function() {
                return i && _.each(arguments, function(a, b) {
                    for (var c; (c = _.inArray(b, i, c)) > -1; ) i.splice(c, 1), d && (g >= c && g--, 
                    h >= c && h--);
                }), this;
            },
            has: function(a) {
                return a ? _.inArray(a, i) > -1 : !(!i || !i.length);
            },
            empty: function() {
                return i = [], g = 0, this;
            },
            disable: function() {
                return i = j = b = void 0, this;
            },
            disabled: function() {
                return !i;
            },
            lock: function() {
                return j = void 0, b || l.disable(), this;
            },
            locked: function() {
                return !j;
            },
            fireWith: function(a, b) {
                return !i || c && !j || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? j.push(b) : k(b)), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return l;
    };
    _.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", _.Callbacks("once memory"), "resolved" ], [ "reject", "fail", _.Callbacks("once memory"), "rejected" ], [ "notify", "progress", _.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return _.Deferred(function(c) {
                        _.each(b, function(b, f) {
                            var g = _.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        });
                        a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? _.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add;
                h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock);
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                };
                e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = R.call(arguments), d = c.length, e = 1 !== d || a && _.isFunction(a.promise) ? d : 0, f = 1 === e ? a : _.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = arguments.length > 1 ? R.call(arguments) : d;
                    c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c);
                };
            }, h, i, j;
            if (d > 1) for (h = new Array(d), i = new Array(d), j = new Array(d); d > b; b++) c[b] && _.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e;
            return e || f.resolveWith(j, c), f.promise();
        }
    });
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this;
    };
    _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (mb.resolveWith(Z, [ _ ]), 
            _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))));
        }
    });
    _.ready.promise = function(b) {
        return mb || (mb = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), 
        a.addEventListener("load", g, !1))), mb.promise(b);
    };
    _.ready.promise();
    nb = _.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(_(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    h.uid = 1;
    h.accepts = _.acceptData;
    h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    };
                    Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c;
                    _.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (_.isEmptyObject(f)) _.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else for ((_.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), 
            b in g ? d = [ b, e ] : (d = e, d = d in g ? [ d ] : d.match(kb) || [])), c = d.length); c--; ) delete g[d[c]];
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var Ib = new h(), Jb = new h(), Kb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Lb = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return Jb.hasData(a) || Ib.hasData(a);
        },
        data: function(a, b, c) {
            return Jb.access(a, b, c);
        },
        removeData: function(a, b) {
            Jb.remove(a, b);
        },
        _data: function(a, b, c) {
            return Ib.access(a, b, c);
        },
        _removeData: function(a, b) {
            Ib.remove(a, b);
        }
    });
    _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Jb.get(f), 1 === f.nodeType && !Ib.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), 
                    i(f, d, e[d])));
                    Ib.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                Jb.set(this, a);
            }) : nb(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if ((c = Jb.get(f, a), void 0 !== c) || (c = Jb.get(f, d), void 0 !== c) || (c = i(f, d, void 0), 
                    void 0 !== c)) return c;
                } else this.each(function() {
                    var c = Jb.get(this, d);
                    Jb.set(this, d, b);
                    -1 !== a.indexOf("-") && void 0 !== c && Jb.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                Jb.remove(this, a);
            });
        }
    });
    _.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = Ib.get(a, b), c && (!d || _.isArray(c) ? d = Ib.access(a, b, _.makeArray(c)) : d.push(c)), 
            d || [];
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b), g = function() {
                _.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f));
            !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return Ib.get(a, c) || Ib.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    Ib.remove(a, [ b + "queue", c ]);
                })
            });
        }
    });
    _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = _.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = Ib.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Mb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Nb = [ "Top", "Right", "Bottom", "Left" ], Ob = function(a, b) {
        return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a);
    }, Pb = /^(?:checkbox|radio)$/i;
    !function() {
        var a = Z.createDocumentFragment(), b = a.appendChild(Z.createElement("div")), c = Z.createElement("input");
        c.setAttribute("type", "radio");
        c.setAttribute("checked", "checked");
        c.setAttribute("name", "t");
        b.appendChild(c);
        Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.innerHTML = "<textarea>x</textarea>";
        Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    ob = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Qb = /^key/, Rb = /^(?:mouse|pointer|contextmenu)|click/, Sb = /^(?:focusinfocus|focusoutblur)$/, Tb = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ib.get(a);
            if (q) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), 
            (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                if (typeof _ !== ob && _.event.triggered !== b.type) return _.event.dispatch.apply(a, arguments);
            }), b = (b || "").match(kb) || [ "" ], j = b.length; j--; ) h = Tb.exec(b[j]) || [], 
            n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, 
            n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                type: n,
                origType: p,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && _.expr.match.needsContext.test(e),
                namespace: o.join(".")
            }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            _.event.global[n] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ib.hasData(a) && Ib.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(kb) || [ "" ], j = b.length; j--; ) if (h = Tb.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), 
                    delete i[n]);
                } else for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, Ib.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [ d || Z ], n = X.call(b, "type") ? b.type : b, o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Sb.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), 
            n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : _.makeArray(c, [ b ]), 
            l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Sb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), 
                    h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a);
                }
                for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); ) b.type = f > 1 ? i : l.bindType || n, 
                k = (Ib.get(g, "events") || {})[b.type] && Ib.get(g, "handle"), k && k.apply(g, c), 
                k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], 
                h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [], h = R.call(arguments), i = (Ib.get(this, "events") || {})[a.type] || [], j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = e.elem, 
                c = 0; (f = e.handlers[c++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, 
                a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Rb.test(e) ? this.mouseHooks : Qb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== l() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === l() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && _.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e);
            e.isDefaultPrevented() && c.preventDefault();
        }
    };
    _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    };
    _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, 
        b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void (this[_.expando] = !0)) : new _.Event(a, b);
    };
    _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j;
            a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j;
            a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    });
    Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0);
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = Ib.access(d, b);
                e || d.addEventListener(a, c, !0);
                Ib.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = Ib.access(d, b) - 1;
                e ? Ib.access(d, b, e) : (d.removeEventListener(a, c, !0), Ib.remove(d, b));
            }
        };
    });
    _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), 
            this.each(function() {
                _.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return _.event.trigger(a, b, c, !0);
        }
    });
    var Ub = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Vb = /<([\w:]+)/, Wb = /<|&#?\w+;/, Xb = /<(?:script|style|link)/i, Yb = /checked\s*(?:[^=]|=\s*.checked.)/i, Zb = /^$|\/(?:java|ecma)script/i, $b = /^true\/(.*)/, _b = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ac = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ac.optgroup = ac.option;
    ac.tbody = ac.tfoot = ac.colgroup = ac.caption = ac.thead;
    ac.th = ac.td;
    _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (g = r(h), 
            f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b) if (c) for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]); else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === _.type(e)) _.merge(l, e.nodeType ? [ e ] : e); else if (Wb.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Vb.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ac[g] || ac._default, f.innerHTML = h[1] + e.replace(Ub, "<$1></$2>") + h[2], 
                j = h[0]; j--; ) f = f.lastChild;
                _.merge(l, f.childNodes);
                f = k.firstChild;
                f.textContent = "";
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++]; ) if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), 
            f = r(k.appendChild(e), "script"), i && p(f), c)) for (j = 0; e = f[j++]; ) Zb.test(e.type || "") && c.push(e);
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[Ib.expando], e && (b = Ib.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    Ib.cache[e] && delete Ib.cache[e];
                }
                delete Jb.cache[c[Jb.expando]];
            }
        }
    });
    _.fn.extend({
        text: function(a) {
            return nb(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), 
            c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b);
            });
        },
        html: function(a) {
            return nb(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Xb.test(a) && !ac[(Vb.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(Ub, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode;
                _.cleanData(r(this));
                a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Yb.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html()));
                d.domManip(a, b);
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), 
                f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f) for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], 
                Zb.test(g.type || "") && !Ib.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(_b, "")));
            }
            return this;
        }
    });
    _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), 
            _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    qb = {};
    var bc = /^margin/, cc = new RegExp("^(" + Mb + ")(?!px)[a-z%]+$", "i"), dc = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    !function() {
        var b, c, d = Z.documentElement, e = Z.createElement("div"), f = Z.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box";
            f.cloneNode(!0).style.backgroundClip = "";
            Y.clearCloneStyle = "content-box" === f.style.backgroundClip;
            e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                f.innerHTML = "";
                d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top;
                c = "4px" === g.width;
                d.removeChild(e);
            }
            a.getComputedStyle && _.extend(Y, {
                pixelPosition: function() {
                    return g(), b;
                },
                boxSizingReliable: function() {
                    return null == c && g(), c;
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(Z.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                    b;
                }
            });
        }
    }();
    _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var ec = /^(none|table(?!-c[ea]).+)/, fc = new RegExp("^(" + Mb + ")(.*)$", "i"), gc = new RegExp("^([+-])=(" + Mb + ")", "i"), hc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ic = {
        letterSpacing: "0",
        fontWeight: "400"
    }, jc = [ "Webkit", "O", "Moz", "ms" ];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b), i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = gc.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), 
                f = "number"), 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in ic && (e = ic[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e;
        }
    });
    _.each([ "height", "width" ], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return ec.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, hc, function() {
                    return A(a, b, d);
                }) : A(a, b, d);
            },
            set: function(a, c, d) {
                var e = d && dc(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    });
    _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        if (b) return _.swap(a, {
            display: "inline-block"
        }, v, [ a, "marginRight" ]);
    });
    _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + Nb[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        };
        bc.test(a) || (_.cssHooks[a + b].set = y);
    });
    _.fn.extend({
        css: function(a, b) {
            return nb(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = dc(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return B(this, !0);
        },
        hide: function() {
            return B(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ob(this) ? _(this).show() : _(this).hide();
            });
        }
    });
    _.Tween = C;
    C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (_.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = this.options.duration ? b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : C.propHooks._default.set(this), this;
        }
    };
    C.prototype.init.prototype = C.prototype;
    C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    };
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    };
    _.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    };
    _.fx = C.prototype.init;
    _.fx.step = {};
    var kc, lc, mc = /^(?:toggle|show|hide)$/, nc = new RegExp("^(?:([+-])=|)(" + Mb + ")([a-z%]*)$", "i"), oc = /queueHooks$/, pc = [ G ], qc = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = nc.exec(b), f = e && e[3] || (_.cssNumber[a] ? "" : "px"), g = (_.cssNumber[a] || "px" !== f && +d) && nc.exec(_.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3];
                e = e || [];
                g = +d || 1;
                do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qc[c] = qc[c] || [], qc[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? pc.unshift(a) : pc.push(a);
        }
    });
    _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this);
            d.queue && _.dequeue(this, d.queue);
        }, d;
    };
    _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ob).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function() {
                var b = I(this, _.extend({}, a), f);
                (e || Ib.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = _.timers, g = Ib.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && oc.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = Ib.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = _.timers, g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    });
    _.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e);
        };
    });
    _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    });
    _.timers = [];
    _.fx.tick = function() {
        var a, b = 0, c = _.timers;
        for (kc = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop();
        kc = void 0;
    };
    _.fx.timer = function(a) {
        _.timers.push(a);
        a() ? _.fx.start() : _.timers.pop();
    };
    _.fx.interval = 13;
    _.fx.start = function() {
        lc || (lc = setInterval(_.fx.tick, _.fx.interval));
    };
    _.fx.stop = function() {
        clearInterval(lc);
        lc = null;
    };
    _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = Z.createElement("input"), b = Z.createElement("select"), c = b.appendChild(Z.createElement("option"));
        a.type = "checkbox";
        Y.checkOn = "" !== a.value;
        Y.optSelected = c.selected;
        b.disabled = !0;
        Y.optDisabled = !c.disabled;
        a = Z.createElement("input");
        a.value = "t";
        a.type = "radio";
        Y.radioValue = "t" === a.value;
    }();
    tb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return nb(this, _.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a);
            });
        }
    });
    _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === ob ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? sb : rb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void _.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(kb);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    });
    sb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    };
    _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = tb[b] || _.find.attr;
        tb[b] = function(a, b, d) {
            var e, f;
            return d || (f = tb[b], tb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            tb[b] = f), e;
        };
    });
    ub = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return nb(this, _.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a];
            });
        }
    });
    _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, 
            e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || ub.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    });
    Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    });
    _.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        _.propFix[this.toLowerCase()] = this;
    });
    vb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(kb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = _.trim(d);
                c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(kb) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
                for (f = 0; e = b[f++]; ) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? _.trim(d) : "";
                c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) for (var b, d = 0, e = _(this), f = a.match(kb) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === ob || "boolean" === c) && (this.className && Ib.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : Ib.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    wb = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(wb, "") : null == c ? "" : c)) : void 0;
        }
    });
    _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                        if (b = _(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    });
    _.each([ "radio", "checkbox" ], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                if (_.isArray(b)) return a.checked = _.inArray(_(a).val(), b) >= 0;
            }
        };
        Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    });
    _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    xb = _.now();
    yb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "");
    };
    _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser();
            b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), 
        b;
    };
    var rc = /#.*$/, sc = /([?&])_=[^&]*/, tc = /^(.*?):[ \t]*([^\r\n]*)$/gm, uc = /^(?:GET|HEAD)$/, vc = /^\/\//, wc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, xc = {}, yc = {}, zc = "*/".concat("*"), Ac = a.location.href, Bc = wc.exec(Ac.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Bc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a);
        },
        ajaxPrefilter: J(xc),
        ajaxTransport: J(yc),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, 
                i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), 
                i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), 
                u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, 
                k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [ k, w, v ]) : o.rejectWith(m, [ v, w, r ]), 
                v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [ v, l, i ? k : r ]), 
                p.fireWith(m, [ v, w ]), j && (n.trigger("ajaxComplete", [ v, l ]), --_.active || _.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b), m = l.context || l, n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event, o = _.Deferred(), p = _.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!g) for (g = {}; b = tc.exec(f); ) g[b[1].toLowerCase()] = b[2];
                        b = g[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (l.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return d && d.abort(b), c(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ac) + "").replace(rc, "").replace(vc, Bc[1] + "//"), 
            l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(kb) || [ "" ], 
            null == l.crossDomain && (i = wc.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === Bc[1] && i[2] === Bc[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Bc[3] || ("http:" === Bc[1] ? "80" : "443")))), 
            l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), 
            K(xc, l, b, v), 2 === t) return v;
            j = _.event && l.global;
            j && 0 == _.active++ && _.event.trigger("ajaxStart");
            l.type = l.type.toUpperCase();
            l.hasContent = !uc.test(l.type);
            e = l.url;
            l.hasContent || (l.data && (e = l.url += (yb.test(e) ? "&" : "?") + l.data, delete l.data), 
            l.cache === !1 && (l.url = sc.test(e) ? e.replace(sc, "$1_=" + xb++) : e + (yb.test(e) ? "&" : "?") + "_=" + xb++));
            l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), 
            _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e]));
            (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType);
            v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + zc + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(yc, l, b, v)) {
                v.readyState = 1;
                j && n.trigger("ajaxSend", [ v, l ]);
                l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout");
                }, l.timeout));
                try {
                    t = 1;
                    d.send(r, c);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w);
                }
            } else c(-1, "No Transport");
            return v;
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script");
        }
    });
    _.each([ "get", "post" ], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    });
    _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    };
    _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b));
            } : function() {
                var b = _(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    };
    _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a);
    };
    var Cc = /%20/g, Dc = /\[\]$/, Ec = /\r?\n/g, Fc = /^(?:submit|button|image|reset|file)$/i, Gc = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = _.isFunction(b) ? b() : null == b ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(Cc, "+");
    };
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Gc.test(this.nodeName) && !Fc.test(a) && (this.checked || !Pb.test(a));
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Ec, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Ec, "\r\n")
                };
            }).get();
        }
    });
    _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Hc = 0, Ic = {}, Jc = {
        0: 200,
        1223: 204
    }, Kc = _.ajaxSettings.xhr();
    return a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Ic) Ic[a]();
    }), Y.cors = !!Kc && "withCredentials" in Kc, Y.ajax = Kc = !!Kc, _.ajaxTransport(function(a) {
        var b;
        if (Y.cors || Kc && !a.crossDomain) return {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Hc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Ic[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Jc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                };
                f.onload = b();
                f.onerror = b("error");
                b = Ic[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        };
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a;
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET");
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove();
                        c = null;
                        a && e("error" === a.type ? 404 : 200, a.type);
                    });
                    Z.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    }), zb = [], Ab = /(=)\?(?=&|$)|\?\?/, _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = zb.pop() || _.expando + "_" + xb++;
            return this[a] = !0, a;
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Ab.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ab.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Ab, "$1" + e) : b.jsonp !== !1 && (b.url += (yb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f;
            b[e] && (b.jsonpCallback = c.jsonpCallback, zb.push(e));
            g && _.isFunction(f) && f(g[0]);
            g = f = void 0;
        }), "script";
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1);
        b = b || Z;
        var d = Gb.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = _.buildFragment([ a ], b, e), e && e.length && _(e).remove(), 
        _.merge([], d.childNodes));
    }, Bb = _.fn.load, _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Bb) return Bb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, _.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem;
        }).length;
    }, Cb = a.document.documentElement, _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"), l = _(a), m = {};
            "static" === k && (a.style.position = "relative");
            h = l.offset();
            f = _.css(a, "top");
            i = _.css(a, "left");
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1;
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0);
            _.isFunction(b) && (b = b.call(a, c, h));
            null != b.top && (m.top = b.top - h.top + g);
            null != b.left && (m.left = b.left - h.left + e);
            "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== ob && (e = d.getBoundingClientRect()), 
            c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), 
                d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Cb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position"); ) a = a.offsetParent;
                return a || Cb;
            });
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return nb(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), _.each([ "top", "left" ], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            if (c) return c = v(a, b), cc.test(c) ? _(a).position()[b] + "px" : c;
        });
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return nb(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), _.fn.size = function() {
        return this.length;
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _;
    }), Db = a.jQuery, Eb = a.$, _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Eb), b && a.jQuery === _ && (a.jQuery = Db), _;
    }, typeof b === ob && (a.jQuery = a.$ = _), _;
}), !function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a(jQuery);
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), 
            a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target);
                a(b.target).hasClass("cancel") && (c.cancelSubmit = !0);
                void 0 !== a(b.target).attr("formnovalidate") && (c.cancelSubmit = !0);
            }), this.submit(function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), 
                    e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), 
                    void 0 !== e ? e : !1) : !0;
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, 
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), 
                !1);
            })), c);
        },
        valid: function() {
            var b, c;
            return a(this[0]).is("form") ? b = this.validate().form() : (b = !0, c = a(this[0].form).validate(), 
            this.each(function() {
                b = c.element(this) && b;
            })), b;
        },
        removeAttrs: function(b) {
            var c = {}, d = this;
            return a.each(b.split(/\s/), function(a, b) {
                c[b] = d.attr(b);
                d.removeAttr(b);
            }), c;
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), 
            b) {
              case "add":
                a.extend(f, a.validator.normalizeRule(c));
                delete f.messages;
                e[j.name] = f;
                c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                break;

              case "remove":
                return c ? (i = {}, a.each(c.split(/\s/), function(b, c) {
                    i[c] = f[c];
                    delete f[c];
                    "required" === c && a(j).removeAttr("aria-required");
                }), i) : (delete e[j.name], f);
            }
            return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), 
            g.required && (h = g.required, delete g.required, g = a.extend({
                required: h
            }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, 
            g = a.extend(g, {
                remote: h
            })), g;
        }
    });
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val());
        },
        filled: function(b) {
            return !!a.trim("" + a(b).val());
        },
        unchecked: function(b) {
            return !a(b).prop("checked");
        }
    });
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init();
    };
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), 
        c.constructor !== Array && (c = [ c ]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c;
            });
        }), b);
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), 
                this.hideThese(this.errorsFor(a)));
            },
            onfocusout: function(a) {
                !this.checkable(a) && (a.name in this.submitted || !this.optional(a)) && this.element(a);
            },
            onkeyup: function(a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a);
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode);
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d);
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d);
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
                }
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/));
                    a.each(c, function(a, c) {
                        d[c] = b;
                    });
                });
                c = this.settings.rules;
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d);
                });
                a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", b).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", b);
                this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), 
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [ this ]), this.showErrors(), 
                this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid();
            },
            element: function(b) {
                var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), 
                this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), 
                a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), 
                this.showErrors(), e;
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b);
                    });
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid");
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) c++;
                return c;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(a) {
                a.not(this.containers).text("");
                this.addWrapper(a).hide();
            },
            valid: function() {
                return 0 === this.size();
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name;
                }).length && b;
            },
            elements: function() {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), 
                    this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0);
                });
            },
            clean: function(b) {
                return a(b)[0];
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext);
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a);
            },
            elementValue: function(b) {
                var c, d = a(b), e = b.type;
                return "radio" === e || "checkbox" === e ? a("input[name='" + b.name + "']:checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), 
                "string" == typeof c ? c.replace(/\r/g, "") : c);
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b;
                }).length, h = !1, i = this.elementValue(b);
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue;
                        }
                        if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1;
                    } catch (j) {
                        //throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), 
                        //j;
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0;
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg");
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b]);
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                return void 0;
            },
            defaultMessage: function(b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>");
            },
            formatAndAdd: function(b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters));
                this.errorList.push({
                    message: d,
                    element: b,
                    method: c.method
                });
                this.errorMap[b.name] = d;
                this.submitted[b.name] = d;
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a;
            },
            defaultShowErrors: function() {
                for (var a, b, c = 0; this.errorList[c]; c++) b = this.errorList[c], this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass), 
                this.showLabel(b.element, b.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (c = 0; this.successList[c]; c++) this.showLabel(this.successList[c]);
                if (this.settings.unhighlight) for (c = 0, a = this.validElements(); a[c]; c++) this.settings.unhighlight.call(this, a[c], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(b, c) {
                var d, e, f, g = this.errorsFor(b), h = this.idOrName(b), i = a(b).attr("aria-describedby");
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), 
                g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), 
                d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), 
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), 
                g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), 
                i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), 
                e = this.groups[b.name], e && a.each(this.groups, function(b, c) {
                    c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"));
                })));
                !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b));
                this.toShow = this.toShow.add(g);
            },
            errorsFor: function(b) {
                var c = this.idOrName(b), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e);
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name);
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0];
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type);
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + b + "']");
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                  case "select":
                    return a("option:selected", c).length;

                  case "input":
                    if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length;
                }
                return b.length;
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0;
            },
            dependTypes: {
                "boolean": function(a) {
                    return a;
                },
                string: function(b, c) {
                    return !!a(b, c.form).length;
                },
                "function": function(a, b) {
                    return a(b);
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch";
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0);
            },
            stopRequest: function(b, c) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[b.name];
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), 
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [ this ]), 
                this.formSubmitted = !1);
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                });
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b);
        },
        classRules: function(b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]);
            }), c;
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), 
            d = !!d) : d = f.attr(c), /min|max/.test(c) && (null === g || /number|range|text/.test(g)) && (d = Number(d)), 
            d || 0 === d ? e[c] = d : g === c && "range" !== g && (e[c] = !0);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, 
            e;
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b);
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), 
            void 0 !== d && (e[c] = d);
            return e;
        },
        staticRules: function(b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), 
            c;
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                      case "string":
                        f = !!a(e.depends, c.form).length;
                        break;

                      case "function":
                        f = e.depends.call(c, c);
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d];
                }
            }), a.each(b, function(d, e) {
                b[d] = a.isFunction(e) ? e(c) : e;
            }), a.each([ "minlength", "maxlength" ], function() {
                b[this] && (b[this] = Number(b[this]));
            }), a.each([ "rangelength", "range" ], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [ Number(b[this][0]), Number(b[this][1]) ] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), 
                b[this] = [ Number(c[0]), Number(c[1]) ]));
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [ b.min, b.max ], 
            delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [ b.minlength, b.maxlength ], 
            delete b.minlength, delete b.maxlength)), b;
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0;
                });
                b = c;
            }
            return b;
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c;
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b];
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b));
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0;
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0;
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a);
            },
            url: function(a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString());
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a);
            },
            number: function(a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a);
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a);
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c, d, e = 0, f = 0, g = !1;
                if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), 
                e += f, g = !g;
                return e % 10 == 0;
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d;
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e;
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1];
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c;
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a;
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1];
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid();
                }), b === e.val();
            },
            remote: function(b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, f, g = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), 
                g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, 
                d = "string" == typeof d && {
                    url: d
                } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, 
                f[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: f,
                    context: e.currentForm,
                    success: function(d) {
                        var f, h, i, j = d === !0 || "true" === d;
                        e.settings.messages[c.name].remote = g.originalMessage;
                        j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), 
                        delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), 
                        f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f));
                        g.valid = j;
                        e.stopRequest(c, j);
                    }
                }, d)), "pending");
            }
        }
    });
    a.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d);
    }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments);
    });
    a.extend(a.fn, {
        validateDelegate: function(b, c, d) {
            return this.bind(c, function(c) {
                var e = a(c.target);
                if (e.is(b)) return d.apply(e, arguments);
            });
        }
    });
}), function(a) {
    function b(a, b, c) {
        a.rules[b] = c;
        a.message && (a.messages[b] = a.message);
    }
    function c(a) {
        return a.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }
    function d(a) {
        return a.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }
    function e(a) {
        return a.substr(0, a.lastIndexOf(".") + 1);
    }
    function f(a, b) {
        return 0 === a.indexOf("*.") && (a = a.replace("*.", b)), a;
    }
    function g(b, c) {
        var e = a(this).find("[data-valmsg-for='" + d(c[0].name) + "']"), f = e.attr("data-valmsg-replace"), g = f ? a.parseJSON(f) !== !1 : null;
        e.removeClass("field-validation-valid").addClass("field-validation-error");
        b.data("unobtrusiveContainer", e);
        g ? (e.empty(), b.removeClass("input-validation-error").appendTo(e)) : b.hide();
    }
    function h(b, c) {
        var d = a(this).find("[data-valmsg-summary=true]"), e = d.find("ul");
        e && e.length && c.errorList.length && (e.empty(), d.addClass("validation-summary-errors").removeClass("validation-summary-valid"), 
        a.each(c.errorList, function() {
            a("<li />").html(this.message).appendTo(e);
        }));
    }
    function i(b) {
        var c = b.data("unobtrusiveContainer"), d = c.attr("data-valmsg-replace"), e = d ? a.parseJSON(d) : null;
        c && (c.addClass("field-validation-valid").removeClass("field-validation-error"), 
        b.removeData("unobtrusiveContainer"), e && c.empty());
    }
    function j() {
        var b = a(this), c = "__jquery_unobtrusive_validation_form_reset";
        if (!b.data(c)) {
            b.data(c, !0);
            try {
                b.data("validator").resetForm();
            } finally {
                b.removeData(c);
            }
            b.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
            b.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer");
        }
    }
    function k(b) {
        var c = a(b), d = c.data(n), e = a.proxy(j, b), f = l.unobtrusive.options || {}, k = function(c, d) {
            var e = f[c];
            e && a.isFunction(e) && e.apply(b, d);
        };
        return d || (d = {
            options: {
                errorClass: f.errorClass || "input-validation-error",
                errorElement: f.errorElement || "span",
                errorPlacement: function() {
                    g.apply(b, arguments);
                    k("errorPlacement", arguments);
                },
                invalidHandler: function() {
                    h.apply(b, arguments);
                    k("invalidHandler", arguments);
                },
                messages: {},
                rules: {},
                success: function() {
                    i.apply(b, arguments);
                    k("success", arguments);
                }
            },
            attachValidation: function() {
                c.off("reset." + n, e).on("reset." + n, e).validate(this.options);
            },
            validate: function() {
                return c.validate(), c.valid();
            }
        }, c.data(n, d)), d;
    }
    var l = a.validator, m, n = "unobtrusiveValidation";
    l.unobtrusive = {
        adapters: [],
        parseElement: function(b, c) {
            var d = a(b), e = d.parents("form")[0], f, g, h;
            e && (f = k(e), f.options.rules[b.name] = g = {}, f.options.messages[b.name] = h = {}, 
            a.each(this.adapters, function() {
                var c = "data-val-" + this.name, f = d.attr(c), i = {};
                void 0 !== f && (c += "-", a.each(this.params, function() {
                    i[this] = d.attr(c + this);
                }), this.adapt({
                    element: b,
                    form: e,
                    message: f,
                    params: i,
                    rules: g,
                    messages: h
                }));
            }), a.extend(g, {
                __dummy__: !0
            }), c || f.attachValidation());
        },
        parse: function(b) {
            var c = a(b), d = c.parents().addBack().filter("form").add(c.find("form")).has("[data-val=true]");
            c.find("[data-val=true]").each(function() {
                l.unobtrusive.parseElement(this, !0);
            });
            d.each(function() {
                var a = k(this);
                a && a.attachValidation();
            });
        }
    };
    m = l.unobtrusive.adapters;
    m.add = function(a, b, c) {
        return c || (c = b, b = []), this.push({
            name: a,
            params: b,
            adapt: c
        }), this;
    };
    m.addBool = function(a, c) {
        return this.add(a, function(d) {
            b(d, c || a, !0);
        });
    };
    m.addMinMax = function(a, c, d, e, f, g) {
        return this.add(a, [ f || "min", g || "max" ], function(a) {
            var f = a.params.min, g = a.params.max;
            f && g ? b(a, e, [ f, g ]) : f ? b(a, c, f) : g && b(a, d, g);
        });
    };
    m.addSingleVal = function(a, c, d) {
        return this.add(a, [ c || "val" ], function(e) {
            b(e, d || a, e.params[c]);
        });
    };
    l.addMethod("__dummy__", function() {
        return !0;
    });
    l.addMethod("regex", function(a, b, c) {
        var d;
        return this.optional(b) ? !0 : (d = new RegExp(c).exec(a), d && 0 === d.index && d[0].length === a.length);
    });
    l.addMethod("nonalphamin", function(a, b, c) {
        var d;
        return c && (d = a.match(/\W/g), d = d && d.length >= c), d;
    });
    l.methods.extension ? (m.addSingleVal("accept", "mimtype"), m.addSingleVal("extension", "extension")) : m.addSingleVal("extension", "extension", "accept");
    m.addSingleVal("regex", "pattern");
    m.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    m.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    m.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    m.add("equalto", [ "other" ], function(c) {
        var g = e(c.element.name), h = c.params.other, i = f(h, g), j = a(c.form).find(":input").filter("[name='" + d(i) + "']")[0];
        b(c, "equalTo", j);
    });
    m.add("required", function(a) {
        ("INPUT" !== a.element.tagName.toUpperCase() || "CHECKBOX" !== a.element.type.toUpperCase()) && b(a, "required", !0);
    });
    m.add("remote", [ "url", "type", "additionalfields" ], function(g) {
        var h = {
            url: g.params.url,
            type: g.params.type || "GET",
            data: {}
        }, i = e(g.element.name);
        a.each(c(g.params.additionalfields || g.element.name), function(b, c) {
            var e = f(c, i);
            h.data[e] = function() {
                var b = a(g.form).find(":input").filter("[name='" + d(e) + "']");
                return b.is(":checkbox") ? b.filter(":checked").val() || b.filter(":hidden").val() || "" : b.is(":radio") ? b.filter(":checked").val() || "" : b.val();
            };
        });
        b(g, "remote", h);
    });
    m.add("password", [ "min", "nonalphamin", "regex" ], function(a) {
        a.params.min && b(a, "minlength", a.params.min);
        a.params.nonalphamin && b(a, "nonalphamin", a.params.nonalphamin);
        a.params.regex && b(a, "regex", a.params.regex);
    });
    a(function() {
        l.unobtrusive.parse(document);
    });
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery");

+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this, e;
        a(this).one(a.support.transition.end, function() {
            c = !0;
        });
        return e = function() {
            c || a(d).trigger(a.support.transition.end);
        }, setTimeout(e, b), this;
    };
    a(function() {
        a.support.transition = b();
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]', c = function(c) {
        a(c).on("click", b, this.close);
    }, d;
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove();
        }
        var d = a(this), e = d.attr("data-target"), f;
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        f = a(e);
        b && b.preventDefault();
        f.length || (f = d.hasClass("alert") ? d : d.parent());
        f.trigger(b = a.Event("close.bs.alert"));
        b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
    };
    d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this));
            "string" == typeof b && e[b].call(d);
        });
    };
    a.fn.alert.Constructor = c;
    a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this;
    };
    a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(jQuery);

+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c);
        this.options = a.extend({}, b.DEFAULTS, d);
    }, c;
    b.DEFAULTS = {
        loadingText: "loading..."
    };
    b.prototype.setState = function(a) {
        var b = "disabled", c = this.$element, d = c.is("input") ? "val" : "html", e = c.data();
        a += "Text";
        e.resetText || c.data("resetText", c[d]());
        c[d](e[a] || this.options[a]);
        setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b);
        }, 0);
    };
    b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons"]'), b = !0, c;
        a.length && (c = this.$element.find("input"), "radio" === c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? b = !1 : a.find(".active").removeClass("active")), 
        b && c.prop("checked", !this.$element.hasClass("active")).trigger("change"));
        b && this.$element.toggleClass("active");
    };
    c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f));
            "toggle" == c ? e.toggle() : c && e.setState(c);
        });
    };
    a.fn.button.Constructor = b;
    a.fn.button.noConflict = function() {
        return a.fn.button = c, this;
    };
    a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn"));
        c.button("toggle");
        b.preventDefault();
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = c;
        this.paused = this.sliding = this.interval = this.$active = this.$items = null;
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
    }, c;
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    };
    b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    };
    b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
        this.$items.index(this.$active);
    };
    b.prototype.to = function(b) {
        var c = this, d = this.getActiveIndex();
        if (!(b > this.$items.length - 1) && !(0 > b)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b);
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
    };
    b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    };
    b.prototype.next = function() {
        if (!this.sliding) return this.slide("next");
    };
    b.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev");
    };
    b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this, j;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]();
        }
        if (this.sliding = !0, f && this.pause(), j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        }), !e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
            this.$element.one("slid.bs.carousel", function() {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active");
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b);
                e[0].offsetWidth;
                d.addClass(g);
                e.addClass(g);
                d.one(a.support.transition.end, function() {
                    e.removeClass([ b, g ].join(" ")).addClass("active");
                    d.removeClass([ "active", g ].join(" "));
                    i.sliding = !1;
                    setTimeout(function() {
                        i.$element.trigger("slid.bs.carousel");
                    }, 0);
                }).emulateTransitionEnd(600);
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active");
                e.addClass("active");
                this.sliding = !1;
                this.$element.trigger("slid.bs.carousel");
            }
            return f && this.cycle(), this;
        }
    };
    c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f));
            "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    };
    a.fn.carousel.Constructor = b;
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this;
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1);
        e.carousel(f);
        (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g);
        b.preventDefault();
    });
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data());
        });
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c);
        this.options = a.extend({}, b.DEFAULTS, d);
        this.transitioning = null;
        this.options.parent && (this.$parent = a(this.options.parent));
        this.options.toggle && this.toggle();
    }, c;
    b.DEFAULTS = {
        toggle: !0
    };
    b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    };
    b.prototype.show = function() {
        var b, c, d, e, f, g;
        if (!this.transitioning && !this.$element.hasClass("in") && (b = a.Event("show.bs.collapse"), 
        this.$element.trigger(b), !b.isDefaultPrevented())) {
            if (c = this.$parent && this.$parent.find("> .panel > .in"), c && c.length) {
                if (d = c.data("bs.collapse"), d && d.transitioning) return;
                c.collapse("hide");
                d || c.data("bs.collapse", null);
            }
            if (e = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[e](0), 
            this.transitioning = 1, f = function() {
                this.$element.removeClass("collapsing").addClass("in")[e]("auto");
                this.transitioning = 0;
                this.$element.trigger("shown.bs.collapse");
            }, !a.support.transition) return f.call(this);
            g = a.camelCase([ "scroll", e ].join("-"));
            this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
        }
    };
    b.prototype.hide = function() {
        var b, c, d;
        if (!this.transitioning && this.$element.hasClass("in") && (b = a.Event("hide.bs.collapse"), 
        this.$element.trigger(b), !b.isDefaultPrevented())) return c = this.dimension(), 
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
        this.transitioning = 1, d = function() {
            this.transitioning = 0;
            this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        }, a.support.transition ? 0 : d.call(this);
    };
    b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f));
            "string" == typeof c && e[c]();
        });
    };
    a.fn.collapse.Constructor = b;
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this;
    };
    a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), 
        d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed"));
        f.collapse(h);
    });
}(jQuery);

+function(a) {
    "use strict";
    function b() {
        a(d).remove();
        a(e).each(function(b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"));
        });
    }
    function c(b) {
        var c = b.attr("data-target"), d;
        return c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")), 
        d = c && a(c), d && d.length ? d : b.parent();
    }
    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    }, g;
    f.prototype.toggle = function(d) {
        var e = a(this), f, g;
        if (!e.is(".disabled, :disabled")) {
            if (f = c(e), g = f.hasClass("open"), b(), !g) {
                if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), 
                f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown");
                e.focus();
            }
            return !1;
        }
    };
    f.prototype.keydown = function(b) {
        var d, f, g, h, i;
        if (/(38|40|27)/.test(b.keyCode) && (d = a(this), b.preventDefault(), b.stopPropagation(), 
        !d.is(".disabled, :disabled"))) {
            if (f = c(d), g = f.hasClass("open"), !g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), 
            d.click();
            h = a("[role=menu] li:not(.divider):visible a", f);
            h.length && (i = h.index(h.filter(":focus")), 38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, 
            ~i || (i = 0), h.eq(i).focus());
        }
    };
    g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this));
            "string" == typeof b && d[b].call(c);
        });
    };
    a.fn.dropdown.Constructor = f;
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this;
    };
    a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown);
}(jQuery);

+function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c;
        this.$element = a(b);
        this.$backdrop = this.isShown = null;
        this.options.remote && this.$element.load(this.options.remote);
    }, c;
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a);
    };
    b.prototype.show = function(b) {
        var c = this, d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d);
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade"), e;
            c.$element.parent().length || c.$element.appendTo(document.body);
            c.$element.show();
            d && c.$element[0].offsetWidth;
            c.$element.addClass("in").attr("aria-hidden", !1);
            c.enforceFocus();
            e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e);
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
        }));
    };
    b.prototype.hide = function(b) {
        b && b.preventDefault();
        b = a.Event("hide.bs.modal");
        this.$element.trigger(b);
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), 
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), 
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    };
    b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
        }, this));
    };
    b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    };
    b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide();
        this.backdrop(function() {
            a.removeBackdrop();
            a.$element.trigger("hidden.bs.modal");
        });
    };
    b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "", d;
        if (this.isShown && this.options.backdrop) {
            if (d = a.support.transition && c, this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), 
            this.$element.on("click.dismiss.modal", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
    };
    c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g));
            "string" == typeof c ? f[c](d) : g.show && f.show(d);
        });
    };
    a.fn.modal.Constructor = b;
    a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this;
    };
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        b.preventDefault();
        e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus();
        });
    });
    a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open");
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open");
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
        this.init("tooltip", a, b);
    }, c;
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    };
    b.prototype.init = function(b, c, d) {
        var e, f, g, h, i;
        for (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), 
        e = this.options.trigger.split(" "), f = e.length; f--; ) if (g = e[f], "click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else "manual" != g && (h = "hover" == g ? "mouseenter" : "focus", 
        i = "hover" == g ? "mouseleave" : "blur", this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
        this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    };
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    };
    b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    };
    b.prototype.getDelegateOptions = function() {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    };
    b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? 0 : c.show();
    };
    b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? 0 : c.hide();
    };
    b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type), c, d;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            c = this.tip();
            this.setContent();
            this.options.animation && c.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement, f = /\s?auto?\s?/i, g = f.test(e);
            g && (e = e.replace(f, "") || "top");
            c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e);
            this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var h = this.getPosition(), i = c[0].offsetWidth, j = c[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(), l = e, m = document.documentElement.scrollTop || document.body.scrollTop, n = "body" == this.options.container ? window.innerWidth : k.outerWidth(), o = "body" == this.options.container ? window.innerHeight : k.outerHeight(), p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e;
                c.removeClass(l).addClass(e);
            }
            d = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(d, e);
            this.$element.trigger("shown.bs." + this.type);
        }
    };
    b.prototype.applyPlacement = function(a, b) {
        var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10), i, j, k;
        isNaN(g) && (g = 0);
        isNaN(h) && (h = 0);
        a.top = a.top + g;
        a.left = a.left + h;
        d.offset(a).addClass("in");
        i = d[0].offsetWidth;
        j = d[0].offsetHeight;
        ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) ? (k = 0, 
        a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), 
        this.replaceArrow(k - e + i, i, "left")) : this.replaceArrow(j - f, j, "top");
        c && d.offset(a);
    };
    b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    };
    b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b);
        a.removeClass("fade in top bottom left right");
    };
    b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach();
        }
        var c = this, d = this.tip(), e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), 
        a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), 
        this.$element.trigger("hidden.bs." + this.type), this);
    };
    b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    };
    b.prototype.hasContent = function() {
        return this.getTitle();
    };
    b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset());
    };
    b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    };
    b.prototype.getTitle = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) : b.title);
    };
    b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template);
    };
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    };
    b.prototype.enable = function() {
        this.enabled = !0;
    };
    b.prototype.disable = function() {
        this.enabled = !1;
    };
    b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    };
    b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    };
    b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f));
            "string" == typeof c && e[c]();
        });
    };
    a.fn.tooltip.Constructor = b;
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this;
    };
}(jQuery);

+function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b);
    }, c;
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype);
    b.prototype.constructor = b;
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    };
    b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b);
        a.find(".popover-content")[this.options.html ? "html" : "text"](c);
        a.removeClass("fade top bottom left right in");
        a.find(".popover-title").html() || a.find(".popover-title").hide();
    };
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    };
    b.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    };
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };
    c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f));
            "string" == typeof c && e[c]();
        });
    };
    a.fn.popover.Constructor = b;
    a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this;
    };
}(jQuery);

+function(a) {
    "use strict";
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(c).is("body") ? a(window) : a(c);
        this.$body = a("body");
        this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f);
        this.options = a.extend({}, b.DEFAULTS, d);
        this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
        this.offsets = a([]);
        this.targets = a([]);
        this.activeTarget = null;
        this.refresh();
        this.process();
    }
    b.DEFAULTS = {
        offset: 10
    };
    b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position", c;
        this.offsets = a([]);
        this.targets = a([]);
        c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e);
            return f && f.length && [ [ f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            c.offsets.push(this[0]);
            c.targets.push(this[1]);
        });
    };
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    };
    b.prototype.activate = function(b) {
        this.activeTarget = b;
        a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active"));
        d.trigger("activate.bs.scrollspy");
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f));
            "string" == typeof c && e[c]();
        });
    };
    a.fn.scrollspy.Constructor = b;
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this;
    };
    a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data());
        });
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b);
    }, c;
    b.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target"), e, f, g;
        (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), b.parent("li").hasClass("active")) || (e = c.find(".active:last a")[0], 
        f = a.Event("show.bs.tab", {
            relatedTarget: e
        }), (b.trigger(f), f.isDefaultPrevented()) || (g = a(d), this.activate(b.parent("li"), c), 
        this.activate(g, g.parent(), function() {
            b.trigger({
                type: "shown.bs.tab",
                relatedTarget: e
            });
        })));
    };
    b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
            b.addClass("active");
            g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade");
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active");
            d && d();
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e();
        f.removeClass("in");
    };
    c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this));
            "string" == typeof c && e[c]();
        });
    };
    a.fn.tab.Constructor = b;
    a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this;
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault();
        a(this).tab("show");
    });
}(jQuery);

+function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d);
        this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this));
        this.$element = a(c);
        this.affixed = this.unpin = null;
        this.checkPosition();
    }, c;
    b.RESET = "affix affix-top affix-bottom";
    b.DEFAULTS = {
        offset: 0
    };
    b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    };
    b.prototype.checkPosition = function() {
        var c;
        if (this.$element.is(":visible")) {
            var d = a(document).height(), e = this.$window.scrollTop(), f = this.$element.offset(), g = this.options.offset, h = g.top, i = g.bottom;
            "object" != typeof g && (i = h = g);
            "function" == typeof h && (h = g.top());
            "function" == typeof i && (i = g.bottom());
            c = null != this.unpin && e + this.unpin <= f.top ? !1 : null != i && f.top + this.$element.height() >= d - i ? "bottom" : null != h && h >= e ? "top" : !1;
            this.affixed !== c && (this.unpin && this.$element.css("top", ""), this.affixed = c, 
            this.unpin = "bottom" == c ? f.top - e : null, this.$element.removeClass(b.RESET).addClass("affix" + (c ? "-" + c : "")), 
            "bottom" == c && this.$element.offset({
                top: document.body.offsetHeight - i - this.$element.height()
            }));
        }
    };
    c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f));
            "string" == typeof c && e[c]();
        });
    };
    a.fn.affix.Constructor = b;
    a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this;
    };
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this), c = b.data();
            c.offset = c.offset || {};
            c.offsetBottom && (c.offset.bottom = c.offsetBottom);
            c.offsetTop && (c.offset.top = c.offsetTop);
            b.affix(c);
        });
    });
}(jQuery);

!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : a("undefined" != typeof jQuery ? jQuery : window.Zepto);
}(function(a) {
    "use strict";
    function b(b) {
        var c = b.data;
        b.isDefaultPrevented() || (b.preventDefault(), a(b.target).ajaxSubmit(c));
    }
    function c(b) {
        var c = b.target, d = a(c), e, f, g;
        if (!d.is("[type=submit],[type=image]")) {
            if (e = d.closest("[type=submit]"), 0 === e.length) return;
            c = e[0];
        }
        f = this;
        (f.clk = c, "image" == c.type) && (void 0 !== b.offsetX ? (f.clk_x = b.offsetX, 
        f.clk_y = b.offsetY) : "function" == typeof a.fn.offset ? (g = d.offset(), f.clk_x = b.pageX - g.left, 
        f.clk_y = b.pageY - g.top) : (f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop));
        setTimeout(function() {
            f.clk = f.clk_x = f.clk_y = null;
        }, 100);
    }
    function d() {
        if (a.fn.ajaxSubmit.debug) {
            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b);
        }
    }
    var e = {}, f;
    e.fileapi = void 0 !== a("<input type='file'/>").get(0).files;
    e.formdata = void 0 !== window.FormData;
    f = !!a.fn.prop;
    a.fn.attr2 = function() {
        if (!f) return this.attr.apply(this, arguments);
        var a = this.prop.apply(this, arguments);
        return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments);
    };
    a.fn.ajaxSubmit = function(b) {
        function c(c) {
            for (var d, e = a.param(c, b.traditional).split("&"), f = e.length, g = [], h = 0; f > h; h++) e[h] = e[h].replace(/\+/g, " "), 
            d = e[h].split("="), g.push([ decodeURIComponent(d[0]), decodeURIComponent(d[1]) ]);
            return g;
        }
        function g(d) {
            for (var e, f, g, h = new FormData(), j = 0; j < d.length; j++) h.append(d[j].name, d[j].value);
            if (b.extraData) for (e = c(b.extraData), j = 0; j < e.length; j++) e[j] && h.append(e[j][0], e[j][1]);
            return b.data = null, f = a.extend(!0, {}, a.ajaxSettings, b, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: i || "POST"
            }), b.uploadProgress && (f.xhr = function() {
                var c = a.ajaxSettings.xhr();
                return c.upload && c.upload.addEventListener("progress", function(a) {
                    var c = 0, d = a.loaded || a.position, e = a.total;
                    a.lengthComputable && (c = Math.ceil(d / e * 100));
                    b.uploadProgress(a, d, e, c);
                }, !1), c;
            }), f.data = null, g = f.beforeSend, f.beforeSend = function(a, c) {
                c.data = b.formData ? b.formData : h;
                g && g.call(this, a, c);
            }, a.ajax(f);
        }
        function h(c) {
            function e(a) {
                var b = null;
                try {
                    a.contentWindow && (b = a.contentWindow.document);
                } catch (c) {
                    d("cannot get iframe.contentWindow document: " + c);
                }
                if (b) return b;
                try {
                    b = a.contentDocument ? a.contentDocument : a.document;
                } catch (c) {
                    d("cannot get iframe.contentDocument: " + c);
                    b = a.document;
                }
                return b;
            }
            function g() {
                function b() {
                    try {
                        var a = e(r).readyState;
                        d("state = " + a);
                        a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50);
                    } catch (c) {
                        d("Server abort: ", c, " (", c.name, ")");
                        h(A);
                        w && clearTimeout(w);
                        w = void 0;
                    }
                }
                var c = l.attr2("target"), f = l.attr2("action"), g = l.attr("enctype") || l.attr("encoding") || "multipart/form-data", j, k, n;
                x.setAttribute("target", o);
                (!i || /post/i.test(i)) && x.setAttribute("method", "POST");
                f != m.url && x.setAttribute("action", m.url);
                m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                });
                m.timeout && (w = setTimeout(function() {
                    v = !0;
                    h(z);
                }, m.timeout));
                j = [];
                try {
                    if (m.extraData) for (k in m.extraData) m.extraData.hasOwnProperty(k) && j.push(a.isPlainObject(m.extraData[k]) && m.extraData[k].hasOwnProperty("name") && m.extraData[k].hasOwnProperty("value") ? a('<input type="hidden" name="' + m.extraData[k].name + '">').val(m.extraData[k].value).appendTo(x)[0] : a('<input type="hidden" name="' + k + '">').val(m.extraData[k]).appendTo(x)[0]);
                    m.iframeTarget || q.appendTo("body");
                    r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1);
                    setTimeout(b, 15);
                    try {
                        x.submit();
                    } catch (p) {
                        n = document.createElement("form").submit;
                        n.apply(x);
                    }
                } finally {
                    x.setAttribute("action", f);
                    x.setAttribute("enctype", g);
                    c ? x.setAttribute("target", c) : l.removeAttr("target");
                    a(j).remove();
                }
            }
            function h(b) {
                var c, f, g, i, j, k, l, o, p;
                if (!s.aborted && !F) {
                    if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s) return s.abort("timeout"), 
                    void y.reject(s, "timeout");
                    if (b == A && s) return s.abort("server abort"), void y.reject(s, "error", "server abort");
                    if (E && E.location.href != m.iframeSrc || v) {
                        r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                        f = "success";
                        try {
                            if (v) throw "timeout";
                            if (g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E), d("isXml=" + g), 
                            !g && window.opera && (null === E.body || !E.body.innerHTML) && --G) return d("requeing onLoad callback, DOM not available"), 
                            void setTimeout(h, 250);
                            i = E.body ? E.body : E.documentElement;
                            s.responseText = i ? i.innerHTML : null;
                            s.responseXML = E.XMLDocument ? E.XMLDocument : E;
                            g && (m.dataType = "xml");
                            s.getResponseHeader = function(a) {
                                var b = {
                                    "content-type": m.dataType
                                };
                                return b[a.toLowerCase()];
                            };
                            i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
                            j = (m.dataType || "").toLowerCase();
                            k = /(json|script|text)/.test(j);
                            k || m.textarea ? (l = E.getElementsByTagName("textarea")[0], l ? (s.responseText = l.value, 
                            s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText) : k && (o = E.getElementsByTagName("pre")[0], 
                            p = E.getElementsByTagName("body")[0], o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText))) : "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                            try {
                                D = J(s, j, m);
                            } catch (t) {
                                f = "parsererror";
                                s.error = c = t || f;
                            }
                        } catch (t) {
                            d("error caught: ", t);
                            f = "error";
                            s.error = c = t || f;
                        }
                        s.aborted && (d("upload aborted"), f = null);
                        s.status && (f = s.status >= 200 && s.status < 300 || 304 === s.status ? "success" : "error");
                        "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), 
                        n && a.event.trigger("ajaxSuccess", [ s, m ])) : f && (void 0 === c && (c = s.statusText), 
                        m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [ s, m, c ]));
                        n && a.event.trigger("ajaxComplete", [ s, m ]);
                        n && !--a.active && a.event.trigger("ajaxStop");
                        m.complete && m.complete.call(m.context, s, f);
                        F = !0;
                        m.timeout && clearTimeout(w);
                        setTimeout(function() {
                            m.iframeTarget ? q.attr("src", m.iframeSrc) : q.remove();
                            s.responseXML = null;
                        }, 100);
                    }
                }
            }
            var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0], y = a.Deferred();
            if (y.abort = function(a) {
                s.abort(a);
            }, c) for (k = 0; k < p.length; k++) j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
            if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + new Date().getTime(), 
            m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), 
            q.css({
                position: "absolute",
                top: "-1000px",
                left: "-1000px"
            })), r = q[0], s = {
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(b) {
                    var c = "timeout" === b ? "timeout" : "aborted";
                    d("aborting upload... " + c);
                    this.aborted = 1;
                    try {
                        r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop");
                    } catch (e) {}
                    q.attr("src", m.iframeSrc);
                    s.error = c;
                    m.error && m.error.call(m.context, s, c, b);
                    n && a.event.trigger("ajaxError", [ s, m, c ]);
                    m.complete && m.complete.call(m.context, s, c);
                }
            }, n = m.global, n && 0 == a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [ s, m ]), 
            m.beforeSend && m.beforeSend.call(m.context, s, m) === !1) return m.global && a.active--, 
            y.reject(), y;
            if (s.aborted) return y.reject(), y;
            t = x.clk;
            t && (u = t.name, u && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, 
            "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y)));
            var z = 1, A = 2, B = a("meta[name=csrf-token]").attr("content"), C = a("meta[name=csrf-param]").attr("content");
            C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B);
            m.forceSync ? g() : setTimeout(g, 10);
            var D, E, F, G = 50, H = a.parseXML || function(a, b) {
                return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", 
                b.loadXML(a)) : b = new DOMParser().parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null;
            }, I = a.parseJSON || function(a) {
                return window.eval("(" + a + ")");
            }, J = function(b, c, d) {
                var e = b.getResponseHeader("content-type") || "", f = "xml" === c || !c && e.indexOf("xml") >= 0, g = f ? b.responseXML : b.responseText;
                return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), 
                d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), 
                g;
            };
            return y;
        }
        var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
        if (!this.length) return d("ajaxSubmit: skipping submit process - no element selected"), 
        this;
        if (l = this, "function" == typeof b ? b = {
            success: b
        } : void 0 === b && (b = {}), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), 
        k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", 
        k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {
            url: k,
            success: a.ajaxSettings.success,
            type: i || a.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, b), m = {}, this.trigger("form-pre-serialize", [ this, b, m ]), m.veto) return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), 
        this;
        if (b.beforeSerialize && b.beforeSerialize(this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSerialize callback"), 
        this;
        if (n = b.traditional, void 0 === n && (n = a.ajaxSettings.traditional), p = [], 
        q = this.formToArray(b.semantic, p), b.data && (b.extraData = b.data, o = a.param(b.data, n)), 
        b.beforeSubmit && b.beforeSubmit(q, this, b) === !1) return d("ajaxSubmit: submit aborted via beforeSubmit callback"), 
        this;
        if (this.trigger("form-submit-validate", [ q, this, b, m ]), m.veto) return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), 
        this;
        r = a.param(q, n);
        o && (r = r ? r + "&" + o : o);
        "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, 
        b.data = null) : b.data = r;
        s = [];
        (b.resetForm && s.push(function() {
            l.resetForm();
        }), b.clearForm && s.push(function() {
            l.clearForm(b.includeHidden);
        }), !b.dataType && b.target) ? (t = b.success || function() {}, s.push(function(c) {
            var d = b.replaceTarget ? "replaceWith" : "html";
            a(b.target)[d](c).each(t, arguments);
        })) : b.success && s.push(b.success);
        (b.success = function(a, c, d) {
            for (var e = b.context || this, f = 0, g = s.length; g > f; f++) s[f].apply(e, [ a, c, d || l, l ]);
        }, b.error) && (u = b.error, b.error = function(a, c, d) {
            var e = b.context || this;
            u.apply(e, [ a, c, d, l ]);
        });
        b.complete && (v = b.complete, b.complete = function(a, c) {
            var d = b.context || this;
            v.apply(d, [ a, c, l ]);
        });
        var z = a("input[type=file]:enabled", this).filter(function() {
            return "" !== a(this).val();
        }), A = z.length > 0, B = "multipart/form-data", C = l.attr("enctype") == B || l.attr("encoding") == B, D = e.fileapi && e.formdata;
        for (d("fileAPI :" + D), x = (A || C) && !D, b.iframe !== !1 && (b.iframe || x) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function() {
            w = h(q);
        }) : w = h(q) : w = (A || C) && D ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", w), 
        y = 0; y < p.length; y++) p[y] = null;
        return this.trigger("form-submit-notify", [ this, b ]), this;
    };
    a.fn.ajaxForm = function(e) {
        if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
            var f = {
                s: this.selector,
                c: this.context
            };
            return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function() {
                a(f.s, f.c).ajaxForm(e);
            }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), 
            this);
        }
        return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), 
        this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c);
    };
    a.fn.ajaxFormUnbind = function() {
        return this.unbind("submit.form-plugin click.form-plugin");
    };
    a.fn.formToArray = function(b, c) {
        var d = [], f, g, h, i, j, k, l, m, n, o;
        if (0 === this.length) return d;
        var p, q = this[0], r = this.attr("id"), s = b ? q.getElementsByTagName("*") : q.elements;
        if (s && !/MSIE [678]/.test(navigator.userAgent) && (s = a(s).get()), r && (p = a(':input[form="' + r + '"]').get(), 
        p.length && (s = (s || []).concat(p))), !s || !s.length) return d;
        for (f = 0, k = s.length; k > f; f++) if (j = s[f], h = j.name, h && !j.disabled) if (b && q.clk && "image" == j.type) q.clk == j && (d.push({
            name: h,
            value: a(j).val(),
            type: j.type
        }), d.push({
            name: h + ".x",
            value: q.clk_x
        }, {
            name: h + ".y",
            value: q.clk_y
        })); else if (i = a.fieldValue(j, !0), i && i.constructor == Array) for (c && c.push(j), 
        g = 0, l = i.length; l > g; g++) d.push({
            name: h,
            value: i[g]
        }); else if (e.fileapi && "file" == j.type) if (c && c.push(j), m = j.files, m.length) for (g = 0; g < m.length; g++) d.push({
            name: h,
            value: m[g],
            type: j.type
        }); else d.push({
            name: h,
            value: "",
            type: j.type
        }); else null !== i && "undefined" != typeof i && (c && c.push(j), d.push({
            name: h,
            value: i,
            type: j.type,
            required: j.required
        }));
        return !b && q.clk && (n = a(q.clk), o = n[0], h = o.name, h && !o.disabled && "image" == o.type && (d.push({
            name: h,
            value: n.val()
        }), d.push({
            name: h + ".x",
            value: q.clk_x
        }, {
            name: h + ".y",
            value: q.clk_y
        }))), d;
    };
    a.fn.formSerialize = function(b) {
        return a.param(this.formToArray(b));
    };
    a.fn.fieldSerialize = function(b) {
        var c = [];
        return this.each(function() {
            var d = this.name, e, f, g;
            if (d) if (e = a.fieldValue(this, b), e && e.constructor == Array) for (f = 0, g = e.length; g > f; f++) c.push({
                name: d,
                value: e[f]
            }); else null !== e && "undefined" != typeof e && c.push({
                name: this.name,
                value: e
            });
        }), a.param(c);
    };
    a.fn.fieldValue = function(b) {
        for (var c, d, e = [], f = 0, g = this.length; g > f; f++) c = this[f], d = a.fieldValue(c, b), 
        null !== d && "undefined" != typeof d && (d.constructor != Array || d.length) && (d.constructor == Array ? a.merge(e, d) : e.push(d));
        return e;
    };
    a.fieldValue = function(b, c) {
        var d = b.name, e = b.type, f = b.tagName.toLowerCase(), g, h, i;
        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex)) return null;
        if ("select" == f) {
            if (g = b.selectedIndex, 0 > g) return null;
            for (var j = [], k = b.options, l = "select-one" == e, m = l ? g + 1 : k.length, n = l ? g : 0; m > n; n++) if (h = k[n], 
            h.selected) {
                if (i = h.value, i || (i = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), 
                l) return i;
                j.push(i);
            }
            return j;
        }
        return a(b).val();
    };
    a.fn.clearForm = function(b) {
        return this.each(function() {
            a("input,select,textarea", this).clearFields(b);
        });
    };
    a.fn.clearFields = a.fn.clearInputs = function(b) {
        var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var d = this.type, e = this.tagName.toLowerCase();
            c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "");
        });
    };
    a.fn.resetForm = function() {
        return this.each(function() {
            "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset();
        });
    };
    a.fn.enable = function(a) {
        return void 0 === a && (a = !0), this.each(function() {
            this.disabled = !a;
        });
    };
    a.fn.selected = function(b) {
        return void 0 === b && (b = !0), this.each(function() {
            var c = this.type, d;
            "checkbox" == c || "radio" == c ? this.checked = b : "option" == this.tagName.toLowerCase() && (d = a(this).parent("select"), 
            b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b);
        });
    };
    a.fn.ajaxSubmit.debug = !1;
}), function(a) {
    "function" == typeof define && define.amd ? define([ "jquery" ], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery);
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a);
    }
    function c(a) {
        return h.raw ? a : decodeURIComponent(a);
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a));
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a;
        } catch (b) {}
    }
    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d;
    }
    var g = /\+/g, h = a.cookie = function(e, g, i) {
        var j, k, l, m, n, o;
        if (void 0 !== g && !a.isFunction(g)) return i = a.extend({}, h.defaults, i), "number" == typeof i.expires && (j = i.expires, 
        k = i.expires = new Date(), k.setTime(+k + 864e5 * j)), document.cookie = [ b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : "" ].join("");
        for (l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], 
        n = 0, o = m.length; n < o; n++) {
            var p = m[n].split("="), q = c(p.shift()), r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break;
            }
            e || void 0 === (r = f(r)) || (l[q] = r);
        }
        return l;
    };
    h.defaults = {};
    a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b));
    };
});

String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(a, b) {
        return b = b || 0, this.lastIndexOf(a, b) === b;
    }
});

$(document).ready(function() {
    $(".header-nav").on("click", "a", function(a) {
        var b = $(this).attr("href"), c = $(b).offset().top;
        if (!b.startWith("#")) return !0;
        a.preventDefault();
        $("body,html").animate({
            scrollTop: c
        }, 1e3);
    });
    $(".cat-switch li a").click(function() {
        $(this).addClass("active");
        $(".cat-switch li a").not(this).removeClass("active");
        $(this).hasClass("workshop") ? ($(this).parent().parent().find(".switch-bg").animate({
            left: "3px"
        }, 300), $(this).parent().parent().find(".switch-bg-blog").animate({
            left: "3px"
        }, 300)) : ($(this).parent().parent().find(".switch-bg-blog").animate({
            left: "89px"
        }, 300), $(this).parent().parent().find(".switch-bg").animate({
            left: "89px"
        }, 300));
    });
    $(".cat-switch li a").hover(function() {
        $(this).hasClass("workshop") ? ($(this).parent().parent().find(".switch-bg").animate({
            left: "3px"
        }, 300), $(this).parent().parent().find(".switch-bg-blog").animate({
            left: "3px"
        }, 300)) : ($(this).parent().parent().find(".switch-bg").animate({
            left: "89px"
        }, 300), $(this).parent().parent().find(".switch-bg-blog").animate({
            left: "89px"
        }, 300));
    }, function() {
        $(".cat-switch li a.workshop").hasClass("active") ? ($(this).parent().parent().find(".switch-bg").animate({
            left: "3px"
        }, 300), $(this).parent().parent().find(".switch-bg-blog").animate({
            left: "3px"
        }, 300)) : ($(this).parent().parent().find(".switch-bg").animate({
            left: "89px"
        }, 300), $(this).parent().parent().find(".switch-bg-blog").animate({
            left: "89px"
        }, 300));
    });
    $("#finance").hover(function() {
        $(this).find(".active-img").stop().animate({
            opacity: "1"
        }, "slow");
        $(this).find(".passive-img").stop().animate({
            opacity: "0"
        }, "slow");
    }, function() {
        $(this).find(".active-img").stop().animate({
            opacity: "0"
        }, "slow");
        $(this).find(".passive-img").stop().animate({
            opacity: "1"
        }, "slow");
    });
    window.location.href.indexOf("Finance") >= 0 ? ($("#finance-active").addClass("true-visible"), 
    $("#finance-passive").addClass("false-visible")) : ($("#finance-active").removeClass("true-visible"), 
    $("#finance-passive").removeClass("false-visible"));
    "block" == $("#Вконтакте-ul").css("display") ? ($("#Вконтакте").addClass("true-visible"), 
    $("#Вконтакте-2").addClass("false-visible")) : "none" == $("#Вконтакте-ul").css("display") && ($("#Вконтакте").removeClass("true-visible"), 
    $("#Вконтакте-2").removeClass("false-visible"));
    "block" == $("#Instagram-ul").css("display") ? ($("#Instagram").addClass("true-visible"), 
    $("#Instagram-2").addClass("false-visible")) : "none" == $("#Instagram-ul").css("display") && ($("#Instagram").removeClass("true-visible"), 
    $("#Instagram-2").removeClass("false-visible"));
    "block" == $("#Одноклассники-ul").css("display") ? ($("#Одноклассники").addClass("true-visible"), 
    $("#Одноклассники-2").addClass("false-visible")) : "none" == $("#Одноклассники-ul").css("display") && ($("#Одноклассники").removeClass("true-visible"), 
    $("#Одноклассники-2").removeClass("false-visible"));
    "block" == $("#Facebook-ul").css("display") ? ($("#Facebook").addClass("true-visible"), 
    $("#Facebook-2").addClass("false-visible")) : "none" == $("#Facebook-ul").css("display") && ($("#Facebook").removeClass("true-visible"), 
    $("#Facebook-2").removeClass("false-visible"));
    "block" == $("#Periscope-ul").css("display") ? ($("#Periscope").addClass("true-visible"), 
    $("#Periscope-2").addClass("false-visible")) : "none" == $("#Periscope-ul").css("display") && ($("#Periscope").removeClass("true-visible"), 
    $("#Periscope-2").removeClass("false-visible"));
    "block" == $("#YouTube-ul").css("display") ? ($("#YouTube").addClass("true-visible"), 
    $("#YouTube-2").addClass("false-visible")) : "none" == $("#YouTube-ul").css("display") && ($("#YouTube").removeClass("true-visible"), 
    $("#YouTube-2").removeClass("false-visible"));
    "block" == $("#Twitter-ul").css("display") ? ($("#Twitter").addClass("true-visible"), 
    $("#Twitter-2").addClass("false-visible")) : "none" == $("#Twitter-ul").css("display") && ($("#Twitter").removeClass("true-visible"), 
    $("#Twitter-2").removeClass("false-visible"));
    "block" == $("#Мой мир-ul").css("display") ? ($("#Мой мир").addClass("true-visible"), 
    $("#Мой мир-2").addClass("false-visible")) : "none" == $("#Мой мир-ul").css("display") && ($("#Мой мир").removeClass("true-visible"), 
    $("#Мой мир-2").removeClass("false-visible"));
    "block" == $("#Vine-ul").css("display") ? ($("#Vine").addClass("true-visible"), 
    $("#Vine-2").addClass("false-visible")) : "none" == $("#Vine-ul").css("display") && ($("#Vine").removeClass("true-visible"), 
    $("#Vine-2").removeClass("false-visible"));
    "block" == $("#Soundcloud-ul").css("display") ? ($("#Soundcloud").addClass("true-visible"), 
    $("#Soundcloud-2").addClass("false-visible")) : "none" == $("#Soundcloud-ul").css("display") && ($("#Soundcloud").removeClass("true-visible"), 
    $("#Soundcloud-2").removeClass("false-visible"));
    $(".menu-row").hover(function() {
        $(this).parent().find(".active-img").stop().animate({
            opacity: "1"
        }, "slow");
        $(this).parent().find(".passive-img").stop().animate({
            opacity: "0"
        }, "slow");
    }, function() {
        $(this).parent().find(".active-img").stop().animate({
            opacity: "0"
        }, "slow");
        $(this).parent().find(".passive-img").stop().animate({
            opacity: "1"
        }, "slow");
    });
    $(".menu-row").click(function() {
        $(this).parent().find("ul").slideToggle(500).toggleClass("hide");
        $(this).toggleClass("active");
        $(".menu-row").not(this).removeClass("active");
        $(".menu-row").not(this).parent().find("ul").slideUp(500);
        $(".menu-row").not(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
        $(this).find("i").hasClass("fa-angle-right") ? $(this).find("i").rotate({
            endDeg: 810,
            duration: .5
        }).removeClass("fa-angle-right").addClass("fa-angle-down") : $(this).find("i").rotate({
            endDeg: -810,
            duration: .5
        }).removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $(".sub-menu li").click(function() {
        $(this).addClass("active");
        $(".sub-menu li").not(this).removeClass("active");
    });
    $(".form-layer, .form-layer320").css({
        width: "100%",
        height: "100%",
        position: "fixed"
    });
    $(".form-layer, .form-layer320").click(function() {
        $(".enter-form, .enter-form320").fadeOut(400);
        $(".reg-form, .reg-form320").fadeOut(400);
        $(".forg-pass, .forg-pass320").fadeOut(400);
        $(".send-pass, .send-pass320").fadeOut(400);
        $(this).fadeOut(0);
    });
    $(".fr-pass").click(function() {
        $(".forg-pass").fadeIn(400);
        $(".enter-form").fadeOut(400);
        $(".form-layer").css("display", "block");
    });
    $(".recover").click(function() {
        return $(this).closest("form").ajaxSubmit({
            success: function() {
                $(".send-pass").fadeIn(400);
                $(".forg-pass").fadeOut(400);
                $(".form-layer").css("display", "block");
            }
        }), !1;
    });
    $(".cabinet320").click(function() {
        $(".enter-form320").fadeToggle(400);
        $(".reg-form320, .forg-pass320, .send-pass320").fadeOut(400);
        $(".form-layer320").css("display", "block");
    });
    $(".registration320").click(function() {
        $(".reg-form320").fadeToggle(400);
        $(".enter-form320, .forg-pass320, .send-pass320").fadeOut(400);
        $(".form-layer320").css("display", "block");
    });
    $(".fr-pass320").click(function() {
        $(".forg-pass320").fadeIn(400);
        $(".enter-form320").fadeOut(400);
        $(".form-layer320").css("display", "block");
    });
    $(".recover320").click(function() {
        $(".send-pass320").fadeIn(400);
        $(".forg-pass320").fadeOut(400);
        $(".form-layer320").css("display", "block");
    });
    $(window).resize(function() {
        $(".enter-form320").css({
            position: "fixed",
            left: ($(window).width() - $(".enter-form320").outerWidth()) / 2,
            top: ($(window).height() - $(".enter-form320").outerHeight()) / 2
        });
        $(".reg-form320").css({
            position: "fixed",
            left: ($(window).width() - $(".reg-form320").outerWidth()) / 2,
            top: ($(window).height() - $(".reg-form320").outerHeight()) / 2
        });
        $(".forg-pass320").css({
            position: "fixed",
            left: ($(window).width() - $(".forg-pass320").outerWidth()) / 2,
            top: ($(window).height() - $(".forg-pass320").outerHeight()) / 2
        });
        $(".send-pass320").css({
            position: "fixed",
            left: ($(window).width() - $(".send-pass320").outerWidth()) / 2,
            top: ($(window).height() - $(".send-pass320").outerHeight()) / 2
        });
    });
    $(window).resize();
    $(".menu-block").click(function() {
        $(".header-nav").slideToggle(500);
        $(".header-nav").toggleClass("show");
        $(".menu-layer320").hasClass("show") && ($(".main-nav").removeClass("show").animate({
            left: "-200px"
        }, 500), $(".menu-layer320").removeClass("show"));
        $(".header-nav").hasClass("show") ? $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up") : $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
    $(".icon-block, .open-menu").click(function() {
        $(".main-nav").toggleClass("show");
        $(".menu-layer320").toggleClass("show");
        $(".main-nav").hasClass("show") ? $(".main-nav").animate({
            left: "0px"
        }, 500) : $(".main-nav").animate({
            left: "-200px"
        }, 500);
    });
    $(".open-menu").click(function() {
        $(".header-nav").slideUp(500).removeClass("show");
        $(".menu-block").find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
    $(".menu-layer320").click(function() {
        $(".main-nav").removeClass("show").animate({
            left: "-200px"
        }, 500);
        $(this).removeClass("show");
    });
    $(".price-list .open-ul-a").click(function(a) {
        $(this).find(".open-more-info").hasClass("open-active") ? ($(this).find(".open-more-info").slideUp(500), 
        $(this).find(".open-more-info").removeClass("open-active")) : ($(this).find(".open-more-info").slideDown(500), 
        $(this).find(".open-more-info").addClass("open-active"));
        $(".price-list .open-ul-a").not(this).find(".open-more-info").slideUp(500);
        $(".price-list .open-ul-a").not(this).find(".open-more-info").removeClass("open-active");
        a.stopPropagation();
    });
    $(".order320").click(function(a) {
        $(this).css("color", "#FF5C3D");
        a.stopPropagation();
    });
    $(".price-block320 .open-li").click(function() {
        $(this).find(".serv-name").hasClass("active") ? ($(this).find(".serv-price").slideUp(500), 
        $(this).find(".serv-name").removeClass("active"), $(this).find(".serv-name").find("i").removeClass("fa-angle-down").addClass("fa-angle-right")) : ($(this).find(".serv-price").slideDown(500), 
        $(this).find(".serv-name").addClass("active"), $(this).find(".serv-name").find("i").removeClass("fa-angle-right").addClass("fa-angle-down"));
        $(".price-block320 .open-li").not(this).find(".serv-price").slideUp(500);
        $(".price-block320 .open-li").not(this).find(".serv-name").removeClass("active");
        $(".price-block320 .open-li").not(this).find(".serv-name").find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $(".s-name").click(function() {
        $(this).addClass("active");
        $(".s-name").not(this).removeClass("active");
        $(this).parent().find("ul").find("li").find(".name").removeClass("active");
        $(this).parent().find("ul").find("li").find(".description").removeClass("dem");
        $(this).parent().find("ul").find("li").find(".s-arrow").removeClass("active");
        $(this).parent().find("ul").addClass("dem").find("li:first-child").find(".name").addClass("active").parent().find(".description").addClass("dem").parent().find(".s-arrow").addClass("active");
        $(".s-name").not(this).parent().find(".services-list").removeClass("dem");
        $(this).parent().find(".arrow").addClass("active");
        $(".s-name").not(this).parent().find(".arrow").removeClass("active");
    });
    $(".name").click(function() {
        $(this).addClass("active");
        $(".name").not(this).removeClass("active");
        $(this).parent().find(".description").addClass("dem");
        $(".name").not(this).parent().find(".description").removeClass("dem");
        $(this).parent().find(".s-arrow").addClass("active");
        $(".name").not(this).parent().find(".s-arrow").removeClass("active");
    });
    $(function() {
        $(".my-order").click(function() {
            $(this).addClass("active");
            $(".finances, .partner, .my-order320").removeClass("active");
            $(".my-order-tab").addClass("active");
            $(".finances-tab, .partner-tab, .my-order-tab320").removeClass("active");
        });
        $(".finances").click(function() {
            $(this).addClass("active");
            $(".my-order, .partner, .my-order320").removeClass("active");
            $(".finances-tab").addClass("active");
            $(".my-order-tab, .partner-tab, .my-order-tab320").removeClass("active");
        });
        $(".partner").click(function() {
            $(this).addClass("active");
            $(".my-order, .finances, .my-order320").removeClass("active");
            $(".partner-tab").addClass("active");
            $(".my-order-tab, .finances-tab, .my-order-tab320").removeClass("active");
        });
        $(".my-order320").click(function() {
            $(this).addClass("active");
            $(".my-order, .finances, .partner").removeClass("active");
            $(".my-order-tab320").addClass("active");
            $(".my-order-tab, .finances-tab, .partner-tab").removeClass("active");
        });
    });
    $(".stat-title").click(function() {
        $(this).toggleClass("active");
        $(this).parent().find(".stat-block").slideToggle(500);
        $(".stat-title").hasClass("active") ? $(this).find(".stat-arrow i").removeClass("fa-angle-right").addClass("fa-angle-down") : $(this).find(".stat-arrow i").removeClass("fa-angle-down").addClass("fa-angle-right");
    });
    $(function() {
        $(".tb-row").click(function() {
            $(this).addClass("active").find(".order-cell i").addClass("active");
            $(this).find(".info-tt").hasClass("active") ? ($(this).find(".order-link").css("display", "block"), 
            $(this).find(".order-link-short").css("display", "none")) : ($(this).find(".order-link").css("display", "none"), 
            $(this).find(".order-link-short").css("display", "block"));
            $(".tb-row").not(this).removeClass("active").find(".order-cell i").removeClass("active");
        });
        $(".tab-row.ord").click(function() {
            $(this).siblings(".tab-row.desc").slideToggle(300).toggleClass("active");
            $(this).siblings(".tab-row.desc").hasClass("active") ? ($(this).find("i").removeClass("fa-angle-right").addClass("fa-angle-down"), 
            $(".tab-row.ord").not(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right")) : $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(this).find(".info-tt").toggleClass("active");
            $(".tab-row.ord").not(this).find(".info-tt").removeClass("active");
        });
        $(".my-order-tab320 .tab-row.ord").click(function() {
            $(this).find(".order-details").slideToggle(300);
            $(".my-order-tab320 .tab-row.ord").not(this).find(".order-details").slideUp(300);
        });
    });
    $.fn.rotate = function(a) {
        function b(a) {
            var b = !1, c = document.createElement("div").style;
            return $.each(f, function(d, e) {
                "" === c[e.replace(/\-/g, "") + a] && (b = !0);
            }), b;
        }
        function c(a, c) {
            var d = {};
            return b.transform ? ($.each(f, function(b, e) {
                d[e.toLowerCase() + a] = c || "";
            }), d) : d;
        }
        function d(a) {
            var c, d, e, f;
            return b.transform ? "" : (c = a >= 0 ? Math.PI * a / 180 : Math.PI * (360 + a) / 180, 
            d = Math.cos(c), e = Math.sin(c), f = "M11=" + d + ",M12=" + -e + ",M21=" + e + ",M22=" + d + ',SizingMethod="auto expand"', 
            "progid:DXImageTransform.Microsoft.Matrix(" + f + ")");
        }
        var e = $(this), f, g, h = 0;
        return f = [ "-Webkit-", "-Moz-", "-O-", "-ms-", "" ], g = $.extend({
            startDeg: !1,
            endDeg: 360,
            duration: 1,
            count: 1,
            easing: "linear",
            animate: {},
            forceJS: !1
        }, a), b.transform = b("Transform"), b.transition = b("Transition"), g.endDeg *= g.count, 
        g.duration *= g.count, b.transition && !g.forceJS ? (/Firefox/.test(navigator.userAgent) && (h = (!a || !a.animate) && (g.startDeg === !1 || g.startDeg >= 0) ? 0 : 25), 
        e.queue(function(a) {
            g.startDeg !== !1 && e.css(c("transform", "rotate(" + g.startDeg + "deg)"));
            setTimeout(function() {
                e.css(c("transition", "all " + g.duration + "s " + g.easing)).css(c("transform", "rotate(" + g.endDeg + "deg)")).css(g.animate);
            }, h);
            setTimeout(function() {
                e.css(c("transition"));
                g.persist || e.css(c("transform"));
                a();
            }, 1e3 * g.duration - h);
        })) : (g.startDeg === !1 && (g.startDeg = e.data("rotated") || 0), g.animate.perc = 100, 
        e.animate(g.animate, {
            duration: 1e3 * g.duration,
            easing: $.easing[g.easing] ? g.easing : "",
            step: function(a, b) {
                var f;
                "perc" === b.prop && (f = g.startDeg + (g.endDeg - g.startDeg) * a / 100, e.css(c("transform", "rotate(" + f + "deg)")).css("filter", d(f)));
            },
            complete: function() {
                if (g.persist) while (g.endDeg >= 360) g.endDeg -= 360; else g.endDeg = 0, e.css(c("transform"));
                e.css("perc", 0).data("rotated", g.endDeg);
            }
        })), e;
    };
}), function(a) {
    "undefined" != typeof module && module.exports ? module.exports = a : a(jQuery, window, document);
}(function(a) {
    !function(b) {
        var c = "function" == typeof define && define.amd, d = "undefined" != typeof module && module.exports, e = "https:" == document.location.protocol ? "https:" : "http:";
        c || (d ? require("jquery-mousewheel")(a) : a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + e + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js%3E%3C/script%3E")));
        b();
    }(function() {
        var b = "mCustomScrollbar", c = "mCS", d = ".mCustomScrollbar", e = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: 300,
                disableOver: [ "select", "option", "keygen", "datalist", "textarea" ]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: "auto",
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, f = 0, g = {}, h = window.attachEvent && !window.addEventListener ? 1 : 0, i = !1, j, k = [ "mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight" ], l = {
            init: function(b) {
                var b = a.extend(!0, {}, e, b), h = m.call(this), i, j;
                if (b.live) {
                    if (i = b.liveSelector || this.selector || d, j = a(i), "off" === b.live) {
                        o(i);
                        return;
                    }
                    g[i] = setTimeout(function() {
                        j.mCustomScrollbar(b);
                        "once" === b.live && j.length && o(i);
                    }, 500);
                } else o(i);
                return b.setWidth = b.set_width ? b.set_width : b.setWidth, b.setHeight = b.set_height ? b.set_height : b.setHeight, 
                b.axis = b.horizontalScroll ? "x" : p(b.axis), b.scrollInertia = b.scrollInertia > 0 && b.scrollInertia < 17 ? 17 : b.scrollInertia, 
                "object" != typeof b.mouseWheel && b.mouseWheel == !0 && (b.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }), b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount, 
                b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta, 
                b.scrollButtons.scrollType = q(b.scrollButtons.scrollType), n(b), a(h).each(function() {
                    var d = a(this);
                    if (!d.data(c)) {
                        d.data(c, {
                            idx: ++f,
                            opt: b,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: d.css("direction"),
                            cbOffsets: null,
                            trigger: null,
                            poll: {
                                size: {
                                    o: 0,
                                    n: 0
                                },
                                img: {
                                    o: 0,
                                    n: 0
                                },
                                change: {
                                    o: 0,
                                    n: 0
                                }
                            }
                        });
                        var e = d.data(c), g = e.opt, h = d.data("mcs-axis"), i = d.data("mcs-scrollbar-position"), j = d.data("mcs-theme");
                        h && (g.axis = h);
                        i && (g.scrollbarPosition = i);
                        j && (g.theme = j, n(g));
                        r.call(this);
                        e && g.callbacks.onCreate && "function" == typeof g.callbacks.onCreate && g.callbacks.onCreate.call(this);
                        a("#mCSB_" + e.idx + "_container img:not(." + k[2] + ")").addClass(k[2]);
                        l.update.call(null, d);
                    }
                });
            },
            update: function(b, d) {
                var e = b || m.call(this);
                return a(e).each(function() {
                    var b = a(this), e;
                    if (b.data(c)) {
                        var f = b.data(c), g = f.opt, h = a("#mCSB_" + f.idx + "_container"), i = a("#mCSB_" + f.idx), j = [ a("#mCSB_" + f.idx + "_dragger_vertical"), a("#mCSB_" + f.idx + "_dragger_horizontal") ];
                        if (!h.length) return;
                        f.tweenRunning && U(b);
                        d && f && g.callbacks.onBeforeUpdate && "function" == typeof g.callbacks.onBeforeUpdate && g.callbacks.onBeforeUpdate.call(this);
                        b.hasClass(k[3]) && b.removeClass(k[3]);
                        b.hasClass(k[4]) && b.removeClass(k[4]);
                        i.height() !== b.height() && i.css("max-height", b.height());
                        t.call(this);
                        "y" === g.axis || g.advanced.autoExpandHorizontalScroll || h.css("width", s(h));
                        f.overflowed = y.call(this);
                        C.call(this);
                        g.autoDraggerLength && v.call(this);
                        w.call(this);
                        A.call(this);
                        e = [ Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft) ];
                        "x" !== g.axis && (f.overflowed[0] ? j[0].height() > j[0].parent().height() ? z.call(this) : (V(b, e[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        }), f.contentReset.y = null) : (z.call(this), "y" === g.axis ? B.call(this) : "yx" === g.axis && f.overflowed[1] && V(b, e[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        })));
                        "y" !== g.axis && (f.overflowed[1] ? j[1].width() > j[1].parent().width() ? z.call(this) : (V(b, e[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none"
                        }), f.contentReset.x = null) : (z.call(this), "x" === g.axis ? B.call(this) : "yx" === g.axis && f.overflowed[0] && V(b, e[0].toString(), {
                            dir: "y",
                            dur: 0,
                            overwrite: "none"
                        })));
                        d && f && (2 === d && g.callbacks.onImageLoad && "function" == typeof g.callbacks.onImageLoad ? g.callbacks.onImageLoad.call(this) : 3 === d && g.callbacks.onSelectorChange && "function" == typeof g.callbacks.onSelectorChange ? g.callbacks.onSelectorChange.call(this) : g.callbacks.onUpdate && "function" == typeof g.callbacks.onUpdate && g.callbacks.onUpdate.call(this));
                        S.call(this);
                    }
                });
            },
            scrollTo: function(b, d) {
                if ("undefined" != typeof b && null != b) {
                    var e = m.call(this);
                    return a(e).each(function() {
                        var e = a(this);
                        if (e.data(c)) {
                            var f = e.data(c), g = f.opt, h = {
                                trigger: "external",
                                scrollInertia: g.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }, i = a.extend(!0, {}, h, d), j = Q.call(this, b), k = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia;
                            j[0] = R.call(this, j[0], "y");
                            j[1] = R.call(this, j[1], "x");
                            i.moveDragger && (j[0] *= f.scrollRatio.y, j[1] *= f.scrollRatio.x);
                            i.dur = k;
                            setTimeout(function() {
                                null !== j[0] && "undefined" != typeof j[0] && "x" !== g.axis && f.overflowed[0] && (i.dir = "y", 
                                i.overwrite = "all", V(e, j[0].toString(), i));
                                null !== j[1] && "undefined" != typeof j[1] && "y" !== g.axis && f.overflowed[1] && (i.dir = "x", 
                                i.overwrite = "none", V(e, j[1].toString(), i));
                            }, i.timeout);
                        }
                    });
                }
            },
            stop: function() {
                var b = m.call(this);
                return a(b).each(function() {
                    var b = a(this);
                    b.data(c) && U(b);
                });
            },
            disable: function(b) {
                var d = m.call(this);
                return a(d).each(function() {
                    var d = a(this), e;
                    d.data(c) && (e = d.data(c), S.call(this, "remove"), B.call(this), b && z.call(this), 
                    C.call(this, !0), d.addClass(k[3]));
                });
            },
            destroy: function() {
                var d = m.call(this);
                return a(d).each(function() {
                    var e = a(this);
                    if (e.data(c)) {
                        var f = e.data(c), g = f.opt, h = a("#mCSB_" + f.idx), i = a("#mCSB_" + f.idx + "_container"), j = a(".mCSB_" + f.idx + "_scrollbar");
                        g.live && o(g.liveSelector || a(d).selector);
                        S.call(this, "remove");
                        B.call(this);
                        z.call(this);
                        e.removeData(c);
                        Z(this, "mcs");
                        j.remove();
                        i.find("img." + k[2]).removeClass(k[2]);
                        h.replaceWith(i.contents());
                        e.removeClass(b + " _" + c + "_" + f.idx + " " + k[6] + " " + k[7] + " " + k[5] + " " + k[3]).addClass(k[4]);
                    }
                });
            }
        }, m = function() {
            return "object" != typeof a(this) || a(this).length < 1 ? d : this;
        }, n = function(b) {
            b.autoDraggerLength = a.inArray(b.theme, [ "rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark" ]) > -1 ? !1 : b.autoDraggerLength;
            b.autoExpandScrollbar = a.inArray(b.theme, [ "rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark" ]) > -1 ? !1 : b.autoExpandScrollbar;
            b.scrollButtons.enable = a.inArray(b.theme, [ "minimal", "minimal-dark" ]) > -1 ? !1 : b.scrollButtons.enable;
            b.autoHideScrollbar = a.inArray(b.theme, [ "minimal", "minimal-dark" ]) > -1 ? !0 : b.autoHideScrollbar;
            b.scrollbarPosition = a.inArray(b.theme, [ "minimal", "minimal-dark" ]) > -1 ? "outside" : b.scrollbarPosition;
        }, o = function(a) {
            g[a] && (clearTimeout(g[a]), Z(g, a));
        }, p = function(a) {
            return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y";
        }, q = function(a) {
            return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless";
        }, r = function() {
            var d = a(this), e = d.data(c), f = e.opt, g = f.autoExpandScrollbar ? " " + k[1] + "_expand" : "", h = [ "<div id='mCSB_" + e.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_vertical" + g + "'><div class='" + k[12] + "'><div id='mCSB_" + e.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + e.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_horizontal" + g + "'><div class='" + k[12] + "'><div id='mCSB_" + e.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>" ], i = "yx" === f.axis ? "mCSB_vertical_horizontal" : "x" === f.axis ? "mCSB_horizontal" : "mCSB_vertical", j = "yx" === f.axis ? h[0] + h[1] : "x" === f.axis ? h[1] : h[0], l = "yx" === f.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", m = f.autoHideScrollbar ? " " + k[6] : "", n = "x" !== f.axis && "rtl" === e.langDir ? " " + k[7] : "", o, p, q;
            f.setWidth && d.css("width", f.setWidth);
            f.setHeight && d.css("height", f.setHeight);
            f.setLeft = "y" !== f.axis && "rtl" === e.langDir ? "989999px" : f.setLeft;
            d.addClass(b + " _" + c + "_" + e.idx + m + n).wrapInner("<div id='mCSB_" + e.idx + "' class='mCustomScrollBox mCS-" + f.theme + " " + i + "'><div id='mCSB_" + e.idx + "_container' class='mCSB_container' style='position:relative; top:" + f.setTop + "; left:" + f.setLeft + ";' dir=" + e.langDir + " /></div>");
            o = a("#mCSB_" + e.idx);
            p = a("#mCSB_" + e.idx + "_container");
            "y" === f.axis || f.advanced.autoExpandHorizontalScroll || p.css("width", s(p));
            "outside" === f.scrollbarPosition ? ("static" === d.css("position") && d.css("position", "relative"), 
            d.css("overflow", "visible"), o.addClass("mCSB_outside").after(j)) : (o.addClass("mCSB_inside").append(j), 
            p.wrap(l));
            u.call(this);
            q = [ a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal") ];
            q[0].css("min-height", q[0].height());
            q[1].css("min-width", q[1].width());
        }, s = function(b) {
            var c = [ b[0].scrollWidth, Math.max.apply(Math, b.children().map(function() {
                return a(this).outerWidth(!0);
            }).get()) ], d = b.parent().width();
            return c[0] > d ? c[0] : c[1] > d ? c[1] : "100%";
        }, t = function() {
            var b = a(this), d = b.data(c), e = d.opt, f = a("#mCSB_" + d.idx + "_container"), g;
            e.advanced.autoExpandHorizontalScroll && "y" !== e.axis && (f.css({
                width: "auto",
                "min-width": 0,
                "overflow-x": "scroll"
            }), g = Math.ceil(f[0].scrollWidth), 3 === e.advanced.autoExpandHorizontalScroll || 2 !== e.advanced.autoExpandHorizontalScroll && g > f.parent().width() ? f.css({
                width: g,
                "min-width": "100%",
                "overflow-x": "inherit"
            }) : f.css({
                "overflow-x": "inherit",
                position: "absolute"
            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                width: Math.ceil(f[0].getBoundingClientRect().right + .4) - Math.floor(f[0].getBoundingClientRect().left),
                "min-width": "100%",
                position: "relative"
            }).unwrap());
        }, u = function() {
            var b = a(this), d = b.data(c), e = d.opt, f = a(".mCSB_" + d.idx + "_scrollbar:first"), g = ab(e.scrollButtons.tabindex) ? "tabindex='" + e.scrollButtons.tabindex + "'" : "", h = [ "<a href='#' class='" + k[13] + "' oncontextmenu='return false;' " + g + " />", "<a href='#' class='" + k[14] + "' oncontextmenu='return false;' " + g + " />", "<a href='#' class='" + k[15] + "' oncontextmenu='return false;' " + g + " />", "<a href='#' class='" + k[16] + "' oncontextmenu='return false;' " + g + " />" ], i = [ "x" === e.axis ? h[2] : h[0], "x" === e.axis ? h[3] : h[1], h[2], h[3] ];
            e.scrollButtons.enable && f.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3]);
        }, v = function() {
            var b = a(this), d = b.data(c), e = a("#mCSB_" + d.idx), f = a("#mCSB_" + d.idx + "_container"), g = [ a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal") ], i = [ e.height() / f.outerHeight(!1), e.width() / f.outerWidth(!1) ], j = [ parseInt(g[0].css("min-height")), Math.round(i[0] * g[0].parent().height()), parseInt(g[1].css("min-width")), Math.round(i[1] * g[1].parent().width()) ], k = h && j[1] < j[0] ? j[0] : j[1], l = h && j[3] < j[2] ? j[2] : j[3];
            g[0].css({
                height: k,
                "max-height": g[0].parent().height() - 10
            }).find(".mCSB_dragger_bar").css({
                "line-height": j[0] + "px"
            });
            g[1].css({
                width: l,
                "max-width": g[1].parent().width() - 10
            });
        }, w = function() {
            var b = a(this), d = b.data(c), e = a("#mCSB_" + d.idx), f = a("#mCSB_" + d.idx + "_container"), g = [ a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal") ], h = [ f.outerHeight(!1) - e.height(), f.outerWidth(!1) - e.width() ], i = [ h[0] / (g[0].parent().height() - g[0].height()), h[1] / (g[1].parent().width() - g[1].width()) ];
            d.scrollRatio = {
                y: i[0],
                x: i[1]
            };
        }, x = function(a, b, c) {
            var d = c ? k[0] + "_expanded" : "", e = a.closest(".mCSB_scrollTools");
            "active" === b ? (a.toggleClass(k[0] + " " + d), e.toggleClass(k[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(k[0]), 
            e.removeClass(k[1])) : (a.addClass(k[0]), e.addClass(k[1])));
        }, y = function() {
            var b = a(this), d = b.data(c), e = a("#mCSB_" + d.idx), f = a("#mCSB_" + d.idx + "_container"), g = null == d.overflowed ? f.height() : f.outerHeight(!1), h = null == d.overflowed ? f.width() : f.outerWidth(!1), i = f[0].scrollHeight, j = f[0].scrollWidth;
            return i > g && (g = i), j > h && (h = j), [ g > e.height(), h > e.width() ];
        }, z = function() {
            var b = a(this), d = b.data(c), e = d.opt, f = a("#mCSB_" + d.idx), g = a("#mCSB_" + d.idx + "_container"), h = [ a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal") ], i;
            U(b);
            ("x" !== e.axis && !d.overflowed[0] || "y" === e.axis && d.overflowed[0]) && (h[0].add(g).css("top", 0), 
            V(b, "_resetY"));
            ("y" !== e.axis && !d.overflowed[1] || "x" === e.axis && d.overflowed[1]) && (i = dx = 0, 
            "rtl" === d.langDir && (i = f.width() - g.outerWidth(!1), dx = Math.abs(i / d.scrollRatio.x)), 
            g.css("left", i), h[1].css("left", dx), V(b, "_resetX"));
        }, A = function() {
            var b = a(this), d = b.data(c), e = d.opt, f;
            if (!d.bindEvents) {
                if (E.call(this), e.contentTouchScroll && F.call(this), G.call(this), e.mouseWheel.enable) {
                    function g() {
                        f = setTimeout(function() {
                            a.event.special.mousewheel ? (clearTimeout(f), H.call(b[0])) : g();
                        }, 100);
                    }
                    g();
                }
                K.call(this);
                M.call(this);
                e.advanced.autoScrollOnFocus && L.call(this);
                e.scrollButtons.enable && N.call(this);
                e.keyboard.enable && O.call(this);
                d.bindEvents = !0;
            }
        }, B = function() {
            var b = a(this), d = b.data(c), e = d.opt, f = c + "_" + d.idx, g = ".mCSB_" + d.idx + "_scrollbar", h = a("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + g + " ." + k[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + g + ">a"), i = a("#mCSB_" + d.idx + "_container");
            e.advanced.releaseDraggableSelectors && h.add(a(e.advanced.releaseDraggableSelectors));
            d.bindEvents && (a(document).unbind("." + f), h.each(function() {
                a(this).unbind("." + f);
            }), clearTimeout(b[0]._focusTimeout), Z(b[0], "_focusTimeout"), clearTimeout(d.sequential.step), 
            Z(d.sequential, "step"), clearTimeout(i[0].onCompleteTimeout), Z(i[0], "onCompleteTimeout"), 
            d.bindEvents = !1);
        }, C = function(b) {
            var d = a(this), e = d.data(c), f = e.opt, g = a("#mCSB_" + e.idx + "_container_wrapper"), h = g.length ? g : a("#mCSB_" + e.idx + "_container"), i = [ a("#mCSB_" + e.idx + "_scrollbar_vertical"), a("#mCSB_" + e.idx + "_scrollbar_horizontal") ], j = [ i[0].find(".mCSB_dragger"), i[1].find(".mCSB_dragger") ];
            "x" !== f.axis && (e.overflowed[0] && !b ? (i[0].add(j[0]).add(i[0].children("a")).css("display", "block"), 
            h.removeClass(k[8] + " " + k[10])) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[0].css("display", "none"), 
            h.removeClass(k[10])) : (i[0].css("display", "none"), h.addClass(k[10])), h.addClass(k[8])));
            "y" !== f.axis && (e.overflowed[1] && !b ? (i[1].add(j[1]).add(i[1].children("a")).css("display", "block"), 
            h.removeClass(k[9] + " " + k[11])) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[1].css("display", "none"), 
            h.removeClass(k[11])) : (i[1].css("display", "none"), h.addClass(k[11])), h.addClass(k[9])));
            e.overflowed[0] || e.overflowed[1] ? d.removeClass(k[5]) : d.addClass(k[5]);
        }, D = function(a) {
            var b = a.type, c, d;
            switch (b) {
              case "pointerdown":
              case "MSPointerDown":
              case "pointermove":
              case "MSPointerMove":
              case "pointerup":
              case "MSPointerUp":
                return a.target.ownerDocument !== document ? [ a.originalEvent.screenY, a.originalEvent.screenX, !1 ] : [ a.originalEvent.pageY, a.originalEvent.pageX, !1 ];

              case "touchstart":
              case "touchmove":
              case "touchend":
                return c = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], d = a.originalEvent.touches.length || a.originalEvent.changedTouches.length, 
                a.target.ownerDocument !== document ? [ c.screenY, c.screenX, d > 1 ] : [ c.pageY, c.pageX, d > 1 ];

              default:
                return [ a.pageY, a.pageX, !1 ];
            }
        }, E = function() {
            function b(a) {
                var b = l.find("iframe"), c;
                b.length && (c = a ? "auto" : "none", b.css("pointer-events", c));
            }
            function d(a, b, c, d) {
                var h, i;
                l[0].idleTimer = g.scrollInertia < 233 ? 250 : 0;
                n.attr("id") === k[1] ? (h = "x", i = (n[0].offsetLeft - b + d) * f.scrollRatio.x) : (h = "y", 
                i = (n[0].offsetTop - a + c) * f.scrollRatio.y);
                V(e, i.toString(), {
                    dir: h,
                    drag: !0
                });
            }
            var e = a(this), f = e.data(c), g = f.opt, j = c + "_" + f.idx, k = [ "mCSB_" + f.idx + "_dragger_vertical", "mCSB_" + f.idx + "_dragger_horizontal" ], l = a("#mCSB_" + f.idx + "_container"), m = a("#" + k[0] + ",#" + k[1]), n, o, p, q = g.advanced.releaseDraggableSelectors ? m.add(a(g.advanced.releaseDraggableSelectors)) : m;
            m.bind("mousedown." + j + " touchstart." + j + " pointerdown." + j + " MSPointerDown." + j, function(c) {
                if (c.stopImmediatePropagation(), c.preventDefault(), $(c)) {
                    i = !0;
                    h && (document.onselectstart = function() {
                        return !1;
                    });
                    b(!1);
                    U(e);
                    n = a(this);
                    var d = n.offset(), f = D(c)[0] - d.top, j = D(c)[1] - d.left, k = n.height() + d.top, l = n.width() + d.left;
                    f < k && f > 0 && j < l && j > 0 && (o = f, p = j);
                    x(n, "active", g.autoExpandScrollbar);
                }
            }).bind("touchmove." + j, function(a) {
                a.stopImmediatePropagation();
                a.preventDefault();
                var b = n.offset(), c = D(a)[0] - b.top, e = D(a)[1] - b.left;
                d(o, p, c, e);
            });
            a(document).bind("mousemove." + j + " pointermove." + j + " MSPointerMove." + j, function(a) {
                if (n) {
                    var b = n.offset(), c = D(a)[0] - b.top, e = D(a)[1] - b.left;
                    if (o === c) return;
                    d(o, p, c, e);
                }
            }).add(q).bind("mouseup." + j + " touchend." + j + " pointerup." + j + " MSPointerUp." + j, function() {
                n && (x(n, "active", g.autoExpandScrollbar), n = null);
                i = !1;
                h && (document.onselectstart = null);
                b(!0);
            });
        }, F = function() {
            function b(a) {
                if (!_(a) || i || D(a)[2]) {
                    j = 0;
                    return;
                }
                j = 1;
                K = 0;
                L = 0;
                r = 1;
                k.removeClass("mCS_touch_action");
                var b = p.offset();
                s = D(a)[0] - b.top;
                t = D(a)[1] - b.left;
                J = [ D(a)[0], D(a)[1] ];
            }
            function d(a) {
                var b, c, d, e;
                if (_(a) && !i && !D(a)[2] && (a.stopImmediatePropagation(), !L || K) && r) {
                    z = X();
                    var f = o.offset(), g = D(a)[0] - f.top, j = D(a)[1] - f.left, n = "mcsLinearOut";
                    w.push(g);
                    x.push(j);
                    J[2] = Math.abs(D(a)[0] - J[0]);
                    J[3] = Math.abs(D(a)[1] - J[1]);
                    l.overflowed[0] && (b = q[0].parent().height() - q[0].height(), c = s - g > 0 && g - s > -(b * l.scrollRatio.y) && (2 * J[3] < J[2] || "yx" === m.axis));
                    l.overflowed[1] && (d = q[1].parent().width() - q[1].width(), e = t - j > 0 && j - t > -(d * l.scrollRatio.x) && (2 * J[2] < J[3] || "yx" === m.axis));
                    c || e ? (O || a.preventDefault(), K = 1) : (L = 1, k.addClass("mCS_touch_action"));
                    O && a.preventDefault();
                    E = "yx" === m.axis ? [ s - g, t - j ] : "x" === m.axis ? [ null, t - j ] : [ s - g, null ];
                    p[0].idleTimer = 250;
                    l.overflowed[0] && h(E[0], F, n, "y", "all", !0);
                    l.overflowed[1] && h(E[1], F, n, "x", H, !0);
                }
            }
            function e(a) {
                if (!_(a) || i || D(a)[2]) {
                    j = 0;
                    return;
                }
                j = 1;
                a.stopImmediatePropagation();
                U(k);
                y = X();
                var b = o.offset();
                u = D(a)[0] - b.top;
                v = D(a)[1] - b.left;
                w = [];
                x = [];
            }
            function f(a) {
                var b, c, d;
                if (_(a) && !i && !D(a)[2]) {
                    r = 0;
                    a.stopImmediatePropagation();
                    K = 0;
                    L = 0;
                    A = X();
                    var e = o.offset(), f = D(a)[0] - e.top, j = D(a)[1] - e.left;
                    if (!(A - z > 30)) {
                        C = 1e3 / (A - y);
                        var k = "mcsEaseOut", n = C < 2.5, q = n ? [ w[w.length - 2], x[x.length - 2] ] : [ 0, 0 ];
                        B = n ? [ f - q[0], j - q[1] ] : [ f - u, j - v ];
                        b = [ Math.abs(B[0]), Math.abs(B[1]) ];
                        C = n ? [ Math.abs(B[0] / 4), Math.abs(B[1] / 4) ] : [ C, C ];
                        c = [ Math.abs(p[0].offsetTop) - B[0] * g(b[0] / C[0], C[0]), Math.abs(p[0].offsetLeft) - B[1] * g(b[1] / C[1], C[1]) ];
                        E = "yx" === m.axis ? [ c[0], c[1] ] : "x" === m.axis ? [ null, c[1] ] : [ c[0], null ];
                        G = [ 4 * b[0] + m.scrollInertia, 4 * b[1] + m.scrollInertia ];
                        d = parseInt(m.contentTouchScroll) || 0;
                        E[0] = b[0] > d ? E[0] : 0;
                        E[1] = b[1] > d ? E[1] : 0;
                        l.overflowed[0] && h(E[0], G[0], k, "y", H, !1);
                        l.overflowed[1] && h(E[1], G[1], k, "x", H, !1);
                    }
                }
            }
            function g(a, b) {
                var c = [ 1.5 * b, 2 * b, b / 1.5, b / 2 ];
                return a > 90 ? b > 4 ? c[0] : c[3] : a > 60 ? b > 3 ? c[3] : c[2] : a > 30 ? b > 8 ? c[1] : b > 6 ? c[0] : b > 4 ? b : c[2] : b > 8 ? b : c[3];
            }
            function h(a, b, c, d, e, f) {
                a && V(k, a.toString(), {
                    dur: b,
                    scrollEasing: c,
                    dir: d,
                    overwrite: e,
                    drag: f
                });
            }
            var k = a(this), l = k.data(c), m = l.opt, n = c + "_" + l.idx, o = a("#mCSB_" + l.idx), p = a("#mCSB_" + l.idx + "_container"), q = [ a("#mCSB_" + l.idx + "_dragger_vertical"), a("#mCSB_" + l.idx + "_dragger_horizontal") ], r, s, t, u, v, w = [], x = [], y, z, A, B, C, E, F = 0, G, H = "yx" === m.axis ? "none" : "all", J = [], K, L, M = p.find("iframe"), N = [ "touchstart." + n + " pointerdown." + n + " MSPointerDown." + n, "touchmove." + n + " pointermove." + n + " MSPointerMove." + n, "touchend." + n + " pointerup." + n + " MSPointerUp." + n ], O = void 0 !== document.body.style.touchAction;
            p.bind(N[0], function(a) {
                b(a);
            }).bind(N[1], function(a) {
                d(a);
            });
            o.bind(N[0], function(a) {
                e(a);
            }).bind(N[2], function(a) {
                f(a);
            });
            M.length && M.each(function() {
                a(this).load(function() {
                    I(this) && a(this.contentDocument || this.contentWindow.document).bind(N[0], function(a) {
                        b(a);
                        e(a);
                    }).bind(N[1], function(a) {
                        d(a);
                    }).bind(N[2], function(a) {
                        f(a);
                    });
                });
            });
        }, G = function() {
            function b() {
                return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0;
            }
            function d(a, b, c) {
                h.type = c && n ? "stepped" : "stepless";
                h.scrollAmount = 10;
                P(e, a, b, "mcsLinearOut", c ? 60 : null);
            }
            var e = a(this), f = e.data(c), g = f.opt, h = f.sequential, k = c + "_" + f.idx, l = a("#mCSB_" + f.idx + "_container"), m = l.parent(), n;
            l.bind("mousedown." + k, function() {
                j || n || (n = 1, i = !0);
            }).add(document).bind("mousemove." + k, function(a) {
                if (!j && n && b()) {
                    var c = l.offset(), e = D(a)[0] - c.top + l[0].offsetTop, i = D(a)[1] - c.left + l[0].offsetLeft;
                    e > 0 && e < m.height() && i > 0 && i < m.width() ? h.step && d("off", null, "stepped") : ("x" !== g.axis && f.overflowed[0] && (e < 0 ? d("on", 38) : e > m.height() && d("on", 40)), 
                    "y" !== g.axis && f.overflowed[1] && (i < 0 ? d("on", 37) : i > m.width() && d("on", 39)));
                }
            }).bind("mouseup." + k + " dragend." + k, function() {
                j || (n && (n = 0, d("off", null)), i = !1);
            });
        }, H = function() {
            function b(b, c) {
                var g;
                if (U(d), !J(d, b.target)) {
                    if (g = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : h && b.deltaFactor < 100 ? 100 : b.deltaFactor || 100, 
                    "x" === f.axis || "x" === f.mouseWheel.axis) var k = "x", l = [ Math.round(g * e.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount) ], m = "auto" !== f.mouseWheel.scrollAmount ? l[1] : l[0] >= i.width() ? .9 * i.width() : l[0], n = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetLeft), o = j[1][0].offsetLeft, p = j[1].parent().width() - j[1].width(), q = b.deltaX || b.deltaY || c; else var k = "y", l = [ Math.round(g * e.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount) ], m = "auto" !== f.mouseWheel.scrollAmount ? l[1] : l[0] >= i.height() ? .9 * i.height() : l[0], n = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetTop), o = j[0][0].offsetTop, p = j[0].parent().height() - j[0].height(), q = b.deltaY || c;
                    ("y" !== k || e.overflowed[0]) && ("x" !== k || e.overflowed[1]) && ((f.mouseWheel.invert || b.webkitDirectionInvertedFromDevice) && (q = -q), 
                    f.mouseWheel.normalizeDelta && (q = q < 0 ? -1 : 1), (q > 0 && 0 !== o || q < 0 && o !== p || f.mouseWheel.preventDefault) && (b.stopImmediatePropagation(), 
                    b.preventDefault()), V(d, (n - q * m).toString(), {
                        dir: k
                    }));
                }
            }
            if (a(this).data(c)) {
                var d = a(this), e = d.data(c), f = e.opt, g = c + "_" + e.idx, i = a("#mCSB_" + e.idx), j = [ a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal") ], k = a("#mCSB_" + e.idx + "_container").find("iframe");
                k.length && k.each(function() {
                    a(this).load(function() {
                        I(this) && a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + g, function(a, c) {
                            b(a, c);
                        });
                    });
                });
                i.bind("mousewheel." + g, function(a, c) {
                    b(a, c);
                });
            }
        }, I = function(a) {
            var b = null, c;
            try {
                c = a.contentDocument || a.contentWindow.document;
                b = c.body.innerHTML;
            } catch (d) {}
            return null !== b;
        }, J = function(b, d) {
            var e = d.nodeName.toLowerCase(), f = b.data(c).opt.mouseWheel.disableOver;
            return a.inArray(e, f) > -1 && !(a.inArray(e, [ "select", "textarea" ]) > -1 && !a(d).is(":focus"));
        }, K = function() {
            var b = a(this), d = b.data(c), e = c + "_" + d.idx, f = a("#mCSB_" + d.idx + "_container"), g = f.parent(), h = a(".mCSB_" + d.idx + "_scrollbar ." + k[12]);
            h.bind("touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function() {
                i = !0;
            }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
                i = !1;
            }).bind("click." + e, function(c) {
                var e, h;
                if (a(c.target).hasClass(k[12]) || a(c.target).hasClass("mCSB_draggerRail")) {
                    if (U(b), e = a(this), h = e.find(".mCSB_dragger"), e.parent(".mCSB_scrollTools_horizontal").length > 0) {
                        if (!d.overflowed[1]) return;
                        var i = "x", j = c.pageX > h.offset().left ? -1 : 1, l = Math.abs(f[0].offsetLeft) - j * g.width() * .9;
                    } else {
                        if (!d.overflowed[0]) return;
                        var i = "y", j = c.pageY > h.offset().top ? -1 : 1, l = Math.abs(f[0].offsetTop) - j * g.height() * .9;
                    }
                    V(b, l.toString(), {
                        dir: i,
                        scrollEasing: "mcsEaseInOut"
                    });
                }
            });
        }, L = function() {
            var b = a(this), d = b.data(c), e = d.opt, f = c + "_" + d.idx, g = a("#mCSB_" + d.idx + "_container"), h = g.parent();
            g.bind("focusin." + f, function() {
                var c = a(document.activeElement), d = g.find(".mCustomScrollBox").length, f = 0;
                c.is(e.advanced.autoScrollOnFocus) && (U(b), clearTimeout(b[0]._focusTimeout), b[0]._focusTimer = d ? (f + 17) * d : 0, 
                b[0]._focusTimeout = setTimeout(function() {
                    var a = [ bb(c)[0], bb(c)[1] ], d = [ g[0].offsetTop, g[0].offsetLeft ], i = [ d[0] + a[0] >= 0 && d[0] + a[0] < h.height() - c.outerHeight(!1), d[1] + a[1] >= 0 && d[0] + a[1] < h.width() - c.outerWidth(!1) ], j = "yx" === e.axis && !i[0] && !i[1] ? "none" : "all";
                    "x" === e.axis || i[0] || V(b, a[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: j,
                        dur: f
                    });
                    "y" === e.axis || i[1] || V(b, a[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: j,
                        dur: f
                    });
                }, b[0]._focusTimer));
            });
        }, M = function() {
            var b = a(this), d = b.data(c), e = c + "_" + d.idx, f = a("#mCSB_" + d.idx + "_container").parent();
            f.bind("scroll." + e, function() {
                (0 !== f.scrollTop() || 0 !== f.scrollLeft()) && a(".mCSB_" + d.idx + "_scrollbar").css("visibility", "hidden");
            });
        }, N = function() {
            var b = a(this), d = b.data(c), e = d.opt, f = d.sequential, g = c + "_" + d.idx, h = ".mCSB_" + d.idx + "_scrollbar", j = a(h + ">a");
            j.bind("mousedown." + g + " touchstart." + g + " pointerdown." + g + " MSPointerDown." + g + " mouseup." + g + " touchend." + g + " pointerup." + g + " MSPointerUp." + g + " mouseout." + g + " pointerout." + g + " MSPointerOut." + g + " click." + g, function(c) {
                function g(a, c) {
                    f.scrollAmount = e.snapAmount || e.scrollButtons.scrollAmount;
                    P(b, a, c);
                }
                if (c.preventDefault(), $(c)) {
                    var h = a(this).attr("class");
                    f.type = e.scrollButtons.scrollType;
                    switch (c.type) {
                      case "mousedown":
                      case "touchstart":
                      case "pointerdown":
                      case "MSPointerDown":
                        if ("stepped" === f.type) return;
                        i = !0;
                        d.tweenRunning = !1;
                        g("on", h);
                        break;

                      case "mouseup":
                      case "touchend":
                      case "pointerup":
                      case "MSPointerUp":
                      case "mouseout":
                      case "pointerout":
                      case "MSPointerOut":
                        if ("stepped" === f.type) return;
                        i = !1;
                        f.dir && g("off", h);
                        break;

                      case "click":
                        if ("stepped" !== f.type || d.tweenRunning) return;
                        g("on", h);
                    }
                }
            });
        }, O = function() {
            function b(b) {
                function c(a, b) {
                    (g.type = f.keyboard.scrollType, g.scrollAmount = f.snapAmount || f.keyboard.scrollAmount, 
                    "stepped" === g.type && e.tweenRunning) || P(d, a, b);
                }
                var h, i, m, n, o;
                switch (b.type) {
                  case "blur":
                    e.tweenRunning && g.dir && c("off", null);
                    break;

                  case "keydown":
                  case "keyup":
                    if (h = b.keyCode ? b.keyCode : b.which, i = "on", "x" !== f.axis && (38 === h || 40 === h) || "y" !== f.axis && (37 === h || 39 === h)) {
                        if ((38 === h || 40 === h) && !e.overflowed[0] || (37 === h || 39 === h) && !e.overflowed[1]) return;
                        "keyup" === b.type && (i = "off");
                        a(document.activeElement).is(l) || (b.preventDefault(), b.stopImmediatePropagation(), 
                        c(i, h));
                    } else 33 === h || 34 === h ? ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), 
                    b.stopImmediatePropagation()), "keyup" === b.type && (U(d), m = 34 === h ? -1 : 1, 
                    "x" === f.axis || "yx" === f.axis && e.overflowed[1] && !e.overflowed[0] ? (n = "x", 
                    o = Math.abs(j[0].offsetLeft) - m * k.width() * .9) : (n = "y", o = Math.abs(j[0].offsetTop) - m * k.height() * .9), 
                    V(d, o.toString(), {
                        dir: n,
                        scrollEasing: "mcsEaseInOut"
                    }))) : (35 === h || 36 === h) && (a(document.activeElement).is(l) || ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), 
                    b.stopImmediatePropagation()), "keyup" === b.type && ("x" === f.axis || "yx" === f.axis && e.overflowed[1] && !e.overflowed[0] ? (n = "x", 
                    o = 35 === h ? Math.abs(k.width() - j.outerWidth(!1)) : 0) : (n = "y", o = 35 === h ? Math.abs(k.height() - j.outerHeight(!1)) : 0), 
                    V(d, o.toString(), {
                        dir: n,
                        scrollEasing: "mcsEaseInOut"
                    }))));
                }
            }
            var d = a(this), e = d.data(c), f = e.opt, g = e.sequential, h = c + "_" + e.idx, i = a("#mCSB_" + e.idx), j = a("#mCSB_" + e.idx + "_container"), k = j.parent(), l = "input,textarea,select,datalist,keygen,[contenteditable='true']", m = j.find("iframe"), n = [ "blur." + h + " keydown." + h + " keyup." + h ];
            m.length && m.each(function() {
                a(this).load(function() {
                    I(this) && a(this.contentDocument || this.contentWindow.document).bind(n[0], function(a) {
                        b(a);
                    });
                });
            });
            i.attr("tabindex", "0").bind(n[0], function(a) {
                b(a);
            });
        }, P = function(b, d, e, f, g) {
            function h(a) {
                var c = "stepped" !== m.type, d = g ? g : a ? c ? p / 1.5 : q : 1e3 / 60, e = a ? c ? 7.5 : 40 : 2.5, i = [ Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft) ], k = [ j.scrollRatio.y > 10 ? 10 : j.scrollRatio.y, j.scrollRatio.x > 10 ? 10 : j.scrollRatio.x ], l = "x" === m.dir[0] ? i[1] + m.dir[1] * k[1] * e : i[0] + m.dir[1] * k[0] * e, o = "x" === m.dir[0] ? i[1] + m.dir[1] * parseInt(m.scrollAmount) : i[0] + m.dir[1] * parseInt(m.scrollAmount), r = "auto" !== m.scrollAmount ? o : l, s = f ? f : a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear", t = a ? !0 : !1;
                if (a && d < 17 && (r = "x" === m.dir[0] ? i[1] : i[0]), V(b, r.toString(), {
                    dir: m.dir[0],
                    scrollEasing: s,
                    dur: d,
                    onComplete: t
                }), a) {
                    m.dir = !1;
                    return;
                }
                clearTimeout(m.step);
                m.step = setTimeout(function() {
                    h();
                }, d);
            }
            function i() {
                clearTimeout(m.step);
                Z(m, "step");
                U(b);
            }
            var j = b.data(c), l = j.opt, m = j.sequential, n = a("#mCSB_" + j.idx + "_container"), o = "stepped" === m.type ? !0 : !1, p = l.scrollInertia < 26 ? 26 : l.scrollInertia, q = l.scrollInertia < 1 ? 17 : l.scrollInertia;
            switch (d) {
              case "on":
                if (m.dir = [ e === k[16] || e === k[15] || 39 === e || 37 === e ? "x" : "y", e === k[13] || e === k[15] || 38 === e || 37 === e ? -1 : 1 ], 
                U(b), ab(e) && "stepped" === m.type) return;
                h(o);
                break;

              case "off":
                i();
                (o || j.tweenRunning && m.dir) && h(!0);
            }
        }, Q = function(b) {
            var d = a(this).data(c).opt, e = [];
            return "function" == typeof b && (b = b()), b instanceof Array ? e = b.length > 1 ? [ b[0], b[1] ] : "x" === d.axis ? [ null, b[0] ] : [ b[0], null ] : (e[0] = b.y ? b.y : b.x || "x" === d.axis ? null : b, 
            e[1] = b.x ? b.x : b.y || "y" === d.axis ? null : b), "function" == typeof e[0] && (e[0] = e[0]()), 
            "function" == typeof e[1] && (e[1] = e[1]()), e;
        }, R = function(b, d) {
            var e, f;
            if (null != b && "undefined" != typeof b) {
                var g = a(this), h = g.data(c), i = h.opt, j = a("#mCSB_" + h.idx + "_container"), k = j.parent(), m = typeof b;
                d || (d = "x" === i.axis ? "x" : "y");
                var n = "x" === d ? j.outerWidth(!1) : j.outerHeight(!1), o = "x" === d ? j[0].offsetLeft : j[0].offsetTop, p = "x" === d ? "left" : "top";
                switch (m) {
                  case "function":
                    return b();

                  case "object":
                    return (f = b.jquery ? b : a(b), !f.length) ? void 0 : "x" === d ? bb(f)[1] : bb(f)[0];

                  case "string":
                  case "number":
                    if (ab(b)) return Math.abs(b);
                    if (b.indexOf("%") !== -1) return Math.abs(n * parseInt(b) / 100);
                    if (b.indexOf("-=") !== -1) return Math.abs(o - parseInt(b.split("-=")[1]));
                    if (b.indexOf("+=") !== -1) return e = o + parseInt(b.split("+=")[1]), e >= 0 ? 0 : Math.abs(e);
                    if (b.indexOf("px") !== -1 && ab(b.split("px")[0])) return Math.abs(b.split("px")[0]);
                    if ("top" === b || "left" === b) return 0;
                    if ("bottom" === b) return Math.abs(k.height() - j.outerHeight(!1));
                    if ("right" === b) return Math.abs(k.width() - j.outerWidth(!1));
                    if ("first" === b || "last" === b) return f = j.find(":" + b), "x" === d ? bb(f)[1] : bb(f)[0];
                    if (a(b).length) return "x" === d ? bb(a(b))[1] : bb(a(b))[0];
                    j.css(p, b);
                    l.update.call(null, g[0]);
                    return;
                }
            }
        }, S = function(b) {
            function d() {
                if (clearTimeout(m[0].autoUpdate), 0 === h.parents("html").length) {
                    h = null;
                    return;
                }
                m[0].autoUpdate = setTimeout(function() {
                    if (j.advanced.updateOnSelectorChange && (i.poll.change.n = f(), i.poll.change.n !== i.poll.change.o)) {
                        i.poll.change.o = i.poll.change.n;
                        g(3);
                        return;
                    }
                    if (j.advanced.updateOnContentResize && (i.poll.size.n = h[0].scrollHeight + h[0].scrollWidth + m[0].offsetHeight + h[0].offsetHeight, 
                    i.poll.size.n !== i.poll.size.o)) {
                        i.poll.size.o = i.poll.size.n;
                        g(1);
                        return;
                    }
                    if (j.advanced.updateOnImageLoad && !("auto" === j.advanced.updateOnImageLoad && "y" === j.axis) && (i.poll.img.n = m.find("img").length, 
                    i.poll.img.n !== i.poll.img.o)) {
                        i.poll.img.o = i.poll.img.n;
                        m.find("img").each(function() {
                            e(this);
                        });
                        return;
                    }
                    (j.advanced.updateOnSelectorChange || j.advanced.updateOnContentResize || j.advanced.updateOnImageLoad) && d();
                }, j.advanced.autoUpdateTimeout);
            }
            function e(b) {
                function c(a, b) {
                    return function() {
                        return b.apply(a, arguments);
                    };
                }
                function d() {
                    this.onload = null;
                    a(b).addClass(k[2]);
                    g(2);
                }
                if (a(b).hasClass(k[2])) {
                    g();
                    return;
                }
                var e = new Image();
                e.onload = c(e, d);
                e.src = b.src;
            }
            function f() {
                j.advanced.updateOnSelectorChange === !0 && (j.advanced.updateOnSelectorChange = "*");
                var a = 0, b = m.find(j.advanced.updateOnSelectorChange);
                return j.advanced.updateOnSelectorChange && b.length > 0 && b.each(function() {
                    a += this.offsetHeight + this.offsetWidth;
                }), a;
            }
            function g(a) {
                clearTimeout(m[0].autoUpdate);
                l.update.call(null, h[0], a);
            }
            var h = a(this), i = h.data(c), j = i.opt, m = a("#mCSB_" + i.idx + "_container");
            if (b) {
                clearTimeout(m[0].autoUpdate);
                Z(m[0], "autoUpdate");
                return;
            }
            d();
        }, T = function(a, b, c) {
            return Math.round(a / b) * b - c;
        }, U = function(b) {
            var d = b.data(c), e = a("#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal");
            e.each(function() {
                Y.call(this);
            });
        }, V = function(b, d, e) {
            function f(a) {
                return i && j.callbacks[a] && "function" == typeof j.callbacks[a];
            }
            function g() {
                return [ j.callbacks.alwaysTriggerOffsets || t >= u[0] + w, j.callbacks.alwaysTriggerOffsets || t <= -y ];
            }
            function h() {
                var a = [ n[0].offsetTop, n[0].offsetLeft ], c = [ r[0].offsetTop, r[0].offsetLeft ], d = [ n.outerHeight(!1), n.outerWidth(!1) ], f = [ m.height(), m.width() ];
                b[0].mcs = {
                    content: n,
                    top: a[0],
                    left: a[1],
                    draggerTop: c[0],
                    draggerLeft: c[1],
                    topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(d[0]) - f[0])),
                    leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(d[1]) - f[1])),
                    direction: e.dir
                };
            }
            var i = b.data(c), j = i.opt, k = {
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: j.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }, e = a.extend(k, e), l = [ e.dur, e.drag ? 0 : e.dur ], m = a("#mCSB_" + i.idx), n = a("#mCSB_" + i.idx + "_container"), o = n.parent(), p = j.callbacks.onTotalScrollOffset ? Q.call(b, j.callbacks.onTotalScrollOffset) : [ 0, 0 ], q = j.callbacks.onTotalScrollBackOffset ? Q.call(b, j.callbacks.onTotalScrollBackOffset) : [ 0, 0 ];
            if (i.trigger = e.trigger, (0 !== o.scrollTop() || 0 !== o.scrollLeft()) && (a(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), 
            o.scrollTop(0).scrollLeft(0)), "_resetY" !== d || i.contentReset.y || (f("onOverflowYNone") && j.callbacks.onOverflowYNone.call(b[0]), 
            i.contentReset.y = 1), "_resetX" !== d || i.contentReset.x || (f("onOverflowXNone") && j.callbacks.onOverflowXNone.call(b[0]), 
            i.contentReset.x = 1), "_resetY" !== d && "_resetX" !== d) {
                (i.contentReset.y || !b[0].mcs) && i.overflowed[0] && (f("onOverflowY") && j.callbacks.onOverflowY.call(b[0]), 
                i.contentReset.x = null);
                (i.contentReset.x || !b[0].mcs) && i.overflowed[1] && (f("onOverflowX") && j.callbacks.onOverflowX.call(b[0]), 
                i.contentReset.x = null);
                j.snapAmount && (d = T(d, j.snapAmount, j.snapOffset));
                switch (e.dir) {
                  case "x":
                    var r = a("#mCSB_" + i.idx + "_dragger_horizontal"), s = "left", t = n[0].offsetLeft, u = [ m.width() - n.outerWidth(!1), r.parent().width() - r.width() ], v = [ d, 0 === d ? 0 : d / i.scrollRatio.x ], w = p[1], y = q[1], z = w > 0 ? w / i.scrollRatio.x : 0, A = y > 0 ? y / i.scrollRatio.x : 0;
                    break;

                  case "y":
                    var r = a("#mCSB_" + i.idx + "_dragger_vertical"), s = "top", t = n[0].offsetTop, u = [ m.height() - n.outerHeight(!1), r.parent().height() - r.height() ], v = [ d, 0 === d ? 0 : d / i.scrollRatio.y ], w = p[0], y = q[0], z = w > 0 ? w / i.scrollRatio.y : 0, A = y > 0 ? y / i.scrollRatio.y : 0;
                }
                (v[1] < 0 || 0 === v[0] && 0 === v[1] ? v = [ 0, 0 ] : v[1] >= u[1] ? v = [ u[0], u[1] ] : v[0] = -v[0], 
                b[0].mcs || (h(), f("onInit") && j.callbacks.onInit.call(b[0])), clearTimeout(n[0].onCompleteTimeout), 
                !i.tweenRunning && (0 === t && v[0] >= 0 || t === u[0] && v[0] <= u[0])) || (W(r[0], s, Math.round(v[1]), l[1], e.scrollEasing), 
                W(n[0], s, Math.round(v[0]), l[0], e.scrollEasing, e.overwrite, {
                    onStart: function() {
                        e.callbacks && e.onStart && !i.tweenRunning && (f("onScrollStart") && (h(), j.callbacks.onScrollStart.call(b[0])), 
                        i.tweenRunning = !0, x(r), i.cbOffsets = g());
                    },
                    onUpdate: function() {
                        e.callbacks && e.onUpdate && f("whileScrolling") && (h(), j.callbacks.whileScrolling.call(b[0]));
                    },
                    onComplete: function() {
                        if (e.callbacks && e.onComplete) {
                            "yx" === j.axis && clearTimeout(n[0].onCompleteTimeout);
                            var a = n[0].idleTimer || 0;
                            n[0].onCompleteTimeout = setTimeout(function() {
                                f("onScroll") && (h(), j.callbacks.onScroll.call(b[0]));
                                f("onTotalScroll") && v[1] >= u[1] - z && i.cbOffsets[0] && (h(), j.callbacks.onTotalScroll.call(b[0]));
                                f("onTotalScrollBack") && v[1] <= A && i.cbOffsets[1] && (h(), j.callbacks.onTotalScrollBack.call(b[0]));
                                i.tweenRunning = !1;
                                n[0].idleTimer = 0;
                                x(r, "hide");
                            }, a);
                        }
                    }
                }));
            }
        }, W = function(a, b, c, d, e, f, g) {
            function h() {
                w.stop || (s || n.call(), s = X() - q, i(), s >= w.time && (w.time = s > w.time ? s + r - (s - w.time) : s + r - 1, 
                w.time < s + 1 && (w.time = s + 1)), w.time < d ? w.id = v(h) : p.call());
            }
            function i() {
                d > 0 ? (w.currVal = l(w.time, t, m, d, e), u[b] = Math.round(w.currVal) + "px") : u[b] = c + "px";
                o.call();
            }
            function j() {
                r = 1e3 / 60;
                w.time = s + r;
                v = window.requestAnimationFrame ? window.requestAnimationFrame : function(a) {
                    return i(), setTimeout(a, .01);
                };
                w.id = v(h);
            }
            function k() {
                null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), 
                w.id = null);
            }
            function l(a, b, c, d, e) {
                switch (e) {
                  case "linear":
                  case "mcsLinear":
                    return c * a / d + b;

                  case "mcsLinearOut":
                    return a /= d, a--, c * Math.sqrt(1 - a * a) + b;

                  case "easeInOutSmooth":
                    return (a /= d / 2, a < 1) ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);

                  case "easeInOutStrong":
                    return (a /= d / 2, a < 1) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (-Math.pow(2, -10 * a) + 2) + b);

                  case "easeInOut":
                  case "mcsEaseInOut":
                    return (a /= d / 2, a < 1) ? c / 2 * a * a * a + b : (a -= 2, c / 2 * (a * a * a + 2) + b);

                  case "easeOutSmooth":
                    return a /= d, a--, -c * (a * a * a * a - 1) + b;

                  case "easeOutStrong":
                    return c * (-Math.pow(2, -10 * a / d) + 1) + b;

                  case "easeOut":
                  case "mcsEaseOut":
                  default:
                    var f = (a /= d) * a, g = f * a;
                    return b + c * (.499999999999997 * g * f + -2.5 * f * f + 5.5 * g + -6.5 * f + 4 * a);
                }
            }
            var m;
            a._mTween || (a._mTween = {
                top: {},
                left: {}
            });
            var g = g || {}, n = g.onStart || function() {}, o = g.onUpdate || function() {}, p = g.onComplete || function() {}, q = X(), r, s = 0, t = a.offsetTop, u = a.style, v, w = a._mTween[b];
            "left" === b && (t = a.offsetLeft);
            m = c - t;
            w.stop = 0;
            "none" !== f && k();
            j();
        }, X = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
        }, Y = function() {
            var a = this, b, c, d;
            for (a._mTween || (a._mTween = {
                top: {},
                left: {}
            }), b = [ "top", "left" ], c = 0; c < b.length; c++) d = b[c], a._mTween[d].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._mTween[d].id) : clearTimeout(a._mTween[d].id), 
            a._mTween[d].id = null, a._mTween[d].stop = 1);
        }, Z = function(a, b) {
            try {
                delete a[b];
            } catch (c) {
                a[b] = null;
            }
        }, $ = function(a) {
            return !(a.which && 1 !== a.which);
        }, _ = function(a) {
            var b = a.originalEvent.pointerType;
            return !(b && "touch" !== b && 2 !== b);
        }, ab = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        }, bb = function(a) {
            var b = a.parents(".mCSB_container");
            return [ a.offset().top - b.offset().top, a.offset().left - b.offset().left ];
        };
        a.fn[b] = function(b) {
            if (l[b]) return l[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" != typeof b && b) a.error("Method " + b + " does not exist"); else return l.init.apply(this, arguments);
        };
        a[b] = function(b) {
            if (l[b]) return l[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" != typeof b && b) a.error("Method " + b + " does not exist"); else return l.init.apply(this, arguments);
        };
        a[b].defaults = e;
        window[b] = !0;
        a(window).load(function() {
            a(d)[b]();
            a.extend(a.expr[":"], {
                mcsInView: a.expr[":"].mcsInView || function(b) {
                    var c = a(b), d = c.parents(".mCSB_container"), e, f;
                    if (d.length) return e = d.parent(), f = [ d[0].offsetTop, d[0].offsetLeft ], f[0] + bb(c)[0] >= 0 && f[0] + bb(c)[0] < e.height() - c.outerHeight(!1) && f[1] + bb(c)[1] >= 0 && f[1] + bb(c)[1] < e.width() - c.outerWidth(!1);
                },
                mcsOverflow: a.expr[":"].mcsOverflow || function(b) {
                    var d = a(b).data(c);
                    if (d) return d.overflowed[0] || d.overflowed[1];
                }
            });
        });
    });
});

$(document).ready(function() {
    function a() {
        "3" == $("#PaymentType").val() && $("#summForPayment").attr({
            value: ""
        });
        "2" == $("#PaymentType").val() ? $("#Tel").toggleClass("display-none") : ($("#Tel").addClass("display-none"), 
        $("#Tel").val(""));
    }
    $("#PaymentType").change(function() {
        a();
    });
});

$(document).ready(function() {
    $('a[href^="#price"]').click(function() {
        var a = $(this).attr("href");
        return $("body").animate({
            scrollTop: $(a).offset().top
        }, 1100), !1;
    });
});

$(document).ready(function() {
    $("#UserNameReg").focusout(function() {
        if ("" != $(this).val()) {
            var a = $(this);
            $.post("/Account/CheckLogin", {
                login: $(this).val()
            }, function(b) {
                "success" == b.result && 1 * b.error == 1 ? a.next().next().addClass("field-validation-error").html("Пользователь с данным логином уже существует") : a.next().next().removeClass("field-validation-error").html("");
            });
        }
    });
});

$(document).ready(function() {
    var a = window.location.search.toString(), b = a.slice(1), c;
    $('a[aria-controls^="' + b + '"]').trigger("click");
    c = $('a[aria-controls^="' + b + '"]').attr("data-src-collapse");
    $('a[aria-controls^="' + c + '"]').collapse("show");
    $("#" + c).collapse("show");
});

$(window).load(function() {
    0 === $.find("#price").length && $("#servicesAndPriseId").attr("href", "/#price");
});