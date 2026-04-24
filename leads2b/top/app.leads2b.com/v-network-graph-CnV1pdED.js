import {j as U, E as Kt, l as Oe, k as T, L as R, y as F, Y as pt, o as _, c as A, d as we, u as S, F as q, f as te, m as K, p as V, e as pe, H as ie, a as yi, a5 as jn, ag as ge, ah as me, n as zt, cu as Qr, D as $e, z as Ue, aq as ke, P as ft, G as It, V as Jr, R as Te, b as Ke, bi as kt, M as Ln, s as Ge, a2 as Me, bG as ea, Q as ta, W as na, t as po} from "./vendor-DIc2GtcL.js";
import {d as oa} from "./d3-dispatch-kxCwF96_.js";
var bi = typeof global == "object" && global && global.Object === Object && global
  , ia = typeof self == "object" && self && self.Object === Object && self
  , Pe = bi || ia || Function("return this")()
  , Ve = Pe.Symbol
  , wi = Object.prototype
  , ra = wi.hasOwnProperty
  , aa = wi.toString
  , gt = Ve ? Ve.toStringTag : void 0;
function sa(e) {
    var t = ra.call(e, gt)
      , n = e[gt];
    try {
        e[gt] = void 0;
        var o = !0
    } catch {}
    var i = aa.call(e);
    return o && (t ? e[gt] = n : delete e[gt]),
    i
}
var la = Object.prototype
  , ua = la.toString;
function ca(e) {
    return ua.call(e)
}
var da = "[object Null]"
  , ha = "[object Undefined]"
  , go = Ve ? Ve.toStringTag : void 0;
function tt(e) {
    return e == null ? e === void 0 ? ha : da : go && go in Object(e) ? sa(e) : ca(e)
}
function Fe(e) {
    return e != null && typeof e == "object"
}
var fa = "[object Symbol]";
function xi(e) {
    return typeof e == "symbol" || Fe(e) && tt(e) == fa
}
function va(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length, i = Array(o); ++n < o; )
        i[n] = t(e[n], n, e);
    return i
}
var Qe = Array.isArray
  , pa = 1 / 0
  , mo = Ve ? Ve.prototype : void 0
  , yo = mo ? mo.toString : void 0;
function Ei(e) {
    if (typeof e == "string")
        return e;
    if (Qe(e))
        return va(e, Ei) + "";
    if (xi(e))
        return yo ? yo.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -pa ? "-0" : t
}
var ga = /\s/;
function ma(e) {
    for (var t = e.length; t-- && ga.test(e.charAt(t)); )
        ;
    return t
}
var ya = /^\s+/;
function ba(e) {
    return e && e.slice(0, ma(e) + 1).replace(ya, "")
}
function ze(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var bo = NaN
  , wa = /^[-+]0x[0-9a-f]+$/i
  , xa = /^0b[01]+$/i
  , Ea = /^0o[0-7]+$/i
  , Sa = parseInt;
function Rt(e) {
    if (typeof e == "number")
        return e;
    if (xi(e))
        return bo;
    if (ze(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = ze(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = ba(e);
    var n = xa.test(e);
    return n || Ea.test(e) ? Sa(e.slice(2), n ? 2 : 8) : wa.test(e) ? bo : +e
}
var wo = 1 / 0
  , ka = 17976931348623157e292;
function Pa(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (e = Rt(e),
    e === wo || e === -wo) {
        var t = e < 0 ? -1 : 1;
        return t * ka
    }
    return e === e ? e : 0
}
function Si(e) {
    var t = Pa(e)
      , n = t % 1;
    return t === t ? n ? t - n : t : 0
}
function ki(e) {
    return e
}
var Ma = "[object AsyncFunction]"
  , _a = "[object Function]"
  , Oa = "[object GeneratorFunction]"
  , Ta = "[object Proxy]";
function Dn(e) {
    if (!ze(e))
        return !1;
    var t = tt(e);
    return t == _a || t == Oa || t == Ma || t == Ta
}
var fn = Pe["__core-js_shared__"]
  , xo = function() {
    var e = /[^.]+$/.exec(fn && fn.keys && fn.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function za(e) {
    return !!xo && xo in e
}
var Ia = Function.prototype
  , Ca = Ia.toString;
function nt(e) {
    if (e != null) {
        try {
            return Ca.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var Aa = /[\\^$.*+?()[\]{}|]/g
  , Na = /^\[object .+?Constructor\]$/
  , $a = Function.prototype
  , ja = Object.prototype
  , La = $a.toString
  , Da = ja.hasOwnProperty
  , Za = RegExp("^" + La.call(Da).replace(Aa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Ba(e) {
    if (!ze(e) || za(e))
        return !1;
    var t = Dn(e) ? Za : Na;
    return t.test(nt(e))
}
function Ra(e, t) {
    return e == null ? void 0 : e[t]
}
function ot(e, t) {
    var n = Ra(e, t);
    return Ba(n) ? n : void 0
}
var En = ot(Pe, "WeakMap")
  , Eo = Object.create
  , Wa = function() {
    function e() {}
    return function(t) {
        if (!ze(t))
            return {};
        if (Eo)
            return Eo(t);
        e.prototype = t;
        var n = new e;
        return e.prototype = void 0,
        n
    }
}();
function Ha(e, t, n) {
    switch (n.length) {
    case 0:
        return e.call(t);
    case 1:
        return e.call(t, n[0]);
    case 2:
        return e.call(t, n[0], n[1]);
    case 3:
        return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}
function Va() {}
function Fa(e, t) {
    var n = -1
      , o = e.length;
    for (t || (t = Array(o)); ++n < o; )
        t[n] = e[n];
    return t
}
var Ua = 800
  , Ga = 16
  , Xa = Date.now;
function qa(e) {
    var t = 0
      , n = 0;
    return function() {
        var o = Xa()
          , i = Ga - (o - n);
        if (n = o,
        i > 0) {
            if (++t >= Ua)
                return arguments[0]
        } else
            t = 0;
        return e.apply(void 0, arguments)
    }
}
function Ya(e) {
    return function() {
        return e
    }
}
var Wt = function() {
    try {
        var e = ot(Object, "defineProperty");
        return e({}, "", {}),
        e
    } catch {}
}()
  , Ka = Wt ? function(e, t) {
    return Wt(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Ya(t),
        writable: !0
    })
}
: ki;
const Qa = Ka;
var Ja = qa(Qa);
function es(e, t, n, o) {
    for (var i = e.length, r = n + (o ? 1 : -1); o ? r-- : ++r < i; )
        if (t(e[r], r, e))
            return r;
    return -1
}
function ts(e) {
    return e !== e
}
function ns(e, t, n) {
    for (var o = n - 1, i = e.length; ++o < i; )
        if (e[o] === t)
            return o;
    return -1
}
function os(e, t, n) {
    return t === t ? ns(e, t, n) : es(e, ts, n)
}
function is(e, t) {
    var n = e == null ? 0 : e.length;
    return !!n && os(e, t, 0) > -1
}
var rs = 9007199254740991
  , as = /^(?:0|[1-9]\d*)$/;
function Pi(e, t) {
    var n = typeof e;
    return t = t ?? rs,
    !!t && (n == "number" || n != "symbol" && as.test(e)) && e > -1 && e % 1 == 0 && e < t
}
function Zn(e, t, n) {
    t == "__proto__" && Wt ? Wt(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
function Ct(e, t) {
    return e === t || e !== e && t !== t
}
var ss = Object.prototype
  , ls = ss.hasOwnProperty;
function us(e, t, n) {
    var o = e[t];
    (!(ls.call(e, t) && Ct(o, n)) || n === void 0 && !(t in e)) && Zn(e, t, n)
}
function cs(e, t, n, o) {
    var i = !n;
    n || (n = {});
    for (var r = -1, a = t.length; ++r < a; ) {
        var s = t[r]
          , l = o ? o(n[s], e[s], s, n, e) : void 0;
        l === void 0 && (l = e[s]),
        i ? Zn(n, s, l) : us(n, s, l)
    }
    return n
}
var So = Math.max;
function ds(e, t, n) {
    return t = So(t === void 0 ? e.length - 1 : t, 0),
    function() {
        for (var o = arguments, i = -1, r = So(o.length - t, 0), a = Array(r); ++i < r; )
            a[i] = o[t + i];
        i = -1;
        for (var s = Array(t + 1); ++i < t; )
            s[i] = o[i];
        return s[t] = n(a),
        Ha(e, this, s)
    }
}
function hs(e, t) {
    return Ja(ds(e, t, ki), e + "")
}
var fs = 9007199254740991;
function Mi(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fs
}
function Qt(e) {
    return e != null && Mi(e.length) && !Dn(e)
}
function _i(e, t, n) {
    if (!ze(n))
        return !1;
    var o = typeof t;
    return (o == "number" ? Qt(n) && Pi(t, n.length) : o == "string" && t in n) ? Ct(n[t], e) : !1
}
function Oi(e) {
    return hs(function(t, n) {
        var o = -1
          , i = n.length
          , r = i > 1 ? n[i - 1] : void 0
          , a = i > 2 ? n[2] : void 0;
        for (r = e.length > 3 && typeof r == "function" ? (i--,
        r) : void 0,
        a && _i(n[0], n[1], a) && (r = i < 3 ? void 0 : r,
        i = 1),
        t = Object(t); ++o < i; ) {
            var s = n[o];
            s && e(t, s, o, r)
        }
        return t
    })
}
var vs = Object.prototype;
function Bn(e) {
    var t = e && e.constructor
      , n = typeof t == "function" && t.prototype || vs;
    return e === n
}
function ps(e, t) {
    for (var n = -1, o = Array(e); ++n < e; )
        o[n] = t(n);
    return o
}
var gs = "[object Arguments]";
function ko(e) {
    return Fe(e) && tt(e) == gs
}
var Ti = Object.prototype
  , ms = Ti.hasOwnProperty
  , ys = Ti.propertyIsEnumerable
  , bs = ko(function() {
    return arguments
}()) ? ko : function(e) {
    return Fe(e) && ms.call(e, "callee") && !ys.call(e, "callee")
}
;
const Sn = bs;
function ws() {
    return !1
}
var zi = typeof exports == "object" && exports && !exports.nodeType && exports
  , Po = zi && typeof module == "object" && module && !module.nodeType && module
  , xs = Po && Po.exports === zi
  , Mo = xs ? Pe.Buffer : void 0
  , Es = Mo ? Mo.isBuffer : void 0
  , Ht = Es || ws
  , Ss = "[object Arguments]"
  , ks = "[object Array]"
  , Ps = "[object Boolean]"
  , Ms = "[object Date]"
  , _s = "[object Error]"
  , Os = "[object Function]"
  , Ts = "[object Map]"
  , zs = "[object Number]"
  , Is = "[object Object]"
  , Cs = "[object RegExp]"
  , As = "[object Set]"
  , Ns = "[object String]"
  , $s = "[object WeakMap]"
  , js = "[object ArrayBuffer]"
  , Ls = "[object DataView]"
  , Ds = "[object Float32Array]"
  , Zs = "[object Float64Array]"
  , Bs = "[object Int8Array]"
  , Rs = "[object Int16Array]"
  , Ws = "[object Int32Array]"
  , Hs = "[object Uint8Array]"
  , Vs = "[object Uint8ClampedArray]"
  , Fs = "[object Uint16Array]"
  , Us = "[object Uint32Array]"
  , Q = {};
Q[Ds] = Q[Zs] = Q[Bs] = Q[Rs] = Q[Ws] = Q[Hs] = Q[Vs] = Q[Fs] = Q[Us] = !0;
Q[Ss] = Q[ks] = Q[js] = Q[Ps] = Q[Ls] = Q[Ms] = Q[_s] = Q[Os] = Q[Ts] = Q[zs] = Q[Is] = Q[Cs] = Q[As] = Q[Ns] = Q[$s] = !1;
function Gs(e) {
    return Fe(e) && Mi(e.length) && !!Q[tt(e)]
}
function Xs(e) {
    return function(t) {
        return e(t)
    }
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports
  , Et = Ii && typeof module == "object" && module && !module.nodeType && module
  , qs = Et && Et.exports === Ii
  , vn = qs && bi.process
  , _o = function() {
    try {
        var e = Et && Et.require && Et.require("util").types;
        return e || vn && vn.binding && vn.binding("util")
    } catch {}
}()
  , Oo = _o && _o.isTypedArray
  , Rn = Oo ? Xs(Oo) : Gs
  , Ys = Object.prototype
  , Ks = Ys.hasOwnProperty;
function Ci(e, t) {
    var n = Qe(e)
      , o = !n && Sn(e)
      , i = !n && !o && Ht(e)
      , r = !n && !o && !i && Rn(e)
      , a = n || o || i || r
      , s = a ? ps(e.length, String) : []
      , l = s.length;
    for (var u in e)
        (t || Ks.call(e, u)) && !(a && (u == "length" || i && (u == "offset" || u == "parent") || r && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Pi(u, l))) && s.push(u);
    return s
}
function Ai(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var Qs = Ai(Object.keys, Object)
  , Js = Object.prototype
  , el = Js.hasOwnProperty;
function tl(e) {
    if (!Bn(e))
        return Qs(e);
    var t = [];
    for (var n in Object(e))
        el.call(e, n) && n != "constructor" && t.push(n);
    return t
}
function nl(e) {
    return Qt(e) ? Ci(e) : tl(e)
}
function ol(e) {
    var t = [];
    if (e != null)
        for (var n in Object(e))
            t.push(n);
    return t
}
var il = Object.prototype
  , rl = il.hasOwnProperty;
function al(e) {
    if (!ze(e))
        return ol(e);
    var t = Bn(e)
      , n = [];
    for (var o in e)
        o == "constructor" && (t || !rl.call(e, o)) || n.push(o);
    return n
}
function Ni(e) {
    return Qt(e) ? Ci(e, !0) : al(e)
}
var Pt = ot(Object, "create");
function sl() {
    this.__data__ = Pt ? Pt(null) : {},
    this.size = 0
}
function ll(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var ul = "__lodash_hash_undefined__"
  , cl = Object.prototype
  , dl = cl.hasOwnProperty;
function hl(e) {
    var t = this.__data__;
    if (Pt) {
        var n = t[e];
        return n === ul ? void 0 : n
    }
    return dl.call(t, e) ? t[e] : void 0
}
var fl = Object.prototype
  , vl = fl.hasOwnProperty;
function pl(e) {
    var t = this.__data__;
    return Pt ? t[e] !== void 0 : vl.call(t, e)
}
var gl = "__lodash_hash_undefined__";
function ml(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = Pt && t === void 0 ? gl : t,
    this
}
function Je(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var o = e[t];
        this.set(o[0], o[1])
    }
}
Je.prototype.clear = sl;
Je.prototype.delete = ll;
Je.prototype.get = hl;
Je.prototype.has = pl;
Je.prototype.set = ml;
function yl() {
    this.__data__ = [],
    this.size = 0
}
function Jt(e, t) {
    for (var n = e.length; n--; )
        if (Ct(e[n][0], t))
            return n;
    return -1
}
var bl = Array.prototype
  , wl = bl.splice;
function xl(e) {
    var t = this.__data__
      , n = Jt(t, e);
    if (n < 0)
        return !1;
    var o = t.length - 1;
    return n == o ? t.pop() : wl.call(t, n, 1),
    --this.size,
    !0
}
function El(e) {
    var t = this.__data__
      , n = Jt(t, e);
    return n < 0 ? void 0 : t[n][1]
}
function Sl(e) {
    return Jt(this.__data__, e) > -1
}
function kl(e, t) {
    var n = this.__data__
      , o = Jt(n, e);
    return o < 0 ? (++this.size,
    n.push([e, t])) : n[o][1] = t,
    this
}
function je(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var o = e[t];
        this.set(o[0], o[1])
    }
}
je.prototype.clear = yl;
je.prototype.delete = xl;
je.prototype.get = El;
je.prototype.has = Sl;
je.prototype.set = kl;
var Mt = ot(Pe, "Map");
function Pl() {
    this.size = 0,
    this.__data__ = {
        hash: new Je,
        map: new (Mt || je),
        string: new Je
    }
}
function Ml(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
function en(e, t) {
    var n = e.__data__;
    return Ml(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
function _l(e) {
    var t = en(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
function Ol(e) {
    return en(this, e).get(e)
}
function Tl(e) {
    return en(this, e).has(e)
}
function zl(e, t) {
    var n = en(this, e)
      , o = n.size;
    return n.set(e, t),
    this.size += n.size == o ? 0 : 1,
    this
}
function it(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var o = e[t];
        this.set(o[0], o[1])
    }
}
it.prototype.clear = Pl;
it.prototype.delete = _l;
it.prototype.get = Ol;
it.prototype.has = Tl;
it.prototype.set = zl;
function To(e) {
    return e == null ? "" : Ei(e)
}
function Il(e, t) {
    for (var n = -1, o = t.length, i = e.length; ++n < o; )
        e[i + n] = t[n];
    return e
}
var $i = Ai(Object.getPrototypeOf, Object)
  , Cl = "[object Object]"
  , Al = Function.prototype
  , Nl = Object.prototype
  , ji = Al.toString
  , $l = Nl.hasOwnProperty
  , jl = ji.call(Object);
function Li(e) {
    if (!Fe(e) || tt(e) != Cl)
        return !1;
    var t = $i(e);
    if (t === null)
        return !0;
    var n = $l.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && ji.call(n) == jl
}
function Ll(e, t, n) {
    var o = -1
      , i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t),
    n = n > i ? i : n,
    n < 0 && (n += i),
    i = t > n ? 0 : n - t >>> 0,
    t >>>= 0;
    for (var r = Array(i); ++o < i; )
        r[o] = e[o + t];
    return r
}
var Dl = Pe.isFinite
  , Zl = Math.min;
function Bl(e) {
    var t = Math[e];
    return function(n, o) {
        if (n = Rt(n),
        o = o == null ? 0 : Zl(Si(o), 292),
        o && Dl(n)) {
            var i = (To(n) + "e").split("e")
              , r = t(i[0] + "e" + (+i[1] + o));
            return i = (To(r) + "e").split("e"),
            +(i[0] + "e" + (+i[1] - o))
        }
        return t(n)
    }
}
var Rl = Math.ceil
  , Wl = Math.max;
function Wn(e, t, n) {
    (n ? _i(e, t, n) : t === void 0) ? t = 1 : t = Wl(Si(t), 0);
    var o = e == null ? 0 : e.length;
    if (!o || t < 1)
        return [];
    for (var i = 0, r = 0, a = Array(Rl(o / t)); i < o; )
        a[r++] = Ll(e, i, i += t);
    return a
}
function Hl() {
    this.__data__ = new je,
    this.size = 0
}
function Vl(e) {
    var t = this.__data__
      , n = t.delete(e);
    return this.size = t.size,
    n
}
function Fl(e) {
    return this.__data__.get(e)
}
function Ul(e) {
    return this.__data__.has(e)
}
var Gl = 200;
function Xl(e, t) {
    var n = this.__data__;
    if (n instanceof je) {
        var o = n.__data__;
        if (!Mt || o.length < Gl - 1)
            return o.push([e, t]),
            this.size = ++n.size,
            this;
        n = this.__data__ = new it(o)
    }
    return n.set(e, t),
    this.size = n.size,
    this
}
function Ne(e) {
    var t = this.__data__ = new je(e);
    this.size = t.size
}
Ne.prototype.clear = Hl;
Ne.prototype.delete = Vl;
Ne.prototype.get = Fl;
Ne.prototype.has = Ul;
Ne.prototype.set = Xl;
var Di = typeof exports == "object" && exports && !exports.nodeType && exports
  , zo = Di && typeof module == "object" && module && !module.nodeType && module
  , ql = zo && zo.exports === Di
  , Io = ql ? Pe.Buffer : void 0
  , Co = Io ? Io.allocUnsafe : void 0;
function Yl(e, t) {
    if (t)
        return e.slice();
    var n = e.length
      , o = Co ? Co(n) : new e.constructor(n);
    return e.copy(o),
    o
}
function Kl(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length, i = 0, r = []; ++n < o; ) {
        var a = e[n];
        t(a, n, e) && (r[i++] = a)
    }
    return r
}
function Ql() {
    return []
}
var Jl = Object.prototype
  , eu = Jl.propertyIsEnumerable
  , Ao = Object.getOwnPropertySymbols
  , tu = Ao ? function(e) {
    return e == null ? [] : (e = Object(e),
    Kl(Ao(e), function(t) {
        return eu.call(e, t)
    }))
}
: Ql;
const nu = tu;
function ou(e, t, n) {
    var o = t(e);
    return Qe(e) ? o : Il(o, n(e))
}
function No(e) {
    return ou(e, nl, nu)
}
var kn = ot(Pe, "DataView")
  , Pn = ot(Pe, "Promise")
  , ut = ot(Pe, "Set")
  , $o = "[object Map]"
  , iu = "[object Object]"
  , jo = "[object Promise]"
  , Lo = "[object Set]"
  , Do = "[object WeakMap]"
  , Zo = "[object DataView]"
  , ru = nt(kn)
  , au = nt(Mt)
  , su = nt(Pn)
  , lu = nt(ut)
  , uu = nt(En)
  , qe = tt;
(kn && qe(new kn(new ArrayBuffer(1))) != Zo || Mt && qe(new Mt) != $o || Pn && qe(Pn.resolve()) != jo || ut && qe(new ut) != Lo || En && qe(new En) != Do) && (qe = function(e) {
    var t = tt(e)
      , n = t == iu ? e.constructor : void 0
      , o = n ? nt(n) : "";
    if (o)
        switch (o) {
        case ru:
            return Zo;
        case au:
            return $o;
        case su:
            return jo;
        case lu:
            return Lo;
        case uu:
            return Do
        }
    return t
}
);
const Bo = qe;
var cu = Pe.Uint8Array;
const Vt = cu;
function du(e) {
    var t = new e.constructor(e.byteLength);
    return new Vt(t).set(new Vt(e)),
    t
}
function hu(e, t) {
    var n = t ? du(e.buffer) : e.buffer;
    return new e.constructor(n,e.byteOffset,e.length)
}
function fu(e) {
    return typeof e.constructor == "function" && !Bn(e) ? Wa($i(e)) : {}
}
var vu = "__lodash_hash_undefined__";
function pu(e) {
    return this.__data__.set(e, vu),
    this
}
function gu(e) {
    return this.__data__.has(e)
}
function _t(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.__data__ = new it; ++t < n; )
        this.add(e[t])
}
_t.prototype.add = _t.prototype.push = pu;
_t.prototype.has = gu;
function mu(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
        if (t(e[n], n, e))
            return !0;
    return !1
}
function Zi(e, t) {
    return e.has(t)
}
var yu = 1
  , bu = 2;
function Bi(e, t, n, o, i, r) {
    var a = n & yu
      , s = e.length
      , l = t.length;
    if (s != l && !(a && l > s))
        return !1;
    var u = r.get(e)
      , c = r.get(t);
    if (u && c)
        return u == t && c == e;
    var v = -1
      , h = !0
      , d = n & bu ? new _t : void 0;
    for (r.set(e, t),
    r.set(t, e); ++v < s; ) {
        var x = e[v]
          , m = t[v];
        if (o)
            var p = a ? o(m, x, v, t, e, r) : o(x, m, v, e, t, r);
        if (p !== void 0) {
            if (p)
                continue;
            h = !1;
            break
        }
        if (d) {
            if (!mu(t, function(f, g) {
                if (!Zi(d, g) && (x === f || i(x, f, n, o, r)))
                    return d.push(g)
            })) {
                h = !1;
                break
            }
        } else if (!(x === m || i(x, m, n, o, r))) {
            h = !1;
            break
        }
    }
    return r.delete(e),
    r.delete(t),
    h
}
function wu(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(o, i) {
        n[++t] = [i, o]
    }),
    n
}
function Hn(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(o) {
        n[++t] = o
    }),
    n
}
var xu = 1
  , Eu = 2
  , Su = "[object Boolean]"
  , ku = "[object Date]"
  , Pu = "[object Error]"
  , Mu = "[object Map]"
  , _u = "[object Number]"
  , Ou = "[object RegExp]"
  , Tu = "[object Set]"
  , zu = "[object String]"
  , Iu = "[object Symbol]"
  , Cu = "[object ArrayBuffer]"
  , Au = "[object DataView]"
  , Ro = Ve ? Ve.prototype : void 0
  , pn = Ro ? Ro.valueOf : void 0;
function Nu(e, t, n, o, i, r, a) {
    switch (n) {
    case Au:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
        e = e.buffer,
        t = t.buffer;
    case Cu:
        return !(e.byteLength != t.byteLength || !r(new Vt(e), new Vt(t)));
    case Su:
    case ku:
    case _u:
        return Ct(+e, +t);
    case Pu:
        return e.name == t.name && e.message == t.message;
    case Ou:
    case zu:
        return e == t + "";
    case Mu:
        var s = wu;
    case Tu:
        var l = o & xu;
        if (s || (s = Hn),
        e.size != t.size && !l)
            return !1;
        var u = a.get(e);
        if (u)
            return u == t;
        o |= Eu,
        a.set(e, t);
        var c = Bi(s(e), s(t), o, i, r, a);
        return a.delete(e),
        c;
    case Iu:
        if (pn)
            return pn.call(e) == pn.call(t)
    }
    return !1
}
var $u = 1
  , ju = Object.prototype
  , Lu = ju.hasOwnProperty;
function Du(e, t, n, o, i, r) {
    var a = n & $u
      , s = No(e)
      , l = s.length
      , u = No(t)
      , c = u.length;
    if (l != c && !a)
        return !1;
    for (var v = l; v--; ) {
        var h = s[v];
        if (!(a ? h in t : Lu.call(t, h)))
            return !1
    }
    var d = r.get(e)
      , x = r.get(t);
    if (d && x)
        return d == t && x == e;
    var m = !0;
    r.set(e, t),
    r.set(t, e);
    for (var p = a; ++v < l; ) {
        h = s[v];
        var f = e[h]
          , g = t[h];
        if (o)
            var E = a ? o(g, f, h, t, e, r) : o(f, g, h, e, t, r);
        if (!(E === void 0 ? f === g || i(f, g, n, o, r) : E)) {
            m = !1;
            break
        }
        p || (p = h == "constructor")
    }
    if (m && !p) {
        var w = e.constructor
          , y = t.constructor;
        w != y && "constructor"in e && "constructor"in t && !(typeof w == "function" && w instanceof w && typeof y == "function" && y instanceof y) && (m = !1)
    }
    return r.delete(e),
    r.delete(t),
    m
}
var Zu = 1
  , Wo = "[object Arguments]"
  , Ho = "[object Array]"
  , $t = "[object Object]"
  , Bu = Object.prototype
  , Vo = Bu.hasOwnProperty;
function Ru(e, t, n, o, i, r) {
    var a = Qe(e)
      , s = Qe(t)
      , l = a ? Ho : Bo(e)
      , u = s ? Ho : Bo(t);
    l = l == Wo ? $t : l,
    u = u == Wo ? $t : u;
    var c = l == $t
      , v = u == $t
      , h = l == u;
    if (h && Ht(e)) {
        if (!Ht(t))
            return !1;
        a = !0,
        c = !1
    }
    if (h && !c)
        return r || (r = new Ne),
        a || Rn(e) ? Bi(e, t, n, o, i, r) : Nu(e, t, l, n, o, i, r);
    if (!(n & Zu)) {
        var d = c && Vo.call(e, "__wrapped__")
          , x = v && Vo.call(t, "__wrapped__");
        if (d || x) {
            var m = d ? e.value() : e
              , p = x ? t.value() : t;
            return r || (r = new Ne),
            i(m, p, n, o, r)
        }
    }
    return h ? (r || (r = new Ne),
    Du(e, t, n, o, i, r)) : !1
}
function Ri(e, t, n, o, i) {
    return e === t ? !0 : e == null || t == null || !Fe(e) && !Fe(t) ? e !== e && t !== t : Ru(e, t, n, o, Ri, i)
}
function Wu(e) {
    return function(t, n, o) {
        for (var i = -1, r = Object(t), a = o(t), s = a.length; s--; ) {
            var l = a[e ? s : ++i];
            if (n(r[l], l, r) === !1)
                break
        }
        return t
    }
}
var Hu = Wu()
  , gn = function() {
    return Pe.Date.now()
}
  , Vu = "Expected a function"
  , Fu = Math.max
  , Uu = Math.min;
function Gu(e, t, n) {
    var o, i, r, a, s, l, u = 0, c = !1, v = !1, h = !0;
    if (typeof e != "function")
        throw new TypeError(Vu);
    t = Rt(t) || 0,
    ze(n) && (c = !!n.leading,
    v = "maxWait"in n,
    r = v ? Fu(Rt(n.maxWait) || 0, t) : r,
    h = "trailing"in n ? !!n.trailing : h);
    function d(b) {
        var k = o
          , M = i;
        return o = i = void 0,
        u = b,
        a = e.apply(M, k),
        a
    }
    function x(b) {
        return u = b,
        s = setTimeout(f, t),
        c ? d(b) : a
    }
    function m(b) {
        var k = b - l
          , M = b - u
          , z = t - k;
        return v ? Uu(z, r - M) : z
    }
    function p(b) {
        var k = b - l
          , M = b - u;
        return l === void 0 || k >= t || k < 0 || v && M >= r
    }
    function f() {
        var b = gn();
        if (p(b))
            return g(b);
        s = setTimeout(f, m(b))
    }
    function g(b) {
        return s = void 0,
        h && o ? d(b) : (o = i = void 0,
        a)
    }
    function E() {
        s !== void 0 && clearTimeout(s),
        u = 0,
        o = l = i = s = void 0
    }
    function w() {
        return s === void 0 ? a : g(gn())
    }
    function y() {
        var b = gn()
          , k = p(b);
        if (o = arguments,
        i = this,
        l = b,
        k) {
            if (s === void 0)
                return x(l);
            if (v)
                return clearTimeout(s),
                s = setTimeout(f, t),
                d(l)
        }
        return s === void 0 && (s = setTimeout(f, t)),
        a
    }
    return y.cancel = E,
    y.flush = w,
    y
}
function Mn(e, t, n) {
    (n !== void 0 && !Ct(e[t], n) || n === void 0 && !(t in e)) && Zn(e, t, n)
}
function Xu(e) {
    return Fe(e) && Qt(e)
}
function _n(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
        return e[t]
}
function qu(e) {
    return cs(e, Ni(e))
}
function Yu(e, t, n, o, i, r, a) {
    var s = _n(e, n)
      , l = _n(t, n)
      , u = a.get(l);
    if (u) {
        Mn(e, n, u);
        return
    }
    var c = r ? r(s, l, n + "", e, t, a) : void 0
      , v = c === void 0;
    if (v) {
        var h = Qe(l)
          , d = !h && Ht(l)
          , x = !h && !d && Rn(l);
        c = l,
        h || d || x ? Qe(s) ? c = s : Xu(s) ? c = Fa(s) : d ? (v = !1,
        c = Yl(l, !0)) : x ? (v = !1,
        c = hu(l, !0)) : c = [] : Li(l) || Sn(l) ? (c = s,
        Sn(s) ? c = qu(s) : (!ze(s) || Dn(s)) && (c = fu(l))) : v = !1
    }
    v && (a.set(l, c),
    i(c, l, o, r, a),
    a.delete(l)),
    Mn(e, n, c)
}
function Vn(e, t, n, o, i) {
    e !== t && Hu(t, function(r, a) {
        if (i || (i = new Ne),
        ze(r))
            Yu(e, t, a, n, Vn, o, i);
        else {
            var s = o ? o(_n(e, a), r, a + "", e, t, i) : void 0;
            s === void 0 && (s = r),
            Mn(e, a, s)
        }
    }, Ni)
}
var Ku = Oi(function(e, t, n, o) {
    Vn(e, t, n, o)
});
const Qu = Ku;
function Ju(e, t, n) {
    for (var o = -1, i = e == null ? 0 : e.length; ++o < i; )
        if (n(t, e[o]))
            return !0;
    return !1
}
function Be(e, t) {
    return Ri(e, t)
}
var ec = Oi(function(e, t, n) {
    Vn(e, t, n)
})
  , Fo = Bl("round")
  , tc = 1 / 0
  , nc = ut && 1 / Hn(new ut([, -0]))[1] == tc ? function(e) {
    return new ut(e)
}
: Va
  , oc = 200;
function ic(e, t, n) {
    var o = -1
      , i = is
      , r = e.length
      , a = !0
      , s = []
      , l = s;
    if (n)
        a = !1,
        i = Ju;
    else if (r >= oc) {
        var u = t ? null : nc(e);
        if (u)
            return Hn(u);
        a = !1,
        i = Zi,
        l = new _t
    } else
        l = t ? [] : s;
    e: for (; ++o < r; ) {
        var c = e[o]
          , v = t ? t(c) : c;
        if (c = n || c !== 0 ? c : 0,
        a && v === v) {
            for (var h = l.length; h--; )
                if (l[h] === v)
                    continue e;
            t && l.push(v),
            s.push(c)
        } else
            i(l, v, n) || (l !== s && l.push(v),
            s.push(c))
    }
    return s
}
function rc(e) {
    return e && e.length ? ic(e) : []
}
var ac = Object.defineProperty
  , sc = Object.defineProperties
  , lc = Object.getOwnPropertyDescriptors
  , Uo = Object.getOwnPropertySymbols
  , uc = Object.prototype.hasOwnProperty
  , cc = Object.prototype.propertyIsEnumerable
  , de = Math.pow
  , Go = (e, t, n) => t in e ? ac(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , ce = (e, t) => {
    for (var n in t || (t = {}))
        uc.call(t, n) && Go(e, n, t[n]);
    if (Uo)
        for (var n of Uo(t))
            cc.call(t, n) && Go(e, n, t[n]);
    return e
}
  , Fn = (e, t) => sc(e, lc(t))
  , _e = (e, t, n) => new Promise( (o, i) => {
    var r = l => {
        try {
            s(n.next(l))
        } catch (u) {
            i(u)
        }
    }
      , a = l => {
        try {
            s(n.throw(l))
        } catch (u) {
            i(u)
        }
    }
      , s = l => l.done ? o(l.value) : Promise.resolve(l.value).then(r, a);
    s((n = n.apply(e, t)).next())
}
);
const dc = ["paths", "node-labels", "nodes", "focusring", "edge-labels", "edges", "base", "grid", "background", "root"];
function Ze(e) {
    return Qr(e) ? e : $e(e)
}
function X(e, t="Parameter") {
    if (e == null)
        throw new Error(`${t} is null`);
    return e
}
const Wi = Symbol("containers");
function hc(e) {
    Ue(Wi, e)
}
function Un() {
    const e = X(Ge(Wi), "containers");
    return {
        container: e.container,
        svg: e.svg,
        viewport: e.viewport,
        svgPanZoom: e.svgPanZoom
    }
}
class C {
    static value(t, n) {
        return t instanceof Function ? t(n) : t
    }
    static values(t, n) {
        return Object.values(t).filter(o => o instanceof Function).length === 0 ? t : Object.fromEntries(Object.entries(t).map( ([o,i]) => [o, i instanceof Function ? i(n) : i]))
    }
}
var L = (e => (e.CENTER = "center",
e.NORTH = "north",
e.NORTH_EAST = "north-east",
e.EAST = "east",
e.SOUTH_EAST = "south-east",
e.SOUTH = "south",
e.SOUTH_WEST = "south-west",
e.WEST = "west",
e.NORTH_WEST = "north-west",
e))(L || {});
function mn(e) {
    const t = {};
    return Object.assign(t, e(t))
}
function Kf(e) {
    return e
}
function Xo(e, t, n) {
    const o = C.values(t.normal, e);
    return o.type == "circle" ? {
        width: o.radius * 2 * n,
        height: o.radius * 2 * n
    } : {
        width: o.width * n,
        height: o.height * n
    }
}
function fc(e, t, n, o) {
    const i = Math.abs(e.x - n.x) < t.width / 2 + o.width / 2
      , r = Math.abs(e.y - n.y) < t.height / 2 + o.height / 2;
    return i && r
}
function At(e, t) {
    let n = 0;
    return t === 1 || e === void 0 || e === "none" ? n = e ?? 0 : typeof e == "string" ? n = e.split(/\s+/).map(o => parseInt(o) * t).filter(o => !isNaN(o)).join(" ") : n = e * t,
    n && n !== "0" ? n : void 0
}
function tn(e) {
    let t = 0;
    if (e === void 0 || e === "none")
        t = 0;
    else if (typeof e == "string") {
        const n = e.split(/\s+/).map(o => parseInt(o)).filter(o => !isNaN(o));
        n.length % 2 === 0 ? t = n.reduce( (o, i) => o + i, 0) : t = n.reduce( (o, i) => o + i, 0) * 2
    } else
        t = e * 2;
    return t
}
const qo = 20;
class vc {
    activate(t) {
        const {nodePositions: n, nodes: o, configs: i, emitter: r, scale: a, svgPanZoom: s} = t
          , l = v => {
            for (const [h,d] of Object.entries(v)) {
                const x = this.getOrCreateNodePosition(n, h);
                this.setNodePosition(x, d)
            }
        }
          , u = v => {
            const h = v.filter(m => !(m in n.value))
              , d = s.getViewArea()
              , x = a.value;
            for (const m of h) {
                const p = o.value[m]
                  , f = Xo(p, i.node, x)
                  , g = ce({}, d.center);
                for (; ; ) {
                    let w = !1;
                    for (const [y,b] of Object.entries(n.value)) {
                        if (m === y)
                            continue;
                        const k = o.value[y];
                        if (!k)
                            continue;
                        const M = Xo(k, i.node, x);
                        if (w = fc(g, f, b, M),
                        w)
                            break
                    }
                    if (w)
                        g.x += f.width + qo * x,
                        g.x + f.width / 2 > d.box.right && (g.x = d.center.x,
                        g.y += f.height + qo * x);
                    else
                        break
                }
                const E = this.getOrCreateNodePosition(n, m);
                this.setNodePosition(E, g)
            }
        }
        ;
        u(Object.keys(o.value));
        const c = F( () => Be(new Set(Object.keys(o.value)), new Set(Object.keys(n.value))), v => {
            v || u(Object.keys(o.value))
        }
        );
        r.on("node:dragstart", l),
        r.on("node:pointermove", l),
        r.on("node:dragend", l),
        this.onDeactivate = () => {
            c(),
            r.off("node:dragstart", l),
            r.off("node:pointermove", l),
            r.off("node:dragend", l)
        }
    }
    deactivate() {
        this.onDeactivate && this.onDeactivate()
    }
    setNodePosition(t, n) {
        t.value.x = Fo(n.x, 3),
        t.value.y = Fo(n.y, 3)
    }
    getOrCreateNodePosition(t, n) {
        const o = Oe(t.value, n);
        return o.value || (o.value = {
            x: 0,
            y: 0
        }),
        o
    }
}
function pc() {
    return {
        view: {
            scalingObjects: !1,
            panEnabled: !0,
            zoomEnabled: !0,
            minZoomLevel: .1,
            maxZoomLevel: 64,
            doubleClickZoomEnabled: !0,
            mouseWheelZoomEnabled: !0,
            boxSelectionEnabled: !1,
            autoPanAndZoomOnLoad: "center-content",
            fitContentMargin: "8%",
            autoPanOnResize: !0,
            layoutHandler: new vc,
            onSvgPanZoomInitialized: void 0,
            grid: {
                visible: !1,
                interval: 10,
                thickIncrements: 5,
                line: {
                    color: "#e0e0e0",
                    width: 1,
                    dasharray: 1
                },
                thick: {
                    color: "#cccccc",
                    width: 1,
                    dasharray: 0
                }
            },
            selection: {
                box: {
                    color: "#0000ff20",
                    strokeWidth: 1,
                    strokeColor: "#aaaaff",
                    strokeDasharray: 0
                },
                detector: e => {
                    const t = /Mac OS/.test(navigator.userAgent) ? e.metaKey : e.ctrlKey;
                    return e.type === "keydown" ? t : !t
                }
            },
            builtInLayerOrder: [],
            onBeforeInitialDisplay: void 0
        },
        node: mn(e => ({
            normal: {
                type: "circle",
                radius: 16,
                width: 32,
                height: 32,
                borderRadius: 4,
                color: "#4466cc",
                strokeWidth: 0,
                strokeColor: "#000000",
                strokeDasharray: 0
            },
            hover: {
                type: t => C.value(e.normal.type, t),
                radius: t => {
                    var n;
                    return ((n = C.value(e.normal.radius, t)) != null ? n : 0) + 2
                }
                ,
                width: t => {
                    var n;
                    return ((n = C.value(e.normal.width, t)) != null ? n : 0) + 2
                }
                ,
                height: t => {
                    var n;
                    return ((n = C.value(e.normal.height, t)) != null ? n : 0) + 2
                }
                ,
                borderRadius: t => {
                    var n;
                    return (n = C.value(e.normal.borderRadius, t)) != null ? n : 0
                }
                ,
                strokeWidth: t => C.value(e.normal.strokeWidth, t),
                strokeColor: t => C.value(e.normal.strokeColor, t),
                strokeDasharray: t => C.value(e.normal.strokeDasharray, t),
                color: "#3355bb"
            },
            selected: void 0,
            draggable: !0,
            selectable: !1,
            label: {
                visible: !0,
                fontFamily: void 0,
                fontSize: 11,
                lineHeight: 1.1,
                color: "#000000",
                background: void 0,
                margin: 4,
                direction: L.SOUTH,
                directionAutoAdjustment: !1,
                text: "name",
                handleNodeEvents: !0
            },
            focusring: {
                visible: !0,
                width: 4,
                padding: 3,
                color: "#eebb00"
            },
            zOrder: {
                enabled: !1,
                zIndex: 0,
                bringToFrontOnHover: !0,
                bringToFrontOnSelected: !0
            },
            transition: void 0
        })),
        edge: mn(e => ({
            normal: {
                width: 2,
                color: "#4466cc",
                dasharray: 0,
                linecap: "butt",
                animate: !1,
                animationSpeed: 50
            },
            hover: {
                width: t => C.value(e.normal.width, t) + 1,
                color: "#3355bb",
                dasharray: t => C.value(e.normal.dasharray, t),
                linecap: t => C.value(e.normal.linecap, t),
                animate: t => C.value(e.normal.animate, t),
                animationSpeed: t => C.value(e.normal.animationSpeed, t)
            },
            selected: {
                width: t => C.value(e.normal.width, t) + 1,
                color: "#dd8800",
                dasharray: t => {
                    const n = C.value(e.normal.width, t);
                    return `${n * 1.5} ${n * 2}`
                }
                ,
                linecap: t => C.value(e.normal.linecap, t),
                animate: t => C.value(e.normal.animate, t),
                animationSpeed: t => C.value(e.normal.animationSpeed, t)
            },
            selectable: !1,
            gap: 3,
            type: "straight",
            marker: {
                source: {
                    type: "none",
                    width: 5,
                    height: 5,
                    margin: -1,
                    offset: 0,
                    units: "strokeWidth",
                    color: null
                },
                target: {
                    type: "none",
                    width: 5,
                    height: 5,
                    margin: -1,
                    offset: 0,
                    units: "strokeWidth",
                    color: null
                }
            },
            margin: null,
            summarize: (t, n) => n.edge.type == "curve" ? !1 : null,
            summarized: {
                label: {
                    fontSize: 10,
                    lineHeight: 1,
                    color: "#4466cc"
                },
                shape: {
                    type: "rect",
                    radius: 6,
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    color: "#ffffff",
                    strokeWidth: 1,
                    strokeColor: "#4466cc",
                    strokeDasharray: void 0
                },
                stroke: {
                    width: 5,
                    color: "#4466cc",
                    dasharray: void 0,
                    linecap: void 0,
                    animate: !1,
                    animationSpeed: 50
                }
            },
            selfLoop: {
                radius: 12,
                isClockwise: !0,
                offset: 10,
                angle: 270
            },
            keepOrder: "clock",
            label: {
                fontFamily: void 0,
                fontSize: 11,
                lineHeight: 1.1,
                color: "#000000",
                background: void 0,
                margin: 4,
                padding: 4
            },
            zOrder: {
                enabled: !1,
                zIndex: 0,
                bringToFrontOnHover: !0,
                bringToFrontOnSelected: !0
            }
        })),
        path: mn(e => ({
            visible: !1,
            clickable: !1,
            hoverable: !1,
            curveInNode: !1,
            end: "centerOfNode",
            margin: 0,
            path: $e({
                width: 6,
                color: t => {
                    const n = ["#d5000088", "#c5116288", "#aa00ff88", "#6200ea88", "#304ffe88", "#2962ff88", "#0091ea88", "#00b8d488", "#00bfa588", "#00c85388", "#64dd1788", "#aeea0088", "#ffd60088", "#ffab0088", "#ff6d0088", "#dd2c0088"]
                      , o = t.edges.map(i => i.split("").reduce( (r, a) => (r = (r << 5) - r + a.charCodeAt(0),
                    r & r), 0)).reduce( (i, r) => i + r, 0);
                    return n[Math.abs(o) % n.length]
                }
                ,
                dasharray: void 0,
                linecap: "round",
                linejoin: "round",
                animate: !1,
                animationSpeed: 50
            }),
            normal: {
                width: t => C.value(e.path.width, t),
                color: t => C.value(e.path.color, t),
                dasharray: t => C.value(e.path.dasharray, t),
                linecap: t => C.value(e.path.linecap, t),
                linejoin: t => C.value(e.path.linejoin, t),
                animate: t => C.value(e.path.animate, t),
                animationSpeed: t => C.value(e.path.animationSpeed, t)
            },
            hover: {
                width: t => C.value(e.normal.width, t) + 2,
                color: t => C.value(e.normal.color, t),
                dasharray: t => C.value(e.normal.dasharray, t),
                linecap: t => C.value(e.normal.linecap, t),
                linejoin: t => C.value(e.normal.linejoin, t),
                animate: t => C.value(e.normal.animate, t),
                animationSpeed: t => C.value(e.normal.animationSpeed, t)
            },
            selected: {
                width: t => C.value(e.normal.width, t) + 2,
                color: t => C.value(e.normal.color, t),
                dasharray: "6 12",
                linecap: t => C.value(e.normal.linecap, t),
                linejoin: t => C.value(e.normal.linejoin, t),
                animate: t => C.value(e.normal.animate, t),
                animationSpeed: t => C.value(e.normal.animationSpeed, t)
            },
            selectable: !1,
            zOrder: {
                enabled: !1,
                zIndex: 0,
                bringToFrontOnHover: !0,
                bringToFrontOnSelected: !0
            },
            transition: void 0
        }))
    }
}
const Hi = Symbol("style");
function gc(e, t) {
    return Li(e) ? ec(e, t) : t
}
function mc(e) {
    const t = $e(pc())
      , n = Object.keys(t);
    for (const o of n)
        F( () => e.value[o], () => {
            Qu(t[o], e.value[o] || {}, gc)
        }
        , {
            immediate: !0,
            deep: !0
        });
    return Ue(Hi, t),
    t
}
function nn(e) {
    return X(Ge(Hi), `Configs(${e})`)[e]
}
function yc() {
    return nn("view")
}
function on() {
    return nn("node")
}
function rn() {
    return nn("edge")
}
function Vi() {
    return nn("path")
}
let bc = 1;
function wc() {
    return bc++
}
function be(e) {
    return Object.entries(e)
}
function Zt(e, t) {
    const n = new Set(Object.keys(e));
    be(t).forEach( ([o,i]) => {
        Be(e[o], i) || (e[o] = i),
        n.delete(o)
    }
    ),
    n.forEach(o => delete e[o])
}
function xc(e) {
    return e instanceof Promise || e && typeof e.then == "function"
}
function Ec(e, t, n) {
    const o = Ze({
        edgeLayoutPoints: {},
        edgeGroups: {},
        summarizedEdges: {}
    });
    return ke( () => {
        const {edgeLayoutPoints: i, edgeGroups: r} = kc(n, e.value, t.value);
        Zt(o.edgeLayoutPoints, i),
        Zt(o.edgeGroups, r)
    }
    ),
    ke( () => {
        const i = {};
        for (const [r,{edges: a, groupWidth: s}] of Object.entries(o.edgeGroups)) {
            let l = !1;
            if (s == 0)
                l = !1;
            else if (n.edge.summarize instanceof Function) {
                const u = n.edge.summarize(a, n);
                u === null ? l = Yo(e.value, a, n, s) : l = u
            } else
                n.edge.summarize ? l = Yo(e.value, a, n, s) : l = !1;
            o.edgeGroups[r].summarize = l,
            l && Object.keys(a).forEach(u => i[u] = !0)
        }
        Zt(o.summarizedEdges, i)
    }
    ),
    o
}
function Sc(e, t, n, o, i, r) {
    return e ? t ? Ko(e.edge, n, o, i, 0, 0, r) : Ko(e.edge, n, o, i, e.groupWidth, e.pointInGroup, r) : {
        p1: {
            x: 0,
            y: 0
        },
        p2: {
            x: 0,
            y: 0
        }
    }
}
function kc(e, t, n) {
    const o = {}
      , i = {}
      , r = {};
    for (const [s,l] of Object.entries(n)) {
        if (!(l.source in t && l.target in t))
            continue;
        const u = [l.source, l.target].sort().join("<=>")
          , c = r[u] || {};
        c[s] = l,
        r[u] = c
    }
    const a = e.edge.gap instanceof Function ? e.edge.gap : (s, l) => e.edge.gap;
    for (const [s,l] of Object.entries(r)) {
        const u = Object.keys(l).length;
        if (u == 0)
            continue;
        const c = a(l, e)
          , [v,h] = Object.entries(l)[0];
        if (u === 1)
            o[v] = {
                edge: h,
                pointInGroup: 0,
                groupWidth: 0
            },
            i[s] = {
                edges: l,
                groupWidth: 0,
                summarize: !1
            };
        else {
            let d = 0;
            const x = Object.entries(l).map( ([f,g]) => {
                let E = C.value(e.edge.normal.width, g);
                return isNaN(+E) && (console.warn("[v-network-graph] Edge width is invalid value. id=[%s] value=[%s]", f, E),
                E = 1),
                E / 2
            }
            )
              , m = Object.entries(l).map( ([f,g], E) => (E > 0 && (d += x[E - 1] + c + x[E]),
            [f, g, d]))
              , p = d;
            m.forEach( ([f,g,E]) => {
                o[f] = {
                    edge: g,
                    pointInGroup: E,
                    groupWidth: p
                }
            }
            ),
            i[s] = {
                edges: l,
                groupWidth: p,
                summarize: !1
            }
        }
    }
    return {
        edgeLayoutPoints: o,
        edgeGroups: i
    }
}
function Yo(e, t, n, o) {
    if (Object.entries(t).length === 1)
        return !1;
    const i = Math.min(...Object.values(t).flatMap(r => [e[r.source], e[r.target]]).filter(r => r).map(r => {
        const a = C.values(n.node.normal, r);
        return a.type === "circle" ? a.radius * 2 : Math.min(a.width, a.height)
    }
    ));
    return o > i
}
function Ko(e, t, n, o, i, r, a) {
    var s, l, u, c, v, h, d, x;
    let m, p, f, g;
    return e.source < e.target ? [m,p,f,g] = Qo((s = t == null ? void 0 : t.x) != null ? s : 0, (l = t == null ? void 0 : t.y) != null ? l : 0, (u = n == null ? void 0 : n.x) != null ? u : 0, (c = n == null ? void 0 : n.y) != null ? c : 0, o, i, r, a) : [f,g,m,p] = Qo((v = n == null ? void 0 : n.x) != null ? v : 0, (h = n == null ? void 0 : n.y) != null ? h : 0, (d = t == null ? void 0 : t.x) != null ? d : 0, (x = t == null ? void 0 : t.y) != null ? x : 0, o, i, r, a),
    {
        p1: {
            x: m,
            y: p
        },
        p2: {
            x: f,
            y: g
        }
    }
}
function Qo(e, t, n, o, i, r, a, s) {
    const l = n - e
      , u = o - t;
    let c = (r / 2 - a) * i;
    if (c !== 0 && s !== "clock") {
        const v = Math.atan2(o - t, n - e);
        if (s === "vertical") {
            const h = Math.PI / 2;
            (v < -h || v >= h) && (c *= -1)
        } else
            s === "horizontal" && v < 0 && (c *= -1)
    }
    if (l === 0) {
        const v = u < 0 ? -1 : 1;
        return [e + c * v, t, n + c * v, o]
    } else if (u === 0) {
        const v = l < 0 ? 1 : -1;
        return [e, t + c * v, n, o + c * v]
    } else {
        const v = -1 / (u / l);
        u < 0 && (c = -c);
        const h = c / Math.sqrt(1 + Math.pow(v, 2));
        return [e + h, t + h * v, n + h, o + h * v]
    }
}
function Fi(e, t, n) {
    return n || (n = {
        x: 0,
        y: 0
    }),
    n.x = e.x + t.x,
    n.y = e.y + t.y,
    n
}
function Gn(e, t, n) {
    return n || (n = {
        x: 0,
        y: 0
    }),
    n.x = e.x - t.x,
    n.y = e.y - t.y,
    n
}
function Ui(e, t, n) {
    return n || (n = {
        x: 0,
        y: 0
    }),
    n.x = e.x * t.x,
    n.y = e.y * t.y,
    n
}
function Gi(e, t, n) {
    return n || (n = {
        x: 0,
        y: 0
    }),
    n.x = e.x * t,
    n.y = e.y * t,
    n
}
function Xn(e, t, n) {
    return n || (n = {
        x: 0,
        y: 0
    }),
    n.x = e.x / t.x,
    n.y = e.y / t.y,
    n
}
function Xi(e, t) {
    return e.x * t.x + e.y * t.y
}
function qi(e, t) {
    return e.x * t.y - e.y * t.x
}
function qn(e) {
    return e.x * e.x + e.y * e.y
}
function Yn(e) {
    return Math.sqrt(qn(e))
}
function Kn(e, t) {
    const n = e.x - t.x
      , o = e.y - t.y;
    return n * n + o * o
}
function Yi(e, t) {
    return Math.sqrt(Kn(e, t))
}
function Ki(e, t) {
    t || (t = {
        x: 0,
        y: 0
    });
    const n = Yn(e);
    return n === 0 ? (t.x = 1,
    t.y = 0) : Xn(e, {
        x: n,
        y: n
    }, t),
    t
}
function Ft(e, t, n) {
    n || (n = {
        x: 0,
        y: 0
    });
    const o = e.x * Math.cos(t) - e.y * Math.sin(t)
      , i = e.x * Math.sin(t) + e.y * Math.cos(t);
    return n.x = o,
    n.y = i,
    n
}
const Pc = 180 / Math.PI;
function Mc(e) {
    return e * Pc
}
function Qn(e) {
    return Math.atan2(e.y, e.x)
}
function Jn(e) {
    return Mc(Qn(e))
}
const _c = Object.freeze(Object.defineProperty({
    __proto__: null,
    add: Fi,
    angle: Qn,
    angleDegree: Jn,
    cross: qi,
    distance: Yi,
    distanceSquared: Kn,
    divide: Xn,
    dot: Xi,
    length: Yn,
    lengthSquared: qn,
    multiply: Ui,
    multiplyScalar: Gi,
    normalize: Ki,
    rotate: Ft,
    subtract: Gn
}, Symbol.toStringTag, {
    value: "Module"
}));
class H {
    static fromArray(t) {
        return new H(t[0] || 0,t[1] || 0)
    }
    static fromObject(t) {
        return new H(t.x,t.y)
    }
    constructor(t, n) {
        this.x = t,
        this.y = n
    }
    add(t) {
        return Fi(this, t, this)
    }
    subtract(t) {
        return Gn(this, t, this)
    }
    multiply(t) {
        return Ui(this, t, this)
    }
    multiplyScalar(t) {
        return Gi(this, t, this)
    }
    divide(t) {
        return Xn(this, t, this)
    }
    dot(t) {
        return Xi(this, t)
    }
    cross(t) {
        return qi(this, t)
    }
    lengthSquared() {
        return qn(this)
    }
    length() {
        return Yn(this)
    }
    distanceSquared(t) {
        return Kn(this, t)
    }
    distance(t) {
        return Yi(this, t)
    }
    normalize() {
        return Ki(this, this)
    }
    angle() {
        return Qn(this)
    }
    angleDegree() {
        return Jn(this)
    }
    rotate(t) {
        return Ft(this, t, this)
    }
    isEqualTo(t) {
        return this.x === t.x && this.y === t.y
    }
    clone() {
        return new H(this.x,this.y)
    }
    toObject() {
        return {
            x: this.x,
            y: this.y
        }
    }
    toArray() {
        return [this.x, this.y]
    }
}
const ne = ce({
    Vector2D: H
}, _c);
class ee {
    constructor(t, n, o) {
        this.source = t,
        this.target = n,
        this.v = o
    }
    static fromLinePosition(t) {
        const n = H.fromObject(t.p1)
          , o = H.fromObject(t.p2);
        return new ee(n,o,ct(n, o))
    }
    static fromPositions(t, n) {
        const o = H.fromObject(t)
          , i = H.fromObject(n);
        return new ee(o,i,ct(o, i))
    }
    static fromVectors(t, n) {
        return new ee(t,n,ct(t, n))
    }
}
function ct(e, t) {
    return t.clone().subtract(e)
}
function Oc(e) {
    return [H.fromObject(e.p1), H.fromObject(e.p2)]
}
function Tc(e) {
    return new H((e.p1.x + e.p2.x) / 2,(e.p1.y + e.p2.y) / 2)
}
function Ut(e, t) {
    return {
        p1: e,
        p2: t
    }
}
function On(e, t, n) {
    const o = ee.fromLinePosition(e);
    return zc(o, t, n)
}
function zc(e, t, n) {
    const o = e.v.clone().normalize()
      , i = e.source.clone().add(o.clone().multiplyScalar(t))
      , r = e.target.clone().subtract(o.clone().multiplyScalar(n));
    let a = i.toObject()
      , s = r.toObject();
    const l = ct(i, r);
    if (e.v.angle() * l.angle() < 0) {
        const u = new H((a.x + s.x) / 2,(a.y + s.y) / 2)
          , c = u.clone().add(o.multiplyScalar(.5));
        a = u.toObject(),
        s = c.toObject()
    }
    return {
        p1: a,
        p2: s
    }
}
function Ic(e) {
    return {
        p1: e.p2,
        p2: e.p1
    }
}
function mt(e) {
    const t = e.v.clone().normalize().rotate(Math.PI / 2);
    return ee.fromVectors(e.target, e.target.clone().add(t))
}
function eo(e, t) {
    const n = t.v.clone().normalize()
      , o = t.source
      , i = ne.subtract(e, o)
      , r = n.dot(i);
    return o.clone().add(n.multiplyScalar(r))
}
function an(e, t, n, o) {
    if (!(ne.lengthSquared(ne.subtract(t, n)) - o * o <= Math.pow(1, -10)))
        return null;
    const i = ee.fromVectors(e, t)
      , r = eo(n, i)
      , a = ne.length(ne.subtract(r, n));
    if (o < a)
        return null;
    if (o === a)
        return r;
    const s = Math.sqrt(de(o, 2) - de(a, 2))
      , l = i.v.normalize().multiplyScalar(s);
    return r.subtract(l)
}
function Cc(e, t, n, o, i) {
    if (!(ne.lengthSquared(ne.subtract(t, n)) - o * o <= Math.pow(1, -10)))
        return null;
    const r = ee.fromVectors(e, t)
      , a = eo(n, r)
      , s = ne.length(ne.subtract(a, n));
    if (o < s)
        return null;
    if (o === s)
        return a;
    const l = Math.sqrt(de(o, 2) - de(s, 2))
      , u = r.v.normalize().multiplyScalar(l)
      , c = a.clone().add(u)
      , v = a.clone().subtract(u)
      , h = i.distance(c)
      , d = i.distance(v);
    return Math.abs(h - d) < 2 ? v : h < d ? c : v
}
function Ye(e, t) {
    const n = ne.subtract(t.source, e.source)
      , o = e.v
      , i = t.v
      , r = ne.cross(n, o) / ne.cross(o, i);
    return t.source.clone().add(i.clone().multiplyScalar(r))
}
function Ot(e, t, n, o, i) {
    const r = e
      , a = n.clone().subtract(r)
      , s = a.length()
      , l = t + o;
    if (l < s)
        return null;
    const u = Math.abs(t - o);
    if (s < u)
        return null;
    if (s === l) {
        const y = a.clone().normalize()
          , b = e.clone().add(y.multiplyScalar(t));
        return i ? b : [b, b]
    }
    if (s === u) {
        const y = a.clone().normalize()
          , b = t > o
          , k = e.clone().add(y.multiplyScalar(b ? t : -t));
        return i ? k : [k, k]
    }
    const c = t
      , v = o
      , h = (de(s, 2) + de(c, 2) - de(v, 2)) / (2 * s * c)
      , d = c * h
      , x = Math.sqrt(de(c, 2) - de(d, 2))
      , m = a.clone().normalize()
      , p = new H(-m.y,m.x)
      , f = m.clone().multiplyScalar(d)
      , g = p.clone().multiplyScalar(x)
      , E = e.clone().add(f).add(g)
      , w = e.clone().add(f).subtract(g);
    if (i) {
        const y = E.distance(i)
          , b = w.distance(i);
        return y < b ? E : w
    } else
        return [E, w]
}
function Jo(e, t, n, o) {
    const i = ee.fromPositions(e, t)
      , r = (n.width + n.strokeWidth) / 2 * o
      , a = (n.height + n.strokeWidth) / 2 * o
      , s = n.borderRadius > 0 ? (n.borderRadius + n.strokeWidth / 2) * o : 0
      , l = (i.v.angle() - Math.PI / 2) % Math.PI
      , u = Math.PI / 2 - l % Math.PI
      , c = a * Math.abs(Math.tan(l))
      , v = r * Math.abs(Math.tan(u))
      , h = c <= r - s
      , d = v <= a - s;
    if (h || d || s === 0)
        return Math.sqrt(h ? de(a, 2) + de(c, 2) : de(r, 2) + de(v, 2));
    {
        const x = t.x - r + s
          , m = t.y - a + s
          , p = t.x + r - s
          , f = t.y + a - s
          , g = [new H(x,m), new H(p,m), new H(p,f), new H(x,f)]
          , E = Math.floor((i.v.angleDegree() + 360) % 360 / 90)
          , w = g[E]
          , y = an(i.source, eo(w, i), w, s);
        return y ? ct(y, i.target).length() : ct(w, i.target).length() + s
    }
}
function Qi(e, t, n, o, i) {
    const r = ee.fromLinePosition(e)
      , a = r.v.clone().normalize()
      , s = o === 0 ? r.source : r.source.clone().add(a.clone().multiplyScalar(o * i))
      , l = o === 0 ? r.target : r.target.clone().subtract(a.clone().multiplyScalar(o * i))
      , u = (t.width / 2 + n) * i
      , c = new H(-a.y,a.x).multiplyScalar(u);
    let v = ne.subtract(s, c)
      , h = ne.add(s, c)
      , d = ne.subtract(l, c)
      , x = ne.add(l, c);
    const m = r.v.angleDegree();
    return (m < -90 || m >= 90) && ([v,h] = [h, v],
    [d,x] = [x, d]),
    {
        source: {
            above: v,
            below: h
        },
        target: {
            above: d,
            below: x
        }
    }
}
function Ac(e, t, n, o) {
    let i;
    n.type === "circle" ? i = n.radius + n.strokeWidth / 2 : i = Jo(t, e, n, 1);
    let r;
    return o.type === "circle" ? r = o.radius + o.strokeWidth / 2 : r = Jo(e, t, o, 1),
    [i, r]
}
function We(e, t, n) {
    const {x: o, y: i} = e
      , r = o - t.x
      , a = i - t.y;
    return {
        x: r * Math.cos(n) - a * Math.sin(n) + t.x,
        y: r * Math.sin(n) + a * Math.cos(n) + t.y
    }
}
function Tn(e) {
    return e > 0 ? -(Math.PI * 2 - e) : Math.PI * 2 + e
}
function zn(e, t, n, o) {
    const i = []
      , r = ee.fromVectors(t, e)
      , a = ee.fromVectors(t, n);
    let s = dt(r, a);
    o * s < 0 && (s = Tn(s));
    const l = H.fromObject(We(e, t, -s / 2))
      , u = ee.fromVectors(t, l)
      , c = mt(u)
      , v = dt(r, u);
    let h = mt(r);
    if (Math.abs(v) < Math.PI / 2) {
        const x = Ye(h, c);
        i.push(x)
    } else {
        const x = H.fromObject(We(l, t, v / 2))
          , m = mt(ee.fromVectors(t, H.fromObject(x)))
          , p = Ye(h, m)
          , f = Ye(m, c);
        i.push(p, x, f)
    }
    i.push(l);
    const d = dt(a, u);
    if (h = mt(a),
    Math.abs(d) < Math.PI / 2) {
        const x = Ye(h, c);
        i.push(x)
    } else {
        const x = H.fromObject(We(l, t, d / 2))
          , m = mt(ee.fromVectors(t, H.fromObject(x)))
          , p = Ye(c, m)
          , f = Ye(m, h);
        i.push(p, x, f)
    }
    return i
}
function dt(e, t) {
    return Math.atan2(e.v.y * t.v.x - e.v.x * t.v.y, e.v.x * t.v.x + e.v.y * t.v.y)
}
function Nc(e, t, n) {
    const o = e.x
      , i = e.y
      , r = t.x
      , a = t.y
      , s = n.x
      , l = n.y
      , u = o - r
      , c = i - a
      , v = s - r
      , h = l - a;
    if (u === 0 && c === 0 || v === 0 && h === 0)
        return [e, 0];
    const d = (h * (u * (o + r) + c * (i + a)) - c * (v * (s + r) + h * (l + a))) / (2 * u * h - 2 * c * v)
      , x = (-v * (u * (o + r) + c * (i + a)) + u * (v * (s + r) + h * (l + a))) / (2 * u * h - 2 * c * v)
      , m = Math.sqrt(Math.pow(o - d, 2) + Math.pow(i - x, 2));
    return [new H(d,x), m]
}
function lt(e) {
    return e.type == "circle" ? e.radius : Math.min(e.width, e.height) / 2
}
function $c(e) {
    const t = Object.values(e);
    if (t.length === 0)
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
    const n = {
        top: t[0].y,
        bottom: t[0].y,
        left: t[0].x,
        right: t[0].x
    };
    return t.forEach(o => {
        n.top = Math.min(o.y, n.top),
        n.bottom = Math.max(o.y, n.bottom),
        n.left = Math.min(o.x, n.left),
        n.right = Math.max(o.x, n.right)
    }
    ),
    n
}
function jt(...e) {
    return e.find(t => !!t)
}
const jc = Number.EPSILON * 100;
function Lc(e, t, n, o, i, r, a, s) {
    var l, u;
    const c = e.edges
      , v = e.directions
      , h = c.map( (f, g) => Zc(f, v[g], o[f.edgeId]))
      , d = [];
    let x = !1
      , m = !1;
    {
        const f = h[0];
        let g = lt(t[f.source].shape) * i;
        const E = s + (a === "edgeOfNode" ? g : 0)
          , w = E <= 0 ? f.line.source : ti(f, E, n, !0);
        d.push(w),
        g = lt(t[f.target].shape) * i,
        s > 0 && ne.distance(f.line.source, f.line.target) <= E + g && (x = !0)
    }
    const p = c.length;
    for (let f = 1; f < p; f++) {
        const g = h[f - 1]
          , E = h[f]
          , w = E.source
          , y = H.fromObject((l = n[w]) != null ? l : {
            x: 0,
            y: 0
        })
          , b = Dc(g, E, y)
          , k = lt(t[w].shape) * i
          , M = Math.max(k * (2 / 3), k - 4 * i)
          , z = In(g)
          , O = In(E)
          , I = Lt(g, y, M, z)
          , N = Lt(E, y, M, !O)
          , D = Lt(g, y, k, z)
          , Y = Lt(E, y, k, !O);
        let Z;
        if (b) {
            const W = ne.distance(b, y);
            if (W < M)
                Z = [jt(I, D, g.line.target), b, jt(N, Y, E.line.source)];
            else if (W <= k) {
                let se, J;
                D && I ? se = ne.distance(b, I) < ne.distance(b, D) ? I : D : se = D || g.line.target,
                Y && N ? J = ne.distance(b, N) < ne.distance(b, Y) ? N : Y : J = Y || E.line.source,
                Z = [se, b, J]
            } else
                I && N ? Z = [I, y, N] : D && Y ? Z = [D, y, Y] : Z = [jt(I, D, g.line.target), y, jt(N, Y, E.line.source)]
        } else
            I && N ? Z = [I, y, N] : D && Y ? Z = [D, y, Y] : Z = [g.line.target, y, E.line.source];
        if (g.curve) {
            const W = d[d.length - 1];
            if (W) {
                const se = W instanceof Array ? W[W.length - 1] : W;
                let J;
                Z instanceof Array ? J = r ? Z[0] : Z[1] : J = Z;
                const ue = zn(se, g.curve.circle.center, J, g.curve.theta);
                Z instanceof Array && r ? d.push([...ue, ...Z]) : d.push([...ue, J])
            }
        } else if (g.loop) {
            const [W,se,J] = oi(y, g, k);
            d.push(W),
            d.push(J),
            Z instanceof Array && r ? d.push([se, Z[1], Z[2]]) : d.push(Z[2])
        } else
            r || !(Z instanceof Array) ? d.push(Z) : E.curve ? d.push(Z[1]) : E.loop ? d.push(Z[0]) : d.push(Z[0], Z[2])
    }
    {
        const f = h[h.length - 1];
        let g = lt(t[f.target].shape) * i;
        const E = s + (a === "edgeOfNode" ? g : 0)
          , w = E <= 0 ? f.line.target : ti(f, E, n, !1);
        if (g = lt(t[f.source].shape) * i,
        f.loop) {
            const y = H.fromObject((u = n[f.target]) != null ? u : {
                x: 0,
                y: 0
            })
              , [b,k,M] = oi(y, f, g);
            d.push(b),
            d.push(M)
        } else if (f.curve) {
            const y = d[d.length - 1]
              , b = y instanceof Array ? y[y.length - 1] : y
              , k = zn(b, f.curve.circle.center, w, f.curve.theta);
            d.push([...k, w])
        } else
            d.push(w);
        s > 0 && ne.distance(f.line.source, f.line.target) <= E + g && (m = !0)
    }
    return x && (d.shift(),
    d[0]instanceof Array && d.unshift(d[0][0])),
    m && d.pop(),
    d
}
function ei(e) {
    const t = e.length;
    if (t === 0)
        return [];
    if (t <= 1)
        return [!0];
    const n = [];
    let o = null
      , i = !0;
    for (let r = 0; r < t; r++) {
        const a = e[r].edge.source
          , s = e[r].edge.target;
        if (r === 0)
            if (t > 2) {
                const l = Ji(e, 0);
                l === null ? i = !0 : i = l === s
            } else
                i = [e[1].edge.source, e[1].edge.target].includes(s);
        else
            a === s ? i = !0 : i = o === a;
        n.push(i),
        o = i ? s : a
    }
    return n
}
function Ji(e, t) {
    const n = e[t]
      , o = e[t + 1]
      , i = [n.edge.source, n.edge.target].sort()
      , r = [o.edge.source, o.edge.target].sort();
    if (i[0] === i[1])
        return i[0];
    if (r[0] === r[1])
        return r[0];
    if (n.edgeId === o.edgeId || i[0] === r[0] && i[1] === r[1]) {
        if (t >= e.length - 2)
            return null;
        {
            const a = Ji(e, t + 1);
            return a === null ? null : a === i[1] ? i[0] : i[1]
        }
    } else
        return r.includes(i[1]) ? i[1] : i[0]
}
function ti(e, t, n, o) {
    const i = o ? e.source : e.target
      , r = e.curve;
    if (r) {
        let a = t / r.circle.radius;
        return r.theta > 0 && (a *= -1),
        o || (a *= -1),
        H.fromObject(We(o ? e.line.source : e.line.target, r.circle.center, a))
    } else {
        let a, s;
        if (o ? (a = e.line.target,
        s = e.line.source) : (a = e.line.source,
        s = e.line.target),
        n[i]) {
            const l = an(a, s, H.fromObject(n[i]), t);
            return l === null ? a : l
        } else
            return a
    }
}
function Dc(e, t, n) {
    let o = null;
    if (e.loop || t.loop)
        o = null;
    else if (e.curve)
        if (t.curve) {
            if (e.line.target.isEqualTo(t.line.source))
                return e.line.target.clone();
            o = Ot(e.curve.circle.center, e.curve.circle.radius, t.curve.circle.center, t.curve.circle.radius, e.curve.center)
        } else
            o = Cc(t.line.target, t.line.source, e.curve.circle.center, e.curve.circle.radius, n);
    else if (t.curve)
        o = an(e.line.source, e.line.target, t.curve.circle.center, t.curve.circle.radius);
    else {
        const i = ni(e.line)
          , r = ni(t.line);
        !isFinite(i) && !isFinite(r) || Math.abs(i - r) < jc ? o = null : o = Ye(e.line, t.line)
    }
    return o
}
function Lt(e, t, n, o) {
    if (e.loop) {
        const i = Ot(t, n, e.loop.center, e.loop.radius[0]);
        return i ? o ? i[0] : i[1] : null
    } else
        return e.curve ? Ot(t, n, e.curve.circle.center, e.curve.circle.radius, H.fromObject(e.curve.center)) : an(o ? e.line.source : e.line.target, o ? e.line.target : e.line.source, t, n)
}
function Zc(e, t, n) {
    let o = n.origin
      , i = e.edge.source
      , r = e.edge.target
      , a = n.curve;
    const s = n.loop;
    s ? o = n.position : t || (o = Ic(o),
    i = e.edge.target,
    r = e.edge.source,
    a && (a = Fn(ce({}, a), {
        theta: -a.theta
    })));
    const l = ee.fromLinePosition(o);
    return {
        edgeId: e.edgeId,
        source: i,
        target: r,
        line: l,
        direction: t,
        curve: a,
        loop: s
    }
}
function ni(e) {
    return (e.target.y - e.source.y) / (e.target.x - e.source.x)
}
function oi(e, t, n) {
    const {radius: o, center: i} = X(t.loop, "Loop of edge parameter")
      , [r,a] = o
      , s = Ot(e, n, i, o[0]);
    let[l,u] = s ? s.reverse() : [t.line.source, t.line.target];
    const c = In(t);
    c || ([l,u] = [u, l]);
    const v = l
      , h = u
      , d = H.fromObject(v).subtract(i).angleDegree();
    let x = (H.fromObject(h).subtract(i).angleDegree() + 360 - d) % 360 >= 180;
    return x = c ? x : !x,
    [v, h, `A ${r} ${a} 0 ${x ? 1 : 0} ${c ? 1 : 0} ${h.x} ${h.y}`]
}
function In(e) {
    return e.loop ? e.direction ? e.loop.isClockwise : !e.loop.isClockwise : !0
}
function yn(e, t, n, o, i, r, a) {
    const s = $e({});
    F( () => new Set(Object.keys(e.value)), (u, c) => {
        c || (c = new Set([]));
        for (const v of u)
            c.has(v) || Bc(e, s, v, !1, t, i);
        for (const v of c)
            u.has(v) || (n.delete(v),
            o.delete(v),
            r == null || r(v, s[v]),
            delete s[v])
    }
    , {
        immediate: !0
    }),
    F( () => [...n], (u, c) => {
        const v = c ? u.filter(d => !c.includes(d)) : u
          , h = c ? c.filter(d => !u.includes(d)) : [];
        v.forEach(d => {
            const x = s[d];
            x && !x.selected && (x.selected = !0)
        }
        ),
        h.forEach(d => {
            const x = s[d];
            x && x.selected && (x.selected = !1)
        }
        )
    }
    , {
        immediate: !0
    }),
    F( () => [...o], (u, c) => {
        const v = u.filter(d => !c.includes(d))
          , h = c.filter(d => !u.includes(d));
        v.forEach(d => {
            const x = s[d];
            x && !x.hovered && (x.hovered = !0)
        }
        ),
        h.forEach(d => {
            const x = s[d];
            x && x.hovered && (x.hovered = !1)
        }
        )
    }
    );
    const l = T( () => {
        const u = a ? a() : Object.values(s);
        return t.zOrder.enabled ? Rc(u, t.zOrder, o, n) : u
    }
    );
    return {
        states: s,
        zOrderedList: l
    }
}
function Bc(e, t, n, o, i, r) {
    const a = {
        id: n,
        selected: o,
        hovered: !1,
        selectable: T( () => e.value[n] ? C.value(i.selectable, e.value[n]) : S(a.selectable)),
        zIndex: T( () => e.value[n] ? C.value(i.zOrder.zIndex, e.value[n]) : S(a.zIndex))
    };
    t[n] = a,
    r(e, n, t[n])
}
function Rc(e, t, n, o) {
    return t.bringToFrontOnHover && t.bringToFrontOnSelected ? e.sort( (i, r) => {
        const a = n.has(i.id)
          , s = n.has(r.id);
        if (a != s)
            return a ? 1 : -1;
        const l = o.has(i.id)
          , u = o.has(r.id);
        return l != u ? l ? 1 : -1 : i.zIndex - r.zIndex
    }
    ) : t.bringToFrontOnHover ? e.sort( (i, r) => {
        const a = n.has(i.id)
          , s = n.has(r.id);
        return a != s ? a ? 1 : -1 : i.zIndex - r.zIndex
    }
    ) : t.bringToFrontOnSelected ? e.sort( (i, r) => {
        const a = o.has(i.id)
          , s = o.has(r.id);
        return a != s ? a ? 1 : -1 : i.zIndex - r.zIndex
    }
    ) : e.sort( (i, r) => i.zIndex - r.zIndex)
}
function Wc(e) {
    return typeof btoa === void 0 ? Buffer.from(e).toString("base64").replaceAll("=", "") : btoa(e).replaceAll("=", "")
}
function Hc() {
    return {
        markers: $e({}),
        referenceCount: {}
    }
}
function Vc(e) {
    const {markers: t, referenceCount: n} = e;
    function o(s, l) {
        var u;
        const c = (u = n[s]) != null ? u : 0;
        n[s] = c + 1,
        c || (t[s] = l)
    }
    function i(s) {
        var l;
        const u = (l = n[s]) != null ? l : 0;
        u && (u - 1 === 0 ? (delete t[s],
        delete n[s]) : n[s] = u - 1)
    }
    function r(s) {
        s && i(s)
    }
    function a(s, l, u, c, v) {
        if (s.type === "none") {
            r(u);
            return
        }
        if (s.type === "custom")
            return r(u),
            s.customId;
        const h = Fc(s, l, c)
          , d = Uc(h, v);
        return d === u || (r(u),
        o(d, h)),
        d
    }
    return {
        makeMarker: a,
        clearMarker: r
    }
}
function Fc(e, t, n) {
    var o;
    return Fn(ce({}, e), {
        color: (o = e.color) != null ? o : n,
        isSource: t
    })
}
function Uc(e, t) {
    const n = Wc(e.color)
      , o = e.isSource ? "L" : "R"
      , i = e.units === "strokeWidth" ? "rel" : "abs";
    return `marker_${t}_${e.type}_${e.width}_${e.height}_${e.margin}_${e.offset}_${n}_${o}_${i}`
}
function bn(e, t, n) {
    return {
        objects: e,
        selected: t,
        hovered: n
    }
}
const er = Symbol("states")
  , Gc = {
    type: "none",
    width: 0,
    height: 0,
    margin: 0,
    offset: 0,
    units: "strokeWidth",
    color: null
};
function Xc(e, t, n, o, i, r, a, s) {
    const l = $e({})
      , u = Ze({});
    ke( () => {
        const w = Object.fromEntries(Object.keys(e.objects.value).map(y => [y, {}]));
        Object.entries(t.objects.value).forEach( ([y,b]) => {
            w != null && w[b.source] || (w[b.source] = {}),
            w != null && w[b.target] || (w[b.target] = {}),
            w[b.source][y] = b.target,
            w[b.target][y] = b.source
        }
        ),
        Zt(u, w)
    }
    );
    const {states: c, zOrderedList: v} = yn(e.objects, o.node, e.selected, e.hovered, (w, y, b) => {
        Kc(w, y, b, o.node, u, i, r)
    }
    , (w, y) => {
        const b = i.nodes;
        delete b[w]
    }
    )
      , h = wc()
      , d = Ec(e.objects, t.objects, o)
      , x = R([])
      , {states: m, zOrderedList: p} = yn(t.objects, o.edge, t.selected, t.hovered, (w, y, b) => {
        Jc(w, y, b, o.edge, a, c, d, i, s, h)
    }
    , (w, y) => {
        var b;
        (b = y.stopWatchHandle) == null || b.call(y)
    }
    , () => x.value);
    ke( () => {
        x.value = ed(d.edgeGroups, m)
    }
    ),
    F(d.edgeGroups, w => od(l, d, o), {
        immediate: !0
    });
    const {states: f, zOrderedList: g} = yn(n.objects, o.path, n.selected, n.hovered, (w, y, b) => {
        const k = b;
        k.clickable = T( () => w.value[y] ? C.value(o.path.clickable, w.value[y]) : !1),
        k.hoverable = T( () => w.value[y] ? C.value(o.path.hoverable, w.value[y]) : !1),
        k.path = w.value[y],
        k.edges = ri(k.path, t),
        k.directions = ei(k.edges),
        k.stopWatchHandle = F( () => w.value[y].edges, () => {
            k.path = w.value[y],
            k.edges = ri(k.path, t),
            k.directions = ei(k.edges)
        }
        )
    }
    , (w, y) => {
        var b;
        (b = y.stopWatchHandle) == null || b.call(y)
    }
    )
      , E = {
        nodeStates: c,
        edgeStates: m,
        edgeGroupStates: d,
        summarizedEdgeStates: l,
        pathStates: f,
        layouts: i,
        nodeZOrderedList: v,
        edgeZOrderedList: p,
        pathZOrderedList: g
    };
    return Ue(er, E),
    E
}
function qc(e) {
    return e.summarized
}
function Ie() {
    return X(Ge(er), "states")
}
function Yc(e, t, n, o) {
    return n && o.hover ? C.values(o.hover, e) : tr(e, t, o)
}
function tr(e, t, n) {
    return t && n.selected ? C.values(n.selected, e) : C.values(n.normal, e)
}
function Kc(e, t, n, o, i, r, a) {
    var s, l;
    !r.nodes[t] && (s = a.nodes) != null && s[t] && (r.nodes[t] = ce({}, (l = a.nodes) == null ? void 0 : l[t])),
    n.shape = T( () => e.value[t] ? Yc(e.value[t], n.selected, n.hovered, o) : S(n.shape)),
    n.staticShape = T( () => e.value[t] ? tr(e.value[t], n.selected, o) : S(n.staticShape)),
    n.label = T( () => e.value[t] ? C.values(o.label, e.value[t]) : S(n.label)),
    n.labelText = T( () => {
        var u, c;
        return o.label.text instanceof Function ? S(n.label).text : e.value[t] ? (c = (u = e.value[t]) == null ? void 0 : u[S(n.label).text]) != null ? c : "" : S(n.labelText)
    }
    ),
    n.draggable = T( () => e.value[t] ? C.value(o.draggable, e.value[t]) : S(n.draggable)),
    n.oppositeNodeIds = Oe(i, t),
    n.oppositeNodes = T( () => Object.entries(n.oppositeNodeIds).reduce( (u, c) => {
        const [v,h] = c
          , d = r.nodes[h];
        return d && (u[v] = {
            nodeId: h,
            pos: ce({}, d)
        }),
        u
    }
    , {}))
}
function Qc(e, t, n, o) {
    return t ? C.values(o.selected, e) : n && o.hover ? C.values(o.hover, e) : C.values(o.normal, e)
}
function ii(e) {
    return e.type === "none" ? Gc : e
}
function Jc(e, t, n, o, i, r, a, s, l, u) {
    const {makeMarker: c, clearMarker: v} = Vc(i);
    Object.assign(n, {
        origin: {
            p1: {
                x: 0,
                y: 0
            },
            p2: {
                x: 0,
                y: 0
            }
        },
        labelPosition: {
            p1: {
                x: 0,
                y: 0
            },
            p2: {
                x: 0,
                y: 0
            }
        },
        position: {
            p1: {
                x: 0,
                y: 0
            },
            p2: {
                x: 0,
                y: 0
            }
        }
    }),
    n.label = T( () => e.value[t] ? C.values(o.label, e.value[t]) : S(n.label));
    const h = T( () => {
        const f = e.value[t]
          , g = Qc(f, n.selected, n.hovered, o);
        isNaN(+g.width) && (console.warn("[v-network-graph] Edge width is invalid value. id=[%s] value=[%s]", t, g.width),
        g.width = 1),
        (g.color === void 0 || g.color === null) && (console.warn("[v-network-graph] Edge color is invalid value. id=[%s] value=[%s]", t, g.color),
        g.color = "#000000");
        let E = C.value(o.normal.width, f);
        isNaN(+E) && (E = 1);
        const w = ii(C.values(o.marker.source, [f, g]))
          , y = ii(C.values(o.marker.target, [f, g]));
        return {
            stroke: g,
            normalWidth: E,
            source: w,
            target: y
        }
    }
    );
    n.line = h;
    const d = Oe(a.edgeLayoutPoints, t)
      , x = Oe(a.summarizedEdges, t)
      , m = ke( () => {
        var f, g, E, w, y, b, k;
        const M = e.value[t];
        if (!M)
            return;
        const z = (f = r[M.source]) == null ? void 0 : f.staticShape
          , O = (g = r[M.target]) == null ? void 0 : g.staticShape;
        if (!z || !O)
            return;
        const I = (E = s.nodes[M == null ? void 0 : M.source]) != null ? E : {
            x: 0,
            y: 0
        }
          , N = (w = s.nodes[M == null ? void 0 : M.target]) != null ? w : {
            x: 0,
            y: 0
        }
          , D = Sc(d.value, (y = x.value) != null ? y : !1, I, N, l.value, o.keepOrder)
          , [Y,Z] = Ac(I, N, z, O)
          , W = l.value;
        n.labelPosition = On(D, Y * W, Z * W);
        let se = 0
          , J = 0;
        const ue = h.value;
        if (ue.source.type !== "none") {
            const ve = ue.source;
            se = ve.margin + ve.width,
            ve.units === "strokeWidth" && (se *= ue.normalWidth)
        }
        if (ue.target.type !== "none") {
            const ve = ue.target;
            J = ve.margin + ve.width,
            ve.units === "strokeWidth" && (J *= ue.normalWidth)
        }
        o.margin && (se += o.margin,
        J += o.margin);
        const Xe = !!o.margin || ue.source.type !== "none" || ue.target.type !== "none";
        if (M.source === M.target) {
            n.origin = Ut(I, N);
            const ve = C.values(o.selfLoop, M)
              , [rt,at] = nd(I, z, ve, Xe, se, J, (k = (b = d.value) == null ? void 0 : b.pointInGroup) != null ? k : 0, W);
            n.position = rt,
            n.loop = at,
            n.curve = void 0;
            return
        } else
            n.loop = void 0;
        if (Xe && (se += Y,
        J += Z),
        o.type === "straight" || x.value)
            n.origin = D,
            n.curve = void 0,
            se === 0 && J === 0 ? n.position = n.origin : n.position = On(n.origin, se * W, J * W);
        else {
            n.origin = Ut(I, N);
            const ve = d.value ? d.value.groupWidth / 2 - d.value.pointInGroup : 0
              , [rt,at] = td(n.origin, D, ve, se * W, J * W);
            n.position = rt,
            n.curve = at
        }
    }
    )
      , p = ke( () => {
        e.value[t] && (n.sourceMarkerId = c(h.value.source, !0, n.sourceMarkerId, h.value.stroke.color, u),
        n.targetMarkerId = c(h.value.target, !1, n.targetMarkerId, h.value.stroke.color, u))
    }
    );
    n.stopWatchHandle = () => {
        m(),
        p(),
        v(n.sourceMarkerId),
        v(n.targetMarkerId)
    }
}
function ed(e, t) {
    return Object.entries(e).map( ([n,o]) => {
        var i;
        return o.summarize ? {
            id: (i = Object.keys(o.edges)[0]) != null ? i : n,
            summarized: !0,
            key: n,
            group: o,
            zIndex: Object.keys(o.edges).map(r => {
                var a, s;
                return (s = (a = t[r]) == null ? void 0 : a.zIndex) != null ? s : 0
            }
            ).reduce( (r, a) => Math.max(r, a))
        } : Object.entries(o.edges).map( ([r,a]) => {
            var s, l;
            return {
                id: r,
                summarized: !1,
                key: r,
                edge: a,
                zIndex: (l = (s = t[r]) == null ? void 0 : s.zIndex) != null ? l : 0
            }
        }
        )
    }
    ).flat()
}
function td(e, t, n, o, i) {
    const r = ee.fromLinePosition(e)
      , a = ee.fromLinePosition(t)
      , s = Tc(t)
      , [l,u] = Nc(r.source, r.target, s);
    let c, v;
    if (u === 0)
        return [e, v];
    if (n === 0)
        return o === 0 && i === 0 ? c = e : c = On(e, o, i),
        [c, v];
    const h = ee.fromVectors(l, s)
      , d = dt(ee.fromVectors(l, r.source), h);
    if (o === 0 && i === 0)
        c = e;
    else {
        let f = o / u
          , g = i / u;
        d > 0 && (f *= -1,
        g *= -1),
        c = Ut(We(r.source, l, f), We(r.target, l, -g));
        let E = dt(ee.fromVectors(l, r.source), ee.fromVectors(l, r.target))
          , w = dt(ee.fromPositions(l, c.p1), ee.fromPositions(l, c.p2));
        if (d * E < 0 && (E = Tn(E),
        d * w < 0 && (w = Tn(w))),
        E * w < 0) {
            const y = s.clone().add(a.v.normalize().multiplyScalar(.5));
            return c = Ut(s, y),
            [c, v]
        }
    }
    const [x,m] = Oc(c)
      , p = zn(x, l, m, d).map(f => f.toObject());
    return v = {
        center: s,
        theta: d,
        circle: {
            center: l,
            radius: u
        },
        control: p
    },
    [c, v]
}
function nd(e, t, n, o, i, r, a, s) {
    const l = s
      , u = (n.radius + a / 2) * l
      , c = n.offset * l + u
      , v = (n.angle - 90) * (Math.PI / 180)
      , h = H.fromObject({
        x: e.x + c * Math.cos(v),
        y: e.y + c * Math.sin(v)
    })
      , d = n.isClockwise;
    let x, m;
    if (o) {
        const g = Ot(h, u, H.fromObject(e), lt(t) * l);
        if (g) {
            [x,m] = g;
            let E = 1;
            if (d || ([x,m] = [m, x],
            E = -1),
            i !== 0 || r !== 0) {
                const w = i * l / u * E
                  , y = r * l / u * E;
                x = We(x, h, w),
                m = We(m, h, -y)
            }
        }
    }
    if (x === void 0 || m === void 0) {
        const g = H.fromObject(e).subtract(h).normalize().multiplyScalar(u);
        let E = 1 * (Math.PI / 180);
        d || (E *= -1),
        x = h.clone().add(Ft(g, E)),
        m = h.clone().add(Ft(g, -E))
    }
    const p = H.fromObject(x).subtract(h).angleDegree()
      , f = (H.fromObject(m).subtract(h).angleDegree() + 360 - p) % 360 >= 180;
    return [{
        p1: x,
        p2: m
    }, {
        center: h,
        radius: [u, u],
        isLargeArc: d ? f : !f,
        isClockwise: d
    }]
}
function od(e, t, n) {
    const o = t.edgeGroups;
    Object.entries(o).filter( ([i,r]) => r.summarize && !(i in e)).forEach( ([i,r]) => {
        const a = {
            stroke: void 0
        };
        a.stroke = T( () => C.values(n.edge.summarized.stroke, r.edges)),
        e[i] = a
    }
    ),
    Object.keys(e).forEach(i => {
        var r;
        (r = t.edgeGroups[i]) != null && r.summarize || delete e[i]
    }
    )
}
function ri(e, t) {
    return e.edges.map(n => ({
        edgeId: n,
        edge: t.objects.value[n]
    })).filter(n => n.edge)
}
class St {
    static valueOf(t) {
        return Array.from(t.values())
    }
}
const id = 3
  , rd = 6
  , nr = 500;
function Bt(e) {
    return e === "touch" ? rd : id
}
function to(e, t, n, o) {
    let i = e.get(t);
    if (i)
        i.id !== n && (i = void 0);
    else {
        const s = Array.from(e.entries()).find( ([l,u]) => u.id === n);
        if (s) {
            const [l,u] = s;
            e.delete(l),
            i = u
        }
    }
    let r, a;
    return [i,r,a] = or(i, o, n),
    e.set(t, i),
    [r, a]
}
function or(e, t, n) {
    const o = Date.now();
    e && o - e.lastTime <= nr ? (e.count++,
    e.lastTime = o) : e = {
        count: 1,
        lastTime: o,
        id: n
    };
    const i = {
        view: window,
        screenX: t.screenX,
        screenY: t.screenY,
        clientX: t.clientX,
        clientY: t.clientY,
        ctrlKey: t.ctrlKey,
        shiftKey: t.shiftKey,
        altKey: t.altKey,
        metaKey: t.metaKey,
        button: t.button,
        buttons: t.buttons,
        detail: e.count
    };
    let r, a;
    return t instanceof PointerEvent ? (Object.assign(i, {
        pointerId: t.pointerId,
        width: t.width,
        height: t.height,
        pressure: t.pressure,
        tangentialPressure: t.tangentialPressure,
        tiltX: t.tiltX,
        tiltY: t.tiltY,
        twist: t.twist,
        pointerType: t.pointerType,
        isPrimary: t.isPrimary
    }),
    r = new PointerEvent("click",i),
    e.count === 2 && (a = new PointerEvent("dblclick",i))) : (r = new MouseEvent("click",i),
    e.count === 2 && (a = new MouseEvent("dblclick",i))),
    [e, r, a]
}
function no(e) {
    const t = Date.now();
    Array.from(e.entries()).filter( ([n,o]) => t - o.lastTime > nr).map( ([n,o]) => e.delete(n))
}
function ad(e, t, n, o, i, r, a) {
    const s = {
        pointers: new Map,
        follow: {
            followedPointerId: -1,
            nodeBasePositions: {}
        },
        hoveredNodesPre: new Set,
        clicks: new Map
    }
      , l = {
        pointermove: d,
        pointerup: m,
        pointercancel: x
    };
    function u(w) {
        const y = s.follow.followedPointerId === w.pointerId
          , b = i.has(w.nodeId)
          , k = !(w.pointerId in s.pointers);
        if (y && k || y && !b) {
            const M = St.valueOf(s.pointers).find(z => i.has(z.nodeId));
            if (!M) {
                s.follow = {
                    followedPointerId: -1,
                    nodeBasePositions: {}
                };
                return
            }
            w = M,
            s.follow.followedPointerId = w.pointerId
        } else {
            const M = s.pointers.get(s.follow.followedPointerId);
            if (!M) {
                s.follow = {
                    followedPointerId: -1,
                    nodeBasePositions: {}
                };
                return
            }
            w = M
        }
        if (y || b) {
            const M = St.valueOf(s.pointers).map(z => z.nodeId);
            s.follow.nodeBasePositions = Object.fromEntries(Array.from(i).filter(z => !M.includes(z)).filter(z => {
                var O;
                return (O = e[z]) == null ? void 0 : O.draggable
            }
            ).map(z => [z, wn(t.nodes, z)])),
            w.dragBasePosition = ce({}, w.latestPosition),
            w.nodeBasePosition = wn(t.nodes, w.nodeId)
        }
    }
    F(i, w => {
        const y = s.pointers.get(s.follow.followedPointerId);
        y && u(y),
        w.size > 0 && n.selectionMode.value !== "node" ? n.selectionMode.value = "node" : w.size === 0 && n.selectionMode.value === "node" && (n.selectionMode.value = "container")
    }
    ),
    F(n.selectionMode, w => {
        w !== "node" && i.clear()
    }
    );
    function c(w, y) {
        const b = w.dragBasePosition.x - y.pageX
          , k = w.dragBasePosition.y - y.pageY
          , M = s.follow.followedPointerId == w.pointerId ? ce({
            [w.nodeId]: w.nodeBasePosition
        }, s.follow.nodeBasePositions) : {
            [w.nodeId]: w.nodeBasePosition
        }
          , z = r.value;
        return Object.fromEntries(Object.entries(M).map( ([O,I]) => [O, {
            x: I.x - b / z,
            y: I.y - k / z
        }]))
    }
    function v(w, y) {
        var b, k;
        if (y.isTrusted || y.shiftKey && !["container", "node"].includes(n.selectionMode.value))
            return;
        n.selectionMode.value = "node";
        const M = (k = (b = e[w]) == null ? void 0 : b.selectable) != null ? k : !1;
        if (M) {
            const z = St.valueOf(s.pointers).filter(O => i.has(O.nodeId)).length > 0;
            y.shiftKey || z ? i.has(w) ? i.delete(w) : typeof M == "number" && i.size >= M || i.add(w) : i.has(w) || (i.clear(),
            i.add(w))
        }
        a.emit("node:click", {
            node: w,
            event: y
        })
    }
    function h(w, y) {
        y.isTrusted || a.emit("node:dblclick", {
            node: w,
            event: y
        })
    }
    function d(w) {
        var y;
        w.stopPropagation();
        const b = s.pointers.get(w.pointerId);
        if (!b)
            return;
        b.latestPosition = {
            x: w.pageX,
            y: w.pageY
        },
        b.moveCounter++;
        const k = Bt(w.pointerType);
        if (b.moveCounter <= k || !((y = e[b.nodeId]) != null && y.draggable))
            return;
        if (b.moveCounter === k + 1) {
            const z = c(b, {
                pointerId: b.pointerId,
                pageX: b.dragBasePosition.x,
                pageY: b.dragBasePosition.y
            });
            a.emit("node:dragstart", z)
        }
        const M = c(b, w);
        a.emit("node:pointermove", M)
    }
    function x(w) {
        w.stopPropagation();
        let y = s.pointers.get(w.pointerId);
        if (y) {
            for (y of s.pointers.values()) {
                const b = y.nodeId
                  , k = Bt(w.pointerType);
                if (y.moveCounter > k) {
                    const M = c(y, {
                        pointerId: y.pointerId,
                        pageX: y.latestPosition.x,
                        pageY: y.latestPosition.y
                    });
                    a.emit("node:dragend", M)
                }
                a.emit("node:pointerup", {
                    node: b,
                    event: w
                })
            }
            s.pointers.clear(),
            s.follow = {
                followedPointerId: -1,
                nodeBasePositions: {}
            },
            be(l).forEach( ([b,k]) => {
                document.removeEventListener(b, k)
            }
            ),
            n.viewMode.value = "default"
        }
    }
    function m(w) {
        var y, b, k;
        w.stopPropagation();
        const M = s.pointers.get(w.pointerId);
        if (!M)
            return;
        s.pointers.delete(w.pointerId);
        const z = M.nodeId
          , O = Bt(w.pointerType)
          , I = M.moveCounter > O;
        if (I) {
            if ((y = e[M.nodeId]) != null && y.draggable) {
                const N = c(M, w);
                a.emit("node:dragend", N),
                a.emit("node:pointerup", {
                    node: z,
                    event: w
                })
            }
        } else
            a.emit("node:pointerup", {
                node: z,
                event: w
            });
        if (!I) {
            const [N,D] = to(s.clicks, M.pointerId, z, w);
            (b = M.eventTarget) == null || b.dispatchEvent(N),
            D && ((k = M.eventTarget) == null || k.dispatchEvent(D))
        }
        s.pointers.size === 0 ? (s.follow = {
            followedPointerId: -1,
            nodeBasePositions: {}
        },
        be(l).forEach( ([N,D]) => {
            document.removeEventListener(N, D)
        }
        ),
        no(s.clicks),
        n.viewMode.value = "default") : u(M),
        o.clear(),
        s.hoveredNodesPre.forEach(o.add, o)
    }
    function p(w, y) {
        if (y.button == 2 || (y.stopPropagation(),
        !["default", "node"].includes(n.viewMode.value)))
            return;
        s.pointers.size == 0 && (n.viewMode.value = "node",
        be(l).forEach( ([k,M]) => {
            document.addEventListener(k, M)
        }
        ));
        const b = {
            pointerId: y.pointerId,
            nodeId: w,
            moveCounter: 0,
            nodeBasePosition: wn(t.nodes, w),
            dragBasePosition: {
                x: y.pageX,
                y: y.pageY
            },
            latestPosition: {
                x: y.pageX,
                y: y.pageY
            },
            eventTarget: y.currentTarget
        };
        s.pointers.set(y.pointerId, b),
        i.has(w) && (s.follow.followedPointerId < 0 ? (s.follow.followedPointerId = y.pointerId,
        u(b)) : delete s.follow.nodeBasePositions[b.nodeId]),
        a.emit("node:pointerdown", {
            node: w,
            event: y
        })
    }
    function f(w, y) {
        s.hoveredNodesPre.add(w),
        !(s.pointers.size > 0) && (o.add(w),
        a.emit("node:pointerover", {
            node: w,
            event: y
        }))
    }
    function g(w, y) {
        s.hoveredNodesPre.delete(w),
        !(s.pointers.size > 0) && (o.delete(w),
        a.emit("node:pointerout", {
            node: w,
            event: y
        }))
    }
    function E(w, y) {
        y.stopPropagation(),
        a.emit("node:contextmenu", {
            node: w,
            event: y
        })
    }
    return {
        handleNodePointerDownEvent: p,
        handleNodePointerOverEvent: f,
        handleNodePointerOutEvent: g,
        handleNodeClickEvent: v,
        handleNodeDoubleClickEvent: h,
        handleNodeContextMenu: E
    }
}
function wn(e, t) {
    var n;
    const o = (n = e[t]) != null ? n : {
        x: 0,
        y: 0
    };
    return ce({}, o)
}
function sd(e, t, n, o, i) {
    const r = {
        pointers: new Map,
        pointerPeekCount: 0,
        clicks: new Map
    }
      , a = {
        pointerup: l,
        pointercancel: u
    };
    F(o, y => {
        y.size > 0 && t.selectionMode.value !== "edge" ? t.selectionMode.value = "edge" : y.size === 0 && t.selectionMode.value === "edge" && (t.selectionMode.value = "container")
    }
    ),
    F(t.selectionMode, y => {
        y !== "edge" && o.clear()
    }
    );
    function s(y, b) {
        if (b.button == 2 || (b.stopPropagation(),
        !["default", "edge"].includes(t.viewMode.value)))
            return;
        r.pointers.size == 0 && (t.viewMode.value = "edge",
        be(a).forEach( ([M,z]) => {
            document.addEventListener(M, z)
        }
        ),
        r.pointerPeekCount = 0),
        r.pointerPeekCount++;
        const k = {
            pointerId: b.pointerId,
            id: y,
            eventTarget: b.currentTarget
        };
        r.pointers.set(b.pointerId, k),
        i.emit("edge:pointerdown", Se(y, b))
    }
    function l(y) {
        var b, k;
        y.stopPropagation();
        const M = r.pointers.get(y.pointerId);
        if (!M)
            return;
        r.pointers.delete(y.pointerId);
        const z = M.id;
        i.emit("edge:pointerup", Se(z, y));
        const [O,I] = to(r.clicks, M.pointerId, z instanceof Array ? z.join(",") : z, y);
        (b = M.eventTarget) == null || b.dispatchEvent(O),
        I && ((k = M.eventTarget) == null || k.dispatchEvent(I)),
        r.pointers.size === 0 && (r.pointerPeekCount = 0,
        be(a).forEach( ([N,D]) => {
            document.removeEventListener(N, D)
        }
        ),
        no(r.clicks),
        t.viewMode.value = "default")
    }
    function u(y) {
        if (y.stopPropagation(),
        !!r.pointers.get(y.pointerId)) {
            for (const b of r.pointers.values()) {
                const k = b.id;
                i.emit("edge:pointerup", Se(k, y))
            }
            r.pointers.clear(),
            r.pointerPeekCount = 0,
            be(a).forEach( ([b,k]) => {
                document.removeEventListener(b, k)
            }
            ),
            i.emit("view:mode", "default")
        }
    }
    function c(y, b) {
        var k;
        if (b.isTrusted || b.shiftKey && !["container", "edge"].includes(t.selectionMode.value))
            return;
        t.selectionMode.value = "edge";
        const M = y instanceof Array ? y : [y]
          , z = St.valueOf(r.pointers).filter(O => (O.id instanceof Array ? O.id : [O.id]).every(I => o.has(I))).length > 0;
        if (y instanceof Array)
            M.find(O => {
                var I;
                return (I = e[O]) == null ? void 0 : I.selectable
            }
            ) && (b.shiftKey || z ? M.some(O => o.has(O)) ? M.forEach(O => o.delete(O)) : M.forEach(O => {
                var I;
                const N = (I = e[O]) == null ? void 0 : I.selectable;
                typeof N == "number" && o.size >= N || o.add(O)
            }
            ) : (o.clear(),
            M.forEach(O => o.add(O))));
        else {
            const O = (k = e[y]) == null ? void 0 : k.selectable;
            O && (b.shiftKey || z ? o.has(y) ? o.delete(y) : typeof O == "number" && o.size >= O || o.add(y) : o.has(y) || (o.clear(),
            o.add(y)))
        }
        i.emit("edge:click", Se(y, b))
    }
    function v(y, b) {
        b.isTrusted || i.emit("edge:dblclick", Se(y, b))
    }
    function h(y, b) {
        n.add(y),
        i.emit("edge:pointerover", Se(y, b))
    }
    function d(y, b) {
        n.delete(y),
        i.emit("edge:pointerout", Se(y, b))
    }
    function x(y, b) {
        b.stopPropagation(),
        i.emit("edge:contextmenu", Se(y, b))
    }
    function m(y, b) {
        if (b.button == 2 || (b.stopPropagation(),
        !["default", "edge"].includes(t.viewMode.value)))
            return;
        r.pointers.size == 0 && (t.viewMode.value = "edge",
        be(a).forEach( ([M,z]) => {
            document.addEventListener(M, z)
        }
        ),
        r.pointerPeekCount = 0),
        r.pointerPeekCount++;
        const k = {
            pointerId: b.pointerId,
            id: y,
            eventTarget: b.currentTarget
        };
        r.pointers.set(b.pointerId, k),
        i.emit("edge:pointerdown", Se(y, b))
    }
    function p(y, b) {
        y.forEach(k => n.add(k)),
        i.emit("edge:pointerover", Se(y, b))
    }
    function f(y, b) {
        y.forEach(k => n.delete(k)),
        i.emit("edge:pointerout", Se(y, b))
    }
    function g(y, b) {
        c(y, b)
    }
    function E(y, b) {
        v(y, b)
    }
    function w(y, b) {
        b.stopPropagation(),
        i.emit("edge:contextmenu", Se(y, b))
    }
    return {
        handleEdgePointerDownEvent: s,
        handleEdgePointerOverEvent: h,
        handleEdgePointerOutEvent: d,
        handleEdgeClickEvent: c,
        handleEdgeDoubleClickEvent: v,
        handleEdgeContextMenu: x,
        handleEdgesPointerDownEvent: m,
        handleEdgesPointerOverEvent: p,
        handleEdgesPointerOutEvent: f,
        handleEdgesClickEvent: g,
        handleEdgesDoubleClickEvent: E,
        handleEdgesContextMenu: w
    }
}
function Se(e, t) {
    return e instanceof Array ? {
        edges: e,
        event: t,
        summarized: !0
    } : {
        edge: e,
        edges: [e],
        event: t,
        summarized: !1
    }
}
function ld(e, t, n, o) {
    const i = {
        moveCounter: 0,
        pointerCounter: 0,
        clickState: void 0
    }
      , r = {
        pointermove: s,
        pointerup: l,
        pointercancel: l
    };
    function a(d) {
        i.moveCounter = 0,
        i.pointerCounter === 0 && be(r).forEach( ([x,m]) => {
            document.addEventListener(x, m, {
                passive: !0
            })
        }
        ),
        i.pointerCounter++
    }
    function s(d) {
        i.moveCounter++
    }
    function l(d) {
        if (i.pointerCounter--,
        i.pointerCounter <= 0) {
            i.pointerCounter = 0,
            be(r).forEach( ([m,p]) => {
                document.removeEventListener(m, p)
            }
            );
            const x = Bt(d.pointerType);
            if (i.moveCounter <= x) {
                if (d.shiftKey && t.selectionMode.value !== "container")
                    return;
                t.selectionMode.value = "container";
                const [m,p,f] = or(i.clickState, d, "view");
                i.clickState = m,
                e.value.dispatchEvent(p),
                f && e.value.dispatchEvent(f)
            }
        }
    }
    function u(d) {
        d.isTrusted || (d.stopPropagation(),
        o.emit("view:click", {
            event: d
        }))
    }
    function c(d) {
        d.isTrusted || (d.stopPropagation(),
        o.emit("view:dblclick", {
            event: d
        }))
    }
    function v(d) {
        o.emit("view:contextmenu", {
            event: d
        }),
        i.pointerCounter > 0 && (i.pointerCounter = 0,
        be(r).forEach( ([x,m]) => {
            var p;
            (p = e.value) == null || p.removeEventListener(x, m)
        }
        ))
    }
    const h = d => {
        d.preventDefault()
    }
    ;
    ft( () => {
        const d = e.value;
        d && (d.addEventListener("pointerdown", a, {
            passive: !0
        }),
        d.addEventListener("click", u, {
            passive: !1
        }),
        d.addEventListener("dblclick", c, {
            passive: !1
        }),
        d.addEventListener("contextmenu", v, {
            passive: !1
        }),
        n.value && d.addEventListener("wheel", h, {
            passive: !1
        }))
    }
    ),
    It( () => {
        const d = e.value;
        d && (d.removeEventListener("pointerdown", a),
        d.removeEventListener("click", u),
        d.removeEventListener("dblclick", c),
        d.removeEventListener("contextmenu", v),
        n.value && d.removeEventListener("wheel", h))
    }
    ),
    F(n, (d, x) => {
        const m = e.value;
        !m || d === x || (d ? m.addEventListener("wheel", h, {
            passive: !1
        }) : m.removeEventListener("wheel", h))
    }
    )
}
function ud(e, t, n, o, i, r) {
    const a = {
        pointers: new Map,
        pointerPeekCount: 0,
        clicks: new Map
    };
    function s(f, g) {
        var E, w;
        return i.value ? {
            path: (w = (E = e[f]) == null ? void 0 : E.path) != null ? w : f,
            event: g
        } : {
            path: f,
            event: g
        }
    }
    const l = {
        pointerup: c,
        pointercancel: v
    };
    F(o, f => {
        f.size > 0 && t.selectionMode.value !== "path" ? t.selectionMode.value = "path" : f.size === 0 && t.selectionMode.value === "path" && (t.selectionMode.value = "container")
    }
    ),
    F(t.selectionMode, f => {
        f !== "path" && o.clear()
    }
    );
    function u(f, g) {
        var E;
        if (!((E = e[f]) != null && E.clickable) || g.button == 2 || (g.stopPropagation(),
        !["default", "path"].includes(t.viewMode.value)))
            return;
        a.pointers.size == 0 && (t.viewMode.value = "path",
        be(l).forEach( ([y,b]) => {
            document.addEventListener(y, b)
        }
        ),
        a.pointerPeekCount = 0),
        a.pointerPeekCount++;
        const w = {
            pointerId: g.pointerId,
            id: f,
            eventTarget: g.currentTarget
        };
        a.pointers.set(g.pointerId, w),
        r.emit("path:pointerdown", s(f, g))
    }
    function c(f) {
        var g, E;
        const w = a.pointers.get(f.pointerId);
        if (!w)
            return;
        f.stopPropagation(),
        a.pointers.delete(f.pointerId);
        const y = w.id;
        r.emit("path:pointerup", s(y, f));
        const [b,k] = to(a.clicks, w.pointerId, y, f);
        (g = w.eventTarget) == null || g.dispatchEvent(b),
        k && ((E = w.eventTarget) == null || E.dispatchEvent(k)),
        a.pointers.size === 0 && (a.pointerPeekCount = 0,
        be(l).forEach( ([M,z]) => {
            document.removeEventListener(M, z)
        }
        ),
        no(a.clicks),
        t.viewMode.value = "default")
    }
    function v(f) {
        if (a.pointers.get(f.pointerId)) {
            f.stopPropagation();
            for (const g of a.pointers.values()) {
                const E = g.id;
                r.emit("path:pointerup", s(E, f))
            }
            a.pointers.clear(),
            a.pointerPeekCount = 0,
            be(l).forEach( ([g,E]) => {
                document.removeEventListener(g, E)
            }
            ),
            r.emit("view:mode", "default")
        }
    }
    function h(f, g) {
        var E;
        (E = e[f]) != null && E.hoverable && (n.add(f),
        r.emit("path:pointerover", s(f, g)))
    }
    function d(f, g) {
        var E;
        (E = e[f]) != null && E.hoverable && (n.delete(f),
        r.emit("path:pointerout", s(f, g)))
    }
    function x(f, g) {
        var E, w, y;
        if (g.isTrusted || !((E = e[f]) != null && E.clickable) || g.shiftKey && !["container", "path"].includes(t.selectionMode.value))
            return;
        t.selectionMode.value = "path";
        const b = (y = (w = e[f]) == null ? void 0 : w.selectable) != null ? y : !1;
        if (b) {
            const k = St.valueOf(a.pointers).filter(M => o.has(M.id)).length > 0;
            g.shiftKey || k ? o.has(f) ? o.delete(f) : typeof b == "number" && o.size >= b || o.add(f) : o.has(f) || (o.clear(),
            o.add(f))
        }
        r.emit("path:click", s(f, g))
    }
    function m(f, g) {
        var E;
        g.isTrusted || (E = e[f]) != null && E.clickable && r.emit("path:dblclick", s(f, g))
    }
    function p(f, g) {
        var E;
        (E = e[f]) != null && E.clickable && (g.stopPropagation(),
        r.emit("path:contextmenu", s(f, g)))
    }
    return {
        handlePathPointerDownEvent: u,
        handlePathPointerOverEvent: h,
        handlePathPointerOutEvent: d,
        handlePathClickEvent: x,
        handlePathDoubleClickEvent: m,
        handlePathContextMenu: p
    }
}
function cd(e) {
    return _e(this, null, function*() {
        const t = yield(yield fetch(e)).blob();
        return new Promise( (n, o) => {
            try {
                const i = new FileReader;
                i.onload = function() {
                    n(this.result)
                }
                ,
                i.readAsDataURL(t)
            } catch (i) {
                o(i)
            }
        }
        )
    })
}
function Cn(e, t, n) {
    var o;
    const i = e.createSVGPoint();
    i.x = n.x,
    i.y = n.y;
    const r = i.matrixTransform((o = t.getCTM()) == null ? void 0 : o.inverse());
    return {
        x: r.x,
        y: r.y
    }
}
function dd(e, t, n) {
    const o = e.createSVGPoint();
    o.x = n.x,
    o.y = n.y;
    const i = o.matrixTransform(t.getCTM());
    return {
        x: i.x,
        y: i.y
    }
}
function ir(e, t, n) {
    var o;
    const i = e.cloneNode(!0)
      , r = t.getBBox()
      , a = 1 / n
      , s = {
        x: Math.floor((r.x - 10) * a),
        y: Math.floor((r.y - 10) * a),
        width: Math.ceil((r.width + 20) * a),
        height: Math.ceil((r.height + 20) * a)
    };
    i.setAttribute("width", s.width.toString()),
    i.setAttribute("height", s.height.toString());
    const l = i.querySelector(".v-ng-viewport");
    l.setAttribute("transform", `translate(${-s.x} ${-s.y}), scale(${a})`),
    l.removeAttribute("style"),
    i.setAttribute("viewBox", `0 0 ${s.width} ${s.height}`),
    i.removeAttribute("style");
    const u = document.createNodeIterator(i, NodeFilter.SHOW_COMMENT);
    for (; u.nextNode(); ) {
        const c = u.referenceNode;
        (o = c.parentNode) == null || o.removeChild(c)
    }
    return i
}
function hd(e) {
    return _e(this, null, function*() {
        let t = !1
          , n = e.getAttribute("href");
        if (n || (t = !0,
        n = e.getAttribute("xlink:href")),
        !(!n || n.startsWith("data:")))
            try {
                const o = yield cd(n);
                e.setAttribute(t ? "xlink:href" : "href", o)
            } catch {
                console.warn("Image download failed.", n);
                return
            }
    })
}
function fd(e, t, n) {
    return _e(this, arguments, function*(o, i, r, a={}) {
        const s = ir(o, i, r);
        if (a.embedImages) {
            const l = Array.from(s.querySelectorAll("image")).map(u => hd(u));
            yield Promise.all(l)
        }
        return s
    })
}
function vd(e, t, n, o, i, r) {
    const a = T( () => !!r.node.selectable && r.view.boxSelectionEnabled)
      , s = T( () => t.viewMode.value === "box-selection")
      , l = R()
      , u = R()
      , c = {
        pointers: new Set,
        points: new Map,
        startPoint: null,
        selectedNodesAtSelectStarted: new Set,
        selectionType: "append",
        options: {
            stopTrigger: "pointerup",
            selectionType: "append",
            selectionTypeWithShiftKey: "same"
        }
    }
      , v = Gu( () => {
        pd(X(e.value, "container"), X(l.value, "viewport"), u, n.nodes, o, i, c.selectedNodesAtSelectStarted, c.selectionType)
    }
    , 50, {
        maxWait: 100
    })
      , h = new gd(e,x,m,p,d,f);
    function d(b) {
        if (c.options.stopTrigger !== "click" || c.pointers.size > 0)
            return;
        const k = {
            x: b.offsetX,
            y: b.offsetY
        };
        c.startPoint && H.fromObject(c.startPoint).distance(k) > 10 || y()
    }
    function x(b) {
        b.stopPropagation();
        const k = {
            x: b.offsetX,
            y: b.offsetY
        };
        c.pointers.size === 0 && (c.startPoint = k,
        h.activate(),
        c.selectedNodesAtSelectStarted.clear(),
        i.forEach(M => c.selectedNodesAtSelectStarted.add(M)),
        c.options.selectionTypeWithShiftKey === "same" ? c.selectionType = c.options.selectionType : c.selectionType = b.shiftKey ? c.options.selectionTypeWithShiftKey : c.options.selectionType),
        c.pointers.has(b.pointerId) || c.pointers.add(b.pointerId),
        c.points.set(b.pointerId, k),
        g()
    }
    function m(b) {
        if (c.pointers.delete(b.pointerId),
        c.pointers.size === 1) {
            const k = X(e.value).getBoundingClientRect()
              , M = {
                x: b.x - k.x,
                y: b.y - k.y
            };
            c.startPoint = M
        } else
            c.pointers.size === 0 && (h.deactivate(),
            c.options.stopTrigger === "pointerup" && y(),
            c.selectedNodesAtSelectStarted.clear());
        g()
    }
    function p(b) {
        const k = X(e.value).getBoundingClientRect()
          , M = {
            x: b.x - k.x,
            y: b.y - k.y
        };
        c.points.set(b.pointerId, M),
        g(),
        v()
    }
    function f(b) {
        b.key === "Escape" && c.options.stopTrigger !== "manual" && (b.stopPropagation(),
        y())
    }
    function g() {
        let b, k;
        const M = Array.from(c.pointers);
        if (M.length >= 2) {
            const z = M[0]
              , O = M[M.length - 1];
            b = c.points.get(z),
            k = c.points.get(O)
        } else if (c.startPoint && M.length === 1) {
            const z = M[0];
            b = c.startPoint,
            k = c.points.get(z)
        } else
            b = void 0,
            k = void 0;
        b && k ? (u.value = {
            pos: {
                x: Math.min(b.x, k.x),
                y: Math.min(b.y, k.y)
            },
            size: {
                width: Math.abs(k.x - b.x),
                height: Math.abs(k.y - b.y)
            }
        },
        u.value.size.width === 0 && (u.value.size.width = 1),
        u.value.size.height === 0 && (u.value.size.height = 1)) : u.value && (u.value = void 0)
    }
    const E = new md(e,b => {
        a.value && r.view.selection.detector(b) && (w({
            stop: "manual",
            type: "append",
            withShiftKey: "invert"
        }),
        E.activate())
    }
    ,b => {
        a.value && r.view.selection.detector(b) && (c.pointers.size === 0 ? y() : c.options.stopTrigger = "pointerup",
        E.deactivate())
    }
    );
    F(a, b => {
        b ? E.register() : E.unregister()
    }
    ),
    ft( () => {
        var b;
        l.value = (b = e.value) == null ? void 0 : b.querySelector(".v-ng-viewport"),
        a.value && E.register()
    }
    ),
    It( () => {
        y(),
        a.value && E.unregister()
    }
    );
    function w(b={}) {
        var k, M, z;
        c.options = {
            stopTrigger: (k = b.stop) != null ? k : "pointerup",
            selectionType: (M = b.type) != null ? M : "append",
            selectionTypeWithShiftKey: (z = b.withShiftKey) != null ? z : "same"
        },
        t.viewMode.value !== "box-selection" && (t.viewMode.value = "box-selection",
        c.pointers.clear(),
        h.register())
    }
    function y() {
        t.viewMode.value === "box-selection" && (t.viewMode.value = "default",
        h.unregister())
    }
    return {
        isBoxSelectionMode: s,
        selectionBox: u,
        startBoxSelection: w,
        stopBoxSelection: y
    }
}
function pd(e, t, n, o, i, r, a, s) {
    if (!n.value)
        return;
    const l = n.value
      , u = Cn(e, t, l.pos)
      , c = Cn(e, t, {
        x: l.pos.x + l.size.width,
        y: l.pos.y + l.size.height
    })
      , v = new Set(Object.entries(o).filter( ([h,d]) => u.x <= d.x && d.x <= c.x && u.y <= d.y && d.y <= c.y).map( ([h,d]) => h));
    if (s === "append")
        r.forEach(h => {
            v.has(h) || r.delete(h)
        }
        ),
        v.forEach(h => {
            var d, x;
            const m = (x = (d = i[h]) == null ? void 0 : d.selectable) != null ? x : !1;
            (m === !0 || typeof m == "number" && r.size < m) && r.add(h)
        }
        );
    else {
        const h = new Set(a);
        h.forEach(d => {
            v.has(d) && h.delete(d)
        }
        ),
        v.forEach(d => {
            var x, m;
            if (!a.has(d)) {
                const p = (m = (x = i[d]) == null ? void 0 : x.selectable) != null ? m : !1;
                (p === !0 || typeof p == "number" && h.size < p) && h.add(d)
            }
        }
        ),
        r.clear(),
        h.forEach(d => r.add(d))
    }
}
class gd {
    constructor(t, n, o, i, r, a) {
        this._container = t,
        this._handlePointerDownEvent = n,
        this._handlePointerUpEvent = o,
        this._handlePointerMoveEvent = i,
        this._handleClickEvent = r,
        this._handleKeyDownEvent = a,
        this._ignoreEvent = s => s.stopPropagation()
    }
    register() {
        const t = {
            capture: !0,
            passive: !1
        }
          , n = X(this._container.value, "container");
        n.addEventListener("pointerdown", this._handlePointerDownEvent, t),
        n.addEventListener("click", this._handleClickEvent, t),
        n.addEventListener("pointerenter", this._ignoreEvent, t),
        n.addEventListener("pointerleave", this._ignoreEvent, t),
        document.addEventListener("keydown", this._handleKeyDownEvent, t)
    }
    activate() {
        const t = {
            capture: !0,
            passive: !1
        };
        document.addEventListener("pointermove", this._handlePointerMoveEvent, t),
        document.addEventListener("pointerup", this._handlePointerUpEvent, t)
    }
    deactivate() {
        const t = {
            capture: !0
        };
        document.removeEventListener("pointermove", this._handlePointerMoveEvent, t),
        document.removeEventListener("pointerup", this._handlePointerUpEvent, t)
    }
    unregister() {
        this.deactivate();
        const t = {
            capture: !0
        };
        if (this._container.value) {
            const n = this._container.value;
            n.removeEventListener("pointerdown", this._handlePointerDownEvent, t),
            n.removeEventListener("click", this._handleClickEvent, t),
            n.removeEventListener("pointerenter", this._ignoreEvent, t),
            n.removeEventListener("pointerleave", this._ignoreEvent, t),
            document.removeEventListener("keydown", this._handleKeyDownEvent, t)
        }
    }
}
class md {
    constructor(t, n, o) {
        this._container = t,
        this._handleKeyDownEvent = n,
        this._handleKeyUpEvent = o,
        this._preventDefault = i => {
            i.stopPropagation(),
            i.preventDefault()
        }
    }
    register() {
        document.addEventListener("keydown", this._handleKeyDownEvent, {
            capture: !0,
            passive: !0
        })
    }
    activate() {
        document.addEventListener("keyup", this._handleKeyUpEvent, {
            capture: !0,
            passive: !0
        }),
        X(this._container.value, "container").addEventListener("contextmenu", this._preventDefault, {
            passive: !1
        })
    }
    deactivate() {
        document.removeEventListener("keyup", this._handleKeyUpEvent, {
            capture: !0
        }),
        this._container.value && this._container.value.removeEventListener("contextmenu", this._preventDefault)
    }
    unregister() {
        this.deactivate(),
        document.removeEventListener("keydown", this._handleKeyDownEvent, {
            capture: !0
        })
    }
}
const rr = Symbol("mouseEventHandlers");
function yd(e, t, n, o, i, r, a, s, l, u, c, v, h, d, x, m) {
    const p = {
        selectionMode: R("container"),
        viewMode: R("default")
    };
    a.size > 0 ? p.selectionMode.value = "node" : s.size > 0 ? p.selectionMode.value = "edge" : l.size > 0 && (p.selectionMode.value = "path"),
    F(p.viewMode, g => {
        m.emit("view:mode", g)
    }
    ),
    ld(e, p, d, m);
    const f = ce(ce(ce(ce({
        selectedNodes: a,
        hoveredNodes: u,
        selectedEdges: s,
        hoveredEdges: c,
        selectedPaths: l,
        hoveredPaths: v
    }, ad(o, t, p, u, a, n, m)), sd(i, p, c, s, m)), ud(r, p, v, l, h, m)), vd(e, p, t, o, a, x));
    return Ue(rr, f),
    f
}
function Nt() {
    return X(Ge(rr), "mouseEventHandlers")
}
function bd(e) {
    return {
        all: e = e || new Map,
        on: function(t, n) {
            var o = e.get(t);
            o ? o.push(n) : e.set(t, [n])
        },
        off: function(t, n) {
            var o = e.get(t);
            o && (n ? o.splice(o.indexOf(n) >>> 0, 1) : e.set(t, []))
        },
        emit: function(t, n) {
            var o = e.get(t);
            o && o.slice().map(function(i) {
                i(n)
            }),
            (o = e.get("*")) && o.slice().map(function(i) {
                i(t, n)
            })
        }
    }
}
const ar = Symbol("emitter");
function wd() {
    const e = bd();
    return Ue(ar, e),
    e
}
function xd() {
    return X(Ge(ar), "event emitter")
}
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ed(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var sn = {
    getGlobalThis: function() {
        if (typeof globalThis < "u")
            return globalThis;
        if (typeof self < "u")
            return self;
        if (typeof window < "u")
            return window;
        if (typeof Gt < "u")
            return Gt;
        if (typeof this < "u")
            return this;
        throw new Error("Unable to locate global `this`")
    },
    extend: function(e, t) {
        e = e || {};
        for (var n in t)
            this.isObject(t[n]) ? e[n] = this.extend(e[n], t[n]) : e[n] = t[n];
        return e
    },
    isElement: function(e) {
        return e instanceof HTMLElement || e instanceof SVGElement || e instanceof SVGSVGElement || e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string"
    },
    isObject: function(e) {
        return Object.prototype.toString.call(e) === "[object Object]"
    },
    isNumber: function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    },
    getSvg: function(e) {
        var t, n;
        if (this.isElement(e))
            t = e;
        else if (typeof e == "string" || e instanceof String) {
            if (t = document.querySelector(e),
            !t)
                throw new Error("Provided selector did not find any elements. Selector: " + e)
        } else
            throw new Error("Provided selector is not an HTML object nor String");
        if (t.tagName.toLowerCase() === "svg")
            n = t;
        else if (t.tagName.toLowerCase() === "object")
            n = t.contentDocument.documentElement;
        else if (t.tagName.toLowerCase() === "embed")
            n = t.getSVGDocument().documentElement;
        else
            throw t.tagName.toLowerCase() === "img" ? new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.') : new Error("Cannot get SVG.");
        return n
    },
    proxy: function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    },
    getType: function(e) {
        return Object.prototype.toString.apply(e).replace(/^\[object\s/, "").replace(/\]$/, "")
    },
    mouseAndTouchNormalize: function(e, t) {
        if (e.clientX === void 0 || e.clientX === null)
            if (e.clientX = 0,
            e.clientY = 0,
            e.touches !== void 0 && e.touches.length) {
                if (e.touches[0].clientX !== void 0)
                    e.clientX = e.touches[0].clientX,
                    e.clientY = e.touches[0].clientY;
                else if (e.touches[0].pageX !== void 0) {
                    var n = t.getBoundingClientRect();
                    e.clientX = e.touches[0].pageX - n.left,
                    e.clientY = e.touches[0].pageY - n.top
                }
            } else
                e.originalEvent !== void 0 && e.originalEvent.clientX !== void 0 && (e.clientX = e.originalEvent.clientX,
                e.clientY = e.originalEvent.clientY)
    },
    touchNormalize: function(e, t, n) {
        if (e.touches !== void 0 && e.touches.length) {
            if (e.touches[n].clientX !== void 0)
                e.clientX = e.touches[n].clientX,
                e.clientY = e.touches[n].clientY;
            else if (e.touches[n].pageX !== void 0) {
                var o = t.getBoundingClientRect();
                e.clientX = e.touches[n].pageX - o.left,
                e.clientY = e.touches[n].pageY - o.top
            }
        } else
            (e.clientX === void 0 || e.clientX === null) && (e.clientX = 0,
            e.clientY = 0,
            e.originalEvent !== void 0 && e.originalEvent.clientX !== void 0 && (e.clientX = e.originalEvent.clientX,
            e.clientY = e.originalEvent.clientY))
    },
    isDblClick: function(e, t) {
        if (e.detail === 2)
            return !0;
        if (t != null) {
            var n = e.timeStamp - t.timeStamp
              , o = Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2));
            return n < 250 && o < 10
        }
        return !1
    },
    now: Date.now || function() {
        return new Date().getTime()
    }
    ,
    throttle: function(e, t, n) {
        var o = this, i, r, a, s = null, l = 0;
        n || (n = {});
        var u = function() {
            l = n.leading === !1 ? 0 : o.now(),
            s = null,
            a = e.apply(i, r),
            s || (i = r = null)
        };
        return function() {
            var c = o.now();
            !l && n.leading === !1 && (l = c);
            var v = t - (c - l);
            return i = this,
            r = arguments,
            v <= 0 || v > t ? (clearTimeout(s),
            s = null,
            l = c,
            a = e.apply(i, r),
            s || (i = r = null)) : !s && n.trailing !== !1 && (s = setTimeout(u, v)),
            a
        }
    },
    createRequestAnimationFrame: function(e) {
        var t = null;
        return e !== "auto" && e < 60 && e > 1 && (t = Math.floor(1e3 / e)),
        t === null ? window.requestAnimationFrame || ai(33) : ai(t)
    },
    calculateDistance: function(e, t) {
        var n = e.x - t.x
          , o = e.y - t.y;
        return Math.sqrt(n * n + o * o)
    }
};
function ai(e) {
    return function(t) {
        window.setTimeout(t, e)
    }
}
var Sd = sn
  , kd = function() {
    var e = "", t, n, o, i = [], r = {
        passive: !0
    }, a = {
        passive: !1
    };
    Sd.getGlobalThis().addEventListener ? (t = "addEventListener",
    n = "removeEventListener") : (t = "attachEvent",
    n = "detachEvent",
    e = "on");
    function s() {
        return o || (o = "onwheel"in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll"),
        o
    }
    function l(m, p) {
        var f = function(g) {
            !g && (g = window.event);
            var E = {
                originalEvent: g,
                target: g.target || g.srcElement,
                type: "wheel",
                deltaMode: g.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                delatZ: 0,
                preventDefault: function() {
                    g.preventDefault ? g.preventDefault() : g.returnValue = !1
                }
            };
            return s() == "mousewheel" ? (E.deltaY = -.025 * g.wheelDelta,
            g.wheelDeltaX && (E.deltaX = -.025 * g.wheelDeltaX)) : E.deltaY = g.detail,
            p(E)
        };
        return i.push({
            element: m,
            fn: f
        }),
        f
    }
    function u(m) {
        for (var p = 0; p < i.length; p++)
            if (i[p].element === m)
                return i[p].fn;
        return function() {}
    }
    function c(m) {
        for (var p = 0; p < i.length; p++)
            if (i[p].element === m)
                return i.splice(p, 1)
    }
    function v(m, p, f, g) {
        var E;
        s() === "wheel" ? E = f : E = l(m, f),
        m[t](e + p, E, g ? r : a)
    }
    function h(m, p, f, g) {
        var E;
        s() === "wheel" ? E = f : E = u(m),
        m[n](e + p, E, g ? r : a),
        c(m)
    }
    function d(m, p, f) {
        v(m, s(), p, f),
        s() == "DOMMouseScroll" && v(m, "MozMousePixelScroll", p, f)
    }
    function x(m, p, f) {
        h(m, s(), p, f),
        s() == "DOMMouseScroll" && h(m, "MozMousePixelScroll", p, f)
    }
    return {
        on: d,
        off: x
    }
}()
  , Dt = sn
  , sr = "unknown";
typeof document < "u" && document.documentMode && (sr = "ie");
var oo = {
    svgNS: "http://www.w3.org/2000/svg",
    xmlNS: "http://www.w3.org/XML/1998/namespace",
    xmlnsNS: "http://www.w3.org/2000/xmlns/",
    xlinkNS: "http://www.w3.org/1999/xlink",
    evNS: "http://www.w3.org/2001/xml-events",
    getBoundingClientRectNormalized: function(e) {
        if (e.clientWidth && e.clientHeight)
            return {
                width: e.clientWidth,
                height: e.clientHeight
            };
        if (e.getBoundingClientRect())
            return e.getBoundingClientRect();
        throw new Error("Cannot get BoundingClientRect for SVG.")
    },
    getOrCreateViewport: function(e, t) {
        var n = null;
        if (Dt.isElement(t) ? n = t : n = e.querySelector(t),
        !n) {
            var o = Array.prototype.slice.call(e.childNodes || e.children).filter(function(l) {
                return l.nodeName !== "defs" && l.nodeName !== "#text"
            });
            o.length === 1 && o[0].nodeName === "g" && o[0].getAttribute("transform") === null && (n = o[0])
        }
        if (!n) {
            var i = "viewport-" + new Date().toISOString().replace(/\D/g, "");
            n = document.createElementNS(this.svgNS, "g"),
            n.setAttribute("id", i);
            var r = e.childNodes || e.children;
            if (r && r.length > 0)
                for (var a = r.length; a > 0; a--)
                    r[r.length - a].nodeName !== "defs" && n.appendChild(r[r.length - a]);
            e.appendChild(n)
        }
        var s = [];
        return n.getAttribute("class") && (s = n.getAttribute("class").split(" ")),
        ~s.indexOf("svg-pan-zoom_viewport") || (s.push("svg-pan-zoom_viewport"),
        n.setAttribute("class", s.join(" "))),
        n
    },
    setupSvgAttributes: function(e) {
        if (e.setAttribute("xmlns", this.svgNS),
        e.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS),
        e.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS),
        e.parentNode !== null) {
            var t = e.getAttribute("style") || "";
            t.toLowerCase().indexOf("overflow") === -1 && e.setAttribute("style", "overflow: hidden; " + t)
        }
    },
    internetExplorerRedisplayInterval: 300,
    refreshDefsGlobal: Dt.throttle(function() {
        for (var e = document.querySelectorAll("defs"), t = e.length, n = 0; n < t; n++) {
            var o = e[n];
            o.parentNode.insertBefore(o, o)
        }
    }, Gt ? Gt.internetExplorerRedisplayInterval : null),
    setCTM: function(e, t, n) {
        var o = this
          , i = "matrix(" + t.a + "," + t.b + "," + t.c + "," + t.d + "," + t.e + "," + t.f + ")";
        e.setAttributeNS(null, "transform", i),
        "transform"in e.style ? e.style.transform = i : "-ms-transform"in e.style ? e.style["-ms-transform"] = i : "-webkit-transform"in e.style && (e.style["-webkit-transform"] = i),
        sr === "ie" && n && (n.parentNode.insertBefore(n, n),
        window.setTimeout(function() {
            o.refreshDefsGlobal()
        }, o.internetExplorerRedisplayInterval))
    },
    getEventPoint: function(e, t) {
        var n = t.createSVGPoint();
        return Dt.mouseAndTouchNormalize(e, t),
        n.x = e.clientX,
        n.y = e.clientY,
        n
    },
    getTouchPoint: function(e, t, n) {
        var o = t.createSVGPoint();
        return Dt.touchNormalize(e, t, n),
        o.x = e.clientX,
        o.y = e.clientY,
        o
    },
    getSvgCenterPoint: function(e, t, n) {
        return this.createSVGPoint(e, t / 2, n / 2)
    },
    createSVGPoint: function(e, t, n) {
        var o = e.createSVGPoint();
        return o.x = t,
        o.y = n,
        o
    }
}
  , xe = oo
  , Pd = {
    enable: function(e) {
        var t = e.svg.querySelector("defs");
        t || (t = document.createElementNS(xe.svgNS, "defs"),
        e.svg.appendChild(t));
        var n = t.querySelector("style#svg-pan-zoom-controls-styles");
        if (!n) {
            var o = document.createElementNS(xe.svgNS, "style");
            o.setAttribute("id", "svg-pan-zoom-controls-styles"),
            o.setAttribute("type", "text/css"),
            o.textContent = ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",
            t.appendChild(o)
        }
        var i = document.createElementNS(xe.svgNS, "g");
        i.setAttribute("id", "svg-pan-zoom-controls"),
        i.setAttribute("transform", "translate(" + (e.width - 70) + " " + (e.height - 76) + ") scale(0.75)"),
        i.setAttribute("class", "svg-pan-zoom-control"),
        i.appendChild(this._createZoomIn(e)),
        i.appendChild(this._createZoomReset(e)),
        i.appendChild(this._createZoomOut(e)),
        e.svg.appendChild(i),
        e.controlIcons = i
    },
    _createZoomIn: function(e) {
        var t = document.createElementNS(xe.svgNS, "g");
        t.setAttribute("id", "svg-pan-zoom-zoom-in"),
        t.setAttribute("transform", "translate(30.5 5) scale(0.015)"),
        t.setAttribute("class", "svg-pan-zoom-control"),
        t.addEventListener("click", function() {
            e.getPublicInstance().zoomIn()
        }, !1),
        t.addEventListener("touchstart", function() {
            e.getPublicInstance().zoomIn()
        }, !1);
        var n = document.createElementNS(xe.svgNS, "rect");
        n.setAttribute("x", "0"),
        n.setAttribute("y", "0"),
        n.setAttribute("width", "1500"),
        n.setAttribute("height", "1400"),
        n.setAttribute("class", "svg-pan-zoom-control-background"),
        t.appendChild(n);
        var o = document.createElementNS(xe.svgNS, "path");
        return o.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),
        o.setAttribute("class", "svg-pan-zoom-control-element"),
        t.appendChild(o),
        t
    },
    _createZoomReset: function(e) {
        var t = document.createElementNS(xe.svgNS, "g");
        t.setAttribute("id", "svg-pan-zoom-reset-pan-zoom"),
        t.setAttribute("transform", "translate(5 35) scale(0.4)"),
        t.setAttribute("class", "svg-pan-zoom-control"),
        t.addEventListener("click", function() {
            e.getPublicInstance().reset()
        }, !1),
        t.addEventListener("touchstart", function() {
            e.getPublicInstance().reset()
        }, !1);
        var n = document.createElementNS(xe.svgNS, "rect");
        n.setAttribute("x", "2"),
        n.setAttribute("y", "2"),
        n.setAttribute("width", "182"),
        n.setAttribute("height", "58"),
        n.setAttribute("class", "svg-pan-zoom-control-background"),
        t.appendChild(n);
        var o = document.createElementNS(xe.svgNS, "path");
        o.setAttribute("d", "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),
        o.setAttribute("class", "svg-pan-zoom-control-element"),
        t.appendChild(o);
        var i = document.createElementNS(xe.svgNS, "path");
        return i.setAttribute("d", "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),
        i.setAttribute("class", "svg-pan-zoom-control-element"),
        t.appendChild(i),
        t
    },
    _createZoomOut: function(e) {
        var t = document.createElementNS(xe.svgNS, "g");
        t.setAttribute("id", "svg-pan-zoom-zoom-out"),
        t.setAttribute("transform", "translate(30.5 70) scale(0.015)"),
        t.setAttribute("class", "svg-pan-zoom-control"),
        t.addEventListener("click", function() {
            e.getPublicInstance().zoomOut()
        }, !1),
        t.addEventListener("touchstart", function() {
            e.getPublicInstance().zoomOut()
        }, !1);
        var n = document.createElementNS(xe.svgNS, "rect");
        n.setAttribute("x", "0"),
        n.setAttribute("y", "0"),
        n.setAttribute("width", "1500"),
        n.setAttribute("height", "1400"),
        n.setAttribute("class", "svg-pan-zoom-control-background"),
        t.appendChild(n);
        var o = document.createElementNS(xe.svgNS, "path");
        return o.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),
        o.setAttribute("class", "svg-pan-zoom-control-element"),
        t.appendChild(o),
        t
    },
    disable: function(e) {
        e.controlIcons && (e.controlIcons.parentNode.removeChild(e.controlIcons),
        e.controlIcons = null)
    }
}
  , Md = oo
  , He = sn
  , re = function(e, t) {
    this.init(e, t)
};
re.prototype.init = function(e, t) {
    this.viewport = e,
    this.options = t,
    this.originalState = {
        zoom: 1,
        x: 0,
        y: 0
    },
    this.activeState = {
        zoom: 1,
        x: 0,
        y: 0
    },
    this.updateCTMCached = He.proxy(this.updateCTM, this),
    this.requestAnimationFrame = He.createRequestAnimationFrame(this.options.refreshRate),
    this.viewBox = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    this.cacheViewBox();
    var n = this.processCTM();
    this.setCTM(n),
    this.updateCTM()
}
;
re.prototype.cacheViewBox = function() {
    var e = this.options.svg.getAttribute("viewBox");
    if (e) {
        var t = e.split(/[\s\,]/).filter(function(o) {
            return o
        }).map(parseFloat);
        this.viewBox.x = t[0],
        this.viewBox.y = t[1],
        this.viewBox.width = t[2],
        this.viewBox.height = t[3];
        var n = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
        this.activeState.zoom = isFinite(n) ? n : 1,
        this.activeState.x = (this.options.width - this.viewBox.width * n) / 2,
        this.activeState.y = (this.options.height - this.viewBox.height * n) / 2,
        this.updateCTMOnNextFrame(),
        this.options.svg.removeAttribute("viewBox")
    } else
        this.simpleViewBoxCache()
}
;
re.prototype.simpleViewBoxCache = function() {
    var e = this.viewport.getBBox();
    this.viewBox.x = e.x,
    this.viewBox.y = e.y,
    this.viewBox.width = e.width,
    this.viewBox.height = e.height
}
;
re.prototype.getViewBox = function() {
    return He.extend({}, this.viewBox)
}
;
re.prototype.processCTM = function() {
    var e = this.getCTM();
    if (this.options.fit || this.options.contain) {
        var t;
        this.options.fit ? t = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height) : t = Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height),
        t = isFinite(t) ? t : 1,
        e.a = t,
        e.d = t,
        e.e = -this.viewBox.x * t,
        e.f = -this.viewBox.y * t
    }
    if (this.options.center) {
        var n = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * e.a) * .5
          , o = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * e.a) * .5;
        e.e = n,
        e.f = o
    }
    return this.originalState.zoom = e.a,
    this.originalState.x = e.e,
    this.originalState.y = e.f,
    e
}
;
re.prototype.getOriginalState = function() {
    return He.extend({}, this.originalState)
}
;
re.prototype.getState = function() {
    return He.extend({}, this.activeState)
}
;
re.prototype.getZoom = function() {
    return this.activeState.zoom
}
;
re.prototype.getRelativeZoom = function() {
    return this.activeState.zoom / this.originalState.zoom
}
;
re.prototype.computeRelativeZoom = function(e) {
    return e / this.originalState.zoom
}
;
re.prototype.getPan = function() {
    return {
        x: this.activeState.x,
        y: this.activeState.y
    }
}
;
re.prototype.getCTM = function() {
    var e = this.options.svg.createSVGMatrix();
    return e.a = this.activeState.zoom,
    e.b = 0,
    e.c = 0,
    e.d = this.activeState.zoom,
    e.e = this.activeState.x,
    e.f = this.activeState.y,
    e
}
;
re.prototype.setCTM = function(e) {
    var t = this.isZoomDifferent(e)
      , n = this.isPanDifferent(e);
    if (t || n) {
        if (t && (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(e.a)) === !1 ? (e.a = e.d = this.activeState.zoom,
        t = !1) : (this.updateCache(e),
        this.options.onZoom(this.getRelativeZoom()))),
        n) {
            var o = this.options.beforePan(this.getPan(), {
                x: e.e,
                y: e.f
            })
              , i = !1
              , r = !1;
            o === !1 ? (e.e = this.getPan().x,
            e.f = this.getPan().y,
            i = r = !0) : He.isObject(o) && (o.x === !1 ? (e.e = this.getPan().x,
            i = !0) : He.isNumber(o.x) && (e.e = o.x),
            o.y === !1 ? (e.f = this.getPan().y,
            r = !0) : He.isNumber(o.y) && (e.f = o.y)),
            i && r || !this.isPanDifferent(e) ? n = !1 : (this.updateCache(e),
            this.options.onPan(this.getPan()))
        }
        (t || n) && this.updateCTMOnNextFrame()
    }
}
;
re.prototype.isZoomDifferent = function(e) {
    return this.activeState.zoom !== e.a
}
;
re.prototype.isPanDifferent = function(e) {
    return this.activeState.x !== e.e || this.activeState.y !== e.f
}
;
re.prototype.updateCache = function(e) {
    this.activeState.zoom = e.a,
    this.activeState.x = e.e,
    this.activeState.y = e.f
}
;
re.prototype.pendingUpdate = !1;
re.prototype.updateCTMOnNextFrame = function() {
    this.pendingUpdate || (this.pendingUpdate = !0,
    this.requestAnimationFrame.call(window, this.updateCTMCached))
}
;
re.prototype.updateCTM = function() {
    var e = this.getCTM();
    Md.setCTM(this.viewport, e, this.defs),
    this.pendingUpdate = !1,
    this.options.onUpdatedCTM && this.options.onUpdatedCTM(e)
}
;
var _d = function(e, t) {
    return new re(e,t)
}
  , lr = kd
  , An = Pd
  , ye = sn
  , le = oo
  , Od = _d
  , G = function(e, t) {
    this.init(e, t)
}
  , Td = {
    viewportSelector: ".svg-pan-zoom_viewport",
    panEnabled: !0,
    controlIconsEnabled: !1,
    zoomEnabled: !0,
    dblClickZoomEnabled: !0,
    mouseWheelZoomEnabled: !0,
    preventMouseEventsDefault: !0,
    zoomScaleSensitivity: .1,
    minZoom: .5,
    maxZoom: 10,
    fit: !0,
    contain: !1,
    center: !0,
    refreshRate: "auto",
    beforeZoom: null,
    onZoom: null,
    beforePan: null,
    onPan: null,
    customEventsHandler: null,
    eventsListenerElement: null,
    onUpdatedCTM: null
}
  , ur = {
    passive: !0
}
  , cr = {
    passive: !1
};
G.prototype.init = function(e, t) {
    var n = this;
    this.svg = e,
    this.defs = e.querySelector("defs"),
    le.setupSvgAttributes(this.svg),
    this.options = ye.extend(ye.extend({}, Td), t),
    this.state = "none";
    var o = le.getBoundingClientRectNormalized(e);
    this.width = o.width,
    this.height = o.height,
    this.viewport = Od(le.getOrCreateViewport(this.svg, this.options.viewportSelector), {
        svg: this.svg,
        width: this.width,
        height: this.height,
        fit: this.options.fit,
        contain: this.options.contain,
        center: this.options.center,
        refreshRate: this.options.refreshRate,
        beforeZoom: function(r, a) {
            if (n.viewport && n.options.beforeZoom)
                return n.options.beforeZoom(r, a)
        },
        onZoom: function(r) {
            if (n.viewport && n.options.onZoom)
                return n.options.onZoom(r)
        },
        beforePan: function(r, a) {
            if (n.viewport && n.options.beforePan)
                return n.options.beforePan(r, a)
        },
        onPan: function(r) {
            if (n.viewport && n.options.onPan)
                return n.options.onPan(r)
        },
        onUpdatedCTM: function(r) {
            if (n.viewport && n.options.onUpdatedCTM)
                return n.options.onUpdatedCTM(r)
        }
    });
    var i = this.getPublicInstance();
    i.setBeforeZoom(this.options.beforeZoom),
    i.setOnZoom(this.options.onZoom),
    i.setBeforePan(this.options.beforePan),
    i.setOnPan(this.options.onPan),
    i.setOnUpdatedCTM(this.options.onUpdatedCTM),
    this.options.controlIconsEnabled && An.enable(this),
    this.lastMouseWheelEventTime = Date.now(),
    this.setupHandlers()
}
;
G.prototype.setupHandlers = function() {
    var e = this
      , t = null;
    if (this.eventListeners = {
        pointerdown: function(r) {
            if (r.pointerType !== "touch") {
                var a = e.handleMouseDown(r, t);
                return t = r,
                a
            }
        },
        touchstart: function(r) {
            var a = e.handleTouchStart(r, t);
            return t = r,
            a
        },
        pointerup: function(r) {
            if (r.pointerType !== "touch")
                return e.handleMouseUp(r)
        },
        touchend: function(r) {
            return e.handleTouchEnd(r)
        },
        pointermove: function(r) {
            if (r.pointerType !== "touch")
                return e.handleMouseMove(r)
        },
        touchmove: function(r) {
            return e.handleTouchMove(r)
        },
        pointerleave: function(r) {
            if (r.pointerType !== "touch")
                return e.handleMouseUp(r)
        },
        pointercancel: function(r) {
            if (r.pointerType !== "touch")
                return e.handleMouseUp(r)
        },
        touchleave: function(r) {
            return e.handleTouchEnd(r)
        },
        touchcancel: function(r) {
            return e.handleTouchEnd(r)
        }
    },
    this.options.customEventsHandler != null) {
        this.options.customEventsHandler.init({
            svgElement: this.svg,
            eventsListenerElement: this.options.eventsListenerElement,
            instance: this.getPublicInstance()
        });
        var n = this.options.customEventsHandler.haltEventListeners;
        if (n && n.length)
            for (var o = n.length - 1; o >= 0; o--)
                this.eventListeners.hasOwnProperty(n[o]) && delete this.eventListeners[n[o]]
    }
    for (var i in this.eventListeners)
        (this.options.eventsListenerElement || this.svg).addEventListener(i, this.eventListeners[i], this.options.preventMouseEventsDefault ? cr : ur);
    this.options.mouseWheelZoomEnabled && (this.options.mouseWheelZoomEnabled = !1,
    this.enableMouseWheelZoom())
}
;
G.prototype.enableMouseWheelZoom = function() {
    if (!this.options.mouseWheelZoomEnabled) {
        var e = this;
        this.wheelListener = function(n) {
            return e.handleMouseWheel(n)
        }
        ;
        var t = !this.options.preventMouseEventsDefault;
        lr.on(this.options.eventsListenerElement || this.svg, this.wheelListener, t),
        this.options.mouseWheelZoomEnabled = !0
    }
}
;
G.prototype.disableMouseWheelZoom = function() {
    if (this.options.mouseWheelZoomEnabled) {
        var e = !this.options.preventMouseEventsDefault;
        lr.off(this.options.eventsListenerElement || this.svg, this.wheelListener, e),
        this.options.mouseWheelZoomEnabled = !1
    }
}
;
G.prototype.handleMouseWheel = function(e) {
    if (!(!this.options.zoomEnabled || this.state !== "none")) {
        this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        var t = e.deltaY || 1
          , n = Date.now() - this.lastMouseWheelEventTime
          , o = 3 + Math.max(0, 30 - n);
        this.lastMouseWheelEventTime = Date.now(),
        "deltaMode"in e && e.deltaMode === 0 && e.wheelDelta && (t = e.deltaY === 0 ? 0 : Math.abs(e.wheelDelta) / e.deltaY),
        t = -.3 < t && t < .3 ? t : (t > 0 ? 1 : -1) * Math.log(Math.abs(t) + 10) / o;
        var i = this.svg.getScreenCTM().inverse()
          , r = le.getEventPoint(e, this.svg).matrixTransform(i)
          , a = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * t);
        this.zoomAtPoint(a, r)
    }
}
;
G.prototype.zoomAtPoint = function(e, t, n) {
    var o = this.viewport.getOriginalState();
    n ? (e = Math.max(this.options.minZoom * o.zoom, Math.min(this.options.maxZoom * o.zoom, e)),
    e = e / this.getZoom()) : this.getZoom() * e < this.options.minZoom * o.zoom ? e = this.options.minZoom * o.zoom / this.getZoom() : this.getZoom() * e > this.options.maxZoom * o.zoom && (e = this.options.maxZoom * o.zoom / this.getZoom());
    var i = this.viewport.getCTM()
      , r = t.matrixTransform(i.inverse())
      , a = this.svg.createSVGMatrix().translate(r.x, r.y).scale(e).translate(-r.x, -r.y)
      , s = i.multiply(a);
    s.a !== i.a && this.viewport.setCTM(s)
}
;
G.prototype.zoom = function(e, t) {
    this.zoomAtPoint(e, le.getSvgCenterPoint(this.svg, this.width, this.height), t)
}
;
G.prototype.publicZoom = function(e, t) {
    t && (e = this.computeFromRelativeZoom(e)),
    this.zoom(e, t)
}
;
G.prototype.publicZoomAtPoint = function(e, t, n) {
    if (n && (e = this.computeFromRelativeZoom(e)),
    ye.getType(t) !== "SVGPoint")
        if ("x"in t && "y"in t)
            t = le.createSVGPoint(this.svg, t.x, t.y);
        else
            throw new Error("Given point is invalid");
    this.zoomAtPoint(e, t, n)
}
;
G.prototype.getZoom = function() {
    return this.viewport.getZoom()
}
;
G.prototype.getRelativeZoom = function() {
    return this.viewport.getRelativeZoom()
}
;
G.prototype.computeFromRelativeZoom = function(e) {
    return e * this.viewport.getOriginalState().zoom
}
;
G.prototype.resetZoom = function() {
    var e = this.viewport.getOriginalState();
    this.zoom(e.zoom, !0)
}
;
G.prototype.resetPan = function() {
    this.pan(this.viewport.getOriginalState())
}
;
G.prototype.reset = function() {
    this.resetZoom(),
    this.resetPan()
}
;
G.prototype.handleDblClick = function(e) {
    if (this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
    this.options.controlIconsEnabled) {
        var t = e.target.getAttribute("class") || "";
        if (t.indexOf("svg-pan-zoom-control") > -1)
            return !1
    }
    var n;
    e.shiftKey ? n = 1 / ((1 + this.options.zoomScaleSensitivity) * 2) : n = (1 + this.options.zoomScaleSensitivity) * 2;
    var o = le.getEventPoint(e, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
    this.zoomAtPoint(n, o)
}
;
G.prototype.handleMouseDown = function(e, t) {
    this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
    ye.mouseAndTouchNormalize(e, this.svg),
    this.options.dblClickZoomEnabled && ye.isDblClick(e, t) ? this.handleDblClick(e) : (this.state = "pan",
    this.firstEventCTM = this.viewport.getCTM(),
    this.stateOrigin = le.getEventPoint(e, this.svg).matrixTransform(this.firstEventCTM.inverse()))
}
;
G.prototype.handleMouseMove = function(e) {
    if (this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
    this.state === "pan" && this.options.panEnabled) {
        var t = le.getEventPoint(e, this.svg).matrixTransform(this.firstEventCTM.inverse())
          , n = this.firstEventCTM.translate(t.x - this.stateOrigin.x, t.y - this.stateOrigin.y);
        this.viewport.setCTM(n)
    }
}
;
G.prototype.handleMouseUp = function(e) {
    this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
    this.state === "pan" && (this.state = "none")
}
;
G.prototype.handleTouchStart = function(e, t) {
    if (e.touches.length == 1)
        this.handleMouseDown(e, t);
    else {
        this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
        this.firstEventCTM = this.viewport.getCTM();
        var n = le.getTouchPoint(e, this.svg, 0)
          , o = le.getTouchPoint(e, this.svg, 1);
        this.firstDistance = ye.calculateDistance(n, o),
        n.x = (n.x + o.x) / 2,
        n.y = (n.y + o.y) / 2,
        this.stateOrigin = n.matrixTransform(this.firstEventCTM.inverse()),
        this.firstZoomLevel = this.getZoom()
    }
}
;
G.prototype.handleTouchMove = function(e) {
    if (e.touches.length == 1)
        this.handleMouseMove(e);
    else {
        if (this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
        !this.options.panEnabled && !this.options.zoomEnabled)
            return;
        var t = le.getTouchPoint(e, this.svg, 0)
          , n = le.getTouchPoint(e, this.svg, 1)
          , o = this.svg.createSVGPoint();
        if (o.x = (t.x + n.x) / 2,
        o.y = (t.y + n.y) / 2,
        this.state === "pan" && this.options.panEnabled) {
            var i = o.matrixTransform(this.firstEventCTM.inverse())
              , r = this.firstEventCTM.translate(i.x - this.stateOrigin.x, i.y - this.stateOrigin.y);
            this.viewport.setCTM(r)
        }
        if (this.options.zoomEnabled) {
            var a = ye.calculateDistance(t, n)
              , s = a / this.firstDistance
              , l = this.svg.getScreenCTM().inverse()
              , u = o.matrixTransform(l);
            this.zoomAtPoint(this.firstZoomLevel * s, u, !0)
        }
    }
}
;
G.prototype.handleTouchEnd = function(e) {
    if (e.touches.length == 0)
        this.handleMouseUp(e);
    else if (this.options.preventMouseEventsDefault && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
    this.firstEventCTM = this.viewport.getCTM(),
    e.touches.length == 1)
        this.stateOrigin = le.getEventPoint(e, this.svg).matrixTransform(this.firstEventCTM.inverse());
    else {
        var t = le.getTouchPoint(e, this.svg, 0)
          , n = le.getTouchPoint(e, this.svg, 1);
        this.firstDistance = ye.calculateDistance(t, n),
        t.x = (t.x + n.x) / 2,
        t.y = (t.y + n.y) / 2,
        this.stateOrigin = t.matrixTransform(this.firstEventCTM.inverse())
    }
}
;
G.prototype.fit = function() {
    var e = this.viewport.getViewBox()
      , t = Math.min(this.width / e.width, this.height / e.height);
    this.zoom(t, !0)
}
;
G.prototype.contain = function() {
    var e = this.viewport.getViewBox()
      , t = Math.max(this.width / e.width, this.height / e.height);
    this.zoom(t, !0)
}
;
G.prototype.center = function() {
    var e = this.viewport.getViewBox()
      , t = (this.width - (e.width + e.x * 2) * this.getZoom()) * .5
      , n = (this.height - (e.height + e.y * 2) * this.getZoom()) * .5;
    this.getPublicInstance().pan({
        x: t,
        y: n
    })
}
;
G.prototype.updateBBox = function() {
    this.viewport.simpleViewBoxCache()
}
;
G.prototype.pan = function(e) {
    var t = this.viewport.getCTM();
    t.e = e.x,
    t.f = e.y,
    this.viewport.setCTM(t)
}
;
G.prototype.panBy = function(e) {
    var t = this.viewport.getCTM();
    t.e += e.x,
    t.f += e.y,
    this.viewport.setCTM(t)
}
;
G.prototype.getPan = function() {
    var e = this.viewport.getState();
    return {
        x: e.x,
        y: e.y
    }
}
;
G.prototype.resize = function() {
    var e = le.getBoundingClientRectNormalized(this.svg);
    this.width = e.width,
    this.height = e.height;
    var t = this.viewport;
    t.options.width = this.width,
    t.options.height = this.height,
    t.processCTM(),
    this.options.controlIconsEnabled && (this.getPublicInstance().disableControlIcons(),
    this.getPublicInstance().enableControlIcons())
}
;
G.prototype.destroy = function() {
    var e = this;
    this.beforeZoom = null,
    this.onZoom = null,
    this.beforePan = null,
    this.onPan = null,
    this.onUpdatedCTM = null,
    this.options.customEventsHandler != null && this.options.customEventsHandler.destroy({
        svgElement: this.svg,
        eventsListenerElement: this.options.eventsListenerElement,
        instance: this.getPublicInstance()
    });
    for (var t in this.eventListeners)
        (this.options.eventsListenerElement || this.svg).removeEventListener(t, this.eventListeners[t], this.options.preventMouseEventsDefault ? cr : ur);
    this.disableMouseWheelZoom(),
    this.getPublicInstance().disableControlIcons(),
    De = De.filter(function(n) {
        return n.svg !== e.svg
    }),
    delete this.options,
    delete this.viewport,
    delete this.publicInstance,
    delete this.pi,
    this.getPublicInstance = function() {
        return null
    }
}
;
G.prototype.getPublicInstance = function() {
    var e = this;
    return this.publicInstance || (this.publicInstance = this.pi = {
        enablePan: function() {
            return e.options.panEnabled = !0,
            e.pi
        },
        disablePan: function() {
            return e.options.panEnabled = !1,
            e.pi
        },
        isPanEnabled: function() {
            return !!e.options.panEnabled
        },
        pan: function(t) {
            return e.pan(t),
            e.pi
        },
        panBy: function(t) {
            return e.panBy(t),
            e.pi
        },
        getPan: function() {
            return e.getPan()
        },
        setBeforePan: function(t) {
            return e.options.beforePan = t === null ? null : ye.proxy(t, e.publicInstance),
            e.pi
        },
        setOnPan: function(t) {
            return e.options.onPan = t === null ? null : ye.proxy(t, e.publicInstance),
            e.pi
        },
        enableZoom: function() {
            return e.options.zoomEnabled = !0,
            e.pi
        },
        disableZoom: function() {
            return e.options.zoomEnabled = !1,
            e.pi
        },
        isZoomEnabled: function() {
            return !!e.options.zoomEnabled
        },
        enableControlIcons: function() {
            return e.options.controlIconsEnabled || (e.options.controlIconsEnabled = !0,
            An.enable(e)),
            e.pi
        },
        disableControlIcons: function() {
            return e.options.controlIconsEnabled && (e.options.controlIconsEnabled = !1,
            An.disable(e)),
            e.pi
        },
        isControlIconsEnabled: function() {
            return !!e.options.controlIconsEnabled
        },
        enableDblClickZoom: function() {
            return e.options.dblClickZoomEnabled = !0,
            e.pi
        },
        disableDblClickZoom: function() {
            return e.options.dblClickZoomEnabled = !1,
            e.pi
        },
        isDblClickZoomEnabled: function() {
            return !!e.options.dblClickZoomEnabled
        },
        enableMouseWheelZoom: function() {
            return e.enableMouseWheelZoom(),
            e.pi
        },
        disableMouseWheelZoom: function() {
            return e.disableMouseWheelZoom(),
            e.pi
        },
        isMouseWheelZoomEnabled: function() {
            return !!e.options.mouseWheelZoomEnabled
        },
        setZoomScaleSensitivity: function(t) {
            return e.options.zoomScaleSensitivity = t,
            e.pi
        },
        setMinZoom: function(t) {
            return e.options.minZoom = t,
            e.pi
        },
        setMaxZoom: function(t) {
            return e.options.maxZoom = t,
            e.pi
        },
        setBeforeZoom: function(t) {
            return e.options.beforeZoom = t === null ? null : ye.proxy(t, e.publicInstance),
            e.pi
        },
        setOnZoom: function(t) {
            return e.options.onZoom = t === null ? null : ye.proxy(t, e.publicInstance),
            e.pi
        },
        zoom: function(t) {
            return e.publicZoom(t, !0),
            e.pi
        },
        zoomBy: function(t) {
            return e.publicZoom(t, !1),
            e.pi
        },
        zoomAtPoint: function(t, n) {
            return e.publicZoomAtPoint(t, n, !0),
            e.pi
        },
        zoomAtPointBy: function(t, n) {
            return e.publicZoomAtPoint(t, n, !1),
            e.pi
        },
        zoomIn: function() {
            return this.zoomBy(1 + e.options.zoomScaleSensitivity),
            e.pi
        },
        zoomOut: function() {
            return this.zoomBy(1 / (1 + e.options.zoomScaleSensitivity)),
            e.pi
        },
        getZoom: function() {
            return e.getRelativeZoom()
        },
        setOnUpdatedCTM: function(t) {
            return e.options.onUpdatedCTM = t === null ? null : ye.proxy(t, e.publicInstance),
            e.pi
        },
        resetZoom: function() {
            return e.resetZoom(),
            e.pi
        },
        resetPan: function() {
            return e.resetPan(),
            e.pi
        },
        reset: function() {
            return e.reset(),
            e.pi
        },
        fit: function() {
            return e.fit(),
            e.pi
        },
        contain: function() {
            return e.contain(),
            e.pi
        },
        center: function() {
            return e.center(),
            e.pi
        },
        updateBBox: function() {
            return e.updateBBox(),
            e.pi
        },
        resize: function() {
            return e.resize(),
            e.pi
        },
        getSizes: function() {
            return {
                width: e.width,
                height: e.height,
                realZoom: e.getZoom(),
                viewBox: e.viewport.getViewBox()
            }
        },
        destroy: function() {
            return e.destroy(),
            e.pi
        }
    }),
    this.publicInstance
}
;
var De = []
  , zd = function(e, t) {
    var n = ye.getSvg(e);
    if (n === null)
        return null;
    for (var o = De.length - 1; o >= 0; o--)
        if (De[o].svg === n)
            return De[o].instance.getPublicInstance();
    return De.push({
        svg: n,
        instance: new G(n,t)
    }),
    De[De.length - 1].instance.getPublicInstance()
}
  , Id = zd;
const Cd = Ed(Id)
  , Ad = {
    getViewArea() {
        const e = this.getSizes()
          , t = this.getPan()
          , n = e.realZoom;
        t.x /= n,
        t.y /= n;
        const o = {
            width: e.width / n,
            height: e.height / n
        };
        return {
            box: {
                top: -t.y,
                bottom: o.height - t.y,
                left: -t.x,
                right: o.width - t.x
            },
            center: {
                x: o.width / 2 - t.x,
                y: o.height / 2 - t.y
            }
        }
    },
    getViewBox() {
        return this.getViewArea().box
    },
    setViewBox(e) {
        const t = e.right - e.left
          , n = e.bottom - e.top
          , {width: o, height: i} = this.getSizes()
          , r = t / n
          , a = o / i
          , s = r < a ? n * a : t
          , l = r > a ? t / a : n
          , u = Math.min(o / s, i / l)
          , c = this.getRealZoom()
          , v = this.getZoom()
          , h = c / v;
        this.zoom(u / h);
        const d = {
            x: (e.left + t / 2) * u,
            y: (e.top + n / 2) * u
        };
        this.pan({
            x: -d.x + s / 2 * u,
            y: -d.y + l / 2 * u
        })
    },
    getRealZoom() {
        return this.getSizes().realZoom
    },
    applyAbsoluteZoomLevel(e, t, n) {
        const o = Math.max(1e-4, t)
          , i = Math.max(o, n)
          , r = Math.max(Math.min(i, e), o)
          , a = this.getRealZoom()
          , s = this.getZoom()
          , l = a / s;
        this.setMinZoom(o / l).setMaxZoom(i / l).zoom(r / l)
    },
    isPanEnabled() {
        return this._isPanEnabled
    },
    enablePan() {
        return this._isPanEnabled = !0,
        this._internalEnablePan(),
        this
    },
    disablePan() {
        return this._isPanEnabled = !1,
        this._internalDisablePan(),
        this
    },
    isZoomEnabled() {
        return this._isZoomEnabled
    },
    enableZoom() {
        return this._isZoomEnabled = !0,
        this._internalEnableZoom(),
        this
    },
    disableZoom() {
        return this._isZoomEnabled = !1,
        this._internalDisableZoom(),
        this
    },
    setPanEnabled(e) {
        return e ? this.enablePan() : this.disablePan(),
        this
    },
    setZoomEnabled(e) {
        return e ? (this.enableZoom(),
        this.enableDblClickZoom()) : (this.disableZoom(),
        this.disableDblClickZoom()),
        this
    }
};
function Nd(e, t) {
    var n, o;
    const i = e;
    return i._isPanEnabled = (n = t.panEnabled) != null ? n : !0,
    i._isZoomEnabled = (o = t == null ? void 0 : t.zoomEnabled) != null ? o : !0,
    i._internalIsPanEnabled = i.isPanEnabled,
    i._internalEnablePan = i.enablePan,
    i._internalDisablePan = i.disablePan,
    i._internalIsZoomEnabled = i.isZoomEnabled,
    i._internalEnableZoom = i.enableZoom,
    i._internalDisableZoom = i.disableZoom,
    Object.assign(e, Ad),
    i
}
function $d(e, t) {
    var n, o, i, r, a, s;
    const l = (o = (n = t.customEventsHandler) == null ? void 0 : n.init) != null ? o : v => {}
      , u = (r = (i = t.customEventsHandler) == null ? void 0 : i.destroy) != null ? r : v => {}
      , c = (s = (a = t.customEventsHandler) == null ? void 0 : a.haltEventListeners) != null ? s : [];
    return t.mouseWheelZoomEnabled === void 0 && (t.mouseWheelZoomEnabled = t.zoomEnabled),
    t.customEventsHandler = {
        init: v => {
            Nd(v.instance, t),
            l(v)
        }
        ,
        destroy: v => u(v),
        haltEventListeners: c
    },
    Cd(e, t)
}
function jd(e, t) {
    const n = R();
    let o = 0;
    const i = []
      , r = []
      , a = () => {
        o = 1,
        i.forEach(l => l()),
        i.length = 0
    }
      , s = () => {
        o = 2,
        r.forEach(l => l()),
        r.length = 0
    }
    ;
    return ft( () => {
        var l, u, c, v, h, d;
        const x = X(e.value, "<svg>")
          , m = (u = (l = t.customEventsHandler) == null ? void 0 : l.init) != null ? u : E => {}
          , p = (v = (c = t.customEventsHandler) == null ? void 0 : c.destroy) != null ? v : E => {}
          , f = (d = (h = t.customEventsHandler) == null ? void 0 : h.haltEventListeners) != null ? d : [];
        t.customEventsHandler = {
            init: E => {
                n.value = E.instance,
                m(E),
                a()
            }
            ,
            destroy: E => {
                s(),
                p(E)
            }
            ,
            haltEventListeners: f
        };
        const g = () => {
            const E = x.getBoundingClientRect();
            E.width !== 0 && E.height !== 0 ? $d(x, t) : setTimeout(g, 200)
        }
        ;
        g()
    }
    ),
    It( () => {
        var l;
        (l = n.value) == null || l.destroy(),
        n.value = void 0
    }
    ),
    {
        svgPanZoom: n,
        onSvgPanZoomMounted: l => {
            o === 0 ? i.push(l) : o === 1 && l()
        }
        ,
        onSvgPanZoomUnmounted: l => {
            o === 0 || o === 1 ? r.push(l) : l()
        }
    }
}
const dr = Symbol("zoomLevel");
function Ld(e, t) {
    const n = T( () => t.scalingObjects ? 1 : 1 / e.value);
    return Ue(dr, {
        zoomLevel: e,
        scale: n
    }),
    {
        scale: n
    }
}
function Ee() {
    return X(Ge(dr), "zoomLevel")
}
function Dd(e) {
    return e instanceof Promise || e && typeof e.then == "function"
}
function Zd() {
    let e = null;
    const t = R({
        enabled: !1,
        duration: 300,
        timingFunction: "linear"
    });
    function n(o, i=300, r="linear") {
        e && (clearTimeout(e),
        e = null),
        t.value = {
            enabled: !0,
            duration: i,
            timingFunction: r
        },
        Ln( () => _e(this, null, function*() {
            const a = o();
            Dd(a) && (yield a),
            e && clearTimeout(e),
            e = window == null ? void 0 : window.setTimeout( () => {
                t.value.enabled = !1,
                e = null
            }
            , i)
        }))
    }
    return {
        transitionWhile: n,
        transitionOption: t
    }
}
function Bd(e) {
    const t = R({})
      , n = R(!1);
    let o = 1;
    const i = new Map;
    return ke( () => {
        if (e.value instanceof Array) {
            const r = new Set([]);
            if (t.value = Object.fromEntries(e.value.map(a => {
                let s = a.id;
                return s || (n.value || (n.value = !0,
                console.warn("[v-network-graph] Please specify the `id` field for the `Path` object. Currently, this works for compatibility, but in the future, the id field will be required.")),
                s = i.get(a),
                s || (s = "path-" + o++,
                i.set(a, s))),
                r.add(s),
                [s, a]
            }
            )),
            n.value)
                for (const [a,s] of Array.from(i.entries()))
                    r.has(s) || i.delete(a)
        } else
            t.value = e.value
    }
    ),
    {
        objects: t,
        isInCompatibilityModeForPath: n
    }
}
function Rd(e, t, n, o) {
    if (o) {
        const r = R(o(e[t]))
          , a = s => {
            Be(s, r.value) || (r.value = s),
            Be(s, e[t]) || n(`update:${t}`, s)
        }
        ;
        return F( () => o(r.value), a),
        F( () => e[t], s => a(o(s))),
        r.value !== e[t] && n(`update:${t}`, r.value),
        r
    }
    const i = R(e[t]);
    return F( () => e[t], r => {
        Be(r, i.value) || (i.value = r)
    }
    ),
    F(i, r => {
        Be(r, e[t]) || n(`update:${t}`, r)
    }
    ),
    i
}
function xn(e, t, n, o) {
    const i = $e(new Set);
    return F( () => e[t], () => {
        const r = e[t].filter(a => a in n.value);
        Be(r, Array.from(i)) || (i.clear(),
        r.forEach(i.add, i))
    }
    , {
        deep: !0,
        immediate: !0
    }),
    F(i, () => {
        const r = Array.from(i);
        Be(e[t], r) || o(`update:${t}`, r)
    }
    ),
    Ze(i)
}
const hr = Symbol("selection");
function Wd(e, t, n) {
    Ue(hr, {
        selectedNodes: e,
        selectedEdges: t,
        selectedPaths: n
    })
}
function Hd() {
    return X(Ge(hr), "Selections")
}
const fr = Symbol("layouts");
function Vd(e) {
    Ue(fr, e)
}
function io() {
    return X(Ge(fr), "Layouts")
}
function Fd(e, t) {
    for (let n = 0; n < e.length - 1; n++)
        t(e[n], e[n + 1])
}
function yt(e, t) {
    const n = e.indexOf(t);
    n >= 0 && e.splice(n, 1)
}
function Ud(e, t, n) {
    const o = e.indexOf(t);
    o < 0 || e.splice(o + 1, 0, n)
}
function Gd(e, t) {
    const n = ["edges", "edge-labels", "focusring", "nodes", "node-labels", "paths"];
    return T( () => {
        const o = rc(e.view.builtInLayerOrder).filter(r => {
            const a = n.includes(r);
            return a || console.warn(`Layer ${r} is not a built-in layer.`),
            a
        }
        ).reverse()
          , i = [...n];
        return Fd(o, (r, a) => {
            yt(i, a),
            Ud(i, r, a)
        }
        ),
        "edge-label"in t || "edges-label"in t || yt(i, "edge-labels"),
        e.node.focusring.visible || yt(i, "focusring"),
        e.node.label.visible === !1 && yt(i, "node-labels"),
        e.path.visible || yt(i, "paths"),
        i
    }
    )
}
const si = () => new Promise(e => Ln(e));
function Xd(e, t) {
    const n = Math.max(e.width, e.height, t.width, t.height) / 1e4;
    return Math.abs(e.x - t.x) < n && Math.abs(e.y - t.y) < n && Math.abs(e.width - t.width) < n && Math.abs(e.height - t.height) < n
}
function qd(e, t) {
    return {
        top: e.top + t.top,
        left: e.left + t.left,
        right: e.right + t.right,
        bottom: e.bottom + t.bottom
    }
}
function Yd(e, t) {
    return {
        top: e.top * t,
        left: e.left * t,
        right: e.right * t,
        bottom: e.bottom * t
    }
}
function Kd(e, t) {
    return {
        top: e.top / t,
        left: e.left / t,
        right: e.right / t,
        bottom: e.bottom / t
    }
}
function vr(e) {
    return {
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}
function pr(e) {
    return {
        x: e.left,
        y: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top
    }
}
function Qd(e, t) {
    return {
        top: Math.min(e.top, t.top),
        left: Math.min(e.left, t.left),
        right: Math.max(e.right, t.right),
        bottom: Math.max(e.bottom, t.bottom)
    }
}
const Jd = new RegExp("^\\d+$");
function eh(e, t) {
    let n = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    if (typeof e == "string") {
        const o = st(e, t.width)
          , i = st(e, t.height);
        o === void 0 || i === void 0 ? console.warn("Invalid `fitContentMargin` value.", e) : n = {
            top: i,
            left: o,
            right: o,
            bottom: i
        }
    } else if (typeof e == "number") {
        const o = e;
        n = {
            top: o,
            left: o,
            right: o,
            bottom: o
        }
    } else {
        if (e.top) {
            const o = st(e.top, t.height);
            o === void 0 ? console.warn("Invalid `fitContentMargin` value.", e.top) : n.top = o
        }
        if (e.left) {
            const o = st(e.left, t.width);
            o === void 0 ? console.warn("Invalid `fitContentMargin` value.", e.left) : n.left = o
        }
        if (e.right) {
            const o = st(e.right, t.width);
            o === void 0 ? console.warn("Invalid `fitContentMargin` value.", e.right) : n.right = o
        }
        if (e.bottom) {
            const o = st(e.bottom, t.height);
            o === void 0 ? console.warn("Invalid `fitContentMargin` value.", e.bottom) : n.bottom = o
        }
    }
    return n
}
function th(e, t, n, o, i, r) {
    const a = e.getBBox();
    if (r)
        return oh(a, t, n, i);
    {
        const s = nh(e);
        return ih(a, s, t, n, o, i)
    }
}
function st(e, t) {
    if (typeof e == "string") {
        if (e.endsWith("%")) {
            const n = parseInt(e.toString());
            if (Number.isFinite(n))
                return t * (n / 100)
        } else if (e.endsWith("px") || Jd.test(e)) {
            const n = parseInt(e.toString());
            if (Number.isFinite(n))
                return n
        }
    } else if (typeof e == "number")
        return e
}
function nh(e) {
    return Array.from(e.querySelectorAll(".v-ng-graph-objects")).map(t => t.getBBox()).reduce( (t, n, o) => {
        if (o === 0)
            return n;
        const i = Math.min(t.x, n.x)
          , r = Math.min(t.y, n.y);
        return {
            x: i,
            y: r,
            width: Math.max(t.x + t.width - i, n.x + n.width - i),
            height: Math.max(t.y + t.height - r, n.y + n.height - r)
        }
    }
    , {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    })
}
function oh(e, t, n, o) {
    if (Object.keys(n).length <= 1)
        return;
    const i = gr(e, t, o);
    if (i > 0) {
        const r = vr(e);
        return {
            zoom: i,
            pos: mr(r, i, t, o)
        }
    } else
        return
}
function ih(e, t, n, o, i, r) {
    if (Object.keys(o).length <= 1)
        return;
    const a = $c(o)
      , s = {
        top: (a.top - t.y) * i,
        left: (a.left - t.x) * i,
        right: (t.x + t.width - a.right) * i,
        bottom: (t.y + t.height - a.bottom) * i
    };
    let l = gr(e, n, r);
    if (l === 0)
        return;
    const u = Xt(n, qd(r, s));
    if (u.width <= 0 || u.height <= 0)
        return;
    const c = vr(e)
      , v = Xt(n, r)
      , h = Xd(e, t);
    let d = 0
      , x = 0
      , m = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };
    do {
        x = l;
        const p = Kd(s, l)
          , f = {
            top: a.top - p.top,
            left: a.left - p.left,
            right: a.right + p.right,
            bottom: a.bottom + p.bottom
        };
        m = h ? f : Qd(c, f);
        const g = pr(m)
          , E = [v.width / g.width, v.height / g.height].filter(w => w > 0);
        if (E.length === 0)
            return;
        l = Math.min(...E),
        d++
    } while (Math.abs(x - l) > 1e-6 && d < 10);
    return {
        zoom: l,
        pos: mr(m, l, n, r)
    }
}
function gr(e, t, n) {
    if (e.width === 0 || e.height === 0)
        return 0;
    const o = Xt(t, n);
    if (o.width <= 0 || o.height <= 0)
        return 0;
    const i = [o.width / e.width, o.height / e.height];
    return Math.min(...i)
}
function mr(e, t, n, o) {
    const i = Xt(n, o)
      , r = pr(Yd(e, t))
      , a = (i.width - r.width) / 2
      , s = (i.height - r.height) / 2
      , l = r.x - o.left
      , u = r.y - o.top;
    return {
        x: -l + a,
        y: -u + s
    }
}
function Xt(e, t) {
    const n = t.left + t.right
      , o = t.top + t.bottom;
    return {
        width: e.width - n,
        height: e.height - o
    }
}
const rh = ["x", "y", "width", "height", "fill", "stroke", "stroke-width", "stroke-dasharray"]
  , ah = U({
    __name: "VSelectionBox",
    props: {
        box: null,
        config: null
    },
    setup(e) {
        return (t, n) => (_(),
        A("rect", {
            class: "v-ng-selection-box",
            x: Math.round(e.box.pos.x),
            y: Math.round(e.box.pos.y),
            width: Math.ceil(e.box.size.width),
            height: Math.ceil(e.box.size.height),
            fill: e.config.color,
            stroke: e.config.strokeColor,
            "stroke-width": e.config.strokeWidth,
            "stroke-dasharray": e.config.strokeDasharray
        }, null, 8, rh))
    }
})
  , sh = ["points", "fill"]
  , lh = U({
    __name: "VMarkerHeadArrow",
    props: {
        width: null,
        height: null,
        refX: null,
        color: null,
        isSource: {
            type: Boolean
        },
        units: null
    },
    setup(e) {
        const t = e
          , n = T( () => {
            const o = t.width
              , i = t.height;
            return t.isSource ? `${o} ${i}, 0 ${i / 2}, ${o} 0` : `0 0, ${o} ${i / 2}, 0 ${i}`
        }
        );
        return (o, i) => (_(),
        A("polygon", {
            points: S(n),
            fill: e.color
        }, null, 8, sh))
    }
})
  , uh = ["points", "stroke-width", "stroke"]
  , ch = U({
    __name: "VMarkerHeadAngle",
    props: {
        width: null,
        height: null,
        refX: null,
        color: null,
        isSource: {
            type: Boolean
        },
        units: null
    },
    setup(e) {
        const t = e
          , n = T( () => t.units === "strokeWidth" ? 1 : Math.min(t.width, t.height) / 5)
          , o = T( () => {
            const i = n.value / 2
              , r = t.width
              , a = t.height;
            return t.isSource ? `${r - i} ${a - i}, ${i} ${a / 2}, ${r - i} ${i}` : `${i} ${i}, ${r - i} ${a / 2}, ${i} ${a - i}`
        }
        );
        return (i, r) => (_(),
        A("polyline", {
            points: S(o),
            fill: "none",
            "stroke-width": S(n),
            stroke: e.color,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, null, 8, uh))
    }
})
  , dh = ["fill", "cx", "cy", "rx", "ry"]
  , hh = U({
    __name: "VMarkerHeadCircle",
    props: {
        width: null,
        height: null,
        refX: null,
        color: null,
        isSource: {
            type: Boolean
        },
        units: null
    },
    setup(e) {
        return (t, n) => (_(),
        A("ellipse", {
            fill: e.color,
            cx: e.width / 2,
            cy: e.height / 2,
            rx: e.width / 2,
            ry: e.height / 2
        }, null, 8, dh))
    }
})
  , fh = ["id", "markerWidth", "markerHeight", "refX", "refY", "markerUnits"]
  , vh = U({
    __name: "VMarkerHead",
    props: {
        id: null,
        marker: null,
        scale: null
    },
    setup(e) {
        const t = e
          , n = {
            arrow: lh,
            angle: ch,
            circle: hh
        }
          , o = T( () => t.marker.width * (t.marker.units === "strokeWidth" ? 1 : t.scale))
          , i = T( () => t.marker.height * (t.marker.units === "strokeWidth" ? 1 : t.scale))
          , r = T( () => {
            const s = t.marker.margin * (t.marker.units === "strokeWidth" ? 1 : t.scale);
            return t.marker.isSource ? o.value + s : -s
        }
        )
          , a = T( () => {
            const s = t.marker.offset * (t.marker.units === "strokeWidth" ? 1 : t.scale);
            return t.marker.isSource ? s : -s
        }
        );
        return (s, l) => e.marker.type !== "none" && e.marker.type !== "custom" ? (_(),
        A("marker", {
            key: 0,
            id: e.id,
            markerWidth: S(o),
            markerHeight: S(i),
            refX: S(r),
            refY: S(i) / 2 + S(a),
            orient: "auto",
            markerUnits: e.marker.units,
            class: "v-ng-marker"
        }, [(_(),
        V(Jr(n[e.marker.type]), {
            width: S(o),
            height: S(i),
            refX: S(r),
            color: e.marker.color,
            "is-source": e.marker.isSource,
            units: e.marker.units
        }, null, 8, ["width", "height", "refX", "color", "is-source", "units"]))], 8, fh)) : pe("", !0)
    }
})
  , ph = {
    class: "v-ng-background-grid",
    "shape-rendering": "crispEdges"
}
  , gh = ["d"]
  , mh = ["d"]
  , yh = ["d"]
  , bh = ["d"]
  , wh = U({
    __name: "VBackgroundGrid",
    setup(e) {
        const {container: t, svgPanZoom: n} = Un()
          , {zoomLevel: o} = Ee()
          , i = xd()
          , r = yc()
          , a = R({
            x: 0,
            y: 0
        })
          , s = R({
            width: 500,
            height: 500
        });
        ft( () => {
            var h;
            const d = (h = n.value) == null ? void 0 : h.getPan();
            d && (a.value = {
                x: -d.x,
                y: -d.y
            });
            const x = t.value.getBoundingClientRect();
            s.value = {
                width: x.width,
                height: x.height
            }
        }
        ),
        i.on("view:resize", h => {
            s.value = {
                width: h.width,
                height: h.height
            }
        }
        ),
        i.on("view:pan", h => {
            a.value = {
                x: -h.x,
                y: -h.y
            }
        }
        ),
        i.on("view:zoom", () => {
            var h;
            const d = (h = n.value) == null ? void 0 : h.getPan();
            d && (a.value = {
                x: -d.x,
                y: -d.y
            })
        }
        );
        const l = R([])
          , u = R([])
          , c = R([])
          , v = R([]);
        return ke( () => {
            const h = []
              , d = []
              , x = []
              , m = []
              , p = 1 / o.value
              , f = r.grid.interval
              , g = a.value.x * p
              , E = a.value.y * p
              , w = Math.floor(s.value.width / f + 1) * f
              , y = Math.floor(s.value.height / f + 1) * f
              , b = (a.value.x + w) * p
              , k = (a.value.y + y) * p
              , M = r.grid.thickIncrements
              , z = r.grid.line.dasharray
              , O = r.grid.thick.dasharray;
            let I = {
                stroke: r.grid.thick.color,
                "stroke-width": r.grid.thick.width,
                "stroke-dasharray": O,
                "stroke-dashoffset": O ? g / p : void 0
            }
              , N = {
                stroke: r.grid.line.color,
                "stroke-width": r.grid.line.width,
                "stroke-dasharray": z,
                "stroke-dashoffset": z ? g / p : void 0
            };
            const D = (a.value.x + w) * p;
            for (let Z = E; Z <= k; Z += f) {
                const W = Math.floor(Z / f);
                M && W % M === 0 ? h.push([W, W * f, g, D, I]) : x.push([W, W * f, g, D, N])
            }
            I = ce({}, I),
            I["stroke-dashoffset"] = O ? E / p : void 0,
            N = ce({}, N),
            N["stroke-dashoffset"] = z ? E / p : void 0;
            const Y = (a.value.y + y) * p;
            for (let Z = g; Z <= b; Z += f) {
                const W = Math.floor(Z / f);
                M && W % M === 0 ? d.push([W, W * f, E, Y, I]) : m.push([W, W * f, E, Y, N])
            }
            u.value = h,
            l.value = d,
            v.value = x,
            c.value = m
        }
        ),
        (h, d) => (_(),
        A("g", ph, [(_(!0),
        A(q, null, te(v.value, ([x,m,p,f,g]) => (_(),
        A("path", Te({
            key: `nv${x}`,
            d: `M ${p} ${m} L ${f} ${m}`
        }, g, {
            style: {
                "vector-effect": "non-scaling-stroke"
            }
        }), null, 16, gh))), 128)), (_(!0),
        A(q, null, te(c.value, ([x,m,p,f,g]) => (_(),
        A("path", Te({
            key: `nh${x}`,
            d: `M ${m} ${p} L ${m} ${f}`
        }, g, {
            style: {
                "vector-effect": "non-scaling-stroke"
            }
        }), null, 16, mh))), 128)), (_(!0),
        A(q, null, te(u.value, ([x,m,p,f,g]) => (_(),
        A("path", Te({
            key: `tv${x}`,
            d: `M ${p} ${m} L ${f} ${m}`
        }, g, {
            style: {
                "vector-effect": "non-scaling-stroke"
            }
        }), null, 16, yh))), 128)), (_(!0),
        A(q, null, te(l.value, ([x,m,p,f,g]) => (_(),
        A("path", Te({
            key: `th${x}`,
            d: `M ${m} ${p} L ${m} ${f}`
        }, g, {
            style: {
                "vector-effect": "non-scaling-stroke"
            }
        }), null, 16, bh))), 128))]))
    }
})
  , xh = U({
    __name: "VBackgroundViewport",
    setup(e) {
        const {viewport: t} = Un()
          , n = R()
          , o = (r, a, s) => {
            r.forEach(l => {
                var u;
                return a.setAttribute(l, (u = s.getAttribute(l)) != null ? u : "")
            }
            )
        }
          , i = new MutationObserver(r => {
            if (!n.value)
                return;
            const a = r.map(s => {
                var l;
                return (l = s.attributeName) != null ? l : ""
            }
            ).filter(Boolean);
            o(a, n.value, t.value)
        }
        );
        return ft( () => {
            const r = ["transform", "style"];
            i.observe(t.value, {
                attributes: !0,
                attributeFilter: r
            }),
            n.value && o(r, n.value, t.value)
        }
        ),
        It( () => {
            i.disconnect()
        }
        ),
        (r, a) => (_(),
        A("g", {
            ref_key: "background",
            ref: n,
            class: "v-ng-background-viewport"
        }, [K(r.$slots, "default")], 512))
    }
})
  , Eh = ["d", "stroke-width"]
  , Sh = U({
    __name: "VEdgeBackground",
    props: {
        id: null,
        state: null,
        sourcePos: {
            default: void 0
        },
        targetPos: {
            default: void 0
        }
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = rn()
          , {handleEdgePointerDownEvent: i, handleEdgePointerOverEvent: r, handleEdgePointerOutEvent: a, handleEdgeClickEvent: s, handleEdgeDoubleClickEvent: l, handleEdgeContextMenu: u} = Nt()
          , c = T( () => {
            const h = t.state.position;
            if (t.state.loop) {
                const {radius: d, isLargeArc: x, isClockwise: m} = t.state.loop
                  , [p,f] = d
                  , g = x ? 1 : 0
                  , E = m ? 1 : 0;
                return `M ${h.p1.x} ${h.p1.y} A ${p} ${f} 0 ${g} ${E} ${h.p2.x} ${h.p2.y}`
            } else {
                if (o.type === "straight" || !t.state.curve)
                    return `M ${h.p1.x} ${h.p1.y} L ${h.p2.x} ${h.p2.y}`;
                {
                    const d = [...t.state.curve.control, {
                        x: h.p2.x,
                        y: h.p2.y
                    }]
                      , x = [];
                    return x.push(`M ${h.p1.x} ${h.p1.y}`),
                    Wn(d, 2).forEach( ([m,p]) => x.push(`Q ${m.x} ${m.y} ${p.x} ${p.y}`)),
                    x.join(" ")
                }
            }
        }
        )
          , v = T( () => (t.state.line.stroke.width + 10) * n.value);
        return (h, d) => (_(),
        A("path", {
            class: we({
                "v-ng-line-background": !0,
                selectable: e.state.selectable
            }),
            d: S(c),
            stroke: "transparent",
            "stroke-width": S(v),
            fill: "none",
            onPointerdown: d[0] || (d[0] = Me(x => S(i)(e.id, x), ["stop"])),
            onPointerenterPassive: d[1] || (d[1] = x => S(r)(e.id, x)),
            onPointerleavePassive: d[2] || (d[2] = x => S(a)(e.id, x)),
            onClick: d[3] || (d[3] = Me(x => S(s)(e.id, x), ["stop"])),
            onDblclick: d[4] || (d[4] = Me(x => S(l)(e.id, x), ["stop"])),
            onContextmenu: d[5] || (d[5] = x => S(u)(e.id, x))
        }, null, 42, Eh))
    }
})
  , kh = U({
    __name: "VEdgeBackgrounds",
    setup(e) {
        const {edgeStates: t, edgeGroupStates: n, layouts: o} = Ie();
        return (i, r) => (_(!0),
        A(q, null, te(S(n).edgeGroups, ({summarize: a, edges: s}) => (_(),
        A(q, null, [a ? pe("", !0) : (_(!0),
        A(q, {
            key: 0
        }, te(s, (l, u) => (_(),
        V(Sh, {
            key: u,
            id: u,
            state: S(t)[u],
            "source-pos": S(o).nodes[l.source],
            "target-pos": S(o).nodes[l.target]
        }, null, 8, ["id", "state", "source-pos", "target-pos"]))), 128))], 64))), 256))
    }
})
  , Ph = ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-linecap"]
  , yr = U({
    __name: "VLine",
    props: {
        p1: null,
        p2: null,
        config: null
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = T( () => t.config.width * n.value)
          , i = T( () => At(t.config.dasharray, n.value))
          , r = T( () => {
            const a = t.config.animate ? tn(t.config.dasharray) * t.config.animationSpeed * n.value : !1;
            return a ? {
                "--animation-speed": a
            } : void 0
        }
        );
        return (a, s) => (_(),
        A("path", {
            class: we({
                "v-ng-line": !0,
                animate: e.config.animate
            }),
            d: `M ${e.p1.x} ${e.p1.y} L ${e.p2.x} ${e.p2.y}`,
            stroke: e.config.color,
            "stroke-width": S(o),
            "stroke-dasharray": S(i),
            "stroke-linecap": e.config.linecap,
            style: zt(S(r))
        }, null, 14, Ph))
    }
})
  , Mh = ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-linecap"]
  , _h = U({
    __name: "VArc",
    props: {
        p1: null,
        p2: null,
        radius: null,
        isLargeArc: {
            type: Boolean
        },
        isClockwise: {
            type: Boolean
        },
        config: null
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = T( () => t.config.width * n.value)
          , i = T( () => At(t.config.dasharray, n.value))
          , r = T( () => {
            const s = t.config.animate ? tn(t.config.dasharray) * t.config.animationSpeed * n.value : !1;
            return s ? {
                "--animation-speed": s
            } : void 0
        }
        )
          , a = T( () => {
            const {p1: s, p2: l, radius: u, isLargeArc: c, isClockwise: v} = t
              , [h,d] = u
              , x = c ? 1 : 0
              , m = v ? 1 : 0;
            return `M ${s.x} ${s.y} A ${h} ${d} 0 ${x} ${m} ${l.x} ${l.y}`
        }
        );
        return (s, l) => (_(),
        A("path", {
            class: we({
                "v-ng-line": !0,
                animate: e.config.animate
            }),
            d: S(a),
            stroke: e.config.color,
            "stroke-width": S(o),
            "stroke-dasharray": S(i),
            "stroke-linecap": e.config.linecap,
            style: zt(S(r)),
            fill: "none"
        }, null, 14, Mh))
    }
})
  , Oh = ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-linecap", "marker-start", "marker-end"]
  , Th = U({
    __name: "VEdgeCurved",
    props: {
        state: null,
        config: null,
        markerStart: {
            default: void 0
        },
        markerEnd: {
            default: void 0
        }
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = T( () => {
            var s, l;
            const u = t.state.position
              , c = [...(l = (s = t.state.curve) == null ? void 0 : s.control) != null ? l : [], {
                x: u.p2.x,
                y: u.p2.y
            }]
              , v = [];
            return v.push(`M ${u.p1.x} ${u.p1.y}`),
            Wn(c, 2).forEach( ([h,d]) => v.push(`Q ${h.x} ${h.y} ${d.x} ${d.y}`)),
            v.join(" ")
        }
        )
          , i = T( () => t.config.width * n.value)
          , r = T( () => At(t.config.dasharray, n.value))
          , a = T( () => {
            const s = t.config.animate ? tn(t.config.dasharray) * t.config.animationSpeed * n.value : !1;
            return s ? {
                "--animation-speed": s
            } : void 0
        }
        );
        return (s, l) => (_(),
        A("path", {
            class: we({
                "v-ng-line": !0,
                animate: e.config.animate
            }),
            d: S(o),
            fill: "none",
            stroke: e.config.color,
            "stroke-width": S(i),
            "stroke-dasharray": S(r),
            "stroke-linecap": e.config.linecap,
            style: zt(S(a)),
            "marker-start": e.markerStart,
            "marker-end": e.markerEnd
        }, null, 14, Oh))
    }
})
  , zh = U({
    __name: "VEdge",
    props: {
        id: null,
        state: null,
        sourcePos: {
            default: void 0
        },
        targetPos: {
            default: void 0
        }
    },
    setup(e) {
        const t = rn();
        return (n, o) => e.state.loop ? (_(),
        V(_h, Te({
            key: 0
        }, e.state.position, {
            radius: e.state.loop.radius,
            "is-large-arc": e.state.loop.isLargeArc,
            "is-clockwise": e.state.loop.isClockwise,
            class: [{
                selectable: e.state.selectable,
                hover: e.state.hovered,
                selected: e.state.selected
            }, "v-ng-edge"],
            config: e.state.line.stroke,
            "marker-start": e.state.sourceMarkerId ? `url('#${e.state.sourceMarkerId}')` : void 0,
            "marker-end": e.state.targetMarkerId ? `url('#${e.state.targetMarkerId}')` : void 0
        }), null, 16, ["radius", "is-large-arc", "is-clockwise", "class", "config", "marker-start", "marker-end"])) : S(t).type == "straight" || !e.state.curve ? (_(),
        V(yr, Te({
            key: 1,
            "data-edge-id": e.id
        }, e.state.position, {
            class: [{
                selectable: e.state.selectable,
                hover: e.state.hovered,
                selected: e.state.selected
            }, "v-ng-edge"],
            config: e.state.line.stroke,
            "marker-start": e.state.sourceMarkerId ? `url('#${e.state.sourceMarkerId}')` : void 0,
            "marker-end": e.state.targetMarkerId ? `url('#${e.state.targetMarkerId}')` : void 0
        }), null, 16, ["data-edge-id", "class", "config", "marker-start", "marker-end"])) : (_(),
        V(Th, {
            key: 2,
            "data-edge-id": e.id,
            class: we([{
                selectable: e.state.selectable,
                hover: e.state.hovered,
                selected: e.state.selected
            }, "v-ng-edge"]),
            state: e.state,
            config: e.state.line.stroke,
            "marker-start": e.state.sourceMarkerId ? `url('#${e.state.sourceMarkerId}')` : void 0,
            "marker-end": e.state.targetMarkerId ? `url('#${e.state.targetMarkerId}')` : void 0
        }, null, 8, ["data-edge-id", "class", "state", "config", "marker-start", "marker-end"]))
    }
})
  , Ih = ["cx", "cy", "r", "fill", "stroke", "stroke-width", "stroke-dasharray"]
  , Ch = ["x", "y", "width", "height", "rx", "ry", "fill", "stroke", "stroke-width", "stroke-dasharray"]
  , ro = U({
    __name: "VShape",
    props: {
        baseX: {
            default: 0
        },
        baseY: {
            default: 0
        },
        config: null
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = R(t.baseX)
          , i = R(t.baseY)
          , r = R(0)
          , a = R("#000000")
          , s = R(void 0)
          , l = R(0)
          , u = R(0)
          , c = R(0)
          , v = R(0);
        return ke( () => {
            var h;
            const d = n.value;
            r.value = t.config.strokeWidth * d,
            a.value = (h = t.config.strokeColor) != null ? h : "none",
            s.value = At(t.config.strokeDasharray, d),
            t.config.type === "circle" ? (o.value = t.baseX,
            i.value = t.baseY,
            l.value = t.config.radius * d) : (u.value = t.config.width * d,
            c.value = t.config.height * d,
            v.value = t.config.borderRadius * d,
            o.value = t.baseX - u.value / 2,
            i.value = t.baseY - c.value / 2)
        }
        ),
        (h, d) => e.config.type === "circle" ? (_(),
        A("circle", {
            key: 0,
            class: "v-ng-shape-circle",
            cx: o.value,
            cy: i.value,
            r: l.value,
            fill: e.config.color,
            stroke: a.value,
            "stroke-width": r.value,
            "stroke-dasharray": s.value
        }, null, 8, Ih)) : (_(),
        A("rect", {
            key: 1,
            class: "v-ng-shape-rect",
            x: o.value,
            y: i.value,
            width: u.value,
            height: c.value,
            rx: v.value,
            ry: v.value,
            fill: e.config.color,
            stroke: a.value,
            "stroke-width": r.value,
            "stroke-dasharray": s.value
        }, null, 8, Ch))
    }
})
  , Ah = ["rx", "ry", "fill", "transform"]
  , Nh = ["x", "y", "dominant-baseline", "font-family", "font-size", "fill"]
  , $h = ["x", "dy", "dominant-baseline"]
  , br = U({
    __name: "VLabelText",
    props: {
        text: null,
        x: {
            default: 0
        },
        y: {
            default: 0
        },
        dominantBaseline: {
            default: "central"
        },
        config: null
    },
    setup(e) {
        const t = e
          , n = ta()
          , {scale: o} = Ee()
          , i = T( () => {
            var p, f;
            return (f = (p = t.text) == null ? void 0 : p.toString().split(/\r?\n/)) != null ? f : ""
        }
        )
          , r = T( () => {
            var p;
            return (p = n["font-size"]) != null ? p : t.config.fontSize * o.value
        }
        )
          , a = T( () => r.value * t.config.lineHeight)
          , s = T( () => {
            const p = t.dominantBaseline;
            return p === "hanging" ? 0 : p === "central" ? -(a.value * (i.value.length - 1)) / 2 : -a.value * (i.value.length - 1)
        }
        )
          , l = R()
          , u = R("")
          , c = $e({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        })
          , v = T( () => {
            var p, f;
            const g = t.config.background;
            if (!g)
                return c;
            let E, w;
            g.padding instanceof Object ? (E = g.padding.vertical,
            w = g.padding.horizontal) : (E = (p = g.padding) != null ? p : 0,
            w = (f = g.padding) != null ? f : 0);
            const y = a.value - r.value;
            return {
                x: c.x - w * o.value,
                y: c.y - E * o.value - y / 2,
                width: c.width + w * 2 * o.value,
                height: c.height + E * 2 * o.value + y
            }
        }
        );
        let h;
        const d = () => {
            t.config.background && t.config.background.visible ? !h && l.value && (h = m(l.value, c, u)) : (h == null || h.disconnect(),
            h = void 0)
        }
        ;
        ft( () => d()),
        F( () => t.config.background && t.config.background.visible, (p, f) => {
            p != f && d()
        }
        ),
        It( () => {
            h == null || h.disconnect(),
            h = void 0
        }
        );
        function x(p, f, g) {
            var E;
            const w = p.getBBox();
            f.x = w.x,
            f.y = w.y,
            f.width = w.width,
            f.height = w.height,
            g.value = (E = p.getAttribute("transform")) != null ? E : void 0
        }
        function m(p, f, g) {
            const E = new MutationObserver( () => {
                x(p, f, g)
            }
            );
            return E.observe(p, {
                attributes: !0,
                attributeFilter: ["x", "y", "transform", "font-size"]
            }),
            x(p, f, g),
            E
        }
        return (p, f) => {
            var g, E, w, y, b, k;
            return _(),
            A(q, null, [e.config.background && e.config.background.visible ? (_(),
            A("rect", Te({
                key: 0,
                class: "v-ng-text-background"
            }, S(v), {
                rx: ((E = (g = e.config.background) == null ? void 0 : g.borderRadius) != null ? E : 0) * S(o),
                ry: ((y = (w = e.config.background) == null ? void 0 : w.borderRadius) != null ? y : 0) * S(o),
                fill: (k = (b = e.config.background) == null ? void 0 : b.color) != null ? k : "#ffffff",
                transform: u.value
            }), null, 16, Ah)) : pe("", !0), yi("text", Te({
                ref_key: "element",
                ref: l,
                class: "v-ng-text"
            }, p.$attrs, {
                x: e.x,
                y: e.y,
                "dominant-baseline": e.dominantBaseline,
                "font-family": p.$attrs["font-family"] ? `${p.$attrs["font-family"]}` : e.config.fontFamily,
                "font-size": S(r),
                fill: p.$attrs.fill ? `${p.$attrs.fill}` : e.config.color
            }), [S(i).length <= 1 ? (_(),
            A(q, {
                key: 0
            }, [na(po(e.text), 1)], 64)) : (_(!0),
            A(q, {
                key: 1
            }, te(S(i), (M, z) => (_(),
            A("tspan", {
                key: z,
                x: e.x,
                dy: z == 0 ? S(s) : S(a),
                "dominant-baseline": e.dominantBaseline
            }, po(M), 9, $h))), 128))], 16, Nh)], 64)
        }
    }
})
  , jh = U({
    __name: "VEdgeSummarized",
    props: {
        edges: null,
        layouts: null
    },
    setup(e) {
        const t = e
          , n = rn()
          , {handleEdgesPointerDownEvent: o, handleEdgesPointerOverEvent: i, handleEdgesPointerOutEvent: r, handleEdgesClickEvent: a, handleEdgesDoubleClickEvent: s, handleEdgesContextMenu: l} = Nt()
          , {edgeStates: u} = Ie()
          , c = R({
            p1: {
                x: 0,
                y: 0
            },
            p2: {
                x: 0,
                y: 0
            }
        })
          , v = R({
            x: 0,
            y: 0
        });
        ke( () => {
            const E = Object.keys(t.edges).find(w => w in u);
            E && (c.value = u[E].position,
            v.value = {
                x: (c.value.p1.x + c.value.p2.x) / 2,
                y: (c.value.p1.y + c.value.p2.y) / 2
            })
        }
        );
        const h = T( () => Object.keys(t.edges))
          , d = T( () => C.values(n.summarized.label, t.edges))
          , x = T( () => C.values(n.summarized.shape, t.edges))
          , m = T( () => C.values(n.summarized.stroke, t.edges))
          , p = T( () => h.value.some(E => u[E].hovered))
          , f = T( () => h.value.some(E => u[E].selectable))
          , g = T( () => h.value.some(E => u[E].selected));
        return (E, w) => (_(),
        A("g", {
            class: we({
                "v-ng-line-summarized": !0,
                hovered: S(p),
                selectable: S(f),
                selected: S(g)
            }),
            onPointerdown: w[0] || (w[0] = Me(y => S(o)(S(h), y), ["stop"])),
            onPointerenterPassive: w[1] || (w[1] = y => S(i)(S(h), y)),
            onPointerleavePassive: w[2] || (w[2] = y => S(r)(S(h), y)),
            onClick: w[3] || (w[3] = Me(y => S(a)(S(h), y), ["stop"])),
            onDblclick: w[4] || (w[4] = Me(y => S(s)(S(h), y), ["stop"])),
            onContextmenu: w[5] || (w[5] = y => S(l)(S(h), y))
        }, [Ke(yr, Te(c.value, {
            config: S(m),
            "data-edge-id": S(h)[0]
        }), null, 16, ["config", "data-edge-id"]), Ke(ro, {
            "base-x": v.value.x,
            "base-y": v.value.y,
            config: S(x)
        }, null, 8, ["base-x", "base-y", "config"]), Ke(br, {
            text: Object.keys(e.edges).length.toString(),
            x: v.value.x,
            y: v.value.y,
            config: S(d),
            "text-anchor": "middle",
            "dominant-baseline": "central"
        }, null, 8, ["text", "x", "y", "config"])], 34))
    }
})
  , Lh = {
    class: "v-ng-edge-overlay"
}
  , li = U({
    __name: "VEdgeOverlay",
    props: {
        edgeId: {
            default: void 0
        },
        edge: {
            default: void 0
        },
        edges: {
            default: () => ({})
        },
        state: null,
        isSummarized: {
            type: Boolean
        }
    },
    setup(e) {
        const t = e
          , {svg: n} = Un()
          , {scale: o} = Ee()
          , i = rn();
        function r() {
            return t.isSummarized ? C.values(i.summarized.stroke, t.edges) : t.state.line.stroke
        }
        function a(c) {
            return {
                source: c.p1,
                target: c.p2
            }
        }
        function s(c) {
            if (c.curve)
                return c.curve.center;
            {
                const v = c.origin.p1
                  , h = c.origin.p2;
                return {
                    x: (v.x + h.x) / 2,
                    y: (v.y + h.y) / 2
                }
            }
        }
        function l() {
            var c;
            if (!n.value)
                return 0;
            const v = (c = t.edgeId) != null ? c : Object.keys(t.edges)[0]
              , h = n.value.querySelector(`path[data-edge-id="${v}"]`);
            return h ? h.getTotalLength() : 0
        }
        function u(c) {
            var v;
            if (!n.value || !isFinite(c))
                return t.state.position.p1;
            t.state;
            const h = (v = t.edgeId) != null ? v : Object.keys(t.edges)[0]
              , d = n.value.querySelector(`path[data-edge-id="${h}"]`);
            if (!d)
                return t.state.position.p1;
            const x = d.getPointAtLength(c);
            return {
                x: x.x,
                y: x.y
            }
        }
        return (c, v) => (_(),
        A("g", Lh, [e.isSummarized ? K(c.$slots, "default", {
            key: 0,
            edges: e.edges,
            isSummarized: e.isSummarized,
            stroke: r(),
            position: a(e.state.origin),
            center: s(e.state),
            hovered: e.state.hovered,
            selected: e.state.selected,
            scale: S(o),
            length: l(),
            pointAtLength: u
        }) : K(c.$slots, "default", {
            key: 1,
            edgeId: e.edgeId,
            edge: e.edge,
            edges: {
                [e.edgeId]: e.edge
            },
            isSummarized: e.isSummarized,
            stroke: r(),
            position: a(e.state.origin),
            center: s(e.state),
            hovered: e.state.hovered,
            selected: e.state.selected,
            scale: S(o),
            length: l(),
            pointAtLength: u
        })]))
    }
})
  , Dh = U({
    __name: "VEdgeGroups",
    props: {
        hasEdgeOverlaySlot: {
            type: Boolean
        }
    },
    setup(e) {
        const {edgeStates: t, edgeZOrderedList: n, layouts: o} = Ie();
        return (i, r) => (_(!0),
        A(q, null, te(S(n), a => (_(),
        A(q, null, [S(qc)(a) ? (_(),
        A(q, {
            key: 0
        }, [(_(),
        V(jh, {
            key: a.key,
            edges: a.group.edges,
            layouts: S(o).nodes
        }, null, 8, ["edges", "layouts"])), e.hasEdgeOverlaySlot ? (_(),
        V(li, {
            key: a.key,
            edges: a.group.edges,
            state: S(t)[Object.keys(a.group.edges)[0]],
            "is-summarized": !0
        }, {
            default: ie(s => [K(i.$slots, "default", ge(me(s)))]),
            _: 2
        }, 1032, ["edges", "state"])) : pe("", !0)], 64)) : (_(),
        A(q, {
            key: 1
        }, [(_(),
        V(zh, {
            id: a.key,
            key: a.key,
            state: S(t)[a.key],
            "source-pos": S(o).nodes[a.edge.source],
            "target-pos": S(o).nodes[a.edge.target]
        }, null, 8, ["id", "state", "source-pos", "target-pos"])), e.hasEdgeOverlaySlot ? (_(),
        V(li, {
            key: a.key,
            "edge-id": a.key,
            edge: a.edge,
            state: S(t)[a.key],
            "is-summarized": !1
        }, {
            default: ie(s => [K(i.$slots, "default", ge(me(s)))]),
            _: 2
        }, 1032, ["edge-id", "edge", "state"])) : pe("", !0)], 64))], 64))), 256))
    }
})
  , Zh = {
    class: "v-ng-layer-edges v-ng-graph-objects"
}
  , Bh = U({
    __name: "VEdgesLayer",
    setup(e) {
        const t = Kt()
          , n = T( () => "edge-overlay"in t);
        return (o, i) => (_(),
        A("g", Zh, [Ke(kh), Ke(Dh, {
            "has-edge-overlay-slot": S(n)
        }, jn({
            _: 2
        }, [S(n) ? {
            name: "default",
            fn: ie(r => [K(o.$slots, "edge-overlay", ge(me(r)))]),
            key: "0"
        } : void 0]), 1032, ["has-edge-overlay-slot"])]))
    }
})
  , Rh = U({
    __name: "VEdgeLabelPlace",
    props: {
        edgeId: null,
        edge: null,
        state: null
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = T( () => Qi(t.state.labelPosition, t.state.line.stroke, t.state.label.margin, t.state.label.padding, n.value));
        return (i, r) => e.state.loop ? pe("", !0) : K(i.$slots, "default", {
            key: 0,
            edgeId: e.edgeId,
            edge: e.edge,
            config: e.state.label,
            area: S(o),
            hovered: e.state.hovered,
            selected: e.state.selected,
            scale: S(n)
        })
    }
})
  , Wh = U({
    __name: "VEdgeLabelsPlace",
    props: {
        edges: null,
        state: null,
        summarizeState: null
    },
    setup(e) {
        const t = e
          , {scale: n} = Ee()
          , o = T( () => {
            var i, r;
            return Qi(t.state.labelPosition, (r = (i = t.summarizeState) == null ? void 0 : i.stroke) != null ? r : t.state.line.stroke, t.state.label.margin, t.state.label.padding, n.value)
        }
        );
        return (i, r) => e.state.loop ? pe("", !0) : K(i.$slots, "default", {
            key: 0,
            edges: e.edges,
            config: e.state.label,
            area: S(o),
            hovered: e.state.hovered,
            selected: e.state.selected,
            scale: S(n)
        })
    }
})
  , Hh = {
    class: "v-ng-edge-labels"
}
  , Vh = U({
    __name: "VEdgeLabels",
    props: {
        enableEdgeLabel: {
            type: Boolean,
            default: !1
        },
        enableEdgesLabel: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const {edgeStates: t, edgeGroupStates: n, summarizedEdgeStates: o} = Ie()
          , i = T( () => {
            const a = {}
              , s = {};
            return Object.entries(n.edgeGroups).forEach( ([l,u]) => {
                Object.keys(u.edges).length > 0 && (u.summarize ? s[l] = u : a[l] = u)
            }
            ),
            {
                individual: a,
                summarized: s
            }
        }
        );
        function r(a) {
            return Object.keys(a.edges)[0]
        }
        return (a, s) => (_(),
        A("g", Hh, [e.enableEdgeLabel ? (_(!0),
        A(q, {
            key: 0
        }, te(S(i).individual, (l, u) => (_(),
        A(q, {
            key: u
        }, [(_(!0),
        A(q, null, te(l.edges, (c, v) => (_(),
        V(Rh, {
            key: v,
            "edge-id": v,
            edge: c,
            state: S(t)[v]
        }, {
            default: ie(h => [K(a.$slots, "edge-label", ge(me(h)))]),
            _: 2
        }, 1032, ["edge-id", "edge", "state"]))), 128))], 64))), 128)) : pe("", !0), e.enableEdgesLabel ? (_(!0),
        A(q, {
            key: 1
        }, te(S(i).summarized, (l, u) => (_(),
        V(Wh, {
            key: u,
            edges: l.edges,
            state: S(t)[r(l)],
            "summarize-state": S(o)[r(l)]
        }, {
            default: ie(c => [K(a.$slots, "edges-label", ge(me(c)))]),
            _: 2
        }, 1032, ["edges", "state", "summarize-state"]))), 128)) : pe("", !0)]))
    }
})
  , Fh = U({
    __name: "VEdgeLabelsLayer",
    props: {
        enableEdgeLabel: {
            type: Boolean,
            default: !1
        },
        enableEdgesLabel: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        return (t, n) => (_(),
        V(Vh, {
            "enable-edge-label": e.enableEdgeLabel,
            "enable-edges-label": e.enableEdgesLabel,
            class: "v-ng-layer-edge-labels v-ng-graph-objects"
        }, jn({
            _: 2
        }, [e.enableEdgeLabel ? {
            name: "edge-label",
            fn: ie(o => [K(t.$slots, "edge-label", ge(me(o)))]),
            key: "0"
        } : void 0, e.enableEdgesLabel ? {
            name: "edges-label",
            fn: ie(o => [K(t.$slots, "edges-label", ge(me(o)))]),
            key: "1"
        } : void 0]), 1032, ["enable-edge-label", "enable-edges-label"]))
    }
})
  , Uh = U({
    __name: "VNodeFocusRing",
    props: {
        id: null,
        state: null,
        pos: {
            default: void 0
        }
    },
    setup(e) {
        const t = e
          , n = T( () => {
            var a;
            return ((a = t.pos) == null ? void 0 : a.x) || 0
        }
        )
          , o = T( () => {
            var a;
            return ((a = t.pos) == null ? void 0 : a.y) || 0
        }
        )
          , i = on()
          , r = $e({});
        return ke( () => {
            var a, s, l;
            const u = t.state.shape;
            if (u.type === "circle") {
                const c = {
                    type: "circle",
                    radius: u.radius + ((a = u.strokeWidth) != null ? a : 0) / 2 + i.focusring.padding + i.focusring.width / 2,
                    color: "none",
                    strokeWidth: i.focusring.width,
                    strokeColor: i.focusring.color,
                    strokeDasharray: i.focusring.dasharray
                };
                Object.assign(r, c)
            } else {
                const c = {
                    type: "rect",
                    width: u.width + ((s = u.strokeWidth) != null ? s : 0) + i.focusring.padding * 2 + i.focusring.width,
                    height: u.height + ((l = u.strokeWidth) != null ? l : 0) + i.focusring.padding * 2 + i.focusring.width,
                    borderRadius: u.borderRadius > 0 ? u.borderRadius + i.focusring.padding : 0,
                    color: "none",
                    strokeWidth: i.focusring.width,
                    strokeColor: i.focusring.color,
                    strokeDasharray: i.focusring.dasharray
                };
                Object.assign(r, c)
            }
        }
        ),
        (a, s) => (_(),
        V(ro, {
            class: "v-ng-node-focusring",
            "base-x": S(n),
            "base-y": S(o),
            config: r
        }, null, 8, ["base-x", "base-y", "config"]))
    }
})
  , Gh = {
    class: "v-ng-layer-nodes-selections"
}
  , Xh = U({
    __name: "VFocusringLayer",
    setup(e) {
        const {nodeStates: t} = Ie()
          , {selectedNodes: n} = Hd()
          , o = io();
        return (i, r) => (_(),
        A("g", Gh, [(_(!0),
        A(q, null, te(S(n), a => (_(),
        V(Uh, {
            id: a,
            key: a,
            state: S(t)[a],
            pos: S(o).nodes[a]
        }, null, 8, ["id", "state", "pos"]))), 128))]))
    }
})
  , qh = ["transform"]
  , ui = U({
    __name: "VNode",
    props: {
        id: null,
        state: null,
        pos: {
            default: void 0
        }
    },
    setup(e) {
        const t = e
          , n = T( () => {
            var v;
            return ((v = t.pos) == null ? void 0 : v.x) || 0
        }
        )
          , o = T( () => {
            var v;
            return ((v = t.pos) == null ? void 0 : v.y) || 0
        }
        )
          , {scale: i} = Ee()
          , {handleNodePointerDownEvent: r, handleNodePointerOverEvent: a, handleNodePointerOutEvent: s, handleNodeClickEvent: l, handleNodeDoubleClickEvent: u, handleNodeContextMenu: c} = Nt();
        return (v, h) => (_(),
        A("g", {
            class: we({
                "v-ng-node": !0,
                hover: e.state.hovered,
                selected: e.state.selected
            }),
            transform: `translate(${S(n)} ${S(o)})`,
            onPointerdown: h[0] || (h[0] = Me(d => S(r)(e.id, d), ["stop"])),
            onPointerenterPassive: h[1] || (h[1] = d => S(a)(e.id, d)),
            onPointerleavePassive: h[2] || (h[2] = d => S(s)(e.id, d)),
            onClick: h[3] || (h[3] = Me(d => S(l)(e.id, d), ["stop"])),
            onDblclick: h[4] || (h[4] = Me(d => S(u)(e.id, d), ["stop"])),
            onContextmenu: h[5] || (h[5] = d => S(c)(e.id, d))
        }, [K(v.$slots, "override-node", {
            nodeId: e.id,
            scale: S(i),
            config: e.state.shape,
            class: we({
                draggable: e.state.draggable,
                selectable: e.state.selectable
            })
        }, () => [Ke(ro, {
            config: e.state.shape,
            class: we({
                "v-ng-node-default": !0,
                draggable: e.state.draggable,
                selectable: e.state.selectable
            })
        }, null, 8, ["config", "class"])])], 42, qh))
    }
})
  , Yh = U({
    __name: "VNodesLayer",
    setup(e) {
        const t = Kt()
          , n = T( () => "override-node"in t)
          , {nodeZOrderedList: o} = Ie()
          , i = on()
          , r = io();
        return (a, s) => S(n) ? (_(),
        V(kt, {
            key: 0,
            name: S(i).transition,
            css: !!S(i).transition,
            tag: "g",
            class: "v-ng-layer-nodes v-ng-graph-objects"
        }, {
            default: ie( () => [(_(!0),
            A(q, null, te(S(o), l => (_(),
            V(ui, {
                id: l.id,
                key: l.id,
                state: l,
                pos: S(r).nodes[l.id]
            }, {
                "override-node": ie(u => [K(a.$slots, "override-node", ge(me(u)))]),
                _: 2
            }, 1032, ["id", "state", "pos"]))), 128))]),
            _: 3
        }, 8, ["name", "css"])) : (_(),
        V(kt, {
            key: 1,
            name: S(i).transition,
            css: !!S(i).transition,
            tag: "g",
            class: "v-ng-layer-nodes v-ng-graph-objects"
        }, {
            default: ie( () => [(_(!0),
            A(q, null, te(S(o), l => (_(),
            V(ui, {
                id: l.id,
                key: l.id,
                state: l,
                pos: S(r).nodes[l.id]
            }, null, 8, ["id", "state", "pos"]))), 128))]),
            _: 1
        }, 8, ["name", "css"]))
    }
})
  , wr = {
    [L.NORTH]: 0,
    [L.NORTH_EAST]: 1,
    [L.EAST]: 2,
    [L.SOUTH_EAST]: 3,
    [L.SOUTH]: 4,
    [L.SOUTH_WEST]: 5,
    [L.WEST]: 6,
    [L.NORTH_WEST]: 7,
    [L.CENTER]: -1
}
  , Kh = [ (e, t) => Le(e, 0, t ? 90 : 60), (e, t) => Le(e, 45, t ? 90 : 45), (e, t) => Le(e, 90, t ? 60 : 30), (e, t) => Le(e, 135, t ? 90 : 45), (e, t) => Le(e, 180, t ? 90 : 60), (e, t) => Le(e, 225, t ? 90 : 45), (e, t) => Le(e, 270, t ? 60 : 30), (e, t) => Le(e, 315, t ? 90 : 45)];
function Qh(e, t, n, o, i) {
    if (i === L.CENTER)
        return L.CENTER;
    const r = [];
    Object.entries(n).forEach( ([l,u]) => {
        let c = !1;
        if (u.nodeId === e) {
            const h = o(l);
            h && (c = !0,
            u = Fn(ce({}, u), {
                pos: {
                    x: h.x,
                    y: h.y
                }
            }))
        }
        const v = (Jn(Gn(u.pos, t)) + 360 + 90) % 360;
        r.push([v, c])
    }
    );
    const a = Jh(i)
      , s = [a, (a + 4) % 8, (a + 2) % 8, (a - 2 + 8) % 8, (a + 1) % 8, (a - 1 + 8) % 8, (a + 3) % 8, (a - 3 + 8) % 8].find(l => r.every(u => !Kh[l](...u)));
    return s === void 0 ? i : ef(s, i)
}
function Le(e, t, n) {
    e %= 360;
    const o = (t - n + 360) % 360
      , i = (t + n) % 360;
    return o <= i ? o < e && e < i : o < e || e < i
}
function Jh(e) {
    var t;
    return (t = wr[e]) != null ? t : 0
}
function ef(e, t) {
    var n, o;
    return (o = (n = Object.entries(wr)[e]) == null ? void 0 : n[0]) != null ? o : t
}
const tf = ["transform"]
  , ci = U({
    __name: "VNodeLabel",
    props: {
        id: null,
        state: null,
        pos: {
            default: void 0
        }
    },
    setup(e) {
        const t = e
          , n = on()
          , {edgeStates: o} = Ie()
          , {scale: i} = Ee()
          , {handleNodePointerDownEvent: r, handleNodePointerOverEvent: a, handleNodePointerOutEvent: s, handleNodeClickEvent: l, handleNodeDoubleClickEvent: u, handleNodeContextMenu: c} = Nt()
          , v = T( () => {
            var O;
            return ((O = t.pos) == null ? void 0 : O.x) || 0
        }
        )
          , h = T( () => {
            var O;
            return ((O = t.pos) == null ? void 0 : O.y) || 0
        }
        )
          , d = T( () => t.state.label.direction === L.CENTER ? 0 : t.state.label.margin * i.value)
          , x = R(0)
          , m = R(0)
          , p = R(0)
          , f = R(0)
          , g = T( () => {
            var O;
            const I = t.state.label.direction
              , N = t.state.label.directionAutoAdjustment;
            if (N === !1)
                return I;
            const D = {
                x: v.value,
                y: h.value
            };
            return N === !0 ? Qh(t.state.id, D, t.state.oppositeNodes, Y => {
                var Z, W;
                return (W = (Z = o[Y]) == null ? void 0 : Z.loop) == null ? void 0 : W.center
            }
            , I) : (O = N({
                nodeId: t.state.id,
                pos: D,
                oppositeNodes: t.state.oppositeNodes
            })) != null ? O : I
        }
        )
          , E = T( () => {
            switch (g.value) {
            case L.CENTER:
            case L.NORTH:
            case L.SOUTH:
                return "middle";
            case L.EAST:
            case L.NORTH_EAST:
            case L.SOUTH_EAST:
                return "start";
            case L.WEST:
            case L.NORTH_WEST:
            case L.SOUTH_WEST:
            default:
                return "end"
            }
        }
        )
          , w = T( () => {
            switch (g.value) {
            case L.NORTH:
            case L.NORTH_EAST:
            case L.NORTH_WEST:
                return "text-top";
            case L.SOUTH:
            case L.SOUTH_EAST:
            case L.SOUTH_WEST:
                return "hanging";
            case L.CENTER:
            case L.EAST:
            case L.WEST:
            default:
                return "central"
            }
        }
        )
          , y = T( () => {
            switch (g.value) {
            case L.CENTER:
            case L.NORTH:
            case L.SOUTH:
                return 0;
            case L.EAST:
                return m.value;
            case L.WEST:
                return -m.value;
            case L.NORTH_EAST:
            case L.SOUTH_EAST:
                return f.value;
            case L.NORTH_WEST:
            case L.SOUTH_WEST:
            default:
                return -f.value
            }
        }
        )
          , b = T( () => {
            switch (g.value) {
            case L.NORTH:
                return -x.value;
            case L.SOUTH:
                return x.value;
            case L.CENTER:
            case L.EAST:
            case L.WEST:
                return 0;
            case L.NORTH_EAST:
            case L.NORTH_WEST:
                return -p.value;
            case L.SOUTH_EAST:
            case L.SOUTH_WEST:
            default:
                return p.value
            }
        }
        );
        ke( () => {
            const O = i.value
              , I = t.state.shape;
            if (I.type == "circle") {
                const N = I.radius * O
                  , D = N + d.value
                  , Y = Math.sqrt(de(D, 2) / 2);
                x.value = N + d.value,
                m.value = N + d.value,
                p.value = Y,
                f.value = Y
            } else {
                const N = I.borderRadius * O
                  , D = I.width * O
                  , Y = I.height * O
                  , Z = N + d.value
                  , W = Math.sqrt(de(Z, 2) / 2);
                x.value = Y / 2 + d.value,
                m.value = D / 2 + d.value,
                p.value = Y / 2 - N + W,
                f.value = D / 2 - N + W
            }
        }
        );
        const k = T( () => O => n.label.handleNodeEvents ? {
            pointerdown: I => {
                I.stopPropagation(),
                r(O, I)
            }
            ,
            pointerenter: I => a(O, I),
            pointerleave: I => s(O, I),
            click: I => {
                I.stopPropagation(),
                l(O, I)
            }
            ,
            dblclick: I => {
                I.stopPropagation(),
                u(O, I)
            }
            ,
            contextmenu: I => {
                c(O, I)
            }
        } : {})
          , M = T( () => {
            const O = n.label.handleNodeEvents;
            return {
                "v-ng-node-label": !0,
                hover: O && t.state.hovered,
                selected: O && t.state.selected
            }
        }
        )
          , z = T( () => {
            const O = n.label.handleNodeEvents;
            return {
                draggable: O && t.state.draggable,
                selectable: O && t.state.selectable
            }
        }
        );
        return (O, I) => (_(),
        A("g", Te({
            class: S(M),
            transform: `translate(${S(v)} ${S(h)})`
        }, ea(S(k)(e.id), !0)), [K(O.$slots, "override-node-label", {
            nodeId: e.id,
            scale: S(i),
            text: e.state.labelText,
            x: S(y),
            y: S(b),
            config: e.state.label,
            shape: e.state.shape,
            textAnchor: S(E),
            dominantBaseline: S(w),
            class: we(S(z))
        }, () => [Ke(br, {
            text: e.state.labelText,
            x: 0,
            y: 0,
            config: e.state.label,
            "text-anchor": S(E),
            "dominant-baseline": S(w),
            class: we(S(z)),
            transform: `translate(${S(y)} ${S(b)})`
        }, null, 8, ["text", "config", "text-anchor", "dominant-baseline", "class", "transform"])])], 16, tf))
    }
})
  , nf = U({
    __name: "VNodeLabelsLayer",
    setup(e) {
        const t = Kt()
          , n = T( () => "override-node-label"in t)
          , {nodeZOrderedList: o} = Ie()
          , i = on()
          , r = io()
          , a = T( () => s(o.value));
        function s(l) {
            return l.filter(u => {
                var c;
                return u.label.visible && ((c = u.labelText) != null ? c : !1)
            }
            )
        }
        return (l, u) => S(n) ? (_(),
        V(kt, {
            key: 0,
            name: S(i).transition,
            css: !!S(i).transition,
            tag: "g",
            class: "v-ng-layer-node-labels v-ng-graph-objects"
        }, {
            default: ie( () => [(_(!0),
            A(q, null, te(S(a), c => (_(),
            V(ci, {
                id: c.id,
                key: c.id,
                state: c,
                pos: S(r).nodes[c.id]
            }, {
                "override-node-label": ie(v => [K(l.$slots, "override-node-label", ge(me(v)))]),
                _: 2
            }, 1032, ["id", "state", "pos"]))), 128))]),
            _: 3
        }, 8, ["name", "css"])) : (_(),
        V(kt, {
            key: 1,
            name: S(i).transition,
            css: !!S(i).transition,
            tag: "g",
            class: "v-ng-layer-node-labels v-ng-graph-objects"
        }, {
            default: ie( () => [(_(!0),
            A(q, null, te(S(a), c => (_(),
            V(ci, {
                id: c.id,
                key: c.id,
                state: c,
                pos: S(r).nodes[c.id]
            }, null, 8, ["id", "state", "pos"]))), 128))]),
            _: 1
        }, 8, ["name", "css"]))
    }
})
  , of = ["d", "stroke", "stroke-width", "stroke-dasharray", "stroke-linecap", "stroke-linejoin"]
  , rf = U({
    __name: "VPath",
    props: {
        path: null
    },
    setup(e) {
        const t = e
          , {nodeStates: n, edgeStates: o, layouts: i} = Ie()
          , {scale: r} = Ee()
          , a = Vi();
        function s(h) {
            if (h.edges.length === 0)
                return [];
            const d = C.value(a.margin, h.path) * r.value;
            return Lc(h, n, i.nodes, o, r.value, a.curveInNode, a.end, d)
        }
        function l(h) {
            const d = s(h);
            let x = !0;
            return d.map(m => {
                if (m === null)
                    x = !0;
                else {
                    if (typeof m == "string")
                        return m;
                    if (m instanceof Array) {
                        m = [...m];
                        const p = [];
                        if (m.length % 2 === 1) {
                            const f = m[0];
                            m = m.slice(1),
                            p.push(`L ${f.x} ${f.y}`)
                        }
                        return Wn(m, 2).map( ([f,g]) => p.push(`Q ${f.x} ${f.y} ${g.x} ${g.y}`)),
                        p.join(" ")
                    } else {
                        const p = x;
                        return x = !1,
                        `${p ? "M " : "L "}${m.x} ${m.y}`
                    }
                }
            }
            ).join(" ")
        }
        const u = T( () => {
            const h = t.path;
            return h.selected ? C.values(a.selected, h.path) : h.hovered && a.hover ? C.values(a.hover, h.path) : C.values(a.normal, h.path)
        }
        )
          , c = T( () => At(u.value.dasharray, r.value))
          , v = T( () => {
            const h = u.value.animate ? tn(u.value.dasharray) * u.value.animationSpeed * r.value : !1;
            return h ? {
                "--animation-speed": h
            } : void 0
        }
        );
        return (h, d) => (_(),
        A("path", {
            class: we({
                "v-ng-path": !0,
                animate: S(u).animate,
                clickable: e.path.clickable,
                hoverable: e.path.hoverable
            }),
            d: l(e.path),
            fill: "none",
            stroke: S(u).color,
            "stroke-width": S(u).width * S(r),
            "stroke-dasharray": S(c),
            "stroke-linecap": S(u).linecap,
            "stroke-linejoin": S(u).linejoin,
            style: zt(S(v))
        }, null, 14, of))
    }
})
  , af = U({
    __name: "VPaths",
    setup(e) {
        const {pathZOrderedList: t} = Ie()
          , n = Vi()
          , {handlePathPointerDownEvent: o, handlePathPointerOverEvent: i, handlePathPointerOutEvent: r, handlePathClickEvent: a, handlePathDoubleClickEvent: s, handlePathContextMenu: l} = Nt();
        return (u, c) => (_(),
        V(kt, {
            name: S(n).transition,
            css: !!S(n).transition,
            tag: "g",
            class: "v-ng-paths v-ng-layer-paths v-ng-graph-objects"
        }, {
            default: ie( () => [(_(!0),
            A(q, null, te(S(t), v => (_(),
            V(rf, {
                key: v.id,
                path: v,
                onPointerdown: h => S(o)(v.id, h),
                onPointerenterPassive: h => S(i)(v.id, h),
                onPointerleavePassive: h => S(r)(v.id, h),
                onClick: Me(h => S(a)(v.id, h), ["stop"]),
                onDblclick: Me(h => S(s)(v.id, h), ["stop"]),
                onContextmenu: h => S(l)(v.id, h)
            }, null, 8, ["path", "onPointerdown", "onPointerenterPassive", "onPointerleavePassive", "onClick", "onDblclick", "onContextmenu"]))), 128))]),
            _: 1
        }, 8, ["name", "css"]))
    }
})
  , sf = U({
    __name: "VPathsLayer",
    setup(e) {
        return (t, n) => (_(),
        V(af))
    }
})
  , lf = {
    key: 0
}
  , Qf = U({
    __name: "VNetworkGraph",
    props: {
        nodes: {
            default: () => ({})
        },
        edges: {
            default: () => ({})
        },
        paths: {
            default: () => ({})
        },
        layouts: {
            default: () => ({})
        },
        zoomLevel: {
            default: 1
        },
        selectedNodes: {
            default: () => []
        },
        selectedEdges: {
            default: () => []
        },
        selectedPaths: {
            default: () => []
        },
        configs: {
            default: () => ({})
        },
        layers: {
            default: () => ({})
        },
        eventHandlers: {
            default: () => ({})
        }
    },
    emits: ["update:zoomLevel", "update:selectedNodes", "update:selectedEdges", "update:selectedPaths", "update:layouts"],
    setup(e, {expose: t, emit: n}) {
        const o = e
          , i = ["override-node", "override-node-label", "edge-overlay", "edge-label", "edges-label"]
          , r = Kt()
          , a = Oe(o, "nodes")
          , s = Oe(o, "edges")
          , {objects: l, isInCompatibilityModeForPath: u} = Bd(Oe(o, "paths"))
          , c = wd();
        Object.entries(o.eventHandlers).forEach( ([P,j]) => {
            c.on(P, j)
        }
        );
        const v = mc(Oe(o, "configs"))
          , h = T( () => {
            const P = new Set(Object.keys(r));
            i.forEach($ => P.delete($));
            const j = Object.fromEntries(dc.map($ => [$, []]));
            return Object.assign(j, Object.entries(o.layers).reduce( ($, [B,oe]) => (P.delete(B),
            oe in $ ? $[oe].push(B) : $[oe] = [B],
            $), {})),
            j.root.push(...P),
            j
        }
        )
          , d = T( () => v.view.grid.visible)
          , x = T( () => {
            const P = h.value;
            return d.value || P.background.length > 0 || P.grid.length > 0
        }
        )
          , m = Gd(v, r)
          , p = R()
          , f = R()
          , g = R()
          , E = R(0)
          , w = T( () => E.value !== 0)
          , y = Rd(o, "zoomLevel", n, P => (P = Math.max(P, v.view.minZoomLevel),
        P = Math.min(P, v.view.maxZoomLevel),
        P))
          , {svgPanZoom: b, onSvgPanZoomMounted: k, onSvgPanZoomUnmounted: M} = jd(f, {
            viewportSelector: ".v-ng-viewport",
            minZoom: v.view.minZoomLevel,
            maxZoom: v.view.maxZoomLevel,
            dblClickZoomEnabled: fo(v.view),
            mouseWheelZoomEnabled: dn(v.view),
            fit: v.view.autoPanAndZoomOnLoad === "fit-content",
            center: v.view.autoPanAndZoomOnLoad !== !1,
            zoomEnabled: v.view.zoomEnabled,
            preventMouseEventsDefault: !1,
            onZoom: P => {
                var j, $;
                if (E.value === 2)
                    return;
                const B = ($ = (j = b.value) == null ? void 0 : j.getRealZoom()) != null ? $ : 1;
                Math.abs(y.value - B) >= 1e-6 && (y.value = B,
                c.emit("view:zoom", B))
            }
            ,
            panEnabled: v.view.panEnabled,
            onPan: P => {
                E.value !== 2 && c.emit("view:pan", P)
            }
        });
        hc({
            container: p,
            svg: f,
            viewport: g,
            svgPanZoom: b
        });
        const z = {
            width: 0,
            height: 0
        }
          , O = globalThis.ResizeObserver ? new ResizeObserver( () => {
            var P, j, $;
            if ((P = b.value) == null || P.resize(),
            !v.view.autoPanOnResize)
                return;
            const B = (j = p.value) == null ? void 0 : j.getBoundingClientRect();
            if (B) {
                const oe = -(z.width - B.width) / 2
                  , vt = -(z.height - B.height) / 2;
                ($ = b.value) == null || $.panBy({
                    x: oe,
                    y: vt
                });
                const {width: Ae, height: hn} = B;
                (z.width !== Ae || z.height !== hn) && (Object.assign(z, {
                    width: Ae,
                    height: hn
                }),
                c.emit("view:resize", {
                    x: B.x,
                    y: B.y,
                    width: Ae,
                    height: hn
                }))
            }
        }
        ) : void 0;
        k( () => {
            var P, j, $;
            const B = X(p.value, "svg-pan-zoom container");
            O == null || O.observe(B),
            (j = (P = v.view).onSvgPanZoomInitialized) == null || j.call(P, X(b.value, "svg-pan-zoom instance"));
            const oe = B.getBoundingClientRect()
              , {width: vt, height: Ae} = oe;
            Object.assign(z, {
                width: vt,
                height: Ae
            }),
            ($ = g.value) == null || $.addEventListener("touchstart", vo, {
                passive: !1
            })
        }
        ),
        M( () => {
            var P;
            O == null || O.disconnect(),
            (P = g.value) == null || P.removeEventListener("touchstart", vo)
        }
        );
        const I = P => {
            var j;
            (j = b.value) == null || j.applyAbsoluteZoomLevel(P, v.view.minZoomLevel, v.view.maxZoomLevel)
        }
        ;
        F( () => v.view.panEnabled, P => {
            var j;
            (j = b.value) == null || j.setPanEnabled(P)
        }
        ),
        F( () => [v.view.zoomEnabled, fo(v.view), dn(v.view)], () => {
            const P = b.value;
            P && Kr(P, v.view.zoomEnabled, v.view.doubleClickZoomEnabled, v.view.mouseWheelZoomEnabled)
        }
        ),
        F(y, P => I(P)),
        F( () => [v.view.minZoomLevel, v.view.maxZoomLevel], P => {
            I(y.value)
        }
        );
        const {scale: N} = Ld(y, v.view);
        k( () => {
            const P = o.zoomLevel;
            I(P)
        }
        );
        const D = () => _e(this, null, function*() {
            var P;
            Object.keys(o.nodes).length > 0 && ((P = b.value) == null || P.updateBBox(),
            yield si())
        })
          , Y = P => _e(this, null, function*() {
            var j, $;
            const B = !P || P.margin === void 0 ? v.view.fitContentMargin : P.margin;
            yield D();
            const oe = X(f.value).getBoundingClientRect()
              , vt = eh(B, oe)
              , Ae = th(X(g.value), oe, Ce.nodes, y.value, vt, v.view.scalingObjects);
            Ae ? (I(Ae.zoom),
            (j = b.value) == null || j.pan(Ae.pos)) : ($ = b.value) == null || $.center(),
            c.emit("view:fit", void 0)
        })
          , Z = () => _e(this, null, function*() {
            var P;
            yield D(),
            (P = b.value) == null || P.center()
        })
          , W = () => {
            var P, j;
            return (j = (P = b.value) == null ? void 0 : P.getViewBox()) != null ? j : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        }
          , se = P => {
            var j;
            return (j = b.value) == null ? void 0 : j.setViewBox(P)
        }
          , J = xn(o, "selectedNodes", a, n);
        F(J, P => c.emit("node:select", Array.from(P)));
        const ue = xn(o, "selectedEdges", s, n);
        F(ue, P => c.emit("edge:select", Array.from(P)));
        const Xe = xn(o, "selectedPaths", l, n);
        F(Xe, P => c.emit("path:select", Array.from(P))),
        Wd(J, ue, Xe);
        const ve = Ze(new Set)
          , rt = Ze(new Set)
          , at = Ze(new Set)
          , Ce = Ze({
            nodes: {}
        });
        Vd(Ce),
        F( () => o.layouts, () => {
            var P;
            return Object.assign(Ce.nodes, (P = o.layouts.nodes) != null ? P : {})
        }
        , {
            deep: !0,
            immediate: !0
        }),
        F(Ce, () => n("update:layouts", Ce), {
            deep: !0
        });
        const un = Hc()
          , cn = R(!1);
        c.on("node:dragstart", P => cn.value = !0),
        c.on("node:dragend", P => cn.value = !1),
        c.on("view:mode", P => {
            var j, $, B, oe;
            v.view.panEnabled && (P === "default" ? (j = b.value) == null || j.enablePan() : ($ = b.value) == null || $.disablePan()),
            v.view.zoomEnabled && (P === "default" ? (B = b.value) == null || B.enableZoom() : (oe = b.value) == null || oe.disableZoom())
        }
        );
        const Ir = T( () => v.view.panEnabled || v.view.zoomEnabled || v.node.draggable)
          , {nodeStates: Cr, edgeStates: Ar, pathStates: Nr} = Xc(bn(a, J, ve), bn(s, ue, rt), bn(l, Xe, at), pt(v), Ce, o.layouts, un, N)
          , $r = T( () => dn(v.view))
          , {isBoxSelectionMode: jr, selectionBox: lo, startBoxSelection: Lr, stopBoxSelection: Dr} = yd(f, pt(Ce), pt(y), Cr, Ar, Nr, J, ue, Xe, ve, rt, at, u, $r, v, c)
          , uo = () => ({
            layouts: Ze(Ce.nodes),
            nodePositions: Oe(Ce, "nodes"),
            nodes: a,
            edges: s,
            configs: pt(v),
            scale: pt(N),
            emitter: c,
            svgPanZoom: X(b.value)
        });
        F( () => v.view.layoutHandler, (P, j) => {
            j.deactivate(),
            P.activate(uo())
        }
        );
        const {transitionWhile: Zr, transitionOption: co} = Zd()
          , Br = T( () => {
            const P = co.value;
            return P.enabled ? {
                "--transition-duration": P.duration + "ms",
                "--transition-function": P.timingFunction
            } : {}
        }
        );
        k( () => _e(this, null, function*() {
            if (v.view.onBeforeInitialDisplay) {
                const $ = v.view.onBeforeInitialDisplay();
                xc($) && (yield $)
            }
            const P = X(b.value, "svg-pan-zoom");
            v.view.layoutHandler.activate(uo()),
            yield si();
            const j = v.view.autoPanAndZoomOnLoad;
            if (v.view.fit || j !== !1) {
                const $ = Object.keys(o.nodes).length == 0
                  , B = P.getPan();
                if ($ || j === "center-zero") {
                    yield D();
                    const oe = P.getSizes();
                    P.pan({
                        x: oe.width / 2,
                        y: oe.height / 2
                    })
                } else
                    j === "fit-content" || v.view.fit ? yield Y() : j === "center-content" ? yield Z() : yield D();
                Ln( () => {
                    const oe = P.getPan();
                    B.x === oe.x && B.y === oe.y && c.emit("view:pan", oe)
                }
                )
            } else
                yield D();
            c.emit("view:load"),
            E.value = 1
        })),
        M( () => {
            E.value = 2,
            c.emit("view:unload"),
            v.view.layoutHandler.deactivate()
        }
        );
        function Rr() {
            var P;
            (P = b.value) == null || P.zoomIn()
        }
        function Wr() {
            var P;
            (P = b.value) == null || P.zoomOut()
        }
        function Hr(P) {
            var j;
            (j = b.value) == null || j.pan(P)
        }
        function Vr(P) {
            var j;
            (j = b.value) == null || j.panBy(P)
        }
        function Fr() {
            return X(b.value).getPan()
        }
        function Ur() {
            const P = X(b.value).getSizes();
            return {
                width: P.width,
                height: P.height,
                viewBox: P.viewBox
            }
        }
        function Gr(P) {
            return Cn(X(f.value, "svg"), X(g.value, "viewport"), P)
        }
        function Xr(P) {
            return dd(X(f.value, "svg"), X(g.value, "viewport"), P)
        }
        function qr() {
            return ir(X(f.value, "svg"), X(g.value, "viewport"), N.value).outerHTML
        }
        function Yr() {
            return _e(this, arguments, function*(P={}) {
                return (yield ho(P)).outerHTML
            })
        }
        function ho() {
            return _e(this, arguments, function*(P={}) {
                return fd(X(f.value, "svg"), X(g.value, "viewport"), N.value, P)
            })
        }
        t({
            fitToContents: Y,
            panToCenter: Z,
            getViewBox: W,
            setViewBox: se,
            transitionWhile: Zr,
            startBoxSelection: Lr,
            stopBoxSelection: Dr,
            zoomIn: Rr,
            zoomOut: Wr,
            panTo: Hr,
            panBy: Vr,
            getPan: Fr,
            getSizes: Ur,
            translateFromDomToSvgCoordinates: Gr,
            translateFromSvgToDomCoordinates: Xr,
            getAsSvg: qr,
            exportAsSvgText: Yr,
            exportAsSvgElement: ho
        });
        function Kr(P, j, $, B) {
            P.setZoomEnabled(j),
            j && $ ? P.enableDblClickZoom() : P.disableDblClickZoom(),
            j && B ? P.enableMouseWheelZoom() : P.disableMouseWheelZoom()
        }
        function fo(P) {
            return P.zoomEnabled && P.doubleClickZoomEnabled
        }
        function dn(P) {
            return P.zoomEnabled && P.mouseWheelZoomEnabled
        }
        function vo(P) {
            P.stopPropagation()
        }
        return (P, j) => (_(),
        A("div", {
            ref_key: "container",
            ref: p,
            class: "v-network-graph v-ng-container"
        }, [(_(),
        A("svg", {
            ref_key: "svg",
            ref: f,
            class: we(["v-ng-canvas", {
                show: S(w),
                dragging: cn.value,
                touches: S(Ir),
                "box-selection-mode": S(jr)
            }]),
            width: "100%",
            height: "100%"
        }, [(_(!0),
        A(q, null, te(S(h).root, $ => K(P.$slots, $, {
            key: $,
            scale: S(N)
        })), 128)), Object.keys(S(un).markers).length > 0 ? (_(),
        A("defs", lf, [(_(!0),
        A(q, null, te(S(un).markers, ($, B) => (_(),
        V(vh, {
            id: B,
            key: B,
            marker: $,
            scale: S(N)
        }, null, 8, ["id", "marker", "scale"]))), 128))])) : pe("", !0), S(x) ? (_(),
        V(xh, {
            key: 1
        }, {
            default: ie( () => [(_(!0),
            A(q, null, te(S(h).background, $ => (_(),
            A("g", {
                key: $,
                class: "v-ng-layer"
            }, [K(P.$slots, $, {
                scale: S(N)
            })]))), 128)), S(d) ? (_(),
            V(wh, {
                key: 0
            })) : pe("", !0), (_(!0),
            A(q, null, te(S(h).grid, $ => (_(),
            A("g", {
                key: $,
                class: "v-ng-layer"
            }, [K(P.$slots, $, {
                scale: S(N)
            })]))), 128))]),
            _: 3
        })) : pe("", !0), yi("g", {
            ref_key: "viewport",
            ref: g,
            class: we(["v-ng-viewport", {
                "v-ng-transition": S(co).enabled
            }]),
            style: zt(S(Br))
        }, [(_(!0),
        A(q, null, te(S(h).base, $ => (_(),
        A("g", {
            key: $,
            class: "v-ng-layer"
        }, [K(P.$slots, $, {
            scale: S(N)
        })]))), 128)), (_(!0),
        A(q, null, te(S(m), $ => (_(),
        A(q, {
            key: $
        }, [$ === "edges" ? (_(),
        V(Bh, {
            key: 0
        }, jn({
            _: 2
        }, ["edge-overlay"in S(r) ? {
            name: "edge-overlay",
            fn: ie(B => [K(P.$slots, "edge-overlay", ge(me(B)))]),
            key: "0"
        } : void 0]), 1024)) : $ === "edge-labels" ? (_(),
        V(Fh, {
            key: 1,
            "enable-edge-label": "edge-label"in S(r),
            "enable-edges-label": "edges-label"in S(r)
        }, {
            "edge-label": ie(B => [K(P.$slots, "edge-label", ge(me(B)))]),
            "edges-label": ie(B => [K(P.$slots, "edges-label", ge(me(B)))]),
            _: 3
        }, 8, ["enable-edge-label", "enable-edges-label"])) : $ === "focusring" ? (_(),
        V(Xh, {
            key: 2
        })) : $ === "nodes" ? (_(),
        V(Yh, {
            key: 3
        }, {
            "override-node": ie(B => [K(P.$slots, "override-node", ge(me(B)))]),
            _: 3
        })) : $ === "node-labels" ? (_(),
        V(nf, {
            key: 4
        }, {
            "override-node-label": ie(B => [K(P.$slots, "override-node-label", ge(me(B)))]),
            _: 3
        })) : $ === "paths" ? (_(),
        V(sf, {
            key: 5
        })) : pe("", !0), (_(!0),
        A(q, null, te(S(h)[$], B => (_(),
        A("g", {
            key: B,
            class: "v-ng-layer"
        }, [K(P.$slots, B, {
            scale: S(N)
        })]))), 128))], 64))), 128))], 6), S(lo) ? (_(),
        V(ah, {
            key: 2,
            box: S(lo),
            config: S(v).view.selection.box
        }, null, 8, ["box", "config"])) : pe("", !0)], 2))], 512))
    }
});
function xr(e, t) {
    var n, o = 1;
    e == null && (e = 0),
    t == null && (t = 0);
    function i() {
        var r, a = n.length, s, l = 0, u = 0;
        for (r = 0; r < a; ++r)
            s = n[r],
            l += s.x,
            u += s.y;
        for (l = (l / a - e) * o,
        u = (u / a - t) * o,
        r = 0; r < a; ++r)
            s = n[r],
            s.x -= l,
            s.y -= u
    }
    return i.initialize = function(r) {
        n = r
    }
    ,
    i.x = function(r) {
        return arguments.length ? (e = +r,
        i) : e
    }
    ,
    i.y = function(r) {
        return arguments.length ? (t = +r,
        i) : t
    }
    ,
    i.strength = function(r) {
        return arguments.length ? (o = +r,
        i) : o
    }
    ,
    i
}
function uf(e) {
    const t = +this._x.call(null, e)
      , n = +this._y.call(null, e);
    return Er(this.cover(t, n), t, n, e)
}
function Er(e, t, n, o) {
    if (isNaN(t) || isNaN(n))
        return e;
    var i, r = e._root, a = {
        data: o
    }, s = e._x0, l = e._y0, u = e._x1, c = e._y1, v, h, d, x, m, p, f, g;
    if (!r)
        return e._root = a,
        e;
    for (; r.length; )
        if ((m = t >= (v = (s + u) / 2)) ? s = v : u = v,
        (p = n >= (h = (l + c) / 2)) ? l = h : c = h,
        i = r,
        !(r = r[f = p << 1 | m]))
            return i[f] = a,
            e;
    if (d = +e._x.call(null, r.data),
    x = +e._y.call(null, r.data),
    t === d && n === x)
        return a.next = r,
        i ? i[f] = a : e._root = a,
        e;
    do
        i = i ? i[f] = new Array(4) : e._root = new Array(4),
        (m = t >= (v = (s + u) / 2)) ? s = v : u = v,
        (p = n >= (h = (l + c) / 2)) ? l = h : c = h;
    while ((f = p << 1 | m) === (g = (x >= h) << 1 | d >= v));
    return i[g] = r,
    i[f] = a,
    e
}
function cf(e) {
    var t, n, o = e.length, i, r, a = new Array(o), s = new Array(o), l = 1 / 0, u = 1 / 0, c = -1 / 0, v = -1 / 0;
    for (n = 0; n < o; ++n)
        isNaN(i = +this._x.call(null, t = e[n])) || isNaN(r = +this._y.call(null, t)) || (a[n] = i,
        s[n] = r,
        i < l && (l = i),
        i > c && (c = i),
        r < u && (u = r),
        r > v && (v = r));
    if (l > c || u > v)
        return this;
    for (this.cover(l, u).cover(c, v),
    n = 0; n < o; ++n)
        Er(this, a[n], s[n], e[n]);
    return this
}
function df(e, t) {
    if (isNaN(e = +e) || isNaN(t = +t))
        return this;
    var n = this._x0
      , o = this._y0
      , i = this._x1
      , r = this._y1;
    if (isNaN(n))
        i = (n = Math.floor(e)) + 1,
        r = (o = Math.floor(t)) + 1;
    else {
        for (var a = i - n || 1, s = this._root, l, u; n > e || e >= i || o > t || t >= r; )
            switch (u = (t < o) << 1 | e < n,
            l = new Array(4),
            l[u] = s,
            s = l,
            a *= 2,
            u) {
            case 0:
                i = n + a,
                r = o + a;
                break;
            case 1:
                n = i - a,
                r = o + a;
                break;
            case 2:
                i = n + a,
                o = r - a;
                break;
            case 3:
                n = i - a,
                o = r - a;
                break
            }
        this._root && this._root.length && (this._root = s)
    }
    return this._x0 = n,
    this._y0 = o,
    this._x1 = i,
    this._y1 = r,
    this
}
function hf() {
    var e = [];
    return this.visit(function(t) {
        if (!t.length)
            do
                e.push(t.data);
            while (t = t.next)
    }),
    e
}
function ff(e) {
    return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
}
function he(e, t, n, o, i) {
    this.node = e,
    this.x0 = t,
    this.y0 = n,
    this.x1 = o,
    this.y1 = i
}
function vf(e, t, n) {
    var o, i = this._x0, r = this._y0, a, s, l, u, c = this._x1, v = this._y1, h = [], d = this._root, x, m;
    for (d && h.push(new he(d,i,r,c,v)),
    n == null ? n = 1 / 0 : (i = e - n,
    r = t - n,
    c = e + n,
    v = t + n,
    n *= n); x = h.pop(); )
        if (!(!(d = x.node) || (a = x.x0) > c || (s = x.y0) > v || (l = x.x1) < i || (u = x.y1) < r))
            if (d.length) {
                var p = (a + l) / 2
                  , f = (s + u) / 2;
                h.push(new he(d[3],p,f,l,u), new he(d[2],a,f,p,u), new he(d[1],p,s,l,f), new he(d[0],a,s,p,f)),
                (m = (t >= f) << 1 | e >= p) && (x = h[h.length - 1],
                h[h.length - 1] = h[h.length - 1 - m],
                h[h.length - 1 - m] = x)
            } else {
                var g = e - +this._x.call(null, d.data)
                  , E = t - +this._y.call(null, d.data)
                  , w = g * g + E * E;
                if (w < n) {
                    var y = Math.sqrt(n = w);
                    i = e - y,
                    r = t - y,
                    c = e + y,
                    v = t + y,
                    o = d.data
                }
            }
    return o
}
function pf(e) {
    if (isNaN(c = +this._x.call(null, e)) || isNaN(v = +this._y.call(null, e)))
        return this;
    var t, n = this._root, o, i, r, a = this._x0, s = this._y0, l = this._x1, u = this._y1, c, v, h, d, x, m, p, f;
    if (!n)
        return this;
    if (n.length)
        for (; ; ) {
            if ((x = c >= (h = (a + l) / 2)) ? a = h : l = h,
            (m = v >= (d = (s + u) / 2)) ? s = d : u = d,
            t = n,
            !(n = n[p = m << 1 | x]))
                return this;
            if (!n.length)
                break;
            (t[p + 1 & 3] || t[p + 2 & 3] || t[p + 3 & 3]) && (o = t,
            f = p)
        }
    for (; n.data !== e; )
        if (i = n,
        !(n = n.next))
            return this;
    return (r = n.next) && delete n.next,
    i ? (r ? i.next = r : delete i.next,
    this) : t ? (r ? t[p] = r : delete t[p],
    (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (o ? o[f] = n : this._root = n),
    this) : (this._root = r,
    this)
}
function gf(e) {
    for (var t = 0, n = e.length; t < n; ++t)
        this.remove(e[t]);
    return this
}
function mf() {
    return this._root
}
function yf() {
    var e = 0;
    return this.visit(function(t) {
        if (!t.length)
            do
                ++e;
            while (t = t.next)
    }),
    e
}
function bf(e) {
    var t = [], n, o = this._root, i, r, a, s, l;
    for (o && t.push(new he(o,this._x0,this._y0,this._x1,this._y1)); n = t.pop(); )
        if (!e(o = n.node, r = n.x0, a = n.y0, s = n.x1, l = n.y1) && o.length) {
            var u = (r + s) / 2
              , c = (a + l) / 2;
            (i = o[3]) && t.push(new he(i,u,c,s,l)),
            (i = o[2]) && t.push(new he(i,r,c,u,l)),
            (i = o[1]) && t.push(new he(i,u,a,s,c)),
            (i = o[0]) && t.push(new he(i,r,a,u,c))
        }
    return this
}
function wf(e) {
    var t = [], n = [], o;
    for (this._root && t.push(new he(this._root,this._x0,this._y0,this._x1,this._y1)); o = t.pop(); ) {
        var i = o.node;
        if (i.length) {
            var r, a = o.x0, s = o.y0, l = o.x1, u = o.y1, c = (a + l) / 2, v = (s + u) / 2;
            (r = i[0]) && t.push(new he(r,a,s,c,v)),
            (r = i[1]) && t.push(new he(r,c,s,l,v)),
            (r = i[2]) && t.push(new he(r,a,v,c,u)),
            (r = i[3]) && t.push(new he(r,c,v,l,u))
        }
        n.push(o)
    }
    for (; o = n.pop(); )
        e(o.node, o.x0, o.y0, o.x1, o.y1);
    return this
}
function xf(e) {
    return e[0]
}
function Ef(e) {
    return arguments.length ? (this._x = e,
    this) : this._x
}
function Sf(e) {
    return e[1]
}
function kf(e) {
    return arguments.length ? (this._y = e,
    this) : this._y
}
function ao(e, t, n) {
    var o = new so(t ?? xf,n ?? Sf,NaN,NaN,NaN,NaN);
    return e == null ? o : o.addAll(e)
}
function so(e, t, n, o, i, r) {
    this._x = e,
    this._y = t,
    this._x0 = n,
    this._y0 = o,
    this._x1 = i,
    this._y1 = r,
    this._root = void 0
}
function di(e) {
    for (var t = {
        data: e.data
    }, n = t; e = e.next; )
        n = n.next = {
            data: e.data
        };
    return t
}
var fe = ao.prototype = so.prototype;
fe.copy = function() {
    var e = new so(this._x,this._y,this._x0,this._y0,this._x1,this._y1), t = this._root, n, o;
    if (!t)
        return e;
    if (!t.length)
        return e._root = di(t),
        e;
    for (n = [{
        source: t,
        target: e._root = new Array(4)
    }]; t = n.pop(); )
        for (var i = 0; i < 4; ++i)
            (o = t.source[i]) && (o.length ? n.push({
                source: o,
                target: t.target[i] = new Array(4)
            }) : t.target[i] = di(o));
    return e
}
;
fe.add = uf;
fe.addAll = cf;
fe.cover = df;
fe.data = hf;
fe.extent = ff;
fe.find = vf;
fe.remove = pf;
fe.removeAll = gf;
fe.root = mf;
fe.size = yf;
fe.visit = bf;
fe.visitAfter = wf;
fe.x = Ef;
fe.y = kf;
function ae(e) {
    return function() {
        return e
    }
}
function Re(e) {
    return (e() - .5) * 1e-6
}
function Pf(e) {
    return e.x + e.vx
}
function Mf(e) {
    return e.y + e.vy
}
function Sr(e) {
    var t, n, o, i = 1, r = 1;
    typeof e != "function" && (e = ae(e == null ? 1 : +e));
    function a() {
        for (var u, c = t.length, v, h, d, x, m, p, f = 0; f < r; ++f)
            for (v = ao(t, Pf, Mf).visitAfter(s),
            u = 0; u < c; ++u)
                h = t[u],
                m = n[h.index],
                p = m * m,
                d = h.x + h.vx,
                x = h.y + h.vy,
                v.visit(g);
        function g(E, w, y, b, k) {
            var M = E.data
              , z = E.r
              , O = m + z;
            if (M) {
                if (M.index > h.index) {
                    var I = d - M.x - M.vx
                      , N = x - M.y - M.vy
                      , D = I * I + N * N;
                    D < O * O && (I === 0 && (I = Re(o),
                    D += I * I),
                    N === 0 && (N = Re(o),
                    D += N * N),
                    D = (O - (D = Math.sqrt(D))) / D * i,
                    h.vx += (I *= D) * (O = (z *= z) / (p + z)),
                    h.vy += (N *= D) * O,
                    M.vx -= I * (O = 1 - O),
                    M.vy -= N * O)
                }
                return
            }
            return w > d + O || b < d - O || y > x + O || k < x - O
        }
    }
    function s(u) {
        if (u.data)
            return u.r = n[u.data.index];
        for (var c = u.r = 0; c < 4; ++c)
            u[c] && u[c].r > u.r && (u.r = u[c].r)
    }
    function l() {
        if (t) {
            var u, c = t.length, v;
            for (n = new Array(c),
            u = 0; u < c; ++u)
                v = t[u],
                n[v.index] = +e(v, u, t)
        }
    }
    return a.initialize = function(u, c) {
        t = u,
        o = c,
        l()
    }
    ,
    a.iterations = function(u) {
        return arguments.length ? (r = +u,
        a) : r
    }
    ,
    a.strength = function(u) {
        return arguments.length ? (i = +u,
        a) : i
    }
    ,
    a.radius = function(u) {
        return arguments.length ? (e = typeof u == "function" ? u : ae(+u),
        l(),
        a) : e
    }
    ,
    a
}
function _f(e) {
    return e.index
}
function hi(e, t) {
    var n = e.get(t);
    if (!n)
        throw new Error("node not found: " + t);
    return n
}
function kr(e) {
    var t = _f, n = v, o, i = ae(30), r, a, s, l, u, c = 1;
    e == null && (e = []);
    function v(p) {
        return 1 / Math.min(s[p.source.index], s[p.target.index])
    }
    function h(p) {
        for (var f = 0, g = e.length; f < c; ++f)
            for (var E = 0, w, y, b, k, M, z, O; E < g; ++E)
                w = e[E],
                y = w.source,
                b = w.target,
                k = b.x + b.vx - y.x - y.vx || Re(u),
                M = b.y + b.vy - y.y - y.vy || Re(u),
                z = Math.sqrt(k * k + M * M),
                z = (z - r[E]) / z * p * o[E],
                k *= z,
                M *= z,
                b.vx -= k * (O = l[E]),
                b.vy -= M * O,
                y.vx += k * (O = 1 - O),
                y.vy += M * O
    }
    function d() {
        if (a) {
            var p, f = a.length, g = e.length, E = new Map(a.map( (y, b) => [t(y, b, a), y])), w;
            for (p = 0,
            s = new Array(f); p < g; ++p)
                w = e[p],
                w.index = p,
                typeof w.source != "object" && (w.source = hi(E, w.source)),
                typeof w.target != "object" && (w.target = hi(E, w.target)),
                s[w.source.index] = (s[w.source.index] || 0) + 1,
                s[w.target.index] = (s[w.target.index] || 0) + 1;
            for (p = 0,
            l = new Array(g); p < g; ++p)
                w = e[p],
                l[p] = s[w.source.index] / (s[w.source.index] + s[w.target.index]);
            o = new Array(g),
            x(),
            r = new Array(g),
            m()
        }
    }
    function x() {
        if (a)
            for (var p = 0, f = e.length; p < f; ++p)
                o[p] = +n(e[p], p, e)
    }
    function m() {
        if (a)
            for (var p = 0, f = e.length; p < f; ++p)
                r[p] = +i(e[p], p, e)
    }
    return h.initialize = function(p, f) {
        a = p,
        u = f,
        d()
    }
    ,
    h.links = function(p) {
        return arguments.length ? (e = p,
        d(),
        h) : e
    }
    ,
    h.id = function(p) {
        return arguments.length ? (t = p,
        h) : t
    }
    ,
    h.iterations = function(p) {
        return arguments.length ? (c = +p,
        h) : c
    }
    ,
    h.strength = function(p) {
        return arguments.length ? (n = typeof p == "function" ? p : ae(+p),
        x(),
        h) : n
    }
    ,
    h.distance = function(p) {
        return arguments.length ? (i = typeof p == "function" ? p : ae(+p),
        m(),
        h) : i
    }
    ,
    h
}
var ht = 0, wt = 0, bt = 0, Pr = 1e3, qt, xt, Yt = 0, et = 0, ln = 0, Tt = typeof performance == "object" && performance.now ? performance : Date, Mr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17)
}
;
function _r() {
    return et || (Mr(Of),
    et = Tt.now() + ln)
}
function Of() {
    et = 0
}
function Nn() {
    this._call = this._time = this._next = null
}
Nn.prototype = Or.prototype = {
    constructor: Nn,
    restart: function(e, t, n) {
        if (typeof e != "function")
            throw new TypeError("callback is not a function");
        n = (n == null ? _r() : +n) + (t == null ? 0 : +t),
        !this._next && xt !== this && (xt ? xt._next = this : qt = this,
        xt = this),
        this._call = e,
        this._time = n,
        $n()
    },
    stop: function() {
        this._call && (this._call = null,
        this._time = 1 / 0,
        $n())
    }
};
function Or(e, t, n) {
    var o = new Nn;
    return o.restart(e, t, n),
    o
}
function Tf() {
    _r(),
    ++ht;
    for (var e = qt, t; e; )
        (t = et - e._time) >= 0 && e._call.call(void 0, t),
        e = e._next;
    --ht
}
function fi() {
    et = (Yt = Tt.now()) + ln,
    ht = wt = 0;
    try {
        Tf()
    } finally {
        ht = 0,
        If(),
        et = 0
    }
}
function zf() {
    var e = Tt.now()
      , t = e - Yt;
    t > Pr && (ln -= t,
    Yt = e)
}
function If() {
    for (var e, t = qt, n, o = 1 / 0; t; )
        t._call ? (o > t._time && (o = t._time),
        e = t,
        t = t._next) : (n = t._next,
        t._next = null,
        t = e ? e._next = n : qt = n);
    xt = e,
    $n(o)
}
function $n(e) {
    if (!ht) {
        wt && (wt = clearTimeout(wt));
        var t = e - et;
        t > 24 ? (e < 1 / 0 && (wt = setTimeout(fi, e - Tt.now() - ln)),
        bt && (bt = clearInterval(bt))) : (bt || (Yt = Tt.now(),
        bt = setInterval(zf, Pr)),
        ht = 1,
        Mr(fi))
    }
}
const Cf = 1664525
  , Af = 1013904223
  , vi = 4294967296;
function Nf() {
    let e = 1;
    return () => (e = (Cf * e + Af) % vi) / vi
}
function $f(e) {
    return e.x
}
function jf(e) {
    return e.y
}
var Lf = 10
  , Df = Math.PI * (3 - Math.sqrt(5));
function Tr(e) {
    var t, n = 1, o = .001, i = 1 - Math.pow(o, 1 / 300), r = 0, a = .6, s = new Map, l = Or(v), u = oa("tick", "end"), c = Nf();
    e == null && (e = []);
    function v() {
        h(),
        u.call("tick", t),
        n < o && (l.stop(),
        u.call("end", t))
    }
    function h(m) {
        var p, f = e.length, g;
        m === void 0 && (m = 1);
        for (var E = 0; E < m; ++E)
            for (n += (r - n) * i,
            s.forEach(function(w) {
                w(n)
            }),
            p = 0; p < f; ++p)
                g = e[p],
                g.fx == null ? g.x += g.vx *= a : (g.x = g.fx,
                g.vx = 0),
                g.fy == null ? g.y += g.vy *= a : (g.y = g.fy,
                g.vy = 0);
        return t
    }
    function d() {
        for (var m = 0, p = e.length, f; m < p; ++m) {
            if (f = e[m],
            f.index = m,
            f.fx != null && (f.x = f.fx),
            f.fy != null && (f.y = f.fy),
            isNaN(f.x) || isNaN(f.y)) {
                var g = Lf * Math.sqrt(.5 + m)
                  , E = m * Df;
                f.x = g * Math.cos(E),
                f.y = g * Math.sin(E)
            }
            (isNaN(f.vx) || isNaN(f.vy)) && (f.vx = f.vy = 0)
        }
    }
    function x(m) {
        return m.initialize && m.initialize(e, c),
        m
    }
    return d(),
    t = {
        tick: h,
        restart: function() {
            return l.restart(v),
            t
        },
        stop: function() {
            return l.stop(),
            t
        },
        nodes: function(m) {
            return arguments.length ? (e = m,
            d(),
            s.forEach(x),
            t) : e
        },
        alpha: function(m) {
            return arguments.length ? (n = +m,
            t) : n
        },
        alphaMin: function(m) {
            return arguments.length ? (o = +m,
            t) : o
        },
        alphaDecay: function(m) {
            return arguments.length ? (i = +m,
            t) : +i
        },
        alphaTarget: function(m) {
            return arguments.length ? (r = +m,
            t) : r
        },
        velocityDecay: function(m) {
            return arguments.length ? (a = 1 - m,
            t) : 1 - a
        },
        randomSource: function(m) {
            return arguments.length ? (c = m,
            s.forEach(x),
            t) : c
        },
        force: function(m, p) {
            return arguments.length > 1 ? (p == null ? s.delete(m) : s.set(m, x(p)),
            t) : s.get(m)
        },
        find: function(m, p, f) {
            var g = 0, E = e.length, w, y, b, k, M;
            for (f == null ? f = 1 / 0 : f *= f,
            g = 0; g < E; ++g)
                k = e[g],
                w = m - k.x,
                y = p - k.y,
                b = w * w + y * y,
                b < f && (M = k,
                f = b);
            return M
        },
        on: function(m, p) {
            return arguments.length > 1 ? (u.on(m, p),
            t) : u.on(m)
        }
    }
}
function zr() {
    var e, t, n, o, i = ae(-30), r, a = 1, s = 1 / 0, l = .81;
    function u(d) {
        var x, m = e.length, p = ao(e, $f, jf).visitAfter(v);
        for (o = d,
        x = 0; x < m; ++x)
            t = e[x],
            p.visit(h)
    }
    function c() {
        if (e) {
            var d, x = e.length, m;
            for (r = new Array(x),
            d = 0; d < x; ++d)
                m = e[d],
                r[m.index] = +i(m, d, e)
        }
    }
    function v(d) {
        var x = 0, m, p, f = 0, g, E, w;
        if (d.length) {
            for (g = E = w = 0; w < 4; ++w)
                (m = d[w]) && (p = Math.abs(m.value)) && (x += m.value,
                f += p,
                g += p * m.x,
                E += p * m.y);
            d.x = g / f,
            d.y = E / f
        } else {
            m = d,
            m.x = m.data.x,
            m.y = m.data.y;
            do
                x += r[m.data.index];
            while (m = m.next)
        }
        d.value = x
    }
    function h(d, x, m, p) {
        if (!d.value)
            return !0;
        var f = d.x - t.x
          , g = d.y - t.y
          , E = p - x
          , w = f * f + g * g;
        if (E * E / l < w)
            return w < s && (f === 0 && (f = Re(n),
            w += f * f),
            g === 0 && (g = Re(n),
            w += g * g),
            w < a && (w = Math.sqrt(a * w)),
            t.vx += f * d.value * o / w,
            t.vy += g * d.value * o / w),
            !0;
        if (d.length || w >= s)
            return;
        (d.data !== t || d.next) && (f === 0 && (f = Re(n),
        w += f * f),
        g === 0 && (g = Re(n),
        w += g * g),
        w < a && (w = Math.sqrt(a * w)));
        do
            d.data !== t && (E = r[d.data.index] * o / w,
            t.vx += f * E,
            t.vy += g * E);
        while (d = d.next)
    }
    return u.initialize = function(d, x) {
        e = d,
        n = x,
        c()
    }
    ,
    u.strength = function(d) {
        return arguments.length ? (i = typeof d == "function" ? d : ae(+d),
        c(),
        u) : i
    }
    ,
    u.distanceMin = function(d) {
        return arguments.length ? (a = d * d,
        u) : Math.sqrt(a)
    }
    ,
    u.distanceMax = function(d) {
        return arguments.length ? (s = d * d,
        u) : Math.sqrt(s)
    }
    ,
    u.theta = function(d) {
        return arguments.length ? (l = d * d,
        u) : Math.sqrt(l)
    }
    ,
    u
}
function Zf(e, t, n) {
    var o, i = ae(.1), r, a;
    typeof e != "function" && (e = ae(+e)),
    t == null && (t = 0),
    n == null && (n = 0);
    function s(u) {
        for (var c = 0, v = o.length; c < v; ++c) {
            var h = o[c]
              , d = h.x - t || 1e-6
              , x = h.y - n || 1e-6
              , m = Math.sqrt(d * d + x * x)
              , p = (a[c] - m) * r[c] * u / m;
            h.vx += d * p,
            h.vy += x * p
        }
    }
    function l() {
        if (o) {
            var u, c = o.length;
            for (r = new Array(c),
            a = new Array(c),
            u = 0; u < c; ++u)
                a[u] = +e(o[u], u, o),
                r[u] = isNaN(a[u]) ? 0 : +i(o[u], u, o)
        }
    }
    return s.initialize = function(u) {
        o = u,
        l()
    }
    ,
    s.strength = function(u) {
        return arguments.length ? (i = typeof u == "function" ? u : ae(+u),
        l(),
        s) : i
    }
    ,
    s.radius = function(u) {
        return arguments.length ? (e = typeof u == "function" ? u : ae(+u),
        l(),
        s) : e
    }
    ,
    s.x = function(u) {
        return arguments.length ? (t = +u,
        s) : t
    }
    ,
    s.y = function(u) {
        return arguments.length ? (n = +u,
        s) : n
    }
    ,
    s
}
function Bf(e) {
    var t = ae(.1), n, o, i;
    typeof e != "function" && (e = ae(e == null ? 0 : +e));
    function r(s) {
        for (var l = 0, u = n.length, c; l < u; ++l)
            c = n[l],
            c.vx += (i[l] - c.x) * o[l] * s
    }
    function a() {
        if (n) {
            var s, l = n.length;
            for (o = new Array(l),
            i = new Array(l),
            s = 0; s < l; ++s)
                o[s] = isNaN(i[s] = +e(n[s], s, n)) ? 0 : +t(n[s], s, n)
        }
    }
    return r.initialize = function(s) {
        n = s,
        a()
    }
    ,
    r.strength = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : ae(+s),
        a(),
        r) : t
    }
    ,
    r.x = function(s) {
        return arguments.length ? (e = typeof s == "function" ? s : ae(+s),
        a(),
        r) : e
    }
    ,
    r
}
function Rf(e) {
    var t = ae(.1), n, o, i;
    typeof e != "function" && (e = ae(e == null ? 0 : +e));
    function r(s) {
        for (var l = 0, u = n.length, c; l < u; ++l)
            c = n[l],
            c.vy += (i[l] - c.y) * o[l] * s
    }
    function a() {
        if (n) {
            var s, l = n.length;
            for (o = new Array(l),
            i = new Array(l),
            s = 0; s < l; ++s)
                o[s] = isNaN(i[s] = +e(n[s], s, n)) ? 0 : +t(n[s], s, n)
        }
    }
    return r.initialize = function(s) {
        n = s,
        a()
    }
    ,
    r.strength = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : ae(+s),
        a(),
        r) : t
    }
    ,
    r.y = function(s) {
        return arguments.length ? (e = typeof s == "function" ? s : ae(+s),
        a(),
        r) : e
    }
    ,
    r
}
const Wf = Object.freeze(Object.defineProperty({
    __proto__: null,
    forceCenter: xr,
    forceCollide: Sr,
    forceLink: kr,
    forceManyBody: zr,
    forceRadial: Zf,
    forceSimulation: Tr,
    forceX: Bf,
    forceY: Rf
}, Symbol.toStringTag, {
    value: "Module"
}));
var Hf = Object.defineProperty
  , Vf = Object.defineProperties
  , Ff = Object.getOwnPropertyDescriptors
  , pi = Object.getOwnPropertySymbols
  , Uf = Object.prototype.hasOwnProperty
  , Gf = Object.prototype.propertyIsEnumerable
  , gi = (e, t, n) => t in e ? Hf(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , mi = (e, t) => {
    for (var n in t || (t = {}))
        Uf.call(t, n) && gi(e, n, t[n]);
    if (pi)
        for (var n of pi(t))
            Gf.call(t, n) && gi(e, n, t[n]);
    return e
}
  , Xf = (e, t) => Vf(e, Ff(t));
class Jf {
    constructor(t={}) {
        this.options = t
    }
    activate(t) {
        const {nodePositions: n, nodes: o, edges: i, emitter: r} = t;
        let {nodeLayouts: a, nodeLayoutMap: s} = this.buildNodeLayouts(o.value, n);
        const l = this.createSimulation(a, this.forceLayoutEdges(i.value, o.value));
        this.onTick = () => {
            var x, m, p, f, g;
            for (const E of a) {
                const w = (x = n.value) == null ? void 0 : x[E.id];
                if (w) {
                    const y = (m = E.x) != null ? m : 0
                      , b = (p = E.y) != null ? p : 0;
                    (w.x !== y || w.y !== b) && Object.assign(w, {
                        x: y,
                        y: b
                    })
                } else
                    n.value[E.id] = {
                        x: (f = E.x) != null ? f : 0,
                        y: (g = E.y) != null ? g : 0
                    }
            }
        }
        ,
        l.on("tick", this.onTick),
        this.onTick();
        const u = () => {
            this.options.noAutoRestartSimulation || l.alpha(.1).restart()
        }
          , c = x => {
            var m;
            if (this.options.noAutoRestartSimulation)
                for (const [p,f] of Object.entries(x)) {
                    const g = (m = n.value) == null ? void 0 : m[p];
                    g.x = f.x,
                    g.y = f.y
                }
            else {
                for (const [p,f] of Object.entries(x)) {
                    const g = s[p];
                    g.fx = f.x,
                    g.fy = f.y
                }
                u()
            }
        }
          , v = x => {
            var m;
            for (const [p,f] of Object.entries(x)) {
                const g = this.getNodeLayout(n, p)
                  , E = (m = s == null ? void 0 : s[p]) != null ? m : {
                    x: 0,
                    y: 0
                };
                g.value.fixed || this.options.positionFixedByDrag ? (E.fx = f.x,
                E.fy = f.y,
                g.value.fixed = !0) : (E.x = f.x,
                E.y = f.y,
                delete E.fx,
                delete E.fy)
            }
            u()
        }
          , h = ({node: x, event: m}) => {
            if (this.options.positionFixedByClickWithAltKey && m.altKey) {
                const p = this.getNodeLayout(n, x);
                let f = s == null ? void 0 : s[x];
                f || (f = {
                    id: x,
                    x: 0,
                    y: 0
                },
                s[x] = f),
                p.value.fixed ? (delete p.value.fixed,
                f.x = f.fx || f.x,
                f.y = f.fy || f.y,
                delete f.fx,
                delete f.fy) : (p.value.fixed = !0,
                f.fx = f.x,
                f.fy = f.y),
                u()
            }
        }
          , d = F( () => [Object.keys(o.value), Object.keys(n.value), Object.values(i.value).map(x => `${x.source}=${x.target}`)], () => {
            ({nodeLayouts: a, nodeLayoutMap: s} = this.buildNodeLayouts(o.value, n)),
            l.nodes(a);
            const x = l.force("edge");
            x && x.links(this.forceLayoutEdges(i.value, o.value)),
            u()
        }
        );
        r.on("node:dragstart", c),
        r.on("node:pointermove", c),
        r.on("node:dragend", v),
        r.on("node:click", h),
        this.onDeactivate = () => {
            l.stop(),
            d(),
            r.off("node:dragstart", c),
            r.off("node:pointermove", c),
            r.off("node:dragend", v),
            r.off("node:click", h)
        }
    }
    deactivate() {
        this.onDeactivate && this.onDeactivate(),
        this.onTick = void 0
    }
    ticked() {
        var t;
        (t = this.onTick) == null || t.call(this)
    }
    createSimulation(t, n) {
        if (this.options.createSimulation)
            return this.options.createSimulation(Wf, t, n);
        {
            const o = kr(n).id(i => i.id);
            return Tr(t).force("edge", o.distance(100)).force("charge", zr()).force("collide", Sr(50).strength(.2)).force("center", xr().strength(.05)).alphaMin(.001)
        }
    }
    buildNodeLayouts(t, n) {
        const o = Object.keys(t).filter(a => !(a in n.value))
          , i = this.forceNodeLayouts(n.value, o)
          , r = Object.fromEntries(i.map(a => [a.id, a]));
        return {
            nodeLayouts: i,
            nodeLayoutMap: r
        }
    }
    forceNodeLayouts(t, n) {
        const o = Object.entries(t).map( ([i,r]) => r.fixed ? Xf(mi({
            id: i
        }, r), {
            fx: r.x,
            fy: r.y
        }) : mi({
            id: i
        }, r));
        return n.map(i => ({
            id: i
        })).forEach(i => o.push(i)),
        o
    }
    forceLayoutEdges(t, n) {
        return Object.values(t).filter(o => o.source in n && o.target in n).map(o => ({
            source: o.source,
            target: o.target
        }))
    }
    getNodeLayout(t, n) {
        const o = Oe(t.value, n);
        return o.value || (o.value = {
            x: 0,
            y: 0
        }),
        o
    }
}
export {Kf as J, Jf as K, Qf as V, kr as a, Bf as b, Rf as c, zr as d, Tr as f};
