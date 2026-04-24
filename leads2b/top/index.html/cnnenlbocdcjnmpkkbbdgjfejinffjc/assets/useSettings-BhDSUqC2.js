import {l as x, d as S} from "./i18n-DlHefWMF.js";
import {r as M, R as m} from "./index-CQoC5iON.js";
const C = {};
let nn = 0;
function en(n, r) {
    const s = `atom${++nn}`
      , o = {
        toString() {
            return (C ? "production" : void 0) !== "production" && this.debugLabel ? s + ":" + this.debugLabel : s
        }
    };
    return typeof n == "function" ? o.read = n : (o.init = n,
    o.read = rn,
    o.write = sn),
    r && (o.write = r),
    o
}
function rn(n) {
    return n(this)
}
function sn(n, r, s) {
    return r(this, typeof s == "function" ? s(n(this)) : s)
}
const a = (n, r) => n.unstable_is ? n.unstable_is(r) : r === n
  , J = n => "init"in n
  , U = n => !!n.write
  , R = Symbol((C ? "production" : void 0) !== "production" ? "CONTINUE_PROMISE" : "")
  , z = "pending"
  , tn = "fulfilled"
  , on = "rejected"
  , cn = n => typeof n == "object" && n !== null && R in n
  , L = new WeakMap
  , un = (n, r, s) => {
    if (!L.has(n)) {
        let o;
        const v = new Promise( (E, P) => {
            let b = n;
            const g = y => O => {
                b === y && (v.status = tn,
                v.value = O,
                E(O),
                s())
            }
              , w = y => O => {
                b === y && (v.status = on,
                v.reason = O,
                P(O),
                s())
            }
            ;
            n.then(g(n), w(n)),
            o = (y, O) => {
                y && (L.set(y, v),
                b = y,
                y.then(g(y), w(y)),
                r(),
                r = O)
            }
        }
        );
        v.status = z,
        v[R] = o,
        L.set(n, v)
    }
    return L.get(n)
}
  , dn = n => typeof n?.then == "function"
  , B = n => "v"in n || "e"in n
  , F = n => {
    if ("e"in n)
        throw n.e;
    if ((C ? "production" : void 0) !== "production" && !("v"in n))
        throw new Error("[Bug] atom state is not initialized");
    return n.v
}
  , N = n => {
    const r = n.v;
    return cn(r) && r.status === z ? r : null
}
  , H = (n, r, s) => {
    s.p.has(n) || (s.p.add(n),
    r.then( () => {
        s.p.delete(n)
    }
    , () => {
        s.p.delete(n)
    }
    ))
}
  , G = (n, r, s, o, v) => {
    var E;
    if ((C ? "production" : void 0) !== "production" && o === r)
        throw new Error("[Bug] atom cannot depend on itself");
    s.d.set(o, v.n);
    const P = N(s);
    P && H(r, P, v),
    (E = v.m) == null || E.t.add(r),
    n && ln(n, o, r)
}
  , T = () => [new Map, new Map, new Set]
  , $ = (n, r, s) => {
    n[0].has(r) || n[0].set(r, new Set),
    n[1].set(r, s)
}
  , ln = (n, r, s) => {
    const o = n[0].get(r);
    o && o.add(s)
}
  , fn = (n, r) => n[0].get(r)
  , V = (n, r) => {
    n[2].add(r)
}
  , D = n => {
    for (; n[1].size || n[2].size; ) {
        n[0].clear();
        const r = new Set(n[1].values());
        n[1].clear();
        const s = new Set(n[2]);
        n[2].clear(),
        r.forEach(o => {
            var v;
            return (v = o.m) == null ? void 0 : v.l.forEach(E => E())
        }
        ),
        s.forEach(o => o())
    }
}
  , K = n => {
    let r;
    (C ? "production" : void 0) !== "production" && (r = new Set);
    const s = (c, t, e, i= () => {}
    , d= () => {}
    ) => {
        const l = "v"in t
          , f = t.v
          , h = N(t);
        if (dn(e))
            if (h)
                h !== e && (h[R](e, i),
                ++t.n);
            else {
                const p = un(e, i, d);
                if (p.status === z)
                    for (const u of t.d.keys())
                        H(c, p, n(u, t));
                t.v = p,
                delete t.e
            }
        else
            h && h[R](Promise.resolve(e), i),
            t.v = e,
            delete t.e;
        (!l || !Object.is(f, t.v)) && ++t.n
    }
      , o = (c, t, e, i) => {
        if (!i?.(t) && B(e) && (e.m || Array.from(e.d).every( ([u,_]) => o(c, u, n(u, e), i).n === _)))
            return e;
        e.d.clear();
        let d = !0;
        const l = u => {
            if (a(t, u)) {
                const A = n(u, e);
                if (!B(A))
                    if (J(u))
                        s(u, A, u.init);
                    else
                        throw new Error("no atom init");
                return F(A)
            }
            const _ = o(c, u, n(u, e), i);
            if (d)
                G(c, t, e, u, _);
            else {
                const A = T();
                G(A, t, e, u, _),
                w(A, t, e),
                D(A)
            }
            return F(_)
        }
        ;
        let f, h;
        const p = {
            get signal() {
                return f || (f = new AbortController),
                f.signal
            },
            get setSelf() {
                return (C ? "production" : void 0) !== "production" && !U(t) && console.warn("setSelf function cannot be used with read-only atom"),
                !h && U(t) && (h = (...u) => {
                    if ((C ? "production" : void 0) !== "production" && d && console.warn("setSelf function cannot be called in sync"),
                    !d)
                        return g(t, ...u)
                }
                ),
                h
            }
        };
        try {
            const u = t.read(l, p);
            return s(t, e, u, () => f?.abort(), () => {
                if (e.m) {
                    const _ = T();
                    w(_, t, e),
                    D(_)
                }
            }
            ),
            e
        } catch (u) {
            return delete e.v,
            e.e = u,
            ++e.n,
            e
        } finally {
            d = !1
        }
    }
      , v = c => F(o(void 0, c, n(c)))
      , E = (c, t, e) => {
        var i, d;
        const l = new Map;
        for (const f of ((i = e.m) == null ? void 0 : i.t) || [])
            l.set(f, n(f, e));
        for (const f of e.p)
            l.set(f, n(f, e));
        return (d = fn(c, t)) == null || d.forEach(f => {
            l.set(f, n(f, e))
        }
        ),
        l
    }
      , P = (c, t, e) => {
        const i = []
          , d = new Set
          , l = (p, u) => {
            if (!d.has(p)) {
                d.add(p);
                for (const [_,A] of E(c, p, u))
                    p !== _ && l(_, A);
                i.push([p, u, u.n])
            }
        }
        ;
        l(t, e);
        const f = new Set([t])
          , h = p => d.has(p);
        for (let p = i.length - 1; p >= 0; --p) {
            const [u,_,A] = i[p];
            let k = !1;
            for (const I of _.d.keys())
                if (I !== u && f.has(I)) {
                    k = !0;
                    break
                }
            k && (o(c, u, _, h),
            w(c, u, _),
            A !== _.n && ($(c, u, _),
            f.add(u))),
            d.delete(u)
        }
    }
      , b = (c, t, e, ...i) => {
        const d = h => F(o(c, h, n(h, e)))
          , l = (h, ...p) => {
            const u = n(h, e);
            let _;
            if (a(t, h)) {
                if (!J(h))
                    throw new Error("atom not writable");
                const A = "v"in u
                  , k = u.v
                  , I = p[0];
                s(h, u, I),
                w(c, h, u),
                (!A || !Object.is(k, u.v)) && ($(c, h, u),
                P(c, h, u))
            } else
                _ = b(c, h, u, ...p);
            return D(c),
            _
        }
        ;
        return t.write(d, l, ...i)
    }
      , g = (c, ...t) => {
        const e = T()
          , i = b(e, c, n(c), ...t);
        return D(e),
        i
    }
      , w = (c, t, e) => {
        if (e.m && !N(e)) {
            for (const i of e.d.keys())
                e.m.d.has(i) || (y(c, i, n(i, e)).t.add(t),
                e.m.d.add(i));
            for (const i of e.m.d || [])
                if (!e.d.has(i)) {
                    e.m.d.delete(i);
                    const d = O(c, i, n(i, e));
                    d?.t.delete(t)
                }
        }
    }
      , y = (c, t, e) => {
        if (!e.m) {
            o(c, t, e);
            for (const i of e.d.keys())
                y(c, i, n(i, e)).t.add(t);
            if (e.m = {
                l: new Set,
                d: new Set(e.d.keys()),
                t: new Set
            },
            (C ? "production" : void 0) !== "production" && r.add(t),
            U(t) && t.onMount) {
                const i = e.m
                  , {onMount: d} = t;
                V(c, () => {
                    const l = d( (...f) => b(c, t, e, ...f));
                    l && (i.u = l)
                }
                )
            }
        }
        return e.m
    }
      , O = (c, t, e) => {
        if (e.m && !e.m.l.size && !Array.from(e.m.t).some(i => {
            var d;
            return (d = n(i, e).m) == null ? void 0 : d.d.has(t)
        }
        )) {
            const i = e.m.u;
            i && V(c, i),
            delete e.m,
            (C ? "production" : void 0) !== "production" && r.delete(t);
            for (const l of e.d.keys()) {
                const f = O(c, l, n(l, e));
                f?.t.delete(t)
            }
            const d = N(e);
            d && d[R](void 0, () => {}
            );
            return
        }
        return e.m
    }
      , W = {
        get: v,
        set: g,
        sub: (c, t) => {
            const e = T()
              , i = n(c)
              , d = y(e, c, i);
            D(e);
            const l = d.l;
            return l.add(t),
            () => {
                l.delete(t);
                const f = T();
                O(f, c, i),
                D(f)
            }
        }
        ,
        unstable_derive: c => K(...c(n))
    };
    return (C ? "production" : void 0) !== "production" && Object.assign(W, {
        dev4_get_internal_weak_map: () => ({
            get: t => {
                const e = n(t);
                if (e.n !== 0)
                    return e
            }
        }),
        dev4_get_mounted_atoms: () => r,
        dev4_restore_atoms: t => {
            const e = T();
            for (const [i,d] of t)
                if (J(i)) {
                    const l = n(i)
                      , f = "v"in l
                      , h = l.v;
                    s(i, l, d),
                    w(e, i, l),
                    (!f || !Object.is(h, l.v)) && ($(e, i, l),
                    P(e, i, l))
                }
            D(e)
        }
    }),
    W
}
  , vn = () => {
    const n = new WeakMap;
    return K(s => {
        let o = n.get(s);
        return o || (o = {
            d: new Map,
            p: new Set,
            n: 0
        },
        n.set(s, o)),
        o
    }
    )
}
;
let j;
const hn = () => (j || (j = vn(),
(C ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = j),
globalThis.__JOTAI_DEFAULT_STORE__ !== j && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"))),
j)
  , wn = {}
  , bn = M.createContext(void 0)
  , Q = n => M.useContext(bn) || hn()
  , pn = n => typeof n?.then == "function"
  , _n = m.use || (n => {
    if (n.status === "pending")
        throw n;
    if (n.status === "fulfilled")
        return n.value;
    throw n.status === "rejected" ? n.reason : (n.status = "pending",
    n.then(r => {
        n.status = "fulfilled",
        n.value = r
    }
    , r => {
        n.status = "rejected",
        n.reason = r
    }
    ),
    n)
}
);
function X(n, r) {
    const s = Q()
      , [[o,v,E],P] = M.useReducer(w => {
        const y = s.get(n);
        return Object.is(w[0], y) && w[1] === s && w[2] === n ? w : [y, s, n]
    }
    , void 0, () => [s.get(n), s, n]);
    let b = o;
    return (v !== s || E !== n) && (P(),
    b = s.get(n)),
    M.useEffect( () => {
        const w = s.sub(n, () => {
            P()
        }
        );
        return P(),
        w
    }
    , [s, n, void 0]),
    M.useDebugValue(b),
    pn(b) ? _n(b) : b
}
function yn(n, r) {
    const s = Q();
    return M.useCallback( (...v) => {
        if ((wn ? "production" : void 0) !== "production" && !("write"in n))
            throw new Error("not writable atom");
        return s.set(n, ...v)
    }
    , [s, n])
}
function gn(n, r) {
    return [X(n), yn(n)]
}
function Y(n, r) {
    if (n === void 0)
        return r;
    if (Array.isArray(n) || Array.isArray(r))
        return !Array.isArray(n) && Array.isArray(r) ? [...r] : Array.isArray(n) ? [...n] : n;
    if (typeof r != "object" || r === null)
        return n;
    if (typeof n != "object" || n === null)
        return structuredClone(r);
    const s = {
        ...n
    };
    for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (Object.prototype.hasOwnProperty.call(s, o) ? s[o] = Y(s[o], r[o]) : s[o] = structuredClone(r[o]));
    return s
}
const Dn = (n, r={}) => {
    try {
        return JSON.parse(n)
    } catch {
        return r
    }
}
;
function En(n, r, s="local") {
    const [o,v] = gn(r);
    M.useEffect( () => {
        Pn(n, s).then(g => {
            if (!g || JSON.stringify(g) === JSON.stringify(o))
                return;
            const w = Y(g, o);
            v(w),
            q(n, w, s)
        }
        );
        const b = (g, w) => {
            w === s && Object.prototype.hasOwnProperty.call(g, n) && Object.prototype.hasOwnProperty.call(g[n], "newValue") && v(g[n].newValue)
        }
        ;
        return chrome.storage.onChanged.addListener(b),
        () => {
            chrome.storage.onChanged.removeListener(b)
        }
    }
    , []);
    const E = M.useRef();
    E.current = b => {
        v(g => {
            const w = b instanceof Function ? b(g) : b;
            return q(n, w, s).then(y => {
                y || v(g)
            }
            ),
            w
        }
        )
    }
    ;
    const P = M.useCallback(b => E.current?.(b), []);
    return [o, P]
}
async function Pn(n, r="local") {
    try {
        return (await chrome.storage[r].get(n))?.[n]
    } catch (s) {
        x.error(`Error reading ${r} storage key "${n}":`, s);
        return
    }
}
async function q(n, r, s="local") {
    try {
        return await chrome.storage[s].set({
            [n]: r
        }),
        !0
    } catch (o) {
        return x.error(`Error setting ${s} storage key "${n}":`, o),
        !1
    }
}
const Z = en(S)
  , Tn = () => X(Z);
function jn() {
    const [n,r] = En("SETTINGS", Z, "local");
    return {
        settings: n,
        setSettings: r
    }
}
export {Dn as S, en as a, yn as b, jn as c, En as d, X as e, gn as f, Tn as u};
