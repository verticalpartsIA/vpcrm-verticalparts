function Ue(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: ft} = Object.prototype
  , {getPrototypeOf: ye} = Object
  , Z = (e => t => {
    const n = ft.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , j = e => (e = e.toLowerCase(),
t => Z(t) === e)
  , Y = e => t => typeof t === e
  , {isArray: H} = Array
  , z = Y("undefined");
function dt(e) {
    return e !== null && !z(e) && e.constructor !== null && !z(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const ke = j("ArrayBuffer");
function pt(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ke(e.buffer),
    t
}
const ht = Y("string")
  , L = Y("function")
  , qe = Y("number")
  , ee = e => e !== null && typeof e == "object"
  , mt = e => e === !0 || e === !1
  , K = e => {
    if (Z(e) !== "object")
        return !1;
    const t = ye(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , yt = j("Date")
  , bt = j("File")
  , gt = j("Blob")
  , wt = j("FileList")
  , Et = e => ee(e) && L(e.pipe)
  , Tt = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || L(e.append) && ((t = Z(e)) === "formdata" || t === "object" && L(e.toString) && e.toString() === "[object FormData]"))
}
  , St = j("URLSearchParams")
  , [Rt,Ot,At,Ct] = ["ReadableStream", "Request", "Response", "Headers"].map(j)
  , xt = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function J(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, o;
    if (typeof e != "object" && (e = [e]),
    H(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , i = s.length;
        let c;
        for (r = 0; r < i; r++)
            c = s[r],
            t.call(null, e[c], c, e)
    }
}
function He(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0; )
        if (o = n[r],
        t === o.toLowerCase())
            return o;
    return null
}
const U = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Me = e => !z(e) && e !== U;
function ue() {
    const {caseless: e} = Me(this) && this || {}
      , t = {}
      , n = (r, o) => {
        const s = e && He(t, o) || o;
        K(t[s]) && K(r) ? t[s] = ue(t[s], r) : K(r) ? t[s] = ue({}, r) : H(r) ? t[s] = r.slice() : t[s] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && J(arguments[r], n);
    return t
}
const Nt = (e, t, n, {allOwnKeys: r}={}) => (J(t, (o, s) => {
    n && L(o) ? e[s] = Ue(o, n) : e[s] = o
}
, {
    allOwnKeys: r
}),
e)
  , Pt = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Dt = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , _t = (e, t, n, r) => {
    let o, s, i;
    const c = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        s = o.length; s-- > 0; )
            i = o[s],
            (!r || r(i, e, t)) && !c[i] && (t[i] = e[i],
            c[i] = !0);
        e = n !== !1 && ye(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , vt = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Lt = e => {
    if (!e)
        return null;
    if (H(e))
        return e;
    let t = e.length;
    if (!qe(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , jt = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && ye(Uint8Array))
  , Ft = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const s = o.value;
        t.call(e, s[0], s[1])
    }
}
  , It = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , Bt = j("HTMLFormElement")
  , Ut = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
    return r.toUpperCase() + o
})
  , Ee = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , kt = j("RegExp")
  , $e = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    J(n, (o, s) => {
        let i;
        (i = t(o, s, e)) !== !1 && (r[s] = i || o)
    }
    ),
    Object.defineProperties(e, r)
}
  , qt = e => {
    $e(e, (t, n) => {
        if (L(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (L(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Ht = (e, t) => {
    const n = {}
      , r = o => {
        o.forEach(s => {
            n[s] = !0
        }
        )
    }
    ;
    return H(e) ? r(e) : r(String(e).split(t)),
    n
}
  , Mt = () => {}
  , $t = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , oe = "abcdefghijklmnopqrstuvwxyz"
  , Te = "0123456789"
  , ze = {
    DIGIT: Te,
    ALPHA: oe,
    ALPHA_DIGIT: oe + oe.toUpperCase() + Te
}
  , zt = (e=16, t=ze.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function Jt(e) {
    return !!(e && L(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Vt = e => {
    const t = new Array(10)
      , n = (r, o) => {
        if (ee(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[o] = r;
                const s = H(r) ? [] : {};
                return J(r, (i, c) => {
                    const l = n(i, o + 1);
                    !z(l) && (s[c] = l)
                }
                ),
                t[o] = void 0,
                s
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , Wt = j("AsyncFunction")
  , Kt = e => e && (ee(e) || L(e)) && L(e.then) && L(e.catch)
  , Je = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (U.addEventListener("message", ({source: o, data: s}) => {
    o === U && s === n && r.length && r.shift()()
}
, !1),
o => {
    r.push(o),
    U.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", L(U.postMessage))
  , Xt = typeof queueMicrotask < "u" ? queueMicrotask.bind(U) : typeof process < "u" && process.nextTick || Je
  , a = {
    isArray: H,
    isArrayBuffer: ke,
    isBuffer: dt,
    isFormData: Tt,
    isArrayBufferView: pt,
    isString: ht,
    isNumber: qe,
    isBoolean: mt,
    isObject: ee,
    isPlainObject: K,
    isReadableStream: Rt,
    isRequest: Ot,
    isResponse: At,
    isHeaders: Ct,
    isUndefined: z,
    isDate: yt,
    isFile: bt,
    isBlob: gt,
    isRegExp: kt,
    isFunction: L,
    isStream: Et,
    isURLSearchParams: St,
    isTypedArray: jt,
    isFileList: wt,
    forEach: J,
    merge: ue,
    extend: Nt,
    trim: xt,
    stripBOM: Pt,
    inherits: Dt,
    toFlatObject: _t,
    kindOf: Z,
    kindOfTest: j,
    endsWith: vt,
    toArray: Lt,
    forEachEntry: Ft,
    matchAll: It,
    isHTMLForm: Bt,
    hasOwnProperty: Ee,
    hasOwnProp: Ee,
    reduceDescriptors: $e,
    freezeMethods: qt,
    toObjectSet: Ht,
    toCamelCase: Ut,
    noop: Mt,
    toFiniteNumber: $t,
    findKey: He,
    global: U,
    isContextDefined: Me,
    ALPHABET: ze,
    generateString: zt,
    isSpecCompliantForm: Jt,
    toJSONObject: Vt,
    isAsyncFn: Wt,
    isThenable: Kt,
    setImmediate: Je,
    asap: Xt
};
function w(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o,
    this.status = o.status ? o.status : null)
}
a.inherits(w, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: a.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Ve = w.prototype
  , We = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    We[e] = {
        value: e
    }
}
);
Object.defineProperties(w, We);
Object.defineProperty(Ve, "isAxiosError", {
    value: !0
});
w.from = (e, t, n, r, o, s) => {
    const i = Object.create(Ve);
    return a.toFlatObject(e, i, function(l) {
        return l !== Error.prototype
    }, c => c !== "isAxiosError"),
    w.call(i, e.message, t, n, r, o),
    i.cause = e,
    i.name = e.name,
    s && Object.assign(i, s),
    i
}
;
const Gt = null;
function le(e) {
    return a.isPlainObject(e) || a.isArray(e)
}
function Ke(e) {
    return a.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Se(e, t, n) {
    return e ? e.concat(t).map(function(o, s) {
        return o = Ke(o),
        !n && s ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function Qt(e) {
    return a.isArray(e) && !e.some(le)
}
const Zt = a.toFlatObject(a, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function te(e, t, n) {
    if (!a.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = a.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(g, b) {
        return !a.isUndefined(b[g])
    });
    const r = n.metaTokens
      , o = n.visitor || d
      , s = n.dots
      , i = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
    if (!a.isFunction(o))
        throw new TypeError("visitor must be a function");
    function u(y) {
        if (y === null)
            return "";
        if (a.isDate(y))
            return y.toISOString();
        if (!l && a.isBlob(y))
            throw new w("Blob is not supported. Use a Buffer instead.");
        return a.isArrayBuffer(y) || a.isTypedArray(y) ? l && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }
    function d(y, g, b) {
        let O = y;
        if (y && !b && typeof y == "object") {
            if (a.endsWith(g, "{}"))
                g = r ? g : g.slice(0, -2),
                y = JSON.stringify(y);
            else if (a.isArray(y) && Qt(y) || (a.isFileList(y) || a.endsWith(g, "[]")) && (O = a.toArray(y)))
                return g = Ke(g),
                O.forEach(function(C, v) {
                    !(a.isUndefined(C) || C === null) && t.append(i === !0 ? Se([g], v, s) : i === null ? g : g + "[]", u(C))
                }),
                !1
        }
        return le(y) ? !0 : (t.append(Se(b, g, s), u(y)),
        !1)
    }
    const m = []
      , R = Object.assign(Zt, {
        defaultVisitor: d,
        convertValue: u,
        isVisitable: le
    });
    function A(y, g) {
        if (!a.isUndefined(y)) {
            if (m.indexOf(y) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            m.push(y),
            a.forEach(y, function(O, x) {
                (!(a.isUndefined(O) || O === null) && o.call(t, O, a.isString(x) ? x.trim() : x, g, R)) === !0 && A(O, g ? g.concat(x) : [x])
            }),
            m.pop()
        }
    }
    if (!a.isObject(e))
        throw new TypeError("data must be an object");
    return A(e),
    t
}
function Re(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function be(e, t) {
    this._pairs = [],
    e && te(e, this, t)
}
const Xe = be.prototype;
Xe.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Xe.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Re)
    }
    : Re;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function Yt(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Ge(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Yt
      , o = n && n.serialize;
    let s;
    if (o ? s = o(t, n) : s = a.isURLSearchParams(t) ? t.toString() : new be(t,n).toString(r),
    s) {
        const i = e.indexOf("#");
        i !== -1 && (e = e.slice(0, i)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class Oe {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        a.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const Qe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , en = typeof URLSearchParams < "u" ? URLSearchParams : be
  , tn = typeof FormData < "u" ? FormData : null
  , nn = typeof Blob < "u" ? Blob : null
  , rn = {
    isBrowser: !0,
    classes: {
        URLSearchParams: en,
        FormData: tn,
        Blob: nn
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , ge = typeof window < "u" && typeof document < "u"
  , fe = typeof navigator == "object" && navigator || void 0
  , on = ge && (!fe || ["ReactNative", "NativeScript", "NS"].indexOf(fe.product) < 0)
  , sn = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , an = ge && window.location.href || "http://localhost"
  , cn = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: ge,
    hasStandardBrowserEnv: on,
    hasStandardBrowserWebWorkerEnv: sn,
    navigator: fe,
    origin: an
}, Symbol.toStringTag, {
    value: "Module"
}))
  , D = {
    ...cn,
    ...rn
};
function un(e, t) {
    return te(e, new D.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, s) {
            return D.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function ln(e) {
    return a.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function fn(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const o = n.length;
    let s;
    for (r = 0; r < o; r++)
        s = n[r],
        t[s] = e[s];
    return t
}
function Ze(e) {
    function t(n, r, o, s) {
        let i = n[s++];
        if (i === "__proto__")
            return !0;
        const c = Number.isFinite(+i)
          , l = s >= n.length;
        return i = !i && a.isArray(o) ? o.length : i,
        l ? (a.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r,
        !c) : ((!o[i] || !a.isObject(o[i])) && (o[i] = []),
        t(n, r, o[i], s) && a.isArray(o[i]) && (o[i] = fn(o[i])),
        !c)
    }
    if (a.isFormData(e) && a.isFunction(e.entries)) {
        const n = {};
        return a.forEachEntry(e, (r, o) => {
            t(ln(r), o, n, 0)
        }
        ),
        n
    }
    return null
}
function dn(e, t, n) {
    if (a.isString(e))
        try {
            return (t || JSON.parse)(e),
            a.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (n || JSON.stringify)(e)
}
const V = {
    transitional: Qe,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , s = a.isObject(t);
        if (s && a.isHTMLForm(t) && (t = new FormData(t)),
        a.isFormData(t))
            return o ? JSON.stringify(Ze(t)) : t;
        if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
            return t;
        if (a.isArrayBufferView(t))
            return t.buffer;
        if (a.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let c;
        if (s) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return un(t, this.formSerializer).toString();
            if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return te(c ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return s || o ? (n.setContentType("application/json", !1),
        dn(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || V.transitional
          , r = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (a.isResponse(t) || a.isReadableStream(t))
            return t;
        if (t && a.isString(t) && (r && !this.responseType || o)) {
            const i = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (c) {
                if (i)
                    throw c.name === "SyntaxError" ? w.from(c, w.ERR_BAD_RESPONSE, this, null, this.response) : c
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: D.classes.FormData,
        Blob: D.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    V.headers[e] = {}
}
);
const pn = a.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , hn = e => {
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function(i) {
        o = i.indexOf(":"),
        n = i.substring(0, o).trim().toLowerCase(),
        r = i.substring(o + 1).trim(),
        !(!n || t[n] && pn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Ae = Symbol("internals");
function $(e) {
    return e && String(e).trim().toLowerCase()
}
function X(e) {
    return e === !1 || e == null ? e : a.isArray(e) ? e.map(X) : String(e)
}
function mn(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const yn = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function se(e, t, n, r, o) {
    if (a.isFunction(r))
        return r.call(this, t, n);
    if (o && (t = n),
    !!a.isString(t)) {
        if (a.isString(r))
            return t.indexOf(r) !== -1;
        if (a.isRegExp(r))
            return r.test(t)
    }
}
function bn(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function gn(e, t) {
    const n = a.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, s, i) {
                return this[r].call(this, t, o, s, i)
            },
            configurable: !0
        })
    }
    )
}
let _ = class {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;
        function s(c, l, u) {
            const d = $(l);
            if (!d)
                throw new Error("header name must be a non-empty string");
            const m = a.findKey(o, d);
            (!m || o[m] === void 0 || u === !0 || u === void 0 && o[m] !== !1) && (o[m || l] = X(c))
        }
        const i = (c, l) => a.forEach(c, (u, d) => s(u, d, l));
        if (a.isPlainObject(t) || t instanceof this.constructor)
            i(t, n);
        else if (a.isString(t) && (t = t.trim()) && !yn(t))
            i(hn(t), n);
        else if (a.isHeaders(t))
            for (const [c,l] of t.entries())
                s(l, c, r);
        else
            t != null && s(n, t, r);
        return this
    }
    get(t, n) {
        if (t = $(t),
        t) {
            const r = a.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n)
                    return o;
                if (n === !0)
                    return mn(o);
                if (a.isFunction(n))
                    return n.call(this, o, r);
                if (a.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = $(t),
        t) {
            const r = a.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || se(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function s(i) {
            if (i = $(i),
            i) {
                const c = a.findKey(r, i);
                c && (!n || se(r, r[c], c, n)) && (delete r[c],
                o = !0)
            }
        }
        return a.isArray(t) ? t.forEach(s) : s(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , o = !1;
        for (; r--; ) {
            const s = n[r];
            (!t || se(this, this[s], s, t, !0)) && (delete this[s],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , r = {};
        return a.forEach(this, (o, s) => {
            const i = a.findKey(r, s);
            if (i) {
                n[i] = X(o),
                delete n[s];
                return
            }
            const c = t ? bn(s) : String(s).trim();
            c !== s && delete n[s],
            n[c] = X(o),
            r[c] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return a.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && a.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)),
        r
    }
    static accessor(t) {
        const r = (this[Ae] = this[Ae] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function s(i) {
            const c = $(i);
            r[c] || (gn(o, i),
            r[c] = !0)
        }
        return a.isArray(t) ? t.forEach(s) : s(t),
        this
    }
}
;
_.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(_.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
a.freezeMethods(_);
function ie(e, t) {
    const n = this || V
      , r = t || n
      , o = _.from(r.headers);
    let s = r.data;
    return a.forEach(e, function(c) {
        s = c.call(n, s, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    s
}
function Ye(e) {
    return !!(e && e.__CANCEL__)
}
function M(e, t, n) {
    w.call(this, e ?? "canceled", w.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
a.inherits(M, w, {
    __CANCEL__: !0
});
function et(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new w("Request failed with status code " + n.status,[w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function wn(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function En(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let o = 0, s = 0, i;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const u = Date.now()
          , d = r[s];
        i || (i = u),
        n[o] = l,
        r[o] = u;
        let m = s
          , R = 0;
        for (; m !== o; )
            R += n[m++],
            m = m % e;
        if (o = (o + 1) % e,
        o === s && (s = (s + 1) % e),
        u - i < t)
            return;
        const A = d && u - d;
        return A ? Math.round(R * 1e3 / A) : void 0
    }
}
function Tn(e, t) {
    let n = 0, r = 1e3 / t, o, s;
    const i = (u, d=Date.now()) => {
        n = d,
        o = null,
        s && (clearTimeout(s),
        s = null),
        e.apply(null, u)
    }
    ;
    return [ (...u) => {
        const d = Date.now()
          , m = d - n;
        m >= r ? i(u, d) : (o = u,
        s || (s = setTimeout( () => {
            s = null,
            i(o)
        }
        , r - m)))
    }
    , () => o && i(o)]
}
const G = (e, t, n=3) => {
    let r = 0;
    const o = En(50, 250);
    return Tn(s => {
        const i = s.loaded
          , c = s.lengthComputable ? s.total : void 0
          , l = i - r
          , u = o(l)
          , d = i <= c;
        r = i;
        const m = {
            loaded: i,
            total: c,
            progress: c ? i / c : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && c && d ? (c - i) / u : void 0,
            event: s,
            lengthComputable: c != null,
            [t ? "download" : "upload"]: !0
        };
        e(m)
    }
    , n)
}
  , Ce = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , xe = e => (...t) => a.asap( () => e(...t))
  , Sn = D.hasStandardBrowserEnv ? (function() {
    const t = D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function o(s) {
        let i = s;
        return t && (n.setAttribute("href", i),
        i = n.href),
        n.setAttribute("href", i),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
    function(i) {
        const c = a.isString(i) ? o(i) : i;
        return c.protocol === r.protocol && c.host === r.host
    }
}
)() : (function() {
    return function() {
        return !0
    }
}
)()
  , Rn = D.hasStandardBrowserEnv ? {
    write(e, t, n, r, o, s) {
        const i = [e + "=" + encodeURIComponent(t)];
        a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
        a.isString(r) && i.push("path=" + r),
        a.isString(o) && i.push("domain=" + o),
        s === !0 && i.push("secure"),
        document.cookie = i.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function On(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function An(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function tt(e, t) {
    return e && !On(t) ? An(e, t) : t
}
const Ne = e => e instanceof _ ? {
    ...e
} : e;
function q(e, t) {
    t = t || {};
    const n = {};
    function r(u, d, m) {
        return a.isPlainObject(u) && a.isPlainObject(d) ? a.merge.call({
            caseless: m
        }, u, d) : a.isPlainObject(d) ? a.merge({}, d) : a.isArray(d) ? d.slice() : d
    }
    function o(u, d, m) {
        if (a.isUndefined(d)) {
            if (!a.isUndefined(u))
                return r(void 0, u, m)
        } else
            return r(u, d, m)
    }
    function s(u, d) {
        if (!a.isUndefined(d))
            return r(void 0, d)
    }
    function i(u, d) {
        if (a.isUndefined(d)) {
            if (!a.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, d)
    }
    function c(u, d, m) {
        if (m in t)
            return r(u, d);
        if (m in e)
            return r(void 0, u)
    }
    const l = {
        url: s,
        method: s,
        data: s,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: c,
        headers: (u, d) => o(Ne(u), Ne(d), !0)
    };
    return a.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
        const m = l[d] || o
          , R = m(e[d], t[d], d);
        a.isUndefined(R) && m !== c || (n[d] = R)
    }),
    n
}
const nt = e => {
    const t = q({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: s, headers: i, auth: c} = t;
    t.headers = i = _.from(i),
    t.url = Ge(tt(t.baseURL, t.url), e.params, e.paramsSerializer),
    c && i.set("Authorization", "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : "")));
    let l;
    if (a.isFormData(n)) {
        if (D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv)
            i.setContentType(void 0);
        else if ((l = i.getContentType()) !== !1) {
            const [u,...d] = l ? l.split(";").map(m => m.trim()).filter(Boolean) : [];
            i.setContentType([u || "multipart/form-data", ...d].join("; "))
        }
    }
    if (D.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)),
    r || r !== !1 && Sn(t.url))) {
        const u = o && s && Rn.read(s);
        u && i.set(o, u)
    }
    return t
}
  , Cn = typeof XMLHttpRequest < "u"
  , xn = Cn && function(e) {
    return new Promise(function(n, r) {
        const o = nt(e);
        let s = o.data;
        const i = _.from(o.headers).normalize();
        let {responseType: c, onUploadProgress: l, onDownloadProgress: u} = o, d, m, R, A, y;
        function g() {
            A && A(),
            y && y(),
            o.cancelToken && o.cancelToken.unsubscribe(d),
            o.signal && o.signal.removeEventListener("abort", d)
        }
        let b = new XMLHttpRequest;
        b.open(o.method.toUpperCase(), o.url, !0),
        b.timeout = o.timeout;
        function O() {
            if (!b)
                return;
            const C = _.from("getAllResponseHeaders"in b && b.getAllResponseHeaders())
              , f = {
                data: !c || c === "text" || c === "json" ? b.responseText : b.response,
                status: b.status,
                statusText: b.statusText,
                headers: C,
                config: e,
                request: b
            };
            et(function(h) {
                n(h),
                g()
            }, function(h) {
                r(h),
                g()
            }, f),
            b = null
        }
        "onloadend"in b ? b.onloadend = O : b.onreadystatechange = function() {
            !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(O)
        }
        ,
        b.onabort = function() {
            b && (r(new w("Request aborted",w.ECONNABORTED,e,b)),
            b = null)
        }
        ,
        b.onerror = function() {
            r(new w("Network Error",w.ERR_NETWORK,e,b)),
            b = null
        }
        ,
        b.ontimeout = function() {
            let v = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const f = o.transitional || Qe;
            o.timeoutErrorMessage && (v = o.timeoutErrorMessage),
            r(new w(v,f.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,e,b)),
            b = null
        }
        ,
        s === void 0 && i.setContentType(null),
        "setRequestHeader"in b && a.forEach(i.toJSON(), function(v, f) {
            b.setRequestHeader(f, v)
        }),
        a.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials),
        c && c !== "json" && (b.responseType = o.responseType),
        u && ([R,y] = G(u, !0),
        b.addEventListener("progress", R)),
        l && b.upload && ([m,A] = G(l),
        b.upload.addEventListener("progress", m),
        b.upload.addEventListener("loadend", A)),
        (o.cancelToken || o.signal) && (d = C => {
            b && (r(!C || C.type ? new M(null,e,b) : C),
            b.abort(),
            b = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(d),
        o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
        const x = wn(o.url);
        if (x && D.protocols.indexOf(x) === -1) {
            r(new w("Unsupported protocol " + x + ":",w.ERR_BAD_REQUEST,e));
            return
        }
        b.send(s || null)
    }
    )
}
  , Nn = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, o;
        const s = function(u) {
            if (!o) {
                o = !0,
                c();
                const d = u instanceof Error ? u : this.reason;
                r.abort(d instanceof w ? d : new M(d instanceof Error ? d.message : d))
            }
        };
        let i = t && setTimeout( () => {
            i = null,
            s(new w(`timeout ${t} of ms exceeded`,w.ETIMEDOUT))
        }
        , t);
        const c = () => {
            e && (i && clearTimeout(i),
            i = null,
            e.forEach(u => {
                u.unsubscribe ? u.unsubscribe(s) : u.removeEventListener("abort", s)
            }
            ),
            e = null)
        }
        ;
        e.forEach(u => u.addEventListener("abort", s));
        const {signal: l} = r;
        return l.unsubscribe = () => a.asap(c),
        l
    }
}
  , Pn = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, o;
    for (; r < n; )
        o = r + t,
        yield e.slice(r, o),
        r = o
}
  , Dn = async function*(e, t) {
    for await(const n of _n(e))
        yield*Pn(n, t)
}
  , _n = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , Pe = (e, t, n, r) => {
    const o = Dn(e, t);
    let s = 0, i, c = l => {
        i || (i = !0,
        r && r(l))
    }
    ;
    return new ReadableStream({
        async pull(l) {
            try {
                const {done: u, value: d} = await o.next();
                if (u) {
                    c(),
                    l.close();
                    return
                }
                let m = d.byteLength;
                if (n) {
                    let R = s += m;
                    n(R)
                }
                l.enqueue(new Uint8Array(d))
            } catch (u) {
                throw c(u),
                u
            }
        },
        cancel(l) {
            return c(l),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , ne = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , rt = ne && typeof ReadableStream == "function"
  , vn = ne && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , ot = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , Ln = rt && ot( () => {
    let e = !1;
    const t = new Request(D.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , De = 64 * 1024
  , de = rt && ot( () => a.isReadableStream(new Response("").body))
  , Q = {
    stream: de && (e => e.body)
};
ne && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !Q[t] && (Q[t] = a.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new w(`Response type '${t}' is not supported`,w.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const jn = async e => {
    if (e == null)
        return 0;
    if (a.isBlob(e))
        return e.size;
    if (a.isSpecCompliantForm(e))
        return (await new Request(D.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
        return e.byteLength;
    if (a.isURLSearchParams(e) && (e = e + ""),
    a.isString(e))
        return (await vn(e)).byteLength
}
  , Fn = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? jn(t)
}
  , In = ne && (async e => {
    let {url: t, method: n, data: r, signal: o, cancelToken: s, timeout: i, onDownloadProgress: c, onUploadProgress: l, responseType: u, headers: d, withCredentials: m="same-origin", fetchOptions: R} = nt(e);
    u = u ? (u + "").toLowerCase() : "text";
    let A = Nn([o, s && s.toAbortSignal()], i), y;
    const g = A && A.unsubscribe && ( () => {
        A.unsubscribe()
    }
    );
    let b;
    try {
        if (l && Ln && n !== "get" && n !== "head" && (b = await Fn(d, r)) !== 0) {
            let f = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), p;
            if (a.isFormData(r) && (p = f.headers.get("content-type")) && d.setContentType(p),
            f.body) {
                const [h,T] = Ce(b, G(xe(l)));
                r = Pe(f.body, De, h, T)
            }
        }
        a.isString(m) || (m = m ? "include" : "omit");
        const O = "credentials"in Request.prototype;
        y = new Request(t,{
            ...R,
            signal: A,
            method: n.toUpperCase(),
            headers: d.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: O ? m : void 0
        });
        let x = await fetch(y);
        const C = de && (u === "stream" || u === "response");
        if (de && (c || C && g)) {
            const f = {};
            ["status", "statusText", "headers"].forEach(S => {
                f[S] = x[S]
            }
            );
            const p = a.toFiniteNumber(x.headers.get("content-length"))
              , [h,T] = c && Ce(p, G(xe(c), !0)) || [];
            x = new Response(Pe(x.body, De, h, () => {
                T && T(),
                g && g()
            }
            ),f)
        }
        u = u || "text";
        let v = await Q[a.findKey(Q, u) || "text"](x, e);
        return !C && g && g(),
        await new Promise( (f, p) => {
            et(f, p, {
                data: v,
                headers: _.from(x.headers),
                status: x.status,
                statusText: x.statusText,
                config: e,
                request: y
            })
        }
        )
    } catch (O) {
        throw g && g(),
        O && O.name === "TypeError" && /fetch/i.test(O.message) ? Object.assign(new w("Network Error",w.ERR_NETWORK,e,y), {
            cause: O.cause || O
        }) : w.from(O, O && O.code, e, y)
    }
}
)
  , pe = {
    http: Gt,
    xhr: xn,
    fetch: In
};
a.forEach(pe, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const _e = e => `- ${e}`
  , Bn = e => a.isFunction(e) || e === null || e === !1
  , st = {
    getAdapter: e => {
        e = a.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const o = {};
        for (let s = 0; s < t; s++) {
            n = e[s];
            let i;
            if (r = n,
            !Bn(n) && (r = pe[(i = String(n)).toLowerCase()],
            r === void 0))
                throw new w(`Unknown adapter '${i}'`);
            if (r)
                break;
            o[i || "#" + s] = r
        }
        if (!r) {
            const s = Object.entries(o).map( ([c,l]) => `adapter ${c} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let i = t ? s.length > 1 ? `since :
` + s.map(_e).join(`
`) : " " + _e(s[0]) : "as no adapter specified";
            throw new w("There is no suitable adapter to dispatch the request " + i,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: pe
};
function ae(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new M(null,e)
}
function ve(e) {
    return ae(e),
    e.headers = _.from(e.headers),
    e.data = ie.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    st.getAdapter(e.adapter || V.adapter)(e).then(function(r) {
        return ae(e),
        r.data = ie.call(e, e.transformResponse, r),
        r.headers = _.from(r.headers),
        r
    }, function(r) {
        return Ye(r) || (ae(e),
        r && r.response && (r.response.data = ie.call(e, e.transformResponse, r.response),
        r.response.headers = _.from(r.response.headers))),
        Promise.reject(r)
    })
}
const it = "1.7.7"
  , we = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    we[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Le = {};
we.transitional = function(t, n, r) {
    function o(s, i) {
        return "[Axios v" + it + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "")
    }
    return (s, i, c) => {
        if (t === !1)
            throw new w(o(i, " has been removed" + (n ? " in " + n : "")),w.ERR_DEPRECATED);
        return n && !Le[i] && (Le[i] = !0,
        console.warn(o(i, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(s, i, c) : !0
    }
}
;
function Un(e, t, n) {
    if (typeof e != "object")
        throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const s = r[o]
          , i = t[s];
        if (i) {
            const c = e[s]
              , l = c === void 0 || i(c, s, e);
            if (l !== !0)
                throw new w("option " + s + " must be " + l,w.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new w("Unknown option " + s,w.ERR_BAD_OPTION)
    }
}
const he = {
    assertOptions: Un,
    validators: we
}
  , I = he.validators;
let k = class {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new Oe,
            response: new Oe
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let o;
                Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = q(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: s} = n;
        r !== void 0 && he.assertOptions(r, {
            silentJSONParsing: I.transitional(I.boolean),
            forcedJSONParsing: I.transitional(I.boolean),
            clarifyTimeoutError: I.transitional(I.boolean)
        }, !1),
        o != null && (a.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : he.assertOptions(o, {
            encode: I.function,
            serialize: I.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let i = s && a.merge(s.common, s[n.method]);
        s && a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete s[y]
        }
        ),
        n.headers = _.concat(i, s);
        const c = [];
        let l = !0;
        this.interceptors.request.forEach(function(g) {
            typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous,
            c.unshift(g.fulfilled, g.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(g) {
            u.push(g.fulfilled, g.rejected)
        });
        let d, m = 0, R;
        if (!l) {
            const y = [ve.bind(this), void 0];
            for (y.unshift.apply(y, c),
            y.push.apply(y, u),
            R = y.length,
            d = Promise.resolve(n); m < R; )
                d = d.then(y[m++], y[m++]);
            return d
        }
        R = c.length;
        let A = n;
        for (m = 0; m < R; ) {
            const y = c[m++]
              , g = c[m++];
            try {
                A = y(A)
            } catch (b) {
                g.call(this, b);
                break
            }
        }
        try {
            d = ve.call(this, A)
        } catch (y) {
            return Promise.reject(y)
        }
        for (m = 0,
        R = u.length; m < R; )
            d = d.then(u[m++], u[m++]);
        return d
    }
    getUri(t) {
        t = q(this.defaults, t);
        const n = tt(t.baseURL, t.url);
        return Ge(n, t.params, t.paramsSerializer)
    }
}
;
a.forEach(["delete", "get", "head", "options"], function(t) {
    k.prototype[t] = function(n, r) {
        return this.request(q(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
a.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(s, i, c) {
            return this.request(q(c || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: i
            }))
        }
    }
    k.prototype[t] = n(),
    k.prototype[t + "Form"] = n(!0)
});
let kn = class at {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(s) {
            n = s
        }
        );
        const r = this;
        this.promise.then(o => {
            if (!r._listeners)
                return;
            let s = r._listeners.length;
            for (; s-- > 0; )
                r._listeners[s](o);
            r._listeners = null
        }
        ),
        this.promise.then = o => {
            let s;
            const i = new Promise(c => {
                r.subscribe(c),
                s = c
            }
            ).then(o);
            return i.cancel = function() {
                r.unsubscribe(s)
            }
            ,
            i
        }
        ,
        t(function(s, i, c) {
            r.reason || (r.reason = new M(s,i,c),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new at(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
;
function qn(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function Hn(e) {
    return a.isObject(e) && e.isAxiosError === !0
}
const me = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(me).forEach( ([e,t]) => {
    me[t] = e
}
);
function ct(e) {
    const t = new k(e)
      , n = Ue(k.prototype.request, t);
    return a.extend(n, k.prototype, t, {
        allOwnKeys: !0
    }),
    a.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return ct(q(e, o))
    }
    ,
    n
}
const N = ct(V);
N.Axios = k;
N.CanceledError = M;
N.CancelToken = kn;
N.isCancel = Ye;
N.VERSION = it;
N.toFormData = te;
N.AxiosError = w;
N.Cancel = N.CanceledError;
N.all = function(t) {
    return Promise.all(t)
}
;
N.spread = qn;
N.isAxiosError = Hn;
N.mergeConfig = q;
N.AxiosHeaders = _;
N.formToJSON = e => Ze(a.isHTMLForm(e) ? new FormData(e) : e);
N.getAdapter = st.getAdapter;
N.HttpStatusCode = me;
N.default = N;
const {Axios: Vn, AxiosError: Wn, CanceledError: Kn, isCancel: Xn, CancelToken: Gn, VERSION: Qn, all: Zn, Cancel: Yn, isAxiosError: er, spread: tr, toFormData: nr, AxiosHeaders: rr, HttpStatusCode: or, formToJSON: sr, getAdapter: ir, mergeConfig: ar} = N;
var B = {}, ce = {}, je;
function ut() {
    return je || (je = 1,
    (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
        var t;
        (function(r) {
            r.Root = "root",
            r.Text = "text",
            r.Directive = "directive",
            r.Comment = "comment",
            r.Script = "script",
            r.Style = "style",
            r.Tag = "tag",
            r.CDATA = "cdata",
            r.Doctype = "doctype"
        }
        )(t = e.ElementType || (e.ElementType = {}));
        function n(r) {
            return r.type === t.Tag || r.type === t.Script || r.type === t.Style
        }
        e.isTag = n,
        e.Root = t.Root,
        e.Text = t.Text,
        e.Directive = t.Directive,
        e.Comment = t.Comment,
        e.Script = t.Script,
        e.Style = t.Style,
        e.Tag = t.Tag,
        e.CDATA = t.CDATA,
        e.Doctype = t.Doctype
    }
    )(ce)),
    ce
}
var E = {}, Fe;
function Ie() {
    if (Fe)
        return E;
    Fe = 1;
    var e = E && E.__extends || (function() {
        var f = function(p, h) {
            return f = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(T, S) {
                T.__proto__ = S
            }
            || function(T, S) {
                for (var P in S)
                    Object.prototype.hasOwnProperty.call(S, P) && (T[P] = S[P])
            }
            ,
            f(p, h)
        };
        return function(p, h) {
            if (typeof h != "function" && h !== null)
                throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
            f(p, h);
            function T() {
                this.constructor = p
            }
            p.prototype = h === null ? Object.create(h) : (T.prototype = h.prototype,
            new T)
        }
    }
    )()
      , t = E && E.__assign || function() {
        return t = Object.assign || function(f) {
            for (var p, h = 1, T = arguments.length; h < T; h++) {
                p = arguments[h];
                for (var S in p)
                    Object.prototype.hasOwnProperty.call(p, S) && (f[S] = p[S])
            }
            return f
        }
        ,
        t.apply(this, arguments)
    }
    ;
    Object.defineProperty(E, "__esModule", {
        value: !0
    }),
    E.cloneNode = E.hasChildren = E.isDocument = E.isDirective = E.isComment = E.isText = E.isCDATA = E.isTag = E.Element = E.Document = E.CDATA = E.NodeWithChildren = E.ProcessingInstruction = E.Comment = E.Text = E.DataNode = E.Node = void 0;
    var n = ut()
      , r = (function() {
        function f() {
            this.parent = null,
            this.prev = null,
            this.next = null,
            this.startIndex = null,
            this.endIndex = null
        }
        return Object.defineProperty(f.prototype, "parentNode", {
            get: function() {
                return this.parent
            },
            set: function(p) {
                this.parent = p
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "previousSibling", {
            get: function() {
                return this.prev
            },
            set: function(p) {
                this.prev = p
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(f.prototype, "nextSibling", {
            get: function() {
                return this.next
            },
            set: function(p) {
                this.next = p
            },
            enumerable: !1,
            configurable: !0
        }),
        f.prototype.cloneNode = function(p) {
            return p === void 0 && (p = !1),
            C(this, p)
        }
        ,
        f
    }
    )();
    E.Node = r;
    var o = (function(f) {
        e(p, f);
        function p(h) {
            var T = f.call(this) || this;
            return T.data = h,
            T
        }
        return Object.defineProperty(p.prototype, "nodeValue", {
            get: function() {
                return this.data
            },
            set: function(h) {
                this.data = h
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(r);
    E.DataNode = o;
    var s = (function(f) {
        e(p, f);
        function p() {
            var h = f !== null && f.apply(this, arguments) || this;
            return h.type = n.ElementType.Text,
            h
        }
        return Object.defineProperty(p.prototype, "nodeType", {
            get: function() {
                return 3
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(o);
    E.Text = s;
    var i = (function(f) {
        e(p, f);
        function p() {
            var h = f !== null && f.apply(this, arguments) || this;
            return h.type = n.ElementType.Comment,
            h
        }
        return Object.defineProperty(p.prototype, "nodeType", {
            get: function() {
                return 8
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(o);
    E.Comment = i;
    var c = (function(f) {
        e(p, f);
        function p(h, T) {
            var S = f.call(this, T) || this;
            return S.name = h,
            S.type = n.ElementType.Directive,
            S
        }
        return Object.defineProperty(p.prototype, "nodeType", {
            get: function() {
                return 1
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(o);
    E.ProcessingInstruction = c;
    var l = (function(f) {
        e(p, f);
        function p(h) {
            var T = f.call(this) || this;
            return T.children = h,
            T
        }
        return Object.defineProperty(p.prototype, "firstChild", {
            get: function() {
                var h;
                return (h = this.children[0]) !== null && h !== void 0 ? h : null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "lastChild", {
            get: function() {
                return this.children.length > 0 ? this.children[this.children.length - 1] : null
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "childNodes", {
            get: function() {
                return this.children
            },
            set: function(h) {
                this.children = h
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(r);
    E.NodeWithChildren = l;
    var u = (function(f) {
        e(p, f);
        function p() {
            var h = f !== null && f.apply(this, arguments) || this;
            return h.type = n.ElementType.CDATA,
            h
        }
        return Object.defineProperty(p.prototype, "nodeType", {
            get: function() {
                return 4
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(l);
    E.CDATA = u;
    var d = (function(f) {
        e(p, f);
        function p() {
            var h = f !== null && f.apply(this, arguments) || this;
            return h.type = n.ElementType.Root,
            h
        }
        return Object.defineProperty(p.prototype, "nodeType", {
            get: function() {
                return 9
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(l);
    E.Document = d;
    var m = (function(f) {
        e(p, f);
        function p(h, T, S, P) {
            S === void 0 && (S = []),
            P === void 0 && (P = h === "script" ? n.ElementType.Script : h === "style" ? n.ElementType.Style : n.ElementType.Tag);
            var F = f.call(this, S) || this;
            return F.name = h,
            F.attribs = T,
            F.type = P,
            F
        }
        return Object.defineProperty(p.prototype, "nodeType", {
            get: function() {
                return 1
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "tagName", {
            get: function() {
                return this.name
            },
            set: function(h) {
                this.name = h
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "attributes", {
            get: function() {
                var h = this;
                return Object.keys(this.attribs).map(function(T) {
                    var S, P;
                    return {
                        name: T,
                        value: h.attribs[T],
                        namespace: (S = h["x-attribsNamespace"]) === null || S === void 0 ? void 0 : S[T],
                        prefix: (P = h["x-attribsPrefix"]) === null || P === void 0 ? void 0 : P[T]
                    }
                })
            },
            enumerable: !1,
            configurable: !0
        }),
        p
    }
    )(l);
    E.Element = m;
    function R(f) {
        return (0,
        n.isTag)(f)
    }
    E.isTag = R;
    function A(f) {
        return f.type === n.ElementType.CDATA
    }
    E.isCDATA = A;
    function y(f) {
        return f.type === n.ElementType.Text
    }
    E.isText = y;
    function g(f) {
        return f.type === n.ElementType.Comment
    }
    E.isComment = g;
    function b(f) {
        return f.type === n.ElementType.Directive
    }
    E.isDirective = b;
    function O(f) {
        return f.type === n.ElementType.Root
    }
    E.isDocument = O;
    function x(f) {
        return Object.prototype.hasOwnProperty.call(f, "children")
    }
    E.hasChildren = x;
    function C(f, p) {
        p === void 0 && (p = !1);
        var h;
        if (y(f))
            h = new s(f.data);
        else if (g(f))
            h = new i(f.data);
        else if (R(f)) {
            var T = p ? v(f.children) : []
              , S = new m(f.name,t({}, f.attribs),T);
            T.forEach(function(lt) {
                return lt.parent = S
            }),
            f.namespace != null && (S.namespace = f.namespace),
            f["x-attribsNamespace"] && (S["x-attribsNamespace"] = t({}, f["x-attribsNamespace"])),
            f["x-attribsPrefix"] && (S["x-attribsPrefix"] = t({}, f["x-attribsPrefix"])),
            h = S
        } else if (A(f)) {
            var T = p ? v(f.children) : []
              , P = new u(T);
            T.forEach(function(re) {
                return re.parent = P
            }),
            h = P
        } else if (O(f)) {
            var T = p ? v(f.children) : []
              , F = new d(T);
            T.forEach(function(re) {
                return re.parent = F
            }),
            f["x-mode"] && (F["x-mode"] = f["x-mode"]),
            h = F
        } else if (b(f)) {
            var W = new c(f.name,f.data);
            f["x-name"] != null && (W["x-name"] = f["x-name"],
            W["x-publicId"] = f["x-publicId"],
            W["x-systemId"] = f["x-systemId"]),
            h = W
        } else
            throw new Error("Not implemented yet: ".concat(f.type));
        return h.startIndex = f.startIndex,
        h.endIndex = f.endIndex,
        f.sourceCodeLocation != null && (h.sourceCodeLocation = f.sourceCodeLocation),
        h
    }
    E.cloneNode = C;
    function v(f) {
        for (var p = f.map(function(T) {
            return C(T, !0)
        }), h = 1; h < p.length; h++)
            p[h].prev = p[h - 1],
            p[h - 1].next = p[h];
        return p
    }
    return E
}
var Be;
function cr() {
    return Be || (Be = 1,
    (function(e) {
        var t = B && B.__createBinding || (Object.create ? (function(c, l, u, d) {
            d === void 0 && (d = u);
            var m = Object.getOwnPropertyDescriptor(l, u);
            (!m || ("get"in m ? !l.__esModule : m.writable || m.configurable)) && (m = {
                enumerable: !0,
                get: function() {
                    return l[u]
                }
            }),
            Object.defineProperty(c, d, m)
        }
        ) : (function(c, l, u, d) {
            d === void 0 && (d = u),
            c[d] = l[u]
        }
        ))
          , n = B && B.__exportStar || function(c, l) {
            for (var u in c)
                u !== "default" && !Object.prototype.hasOwnProperty.call(l, u) && t(l, c, u)
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.DomHandler = void 0;
        var r = ut()
          , o = Ie();
        n(Ie(), e);
        var s = {
            withStartIndices: !1,
            withEndIndices: !1,
            xmlMode: !1
        }
          , i = (function() {
            function c(l, u, d) {
                this.dom = [],
                this.root = new o.Document(this.dom),
                this.done = !1,
                this.tagStack = [this.root],
                this.lastNode = null,
                this.parser = null,
                typeof u == "function" && (d = u,
                u = s),
                typeof l == "object" && (u = l,
                l = void 0),
                this.callback = l ?? null,
                this.options = u ?? s,
                this.elementCB = d ?? null
            }
            return c.prototype.onparserinit = function(l) {
                this.parser = l
            }
            ,
            c.prototype.onreset = function() {
                this.dom = [],
                this.root = new o.Document(this.dom),
                this.done = !1,
                this.tagStack = [this.root],
                this.lastNode = null,
                this.parser = null
            }
            ,
            c.prototype.onend = function() {
                this.done || (this.done = !0,
                this.parser = null,
                this.handleCallback(null))
            }
            ,
            c.prototype.onerror = function(l) {
                this.handleCallback(l)
            }
            ,
            c.prototype.onclosetag = function() {
                this.lastNode = null;
                var l = this.tagStack.pop();
                this.options.withEndIndices && (l.endIndex = this.parser.endIndex),
                this.elementCB && this.elementCB(l)
            }
            ,
            c.prototype.onopentag = function(l, u) {
                var d = this.options.xmlMode ? r.ElementType.Tag : void 0
                  , m = new o.Element(l,u,void 0,d);
                this.addNode(m),
                this.tagStack.push(m)
            }
            ,
            c.prototype.ontext = function(l) {
                var u = this.lastNode;
                if (u && u.type === r.ElementType.Text)
                    u.data += l,
                    this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
                else {
                    var d = new o.Text(l);
                    this.addNode(d),
                    this.lastNode = d
                }
            }
            ,
            c.prototype.oncomment = function(l) {
                if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
                    this.lastNode.data += l;
                    return
                }
                var u = new o.Comment(l);
                this.addNode(u),
                this.lastNode = u
            }
            ,
            c.prototype.oncommentend = function() {
                this.lastNode = null
            }
            ,
            c.prototype.oncdatastart = function() {
                var l = new o.Text("")
                  , u = new o.CDATA([l]);
                this.addNode(u),
                l.parent = u,
                this.lastNode = l
            }
            ,
            c.prototype.oncdataend = function() {
                this.lastNode = null
            }
            ,
            c.prototype.onprocessinginstruction = function(l, u) {
                var d = new o.ProcessingInstruction(l,u);
                this.addNode(d)
            }
            ,
            c.prototype.handleCallback = function(l) {
                if (typeof this.callback == "function")
                    this.callback(l, this.dom);
                else if (l)
                    throw l
            }
            ,
            c.prototype.addNode = function(l) {
                var u = this.tagStack[this.tagStack.length - 1]
                  , d = u.children[u.children.length - 1];
                this.options.withStartIndices && (l.startIndex = this.parser.startIndex),
                this.options.withEndIndices && (l.endIndex = this.parser.endIndex),
                u.children.push(l),
                d && (l.prev = d,
                d.next = l),
                l.parent = u,
                this.lastNode = null
            }
            ,
            c
        }
        )();
        e.DomHandler = i,
        e.default = i
    }
    )(B)),
    B
}
var Mn = (e => (e.TRIALING = "trialing",
e.ACTIVE = "active",
e.CANCELED = "canceled",
e.INCOMPLETE = "incomplete",
e.INCOMPLETE_EXPIRED = "incomplete_expired",
e.PAST_DUE = "past_due",
e.PAUSED = "paused",
e.UNPAID = "unpaid",
e))(Mn || {})
  , $n = (e => (e.FREE = "free",
e.PRO = "pro",
e.MAX = "max",
e))($n || {});
export {$n as P, Mn as S, N as a, cr as b, ut as r};
