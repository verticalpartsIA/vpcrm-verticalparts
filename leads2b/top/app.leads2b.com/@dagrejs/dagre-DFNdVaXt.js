import {g as Z, h as me, i as st} from "../vendor-DIc2GtcL.js";
var We = {
    exports: {}
};
(function(r, e) {
    (function(t, n) {
        r.exports = n()
    }
    )(Z, function() {
        var t = 1e3
          , n = 6e4
          , s = 36e5
          , i = "millisecond"
          , u = "second"
          , c = "minute"
          , b = "hour"
          , p = "day"
          , w = "week"
          , d = "month"
          , D = "quarter"
          , g = "year"
          , _ = "date"
          , M = "Invalid Date"
          , j = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
          , U = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , f = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(a) {
                var o = ["th", "st", "nd", "rd"]
                  , l = a % 100;
                return "[" + a + (o[(l - 20) % 10] || o[l] || o[0]) + "]"
            }
        }
          , v = function(a, o, l) {
            var y = String(a);
            return !y || y.length >= o ? a : "" + Array(o + 1 - y.length).join(l) + a
        }
          , E = {
            s: v,
            z: function(a) {
                var o = -a.utcOffset()
                  , l = Math.abs(o)
                  , y = Math.floor(l / 60)
                  , h = l % 60;
                return (o <= 0 ? "+" : "-") + v(y, 2, "0") + ":" + v(h, 2, "0")
            },
            m: function a(o, l) {
                if (o.date() < l.date())
                    return -a(l, o);
                var y = 12 * (l.year() - o.year()) + (l.month() - o.month())
                  , h = o.clone().add(y, d)
                  , m = l - h < 0
                  , O = o.clone().add(y + (m ? -1 : 1), d);
                return +(-(y + (l - h) / (m ? h - O : O - h)) || 0)
            },
            a: function(a) {
                return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
            },
            p: function(a) {
                return {
                    M: d,
                    y: g,
                    w,
                    d: p,
                    D: _,
                    h: b,
                    m: c,
                    s: u,
                    ms: i,
                    Q: D
                }[a] || String(a || "").toLowerCase().replace(/s$/, "")
            },
            u: function(a) {
                return a === void 0
            }
        }
          , S = "en"
          , x = {};
        x[S] = f;
        var L = "$isDayjsObject"
          , B = function(a) {
            return a instanceof ee || !(!a || !a[L])
        }
          , z = function a(o, l, y) {
            var h;
            if (!o)
                return S;
            if (typeof o == "string") {
                var m = o.toLowerCase();
                x[m] && (h = m),
                l && (x[m] = l,
                h = m);
                var O = o.split("-");
                if (!h && O.length > 1)
                    return a(O[0])
            } else {
                var R = o.name;
                x[R] = o,
                h = R
            }
            return !y && h && (S = h),
            h || !y && S
        }
          , q = function(a, o) {
            if (B(a))
                return a.clone();
            var l = typeof o == "object" ? o : {};
            return l.date = a,
            l.args = arguments,
            new ee(l)
        }
          , A = E;
        A.l = z,
        A.i = B,
        A.w = function(a, o) {
            return q(a, {
                locale: o.$L,
                utc: o.$u,
                x: o.$x,
                $offset: o.$offset
            })
        }
        ;
        var ee = function() {
            function a(l) {
                this.$L = z(l.locale, null, !0),
                this.parse(l),
                this.$x = this.$x || l.x || {},
                this[L] = !0
            }
            var o = a.prototype;
            return o.parse = function(l) {
                this.$d = function(y) {
                    var h = y.date
                      , m = y.utc;
                    if (h === null)
                        return new Date(NaN);
                    if (A.u(h))
                        return new Date;
                    if (h instanceof Date)
                        return new Date(h);
                    if (typeof h == "string" && !/Z$/i.test(h)) {
                        var O = h.match(j);
                        if (O) {
                            var R = O[2] - 1 || 0
                              , $ = (O[7] || "0").substring(0, 3);
                            return m ? new Date(Date.UTC(O[1], R, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, $)) : new Date(O[1],R,O[3] || 1,O[4] || 0,O[5] || 0,O[6] || 0,$)
                        }
                    }
                    return new Date(h)
                }(l),
                this.init()
            }
            ,
            o.init = function() {
                var l = this.$d;
                this.$y = l.getFullYear(),
                this.$M = l.getMonth(),
                this.$D = l.getDate(),
                this.$W = l.getDay(),
                this.$H = l.getHours(),
                this.$m = l.getMinutes(),
                this.$s = l.getSeconds(),
                this.$ms = l.getMilliseconds()
            }
            ,
            o.$utils = function() {
                return A
            }
            ,
            o.isValid = function() {
                return this.$d.toString() !== M
            }
            ,
            o.isSame = function(l, y) {
                var h = q(l);
                return this.startOf(y) <= h && h <= this.endOf(y)
            }
            ,
            o.isAfter = function(l, y) {
                return q(l) < this.startOf(y)
            }
            ,
            o.isBefore = function(l, y) {
                return this.endOf(y) < q(l)
            }
            ,
            o.$g = function(l, y, h) {
                return A.u(l) ? this[y] : this.set(h, l)
            }
            ,
            o.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            o.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            o.startOf = function(l, y) {
                var h = this
                  , m = !!A.u(y) || y
                  , O = A.p(l)
                  , R = function(J, N) {
                    var W = A.w(h.$u ? Date.UTC(h.$y, N, J) : new Date(h.$y,N,J), h);
                    return m ? W : W.endOf(p)
                }
                  , $ = function(J, N) {
                    return A.w(h.toDate()[J].apply(h.toDate("s"), (m ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(N)), h)
                }
                  , I = this.$W
                  , F = this.$M
                  , C = this.$D
                  , re = "set" + (this.$u ? "UTC" : "");
                switch (O) {
                case g:
                    return m ? R(1, 0) : R(31, 11);
                case d:
                    return m ? R(1, F) : R(0, F + 1);
                case w:
                    var X = this.$locale().weekStart || 0
                      , oe = (I < X ? I + 7 : I) - X;
                    return R(m ? C - oe : C + (6 - oe), F);
                case p:
                case _:
                    return $(re + "Hours", 0);
                case b:
                    return $(re + "Minutes", 1);
                case c:
                    return $(re + "Seconds", 2);
                case u:
                    return $(re + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            o.endOf = function(l) {
                return this.startOf(l, !1)
            }
            ,
            o.$set = function(l, y) {
                var h, m = A.p(l), O = "set" + (this.$u ? "UTC" : ""), R = (h = {},
                h[p] = O + "Date",
                h[_] = O + "Date",
                h[d] = O + "Month",
                h[g] = O + "FullYear",
                h[b] = O + "Hours",
                h[c] = O + "Minutes",
                h[u] = O + "Seconds",
                h[i] = O + "Milliseconds",
                h)[m], $ = m === p ? this.$D + (y - this.$W) : y;
                if (m === d || m === g) {
                    var I = this.clone().set(_, 1);
                    I.$d[R]($),
                    I.init(),
                    this.$d = I.set(_, Math.min(this.$D, I.daysInMonth())).$d
                } else
                    R && this.$d[R]($);
                return this.init(),
                this
            }
            ,
            o.set = function(l, y) {
                return this.clone().$set(l, y)
            }
            ,
            o.get = function(l) {
                return this[A.p(l)]()
            }
            ,
            o.add = function(l, y) {
                var h, m = this;
                l = Number(l);
                var O = A.p(y)
                  , R = function(F) {
                    var C = q(m);
                    return A.w(C.date(C.date() + Math.round(F * l)), m)
                };
                if (O === d)
                    return this.set(d, this.$M + l);
                if (O === g)
                    return this.set(g, this.$y + l);
                if (O === p)
                    return R(1);
                if (O === w)
                    return R(7);
                var $ = (h = {},
                h[c] = n,
                h[b] = s,
                h[u] = t,
                h)[O] || 1
                  , I = this.$d.getTime() + l * $;
                return A.w(I, this)
            }
            ,
            o.subtract = function(l, y) {
                return this.add(-1 * l, y)
            }
            ,
            o.format = function(l) {
                var y = this
                  , h = this.$locale();
                if (!this.isValid())
                    return h.invalidDate || M;
                var m = l || "YYYY-MM-DDTHH:mm:ssZ"
                  , O = A.z(this)
                  , R = this.$H
                  , $ = this.$m
                  , I = this.$M
                  , F = h.weekdays
                  , C = h.months
                  , re = h.meridiem
                  , X = function(N, W, ce, he) {
                    return N && (N[W] || N(y, m)) || ce[W].slice(0, he)
                }
                  , oe = function(N) {
                    return A.s(R % 12 || 12, N, "0")
                }
                  , J = re || function(N, W, ce) {
                    var he = N < 12 ? "AM" : "PM";
                    return ce ? he.toLowerCase() : he
                }
                ;
                return m.replace(U, function(N, W) {
                    return W || function(ce) {
                        switch (ce) {
                        case "YY":
                            return String(y.$y).slice(-2);
                        case "YYYY":
                            return A.s(y.$y, 4, "0");
                        case "M":
                            return I + 1;
                        case "MM":
                            return A.s(I + 1, 2, "0");
                        case "MMM":
                            return X(h.monthsShort, I, C, 3);
                        case "MMMM":
                            return X(C, I);
                        case "D":
                            return y.$D;
                        case "DD":
                            return A.s(y.$D, 2, "0");
                        case "d":
                            return String(y.$W);
                        case "dd":
                            return X(h.weekdaysMin, y.$W, F, 2);
                        case "ddd":
                            return X(h.weekdaysShort, y.$W, F, 3);
                        case "dddd":
                            return F[y.$W];
                        case "H":
                            return String(R);
                        case "HH":
                            return A.s(R, 2, "0");
                        case "h":
                            return oe(1);
                        case "hh":
                            return oe(2);
                        case "a":
                            return J(R, $, !0);
                        case "A":
                            return J(R, $, !1);
                        case "m":
                            return String($);
                        case "mm":
                            return A.s($, 2, "0");
                        case "s":
                            return String(y.$s);
                        case "ss":
                            return A.s(y.$s, 2, "0");
                        case "SSS":
                            return A.s(y.$ms, 3, "0");
                        case "Z":
                            return O
                        }
                        return null
                    }(N) || O.replace(":", "")
                })
            }
            ,
            o.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            o.diff = function(l, y, h) {
                var m, O = this, R = A.p(y), $ = q(l), I = ($.utcOffset() - this.utcOffset()) * n, F = this - $, C = function() {
                    return A.m(O, $)
                };
                switch (R) {
                case g:
                    m = C() / 12;
                    break;
                case d:
                    m = C();
                    break;
                case D:
                    m = C() / 3;
                    break;
                case w:
                    m = (F - I) / 6048e5;
                    break;
                case p:
                    m = (F - I) / 864e5;
                    break;
                case b:
                    m = F / s;
                    break;
                case c:
                    m = F / n;
                    break;
                case u:
                    m = F / t;
                    break;
                default:
                    m = F
                }
                return h ? m : A.a(m)
            }
            ,
            o.daysInMonth = function() {
                return this.endOf(d).$D
            }
            ,
            o.$locale = function() {
                return x[this.$L]
            }
            ,
            o.locale = function(l, y) {
                if (!l)
                    return this.$L;
                var h = this.clone()
                  , m = z(l, y, !0);
                return m && (h.$L = m),
                h
            }
            ,
            o.clone = function() {
                return A.w(this.$d, this)
            }
            ,
            o.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            o.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            o.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            o.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            a
        }()
          , te = ee.prototype;
        return q.prototype = te,
        [["$ms", i], ["$s", u], ["$m", c], ["$H", b], ["$W", p], ["$M", d], ["$y", g], ["$D", _]].forEach(function(a) {
            te[a[1]] = function(o) {
                return this.$g(o, a[0], a[1])
            }
        }),
        q.extend = function(a, o) {
            return a.$i || (a(o, ee, q),
            a.$i = !0),
            q
        }
        ,
        q.locale = z,
        q.isDayjs = B,
        q.unix = function(a) {
            return q(1e3 * a)
        }
        ,
        q.en = x[S],
        q.Ls = x,
        q.p = {},
        q
    })
}
)(We);
var it = We.exports;
const ne = me(it);
var Xe = {
    exports: {}
};
(function(r, e) {
    (function(t, n) {
        r.exports = n()
    }
    )(Z, function() {
        var t = "month"
          , n = "quarter";
        return function(s, i) {
            var u = i.prototype;
            u.quarter = function(p) {
                return this.$utils().u(p) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (p - 1))
            }
            ;
            var c = u.add;
            u.add = function(p, w) {
                return p = Number(p),
                this.$utils().p(w) === n ? this.add(3 * p, t) : c.bind(this)(p, w)
            }
            ;
            var b = u.startOf;
            u.startOf = function(p, w) {
                var d = this.$utils()
                  , D = !!d.u(w) || w;
                if (d.p(p) === n) {
                    var g = this.quarter() - 1;
                    return D ? this.month(3 * g).startOf(t).startOf("day") : this.month(3 * g + 2).endOf(t).endOf("day")
                }
                return b.bind(this)(p, w)
            }
        }
    })
}
)(Xe);
var at = Xe.exports;
const ut = me(at);
var Je = {
    exports: {}
};
(function(r, e) {
    (function(t, n) {
        r.exports = n()
    }
    )(Z, function() {
        return {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            ordinal: function(t) {
                var n = ["th", "st", "nd", "rd"]
                  , s = t % 100;
                return "[" + t + (n[(s - 20) % 10] || n[s] || n[0]) + "]"
            }
        }
    })
}
)(Je);
var ot = Je.exports;
const ct = me(ot);
function P(r) {
    return r != null && typeof r == "object" && r["@@functional/placeholder"] === !0
}
function Y(r) {
    return function e(t) {
        return arguments.length === 0 || P(t) ? e : r.apply(this, arguments)
    }
}
function T(r) {
    return function e(t, n) {
        switch (arguments.length) {
        case 0:
            return e;
        case 1:
            return P(t) ? e : Y(function(s) {
                return r(t, s)
            });
        default:
            return P(t) && P(n) ? e : P(t) ? Y(function(s) {
                return r(s, n)
            }) : P(n) ? Y(function(s) {
                return r(t, s)
            }) : r(t, n)
        }
    }
}
function ge(r, e) {
    switch (r) {
    case 0:
        return function() {
            return e.apply(this, arguments)
        }
        ;
    case 1:
        return function(t) {
            return e.apply(this, arguments)
        }
        ;
    case 2:
        return function(t, n) {
            return e.apply(this, arguments)
        }
        ;
    case 3:
        return function(t, n, s) {
            return e.apply(this, arguments)
        }
        ;
    case 4:
        return function(t, n, s, i) {
            return e.apply(this, arguments)
        }
        ;
    case 5:
        return function(t, n, s, i, u) {
            return e.apply(this, arguments)
        }
        ;
    case 6:
        return function(t, n, s, i, u, c) {
            return e.apply(this, arguments)
        }
        ;
    case 7:
        return function(t, n, s, i, u, c, b) {
            return e.apply(this, arguments)
        }
        ;
    case 8:
        return function(t, n, s, i, u, c, b, p) {
            return e.apply(this, arguments)
        }
        ;
    case 9:
        return function(t, n, s, i, u, c, b, p, w) {
            return e.apply(this, arguments)
        }
        ;
    case 10:
        return function(t, n, s, i, u, c, b, p, w, d) {
            return e.apply(this, arguments)
        }
        ;
    default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
    }
}
function be(r, e, t) {
    return function() {
        for (var n = [], s = 0, i = r, u = 0; u < e.length || s < arguments.length; ) {
            var c;
            u < e.length && (!P(e[u]) || s >= arguments.length) ? c = e[u] : (c = arguments[s],
            s += 1),
            n[u] = c,
            P(c) || (i -= 1),
            u += 1
        }
        return i <= 0 ? t.apply(this, n) : ge(i, be(r, n, t))
    }
}
var lt = T(function(e, t) {
    return e === 1 ? Y(t) : ge(e, be(e, [], t))
});
function ae(r) {
    return function e(t, n, s) {
        switch (arguments.length) {
        case 0:
            return e;
        case 1:
            return P(t) ? e : T(function(i, u) {
                return r(t, i, u)
            });
        case 2:
            return P(t) && P(n) ? e : P(t) ? T(function(i, u) {
                return r(i, n, u)
            }) : P(n) ? T(function(i, u) {
                return r(t, i, u)
            }) : Y(function(i) {
                return r(t, n, i)
            });
        default:
            return P(t) && P(n) && P(s) ? e : P(t) && P(n) ? T(function(i, u) {
                return r(i, u, s)
            }) : P(t) && P(s) ? T(function(i, u) {
                return r(i, n, u)
            }) : P(n) && P(s) ? T(function(i, u) {
                return r(t, i, u)
            }) : P(t) ? Y(function(i) {
                return r(i, n, s)
            }) : P(n) ? Y(function(i) {
                return r(t, i, s)
            }) : P(s) ? Y(function(i) {
                return r(t, n, i)
            }) : r(t, n, s)
        }
    }
}
const Se = Array.isArray || function(e) {
    return e != null && e.length >= 0 && Object.prototype.toString.call(e) === "[object Array]"
}
;
function ft(r) {
    return r != null && typeof r["@@transducer/step"] == "function"
}
function ue(r, e, t) {
    return function() {
        if (arguments.length === 0)
            return t();
        var n = Array.prototype.slice.call(arguments, 0)
          , s = n.pop();
        if (!Se(s)) {
            for (var i = 0; i < r.length; ) {
                if (typeof s[r[i]] == "function")
                    return s[r[i]].apply(s, n);
                i += 1
            }
            if (ft(s)) {
                var u = e.apply(null, n);
                return u(s)
            }
        }
        return t.apply(this, arguments)
    }
}
function ht(r) {
    return r && r["@@transducer/reduced"] ? r : {
        "@@transducer/value": r,
        "@@transducer/reduced": !0
    }
}
const G = {
    init: function() {
        return this.xf["@@transducer/init"]()
    },
    result: function(r) {
        return this.xf["@@transducer/result"](r)
    }
};
function dt(r, e) {
    for (var t = 0, n = e.length, s = Array(n); t < n; )
        s[t] = r(e[t]),
        t += 1;
    return s
}
function Ke(r) {
    return Object.prototype.toString.call(r) === "[object String]"
}
var Ae = Y(function(e) {
    return Se(e) ? !0 : !e || typeof e != "object" || Ke(e) ? !1 : e.nodeType === 1 ? !!e.length : e.length === 0 ? !0 : e.length > 0 ? e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1) : !1
})
  , pt = function() {
    function r(e) {
        this.f = e
    }
    return r.prototype["@@transducer/init"] = function() {
        throw new Error("init not implemented on XWrap")
    }
    ,
    r.prototype["@@transducer/result"] = function(e) {
        return e
    }
    ,
    r.prototype["@@transducer/step"] = function(e, t) {
        return this.f(e, t)
    }
    ,
    r
}();
function yt(r) {
    return new pt(r)
}
var mt = T(function(e, t) {
    return ge(e.length, function() {
        return e.apply(t, arguments)
    })
});
function gt(r, e, t) {
    for (var n = 0, s = t.length; n < s; ) {
        if (e = r["@@transducer/step"](e, t[n]),
        e && e["@@transducer/reduced"]) {
            e = e["@@transducer/value"];
            break
        }
        n += 1
    }
    return r["@@transducer/result"](e)
}
function $e(r, e, t) {
    for (var n = t.next(); !n.done; ) {
        if (e = r["@@transducer/step"](e, n.value),
        e && e["@@transducer/reduced"]) {
            e = e["@@transducer/value"];
            break
        }
        n = t.next()
    }
    return r["@@transducer/result"](e)
}
function Pe(r, e, t, n) {
    return r["@@transducer/result"](t[n](mt(r["@@transducer/step"], r), e))
}
var qe = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";
function ie(r, e, t) {
    if (typeof r == "function" && (r = yt(r)),
    Ae(t))
        return gt(r, e, t);
    if (typeof t["fantasy-land/reduce"] == "function")
        return Pe(r, e, t, "fantasy-land/reduce");
    if (t[qe] != null)
        return $e(r, e, t[qe]());
    if (typeof t.next == "function")
        return $e(r, e, t);
    if (typeof t.reduce == "function")
        return Pe(r, e, t, "reduce");
    throw new TypeError("reduce: list must be array or iterable")
}
var bt = function() {
    function r(e, t) {
        this.xf = t,
        this.f = e
    }
    return r.prototype["@@transducer/init"] = G.init,
    r.prototype["@@transducer/result"] = G.result,
    r.prototype["@@transducer/step"] = function(e, t) {
        return this.xf["@@transducer/step"](e, this.f(t))
    }
    ,
    r
}()
  , vt = T(function(e, t) {
    return new bt(e,t)
});
const wt = vt;
function V(r, e) {
    return Object.prototype.hasOwnProperty.call(e, r)
}
var je = Object.prototype.toString
  , _t = function() {
    return je.call(arguments) === "[object Arguments]" ? function(e) {
        return je.call(e) === "[object Arguments]"
    }
    : function(e) {
        return V("callee", e)
    }
}()
  , Dt = !{
    toString: null
}.propertyIsEnumerable("toString")
  , Ue = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
  , Be = function() {
    return arguments.propertyIsEnumerable("length")
}()
  , Et = function(e, t) {
    for (var n = 0; n < e.length; ) {
        if (e[n] === t)
            return !0;
        n += 1
    }
    return !1
}
  , pe = Y(typeof Object.keys == "function" && !Be ? function(e) {
    return Object(e) !== e ? [] : Object.keys(e)
}
: function(e) {
    if (Object(e) !== e)
        return [];
    var t, n, s = [], i = Be && _t(e);
    for (t in e)
        V(t, e) && (!i || t !== "length") && (s[s.length] = t);
    if (Dt)
        for (n = Ue.length - 1; n >= 0; )
            t = Ue[n],
            V(t, e) && !Et(s, t) && (s[s.length] = t),
            n -= 1;
    return s
}
)
  , se = T(ue(["fantasy-land/map", "map"], wt, function(e, t) {
    switch (Object.prototype.toString.call(t)) {
    case "[object Function]":
        return lt(t.length, function() {
            return e.call(this, t.apply(this, arguments))
        });
    case "[object Object]":
        return ie(function(n, s) {
            return n[s] = e(t[s]),
            n
        }, {}, pe(t));
    default:
        return dt(e, t)
    }
}));
const Ot = Number.isInteger || function(e) {
    return e << 0 === e
}
;
var Mt = T(function(e, t) {
    var n = e < 0 ? t.length + e : e;
    return Ke(t) ? t.charAt(n) : t[n]
})
  , St = T(function(e, t) {
    return e.map(function(n) {
        for (var s = t, i = 0, u; i < n.length; ) {
            if (s == null)
                return;
            u = n[i],
            s = Ot(u) ? Mt(u, s) : s[u],
            i += 1
        }
        return s
    })
})
  , At = T(function(e, t) {
    return St([e], t)[0]
})
  , xt = T(function(e, t) {
    return At([e], t)
})
  , ve = T(function(e, t) {
    return se(xt(e), t)
})
  , de = ae(ie);
function Ze(r) {
    return function e(t) {
        for (var n, s, i, u = [], c = 0, b = t.length; c < b; ) {
            if (Ae(t[c]))
                for (n = r ? e(t[c]) : t[c],
                i = 0,
                s = n.length; i < s; )
                    u[u.length] = n[i],
                    i += 1;
            else
                u[u.length] = t[c];
            c += 1
        }
        return u
    }
}
function Rt(r) {
    return {
        "@@transducer/value": r,
        "@@transducer/reduced": !0
    }
}
var Tt = function(r) {
    return {
        "@@transducer/init": G.init,
        "@@transducer/result": function(e) {
            return r["@@transducer/result"](e)
        },
        "@@transducer/step": function(e, t) {
            var n = r["@@transducer/step"](e, t);
            return n["@@transducer/reduced"] ? Rt(n) : n
        }
    }
}
  , $t = function(e) {
    var t = Tt(e);
    return {
        "@@transducer/init": G.init,
        "@@transducer/result": function(n) {
            return t["@@transducer/result"](n)
        },
        "@@transducer/step": function(n, s) {
            return Ae(s) ? ie(t, n, s) : ie(t, n, [s])
        }
    }
}
  , Pt = T(function(e, t) {
    return se(e, $t(t))
});
const qt = Pt;
var jt = T(ue(["fantasy-land/chain", "chain"], qt, function(e, t) {
    return typeof t == "function" ? function(n) {
        return e(t(n))(n)
    }
    : Ze(!1)(se(e, t))
}));
function Ut(r) {
    return new RegExp(r.source,(r.global ? "g" : "") + (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.sticky ? "y" : "") + (r.unicode ? "u" : ""))
}
var De = Y(function(e) {
    return e === null ? "Null" : e === void 0 ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
});
function xe(r, e, t, n) {
    var s = function(u) {
        for (var c = e.length, b = 0; b < c; ) {
            if (r === e[b])
                return t[b];
            b += 1
        }
        e[b + 1] = r,
        t[b + 1] = u;
        for (var p in r)
            u[p] = n ? xe(r[p], e, t, !0) : r[p];
        return u
    };
    switch (De(r)) {
    case "Object":
        return s({});
    case "Array":
        return s([]);
    case "Date":
        return new Date(r.valueOf());
    case "RegExp":
        return Ut(r);
    default:
        return r
    }
}
var Bt = Y(function(e) {
    return e != null && typeof e.clone == "function" ? e.clone() : xe(e, [], [], !0)
});
function It(r, e) {
    return function() {
        return e.call(this, r.apply(this, arguments))
    }
}
function Re(r, e) {
    return function() {
        var t = arguments.length;
        if (t === 0)
            return e();
        var n = arguments[t - 1];
        return Se(n) || typeof n[r] != "function" ? e.apply(this, arguments) : n[r].apply(n, Array.prototype.slice.call(arguments, 0, t - 1))
    }
}
var et = ae(Re("slice", function(e, t, n) {
    return Array.prototype.slice.call(n, e, t)
}))
  , Yt = Y(Re("tail", et(1, 1 / 0)));
function le() {
    if (arguments.length === 0)
        throw new Error("pipe requires at least one argument");
    return ge(arguments[0].length, de(It, arguments[0], Yt(arguments)))
}
function tt(r) {
    return r
}
var Lt = Y(tt);
const Ft = Lt;
function Ie(r) {
    for (var e = [], t; !(t = r.next()).done; )
        e.push(t.value);
    return e
}
function Ye(r, e, t) {
    for (var n = 0, s = t.length; n < s; ) {
        if (r(e, t[n]))
            return !0;
        n += 1
    }
    return !1
}
function kt(r) {
    var e = String(r).match(/^function (\w*)/);
    return e == null ? "" : e[1]
}
function Nt(r, e) {
    return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e
}
const we = typeof Object.is == "function" ? Object.is : Nt;
function Le(r, e, t, n) {
    var s = Ie(r)
      , i = Ie(e);
    function u(c, b) {
        return Te(c, b, t.slice(), n.slice())
    }
    return !Ye(function(c, b) {
        return !Ye(u, b, c)
    }, i, s)
}
function Te(r, e, t, n) {
    if (we(r, e))
        return !0;
    var s = De(r);
    if (s !== De(e) || r == null || e == null)
        return !1;
    if (typeof r["fantasy-land/equals"] == "function" || typeof e["fantasy-land/equals"] == "function")
        return typeof r["fantasy-land/equals"] == "function" && r["fantasy-land/equals"](e) && typeof e["fantasy-land/equals"] == "function" && e["fantasy-land/equals"](r);
    if (typeof r.equals == "function" || typeof e.equals == "function")
        return typeof r.equals == "function" && r.equals(e) && typeof e.equals == "function" && e.equals(r);
    switch (s) {
    case "Arguments":
    case "Array":
    case "Object":
        if (typeof r.constructor == "function" && kt(r.constructor) === "Promise")
            return r === e;
        break;
    case "Boolean":
    case "Number":
    case "String":
        if (!(typeof r == typeof e && we(r.valueOf(), e.valueOf())))
            return !1;
        break;
    case "Date":
        if (!we(r.valueOf(), e.valueOf()))
            return !1;
        break;
    case "Error":
        return r.name === e.name && r.message === e.message;
    case "RegExp":
        if (!(r.source === e.source && r.global === e.global && r.ignoreCase === e.ignoreCase && r.multiline === e.multiline && r.sticky === e.sticky && r.unicode === e.unicode))
            return !1;
        break
    }
    for (var i = t.length - 1; i >= 0; ) {
        if (t[i] === r)
            return n[i] === e;
        i -= 1
    }
    switch (s) {
    case "Map":
        return r.size !== e.size ? !1 : Le(r.entries(), e.entries(), t.concat([r]), n.concat([e]));
    case "Set":
        return r.size !== e.size ? !1 : Le(r.values(), e.values(), t.concat([r]), n.concat([e]));
    case "Arguments":
    case "Array":
    case "Object":
    case "Boolean":
    case "Number":
    case "String":
    case "Date":
    case "Error":
    case "RegExp":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "ArrayBuffer":
        break;
    default:
        return !1
    }
    var u = pe(r);
    if (u.length !== pe(e).length)
        return !1;
    var c = t.concat([r])
      , b = n.concat([e]);
    for (i = u.length - 1; i >= 0; ) {
        var p = u[i];
        if (!(V(p, e) && Te(e[p], r[p], c, b)))
            return !1;
        i -= 1
    }
    return !0
}
var rt = T(function(e, t) {
    return Te(e, t, [], [])
});
function zt(r, e, t) {
    var n, s;
    if (typeof r.indexOf == "function")
        switch (typeof e) {
        case "number":
            if (e === 0) {
                for (n = 1 / e; t < r.length; ) {
                    if (s = r[t],
                    s === 0 && 1 / s === n)
                        return t;
                    t += 1
                }
                return -1
            } else if (e !== e) {
                for (; t < r.length; ) {
                    if (s = r[t],
                    typeof s == "number" && s !== s)
                        return t;
                    t += 1
                }
                return -1
            }
            return r.indexOf(e, t);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
            return r.indexOf(e, t);
        case "object":
            if (e === null)
                return r.indexOf(e, t)
        }
    for (; t < r.length; ) {
        if (rt(r[t], e))
            return t;
        t += 1
    }
    return -1
}
function Fe(r, e) {
    return zt(e, r, 0) >= 0
}
function Ct(r, e) {
    for (var t = 0, n = e.length, s = []; t < n; )
        r(e[t]) && (s[s.length] = e[t]),
        t += 1;
    return s
}
function Ee(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
var Qt = function() {
    function r(e, t) {
        this.xf = t,
        this.f = e
    }
    return r.prototype["@@transducer/init"] = G.init,
    r.prototype["@@transducer/result"] = G.result,
    r.prototype["@@transducer/step"] = function(e, t) {
        return this.f(t) ? this.xf["@@transducer/step"](e, t) : e
    }
    ,
    r
}()
  , Ht = T(function(e, t) {
    return new Qt(e,t)
});
const Vt = Ht;
var Gt = T(ue(["filter"], Vt, function(r, e) {
    return Ee(e) ? ie(function(t, n) {
        return r(e[n]) && (t[n] = e[n]),
        t
    }, {}, pe(e)) : Ct(r, e)
}))
  , Wt = function() {
    function r(e, t, n, s) {
        this.valueFn = e,
        this.valueAcc = t,
        this.keyFn = n,
        this.xf = s,
        this.inputs = {}
    }
    return r.prototype["@@transducer/init"] = G.init,
    r.prototype["@@transducer/result"] = function(e) {
        var t;
        for (t in this.inputs)
            if (V(t, this.inputs) && (e = this.xf["@@transducer/step"](e, this.inputs[t]),
            e["@@transducer/reduced"])) {
                e = e["@@transducer/value"];
                break
            }
        return this.inputs = null,
        this.xf["@@transducer/result"](e)
    }
    ,
    r.prototype["@@transducer/step"] = function(e, t) {
        var n = this.keyFn(t);
        return this.inputs[n] = this.inputs[n] || [n, this.valueAcc],
        this.inputs[n][1] = this.valueFn(this.inputs[n][1], t),
        e
    }
    ,
    r
}()
  , Xt = be(4, [], function(e, t, n, s) {
    return new Wt(e,t,n,s)
});
const Jt = Xt;
var Kt = be(4, [], ue([], Jt, function(e, t, n, s) {
    return ie(function(i, u) {
        var c = n(u);
        return i[c] = e(V(c, i) ? i[c] : xe(t, [], [], !1), u),
        i
    }, {}, s)
}))
  , Zt = function() {
    function r() {
        this._nativeSet = typeof Set == "function" ? new Set : null,
        this._items = {}
    }
    return r.prototype.add = function(e) {
        return !ke(e, !0, this)
    }
    ,
    r.prototype.has = function(e) {
        return ke(e, !1, this)
    }
    ,
    r
}();
function ke(r, e, t) {
    var n = typeof r, s, i;
    switch (n) {
    case "string":
    case "number":
        return r === 0 && 1 / r === -1 / 0 ? t._items["-0"] ? !0 : (e && (t._items["-0"] = !0),
        !1) : t._nativeSet !== null ? e ? (s = t._nativeSet.size,
        t._nativeSet.add(r),
        i = t._nativeSet.size,
        i === s) : t._nativeSet.has(r) : n in t._items ? r in t._items[n] ? !0 : (e && (t._items[n][r] = !0),
        !1) : (e && (t._items[n] = {},
        t._items[n][r] = !0),
        !1);
    case "boolean":
        if (n in t._items) {
            var u = r ? 1 : 0;
            return t._items[n][u] ? !0 : (e && (t._items[n][u] = !0),
            !1)
        } else
            return e && (t._items[n] = r ? [!1, !0] : [!0, !1]),
            !1;
    case "function":
        return t._nativeSet !== null ? e ? (s = t._nativeSet.size,
        t._nativeSet.add(r),
        i = t._nativeSet.size,
        i === s) : t._nativeSet.has(r) : n in t._items ? Fe(r, t._items[n]) ? !0 : (e && t._items[n].push(r),
        !1) : (e && (t._items[n] = [r]),
        !1);
    case "undefined":
        return t._items[n] ? !0 : (e && (t._items[n] = !0),
        !1);
    case "object":
        if (r === null)
            return t._items.null ? !0 : (e && (t._items.null = !0),
            !1);
    default:
        return n = Object.prototype.toString.call(r),
        n in t._items ? Fe(r, t._items[n]) ? !0 : (e && t._items[n].push(r),
        !1) : (e && (t._items[n] = [r]),
        !1)
    }
}
var er = function() {
    function r(e, t) {
        this.xf = t,
        this.n = e,
        this.i = 0
    }
    return r.prototype["@@transducer/init"] = G.init,
    r.prototype["@@transducer/result"] = G.result,
    r.prototype["@@transducer/step"] = function(e, t) {
        this.i += 1;
        var n = this.n === 0 ? e : this.xf["@@transducer/step"](e, t);
        return this.n >= 0 && this.i >= this.n ? ht(n) : n
    }
    ,
    r
}()
  , tr = T(function(e, t) {
    return new er(e,t)
});
const rr = tr;
var nr = T(ue(["take"], rr, function(e, t) {
    return et(0, e < 0 ? 1 / 0 : e, t)
}));
function sr(r, e) {
    return nr(r < e.length ? e.length - r : 0, e)
}
var ir = function() {
    function r(e, t) {
        this.xf = t,
        this.pos = 0,
        this.full = !1,
        this.acc = new Array(e)
    }
    return r.prototype["@@transducer/init"] = G.init,
    r.prototype["@@transducer/result"] = function(e) {
        return this.acc = null,
        this.xf["@@transducer/result"](e)
    }
    ,
    r.prototype["@@transducer/step"] = function(e, t) {
        return this.full && (e = this.xf["@@transducer/step"](e, this.acc[this.pos])),
        this.store(t),
        e
    }
    ,
    r.prototype.store = function(e) {
        this.acc[this.pos] = e,
        this.pos += 1,
        this.pos === this.acc.length && (this.pos = 0,
        this.full = !0)
    }
    ,
    r
}()
  , ar = T(function(e, t) {
    return new ir(e,t)
});
const ur = ar;
var Ne = T(ue([], ur, sr))
  , ze = Y(Ze(!0))
  , ye = Y(function(e) {
    for (var t = {}, n = 0; n < e.length; )
        t[e[n][0]] = e[n][1],
        n += 1;
    return t
})
  , or = T(Re("groupBy", Kt(function(r, e) {
    return r == null && (r = []),
    r.push(e),
    r
}, null)))
  , cr = T(function(e, t) {
    for (var n = new Zt, s = [], i = 0, u, c; i < t.length; )
        c = t[i],
        u = e(c),
        n.add(u) && s.push(c),
        i += 1;
    return s
})
  , lr = cr(Ft);
function fr(r) {
    if (r == null)
        throw new TypeError("Cannot convert undefined or null to object");
    for (var e = Object(r), t = 1, n = arguments.length; t < n; ) {
        var s = arguments[t];
        if (s != null)
            for (var i in s)
                V(i, s) && (e[i] = s[i]);
        t += 1
    }
    return e
}
const hr = typeof Object.assign == "function" ? Object.assign : fr;
var dr = ae(function(e, t, n) {
    return e(n) > e(t) ? n : t
})
  , pr = Y(function(e) {
    return hr.apply(null, [{}].concat(e))
})
  , yr = ae(function(e, t, n) {
    var s = {}, i;
    for (i in t)
        V(i, t) && (s[i] = V(i, n) ? e(i, t[i], n[i]) : t[i]);
    for (i in n)
        V(i, n) && !V(i, s) && (s[i] = n[i]);
    return s
})
  , mr = ae(function r(e, t, n) {
    return yr(function(s, i, u) {
        return Ee(i) && Ee(u) ? r(e, i, u) : e(s, i, u)
    }, t, n)
})
  , Ce = T(function(e, t) {
    return mr(function(n, s, i) {
        return s
    }, e, t)
})
  , gr = ae(function(e, t, n) {
    return e(n) < e(t) ? n : t
})
  , br = jt(tt)
  , Oe = {
    exports: {}
};
(function(r, e) {
    var t = typeof self < "u" ? self : Z
      , n = function() {
        function i() {
            this.fetch = !1,
            this.DOMException = t.DOMException
        }
        return i.prototype = t,
        new i
    }();
    (function(i) {
        (function(u) {
            var c = {
                searchParams: "URLSearchParams"in i,
                iterable: "Symbol"in i && "iterator"in Symbol,
                blob: "FileReader"in i && "Blob"in i && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in i,
                arrayBuffer: "ArrayBuffer"in i
            };
            function b(a) {
                return a && DataView.prototype.isPrototypeOf(a)
            }
            if (c.arrayBuffer)
                var p = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , w = ArrayBuffer.isView || function(a) {
                    return a && p.indexOf(Object.prototype.toString.call(a)) > -1
                }
                ;
            function d(a) {
                if (typeof a != "string" && (a = String(a)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(a))
                    throw new TypeError("Invalid character in header field name");
                return a.toLowerCase()
            }
            function D(a) {
                return typeof a != "string" && (a = String(a)),
                a
            }
            function g(a) {
                var o = {
                    next: function() {
                        var l = a.shift();
                        return {
                            done: l === void 0,
                            value: l
                        }
                    }
                };
                return c.iterable && (o[Symbol.iterator] = function() {
                    return o
                }
                ),
                o
            }
            function _(a) {
                this.map = {},
                a instanceof _ ? a.forEach(function(o, l) {
                    this.append(l, o)
                }, this) : Array.isArray(a) ? a.forEach(function(o) {
                    this.append(o[0], o[1])
                }, this) : a && Object.getOwnPropertyNames(a).forEach(function(o) {
                    this.append(o, a[o])
                }, this)
            }
            _.prototype.append = function(a, o) {
                a = d(a),
                o = D(o);
                var l = this.map[a];
                this.map[a] = l ? l + ", " + o : o
            }
            ,
            _.prototype.delete = function(a) {
                delete this.map[d(a)]
            }
            ,
            _.prototype.get = function(a) {
                return a = d(a),
                this.has(a) ? this.map[a] : null
            }
            ,
            _.prototype.has = function(a) {
                return this.map.hasOwnProperty(d(a))
            }
            ,
            _.prototype.set = function(a, o) {
                this.map[d(a)] = D(o)
            }
            ,
            _.prototype.forEach = function(a, o) {
                for (var l in this.map)
                    this.map.hasOwnProperty(l) && a.call(o, this.map[l], l, this)
            }
            ,
            _.prototype.keys = function() {
                var a = [];
                return this.forEach(function(o, l) {
                    a.push(l)
                }),
                g(a)
            }
            ,
            _.prototype.values = function() {
                var a = [];
                return this.forEach(function(o) {
                    a.push(o)
                }),
                g(a)
            }
            ,
            _.prototype.entries = function() {
                var a = [];
                return this.forEach(function(o, l) {
                    a.push([l, o])
                }),
                g(a)
            }
            ,
            c.iterable && (_.prototype[Symbol.iterator] = _.prototype.entries);
            function M(a) {
                if (a.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                a.bodyUsed = !0
            }
            function j(a) {
                return new Promise(function(o, l) {
                    a.onload = function() {
                        o(a.result)
                    }
                    ,
                    a.onerror = function() {
                        l(a.error)
                    }
                }
                )
            }
            function U(a) {
                var o = new FileReader
                  , l = j(o);
                return o.readAsArrayBuffer(a),
                l
            }
            function f(a) {
                var o = new FileReader
                  , l = j(o);
                return o.readAsText(a),
                l
            }
            function v(a) {
                for (var o = new Uint8Array(a), l = new Array(o.length), y = 0; y < o.length; y++)
                    l[y] = String.fromCharCode(o[y]);
                return l.join("")
            }
            function E(a) {
                if (a.slice)
                    return a.slice(0);
                var o = new Uint8Array(a.byteLength);
                return o.set(new Uint8Array(a)),
                o.buffer
            }
            function S() {
                return this.bodyUsed = !1,
                this._initBody = function(a) {
                    this._bodyInit = a,
                    a ? typeof a == "string" ? this._bodyText = a : c.blob && Blob.prototype.isPrototypeOf(a) ? this._bodyBlob = a : c.formData && FormData.prototype.isPrototypeOf(a) ? this._bodyFormData = a : c.searchParams && URLSearchParams.prototype.isPrototypeOf(a) ? this._bodyText = a.toString() : c.arrayBuffer && c.blob && b(a) ? (this._bodyArrayBuffer = E(a.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(a) || w(a)) ? this._bodyArrayBuffer = E(a) : this._bodyText = a = Object.prototype.toString.call(a) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof a == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(a) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                c.blob && (this.blob = function() {
                    var a = M(this);
                    if (a)
                        return a;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? M(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(U)
                }
                ),
                this.text = function() {
                    var a = M(this);
                    if (a)
                        return a;
                    if (this._bodyBlob)
                        return f(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(v(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                c.formData && (this.formData = function() {
                    return this.text().then(z)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function L(a) {
                var o = a.toUpperCase();
                return x.indexOf(o) > -1 ? o : a
            }
            function B(a, o) {
                o = o || {};
                var l = o.body;
                if (a instanceof B) {
                    if (a.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = a.url,
                    this.credentials = a.credentials,
                    o.headers || (this.headers = new _(a.headers)),
                    this.method = a.method,
                    this.mode = a.mode,
                    this.signal = a.signal,
                    !l && a._bodyInit != null && (l = a._bodyInit,
                    a.bodyUsed = !0)
                } else
                    this.url = String(a);
                if (this.credentials = o.credentials || this.credentials || "same-origin",
                (o.headers || !this.headers) && (this.headers = new _(o.headers)),
                this.method = L(o.method || this.method || "GET"),
                this.mode = o.mode || this.mode || null,
                this.signal = o.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && l)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(l)
            }
            B.prototype.clone = function() {
                return new B(this,{
                    body: this._bodyInit
                })
            }
            ;
            function z(a) {
                var o = new FormData;
                return a.trim().split("&").forEach(function(l) {
                    if (l) {
                        var y = l.split("=")
                          , h = y.shift().replace(/\+/g, " ")
                          , m = y.join("=").replace(/\+/g, " ");
                        o.append(decodeURIComponent(h), decodeURIComponent(m))
                    }
                }),
                o
            }
            function q(a) {
                var o = new _
                  , l = a.replace(/\r?\n[\t ]+/g, " ");
                return l.split(/\r?\n/).forEach(function(y) {
                    var h = y.split(":")
                      , m = h.shift().trim();
                    if (m) {
                        var O = h.join(":").trim();
                        o.append(m, O)
                    }
                }),
                o
            }
            S.call(B.prototype);
            function A(a, o) {
                o || (o = {}),
                this.type = "default",
                this.status = o.status === void 0 ? 200 : o.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in o ? o.statusText : "OK",
                this.headers = new _(o.headers),
                this.url = o.url || "",
                this._initBody(a)
            }
            S.call(A.prototype),
            A.prototype.clone = function() {
                return new A(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new _(this.headers),
                    url: this.url
                })
            }
            ,
            A.error = function() {
                var a = new A(null,{
                    status: 0,
                    statusText: ""
                });
                return a.type = "error",
                a
            }
            ;
            var ee = [301, 302, 303, 307, 308];
            A.redirect = function(a, o) {
                if (ee.indexOf(o) === -1)
                    throw new RangeError("Invalid status code");
                return new A(null,{
                    status: o,
                    headers: {
                        location: a
                    }
                })
            }
            ,
            u.DOMException = i.DOMException;
            try {
                new u.DOMException
            } catch {
                u.DOMException = function(o, l) {
                    this.message = o,
                    this.name = l;
                    var y = Error(o);
                    this.stack = y.stack
                }
                ,
                u.DOMException.prototype = Object.create(Error.prototype),
                u.DOMException.prototype.constructor = u.DOMException
            }
            function te(a, o) {
                return new Promise(function(l, y) {
                    var h = new B(a,o);
                    if (h.signal && h.signal.aborted)
                        return y(new u.DOMException("Aborted","AbortError"));
                    var m = new XMLHttpRequest;
                    function O() {
                        m.abort()
                    }
                    m.onload = function() {
                        var R = {
                            status: m.status,
                            statusText: m.statusText,
                            headers: q(m.getAllResponseHeaders() || "")
                        };
                        R.url = "responseURL"in m ? m.responseURL : R.headers.get("X-Request-URL");
                        var $ = "response"in m ? m.response : m.responseText;
                        l(new A($,R))
                    }
                    ,
                    m.onerror = function() {
                        y(new TypeError("Network request failed"))
                    }
                    ,
                    m.ontimeout = function() {
                        y(new TypeError("Network request failed"))
                    }
                    ,
                    m.onabort = function() {
                        y(new u.DOMException("Aborted","AbortError"))
                    }
                    ,
                    m.open(h.method, h.url, !0),
                    h.credentials === "include" ? m.withCredentials = !0 : h.credentials === "omit" && (m.withCredentials = !1),
                    "responseType"in m && c.blob && (m.responseType = "blob"),
                    h.headers.forEach(function(R, $) {
                        m.setRequestHeader($, R)
                    }),
                    h.signal && (h.signal.addEventListener("abort", O),
                    m.onreadystatechange = function() {
                        m.readyState === 4 && h.signal.removeEventListener("abort", O)
                    }
                    ),
                    m.send(typeof h._bodyInit > "u" ? null : h._bodyInit)
                }
                )
            }
            return te.polyfill = !0,
            i.fetch || (i.fetch = te,
            i.Headers = _,
            i.Request = B,
            i.Response = A),
            u.Headers = _,
            u.Request = B,
            u.Response = A,
            u.fetch = te,
            Object.defineProperty(u, "__esModule", {
                value: !0
            }),
            u
        }
        )({})
    }
    )(n),
    n.fetch.ponyfill = !0,
    delete n.fetch.polyfill;
    var s = n;
    e = s.fetch,
    e.default = s.fetch,
    e.fetch = s.fetch,
    e.Headers = s.Headers,
    e.Request = s.Request,
    e.Response = s.Response,
    r.exports = e
}
)(Oe, Oe.exports);
var vr = Oe.exports;
const wr = me(vr);
(function(r) {
    var e = r.URLSearchParams && r.URLSearchParams.prototype.get ? r.URLSearchParams : null
      , t = e && new e({
        a: 1
    }).toString() === "a=1"
      , n = e && new e("s=%2B").get("s") === "+"
      , s = "__URLSearchParams__"
      , i = e ? function() {
        var f = new e;
        return f.append("s", " &"),
        f.toString() === "s=+%26"
    }() : !0
      , u = b.prototype
      , c = !!(r.Symbol && r.Symbol.iterator);
    if (e && t && n && i)
        return;
    function b(f) {
        f = f || "",
        (f instanceof URLSearchParams || f instanceof b) && (f = f.toString()),
        this[s] = M(f)
    }
    u.append = function(f, v) {
        j(this[s], f, v)
    }
    ,
    u.delete = function(f) {
        delete this[s][f]
    }
    ,
    u.get = function(f) {
        var v = this[s];
        return f in v ? v[f][0] : null
    }
    ,
    u.getAll = function(f) {
        var v = this[s];
        return f in v ? v[f].slice(0) : []
    }
    ,
    u.has = function(f) {
        return f in this[s]
    }
    ,
    u.set = function(v, E) {
        this[s][v] = ["" + E]
    }
    ,
    u.toString = function() {
        var f = this[s], v = [], E, S, x, L;
        for (S in f)
            for (x = D(S),
            E = 0,
            L = f[S]; E < L.length; E++)
                v.push(x + "=" + D(L[E]));
        return v.join("&")
    }
    ;
    var p = !n
      , w = !p && e && !t && r.Proxy;
    Object.defineProperty(r, "URLSearchParams", {
        value: w ? new Proxy(e,{
            construct: function(f, v) {
                return new f(new b(v[0]).toString())
            }
        }) : b
    });
    var d = r.URLSearchParams.prototype;
    d.polyfill = !0,
    d.forEach = d.forEach || function(f, v) {
        var E = M(this.toString());
        Object.getOwnPropertyNames(E).forEach(function(S) {
            E[S].forEach(function(x) {
                f.call(v, x, S, this)
            }, this)
        }, this)
    }
    ,
    d.sort = d.sort || function() {
        var f = M(this.toString()), v = [], E, S, x;
        for (E in f)
            v.push(E);
        for (v.sort(),
        S = 0; S < v.length; S++)
            this.delete(v[S]);
        for (S = 0; S < v.length; S++) {
            var L = v[S]
              , B = f[L];
            for (x = 0; x < B.length; x++)
                this.append(L, B[x])
        }
    }
    ,
    d.keys = d.keys || function() {
        var f = [];
        return this.forEach(function(v, E) {
            f.push(E)
        }),
        _(f)
    }
    ,
    d.values = d.values || function() {
        var f = [];
        return this.forEach(function(v) {
            f.push(v)
        }),
        _(f)
    }
    ,
    d.entries = d.entries || function() {
        var f = [];
        return this.forEach(function(v, E) {
            f.push([E, v])
        }),
        _(f)
    }
    ,
    c && (d[r.Symbol.iterator] = d[r.Symbol.iterator] || d.entries);
    function D(f) {
        var v = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
        };
        return encodeURIComponent(f).replace(/[!'\(\)~]|%20|%00/g, function(E) {
            return v[E]
        })
    }
    function g(f) {
        return f.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/ig, function(v) {
            return decodeURIComponent(v)
        })
    }
    function _(f) {
        var v = {
            next: function() {
                var E = f.shift();
                return {
                    done: E === void 0,
                    value: E
                }
            }
        };
        return c && (v[r.Symbol.iterator] = function() {
            return v
        }
        ),
        v
    }
    function M(f) {
        var v = {};
        if (typeof f == "object")
            if (U(f))
                for (var E = 0; E < f.length; E++) {
                    var S = f[E];
                    if (U(S) && S.length === 2)
                        j(v, S[0], S[1]);
                    else
                        throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements")
                }
            else
                for (var x in f)
                    f.hasOwnProperty(x) && j(v, x, f[x]);
        else {
            f.indexOf("?") === 0 && (f = f.slice(1));
            for (var L = f.split("&"), B = 0; B < L.length; B++) {
                var z = L[B]
                  , q = z.indexOf("=");
                -1 < q ? j(v, g(z.slice(0, q)), g(z.slice(q + 1))) : z && j(v, g(z), "")
            }
        }
        return v
    }
    function j(f, v, E) {
        var S = typeof E == "string" ? E : E != null && typeof E.toString == "function" ? E.toString() : JSON.stringify(E);
        v in f ? f[v].push(S) : f[v] = [S]
    }
    function U(f) {
        return !!f && Object.prototype.toString.call(f) === "[object Array]"
    }
}
)(typeof Z < "u" ? Z : typeof window < "u" ? window : Z);
function Qe(r, e, t, n) {
    const s = r.filter(i => i != null);
    return t && t.aliasSeries && t.aliasSeries[e] ? [t.aliasSeries[e], ...s] : n.has(s[0]) ? [e, ...s] : s
}
ne.extend(ut);
const K = (...r) => ne(...r).locale({
    ...ct,
    weekStart: 1
})
  , He = {
    day: r => r.by("d").map(e => e.format("YYYY-MM-DDT00:00:00.000")),
    month: r => r.snapTo("month").by("M").map(e => e.format("YYYY-MM-01T00:00:00.000")),
    year: r => r.snapTo("year").by("y").map(e => e.format("YYYY-01-01T00:00:00.000")),
    hour: r => r.by("h").map(e => e.format("YYYY-MM-DDTHH:00:00.000")),
    minute: r => r.by("m").map(e => e.format("YYYY-MM-DDTHH:mm:00.000")),
    second: r => r.by("s").map(e => e.format("YYYY-MM-DDTHH:mm:ss.000")),
    week: r => r.snapTo("week").by("w").map(e => e.startOf("week").format("YYYY-MM-DDT00:00:00.000")),
    quarter: r => r.snapTo("quarter").by("quarter").map(e => e.startOf("quarter").format("YYYY-MM-DDT00:00:00.000"))
}
  , _r = /^\d\d\d\d-\d\d-\d\d$/
  , Dr = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z?$/
  , Er = r => {
    const e = new Map;
    return t => (t.forEach(n => {
        const s = r(n);
        e.has(s) || e.set(s, []),
        e.get(s).push(n)
    }
    ),
    Array.from(e.entries()))
}
  , fe = r => {
    const e = [];
    return r.forEach(t => {
        t.forEach(n => e.push(n))
    }
    ),
    e
}
  , Me = (r, e) => ({
    by: t => {
        const n = [];
        let s = K(r);
        const i = K(e);
        for (; s.isBefore(i) || s.isSame(i); )
            n.push(s),
            s = s.add(1, t);
        return n
    }
    ,
    snapTo: t => Me(K(r).startOf(t), K(e).endOf(t)),
    start: K(r),
    end: K(e)
})
  , H = {
    REGULAR_QUERY: "regularQuery",
    COMPARE_DATE_RANGE_QUERY: "compareDateRangeQuery",
    BLENDING_QUERY: "blendingQuery"
};
class k {
    static measureFromAxis(e) {
        return e[e.length - 1]
    }
    static timeDimensionMember(e) {
        return `${e.dimension}.${e.granularity}`
    }
    static deserialize(e, t={}) {
        return new k(e.loadResponse,t)
    }
    constructor(e, t={}) {
        if (this.loadResponse = e,
        this.loadResponse.queryType != null ? (this.queryType = e.queryType,
        this.loadResponses = e.results) : (this.queryType = H.REGULAR_QUERY,
        this.loadResponse.pivotQuery = {
            ...e.query,
            queryType: this.queryType
        },
        this.loadResponses = [e]),
        !Object.values(H).includes(this.queryType))
            throw new Error("Unknown query type");
        this.parseDateMeasures = t.parseDateMeasures,
        this.options = t,
        this.backwardCompatibleData = []
    }
    drillDown(e, t) {
        if (this.queryType === H.COMPARE_DATE_RANGE_QUERY)
            throw new Error("compareDateRange drillDown query is not currently supported");
        if (this.queryType === H.BLENDING_QUERY)
            throw new Error("Data blending drillDown query is not currently supported");
        const {query: n} = this.loadResponses[0]
          , {xValues: s=[], yValues: i=[]} = e
          , u = this.normalizePivotConfig(t)
          , c = [];
        u.x.forEach( (_, M) => c.push([_, s[M]])),
        u.y.forEach( (_, M) => c.push([_, i[M]]));
        const {filters: b=[], segments: p=[]} = this.query()
          , {measures: w} = this.loadResponses[0].annotation;
        let[,d] = c.find( ([_]) => _ === "measures") || [];
        if (d === void 0 && ([d] = Object.keys(w)),
        !(w[d] && w[d].drillMembers || []).length)
            return null;
        const D = [{
            member: d,
            operator: "measureFilter"
        }, ...b]
          , g = [];
        return c.filter( ([_]) => _ !== "measures").forEach( ([_,M]) => {
            const [j,U,f] = _.split(".");
            if (f !== void 0) {
                const v = Me(M, M).snapTo(f)
                  , E = n.timeDimensions.find(x => x.dimension);
                let S = [v.start, v.end];
                if (E != null && E.dateRange) {
                    const [x,L] = E.dateRange;
                    S = [ne(x) > v.start ? ne(x) : v.start, ne(L) < v.end ? ne(L) : v.end]
                }
                g.push({
                    dimension: [j, U].join("."),
                    dateRange: S.map(x => x.format("YYYY-MM-DDTHH:mm:ss.SSS"))
                })
            } else
                M == null ? D.push({
                    member: _,
                    operator: "notSet"
                }) : D.push({
                    member: _,
                    operator: "equals",
                    values: [M.toString()]
                })
        }
        ),
        g.length === 0 && n.timeDimensions.length > 0 && n.timeDimensions[0].granularity == null && g.push(n.timeDimensions[0]),
        {
            ...w[d].drillMembersGrouped,
            filters: D,
            ...p.length > 0 ? {
                segments: p
            } : {},
            timeDimensions: g,
            segments: p,
            timezone: n.timezone
        }
    }
    series(e) {
        return this.seriesNames(e).map( ({title: t, shortTitle: n, key: s}) => ({
            title: t,
            shortTitle: n,
            key: s,
            series: this.chartPivot(e).map( ({x: i, ...u}) => ({
                value: u[s],
                x: i
            }))
        }))
    }
    axisValues(e, t=0) {
        const {query: n} = this.loadResponses[t];
        return s => {
            const i = u => e.filter(c => c !== "measures").map(c => s[c] != null ? s[c] : null).concat(u ? [u] : []);
            return e.find(u => u === "measures") && (n.measures || []).length ? n.measures.map(i) : [i()]
        }
    }
    axisValuesString(e, t) {
        const n = s => s == null ? "∅" : s === "" ? "[Empty string]" : s;
        return e.map(n).join(t || ", ")
    }
    static getNormalizedPivotConfig(e={}, t=null) {
        const n = {
            x: [],
            y: [],
            fillMissingDates: !0,
            joinDateRange: !1
        }
          , {measures: s=[], dimensions: i=[]} = e
          , u = (e.timeDimensions || []).filter(d => !!d.granularity);
        t = t || (u.length ? {
            x: u.map(d => k.timeDimensionMember(d)),
            y: i
        } : {
            x: i,
            y: []
        }),
        t = Ce(t, n);
        const c = d => d.map(D => u.find(g => g.dimension === D) && !i.find(g => g === D) ? k.timeDimensionMember(e.timeDimensions.find(g => g.dimension === D)) : D);
        t.x = c(t.x),
        t.y = c(t.y);
        const b = t.x.concat(t.y)
          , p = u.map(d => k.timeDimensionMember(d)).concat(i)
          , w = d => p.includes(d) || d === "measures";
        return t.x = t.x.concat(p.filter(d => !b.includes(d) && d !== "compareDateRange")).filter(w),
        t.y = t.y.filter(w),
        t.x.concat(t.y).find(d => d === "measures") || t.y.push("measures"),
        i.includes("compareDateRange") && !t.y.concat(t.x).includes("compareDateRange") && t.y.unshift("compareDateRange"),
        s.length || (t.x = t.x.filter(d => d !== "measures"),
        t.y = t.y.filter(d => d !== "measures")),
        t
    }
    normalizePivotConfig(e) {
        return k.getNormalizedPivotConfig(this.loadResponse.pivotQuery, e)
    }
    timeSeries(e, t) {
        if (!e.granularity)
            return null;
        let {dateRange: n} = e;
        if (!n) {
            const b = k.timeDimensionMember(e)
              , p = le(se(w => w[b] && K(w[b])), Gt(Boolean))(this.timeDimensionBackwardCompatibleData(t));
            n = p.length && [de(gr(w => w.toDate()), p[0], p), de(dr(w => w.toDate()), p[0], p)] || null
        }
        if (!n)
            return null;
        const s = e.dateRange ? e.dateRange.find(b => b.match(_r)) : !["hour", "minute", "second"].includes(e.granularity)
          , [i,u] = n
          , c = Me(i, u);
        if (!He[e.granularity])
            throw new Error(`Unsupported time granularity: ${e.granularity}`);
        return He[e.granularity](s ? c.snapTo("d") : c)
    }
    pivot(e) {
        e = this.normalizePivotConfig(e);
        const {pivotQuery: t} = this.loadResponse
          , n = (i=0) => {
            let u = Er( ({xValues: D}) => this.axisValuesString(D));
            const c = (D, g) => D[g] || 0;
            if (e.fillMissingDates && e.x.length === 1 && rt(e.x, (t.timeDimensions || []).filter(D => !!D.granularity).map(D => k.timeDimensionMember(D)))) {
                const D = this.loadResponses.map(g => this.timeSeries(g.query.timeDimensions[0], i));
                D[0] && (u = g => {
                    const _ = or( ({xValues: M}) => M[0], g);
                    return D[i].map(M => [M, _[M] || [{
                        xValues: [M],
                        row: {}
                    }]])
                }
                )
            }
            const b = le(se(D => this.axisValues(e.x, i)(D).map(g => ({
                xValues: g,
                row: D
            }))), fe, u)(this.timeDimensionBackwardCompatibleData(i))
              , p = {};
            b.forEach( ([,D]) => {
                D.forEach( ({row: g}) => {
                    this.axisValues(e.y, i)(g).forEach(_ => {
                        Object.keys(g).length > 0 && (p[_.join()] = _)
                    }
                    )
                }
                )
            }
            );
            const w = Object.values(p)
              , d = !!e.x.find(D => D === "measures");
            return b.map( ([,D]) => {
                const {xValues: g} = D[0]
                  , _ = {};
                return D.forEach( ({row: M}) => {
                    this.axisValues(e.y, i)(M).map(U => ({
                        yValues: U,
                        row: M
                    })).forEach(U => {
                        _[this.axisValuesString(U.yValues)] = U
                    }
                    )
                }
                ),
                {
                    xValues: g,
                    yValuesArray: fe(w.map(M => {
                        const j = d ? k.measureFromAxis(g) : k.measureFromAxis(M);
                        return [[M, c((_[this.axisValuesString(M)] || {
                            row: {}
                        }).row, j)]]
                    }
                    ))
                }
            }
            )
        }
          , s = this.loadResponses.length > 1 ? this.loadResponses.map( (i, u) => n(u)) : [];
        return s.length ? this.mergePivots(s, e.joinDateRange) : n()
    }
    mergePivots(e, t) {
        const n = e.reduce( (s, i) => s != null && i.length >= s.length ? s : i, null);
        return n.map( (s, i) => ({
            xValues: t ? [e.map(c => c[i] && c[i].xValues || []).join(", ")] : n[i].xValues,
            yValuesArray: fe(e.map(c => c[i].yValuesArray))
        }))
    }
    pivotedRows(e) {
        return this.chartPivot(e)
    }
    chartPivot(e) {
        const t = s => this.parseDateMeasures && Dr.test(s) ? new Date(s) : Number.isNaN(Number.parseFloat(s)) ? s : Number.parseFloat(s)
          , n = new Set;
        return this.queryType === H.BLENDING_QUERY && ze(this.loadResponses.map( ({query: i}) => i.measures)).filter( (i, u, c) => c.indexOf(i) !== u).forEach(i => n.add(i)),
        this.pivot(e).map( ({xValues: s, yValuesArray: i}) => {
            const u = {};
            return i.forEach( ([c,b], p) => {
                u[this.axisValuesString(Qe(c, p, e, n), ",")] = b && t(b)
            }
            ),
            {
                x: this.axisValuesString(s, ","),
                xValues: s,
                ...u
            }
        }
        )
    }
    tablePivot(e) {
        const t = this.normalizePivotConfig(e || {})
          , n = t.x.concat(t.y).includes("measures");
        return this.pivot(t).map( ({xValues: s, yValuesArray: i}) => ye(t.x.map( (u, c) => [u, s[c]]).concat(n ? i.map( ([u,c]) => [u.length ? u.join() : "value", c]) : [])))
    }
    tableColumns(e) {
        const t = this.normalizePivotConfig(e || {})
          , n = le(ve("annotation"), de(Ce(), {}))(this.loadResponses)
          , s = Object.values(n).reduce( (w, d) => ({
            ...w,
            ...d
        }), {})
          , i = {}
          , u = w => {
            const {title: d, shortTitle: D, type: g, format: _, meta: M} = s[w] || {};
            return {
                key: w,
                title: d,
                shortTitle: D,
                type: g,
                format: _,
                meta: M
            }
        }
          , c = this.pivot(t);
        (c[0] && c[0].yValuesArray || []).forEach( ([w]) => {
            if (w.length > 0) {
                let d = i;
                w.forEach( (D, g) => {
                    d[`_${D}`] = {
                        key: D,
                        memberId: t.y[g] === "measures" ? D : t.y[g],
                        children: d[`_${D}`] && d[`_${D}`].children || {}
                    },
                    d = d[`_${D}`].children
                }
                )
            }
        }
        );
        const b = (w={}, d=[]) => Object.keys(w).length === 0 ? [] : Object.values(w).map( ({key: D, ...g}) => {
            const _ = b(g.children, [...d, D])
              , {title: M, shortTitle: j, ...U} = u(g.memberId)
              , f = D !== g.memberId || M == null ? D : "";
            return _.length ? {
                ...U,
                key: D,
                title: [M, f].join(" ").trim(),
                shortTitle: f || j,
                children: _
            } : {
                ...U,
                key: D,
                dataIndex: [...d, D].join(),
                title: [M, f].join(" ").trim(),
                shortTitle: f || j
            }
        }
        );
        let p = [];
        return !c.length && t.y.includes("measures") && (p = (this.loadResponses[0].query.measures || []).map(w => ({
            ...u(w),
            dataIndex: w
        }))),
        !t.y.length && t.x.includes("measures") && p.push({
            key: "value",
            dataIndex: "value",
            title: "Value",
            shortTitle: "Value",
            type: "string"
        }),
        t.x.map(w => w === "measures" ? {
            key: "measures",
            dataIndex: "measures",
            title: "Measures",
            shortTitle: "Measures",
            type: "string"
        } : {
            ...u(w),
            dataIndex: w
        }).concat(b(i)).concat(p)
    }
    totalRow(e) {
        return this.chartPivot(e)[0]
    }
    categories(e) {
        return this.chartPivot(e)
    }
    seriesNames(e) {
        e = this.normalizePivotConfig(e);
        const t = le(ve("annotation"), ve("measures"), pr)(this.loadResponses)
          , n = fe(this.loadResponses.map( (i, u) => le(se(this.axisValues(e.y, u)), fe, lr)(this.timeDimensionBackwardCompatibleData(u))))
          , s = new Set;
        return this.queryType === H.BLENDING_QUERY && ze(this.loadResponses.map( ({query: u}) => u.measures)).filter( (u, c, b) => b.indexOf(u) !== c).forEach(u => s.add(u)),
        n.map( (i, u) => {
            const c = Qe(i, u, e, s);
            return {
                title: this.axisValuesString(e.y.find(b => b === "measures") ? Ne(1, c).concat(t[k.measureFromAxis(i)].title) : c, ", "),
                shortTitle: this.axisValuesString(e.y.find(b => b === "measures") ? Ne(1, c).concat(t[k.measureFromAxis(i)].shortTitle) : c, ", "),
                key: this.axisValuesString(c, ","),
                yValues: i
            }
        }
        )
    }
    query() {
        if (this.queryType !== H.REGULAR_QUERY)
            throw new Error(`Method is not supported for a '${this.queryType}' query type. Please use decompose`);
        return this.loadResponses[0].query
    }
    pivotQuery() {
        return this.loadResponse.pivotQuery || null
    }
    totalRows() {
        return this.loadResponses[0].total
    }
    rawData() {
        if (this.queryType !== H.REGULAR_QUERY)
            throw new Error(`Method is not supported for a '${this.queryType}' query type. Please use decompose`);
        return this.loadResponses[0].data
    }
    annotation() {
        if (this.queryType !== H.REGULAR_QUERY)
            throw new Error(`Method is not supported for a '${this.queryType}' query type. Please use decompose`);
        return this.loadResponses[0].annotation
    }
    timeDimensionBackwardCompatibleData(e) {
        if (e === void 0)
            throw new Error("resultIndex is required");
        if (!this.backwardCompatibleData[e]) {
            const {data: t, query: n} = this.loadResponses[e]
              , s = (n.timeDimensions || []).filter(i => !!i.granularity);
            this.backwardCompatibleData[e] = t.map(i => ({
                ...i,
                ...ye(Object.keys(i).filter(u => s.find(c => c.dimension === u) && !i[k.timeDimensionMember(s.find(c => c.dimension === u))]).map(u => [k.timeDimensionMember(s.find(c => c.dimension === u)), i[u]]))
            }))
        }
        return this.backwardCompatibleData[e]
    }
    decompose() {
        return this.loadResponses.map(e => new k({
            queryType: H.REGULAR_QUERY,
            pivotQuery: {
                ...e.query,
                queryType: H.REGULAR_QUERY
            },
            results: [e]
        },this.options))
    }
    serialize() {
        return {
            loadResponse: Bt(this.loadResponse)
        }
    }
}
class Ve {
    constructor(e) {
        this.sqlQuery = e
    }
    rawQuery() {
        return this.sqlQuery.sql
    }
    sql() {
        return this.rawQuery().sql[0]
    }
}
const _e = r => ye(r.map(e => [e.name, e]))
  , Ge = {
    string: [{
        name: "contains",
        title: "contains"
    }, {
        name: "notContains",
        title: "does not contain"
    }, {
        name: "equals",
        title: "equals"
    }, {
        name: "notEquals",
        title: "does not equal"
    }, {
        name: "set",
        title: "is set"
    }, {
        name: "notSet",
        title: "is not set"
    }, {
        name: "startsWith",
        title: "starts with"
    }, {
        name: "notStartsWith",
        title: "does not start with"
    }, {
        name: "endsWith",
        title: "ends with"
    }, {
        name: "notEndsWith",
        title: "does not end with"
    }],
    number: [{
        name: "equals",
        title: "equals"
    }, {
        name: "notEquals",
        title: "does not equal"
    }, {
        name: "set",
        title: "is set"
    }, {
        name: "notSet",
        title: "is not set"
    }, {
        name: "gt",
        title: ">"
    }, {
        name: "gte",
        title: ">="
    }, {
        name: "lt",
        title: "<"
    }, {
        name: "lte",
        title: "<="
    }],
    time: [{
        name: "equals",
        title: "equals"
    }, {
        name: "notEquals",
        title: "does not equal"
    }, {
        name: "inDateRange",
        title: "in date range"
    }, {
        name: "notInDateRange",
        title: "not in date range"
    }, {
        name: "afterDate",
        title: "after date"
    }, {
        name: "afterOrOnDate",
        title: "after or on date"
    }, {
        name: "beforeDate",
        title: "before date"
    }, {
        name: "beforeOrOnDate",
        title: "before or on date"
    }]
};
class Or {
    constructor(e) {
        this.meta = e;
        const {cubes: t} = this.meta;
        this.cubes = t,
        this.cubesMap = ye(t.map(n => [n.name, {
            measures: _e(n.measures),
            dimensions: _e(n.dimensions),
            segments: _e(n.segments)
        }]))
    }
    membersForQuery(e, t) {
        return br(this.cubes.map(n => n[t])).sort( (n, s) => n.title > s.title ? 1 : -1)
    }
    membersGroupedByCube() {
        const e = ["measures", "dimensions", "segments", "timeDimensions"];
        return this.cubes.reduce( (t, n) => (e.forEach(s => {
            let i = n[s];
            s === "timeDimensions" && (i = n.dimensions.filter(u => u.type === "time")),
            t[s] = [...t[s], {
                cubeName: n.name,
                cubeTitle: n.title,
                type: n.type,
                public: n.public,
                members: i
            }]
        }
        ),
        t), {
            measures: [],
            dimensions: [],
            segments: [],
            timeDimensions: []
        })
    }
    resolveMember(e, t) {
        const [n] = e.split(".");
        if (!this.cubesMap[n])
            return {
                title: e,
                error: `Cube not found ${n} for path '${e}'`
            };
        const i = (Array.isArray(t) ? t : [t]).map(u => this.cubesMap[n][u] && this.cubesMap[n][u][e]).find(u => u);
        return i || {
            title: e,
            error: `Path not found '${e}'`
        }
    }
    defaultTimeDimensionNameFor(e) {
        const [t] = e.split(".");
        return this.cubesMap[t] ? Object.keys(this.cubesMap[t].dimensions || {}).find(n => this.cubesMap[t].dimensions[n].type === "time") : null
    }
    filterOperatorsForMember(e, t) {
        const n = this.resolveMember(e, t);
        return Ge[n.type] || Ge.string
    }
}
class Mr {
    constructor(e) {
        this.progressResponse = e
    }
    stage() {
        return this.progressResponse.stage
    }
    timeElapsed() {
        return this.progressResponse.timeElapsed
    }
}
class Sr {
    constructor({authorization: e, apiUrl: t, method: n, headers: s={}, credentials: i}) {
        this.authorization = e,
        this.apiUrl = t,
        this.method = n,
        this.headers = s,
        this.credentials = i
    }
    request(e, {baseRequestId: t, ...n}) {
        let s = 1;
        const i = new URLSearchParams(n && Object.keys(n).map(p => ({
            [p]: typeof n[p] == "object" ? JSON.stringify(n[p]) : n[p]
        })).reduce( (p, w) => ({
            ...p,
            ...w
        }), {}));
        let u = `${this.apiUrl}/${e}${i.toString().length ? `?${i}` : ""}`;
        const c = this.method || (u.length < 2e3 ? "GET" : "POST");
        c === "POST" && (u = `${this.apiUrl}/${e}`,
        this.headers["Content-Type"] = "application/json");
        const b = () => wr(u, {
            method: c,
            headers: {
                Authorization: this.authorization,
                "x-request-id": t && `${t}-span-${s++}`,
                ...this.headers
            },
            credentials: this.credentials,
            body: c === "POST" ? JSON.stringify(n) : null
        });
        return {
            async subscribe(p) {
                let w = {
                    error: "network Error"
                };
                try {
                    w = await b()
                } finally {
                    return p(w, () => this.subscribe(p))
                }
            }
        }
    }
}
class Ar extends Error {
    constructor(e, t, n) {
        super(e),
        this.response = t,
        this.status = n
    }
}
let xr = 0;
const nt = "Mutex has been changed"
  , Q = {
    DEFAULT: "default",
    COMPACT: "compact"
};
function Rr(r) {
    return new Promise(async (e, t) => {
        try {
            e(await r)
        } catch (n) {
            n !== nt && t(n)
        }
    }
    )
}
class Tr {
    constructor(e, t) {
        if (e !== null && !Array.isArray(e) && typeof e == "object" && (t = e,
        e = void 0),
        t = t || {},
        !t.transport && !t.apiUrl)
            throw new Error("The `apiUrl` option is required");
        this.apiToken = e,
        this.apiUrl = t.apiUrl,
        this.method = t.method,
        this.headers = t.headers || {},
        this.credentials = t.credentials,
        this.transport = t.transport || new Sr({
            authorization: typeof e == "function" ? void 0 : e,
            apiUrl: this.apiUrl,
            method: this.method,
            headers: this.headers,
            credentials: this.credentials
        }),
        this.pollInterval = t.pollInterval || 5,
        this.parseDateMeasures = t.parseDateMeasures,
        this.castNumerics = typeof t.castNumerics == "boolean" ? t.castNumerics : !1,
        this.updateAuthorizationPromise = null
    }
    request(e, t) {
        return this.transport.request(e, {
            baseRequestId: st(),
            ...t
        })
    }
    loadMethod(e, t, n, s) {
        const i = ++xr;
        typeof n == "function" && !s && (s = n,
        n = void 0),
        n = n || {};
        const u = n.mutexKey || "default";
        n.mutexObj && (n.mutexObj[u] = i);
        const c = this.updateTransportAuthorization().then( () => e());
        let b = !0
          , p = !1;
        const w = async () => {
            const g = await c;
            if (n.mutexObj && n.mutexObj[u] !== i)
                throw p = !0,
                g.unsubscribe && await g.unsubscribe(),
                nt
        }
          , d = async (g, _) => {
            const M = await c
              , j = async () => n.subscribe && !p ? (M.unsubscribe || await new Promise(S => setTimeout( () => S(), this.pollInterval * 1e3)),
            _()) : null
              , U = async S => p ? null : (S && await new Promise(x => setTimeout( () => x(), this.pollInterval * 1e3)),
            _());
            if (n.subscribe && !b && await this.updateTransportAuthorization(),
            b = !1,
            g.status === 502)
                return await w(),
                U(!0);
            let f = {}
              , v = "";
            try {
                v = await g.text(),
                f = JSON.parse(v)
            } catch {
                f.error = v
            }
            if (f.error === "Continue wait")
                return await w(),
                n.progressCallback && n.progressCallback(new Mr(f)),
                U();
            if (g.status !== 200) {
                await w(),
                !n.subscribe && M.unsubscribe && await M.unsubscribe();
                const S = new Ar(f.error,f,g.status);
                if (s)
                    s(S);
                else
                    throw S;
                return j()
            }
            await w(),
            !n.subscribe && M.unsubscribe && await M.unsubscribe();
            const E = t(f);
            if (s)
                s(null, E);
            else
                return E;
            return j()
        }
          , D = c.then(g => Rr(g.subscribe(d)));
        return s ? {
            unsubscribe: async () => {
                const g = await c;
                return p = !0,
                g.unsubscribe ? g.unsubscribe() : null
            }
        } : D
    }
    async updateTransportAuthorization() {
        if (this.updateAuthorizationPromise) {
            await this.updateAuthorizationPromise;
            return
        }
        typeof this.apiToken == "function" && (this.updateAuthorizationPromise = new Promise(async (e, t) => {
            try {
                const n = await this.apiToken();
                this.transport.authorization !== n && (this.transport.authorization = n),
                e()
            } catch (n) {
                t(n)
            } finally {
                this.updateAuthorizationPromise = null
            }
        }
        ),
        await this.updateAuthorizationPromise)
    }
    patchQueryInternal(e, t) {
        return t === Q.COMPACT && e.responseFormat !== Q.COMPACT ? {
            ...e,
            responseFormat: Q.COMPACT
        } : e
    }
    loadResponseInternal(e, t={}) {
        return e.results.length && (t.castNumerics && e.results.forEach(n => {
            const s = Object.entries({
                ...n.annotation.measures,
                ...n.annotation.dimensions
            }).map( ([i,u]) => {
                if (u.type === "number")
                    return i
            }
            ).filter(Boolean);
            n.data = n.data.map(i => (s.forEach(u => {
                i[u] != null && (i[u] = Number(i[u]))
            }
            ),
            i))
        }
        ),
        e.results[0].query.responseFormat && e.results[0].query.responseFormat === Q.COMPACT && e.results.forEach( (n, s) => {
            const i = [];
            n.data.dataset.forEach(u => {
                const c = {};
                n.data.members.forEach( (b, p) => {
                    c[b] = u[p]
                }
                ),
                i.push(c)
            }
            ),
            e.results[s].data = i
        }
        )),
        new k(e,{
            parseDateMeasures: this.parseDateMeasures
        })
    }
    load(e, t, n, s=Q.DEFAULT) {
        return t = {
            castNumerics: this.castNumerics,
            ...t
        },
        s === Q.COMPACT && (Array.isArray(e) ? e = e.map(i => this.patchQueryInternal(i, Q.COMPACT)) : e = this.patchQueryInternal(e, Q.COMPACT)),
        this.loadMethod( () => this.request("load", {
            query: e,
            queryType: "multi"
        }), i => this.loadResponseInternal(i, t), t, n)
    }
    subscribe(e, t, n, s=Q.DEFAULT) {
        return t = {
            castNumerics: this.castNumerics,
            ...t
        },
        s === Q.COMPACT && (Array.isArray(e) ? e = e.map(i => this.patchQueryInternal(i, Q.COMPACT)) : e = this.patchQueryInternal(e, Q.COMPACT)),
        this.loadMethod( () => this.request("subscribe", {
            query: e,
            queryType: "multi"
        }), i => this.loadResponseInternal(i, t), {
            ...t,
            subscribe: !0
        }, n)
    }
    sql(e, t, n) {
        return this.loadMethod( () => this.request("sql", {
            query: e
        }), s => Array.isArray(s) ? s.map(i => new Ve(i)) : new Ve(s), t, n)
    }
    meta(e, t) {
        return this.loadMethod( () => this.request("meta"), n => new Or(n), e, t)
    }
    dryRun(e, t, n) {
        return this.loadMethod( () => this.request("dry-run", {
            query: e
        }), s => s, t, n)
    }
}
var Pr = (r, e) => new Tr(r,e);
export {k as R, Pr as i};
