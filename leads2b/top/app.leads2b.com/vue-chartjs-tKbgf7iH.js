import {bz as C, j as L, cv as O, q as P, cw as B, L as I, P as T, G as z, y as K, bp as m, M as R, bQ as U, cx as k, cy as G, cz as N, cA as w} from "./vendor-DIc2GtcL.js";
const S = {
    data: {
        type: Object,
        required: !0
    },
    options: {
        type: Object,
        default: () => ({})
    },
    plugins: {
        type: Array,
        default: () => []
    },
    datasetIdKey: {
        type: String,
        default: "label"
    },
    updateMode: {
        type: String,
        default: void 0
    }
}
  , Q = {
    ariaLabel: {
        type: String
    },
    ariaDescribedby: {
        type: String
    }
}
  , $ = {
    type: {
        type: String,
        required: !0
    },
    destroyDelay: {
        type: Number,
        default: 0
    },
    ...S,
    ...Q
}
  , E = B[0] === "2" ? (t, e) => Object.assign(t, {
    attrs: e
}) : (t, e) => Object.assign(t, e);
function u(t) {
    return w(t) ? m(t) : t
}
function F(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t;
    return w(e) ? new Proxy(t,{}) : t
}
function H(t, e) {
    const s = t.options;
    s && e && Object.assign(s, e)
}
function M(t, e) {
    t.labels = e
}
function j(t, e, s) {
    const o = [];
    t.datasets = e.map(n => {
        const a = t.datasets.find(c => c[s] === n[s]);
        return !a || !n.data || o.includes(a) ? {
            ...n
        } : (o.push(a),
        Object.assign(a, n),
        a)
    }
    )
}
function J(t, e) {
    const s = {
        labels: [],
        datasets: []
    };
    return M(s, t.labels),
    j(s, t.datasets, e),
    s
}
const V = L({
    props: $,
    setup(t, e) {
        let {expose: s, slots: o} = e;
        const n = I(null)
          , a = O(null);
        s({
            chart: a
        });
        const c = () => {
            if (!n.value)
                return;
            const {type: r, data: f, options: y, plugins: p, datasetIdKey: h} = t
              , b = J(f, h)
              , l = F(b, f);
            a.value = new C(n.value,{
                type: r,
                data: l,
                options: {
                    ...y
                },
                plugins: p
            })
        }
          , d = () => {
            const r = m(a.value);
            r && (t.destroyDelay > 0 ? setTimeout( () => {
                r.destroy(),
                a.value = null
            }
            , t.destroyDelay) : (r.destroy(),
            a.value = null))
        }
          , q = r => {
            r.update(t.updateMode)
        }
        ;
        return T(c),
        z(d),
        K([ () => t.options, () => t.data], (r, f) => {
            let[y,p] = r
              , [h,b] = f;
            const l = m(a.value);
            if (!l)
                return;
            let g = !1;
            if (y) {
                const i = u(y)
                  , x = u(h);
                i && i !== x && (H(l, i),
                g = !0)
            }
            if (p) {
                const i = u(p.labels)
                  , x = u(b.labels)
                  , D = u(p.datasets)
                  , A = u(b.datasets);
                i !== x && (M(l.config.data, i),
                g = !0),
                D && D !== A && (j(l.config.data, D, t.datasetIdKey),
                g = !0)
            }
            g && R( () => {
                q(l)
            }
            )
        }
        , {
            deep: !0
        }),
        () => P("canvas", {
            role: "img",
            ariaLabel: t.ariaLabel,
            ariaDescribedby: t.ariaDescribedby,
            ref: n
        }, [P("p", {}, [o.default ? o.default() : ""])])
    }
});
function v(t, e) {
    return C.register(e),
    L({
        props: S,
        setup(s, o) {
            let {expose: n} = o;
            const a = O(null)
              , c = d => {
                a.value = d == null ? void 0 : d.chart
            }
            ;
            return n({
                chart: a
            }),
            () => P(V, E({
                ref: c
            }, {
                type: t,
                ...s
            }))
        }
    })
}
const X = v("bar", U)
  , Y = v("doughnut", k)
  , Z = v("line", G)
  , _ = v("pie", N);
export {X as B, Y as D, Z as L, _ as P, v as c};
