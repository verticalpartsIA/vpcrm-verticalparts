import {P as c, N as I, u as $, g as B} from "./core-DMJFMrVN.js";
import {j as V, s as P, k as r, o as f, p as R, u as i, c as j, m as A, R as C, e as T, Z as D} from "../vendor-DIc2GtcL.js";
const E = {
    name: "NodeToolbar",
    compatConfig: {
        MODE: 3
    },
    inheritAttrs: !1
}
  , S = V({
    ...E,
    props: {
        nodeId: null,
        isVisible: {
            type: Boolean
        },
        position: {
            default: c.Top
        },
        offset: {
            default: 10
        },
        align: {
            default: "center"
        }
    },
    setup(h) {
        const o = h
          , g = P(I, null)
          , {viewportRef: m, viewport: y, getSelectedNodes: b, findNode: v} = $();
        function x(e, t, d, u, p) {
            let a = .5;
            p === "start" ? a = 0 : p === "end" && (a = 1);
            let l = [(e.x + e.width * a) * t.zoom + t.x, e.y * t.zoom + t.y - u]
              , n = [-100 * a, -100];
            switch (d) {
            case c.Right:
                l = [(e.x + e.width) * t.zoom + t.x + u, (e.y + e.height * a) * t.zoom + t.y],
                n = [0, -100 * a];
                break;
            case c.Bottom:
                l[1] = (e.y + e.height) * t.zoom + t.y + u,
                n[1] = 0;
                break;
            case c.Left:
                l = [e.x * t.zoom + t.x - u, (e.y + e.height * a) * t.zoom + t.y],
                n = [-100, -100 * a];
                break
            }
            return `translate(${l[0]}px, ${l[1]}px) translate(${n[0]}%, ${n[1]}%)`
        }
        const s = r( () => (Array.isArray(o.nodeId) ? o.nodeId : [o.nodeId || g || ""]).reduce( (e, t) => {
            const d = v(t);
            return d && e.push(d),
            e
        }
        , []))
          , z = r( () => typeof o.isVisible == "boolean" ? o.isVisible : s.value.length === 1 && s.value[0].selected && b.value.length === 1)
          , k = r( () => B(s.value))
          , w = r( () => Math.max(...s.value.map(e => (e.computedPosition.z || 1) + 1)))
          , N = r( () => ({
            position: "absolute",
            transform: x(k.value, y.value, o.position, o.offset, o.align),
            zIndex: w.value
        }));
        return (e, t) => (f(),
        R(D, {
            to: i(m),
            disabled: !i(m)
        }, [i(z) && i(s).length ? (f(),
        j("div", C({
            key: 0
        }, e.$attrs, {
            style: i(N),
            class: "vue-flow__node-toolbar"
        }), [A(e.$slots, "default")], 16)) : T("", !0)], 8, ["to", "disabled"]))
    }
});
export {S as D};
