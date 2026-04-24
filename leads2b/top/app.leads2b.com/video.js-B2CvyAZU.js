import {h as Nt, g as pn, ci as Jh} from "./vendor-DIc2GtcL.js";
var ri;
typeof window < "u" ? ri = window : typeof pn < "u" ? ri = pn : typeof self < "u" ? ri = self : ri = {};
var vs = ri;
const A = Nt(vs);
var uu = typeof pn < "u" ? pn : typeof window < "u" ? window : {}, Zh = Jh, ii;
typeof document < "u" ? ii = document : (ii = uu["__GLOBAL_DOCUMENT_CACHE@4"],
ii || (ii = uu["__GLOBAL_DOCUMENT_CACHE@4"] = Zh));
var Il = ii;
const V = Nt(Il);
function rt() {
    return rt = Object.assign ? Object.assign.bind() : function(a) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i])
        }
        return a
    }
    ,
    rt.apply(this, arguments)
}
function Y(a) {
    if (a === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}
function hi(a, t) {
    return hi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, e) {
        return i.__proto__ = e,
        i
    }
    ,
    hi(a, t)
}
function G(a, t) {
    a.prototype = Object.create(t.prototype),
    a.prototype.constructor = a,
    hi(a, t)
}
var ep = tp;
function tp(a, t) {
    var r, i = null;
    try {
        r = JSON.parse(a, t)
    } catch (e) {
        i = e
    }
    return [i, r]
}
const rp = Nt(ep);
var qa = {
    exports: {}
};
(function(a, t) {
    function r(u) {
        if (u && typeof u == "object") {
            var l = u.which || u.keyCode || u.charCode;
            l && (u = l)
        }
        if (typeof u == "number")
            return s[u];
        var c = String(u)
          , p = i[c.toLowerCase()];
        if (p)
            return p;
        var p = e[c.toLowerCase()];
        if (p)
            return p;
        if (c.length === 1)
            return c.charCodeAt(0)
    }
    r.isEventKey = function(l, c) {
        if (l && typeof l == "object") {
            var p = l.which || l.keyCode || l.charCode;
            if (p == null)
                return !1;
            if (typeof c == "string") {
                var g = i[c.toLowerCase()];
                if (g)
                    return g === p;
                var g = e[c.toLowerCase()];
                if (g)
                    return g === p
            } else if (typeof c == "number")
                return c === p;
            return !1
        }
    }
    ,
    t = a.exports = r;
    var i = t.code = t.codes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        "pause/break": 19,
        "caps lock": 20,
        esc: 27,
        space: 32,
        "page up": 33,
        "page down": 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        command: 91,
        "left command": 91,
        "right command": 93,
        "numpad *": 106,
        "numpad +": 107,
        "numpad -": 109,
        "numpad .": 110,
        "numpad /": 111,
        "num lock": 144,
        "scroll lock": 145,
        "my computer": 182,
        "my calculator": 183,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
    }
      , e = t.aliases = {
        windows: 91,
        "⇧": 16,
        "⌥": 18,
        "⌃": 17,
        "⌘": 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
    };
    /*!
 * Programatically add the following
 */
    for (n = 97; n < 123; n++)
        i[String.fromCharCode(n)] = n - 32;
    for (var n = 48; n < 58; n++)
        i[n - 48] = n;
    for (n = 1; n < 13; n++)
        i["f" + n] = n + 111;
    for (n = 0; n < 10; n++)
        i["numpad " + n] = n + 96;
    var s = t.names = t.title = {};
    for (n in i)
        s[i[n]] = n;
    for (var o in e)
        i[o] = e[o]
}
)(qa, qa.exports);
var ip = qa.exports;
const Q = Nt(ip);
var _s = {
    exports: {}
}
  , np = sp
  , ap = Object.prototype.toString;
function sp(a) {
    if (!a)
        return !1;
    var t = ap.call(a);
    return t === "[object Function]" || typeof a == "function" && t !== "[object RegExp]" || typeof window < "u" && (a === window.setTimeout || a === window.alert || a === window.confirm || a === window.prompt)
}
var Dl = vs
  , op = rt
  , up = np;
/**
 * @license
 * slighly modified parse-headers 2.0.2 <https://github.com/kesla/parse-headers/>
 * Copyright (c) 2014 David Björklund
 * Available under the MIT license
 * <https://github.com/kesla/parse-headers/blob/master/LICENCE>
 */
var lp = function(a) {
    var t = {};
    return a && a.trim().split(`
`).forEach(function(r) {
        var i = r.indexOf(":")
          , e = r.slice(0, i).trim().toLowerCase()
          , n = r.slice(i + 1).trim();
        typeof t[e] > "u" ? t[e] = n : Array.isArray(t[e]) ? t[e].push(n) : t[e] = [t[e], n]
    }),
    t
};
_s.exports = St;
_s.exports.default = St;
St.XMLHttpRequest = Dl.XMLHttpRequest || hp;
St.XDomainRequest = "withCredentials"in new St.XMLHttpRequest ? St.XMLHttpRequest : Dl.XDomainRequest;
dp(["get", "put", "post", "patch", "head", "delete"], function(a) {
    St[a === "delete" ? "del" : a] = function(t, r, i) {
        return r = Ol(t, r, i),
        r.method = a.toUpperCase(),
        Ll(r)
    }
});
function dp(a, t) {
    for (var r = 0; r < a.length; r++)
        t(a[r])
}
function cp(a) {
    for (var t in a)
        if (a.hasOwnProperty(t))
            return !1;
    return !0
}
function Ol(a, t, r) {
    var i = a;
    return up(t) ? (r = t,
    typeof a == "string" && (i = {
        uri: a
    })) : i = op({}, t, {
        uri: a
    }),
    i.callback = r,
    i
}
function St(a, t, r) {
    return t = Ol(a, t, r),
    Ll(t)
}
function Ll(a) {
    if (typeof a.callback > "u")
        throw new Error("callback argument missing");
    var t = !1
      , r = function(L, R, F) {
        t || (t = !0,
        a.callback(L, R, F))
    };
    function i() {
        o.readyState === 4 && setTimeout(s, 0)
    }
    function e() {
        var D = void 0;
        if (o.response ? D = o.response : D = o.responseText || fp(o),
        x)
            try {
                D = JSON.parse(D)
            } catch {}
        return D
    }
    function n(D) {
        return clearTimeout(b),
        D instanceof Error || (D = new Error("" + (D || "Unknown XMLHttpRequest Error"))),
        D.statusCode = 0,
        r(D, P)
    }
    function s() {
        if (!l) {
            var D;
            clearTimeout(b),
            a.useXDR && o.status === void 0 ? D = 200 : D = o.status === 1223 ? 204 : o.status;
            var L = P
              , R = null;
            return D !== 0 ? (L = {
                body: e(),
                statusCode: D,
                method: p,
                headers: {},
                url: c,
                rawRequest: o
            },
            o.getAllResponseHeaders && (L.headers = lp(o.getAllResponseHeaders()))) : R = new Error("Internal XMLHttpRequest Error"),
            r(R, L, L.body)
        }
    }
    var o = a.xhr || null;
    o || (a.cors || a.useXDR ? o = new St.XDomainRequest : o = new St.XMLHttpRequest);
    var u, l, c = o.url = a.uri || a.url, p = o.method = a.method || "GET", g = a.body || a.data, y = o.headers = a.headers || {}, S = !!a.sync, x = !1, b, P = {
        body: void 0,
        headers: {},
        statusCode: 0,
        method: p,
        url: c,
        rawRequest: o
    };
    if ("json"in a && a.json !== !1 && (x = !0,
    y.accept || y.Accept || (y.Accept = "application/json"),
    p !== "GET" && p !== "HEAD" && (y["content-type"] || y["Content-Type"] || (y["Content-Type"] = "application/json"),
    g = JSON.stringify(a.json === !0 ? g : a.json))),
    o.onreadystatechange = i,
    o.onload = s,
    o.onerror = n,
    o.onprogress = function() {}
    ,
    o.onabort = function() {
        l = !0
    }
    ,
    o.ontimeout = n,
    o.open(p, c, !S, a.username, a.password),
    S || (o.withCredentials = !!a.withCredentials),
    !S && a.timeout > 0 && (b = setTimeout(function() {
        if (!l) {
            l = !0,
            o.abort("timeout");
            var D = new Error("XMLHttpRequest timeout");
            D.code = "ETIMEDOUT",
            n(D)
        }
    }, a.timeout)),
    o.setRequestHeader)
        for (u in y)
            y.hasOwnProperty(u) && o.setRequestHeader(u, y[u]);
    else if (a.headers && !cp(a.headers))
        throw new Error("Headers cannot be set on an XDomainRequest object");
    return "responseType"in a && (o.responseType = a.responseType),
    "beforeSend"in a && typeof a.beforeSend == "function" && a.beforeSend(o),
    o.send(g || null),
    o
}
function fp(a) {
    try {
        if (a.responseType === "document")
            return a.responseXML;
        var t = a.responseXML && a.responseXML.documentElement.nodeName === "parsererror";
        if (a.responseType === "" && !t)
            return a.responseXML
    } catch {}
    return null
}
function hp() {}
var pp = _s.exports;
const Rl = Nt(pp);
var Ml = {
    exports: {}
}
  , lu = Il
  , ys = Object.create || function() {
    function a() {}
    return function(t) {
        if (arguments.length !== 1)
            throw new Error("Object.create shim only accepts one parameter.");
        return a.prototype = t,
        new a
    }
}();
function Qe(a, t) {
    this.name = "ParsingError",
    this.code = a.code,
    this.message = t || a.message
}
Qe.prototype = ys(Error.prototype);
Qe.prototype.constructor = Qe;
Qe.Errors = {
    BadSignature: {
        code: 0,
        message: "Malformed WebVTT signature."
    },
    BadTimeStamp: {
        code: 1,
        message: "Malformed time stamp."
    }
};
function Ts(a) {
    function t(i, e, n, s) {
        return (i | 0) * 3600 + (e | 0) * 60 + (n | 0) + (s | 0) / 1e3
    }
    var r = a.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/);
    return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
}
function li() {
    this.values = ys(null)
}
li.prototype = {
    set: function(a, t) {
        !this.get(a) && t !== "" && (this.values[a] = t)
    },
    get: function(a, t, r) {
        return r ? this.has(a) ? this.values[a] : t[r] : this.has(a) ? this.values[a] : t
    },
    has: function(a) {
        return a in this.values
    },
    alt: function(a, t, r) {
        for (var i = 0; i < r.length; ++i)
            if (t === r[i]) {
                this.set(a, t);
                break
            }
    },
    integer: function(a, t) {
        /^-?\d+$/.test(t) && this.set(a, parseInt(t, 10))
    },
    percent: function(a, t) {
        return t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t),
        t >= 0 && t <= 100) ? (this.set(a, t),
        !0) : !1
    }
};
function ni(a, t, r, i) {
    var e = i ? a.split(i) : [a];
    for (var n in e)
        if (typeof e[n] == "string") {
            var s = e[n].split(r);
            if (s.length === 2) {
                var o = s[0].trim()
                  , u = s[1].trim();
                t(o, u)
            }
        }
}
function mp(a, t, r) {
    var i = a;
    function e() {
        var o = Ts(a);
        if (o === null)
            throw new Qe(Qe.Errors.BadTimeStamp,"Malformed timestamp: " + i);
        return a = a.replace(/^[^\sa-zA-Z-]+/, ""),
        o
    }
    function n(o, u) {
        var l = new li;
        ni(o, function(c, p) {
            switch (c) {
            case "region":
                for (var g = r.length - 1; g >= 0; g--)
                    if (r[g].id === p) {
                        l.set(c, r[g].region);
                        break
                    }
                break;
            case "vertical":
                l.alt(c, p, ["rl", "lr"]);
                break;
            case "line":
                var y = p.split(",")
                  , S = y[0];
                l.integer(c, S),
                l.percent(c, S) && l.set("snapToLines", !1),
                l.alt(c, S, ["auto"]),
                y.length === 2 && l.alt("lineAlign", y[1], ["start", "center", "end"]);
                break;
            case "position":
                y = p.split(","),
                l.percent(c, y[0]),
                y.length === 2 && l.alt("positionAlign", y[1], ["start", "center", "end"]);
                break;
            case "size":
                l.percent(c, p);
                break;
            case "align":
                l.alt(c, p, ["start", "center", "end", "left", "right"]);
                break
            }
        }, /:/, /\s/),
        u.region = l.get("region", null),
        u.vertical = l.get("vertical", "");
        try {
            u.line = l.get("line", "auto")
        } catch {}
        u.lineAlign = l.get("lineAlign", "start"),
        u.snapToLines = l.get("snapToLines", !0),
        u.size = l.get("size", 100);
        try {
            u.align = l.get("align", "center")
        } catch {
            u.align = l.get("align", "middle")
        }
        try {
            u.position = l.get("position", "auto")
        } catch {
            u.position = l.get("position", {
                start: 0,
                left: 0,
                center: 50,
                middle: 50,
                end: 100,
                right: 100
            }, u.align)
        }
        u.positionAlign = l.get("positionAlign", {
            start: "start",
            left: "start",
            center: "center",
            middle: "center",
            end: "end",
            right: "end"
        }, u.align)
    }
    function s() {
        a = a.replace(/^\s+/, "")
    }
    if (s(),
    t.startTime = e(),
    s(),
    a.substr(0, 3) !== "-->")
        throw new Qe(Qe.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): " + i);
    a = a.substr(3),
    s(),
    t.endTime = e(),
    s(),
    n(a, t)
}
var Sa = lu.createElement && lu.createElement("textarea")
  , gp = {
    c: "span",
    i: "i",
    b: "b",
    u: "u",
    ruby: "ruby",
    rt: "rt",
    v: "span",
    lang: "span"
}
  , du = {
    white: "rgba(255,255,255,1)",
    lime: "rgba(0,255,0,1)",
    cyan: "rgba(0,255,255,1)",
    red: "rgba(255,0,0,1)",
    yellow: "rgba(255,255,0,1)",
    magenta: "rgba(255,0,255,1)",
    blue: "rgba(0,0,255,1)",
    black: "rgba(0,0,0,1)"
}
  , vp = {
    v: "title",
    lang: "lang"
}
  , cu = {
    rt: "ruby"
};
function Fl(a, t) {
    function r() {
        if (!t)
            return null;
        function S(b) {
            return t = t.substr(b.length),
            b
        }
        var x = t.match(/^([^<]*)(<[^>]*>?)?/);
        return S(x[1] ? x[1] : x[2])
    }
    function i(S) {
        return Sa.innerHTML = S,
        S = Sa.textContent,
        Sa.textContent = "",
        S
    }
    function e(S, x) {
        return !cu[x.localName] || cu[x.localName] === S.localName
    }
    function n(S, x) {
        var b = gp[S];
        if (!b)
            return null;
        var P = a.document.createElement(b)
          , D = vp[S];
        return D && x && (P[D] = x.trim()),
        P
    }
    for (var s = a.document.createElement("div"), o = s, u, l = []; (u = r()) !== null; ) {
        if (u[0] === "<") {
            if (u[1] === "/") {
                l.length && l[l.length - 1] === u.substr(2).replace(">", "") && (l.pop(),
                o = o.parentNode);
                continue
            }
            var c = Ts(u.substr(1, u.length - 2)), p;
            if (c) {
                p = a.document.createProcessingInstruction("timestamp", c),
                o.appendChild(p);
                continue
            }
            var g = u.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
            if (!g || (p = n(g[1], g[3]),
            !p) || !e(o, p))
                continue;
            if (g[2]) {
                var y = g[2].split(".");
                y.forEach(function(S) {
                    var x = /^bg_/.test(S)
                      , b = x ? S.slice(3) : S;
                    if (du.hasOwnProperty(b)) {
                        var P = x ? "background-color" : "color"
                          , D = du[b];
                        p.style[P] = D
                    }
                }),
                p.className = y.join(" ")
            }
            l.push(g[1]),
            o.appendChild(p),
            o = p;
            continue
        }
        o.appendChild(a.document.createTextNode(i(u)))
    }
    return s
}
var fu = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
function _p(a) {
    for (var t = 0; t < fu.length; t++) {
        var r = fu[t];
        if (a >= r[0] && a <= r[1])
            return !0
    }
    return !1
}
function yp(a) {
    var t = [], r = "", i;
    if (!a || !a.childNodes)
        return "ltr";
    function e(o, u) {
        for (var l = u.childNodes.length - 1; l >= 0; l--)
            o.push(u.childNodes[l])
    }
    function n(o) {
        if (!o || !o.length)
            return null;
        var u = o.pop()
          , l = u.textContent || u.innerText;
        if (l) {
            var c = l.match(/^.*(\n|\r)/);
            return c ? (o.length = 0,
            c[0]) : l
        }
        if (u.tagName === "ruby")
            return n(o);
        if (u.childNodes)
            return e(o, u),
            n(o)
    }
    for (e(t, a); r = n(t); )
        for (var s = 0; s < r.length; s++)
            if (i = r.charCodeAt(s),
            _p(i))
                return "rtl";
    return "ltr"
}
function Tp(a) {
    if (typeof a.line == "number" && (a.snapToLines || a.line >= 0 && a.line <= 100))
        return a.line;
    if (!a.track || !a.track.textTrackList || !a.track.textTrackList.mediaElement)
        return -1;
    for (var t = a.track, r = t.textTrackList, i = 0, e = 0; e < r.length && r[e] !== t; e++)
        r[e].mode === "showing" && i++;
    return ++i * -1
}
function Un() {}
Un.prototype.applyStyles = function(a, t) {
    t = t || this.div;
    for (var r in a)
        a.hasOwnProperty(r) && (t.style[r] = a[r])
}
;
Un.prototype.formatStyle = function(a, t) {
    return a === 0 ? 0 : a + t
}
;
function mn(a, t, r) {
    Un.call(this),
    this.cue = t,
    this.cueDiv = Fl(a, t.text);
    var i = {
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        position: "relative",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "inline",
        writingMode: t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl",
        unicodeBidi: "plaintext"
    };
    this.applyStyles(i, this.cueDiv),
    this.div = a.document.createElement("div"),
    i = {
        direction: yp(this.cueDiv),
        writingMode: t.vertical === "" ? "horizontal-tb" : t.vertical === "lr" ? "vertical-lr" : "vertical-rl",
        unicodeBidi: "plaintext",
        textAlign: t.align === "middle" ? "center" : t.align,
        font: r.font,
        whiteSpace: "pre-line",
        position: "absolute"
    },
    this.applyStyles(i),
    this.div.appendChild(this.cueDiv);
    var e = 0;
    switch (t.positionAlign) {
    case "start":
    case "line-left":
        e = t.position;
        break;
    case "center":
        e = t.position - t.size / 2;
        break;
    case "end":
    case "line-right":
        e = t.position - t.size;
        break
    }
    t.vertical === "" ? this.applyStyles({
        left: this.formatStyle(e, "%"),
        width: this.formatStyle(t.size, "%")
    }) : this.applyStyles({
        top: this.formatStyle(e, "%"),
        height: this.formatStyle(t.size, "%")
    }),
    this.move = function(n) {
        this.applyStyles({
            top: this.formatStyle(n.top, "px"),
            bottom: this.formatStyle(n.bottom, "px"),
            left: this.formatStyle(n.left, "px"),
            right: this.formatStyle(n.right, "px"),
            height: this.formatStyle(n.height, "px"),
            width: this.formatStyle(n.width, "px")
        })
    }
}
mn.prototype = ys(Un.prototype);
mn.prototype.constructor = mn;
function Ue(a) {
    var t, r, i, e;
    if (a.div) {
        r = a.div.offsetHeight,
        i = a.div.offsetWidth,
        e = a.div.offsetTop;
        var n = (n = a.div.childNodes) && (n = n[0]) && n.getClientRects && n.getClientRects();
        a = a.div.getBoundingClientRect(),
        t = n ? Math.max(n[0] && n[0].height || 0, a.height / n.length) : 0
    }
    this.left = a.left,
    this.right = a.right,
    this.top = a.top || e,
    this.height = a.height || r,
    this.bottom = a.bottom || e + (a.height || r),
    this.width = a.width || i,
    this.lineHeight = t !== void 0 ? t : a.lineHeight
}
Ue.prototype.move = function(a, t) {
    switch (t = t !== void 0 ? t : this.lineHeight,
    a) {
    case "+x":
        this.left += t,
        this.right += t;
        break;
    case "-x":
        this.left -= t,
        this.right -= t;
        break;
    case "+y":
        this.top += t,
        this.bottom += t;
        break;
    case "-y":
        this.top -= t,
        this.bottom -= t;
        break
    }
}
;
Ue.prototype.overlaps = function(a) {
    return this.left < a.right && this.right > a.left && this.top < a.bottom && this.bottom > a.top
}
;
Ue.prototype.overlapsAny = function(a) {
    for (var t = 0; t < a.length; t++)
        if (this.overlaps(a[t]))
            return !0;
    return !1
}
;
Ue.prototype.within = function(a) {
    return this.top >= a.top && this.bottom <= a.bottom && this.left >= a.left && this.right <= a.right
}
;
Ue.prototype.overlapsOppositeAxis = function(a, t) {
    switch (t) {
    case "+x":
        return this.left < a.left;
    case "-x":
        return this.right > a.right;
    case "+y":
        return this.top < a.top;
    case "-y":
        return this.bottom > a.bottom
    }
}
;
Ue.prototype.intersectPercentage = function(a) {
    var t = Math.max(0, Math.min(this.right, a.right) - Math.max(this.left, a.left))
      , r = Math.max(0, Math.min(this.bottom, a.bottom) - Math.max(this.top, a.top))
      , i = t * r;
    return i / (this.height * this.width)
}
;
Ue.prototype.toCSSCompatValues = function(a) {
    return {
        top: this.top - a.top,
        bottom: a.bottom - this.bottom,
        left: this.left - a.left,
        right: a.right - this.right,
        height: this.height,
        width: this.width
    }
}
;
Ue.getSimpleBoxPosition = function(a) {
    var t = a.div ? a.div.offsetHeight : a.tagName ? a.offsetHeight : 0
      , r = a.div ? a.div.offsetWidth : a.tagName ? a.offsetWidth : 0
      , i = a.div ? a.div.offsetTop : a.tagName ? a.offsetTop : 0;
    a = a.div ? a.div.getBoundingClientRect() : a.tagName ? a.getBoundingClientRect() : a;
    var e = {
        left: a.left,
        right: a.right,
        top: a.top || i,
        height: a.height || t,
        bottom: a.bottom || i + (a.height || t),
        width: a.width || r
    };
    return e
}
;
function bp(a, t, r, i) {
    function e(b, P) {
        for (var D, L = new Ue(b), R = 1, F = 0; F < P.length; F++) {
            for (; b.overlapsOppositeAxis(r, P[F]) || b.within(r) && b.overlapsAny(i); )
                b.move(P[F]);
            if (b.within(r))
                return b;
            var j = b.intersectPercentage(r);
            R > j && (D = new Ue(b),
            R = j),
            b = new Ue(L)
        }
        return D || L
    }
    var n = new Ue(t)
      , s = t.cue
      , o = Tp(s)
      , u = [];
    if (s.snapToLines) {
        var l;
        switch (s.vertical) {
        case "":
            u = ["+y", "-y"],
            l = "height";
            break;
        case "rl":
            u = ["+x", "-x"],
            l = "width";
            break;
        case "lr":
            u = ["-x", "+x"],
            l = "width";
            break
        }
        var c = n.lineHeight
          , p = c * Math.round(o)
          , g = r[l] + c
          , y = u[0];
        Math.abs(p) > g && (p = p < 0 ? -1 : 1,
        p *= Math.ceil(g / c) * c),
        o < 0 && (p += s.vertical === "" ? r.height : r.width,
        u = u.reverse()),
        n.move(y, p)
    } else {
        var S = n.lineHeight / r.height * 100;
        switch (s.lineAlign) {
        case "center":
            o -= S / 2;
            break;
        case "end":
            o -= S;
            break
        }
        switch (s.vertical) {
        case "":
            t.applyStyles({
                top: t.formatStyle(o, "%")
            });
            break;
        case "rl":
            t.applyStyles({
                left: t.formatStyle(o, "%")
            });
            break;
        case "lr":
            t.applyStyles({
                right: t.formatStyle(o, "%")
            });
            break
        }
        u = ["+y", "-x", "+x", "-y"],
        n = new Ue(t)
    }
    var x = e(n, u);
    t.move(x.toCSSCompatValues(r))
}
function Mr() {}
Mr.StringDecoder = function() {
    return {
        decode: function(a) {
            if (!a)
                return "";
            if (typeof a != "string")
                throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(a))
        }
    }
}
;
Mr.convertCueToDOMTree = function(a, t) {
    return !a || !t ? null : Fl(a, t)
}
;
var xp = .05
  , Sp = "sans-serif"
  , Ep = "1.5%";
Mr.processCues = function(a, t, r) {
    if (!a || !t || !r)
        return null;
    for (; r.firstChild; )
        r.removeChild(r.firstChild);
    var i = a.document.createElement("div");
    i.style.position = "absolute",
    i.style.left = "0",
    i.style.right = "0",
    i.style.top = "0",
    i.style.bottom = "0",
    i.style.margin = Ep,
    r.appendChild(i);
    function e(c) {
        for (var p = 0; p < c.length; p++)
            if (c[p].hasBeenReset || !c[p].displayState)
                return !0;
        return !1
    }
    if (!e(t)) {
        for (var n = 0; n < t.length; n++)
            i.appendChild(t[n].displayState);
        return
    }
    var s = []
      , o = Ue.getSimpleBoxPosition(i)
      , u = Math.round(o.height * xp * 100) / 100
      , l = {
        font: u + "px " + Sp
    };
    (function() {
        for (var c, p, g = 0; g < t.length; g++)
            p = t[g],
            c = new mn(a,p,l),
            i.appendChild(c.div),
            bp(a, c, o, s),
            p.displayState = c.div,
            s.push(Ue.getSimpleBoxPosition(c))
    }
    )()
}
;
Mr.Parser = function(a, t, r) {
    r || (r = t,
    t = {}),
    t || (t = {}),
    this.window = a,
    this.vttjs = t,
    this.state = "INITIAL",
    this.buffer = "",
    this.decoder = r || new TextDecoder("utf8"),
    this.regionList = []
}
;
Mr.Parser.prototype = {
    reportOrThrowError: function(a) {
        if (a instanceof Qe)
            this.onparsingerror && this.onparsingerror(a);
        else
            throw a
    },
    parse: function(a) {
        var t = this;
        a && (t.buffer += t.decoder.decode(a, {
            stream: !0
        }));
        function r() {
            for (var c = t.buffer, p = 0; p < c.length && c[p] !== "\r" && c[p] !== `
`; )
                ++p;
            var g = c.substr(0, p);
            return c[p] === "\r" && ++p,
            c[p] === `
` && ++p,
            t.buffer = c.substr(p),
            g
        }
        function i(c) {
            var p = new li;
            if (ni(c, function(y, S) {
                switch (y) {
                case "id":
                    p.set(y, S);
                    break;
                case "width":
                    p.percent(y, S);
                    break;
                case "lines":
                    p.integer(y, S);
                    break;
                case "regionanchor":
                case "viewportanchor":
                    var x = S.split(",");
                    if (x.length !== 2)
                        break;
                    var b = new li;
                    if (b.percent("x", x[0]),
                    b.percent("y", x[1]),
                    !b.has("x") || !b.has("y"))
                        break;
                    p.set(y + "X", b.get("x")),
                    p.set(y + "Y", b.get("y"));
                    break;
                case "scroll":
                    p.alt(y, S, ["up"]);
                    break
                }
            }, /=/, /\s/),
            p.has("id")) {
                var g = new (t.vttjs.VTTRegion || t.window.VTTRegion);
                g.width = p.get("width", 100),
                g.lines = p.get("lines", 3),
                g.regionAnchorX = p.get("regionanchorX", 0),
                g.regionAnchorY = p.get("regionanchorY", 100),
                g.viewportAnchorX = p.get("viewportanchorX", 0),
                g.viewportAnchorY = p.get("viewportanchorY", 100),
                g.scroll = p.get("scroll", ""),
                t.onregion && t.onregion(g),
                t.regionList.push({
                    id: p.get("id"),
                    region: g
                })
            }
        }
        function e(c) {
            var p = new li;
            ni(c, function(g, y) {
                switch (g) {
                case "MPEGT":
                    p.integer(g + "S", y);
                    break;
                case "LOCA":
                    p.set(g + "L", Ts(y));
                    break
                }
            }, /[^\d]:/, /,/),
            t.ontimestampmap && t.ontimestampmap({
                MPEGTS: p.get("MPEGTS"),
                LOCAL: p.get("LOCAL")
            })
        }
        function n(c) {
            c.match(/X-TIMESTAMP-MAP/) ? ni(c, function(p, g) {
                switch (p) {
                case "X-TIMESTAMP-MAP":
                    e(g);
                    break
                }
            }, /=/) : ni(c, function(p, g) {
                switch (p) {
                case "Region":
                    i(g);
                    break
                }
            }, /:/)
        }
        try {
            var s;
            if (t.state === "INITIAL") {
                if (!/\r\n|\n/.test(t.buffer))
                    return this;
                s = r();
                var o = s.match(/^WEBVTT([ \t].*)?$/);
                if (!o || !o[0])
                    throw new Qe(Qe.Errors.BadSignature);
                t.state = "HEADER"
            }
            for (var u = !1; t.buffer; ) {
                if (!/\r\n|\n/.test(t.buffer))
                    return this;
                switch (u ? u = !1 : s = r(),
                t.state) {
                case "HEADER":
                    /:/.test(s) ? n(s) : s || (t.state = "ID");
                    continue;
                case "NOTE":
                    s || (t.state = "ID");
                    continue;
                case "ID":
                    if (/^NOTE($|[ \t])/.test(s)) {
                        t.state = "NOTE";
                        break
                    }
                    if (!s)
                        continue;
                    t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0,0,"");
                    try {
                        t.cue.align = "center"
                    } catch {
                        t.cue.align = "middle"
                    }
                    if (t.state = "CUE",
                    s.indexOf("-->") === -1) {
                        t.cue.id = s;
                        continue
                    }
                case "CUE":
                    try {
                        mp(s, t.cue, t.regionList)
                    } catch (c) {
                        t.reportOrThrowError(c),
                        t.cue = null,
                        t.state = "BADCUE";
                        continue
                    }
                    t.state = "CUETEXT";
                    continue;
                case "CUETEXT":
                    var l = s.indexOf("-->") !== -1;
                    if (!s || l && (u = !0)) {
                        t.oncue && t.oncue(t.cue),
                        t.cue = null,
                        t.state = "ID";
                        continue
                    }
                    t.cue.text && (t.cue.text += `
`),
                    t.cue.text += s.replace(/\u2028/g, `
`).replace(/u2029/g, `
`);
                    continue;
                case "BADCUE":
                    s || (t.state = "ID");
                    continue
                }
            }
        } catch (c) {
            t.reportOrThrowError(c),
            t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue),
            t.cue = null,
            t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE"
        }
        return this
    },
    flush: function() {
        var a = this;
        try {
            if (a.buffer += a.decoder.decode(),
            (a.cue || a.state === "HEADER") && (a.buffer += `

`,
            a.parse()),
            a.state === "INITIAL")
                throw new Qe(Qe.Errors.BadSignature)
        } catch (t) {
            a.reportOrThrowError(t)
        }
        return a.onflush && a.onflush(),
        this
    }
};
var Cp = Mr
  , wp = "auto"
  , kp = {
    "": 1,
    lr: 1,
    rl: 1
}
  , Ap = {
    start: 1,
    center: 1,
    end: 1,
    left: 1,
    right: 1,
    auto: 1,
    "line-left": 1,
    "line-right": 1
};
function Pp(a) {
    if (typeof a != "string")
        return !1;
    var t = kp[a.toLowerCase()];
    return t ? a.toLowerCase() : !1
}
function Ea(a) {
    if (typeof a != "string")
        return !1;
    var t = Ap[a.toLowerCase()];
    return t ? a.toLowerCase() : !1
}
function Nl(a, t, r) {
    this.hasBeenReset = !1;
    var i = ""
      , e = !1
      , n = a
      , s = t
      , o = r
      , u = null
      , l = ""
      , c = !0
      , p = "auto"
      , g = "start"
      , y = "auto"
      , S = "auto"
      , x = 100
      , b = "center";
    Object.defineProperties(this, {
        id: {
            enumerable: !0,
            get: function() {
                return i
            },
            set: function(P) {
                i = "" + P
            }
        },
        pauseOnExit: {
            enumerable: !0,
            get: function() {
                return e
            },
            set: function(P) {
                e = !!P
            }
        },
        startTime: {
            enumerable: !0,
            get: function() {
                return n
            },
            set: function(P) {
                if (typeof P != "number")
                    throw new TypeError("Start time must be set to a number.");
                n = P,
                this.hasBeenReset = !0
            }
        },
        endTime: {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(P) {
                if (typeof P != "number")
                    throw new TypeError("End time must be set to a number.");
                s = P,
                this.hasBeenReset = !0
            }
        },
        text: {
            enumerable: !0,
            get: function() {
                return o
            },
            set: function(P) {
                o = "" + P,
                this.hasBeenReset = !0
            }
        },
        region: {
            enumerable: !0,
            get: function() {
                return u
            },
            set: function(P) {
                u = P,
                this.hasBeenReset = !0
            }
        },
        vertical: {
            enumerable: !0,
            get: function() {
                return l
            },
            set: function(P) {
                var D = Pp(P);
                if (D === !1)
                    throw new SyntaxError("Vertical: an invalid or illegal direction string was specified.");
                l = D,
                this.hasBeenReset = !0
            }
        },
        snapToLines: {
            enumerable: !0,
            get: function() {
                return c
            },
            set: function(P) {
                c = !!P,
                this.hasBeenReset = !0
            }
        },
        line: {
            enumerable: !0,
            get: function() {
                return p
            },
            set: function(P) {
                if (typeof P != "number" && P !== wp)
                    throw new SyntaxError("Line: an invalid number or illegal string was specified.");
                p = P,
                this.hasBeenReset = !0
            }
        },
        lineAlign: {
            enumerable: !0,
            get: function() {
                return g
            },
            set: function(P) {
                var D = Ea(P);
                D ? (g = D,
                this.hasBeenReset = !0) : console.warn("lineAlign: an invalid or illegal string was specified.")
            }
        },
        position: {
            enumerable: !0,
            get: function() {
                return y
            },
            set: function(P) {
                if (P < 0 || P > 100)
                    throw new Error("Position must be between 0 and 100.");
                y = P,
                this.hasBeenReset = !0
            }
        },
        positionAlign: {
            enumerable: !0,
            get: function() {
                return S
            },
            set: function(P) {
                var D = Ea(P);
                D ? (S = D,
                this.hasBeenReset = !0) : console.warn("positionAlign: an invalid or illegal string was specified.")
            }
        },
        size: {
            enumerable: !0,
            get: function() {
                return x
            },
            set: function(P) {
                if (P < 0 || P > 100)
                    throw new Error("Size must be between 0 and 100.");
                x = P,
                this.hasBeenReset = !0
            }
        },
        align: {
            enumerable: !0,
            get: function() {
                return b
            },
            set: function(P) {
                var D = Ea(P);
                if (!D)
                    throw new SyntaxError("align: an invalid or illegal alignment string was specified.");
                b = D,
                this.hasBeenReset = !0
            }
        }
    }),
    this.displayState = void 0
}
Nl.prototype.getCueAsHTML = function() {
    return WebVTT.convertCueToDOMTree(window, this.text)
}
;
var Ip = Nl
  , Dp = {
    "": !0,
    up: !0
};
function Op(a) {
    if (typeof a != "string")
        return !1;
    var t = Dp[a.toLowerCase()];
    return t ? a.toLowerCase() : !1
}
function Xr(a) {
    return typeof a == "number" && a >= 0 && a <= 100
}
function Lp() {
    var a = 100
      , t = 3
      , r = 0
      , i = 100
      , e = 0
      , n = 100
      , s = "";
    Object.defineProperties(this, {
        width: {
            enumerable: !0,
            get: function() {
                return a
            },
            set: function(o) {
                if (!Xr(o))
                    throw new Error("Width must be between 0 and 100.");
                a = o
            }
        },
        lines: {
            enumerable: !0,
            get: function() {
                return t
            },
            set: function(o) {
                if (typeof o != "number")
                    throw new TypeError("Lines must be set to a number.");
                t = o
            }
        },
        regionAnchorY: {
            enumerable: !0,
            get: function() {
                return i
            },
            set: function(o) {
                if (!Xr(o))
                    throw new Error("RegionAnchorX must be between 0 and 100.");
                i = o
            }
        },
        regionAnchorX: {
            enumerable: !0,
            get: function() {
                return r
            },
            set: function(o) {
                if (!Xr(o))
                    throw new Error("RegionAnchorY must be between 0 and 100.");
                r = o
            }
        },
        viewportAnchorY: {
            enumerable: !0,
            get: function() {
                return n
            },
            set: function(o) {
                if (!Xr(o))
                    throw new Error("ViewportAnchorY must be between 0 and 100.");
                n = o
            }
        },
        viewportAnchorX: {
            enumerable: !0,
            get: function() {
                return e
            },
            set: function(o) {
                if (!Xr(o))
                    throw new Error("ViewportAnchorX must be between 0 and 100.");
                e = o
            }
        },
        scroll: {
            enumerable: !0,
            get: function() {
                return s
            },
            set: function(o) {
                var u = Op(o);
                u === !1 ? console.warn("Scroll: an invalid or illegal string was specified.") : s = u
            }
        }
    })
}
var Rp = Lp
  , kt = vs
  , ir = Ml.exports = {
    WebVTT: Cp,
    VTTCue: Ip,
    VTTRegion: Rp
};
kt.vttjs = ir;
kt.WebVTT = ir.WebVTT;
var Mp = ir.VTTCue
  , Fp = ir.VTTRegion
  , Np = kt.VTTCue
  , Up = kt.VTTRegion;
ir.shim = function() {
    kt.VTTCue = Mp,
    kt.VTTRegion = Fp
}
;
ir.restore = function() {
    kt.VTTCue = Np,
    kt.VTTRegion = Up
}
;
kt.VTTCue || ir.shim();
var Bp = Ml.exports;
const hu = Nt(Bp);
function Ul() {
    try {
        var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ul = function() {
        return !!a
    }
    )()
}
function Hp(a, t, r) {
    if (Ul())
        return Reflect.construct.apply(null, arguments);
    var i = [null];
    i.push.apply(i, t);
    var e = new (a.bind.apply(a, i));
    return r && hi(e, r.prototype),
    e
}
function jp(a, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    a.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: a,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(a, "prototype", {
        writable: !1
    }),
    t && hi(a, t)
}
var Bl = {
    exports: {}
};
(function(a, t) {
    (function(r) {
        var i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/
          , e = /^(?=([^\/?#]*))\1([^]*)$/
          , n = /(?:\/|^)\.(?=\/)/g
          , s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g
          , o = {
            buildAbsoluteURL: function(u, l, c) {
                if (c = c || {},
                u = u.trim(),
                l = l.trim(),
                !l) {
                    if (!c.alwaysNormalize)
                        return u;
                    var p = o.parseURL(u);
                    if (!p)
                        throw new Error("Error trying to parse base URL.");
                    return p.path = o.normalizePath(p.path),
                    o.buildURLFromParts(p)
                }
                var g = o.parseURL(l);
                if (!g)
                    throw new Error("Error trying to parse relative URL.");
                if (g.scheme)
                    return c.alwaysNormalize ? (g.path = o.normalizePath(g.path),
                    o.buildURLFromParts(g)) : l;
                var y = o.parseURL(u);
                if (!y)
                    throw new Error("Error trying to parse base URL.");
                if (!y.netLoc && y.path && y.path[0] !== "/") {
                    var S = e.exec(y.path);
                    y.netLoc = S[1],
                    y.path = S[2]
                }
                y.netLoc && !y.path && (y.path = "/");
                var x = {
                    scheme: y.scheme,
                    netLoc: g.netLoc,
                    path: null,
                    params: g.params,
                    query: g.query,
                    fragment: g.fragment
                };
                if (!g.netLoc && (x.netLoc = y.netLoc,
                g.path[0] !== "/"))
                    if (!g.path)
                        x.path = y.path,
                        g.params || (x.params = y.params,
                        g.query || (x.query = y.query));
                    else {
                        var b = y.path
                          , P = b.substring(0, b.lastIndexOf("/") + 1) + g.path;
                        x.path = o.normalizePath(P)
                    }
                return x.path === null && (x.path = c.alwaysNormalize ? o.normalizePath(g.path) : g.path),
                o.buildURLFromParts(x)
            },
            parseURL: function(u) {
                var l = i.exec(u);
                return l ? {
                    scheme: l[1] || "",
                    netLoc: l[2] || "",
                    path: l[3] || "",
                    params: l[4] || "",
                    query: l[5] || "",
                    fragment: l[6] || ""
                } : null
            },
            normalizePath: function(u) {
                for (u = u.split("").reverse().join("").replace(n, ""); u.length !== (u = u.replace(s, "")).length; )
                    ;
                return u.split("").reverse().join("")
            },
            buildURLFromParts: function(u) {
                return u.scheme + u.netLoc + u.path + u.params + u.query + u.fragment
            }
        };
        a.exports = o
    }
    )()
}
)(Bl);
var Vp = Bl.exports;
const pu = Nt(Vp);
var mu = "http://example.com"
  , Bn = function(t, r) {
    if (/^[a-z]+:/i.test(r))
        return r;
    /^data:/.test(t) && (t = A.location && A.location.href || "");
    var i = typeof A.URL == "function"
      , e = /^\/\//.test(t)
      , n = !A.location && !/\/\//i.test(t);
    if (i ? t = new A.URL(t,A.location || mu) : /\/\//i.test(t) || (t = pu.buildAbsoluteURL(A.location && A.location.href || "", t)),
    i) {
        var s = new URL(r,t);
        return n ? s.href.slice(mu.length) : e ? s.href.slice(s.protocol.length) : s.href
    }
    return pu.buildAbsoluteURL(t, r)
}
  , bs = function() {
    function a() {
        this.listeners = {}
    }
    var t = a.prototype;
    return t.on = function(i, e) {
        this.listeners[i] || (this.listeners[i] = []),
        this.listeners[i].push(e)
    }
    ,
    t.off = function(i, e) {
        if (!this.listeners[i])
            return !1;
        var n = this.listeners[i].indexOf(e);
        return this.listeners[i] = this.listeners[i].slice(0),
        this.listeners[i].splice(n, 1),
        n > -1
    }
    ,
    t.trigger = function(i) {
        var e = this.listeners[i];
        if (e)
            if (arguments.length === 2)
                for (var n = e.length, s = 0; s < n; ++s)
                    e[s].call(this, arguments[1]);
            else
                for (var o = Array.prototype.slice.call(arguments, 1), u = e.length, l = 0; l < u; ++l)
                    e[l].apply(this, o)
    }
    ,
    t.dispose = function() {
        this.listeners = {}
    }
    ,
    t.pipe = function(i) {
        this.on("data", function(e) {
            i.push(e)
        })
    }
    ,
    a
}()
  , Wp = function(t) {
    return A.atob ? A.atob(t) : Buffer.from(t, "base64").toString("binary")
};
function Hl(a) {
    for (var t = Wp(a), r = new Uint8Array(t.length), i = 0; i < t.length; i++)
        r[i] = t.charCodeAt(i);
    return r
}
/*! @name m3u8-parser @version 4.7.0 @license Apache-2.0 */
var Gp = function(a) {
    G(t, a);
    function t() {
        var i;
        return i = a.call(this) || this,
        i.buffer = "",
        i
    }
    var r = t.prototype;
    return r.push = function(e) {
        var n;
        for (this.buffer += e,
        n = this.buffer.indexOf(`
`); n > -1; n = this.buffer.indexOf(`
`))
            this.trigger("data", this.buffer.substring(0, n)),
            this.buffer = this.buffer.substring(n + 1)
    }
    ,
    t
}(bs)
  , qp = "	"
  , Ca = function(t) {
    var r = /([0-9.]*)?@?([0-9.]*)?/.exec(t || "")
      , i = {};
    return r[1] && (i.length = parseInt(r[1], 10)),
    r[2] && (i.offset = parseInt(r[2], 10)),
    i
}
  , zp = function() {
    var t = "[^=]*"
      , r = '"[^"]*"|[^,]*'
      , i = "(?:" + t + ")=(?:" + r + ")";
    return new RegExp("(?:^|,)(" + i + ")")
}
  , at = function(t) {
    for (var r = t.split(zp()), i = {}, e = r.length, n; e--; )
        r[e] !== "" && (n = /([^=]*)=(.*)/.exec(r[e]).slice(1),
        n[0] = n[0].replace(/^\s+|\s+$/g, ""),
        n[1] = n[1].replace(/^\s+|\s+$/g, ""),
        n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1"),
        i[n[0]] = n[1]);
    return i
}
  , $p = function(a) {
    G(t, a);
    function t() {
        var i;
        return i = a.call(this) || this,
        i.customParsers = [],
        i.tagMappers = [],
        i
    }
    var r = t.prototype;
    return r.push = function(e) {
        var n = this, s, o;
        if (e = e.trim(),
        e.length !== 0) {
            if (e[0] !== "#") {
                this.trigger("data", {
                    type: "uri",
                    uri: e
                });
                return
            }
            var u = this.tagMappers.reduce(function(l, c) {
                var p = c(e);
                return p === e ? l : l.concat([p])
            }, [e]);
            u.forEach(function(l) {
                for (var c = 0; c < n.customParsers.length; c++)
                    if (n.customParsers[c].call(n, l))
                        return;
                if (l.indexOf("#EXT") !== 0) {
                    n.trigger("data", {
                        type: "comment",
                        text: l.slice(1)
                    });
                    return
                }
                if (l = l.replace("\r", ""),
                s = /^#EXTM3U/.exec(l),
                s) {
                    n.trigger("data", {
                        type: "tag",
                        tagType: "m3u"
                    });
                    return
                }
                if (s = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "inf"
                    },
                    s[1] && (o.duration = parseFloat(s[1])),
                    s[2] && (o.title = s[2]),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "targetduration"
                    },
                    s[1] && (o.duration = parseInt(s[1], 10)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "version"
                    },
                    s[1] && (o.version = parseInt(s[1], 10)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "media-sequence"
                    },
                    s[1] && (o.number = parseInt(s[1], 10)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "discontinuity-sequence"
                    },
                    s[1] && (o.number = parseInt(s[1], 10)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "playlist-type"
                    },
                    s[1] && (o.playlistType = s[1]),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-BYTERANGE:?(.*)?$/.exec(l),
                s) {
                    o = rt(Ca(s[1]), {
                        type: "tag",
                        tagType: "byterange"
                    }),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "allow-cache"
                    },
                    s[1] && (o.allowed = !/NO/.test(s[1])),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-MAP:?(.*)$/.exec(l),
                s) {
                    if (o = {
                        type: "tag",
                        tagType: "map"
                    },
                    s[1]) {
                        var p = at(s[1]);
                        p.URI && (o.uri = p.URI),
                        p.BYTERANGE && (o.byterange = Ca(p.BYTERANGE))
                    }
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-STREAM-INF:?(.*)$/.exec(l),
                s) {
                    if (o = {
                        type: "tag",
                        tagType: "stream-inf"
                    },
                    s[1]) {
                        if (o.attributes = at(s[1]),
                        o.attributes.RESOLUTION) {
                            var g = o.attributes.RESOLUTION.split("x")
                              , y = {};
                            g[0] && (y.width = parseInt(g[0], 10)),
                            g[1] && (y.height = parseInt(g[1], 10)),
                            o.attributes.RESOLUTION = y
                        }
                        o.attributes.BANDWIDTH && (o.attributes.BANDWIDTH = parseInt(o.attributes.BANDWIDTH, 10)),
                        o.attributes["PROGRAM-ID"] && (o.attributes["PROGRAM-ID"] = parseInt(o.attributes["PROGRAM-ID"], 10))
                    }
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-MEDIA:?(.*)$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "media"
                    },
                    s[1] && (o.attributes = at(s[1])),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-ENDLIST/.exec(l),
                s) {
                    n.trigger("data", {
                        type: "tag",
                        tagType: "endlist"
                    });
                    return
                }
                if (s = /^#EXT-X-DISCONTINUITY/.exec(l),
                s) {
                    n.trigger("data", {
                        type: "tag",
                        tagType: "discontinuity"
                    });
                    return
                }
                if (s = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "program-date-time"
                    },
                    s[1] && (o.dateTimeString = s[1],
                    o.dateTimeObject = new Date(s[1])),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-KEY:?(.*)$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "key"
                    },
                    s[1] && (o.attributes = at(s[1]),
                    o.attributes.IV && (o.attributes.IV.substring(0, 2).toLowerCase() === "0x" && (o.attributes.IV = o.attributes.IV.substring(2)),
                    o.attributes.IV = o.attributes.IV.match(/.{8}/g),
                    o.attributes.IV[0] = parseInt(o.attributes.IV[0], 16),
                    o.attributes.IV[1] = parseInt(o.attributes.IV[1], 16),
                    o.attributes.IV[2] = parseInt(o.attributes.IV[2], 16),
                    o.attributes.IV[3] = parseInt(o.attributes.IV[3], 16),
                    o.attributes.IV = new Uint32Array(o.attributes.IV))),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-START:?(.*)$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "start"
                    },
                    s[1] && (o.attributes = at(s[1]),
                    o.attributes["TIME-OFFSET"] = parseFloat(o.attributes["TIME-OFFSET"]),
                    o.attributes.PRECISE = /YES/.test(o.attributes.PRECISE)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "cue-out-cont"
                    },
                    s[1] ? o.data = s[1] : o.data = "",
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "cue-out"
                    },
                    s[1] ? o.data = s[1] : o.data = "",
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-CUE-IN:?(.*)?$/.exec(l),
                s) {
                    o = {
                        type: "tag",
                        tagType: "cue-in"
                    },
                    s[1] ? o.data = s[1] : o.data = "",
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-SKIP:(.*)$/.exec(l),
                s && s[1]) {
                    o = {
                        type: "tag",
                        tagType: "skip"
                    },
                    o.attributes = at(s[1]),
                    o.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (o.attributes["SKIPPED-SEGMENTS"] = parseInt(o.attributes["SKIPPED-SEGMENTS"], 10)),
                    o.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (o.attributes["RECENTLY-REMOVED-DATERANGES"] = o.attributes["RECENTLY-REMOVED-DATERANGES"].split(qp)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-PART:(.*)$/.exec(l),
                s && s[1]) {
                    o = {
                        type: "tag",
                        tagType: "part"
                    },
                    o.attributes = at(s[1]),
                    ["DURATION"].forEach(function(S) {
                        o.attributes.hasOwnProperty(S) && (o.attributes[S] = parseFloat(o.attributes[S]))
                    }),
                    ["INDEPENDENT", "GAP"].forEach(function(S) {
                        o.attributes.hasOwnProperty(S) && (o.attributes[S] = /YES/.test(o.attributes[S]))
                    }),
                    o.attributes.hasOwnProperty("BYTERANGE") && (o.attributes.byterange = Ca(o.attributes.BYTERANGE)),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(l),
                s && s[1]) {
                    o = {
                        type: "tag",
                        tagType: "server-control"
                    },
                    o.attributes = at(s[1]),
                    ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function(S) {
                        o.attributes.hasOwnProperty(S) && (o.attributes[S] = parseFloat(o.attributes[S]))
                    }),
                    ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function(S) {
                        o.attributes.hasOwnProperty(S) && (o.attributes[S] = /YES/.test(o.attributes[S]))
                    }),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-PART-INF:(.*)$/.exec(l),
                s && s[1]) {
                    o = {
                        type: "tag",
                        tagType: "part-inf"
                    },
                    o.attributes = at(s[1]),
                    ["PART-TARGET"].forEach(function(S) {
                        o.attributes.hasOwnProperty(S) && (o.attributes[S] = parseFloat(o.attributes[S]))
                    }),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(l),
                s && s[1]) {
                    o = {
                        type: "tag",
                        tagType: "preload-hint"
                    },
                    o.attributes = at(s[1]),
                    ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function(S) {
                        if (o.attributes.hasOwnProperty(S)) {
                            o.attributes[S] = parseInt(o.attributes[S], 10);
                            var x = S === "BYTERANGE-LENGTH" ? "length" : "offset";
                            o.attributes.byterange = o.attributes.byterange || {},
                            o.attributes.byterange[x] = o.attributes[S],
                            delete o.attributes[S]
                        }
                    }),
                    n.trigger("data", o);
                    return
                }
                if (s = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(l),
                s && s[1]) {
                    o = {
                        type: "tag",
                        tagType: "rendition-report"
                    },
                    o.attributes = at(s[1]),
                    ["LAST-MSN", "LAST-PART"].forEach(function(S) {
                        o.attributes.hasOwnProperty(S) && (o.attributes[S] = parseInt(o.attributes[S], 10))
                    }),
                    n.trigger("data", o);
                    return
                }
                n.trigger("data", {
                    type: "tag",
                    data: l.slice(4)
                })
            })
        }
    }
    ,
    r.addParser = function(e) {
        var n = this
          , s = e.expression
          , o = e.customType
          , u = e.dataParser
          , l = e.segment;
        typeof u != "function" && (u = function(p) {
            return p
        }
        ),
        this.customParsers.push(function(c) {
            var p = s.exec(c);
            if (p)
                return n.trigger("data", {
                    type: "custom",
                    data: u(c),
                    customType: o,
                    segment: l
                }),
                !0
        })
    }
    ,
    r.addTagMapper = function(e) {
        var n = e.expression
          , s = e.map
          , o = function(l) {
            return n.test(l) ? s(l) : l
        };
        this.tagMappers.push(o)
    }
    ,
    t
}(bs)
  , Kp = function(t) {
    return t.toLowerCase().replace(/-(\w)/g, function(r) {
        return r[1].toUpperCase()
    })
}
  , cr = function(t) {
    var r = {};
    return Object.keys(t).forEach(function(i) {
        r[Kp(i)] = t[i]
    }),
    r
}
  , wa = function(t) {
    var r = t.serverControl
      , i = t.targetDuration
      , e = t.partTargetDuration;
    if (r) {
        var n = "#EXT-X-SERVER-CONTROL"
          , s = "holdBack"
          , o = "partHoldBack"
          , u = i && i * 3
          , l = e && e * 2;
        i && !r.hasOwnProperty(s) && (r[s] = u,
        this.trigger("info", {
            message: n + " defaulting HOLD-BACK to targetDuration * 3 (" + u + ")."
        })),
        u && r[s] < u && (this.trigger("warn", {
            message: n + " clamping HOLD-BACK (" + r[s] + ") to targetDuration * 3 (" + u + ")"
        }),
        r[s] = u),
        e && !r.hasOwnProperty(o) && (r[o] = e * 3,
        this.trigger("info", {
            message: n + " defaulting PART-HOLD-BACK to partTargetDuration * 3 (" + r[o] + ")."
        })),
        e && r[o] < l && (this.trigger("warn", {
            message: n + " clamping PART-HOLD-BACK (" + r[o] + ") to partTargetDuration * 2 (" + l + ")."
        }),
        r[o] = l)
    }
}
  , Xp = function(a) {
    G(t, a);
    function t() {
        var i;
        i = a.call(this) || this,
        i.lineStream = new Gp,
        i.parseStream = new $p,
        i.lineStream.pipe(i.parseStream);
        var e = Y(i), n = [], s = {}, o, u, l = !1, c = function() {}, p = {
            AUDIO: {},
            VIDEO: {},
            "CLOSED-CAPTIONS": {},
            SUBTITLES: {}
        }, g = "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", y = 0;
        i.manifest = {
            allowCache: !0,
            discontinuityStarts: [],
            segments: []
        };
        var S = 0
          , x = 0;
        return i.on("end", function() {
            s.uri || !s.parts && !s.preloadHints || (!s.map && o && (s.map = o),
            !s.key && u && (s.key = u),
            !s.timeline && typeof y == "number" && (s.timeline = y),
            i.manifest.preloadSegment = s)
        }),
        i.parseStream.on("data", function(b) {
            var P, D;
            ({
                tag: function() {
                    ({
                        version: function() {
                            b.version && (this.manifest.version = b.version)
                        },
                        "allow-cache": function() {
                            this.manifest.allowCache = b.allowed,
                            "allowed"in b || (this.trigger("info", {
                                message: "defaulting allowCache to YES"
                            }),
                            this.manifest.allowCache = !0)
                        },
                        byterange: function() {
                            var F = {};
                            "length"in b && (s.byterange = F,
                            F.length = b.length,
                            "offset"in b || (b.offset = S)),
                            "offset"in b && (s.byterange = F,
                            F.offset = b.offset),
                            S = F.offset + F.length
                        },
                        endlist: function() {
                            this.manifest.endList = !0
                        },
                        inf: function() {
                            "mediaSequence"in this.manifest || (this.manifest.mediaSequence = 0,
                            this.trigger("info", {
                                message: "defaulting media sequence to zero"
                            })),
                            "discontinuitySequence"in this.manifest || (this.manifest.discontinuitySequence = 0,
                            this.trigger("info", {
                                message: "defaulting discontinuity sequence to zero"
                            })),
                            b.duration > 0 && (s.duration = b.duration),
                            b.duration === 0 && (s.duration = .01,
                            this.trigger("info", {
                                message: "updating zero segment duration to a small value"
                            })),
                            this.manifest.segments = n
                        },
                        key: function() {
                            if (!b.attributes) {
                                this.trigger("warn", {
                                    message: "ignoring key declaration without attribute list"
                                });
                                return
                            }
                            if (b.attributes.METHOD === "NONE") {
                                u = null;
                                return
                            }
                            if (!b.attributes.URI) {
                                this.trigger("warn", {
                                    message: "ignoring key declaration without URI"
                                });
                                return
                            }
                            if (b.attributes.KEYFORMAT === "com.apple.streamingkeydelivery") {
                                this.manifest.contentProtection = this.manifest.contentProtection || {},
                                this.manifest.contentProtection["com.apple.fps.1_0"] = {
                                    attributes: b.attributes
                                };
                                return
                            }
                            if (b.attributes.KEYFORMAT === g) {
                                var F = ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"];
                                if (F.indexOf(b.attributes.METHOD) === -1) {
                                    this.trigger("warn", {
                                        message: "invalid key method provided for Widevine"
                                    });
                                    return
                                }
                                if (b.attributes.METHOD === "SAMPLE-AES-CENC" && this.trigger("warn", {
                                    message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                                }),
                                b.attributes.URI.substring(0, 23) !== "data:text/plain;base64,") {
                                    this.trigger("warn", {
                                        message: "invalid key URI provided for Widevine"
                                    });
                                    return
                                }
                                if (!(b.attributes.KEYID && b.attributes.KEYID.substring(0, 2) === "0x")) {
                                    this.trigger("warn", {
                                        message: "invalid key ID provided for Widevine"
                                    });
                                    return
                                }
                                this.manifest.contentProtection = this.manifest.contentProtection || {},
                                this.manifest.contentProtection["com.widevine.alpha"] = {
                                    attributes: {
                                        schemeIdUri: b.attributes.KEYFORMAT,
                                        keyId: b.attributes.KEYID.substring(2)
                                    },
                                    pssh: Hl(b.attributes.URI.split(",")[1])
                                };
                                return
                            }
                            b.attributes.METHOD || this.trigger("warn", {
                                message: "defaulting key method to AES-128"
                            }),
                            u = {
                                method: b.attributes.METHOD || "AES-128",
                                uri: b.attributes.URI
                            },
                            typeof b.attributes.IV < "u" && (u.iv = b.attributes.IV)
                        },
                        "media-sequence": function() {
                            if (!isFinite(b.number)) {
                                this.trigger("warn", {
                                    message: "ignoring invalid media sequence: " + b.number
                                });
                                return
                            }
                            this.manifest.mediaSequence = b.number
                        },
                        "discontinuity-sequence": function() {
                            if (!isFinite(b.number)) {
                                this.trigger("warn", {
                                    message: "ignoring invalid discontinuity sequence: " + b.number
                                });
                                return
                            }
                            this.manifest.discontinuitySequence = b.number,
                            y = b.number
                        },
                        "playlist-type": function() {
                            if (!/VOD|EVENT/.test(b.playlistType)) {
                                this.trigger("warn", {
                                    message: "ignoring unknown playlist type: " + b.playlist
                                });
                                return
                            }
                            this.manifest.playlistType = b.playlistType
                        },
                        map: function() {
                            o = {},
                            b.uri && (o.uri = b.uri),
                            b.byterange && (o.byterange = b.byterange),
                            u && (o.key = u)
                        },
                        "stream-inf": function() {
                            if (this.manifest.playlists = n,
                            this.manifest.mediaGroups = this.manifest.mediaGroups || p,
                            !b.attributes) {
                                this.trigger("warn", {
                                    message: "ignoring empty stream-inf attributes"
                                });
                                return
                            }
                            s.attributes || (s.attributes = {}),
                            rt(s.attributes, b.attributes)
                        },
                        media: function() {
                            if (this.manifest.mediaGroups = this.manifest.mediaGroups || p,
                            !(b.attributes && b.attributes.TYPE && b.attributes["GROUP-ID"] && b.attributes.NAME)) {
                                this.trigger("warn", {
                                    message: "ignoring incomplete or missing media group"
                                });
                                return
                            }
                            var F = this.manifest.mediaGroups[b.attributes.TYPE];
                            F[b.attributes["GROUP-ID"]] = F[b.attributes["GROUP-ID"]] || {},
                            P = F[b.attributes["GROUP-ID"]],
                            D = {
                                default: /yes/i.test(b.attributes.DEFAULT)
                            },
                            D.default ? D.autoselect = !0 : D.autoselect = /yes/i.test(b.attributes.AUTOSELECT),
                            b.attributes.LANGUAGE && (D.language = b.attributes.LANGUAGE),
                            b.attributes.URI && (D.uri = b.attributes.URI),
                            b.attributes["INSTREAM-ID"] && (D.instreamId = b.attributes["INSTREAM-ID"]),
                            b.attributes.CHARACTERISTICS && (D.characteristics = b.attributes.CHARACTERISTICS),
                            b.attributes.FORCED && (D.forced = /yes/i.test(b.attributes.FORCED)),
                            P[b.attributes.NAME] = D
                        },
                        discontinuity: function() {
                            y += 1,
                            s.discontinuity = !0,
                            this.manifest.discontinuityStarts.push(n.length)
                        },
                        "program-date-time": function() {
                            typeof this.manifest.dateTimeString > "u" && (this.manifest.dateTimeString = b.dateTimeString,
                            this.manifest.dateTimeObject = b.dateTimeObject),
                            s.dateTimeString = b.dateTimeString,
                            s.dateTimeObject = b.dateTimeObject
                        },
                        targetduration: function() {
                            if (!isFinite(b.duration) || b.duration < 0) {
                                this.trigger("warn", {
                                    message: "ignoring invalid target duration: " + b.duration
                                });
                                return
                            }
                            this.manifest.targetDuration = b.duration,
                            wa.call(this, this.manifest)
                        },
                        start: function() {
                            if (!b.attributes || isNaN(b.attributes["TIME-OFFSET"])) {
                                this.trigger("warn", {
                                    message: "ignoring start declaration without appropriate attribute list"
                                });
                                return
                            }
                            this.manifest.start = {
                                timeOffset: b.attributes["TIME-OFFSET"],
                                precise: b.attributes.PRECISE
                            }
                        },
                        "cue-out": function() {
                            s.cueOut = b.data
                        },
                        "cue-out-cont": function() {
                            s.cueOutCont = b.data
                        },
                        "cue-in": function() {
                            s.cueIn = b.data
                        },
                        skip: function() {
                            this.manifest.skip = cr(b.attributes),
                            this.warnOnMissingAttributes_("#EXT-X-SKIP", b.attributes, ["SKIPPED-SEGMENTS"])
                        },
                        part: function() {
                            var F = this;
                            l = !0;
                            var j = this.manifest.segments.length
                              , B = cr(b.attributes);
                            s.parts = s.parts || [],
                            s.parts.push(B),
                            B.byterange && (B.byterange.hasOwnProperty("offset") || (B.byterange.offset = x),
                            x = B.byterange.offset + B.byterange.length);
                            var M = s.parts.length - 1;
                            this.warnOnMissingAttributes_("#EXT-X-PART #" + M + " for segment #" + j, b.attributes, ["URI", "DURATION"]),
                            this.manifest.renditionReports && this.manifest.renditionReports.forEach(function(H, ee) {
                                H.hasOwnProperty("lastPart") || F.trigger("warn", {
                                    message: "#EXT-X-RENDITION-REPORT #" + ee + " lacks required attribute(s): LAST-PART"
                                })
                            })
                        },
                        "server-control": function() {
                            var F = this.manifest.serverControl = cr(b.attributes);
                            F.hasOwnProperty("canBlockReload") || (F.canBlockReload = !1,
                            this.trigger("info", {
                                message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
                            })),
                            wa.call(this, this.manifest),
                            F.canSkipDateranges && !F.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                                message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
                            })
                        },
                        "preload-hint": function() {
                            var F = this.manifest.segments.length
                              , j = cr(b.attributes)
                              , B = j.type && j.type === "PART";
                            s.preloadHints = s.preloadHints || [],
                            s.preloadHints.push(j),
                            j.byterange && (j.byterange.hasOwnProperty("offset") || (j.byterange.offset = B ? x : 0,
                            B && (x = j.byterange.offset + j.byterange.length)));
                            var M = s.preloadHints.length - 1;
                            if (this.warnOnMissingAttributes_("#EXT-X-PRELOAD-HINT #" + M + " for segment #" + F, b.attributes, ["TYPE", "URI"]),
                            !!j.type)
                                for (var H = 0; H < s.preloadHints.length - 1; H++) {
                                    var ee = s.preloadHints[H];
                                    ee.type && ee.type === j.type && this.trigger("warn", {
                                        message: "#EXT-X-PRELOAD-HINT #" + M + " for segment #" + F + " has the same TYPE " + j.type + " as preload hint #" + H
                                    })
                                }
                        },
                        "rendition-report": function() {
                            var F = cr(b.attributes);
                            this.manifest.renditionReports = this.manifest.renditionReports || [],
                            this.manifest.renditionReports.push(F);
                            var j = this.manifest.renditionReports.length - 1
                              , B = ["LAST-MSN", "URI"];
                            l && B.push("LAST-PART"),
                            this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #" + j, b.attributes, B)
                        },
                        "part-inf": function() {
                            this.manifest.partInf = cr(b.attributes),
                            this.warnOnMissingAttributes_("#EXT-X-PART-INF", b.attributes, ["PART-TARGET"]),
                            this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget),
                            wa.call(this, this.manifest)
                        }
                    }[b.tagType] || c).call(e)
                },
                uri: function() {
                    s.uri = b.uri,
                    n.push(s),
                    this.manifest.targetDuration && !("duration"in s) && (this.trigger("warn", {
                        message: "defaulting segment duration to the target duration"
                    }),
                    s.duration = this.manifest.targetDuration),
                    u && (s.key = u),
                    s.timeline = y,
                    o && (s.map = o),
                    x = 0,
                    s = {}
                },
                comment: function() {},
                custom: function() {
                    b.segment ? (s.custom = s.custom || {},
                    s.custom[b.customType] = b.data) : (this.manifest.custom = this.manifest.custom || {},
                    this.manifest.custom[b.customType] = b.data)
                }
            })[b.type].call(e)
        }),
        i
    }
    var r = t.prototype;
    return r.warnOnMissingAttributes_ = function(e, n, s) {
        var o = [];
        s.forEach(function(u) {
            n.hasOwnProperty(u) || o.push(u)
        }),
        o.length && this.trigger("warn", {
            message: e + " lacks required attribute(s): " + o.join(", ")
        })
    }
    ,
    r.push = function(e) {
        this.lineStream.push(e)
    }
    ,
    r.end = function() {
        this.lineStream.push(`
`),
        this.trigger("end")
    }
    ,
    r.addParser = function(e) {
        this.parseStream.addParser(e)
    }
    ,
    r.addTagMapper = function(e) {
        this.parseStream.addTagMapper(e)
    }
    ,
    t
}(bs)
  , Qt = {
    mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
    webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
    ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
    video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
    audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
    text: /^(stpp.ttml.im1t)/,
    muxerVideo: /^(avc0?1)/,
    muxerAudio: /^(mp4a)/,
    muxerText: /a^/
}
  , Yp = ["video", "audio", "text"]
  , gu = ["Video", "Audio", "Text"]
  , jl = function(t) {
    return t && t.replace(/avc1\.(\d+)\.(\d+)/i, function(r, i, e) {
        var n = ("00" + Number(i).toString(16)).slice(-2)
          , s = ("00" + Number(e).toString(16)).slice(-2);
        return "avc1." + n + "00" + s
    })
}
  , ht = function(t) {
    t === void 0 && (t = "");
    var r = t.split(",")
      , i = [];
    return r.forEach(function(e) {
        e = e.trim();
        var n;
        Yp.forEach(function(s) {
            var o = Qt[s].exec(e.toLowerCase());
            if (!(!o || o.length <= 1)) {
                n = s;
                var u = e.substring(0, o[1].length)
                  , l = e.replace(u, "");
                i.push({
                    type: u,
                    details: l,
                    mediaType: s
                })
            }
        }),
        n || i.push({
            type: e,
            details: "",
            mediaType: "unknown"
        })
    }),
    i
}
  , Qp = function(t, r) {
    if (!t.mediaGroups.AUDIO || !r)
        return null;
    var i = t.mediaGroups.AUDIO[r];
    if (!i)
        return null;
    for (var e in i) {
        var n = i[e];
        if (n.default && n.playlists)
            return ht(n.playlists[0].attributes.CODECS)
    }
    return null
}
  , Vl = function(t) {
    return t === void 0 && (t = ""),
    Qt.audio.test(t.trim().toLowerCase())
}
  , Jp = function(t) {
    return t === void 0 && (t = ""),
    Qt.text.test(t.trim().toLowerCase())
}
  , pi = function(t) {
    if (!(!t || typeof t != "string")) {
        var r = t.toLowerCase().split(",").map(function(n) {
            return jl(n.trim())
        })
          , i = "video";
        r.length === 1 && Vl(r[0]) ? i = "audio" : r.length === 1 && Jp(r[0]) && (i = "application");
        var e = "mp4";
        return r.every(function(n) {
            return Qt.mp4.test(n)
        }) ? e = "mp4" : r.every(function(n) {
            return Qt.webm.test(n)
        }) ? e = "webm" : r.every(function(n) {
            return Qt.ogg.test(n)
        }) && (e = "ogg"),
        i + "/" + e + ';codecs="' + t + '"'
    }
}
  , ln = function(t) {
    return t === void 0 && (t = ""),
    A.MediaSource && A.MediaSource.isTypeSupported && A.MediaSource.isTypeSupported(pi(t)) || !1
}
  , ka = function(t) {
    return t === void 0 && (t = ""),
    t.toLowerCase().split(",").every(function(r) {
        r = r.trim();
        for (var i = 0; i < gu.length; i++) {
            var e = gu[i];
            if (Qt["muxer" + e].test(r))
                return !0
        }
        return !1
    })
}
  , vu = "mp4a.40.2"
  , Zp = "avc1.4d400d"
  , em = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i
  , tm = /^application\/dash\+xml/i
  , Wl = function(t) {
    return em.test(t) ? "hls" : tm.test(t) ? "dash" : t === "application/vnd.videojs.vhs+json" ? "vhs-json" : null
}
  , Gl = {};
Gl.entityMap = {
    lt: "<",
    gt: ">",
    amp: "&",
    quot: '"',
    apos: "'",
    Agrave: "À",
    Aacute: "Á",
    Acirc: "Â",
    Atilde: "Ã",
    Auml: "Ä",
    Aring: "Å",
    AElig: "Æ",
    Ccedil: "Ç",
    Egrave: "È",
    Eacute: "É",
    Ecirc: "Ê",
    Euml: "Ë",
    Igrave: "Ì",
    Iacute: "Í",
    Icirc: "Î",
    Iuml: "Ï",
    ETH: "Ð",
    Ntilde: "Ñ",
    Ograve: "Ò",
    Oacute: "Ó",
    Ocirc: "Ô",
    Otilde: "Õ",
    Ouml: "Ö",
    Oslash: "Ø",
    Ugrave: "Ù",
    Uacute: "Ú",
    Ucirc: "Û",
    Uuml: "Ü",
    Yacute: "Ý",
    THORN: "Þ",
    szlig: "ß",
    agrave: "à",
    aacute: "á",
    acirc: "â",
    atilde: "ã",
    auml: "ä",
    aring: "å",
    aelig: "æ",
    ccedil: "ç",
    egrave: "è",
    eacute: "é",
    ecirc: "ê",
    euml: "ë",
    igrave: "ì",
    iacute: "í",
    icirc: "î",
    iuml: "ï",
    eth: "ð",
    ntilde: "ñ",
    ograve: "ò",
    oacute: "ó",
    ocirc: "ô",
    otilde: "õ",
    ouml: "ö",
    oslash: "ø",
    ugrave: "ù",
    uacute: "ú",
    ucirc: "û",
    uuml: "ü",
    yacute: "ý",
    thorn: "þ",
    yuml: "ÿ",
    nbsp: " ",
    iexcl: "¡",
    cent: "¢",
    pound: "£",
    curren: "¤",
    yen: "¥",
    brvbar: "¦",
    sect: "§",
    uml: "¨",
    copy: "©",
    ordf: "ª",
    laquo: "«",
    not: "¬",
    shy: "­­",
    reg: "®",
    macr: "¯",
    deg: "°",
    plusmn: "±",
    sup2: "²",
    sup3: "³",
    acute: "´",
    micro: "µ",
    para: "¶",
    middot: "·",
    cedil: "¸",
    sup1: "¹",
    ordm: "º",
    raquo: "»",
    frac14: "¼",
    frac12: "½",
    frac34: "¾",
    iquest: "¿",
    times: "×",
    divide: "÷",
    forall: "∀",
    part: "∂",
    exist: "∃",
    empty: "∅",
    nabla: "∇",
    isin: "∈",
    notin: "∉",
    ni: "∋",
    prod: "∏",
    sum: "∑",
    minus: "−",
    lowast: "∗",
    radic: "√",
    prop: "∝",
    infin: "∞",
    ang: "∠",
    and: "∧",
    or: "∨",
    cap: "∩",
    cup: "∪",
    int: "∫",
    there4: "∴",
    sim: "∼",
    cong: "≅",
    asymp: "≈",
    ne: "≠",
    equiv: "≡",
    le: "≤",
    ge: "≥",
    sub: "⊂",
    sup: "⊃",
    nsub: "⊄",
    sube: "⊆",
    supe: "⊇",
    oplus: "⊕",
    otimes: "⊗",
    perp: "⊥",
    sdot: "⋅",
    Alpha: "Α",
    Beta: "Β",
    Gamma: "Γ",
    Delta: "Δ",
    Epsilon: "Ε",
    Zeta: "Ζ",
    Eta: "Η",
    Theta: "Θ",
    Iota: "Ι",
    Kappa: "Κ",
    Lambda: "Λ",
    Mu: "Μ",
    Nu: "Ν",
    Xi: "Ξ",
    Omicron: "Ο",
    Pi: "Π",
    Rho: "Ρ",
    Sigma: "Σ",
    Tau: "Τ",
    Upsilon: "Υ",
    Phi: "Φ",
    Chi: "Χ",
    Psi: "Ψ",
    Omega: "Ω",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    delta: "δ",
    epsilon: "ε",
    zeta: "ζ",
    eta: "η",
    theta: "θ",
    iota: "ι",
    kappa: "κ",
    lambda: "λ",
    mu: "μ",
    nu: "ν",
    xi: "ξ",
    omicron: "ο",
    pi: "π",
    rho: "ρ",
    sigmaf: "ς",
    sigma: "σ",
    tau: "τ",
    upsilon: "υ",
    phi: "φ",
    chi: "χ",
    psi: "ψ",
    omega: "ω",
    thetasym: "ϑ",
    upsih: "ϒ",
    piv: "ϖ",
    OElig: "Œ",
    oelig: "œ",
    Scaron: "Š",
    scaron: "š",
    Yuml: "Ÿ",
    fnof: "ƒ",
    circ: "ˆ",
    tilde: "˜",
    ensp: " ",
    emsp: " ",
    thinsp: " ",
    zwnj: "‌",
    zwj: "‍",
    lrm: "‎",
    rlm: "‏",
    ndash: "–",
    mdash: "—",
    lsquo: "‘",
    rsquo: "’",
    sbquo: "‚",
    ldquo: "“",
    rdquo: "”",
    bdquo: "„",
    dagger: "†",
    Dagger: "‡",
    bull: "•",
    hellip: "…",
    permil: "‰",
    prime: "′",
    Prime: "″",
    lsaquo: "‹",
    rsaquo: "›",
    oline: "‾",
    euro: "€",
    trade: "™",
    larr: "←",
    uarr: "↑",
    rarr: "→",
    darr: "↓",
    harr: "↔",
    crarr: "↵",
    lceil: "⌈",
    rceil: "⌉",
    lfloor: "⌊",
    rfloor: "⌋",
    loz: "◊",
    spades: "♠",
    clubs: "♣",
    hearts: "♥",
    diams: "♦"
};
var xs = {}
  , za = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  , _u = new RegExp("[\\-\\.0-9" + za.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]")
  , yu = new RegExp("^" + za.source + _u.source + "*(?::" + za.source + _u.source + "*)?$")
  , Yr = 0
  , Lt = 1
  , fr = 2
  , Qr = 3
  , hr = 4
  , pr = 5
  , Jr = 6
  , Qi = 7;
function Sr(a, t) {
    this.message = a,
    this.locator = t,
    Error.captureStackTrace && Error.captureStackTrace(this, Sr)
}
Sr.prototype = new Error;
Sr.prototype.name = Sr.name;
function ql() {}
ql.prototype = {
    parse: function(a, t, r) {
        var i = this.domBuilder;
        i.startDocument(),
        zl(t, t = {}),
        rm(a, t, r, i, this.errorHandler),
        i.endDocument()
    }
};
function rm(a, t, r, i, e) {
    function n(ae) {
        if (ae > 65535) {
            ae -= 65536;
            var se = 55296 + (ae >> 10)
              , $e = 56320 + (ae & 1023);
            return String.fromCharCode(se, $e)
        } else
            return String.fromCharCode(ae)
    }
    function s(ae) {
        var se = ae.slice(1, -1);
        return se in r ? r[se] : se.charAt(0) === "#" ? n(parseInt(se.substr(1).replace("x", "0x"))) : (e.error("entity not found:" + ae),
        ae)
    }
    function o(ae) {
        if (ae > x) {
            var se = a.substring(x, ae).replace(/&#?\w+;/g, s);
            g && u(x),
            i.characters(se, 0, ae - x),
            x = ae
        }
    }
    function u(ae, se) {
        for (; ae >= c && (se = p.exec(a)); )
            l = se.index,
            c = l + se[0].length,
            g.lineNumber++;
        g.columnNumber = ae - l + 1
    }
    for (var l = 0, c = 0, p = /.*(?:\r\n?|\n)|.*$/g, g = i.locator, y = [{
        currentNSMap: t
    }], S = {}, x = 0; ; ) {
        try {
            var b = a.indexOf("<", x);
            if (b < 0) {
                if (!a.substr(x).match(/^\s*$/)) {
                    var P = i.doc
                      , D = P.createTextNode(a.substr(x));
                    P.appendChild(D),
                    i.currentElement = D
                }
                return
            }
            switch (b > x && o(b),
            a.charAt(b + 1)) {
            case "/":
                var J = a.indexOf(">", b + 3)
                  , L = a.substring(b + 2, J)
                  , R = y.pop();
                J < 0 ? (L = a.substring(b + 2).replace(/[\s<].*/, ""),
                e.error("end tag name: " + L + " is not complete:" + R.tagName),
                J = b + 1 + L.length) : L.match(/\s</) && (L = L.replace(/[\s<].*/, ""),
                e.error("end tag name: " + L + " maybe not complete"),
                J = b + 1 + L.length);
                var F = R.localNSMap
                  , j = R.tagName == L
                  , B = j || R.tagName && R.tagName.toLowerCase() == L.toLowerCase();
                if (B) {
                    if (i.endElement(R.uri, R.localName, L),
                    F)
                        for (var M in F)
                            i.endPrefixMapping(M);
                    j || e.fatalError("end tag name: " + L + " is not match the current start tagName:" + R.tagName)
                } else
                    y.push(R);
                J++;
                break;
            case "?":
                g && u(b),
                J = om(a, b, i);
                break;
            case "!":
                g && u(b),
                J = sm(a, b, i, e);
                break;
            default:
                g && u(b);
                var H = new $l
                  , ee = y[y.length - 1].currentNSMap
                  , J = im(a, b, H, ee, s, e)
                  , me = H.length;
                if (!H.closed && am(a, J, H.tagName, S) && (H.closed = !0,
                r.nbsp || e.warning("unclosed xml attribute")),
                g && me) {
                    for (var le = Tu(g, {}), be = 0; be < me; be++) {
                        var te = H[be];
                        u(te.offset),
                        te.locator = Tu(g, {})
                    }
                    i.locator = le,
                    bu(H, i, ee) && y.push(H),
                    i.locator = g
                } else
                    bu(H, i, ee) && y.push(H);
                H.uri === "http://www.w3.org/1999/xhtml" && !H.closed ? J = nm(a, J, H.tagName, s, i) : J++
            }
        } catch (ae) {
            if (ae instanceof Sr)
                throw ae;
            e.error("element parse error: " + ae),
            J = -1
        }
        J > x ? x = J : o(Math.max(b, x) + 1)
    }
}
function Tu(a, t) {
    return t.lineNumber = a.lineNumber,
    t.columnNumber = a.columnNumber,
    t
}
function im(a, t, r, i, e, n) {
    function s(g, y, S) {
        g in r.attributeNames && n.fatalError("Attribute " + g + " redefined"),
        r.addValue(g, y, S)
    }
    for (var o, u, l = ++t, c = Yr; ; ) {
        var p = a.charAt(l);
        switch (p) {
        case "=":
            if (c === Lt)
                o = a.slice(t, l),
                c = Qr;
            else if (c === fr)
                c = Qr;
            else
                throw new Error("attribute equal must after attrName");
            break;
        case "'":
        case '"':
            if (c === Qr || c === Lt)
                if (c === Lt && (n.warning('attribute value must after "="'),
                o = a.slice(t, l)),
                t = l + 1,
                l = a.indexOf(p, t),
                l > 0)
                    u = a.slice(t, l).replace(/&#?\w+;/g, e),
                    s(o, u, t - 1),
                    c = pr;
                else
                    throw new Error("attribute value no end '" + p + "' match");
            else if (c == hr)
                u = a.slice(t, l).replace(/&#?\w+;/g, e),
                s(o, u, t),
                n.warning('attribute "' + o + '" missed start quot(' + p + ")!!"),
                t = l + 1,
                c = pr;
            else
                throw new Error('attribute value must after "="');
            break;
        case "/":
            switch (c) {
            case Yr:
                r.setTagName(a.slice(t, l));
            case pr:
            case Jr:
            case Qi:
                c = Qi,
                r.closed = !0;
            case hr:
            case Lt:
            case fr:
                break;
            default:
                throw new Error("attribute invalid close char('/')")
            }
            break;
        case "":
            return n.error("unexpected end of input"),
            c == Yr && r.setTagName(a.slice(t, l)),
            l;
        case ">":
            switch (c) {
            case Yr:
                r.setTagName(a.slice(t, l));
            case pr:
            case Jr:
            case Qi:
                break;
            case hr:
            case Lt:
                u = a.slice(t, l),
                u.slice(-1) === "/" && (r.closed = !0,
                u = u.slice(0, -1));
            case fr:
                c === fr && (u = o),
                c == hr ? (n.warning('attribute "' + u + '" missed quot(")!'),
                s(o, u.replace(/&#?\w+;/g, e), t)) : ((i[""] !== "http://www.w3.org/1999/xhtml" || !u.match(/^(?:disabled|checked|selected)$/i)) && n.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'),
                s(u, u, t));
                break;
            case Qr:
                throw new Error("attribute value missed!!")
            }
            return l;
        case "":
            p = " ";
        default:
            if (p <= " ")
                switch (c) {
                case Yr:
                    r.setTagName(a.slice(t, l)),
                    c = Jr;
                    break;
                case Lt:
                    o = a.slice(t, l),
                    c = fr;
                    break;
                case hr:
                    var u = a.slice(t, l).replace(/&#?\w+;/g, e);
                    n.warning('attribute "' + u + '" missed quot(")!!'),
                    s(o, u, t);
                case pr:
                    c = Jr;
                    break
                }
            else
                switch (c) {
                case fr:
                    r.tagName,
                    (i[""] !== "http://www.w3.org/1999/xhtml" || !o.match(/^(?:disabled|checked|selected)$/i)) && n.warning('attribute "' + o + '" missed value!! "' + o + '" instead2!!'),
                    s(o, o, t),
                    t = l,
                    c = Lt;
                    break;
                case pr:
                    n.warning('attribute space is required"' + o + '"!!');
                case Jr:
                    c = Lt,
                    t = l;
                    break;
                case Qr:
                    c = hr,
                    t = l;
                    break;
                case Qi:
                    throw new Error("elements closed character '/' and '>' must be connected to")
                }
        }
        l++
    }
}
function bu(a, t, r) {
    for (var i = a.tagName, e = null, p = a.length; p--; ) {
        var n = a[p]
          , s = n.qName
          , o = n.value
          , g = s.indexOf(":");
        if (g > 0)
            var u = n.prefix = s.slice(0, g)
              , l = s.slice(g + 1)
              , c = u === "xmlns" && l;
        else
            l = s,
            u = null,
            c = s === "xmlns" && "";
        n.localName = l,
        c !== !1 && (e == null && (e = {},
        zl(r, r = {})),
        r[c] = e[c] = o,
        n.uri = "http://www.w3.org/2000/xmlns/",
        t.startPrefixMapping(c, o))
    }
    for (var p = a.length; p--; ) {
        n = a[p];
        var u = n.prefix;
        u && (u === "xml" && (n.uri = "http://www.w3.org/XML/1998/namespace"),
        u !== "xmlns" && (n.uri = r[u || ""]))
    }
    var g = i.indexOf(":");
    g > 0 ? (u = a.prefix = i.slice(0, g),
    l = a.localName = i.slice(g + 1)) : (u = null,
    l = a.localName = i);
    var y = a.uri = r[u || ""];
    if (t.startElement(y, l, i, a),
    a.closed) {
        if (t.endElement(y, l, i),
        e)
            for (u in e)
                t.endPrefixMapping(u)
    } else
        return a.currentNSMap = r,
        a.localNSMap = e,
        !0
}
function nm(a, t, r, i, e) {
    if (/^(?:script|textarea)$/i.test(r)) {
        var n = a.indexOf("</" + r + ">", t)
          , s = a.substring(t + 1, n);
        if (/[&<]/.test(s))
            return /^script$/i.test(r) ? (e.characters(s, 0, s.length),
            n) : (s = s.replace(/&#?\w+;/g, i),
            e.characters(s, 0, s.length),
            n)
    }
    return t + 1
}
function am(a, t, r, i) {
    var e = i[r];
    return e == null && (e = a.lastIndexOf("</" + r + ">"),
    e < t && (e = a.lastIndexOf("</" + r)),
    i[r] = e),
    e < t
}
function zl(a, t) {
    for (var r in a)
        t[r] = a[r]
}
function sm(a, t, r, i) {
    var e = a.charAt(t + 2);
    switch (e) {
    case "-":
        if (a.charAt(t + 3) === "-") {
            var n = a.indexOf("-->", t + 4);
            return n > t ? (r.comment(a, t + 4, n - t - 4),
            n + 3) : (i.error("Unclosed comment"),
            -1)
        } else
            return -1;
    default:
        if (a.substr(t + 3, 6) == "CDATA[") {
            var n = a.indexOf("]]>", t + 9);
            return r.startCDATA(),
            r.characters(a, t + 9, n - t - 9),
            r.endCDATA(),
            n + 3
        }
        var s = um(a, t)
          , o = s.length;
        if (o > 1 && /!doctype/i.test(s[0][0])) {
            var u = s[1][0]
              , l = !1
              , c = !1;
            o > 3 && (/^public$/i.test(s[2][0]) ? (l = s[3][0],
            c = o > 4 && s[4][0]) : /^system$/i.test(s[2][0]) && (c = s[3][0]));
            var p = s[o - 1];
            return r.startDTD(u, l, c),
            r.endDTD(),
            p.index + p[0].length
        }
    }
    return -1
}
function om(a, t, r) {
    var i = a.indexOf("?>", t);
    if (i) {
        var e = a.substring(t, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        return e ? (e[0].length,
        r.processingInstruction(e[1], e[2]),
        i + 2) : -1
    }
    return -1
}
function $l() {
    this.attributeNames = {}
}
$l.prototype = {
    setTagName: function(a) {
        if (!yu.test(a))
            throw new Error("invalid tagName:" + a);
        this.tagName = a
    },
    addValue: function(a, t, r) {
        if (!yu.test(a))
            throw new Error("invalid attribute:" + a);
        this.attributeNames[a] = this.length,
        this[this.length++] = {
            qName: a,
            value: t,
            offset: r
        }
    },
    length: 0,
    getLocalName: function(a) {
        return this[a].localName
    },
    getLocator: function(a) {
        return this[a].locator
    },
    getQName: function(a) {
        return this[a].qName
    },
    getURI: function(a) {
        return this[a].uri
    },
    getValue: function(a) {
        return this[a].value
    }
};
function um(a, t) {
    var r, i = [], e = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (e.lastIndex = t,
    e.exec(a); r = e.exec(a); )
        if (i.push(r),
        r[1])
            return i
}
xs.XMLReader = ql;
xs.ParseError = Sr;
var xi = {};
function Si(a, t) {
    for (var r in a)
        t[r] = a[r]
}
function qe(a, t) {
    var r = a.prototype;
    if (!(r instanceof t)) {
        let i = function() {};
        i.prototype = t.prototype,
        i = new i,
        Si(r, i),
        a.prototype = r = i
    }
    r.constructor != a && (typeof a != "function" && console.error("unknow Class:" + a),
    r.constructor = a)
}
var lm = "http://www.w3.org/1999/xhtml"
  , ze = {}
  , ot = ze.ELEMENT_NODE = 1
  , Er = ze.ATTRIBUTE_NODE = 2
  , gn = ze.TEXT_NODE = 3
  , Kl = ze.CDATA_SECTION_NODE = 4
  , Xl = ze.ENTITY_REFERENCE_NODE = 5
  , dm = ze.ENTITY_NODE = 6
  , Yl = ze.PROCESSING_INSTRUCTION_NODE = 7
  , Ql = ze.COMMENT_NODE = 8
  , Jl = ze.DOCUMENT_NODE = 9
  , Zl = ze.DOCUMENT_TYPE_NODE = 10
  , At = ze.DOCUMENT_FRAGMENT_NODE = 11
  , cm = ze.NOTATION_NODE = 12
  , Le = {}
  , we = {};
Le.INDEX_SIZE_ERR = (we[1] = "Index size error",
1);
Le.DOMSTRING_SIZE_ERR = (we[2] = "DOMString size error",
2);
var fm = Le.HIERARCHY_REQUEST_ERR = (we[3] = "Hierarchy request error",
3);
Le.WRONG_DOCUMENT_ERR = (we[4] = "Wrong document",
4);
Le.INVALID_CHARACTER_ERR = (we[5] = "Invalid character",
5);
Le.NO_DATA_ALLOWED_ERR = (we[6] = "No data allowed",
6);
Le.NO_MODIFICATION_ALLOWED_ERR = (we[7] = "No modification allowed",
7);
var hm = Le.NOT_FOUND_ERR = (we[8] = "Not found",
8);
Le.NOT_SUPPORTED_ERR = (we[9] = "Not supported",
9);
var xu = Le.INUSE_ATTRIBUTE_ERR = (we[10] = "Attribute in use",
10);
Le.INVALID_STATE_ERR = (we[11] = "Invalid state",
11);
Le.SYNTAX_ERR = (we[12] = "Syntax error",
12);
Le.INVALID_MODIFICATION_ERR = (we[13] = "Invalid modification",
13);
Le.NAMESPACE_ERR = (we[14] = "Invalid namespace",
14);
Le.INVALID_ACCESS_ERR = (we[15] = "Invalid access",
15);
function tr(a, t) {
    if (t instanceof Error)
        var r = t;
    else
        r = this,
        Error.call(this, we[a]),
        this.message = we[a],
        Error.captureStackTrace && Error.captureStackTrace(this, tr);
    return r.code = a,
    t && (this.message = this.message + ": " + t),
    r
}
tr.prototype = Error.prototype;
Si(Le, tr);
function Rt() {}
Rt.prototype = {
    length: 0,
    item: function(a) {
        return this[a] || null
    },
    toString: function(a, t) {
        for (var r = [], i = 0; i < this.length; i++)
            _r(this[i], r, a, t);
        return r.join("")
    }
};
function Cr(a, t) {
    this._node = a,
    this._refresh = t,
    Ss(this)
}
function Ss(a) {
    var t = a._node._inc || a._node.ownerDocument._inc;
    if (a._inc != t) {
        var r = a._refresh(a._node);
        dd(a, "length", r.length),
        Si(r, a),
        a._inc = t
    }
}
Cr.prototype.item = function(a) {
    return Ss(this),
    this[a]
}
;
qe(Cr, Rt);
function vn() {}
function ed(a, t) {
    for (var r = a.length; r--; )
        if (a[r] === t)
            return r
}
function Su(a, t, r, i) {
    if (i ? t[ed(t, i)] = r : t[t.length++] = r,
    a) {
        r.ownerElement = a;
        var e = a.ownerDocument;
        e && (i && rd(e, a, i),
        pm(e, a, r))
    }
}
function Eu(a, t, r) {
    var i = ed(t, r);
    if (i >= 0) {
        for (var e = t.length - 1; i < e; )
            t[i] = t[++i];
        if (t.length = e,
        a) {
            var n = a.ownerDocument;
            n && (rd(n, a, r),
            r.ownerElement = null)
        }
    } else
        throw tr(hm, new Error(a.tagName + "@" + r))
}
vn.prototype = {
    length: 0,
    item: Rt.prototype.item,
    getNamedItem: function(a) {
        for (var t = this.length; t--; ) {
            var r = this[t];
            if (r.nodeName == a)
                return r
        }
    },
    setNamedItem: function(a) {
        var t = a.ownerElement;
        if (t && t != this._ownerElement)
            throw new tr(xu);
        var r = this.getNamedItem(a.nodeName);
        return Su(this._ownerElement, this, a, r),
        r
    },
    setNamedItemNS: function(a) {
        var t = a.ownerElement, r;
        if (t && t != this._ownerElement)
            throw new tr(xu);
        return r = this.getNamedItemNS(a.namespaceURI, a.localName),
        Su(this._ownerElement, this, a, r),
        r
    },
    removeNamedItem: function(a) {
        var t = this.getNamedItem(a);
        return Eu(this._ownerElement, this, t),
        t
    },
    removeNamedItemNS: function(a, t) {
        var r = this.getNamedItemNS(a, t);
        return Eu(this._ownerElement, this, r),
        r
    },
    getNamedItemNS: function(a, t) {
        for (var r = this.length; r--; ) {
            var i = this[r];
            if (i.localName == t && i.namespaceURI == a)
                return i
        }
        return null
    }
};
function td(a) {
    if (this._features = {},
    a)
        for (var t in a)
            this._features = a[t]
}
td.prototype = {
    hasFeature: function(a, t) {
        var r = this._features[a.toLowerCase()];
        return !!(r && (!t || t in r))
    },
    createDocument: function(a, t, r) {
        var i = new Ei;
        if (i.implementation = this,
        i.childNodes = new Rt,
        i.doctype = r,
        r && i.appendChild(r),
        t) {
            var e = i.createElementNS(a, t);
            i.appendChild(e)
        }
        return i
    },
    createDocumentType: function(a, t, r) {
        var i = new As;
        return i.name = a,
        i.nodeName = a,
        i.publicId = t,
        i.systemId = r,
        i
    }
};
function Re() {}
Re.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function(a, t) {
        return nd(this, a, t)
    },
    replaceChild: function(a, t) {
        this.insertBefore(a, t),
        t && this.removeChild(t)
    },
    removeChild: function(a) {
        return id(this, a)
    },
    appendChild: function(a) {
        return this.insertBefore(a, null)
    },
    hasChildNodes: function() {
        return this.firstChild != null
    },
    cloneNode: function(a) {
        return $a(this.ownerDocument || this, this, a)
    },
    normalize: function() {
        for (var a = this.firstChild; a; ) {
            var t = a.nextSibling;
            t && t.nodeType == gn && a.nodeType == gn ? (this.removeChild(t),
            a.appendData(t.data)) : (a.normalize(),
            a = t)
        }
    },
    isSupported: function(a, t) {
        return this.ownerDocument.implementation.hasFeature(a, t)
    },
    hasAttributes: function() {
        return this.attributes.length > 0
    },
    lookupPrefix: function(a) {
        for (var t = this; t; ) {
            var r = t._nsMap;
            if (r) {
                for (var i in r)
                    if (r[i] == a)
                        return i
            }
            t = t.nodeType == Er ? t.ownerDocument : t.parentNode
        }
        return null
    },
    lookupNamespaceURI: function(a) {
        for (var t = this; t; ) {
            var r = t._nsMap;
            if (r && a in r)
                return r[a];
            t = t.nodeType == Er ? t.ownerDocument : t.parentNode
        }
        return null
    },
    isDefaultNamespace: function(a) {
        var t = this.lookupPrefix(a);
        return t == null
    }
};
function Cu(a) {
    return a == "<" && "&lt;" || a == ">" && "&gt;" || a == "&" && "&amp;" || a == '"' && "&quot;" || "&#" + a.charCodeAt() + ";"
}
Si(ze, Re);
Si(ze, Re.prototype);
function mi(a, t) {
    if (t(a))
        return !0;
    if (a = a.firstChild)
        do
            if (mi(a, t))
                return !0;
        while (a = a.nextSibling)
}
function Ei() {}
function pm(a, t, r) {
    a && a._inc++;
    var i = r.namespaceURI;
    i == "http://www.w3.org/2000/xmlns/" && (t._nsMap[r.prefix ? r.localName : ""] = r.value)
}
function rd(a, t, r, i) {
    a && a._inc++;
    var e = r.namespaceURI;
    e == "http://www.w3.org/2000/xmlns/" && delete t._nsMap[r.prefix ? r.localName : ""]
}
function Es(a, t, r) {
    if (a && a._inc) {
        a._inc++;
        var i = t.childNodes;
        if (r)
            i[i.length++] = r;
        else {
            for (var e = t.firstChild, n = 0; e; )
                i[n++] = e,
                e = e.nextSibling;
            i.length = n
        }
    }
}
function id(a, t) {
    var r = t.previousSibling
      , i = t.nextSibling;
    return r ? r.nextSibling = i : a.firstChild = i,
    i ? i.previousSibling = r : a.lastChild = r,
    Es(a.ownerDocument, a),
    t
}
function nd(a, t, r) {
    var i = t.parentNode;
    if (i && i.removeChild(t),
    t.nodeType === At) {
        var e = t.firstChild;
        if (e == null)
            return t;
        var n = t.lastChild
    } else
        e = n = t;
    var s = r ? r.previousSibling : a.lastChild;
    e.previousSibling = s,
    n.nextSibling = r,
    s ? s.nextSibling = e : a.firstChild = e,
    r == null ? a.lastChild = n : r.previousSibling = n;
    do
        e.parentNode = a;
    while (e !== n && (e = e.nextSibling));
    return Es(a.ownerDocument || a, a),
    t.nodeType == At && (t.firstChild = t.lastChild = null),
    t
}
function mm(a, t) {
    var r = t.parentNode;
    if (r) {
        var i = a.lastChild;
        r.removeChild(t);
        var i = a.lastChild
    }
    var i = a.lastChild;
    return t.parentNode = a,
    t.previousSibling = i,
    t.nextSibling = null,
    i ? i.nextSibling = t : a.firstChild = t,
    a.lastChild = t,
    Es(a.ownerDocument, a, t),
    t
}
Ei.prototype = {
    nodeName: "#document",
    nodeType: Jl,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function(a, t) {
        if (a.nodeType == At) {
            for (var r = a.firstChild; r; ) {
                var i = r.nextSibling;
                this.insertBefore(r, t),
                r = i
            }
            return a
        }
        return this.documentElement == null && a.nodeType == ot && (this.documentElement = a),
        nd(this, a, t),
        a.ownerDocument = this,
        a
    },
    removeChild: function(a) {
        return this.documentElement == a && (this.documentElement = null),
        id(this, a)
    },
    importNode: function(a, t) {
        return ld(this, a, t)
    },
    getElementById: function(a) {
        var t = null;
        return mi(this.documentElement, function(r) {
            if (r.nodeType == ot && r.getAttribute("id") == a)
                return t = r,
                !0
        }),
        t
    },
    getElementsByClassName: function(a) {
        var t = new RegExp("(^|\\s)" + a + "(\\s|$)");
        return new Cr(this,function(r) {
            var i = [];
            return mi(r.documentElement, function(e) {
                e !== r && e.nodeType == ot && t.test(e.getAttribute("class")) && i.push(e)
            }),
            i
        }
        )
    },
    createElement: function(a) {
        var t = new wr;
        t.ownerDocument = this,
        t.nodeName = a,
        t.tagName = a,
        t.childNodes = new Rt;
        var r = t.attributes = new vn;
        return r._ownerElement = t,
        t
    },
    createDocumentFragment: function() {
        var a = new Hn;
        return a.ownerDocument = this,
        a.childNodes = new Rt,
        a
    },
    createTextNode: function(a) {
        var t = new Cs;
        return t.ownerDocument = this,
        t.appendData(a),
        t
    },
    createComment: function(a) {
        var t = new ws;
        return t.ownerDocument = this,
        t.appendData(a),
        t
    },
    createCDATASection: function(a) {
        var t = new ks;
        return t.ownerDocument = this,
        t.appendData(a),
        t
    },
    createProcessingInstruction: function(a, t) {
        var r = new Is;
        return r.ownerDocument = this,
        r.tagName = r.target = a,
        r.nodeValue = r.data = t,
        r
    },
    createAttribute: function(a) {
        var t = new _n;
        return t.ownerDocument = this,
        t.name = a,
        t.nodeName = a,
        t.localName = a,
        t.specified = !0,
        t
    },
    createEntityReference: function(a) {
        var t = new Ps;
        return t.ownerDocument = this,
        t.nodeName = a,
        t
    },
    createElementNS: function(a, t) {
        var r = new wr
          , i = t.split(":")
          , e = r.attributes = new vn;
        return r.childNodes = new Rt,
        r.ownerDocument = this,
        r.nodeName = t,
        r.tagName = t,
        r.namespaceURI = a,
        i.length == 2 ? (r.prefix = i[0],
        r.localName = i[1]) : r.localName = t,
        e._ownerElement = r,
        r
    },
    createAttributeNS: function(a, t) {
        var r = new _n
          , i = t.split(":");
        return r.ownerDocument = this,
        r.nodeName = t,
        r.name = t,
        r.namespaceURI = a,
        r.specified = !0,
        i.length == 2 ? (r.prefix = i[0],
        r.localName = i[1]) : r.localName = t,
        r
    }
};
qe(Ei, Re);
function wr() {
    this._nsMap = {}
}
wr.prototype = {
    nodeType: ot,
    hasAttribute: function(a) {
        return this.getAttributeNode(a) != null
    },
    getAttribute: function(a) {
        var t = this.getAttributeNode(a);
        return t && t.value || ""
    },
    getAttributeNode: function(a) {
        return this.attributes.getNamedItem(a)
    },
    setAttribute: function(a, t) {
        var r = this.ownerDocument.createAttribute(a);
        r.value = r.nodeValue = "" + t,
        this.setAttributeNode(r)
    },
    removeAttribute: function(a) {
        var t = this.getAttributeNode(a);
        t && this.removeAttributeNode(t)
    },
    appendChild: function(a) {
        return a.nodeType === At ? this.insertBefore(a, null) : mm(this, a)
    },
    setAttributeNode: function(a) {
        return this.attributes.setNamedItem(a)
    },
    setAttributeNodeNS: function(a) {
        return this.attributes.setNamedItemNS(a)
    },
    removeAttributeNode: function(a) {
        return this.attributes.removeNamedItem(a.nodeName)
    },
    removeAttributeNS: function(a, t) {
        var r = this.getAttributeNodeNS(a, t);
        r && this.removeAttributeNode(r)
    },
    hasAttributeNS: function(a, t) {
        return this.getAttributeNodeNS(a, t) != null
    },
    getAttributeNS: function(a, t) {
        var r = this.getAttributeNodeNS(a, t);
        return r && r.value || ""
    },
    setAttributeNS: function(a, t, r) {
        var i = this.ownerDocument.createAttributeNS(a, t);
        i.value = i.nodeValue = "" + r,
        this.setAttributeNode(i)
    },
    getAttributeNodeNS: function(a, t) {
        return this.attributes.getNamedItemNS(a, t)
    },
    getElementsByTagName: function(a) {
        return new Cr(this,function(t) {
            var r = [];
            return mi(t, function(i) {
                i !== t && i.nodeType == ot && (a === "*" || i.tagName == a) && r.push(i)
            }),
            r
        }
        )
    },
    getElementsByTagNameNS: function(a, t) {
        return new Cr(this,function(r) {
            var i = [];
            return mi(r, function(e) {
                e !== r && e.nodeType === ot && (a === "*" || e.namespaceURI === a) && (t === "*" || e.localName == t) && i.push(e)
            }),
            i
        }
        )
    }
};
Ei.prototype.getElementsByTagName = wr.prototype.getElementsByTagName;
Ei.prototype.getElementsByTagNameNS = wr.prototype.getElementsByTagNameNS;
qe(wr, Re);
function _n() {}
_n.prototype.nodeType = Er;
qe(_n, Re);
function Ci() {}
Ci.prototype = {
    data: "",
    substringData: function(a, t) {
        return this.data.substring(a, a + t)
    },
    appendData: function(a) {
        a = this.data + a,
        this.nodeValue = this.data = a,
        this.length = a.length
    },
    insertData: function(a, t) {
        this.replaceData(a, 0, t)
    },
    appendChild: function(a) {
        throw new Error(we[fm])
    },
    deleteData: function(a, t) {
        this.replaceData(a, t, "")
    },
    replaceData: function(a, t, r) {
        var i = this.data.substring(0, a)
          , e = this.data.substring(a + t);
        r = i + r + e,
        this.nodeValue = this.data = r,
        this.length = r.length
    }
};
qe(Ci, Re);
function Cs() {}
Cs.prototype = {
    nodeName: "#text",
    nodeType: gn,
    splitText: function(a) {
        var t = this.data
          , r = t.substring(a);
        t = t.substring(0, a),
        this.data = this.nodeValue = t,
        this.length = t.length;
        var i = this.ownerDocument.createTextNode(r);
        return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling),
        i
    }
};
qe(Cs, Ci);
function ws() {}
ws.prototype = {
    nodeName: "#comment",
    nodeType: Ql
};
qe(ws, Ci);
function ks() {}
ks.prototype = {
    nodeName: "#cdata-section",
    nodeType: Kl
};
qe(ks, Ci);
function As() {}
As.prototype.nodeType = Zl;
qe(As, Re);
function ad() {}
ad.prototype.nodeType = cm;
qe(ad, Re);
function sd() {}
sd.prototype.nodeType = dm;
qe(sd, Re);
function Ps() {}
Ps.prototype.nodeType = Xl;
qe(Ps, Re);
function Hn() {}
Hn.prototype.nodeName = "#document-fragment";
Hn.prototype.nodeType = At;
qe(Hn, Re);
function Is() {}
Is.prototype.nodeType = Yl;
qe(Is, Re);
function od() {}
od.prototype.serializeToString = function(a, t, r) {
    return ud.call(a, t, r)
}
;
Re.prototype.toString = ud;
function ud(a, t) {
    var r = []
      , i = this.nodeType == 9 && this.documentElement || this
      , e = i.prefix
      , n = i.namespaceURI;
    if (n && e == null) {
        var e = i.lookupPrefix(n);
        if (e == null)
            var s = [{
                namespace: n,
                prefix: null
            }]
    }
    return _r(this, r, a, t, s),
    r.join("")
}
function wu(a, t, r) {
    var i = a.prefix || ""
      , e = a.namespaceURI;
    if (!i && !e || i === "xml" && e === "http://www.w3.org/XML/1998/namespace" || e == "http://www.w3.org/2000/xmlns/")
        return !1;
    for (var n = r.length; n--; ) {
        var s = r[n];
        if (s.prefix == i)
            return s.namespace != e
    }
    return !0
}
function _r(a, t, r, i, e) {
    if (i)
        if (a = i(a),
        a) {
            if (typeof a == "string") {
                t.push(a);
                return
            }
        } else
            return;
    switch (a.nodeType) {
    case ot:
        e || (e = []),
        e.length;
        var n = a.attributes
          , s = n.length
          , y = a.firstChild
          , o = a.tagName;
        r = lm === a.namespaceURI || r,
        t.push("<", o);
        for (var u = 0; u < s; u++) {
            var l = n.item(u);
            l.prefix == "xmlns" ? e.push({
                prefix: l.localName,
                namespace: l.value
            }) : l.nodeName == "xmlns" && e.push({
                prefix: "",
                namespace: l.value
            })
        }
        for (var u = 0; u < s; u++) {
            var l = n.item(u);
            if (wu(l, r, e)) {
                var c = l.prefix || ""
                  , p = l.namespaceURI
                  , g = c ? " xmlns:" + c : " xmlns";
                t.push(g, '="', p, '"'),
                e.push({
                    prefix: c,
                    namespace: p
                })
            }
            _r(l, t, r, i, e)
        }
        if (wu(a, r, e)) {
            var c = a.prefix || ""
              , p = a.namespaceURI
              , g = c ? " xmlns:" + c : " xmlns";
            t.push(g, '="', p, '"'),
            e.push({
                prefix: c,
                namespace: p
            })
        }
        if (y || r && !/^(?:meta|link|img|br|hr|input)$/i.test(o)) {
            if (t.push(">"),
            r && /^script$/i.test(o))
                for (; y; )
                    y.data ? t.push(y.data) : _r(y, t, r, i, e),
                    y = y.nextSibling;
            else
                for (; y; )
                    _r(y, t, r, i, e),
                    y = y.nextSibling;
            t.push("</", o, ">")
        } else
            t.push("/>");
        return;
    case Jl:
    case At:
        for (var y = a.firstChild; y; )
            _r(y, t, r, i, e),
            y = y.nextSibling;
        return;
    case Er:
        return t.push(" ", a.name, '="', a.value.replace(/[&"]/g, Cu), '"');
    case gn:
        return t.push(a.data.replace(/[<&]/g, Cu).replace(/]]>/g, "]]&gt;"));
    case Kl:
        return t.push("<![CDATA[", a.data, "]]>");
    case Ql:
        return t.push("<!--", a.data, "-->");
    case Zl:
        var S = a.publicId
          , x = a.systemId;
        if (t.push("<!DOCTYPE ", a.name),
        S)
            t.push(" PUBLIC ", S),
            x && x != "." && t.push(" ", x),
            t.push(">");
        else if (x && x != ".")
            t.push(" SYSTEM ", x, ">");
        else {
            var b = a.internalSubset;
            b && t.push(" [", b, "]"),
            t.push(">")
        }
        return;
    case Yl:
        return t.push("<?", a.target, " ", a.data, "?>");
    case Xl:
        return t.push("&", a.nodeName, ";");
    default:
        t.push("??", a.nodeName)
    }
}
function ld(a, t, r) {
    var i;
    switch (t.nodeType) {
    case ot:
        i = t.cloneNode(!1),
        i.ownerDocument = a;
    case At:
        break;
    case Er:
        r = !0;
        break
    }
    if (i || (i = t.cloneNode(!1)),
    i.ownerDocument = a,
    i.parentNode = null,
    r)
        for (var e = t.firstChild; e; )
            i.appendChild(ld(a, e, r)),
            e = e.nextSibling;
    return i
}
function $a(a, t, r) {
    var i = new t.constructor;
    for (var e in t) {
        var n = t[e];
        typeof n != "object" && n != i[e] && (i[e] = n)
    }
    switch (t.childNodes && (i.childNodes = new Rt),
    i.ownerDocument = a,
    i.nodeType) {
    case ot:
        var s = t.attributes
          , o = i.attributes = new vn
          , u = s.length;
        o._ownerElement = i;
        for (var l = 0; l < u; l++)
            i.setAttributeNode($a(a, s.item(l), !0));
        break;
    case Er:
        r = !0
    }
    if (r)
        for (var c = t.firstChild; c; )
            i.appendChild($a(a, c, r)),
            c = c.nextSibling;
    return i
}
function dd(a, t, r) {
    a[t] = r
}
try {
    if (Object.defineProperty) {
        let a = function(t) {
            switch (t.nodeType) {
            case ot:
            case At:
                var r = [];
                for (t = t.firstChild; t; )
                    t.nodeType !== 7 && t.nodeType !== 8 && r.push(a(t)),
                    t = t.nextSibling;
                return r.join("");
            default:
                return t.nodeValue
            }
        };
        Object.defineProperty(Cr.prototype, "length", {
            get: function() {
                return Ss(this),
                this.$$length
            }
        }),
        Object.defineProperty(Re.prototype, "textContent", {
            get: function() {
                return a(this)
            },
            set: function(t) {
                switch (this.nodeType) {
                case ot:
                case At:
                    for (; this.firstChild; )
                        this.removeChild(this.firstChild);
                    (t || String(t)) && this.appendChild(this.ownerDocument.createTextNode(t));
                    break;
                default:
                    this.data = t,
                    this.value = t,
                    this.nodeValue = t
                }
            }
        }),
        dd = function(t, r, i) {
            t["$$" + r] = i
        }
    }
} catch {}
xi.Node = Re;
xi.DOMException = tr;
xi.DOMImplementation = td;
xi.XMLSerializer = od;
function cd(a) {
    this.options = a || {
        locator: {}
    }
}
cd.prototype.parseFromString = function(a, t) {
    var r = this.options
      , i = new _m
      , e = r.domBuilder || new jn
      , n = r.errorHandler
      , s = r.locator
      , o = r.xmlns || {}
      , u = /\/x?html?$/.test(t)
      , l = u ? vm.entityMap : {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
    };
    return s && e.setDocumentLocator(s),
    i.errorHandler = gm(n, e, s),
    i.domBuilder = r.domBuilder || e,
    u && (o[""] = "http://www.w3.org/1999/xhtml"),
    o.xml = o.xml || "http://www.w3.org/XML/1998/namespace",
    a && typeof a == "string" ? i.parse(a, o, l) : i.errorHandler.error("invalid doc source"),
    e.doc
}
;
function gm(a, t, r) {
    if (!a) {
        if (t instanceof jn)
            return t;
        a = t
    }
    var i = {}
      , e = a instanceof Function;
    r = r || {};
    function n(s) {
        var o = a[s];
        !o && e && (o = a.length == 2 ? function(u) {
            a(s, u)
        }
        : a),
        i[s] = o && function(u) {
            o("[xmldom " + s + "]	" + u + Ka(r))
        }
        || function() {}
    }
    return n("warning"),
    n("error"),
    n("fatalError"),
    i
}
function jn() {
    this.cdata = !1
}
function mr(a, t) {
    t.lineNumber = a.lineNumber,
    t.columnNumber = a.columnNumber
}
jn.prototype = {
    startDocument: function() {
        this.doc = new Tm().createDocument(null, null, null),
        this.locator && (this.doc.documentURI = this.locator.systemId)
    },
    startElement: function(a, t, r, i) {
        var e = this.doc
          , n = e.createElementNS(a, r || t)
          , s = i.length;
        Ji(this, n),
        this.currentElement = n,
        this.locator && mr(this.locator, n);
        for (var o = 0; o < s; o++) {
            var a = i.getURI(o)
              , u = i.getValue(o)
              , r = i.getQName(o)
              , l = e.createAttributeNS(a, r);
            this.locator && mr(i.getLocator(o), l),
            l.value = l.nodeValue = u,
            n.setAttributeNode(l)
        }
    },
    endElement: function(a, t, r) {
        var i = this.currentElement;
        i.tagName,
        this.currentElement = i.parentNode
    },
    startPrefixMapping: function(a, t) {},
    endPrefixMapping: function(a) {},
    processingInstruction: function(a, t) {
        var r = this.doc.createProcessingInstruction(a, t);
        this.locator && mr(this.locator, r),
        Ji(this, r)
    },
    ignorableWhitespace: function(a, t, r) {},
    characters: function(a, t, r) {
        if (a = ku.apply(this, arguments),
        a) {
            if (this.cdata)
                var i = this.doc.createCDATASection(a);
            else
                var i = this.doc.createTextNode(a);
            this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(a) && this.doc.appendChild(i),
            this.locator && mr(this.locator, i)
        }
    },
    skippedEntity: function(a) {},
    endDocument: function() {
        this.doc.normalize()
    },
    setDocumentLocator: function(a) {
        (this.locator = a) && (a.lineNumber = 0)
    },
    comment: function(a, t, r) {
        a = ku.apply(this, arguments);
        var i = this.doc.createComment(a);
        this.locator && mr(this.locator, i),
        Ji(this, i)
    },
    startCDATA: function() {
        this.cdata = !0
    },
    endCDATA: function() {
        this.cdata = !1
    },
    startDTD: function(a, t, r) {
        var i = this.doc.implementation;
        if (i && i.createDocumentType) {
            var e = i.createDocumentType(a, t, r);
            this.locator && mr(this.locator, e),
            Ji(this, e)
        }
    },
    warning: function(a) {
        console.warn("[xmldom warning]	" + a, Ka(this.locator))
    },
    error: function(a) {
        console.error("[xmldom error]	" + a, Ka(this.locator))
    },
    fatalError: function(a) {
        throw new ym(a,this.locator)
    }
};
function Ka(a) {
    if (a)
        return `
@` + (a.systemId || "") + "#[line:" + a.lineNumber + ",col:" + a.columnNumber + "]"
}
function ku(a, t, r) {
    return typeof a == "string" ? a.substr(t, r) : a.length >= t + r || t ? new java.lang.String(a,t,r) + "" : a
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(a) {
    jn.prototype[a] = function() {
        return null
    }
});
function Ji(a, t) {
    a.currentElement ? a.currentElement.appendChild(t) : a.doc.appendChild(t)
}
var vm = Gl
  , fd = xs
  , _m = fd.XMLReader
  , ym = fd.ParseError
  , Tm = xi.DOMImplementation
  , bm = cd;
/*! @name mpd-parser @version 0.17.0 @license Apache-2.0 */
var Au = function(t) {
    return !!t && typeof t == "object"
}
  , Be = function a() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
    return r.reduce(function(e, n) {
        return typeof n != "object" || Object.keys(n).forEach(function(s) {
            Array.isArray(e[s]) && Array.isArray(n[s]) ? e[s] = e[s].concat(n[s]) : Au(e[s]) && Au(n[s]) ? e[s] = a(e[s], n[s]) : e[s] = n[s]
        }),
        e
    }, {})
}
  , xm = function(t) {
    return Object.keys(t).map(function(r) {
        return t[r]
    })
}
  , Sm = function(t, r) {
    for (var i = [], e = t; e < r; e++)
        i.push(e);
    return i
}
  , Vn = function(t) {
    return t.reduce(function(r, i) {
        return r.concat(i)
    }, [])
}
  , hd = function(t) {
    if (!t.length)
        return [];
    for (var r = [], i = 0; i < t.length; i++)
        r.push(t[i]);
    return r
}
  , Em = function(t, r) {
    return t.reduce(function(i, e, n) {
        return e[r] && i.push(n),
        i
    }, [])
}
  , kr = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    MISSING_SEGMENT_INFORMATION: "MISSING_SEGMENT_INFORMATION",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME"
}
  , gi = function(t) {
    var r = t.baseUrl
      , i = r === void 0 ? "" : r
      , e = t.source
      , n = e === void 0 ? "" : e
      , s = t.range
      , o = s === void 0 ? "" : s
      , u = t.indexRange
      , l = u === void 0 ? "" : u
      , c = {
        uri: n,
        resolvedUri: Bn(i || "", n)
    };
    if (o || l) {
        var p = o || l
          , g = p.split("-")
          , y = parseInt(g[0], 10)
          , S = parseInt(g[1], 10);
        c.byterange = {
            length: S - y + 1,
            offset: y
        }
    }
    return c
}
  , Cm = function(t) {
    var r = t.offset + t.length - 1;
    return t.offset + "-" + r
}
  , Pu = function(t) {
    return t && typeof t != "number" && (t = parseInt(t, 10)),
    isNaN(t) ? null : t
}
  , wm = {
    static: function(t) {
        var r = t.duration
          , i = t.timescale
          , e = i === void 0 ? 1 : i
          , n = t.sourceDuration
          , s = Pu(t.endNumber);
        return {
            start: 0,
            end: typeof s == "number" ? s : Math.ceil(n / (r / e))
        }
    },
    dynamic: function(t) {
        var r = t.NOW
          , i = t.clientOffset
          , e = t.availabilityStartTime
          , n = t.timescale
          , s = n === void 0 ? 1 : n
          , o = t.duration
          , u = t.start
          , l = u === void 0 ? 0 : u
          , c = t.minimumUpdatePeriod
          , p = c === void 0 ? 0 : c
          , g = t.timeShiftBufferDepth
          , y = g === void 0 ? 1 / 0 : g
          , S = Pu(t.endNumber)
          , x = (r + i) / 1e3
          , b = e + l
          , P = x + p
          , D = P - b
          , L = Math.ceil(D * s / o)
          , R = Math.floor((x - b - y) * s / o)
          , F = Math.floor((x - b) * s / o);
        return {
            start: Math.max(0, R),
            end: typeof S == "number" ? S : Math.min(L, F)
        }
    }
}
  , km = function(t) {
    return function(r, i) {
        var e = t.duration
          , n = t.timescale
          , s = n === void 0 ? 1 : n
          , o = t.periodIndex
          , u = t.startNumber
          , l = u === void 0 ? 1 : u;
        return {
            number: l + r,
            duration: e / s,
            timeline: o,
            time: i * e
        }
    }
}
  , Ds = function(t) {
    var r = t.type
      , i = r === void 0 ? "static" : r
      , e = t.duration
      , n = t.timescale
      , s = n === void 0 ? 1 : n
      , o = t.sourceDuration
      , u = wm[i](t)
      , l = u.start
      , c = u.end
      , p = Sm(l, c).map(km(t));
    if (i === "static") {
        var g = p.length - 1;
        p[g].duration = o - e / s * g
    }
    return p
}
  , pd = function(t) {
    var r = t.baseUrl
      , i = t.initialization
      , e = i === void 0 ? {} : i
      , n = t.sourceDuration
      , s = t.indexRange
      , o = s === void 0 ? "" : s
      , u = t.duration;
    if (!r)
        throw new Error(kr.NO_BASE_URL);
    var l = gi({
        baseUrl: r,
        source: e.sourceURL,
        range: e.range
    })
      , c = gi({
        baseUrl: r,
        source: r,
        indexRange: o
    });
    if (c.map = l,
    u) {
        var p = Ds(t);
        p.length && (c.duration = p[0].duration,
        c.timeline = p[0].timeline)
    } else
        n && (c.duration = n,
        c.timeline = 0);
    return c.number = 0,
    [c]
}
  , Os = function(t, r, i) {
    for (var e = t.sidx.map ? t.sidx.map : null, n = t.sidx.duration, s = t.timeline || 0, o = t.sidx.byterange, u = o.offset + o.length, l = r.timescale, c = r.references.filter(function(F) {
        return F.referenceType !== 1
    }), p = [], g = u + r.firstOffset, y = 0; y < c.length; y++) {
        var S = r.references[y]
          , x = S.referencedSize
          , b = S.subsegmentDuration
          , P = g + x - 1
          , D = g + "-" + P
          , L = {
            baseUrl: i,
            timescale: l,
            timeline: s,
            periodIndex: s,
            duration: b,
            sourceDuration: n,
            indexRange: D
        }
          , R = pd(L)[0];
        e && (R.map = e),
        p.push(R),
        g += x
    }
    return t.segments = p,
    t
}
  , Wn = function(t) {
    return t && t.uri + "-" + Cm(t.byterange)
}
  , Iu = function(t) {
    var r = xm(t.reduce(function(i, e) {
        var n = e.attributes.id + (e.attributes.lang || "");
        if (i[n]) {
            var s;
            e.segments[0] && (e.segments[0].discontinuity = !0),
            (s = i[n].segments).push.apply(s, e.segments),
            e.attributes.contentProtection && (i[n].attributes.contentProtection = e.attributes.contentProtection)
        } else
            i[n] = e;
        return i
    }, {}));
    return r.map(function(i) {
        return i.discontinuityStarts = Em(i.segments, "discontinuity"),
        i
    })
}
  , Ls = function(t, r) {
    var i = Wn(t.sidx)
      , e = i && r[i] && r[i].sidx;
    return e && Os(t, e, t.sidx.resolvedUri),
    t
}
  , Am = function(t, r) {
    if (r === void 0 && (r = {}),
    !Object.keys(r).length)
        return t;
    for (var i in t)
        t[i] = Ls(t[i], r);
    return t
}
  , Pm = function(t, r) {
    var i, e = t.attributes, n = t.segments, s = t.sidx, o = {
        attributes: (i = {
            NAME: e.id,
            BANDWIDTH: e.bandwidth,
            CODECS: e.codecs
        },
        i["PROGRAM-ID"] = 1,
        i),
        uri: "",
        endList: (e.type || "static") === "static",
        timeline: e.periodIndex,
        resolvedUri: "",
        targetDuration: e.duration,
        segments: n,
        mediaSequence: n.length ? n[0].number : 1
    };
    return e.contentProtection && (o.contentProtection = e.contentProtection),
    s && (o.sidx = s),
    r && (o.attributes.AUDIO = "audio",
    o.attributes.SUBTITLES = "subs"),
    o
}
  , Im = function(t) {
    var r, i = t.attributes, e = t.segments;
    typeof e > "u" && (e = [{
        uri: i.baseUrl,
        timeline: i.periodIndex,
        resolvedUri: i.baseUrl || "",
        duration: i.sourceDuration,
        number: 0
    }],
    i.duration = i.sourceDuration);
    var n = (r = {
        NAME: i.id,
        BANDWIDTH: i.bandwidth
    },
    r["PROGRAM-ID"] = 1,
    r);
    return i.codecs && (n.CODECS = i.codecs),
    {
        attributes: n,
        uri: "",
        endList: (i.type || "static") === "static",
        timeline: i.periodIndex,
        resolvedUri: i.baseUrl || "",
        targetDuration: i.duration,
        segments: e,
        mediaSequence: e.length ? e[0].number : 1
    }
}
  , Dm = function(t, r, i) {
    r === void 0 && (r = {}),
    i === void 0 && (i = !1);
    var e, n = t.reduce(function(o, u) {
        var l = u.attributes.role && u.attributes.role.value || ""
          , c = u.attributes.lang || ""
          , p = u.attributes.label || "main";
        if (c && !u.attributes.label) {
            var g = l ? " (" + l + ")" : "";
            p = "" + u.attributes.lang + g
        }
        o[p] || (o[p] = {
            language: c,
            autoselect: !0,
            default: l === "main",
            playlists: [],
            uri: ""
        });
        var y = Ls(Pm(u, i), r);
        return o[p].playlists.push(y),
        typeof e > "u" && l === "main" && (e = u,
        e.default = !0),
        o
    }, {});
    if (!e) {
        var s = Object.keys(n)[0];
        n[s].default = !0
    }
    return n
}
  , Om = function(t, r) {
    return r === void 0 && (r = {}),
    t.reduce(function(i, e) {
        var n = e.attributes.lang || "text";
        return i[n] || (i[n] = {
            language: n,
            default: !1,
            autoselect: !1,
            playlists: [],
            uri: ""
        }),
        i[n].playlists.push(Ls(Im(e), r)),
        i
    }, {})
}
  , Lm = function(t) {
    return t.reduce(function(r, i) {
        return i && i.forEach(function(e) {
            var n = e.channel
              , s = e.language;
            r[s] = {
                autoselect: !1,
                default: !1,
                instreamId: n,
                language: s
            },
            e.hasOwnProperty("aspectRatio") && (r[s].aspectRatio = e.aspectRatio),
            e.hasOwnProperty("easyReader") && (r[s].easyReader = e.easyReader),
            e.hasOwnProperty("3D") && (r[s]["3D"] = e["3D"])
        }),
        r
    }, {})
}
  , Rm = function(t) {
    var r, i = t.attributes, e = t.segments, n = t.sidx, s = {
        attributes: (r = {
            NAME: i.id,
            AUDIO: "audio",
            SUBTITLES: "subs",
            RESOLUTION: {
                width: i.width,
                height: i.height
            },
            CODECS: i.codecs,
            BANDWIDTH: i.bandwidth
        },
        r["PROGRAM-ID"] = 1,
        r),
        uri: "",
        endList: (i.type || "static") === "static",
        timeline: i.periodIndex,
        resolvedUri: "",
        targetDuration: i.duration,
        segments: e,
        mediaSequence: e.length ? e[0].number : 1
    };
    return i.contentProtection && (s.contentProtection = i.contentProtection),
    n && (s.sidx = n),
    s
}
  , Mm = function(t) {
    var r = t.attributes;
    return r.mimeType === "video/mp4" || r.mimeType === "video/webm" || r.contentType === "video"
}
  , Fm = function(t) {
    var r = t.attributes;
    return r.mimeType === "audio/mp4" || r.mimeType === "audio/webm" || r.contentType === "audio"
}
  , Nm = function(t) {
    var r = t.attributes;
    return r.mimeType === "text/vtt" || r.contentType === "text"
}
  , Um = function(t, r, i) {
    var e;
    if (i === void 0 && (i = {}),
    !t.length)
        return {};
    var n = t[0].attributes
      , s = n.sourceDuration
      , o = n.type
      , u = o === void 0 ? "static" : o
      , l = n.suggestedPresentationDelay
      , c = n.minimumUpdatePeriod
      , p = Iu(t.filter(Mm)).map(Rm)
      , g = Iu(t.filter(Fm))
      , y = t.filter(Nm)
      , S = t.map(function(P) {
        return P.attributes.captionServices
    }).filter(Boolean)
      , x = {
        allowCache: !0,
        discontinuityStarts: [],
        segments: [],
        endList: !0,
        mediaGroups: (e = {
            AUDIO: {},
            VIDEO: {}
        },
        e["CLOSED-CAPTIONS"] = {},
        e.SUBTITLES = {},
        e),
        uri: "",
        duration: s,
        playlists: Am(p, i)
    };
    c >= 0 && (x.minimumUpdatePeriod = c * 1e3),
    r && (x.locations = r),
    u === "dynamic" && (x.suggestedPresentationDelay = l);
    var b = x.playlists.length === 0;
    return g.length && (x.mediaGroups.AUDIO.audio = Dm(g, i, b)),
    y.length && (x.mediaGroups.SUBTITLES.subs = Om(y, i)),
    S.length && (x.mediaGroups["CLOSED-CAPTIONS"].cc = Lm(S)),
    x
}
  , Bm = function(t, r, i) {
    var e = t.NOW
      , n = t.clientOffset
      , s = t.availabilityStartTime
      , o = t.timescale
      , u = o === void 0 ? 1 : o
      , l = t.start
      , c = l === void 0 ? 0 : l
      , p = t.minimumUpdatePeriod
      , g = p === void 0 ? 0 : p
      , y = (e + n) / 1e3
      , S = s + c
      , x = y + g
      , b = x - S;
    return Math.ceil((b * u - r) / i)
}
  , md = function(t, r) {
    for (var i = t.type, e = i === void 0 ? "static" : i, n = t.minimumUpdatePeriod, s = n === void 0 ? 0 : n, o = t.media, u = o === void 0 ? "" : o, l = t.sourceDuration, c = t.timescale, p = c === void 0 ? 1 : c, g = t.startNumber, y = g === void 0 ? 1 : g, S = t.periodIndex, x = [], b = -1, P = 0; P < r.length; P++) {
        var D = r[P]
          , L = D.d
          , R = D.r || 0
          , F = D.t || 0;
        b < 0 && (b = F),
        F && F > b && (b = F);
        var j = void 0;
        if (R < 0) {
            var B = P + 1;
            B === r.length ? e === "dynamic" && s > 0 && u.indexOf("$Number$") > 0 ? j = Bm(t, b, L) : j = (l * p - b) / L : j = (r[B].t - b) / L
        } else
            j = R + 1;
        for (var M = y + x.length + j, H = y + x.length; H < M; )
            x.push({
                number: H,
                duration: L / p,
                time: b,
                timeline: S
            }),
            b += L,
            H++
    }
    return x
}
  , Hm = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g
  , jm = function(t) {
    return function(r, i, e, n) {
        if (r === "$$")
            return "$";
        if (typeof t[i] > "u")
            return r;
        var s = "" + t[i];
        return i === "RepresentationID" || (e ? n = parseInt(n, 10) : n = 1,
        s.length >= n) ? s : "" + new Array(n - s.length + 1).join("0") + s
    }
}
  , Du = function(t, r) {
    return t.replace(Hm, jm(r))
}
  , Vm = function(t, r) {
    return !t.duration && !r ? [{
        number: t.startNumber || 1,
        duration: t.sourceDuration,
        time: 0,
        timeline: t.periodIndex
    }] : t.duration ? Ds(t) : md(t, r)
}
  , Wm = function(t, r) {
    var i = {
        RepresentationID: t.id,
        Bandwidth: t.bandwidth || 0
    }
      , e = t.initialization
      , n = e === void 0 ? {
        sourceURL: "",
        range: ""
    } : e
      , s = gi({
        baseUrl: t.baseUrl,
        source: Du(n.sourceURL, i),
        range: n.range
    })
      , o = Vm(t, r);
    return o.map(function(u) {
        i.Number = u.number,
        i.Time = u.time;
        var l = Du(t.media || "", i)
          , c = {
            uri: l,
            timeline: u.timeline,
            duration: u.duration,
            resolvedUri: Bn(t.baseUrl || "", l),
            map: s,
            number: u.number
        };
        return t.presentationTimeOffset && (c.presentationTimeOffset = t.presentationTimeOffset),
        c
    })
}
  , Gm = function(t, r) {
    var i = t.baseUrl
      , e = t.initialization
      , n = e === void 0 ? {} : e
      , s = gi({
        baseUrl: i,
        source: n.sourceURL,
        range: n.range
    })
      , o = gi({
        baseUrl: i,
        source: r.media,
        range: r.mediaRange
    });
    return o.map = s,
    o
}
  , qm = function(t, r) {
    var i = t.duration
      , e = t.segmentUrls
      , n = e === void 0 ? [] : e;
    if (!i && !r || i && r)
        throw new Error(kr.SEGMENT_TIME_UNSPECIFIED);
    var s = n.map(function(l) {
        return Gm(t, l)
    }), o;
    i && (o = Ds(t)),
    r && (o = md(t, r));
    var u = o.map(function(l, c) {
        if (s[c]) {
            var p = s[c];
            return p.timeline = l.timeline,
            p.duration = l.duration,
            p.number = l.number,
            p
        }
    }).filter(function(l) {
        return l
    });
    return u
}
  , zm = function(t) {
    var r = t.attributes, i = t.segmentInfo, e, n;
    i.template ? (n = Wm,
    e = Be(r, i.template),
    i.template.presentationTimeOffset && (e.presentationTimeOffset = i.template.presentationTimeOffset / i.template.timescale)) : i.base ? (n = pd,
    e = Be(r, i.base)) : i.list && (n = qm,
    e = Be(r, i.list));
    var s = {
        attributes: r
    };
    if (!n)
        return s;
    var o = n(e, i.timeline);
    if (e.duration) {
        var u = e
          , l = u.duration
          , c = u.timescale
          , p = c === void 0 ? 1 : c;
        e.duration = l / p
    } else
        o.length ? e.duration = o.reduce(function(g, y) {
            return Math.max(g, Math.ceil(y.duration))
        }, 0) : e.duration = 0;
    return s.attributes = e,
    s.segments = o,
    i.base && e.indexRange && (s.sidx = o[0],
    s.segments = []),
    s
}
  , $m = function(t) {
    return t.map(zm)
}
  , ye = function(t, r) {
    return hd(t.childNodes).filter(function(i) {
        var e = i.tagName;
        return e === r
    })
}
  , Rs = function(t) {
    return t.textContent.trim()
}
  , gr = function(t) {
    var r = 31536e3
      , i = 30 * 24 * 60 * 60
      , e = 24 * 60 * 60
      , n = 60 * 60
      , s = 60
      , o = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/
      , u = o.exec(t);
    if (!u)
        return 0;
    var l = u.slice(1)
      , c = l[0]
      , p = l[1]
      , g = l[2]
      , y = l[3]
      , S = l[4]
      , x = l[5];
    return parseFloat(c || 0) * r + parseFloat(p || 0) * i + parseFloat(g || 0) * e + parseFloat(y || 0) * n + parseFloat(S || 0) * s + parseFloat(x || 0)
}
  , Km = function(t) {
    var r = /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/;
    return r.test(t) && (t += "Z"),
    Date.parse(t)
}
  , Ou = {
    mediaPresentationDuration: function(t) {
        return gr(t)
    },
    availabilityStartTime: function(t) {
        return Km(t) / 1e3
    },
    minimumUpdatePeriod: function(t) {
        return gr(t)
    },
    suggestedPresentationDelay: function(t) {
        return gr(t)
    },
    type: function(t) {
        return t
    },
    timeShiftBufferDepth: function(t) {
        return gr(t)
    },
    start: function(t) {
        return gr(t)
    },
    width: function(t) {
        return parseInt(t, 10)
    },
    height: function(t) {
        return parseInt(t, 10)
    },
    bandwidth: function(t) {
        return parseInt(t, 10)
    },
    startNumber: function(t) {
        return parseInt(t, 10)
    },
    timescale: function(t) {
        return parseInt(t, 10)
    },
    presentationTimeOffset: function(t) {
        return parseInt(t, 10)
    },
    duration: function(t) {
        var r = parseInt(t, 10);
        return isNaN(r) ? gr(t) : r
    },
    d: function(t) {
        return parseInt(t, 10)
    },
    t: function(t) {
        return parseInt(t, 10)
    },
    r: function(t) {
        return parseInt(t, 10)
    },
    DEFAULT: function(t) {
        return t
    }
}
  , De = function(t) {
    return t && t.attributes ? hd(t.attributes).reduce(function(r, i) {
        var e = Ou[i.name] || Ou.DEFAULT;
        return r[i.name] = e(i.value),
        r
    }, {}) : {}
}
  , Xm = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
}
  , Gn = function(t, r) {
    return r.length ? Vn(t.map(function(i) {
        return r.map(function(e) {
            return Bn(i, Rs(e))
        })
    })) : t
}
  , Ms = function(t) {
    var r = ye(t, "SegmentTemplate")[0]
      , i = ye(t, "SegmentList")[0]
      , e = i && ye(i, "SegmentURL").map(function(g) {
        return Be({
            tag: "SegmentURL"
        }, De(g))
    })
      , n = ye(t, "SegmentBase")[0]
      , s = i || r
      , o = s && ye(s, "SegmentTimeline")[0]
      , u = i || n || r
      , l = u && ye(u, "Initialization")[0]
      , c = r && De(r);
    c && l ? c.initialization = l && De(l) : c && c.initialization && (c.initialization = {
        sourceURL: c.initialization
    });
    var p = {
        template: c,
        timeline: o && ye(o, "S").map(function(g) {
            return De(g)
        }),
        list: i && Be(De(i), {
            segmentUrls: e,
            initialization: De(l)
        }),
        base: n && Be(De(n), {
            initialization: De(l)
        })
    };
    return Object.keys(p).forEach(function(g) {
        p[g] || delete p[g]
    }),
    p
}
  , Ym = function(t, r, i) {
    return function(e) {
        var n = ye(e, "BaseURL")
          , s = Gn(r, n)
          , o = Be(t, De(e))
          , u = Ms(e);
        return s.map(function(l) {
            return {
                segmentInfo: Be(i, u),
                attributes: Be(o, {
                    baseUrl: l
                })
            }
        })
    }
}
  , Qm = function(t) {
    return t.reduce(function(r, i) {
        var e = De(i)
          , n = Xm[e.schemeIdUri];
        if (n) {
            r[n] = {
                attributes: e
            };
            var s = ye(i, "cenc:pssh")[0];
            if (s) {
                var o = Rs(s)
                  , u = o && Hl(o);
                r[n].pssh = u
            }
        }
        return r
    }, {})
}
  , Jm = function(t) {
    if (t.schemeIdUri === "urn:scte:dash:cc:cea-608:2015") {
        var r = t.value.split(";");
        return r.map(function(e) {
            var n, s;
            if (s = e,
            /^CC\d=/.test(e)) {
                var o = e.split("=");
                n = o[0],
                s = o[1]
            } else
                /^CC\d$/.test(e) && (n = e);
            return {
                channel: n,
                language: s
            }
        })
    } else if (t.schemeIdUri === "urn:scte:dash:cc:cea-708:2015") {
        var i = t.value.split(";");
        return i.map(function(e) {
            var n = {
                channel: void 0,
                language: void 0,
                aspectRatio: 1,
                easyReader: 0,
                "3D": 0
            };
            if (/=/.test(e)) {
                var s = e.split("=")
                  , o = s[0]
                  , u = s[1]
                  , l = u === void 0 ? "" : u;
                n.channel = o,
                n.language = e,
                l.split(",").forEach(function(c) {
                    var p = c.split(":")
                      , g = p[0]
                      , y = p[1];
                    g === "lang" ? n.language = y : g === "er" ? n.easyReader = Number(y) : g === "war" ? n.aspectRatio = Number(y) : g === "3D" && (n["3D"] = Number(y))
                })
            } else
                n.language = e;
            return n.channel && (n.channel = "SERVICE" + n.channel),
            n
        })
    }
}
  , Zm = function(t, r, i) {
    return function(e) {
        var n = De(e)
          , s = Gn(r, ye(e, "BaseURL"))
          , o = ye(e, "Role")[0]
          , u = {
            role: De(o)
        }
          , l = Be(t, n, u)
          , c = ye(e, "Accessibility")[0]
          , p = Jm(De(c));
        p && (l = Be(l, {
            captionServices: p
        }));
        var g = ye(e, "Label")[0];
        if (g && g.childNodes.length) {
            var y = g.childNodes[0].nodeValue.trim();
            l = Be(l, {
                label: y
            })
        }
        var S = Qm(ye(e, "ContentProtection"));
        Object.keys(S).length && (l = Be(l, {
            contentProtection: S
        }));
        var x = Ms(e)
          , b = ye(e, "Representation")
          , P = Be(i, x);
        return Vn(b.map(Ym(l, s, P)))
    }
}
  , eg = function(t, r) {
    return function(i, e) {
        var n = Gn(r, ye(i, "BaseURL"))
          , s = De(i)
          , o = parseInt(s.id, 10)
          , u = A.isNaN(o) ? e : o
          , l = Be(t, {
            periodIndex: u
        })
          , c = ye(i, "AdaptationSet")
          , p = Ms(i);
        return Vn(c.map(Zm(l, n, p)))
    }
}
  , tg = function(t, r) {
    r === void 0 && (r = {});
    var i = r
      , e = i.manifestUri
      , n = e === void 0 ? "" : e
      , s = i.NOW
      , o = s === void 0 ? Date.now() : s
      , u = i.clientOffset
      , l = u === void 0 ? 0 : u
      , c = ye(t, "Period");
    if (!c.length)
        throw new Error(kr.INVALID_NUMBER_OF_PERIOD);
    var p = ye(t, "Location")
      , g = De(t)
      , y = Gn([n], ye(t, "BaseURL"));
    return g.sourceDuration = g.mediaPresentationDuration || 0,
    g.NOW = o,
    g.clientOffset = l,
    p.length && (g.locations = p.map(Rs)),
    {
        locations: g.locations,
        representationInfo: Vn(c.map(eg(g, y)))
    }
}
  , gd = function(t) {
    if (t === "")
        throw new Error(kr.DASH_EMPTY_MANIFEST);
    var r = new bm, i, e;
    try {
        i = r.parseFromString(t, "application/xml"),
        e = i && i.documentElement.tagName === "MPD" ? i.documentElement : null
    } catch {}
    if (!e || e && e.getElementsByTagName("parsererror").length > 0)
        throw new Error(kr.DASH_INVALID_XML);
    return e
}
  , rg = function(t) {
    var r = ye(t, "UTCTiming")[0];
    if (!r)
        return null;
    var i = De(r);
    switch (i.schemeIdUri) {
    case "urn:mpeg:dash:utc:http-head:2014":
    case "urn:mpeg:dash:utc:http-head:2012":
        i.method = "HEAD";
        break;
    case "urn:mpeg:dash:utc:http-xsdate:2014":
    case "urn:mpeg:dash:utc:http-iso:2014":
    case "urn:mpeg:dash:utc:http-xsdate:2012":
    case "urn:mpeg:dash:utc:http-iso:2012":
        i.method = "GET";
        break;
    case "urn:mpeg:dash:utc:direct:2014":
    case "urn:mpeg:dash:utc:direct:2012":
        i.method = "DIRECT",
        i.value = Date.parse(i.value);
        break;
    case "urn:mpeg:dash:utc:http-ntp:2014":
    case "urn:mpeg:dash:utc:ntp:2014":
    case "urn:mpeg:dash:utc:sntp:2014":
    default:
        throw new Error(kr.UNSUPPORTED_UTC_TIMING_SCHEME)
    }
    return i
}
  , ig = function(t, r) {
    r === void 0 && (r = {});
    var i = tg(gd(t), r)
      , e = $m(i.representationInfo);
    return Um(e, i.locations, r.sidxMapping)
}
  , ng = function(t) {
    return rg(gd(t))
}
  , Lu = Math.pow(2, 32)
  , ag = function(a) {
    var t = new DataView(a.buffer,a.byteOffset,a.byteLength)
      , r = {
        version: a[0],
        flags: new Uint8Array(a.subarray(1, 4)),
        references: [],
        referenceId: t.getUint32(4),
        timescale: t.getUint32(8)
    }
      , i = 12;
    r.version === 0 ? (r.earliestPresentationTime = t.getUint32(i),
    r.firstOffset = t.getUint32(i + 4),
    i += 8) : (r.earliestPresentationTime = t.getUint32(i) * Lu + t.getUint32(i + 4),
    r.firstOffset = t.getUint32(i + 8) * Lu + t.getUint32(i + 12),
    i += 16),
    i += 2;
    var e = t.getUint16(i);
    for (i += 2; e > 0; i += 12,
    e--)
        r.references.push({
            referenceType: (a[i] & 128) >>> 7,
            referencedSize: t.getUint32(i) & 2147483647,
            subsegmentDuration: t.getUint32(i + 4),
            startsWithSap: !!(a[i + 8] & 128),
            sapType: (a[i + 8] & 112) >>> 4,
            sapDeltaTime: t.getUint32(i + 8) & 268435455
        });
    return r
}
  , sg = ag;
const og = Nt(sg);
var ug = function(t) {
    return t.toString(2).length
}
  , lg = function(t) {
    return Math.ceil(ug(t) / 8)
}
  , dg = function(t) {
    return ArrayBuffer.isView === "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer
}
  , cg = function(t) {
    return dg(t)
}
  , K = function(t) {
    return t instanceof Uint8Array ? t : (!Array.isArray(t) && !cg(t) && !(t instanceof ArrayBuffer) && (typeof t != "number" || typeof t == "number" && t !== t ? t = 0 : t = [t]),
    new Uint8Array(t && t.buffer || t,t && t.byteOffset || 0,t && t.byteLength || 0))
}
  , Pe = A.BigInt || Number
  , Xa = [Pe("0x1"), Pe("0x100"), Pe("0x10000"), Pe("0x1000000"), Pe("0x100000000"), Pe("0x10000000000"), Pe("0x1000000000000"), Pe("0x100000000000000"), Pe("0x10000000000000000")];
(function() {
    var a = new Uint16Array([65484])
      , t = new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
    return t[0] === 255 ? "big" : t[0] === 204 ? "little" : "unknown"
}
)();
var fg = function(t, r) {
    var i = r === void 0 ? {} : r
      , e = i.signed
      , n = e === void 0 ? !1 : e
      , s = i.le
      , o = s === void 0 ? !1 : s;
    t = K(t);
    var u = o ? "reduce" : "reduceRight"
      , l = t[u] ? t[u] : Array.prototype[u]
      , c = l.call(t, function(g, y, S) {
        var x = o ? S : Math.abs(S + 1 - t.length);
        return g + Pe(y) * Xa[x]
    }, Pe(0));
    if (n) {
        var p = Xa[t.length] / Pe(2) - Pe(1);
        c = Pe(c),
        c > p && (c -= p,
        c -= p,
        c -= Pe(2))
    }
    return Number(c)
}
  , hg = function(t, r) {
    var i = r === void 0 ? {} : r
      , e = i.le
      , n = e === void 0 ? !1 : e;
    (typeof t != "bigint" && typeof t != "number" || typeof t == "number" && t !== t) && (t = 0),
    t = Pe(t);
    for (var s = lg(t), o = new Uint8Array(new ArrayBuffer(s)), u = 0; u < s; u++) {
        var l = n ? u : Math.abs(u + 1 - o.length);
        o[l] = Number(t / Xa[u] & Pe(255)),
        t < 0 && (o[l] = Math.abs(~o[l]),
        o[l] -= u === 0 ? 1 : 2)
    }
    return o
}
  , vd = function(t, r) {
    if (typeof t != "string" && t && typeof t.toString == "function" && (t = t.toString()),
    typeof t != "string")
        return new Uint8Array;
    r || (t = unescape(encodeURIComponent(t)));
    for (var i = new Uint8Array(t.length), e = 0; e < t.length; e++)
        i[e] = t.charCodeAt(e);
    return i
}
  , pg = function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
    if (r = r.filter(function(o) {
        return o && (o.byteLength || o.length) && typeof o != "string"
    }),
    r.length <= 1)
        return K(r[0]);
    var e = r.reduce(function(o, u, l) {
        return o + (u.byteLength || u.length)
    }, 0)
      , n = new Uint8Array(e)
      , s = 0;
    return r.forEach(function(o) {
        o = K(o),
        n.set(o, s),
        s += o.byteLength
    }),
    n
}
  , he = function(t, r, i) {
    var e = i === void 0 ? {} : i
      , n = e.offset
      , s = n === void 0 ? 0 : n
      , o = e.mask
      , u = o === void 0 ? [] : o;
    t = K(t),
    r = K(r);
    var l = r.every ? r.every : Array.prototype.every;
    return r.length && t.length - s >= r.length && l.call(r, function(c, p) {
        var g = u[p] ? u[p] & t[s + p] : t[s + p];
        return c === g
    })
}
  , mg = K([73, 68, 51])
  , gg = function(t, r) {
    r === void 0 && (r = 0),
    t = K(t);
    var i = t[r + 5]
      , e = t[r + 6] << 21 | t[r + 7] << 14 | t[r + 8] << 7 | t[r + 9]
      , n = (i & 16) >> 4;
    return n ? e + 20 : e + 10
}
  , ai = function a(t, r) {
    return r === void 0 && (r = 0),
    t = K(t),
    t.length - r < 10 || !he(t, mg, {
        offset: r
    }) ? r : (r += gg(t, r),
    a(t, r))
}
  , Ru = function(t) {
    return typeof t == "string" ? vd(t) : t
}
  , vg = function(t) {
    return Array.isArray(t) ? t.map(function(r) {
        return Ru(r)
    }) : [Ru(t)]
}
  , _g = function a(t, r, i) {
    i === void 0 && (i = !1),
    r = vg(r),
    t = K(t);
    var e = [];
    if (!r.length)
        return e;
    for (var n = 0; n < t.length; ) {
        var s = (t[n] << 24 | t[n + 1] << 16 | t[n + 2] << 8 | t[n + 3]) >>> 0
          , o = t.subarray(n + 4, n + 8);
        if (s === 0)
            break;
        var u = n + s;
        if (u > t.length) {
            if (i)
                break;
            u = t.length
        }
        var l = t.subarray(n + 8, u);
        he(o, r[0]) && (r.length === 1 ? e.push(l) : e.push.apply(e, a(l, r.slice(1), i))),
        n = u
    }
    return e
}
  , Zi = {
    EBML: K([26, 69, 223, 163]),
    DocType: K([66, 130]),
    Segment: K([24, 83, 128, 103]),
    SegmentInfo: K([21, 73, 169, 102]),
    Tracks: K([22, 84, 174, 107]),
    Track: K([174]),
    TrackNumber: K([215]),
    DefaultDuration: K([35, 227, 131]),
    TrackEntry: K([174]),
    TrackType: K([131]),
    FlagDefault: K([136]),
    CodecID: K([134]),
    CodecPrivate: K([99, 162]),
    VideoTrack: K([224]),
    AudioTrack: K([225]),
    Cluster: K([31, 67, 182, 117]),
    Timestamp: K([231]),
    TimestampScale: K([42, 215, 177]),
    BlockGroup: K([160]),
    BlockDuration: K([155]),
    Block: K([161]),
    SimpleBlock: K([163])
}
  , Ya = [128, 64, 32, 16, 8, 4, 2, 1]
  , yg = function(t) {
    for (var r = 1, i = 0; i < Ya.length && !(t & Ya[i]); i++)
        r++;
    return r
}
  , yn = function(t, r, i, e) {
    i === void 0 && (i = !0),
    e === void 0 && (e = !1);
    var n = yg(t[r])
      , s = t.subarray(r, r + n);
    return i && (s = Array.prototype.slice.call(t, r, r + n),
    s[0] ^= Ya[n - 1]),
    {
        length: n,
        value: fg(s, {
            signed: e
        }),
        bytes: s
    }
}
  , Mu = function a(t) {
    return typeof t == "string" ? t.match(/.{1,2}/g).map(function(r) {
        return a(r)
    }) : typeof t == "number" ? hg(t) : t
}
  , Tg = function(t) {
    return Array.isArray(t) ? t.map(function(r) {
        return Mu(r)
    }) : [Mu(t)]
}
  , bg = function a(t, r, i) {
    if (i >= r.length)
        return r.length;
    var e = yn(r, i, !1);
    if (he(t.bytes, e.bytes))
        return i;
    var n = yn(r, i + e.length);
    return a(t, r, i + n.length + n.value + e.length)
}
  , Fu = function a(t, r) {
    r = Tg(r),
    t = K(t);
    var i = [];
    if (!r.length)
        return i;
    for (var e = 0; e < t.length; ) {
        var n = yn(t, e, !1)
          , s = yn(t, e + n.length)
          , o = e + n.length + s.length;
        s.value === 127 && (s.value = bg(n, t, o),
        s.value !== t.length && (s.value -= o));
        var u = o + s.value > t.length ? t.length : o + s.value
          , l = t.subarray(o, u);
        he(r[0], n.bytes) && (r.length === 1 ? i.push(l) : i = i.concat(a(l, r.slice(1))));
        var c = n.length + s.length + l.length;
        e += c
    }
    return i
}
  , xg = K([0, 0, 0, 1])
  , Sg = K([0, 0, 1])
  , Eg = K([0, 0, 3])
  , Cg = function(t) {
    for (var r = [], i = 1; i < t.length - 2; )
        he(t.subarray(i, i + 3), Eg) && (r.push(i + 2),
        i++),
        i++;
    if (r.length === 0)
        return t;
    var e = t.length - r.length
      , n = new Uint8Array(e)
      , s = 0;
    for (i = 0; i < e; s++,
    i++)
        s === r[0] && (s++,
        r.shift()),
        n[i] = t[s];
    return n
}
  , _d = function(t, r, i, e) {
    e === void 0 && (e = 1 / 0),
    t = K(t),
    i = [].concat(i);
    for (var n = 0, s, o = 0; n < t.length && (o < e || s); ) {
        var u = void 0;
        if (he(t.subarray(n), xg) ? u = 4 : he(t.subarray(n), Sg) && (u = 3),
        !u) {
            n++;
            continue
        }
        if (o++,
        s)
            return Cg(t.subarray(s, n));
        var l = void 0;
        r === "h264" ? l = t[n + u] & 31 : r === "h265" && (l = t[n + u] >> 1 & 63),
        i.indexOf(l) !== -1 && (s = n + u),
        n += u + (r === "h264" ? 1 : 2)
    }
    return t.subarray(0, 0)
}
  , wg = function(t, r, i) {
    return _d(t, "h264", r, i)
}
  , kg = function(t, r, i) {
    return _d(t, "h265", r, i)
}
  , Fe = {
    webm: K([119, 101, 98, 109]),
    matroska: K([109, 97, 116, 114, 111, 115, 107, 97]),
    flac: K([102, 76, 97, 67]),
    ogg: K([79, 103, 103, 83]),
    ac3: K([11, 119]),
    riff: K([82, 73, 70, 70]),
    avi: K([65, 86, 73]),
    wav: K([87, 65, 86, 69]),
    "3gp": K([102, 116, 121, 112, 51, 103]),
    mp4: K([102, 116, 121, 112]),
    fmp4: K([115, 116, 121, 112]),
    mov: K([102, 116, 121, 112, 113, 116]),
    moov: K([109, 111, 111, 118]),
    moof: K([109, 111, 111, 102])
}
  , Ar = {
    aac: function(t) {
        var r = ai(t);
        return he(t, [255, 16], {
            offset: r,
            mask: [255, 22]
        })
    },
    mp3: function(t) {
        var r = ai(t);
        return he(t, [255, 2], {
            offset: r,
            mask: [255, 6]
        })
    },
    webm: function(t) {
        var r = Fu(t, [Zi.EBML, Zi.DocType])[0];
        return he(r, Fe.webm)
    },
    mkv: function(t) {
        var r = Fu(t, [Zi.EBML, Zi.DocType])[0];
        return he(r, Fe.matroska)
    },
    mp4: function(t) {
        if (Ar["3gp"](t) || Ar.mov(t))
            return !1;
        if (he(t, Fe.mp4, {
            offset: 4
        }) || he(t, Fe.fmp4, {
            offset: 4
        }) || he(t, Fe.moof, {
            offset: 4
        }) || he(t, Fe.moov, {
            offset: 4
        }))
            return !0
    },
    mov: function(t) {
        return he(t, Fe.mov, {
            offset: 4
        })
    },
    "3gp": function(t) {
        return he(t, Fe["3gp"], {
            offset: 4
        })
    },
    ac3: function(t) {
        var r = ai(t);
        return he(t, Fe.ac3, {
            offset: r
        })
    },
    ts: function(t) {
        if (t.length < 189 && t.length >= 1)
            return t[0] === 71;
        for (var r = 0; r + 188 < t.length && r < 188; ) {
            if (t[r] === 71 && t[r + 188] === 71)
                return !0;
            r += 1
        }
        return !1
    },
    flac: function(t) {
        var r = ai(t);
        return he(t, Fe.flac, {
            offset: r
        })
    },
    ogg: function(t) {
        return he(t, Fe.ogg)
    },
    avi: function(t) {
        return he(t, Fe.riff) && he(t, Fe.avi, {
            offset: 8
        })
    },
    wav: function(t) {
        return he(t, Fe.riff) && he(t, Fe.wav, {
            offset: 8
        })
    },
    h264: function(t) {
        return wg(t, 7, 3).length
    },
    h265: function(t) {
        return kg(t, [32, 33], 3).length
    }
}
  , Qa = Object.keys(Ar).filter(function(a) {
    return a !== "ts" && a !== "h264" && a !== "h265"
}).concat(["ts", "h264", "h265"]);
Qa.forEach(function(a) {
    var t = Ar[a];
    Ar[a] = function(r) {
        return t(K(r))
    }
});
var Ag = Ar, Fs = function(t) {
    t = K(t);
    for (var r = 0; r < Qa.length; r++) {
        var i = Qa[r];
        if (Ag[i](t))
            return i
    }
    return ""
}, Pg = function(t) {
    return _g(t, ["moof"]).length > 0
}, Ns = 9e4, Us, Bs, qn, Hs, yd, Td, bd;
Us = function(a) {
    return a * Ns
}
;
Bs = function(a, t) {
    return a * t
}
;
qn = function(a) {
    return a / Ns
}
;
Hs = function(a, t) {
    return a / t
}
;
yd = function(a, t) {
    return Us(Hs(a, t))
}
;
Td = function(a, t) {
    return Bs(qn(a), t)
}
;
bd = function(a, t, r) {
    return qn(r ? a : a - t)
}
;
var Tn = {
    ONE_SECOND_IN_TS: Ns,
    secondsToVideoTs: Us,
    secondsToAudioTs: Bs,
    videoTsToSeconds: qn,
    audioTsToSeconds: Hs,
    audioTsToVideoTs: yd,
    videoTsToAudioTs: Td,
    metadataTsToSeconds: bd
};
/**
 * @license
 * Video.js 7.13.3 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/main/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
 */
var xd = "7.13.3", bn = {
    prefixed: !0
}, dn = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]], Nu = dn[0], si;
for (var en = 0; en < dn.length; en++)
    if (dn[en][1]in V) {
        si = dn[en];
        break
    }
if (si) {
    for (var tn = 0; tn < si.length; tn++)
        bn[Nu[tn]] = si[tn];
    bn.prefixed = si[0] !== Nu[0]
}
var Ve = []
  , Ig = function(t, r) {
    return function(i, e, n) {
        var s = r.levels[e]
          , o = new RegExp("^(" + s + ")$");
        if (i !== "log" && n.unshift(i.toUpperCase() + ":"),
        n.unshift(t + ":"),
        Ve) {
            Ve.push([].concat(n));
            var u = Ve.length - 1e3;
            Ve.splice(0, u > 0 ? u : 0)
        }
        if (A.console) {
            var l = A.console[i];
            !l && i === "debug" && (l = A.console.info || A.console.log),
            !(!l || !s || !o.test(i)) && l[Array.isArray(n) ? "apply" : "call"](A.console, n)
        }
    }
};
function Sd(a) {
    var t = "info", r, i = function() {
        for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
            s[o] = arguments[o];
        r("log", t, s)
    };
    return r = Ig(a, i),
    i.createLogger = function(e) {
        return Sd(a + ": " + e)
    }
    ,
    i.levels = {
        all: "debug|log|warn|error",
        off: "",
        debug: "debug|log|warn|error",
        info: "log|warn|error",
        warn: "warn|error",
        error: "error",
        DEFAULT: t
    },
    i.level = function(e) {
        if (typeof e == "string") {
            if (!i.levels.hasOwnProperty(e))
                throw new Error('"' + e + '" in not a valid log level');
            t = e
        }
        return t
    }
    ,
    i.history = function() {
        return Ve ? [].concat(Ve) : []
    }
    ,
    i.history.filter = function(e) {
        return (Ve || []).filter(function(n) {
            return new RegExp(".*" + e + ".*").test(n[0])
        })
    }
    ,
    i.history.clear = function() {
        Ve && (Ve.length = 0)
    }
    ,
    i.history.disable = function() {
        Ve !== null && (Ve.length = 0,
        Ve = null)
    }
    ,
    i.history.enable = function() {
        Ve === null && (Ve = [])
    }
    ,
    i.error = function() {
        for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
            n[s] = arguments[s];
        return r("error", t, n)
    }
    ,
    i.warn = function() {
        for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
            n[s] = arguments[s];
        return r("warn", t, n)
    }
    ,
    i.debug = function() {
        for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++)
            n[s] = arguments[s];
        return r("debug", t, n)
    }
    ,
    i
}
var Z = Sd("VIDEOJS")
  , Ed = Z.createLogger
  , Dg = Object.prototype.toString
  , Cd = function(t) {
    return Mt(t) ? Object.keys(t) : []
};
function br(a, t) {
    Cd(a).forEach(function(r) {
        return t(a[r], r)
    })
}
function Og(a, t, r) {
    return r === void 0 && (r = 0),
    Cd(a).reduce(function(i, e) {
        return t(i, a[e], e)
    }, r)
}
function pe(a) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
        r[i - 1] = arguments[i];
    return Object.assign ? rt.apply(void 0, [a].concat(r)) : (r.forEach(function(e) {
        e && br(e, function(n, s) {
            a[s] = n
        })
    }),
    a)
}
function Mt(a) {
    return !!a && typeof a == "object"
}
function vi(a) {
    return Mt(a) && Dg.call(a) === "[object Object]" && a.constructor === Object
}
function _i(a, t) {
    if (!a || !t)
        return "";
    if (typeof A.getComputedStyle == "function") {
        var r;
        try {
            r = A.getComputedStyle(a)
        } catch {
            return ""
        }
        return r ? r.getPropertyValue(t) || r[t] : ""
    }
    return ""
}
var Ce = A.navigator && A.navigator.userAgent || ""
  , Uu = /AppleWebKit\/([\d.]+)/i.exec(Ce)
  , Lg = Uu ? parseFloat(Uu.pop()) : null
  , wd = /iPod/i.test(Ce)
  , Rg = function() {
    var a = Ce.match(/OS (\d+)_/i);
    return a && a[1] ? a[1] : null
}()
  , It = /Android/i.test(Ce)
  , js = function() {
    var a = Ce.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    if (!a)
        return null;
    var t = a[1] && parseFloat(a[1])
      , r = a[2] && parseFloat(a[2]);
    return t && r ? parseFloat(a[1] + "." + a[2]) : t || null
}()
  , kd = It && js < 5 && Lg < 537
  , Ad = /Firefox/i.test(Ce)
  , wi = /Edg/i.test(Ce)
  , Dt = !wi && (/Chrome/i.test(Ce) || /CriOS/i.test(Ce))
  , Pd = function() {
    var a = Ce.match(/(Chrome|CriOS)\/(\d+)/);
    return a && a[2] ? parseFloat(a[2]) : null
}()
  , ki = function() {
    var a = /MSIE\s(\d+)\.\d/.exec(Ce)
      , t = a && parseFloat(a[1]);
    return !t && /Trident\/7.0/i.test(Ce) && /rv:11.0/.test(Ce) && (t = 11),
    t
}()
  , Vs = /Safari/i.test(Ce) && !Dt && !It && !wi
  , Id = /Windows/i.test(Ce)
  , Pr = !!(Fr() && ("ontouchstart"in A || A.navigator.maxTouchPoints || A.DocumentTouch && A.document instanceof A.DocumentTouch))
  , Ws = /iPad/i.test(Ce) || Vs && Pr && !/iPhone/i.test(Ce)
  , Gs = /iPhone/i.test(Ce) && !Ws
  , Ge = Gs || Ws || wd
  , zn = (Vs || Ge) && !Dt
  , Mg = Object.freeze({
    __proto__: null,
    IS_IPOD: wd,
    IOS_VERSION: Rg,
    IS_ANDROID: It,
    ANDROID_VERSION: js,
    IS_NATIVE_ANDROID: kd,
    IS_FIREFOX: Ad,
    IS_EDGE: wi,
    IS_CHROME: Dt,
    CHROME_VERSION: Pd,
    IE_VERSION: ki,
    IS_SAFARI: Vs,
    IS_WINDOWS: Id,
    TOUCH_ENABLED: Pr,
    IS_IPAD: Ws,
    IS_IPHONE: Gs,
    IS_IOS: Ge,
    IS_ANY_SAFARI: zn
});
function Bu(a) {
    return typeof a == "string" && !!a.trim()
}
function Dd(a) {
    if (a.indexOf(" ") >= 0)
        throw new Error("class has illegal whitespace characters")
}
function Fg(a) {
    return new RegExp("(^|\\s)" + a + "($|\\s)")
}
function Fr() {
    return V === A.document
}
function Nr(a) {
    return Mt(a) && a.nodeType === 1
}
function Od() {
    try {
        return A.parent !== A.self
    } catch {
        return !0
    }
}
function Ld(a) {
    return function(t, r) {
        if (!Bu(t))
            return V[a](null);
        Bu(r) && (r = V.querySelector(r));
        var i = Nr(r) ? r : V;
        return i[a] && i[a](t)
    }
}
function ve(a, t, r, i) {
    a === void 0 && (a = "div"),
    t === void 0 && (t = {}),
    r === void 0 && (r = {});
    var e = V.createElement(a);
    return Object.getOwnPropertyNames(t).forEach(function(n) {
        var s = t[n];
        n.indexOf("aria-") !== -1 || n === "role" || n === "type" ? (Z.warn(`Setting attributes in the second argument of createEl()
has been deprecated. Use the third argument instead.
` + ("createEl(type, properties, attributes). Attempting to set " + n + " to " + s + ".")),
        e.setAttribute(n, s)) : n === "textContent" ? nr(e, s) : (e[n] !== s || n === "tabIndex") && (e[n] = s)
    }),
    Object.getOwnPropertyNames(r).forEach(function(n) {
        e.setAttribute(n, r[n])
    }),
    i && zs(e, i),
    e
}
function nr(a, t) {
    return typeof a.textContent > "u" ? a.innerText = t : a.textContent = t,
    a
}
function Ja(a, t) {
    t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a)
}
function Jt(a, t) {
    return Dd(t),
    a.classList ? a.classList.contains(t) : Fg(t).test(a.className)
}
function Et(a, t) {
    return a.classList ? a.classList.add(t) : Jt(a, t) || (a.className = (a.className + " " + t).trim()),
    a
}
function Ai(a, t) {
    return a.classList ? a.classList.remove(t) : (Dd(t),
    a.className = a.className.split(/\s+/).filter(function(r) {
        return r !== t
    }).join(" ")),
    a
}
function Rd(a, t, r) {
    var i = Jt(a, t);
    if (typeof r == "function" && (r = r(a, t)),
    typeof r != "boolean" && (r = !i),
    r !== i)
        return r ? Et(a, t) : Ai(a, t),
        a
}
function Md(a, t) {
    Object.getOwnPropertyNames(t).forEach(function(r) {
        var i = t[r];
        i === null || typeof i > "u" || i === !1 ? a.removeAttribute(r) : a.setAttribute(r, i === !0 ? "" : i)
    })
}
function bt(a) {
    var t = {}
      , r = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
    if (a && a.attributes && a.attributes.length > 0)
        for (var i = a.attributes, e = i.length - 1; e >= 0; e--) {
            var n = i[e].name
              , s = i[e].value;
            (typeof a[n] == "boolean" || r.indexOf("," + n + ",") !== -1) && (s = s !== null),
            t[n] = s
        }
    return t
}
function Fd(a, t) {
    return a.getAttribute(t)
}
function yi(a, t, r) {
    a.setAttribute(t, r)
}
function $n(a, t) {
    a.removeAttribute(t)
}
function Nd() {
    V.body.focus(),
    V.onselectstart = function() {
        return !1
    }
}
function Ud() {
    V.onselectstart = function() {
        return !0
    }
}
function Ir(a) {
    if (a && a.getBoundingClientRect && a.parentNode) {
        var t = a.getBoundingClientRect()
          , r = {};
        return ["bottom", "height", "left", "right", "top", "width"].forEach(function(i) {
            t[i] !== void 0 && (r[i] = t[i])
        }),
        r.height || (r.height = parseFloat(_i(a, "height"))),
        r.width || (r.width = parseFloat(_i(a, "width"))),
        r
    }
}
function Ti(a) {
    if (!a || a && !a.offsetParent)
        return {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
    for (var t = a.offsetWidth, r = a.offsetHeight, i = 0, e = 0; a.offsetParent && a !== V[bn.fullscreenElement]; )
        i += a.offsetLeft,
        e += a.offsetTop,
        a = a.offsetParent;
    return {
        left: i,
        top: e,
        width: t,
        height: r
    }
}
function Kn(a, t) {
    var r = {
        x: 0,
        y: 0
    };
    if (Ge)
        for (var i = a; i && i.nodeName.toLowerCase() !== "html"; ) {
            var e = _i(i, "transform");
            if (/^matrix/.test(e)) {
                var n = e.slice(7, -1).split(/,\s/).map(Number);
                r.x += n[4],
                r.y += n[5]
            } else if (/^matrix3d/.test(e)) {
                var s = e.slice(9, -1).split(/,\s/).map(Number);
                r.x += s[12],
                r.y += s[13]
            }
            i = i.parentNode
        }
    var o = {}
      , u = Ti(t.target)
      , l = Ti(a)
      , c = l.width
      , p = l.height
      , g = t.offsetY - (l.top - u.top)
      , y = t.offsetX - (l.left - u.left);
    return t.changedTouches && (y = t.changedTouches[0].pageX - l.left,
    g = t.changedTouches[0].pageY + l.top,
    Ge && (y -= r.x,
    g -= r.y)),
    o.y = 1 - Math.max(0, Math.min(1, g / p)),
    o.x = Math.max(0, Math.min(1, y / c)),
    o
}
function Bd(a) {
    return Mt(a) && a.nodeType === 3
}
function qs(a) {
    for (; a.firstChild; )
        a.removeChild(a.firstChild);
    return a
}
function Hd(a) {
    return typeof a == "function" && (a = a()),
    (Array.isArray(a) ? a : [a]).map(function(t) {
        if (typeof t == "function" && (t = t()),
        Nr(t) || Bd(t))
            return t;
        if (typeof t == "string" && /\S/.test(t))
            return V.createTextNode(t)
    }).filter(function(t) {
        return t
    })
}
function zs(a, t) {
    return Hd(t).forEach(function(r) {
        return a.appendChild(r)
    }),
    a
}
function jd(a, t) {
    return zs(qs(a), t)
}
function Dr(a) {
    return a.button === void 0 && a.buttons === void 0 || a.button === 0 && a.buttons === void 0 || a.type === "mouseup" && a.button === 0 && a.buttons === 0 ? !0 : !(a.button !== 0 || a.buttons !== 1)
}
var Ft = Ld("querySelector"), Vd = Ld("querySelectorAll"), Wd = Object.freeze({
    __proto__: null,
    isReal: Fr,
    isEl: Nr,
    isInFrame: Od,
    createEl: ve,
    textContent: nr,
    prependTo: Ja,
    hasClass: Jt,
    addClass: Et,
    removeClass: Ai,
    toggleClass: Rd,
    setAttributes: Md,
    getAttributes: bt,
    getAttribute: Fd,
    setAttribute: yi,
    removeAttribute: $n,
    blockTextSelection: Nd,
    unblockTextSelection: Ud,
    getBoundingClientRect: Ir,
    findPosition: Ti,
    getPointerPosition: Kn,
    isTextNode: Bd,
    emptyEl: qs,
    normalizeContent: Hd,
    appendContent: zs,
    insertContent: jd,
    isSingleLeftClick: Dr,
    $: Ft,
    $$: Vd
}), Gd = !1, Za, Ng = function() {
    if (Za.options.autoSetup !== !1) {
        var t = Array.prototype.slice.call(V.getElementsByTagName("video"))
          , r = Array.prototype.slice.call(V.getElementsByTagName("audio"))
          , i = Array.prototype.slice.call(V.getElementsByTagName("video-js"))
          , e = t.concat(r, i);
        if (e && e.length > 0)
            for (var n = 0, s = e.length; n < s; n++) {
                var o = e[n];
                if (o && o.getAttribute) {
                    if (o.player === void 0) {
                        var u = o.getAttribute("data-setup");
                        u !== null && Za(o)
                    }
                } else {
                    es(1);
                    break
                }
            }
        else
            Gd || es(1)
    }
};
function es(a, t) {
    Fr() && (t && (Za = t),
    A.setTimeout(Ng, a))
}
function ts() {
    Gd = !0,
    A.removeEventListener("load", ts)
}
Fr() && (V.readyState === "complete" ? ts() : A.addEventListener("load", ts));
var qd = function(t) {
    var r = V.createElement("style");
    return r.className = t,
    r
}
  , zd = function(t, r) {
    t.styleSheet ? t.styleSheet.cssText = r : t.textContent = r
}
  , Ug = 3
  , Bg = Ug;
function Ut() {
    return Bg++
}
var $d;
A.WeakMap || ($d = function() {
    function a() {
        this.vdata = "vdata" + Math.floor(A.performance && A.performance.now() || Date.now()),
        this.data = {}
    }
    var t = a.prototype;
    return t.set = function(i, e) {
        var n = i[this.vdata] || Ut();
        return i[this.vdata] || (i[this.vdata] = n),
        this.data[n] = e,
        this
    }
    ,
    t.get = function(i) {
        var e = i[this.vdata];
        if (e)
            return this.data[e];
        Z("We have no data for this element", i)
    }
    ,
    t.has = function(i) {
        var e = i[this.vdata];
        return e in this.data
    }
    ,
    t.delete = function(i) {
        var e = i[this.vdata];
        e && (delete this.data[e],
        delete i[this.vdata])
    }
    ,
    a
}());
var He = A.WeakMap ? new WeakMap : new $d;
function Hu(a, t) {
    if (He.has(a)) {
        var r = He.get(a);
        r.handlers[t].length === 0 && (delete r.handlers[t],
        a.removeEventListener ? a.removeEventListener(t, r.dispatcher, !1) : a.detachEvent && a.detachEvent("on" + t, r.dispatcher)),
        Object.getOwnPropertyNames(r.handlers).length <= 0 && (delete r.handlers,
        delete r.dispatcher,
        delete r.disabled),
        Object.getOwnPropertyNames(r).length === 0 && He.delete(a)
    }
}
function $s(a, t, r, i) {
    r.forEach(function(e) {
        a(t, e, i)
    })
}
function Xn(a) {
    if (a.fixed_)
        return a;
    function t() {
        return !0
    }
    function r() {
        return !1
    }
    if (!a || !a.isPropagationStopped) {
        var i = a || A.event;
        a = {};
        for (var e in i)
            e !== "layerX" && e !== "layerY" && e !== "keyLocation" && e !== "webkitMovementX" && e !== "webkitMovementY" && (e === "returnValue" && i.preventDefault || (a[e] = i[e]));
        if (a.target || (a.target = a.srcElement || V),
        a.relatedTarget || (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement),
        a.preventDefault = function() {
            i.preventDefault && i.preventDefault(),
            a.returnValue = !1,
            i.returnValue = !1,
            a.defaultPrevented = !0
        }
        ,
        a.defaultPrevented = !1,
        a.stopPropagation = function() {
            i.stopPropagation && i.stopPropagation(),
            a.cancelBubble = !0,
            i.cancelBubble = !0,
            a.isPropagationStopped = t
        }
        ,
        a.isPropagationStopped = r,
        a.stopImmediatePropagation = function() {
            i.stopImmediatePropagation && i.stopImmediatePropagation(),
            a.isImmediatePropagationStopped = t,
            a.stopPropagation()
        }
        ,
        a.isImmediatePropagationStopped = r,
        a.clientX !== null && a.clientX !== void 0) {
            var n = V.documentElement
              , s = V.body;
            a.pageX = a.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0),
            a.pageY = a.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)
        }
        a.which = a.charCode || a.keyCode,
        a.button !== null && a.button !== void 0 && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0)
    }
    return a.fixed_ = !0,
    a
}
var rn, Hg = function() {
    if (typeof rn != "boolean") {
        rn = !1;
        try {
            var t = Object.defineProperty({}, "passive", {
                get: function() {
                    rn = !0
                }
            });
            A.addEventListener("test", null, t),
            A.removeEventListener("test", null, t)
        } catch {}
    }
    return rn
}, jg = ["touchstart", "touchmove"];
function Je(a, t, r) {
    if (Array.isArray(t))
        return $s(Je, a, t, r);
    He.has(a) || He.set(a, {});
    var i = He.get(a);
    if (i.handlers || (i.handlers = {}),
    i.handlers[t] || (i.handlers[t] = []),
    r.guid || (r.guid = Ut()),
    i.handlers[t].push(r),
    i.dispatcher || (i.disabled = !1,
    i.dispatcher = function(n, s) {
        if (!i.disabled) {
            n = Xn(n);
            var o = i.handlers[n.type];
            if (o)
                for (var u = o.slice(0), l = 0, c = u.length; l < c && !n.isImmediatePropagationStopped(); l++)
                    try {
                        u[l].call(a, n, s)
                    } catch (p) {
                        Z.error(p)
                    }
        }
    }
    ),
    i.handlers[t].length === 1)
        if (a.addEventListener) {
            var e = !1;
            Hg() && jg.indexOf(t) > -1 && (e = {
                passive: !0
            }),
            a.addEventListener(t, i.dispatcher, e)
        } else
            a.attachEvent && a.attachEvent("on" + t, i.dispatcher)
}
function Oe(a, t, r) {
    if (He.has(a)) {
        var i = He.get(a);
        if (i.handlers) {
            if (Array.isArray(t))
                return $s(Oe, a, t, r);
            var e = function(l, c) {
                i.handlers[c] = [],
                Hu(l, c)
            };
            if (t === void 0) {
                for (var n in i.handlers)
                    Object.prototype.hasOwnProperty.call(i.handlers || {}, n) && e(a, n);
                return
            }
            var s = i.handlers[t];
            if (s) {
                if (!r) {
                    e(a, t);
                    return
                }
                if (r.guid)
                    for (var o = 0; o < s.length; o++)
                        s[o].guid === r.guid && s.splice(o--, 1);
                Hu(a, t)
            }
        }
    }
}
function Ur(a, t, r) {
    var i = He.has(a) ? He.get(a) : {}
      , e = a.parentNode || a.ownerDocument;
    if (typeof t == "string" ? t = {
        type: t,
        target: a
    } : t.target || (t.target = a),
    t = Xn(t),
    i.dispatcher && i.dispatcher.call(a, t, r),
    e && !t.isPropagationStopped() && t.bubbles === !0)
        Ur.call(null, e, t, r);
    else if (!e && !t.defaultPrevented && t.target && t.target[t.type]) {
        He.has(t.target) || He.set(t.target, {});
        var n = He.get(t.target);
        t.target[t.type] && (n.disabled = !0,
        typeof t.target[t.type] == "function" && t.target[t.type](),
        n.disabled = !1)
    }
    return !t.defaultPrevented
}
function Yn(a, t, r) {
    if (Array.isArray(t))
        return $s(Yn, a, t, r);
    var i = function e() {
        Oe(a, t, e),
        r.apply(this, arguments)
    };
    i.guid = r.guid = r.guid || Ut(),
    Je(a, t, i)
}
function Kd(a, t, r) {
    var i = function e() {
        Oe(a, t, e),
        r.apply(this, arguments)
    };
    i.guid = r.guid = r.guid || Ut(),
    Je(a, t, i)
}
var Vg = Object.freeze({
    __proto__: null,
    fixEvent: Xn,
    on: Je,
    off: Oe,
    trigger: Ur,
    one: Yn,
    any: Kd
})
  , lt = 30
  , oe = function(t, r, i) {
    r.guid || (r.guid = Ut());
    var e = r.bind(t);
    return e.guid = i ? i + "_" + r.guid : r.guid,
    e
}
  , Pt = function(t, r) {
    var i = A.performance.now()
      , e = function() {
        var s = A.performance.now();
        s - i >= r && (t.apply(void 0, arguments),
        i = s)
    };
    return e
}
  , Wg = function(t, r, i, e) {
    e === void 0 && (e = A);
    var n, s = function() {
        e.clearTimeout(n),
        n = null
    }, o = function() {
        var l = this
          , c = arguments
          , p = function() {
            n = null,
            p = null,
            i || t.apply(l, c)
        };
        !n && i && t.apply(l, c),
        e.clearTimeout(n),
        n = e.setTimeout(p, r)
    };
    return o.cancel = s,
    o
}
  , ke = function() {};
ke.prototype.allowedEvents_ = {};
ke.prototype.on = function(a, t) {
    var r = this.addEventListener;
    this.addEventListener = function() {}
    ,
    Je(this, a, t),
    this.addEventListener = r
}
;
ke.prototype.addEventListener = ke.prototype.on;
ke.prototype.off = function(a, t) {
    Oe(this, a, t)
}
;
ke.prototype.removeEventListener = ke.prototype.off;
ke.prototype.one = function(a, t) {
    var r = this.addEventListener;
    this.addEventListener = function() {}
    ,
    Yn(this, a, t),
    this.addEventListener = r
}
;
ke.prototype.any = function(a, t) {
    var r = this.addEventListener;
    this.addEventListener = function() {}
    ,
    Kd(this, a, t),
    this.addEventListener = r
}
;
ke.prototype.trigger = function(a) {
    var t = a.type || a;
    typeof a == "string" && (a = {
        type: t
    }),
    a = Xn(a),
    this.allowedEvents_[t] && this["on" + t] && this["on" + t](a),
    Ur(this, a)
}
;
ke.prototype.dispatchEvent = ke.prototype.trigger;
var Zr;
ke.prototype.queueTrigger = function(a) {
    var t = this;
    Zr || (Zr = new Map);
    var r = a.type || a
      , i = Zr.get(this);
    i || (i = new Map,
    Zr.set(this, i));
    var e = i.get(r);
    i.delete(r),
    A.clearTimeout(e);
    var n = A.setTimeout(function() {
        i.size === 0 && (i = null,
        Zr.delete(t)),
        t.trigger(a)
    }, 0);
    i.set(r, n)
}
;
var Qn = function(t) {
    return typeof t.name == "function" ? t.name() : typeof t.name == "string" ? t.name : t.name_ ? t.name_ : t.constructor && t.constructor.name ? t.constructor.name : typeof t
}
  , Ct = function(t) {
    return t instanceof ke || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(r) {
        return typeof t[r] == "function"
    })
}
  , Gg = function(t, r) {
    Ct(t) ? r() : (t.eventedCallbacks || (t.eventedCallbacks = []),
    t.eventedCallbacks.push(r))
}
  , rs = function(t) {
    return typeof t == "string" && /\S/.test(t) || Array.isArray(t) && !!t.length
}
  , xn = function(t, r, i) {
    if (!t || !t.nodeName && !Ct(t))
        throw new Error("Invalid target for " + Qn(r) + "#" + i + "; must be a DOM node or evented object.")
}
  , Xd = function(t, r, i) {
    if (!rs(t))
        throw new Error("Invalid event type for " + Qn(r) + "#" + i + "; must be a non-empty string or array.")
}
  , Yd = function(t, r, i) {
    if (typeof t != "function")
        throw new Error("Invalid listener for " + Qn(r) + "#" + i + "; must be a function.")
}
  , Aa = function(t, r, i) {
    var e = r.length < 3 || r[0] === t || r[0] === t.eventBusEl_, n, s, o;
    return e ? (n = t.eventBusEl_,
    r.length >= 3 && r.shift(),
    s = r[0],
    o = r[1]) : (n = r[0],
    s = r[1],
    o = r[2]),
    xn(n, t, i),
    Xd(s, t, i),
    Yd(o, t, i),
    o = oe(t, o),
    {
        isTargetingSelf: e,
        target: n,
        type: s,
        listener: o
    }
}
  , $t = function(t, r, i, e) {
    xn(t, t, r),
    t.nodeName ? Vg[r](t, i, e) : t[r](i, e)
}
  , qg = {
    on: function() {
        for (var t = this, r = arguments.length, i = new Array(r), e = 0; e < r; e++)
            i[e] = arguments[e];
        var n = Aa(this, i, "on")
          , s = n.isTargetingSelf
          , o = n.target
          , u = n.type
          , l = n.listener;
        if ($t(o, "on", u, l),
        !s) {
            var c = function() {
                return t.off(o, u, l)
            };
            c.guid = l.guid;
            var p = function() {
                return t.off("dispose", c)
            };
            p.guid = l.guid,
            $t(this, "on", "dispose", c),
            $t(o, "on", "dispose", p)
        }
    },
    one: function() {
        for (var t = this, r = arguments.length, i = new Array(r), e = 0; e < r; e++)
            i[e] = arguments[e];
        var n = Aa(this, i, "one")
          , s = n.isTargetingSelf
          , o = n.target
          , u = n.type
          , l = n.listener;
        if (s)
            $t(o, "one", u, l);
        else {
            var c = function p() {
                t.off(o, u, p);
                for (var g = arguments.length, y = new Array(g), S = 0; S < g; S++)
                    y[S] = arguments[S];
                l.apply(null, y)
            };
            c.guid = l.guid,
            $t(o, "one", u, c)
        }
    },
    any: function() {
        for (var t = this, r = arguments.length, i = new Array(r), e = 0; e < r; e++)
            i[e] = arguments[e];
        var n = Aa(this, i, "any")
          , s = n.isTargetingSelf
          , o = n.target
          , u = n.type
          , l = n.listener;
        if (s)
            $t(o, "any", u, l);
        else {
            var c = function p() {
                t.off(o, u, p);
                for (var g = arguments.length, y = new Array(g), S = 0; S < g; S++)
                    y[S] = arguments[S];
                l.apply(null, y)
            };
            c.guid = l.guid,
            $t(o, "any", u, c)
        }
    },
    off: function(t, r, i) {
        if (!t || rs(t))
            Oe(this.eventBusEl_, t, r);
        else {
            var e = t
              , n = r;
            xn(e, this, "off"),
            Xd(n, this, "off"),
            Yd(i, this, "off"),
            i = oe(this, i),
            this.off("dispose", i),
            e.nodeName ? (Oe(e, n, i),
            Oe(e, "dispose", i)) : Ct(e) && (e.off(n, i),
            e.off("dispose", i))
        }
    },
    trigger: function(t, r) {
        xn(this.eventBusEl_, this, "trigger");
        var i = t && typeof t != "string" ? t.type : t;
        if (!rs(i)) {
            var e = "Invalid event type for " + Qn(this) + "#trigger; must be a non-empty string or object with a type key that has a non-empty value.";
            if (t)
                (this.log || Z).error(e);
            else
                throw new Error(e)
        }
        return Ur(this.eventBusEl_, t, r)
    }
};
function Ks(a, t) {
    t === void 0 && (t = {});
    var r = t
      , i = r.eventBusKey;
    if (i) {
        if (!a[i].nodeName)
            throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
        a.eventBusEl_ = a[i]
    } else
        a.eventBusEl_ = ve("span", {
            className: "vjs-event-bus"
        });
    return pe(a, qg),
    a.eventedCallbacks && a.eventedCallbacks.forEach(function(e) {
        e()
    }),
    a.on("dispose", function() {
        a.off(),
        A.setTimeout(function() {
            a.eventBusEl_ = null
        }, 0)
    }),
    a
}
var zg = {
    state: {},
    setState: function(t) {
        var r = this;
        typeof t == "function" && (t = t());
        var i;
        return br(t, function(e, n) {
            r.state[n] !== e && (i = i || {},
            i[n] = {
                from: r.state[n],
                to: e
            }),
            r.state[n] = e
        }),
        i && Ct(this) && this.trigger({
            changes: i,
            type: "statechanged"
        }),
        i
    }
};
function Qd(a, t) {
    return pe(a, zg),
    a.state = pe({}, a.state, t),
    typeof a.handleStateChanged == "function" && Ct(a) && a.on("statechanged", a.handleStateChanged),
    a
}
var cn = function(t) {
    return typeof t != "string" ? t : t.replace(/./, function(r) {
        return r.toLowerCase()
    })
}
  , Te = function(t) {
    return typeof t != "string" ? t : t.replace(/./, function(r) {
        return r.toUpperCase()
    })
}
  , $g = function(t, r) {
    return Te(t) === Te(r)
};
function fe() {
    for (var a = {}, t = arguments.length, r = new Array(t), i = 0; i < t; i++)
        r[i] = arguments[i];
    return r.forEach(function(e) {
        e && br(e, function(n, s) {
            if (!vi(n)) {
                a[s] = n;
                return
            }
            vi(a[s]) || (a[s] = {}),
            a[s] = fe(a[s], n)
        })
    }),
    a
}
var Kg = function() {
    function a() {
        this.map_ = {}
    }
    var t = a.prototype;
    return t.has = function(i) {
        return i in this.map_
    }
    ,
    t.delete = function(i) {
        var e = this.has(i);
        return delete this.map_[i],
        e
    }
    ,
    t.set = function(i, e) {
        return this.map_[i] = e,
        this
    }
    ,
    t.forEach = function(i, e) {
        for (var n in this.map_)
            i.call(e, this.map_[n], n, this)
    }
    ,
    a
}()
  , Xg = A.Map ? A.Map : Kg
  , Yg = function() {
    function a() {
        this.set_ = {}
    }
    var t = a.prototype;
    return t.has = function(i) {
        return i in this.set_
    }
    ,
    t.delete = function(i) {
        var e = this.has(i);
        return delete this.set_[i],
        e
    }
    ,
    t.add = function(i) {
        return this.set_[i] = 1,
        this
    }
    ,
    t.forEach = function(i, e) {
        for (var n in this.set_)
            i.call(e, n, n, this)
    }
    ,
    a
}()
  , Pa = A.Set ? A.Set : Yg
  , U = function() {
    function a(r, i, e) {
        if (!r && this.play ? this.player_ = r = this : this.player_ = r,
        this.isDisposed_ = !1,
        this.parentComponent_ = null,
        this.options_ = fe({}, this.options_),
        i = this.options_ = fe(this.options_, i),
        this.id_ = i.id || i.el && i.el.id,
        !this.id_) {
            var n = r && r.id && r.id() || "no_player";
            this.id_ = n + "_component_" + Ut()
        }
        this.name_ = i.name || null,
        i.el ? this.el_ = i.el : i.createEl !== !1 && (this.el_ = this.createEl()),
        i.evented !== !1 && (Ks(this, {
            eventBusKey: this.el_ ? "el_" : null
        }),
        this.handleLanguagechange = this.handleLanguagechange.bind(this),
        this.on(this.player_, "languagechange", this.handleLanguagechange)),
        Qd(this, this.constructor.defaultState),
        this.children_ = [],
        this.childIndex_ = {},
        this.childNameIndex_ = {},
        this.setTimeoutIds_ = new Pa,
        this.setIntervalIds_ = new Pa,
        this.rafIds_ = new Pa,
        this.namedRafs_ = new Xg,
        this.clearingTimersOnDispose_ = !1,
        i.initChildren !== !1 && this.initChildren(),
        this.ready(e),
        i.reportTouchActivity !== !1 && this.enableTouchActivity()
    }
    var t = a.prototype;
    return t.dispose = function() {
        if (!this.isDisposed_) {
            if (this.readyQueue_ && (this.readyQueue_.length = 0),
            this.trigger({
                type: "dispose",
                bubbles: !1
            }),
            this.isDisposed_ = !0,
            this.children_)
                for (var i = this.children_.length - 1; i >= 0; i--)
                    this.children_[i].dispose && this.children_[i].dispose();
            this.children_ = null,
            this.childIndex_ = null,
            this.childNameIndex_ = null,
            this.parentComponent_ = null,
            this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_),
            He.has(this.el_) && He.delete(this.el_),
            this.el_ = null),
            this.player_ = null
        }
    }
    ,
    t.isDisposed = function() {
        return !!this.isDisposed_
    }
    ,
    t.player = function() {
        return this.player_
    }
    ,
    t.options = function(i) {
        return i ? (this.options_ = fe(this.options_, i),
        this.options_) : this.options_
    }
    ,
    t.el = function() {
        return this.el_
    }
    ,
    t.createEl = function(i, e, n) {
        return ve(i, e, n)
    }
    ,
    t.localize = function(i, e, n) {
        n === void 0 && (n = i);
        var s = this.player_.language && this.player_.language()
          , o = this.player_.languages && this.player_.languages()
          , u = o && o[s]
          , l = s && s.split("-")[0]
          , c = o && o[l]
          , p = n;
        return u && u[i] ? p = u[i] : c && c[i] && (p = c[i]),
        e && (p = p.replace(/\{(\d+)\}/g, function(g, y) {
            var S = e[y - 1]
              , x = S;
            return typeof S > "u" && (x = g),
            x
        })),
        p
    }
    ,
    t.handleLanguagechange = function() {}
    ,
    t.contentEl = function() {
        return this.contentEl_ || this.el_
    }
    ,
    t.id = function() {
        return this.id_
    }
    ,
    t.name = function() {
        return this.name_
    }
    ,
    t.children = function() {
        return this.children_
    }
    ,
    t.getChildById = function(i) {
        return this.childIndex_[i]
    }
    ,
    t.getChild = function(i) {
        if (i)
            return this.childNameIndex_[i]
    }
    ,
    t.getDescendant = function() {
        for (var i = arguments.length, e = new Array(i), n = 0; n < i; n++)
            e[n] = arguments[n];
        e = e.reduce(function(u, l) {
            return u.concat(l)
        }, []);
        for (var s = this, o = 0; o < e.length; o++)
            if (s = s.getChild(e[o]),
            !s || !s.getChild)
                return;
        return s
    }
    ,
    t.addChild = function(i, e, n) {
        e === void 0 && (e = {}),
        n === void 0 && (n = this.children_.length);
        var s, o;
        if (typeof i == "string") {
            o = Te(i);
            var u = e.componentClass || o;
            e.name = o;
            var l = a.getComponent(u);
            if (!l)
                throw new Error("Component " + u + " does not exist");
            if (typeof l != "function")
                return null;
            s = new l(this.player_ || this,e)
        } else
            s = i;
        if (s.parentComponent_ && s.parentComponent_.removeChild(s),
        this.children_.splice(n, 0, s),
        s.parentComponent_ = this,
        typeof s.id == "function" && (this.childIndex_[s.id()] = s),
        o = o || s.name && Te(s.name()),
        o && (this.childNameIndex_[o] = s,
        this.childNameIndex_[cn(o)] = s),
        typeof s.el == "function" && s.el()) {
            var c = null;
            this.children_[n + 1] && (this.children_[n + 1].el_ ? c = this.children_[n + 1].el_ : Nr(this.children_[n + 1]) && (c = this.children_[n + 1])),
            this.contentEl().insertBefore(s.el(), c)
        }
        return s
    }
    ,
    t.removeChild = function(i) {
        if (typeof i == "string" && (i = this.getChild(i)),
        !(!i || !this.children_)) {
            for (var e = !1, n = this.children_.length - 1; n >= 0; n--)
                if (this.children_[n] === i) {
                    e = !0,
                    this.children_.splice(n, 1);
                    break
                }
            if (e) {
                i.parentComponent_ = null,
                this.childIndex_[i.id()] = null,
                this.childNameIndex_[Te(i.name())] = null,
                this.childNameIndex_[cn(i.name())] = null;
                var s = i.el();
                s && s.parentNode === this.contentEl() && this.contentEl().removeChild(i.el())
            }
        }
    }
    ,
    t.initChildren = function() {
        var i = this
          , e = this.options_.children;
        if (e) {
            var n = this.options_, s = function(c) {
                var p = c.name
                  , g = c.opts;
                if (n[p] !== void 0 && (g = n[p]),
                g !== !1) {
                    g === !0 && (g = {}),
                    g.playerOptions = i.options_.playerOptions;
                    var y = i.addChild(p, g);
                    y && (i[p] = y)
                }
            }, o, u = a.getComponent("Tech");
            Array.isArray(e) ? o = e : o = Object.keys(e),
            o.concat(Object.keys(this.options_).filter(function(l) {
                return !o.some(function(c) {
                    return typeof c == "string" ? l === c : l === c.name
                })
            })).map(function(l) {
                var c, p;
                return typeof l == "string" ? (c = l,
                p = e[c] || i.options_[c] || {}) : (c = l.name,
                p = l),
                {
                    name: c,
                    opts: p
                }
            }).filter(function(l) {
                var c = a.getComponent(l.opts.componentClass || Te(l.name));
                return c && !u.isTech(c)
            }).forEach(s)
        }
    }
    ,
    t.buildCSSClass = function() {
        return ""
    }
    ,
    t.ready = function(i, e) {
        if (e === void 0 && (e = !1),
        !!i) {
            if (!this.isReady_) {
                this.readyQueue_ = this.readyQueue_ || [],
                this.readyQueue_.push(i);
                return
            }
            e ? i.call(this) : this.setTimeout(i, 1)
        }
    }
    ,
    t.triggerReady = function() {
        this.isReady_ = !0,
        this.setTimeout(function() {
            var i = this.readyQueue_;
            this.readyQueue_ = [],
            i && i.length > 0 && i.forEach(function(e) {
                e.call(this)
            }, this),
            this.trigger("ready")
        }, 1)
    }
    ,
    t.$ = function(i, e) {
        return Ft(i, e || this.contentEl())
    }
    ,
    t.$$ = function(i, e) {
        return Vd(i, e || this.contentEl())
    }
    ,
    t.hasClass = function(i) {
        return Jt(this.el_, i)
    }
    ,
    t.addClass = function(i) {
        Et(this.el_, i)
    }
    ,
    t.removeClass = function(i) {
        Ai(this.el_, i)
    }
    ,
    t.toggleClass = function(i, e) {
        Rd(this.el_, i, e)
    }
    ,
    t.show = function() {
        this.removeClass("vjs-hidden")
    }
    ,
    t.hide = function() {
        this.addClass("vjs-hidden")
    }
    ,
    t.lockShowing = function() {
        this.addClass("vjs-lock-showing")
    }
    ,
    t.unlockShowing = function() {
        this.removeClass("vjs-lock-showing")
    }
    ,
    t.getAttribute = function(i) {
        return Fd(this.el_, i)
    }
    ,
    t.setAttribute = function(i, e) {
        yi(this.el_, i, e)
    }
    ,
    t.removeAttribute = function(i) {
        $n(this.el_, i)
    }
    ,
    t.width = function(i, e) {
        return this.dimension("width", i, e)
    }
    ,
    t.height = function(i, e) {
        return this.dimension("height", i, e)
    }
    ,
    t.dimensions = function(i, e) {
        this.width(i, !0),
        this.height(e)
    }
    ,
    t.dimension = function(i, e, n) {
        if (e !== void 0) {
            (e === null || e !== e) && (e = 0),
            ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[i] = e : e === "auto" ? this.el_.style[i] = "" : this.el_.style[i] = e + "px",
            n || this.trigger("componentresize");
            return
        }
        if (!this.el_)
            return 0;
        var s = this.el_.style[i]
          , o = s.indexOf("px");
        return parseInt(o !== -1 ? s.slice(0, o) : this.el_["offset" + Te(i)], 10)
    }
    ,
    t.currentDimension = function(i) {
        var e = 0;
        if (i !== "width" && i !== "height")
            throw new Error("currentDimension only accepts width or height value");
        if (e = _i(this.el_, i),
        e = parseFloat(e),
        e === 0 || isNaN(e)) {
            var n = "offset" + Te(i);
            e = this.el_[n]
        }
        return e
    }
    ,
    t.currentDimensions = function() {
        return {
            width: this.currentDimension("width"),
            height: this.currentDimension("height")
        }
    }
    ,
    t.currentWidth = function() {
        return this.currentDimension("width")
    }
    ,
    t.currentHeight = function() {
        return this.currentDimension("height")
    }
    ,
    t.focus = function() {
        this.el_.focus()
    }
    ,
    t.blur = function() {
        this.el_.blur()
    }
    ,
    t.handleKeyDown = function(i) {
        this.player_ && (i.stopPropagation(),
        this.player_.handleKeyDown(i))
    }
    ,
    t.handleKeyPress = function(i) {
        this.handleKeyDown(i)
    }
    ,
    t.emitTapEvents = function() {
        var i = 0, e = null, n = 10, s = 200, o;
        this.on("touchstart", function(l) {
            l.touches.length === 1 && (e = {
                pageX: l.touches[0].pageX,
                pageY: l.touches[0].pageY
            },
            i = A.performance.now(),
            o = !0)
        }),
        this.on("touchmove", function(l) {
            if (l.touches.length > 1)
                o = !1;
            else if (e) {
                var c = l.touches[0].pageX - e.pageX
                  , p = l.touches[0].pageY - e.pageY
                  , g = Math.sqrt(c * c + p * p);
                g > n && (o = !1)
            }
        });
        var u = function() {
            o = !1
        };
        this.on("touchleave", u),
        this.on("touchcancel", u),
        this.on("touchend", function(l) {
            if (e = null,
            o === !0) {
                var c = A.performance.now() - i;
                c < s && (l.preventDefault(),
                this.trigger("tap"))
            }
        })
    }
    ,
    t.enableTouchActivity = function() {
        if (!(!this.player() || !this.player().reportUserActivity)) {
            var i = oe(this.player(), this.player().reportUserActivity), e;
            this.on("touchstart", function() {
                i(),
                this.clearInterval(e),
                e = this.setInterval(i, 250)
            });
            var n = function(o) {
                i(),
                this.clearInterval(e)
            };
            this.on("touchmove", i),
            this.on("touchend", n),
            this.on("touchcancel", n)
        }
    }
    ,
    t.setTimeout = function(i, e) {
        var n = this, s;
        return i = oe(this, i),
        this.clearTimersOnDispose_(),
        s = A.setTimeout(function() {
            n.setTimeoutIds_.has(s) && n.setTimeoutIds_.delete(s),
            i()
        }, e),
        this.setTimeoutIds_.add(s),
        s
    }
    ,
    t.clearTimeout = function(i) {
        return this.setTimeoutIds_.has(i) && (this.setTimeoutIds_.delete(i),
        A.clearTimeout(i)),
        i
    }
    ,
    t.setInterval = function(i, e) {
        i = oe(this, i),
        this.clearTimersOnDispose_();
        var n = A.setInterval(i, e);
        return this.setIntervalIds_.add(n),
        n
    }
    ,
    t.clearInterval = function(i) {
        return this.setIntervalIds_.has(i) && (this.setIntervalIds_.delete(i),
        A.clearInterval(i)),
        i
    }
    ,
    t.requestAnimationFrame = function(i) {
        var e = this;
        if (!this.supportsRaf_)
            return this.setTimeout(i, 1e3 / 60);
        this.clearTimersOnDispose_();
        var n;
        return i = oe(this, i),
        n = A.requestAnimationFrame(function() {
            e.rafIds_.has(n) && e.rafIds_.delete(n),
            i()
        }),
        this.rafIds_.add(n),
        n
    }
    ,
    t.requestNamedAnimationFrame = function(i, e) {
        var n = this;
        if (!this.namedRafs_.has(i)) {
            this.clearTimersOnDispose_(),
            e = oe(this, e);
            var s = this.requestAnimationFrame(function() {
                e(),
                n.namedRafs_.has(i) && n.namedRafs_.delete(i)
            });
            return this.namedRafs_.set(i, s),
            i
        }
    }
    ,
    t.cancelNamedAnimationFrame = function(i) {
        this.namedRafs_.has(i) && (this.cancelAnimationFrame(this.namedRafs_.get(i)),
        this.namedRafs_.delete(i))
    }
    ,
    t.cancelAnimationFrame = function(i) {
        return this.supportsRaf_ ? (this.rafIds_.has(i) && (this.rafIds_.delete(i),
        A.cancelAnimationFrame(i)),
        i) : this.clearTimeout(i)
    }
    ,
    t.clearTimersOnDispose_ = function() {
        var i = this;
        this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0,
        this.one("dispose", function() {
            [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(function(e) {
                var n = e[0]
                  , s = e[1];
                i[n].forEach(function(o, u) {
                    return i[s](u)
                })
            }),
            i.clearingTimersOnDispose_ = !1
        }))
    }
    ,
    a.registerComponent = function(i, e) {
        if (typeof i != "string" || !i)
            throw new Error('Illegal component name, "' + i + '"; must be a non-empty string.');
        var n = a.getComponent("Tech")
          , s = n && n.isTech(e)
          , o = a === e || a.prototype.isPrototypeOf(e.prototype);
        if (s || !o) {
            var u;
            throw s ? u = "techs must be registered using Tech.registerTech()" : u = "must be a Component subclass",
            new Error('Illegal component, "' + i + '"; ' + u + ".")
        }
        i = Te(i),
        a.components_ || (a.components_ = {});
        var l = a.getComponent("Player");
        if (i === "Player" && l && l.players) {
            var c = l.players
              , p = Object.keys(c);
            if (c && p.length > 0 && p.map(function(g) {
                return c[g]
            }).every(Boolean))
                throw new Error("Can not register Player component after player has been created.")
        }
        return a.components_[i] = e,
        a.components_[cn(i)] = e,
        e
    }
    ,
    a.getComponent = function(i) {
        if (!(!i || !a.components_))
            return a.components_[i]
    }
    ,
    a
}();
U.prototype.supportsRaf_ = typeof A.requestAnimationFrame == "function" && typeof A.cancelAnimationFrame == "function";
U.registerComponent("Component", U);
function Qg(a, t, r) {
    if (typeof t != "number" || t < 0 || t > r)
        throw new Error("Failed to execute '" + a + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + r + ").")
}
function ju(a, t, r, i) {
    return Qg(a, i, r.length - 1),
    r[i][t]
}
function Ia(a) {
    return a === void 0 || a.length === 0 ? {
        length: 0,
        start: function() {
            throw new Error("This TimeRanges object is empty")
        },
        end: function() {
            throw new Error("This TimeRanges object is empty")
        }
    } : {
        length: a.length,
        start: ju.bind(null, "start", 0, a),
        end: ju.bind(null, "end", 1, a)
    }
}
function Zt(a, t) {
    return Array.isArray(a) ? Ia(a) : a === void 0 || t === void 0 ? Ia() : Ia([[a, t]])
}
function Jd(a, t) {
    var r = 0, i, e;
    if (!t)
        return 0;
    (!a || !a.length) && (a = Zt(0, 0));
    for (var n = 0; n < a.length; n++)
        i = a.start(n),
        e = a.end(n),
        e > t && (e = t),
        r += e - i;
    return r / t
}
function je(a) {
    if (a instanceof je)
        return a;
    typeof a == "number" ? this.code = a : typeof a == "string" ? this.message = a : Mt(a) && (typeof a.code == "number" && (this.code = a.code),
    pe(this, a)),
    this.message || (this.message = je.defaultMessages[this.code] || "")
}
je.prototype.code = 0;
je.prototype.message = "";
je.prototype.status = null;
je.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"];
je.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail part-way.",
    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The media is encrypted and we do not have the keys to decrypt it."
};
for (var vr = 0; vr < je.errorTypes.length; vr++)
    je[je.errorTypes[vr]] = vr,
    je.prototype[je.errorTypes[vr]] = vr;
function di(a) {
    return a != null && typeof a.then == "function"
}
function wt(a) {
    di(a) && a.then(null, function(t) {})
}
var is = function(t) {
    var r = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(i, e, n) {
        return t[e] && (i[e] = t[e]),
        i
    }, {
        cues: t.cues && Array.prototype.map.call(t.cues, function(i) {
            return {
                startTime: i.startTime,
                endTime: i.endTime,
                text: i.text,
                id: i.id
            }
        })
    });
    return r
}
  , Jg = function(t) {
    var r = t.$$("track")
      , i = Array.prototype.map.call(r, function(n) {
        return n.track
    })
      , e = Array.prototype.map.call(r, function(n) {
        var s = is(n.track);
        return n.src && (s.src = n.src),
        s
    });
    return e.concat(Array.prototype.filter.call(t.textTracks(), function(n) {
        return i.indexOf(n) === -1
    }).map(is))
}
  , Zg = function(t, r) {
    return t.forEach(function(i) {
        var e = r.addRemoteTextTrack(i).track;
        !i.src && i.cues && i.cues.forEach(function(n) {
            return e.addCue(n)
        })
    }),
    r.textTracks()
}
  , Vu = {
    textTracksToJson: Jg,
    jsonToTextTracks: Zg,
    trackToJson_: is
}
  , Da = "vjs-modal-dialog"
  , Br = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.handleKeyDown_ = function(s) {
            return n.handleKeyDown(s)
        }
        ,
        n.close_ = function(s) {
            return n.close(s)
        }
        ,
        n.opened_ = n.hasBeenOpened_ = n.hasBeenFilled_ = !1,
        n.closeable(!n.options_.uncloseable),
        n.content(n.options_.content),
        n.contentEl_ = ve("div", {
            className: Da + "-content"
        }, {
            role: "document"
        }),
        n.descEl_ = ve("p", {
            className: Da + "-description vjs-control-text",
            id: n.el().getAttribute("aria-describedby")
        }),
        nr(n.descEl_, n.description()),
        n.el_.appendChild(n.descEl_),
        n.el_.appendChild(n.contentEl_),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: this.buildCSSClass(),
            tabIndex: -1
        }, {
            "aria-describedby": this.id() + "_description",
            "aria-hidden": "true",
            "aria-label": this.label(),
            role: "dialog"
        })
    }
    ,
    r.dispose = function() {
        this.contentEl_ = null,
        this.descEl_ = null,
        this.previouslyActiveEl_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.buildCSSClass = function() {
        return Da + " vjs-hidden " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.label = function() {
        return this.localize(this.options_.label || "Modal Window")
    }
    ,
    r.description = function() {
        var e = this.options_.description || this.localize("This is a modal window.");
        return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),
        e
    }
    ,
    r.open = function() {
        if (!this.opened_) {
            var e = this.player();
            this.trigger("beforemodalopen"),
            this.opened_ = !0,
            (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(),
            this.wasPlaying_ = !e.paused(),
            this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(),
            this.on("keydown", this.handleKeyDown_),
            this.hadControls_ = e.controls(),
            e.controls(!1),
            this.show(),
            this.conditionalFocus_(),
            this.el().setAttribute("aria-hidden", "false"),
            this.trigger("modalopen"),
            this.hasBeenOpened_ = !0
        }
    }
    ,
    r.opened = function(e) {
        return typeof e == "boolean" && this[e ? "open" : "close"](),
        this.opened_
    }
    ,
    r.close = function() {
        if (this.opened_) {
            var e = this.player();
            this.trigger("beforemodalclose"),
            this.opened_ = !1,
            this.wasPlaying_ && this.options_.pauseOnOpen && e.play(),
            this.off("keydown", this.handleKeyDown_),
            this.hadControls_ && e.controls(!0),
            this.hide(),
            this.el().setAttribute("aria-hidden", "true"),
            this.trigger("modalclose"),
            this.conditionalBlur_(),
            this.options_.temporary && this.dispose()
        }
    }
    ,
    r.closeable = function(e) {
        if (typeof e == "boolean") {
            var n = this.closeable_ = !!e
              , s = this.getChild("closeButton");
            if (n && !s) {
                var o = this.contentEl_;
                this.contentEl_ = this.el_,
                s = this.addChild("closeButton", {
                    controlText: "Close Modal Dialog"
                }),
                this.contentEl_ = o,
                this.on(s, "close", this.close_)
            }
            !n && s && (this.off(s, "close", this.close_),
            this.removeChild(s),
            s.dispose())
        }
        return this.closeable_
    }
    ,
    r.fill = function() {
        this.fillWith(this.content())
    }
    ,
    r.fillWith = function(e) {
        var n = this.contentEl()
          , s = n.parentNode
          , o = n.nextSibling;
        this.trigger("beforemodalfill"),
        this.hasBeenFilled_ = !0,
        s.removeChild(n),
        this.empty(),
        jd(n, e),
        this.trigger("modalfill"),
        o ? s.insertBefore(n, o) : s.appendChild(n);
        var u = this.getChild("closeButton");
        u && s.appendChild(u.el_)
    }
    ,
    r.empty = function() {
        this.trigger("beforemodalempty"),
        qs(this.contentEl()),
        this.trigger("modalempty")
    }
    ,
    r.content = function(e) {
        return typeof e < "u" && (this.content_ = e),
        this.content_
    }
    ,
    r.conditionalFocus_ = function() {
        var e = V.activeElement
          , n = this.player_.el_;
        this.previouslyActiveEl_ = null,
        (n.contains(e) || n === e) && (this.previouslyActiveEl_ = e,
        this.focus())
    }
    ,
    r.conditionalBlur_ = function() {
        this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(),
        this.previouslyActiveEl_ = null)
    }
    ,
    r.handleKeyDown = function(e) {
        if (e.stopPropagation(),
        Q.isEventKey(e, "Escape") && this.closeable()) {
            e.preventDefault(),
            this.close();
            return
        }
        if (Q.isEventKey(e, "Tab")) {
            for (var n = this.focusableEls_(), s = this.el_.querySelector(":focus"), o, u = 0; u < n.length; u++)
                if (s === n[u]) {
                    o = u;
                    break
                }
            V.activeElement === this.el_ && (o = 0),
            e.shiftKey && o === 0 ? (n[n.length - 1].focus(),
            e.preventDefault()) : !e.shiftKey && o === n.length - 1 && (n[0].focus(),
            e.preventDefault())
        }
    }
    ,
    r.focusableEls_ = function() {
        var e = this.el_.querySelectorAll("*");
        return Array.prototype.filter.call(e, function(n) {
            return (n instanceof A.HTMLAnchorElement || n instanceof A.HTMLAreaElement) && n.hasAttribute("href") || (n instanceof A.HTMLInputElement || n instanceof A.HTMLSelectElement || n instanceof A.HTMLTextAreaElement || n instanceof A.HTMLButtonElement) && !n.hasAttribute("disabled") || n instanceof A.HTMLIFrameElement || n instanceof A.HTMLObjectElement || n instanceof A.HTMLEmbedElement || n.hasAttribute("tabindex") && n.getAttribute("tabindex") !== -1 || n.hasAttribute("contenteditable")
        })
    }
    ,
    t
}(U);
Br.prototype.options_ = {
    pauseOnOpen: !0,
    temporary: !0
};
U.registerComponent("ModalDialog", Br);
var Or = function(a) {
    G(t, a);
    function t(i) {
        var e;
        i === void 0 && (i = []),
        e = a.call(this) || this,
        e.tracks_ = [],
        Object.defineProperty(Y(e), "length", {
            get: function() {
                return this.tracks_.length
            }
        });
        for (var n = 0; n < i.length; n++)
            e.addTrack(i[n]);
        return e
    }
    var r = t.prototype;
    return r.addTrack = function(e) {
        var n = this
          , s = this.tracks_.length;
        "" + s in this || Object.defineProperty(this, s, {
            get: function() {
                return this.tracks_[s]
            }
        }),
        this.tracks_.indexOf(e) === -1 && (this.tracks_.push(e),
        this.trigger({
            track: e,
            type: "addtrack",
            target: this
        })),
        e.labelchange_ = function() {
            n.trigger({
                track: e,
                type: "labelchange",
                target: n
            })
        }
        ,
        Ct(e) && e.addEventListener("labelchange", e.labelchange_)
    }
    ,
    r.removeTrack = function(e) {
        for (var n, s = 0, o = this.length; s < o; s++)
            if (this[s] === e) {
                n = this[s],
                n.off && n.off(),
                this.tracks_.splice(s, 1);
                break
            }
        n && this.trigger({
            track: n,
            type: "removetrack",
            target: this
        })
    }
    ,
    r.getTrackById = function(e) {
        for (var n = null, s = 0, o = this.length; s < o; s++) {
            var u = this[s];
            if (u.id === e) {
                n = u;
                break
            }
        }
        return n
    }
    ,
    t
}(ke);
Or.prototype.allowedEvents_ = {
    change: "change",
    addtrack: "addtrack",
    removetrack: "removetrack",
    labelchange: "labelchange"
};
for (var ev in Or.prototype.allowedEvents_)
    Or.prototype["on" + ev] = null;
var Oa = function(t, r) {
    for (var i = 0; i < t.length; i++)
        !Object.keys(t[i]).length || r.id === t[i].id || (t[i].enabled = !1)
}
  , tv = function(a) {
    G(t, a);
    function t(i) {
        var e;
        i === void 0 && (i = []);
        for (var n = i.length - 1; n >= 0; n--)
            if (i[n].enabled) {
                Oa(i, i[n]);
                break
            }
        return e = a.call(this, i) || this,
        e.changing_ = !1,
        e
    }
    var r = t.prototype;
    return r.addTrack = function(e) {
        var n = this;
        e.enabled && Oa(this, e),
        a.prototype.addTrack.call(this, e),
        e.addEventListener && (e.enabledChange_ = function() {
            n.changing_ || (n.changing_ = !0,
            Oa(n, e),
            n.changing_ = !1,
            n.trigger("change"))
        }
        ,
        e.addEventListener("enabledchange", e.enabledChange_))
    }
    ,
    r.removeTrack = function(e) {
        a.prototype.removeTrack.call(this, e),
        e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_),
        e.enabledChange_ = null)
    }
    ,
    t
}(Or)
  , La = function(t, r) {
    for (var i = 0; i < t.length; i++)
        !Object.keys(t[i]).length || r.id === t[i].id || (t[i].selected = !1)
}
  , rv = function(a) {
    G(t, a);
    function t(i) {
        var e;
        i === void 0 && (i = []);
        for (var n = i.length - 1; n >= 0; n--)
            if (i[n].selected) {
                La(i, i[n]);
                break
            }
        return e = a.call(this, i) || this,
        e.changing_ = !1,
        Object.defineProperty(Y(e), "selectedIndex", {
            get: function() {
                for (var o = 0; o < this.length; o++)
                    if (this[o].selected)
                        return o;
                return -1
            },
            set: function() {}
        }),
        e
    }
    var r = t.prototype;
    return r.addTrack = function(e) {
        var n = this;
        e.selected && La(this, e),
        a.prototype.addTrack.call(this, e),
        e.addEventListener && (e.selectedChange_ = function() {
            n.changing_ || (n.changing_ = !0,
            La(n, e),
            n.changing_ = !1,
            n.trigger("change"))
        }
        ,
        e.addEventListener("selectedchange", e.selectedChange_))
    }
    ,
    r.removeTrack = function(e) {
        a.prototype.removeTrack.call(this, e),
        e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_),
        e.selectedChange_ = null)
    }
    ,
    t
}(Or)
  , Zd = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.addTrack = function(e) {
        var n = this;
        a.prototype.addTrack.call(this, e),
        this.queueChange_ || (this.queueChange_ = function() {
            return n.queueTrigger("change")
        }
        ),
        this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
            return n.trigger("selectedlanguagechange")
        }
        ),
        e.addEventListener("modechange", this.queueChange_);
        var s = ["metadata", "chapters"];
        s.indexOf(e.kind) === -1 && e.addEventListener("modechange", this.triggerSelectedlanguagechange_)
    }
    ,
    r.removeTrack = function(e) {
        a.prototype.removeTrack.call(this, e),
        e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_),
        this.selectedlanguagechange_ && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
    }
    ,
    t
}(Or)
  , iv = function() {
    function a(r) {
        r === void 0 && (r = []),
        this.trackElements_ = [],
        Object.defineProperty(this, "length", {
            get: function() {
                return this.trackElements_.length
            }
        });
        for (var i = 0, e = r.length; i < e; i++)
            this.addTrackElement_(r[i])
    }
    var t = a.prototype;
    return t.addTrackElement_ = function(i) {
        var e = this.trackElements_.length;
        "" + e in this || Object.defineProperty(this, e, {
            get: function() {
                return this.trackElements_[e]
            }
        }),
        this.trackElements_.indexOf(i) === -1 && this.trackElements_.push(i)
    }
    ,
    t.getTrackElementByTrack_ = function(i) {
        for (var e, n = 0, s = this.trackElements_.length; n < s; n++)
            if (i === this.trackElements_[n].track) {
                e = this.trackElements_[n];
                break
            }
        return e
    }
    ,
    t.removeTrackElement_ = function(i) {
        for (var e = 0, n = this.trackElements_.length; e < n; e++)
            if (i === this.trackElements_[e]) {
                this.trackElements_[e].track && typeof this.trackElements_[e].track.off == "function" && this.trackElements_[e].track.off(),
                typeof this.trackElements_[e].off == "function" && this.trackElements_[e].off(),
                this.trackElements_.splice(e, 1);
                break
            }
    }
    ,
    a
}()
  , Wu = function() {
    function a(r) {
        a.prototype.setCues_.call(this, r),
        Object.defineProperty(this, "length", {
            get: function() {
                return this.length_
            }
        })
    }
    var t = a.prototype;
    return t.setCues_ = function(i) {
        var e = this.length || 0
          , n = 0
          , s = i.length;
        this.cues_ = i,
        this.length_ = i.length;
        var o = function(l) {
            "" + l in this || Object.defineProperty(this, "" + l, {
                get: function() {
                    return this.cues_[l]
                }
            })
        };
        if (e < s)
            for (n = e; n < s; n++)
                o.call(this, n)
    }
    ,
    t.getCueById = function(i) {
        for (var e = null, n = 0, s = this.length; n < s; n++) {
            var o = this[n];
            if (o.id === i) {
                e = o;
                break
            }
        }
        return e
    }
    ,
    a
}()
  , nv = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary"
}
  , av = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary"
}
  , sv = {
    subtitles: "subtitles",
    captions: "captions",
    descriptions: "descriptions",
    chapters: "chapters",
    metadata: "metadata"
}
  , Gu = {
    disabled: "disabled",
    hidden: "hidden",
    showing: "showing"
}
  , Xs = function(a) {
    G(t, a);
    function t(r) {
        var i;
        r === void 0 && (r = {}),
        i = a.call(this) || this;
        var e = {
            id: r.id || "vjs_track_" + Ut(),
            kind: r.kind || "",
            language: r.language || ""
        }
          , n = r.label || ""
          , s = function(l) {
            Object.defineProperty(Y(i), l, {
                get: function() {
                    return e[l]
                },
                set: function() {}
            })
        };
        for (var o in e)
            s(o);
        return Object.defineProperty(Y(i), "label", {
            get: function() {
                return n
            },
            set: function(l) {
                l !== n && (n = l,
                this.trigger("labelchange"))
            }
        }),
        i
    }
    return t
}(ke)
  , Ys = function(t) {
    var r = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"]
      , i = V.createElement("a");
    i.href = t;
    var e = i.host === "" && i.protocol !== "file:", n;
    e && (n = V.createElement("div"),
    n.innerHTML = '<a href="' + t + '"></a>',
    i = n.firstChild,
    n.setAttribute("style", "display:none; position:absolute;"),
    V.body.appendChild(n));
    for (var s = {}, o = 0; o < r.length; o++)
        s[r[o]] = i[r[o]];
    return s.protocol === "http:" && (s.host = s.host.replace(/:80$/, "")),
    s.protocol === "https:" && (s.host = s.host.replace(/:443$/, "")),
    s.protocol || (s.protocol = A.location.protocol),
    e && V.body.removeChild(n),
    s
}
  , ec = function(t) {
    if (!t.match(/^https?:\/\//)) {
        var r = V.createElement("div");
        r.innerHTML = '<a href="' + t + '">x</a>',
        t = r.firstChild.href
    }
    return t
}
  , Qs = function(t) {
    if (typeof t == "string") {
        var r = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/
          , i = r.exec(t);
        if (i)
            return i.pop().toLowerCase()
    }
    return ""
}
  , Jn = function(t, r) {
    r === void 0 && (r = A.location);
    var i = Ys(t)
      , e = i.protocol === ":" ? r.protocol : i.protocol
      , n = e + i.host !== r.protocol + r.host;
    return n
}
  , ov = Object.freeze({
    __proto__: null,
    parseUrl: Ys,
    getAbsoluteURL: ec,
    getFileExtension: Qs,
    isCrossOrigin: Jn
})
  , qu = function(t, r) {
    var i = new A.WebVTT.Parser(A,A.vttjs,A.WebVTT.StringDecoder())
      , e = [];
    i.oncue = function(n) {
        r.addCue(n)
    }
    ,
    i.onparsingerror = function(n) {
        e.push(n)
    }
    ,
    i.onflush = function() {
        r.trigger({
            type: "loadeddata",
            target: r
        })
    }
    ,
    i.parse(t),
    e.length > 0 && (A.console && A.console.groupCollapsed && A.console.groupCollapsed("Text Track parsing errors for " + r.src),
    e.forEach(function(n) {
        return Z.error(n)
    }),
    A.console && A.console.groupEnd && A.console.groupEnd()),
    i.flush()
}
  , zu = function(t, r) {
    var i = {
        uri: t
    }
      , e = Jn(t);
    e && (i.cors = e);
    var n = r.tech_.crossOrigin() === "use-credentials";
    n && (i.withCredentials = n),
    Rl(i, oe(this, function(s, o, u) {
        if (s)
            return Z.error(s, o);
        r.loaded_ = !0,
        typeof A.WebVTT != "function" ? r.tech_ && r.tech_.any(["vttjsloaded", "vttjserror"], function(l) {
            if (l.type === "vttjserror") {
                Z.error("vttjs failed to load, stopping trying to process " + r.src);
                return
            }
            return qu(u, r)
        }) : qu(u, r)
    }))
}
  , Pi = function(a) {
    G(t, a);
    function t(i) {
        var e;
        if (i === void 0 && (i = {}),
        !i.tech)
            throw new Error("A tech was not provided.");
        var n = fe(i, {
            kind: sv[i.kind] || "subtitles",
            language: i.language || i.srclang || ""
        })
          , s = Gu[n.mode] || "disabled"
          , o = n.default;
        (n.kind === "metadata" || n.kind === "chapters") && (s = "hidden"),
        e = a.call(this, n) || this,
        e.tech_ = n.tech,
        e.cues_ = [],
        e.activeCues_ = [],
        e.preload_ = e.tech_.preloadTextTracks !== !1;
        var u = new Wu(e.cues_)
          , l = new Wu(e.activeCues_)
          , c = !1
          , p = oe(Y(e), function() {
            !this.tech_.isReady_ || this.tech_.isDisposed() || (this.activeCues = this.activeCues,
            c && (this.trigger("cuechange"),
            c = !1))
        })
          , g = function() {
            e.tech_.off("timeupdate", p)
        };
        return e.tech_.one("dispose", g),
        s !== "disabled" && e.tech_.on("timeupdate", p),
        Object.defineProperties(Y(e), {
            default: {
                get: function() {
                    return o
                },
                set: function() {}
            },
            mode: {
                get: function() {
                    return s
                },
                set: function(S) {
                    Gu[S] && s !== S && (s = S,
                    !this.preload_ && s !== "disabled" && this.cues.length === 0 && zu(this.src, this),
                    this.tech_.off("timeupdate", p),
                    s !== "disabled" && this.tech_.on("timeupdate", p),
                    this.trigger("modechange"))
                }
            },
            cues: {
                get: function() {
                    return this.loaded_ ? u : null
                },
                set: function() {}
            },
            activeCues: {
                get: function() {
                    if (!this.loaded_)
                        return null;
                    if (this.cues.length === 0)
                        return l;
                    for (var S = this.tech_.currentTime(), x = [], b = 0, P = this.cues.length; b < P; b++) {
                        var D = this.cues[b];
                        (D.startTime <= S && D.endTime >= S || D.startTime === D.endTime && D.startTime <= S && D.startTime + .5 >= S) && x.push(D)
                    }
                    if (c = !1,
                    x.length !== this.activeCues_.length)
                        c = !0;
                    else
                        for (var L = 0; L < x.length; L++)
                            this.activeCues_.indexOf(x[L]) === -1 && (c = !0);
                    return this.activeCues_ = x,
                    l.setCues_(this.activeCues_),
                    l
                },
                set: function() {}
            }
        }),
        n.src ? (e.src = n.src,
        e.preload_ || (e.loaded_ = !0),
        (e.preload_ || n.kind !== "subtitles" && n.kind !== "captions") && zu(e.src, Y(e))) : e.loaded_ = !0,
        e
    }
    var r = t.prototype;
    return r.addCue = function(e) {
        var n = e;
        if (A.vttjs && !(e instanceof A.vttjs.VTTCue)) {
            n = new A.vttjs.VTTCue(e.startTime,e.endTime,e.text);
            for (var s in e)
                s in n || (n[s] = e[s]);
            n.id = e.id,
            n.originalCue_ = e
        }
        for (var o = this.tech_.textTracks(), u = 0; u < o.length; u++)
            o[u] !== this && o[u].removeCue(n);
        this.cues_.push(n),
        this.cues.setCues_(this.cues_)
    }
    ,
    r.removeCue = function(e) {
        for (var n = this.cues_.length; n--; ) {
            var s = this.cues_[n];
            if (s === e || s.originalCue_ && s.originalCue_ === e) {
                this.cues_.splice(n, 1),
                this.cues.setCues_(this.cues_);
                break
            }
        }
    }
    ,
    t
}(Xs);
Pi.prototype.allowedEvents_ = {
    cuechange: "cuechange"
};
var tc = function(a) {
    G(t, a);
    function t(r) {
        var i;
        r === void 0 && (r = {});
        var e = fe(r, {
            kind: av[r.kind] || ""
        });
        i = a.call(this, e) || this;
        var n = !1;
        return Object.defineProperty(Y(i), "enabled", {
            get: function() {
                return n
            },
            set: function(o) {
                typeof o != "boolean" || o === n || (n = o,
                this.trigger("enabledchange"))
            }
        }),
        e.enabled && (i.enabled = e.enabled),
        i.loaded_ = !0,
        i
    }
    return t
}(Xs)
  , rc = function(a) {
    G(t, a);
    function t(r) {
        var i;
        r === void 0 && (r = {});
        var e = fe(r, {
            kind: nv[r.kind] || ""
        });
        i = a.call(this, e) || this;
        var n = !1;
        return Object.defineProperty(Y(i), "selected", {
            get: function() {
                return n
            },
            set: function(o) {
                typeof o != "boolean" || o === n || (n = o,
                this.trigger("selectedchange"))
            }
        }),
        e.selected && (i.selected = e.selected),
        i
    }
    return t
}(Xs)
  , ic = 0
  , uv = 1
  , nc = 2
  , lv = 3
  , Hr = function(a) {
    G(t, a);
    function t(r) {
        var i;
        r === void 0 && (r = {}),
        i = a.call(this) || this;
        var e, n = new Pi(r);
        return i.kind = n.kind,
        i.src = n.src,
        i.srclang = n.language,
        i.label = n.label,
        i.default = n.default,
        Object.defineProperties(Y(i), {
            readyState: {
                get: function() {
                    return e
                }
            },
            track: {
                get: function() {
                    return n
                }
            }
        }),
        e = ic,
        n.addEventListener("loadeddata", function() {
            e = nc,
            i.trigger({
                type: "load",
                target: Y(i)
            })
        }),
        i
    }
    return t
}(ke);
Hr.prototype.allowedEvents_ = {
    load: "load"
};
Hr.NONE = ic;
Hr.LOADING = uv;
Hr.LOADED = nc;
Hr.ERROR = lv;
var tt = {
    audio: {
        ListClass: tv,
        TrackClass: tc,
        capitalName: "Audio"
    },
    video: {
        ListClass: rv,
        TrackClass: rc,
        capitalName: "Video"
    },
    text: {
        ListClass: Zd,
        TrackClass: Pi,
        capitalName: "Text"
    }
};
Object.keys(tt).forEach(function(a) {
    tt[a].getterName = a + "Tracks",
    tt[a].privateName = a + "Tracks_"
});
var Lr = {
    remoteText: {
        ListClass: Zd,
        TrackClass: Pi,
        capitalName: "RemoteText",
        getterName: "remoteTextTracks",
        privateName: "remoteTextTracks_"
    },
    remoteTextEl: {
        ListClass: iv,
        TrackClass: Hr,
        capitalName: "RemoteTextTrackEls",
        getterName: "remoteTextTrackEls",
        privateName: "remoteTextTrackEls_"
    }
}
  , Ne = rt({}, tt, Lr);
Lr.names = Object.keys(Lr);
tt.names = Object.keys(tt);
Ne.names = [].concat(Lr.names).concat(tt.names);
function dv(a, t, r, i, e) {
    e === void 0 && (e = {});
    var n = a.textTracks();
    e.kind = t,
    r && (e.label = r),
    i && (e.language = i),
    e.tech = a;
    var s = new Ne.text.TrackClass(e);
    return n.addTrack(s),
    s
}
var ue = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return i === void 0 && (i = {}),
        e === void 0 && (e = function() {}
        ),
        i.reportTouchActivity = !1,
        n = a.call(this, null, i, e) || this,
        n.onDurationChange_ = function(s) {
            return n.onDurationChange(s)
        }
        ,
        n.trackProgress_ = function(s) {
            return n.trackProgress(s)
        }
        ,
        n.trackCurrentTime_ = function(s) {
            return n.trackCurrentTime(s)
        }
        ,
        n.stopTrackingCurrentTime_ = function(s) {
            return n.stopTrackingCurrentTime(s)
        }
        ,
        n.disposeSourceHandler_ = function(s) {
            return n.disposeSourceHandler(s)
        }
        ,
        n.hasStarted_ = !1,
        n.on("playing", function() {
            this.hasStarted_ = !0
        }),
        n.on("loadstart", function() {
            this.hasStarted_ = !1
        }),
        Ne.names.forEach(function(s) {
            var o = Ne[s];
            i && i[o.getterName] && (n[o.privateName] = i[o.getterName])
        }),
        n.featuresProgressEvents || n.manualProgressOn(),
        n.featuresTimeupdateEvents || n.manualTimeUpdatesOn(),
        ["Text", "Audio", "Video"].forEach(function(s) {
            i["native" + s + "Tracks"] === !1 && (n["featuresNative" + s + "Tracks"] = !1)
        }),
        i.nativeCaptions === !1 || i.nativeTextTracks === !1 ? n.featuresNativeTextTracks = !1 : (i.nativeCaptions === !0 || i.nativeTextTracks === !0) && (n.featuresNativeTextTracks = !0),
        n.featuresNativeTextTracks || n.emulateTextTracks(),
        n.preloadTextTracks = i.preloadTextTracks !== !1,
        n.autoRemoteTextTracks_ = new Ne.text.ListClass,
        n.initTrackListeners(),
        i.nativeControlsForTouch || n.emitTapEvents(),
        n.constructor && (n.name_ = n.constructor.name || "Unknown Tech"),
        n
    }
    var r = t.prototype;
    return r.triggerSourceset = function(e) {
        var n = this;
        this.isReady_ || this.one("ready", function() {
            return n.setTimeout(function() {
                return n.triggerSourceset(e)
            }, 1)
        }),
        this.trigger({
            src: e,
            type: "sourceset"
        })
    }
    ,
    r.manualProgressOn = function() {
        this.on("durationchange", this.onDurationChange_),
        this.manualProgress = !0,
        this.one("ready", this.trackProgress_)
    }
    ,
    r.manualProgressOff = function() {
        this.manualProgress = !1,
        this.stopTrackingProgress(),
        this.off("durationchange", this.onDurationChange_)
    }
    ,
    r.trackProgress = function(e) {
        this.stopTrackingProgress(),
        this.progressInterval = this.setInterval(oe(this, function() {
            var n = this.bufferedPercent();
            this.bufferedPercent_ !== n && this.trigger("progress"),
            this.bufferedPercent_ = n,
            n === 1 && this.stopTrackingProgress()
        }), 500)
    }
    ,
    r.onDurationChange = function(e) {
        this.duration_ = this.duration()
    }
    ,
    r.buffered = function() {
        return Zt(0, 0)
    }
    ,
    r.bufferedPercent = function() {
        return Jd(this.buffered(), this.duration_)
    }
    ,
    r.stopTrackingProgress = function() {
        this.clearInterval(this.progressInterval)
    }
    ,
    r.manualTimeUpdatesOn = function() {
        this.manualTimeUpdates = !0,
        this.on("play", this.trackCurrentTime_),
        this.on("pause", this.stopTrackingCurrentTime_)
    }
    ,
    r.manualTimeUpdatesOff = function() {
        this.manualTimeUpdates = !1,
        this.stopTrackingCurrentTime(),
        this.off("play", this.trackCurrentTime_),
        this.off("pause", this.stopTrackingCurrentTime_)
    }
    ,
    r.trackCurrentTime = function() {
        this.currentTimeInterval && this.stopTrackingCurrentTime(),
        this.currentTimeInterval = this.setInterval(function() {
            this.trigger({
                type: "timeupdate",
                target: this,
                manuallyTriggered: !0
            })
        }, 250)
    }
    ,
    r.stopTrackingCurrentTime = function() {
        this.clearInterval(this.currentTimeInterval),
        this.trigger({
            type: "timeupdate",
            target: this,
            manuallyTriggered: !0
        })
    }
    ,
    r.dispose = function() {
        this.clearTracks(tt.names),
        this.manualProgress && this.manualProgressOff(),
        this.manualTimeUpdates && this.manualTimeUpdatesOff(),
        a.prototype.dispose.call(this)
    }
    ,
    r.clearTracks = function(e) {
        var n = this;
        e = [].concat(e),
        e.forEach(function(s) {
            for (var o = n[s + "Tracks"]() || [], u = o.length; u--; ) {
                var l = o[u];
                s === "text" && n.removeRemoteTextTrack(l),
                o.removeTrack(l)
            }
        })
    }
    ,
    r.cleanupAutoTextTracks = function() {
        for (var e = this.autoRemoteTextTracks_ || [], n = e.length; n--; ) {
            var s = e[n];
            this.removeRemoteTextTrack(s)
        }
    }
    ,
    r.reset = function() {}
    ,
    r.crossOrigin = function() {}
    ,
    r.setCrossOrigin = function() {}
    ,
    r.error = function(e) {
        return e !== void 0 && (this.error_ = new je(e),
        this.trigger("error")),
        this.error_
    }
    ,
    r.played = function() {
        return this.hasStarted_ ? Zt(0, 0) : Zt()
    }
    ,
    r.play = function() {}
    ,
    r.setScrubbing = function() {}
    ,
    r.scrubbing = function() {}
    ,
    r.setCurrentTime = function() {
        this.manualTimeUpdates && this.trigger({
            type: "timeupdate",
            target: this,
            manuallyTriggered: !0
        })
    }
    ,
    r.initTrackListeners = function() {
        var e = this;
        tt.names.forEach(function(n) {
            var s = tt[n]
              , o = function() {
                e.trigger(n + "trackchange")
            }
              , u = e[s.getterName]();
            u.addEventListener("removetrack", o),
            u.addEventListener("addtrack", o),
            e.on("dispose", function() {
                u.removeEventListener("removetrack", o),
                u.removeEventListener("addtrack", o)
            })
        })
    }
    ,
    r.addWebVttScript_ = function() {
        var e = this;
        if (!A.WebVTT)
            if (V.body.contains(this.el())) {
                if (!this.options_["vtt.js"] && vi(hu) && Object.keys(hu).length > 0) {
                    this.trigger("vttjsloaded");
                    return
                }
                var n = V.createElement("script");
                n.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",
                n.onload = function() {
                    e.trigger("vttjsloaded")
                }
                ,
                n.onerror = function() {
                    e.trigger("vttjserror")
                }
                ,
                this.on("dispose", function() {
                    n.onload = null,
                    n.onerror = null
                }),
                A.WebVTT = !0,
                this.el().parentNode.appendChild(n)
            } else
                this.ready(this.addWebVttScript_)
    }
    ,
    r.emulateTextTracks = function() {
        var e = this
          , n = this.textTracks()
          , s = this.remoteTextTracks()
          , o = function(g) {
            return n.addTrack(g.track)
        }
          , u = function(g) {
            return n.removeTrack(g.track)
        };
        s.on("addtrack", o),
        s.on("removetrack", u),
        this.addWebVttScript_();
        var l = function() {
            return e.trigger("texttrackchange")
        }
          , c = function() {
            l();
            for (var g = 0; g < n.length; g++) {
                var y = n[g];
                y.removeEventListener("cuechange", l),
                y.mode === "showing" && y.addEventListener("cuechange", l)
            }
        };
        c(),
        n.addEventListener("change", c),
        n.addEventListener("addtrack", c),
        n.addEventListener("removetrack", c),
        this.on("dispose", function() {
            s.off("addtrack", o),
            s.off("removetrack", u),
            n.removeEventListener("change", c),
            n.removeEventListener("addtrack", c),
            n.removeEventListener("removetrack", c);
            for (var p = 0; p < n.length; p++) {
                var g = n[p];
                g.removeEventListener("cuechange", l)
            }
        })
    }
    ,
    r.addTextTrack = function(e, n, s) {
        if (!e)
            throw new Error("TextTrack kind is required but was not provided");
        return dv(this, e, n, s)
    }
    ,
    r.createRemoteTextTrack = function(e) {
        var n = fe(e, {
            tech: this
        });
        return new Lr.remoteTextEl.TrackClass(n)
    }
    ,
    r.addRemoteTextTrack = function(e, n) {
        var s = this;
        e === void 0 && (e = {});
        var o = this.createRemoteTextTrack(e);
        return n !== !0 && n !== !1 && (Z.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),
        n = !0),
        this.remoteTextTrackEls().addTrackElement_(o),
        this.remoteTextTracks().addTrack(o.track),
        n !== !0 && this.ready(function() {
            return s.autoRemoteTextTracks_.addTrack(o.track)
        }),
        o
    }
    ,
    r.removeRemoteTextTrack = function(e) {
        var n = this.remoteTextTrackEls().getTrackElementByTrack_(e);
        this.remoteTextTrackEls().removeTrackElement_(n),
        this.remoteTextTracks().removeTrack(e),
        this.autoRemoteTextTracks_.removeTrack(e)
    }
    ,
    r.getVideoPlaybackQuality = function() {
        return {}
    }
    ,
    r.requestPictureInPicture = function() {
        var e = this.options_.Promise || A.Promise;
        if (e)
            return e.reject()
    }
    ,
    r.disablePictureInPicture = function() {
        return !0
    }
    ,
    r.setDisablePictureInPicture = function() {}
    ,
    r.setPoster = function() {}
    ,
    r.playsinline = function() {}
    ,
    r.setPlaysinline = function() {}
    ,
    r.overrideNativeAudioTracks = function() {}
    ,
    r.overrideNativeVideoTracks = function() {}
    ,
    r.canPlayType = function() {
        return ""
    }
    ,
    t.canPlayType = function() {
        return ""
    }
    ,
    t.canPlaySource = function(e, n) {
        return t.canPlayType(e.type)
    }
    ,
    t.isTech = function(e) {
        return e.prototype instanceof t || e instanceof t || e === t
    }
    ,
    t.registerTech = function(e, n) {
        if (t.techs_ || (t.techs_ = {}),
        !t.isTech(n))
            throw new Error("Tech " + e + " must be a Tech");
        if (!t.canPlayType)
            throw new Error("Techs must have a static canPlayType method on them");
        if (!t.canPlaySource)
            throw new Error("Techs must have a static canPlaySource method on them");
        return e = Te(e),
        t.techs_[e] = n,
        t.techs_[cn(e)] = n,
        e !== "Tech" && t.defaultTechOrder_.push(e),
        n
    }
    ,
    t.getTech = function(e) {
        if (e) {
            if (t.techs_ && t.techs_[e])
                return t.techs_[e];
            if (e = Te(e),
            A && A.videojs && A.videojs[e])
                return Z.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),
                A.videojs[e]
        }
    }
    ,
    t
}(U);
Ne.names.forEach(function(a) {
    var t = Ne[a];
    ue.prototype[t.getterName] = function() {
        return this[t.privateName] = this[t.privateName] || new t.ListClass,
        this[t.privateName]
    }
});
ue.prototype.featuresVolumeControl = !0;
ue.prototype.featuresMuteControl = !0;
ue.prototype.featuresFullscreenResize = !1;
ue.prototype.featuresPlaybackRate = !1;
ue.prototype.featuresProgressEvents = !1;
ue.prototype.featuresSourceset = !1;
ue.prototype.featuresTimeupdateEvents = !1;
ue.prototype.featuresNativeTextTracks = !1;
ue.withSourceHandlers = function(a) {
    a.registerSourceHandler = function(r, i) {
        var e = a.sourceHandlers;
        e || (e = a.sourceHandlers = []),
        i === void 0 && (i = e.length),
        e.splice(i, 0, r)
    }
    ,
    a.canPlayType = function(r) {
        for (var i = a.sourceHandlers || [], e, n = 0; n < i.length; n++)
            if (e = i[n].canPlayType(r),
            e)
                return e;
        return ""
    }
    ,
    a.selectSourceHandler = function(r, i) {
        for (var e = a.sourceHandlers || [], n, s = 0; s < e.length; s++)
            if (n = e[s].canHandleSource(r, i),
            n)
                return e[s];
        return null
    }
    ,
    a.canPlaySource = function(r, i) {
        var e = a.selectSourceHandler(r, i);
        return e ? e.canHandleSource(r, i) : ""
    }
    ;
    var t = ["seekable", "seeking", "duration"];
    t.forEach(function(r) {
        var i = this[r];
        typeof i == "function" && (this[r] = function() {
            return this.sourceHandler_ && this.sourceHandler_[r] ? this.sourceHandler_[r].apply(this.sourceHandler_, arguments) : i.apply(this, arguments)
        }
        )
    }, a.prototype),
    a.prototype.setSource = function(r) {
        var i = a.selectSourceHandler(r, this.options_);
        i || (a.nativeSourceHandler ? i = a.nativeSourceHandler : Z.error("No source handler found for the current source.")),
        this.disposeSourceHandler(),
        this.off("dispose", this.disposeSourceHandler_),
        i !== a.nativeSourceHandler && (this.currentSource_ = r),
        this.sourceHandler_ = i.handleSource(r, this, this.options_),
        this.one("dispose", this.disposeSourceHandler_)
    }
    ,
    a.prototype.disposeSourceHandler = function() {
        this.currentSource_ && (this.clearTracks(["audio", "video"]),
        this.currentSource_ = null),
        this.cleanupAutoTextTracks(),
        this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(),
        this.sourceHandler_ = null)
    }
}
;
U.registerComponent("Tech", ue);
ue.registerTech("Tech", ue);
ue.defaultTechOrder_ = [];
var er = {}
  , ns = {}
  , Sn = {};
function cv(a, t) {
    er[a] = er[a] || [],
    er[a].push(t)
}
function fv(a, t, r) {
    a.setTimeout(function() {
        return Kt(t, er[t.type], r, a)
    }, 1)
}
function hv(a, t) {
    a.forEach(function(r) {
        return r.setTech && r.setTech(t)
    })
}
function pv(a, t, r) {
    return a.reduceRight(Js(r), t[r]())
}
function mv(a, t, r, i) {
    return t[r](a.reduce(Js(r), i))
}
function $u(a, t, r, i) {
    i === void 0 && (i = null);
    var e = "call" + Te(r)
      , n = a.reduce(Js(e), i)
      , s = n === Sn
      , o = s ? null : t[r](n);
    return _v(a, r, o, s),
    o
}
var gv = {
    buffered: 1,
    currentTime: 1,
    duration: 1,
    muted: 1,
    played: 1,
    paused: 1,
    seekable: 1,
    volume: 1
}
  , vv = {
    setCurrentTime: 1,
    setMuted: 1,
    setVolume: 1
}
  , Ku = {
    play: 1,
    pause: 1
};
function Js(a) {
    return function(t, r) {
        return t === Sn ? Sn : r[a] ? r[a](t) : t
    }
}
function _v(a, t, r, i) {
    for (var e = a.length - 1; e >= 0; e--) {
        var n = a[e];
        n[t] && n[t](i, r)
    }
}
function yv(a) {
    ns[a.id()] = null
}
function Tv(a, t) {
    var r = ns[a.id()]
      , i = null;
    if (r == null)
        return i = t(a),
        ns[a.id()] = [[t, i]],
        i;
    for (var e = 0; e < r.length; e++) {
        var n = r[e]
          , s = n[0]
          , o = n[1];
        s === t && (i = o)
    }
    return i === null && (i = t(a),
    r.push([t, i])),
    i
}
function Kt(a, t, r, i, e, n) {
    a === void 0 && (a = {}),
    t === void 0 && (t = []),
    e === void 0 && (e = []),
    n === void 0 && (n = !1);
    var s = t
      , o = s[0]
      , u = s.slice(1);
    if (typeof o == "string")
        Kt(a, er[o], r, i, e, n);
    else if (o) {
        var l = Tv(i, o);
        if (!l.setSource)
            return e.push(l),
            Kt(a, u, r, i, e, n);
        l.setSource(pe({}, a), function(c, p) {
            if (c)
                return Kt(a, u, r, i, e, n);
            e.push(l),
            Kt(p, a.type === p.type ? u : er[p.type], r, i, e, n)
        })
    } else
        u.length ? Kt(a, u, r, i, e, n) : n ? r(a, e) : Kt(a, er["*"], r, i, e, !0)
}
var bv = {
    opus: "video/ogg",
    ogv: "video/ogg",
    mp4: "video/mp4",
    mov: "video/mp4",
    m4v: "video/mp4",
    mkv: "video/x-matroska",
    m4a: "audio/mp4",
    mp3: "audio/mpeg",
    aac: "audio/aac",
    caf: "audio/x-caf",
    flac: "audio/flac",
    oga: "audio/ogg",
    wav: "audio/wav",
    m3u8: "application/x-mpegURL",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    png: "image/png",
    svg: "image/svg+xml",
    webp: "image/webp"
}
  , En = function(t) {
    t === void 0 && (t = "");
    var r = Qs(t)
      , i = bv[r.toLowerCase()];
    return i || ""
}
  , xv = function(t, r) {
    if (!r)
        return "";
    if (t.cache_.source.src === r && t.cache_.source.type)
        return t.cache_.source.type;
    var i = t.cache_.sources.filter(function(o) {
        return o.src === r
    });
    if (i.length)
        return i[0].type;
    for (var e = t.$$("source"), n = 0; n < e.length; n++) {
        var s = e[n];
        if (s.type && s.src && s.src === r)
            return s.type
    }
    return En(r)
}
  , Sv = function a(t) {
    if (Array.isArray(t)) {
        var r = [];
        t.forEach(function(i) {
            i = a(i),
            Array.isArray(i) ? r = r.concat(i) : Mt(i) && r.push(i)
        }),
        t = r
    } else
        typeof t == "string" && t.trim() ? t = [Xu({
            src: t
        })] : Mt(t) && typeof t.src == "string" && t.src && t.src.trim() ? t = [Xu(t)] : t = [];
    return t
};
function Xu(a) {
    if (!a.type) {
        var t = En(a.src);
        t && (a.type = t)
    }
    return a
}
var Ev = function(a) {
    G(t, a);
    function t(r, i, e) {
        var n, s = fe({
            createEl: !1
        }, i);
        if (n = a.call(this, r, s, e) || this,
        !i.playerOptions.sources || i.playerOptions.sources.length === 0)
            for (var o = 0, u = i.playerOptions.techOrder; o < u.length; o++) {
                var l = Te(u[o])
                  , c = ue.getTech(l);
                if (l || (c = U.getComponent(l)),
                c && c.isSupported()) {
                    r.loadTech_(l);
                    break
                }
            }
        else
            r.src(i.playerOptions.sources);
        return n
    }
    return t
}(U);
U.registerComponent("MediaLoader", Ev);
var Zn = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.handleMouseOver_ = function(s) {
            return n.handleMouseOver(s)
        }
        ,
        n.handleMouseOut_ = function(s) {
            return n.handleMouseOut(s)
        }
        ,
        n.handleClick_ = function(s) {
            return n.handleClick(s)
        }
        ,
        n.handleKeyDown_ = function(s) {
            return n.handleKeyDown(s)
        }
        ,
        n.emitTapEvents(),
        n.enable(),
        n
    }
    var r = t.prototype;
    return r.createEl = function(e, n, s) {
        e === void 0 && (e = "div"),
        n === void 0 && (n = {}),
        s === void 0 && (s = {}),
        n = pe({
            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
            className: this.buildCSSClass(),
            tabIndex: 0
        }, n),
        e === "button" && Z.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."),
        s = pe({
            role: "button"
        }, s),
        this.tabIndex_ = n.tabIndex;
        var o = a.prototype.createEl.call(this, e, n, s);
        return this.createControlTextEl(o),
        o
    }
    ,
    r.dispose = function() {
        this.controlTextEl_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.createControlTextEl = function(e) {
        return this.controlTextEl_ = ve("span", {
            className: "vjs-control-text"
        }, {
            "aria-live": "polite"
        }),
        e && e.appendChild(this.controlTextEl_),
        this.controlText(this.controlText_, e),
        this.controlTextEl_
    }
    ,
    r.controlText = function(e, n) {
        if (n === void 0 && (n = this.el()),
        e === void 0)
            return this.controlText_ || "Need Text";
        var s = this.localize(e);
        this.controlText_ = e,
        nr(this.controlTextEl_, s),
        !this.nonIconControl && !this.player_.options_.noUITitleAttributes && n.setAttribute("title", s)
    }
    ,
    r.buildCSSClass = function() {
        return "vjs-control vjs-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.enable = function() {
        this.enabled_ || (this.enabled_ = !0,
        this.removeClass("vjs-disabled"),
        this.el_.setAttribute("aria-disabled", "false"),
        typeof this.tabIndex_ < "u" && this.el_.setAttribute("tabIndex", this.tabIndex_),
        this.on(["tap", "click"], this.handleClick_),
        this.on("keydown", this.handleKeyDown_))
    }
    ,
    r.disable = function() {
        this.enabled_ = !1,
        this.addClass("vjs-disabled"),
        this.el_.setAttribute("aria-disabled", "true"),
        typeof this.tabIndex_ < "u" && this.el_.removeAttribute("tabIndex"),
        this.off("mouseover", this.handleMouseOver_),
        this.off("mouseout", this.handleMouseOut_),
        this.off(["tap", "click"], this.handleClick_),
        this.off("keydown", this.handleKeyDown_)
    }
    ,
    r.handleLanguagechange = function() {
        this.controlText(this.controlText_)
    }
    ,
    r.handleClick = function(e) {
        this.options_.clickHandler && this.options_.clickHandler.call(this, arguments)
    }
    ,
    r.handleKeyDown = function(e) {
        Q.isEventKey(e, "Space") || Q.isEventKey(e, "Enter") ? (e.preventDefault(),
        e.stopPropagation(),
        this.trigger("click")) : a.prototype.handleKeyDown.call(this, e)
    }
    ,
    t
}(U);
U.registerComponent("ClickableComponent", Zn);
var Cv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.update(),
        n.update_ = function(s) {
            return n.update(s)
        }
        ,
        i.on("posterchange", n.update_),
        n
    }
    var r = t.prototype;
    return r.dispose = function() {
        this.player().off("posterchange", this.update_),
        a.prototype.dispose.call(this)
    }
    ,
    r.createEl = function() {
        var e = ve("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        return e
    }
    ,
    r.update = function(e) {
        var n = this.player().poster();
        this.setSrc(n),
        n ? this.show() : this.hide()
    }
    ,
    r.setSrc = function(e) {
        var n = "";
        e && (n = 'url("' + e + '")'),
        this.el_.style.backgroundImage = n
    }
    ,
    r.handleClick = function(e) {
        if (this.player_.controls()) {
            var n = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
            this.player_.tech(!0) && !((ki || wi) && n) && this.player_.tech(!0).focus(),
            this.player_.paused() ? wt(this.player_.play()) : this.player_.pause()
        }
    }
    ,
    t
}(Zn);
U.registerComponent("PosterImage", Cv);
var et = "#222"
  , Yu = "#ccc"
  , wv = {
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
};
function Ra(a, t) {
    var r;
    if (a.length === 4)
        r = a[1] + a[1] + a[2] + a[2] + a[3] + a[3];
    else if (a.length === 7)
        r = a.slice(1);
    else
        throw new Error("Invalid color code provided, " + a + "; must be formatted as e.g. #f0e or #f604e2.");
    return "rgba(" + parseInt(r.slice(0, 2), 16) + "," + parseInt(r.slice(2, 4), 16) + "," + parseInt(r.slice(4, 6), 16) + "," + t + ")"
}
function Ma(a, t, r) {
    try {
        a.style[t] = r
    } catch {
        return
    }
}
var kv = function(a) {
    G(t, a);
    function t(i, e, n) {
        var s;
        s = a.call(this, i, e, n) || this;
        var o = function(l) {
            return s.updateDisplay(l)
        };
        return i.on("loadstart", function(u) {
            return s.toggleDisplay(u)
        }),
        i.on("texttrackchange", o),
        i.on("loadedmetadata", function(u) {
            return s.preselectTrack(u)
        }),
        i.ready(oe(Y(s), function() {
            if (i.tech_ && i.tech_.featuresNativeTextTracks) {
                this.hide();
                return
            }
            i.on("fullscreenchange", o),
            i.on("playerresize", o),
            A.addEventListener("orientationchange", o),
            i.on("dispose", function() {
                return A.removeEventListener("orientationchange", o)
            });
            for (var u = this.options_.playerOptions.tracks || [], l = 0; l < u.length; l++)
                this.player_.addRemoteTextTrack(u[l], !0);
            this.preselectTrack()
        })),
        s
    }
    var r = t.prototype;
    return r.preselectTrack = function() {
        for (var e = {
            captions: 1,
            subtitles: 1
        }, n = this.player_.textTracks(), s = this.player_.cache_.selectedLanguage, o, u, l, c = 0; c < n.length; c++) {
            var p = n[c];
            s && s.enabled && s.language && s.language === p.language && p.kind in e ? p.kind === s.kind ? l = p : l || (l = p) : s && !s.enabled ? (l = null,
            o = null,
            u = null) : p.default && (p.kind === "descriptions" && !o ? o = p : p.kind in e && !u && (u = p))
        }
        l ? l.mode = "showing" : u ? u.mode = "showing" : o && (o.mode = "showing")
    }
    ,
    r.toggleDisplay = function() {
        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
    }
    ,
    r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-text-track-display"
        }, {
            "aria-live": "off",
            "aria-atomic": "true"
        })
    }
    ,
    r.clearDisplay = function() {
        typeof A.WebVTT == "function" && A.WebVTT.processCues(A, [], this.el_)
    }
    ,
    r.updateDisplay = function() {
        var e = this.player_.textTracks()
          , n = this.options_.allowMultipleShowingTracks;
        if (this.clearDisplay(),
        n) {
            for (var s = [], o = 0; o < e.length; ++o) {
                var u = e[o];
                u.mode === "showing" && s.push(u)
            }
            this.updateForTrack(s);
            return
        }
        for (var l = null, c = null, p = e.length; p--; ) {
            var g = e[p];
            g.mode === "showing" && (g.kind === "descriptions" ? l = g : c = g)
        }
        c ? (this.getAttribute("aria-live") !== "off" && this.setAttribute("aria-live", "off"),
        this.updateForTrack(c)) : l && (this.getAttribute("aria-live") !== "assertive" && this.setAttribute("aria-live", "assertive"),
        this.updateForTrack(l))
    }
    ,
    r.updateDisplayState = function(e) {
        for (var n = this.player_.textTrackSettings.getValues(), s = e.activeCues, o = s.length; o--; ) {
            var u = s[o];
            if (u) {
                var l = u.displayState;
                if (n.color && (l.firstChild.style.color = n.color),
                n.textOpacity && Ma(l.firstChild, "color", Ra(n.color || "#fff", n.textOpacity)),
                n.backgroundColor && (l.firstChild.style.backgroundColor = n.backgroundColor),
                n.backgroundOpacity && Ma(l.firstChild, "backgroundColor", Ra(n.backgroundColor || "#000", n.backgroundOpacity)),
                n.windowColor && (n.windowOpacity ? Ma(l, "backgroundColor", Ra(n.windowColor, n.windowOpacity)) : l.style.backgroundColor = n.windowColor),
                n.edgeStyle && (n.edgeStyle === "dropshadow" ? l.firstChild.style.textShadow = "2px 2px 3px " + et + ", 2px 2px 4px " + et + ", 2px 2px 5px " + et : n.edgeStyle === "raised" ? l.firstChild.style.textShadow = "1px 1px " + et + ", 2px 2px " + et + ", 3px 3px " + et : n.edgeStyle === "depressed" ? l.firstChild.style.textShadow = "1px 1px " + Yu + ", 0 1px " + Yu + ", -1px -1px " + et + ", 0 -1px " + et : n.edgeStyle === "uniform" && (l.firstChild.style.textShadow = "0 0 4px " + et + ", 0 0 4px " + et + ", 0 0 4px " + et + ", 0 0 4px " + et)),
                n.fontPercent && n.fontPercent !== 1) {
                    var c = A.parseFloat(l.style.fontSize);
                    l.style.fontSize = c * n.fontPercent + "px",
                    l.style.height = "auto",
                    l.style.top = "auto"
                }
                n.fontFamily && n.fontFamily !== "default" && (n.fontFamily === "small-caps" ? l.firstChild.style.fontVariant = "small-caps" : l.firstChild.style.fontFamily = wv[n.fontFamily])
            }
        }
    }
    ,
    r.updateForTrack = function(e) {
        if (Array.isArray(e) || (e = [e]),
        !(typeof A.WebVTT != "function" || e.every(function(y) {
            return !y.activeCues
        }))) {
            for (var n = [], s = 0; s < e.length; ++s)
                for (var o = e[s], u = 0; u < o.activeCues.length; ++u)
                    n.push(o.activeCues[u]);
            A.WebVTT.processCues(A, n, this.el_);
            for (var l = 0; l < e.length; ++l) {
                for (var c = e[l], p = 0; p < c.activeCues.length; ++p) {
                    var g = c.activeCues[p].displayState;
                    Et(g, "vjs-text-track-cue"),
                    Et(g, "vjs-text-track-cue-" + (c.language ? c.language : l))
                }
                this.player_.textTrackSettings && this.updateDisplayState(c)
            }
        }
    }
    ,
    t
}(U);
U.registerComponent("TextTrackDisplay", kv);
var Av = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = this.player_.isAudio()
          , n = this.localize(e ? "Audio Player" : "Video Player")
          , s = ve("span", {
            className: "vjs-control-text",
            innerHTML: this.localize("{1} is loading.", [n])
        })
          , o = a.prototype.createEl.call(this, "div", {
            className: "vjs-loading-spinner",
            dir: "ltr"
        });
        return o.appendChild(s),
        o
    }
    ,
    t
}(U);
U.registerComponent("LoadingSpinner", Av);
var ut = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.createEl = function(e, n, s) {
        n === void 0 && (n = {}),
        s === void 0 && (s = {}),
        e = "button",
        n = pe({
            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
            className: this.buildCSSClass()
        }, n),
        s = pe({
            type: "button"
        }, s);
        var o = U.prototype.createEl.call(this, e, n, s);
        return this.createControlTextEl(o),
        o
    }
    ,
    r.addChild = function(e, n) {
        n === void 0 && (n = {});
        var s = this.constructor.name;
        return Z.warn("Adding an actionable (user controllable) child to a Button (" + s + ") is not supported; use a ClickableComponent instead."),
        U.prototype.addChild.call(this, e, n)
    }
    ,
    r.enable = function() {
        a.prototype.enable.call(this),
        this.el_.removeAttribute("disabled")
    }
    ,
    r.disable = function() {
        a.prototype.disable.call(this),
        this.el_.setAttribute("disabled", "disabled")
    }
    ,
    r.handleKeyDown = function(e) {
        if (Q.isEventKey(e, "Space") || Q.isEventKey(e, "Enter")) {
            e.stopPropagation();
            return
        }
        a.prototype.handleKeyDown.call(this, e)
    }
    ,
    t
}(Zn);
U.registerComponent("Button", ut);
var ac = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.mouseused_ = !1,
        n.on("mousedown", function(s) {
            return n.handleMouseDown(s)
        }),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-big-play-button"
    }
    ,
    r.handleClick = function(e) {
        var n = this.player_.play();
        if (this.mouseused_ && e.clientX && e.clientY) {
            var s = this.player_.usingPlugin("eme") && this.player_.eme.sessions && this.player_.eme.sessions.length > 0;
            wt(n),
            this.player_.tech(!0) && !((ki || wi) && s) && this.player_.tech(!0).focus();
            return
        }
        var o = this.player_.getChild("controlBar")
          , u = o && o.getChild("playToggle");
        if (!u) {
            this.player_.tech(!0).focus();
            return
        }
        var l = function() {
            return u.focus()
        };
        di(n) ? n.then(l, function() {}) : this.setTimeout(l, 1)
    }
    ,
    r.handleKeyDown = function(e) {
        this.mouseused_ = !1,
        a.prototype.handleKeyDown.call(this, e)
    }
    ,
    r.handleMouseDown = function(e) {
        this.mouseused_ = !0
    }
    ,
    t
}(ut);
ac.prototype.controlText_ = "Play Video";
U.registerComponent("BigPlayButton", ac);
var Pv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.controlText(e && e.controlText || n.localize("Close")),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-close-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.handleClick = function(e) {
        this.trigger({
            type: "close",
            bubbles: !1
        })
    }
    ,
    r.handleKeyDown = function(e) {
        Q.isEventKey(e, "Esc") ? (e.preventDefault(),
        e.stopPropagation(),
        this.trigger("click")) : a.prototype.handleKeyDown.call(this, e)
    }
    ,
    t
}(ut);
U.registerComponent("CloseButton", Pv);
var sc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e === void 0 && (e = {}),
        n = a.call(this, i, e) || this,
        e.replay = e.replay === void 0 || e.replay,
        n.on(i, "play", function(s) {
            return n.handlePlay(s)
        }),
        n.on(i, "pause", function(s) {
            return n.handlePause(s)
        }),
        e.replay && n.on(i, "ended", function(s) {
            return n.handleEnded(s)
        }),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-play-control " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.handleClick = function(e) {
        this.player_.paused() ? wt(this.player_.play()) : this.player_.pause()
    }
    ,
    r.handleSeeked = function(e) {
        this.removeClass("vjs-ended"),
        this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
    }
    ,
    r.handlePlay = function(e) {
        this.removeClass("vjs-ended"),
        this.removeClass("vjs-paused"),
        this.addClass("vjs-playing"),
        this.controlText("Pause")
    }
    ,
    r.handlePause = function(e) {
        this.removeClass("vjs-playing"),
        this.addClass("vjs-paused"),
        this.controlText("Play")
    }
    ,
    r.handleEnded = function(e) {
        var n = this;
        this.removeClass("vjs-playing"),
        this.addClass("vjs-ended"),
        this.controlText("Replay"),
        this.one(this.player_, "seeked", function(s) {
            return n.handleSeeked(s)
        })
    }
    ,
    t
}(ut);
sc.prototype.controlText_ = "Play";
U.registerComponent("PlayToggle", sc);
var oc = function(t, r) {
    t = t < 0 ? 0 : t;
    var i = Math.floor(t % 60)
      , e = Math.floor(t / 60 % 60)
      , n = Math.floor(t / 3600)
      , s = Math.floor(r / 60 % 60)
      , o = Math.floor(r / 3600);
    return (isNaN(t) || t === 1 / 0) && (n = e = i = "-"),
    n = n > 0 || o > 0 ? n + ":" : "",
    e = ((n || s >= 10) && e < 10 ? "0" + e : e) + ":",
    i = i < 10 ? "0" + i : i,
    n + e + i
}
  , Zs = oc;
function Iv(a) {
    Zs = a
}
function Dv() {
    Zs = oc
}
function Rr(a, t) {
    return t === void 0 && (t = a),
    Zs(a, t)
}
var jr = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.on(i, ["timeupdate", "ended"], function(s) {
            return n.updateContent(s)
        }),
        n.updateTextNode_(),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = this.buildCSSClass()
          , n = a.prototype.createEl.call(this, "div", {
            className: e + " vjs-time-control vjs-control",
            innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + " </span>"
        });
        return this.contentEl_ = ve("span", {
            className: e + "-display"
        }, {
            "aria-live": "off",
            role: "presentation"
        }),
        n.appendChild(this.contentEl_),
        n
    }
    ,
    r.dispose = function() {
        this.contentEl_ = null,
        this.textNode_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.updateTextNode_ = function(e) {
        var n = this;
        e === void 0 && (e = 0),
        e = Rr(e),
        this.formattedTime_ !== e && (this.formattedTime_ = e,
        this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", function() {
            if (n.contentEl_) {
                var s = n.textNode_;
                s && n.contentEl_.firstChild !== s && (s = null,
                Z.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead.")),
                n.textNode_ = V.createTextNode(n.formattedTime_),
                n.textNode_ && (s ? n.contentEl_.replaceChild(n.textNode_, s) : n.contentEl_.appendChild(n.textNode_))
            }
        }))
    }
    ,
    r.updateContent = function(e) {}
    ,
    t
}(U);
jr.prototype.labelText_ = "Time";
jr.prototype.controlText_ = "Time";
U.registerComponent("TimeDisplay", jr);
var eo = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-current-time"
    }
    ,
    r.updateContent = function(e) {
        var n;
        this.player_.ended() ? n = this.player_.duration() : n = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
        this.updateTextNode_(n)
    }
    ,
    t
}(jr);
eo.prototype.labelText_ = "Current Time";
eo.prototype.controlText_ = "Current Time";
U.registerComponent("CurrentTimeDisplay", eo);
var to = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        n = a.call(this, i, e) || this;
        var s = function(u) {
            return n.updateContent(u)
        };
        return n.on(i, "durationchange", s),
        n.on(i, "loadstart", s),
        n.on(i, "loadedmetadata", s),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-duration"
    }
    ,
    r.updateContent = function(e) {
        var n = this.player_.duration();
        this.updateTextNode_(n)
    }
    ,
    t
}(jr);
to.prototype.labelText_ = "Duration";
to.prototype.controlText_ = "Duration";
U.registerComponent("DurationDisplay", to);
var Ov = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-time-control vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        }, {
            "aria-hidden": !0
        })
    }
    ,
    t
}(U);
U.registerComponent("TimeDivider", Ov);
var ro = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.on(i, "durationchange", function(s) {
            return n.updateContent(s)
        }),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-remaining-time"
    }
    ,
    r.createEl = function() {
        var e = a.prototype.createEl.call(this);
        return e.insertBefore(ve("span", {}, {
            "aria-hidden": !0
        }, "-"), this.contentEl_),
        e
    }
    ,
    r.updateContent = function(e) {
        if (typeof this.player_.duration() == "number") {
            var n;
            this.player_.ended() ? n = 0 : this.player_.remainingTimeDisplay ? n = this.player_.remainingTimeDisplay() : n = this.player_.remainingTime(),
            this.updateTextNode_(n)
        }
    }
    ,
    t
}(jr);
ro.prototype.labelText_ = "Remaining Time";
ro.prototype.controlText_ = "Remaining Time";
U.registerComponent("RemainingTimeDisplay", ro);
var Lv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.updateShowing(),
        n.on(n.player(), "durationchange", function(s) {
            return n.updateShowing(s)
        }),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = a.prototype.createEl.call(this, "div", {
            className: "vjs-live-control vjs-control"
        });
        return this.contentEl_ = ve("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
        }, {
            "aria-live": "off"
        }),
        e.appendChild(this.contentEl_),
        e
    }
    ,
    r.dispose = function() {
        this.contentEl_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.updateShowing = function(e) {
        this.player().duration() === 1 / 0 ? this.show() : this.hide()
    }
    ,
    t
}(U);
U.registerComponent("LiveDisplay", Lv);
var uc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.updateLiveEdgeStatus(),
        n.player_.liveTracker && (n.updateLiveEdgeStatusHandler_ = function(s) {
            return n.updateLiveEdgeStatus(s)
        }
        ,
        n.on(n.player_.liveTracker, "liveedgechange", n.updateLiveEdgeStatusHandler_)),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = a.prototype.createEl.call(this, "button", {
            className: "vjs-seek-to-live-control vjs-control"
        });
        return this.textEl_ = ve("span", {
            className: "vjs-seek-to-live-text",
            innerHTML: this.localize("LIVE")
        }, {
            "aria-hidden": "true"
        }),
        e.appendChild(this.textEl_),
        e
    }
    ,
    r.updateLiveEdgeStatus = function() {
        !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0),
        this.addClass("vjs-at-live-edge"),
        this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1),
        this.removeClass("vjs-at-live-edge"),
        this.controlText("Seek to live, currently behind live"))
    }
    ,
    r.handleClick = function() {
        this.player_.liveTracker.seekToLiveEdge()
    }
    ,
    r.dispose = function() {
        this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_),
        this.textEl_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    t
}(ut);
uc.prototype.controlText_ = "Seek to live, currently playing live";
U.registerComponent("SeekToLive", uc);
var ea = function(t, r, i) {
    return t = Number(t),
    Math.min(i, Math.max(r, isNaN(t) ? r : t))
}
  , io = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.handleMouseDown_ = function(s) {
            return n.handleMouseDown(s)
        }
        ,
        n.handleMouseUp_ = function(s) {
            return n.handleMouseUp(s)
        }
        ,
        n.handleKeyDown_ = function(s) {
            return n.handleKeyDown(s)
        }
        ,
        n.handleClick_ = function(s) {
            return n.handleClick(s)
        }
        ,
        n.handleMouseMove_ = function(s) {
            return n.handleMouseMove(s)
        }
        ,
        n.update_ = function(s) {
            return n.update(s)
        }
        ,
        n.bar = n.getChild(n.options_.barName),
        n.vertical(!!n.options_.vertical),
        n.enable(),
        n
    }
    var r = t.prototype;
    return r.enabled = function() {
        return this.enabled_
    }
    ,
    r.enable = function() {
        this.enabled() || (this.on("mousedown", this.handleMouseDown_),
        this.on("touchstart", this.handleMouseDown_),
        this.on("keydown", this.handleKeyDown_),
        this.on("click", this.handleClick_),
        this.on(this.player_, "controlsvisible", this.update),
        this.playerEvent && this.on(this.player_, this.playerEvent, this.update),
        this.removeClass("disabled"),
        this.setAttribute("tabindex", 0),
        this.enabled_ = !0)
    }
    ,
    r.disable = function() {
        if (this.enabled()) {
            var e = this.bar.el_.ownerDocument;
            this.off("mousedown", this.handleMouseDown_),
            this.off("touchstart", this.handleMouseDown_),
            this.off("keydown", this.handleKeyDown_),
            this.off("click", this.handleClick_),
            this.off(this.player_, "controlsvisible", this.update_),
            this.off(e, "mousemove", this.handleMouseMove_),
            this.off(e, "mouseup", this.handleMouseUp_),
            this.off(e, "touchmove", this.handleMouseMove_),
            this.off(e, "touchend", this.handleMouseUp_),
            this.removeAttribute("tabindex"),
            this.addClass("disabled"),
            this.playerEvent && this.off(this.player_, this.playerEvent, this.update),
            this.enabled_ = !1
        }
    }
    ,
    r.createEl = function(e, n, s) {
        return n === void 0 && (n = {}),
        s === void 0 && (s = {}),
        n.className = n.className + " vjs-slider",
        n = pe({
            tabIndex: 0
        }, n),
        s = pe({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, s),
        a.prototype.createEl.call(this, e, n, s)
    }
    ,
    r.handleMouseDown = function(e) {
        var n = this.bar.el_.ownerDocument;
        e.type === "mousedown" && e.preventDefault(),
        e.type === "touchstart" && !Dt && e.preventDefault(),
        Nd(),
        this.addClass("vjs-sliding"),
        this.trigger("slideractive"),
        this.on(n, "mousemove", this.handleMouseMove_),
        this.on(n, "mouseup", this.handleMouseUp_),
        this.on(n, "touchmove", this.handleMouseMove_),
        this.on(n, "touchend", this.handleMouseUp_),
        this.handleMouseMove(e)
    }
    ,
    r.handleMouseMove = function(e) {}
    ,
    r.handleMouseUp = function() {
        var e = this.bar.el_.ownerDocument;
        Ud(),
        this.removeClass("vjs-sliding"),
        this.trigger("sliderinactive"),
        this.off(e, "mousemove", this.handleMouseMove_),
        this.off(e, "mouseup", this.handleMouseUp_),
        this.off(e, "touchmove", this.handleMouseMove_),
        this.off(e, "touchend", this.handleMouseUp_),
        this.update()
    }
    ,
    r.update = function() {
        var e = this;
        if (!(!this.el_ || !this.bar)) {
            var n = this.getProgress();
            return n === this.progress_ || (this.progress_ = n,
            this.requestNamedAnimationFrame("Slider#update", function() {
                var s = e.vertical() ? "height" : "width";
                e.bar.el().style[s] = (n * 100).toFixed(2) + "%"
            })),
            n
        }
    }
    ,
    r.getProgress = function() {
        return Number(ea(this.getPercent(), 0, 1).toFixed(4))
    }
    ,
    r.calculateDistance = function(e) {
        var n = Kn(this.el_, e);
        return this.vertical() ? n.y : n.x
    }
    ,
    r.handleKeyDown = function(e) {
        Q.isEventKey(e, "Left") || Q.isEventKey(e, "Down") ? (e.preventDefault(),
        e.stopPropagation(),
        this.stepBack()) : Q.isEventKey(e, "Right") || Q.isEventKey(e, "Up") ? (e.preventDefault(),
        e.stopPropagation(),
        this.stepForward()) : a.prototype.handleKeyDown.call(this, e)
    }
    ,
    r.handleClick = function(e) {
        e.stopPropagation(),
        e.preventDefault()
    }
    ,
    r.vertical = function(e) {
        if (e === void 0)
            return this.vertical_ || !1;
        this.vertical_ = !!e,
        this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
    }
    ,
    t
}(U);
U.registerComponent("Slider", io);
var Fa = function(t, r) {
    return ea(t / r * 100, 0, 100).toFixed(2) + "%"
}
  , Rv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.partEls_ = [],
        n.on(i, "progress", function(s) {
            return n.update(s)
        }),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = a.prototype.createEl.call(this, "div", {
            className: "vjs-load-progress"
        })
          , n = ve("span", {
            className: "vjs-control-text"
        })
          , s = ve("span", {
            textContent: this.localize("Loaded")
        })
          , o = V.createTextNode(": ");
        return this.percentageEl_ = ve("span", {
            className: "vjs-control-text-loaded-percentage",
            textContent: "0%"
        }),
        e.appendChild(n),
        n.appendChild(s),
        n.appendChild(o),
        n.appendChild(this.percentageEl_),
        e
    }
    ,
    r.dispose = function() {
        this.partEls_ = null,
        this.percentageEl_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.update = function(e) {
        var n = this;
        this.requestNamedAnimationFrame("LoadProgressBar#update", function() {
            var s = n.player_.liveTracker
              , o = n.player_.buffered()
              , u = s && s.isLive() ? s.seekableEnd() : n.player_.duration()
              , l = n.player_.bufferedEnd()
              , c = n.partEls_
              , p = Fa(l, u);
            n.percent_ !== p && (n.el_.style.width = p,
            nr(n.percentageEl_, p),
            n.percent_ = p);
            for (var g = 0; g < o.length; g++) {
                var y = o.start(g)
                  , S = o.end(g)
                  , x = c[g];
                x || (x = n.el_.appendChild(ve()),
                c[g] = x),
                !(x.dataset.start === y && x.dataset.end === S) && (x.dataset.start = y,
                x.dataset.end = S,
                x.style.left = Fa(y, l),
                x.style.width = Fa(S - y, l))
            }
            for (var b = c.length; b > o.length; b--)
                n.el_.removeChild(c[b - 1]);
            c.length = o.length
        })
    }
    ,
    t
}(U);
U.registerComponent("LoadProgressBar", Rv);
var Mv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.update = Pt(oe(Y(n), n.update), lt),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-time-tooltip"
        }, {
            "aria-hidden": "true"
        })
    }
    ,
    r.update = function(e, n, s) {
        var o = Ti(this.el_)
          , u = Ir(this.player_.el())
          , l = e.width * n;
        if (!(!u || !o)) {
            var c = e.left - u.left + l
              , p = e.width - l + (u.right - e.right)
              , g = o.width / 2;
            c < g ? g += g - c : p < g && (g = p),
            g < 0 ? g = 0 : g > o.width && (g = o.width),
            g = Math.round(g),
            this.el_.style.right = "-" + g + "px",
            this.write(s)
        }
    }
    ,
    r.write = function(e) {
        nr(this.el_, e)
    }
    ,
    r.updateTime = function(e, n, s, o) {
        var u = this;
        this.requestNamedAnimationFrame("TimeTooltip#updateTime", function() {
            var l, c = u.player_.duration();
            if (u.player_.liveTracker && u.player_.liveTracker.isLive()) {
                var p = u.player_.liveTracker.liveWindow()
                  , g = p - n * p;
                l = (g < 1 ? "" : "-") + Rr(g, p)
            } else
                l = Rr(s, c);
            u.update(e, n, l),
            o && o()
        })
    }
    ,
    t
}(U);
U.registerComponent("TimeTooltip", Mv);
var no = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.update = Pt(oe(Y(n), n.update), lt),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-play-progress vjs-slider-bar"
        }, {
            "aria-hidden": "true"
        })
    }
    ,
    r.update = function(e, n) {
        var s = this.getChild("timeTooltip");
        if (s) {
            var o = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
            s.updateTime(e, n, o)
        }
    }
    ,
    t
}(U);
no.prototype.options_ = {
    children: []
};
!Ge && !It && no.prototype.options_.children.push("timeTooltip");
U.registerComponent("PlayProgressBar", no);
var lc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.update = Pt(oe(Y(n), n.update), lt),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-mouse-display"
        })
    }
    ,
    r.update = function(e, n) {
        var s = this
          , o = n * this.player_.duration();
        this.getChild("timeTooltip").updateTime(e, n, o, function() {
            s.el_.style.left = e.width * n + "px"
        })
    }
    ,
    t
}(U);
lc.prototype.options_ = {
    children: ["timeTooltip"]
};
U.registerComponent("MouseTimeDisplay", lc);
var nn = 5
  , Qu = 12
  , ao = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.setEventHandlers_(),
        n
    }
    var r = t.prototype;
    return r.setEventHandlers_ = function() {
        var e = this;
        this.update_ = oe(this, this.update),
        this.update = Pt(this.update_, lt),
        this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
        this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update),
        this.updateInterval = null,
        this.enableIntervalHandler_ = function(n) {
            return e.enableInterval_(n)
        }
        ,
        this.disableIntervalHandler_ = function(n) {
            return e.disableInterval_(n)
        }
        ,
        this.on(this.player_, ["playing"], this.enableIntervalHandler_),
        this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_),
        "hidden"in V && "visibilityState"in V && this.on(V, "visibilitychange", this.toggleVisibility_)
    }
    ,
    r.toggleVisibility_ = function(e) {
        V.visibilityState === "hidden" ? (this.cancelNamedAnimationFrame("SeekBar#update"),
        this.cancelNamedAnimationFrame("Slider#update"),
        this.disableInterval_(e)) : (!this.player_.ended() && !this.player_.paused() && this.enableInterval_(),
        this.update())
    }
    ,
    r.enableInterval_ = function() {
        this.updateInterval || (this.updateInterval = this.setInterval(this.update, lt))
    }
    ,
    r.disableInterval_ = function(e) {
        this.player_.liveTracker && this.player_.liveTracker.isLive() && e && e.type !== "ended" || this.updateInterval && (this.clearInterval(this.updateInterval),
        this.updateInterval = null)
    }
    ,
    r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-progress-holder"
        }, {
            "aria-label": this.localize("Progress Bar")
        })
    }
    ,
    r.update = function(e) {
        var n = this;
        if (V.visibilityState !== "hidden") {
            var s = a.prototype.update.call(this);
            return this.requestNamedAnimationFrame("SeekBar#update", function() {
                var o = n.player_.ended() ? n.player_.duration() : n.getCurrentTime_()
                  , u = n.player_.liveTracker
                  , l = n.player_.duration();
                u && u.isLive() && (l = n.player_.liveTracker.liveCurrentTime()),
                n.percent_ !== s && (n.el_.setAttribute("aria-valuenow", (s * 100).toFixed(2)),
                n.percent_ = s),
                (n.currentTime_ !== o || n.duration_ !== l) && (n.el_.setAttribute("aria-valuetext", n.localize("progress bar timing: currentTime={1} duration={2}", [Rr(o, l), Rr(l, l)], "{1} of {2}")),
                n.currentTime_ = o,
                n.duration_ = l),
                n.bar && n.bar.update(Ir(n.el()), n.getProgress())
            }),
            s
        }
    }
    ,
    r.userSeek_ = function(e) {
        this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser(),
        this.player_.currentTime(e)
    }
    ,
    r.getCurrentTime_ = function() {
        return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
    }
    ,
    r.getPercent = function() {
        var e = this.getCurrentTime_(), n, s = this.player_.liveTracker;
        return s && s.isLive() ? (n = (e - s.seekableStart()) / s.liveWindow(),
        s.atLiveEdge() && (n = 1)) : n = e / this.player_.duration(),
        n
    }
    ,
    r.handleMouseDown = function(e) {
        Dr(e) && (e.stopPropagation(),
        this.player_.scrubbing(!0),
        this.videoWasPlaying = !this.player_.paused(),
        this.player_.pause(),
        a.prototype.handleMouseDown.call(this, e))
    }
    ,
    r.handleMouseMove = function(e) {
        if (Dr(e)) {
            var n, s = this.calculateDistance(e), o = this.player_.liveTracker;
            if (!o || !o.isLive())
                n = s * this.player_.duration(),
                n === this.player_.duration() && (n = n - .1);
            else {
                if (s >= .99) {
                    o.seekToLiveEdge();
                    return
                }
                var u = o.seekableStart()
                  , l = o.liveCurrentTime();
                if (n = u + s * o.liveWindow(),
                n >= l && (n = l),
                n <= u && (n = u + .1),
                n === 1 / 0)
                    return
            }
            this.userSeek_(n)
        }
    }
    ,
    r.enable = function() {
        a.prototype.enable.call(this);
        var e = this.getChild("mouseTimeDisplay");
        e && e.show()
    }
    ,
    r.disable = function() {
        a.prototype.disable.call(this);
        var e = this.getChild("mouseTimeDisplay");
        e && e.hide()
    }
    ,
    r.handleMouseUp = function(e) {
        a.prototype.handleMouseUp.call(this, e),
        e && e.stopPropagation(),
        this.player_.scrubbing(!1),
        this.player_.trigger({
            type: "timeupdate",
            target: this,
            manuallyTriggered: !0
        }),
        this.videoWasPlaying ? wt(this.player_.play()) : this.update_()
    }
    ,
    r.stepForward = function() {
        this.userSeek_(this.player_.currentTime() + nn)
    }
    ,
    r.stepBack = function() {
        this.userSeek_(this.player_.currentTime() - nn)
    }
    ,
    r.handleAction = function(e) {
        this.player_.paused() ? this.player_.play() : this.player_.pause()
    }
    ,
    r.handleKeyDown = function(e) {
        var n = this.player_.liveTracker;
        if (Q.isEventKey(e, "Space") || Q.isEventKey(e, "Enter"))
            e.preventDefault(),
            e.stopPropagation(),
            this.handleAction(e);
        else if (Q.isEventKey(e, "Home"))
            e.preventDefault(),
            e.stopPropagation(),
            this.userSeek_(0);
        else if (Q.isEventKey(e, "End"))
            e.preventDefault(),
            e.stopPropagation(),
            n && n.isLive() ? this.userSeek_(n.liveCurrentTime()) : this.userSeek_(this.player_.duration());
        else if (/^[0-9]$/.test(Q(e))) {
            e.preventDefault(),
            e.stopPropagation();
            var s = (Q.codes[Q(e)] - Q.codes[0]) * 10 / 100;
            n && n.isLive() ? this.userSeek_(n.seekableStart() + n.liveWindow() * s) : this.userSeek_(this.player_.duration() * s)
        } else
            Q.isEventKey(e, "PgDn") ? (e.preventDefault(),
            e.stopPropagation(),
            this.userSeek_(this.player_.currentTime() - nn * Qu)) : Q.isEventKey(e, "PgUp") ? (e.preventDefault(),
            e.stopPropagation(),
            this.userSeek_(this.player_.currentTime() + nn * Qu)) : a.prototype.handleKeyDown.call(this, e)
    }
    ,
    r.dispose = function() {
        this.disableInterval_(),
        this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update),
        this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update),
        this.off(this.player_, ["playing"], this.enableIntervalHandler_),
        this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_),
        "hidden"in V && "visibilityState"in V && this.off(V, "visibilitychange", this.toggleVisibility_),
        a.prototype.dispose.call(this)
    }
    ,
    t
}(io);
ao.prototype.options_ = {
    children: ["loadProgressBar", "playProgressBar"],
    barName: "playProgressBar"
};
!Ge && !It && ao.prototype.options_.children.splice(1, 0, "mouseTimeDisplay");
U.registerComponent("SeekBar", ao);
var dc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.handleMouseMove = Pt(oe(Y(n), n.handleMouseMove), lt),
        n.throttledHandleMouseSeek = Pt(oe(Y(n), n.handleMouseSeek), lt),
        n.handleMouseUpHandler_ = function(s) {
            return n.handleMouseUp(s)
        }
        ,
        n.handleMouseDownHandler_ = function(s) {
            return n.handleMouseDown(s)
        }
        ,
        n.enable(),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    }
    ,
    r.handleMouseMove = function(e) {
        var n = this.getChild("seekBar");
        if (n) {
            var s = n.getChild("playProgressBar")
              , o = n.getChild("mouseTimeDisplay");
            if (!(!s && !o)) {
                var u = n.el()
                  , l = Ti(u)
                  , c = Kn(u, e).x;
                c = ea(c, 0, 1),
                o && o.update(l, c),
                s && s.update(l, n.getProgress())
            }
        }
    }
    ,
    r.handleMouseSeek = function(e) {
        var n = this.getChild("seekBar");
        n && n.handleMouseMove(e)
    }
    ,
    r.enabled = function() {
        return this.enabled_
    }
    ,
    r.disable = function() {
        if (this.children().forEach(function(n) {
            return n.disable && n.disable()
        }),
        !!this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_),
        this.off(this.el_, "mousemove", this.handleMouseMove),
        this.removeListenersAddedOnMousedownAndTouchstart(),
        this.addClass("disabled"),
        this.enabled_ = !1,
        this.player_.scrubbing())) {
            var e = this.getChild("seekBar");
            this.player_.scrubbing(!1),
            e.videoWasPlaying && wt(this.player_.play())
        }
    }
    ,
    r.enable = function() {
        this.children().forEach(function(e) {
            return e.enable && e.enable()
        }),
        !this.enabled() && (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_),
        this.on(this.el_, "mousemove", this.handleMouseMove),
        this.removeClass("disabled"),
        this.enabled_ = !0)
    }
    ,
    r.removeListenersAddedOnMousedownAndTouchstart = function() {
        var e = this.el_.ownerDocument;
        this.off(e, "mousemove", this.throttledHandleMouseSeek),
        this.off(e, "touchmove", this.throttledHandleMouseSeek),
        this.off(e, "mouseup", this.handleMouseUpHandler_),
        this.off(e, "touchend", this.handleMouseUpHandler_)
    }
    ,
    r.handleMouseDown = function(e) {
        var n = this.el_.ownerDocument
          , s = this.getChild("seekBar");
        s && s.handleMouseDown(e),
        this.on(n, "mousemove", this.throttledHandleMouseSeek),
        this.on(n, "touchmove", this.throttledHandleMouseSeek),
        this.on(n, "mouseup", this.handleMouseUpHandler_),
        this.on(n, "touchend", this.handleMouseUpHandler_)
    }
    ,
    r.handleMouseUp = function(e) {
        var n = this.getChild("seekBar");
        n && n.handleMouseUp(e),
        this.removeListenersAddedOnMousedownAndTouchstart()
    }
    ,
    t
}(U);
dc.prototype.options_ = {
    children: ["seekBar"]
};
U.registerComponent("ProgressControl", dc);
var cc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.on(i, ["enterpictureinpicture", "leavepictureinpicture"], function(s) {
            return n.handlePictureInPictureChange(s)
        }),
        n.on(i, ["disablepictureinpicturechanged", "loadedmetadata"], function(s) {
            return n.handlePictureInPictureEnabledChange(s)
        }),
        n.disable(),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-picture-in-picture-control " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.handlePictureInPictureEnabledChange = function() {
        V.pictureInPictureEnabled && this.player_.disablePictureInPicture() === !1 ? this.enable() : this.disable()
    }
    ,
    r.handlePictureInPictureChange = function(e) {
        this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture"),
        this.handlePictureInPictureEnabledChange()
    }
    ,
    r.handleClick = function(e) {
        this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
    }
    ,
    t
}(ut);
cc.prototype.controlText_ = "Picture-in-Picture";
U.registerComponent("PictureInPictureToggle", cc);
var fc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.on(i, "fullscreenchange", function(s) {
            return n.handleFullscreenChange(s)
        }),
        V[i.fsApi_.fullscreenEnabled] === !1 && n.disable(),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-fullscreen-control " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.handleFullscreenChange = function(e) {
        this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
    }
    ,
    r.handleClick = function(e) {
        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
    }
    ,
    t
}(ut);
fc.prototype.controlText_ = "Fullscreen";
U.registerComponent("FullscreenToggle", fc);
var Fv = function(t, r) {
    r.tech_ && !r.tech_.featuresVolumeControl && t.addClass("vjs-hidden"),
    t.on(r, "loadstart", function() {
        r.tech_.featuresVolumeControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
    })
}
  , Nv = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }
    ,
    t
}(U);
U.registerComponent("VolumeLevel", Nv);
var Uv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.update = Pt(oe(Y(n), n.update), lt),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-volume-tooltip"
        }, {
            "aria-hidden": "true"
        })
    }
    ,
    r.update = function(e, n, s, o) {
        if (!s) {
            var u = Ir(this.el_)
              , l = Ir(this.player_.el())
              , c = e.width * n;
            if (!l || !u)
                return;
            var p = e.left - l.left + c
              , g = e.width - c + (l.right - e.right)
              , y = u.width / 2;
            p < y ? y += y - p : g < y && (y = g),
            y < 0 ? y = 0 : y > u.width && (y = u.width),
            this.el_.style.right = "-" + y + "px"
        }
        this.write(o + "%")
    }
    ,
    r.write = function(e) {
        nr(this.el_, e)
    }
    ,
    r.updateVolume = function(e, n, s, o, u) {
        var l = this;
        this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", function() {
            l.update(e, n, s, o.toFixed(0)),
            u && u()
        })
    }
    ,
    t
}(U);
U.registerComponent("VolumeLevelTooltip", Uv);
var hc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.update = Pt(oe(Y(n), n.update), lt),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-mouse-display"
        })
    }
    ,
    r.update = function(e, n, s) {
        var o = this
          , u = 100 * n;
        this.getChild("volumeLevelTooltip").updateVolume(e, n, s, u, function() {
            s ? o.el_.style.bottom = e.height * n + "px" : o.el_.style.left = e.width * n + "px"
        })
    }
    ,
    t
}(U);
hc.prototype.options_ = {
    children: ["volumeLevelTooltip"]
};
U.registerComponent("MouseVolumeLevelDisplay", hc);
var ta = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.on("slideractive", function(s) {
            return n.updateLastVolume_(s)
        }),
        n.on(i, "volumechange", function(s) {
            return n.updateARIAAttributes(s)
        }),
        i.ready(function() {
            return n.updateARIAAttributes()
        }),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-volume-bar vjs-slider-bar"
        }, {
            "aria-label": this.localize("Volume Level"),
            "aria-live": "polite"
        })
    }
    ,
    r.handleMouseDown = function(e) {
        Dr(e) && a.prototype.handleMouseDown.call(this, e)
    }
    ,
    r.handleMouseMove = function(e) {
        var n = this.getChild("mouseVolumeLevelDisplay");
        if (n) {
            var s = this.el()
              , o = Ir(s)
              , u = this.vertical()
              , l = Kn(s, e);
            l = u ? l.y : l.x,
            l = ea(l, 0, 1),
            n.update(o, l, u)
        }
        Dr(e) && (this.checkMuted(),
        this.player_.volume(this.calculateDistance(e)))
    }
    ,
    r.checkMuted = function() {
        this.player_.muted() && this.player_.muted(!1)
    }
    ,
    r.getPercent = function() {
        return this.player_.muted() ? 0 : this.player_.volume()
    }
    ,
    r.stepForward = function() {
        this.checkMuted(),
        this.player_.volume(this.player_.volume() + .1)
    }
    ,
    r.stepBack = function() {
        this.checkMuted(),
        this.player_.volume(this.player_.volume() - .1)
    }
    ,
    r.updateARIAAttributes = function(e) {
        var n = this.player_.muted() ? 0 : this.volumeAsPercentage_();
        this.el_.setAttribute("aria-valuenow", n),
        this.el_.setAttribute("aria-valuetext", n + "%")
    }
    ,
    r.volumeAsPercentage_ = function() {
        return Math.round(this.player_.volume() * 100)
    }
    ,
    r.updateLastVolume_ = function() {
        var e = this
          , n = this.player_.volume();
        this.one("sliderinactive", function() {
            e.player_.volume() === 0 && e.player_.lastVolume_(n)
        })
    }
    ,
    t
}(io);
ta.prototype.options_ = {
    children: ["volumeLevel"],
    barName: "volumeLevel"
};
!Ge && !It && ta.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay");
ta.prototype.playerEvent = "volumechange";
U.registerComponent("VolumeBar", ta);
var pc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e === void 0 && (e = {}),
        e.vertical = e.vertical || !1,
        (typeof e.volumeBar > "u" || vi(e.volumeBar)) && (e.volumeBar = e.volumeBar || {},
        e.volumeBar.vertical = e.vertical),
        n = a.call(this, i, e) || this,
        Fv(Y(n), i),
        n.throttledHandleMouseMove = Pt(oe(Y(n), n.handleMouseMove), lt),
        n.handleMouseUpHandler_ = function(s) {
            return n.handleMouseUp(s)
        }
        ,
        n.on("mousedown", function(s) {
            return n.handleMouseDown(s)
        }),
        n.on("touchstart", function(s) {
            return n.handleMouseDown(s)
        }),
        n.on("mousemove", function(s) {
            return n.handleMouseMove(s)
        }),
        n.on(n.volumeBar, ["focus", "slideractive"], function() {
            n.volumeBar.addClass("vjs-slider-active"),
            n.addClass("vjs-slider-active"),
            n.trigger("slideractive")
        }),
        n.on(n.volumeBar, ["blur", "sliderinactive"], function() {
            n.volumeBar.removeClass("vjs-slider-active"),
            n.removeClass("vjs-slider-active"),
            n.trigger("sliderinactive")
        }),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = "vjs-volume-horizontal";
        return this.options_.vertical && (e = "vjs-volume-vertical"),
        a.prototype.createEl.call(this, "div", {
            className: "vjs-volume-control vjs-control " + e
        })
    }
    ,
    r.handleMouseDown = function(e) {
        var n = this.el_.ownerDocument;
        this.on(n, "mousemove", this.throttledHandleMouseMove),
        this.on(n, "touchmove", this.throttledHandleMouseMove),
        this.on(n, "mouseup", this.handleMouseUpHandler_),
        this.on(n, "touchend", this.handleMouseUpHandler_)
    }
    ,
    r.handleMouseUp = function(e) {
        var n = this.el_.ownerDocument;
        this.off(n, "mousemove", this.throttledHandleMouseMove),
        this.off(n, "touchmove", this.throttledHandleMouseMove),
        this.off(n, "mouseup", this.handleMouseUpHandler_),
        this.off(n, "touchend", this.handleMouseUpHandler_)
    }
    ,
    r.handleMouseMove = function(e) {
        this.volumeBar.handleMouseMove(e)
    }
    ,
    t
}(U);
pc.prototype.options_ = {
    children: ["volumeBar"]
};
U.registerComponent("VolumeControl", pc);
var Bv = function(t, r) {
    r.tech_ && !r.tech_.featuresMuteControl && t.addClass("vjs-hidden"),
    t.on(r, "loadstart", function() {
        r.tech_.featuresMuteControl ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden")
    })
}
  , mc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        Bv(Y(n), i),
        n.on(i, ["loadstart", "volumechange"], function(s) {
            return n.update(s)
        }),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-mute-control " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.handleClick = function(e) {
        var n = this.player_.volume()
          , s = this.player_.lastVolume_();
        if (n === 0) {
            var o = s < .1 ? .1 : s;
            this.player_.volume(o),
            this.player_.muted(!1)
        } else
            this.player_.muted(!this.player_.muted())
    }
    ,
    r.update = function(e) {
        this.updateIcon_(),
        this.updateControlText_()
    }
    ,
    r.updateIcon_ = function() {
        var e = this.player_.volume()
          , n = 3;
        Ge && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted),
        e === 0 || this.player_.muted() ? n = 0 : e < .33 ? n = 1 : e < .67 && (n = 2);
        for (var s = 0; s < 4; s++)
            Ai(this.el_, "vjs-vol-" + s);
        Et(this.el_, "vjs-vol-" + n)
    }
    ,
    r.updateControlText_ = function() {
        var e = this.player_.muted() || this.player_.volume() === 0
          , n = e ? "Unmute" : "Mute";
        this.controlText() !== n && this.controlText(n)
    }
    ,
    t
}(ut);
mc.prototype.controlText_ = "Mute";
U.registerComponent("MuteToggle", mc);
var gc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e === void 0 && (e = {}),
        typeof e.inline < "u" ? e.inline = e.inline : e.inline = !0,
        (typeof e.volumeControl > "u" || vi(e.volumeControl)) && (e.volumeControl = e.volumeControl || {},
        e.volumeControl.vertical = !e.inline),
        n = a.call(this, i, e) || this,
        n.handleKeyPressHandler_ = function(s) {
            return n.handleKeyPress(s)
        }
        ,
        n.on(i, ["loadstart"], function(s) {
            return n.volumePanelState_(s)
        }),
        n.on(n.muteToggle, "keyup", function(s) {
            return n.handleKeyPress(s)
        }),
        n.on(n.volumeControl, "keyup", function(s) {
            return n.handleVolumeControlKeyUp(s)
        }),
        n.on("keydown", function(s) {
            return n.handleKeyPress(s)
        }),
        n.on("mouseover", function(s) {
            return n.handleMouseOver(s)
        }),
        n.on("mouseout", function(s) {
            return n.handleMouseOut(s)
        }),
        n.on(n.volumeControl, ["slideractive"], n.sliderActive_),
        n.on(n.volumeControl, ["sliderinactive"], n.sliderInactive_),
        n
    }
    var r = t.prototype;
    return r.sliderActive_ = function() {
        this.addClass("vjs-slider-active")
    }
    ,
    r.sliderInactive_ = function() {
        this.removeClass("vjs-slider-active")
    }
    ,
    r.volumePanelState_ = function() {
        this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"),
        this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
    }
    ,
    r.createEl = function() {
        var e = "vjs-volume-panel-horizontal";
        return this.options_.inline || (e = "vjs-volume-panel-vertical"),
        a.prototype.createEl.call(this, "div", {
            className: "vjs-volume-panel vjs-control " + e
        })
    }
    ,
    r.dispose = function() {
        this.handleMouseOut(),
        a.prototype.dispose.call(this)
    }
    ,
    r.handleVolumeControlKeyUp = function(e) {
        Q.isEventKey(e, "Esc") && this.muteToggle.focus()
    }
    ,
    r.handleMouseOver = function(e) {
        this.addClass("vjs-hover"),
        Je(V, "keyup", this.handleKeyPressHandler_)
    }
    ,
    r.handleMouseOut = function(e) {
        this.removeClass("vjs-hover"),
        Oe(V, "keyup", this.handleKeyPressHandler_)
    }
    ,
    r.handleKeyPress = function(e) {
        Q.isEventKey(e, "Esc") && this.handleMouseOut()
    }
    ,
    t
}(U);
gc.prototype.options_ = {
    children: ["muteToggle", "volumeControl"]
};
U.registerComponent("VolumePanel", gc);
var vc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        e && (n.menuButton_ = e.menuButton),
        n.focusedChild_ = -1,
        n.on("keydown", function(s) {
            return n.handleKeyDown(s)
        }),
        n.boundHandleBlur_ = function(s) {
            return n.handleBlur(s)
        }
        ,
        n.boundHandleTapClick_ = function(s) {
            return n.handleTapClick(s)
        }
        ,
        n
    }
    var r = t.prototype;
    return r.addEventListenerForItem = function(e) {
        e instanceof U && (this.on(e, "blur", this.boundHandleBlur_),
        this.on(e, ["tap", "click"], this.boundHandleTapClick_))
    }
    ,
    r.removeEventListenerForItem = function(e) {
        e instanceof U && (this.off(e, "blur", this.boundHandleBlur_),
        this.off(e, ["tap", "click"], this.boundHandleTapClick_))
    }
    ,
    r.removeChild = function(e) {
        typeof e == "string" && (e = this.getChild(e)),
        this.removeEventListenerForItem(e),
        a.prototype.removeChild.call(this, e)
    }
    ,
    r.addItem = function(e) {
        var n = this.addChild(e);
        n && this.addEventListenerForItem(n)
    }
    ,
    r.createEl = function() {
        var e = this.options_.contentElType || "ul";
        this.contentEl_ = ve(e, {
            className: "vjs-menu-content"
        }),
        this.contentEl_.setAttribute("role", "menu");
        var n = a.prototype.createEl.call(this, "div", {
            append: this.contentEl_,
            className: "vjs-menu"
        });
        return n.appendChild(this.contentEl_),
        Je(n, "click", function(s) {
            s.preventDefault(),
            s.stopImmediatePropagation()
        }),
        n
    }
    ,
    r.dispose = function() {
        this.contentEl_ = null,
        this.boundHandleBlur_ = null,
        this.boundHandleTapClick_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.handleBlur = function(e) {
        var n = e.relatedTarget || V.activeElement;
        if (!this.children().some(function(o) {
            return o.el() === n
        })) {
            var s = this.menuButton_;
            s && s.buttonPressed_ && n !== s.el().firstChild && s.unpressButton()
        }
    }
    ,
    r.handleTapClick = function(e) {
        if (this.menuButton_) {
            this.menuButton_.unpressButton();
            var n = this.children();
            if (!Array.isArray(n))
                return;
            var s = n.filter(function(o) {
                return o.el() === e.target
            })[0];
            if (!s)
                return;
            s.name() !== "CaptionSettingsMenuItem" && this.menuButton_.focus()
        }
    }
    ,
    r.handleKeyDown = function(e) {
        Q.isEventKey(e, "Left") || Q.isEventKey(e, "Down") ? (e.preventDefault(),
        e.stopPropagation(),
        this.stepForward()) : (Q.isEventKey(e, "Right") || Q.isEventKey(e, "Up")) && (e.preventDefault(),
        e.stopPropagation(),
        this.stepBack())
    }
    ,
    r.stepForward = function() {
        var e = 0;
        this.focusedChild_ !== void 0 && (e = this.focusedChild_ + 1),
        this.focus(e)
    }
    ,
    r.stepBack = function() {
        var e = 0;
        this.focusedChild_ !== void 0 && (e = this.focusedChild_ - 1),
        this.focus(e)
    }
    ,
    r.focus = function(e) {
        e === void 0 && (e = 0);
        var n = this.children().slice()
          , s = n.length && n[0].hasClass("vjs-menu-title");
        s && n.shift(),
        n.length > 0 && (e < 0 ? e = 0 : e >= n.length && (e = n.length - 1),
        this.focusedChild_ = e,
        n[e].el_.focus())
    }
    ,
    t
}(U);
U.registerComponent("Menu", vc);
var so = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        e === void 0 && (e = {}),
        n = a.call(this, i, e) || this,
        n.menuButton_ = new ut(i,e),
        n.menuButton_.controlText(n.controlText_),
        n.menuButton_.el_.setAttribute("aria-haspopup", "true");
        var s = ut.prototype.buildCSSClass();
        n.menuButton_.el_.className = n.buildCSSClass() + " " + s,
        n.menuButton_.removeClass("vjs-control"),
        n.addChild(n.menuButton_),
        n.update(),
        n.enabled_ = !0;
        var o = function(l) {
            return n.handleClick(l)
        };
        return n.handleMenuKeyUp_ = function(u) {
            return n.handleMenuKeyUp(u)
        }
        ,
        n.on(n.menuButton_, "tap", o),
        n.on(n.menuButton_, "click", o),
        n.on(n.menuButton_, "keydown", function(u) {
            return n.handleKeyDown(u)
        }),
        n.on(n.menuButton_, "mouseenter", function() {
            n.addClass("vjs-hover"),
            n.menu.show(),
            Je(V, "keyup", n.handleMenuKeyUp_)
        }),
        n.on("mouseleave", function(u) {
            return n.handleMouseLeave(u)
        }),
        n.on("keydown", function(u) {
            return n.handleSubmenuKeyDown(u)
        }),
        n
    }
    var r = t.prototype;
    return r.update = function() {
        var e = this.createMenu();
        this.menu && (this.menu.dispose(),
        this.removeChild(this.menu)),
        this.menu = e,
        this.addChild(e),
        this.buttonPressed_ = !1,
        this.menuButton_.el_.setAttribute("aria-expanded", "false"),
        this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
    }
    ,
    r.createMenu = function() {
        var e = new vc(this.player_,{
            menuButton: this
        });
        if (this.hideThreshold_ = 0,
        this.options_.title) {
            var n = ve("li", {
                className: "vjs-menu-title",
                innerHTML: Te(this.options_.title),
                tabIndex: -1
            })
              , s = new U(this.player_,{
                el: n
            });
            e.addItem(s)
        }
        if (this.items = this.createItems(),
        this.items)
            for (var o = 0; o < this.items.length; o++)
                e.addItem(this.items[o]);
        return e
    }
    ,
    r.createItems = function() {}
    ,
    r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: this.buildWrapperCSSClass()
        }, {})
    }
    ,
    r.buildWrapperCSSClass = function() {
        var e = "vjs-menu-button";
        this.options_.inline === !0 ? e += "-inline" : e += "-popup";
        var n = ut.prototype.buildCSSClass();
        return "vjs-menu-button " + e + " " + n + " " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildCSSClass = function() {
        var e = "vjs-menu-button";
        return this.options_.inline === !0 ? e += "-inline" : e += "-popup",
        "vjs-menu-button " + e + " " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.controlText = function(e, n) {
        return n === void 0 && (n = this.menuButton_.el()),
        this.menuButton_.controlText(e, n)
    }
    ,
    r.dispose = function() {
        this.handleMouseLeave(),
        a.prototype.dispose.call(this)
    }
    ,
    r.handleClick = function(e) {
        this.buttonPressed_ ? this.unpressButton() : this.pressButton()
    }
    ,
    r.handleMouseLeave = function(e) {
        this.removeClass("vjs-hover"),
        Oe(V, "keyup", this.handleMenuKeyUp_)
    }
    ,
    r.focus = function() {
        this.menuButton_.focus()
    }
    ,
    r.blur = function() {
        this.menuButton_.blur()
    }
    ,
    r.handleKeyDown = function(e) {
        Q.isEventKey(e, "Esc") || Q.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(),
        Q.isEventKey(e, "Tab") || (e.preventDefault(),
        this.menuButton_.focus())) : (Q.isEventKey(e, "Up") || Q.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(),
        this.pressButton()))
    }
    ,
    r.handleMenuKeyUp = function(e) {
        (Q.isEventKey(e, "Esc") || Q.isEventKey(e, "Tab")) && this.removeClass("vjs-hover")
    }
    ,
    r.handleSubmenuKeyPress = function(e) {
        this.handleSubmenuKeyDown(e)
    }
    ,
    r.handleSubmenuKeyDown = function(e) {
        (Q.isEventKey(e, "Esc") || Q.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(),
        Q.isEventKey(e, "Tab") || (e.preventDefault(),
        this.menuButton_.focus()))
    }
    ,
    r.pressButton = function() {
        if (this.enabled_) {
            if (this.buttonPressed_ = !0,
            this.menu.show(),
            this.menu.lockShowing(),
            this.menuButton_.el_.setAttribute("aria-expanded", "true"),
            Ge && Od())
                return;
            this.menu.focus()
        }
    }
    ,
    r.unpressButton = function() {
        this.enabled_ && (this.buttonPressed_ = !1,
        this.menu.unlockShowing(),
        this.menu.hide(),
        this.menuButton_.el_.setAttribute("aria-expanded", "false"))
    }
    ,
    r.disable = function() {
        this.unpressButton(),
        this.enabled_ = !1,
        this.addClass("vjs-disabled"),
        this.menuButton_.disable()
    }
    ,
    r.enable = function() {
        this.enabled_ = !0,
        this.removeClass("vjs-disabled"),
        this.menuButton_.enable()
    }
    ,
    t
}(U);
U.registerComponent("MenuButton", so);
var oo = function(a) {
    G(t, a);
    function t(r, i) {
        var e, n = i.tracks;
        if (e = a.call(this, r, i) || this,
        e.items.length <= 1 && e.hide(),
        !n)
            return Y(e);
        var s = oe(Y(e), e.update);
        return n.addEventListener("removetrack", s),
        n.addEventListener("addtrack", s),
        n.addEventListener("labelchange", s),
        e.player_.on("ready", s),
        e.player_.on("dispose", function() {
            n.removeEventListener("removetrack", s),
            n.removeEventListener("addtrack", s),
            n.removeEventListener("labelchange", s)
        }),
        e
    }
    return t
}(so);
U.registerComponent("TrackButton", oo);
var Hv = ["Tab", "Esc", "Up", "Down", "Right", "Left"]
  , Ii = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.selectable = e.selectable,
        n.isSelected_ = e.selected || !1,
        n.multiSelectable = e.multiSelectable,
        n.selected(n.isSelected_),
        n.selectable ? n.multiSelectable ? n.el_.setAttribute("role", "menuitemcheckbox") : n.el_.setAttribute("role", "menuitemradio") : n.el_.setAttribute("role", "menuitem"),
        n
    }
    var r = t.prototype;
    return r.createEl = function(e, n, s) {
        return this.nonIconControl = !0,
        a.prototype.createEl.call(this, "li", pe({
            className: "vjs-menu-item",
            innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
            tabIndex: -1
        }, n), s)
    }
    ,
    r.handleKeyDown = function(e) {
        Hv.some(function(n) {
            return Q.isEventKey(e, n)
        }) || a.prototype.handleKeyDown.call(this, e)
    }
    ,
    r.handleClick = function(e) {
        this.selected(!0)
    }
    ,
    r.selected = function(e) {
        this.selectable && (e ? (this.addClass("vjs-selected"),
        this.el_.setAttribute("aria-checked", "true"),
        this.controlText(", selected"),
        this.isSelected_ = !0) : (this.removeClass("vjs-selected"),
        this.el_.setAttribute("aria-checked", "false"),
        this.controlText(""),
        this.isSelected_ = !1))
    }
    ,
    t
}(Zn);
U.registerComponent("MenuItem", Ii);
var Di = function(a) {
    G(t, a);
    function t(i, e) {
        var n, s = e.track, o = i.textTracks();
        e.label = s.label || s.language || "Unknown",
        e.selected = s.mode === "showing",
        n = a.call(this, i, e) || this,
        n.track = s,
        n.kinds = (e.kinds || [e.kind || n.track.kind]).filter(Boolean);
        var u = function() {
            for (var g = arguments.length, y = new Array(g), S = 0; S < g; S++)
                y[S] = arguments[S];
            n.handleTracksChange.apply(Y(n), y)
        }
          , l = function() {
            for (var g = arguments.length, y = new Array(g), S = 0; S < g; S++)
                y[S] = arguments[S];
            n.handleSelectedLanguageChange.apply(Y(n), y)
        };
        if (i.on(["loadstart", "texttrackchange"], u),
        o.addEventListener("change", u),
        o.addEventListener("selectedlanguagechange", l),
        n.on("dispose", function() {
            i.off(["loadstart", "texttrackchange"], u),
            o.removeEventListener("change", u),
            o.removeEventListener("selectedlanguagechange", l)
        }),
        o.onchange === void 0) {
            var c;
            n.on(["tap", "click"], function() {
                if (typeof A.Event != "object")
                    try {
                        c = new A.Event("change")
                    } catch {}
                c || (c = V.createEvent("Event"),
                c.initEvent("change", !0, !0)),
                o.dispatchEvent(c)
            })
        }
        return n.handleTracksChange(),
        n
    }
    var r = t.prototype;
    return r.handleClick = function(e) {
        var n = this.track
          , s = this.player_.textTracks();
        if (a.prototype.handleClick.call(this, e),
        !!s)
            for (var o = 0; o < s.length; o++) {
                var u = s[o];
                this.kinds.indexOf(u.kind) !== -1 && (u === n ? u.mode !== "showing" && (u.mode = "showing") : u.mode !== "disabled" && (u.mode = "disabled"))
            }
    }
    ,
    r.handleTracksChange = function(e) {
        var n = this.track.mode === "showing";
        n !== this.isSelected_ && this.selected(n)
    }
    ,
    r.handleSelectedLanguageChange = function(e) {
        if (this.track.mode === "showing") {
            var n = this.player_.cache_.selectedLanguage;
            if (n && n.enabled && n.language === this.track.language && n.kind !== this.track.kind)
                return;
            this.player_.cache_.selectedLanguage = {
                enabled: !0,
                language: this.track.language,
                kind: this.track.kind
            }
        }
    }
    ,
    r.dispose = function() {
        this.track = null,
        a.prototype.dispose.call(this)
    }
    ,
    t
}(Ii);
U.registerComponent("TextTrackMenuItem", Di);
var _c = function(a) {
    G(t, a);
    function t(i, e) {
        return e.track = {
            player: i,
            kind: e.kind,
            kinds: e.kinds,
            default: !1,
            mode: "disabled"
        },
        e.kinds || (e.kinds = [e.kind]),
        e.label ? e.track.label = e.label : e.track.label = e.kinds.join(" and ") + " off",
        e.selectable = !0,
        e.multiSelectable = !1,
        a.call(this, i, e) || this
    }
    var r = t.prototype;
    return r.handleTracksChange = function(e) {
        for (var n = this.player().textTracks(), s = !0, o = 0, u = n.length; o < u; o++) {
            var l = n[o];
            if (this.options_.kinds.indexOf(l.kind) > -1 && l.mode === "showing") {
                s = !1;
                break
            }
        }
        s !== this.isSelected_ && this.selected(s)
    }
    ,
    r.handleSelectedLanguageChange = function(e) {
        for (var n = this.player().textTracks(), s = !0, o = 0, u = n.length; o < u; o++) {
            var l = n[o];
            if (["captions", "descriptions", "subtitles"].indexOf(l.kind) > -1 && l.mode === "showing") {
                s = !1;
                break
            }
        }
        s && (this.player_.cache_.selectedLanguage = {
            enabled: !1
        })
    }
    ,
    t
}(Di);
U.registerComponent("OffTextTrackMenuItem", _c);
var Vr = function(a) {
    G(t, a);
    function t(i, e) {
        return e === void 0 && (e = {}),
        e.tracks = i.textTracks(),
        a.call(this, i, e) || this
    }
    var r = t.prototype;
    return r.createItems = function(e, n) {
        e === void 0 && (e = []),
        n === void 0 && (n = Di);
        var s;
        this.label_ && (s = this.label_ + " off"),
        e.push(new _c(this.player_,{
            kinds: this.kinds_,
            kind: this.kind_,
            label: s
        })),
        this.hideThreshold_ += 1;
        var o = this.player_.textTracks();
        Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
        for (var u = 0; u < o.length; u++) {
            var l = o[u];
            if (this.kinds_.indexOf(l.kind) > -1) {
                var c = new n(this.player_,{
                    track: l,
                    kinds: this.kinds_,
                    kind: this.kind_,
                    selectable: !0,
                    multiSelectable: !1
                });
                c.addClass("vjs-" + l.kind + "-menu-item"),
                e.push(c)
            }
        }
        return e
    }
    ,
    t
}(oo);
U.registerComponent("TextTrackButton", Vr);
var yc = function(a) {
    G(t, a);
    function t(i, e) {
        var n, s = e.track, o = e.cue, u = i.currentTime();
        return e.selectable = !0,
        e.multiSelectable = !1,
        e.label = o.text,
        e.selected = o.startTime <= u && u < o.endTime,
        n = a.call(this, i, e) || this,
        n.track = s,
        n.cue = o,
        s.addEventListener("cuechange", oe(Y(n), n.update)),
        n
    }
    var r = t.prototype;
    return r.handleClick = function(e) {
        a.prototype.handleClick.call(this),
        this.player_.currentTime(this.cue.startTime),
        this.update(this.cue.startTime)
    }
    ,
    r.update = function(e) {
        var n = this.cue
          , s = this.player_.currentTime();
        this.selected(n.startTime <= s && s < n.endTime)
    }
    ,
    t
}(Ii);
U.registerComponent("ChaptersTrackMenuItem", yc);
var uo = function(a) {
    G(t, a);
    function t(i, e, n) {
        return a.call(this, i, e, n) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-chapters-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-chapters-button " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    r.update = function(e) {
        (!this.track_ || e && (e.type === "addtrack" || e.type === "removetrack")) && this.setTrack(this.findChaptersTrack()),
        a.prototype.update.call(this)
    }
    ,
    r.setTrack = function(e) {
        if (this.track_ !== e) {
            if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)),
            this.track_) {
                var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                n && n.removeEventListener("load", this.updateHandler_),
                this.track_ = null
            }
            if (this.track_ = e,
            this.track_) {
                this.track_.mode = "hidden";
                var s = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                s && s.addEventListener("load", this.updateHandler_)
            }
        }
    }
    ,
    r.findChaptersTrack = function() {
        for (var e = this.player_.textTracks() || [], n = e.length - 1; n >= 0; n--) {
            var s = e[n];
            if (s.kind === this.kind_)
                return s
        }
    }
    ,
    r.getMenuCaption = function() {
        return this.track_ && this.track_.label ? this.track_.label : this.localize(Te(this.kind_))
    }
    ,
    r.createMenu = function() {
        return this.options_.title = this.getMenuCaption(),
        a.prototype.createMenu.call(this)
    }
    ,
    r.createItems = function() {
        var e = [];
        if (!this.track_)
            return e;
        var n = this.track_.cues;
        if (!n)
            return e;
        for (var s = 0, o = n.length; s < o; s++) {
            var u = n[s]
              , l = new yc(this.player_,{
                track: this.track_,
                cue: u
            });
            e.push(l)
        }
        return e
    }
    ,
    t
}(Vr);
uo.prototype.kind_ = "chapters";
uo.prototype.controlText_ = "Chapters";
U.registerComponent("ChaptersButton", uo);
var lo = function(a) {
    G(t, a);
    function t(i, e, n) {
        var s;
        s = a.call(this, i, e, n) || this;
        var o = i.textTracks()
          , u = oe(Y(s), s.handleTracksChange);
        return o.addEventListener("change", u),
        s.on("dispose", function() {
            o.removeEventListener("change", u)
        }),
        s
    }
    var r = t.prototype;
    return r.handleTracksChange = function(e) {
        for (var n = this.player().textTracks(), s = !1, o = 0, u = n.length; o < u; o++) {
            var l = n[o];
            if (l.kind !== this.kind_ && l.mode === "showing") {
                s = !0;
                break
            }
        }
        s ? this.disable() : this.enable()
    }
    ,
    r.buildCSSClass = function() {
        return "vjs-descriptions-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-descriptions-button " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    t
}(Vr);
lo.prototype.kind_ = "descriptions";
lo.prototype.controlText_ = "Descriptions";
U.registerComponent("DescriptionsButton", lo);
var co = function(a) {
    G(t, a);
    function t(i, e, n) {
        return a.call(this, i, e, n) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-subtitles-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-subtitles-button " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    t
}(Vr);
co.prototype.kind_ = "subtitles";
co.prototype.controlText_ = "Subtitles";
U.registerComponent("SubtitlesButton", co);
var fo = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e.track = {
            player: i,
            kind: e.kind,
            label: e.kind + " settings",
            selectable: !1,
            default: !1,
            mode: "disabled"
        },
        e.selectable = !1,
        e.name = "CaptionSettingsMenuItem",
        n = a.call(this, i, e) || this,
        n.addClass("vjs-texttrack-settings"),
        n.controlText(", opens " + e.kind + " settings dialog"),
        n
    }
    var r = t.prototype;
    return r.handleClick = function(e) {
        this.player().getChild("textTrackSettings").open()
    }
    ,
    t
}(Di);
U.registerComponent("CaptionSettingsMenuItem", fo);
var ho = function(a) {
    G(t, a);
    function t(i, e, n) {
        return a.call(this, i, e, n) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-captions-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-captions-button " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    r.createItems = function() {
        var e = [];
        return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild("textTrackSettings") && (e.push(new fo(this.player_,{
            kind: this.kind_
        })),
        this.hideThreshold_ += 1),
        a.prototype.createItems.call(this, e)
    }
    ,
    t
}(Vr);
ho.prototype.kind_ = "captions";
ho.prototype.controlText_ = "Captions";
U.registerComponent("CaptionsButton", ho);
var Tc = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.createEl = function(e, n, s) {
        var o = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
        this.options_.track.kind === "captions" && (o += `
        <span aria-hidden="true" class="vjs-icon-placeholder"></span>
        <span class="vjs-control-text"> ` + this.localize("Captions") + `</span>
      `),
        o += "</span>";
        var u = a.prototype.createEl.call(this, e, pe({
            innerHTML: o
        }, n), s);
        return u
    }
    ,
    t
}(Di);
U.registerComponent("SubsCapsMenuItem", Tc);
var po = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e === void 0 && (e = {}),
        n = a.call(this, i, e) || this,
        n.label_ = "subtitles",
        ["en", "en-us", "en-ca", "fr-ca"].indexOf(n.player_.language_) > -1 && (n.label_ = "captions"),
        n.menuButton_.controlText(Te(n.label_)),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-subs-caps-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-subs-caps-button " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    r.createItems = function() {
        var e = [];
        return !(this.player().tech_ && this.player().tech_.featuresNativeTextTracks) && this.player().getChild("textTrackSettings") && (e.push(new fo(this.player_,{
            kind: this.label_
        })),
        this.hideThreshold_ += 1),
        e = a.prototype.createItems.call(this, e, Tc),
        e
    }
    ,
    t
}(Vr);
po.prototype.kinds_ = ["captions", "subtitles"];
po.prototype.controlText_ = "Subtitles";
U.registerComponent("SubsCapsButton", po);
var bc = function(a) {
    G(t, a);
    function t(i, e) {
        var n, s = e.track, o = i.audioTracks();
        e.label = s.label || s.language || "Unknown",
        e.selected = s.enabled,
        n = a.call(this, i, e) || this,
        n.track = s,
        n.addClass("vjs-" + s.kind + "-menu-item");
        var u = function() {
            for (var c = arguments.length, p = new Array(c), g = 0; g < c; g++)
                p[g] = arguments[g];
            n.handleTracksChange.apply(Y(n), p)
        };
        return o.addEventListener("change", u),
        n.on("dispose", function() {
            o.removeEventListener("change", u)
        }),
        n
    }
    var r = t.prototype;
    return r.createEl = function(e, n, s) {
        var o = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
        this.options_.track.kind === "main-desc" && (o += `
        <span aria-hidden="true" class="vjs-icon-placeholder"></span>
        <span class="vjs-control-text"> ` + this.localize("Descriptions") + `</span>
      `),
        o += "</span>";
        var u = a.prototype.createEl.call(this, e, pe({
            innerHTML: o
        }, n), s);
        return u
    }
    ,
    r.handleClick = function(e) {
        a.prototype.handleClick.call(this, e),
        this.track.enabled = !0
    }
    ,
    r.handleTracksChange = function(e) {
        this.selected(this.track.enabled)
    }
    ,
    t
}(Ii);
U.registerComponent("AudioTrackMenuItem", bc);
var xc = function(a) {
    G(t, a);
    function t(i, e) {
        return e === void 0 && (e = {}),
        e.tracks = i.audioTracks(),
        a.call(this, i, e) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-audio-button " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-audio-button " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    r.createItems = function(e) {
        e === void 0 && (e = []),
        this.hideThreshold_ = 1;
        for (var n = this.player_.audioTracks(), s = 0; s < n.length; s++) {
            var o = n[s];
            e.push(new bc(this.player_,{
                track: o,
                selectable: !0,
                multiSelectable: !1
            }))
        }
        return e
    }
    ,
    t
}(oo);
xc.prototype.controlText_ = "Audio Track";
U.registerComponent("AudioTrackButton", xc);
var mo = function(a) {
    G(t, a);
    function t(i, e) {
        var n, s = e.rate, o = parseFloat(s, 10);
        return e.label = s,
        e.selected = o === i.playbackRate(),
        e.selectable = !0,
        e.multiSelectable = !1,
        n = a.call(this, i, e) || this,
        n.label = s,
        n.rate = o,
        n.on(i, "ratechange", function(u) {
            return n.update(u)
        }),
        n
    }
    var r = t.prototype;
    return r.handleClick = function(e) {
        a.prototype.handleClick.call(this),
        this.player().playbackRate(this.rate)
    }
    ,
    r.update = function(e) {
        this.selected(this.player().playbackRate() === this.rate)
    }
    ,
    t
}(Ii);
mo.prototype.contentElType = "button";
U.registerComponent("PlaybackRateMenuItem", mo);
var Sc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.menuButton_.el_.setAttribute("aria-describedby", n.labelElId_),
        n.updateVisibility(),
        n.updateLabel(),
        n.on(i, "loadstart", function(s) {
            return n.updateVisibility(s)
        }),
        n.on(i, "ratechange", function(s) {
            return n.updateLabel(s)
        }),
        n.on(i, "playbackrateschange", function(s) {
            return n.handlePlaybackRateschange(s)
        }),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        var e = a.prototype.createEl.call(this);
        return this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_,
        this.labelEl_ = ve("div", {
            className: "vjs-playback-rate-value",
            id: this.labelElId_,
            innerHTML: "1x"
        }),
        e.appendChild(this.labelEl_),
        e
    }
    ,
    r.dispose = function() {
        this.labelEl_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.buildCSSClass = function() {
        return "vjs-playback-rate " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.buildWrapperCSSClass = function() {
        return "vjs-playback-rate " + a.prototype.buildWrapperCSSClass.call(this)
    }
    ,
    r.createItems = function() {
        for (var e = this.playbackRates(), n = [], s = e.length - 1; s >= 0; s--)
            n.push(new mo(this.player(),{
                rate: e[s] + "x"
            }));
        return n
    }
    ,
    r.updateARIAAttributes = function() {
        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
    }
    ,
    r.handleClick = function(e) {
        for (var n = this.player().playbackRate(), s = this.playbackRates(), o = s[0], u = 0; u < s.length; u++)
            if (s[u] > n) {
                o = s[u];
                break
            }
        this.player().playbackRate(o)
    }
    ,
    r.handlePlaybackRateschange = function(e) {
        this.update()
    }
    ,
    r.playbackRates = function() {
        var e = this.player();
        return e.playbackRates && e.playbackRates() || []
    }
    ,
    r.playbackRateSupported = function() {
        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
    }
    ,
    r.updateVisibility = function(e) {
        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
    }
    ,
    r.updateLabel = function(e) {
        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
    }
    ,
    t
}(so);
Sc.prototype.controlText_ = "Playback Rate";
U.registerComponent("PlaybackRateMenuButton", Sc);
var Ec = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-spacer " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: this.buildCSSClass()
        })
    }
    ,
    t
}(U);
U.registerComponent("Spacer", Ec);
var jv = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-custom-control-spacer " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.createEl = function() {
        var e = a.prototype.createEl.call(this, {
            className: this.buildCSSClass()
        });
        return e.innerHTML = " ",
        e
    }
    ,
    t
}(Ec);
U.registerComponent("CustomControlSpacer", jv);
var Cn = function(a) {
    G(t, a);
    function t() {
        return a.apply(this, arguments) || this
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "div", {
            className: "vjs-control-bar",
            dir: "ltr"
        })
    }
    ,
    t
}(U);
Cn.prototype.options_ = {
    children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]
};
"exitPictureInPicture"in V && Cn.prototype.options_.children.splice(Cn.prototype.options_.children.length - 1, 0, "pictureInPictureToggle");
U.registerComponent("ControlBar", Cn);
var Cc = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return n = a.call(this, i, e) || this,
        n.on(i, "error", function(s) {
            return n.open(s)
        }),
        n
    }
    var r = t.prototype;
    return r.buildCSSClass = function() {
        return "vjs-error-display " + a.prototype.buildCSSClass.call(this)
    }
    ,
    r.content = function() {
        var e = this.player().error();
        return e ? this.localize(e.message) : ""
    }
    ,
    t
}(Br);
Cc.prototype.options_ = rt({}, Br.prototype.options_, {
    pauseOnOpen: !1,
    fillAlways: !0,
    temporary: !1,
    uncloseable: !0
});
U.registerComponent("ErrorDisplay", Cc);
var Na = "vjs-text-track-settings"
  , Ju = ["#000", "Black"]
  , Zu = ["#00F", "Blue"]
  , el = ["#0FF", "Cyan"]
  , tl = ["#0F0", "Green"]
  , rl = ["#F0F", "Magenta"]
  , il = ["#F00", "Red"]
  , nl = ["#FFF", "White"]
  , al = ["#FF0", "Yellow"]
  , Ua = ["1", "Opaque"]
  , Ba = ["0.5", "Semi-Transparent"]
  , sl = ["0", "Transparent"]
  , Xt = {
    backgroundColor: {
        selector: ".vjs-bg-color > select",
        id: "captions-background-color-%s",
        label: "Color",
        options: [Ju, nl, il, tl, Zu, al, rl, el]
    },
    backgroundOpacity: {
        selector: ".vjs-bg-opacity > select",
        id: "captions-background-opacity-%s",
        label: "Transparency",
        options: [Ua, Ba, sl]
    },
    color: {
        selector: ".vjs-fg-color > select",
        id: "captions-foreground-color-%s",
        label: "Color",
        options: [nl, Ju, il, tl, Zu, al, rl, el]
    },
    edgeStyle: {
        selector: ".vjs-edge-style > select",
        id: "%s",
        label: "Text Edge Style",
        options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
    },
    fontFamily: {
        selector: ".vjs-font-family > select",
        id: "captions-font-family-%s",
        label: "Font Family",
        options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
    },
    fontPercent: {
        selector: ".vjs-font-percent > select",
        id: "captions-font-size-%s",
        label: "Font Size",
        options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
        default: 2,
        parser: function(t) {
            return t === "1.00" ? null : Number(t)
        }
    },
    textOpacity: {
        selector: ".vjs-text-opacity > select",
        id: "captions-foreground-opacity-%s",
        label: "Transparency",
        options: [Ua, Ba]
    },
    windowColor: {
        selector: ".vjs-window-color > select",
        id: "captions-window-color-%s",
        label: "Color"
    },
    windowOpacity: {
        selector: ".vjs-window-opacity > select",
        id: "captions-window-opacity-%s",
        label: "Transparency",
        options: [sl, Ba, Ua]
    }
};
Xt.windowColor.options = Xt.backgroundColor.options;
function wc(a, t) {
    if (t && (a = t(a)),
    a && a !== "none")
        return a
}
function Vv(a, t) {
    var r = a.options[a.options.selectedIndex].value;
    return wc(r, t)
}
function Wv(a, t, r) {
    if (t) {
        for (var i = 0; i < a.options.length; i++)
            if (wc(a.options[i].value, r) === t) {
                a.selectedIndex = i;
                break
            }
    }
}
var Gv = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e.temporary = !1,
        n = a.call(this, i, e) || this,
        n.updateDisplay = n.updateDisplay.bind(Y(n)),
        n.fill(),
        n.hasBeenOpened_ = n.hasBeenFilled_ = !0,
        n.endDialog = ve("p", {
            className: "vjs-control-text",
            textContent: n.localize("End of dialog window.")
        }),
        n.el().appendChild(n.endDialog),
        n.setDefaults(),
        e.persistTextTrackSettings === void 0 && (n.options_.persistTextTrackSettings = n.options_.playerOptions.persistTextTrackSettings),
        n.on(n.$(".vjs-done-button"), "click", function() {
            n.saveSettings(),
            n.close()
        }),
        n.on(n.$(".vjs-default-button"), "click", function() {
            n.setDefaults(),
            n.updateDisplay()
        }),
        br(Xt, function(s) {
            n.on(n.$(s.selector), "change", n.updateDisplay)
        }),
        n.options_.persistTextTrackSettings && n.restoreSettings(),
        n
    }
    var r = t.prototype;
    return r.dispose = function() {
        this.endDialog = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.createElSelect_ = function(e, n, s) {
        var o = this;
        n === void 0 && (n = ""),
        s === void 0 && (s = "label");
        var u = Xt[e]
          , l = u.id.replace("%s", this.id_)
          , c = [n, l].join(" ").trim();
        return ["<" + s + ' id="' + l + '" class="' + (s === "label" ? "vjs-label" : "") + '">', this.localize(u.label), "</" + s + ">", '<select aria-labelledby="' + c + '">'].concat(u.options.map(function(p) {
            var g = l + "-" + p[1].replace(/\W+/g, "");
            return ['<option id="' + g + '" value="' + p[0] + '" ', 'aria-labelledby="' + c + " " + g + '">', o.localize(p[1]), "</option>"].join("")
        })).concat("</select>").join("")
    }
    ,
    r.createElFgColor_ = function() {
        var e = "captions-text-legend-" + this.id_;
        return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
    }
    ,
    r.createElBgColor_ = function() {
        var e = "captions-background-" + this.id_;
        return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
    }
    ,
    r.createElWinColor_ = function() {
        var e = "captions-window-" + this.id_;
        return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
    }
    ,
    r.createElColors_ = function() {
        return ve("div", {
            className: "vjs-track-settings-colors",
            innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
        })
    }
    ,
    r.createElFont_ = function() {
        return ve("div", {
            className: "vjs-track-settings-font",
            innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
        })
    }
    ,
    r.createElControls_ = function() {
        var e = this.localize("restore all settings to the default values");
        return ve("div", {
            className: "vjs-track-settings-controls",
            innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
        })
    }
    ,
    r.content = function() {
        return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
    }
    ,
    r.label = function() {
        return this.localize("Caption Settings Dialog")
    }
    ,
    r.description = function() {
        return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
    }
    ,
    r.buildCSSClass = function() {
        return a.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
    }
    ,
    r.getValues = function() {
        var e = this;
        return Og(Xt, function(n, s, o) {
            var u = Vv(e.$(s.selector), s.parser);
            return u !== void 0 && (n[o] = u),
            n
        }, {})
    }
    ,
    r.setValues = function(e) {
        var n = this;
        br(Xt, function(s, o) {
            Wv(n.$(s.selector), e[o], s.parser)
        })
    }
    ,
    r.setDefaults = function() {
        var e = this;
        br(Xt, function(n) {
            var s = n.hasOwnProperty("default") ? n.default : 0;
            e.$(n.selector).selectedIndex = s
        })
    }
    ,
    r.restoreSettings = function() {
        var e;
        try {
            e = JSON.parse(A.localStorage.getItem(Na))
        } catch (n) {
            Z.warn(n)
        }
        e && this.setValues(e)
    }
    ,
    r.saveSettings = function() {
        if (this.options_.persistTextTrackSettings) {
            var e = this.getValues();
            try {
                Object.keys(e).length ? A.localStorage.setItem(Na, JSON.stringify(e)) : A.localStorage.removeItem(Na)
            } catch (n) {
                Z.warn(n)
            }
        }
    }
    ,
    r.updateDisplay = function() {
        var e = this.player_.getChild("textTrackDisplay");
        e && e.updateDisplay()
    }
    ,
    r.conditionalBlur_ = function() {
        this.previouslyActiveEl_ = null;
        var e = this.player_.controlBar
          , n = e && e.subsCapsButton
          , s = e && e.captionsButton;
        n ? n.focus() : s && s.focus()
    }
    ,
    t
}(Br);
U.registerComponent("TextTrackSettings", Gv);
var qv = function(a) {
    G(t, a);
    function t(i, e) {
        var n, s = e.ResizeObserver || A.ResizeObserver;
        e.ResizeObserver === null && (s = !1);
        var o = fe({
            createEl: !s,
            reportTouchActivity: !1
        }, e);
        return n = a.call(this, i, o) || this,
        n.ResizeObserver = e.ResizeObserver || A.ResizeObserver,
        n.loadListener_ = null,
        n.resizeObserver_ = null,
        n.debouncedHandler_ = Wg(function() {
            n.resizeHandler()
        }, 100, !1, Y(n)),
        s ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_),
        n.resizeObserver_.observe(i.el())) : (n.loadListener_ = function() {
            if (!(!n.el_ || !n.el_.contentWindow)) {
                var u = n.debouncedHandler_
                  , l = n.unloadListener_ = function() {
                    Oe(this, "resize", u),
                    Oe(this, "unload", l),
                    l = null
                }
                ;
                Je(n.el_.contentWindow, "unload", l),
                Je(n.el_.contentWindow, "resize", u)
            }
        }
        ,
        n.one("load", n.loadListener_)),
        n
    }
    var r = t.prototype;
    return r.createEl = function() {
        return a.prototype.createEl.call(this, "iframe", {
            className: "vjs-resize-manager",
            tabIndex: -1
        }, {
            "aria-hidden": "true"
        })
    }
    ,
    r.resizeHandler = function() {
        !this.player_ || !this.player_.trigger || this.player_.trigger("playerresize")
    }
    ,
    r.dispose = function() {
        this.debouncedHandler_ && this.debouncedHandler_.cancel(),
        this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()),
        this.resizeObserver_.disconnect()),
        this.loadListener_ && this.off("load", this.loadListener_),
        this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow),
        this.ResizeObserver = null,
        this.resizeObserver = null,
        this.debouncedHandler_ = null,
        this.loadListener_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    t
}(U);
U.registerComponent("ResizeManager", qv);
var zv = {
    trackingThreshold: 30,
    liveTolerance: 15
}
  , $v = function(a) {
    G(t, a);
    function t(i, e) {
        var n, s = fe(zv, e, {
            createEl: !1
        });
        return n = a.call(this, i, s) || this,
        n.handleVisibilityChange_ = function(o) {
            return n.handleVisibilityChange(o)
        }
        ,
        n.trackLiveHandler_ = function() {
            return n.trackLive_()
        }
        ,
        n.handlePlay_ = function(o) {
            return n.handlePlay(o)
        }
        ,
        n.handleFirstTimeupdate_ = function(o) {
            return n.handleFirstTimeupdate(o)
        }
        ,
        n.handleSeeked_ = function(o) {
            return n.handleSeeked(o)
        }
        ,
        n.seekToLiveEdge_ = function(o) {
            return n.seekToLiveEdge(o)
        }
        ,
        n.reset_(),
        n.on(n.player_, "durationchange", function(o) {
            return n.handleDurationchange(o)
        }),
        n.one(n.player_, "canplay", function() {
            return n.toggleTracking()
        }),
        ki && "hidden"in V && "visibilityState"in V && n.on(V, "visibilitychange", n.handleVisibilityChange_),
        n
    }
    var r = t.prototype;
    return r.handleVisibilityChange = function() {
        this.player_.duration() === 1 / 0 && (V.hidden ? this.stopTracking() : this.startTracking())
    }
    ,
    r.trackLive_ = function() {
        var e = this.player_.seekable();
        if (!(!e || !e.length)) {
            var n = Number(A.performance.now().toFixed(4))
              , s = this.lastTime_ === -1 ? 0 : (n - this.lastTime_) / 1e3;
            this.lastTime_ = n,
            this.pastSeekEnd_ = this.pastSeekEnd() + s;
            var o = this.liveCurrentTime()
              , u = this.player_.currentTime()
              , l = this.player_.paused() || this.seekedBehindLive_ || Math.abs(o - u) > this.options_.liveTolerance;
            (!this.timeupdateSeen_ || o === 1 / 0) && (l = !1),
            l !== this.behindLiveEdge_ && (this.behindLiveEdge_ = l,
            this.trigger("liveedgechange"))
        }
    }
    ,
    r.handleDurationchange = function() {
        this.toggleTracking()
    }
    ,
    r.toggleTracking = function() {
        this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"),
        this.startTracking()) : (this.player_.removeClass("vjs-liveui"),
        this.stopTracking())
    }
    ,
    r.startTracking = function() {
        this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()),
        this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, lt),
        this.trackLive_(),
        this.on(this.player_, ["play", "pause"], this.trackLiveHandler_),
        this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_),
        this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)))
    }
    ,
    r.handleFirstTimeupdate = function() {
        this.timeupdateSeen_ = !0,
        this.on(this.player_, "seeked", this.handleSeeked_)
    }
    ,
    r.handleSeeked = function() {
        var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
        this.seekedBehindLive_ = this.nextSeekedFromUser_ && e > 2,
        this.nextSeekedFromUser_ = !1,
        this.trackLive_()
    }
    ,
    r.handlePlay = function() {
        this.one(this.player_, "timeupdate", this.seekToLiveEdge_)
    }
    ,
    r.reset_ = function() {
        this.lastTime_ = -1,
        this.pastSeekEnd_ = 0,
        this.lastSeekEnd_ = -1,
        this.behindLiveEdge_ = !0,
        this.timeupdateSeen_ = !1,
        this.seekedBehindLive_ = !1,
        this.nextSeekedFromUser_ = !1,
        this.clearInterval(this.trackingInterval_),
        this.trackingInterval_ = null,
        this.off(this.player_, ["play", "pause"], this.trackLiveHandler_),
        this.off(this.player_, "seeked", this.handleSeeked_),
        this.off(this.player_, "play", this.handlePlay_),
        this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_),
        this.off(this.player_, "timeupdate", this.seekToLiveEdge_)
    }
    ,
    r.nextSeekedFromUser = function() {
        this.nextSeekedFromUser_ = !0
    }
    ,
    r.stopTracking = function() {
        this.isTracking() && (this.reset_(),
        this.trigger("liveedgechange"))
    }
    ,
    r.seekableEnd = function() {
        for (var e = this.player_.seekable(), n = [], s = e ? e.length : 0; s--; )
            n.push(e.end(s));
        return n.length ? n.sort()[n.length - 1] : 1 / 0
    }
    ,
    r.seekableStart = function() {
        for (var e = this.player_.seekable(), n = [], s = e ? e.length : 0; s--; )
            n.push(e.start(s));
        return n.length ? n.sort()[0] : 0
    }
    ,
    r.liveWindow = function() {
        var e = this.liveCurrentTime();
        return e === 1 / 0 ? 0 : e - this.seekableStart()
    }
    ,
    r.isLive = function() {
        return this.isTracking()
    }
    ,
    r.atLiveEdge = function() {
        return !this.behindLiveEdge()
    }
    ,
    r.liveCurrentTime = function() {
        return this.pastSeekEnd() + this.seekableEnd()
    }
    ,
    r.pastSeekEnd = function() {
        var e = this.seekableEnd();
        return this.lastSeekEnd_ !== -1 && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0),
        this.lastSeekEnd_ = e,
        this.pastSeekEnd_
    }
    ,
    r.behindLiveEdge = function() {
        return this.behindLiveEdge_
    }
    ,
    r.isTracking = function() {
        return typeof this.trackingInterval_ == "number"
    }
    ,
    r.seekToLiveEdge = function() {
        this.seekedBehindLive_ = !1,
        !this.atLiveEdge() && (this.nextSeekedFromUser_ = !1,
        this.player_.currentTime(this.liveCurrentTime()))
    }
    ,
    r.dispose = function() {
        this.off(V, "visibilitychange", this.handleVisibilityChange_),
        this.stopTracking(),
        a.prototype.dispose.call(this)
    }
    ,
    t
}(U);
U.registerComponent("LiveTracker", $v);
var as = function(t) {
    var r = t.el();
    if (r.hasAttribute("src"))
        return t.triggerSourceset(r.src),
        !0;
    var i = t.$$("source")
      , e = []
      , n = "";
    if (!i.length)
        return !1;
    for (var s = 0; s < i.length; s++) {
        var o = i[s].src;
        o && e.indexOf(o) === -1 && e.push(o)
    }
    return e.length ? (e.length === 1 && (n = e[0]),
    t.triggerSourceset(n),
    !0) : !1
}
  , Kv = Object.defineProperty({}, "innerHTML", {
    get: function() {
        return this.cloneNode(!0).innerHTML
    },
    set: function(t) {
        var r = V.createElement(this.nodeName.toLowerCase());
        r.innerHTML = t;
        for (var i = V.createDocumentFragment(); r.childNodes.length; )
            i.appendChild(r.childNodes[0]);
        return this.innerText = "",
        A.Element.prototype.appendChild.call(this, i),
        this.innerHTML
    }
})
  , kc = function(t, r) {
    for (var i = {}, e = 0; e < t.length && (i = Object.getOwnPropertyDescriptor(t[e], r),
    !(i && i.set && i.get)); e++)
        ;
    return i.enumerable = !0,
    i.configurable = !0,
    i
}
  , Xv = function(t) {
    return kc([t.el(), A.HTMLMediaElement.prototype, A.Element.prototype, Kv], "innerHTML")
}
  , ol = function(t) {
    var r = t.el();
    if (!r.resetSourceWatch_) {
        var i = {}
          , e = Xv(t)
          , n = function(o) {
            return function() {
                for (var u = arguments.length, l = new Array(u), c = 0; c < u; c++)
                    l[c] = arguments[c];
                var p = o.apply(r, l);
                return as(t),
                p
            }
        };
        ["append", "appendChild", "insertAdjacentHTML"].forEach(function(s) {
            r[s] && (i[s] = r[s],
            r[s] = n(i[s]))
        }),
        Object.defineProperty(r, "innerHTML", fe(e, {
            set: n(e.set)
        })),
        r.resetSourceWatch_ = function() {
            r.resetSourceWatch_ = null,
            Object.keys(i).forEach(function(s) {
                r[s] = i[s]
            }),
            Object.defineProperty(r, "innerHTML", e)
        }
        ,
        t.one("sourceset", r.resetSourceWatch_)
    }
}
  , Yv = Object.defineProperty({}, "src", {
    get: function() {
        return this.hasAttribute("src") ? ec(A.Element.prototype.getAttribute.call(this, "src")) : ""
    },
    set: function(t) {
        return A.Element.prototype.setAttribute.call(this, "src", t),
        t
    }
})
  , Qv = function(t) {
    return kc([t.el(), A.HTMLMediaElement.prototype, Yv], "src")
}
  , Jv = function(t) {
    if (t.featuresSourceset) {
        var r = t.el();
        if (!r.resetSourceset_) {
            var i = Qv(t)
              , e = r.setAttribute
              , n = r.load;
            Object.defineProperty(r, "src", fe(i, {
                set: function(o) {
                    var u = i.set.call(r, o);
                    return t.triggerSourceset(r.src),
                    u
                }
            })),
            r.setAttribute = function(s, o) {
                var u = e.call(r, s, o);
                return /src/i.test(s) && t.triggerSourceset(r.src),
                u
            }
            ,
            r.load = function() {
                var s = n.call(r);
                return as(t) || (t.triggerSourceset(""),
                ol(t)),
                s
            }
            ,
            r.currentSrc ? t.triggerSourceset(r.currentSrc) : as(t) || ol(t),
            r.resetSourceset_ = function() {
                r.resetSourceset_ = null,
                r.load = n,
                r.setAttribute = e,
                Object.defineProperty(r, "src", i),
                r.resetSourceWatch_ && r.resetSourceWatch_()
            }
        }
    }
}
  , go = function(t, r, i, e) {
    e === void 0 && (e = !0);
    var n = function(u) {
        return Object.defineProperty(t, r, {
            value: u,
            enumerable: !0,
            writable: !0
        })
    }
      , s = {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var u = i();
            return n(u),
            u
        }
    };
    return e && (s.set = n),
    Object.defineProperty(t, r, s)
}
  , z = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        n = a.call(this, i, e) || this;
        var s = i.source
          , o = !1;
        if (s && (n.el_.currentSrc !== s.src || i.tag && i.tag.initNetworkState_ === 3) ? n.setSource(s) : n.handleLateInit_(n.el_),
        i.enableSourceset && n.setupSourcesetHandling_(),
        n.isScrubbing_ = !1,
        n.el_.hasChildNodes()) {
            for (var u = n.el_.childNodes, l = u.length, c = []; l--; ) {
                var p = u[l]
                  , g = p.nodeName.toLowerCase();
                g === "track" && (n.featuresNativeTextTracks ? (n.remoteTextTrackEls().addTrackElement_(p),
                n.remoteTextTracks().addTrack(p.track),
                n.textTracks().addTrack(p.track),
                !o && !n.el_.hasAttribute("crossorigin") && Jn(p.src) && (o = !0)) : c.push(p))
            }
            for (var y = 0; y < c.length; y++)
                n.el_.removeChild(c[y])
        }
        return n.proxyNativeTracks_(),
        n.featuresNativeTextTracks && o && Z.warn(`Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.
This may prevent text tracks from loading.`),
        n.restoreMetadataTracksInIOSNativePlayer_(),
        (Pr || Gs || kd) && i.nativeControlsForTouch === !0 && n.setControls(!0),
        n.proxyWebkitFullscreen_(),
        n.triggerReady(),
        n
    }
    var r = t.prototype;
    return r.dispose = function() {
        this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(),
        t.disposeMediaElement(this.el_),
        this.options_ = null,
        a.prototype.dispose.call(this)
    }
    ,
    r.setupSourcesetHandling_ = function() {
        Jv(this)
    }
    ,
    r.restoreMetadataTracksInIOSNativePlayer_ = function() {
        var e = this.textTracks(), n, s = function() {
            n = [];
            for (var l = 0; l < e.length; l++) {
                var c = e[l];
                c.kind === "metadata" && n.push({
                    track: c,
                    storedMode: c.mode
                })
            }
        };
        s(),
        e.addEventListener("change", s),
        this.on("dispose", function() {
            return e.removeEventListener("change", s)
        });
        var o = function u() {
            for (var l = 0; l < n.length; l++) {
                var c = n[l];
                c.track.mode === "disabled" && c.track.mode !== c.storedMode && (c.track.mode = c.storedMode)
            }
            e.removeEventListener("change", u)
        };
        this.on("webkitbeginfullscreen", function() {
            e.removeEventListener("change", s),
            e.removeEventListener("change", o),
            e.addEventListener("change", o)
        }),
        this.on("webkitendfullscreen", function() {
            e.removeEventListener("change", s),
            e.addEventListener("change", s),
            e.removeEventListener("change", o)
        })
    }
    ,
    r.overrideNative_ = function(e, n) {
        var s = this;
        if (n === this["featuresNative" + e + "Tracks"]) {
            var o = e.toLowerCase();
            this[o + "TracksListeners_"] && Object.keys(this[o + "TracksListeners_"]).forEach(function(u) {
                var l = s.el()[o + "Tracks"];
                l.removeEventListener(u, s[o + "TracksListeners_"][u])
            }),
            this["featuresNative" + e + "Tracks"] = !n,
            this[o + "TracksListeners_"] = null,
            this.proxyNativeTracksForType_(o)
        }
    }
    ,
    r.overrideNativeAudioTracks = function(e) {
        this.overrideNative_("Audio", e)
    }
    ,
    r.overrideNativeVideoTracks = function(e) {
        this.overrideNative_("Video", e)
    }
    ,
    r.proxyNativeTracksForType_ = function(e) {
        var n = this
          , s = tt[e]
          , o = this.el()[s.getterName]
          , u = this[s.getterName]();
        if (!(!this["featuresNative" + s.capitalName + "Tracks"] || !o || !o.addEventListener)) {
            var l = {
                change: function(g) {
                    var y = {
                        type: "change",
                        target: u,
                        currentTarget: u,
                        srcElement: u
                    };
                    u.trigger(y),
                    e === "text" && n[Lr.remoteText.getterName]().trigger(y)
                },
                addtrack: function(g) {
                    u.addTrack(g.track)
                },
                removetrack: function(g) {
                    u.removeTrack(g.track)
                }
            }
              , c = function() {
                for (var g = [], y = 0; y < u.length; y++) {
                    for (var S = !1, x = 0; x < o.length; x++)
                        if (o[x] === u[y]) {
                            S = !0;
                            break
                        }
                    S || g.push(u[y])
                }
                for (; g.length; )
                    u.removeTrack(g.shift())
            };
            this[s.getterName + "Listeners_"] = l,
            Object.keys(l).forEach(function(p) {
                var g = l[p];
                o.addEventListener(p, g),
                n.on("dispose", function(y) {
                    return o.removeEventListener(p, g)
                })
            }),
            this.on("loadstart", c),
            this.on("dispose", function(p) {
                return n.off("loadstart", c)
            })
        }
    }
    ,
    r.proxyNativeTracks_ = function() {
        var e = this;
        tt.names.forEach(function(n) {
            e.proxyNativeTracksForType_(n)
        })
    }
    ,
    r.createEl = function() {
        var e = this.options_.tag;
        if (!e || !(this.options_.playerElIngest || this.movingMediaElementInDOM)) {
            if (e) {
                var n = e.cloneNode(!0);
                e.parentNode && e.parentNode.insertBefore(n, e),
                t.disposeMediaElement(e),
                e = n
            } else {
                e = V.createElement("video");
                var s = this.options_.tag && bt(this.options_.tag)
                  , o = fe({}, s);
                (!Pr || this.options_.nativeControlsForTouch !== !0) && delete o.controls,
                Md(e, pe(o, {
                    id: this.options_.techId,
                    class: "vjs-tech"
                }))
            }
            e.playerId = this.options_.playerId
        }
        typeof this.options_.preload < "u" && yi(e, "preload", this.options_.preload),
        this.options_.disablePictureInPicture !== void 0 && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
        for (var u = ["loop", "muted", "playsinline", "autoplay"], l = 0; l < u.length; l++) {
            var c = u[l]
              , p = this.options_[c];
            typeof p < "u" && (p ? yi(e, c, c) : $n(e, c),
            e[c] = p)
        }
        return e
    }
    ,
    r.handleLateInit_ = function(e) {
        if (!(e.networkState === 0 || e.networkState === 3)) {
            if (e.readyState === 0) {
                var n = !1
                  , s = function() {
                    n = !0
                };
                this.on("loadstart", s);
                var o = function() {
                    n || this.trigger("loadstart")
                };
                this.on("loadedmetadata", o),
                this.ready(function() {
                    this.off("loadstart", s),
                    this.off("loadedmetadata", o),
                    n || this.trigger("loadstart")
                });
                return
            }
            var u = ["loadstart"];
            u.push("loadedmetadata"),
            e.readyState >= 2 && u.push("loadeddata"),
            e.readyState >= 3 && u.push("canplay"),
            e.readyState >= 4 && u.push("canplaythrough"),
            this.ready(function() {
                u.forEach(function(l) {
                    this.trigger(l)
                }, this)
            })
        }
    }
    ,
    r.setScrubbing = function(e) {
        this.isScrubbing_ = e
    }
    ,
    r.scrubbing = function() {
        return this.isScrubbing_
    }
    ,
    r.setCurrentTime = function(e) {
        try {
            this.isScrubbing_ && this.el_.fastSeek && zn ? this.el_.fastSeek(e) : this.el_.currentTime = e
        } catch (n) {
            Z(n, "Video is not ready. (Video.js)")
        }
    }
    ,
    r.duration = function() {
        var e = this;
        if (this.el_.duration === 1 / 0 && It && Dt && this.el_.currentTime === 0) {
            var n = function s() {
                e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"),
                e.off("timeupdate", s))
            };
            return this.on("timeupdate", n),
            NaN
        }
        return this.el_.duration || NaN
    }
    ,
    r.width = function() {
        return this.el_.offsetWidth
    }
    ,
    r.height = function() {
        return this.el_.offsetHeight
    }
    ,
    r.proxyWebkitFullscreen_ = function() {
        var e = this;
        if ("webkitDisplayingFullscreen"in this.el_) {
            var n = function() {
                this.trigger("fullscreenchange", {
                    isFullscreen: !1
                })
            }
              , s = function() {
                "webkitPresentationMode"in this.el_ && this.el_.webkitPresentationMode !== "picture-in-picture" && (this.one("webkitendfullscreen", n),
                this.trigger("fullscreenchange", {
                    isFullscreen: !0,
                    nativeIOSFullscreen: !0
                }))
            };
            this.on("webkitbeginfullscreen", s),
            this.on("dispose", function() {
                e.off("webkitbeginfullscreen", s),
                e.off("webkitendfullscreen", n)
            })
        }
    }
    ,
    r.supportsFullScreen = function() {
        if (typeof this.el_.webkitEnterFullScreen == "function") {
            var e = A.navigator && A.navigator.userAgent || "";
            if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e))
                return !0
        }
        return !1
    }
    ,
    r.enterFullScreen = function() {
        var e = this.el_;
        if (e.paused && e.networkState <= e.HAVE_METADATA)
            wt(this.el_.play()),
            this.setTimeout(function() {
                e.pause();
                try {
                    e.webkitEnterFullScreen()
                } catch (n) {
                    this.trigger("fullscreenerror", n)
                }
            }, 0);
        else
            try {
                e.webkitEnterFullScreen()
            } catch (n) {
                this.trigger("fullscreenerror", n)
            }
    }
    ,
    r.exitFullScreen = function() {
        if (!this.el_.webkitDisplayingFullscreen) {
            this.trigger("fullscreenerror", new Error("The video is not fullscreen"));
            return
        }
        this.el_.webkitExitFullScreen()
    }
    ,
    r.requestPictureInPicture = function() {
        return this.el_.requestPictureInPicture()
    }
    ,
    r.src = function(e) {
        if (e === void 0)
            return this.el_.src;
        this.setSrc(e)
    }
    ,
    r.reset = function() {
        t.resetMediaElement(this.el_)
    }
    ,
    r.currentSrc = function() {
        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
    }
    ,
    r.setControls = function(e) {
        this.el_.controls = !!e
    }
    ,
    r.addTextTrack = function(e, n, s) {
        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, n, s) : a.prototype.addTextTrack.call(this, e, n, s)
    }
    ,
    r.createRemoteTextTrack = function(e) {
        if (!this.featuresNativeTextTracks)
            return a.prototype.createRemoteTextTrack.call(this, e);
        var n = V.createElement("track");
        return e.kind && (n.kind = e.kind),
        e.label && (n.label = e.label),
        (e.language || e.srclang) && (n.srclang = e.language || e.srclang),
        e.default && (n.default = e.default),
        e.id && (n.id = e.id),
        e.src && (n.src = e.src),
        n
    }
    ,
    r.addRemoteTextTrack = function(e, n) {
        var s = a.prototype.addRemoteTextTrack.call(this, e, n);
        return this.featuresNativeTextTracks && this.el().appendChild(s),
        s
    }
    ,
    r.removeRemoteTextTrack = function(e) {
        if (a.prototype.removeRemoteTextTrack.call(this, e),
        this.featuresNativeTextTracks)
            for (var n = this.$$("track"), s = n.length; s--; )
                (e === n[s] || e === n[s].track) && this.el().removeChild(n[s])
    }
    ,
    r.getVideoPlaybackQuality = function() {
        if (typeof this.el().getVideoPlaybackQuality == "function")
            return this.el().getVideoPlaybackQuality();
        var e = {};
        return typeof this.el().webkitDroppedFrameCount < "u" && typeof this.el().webkitDecodedFrameCount < "u" && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount,
        e.totalVideoFrames = this.el().webkitDecodedFrameCount),
        A.performance && typeof A.performance.now == "function" ? e.creationTime = A.performance.now() : A.performance && A.performance.timing && typeof A.performance.timing.navigationStart == "number" && (e.creationTime = A.Date.now() - A.performance.timing.navigationStart),
        e
    }
    ,
    t
}(ue);
go(z, "TEST_VID", function() {
    if (Fr()) {
        var a = V.createElement("video")
          , t = V.createElement("track");
        return t.kind = "captions",
        t.srclang = "en",
        t.label = "English",
        a.appendChild(t),
        a
    }
});
z.isSupported = function() {
    try {
        z.TEST_VID.volume = .5
    } catch {
        return !1
    }
    return !!(z.TEST_VID && z.TEST_VID.canPlayType)
}
;
z.canPlayType = function(a) {
    return z.TEST_VID.canPlayType(a)
}
;
z.canPlaySource = function(a, t) {
    return z.canPlayType(a.type)
}
;
z.canControlVolume = function() {
    try {
        var a = z.TEST_VID.volume;
        return z.TEST_VID.volume = a / 2 + .1,
        a !== z.TEST_VID.volume
    } catch {
        return !1
    }
}
;
z.canMuteVolume = function() {
    try {
        var a = z.TEST_VID.muted;
        return z.TEST_VID.muted = !a,
        z.TEST_VID.muted ? yi(z.TEST_VID, "muted", "muted") : $n(z.TEST_VID, "muted", "muted"),
        a !== z.TEST_VID.muted
    } catch {
        return !1
    }
}
;
z.canControlPlaybackRate = function() {
    if (It && Dt && Pd < 58)
        return !1;
    try {
        var a = z.TEST_VID.playbackRate;
        return z.TEST_VID.playbackRate = a / 2 + .1,
        a !== z.TEST_VID.playbackRate
    } catch {
        return !1
    }
}
;
z.canOverrideAttributes = function() {
    try {
        var a = function() {};
        Object.defineProperty(V.createElement("video"), "src", {
            get: a,
            set: a
        }),
        Object.defineProperty(V.createElement("audio"), "src", {
            get: a,
            set: a
        }),
        Object.defineProperty(V.createElement("video"), "innerHTML", {
            get: a,
            set: a
        }),
        Object.defineProperty(V.createElement("audio"), "innerHTML", {
            get: a,
            set: a
        })
    } catch {
        return !1
    }
    return !0
}
;
z.supportsNativeTextTracks = function() {
    return zn || Ge && Dt
}
;
z.supportsNativeVideoTracks = function() {
    return !!(z.TEST_VID && z.TEST_VID.videoTracks)
}
;
z.supportsNativeAudioTracks = function() {
    return !!(z.TEST_VID && z.TEST_VID.audioTracks)
}
;
z.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"];
[["featuresVolumeControl", "canControlVolume"], ["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function(a) {
    var t = a[0]
      , r = a[1];
    go(z.prototype, t, function() {
        return z[r]()
    }, !0)
});
z.prototype.movingMediaElementInDOM = !Ge;
z.prototype.featuresFullscreenResize = !0;
z.prototype.featuresProgressEvents = !0;
z.prototype.featuresTimeupdateEvents = !0;
var wn;
z.patchCanPlayType = function() {
    js >= 4 && !Ad && !Dt && (wn = z.TEST_VID && z.TEST_VID.constructor.prototype.canPlayType,
    z.TEST_VID.constructor.prototype.canPlayType = function(a) {
        var t = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
        return a && t.test(a) ? "maybe" : wn.call(this, a)
    }
    )
}
;
z.unpatchCanPlayType = function() {
    var a = z.TEST_VID.constructor.prototype.canPlayType;
    return wn && (z.TEST_VID.constructor.prototype.canPlayType = wn),
    a
}
;
z.patchCanPlayType();
z.disposeMediaElement = function(a) {
    if (a) {
        for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes(); )
            a.removeChild(a.firstChild);
        a.removeAttribute("src"),
        typeof a.load == "function" && function() {
            try {
                a.load()
            } catch {}
        }()
    }
}
;
z.resetMediaElement = function(a) {
    if (a) {
        for (var t = a.querySelectorAll("source"), r = t.length; r--; )
            a.removeChild(t[r]);
        a.removeAttribute("src"),
        typeof a.load == "function" && function() {
            try {
                a.load()
            } catch {}
        }()
    }
}
;
["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(a) {
    z.prototype[a] = function() {
        return this.el_[a] || this.el_.hasAttribute(a)
    }
});
["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(a) {
    z.prototype["set" + Te(a)] = function(t) {
        this.el_[a] = t,
        t ? this.el_.setAttribute(a, a) : this.el_.removeAttribute(a)
    }
});
["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function(a) {
    z.prototype[a] = function() {
        return this.el_[a]
    }
});
["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function(a) {
    z.prototype["set" + Te(a)] = function(t) {
        this.el_[a] = t
    }
});
["pause", "load", "play"].forEach(function(a) {
    z.prototype[a] = function() {
        return this.el_[a]()
    }
});
ue.withSourceHandlers(z);
z.nativeSourceHandler = {};
z.nativeSourceHandler.canPlayType = function(a) {
    try {
        return z.TEST_VID.canPlayType(a)
    } catch {
        return ""
    }
}
;
z.nativeSourceHandler.canHandleSource = function(a, t) {
    if (a.type)
        return z.nativeSourceHandler.canPlayType(a.type);
    if (a.src) {
        var r = Qs(a.src);
        return z.nativeSourceHandler.canPlayType("video/" + r)
    }
    return ""
}
;
z.nativeSourceHandler.handleSource = function(a, t, r) {
    t.setSrc(a.src)
}
;
z.nativeSourceHandler.dispose = function() {}
;
z.registerSourceHandler(z.nativeSourceHandler);
ue.registerTech("Html5", z);
var Ac = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"]
  , Ha = {
    canplay: "CanPlay",
    canplaythrough: "CanPlayThrough",
    playing: "Playing",
    seeked: "Seeked"
}
  , ss = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"]
  , fn = {};
ss.forEach(function(a) {
    var t = a.charAt(0) === "x" ? "x-" + a.substring(1) : a;
    fn[a] = "vjs-layout-" + t
});
var Zv = {
    tiny: 210,
    xsmall: 320,
    small: 425,
    medium: 768,
    large: 1440,
    xlarge: 2560,
    huge: 1 / 0
}
  , xe = function(a) {
    G(t, a);
    function t(i, e, n) {
        var s;
        if (i.id = i.id || e.id || "vjs_video_" + Ut(),
        e = pe(t.getTagSettings(i), e),
        e.initChildren = !1,
        e.createEl = !1,
        e.evented = !1,
        e.reportTouchActivity = !1,
        !e.language)
            if (typeof i.closest == "function") {
                var o = i.closest("[lang]");
                o && o.getAttribute && (e.language = o.getAttribute("lang"))
            } else
                for (var u = i; u && u.nodeType === 1; ) {
                    if (bt(u).hasOwnProperty("lang")) {
                        e.language = u.getAttribute("lang");
                        break
                    }
                    u = u.parentNode
                }
        if (s = a.call(this, null, e, n) || this,
        s.boundDocumentFullscreenChange_ = function(g) {
            return s.documentFullscreenChange_(g)
        }
        ,
        s.boundFullWindowOnEscKey_ = function(g) {
            return s.fullWindowOnEscKey(g)
        }
        ,
        s.boundUpdateStyleEl_ = function(g) {
            return s.updateStyleEl_(g)
        }
        ,
        s.boundApplyInitTime_ = function(g) {
            return s.applyInitTime_(g)
        }
        ,
        s.boundUpdateCurrentBreakpoint_ = function(g) {
            return s.updateCurrentBreakpoint_(g)
        }
        ,
        s.boundHandleTechClick_ = function(g) {
            return s.handleTechClick_(g)
        }
        ,
        s.boundHandleTechDoubleClick_ = function(g) {
            return s.handleTechDoubleClick_(g)
        }
        ,
        s.boundHandleTechTouchStart_ = function(g) {
            return s.handleTechTouchStart_(g)
        }
        ,
        s.boundHandleTechTouchMove_ = function(g) {
            return s.handleTechTouchMove_(g)
        }
        ,
        s.boundHandleTechTouchEnd_ = function(g) {
            return s.handleTechTouchEnd_(g)
        }
        ,
        s.boundHandleTechTap_ = function(g) {
            return s.handleTechTap_(g)
        }
        ,
        s.isFullscreen_ = !1,
        s.log = Ed(s.id_),
        s.fsApi_ = bn,
        s.isPosterFromTech_ = !1,
        s.queuedCallbacks_ = [],
        s.isReady_ = !1,
        s.hasStarted_ = !1,
        s.userActive_ = !1,
        s.debugEnabled_ = !1,
        !s.options_ || !s.options_.techOrder || !s.options_.techOrder.length)
            throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
        if (s.tag = i,
        s.tagAttributes = i && bt(i),
        s.language(s.options_.language),
        e.languages) {
            var l = {};
            Object.getOwnPropertyNames(e.languages).forEach(function(g) {
                l[g.toLowerCase()] = e.languages[g]
            }),
            s.languages_ = l
        } else
            s.languages_ = t.prototype.options_.languages;
        s.resetCache_(),
        s.poster_ = e.poster || "",
        s.controls_ = !!e.controls,
        i.controls = !1,
        i.removeAttribute("controls"),
        s.changingSrc_ = !1,
        s.playCallbacks_ = [],
        s.playTerminatedQueue_ = [],
        i.hasAttribute("autoplay") ? s.autoplay(!0) : s.autoplay(s.options_.autoplay),
        e.plugins && Object.keys(e.plugins).forEach(function(g) {
            if (typeof s[g] != "function")
                throw new Error('plugin "' + g + '" does not exist')
        }),
        s.scrubbing_ = !1,
        s.el_ = s.createEl(),
        Ks(Y(s), {
            eventBusKey: "el_"
        }),
        s.fsApi_.requestFullscreen && (Je(V, s.fsApi_.fullscreenchange, s.boundDocumentFullscreenChange_),
        s.on(s.fsApi_.fullscreenchange, s.boundDocumentFullscreenChange_)),
        s.fluid_ && s.on(["playerreset", "resize"], s.boundUpdateStyleEl_);
        var c = fe(s.options_);
        e.plugins && Object.keys(e.plugins).forEach(function(g) {
            s[g](e.plugins[g])
        }),
        e.debug && s.debug(!0),
        s.options_.playerOptions = c,
        s.middleware_ = [],
        s.playbackRates(e.playbackRates),
        s.initChildren(),
        s.isAudio(i.nodeName.toLowerCase() === "audio"),
        s.controls() ? s.addClass("vjs-controls-enabled") : s.addClass("vjs-controls-disabled"),
        s.el_.setAttribute("role", "region"),
        s.isAudio() ? s.el_.setAttribute("aria-label", s.localize("Audio Player")) : s.el_.setAttribute("aria-label", s.localize("Video Player")),
        s.isAudio() && s.addClass("vjs-audio"),
        s.flexNotSupported_() && s.addClass("vjs-no-flex"),
        Pr && s.addClass("vjs-touch-enabled"),
        Ge || s.addClass("vjs-workinghover"),
        t.players[s.id_] = Y(s);
        var p = xd.split(".")[0];
        return s.addClass("vjs-v" + p),
        s.userActive(!0),
        s.reportUserActivity(),
        s.one("play", function(g) {
            return s.listenForUserActivity_(g)
        }),
        s.on("stageclick", function(g) {
            return s.handleStageClick_(g)
        }),
        s.on("keydown", function(g) {
            return s.handleKeyDown(g)
        }),
        s.on("languagechange", function(g) {
            return s.handleLanguagechange(g)
        }),
        s.breakpoints(s.options_.breakpoints),
        s.responsive(s.options_.responsive),
        s
    }
    var r = t.prototype;
    return r.dispose = function() {
        var e = this;
        this.trigger("dispose"),
        this.off("dispose"),
        Oe(V, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_),
        Oe(V, "keydown", this.boundFullWindowOnEscKey_),
        this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_),
        this.styleEl_ = null),
        t.players[this.id_] = null,
        this.tag && this.tag.player && (this.tag.player = null),
        this.el_ && this.el_.player && (this.el_.player = null),
        this.tech_ && (this.tech_.dispose(),
        this.isPosterFromTech_ = !1,
        this.poster_ = ""),
        this.playerElIngest_ && (this.playerElIngest_ = null),
        this.tag && (this.tag = null),
        yv(this),
        Ne.names.forEach(function(n) {
            var s = Ne[n]
              , o = e[s.getterName]();
            o && o.off && o.off()
        }),
        a.prototype.dispose.call(this)
    }
    ,
    r.createEl = function() {
        var e = this.tag, n, s = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player"), o = this.tag.tagName.toLowerCase() === "video-js";
        s ? n = this.el_ = e.parentNode : o || (n = this.el_ = a.prototype.createEl.call(this, "div"));
        var u = bt(e);
        if (o) {
            for (n = this.el_ = e,
            e = this.tag = V.createElement("video"); n.children.length; )
                e.appendChild(n.firstChild);
            Jt(n, "video-js") || Et(n, "video-js"),
            n.appendChild(e),
            s = this.playerElIngest_ = n,
            Object.keys(n).forEach(function(S) {
                try {
                    e[S] = n[S]
                } catch {}
            })
        }
        if (e.setAttribute("tabindex", "-1"),
        u.tabindex = "-1",
        (ki || Dt && Id) && (e.setAttribute("role", "application"),
        u.role = "application"),
        e.removeAttribute("width"),
        e.removeAttribute("height"),
        "width"in u && delete u.width,
        "height"in u && delete u.height,
        Object.getOwnPropertyNames(u).forEach(function(S) {
            o && S === "class" || n.setAttribute(S, u[S]),
            o && e.setAttribute(S, u[S])
        }),
        e.playerId = e.id,
        e.id += "_html5_api",
        e.className = "vjs-tech",
        e.player = n.player = this,
        this.addClass("vjs-paused"),
        A.VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
            this.styleEl_ = qd("vjs-styles-dimensions");
            var l = Ft(".vjs-styles-defaults")
              , c = Ft("head");
            c.insertBefore(this.styleEl_, l ? l.nextSibling : c.firstChild)
        }
        this.fill_ = !1,
        this.fluid_ = !1,
        this.width(this.options_.width),
        this.height(this.options_.height),
        this.fill(this.options_.fill),
        this.fluid(this.options_.fluid),
        this.aspectRatio(this.options_.aspectRatio),
        this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
        for (var p = e.getElementsByTagName("a"), g = 0; g < p.length; g++) {
            var y = p.item(g);
            Et(y, "vjs-hidden"),
            y.setAttribute("hidden", "hidden")
        }
        return e.initNetworkState_ = e.networkState,
        e.parentNode && !s && e.parentNode.insertBefore(n, e),
        Ja(e, n),
        this.children_.unshift(e),
        this.el_.setAttribute("lang", this.language_),
        this.el_ = n,
        n
    }
    ,
    r.crossOrigin = function(e) {
        if (!e)
            return this.techGet_("crossOrigin");
        if (e !== "anonymous" && e !== "use-credentials") {
            Z.warn('crossOrigin must be "anonymous" or "use-credentials", given "' + e + '"');
            return
        }
        this.techCall_("setCrossOrigin", e)
    }
    ,
    r.width = function(e) {
        return this.dimension("width", e)
    }
    ,
    r.height = function(e) {
        return this.dimension("height", e)
    }
    ,
    r.dimension = function(e, n) {
        var s = e + "_";
        if (n === void 0)
            return this[s] || 0;
        if (n === "" || n === "auto") {
            this[s] = void 0,
            this.updateStyleEl_();
            return
        }
        var o = parseFloat(n);
        if (isNaN(o)) {
            Z.error('Improper value "' + n + '" supplied for for ' + e);
            return
        }
        this[s] = o,
        this.updateStyleEl_()
    }
    ,
    r.fluid = function(e) {
        var n = this;
        if (e === void 0)
            return !!this.fluid_;
        this.fluid_ = !!e,
        Ct(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_),
        e ? (this.addClass("vjs-fluid"),
        this.fill(!1),
        Gg(this, function() {
            n.on(["playerreset", "resize"], n.boundUpdateStyleEl_)
        })) : this.removeClass("vjs-fluid"),
        this.updateStyleEl_()
    }
    ,
    r.fill = function(e) {
        if (e === void 0)
            return !!this.fill_;
        this.fill_ = !!e,
        e ? (this.addClass("vjs-fill"),
        this.fluid(!1)) : this.removeClass("vjs-fill")
    }
    ,
    r.aspectRatio = function(e) {
        if (e === void 0)
            return this.aspectRatio_;
        if (!/^\d+\:\d+$/.test(e))
            throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
        this.aspectRatio_ = e,
        this.fluid(!0),
        this.updateStyleEl_()
    }
    ,
    r.updateStyleEl_ = function() {
        if (A.VIDEOJS_NO_DYNAMIC_STYLE === !0) {
            var e = typeof this.width_ == "number" ? this.width_ : this.options_.width
              , n = typeof this.height_ == "number" ? this.height_ : this.options_.height
              , s = this.tech_ && this.tech_.el();
            s && (e >= 0 && (s.width = e),
            n >= 0 && (s.height = n));
            return
        }
        var o, u, l, c;
        this.aspectRatio_ !== void 0 && this.aspectRatio_ !== "auto" ? l = this.aspectRatio_ : this.videoWidth() > 0 ? l = this.videoWidth() + ":" + this.videoHeight() : l = "16:9";
        var p = l.split(":")
          , g = p[1] / p[0];
        this.width_ !== void 0 ? o = this.width_ : this.height_ !== void 0 ? o = this.height_ / g : o = this.videoWidth() || 300,
        this.height_ !== void 0 ? u = this.height_ : u = o * g,
        /^[^a-zA-Z]/.test(this.id()) ? c = "dimensions-" + this.id() : c = this.id() + "-dimensions",
        this.addClass(c),
        zd(this.styleEl_, `
      .` + c + ` {
        width: ` + o + `px;
        height: ` + u + `px;
      }

      .` + c + `.vjs-fluid {
        padding-top: ` + g * 100 + `%;
      }
    `)
    }
    ,
    r.loadTech_ = function(e, n) {
        var s = this;
        this.tech_ && this.unloadTech_();
        var o = Te(e)
          , u = e.charAt(0).toLowerCase() + e.slice(1);
        o !== "Html5" && this.tag && (ue.getTech("Html5").disposeMediaElement(this.tag),
        this.tag.player = null,
        this.tag = null),
        this.techName_ = o,
        this.isReady_ = !1;
        var l = this.autoplay();
        (typeof this.autoplay() == "string" || this.autoplay() === !0 && this.options_.normalizeAutoplay) && (l = !1);
        var c = {
            source: n,
            autoplay: l,
            nativeControlsForTouch: this.options_.nativeControlsForTouch,
            playerId: this.id(),
            techId: this.id() + "_" + u + "_api",
            playsinline: this.options_.playsinline,
            preload: this.options_.preload,
            loop: this.options_.loop,
            disablePictureInPicture: this.options_.disablePictureInPicture,
            muted: this.options_.muted,
            poster: this.poster(),
            language: this.language(),
            playerElIngest: this.playerElIngest_ || !1,
            "vtt.js": this.options_["vtt.js"],
            canOverridePoster: !!this.options_.techCanOverridePoster,
            enableSourceset: this.options_.enableSourceset,
            Promise: this.options_.Promise
        };
        Ne.names.forEach(function(g) {
            var y = Ne[g];
            c[y.getterName] = s[y.privateName]
        }),
        pe(c, this.options_[o]),
        pe(c, this.options_[u]),
        pe(c, this.options_[e.toLowerCase()]),
        this.tag && (c.tag = this.tag),
        n && n.src === this.cache_.src && this.cache_.currentTime > 0 && (c.startTime = this.cache_.currentTime);
        var p = ue.getTech(e);
        if (!p)
            throw new Error("No Tech named '" + o + "' exists! '" + o + "' should be registered using videojs.registerTech()'");
        this.tech_ = new p(c),
        this.tech_.ready(oe(this, this.handleTechReady_), !0),
        Vu.jsonToTextTracks(this.textTracksJson_ || [], this.tech_),
        Ac.forEach(function(g) {
            s.on(s.tech_, g, function(y) {
                return s["handleTech" + Te(g) + "_"](y)
            })
        }),
        Object.keys(Ha).forEach(function(g) {
            s.on(s.tech_, g, function(y) {
                if (s.tech_.playbackRate() === 0 && s.tech_.seeking()) {
                    s.queuedCallbacks_.push({
                        callback: s["handleTech" + Ha[g] + "_"].bind(s),
                        event: y
                    });
                    return
                }
                s["handleTech" + Ha[g] + "_"](y)
            })
        }),
        this.on(this.tech_, "loadstart", function(g) {
            return s.handleTechLoadStart_(g)
        }),
        this.on(this.tech_, "sourceset", function(g) {
            return s.handleTechSourceset_(g)
        }),
        this.on(this.tech_, "waiting", function(g) {
            return s.handleTechWaiting_(g)
        }),
        this.on(this.tech_, "ended", function(g) {
            return s.handleTechEnded_(g)
        }),
        this.on(this.tech_, "seeking", function(g) {
            return s.handleTechSeeking_(g)
        }),
        this.on(this.tech_, "play", function(g) {
            return s.handleTechPlay_(g)
        }),
        this.on(this.tech_, "firstplay", function(g) {
            return s.handleTechFirstPlay_(g)
        }),
        this.on(this.tech_, "pause", function(g) {
            return s.handleTechPause_(g)
        }),
        this.on(this.tech_, "durationchange", function(g) {
            return s.handleTechDurationChange_(g)
        }),
        this.on(this.tech_, "fullscreenchange", function(g, y) {
            return s.handleTechFullscreenChange_(g, y)
        }),
        this.on(this.tech_, "fullscreenerror", function(g, y) {
            return s.handleTechFullscreenError_(g, y)
        }),
        this.on(this.tech_, "enterpictureinpicture", function(g) {
            return s.handleTechEnterPictureInPicture_(g)
        }),
        this.on(this.tech_, "leavepictureinpicture", function(g) {
            return s.handleTechLeavePictureInPicture_(g)
        }),
        this.on(this.tech_, "error", function(g) {
            return s.handleTechError_(g)
        }),
        this.on(this.tech_, "posterchange", function(g) {
            return s.handleTechPosterChange_(g)
        }),
        this.on(this.tech_, "textdata", function(g) {
            return s.handleTechTextData_(g)
        }),
        this.on(this.tech_, "ratechange", function(g) {
            return s.handleTechRateChange_(g)
        }),
        this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_),
        this.usingNativeControls(this.techGet_("controls")),
        this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(),
        this.tech_.el().parentNode !== this.el() && (o !== "Html5" || !this.tag) && Ja(this.tech_.el(), this.el()),
        this.tag && (this.tag.player = null,
        this.tag = null)
    }
    ,
    r.unloadTech_ = function() {
        var e = this;
        Ne.names.forEach(function(n) {
            var s = Ne[n];
            e[s.privateName] = e[s.getterName]()
        }),
        this.textTracksJson_ = Vu.textTracksToJson(this.tech_),
        this.isReady_ = !1,
        this.tech_.dispose(),
        this.tech_ = !1,
        this.isPosterFromTech_ && (this.poster_ = "",
        this.trigger("posterchange")),
        this.isPosterFromTech_ = !1
    }
    ,
    r.tech = function(e) {
        return e === void 0 && Z.warn(`Using the tech directly can be dangerous. I hope you know what you're doing.
See https://github.com/videojs/video.js/issues/2617 for more info.
`),
        this.tech_
    }
    ,
    r.addTechControlsListeners_ = function() {
        this.removeTechControlsListeners_(),
        this.on(this.tech_, "mouseup", this.boundHandleTechClick_),
        this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_),
        this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
        this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
        this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
        this.on(this.tech_, "tap", this.boundHandleTechTap_)
    }
    ,
    r.removeTechControlsListeners_ = function() {
        this.off(this.tech_, "tap", this.boundHandleTechTap_),
        this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_),
        this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_),
        this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_),
        this.off(this.tech_, "mouseup", this.boundHandleTechClick_),
        this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_)
    }
    ,
    r.handleTechReady_ = function() {
        this.triggerReady(),
        this.cache_.volume && this.techCall_("setVolume", this.cache_.volume),
        this.handleTechPosterChange_(),
        this.handleTechDurationChange_()
    }
    ,
    r.handleTechLoadStart_ = function() {
        this.removeClass("vjs-ended"),
        this.removeClass("vjs-seeking"),
        this.error(null),
        this.handleTechDurationChange_(),
        this.paused() ? (this.hasStarted(!1),
        this.trigger("loadstart")) : (this.trigger("loadstart"),
        this.trigger("firstplay")),
        this.manualAutoplay_(this.autoplay() === !0 && this.options_.normalizeAutoplay ? "play" : this.autoplay())
    }
    ,
    r.manualAutoplay_ = function(e) {
        var n = this;
        if (!(!this.tech_ || typeof e != "string")) {
            var s = function() {
                var l = n.muted();
                n.muted(!0);
                var c = function() {
                    n.muted(l)
                };
                n.playTerminatedQueue_.push(c);
                var p = n.play();
                if (di(p))
                    return p.catch(c)
            }, o;
            if (e === "any" && this.muted() !== !0 ? (o = this.play(),
            di(o) && (o = o.catch(s))) : e === "muted" && this.muted() !== !0 ? o = s() : o = this.play(),
            !!di(o))
                return o.then(function() {
                    n.trigger({
                        type: "autoplay-success",
                        autoplay: e
                    })
                }).catch(function(u) {
                    n.trigger({
                        type: "autoplay-failure",
                        autoplay: e
                    })
                })
        }
    }
    ,
    r.updateSourceCaches_ = function(e) {
        e === void 0 && (e = "");
        var n = e
          , s = "";
        typeof n != "string" && (n = e.src,
        s = e.type),
        this.cache_.source = this.cache_.source || {},
        this.cache_.sources = this.cache_.sources || [],
        n && !s && (s = xv(this, n)),
        this.cache_.source = fe({}, e, {
            src: n,
            type: s
        });
        for (var o = this.cache_.sources.filter(function(y) {
            return y.src && y.src === n
        }), u = [], l = this.$$("source"), c = [], p = 0; p < l.length; p++) {
            var g = bt(l[p]);
            u.push(g),
            g.src && g.src === n && c.push(g.src)
        }
        c.length && !o.length ? this.cache_.sources = u : o.length || (this.cache_.sources = [this.cache_.source]),
        this.cache_.src = n
    }
    ,
    r.handleTechSourceset_ = function(e) {
        var n = this;
        if (!this.changingSrc_) {
            var s = function(c) {
                return n.updateSourceCaches_(c)
            }
              , o = this.currentSource().src
              , u = e.src;
            o && !/^blob:/.test(o) && /^blob:/.test(u) && (!this.lastSource_ || this.lastSource_.tech !== u && this.lastSource_.player !== o) && (s = function() {}
            ),
            s(u),
            e.src || this.tech_.any(["sourceset", "loadstart"], function(l) {
                if (l.type !== "sourceset") {
                    var c = n.techGet("currentSrc");
                    n.lastSource_.tech = c,
                    n.updateSourceCaches_(c)
                }
            })
        }
        this.lastSource_ = {
            player: this.currentSource().src,
            tech: e.src
        },
        this.trigger({
            src: e.src,
            type: "sourceset"
        })
    }
    ,
    r.hasStarted = function(e) {
        if (e === void 0)
            return this.hasStarted_;
        e !== this.hasStarted_ && (this.hasStarted_ = e,
        this.hasStarted_ ? (this.addClass("vjs-has-started"),
        this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
    }
    ,
    r.handleTechPlay_ = function() {
        this.removeClass("vjs-ended"),
        this.removeClass("vjs-paused"),
        this.addClass("vjs-playing"),
        this.hasStarted(!0),
        this.trigger("play")
    }
    ,
    r.handleTechRateChange_ = function() {
        this.tech_.playbackRate() > 0 && this.cache_.lastPlaybackRate === 0 && (this.queuedCallbacks_.forEach(function(e) {
            return e.callback(e.event)
        }),
        this.queuedCallbacks_ = []),
        this.cache_.lastPlaybackRate = this.tech_.playbackRate(),
        this.trigger("ratechange")
    }
    ,
    r.handleTechWaiting_ = function() {
        var e = this;
        this.addClass("vjs-waiting"),
        this.trigger("waiting");
        var n = this.currentTime()
          , s = function o() {
            n !== e.currentTime() && (e.removeClass("vjs-waiting"),
            e.off("timeupdate", o))
        };
        this.on("timeupdate", s)
    }
    ,
    r.handleTechCanPlay_ = function() {
        this.removeClass("vjs-waiting"),
        this.trigger("canplay")
    }
    ,
    r.handleTechCanPlayThrough_ = function() {
        this.removeClass("vjs-waiting"),
        this.trigger("canplaythrough")
    }
    ,
    r.handleTechPlaying_ = function() {
        this.removeClass("vjs-waiting"),
        this.trigger("playing")
    }
    ,
    r.handleTechSeeking_ = function() {
        this.addClass("vjs-seeking"),
        this.trigger("seeking")
    }
    ,
    r.handleTechSeeked_ = function() {
        this.removeClass("vjs-seeking"),
        this.removeClass("vjs-ended"),
        this.trigger("seeked")
    }
    ,
    r.handleTechFirstPlay_ = function() {
        this.options_.starttime && (Z.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),
        this.currentTime(this.options_.starttime)),
        this.addClass("vjs-has-started"),
        this.trigger("firstplay")
    }
    ,
    r.handleTechPause_ = function() {
        this.removeClass("vjs-playing"),
        this.addClass("vjs-paused"),
        this.trigger("pause")
    }
    ,
    r.handleTechEnded_ = function() {
        this.addClass("vjs-ended"),
        this.options_.loop ? (this.currentTime(0),
        this.play()) : this.paused() || this.pause(),
        this.trigger("ended")
    }
    ,
    r.handleTechDurationChange_ = function() {
        this.duration(this.techGet_("duration"))
    }
    ,
    r.handleTechClick_ = function(e) {
        Dr(e) && this.controls_ && (this.paused() ? wt(this.play()) : this.pause())
    }
    ,
    r.handleTechDoubleClick_ = function(e) {
        if (this.controls_) {
            var n = Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function(s) {
                return s.contains(e.target)
            });
            n || (this.options_ === void 0 || this.options_.userActions === void 0 || this.options_.userActions.doubleClick === void 0 || this.options_.userActions.doubleClick !== !1) && (this.options_ !== void 0 && this.options_.userActions !== void 0 && typeof this.options_.userActions.doubleClick == "function" ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen())
        }
    }
    ,
    r.handleTechTap_ = function() {
        this.userActive(!this.userActive())
    }
    ,
    r.handleTechTouchStart_ = function() {
        this.userWasActive = this.userActive()
    }
    ,
    r.handleTechTouchMove_ = function() {
        this.userWasActive && this.reportUserActivity()
    }
    ,
    r.handleTechTouchEnd_ = function(e) {
        e.cancelable && e.preventDefault()
    }
    ,
    r.handleStageClick_ = function() {
        this.reportUserActivity()
    }
    ,
    r.toggleFullscreenClass_ = function() {
        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
    }
    ,
    r.documentFullscreenChange_ = function(e) {
        var n = e.target.player;
        if (!(n && n !== this)) {
            var s = this.el()
              , o = V[this.fsApi_.fullscreenElement] === s;
            !o && s.matches ? o = s.matches(":" + this.fsApi_.fullscreen) : !o && s.msMatchesSelector && (o = s.msMatchesSelector(":" + this.fsApi_.fullscreen)),
            this.isFullscreen(o)
        }
    }
    ,
    r.handleTechFullscreenChange_ = function(e, n) {
        n && (n.nativeIOSFullscreen && this.toggleClass("vjs-ios-native-fs"),
        this.isFullscreen(n.isFullscreen))
    }
    ,
    r.handleTechFullscreenError_ = function(e, n) {
        this.trigger("fullscreenerror", n)
    }
    ,
    r.togglePictureInPictureClass_ = function() {
        this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
    }
    ,
    r.handleTechEnterPictureInPicture_ = function(e) {
        this.isInPictureInPicture(!0)
    }
    ,
    r.handleTechLeavePictureInPicture_ = function(e) {
        this.isInPictureInPicture(!1)
    }
    ,
    r.handleTechError_ = function() {
        var e = this.tech_.error();
        this.error(e)
    }
    ,
    r.handleTechTextData_ = function() {
        var e = null;
        arguments.length > 1 && (e = arguments[1]),
        this.trigger("textdata", e)
    }
    ,
    r.getCache = function() {
        return this.cache_
    }
    ,
    r.resetCache_ = function() {
        this.cache_ = {
            currentTime: 0,
            initTime: 0,
            inactivityTimeout: this.options_.inactivityTimeout,
            duration: NaN,
            lastVolume: 1,
            lastPlaybackRate: this.defaultPlaybackRate(),
            media: null,
            src: "",
            source: {},
            sources: [],
            playbackRates: [],
            volume: 1
        }
    }
    ,
    r.techCall_ = function(e, n) {
        this.ready(function() {
            if (e in vv)
                return mv(this.middleware_, this.tech_, e, n);
            if (e in Ku)
                return $u(this.middleware_, this.tech_, e, n);
            try {
                this.tech_ && this.tech_[e](n)
            } catch (s) {
                throw Z(s),
                s
            }
        }, !0)
    }
    ,
    r.techGet_ = function(e) {
        if (!(!this.tech_ || !this.tech_.isReady_)) {
            if (e in gv)
                return pv(this.middleware_, this.tech_, e);
            if (e in Ku)
                return $u(this.middleware_, this.tech_, e);
            try {
                return this.tech_[e]()
            } catch (n) {
                throw this.tech_[e] === void 0 ? (Z("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", n),
                n) : n.name === "TypeError" ? (Z("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", n),
                this.tech_.isReady_ = !1,
                n) : (Z(n),
                n)
            }
        }
    }
    ,
    r.play = function() {
        var e = this
          , n = this.options_.Promise || A.Promise;
        return n ? new n(function(s) {
            e.play_(s)
        }
        ) : this.play_()
    }
    ,
    r.play_ = function(e) {
        var n = this;
        e === void 0 && (e = wt),
        this.playCallbacks_.push(e);
        var s = !!(!this.changingSrc_ && (this.src() || this.currentSrc()));
        if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_),
        this.waitToPlay_ = null),
        !this.isReady_ || !s) {
            this.waitToPlay_ = function(u) {
                n.play_()
            }
            ,
            this.one(["ready", "loadstart"], this.waitToPlay_),
            !s && (zn || Ge) && this.load();
            return
        }
        var o = this.techGet_("play");
        o === null ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(o)
    }
    ,
    r.runPlayTerminatedQueue_ = function() {
        var e = this.playTerminatedQueue_.slice(0);
        this.playTerminatedQueue_ = [],
        e.forEach(function(n) {
            n()
        })
    }
    ,
    r.runPlayCallbacks_ = function(e) {
        var n = this.playCallbacks_.slice(0);
        this.playCallbacks_ = [],
        this.playTerminatedQueue_ = [],
        n.forEach(function(s) {
            s(e)
        })
    }
    ,
    r.pause = function() {
        this.techCall_("pause")
    }
    ,
    r.paused = function() {
        return this.techGet_("paused") !== !1
    }
    ,
    r.played = function() {
        return this.techGet_("played") || Zt(0, 0)
    }
    ,
    r.scrubbing = function(e) {
        if (typeof e > "u")
            return this.scrubbing_;
        this.scrubbing_ = !!e,
        this.techCall_("setScrubbing", this.scrubbing_),
        e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
    }
    ,
    r.currentTime = function(e) {
        if (typeof e < "u") {
            if (e < 0 && (e = 0),
            !this.isReady_ || this.changingSrc_ || !this.tech_ || !this.tech_.isReady_) {
                this.cache_.initTime = e,
                this.off("canplay", this.boundApplyInitTime_),
                this.one("canplay", this.boundApplyInitTime_);
                return
            }
            this.techCall_("setCurrentTime", e),
            this.cache_.initTime = 0;
            return
        }
        return this.cache_.currentTime = this.techGet_("currentTime") || 0,
        this.cache_.currentTime
    }
    ,
    r.applyInitTime_ = function() {
        this.currentTime(this.cache_.initTime)
    }
    ,
    r.duration = function(e) {
        if (e === void 0)
            return this.cache_.duration !== void 0 ? this.cache_.duration : NaN;
        e = parseFloat(e),
        e < 0 && (e = 1 / 0),
        e !== this.cache_.duration && (this.cache_.duration = e,
        e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"),
        isNaN(e) || this.trigger("durationchange"))
    }
    ,
    r.remainingTime = function() {
        return this.duration() - this.currentTime()
    }
    ,
    r.remainingTimeDisplay = function() {
        return Math.floor(this.duration()) - Math.floor(this.currentTime())
    }
    ,
    r.buffered = function() {
        var e = this.techGet_("buffered");
        return (!e || !e.length) && (e = Zt(0, 0)),
        e
    }
    ,
    r.bufferedPercent = function() {
        return Jd(this.buffered(), this.duration())
    }
    ,
    r.bufferedEnd = function() {
        var e = this.buffered()
          , n = this.duration()
          , s = e.end(e.length - 1);
        return s > n && (s = n),
        s
    }
    ,
    r.volume = function(e) {
        var n;
        if (e !== void 0) {
            n = Math.max(0, Math.min(1, parseFloat(e))),
            this.cache_.volume = n,
            this.techCall_("setVolume", n),
            n > 0 && this.lastVolume_(n);
            return
        }
        return n = parseFloat(this.techGet_("volume")),
        isNaN(n) ? 1 : n
    }
    ,
    r.muted = function(e) {
        if (e !== void 0) {
            this.techCall_("setMuted", e);
            return
        }
        return this.techGet_("muted") || !1
    }
    ,
    r.defaultMuted = function(e) {
        return e !== void 0 ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
    }
    ,
    r.lastVolume_ = function(e) {
        if (e !== void 0 && e !== 0) {
            this.cache_.lastVolume = e;
            return
        }
        return this.cache_.lastVolume
    }
    ,
    r.supportsFullScreen = function() {
        return this.techGet_("supportsFullScreen") || !1
    }
    ,
    r.isFullscreen = function(e) {
        if (e !== void 0) {
            var n = this.isFullscreen_;
            this.isFullscreen_ = !!e,
            this.isFullscreen_ !== n && this.fsApi_.prefixed && this.trigger("fullscreenchange"),
            this.toggleFullscreenClass_();
            return
        }
        return this.isFullscreen_
    }
    ,
    r.requestFullscreen = function(e) {
        var n = this.options_.Promise || A.Promise;
        if (n) {
            var s = this;
            return new n(function(o, u) {
                function l() {
                    s.off("fullscreenerror", p),
                    s.off("fullscreenchange", c)
                }
                function c() {
                    l(),
                    o()
                }
                function p(y, S) {
                    l(),
                    u(S)
                }
                s.one("fullscreenchange", c),
                s.one("fullscreenerror", p);
                var g = s.requestFullscreenHelper_(e);
                if (g)
                    return g.then(l, l),
                    g
            }
            )
        }
        return this.requestFullscreenHelper_()
    }
    ,
    r.requestFullscreenHelper_ = function(e) {
        var n = this, s;
        if (this.fsApi_.prefixed || (s = this.options_.fullscreen && this.options_.fullscreen.options || {},
        e !== void 0 && (s = e)),
        this.fsApi_.requestFullscreen) {
            var o = this.el_[this.fsApi_.requestFullscreen](s);
            return o && o.then(function() {
                return n.isFullscreen(!0)
            }, function() {
                return n.isFullscreen(!1)
            }),
            o
        } else
            this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow()
    }
    ,
    r.exitFullscreen = function() {
        var e = this.options_.Promise || A.Promise;
        if (e) {
            var n = this;
            return new e(function(s, o) {
                function u() {
                    n.off("fullscreenerror", c),
                    n.off("fullscreenchange", l)
                }
                function l() {
                    u(),
                    s()
                }
                function c(g, y) {
                    u(),
                    o(y)
                }
                n.one("fullscreenchange", l),
                n.one("fullscreenerror", c);
                var p = n.exitFullscreenHelper_();
                if (p)
                    return p.then(u, u),
                    p
            }
            )
        }
        return this.exitFullscreenHelper_()
    }
    ,
    r.exitFullscreenHelper_ = function() {
        var e = this;
        if (this.fsApi_.requestFullscreen) {
            var n = V[this.fsApi_.exitFullscreen]();
            return n && n.then(function() {
                return e.isFullscreen(!1)
            }),
            n
        } else
            this.tech_.supportsFullScreen() && !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow()
    }
    ,
    r.enterFullWindow = function() {
        this.isFullscreen(!0),
        this.isFullWindow = !0,
        this.docOrigOverflow = V.documentElement.style.overflow,
        Je(V, "keydown", this.boundFullWindowOnEscKey_),
        V.documentElement.style.overflow = "hidden",
        Et(V.body, "vjs-full-window"),
        this.trigger("enterFullWindow")
    }
    ,
    r.fullWindowOnEscKey = function(e) {
        Q.isEventKey(e, "Esc") && this.isFullscreen() === !0 && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen())
    }
    ,
    r.exitFullWindow = function() {
        this.isFullscreen(!1),
        this.isFullWindow = !1,
        Oe(V, "keydown", this.boundFullWindowOnEscKey_),
        V.documentElement.style.overflow = this.docOrigOverflow,
        Ai(V.body, "vjs-full-window"),
        this.trigger("exitFullWindow")
    }
    ,
    r.disablePictureInPicture = function(e) {
        if (e === void 0)
            return this.techGet_("disablePictureInPicture");
        this.techCall_("setDisablePictureInPicture", e),
        this.options_.disablePictureInPicture = e,
        this.trigger("disablepictureinpicturechanged")
    }
    ,
    r.isInPictureInPicture = function(e) {
        if (e !== void 0) {
            this.isInPictureInPicture_ = !!e,
            this.togglePictureInPictureClass_();
            return
        }
        return !!this.isInPictureInPicture_
    }
    ,
    r.requestPictureInPicture = function() {
        if ("pictureInPictureEnabled"in V && this.disablePictureInPicture() === !1)
            return this.techGet_("requestPictureInPicture")
    }
    ,
    r.exitPictureInPicture = function() {
        if ("pictureInPictureEnabled"in V)
            return V.exitPictureInPicture()
    }
    ,
    r.handleKeyDown = function(e) {
        var n = this.options_.userActions;
        if (!(!n || !n.hotkeys)) {
            var s = function(u) {
                var l = u.tagName.toLowerCase();
                if (u.isContentEditable)
                    return !0;
                var c = ["button", "checkbox", "hidden", "radio", "reset", "submit"];
                if (l === "input")
                    return c.indexOf(u.type) === -1;
                var p = ["textarea"];
                return p.indexOf(l) !== -1
            };
            s(this.el_.ownerDocument.activeElement) || (typeof n.hotkeys == "function" ? n.hotkeys.call(this, e) : this.handleHotkeys(e))
        }
    }
    ,
    r.handleHotkeys = function(e) {
        var n = this.options_.userActions ? this.options_.userActions.hotkeys : {}
          , s = n.fullscreenKey
          , o = s === void 0 ? function(x) {
            return Q.isEventKey(x, "f")
        }
        : s
          , u = n.muteKey
          , l = u === void 0 ? function(x) {
            return Q.isEventKey(x, "m")
        }
        : u
          , c = n.playPauseKey
          , p = c === void 0 ? function(x) {
            return Q.isEventKey(x, "k") || Q.isEventKey(x, "Space")
        }
        : c;
        if (o.call(this, e)) {
            e.preventDefault(),
            e.stopPropagation();
            var g = U.getComponent("FullscreenToggle");
            V[this.fsApi_.fullscreenEnabled] !== !1 && g.prototype.handleClick.call(this, e)
        } else if (l.call(this, e)) {
            e.preventDefault(),
            e.stopPropagation();
            var y = U.getComponent("MuteToggle");
            y.prototype.handleClick.call(this, e)
        } else if (p.call(this, e)) {
            e.preventDefault(),
            e.stopPropagation();
            var S = U.getComponent("PlayToggle");
            S.prototype.handleClick.call(this, e)
        }
    }
    ,
    r.canPlayType = function(e) {
        for (var n, s = 0, o = this.options_.techOrder; s < o.length; s++) {
            var u = o[s]
              , l = ue.getTech(u);
            if (l || (l = U.getComponent(u)),
            !l) {
                Z.error('The "' + u + '" tech is undefined. Skipped browser support check for that tech.');
                continue
            }
            if (l.isSupported() && (n = l.canPlayType(e),
            n))
                return n
        }
        return ""
    }
    ,
    r.selectSource = function(e) {
        var n = this, s = this.options_.techOrder.map(function(p) {
            return [p, ue.getTech(p)]
        }).filter(function(p) {
            var g = p[0]
              , y = p[1];
            return y ? y.isSupported() : (Z.error('The "' + g + '" tech is undefined. Skipped browser support check for that tech.'),
            !1)
        }), o = function(g, y, S) {
            var x;
            return g.some(function(b) {
                return y.some(function(P) {
                    if (x = S(b, P),
                    x)
                        return !0
                })
            }),
            x
        }, u, l = function(g) {
            return function(y, S) {
                return g(S, y)
            }
        }, c = function(g, y) {
            var S = g[0]
              , x = g[1];
            if (x.canPlaySource(y, n.options_[S.toLowerCase()]))
                return {
                    source: y,
                    tech: S
                }
        };
        return this.options_.sourceOrder ? u = o(e, s, l(c)) : u = o(s, e, c),
        u || !1
    }
    ,
    r.handleSrc_ = function(e, n) {
        var s = this;
        if (typeof e > "u")
            return this.cache_.src || "";
        this.resetRetryOnError_ && this.resetRetryOnError_();
        var o = Sv(e);
        if (!o.length) {
            this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options_.notSupportedMessage)
                })
            }, 0);
            return
        }
        if (this.changingSrc_ = !0,
        n || (this.cache_.sources = o),
        this.updateSourceCaches_(o[0]),
        fv(this, o[0], function(c, p) {
            s.middleware_ = p,
            n || (s.cache_.sources = o),
            s.updateSourceCaches_(c);
            var g = s.src_(c);
            if (g) {
                if (o.length > 1)
                    return s.handleSrc_(o.slice(1));
                s.changingSrc_ = !1,
                s.setTimeout(function() {
                    this.error({
                        code: 4,
                        message: this.localize(this.options_.notSupportedMessage)
                    })
                }, 0),
                s.triggerReady();
                return
            }
            hv(p, s.tech_)
        }),
        this.options_.retryOnError && o.length > 1) {
            var u = function() {
                s.error(null),
                s.handleSrc_(o.slice(1), !0)
            }
              , l = function() {
                s.off("error", u)
            };
            this.one("error", u),
            this.one("playing", l),
            this.resetRetryOnError_ = function() {
                s.off("error", u),
                s.off("playing", l)
            }
        }
    }
    ,
    r.src = function(e) {
        return this.handleSrc_(e, !1)
    }
    ,
    r.src_ = function(e) {
        var n = this
          , s = this.selectSource([e]);
        return s ? $g(s.tech, this.techName_) ? (this.ready(function() {
            this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src),
            this.changingSrc_ = !1
        }, !0),
        !1) : (this.changingSrc_ = !0,
        this.loadTech_(s.tech, s.source),
        this.tech_.ready(function() {
            n.changingSrc_ = !1
        }),
        !1) : !0
    }
    ,
    r.load = function() {
        this.techCall_("load")
    }
    ,
    r.reset = function() {
        var e = this
          , n = this.options_.Promise || A.Promise;
        if (this.paused() || !n)
            this.doReset_();
        else {
            var s = this.play();
            wt(s.then(function() {
                return e.doReset_()
            }))
        }
    }
    ,
    r.doReset_ = function() {
        this.tech_ && this.tech_.clearTracks("text"),
        this.resetCache_(),
        this.poster(""),
        this.loadTech_(this.options_.techOrder[0], null),
        this.techCall_("reset"),
        this.resetControlBarUI_(),
        Ct(this) && this.trigger("playerreset")
    }
    ,
    r.resetControlBarUI_ = function() {
        this.resetProgressBar_(),
        this.resetPlaybackRate_(),
        this.resetVolumeBar_()
    }
    ,
    r.resetProgressBar_ = function() {
        this.currentTime(0);
        var e = this.controlBar
          , n = e.durationDisplay
          , s = e.remainingTimeDisplay;
        n && n.updateContent(),
        s && s.updateContent()
    }
    ,
    r.resetPlaybackRate_ = function() {
        this.playbackRate(this.defaultPlaybackRate()),
        this.handleTechRateChange_()
    }
    ,
    r.resetVolumeBar_ = function() {
        this.volume(1),
        this.trigger("volumechange")
    }
    ,
    r.currentSources = function() {
        var e = this.currentSource()
          , n = [];
        return Object.keys(e).length !== 0 && n.push(e),
        this.cache_.sources || n
    }
    ,
    r.currentSource = function() {
        return this.cache_.source || {}
    }
    ,
    r.currentSrc = function() {
        return this.currentSource() && this.currentSource().src || ""
    }
    ,
    r.currentType = function() {
        return this.currentSource() && this.currentSource().type || ""
    }
    ,
    r.preload = function(e) {
        if (e !== void 0) {
            this.techCall_("setPreload", e),
            this.options_.preload = e;
            return
        }
        return this.techGet_("preload")
    }
    ,
    r.autoplay = function(e) {
        if (e === void 0)
            return this.options_.autoplay || !1;
        var n;
        typeof e == "string" && /(any|play|muted)/.test(e) || e === !0 && this.options_.normalizeAutoplay ? (this.options_.autoplay = e,
        this.manualAutoplay_(typeof e == "string" ? e : "play"),
        n = !1) : e ? this.options_.autoplay = !0 : this.options_.autoplay = !1,
        n = typeof n > "u" ? this.options_.autoplay : n,
        this.tech_ && this.techCall_("setAutoplay", n)
    }
    ,
    r.playsinline = function(e) {
        return e !== void 0 ? (this.techCall_("setPlaysinline", e),
        this.options_.playsinline = e,
        this) : this.techGet_("playsinline")
    }
    ,
    r.loop = function(e) {
        if (e !== void 0) {
            this.techCall_("setLoop", e),
            this.options_.loop = e;
            return
        }
        return this.techGet_("loop")
    }
    ,
    r.poster = function(e) {
        if (e === void 0)
            return this.poster_;
        e || (e = ""),
        e !== this.poster_ && (this.poster_ = e,
        this.techCall_("setPoster", e),
        this.isPosterFromTech_ = !1,
        this.trigger("posterchange"))
    }
    ,
    r.handleTechPosterChange_ = function() {
        if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
            var e = this.tech_.poster() || "";
            e !== this.poster_ && (this.poster_ = e,
            this.isPosterFromTech_ = !0,
            this.trigger("posterchange"))
        }
    }
    ,
    r.controls = function(e) {
        if (e === void 0)
            return !!this.controls_;
        e = !!e,
        this.controls_ !== e && (this.controls_ = e,
        this.usingNativeControls() && this.techCall_("setControls", e),
        this.controls_ ? (this.removeClass("vjs-controls-disabled"),
        this.addClass("vjs-controls-enabled"),
        this.trigger("controlsenabled"),
        this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"),
        this.addClass("vjs-controls-disabled"),
        this.trigger("controlsdisabled"),
        this.usingNativeControls() || this.removeTechControlsListeners_()))
    }
    ,
    r.usingNativeControls = function(e) {
        if (e === void 0)
            return !!this.usingNativeControls_;
        e = !!e,
        this.usingNativeControls_ !== e && (this.usingNativeControls_ = e,
        this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"),
        this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"),
        this.trigger("usingcustomcontrols")))
    }
    ,
    r.error = function(e) {
        if (e === void 0)
            return this.error_ || null;
        if (this.options_.suppressNotSupportedError && e && e.code === 4) {
            var n = function() {
                this.error(e)
            };
            this.options_.suppressNotSupportedError = !1,
            this.any(["click", "touchstart"], n),
            this.one("loadstart", function() {
                this.off(["click", "touchstart"], n)
            });
            return
        }
        if (e === null) {
            this.error_ = e,
            this.removeClass("vjs-error"),
            this.errorDisplay && this.errorDisplay.close();
            return
        }
        this.error_ = new je(e),
        this.addClass("vjs-error"),
        Z.error("(CODE:" + this.error_.code + " " + je.errorTypes[this.error_.code] + ")", this.error_.message, this.error_),
        this.trigger("error")
    }
    ,
    r.reportUserActivity = function(e) {
        this.userActivity_ = !0
    }
    ,
    r.userActive = function(e) {
        if (e === void 0)
            return this.userActive_;
        if (e = !!e,
        e !== this.userActive_) {
            if (this.userActive_ = e,
            this.userActive_) {
                this.userActivity_ = !0,
                this.removeClass("vjs-user-inactive"),
                this.addClass("vjs-user-active"),
                this.trigger("useractive");
                return
            }
            this.tech_ && this.tech_.one("mousemove", function(n) {
                n.stopPropagation(),
                n.preventDefault()
            }),
            this.userActivity_ = !1,
            this.removeClass("vjs-user-active"),
            this.addClass("vjs-user-inactive"),
            this.trigger("userinactive")
        }
    }
    ,
    r.listenForUserActivity_ = function() {
        var e, n, s, o = oe(this, this.reportUserActivity), u = function(S) {
            (S.screenX !== n || S.screenY !== s) && (n = S.screenX,
            s = S.screenY,
            o())
        }, l = function() {
            o(),
            this.clearInterval(e),
            e = this.setInterval(o, 250)
        }, c = function(S) {
            o(),
            this.clearInterval(e)
        };
        this.on("mousedown", l),
        this.on("mousemove", u),
        this.on("mouseup", c),
        this.on("mouseleave", c);
        var p = this.getChild("controlBar");
        p && !Ge && !It && (p.on("mouseenter", function(y) {
            this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout,
            this.player().options_.inactivityTimeout = 0
        }),
        p.on("mouseleave", function(y) {
            this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
        })),
        this.on("keydown", o),
        this.on("keyup", o);
        var g;
        this.setInterval(function() {
            if (this.userActivity_) {
                this.userActivity_ = !1,
                this.userActive(!0),
                this.clearTimeout(g);
                var y = this.options_.inactivityTimeout;
                y <= 0 || (g = this.setTimeout(function() {
                    this.userActivity_ || this.userActive(!1)
                }, y))
            }
        }, 250)
    }
    ,
    r.playbackRate = function(e) {
        if (e !== void 0) {
            this.techCall_("setPlaybackRate", e);
            return
        }
        return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1
    }
    ,
    r.defaultPlaybackRate = function(e) {
        return e !== void 0 ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
    }
    ,
    r.isAudio = function(e) {
        if (e !== void 0) {
            this.isAudio_ = !!e;
            return
        }
        return !!this.isAudio_
    }
    ,
    r.addTextTrack = function(e, n, s) {
        if (this.tech_)
            return this.tech_.addTextTrack(e, n, s)
    }
    ,
    r.addRemoteTextTrack = function(e, n) {
        if (this.tech_)
            return this.tech_.addRemoteTextTrack(e, n)
    }
    ,
    r.removeRemoteTextTrack = function(e) {
        e === void 0 && (e = {});
        var n = e
          , s = n.track;
        if (s || (s = e),
        this.tech_)
            return this.tech_.removeRemoteTextTrack(s)
    }
    ,
    r.getVideoPlaybackQuality = function() {
        return this.techGet_("getVideoPlaybackQuality")
    }
    ,
    r.videoWidth = function() {
        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
    }
    ,
    r.videoHeight = function() {
        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
    }
    ,
    r.language = function(e) {
        if (e === void 0)
            return this.language_;
        this.language_ !== String(e).toLowerCase() && (this.language_ = String(e).toLowerCase(),
        Ct(this) && this.trigger("languagechange"))
    }
    ,
    r.languages = function() {
        return fe(t.prototype.options_.languages, this.languages_)
    }
    ,
    r.toJSON = function() {
        var e = fe(this.options_)
          , n = e.tracks;
        e.tracks = [];
        for (var s = 0; s < n.length; s++) {
            var o = n[s];
            o = fe(o),
            o.player = void 0,
            e.tracks[s] = o
        }
        return e
    }
    ,
    r.createModal = function(e, n) {
        var s = this;
        n = n || {},
        n.content = e || "";
        var o = new Br(this,n);
        return this.addChild(o),
        o.on("dispose", function() {
            s.removeChild(o)
        }),
        o.open(),
        o
    }
    ,
    r.updateCurrentBreakpoint_ = function() {
        if (this.responsive())
            for (var e = this.currentBreakpoint(), n = this.currentWidth(), s = 0; s < ss.length; s++) {
                var o = ss[s]
                  , u = this.breakpoints_[o];
                if (n <= u) {
                    if (e === o)
                        return;
                    e && this.removeClass(fn[e]),
                    this.addClass(fn[o]),
                    this.breakpoint_ = o;
                    break
                }
            }
    }
    ,
    r.removeCurrentBreakpoint_ = function() {
        var e = this.currentBreakpointClass();
        this.breakpoint_ = "",
        e && this.removeClass(e)
    }
    ,
    r.breakpoints = function(e) {
        return e === void 0 ? pe(this.breakpoints_) : (this.breakpoint_ = "",
        this.breakpoints_ = pe({}, Zv, e),
        this.updateCurrentBreakpoint_(),
        pe(this.breakpoints_))
    }
    ,
    r.responsive = function(e) {
        if (e === void 0)
            return this.responsive_;
        e = !!e;
        var n = this.responsive_;
        if (e !== n)
            return this.responsive_ = e,
            e ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_),
            this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_),
            this.removeCurrentBreakpoint_()),
            e
    }
    ,
    r.currentBreakpoint = function() {
        return this.breakpoint_
    }
    ,
    r.currentBreakpointClass = function() {
        return fn[this.breakpoint_] || ""
    }
    ,
    r.loadMedia = function(e, n) {
        var s = this;
        if (!(!e || typeof e != "object")) {
            this.reset(),
            this.cache_.media = fe(e);
            var o = this.cache_.media
              , u = o.artwork
              , l = o.poster
              , c = o.src
              , p = o.textTracks;
            !u && l && (this.cache_.media.artwork = [{
                src: l,
                type: En(l)
            }]),
            c && this.src(c),
            l && this.poster(l),
            Array.isArray(p) && p.forEach(function(g) {
                return s.addRemoteTextTrack(g, !1)
            }),
            this.ready(n)
        }
    }
    ,
    r.getMedia = function() {
        if (!this.cache_.media) {
            var e = this.poster()
              , n = this.currentSources()
              , s = Array.prototype.map.call(this.remoteTextTracks(), function(u) {
                return {
                    kind: u.kind,
                    label: u.label,
                    language: u.language,
                    src: u.src
                }
            })
              , o = {
                src: n,
                textTracks: s
            };
            return e && (o.poster = e,
            o.artwork = [{
                src: o.poster,
                type: En(o.poster)
            }]),
            o
        }
        return fe(this.cache_.media)
    }
    ,
    t.getTagSettings = function(e) {
        var n = {
            sources: [],
            tracks: []
        }
          , s = bt(e)
          , o = s["data-setup"];
        if (Jt(e, "vjs-fill") && (s.fill = !0),
        Jt(e, "vjs-fluid") && (s.fluid = !0),
        o !== null) {
            var u = rp(o || "{}")
              , l = u[0]
              , c = u[1];
            l && Z.error(l),
            pe(s, c)
        }
        if (pe(n, s),
        e.hasChildNodes())
            for (var p = e.childNodes, g = 0, y = p.length; g < y; g++) {
                var S = p[g]
                  , x = S.nodeName.toLowerCase();
                x === "source" ? n.sources.push(bt(S)) : x === "track" && n.tracks.push(bt(S))
            }
        return n
    }
    ,
    r.flexNotSupported_ = function() {
        var e = V.createElement("i");
        return !("flexBasis"in e.style || "webkitFlexBasis"in e.style || "mozFlexBasis"in e.style || "msFlexBasis"in e.style || "msFlexOrder"in e.style)
    }
    ,
    r.debug = function(e) {
        if (e === void 0)
            return this.debugEnabled_;
        e ? (this.trigger("debugon"),
        this.previousLogLevel_ = this.log.level,
        this.log.level("debug"),
        this.debugEnabled_ = !0) : (this.trigger("debugoff"),
        this.log.level(this.previousLogLevel_),
        this.previousLogLevel_ = void 0,
        this.debugEnabled_ = !1)
    }
    ,
    r.playbackRates = function(e) {
        if (e === void 0)
            return this.cache_.playbackRates;
        Array.isArray(e) && e.every(function(n) {
            return typeof n == "number"
        }) && (this.cache_.playbackRates = e,
        this.trigger("playbackrateschange"))
    }
    ,
    t
}(U);
Ne.names.forEach(function(a) {
    var t = Ne[a];
    xe.prototype[t.getterName] = function() {
        return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass,
        this[t.privateName])
    }
});
xe.prototype.crossorigin = xe.prototype.crossOrigin;
xe.players = {};
var ei = A.navigator;
xe.prototype.options_ = {
    techOrder: ue.defaultTechOrder_,
    html5: {},
    inactivityTimeout: 2e3,
    playbackRates: [],
    liveui: !1,
    children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
    language: ei && (ei.languages && ei.languages[0] || ei.userLanguage || ei.language) || "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this media.",
    normalizeAutoplay: !1,
    fullscreen: {
        options: {
            navigationUI: "hide"
        }
    },
    breakpoints: {},
    responsive: !1
};
["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(a) {
    xe.prototype[a] = function() {
        return this.techGet_(a)
    }
});
Ac.forEach(function(a) {
    xe.prototype["handleTech" + Te(a) + "_"] = function() {
        return this.trigger(a)
    }
});
U.registerComponent("Player", xe);
var kn = "plugin"
  , xr = "activePlugins_"
  , yr = {}
  , An = function(t) {
    return yr.hasOwnProperty(t)
}
  , hn = function(t) {
    return An(t) ? yr[t] : void 0
}
  , Pc = function(t, r) {
    t[xr] = t[xr] || {},
    t[xr][r] = !0
}
  , Pn = function(t, r, i) {
    var e = (i ? "before" : "") + "pluginsetup";
    t.trigger(e, r),
    t.trigger(e + ":" + r.name, r)
}
  , e0 = function(t, r) {
    var i = function() {
        Pn(this, {
            name: t,
            plugin: r,
            instance: null
        }, !0);
        var n = r.apply(this, arguments);
        return Pc(this, t),
        Pn(this, {
            name: t,
            plugin: r,
            instance: n
        }),
        n
    };
    return Object.keys(r).forEach(function(e) {
        i[e] = r[e]
    }),
    i
}
  , ul = function(t, r) {
    return r.prototype.name = t,
    function() {
        Pn(this, {
            name: t,
            plugin: r,
            instance: null
        }, !0);
        for (var i = arguments.length, e = new Array(i), n = 0; n < i; n++)
            e[n] = arguments[n];
        var s = Hp(r, [this].concat(e));
        return this[t] = function() {
            return s
        }
        ,
        Pn(this, s.getEventHash()),
        s
    }
}
  , vt = function() {
    function a(r) {
        if (this.constructor === a)
            throw new Error("Plugin must be sub-classed; not directly instantiated.");
        this.player = r,
        this.log || (this.log = this.player.log.createLogger(this.name)),
        Ks(this),
        delete this.trigger,
        Qd(this, this.constructor.defaultState),
        Pc(r, this.name),
        this.dispose = this.dispose.bind(this),
        r.on("dispose", this.dispose)
    }
    var t = a.prototype;
    return t.version = function() {
        return this.constructor.VERSION
    }
    ,
    t.getEventHash = function(i) {
        return i === void 0 && (i = {}),
        i.name = this.name,
        i.plugin = this.constructor,
        i.instance = this,
        i
    }
    ,
    t.trigger = function(i, e) {
        return e === void 0 && (e = {}),
        Ur(this.eventBusEl_, i, this.getEventHash(e))
    }
    ,
    t.handleStateChanged = function(i) {}
    ,
    t.dispose = function() {
        var i = this.name
          , e = this.player;
        this.trigger("dispose"),
        this.off(),
        e.off("dispose", this.dispose),
        e[xr][i] = !1,
        this.player = this.state = null,
        e[i] = ul(i, yr[i])
    }
    ,
    a.isBasic = function(i) {
        var e = typeof i == "string" ? hn(i) : i;
        return typeof e == "function" && !a.prototype.isPrototypeOf(e.prototype)
    }
    ,
    a.registerPlugin = function(i, e) {
        if (typeof i != "string")
            throw new Error('Illegal plugin name, "' + i + '", must be a string, was ' + typeof i + ".");
        if (An(i))
            Z.warn('A plugin named "' + i + '" already exists. You may want to avoid re-registering plugins!');
        else if (xe.prototype.hasOwnProperty(i))
            throw new Error('Illegal plugin name, "' + i + '", cannot share a name with an existing player method!');
        if (typeof e != "function")
            throw new Error('Illegal plugin for "' + i + '", must be a function, was ' + typeof e + ".");
        return yr[i] = e,
        i !== kn && (a.isBasic(e) ? xe.prototype[i] = e0(i, e) : xe.prototype[i] = ul(i, e)),
        e
    }
    ,
    a.deregisterPlugin = function(i) {
        if (i === kn)
            throw new Error("Cannot de-register base plugin.");
        An(i) && (delete yr[i],
        delete xe.prototype[i])
    }
    ,
    a.getPlugins = function(i) {
        i === void 0 && (i = Object.keys(yr));
        var e;
        return i.forEach(function(n) {
            var s = hn(n);
            s && (e = e || {},
            e[n] = s)
        }),
        e
    }
    ,
    a.getPluginVersion = function(i) {
        var e = hn(i);
        return e && e.VERSION || ""
    }
    ,
    a
}();
vt.getPlugin = hn;
vt.BASE_PLUGIN_NAME = kn;
vt.registerPlugin(kn, vt);
xe.prototype.usingPlugin = function(a) {
    return !!this[xr] && this[xr][a] === !0
}
;
xe.prototype.hasPlugin = function(a) {
    return !!An(a)
}
;
var t0 = function(t, r) {
    r === void 0 && (r = {});
    var i = function() {
        t.apply(this, arguments)
    }
      , e = {};
    typeof r == "object" ? (r.constructor !== Object.prototype.constructor && (i = r.constructor),
    e = r) : typeof r == "function" && (i = r),
    jp(i, t),
    t && (i.super_ = t);
    for (var n in e)
        e.hasOwnProperty(n) && (i.prototype[n] = e[n]);
    return i
}
  , Ic = function(t) {
    return t.indexOf("#") === 0 ? t.slice(1) : t
};
function I(a, t, r) {
    var i = I.getPlayer(a);
    if (i)
        return t && Z.warn('Player "' + a + '" is already initialised. Options will not be applied.'),
        r && i.ready(r),
        i;
    var e = typeof a == "string" ? Ft("#" + Ic(a)) : a;
    if (!Nr(e))
        throw new TypeError("The element or ID supplied is not valid. (videojs)");
    (!e.ownerDocument.defaultView || !e.ownerDocument.body.contains(e)) && Z.warn("The element supplied is not included in the DOM"),
    t = t || {},
    I.hooks("beforesetup").forEach(function(s) {
        var o = s(e, fe(t));
        if (!Mt(o) || Array.isArray(o)) {
            Z.error("please return an object in beforesetup hooks");
            return
        }
        t = fe(t, o)
    });
    var n = U.getComponent("Player");
    return i = new n(e,t,r),
    I.hooks("setup").forEach(function(s) {
        return s(i)
    }),
    i
}
I.hooks_ = {};
I.hooks = function(a, t) {
    return I.hooks_[a] = I.hooks_[a] || [],
    t && (I.hooks_[a] = I.hooks_[a].concat(t)),
    I.hooks_[a]
}
;
I.hook = function(a, t) {
    I.hooks(a, t)
}
;
I.hookOnce = function(a, t) {
    I.hooks(a, [].concat(t).map(function(r) {
        var i = function e() {
            return I.removeHook(a, e),
            r.apply(void 0, arguments)
        };
        return i
    }))
}
;
I.removeHook = function(a, t) {
    var r = I.hooks(a).indexOf(t);
    return r <= -1 ? !1 : (I.hooks_[a] = I.hooks_[a].slice(),
    I.hooks_[a].splice(r, 1),
    !0)
}
;
if (A.VIDEOJS_NO_DYNAMIC_STYLE !== !0 && Fr()) {
    var an = Ft(".vjs-styles-defaults");
    if (!an) {
        an = qd("vjs-styles-defaults");
        var ja = Ft("head");
        ja && ja.insertBefore(an, ja.firstChild),
        zd(an, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid {
        padding-top: 56.25%
      }
    `)
    }
}
es(1, I);
I.VERSION = xd;
I.options = xe.prototype.options_;
I.getPlayers = function() {
    return xe.players
}
;
I.getPlayer = function(a) {
    var t = xe.players, r;
    if (typeof a == "string") {
        var i = Ic(a)
          , e = t[i];
        if (e)
            return e;
        r = Ft("#" + i)
    } else
        r = a;
    if (Nr(r)) {
        var n = r
          , s = n.player
          , o = n.playerId;
        if (s || t[o])
            return s || t[o]
    }
}
;
I.getAllPlayers = function() {
    return Object.keys(xe.players).map(function(a) {
        return xe.players[a]
    }).filter(Boolean)
}
;
I.players = xe.players;
I.getComponent = U.getComponent;
I.registerComponent = function(a, t) {
    ue.isTech(t) && Z.warn("The " + a + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),
    U.registerComponent.call(U, a, t)
}
;
I.getTech = ue.getTech;
I.registerTech = ue.registerTech;
I.use = cv;
Object.defineProperty(I, "middleware", {
    value: {},
    writeable: !1,
    enumerable: !0
});
Object.defineProperty(I.middleware, "TERMINATOR", {
    value: Sn,
    writeable: !1,
    enumerable: !0
});
I.browser = Mg;
I.TOUCH_ENABLED = Pr;
I.extend = t0;
I.mergeOptions = fe;
I.bind = oe;
I.registerPlugin = vt.registerPlugin;
I.deregisterPlugin = vt.deregisterPlugin;
I.plugin = function(a, t) {
    return Z.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),
    vt.registerPlugin(a, t)
}
;
I.getPlugins = vt.getPlugins;
I.getPlugin = vt.getPlugin;
I.getPluginVersion = vt.getPluginVersion;
I.addLanguage = function(a, t) {
    var r;
    return a = ("" + a).toLowerCase(),
    I.options.languages = fe(I.options.languages, (r = {},
    r[a] = t,
    r)),
    I.options.languages[a]
}
;
I.log = Z;
I.createLogger = Ed;
I.createTimeRange = I.createTimeRanges = Zt;
I.formatTime = Rr;
I.setFormatTime = Iv;
I.resetFormatTime = Dv;
I.parseUrl = Ys;
I.isCrossOrigin = Jn;
I.EventTarget = ke;
I.on = Je;
I.one = Yn;
I.off = Oe;
I.trigger = Ur;
I.xhr = Rl;
I.TextTrack = Pi;
I.AudioTrack = tc;
I.VideoTrack = rc;
["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(a) {
    I[a] = function() {
        return Z.warn("videojs." + a + "() is deprecated; use videojs.dom." + a + "() instead"),
        Wd[a].apply(null, arguments)
    }
});
I.computedStyle = _i;
I.dom = Wd;
I.url = ov;
I.defineLazyProperty = go;
I.addLanguage("en", {
    "Non-Fullscreen": "Exit Fullscreen"
});
/*! @name @videojs/http-streaming @version 2.9.1 @license Apache-2.0 */
var st = Bn
  , In = function(t, r, i) {
    return t && i && i.responseURL && r !== i.responseURL ? i.responseURL : r
}
  , dt = function(t) {
    return I.log.debug ? I.log.debug.bind(I, "VHS:", t + " >") : function() {}
}
  , rr = 1 / 30
  , mt = rr * 3
  , Dc = function(t, r) {
    var i = [], e;
    if (t && t.length)
        for (e = 0; e < t.length; e++)
            r(t.start(e), t.end(e)) && i.push([t.start(e), t.end(e)]);
    return I.createTimeRanges(i)
}
  , oi = function(t, r) {
    return Dc(t, function(i, e) {
        return i - mt <= r && e + mt >= r
    })
}
  , Va = function(t, r) {
    return Dc(t, function(i) {
        return i - rr >= r
    })
}
  , r0 = function(t) {
    if (t.length < 2)
        return I.createTimeRanges();
    for (var r = [], i = 1; i < t.length; i++) {
        var e = t.end(i - 1)
          , n = t.start(i);
        r.push([e, n])
    }
    return I.createTimeRanges(r)
}
  , i0 = function(t, r) {
    var i = null
      , e = null
      , n = 0
      , s = []
      , o = [];
    if (!t || !t.length || !r || !r.length)
        return I.createTimeRange();
    for (var u = t.length; u--; )
        s.push({
            time: t.start(u),
            type: "start"
        }),
        s.push({
            time: t.end(u),
            type: "end"
        });
    for (u = r.length; u--; )
        s.push({
            time: r.start(u),
            type: "start"
        }),
        s.push({
            time: r.end(u),
            type: "end"
        });
    for (s.sort(function(l, c) {
        return l.time - c.time
    }),
    u = 0; u < s.length; u++)
        s[u].type === "start" ? (n++,
        n === 2 && (i = s[u].time)) : s[u].type === "end" && (n--,
        n === 1 && (e = s[u].time)),
        i !== null && e !== null && (o.push([i, e]),
        i = null,
        e = null);
    return I.createTimeRanges(o)
}
  , Oc = function(t) {
    var r = [];
    if (!t || !t.length)
        return "";
    for (var i = 0; i < t.length; i++)
        r.push(t.start(i) + " => " + t.end(i));
    return r.join(", ")
}
  , n0 = function(t, r, i) {
    i === void 0 && (i = 1);
    var e = t.length ? t.end(t.length - 1) : 0;
    return (e - r) / i
}
  , Yt = function(t) {
    for (var r = [], i = 0; i < t.length; i++)
        r.push({
            start: t.start(i),
            end: t.end(i)
        });
    return r
}
  , a0 = function(t, r) {
    if (t === r)
        return !1;
    if (!t && r || !r && t || t.length !== r.length)
        return !0;
    for (var i = 0; i < t.length; i++)
        if (t.start(i) !== r.start(i) || t.end(i) !== r.end(i))
            return !0;
    return !1
}
  , ll = function(t) {
    if (!(!t || !t.length || !t.end))
        return t.end(t.length - 1)
}
  , dl = I.createTimeRange
  , os = function(t) {
    return (t.segments || []).reduce(function(r, i, e) {
        return i.parts ? i.parts.forEach(function(n, s) {
            r.push({
                duration: n.duration,
                segmentIndex: e,
                partIndex: s,
                part: n,
                segment: i
            })
        }) : r.push({
            duration: i.duration,
            segmentIndex: e,
            partIndex: null,
            segment: i,
            part: null
        }),
        r
    }, [])
}
  , Lc = function(t) {
    var r = t.segments && t.segments.length && t.segments[t.segments.length - 1];
    return r && r.parts || []
}
  , Rc = function(t) {
    var r = t.preloadSegment;
    if (r) {
        var i = r.parts
          , e = r.preloadHints
          , n = (e || []).reduce(function(s, o) {
            return s + (o.type === "PART" ? 1 : 0)
        }, 0);
        return n += i && i.length ? i.length : 0,
        n
    }
}
  , Mc = function(t, r) {
    if (r.endList)
        return 0;
    if (t && t.suggestedPresentationDelay)
        return t.suggestedPresentationDelay;
    var i = Lc(r).length > 0;
    return i && r.serverControl && r.serverControl.partHoldBack ? r.serverControl.partHoldBack : i && r.partTargetDuration ? r.partTargetDuration * 3 : r.serverControl && r.serverControl.holdBack ? r.serverControl.holdBack : r.targetDuration ? r.targetDuration * 3 : 0
}
  , s0 = function(t, r) {
    var i = 0
      , e = r - t.mediaSequence
      , n = t.segments[e];
    if (n) {
        if (typeof n.start < "u")
            return {
                result: n.start,
                precise: !0
            };
        if (typeof n.end < "u")
            return {
                result: n.end - n.duration,
                precise: !0
            }
    }
    for (; e--; ) {
        if (n = t.segments[e],
        typeof n.end < "u")
            return {
                result: i + n.end,
                precise: !0
            };
        if (i += n.duration,
        typeof n.start < "u")
            return {
                result: i + n.start,
                precise: !0
            }
    }
    return {
        result: i,
        precise: !1
    }
}
  , o0 = function(t, r) {
    for (var i = 0, e, n = r - t.mediaSequence; n < t.segments.length; n++) {
        if (e = t.segments[n],
        typeof e.start < "u")
            return {
                result: e.start - i,
                precise: !0
            };
        if (i += e.duration,
        typeof e.end < "u")
            return {
                result: e.end - i,
                precise: !0
            }
    }
    return {
        result: -1,
        precise: !1
    }
}
  , Fc = function(t, r, i) {
    if (typeof r > "u" && (r = t.mediaSequence + t.segments.length),
    r < t.mediaSequence)
        return 0;
    var e = s0(t, r);
    if (e.precise)
        return e.result;
    var n = o0(t, r);
    return n.precise ? n.result : e.result + i
}
  , Nc = function(t, r, i) {
    if (!t)
        return 0;
    if (typeof i != "number" && (i = 0),
    typeof r > "u") {
        if (t.totalDuration)
            return t.totalDuration;
        if (!t.endList)
            return A.Infinity
    }
    return Fc(t, r, i)
}
  , ci = function(t) {
    var r = t.defaultDuration
      , i = t.durationList
      , e = t.startIndex
      , n = t.endIndex
      , s = 0;
    if (e > n) {
        var o = [n, e];
        e = o[0],
        n = o[1]
    }
    if (e < 0) {
        for (var u = e; u < Math.min(0, n); u++)
            s += r;
        e = 0
    }
    for (var l = e; l < n; l++)
        s += i[l].duration;
    return s
}
  , Uc = function(t, r, i, e) {
    if (!t || !t.segments)
        return null;
    if (t.endList)
        return Nc(t);
    if (r === null)
        return null;
    r = r || 0;
    var n = Fc(t, t.mediaSequence + t.segments.length, r);
    return i && (e = typeof e == "number" ? e : Mc(null, t),
    n -= e),
    Math.max(0, n)
}
  , u0 = function(t, r, i) {
    var e = !0
      , n = r || 0
      , s = Uc(t, r, e, i);
    return s === null ? dl() : dl(n, s)
}
  , l0 = function(t) {
    for (var r = t.playlist, i = t.currentTime, e = t.startingSegmentIndex, n = t.startingPartIndex, s = t.startTime, o = i - s, u = os(r), l = 0, c = 0; c < u.length; c++) {
        var p = u[c];
        if (e === p.segmentIndex && !(typeof n == "number" && typeof p.partIndex == "number" && n !== p.partIndex)) {
            l = c;
            break
        }
    }
    if (o < 0) {
        if (l > 0)
            for (var g = l - 1; g >= 0; g--) {
                var y = u[g];
                if (o += y.duration,
                o + rr > 0)
                    return {
                        partIndex: y.partIndex,
                        segmentIndex: y.segmentIndex,
                        startTime: s - ci({
                            defaultDuration: r.targetDuration,
                            durationList: u,
                            startIndex: l,
                            endIndex: g
                        })
                    }
            }
        return {
            partIndex: u[0] && u[0].partIndex || null,
            segmentIndex: u[0] && u[0].segmentIndex || 0,
            startTime: i
        }
    }
    if (l < 0) {
        for (var S = l; S < 0; S++)
            if (o -= r.targetDuration,
            o < 0)
                return {
                    partIndex: u[0] && u[0].partIndex || null,
                    segmentIndex: u[0] && u[0].segmentIndex || 0,
                    startTime: i
                };
        l = 0
    }
    for (var x = l; x < u.length; x++) {
        var b = u[x];
        if (o -= b.duration,
        o - rr < 0)
            return {
                partIndex: b.partIndex,
                segmentIndex: b.segmentIndex,
                startTime: s + ci({
                    defaultDuration: r.targetDuration,
                    durationList: u,
                    startIndex: l,
                    endIndex: x
                })
            }
    }
    return {
        segmentIndex: u[u.length - 1].segmentIndex,
        partIndex: u[u.length - 1].partIndex,
        startTime: i
    }
}
  , Bc = function(t) {
    return t.excludeUntil && t.excludeUntil > Date.now()
}
  , vo = function(t) {
    return t.excludeUntil && t.excludeUntil === 1 / 0
}
  , ra = function(t) {
    var r = Bc(t);
    return !t.disabled && !r
}
  , d0 = function(t) {
    return t.disabled
}
  , c0 = function(t) {
    for (var r = 0; r < t.segments.length; r++)
        if (t.segments[r].key)
            return !0;
    return !1
}
  , Hc = function(t, r) {
    return r.attributes && r.attributes[t]
}
  , f0 = function(t, r, i, e) {
    if (e === void 0 && (e = 0),
    !Hc("BANDWIDTH", i))
        return NaN;
    var n = t * i.attributes.BANDWIDTH;
    return (n - e * 8) / r
}
  , us = function(t, r) {
    if (t.playlists.length === 1)
        return !0;
    var i = r.attributes.BANDWIDTH || Number.MAX_VALUE;
    return t.playlists.filter(function(e) {
        return ra(e) ? (e.attributes.BANDWIDTH || 0) < i : !1
    }).length === 0
}
  , _o = function(t, r) {
    return !t && !r || !t && r || t && !r ? !1 : !!(t === r || t.id && r.id && t.id === r.id || t.resolvedUri && r.resolvedUri && t.resolvedUri === r.resolvedUri || t.uri && r.uri && t.uri === r.uri)
}
  , cl = function(t, r) {
    var i = t && t.mediaGroups && t.mediaGroups.AUDIO || {}
      , e = !1;
    for (var n in i) {
        for (var s in i[n])
            if (e = r(i[n][s]),
            e)
                break;
        if (e)
            break
    }
    return !!e
}
  , ia = function(t) {
    if (!t || !t.playlists || !t.playlists.length) {
        var r = cl(t, function(s) {
            return s.playlists && s.playlists.length || s.uri
        });
        return r
    }
    for (var i = function(o) {
        var u = t.playlists[o]
          , l = u.attributes && u.attributes.CODECS;
        if (l && l.split(",").every(function(p) {
            return Vl(p)
        }))
            return "continue";
        var c = cl(t, function(p) {
            return _o(u, p)
        });
        return c ? "continue" : {
            v: !1
        }
    }, e = 0; e < t.playlists.length; e++) {
        var n = i(e);
        if (n !== "continue" && typeof n == "object")
            return n.v
    }
    return !0
}
  , We = {
    liveEdgeDelay: Mc,
    duration: Nc,
    seekable: u0,
    getMediaInfoForTime: l0,
    isEnabled: ra,
    isDisabled: d0,
    isBlacklisted: Bc,
    isIncompatible: vo,
    playlistEnd: Uc,
    isAes: c0,
    hasAttribute: Hc,
    estimateSegmentRequestTime: f0,
    isLowestEnabledRendition: us,
    isAudioOnly: ia,
    playlistMatch: _o
}
  , jc = I.log
  , yo = function(t, r) {
    return t + "-" + r
}
  , h0 = function(t) {
    var r = t.onwarn
      , i = t.oninfo
      , e = t.manifestString
      , n = t.customTagParsers
      , s = n === void 0 ? [] : n
      , o = t.customTagMappers
      , u = o === void 0 ? [] : o
      , l = t.experimentalLLHLS
      , c = new Xp;
    r && c.on("warn", r),
    i && c.on("info", i),
    s.forEach(function(x) {
        return c.addParser(x)
    }),
    u.forEach(function(x) {
        return c.addTagMapper(x)
    }),
    c.push(e),
    c.end();
    var p = c.manifest;
    if (l || (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function(x) {
        p.hasOwnProperty(x) && delete p[x]
    }),
    p.segments && p.segments.forEach(function(x) {
        ["parts", "preloadHints"].forEach(function(b) {
            x.hasOwnProperty(b) && delete x[b]
        })
    })),
    !p.targetDuration) {
        var g = 10;
        p.segments && p.segments.length && (g = p.segments.reduce(function(x, b) {
            return Math.max(x, b.duration)
        }, 0)),
        r && r("manifest has no targetDuration defaulting to " + g),
        p.targetDuration = g
    }
    var y = Lc(p);
    if (y.length && !p.partTargetDuration) {
        var S = y.reduce(function(x, b) {
            return Math.max(x, b.duration)
        }, 0);
        r && (r("manifest has no partTargetDuration defaulting to " + S),
        jc.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")),
        p.partTargetDuration = S
    }
    return p
}
  , Oi = function(t, r) {
    t.mediaGroups && ["AUDIO", "SUBTITLES"].forEach(function(i) {
        if (t.mediaGroups[i])
            for (var e in t.mediaGroups[i])
                for (var n in t.mediaGroups[i][e]) {
                    var s = t.mediaGroups[i][e][n];
                    r(s, i, e, n)
                }
    })
}
  , Vc = function(t) {
    var r = t.playlist
      , i = t.uri
      , e = t.id;
    r.id = e,
    r.playlistErrors_ = 0,
    i && (r.uri = i),
    r.attributes = r.attributes || {}
}
  , p0 = function(t) {
    for (var r = t.playlists.length; r--; ) {
        var i = t.playlists[r];
        Vc({
            playlist: i,
            id: yo(r, i.uri)
        }),
        i.resolvedUri = st(t.uri, i.uri),
        t.playlists[i.id] = i,
        t.playlists[i.uri] = i,
        i.attributes.BANDWIDTH || jc.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.")
    }
}
  , m0 = function(t) {
    Oi(t, function(r) {
        r.uri && (r.resolvedUri = st(t.uri, r.uri))
    })
}
  , g0 = function(t, r) {
    var i = yo(0, r)
      , e = {
        mediaGroups: {
            AUDIO: {},
            VIDEO: {},
            "CLOSED-CAPTIONS": {},
            SUBTITLES: {}
        },
        uri: A.location.href,
        resolvedUri: A.location.href,
        playlists: [{
            uri: r,
            id: i,
            resolvedUri: r,
            attributes: {}
        }]
    };
    return e.playlists[i] = e.playlists[0],
    e.playlists[r] = e.playlists[0],
    e
}
  , Wc = function(t, r) {
    t.uri = r;
    for (var i = 0; i < t.playlists.length; i++)
        if (!t.playlists[i].uri) {
            var e = "placeholder-uri-" + i;
            t.playlists[i].uri = e
        }
    Oi(t, function(n, s, o, u) {
        var l = "placeholder-uri-" + s + "-" + o + "-" + u;
        (!n.playlists || !n.playlists.length) && (n.playlists = [rt({}, n)]),
        n.playlists.forEach(function(c, p) {
            var g = yo(p, l);
            c.uri ? c.resolvedUri = c.resolvedUri || st(t.uri, c.uri) : (c.uri = p === 0 ? l : g,
            c.resolvedUri = c.uri),
            c.id = c.id || g,
            c.attributes = c.attributes || {},
            t.playlists[c.id] = c,
            t.playlists[c.uri] = c
        })
    }),
    p0(t),
    m0(t)
}
  , Dn = I.mergeOptions
  , v0 = I.EventTarget
  , _0 = function(t, r) {
    if (r.endList)
        return t;
    var i = [];
    if (r.serverControl && r.serverControl.canBlockReload) {
        var e = r.preloadSegment
          , n = r.mediaSequence + r.segments.length;
        if (e) {
            var s = e.parts || []
              , o = Rc(r) - 1;
            o > -1 && o !== s.length - 1 && i.push("_HLS_part=" + o),
            (o > -1 || s.length) && n--
        }
        i.unshift("_HLS_msn=" + n)
    }
    return r.serverControl && r.serverControl.canSkipUntil && i.unshift("_HLS_skip=" + (r.serverControl.canSkipDateranges ? "v2" : "YES")),
    i.forEach(function(u, l) {
        var c = l === 0 ? "?" : "&";
        t += "" + c + u
    }),
    t
}
  , y0 = function(t, r) {
    if (!t)
        return r;
    var i = Dn(t, r);
    if (t.preloadHints && !r.preloadHints && delete i.preloadHints,
    t.parts && !r.parts)
        delete i.parts;
    else if (t.parts && r.parts)
        for (var e = 0; e < r.parts.length; e++)
            t.parts && t.parts[e] && (i.parts[e] = Dn(t.parts[e], r.parts[e]));
    return !t.skipped && r.skipped && (i.skipped = !1),
    t.preload && !r.preload && (i.preload = !1),
    i
}
  , T0 = function(t, r, i) {
    var e = t.slice()
      , n = r.slice();
    i = i || 0;
    for (var s = [], o, u = 0; u < n.length; u++) {
        var l = e[u + i]
          , c = n[u];
        l ? (o = l.map || o,
        s.push(y0(l, c))) : (o && !c.map && (c.map = o),
        s.push(c))
    }
    return s
}
  , Gc = function(t, r) {
    !t.resolvedUri && t.uri && (t.resolvedUri = st(r, t.uri)),
    t.key && !t.key.resolvedUri && (t.key.resolvedUri = st(r, t.key.uri)),
    t.map && !t.map.resolvedUri && (t.map.resolvedUri = st(r, t.map.uri)),
    t.map && t.map.key && !t.map.key.resolvedUri && (t.map.key.resolvedUri = st(r, t.map.key.uri)),
    t.parts && t.parts.length && t.parts.forEach(function(i) {
        i.resolvedUri || (i.resolvedUri = st(r, i.uri))
    }),
    t.preloadHints && t.preloadHints.length && t.preloadHints.forEach(function(i) {
        i.resolvedUri || (i.resolvedUri = st(r, i.uri))
    })
}
  , qc = function(t) {
    var r = t.segments || []
      , i = t.preloadSegment;
    if (i && i.parts && i.parts.length) {
        if (i.preloadHints) {
            for (var e = 0; e < i.preloadHints.length; e++)
                if (i.preloadHints[e].type === "MAP")
                    return r
        }
        i.duration = t.targetDuration,
        i.preload = !0,
        r.push(i)
    }
    return r
}
  , zc = function(t, r) {
    return t === r || t.segments && r.segments && t.segments.length === r.segments.length && t.endList === r.endList && t.mediaSequence === r.mediaSequence
}
  , ls = function(t, r, i) {
    i === void 0 && (i = zc);
    var e = Dn(t, {})
      , n = e.playlists[r.id];
    if (!n || i(n, r))
        return null;
    r.segments = qc(r);
    var s = Dn(n, r);
    if (s.preloadSegment && !r.preloadSegment && delete s.preloadSegment,
    n.segments) {
        if (r.skip) {
            r.segments = r.segments || [];
            for (var o = 0; o < r.skip.skippedSegments; o++)
                r.segments.unshift({
                    skipped: !0
                })
        }
        s.segments = T0(n.segments, r.segments, r.mediaSequence - n.mediaSequence)
    }
    s.segments.forEach(function(l) {
        Gc(l, s.resolvedUri)
    });
    for (var u = 0; u < e.playlists.length; u++)
        e.playlists[u].id === r.id && (e.playlists[u] = s);
    return e.playlists[r.id] = s,
    e.playlists[r.uri] = s,
    Oi(t, function(l, c, p, g) {
        if (l.playlists)
            for (var y = 0; y < l.playlists.length; y++)
                r.id === l.playlists[y].id && (l.playlists[y] = r)
    }),
    e
}
  , $c = function(t, r) {
    var i = t.segments[t.segments.length - 1]
      , e = i && i.parts && i.parts[i.parts.length - 1]
      , n = e && e.duration || i && i.duration;
    return r && n ? n * 1e3 : (t.partTargetDuration || t.targetDuration || 10) * 500
}
  , Tr = function(a) {
    G(t, a);
    function t(i, e, n) {
        var s;
        if (n === void 0 && (n = {}),
        s = a.call(this) || this,
        !i)
            throw new Error("A non-empty playlist URL or object is required");
        s.logger_ = dt("PlaylistLoader");
        var o = n
          , u = o.withCredentials
          , l = u === void 0 ? !1 : u
          , c = o.handleManifestRedirects
          , p = c === void 0 ? !1 : c;
        s.src = i,
        s.vhs_ = e,
        s.withCredentials = l,
        s.handleManifestRedirects = p;
        var g = e.options_;
        return s.customTagParsers = g && g.customTagParsers || [],
        s.customTagMappers = g && g.customTagMappers || [],
        s.experimentalLLHLS = g && g.experimentalLLHLS || !1,
        s.state = "HAVE_NOTHING",
        s.handleMediaupdatetimeout_ = s.handleMediaupdatetimeout_.bind(Y(s)),
        s.on("mediaupdatetimeout", s.handleMediaupdatetimeout_),
        s
    }
    var r = t.prototype;
    return r.handleMediaupdatetimeout_ = function() {
        var e = this;
        if (this.state === "HAVE_METADATA") {
            var n = this.media()
              , s = st(this.master.uri, n.uri);
            this.experimentalLLHLS && (s = _0(s, n)),
            this.state = "HAVE_CURRENT_METADATA",
            this.request = this.vhs_.xhr({
                uri: s,
                withCredentials: this.withCredentials
            }, function(o, u) {
                if (e.request) {
                    if (o)
                        return e.playlistRequestError(e.request, e.media(), "HAVE_METADATA");
                    e.haveMetadata({
                        playlistString: e.request.responseText,
                        url: e.media().uri,
                        id: e.media().id
                    })
                }
            })
        }
    }
    ,
    r.playlistRequestError = function(e, n, s) {
        var o = n.uri
          , u = n.id;
        this.request = null,
        s && (this.state = s),
        this.error = {
            playlist: this.master.playlists[u],
            status: e.status,
            message: "HLS playlist request error at URL: " + o + ".",
            responseText: e.responseText,
            code: e.status >= 500 ? 4 : 2
        },
        this.trigger("error")
    }
    ,
    r.parseManifest_ = function(e) {
        var n = this
          , s = e.url
          , o = e.manifestString;
        return h0({
            onwarn: function(l) {
                var c = l.message;
                return n.logger_("m3u8-parser warn for " + s + ": " + c)
            },
            oninfo: function(l) {
                var c = l.message;
                return n.logger_("m3u8-parser info for " + s + ": " + c)
            },
            manifestString: o,
            customTagParsers: this.customTagParsers,
            customTagMappers: this.customTagMappers,
            experimentalLLHLS: this.experimentalLLHLS
        })
    }
    ,
    r.haveMetadata = function(e) {
        var n = this
          , s = e.playlistString
          , o = e.playlistObject
          , u = e.url
          , l = e.id;
        this.request = null,
        this.state = "HAVE_METADATA";
        var c = o || this.parseManifest_({
            url: u,
            manifestString: s
        });
        c.lastRequest = Date.now(),
        Vc({
            playlist: c,
            uri: u,
            id: l
        });
        var p = ls(this.master, c);
        this.targetDuration = c.partTargetDuration || c.targetDuration,
        p ? (this.master = p,
        this.media_ = this.master.playlists[l]) : this.trigger("playlistunchanged"),
        this.media().endList || (A.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout = A.setTimeout(function() {
            n.trigger("mediaupdatetimeout")
        }, $c(this.media(), !!p))),
        this.trigger("loadedplaylist")
    }
    ,
    r.dispose = function() {
        this.trigger("dispose"),
        this.stopRequest(),
        A.clearTimeout(this.mediaUpdateTimeout),
        A.clearTimeout(this.finalRenditionTimeout),
        this.off()
    }
    ,
    r.stopRequest = function() {
        if (this.request) {
            var e = this.request;
            this.request = null,
            e.onreadystatechange = null,
            e.abort()
        }
    }
    ,
    r.media = function(e, n) {
        var s = this;
        if (!e)
            return this.media_;
        if (this.state === "HAVE_NOTHING")
            throw new Error("Cannot switch media playlist from " + this.state);
        if (typeof e == "string") {
            if (!this.master.playlists[e])
                throw new Error("Unknown playlist URI: " + e);
            e = this.master.playlists[e]
        }
        if (A.clearTimeout(this.finalRenditionTimeout),
        n) {
            var o = (e.partTargetDuration || e.targetDuration) / 2 * 1e3 || 5e3;
            this.finalRenditionTimeout = A.setTimeout(this.media.bind(this, e, !1), o);
            return
        }
        var u = this.state
          , l = !this.media_ || e.id !== this.media_.id
          , c = this.master.playlists[e.id];
        if (c && c.endList || e.endList && e.segments.length) {
            this.request && (this.request.onreadystatechange = null,
            this.request.abort(),
            this.request = null),
            this.state = "HAVE_METADATA",
            this.media_ = e,
            l && (this.trigger("mediachanging"),
            u === "HAVE_MASTER" ? this.trigger("loadedmetadata") : this.trigger("mediachange"));
            return
        }
        if (l) {
            if (this.state = "SWITCHING_MEDIA",
            this.request) {
                if (e.resolvedUri === this.request.url)
                    return;
                this.request.onreadystatechange = null,
                this.request.abort(),
                this.request = null
            }
            this.media_ && this.trigger("mediachanging"),
            this.request = this.vhs_.xhr({
                uri: e.resolvedUri,
                withCredentials: this.withCredentials
            }, function(p, g) {
                if (s.request) {
                    if (e.lastRequest = Date.now(),
                    e.resolvedUri = In(s.handleManifestRedirects, e.resolvedUri, g),
                    p)
                        return s.playlistRequestError(s.request, e, u);
                    s.haveMetadata({
                        playlistString: g.responseText,
                        url: e.uri,
                        id: e.id
                    }),
                    u === "HAVE_MASTER" ? s.trigger("loadedmetadata") : s.trigger("mediachange")
                }
            })
        }
    }
    ,
    r.pause = function() {
        this.stopRequest(),
        A.clearTimeout(this.mediaUpdateTimeout),
        this.state === "HAVE_NOTHING" && (this.started = !1),
        this.state === "SWITCHING_MEDIA" ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : this.state === "HAVE_CURRENT_METADATA" && (this.state = "HAVE_METADATA")
    }
    ,
    r.load = function(e) {
        var n = this;
        A.clearTimeout(this.mediaUpdateTimeout);
        var s = this.media();
        if (e) {
            var o = s ? (s.partTargetDuration || s.targetDuration) / 2 * 1e3 : 5e3;
            this.mediaUpdateTimeout = A.setTimeout(function() {
                return n.load()
            }, o);
            return
        }
        if (!this.started) {
            this.start();
            return
        }
        s && !s.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist")
    }
    ,
    r.start = function() {
        var e = this;
        if (this.started = !0,
        typeof this.src == "object") {
            this.src.uri || (this.src.uri = A.location.href),
            this.src.resolvedUri = this.src.uri,
            setTimeout(function() {
                e.setupInitialPlaylist(e.src)
            }, 0);
            return
        }
        this.request = this.vhs_.xhr({
            uri: this.src,
            withCredentials: this.withCredentials
        }, function(n, s) {
            if (e.request) {
                if (e.request = null,
                n)
                    return e.error = {
                        status: s.status,
                        message: "HLS playlist request error at URL: " + e.src + ".",
                        responseText: s.responseText,
                        code: 2
                    },
                    e.state === "HAVE_NOTHING" && (e.started = !1),
                    e.trigger("error");
                e.src = In(e.handleManifestRedirects, e.src, s);
                var o = e.parseManifest_({
                    manifestString: s.responseText,
                    url: e.src
                });
                e.setupInitialPlaylist(o)
            }
        })
    }
    ,
    r.srcUri = function() {
        return typeof this.src == "string" ? this.src : this.src.uri
    }
    ,
    r.setupInitialPlaylist = function(e) {
        if (this.state = "HAVE_MASTER",
        e.playlists) {
            this.master = e,
            Wc(this.master, this.srcUri()),
            e.playlists.forEach(function(s) {
                s.segments = qc(s),
                s.segments.forEach(function(o) {
                    Gc(o, s.resolvedUri)
                })
            }),
            this.trigger("loadedplaylist"),
            this.request || this.media(this.master.playlists[0]);
            return
        }
        var n = this.srcUri() || A.location.href;
        this.master = g0(e, n),
        this.haveMetadata({
            playlistObject: e,
            url: n,
            id: this.master.playlists[0].id
        }),
        this.trigger("loadedmetadata")
    }
    ,
    t
}(v0)
  , b0 = I.xhr
  , x0 = I.mergeOptions
  , ds = function(t, r, i, e) {
    var n = t.responseType === "arraybuffer" ? t.response : t.responseText;
    !r && n && (t.responseTime = Date.now(),
    t.roundTripTime = t.responseTime - t.requestTime,
    t.bytesReceived = n.byteLength || n.length,
    t.bandwidth || (t.bandwidth = Math.floor(t.bytesReceived / t.roundTripTime * 8 * 1e3))),
    i.headers && (t.responseHeaders = i.headers),
    r && r.code === "ETIMEDOUT" && (t.timedout = !0),
    !r && !t.aborted && i.statusCode !== 200 && i.statusCode !== 206 && i.statusCode !== 0 && (r = new Error("XHR Failed with a response of: " + (t && (n || t.responseText)))),
    e(r, t)
}
  , Kc = function() {
    var t = function r(i, e) {
        i = x0({
            timeout: 45e3
        }, i);
        var n = r.beforeRequest || I.Vhs.xhr.beforeRequest;
        if (n && typeof n == "function") {
            var s = n(i);
            s && (i = s)
        }
        var o = I.Vhs.xhr.original === !0 ? b0 : I.Vhs.xhr
          , u = o(i, function(c, p) {
            return ds(u, c, p, e)
        })
          , l = u.abort;
        return u.abort = function() {
            return u.aborted = !0,
            l.apply(u, arguments)
        }
        ,
        u.uri = i.uri,
        u.requestTime = Date.now(),
        u
    };
    return t.original = !0,
    t
}
  , S0 = function(t) {
    var r = t.offset + t.length - 1
      , i = t.offset;
    return "bytes=" + i + "-" + r
}
  , cs = function(t) {
    var r = {};
    return t.byterange && (r.Range = S0(t.byterange)),
    r
}
  , E0 = function(t, r) {
    return t.start(r) + "-" + t.end(r)
}
  , C0 = function(t, r) {
    var i = t.toString(16);
    return "00".substring(0, 2 - i.length) + i + (r % 2 ? " " : "")
}
  , w0 = function(t) {
    return t >= 32 && t < 126 ? String.fromCharCode(t) : "."
}
  , Xc = function(t) {
    var r = {};
    return Object.keys(t).forEach(function(i) {
        var e = t[i];
        ArrayBuffer.isView(e) ? r[i] = {
            bytes: e.buffer,
            byteOffset: e.byteOffset,
            byteLength: e.byteLength
        } : r[i] = e
    }),
    r
}
  , On = function(t) {
    var r = t.byterange || {
        length: 1 / 0,
        offset: 0
    };
    return [r.length, r.offset, t.resolvedUri].join(",")
}
  , Yc = function(t) {
    return t.resolvedUri
}
  , Qc = function(t) {
    for (var r = Array.prototype.slice.call(t), i = 16, e = "", n, s, o = 0; o < r.length / i; o++)
        n = r.slice(o * i, o * i + i).map(C0).join(""),
        s = r.slice(o * i, o * i + i).map(w0).join(""),
        e += n + " " + s + `
`;
    return e
}
  , k0 = function(t) {
    var r = t.bytes;
    return Qc(r)
}
  , A0 = function(t) {
    var r = "", i;
    for (i = 0; i < t.length; i++)
        r += E0(t, i) + " ";
    return r
}
  , P0 = Object.freeze({
    __proto__: null,
    createTransferableMessage: Xc,
    initSegmentId: On,
    segmentKeyId: Yc,
    hexDump: Qc,
    tagDump: k0,
    textRanges: A0
})
  , Jc = .25
  , I0 = function(t, r) {
    if (!r.dateTimeObject)
        return null;
    var i = r.videoTimingInfo.transmuxerPrependedSeconds
      , e = r.videoTimingInfo.transmuxedPresentationStart
      , n = e + i
      , s = t - n;
    return new Date(r.dateTimeObject.getTime() + s * 1e3)
}
  , D0 = function(t) {
    return t.transmuxedPresentationEnd - t.transmuxedPresentationStart - t.transmuxerPrependedSeconds
}
  , O0 = function(t, r) {
    var i;
    try {
        i = new Date(t)
    } catch {
        return null
    }
    if (!r || !r.segments || r.segments.length === 0)
        return null;
    var e = r.segments[0];
    if (i < e.dateTimeObject)
        return null;
    for (var n = 0; n < r.segments.length - 1; n++) {
        e = r.segments[n];
        var s = r.segments[n + 1].dateTimeObject;
        if (i < s)
            break
    }
    var o = r.segments[r.segments.length - 1]
      , u = o.dateTimeObject
      , l = o.videoTimingInfo ? D0(o.videoTimingInfo) : o.duration + o.duration * Jc
      , c = new Date(u.getTime() + l * 1e3);
    return i > c ? null : (i > u && (e = o),
    {
        segment: e,
        estimatedStart: e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationStart : We.duration(r, r.mediaSequence + r.segments.indexOf(e)),
        type: e.videoTimingInfo ? "accurate" : "estimate"
    })
}
  , L0 = function(t, r) {
    if (!r || !r.segments || r.segments.length === 0)
        return null;
    for (var i = 0, e, n = 0; n < r.segments.length && (e = r.segments[n],
    i = e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationEnd : i + e.duration,
    !(t <= i)); n++)
        ;
    var s = r.segments[r.segments.length - 1];
    if (s.videoTimingInfo && s.videoTimingInfo.transmuxedPresentationEnd < t)
        return null;
    if (t > i) {
        if (t > i + s.duration * Jc)
            return null;
        e = s
    }
    return {
        segment: e,
        estimatedStart: e.videoTimingInfo ? e.videoTimingInfo.transmuxedPresentationStart : i - e.duration,
        type: e.videoTimingInfo ? "accurate" : "estimate"
    }
}
  , R0 = function(t, r) {
    var i, e;
    try {
        i = new Date(t),
        e = new Date(r)
    } catch {}
    var n = i.getTime()
      , s = e.getTime();
    return (s - n) / 1e3
}
  , M0 = function(t) {
    if (!t.segments || t.segments.length === 0)
        return !1;
    for (var r = 0; r < t.segments.length; r++) {
        var i = t.segments[r];
        if (!i.dateTimeObject)
            return !1
    }
    return !0
}
  , F0 = function(t) {
    var r = t.playlist
      , i = t.time
      , e = i === void 0 ? void 0 : i
      , n = t.callback;
    if (!n)
        throw new Error("getProgramTime: callback must be provided");
    if (!r || e === void 0)
        return n({
            message: "getProgramTime: playlist and time must be provided"
        });
    var s = L0(e, r);
    if (!s)
        return n({
            message: "valid programTime was not found"
        });
    if (s.type === "estimate")
        return n({
            message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
            seekTime: s.estimatedStart
        });
    var o = {
        mediaSeconds: e
    }
      , u = I0(e, s.segment);
    return u && (o.programDateTime = u.toISOString()),
    n(null, o)
}
  , N0 = function a(t) {
    var r = t.programTime
      , i = t.playlist
      , e = t.retryCount
      , n = e === void 0 ? 2 : e
      , s = t.seekTo
      , o = t.pauseAfterSeek
      , u = o === void 0 ? !0 : o
      , l = t.tech
      , c = t.callback;
    if (!c)
        throw new Error("seekToProgramTime: callback must be provided");
    if (typeof r > "u" || !i || !s)
        return c({
            message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
        });
    if (!i.endList && !l.hasStarted_)
        return c({
            message: "player must be playing a live stream to start buffering"
        });
    if (!M0(i))
        return c({
            message: "programDateTime tags must be provided in the manifest " + i.resolvedUri
        });
    var p = O0(r, i);
    if (!p)
        return c({
            message: r + " was not found in the stream"
        });
    var g = p.segment
      , y = R0(g.dateTimeObject, r);
    if (p.type === "estimate") {
        if (n === 0)
            return c({
                message: r + " is not buffered yet. Try again"
            });
        s(p.estimatedStart + y),
        l.one("seeked", function() {
            a({
                programTime: r,
                playlist: i,
                retryCount: n - 1,
                seekTo: s,
                pauseAfterSeek: u,
                tech: l,
                callback: c
            })
        });
        return
    }
    var S = g.start + y
      , x = function() {
        return c(null, l.currentTime())
    };
    l.one("seeked", x),
    u && l.pause(),
    s(S)
}
  , Wa = function(t, r) {
    if (t.readyState === 4)
        return r()
}
  , U0 = function(t, r, i) {
    var e = [], n, s = !1, o = function(g, y, S, x) {
        return y.abort(),
        s = !0,
        i(g, y, S, x)
    }, u = function(g, y) {
        if (!s) {
            if (g)
                return o(g, y, "", e);
            var S = y.responseText.substring(e && e.byteLength || 0, y.responseText.length);
            if (e = pg(e, vd(S, !0)),
            n = n || ai(e),
            e.length < 10 || n && e.length < n + 2)
                return Wa(y, function() {
                    return o(g, y, "", e)
                });
            var x = Fs(e);
            return x === "ts" && e.length < 188 ? Wa(y, function() {
                return o(g, y, "", e)
            }) : !x && e.length < 376 ? Wa(y, function() {
                return o(g, y, "", e)
            }) : o(null, y, x, e)
        }
    }, l = {
        uri: t,
        beforeSend: function(g) {
            g.overrideMimeType("text/plain; charset=x-user-defined"),
            g.addEventListener("progress", function(y) {
                return y.total,
                y.loaded,
                ds(g, null, {
                    statusCode: g.status
                }, u)
            })
        }
    }, c = r(l, function(p, g) {
        return ds(c, p, g, u)
    });
    return c
}
  , B0 = I.EventTarget
  , Zc = I.mergeOptions
  , fl = function(t, r) {
    if (!zc(t, r) || t.sidx && r.sidx && (t.sidx.offset !== r.sidx.offset || t.sidx.length !== r.sidx.length))
        return !1;
    if (!t.sidx && r.sidx || t.sidx && !r.sidx || t.segments && !r.segments || !t.segments && r.segments)
        return !1;
    if (!t.segments && !r.segments)
        return !0;
    for (var i = 0; i < t.segments.length; i++) {
        var e = t.segments[i]
          , n = r.segments[i];
        if (e.uri !== n.uri)
            return !1;
        if (!(!e.byterange && !n.byterange)) {
            var s = e.byterange
              , o = n.byterange;
            if (s && !o || !s && o || s.offset !== o.offset || s.length !== o.length)
                return !1
        }
    }
    return !0
}
  , H0 = function(t) {
    var r = t.masterXml
      , i = t.srcUrl
      , e = t.clientOffset
      , n = t.sidxMapping
      , s = ig(r, {
        manifestUri: i,
        clientOffset: e,
        sidxMapping: n
    });
    return Wc(s, i),
    s
}
  , j0 = function(t, r, i) {
    for (var e = !0, n = Zc(t, {
        duration: r.duration,
        minimumUpdatePeriod: r.minimumUpdatePeriod
    }), s = 0; s < r.playlists.length; s++) {
        var o = r.playlists[s];
        if (o.sidx) {
            var u = Wn(o.sidx);
            i && i[u] && i[u].sidx && Os(o, i[u].sidx, o.sidx.resolvedUri)
        }
        var l = ls(n, o, fl);
        l && (n = l,
        e = !1)
    }
    return Oi(r, function(c, p, g, y) {
        if (c.playlists && c.playlists.length) {
            var S = c.playlists[0].id
              , x = ls(n, c.playlists[0], fl);
            x && (n = x,
            n.mediaGroups[p][g][y].playlists[0] = n.playlists[S],
            e = !1)
        }
    }),
    r.minimumUpdatePeriod !== t.minimumUpdatePeriod && (e = !1),
    e ? null : n
}
  , V0 = function(t, r) {
    var i = !t.map && !r.map
      , e = i || !!(t.map && r.map && t.map.byterange.offset === r.map.byterange.offset && t.map.byterange.length === r.map.byterange.length);
    return e && t.uri === r.uri && t.byterange.offset === r.byterange.offset && t.byterange.length === r.byterange.length
}
  , hl = function(t, r) {
    var i = {};
    for (var e in t) {
        var n = t[e]
          , s = n.sidx;
        if (s) {
            var o = Wn(s);
            if (!r[o])
                break;
            var u = r[o].sidxInfo;
            V0(u, s) && (i[o] = r[o])
        }
    }
    return i
}
  , W0 = function(t, r) {
    var i = hl(t.playlists, r)
      , e = i;
    return Oi(t, function(n, s, o, u) {
        if (n.playlists && n.playlists.length) {
            var l = n.playlists;
            e = Zc(e, hl(l, r))
        }
    }),
    e
}
  , fs = function(a) {
    G(t, a);
    function t(i, e, n, s) {
        var o;
        n === void 0 && (n = {}),
        o = a.call(this) || this,
        o.masterPlaylistLoader_ = s || Y(o),
        s || (o.isMaster_ = !0);
        var u = n
          , l = u.withCredentials
          , c = l === void 0 ? !1 : l
          , p = u.handleManifestRedirects
          , g = p === void 0 ? !1 : p;
        if (o.vhs_ = e,
        o.withCredentials = c,
        o.handleManifestRedirects = g,
        !i)
            throw new Error("A non-empty playlist URL or object is required");
        return o.on("minimumUpdatePeriod", function() {
            o.refreshXml_()
        }),
        o.on("mediaupdatetimeout", function() {
            o.refreshMedia_(o.media().id)
        }),
        o.state = "HAVE_NOTHING",
        o.loadedPlaylists_ = {},
        o.logger_ = dt("DashPlaylistLoader"),
        o.isMaster_ ? (o.masterPlaylistLoader_.srcUrl = i,
        o.masterPlaylistLoader_.sidxMapping_ = {}) : o.childPlaylist_ = i,
        o
    }
    var r = t.prototype;
    return r.requestErrored_ = function(e, n, s) {
        if (!this.request)
            return !0;
        if (this.request = null,
        e)
            return this.error = typeof e == "object" && !(e instanceof Error) ? e : {
                status: n.status,
                message: "DASH request error at URL: " + n.uri,
                response: n.response,
                code: 2
            },
            s && (this.state = s),
            this.trigger("error"),
            !0
    }
    ,
    r.addSidxSegments_ = function(e, n, s) {
        var o = this
          , u = e.sidx && Wn(e.sidx);
        if (!e.sidx || !u || this.masterPlaylistLoader_.sidxMapping_[u]) {
            this.mediaRequest_ = A.setTimeout(function() {
                return s(!1)
            }, 0);
            return
        }
        var l = In(this.handleManifestRedirects, e.sidx.resolvedUri)
          , c = function(g, y) {
            if (!o.requestErrored_(g, y, n)) {
                var S = o.masterPlaylistLoader_.sidxMapping_, x;
                try {
                    x = og(K(y.response).subarray(8))
                } catch (b) {
                    o.requestErrored_(b, y, n);
                    return
                }
                return S[u] = {
                    sidxInfo: e.sidx,
                    sidx: x
                },
                Os(e, x, e.sidx.resolvedUri),
                s(!0)
            }
        };
        this.request = U0(l, this.vhs_.xhr, function(p, g, y, S) {
            if (p)
                return c(p, g);
            if (!y || y !== "mp4")
                return c({
                    status: g.status,
                    message: "Unsupported " + (y || "unknown") + " container type for sidx segment at URL: " + l,
                    response: "",
                    playlist: e,
                    internal: !0,
                    blacklistDuration: 1 / 0,
                    code: 2
                }, g);
            var x = e.sidx.byterange
              , b = x.offset
              , P = x.length;
            if (S.length >= P + b)
                return c(p, {
                    response: S.subarray(b, b + P),
                    status: g.status,
                    uri: g.uri
                });
            o.request = o.vhs_.xhr({
                uri: l,
                responseType: "arraybuffer",
                headers: cs({
                    byterange: e.sidx.byterange
                })
            }, c)
        })
    }
    ,
    r.dispose = function() {
        this.trigger("dispose"),
        this.stopRequest(),
        this.loadedPlaylists_ = {},
        A.clearTimeout(this.minimumUpdatePeriodTimeout_),
        A.clearTimeout(this.mediaRequest_),
        A.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout = null,
        this.mediaRequest_ = null,
        this.minimumUpdatePeriodTimeout_ = null,
        this.masterPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.masterPlaylistLoader_.createMupOnMedia_),
        this.masterPlaylistLoader_.createMupOnMedia_ = null),
        this.off()
    }
    ,
    r.hasPendingRequest = function() {
        return this.request || this.mediaRequest_
    }
    ,
    r.stopRequest = function() {
        if (this.request) {
            var e = this.request;
            this.request = null,
            e.onreadystatechange = null,
            e.abort()
        }
    }
    ,
    r.media = function(e) {
        var n = this;
        if (!e)
            return this.media_;
        if (this.state === "HAVE_NOTHING")
            throw new Error("Cannot switch media playlist from " + this.state);
        var s = this.state;
        if (typeof e == "string") {
            if (!this.masterPlaylistLoader_.master.playlists[e])
                throw new Error("Unknown playlist URI: " + e);
            e = this.masterPlaylistLoader_.master.playlists[e]
        }
        var o = !this.media_ || e.id !== this.media_.id;
        if (o && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList) {
            this.state = "HAVE_METADATA",
            this.media_ = e,
            o && (this.trigger("mediachanging"),
            this.trigger("mediachange"));
            return
        }
        o && (this.media_ && this.trigger("mediachanging"),
        this.addSidxSegments_(e, s, function(u) {
            n.haveMetadata({
                startingState: s,
                playlist: e
            })
        }))
    }
    ,
    r.haveMetadata = function(e) {
        var n = e.startingState
          , s = e.playlist;
        this.state = "HAVE_METADATA",
        this.loadedPlaylists_[s.id] = s,
        this.mediaRequest_ = null,
        this.refreshMedia_(s.id),
        n === "HAVE_MASTER" ? this.trigger("loadedmetadata") : this.trigger("mediachange")
    }
    ,
    r.pause = function() {
        this.masterPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.masterPlaylistLoader_.createMupOnMedia_),
        this.masterPlaylistLoader_.createMupOnMedia_ = null),
        this.stopRequest(),
        A.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout = null,
        this.isMaster_ && (A.clearTimeout(this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_),
        this.masterPlaylistLoader_.minimumUpdatePeriodTimeout_ = null),
        this.state === "HAVE_NOTHING" && (this.started = !1)
    }
    ,
    r.load = function(e) {
        var n = this;
        A.clearTimeout(this.mediaUpdateTimeout),
        this.mediaUpdateTimeout = null;
        var s = this.media();
        if (e) {
            var o = s ? s.targetDuration / 2 * 1e3 : 5e3;
            this.mediaUpdateTimeout = A.setTimeout(function() {
                return n.load()
            }, o);
            return
        }
        if (!this.started) {
            this.start();
            return
        }
        s && !s.endList ? (this.isMaster_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"),
        this.updateMinimumUpdatePeriodTimeout_()),
        this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist")
    }
    ,
    r.start = function() {
        var e = this;
        if (this.started = !0,
        !this.isMaster_) {
            this.mediaRequest_ = A.setTimeout(function() {
                return e.haveMaster_()
            }, 0);
            return
        }
        this.requestMaster_(function(n, s) {
            e.haveMaster_(),
            !e.hasPendingRequest() && !e.media_ && e.media(e.masterPlaylistLoader_.master.playlists[0])
        })
    }
    ,
    r.requestMaster_ = function(e) {
        var n = this;
        this.request = this.vhs_.xhr({
            uri: this.masterPlaylistLoader_.srcUrl,
            withCredentials: this.withCredentials
        }, function(s, o) {
            if (n.requestErrored_(s, o)) {
                n.state === "HAVE_NOTHING" && (n.started = !1);
                return
            }
            var u = o.responseText !== n.masterPlaylistLoader_.masterXml_;
            if (n.masterPlaylistLoader_.masterXml_ = o.responseText,
            o.responseHeaders && o.responseHeaders.date ? n.masterLoaded_ = Date.parse(o.responseHeaders.date) : n.masterLoaded_ = Date.now(),
            n.masterPlaylistLoader_.srcUrl = In(n.handleManifestRedirects, n.masterPlaylistLoader_.srcUrl, o),
            u) {
                n.handleMaster_(),
                n.syncClientServerClock_(function() {
                    return e(o, u)
                });
                return
            }
            return e(o, u)
        })
    }
    ,
    r.syncClientServerClock_ = function(e) {
        var n = this
          , s = ng(this.masterPlaylistLoader_.masterXml_);
        if (s === null)
            return this.masterPlaylistLoader_.clientOffset_ = this.masterLoaded_ - Date.now(),
            e();
        if (s.method === "DIRECT")
            return this.masterPlaylistLoader_.clientOffset_ = s.value - Date.now(),
            e();
        this.request = this.vhs_.xhr({
            uri: st(this.masterPlaylistLoader_.srcUrl, s.value),
            method: s.method,
            withCredentials: this.withCredentials
        }, function(o, u) {
            if (n.request) {
                if (o)
                    return n.masterPlaylistLoader_.clientOffset_ = n.masterLoaded_ - Date.now(),
                    e();
                var l;
                s.method === "HEAD" ? !u.responseHeaders || !u.responseHeaders.date ? l = n.masterLoaded_ : l = Date.parse(u.responseHeaders.date) : l = Date.parse(u.responseText),
                n.masterPlaylistLoader_.clientOffset_ = l - Date.now(),
                e()
            }
        })
    }
    ,
    r.haveMaster_ = function() {
        this.state = "HAVE_MASTER",
        this.isMaster_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_)
    }
    ,
    r.handleMaster_ = function() {
        this.mediaRequest_ = null;
        var e = H0({
            masterXml: this.masterPlaylistLoader_.masterXml_,
            srcUrl: this.masterPlaylistLoader_.srcUrl,
            clientOffset: this.masterPlaylistLoader_.clientOffset_,
            sidxMapping: this.masterPlaylistLoader_.sidxMapping_
        })
          , n = this.masterPlaylistLoader_.master;
        n && (e = j0(n, e, this.masterPlaylistLoader_.sidxMapping_)),
        this.masterPlaylistLoader_.master = e || n;
        var s = this.masterPlaylistLoader_.master.locations && this.masterPlaylistLoader_.master.locations[0];
        return s && s !== this.masterPlaylistLoader_.srcUrl && (this.masterPlaylistLoader_.srcUrl = s),
        (!n || e && e.minimumUpdatePeriod !== n.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_(),
        !!e
    }
    ,
    r.updateMinimumUpdatePeriodTimeout_ = function() {
        var e = this.masterPlaylistLoader_;
        e.createMupOnMedia_ && (e.off("loadedmetadata", e.createMupOnMedia_),
        e.createMupOnMedia_ = null),
        e.minimumUpdatePeriodTimeout_ && (A.clearTimeout(e.minimumUpdatePeriodTimeout_),
        e.minimumUpdatePeriodTimeout_ = null);
        var n = e.master && e.master.minimumUpdatePeriod;
        if (n === 0 && (e.media() ? n = e.media().targetDuration * 1e3 : (e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_,
        e.one("loadedmetadata", e.createMupOnMedia_))),
        typeof n != "number" || n <= 0) {
            n < 0 && this.logger_("found invalid minimumUpdatePeriod of " + n + ", not setting a timeout");
            return
        }
        this.createMUPTimeout_(n)
    }
    ,
    r.createMUPTimeout_ = function(e) {
        var n = this.masterPlaylistLoader_;
        n.minimumUpdatePeriodTimeout_ = A.setTimeout(function() {
            n.minimumUpdatePeriodTimeout_ = null,
            n.trigger("minimumUpdatePeriod"),
            n.createMUPTimeout_(e)
        }, e)
    }
    ,
    r.refreshXml_ = function() {
        var e = this;
        this.requestMaster_(function(n, s) {
            s && (e.media_ && (e.media_ = e.masterPlaylistLoader_.master.playlists[e.media_.id]),
            e.masterPlaylistLoader_.sidxMapping_ = W0(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.sidxMapping_),
            e.addSidxSegments_(e.media(), e.state, function(o) {
                e.refreshMedia_(e.media().id)
            }))
        })
    }
    ,
    r.refreshMedia_ = function(e) {
        var n = this;
        if (!e)
            throw new Error("refreshMedia_ must take a media id");
        this.media_ && this.isMaster_ && this.handleMaster_();
        var s = this.masterPlaylistLoader_.master.playlists
          , o = !this.media_ || this.media_ !== s[e];
        if (o ? this.media_ = s[e] : this.trigger("playlistunchanged"),
        !this.mediaUpdateTimeout) {
            var u = function l() {
                n.media().endList || (n.mediaUpdateTimeout = A.setTimeout(function() {
                    n.trigger("mediaupdatetimeout"),
                    l()
                }, $c(n.media(), !!o)))
            };
            u()
        }
        this.trigger("loadedplaylist")
    }
    ,
    t
}(B0)
  , Ee = {
    GOAL_BUFFER_LENGTH: 30,
    MAX_GOAL_BUFFER_LENGTH: 60,
    BACK_BUFFER_LENGTH: 30,
    GOAL_BUFFER_LENGTH_RATE: 1,
    INITIAL_BANDWIDTH: 4194304,
    BANDWIDTH_VARIANCE: 1.2,
    BUFFER_LOW_WATER_LINE: 0,
    MAX_BUFFER_LOW_WATER_LINE: 30,
    EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
    BUFFER_LOW_WATER_LINE_RATE: 1,
    BUFFER_HIGH_WATER_LINE: 30
}
  , G0 = function(t) {
    for (var r = new Uint8Array(new ArrayBuffer(t.length)), i = 0; i < t.length; i++)
        r[i] = t.charCodeAt(i);
    return r.buffer
}
  , ef = function(t) {
    return t.on = t.addEventListener,
    t.off = t.removeEventListener,
    t
}
  , q0 = function(t) {
    try {
        return URL.createObjectURL(new Blob([t],{
            type: "application/javascript"
        }))
    } catch {
        var r = new BlobBuilder;
        return r.append(t),
        URL.createObjectURL(r.getBlob())
    }
}
  , tf = function(t) {
    return function() {
        var r = q0(t)
          , i = ef(new Worker(r));
        i.objURL = r;
        var e = i.terminate;
        return i.on = i.addEventListener,
        i.off = i.removeEventListener,
        i.terminate = function() {
            return URL.revokeObjectURL(r),
            e.call(this)
        }
        ,
        i
    }
}
  , rf = function(t) {
    return "var browserWorkerPolyFill = " + ef.toString() + `;
browserWorkerPolyFill(self);
` + t
}
  , nf = function(t) {
    return t.toString().replace(/^function.+?{/, "").slice(0, -1)
}
  , z0 = rf(nf(function() {
    var a = function() {
        this.init = function() {
            var d = {};
            this.on = function(h, f) {
                d[h] || (d[h] = []),
                d[h] = d[h].concat(f)
            }
            ,
            this.off = function(h, f) {
                var m;
                return d[h] ? (m = d[h].indexOf(f),
                d[h] = d[h].slice(),
                d[h].splice(m, 1),
                m > -1) : !1
            }
            ,
            this.trigger = function(h) {
                var f, m, v, _;
                if (f = d[h],
                !!f)
                    if (arguments.length === 2)
                        for (v = f.length,
                        m = 0; m < v; ++m)
                            f[m].call(this, arguments[1]);
                    else {
                        for (_ = [],
                        m = arguments.length,
                        m = 1; m < arguments.length; ++m)
                            _.push(arguments[m]);
                        for (v = f.length,
                        m = 0; m < v; ++m)
                            f[m].apply(this, _)
                    }
            }
            ,
            this.dispose = function() {
                d = {}
            }
        }
    };
    a.prototype.pipe = function(T) {
        return this.on("data", function(d) {
            T.push(d)
        }),
        this.on("done", function(d) {
            T.flush(d)
        }),
        this.on("partialdone", function(d) {
            T.partialFlush(d)
        }),
        this.on("endedtimeline", function(d) {
            T.endTimeline(d)
        }),
        this.on("reset", function(d) {
            T.reset(d)
        }),
        T
    }
    ,
    a.prototype.push = function(T) {
        this.trigger("data", T)
    }
    ,
    a.prototype.flush = function(T) {
        this.trigger("done", T)
    }
    ,
    a.prototype.partialFlush = function(T) {
        this.trigger("partialdone", T)
    }
    ,
    a.prototype.endTimeline = function(T) {
        this.trigger("endedtimeline", T)
    }
    ,
    a.prototype.reset = function(T) {
        this.trigger("reset", T)
    }
    ;
    var t = a, r = Math.pow(2, 32) - 1, i, e, n, s, o, u, l, c, p, g, y, S, x, b, P, D, L, R, F, j, B, M, H, ee, J, me, le, be, te, ae, se, $e, Ze, Bt, Ht, jt;
    (function() {
        var T;
        if (H = {
            avc1: [],
            avcC: [],
            btrt: [],
            dinf: [],
            dref: [],
            esds: [],
            ftyp: [],
            hdlr: [],
            mdat: [],
            mdhd: [],
            mdia: [],
            mfhd: [],
            minf: [],
            moof: [],
            moov: [],
            mp4a: [],
            mvex: [],
            mvhd: [],
            pasp: [],
            sdtp: [],
            smhd: [],
            stbl: [],
            stco: [],
            stsc: [],
            stsd: [],
            stsz: [],
            stts: [],
            styp: [],
            tfdt: [],
            tfhd: [],
            traf: [],
            trak: [],
            trun: [],
            trex: [],
            tkhd: [],
            vmhd: []
        },
        !(typeof Uint8Array > "u")) {
            for (T in H)
                H.hasOwnProperty(T) && (H[T] = [T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2), T.charCodeAt(3)]);
            ee = new Uint8Array([105, 115, 111, 109]),
            me = new Uint8Array([97, 118, 99, 49]),
            J = new Uint8Array([0, 0, 0, 1]),
            le = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
            be = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]),
            te = {
                video: le,
                audio: be
            },
            $e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
            se = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            Ze = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            Bt = Ze,
            Ht = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            jt = Ze,
            ae = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
    }
    )(),
    i = function(d) {
        var h = [], f = 0, m, v, _;
        for (m = 1; m < arguments.length; m++)
            h.push(arguments[m]);
        for (m = h.length; m--; )
            f += h[m].byteLength;
        for (v = new Uint8Array(f + 8),
        _ = new DataView(v.buffer,v.byteOffset,v.byteLength),
        _.setUint32(0, v.byteLength),
        v.set(d, 4),
        m = 0,
        f = 8; m < h.length; m++)
            v.set(h[m], f),
            f += h[m].byteLength;
        return v
    }
    ,
    e = function() {
        return i(H.dinf, i(H.dref, $e))
    }
    ,
    n = function(d) {
        return i(H.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, d.audioobjecttype << 3 | d.samplingfrequencyindex >>> 1, d.samplingfrequencyindex << 7 | d.channelcount << 3, 6, 1, 2]))
    }
    ,
    s = function() {
        return i(H.ftyp, ee, J, ee, me)
    }
    ,
    D = function(d) {
        return i(H.hdlr, te[d])
    }
    ,
    o = function(d) {
        return i(H.mdat, d)
    }
    ,
    P = function(d) {
        var h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, d.duration >>> 24 & 255, d.duration >>> 16 & 255, d.duration >>> 8 & 255, d.duration & 255, 85, 196, 0, 0]);
        return d.samplerate && (h[12] = d.samplerate >>> 24 & 255,
        h[13] = d.samplerate >>> 16 & 255,
        h[14] = d.samplerate >>> 8 & 255,
        h[15] = d.samplerate & 255),
        i(H.mdhd, h)
    }
    ,
    b = function(d) {
        return i(H.mdia, P(d), D(d.type), l(d))
    }
    ,
    u = function(d) {
        return i(H.mfhd, new Uint8Array([0, 0, 0, 0, (d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255]))
    }
    ,
    l = function(d) {
        return i(H.minf, d.type === "video" ? i(H.vmhd, ae) : i(H.smhd, se), e(), R(d))
    }
    ,
    c = function(d, h) {
        for (var f = [], m = h.length; m--; )
            f[m] = j(h[m]);
        return i.apply(null, [H.moof, u(d)].concat(f))
    }
    ,
    p = function(d) {
        for (var h = d.length, f = []; h--; )
            f[h] = S(d[h]);
        return i.apply(null, [H.moov, y(4294967295)].concat(f).concat(g(d)))
    }
    ,
    g = function(d) {
        for (var h = d.length, f = []; h--; )
            f[h] = B(d[h]);
        return i.apply(null, [H.mvex].concat(f))
    }
    ,
    y = function(d) {
        var h = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (d & 4278190080) >> 24, (d & 16711680) >> 16, (d & 65280) >> 8, d & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
        return i(H.mvhd, h)
    }
    ,
    L = function(d) {
        var h = d.samples || [], f = new Uint8Array(4 + h.length), m, v;
        for (v = 0; v < h.length; v++)
            m = h[v].flags,
            f[v + 4] = m.dependsOn << 4 | m.isDependedOn << 2 | m.hasRedundancy;
        return i(H.sdtp, f)
    }
    ,
    R = function(d) {
        return i(H.stbl, F(d), i(H.stts, jt), i(H.stsc, Bt), i(H.stsz, Ht), i(H.stco, Ze))
    }
    ,
    function() {
        var T, d;
        F = function(f) {
            return i(H.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), f.type === "video" ? T(f) : d(f))
        }
        ,
        T = function(f) {
            var m = f.sps || [], v = f.pps || [], _ = [], E = [], C, w;
            for (C = 0; C < m.length; C++)
                _.push((m[C].byteLength & 65280) >>> 8),
                _.push(m[C].byteLength & 255),
                _ = _.concat(Array.prototype.slice.call(m[C]));
            for (C = 0; C < v.length; C++)
                E.push((v[C].byteLength & 65280) >>> 8),
                E.push(v[C].byteLength & 255),
                E = E.concat(Array.prototype.slice.call(v[C]));
            if (w = [H.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (f.width & 65280) >> 8, f.width & 255, (f.height & 65280) >> 8, f.height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), i(H.avcC, new Uint8Array([1, f.profileIdc, f.profileCompatibility, f.levelIdc, 255].concat([m.length], _, [v.length], E))), i(H.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))],
            f.sarRatio) {
                var k = f.sarRatio[0]
                  , O = f.sarRatio[1];
                w.push(i(H.pasp, new Uint8Array([(k & 4278190080) >> 24, (k & 16711680) >> 16, (k & 65280) >> 8, k & 255, (O & 4278190080) >> 24, (O & 16711680) >> 16, (O & 65280) >> 8, O & 255])))
            }
            return i.apply(null, w)
        }
        ,
        d = function(f) {
            return i(H.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (f.channelcount & 65280) >> 8, f.channelcount & 255, (f.samplesize & 65280) >> 8, f.samplesize & 255, 0, 0, 0, 0, (f.samplerate & 65280) >> 8, f.samplerate & 255, 0, 0]), n(f))
        }
    }(),
    x = function(d) {
        var h = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (d.id & 4278190080) >> 24, (d.id & 16711680) >> 16, (d.id & 65280) >> 8, d.id & 255, 0, 0, 0, 0, (d.duration & 4278190080) >> 24, (d.duration & 16711680) >> 16, (d.duration & 65280) >> 8, d.duration & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (d.width & 65280) >> 8, d.width & 255, 0, 0, (d.height & 65280) >> 8, d.height & 255, 0, 0]);
        return i(H.tkhd, h)
    }
    ,
    j = function(d) {
        var h, f, m, v, _, E, C;
        return h = i(H.tfhd, new Uint8Array([0, 0, 0, 58, (d.id & 4278190080) >> 24, (d.id & 16711680) >> 16, (d.id & 65280) >> 8, d.id & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
        E = Math.floor(d.baseMediaDecodeTime / (r + 1)),
        C = Math.floor(d.baseMediaDecodeTime % (r + 1)),
        f = i(H.tfdt, new Uint8Array([1, 0, 0, 0, E >>> 24 & 255, E >>> 16 & 255, E >>> 8 & 255, E & 255, C >>> 24 & 255, C >>> 16 & 255, C >>> 8 & 255, C & 255])),
        _ = 92,
        d.type === "audio" ? (m = M(d, _),
        i(H.traf, h, f, m)) : (v = L(d),
        m = M(d, v.length + _),
        i(H.traf, h, f, m, v))
    }
    ,
    S = function(d) {
        return d.duration = d.duration || 4294967295,
        i(H.trak, x(d), b(d))
    }
    ,
    B = function(d) {
        var h = new Uint8Array([0, 0, 0, 0, (d.id & 4278190080) >> 24, (d.id & 16711680) >> 16, (d.id & 65280) >> 8, d.id & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
        return d.type !== "video" && (h[h.length - 1] = 0),
        i(H.trex, h)
    }
    ,
    function() {
        var T, d, h;
        h = function(m, v) {
            var _ = 0
              , E = 0
              , C = 0
              , w = 0;
            return m.length && (m[0].duration !== void 0 && (_ = 1),
            m[0].size !== void 0 && (E = 2),
            m[0].flags !== void 0 && (C = 4),
            m[0].compositionTimeOffset !== void 0 && (w = 8)),
            [0, 0, _ | E | C | w, 1, (m.length & 4278190080) >>> 24, (m.length & 16711680) >>> 16, (m.length & 65280) >>> 8, m.length & 255, (v & 4278190080) >>> 24, (v & 16711680) >>> 16, (v & 65280) >>> 8, v & 255]
        }
        ,
        d = function(m, v) {
            var _, E, C, w, k, O;
            for (w = m.samples || [],
            v += 20 + 16 * w.length,
            C = h(w, v),
            E = new Uint8Array(C.length + w.length * 16),
            E.set(C),
            _ = C.length,
            O = 0; O < w.length; O++)
                k = w[O],
                E[_++] = (k.duration & 4278190080) >>> 24,
                E[_++] = (k.duration & 16711680) >>> 16,
                E[_++] = (k.duration & 65280) >>> 8,
                E[_++] = k.duration & 255,
                E[_++] = (k.size & 4278190080) >>> 24,
                E[_++] = (k.size & 16711680) >>> 16,
                E[_++] = (k.size & 65280) >>> 8,
                E[_++] = k.size & 255,
                E[_++] = k.flags.isLeading << 2 | k.flags.dependsOn,
                E[_++] = k.flags.isDependedOn << 6 | k.flags.hasRedundancy << 4 | k.flags.paddingValue << 1 | k.flags.isNonSyncSample,
                E[_++] = k.flags.degradationPriority & 61440,
                E[_++] = k.flags.degradationPriority & 15,
                E[_++] = (k.compositionTimeOffset & 4278190080) >>> 24,
                E[_++] = (k.compositionTimeOffset & 16711680) >>> 16,
                E[_++] = (k.compositionTimeOffset & 65280) >>> 8,
                E[_++] = k.compositionTimeOffset & 255;
            return i(H.trun, E)
        }
        ,
        T = function(m, v) {
            var _, E, C, w, k, O;
            for (w = m.samples || [],
            v += 20 + 8 * w.length,
            C = h(w, v),
            _ = new Uint8Array(C.length + w.length * 8),
            _.set(C),
            E = C.length,
            O = 0; O < w.length; O++)
                k = w[O],
                _[E++] = (k.duration & 4278190080) >>> 24,
                _[E++] = (k.duration & 16711680) >>> 16,
                _[E++] = (k.duration & 65280) >>> 8,
                _[E++] = k.duration & 255,
                _[E++] = (k.size & 4278190080) >>> 24,
                _[E++] = (k.size & 16711680) >>> 16,
                _[E++] = (k.size & 65280) >>> 8,
                _[E++] = k.size & 255;
            return i(H.trun, _)
        }
        ,
        M = function(m, v) {
            return m.type === "audio" ? T(m, v) : d(m, v)
        }
    }();
    var ct = {
        ftyp: s,
        mdat: o,
        moof: c,
        moov: p,
        initSegment: function(d) {
            var h = s(), f = p(d), m;
            return m = new Uint8Array(h.byteLength + f.byteLength),
            m.set(h),
            m.set(f, h.byteLength),
            m
        }
    }, ar = function(d) {
        var h, f, m = [], v = [];
        for (v.byteLength = 0,
        v.nalCount = 0,
        v.duration = 0,
        m.byteLength = 0,
        h = 0; h < d.length; h++)
            f = d[h],
            f.nalUnitType === "access_unit_delimiter_rbsp" ? (m.length && (m.duration = f.dts - m.dts,
            v.byteLength += m.byteLength,
            v.nalCount += m.length,
            v.duration += m.duration,
            v.push(m)),
            m = [f],
            m.byteLength = f.data.byteLength,
            m.pts = f.pts,
            m.dts = f.dts) : (f.nalUnitType === "slice_layer_without_partitioning_rbsp_idr" && (m.keyFrame = !0),
            m.duration = f.dts - m.dts,
            m.byteLength += f.data.byteLength,
            m.push(f));
        return v.length && (!m.duration || m.duration <= 0) && (m.duration = v[v.length - 1].duration),
        v.byteLength += m.byteLength,
        v.nalCount += m.length,
        v.duration += m.duration,
        v.push(m),
        v
    }, xf = function(d) {
        var h, f, m = [], v = [];
        for (m.byteLength = 0,
        m.nalCount = 0,
        m.duration = 0,
        m.pts = d[0].pts,
        m.dts = d[0].dts,
        v.byteLength = 0,
        v.nalCount = 0,
        v.duration = 0,
        v.pts = d[0].pts,
        v.dts = d[0].dts,
        h = 0; h < d.length; h++)
            f = d[h],
            f.keyFrame ? (m.length && (v.push(m),
            v.byteLength += m.byteLength,
            v.nalCount += m.nalCount,
            v.duration += m.duration),
            m = [f],
            m.nalCount = f.length,
            m.byteLength = f.byteLength,
            m.pts = f.pts,
            m.dts = f.dts,
            m.duration = f.duration) : (m.duration += f.duration,
            m.nalCount += f.length,
            m.byteLength += f.byteLength,
            m.push(f));
        return v.length && m.duration <= 0 && (m.duration = v[v.length - 1].duration),
        v.byteLength += m.byteLength,
        v.nalCount += m.nalCount,
        v.duration += m.duration,
        v.push(m),
        v
    }, Sf = function(d) {
        var h;
        return !d[0][0].keyFrame && d.length > 1 && (h = d.shift(),
        d.byteLength -= h.byteLength,
        d.nalCount -= h.nalCount,
        d[0][0].dts = h.dts,
        d[0][0].pts = h.pts,
        d[0][0].duration += h.duration),
        d
    }, Ef = function() {
        return {
            size: 0,
            flags: {
                isLeading: 0,
                dependsOn: 1,
                isDependedOn: 0,
                hasRedundancy: 0,
                degradationPriority: 0,
                isNonSyncSample: 1
            }
        }
    }, Eo = function(d, h) {
        var f = Ef();
        return f.dataOffset = h,
        f.compositionTimeOffset = d.pts - d.dts,
        f.duration = d.duration,
        f.size = 4 * d.length,
        f.size += d.byteLength,
        d.keyFrame && (f.flags.dependsOn = 2,
        f.flags.isNonSyncSample = 0),
        f
    }, Cf = function(d, h) {
        var f, m, v, _, E, C = h || 0, w = [];
        for (f = 0; f < d.length; f++)
            for (_ = d[f],
            m = 0; m < _.length; m++)
                E = _[m],
                v = Eo(E, C),
                C += v.size,
                w.push(v);
        return w
    }, wf = function(d) {
        var h, f, m, v, _, E, C = 0, w = d.byteLength, k = d.nalCount, O = w + 4 * k, N = new Uint8Array(O), q = new DataView(N.buffer);
        for (h = 0; h < d.length; h++)
            for (v = d[h],
            f = 0; f < v.length; f++)
                for (_ = v[f],
                m = 0; m < _.length; m++)
                    E = _[m],
                    q.setUint32(C, E.data.byteLength),
                    C += 4,
                    N.set(E.data, C),
                    C += E.data.byteLength;
        return N
    }, kf = function(d, h) {
        var f, m = h || 0, v = [];
        return f = Eo(d, m),
        v.push(f),
        v
    }, Af = function(d) {
        var h, f, m = 0, v = d.byteLength, _ = d.length, E = v + 4 * _, C = new Uint8Array(E), w = new DataView(C.buffer);
        for (h = 0; h < d.length; h++)
            f = d[h],
            w.setUint32(m, f.data.byteLength),
            m += 4,
            C.set(f.data, m),
            m += f.data.byteLength;
        return C
    }, Wr = {
        groupNalsIntoFrames: ar,
        groupFramesIntoGops: xf,
        extendFirstKeyFrame: Sf,
        generateSampleTable: Cf,
        concatenateNalData: wf,
        generateSampleTableForFrame: kf,
        concatenateNalDataForFrame: Af
    }, Ot = [33, 16, 5, 32, 164, 27], aa = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], ie = function(d) {
        for (var h = []; d--; )
            h.push(0);
        return h
    }, Pf = function(d) {
        return Object.keys(d).reduce(function(h, f) {
            return h[f] = new Uint8Array(d[f].reduce(function(m, v) {
                return m.concat(v)
            }, [])),
            h
        }, {})
    }, sa, If = function() {
        if (!sa) {
            var d = {
                96e3: [Ot, [227, 64], ie(154), [56]],
                88200: [Ot, [231], ie(170), [56]],
                64e3: [Ot, [248, 192], ie(240), [56]],
                48e3: [Ot, [255, 192], ie(268), [55, 148, 128], ie(54), [112]],
                44100: [Ot, [255, 192], ie(268), [55, 163, 128], ie(84), [112]],
                32e3: [Ot, [255, 192], ie(268), [55, 234], ie(226), [112]],
                24e3: [Ot, [255, 192], ie(268), [55, 255, 128], ie(268), [111, 112], ie(126), [224]],
                16e3: [Ot, [255, 192], ie(268), [55, 255, 128], ie(268), [111, 255], ie(269), [223, 108], ie(195), [1, 192]],
                12e3: [aa, ie(268), [3, 127, 248], ie(268), [6, 255, 240], ie(268), [13, 255, 224], ie(268), [27, 253, 128], ie(259), [56]],
                11025: [aa, ie(268), [3, 127, 248], ie(268), [6, 255, 240], ie(268), [13, 255, 224], ie(268), [27, 255, 192], ie(268), [55, 175, 128], ie(108), [112]],
                8e3: [aa, ie(268), [3, 121, 16], ie(47), [7]]
            };
            sa = Pf(d)
        }
        return sa
    }, oa = 9e4, ua, la, Li, da, Co, wo, ko;
    ua = function(d) {
        return d * oa
    }
    ,
    la = function(d, h) {
        return d * h
    }
    ,
    Li = function(d) {
        return d / oa
    }
    ,
    da = function(d, h) {
        return d / h
    }
    ,
    Co = function(d, h) {
        return ua(da(d, h))
    }
    ,
    wo = function(d, h) {
        return la(Li(d), h)
    }
    ,
    ko = function(d, h, f) {
        return Li(f ? d : d - h)
    }
    ;
    var re = {
        ONE_SECOND_IN_TS: oa,
        secondsToVideoTs: ua,
        secondsToAudioTs: la,
        videoTsToSeconds: Li,
        audioTsToSeconds: da,
        audioTsToVideoTs: Co,
        videoTsToAudioTs: wo,
        metadataTsToSeconds: ko
    }
      , Df = function(d) {
        var h, f, m = 0;
        for (h = 0; h < d.length; h++)
            f = d[h],
            m += f.data.byteLength;
        return m
    }
      , Of = function(d, h, f, m) {
        var v, _ = 0, E = 0, C = 0, w = 0, k, O, N;
        if (h.length && (v = re.audioTsToVideoTs(d.baseMediaDecodeTime, d.samplerate),
        _ = Math.ceil(re.ONE_SECOND_IN_TS / (d.samplerate / 1024)),
        f && m && (E = v - Math.max(f, m),
        C = Math.floor(E / _),
        w = C * _),
        !(C < 1 || w > re.ONE_SECOND_IN_TS / 2))) {
            for (k = If()[d.samplerate],
            k || (k = h[0].data),
            O = 0; O < C; O++)
                N = h[0],
                h.splice(0, 0, {
                    data: k,
                    dts: N.dts - _,
                    pts: N.pts - _
                });
            return d.baseMediaDecodeTime -= Math.floor(re.videoTsToAudioTs(w, d.samplerate)),
            w
        }
    }
      , Lf = function(d, h, f) {
        return h.minSegmentDts >= f ? d : (h.minSegmentDts = 1 / 0,
        d.filter(function(m) {
            return m.dts >= f ? (h.minSegmentDts = Math.min(h.minSegmentDts, m.dts),
            h.minSegmentPts = h.minSegmentDts,
            !0) : !1
        }))
    }
      , Rf = function(d) {
        var h, f, m = [];
        for (h = 0; h < d.length; h++)
            f = d[h],
            m.push({
                size: f.data.byteLength,
                duration: 1024
            });
        return m
    }
      , Mf = function(d) {
        var h, f, m = 0, v = new Uint8Array(Df(d));
        for (h = 0; h < d.length; h++)
            f = d[h],
            v.set(f.data, m),
            m += f.data.byteLength;
        return v
    }
      , Ri = {
        prefixWithSilence: Of,
        trimAdtsFramesByEarliestDts: Lf,
        generateSampleTable: Rf,
        concatenateFrameData: Mf
    }
      , Ff = re.ONE_SECOND_IN_TS
      , Nf = function(d, h) {
        typeof h.pts == "number" && (d.timelineStartInfo.pts === void 0 && (d.timelineStartInfo.pts = h.pts),
        d.minSegmentPts === void 0 ? d.minSegmentPts = h.pts : d.minSegmentPts = Math.min(d.minSegmentPts, h.pts),
        d.maxSegmentPts === void 0 ? d.maxSegmentPts = h.pts : d.maxSegmentPts = Math.max(d.maxSegmentPts, h.pts)),
        typeof h.dts == "number" && (d.timelineStartInfo.dts === void 0 && (d.timelineStartInfo.dts = h.dts),
        d.minSegmentDts === void 0 ? d.minSegmentDts = h.dts : d.minSegmentDts = Math.min(d.minSegmentDts, h.dts),
        d.maxSegmentDts === void 0 ? d.maxSegmentDts = h.dts : d.maxSegmentDts = Math.max(d.maxSegmentDts, h.dts))
    }
      , Uf = function(d) {
        delete d.minSegmentDts,
        delete d.maxSegmentDts,
        delete d.minSegmentPts,
        delete d.maxSegmentPts
    }
      , Bf = function(d, h) {
        var f, m, v = d.minSegmentDts;
        return h || (v -= d.timelineStartInfo.dts),
        f = d.timelineStartInfo.baseMediaDecodeTime,
        f += v,
        f = Math.max(0, f),
        d.type === "audio" && (m = d.samplerate / Ff,
        f *= m,
        f = Math.floor(f)),
        f
    }
      , it = {
        clearDtsInfo: Uf,
        calculateTrackBaseMediaDecodeTime: Bf,
        collectDtsInfo: Nf
    }
      , Ao = 4
      , Hf = 128
      , jf = function(d) {
        for (var h = 0, f = {
            payloadType: -1,
            payloadSize: 0
        }, m = 0, v = 0; h < d.byteLength && d[h] !== Hf; ) {
            for (; d[h] === 255; )
                m += 255,
                h++;
            for (m += d[h++]; d[h] === 255; )
                v += 255,
                h++;
            if (v += d[h++],
            !f.payload && m === Ao) {
                var _ = String.fromCharCode(d[h + 3], d[h + 4], d[h + 5], d[h + 6]);
                if (_ === "GA94") {
                    f.payloadType = m,
                    f.payloadSize = v,
                    f.payload = d.subarray(h, h + v);
                    break
                } else
                    f.payload = void 0
            }
            h += v,
            m = 0,
            v = 0
        }
        return f
    }
      , Vf = function(d) {
        return d.payload[0] !== 181 || (d.payload[1] << 8 | d.payload[2]) !== 49 || String.fromCharCode(d.payload[3], d.payload[4], d.payload[5], d.payload[6]) !== "GA94" || d.payload[7] !== 3 ? null : d.payload.subarray(8, d.payload.length - 1)
    }
      , Wf = function(d, h) {
        var f = [], m, v, _, E;
        if (!(h[0] & 64))
            return f;
        for (v = h[0] & 31,
        m = 0; m < v; m++)
            _ = m * 3,
            E = {
                type: h[_ + 2] & 3,
                pts: d
            },
            h[_ + 2] & 4 && (E.ccData = h[_ + 3] << 8 | h[_ + 4],
            f.push(E));
        return f
    }
      , Gf = function(d) {
        for (var h = d.byteLength, f = [], m = 1, v, _; m < h - 2; )
            d[m] === 0 && d[m + 1] === 0 && d[m + 2] === 3 ? (f.push(m + 2),
            m += 2) : m++;
        if (f.length === 0)
            return d;
        v = h - f.length,
        _ = new Uint8Array(v);
        var E = 0;
        for (m = 0; m < v; E++,
        m++)
            E === f[0] && (E++,
            f.shift()),
            _[m] = d[E];
        return _
    }
      , Gr = {
        parseSei: jf,
        parseUserData: Vf,
        parseCaptionPackets: Wf,
        discardEmulationPreventionBytes: Gf,
        USER_DATA_REGISTERED_ITU_T_T35: Ao
    }
      , Ke = function T(d) {
        d = d || {},
        T.prototype.init.call(this),
        this.parse708captions_ = typeof d.parse708captions == "boolean" ? d.parse708captions : !0,
        this.captionPackets_ = [],
        this.ccStreams_ = [new ge(0,0), new ge(0,1), new ge(1,0), new ge(1,1)],
        this.parse708captions_ && (this.cc708Stream_ = new de),
        this.reset(),
        this.ccStreams_.forEach(function(h) {
            h.on("data", this.trigger.bind(this, "data")),
            h.on("partialdone", this.trigger.bind(this, "partialdone")),
            h.on("done", this.trigger.bind(this, "done"))
        }, this),
        this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")),
        this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")),
        this.cc708Stream_.on("done", this.trigger.bind(this, "done")))
    };
    Ke.prototype = new t,
    Ke.prototype.push = function(T) {
        var d, h, f;
        if (T.nalUnitType === "sei_rbsp" && (d = Gr.parseSei(T.escapedRBSP),
        !!d.payload && d.payloadType === Gr.USER_DATA_REGISTERED_ITU_T_T35 && (h = Gr.parseUserData(d),
        !!h))) {
            if (T.dts < this.latestDts_) {
                this.ignoreNextEqualDts_ = !0;
                return
            } else if (T.dts === this.latestDts_ && this.ignoreNextEqualDts_) {
                this.numSameDts_--,
                this.numSameDts_ || (this.ignoreNextEqualDts_ = !1);
                return
            }
            f = Gr.parseCaptionPackets(T.pts, h),
            this.captionPackets_ = this.captionPackets_.concat(f),
            this.latestDts_ !== T.dts && (this.numSameDts_ = 0),
            this.numSameDts_++,
            this.latestDts_ = T.dts
        }
    }
    ,
    Ke.prototype.flushCCStreams = function(T) {
        this.ccStreams_.forEach(function(d) {
            return T === "flush" ? d.flush() : d.partialFlush()
        }, this)
    }
    ,
    Ke.prototype.flushStream = function(T) {
        if (!this.captionPackets_.length) {
            this.flushCCStreams(T);
            return
        }
        this.captionPackets_.forEach(function(d, h) {
            d.presortIndex = h
        }),
        this.captionPackets_.sort(function(d, h) {
            return d.pts === h.pts ? d.presortIndex - h.presortIndex : d.pts - h.pts
        }),
        this.captionPackets_.forEach(function(d) {
            d.type < 2 ? this.dispatchCea608Packet(d) : this.dispatchCea708Packet(d)
        }, this),
        this.captionPackets_.length = 0,
        this.flushCCStreams(T)
    }
    ,
    Ke.prototype.flush = function() {
        return this.flushStream("flush")
    }
    ,
    Ke.prototype.partialFlush = function() {
        return this.flushStream("partialFlush")
    }
    ,
    Ke.prototype.reset = function() {
        this.latestDts_ = null,
        this.ignoreNextEqualDts_ = !1,
        this.numSameDts_ = 0,
        this.activeCea608Channel_ = [null, null],
        this.ccStreams_.forEach(function(T) {
            T.reset()
        })
    }
    ,
    Ke.prototype.dispatchCea608Packet = function(T) {
        this.setsTextOrXDSActive(T) ? this.activeCea608Channel_[T.type] = null : this.setsChannel1Active(T) ? this.activeCea608Channel_[T.type] = 0 : this.setsChannel2Active(T) && (this.activeCea608Channel_[T.type] = 1),
        this.activeCea608Channel_[T.type] !== null && this.ccStreams_[(T.type << 1) + this.activeCea608Channel_[T.type]].push(T)
    }
    ,
    Ke.prototype.setsChannel1Active = function(T) {
        return (T.ccData & 30720) === 4096
    }
    ,
    Ke.prototype.setsChannel2Active = function(T) {
        return (T.ccData & 30720) === 6144
    }
    ,
    Ke.prototype.setsTextOrXDSActive = function(T) {
        return (T.ccData & 28928) === 256 || (T.ccData & 30974) === 4138 || (T.ccData & 30974) === 6186
    }
    ,
    Ke.prototype.dispatchCea708Packet = function(T) {
        this.parse708captions_ && this.cc708Stream_.push(T)
    }
    ;
    var qf = {
        127: 9834,
        4128: 32,
        4129: 160,
        4133: 8230,
        4138: 352,
        4140: 338,
        4144: 9608,
        4145: 8216,
        4146: 8217,
        4147: 8220,
        4148: 8221,
        4149: 8226,
        4153: 8482,
        4154: 353,
        4156: 339,
        4157: 8480,
        4159: 376,
        4214: 8539,
        4215: 8540,
        4216: 8541,
        4217: 8542,
        4218: 9168,
        4219: 9124,
        4220: 9123,
        4221: 9135,
        4222: 9126,
        4223: 9121,
        4256: 12600
    }
      , zf = function(d) {
        var h = qf[d] || d;
        return d & 4096 && d === h ? "" : String.fromCharCode(h)
    }
      , Po = function(d) {
        return 32 <= d && d <= 127 || 160 <= d && d <= 255
    }
      , _t = function(d) {
        this.windowNum = d,
        this.reset()
    };
    _t.prototype.reset = function() {
        this.clearText(),
        this.pendingNewLine = !1,
        this.winAttr = {},
        this.penAttr = {},
        this.penLoc = {},
        this.penColor = {},
        this.visible = 0,
        this.rowLock = 0,
        this.columnLock = 0,
        this.priority = 0,
        this.relativePositioning = 0,
        this.anchorVertical = 0,
        this.anchorHorizontal = 0,
        this.anchorPoint = 0,
        this.rowCount = 1,
        this.virtualRowCount = this.rowCount + 1,
        this.columnCount = 41,
        this.windowStyle = 0,
        this.penStyle = 0
    }
    ,
    _t.prototype.getText = function() {
        return this.rows.join(`
`)
    }
    ,
    _t.prototype.clearText = function() {
        this.rows = [""],
        this.rowIdx = 0
    }
    ,
    _t.prototype.newLine = function(T) {
        for (this.rows.length >= this.virtualRowCount && typeof this.beforeRowOverflow == "function" && this.beforeRowOverflow(T),
        this.rows.length > 0 && (this.rows.push(""),
        this.rowIdx++); this.rows.length > this.virtualRowCount; )
            this.rows.shift(),
            this.rowIdx--
    }
    ,
    _t.prototype.isEmpty = function() {
        return this.rows.length === 0 ? !0 : this.rows.length === 1 ? this.rows[0] === "" : !1
    }
    ,
    _t.prototype.addText = function(T) {
        this.rows[this.rowIdx] += T
    }
    ,
    _t.prototype.backspace = function() {
        if (!this.isEmpty()) {
            var T = this.rows[this.rowIdx];
            this.rows[this.rowIdx] = T.substr(0, T.length - 1)
        }
    }
    ;
    var ca = function(d) {
        this.serviceNum = d,
        this.text = "",
        this.currentWindow = new _t(-1),
        this.windows = []
    };
    ca.prototype.init = function(T, d) {
        this.startPts = T;
        for (var h = 0; h < 8; h++)
            this.windows[h] = new _t(h),
            typeof d == "function" && (this.windows[h].beforeRowOverflow = d)
    }
    ,
    ca.prototype.setCurrentWindow = function(T) {
        this.currentWindow = this.windows[T]
    }
    ;
    var de = function T() {
        T.prototype.init.call(this);
        var d = this;
        this.current708Packet = null,
        this.services = {},
        this.push = function(h) {
            h.type === 3 ? (d.new708Packet(),
            d.add708Bytes(h)) : (d.current708Packet === null && d.new708Packet(),
            d.add708Bytes(h))
        }
    };
    de.prototype = new t,
    de.prototype.new708Packet = function() {
        this.current708Packet !== null && this.push708Packet(),
        this.current708Packet = {
            data: [],
            ptsVals: []
        }
    }
    ,
    de.prototype.add708Bytes = function(T) {
        var d = T.ccData
          , h = d >>> 8
          , f = d & 255;
        this.current708Packet.ptsVals.push(T.pts),
        this.current708Packet.data.push(h),
        this.current708Packet.data.push(f)
    }
    ,
    de.prototype.push708Packet = function() {
        var T = this.current708Packet
          , d = T.data
          , h = null
          , f = null
          , m = 0
          , v = d[m++];
        for (T.seq = v >> 6,
        T.sizeCode = v & 63; m < d.length; m++)
            v = d[m++],
            h = v >> 5,
            f = v & 31,
            h === 7 && f > 0 && (v = d[m++],
            h = v),
            this.pushServiceBlock(h, m, f),
            f > 0 && (m += f - 1)
    }
    ,
    de.prototype.pushServiceBlock = function(T, d, h) {
        var f, m = d, v = this.current708Packet.data, _ = this.services[T];
        for (_ || (_ = this.initService(T, m)); m < d + h && m < v.length; m++)
            f = v[m],
            Po(f) ? m = this.handleText(m, _) : f === 16 ? m = this.extendedCommands(m, _) : 128 <= f && f <= 135 ? m = this.setCurrentWindow(m, _) : 152 <= f && f <= 159 ? m = this.defineWindow(m, _) : f === 136 ? m = this.clearWindows(m, _) : f === 140 ? m = this.deleteWindows(m, _) : f === 137 ? m = this.displayWindows(m, _) : f === 138 ? m = this.hideWindows(m, _) : f === 139 ? m = this.toggleWindows(m, _) : f === 151 ? m = this.setWindowAttributes(m, _) : f === 144 ? m = this.setPenAttributes(m, _) : f === 145 ? m = this.setPenColor(m, _) : f === 146 ? m = this.setPenLocation(m, _) : f === 143 ? _ = this.reset(m, _) : f === 8 ? _.currentWindow.backspace() : f === 12 ? _.currentWindow.clearText() : f === 13 ? _.currentWindow.pendingNewLine = !0 : f === 14 ? _.currentWindow.clearText() : f === 141 && m++
    }
    ,
    de.prototype.extendedCommands = function(T, d) {
        var h = this.current708Packet.data
          , f = h[++T];
        return Po(f) && (T = this.handleText(T, d, !0)),
        T
    }
    ,
    de.prototype.getPts = function(T) {
        return this.current708Packet.ptsVals[Math.floor(T / 2)]
    }
    ,
    de.prototype.initService = function(T, d) {
        var h = this;
        return this.services[T] = new ca(T),
        this.services[T].init(this.getPts(d), function(f) {
            h.flushDisplayed(f, h.services[T])
        }),
        this.services[T]
    }
    ,
    de.prototype.handleText = function(T, d, h) {
        var f = this.current708Packet.data
          , m = f[T]
          , v = h ? 4096 : 0
          , _ = zf(v | m)
          , E = d.currentWindow;
        return E.pendingNewLine && !E.isEmpty() && E.newLine(this.getPts(T)),
        E.pendingNewLine = !1,
        E.addText(_),
        T
    }
    ,
    de.prototype.setCurrentWindow = function(T, d) {
        var h = this.current708Packet.data
          , f = h[T]
          , m = f & 7;
        return d.setCurrentWindow(m),
        T
    }
    ,
    de.prototype.defineWindow = function(T, d) {
        var h = this.current708Packet.data
          , f = h[T]
          , m = f & 7;
        d.setCurrentWindow(m);
        var v = d.currentWindow;
        return f = h[++T],
        v.visible = (f & 32) >> 5,
        v.rowLock = (f & 16) >> 4,
        v.columnLock = (f & 8) >> 3,
        v.priority = f & 7,
        f = h[++T],
        v.relativePositioning = (f & 128) >> 7,
        v.anchorVertical = f & 127,
        f = h[++T],
        v.anchorHorizontal = f,
        f = h[++T],
        v.anchorPoint = (f & 240) >> 4,
        v.rowCount = f & 15,
        f = h[++T],
        v.columnCount = f & 63,
        f = h[++T],
        v.windowStyle = (f & 56) >> 3,
        v.penStyle = f & 7,
        v.virtualRowCount = v.rowCount + 1,
        T
    }
    ,
    de.prototype.setWindowAttributes = function(T, d) {
        var h = this.current708Packet.data
          , f = h[T]
          , m = d.currentWindow.winAttr;
        return f = h[++T],
        m.fillOpacity = (f & 192) >> 6,
        m.fillRed = (f & 48) >> 4,
        m.fillGreen = (f & 12) >> 2,
        m.fillBlue = f & 3,
        f = h[++T],
        m.borderType = (f & 192) >> 6,
        m.borderRed = (f & 48) >> 4,
        m.borderGreen = (f & 12) >> 2,
        m.borderBlue = f & 3,
        f = h[++T],
        m.borderType += (f & 128) >> 5,
        m.wordWrap = (f & 64) >> 6,
        m.printDirection = (f & 48) >> 4,
        m.scrollDirection = (f & 12) >> 2,
        m.justify = f & 3,
        f = h[++T],
        m.effectSpeed = (f & 240) >> 4,
        m.effectDirection = (f & 12) >> 2,
        m.displayEffect = f & 3,
        T
    }
    ,
    de.prototype.flushDisplayed = function(T, d) {
        for (var h = [], f = 0; f < 8; f++)
            d.windows[f].visible && !d.windows[f].isEmpty() && h.push(d.windows[f].getText());
        d.endPts = T,
        d.text = h.join(`

`),
        this.pushCaption(d),
        d.startPts = T
    }
    ,
    de.prototype.pushCaption = function(T) {
        T.text !== "" && (this.trigger("data", {
            startPts: T.startPts,
            endPts: T.endPts,
            text: T.text,
            stream: "cc708_" + T.serviceNum
        }),
        T.text = "",
        T.startPts = T.endPts)
    }
    ,
    de.prototype.displayWindows = function(T, d) {
        var h = this.current708Packet.data
          , f = h[++T]
          , m = this.getPts(T);
        this.flushDisplayed(m, d);
        for (var v = 0; v < 8; v++)
            f & 1 << v && (d.windows[v].visible = 1);
        return T
    }
    ,
    de.prototype.hideWindows = function(T, d) {
        var h = this.current708Packet.data
          , f = h[++T]
          , m = this.getPts(T);
        this.flushDisplayed(m, d);
        for (var v = 0; v < 8; v++)
            f & 1 << v && (d.windows[v].visible = 0);
        return T
    }
    ,
    de.prototype.toggleWindows = function(T, d) {
        var h = this.current708Packet.data
          , f = h[++T]
          , m = this.getPts(T);
        this.flushDisplayed(m, d);
        for (var v = 0; v < 8; v++)
            f & 1 << v && (d.windows[v].visible ^= 1);
        return T
    }
    ,
    de.prototype.clearWindows = function(T, d) {
        var h = this.current708Packet.data
          , f = h[++T]
          , m = this.getPts(T);
        this.flushDisplayed(m, d);
        for (var v = 0; v < 8; v++)
            f & 1 << v && d.windows[v].clearText();
        return T
    }
    ,
    de.prototype.deleteWindows = function(T, d) {
        var h = this.current708Packet.data
          , f = h[++T]
          , m = this.getPts(T);
        this.flushDisplayed(m, d);
        for (var v = 0; v < 8; v++)
            f & 1 << v && d.windows[v].reset();
        return T
    }
    ,
    de.prototype.setPenAttributes = function(T, d) {
        var h = this.current708Packet.data
          , f = h[T]
          , m = d.currentWindow.penAttr;
        return f = h[++T],
        m.textTag = (f & 240) >> 4,
        m.offset = (f & 12) >> 2,
        m.penSize = f & 3,
        f = h[++T],
        m.italics = (f & 128) >> 7,
        m.underline = (f & 64) >> 6,
        m.edgeType = (f & 56) >> 3,
        m.fontStyle = f & 7,
        T
    }
    ,
    de.prototype.setPenColor = function(T, d) {
        var h = this.current708Packet.data
          , f = h[T]
          , m = d.currentWindow.penColor;
        return f = h[++T],
        m.fgOpacity = (f & 192) >> 6,
        m.fgRed = (f & 48) >> 4,
        m.fgGreen = (f & 12) >> 2,
        m.fgBlue = f & 3,
        f = h[++T],
        m.bgOpacity = (f & 192) >> 6,
        m.bgRed = (f & 48) >> 4,
        m.bgGreen = (f & 12) >> 2,
        m.bgBlue = f & 3,
        f = h[++T],
        m.edgeRed = (f & 48) >> 4,
        m.edgeGreen = (f & 12) >> 2,
        m.edgeBlue = f & 3,
        T
    }
    ,
    de.prototype.setPenLocation = function(T, d) {
        var h = this.current708Packet.data
          , f = h[T]
          , m = d.currentWindow.penLoc;
        return d.currentWindow.pendingNewLine = !0,
        f = h[++T],
        m.row = f & 15,
        f = h[++T],
        m.column = f & 63,
        T
    }
    ,
    de.prototype.reset = function(T, d) {
        var h = this.getPts(T);
        return this.flushDisplayed(h, d),
        this.initService(d.serviceNum, T)
    }
    ;
    var $f = {
        42: 225,
        92: 233,
        94: 237,
        95: 243,
        96: 250,
        123: 231,
        124: 247,
        125: 209,
        126: 241,
        127: 9608,
        304: 174,
        305: 176,
        306: 189,
        307: 191,
        308: 8482,
        309: 162,
        310: 163,
        311: 9834,
        312: 224,
        313: 160,
        314: 232,
        315: 226,
        316: 234,
        317: 238,
        318: 244,
        319: 251,
        544: 193,
        545: 201,
        546: 211,
        547: 218,
        548: 220,
        549: 252,
        550: 8216,
        551: 161,
        552: 42,
        553: 39,
        554: 8212,
        555: 169,
        556: 8480,
        557: 8226,
        558: 8220,
        559: 8221,
        560: 192,
        561: 194,
        562: 199,
        563: 200,
        564: 202,
        565: 203,
        566: 235,
        567: 206,
        568: 207,
        569: 239,
        570: 212,
        571: 217,
        572: 249,
        573: 219,
        574: 171,
        575: 187,
        800: 195,
        801: 227,
        802: 205,
        803: 204,
        804: 236,
        805: 210,
        806: 242,
        807: 213,
        808: 245,
        809: 123,
        810: 125,
        811: 92,
        812: 94,
        813: 95,
        814: 124,
        815: 126,
        816: 196,
        817: 228,
        818: 214,
        819: 246,
        820: 223,
        821: 165,
        822: 164,
        823: 9474,
        824: 197,
        825: 229,
        826: 216,
        827: 248,
        828: 9484,
        829: 9488,
        830: 9492,
        831: 9496
    }
      , Mi = function(d) {
        return d === null ? "" : (d = $f[d] || d,
        String.fromCharCode(d))
    }
      , Fi = 14
      , Kf = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152]
      , Vt = function() {
        for (var d = [], h = Fi + 1; h--; )
            d.push("");
        return d
    }
      , ge = function T(d, h) {
        T.prototype.init.call(this),
        this.field_ = d || 0,
        this.dataChannel_ = h || 0,
        this.name_ = "CC" + ((this.field_ << 1 | this.dataChannel_) + 1),
        this.setConstants(),
        this.reset(),
        this.push = function(f) {
            var m, v, _, E, C;
            if (m = f.ccData & 32639,
            m === this.lastControlCode_) {
                this.lastControlCode_ = null;
                return
            }
            if ((m & 61440) === 4096 ? this.lastControlCode_ = m : m !== this.PADDING_ && (this.lastControlCode_ = null),
            _ = m >>> 8,
            E = m & 255,
            m !== this.PADDING_)
                if (m === this.RESUME_CAPTION_LOADING_)
                    this.mode_ = "popOn";
                else if (m === this.END_OF_CAPTION_)
                    this.mode_ = "popOn",
                    this.clearFormatting(f.pts),
                    this.flushDisplayed(f.pts),
                    v = this.displayed_,
                    this.displayed_ = this.nonDisplayed_,
                    this.nonDisplayed_ = v,
                    this.startPts_ = f.pts;
                else if (m === this.ROLL_UP_2_ROWS_)
                    this.rollUpRows_ = 2,
                    this.setRollUp(f.pts);
                else if (m === this.ROLL_UP_3_ROWS_)
                    this.rollUpRows_ = 3,
                    this.setRollUp(f.pts);
                else if (m === this.ROLL_UP_4_ROWS_)
                    this.rollUpRows_ = 4,
                    this.setRollUp(f.pts);
                else if (m === this.CARRIAGE_RETURN_)
                    this.clearFormatting(f.pts),
                    this.flushDisplayed(f.pts),
                    this.shiftRowsUp_(),
                    this.startPts_ = f.pts;
                else if (m === this.BACKSPACE_)
                    this.mode_ === "popOn" ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1);
                else if (m === this.ERASE_DISPLAYED_MEMORY_)
                    this.flushDisplayed(f.pts),
                    this.displayed_ = Vt();
                else if (m === this.ERASE_NON_DISPLAYED_MEMORY_)
                    this.nonDisplayed_ = Vt();
                else if (m === this.RESUME_DIRECT_CAPTIONING_)
                    this.mode_ !== "paintOn" && (this.flushDisplayed(f.pts),
                    this.displayed_ = Vt()),
                    this.mode_ = "paintOn",
                    this.startPts_ = f.pts;
                else if (this.isSpecialCharacter(_, E))
                    _ = (_ & 3) << 8,
                    C = Mi(_ | E),
                    this[this.mode_](f.pts, C),
                    this.column_++;
                else if (this.isExtCharacter(_, E))
                    this.mode_ === "popOn" ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[this.row_] = this.displayed_[this.row_].slice(0, -1),
                    _ = (_ & 3) << 8,
                    C = Mi(_ | E),
                    this[this.mode_](f.pts, C),
                    this.column_++;
                else if (this.isMidRowCode(_, E))
                    this.clearFormatting(f.pts),
                    this[this.mode_](f.pts, " "),
                    this.column_++,
                    (E & 14) === 14 && this.addFormatting(f.pts, ["i"]),
                    (E & 1) === 1 && this.addFormatting(f.pts, ["u"]);
                else if (this.isOffsetControlCode(_, E))
                    this.column_ += E & 3;
                else if (this.isPAC(_, E)) {
                    var w = Kf.indexOf(m & 7968);
                    this.mode_ === "rollUp" && (w - this.rollUpRows_ + 1 < 0 && (w = this.rollUpRows_ - 1),
                    this.setRollUp(f.pts, w)),
                    w !== this.row_ && (this.clearFormatting(f.pts),
                    this.row_ = w),
                    E & 1 && this.formatting_.indexOf("u") === -1 && this.addFormatting(f.pts, ["u"]),
                    (m & 16) === 16 && (this.column_ = ((m & 14) >> 1) * 4),
                    this.isColorPAC(E) && (E & 14) === 14 && this.addFormatting(f.pts, ["i"])
                } else
                    this.isNormalChar(_) && (E === 0 && (E = null),
                    C = Mi(_),
                    C += Mi(E),
                    this[this.mode_](f.pts, C),
                    this.column_ += C.length)
        }
    };
    ge.prototype = new t,
    ge.prototype.flushDisplayed = function(T) {
        var d = this.displayed_.map(function(h) {
            try {
                return h.trim()
            } catch {
                return console.error("Skipping malformed caption."),
                ""
            }
        }).join(`
`).replace(/^\n+|\n+$/g, "");
        d.length && this.trigger("data", {
            startPts: this.startPts_,
            endPts: T,
            text: d,
            stream: this.name_
        })
    }
    ,
    ge.prototype.reset = function() {
        this.mode_ = "popOn",
        this.topRow_ = 0,
        this.startPts_ = 0,
        this.displayed_ = Vt(),
        this.nonDisplayed_ = Vt(),
        this.lastControlCode_ = null,
        this.column_ = 0,
        this.row_ = Fi,
        this.rollUpRows_ = 2,
        this.formatting_ = []
    }
    ,
    ge.prototype.setConstants = function() {
        this.dataChannel_ === 0 ? (this.BASE_ = 16,
        this.EXT_ = 17,
        this.CONTROL_ = (20 | this.field_) << 8,
        this.OFFSET_ = 23) : this.dataChannel_ === 1 && (this.BASE_ = 24,
        this.EXT_ = 25,
        this.CONTROL_ = (28 | this.field_) << 8,
        this.OFFSET_ = 31),
        this.PADDING_ = 0,
        this.RESUME_CAPTION_LOADING_ = this.CONTROL_ | 32,
        this.END_OF_CAPTION_ = this.CONTROL_ | 47,
        this.ROLL_UP_2_ROWS_ = this.CONTROL_ | 37,
        this.ROLL_UP_3_ROWS_ = this.CONTROL_ | 38,
        this.ROLL_UP_4_ROWS_ = this.CONTROL_ | 39,
        this.CARRIAGE_RETURN_ = this.CONTROL_ | 45,
        this.RESUME_DIRECT_CAPTIONING_ = this.CONTROL_ | 41,
        this.BACKSPACE_ = this.CONTROL_ | 33,
        this.ERASE_DISPLAYED_MEMORY_ = this.CONTROL_ | 44,
        this.ERASE_NON_DISPLAYED_MEMORY_ = this.CONTROL_ | 46
    }
    ,
    ge.prototype.isSpecialCharacter = function(T, d) {
        return T === this.EXT_ && d >= 48 && d <= 63
    }
    ,
    ge.prototype.isExtCharacter = function(T, d) {
        return (T === this.EXT_ + 1 || T === this.EXT_ + 2) && d >= 32 && d <= 63
    }
    ,
    ge.prototype.isMidRowCode = function(T, d) {
        return T === this.EXT_ && d >= 32 && d <= 47
    }
    ,
    ge.prototype.isOffsetControlCode = function(T, d) {
        return T === this.OFFSET_ && d >= 33 && d <= 35
    }
    ,
    ge.prototype.isPAC = function(T, d) {
        return T >= this.BASE_ && T < this.BASE_ + 8 && d >= 64 && d <= 127
    }
    ,
    ge.prototype.isColorPAC = function(T) {
        return T >= 64 && T <= 79 || T >= 96 && T <= 127
    }
    ,
    ge.prototype.isNormalChar = function(T) {
        return T >= 32 && T <= 127
    }
    ,
    ge.prototype.setRollUp = function(T, d) {
        if (this.mode_ !== "rollUp" && (this.row_ = Fi,
        this.mode_ = "rollUp",
        this.flushDisplayed(T),
        this.nonDisplayed_ = Vt(),
        this.displayed_ = Vt()),
        d !== void 0 && d !== this.row_)
            for (var h = 0; h < this.rollUpRows_; h++)
                this.displayed_[d - h] = this.displayed_[this.row_ - h],
                this.displayed_[this.row_ - h] = "";
        d === void 0 && (d = this.row_),
        this.topRow_ = d - this.rollUpRows_ + 1
    }
    ,
    ge.prototype.addFormatting = function(T, d) {
        this.formatting_ = this.formatting_.concat(d);
        var h = d.reduce(function(f, m) {
            return f + "<" + m + ">"
        }, "");
        this[this.mode_](T, h)
    }
    ,
    ge.prototype.clearFormatting = function(T) {
        if (this.formatting_.length) {
            var d = this.formatting_.reverse().reduce(function(h, f) {
                return h + "</" + f + ">"
            }, "");
            this.formatting_ = [],
            this[this.mode_](T, d)
        }
    }
    ,
    ge.prototype.popOn = function(T, d) {
        var h = this.nonDisplayed_[this.row_];
        h += d,
        this.nonDisplayed_[this.row_] = h
    }
    ,
    ge.prototype.rollUp = function(T, d) {
        var h = this.displayed_[this.row_];
        h += d,
        this.displayed_[this.row_] = h
    }
    ,
    ge.prototype.shiftRowsUp_ = function() {
        var T;
        for (T = 0; T < this.topRow_; T++)
            this.displayed_[T] = "";
        for (T = this.row_ + 1; T < Fi + 1; T++)
            this.displayed_[T] = "";
        for (T = this.topRow_; T < this.row_; T++)
            this.displayed_[T] = this.displayed_[T + 1];
        this.displayed_[this.row_] = ""
    }
    ,
    ge.prototype.paintOn = function(T, d) {
        var h = this.displayed_[this.row_];
        h += d,
        this.displayed_[this.row_] = h
    }
    ;
    var Ni = {
        CaptionStream: Ke,
        Cea608Stream: ge,
        Cea708Stream: de
    }
      , Ae = {
        H264_STREAM_TYPE: 27,
        ADTS_STREAM_TYPE: 15,
        METADATA_STREAM_TYPE: 21
    }
      , Xf = 8589934592
      , Yf = 4294967296
      , Io = "shared"
      , fa = function(d, h) {
        var f = 1;
        for (d > h && (f = -1); Math.abs(h - d) > Yf; )
            d += f * Xf;
        return d
    }
      , Do = function T(d) {
        var h, f;
        T.prototype.init.call(this),
        this.type_ = d || Io,
        this.push = function(m) {
            this.type_ !== Io && m.type !== this.type_ || (f === void 0 && (f = m.dts),
            m.dts = fa(m.dts, f),
            m.pts = fa(m.pts, f),
            h = m.dts,
            this.trigger("data", m))
        }
        ,
        this.flush = function() {
            f = h,
            this.trigger("done")
        }
        ,
        this.endTimeline = function() {
            this.flush(),
            this.trigger("endedtimeline")
        }
        ,
        this.discontinuity = function() {
            f = void 0,
            h = void 0
        }
        ,
        this.reset = function() {
            this.discontinuity(),
            this.trigger("reset")
        }
    };
    Do.prototype = new t;
    var Oo = {
        TimestampRolloverStream: Do,
        handleRollover: fa
    }, Lo = function(d, h, f) {
        var m, v = "";
        for (m = h; m < f; m++)
            v += "%" + ("00" + d[m].toString(16)).slice(-2);
        return v
    }, Ui = function(d, h, f) {
        return decodeURIComponent(Lo(d, h, f))
    }, Qf = function(d, h, f) {
        return unescape(Lo(d, h, f))
    }, Bi = function(d) {
        return d[0] << 21 | d[1] << 14 | d[2] << 7 | d[3]
    }, Ro = {
        TXXX: function(d) {
            var h;
            if (d.data[0] === 3) {
                for (h = 1; h < d.data.length; h++)
                    if (d.data[h] === 0) {
                        d.description = Ui(d.data, 1, h),
                        d.value = Ui(d.data, h + 1, d.data.length).replace(/\0*$/, "");
                        break
                    }
                d.data = d.value
            }
        },
        WXXX: function(d) {
            var h;
            if (d.data[0] === 3) {
                for (h = 1; h < d.data.length; h++)
                    if (d.data[h] === 0) {
                        d.description = Ui(d.data, 1, h),
                        d.url = Ui(d.data, h + 1, d.data.length);
                        break
                    }
            }
        },
        PRIV: function(d) {
            var h;
            for (h = 0; h < d.data.length; h++)
                if (d.data[h] === 0) {
                    d.owner = Qf(d.data, 0, h);
                    break
                }
            d.privateData = d.data.subarray(h + 1),
            d.data = d.privateData
        }
    }, Hi;
    Hi = function(d) {
        var h = {
            debug: !!(d && d.debug),
            descriptor: d && d.descriptor
        }, f = 0, m = [], v = 0, _;
        if (Hi.prototype.init.call(this),
        this.dispatchType = Ae.METADATA_STREAM_TYPE.toString(16),
        h.descriptor)
            for (_ = 0; _ < h.descriptor.length; _++)
                this.dispatchType += ("00" + h.descriptor[_].toString(16)).slice(-2);
        this.push = function(E) {
            var C, w, k, O, N, q;
            if (E.type === "timed-metadata") {
                if (E.dataAlignmentIndicator && (v = 0,
                m.length = 0),
                m.length === 0 && (E.data.length < 10 || E.data[0] !== 73 || E.data[1] !== 68 || E.data[2] !== 51)) {
                    h.debug && console.log("Skipping unrecognized metadata packet");
                    return
                }
                if (m.push(E),
                v += E.data.byteLength,
                m.length === 1 && (f = Bi(E.data.subarray(6, 10)),
                f += 10),
                !(v < f)) {
                    for (C = {
                        data: new Uint8Array(f),
                        frames: [],
                        pts: m[0].pts,
                        dts: m[0].dts
                    },
                    N = 0; N < f; )
                        C.data.set(m[0].data.subarray(0, f - N), N),
                        N += m[0].data.byteLength,
                        v -= m[0].data.byteLength,
                        m.shift();
                    w = 10,
                    C.data[5] & 64 && (w += 4,
                    w += Bi(C.data.subarray(10, 14)),
                    f -= Bi(C.data.subarray(16, 20)));
                    do {
                        if (k = Bi(C.data.subarray(w + 4, w + 8)),
                        k < 1)
                            return console.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                        if (q = String.fromCharCode(C.data[w], C.data[w + 1], C.data[w + 2], C.data[w + 3]),
                        O = {
                            id: q,
                            data: C.data.subarray(w + 10, w + k + 10)
                        },
                        O.key = O.id,
                        Ro[O.id] && (Ro[O.id](O),
                        O.owner === "com.apple.streaming.transportStreamTimestamp")) {
                            var $ = O.data
                              , X = ($[3] & 1) << 30 | $[4] << 22 | $[5] << 14 | $[6] << 6 | $[7] >>> 2;
                            X *= 4,
                            X += $[7] & 3,
                            O.timeStamp = X,
                            C.pts === void 0 && C.dts === void 0 && (C.pts = O.timeStamp,
                            C.dts = O.timeStamp),
                            this.trigger("timestamp", O)
                        }
                        C.frames.push(O),
                        w += 10,
                        w += k
                    } while (w < f);
                    this.trigger("data", C)
                }
            }
        }
    }
    ,
    Hi.prototype = new t;
    var Jf = Hi, Zf = Oo.TimestampRolloverStream, ji, qr, Vi, sr = 188, ha = 71;
    ji = function() {
        var d = new Uint8Array(sr)
          , h = 0;
        ji.prototype.init.call(this),
        this.push = function(f) {
            var m = 0, v = sr, _;
            for (h ? (_ = new Uint8Array(f.byteLength + h),
            _.set(d.subarray(0, h)),
            _.set(f, h),
            h = 0) : _ = f; v < _.byteLength; ) {
                if (_[m] === ha && _[v] === ha) {
                    this.trigger("data", _.subarray(m, v)),
                    m += sr,
                    v += sr;
                    continue
                }
                m++,
                v++
            }
            m < _.byteLength && (d.set(_.subarray(m), 0),
            h = _.byteLength - m)
        }
        ,
        this.flush = function() {
            h === sr && d[0] === ha && (this.trigger("data", d),
            h = 0),
            this.trigger("done")
        }
        ,
        this.endTimeline = function() {
            this.flush(),
            this.trigger("endedtimeline")
        }
        ,
        this.reset = function() {
            h = 0,
            this.trigger("reset")
        }
    }
    ,
    ji.prototype = new t,
    qr = function() {
        var d, h, f, m;
        qr.prototype.init.call(this),
        m = this,
        this.packetsWaitingForPmt = [],
        this.programMapTable = void 0,
        d = function(_, E) {
            var C = 0;
            E.payloadUnitStartIndicator && (C += _[C] + 1),
            E.type === "pat" ? h(_.subarray(C), E) : f(_.subarray(C), E)
        }
        ,
        h = function(_, E) {
            E.section_number = _[7],
            E.last_section_number = _[8],
            m.pmtPid = (_[10] & 31) << 8 | _[11],
            E.pmtPid = m.pmtPid
        }
        ,
        f = function(_, E) {
            var C, w, k, O;
            if (_[5] & 1) {
                for (m.programMapTable = {
                    video: null,
                    audio: null,
                    "timed-metadata": {}
                },
                C = (_[1] & 15) << 8 | _[2],
                w = 3 + C - 4,
                k = (_[10] & 15) << 8 | _[11],
                O = 12 + k; O < w; ) {
                    var N = _[O]
                      , q = (_[O + 1] & 31) << 8 | _[O + 2];
                    N === Ae.H264_STREAM_TYPE && m.programMapTable.video === null ? m.programMapTable.video = q : N === Ae.ADTS_STREAM_TYPE && m.programMapTable.audio === null ? m.programMapTable.audio = q : N === Ae.METADATA_STREAM_TYPE && (m.programMapTable["timed-metadata"][q] = N),
                    O += ((_[O + 3] & 15) << 8 | _[O + 4]) + 5
                }
                E.programMapTable = m.programMapTable
            }
        }
        ,
        this.push = function(v) {
            var _ = {}
              , E = 4;
            if (_.payloadUnitStartIndicator = !!(v[1] & 64),
            _.pid = v[1] & 31,
            _.pid <<= 8,
            _.pid |= v[2],
            (v[3] & 48) >>> 4 > 1 && (E += v[E] + 1),
            _.pid === 0)
                _.type = "pat",
                d(v.subarray(E), _),
                this.trigger("data", _);
            else if (_.pid === this.pmtPid)
                for (_.type = "pmt",
                d(v.subarray(E), _),
                this.trigger("data", _); this.packetsWaitingForPmt.length; )
                    this.processPes_.apply(this, this.packetsWaitingForPmt.shift());
            else
                this.programMapTable === void 0 ? this.packetsWaitingForPmt.push([v, E, _]) : this.processPes_(v, E, _)
        }
        ,
        this.processPes_ = function(v, _, E) {
            E.pid === this.programMapTable.video ? E.streamType = Ae.H264_STREAM_TYPE : E.pid === this.programMapTable.audio ? E.streamType = Ae.ADTS_STREAM_TYPE : E.streamType = this.programMapTable["timed-metadata"][E.pid],
            E.type = "pes",
            E.data = v.subarray(_),
            this.trigger("data", E)
        }
    }
    ,
    qr.prototype = new t,
    qr.STREAM_TYPES = {
        h264: 27,
        adts: 15
    },
    Vi = function() {
        var d = this, h = {
            data: [],
            size: 0
        }, f = {
            data: [],
            size: 0
        }, m = {
            data: [],
            size: 0
        }, v, _ = function(w, k) {
            var O, N = w[0] << 16 | w[1] << 8 | w[2];
            k.data = new Uint8Array,
            N === 1 && (k.packetLength = 6 + (w[4] << 8 | w[5]),
            k.dataAlignmentIndicator = (w[6] & 4) !== 0,
            O = w[7],
            O & 192 && (k.pts = (w[9] & 14) << 27 | (w[10] & 255) << 20 | (w[11] & 254) << 12 | (w[12] & 255) << 5 | (w[13] & 254) >>> 3,
            k.pts *= 4,
            k.pts += (w[13] & 6) >>> 1,
            k.dts = k.pts,
            O & 64 && (k.dts = (w[14] & 14) << 27 | (w[15] & 255) << 20 | (w[16] & 254) << 12 | (w[17] & 255) << 5 | (w[18] & 254) >>> 3,
            k.dts *= 4,
            k.dts += (w[18] & 6) >>> 1)),
            k.data = w.subarray(9 + w[8]))
        }, E = function(w, k, O) {
            var N = new Uint8Array(w.size), q = {
                type: k
            }, $ = 0, X = 0, W = !1, Se;
            if (!(!w.data.length || w.size < 9)) {
                for (q.trackId = w.data[0].pid,
                $ = 0; $ < w.data.length; $++)
                    Se = w.data[$],
                    N.set(Se.data, X),
                    X += Se.data.byteLength;
                _(N, q),
                W = k === "video" || q.packetLength <= w.size,
                (O || W) && (w.size = 0,
                w.data.length = 0),
                W && d.trigger("data", q)
            }
        };
        Vi.prototype.init.call(this),
        this.push = function(C) {
            ({
                pat: function() {},
                pes: function() {
                    var k, O;
                    switch (C.streamType) {
                    case Ae.H264_STREAM_TYPE:
                        k = h,
                        O = "video";
                        break;
                    case Ae.ADTS_STREAM_TYPE:
                        k = f,
                        O = "audio";
                        break;
                    case Ae.METADATA_STREAM_TYPE:
                        k = m,
                        O = "timed-metadata";
                        break;
                    default:
                        return
                    }
                    C.payloadUnitStartIndicator && E(k, O, !0),
                    k.data.push(C),
                    k.size += C.data.byteLength
                },
                pmt: function() {
                    var k = {
                        type: "metadata",
                        tracks: []
                    };
                    v = C.programMapTable,
                    v.video !== null && k.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +v.video,
                        codec: "avc",
                        type: "video"
                    }),
                    v.audio !== null && k.tracks.push({
                        timelineStartInfo: {
                            baseMediaDecodeTime: 0
                        },
                        id: +v.audio,
                        codec: "adts",
                        type: "audio"
                    }),
                    d.trigger("data", k)
                }
            })[C.type]()
        }
        ,
        this.reset = function() {
            h.size = 0,
            h.data.length = 0,
            f.size = 0,
            f.data.length = 0,
            this.trigger("reset")
        }
        ,
        this.flushStreams_ = function() {
            E(h, "video"),
            E(f, "audio"),
            E(m, "timed-metadata")
        }
        ,
        this.flush = function() {
            this.flushStreams_(),
            this.trigger("done")
        }
    }
    ,
    Vi.prototype = new t;
    var Mo = {
        PAT_PID: 0,
        MP2T_PACKET_LENGTH: sr,
        TransportPacketStream: ji,
        TransportParseStream: qr,
        ElementaryStream: Vi,
        TimestampRolloverStream: Zf,
        CaptionStream: Ni.CaptionStream,
        Cea608Stream: Ni.Cea608Stream,
        Cea708Stream: Ni.Cea708Stream,
        MetadataStream: Jf
    };
    for (var pa in Ae)
        Ae.hasOwnProperty(pa) && (Mo[pa] = Ae[pa]);
    var yt = Mo, eh = re.ONE_SECOND_IN_TS, Wi, Fo = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    Wi = function(d) {
        var h, f = 0;
        Wi.prototype.init.call(this),
        this.push = function(m) {
            var v = 0, _, E, C, w, k, O;
            if (d || (f = 0),
            m.type === "audio")
                for (h ? (w = h,
                h = new Uint8Array(w.byteLength + m.data.byteLength),
                h.set(w),
                h.set(m.data, w.byteLength)) : h = m.data; v + 5 < h.length; ) {
                    if (h[v] !== 255 || (h[v + 1] & 246) !== 240) {
                        v++;
                        continue
                    }
                    if (E = (~h[v + 1] & 1) * 2,
                    _ = (h[v + 3] & 3) << 11 | h[v + 4] << 3 | (h[v + 5] & 224) >> 5,
                    k = ((h[v + 6] & 3) + 1) * 1024,
                    O = k * eh / Fo[(h[v + 2] & 60) >>> 2],
                    C = v + _,
                    h.byteLength < C)
                        return;
                    if (this.trigger("data", {
                        pts: m.pts + f * O,
                        dts: m.dts + f * O,
                        sampleCount: k,
                        audioobjecttype: (h[v + 2] >>> 6 & 3) + 1,
                        channelcount: (h[v + 2] & 1) << 2 | (h[v + 3] & 192) >>> 6,
                        samplerate: Fo[(h[v + 2] & 60) >>> 2],
                        samplingfrequencyindex: (h[v + 2] & 60) >>> 2,
                        samplesize: 16,
                        data: h.subarray(v + 7 + E, C)
                    }),
                    f++,
                    h.byteLength === C) {
                        h = void 0;
                        return
                    }
                    h = h.subarray(C)
                }
        }
        ,
        this.flush = function() {
            f = 0,
            this.trigger("done")
        }
        ,
        this.reset = function() {
            h = void 0,
            this.trigger("reset")
        }
        ,
        this.endTimeline = function() {
            h = void 0,
            this.trigger("endedtimeline")
        }
    }
    ,
    Wi.prototype = new t;
    var No = Wi, Uo;
    Uo = function(d) {
        var h = d.byteLength
          , f = 0
          , m = 0;
        this.length = function() {
            return 8 * h
        }
        ,
        this.bitsAvailable = function() {
            return 8 * h + m
        }
        ,
        this.loadWord = function() {
            var v = d.byteLength - h
              , _ = new Uint8Array(4)
              , E = Math.min(4, h);
            if (E === 0)
                throw new Error("no bytes available");
            _.set(d.subarray(v, v + E)),
            f = new DataView(_.buffer).getUint32(0),
            m = E * 8,
            h -= E
        }
        ,
        this.skipBits = function(v) {
            var _;
            m > v ? (f <<= v,
            m -= v) : (v -= m,
            _ = Math.floor(v / 8),
            v -= _ * 8,
            h -= _,
            this.loadWord(),
            f <<= v,
            m -= v)
        }
        ,
        this.readBits = function(v) {
            var _ = Math.min(m, v)
              , E = f >>> 32 - _;
            return m -= _,
            m > 0 ? f <<= _ : h > 0 && this.loadWord(),
            _ = v - _,
            _ > 0 ? E << _ | this.readBits(_) : E
        }
        ,
        this.skipLeadingZeros = function() {
            var v;
            for (v = 0; v < m; ++v)
                if (f & 2147483648 >>> v)
                    return f <<= v,
                    m -= v,
                    v;
            return this.loadWord(),
            v + this.skipLeadingZeros()
        }
        ,
        this.skipUnsignedExpGolomb = function() {
            this.skipBits(1 + this.skipLeadingZeros())
        }
        ,
        this.skipExpGolomb = function() {
            this.skipBits(1 + this.skipLeadingZeros())
        }
        ,
        this.readUnsignedExpGolomb = function() {
            var v = this.skipLeadingZeros();
            return this.readBits(v + 1) - 1
        }
        ,
        this.readExpGolomb = function() {
            var v = this.readUnsignedExpGolomb();
            return 1 & v ? 1 + v >>> 1 : -1 * (v >>> 1)
        }
        ,
        this.readBoolean = function() {
            return this.readBits(1) === 1
        }
        ,
        this.readUnsignedByte = function() {
            return this.readBits(8)
        }
        ,
        this.loadWord()
    }
    ;
    var th = Uo, Gi, zr, Bo;
    zr = function() {
        var d = 0, h, f;
        zr.prototype.init.call(this),
        this.push = function(m) {
            var v;
            f ? (v = new Uint8Array(f.byteLength + m.data.byteLength),
            v.set(f),
            v.set(m.data, f.byteLength),
            f = v) : f = m.data;
            for (var _ = f.byteLength; d < _ - 3; d++)
                if (f[d + 2] === 1) {
                    h = d + 5;
                    break
                }
            for (; h < _; )
                switch (f[h]) {
                case 0:
                    if (f[h - 1] !== 0) {
                        h += 2;
                        break
                    } else if (f[h - 2] !== 0) {
                        h++;
                        break
                    }
                    d + 3 !== h - 2 && this.trigger("data", f.subarray(d + 3, h - 2));
                    do
                        h++;
                    while (f[h] !== 1 && h < _);
                    d = h - 2,
                    h += 3;
                    break;
                case 1:
                    if (f[h - 1] !== 0 || f[h - 2] !== 0) {
                        h += 3;
                        break
                    }
                    this.trigger("data", f.subarray(d + 3, h - 2)),
                    d = h - 2,
                    h += 3;
                    break;
                default:
                    h += 3;
                    break
                }
            f = f.subarray(d),
            h -= d,
            d = 0
        }
        ,
        this.reset = function() {
            f = null,
            d = 0,
            this.trigger("reset")
        }
        ,
        this.flush = function() {
            f && f.byteLength > 3 && this.trigger("data", f.subarray(d + 3)),
            f = null,
            d = 0,
            this.trigger("done")
        }
        ,
        this.endTimeline = function() {
            this.flush(),
            this.trigger("endedtimeline")
        }
    }
    ,
    zr.prototype = new t,
    Bo = {
        100: !0,
        110: !0,
        122: !0,
        244: !0,
        44: !0,
        83: !0,
        86: !0,
        118: !0,
        128: !0,
        138: !0,
        139: !0,
        134: !0
    },
    Gi = function() {
        var d = new zr, h, f, m, v, _, E, C;
        Gi.prototype.init.call(this),
        h = this,
        this.push = function(w) {
            w.type === "video" && (f = w.trackId,
            m = w.pts,
            v = w.dts,
            d.push(w))
        }
        ,
        d.on("data", function(w) {
            var k = {
                trackId: f,
                pts: m,
                dts: v,
                data: w
            };
            switch (w[0] & 31) {
            case 5:
                k.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
                break;
            case 6:
                k.nalUnitType = "sei_rbsp",
                k.escapedRBSP = _(w.subarray(1));
                break;
            case 7:
                k.nalUnitType = "seq_parameter_set_rbsp",
                k.escapedRBSP = _(w.subarray(1)),
                k.config = E(k.escapedRBSP);
                break;
            case 8:
                k.nalUnitType = "pic_parameter_set_rbsp";
                break;
            case 9:
                k.nalUnitType = "access_unit_delimiter_rbsp";
                break
            }
            h.trigger("data", k)
        }),
        d.on("done", function() {
            h.trigger("done")
        }),
        d.on("partialdone", function() {
            h.trigger("partialdone")
        }),
        d.on("reset", function() {
            h.trigger("reset")
        }),
        d.on("endedtimeline", function() {
            h.trigger("endedtimeline")
        }),
        this.flush = function() {
            d.flush()
        }
        ,
        this.partialFlush = function() {
            d.partialFlush()
        }
        ,
        this.reset = function() {
            d.reset()
        }
        ,
        this.endTimeline = function() {
            d.endTimeline()
        }
        ,
        C = function(k, O) {
            var N = 8, q = 8, $, X;
            for ($ = 0; $ < k; $++)
                q !== 0 && (X = O.readExpGolomb(),
                q = (N + X + 256) % 256),
                N = q === 0 ? N : q
        }
        ,
        _ = function(k) {
            for (var O = k.byteLength, N = [], q = 1, $, X; q < O - 2; )
                k[q] === 0 && k[q + 1] === 0 && k[q + 2] === 3 ? (N.push(q + 2),
                q += 2) : q++;
            if (N.length === 0)
                return k;
            $ = O - N.length,
            X = new Uint8Array($);
            var W = 0;
            for (q = 0; q < $; W++,
            q++)
                W === N[0] && (W++,
                N.shift()),
                X[q] = k[W];
            return X
        }
        ,
        E = function(k) {
            var O = 0, N = 0, q = 0, $ = 0, X = 1, W, Se, nt, dr, Ta, ba, iu, nu, au, xa, su, _e, ou, zt;
            if (W = new th(k),
            Se = W.readUnsignedByte(),
            dr = W.readUnsignedByte(),
            nt = W.readUnsignedByte(),
            W.skipUnsignedExpGolomb(),
            Bo[Se] && (Ta = W.readUnsignedExpGolomb(),
            Ta === 3 && W.skipBits(1),
            W.skipUnsignedExpGolomb(),
            W.skipUnsignedExpGolomb(),
            W.skipBits(1),
            W.readBoolean()))
                for (su = Ta !== 3 ? 8 : 12,
                zt = 0; zt < su; zt++)
                    W.readBoolean() && (zt < 6 ? C(16, W) : C(64, W));
            if (W.skipUnsignedExpGolomb(),
            ba = W.readUnsignedExpGolomb(),
            ba === 0)
                W.readUnsignedExpGolomb();
            else if (ba === 1)
                for (W.skipBits(1),
                W.skipExpGolomb(),
                W.skipExpGolomb(),
                iu = W.readUnsignedExpGolomb(),
                zt = 0; zt < iu; zt++)
                    W.skipExpGolomb();
            if (W.skipUnsignedExpGolomb(),
            W.skipBits(1),
            nu = W.readUnsignedExpGolomb(),
            au = W.readUnsignedExpGolomb(),
            xa = W.readBits(1),
            xa === 0 && W.skipBits(1),
            W.skipBits(1),
            W.readBoolean() && (O = W.readUnsignedExpGolomb(),
            N = W.readUnsignedExpGolomb(),
            q = W.readUnsignedExpGolomb(),
            $ = W.readUnsignedExpGolomb()),
            W.readBoolean() && W.readBoolean()) {
                switch (ou = W.readUnsignedByte(),
                ou) {
                case 1:
                    _e = [1, 1];
                    break;
                case 2:
                    _e = [12, 11];
                    break;
                case 3:
                    _e = [10, 11];
                    break;
                case 4:
                    _e = [16, 11];
                    break;
                case 5:
                    _e = [40, 33];
                    break;
                case 6:
                    _e = [24, 11];
                    break;
                case 7:
                    _e = [20, 11];
                    break;
                case 8:
                    _e = [32, 11];
                    break;
                case 9:
                    _e = [80, 33];
                    break;
                case 10:
                    _e = [18, 11];
                    break;
                case 11:
                    _e = [15, 11];
                    break;
                case 12:
                    _e = [64, 33];
                    break;
                case 13:
                    _e = [160, 99];
                    break;
                case 14:
                    _e = [4, 3];
                    break;
                case 15:
                    _e = [3, 2];
                    break;
                case 16:
                    _e = [2, 1];
                    break;
                case 255:
                    {
                        _e = [W.readUnsignedByte() << 8 | W.readUnsignedByte(), W.readUnsignedByte() << 8 | W.readUnsignedByte()];
                        break
                    }
                }
                _e && (X = _e[0] / _e[1])
            }
            return {
                profileIdc: Se,
                levelIdc: nt,
                profileCompatibility: dr,
                width: Math.ceil(((nu + 1) * 16 - O * 2 - N * 2) * X),
                height: (2 - xa) * (au + 1) * 16 - q * 2 - $ * 2,
                sarRatio: _e
            }
        }
    }
    ,
    Gi.prototype = new t;
    var rh = {
        H264Stream: Gi,
        NalByteStream: zr
    }, ih = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], Ho = function(d, h) {
        var f = d[h + 6] << 21 | d[h + 7] << 14 | d[h + 8] << 7 | d[h + 9]
          , m = d[h + 5]
          , v = (m & 16) >> 4;
        return f = f >= 0 ? f : 0,
        v ? f + 20 : f + 10
    }, nh = function T(d, h) {
        return d.length - h < 10 || d[h] !== 73 || d[h + 1] !== 68 || d[h + 2] !== 51 ? h : (h += Ho(d, h),
        T(d, h))
    }, ah = function(d) {
        var h = nh(d, 0);
        return d.length >= h + 2 && (d[h] & 255) === 255 && (d[h + 1] & 240) === 240 && (d[h + 1] & 22) === 16
    }, jo = function(d) {
        return d[0] << 21 | d[1] << 14 | d[2] << 7 | d[3]
    }, sh = function(d, h, f) {
        var m, v = "";
        for (m = h; m < f; m++)
            v += "%" + ("00" + d[m].toString(16)).slice(-2);
        return v
    }, oh = function(d, h, f) {
        return unescape(sh(d, h, f))
    }, uh = function(d, h) {
        var f = (d[h + 5] & 224) >> 5
          , m = d[h + 4] << 3
          , v = d[h + 3] & 6144;
        return v | m | f
    }, lh = function(d, h) {
        return d[h] === 73 && d[h + 1] === 68 && d[h + 2] === 51 ? "timed-metadata" : d[h] & !0 && (d[h + 1] & 240) === 240 ? "audio" : null
    }, dh = function(d) {
        for (var h = 0; h + 5 < d.length; ) {
            if (d[h] !== 255 || (d[h + 1] & 246) !== 240) {
                h++;
                continue
            }
            return ih[(d[h + 2] & 60) >>> 2]
        }
        return null
    }, ch = function(d) {
        var h, f, m, v;
        h = 10,
        d[5] & 64 && (h += 4,
        h += jo(d.subarray(10, 14)));
        do {
            if (f = jo(d.subarray(h + 4, h + 8)),
            f < 1)
                return null;
            if (v = String.fromCharCode(d[h], d[h + 1], d[h + 2], d[h + 3]),
            v === "PRIV") {
                m = d.subarray(h + 10, h + f + 10);
                for (var _ = 0; _ < m.byteLength; _++)
                    if (m[_] === 0) {
                        var E = oh(m, 0, _);
                        if (E === "com.apple.streaming.transportStreamTimestamp") {
                            var C = m.subarray(_ + 1)
                              , w = (C[3] & 1) << 30 | C[4] << 22 | C[5] << 14 | C[6] << 6 | C[7] >>> 2;
                            return w *= 4,
                            w += C[7] & 3,
                            w
                        }
                        break
                    }
            }
            h += 10,
            h += f
        } while (h < d.byteLength);
        return null
    }, qi = {
        isLikelyAacData: ah,
        parseId3TagSize: Ho,
        parseAdtsSize: uh,
        parseType: lh,
        parseSampleRate: dh,
        parseAacTimestamp: ch
    }, zi;
    zi = function() {
        var d = new Uint8Array
          , h = 0;
        zi.prototype.init.call(this),
        this.setTimestamp = function(f) {
            h = f
        }
        ,
        this.push = function(f) {
            var m = 0, v = 0, _, E, C, w;
            for (d.length ? (w = d.length,
            d = new Uint8Array(f.byteLength + w),
            d.set(d.subarray(0, w)),
            d.set(f, w)) : d = f; d.length - v >= 3; ) {
                if (d[v] === 73 && d[v + 1] === 68 && d[v + 2] === 51) {
                    if (d.length - v < 10 || (m = qi.parseId3TagSize(d, v),
                    v + m > d.length))
                        break;
                    E = {
                        type: "timed-metadata",
                        data: d.subarray(v, v + m)
                    },
                    this.trigger("data", E),
                    v += m;
                    continue
                } else if ((d[v] & 255) === 255 && (d[v + 1] & 240) === 240) {
                    if (d.length - v < 7 || (m = qi.parseAdtsSize(d, v),
                    v + m > d.length))
                        break;
                    C = {
                        type: "audio",
                        data: d.subarray(v, v + m),
                        pts: h,
                        dts: h
                    },
                    this.trigger("data", C),
                    v += m;
                    continue
                }
                v++
            }
            _ = d.length - v,
            _ > 0 ? d = d.subarray(v) : d = new Uint8Array
        }
        ,
        this.reset = function() {
            d = new Uint8Array,
            this.trigger("reset")
        }
        ,
        this.endTimeline = function() {
            d = new Uint8Array,
            this.trigger("endedtimeline")
        }
    }
    ,
    zi.prototype = new t;
    var fh = zi, hh = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"], ma = hh, ph = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"], ga = ph, mh = rh.H264Stream, gh = qi.isLikelyAacData, vh = re.ONE_SECOND_IN_TS, $r, or, $i, Wt, Vo = function(d, h) {
        var f;
        if (d.length !== h.length)
            return !1;
        for (f = 0; f < d.length; f++)
            if (d[f] !== h[f])
                return !1;
        return !0
    }, va = function(d, h, f, m, v, _) {
        var E = f - h
          , C = m - h
          , w = v - f;
        return {
            start: {
                dts: d,
                pts: d + E
            },
            end: {
                dts: d + C,
                pts: d + w
            },
            prependedContentDuration: _,
            baseMediaDecodeTime: d
        }
    };
    or = function(d, h) {
        var f = []
          , m = 0
          , v = 0
          , _ = 0
          , E = 1 / 0;
        h = h || {},
        or.prototype.init.call(this),
        this.push = function(C) {
            it.collectDtsInfo(d, C),
            d && ma.forEach(function(w) {
                d[w] = C[w]
            }),
            f.push(C)
        }
        ,
        this.setEarliestDts = function(C) {
            v = C
        }
        ,
        this.setVideoBaseMediaDecodeTime = function(C) {
            E = C
        }
        ,
        this.setAudioAppendStart = function(C) {
            _ = C
        }
        ,
        this.flush = function() {
            var C, w, k, O, N, q, $;
            if (f.length === 0) {
                this.trigger("done", "AudioSegmentStream");
                return
            }
            C = Ri.trimAdtsFramesByEarliestDts(f, d, v),
            d.baseMediaDecodeTime = it.calculateTrackBaseMediaDecodeTime(d, h.keepOriginalTimestamps),
            $ = Ri.prefixWithSilence(d, C, _, E),
            d.samples = Ri.generateSampleTable(C),
            k = ct.mdat(Ri.concatenateFrameData(C)),
            f = [],
            w = ct.moof(m, [d]),
            O = new Uint8Array(w.byteLength + k.byteLength),
            m++,
            O.set(w),
            O.set(k, w.byteLength),
            it.clearDtsInfo(d),
            N = Math.ceil(vh * 1024 / d.samplerate),
            C.length && (q = C.length * N,
            this.trigger("segmentTimingInfo", va(re.audioTsToVideoTs(d.baseMediaDecodeTime, d.samplerate), C[0].dts, C[0].pts, C[0].dts + q, C[0].pts + q, $ || 0)),
            this.trigger("timingInfo", {
                start: C[0].pts,
                end: C[0].pts + q
            })),
            this.trigger("data", {
                track: d,
                boxes: O
            }),
            this.trigger("done", "AudioSegmentStream")
        }
        ,
        this.reset = function() {
            it.clearDtsInfo(d),
            f = [],
            this.trigger("reset")
        }
    }
    ,
    or.prototype = new t,
    $r = function(d, h) {
        var f = 0, m = [], v = [], _, E;
        h = h || {},
        $r.prototype.init.call(this),
        delete d.minPTS,
        this.gopCache_ = [],
        this.push = function(C) {
            it.collectDtsInfo(d, C),
            C.nalUnitType === "seq_parameter_set_rbsp" && !_ && (_ = C.config,
            d.sps = [C.data],
            ga.forEach(function(w) {
                d[w] = _[w]
            }, this)),
            C.nalUnitType === "pic_parameter_set_rbsp" && !E && (E = C.data,
            d.pps = [C.data]),
            m.push(C)
        }
        ,
        this.flush = function() {
            for (var C, w, k, O, N, q, $ = 0, X, W; m.length && m[0].nalUnitType !== "access_unit_delimiter_rbsp"; )
                m.shift();
            if (m.length === 0) {
                this.resetStream_(),
                this.trigger("done", "VideoSegmentStream");
                return
            }
            if (C = Wr.groupNalsIntoFrames(m),
            k = Wr.groupFramesIntoGops(C),
            k[0][0].keyFrame || (w = this.getGopForFusion_(m[0], d),
            w ? ($ = w.duration,
            k.unshift(w),
            k.byteLength += w.byteLength,
            k.nalCount += w.nalCount,
            k.pts = w.pts,
            k.dts = w.dts,
            k.duration += w.duration) : k = Wr.extendFirstKeyFrame(k)),
            v.length) {
                var Se;
                if (h.alignGopsAtEnd ? Se = this.alignGopsAtEnd_(k) : Se = this.alignGopsAtStart_(k),
                !Se) {
                    this.gopCache_.unshift({
                        gop: k.pop(),
                        pps: d.pps,
                        sps: d.sps
                    }),
                    this.gopCache_.length = Math.min(6, this.gopCache_.length),
                    m = [],
                    this.resetStream_(),
                    this.trigger("done", "VideoSegmentStream");
                    return
                }
                it.clearDtsInfo(d),
                k = Se
            }
            it.collectDtsInfo(d, k),
            d.samples = Wr.generateSampleTable(k),
            N = ct.mdat(Wr.concatenateNalData(k)),
            d.baseMediaDecodeTime = it.calculateTrackBaseMediaDecodeTime(d, h.keepOriginalTimestamps),
            this.trigger("processedGopsInfo", k.map(function(nt) {
                return {
                    pts: nt.pts,
                    dts: nt.dts,
                    byteLength: nt.byteLength
                }
            })),
            X = k[0],
            W = k[k.length - 1],
            this.trigger("segmentTimingInfo", va(d.baseMediaDecodeTime, X.dts, X.pts, W.dts + W.duration, W.pts + W.duration, $)),
            this.trigger("timingInfo", {
                start: k[0].pts,
                end: k[k.length - 1].pts + k[k.length - 1].duration
            }),
            this.gopCache_.unshift({
                gop: k.pop(),
                pps: d.pps,
                sps: d.sps
            }),
            this.gopCache_.length = Math.min(6, this.gopCache_.length),
            m = [],
            this.trigger("baseMediaDecodeTime", d.baseMediaDecodeTime),
            this.trigger("timelineStartInfo", d.timelineStartInfo),
            O = ct.moof(f, [d]),
            q = new Uint8Array(O.byteLength + N.byteLength),
            f++,
            q.set(O),
            q.set(N, O.byteLength),
            this.trigger("data", {
                track: d,
                boxes: q
            }),
            this.resetStream_(),
            this.trigger("done", "VideoSegmentStream")
        }
        ,
        this.reset = function() {
            this.resetStream_(),
            m = [],
            this.gopCache_.length = 0,
            v.length = 0,
            this.trigger("reset")
        }
        ,
        this.resetStream_ = function() {
            it.clearDtsInfo(d),
            _ = void 0,
            E = void 0
        }
        ,
        this.getGopForFusion_ = function(C) {
            var w = 45e3, k = 1e4, O = 1 / 0, N, q, $, X, W;
            for (W = 0; W < this.gopCache_.length; W++)
                X = this.gopCache_[W],
                $ = X.gop,
                !(!(d.pps && Vo(d.pps[0], X.pps[0])) || !(d.sps && Vo(d.sps[0], X.sps[0]))) && ($.dts < d.timelineStartInfo.dts || (N = C.dts - $.dts - $.duration,
                N >= -k && N <= w && (!q || O > N) && (q = X,
                O = N)));
            return q ? q.gop : null
        }
        ,
        this.alignGopsAtStart_ = function(C) {
            var w, k, O, N, q, $, X, W;
            for (q = C.byteLength,
            $ = C.nalCount,
            X = C.duration,
            w = k = 0; w < v.length && k < C.length && (O = v[w],
            N = C[k],
            O.pts !== N.pts); ) {
                if (N.pts > O.pts) {
                    w++;
                    continue
                }
                k++,
                q -= N.byteLength,
                $ -= N.nalCount,
                X -= N.duration
            }
            return k === 0 ? C : k === C.length ? null : (W = C.slice(k),
            W.byteLength = q,
            W.duration = X,
            W.nalCount = $,
            W.pts = W[0].pts,
            W.dts = W[0].dts,
            W)
        }
        ,
        this.alignGopsAtEnd_ = function(C) {
            var w, k, O, N, q, $;
            for (w = v.length - 1,
            k = C.length - 1,
            q = null,
            $ = !1; w >= 0 && k >= 0; ) {
                if (O = v[w],
                N = C[k],
                O.pts === N.pts) {
                    $ = !0;
                    break
                }
                if (O.pts > N.pts) {
                    w--;
                    continue
                }
                w === v.length - 1 && (q = k),
                k--
            }
            if (!$ && q === null)
                return null;
            var X;
            if ($ ? X = k : X = q,
            X === 0)
                return C;
            var W = C.slice(X)
              , Se = W.reduce(function(nt, dr) {
                return nt.byteLength += dr.byteLength,
                nt.duration += dr.duration,
                nt.nalCount += dr.nalCount,
                nt
            }, {
                byteLength: 0,
                duration: 0,
                nalCount: 0
            });
            return W.byteLength = Se.byteLength,
            W.duration = Se.duration,
            W.nalCount = Se.nalCount,
            W.pts = W[0].pts,
            W.dts = W[0].dts,
            W
        }
        ,
        this.alignGopsWith = function(C) {
            v = C
        }
    }
    ,
    $r.prototype = new t,
    Wt = function(d, h) {
        this.numberOfTracks = 0,
        this.metadataStream = h,
        d = d || {},
        typeof d.remux < "u" ? this.remuxTracks = !!d.remux : this.remuxTracks = !0,
        typeof d.keepOriginalTimestamps == "boolean" ? this.keepOriginalTimestamps = d.keepOriginalTimestamps : this.keepOriginalTimestamps = !1,
        this.pendingTracks = [],
        this.videoTrack = null,
        this.pendingBoxes = [],
        this.pendingCaptions = [],
        this.pendingMetadata = [],
        this.pendingBytes = 0,
        this.emittedTracks = 0,
        Wt.prototype.init.call(this),
        this.push = function(f) {
            if (f.text)
                return this.pendingCaptions.push(f);
            if (f.frames)
                return this.pendingMetadata.push(f);
            this.pendingTracks.push(f.track),
            this.pendingBytes += f.boxes.byteLength,
            f.track.type === "video" && (this.videoTrack = f.track,
            this.pendingBoxes.push(f.boxes)),
            f.track.type === "audio" && (this.audioTrack = f.track,
            this.pendingBoxes.unshift(f.boxes))
        }
    }
    ,
    Wt.prototype = new t,
    Wt.prototype.flush = function(T) {
        var d = 0, h = {
            captions: [],
            captionStreams: {},
            metadata: [],
            info: {}
        }, f, m, v, _ = 0, E;
        if (this.pendingTracks.length < this.numberOfTracks) {
            if (T !== "VideoSegmentStream" && T !== "AudioSegmentStream")
                return;
            if (this.remuxTracks)
                return;
            if (this.pendingTracks.length === 0) {
                this.emittedTracks++,
                this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
                this.emittedTracks = 0);
                return
            }
        }
        if (this.videoTrack ? (_ = this.videoTrack.timelineStartInfo.pts,
        ga.forEach(function(C) {
            h.info[C] = this.videoTrack[C]
        }, this)) : this.audioTrack && (_ = this.audioTrack.timelineStartInfo.pts,
        ma.forEach(function(C) {
            h.info[C] = this.audioTrack[C]
        }, this)),
        this.videoTrack || this.audioTrack) {
            for (this.pendingTracks.length === 1 ? h.type = this.pendingTracks[0].type : h.type = "combined",
            this.emittedTracks += this.pendingTracks.length,
            v = ct.initSegment(this.pendingTracks),
            h.initSegment = new Uint8Array(v.byteLength),
            h.initSegment.set(v),
            h.data = new Uint8Array(this.pendingBytes),
            E = 0; E < this.pendingBoxes.length; E++)
                h.data.set(this.pendingBoxes[E], d),
                d += this.pendingBoxes[E].byteLength;
            for (E = 0; E < this.pendingCaptions.length; E++)
                f = this.pendingCaptions[E],
                f.startTime = re.metadataTsToSeconds(f.startPts, _, this.keepOriginalTimestamps),
                f.endTime = re.metadataTsToSeconds(f.endPts, _, this.keepOriginalTimestamps),
                h.captionStreams[f.stream] = !0,
                h.captions.push(f);
            for (E = 0; E < this.pendingMetadata.length; E++)
                m = this.pendingMetadata[E],
                m.cueTime = re.metadataTsToSeconds(m.pts, _, this.keepOriginalTimestamps),
                h.metadata.push(m);
            for (h.metadata.dispatchType = this.metadataStream.dispatchType,
            this.pendingTracks.length = 0,
            this.videoTrack = null,
            this.pendingBoxes.length = 0,
            this.pendingCaptions.length = 0,
            this.pendingBytes = 0,
            this.pendingMetadata.length = 0,
            this.trigger("data", h),
            E = 0; E < h.captions.length; E++)
                f = h.captions[E],
                this.trigger("caption", f);
            for (E = 0; E < h.metadata.length; E++)
                m = h.metadata[E],
                this.trigger("id3Frame", m)
        }
        this.emittedTracks >= this.numberOfTracks && (this.trigger("done"),
        this.emittedTracks = 0)
    }
    ,
    Wt.prototype.setRemux = function(T) {
        this.remuxTracks = T
    }
    ,
    $i = function(d) {
        var h = this, f = !0, m, v;
        $i.prototype.init.call(this),
        d = d || {},
        this.baseMediaDecodeTime = d.baseMediaDecodeTime || 0,
        this.transmuxPipeline_ = {},
        this.setupAacPipeline = function() {
            var _ = {};
            this.transmuxPipeline_ = _,
            _.type = "aac",
            _.metadataStream = new yt.MetadataStream,
            _.aacStream = new fh,
            _.audioTimestampRolloverStream = new yt.TimestampRolloverStream("audio"),
            _.timedMetadataTimestampRolloverStream = new yt.TimestampRolloverStream("timed-metadata"),
            _.adtsStream = new No,
            _.coalesceStream = new Wt(d,_.metadataStream),
            _.headOfPipeline = _.aacStream,
            _.aacStream.pipe(_.audioTimestampRolloverStream).pipe(_.adtsStream),
            _.aacStream.pipe(_.timedMetadataTimestampRolloverStream).pipe(_.metadataStream).pipe(_.coalesceStream),
            _.metadataStream.on("timestamp", function(E) {
                _.aacStream.setTimestamp(E.timeStamp)
            }),
            _.aacStream.on("data", function(E) {
                E.type !== "timed-metadata" && E.type !== "audio" || _.audioSegmentStream || (v = v || {
                    timelineStartInfo: {
                        baseMediaDecodeTime: h.baseMediaDecodeTime
                    },
                    codec: "adts",
                    type: "audio"
                },
                _.coalesceStream.numberOfTracks++,
                _.audioSegmentStream = new or(v,d),
                _.audioSegmentStream.on("timingInfo", h.trigger.bind(h, "audioTimingInfo")),
                _.adtsStream.pipe(_.audioSegmentStream).pipe(_.coalesceStream),
                h.trigger("trackinfo", {
                    hasAudio: !!v,
                    hasVideo: !!m
                }))
            }),
            _.coalesceStream.on("data", this.trigger.bind(this, "data")),
            _.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }
        ,
        this.setupTsPipeline = function() {
            var _ = {};
            this.transmuxPipeline_ = _,
            _.type = "ts",
            _.metadataStream = new yt.MetadataStream,
            _.packetStream = new yt.TransportPacketStream,
            _.parseStream = new yt.TransportParseStream,
            _.elementaryStream = new yt.ElementaryStream,
            _.timestampRolloverStream = new yt.TimestampRolloverStream,
            _.adtsStream = new No,
            _.h264Stream = new mh,
            _.captionStream = new yt.CaptionStream(d),
            _.coalesceStream = new Wt(d,_.metadataStream),
            _.headOfPipeline = _.packetStream,
            _.packetStream.pipe(_.parseStream).pipe(_.elementaryStream).pipe(_.timestampRolloverStream),
            _.timestampRolloverStream.pipe(_.h264Stream),
            _.timestampRolloverStream.pipe(_.adtsStream),
            _.timestampRolloverStream.pipe(_.metadataStream).pipe(_.coalesceStream),
            _.h264Stream.pipe(_.captionStream).pipe(_.coalesceStream),
            _.elementaryStream.on("data", function(E) {
                var C;
                if (E.type === "metadata") {
                    for (C = E.tracks.length; C--; )
                        !m && E.tracks[C].type === "video" ? (m = E.tracks[C],
                        m.timelineStartInfo.baseMediaDecodeTime = h.baseMediaDecodeTime) : !v && E.tracks[C].type === "audio" && (v = E.tracks[C],
                        v.timelineStartInfo.baseMediaDecodeTime = h.baseMediaDecodeTime);
                    m && !_.videoSegmentStream && (_.coalesceStream.numberOfTracks++,
                    _.videoSegmentStream = new $r(m,d),
                    _.videoSegmentStream.on("timelineStartInfo", function(w) {
                        v && !d.keepOriginalTimestamps && (v.timelineStartInfo = w,
                        _.audioSegmentStream.setEarliestDts(w.dts - h.baseMediaDecodeTime))
                    }),
                    _.videoSegmentStream.on("processedGopsInfo", h.trigger.bind(h, "gopInfo")),
                    _.videoSegmentStream.on("segmentTimingInfo", h.trigger.bind(h, "videoSegmentTimingInfo")),
                    _.videoSegmentStream.on("baseMediaDecodeTime", function(w) {
                        v && _.audioSegmentStream.setVideoBaseMediaDecodeTime(w)
                    }),
                    _.videoSegmentStream.on("timingInfo", h.trigger.bind(h, "videoTimingInfo")),
                    _.h264Stream.pipe(_.videoSegmentStream).pipe(_.coalesceStream)),
                    v && !_.audioSegmentStream && (_.coalesceStream.numberOfTracks++,
                    _.audioSegmentStream = new or(v,d),
                    _.audioSegmentStream.on("timingInfo", h.trigger.bind(h, "audioTimingInfo")),
                    _.audioSegmentStream.on("segmentTimingInfo", h.trigger.bind(h, "audioSegmentTimingInfo")),
                    _.adtsStream.pipe(_.audioSegmentStream).pipe(_.coalesceStream)),
                    h.trigger("trackinfo", {
                        hasAudio: !!v,
                        hasVideo: !!m
                    })
                }
            }),
            _.coalesceStream.on("data", this.trigger.bind(this, "data")),
            _.coalesceStream.on("id3Frame", function(E) {
                E.dispatchType = _.metadataStream.dispatchType,
                h.trigger("id3Frame", E)
            }),
            _.coalesceStream.on("caption", this.trigger.bind(this, "caption")),
            _.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }
        ,
        this.setBaseMediaDecodeTime = function(_) {
            var E = this.transmuxPipeline_;
            d.keepOriginalTimestamps || (this.baseMediaDecodeTime = _),
            v && (v.timelineStartInfo.dts = void 0,
            v.timelineStartInfo.pts = void 0,
            it.clearDtsInfo(v),
            E.audioTimestampRolloverStream && E.audioTimestampRolloverStream.discontinuity()),
            m && (E.videoSegmentStream && (E.videoSegmentStream.gopCache_ = []),
            m.timelineStartInfo.dts = void 0,
            m.timelineStartInfo.pts = void 0,
            it.clearDtsInfo(m),
            E.captionStream.reset()),
            E.timestampRolloverStream && E.timestampRolloverStream.discontinuity()
        }
        ,
        this.setAudioAppendStart = function(_) {
            v && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(_)
        }
        ,
        this.setRemux = function(_) {
            var E = this.transmuxPipeline_;
            d.remux = _,
            E && E.coalesceStream && E.coalesceStream.setRemux(_)
        }
        ,
        this.alignGopsWith = function(_) {
            m && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(_)
        }
        ,
        this.push = function(_) {
            if (f) {
                var E = gh(_);
                E && this.transmuxPipeline_.type !== "aac" ? this.setupAacPipeline() : !E && this.transmuxPipeline_.type !== "ts" && this.setupTsPipeline(),
                f = !1
            }
            this.transmuxPipeline_.headOfPipeline.push(_)
        }
        ,
        this.flush = function() {
            f = !0,
            this.transmuxPipeline_.headOfPipeline.flush()
        }
        ,
        this.endTimeline = function() {
            this.transmuxPipeline_.headOfPipeline.endTimeline()
        }
        ,
        this.reset = function() {
            this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset()
        }
        ,
        this.resetCaptions = function() {
            this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
        }
    }
    ,
    $i.prototype = new t;
    var _h = {
        Transmuxer: $i,
        VideoSegmentStream: $r,
        AudioSegmentStream: or,
        AUDIO_PROPERTIES: ma,
        VIDEO_PROPERTIES: ga,
        generateSegmentTimingInfo: va
    }, yh = function(d) {
        return d >>> 0
    }, Th = function(d) {
        return ("00" + d.toString(16)).slice(-2)
    }, Ki = {
        toUnsigned: yh,
        toHexString: Th
    }, bh = function(d) {
        var h = "";
        return h += String.fromCharCode(d[0]),
        h += String.fromCharCode(d[1]),
        h += String.fromCharCode(d[2]),
        h += String.fromCharCode(d[3]),
        h
    }, Gt = bh, xh = Ki.toUnsigned, Sh = function T(d, h) {
        var f = [], m, v, _, E, C;
        if (!h.length)
            return null;
        for (m = 0; m < d.byteLength; )
            v = xh(d[m] << 24 | d[m + 1] << 16 | d[m + 2] << 8 | d[m + 3]),
            _ = Gt(d.subarray(m + 4, m + 8)),
            E = v > 1 ? m + v : d.byteLength,
            _ === h[0] && (h.length === 1 ? f.push(d.subarray(m + 8, E)) : (C = T(d.subarray(m + 8, E), h.slice(1)),
            C.length && (f = f.concat(C)))),
            m = E;
        return f
    }, ce = Sh, Wo = Ki.toUnsigned, Eh = function(d) {
        var h = {
            version: d[0],
            flags: new Uint8Array(d.subarray(1, 4)),
            baseMediaDecodeTime: Wo(d[4] << 24 | d[5] << 16 | d[6] << 8 | d[7])
        };
        return h.version === 1 && (h.baseMediaDecodeTime *= Math.pow(2, 32),
        h.baseMediaDecodeTime += Wo(d[8] << 24 | d[9] << 16 | d[10] << 8 | d[11])),
        h
    }, Go = Eh, Ch = function(d) {
        return {
            isLeading: (d[0] & 12) >>> 2,
            dependsOn: d[0] & 3,
            isDependedOn: (d[1] & 192) >>> 6,
            hasRedundancy: (d[1] & 48) >>> 4,
            paddingValue: (d[1] & 14) >>> 1,
            isNonSyncSample: d[1] & 1,
            degradationPriority: d[2] << 8 | d[3]
        }
    }, qo = Ch, wh = function(d) {
        var h = {
            version: d[0],
            flags: new Uint8Array(d.subarray(1, 4)),
            samples: []
        }, f = new DataView(d.buffer,d.byteOffset,d.byteLength), m = h.flags[2] & 1, v = h.flags[2] & 4, _ = h.flags[1] & 1, E = h.flags[1] & 2, C = h.flags[1] & 4, w = h.flags[1] & 8, k = f.getUint32(4), O = 8, N;
        for (m && (h.dataOffset = f.getInt32(O),
        O += 4),
        v && k && (N = {
            flags: qo(d.subarray(O, O + 4))
        },
        O += 4,
        _ && (N.duration = f.getUint32(O),
        O += 4),
        E && (N.size = f.getUint32(O),
        O += 4),
        w && (h.version === 1 ? N.compositionTimeOffset = f.getInt32(O) : N.compositionTimeOffset = f.getUint32(O),
        O += 4),
        h.samples.push(N),
        k--); k--; )
            N = {},
            _ && (N.duration = f.getUint32(O),
            O += 4),
            E && (N.size = f.getUint32(O),
            O += 4),
            C && (N.flags = qo(d.subarray(O, O + 4)),
            O += 4),
            w && (h.version === 1 ? N.compositionTimeOffset = f.getInt32(O) : N.compositionTimeOffset = f.getUint32(O),
            O += 4),
            h.samples.push(N);
        return h
    }, zo = wh, kh = function(d) {
        var h = new DataView(d.buffer,d.byteOffset,d.byteLength), f = {
            version: d[0],
            flags: new Uint8Array(d.subarray(1, 4)),
            trackId: h.getUint32(4)
        }, m = f.flags[2] & 1, v = f.flags[2] & 2, _ = f.flags[2] & 8, E = f.flags[2] & 16, C = f.flags[2] & 32, w = f.flags[0] & 65536, k = f.flags[0] & 131072, O;
        return O = 8,
        m && (O += 4,
        f.baseDataOffset = h.getUint32(12),
        O += 4),
        v && (f.sampleDescriptionIndex = h.getUint32(O),
        O += 4),
        _ && (f.defaultSampleDuration = h.getUint32(O),
        O += 4),
        E && (f.defaultSampleSize = h.getUint32(O),
        O += 4),
        C && (f.defaultSampleFlags = h.getUint32(O)),
        w && (f.durationIsEmpty = !0),
        !m && k && (f.baseDataOffsetIsMoof = !0),
        f
    }, $o = kh, Ah = Gr.discardEmulationPreventionBytes, Ph = Ni.CaptionStream, Ih = function(d, h) {
        for (var f = d, m = 0; m < h.length; m++) {
            var v = h[m];
            if (f < v.size)
                return v;
            f -= v.size
        }
        return null
    }, Dh = function(d, h, f) {
        var m = new DataView(d.buffer,d.byteOffset,d.byteLength), v = [], _, E, C, w;
        for (E = 0; E + 4 < d.length; E += C)
            if (C = m.getUint32(E),
            E += 4,
            !(C <= 0))
                switch (d[E] & 31) {
                case 6:
                    var k = d.subarray(E + 1, E + 1 + C)
                      , O = Ih(E, h);
                    if (_ = {
                        nalUnitType: "sei_rbsp",
                        size: C,
                        data: k,
                        escapedRBSP: Ah(k),
                        trackId: f
                    },
                    O)
                        _.pts = O.pts,
                        _.dts = O.dts,
                        w = O;
                    else if (w)
                        _.pts = w.pts,
                        _.dts = w.dts;
                    else {
                        console.log("We've encountered a nal unit without data. See mux.js#233.");
                        break
                    }
                    v.push(_);
                    break
                }
        return v
    }, Oh = function(d, h, f) {
        var m = h
          , v = f.defaultSampleDuration || 0
          , _ = f.defaultSampleSize || 0
          , E = f.trackId
          , C = [];
        return d.forEach(function(w) {
            var k = zo(w)
              , O = k.samples;
            O.forEach(function(N) {
                N.duration === void 0 && (N.duration = v),
                N.size === void 0 && (N.size = _),
                N.trackId = E,
                N.dts = m,
                N.compositionTimeOffset === void 0 && (N.compositionTimeOffset = 0),
                N.pts = m + N.compositionTimeOffset,
                m += N.duration
            }),
            C = C.concat(O)
        }),
        C
    }, Lh = function(d, h) {
        var f = ce(d, ["moof", "traf"])
          , m = ce(d, ["mdat"])
          , v = {}
          , _ = [];
        return m.forEach(function(E, C) {
            var w = f[C];
            _.push({
                mdat: E,
                traf: w
            })
        }),
        _.forEach(function(E) {
            var C = E.mdat, w = E.traf, k = ce(w, ["tfhd"]), O = $o(k[0]), N = O.trackId, q = ce(w, ["tfdt"]), $ = q.length > 0 ? Go(q[0]).baseMediaDecodeTime : 0, X = ce(w, ["trun"]), W, Se;
            h === N && X.length > 0 && (W = Oh(X, $, O),
            Se = Dh(C, W, N),
            v[N] || (v[N] = []),
            v[N] = v[N].concat(Se))
        }),
        v
    }, Rh = function(d, h, f) {
        var m;
        return h === null ? null : (m = Lh(d, h),
        {
            seiNals: m[h],
            timescale: f
        })
    }, Mh = function() {
        var d = !1, h, f, m, v, _, E;
        this.isInitialized = function() {
            return d
        }
        ,
        this.init = function(C) {
            h = new Ph,
            d = !0,
            E = C ? C.isPartial : !1,
            h.on("data", function(w) {
                w.startTime = w.startPts / v,
                w.endTime = w.endPts / v,
                _.captions.push(w),
                _.captionStreams[w.stream] = !0
            })
        }
        ,
        this.isNewInit = function(C, w) {
            return C && C.length === 0 || w && typeof w == "object" && Object.keys(w).length === 0 ? !1 : m !== C[0] || v !== w[m]
        }
        ,
        this.parse = function(C, w, k) {
            var O;
            if (this.isInitialized()) {
                if (!w || !k)
                    return null;
                if (this.isNewInit(w, k))
                    m = w[0],
                    v = k[m];
                else if (m === null || !v)
                    return f.push(C),
                    null
            } else
                return null;
            for (; f.length > 0; ) {
                var N = f.shift();
                this.parse(N, w, k)
            }
            return O = Rh(C, m, v),
            O === null || !O.seiNals ? null : (this.pushNals(O.seiNals),
            this.flushStream(),
            _)
        }
        ,
        this.pushNals = function(C) {
            if (!this.isInitialized() || !C || C.length === 0)
                return null;
            C.forEach(function(w) {
                h.push(w)
            })
        }
        ,
        this.flushStream = function() {
            if (!this.isInitialized())
                return null;
            E ? h.partialFlush() : h.flush()
        }
        ,
        this.clearParsedCaptions = function() {
            _.captions = [],
            _.captionStreams = {}
        }
        ,
        this.resetCaptionStream = function() {
            if (!this.isInitialized())
                return null;
            h.reset()
        }
        ,
        this.clearAllCaptions = function() {
            this.clearParsedCaptions(),
            this.resetCaptionStream()
        }
        ,
        this.reset = function() {
            f = [],
            m = null,
            v = null,
            _ ? this.clearParsedCaptions() : _ = {
                captions: [],
                captionStreams: {}
            },
            this.resetCaptionStream()
        }
        ,
        this.reset()
    }, Fh = Mh, ur = Ki.toUnsigned, Kr = Ki.toHexString, Ko, Xo, Yo, Qo, Jo, _a;
    Ko = function(d) {
        var h = {}
          , f = ce(d, ["moov", "trak"]);
        return f.reduce(function(m, v) {
            var _, E, C, w, k;
            return _ = ce(v, ["tkhd"])[0],
            !_ || (E = _[0],
            C = E === 0 ? 12 : 20,
            w = ur(_[C] << 24 | _[C + 1] << 16 | _[C + 2] << 8 | _[C + 3]),
            k = ce(v, ["mdia", "mdhd"])[0],
            !k) ? null : (E = k[0],
            C = E === 0 ? 12 : 20,
            m[w] = ur(k[C] << 24 | k[C + 1] << 16 | k[C + 2] << 8 | k[C + 3]),
            m)
        }, h)
    }
    ,
    Xo = function(d, h) {
        var f, m, v;
        return f = ce(h, ["moof", "traf"]),
        m = [].concat.apply([], f.map(function(_) {
            return ce(_, ["tfhd"]).map(function(E) {
                var C, w, k;
                return C = ur(E[4] << 24 | E[5] << 16 | E[6] << 8 | E[7]),
                w = d[C] || 9e4,
                k = ce(_, ["tfdt"]).map(function(O) {
                    var N, q;
                    return N = O[0],
                    q = ur(O[4] << 24 | O[5] << 16 | O[6] << 8 | O[7]),
                    N === 1 && (q *= Math.pow(2, 32),
                    q += ur(O[8] << 24 | O[9] << 16 | O[10] << 8 | O[11])),
                    q
                })[0],
                k = typeof k == "number" && !isNaN(k) ? k : 1 / 0,
                k / w
            })
        })),
        v = Math.min.apply(null, m),
        isFinite(v) ? v : 0
    }
    ,
    Yo = function(d, h) {
        var f = ce(h, ["moof", "traf"]), m = 0, v = 0, _;
        if (f && f.length) {
            var E = ce(f[0], ["tfhd"])[0]
              , C = ce(f[0], ["trun"])[0]
              , w = ce(f[0], ["tfdt"])[0];
            if (E) {
                var k = $o(E);
                _ = k.trackId
            }
            if (w) {
                var O = Go(w);
                m = O.baseMediaDecodeTime
            }
            if (C) {
                var N = zo(C);
                N.samples && N.samples.length && (v = N.samples[0].compositionTimeOffset || 0)
            }
        }
        var q = d[_] || 9e4;
        return (m + v) / q
    }
    ,
    Qo = function(d) {
        var h = ce(d, ["moov", "trak"])
          , f = [];
        return h.forEach(function(m) {
            var v = ce(m, ["mdia", "hdlr"])
              , _ = ce(m, ["tkhd"]);
            v.forEach(function(E, C) {
                var w = Gt(E.subarray(8, 12)), k = _[C], O, N, q;
                w === "vide" && (O = new DataView(k.buffer,k.byteOffset,k.byteLength),
                N = O.getUint8(0),
                q = N === 0 ? O.getUint32(12) : O.getUint32(20),
                f.push(q))
            })
        }),
        f
    }
    ,
    _a = function(d) {
        var h = d[0]
          , f = h === 0 ? 12 : 20;
        return ur(d[f] << 24 | d[f + 1] << 16 | d[f + 2] << 8 | d[f + 3])
    }
    ,
    Jo = function(d) {
        var h = ce(d, ["moov", "trak"])
          , f = [];
        return h.forEach(function(m) {
            var v = {}, _ = ce(m, ["tkhd"])[0], E, C;
            _ && (E = new DataView(_.buffer,_.byteOffset,_.byteLength),
            C = E.getUint8(0),
            v.id = C === 0 ? E.getUint32(12) : E.getUint32(20));
            var w = ce(m, ["mdia", "hdlr"])[0];
            if (w) {
                var k = Gt(w.subarray(8, 12));
                k === "vide" ? v.type = "video" : k === "soun" ? v.type = "audio" : v.type = k
            }
            var O = ce(m, ["mdia", "minf", "stbl", "stsd"])[0];
            if (O) {
                var N = O.subarray(8);
                v.codec = Gt(N.subarray(4, 8));
                var q = ce(N, [v.codec])[0], $, X;
                q && (/^[a-z]vc[1-9]$/i.test(v.codec) ? ($ = q.subarray(78),
                X = Gt($.subarray(4, 8)),
                X === "avcC" && $.length > 11 ? (v.codec += ".",
                v.codec += Kr($[9]),
                v.codec += Kr($[10]),
                v.codec += Kr($[11])) : v.codec = "avc1.4d400d") : /^mp4[a,v]$/i.test(v.codec) ? ($ = q.subarray(28),
                X = Gt($.subarray(4, 8)),
                X === "esds" && $.length > 20 && $[19] !== 0 ? (v.codec += "." + Kr($[19]),
                v.codec += "." + Kr($[20] >>> 2 & 63).replace(/^0/, "")) : v.codec = "mp4a.40.2") : v.codec = v.codec.toLowerCase())
            }
            var W = ce(m, ["mdia", "mdhd"])[0];
            W && (v.timescale = _a(W)),
            f.push(v)
        }),
        f
    }
    ;
    var Zo = {
        findBox: ce,
        parseType: Gt,
        timescale: Ko,
        startTime: Xo,
        compositionStartTime: Yo,
        videoTrackIds: Qo,
        tracks: Jo,
        getTimescaleFromMediaHeader: _a
    }
      , eu = function(d) {
        var h = d[1] & 31;
        return h <<= 8,
        h |= d[2],
        h
    }
      , Xi = function(d) {
        return !!(d[1] & 64)
    }
      , Yi = function(d) {
        var h = 0;
        return (d[3] & 48) >>> 4 > 1 && (h += d[4] + 1),
        h
    }
      , Nh = function(d, h) {
        var f = eu(d);
        return f === 0 ? "pat" : f === h ? "pmt" : h ? "pes" : null
    }
      , Uh = function(d) {
        var h = Xi(d)
          , f = 4 + Yi(d);
        return h && (f += d[f] + 1),
        (d[f + 10] & 31) << 8 | d[f + 11]
    }
      , Bh = function(d) {
        var h = {}
          , f = Xi(d)
          , m = 4 + Yi(d);
        if (f && (m += d[m] + 1),
        !!(d[m + 5] & 1)) {
            var v, _, E;
            v = (d[m + 1] & 15) << 8 | d[m + 2],
            _ = 3 + v - 4,
            E = (d[m + 10] & 15) << 8 | d[m + 11];
            for (var C = 12 + E; C < _; ) {
                var w = m + C;
                h[(d[w + 1] & 31) << 8 | d[w + 2]] = d[w],
                C += ((d[w + 3] & 15) << 8 | d[w + 4]) + 5
            }
            return h
        }
    }
      , Hh = function(d, h) {
        var f = eu(d)
          , m = h[f];
        switch (m) {
        case Ae.H264_STREAM_TYPE:
            return "video";
        case Ae.ADTS_STREAM_TYPE:
            return "audio";
        case Ae.METADATA_STREAM_TYPE:
            return "timed-metadata";
        default:
            return null
        }
    }
      , jh = function(d) {
        var h = Xi(d);
        if (!h)
            return null;
        var f = 4 + Yi(d);
        if (f >= d.byteLength)
            return null;
        var m = null, v;
        return v = d[f + 7],
        v & 192 && (m = {},
        m.pts = (d[f + 9] & 14) << 27 | (d[f + 10] & 255) << 20 | (d[f + 11] & 254) << 12 | (d[f + 12] & 255) << 5 | (d[f + 13] & 254) >>> 3,
        m.pts *= 4,
        m.pts += (d[f + 13] & 6) >>> 1,
        m.dts = m.pts,
        v & 64 && (m.dts = (d[f + 14] & 14) << 27 | (d[f + 15] & 255) << 20 | (d[f + 16] & 254) << 12 | (d[f + 17] & 255) << 5 | (d[f + 18] & 254) >>> 3,
        m.dts *= 4,
        m.dts += (d[f + 18] & 6) >>> 1)),
        m
    }
      , ya = function(d) {
        switch (d) {
        case 5:
            return "slice_layer_without_partitioning_rbsp_idr";
        case 6:
            return "sei_rbsp";
        case 7:
            return "seq_parameter_set_rbsp";
        case 8:
            return "pic_parameter_set_rbsp";
        case 9:
            return "access_unit_delimiter_rbsp";
        default:
            return null
        }
    }
      , Vh = function(d) {
        for (var h = 4 + Yi(d), f = d.subarray(h), m = 0, v = 0, _ = !1, E; v < f.byteLength - 3; v++)
            if (f[v + 2] === 1) {
                m = v + 5;
                break
            }
        for (; m < f.byteLength; )
            switch (f[m]) {
            case 0:
                if (f[m - 1] !== 0) {
                    m += 2;
                    break
                } else if (f[m - 2] !== 0) {
                    m++;
                    break
                }
                v + 3 !== m - 2 && (E = ya(f[v + 3] & 31),
                E === "slice_layer_without_partitioning_rbsp_idr" && (_ = !0));
                do
                    m++;
                while (f[m] !== 1 && m < f.length);
                v = m - 2,
                m += 3;
                break;
            case 1:
                if (f[m - 1] !== 0 || f[m - 2] !== 0) {
                    m += 3;
                    break
                }
                E = ya(f[v + 3] & 31),
                E === "slice_layer_without_partitioning_rbsp_idr" && (_ = !0),
                v = m - 2,
                m += 3;
                break;
            default:
                m += 3;
                break
            }
        return f = f.subarray(v),
        m -= v,
        v = 0,
        f && f.byteLength > 3 && (E = ya(f[v + 3] & 31),
        E === "slice_layer_without_partitioning_rbsp_idr" && (_ = !0)),
        _
    }
      , Wh = {
        parseType: Nh,
        parsePat: Uh,
        parsePmt: Bh,
        parsePayloadUnitStartIndicator: Xi,
        parsePesType: Hh,
        parsePesTime: jh,
        videoPacketContainsKeyFrame: Vh
    }
      , lr = Oo.handleRollover
      , ne = {};
    ne.ts = Wh,
    ne.aac = qi;
    var qt = re.ONE_SECOND_IN_TS
      , Me = 188
      , ft = 71
      , Gh = function(d, h) {
        for (var f = 0, m = Me, v, _; m < d.byteLength; ) {
            if (d[f] === ft && d[m] === ft) {
                switch (v = d.subarray(f, m),
                _ = ne.ts.parseType(v, h.pid),
                _) {
                case "pat":
                    h.pid = ne.ts.parsePat(v);
                    break;
                case "pmt":
                    var E = ne.ts.parsePmt(v);
                    h.table = h.table || {},
                    Object.keys(E).forEach(function(C) {
                        h.table[C] = E[C]
                    });
                    break
                }
                f += Me,
                m += Me;
                continue
            }
            f++,
            m++
        }
    }
      , tu = function(d, h, f) {
        for (var m = 0, v = Me, _, E, C, w, k, O = !1; v <= d.byteLength; ) {
            if (d[m] === ft && (d[v] === ft || v === d.byteLength)) {
                switch (_ = d.subarray(m, v),
                E = ne.ts.parseType(_, h.pid),
                E) {
                case "pes":
                    C = ne.ts.parsePesType(_, h.table),
                    w = ne.ts.parsePayloadUnitStartIndicator(_),
                    C === "audio" && w && (k = ne.ts.parsePesTime(_),
                    k && (k.type = "audio",
                    f.audio.push(k),
                    O = !0));
                    break
                }
                if (O)
                    break;
                m += Me,
                v += Me;
                continue
            }
            m++,
            v++
        }
        for (v = d.byteLength,
        m = v - Me,
        O = !1; m >= 0; ) {
            if (d[m] === ft && (d[v] === ft || v === d.byteLength)) {
                switch (_ = d.subarray(m, v),
                E = ne.ts.parseType(_, h.pid),
                E) {
                case "pes":
                    C = ne.ts.parsePesType(_, h.table),
                    w = ne.ts.parsePayloadUnitStartIndicator(_),
                    C === "audio" && w && (k = ne.ts.parsePesTime(_),
                    k && (k.type = "audio",
                    f.audio.push(k),
                    O = !0));
                    break
                }
                if (O)
                    break;
                m -= Me,
                v -= Me;
                continue
            }
            m--,
            v--
        }
    }
      , qh = function(d, h, f) {
        for (var m = 0, v = Me, _, E, C, w, k, O, N, q, $ = !1, X = {
            data: [],
            size: 0
        }; v < d.byteLength; ) {
            if (d[m] === ft && d[v] === ft) {
                switch (_ = d.subarray(m, v),
                E = ne.ts.parseType(_, h.pid),
                E) {
                case "pes":
                    if (C = ne.ts.parsePesType(_, h.table),
                    w = ne.ts.parsePayloadUnitStartIndicator(_),
                    C === "video" && (w && !$ && (k = ne.ts.parsePesTime(_),
                    k && (k.type = "video",
                    f.video.push(k),
                    $ = !0)),
                    !f.firstKeyFrame)) {
                        if (w && X.size !== 0) {
                            for (O = new Uint8Array(X.size),
                            N = 0; X.data.length; )
                                q = X.data.shift(),
                                O.set(q, N),
                                N += q.byteLength;
                            if (ne.ts.videoPacketContainsKeyFrame(O)) {
                                var W = ne.ts.parsePesTime(O);
                                W ? (f.firstKeyFrame = W,
                                f.firstKeyFrame.type = "video") : console.warn("Failed to extract PTS/DTS from PES at first keyframe. This could be an unusual TS segment, or else mux.js did not parse your TS segment correctly. If you know your TS segments do contain PTS/DTS on keyframes please file a bug report! You can try ffprobe to double check for yourself.")
                            }
                            X.size = 0
                        }
                        X.data.push(_),
                        X.size += _.byteLength
                    }
                    break
                }
                if ($ && f.firstKeyFrame)
                    break;
                m += Me,
                v += Me;
                continue
            }
            m++,
            v++
        }
        for (v = d.byteLength,
        m = v - Me,
        $ = !1; m >= 0; ) {
            if (d[m] === ft && d[v] === ft) {
                switch (_ = d.subarray(m, v),
                E = ne.ts.parseType(_, h.pid),
                E) {
                case "pes":
                    C = ne.ts.parsePesType(_, h.table),
                    w = ne.ts.parsePayloadUnitStartIndicator(_),
                    C === "video" && w && (k = ne.ts.parsePesTime(_),
                    k && (k.type = "video",
                    f.video.push(k),
                    $ = !0));
                    break
                }
                if ($)
                    break;
                m -= Me,
                v -= Me;
                continue
            }
            m--,
            v--
        }
    }
      , zh = function(d, h) {
        if (d.audio && d.audio.length) {
            var f = h;
            (typeof f > "u" || isNaN(f)) && (f = d.audio[0].dts),
            d.audio.forEach(function(_) {
                _.dts = lr(_.dts, f),
                _.pts = lr(_.pts, f),
                _.dtsTime = _.dts / qt,
                _.ptsTime = _.pts / qt
            })
        }
        if (d.video && d.video.length) {
            var m = h;
            if ((typeof m > "u" || isNaN(m)) && (m = d.video[0].dts),
            d.video.forEach(function(_) {
                _.dts = lr(_.dts, m),
                _.pts = lr(_.pts, m),
                _.dtsTime = _.dts / qt,
                _.ptsTime = _.pts / qt
            }),
            d.firstKeyFrame) {
                var v = d.firstKeyFrame;
                v.dts = lr(v.dts, m),
                v.pts = lr(v.pts, m),
                v.dtsTime = v.dts / qt,
                v.ptsTime = v.pts / qt
            }
        }
    }
      , $h = function(d) {
        for (var h = !1, f = 0, m = null, v = null, _ = 0, E = 0, C; d.length - E >= 3; ) {
            var w = ne.aac.parseType(d, E);
            switch (w) {
            case "timed-metadata":
                if (d.length - E < 10) {
                    h = !0;
                    break
                }
                if (_ = ne.aac.parseId3TagSize(d, E),
                _ > d.length) {
                    h = !0;
                    break
                }
                v === null && (C = d.subarray(E, E + _),
                v = ne.aac.parseAacTimestamp(C)),
                E += _;
                break;
            case "audio":
                if (d.length - E < 7) {
                    h = !0;
                    break
                }
                if (_ = ne.aac.parseAdtsSize(d, E),
                _ > d.length) {
                    h = !0;
                    break
                }
                m === null && (C = d.subarray(E, E + _),
                m = ne.aac.parseSampleRate(C)),
                f++,
                E += _;
                break;
            default:
                E++;
                break
            }
            if (h)
                return null
        }
        if (m === null || v === null)
            return null;
        var k = qt / m
          , O = {
            audio: [{
                type: "audio",
                dts: v,
                pts: v
            }, {
                type: "audio",
                dts: v + f * 1024 * k,
                pts: v + f * 1024 * k
            }]
        };
        return O
    }
      , Kh = function(d) {
        var h = {
            pid: null,
            table: null
        }
          , f = {};
        Gh(d, h);
        for (var m in h.table)
            if (h.table.hasOwnProperty(m)) {
                var v = h.table[m];
                switch (v) {
                case Ae.H264_STREAM_TYPE:
                    f.video = [],
                    qh(d, h, f),
                    f.video.length === 0 && delete f.video;
                    break;
                case Ae.ADTS_STREAM_TYPE:
                    f.audio = [],
                    tu(d, h, f),
                    f.audio.length === 0 && delete f.audio;
                    break
                }
            }
        return f
    }
      , Xh = function(d, h) {
        var f = ne.aac.isLikelyAacData(d), m;
        return f ? m = $h(d) : m = Kh(d),
        !m || !m.audio && !m.video ? null : (zh(m, h),
        m)
    }
      , Yh = {
        inspect: Xh,
        parseAudioPes_: tu
    }
      , Qh = function(d, h) {
        h.on("data", function(f) {
            var m = f.initSegment;
            f.initSegment = {
                data: m.buffer,
                byteOffset: m.byteOffset,
                byteLength: m.byteLength
            };
            var v = f.data;
            f.data = v.buffer,
            d.postMessage({
                action: "data",
                segment: f,
                byteOffset: v.byteOffset,
                byteLength: v.byteLength
            }, [f.data])
        }),
        h.on("done", function(f) {
            d.postMessage({
                action: "done"
            })
        }),
        h.on("gopInfo", function(f) {
            d.postMessage({
                action: "gopInfo",
                gopInfo: f
            })
        }),
        h.on("videoSegmentTimingInfo", function(f) {
            var m = {
                start: {
                    decode: re.videoTsToSeconds(f.start.dts),
                    presentation: re.videoTsToSeconds(f.start.pts)
                },
                end: {
                    decode: re.videoTsToSeconds(f.end.dts),
                    presentation: re.videoTsToSeconds(f.end.pts)
                },
                baseMediaDecodeTime: re.videoTsToSeconds(f.baseMediaDecodeTime)
            };
            f.prependedContentDuration && (m.prependedContentDuration = re.videoTsToSeconds(f.prependedContentDuration)),
            d.postMessage({
                action: "videoSegmentTimingInfo",
                videoSegmentTimingInfo: m
            })
        }),
        h.on("audioSegmentTimingInfo", function(f) {
            var m = {
                start: {
                    decode: re.videoTsToSeconds(f.start.dts),
                    presentation: re.videoTsToSeconds(f.start.pts)
                },
                end: {
                    decode: re.videoTsToSeconds(f.end.dts),
                    presentation: re.videoTsToSeconds(f.end.pts)
                },
                baseMediaDecodeTime: re.videoTsToSeconds(f.baseMediaDecodeTime)
            };
            f.prependedContentDuration && (m.prependedContentDuration = re.videoTsToSeconds(f.prependedContentDuration)),
            d.postMessage({
                action: "audioSegmentTimingInfo",
                audioSegmentTimingInfo: m
            })
        }),
        h.on("id3Frame", function(f) {
            d.postMessage({
                action: "id3Frame",
                id3Frame: f
            })
        }),
        h.on("caption", function(f) {
            d.postMessage({
                action: "caption",
                caption: f
            })
        }),
        h.on("trackinfo", function(f) {
            d.postMessage({
                action: "trackinfo",
                trackInfo: f
            })
        }),
        h.on("audioTimingInfo", function(f) {
            d.postMessage({
                action: "audioTimingInfo",
                audioTimingInfo: {
                    start: re.videoTsToSeconds(f.start),
                    end: re.videoTsToSeconds(f.end)
                }
            })
        }),
        h.on("videoTimingInfo", function(f) {
            d.postMessage({
                action: "videoTimingInfo",
                videoTimingInfo: {
                    start: re.videoTsToSeconds(f.start),
                    end: re.videoTsToSeconds(f.end)
                }
            })
        })
    }
      , ru = function() {
        function T(h, f) {
            this.options = f || {},
            this.self = h,
            this.init()
        }
        var d = T.prototype;
        return d.init = function() {
            this.transmuxer && this.transmuxer.dispose(),
            this.transmuxer = new _h.Transmuxer(this.options),
            Qh(this.self, this.transmuxer)
        }
        ,
        d.pushMp4Captions = function(f) {
            this.captionParser || (this.captionParser = new Fh,
            this.captionParser.init());
            var m = new Uint8Array(f.data,f.byteOffset,f.byteLength)
              , v = this.captionParser.parse(m, f.trackIds, f.timescales);
            this.self.postMessage({
                action: "mp4Captions",
                captions: v && v.captions || [],
                data: m.buffer
            }, [m.buffer])
        }
        ,
        d.probeMp4StartTime = function(f) {
            var m = f.timescales
              , v = f.data
              , _ = Zo.startTime(m, v);
            this.self.postMessage({
                action: "probeMp4StartTime",
                startTime: _,
                data: v
            }, [v.buffer])
        }
        ,
        d.probeMp4Tracks = function(f) {
            var m = f.data
              , v = Zo.tracks(m);
            this.self.postMessage({
                action: "probeMp4Tracks",
                tracks: v,
                data: m
            }, [m.buffer])
        }
        ,
        d.probeTs = function(f) {
            var m = f.data
              , v = f.baseStartTime
              , _ = typeof v == "number" && !isNaN(v) ? v * re.ONE_SECOND_IN_TS : void 0
              , E = Yh.inspect(m, _)
              , C = null;
            E && (C = {
                hasVideo: E.video && E.video.length === 2 || !1,
                hasAudio: E.audio && E.audio.length === 2 || !1
            },
            C.hasVideo && (C.videoStart = E.video[0].ptsTime),
            C.hasAudio && (C.audioStart = E.audio[0].ptsTime)),
            this.self.postMessage({
                action: "probeTs",
                result: C,
                data: m
            }, [m.buffer])
        }
        ,
        d.clearAllMp4Captions = function() {
            this.captionParser && this.captionParser.clearAllCaptions()
        }
        ,
        d.clearParsedMp4Captions = function() {
            this.captionParser && this.captionParser.clearParsedCaptions()
        }
        ,
        d.push = function(f) {
            var m = new Uint8Array(f.data,f.byteOffset,f.byteLength);
            this.transmuxer.push(m)
        }
        ,
        d.reset = function() {
            this.transmuxer.reset()
        }
        ,
        d.setTimestampOffset = function(f) {
            var m = f.timestampOffset || 0;
            this.transmuxer.setBaseMediaDecodeTime(Math.round(re.secondsToVideoTs(m)))
        }
        ,
        d.setAudioAppendStart = function(f) {
            this.transmuxer.setAudioAppendStart(Math.ceil(re.secondsToVideoTs(f.appendStart)))
        }
        ,
        d.setRemux = function(f) {
            this.transmuxer.setRemux(f.remux)
        }
        ,
        d.flush = function(f) {
            this.transmuxer.flush(),
            self.postMessage({
                action: "done",
                type: "transmuxed"
            })
        }
        ,
        d.endTimeline = function() {
            this.transmuxer.endTimeline(),
            self.postMessage({
                action: "endedtimeline",
                type: "transmuxed"
            })
        }
        ,
        d.alignGopsWith = function(f) {
            this.transmuxer.alignGopsWith(f.gopsToAlignWith.slice())
        }
        ,
        T
    }();
    self.onmessage = function(T) {
        if (T.data.action === "init" && T.data.options) {
            this.messageHandlers = new ru(self,T.data.options);
            return
        }
        this.messageHandlers || (this.messageHandlers = new ru(self)),
        T.data && T.data.action && T.data.action !== "init" && this.messageHandlers[T.data.action] && this.messageHandlers[T.data.action](T.data)
    }
}))
  , $0 = tf(z0)
  , K0 = function(t, r, i) {
    var e = t.data.segment
      , n = e.type
      , s = e.initSegment
      , o = e.captions
      , u = e.captionStreams
      , l = e.metadata
      , c = e.videoFrameDtsTime
      , p = e.videoFramePtsTime;
    r.buffer.push({
        captions: o,
        captionStreams: u,
        metadata: l
    });
    var g = t.data.segment.boxes || {
        data: t.data.segment.data
    }
      , y = {
        type: n,
        data: new Uint8Array(g.data,g.data.byteOffset,g.data.byteLength),
        initSegment: new Uint8Array(s.data,s.byteOffset,s.byteLength)
    };
    typeof c < "u" && (y.videoFrameDtsTime = c),
    typeof p < "u" && (y.videoFramePtsTime = p),
    i(y)
}
  , X0 = function(t) {
    var r = t.transmuxedData
      , i = t.callback;
    r.buffer = [],
    i(r)
}
  , Y0 = function(t, r) {
    r.gopInfo = t.data.gopInfo
}
  , af = function(t) {
    var r = t.transmuxer
      , i = t.bytes
      , e = t.audioAppendStart
      , n = t.gopsToAlignWith
      , s = t.remux
      , o = t.onData
      , u = t.onTrackInfo
      , l = t.onAudioTimingInfo
      , c = t.onVideoTimingInfo
      , p = t.onVideoSegmentTimingInfo
      , g = t.onAudioSegmentTimingInfo
      , y = t.onId3
      , S = t.onCaptions
      , x = t.onDone
      , b = t.onEndedTimeline
      , P = t.isEndOfTimeline
      , D = {
        buffer: []
    }
      , L = P
      , R = function(M) {
        r.currentTransmux === t && (M.data.action === "data" && K0(M, D, o),
        M.data.action === "trackinfo" && u(M.data.trackInfo),
        M.data.action === "gopInfo" && Y0(M, D),
        M.data.action === "audioTimingInfo" && l(M.data.audioTimingInfo),
        M.data.action === "videoTimingInfo" && c(M.data.videoTimingInfo),
        M.data.action === "videoSegmentTimingInfo" && p(M.data.videoSegmentTimingInfo),
        M.data.action === "audioSegmentTimingInfo" && g(M.data.audioSegmentTimingInfo),
        M.data.action === "id3Frame" && y([M.data.id3Frame], M.data.id3Frame.dispatchType),
        M.data.action === "caption" && S(M.data.caption),
        M.data.action === "endedtimeline" && (L = !1,
        b()),
        M.data.type === "transmuxed" && (L || (r.onmessage = null,
        X0({
            transmuxedData: D,
            callback: x
        }),
        sf(r))))
    };
    if (r.onmessage = R,
    e && r.postMessage({
        action: "setAudioAppendStart",
        appendStart: e
    }),
    Array.isArray(n) && r.postMessage({
        action: "alignGopsWith",
        gopsToAlignWith: n
    }),
    typeof s < "u" && r.postMessage({
        action: "setRemux",
        remux: s
    }),
    i.byteLength) {
        var F = i instanceof ArrayBuffer ? i : i.buffer
          , j = i instanceof ArrayBuffer ? 0 : i.byteOffset;
        r.postMessage({
            action: "push",
            data: F,
            byteOffset: j,
            byteLength: i.byteLength
        }, [F])
    }
    P && r.postMessage({
        action: "endTimeline"
    }),
    r.postMessage({
        action: "flush"
    })
}
  , sf = function(t) {
    t.currentTransmux = null,
    t.transmuxQueue.length && (t.currentTransmux = t.transmuxQueue.shift(),
    typeof t.currentTransmux == "function" ? t.currentTransmux() : af(t.currentTransmux))
}
  , pl = function(t, r) {
    t.postMessage({
        action: r
    }),
    sf(t)
}
  , of = function(t, r) {
    if (!r.currentTransmux) {
        r.currentTransmux = t,
        pl(r, t);
        return
    }
    r.transmuxQueue.push(pl.bind(null, r, t))
}
  , Q0 = function(t) {
    of("reset", t)
}
  , J0 = function(t) {
    of("endTimeline", t)
}
  , uf = function(t) {
    if (!t.transmuxer.currentTransmux) {
        t.transmuxer.currentTransmux = t,
        af(t);
        return
    }
    t.transmuxer.transmuxQueue.push(t)
}
  , Z0 = function(t) {
    var r = new $0;
    r.currentTransmux = null,
    r.transmuxQueue = [];
    var i = r.terminate;
    return r.terminate = function() {
        return r.currentTransmux = null,
        r.transmuxQueue.length = 0,
        i.call(r)
    }
    ,
    r.postMessage({
        action: "init",
        options: t
    }),
    r
}
  , Ga = {
    reset: Q0,
    endTimeline: J0,
    transmux: uf,
    createTransmuxer: Z0
}
  , Ln = function(t) {
    var r = t.transmuxer
      , i = t.endAction || t.action
      , e = t.callback
      , n = rt({}, t, {
        endAction: null,
        transmuxer: null,
        callback: null
    })
      , s = function l(c) {
        c.data.action === i && (r.removeEventListener("message", l),
        c.data.data && (c.data.data = new Uint8Array(c.data.data,t.byteOffset || 0,t.byteLength || c.data.data.byteLength),
        t.data && (t.data = c.data.data)),
        e(c.data))
    };
    if (r.addEventListener("message", s),
    t.data) {
        var o = t.data instanceof ArrayBuffer;
        n.byteOffset = o ? 0 : t.data.byteOffset,
        n.byteLength = t.data.byteLength;
        var u = [o ? t.data : t.data.buffer];
        r.postMessage(n, u)
    } else
        r.postMessage(n)
}
  , gt = {
    FAILURE: 2,
    TIMEOUT: -101,
    ABORTED: -102
}
  , hs = function(t) {
    t.forEach(function(r) {
        r.abort()
    })
}
  , e_ = function(t) {
    return {
        bandwidth: t.bandwidth,
        bytesReceived: t.bytesReceived || 0,
        roundTripTime: t.roundTripTime || 0
    }
}
  , t_ = function(t) {
    var r = t.target
      , i = Date.now() - r.requestTime
      , e = {
        bandwidth: 1 / 0,
        bytesReceived: 0,
        roundTripTime: i || 0
    };
    return e.bytesReceived = t.loaded,
    e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8 * 1e3),
    e
}
  , To = function(t, r) {
    return r.timedout ? {
        status: r.status,
        message: "HLS request timed-out at URL: " + r.uri,
        code: gt.TIMEOUT,
        xhr: r
    } : r.aborted ? {
        status: r.status,
        message: "HLS request aborted at URL: " + r.uri,
        code: gt.ABORTED,
        xhr: r
    } : t ? {
        status: r.status,
        message: "HLS request errored at URL: " + r.uri,
        code: gt.FAILURE,
        xhr: r
    } : r.responseType === "arraybuffer" && r.response.byteLength === 0 ? {
        status: r.status,
        message: "Empty HLS response at URL: " + r.uri,
        code: gt.FAILURE,
        xhr: r
    } : null
}
  , ml = function(t, r, i) {
    return function(e, n) {
        var s = n.response
          , o = To(e, n);
        if (o)
            return i(o, t);
        if (s.byteLength !== 16)
            return i({
                status: n.status,
                message: "Invalid HLS key at URL: " + n.uri,
                code: gt.FAILURE,
                xhr: n
            }, t);
        for (var u = new DataView(s), l = new Uint32Array([u.getUint32(0), u.getUint32(4), u.getUint32(8), u.getUint32(12)]), c = 0; c < r.length; c++)
            r[c].bytes = l;
        return i(null, t)
    }
}
  , lf = function(t, r) {
    var i = Fs(t.map.bytes);
    if (i !== "mp4") {
        var e = t.map.resolvedUri || t.map.uri;
        return r({
            internal: !0,
            message: "Found unsupported " + (i || "unknown") + " container for initialization segment at URL: " + e,
            code: gt.FAILURE
        })
    }
    Ln({
        action: "probeMp4Tracks",
        data: t.map.bytes,
        transmuxer: t.transmuxer,
        callback: function(s) {
            var o = s.tracks
              , u = s.data;
            return t.map.bytes = u,
            o.forEach(function(l) {
                t.map.tracks = t.map.tracks || {},
                !t.map.tracks[l.type] && (t.map.tracks[l.type] = l,
                typeof l.id == "number" && l.timescale && (t.map.timescales = t.map.timescales || {},
                t.map.timescales[l.id] = l.timescale))
            }),
            r(null)
        }
    })
}
  , r_ = function(t) {
    var r = t.segment
      , i = t.finishProcessingFn;
    return function(e, n) {
        var s = To(e, n);
        if (s)
            return i(s, r);
        var o = new Uint8Array(n.response);
        if (r.map.key)
            return r.map.encryptedBytes = o,
            i(null, r);
        r.map.bytes = o,
        lf(r, function(u) {
            if (u)
                return u.xhr = n,
                u.status = n.status,
                i(u, r);
            i(null, r)
        })
    }
}
  , i_ = function(t) {
    var r = t.segment
      , i = t.finishProcessingFn
      , e = t.responseType;
    return function(n, s) {
        var o = To(n, s);
        if (o)
            return i(o, r);
        var u = e === "arraybuffer" || !s.responseText ? s.response : G0(s.responseText.substring(r.lastReachedChar || 0));
        return r.stats = e_(s),
        r.key ? r.encryptedBytes = new Uint8Array(u) : r.bytes = new Uint8Array(u),
        i(null, r)
    }
}
  , n_ = function(t) {
    var r = t.segment
      , i = t.bytes
      , e = t.trackInfoFn
      , n = t.timingInfoFn
      , s = t.videoSegmentTimingInfoFn
      , o = t.audioSegmentTimingInfoFn
      , u = t.id3Fn
      , l = t.captionsFn
      , c = t.isEndOfTimeline
      , p = t.endedTimelineFn
      , g = t.dataFn
      , y = t.doneFn
      , S = r.map && r.map.tracks || {}
      , x = !!(S.audio && S.video)
      , b = n.bind(null, r, "audio", "start")
      , P = n.bind(null, r, "audio", "end")
      , D = n.bind(null, r, "video", "start")
      , L = n.bind(null, r, "video", "end")
      , R = function() {
        return uf({
            bytes: i,
            transmuxer: r.transmuxer,
            audioAppendStart: r.audioAppendStart,
            gopsToAlignWith: r.gopsToAlignWith,
            remux: x,
            onData: function(B) {
                B.type = B.type === "combined" ? "video" : B.type,
                g(r, B)
            },
            onTrackInfo: function(B) {
                e && (x && (B.isMuxed = !0),
                e(r, B))
            },
            onAudioTimingInfo: function(B) {
                b && typeof B.start < "u" && (b(B.start),
                b = null),
                P && typeof B.end < "u" && P(B.end)
            },
            onVideoTimingInfo: function(B) {
                D && typeof B.start < "u" && (D(B.start),
                D = null),
                L && typeof B.end < "u" && L(B.end)
            },
            onVideoSegmentTimingInfo: function(B) {
                s(B)
            },
            onAudioSegmentTimingInfo: function(B) {
                o(B)
            },
            onId3: function(B, M) {
                u(r, B, M)
            },
            onCaptions: function(B) {
                l(r, [B])
            },
            isEndOfTimeline: c,
            onEndedTimeline: function() {
                p()
            },
            onDone: function(B) {
                y && (B.type = B.type === "combined" ? "video" : B.type,
                y(null, r, B))
            }
        })
    };
    Ln({
        action: "probeTs",
        transmuxer: r.transmuxer,
        data: i,
        baseStartTime: r.baseStartTime,
        callback: function(j) {
            r.bytes = i = j.data;
            var B = j.result;
            B && (e(r, {
                hasAudio: B.hasAudio,
                hasVideo: B.hasVideo,
                isMuxed: x
            }),
            e = null,
            B.hasAudio && !x && b(B.audioStart),
            B.hasVideo && D(B.videoStart),
            b = null,
            D = null),
            R()
        }
    })
}
  , df = function(t) {
    var r = t.segment
      , i = t.bytes
      , e = t.trackInfoFn
      , n = t.timingInfoFn
      , s = t.videoSegmentTimingInfoFn
      , o = t.audioSegmentTimingInfoFn
      , u = t.id3Fn
      , l = t.captionsFn
      , c = t.isEndOfTimeline
      , p = t.endedTimelineFn
      , g = t.dataFn
      , y = t.doneFn
      , S = new Uint8Array(i);
    if (Pg(S)) {
        r.isFmp4 = !0;
        var x = r.map.tracks
          , b = {
            isFmp4: !0,
            hasVideo: !!x.video,
            hasAudio: !!x.audio
        };
        x.audio && x.audio.codec && x.audio.codec !== "enca" && (b.audioCodec = x.audio.codec),
        x.video && x.video.codec && x.video.codec !== "encv" && (b.videoCodec = x.video.codec),
        x.video && x.audio && (b.isMuxed = !0),
        e(r, b);
        var P = function(L) {
            g(r, {
                data: S,
                type: b.hasAudio && !b.isMuxed ? "audio" : "video"
            }),
            L && L.length && l(r, L),
            y(null, r, {})
        };
        Ln({
            action: "probeMp4StartTime",
            timescales: r.map.timescales,
            data: S,
            transmuxer: r.transmuxer,
            callback: function(L) {
                var R = L.data
                  , F = L.startTime;
                if (i = R.buffer,
                r.bytes = S = R,
                b.hasAudio && !b.isMuxed && n(r, "audio", "start", F),
                b.hasVideo && n(r, "video", "start", F),
                !x.video || !R.byteLength || !r.transmuxer) {
                    P();
                    return
                }
                Ln({
                    action: "pushMp4Captions",
                    endAction: "mp4Captions",
                    transmuxer: r.transmuxer,
                    data: S,
                    timescales: r.map.timescales,
                    trackIds: [x.video.id],
                    callback: function(B) {
                        i = B.data.buffer,
                        r.bytes = S = B.data,
                        P(B.captions)
                    }
                })
            }
        });
        return
    }
    if (!r.transmuxer) {
        y(null, r, {});
        return
    }
    if (typeof r.container > "u" && (r.container = Fs(S)),
    r.container !== "ts" && r.container !== "aac") {
        e(r, {
            hasAudio: !1,
            hasVideo: !1
        }),
        y(null, r, {});
        return
    }
    n_({
        segment: r,
        bytes: i,
        trackInfoFn: e,
        timingInfoFn: n,
        videoSegmentTimingInfoFn: s,
        audioSegmentTimingInfoFn: o,
        id3Fn: u,
        captionsFn: l,
        isEndOfTimeline: c,
        endedTimelineFn: p,
        dataFn: g,
        doneFn: y
    })
}
  , cf = function(t, r) {
    var i = t.id
      , e = t.key
      , n = t.encryptedBytes
      , s = t.decryptionWorker
      , o = function l(c) {
        if (c.data.source === i) {
            s.removeEventListener("message", l);
            var p = c.data.decrypted;
            r(new Uint8Array(p.bytes,p.byteOffset,p.byteLength))
        }
    };
    s.addEventListener("message", o);
    var u;
    e.bytes.slice ? u = e.bytes.slice() : u = new Uint32Array(Array.prototype.slice.call(e.bytes)),
    s.postMessage(Xc({
        source: i,
        encrypted: n,
        key: u,
        iv: e.iv
    }), [n.buffer, u.buffer])
}
  , a_ = function(t) {
    var r = t.decryptionWorker
      , i = t.segment
      , e = t.trackInfoFn
      , n = t.timingInfoFn
      , s = t.videoSegmentTimingInfoFn
      , o = t.audioSegmentTimingInfoFn
      , u = t.id3Fn
      , l = t.captionsFn
      , c = t.isEndOfTimeline
      , p = t.endedTimelineFn
      , g = t.dataFn
      , y = t.doneFn;
    cf({
        id: i.requestId,
        key: i.key,
        encryptedBytes: i.encryptedBytes,
        decryptionWorker: r
    }, function(S) {
        i.bytes = S,
        df({
            segment: i,
            bytes: i.bytes,
            trackInfoFn: e,
            timingInfoFn: n,
            videoSegmentTimingInfoFn: s,
            audioSegmentTimingInfoFn: o,
            id3Fn: u,
            captionsFn: l,
            isEndOfTimeline: c,
            endedTimelineFn: p,
            dataFn: g,
            doneFn: y
        })
    })
}
  , s_ = function(t) {
    var r = t.activeXhrs
      , i = t.decryptionWorker
      , e = t.trackInfoFn
      , n = t.timingInfoFn
      , s = t.videoSegmentTimingInfoFn
      , o = t.audioSegmentTimingInfoFn
      , u = t.id3Fn
      , l = t.captionsFn
      , c = t.isEndOfTimeline
      , p = t.endedTimelineFn
      , g = t.dataFn
      , y = t.doneFn
      , S = 0
      , x = !1;
    return function(b, P) {
        if (!x) {
            if (b)
                return x = !0,
                hs(r),
                y(b, P);
            if (S += 1,
            S === r.length) {
                var D = function() {
                    if (P.encryptedBytes)
                        return a_({
                            decryptionWorker: i,
                            segment: P,
                            trackInfoFn: e,
                            timingInfoFn: n,
                            videoSegmentTimingInfoFn: s,
                            audioSegmentTimingInfoFn: o,
                            id3Fn: u,
                            captionsFn: l,
                            isEndOfTimeline: c,
                            endedTimelineFn: p,
                            dataFn: g,
                            doneFn: y
                        });
                    df({
                        segment: P,
                        bytes: P.bytes,
                        trackInfoFn: e,
                        timingInfoFn: n,
                        videoSegmentTimingInfoFn: s,
                        audioSegmentTimingInfoFn: o,
                        id3Fn: u,
                        captionsFn: l,
                        isEndOfTimeline: c,
                        endedTimelineFn: p,
                        dataFn: g,
                        doneFn: y
                    })
                };
                if (P.endOfAllRequests = Date.now(),
                P.map && P.map.encryptedBytes && !P.map.bytes)
                    return cf({
                        decryptionWorker: i,
                        id: P.requestId + "-init",
                        encryptedBytes: P.map.encryptedBytes,
                        key: P.map.key
                    }, function(L) {
                        P.map.bytes = L,
                        lf(P, function(R) {
                            if (R)
                                return hs(r),
                                y(R, P);
                            D()
                        })
                    });
                D()
            }
        }
    }
}
  , o_ = function(t) {
    var r = t.loadendState
      , i = t.abortFn;
    return function(e) {
        var n = e.target;
        n.aborted && i && !r.calledAbortFn && (i(),
        r.calledAbortFn = !0)
    }
}
  , u_ = function(t) {
    var r = t.segment
      , i = t.progressFn;
    return t.trackInfoFn,
    t.timingInfoFn,
    t.videoSegmentTimingInfoFn,
    t.audioSegmentTimingInfoFn,
    t.id3Fn,
    t.captionsFn,
    t.isEndOfTimeline,
    t.endedTimelineFn,
    t.dataFn,
    function(e) {
        var n = e.target;
        if (!n.aborted)
            return r.stats = I.mergeOptions(r.stats, t_(e)),
            !r.stats.firstBytesReceivedAt && r.stats.bytesReceived && (r.stats.firstBytesReceivedAt = Date.now()),
            i(e, r)
    }
}
  , l_ = function(t) {
    var r = t.xhr
      , i = t.xhrOptions
      , e = t.decryptionWorker
      , n = t.segment
      , s = t.abortFn
      , o = t.progressFn
      , u = t.trackInfoFn
      , l = t.timingInfoFn
      , c = t.videoSegmentTimingInfoFn
      , p = t.audioSegmentTimingInfoFn
      , g = t.id3Fn
      , y = t.captionsFn
      , S = t.isEndOfTimeline
      , x = t.endedTimelineFn
      , b = t.dataFn
      , P = t.doneFn
      , D = []
      , L = s_({
        activeXhrs: D,
        decryptionWorker: e,
        trackInfoFn: u,
        timingInfoFn: l,
        videoSegmentTimingInfoFn: c,
        audioSegmentTimingInfoFn: p,
        id3Fn: g,
        captionsFn: y,
        isEndOfTimeline: S,
        endedTimelineFn: x,
        dataFn: b,
        doneFn: P
    });
    if (n.key && !n.key.bytes) {
        var R = [n.key];
        n.map && !n.map.bytes && n.map.key && n.map.key.resolvedUri === n.key.resolvedUri && R.push(n.map.key);
        var F = I.mergeOptions(i, {
            uri: n.key.resolvedUri,
            responseType: "arraybuffer"
        })
          , j = ml(n, R, L)
          , B = r(F, j);
        D.push(B)
    }
    if (n.map && !n.map.bytes) {
        var M = n.map.key && (!n.key || n.key.resolvedUri !== n.map.key.resolvedUri);
        if (M) {
            var H = I.mergeOptions(i, {
                uri: n.map.key.resolvedUri,
                responseType: "arraybuffer"
            })
              , ee = ml(n, [n.map.key], L)
              , J = r(H, ee);
            D.push(J)
        }
        var me = I.mergeOptions(i, {
            uri: n.map.resolvedUri,
            responseType: "arraybuffer",
            headers: cs(n.map)
        })
          , le = r_({
            segment: n,
            finishProcessingFn: L
        })
          , be = r(me, le);
        D.push(be)
    }
    var te = I.mergeOptions(i, {
        uri: n.part && n.part.resolvedUri || n.resolvedUri,
        responseType: "arraybuffer",
        headers: cs(n)
    })
      , ae = i_({
        segment: n,
        finishProcessingFn: L,
        responseType: te.responseType
    })
      , se = r(te, ae);
    se.addEventListener("progress", u_({
        segment: n,
        progressFn: o,
        trackInfoFn: u,
        timingInfoFn: l,
        videoSegmentTimingInfoFn: c,
        audioSegmentTimingInfoFn: p,
        id3Fn: g,
        captionsFn: y,
        isEndOfTimeline: S,
        endedTimelineFn: x,
        dataFn: b
    })),
    D.push(se);
    var $e = {};
    return D.forEach(function(Ze) {
        Ze.addEventListener("loadend", o_({
            loadendState: $e,
            abortFn: s
        }))
    }),
    function() {
        return hs(D)
    }
}
  , d_ = dt("CodecUtils")
  , c_ = function(t) {
    var r = t.attributes || {};
    if (r.CODECS)
        return ht(r.CODECS)
}
  , ff = function(t, r) {
    var i = r.attributes || {};
    return t && t.mediaGroups && t.mediaGroups.AUDIO && i.AUDIO && t.mediaGroups.AUDIO[i.AUDIO]
}
  , f_ = function(t, r) {
    if (!ff(t, r))
        return !0;
    var i = r.attributes || {}
      , e = t.mediaGroups.AUDIO[i.AUDIO];
    for (var n in e)
        if (!e[n].uri && !e[n].playlists)
            return !0;
    return !1
}
  , Rn = function(t) {
    var r = {};
    return t.forEach(function(i) {
        var e = i.mediaType
          , n = i.type
          , s = i.details;
        r[e] = r[e] || [],
        r[e].push(jl("" + n + s))
    }),
    Object.keys(r).forEach(function(i) {
        if (r[i].length > 1) {
            d_("multiple " + i + " codecs found as attributes: " + r[i].join(", ") + ". Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs."),
            r[i] = null;
            return
        }
        r[i] = r[i][0]
    }),
    r
}
  , gl = function(t) {
    var r = 0;
    return t.audio && r++,
    t.video && r++,
    r
}
  , fi = function(t, r) {
    var i = r.attributes || {}
      , e = Rn(c_(r) || []);
    if (ff(t, r) && !e.audio && !f_(t, r)) {
        var n = Rn(Qp(t, i.AUDIO) || []);
        n.audio && (e.audio = n.audio)
    }
    return e
}
  , sn = dt("PlaylistSelector")
  , vl = function(t) {
    if (!(!t || !t.playlist)) {
        var r = t.playlist;
        return JSON.stringify({
            id: r.id,
            bandwidth: t.bandwidth,
            width: t.width,
            height: t.height,
            codecs: r.attributes && r.attributes.CODECS || ""
        })
    }
}
  , Mn = function(t, r) {
    if (!t)
        return "";
    var i = A.getComputedStyle(t);
    return i ? i[r] : ""
}
  , bi = function(t, r) {
    var i = t.slice();
    t.sort(function(e, n) {
        var s = r(e, n);
        return s === 0 ? i.indexOf(e) - i.indexOf(n) : s
    })
}
  , bo = function(t, r) {
    var i, e;
    return t.attributes.BANDWIDTH && (i = t.attributes.BANDWIDTH),
    i = i || A.Number.MAX_VALUE,
    r.attributes.BANDWIDTH && (e = r.attributes.BANDWIDTH),
    e = e || A.Number.MAX_VALUE,
    i - e
}
  , h_ = function(t, r) {
    var i, e;
    return t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (i = t.attributes.RESOLUTION.width),
    i = i || A.Number.MAX_VALUE,
    r.attributes.RESOLUTION && r.attributes.RESOLUTION.width && (e = r.attributes.RESOLUTION.width),
    e = e || A.Number.MAX_VALUE,
    i === e && t.attributes.BANDWIDTH && r.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - r.attributes.BANDWIDTH : i - e
}
  , hf = function(t, r, i, e, n, s) {
    if (t) {
        var o = {
            bandwidth: r,
            width: i,
            height: e,
            limitRenditionByPlayerDimensions: n
        }
          , u = t.playlists;
        We.isAudioOnly(t) && (u = s.getAudioTrackPlaylists_(),
        o.audioOnly = !0);
        var l = u.map(function(M) {
            var H, ee = M.attributes && M.attributes.RESOLUTION && M.attributes.RESOLUTION.width, J = M.attributes && M.attributes.RESOLUTION && M.attributes.RESOLUTION.height;
            return H = M.attributes && M.attributes.BANDWIDTH,
            H = H || A.Number.MAX_VALUE,
            {
                bandwidth: H,
                width: ee,
                height: J,
                playlist: M
            }
        });
        bi(l, function(M, H) {
            return M.bandwidth - H.bandwidth
        }),
        l = l.filter(function(M) {
            return !We.isIncompatible(M.playlist)
        });
        var c = l.filter(function(M) {
            return We.isEnabled(M.playlist)
        });
        c.length || (c = l.filter(function(M) {
            return !We.isDisabled(M.playlist)
        }));
        var p = c.filter(function(M) {
            return M.bandwidth * Ee.BANDWIDTH_VARIANCE < r
        })
          , g = p[p.length - 1]
          , y = p.filter(function(M) {
            return M.bandwidth === g.bandwidth
        })[0];
        if (n === !1) {
            var S = y || c[0] || l[0];
            if (S && S.playlist) {
                var x = "sortedPlaylistReps";
                return y && (x = "bandwidthBestRep"),
                c[0] && (x = "enabledPlaylistReps"),
                sn("choosing " + vl(S) + " using " + x + " with options", o),
                S.playlist
            }
            return sn("could not choose a playlist with options", o),
            null
        }
        var b = p.filter(function(M) {
            return M.width && M.height
        });
        bi(b, function(M, H) {
            return M.width - H.width
        });
        var P = b.filter(function(M) {
            return M.width === i && M.height === e
        });
        g = P[P.length - 1];
        var D = P.filter(function(M) {
            return M.bandwidth === g.bandwidth
        })[0], L, R, F;
        D || (L = b.filter(function(M) {
            return M.width > i || M.height > e
        }),
        R = L.filter(function(M) {
            return M.width === L[0].width && M.height === L[0].height
        }),
        g = R[R.length - 1],
        F = R.filter(function(M) {
            return M.bandwidth === g.bandwidth
        })[0]);
        var j = F || D || y || c[0] || l[0];
        if (j && j.playlist) {
            var B = "sortedPlaylistReps";
            return F ? B = "resolutionPlusOneRep" : D ? B = "resolutionBestRep" : y ? B = "bandwidthBestRep" : c[0] && (B = "enabledPlaylistReps"),
            sn("choosing " + vl(j) + " using " + B + " with options", o),
            j.playlist
        }
        return sn("could not choose a playlist with options", o),
        null
    }
}
  , _l = function() {
    var t = this.useDevicePixelRatio && A.devicePixelRatio || 1;
    return hf(this.playlists.master, this.systemBandwidth, parseInt(Mn(this.tech_.el(), "width"), 10) * t, parseInt(Mn(this.tech_.el(), "height"), 10) * t, this.limitRenditionByPlayerDimensions, this.masterPlaylistController_)
}
  , p_ = function(t) {
    var r = -1
      , i = -1;
    if (t < 0 || t > 1)
        throw new Error("Moving average bandwidth decay must be between 0 and 1.");
    return function() {
        var e = this.useDevicePixelRatio && A.devicePixelRatio || 1;
        return r < 0 && (r = this.systemBandwidth,
        i = this.systemBandwidth),
        this.systemBandwidth > 0 && this.systemBandwidth !== i && (r = t * this.systemBandwidth + (1 - t) * r,
        i = this.systemBandwidth),
        hf(this.playlists.master, r, parseInt(Mn(this.tech_.el(), "width"), 10) * e, parseInt(Mn(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions, this.masterPlaylistController_)
    }
}
  , m_ = function(t) {
    var r = t.master
      , i = t.currentTime
      , e = t.bandwidth
      , n = t.duration
      , s = t.segmentDuration
      , o = t.timeUntilRebuffer
      , u = t.currentTimeline
      , l = t.syncController
      , c = r.playlists.filter(function(x) {
        return !We.isIncompatible(x)
    })
      , p = c.filter(We.isEnabled);
    p.length || (p = c.filter(function(x) {
        return !We.isDisabled(x)
    }));
    var g = p.filter(We.hasAttribute.bind(null, "BANDWIDTH"))
      , y = g.map(function(x) {
        var b = l.getSyncPoint(x, n, u, i)
          , P = b ? 1 : 2
          , D = We.estimateSegmentRequestTime(s, e, x)
          , L = D * P - o;
        return {
            playlist: x,
            rebufferingImpact: L
        }
    })
      , S = y.filter(function(x) {
        return x.rebufferingImpact <= 0
    });
    return bi(S, function(x, b) {
        return bo(b.playlist, x.playlist)
    }),
    S.length ? S[0] : (bi(y, function(x, b) {
        return x.rebufferingImpact - b.rebufferingImpact
    }),
    y[0] || null)
}
  , g_ = function() {
    var t = this
      , r = this.playlists.master.playlists.filter(We.isEnabled);
    bi(r, function(e, n) {
        return bo(e, n)
    });
    var i = r.filter(function(e) {
        return !!fi(t.playlists.master, e).video
    });
    return i[0] || null
}
  , v_ = function(t) {
    var r = 0, i;
    return t.bytes && (i = new Uint8Array(t.bytes),
    t.segments.forEach(function(e) {
        i.set(e, r),
        r += e.byteLength
    })),
    i
}
  , __ = function(t, r, i) {
    if (!t[i]) {
        r.trigger({
            type: "usage",
            name: "vhs-608"
        }),
        r.trigger({
            type: "usage",
            name: "hls-608"
        });
        var e = i;
        /^cc708_/.test(i) && (e = "SERVICE" + i.split("_")[1]);
        var n = r.textTracks().getTrackById(e);
        if (n)
            t[i] = n;
        else {
            var s = r.options_.vhs && r.options_.vhs.captionServices || {}
              , o = i
              , u = i
              , l = !1
              , c = s[e];
            c && (o = c.label,
            u = c.language,
            l = c.default),
            t[i] = r.addRemoteTextTrack({
                kind: "captions",
                id: e,
                default: l,
                label: o,
                language: u
            }, !1).track
        }
    }
}
  , y_ = function(t) {
    var r = t.inbandTextTracks
      , i = t.captionArray
      , e = t.timestampOffset;
    if (i) {
        var n = A.WebKitDataCue || A.VTTCue;
        i.forEach(function(s) {
            var o = s.stream;
            r[o].addCue(new n(s.startTime + e,s.endTime + e,s.text))
        })
    }
}
  , T_ = function(t) {
    Object.defineProperties(t.frame, {
        id: {
            get: function() {
                return I.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),
                t.value.key
            }
        },
        value: {
            get: function() {
                return I.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),
                t.value.data
            }
        },
        privateData: {
            get: function() {
                return I.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),
                t.value.data
            }
        }
    })
}
  , b_ = function(t) {
    var r = t.inbandTextTracks
      , i = t.metadataArray
      , e = t.timestampOffset
      , n = t.videoDuration;
    if (i) {
        var s = A.WebKitDataCue || A.VTTCue
          , o = r.metadataTrack_;
        if (o && (i.forEach(function(y) {
            var S = y.cueTime + e;
            typeof S != "number" || A.isNaN(S) || S < 0 || !(S < 1 / 0) || y.frames.forEach(function(x) {
                var b = new s(S,S,x.value || x.url || x.data || "");
                b.frame = x,
                b.value = x,
                T_(b),
                o.addCue(b)
            })
        }),
        !(!o.cues || !o.cues.length))) {
            for (var u = o.cues, l = [], c = 0; c < u.length; c++)
                u[c] && l.push(u[c]);
            var p = l.reduce(function(y, S) {
                var x = y[S.startTime] || [];
                return x.push(S),
                y[S.startTime] = x,
                y
            }, {})
              , g = Object.keys(p).sort(function(y, S) {
                return Number(y) - Number(S)
            });
            g.forEach(function(y, S) {
                var x = p[y]
                  , b = Number(g[S + 1]) || n;
                x.forEach(function(P) {
                    P.endTime = b
                })
            })
        }
    }
}
  , x_ = function(t, r, i) {
    t.metadataTrack_ || (t.metadataTrack_ = i.addRemoteTextTrack({
        kind: "metadata",
        label: "Timed Metadata"
    }, !1).track,
    t.metadataTrack_.inBandMetadataTrackDispatchType = r)
}
  , ui = function(t, r, i) {
    var e, n;
    if (i && i.cues)
        for (e = i.cues.length; e--; )
            n = i.cues[e],
            n.startTime >= t && n.endTime <= r && i.removeCue(n)
}
  , S_ = function(t) {
    var r = t.cues;
    if (r)
        for (var i = 0; i < r.length; i++) {
            for (var e = [], n = 0, s = 0; s < r.length; s++)
                r[i].startTime === r[s].startTime && r[i].endTime === r[s].endTime && r[i].text === r[s].text && (n++,
                n > 1 && e.push(r[s]));
            e.length && e.forEach(function(o) {
                return t.removeCue(o)
            })
        }
}
  , E_ = function(t, r, i) {
    if (typeof r > "u" || r === null || !t.length)
        return [];
    var e = Math.ceil((r - i + 3) * Tn.ONE_SECOND_IN_TS), n;
    for (n = 0; n < t.length && !(t[n].pts > e); n++)
        ;
    return t.slice(n)
}
  , C_ = function(t, r, i) {
    if (!r.length)
        return t;
    if (i)
        return r.slice();
    var e = r[0].pts
      , n = 0;
    for (n; n < t.length && !(t[n].pts >= e); n++)
        ;
    return t.slice(0, n).concat(r)
}
  , w_ = function(t, r, i, e) {
    for (var n = Math.ceil((r - e) * Tn.ONE_SECOND_IN_TS), s = Math.ceil((i - e) * Tn.ONE_SECOND_IN_TS), o = t.slice(), u = t.length; u-- && !(t[u].pts <= s); )
        ;
    if (u === -1)
        return o;
    for (var l = u + 1; l-- && !(t[l].pts <= n); )
        ;
    return l = Math.max(l, 0),
    o.splice(l, u - l + 1),
    o
}
  , k_ = function(t, r) {
    if (!t && !r || !t && r || t && !r)
        return !1;
    if (t === r)
        return !0;
    var i = Object.keys(t).sort()
      , e = Object.keys(r).sort();
    if (i.length !== e.length)
        return !1;
    for (var n = 0; n < i.length; n++) {
        var s = i[n];
        if (s !== e[n] || t[s] !== r[s])
            return !1
    }
    return !0
}
  , pf = 22
  , A_ = function(t, r, i) {
    r = r || [];
    for (var e = [], n = 0, s = 0; s < r.length; s++) {
        var o = r[s];
        if (t === o.timeline && (e.push(s),
        n += o.duration,
        n > i))
            return s
    }
    return e.length === 0 ? 0 : e[e.length - 1]
}
  , ti = 1
  , P_ = 500
  , yl = function(t) {
    return typeof t == "number" && isFinite(t)
}
  , on = 1 / 60
  , I_ = function(t, r, i) {
    return t !== "main" || !r || !i ? null : !i.hasAudio && !i.hasVideo ? "Neither audio nor video found in segment." : r.hasVideo && !i.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !r.hasVideo && i.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null
}
  , D_ = function(t, r, i) {
    var e = r - Ee.BACK_BUFFER_LENGTH;
    t.length && (e = Math.max(e, t.start(0)));
    var n = r - i;
    return Math.min(n, e)
}
  , un = function(t) {
    var r = t.startOfSegment
      , i = t.duration
      , e = t.segment
      , n = t.part
      , s = t.playlist
      , o = s.mediaSequence
      , u = s.id
      , l = s.segments
      , c = l === void 0 ? [] : l
      , p = t.mediaIndex
      , g = t.partIndex
      , y = t.timeline
      , S = c.length - 1
      , x = "mediaIndex/partIndex increment";
    t.getMediaInfoForTime ? x = "getMediaInfoForTime (" + t.getMediaInfoForTime + ")" : t.isSyncRequest && (x = "getSyncSegmentCandidate (isSyncRequest)");
    var b = typeof g == "number"
      , P = t.segment.uri ? "segment" : "pre-segment"
      , D = b ? Rc({
        preloadSegment: e
    }) - 1 : 0;
    return P + " [" + (o + p) + "/" + (o + S) + "]" + (b ? " part [" + g + "/" + D + "]" : "") + (" segment start/end [" + e.start + " => " + e.end + "]") + (b ? " part start/end [" + n.start + " => " + n.end + "]" : "") + (" startOfSegment [" + r + "]") + (" duration [" + i + "]") + (" timeline [" + y + "]") + (" selected by [" + x + "]") + (" playlist [" + u + "]")
}
  , Tl = function(t) {
    return t + "TimingInfo"
}
  , O_ = function(t) {
    var r = t.segmentTimeline
      , i = t.currentTimeline
      , e = t.startOfSegment
      , n = t.buffered
      , s = t.overrideCheck;
    return !s && r === i ? null : r < i ? e : n.length ? n.end(n.length - 1) : e
}
  , bl = function(t) {
    var r = t.timelineChangeController
      , i = t.currentTimeline
      , e = t.segmentTimeline
      , n = t.loaderType
      , s = t.audioDisabled;
    if (i === e)
        return !1;
    if (n === "audio") {
        var o = r.lastTimelineChange({
            type: "main"
        });
        return !o || o.to !== e
    }
    if (n === "main" && s) {
        var u = r.pendingTimelineChange({
            type: "audio"
        });
        return !(u && u.to === e)
    }
    return !1
}
  , L_ = function(t, r) {
    var i = t && typeof t.start == "number" && typeof t.end == "number" ? t.end - t.start : 0
      , e = r && typeof r.start == "number" && typeof r.end == "number" ? r.end - r.start : 0;
    return Math.max(i, e)
}
  , xl = function(t) {
    var r = t.segmentDuration
      , i = t.maxDuration;
    return r ? Math.round(r) > i + rr : !1
}
  , R_ = function(t, r) {
    if (r !== "hls")
        return null;
    var i = L_(t.audioTimingInfo, t.videoTimingInfo);
    if (!i)
        return null;
    var e = t.playlist.targetDuration
      , n = xl({
        segmentDuration: i,
        maxDuration: e * 2
    })
      , s = xl({
        segmentDuration: i,
        maxDuration: e
    })
      , o = "Segment with index " + t.mediaIndex + " " + ("from playlist " + t.playlist.id + " ") + ("has a duration of " + i + " ") + ("when the reported duration is " + t.duration + " ") + ("and the target duration is " + e + ". ") + "For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1";
    return n || s ? {
        severity: n ? "warn" : "info",
        message: o
    } : null
}
  , ps = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        if (n = a.call(this) || this,
        !i)
            throw new TypeError("Initialization settings are required");
        if (typeof i.currentTime != "function")
            throw new TypeError("No currentTime getter specified");
        if (!i.mediaSource)
            throw new TypeError("No MediaSource specified");
        return n.bandwidth = i.bandwidth,
        n.throughput = {
            rate: 0,
            count: 0
        },
        n.roundTrip = NaN,
        n.resetStats_(),
        n.mediaIndex = null,
        n.partIndex = null,
        n.hasPlayed_ = i.hasPlayed,
        n.currentTime_ = i.currentTime,
        n.seekable_ = i.seekable,
        n.seeking_ = i.seeking,
        n.duration_ = i.duration,
        n.mediaSource_ = i.mediaSource,
        n.vhs_ = i.vhs,
        n.loaderType_ = i.loaderType,
        n.currentMediaInfo_ = void 0,
        n.startingMediaInfo_ = void 0,
        n.segmentMetadataTrack_ = i.segmentMetadataTrack,
        n.goalBufferLength_ = i.goalBufferLength,
        n.sourceType_ = i.sourceType,
        n.sourceUpdater_ = i.sourceUpdater,
        n.inbandTextTracks_ = i.inbandTextTracks,
        n.state_ = "INIT",
        n.timelineChangeController_ = i.timelineChangeController,
        n.shouldSaveSegmentTimingInfo_ = !0,
        n.parse708captions_ = i.parse708captions,
        n.checkBufferTimeout_ = null,
        n.error_ = void 0,
        n.currentTimeline_ = -1,
        n.pendingSegment_ = null,
        n.xhrOptions_ = null,
        n.pendingSegments_ = [],
        n.audioDisabled_ = !1,
        n.isPendingTimestampOffset_ = !1,
        n.gopBuffer_ = [],
        n.timeMapping_ = 0,
        n.safeAppend_ = I.browser.IE_VERSION >= 11,
        n.appendInitSegment_ = {
            audio: !0,
            video: !0
        },
        n.playlistOfLastInitSegment_ = {
            audio: null,
            video: null
        },
        n.callQueue_ = [],
        n.loadQueue_ = [],
        n.metadataQueue_ = {
            id3: [],
            caption: []
        },
        n.waitingOnRemove_ = !1,
        n.quotaExceededErrorRetryTimeout_ = null,
        n.activeInitSegmentId_ = null,
        n.initSegments_ = {},
        n.cacheEncryptionKeys_ = i.cacheEncryptionKeys,
        n.keyCache_ = {},
        n.decrypter_ = i.decrypter,
        n.syncController_ = i.syncController,
        n.syncPoint_ = {
            segmentIndex: 0,
            time: 0
        },
        n.transmuxer_ = n.createTransmuxer_(),
        n.triggerSyncInfoUpdate_ = function() {
            return n.trigger("syncinfoupdate")
        }
        ,
        n.syncController_.on("syncinfoupdate", n.triggerSyncInfoUpdate_),
        n.mediaSource_.addEventListener("sourceopen", function() {
            n.isEndOfStream_() || (n.ended_ = !1)
        }),
        n.fetchAtBuffer_ = !1,
        n.logger_ = dt("SegmentLoader[" + n.loaderType_ + "]"),
        Object.defineProperty(Y(n), "state", {
            get: function() {
                return this.state_
            },
            set: function(o) {
                o !== this.state_ && (this.logger_(this.state_ + " -> " + o),
                this.state_ = o,
                this.trigger("statechange"))
            }
        }),
        n.sourceUpdater_.on("ready", function() {
            n.hasEnoughInfoToAppend_() && n.processCallQueue_()
        }),
        n.loaderType_ === "main" && n.timelineChangeController_.on("pendingtimelinechange", function() {
            n.hasEnoughInfoToAppend_() && n.processCallQueue_()
        }),
        n.loaderType_ === "audio" && n.timelineChangeController_.on("timelinechange", function() {
            n.hasEnoughInfoToLoad_() && n.processLoadQueue_(),
            n.hasEnoughInfoToAppend_() && n.processCallQueue_()
        }),
        n
    }
    var r = t.prototype;
    return r.createTransmuxer_ = function() {
        return Ga.createTransmuxer({
            remux: !1,
            alignGopsAtEnd: this.safeAppend_,
            keepOriginalTimestamps: !0,
            parse708captions: this.parse708captions_
        })
    }
    ,
    r.resetStats_ = function() {
        this.mediaBytesTransferred = 0,
        this.mediaRequests = 0,
        this.mediaRequestsAborted = 0,
        this.mediaRequestsTimedout = 0,
        this.mediaRequestsErrored = 0,
        this.mediaTransferDuration = 0,
        this.mediaSecondsLoaded = 0,
        this.mediaAppends = 0
    }
    ,
    r.dispose = function() {
        this.trigger("dispose"),
        this.state = "DISPOSED",
        this.pause(),
        this.abort_(),
        this.transmuxer_ && this.transmuxer_.terminate(),
        this.resetStats_(),
        this.checkBufferTimeout_ && A.clearTimeout(this.checkBufferTimeout_),
        this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_),
        this.off()
    }
    ,
    r.setAudio = function(e) {
        this.audioDisabled_ = !e,
        e ? this.appendInitSegment_.audio = !0 : this.sourceUpdater_.removeAudio(0, this.duration_())
    }
    ,
    r.abort = function() {
        if (this.state !== "WAITING") {
            this.pendingSegment_ && (this.pendingSegment_ = null);
            return
        }
        this.abort_(),
        this.state = "READY",
        this.paused() || this.monitorBuffer_()
    }
    ,
    r.abort_ = function() {
        this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests(),
        this.pendingSegment_ = null,
        this.callQueue_ = [],
        this.loadQueue_ = [],
        this.metadataQueue_.id3 = [],
        this.metadataQueue_.caption = [],
        this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_),
        this.waitingOnRemove_ = !1,
        A.clearTimeout(this.quotaExceededErrorRetryTimeout_),
        this.quotaExceededErrorRetryTimeout_ = null
    }
    ,
    r.checkForAbort_ = function(e) {
        return this.state === "APPENDING" && !this.pendingSegment_ ? (this.state = "READY",
        !0) : !this.pendingSegment_ || this.pendingSegment_.requestId !== e
    }
    ,
    r.error = function(e) {
        return typeof e < "u" && (this.logger_("error occurred:", e),
        this.error_ = e),
        this.pendingSegment_ = null,
        this.error_
    }
    ,
    r.endOfStream = function() {
        this.ended_ = !0,
        this.transmuxer_ && Ga.reset(this.transmuxer_),
        this.gopBuffer_.length = 0,
        this.pause(),
        this.trigger("ended")
    }
    ,
    r.buffered_ = function() {
        if (!this.sourceUpdater_ || !this.startingMediaInfo_)
            return I.createTimeRanges();
        if (this.loaderType_ === "main") {
            var e = this.startingMediaInfo_
              , n = e.hasAudio
              , s = e.hasVideo
              , o = e.isMuxed;
            if (s && n && !this.audioDisabled_ && !o)
                return this.sourceUpdater_.buffered();
            if (s)
                return this.sourceUpdater_.videoBuffered()
        }
        return this.sourceUpdater_.audioBuffered()
    }
    ,
    r.initSegmentForMap = function(e, n) {
        if (n === void 0 && (n = !1),
        !e)
            return null;
        var s = On(e)
          , o = this.initSegments_[s];
        return n && !o && e.bytes && (this.initSegments_[s] = o = {
            resolvedUri: e.resolvedUri,
            byterange: e.byterange,
            bytes: e.bytes,
            tracks: e.tracks,
            timescales: e.timescales
        }),
        o || e
    }
    ,
    r.segmentKey = function(e, n) {
        if (n === void 0 && (n = !1),
        !e)
            return null;
        var s = Yc(e)
          , o = this.keyCache_[s];
        this.cacheEncryptionKeys_ && n && !o && e.bytes && (this.keyCache_[s] = o = {
            resolvedUri: e.resolvedUri,
            bytes: e.bytes
        });
        var u = {
            resolvedUri: (o || e).resolvedUri
        };
        return o && (u.bytes = o.bytes),
        u
    }
    ,
    r.couldBeginLoading_ = function() {
        return this.playlist_ && !this.paused()
    }
    ,
    r.load = function() {
        if (this.monitorBuffer_(),
        !!this.playlist_) {
            if (this.state === "INIT" && this.couldBeginLoading_())
                return this.init_();
            !this.couldBeginLoading_() || this.state !== "READY" && this.state !== "INIT" || (this.state = "READY")
        }
    }
    ,
    r.init_ = function() {
        return this.state = "READY",
        this.resetEverything(),
        this.monitorBuffer_()
    }
    ,
    r.playlist = function(e, n) {
        if (n === void 0 && (n = {}),
        !!e) {
            var s = this.playlist_
              , o = this.pendingSegment_;
            this.playlist_ = e,
            this.xhrOptions_ = n,
            this.state === "INIT" && (e.syncInfo = {
                mediaSequence: e.mediaSequence,
                time: 0
            },
            this.loaderType_ === "main" && this.syncController_.setDateTimeMappingForStart(e));
            var u = null;
            if (s && (s.id ? u = s.id : s.uri && (u = s.uri)),
            this.logger_("playlist update [" + u + " => " + (e.id || e.uri) + "]"),
            this.trigger("syncinfoupdate"),
            this.state === "INIT" && this.couldBeginLoading_())
                return this.init_();
            if (!s || s.uri !== e.uri) {
                this.mediaIndex !== null && this.resyncLoader(),
                this.currentMediaInfo_ = void 0,
                this.trigger("playlistupdate");
                return
            }
            var l = e.mediaSequence - s.mediaSequence;
            if (this.logger_("live window shift [" + l + "]"),
            this.mediaIndex !== null)
                if (this.mediaIndex -= l,
                this.mediaIndex < 0)
                    this.mediaIndex = null,
                    this.partIndex = null;
                else {
                    var c = this.playlist_.segments[this.mediaIndex];
                    if (this.partIndex && (!c.parts || !c.parts.length || !c.parts[this.partIndex])) {
                        var p = this.mediaIndex;
                        this.logger_("currently processing part (index " + this.partIndex + ") no longer exists."),
                        this.resetLoader(),
                        this.mediaIndex = p
                    }
                }
            o && (o.mediaIndex -= l,
            o.mediaIndex < 0 ? (o.mediaIndex = null,
            o.partIndex = null) : (o.mediaIndex >= 0 && (o.segment = e.segments[o.mediaIndex]),
            o.partIndex >= 0 && o.segment.parts && (o.part = o.segment.parts[o.partIndex]))),
            this.syncController_.saveExpiredSegmentInfo(s, e)
        }
    }
    ,
    r.pause = function() {
        this.checkBufferTimeout_ && (A.clearTimeout(this.checkBufferTimeout_),
        this.checkBufferTimeout_ = null)
    }
    ,
    r.paused = function() {
        return this.checkBufferTimeout_ === null
    }
    ,
    r.resetEverything = function(e) {
        this.ended_ = !1,
        this.appendInitSegment_ = {
            audio: !0,
            video: !0
        },
        this.resetLoader(),
        this.remove(0, 1 / 0, e),
        this.transmuxer_ && this.transmuxer_.postMessage({
            action: "clearAllMp4Captions"
        })
    }
    ,
    r.resetLoader = function() {
        this.fetchAtBuffer_ = !1,
        this.resyncLoader()
    }
    ,
    r.resyncLoader = function() {
        this.transmuxer_ && Ga.reset(this.transmuxer_),
        this.mediaIndex = null,
        this.partIndex = null,
        this.syncPoint_ = null,
        this.isPendingTimestampOffset_ = !1,
        this.callQueue_ = [],
        this.loadQueue_ = [],
        this.metadataQueue_.id3 = [],
        this.metadataQueue_.caption = [],
        this.abort(),
        this.transmuxer_ && this.transmuxer_.postMessage({
            action: "clearParsedMp4Captions"
        })
    }
    ,
    r.remove = function(e, n, s, o) {
        if (s === void 0 && (s = function() {}
        ),
        o === void 0 && (o = !1),
        n === 1 / 0 && (n = this.duration_()),
        n <= e) {
            this.logger_("skipping remove because end ${end} is <= start ${start}");
            return
        }
        if (!this.sourceUpdater_ || !this.startingMediaInfo_) {
            this.logger_("skipping remove because no source updater or starting media info");
            return
        }
        var u = 1
          , l = function() {
            u--,
            u === 0 && s()
        };
        (o || !this.audioDisabled_) && (u++,
        this.sourceUpdater_.removeAudio(e, n, l)),
        (o || this.loaderType_ === "main") && (this.gopBuffer_ = w_(this.gopBuffer_, e, n, this.timeMapping_),
        u++,
        this.sourceUpdater_.removeVideo(e, n, l));
        for (var c in this.inbandTextTracks_)
            ui(e, n, this.inbandTextTracks_[c]);
        ui(e, n, this.segmentMetadataTrack_),
        l()
    }
    ,
    r.monitorBuffer_ = function() {
        this.checkBufferTimeout_ && A.clearTimeout(this.checkBufferTimeout_),
        this.checkBufferTimeout_ = A.setTimeout(this.monitorBufferTick_.bind(this), 1)
    }
    ,
    r.monitorBufferTick_ = function() {
        this.state === "READY" && this.fillBuffer_(),
        this.checkBufferTimeout_ && A.clearTimeout(this.checkBufferTimeout_),
        this.checkBufferTimeout_ = A.setTimeout(this.monitorBufferTick_.bind(this), P_)
    }
    ,
    r.fillBuffer_ = function() {
        if (!this.sourceUpdater_.updating()) {
            var e = this.chooseNextRequest_();
            e && (typeof e.timestampOffset == "number" && (this.isPendingTimestampOffset_ = !1,
            this.timelineChangeController_.pendingTimelineChange({
                type: this.loaderType_,
                from: this.currentTimeline_,
                to: e.timeline
            })),
            this.loadSegment_(e))
        }
    }
    ,
    r.isEndOfStream_ = function(e, n, s) {
        if (e === void 0 && (e = this.mediaIndex),
        n === void 0 && (n = this.playlist_),
        s === void 0 && (s = this.partIndex),
        !n || !this.mediaSource_)
            return !1;
        var o = typeof e == "number" && n.segments[e]
          , u = e + 1 === n.segments.length
          , l = !o || !o.parts || s + 1 === o.parts.length;
        return n.endList && this.mediaSource_.readyState === "open" && u && l
    }
    ,
    r.chooseNextRequest_ = function() {
        var e = ll(this.buffered_()) || 0
          , n = Math.max(0, e - this.currentTime_())
          , s = !this.hasPlayed_() && n >= 1
          , o = n >= this.goalBufferLength_()
          , u = this.playlist_.segments;
        if (!u.length || s || o)
            return null;
        this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_());
        var l = {
            partIndex: null,
            mediaIndex: null,
            startOfSegment: null,
            playlist: this.playlist_,
            isSyncRequest: !this.syncPoint_
        };
        if (l.isSyncRequest)
            l.mediaIndex = A_(this.currentTimeline_, u, e);
        else if (this.mediaIndex !== null) {
            var c = u[this.mediaIndex]
              , p = typeof this.partIndex == "number" ? this.partIndex : -1;
            l.startOfSegment = c.end ? c.end : e,
            c.parts && c.parts[p + 1] ? (l.mediaIndex = this.mediaIndex,
            l.partIndex = p + 1) : l.mediaIndex = this.mediaIndex + 1
        } else {
            var g = We.getMediaInfoForTime({
                playlist: this.playlist_,
                currentTime: this.fetchAtBuffer_ ? e : this.currentTime_(),
                startingPartIndex: this.syncPoint_.partIndex,
                startingSegmentIndex: this.syncPoint_.segmentIndex,
                startTime: this.syncPoint_.time
            })
              , y = g.segmentIndex
              , S = g.startTime
              , x = g.partIndex;
            l.getMediaInfoForTime = this.fetchAtBuffer_ ? "bufferedEnd" : "currentTime",
            l.mediaIndex = y,
            l.startOfSegment = S,
            l.partIndex = x
        }
        var b = u[l.mediaIndex]
          , P = b && typeof l.partIndex == "number" && b.parts && b.parts[l.partIndex];
        if (!b || typeof l.partIndex == "number" && !P)
            return null;
        typeof l.partIndex != "number" && b.parts && (l.partIndex = 0);
        var D = this.mediaSource_ && this.mediaSource_.readyState === "ended";
        return l.mediaIndex >= u.length - 1 && D && !this.seeking_() ? null : this.generateSegmentInfo_(l)
    }
    ,
    r.generateSegmentInfo_ = function(e) {
        var n = e.playlist
          , s = e.mediaIndex
          , o = e.startOfSegment
          , u = e.isSyncRequest
          , l = e.partIndex
          , c = e.forceTimestampOffset
          , p = e.getMediaInfoForTime
          , g = n.segments[s]
          , y = typeof l == "number" && g.parts[l]
          , S = {
            requestId: "segment-loader-" + Math.random(),
            uri: y && y.resolvedUri || g.resolvedUri,
            mediaIndex: s,
            partIndex: y ? l : null,
            isSyncRequest: u,
            startOfSegment: o,
            playlist: n,
            bytes: null,
            encryptedBytes: null,
            timestampOffset: null,
            timeline: g.timeline,
            duration: y && y.duration || g.duration,
            segment: g,
            part: y,
            byteLength: 0,
            transmuxer: this.transmuxer_,
            getMediaInfoForTime: p
        }
          , x = typeof c < "u" ? c : this.isPendingTimestampOffset_;
        S.timestampOffset = this.timestampOffsetForSegment_({
            segmentTimeline: g.timeline,
            currentTimeline: this.currentTimeline_,
            startOfSegment: o,
            buffered: this.buffered_(),
            overrideCheck: x
        });
        var b = ll(this.sourceUpdater_.audioBuffered());
        return typeof b == "number" && (S.audioAppendStart = b - this.sourceUpdater_.audioTimestampOffset()),
        this.sourceUpdater_.videoBuffered().length && (S.gopsToAlignWith = E_(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_)),
        S
    }
    ,
    r.timestampOffsetForSegment_ = function(e) {
        return O_(e)
    }
    ,
    r.earlyAbortWhenNeeded_ = function(e) {
        if (!(this.vhs_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) && !(Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)) {
            var n = this.currentTime_()
              , s = e.bandwidth
              , o = this.pendingSegment_.duration
              , u = We.estimateSegmentRequestTime(o, s, this.playlist_, e.bytesReceived)
              , l = n0(this.buffered_(), n, this.vhs_.tech_.playbackRate()) - 1;
            if (!(u <= l)) {
                var c = m_({
                    master: this.vhs_.playlists.master,
                    currentTime: n,
                    bandwidth: s,
                    duration: this.duration_(),
                    segmentDuration: o,
                    timeUntilRebuffer: l,
                    currentTimeline: this.currentTimeline_,
                    syncController: this.syncController_
                });
                if (c) {
                    var p = u - l
                      , g = p - c.rebufferingImpact
                      , y = .5;
                    l <= rr && (y = 1),
                    !(!c.playlist || c.playlist.uri === this.playlist_.uri || g < y) && (this.bandwidth = c.playlist.attributes.BANDWIDTH * Ee.BANDWIDTH_VARIANCE + 1,
                    this.trigger("earlyabort"))
                }
            }
        }
    }
    ,
    r.handleAbort_ = function(e) {
        this.logger_("Aborting " + un(e)),
        this.mediaRequestsAborted += 1
    }
    ,
    r.handleProgress_ = function(e, n) {
        this.earlyAbortWhenNeeded_(n.stats),
        !this.checkForAbort_(n.requestId) && this.trigger("progress")
    }
    ,
    r.handleTrackInfo_ = function(e, n) {
        this.earlyAbortWhenNeeded_(e.stats),
        !this.checkForAbort_(e.requestId) && (this.checkForIllegalMediaSwitch(n) || (n = n || {},
        k_(this.currentMediaInfo_, n) || (this.appendInitSegment_ = {
            audio: !0,
            video: !0
        },
        this.startingMediaInfo_ = n,
        this.currentMediaInfo_ = n,
        this.logger_("trackinfo update", n),
        this.trigger("trackinfo")),
        !this.checkForAbort_(e.requestId) && (this.pendingSegment_.trackInfo = n,
        this.hasEnoughInfoToAppend_() && this.processCallQueue_())))
    }
    ,
    r.handleTimingInfo_ = function(e, n, s, o) {
        if (this.earlyAbortWhenNeeded_(e.stats),
        !this.checkForAbort_(e.requestId)) {
            var u = this.pendingSegment_
              , l = Tl(n);
            u[l] = u[l] || {},
            u[l][s] = o,
            this.logger_("timinginfo: " + n + " - " + s + " - " + o),
            this.hasEnoughInfoToAppend_() && this.processCallQueue_()
        }
    }
    ,
    r.handleCaptions_ = function(e, n) {
        var s = this;
        if (this.earlyAbortWhenNeeded_(e.stats),
        !this.checkForAbort_(e.requestId)) {
            if (n.length === 0) {
                this.logger_("SegmentLoader received no captions from a caption event");
                return
            }
            var o = this.pendingSegment_;
            if (!o.hasAppendedData_) {
                this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, n));
                return
            }
            var u = this.sourceUpdater_.videoTimestampOffset() === null ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset()
              , l = {};
            n.forEach(function(c) {
                l[c.stream] = l[c.stream] || {
                    startTime: 1 / 0,
                    captions: [],
                    endTime: 0
                };
                var p = l[c.stream];
                p.startTime = Math.min(p.startTime, c.startTime + u),
                p.endTime = Math.max(p.endTime, c.endTime + u),
                p.captions.push(c)
            }),
            Object.keys(l).forEach(function(c) {
                var p = l[c]
                  , g = p.startTime
                  , y = p.endTime
                  , S = p.captions
                  , x = s.inbandTextTracks_;
                s.logger_("adding cues from " + g + " -> " + y + " for " + c),
                __(x, s.vhs_.tech_, c),
                ui(g, y, x[c]),
                y_({
                    captionArray: S,
                    inbandTextTracks: x,
                    timestampOffset: u
                })
            }),
            this.transmuxer_ && this.transmuxer_.postMessage({
                action: "clearParsedMp4Captions"
            })
        }
    }
    ,
    r.handleId3_ = function(e, n, s) {
        if (this.earlyAbortWhenNeeded_(e.stats),
        !this.checkForAbort_(e.requestId)) {
            var o = this.pendingSegment_;
            if (!o.hasAppendedData_) {
                this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, n, s));
                return
            }
            var u = this.sourceUpdater_.videoTimestampOffset() === null ? this.sourceUpdater_.audioTimestampOffset() : this.sourceUpdater_.videoTimestampOffset();
            x_(this.inbandTextTracks_, s, this.vhs_.tech_),
            b_({
                inbandTextTracks: this.inbandTextTracks_,
                metadataArray: n,
                timestampOffset: u,
                videoDuration: this.duration_()
            })
        }
    }
    ,
    r.processMetadataQueue_ = function() {
        this.metadataQueue_.id3.forEach(function(e) {
            return e()
        }),
        this.metadataQueue_.caption.forEach(function(e) {
            return e()
        }),
        this.metadataQueue_.id3 = [],
        this.metadataQueue_.caption = []
    }
    ,
    r.processCallQueue_ = function() {
        var e = this.callQueue_;
        this.callQueue_ = [],
        e.forEach(function(n) {
            return n()
        })
    }
    ,
    r.processLoadQueue_ = function() {
        var e = this.loadQueue_;
        this.loadQueue_ = [],
        e.forEach(function(n) {
            return n()
        })
    }
    ,
    r.hasEnoughInfoToLoad_ = function() {
        if (this.loaderType_ !== "audio")
            return !0;
        var e = this.pendingSegment_;
        return e ? this.currentMediaInfo_ ? !bl({
            timelineChangeController: this.timelineChangeController_,
            currentTimeline: this.currentTimeline_,
            segmentTimeline: e.timeline,
            loaderType: this.loaderType_,
            audioDisabled: this.audioDisabled_
        }) : !0 : !1
    }
    ,
    r.hasEnoughInfoToAppend_ = function() {
        if (!this.sourceUpdater_.ready() || this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_)
            return !1;
        var e = this.pendingSegment_;
        if (!e || !e.trackInfo)
            return !1;
        var n = this.currentMediaInfo_
          , s = n.hasAudio
          , o = n.hasVideo
          , u = n.isMuxed;
        return !(o && !e.videoTimingInfo || s && !this.audioDisabled_ && !u && !e.audioTimingInfo || bl({
            timelineChangeController: this.timelineChangeController_,
            currentTimeline: this.currentTimeline_,
            segmentTimeline: e.timeline,
            loaderType: this.loaderType_,
            audioDisabled: this.audioDisabled_
        }))
    }
    ,
    r.handleData_ = function(e, n) {
        if (this.earlyAbortWhenNeeded_(e.stats),
        !this.checkForAbort_(e.requestId)) {
            if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) {
                this.callQueue_.push(this.handleData_.bind(this, e, n));
                return
            }
            var s = this.pendingSegment_;
            if (this.setTimeMapping_(s.timeline),
            this.updateMediaSecondsLoaded_(s.segment),
            this.mediaSource_.readyState !== "closed") {
                if (e.map && (e.map = this.initSegmentForMap(e.map, !0),
                s.segment.map = e.map),
                e.key && this.segmentKey(e.key, !0),
                s.isFmp4 = e.isFmp4,
                s.timingInfo = s.timingInfo || {},
                s.isFmp4)
                    this.trigger("fmp4"),
                    s.timingInfo.start = s[Tl(n.type)].start;
                else {
                    var o = this.loaderType_ === "main" && this.currentMediaInfo_.hasVideo, u;
                    o && (u = s.videoTimingInfo.start),
                    s.timingInfo.start = this.trueSegmentStart_({
                        currentStart: s.timingInfo.start,
                        playlist: s.playlist,
                        mediaIndex: s.mediaIndex,
                        currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                        useVideoTimingInfo: o,
                        firstVideoFrameTimeForData: u,
                        videoTimingInfo: s.videoTimingInfo,
                        audioTimingInfo: s.audioTimingInfo
                    })
                }
                if (this.updateAppendInitSegmentStatus(s, n.type),
                this.updateSourceBufferTimestampOffset_(s),
                s.isSyncRequest) {
                    this.updateTimingInfoEnd_(s),
                    this.syncController_.saveSegmentTimingInfo({
                        segmentInfo: s,
                        shouldSaveTimelineMapping: this.loaderType_ === "main"
                    });
                    var l = this.chooseNextRequest_();
                    if (l.mediaIndex !== s.mediaIndex || l.partIndex !== s.partIndex) {
                        this.logger_("sync segment was incorrect, not appending");
                        return
                    }
                    this.logger_("sync segment was correct, appending")
                }
                s.hasAppendedData_ = !0,
                this.processMetadataQueue_(),
                this.appendData_(s, n)
            }
        }
    }
    ,
    r.updateAppendInitSegmentStatus = function(e, n) {
        this.loaderType_ === "main" && typeof e.timestampOffset == "number" && !e.changedTimestampOffset && (this.appendInitSegment_ = {
            audio: !0,
            video: !0
        }),
        this.playlistOfLastInitSegment_[n] !== e.playlist && (this.appendInitSegment_[n] = !0)
    }
    ,
    r.getInitSegmentAndUpdateState_ = function(e) {
        var n = e.type
          , s = e.initSegment
          , o = e.map
          , u = e.playlist;
        if (o) {
            var l = On(o);
            if (this.activeInitSegmentId_ === l)
                return null;
            s = this.initSegmentForMap(o, !0).bytes,
            this.activeInitSegmentId_ = l
        }
        return s && this.appendInitSegment_[n] ? (this.playlistOfLastInitSegment_[n] = u,
        this.appendInitSegment_[n] = !1,
        this.activeInitSegmentId_ = null,
        s) : null
    }
    ,
    r.handleQuotaExceededError_ = function(e, n) {
        var s = this
          , o = e.segmentInfo
          , u = e.type
          , l = e.bytes
          , c = this.sourceUpdater_.audioBuffered()
          , p = this.sourceUpdater_.videoBuffered();
        c.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + Yt(c).join(", ")),
        p.length > 1 && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + Yt(p).join(", "));
        var g = c.length ? c.start(0) : 0
          , y = c.length ? c.end(c.length - 1) : 0
          , S = p.length ? p.start(0) : 0
          , x = p.length ? p.end(p.length - 1) : 0;
        if (y - g <= ti && x - S <= ti) {
            this.logger_("On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. " + ("Appended byte length: " + l.byteLength + ", ") + ("audio buffer: " + Yt(c).join(", ") + ", ") + ("video buffer: " + Yt(p).join(", ") + ", ")),
            this.error({
                message: "Quota exceeded error with append of a single segment of content",
                excludeUntil: 1 / 0
            }),
            this.trigger("error");
            return
        }
        this.waitingOnRemove_ = !0,
        this.callQueue_.push(this.appendToSourceBuffer_.bind(this, {
            segmentInfo: o,
            type: u,
            bytes: l
        }));
        var b = this.currentTime_()
          , P = b - ti;
        this.logger_("On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to " + P),
        this.remove(0, P, function() {
            s.logger_("On QUOTA_EXCEEDED_ERR, retrying append in " + ti + "s"),
            s.waitingOnRemove_ = !1,
            s.quotaExceededErrorRetryTimeout_ = A.setTimeout(function() {
                s.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue"),
                s.quotaExceededErrorRetryTimeout_ = null,
                s.processCallQueue_()
            }, ti * 1e3)
        }, !0)
    }
    ,
    r.handleAppendError_ = function(e, n) {
        var s = e.segmentInfo
          , o = e.type
          , u = e.bytes;
        if (n) {
            if (n.code === pf) {
                this.handleQuotaExceededError_({
                    segmentInfo: s,
                    type: o,
                    bytes: u
                });
                return
            }
            this.logger_("Received non QUOTA_EXCEEDED_ERR on append", n),
            this.error(o + " append of " + u.length + "b failed for segment " + ("#" + s.mediaIndex + " in playlist " + s.playlist.id)),
            this.trigger("appenderror")
        }
    }
    ,
    r.appendToSourceBuffer_ = function(e) {
        var n = e.segmentInfo
          , s = e.type
          , o = e.initSegment
          , u = e.data
          , l = e.bytes;
        if (!l) {
            var c = [u]
              , p = u.byteLength;
            o && (c.unshift(o),
            p += o.byteLength),
            l = v_({
                bytes: p,
                segments: c
            })
        }
        this.sourceUpdater_.appendBuffer({
            segmentInfo: n,
            type: s,
            bytes: l
        }, this.handleAppendError_.bind(this, {
            segmentInfo: n,
            type: s,
            bytes: l
        }))
    }
    ,
    r.handleSegmentTimingInfo_ = function(e, n, s) {
        if (!(!this.pendingSegment_ || n !== this.pendingSegment_.requestId)) {
            var o = this.pendingSegment_.segment
              , u = e + "TimingInfo";
            o[u] || (o[u] = {}),
            o[u].transmuxerPrependedSeconds = s.prependedContentDuration || 0,
            o[u].transmuxedPresentationStart = s.start.presentation,
            o[u].transmuxedDecodeStart = s.start.decode,
            o[u].transmuxedPresentationEnd = s.end.presentation,
            o[u].transmuxedDecodeEnd = s.end.decode,
            o[u].baseMediaDecodeTime = s.baseMediaDecodeTime
        }
    }
    ,
    r.appendData_ = function(e, n) {
        var s = n.type
          , o = n.data;
        if (!(!o || !o.byteLength) && !(s === "audio" && this.audioDisabled_)) {
            var u = this.getInitSegmentAndUpdateState_({
                type: s,
                initSegment: n.initSegment,
                playlist: e.playlist,
                map: e.isFmp4 ? e.segment.map : null
            });
            this.appendToSourceBuffer_({
                segmentInfo: e,
                type: s,
                initSegment: u,
                data: o
            })
        }
    }
    ,
    r.loadSegment_ = function(e) {
        var n = this;
        if (this.state = "WAITING",
        this.pendingSegment_ = e,
        this.trimBackBuffer_(e),
        typeof e.timestampOffset == "number" && this.transmuxer_ && this.transmuxer_.postMessage({
            action: "clearAllMp4Captions"
        }),
        !this.hasEnoughInfoToLoad_()) {
            this.loadQueue_.push(function() {
                var s = rt({}, e, {
                    forceTimestampOffset: !0
                });
                rt(e, n.generateSegmentInfo_(s)),
                n.isPendingTimestampOffset_ = !1,
                n.updateTransmuxerAndRequestSegment_(e)
            });
            return
        }
        this.updateTransmuxerAndRequestSegment_(e)
    }
    ,
    r.updateTransmuxerAndRequestSegment_ = function(e) {
        var n = this;
        this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) && (this.gopBuffer_.length = 0,
        e.gopsToAlignWith = [],
        this.timeMapping_ = 0,
        this.transmuxer_.postMessage({
            action: "reset"
        }),
        this.transmuxer_.postMessage({
            action: "setTimestampOffset",
            timestampOffset: e.timestampOffset
        }));
        var s = this.createSimplifiedSegmentObj_(e)
          , o = this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex)
          , u = this.mediaIndex !== null
          , l = e.timeline !== this.currentTimeline_ && e.timeline > 0
          , c = o || u && l;
        this.logger_("Requesting " + un(e)),
        s.map && !s.map.bytes && (this.logger_("going to request init segment."),
        this.appendInitSegment_ = {
            video: !0,
            audio: !0
        }),
        e.abortRequests = l_({
            xhr: this.vhs_.xhr,
            xhrOptions: this.xhrOptions_,
            decryptionWorker: this.decrypter_,
            segment: s,
            abortFn: this.handleAbort_.bind(this, e),
            progressFn: this.handleProgress_.bind(this),
            trackInfoFn: this.handleTrackInfo_.bind(this),
            timingInfoFn: this.handleTimingInfo_.bind(this),
            videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", e.requestId),
            audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", e.requestId),
            captionsFn: this.handleCaptions_.bind(this),
            isEndOfTimeline: c,
            endedTimelineFn: function() {
                n.logger_("received endedtimeline callback")
            },
            id3Fn: this.handleId3_.bind(this),
            dataFn: this.handleData_.bind(this),
            doneFn: this.segmentRequestFinished_.bind(this)
        })
    }
    ,
    r.trimBackBuffer_ = function(e) {
        var n = D_(this.seekable_(), this.currentTime_(), this.playlist_.targetDuration || 10);
        n > 0 && this.remove(0, n)
    }
    ,
    r.createSimplifiedSegmentObj_ = function(e) {
        var n = e.segment
          , s = e.part
          , o = {
            resolvedUri: s ? s.resolvedUri : n.resolvedUri,
            byterange: s ? s.byterange : n.byterange,
            requestId: e.requestId,
            transmuxer: e.transmuxer,
            audioAppendStart: e.audioAppendStart,
            gopsToAlignWith: e.gopsToAlignWith,
            part: e.part
        }
          , u = e.playlist.segments[e.mediaIndex - 1];
        if (u && u.timeline === n.timeline && (u.videoTimingInfo ? o.baseStartTime = u.videoTimingInfo.transmuxedDecodeEnd : u.audioTimingInfo && (o.baseStartTime = u.audioTimingInfo.transmuxedDecodeEnd)),
        n.key) {
            var l = n.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
            o.key = this.segmentKey(n.key),
            o.key.iv = l
        }
        return n.map && (o.map = this.initSegmentForMap(n.map)),
        o
    }
    ,
    r.saveTransferStats_ = function(e) {
        this.mediaRequests += 1,
        e && (this.mediaBytesTransferred += e.bytesReceived,
        this.mediaTransferDuration += e.roundTripTime)
    }
    ,
    r.saveBandwidthRelatedStats_ = function(e, n) {
        if (this.pendingSegment_.byteLength = n.bytesReceived,
        e < on) {
            this.logger_("Ignoring segment's bandwidth because its duration of " + e + (" is less than the min to record " + on));
            return
        }
        this.bandwidth = n.bandwidth,
        this.roundTrip = n.roundTripTime
    }
    ,
    r.handleTimeout_ = function() {
        this.mediaRequestsTimedout += 1,
        this.bandwidth = 1,
        this.roundTrip = NaN,
        this.trigger("bandwidthupdate")
    }
    ,
    r.segmentRequestFinished_ = function(e, n, s) {
        if (this.callQueue_.length) {
            this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, n, s));
            return
        }
        if (this.saveTransferStats_(n.stats),
        !!this.pendingSegment_ && n.requestId === this.pendingSegment_.requestId) {
            if (e) {
                if (this.pendingSegment_ = null,
                this.state = "READY",
                e.code === gt.ABORTED)
                    return;
                if (this.pause(),
                e.code === gt.TIMEOUT) {
                    this.handleTimeout_();
                    return
                }
                this.mediaRequestsErrored += 1,
                this.error(e),
                this.trigger("error");
                return
            }
            var o = this.pendingSegment_;
            this.saveBandwidthRelatedStats_(o.duration, n.stats),
            o.endOfAllRequests = n.endOfAllRequests,
            s.gopInfo && (this.gopBuffer_ = C_(this.gopBuffer_, s.gopInfo, this.safeAppend_)),
            this.state = "APPENDING",
            this.trigger("appending"),
            this.waitForAppendsToComplete_(o)
        }
    }
    ,
    r.setTimeMapping_ = function(e) {
        var n = this.syncController_.mappingForTimeline(e);
        n !== null && (this.timeMapping_ = n)
    }
    ,
    r.updateMediaSecondsLoaded_ = function(e) {
        typeof e.start == "number" && typeof e.end == "number" ? this.mediaSecondsLoaded += e.end - e.start : this.mediaSecondsLoaded += e.duration
    }
    ,
    r.shouldUpdateTransmuxerTimestampOffset_ = function(e) {
        return e === null ? !1 : this.loaderType_ === "main" && e !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset()
    }
    ,
    r.trueSegmentStart_ = function(e) {
        var n = e.currentStart
          , s = e.playlist
          , o = e.mediaIndex
          , u = e.firstVideoFrameTimeForData
          , l = e.currentVideoTimestampOffset
          , c = e.useVideoTimingInfo
          , p = e.videoTimingInfo
          , g = e.audioTimingInfo;
        if (typeof n < "u")
            return n;
        if (!c)
            return g.start;
        var y = s.segments[o - 1];
        return o === 0 || !y || typeof y.start > "u" || y.end !== u + l ? u : p.start
    }
    ,
    r.waitForAppendsToComplete_ = function(e) {
        if (!this.currentMediaInfo_) {
            this.error({
                message: "No starting media returned, likely due to an unsupported media format.",
                blacklistDuration: 1 / 0
            }),
            this.trigger("error");
            return
        }
        var n = this.currentMediaInfo_
          , s = n.hasAudio
          , o = n.hasVideo
          , u = n.isMuxed
          , l = this.loaderType_ === "main" && o
          , c = !this.audioDisabled_ && s && !u;
        if (e.waitingOnAppends = 0,
        !e.hasAppendedData_) {
            !e.timingInfo && typeof e.timestampOffset == "number" && (this.isPendingTimestampOffset_ = !0),
            e.timingInfo = {
                start: 0
            },
            e.waitingOnAppends++,
            this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e),
            this.processMetadataQueue_()),
            this.checkAppendsDone_(e);
            return
        }
        l && e.waitingOnAppends++,
        c && e.waitingOnAppends++,
        l && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)),
        c && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))
    }
    ,
    r.checkAppendsDone_ = function(e) {
        this.checkForAbort_(e.requestId) || (e.waitingOnAppends--,
        e.waitingOnAppends === 0 && this.handleAppendsDone_())
    }
    ,
    r.checkForIllegalMediaSwitch = function(e) {
        var n = I_(this.loaderType_, this.currentMediaInfo_, e);
        return n ? (this.error({
            message: n,
            blacklistDuration: 1 / 0
        }),
        this.trigger("error"),
        !0) : !1
    }
    ,
    r.updateSourceBufferTimestampOffset_ = function(e) {
        if (!(e.timestampOffset === null || typeof e.timingInfo.start != "number" || e.changedTimestampOffset || this.loaderType_ !== "main")) {
            var n = !1;
            e.timestampOffset -= e.timingInfo.start,
            e.changedTimestampOffset = !0,
            e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset),
            n = !0),
            e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset),
            n = !0),
            n && this.trigger("timestampoffset")
        }
    }
    ,
    r.updateTimingInfoEnd_ = function(e) {
        e.timingInfo = e.timingInfo || {};
        var n = this.loaderType_ === "main" && this.currentMediaInfo_.hasVideo
          , s = n && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
        s && (e.timingInfo.end = typeof s.end == "number" ? s.end : s.start + e.duration)
    }
    ,
    r.handleAppendsDone_ = function() {
        if (this.pendingSegment_ && this.trigger("appendsdone"),
        !this.pendingSegment_) {
            this.state = "READY",
            this.paused() || this.monitorBuffer_();
            return
        }
        var e = this.pendingSegment_;
        this.updateTimingInfoEnd_(e),
        this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({
            segmentInfo: e,
            shouldSaveTimelineMapping: this.loaderType_ === "main"
        });
        var n = R_(e, this.sourceType_);
        if (n && (n.severity === "warn" ? I.log.warn(n.message) : this.logger_(n.message)),
        this.recordThroughput_(e),
        this.pendingSegment_ = null,
        this.state = "READY",
        e.isSyncRequest && (this.trigger("syncinfoupdate"),
        !e.hasAppendedData_)) {
            this.logger_("Throwing away un-appended sync request " + un(e));
            return
        }
        this.logger_("Appended " + un(e)),
        this.addSegmentMetadataCue_(e),
        this.fetchAtBuffer_ = !0,
        this.currentTimeline_ !== e.timeline && (this.timelineChangeController_.lastTimelineChange({
            type: this.loaderType_,
            from: this.currentTimeline_,
            to: e.timeline
        }),
        this.loaderType_ === "main" && !this.audioDisabled_ && this.timelineChangeController_.lastTimelineChange({
            type: "audio",
            from: this.currentTimeline_,
            to: e.timeline
        })),
        this.currentTimeline_ = e.timeline,
        this.trigger("syncinfoupdate");
        var s = e.segment;
        if (s.end && this.currentTime_() - s.end > e.playlist.targetDuration * 3) {
            this.resetEverything();
            return
        }
        var o = this.mediaIndex !== null;
        o && this.trigger("bandwidthupdate"),
        this.trigger("progress"),
        this.mediaIndex = e.mediaIndex,
        this.partIndex = e.partIndex,
        this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) && this.endOfStream(),
        this.trigger("appended"),
        e.hasAppendedData_ && this.mediaAppends++,
        this.paused() || this.monitorBuffer_()
    }
    ,
    r.recordThroughput_ = function(e) {
        if (e.duration < on) {
            this.logger_("Ignoring segment's throughput because its duration of " + e.duration + (" is less than the min to record " + on));
            return
        }
        var n = this.throughput.rate
          , s = Date.now() - e.endOfAllRequests + 1
          , o = Math.floor(e.byteLength / s * 8 * 1e3);
        this.throughput.rate += (o - n) / ++this.throughput.count
    }
    ,
    r.addSegmentMetadataCue_ = function(e) {
        if (this.segmentMetadataTrack_) {
            var n = e.segment
              , s = n.start
              , o = n.end;
            if (!(!yl(s) || !yl(o))) {
                ui(s, o, this.segmentMetadataTrack_);
                var u = A.WebKitDataCue || A.VTTCue
                  , l = {
                    custom: n.custom,
                    dateTimeObject: n.dateTimeObject,
                    dateTimeString: n.dateTimeString,
                    bandwidth: e.playlist.attributes.BANDWIDTH,
                    resolution: e.playlist.attributes.RESOLUTION,
                    codecs: e.playlist.attributes.CODECS,
                    byteLength: e.byteLength,
                    uri: e.uri,
                    timeline: e.timeline,
                    playlist: e.playlist.id,
                    start: s,
                    end: o
                }
                  , c = JSON.stringify(l)
                  , p = new u(s,o,c);
                p.value = l,
                this.segmentMetadataTrack_.addCue(p)
            }
        }
    }
    ,
    t
}(I.EventTarget);
function xt() {}
var mf = function(t) {
    return typeof t != "string" ? t : t.replace(/./, function(r) {
        return r.toUpperCase()
    })
}, M_ = ["video", "audio"], ms = function(t, r) {
    var i = r[t + "Buffer"];
    return i && i.updating || r.queuePending[t]
}, F_ = function(t, r) {
    for (var i = 0; i < r.length; i++) {
        var e = r[i];
        if (e.type === "mediaSource")
            return null;
        if (e.type === t)
            return i
    }
    return null
}, xo = function a(t, r) {
    if (r.queue.length !== 0) {
        var i = 0
          , e = r.queue[i];
        if (e.type === "mediaSource") {
            !r.updating() && r.mediaSource.readyState !== "closed" && (r.queue.shift(),
            e.action(r),
            e.doneFn && e.doneFn(),
            a("audio", r),
            a("video", r));
            return
        }
        if (t !== "mediaSource" && !(!r.ready() || r.mediaSource.readyState === "closed" || ms(t, r))) {
            if (e.type !== t) {
                if (i = F_(t, r.queue),
                i === null)
                    return;
                e = r.queue[i]
            }
            if (r.queue.splice(i, 1),
            r.queuePending[t] = e,
            e.action(t, r),
            !e.doneFn) {
                r.queuePending[t] = null,
                a(t, r);
                return
            }
        }
    }
}, gf = function(t, r) {
    var i = r[t + "Buffer"]
      , e = mf(t);
    i && (i.removeEventListener("updateend", r["on" + e + "UpdateEnd_"]),
    i.removeEventListener("error", r["on" + e + "Error_"]),
    r.codecs[t] = null,
    r[t + "Buffer"] = null)
}, pt = function(t, r) {
    return t && r && Array.prototype.indexOf.call(t.sourceBuffers, r) !== -1
}, Xe = {
    appendBuffer: function(t, r, i) {
        return function(e, n) {
            var s = n[e + "Buffer"];
            if (pt(n.mediaSource, s)) {
                n.logger_("Appending segment " + r.mediaIndex + "'s " + t.length + " bytes to " + e + "Buffer");
                try {
                    s.appendBuffer(t)
                } catch (o) {
                    n.logger_("Error with code " + o.code + " " + (o.code === pf ? "(QUOTA_EXCEEDED_ERR) " : "") + ("when appending segment " + r.mediaIndex + " to " + e + "Buffer")),
                    n.queuePending[e] = null,
                    i(o)
                }
            }
        }
    },
    remove: function(t, r) {
        return function(i, e) {
            var n = e[i + "Buffer"];
            if (pt(e.mediaSource, n)) {
                e.logger_("Removing " + t + " to " + r + " from " + i + "Buffer");
                try {
                    n.remove(t, r)
                } catch {
                    e.logger_("Remove " + t + " to " + r + " from " + i + "Buffer failed")
                }
            }
        }
    },
    timestampOffset: function(t) {
        return function(r, i) {
            var e = i[r + "Buffer"];
            pt(i.mediaSource, e) && (i.logger_("Setting " + r + "timestampOffset to " + t),
            e.timestampOffset = t)
        }
    },
    callback: function(t) {
        return function(r, i) {
            t()
        }
    },
    endOfStream: function(t) {
        return function(r) {
            if (r.mediaSource.readyState === "open") {
                r.logger_("Calling mediaSource endOfStream(" + (t || "") + ")");
                try {
                    r.mediaSource.endOfStream(t)
                } catch (i) {
                    I.log.warn("Failed to call media source endOfStream", i)
                }
            }
        }
    },
    duration: function(t) {
        return function(r) {
            r.logger_("Setting mediaSource duration to " + t);
            try {
                r.mediaSource.duration = t
            } catch (i) {
                I.log.warn("Failed to set media source duration", i)
            }
        }
    },
    abort: function() {
        return function(t, r) {
            if (r.mediaSource.readyState === "open") {
                var i = r[t + "Buffer"];
                if (pt(r.mediaSource, i)) {
                    r.logger_("calling abort on " + t + "Buffer");
                    try {
                        i.abort()
                    } catch (e) {
                        I.log.warn("Failed to abort on " + t + "Buffer", e)
                    }
                }
            }
        }
    },
    addSourceBuffer: function(t, r) {
        return function(i) {
            var e = mf(t)
              , n = pi(r);
            i.logger_("Adding " + t + "Buffer with codec " + r + " to mediaSource");
            var s = i.mediaSource.addSourceBuffer(n);
            s.addEventListener("updateend", i["on" + e + "UpdateEnd_"]),
            s.addEventListener("error", i["on" + e + "Error_"]),
            i.codecs[t] = r,
            i[t + "Buffer"] = s
        }
    },
    removeSourceBuffer: function(t) {
        return function(r) {
            var i = r[t + "Buffer"];
            if (gf(t, r),
            !!pt(r.mediaSource, i)) {
                r.logger_("Removing " + t + "Buffer with codec " + r.codecs[t] + " from mediaSource");
                try {
                    r.mediaSource.removeSourceBuffer(i)
                } catch (e) {
                    I.log.warn("Failed to removeSourceBuffer " + t + "Buffer", e)
                }
            }
        }
    },
    changeType: function(t) {
        return function(r, i) {
            var e = i[r + "Buffer"]
              , n = pi(t);
            pt(i.mediaSource, e) && i.codecs[r] !== t && (i.logger_("changing " + r + "Buffer codec from " + i.codecs[r] + " to " + t),
            e.changeType(n),
            i.codecs[r] = t)
        }
    }
}, Ye = function(t) {
    var r = t.type
      , i = t.sourceUpdater
      , e = t.action
      , n = t.doneFn
      , s = t.name;
    i.queue.push({
        type: r,
        action: e,
        doneFn: n,
        name: s
    }),
    xo(r, i)
}, Sl = function(t, r) {
    return function(i) {
        if (r.queuePending[t]) {
            var e = r.queuePending[t].doneFn;
            r.queuePending[t] = null,
            e && e(r[t + "Error_"])
        }
        xo(t, r)
    }
}, vf = function(a) {
    G(t, a);
    function t(i) {
        var e;
        return e = a.call(this) || this,
        e.mediaSource = i,
        e.sourceopenListener_ = function() {
            return xo("mediaSource", Y(e))
        }
        ,
        e.mediaSource.addEventListener("sourceopen", e.sourceopenListener_),
        e.logger_ = dt("SourceUpdater"),
        e.audioTimestampOffset_ = 0,
        e.videoTimestampOffset_ = 0,
        e.queue = [],
        e.queuePending = {
            audio: null,
            video: null
        },
        e.delayedAudioAppendQueue_ = [],
        e.videoAppendQueued_ = !1,
        e.codecs = {},
        e.onVideoUpdateEnd_ = Sl("video", Y(e)),
        e.onAudioUpdateEnd_ = Sl("audio", Y(e)),
        e.onVideoError_ = function(n) {
            e.videoError_ = n
        }
        ,
        e.onAudioError_ = function(n) {
            e.audioError_ = n
        }
        ,
        e.createdSourceBuffers_ = !1,
        e.initializedEme_ = !1,
        e.triggeredReady_ = !1,
        e
    }
    var r = t.prototype;
    return r.initializedEme = function() {
        this.initializedEme_ = !0,
        this.triggerReady()
    }
    ,
    r.hasCreatedSourceBuffers = function() {
        return this.createdSourceBuffers_
    }
    ,
    r.hasInitializedAnyEme = function() {
        return this.initializedEme_
    }
    ,
    r.ready = function() {
        return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme()
    }
    ,
    r.createSourceBuffers = function(e) {
        this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e),
        this.createdSourceBuffers_ = !0,
        this.trigger("createdsourcebuffers"),
        this.triggerReady())
    }
    ,
    r.triggerReady = function() {
        this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = !0,
        this.trigger("ready"))
    }
    ,
    r.addSourceBuffer = function(e, n) {
        Ye({
            type: "mediaSource",
            sourceUpdater: this,
            action: Xe.addSourceBuffer(e, n),
            name: "addSourceBuffer"
        })
    }
    ,
    r.abort = function(e) {
        Ye({
            type: e,
            sourceUpdater: this,
            action: Xe.abort(e),
            name: "abort"
        })
    }
    ,
    r.removeSourceBuffer = function(e) {
        if (!this.canRemoveSourceBuffer()) {
            I.log.error("removeSourceBuffer is not supported!");
            return
        }
        Ye({
            type: "mediaSource",
            sourceUpdater: this,
            action: Xe.removeSourceBuffer(e),
            name: "removeSourceBuffer"
        })
    }
    ,
    r.canRemoveSourceBuffer = function() {
        return !I.browser.IE_VERSION && !I.browser.IS_FIREFOX && A.MediaSource && A.MediaSource.prototype && typeof A.MediaSource.prototype.removeSourceBuffer == "function"
    }
    ,
    t.canChangeType = function() {
        return A.SourceBuffer && A.SourceBuffer.prototype && typeof A.SourceBuffer.prototype.changeType == "function"
    }
    ,
    r.canChangeType = function() {
        return this.constructor.canChangeType()
    }
    ,
    r.changeType = function(e, n) {
        if (!this.canChangeType()) {
            I.log.error("changeType is not supported!");
            return
        }
        Ye({
            type: e,
            sourceUpdater: this,
            action: Xe.changeType(n),
            name: "changeType"
        })
    }
    ,
    r.addOrChangeSourceBuffers = function(e) {
        var n = this;
        if (!e || typeof e != "object" || Object.keys(e).length === 0)
            throw new Error("Cannot addOrChangeSourceBuffers to undefined codecs");
        Object.keys(e).forEach(function(s) {
            var o = e[s];
            if (!n.hasCreatedSourceBuffers())
                return n.addSourceBuffer(s, o);
            n.canChangeType() && n.changeType(s, o)
        })
    }
    ,
    r.appendBuffer = function(e, n) {
        var s = this
          , o = e.segmentInfo
          , u = e.type
          , l = e.bytes;
        if (this.processedAppend_ = !0,
        u === "audio" && this.videoBuffer && !this.videoAppendQueued_) {
            this.delayedAudioAppendQueue_.push([e, n]),
            this.logger_("delayed audio append of " + l.length + " until video append");
            return
        }
        var c = n;
        if (Ye({
            type: u,
            sourceUpdater: this,
            action: Xe.appendBuffer(l, o || {
                mediaIndex: -1
            }, c),
            doneFn: n,
            name: "appendBuffer"
        }),
        u === "video") {
            if (this.videoAppendQueued_ = !0,
            !this.delayedAudioAppendQueue_.length)
                return;
            var p = this.delayedAudioAppendQueue_.slice();
            this.logger_("queuing delayed audio " + p.length + " appendBuffers"),
            this.delayedAudioAppendQueue_.length = 0,
            p.forEach(function(g) {
                s.appendBuffer.apply(s, g)
            })
        }
    }
    ,
    r.audioBuffered = function() {
        return pt(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered ? this.audioBuffer.buffered : I.createTimeRange()
    }
    ,
    r.videoBuffered = function() {
        return pt(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered ? this.videoBuffer.buffered : I.createTimeRange()
    }
    ,
    r.buffered = function() {
        var e = pt(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null
          , n = pt(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
        return n && !e ? this.audioBuffered() : e && !n ? this.videoBuffered() : i0(this.audioBuffered(), this.videoBuffered())
    }
    ,
    r.setDuration = function(e, n) {
        n === void 0 && (n = xt),
        Ye({
            type: "mediaSource",
            sourceUpdater: this,
            action: Xe.duration(e),
            name: "duration",
            doneFn: n
        })
    }
    ,
    r.endOfStream = function(e, n) {
        e === void 0 && (e = null),
        n === void 0 && (n = xt),
        typeof e != "string" && (e = void 0),
        Ye({
            type: "mediaSource",
            sourceUpdater: this,
            action: Xe.endOfStream(e),
            name: "endOfStream",
            doneFn: n
        })
    }
    ,
    r.removeAudio = function(e, n, s) {
        if (s === void 0 && (s = xt),
        !this.audioBuffered().length || this.audioBuffered().end(0) === 0) {
            s();
            return
        }
        Ye({
            type: "audio",
            sourceUpdater: this,
            action: Xe.remove(e, n),
            doneFn: s,
            name: "remove"
        })
    }
    ,
    r.removeVideo = function(e, n, s) {
        if (s === void 0 && (s = xt),
        !this.videoBuffered().length || this.videoBuffered().end(0) === 0) {
            s();
            return
        }
        Ye({
            type: "video",
            sourceUpdater: this,
            action: Xe.remove(e, n),
            doneFn: s,
            name: "remove"
        })
    }
    ,
    r.updating = function() {
        return !!(ms("audio", this) || ms("video", this))
    }
    ,
    r.audioTimestampOffset = function(e) {
        return typeof e < "u" && this.audioBuffer && this.audioTimestampOffset_ !== e && (Ye({
            type: "audio",
            sourceUpdater: this,
            action: Xe.timestampOffset(e),
            name: "timestampOffset"
        }),
        this.audioTimestampOffset_ = e),
        this.audioTimestampOffset_
    }
    ,
    r.videoTimestampOffset = function(e) {
        return typeof e < "u" && this.videoBuffer && this.videoTimestampOffset !== e && (Ye({
            type: "video",
            sourceUpdater: this,
            action: Xe.timestampOffset(e),
            name: "timestampOffset"
        }),
        this.videoTimestampOffset_ = e),
        this.videoTimestampOffset_
    }
    ,
    r.audioQueueCallback = function(e) {
        this.audioBuffer && Ye({
            type: "audio",
            sourceUpdater: this,
            action: Xe.callback(e),
            name: "callback"
        })
    }
    ,
    r.videoQueueCallback = function(e) {
        this.videoBuffer && Ye({
            type: "video",
            sourceUpdater: this,
            action: Xe.callback(e),
            name: "callback"
        })
    }
    ,
    r.dispose = function() {
        var e = this;
        this.trigger("dispose"),
        M_.forEach(function(n) {
            e.abort(n),
            e.canRemoveSourceBuffer() ? e.removeSourceBuffer(n) : e[n + "QueueCallback"](function() {
                return gf(n, e)
            })
        }),
        this.videoAppendQueued_ = !1,
        this.delayedAudioAppendQueue_.length = 0,
        this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_),
        this.off()
    }
    ,
    t
}(I.EventTarget), El = function(t) {
    return decodeURIComponent(escape(String.fromCharCode.apply(null, t)))
}, Cl = new Uint8Array(`

`.split("").map(function(a) {
    return a.charCodeAt(0)
})), N_ = function(a) {
    G(t, a);
    function t(i, e) {
        var n;
        return e === void 0 && (e = {}),
        n = a.call(this, i, e) || this,
        n.mediaSource_ = null,
        n.subtitlesTrack_ = null,
        n.loaderType_ = "subtitle",
        n.featuresNativeTextTracks_ = i.featuresNativeTextTracks,
        n.shouldSaveSegmentTimingInfo_ = !1,
        n
    }
    var r = t.prototype;
    return r.createTransmuxer_ = function() {
        return null
    }
    ,
    r.buffered_ = function() {
        if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues || !this.subtitlesTrack_.cues.length)
            return I.createTimeRanges();
        var e = this.subtitlesTrack_.cues
          , n = e[0].startTime
          , s = e[e.length - 1].startTime;
        return I.createTimeRanges([[n, s]])
    }
    ,
    r.initSegmentForMap = function(e, n) {
        if (n === void 0 && (n = !1),
        !e)
            return null;
        var s = On(e)
          , o = this.initSegments_[s];
        if (n && !o && e.bytes) {
            var u = Cl.byteLength + e.bytes.byteLength
              , l = new Uint8Array(u);
            l.set(e.bytes),
            l.set(Cl, e.bytes.byteLength),
            this.initSegments_[s] = o = {
                resolvedUri: e.resolvedUri,
                byterange: e.byterange,
                bytes: l
            }
        }
        return o || e
    }
    ,
    r.couldBeginLoading_ = function() {
        return this.playlist_ && this.subtitlesTrack_ && !this.paused()
    }
    ,
    r.init_ = function() {
        return this.state = "READY",
        this.resetEverything(),
        this.monitorBuffer_()
    }
    ,
    r.track = function(e) {
        return typeof e > "u" ? this.subtitlesTrack_ : (this.subtitlesTrack_ = e,
        this.state === "INIT" && this.couldBeginLoading_() && this.init_(),
        this.subtitlesTrack_)
    }
    ,
    r.remove = function(e, n) {
        ui(e, n, this.subtitlesTrack_)
    }
    ,
    r.fillBuffer_ = function() {
        var e = this
          , n = this.chooseNextRequest_();
        if (n) {
            if (this.syncController_.timestampOffsetForTimeline(n.timeline) === null) {
                var s = function() {
                    e.state = "READY",
                    e.paused() || e.monitorBuffer_()
                };
                this.syncController_.one("timestampoffset", s),
                this.state = "WAITING_ON_TIMELINE";
                return
            }
            this.loadSegment_(n)
        }
    }
    ,
    r.timestampOffsetForSegment_ = function() {
        return null
    }
    ,
    r.chooseNextRequest_ = function() {
        return this.skipEmptySegments_(a.prototype.chooseNextRequest_.call(this))
    }
    ,
    r.skipEmptySegments_ = function(e) {
        for (; e && e.segment.empty; ) {
            if (e.mediaIndex + 1 >= e.playlist.segments.length) {
                e = null;
                break
            }
            e = this.generateSegmentInfo_({
                playlist: e.playlist,
                mediaIndex: e.mediaIndex + 1,
                startOfSegment: e.startOfSegment + e.duration,
                isSyncRequest: e.isSyncRequest
            })
        }
        return e
    }
    ,
    r.stopForError = function(e) {
        this.error(e),
        this.state = "READY",
        this.pause(),
        this.trigger("error")
    }
    ,
    r.segmentRequestFinished_ = function(e, n, s) {
        var o = this;
        if (!this.subtitlesTrack_) {
            this.state = "READY";
            return
        }
        if (this.saveTransferStats_(n.stats),
        !this.pendingSegment_) {
            this.state = "READY",
            this.mediaRequestsAborted += 1;
            return
        }
        if (e) {
            e.code === gt.TIMEOUT && this.handleTimeout_(),
            e.code === gt.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1,
            this.stopForError(e);
            return
        }
        var u = this.pendingSegment_;
        this.saveBandwidthRelatedStats_(u.duration, n.stats),
        this.state = "APPENDING",
        this.trigger("appending");
        var l = u.segment;
        if (l.map && (l.map.bytes = n.map.bytes),
        u.bytes = n.bytes,
        typeof A.WebVTT != "function" && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
            var c, p = function() {
                o.subtitlesTrack_.tech_.off("vttjsloaded", c),
                o.stopForError({
                    message: "Error loading vtt.js"
                })
            };
            c = function() {
                o.subtitlesTrack_.tech_.off("vttjserror", p),
                o.segmentRequestFinished_(e, n, s)
            }
            ,
            this.state = "WAITING_ON_VTTJS",
            this.subtitlesTrack_.tech_.one("vttjsloaded", c),
            this.subtitlesTrack_.tech_.one("vttjserror", p);
            return
        }
        l.requested = !0;
        try {
            this.parseVTTCues_(u)
        } catch (g) {
            this.stopForError({
                message: g.message
            });
            return
        }
        if (this.updateTimeMapping_(u, this.syncController_.timelines[u.timeline], this.playlist_),
        u.cues.length ? u.timingInfo = {
            start: u.cues[0].startTime,
            end: u.cues[u.cues.length - 1].endTime
        } : u.timingInfo = {
            start: u.startOfSegment,
            end: u.startOfSegment + u.duration
        },
        u.isSyncRequest) {
            this.trigger("syncinfoupdate"),
            this.pendingSegment_ = null,
            this.state = "READY";
            return
        }
        u.byteLength = u.bytes.byteLength,
        this.mediaSecondsLoaded += l.duration,
        u.cues.forEach(function(g) {
            o.subtitlesTrack_.addCue(o.featuresNativeTextTracks_ ? new A.VTTCue(g.startTime,g.endTime,g.text) : g)
        }),
        S_(this.subtitlesTrack_),
        this.handleAppendsDone_()
    }
    ,
    r.handleData_ = function() {}
    ,
    r.updateTimingInfoEnd_ = function() {}
    ,
    r.parseVTTCues_ = function(e) {
        var n, s = !1;
        typeof A.TextDecoder == "function" ? n = new A.TextDecoder("utf8") : (n = A.WebVTT.StringDecoder(),
        s = !0);
        var o = new A.WebVTT.Parser(A,A.vttjs,n);
        if (e.cues = [],
        e.timestampmap = {
            MPEGTS: 0,
            LOCAL: 0
        },
        o.oncue = e.cues.push.bind(e.cues),
        o.ontimestampmap = function(c) {
            e.timestampmap = c
        }
        ,
        o.onparsingerror = function(c) {
            I.log.warn("Error encountered when parsing cues: " + c.message)
        }
        ,
        e.segment.map) {
            var u = e.segment.map.bytes;
            s && (u = El(u)),
            o.parse(u)
        }
        var l = e.bytes;
        s && (l = El(l)),
        o.parse(l),
        o.flush()
    }
    ,
    r.updateTimeMapping_ = function(e, n, s) {
        var o = e.segment;
        if (n) {
            if (!e.cues.length) {
                o.empty = !0;
                return
            }
            var u = e.timestampmap
              , l = u.MPEGTS / Tn.ONE_SECOND_IN_TS - u.LOCAL + n.mapping;
            if (e.cues.forEach(function(g) {
                g.startTime += l,
                g.endTime += l
            }),
            !s.syncInfo) {
                var c = e.cues[0].startTime
                  , p = e.cues[e.cues.length - 1].startTime;
                s.syncInfo = {
                    mediaSequence: s.mediaSequence + e.mediaIndex,
                    time: Math.min(c, p - o.duration)
                }
            }
        }
    }
    ,
    t
}(ps), U_ = function(t, r) {
    for (var i = t.cues, e = 0; e < i.length; e++) {
        var n = i[e];
        if (r >= n.adStartTime && r <= n.adEndTime)
            return n
    }
    return null
}, B_ = function(t, r, i) {
    if (i === void 0 && (i = 0),
    !!t.segments)
        for (var e = i, n, s = 0; s < t.segments.length; s++) {
            var o = t.segments[s];
            if (n || (n = U_(r, e + o.duration / 2)),
            n) {
                if ("cueIn"in o) {
                    n.endTime = e,
                    n.adEndTime = e,
                    e += o.duration,
                    n = null;
                    continue
                }
                if (e < n.endTime) {
                    e += o.duration;
                    continue
                }
                n.endTime += o.duration
            } else if ("cueOut"in o && (n = new A.VTTCue(e,e + o.duration,o.cueOut),
            n.adStartTime = e,
            n.adEndTime = e + parseFloat(o.cueOut),
            r.addCue(n)),
            "cueOutCont"in o) {
                var u = o.cueOutCont.split("/").map(parseFloat)
                  , l = u[0]
                  , c = u[1];
                n = new A.VTTCue(e,e + o.duration,""),
                n.adStartTime = e - l,
                n.adEndTime = n.adStartTime + c,
                r.addCue(n)
            }
            e += o.duration
        }
}, wl = [{
    name: "VOD",
    run: function(t, r, i, e, n) {
        if (i !== 1 / 0) {
            var s = {
                time: 0,
                segmentIndex: 0,
                partIndex: null
            };
            return s
        }
        return null
    }
}, {
    name: "ProgramDateTime",
    run: function(t, r, i, e, n) {
        if (!Object.keys(t.timelineToDatetimeMappings).length)
            return null;
        var s = null
          , o = null
          , u = os(r);
        n = n || 0;
        for (var l = 0; l < u.length; l++) {
            var c = r.endList || n === 0 ? l : u.length - (l + 1)
              , p = u[c]
              , g = p.segment
              , y = t.timelineToDatetimeMappings[g.timeline];
            if (y && g.dateTimeObject) {
                var S = g.dateTimeObject.getTime() / 1e3
                  , x = S + y;
                if (g.parts && typeof p.partIndex == "number")
                    for (var b = 0; b < p.partIndex; b++)
                        x += g.parts[b].duration;
                var P = Math.abs(n - x);
                if (o !== null && (P === 0 || o < P))
                    break;
                o = P,
                s = {
                    time: x,
                    segmentIndex: p.segmentIndex,
                    partIndex: p.partIndex
                }
            }
        }
        return s
    }
}, {
    name: "Segment",
    run: function(t, r, i, e, n) {
        var s = null
          , o = null;
        n = n || 0;
        for (var u = os(r), l = 0; l < u.length; l++) {
            var c = r.endList || n === 0 ? l : u.length - (l + 1)
              , p = u[c]
              , g = p.segment
              , y = p.part && p.part.start || g && g.start;
            if (g.timeline === e && typeof y < "u") {
                var S = Math.abs(n - y);
                if (o !== null && o < S)
                    break;
                (!s || o === null || o >= S) && (o = S,
                s = {
                    time: y,
                    segmentIndex: p.segmentIndex,
                    partIndex: p.partIndex
                })
            }
        }
        return s
    }
}, {
    name: "Discontinuity",
    run: function(t, r, i, e, n) {
        var s = null;
        if (n = n || 0,
        r.discontinuityStarts && r.discontinuityStarts.length)
            for (var o = null, u = 0; u < r.discontinuityStarts.length; u++) {
                var l = r.discontinuityStarts[u]
                  , c = r.discontinuitySequence + u + 1
                  , p = t.discontinuities[c];
                if (p) {
                    var g = Math.abs(n - p.time);
                    if (o !== null && o < g)
                        break;
                    (!s || o === null || o >= g) && (o = g,
                    s = {
                        time: p.time,
                        segmentIndex: l,
                        partIndex: null
                    })
                }
            }
        return s
    }
}, {
    name: "Playlist",
    run: function(t, r, i, e, n) {
        if (r.syncInfo) {
            var s = {
                time: r.syncInfo.time,
                segmentIndex: r.syncInfo.mediaSequence - r.mediaSequence,
                partIndex: null
            };
            return s
        }
        return null
    }
}], H_ = function(a) {
    G(t, a);
    function t(i) {
        var e;
        return e = a.call(this) || this,
        e.timelines = [],
        e.discontinuities = [],
        e.timelineToDatetimeMappings = {},
        e.logger_ = dt("SyncController"),
        e
    }
    var r = t.prototype;
    return r.getSyncPoint = function(e, n, s, o) {
        var u = this.runStrategies_(e, n, s, o);
        return u.length ? this.selectSyncPoint_(u, {
            key: "time",
            value: o
        }) : null
    }
    ,
    r.getExpiredTime = function(e, n) {
        if (!e || !e.segments)
            return null;
        var s = this.runStrategies_(e, n, e.discontinuitySequence, 0);
        if (!s.length)
            return null;
        var o = this.selectSyncPoint_(s, {
            key: "segmentIndex",
            value: 0
        });
        return o.segmentIndex > 0 && (o.time *= -1),
        Math.abs(o.time + ci({
            defaultDuration: e.targetDuration,
            durationList: e.segments,
            startIndex: o.segmentIndex,
            endIndex: 0
        }))
    }
    ,
    r.runStrategies_ = function(e, n, s, o) {
        for (var u = [], l = 0; l < wl.length; l++) {
            var c = wl[l]
              , p = c.run(this, e, n, s, o);
            p && (p.strategy = c.name,
            u.push({
                strategy: c.name,
                syncPoint: p
            }))
        }
        return u
    }
    ,
    r.selectSyncPoint_ = function(e, n) {
        for (var s = e[0].syncPoint, o = Math.abs(e[0].syncPoint[n.key] - n.value), u = e[0].strategy, l = 1; l < e.length; l++) {
            var c = Math.abs(e[l].syncPoint[n.key] - n.value);
            c < o && (o = c,
            s = e[l].syncPoint,
            u = e[l].strategy)
        }
        return this.logger_("syncPoint for [" + n.key + ": " + n.value + "] chosen with strategy" + (" [" + u + "]: [time:" + s.time + ",") + (" segmentIndex:" + s.segmentIndex) + (typeof s.partIndex == "number" ? ",partIndex:" + s.partIndex : "") + "]"),
        s
    }
    ,
    r.saveExpiredSegmentInfo = function(e, n) {
        for (var s = n.mediaSequence - e.mediaSequence, o = s - 1; o >= 0; o--) {
            var u = e.segments[o];
            if (u && typeof u.start < "u") {
                n.syncInfo = {
                    mediaSequence: e.mediaSequence + o,
                    time: u.start
                },
                this.logger_("playlist refresh sync: [time:" + n.syncInfo.time + "," + (" mediaSequence: " + n.syncInfo.mediaSequence + "]")),
                this.trigger("syncinfoupdate");
                break
            }
        }
    }
    ,
    r.setDateTimeMappingForStart = function(e) {
        if (this.timelineToDatetimeMappings = {},
        e.segments && e.segments.length && e.segments[0].dateTimeObject) {
            var n = e.segments[0]
              , s = n.dateTimeObject.getTime() / 1e3;
            this.timelineToDatetimeMappings[n.timeline] = -s
        }
    }
    ,
    r.saveSegmentTimingInfo = function(e) {
        var n = e.segmentInfo
          , s = e.shouldSaveTimelineMapping
          , o = this.calculateSegmentTimeMapping_(n, n.timingInfo, s)
          , u = n.segment;
        o && (this.saveDiscontinuitySyncInfo_(n),
        n.playlist.syncInfo || (n.playlist.syncInfo = {
            mediaSequence: n.playlist.mediaSequence + n.mediaIndex,
            time: u.start
        }));
        var l = u.dateTimeObject;
        u.discontinuity && s && l && (this.timelineToDatetimeMappings[u.timeline] = -(l.getTime() / 1e3))
    }
    ,
    r.timestampOffsetForTimeline = function(e) {
        return typeof this.timelines[e] > "u" ? null : this.timelines[e].time
    }
    ,
    r.mappingForTimeline = function(e) {
        return typeof this.timelines[e] > "u" ? null : this.timelines[e].mapping
    }
    ,
    r.calculateSegmentTimeMapping_ = function(e, n, s) {
        var o = e.segment, u = e.part, l = this.timelines[e.timeline], c, p;
        if (typeof e.timestampOffset == "number")
            l = {
                time: e.startOfSegment,
                mapping: e.startOfSegment - n.start
            },
            s && (this.timelines[e.timeline] = l,
            this.trigger("timestampoffset"),
            this.logger_("time mapping for timeline " + e.timeline + ": " + ("[time: " + l.time + "] [mapping: " + l.mapping + "]"))),
            c = e.startOfSegment,
            p = n.end + l.mapping;
        else if (l)
            c = n.start + l.mapping,
            p = n.end + l.mapping;
        else
            return !1;
        return u && (u.start = c,
        u.end = p),
        (!o.start || c < o.start) && (o.start = c),
        o.end = p,
        !0
    }
    ,
    r.saveDiscontinuitySyncInfo_ = function(e) {
        var n = e.playlist
          , s = e.segment;
        if (s.discontinuity)
            this.discontinuities[s.timeline] = {
                time: s.start,
                accuracy: 0
            };
        else if (n.discontinuityStarts && n.discontinuityStarts.length)
            for (var o = 0; o < n.discontinuityStarts.length; o++) {
                var u = n.discontinuityStarts[o]
                  , l = n.discontinuitySequence + o + 1
                  , c = u - e.mediaIndex
                  , p = Math.abs(c);
                if (!this.discontinuities[l] || this.discontinuities[l].accuracy > p) {
                    var g = void 0;
                    c < 0 ? g = s.start - ci({
                        defaultDuration: n.targetDuration,
                        durationList: n.segments,
                        startIndex: e.mediaIndex,
                        endIndex: u
                    }) : g = s.end + ci({
                        defaultDuration: n.targetDuration,
                        durationList: n.segments,
                        startIndex: e.mediaIndex + 1,
                        endIndex: u
                    }),
                    this.discontinuities[l] = {
                        time: g,
                        accuracy: p
                    }
                }
            }
    }
    ,
    r.dispose = function() {
        this.trigger("dispose"),
        this.off()
    }
    ,
    t
}(I.EventTarget), j_ = function(a) {
    G(t, a);
    function t() {
        var i;
        return i = a.call(this) || this,
        i.pendingTimelineChanges_ = {},
        i.lastTimelineChanges_ = {},
        i
    }
    var r = t.prototype;
    return r.clearPendingTimelineChange = function(e) {
        this.pendingTimelineChanges_[e] = null,
        this.trigger("pendingtimelinechange")
    }
    ,
    r.pendingTimelineChange = function(e) {
        var n = e.type
          , s = e.from
          , o = e.to;
        return typeof s == "number" && typeof o == "number" && (this.pendingTimelineChanges_[n] = {
            type: n,
            from: s,
            to: o
        },
        this.trigger("pendingtimelinechange")),
        this.pendingTimelineChanges_[n]
    }
    ,
    r.lastTimelineChange = function(e) {
        var n = e.type
          , s = e.from
          , o = e.to;
        return typeof s == "number" && typeof o == "number" && (this.lastTimelineChanges_[n] = {
            type: n,
            from: s,
            to: o
        },
        delete this.pendingTimelineChanges_[n],
        this.trigger("timelinechange")),
        this.lastTimelineChanges_[n]
    }
    ,
    r.dispose = function() {
        this.trigger("dispose"),
        this.pendingTimelineChanges_ = {},
        this.lastTimelineChanges_ = {},
        this.off()
    }
    ,
    t
}(I.EventTarget), V_ = rf(nf(function() {
    function a(x, b, P) {
        return P = {
            path: b,
            exports: {},
            require: function(L, R) {
                return t(L, R ?? P.path)
            }
        },
        x(P, P.exports),
        P.exports
    }
    function t() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
    }
    var r = a(function(x) {
        function b(D, L) {
            for (var R = 0; R < L.length; R++) {
                var F = L[R];
                F.enumerable = F.enumerable || !1,
                F.configurable = !0,
                "value"in F && (F.writable = !0),
                Object.defineProperty(D, F.key, F)
            }
        }
        function P(D, L, R) {
            return L && b(D.prototype, L),
            R && b(D, R),
            D
        }
        x.exports = P,
        x.exports.default = x.exports,
        x.exports.__esModule = !0
    })
      , i = a(function(x) {
        function b(P, D) {
            return x.exports = b = Object.setPrototypeOf || function(R, F) {
                return R.__proto__ = F,
                R
            }
            ,
            x.exports.default = x.exports,
            x.exports.__esModule = !0,
            b(P, D)
        }
        x.exports = b,
        x.exports.default = x.exports,
        x.exports.__esModule = !0
    })
      , e = a(function(x) {
        function b(P, D) {
            P.prototype = Object.create(D.prototype),
            P.prototype.constructor = P,
            i(P, D)
        }
        x.exports = b,
        x.exports.default = x.exports,
        x.exports.__esModule = !0
    })
      , n = function() {
        function x() {
            this.listeners = {}
        }
        var b = x.prototype;
        return b.on = function(D, L) {
            this.listeners[D] || (this.listeners[D] = []),
            this.listeners[D].push(L)
        }
        ,
        b.off = function(D, L) {
            if (!this.listeners[D])
                return !1;
            var R = this.listeners[D].indexOf(L);
            return this.listeners[D] = this.listeners[D].slice(0),
            this.listeners[D].splice(R, 1),
            R > -1
        }
        ,
        b.trigger = function(D) {
            var L = this.listeners[D];
            if (L)
                if (arguments.length === 2)
                    for (var R = L.length, F = 0; F < R; ++F)
                        L[F].call(this, arguments[1]);
                else
                    for (var j = Array.prototype.slice.call(arguments, 1), B = L.length, M = 0; M < B; ++M)
                        L[M].apply(this, j)
        }
        ,
        b.dispose = function() {
            this.listeners = {}
        }
        ,
        b.pipe = function(D) {
            this.on("data", function(L) {
                D.push(L)
            })
        }
        ,
        x
    }();
    /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */
    function s(x) {
        return x.subarray(0, x.byteLength - x[x.byteLength - 1])
    }
    /*! @name aes-decrypter @version 3.1.2 @license Apache-2.0 */
    var o = function() {
        var b = [[[], [], [], [], []], [[], [], [], [], []]], P = b[0], D = b[1], L = P[4], R = D[4], F, j, B, M = [], H = [], ee, J, me, le, be, te;
        for (F = 0; F < 256; F++)
            H[(M[F] = F << 1 ^ (F >> 7) * 283) ^ F] = F;
        for (j = B = 0; !L[j]; j ^= ee || 1,
        B = H[B] || 1)
            for (le = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4,
            le = le >> 8 ^ le & 255 ^ 99,
            L[j] = le,
            R[le] = j,
            me = M[J = M[ee = M[j]]],
            te = me * 16843009 ^ J * 65537 ^ ee * 257 ^ j * 16843008,
            be = M[le] * 257 ^ le * 16843008,
            F = 0; F < 4; F++)
                P[F][j] = be = be << 24 ^ be >>> 8,
                D[F][le] = te = te << 24 ^ te >>> 8;
        for (F = 0; F < 5; F++)
            P[F] = P[F].slice(0),
            D[F] = D[F].slice(0);
        return b
    }
      , u = null
      , l = function() {
        function x(P) {
            u || (u = o()),
            this._tables = [[u[0][0].slice(), u[0][1].slice(), u[0][2].slice(), u[0][3].slice(), u[0][4].slice()], [u[1][0].slice(), u[1][1].slice(), u[1][2].slice(), u[1][3].slice(), u[1][4].slice()]];
            var D, L, R, F = this._tables[0][4], j = this._tables[1], B = P.length, M = 1;
            if (B !== 4 && B !== 6 && B !== 8)
                throw new Error("Invalid aes key size");
            var H = P.slice(0)
              , ee = [];
            for (this._key = [H, ee],
            D = B; D < 4 * B + 28; D++)
                R = H[D - 1],
                (D % B === 0 || B === 8 && D % B === 4) && (R = F[R >>> 24] << 24 ^ F[R >> 16 & 255] << 16 ^ F[R >> 8 & 255] << 8 ^ F[R & 255],
                D % B === 0 && (R = R << 8 ^ R >>> 24 ^ M << 24,
                M = M << 1 ^ (M >> 7) * 283)),
                H[D] = H[D - B] ^ R;
            for (L = 0; D; L++,
            D--)
                R = H[L & 3 ? D : D - 4],
                D <= 4 || L < 4 ? ee[L] = R : ee[L] = j[0][F[R >>> 24]] ^ j[1][F[R >> 16 & 255]] ^ j[2][F[R >> 8 & 255]] ^ j[3][F[R & 255]]
        }
        var b = x.prototype;
        return b.decrypt = function(D, L, R, F, j, B) {
            var M = this._key[1], H = D ^ M[0], ee = F ^ M[1], J = R ^ M[2], me = L ^ M[3], le, be, te, ae = M.length / 4 - 2, se, $e = 4, Ze = this._tables[1], Bt = Ze[0], Ht = Ze[1], jt = Ze[2], ct = Ze[3], ar = Ze[4];
            for (se = 0; se < ae; se++)
                le = Bt[H >>> 24] ^ Ht[ee >> 16 & 255] ^ jt[J >> 8 & 255] ^ ct[me & 255] ^ M[$e],
                be = Bt[ee >>> 24] ^ Ht[J >> 16 & 255] ^ jt[me >> 8 & 255] ^ ct[H & 255] ^ M[$e + 1],
                te = Bt[J >>> 24] ^ Ht[me >> 16 & 255] ^ jt[H >> 8 & 255] ^ ct[ee & 255] ^ M[$e + 2],
                me = Bt[me >>> 24] ^ Ht[H >> 16 & 255] ^ jt[ee >> 8 & 255] ^ ct[J & 255] ^ M[$e + 3],
                $e += 4,
                H = le,
                ee = be,
                J = te;
            for (se = 0; se < 4; se++)
                j[(3 & -se) + B] = ar[H >>> 24] << 24 ^ ar[ee >> 16 & 255] << 16 ^ ar[J >> 8 & 255] << 8 ^ ar[me & 255] ^ M[$e++],
                le = H,
                H = ee,
                ee = J,
                J = me,
                me = le
        }
        ,
        x
    }()
      , c = function(x) {
        e(b, x);
        function b() {
            var D;
            return D = x.call(this, n) || this,
            D.jobs = [],
            D.delay = 1,
            D.timeout_ = null,
            D
        }
        var P = b.prototype;
        return P.processJob_ = function() {
            this.jobs.shift()(),
            this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
        }
        ,
        P.push = function(L) {
            this.jobs.push(L),
            this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
        }
        ,
        b
    }(n)
      , p = function(b) {
        return b << 24 | (b & 65280) << 8 | (b & 16711680) >> 8 | b >>> 24
    }
      , g = function(b, P, D) {
        var L = new Int32Array(b.buffer,b.byteOffset,b.byteLength >> 2), R = new l(Array.prototype.slice.call(P)), F = new Uint8Array(b.byteLength), j = new Int32Array(F.buffer), B, M, H, ee, J, me, le, be, te;
        for (B = D[0],
        M = D[1],
        H = D[2],
        ee = D[3],
        te = 0; te < L.length; te += 4)
            J = p(L[te]),
            me = p(L[te + 1]),
            le = p(L[te + 2]),
            be = p(L[te + 3]),
            R.decrypt(J, me, le, be, j, te),
            j[te] = p(j[te] ^ B),
            j[te + 1] = p(j[te + 1] ^ M),
            j[te + 2] = p(j[te + 2] ^ H),
            j[te + 3] = p(j[te + 3] ^ ee),
            B = J,
            M = me,
            H = le,
            ee = be;
        return F
    }
      , y = function() {
        function x(P, D, L, R) {
            var F = x.STEP
              , j = new Int32Array(P.buffer)
              , B = new Uint8Array(P.byteLength)
              , M = 0;
            for (this.asyncStream_ = new c,
            this.asyncStream_.push(this.decryptChunk_(j.subarray(M, M + F), D, L, B)),
            M = F; M < j.length; M += F)
                L = new Uint32Array([p(j[M - 4]), p(j[M - 3]), p(j[M - 2]), p(j[M - 1])]),
                this.asyncStream_.push(this.decryptChunk_(j.subarray(M, M + F), D, L, B));
            this.asyncStream_.push(function() {
                R(null, s(B))
            })
        }
        var b = x.prototype;
        return b.decryptChunk_ = function(D, L, R, F) {
            return function() {
                var j = g(D, L, R);
                F.set(j, D.byteOffset)
            }
        }
        ,
        r(x, null, [{
            key: "STEP",
            get: function() {
                return 32e3
            }
        }]),
        x
    }()
      , S = function(b) {
        var P = {};
        return Object.keys(b).forEach(function(D) {
            var L = b[D];
            ArrayBuffer.isView(L) ? P[D] = {
                bytes: L.buffer,
                byteOffset: L.byteOffset,
                byteLength: L.byteLength
            } : P[D] = L
        }),
        P
    };
    self.onmessage = function(x) {
        var b = x.data
          , P = new Uint8Array(b.encrypted.bytes,b.encrypted.byteOffset,b.encrypted.byteLength)
          , D = new Uint32Array(b.key.bytes,b.key.byteOffset,b.key.byteLength / 4)
          , L = new Uint32Array(b.iv.bytes,b.iv.byteOffset,b.iv.byteLength / 4);
        new y(P,D,L,function(R, F) {
            self.postMessage(S({
                source: b.source,
                decrypted: F
            }), [F.buffer])
        }
        )
    }
})), W_ = tf(V_), G_ = function(t) {
    var r = t.default ? "main" : "alternative";
    return t.characteristics && t.characteristics.indexOf("public.accessibility.describes-video") >= 0 && (r = "main-desc"),
    r
}, Fn = function(t, r) {
    t.abort(),
    t.pause(),
    r && r.activePlaylistLoader && (r.activePlaylistLoader.pause(),
    r.activePlaylistLoader = null)
}, gs = function(t, r) {
    r.activePlaylistLoader = t,
    t.load()
}, q_ = function(t, r) {
    return function() {
        var i = r.segmentLoaders
          , e = i[t]
          , n = i.main
          , s = r.mediaTypes[t]
          , o = s.activeTrack()
          , u = s.getActiveGroup()
          , l = s.activePlaylistLoader
          , c = s.lastGroup_;
        if (!(u && c && u.id === c.id) && (s.lastGroup_ = u,
        s.lastTrack_ = o,
        Fn(e, s),
        !(!u || u.isMasterPlaylist))) {
            if (!u.playlistLoader) {
                l && n.resetEverything();
                return
            }
            e.resyncLoader(),
            gs(u.playlistLoader, s)
        }
    }
}, z_ = function(t, r) {
    return function() {
        var i = r.segmentLoaders[t]
          , e = r.mediaTypes[t];
        e.lastGroup_ = null,
        i.abort(),
        i.pause()
    }
}, $_ = function(t, r) {
    return function() {
        var i = r.masterPlaylistLoader
          , e = r.segmentLoaders
          , n = e[t]
          , s = e.main
          , o = r.mediaTypes[t]
          , u = o.activeTrack()
          , l = o.getActiveGroup()
          , c = o.activePlaylistLoader
          , p = o.lastTrack_;
        if (!(p && u && p.id === u.id) && (o.lastGroup_ = l,
        o.lastTrack_ = u,
        Fn(n, o),
        !!l)) {
            if (l.isMasterPlaylist) {
                if (!u || !p || u.id === p.id)
                    return;
                var g = r.vhs.masterPlaylistController_
                  , y = g.selectPlaylist();
                if (g.media() === y)
                    return;
                o.logger_("track change. Switching master audio from " + p.id + " to " + u.id),
                i.pause(),
                s.resetEverything(),
                g.fastQualityChange_(y);
                return
            }
            if (t === "AUDIO") {
                if (!l.playlistLoader) {
                    s.setAudio(!0),
                    s.resetEverything();
                    return
                }
                n.setAudio(!0),
                s.setAudio(!1)
            }
            if (c === l.playlistLoader) {
                gs(l.playlistLoader, o);
                return
            }
            n.track && n.track(u),
            n.resetEverything(),
            gs(l.playlistLoader, o)
        }
    }
}, Nn = {
    AUDIO: function(t, r) {
        return function() {
            var i = r.segmentLoaders[t]
              , e = r.mediaTypes[t]
              , n = r.blacklistCurrentPlaylist;
            Fn(i, e);
            var s = e.activeTrack()
              , o = e.activeGroup()
              , u = (o.filter(function(p) {
                return p.default
            })[0] || o[0]).id
              , l = e.tracks[u];
            if (s === l) {
                n({
                    message: "Problem encountered loading the default audio track."
                });
                return
            }
            I.log.warn("Problem encountered loading the alternate audio track.Switching back to default.");
            for (var c in e.tracks)
                e.tracks[c].enabled = e.tracks[c] === l;
            e.onTrackChanged()
        }
    },
    SUBTITLES: function(t, r) {
        return function() {
            var i = r.segmentLoaders[t]
              , e = r.mediaTypes[t];
            I.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),
            Fn(i, e);
            var n = e.activeTrack();
            n && (n.mode = "disabled"),
            e.onTrackChanged()
        }
    }
}, kl = {
    AUDIO: function(t, r, i) {
        if (r) {
            var e = i.tech
              , n = i.requestOptions
              , s = i.segmentLoaders[t];
            r.on("loadedmetadata", function() {
                var o = r.media();
                s.playlist(o, n),
                (!e.paused() || o.endList && e.preload() !== "none") && s.load()
            }),
            r.on("loadedplaylist", function() {
                s.playlist(r.media(), n),
                e.paused() || s.load()
            }),
            r.on("error", Nn[t](t, i))
        }
    },
    SUBTITLES: function(t, r, i) {
        var e = i.tech
          , n = i.requestOptions
          , s = i.segmentLoaders[t]
          , o = i.mediaTypes[t];
        r.on("loadedmetadata", function() {
            var u = r.media();
            s.playlist(u, n),
            s.track(o.activeTrack()),
            (!e.paused() || u.endList && e.preload() !== "none") && s.load()
        }),
        r.on("loadedplaylist", function() {
            s.playlist(r.media(), n),
            e.paused() || s.load()
        }),
        r.on("error", Nn[t](t, i))
    }
}, K_ = {
    AUDIO: function(t, r) {
        var i = r.vhs
          , e = r.sourceType
          , n = r.segmentLoaders[t]
          , s = r.requestOptions
          , o = r.master.mediaGroups
          , u = r.mediaTypes[t]
          , l = u.groups
          , c = u.tracks
          , p = u.logger_
          , g = r.masterPlaylistLoader
          , y = ia(g.master);
        (!o[t] || Object.keys(o[t]).length === 0) && (o[t] = {
            main: {
                default: {
                    default: !0
                }
            }
        });
        for (var S in o[t]) {
            l[S] || (l[S] = []);
            for (var x in o[t][S]) {
                var b = o[t][S][x]
                  , P = void 0;
                if (y ? (p("AUDIO group '" + S + "' label '" + x + "' is a master playlist"),
                b.isMasterPlaylist = !0,
                P = null) : e === "vhs-json" && b.playlists ? P = new Tr(b.playlists[0],i,s) : b.resolvedUri ? P = new Tr(b.resolvedUri,i,s) : b.playlists && e === "dash" ? P = new fs(b.playlists[0],i,s,g) : P = null,
                b = I.mergeOptions({
                    id: x,
                    playlistLoader: P
                }, b),
                kl[t](t, b.playlistLoader, r),
                l[S].push(b),
                typeof c[x] > "u") {
                    var D = new I.AudioTrack({
                        id: x,
                        kind: G_(b),
                        enabled: !1,
                        language: b.language,
                        default: b.default,
                        label: x
                    });
                    c[x] = D
                }
            }
        }
        n.on("error", Nn[t](t, r))
    },
    SUBTITLES: function(t, r) {
        var i = r.tech
          , e = r.vhs
          , n = r.sourceType
          , s = r.segmentLoaders[t]
          , o = r.requestOptions
          , u = r.master.mediaGroups
          , l = r.mediaTypes[t]
          , c = l.groups
          , p = l.tracks
          , g = r.masterPlaylistLoader;
        for (var y in u[t]) {
            c[y] || (c[y] = []);
            for (var S in u[t][y])
                if (!u[t][y][S].forced) {
                    var x = u[t][y][S]
                      , b = void 0;
                    if (n === "hls")
                        b = new Tr(x.resolvedUri,e,o);
                    else if (n === "dash") {
                        var P = x.playlists.filter(function(L) {
                            return L.excludeUntil !== 1 / 0
                        });
                        if (!P.length)
                            return;
                        b = new fs(x.playlists[0],e,o,g)
                    } else
                        n === "vhs-json" && (b = new Tr(x.playlists ? x.playlists[0] : x.resolvedUri,e,o));
                    if (x = I.mergeOptions({
                        id: S,
                        playlistLoader: b
                    }, x),
                    kl[t](t, x.playlistLoader, r),
                    c[y].push(x),
                    typeof p[S] > "u") {
                        var D = i.addRemoteTextTrack({
                            id: S,
                            kind: "subtitles",
                            default: x.default && x.autoselect,
                            language: x.language,
                            label: S
                        }, !1).track;
                        p[S] = D
                    }
                }
        }
        s.on("error", Nn[t](t, r))
    },
    "CLOSED-CAPTIONS": function(t, r) {
        var i = r.tech
          , e = r.master.mediaGroups
          , n = r.mediaTypes[t]
          , s = n.groups
          , o = n.tracks;
        for (var u in e[t]) {
            s[u] || (s[u] = []);
            for (var l in e[t][u]) {
                var c = e[t][u][l];
                if (/^(?:CC|SERVICE)/.test(c.instreamId)) {
                    var p = i.options_.vhs && i.options_.vhs.captionServices || {}
                      , g = {
                        label: l,
                        language: c.language,
                        instreamId: c.instreamId,
                        default: c.default && c.autoselect
                    };
                    if (p[g.instreamId] && (g = I.mergeOptions(g, p[g.instreamId])),
                    g.default === void 0 && delete g.default,
                    s[u].push(I.mergeOptions({
                        id: l
                    }, c)),
                    typeof o[l] > "u") {
                        var y = i.addRemoteTextTrack({
                            id: g.instreamId,
                            kind: "captions",
                            default: g.default,
                            language: g.language,
                            label: g.label
                        }, !1).track;
                        o[l] = y
                    }
                }
            }
        }
    }
}, X_ = function a(t, r) {
    for (var i = 0; i < t.length; i++)
        if (_o(r, t[i]) || t[i].playlists && a(t[i].playlists, r))
            return !0;
    return !1
}, Y_ = function(t, r) {
    return function(i) {
        var e = r.masterPlaylistLoader
          , n = r.mediaTypes[t].groups
          , s = e.media();
        if (!s)
            return null;
        var o = null;
        s.attributes[t] && (o = n[s.attributes[t]]);
        var u = Object.keys(n);
        if (!o)
            if (t === "AUDIO" && u.length > 1 && ia(r.master))
                for (var l = 0; l < u.length; l++) {
                    var c = n[u[l]];
                    if (X_(c, s)) {
                        o = c;
                        break
                    }
                }
            else
                n.main ? o = n.main : u.length === 1 && (o = n[u[0]]);
        return typeof i > "u" ? o : i === null || !o ? null : o.filter(function(p) {
            return p.id === i.id
        })[0] || null
    }
}, Q_ = {
    AUDIO: function(t, r) {
        return function() {
            var i = r.mediaTypes[t].tracks;
            for (var e in i)
                if (i[e].enabled)
                    return i[e];
            return null
        }
    },
    SUBTITLES: function(t, r) {
        return function() {
            var i = r.mediaTypes[t].tracks;
            for (var e in i)
                if (i[e].mode === "showing" || i[e].mode === "hidden")
                    return i[e];
            return null
        }
    }
}, J_ = function(t, r) {
    var i = r.mediaTypes;
    return function() {
        var e = i[t].activeTrack();
        return e ? i[t].activeGroup(e) : null
    }
}, Z_ = function(t) {
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(S) {
        K_[S](S, t)
    });
    var r = t.mediaTypes
      , i = t.masterPlaylistLoader
      , e = t.tech
      , n = t.vhs
      , s = t.segmentLoaders
      , o = s.AUDIO
      , u = s.main;
    ["AUDIO", "SUBTITLES"].forEach(function(S) {
        r[S].activeGroup = Y_(S, t),
        r[S].activeTrack = Q_[S](S, t),
        r[S].onGroupChanged = q_(S, t),
        r[S].onGroupChanging = z_(S, t),
        r[S].onTrackChanged = $_(S, t),
        r[S].getActiveGroup = J_(S, t)
    });
    var l = r.AUDIO.activeGroup();
    if (l) {
        var c = (l.filter(function(S) {
            return S.default
        })[0] || l[0]).id;
        r.AUDIO.tracks[c].enabled = !0,
        r.AUDIO.onGroupChanged(),
        r.AUDIO.onTrackChanged();
        var p = r.AUDIO.getActiveGroup();
        p.playlistLoader ? (u.setAudio(!1),
        o.setAudio(!0)) : u.setAudio(!0)
    }
    i.on("mediachange", function() {
        ["AUDIO", "SUBTITLES"].forEach(function(S) {
            return r[S].onGroupChanged()
        })
    }),
    i.on("mediachanging", function() {
        ["AUDIO", "SUBTITLES"].forEach(function(S) {
            return r[S].onGroupChanging()
        })
    });
    var g = function() {
        r.AUDIO.onTrackChanged(),
        e.trigger({
            type: "usage",
            name: "vhs-audio-change"
        }),
        e.trigger({
            type: "usage",
            name: "hls-audio-change"
        })
    };
    e.audioTracks().addEventListener("change", g),
    e.remoteTextTracks().addEventListener("change", r.SUBTITLES.onTrackChanged),
    n.on("dispose", function() {
        e.audioTracks().removeEventListener("change", g),
        e.remoteTextTracks().removeEventListener("change", r.SUBTITLES.onTrackChanged)
    }),
    e.clearTracks("audio");
    for (var y in r.AUDIO.tracks)
        e.audioTracks().addTrack(r.AUDIO.tracks[y])
}, ey = function() {
    var t = {};
    return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function(r) {
        t[r] = {
            groups: {},
            tracks: {},
            activePlaylistLoader: null,
            activeGroup: xt,
            activeTrack: xt,
            getActiveGroup: xt,
            onGroupChanged: xt,
            onTrackChanged: xt,
            lastTrack_: null,
            logger_: dt("MediaGroups[" + r + "]")
        }
    }),
    t
}, ty = 60 * 2, Tt, ry = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"], iy = function(t) {
    return this.audioSegmentLoader_[t] + this.mainSegmentLoader_[t]
}, ny = function(t) {
    var r = t.currentPlaylist
      , i = t.nextPlaylist
      , e = t.forwardBuffer
      , n = t.bufferLowWaterLine
      , s = t.bufferHighWaterLine
      , o = t.duration
      , u = t.experimentalBufferBasedABR
      , l = t.log;
    if (!i)
        return I.log.warn("We received no playlist to switch to. Please check your stream."),
        !1;
    var c = "allowing switch " + (r && r.id || "null") + " -> " + i.id;
    if (!r || !r.endList)
        return l(c + " as current playlist " + (r ? "is live" : "is not set")),
        !0;
    if (i.id === r.id)
        return !1;
    var p = u ? Ee.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : Ee.MAX_BUFFER_LOW_WATER_LINE;
    if (o < p)
        return l(c + " as duration < max low water line (" + o + " < " + p + ")"),
        !0;
    var g = i.attributes.BANDWIDTH
      , y = r.attributes.BANDWIDTH;
    if (g < y && (!u || e < s)) {
        var S = c + " as next bandwidth < current bandwidth (" + g + " < " + y + ")";
        return u && (S += " and forwardBuffer < bufferHighWaterLine (" + e + " < " + s + ")"),
        l(S),
        !0
    }
    if ((!u || g > y) && e >= n) {
        var x = c + " as forwardBuffer >= bufferLowWaterLine (" + e + " >= " + n + ")";
        return u && (x += " and next bandwidth > current bandwidth (" + g + " > " + y + ")"),
        l(x),
        !0
    }
    return l("not " + c + " as no switching criteria met"),
    !1
}, ay = function(a) {
    G(t, a);
    function t(i) {
        var e;
        e = a.call(this) || this;
        var n = i.src
          , s = i.handleManifestRedirects
          , o = i.withCredentials
          , u = i.tech
          , l = i.bandwidth
          , c = i.externVhs
          , p = i.useCueTags
          , g = i.blacklistDuration
          , y = i.enableLowInitialPlaylist
          , S = i.sourceType
          , x = i.cacheEncryptionKeys
          , b = i.experimentalBufferBasedABR;
        if (!n)
            throw new Error("A non-empty playlist URL or JSON manifest string is required");
        var P = i.maxPlaylistRetries;
        (P === null || typeof P > "u") && (P = 1 / 0),
        Tt = c,
        e.experimentalBufferBasedABR = !!b,
        e.withCredentials = o,
        e.tech_ = u,
        e.vhs_ = u.vhs,
        e.sourceType_ = S,
        e.useCueTags_ = p,
        e.blacklistDuration = g,
        e.maxPlaylistRetries = P,
        e.enableLowInitialPlaylist = y,
        e.useCueTags_ && (e.cueTagsTrack_ = e.tech_.addTextTrack("metadata", "ad-cues"),
        e.cueTagsTrack_.inBandMetadataTrackDispatchType = ""),
        e.requestOptions_ = {
            withCredentials: o,
            handleManifestRedirects: s,
            maxPlaylistRetries: P,
            timeout: null
        },
        e.on("error", e.pauseLoading),
        e.mediaTypes_ = ey(),
        e.mediaSource = new A.MediaSource,
        e.handleDurationChange_ = e.handleDurationChange_.bind(Y(e)),
        e.handleSourceOpen_ = e.handleSourceOpen_.bind(Y(e)),
        e.handleSourceEnded_ = e.handleSourceEnded_.bind(Y(e)),
        e.mediaSource.addEventListener("durationchange", e.handleDurationChange_),
        e.mediaSource.addEventListener("sourceopen", e.handleSourceOpen_),
        e.mediaSource.addEventListener("sourceended", e.handleSourceEnded_),
        e.seekable_ = I.createTimeRanges(),
        e.hasPlayed_ = !1,
        e.syncController_ = new H_(i),
        e.segmentMetadataTrack_ = u.addRemoteTextTrack({
            kind: "metadata",
            label: "segment-metadata"
        }, !1).track,
        e.decrypter_ = new W_,
        e.sourceUpdater_ = new vf(e.mediaSource),
        e.inbandTextTracks_ = {},
        e.timelineChangeController_ = new j_;
        var D = {
            vhs: e.vhs_,
            parse708captions: i.parse708captions,
            mediaSource: e.mediaSource,
            currentTime: e.tech_.currentTime.bind(e.tech_),
            seekable: function() {
                return e.seekable()
            },
            seeking: function() {
                return e.tech_.seeking()
            },
            duration: function() {
                return e.duration()
            },
            hasPlayed: function() {
                return e.hasPlayed_
            },
            goalBufferLength: function() {
                return e.goalBufferLength()
            },
            bandwidth: l,
            syncController: e.syncController_,
            decrypter: e.decrypter_,
            sourceType: e.sourceType_,
            inbandTextTracks: e.inbandTextTracks_,
            cacheEncryptionKeys: x,
            sourceUpdater: e.sourceUpdater_,
            timelineChangeController: e.timelineChangeController_
        };
        e.masterPlaylistLoader_ = e.sourceType_ === "dash" ? new fs(n,e.vhs_,e.requestOptions_) : new Tr(n,e.vhs_,e.requestOptions_),
        e.setupMasterPlaylistLoaderListeners_(),
        e.mainSegmentLoader_ = new ps(I.mergeOptions(D, {
            segmentMetadataTrack: e.segmentMetadataTrack_,
            loaderType: "main"
        }),i),
        e.audioSegmentLoader_ = new ps(I.mergeOptions(D, {
            loaderType: "audio"
        }),i),
        e.subtitleSegmentLoader_ = new N_(I.mergeOptions(D, {
            loaderType: "vtt",
            featuresNativeTextTracks: e.tech_.featuresNativeTextTracks
        }),i),
        e.setupSegmentLoaderListeners_(),
        e.experimentalBufferBasedABR && (e.masterPlaylistLoader_.one("loadedplaylist", function() {
            return e.startABRTimer_()
        }),
        e.tech_.on("pause", function() {
            return e.stopABRTimer_()
        }),
        e.tech_.on("play", function() {
            return e.startABRTimer_()
        })),
        ry.forEach(function(R) {
            e[R + "_"] = iy.bind(Y(e), R)
        }),
        e.logger_ = dt("MPC"),
        e.triggeredFmp4Usage = !1,
        e.tech_.preload() === "none" ? (e.loadOnPlay_ = function() {
            e.loadOnPlay_ = null,
            e.masterPlaylistLoader_.load()
        }
        ,
        e.tech_.one("play", e.loadOnPlay_)) : e.masterPlaylistLoader_.load(),
        e.timeToLoadedData__ = -1,
        e.mainAppendsToLoadedData__ = -1,
        e.audioAppendsToLoadedData__ = -1;
        var L = e.tech_.preload() === "none" ? "play" : "loadstart";
        return e.tech_.one(L, function() {
            var R = Date.now();
            e.tech_.one("loadeddata", function() {
                e.timeToLoadedData__ = Date.now() - R,
                e.mainAppendsToLoadedData__ = e.mainSegmentLoader_.mediaAppends,
                e.audioAppendsToLoadedData__ = e.audioSegmentLoader_.mediaAppends
            })
        }),
        e
    }
    var r = t.prototype;
    return r.mainAppendsToLoadedData_ = function() {
        return this.mainAppendsToLoadedData__
    }
    ,
    r.audioAppendsToLoadedData_ = function() {
        return this.audioAppendsToLoadedData__
    }
    ,
    r.appendsToLoadedData_ = function() {
        var e = this.mainAppendsToLoadedData_()
          , n = this.audioAppendsToLoadedData_();
        return e === -1 || n === -1 ? -1 : e + n
    }
    ,
    r.timeToLoadedData_ = function() {
        return this.timeToLoadedData__
    }
    ,
    r.checkABR_ = function() {
        var e = this.selectPlaylist();
        this.shouldSwitchToMedia_(e) && this.switchMedia_(e, "abr")
    }
    ,
    r.switchMedia_ = function(e, n, s) {
        var o = this.media()
          , u = o && (o.id || o.uri)
          , l = e.id || e.uri;
        u && u !== l && (this.logger_("switch media " + u + " -> " + l + " from " + n),
        this.tech_.trigger({
            type: "usage",
            name: "vhs-rendition-change-" + n
        })),
        this.masterPlaylistLoader_.media(e, s)
    }
    ,
    r.startABRTimer_ = function() {
        var e = this;
        this.stopABRTimer_(),
        this.abrTimer_ = A.setInterval(function() {
            return e.checkABR_()
        }, 250)
    }
    ,
    r.stopABRTimer_ = function() {
        this.tech_.scrubbing && this.tech_.scrubbing() || (A.clearInterval(this.abrTimer_),
        this.abrTimer_ = null)
    }
    ,
    r.getAudioTrackPlaylists_ = function() {
        var e = this.master();
        if (!e || !e.mediaGroups || !e.mediaGroups.AUDIO)
            return e && e.playlists || [];
        var n = e.mediaGroups.AUDIO, s = Object.keys(n), o;
        if (Object.keys(this.mediaTypes_.AUDIO.groups).length)
            o = this.mediaTypes_.AUDIO.activeTrack();
        else {
            var u = n.main || s.length && n[s[0]];
            for (var l in u)
                if (u[l].default) {
                    o = {
                        label: l
                    };
                    break
                }
        }
        if (!o)
            return [];
        var c = [];
        for (var p in n)
            if (n[p][o.label]) {
                var g = n[p][o.label];
                g.playlists ? c.push.apply(c, g.playlists) : c.push(g)
            }
        return c
    }
    ,
    r.setupMasterPlaylistLoaderListeners_ = function() {
        var e = this;
        this.masterPlaylistLoader_.on("loadedmetadata", function() {
            var n = e.masterPlaylistLoader_.media()
              , s = n.targetDuration * 1.5 * 1e3;
            us(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = s,
            n.endList && e.tech_.preload() !== "none" && (e.mainSegmentLoader_.playlist(n, e.requestOptions_),
            e.mainSegmentLoader_.load()),
            Z_({
                sourceType: e.sourceType_,
                segmentLoaders: {
                    AUDIO: e.audioSegmentLoader_,
                    SUBTITLES: e.subtitleSegmentLoader_,
                    main: e.mainSegmentLoader_
                },
                tech: e.tech_,
                requestOptions: e.requestOptions_,
                masterPlaylistLoader: e.masterPlaylistLoader_,
                vhs: e.vhs_,
                master: e.master(),
                mediaTypes: e.mediaTypes_,
                blacklistCurrentPlaylist: e.blacklistCurrentPlaylist.bind(e)
            }),
            e.triggerPresenceUsage_(e.master(), n),
            e.setupFirstPlay(),
            !e.mediaTypes_.AUDIO.activePlaylistLoader || e.mediaTypes_.AUDIO.activePlaylistLoader.media() ? e.trigger("selectedinitialmedia") : e.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", function() {
                e.trigger("selectedinitialmedia")
            })
        }),
        this.masterPlaylistLoader_.on("loadedplaylist", function() {
            e.loadOnPlay_ && e.tech_.off("play", e.loadOnPlay_);
            var n = e.masterPlaylistLoader_.media();
            if (!n) {
                e.excludeUnsupportedVariants_();
                var s;
                if (e.enableLowInitialPlaylist && (s = e.selectInitialPlaylist()),
                s || (s = e.selectPlaylist()),
                !s || !e.shouldSwitchToMedia_(s))
                    return;
                e.initialMedia_ = s,
                e.switchMedia_(e.initialMedia_, "initial");
                var o = e.sourceType_ === "vhs-json" && e.initialMedia_.segments;
                if (!o)
                    return;
                n = e.initialMedia_
            }
            e.handleUpdatedMediaPlaylist(n)
        }),
        this.masterPlaylistLoader_.on("error", function() {
            e.blacklistCurrentPlaylist(e.masterPlaylistLoader_.error)
        }),
        this.masterPlaylistLoader_.on("mediachanging", function() {
            e.mainSegmentLoader_.abort(),
            e.mainSegmentLoader_.pause()
        }),
        this.masterPlaylistLoader_.on("mediachange", function() {
            var n = e.masterPlaylistLoader_.media()
              , s = n.targetDuration * 1.5 * 1e3;
            us(e.masterPlaylistLoader_.master, e.masterPlaylistLoader_.media()) ? e.requestOptions_.timeout = 0 : e.requestOptions_.timeout = s,
            e.mainSegmentLoader_.playlist(n, e.requestOptions_),
            e.mainSegmentLoader_.load(),
            e.tech_.trigger({
                type: "mediachange",
                bubbles: !0
            })
        }),
        this.masterPlaylistLoader_.on("playlistunchanged", function() {
            var n = e.masterPlaylistLoader_.media();
            if (n.lastExcludeReason_ !== "playlist-unchanged") {
                var s = e.stuckAtPlaylistEnd_(n);
                s && (e.blacklistCurrentPlaylist({
                    message: "Playlist no longer updating.",
                    reason: "playlist-unchanged"
                }),
                e.tech_.trigger("playliststuck"))
            }
        }),
        this.masterPlaylistLoader_.on("renditiondisabled", function() {
            e.tech_.trigger({
                type: "usage",
                name: "vhs-rendition-disabled"
            }),
            e.tech_.trigger({
                type: "usage",
                name: "hls-rendition-disabled"
            })
        }),
        this.masterPlaylistLoader_.on("renditionenabled", function() {
            e.tech_.trigger({
                type: "usage",
                name: "vhs-rendition-enabled"
            }),
            e.tech_.trigger({
                type: "usage",
                name: "hls-rendition-enabled"
            })
        })
    }
    ,
    r.handleUpdatedMediaPlaylist = function(e) {
        this.useCueTags_ && this.updateAdCues_(e),
        this.mainSegmentLoader_.playlist(e, this.requestOptions_),
        this.updateDuration(!e.endList),
        this.tech_.paused() || (this.mainSegmentLoader_.load(),
        this.audioSegmentLoader_ && this.audioSegmentLoader_.load())
    }
    ,
    r.triggerPresenceUsage_ = function(e, n) {
        var s = e.mediaGroups || {}
          , o = !0
          , u = Object.keys(s.AUDIO);
        for (var l in s.AUDIO)
            for (var c in s.AUDIO[l]) {
                var p = s.AUDIO[l][c];
                p.uri || (o = !1)
            }
        o && (this.tech_.trigger({
            type: "usage",
            name: "vhs-demuxed"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-demuxed"
        })),
        Object.keys(s.SUBTITLES).length && (this.tech_.trigger({
            type: "usage",
            name: "vhs-webvtt"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-webvtt"
        })),
        Tt.Playlist.isAes(n) && (this.tech_.trigger({
            type: "usage",
            name: "vhs-aes"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-aes"
        })),
        u.length && Object.keys(s.AUDIO[u[0]]).length > 1 && (this.tech_.trigger({
            type: "usage",
            name: "vhs-alternate-audio"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-alternate-audio"
        })),
        this.useCueTags_ && (this.tech_.trigger({
            type: "usage",
            name: "vhs-playlist-cue-tags"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-playlist-cue-tags"
        }))
    }
    ,
    r.shouldSwitchToMedia_ = function(e) {
        var n = this.masterPlaylistLoader_.media()
          , s = this.tech_.buffered()
          , o = s.length ? s.end(s.length - 1) - this.tech_.currentTime() : 0
          , u = this.bufferLowWaterLine()
          , l = this.bufferHighWaterLine();
        return ny({
            currentPlaylist: n,
            nextPlaylist: e,
            forwardBuffer: o,
            bufferLowWaterLine: u,
            bufferHighWaterLine: l,
            duration: this.duration(),
            experimentalBufferBasedABR: this.experimentalBufferBasedABR,
            log: this.logger_
        })
    }
    ,
    r.setupSegmentLoaderListeners_ = function() {
        var e = this;
        this.experimentalBufferBasedABR || (this.mainSegmentLoader_.on("bandwidthupdate", function() {
            var s = e.selectPlaylist();
            e.shouldSwitchToMedia_(s) && e.switchMedia_(s, "bandwidthupdate"),
            e.tech_.trigger("bandwidthupdate")
        }),
        this.mainSegmentLoader_.on("progress", function() {
            e.trigger("progress")
        })),
        this.mainSegmentLoader_.on("error", function() {
            e.blacklistCurrentPlaylist(e.mainSegmentLoader_.error())
        }),
        this.mainSegmentLoader_.on("appenderror", function() {
            e.error = e.mainSegmentLoader_.error_,
            e.trigger("error")
        }),
        this.mainSegmentLoader_.on("syncinfoupdate", function() {
            e.onSyncInfoUpdate_()
        }),
        this.mainSegmentLoader_.on("timestampoffset", function() {
            e.tech_.trigger({
                type: "usage",
                name: "vhs-timestamp-offset"
            }),
            e.tech_.trigger({
                type: "usage",
                name: "hls-timestamp-offset"
            })
        }),
        this.audioSegmentLoader_.on("syncinfoupdate", function() {
            e.onSyncInfoUpdate_()
        }),
        this.audioSegmentLoader_.on("appenderror", function() {
            e.error = e.audioSegmentLoader_.error_,
            e.trigger("error")
        }),
        this.mainSegmentLoader_.on("ended", function() {
            e.logger_("main segment loader ended"),
            e.onEndOfStream()
        }),
        this.mainSegmentLoader_.on("earlyabort", function(s) {
            e.experimentalBufferBasedABR || (e.delegateLoaders_("all", ["abort"]),
            e.blacklistCurrentPlaylist({
                message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
            }, ty))
        });
        var n = function() {
            if (!e.sourceUpdater_.hasCreatedSourceBuffers())
                return e.tryToCreateSourceBuffers_();
            var o = e.getCodecsOrExclude_();
            o && e.sourceUpdater_.addOrChangeSourceBuffers(o)
        };
        this.mainSegmentLoader_.on("trackinfo", n),
        this.audioSegmentLoader_.on("trackinfo", n),
        this.mainSegmentLoader_.on("fmp4", function() {
            e.triggeredFmp4Usage || (e.tech_.trigger({
                type: "usage",
                name: "vhs-fmp4"
            }),
            e.tech_.trigger({
                type: "usage",
                name: "hls-fmp4"
            }),
            e.triggeredFmp4Usage = !0)
        }),
        this.audioSegmentLoader_.on("fmp4", function() {
            e.triggeredFmp4Usage || (e.tech_.trigger({
                type: "usage",
                name: "vhs-fmp4"
            }),
            e.tech_.trigger({
                type: "usage",
                name: "hls-fmp4"
            }),
            e.triggeredFmp4Usage = !0)
        }),
        this.audioSegmentLoader_.on("ended", function() {
            e.logger_("audioSegmentLoader ended"),
            e.onEndOfStream()
        })
    }
    ,
    r.mediaSecondsLoaded_ = function() {
        return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
    }
    ,
    r.load = function() {
        this.mainSegmentLoader_.load(),
        this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(),
        this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
    }
    ,
    r.smoothQualityChange_ = function(e) {
        e === void 0 && (e = this.selectPlaylist()),
        this.fastQualityChange_(e)
    }
    ,
    r.fastQualityChange_ = function(e) {
        var n = this;
        if (e === void 0 && (e = this.selectPlaylist()),
        e === this.masterPlaylistLoader_.media()) {
            this.logger_("skipping fastQualityChange because new media is same as old");
            return
        }
        this.switchMedia_(e, "fast-quality"),
        this.mainSegmentLoader_.resetEverything(function() {
            I.browser.IE_VERSION || I.browser.IS_EDGE ? n.tech_.setCurrentTime(n.tech_.currentTime() + .04) : n.tech_.setCurrentTime(n.tech_.currentTime())
        })
    }
    ,
    r.play = function() {
        if (!this.setupFirstPlay()) {
            this.tech_.ended() && this.tech_.setCurrentTime(0),
            this.hasPlayed_ && this.load();
            var e = this.tech_.seekable();
            if (this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0))
                return this.tech_.setCurrentTime(e.end(e.length - 1))
        }
    }
    ,
    r.setupFirstPlay = function() {
        var e = this
          , n = this.masterPlaylistLoader_.media();
        if (!n || this.tech_.paused() || this.hasPlayed_)
            return !1;
        if (!n.endList) {
            var s = this.seekable();
            if (!s.length)
                return !1;
            if (I.browser.IE_VERSION && this.tech_.readyState() === 0)
                return this.tech_.one("loadedmetadata", function() {
                    e.trigger("firstplay"),
                    e.tech_.setCurrentTime(s.end(0)),
                    e.hasPlayed_ = !0
                }),
                !1;
            this.trigger("firstplay"),
            this.tech_.setCurrentTime(s.end(0))
        }
        return this.hasPlayed_ = !0,
        this.load(),
        !0
    }
    ,
    r.handleSourceOpen_ = function() {
        if (this.tryToCreateSourceBuffers_(),
        this.tech_.autoplay()) {
            var e = this.tech_.play();
            typeof e < "u" && typeof e.then == "function" && e.then(null, function(n) {})
        }
        this.trigger("sourceopen")
    }
    ,
    r.handleSourceEnded_ = function() {
        if (this.inbandTextTracks_.metadataTrack_) {
            var e = this.inbandTextTracks_.metadataTrack_.cues;
            if (!(!e || !e.length)) {
                var n = this.duration();
                e[e.length - 1].endTime = isNaN(n) || Math.abs(n) === 1 / 0 ? Number.MAX_VALUE : n
            }
        }
    }
    ,
    r.handleDurationChange_ = function() {
        this.tech_.trigger("durationchange")
    }
    ,
    r.onEndOfStream = function() {
        var e = this.mainSegmentLoader_.ended_;
        this.mediaTypes_.AUDIO.activePlaylistLoader && (!this.mainSegmentLoader_.currentMediaInfo_ || this.mainSegmentLoader_.currentMediaInfo_.hasVideo ? e = e && this.audioSegmentLoader_.ended_ : e = this.audioSegmentLoader_.ended_),
        e && (this.stopABRTimer_(),
        this.sourceUpdater_.endOfStream())
    }
    ,
    r.stuckAtPlaylistEnd_ = function(e) {
        var n = this.seekable();
        if (!n.length)
            return !1;
        var s = this.syncController_.getExpiredTime(e, this.duration());
        if (s === null)
            return !1;
        var o = Tt.Playlist.playlistEnd(e, s)
          , u = this.tech_.currentTime()
          , l = this.tech_.buffered();
        if (!l.length)
            return o - u <= mt;
        var c = l.end(l.length - 1);
        return c - u <= mt && o - c <= mt
    }
    ,
    r.blacklistCurrentPlaylist = function(e, n) {
        e === void 0 && (e = {});
        var s = e.playlist || this.masterPlaylistLoader_.media();
        if (n = n || e.blacklistDuration || this.blacklistDuration,
        !s) {
            this.error = e,
            this.mediaSource.readyState !== "open" ? this.trigger("error") : this.sourceUpdater_.endOfStream("network");
            return
        }
        s.playlistErrors_++;
        var o = this.masterPlaylistLoader_.master.playlists
          , u = o.filter(ra)
          , l = u.length === 1 && u[0] === s;
        if (o.length === 1 && n !== 1 / 0)
            return I.log.warn("Problem encountered with playlist " + s.id + ". Trying again since it is the only playlist."),
            this.tech_.trigger("retryplaylist"),
            this.masterPlaylistLoader_.load(l);
        if (l) {
            var c = !1;
            o.forEach(function(P) {
                if (P !== s) {
                    var D = P.excludeUntil;
                    typeof D < "u" && D !== 1 / 0 && (c = !0,
                    delete P.excludeUntil)
                }
            }),
            c && (I.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."),
            this.tech_.trigger("retryplaylist"))
        }
        var p;
        s.playlistErrors_ > this.maxPlaylistRetries ? p = 1 / 0 : p = Date.now() + n * 1e3,
        s.excludeUntil = p,
        e.reason && (s.lastExcludeReason_ = e.reason),
        this.tech_.trigger("blacklistplaylist"),
        this.tech_.trigger({
            type: "usage",
            name: "vhs-rendition-blacklisted"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-rendition-blacklisted"
        });
        var g = this.selectPlaylist();
        if (!g) {
            this.error = "Playback cannot continue. No available working or supported playlists.",
            this.trigger("error");
            return
        }
        var y = e.internal ? this.logger_ : I.log.warn
          , S = e.message ? " " + e.message : "";
        y((e.internal ? "Internal problem" : "Problem") + " encountered with playlist " + s.id + "." + (S + " Switching to playlist " + g.id + ".")),
        g.attributes.AUDIO !== s.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]),
        g.attributes.SUBTITLES !== s.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]),
        this.delegateLoaders_("main", ["abort", "pause"]);
        var x = g.targetDuration / 2 * 1e3 || 5 * 1e3
          , b = typeof g.lastRequest == "number" && Date.now() - g.lastRequest <= x;
        return this.switchMedia_(g, "exclude", l || b)
    }
    ,
    r.pauseLoading = function() {
        this.delegateLoaders_("all", ["abort", "pause"]),
        this.stopABRTimer_()
    }
    ,
    r.delegateLoaders_ = function(e, n) {
        var s = this
          , o = []
          , u = e === "all";
        (u || e === "main") && o.push(this.masterPlaylistLoader_);
        var l = [];
        (u || e === "audio") && l.push("AUDIO"),
        (u || e === "subtitle") && (l.push("CLOSED-CAPTIONS"),
        l.push("SUBTITLES")),
        l.forEach(function(c) {
            var p = s.mediaTypes_[c] && s.mediaTypes_[c].activePlaylistLoader;
            p && o.push(p)
        }),
        ["main", "audio", "subtitle"].forEach(function(c) {
            var p = s[c + "SegmentLoader_"];
            p && (e === c || e === "all") && o.push(p)
        }),
        o.forEach(function(c) {
            return n.forEach(function(p) {
                typeof c[p] == "function" && c[p]()
            })
        })
    }
    ,
    r.setCurrentTime = function(e) {
        var n = oi(this.tech_.buffered(), e);
        if (!(this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media()) || !this.masterPlaylistLoader_.media().segments)
            return 0;
        if (n && n.length)
            return e;
        this.mainSegmentLoader_.resetEverything(),
        this.mainSegmentLoader_.abort(),
        this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(),
        this.audioSegmentLoader_.abort()),
        this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(),
        this.subtitleSegmentLoader_.abort()),
        this.load()
    }
    ,
    r.duration = function() {
        if (!this.masterPlaylistLoader_)
            return 0;
        var e = this.masterPlaylistLoader_.media();
        return e ? e.endList ? this.mediaSource ? this.mediaSource.duration : Tt.Playlist.duration(e) : 1 / 0 : 0
    }
    ,
    r.seekable = function() {
        return this.seekable_
    }
    ,
    r.onSyncInfoUpdate_ = function() {
        var e;
        if (this.masterPlaylistLoader_) {
            var n = this.masterPlaylistLoader_.media();
            if (n) {
                var s = this.syncController_.getExpiredTime(n, this.duration());
                if (s !== null) {
                    var o = this.masterPlaylistLoader_.master
                      , u = Tt.Playlist.seekable(n, s, Tt.Playlist.liveEdgeDelay(o, n));
                    if (u.length !== 0 && !(this.mediaTypes_.AUDIO.activePlaylistLoader && (n = this.mediaTypes_.AUDIO.activePlaylistLoader.media(),
                    s = this.syncController_.getExpiredTime(n, this.duration()),
                    s === null || (e = Tt.Playlist.seekable(n, s, Tt.Playlist.liveEdgeDelay(o, n)),
                    e.length === 0)))) {
                        var l, c;
                        this.seekable_ && this.seekable_.length && (l = this.seekable_.end(0),
                        c = this.seekable_.start(0)),
                        e ? e.start(0) > u.end(0) || u.start(0) > e.end(0) ? this.seekable_ = u : this.seekable_ = I.createTimeRanges([[e.start(0) > u.start(0) ? e.start(0) : u.start(0), e.end(0) < u.end(0) ? e.end(0) : u.end(0)]]) : this.seekable_ = u,
                        !(this.seekable_ && this.seekable_.length && this.seekable_.end(0) === l && this.seekable_.start(0) === c) && (this.logger_("seekable updated [" + Oc(this.seekable_) + "]"),
                        this.tech_.trigger("seekablechanged"))
                    }
                }
            }
        }
    }
    ,
    r.updateDuration = function(e) {
        if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_),
        this.updateDuration_ = null),
        this.mediaSource.readyState !== "open") {
            this.updateDuration_ = this.updateDuration.bind(this, e),
            this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
            return
        }
        if (e) {
            var n = this.seekable();
            if (!n.length)
                return;
            (isNaN(this.mediaSource.duration) || this.mediaSource.duration < n.end(n.length - 1)) && this.sourceUpdater_.setDuration(n.end(n.length - 1));
            return
        }
        var s = this.tech_.buffered()
          , o = Tt.Playlist.duration(this.masterPlaylistLoader_.media());
        s.length > 0 && (o = Math.max(o, s.end(s.length - 1))),
        this.mediaSource.duration !== o && this.sourceUpdater_.setDuration(o)
    }
    ,
    r.dispose = function() {
        var e = this;
        this.trigger("dispose"),
        this.decrypter_.terminate(),
        this.masterPlaylistLoader_.dispose(),
        this.mainSegmentLoader_.dispose(),
        this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_),
        ["AUDIO", "SUBTITLES"].forEach(function(n) {
            var s = e.mediaTypes_[n].groups;
            for (var o in s)
                s[o].forEach(function(u) {
                    u.playlistLoader && u.playlistLoader.dispose()
                })
        }),
        this.audioSegmentLoader_.dispose(),
        this.subtitleSegmentLoader_.dispose(),
        this.sourceUpdater_.dispose(),
        this.timelineChangeController_.dispose(),
        this.stopABRTimer_(),
        this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_),
        this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_),
        this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_),
        this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_),
        this.off()
    }
    ,
    r.master = function() {
        return this.masterPlaylistLoader_.master
    }
    ,
    r.media = function() {
        return this.masterPlaylistLoader_.media() || this.initialMedia_
    }
    ,
    r.areMediaTypesKnown_ = function() {
        var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
        return !(!this.mainSegmentLoader_.currentMediaInfo_ || e && !this.audioSegmentLoader_.currentMediaInfo_)
    }
    ,
    r.getCodecsOrExclude_ = function() {
        var e = this
          , n = {
            main: this.mainSegmentLoader_.currentMediaInfo_ || {},
            audio: this.audioSegmentLoader_.currentMediaInfo_ || {}
        };
        n.video = n.main;
        var s = fi(this.master(), this.media())
          , o = {}
          , u = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
        if (n.main.hasVideo && (o.video = s.video || n.main.videoCodec || Zp),
        n.main.isMuxed && (o.video += "," + (s.audio || n.main.audioCodec || vu)),
        (n.main.hasAudio && !n.main.isMuxed || n.audio.hasAudio || u) && (o.audio = s.audio || n.main.audioCodec || n.audio.audioCodec || vu,
        n.audio.isFmp4 = n.main.hasAudio && !n.main.isMuxed ? n.main.isFmp4 : n.audio.isFmp4),
        !o.audio && !o.video) {
            this.blacklistCurrentPlaylist({
                playlist: this.media(),
                message: "Could not determine codecs for playlist.",
                blacklistDuration: 1 / 0
            });
            return
        }
        var l = function(b, P) {
            return b ? ln(P) : ka(P)
        }, c = {}, p;
        if (["video", "audio"].forEach(function(x) {
            if (o.hasOwnProperty(x) && !l(n[x].isFmp4, o[x])) {
                var b = n[x].isFmp4 ? "browser" : "muxer";
                c[b] = c[b] || [],
                c[b].push(o[x]),
                x === "audio" && (p = b)
            }
        }),
        u && p && this.media().attributes.AUDIO) {
            var g = this.media().attributes.AUDIO;
            this.master().playlists.forEach(function(x) {
                var b = x.attributes && x.attributes.AUDIO;
                b === g && x !== e.media() && (x.excludeUntil = 1 / 0)
            }),
            this.logger_("excluding audio group " + g + " as " + p + ' does not support codec(s): "' + o.audio + '"')
        }
        if (Object.keys(c).length) {
            var y = Object.keys(c).reduce(function(x, b) {
                return x && (x += ", "),
                x += b + ' does not support codec(s): "' + c[b].join(",") + '"',
                x
            }, "") + ".";
            this.blacklistCurrentPlaylist({
                playlist: this.media(),
                internal: !0,
                message: y,
                blacklistDuration: 1 / 0
            });
            return
        }
        if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
            var S = [];
            if (["video", "audio"].forEach(function(x) {
                var b = (ht(e.sourceUpdater_.codecs[x] || "")[0] || {}).type
                  , P = (ht(o[x] || "")[0] || {}).type;
                b && P && b.toLowerCase() !== P.toLowerCase() && S.push('"' + e.sourceUpdater_.codecs[x] + '" -> "' + o[x] + '"')
            }),
            S.length) {
                this.blacklistCurrentPlaylist({
                    playlist: this.media(),
                    message: "Codec switching not supported: " + S.join(", ") + ".",
                    blacklistDuration: 1 / 0,
                    internal: !0
                });
                return
            }
        }
        return o
    }
    ,
    r.tryToCreateSourceBuffers_ = function() {
        if (!(this.mediaSource.readyState !== "open" || this.sourceUpdater_.hasCreatedSourceBuffers()) && this.areMediaTypesKnown_()) {
            var e = this.getCodecsOrExclude_();
            if (e) {
                this.sourceUpdater_.createSourceBuffers(e);
                var n = [e.video, e.audio].filter(Boolean).join(",");
                this.excludeIncompatibleVariants_(n)
            }
        }
    }
    ,
    r.excludeUnsupportedVariants_ = function() {
        var e = this
          , n = this.master().playlists
          , s = [];
        Object.keys(n).forEach(function(o) {
            var u = n[o];
            if (s.indexOf(u.id) === -1) {
                s.push(u.id);
                var l = fi(e.master, u)
                  , c = [];
                l.audio && !ka(l.audio) && !ln(l.audio) && c.push("audio codec " + l.audio),
                l.video && !ka(l.video) && !ln(l.video) && c.push("video codec " + l.video),
                l.text && l.text === "stpp.ttml.im1t" && c.push("text codec " + l.text),
                c.length && (u.excludeUntil = 1 / 0,
                e.logger_("excluding " + u.id + " for unsupported: " + c.join(", ")))
            }
        })
    }
    ,
    r.excludeIncompatibleVariants_ = function(e) {
        var n = this
          , s = []
          , o = this.master().playlists
          , u = Rn(ht(e))
          , l = gl(u)
          , c = u.video && ht(u.video)[0] || null
          , p = u.audio && ht(u.audio)[0] || null;
        Object.keys(o).forEach(function(g) {
            var y = o[g];
            if (!(s.indexOf(y.id) !== -1 || y.excludeUntil === 1 / 0)) {
                s.push(y.id);
                var S = []
                  , x = fi(n.masterPlaylistLoader_.master, y)
                  , b = gl(x);
                if (!(!x.audio && !x.video)) {
                    if (b !== l && S.push('codec count "' + b + '" !== "' + l + '"'),
                    !n.sourceUpdater_.canChangeType()) {
                        var P = x.video && ht(x.video)[0] || null
                          , D = x.audio && ht(x.audio)[0] || null;
                        P && c && P.type.toLowerCase() !== c.type.toLowerCase() && S.push('video codec "' + P.type + '" !== "' + c.type + '"'),
                        D && p && D.type.toLowerCase() !== p.type.toLowerCase() && S.push('audio codec "' + D.type + '" !== "' + p.type + '"')
                    }
                    S.length && (y.excludeUntil = 1 / 0,
                    n.logger_("blacklisting " + y.id + ": " + S.join(" && ")))
                }
            }
        })
    }
    ,
    r.updateAdCues_ = function(e) {
        var n = 0
          , s = this.seekable();
        s.length && (n = s.start(0)),
        B_(e, this.cueTagsTrack_, n)
    }
    ,
    r.goalBufferLength = function() {
        var e = this.tech_.currentTime()
          , n = Ee.GOAL_BUFFER_LENGTH
          , s = Ee.GOAL_BUFFER_LENGTH_RATE
          , o = Math.max(n, Ee.MAX_GOAL_BUFFER_LENGTH);
        return Math.min(n + e * s, o)
    }
    ,
    r.bufferLowWaterLine = function() {
        var e = this.tech_.currentTime()
          , n = Ee.BUFFER_LOW_WATER_LINE
          , s = Ee.BUFFER_LOW_WATER_LINE_RATE
          , o = Math.max(n, Ee.MAX_BUFFER_LOW_WATER_LINE)
          , u = Math.max(n, Ee.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
        return Math.min(n + e * s, this.experimentalBufferBasedABR ? u : o)
    }
    ,
    r.bufferHighWaterLine = function() {
        return Ee.BUFFER_HIGH_WATER_LINE
    }
    ,
    t
}(I.EventTarget), sy = function(t, r, i) {
    return function(e) {
        var n = t.master.playlists[r]
          , s = vo(n)
          , o = ra(n);
        return typeof e > "u" ? o : (e ? delete n.disabled : n.disabled = !0,
        e !== o && !s && (i(),
        e ? t.trigger("renditionenabled") : t.trigger("renditiondisabled")),
        e)
    }
}, oy = function(t, r, i) {
    var e = t.masterPlaylistController_
      , n = t.options_.smoothQualityChange
      , s = n ? "smooth" : "fast"
      , o = e[s + "QualityChange_"].bind(e);
    if (r.attributes) {
        var u = r.attributes.RESOLUTION;
        this.width = u && u.width,
        this.height = u && u.height,
        this.bandwidth = r.attributes.BANDWIDTH
    }
    this.codecs = fi(e.master(), r),
    this.playlist = r,
    this.id = i,
    this.enabled = sy(t.playlists, r.id, o)
}, uy = function(t) {
    t.representations = function() {
        var r = t.masterPlaylistController_.master()
          , i = ia(r) ? t.masterPlaylistController_.getAudioTrackPlaylists_() : r.playlists;
        return i ? i.filter(function(e) {
            return !vo(e)
        }).map(function(e, n) {
            return new oy(t,e,e.id)
        }) : []
    }
}, Al = ["seeking", "seeked", "pause", "playing", "error"], ly = function(t) {
    var r = t.buffered
      , i = t.targetDuration
      , e = t.currentTime;
    return !r.length || r.end(0) - r.start(0) < i * 2 || e > r.start(0) ? !1 : r.start(0) - e < i
}, dy = function() {
    function a(r) {
        var i = this;
        this.masterPlaylistController_ = r.masterPlaylistController,
        this.tech_ = r.tech,
        this.seekable = r.seekable,
        this.allowSeeksWithinUnsafeLiveWindow = r.allowSeeksWithinUnsafeLiveWindow,
        this.liveRangeSafeTimeDelta = r.liveRangeSafeTimeDelta,
        this.media = r.media,
        this.consecutiveUpdates = 0,
        this.lastRecordedTime = null,
        this.timer_ = null,
        this.checkCurrentTimeTimeout_ = null,
        this.logger_ = dt("PlaybackWatcher"),
        this.logger_("initialize");
        var e = function() {
            return i.monitorCurrentTime_()
        }
          , n = function() {
            return i.monitorCurrentTime_()
        }
          , s = function() {
            return i.techWaiting_()
        }
          , o = function() {
            return i.cancelTimer_()
        }
          , u = function() {
            return i.fixesBadSeeks_()
        }
          , l = this.masterPlaylistController_
          , c = ["main", "subtitle", "audio"]
          , p = {};
        c.forEach(function(g) {
            p[g] = {
                reset: function() {
                    return i.resetSegmentDownloads_(g)
                },
                updateend: function() {
                    return i.checkSegmentDownloads_(g)
                }
            },
            l[g + "SegmentLoader_"].on("appendsdone", p[g].updateend),
            l[g + "SegmentLoader_"].on("playlistupdate", p[g].reset),
            i.tech_.on(["seeked", "seeking"], p[g].reset)
        }),
        this.tech_.on("seekablechanged", u),
        this.tech_.on("waiting", s),
        this.tech_.on(Al, o),
        this.tech_.on("canplay", n),
        this.tech_.one("play", e),
        this.dispose = function() {
            i.logger_("dispose"),
            i.tech_.off("seekablechanged", u),
            i.tech_.off("waiting", s),
            i.tech_.off(Al, o),
            i.tech_.off("canplay", n),
            i.tech_.off("play", e),
            c.forEach(function(g) {
                l[g + "SegmentLoader_"].off("appendsdone", p[g].updateend),
                l[g + "SegmentLoader_"].off("playlistupdate", p[g].reset),
                i.tech_.off(["seeked", "seeking"], p[g].reset)
            }),
            i.checkCurrentTimeTimeout_ && A.clearTimeout(i.checkCurrentTimeTimeout_),
            i.cancelTimer_()
        }
    }
    var t = a.prototype;
    return t.monitorCurrentTime_ = function() {
        this.checkCurrentTime_(),
        this.checkCurrentTimeTimeout_ && A.clearTimeout(this.checkCurrentTimeTimeout_),
        this.checkCurrentTimeTimeout_ = A.setTimeout(this.monitorCurrentTime_.bind(this), 250)
    }
    ,
    t.resetSegmentDownloads_ = function(i) {
        var e = this.masterPlaylistController_[i + "SegmentLoader_"];
        this[i + "StalledDownloads_"] > 0 && this.logger_("resetting possible stalled download count for " + i + " loader"),
        this[i + "StalledDownloads_"] = 0,
        this[i + "Buffered_"] = e.buffered_()
    }
    ,
    t.checkSegmentDownloads_ = function(i) {
        var e = this.masterPlaylistController_
          , n = e[i + "SegmentLoader_"]
          , s = n.buffered_()
          , o = a0(this[i + "Buffered_"], s);
        if (this[i + "Buffered_"] = s,
        o) {
            this.resetSegmentDownloads_(i);
            return
        }
        this[i + "StalledDownloads_"]++,
        this.logger_("found #" + this[i + "StalledDownloads_"] + " " + i + " appends that did not increase buffer (possible stalled download)", {
            playlistId: n.playlist_ && n.playlist_.id,
            buffered: Yt(s)
        }),
        !(this[i + "StalledDownloads_"] < 10) && (this.logger_(i + " loader stalled download exclusion"),
        this.resetSegmentDownloads_(i),
        this.tech_.trigger({
            type: "usage",
            name: "vhs-" + i + "-download-exclusion"
        }),
        i !== "subtitle" && e.blacklistCurrentPlaylist({
            message: "Excessive " + i + " segment downloading detected."
        }, 1 / 0))
    }
    ,
    t.checkCurrentTime_ = function() {
        if (this.tech_.seeking() && this.fixesBadSeeks_()) {
            this.consecutiveUpdates = 0,
            this.lastRecordedTime = this.tech_.currentTime();
            return
        }
        if (!(this.tech_.paused() || this.tech_.seeking())) {
            var i = this.tech_.currentTime()
              , e = this.tech_.buffered();
            if (this.lastRecordedTime === i && (!e.length || i + mt >= e.end(e.length - 1)))
                return this.techWaiting_();
            this.consecutiveUpdates >= 5 && i === this.lastRecordedTime ? (this.consecutiveUpdates++,
            this.waiting_()) : i === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0,
            this.lastRecordedTime = i)
        }
    }
    ,
    t.cancelTimer_ = function() {
        this.consecutiveUpdates = 0,
        this.timer_ && (this.logger_("cancelTimer_"),
        clearTimeout(this.timer_)),
        this.timer_ = null
    }
    ,
    t.fixesBadSeeks_ = function() {
        var i = this.tech_.seeking();
        if (!i)
            return !1;
        var e = this.seekable(), n = this.tech_.currentTime(), s = this.afterSeekableWindow_(e, n, this.media(), this.allowSeeksWithinUnsafeLiveWindow), o;
        if (s) {
            var u = e.end(e.length - 1);
            o = u
        }
        if (this.beforeSeekableWindow_(e, n)) {
            var l = e.start(0);
            o = l + (l === e.end(0) ? 0 : mt)
        }
        if (typeof o < "u")
            return this.logger_("Trying to seek outside of seekable at time " + n + " with " + ("seekable range " + Oc(e) + ". Seeking to ") + (o + ".")),
            this.tech_.setCurrentTime(o),
            !0;
        var c = this.tech_.buffered();
        return ly({
            buffered: c,
            targetDuration: this.media().targetDuration,
            currentTime: n
        }) ? (o = c.start(0) + mt,
        this.logger_("Buffered region starts (" + c.start(0) + ") " + (" just beyond seek point (" + n + "). Seeking to " + o + ".")),
        this.tech_.setCurrentTime(o),
        !0) : !1
    }
    ,
    t.waiting_ = function() {
        if (!this.techWaiting_()) {
            var i = this.tech_.currentTime()
              , e = this.tech_.buffered()
              , n = oi(e, i);
            if (n.length && i + 3 <= n.end(0)) {
                this.cancelTimer_(),
                this.tech_.setCurrentTime(i),
                this.logger_("Stopped at " + i + " while inside a buffered region " + ("[" + n.start(0) + " -> " + n.end(0) + "]. Attempting to resume ") + "playback by seeking to the current time."),
                this.tech_.trigger({
                    type: "usage",
                    name: "vhs-unknown-waiting"
                }),
                this.tech_.trigger({
                    type: "usage",
                    name: "hls-unknown-waiting"
                });
                return
            }
        }
    }
    ,
    t.techWaiting_ = function() {
        var i = this.seekable()
          , e = this.tech_.currentTime();
        if (this.tech_.seeking() && this.fixesBadSeeks_() || this.tech_.seeking() || this.timer_ !== null)
            return !0;
        if (this.beforeSeekableWindow_(i, e)) {
            var n = i.end(i.length - 1);
            return this.logger_("Fell out of live window at time " + e + ". Seeking to " + ("live point (seekable end) " + n)),
            this.cancelTimer_(),
            this.tech_.setCurrentTime(n),
            this.tech_.trigger({
                type: "usage",
                name: "vhs-live-resync"
            }),
            this.tech_.trigger({
                type: "usage",
                name: "hls-live-resync"
            }),
            !0
        }
        var s = this.tech_.vhs.masterPlaylistController_.sourceUpdater_
          , o = this.tech_.buffered()
          , u = this.videoUnderflow_({
            audioBuffered: s.audioBuffered(),
            videoBuffered: s.videoBuffered(),
            currentTime: e
        });
        if (u)
            return this.cancelTimer_(),
            this.tech_.setCurrentTime(e),
            this.tech_.trigger({
                type: "usage",
                name: "vhs-video-underflow"
            }),
            this.tech_.trigger({
                type: "usage",
                name: "hls-video-underflow"
            }),
            !0;
        var l = Va(o, e);
        if (l.length > 0) {
            var c = l.start(0) - e;
            return this.logger_("Stopped at " + e + ", setting timer for " + c + ", seeking " + ("to " + l.start(0))),
            this.cancelTimer_(),
            this.timer_ = setTimeout(this.skipTheGap_.bind(this), c * 1e3, e),
            !0
        }
        return !1
    }
    ,
    t.afterSeekableWindow_ = function(i, e, n, s) {
        if (s === void 0 && (s = !1),
        !i.length)
            return !1;
        var o = i.end(i.length - 1) + mt
          , u = !n.endList;
        return u && s && (o = i.end(i.length - 1) + n.targetDuration * 3),
        e > o
    }
    ,
    t.beforeSeekableWindow_ = function(i, e) {
        return !!(i.length && i.start(0) > 0 && e < i.start(0) - this.liveRangeSafeTimeDelta)
    }
    ,
    t.videoUnderflow_ = function(i) {
        var e = i.videoBuffered
          , n = i.audioBuffered
          , s = i.currentTime;
        if (e) {
            var o;
            if (e.length && n.length) {
                var u = oi(e, s - 3)
                  , l = oi(e, s)
                  , c = oi(n, s);
                c.length && !l.length && u.length && (o = {
                    start: u.end(0),
                    end: c.end(0)
                })
            } else {
                var p = Va(e, s);
                p.length || (o = this.gapFromVideoUnderflow_(e, s))
            }
            return o ? (this.logger_("Encountered a gap in video from " + o.start + " to " + o.end + ". " + ("Seeking to current time " + s)),
            !0) : !1
        }
    }
    ,
    t.skipTheGap_ = function(i) {
        var e = this.tech_.buffered()
          , n = this.tech_.currentTime()
          , s = Va(e, n);
        this.cancelTimer_(),
        !(s.length === 0 || n !== i) && (this.logger_("skipTheGap_:", "currentTime:", n, "scheduled currentTime:", i, "nextRange start:", s.start(0)),
        this.tech_.setCurrentTime(s.start(0) + rr),
        this.tech_.trigger({
            type: "usage",
            name: "vhs-gap-skip"
        }),
        this.tech_.trigger({
            type: "usage",
            name: "hls-gap-skip"
        }))
    }
    ,
    t.gapFromVideoUnderflow_ = function(i, e) {
        for (var n = r0(i), s = 0; s < n.length; s++) {
            var o = n.start(s)
              , u = n.end(s);
            if (e - o < 4 && e - o > 2)
                return {
                    start: o,
                    end: u
                }
        }
        return null
    }
    ,
    a
}(), cy = {
    errorInterval: 30,
    getSource: function(t) {
        var r = this.tech({
            IWillNotUseThisInPlugins: !0
        })
          , i = r.currentSource_ || this.currentSource();
        return t(i)
    }
}, fy = function a(t, r) {
    var i = 0
      , e = 0
      , n = I.mergeOptions(cy, r);
    t.ready(function() {
        t.trigger({
            type: "usage",
            name: "vhs-error-reload-initialized"
        }),
        t.trigger({
            type: "usage",
            name: "hls-error-reload-initialized"
        })
    });
    var s = function() {
        e && t.currentTime(e)
    }
      , o = function(g) {
        g != null && (e = t.duration() !== 1 / 0 && t.currentTime() || 0,
        t.one("loadedmetadata", s),
        t.src(g),
        t.trigger({
            type: "usage",
            name: "vhs-error-reload"
        }),
        t.trigger({
            type: "usage",
            name: "hls-error-reload"
        }),
        t.play())
    }
      , u = function() {
        if (Date.now() - i < n.errorInterval * 1e3) {
            t.trigger({
                type: "usage",
                name: "vhs-error-reload-canceled"
            }),
            t.trigger({
                type: "usage",
                name: "hls-error-reload-canceled"
            });
            return
        }
        if (!n.getSource || typeof n.getSource != "function") {
            I.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
            return
        }
        return i = Date.now(),
        n.getSource.call(t, o)
    }
      , l = function p() {
        t.off("loadedmetadata", s),
        t.off("error", u),
        t.off("dispose", p)
    }
      , c = function(g) {
        l(),
        a(t, g)
    };
    t.on("error", u),
    t.on("dispose", l),
    t.reloadSourceOnError = c
}, Pl = function(t) {
    fy(this, t)
}, _f = "2.9.1", hy = "5.11.1", py = "0.17.0", my = "4.7.0", gy = "3.1.2", Ie = {
    PlaylistLoader: Tr,
    Playlist: We,
    utils: P0,
    STANDARD_PLAYLIST_SELECTOR: _l,
    INITIAL_PLAYLIST_SELECTOR: g_,
    lastBandwidthSelector: _l,
    movingAverageBandwidthSelector: p_,
    comparePlaylistBandwidth: bo,
    comparePlaylistResolution: h_,
    xhr: Kc()
};
Object.keys(Ee).forEach(function(a) {
    Object.defineProperty(Ie, a, {
        get: function() {
            return I.log.warn("using Vhs." + a + " is UNSAFE be sure you know what you are doing"),
            Ee[a]
        },
        set: function(r) {
            if (I.log.warn("using Vhs." + a + " is UNSAFE be sure you know what you are doing"),
            typeof r != "number" || r < 0) {
                I.log.warn("value of Vhs." + a + " must be greater than or equal to 0");
                return
            }
            Ee[a] = r
        }
    })
});
var yf = "videojs-vhs"
  , Tf = function(t, r) {
    for (var i = r.media(), e = -1, n = 0; n < t.length; n++)
        if (t[n].id === i.id) {
            e = n;
            break
        }
    t.selectedIndex_ = e,
    t.trigger({
        selectedIndex: e,
        type: "change"
    })
}
  , vy = function(t, r) {
    r.representations().forEach(function(i) {
        t.addQualityLevel(i)
    }),
    Tf(t, r.playlists)
};
Ie.canPlaySource = function() {
    return I.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
}
;
var _y = function(t, r, i) {
    if (!t)
        return t;
    var e = {};
    r && r.attributes && r.attributes.CODECS && (e = Rn(ht(r.attributes.CODECS))),
    i && i.attributes && i.attributes.CODECS && (e.audio = i.attributes.CODECS);
    var n = pi(e.video)
      , s = pi(e.audio)
      , o = {};
    for (var u in t)
        o[u] = {},
        s && (o[u].audioContentType = s),
        n && (o[u].videoContentType = n),
        r.contentProtection && r.contentProtection[u] && r.contentProtection[u].pssh && (o[u].pssh = r.contentProtection[u].pssh),
        typeof t[u] == "string" && (o[u].url = t[u]);
    return I.mergeOptions(t, o)
}
  , yy = function(t, r) {
    return t.reduce(function(i, e) {
        if (!e.contentProtection)
            return i;
        var n = r.reduce(function(s, o) {
            var u = e.contentProtection[o];
            return u && u.pssh && (s[o] = {
                pssh: u.pssh
            }),
            s
        }, {});
        return Object.keys(n).length && i.push(n),
        i
    }, [])
}
  , Ty = function(t) {
    var r = t.player
      , i = t.sourceKeySystems
      , e = t.audioMedia
      , n = t.mainPlaylists;
    if (!r.eme.initializeMediaKeys)
        return Promise.resolve();
    var s = e ? n.concat([e]) : n
      , o = yy(s, Object.keys(i))
      , u = []
      , l = [];
    return o.forEach(function(c) {
        l.push(new Promise(function(p, g) {
            r.tech_.one("keysessioncreated", p)
        }
        )),
        u.push(new Promise(function(p, g) {
            r.eme.initializeMediaKeys({
                keySystems: c
            }, function(y) {
                if (y) {
                    g(y);
                    return
                }
                p()
            })
        }
        ))
    }),
    Promise.race([Promise.all(u), Promise.race(l)])
}
  , by = function(t) {
    var r = t.player
      , i = t.sourceKeySystems
      , e = t.media
      , n = t.audioMedia
      , s = _y(i, e, n);
    return s ? (r.currentSource().keySystems = s,
    s && !r.eme ? (I.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"),
    !1) : !0) : !1
}
  , bf = function() {
    if (!A.localStorage)
        return null;
    var t = A.localStorage.getItem(yf);
    if (!t)
        return null;
    try {
        return JSON.parse(t)
    } catch {
        return null
    }
}
  , xy = function(t) {
    if (!A.localStorage)
        return !1;
    var r = bf();
    r = r ? I.mergeOptions(r, t) : t;
    try {
        A.localStorage.setItem(yf, JSON.stringify(r))
    } catch {
        return !1
    }
    return r
}
  , Sy = function(t) {
    return t.toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") === 0 ? JSON.parse(t.substring(t.indexOf(",") + 1)) : t
};
Ie.supportsNativeHls = function() {
    if (!V || !V.createElement)
        return !1;
    var a = V.createElement("video");
    if (!I.getTech("Html5").isSupported())
        return !1;
    var t = ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"];
    return t.some(function(r) {
        return /maybe|probably/i.test(a.canPlayType(r))
    })
}();
Ie.supportsNativeDash = function() {
    return !V || !V.createElement || !I.getTech("Html5").isSupported() ? !1 : /maybe|probably/i.test(V.createElement("video").canPlayType("application/dash+xml"))
}();
Ie.supportsTypeNatively = function(a) {
    return a === "hls" ? Ie.supportsNativeHls : a === "dash" ? Ie.supportsNativeDash : !1
}
;
Ie.isSupported = function() {
    return I.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
}
;
var Ey = I.getComponent("Component")
  , So = function(a) {
    G(t, a);
    function t(i, e, n) {
        var s;
        if (s = a.call(this, e, I.mergeOptions(n.hls, n.vhs)) || this,
        n.hls && Object.keys(n.hls).length && I.log.warn("Using hls options is deprecated. Use vhs instead."),
        typeof n.initialBandwidth == "number" && (s.options_.bandwidth = n.initialBandwidth),
        s.logger_ = dt("VhsHandler"),
        e.options_ && e.options_.playerId) {
            var o = I(e.options_.playerId);
            o.hasOwnProperty("hls") || Object.defineProperty(o, "hls", {
                get: function() {
                    return I.log.warn("player.hls is deprecated. Use player.tech().vhs instead."),
                    e.trigger({
                        type: "usage",
                        name: "hls-player-access"
                    }),
                    Y(s)
                },
                configurable: !0
            }),
            o.hasOwnProperty("vhs") || Object.defineProperty(o, "vhs", {
                get: function() {
                    return I.log.warn("player.vhs is deprecated. Use player.tech().vhs instead."),
                    e.trigger({
                        type: "usage",
                        name: "vhs-player-access"
                    }),
                    Y(s)
                },
                configurable: !0
            }),
            o.hasOwnProperty("dash") || Object.defineProperty(o, "dash", {
                get: function() {
                    return I.log.warn("player.dash is deprecated. Use player.tech().vhs instead."),
                    Y(s)
                },
                configurable: !0
            }),
            s.player_ = o
        }
        if (s.tech_ = e,
        s.source_ = i,
        s.stats = {},
        s.ignoreNextSeekingEvent_ = !1,
        s.setOptions_(),
        s.options_.overrideNative && e.overrideNativeAudioTracks && e.overrideNativeVideoTracks)
            e.overrideNativeAudioTracks(!0),
            e.overrideNativeVideoTracks(!0);
        else if (s.options_.overrideNative && (e.featuresNativeVideoTracks || e.featuresNativeAudioTracks))
            throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
        return s.on(V, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function(u) {
            var l = V.fullscreenElement || V.webkitFullscreenElement || V.mozFullScreenElement || V.msFullscreenElement;
            l && l.contains(s.tech_.el()) ? s.masterPlaylistController_.fastQualityChange_() : s.masterPlaylistController_.checkABR_()
        }),
        s.on(s.tech_, "seeking", function() {
            if (this.ignoreNextSeekingEvent_) {
                this.ignoreNextSeekingEvent_ = !1;
                return
            }
            this.setCurrentTime(this.tech_.currentTime())
        }),
        s.on(s.tech_, "error", function() {
            this.tech_.error() && this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
        }),
        s.on(s.tech_, "play", s.play),
        s
    }
    var r = t.prototype;
    return r.setOptions_ = function() {
        var e = this;
        if (this.options_.withCredentials = this.options_.withCredentials || !1,
        this.options_.handleManifestRedirects = this.options_.handleManifestRedirects !== !1,
        this.options_.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions !== !1,
        this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1,
        this.options_.smoothQualityChange = this.options_.smoothQualityChange || !1,
        this.options_.useBandwidthFromLocalStorage = typeof this.source_.useBandwidthFromLocalStorage < "u" ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1,
        this.options_.customTagParsers = this.options_.customTagParsers || [],
        this.options_.customTagMappers = this.options_.customTagMappers || [],
        this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1,
        typeof this.options_.blacklistDuration != "number" && (this.options_.blacklistDuration = 5 * 60),
        typeof this.options_.bandwidth != "number" && this.options_.useBandwidthFromLocalStorage) {
            var n = bf();
            n && n.bandwidth && (this.options_.bandwidth = n.bandwidth,
            this.tech_.trigger({
                type: "usage",
                name: "vhs-bandwidth-from-local-storage"
            }),
            this.tech_.trigger({
                type: "usage",
                name: "hls-bandwidth-from-local-storage"
            })),
            n && n.throughput && (this.options_.throughput = n.throughput,
            this.tech_.trigger({
                type: "usage",
                name: "vhs-throughput-from-local-storage"
            }),
            this.tech_.trigger({
                type: "usage",
                name: "hls-throughput-from-local-storage"
            }))
        }
        typeof this.options_.bandwidth != "number" && (this.options_.bandwidth = Ee.INITIAL_BANDWIDTH),
        this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === Ee.INITIAL_BANDWIDTH,
        ["withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "smoothQualityChange", "customTagParsers", "customTagMappers", "handleManifestRedirects", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "experimentalBufferBasedABR", "liveRangeSafeTimeDelta", "experimentalLLHLS"].forEach(function(s) {
            typeof e.source_[s] < "u" && (e.options_[s] = e.source_[s])
        }),
        this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions,
        this.useDevicePixelRatio = this.options_.useDevicePixelRatio
    }
    ,
    r.src = function(e, n) {
        var s = this;
        if (e) {
            this.setOptions_(),
            this.options_.src = Sy(this.source_.src),
            this.options_.tech = this.tech_,
            this.options_.externVhs = Ie,
            this.options_.sourceType = Wl(n),
            this.options_.seekTo = function(l) {
                s.tech_.setCurrentTime(l)
            }
            ,
            this.options_.smoothQualityChange && I.log.warn("smoothQualityChange is deprecated and will be removed in the next major version"),
            this.masterPlaylistController_ = new ay(this.options_);
            var o = I.mergeOptions({
                liveRangeSafeTimeDelta: mt
            }, this.options_, {
                seekable: function() {
                    return s.seekable()
                },
                media: function() {
                    return s.masterPlaylistController_.media()
                },
                masterPlaylistController: this.masterPlaylistController_
            });
            this.playbackWatcher_ = new dy(o),
            this.masterPlaylistController_.on("error", function() {
                var l = I.players[s.tech_.options_.playerId]
                  , c = s.masterPlaylistController_.error;
                typeof c == "object" && !c.code ? c.code = 3 : typeof c == "string" && (c = {
                    message: c,
                    code: 3
                }),
                l.error(c)
            });
            var u = this.options_.experimentalBufferBasedABR ? Ie.movingAverageBandwidthSelector(.55) : Ie.STANDARD_PLAYLIST_SELECTOR;
            this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : u.bind(this),
            this.masterPlaylistController_.selectInitialPlaylist = Ie.INITIAL_PLAYLIST_SELECTOR.bind(this),
            this.playlists = this.masterPlaylistController_.masterPlaylistLoader_,
            this.mediaSource = this.masterPlaylistController_.mediaSource,
            Object.defineProperties(this, {
                selectPlaylist: {
                    get: function() {
                        return this.masterPlaylistController_.selectPlaylist
                    },
                    set: function(c) {
                        this.masterPlaylistController_.selectPlaylist = c.bind(this)
                    }
                },
                throughput: {
                    get: function() {
                        return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
                    },
                    set: function(c) {
                        this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = c,
                        this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
                    }
                },
                bandwidth: {
                    get: function() {
                        return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
                    },
                    set: function(c) {
                        this.masterPlaylistController_.mainSegmentLoader_.bandwidth = c,
                        this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                            rate: 0,
                            count: 0
                        }
                    }
                },
                systemBandwidth: {
                    get: function() {
                        var c = 1 / (this.bandwidth || 1), p;
                        this.throughput > 0 ? p = 1 / this.throughput : p = 0;
                        var g = Math.floor(1 / (c + p));
                        return g
                    },
                    set: function() {
                        I.log.error('The "systemBandwidth" property is read-only')
                    }
                }
            }),
            this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth),
            this.options_.throughput && (this.throughput = this.options_.throughput),
            Object.defineProperties(this.stats, {
                bandwidth: {
                    get: function() {
                        return s.bandwidth || 0
                    },
                    enumerable: !0
                },
                mediaRequests: {
                    get: function() {
                        return s.masterPlaylistController_.mediaRequests_() || 0
                    },
                    enumerable: !0
                },
                mediaRequestsAborted: {
                    get: function() {
                        return s.masterPlaylistController_.mediaRequestsAborted_() || 0
                    },
                    enumerable: !0
                },
                mediaRequestsTimedout: {
                    get: function() {
                        return s.masterPlaylistController_.mediaRequestsTimedout_() || 0
                    },
                    enumerable: !0
                },
                mediaRequestsErrored: {
                    get: function() {
                        return s.masterPlaylistController_.mediaRequestsErrored_() || 0
                    },
                    enumerable: !0
                },
                mediaTransferDuration: {
                    get: function() {
                        return s.masterPlaylistController_.mediaTransferDuration_() || 0
                    },
                    enumerable: !0
                },
                mediaBytesTransferred: {
                    get: function() {
                        return s.masterPlaylistController_.mediaBytesTransferred_() || 0
                    },
                    enumerable: !0
                },
                mediaSecondsLoaded: {
                    get: function() {
                        return s.masterPlaylistController_.mediaSecondsLoaded_() || 0
                    },
                    enumerable: !0
                },
                mediaAppends: {
                    get: function() {
                        return s.masterPlaylistController_.mediaAppends_() || 0
                    },
                    enumerable: !0
                },
                mainAppendsToLoadedData: {
                    get: function() {
                        return s.masterPlaylistController_.mainAppendsToLoadedData_() || 0
                    },
                    enumerable: !0
                },
                audioAppendsToLoadedData: {
                    get: function() {
                        return s.masterPlaylistController_.audioAppendsToLoadedData_() || 0
                    },
                    enumerable: !0
                },
                appendsToLoadedData: {
                    get: function() {
                        return s.masterPlaylistController_.appendsToLoadedData_() || 0
                    },
                    enumerable: !0
                },
                timeToLoadedData: {
                    get: function() {
                        return s.masterPlaylistController_.timeToLoadedData_() || 0
                    },
                    enumerable: !0
                },
                buffered: {
                    get: function() {
                        return Yt(s.tech_.buffered())
                    },
                    enumerable: !0
                },
                currentTime: {
                    get: function() {
                        return s.tech_.currentTime()
                    },
                    enumerable: !0
                },
                currentSource: {
                    get: function() {
                        return s.tech_.currentSource_
                    },
                    enumerable: !0
                },
                currentTech: {
                    get: function() {
                        return s.tech_.name_
                    },
                    enumerable: !0
                },
                duration: {
                    get: function() {
                        return s.tech_.duration()
                    },
                    enumerable: !0
                },
                master: {
                    get: function() {
                        return s.playlists.master
                    },
                    enumerable: !0
                },
                playerDimensions: {
                    get: function() {
                        return s.tech_.currentDimensions()
                    },
                    enumerable: !0
                },
                seekable: {
                    get: function() {
                        return Yt(s.tech_.seekable())
                    },
                    enumerable: !0
                },
                timestamp: {
                    get: function() {
                        return Date.now()
                    },
                    enumerable: !0
                },
                videoPlaybackQuality: {
                    get: function() {
                        return s.tech_.getVideoPlaybackQuality()
                    },
                    enumerable: !0
                }
            }),
            this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),
            this.tech_.on("bandwidthupdate", function() {
                s.options_.useBandwidthFromLocalStorage && xy({
                    bandwidth: s.bandwidth,
                    throughput: Math.round(s.throughput)
                })
            }),
            this.masterPlaylistController_.on("selectedinitialmedia", function() {
                uy(s)
            }),
            this.masterPlaylistController_.sourceUpdater_.on("createdsourcebuffers", function() {
                s.setupEme_()
            }),
            this.on(this.masterPlaylistController_, "progress", function() {
                this.tech_.trigger("progress")
            }),
            this.on(this.masterPlaylistController_, "firstplay", function() {
                this.ignoreNextSeekingEvent_ = !0
            }),
            this.setupQualityLevels_(),
            this.tech_.el() && (this.mediaSourceUrl_ = A.URL.createObjectURL(this.masterPlaylistController_.mediaSource),
            this.tech_.src(this.mediaSourceUrl_))
        }
    }
    ,
    r.setupEme_ = function() {
        var e = this
          , n = this.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader
          , s = by({
            player: this.player_,
            sourceKeySystems: this.source_.keySystems,
            media: this.playlists.media(),
            audioMedia: n && n.media()
        });
        if (I.browser.IE_VERSION === 11 || !s) {
            this.masterPlaylistController_.sourceUpdater_.initializedEme();
            return
        }
        this.logger_("waiting for EME key session creation"),
        Ty({
            player: this.player_,
            sourceKeySystems: this.source_.keySystems,
            audioMedia: n && n.media(),
            mainPlaylists: this.playlists.master.playlists
        }).then(function() {
            e.logger_("created EME key session"),
            e.masterPlaylistController_.sourceUpdater_.initializedEme()
        }).catch(function(o) {
            e.logger_("error while creating EME key session", o),
            e.player_.error({
                message: "Failed to initialize media keys for EME",
                code: 3
            })
        })
    }
    ,
    r.setupQualityLevels_ = function() {
        var e = this
          , n = I.players[this.tech_.options_.playerId];
        !n || !n.qualityLevels || this.qualityLevels_ || (this.qualityLevels_ = n.qualityLevels(),
        this.masterPlaylistController_.on("selectedinitialmedia", function() {
            vy(e.qualityLevels_, e)
        }),
        this.playlists.on("mediachange", function() {
            Tf(e.qualityLevels_, e.playlists)
        }))
    }
    ,
    t.version = function() {
        return {
            "@videojs/http-streaming": _f,
            "mux.js": hy,
            "mpd-parser": py,
            "m3u8-parser": my,
            "aes-decrypter": gy
        }
    }
    ,
    r.version = function() {
        return this.constructor.version()
    }
    ,
    r.canChangeType = function() {
        return vf.canChangeType()
    }
    ,
    r.play = function() {
        this.masterPlaylistController_.play()
    }
    ,
    r.setCurrentTime = function(e) {
        this.masterPlaylistController_.setCurrentTime(e)
    }
    ,
    r.duration = function() {
        return this.masterPlaylistController_.duration()
    }
    ,
    r.seekable = function() {
        return this.masterPlaylistController_.seekable()
    }
    ,
    r.dispose = function() {
        this.playbackWatcher_ && this.playbackWatcher_.dispose(),
        this.masterPlaylistController_ && this.masterPlaylistController_.dispose(),
        this.qualityLevels_ && this.qualityLevels_.dispose(),
        this.player_ && (delete this.player_.vhs,
        delete this.player_.dash,
        delete this.player_.hls),
        this.tech_ && this.tech_.vhs && delete this.tech_.vhs,
        this.tech_ && delete this.tech_.hls,
        this.mediaSourceUrl_ && A.URL.revokeObjectURL && (A.URL.revokeObjectURL(this.mediaSourceUrl_),
        this.mediaSourceUrl_ = null),
        a.prototype.dispose.call(this)
    }
    ,
    r.convertToProgramTime = function(e, n) {
        return F0({
            playlist: this.masterPlaylistController_.media(),
            time: e,
            callback: n
        })
    }
    ,
    r.seekToProgramTime = function(e, n, s, o) {
        return s === void 0 && (s = !0),
        o === void 0 && (o = 2),
        N0({
            programTime: e,
            playlist: this.masterPlaylistController_.media(),
            retryCount: o,
            pauseAfterSeek: s,
            seekTo: this.options_.seekTo,
            tech: this.options_.tech,
            callback: n
        })
    }
    ,
    t
}(Ey)
  , na = {
    name: "videojs-http-streaming",
    VERSION: _f,
    canHandleSource: function(t, r) {
        r === void 0 && (r = {});
        var i = I.mergeOptions(I.options, r);
        return na.canPlayType(t.type, i)
    },
    handleSource: function(t, r, i) {
        i === void 0 && (i = {});
        var e = I.mergeOptions(I.options, i);
        return r.vhs = new So(t,r,e),
        I.hasOwnProperty("hls") || Object.defineProperty(r, "hls", {
            get: function() {
                return I.log.warn("player.tech().hls is deprecated. Use player.tech().vhs instead."),
                r.vhs
            },
            configurable: !0
        }),
        r.vhs.xhr = Kc(),
        r.vhs.src(t.src, t.type),
        r.vhs
    },
    canPlayType: function(t, r) {
        r === void 0 && (r = {});
        var i = I.mergeOptions(I.options, r)
          , e = i.vhs.overrideNative
          , n = e === void 0 ? !I.browser.IS_ANY_SAFARI : e
          , s = Wl(t)
          , o = s && (!Ie.supportsTypeNatively(s) || n);
        return o ? "maybe" : ""
    }
}
  , Cy = function() {
    return ln("avc1.4d400d,mp4a.40.2")
};
Cy() && I.getTech("Html5").registerSourceHandler(na, 0);
I.VhsHandler = So;
Object.defineProperty(I, "HlsHandler", {
    get: function() {
        return I.log.warn("videojs.HlsHandler is deprecated. Use videojs.VhsHandler instead."),
        So
    },
    configurable: !0
});
I.VhsSourceHandler = na;
Object.defineProperty(I, "HlsSourceHandler", {
    get: function() {
        return I.log.warn("videojs.HlsSourceHandler is deprecated. Use videojs.VhsSourceHandler instead."),
        na
    },
    configurable: !0
});
I.Vhs = Ie;
Object.defineProperty(I, "Hls", {
    get: function() {
        return I.log.warn("videojs.Hls is deprecated. Use videojs.Vhs instead."),
        Ie
    },
    configurable: !0
});
I.use || (I.registerComponent("Hls", Ie),
I.registerComponent("Vhs", Ie));
I.options.vhs = I.options.vhs || {};
I.options.hls = I.options.hls || {};
I.registerPlugin ? I.registerPlugin("reloadSourceOnError", Pl) : I.plugin("reloadSourceOnError", Pl);
export {I as v};
