import {s as pt, x as Jo, y as he, z as ut, A as Dt, B as Qo, C as Gt, D as cr, k as re, j as _e, E as dr, G as fr, o as fe, c as me, b as Be, H as $n, m as Ze, u as Q, d as ct, n as He, I as qn, J as hr, K as gr, L as ve, M as Ve, N as vr, O as pr, l as ye, P as qe, Q as mr, a as nt, R as jo, e as $e, p as dt, F as De, t as Dn, f as Jn, S as ei, T as yr, U as de, V as _r, W as wr, q as ge, r as ti, X as Et, Y as br} from "../vendor-DIc2GtcL.js";
function an(e) {
    return Qo() ? (Gt(e),
    !0) : !1
}
function ze(e) {
    return typeof e == "function" ? e() : Q(e)
}
const xr = typeof window < "u" && typeof document < "u"
  , Er = e => typeof e < "u"
  , Sr = Object.prototype.toString
  , Nr = e => Sr.call(e) === "[object Object]"
  , Cr = () => {}
;
function Mr(e, t) {
    function n(...o) {
        return new Promise( (i, r) => {
            Promise.resolve(e( () => t.apply(this, o), {
                fn: t,
                thisArg: this,
                args: o
            })).then(i).catch(r)
        }
        )
    }
    return n
}
const ni = e => e();
function Ir(e=ni) {
    const t = ve(!0);
    function n() {
        t.value = !1
    }
    function o() {
        t.value = !0
    }
    const i = (...r) => {
        t.value && e(...r)
    }
    ;
    return {
        isActive: br(t),
        pause: n,
        resume: o,
        eventFilter: i
    }
}
function lo(e, t=!1, n="Timeout") {
    return new Promise( (o, i) => {
        setTimeout(t ? () => i(n) : o, e)
    }
    )
}
function Tr(e, t, n={}) {
    const {eventFilter: o=ni, ...i} = n;
    return he(e, Mr(o, t), i)
}
function rt(e, t, n={}) {
    const {eventFilter: o, ...i} = n
      , {eventFilter: r, pause: s, resume: a, isActive: l} = Ir(o);
    return {
        stop: Tr(e, t, {
            ...i,
            eventFilter: r
        }),
        pause: s,
        resume: a,
        isActive: l
    }
}
function kr(e, t={}) {
    if (!qn(e))
        return hr(e);
    const n = Array.isArray(e.value) ? Array.from({
        length: e.value.length
    }) : {};
    for (const o in e.value)
        n[o] = gr( () => ({
            get() {
                return e.value[o]
            },
            set(i) {
                var r;
                if ((r = ze(t.replaceRef)) != null ? r : !0)
                    if (Array.isArray(e.value)) {
                        const a = [...e.value];
                        a[o] = i,
                        e.value = a
                    } else {
                        const a = {
                            ...e.value,
                            [o]: i
                        };
                        Object.setPrototypeOf(a, Object.getPrototypeOf(e.value)),
                        e.value = a
                    }
                else
                    e.value[o] = i
            }
        }));
    return n
}
function An(e, t=!1) {
    function n(d, {flush: m="sync", deep: p=!1, timeout: C, throwOnTimeout: x}={}) {
        let E = null;
        const M = [new Promise(_ => {
            E = he(e, S => {
                d(S) !== t && (E == null || E(),
                _(S))
            }
            , {
                flush: m,
                deep: p,
                immediate: !0
            })
        }
        )];
        return C != null && M.push(lo(C, x).then( () => ze(e)).finally( () => E == null ? void 0 : E())),
        Promise.race(M)
    }
    function o(d, m) {
        if (!qn(d))
            return n(S => S === d, m);
        const {flush: p="sync", deep: C=!1, timeout: x, throwOnTimeout: E} = m ?? {};
        let N = null;
        const _ = [new Promise(S => {
            N = he([e, d], ([D,L]) => {
                t !== (D === L) && (N == null || N(),
                S(D))
            }
            , {
                flush: p,
                deep: C,
                immediate: !0
            })
        }
        )];
        return x != null && _.push(lo(x, E).then( () => ze(e)).finally( () => (N == null || N(),
        ze(e)))),
        Promise.race(_)
    }
    function i(d) {
        return n(m => !!m, d)
    }
    function r(d) {
        return o(null, d)
    }
    function s(d) {
        return o(void 0, d)
    }
    function a(d) {
        return n(Number.isNaN, d)
    }
    function l(d, m) {
        return n(p => {
            const C = Array.from(p);
            return C.includes(d) || C.includes(ze(d))
        }
        , m)
    }
    function u(d) {
        return c(1, d)
    }
    function c(d=1, m) {
        let p = -1;
        return n( () => (p += 1,
        p >= d), m)
    }
    return Array.isArray(ze(e)) ? {
        toMatch: n,
        toContains: l,
        changed: u,
        changedTimes: c,
        get not() {
            return An(e, !t)
        }
    } : {
        toMatch: n,
        toBe: o,
        toBeTruthy: i,
        toBeNull: r,
        toBeNaN: a,
        toBeUndefined: s,
        changed: u,
        changedTimes: c,
        get not() {
            return An(e, !t)
        }
    }
}
function On(e) {
    return An(e)
}
function Pr(e) {
    var t;
    const n = ze(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const oi = xr ? window : void 0;
function ii(...e) {
    let t, n, o, i;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,o,i] = e,
    t = oi) : [t,n,o,i] = e,
    !t)
        return Cr;
    Array.isArray(n) || (n = [n]),
    Array.isArray(o) || (o = [o]);
    const r = []
      , s = () => {
        r.forEach(c => c()),
        r.length = 0
    }
      , a = (c, d, m, p) => (c.addEventListener(d, m, p),
    () => c.removeEventListener(d, m, p))
      , l = he( () => [Pr(t), ze(i)], ([c,d]) => {
        if (s(),
        !c)
            return;
        const m = Nr(d) ? {
            ...d
        } : d;
        r.push(...n.flatMap(p => o.map(C => a(c, p, C, m))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , u = () => {
        l(),
        s()
    }
    ;
    return an(u),
    u
}
function $r(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}
function uo(...e) {
    let t, n, o = {};
    e.length === 3 ? (t = e[0],
    n = e[1],
    o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0,
    n = e[0],
    o = e[1]) : (t = e[0],
    n = e[1]) : (t = !0,
    n = e[0]);
    const {target: i=oi, eventName: r="keydown", passive: s=!1, dedupe: a=!1} = o
      , l = $r(t);
    return ii(i, r, c => {
        c.repeat && ze(a) || l(c) && n(c)
    }
    , s)
}
function Dr(e) {
    return JSON.parse(JSON.stringify(e))
}
function wn(e, t, n, o={}) {
    var i, r, s;
    const {clone: a=!1, passive: l=!1, eventName: u, deep: c=!1, defaultValue: d, shouldEmit: m} = o
      , p = Dt()
      , C = n || (p == null ? void 0 : p.emit) || ((i = p == null ? void 0 : p.$emit) == null ? void 0 : i.bind(p)) || ((s = (r = p == null ? void 0 : p.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(p == null ? void 0 : p.proxy));
    let x = u;
    t || (t = "modelValue"),
    x = x || `update:${t.toString()}`;
    const E = _ => a ? typeof a == "function" ? a(_) : Dr(_) : _
      , N = () => Er(e[t]) ? E(e[t]) : d
      , M = _ => {
        m ? m(_) && C(x, _) : C(x, _)
    }
    ;
    if (l) {
        const _ = N()
          , S = ve(_);
        let D = !1;
        return he( () => e[t], L => {
            D || (D = !0,
            S.value = E(L),
            Ve( () => D = !1))
        }
        ),
        he(S, L => {
            !D && (L !== e[t] || c) && M(L)
        }
        , {
            deep: c
        }),
        S
    } else
        return re({
            get() {
                return N()
            },
            set(_) {
                M(_)
            }
        })
}
var Ar = {
    value: () => {}
};
function ln() {
    for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
        if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o))
            throw new Error("illegal type: " + o);
        n[o] = []
    }
    return new Xt(n)
}
function Xt(e) {
    this._ = e
}
function Or(e, t) {
    return e.trim().split(/^|\s+/).map(function(n) {
        var o = ""
          , i = n.indexOf(".");
        if (i >= 0 && (o = n.slice(i + 1),
        n = n.slice(0, i)),
        n && !t.hasOwnProperty(n))
            throw new Error("unknown type: " + n);
        return {
            type: n,
            name: o
        }
    })
}
Xt.prototype = ln.prototype = {
    constructor: Xt,
    on: function(e, t) {
        var n = this._, o = Or(e + "", n), i, r = -1, s = o.length;
        if (arguments.length < 2) {
            for (; ++r < s; )
                if ((i = (e = o[r]).type) && (i = zr(n[i], e.name)))
                    return i;
            return
        }
        if (t != null && typeof t != "function")
            throw new Error("invalid callback: " + t);
        for (; ++r < s; )
            if (i = (e = o[r]).type)
                n[i] = co(n[i], e.name, t);
            else if (t == null)
                for (i in n)
                    n[i] = co(n[i], e.name, null);
        return this
    },
    copy: function() {
        var e = {}
          , t = this._;
        for (var n in t)
            e[n] = t[n].slice();
        return new Xt(e)
    },
    call: function(e, t) {
        if ((i = arguments.length - 2) > 0)
            for (var n = new Array(i), o = 0, i, r; o < i; ++o)
                n[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(e))
            throw new Error("unknown type: " + e);
        for (r = this._[e],
        o = 0,
        i = r.length; o < i; ++o)
            r[o].value.apply(t, n)
    },
    apply: function(e, t, n) {
        if (!this._.hasOwnProperty(e))
            throw new Error("unknown type: " + e);
        for (var o = this._[e], i = 0, r = o.length; i < r; ++i)
            o[i].value.apply(t, n)
    }
};
function zr(e, t) {
    for (var n = 0, o = e.length, i; n < o; ++n)
        if ((i = e[n]).name === t)
            return i.value
}
function co(e, t, n) {
    for (var o = 0, i = e.length; o < i; ++o)
        if (e[o].name === t) {
            e[o] = Ar,
            e = e.slice(0, o).concat(e.slice(o + 1));
            break
        }
    return n != null && e.push({
        name: t,
        value: n
    }),
    e
}
var zn = "http://www.w3.org/1999/xhtml";
const fo = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: zn,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};
function un(e) {
    var t = e += ""
      , n = t.indexOf(":");
    return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
    fo.hasOwnProperty(t) ? {
        space: fo[t],
        local: e
    } : e
}
function Br(e) {
    return function() {
        var t = this.ownerDocument
          , n = this.namespaceURI;
        return n === zn && t.documentElement.namespaceURI === zn ? t.createElement(e) : t.createElementNS(n, e)
    }
}
function Rr(e) {
    return function() {
        return this.ownerDocument.createElementNS(e.space, e.local)
    }
}
function ri(e) {
    var t = un(e);
    return (t.local ? Rr : Br)(t)
}
function Vr() {}
function Qn(e) {
    return e == null ? Vr : function() {
        return this.querySelector(e)
    }
}
function Hr(e) {
    typeof e != "function" && (e = Qn(e));
    for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
        for (var r = t[i], s = r.length, a = o[i] = new Array(s), l, u, c = 0; c < s; ++c)
            (l = r[c]) && (u = e.call(l, l.__data__, c, r)) && ("__data__"in l && (u.__data__ = l.__data__),
            a[c] = u);
    return new Ne(o,this._parents)
}
function Lr(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
}
function Fr() {
    return []
}
function si(e) {
    return e == null ? Fr : function() {
        return this.querySelectorAll(e)
    }
}
function Yr(e) {
    return function() {
        return Lr(e.apply(this, arguments))
    }
}
function Gr(e) {
    typeof e == "function" ? e = Yr(e) : e = si(e);
    for (var t = this._groups, n = t.length, o = [], i = [], r = 0; r < n; ++r)
        for (var s = t[r], a = s.length, l, u = 0; u < a; ++u)
            (l = s[u]) && (o.push(e.call(l, l.__data__, u, s)),
            i.push(l));
    return new Ne(o,i)
}
function ai(e) {
    return function() {
        return this.matches(e)
    }
}
function li(e) {
    return function(t) {
        return t.matches(e)
    }
}
var Xr = Array.prototype.find;
function Ur(e) {
    return function() {
        return Xr.call(this.children, e)
    }
}
function Zr() {
    return this.firstElementChild
}
function Wr(e) {
    return this.select(e == null ? Zr : Ur(typeof e == "function" ? e : li(e)))
}
var Kr = Array.prototype.filter;
function qr() {
    return Array.from(this.children)
}
function Jr(e) {
    return function() {
        return Kr.call(this.children, e)
    }
}
function Qr(e) {
    return this.selectAll(e == null ? qr : Jr(typeof e == "function" ? e : li(e)))
}
function jr(e) {
    typeof e != "function" && (e = ai(e));
    for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
        for (var r = t[i], s = r.length, a = o[i] = [], l, u = 0; u < s; ++u)
            (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
    return new Ne(o,this._parents)
}
function ui(e) {
    return new Array(e.length)
}
function es() {
    return new Ne(this._enter || this._groups.map(ui),this._parents)
}
function Kt(e, t) {
    this.ownerDocument = e.ownerDocument,
    this.namespaceURI = e.namespaceURI,
    this._next = null,
    this._parent = e,
    this.__data__ = t
}
Kt.prototype = {
    constructor: Kt,
    appendChild: function(e) {
        return this._parent.insertBefore(e, this._next)
    },
    insertBefore: function(e, t) {
        return this._parent.insertBefore(e, t)
    },
    querySelector: function(e) {
        return this._parent.querySelector(e)
    },
    querySelectorAll: function(e) {
        return this._parent.querySelectorAll(e)
    }
};
function ts(e) {
    return function() {
        return e
    }
}
function ns(e, t, n, o, i, r) {
    for (var s = 0, a, l = t.length, u = r.length; s < u; ++s)
        (a = t[s]) ? (a.__data__ = r[s],
        o[s] = a) : n[s] = new Kt(e,r[s]);
    for (; s < l; ++s)
        (a = t[s]) && (i[s] = a)
}
function os(e, t, n, o, i, r, s) {
    var a, l, u = new Map, c = t.length, d = r.length, m = new Array(c), p;
    for (a = 0; a < c; ++a)
        (l = t[a]) && (m[a] = p = s.call(l, l.__data__, a, t) + "",
        u.has(p) ? i[a] = l : u.set(p, l));
    for (a = 0; a < d; ++a)
        p = s.call(e, r[a], a, r) + "",
        (l = u.get(p)) ? (o[a] = l,
        l.__data__ = r[a],
        u.delete(p)) : n[a] = new Kt(e,r[a]);
    for (a = 0; a < c; ++a)
        (l = t[a]) && u.get(m[a]) === l && (i[a] = l)
}
function is(e) {
    return e.__data__
}
function rs(e, t) {
    if (!arguments.length)
        return Array.from(this, is);
    var n = t ? os : ns
      , o = this._parents
      , i = this._groups;
    typeof e != "function" && (e = ts(e));
    for (var r = i.length, s = new Array(r), a = new Array(r), l = new Array(r), u = 0; u < r; ++u) {
        var c = o[u]
          , d = i[u]
          , m = d.length
          , p = ss(e.call(c, c && c.__data__, u, o))
          , C = p.length
          , x = a[u] = new Array(C)
          , E = s[u] = new Array(C)
          , N = l[u] = new Array(m);
        n(c, d, x, E, N, p, t);
        for (var M = 0, _ = 0, S, D; M < C; ++M)
            if (S = x[M]) {
                for (M >= _ && (_ = M + 1); !(D = E[_]) && ++_ < C; )
                    ;
                S._next = D || null
            }
    }
    return s = new Ne(s,o),
    s._enter = a,
    s._exit = l,
    s
}
function ss(e) {
    return typeof e == "object" && "length"in e ? e : Array.from(e)
}
function as() {
    return new Ne(this._exit || this._groups.map(ui),this._parents)
}
function ls(e, t, n) {
    var o = this.enter()
      , i = this
      , r = this.exit();
    return typeof e == "function" ? (o = e(o),
    o && (o = o.selection())) : o = o.append(e + ""),
    t != null && (i = t(i),
    i && (i = i.selection())),
    n == null ? r.remove() : n(r),
    o && i ? o.merge(i).order() : i
}
function us(e) {
    for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, r = o.length, s = Math.min(i, r), a = new Array(i), l = 0; l < s; ++l)
        for (var u = n[l], c = o[l], d = u.length, m = a[l] = new Array(d), p, C = 0; C < d; ++C)
            (p = u[C] || c[C]) && (m[C] = p);
    for (; l < i; ++l)
        a[l] = n[l];
    return new Ne(a,this._parents)
}
function cs() {
    for (var e = this._groups, t = -1, n = e.length; ++t < n; )
        for (var o = e[t], i = o.length - 1, r = o[i], s; --i >= 0; )
            (s = o[i]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r),
            r = s);
    return this
}
function ds(e) {
    e || (e = fs);
    function t(d, m) {
        return d && m ? e(d.__data__, m.__data__) : !d - !m
    }
    for (var n = this._groups, o = n.length, i = new Array(o), r = 0; r < o; ++r) {
        for (var s = n[r], a = s.length, l = i[r] = new Array(a), u, c = 0; c < a; ++c)
            (u = s[c]) && (l[c] = u);
        l.sort(t)
    }
    return new Ne(i,this._parents).order()
}
function fs(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}
function hs() {
    var e = arguments[0];
    return arguments[0] = this,
    e.apply(null, arguments),
    this
}
function gs() {
    return Array.from(this)
}
function vs() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
        for (var o = e[t], i = 0, r = o.length; i < r; ++i) {
            var s = o[i];
            if (s)
                return s
        }
    return null
}
function ps() {
    let e = 0;
    for (const t of this)
        ++e;
    return e
}
function ms() {
    return !this.node()
}
function ys(e) {
    for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
        for (var i = t[n], r = 0, s = i.length, a; r < s; ++r)
            (a = i[r]) && e.call(a, a.__data__, r, i);
    return this
}
function _s(e) {
    return function() {
        this.removeAttribute(e)
    }
}
function ws(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local)
    }
}
function bs(e, t) {
    return function() {
        this.setAttribute(e, t)
    }
}
function xs(e, t) {
    return function() {
        this.setAttributeNS(e.space, e.local, t)
    }
}
function Es(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        n == null ? this.removeAttribute(e) : this.setAttribute(e, n)
    }
}
function Ss(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n)
    }
}
function Ns(e, t) {
    var n = un(e);
    if (arguments.length < 2) {
        var o = this.node();
        return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n)
    }
    return this.each((t == null ? n.local ? ws : _s : typeof t == "function" ? n.local ? Ss : Es : n.local ? xs : bs)(n, t))
}
function ci(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
}
function Cs(e) {
    return function() {
        this.style.removeProperty(e)
    }
}
function Ms(e, t, n) {
    return function() {
        this.style.setProperty(e, t, n)
    }
}
function Is(e, t, n) {
    return function() {
        var o = t.apply(this, arguments);
        o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n)
    }
}
function Ts(e, t, n) {
    return arguments.length > 1 ? this.each((t == null ? Cs : typeof t == "function" ? Is : Ms)(e, t, n ?? "")) : ft(this.node(), e)
}
function ft(e, t) {
    return e.style.getPropertyValue(t) || ci(e).getComputedStyle(e, null).getPropertyValue(t)
}
function ks(e) {
    return function() {
        delete this[e]
    }
}
function Ps(e, t) {
    return function() {
        this[e] = t
    }
}
function $s(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        n == null ? delete this[e] : this[e] = n
    }
}
function Ds(e, t) {
    return arguments.length > 1 ? this.each((t == null ? ks : typeof t == "function" ? $s : Ps)(e, t)) : this.node()[e]
}
function di(e) {
    return e.trim().split(/^|\s+/)
}
function jn(e) {
    return e.classList || new fi(e)
}
function fi(e) {
    this._node = e,
    this._names = di(e.getAttribute("class") || "")
}
fi.prototype = {
    add: function(e) {
        var t = this._names.indexOf(e);
        t < 0 && (this._names.push(e),
        this._node.setAttribute("class", this._names.join(" ")))
    },
    remove: function(e) {
        var t = this._names.indexOf(e);
        t >= 0 && (this._names.splice(t, 1),
        this._node.setAttribute("class", this._names.join(" ")))
    },
    contains: function(e) {
        return this._names.indexOf(e) >= 0
    }
};
function hi(e, t) {
    for (var n = jn(e), o = -1, i = t.length; ++o < i; )
        n.add(t[o])
}
function gi(e, t) {
    for (var n = jn(e), o = -1, i = t.length; ++o < i; )
        n.remove(t[o])
}
function As(e) {
    return function() {
        hi(this, e)
    }
}
function Os(e) {
    return function() {
        gi(this, e)
    }
}
function zs(e, t) {
    return function() {
        (t.apply(this, arguments) ? hi : gi)(this, e)
    }
}
function Bs(e, t) {
    var n = di(e + "");
    if (arguments.length < 2) {
        for (var o = jn(this.node()), i = -1, r = n.length; ++i < r; )
            if (!o.contains(n[i]))
                return !1;
        return !0
    }
    return this.each((typeof t == "function" ? zs : t ? As : Os)(n, t))
}
function Rs() {
    this.textContent = ""
}
function Vs(e) {
    return function() {
        this.textContent = e
    }
}
function Hs(e) {
    return function() {
        var t = e.apply(this, arguments);
        this.textContent = t ?? ""
    }
}
function Ls(e) {
    return arguments.length ? this.each(e == null ? Rs : (typeof e == "function" ? Hs : Vs)(e)) : this.node().textContent
}
function Fs() {
    this.innerHTML = ""
}
function Ys(e) {
    return function() {
        this.innerHTML = e
    }
}
function Gs(e) {
    return function() {
        var t = e.apply(this, arguments);
        this.innerHTML = t ?? ""
    }
}
function Xs(e) {
    return arguments.length ? this.each(e == null ? Fs : (typeof e == "function" ? Gs : Ys)(e)) : this.node().innerHTML
}
function Us() {
    this.nextSibling && this.parentNode.appendChild(this)
}
function Zs() {
    return this.each(Us)
}
function Ws() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
}
function Ks() {
    return this.each(Ws)
}
function qs(e) {
    var t = typeof e == "function" ? e : ri(e);
    return this.select(function() {
        return this.appendChild(t.apply(this, arguments))
    })
}
function Js() {
    return null
}
function Qs(e, t) {
    var n = typeof e == "function" ? e : ri(e)
      , o = t == null ? Js : typeof t == "function" ? t : Qn(t);
    return this.select(function() {
        return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null)
    })
}
function js() {
    var e = this.parentNode;
    e && e.removeChild(this)
}
function ea() {
    return this.each(js)
}
function ta() {
    var e = this.cloneNode(!1)
      , t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e
}
function na() {
    var e = this.cloneNode(!0)
      , t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e
}
function oa(e) {
    return this.select(e ? na : ta)
}
function ia(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__
}
function ra(e) {
    return function(t) {
        e.call(this, t, this.__data__)
    }
}
function sa(e) {
    return e.trim().split(/^|\s+/).map(function(t) {
        var n = ""
          , o = t.indexOf(".");
        return o >= 0 && (n = t.slice(o + 1),
        t = t.slice(0, o)),
        {
            type: t,
            name: n
        }
    })
}
function aa(e) {
    return function() {
        var t = this.__on;
        if (t) {
            for (var n = 0, o = -1, i = t.length, r; n < i; ++n)
                r = t[n],
                (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++o] = r;
            ++o ? t.length = o : delete this.__on
        }
    }
}
function la(e, t, n) {
    return function() {
        var o = this.__on, i, r = ra(t);
        if (o) {
            for (var s = 0, a = o.length; s < a; ++s)
                if ((i = o[s]).type === e.type && i.name === e.name) {
                    this.removeEventListener(i.type, i.listener, i.options),
                    this.addEventListener(i.type, i.listener = r, i.options = n),
                    i.value = t;
                    return
                }
        }
        this.addEventListener(e.type, r, n),
        i = {
            type: e.type,
            name: e.name,
            value: t,
            listener: r,
            options: n
        },
        o ? o.push(i) : this.__on = [i]
    }
}
function ua(e, t, n) {
    var o = sa(e + ""), i, r = o.length, s;
    if (arguments.length < 2) {
        var a = this.node().__on;
        if (a) {
            for (var l = 0, u = a.length, c; l < u; ++l)
                for (i = 0,
                c = a[l]; i < r; ++i)
                    if ((s = o[i]).type === c.type && s.name === c.name)
                        return c.value
        }
        return
    }
    for (a = t ? la : aa,
    i = 0; i < r; ++i)
        this.each(a(o[i], t, n));
    return this
}
function vi(e, t, n) {
    var o = ci(e)
      , i = o.CustomEvent;
    typeof i == "function" ? i = new i(t,n) : (i = o.document.createEvent("Event"),
    n ? (i.initEvent(t, n.bubbles, n.cancelable),
    i.detail = n.detail) : i.initEvent(t, !1, !1)),
    e.dispatchEvent(i)
}
function ca(e, t) {
    return function() {
        return vi(this, e, t)
    }
}
function da(e, t) {
    return function() {
        return vi(this, e, t.apply(this, arguments))
    }
}
function fa(e, t) {
    return this.each((typeof t == "function" ? da : ca)(e, t))
}
function *ha() {
    for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
        for (var o = e[t], i = 0, r = o.length, s; i < r; ++i)
            (s = o[i]) && (yield s)
}
var pi = [null];
function Ne(e, t) {
    this._groups = e,
    this._parents = t
}
function At() {
    return new Ne([[document.documentElement]],pi)
}
function ga() {
    return this
}
Ne.prototype = At.prototype = {
    constructor: Ne,
    select: Hr,
    selectAll: Gr,
    selectChild: Wr,
    selectChildren: Qr,
    filter: jr,
    data: rs,
    enter: es,
    exit: as,
    join: ls,
    merge: us,
    selection: ga,
    order: cs,
    sort: ds,
    call: hs,
    nodes: gs,
    node: vs,
    size: ps,
    empty: ms,
    each: ys,
    attr: Ns,
    style: Ts,
    property: Ds,
    classed: Bs,
    text: Ls,
    html: Xs,
    raise: Zs,
    lower: Ks,
    append: qs,
    insert: Qs,
    remove: ea,
    clone: oa,
    datum: ia,
    on: ua,
    dispatch: fa,
    [Symbol.iterator]: ha
};
function Ce(e) {
    return typeof e == "string" ? new Ne([[document.querySelector(e)]],[document.documentElement]) : new Ne([[e]],pi)
}
function va(e) {
    let t;
    for (; t = e.sourceEvent; )
        e = t;
    return e
}
function ke(e, t) {
    if (e = va(e),
    t === void 0 && (t = e.currentTarget),
    t) {
        var n = t.ownerSVGElement || t;
        if (n.createSVGPoint) {
            var o = n.createSVGPoint();
            return o.x = e.clientX,
            o.y = e.clientY,
            o = o.matrixTransform(t.getScreenCTM().inverse()),
            [o.x, o.y]
        }
        if (t.getBoundingClientRect) {
            var i = t.getBoundingClientRect();
            return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop]
        }
    }
    return [e.pageX, e.pageY]
}
const pa = {
    passive: !1
}
  , Ct = {
    capture: !0,
    passive: !1
};
function bn(e) {
    e.stopImmediatePropagation()
}
function st(e) {
    e.preventDefault(),
    e.stopImmediatePropagation()
}
function mi(e) {
    var t = e.document.documentElement
      , n = Ce(e).on("dragstart.drag", st, Ct);
    "onselectstart"in t ? n.on("selectstart.drag", st, Ct) : (t.__noselect = t.style.MozUserSelect,
    t.style.MozUserSelect = "none")
}
function yi(e, t) {
    var n = e.document.documentElement
      , o = Ce(e).on("dragstart.drag", null);
    t && (o.on("click.drag", st, Ct),
    setTimeout(function() {
        o.on("click.drag", null)
    }, 0)),
    "onselectstart"in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect,
    delete n.__noselect)
}
const zt = e => () => e;
function Bn(e, {sourceEvent: t, subject: n, target: o, identifier: i, active: r, x: s, y: a, dx: l, dy: u, dispatch: c}) {
    Object.defineProperties(this, {
        type: {
            value: e,
            enumerable: !0,
            configurable: !0
        },
        sourceEvent: {
            value: t,
            enumerable: !0,
            configurable: !0
        },
        subject: {
            value: n,
            enumerable: !0,
            configurable: !0
        },
        target: {
            value: o,
            enumerable: !0,
            configurable: !0
        },
        identifier: {
            value: i,
            enumerable: !0,
            configurable: !0
        },
        active: {
            value: r,
            enumerable: !0,
            configurable: !0
        },
        x: {
            value: s,
            enumerable: !0,
            configurable: !0
        },
        y: {
            value: a,
            enumerable: !0,
            configurable: !0
        },
        dx: {
            value: l,
            enumerable: !0,
            configurable: !0
        },
        dy: {
            value: u,
            enumerable: !0,
            configurable: !0
        },
        _: {
            value: c
        }
    })
}
Bn.prototype.on = function() {
    var e = this._.on.apply(this._, arguments);
    return e === this._ ? this : e
}
;
function ma(e) {
    return !e.ctrlKey && !e.button
}
function ya() {
    return this.parentNode
}
function _a(e, t) {
    return t ?? {
        x: e.x,
        y: e.y
    }
}
function wa() {
    return navigator.maxTouchPoints || "ontouchstart"in this
}
function ba() {
    var e = ma, t = ya, n = _a, o = wa, i = {}, r = ln("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
    function m(S) {
        S.on("mousedown.drag", p).filter(o).on("touchstart.drag", E).on("touchmove.drag", N, pa).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }
    function p(S, D) {
        if (!(c || !e.call(this, S, D))) {
            var L = _(this, t.call(this, S, D), S, D, "mouse");
            L && (Ce(S.view).on("mousemove.drag", C, Ct).on("mouseup.drag", x, Ct),
            mi(S.view),
            bn(S),
            u = !1,
            a = S.clientX,
            l = S.clientY,
            L("start", S))
        }
    }
    function C(S) {
        if (st(S),
        !u) {
            var D = S.clientX - a
              , L = S.clientY - l;
            u = D * D + L * L > d
        }
        i.mouse("drag", S)
    }
    function x(S) {
        Ce(S.view).on("mousemove.drag mouseup.drag", null),
        yi(S.view, u),
        st(S),
        i.mouse("end", S)
    }
    function E(S, D) {
        if (e.call(this, S, D)) {
            var L = S.changedTouches, V = t.call(this, S, D), z = L.length, q, W;
            for (q = 0; q < z; ++q)
                (W = _(this, V, S, D, L[q].identifier, L[q])) && (bn(S),
                W("start", S, L[q]))
        }
    }
    function N(S) {
        var D = S.changedTouches, L = D.length, V, z;
        for (V = 0; V < L; ++V)
            (z = i[D[V].identifier]) && (st(S),
            z("drag", S, D[V]))
    }
    function M(S) {
        var D = S.changedTouches, L = D.length, V, z;
        for (c && clearTimeout(c),
        c = setTimeout(function() {
            c = null
        }, 500),
        V = 0; V < L; ++V)
            (z = i[D[V].identifier]) && (bn(S),
            z("end", S, D[V]))
    }
    function _(S, D, L, V, z, q) {
        var W = r.copy(), $ = ke(q || L, D), w, Y, y;
        if ((y = n.call(S, new Bn("beforestart",{
            sourceEvent: L,
            target: m,
            identifier: z,
            active: s,
            x: $[0],
            y: $[1],
            dx: 0,
            dy: 0,
            dispatch: W
        }), V)) != null)
            return w = y.x - $[0] || 0,
            Y = y.y - $[1] || 0,
            function T(b, k, P) {
                var O = $, A;
                switch (b) {
                case "start":
                    i[z] = T,
                    A = s++;
                    break;
                case "end":
                    delete i[z],
                    --s;
                case "drag":
                    $ = ke(P || k, D),
                    A = s;
                    break
                }
                W.call(b, S, new Bn(b,{
                    sourceEvent: k,
                    subject: y,
                    target: m,
                    identifier: z,
                    active: A,
                    x: $[0] + w,
                    y: $[1] + Y,
                    dx: $[0] - O[0],
                    dy: $[1] - O[1],
                    dispatch: W
                }), V)
            }
    }
    return m.filter = function(S) {
        return arguments.length ? (e = typeof S == "function" ? S : zt(!!S),
        m) : e
    }
    ,
    m.container = function(S) {
        return arguments.length ? (t = typeof S == "function" ? S : zt(S),
        m) : t
    }
    ,
    m.subject = function(S) {
        return arguments.length ? (n = typeof S == "function" ? S : zt(S),
        m) : n
    }
    ,
    m.touchable = function(S) {
        return arguments.length ? (o = typeof S == "function" ? S : zt(!!S),
        m) : o
    }
    ,
    m.on = function() {
        var S = r.on.apply(r, arguments);
        return S === r ? m : S
    }
    ,
    m.clickDistance = function(S) {
        return arguments.length ? (d = (S = +S) * S,
        m) : Math.sqrt(d)
    }
    ,
    m
}
function eo(e, t, n) {
    e.prototype = t.prototype = n,
    n.constructor = e
}
function _i(e, t) {
    var n = Object.create(e.prototype);
    for (var o in t)
        n[o] = t[o];
    return n
}
function Ot() {}
var Mt = .7
  , qt = 1 / Mt
  , at = "\\s*([+-]?\\d+)\\s*"
  , It = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*"
  , Pe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
  , xa = /^#([0-9a-f]{3,8})$/
  , Ea = new RegExp(`^rgb\\(${at},${at},${at}\\)$`)
  , Sa = new RegExp(`^rgb\\(${Pe},${Pe},${Pe}\\)$`)
  , Na = new RegExp(`^rgba\\(${at},${at},${at},${It}\\)$`)
  , Ca = new RegExp(`^rgba\\(${Pe},${Pe},${Pe},${It}\\)$`)
  , Ma = new RegExp(`^hsl\\(${It},${Pe},${Pe}\\)$`)
  , Ia = new RegExp(`^hsla\\(${It},${Pe},${Pe},${It}\\)$`)
  , ho = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
eo(Ot, Tt, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: go,
    formatHex: go,
    formatHex8: Ta,
    formatHsl: ka,
    formatRgb: vo,
    toString: vo
});
function go() {
    return this.rgb().formatHex()
}
function Ta() {
    return this.rgb().formatHex8()
}
function ka() {
    return wi(this).formatHsl()
}
function vo() {
    return this.rgb().formatRgb()
}
function Tt(e) {
    var t, n;
    return e = (e + "").trim().toLowerCase(),
    (t = xa.exec(e)) ? (n = t[1].length,
    t = parseInt(t[1], 16),
    n === 6 ? po(t) : n === 3 ? new Se(t >> 8 & 15 | t >> 4 & 240,t >> 4 & 15 | t & 240,(t & 15) << 4 | t & 15,1) : n === 8 ? Bt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ea.exec(e)) ? new Se(t[1],t[2],t[3],1) : (t = Sa.exec(e)) ? new Se(t[1] * 255 / 100,t[2] * 255 / 100,t[3] * 255 / 100,1) : (t = Na.exec(e)) ? Bt(t[1], t[2], t[3], t[4]) : (t = Ca.exec(e)) ? Bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ma.exec(e)) ? _o(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ia.exec(e)) ? _o(t[1], t[2] / 100, t[3] / 100, t[4]) : ho.hasOwnProperty(e) ? po(ho[e]) : e === "transparent" ? new Se(NaN,NaN,NaN,0) : null
}
function po(e) {
    return new Se(e >> 16 & 255,e >> 8 & 255,e & 255,1)
}
function Bt(e, t, n, o) {
    return o <= 0 && (e = t = n = NaN),
    new Se(e,t,n,o)
}
function Pa(e) {
    return e instanceof Ot || (e = Tt(e)),
    e ? (e = e.rgb(),
    new Se(e.r,e.g,e.b,e.opacity)) : new Se
}
function Rn(e, t, n, o) {
    return arguments.length === 1 ? Pa(e) : new Se(e,t,n,o ?? 1)
}
function Se(e, t, n, o) {
    this.r = +e,
    this.g = +t,
    this.b = +n,
    this.opacity = +o
}
eo(Se, Rn, _i(Ot, {
    brighter(e) {
        return e = e == null ? qt : Math.pow(qt, e),
        new Se(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    darker(e) {
        return e = e == null ? Mt : Math.pow(Mt, e),
        new Se(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new Se(et(this.r),et(this.g),et(this.b),Jt(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: mo,
    formatHex: mo,
    formatHex8: $a,
    formatRgb: yo,
    toString: yo
}));
function mo() {
    return `#${je(this.r)}${je(this.g)}${je(this.b)}`
}
function $a() {
    return `#${je(this.r)}${je(this.g)}${je(this.b)}${je((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function yo() {
    const e = Jt(this.opacity);
    return `${e === 1 ? "rgb(" : "rgba("}${et(this.r)}, ${et(this.g)}, ${et(this.b)}${e === 1 ? ")" : `, ${e})`}`
}
function Jt(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}
function et(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}
function je(e) {
    return e = et(e),
    (e < 16 ? "0" : "") + e.toString(16)
}
function _o(e, t, n, o) {
    return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN),
    new Me(e,t,n,o)
}
function wi(e) {
    if (e instanceof Me)
        return new Me(e.h,e.s,e.l,e.opacity);
    if (e instanceof Ot || (e = Tt(e)),
    !e)
        return new Me;
    if (e instanceof Me)
        return e;
    e = e.rgb();
    var t = e.r / 255
      , n = e.g / 255
      , o = e.b / 255
      , i = Math.min(t, n, o)
      , r = Math.max(t, n, o)
      , s = NaN
      , a = r - i
      , l = (r + i) / 2;
    return a ? (t === r ? s = (n - o) / a + (n < o) * 6 : n === r ? s = (o - t) / a + 2 : s = (t - n) / a + 4,
    a /= l < .5 ? r + i : 2 - r - i,
    s *= 60) : a = l > 0 && l < 1 ? 0 : s,
    new Me(s,a,l,e.opacity)
}
function Da(e, t, n, o) {
    return arguments.length === 1 ? wi(e) : new Me(e,t,n,o ?? 1)
}
function Me(e, t, n, o) {
    this.h = +e,
    this.s = +t,
    this.l = +n,
    this.opacity = +o
}
eo(Me, Da, _i(Ot, {
    brighter(e) {
        return e = e == null ? qt : Math.pow(qt, e),
        new Me(this.h,this.s,this.l * e,this.opacity)
    },
    darker(e) {
        return e = e == null ? Mt : Math.pow(Mt, e),
        new Me(this.h,this.s,this.l * e,this.opacity)
    },
    rgb() {
        var e = this.h % 360 + (this.h < 0) * 360
          , t = isNaN(e) || isNaN(this.s) ? 0 : this.s
          , n = this.l
          , o = n + (n < .5 ? n : 1 - n) * t
          , i = 2 * n - o;
        return new Se(xn(e >= 240 ? e - 240 : e + 120, i, o),xn(e, i, o),xn(e < 120 ? e + 240 : e - 120, i, o),this.opacity)
    },
    clamp() {
        return new Me(wo(this.h),Rt(this.s),Rt(this.l),Jt(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const e = Jt(this.opacity);
        return `${e === 1 ? "hsl(" : "hsla("}${wo(this.h)}, ${Rt(this.s) * 100}%, ${Rt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`
    }
}));
function wo(e) {
    return e = (e || 0) % 360,
    e < 0 ? e + 360 : e
}
function Rt(e) {
    return Math.max(0, Math.min(1, e || 0))
}
function xn(e, t, n) {
    return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255
}
const bi = e => () => e;
function Aa(e, t) {
    return function(n) {
        return e + n * t
    }
}
function Oa(e, t, n) {
    return e = Math.pow(e, n),
    t = Math.pow(t, n) - e,
    n = 1 / n,
    function(o) {
        return Math.pow(e + o * t, n)
    }
}
function za(e) {
    return (e = +e) == 1 ? xi : function(t, n) {
        return n - t ? Oa(t, n, e) : bi(isNaN(t) ? n : t)
    }
}
function xi(e, t) {
    var n = t - e;
    return n ? Aa(e, n) : bi(isNaN(e) ? t : e)
}
const bo = function e(t) {
    var n = za(t);
    function o(i, r) {
        var s = n((i = Rn(i)).r, (r = Rn(r)).r)
          , a = n(i.g, r.g)
          , l = n(i.b, r.b)
          , u = xi(i.opacity, r.opacity);
        return function(c) {
            return i.r = s(c),
            i.g = a(c),
            i.b = l(c),
            i.opacity = u(c),
            i + ""
        }
    }
    return o.gamma = e,
    o
}(1);
function Ge(e, t) {
    return e = +e,
    t = +t,
    function(n) {
        return e * (1 - n) + t * n
    }
}
var Vn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
  , En = new RegExp(Vn.source,"g");
function Ba(e) {
    return function() {
        return e
    }
}
function Ra(e) {
    return function(t) {
        return e(t) + ""
    }
}
function Va(e, t) {
    var n = Vn.lastIndex = En.lastIndex = 0, o, i, r, s = -1, a = [], l = [];
    for (e = e + "",
    t = t + ""; (o = Vn.exec(e)) && (i = En.exec(t)); )
        (r = i.index) > n && (r = t.slice(n, r),
        a[s] ? a[s] += r : a[++s] = r),
        (o = o[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null,
        l.push({
            i: s,
            x: Ge(o, i)
        })),
        n = En.lastIndex;
    return n < t.length && (r = t.slice(n),
    a[s] ? a[s] += r : a[++s] = r),
    a.length < 2 ? l[0] ? Ra(l[0].x) : Ba(t) : (t = l.length,
    function(u) {
        for (var c = 0, d; c < t; ++c)
            a[(d = l[c]).i] = d.x(u);
        return a.join("")
    }
    )
}
var xo = 180 / Math.PI
  , Hn = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function Ei(e, t, n, o, i, r) {
    var s, a, l;
    return (s = Math.sqrt(e * e + t * t)) && (e /= s,
    t /= s),
    (l = e * n + t * o) && (n -= e * l,
    o -= t * l),
    (a = Math.sqrt(n * n + o * o)) && (n /= a,
    o /= a,
    l /= a),
    e * o < t * n && (e = -e,
    t = -t,
    l = -l,
    s = -s),
    {
        translateX: i,
        translateY: r,
        rotate: Math.atan2(t, e) * xo,
        skewX: Math.atan(l) * xo,
        scaleX: s,
        scaleY: a
    }
}
var Vt;
function Ha(e) {
    const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return t.isIdentity ? Hn : Ei(t.a, t.b, t.c, t.d, t.e, t.f)
}
function La(e) {
    return e == null || (Vt || (Vt = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Vt.setAttribute("transform", e),
    !(e = Vt.transform.baseVal.consolidate())) ? Hn : (e = e.matrix,
    Ei(e.a, e.b, e.c, e.d, e.e, e.f))
}
function Si(e, t, n, o) {
    function i(u) {
        return u.length ? u.pop() + " " : ""
    }
    function r(u, c, d, m, p, C) {
        if (u !== d || c !== m) {
            var x = p.push("translate(", null, t, null, n);
            C.push({
                i: x - 4,
                x: Ge(u, d)
            }, {
                i: x - 2,
                x: Ge(c, m)
            })
        } else
            (d || m) && p.push("translate(" + d + t + m + n)
    }
    function s(u, c, d, m) {
        u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360),
        m.push({
            i: d.push(i(d) + "rotate(", null, o) - 2,
            x: Ge(u, c)
        })) : c && d.push(i(d) + "rotate(" + c + o)
    }
    function a(u, c, d, m) {
        u !== c ? m.push({
            i: d.push(i(d) + "skewX(", null, o) - 2,
            x: Ge(u, c)
        }) : c && d.push(i(d) + "skewX(" + c + o)
    }
    function l(u, c, d, m, p, C) {
        if (u !== d || c !== m) {
            var x = p.push(i(p) + "scale(", null, ",", null, ")");
            C.push({
                i: x - 4,
                x: Ge(u, d)
            }, {
                i: x - 2,
                x: Ge(c, m)
            })
        } else
            (d !== 1 || m !== 1) && p.push(i(p) + "scale(" + d + "," + m + ")")
    }
    return function(u, c) {
        var d = []
          , m = [];
        return u = e(u),
        c = e(c),
        r(u.translateX, u.translateY, c.translateX, c.translateY, d, m),
        s(u.rotate, c.rotate, d, m),
        a(u.skewX, c.skewX, d, m),
        l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, m),
        u = c = null,
        function(p) {
            for (var C = -1, x = m.length, E; ++C < x; )
                d[(E = m[C]).i] = E.x(p);
            return d.join("")
        }
    }
}
var Fa = Si(Ha, "px, ", "px)", "deg)")
  , Ya = Si(La, ", ", ")", ")")
  , Ga = 1e-12;
function Eo(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2
}
function Xa(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2
}
function Ua(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1)
}
const Za = function e(t, n, o) {
    function i(r, s) {
        var a = r[0], l = r[1], u = r[2], c = s[0], d = s[1], m = s[2], p = c - a, C = d - l, x = p * p + C * C, E, N;
        if (x < Ga)
            N = Math.log(m / u) / t,
            E = function(V) {
                return [a + V * p, l + V * C, u * Math.exp(t * V * N)]
            }
            ;
        else {
            var M = Math.sqrt(x)
              , _ = (m * m - u * u + o * x) / (2 * u * n * M)
              , S = (m * m - u * u - o * x) / (2 * m * n * M)
              , D = Math.log(Math.sqrt(_ * _ + 1) - _)
              , L = Math.log(Math.sqrt(S * S + 1) - S);
            N = (L - D) / t,
            E = function(V) {
                var z = V * N
                  , q = Eo(D)
                  , W = u / (n * M) * (q * Ua(t * z + D) - Xa(D));
                return [a + W * p, l + W * C, u * q / Eo(t * z + D)]
            }
        }
        return E.duration = N * 1e3 * t / Math.SQRT2,
        E
    }
    return i.rho = function(r) {
        var s = Math.max(.001, +r)
          , a = s * s
          , l = a * a;
        return e(s, a, l)
    }
    ,
    i
}(Math.SQRT2, 2, 4);
var ht = 0, wt = 0, yt = 0, Ni = 1e3, Qt, bt, jt = 0, ot = 0, cn = 0, kt = typeof performance == "object" && performance.now ? performance : Date, Ci = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
    setTimeout(e, 17)
}
;
function to() {
    return ot || (Ci(Wa),
    ot = kt.now() + cn)
}
function Wa() {
    ot = 0
}
function en() {
    this._call = this._time = this._next = null
}
en.prototype = Mi.prototype = {
    constructor: en,
    restart: function(e, t, n) {
        if (typeof e != "function")
            throw new TypeError("callback is not a function");
        n = (n == null ? to() : +n) + (t == null ? 0 : +t),
        !this._next && bt !== this && (bt ? bt._next = this : Qt = this,
        bt = this),
        this._call = e,
        this._time = n,
        Ln()
    },
    stop: function() {
        this._call && (this._call = null,
        this._time = 1 / 0,
        Ln())
    }
};
function Mi(e, t, n) {
    var o = new en;
    return o.restart(e, t, n),
    o
}
function Ka() {
    to(),
    ++ht;
    for (var e = Qt, t; e; )
        (t = ot - e._time) >= 0 && e._call.call(void 0, t),
        e = e._next;
    --ht
}
function So() {
    ot = (jt = kt.now()) + cn,
    ht = wt = 0;
    try {
        Ka()
    } finally {
        ht = 0,
        Ja(),
        ot = 0
    }
}
function qa() {
    var e = kt.now()
      , t = e - jt;
    t > Ni && (cn -= t,
    jt = e)
}
function Ja() {
    for (var e, t = Qt, n, o = 1 / 0; t; )
        t._call ? (o > t._time && (o = t._time),
        e = t,
        t = t._next) : (n = t._next,
        t._next = null,
        t = e ? e._next = n : Qt = n);
    bt = e,
    Ln(o)
}
function Ln(e) {
    if (!ht) {
        wt && (wt = clearTimeout(wt));
        var t = e - ot;
        t > 24 ? (e < 1 / 0 && (wt = setTimeout(So, e - kt.now() - cn)),
        yt && (yt = clearInterval(yt))) : (yt || (jt = kt.now(),
        yt = setInterval(qa, Ni)),
        ht = 1,
        Ci(So))
    }
}
function No(e, t, n) {
    var o = new en;
    return t = t == null ? 0 : +t,
    o.restart(i => {
        o.stop(),
        e(i + t)
    }
    , t, n),
    o
}
var Qa = ln("start", "end", "cancel", "interrupt")
  , ja = []
  , Ii = 0
  , Co = 1
  , Fn = 2
  , Ut = 3
  , Mo = 4
  , Yn = 5
  , Zt = 6;
function dn(e, t, n, o, i, r) {
    var s = e.__transition;
    if (!s)
        e.__transition = {};
    else if (n in s)
        return;
    el(e, n, {
        name: t,
        index: o,
        group: i,
        on: Qa,
        tween: ja,
        time: r.time,
        delay: r.delay,
        duration: r.duration,
        ease: r.ease,
        timer: null,
        state: Ii
    })
}
function no(e, t) {
    var n = Ie(e, t);
    if (n.state > Ii)
        throw new Error("too late; already scheduled");
    return n
}
function Ae(e, t) {
    var n = Ie(e, t);
    if (n.state > Ut)
        throw new Error("too late; already running");
    return n
}
function Ie(e, t) {
    var n = e.__transition;
    if (!n || !(n = n[t]))
        throw new Error("transition not found");
    return n
}
function el(e, t, n) {
    var o = e.__transition, i;
    o[t] = n,
    n.timer = Mi(r, 0, n.time);
    function r(u) {
        n.state = Co,
        n.timer.restart(s, n.delay, n.time),
        n.delay <= u && s(u - n.delay)
    }
    function s(u) {
        var c, d, m, p;
        if (n.state !== Co)
            return l();
        for (c in o)
            if (p = o[c],
            p.name === n.name) {
                if (p.state === Ut)
                    return No(s);
                p.state === Mo ? (p.state = Zt,
                p.timer.stop(),
                p.on.call("interrupt", e, e.__data__, p.index, p.group),
                delete o[c]) : +c < t && (p.state = Zt,
                p.timer.stop(),
                p.on.call("cancel", e, e.__data__, p.index, p.group),
                delete o[c])
            }
        if (No(function() {
            n.state === Ut && (n.state = Mo,
            n.timer.restart(a, n.delay, n.time),
            a(u))
        }),
        n.state = Fn,
        n.on.call("start", e, e.__data__, n.index, n.group),
        n.state === Fn) {
            for (n.state = Ut,
            i = new Array(m = n.tween.length),
            c = 0,
            d = -1; c < m; ++c)
                (p = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++d] = p);
            i.length = d + 1
        }
    }
    function a(u) {
        for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l),
        n.state = Yn,
        1), d = -1, m = i.length; ++d < m; )
            i[d].call(e, c);
        n.state === Yn && (n.on.call("end", e, e.__data__, n.index, n.group),
        l())
    }
    function l() {
        n.state = Zt,
        n.timer.stop(),
        delete o[t];
        for (var u in o)
            return;
        delete e.__transition
    }
}
function Wt(e, t) {
    var n = e.__transition, o, i, r = !0, s;
    if (n) {
        t = t == null ? null : t + "";
        for (s in n) {
            if ((o = n[s]).name !== t) {
                r = !1;
                continue
            }
            i = o.state > Fn && o.state < Yn,
            o.state = Zt,
            o.timer.stop(),
            o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group),
            delete n[s]
        }
        r && delete e.__transition
    }
}
function tl(e) {
    return this.each(function() {
        Wt(this, e)
    })
}
function nl(e, t) {
    var n, o;
    return function() {
        var i = Ae(this, e)
          , r = i.tween;
        if (r !== n) {
            o = n = r;
            for (var s = 0, a = o.length; s < a; ++s)
                if (o[s].name === t) {
                    o = o.slice(),
                    o.splice(s, 1);
                    break
                }
        }
        i.tween = o
    }
}
function ol(e, t, n) {
    var o, i;
    if (typeof n != "function")
        throw new Error;
    return function() {
        var r = Ae(this, e)
          , s = r.tween;
        if (s !== o) {
            i = (o = s).slice();
            for (var a = {
                name: t,
                value: n
            }, l = 0, u = i.length; l < u; ++l)
                if (i[l].name === t) {
                    i[l] = a;
                    break
                }
            l === u && i.push(a)
        }
        r.tween = i
    }
}
function il(e, t) {
    var n = this._id;
    if (e += "",
    arguments.length < 2) {
        for (var o = Ie(this.node(), n).tween, i = 0, r = o.length, s; i < r; ++i)
            if ((s = o[i]).name === e)
                return s.value;
        return null
    }
    return this.each((t == null ? nl : ol)(n, e, t))
}
function oo(e, t, n) {
    var o = e._id;
    return e.each(function() {
        var i = Ae(this, o);
        (i.value || (i.value = {}))[t] = n.apply(this, arguments)
    }),
    function(i) {
        return Ie(i, o).value[t]
    }
}
function Ti(e, t) {
    var n;
    return (typeof t == "number" ? Ge : t instanceof Tt ? bo : (n = Tt(t)) ? (t = n,
    bo) : Va)(e, t)
}
function rl(e) {
    return function() {
        this.removeAttribute(e)
    }
}
function sl(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local)
    }
}
function al(e, t, n) {
    var o, i = n + "", r;
    return function() {
        var s = this.getAttribute(e);
        return s === i ? null : s === o ? r : r = t(o = s, n)
    }
}
function ll(e, t, n) {
    var o, i = n + "", r;
    return function() {
        var s = this.getAttributeNS(e.space, e.local);
        return s === i ? null : s === o ? r : r = t(o = s, n)
    }
}
function ul(e, t, n) {
    var o, i, r;
    return function() {
        var s, a = n(this), l;
        return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e),
        l = a + "",
        s === l ? null : s === o && l === i ? r : (i = l,
        r = t(o = s, a)))
    }
}
function cl(e, t, n) {
    var o, i, r;
    return function() {
        var s, a = n(this), l;
        return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local),
        l = a + "",
        s === l ? null : s === o && l === i ? r : (i = l,
        r = t(o = s, a)))
    }
}
function dl(e, t) {
    var n = un(e)
      , o = n === "transform" ? Ya : Ti;
    return this.attrTween(e, typeof t == "function" ? (n.local ? cl : ul)(n, o, oo(this, "attr." + e, t)) : t == null ? (n.local ? sl : rl)(n) : (n.local ? ll : al)(n, o, t))
}
function fl(e, t) {
    return function(n) {
        this.setAttribute(e, t.call(this, n))
    }
}
function hl(e, t) {
    return function(n) {
        this.setAttributeNS(e.space, e.local, t.call(this, n))
    }
}
function gl(e, t) {
    var n, o;
    function i() {
        var r = t.apply(this, arguments);
        return r !== o && (n = (o = r) && hl(e, r)),
        n
    }
    return i._value = t,
    i
}
function vl(e, t) {
    var n, o;
    function i() {
        var r = t.apply(this, arguments);
        return r !== o && (n = (o = r) && fl(e, r)),
        n
    }
    return i._value = t,
    i
}
function pl(e, t) {
    var n = "attr." + e;
    if (arguments.length < 2)
        return (n = this.tween(n)) && n._value;
    if (t == null)
        return this.tween(n, null);
    if (typeof t != "function")
        throw new Error;
    var o = un(e);
    return this.tween(n, (o.local ? gl : vl)(o, t))
}
function ml(e, t) {
    return function() {
        no(this, e).delay = +t.apply(this, arguments)
    }
}
function yl(e, t) {
    return t = +t,
    function() {
        no(this, e).delay = t
    }
}
function _l(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? ml : yl)(t, e)) : Ie(this.node(), t).delay
}
function wl(e, t) {
    return function() {
        Ae(this, e).duration = +t.apply(this, arguments)
    }
}
function bl(e, t) {
    return t = +t,
    function() {
        Ae(this, e).duration = t
    }
}
function xl(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? wl : bl)(t, e)) : Ie(this.node(), t).duration
}
function El(e, t) {
    if (typeof t != "function")
        throw new Error;
    return function() {
        Ae(this, e).ease = t
    }
}
function Sl(e) {
    var t = this._id;
    return arguments.length ? this.each(El(t, e)) : Ie(this.node(), t).ease
}
function Nl(e, t) {
    return function() {
        var n = t.apply(this, arguments);
        if (typeof n != "function")
            throw new Error;
        Ae(this, e).ease = n
    }
}
function Cl(e) {
    if (typeof e != "function")
        throw new Error;
    return this.each(Nl(this._id, e))
}
function Ml(e) {
    typeof e != "function" && (e = ai(e));
    for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
        for (var r = t[i], s = r.length, a = o[i] = [], l, u = 0; u < s; ++u)
            (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
    return new Le(o,this._parents,this._name,this._id)
}
function Il(e) {
    if (e._id !== this._id)
        throw new Error;
    for (var t = this._groups, n = e._groups, o = t.length, i = n.length, r = Math.min(o, i), s = new Array(o), a = 0; a < r; ++a)
        for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), m, p = 0; p < c; ++p)
            (m = l[p] || u[p]) && (d[p] = m);
    for (; a < o; ++a)
        s[a] = t[a];
    return new Le(s,this._parents,this._name,this._id)
}
function Tl(e) {
    return (e + "").trim().split(/^|\s+/).every(function(t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)),
        !t || t === "start"
    })
}
function kl(e, t, n) {
    var o, i, r = Tl(t) ? no : Ae;
    return function() {
        var s = r(this, e)
          , a = s.on;
        a !== o && (i = (o = a).copy()).on(t, n),
        s.on = i
    }
}
function Pl(e, t) {
    var n = this._id;
    return arguments.length < 2 ? Ie(this.node(), n).on.on(e) : this.each(kl(n, e, t))
}
function $l(e) {
    return function() {
        var t = this.parentNode;
        for (var n in this.__transition)
            if (+n !== e)
                return;
        t && t.removeChild(this)
    }
}
function Dl() {
    return this.on("end.remove", $l(this._id))
}
function Al(e) {
    var t = this._name
      , n = this._id;
    typeof e != "function" && (e = Qn(e));
    for (var o = this._groups, i = o.length, r = new Array(i), s = 0; s < i; ++s)
        for (var a = o[s], l = a.length, u = r[s] = new Array(l), c, d, m = 0; m < l; ++m)
            (c = a[m]) && (d = e.call(c, c.__data__, m, a)) && ("__data__"in c && (d.__data__ = c.__data__),
            u[m] = d,
            dn(u[m], t, n, m, u, Ie(c, n)));
    return new Le(r,this._parents,t,n)
}
function Ol(e) {
    var t = this._name
      , n = this._id;
    typeof e != "function" && (e = si(e));
    for (var o = this._groups, i = o.length, r = [], s = [], a = 0; a < i; ++a)
        for (var l = o[a], u = l.length, c, d = 0; d < u; ++d)
            if (c = l[d]) {
                for (var m = e.call(c, c.__data__, d, l), p, C = Ie(c, n), x = 0, E = m.length; x < E; ++x)
                    (p = m[x]) && dn(p, t, n, x, m, C);
                r.push(m),
                s.push(c)
            }
    return new Le(r,s,t,n)
}
var zl = At.prototype.constructor;
function Bl() {
    return new zl(this._groups,this._parents)
}
function Rl(e, t) {
    var n, o, i;
    return function() {
        var r = ft(this, e)
          , s = (this.style.removeProperty(e),
        ft(this, e));
        return r === s ? null : r === n && s === o ? i : i = t(n = r, o = s)
    }
}
function ki(e) {
    return function() {
        this.style.removeProperty(e)
    }
}
function Vl(e, t, n) {
    var o, i = n + "", r;
    return function() {
        var s = ft(this, e);
        return s === i ? null : s === o ? r : r = t(o = s, n)
    }
}
function Hl(e, t, n) {
    var o, i, r;
    return function() {
        var s = ft(this, e)
          , a = n(this)
          , l = a + "";
        return a == null && (l = a = (this.style.removeProperty(e),
        ft(this, e))),
        s === l ? null : s === o && l === i ? r : (i = l,
        r = t(o = s, a))
    }
}
function Ll(e, t) {
    var n, o, i, r = "style." + t, s = "end." + r, a;
    return function() {
        var l = Ae(this, e)
          , u = l.on
          , c = l.value[r] == null ? a || (a = ki(t)) : void 0;
        (u !== n || i !== c) && (o = (n = u).copy()).on(s, i = c),
        l.on = o
    }
}
function Fl(e, t, n) {
    var o = (e += "") == "transform" ? Fa : Ti;
    return t == null ? this.styleTween(e, Rl(e, o)).on("end.style." + e, ki(e)) : typeof t == "function" ? this.styleTween(e, Hl(e, o, oo(this, "style." + e, t))).each(Ll(this._id, e)) : this.styleTween(e, Vl(e, o, t), n).on("end.style." + e, null)
}
function Yl(e, t, n) {
    return function(o) {
        this.style.setProperty(e, t.call(this, o), n)
    }
}
function Gl(e, t, n) {
    var o, i;
    function r() {
        var s = t.apply(this, arguments);
        return s !== i && (o = (i = s) && Yl(e, s, n)),
        o
    }
    return r._value = t,
    r
}
function Xl(e, t, n) {
    var o = "style." + (e += "");
    if (arguments.length < 2)
        return (o = this.tween(o)) && o._value;
    if (t == null)
        return this.tween(o, null);
    if (typeof t != "function")
        throw new Error;
    return this.tween(o, Gl(e, t, n ?? ""))
}
function Ul(e) {
    return function() {
        this.textContent = e
    }
}
function Zl(e) {
    return function() {
        var t = e(this);
        this.textContent = t ?? ""
    }
}
function Wl(e) {
    return this.tween("text", typeof e == "function" ? Zl(oo(this, "text", e)) : Ul(e == null ? "" : e + ""))
}
function Kl(e) {
    return function(t) {
        this.textContent = e.call(this, t)
    }
}
function ql(e) {
    var t, n;
    function o() {
        var i = e.apply(this, arguments);
        return i !== n && (t = (n = i) && Kl(i)),
        t
    }
    return o._value = e,
    o
}
function Jl(e) {
    var t = "text";
    if (arguments.length < 1)
        return (t = this.tween(t)) && t._value;
    if (e == null)
        return this.tween(t, null);
    if (typeof e != "function")
        throw new Error;
    return this.tween(t, ql(e))
}
function Ql() {
    for (var e = this._name, t = this._id, n = Pi(), o = this._groups, i = o.length, r = 0; r < i; ++r)
        for (var s = o[r], a = s.length, l, u = 0; u < a; ++u)
            if (l = s[u]) {
                var c = Ie(l, t);
                dn(l, e, n, u, s, {
                    time: c.time + c.delay + c.duration,
                    delay: 0,
                    duration: c.duration,
                    ease: c.ease
                })
            }
    return new Le(o,this._parents,e,n)
}
function jl() {
    var e, t, n = this, o = n._id, i = n.size();
    return new Promise(function(r, s) {
        var a = {
            value: s
        }
          , l = {
            value: function() {
                --i === 0 && r()
            }
        };
        n.each(function() {
            var u = Ae(this, o)
              , c = u.on;
            c !== e && (t = (e = c).copy(),
            t._.cancel.push(a),
            t._.interrupt.push(a),
            t._.end.push(l)),
            u.on = t
        }),
        i === 0 && r()
    }
    )
}
var eu = 0;
function Le(e, t, n, o) {
    this._groups = e,
    this._parents = t,
    this._name = n,
    this._id = o
}
function Pi() {
    return ++eu
}
var Oe = At.prototype;
Le.prototype = {
    constructor: Le,
    select: Al,
    selectAll: Ol,
    selectChild: Oe.selectChild,
    selectChildren: Oe.selectChildren,
    filter: Ml,
    merge: Il,
    selection: Bl,
    transition: Ql,
    call: Oe.call,
    nodes: Oe.nodes,
    node: Oe.node,
    size: Oe.size,
    empty: Oe.empty,
    each: Oe.each,
    on: Pl,
    attr: dl,
    attrTween: pl,
    style: Fl,
    styleTween: Xl,
    text: Wl,
    textTween: Jl,
    remove: Dl,
    tween: il,
    delay: _l,
    duration: xl,
    ease: Sl,
    easeVarying: Cl,
    end: jl,
    [Symbol.iterator]: Oe[Symbol.iterator]
};
function tu(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
}
var nu = {
    time: null,
    delay: 0,
    duration: 250,
    ease: tu
};
function ou(e, t) {
    for (var n; !(n = e.__transition) || !(n = n[t]); )
        if (!(e = e.parentNode))
            throw new Error(`transition ${t} not found`);
    return n
}
function iu(e) {
    var t, n;
    e instanceof Le ? (t = e._id,
    e = e._name) : (t = Pi(),
    (n = nu).time = to(),
    e = e == null ? null : e + "");
    for (var o = this._groups, i = o.length, r = 0; r < i; ++r)
        for (var s = o[r], a = s.length, l, u = 0; u < a; ++u)
            (l = s[u]) && dn(l, e, t, u, s, n || ou(l, t));
    return new Le(o,this._parents,e,t)
}
At.prototype.interrupt = tl;
At.prototype.transition = iu;
const Ht = e => () => e;
function ru(e, {sourceEvent: t, target: n, transform: o, dispatch: i}) {
    Object.defineProperties(this, {
        type: {
            value: e,
            enumerable: !0,
            configurable: !0
        },
        sourceEvent: {
            value: t,
            enumerable: !0,
            configurable: !0
        },
        target: {
            value: n,
            enumerable: !0,
            configurable: !0
        },
        transform: {
            value: o,
            enumerable: !0,
            configurable: !0
        },
        _: {
            value: i
        }
    })
}
function Re(e, t, n) {
    this.k = e,
    this.x = t,
    this.y = n
}
Re.prototype = {
    constructor: Re,
    scale: function(e) {
        return e === 1 ? this : new Re(this.k * e,this.x,this.y)
    },
    translate: function(e, t) {
        return e === 0 & t === 0 ? this : new Re(this.k,this.x + this.k * e,this.y + this.k * t)
    },
    apply: function(e) {
        return [e[0] * this.k + this.x, e[1] * this.k + this.y]
    },
    applyX: function(e) {
        return e * this.k + this.x
    },
    applyY: function(e) {
        return e * this.k + this.y
    },
    invert: function(e) {
        return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
    },
    invertX: function(e) {
        return (e - this.x) / this.k
    },
    invertY: function(e) {
        return (e - this.y) / this.k
    },
    rescaleX: function(e) {
        return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
    },
    rescaleY: function(e) {
        return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
    }
};
var gt = new Re(1,0,0);
Re.prototype;
function Sn(e) {
    e.stopImmediatePropagation()
}
function _t(e) {
    e.preventDefault(),
    e.stopImmediatePropagation()
}
function su(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button
}
function au() {
    var e = this;
    return e instanceof SVGElement ? (e = e.ownerSVGElement || e,
    e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal,
    [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]]
}
function Io() {
    return this.__zoom || gt
}
function lu(e) {
    return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1)
}
function uu() {
    return navigator.maxTouchPoints || "ontouchstart"in this
}
function cu(e, t, n) {
    var o = e.invertX(t[0][0]) - n[0][0]
      , i = e.invertX(t[1][0]) - n[1][0]
      , r = e.invertY(t[0][1]) - n[0][1]
      , s = e.invertY(t[1][1]) - n[1][1];
    return e.translate(i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i), s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s))
}
function du() {
    var e = su, t = au, n = cu, o = lu, i = uu, r = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Za, u = ln("start", "zoom", "end"), c, d, m, p = 500, C = 150, x = 0, E = 10;
    function N(y) {
        y.property("__zoom", Io).on("wheel.zoom", z, {
            passive: !1
        }).on("mousedown.zoom", q).on("dblclick.zoom", W).filter(i).on("touchstart.zoom", $).on("touchmove.zoom", w).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }
    N.transform = function(y, T, b, k) {
        var P = y.selection ? y.selection() : y;
        P.property("__zoom", Io),
        y !== P ? D(y, T, b, k) : P.interrupt().each(function() {
            L(this, arguments).event(k).start().zoom(null, typeof T == "function" ? T.apply(this, arguments) : T).end()
        })
    }
    ,
    N.scaleBy = function(y, T, b, k) {
        N.scaleTo(y, function() {
            var P = this.__zoom.k
              , O = typeof T == "function" ? T.apply(this, arguments) : T;
            return P * O
        }, b, k)
    }
    ,
    N.scaleTo = function(y, T, b, k) {
        N.transform(y, function() {
            var P = t.apply(this, arguments)
              , O = this.__zoom
              , A = b == null ? S(P) : typeof b == "function" ? b.apply(this, arguments) : b
              , G = O.invert(A)
              , j = typeof T == "function" ? T.apply(this, arguments) : T;
            return n(_(M(O, j), A, G), P, s)
        }, b, k)
    }
    ,
    N.translateBy = function(y, T, b, k) {
        N.transform(y, function() {
            return n(this.__zoom.translate(typeof T == "function" ? T.apply(this, arguments) : T, typeof b == "function" ? b.apply(this, arguments) : b), t.apply(this, arguments), s)
        }, null, k)
    }
    ,
    N.translateTo = function(y, T, b, k, P) {
        N.transform(y, function() {
            var O = t.apply(this, arguments)
              , A = this.__zoom
              , G = k == null ? S(O) : typeof k == "function" ? k.apply(this, arguments) : k;
            return n(gt.translate(G[0], G[1]).scale(A.k).translate(typeof T == "function" ? -T.apply(this, arguments) : -T, typeof b == "function" ? -b.apply(this, arguments) : -b), O, s)
        }, k, P)
    }
    ;
    function M(y, T) {
        return T = Math.max(r[0], Math.min(r[1], T)),
        T === y.k ? y : new Re(T,y.x,y.y)
    }
    function _(y, T, b) {
        var k = T[0] - b[0] * y.k
          , P = T[1] - b[1] * y.k;
        return k === y.x && P === y.y ? y : new Re(y.k,k,P)
    }
    function S(y) {
        return [(+y[0][0] + +y[1][0]) / 2, (+y[0][1] + +y[1][1]) / 2]
    }
    function D(y, T, b, k) {
        y.on("start.zoom", function() {
            L(this, arguments).event(k).start()
        }).on("interrupt.zoom end.zoom", function() {
            L(this, arguments).event(k).end()
        }).tween("zoom", function() {
            var P = this
              , O = arguments
              , A = L(P, O).event(k)
              , G = t.apply(P, O)
              , j = b == null ? S(G) : typeof b == "function" ? b.apply(P, O) : b
              , oe = Math.max(G[1][0] - G[0][0], G[1][1] - G[0][1])
              , B = P.__zoom
              , H = typeof T == "function" ? T.apply(P, O) : T
              , K = l(B.invert(j).concat(oe / B.k), H.invert(j).concat(oe / H.k));
            return function(se) {
                if (se === 1)
                    se = H;
                else {
                    var ae = K(se)
                      , te = oe / ae[2];
                    se = new Re(te,j[0] - ae[0] * te,j[1] - ae[1] * te)
                }
                A.zoom(null, se)
            }
        })
    }
    function L(y, T, b) {
        return !b && y.__zooming || new V(y,T)
    }
    function V(y, T) {
        this.that = y,
        this.args = T,
        this.active = 0,
        this.sourceEvent = null,
        this.extent = t.apply(y, T),
        this.taps = 0
    }
    V.prototype = {
        event: function(y) {
            return y && (this.sourceEvent = y),
            this
        },
        start: function() {
            return ++this.active === 1 && (this.that.__zooming = this,
            this.emit("start")),
            this
        },
        zoom: function(y, T) {
            return this.mouse && y !== "mouse" && (this.mouse[1] = T.invert(this.mouse[0])),
            this.touch0 && y !== "touch" && (this.touch0[1] = T.invert(this.touch0[0])),
            this.touch1 && y !== "touch" && (this.touch1[1] = T.invert(this.touch1[0])),
            this.that.__zoom = T,
            this.emit("zoom"),
            this
        },
        end: function() {
            return --this.active === 0 && (delete this.that.__zooming,
            this.emit("end")),
            this
        },
        emit: function(y) {
            var T = Ce(this.that).datum();
            u.call(y, this.that, new ru(y,{
                sourceEvent: this.sourceEvent,
                target: N,
                type: y,
                transform: this.that.__zoom,
                dispatch: u
            }), T)
        }
    };
    function z(y, ...T) {
        if (!e.apply(this, arguments))
            return;
        var b = L(this, T).event(y)
          , k = this.__zoom
          , P = Math.max(r[0], Math.min(r[1], k.k * Math.pow(2, o.apply(this, arguments))))
          , O = ke(y);
        if (b.wheel)
            (b.mouse[0][0] !== O[0] || b.mouse[0][1] !== O[1]) && (b.mouse[1] = k.invert(b.mouse[0] = O)),
            clearTimeout(b.wheel);
        else {
            if (k.k === P)
                return;
            b.mouse = [O, k.invert(O)],
            Wt(this),
            b.start()
        }
        _t(y),
        b.wheel = setTimeout(A, C),
        b.zoom("mouse", n(_(M(k, P), b.mouse[0], b.mouse[1]), b.extent, s));
        function A() {
            b.wheel = null,
            b.end()
        }
    }
    function q(y, ...T) {
        if (m || !e.apply(this, arguments))
            return;
        var b = y.currentTarget
          , k = L(this, T, !0).event(y)
          , P = Ce(y.view).on("mousemove.zoom", j, !0).on("mouseup.zoom", oe, !0)
          , O = ke(y, b)
          , A = y.clientX
          , G = y.clientY;
        mi(y.view),
        Sn(y),
        k.mouse = [O, this.__zoom.invert(O)],
        Wt(this),
        k.start();
        function j(B) {
            if (_t(B),
            !k.moved) {
                var H = B.clientX - A
                  , K = B.clientY - G;
                k.moved = H * H + K * K > x
            }
            k.event(B).zoom("mouse", n(_(k.that.__zoom, k.mouse[0] = ke(B, b), k.mouse[1]), k.extent, s))
        }
        function oe(B) {
            P.on("mousemove.zoom mouseup.zoom", null),
            yi(B.view, k.moved),
            _t(B),
            k.event(B).end()
        }
    }
    function W(y, ...T) {
        if (e.apply(this, arguments)) {
            var b = this.__zoom
              , k = ke(y.changedTouches ? y.changedTouches[0] : y, this)
              , P = b.invert(k)
              , O = b.k * (y.shiftKey ? .5 : 2)
              , A = n(_(M(b, O), k, P), t.apply(this, T), s);
            _t(y),
            a > 0 ? Ce(this).transition().duration(a).call(D, A, k, y) : Ce(this).call(N.transform, A, k, y)
        }
    }
    function $(y, ...T) {
        if (e.apply(this, arguments)) {
            var b = y.touches, k = b.length, P = L(this, T, y.changedTouches.length === k).event(y), O, A, G, j;
            for (Sn(y),
            A = 0; A < k; ++A)
                G = b[A],
                j = ke(G, this),
                j = [j, this.__zoom.invert(j), G.identifier],
                P.touch0 ? !P.touch1 && P.touch0[2] !== j[2] && (P.touch1 = j,
                P.taps = 0) : (P.touch0 = j,
                O = !0,
                P.taps = 1 + !!c);
            c && (c = clearTimeout(c)),
            O && (P.taps < 2 && (d = j[0],
            c = setTimeout(function() {
                c = null
            }, p)),
            Wt(this),
            P.start())
        }
    }
    function w(y, ...T) {
        if (this.__zooming) {
            var b = L(this, T).event(y), k = y.changedTouches, P = k.length, O, A, G, j;
            for (_t(y),
            O = 0; O < P; ++O)
                A = k[O],
                G = ke(A, this),
                b.touch0 && b.touch0[2] === A.identifier ? b.touch0[0] = G : b.touch1 && b.touch1[2] === A.identifier && (b.touch1[0] = G);
            if (A = b.that.__zoom,
            b.touch1) {
                var oe = b.touch0[0]
                  , B = b.touch0[1]
                  , H = b.touch1[0]
                  , K = b.touch1[1]
                  , se = (se = H[0] - oe[0]) * se + (se = H[1] - oe[1]) * se
                  , ae = (ae = K[0] - B[0]) * ae + (ae = K[1] - B[1]) * ae;
                A = M(A, Math.sqrt(se / ae)),
                G = [(oe[0] + H[0]) / 2, (oe[1] + H[1]) / 2],
                j = [(B[0] + K[0]) / 2, (B[1] + K[1]) / 2]
            } else if (b.touch0)
                G = b.touch0[0],
                j = b.touch0[1];
            else
                return;
            b.zoom("touch", n(_(A, G, j), b.extent, s))
        }
    }
    function Y(y, ...T) {
        if (this.__zooming) {
            var b = L(this, T).event(y), k = y.changedTouches, P = k.length, O, A;
            for (Sn(y),
            m && clearTimeout(m),
            m = setTimeout(function() {
                m = null
            }, p),
            O = 0; O < P; ++O)
                A = k[O],
                b.touch0 && b.touch0[2] === A.identifier ? delete b.touch0 : b.touch1 && b.touch1[2] === A.identifier && delete b.touch1;
            if (b.touch1 && !b.touch0 && (b.touch0 = b.touch1,
            delete b.touch1),
            b.touch0)
                b.touch0[1] = this.__zoom.invert(b.touch0[0]);
            else if (b.end(),
            b.taps === 2 && (A = ke(A, this),
            Math.hypot(d[0] - A[0], d[1] - A[1]) < E)) {
                var G = Ce(this).on("dblclick.zoom");
                G && G.apply(this, arguments)
            }
        }
    }
    return N.wheelDelta = function(y) {
        return arguments.length ? (o = typeof y == "function" ? y : Ht(+y),
        N) : o
    }
    ,
    N.filter = function(y) {
        return arguments.length ? (e = typeof y == "function" ? y : Ht(!!y),
        N) : e
    }
    ,
    N.touchable = function(y) {
        return arguments.length ? (i = typeof y == "function" ? y : Ht(!!y),
        N) : i
    }
    ,
    N.extent = function(y) {
        return arguments.length ? (t = typeof y == "function" ? y : Ht([[+y[0][0], +y[0][1]], [+y[1][0], +y[1][1]]]),
        N) : t
    }
    ,
    N.scaleExtent = function(y) {
        return arguments.length ? (r[0] = +y[0],
        r[1] = +y[1],
        N) : [r[0], r[1]]
    }
    ,
    N.translateExtent = function(y) {
        return arguments.length ? (s[0][0] = +y[0][0],
        s[1][0] = +y[1][0],
        s[0][1] = +y[0][1],
        s[1][1] = +y[1][1],
        N) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]]
    }
    ,
    N.constrain = function(y) {
        return arguments.length ? (n = y,
        N) : n
    }
    ,
    N.duration = function(y) {
        return arguments.length ? (a = +y,
        N) : a
    }
    ,
    N.interpolate = function(y) {
        return arguments.length ? (l = y,
        N) : l
    }
    ,
    N.on = function() {
        var y = u.on.apply(u, arguments);
        return y === u ? N : y
    }
    ,
    N.clickDistance = function(y) {
        return arguments.length ? (x = (y = +y) * y,
        N) : Math.sqrt(x)
    }
    ,
    N.tapDistance = function(y) {
        return arguments.length ? (E = +y,
        N) : E
    }
    ,
    N
}
var Z = (e => (e.Left = "left",
e.Top = "top",
e.Right = "right",
e.Bottom = "bottom",
e))(Z || {})
  , io = (e => (e.Partial = "partial",
e.Full = "full",
e))(io || {})
  , Je = (e => (e.Bezier = "default",
e.SimpleBezier = "simple-bezier",
e.Straight = "straight",
e.Step = "step",
e.SmoothStep = "smoothstep",
e))(Je || {})
  , We = (e => (e.Strict = "strict",
e.Loose = "loose",
e))(We || {})
  , Gn = (e => (e.Arrow = "arrow",
e.ArrowClosed = "arrowclosed",
e))(Gn || {})
  , St = (e => (e.Free = "free",
e.Vertical = "vertical",
e.Horizontal = "horizontal",
e))(St || {})
  , fu = (e => (e.TopLeft = "top-left",
e.TopCenter = "top-center",
e.TopRight = "top-right",
e.BottomLeft = "bottom-left",
e.BottomCenter = "bottom-center",
e.BottomRight = "bottom-right",
e))(fu || {});
function Xn(e) {
    var t, n;
    const o = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target
      , i = typeof (o == null ? void 0 : o.hasAttribute) == "function" ? o.hasAttribute("contenteditable") : !1
      , r = typeof (o == null ? void 0 : o.closest) == "function" ? o.closest(".nokey") : null;
    return ["INPUT", "SELECT", "TEXTAREA"].includes(o == null ? void 0 : o.nodeName) || i || !!r
}
function hu(e) {
    return e.ctrlKey || e.metaKey || e.shiftKey
}
function To(e, t, n, o) {
    const i = t.replace("+", `
`).replace(`

`, `
+`).split(`
`).map(s => s.trim().toLowerCase());
    if (i.length === 1)
        return e.toLowerCase() === t.toLowerCase();
    o || n.add(e.toLowerCase());
    const r = i.every( (s, a) => n.has(s) && Array.from(n.values())[a] === i[a]);
    return o && n.delete(e.toLowerCase()),
    r
}
function gu(e, t) {
    return n => {
        if (!n.code && !n.key)
            return !1;
        const o = vu(n.code, e);
        return Array.isArray(e) ? e.some(i => To(n[o], i, t, n.type === "keyup")) : To(n[o], e, t, n.type === "keyup")
    }
}
function vu(e, t) {
    return t.includes(e) ? "code" : "key"
}
function Nt(e, t) {
    const n = ye( () => de(t == null ? void 0 : t.actInsideInputWithModifier) ?? !1)
      , o = ye( () => de(t == null ? void 0 : t.target) ?? window)
      , i = ve(de(e) === !0);
    let r = !1;
    const s = new Set;
    let a = u(de(e));
    he( () => de(e), (c, d) => {
        typeof d == "boolean" && typeof c != "boolean" && l(),
        a = u(c)
    }
    , {
        immediate: !0
    }),
    ii(["blur", "contextmenu"], l),
    uo( (...c) => a(...c), c => {
        r = hu(c),
        !((!r || r && !n.value) && Xn(c)) && (c.preventDefault(),
        i.value = !0)
    }
    , {
        eventName: "keydown",
        target: o
    }),
    uo( (...c) => a(...c), c => {
        if (i.value) {
            if ((!r || r && !n.value) && Xn(c))
                return;
            r = !1,
            i.value = !1
        }
    }
    , {
        eventName: "keyup",
        target: o
    });
    function l() {
        r = !1,
        s.clear(),
        i.value = de(e) === !0
    }
    function u(c) {
        return c === null ? (l(),
        () => !1) : typeof c == "boolean" ? (l(),
        i.value = c,
        () => !1) : Array.isArray(c) || typeof c == "string" ? gu(c, s) : c
    }
    return i
}
const $i = "vue-flow__node-desc"
  , Di = "vue-flow__edge-desc"
  , pu = "vue-flow__aria-live"
  , Ai = ["Enter", " ", "Escape"]
  , lt = {
    ArrowUp: {
        x: 0,
        y: -1
    },
    ArrowDown: {
        x: 0,
        y: 1
    },
    ArrowLeft: {
        x: -1,
        y: 0
    },
    ArrowRight: {
        x: 1,
        y: 0
    }
};
function tn(e) {
    return {
        ...e.computedPosition || {
            x: 0,
            y: 0
        },
        width: e.dimensions.width || 0,
        height: e.dimensions.height || 0
    }
}
function nn(e, t) {
    const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x))
      , o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
    return Math.ceil(n * o)
}
function fn(e) {
    return {
        width: e.offsetWidth,
        height: e.offsetHeight
    }
}
function it(e, t=0, n=1) {
    return Math.min(Math.max(e, t), n)
}
function Oi(e, t) {
    return {
        x: it(e.x, t[0][0], t[1][0]),
        y: it(e.y, t[0][1], t[1][1])
    }
}
function ko(e) {
    const t = e.getRootNode();
    return "elementFromPoint"in t ? t : window.document
}
function Ke(e) {
    return e && typeof e == "object" && "id"in e && "source"in e && "target"in e
}
function tt(e) {
    return e && typeof e == "object" && "id"in e && "position"in e && !Ke(e)
}
function xt(e) {
    return tt(e) && "computedPosition"in e
}
function Lt(e) {
    return !Number.isNaN(e) && Number.isFinite(e)
}
function mu(e) {
    return Lt(e.width) && Lt(e.height) && Lt(e.x) && Lt(e.y)
}
function yu(e, t, n) {
    const o = {
        id: e.id.toString(),
        type: e.type ?? "default",
        dimensions: Et({
            width: 0,
            height: 0
        }),
        computedPosition: Et({
            z: 0,
            ...e.position
        }),
        handleBounds: {
            source: [],
            target: []
        },
        draggable: void 0,
        selectable: void 0,
        connectable: void 0,
        focusable: void 0,
        selected: !1,
        dragging: !1,
        resizing: !1,
        initialized: !1,
        isParent: !1,
        position: {
            x: 0,
            y: 0
        },
        data: be(e.data) ? e.data : {},
        events: Et(be(e.events) ? e.events : {})
    };
    return Object.assign(t ?? o, e, {
        id: e.id.toString(),
        parentNode: n
    })
}
function zi(e, t, n) {
    var o, i;
    const r = {
        id: e.id.toString(),
        type: e.type ?? (t == null ? void 0 : t.type) ?? "default",
        source: e.source.toString(),
        target: e.target.toString(),
        sourceHandle: (o = e.sourceHandle) == null ? void 0 : o.toString(),
        targetHandle: (i = e.targetHandle) == null ? void 0 : i.toString(),
        updatable: e.updatable ?? (n == null ? void 0 : n.updatable),
        selectable: e.selectable ?? (n == null ? void 0 : n.selectable),
        focusable: e.focusable ?? (n == null ? void 0 : n.focusable),
        data: be(e.data) ? e.data : {},
        events: Et(be(e.events) ? e.events : {}),
        label: e.label ?? "",
        interactionWidth: e.interactionWidth ?? (n == null ? void 0 : n.interactionWidth),
        ...n ?? {}
    };
    return Object.assign(t ?? r, e, {
        id: e.id.toString()
    })
}
function Bi(e, t, n, o) {
    const i = typeof e == "string" ? e : e.id
      , r = new Set
      , s = o === "source" ? "target" : "source";
    for (const a of n)
        a[s] === i && r.add(a[o]);
    return t.filter(a => r.has(a.id))
}
function _u(...e) {
    if (e.length === 3) {
        const [r,s,a] = e;
        return Bi(r, s, a, "target")
    }
    const [t,n] = e
      , o = typeof t == "string" ? t : t.id;
    return n.filter(r => Ke(r) && r.source === o).map(r => n.find(s => tt(s) && s.id === r.target))
}
function wu(...e) {
    if (e.length === 3) {
        const [r,s,a] = e;
        return Bi(r, s, a, "source")
    }
    const [t,n] = e
      , o = typeof t == "string" ? t : t.id;
    return n.filter(r => Ke(r) && r.target === o).map(r => n.find(s => tt(s) && s.id === r.source))
}
function Ri({source: e, sourceHandle: t, target: n, targetHandle: o}) {
    return `vueflow__edge-${e}${t ?? ""}-${n}${o ?? ""}`
}
function bu(e, t) {
    return t.some(n => Ke(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle))
}
function Un({x: e, y: t}, {x: n, y: o, zoom: i}) {
    return {
        x: e * i + n,
        y: t * i + o
    }
}
function Pt({x: e, y: t}, {x: n, y: o, zoom: i}, r=!1, s=[1, 1]) {
    const a = {
        x: (e - n) / i,
        y: (t - o) / i
    };
    return r ? hn(a, s) : a
}
function Vi(e, t) {
    return {
        x: Math.min(e.x, t.x),
        y: Math.min(e.y, t.y),
        x2: Math.max(e.x2, t.x2),
        y2: Math.max(e.y2, t.y2)
    }
}
function on({x: e, y: t, width: n, height: o}) {
    return {
        x: e,
        y: t,
        x2: e + n,
        y2: t + o
    }
}
function Hi({x: e, y: t, x2: n, y2: o}) {
    return {
        x: e,
        y: t,
        width: n - e,
        height: o - t
    }
}
function wd(e, t) {
    return Hi(Vi(on(e), on(t)))
}
function Li(e) {
    let t = {
        x: Number.POSITIVE_INFINITY,
        y: Number.POSITIVE_INFINITY,
        x2: Number.NEGATIVE_INFINITY,
        y2: Number.NEGATIVE_INFINITY
    };
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        t = Vi(t, on({
            ...o.computedPosition,
            ...o.dimensions
        }))
    }
    return Hi(t)
}
function Fi(e, t, n={
    x: 0,
    y: 0,
    zoom: 1
}, o=!1, i=!1) {
    const r = {
        ...Pt(t, n),
        width: t.width / n.zoom,
        height: t.height / n.zoom
    }
      , s = [];
    for (const a of e) {
        const {dimensions: l, selectable: u=!0, hidden: c=!1} = a
          , d = l.width ?? a.width ?? null
          , m = l.height ?? a.height ?? null;
        if (i && !u || c)
            continue;
        const p = nn(r, tn(a))
          , C = d === null || m === null
          , x = o && p > 0
          , E = (d ?? 0) * (m ?? 0);
        (C || x || p >= E || a.dragging) && s.push(a)
    }
    return s
}
function Yi(e, t) {
    const n = new Set;
    if (typeof e == "string")
        n.add(e);
    else if (e.length >= 1)
        for (const o of e)
            n.add(o.id);
    return t.filter(o => n.has(o.source) || n.has(o.target))
}
function Po(e, t, n, o, i, r=.1, s={
    x: 0,
    y: 0
}) {
    const a = t / (e.width * (1 + r))
      , l = n / (e.height * (1 + r))
      , u = Math.min(a, l)
      , c = it(u, o, i)
      , d = e.x + e.width / 2
      , m = e.y + e.height / 2
      , p = t / 2 - d * c + (s.x ?? 0)
      , C = n / 2 - m * c + (s.y ?? 0);
    return {
        x: p,
        y: C,
        zoom: c
    }
}
function xu(e, t) {
    return {
        x: t.x + e.x,
        y: t.y + e.y,
        z: (e.z > t.z ? e.z : t.z) + 1
    }
}
function Gi(e, t) {
    if (!e.parentNode)
        return !1;
    const n = t(e.parentNode);
    return n ? n.selected ? !0 : Gi(n, t) : !1
}
function $t(e, t) {
    return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map(o => `${o}=${e[o]}`).join("&")}`
}
function $o(e, t, n) {
    return e < t ? it(Math.abs(e - t), 1, t) / t : e > n ? -it(Math.abs(e - n), 1, t) / t : 0
}
function Xi(e, t, n=15, o=40) {
    const i = $o(e.x, o, t.width - o) * n
      , r = $o(e.y, o, t.height - o) * n;
    return [i, r]
}
function Nn(e, t) {
    if (t) {
        const n = e.position.x + e.dimensions.width - t.dimensions.width
          , o = e.position.y + e.dimensions.height - t.dimensions.height;
        if (n > 0 || o > 0 || e.position.x < 0 || e.position.y < 0) {
            let i = {};
            if (typeof t.style == "function" ? i = {
                ...t.style(t)
            } : t.style && (i = {
                ...t.style
            }),
            i.width = i.width ?? `${t.dimensions.width}px`,
            i.height = i.height ?? `${t.dimensions.height}px`,
            n > 0)
                if (typeof i.width == "string") {
                    const r = Number(i.width.replace("px", ""));
                    i.width = `${r + n}px`
                } else
                    i.width += n;
            if (o > 0)
                if (typeof i.height == "string") {
                    const r = Number(i.height.replace("px", ""));
                    i.height = `${r + o}px`
                } else
                    i.height += o;
            if (e.position.x < 0) {
                const r = Math.abs(e.position.x);
                if (t.position.x = t.position.x - r,
                typeof i.width == "string") {
                    const s = Number(i.width.replace("px", ""));
                    i.width = `${s + r}px`
                } else
                    i.width += r;
                e.position.x = 0
            }
            if (e.position.y < 0) {
                const r = Math.abs(e.position.y);
                if (t.position.y = t.position.y - r,
                typeof i.height == "string") {
                    const s = Number(i.height.replace("px", ""));
                    i.height = `${s + r}px`
                } else
                    i.height += r;
                e.position.y = 0
            }
            t.dimensions.width = Number(i.width.toString().replace("px", "")),
            t.dimensions.height = Number(i.height.toString().replace("px", "")),
            typeof t.style == "function" ? t.style = r => {
                const s = t.style;
                return {
                    ...s(r),
                    ...i
                }
            }
            : t.style = {
                ...t.style,
                ...i
            }
        }
    }
}
function Do(e, t) {
    var n, o;
    const i = e.filter(s => s.type === "add" || s.type === "remove");
    for (const s of i)
        if (s.type === "add")
            t.findIndex(l => l.id === s.item.id) === -1 && t.push(s.item);
        else if (s.type === "remove") {
            const a = t.findIndex(l => l.id === s.id);
            a !== -1 && t.splice(a, 1)
        }
    const r = t.map(s => s.id);
    for (const s of t)
        for (const a of e)
            if (a.id === s.id)
                switch (a.type) {
                case "select":
                    s.selected = a.selected;
                    break;
                case "position":
                    if (xt(s) && (typeof a.position < "u" && (s.position = a.position),
                    typeof a.dragging < "u" && (s.dragging = a.dragging),
                    s.expandParent && s.parentNode)) {
                        const l = t[r.indexOf(s.parentNode)];
                        l && xt(l) && Nn(s, l)
                    }
                    break;
                case "dimensions":
                    if (xt(s) && (typeof a.dimensions < "u" && (s.dimensions = a.dimensions),
                    typeof a.updateStyle < "u" && a.updateStyle && (s.style = {
                        ...s.style || {},
                        width: `${(n = a.dimensions) == null ? void 0 : n.width}px`,
                        height: `${(o = a.dimensions) == null ? void 0 : o.height}px`
                    }),
                    typeof a.resizing < "u" && (s.resizing = a.resizing),
                    s.expandParent && s.parentNode)) {
                        const l = t[r.indexOf(s.parentNode)];
                        l && xt(l) && (!!l.dimensions.width && !!l.dimensions.height ? Nn(s, l) : Ve( () => {
                            Nn(s, l)
                        }
                        ))
                    }
                    break
                }
    return t
}
function Ye(e, t) {
    return {
        id: e,
        type: "select",
        selected: t
    }
}
function Ao(e) {
    return {
        item: e,
        type: "add"
    }
}
function Oo(e) {
    return {
        id: e,
        type: "remove"
    }
}
function zo(e, t, n, o, i) {
    return {
        id: e,
        source: t,
        target: n,
        sourceHandle: o || null,
        targetHandle: i || null,
        type: "remove"
    }
}
function Xe(e, t=new Set, n=!1) {
    const o = [];
    for (const [i,r] of e) {
        const s = t.has(i);
        !(r.selected === void 0 && !s) && r.selected !== s && (n && (r.selected = s),
        o.push(Ye(r.id, s)))
    }
    return o
}
function R(e) {
    const t = new Set;
    let n = !1;
    const o = () => t.size > 0;
    e && (n = !0,
    t.add(e));
    const i = a => {
        t.delete(a)
    }
    ;
    return {
        on: a => {
            e && n && t.delete(e),
            t.add(a);
            const l = () => {
                i(a),
                e && n && t.add(e)
            }
            ;
            return an(l),
            {
                off: l
            }
        }
        ,
        off: i,
        trigger: a => Promise.all(Array.from(t).map(l => l(a))),
        hasListeners: o,
        fns: t
    }
}
function Bo(e, t, n) {
    let o = e;
    do {
        if (o && o.matches(t))
            return !0;
        if (o === n)
            return !1;
        o = o.parentElement
    } while (o);
    return !1
}
function Eu(e, t, n, o, i) {
    var r, s;
    const a = [];
    for (const l of e)
        (l.selected || l.id === i) && (!l.parentNode || !Gi(l, o)) && (l.draggable || t && typeof l.draggable > "u") && a.push(Et({
            id: l.id,
            position: l.position || {
                x: 0,
                y: 0
            },
            distance: {
                x: n.x - ((r = l.computedPosition) == null ? void 0 : r.x) || 0,
                y: n.y - ((s = l.computedPosition) == null ? void 0 : s.y) || 0
            },
            from: l.computedPosition,
            extent: l.extent,
            parentNode: l.parentNode,
            dimensions: l.dimensions,
            expandParent: l.expandParent
        }));
    return a
}
function Cn({id: e, dragItems: t, findNode: n}) {
    const o = [];
    for (const i of t) {
        const r = n(i.id);
        r && o.push(r)
    }
    return [e ? o.find(i => i.id === e) : o[0], o]
}
function Ui(e) {
    if (Array.isArray(e))
        switch (e.length) {
        case 1:
            return [e[0], e[0], e[0], e[0]];
        case 2:
            return [e[0], e[1], e[0], e[1]];
        case 3:
            return [e[0], e[1], e[2], e[1]];
        case 4:
            return e;
        default:
            return [0, 0, 0, 0]
        }
    return [e, e, e, e]
}
function Su(e, t, n) {
    const [o,i,r,s] = typeof e != "string" ? Ui(e.padding) : [0, 0, 0, 0];
    return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [[n.computedPosition.x + s, n.computedPosition.y + o], [n.computedPosition.x + n.dimensions.width - i, n.computedPosition.y + n.dimensions.height - r]] : !1
}
function Nu(e, t, n, o) {
    let i = e.extent || n;
    if ((i === "parent" || !Array.isArray(i) && (i == null ? void 0 : i.range) === "parent") && !e.expandParent)
        if (e.parentNode && o && e.dimensions.width && e.dimensions.height) {
            const r = Su(i, e, o);
            r && (i = r)
        } else
            t(new Ee(xe.NODE_EXTENT_INVALID,e.id)),
            i = n;
    else if (Array.isArray(i)) {
        const r = (o == null ? void 0 : o.computedPosition.x) || 0
          , s = (o == null ? void 0 : o.computedPosition.y) || 0;
        i = [[i[0][0] + r, i[0][1] + s], [i[1][0] + r, i[1][1] + s]]
    } else if (i !== "parent" && (i != null && i.range) && Array.isArray(i.range)) {
        const [r,s,a,l] = Ui(i.padding)
          , u = (o == null ? void 0 : o.computedPosition.x) || 0
          , c = (o == null ? void 0 : o.computedPosition.y) || 0;
        i = [[i.range[0][0] + u + l, i.range[0][1] + c + r], [i.range[1][0] + u - s, i.range[1][1] + c - a]]
    }
    return i === "parent" ? [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]] : i
}
function Cu({width: e, height: t}, n) {
    return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]]
}
function ro(e, t, n, o, i) {
    const r = Cu(e.dimensions, Nu(e, n, o, i))
      , s = Oi(t, r);
    return {
        position: {
            x: s.x - ((i == null ? void 0 : i.computedPosition.x) || 0),
            y: s.y - ((i == null ? void 0 : i.computedPosition.y) || 0)
        },
        computedPosition: s
    }
}
function vt(e, t, n=Z.Left, o=!1) {
    const i = ((t == null ? void 0 : t.x) ?? 0) + e.computedPosition.x
      , r = ((t == null ? void 0 : t.y) ?? 0) + e.computedPosition.y
      , {width: s, height: a} = t ?? Tu(e);
    if (o)
        return {
            x: i + s / 2,
            y: r + a / 2
        };
    switch ((t == null ? void 0 : t.position) ?? n) {
    case Z.Top:
        return {
            x: i + s / 2,
            y: r
        };
    case Z.Right:
        return {
            x: i + s,
            y: r + a / 2
        };
    case Z.Bottom:
        return {
            x: i + s / 2,
            y: r + a
        };
    case Z.Left:
        return {
            x: i,
            y: r + a / 2
        }
    }
}
function Ro(e, t) {
    return e && (t ? e.find(n => n.id === t) : e[0]) || null
}
function Mu({sourcePos: e, targetPos: t, sourceWidth: n, sourceHeight: o, targetWidth: i, targetHeight: r, width: s, height: a, viewport: l}) {
    const u = {
        x: Math.min(e.x, t.x),
        y: Math.min(e.y, t.y),
        x2: Math.max(e.x + n, t.x + i),
        y2: Math.max(e.y + o, t.y + r)
    };
    u.x === u.x2 && (u.x2 += 1),
    u.y === u.y2 && (u.y2 += 1);
    const c = on({
        x: (0 - l.x) / l.zoom,
        y: (0 - l.y) / l.zoom,
        width: s / l.zoom,
        height: a / l.zoom
    })
      , d = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x))
      , m = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
    return Math.ceil(d * m) > 0
}
function Iu(e, t, n=!1) {
    const o = typeof e.zIndex == "number";
    let i = o ? e.zIndex : 0;
    const r = t(e.source)
      , s = t(e.target);
    return !r || !s ? 0 : (n && (i = o ? e.zIndex : Math.max(r.computedPosition.z || 0, s.computedPosition.z || 0)),
    i)
}
var xe = (e => (e.MISSING_STYLES = "MISSING_STYLES",
e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS",
e.NODE_INVALID = "NODE_INVALID",
e.NODE_NOT_FOUND = "NODE_NOT_FOUND",
e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT",
e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING",
e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID",
e.EDGE_INVALID = "EDGE_INVALID",
e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND",
e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING",
e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING",
e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING",
e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME",
e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING",
e.EDGE_ORPHANED = "EDGE_ORPHANED",
e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS",
e))(xe || {});
const Vo = {
    MISSING_STYLES: () => "It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",
    MISSING_VIEWPORT_DIMENSIONS: () => "The Vue Flow parent container needs a width and a height to render the graph",
    NODE_INVALID: e => `Node is invalid
Node: ${e}`,
    NODE_NOT_FOUND: e => `Node not found
Node: ${e}`,
    NODE_MISSING_PARENT: (e, t) => `Node is missing a parent
Node: ${e}
Parent: ${t}`,
    NODE_TYPE_MISSING: e => `Node type is missing
Type: ${e}`,
    NODE_EXTENT_INVALID: e => `Only child nodes can use a parent extent
Node: ${e}`,
    EDGE_INVALID: e => `An edge needs a source and a target
Edge: ${e}`,
    EDGE_SOURCE_MISSING: (e, t) => `Edge source is missing
Edge: ${e} 
Source: ${t}`,
    EDGE_TARGET_MISSING: (e, t) => `Edge target is missing
Edge: ${e} 
Target: ${t}`,
    EDGE_TYPE_MISSING: e => `Edge type is missing
Type: ${e}`,
    EDGE_SOURCE_TARGET_SAME: (e, t, n) => `Edge source and target are the same
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
    EDGE_SOURCE_TARGET_MISSING: (e, t, n) => `Edge source or target is missing
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
    EDGE_ORPHANED: e => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${e}`,
    EDGE_NOT_FOUND: e => `Edge not found
Edge: ${e}`,
    USEVUEFLOW_OPTIONS: () => "The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"
};
class Ee extends Error {
    constructor(t, ...n) {
        var o;
        super((o = Vo[t]) == null ? void 0 : o.call(Vo, ...n)),
        this.name = "VueFlowError",
        this.code = t,
        this.args = n
    }
}
function so(e) {
    return "clientX"in e
}
function Zi(e) {
    return "sourceEvent"in e
}
function Ue(e, t) {
    var n, o;
    const i = so(e)
      , r = i ? e.clientX : (n = e.touches) == null ? void 0 : n[0].clientX
      , s = i ? e.clientY : (o = e.touches) == null ? void 0 : o[0].clientY;
    return {
        x: r - ((t == null ? void 0 : t.left) ?? 0),
        y: s - ((t == null ? void 0 : t.top) ?? 0)
    }
}
const rn = () => {
    var e;
    return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0
}
;
function Tu(e) {
    var t, n;
    return {
        width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
        height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
    }
}
function hn(e, t=[1, 1]) {
    return {
        x: t[0] * Math.round(e.x / t[0]),
        y: t[1] * Math.round(e.y / t[1])
    }
}
const ku = () => !0;
function Mn(e) {
    e == null || e.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting")
}
function Pu(e, t, n) {
    const o = []
      , i = {
        x: e.x - n,
        y: e.y - n,
        width: n * 2,
        height: n * 2
    };
    for (const r of t.values())
        nn(i, tn(r)) > 0 && o.push(r);
    return o
}
const $u = 250;
function Du(e, t, n, o) {
    var i, r;
    let s = []
      , a = Number.POSITIVE_INFINITY;
    const l = Pu(e, n, t + $u);
    for (const u of l) {
        const c = [...((i = u.handleBounds) == null ? void 0 : i.source) ?? [], ...((r = u.handleBounds) == null ? void 0 : r.target) ?? []];
        for (const d of c) {
            if (o.nodeId === d.nodeId && o.type === d.type && o.id === d.id)
                continue;
            const {x: m, y: p} = vt(u, d, d.position, !0)
              , C = Math.sqrt((m - e.x) ** 2 + (p - e.y) ** 2);
            C > t || (C < a ? (s = [{
                ...d,
                x: m,
                y: p
            }],
            a = C) : C === a && s.push({
                ...d,
                x: m,
                y: p
            }))
        }
    }
    if (!s.length)
        return null;
    if (s.length > 1) {
        const u = o.type === "source" ? "target" : "source";
        return s.find(c => c.type === u) ?? s[0]
    }
    return s[0]
}
function Ho(e, {handle: t, connectionMode: n, fromNodeId: o, fromHandleId: i, fromType: r, doc: s, lib: a, flowId: l, isValidConnection: u=ku}, c, d, m) {
    const p = r === "target"
      , C = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null
      , {x, y: E} = Ue(e)
      , N = s.elementFromPoint(x, E)
      , M = N != null && N.classList.contains(`${a}-flow__handle`) ? N : C
      , _ = {
        handleDomNode: M,
        isValid: !1,
        connection: null,
        toHandle: null
    };
    if (M) {
        const S = Wi(void 0, M)
          , D = M.getAttribute("data-nodeid")
          , L = M.getAttribute("data-handleid")
          , V = M.classList.contains("connectable")
          , z = M.classList.contains("connectableend");
        if (!D || !S)
            return _;
        const q = {
            source: p ? D : o,
            sourceHandle: p ? L : i,
            target: p ? o : D,
            targetHandle: p ? i : L
        };
        _.connection = q;
        const $ = V && z && (n === We.Strict ? p && S === "source" || !p && S === "target" : D !== o || L !== i);
        _.isValid = $ && u(q, {
            nodes: d,
            edges: c,
            sourceNode: m(o),
            targetNode: m(D)
        }),
        _.toHandle = t
    }
    return _
}
function Wi(e, t) {
    return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null)
}
function Au(e, t) {
    let n = null;
    return t ? n = "valid" : e && !t && (n = "invalid"),
    n
}
function Ou(e, t) {
    let n = null;
    return t ? n = !0 : e && !t && (n = !1),
    n
}
function zu(e, t, n, o, i, r=!1) {
    var s, a, l;
    const u = o.get(e);
    if (!u)
        return null;
    const c = i === We.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((a = u.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.handleBounds) == null ? void 0 : l.target) ?? []]
      , d = (n ? c == null ? void 0 : c.find(m => m.id === n) : c == null ? void 0 : c[0]) ?? null;
    return d && r ? {
        ...d,
        ...vt(u, d, d.position, !0)
    } : d
}
const Zn = {
    [Z.Left]: Z.Right,
    [Z.Right]: Z.Left,
    [Z.Top]: Z.Bottom,
    [Z.Bottom]: Z.Top
}
  , Bu = ["production", "prod"];
function gn(e, ...t) {
    Ki() && console.warn(`[Vue Flow]: ${e}`, ...t)
}
function Ki() {
    return !Bu.includes("production")
}
function Lo(e, t, n, o) {
    const i = t.querySelectorAll(`.vue-flow__handle.${e}`);
    return Array.from(i).map(s => {
        const a = s.getBoundingClientRect();
        return {
            id: s.getAttribute("data-handleid"),
            position: s.getAttribute("data-handlepos"),
            nodeId: s.getAttribute("data-nodeid"),
            type: e,
            x: (a.left - n.left) / o,
            y: (a.top - n.top) / o,
            ...fn(s)
        }
    }
    )
}
function Wn(e, t, n, o, i, r=!1, s) {
    i.value = !1,
    e.selected ? (r || e.selected && t) && (o([e]),
    Ve( () => {
        s.blur()
    }
    )) : n([e])
}
function be(e) {
    return typeof Q(e) < "u"
}
function Ru(e, t, n, o) {
    if (!e || !e.source || !e.target)
        return n(new Ee(xe.EDGE_INVALID,(e == null ? void 0 : e.id) ?? "[ID UNKNOWN]")),
        !1;
    let i;
    return Ke(e) ? i = e : i = {
        ...e,
        id: Ri(e)
    },
    i = zi(i, void 0, o),
    bu(i, t) ? !1 : i
}
function Vu(e, t, n, o, i) {
    if (!t.source || !t.target)
        return i(new Ee(xe.EDGE_INVALID,e.id)),
        !1;
    if (!n)
        return i(new Ee(xe.EDGE_NOT_FOUND,e.id)),
        !1;
    const {id: r, ...s} = e;
    return {
        ...s,
        id: o ? Ri(t) : r,
        source: t.source,
        target: t.target,
        sourceHandle: t.sourceHandle,
        targetHandle: t.targetHandle
    }
}
function Fo(e, t, n) {
    const o = {}
      , i = [];
    for (let r = 0; r < e.length; ++r) {
        const s = e[r];
        if (!tt(s)) {
            n(new Ee(xe.NODE_INVALID,s == null ? void 0 : s.id) || `[ID UNKNOWN|INDEX ${r}]`);
            continue
        }
        const a = yu(s, t(s.id), s.parentNode);
        s.parentNode && (o[s.parentNode] = !0),
        i[r] = a
    }
    for (const r of i) {
        const s = t(r.parentNode) || i.find(a => a.id === r.parentNode);
        r.parentNode && !s && n(new Ee(xe.NODE_MISSING_PARENT,r.id,r.parentNode)),
        (r.parentNode || o[r.id]) && (o[r.id] && (r.isParent = !0),
        s && (s.isParent = !0))
    }
    return i
}
function Yo(e, t, n, o, i, r) {
    let s = i;
    const a = o.get(s) || new Map;
    o.set(s, a.set(n, t)),
    s = `${i}-${e}`;
    const l = o.get(s) || new Map;
    if (o.set(s, l.set(n, t)),
    r) {
        s = `${i}-${e}-${r}`;
        const u = o.get(s) || new Map;
        o.set(s, u.set(n, t))
    }
}
function In(e, t, n) {
    e.clear(),
    t.clear();
    for (const o of n) {
        const {source: i, target: r, sourceHandle: s=null, targetHandle: a=null} = o
          , l = {
            edgeId: o.id,
            source: i,
            target: r,
            sourceHandle: s,
            targetHandle: a
        }
          , u = `${i}-${s}--${r}-${a}`
          , c = `${r}-${a}--${i}-${s}`;
        Yo("source", l, c, e, i, s),
        Yo("target", l, u, e, r, a),
        t.set(o.id, o)
    }
}
function Go(e, t) {
    if (e.size !== t.size)
        return !1;
    for (const n of e)
        if (!t.has(n))
            return !1;
    return !0
}
function Tn(e, t, n, o, i, r, s, a) {
    const l = [];
    for (const u of e) {
        const c = Ke(u) ? u : Ru(u, a, i, r);
        if (!c)
            continue;
        const d = n(c.source)
          , m = n(c.target);
        if (!d || !m) {
            i(new Ee(xe.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));
            continue
        }
        if (!d) {
            i(new Ee(xe.EDGE_SOURCE_MISSING,c.id,c.source));
            continue
        }
        if (!m) {
            i(new Ee(xe.EDGE_TARGET_MISSING,c.id,c.target));
            continue
        }
        if (t && !t(c, {
            edges: a,
            nodes: s,
            sourceNode: d,
            targetNode: m
        })) {
            i(new Ee(xe.EDGE_INVALID,c.id));
            continue
        }
        const p = o(c.id);
        l.push({
            ...zi(c, p, r),
            sourceNode: d,
            targetNode: m
        })
    }
    return l
}
const Xo = Symbol("vueFlow")
  , qi = Symbol("nodeId")
  , Ji = Symbol("nodeRef")
  , Hu = Symbol("edgeId")
  , Lu = Symbol("edgeRef")
  , vn = Symbol("slots");
function Qi(e) {
    const {vueFlowRef: t, snapToGrid: n, snapGrid: o, noDragClassName: i, nodes: r, nodeExtent: s, nodeDragThreshold: a, viewport: l, autoPanOnNodeDrag: u, autoPanSpeed: c, nodesDraggable: d, panBy: m, findNode: p, multiSelectionActive: C, nodesSelectionActive: x, selectNodesOnDrag: E, removeSelectedElements: N, addSelectedNodes: M, updateNodePositions: _, emits: S} = we()
      , {onStart: D, onDrag: L, onStop: V, onClick: z, el: q, disabled: W, id: $, selectable: w, dragHandle: Y} = e
      , y = ve(!1);
    let T = [], b, k = null, P = {
        x: void 0,
        y: void 0
    }, O = {
        x: 0,
        y: 0
    }, A = null, G = !1, j = 0, oe = !1;
    const B = Gu()
      , H = ({x: J, y: ne}) => {
        P = {
            x: J,
            y: ne
        };
        let ie = !1;
        if (T = T.map(h => {
            const f = {
                x: J - h.distance.x,
                y: ne - h.distance.y
            }
              , {computedPosition: v} = ro(h, n.value ? hn(f, o.value) : f, S.error, s.value, h.parentNode ? p(h.parentNode) : void 0);
            return ie = ie || h.position.x !== v.x || h.position.y !== v.y,
            h.position = v,
            h
        }
        ),
        !!ie && (_(T, !0, !0),
        y.value = !0,
        A)) {
            const [h,f] = Cn({
                id: $,
                dragItems: T,
                findNode: p
            });
            L({
                event: A,
                node: h,
                nodes: f
            })
        }
    }
      , K = () => {
        if (!k)
            return;
        const [J,ne] = Xi(O, k, c.value);
        if (J !== 0 || ne !== 0) {
            const ie = {
                x: (P.x ?? 0) - J / l.value.zoom,
                y: (P.y ?? 0) - ne / l.value.zoom
            };
            m({
                x: J,
                y: ne
            }) && H(ie)
        }
        j = requestAnimationFrame(K)
    }
      , se = (J, ne) => {
        G = !0;
        const ie = p($);
        !E.value && !C.value && ie && (ie.selected || N()),
        ie && de(w) && E.value && Wn(ie, C.value, M, N, x, !1, ne);
        const h = B(J.sourceEvent);
        if (P = h,
        T = Eu(r.value, d.value, h, p, $),
        T.length) {
            const [f,v] = Cn({
                id: $,
                dragItems: T,
                findNode: p
            });
            D({
                event: J.sourceEvent,
                node: f,
                nodes: v
            })
        }
    }
      , ae = (J, ne) => {
        var ie;
        J.sourceEvent.type === "touchmove" && J.sourceEvent.touches.length > 1 || (a.value === 0 && se(J, ne),
        P = B(J.sourceEvent),
        k = ((ie = t.value) == null ? void 0 : ie.getBoundingClientRect()) || null,
        O = Ue(J.sourceEvent, k))
    }
      , te = (J, ne) => {
        const ie = B(J.sourceEvent);
        if (!oe && G && u.value && (oe = !0,
        K()),
        !G) {
            const h = ie.xSnapped - (P.x ?? 0)
              , f = ie.ySnapped - (P.y ?? 0);
            Math.sqrt(h * h + f * f) > a.value && se(J, ne)
        }
        (P.x !== ie.xSnapped || P.y !== ie.ySnapped) && T.length && G && (A = J.sourceEvent,
        O = Ue(J.sourceEvent, k),
        H(ie))
    }
      , ce = J => {
        if (!Zi(J) && !G && !y.value && !C.value) {
            const ne = J
              , ie = B(ne)
              , h = ie.xSnapped - (P.x ?? 0)
              , f = ie.ySnapped - (P.y ?? 0)
              , v = Math.sqrt(h * h + f * f);
            v !== 0 && v <= a.value && (z == null || z(ne));
            return
        }
        if (y.value = !1,
        oe = !1,
        G = !1,
        P = {
            x: void 0,
            y: void 0
        },
        cancelAnimationFrame(j),
        T.length) {
            _(T, !1, !1);
            const [ne,ie] = Cn({
                id: $,
                dragItems: T,
                findNode: p
            });
            V({
                event: J.sourceEvent,
                node: ne,
                nodes: ie
            })
        }
    }
    ;
    return he([ () => de(W), q], ([J,ne], ie, h) => {
        if (ne) {
            const f = Ce(ne);
            J || (b = ba().on("start", v => ae(v, ne)).on("drag", v => te(v, ne)).on("end", v => ce(v)).filter(v => {
                const g = v.target
                  , I = de(Y);
                return !v.button && (!i.value || !Bo(g, `.${i.value}`, ne) && (!I || Bo(g, I, ne)))
            }
            ),
            f.call(b)),
            h( () => {
                f.on(".drag", null),
                b && (b.on("start", null),
                b.on("drag", null),
                b.on("end", null))
            }
            )
        }
    }
    ),
    y
}
function Fu() {
    return {
        doubleClick: R(),
        click: R(),
        mouseEnter: R(),
        mouseMove: R(),
        mouseLeave: R(),
        contextMenu: R(),
        updateStart: R(),
        update: R(),
        updateEnd: R()
    }
}
function Yu(e, t) {
    const n = Fu();
    return n.doubleClick.on(o => {
        var i, r;
        t.edgeDoubleClick(o),
        (r = (i = e.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o)
    }
    ),
    n.click.on(o => {
        var i, r;
        t.edgeClick(o),
        (r = (i = e.events) == null ? void 0 : i.click) == null || r.call(i, o)
    }
    ),
    n.mouseEnter.on(o => {
        var i, r;
        t.edgeMouseEnter(o),
        (r = (i = e.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o)
    }
    ),
    n.mouseMove.on(o => {
        var i, r;
        t.edgeMouseMove(o),
        (r = (i = e.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o)
    }
    ),
    n.mouseLeave.on(o => {
        var i, r;
        t.edgeMouseLeave(o),
        (r = (i = e.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o)
    }
    ),
    n.contextMenu.on(o => {
        var i, r;
        t.edgeContextMenu(o),
        (r = (i = e.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o)
    }
    ),
    n.updateStart.on(o => {
        var i, r;
        t.edgeUpdateStart(o),
        (r = (i = e.events) == null ? void 0 : i.updateStart) == null || r.call(i, o)
    }
    ),
    n.update.on(o => {
        var i, r;
        t.edgeUpdate(o),
        (r = (i = e.events) == null ? void 0 : i.update) == null || r.call(i, o)
    }
    ),
    n.updateEnd.on(o => {
        var i, r;
        t.edgeUpdateEnd(o),
        (r = (i = e.events) == null ? void 0 : i.updateEnd) == null || r.call(i, o)
    }
    ),
    Object.entries(n).reduce( (o, [i,r]) => (o.emit[i] = r.trigger,
    o.on[i] = r.on,
    o), {
        emit: {},
        on: {}
    })
}
function Gu() {
    const {viewport: e, snapGrid: t, snapToGrid: n} = we();
    return o => {
        const i = Zi(o) ? o.sourceEvent : o
          , {x: r, y: s} = Ue(i)
          , a = Pt({
            x: r,
            y: s
        }, e.value)
          , {x: l, y: u} = n.value ? hn(a, t.value) : a;
        return {
            xSnapped: l,
            ySnapped: u,
            ...a
        }
    }
}
function Ft() {
    return !0
}
function ji({handleId: e, nodeId: t, type: n, isValidConnection: o, edgeUpdaterType: i, onEdgeUpdate: r, onEdgeUpdateEnd: s}) {
    const {id: a, vueFlowRef: l, connectionMode: u, connectionRadius: c, connectOnClick: d, connectionClickStartHandle: m, nodesConnectable: p, autoPanOnConnect: C, autoPanSpeed: x, findNode: E, panBy: N, startConnection: M, updateConnection: _, endConnection: S, emits: D, viewport: L, edges: V, nodes: z, isValidConnection: q, nodeLookup: W} = we();
    let $ = null
      , w = !1
      , Y = null;
    function y(b) {
        var k;
        const P = de(n) === "target"
          , O = so(b)
          , A = ko(b.target);
        if (O && b.button === 0 || !O) {
            let G = function(ee) {
                h = Ue(ee, J),
                H = Du(Pt(h, L.value, !1, [1, 1]), c.value, W.value, g),
                f || (v(),
                f = !0);
                const le = Ho(ee, {
                    handle: H,
                    connectionMode: u.value,
                    fromNodeId: de(t),
                    fromHandleId: de(e),
                    fromType: P ? "target" : "source",
                    isValidConnection: B,
                    doc: A,
                    lib: "vue",
                    flowId: a,
                    nodeLookup: W.value
                }, V.value, z.value, E);
                Y = le.handleDomNode,
                $ = le.connection,
                w = Ou(!!H, le.isValid);
                const ue = {
                    ...U,
                    isValid: w,
                    to: H && w ? Un({
                        x: H.x,
                        y: H.y
                    }, L.value) : h,
                    toHandle: le.toHandle,
                    toPosition: w && le.toHandle ? le.toHandle.position : Zn[g.position],
                    toNode: le.toHandle ? W.value.get(le.toHandle.nodeId) : null
                };
                if (!(w && H && (U != null && U.toHandle) && ue.toHandle && U.toHandle.type === ue.toHandle.type && U.toHandle.nodeId === ue.toHandle.nodeId && U.toHandle.id === ue.toHandle.id && U.to.x === ue.to.x && U.to.y === ue.to.y)) {
                    if (_(H && w ? Un({
                        x: H.x,
                        y: H.y
                    }, L.value) : h, le.toHandle, Au(!!H, w)),
                    U = ue,
                    !H && !w && !Y)
                        return Mn(ie);
                    $ && $.source !== $.target && Y && (Mn(ie),
                    ie = Y,
                    Y.classList.add("connecting", "vue-flow__handle-connecting"),
                    Y.classList.toggle("valid", !!w),
                    Y.classList.toggle("vue-flow__handle-valid", !!w))
                }
            }
              , j = function(ee) {
                (H || Y) && $ && w && (r ? r(ee, $) : D.connect($)),
                D.connectEnd(ee),
                i && (s == null || s(ee)),
                Mn(ie),
                cancelAnimationFrame(K),
                S(ee),
                f = !1,
                w = !1,
                $ = null,
                Y = null,
                A.removeEventListener("mousemove", G),
                A.removeEventListener("mouseup", j),
                A.removeEventListener("touchmove", G),
                A.removeEventListener("touchend", j)
            };
            const oe = E(de(t));
            let B = de(o) || q.value || Ft;
            !B && oe && (B = (P ? oe.isValidSourcePos : oe.isValidTargetPos) || Ft);
            let H, K = 0;
            const {x: se, y: ae} = Ue(b)
              , te = A == null ? void 0 : A.elementFromPoint(se, ae)
              , ce = Wi(de(i), te)
              , J = (k = l.value) == null ? void 0 : k.getBoundingClientRect();
            if (!J || !ce)
                return;
            const ne = zu(de(t), ce, de(e), W.value, u.value);
            if (!ne)
                return;
            let ie, h = Ue(b, J), f = !1;
            const v = () => {
                if (!C.value)
                    return;
                const [ee,le] = Xi(h, J, x.value);
                N({
                    x: ee,
                    y: le
                }),
                K = requestAnimationFrame(v)
            }
              , g = {
                ...ne,
                nodeId: de(t),
                type: ce,
                position: ne.position
            }
              , I = W.value.get(de(t))
              , X = {
                inProgress: !0,
                isValid: null,
                from: vt(I, g, Z.Left, !0),
                fromHandle: g,
                fromPosition: g.position,
                fromNode: I,
                to: h,
                toHandle: null,
                toPosition: Zn[g.position],
                toNode: null
            };
            M({
                nodeId: de(t),
                id: de(e),
                type: ce,
                position: (te == null ? void 0 : te.getAttribute("data-handlepos")) || Z.Top
            }, {
                x: se - J.left,
                y: ae - J.top
            }),
            D.connectStart({
                event: b,
                nodeId: de(t),
                handleId: de(e),
                handleType: ce
            });
            let U = X;
            A.addEventListener("mousemove", G),
            A.addEventListener("mouseup", j),
            A.addEventListener("touchmove", G),
            A.addEventListener("touchend", j)
        }
    }
    function T(b) {
        var k, P;
        if (!d.value)
            return;
        const O = de(n) === "target";
        if (!m.value) {
            D.clickConnectStart({
                event: b,
                nodeId: de(t),
                handleId: de(e)
            }),
            M({
                nodeId: de(t),
                type: de(n),
                id: de(e),
                position: Z.Top
            }, void 0, !0);
            return
        }
        let A = de(o) || q.value || Ft;
        const G = E(de(t));
        if (!A && G && (A = (O ? G.isValidSourcePos : G.isValidTargetPos) || Ft),
        G && (typeof G.connectable > "u" ? p.value : G.connectable) === !1)
            return;
        const j = ko(b.target)
          , oe = Ho(b, {
            handle: {
                nodeId: de(t),
                id: de(e),
                type: de(n),
                position: Z.Top
            },
            connectionMode: u.value,
            fromNodeId: m.value.nodeId,
            fromHandleId: m.value.id || null,
            fromType: m.value.type,
            isValidConnection: A,
            doc: j,
            lib: "vue",
            flowId: a,
            nodeLookup: W.value
        }, V.value, z.value, E)
          , B = ((k = oe.connection) == null ? void 0 : k.source) === ((P = oe.connection) == null ? void 0 : P.target);
        oe.isValid && oe.connection && !B && D.connect(oe.connection),
        D.clickConnectEnd(b),
        S(b, !0)
    }
    return {
        handlePointerDown: y,
        handleClick: T
    }
}
function Xu() {
    return pt(qi, "")
}
function er(e) {
    const t = e ?? Xu() ?? ""
      , n = pt(Ji, ve(null))
      , {findNode: o, edges: i, emits: r} = we()
      , s = o(t);
    return s || r.error(new Ee(xe.NODE_NOT_FOUND,t)),
    {
        id: t,
        nodeEl: n,
        node: s,
        parentNode: re( () => o(s.parentNode)),
        connectedEdges: re( () => Yi([s], i.value))
    }
}
function Uu() {
    return {
        doubleClick: R(),
        click: R(),
        mouseEnter: R(),
        mouseMove: R(),
        mouseLeave: R(),
        contextMenu: R(),
        dragStart: R(),
        drag: R(),
        dragStop: R()
    }
}
function Zu(e, t) {
    const n = Uu();
    return n.doubleClick.on(o => {
        var i, r;
        t.nodeDoubleClick(o),
        (r = (i = e.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o)
    }
    ),
    n.click.on(o => {
        var i, r;
        t.nodeClick(o),
        (r = (i = e.events) == null ? void 0 : i.click) == null || r.call(i, o)
    }
    ),
    n.mouseEnter.on(o => {
        var i, r;
        t.nodeMouseEnter(o),
        (r = (i = e.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o)
    }
    ),
    n.mouseMove.on(o => {
        var i, r;
        t.nodeMouseMove(o),
        (r = (i = e.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o)
    }
    ),
    n.mouseLeave.on(o => {
        var i, r;
        t.nodeMouseLeave(o),
        (r = (i = e.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o)
    }
    ),
    n.contextMenu.on(o => {
        var i, r;
        t.nodeContextMenu(o),
        (r = (i = e.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o)
    }
    ),
    n.dragStart.on(o => {
        var i, r;
        t.nodeDragStart(o),
        (r = (i = e.events) == null ? void 0 : i.dragStart) == null || r.call(i, o)
    }
    ),
    n.drag.on(o => {
        var i, r;
        t.nodeDrag(o),
        (r = (i = e.events) == null ? void 0 : i.drag) == null || r.call(i, o)
    }
    ),
    n.dragStop.on(o => {
        var i, r;
        t.nodeDragStop(o),
        (r = (i = e.events) == null ? void 0 : i.dragStop) == null || r.call(i, o)
    }
    ),
    Object.entries(n).reduce( (o, [i,r]) => (o.emit[i] = r.trigger,
    o.on[i] = r.on,
    o), {
        emit: {},
        on: {}
    })
}
function tr() {
    const {getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: o, snapGrid: i, snapToGrid: r, nodesDraggable: s, emits: a} = we();
    return (l, u=!1) => {
        const c = r.value ? i.value[0] : 5
          , d = r.value ? i.value[1] : 5
          , m = u ? 4 : 1
          , p = l.x * c * m
          , C = l.y * d * m
          , x = [];
        for (const E of e.value)
            if (E.draggable || s && typeof E.draggable > "u") {
                const N = {
                    x: E.computedPosition.x + p,
                    y: E.computedPosition.y + C
                }
                  , {computedPosition: M} = ro(E, N, a.error, t.value, E.parentNode ? o(E.parentNode) : void 0);
                x.push({
                    id: E.id,
                    position: M,
                    from: E.position,
                    distance: {
                        x: l.x,
                        y: l.y
                    },
                    dimensions: E.dimensions
                })
            }
        n(x, !0, !1)
    }
}
const kn = .1;
function Fe() {
    return gn("Viewport not initialized yet."),
    Promise.resolve(!1)
}
const Wu = {
    zoomIn: Fe,
    zoomOut: Fe,
    zoomTo: Fe,
    fitView: Fe,
    setCenter: Fe,
    fitBounds: Fe,
    project: e => e,
    screenToFlowCoordinate: e => e,
    flowToScreenCoordinate: e => e,
    setViewport: Fe,
    setTransform: Fe,
    getViewport: () => ({
        x: 0,
        y: 0,
        zoom: 1
    }),
    getTransform: () => ({
        x: 0,
        y: 0,
        zoom: 1
    }),
    viewportInitialized: !1
};
function Ku(e) {
    function t(o, i) {
        return new Promise(r => {
            e.d3Selection && e.d3Zoom ? e.d3Zoom.scaleBy(Pn(e.d3Selection, i, () => {
                r(!0)
            }
            ), o) : r(!1)
        }
        )
    }
    function n(o, i, r, s) {
        return new Promise(a => {
            const {x: l, y: u} = Oi({
                x: -o,
                y: -i
            }, e.translateExtent)
              , c = gt.translate(-l, -u).scale(r);
            e.d3Selection && e.d3Zoom ? e.d3Zoom.transform(Pn(e.d3Selection, s, () => {
                a(!0)
            }
            ), c) : a(!1)
        }
        )
    }
    return re( () => e.d3Zoom && e.d3Selection && e.dimensions.width && e.dimensions.height ? {
        viewportInitialized: !0,
        zoomIn: i => t(1.2, i == null ? void 0 : i.duration),
        zoomOut: i => t(1 / 1.2, i == null ? void 0 : i.duration),
        zoomTo: (i, r) => new Promise(s => {
            e.d3Selection && e.d3Zoom ? e.d3Zoom.scaleTo(Pn(e.d3Selection, r == null ? void 0 : r.duration, () => {
                s(!0)
            }
            ), i) : s(!1)
        }
        ),
        setViewport: (i, r) => n(i.x, i.y, i.zoom, r == null ? void 0 : r.duration),
        setTransform: (i, r) => n(i.x, i.y, i.zoom, r == null ? void 0 : r.duration),
        getViewport: () => ({
            x: e.viewport.x,
            y: e.viewport.y,
            zoom: e.viewport.zoom
        }),
        getTransform: () => ({
            x: e.viewport.x,
            y: e.viewport.y,
            zoom: e.viewport.zoom
        }),
        fitView: (i={
            padding: kn,
            includeHiddenNodes: !1,
            duration: 0
        }) => {
            var r, s;
            const a = [];
            for (const m of e.nodes)
                m.dimensions.width && m.dimensions.height && ((i == null ? void 0 : i.includeHiddenNodes) || !m.hidden) && (!((r = i.nodes) != null && r.length) || (s = i.nodes) != null && s.length && i.nodes.includes(m.id)) && a.push(m);
            if (!a.length)
                return Promise.resolve(!1);
            const l = Li(a)
              , {x: u, y: c, zoom: d} = Po(l, e.dimensions.width, e.dimensions.height, i.minZoom ?? e.minZoom, i.maxZoom ?? e.maxZoom, i.padding ?? kn, i.offset);
            return n(u, c, d, i == null ? void 0 : i.duration)
        }
        ,
        setCenter: (i, r, s) => {
            const a = typeof (s == null ? void 0 : s.zoom) < "u" ? s.zoom : e.maxZoom
              , l = e.dimensions.width / 2 - i * a
              , u = e.dimensions.height / 2 - r * a;
            return n(l, u, a, s == null ? void 0 : s.duration)
        }
        ,
        fitBounds: (i, r={
            padding: kn
        }) => {
            const {x: s, y: a, zoom: l} = Po(i, e.dimensions.width, e.dimensions.height, e.minZoom, e.maxZoom, r.padding);
            return n(s, a, l, r == null ? void 0 : r.duration)
        }
        ,
        project: i => Pt(i, e.viewport, e.snapToGrid, e.snapGrid),
        screenToFlowCoordinate: i => {
            if (e.vueFlowRef) {
                const {x: r, y: s} = e.vueFlowRef.getBoundingClientRect()
                  , a = {
                    x: i.x - r,
                    y: i.y - s
                };
                return Pt(a, e.viewport, e.snapToGrid, e.snapGrid)
            }
            return {
                x: 0,
                y: 0
            }
        }
        ,
        flowToScreenCoordinate: i => {
            if (e.vueFlowRef) {
                const {x: r, y: s} = e.vueFlowRef.getBoundingClientRect()
                  , a = {
                    x: i.x + r,
                    y: i.y + s
                };
                return Un(a, e.viewport)
            }
            return {
                x: 0,
                y: 0
            }
        }
    } : Wu)
}
function Pn(e, t=0, n) {
    return e.transition().duration(t).on("end", n)
}
function qu(e, t, n) {
    const o = Jo(!0);
    return o.run( () => {
        const i = () => {
            o.run( () => {
                let x, E, N = !!(n.nodes.value.length || n.edges.value.length);
                x = rt([e.modelValue, () => {
                    var M, _;
                    return (_ = (M = e.modelValue) == null ? void 0 : M.value) == null ? void 0 : _.length
                }
                ], ([M]) => {
                    M && Array.isArray(M) && (E == null || E.pause(),
                    n.setElements(M),
                    !E && !N && M.length ? N = !0 : E == null || E.resume())
                }
                ),
                E = rt([n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length], ([M,_]) => {
                    var S;
                    (S = e.modelValue) != null && S.value && Array.isArray(e.modelValue.value) && (x == null || x.pause(),
                    e.modelValue.value = [...M, ..._],
                    Ve( () => {
                        x == null || x.resume()
                    }
                    ))
                }
                , {
                    immediate: N
                }),
                Gt( () => {
                    x == null || x.stop(),
                    E == null || E.stop()
                }
                )
            }
            )
        }
          , r = () => {
            o.run( () => {
                let x, E, N = !!n.nodes.value.length;
                x = rt([e.nodes, () => {
                    var M, _;
                    return (_ = (M = e.nodes) == null ? void 0 : M.value) == null ? void 0 : _.length
                }
                ], ([M]) => {
                    M && Array.isArray(M) && (E == null || E.pause(),
                    n.setNodes(M),
                    !E && !N && M.length ? N = !0 : E == null || E.resume())
                }
                ),
                E = rt([n.nodes, () => n.nodes.value.length], ([M]) => {
                    var _;
                    (_ = e.nodes) != null && _.value && Array.isArray(e.nodes.value) && (x == null || x.pause(),
                    e.nodes.value = [...M],
                    Ve( () => {
                        x == null || x.resume()
                    }
                    ))
                }
                , {
                    immediate: N
                }),
                Gt( () => {
                    x == null || x.stop(),
                    E == null || E.stop()
                }
                )
            }
            )
        }
          , s = () => {
            o.run( () => {
                let x, E, N = !!n.edges.value.length;
                x = rt([e.edges, () => {
                    var M, _;
                    return (_ = (M = e.edges) == null ? void 0 : M.value) == null ? void 0 : _.length
                }
                ], ([M]) => {
                    M && Array.isArray(M) && (E == null || E.pause(),
                    n.setEdges(M),
                    !E && !N && M.length ? N = !0 : E == null || E.resume())
                }
                ),
                E = rt([n.edges, () => n.edges.value.length], ([M]) => {
                    var _;
                    (_ = e.edges) != null && _.value && Array.isArray(e.edges.value) && (x == null || x.pause(),
                    e.edges.value = [...M],
                    Ve( () => {
                        x == null || x.resume()
                    }
                    ))
                }
                , {
                    immediate: N
                }),
                Gt( () => {
                    x == null || x.stop(),
                    E == null || E.stop()
                }
                )
            }
            )
        }
          , a = () => {
            o.run( () => {
                he( () => t.maxZoom, () => {
                    t.maxZoom && be(t.maxZoom) && n.setMaxZoom(t.maxZoom)
                }
                , {
                    immediate: !0
                })
            }
            )
        }
          , l = () => {
            o.run( () => {
                he( () => t.minZoom, () => {
                    t.minZoom && be(t.minZoom) && n.setMinZoom(t.minZoom)
                }
                , {
                    immediate: !0
                })
            }
            )
        }
          , u = () => {
            o.run( () => {
                he( () => t.translateExtent, () => {
                    t.translateExtent && be(t.translateExtent) && n.setTranslateExtent(t.translateExtent)
                }
                , {
                    immediate: !0
                })
            }
            )
        }
          , c = () => {
            o.run( () => {
                he( () => t.nodeExtent, () => {
                    t.nodeExtent && be(t.nodeExtent) && n.setNodeExtent(t.nodeExtent)
                }
                , {
                    immediate: !0
                })
            }
            )
        }
          , d = () => {
            o.run( () => {
                he( () => t.applyDefault, () => {
                    be(t.applyDefault) && (n.applyDefault.value = t.applyDefault)
                }
                , {
                    immediate: !0
                })
            }
            )
        }
          , m = () => {
            o.run( () => {
                const x = async E => {
                    let N = E;
                    typeof t.autoConnect == "function" && (N = await t.autoConnect(E)),
                    N !== !1 && n.addEdges([N])
                }
                ;
                he( () => t.autoConnect, () => {
                    be(t.autoConnect) && (n.autoConnect.value = t.autoConnect)
                }
                , {
                    immediate: !0
                }),
                he(n.autoConnect, (E, N, M) => {
                    E ? n.onConnect(x) : n.hooks.value.connect.off(x),
                    M( () => {
                        n.hooks.value.connect.off(x)
                    }
                    )
                }
                , {
                    immediate: !0
                })
            }
            )
        }
          , p = () => {
            const x = ["id", "modelValue", "translateExtent", "nodeExtent", "edges", "nodes", "maxZoom", "minZoom", "applyDefault", "autoConnect"];
            for (const E of Object.keys(t)) {
                const N = E;
                if (!x.includes(N)) {
                    const M = ye( () => t[N])
                      , _ = n[N];
                    qn(_) && o.run( () => {
                        he(M, S => {
                            be(S) && (_.value = S)
                        }
                        , {
                            immediate: !0
                        })
                    }
                    )
                }
            }
        }
        ;
        ( () => {
            i(),
            r(),
            s(),
            l(),
            a(),
            u(),
            c(),
            d(),
            m(),
            p()
        }
        )()
    }
    ),
    () => o.stop()
}
function Ju() {
    return {
        edgesChange: R(),
        nodesChange: R(),
        nodeDoubleClick: R(),
        nodeClick: R(),
        nodeMouseEnter: R(),
        nodeMouseMove: R(),
        nodeMouseLeave: R(),
        nodeContextMenu: R(),
        nodeDragStart: R(),
        nodeDrag: R(),
        nodeDragStop: R(),
        nodesInitialized: R(),
        miniMapNodeClick: R(),
        miniMapNodeDoubleClick: R(),
        miniMapNodeMouseEnter: R(),
        miniMapNodeMouseMove: R(),
        miniMapNodeMouseLeave: R(),
        connect: R(),
        connectStart: R(),
        connectEnd: R(),
        clickConnectStart: R(),
        clickConnectEnd: R(),
        paneReady: R(),
        init: R(),
        move: R(),
        moveStart: R(),
        moveEnd: R(),
        selectionDragStart: R(),
        selectionDrag: R(),
        selectionDragStop: R(),
        selectionContextMenu: R(),
        selectionStart: R(),
        selectionEnd: R(),
        viewportChangeStart: R(),
        viewportChange: R(),
        viewportChangeEnd: R(),
        paneScroll: R(),
        paneClick: R(),
        paneContextMenu: R(),
        paneMouseEnter: R(),
        paneMouseMove: R(),
        paneMouseLeave: R(),
        edgeContextMenu: R(),
        edgeMouseEnter: R(),
        edgeMouseMove: R(),
        edgeMouseLeave: R(),
        edgeDoubleClick: R(),
        edgeClick: R(),
        edgeUpdateStart: R(),
        edgeUpdate: R(),
        edgeUpdateEnd: R(),
        updateNodeInternals: R(),
        error: R(e => gn(e.message))
    }
}
function Qu(e, t) {
    vr( () => {
        for (const [n,o] of Object.entries(t.value)) {
            const i = r => {
                e(n, r)
            }
            ;
            o.fns.add(i),
            an( () => {
                o.off(i)
            }
            )
        }
    }
    )
}
function nr() {
    return {
        vueFlowRef: null,
        viewportRef: null,
        nodes: [],
        edges: [],
        connectionLookup: new Map,
        nodeTypes: {},
        edgeTypes: {},
        initialized: !1,
        dimensions: {
            width: 0,
            height: 0
        },
        viewport: {
            x: 0,
            y: 0,
            zoom: 1
        },
        d3Zoom: null,
        d3Selection: null,
        d3ZoomHandler: null,
        minZoom: .5,
        maxZoom: 2,
        translateExtent: [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]],
        nodeExtent: [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]],
        selectionMode: io.Full,
        paneDragging: !1,
        preventScrolling: !0,
        zoomOnScroll: !0,
        zoomOnPinch: !0,
        zoomOnDoubleClick: !0,
        panOnScroll: !1,
        panOnScrollSpeed: .5,
        panOnScrollMode: St.Free,
        paneClickDistance: 0,
        panOnDrag: !0,
        edgeUpdaterRadius: 10,
        onlyRenderVisibleElements: !1,
        defaultViewport: {
            x: 0,
            y: 0,
            zoom: 1
        },
        nodesSelectionActive: !1,
        userSelectionActive: !1,
        userSelectionRect: null,
        defaultMarkerColor: "#b1b1b7",
        connectionLineStyle: {},
        connectionLineType: null,
        connectionLineOptions: {
            type: Je.Bezier,
            style: {}
        },
        connectionMode: We.Loose,
        connectionStartHandle: null,
        connectionEndHandle: null,
        connectionClickStartHandle: null,
        connectionPosition: {
            x: Number.NaN,
            y: Number.NaN
        },
        connectionRadius: 20,
        connectOnClick: !0,
        connectionStatus: null,
        isValidConnection: null,
        snapGrid: [15, 15],
        snapToGrid: !1,
        edgesUpdatable: !1,
        edgesFocusable: !0,
        nodesFocusable: !0,
        nodesConnectable: !0,
        nodesDraggable: !0,
        nodeDragThreshold: 1,
        elementsSelectable: !0,
        selectNodesOnDrag: !0,
        multiSelectionActive: !1,
        selectionKeyCode: "Shift",
        multiSelectionKeyCode: rn() ? "Meta" : "Control",
        zoomActivationKeyCode: rn() ? "Meta" : "Control",
        deleteKeyCode: "Backspace",
        panActivationKeyCode: "Space",
        hooks: Ju(),
        applyDefault: !0,
        autoConnect: !1,
        fitViewOnInit: !1,
        fitViewOnInitDone: !1,
        noDragClassName: "nodrag",
        noWheelClassName: "nowheel",
        noPanClassName: "nopan",
        defaultEdgeOptions: void 0,
        elevateEdgesOnSelect: !1,
        elevateNodesOnSelect: !0,
        autoPanOnNodeDrag: !0,
        autoPanOnConnect: !0,
        autoPanSpeed: 15,
        disableKeyboardA11y: !1,
        ariaLiveMessage: ""
    }
}
const ju = ["id", "vueFlowRef", "viewportRef", "initialized", "modelValue", "nodes", "edges", "maxZoom", "minZoom", "translateExtent", "hooks", "defaultEdgeOptions"];
function ec(e, t, n) {
    const o = Ku(e)
      , i = h => {
        const f = h ?? [];
        e.hooks.updateNodeInternals.trigger(f)
    }
      , r = h => wu(h, e.nodes, e.edges)
      , s = h => _u(h, e.nodes, e.edges)
      , a = h => Yi(h, e.edges)
      , l = ({id: h, type: f, nodeId: v}) => {
        var g;
        return Array.from(((g = e.connectionLookup.get(`${v}-${f}-${h ?? null}`)) == null ? void 0 : g.values()) ?? [])
    }
      , u = h => {
        if (h)
            return t.value.get(h)
    }
      , c = h => {
        if (h)
            return n.value.get(h)
    }
      , d = (h, f, v) => {
        var g, I;
        const F = [];
        for (const X of h) {
            const U = {
                id: X.id,
                type: "position",
                dragging: v,
                from: X.from
            };
            if (f && (U.position = X.position,
            X.parentNode)) {
                const ee = u(X.parentNode);
                U.position = {
                    x: U.position.x - (((g = ee == null ? void 0 : ee.computedPosition) == null ? void 0 : g.x) ?? 0),
                    y: U.position.y - (((I = ee == null ? void 0 : ee.computedPosition) == null ? void 0 : I.y) ?? 0)
                }
            }
            F.push(U)
        }
        F != null && F.length && e.hooks.nodesChange.trigger(F)
    }
      , m = h => {
        if (!e.vueFlowRef)
            return;
        const f = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
        if (!f)
            return;
        const v = window.getComputedStyle(f)
          , {m22: g} = new window.DOMMatrixReadOnly(v.transform)
          , I = [];
        for (let F = 0; F < h.length; ++F) {
            const X = h[F]
              , U = u(X.id);
            if (U) {
                const ee = fn(X.nodeElement);
                if (!!(ee.width && ee.height && (U.dimensions.width !== ee.width || U.dimensions.height !== ee.height || X.forceUpdate))) {
                    const ue = X.nodeElement.getBoundingClientRect();
                    U.dimensions = ee,
                    U.handleBounds.source = Lo("source", X.nodeElement, ue, g),
                    U.handleBounds.target = Lo("target", X.nodeElement, ue, g),
                    I.push({
                        id: U.id,
                        type: "dimensions",
                        dimensions: ee
                    })
                }
            }
        }
        !e.fitViewOnInitDone && e.fitViewOnInit && o.value.fitView().then( () => {
            e.fitViewOnInitDone = !0
        }
        ),
        I.length && e.hooks.nodesChange.trigger(I)
    }
      , p = (h, f) => {
        const v = new Set
          , g = new Set;
        for (const X of h)
            tt(X) ? v.add(X.id) : Ke(X) && g.add(X.id);
        const I = Xe(t.value, v, !0)
          , F = Xe(n.value, g);
        if (e.multiSelectionActive) {
            for (const X of v)
                I.push(Ye(X, f));
            for (const X of g)
                F.push(Ye(X, f))
        }
        I.length && e.hooks.nodesChange.trigger(I),
        F.length && e.hooks.edgesChange.trigger(F)
    }
      , C = h => {
        if (e.multiSelectionActive) {
            const f = h.map(v => Ye(v.id, !0));
            e.hooks.nodesChange.trigger(f);
            return
        }
        e.hooks.nodesChange.trigger(Xe(t.value, new Set(h.map(f => f.id)), !0)),
        e.hooks.edgesChange.trigger(Xe(n.value))
    }
      , x = h => {
        if (e.multiSelectionActive) {
            const f = h.map(v => Ye(v.id, !0));
            e.hooks.edgesChange.trigger(f);
            return
        }
        e.hooks.edgesChange.trigger(Xe(n.value, new Set(h.map(f => f.id)))),
        e.hooks.nodesChange.trigger(Xe(t.value, new Set, !0))
    }
      , E = h => {
        p(h, !0)
    }
      , N = h => {
        const v = (h || e.nodes).map(g => (g.selected = !1,
        Ye(g.id, !1)));
        e.hooks.nodesChange.trigger(v)
    }
      , M = h => {
        const v = (h || e.edges).map(g => (g.selected = !1,
        Ye(g.id, !1)));
        e.hooks.edgesChange.trigger(v)
    }
      , _ = h => {
        if (!h || !h.length)
            return p([], !1);
        const f = h.reduce( (v, g) => {
            const I = Ye(g.id, !1);
            return tt(g) ? v.nodes.push(I) : v.edges.push(I),
            v
        }
        , {
            nodes: [],
            edges: []
        });
        f.nodes.length && e.hooks.nodesChange.trigger(f.nodes),
        f.edges.length && e.hooks.edgesChange.trigger(f.edges)
    }
      , S = h => {
        var f;
        (f = e.d3Zoom) == null || f.scaleExtent([h, e.maxZoom]),
        e.minZoom = h
    }
      , D = h => {
        var f;
        (f = e.d3Zoom) == null || f.scaleExtent([e.minZoom, h]),
        e.maxZoom = h
    }
      , L = h => {
        var f;
        (f = e.d3Zoom) == null || f.translateExtent(h),
        e.translateExtent = h
    }
      , V = h => {
        e.nodeExtent = h,
        i()
    }
      , z = h => {
        var f;
        (f = e.d3Zoom) == null || f.clickDistance(h)
    }
      , q = h => {
        e.nodesDraggable = h,
        e.nodesConnectable = h,
        e.elementsSelectable = h
    }
      , W = h => {
        const f = h instanceof Function ? h(e.nodes) : h;
        !e.initialized && !f.length || (e.nodes = Fo(f, u, e.hooks.error.trigger))
    }
      , $ = h => {
        const f = h instanceof Function ? h(e.edges) : h;
        if (!e.initialized && !f.length)
            return;
        const v = Tn(f, e.isValidConnection, u, c, e.hooks.error.trigger, e.defaultEdgeOptions, e.nodes, e.edges);
        In(e.connectionLookup, n.value, v),
        e.edges = v
    }
      , w = h => {
        const f = h instanceof Function ? h([...e.nodes, ...e.edges]) : h;
        !e.initialized && !f.length || (W(f.filter(tt)),
        $(f.filter(Ke)))
    }
      , Y = h => {
        let f = h instanceof Function ? h(e.nodes) : h;
        f = Array.isArray(f) ? f : [f];
        const v = Fo(f, u, e.hooks.error.trigger)
          , g = [];
        for (const I of v)
            g.push(Ao(I));
        g.length && e.hooks.nodesChange.trigger(g)
    }
      , y = h => {
        let f = h instanceof Function ? h(e.edges) : h;
        f = Array.isArray(f) ? f : [f];
        const v = Tn(f, e.isValidConnection, u, c, e.hooks.error.trigger, e.defaultEdgeOptions, e.nodes, e.edges)
          , g = [];
        for (const I of v)
            g.push(Ao(I));
        g.length && e.hooks.edgesChange.trigger(g)
    }
      , T = (h, f=!0, v=!1) => {
        const g = h instanceof Function ? h(e.nodes) : h
          , I = Array.isArray(g) ? g : [g]
          , F = []
          , X = [];
        function U(le) {
            const ue = a(le);
            for (const pe of ue)
                (!be(pe.deletable) || pe.deletable) && X.push(zo(pe.id, pe.source, pe.target, pe.sourceHandle, pe.targetHandle))
        }
        function ee(le) {
            const ue = [];
            for (const pe of e.nodes)
                pe.parentNode === le && ue.push(pe);
            if (ue.length) {
                for (const pe of ue)
                    F.push(Oo(pe.id));
                f && U(ue);
                for (const pe of ue)
                    ee(pe.id)
            }
        }
        for (const le of I) {
            const ue = typeof le == "string" ? u(le) : le;
            ue && (be(ue.deletable) && !ue.deletable || (F.push(Oo(ue.id)),
            f && U([ue]),
            v && ee(ue.id)))
        }
        X.length && e.hooks.edgesChange.trigger(X),
        F.length && e.hooks.nodesChange.trigger(F)
    }
      , b = h => {
        const f = h instanceof Function ? h(e.edges) : h
          , v = Array.isArray(f) ? f : [f]
          , g = [];
        for (const I of v) {
            const F = typeof I == "string" ? c(I) : I;
            F && (be(F.deletable) && !F.deletable || g.push(zo(typeof I == "string" ? I : I.id, F.source, F.target, F.sourceHandle, F.targetHandle)))
        }
        e.hooks.edgesChange.trigger(g)
    }
      , k = (h, f, v=!0) => {
        const g = c(h.id)
          , I = Vu(h, f, g, v, e.hooks.error.trigger);
        if (I) {
            const [F] = Tn([I], e.isValidConnection, u, c, e.hooks.error.trigger, e.defaultEdgeOptions, e.nodes, e.edges);
            return e.edges.splice(e.edges.indexOf(g), 1, F),
            In(e.connectionLookup, n.value, [F]),
            F
        }
        return !1
    }
      , P = (h, f, v={
        replace: !1
    }) => {
        const g = c(h);
        if (!g)
            return;
        const I = typeof f == "function" ? f(g) : f;
        g.data = v.replace ? I : {
            ...g.data,
            ...I
        }
    }
      , O = h => Do(h, e.nodes)
      , A = h => {
        const f = Do(h, e.edges);
        return In(e.connectionLookup, n.value, f),
        f
    }
      , G = (h, f, v={
        replace: !1
    }) => {
        const g = u(h);
        if (!g)
            return;
        const I = typeof f == "function" ? f(g) : f;
        v.replace ? e.nodes.splice(e.nodes.indexOf(g), 1, I) : Object.assign(g, I)
    }
      , j = (h, f, v={
        replace: !1
    }) => {
        const g = u(h);
        if (!g)
            return;
        const I = typeof f == "function" ? f(g) : f;
        g.data = v.replace ? I : {
            ...g.data,
            ...I
        }
    }
      , oe = (h, f, v=!1) => {
        v ? e.connectionClickStartHandle = h : e.connectionStartHandle = h,
        e.connectionEndHandle = null,
        e.connectionStatus = null,
        f && (e.connectionPosition = f)
    }
      , B = (h, f=null, v=null) => {
        e.connectionStartHandle && (e.connectionPosition = h,
        e.connectionEndHandle = f,
        e.connectionStatus = v)
    }
      , H = (h, f) => {
        e.connectionPosition = {
            x: Number.NaN,
            y: Number.NaN
        },
        e.connectionEndHandle = null,
        e.connectionStatus = null,
        f ? e.connectionClickStartHandle = null : e.connectionStartHandle = null
    }
      , K = h => {
        const f = mu(h)
          , v = f ? null : xt(h) ? h : u(h.id);
        return !f && !v ? [null, null, f] : [f ? h : tn(v), v, f]
    }
      , se = (h, f=!0, v=e.nodes) => {
        const [g,I,F] = K(h);
        if (!g)
            return [];
        const X = [];
        for (const U of v || e.nodes) {
            if (!F && (U.id === I.id || !U.computedPosition))
                continue;
            const ee = tn(U)
              , le = nn(ee, g);
            (f && le > 0 || le >= Number(g.width) * Number(g.height)) && X.push(U)
        }
        return X
    }
      , ae = (h, f, v=!0) => {
        const [g] = K(h);
        if (!g)
            return !1;
        const I = nn(g, f);
        return v && I > 0 || I >= Number(g.width) * Number(g.height)
    }
      , te = h => {
        const {viewport: f, dimensions: v, d3Zoom: g, d3Selection: I, translateExtent: F} = e;
        if (!g || !I || !h.x && !h.y)
            return !1;
        const X = gt.translate(f.x + h.x, f.y + h.y).scale(f.zoom)
          , U = [[0, 0], [v.width, v.height]]
          , ee = g.constrain()(X, U, F)
          , le = e.viewport.x !== ee.x || e.viewport.y !== ee.y || e.viewport.zoom !== ee.k;
        return g.transform(I, ee),
        le
    }
      , ce = h => {
        const f = h instanceof Function ? h(e) : h
          , v = ["d3Zoom", "d3Selection", "d3ZoomHandler", "viewportRef", "vueFlowRef", "dimensions", "hooks"];
        be(f.defaultEdgeOptions) && (e.defaultEdgeOptions = f.defaultEdgeOptions);
        const g = f.modelValue || f.nodes || f.edges ? [] : void 0;
        g && (f.modelValue && g.push(...f.modelValue),
        f.nodes && g.push(...f.nodes),
        f.edges && g.push(...f.edges),
        w(g));
        const I = () => {
            be(f.maxZoom) && D(f.maxZoom),
            be(f.minZoom) && S(f.minZoom),
            be(f.translateExtent) && L(f.translateExtent)
        }
        ;
        for (const F of Object.keys(f)) {
            const X = F
              , U = f[X];
            ![...ju, ...v].includes(X) && be(U) && (e[X] = U)
        }
        On( () => e.d3Zoom).not.toBeNull().then(I),
        e.initialized || (e.initialized = !0)
    }
    ;
    return {
        updateNodePositions: d,
        updateNodeDimensions: m,
        setElements: w,
        setNodes: W,
        setEdges: $,
        addNodes: Y,
        addEdges: y,
        removeNodes: T,
        removeEdges: b,
        findNode: u,
        findEdge: c,
        updateEdge: k,
        updateEdgeData: P,
        updateNode: G,
        updateNodeData: j,
        applyEdgeChanges: A,
        applyNodeChanges: O,
        addSelectedElements: E,
        addSelectedNodes: C,
        addSelectedEdges: x,
        setMinZoom: S,
        setMaxZoom: D,
        setTranslateExtent: L,
        setNodeExtent: V,
        setPaneClickDistance: z,
        removeSelectedElements: _,
        removeSelectedNodes: N,
        removeSelectedEdges: M,
        startConnection: oe,
        updateConnection: B,
        endConnection: H,
        setInteractive: q,
        setState: ce,
        getIntersectingNodes: se,
        getIncomers: r,
        getOutgoers: s,
        getConnectedEdges: a,
        getHandleConnections: l,
        isNodeIntersecting: ae,
        panBy: te,
        fitView: h => o.value.fitView(h),
        zoomIn: h => o.value.zoomIn(h),
        zoomOut: h => o.value.zoomOut(h),
        zoomTo: (h, f) => o.value.zoomTo(h, f),
        setViewport: (h, f) => o.value.setViewport(h, f),
        setTransform: (h, f) => o.value.setTransform(h, f),
        getViewport: () => o.value.getViewport(),
        getTransform: () => o.value.getTransform(),
        setCenter: (h, f, v) => o.value.setCenter(h, f, v),
        fitBounds: (h, f) => o.value.fitBounds(h, f),
        project: h => o.value.project(h),
        screenToFlowCoordinate: h => o.value.screenToFlowCoordinate(h),
        flowToScreenCoordinate: h => o.value.flowToScreenCoordinate(h),
        toObject: () => {
            const h = []
              , f = [];
            for (const v of e.nodes) {
                const {computedPosition: g, handleBounds: I, selected: F, dimensions: X, isParent: U, resizing: ee, dragging: le, events: ue, ...pe} = v;
                h.push(pe)
            }
            for (const v of e.edges) {
                const {selected: g, sourceNode: I, targetNode: F, events: X, ...U} = v;
                f.push(U)
            }
            return JSON.parse(JSON.stringify({
                nodes: h,
                edges: f,
                position: [e.viewport.x, e.viewport.y],
                zoom: e.viewport.zoom,
                viewport: e.viewport
            }))
        }
        ,
        fromObject: h => new Promise(f => {
            const {nodes: v, edges: g, position: I, zoom: F, viewport: X} = h;
            if (v && W(v),
            g && $(g),
            X != null && X.x && (X != null && X.y) || I) {
                const U = (X == null ? void 0 : X.x) || I[0]
                  , ee = (X == null ? void 0 : X.y) || I[1]
                  , le = (X == null ? void 0 : X.zoom) || F || e.viewport.zoom;
                return On( () => o.value.viewportInitialized).toBe(!0).then( () => {
                    o.value.setViewport({
                        x: U,
                        y: ee,
                        zoom: le
                    }).then( () => {
                        f(!0)
                    }
                    )
                }
                )
            } else
                f(!0)
        }
        ),
        updateNodeInternals: i,
        viewportHelper: o,
        $reset: () => {
            const h = nr();
            if (e.edges = [],
            e.nodes = [],
            e.d3Zoom && e.d3Selection) {
                const f = gt.translate(h.defaultViewport.x ?? 0, h.defaultViewport.y ?? 0).scale(it(h.defaultViewport.zoom ?? 1, h.minZoom, h.maxZoom))
                  , v = e.viewportRef.getBoundingClientRect()
                  , g = [[0, 0], [v.width, v.height]]
                  , I = e.d3Zoom.constrain()(f, g, h.translateExtent);
                e.d3Zoom.transform(e.d3Selection, I)
            }
            ce(h)
        }
        ,
        $destroy: () => {}
    }
}
const tc = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"]
  , nc = {
    name: "Handle",
    compatConfig: {
        MODE: 3
    }
}
  , sn = _e({
    ...nc,
    props: {
        id: {
            default: null
        },
        type: {},
        position: {
            default: () => Z.Top
        },
        isValidConnection: {
            type: Function
        },
        connectable: {
            type: [Boolean, Number, String, Function],
            default: void 0
        },
        connectableStart: {
            type: Boolean,
            default: !0
        },
        connectableEnd: {
            type: Boolean,
            default: !0
        }
    },
    setup(e, {expose: t}) {
        const n = pr(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"])
          , o = ye( () => n.type ?? "source")
          , i = ye( () => n.isValidConnection ?? null)
          , {id: r, connectionStartHandle: s, connectionClickStartHandle: a, connectionEndHandle: l, vueFlowRef: u, nodesConnectable: c, noDragClassName: d, noPanClassName: m} = we()
          , {id: p, node: C, nodeEl: x, connectedEdges: E} = er()
          , N = ve()
          , M = ye( () => typeof e.connectableStart < "u" ? e.connectableStart : !0)
          , _ = ye( () => typeof e.connectableEnd < "u" ? e.connectableEnd : !0)
          , S = ye( () => {
            var $, w, Y, y, T, b;
            return (($ = s.value) == null ? void 0 : $.nodeId) === p && ((w = s.value) == null ? void 0 : w.id) === e.id && ((Y = s.value) == null ? void 0 : Y.type) === o.value || ((y = l.value) == null ? void 0 : y.nodeId) === p && ((T = l.value) == null ? void 0 : T.id) === e.id && ((b = l.value) == null ? void 0 : b.type) === o.value
        }
        )
          , D = ye( () => {
            var $, w, Y;
            return (($ = a.value) == null ? void 0 : $.nodeId) === p && ((w = a.value) == null ? void 0 : w.id) === e.id && ((Y = a.value) == null ? void 0 : Y.type) === o.value
        }
        )
          , {handlePointerDown: L, handleClick: V} = ji({
            nodeId: p,
            handleId: e.id,
            isValidConnection: i,
            type: o
        })
          , z = re( () => typeof e.connectable == "string" && e.connectable === "single" ? !E.value.some($ => {
            const w = $[`${o.value}Handle`];
            return $[o.value] !== p ? !1 : w ? w === e.id : !0
        }
        ) : typeof e.connectable == "number" ? E.value.filter($ => {
            const w = $[`${o.value}Handle`];
            return $[o.value] !== p ? !1 : w ? w === e.id : !0
        }
        ).length < e.connectable : typeof e.connectable == "function" ? e.connectable(C, E.value) : be(e.connectable) ? e.connectable : c.value);
        qe( () => {
            var $;
            if (!C.dimensions.width || !C.dimensions.height)
                return;
            const w = ($ = C.handleBounds[o.value]) == null ? void 0 : $.find(O => O.id === e.id);
            if (!u.value || w)
                return;
            const Y = u.value.querySelector(".vue-flow__transformationpane");
            if (!x.value || !N.value || !Y || !e.id)
                return;
            const y = x.value.getBoundingClientRect()
              , T = N.value.getBoundingClientRect()
              , b = window.getComputedStyle(Y)
              , {m22: k} = new window.DOMMatrixReadOnly(b.transform)
              , P = {
                id: e.id,
                position: e.position,
                x: (T.left - y.left) / k,
                y: (T.top - y.top) / k,
                type: o.value,
                nodeId: p,
                ...fn(N.value)
            };
            C.handleBounds[o.value] = [...C.handleBounds[o.value] ?? [], P]
        }
        );
        function q($) {
            const w = so($);
            z.value && M.value && (w && $.button === 0 || !w) && L($)
        }
        function W($) {
            !p || !a.value && !M.value || z.value && V($)
        }
        return t({
            handleClick: V,
            handlePointerDown: L,
            onClick: W,
            onPointerDown: q
        }),
        ($, w) => (fe(),
        me("div", {
            ref_key: "handle",
            ref: N,
            "data-id": `${Q(r)}-${Q(p)}-${e.id}-${o.value}`,
            "data-handleid": e.id,
            "data-nodeid": Q(p),
            "data-handlepos": $.position,
            class: ct(["vue-flow__handle", [`vue-flow__handle-${$.position}`, `vue-flow__handle-${e.id}`, Q(d), Q(m), o.value, {
                connectable: z.value,
                connecting: D.value,
                connectablestart: M.value,
                connectableend: _.value,
                connectionindicator: z.value && (M.value && !S.value || _.value && S.value)
            }]]),
            onMousedown: q,
            onTouchstartPassive: q,
            onClick: W
        }, [Ze($.$slots, "default", {
            id: $.id
        })], 42, tc))
    }
})
  , pn = function({sourcePosition: e=Z.Bottom, targetPosition: t=Z.Top, label: n, connectable: o=!0, isValidTargetPos: i, isValidSourcePos: r, data: s}) {
    const a = s.label || n;
    return [ge(sn, {
        type: "target",
        position: t,
        connectable: o,
        isValidConnection: i
    }), typeof a != "string" && a ? ge(a) : ge(De, [a]), ge(sn, {
        type: "source",
        position: e,
        connectable: o,
        isValidConnection: r
    })]
};
pn.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
pn.inheritAttrs = !1;
pn.compatConfig = {
    MODE: 3
};
const oc = pn
  , mn = function({targetPosition: e=Z.Top, label: t, connectable: n=!0, isValidTargetPos: o, data: i}) {
    const r = i.label || t;
    return [ge(sn, {
        type: "target",
        position: e,
        connectable: n,
        isValidConnection: o
    }), typeof r != "string" && r ? ge(r) : ge(De, [r])]
};
mn.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
mn.inheritAttrs = !1;
mn.compatConfig = {
    MODE: 3
};
const ic = mn
  , yn = function({sourcePosition: e=Z.Bottom, label: t, connectable: n=!0, isValidSourcePos: o, data: i}) {
    const r = i.label || t;
    return [typeof r != "string" && r ? ge(r) : ge(De, [r]), ge(sn, {
        type: "source",
        position: e,
        connectable: n,
        isValidConnection: o
    })]
};
yn.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
yn.inheritAttrs = !1;
yn.compatConfig = {
    MODE: 3
};
const rc = yn
  , sc = ["transform"]
  , ac = ["width", "height", "x", "y", "rx", "ry"]
  , lc = ["y"]
  , uc = {
    name: "EdgeText",
    compatConfig: {
        MODE: 3
    }
}
  , cc = _e({
    ...uc,
    props: {
        x: {},
        y: {},
        label: {},
        labelStyle: {
            default: () => ({})
        },
        labelShowBg: {
            type: Boolean,
            default: !0
        },
        labelBgStyle: {
            default: () => ({})
        },
        labelBgPadding: {
            default: () => [2, 4]
        },
        labelBgBorderRadius: {
            default: 2
        }
    },
    setup(e) {
        const t = ve({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        })
          , n = ve(null)
          , o = re( () => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
        qe(i),
        he([ () => e.x, () => e.y, n, () => e.label], i);
        function i() {
            if (!n.value)
                return;
            const r = n.value.getBBox();
            (r.width !== t.value.width || r.height !== t.value.height) && (t.value = r)
        }
        return (r, s) => (fe(),
        me("g", {
            transform: o.value,
            class: "vue-flow__edge-textwrapper"
        }, [r.labelShowBg ? (fe(),
        me("rect", {
            key: 0,
            class: "vue-flow__edge-textbg",
            width: `${t.value.width + 2 * r.labelBgPadding[0]}px`,
            height: `${t.value.height + 2 * r.labelBgPadding[1]}px`,
            x: -r.labelBgPadding[0],
            y: -r.labelBgPadding[1],
            style: He(r.labelBgStyle),
            rx: r.labelBgBorderRadius,
            ry: r.labelBgBorderRadius
        }, null, 12, ac)) : $e("", !0), nt("text", jo(r.$attrs, {
            ref_key: "el",
            ref: n,
            class: "vue-flow__edge-text",
            y: t.value.height / 2,
            dy: "0.3em",
            style: r.labelStyle
        }), [Ze(r.$slots, "default", {}, () => [typeof r.label != "string" ? (fe(),
        dt(_r(r.label), {
            key: 0
        })) : (fe(),
        me(De, {
            key: 1
        }, [wr(Dn(r.label), 1)], 64))])], 16, lc)], 8, sc))
    }
})
  , dc = ["id", "d", "marker-end", "marker-start"]
  , fc = ["d", "stroke-width"]
  , hc = {
    name: "BaseEdge",
    inheritAttrs: !1,
    compatConfig: {
        MODE: 3
    }
}
  , _n = _e({
    ...hc,
    props: {
        id: {},
        labelX: {},
        labelY: {},
        path: {},
        label: {},
        markerStart: {},
        markerEnd: {},
        interactionWidth: {
            default: 20
        },
        labelStyle: {},
        labelShowBg: {
            type: Boolean
        },
        labelBgStyle: {},
        labelBgPadding: {},
        labelBgBorderRadius: {}
    },
    setup(e, {expose: t}) {
        const n = ve(null)
          , o = ve(null)
          , i = ve(null)
          , r = mr();
        return t({
            pathEl: n,
            interactionEl: o,
            labelEl: i
        }),
        (s, a) => (fe(),
        me(De, null, [nt("path", jo(Q(r), {
            id: s.id,
            ref_key: "pathEl",
            ref: n,
            d: s.path,
            class: "vue-flow__edge-path",
            "marker-end": s.markerEnd,
            "marker-start": s.markerStart
        }), null, 16, dc), s.interactionWidth ? (fe(),
        me("path", {
            key: 0,
            ref_key: "interactionEl",
            ref: o,
            fill: "none",
            d: s.path,
            "stroke-width": s.interactionWidth,
            "stroke-opacity": 0,
            class: "vue-flow__edge-interaction"
        }, null, 8, fc)) : $e("", !0), s.label && s.labelX && s.labelY ? (fe(),
        dt(cc, {
            key: 1,
            ref_key: "labelEl",
            ref: i,
            x: s.labelX,
            y: s.labelY,
            label: s.label,
            "label-show-bg": s.labelShowBg,
            "label-bg-style": s.labelBgStyle,
            "label-bg-padding": s.labelBgPadding,
            "label-bg-border-radius": s.labelBgBorderRadius,
            "label-style": s.labelStyle
        }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : $e("", !0)], 64))
    }
});
function or({sourceX: e, sourceY: t, targetX: n, targetY: o}) {
    const i = Math.abs(n - e) / 2
      , r = n < e ? n + i : n - i
      , s = Math.abs(o - t) / 2
      , a = o < t ? o + s : o - s;
    return [r, a, i, s]
}
function ir({sourceX: e, sourceY: t, targetX: n, targetY: o, sourceControlX: i, sourceControlY: r, targetControlX: s, targetControlY: a}) {
    const l = e * .125 + i * .375 + s * .375 + n * .125
      , u = t * .125 + r * .375 + a * .375 + o * .125
      , c = Math.abs(l - e)
      , d = Math.abs(u - t);
    return [l, u, c, d]
}
function Yt(e, t) {
    return e >= 0 ? .5 * e : t * 25 * Math.sqrt(-e)
}
function Uo({pos: e, x1: t, y1: n, x2: o, y2: i, c: r}) {
    let s, a;
    switch (e) {
    case Z.Left:
        s = t - Yt(t - o, r),
        a = n;
        break;
    case Z.Right:
        s = t + Yt(o - t, r),
        a = n;
        break;
    case Z.Top:
        s = t,
        a = n - Yt(n - i, r);
        break;
    case Z.Bottom:
        s = t,
        a = n + Yt(i - n, r);
        break
    }
    return [s, a]
}
function rr(e) {
    const {sourceX: t, sourceY: n, sourcePosition: o=Z.Bottom, targetX: i, targetY: r, targetPosition: s=Z.Top, curvature: a=.25} = e
      , [l,u] = Uo({
        pos: o,
        x1: t,
        y1: n,
        x2: i,
        y2: r,
        c: a
    })
      , [c,d] = Uo({
        pos: s,
        x1: i,
        y1: r,
        x2: t,
        y2: n,
        c: a
    })
      , [m,p,C,x] = ir({
        sourceX: t,
        sourceY: n,
        targetX: i,
        targetY: r,
        sourceControlX: l,
        sourceControlY: u,
        targetControlX: c,
        targetControlY: d
    });
    return [`M${t},${n} C${l},${u} ${c},${d} ${i},${r}`, m, p, C, x]
}
function Zo({pos: e, x1: t, y1: n, x2: o, y2: i}) {
    let r, s;
    switch (e) {
    case Z.Left:
    case Z.Right:
        r = .5 * (t + o),
        s = n;
        break;
    case Z.Top:
    case Z.Bottom:
        r = t,
        s = .5 * (n + i);
        break
    }
    return [r, s]
}
function sr(e) {
    const {sourceX: t, sourceY: n, sourcePosition: o=Z.Bottom, targetX: i, targetY: r, targetPosition: s=Z.Top} = e
      , [a,l] = Zo({
        pos: o,
        x1: t,
        y1: n,
        x2: i,
        y2: r
    })
      , [u,c] = Zo({
        pos: s,
        x1: i,
        y1: r,
        x2: t,
        y2: n
    })
      , [d,m,p,C] = ir({
        sourceX: t,
        sourceY: n,
        targetX: i,
        targetY: r,
        sourceControlX: a,
        sourceControlY: l,
        targetControlX: u,
        targetControlY: c
    });
    return [`M${t},${n} C${a},${l} ${u},${c} ${i},${r}`, d, m, p, C]
}
const Wo = {
    [Z.Left]: {
        x: -1,
        y: 0
    },
    [Z.Right]: {
        x: 1,
        y: 0
    },
    [Z.Top]: {
        x: 0,
        y: -1
    },
    [Z.Bottom]: {
        x: 0,
        y: 1
    }
};
function gc({source: e, sourcePosition: t=Z.Bottom, target: n}) {
    return t === Z.Left || t === Z.Right ? e.x < n.x ? {
        x: 1,
        y: 0
    } : {
        x: -1,
        y: 0
    } : e.y < n.y ? {
        x: 0,
        y: 1
    } : {
        x: 0,
        y: -1
    }
}
function Ko(e, t) {
    return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2)
}
function vc({source: e, sourcePosition: t=Z.Bottom, target: n, targetPosition: o=Z.Top, center: i, offset: r}) {
    const s = Wo[t]
      , a = Wo[o]
      , l = {
        x: e.x + s.x * r,
        y: e.y + s.y * r
    }
      , u = {
        x: n.x + a.x * r,
        y: n.y + a.y * r
    }
      , c = gc({
        source: l,
        sourcePosition: t,
        target: u
    })
      , d = c.x !== 0 ? "x" : "y"
      , m = c[d];
    let p, C, x;
    const E = {
        x: 0,
        y: 0
    }
      , N = {
        x: 0,
        y: 0
    }
      , [M,_,S,D] = or({
        sourceX: e.x,
        sourceY: e.y,
        targetX: n.x,
        targetY: n.y
    });
    if (s[d] * a[d] === -1) {
        C = i.x ?? M,
        x = i.y ?? _;
        const V = [{
            x: C,
            y: l.y
        }, {
            x: C,
            y: u.y
        }]
          , z = [{
            x: l.x,
            y: x
        }, {
            x: u.x,
            y: x
        }];
        s[d] === m ? p = d === "x" ? V : z : p = d === "x" ? z : V
    } else {
        const V = [{
            x: l.x,
            y: u.y
        }]
          , z = [{
            x: u.x,
            y: l.y
        }];
        if (d === "x" ? p = s.x === m ? z : V : p = s.y === m ? V : z,
        t === o) {
            const Y = Math.abs(e[d] - n[d]);
            if (Y <= r) {
                const y = Math.min(r - 1, r - Y);
                s[d] === m ? E[d] = (l[d] > e[d] ? -1 : 1) * y : N[d] = (u[d] > n[d] ? -1 : 1) * y
            }
        }
        if (t !== o) {
            const Y = d === "x" ? "y" : "x"
              , y = s[d] === a[Y]
              , T = l[Y] > u[Y]
              , b = l[Y] < u[Y];
            (s[d] === 1 && (!y && T || y && b) || s[d] !== 1 && (!y && b || y && T)) && (p = d === "x" ? V : z)
        }
        const q = {
            x: l.x + E.x,
            y: l.y + E.y
        }
          , W = {
            x: u.x + N.x,
            y: u.y + N.y
        }
          , $ = Math.max(Math.abs(q.x - p[0].x), Math.abs(W.x - p[0].x))
          , w = Math.max(Math.abs(q.y - p[0].y), Math.abs(W.y - p[0].y));
        $ >= w ? (C = (q.x + W.x) / 2,
        x = p[0].y) : (C = p[0].x,
        x = (q.y + W.y) / 2)
    }
    return [[e, {
        x: l.x + E.x,
        y: l.y + E.y
    }, ...p, {
        x: u.x + N.x,
        y: u.y + N.y
    }, n], C, x, S, D]
}
function pc(e, t, n, o) {
    const i = Math.min(Ko(e, t) / 2, Ko(t, n) / 2, o)
      , {x: r, y: s} = t;
    if (e.x === r && r === n.x || e.y === s && s === n.y)
        return `L${r} ${s}`;
    if (e.y === s) {
        const u = e.x < n.x ? -1 : 1
          , c = e.y < n.y ? 1 : -1;
        return `L ${r + i * u},${s}Q ${r},${s} ${r},${s + i * c}`
    }
    const a = e.x < n.x ? 1 : -1
      , l = e.y < n.y ? -1 : 1;
    return `L ${r},${s + i * l}Q ${r},${s} ${r + i * a},${s}`
}
function Kn(e) {
    const {sourceX: t, sourceY: n, sourcePosition: o=Z.Bottom, targetX: i, targetY: r, targetPosition: s=Z.Top, borderRadius: a=5, centerX: l, centerY: u, offset: c=20} = e
      , [d,m,p,C,x] = vc({
        source: {
            x: t,
            y: n
        },
        sourcePosition: o,
        target: {
            x: i,
            y: r
        },
        targetPosition: s,
        center: {
            x: l,
            y: u
        },
        offset: c
    });
    return [d.reduce( (N, M, _) => {
        let S;
        return _ > 0 && _ < d.length - 1 ? S = pc(d[_ - 1], M, d[_ + 1], a) : S = `${_ === 0 ? "M" : "L"}${M.x} ${M.y}`,
        N += S,
        N
    }
    , ""), m, p, C, x]
}
function mc(e) {
    const {sourceX: t, sourceY: n, targetX: o, targetY: i} = e
      , [r,s,a,l] = or({
        sourceX: t,
        sourceY: n,
        targetX: o,
        targetY: i
    });
    return [`M ${t},${n}L ${o},${i}`, r, s, a, l]
}
const yc = _e({
    name: "StraightEdge",
    props: ["label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "sourceY", "sourceX", "targetX", "targetY", "markerEnd", "markerStart", "interactionWidth"],
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t}) {
        return () => {
            const [n,o,i] = mc(e);
            return ge(_n, {
                path: n,
                labelX: o,
                labelY: i,
                ...t,
                ...e
            })
        }
    }
})
  , _c = yc
  , wc = _e({
    name: "SmoothStepEdge",
    props: ["sourcePosition", "targetPosition", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "sourceY", "sourceX", "targetX", "targetY", "borderRadius", "markerEnd", "markerStart", "interactionWidth", "offset"],
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t}) {
        return () => {
            const [n,o,i] = Kn({
                ...e,
                sourcePosition: e.sourcePosition ?? Z.Bottom,
                targetPosition: e.targetPosition ?? Z.Top
            });
            return ge(_n, {
                path: n,
                labelX: o,
                labelY: i,
                ...t,
                ...e
            })
        }
    }
})
  , ar = wc
  , bc = _e({
    name: "StepEdge",
    props: ["sourcePosition", "targetPosition", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "sourceY", "sourceX", "targetX", "targetY", "markerEnd", "markerStart", "interactionWidth"],
    setup(e, {attrs: t}) {
        return () => ge(ar, {
            ...e,
            ...t,
            borderRadius: 0
        })
    }
})
  , xc = bc
  , Ec = _e({
    name: "BezierEdge",
    props: ["sourcePosition", "targetPosition", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "sourceY", "sourceX", "targetX", "targetY", "curvature", "markerEnd", "markerStart", "interactionWidth"],
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t}) {
        return () => {
            const [n,o,i] = rr({
                ...e,
                sourcePosition: e.sourcePosition ?? Z.Bottom,
                targetPosition: e.targetPosition ?? Z.Top
            });
            return ge(_n, {
                path: n,
                labelX: o,
                labelY: i,
                ...t,
                ...e
            })
        }
    }
})
  , Sc = Ec
  , Nc = _e({
    name: "SimpleBezierEdge",
    props: ["sourcePosition", "targetPosition", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "sourceY", "sourceX", "targetX", "targetY", "markerEnd", "markerStart", "interactionWidth"],
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t}) {
        return () => {
            const [n,o,i] = sr({
                ...e,
                sourcePosition: e.sourcePosition ?? Z.Bottom,
                targetPosition: e.targetPosition ?? Z.Top
            });
            return ge(_n, {
                path: n,
                labelX: o,
                labelY: i,
                ...t,
                ...e
            })
        }
    }
})
  , Cc = Nc
  , Mc = {
    input: rc,
    default: oc,
    output: ic
}
  , Ic = {
    default: Sc,
    straight: _c,
    step: xc,
    smoothstep: ar,
    simplebezier: Cc
};
function Tc(e, t, n) {
    const o = re( () => x => t.value.get(x))
      , i = re( () => x => n.value.get(x))
      , r = re( () => {
        const x = {
            ...Ic,
            ...e.edgeTypes
        }
          , E = Object.keys(x);
        for (const N of e.edges)
            N.type && !E.includes(N.type) && (x[N.type] = N.type);
        return x
    }
    )
      , s = re( () => {
        const x = {
            ...Mc,
            ...e.nodeTypes
        }
          , E = Object.keys(x);
        for (const N of e.nodes)
            N.type && !E.includes(N.type) && (x[N.type] = N.type);
        return x
    }
    )
      , a = re( () => e.onlyRenderVisibleElements ? Fi(e.nodes, {
        x: 0,
        y: 0,
        width: e.dimensions.width,
        height: e.dimensions.height
    }, e.viewport, !0) : e.nodes)
      , l = re( () => {
        if (e.onlyRenderVisibleElements) {
            const x = [];
            for (const E of e.edges) {
                const N = t.value.get(E.source)
                  , M = t.value.get(E.target);
                Mu({
                    sourcePos: N.computedPosition || {
                        x: 0,
                        y: 0
                    },
                    targetPos: M.computedPosition || {
                        x: 0,
                        y: 0
                    },
                    sourceWidth: N.dimensions.width,
                    sourceHeight: N.dimensions.height,
                    targetWidth: M.dimensions.width,
                    targetHeight: M.dimensions.height,
                    width: e.dimensions.width,
                    height: e.dimensions.height,
                    viewport: e.viewport
                }) && x.push(E)
            }
            return x
        }
        return e.edges
    }
    )
      , u = re( () => [...a.value, ...l.value])
      , c = re( () => {
        const x = [];
        for (const E of e.nodes)
            E.selected && x.push(E);
        return x
    }
    )
      , d = re( () => {
        const x = [];
        for (const E of e.edges)
            E.selected && x.push(E);
        return x
    }
    )
      , m = re( () => [...c.value, ...d.value])
      , p = re( () => {
        const x = [];
        for (const E of e.nodes)
            E.dimensions.width && E.dimensions.height && E.handleBounds !== void 0 && x.push(E);
        return x
    }
    )
      , C = re( () => a.value.length > 0 && p.value.length === a.value.length);
    return {
        getNode: o,
        getEdge: i,
        getElements: u,
        getEdgeTypes: r,
        getNodeTypes: s,
        getEdges: l,
        getNodes: a,
        getSelectedElements: m,
        getSelectedNodes: c,
        getSelectedEdges: d,
        getNodesInitialized: p,
        areNodesInitialized: C
    }
}
class Qe {
    constructor() {
        this.currentId = 0,
        this.flows = new Map
    }
    static getInstance() {
        var t;
        const n = (t = Dt()) == null ? void 0 : t.appContext.app
          , o = (n == null ? void 0 : n.config.globalProperties.$vueFlowStorage) ?? Qe.instance;
        return Qe.instance = o ?? new Qe,
        n && (n.config.globalProperties.$vueFlowStorage = Qe.instance),
        Qe.instance
    }
    set(t, n) {
        return this.flows.set(t, n)
    }
    get(t) {
        return this.flows.get(t)
    }
    remove(t) {
        return this.flows.delete(t)
    }
    create(t, n) {
        const o = nr()
          , i = cr(o)
          , r = {};
        for (const [m,p] of Object.entries(i.hooks)) {
            const C = `on${m.charAt(0).toUpperCase() + m.slice(1)}`;
            r[C] = p.on
        }
        const s = {};
        for (const [m,p] of Object.entries(i.hooks))
            s[m] = p.trigger;
        const a = re( () => {
            const m = new Map;
            for (const p of i.nodes)
                m.set(p.id, p);
            return m
        }
        )
          , l = re( () => {
            const m = new Map;
            for (const p of i.edges)
                m.set(p.id, p);
            return m
        }
        )
          , u = Tc(i, a, l)
          , c = ec(i, a, l);
        c.setState({
            ...i,
            ...n
        });
        const d = {
            ...r,
            ...u,
            ...c,
            ...kr(i),
            nodeLookup: a,
            edgeLookup: l,
            emits: s,
            id: t,
            vueFlowVersion: "1.42.2",
            $destroy: () => {
                this.remove(t)
            }
        };
        return this.set(t, d),
        d
    }
    getId() {
        return `vue-flow-${this.currentId++}`
    }
}
function we(e) {
    const t = Qe.getInstance()
      , n = Qo()
      , o = typeof e == "object"
      , i = o ? e : {
        id: e
    }
      , r = i.id
      , s = r ?? (n == null ? void 0 : n.vueFlowId);
    let a;
    if (n) {
        const l = pt(Xo, null);
        typeof l < "u" && l !== null && (!s || l.id === s) && (a = l)
    }
    if (a || s && (a = t.get(s)),
    !a || s && a.id !== s) {
        const l = r ?? t.getId()
          , u = t.create(l, i);
        a = u,
        (n ?? Jo(!0)).run( () => {
            he(u.applyDefault, (d, m, p) => {
                const C = E => {
                    u.applyNodeChanges(E)
                }
                  , x = E => {
                    u.applyEdgeChanges(E)
                }
                ;
                d ? (u.onNodesChange(C),
                u.onEdgesChange(x)) : (u.hooks.value.nodesChange.off(C),
                u.hooks.value.edgesChange.off(x)),
                p( () => {
                    u.hooks.value.nodesChange.off(C),
                    u.hooks.value.edgesChange.off(x)
                }
                )
            }
            , {
                immediate: !0
            }),
            an( () => {
                if (a) {
                    const d = t.get(a.id);
                    d ? d.$destroy() : gn(`No store instance found for id ${a.id} in storage.`)
                }
            }
            )
        }
        )
    } else
        o && a.setState(i);
    if (n && (ut(Xo, a),
    n.vueFlowId = a.id),
    o) {
        const l = Dt();
        (l == null ? void 0 : l.type.name) !== "VueFlow" && a.emits.error(new Ee(xe.USEVUEFLOW_OPTIONS))
    }
    return a
}
function kc(e) {
    const {emits: t, dimensions: n} = we();
    let o;
    qe( () => {
        const i = e.value
          , r = () => {
            if (!i)
                return;
            const s = fn(i);
            (s.width === 0 || s.height === 0) && t.error(new Ee(xe.MISSING_VIEWPORT_DIMENSIONS)),
            n.value = {
                width: s.width || 500,
                height: s.height || 500
            }
        }
        ;
        r(),
        window.addEventListener("resize", r),
        i && (o = new ResizeObserver( () => r()),
        o.observe(i)),
        ei( () => {
            window.removeEventListener("resize", r),
            o && i && o.unobserve(i)
        }
        )
    }
    )
}
const Pc = {
    name: "UserSelection",
    compatConfig: {
        MODE: 3
    }
}
  , $c = _e({
    ...Pc,
    props: {
        userSelectionRect: {}
    },
    setup(e) {
        return (t, n) => (fe(),
        me("div", {
            class: "vue-flow__selection vue-flow__container",
            style: He({
                width: `${t.userSelectionRect.width}px`,
                height: `${t.userSelectionRect.height}px`,
                transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
            })
        }, null, 4))
    }
})
  , Dc = ["tabIndex"]
  , Ac = {
    name: "NodesSelection",
    compatConfig: {
        MODE: 3
    }
}
  , Oc = _e({
    ...Ac,
    setup(e) {
        const {emits: t, viewport: n, getSelectedNodes: o, noPanClassName: i, disableKeyboardA11y: r, userSelectionActive: s} = we()
          , a = tr()
          , l = ve(null)
          , u = Qi({
            el: l,
            onStart(C) {
                t.selectionDragStart(C)
            },
            onDrag(C) {
                t.selectionDrag(C)
            },
            onStop(C) {
                t.selectionDragStop(C)
            }
        });
        qe( () => {
            var C;
            r.value || (C = l.value) == null || C.focus({
                preventScroll: !0
            })
        }
        );
        const c = re( () => Li(o.value))
          , d = re( () => ({
            width: `${c.value.width}px`,
            height: `${c.value.height}px`,
            top: `${c.value.y}px`,
            left: `${c.value.x}px`
        }));
        function m(C) {
            t.selectionContextMenu({
                event: C,
                nodes: o.value
            })
        }
        function p(C) {
            r || lt[C.key] && (C.preventDefault(),
            a({
                x: lt[C.key].x,
                y: lt[C.key].y
            }, C.shiftKey))
        }
        return (C, x) => !Q(s) && c.value.width && c.value.height ? (fe(),
        me("div", {
            key: 0,
            class: ct(["vue-flow__nodesselection vue-flow__container", Q(i)]),
            style: He({
                transform: `translate(${Q(n).x}px,${Q(n).y}px) scale(${Q(n).zoom})`
            })
        }, [nt("div", {
            ref_key: "el",
            ref: l,
            class: ct([{
                dragging: Q(u)
            }, "vue-flow__nodesselection-rect"]),
            style: He(d.value),
            tabIndex: Q(r) ? void 0 : -1,
            onContextmenu: m,
            onKeydown: p
        }, null, 46, Dc)], 6)) : $e("", !0)
    }
});
function zc(e, t) {
    return {
        x: e.clientX - t.left,
        y: e.clientY - t.top
    }
}
const Bc = {
    name: "Pane",
    compatConfig: {
        MODE: 3
    }
}
  , Rc = _e({
    ...Bc,
    props: {
        isSelecting: {
            type: Boolean
        },
        selectionKeyPressed: {
            type: Boolean
        }
    },
    setup(e) {
        const {vueFlowRef: t, nodes: n, viewport: o, emits: i, userSelectionActive: r, removeSelectedElements: s, userSelectionRect: a, elementsSelectable: l, nodesSelectionActive: u, getSelectedEdges: c, getSelectedNodes: d, removeNodes: m, removeEdges: p, selectionMode: C, deleteKeyCode: x, multiSelectionKeyCode: E, multiSelectionActive: N, edgeLookup: M, nodeLookup: _, connectionLookup: S, defaultEdgeOptions: D, connectionStartHandle: L} = we()
          , V = ve(null)
          , z = ve(new Set)
          , q = ve(new Set)
          , W = ve()
          , $ = ye( () => l.value && (e.isSelecting || r.value))
          , w = ye( () => L.value !== null);
        let Y = !1
          , y = !1;
        const T = Nt(x, {
            actInsideInputWithModifier: !1
        })
          , b = Nt(E);
        he(T, B => {
            B && (m(d.value),
            p(c.value),
            u.value = !1)
        }
        ),
        he(b, B => {
            N.value = B
        }
        );
        function k(B, H) {
            return K => {
                K.target === H && (B == null || B(K))
            }
        }
        function P(B) {
            if (Y || w) {
                Y = !1;
                return
            }
            i.paneClick(B),
            s(),
            u.value = !1
        }
        function O(B) {
            B.preventDefault(),
            B.stopPropagation(),
            i.paneContextMenu(B)
        }
        function A(B) {
            i.paneScroll(B)
        }
        function G(B) {
            var H, K, se;
            if (W.value = (H = t.value) == null ? void 0 : H.getBoundingClientRect(),
            !l.value || !e.isSelecting || B.button !== 0 || B.target !== V.value || !W.value)
                return;
            (se = (K = B.target) == null ? void 0 : K.setPointerCapture) == null || se.call(K, B.pointerId);
            const {x: ae, y: te} = zc(B, W.value);
            y = !0,
            Y = !1,
            s(),
            a.value = {
                width: 0,
                height: 0,
                startX: ae,
                startY: te,
                x: ae,
                y: te
            },
            i.selectionStart(B)
        }
        function j(B) {
            var H;
            if (!W.value || !a.value)
                return;
            Y = !0;
            const {x: K, y: se} = Ue(B, W.value)
              , {startX: ae=0, startY: te=0} = a.value
              , ce = {
                startX: ae,
                startY: te,
                x: K < ae ? K : ae,
                y: se < te ? se : te,
                width: Math.abs(K - ae),
                height: Math.abs(se - te)
            }
              , J = z.value
              , ne = q.value;
            z.value = new Set(Fi(n.value, ce, o.value, C.value === io.Partial, !0).map(h => h.id)),
            q.value = new Set;
            const ie = ((H = D.value) == null ? void 0 : H.selectable) ?? !0;
            for (const h of z.value) {
                const f = S.value.get(h);
                if (f)
                    for (const {edgeId: v} of f.values()) {
                        const g = M.value.get(v);
                        g && (g.selectable ?? ie) && q.value.add(v)
                    }
            }
            if (!Go(J, z.value)) {
                const h = Xe(_.value, z.value, !0);
                i.nodesChange(h)
            }
            if (!Go(ne, q.value)) {
                const h = Xe(M.value, q.value);
                i.edgesChange(h)
            }
            a.value = ce,
            r.value = !0,
            u.value = !1
        }
        function oe(B) {
            var H;
            B.button !== 0 || !y || ((H = B.target) == null || H.releasePointerCapture(B.pointerId),
            !r.value && a.value && B.target === V.value && P(B),
            r.value = !1,
            a.value = null,
            u.value = z.value.size > 0,
            i.selectionEnd(B),
            e.selectionKeyPressed && (Y = !1),
            y = !1)
        }
        return (B, H) => (fe(),
        me("div", {
            ref_key: "container",
            ref: V,
            class: ct(["vue-flow__pane vue-flow__container", {
                selection: B.isSelecting
            }]),
            onClick: H[0] || (H[0] = K => $.value ? void 0 : k(P, V.value)(K)),
            onContextmenu: H[1] || (H[1] = K => k(O, V.value)(K)),
            onWheelPassive: H[2] || (H[2] = K => k(A, V.value)(K)),
            onPointerenter: H[3] || (H[3] = K => $.value ? void 0 : Q(i).paneMouseEnter(K)),
            onPointerdown: H[4] || (H[4] = K => $.value ? G(K) : Q(i).paneMouseMove(K)),
            onPointermove: H[5] || (H[5] = K => $.value ? j(K) : Q(i).paneMouseMove(K)),
            onPointerup: H[6] || (H[6] = K => $.value ? oe(K) : void 0),
            onPointerleave: H[7] || (H[7] = K => Q(i).paneMouseLeave(K))
        }, [Ze(B.$slots, "default"), Q(r) && Q(a) ? (fe(),
        dt($c, {
            key: 0,
            "user-selection-rect": Q(a)
        }, null, 8, ["user-selection-rect"])) : $e("", !0), Q(u) && Q(d).length ? (fe(),
        dt(Oc, {
            key: 1
        })) : $e("", !0)], 34))
    }
})
  , Vc = {
    name: "Transform",
    compatConfig: {
        MODE: 3
    }
}
  , Hc = _e({
    ...Vc,
    setup(e) {
        const {viewport: t, fitViewOnInit: n, fitViewOnInitDone: o} = we()
          , i = re( () => n.value ? !o.value : !1)
          , r = re( () => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
        return (s, a) => (fe(),
        me("div", {
            class: "vue-flow__transformationpane vue-flow__container",
            style: He({
                transform: r.value,
                opacity: i.value ? 0 : void 0
            })
        }, [Ze(s.$slots, "default")], 4))
    }
})
  , Lc = {
    name: "Viewport",
    compatConfig: {
        MODE: 3
    }
}
  , Fc = _e({
    ...Lc,
    setup(e) {
        const {minZoom: t, maxZoom: n, defaultViewport: o, translateExtent: i, zoomActivationKeyCode: r, selectionKeyCode: s, panActivationKeyCode: a, panOnScroll: l, panOnScrollMode: u, panOnScrollSpeed: c, panOnDrag: d, zoomOnDoubleClick: m, zoomOnPinch: p, zoomOnScroll: C, preventScrolling: x, noWheelClassName: E, noPanClassName: N, emits: M, connectionStartHandle: _, userSelectionActive: S, paneDragging: D, d3Zoom: L, d3Selection: V, d3ZoomHandler: z, viewport: q, viewportRef: W, paneClickDistance: $} = we();
        kc(W);
        const w = ve(!1)
          , Y = ve(!1);
        let y = null
          , T = !1
          , b = 0
          , k = {
            x: 0,
            y: 0,
            zoom: 0
        };
        const P = Nt(a)
          , O = Nt(s)
          , A = Nt(r)
          , G = ye( () => (!O.value || O.value && s.value === !0) && (P.value || d.value))
          , j = ye( () => P.value || l.value)
          , oe = ye( () => O.value || s.value === !0 && G.value !== !0);
        qe( () => {
            if (!W.value) {
                gn("Viewport element is missing");
                return
            }
            const te = W.value
              , ce = te.getBoundingClientRect()
              , J = du().clickDistance($.value).scaleExtent([t.value, n.value]).translateExtent(i.value)
              , ne = Ce(te).call(J)
              , ie = ne.on("wheel.zoom")
              , h = gt.translate(o.value.x ?? 0, o.value.y ?? 0).scale(it(o.value.zoom ?? 1, t.value, n.value))
              , f = [[0, 0], [ce.width, ce.height]]
              , v = J.constrain()(h, f, i.value);
            J.transform(ne, v),
            J.wheelDelta(H),
            L.value = J,
            V.value = ne,
            z.value = ie,
            q.value = {
                x: v.x,
                y: v.y,
                zoom: v.k
            },
            J.on("start", g => {
                var I;
                if (!g.sourceEvent)
                    return null;
                b = g.sourceEvent.button,
                w.value = !0;
                const F = se(g.transform);
                ((I = g.sourceEvent) == null ? void 0 : I.type) === "mousedown" && (D.value = !0),
                k = F,
                M.viewportChangeStart(F),
                M.moveStart({
                    event: g,
                    flowTransform: F
                })
            }
            ),
            J.on("end", g => {
                if (!g.sourceEvent)
                    return null;
                if (w.value = !1,
                D.value = !1,
                B(G.value, b ?? 0) && !T && M.paneContextMenu(g.sourceEvent),
                T = !1,
                K(k, g.transform)) {
                    const I = se(g.transform);
                    k = I,
                    M.viewportChangeEnd(I),
                    M.moveEnd({
                        event: g,
                        flowTransform: I
                    })
                }
            }
            ),
            J.filter(g => {
                var I;
                const F = A.value || C.value
                  , X = p.value && g.ctrlKey
                  , U = g.button;
                if (U === 1 && g.type === "mousedown" && (ae(g, "vue-flow__node") || ae(g, "vue-flow__edge")))
                    return !0;
                if (!G.value && !F && !j.value && !m.value && !p.value || S.value || !m.value && g.type === "dblclick" || ae(g, E.value) && g.type === "wheel" || ae(g, N.value) && (g.type !== "wheel" || j.value && g.type === "wheel" && !A.value) || !p.value && g.ctrlKey && g.type === "wheel" || !F && !j.value && !X && g.type === "wheel")
                    return !1;
                if (!p && g.type === "touchstart" && ((I = g.touches) == null ? void 0 : I.length) > 1)
                    return g.preventDefault(),
                    !1;
                if (!G.value && (g.type === "mousedown" || g.type === "touchstart") || s.value === !0 && Array.isArray(d.value) && d.value.includes(0) && U === 0 || Array.isArray(d.value) && !d.value.includes(U) && (g.type === "mousedown" || g.type === "touchstart"))
                    return !1;
                const ee = Array.isArray(d.value) && d.value.includes(U) || s.value === !0 && Array.isArray(d.value) && !d.value.includes(0) || !U || U <= 1;
                return (!g.ctrlKey || P.value || g.type === "wheel") && ee
            }
            ),
            he([S, G], () => {
                S.value && !w.value ? J.on("zoom", null) : S.value || J.on("zoom", g => {
                    q.value = {
                        x: g.transform.x,
                        y: g.transform.y,
                        zoom: g.transform.k
                    };
                    const I = se(g.transform);
                    T = B(G.value, b ?? 0),
                    M.viewportChange(I),
                    M.move({
                        event: g,
                        flowTransform: I
                    })
                }
                )
            }
            , {
                immediate: !0
            }),
            he([S, j, u, A, p, x, E], () => {
                j.value && !A.value && !S.value ? ne.on("wheel.zoom", g => {
                    if (ae(g, E.value))
                        return !1;
                    const I = A.value || C.value
                      , F = p.value && g.ctrlKey;
                    if (!(!x.value || j.value || I || F))
                        return !1;
                    g.preventDefault(),
                    g.stopImmediatePropagation();
                    const U = ne.property("__zoom").k || 1
                      , ee = rn();
                    if (!P.value && g.ctrlKey && p.value && ee) {
                        const mt = ke(g)
                          , lr = H(g)
                          , ur = U * 2 ** lr;
                        J.scaleTo(ne, ur, mt, g);
                        return
                    }
                    const le = g.deltaMode === 1 ? 20 : 1;
                    let ue = u.value === St.Vertical ? 0 : g.deltaX * le
                      , pe = u.value === St.Horizontal ? 0 : g.deltaY * le;
                    !ee && g.shiftKey && u.value !== St.Vertical && !ue && pe && (ue = pe,
                    pe = 0),
                    J.translateBy(ne, -(ue / U) * c.value, -(pe / U) * c.value);
                    const Te = se(ne.property("__zoom"));
                    y && clearTimeout(y),
                    Y.value ? (M.move({
                        event: g,
                        flowTransform: Te
                    }),
                    M.viewportChange(Te),
                    y = setTimeout( () => {
                        M.moveEnd({
                            event: g,
                            flowTransform: Te
                        }),
                        M.viewportChangeEnd(Te),
                        Y.value = !1
                    }
                    , 150)) : (Y.value = !0,
                    M.moveStart({
                        event: g,
                        flowTransform: Te
                    }),
                    M.viewportChangeStart(Te))
                }
                , {
                    passive: !1
                }) : typeof ie < "u" && ne.on("wheel.zoom", function(g, I) {
                    const F = !x.value && g.type === "wheel" && !g.ctrlKey
                      , X = A.value || C.value
                      , U = p.value && g.ctrlKey;
                    if (!X && !l.value && !U && g.type === "wheel" || F || ae(g, E.value))
                        return null;
                    g.preventDefault(),
                    ie.call(this, g, I)
                }, {
                    passive: !1
                })
            }
            , {
                immediate: !0
            })
        }
        );
        function B(te, ce) {
            return ce === 2 && Array.isArray(te) && te.includes(2)
        }
        function H(te) {
            const ce = te.ctrlKey && rn() ? 10 : 1;
            return -te.deltaY * (te.deltaMode === 1 ? .05 : te.deltaMode ? 1 : .002) * ce
        }
        function K(te, ce) {
            return te.x !== ce.x && !Number.isNaN(ce.x) || te.y !== ce.y && !Number.isNaN(ce.y) || te.zoom !== ce.k && !Number.isNaN(ce.k)
        }
        function se(te) {
            return {
                x: te.x,
                y: te.y,
                zoom: te.k
            }
        }
        function ae(te, ce) {
            return te.target.closest(`.${ce}`)
        }
        return (te, ce) => (fe(),
        me("div", {
            ref_key: "viewportRef",
            ref: W,
            class: "vue-flow__viewport vue-flow__container"
        }, [Be(Rc, {
            "is-selecting": oe.value,
            "selection-key-pressed": Q(O),
            class: ct({
                connecting: !!Q(_),
                dragging: Q(D),
                draggable: Q(d) === !0 || Array.isArray(Q(d)) && Q(d).includes(0)
            })
        }, {
            default: $n( () => [Be(Hc, null, {
                default: $n( () => [Ze(te.$slots, "default")]),
                _: 3
            })]),
            _: 3
        }, 8, ["is-selecting", "selection-key-pressed", "class"])], 512))
    }
})
  , Yc = ["id"]
  , Gc = ["id"]
  , Xc = ["id"]
  , Uc = {
    name: "A11yDescriptions",
    compatConfig: {
        MODE: 3
    }
}
  , Zc = _e({
    ...Uc,
    setup(e) {
        const {id: t, disableKeyboardA11y: n, ariaLiveMessage: o} = we();
        return (i, r) => (fe(),
        me(De, null, [nt("div", {
            id: `${Q($i)}-${Q(t)}`,
            style: {
                display: "none"
            }
        }, " Press enter or space to select a node. " + Dn(Q(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, Yc), nt("div", {
            id: `${Q(Di)}-${Q(t)}`,
            style: {
                display: "none"
            }
        }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, Gc), Q(n) ? $e("", !0) : (fe(),
        me("div", {
            key: 0,
            id: `${Q(pu)}-${Q(t)}`,
            "aria-live": "assertive",
            "aria-atomic": "true",
            style: {
                position: "absolute",
                width: "1px",
                height: "1px",
                margin: "-1px",
                border: "0",
                padding: "0",
                overflow: "hidden",
                clip: "rect(0px, 0px, 0px, 0px)",
                "clip-path": "inset(100%)"
            }
        }, Dn(Q(o)), 9, Xc))], 64))
    }
});
function Wc() {
    const e = we();
    he( () => e.viewportHelper.value.viewportInitialized, t => {
        t && setTimeout( () => {
            e.emits.init(e),
            e.emits.paneReady(e)
        }
        , 1)
    }
    )
}
function Kc(e, t, n) {
    return n === Z.Left ? e - t : n === Z.Right ? e + t : e
}
function qc(e, t, n) {
    return n === Z.Top ? e - t : n === Z.Bottom ? e + t : e
}
const ao = function({radius: e=10, centerX: t=0, centerY: n=0, position: o=Z.Top, type: i}) {
    return ge("circle", {
        class: `vue-flow__edgeupdater vue-flow__edgeupdater-${i}`,
        cx: Kc(t, e, o),
        cy: qc(n, e, o),
        r: e,
        stroke: "transparent",
        fill: "transparent"
    })
};
ao.props = ["radius", "centerX", "centerY", "position", "type"];
ao.compatConfig = {
    MODE: 3
};
const qo = ao
  , Jc = _e({
    name: "Edge",
    compatConfig: {
        MODE: 3
    },
    props: ["id"],
    setup(e) {
        const {id: t, addSelectedEdges: n, connectionMode: o, edgeUpdaterRadius: i, emits: r, nodesSelectionActive: s, noPanClassName: a, getEdgeTypes: l, removeSelectedEdges: u, findEdge: c, findNode: d, isValidConnection: m, multiSelectionActive: p, disableKeyboardA11y: C, elementsSelectable: x, edgesUpdatable: E, edgesFocusable: N, hooks: M} = we()
          , _ = re( () => c(e.id))
          , {emit: S, on: D} = Yu(_.value, r)
          , L = pt(vn)
          , V = Dt()
          , z = ve(!1)
          , q = ve(!1)
          , W = ve("")
          , $ = ve(null)
          , w = ve("source")
          , Y = ve(null)
          , y = ye( () => typeof _.value.selectable > "u" ? x.value : _.value.selectable)
          , T = ye( () => typeof _.value.updatable > "u" ? E.value : _.value.updatable)
          , b = ye( () => typeof _.value.focusable > "u" ? N.value : _.value.focusable);
        ut(Hu, e.id),
        ut(Lu, Y);
        const k = re( () => _.value.class instanceof Function ? _.value.class(_.value) : _.value.class)
          , P = re( () => _.value.style instanceof Function ? _.value.style(_.value) : _.value.style)
          , O = re( () => {
            const f = _.value.type || "default"
              , v = L == null ? void 0 : L[`edge-${f}`];
            if (v)
                return v;
            let g = _.value.template ?? l.value[f];
            if (typeof g == "string" && V) {
                const I = Object.keys(V.appContext.components);
                I && I.includes(f) && (g = ti(f, !1))
            }
            return g && typeof g != "string" ? g : (r.error(new Ee(xe.EDGE_TYPE_MISSING,g)),
            !1)
        }
        )
          , {handlePointerDown: A} = ji({
            nodeId: W,
            handleId: $,
            type: w,
            isValidConnection: m,
            edgeUpdaterType: w,
            onEdgeUpdate: oe,
            onEdgeUpdateEnd: B
        });
        return () => {
            const f = d(_.value.source)
              , v = d(_.value.target)
              , g = "pathOptions"in _.value ? _.value.pathOptions : {};
            if (!f && !v)
                return r.error(new Ee(xe.EDGE_SOURCE_TARGET_MISSING,_.value.id,_.value.source,_.value.target)),
                null;
            if (!f)
                return r.error(new Ee(xe.EDGE_SOURCE_MISSING,_.value.id,_.value.source)),
                null;
            if (!v)
                return r.error(new Ee(xe.EDGE_TARGET_MISSING,_.value.id,_.value.target)),
                null;
            if (!_.value || _.value.hidden || f.hidden || v.hidden)
                return null;
            let I;
            o.value === We.Strict ? I = f.handleBounds.source : I = [...f.handleBounds.source || [], ...f.handleBounds.target || []];
            const F = Ro(I, _.value.sourceHandle);
            let X;
            o.value === We.Strict ? X = v.handleBounds.target : X = [...v.handleBounds.target || [], ...v.handleBounds.source || []];
            const U = Ro(X, _.value.targetHandle)
              , ee = (F == null ? void 0 : F.position) || Z.Bottom
              , le = (U == null ? void 0 : U.position) || Z.Top
              , {x: ue, y: pe} = vt(f, F, ee)
              , {x: Te, y: mt} = vt(v, U, le);
            return _.value.sourceX = ue,
            _.value.sourceY = pe,
            _.value.targetX = Te,
            _.value.targetY = mt,
            ge("g", {
                ref: Y,
                key: e.id,
                "data-id": e.id,
                class: ["vue-flow__edge", `vue-flow__edge-${O.value === !1 ? "default" : _.value.type || "default"}`, a.value, k.value, {
                    updating: z.value,
                    selected: _.value.selected,
                    animated: _.value.animated,
                    inactive: !y.value && !M.value.edgeClick.hasListeners()
                }],
                onClick: K,
                onContextmenu: se,
                onDblclick: ae,
                onMouseenter: te,
                onMousemove: ce,
                onMouseleave: J,
                onKeyDown: b.value ? h : void 0,
                tabIndex: b.value ? 0 : void 0,
                "aria-label": _.value.ariaLabel === null ? void 0 : _.value.ariaLabel || `Edge from ${_.value.source} to ${_.value.target}`,
                "aria-describedby": b.value ? `${Di}-${t}` : void 0,
                role: b.value ? "button" : "img"
            }, [q.value ? null : ge(O.value === !1 ? l.value.default : O.value, {
                id: e.id,
                sourceNode: f,
                targetNode: v,
                source: _.value.source,
                target: _.value.target,
                type: _.value.type,
                updatable: T.value,
                selected: _.value.selected,
                animated: _.value.animated,
                label: _.value.label,
                labelStyle: _.value.labelStyle,
                labelShowBg: _.value.labelShowBg,
                labelBgStyle: _.value.labelBgStyle,
                labelBgPadding: _.value.labelBgPadding,
                labelBgBorderRadius: _.value.labelBgBorderRadius,
                data: _.value.data,
                events: {
                    ..._.value.events,
                    ...D
                },
                style: P.value,
                markerStart: `url('#${$t(_.value.markerStart, t)}')`,
                markerEnd: `url('#${$t(_.value.markerEnd, t)}')`,
                sourcePosition: ee,
                targetPosition: le,
                sourceX: ue,
                sourceY: pe,
                targetX: Te,
                targetY: mt,
                sourceHandleId: _.value.sourceHandle,
                targetHandleId: _.value.targetHandle,
                interactionWidth: _.value.interactionWidth,
                ...g
            }), [T.value === "source" || T.value === !0 ? [ge("g", {
                onMousedown: ne,
                onMouseenter: G,
                onMouseout: j
            }, ge(qo, {
                position: ee,
                centerX: ue,
                centerY: pe,
                radius: i.value,
                type: "source",
                "data-type": "source"
            }))] : null, T.value === "target" || T.value === !0 ? [ge("g", {
                onMousedown: ie,
                onMouseenter: G,
                onMouseout: j
            }, ge(qo, {
                position: le,
                centerX: Te,
                centerY: mt,
                radius: i.value,
                type: "target",
                "data-type": "target"
            }))] : null]])
        }
        ;
        function G() {
            z.value = !0
        }
        function j() {
            z.value = !1
        }
        function oe(f, v) {
            S.update({
                event: f,
                edge: _.value,
                connection: v
            })
        }
        function B(f) {
            S.updateEnd({
                event: f,
                edge: _.value
            }),
            q.value = !1
        }
        function H(f, v) {
            f.button === 0 && (q.value = !0,
            W.value = v ? _.value.target : _.value.source,
            $.value = (v ? _.value.targetHandle : _.value.sourceHandle) ?? "",
            w.value = v ? "target" : "source",
            S.updateStart({
                event: f,
                edge: _.value
            }),
            A(f))
        }
        function K(f) {
            var v;
            const g = {
                event: f,
                edge: _.value
            };
            y.value && (s.value = !1,
            _.value.selected && p.value ? (u([_.value]),
            (v = Y.value) == null || v.blur()) : n([_.value])),
            S.click(g)
        }
        function se(f) {
            S.contextMenu({
                event: f,
                edge: _.value
            })
        }
        function ae(f) {
            S.doubleClick({
                event: f,
                edge: _.value
            })
        }
        function te(f) {
            S.mouseEnter({
                event: f,
                edge: _.value
            })
        }
        function ce(f) {
            S.mouseMove({
                event: f,
                edge: _.value
            })
        }
        function J(f) {
            S.mouseLeave({
                event: f,
                edge: _.value
            })
        }
        function ne(f) {
            H(f, !0)
        }
        function ie(f) {
            H(f, !1)
        }
        function h(f) {
            var v;
            !C.value && Ai.includes(f.key) && y.value && (f.key === "Escape" ? ((v = Y.value) == null || v.blur(),
            u([c(e.id)])) : n([c(e.id)]))
        }
    }
})
  , Qc = Jc
  , jc = _e({
    name: "ConnectionLine",
    compatConfig: {
        MODE: 3
    },
    setup() {
        var e;
        const {id: t, connectionMode: n, connectionStartHandle: o, connectionEndHandle: i, connectionPosition: r, connectionLineType: s, connectionLineStyle: a, connectionLineOptions: l, connectionStatus: u, viewport: c, findNode: d} = we()
          , m = (e = pt(vn)) == null ? void 0 : e["connection-line"]
          , p = re( () => {
            var M;
            return d((M = o.value) == null ? void 0 : M.nodeId)
        }
        )
          , C = re( () => {
            var M;
            return d((M = i.value) == null ? void 0 : M.nodeId) ?? null
        }
        )
          , x = re( () => ({
            x: (r.value.x - c.value.x) / c.value.zoom,
            y: (r.value.y - c.value.y) / c.value.zoom
        }))
          , E = re( () => l.value.markerStart ? `url(#${$t(l.value.markerStart, t)})` : "")
          , N = re( () => l.value.markerEnd ? `url(#${$t(l.value.markerEnd, t)})` : "");
        return () => {
            var M, _, S;
            if (!p.value || !o.value)
                return null;
            const D = o.value.id
              , L = o.value.type
              , V = p.value.handleBounds;
            let z = (V == null ? void 0 : V[L]) || [];
            if (n.value === We.Loose) {
                const P = (V == null ? void 0 : V[L === "source" ? "target" : "source"]) || [];
                z = [...z, ...P]
            }
            if (!z)
                return null;
            const q = (D ? z.find(P => P.id === D) : z[0]) ?? null
              , W = (q == null ? void 0 : q.position) || Z.Top
              , {x: $, y: w} = vt(p.value, q, W);
            let Y = null;
            C.value && (n.value === We.Strict ? Y = ((M = C.value.handleBounds[L === "source" ? "target" : "source"]) == null ? void 0 : M.find(P => {
                var O;
                return P.id === ((O = i.value) == null ? void 0 : O.id)
            }
            )) || null : Y = ((_ = [...C.value.handleBounds.source || [], ...C.value.handleBounds.target || []]) == null ? void 0 : _.find(P => {
                var O;
                return P.id === ((O = i.value) == null ? void 0 : O.id)
            }
            )) || null);
            const y = ((S = i.value) == null ? void 0 : S.position) ?? (W ? Zn[W] : null);
            if (!W || !y)
                return null;
            const T = s.value ?? l.value.type ?? Je.Bezier;
            let b = "";
            const k = {
                sourceX: $,
                sourceY: w,
                sourcePosition: W,
                targetX: x.value.x,
                targetY: x.value.y,
                targetPosition: y
            };
            return T === Je.Bezier ? [b] = rr(k) : T === Je.Step ? [b] = Kn({
                ...k,
                borderRadius: 0
            }) : T === Je.SmoothStep ? [b] = Kn(k) : T === Je.SimpleBezier ? [b] = sr(k) : b = `M${$},${w} ${x.value.x},${x.value.y}`,
            ge("svg", {
                class: "vue-flow__edges vue-flow__connectionline vue-flow__container"
            }, ge("g", {
                class: "vue-flow__connection"
            }, m ? ge(m, {
                sourceX: $,
                sourceY: w,
                sourcePosition: W,
                targetX: x.value.x,
                targetY: x.value.y,
                targetPosition: y,
                sourceNode: p.value,
                sourceHandle: q,
                targetNode: C.value,
                targetHandle: Y,
                markerEnd: N.value,
                markerStart: E.value,
                connectionStatus: u.value
            }) : ge("path", {
                d: b,
                class: [l.value.class, u, "vue-flow__connection-path"],
                style: {
                    ...a.value,
                    ...l.value.style
                },
                "marker-end": N.value,
                "marker-start": E.value
            })))
        }
    }
})
  , ed = jc
  , td = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"]
  , nd = {
    name: "MarkerType",
    compatConfig: {
        MODE: 3
    }
}
  , od = _e({
    ...nd,
    props: {
        id: {},
        type: {},
        color: {
            default: "none"
        },
        width: {
            default: 12.5
        },
        height: {
            default: 12.5
        },
        markerUnits: {
            default: "strokeWidth"
        },
        orient: {
            default: "auto-start-reverse"
        },
        strokeWidth: {
            default: 1
        }
    },
    setup(e) {
        return (t, n) => (fe(),
        me("marker", {
            id: t.id,
            class: "vue-flow__arrowhead",
            viewBox: "-10 -10 20 20",
            refX: "0",
            refY: "0",
            markerWidth: `${t.width}`,
            markerHeight: `${t.height}`,
            markerUnits: t.markerUnits,
            orient: t.orient
        }, [t.type === Q(Gn).ArrowClosed ? (fe(),
        me("polyline", {
            key: 0,
            style: He({
                stroke: t.color,
                fill: t.color,
                strokeWidth: t.strokeWidth
            }),
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            points: "-5,-4 0,0 -5,4 -5,-4"
        }, null, 4)) : $e("", !0), t.type === Q(Gn).Arrow ? (fe(),
        me("polyline", {
            key: 1,
            style: He({
                stroke: t.color,
                strokeWidth: t.strokeWidth
            }),
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none",
            points: "-5,-4 0,0 -5,4"
        }, null, 4)) : $e("", !0)], 8, td))
    }
})
  , id = {
    class: "vue-flow__marker vue-flow__container"
}
  , rd = {
    name: "MarkerDefinitions",
    compatConfig: {
        MODE: 3
    }
}
  , sd = _e({
    ...rd,
    setup(e) {
        const {id: t, edges: n, connectionLineOptions: o, defaultMarkerColor: i} = we()
          , r = re( () => {
            const s = new Set
              , a = []
              , l = u => {
                if (u) {
                    const c = $t(u, t);
                    s.has(c) || (typeof u == "object" ? a.push({
                        ...u,
                        id: c,
                        color: u.color || i.value
                    }) : a.push({
                        id: c,
                        color: i.value,
                        type: u
                    }),
                    s.add(c))
                }
            }
            ;
            for (const u of [o.value.markerEnd, o.value.markerStart])
                l(u);
            for (const u of n.value)
                for (const c of [u.markerStart, u.markerEnd])
                    l(c);
            return a.sort( (u, c) => u.id.localeCompare(c.id))
        }
        );
        return (s, a) => (fe(),
        me("svg", id, [nt("defs", null, [(fe(!0),
        me(De, null, Jn(r.value, l => (fe(),
        dt(od, {
            id: l.id,
            key: l.id,
            type: l.type,
            color: l.color,
            width: l.width,
            height: l.height,
            markerUnits: l.markerUnits,
            "stroke-width": l.strokeWidth,
            orient: l.orient
        }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))])]))
    }
})
  , ad = {
    name: "Edges",
    compatConfig: {
        MODE: 3
    }
}
  , ld = _e({
    ...ad,
    setup(e) {
        const {findNode: t, getEdges: n, elevateEdgesOnSelect: o} = we();
        return (i, r) => (fe(),
        me(De, null, [Be(sd), (fe(!0),
        me(De, null, Jn(Q(n), s => (fe(),
        me("svg", {
            key: s.id,
            class: "vue-flow__edges vue-flow__container",
            style: He({
                zIndex: Q(Iu)(s, Q(t), Q(o))
            })
        }, [Be(Q(Qc), {
            id: s.id
        }, null, 8, ["id"])], 4))), 128)), Be(Q(ed))], 64))
    }
})
  , ud = _e({
    name: "Node",
    compatConfig: {
        MODE: 3
    },
    props: ["id", "resizeObserver"],
    setup(e) {
        const {id: t, noPanClassName: n, selectNodesOnDrag: o, nodesSelectionActive: i, multiSelectionActive: r, emits: s, removeSelectedNodes: a, addSelectedNodes: l, updateNodeDimensions: u, onUpdateNodeInternals: c, getNodeTypes: d, nodeExtent: m, elevateNodesOnSelect: p, disableKeyboardA11y: C, ariaLiveMessage: x, snapToGrid: E, snapGrid: N, nodeDragThreshold: M, nodesDraggable: _, elementsSelectable: S, nodesConnectable: D, nodesFocusable: L, hooks: V} = we()
          , z = ve(null);
        ut(Ji, z),
        ut(qi, e.id);
        const q = pt(vn)
          , W = Dt()
          , $ = tr()
          , {node: w, parentNode: Y} = er(e.id)
          , {emit: y, on: T} = Zu(w, s)
          , b = ye( () => typeof w.draggable > "u" ? _.value : w.draggable)
          , k = ye( () => typeof w.selectable > "u" ? S.value : w.selectable)
          , P = ye( () => typeof w.connectable > "u" ? D.value : w.connectable)
          , O = ye( () => typeof w.focusable > "u" ? L.value : w.focusable)
          , A = ye( () => k.value || b.value || V.value.nodeClick.hasListeners() || V.value.nodeDoubleClick.hasListeners() || V.value.nodeMouseEnter.hasListeners() || V.value.nodeMouseMove.hasListeners() || V.value.nodeMouseLeave.hasListeners())
          , G = ye( () => !!w.dimensions.width && !!w.dimensions.height)
          , j = re( () => {
            const v = w.type || "default"
              , g = q == null ? void 0 : q[`node-${v}`];
            if (g)
                return g;
            let I = w.template || d.value[v];
            if (typeof I == "string" && W) {
                const F = Object.keys(W.appContext.components);
                F && F.includes(v) && (I = ti(v, !1))
            }
            return I && typeof I != "string" ? I : (s.error(new Ee(xe.NODE_TYPE_MISSING,I)),
            !1)
        }
        )
          , oe = Qi({
            id: e.id,
            el: z,
            disabled: () => !b.value,
            selectable: k,
            dragHandle: () => w.dragHandle,
            onStart(v) {
                y.dragStart(v)
            },
            onDrag(v) {
                y.drag(v)
            },
            onStop(v) {
                y.dragStop(v)
            },
            onClick(v) {
                h(v)
            }
        })
          , B = re( () => w.class instanceof Function ? w.class(w) : w.class)
          , H = re( () => {
            const v = (w.style instanceof Function ? w.style(w) : w.style) || {}
              , g = w.width instanceof Function ? w.width(w) : w.width
              , I = w.height instanceof Function ? w.height(w) : w.height;
            return !v.width && g && (v.width = typeof g == "string" ? g : `${g}px`),
            !v.height && I && (v.height = typeof I == "string" ? I : `${I}px`),
            v
        }
        )
          , K = ye( () => Number(w.zIndex ?? H.value.zIndex ?? 0));
        return c(v => {
            (v.includes(e.id) || !v.length) && ae()
        }
        ),
        qe( () => {
            he( () => w.hidden, (v=!1, g, I) => {
                !v && z.value && (e.resizeObserver.observe(z.value),
                I( () => {
                    z.value && e.resizeObserver.unobserve(z.value)
                }
                ))
            }
            , {
                immediate: !0,
                flush: "post"
            })
        }
        ),
        he([ () => w.type, () => w.sourcePosition, () => w.targetPosition], () => {
            Ve( () => {
                u([{
                    id: e.id,
                    nodeElement: z.value,
                    forceUpdate: !0
                }])
            }
            )
        }
        ),
        he([ () => w.position.x, () => w.position.y, () => {
            var v;
            return (v = Y.value) == null ? void 0 : v.computedPosition.x
        }
        , () => {
            var v;
            return (v = Y.value) == null ? void 0 : v.computedPosition.y
        }
        , () => {
            var v;
            return (v = Y.value) == null ? void 0 : v.computedPosition.z
        }
        , K, () => w.selected, () => w.dimensions.height, () => w.dimensions.width, () => {
            var v;
            return (v = Y.value) == null ? void 0 : v.dimensions.height
        }
        , () => {
            var v;
            return (v = Y.value) == null ? void 0 : v.dimensions.width
        }
        ], ([v,g,I,F,X,U]) => {
            const ee = {
                x: v,
                y: g,
                z: U + (p.value && w.selected ? 1e3 : 0)
            };
            typeof I < "u" && typeof F < "u" ? w.computedPosition = xu({
                x: I,
                y: F,
                z: X
            }, ee) : w.computedPosition = ee
        }
        , {
            flush: "post",
            immediate: !0
        }),
        he([ () => w.extent, m], ([v,g], [I,F]) => {
            (v !== I || g !== F) && se()
        }
        ),
        w.extent === "parent" || typeof w.extent == "object" && "range"in w.extent && w.extent.range === "parent" ? On( () => G).toBe(!0).then(se) : se(),
        () => w.hidden ? null : ge("div", {
            ref: z,
            "data-id": w.id,
            class: ["vue-flow__node", `vue-flow__node-${j.value === !1 ? "default" : w.type || "default"}`, {
                [n.value]: b.value,
                dragging: oe == null ? void 0 : oe.value,
                draggable: b.value,
                selected: w.selected,
                selectable: k.value,
                parent: w.isParent
            }, B.value],
            style: {
                visibility: G.value ? "visible" : "hidden",
                zIndex: w.computedPosition.z ?? K.value,
                transform: `translate(${w.computedPosition.x}px,${w.computedPosition.y}px)`,
                pointerEvents: A.value ? "all" : "none",
                ...H.value
            },
            tabIndex: O.value ? 0 : void 0,
            role: O.value ? "button" : void 0,
            "aria-describedby": C.value ? void 0 : `${$i}-${t}`,
            "aria-label": w.ariaLabel,
            onMouseenter: te,
            onMousemove: ce,
            onMouseleave: J,
            onContextmenu: ne,
            onClick: h,
            onDblclick: ie,
            onKeydown: f
        }, [ge(j.value === !1 ? d.value.default : j.value, {
            id: w.id,
            type: w.type,
            data: w.data,
            events: {
                ...w.events,
                ...T
            },
            selected: w.selected,
            resizing: w.resizing,
            dragging: oe.value,
            connectable: P.value,
            position: w.computedPosition,
            dimensions: w.dimensions,
            isValidTargetPos: w.isValidTargetPos,
            isValidSourcePos: w.isValidSourcePos,
            parent: w.parentNode,
            parentNodeId: w.parentNode,
            zIndex: w.computedPosition.z ?? K.value,
            targetPosition: w.targetPosition,
            sourcePosition: w.sourcePosition,
            label: w.label,
            dragHandle: w.dragHandle,
            onUpdateNodeInternals: ae
        })]);
        function se() {
            const v = w.computedPosition
              , {computedPosition: g, position: I} = ro(w, E.value ? hn(v, N.value) : v, s.error, m.value, Y.value);
            (w.computedPosition.x !== g.x || w.computedPosition.y !== g.y) && (w.computedPosition = {
                ...w.computedPosition,
                ...g
            }),
            (w.position.x !== I.x || w.position.y !== I.y) && (w.position = I)
        }
        function ae() {
            z.value && u([{
                id: e.id,
                nodeElement: z.value,
                forceUpdate: !0
            }])
        }
        function te(v) {
            oe != null && oe.value || y.mouseEnter({
                event: v,
                node: w
            })
        }
        function ce(v) {
            oe != null && oe.value || y.mouseMove({
                event: v,
                node: w
            })
        }
        function J(v) {
            oe != null && oe.value || y.mouseLeave({
                event: v,
                node: w
            })
        }
        function ne(v) {
            return y.contextMenu({
                event: v,
                node: w
            })
        }
        function ie(v) {
            return y.doubleClick({
                event: v,
                node: w
            })
        }
        function h(v) {
            k.value && (!o.value || !b.value || M.value > 0) && Wn(w, r.value, l, a, i, !1, z.value),
            y.click({
                event: v,
                node: w
            })
        }
        function f(v) {
            if (!(Xn(v) || C.value))
                if (Ai.includes(v.key) && k.value) {
                    const g = v.key === "Escape";
                    Wn(w, r.value, l, a, i, g, z.value)
                } else
                    b.value && w.selected && lt[v.key] && (v.preventDefault(),
                    x.value = `Moved selected node ${v.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~w.position.x}, y: ${~~w.position.y}`,
                    $({
                        x: lt[v.key].x,
                        y: lt[v.key].y
                    }, v.shiftKey))
        }
    }
})
  , cd = ud;
function dd(e={
    includeHiddenNodes: !1
}) {
    const {nodes: t} = we();
    return re( () => {
        if (t.value.length === 0)
            return !1;
        for (const n of t.value)
            if ((e.includeHiddenNodes || !n.hidden) && ((n == null ? void 0 : n.handleBounds) === void 0 || n.dimensions.width === 0 || n.dimensions.height === 0))
                return !1;
        return !0
    }
    )
}
const fd = {
    class: "vue-flow__nodes vue-flow__container"
}
  , hd = {
    name: "Nodes",
    compatConfig: {
        MODE: 3
    }
}
  , gd = _e({
    ...hd,
    setup(e) {
        const {getNodes: t, updateNodeDimensions: n, emits: o} = we()
          , i = dd()
          , r = ve();
        return he(i, s => {
            s && Ve( () => {
                o.nodesInitialized(t.value)
            }
            )
        }
        , {
            immediate: !0
        }),
        qe( () => {
            r.value = new ResizeObserver(s => {
                const a = s.map(l => ({
                    id: l.target.getAttribute("data-id"),
                    nodeElement: l.target,
                    forceUpdate: !0
                }));
                Ve( () => n(a))
            }
            )
        }
        ),
        ei( () => {
            var s;
            return (s = r.value) == null ? void 0 : s.disconnect()
        }
        ),
        (s, a) => (fe(),
        me("div", fd, [r.value ? (fe(!0),
        me(De, {
            key: 0
        }, Jn(Q(t), (l, u, c, d) => {
            const m = [l.id];
            if (d && d.key === l.id && yr(d, m))
                return d;
            const p = (fe(),
            dt(Q(cd), {
                id: l.id,
                key: l.id,
                "resize-observer": r.value
            }, null, 8, ["id", "resize-observer"]));
            return p.memo = m,
            p
        }
        , a, 0), 128)) : $e("", !0)]))
    }
});
function vd() {
    const {emits: e} = we();
    qe( () => {
        if (Ki()) {
            const t = document.querySelector(".vue-flow__pane");
            t && window.getComputedStyle(t).zIndex !== "1" && e.error(new Ee(xe.MISSING_STYLES))
        }
    }
    )
}
const pd = nt("div", {
    class: "vue-flow__edge-labels"
}, null, -1)
  , md = {
    name: "VueFlow",
    compatConfig: {
        MODE: 3
    }
}
  , bd = _e({
    ...md,
    props: {
        id: {},
        modelValue: {},
        nodes: {},
        edges: {},
        edgeTypes: {},
        nodeTypes: {},
        connectionMode: {},
        connectionLineType: {},
        connectionLineStyle: {
            default: void 0
        },
        connectionLineOptions: {
            default: void 0
        },
        connectionRadius: {},
        isValidConnection: {
            type: [Function, null],
            default: void 0
        },
        deleteKeyCode: {
            default: void 0
        },
        selectionKeyCode: {
            type: [Boolean, null],
            default: void 0
        },
        multiSelectionKeyCode: {
            default: void 0
        },
        zoomActivationKeyCode: {
            default: void 0
        },
        panActivationKeyCode: {
            default: void 0
        },
        snapToGrid: {
            type: Boolean,
            default: void 0
        },
        snapGrid: {},
        onlyRenderVisibleElements: {
            type: Boolean,
            default: void 0
        },
        edgesUpdatable: {
            type: [Boolean, String],
            default: void 0
        },
        nodesDraggable: {
            type: Boolean,
            default: void 0
        },
        nodesConnectable: {
            type: Boolean,
            default: void 0
        },
        nodeDragThreshold: {},
        elementsSelectable: {
            type: Boolean,
            default: void 0
        },
        selectNodesOnDrag: {
            type: Boolean,
            default: void 0
        },
        panOnDrag: {
            type: [Boolean, Array],
            default: void 0
        },
        minZoom: {},
        maxZoom: {},
        defaultViewport: {},
        translateExtent: {},
        nodeExtent: {},
        defaultMarkerColor: {},
        zoomOnScroll: {
            type: Boolean,
            default: void 0
        },
        zoomOnPinch: {
            type: Boolean,
            default: void 0
        },
        panOnScroll: {
            type: Boolean,
            default: void 0
        },
        panOnScrollSpeed: {},
        panOnScrollMode: {},
        paneClickDistance: {},
        zoomOnDoubleClick: {
            type: Boolean,
            default: void 0
        },
        preventScrolling: {
            type: Boolean,
            default: void 0
        },
        selectionMode: {},
        edgeUpdaterRadius: {},
        fitViewOnInit: {
            type: Boolean,
            default: void 0
        },
        connectOnClick: {
            type: Boolean,
            default: void 0
        },
        applyDefault: {
            type: Boolean,
            default: void 0
        },
        autoConnect: {
            type: [Boolean, Function],
            default: void 0
        },
        noDragClassName: {},
        noWheelClassName: {},
        noPanClassName: {},
        defaultEdgeOptions: {},
        elevateEdgesOnSelect: {
            type: Boolean,
            default: void 0
        },
        elevateNodesOnSelect: {
            type: Boolean,
            default: void 0
        },
        disableKeyboardA11y: {
            type: Boolean,
            default: void 0
        },
        edgesFocusable: {
            type: Boolean,
            default: void 0
        },
        nodesFocusable: {
            type: Boolean,
            default: void 0
        },
        autoPanOnConnect: {
            type: Boolean,
            default: void 0
        },
        autoPanOnNodeDrag: {
            type: Boolean,
            default: void 0
        },
        autoPanSpeed: {}
    },
    emits: ["nodesChange", "edgesChange", "nodesInitialized", "paneReady", "init", "updateNodeInternals", "error", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeUpdate", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdateEnd", "nodeContextMenu", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeDoubleClick", "nodeClick", "nodeDragStart", "nodeDrag", "nodeDragStop", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "update:modelValue", "update:nodes", "update:edges"],
    setup(e, {expose: t, emit: n}) {
        const o = e
          , i = dr()
          , r = wn(o, "modelValue", n)
          , s = wn(o, "nodes", n)
          , a = wn(o, "edges", n)
          , l = we(o)
          , u = qu({
            modelValue: r,
            nodes: s,
            edges: a
        }, o, l);
        return Qu(n, l.hooks),
        Wc(),
        vd(),
        ut(vn, i),
        fr( () => {
            u()
        }
        ),
        t(l),
        (c, d) => (fe(),
        me("div", {
            ref: Q(l).vueFlowRef,
            class: "vue-flow"
        }, [Be(Fc, null, {
            default: $n( () => [Be(ld), pd, Be(gd), Ze(c.$slots, "zoom-pane")]),
            _: 3
        }), Ze(c.$slots, "default"), Be(Zc)], 512))
    }
})
  , yd = {
    name: "Panel",
    compatConfig: {
        MODE: 3
    }
}
  , xd = _e({
    ...yd,
    props: {
        position: {}
    },
    setup(e) {
        const t = e
          , {userSelectionActive: n} = we()
          , o = re( () => `${t.position}`.split("-"));
        return (i, r) => (fe(),
        me("div", {
            class: ct(["vue-flow__panel", o.value]),
            style: He({
                pointerEvents: Q(n) ? "none" : "all"
            })
        }, [Ze(i.$slots, "default")], 6))
    }
});
export {Gn as M, qi as N, Z as P, sn as _, xd as a, bd as b, wd as c, Yi as d, fu as e, er as f, Li as g, Kn as h, _n as i, we as u};
