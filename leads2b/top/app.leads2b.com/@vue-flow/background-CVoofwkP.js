import {u as C} from "./core-DMJFMrVN.js";
import {j as D, k as G, l as g, o as r, c as m, m as f, a as c, u as s, p as w, e as y, n as b, q as $} from "../vendor-DIc2GtcL.js";
var a = (e => (e.Lines = "lines",
e.Dots = "dots",
e))(a || {});
const k = function({dimensions: e, size: n, color: l}) {
    return $("path", {
        stroke: l,
        "stroke-width": n,
        d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
    })
}
  , p = function({radius: e, color: n}) {
    return $("circle", {
        cx: e,
        cy: e,
        r: e,
        fill: n
    })
};
a.Lines + "",
a.Dots + "";
const B = {
    [a.Dots]: "#81818a",
    [a.Lines]: "#eee"
}
  , L = ["id", "x", "y", "width", "height", "patternTransform"]
  , S = {
    key: 2,
    height: "100",
    width: "100"
}
  , M = ["fill"]
  , O = ["x", "y", "fill"]
  , V = {
    name: "Background",
    compatConfig: {
        MODE: 3
    }
}
  , F = D({
    ...V,
    props: {
        id: {},
        variant: {
            default: () => a.Dots
        },
        gap: {
            default: 20
        },
        size: {
            default: 1
        },
        lineWidth: {
            default: 1
        },
        patternColor: {},
        color: {},
        bgColor: {},
        height: {
            default: 100
        },
        width: {
            default: 100
        },
        x: {
            default: 0
        },
        y: {
            default: 0
        },
        offset: {
            default: 2
        }
    },
    setup(e) {
        const {id: n, viewport: l} = C()
          , o = G( () => {
            const [t,v] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap]
              , u = [t * l.value.zoom || 1, v * l.value.zoom || 1]
              , d = e.size * l.value.zoom
              , z = e.variant === a.Dots ? [d / e.offset, d / e.offset] : [u[0] / e.offset, u[1] / e.offset];
            return {
                scaledGap: u,
                offset: z,
                size: d
            }
        }
        )
          , i = g( () => `pattern-${n}${e.id ? `-${e.id}` : ""}`)
          , h = g( () => e.color || e.patternColor || B[e.variant || a.Dots]);
        return (t, v) => (r(),
        m("svg", {
            class: "vue-flow__background vue-flow__container",
            style: b({
                height: `${t.height > 100 ? 100 : t.height}%`,
                width: `${t.width > 100 ? 100 : t.width}%`
            })
        }, [f(t.$slots, "pattern-container", {
            id: i.value
        }, () => [c("pattern", {
            id: i.value,
            x: s(l).x % o.value.scaledGap[0],
            y: s(l).y % o.value.scaledGap[1],
            width: o.value.scaledGap[0],
            height: o.value.scaledGap[1],
            patternTransform: `translate(-${o.value.offset[0]},-${o.value.offset[1]})`,
            patternUnits: "userSpaceOnUse"
        }, [f(t.$slots, "pattern", {}, () => [t.variant === s(a).Lines ? (r(),
        w(s(k), {
            key: 0,
            size: t.lineWidth,
            color: h.value,
            dimensions: o.value.scaledGap
        }, null, 8, ["size", "color", "dimensions"])) : t.variant === s(a).Dots ? (r(),
        w(s(p), {
            key: 1,
            color: h.value,
            radius: o.value.size / t.offset
        }, null, 8, ["color", "radius"])) : y("", !0), t.bgColor ? (r(),
        m("svg", S, [c("rect", {
            width: "100%",
            height: "100%",
            fill: t.bgColor
        }, null, 8, M)])) : y("", !0)])], 8, L)]), c("rect", {
            x: t.x,
            y: t.y,
            width: "100%",
            height: "100%",
            fill: `url(#${i.value})`
        }, null, 8, O), f(t.$slots, "default", {
            id: i.value
        })], 4))
    }
});
export {F as _};
