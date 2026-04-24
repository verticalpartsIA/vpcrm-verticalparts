import {a1 as x, af as k, k as l, r as t, o as s, c as r, F as y, f as T, p, H as a, b as o} from "../../vendor-DIc2GtcL.js";
const h = {
    class: "d-flex flex-wrap justify-content-center"
}
  , D = {
    __name: "MostUsedTemplates",
    emits: ["selectTemplate"],
    setup(v, {emit: m}) {
        const d = m
          , n = k()
          , i = l( () => n.getters["messaging/template/loadingMostUsedTemplates"])
          , _ = l( () => n.getters["messaging/template/mostUsedTemplates"]);
        return (C, b) => {
            const c = t("DsTypography")
              , g = t("DsTooltip")
              , u = t("DsCard")
              , f = t("DsIcon");
            return s(),
            r("div", h, [i.value ? (s(),
            p(f, {
                key: 1,
                icon: "loader-4-line ds-spinner",
                class: "fs-9 p-3 text-green-normal"
            })) : (s(!0),
            r(y, {
                key: 0
            }, T(_.value, e => (s(),
            p(u, {
                key: e.id,
                class: "template-card border-green-normal m-2 cursor-pointer col-5",
                style: {
                    "white-space": "break-spaces"
                },
                onClick: w => d("selectTemplate", e)
            }, {
                header: a( () => [o(g, {
                    class: "w-100",
                    text: e.template.name
                }, {
                    default: a( () => [o(c, {
                        class: "template-card__title",
                        tag: "span",
                        text: e.template.name,
                        fontSize: "4",
                        fontWeight: "bold"
                    }, null, 8, ["text"])]),
                    _: 2
                }, 1032, ["text"])]),
                default: a( () => [o(c, {
                    class: "template-card__message",
                    tag: "span",
                    text: e.template.example,
                    fontSize: "3",
                    color: "gray-800"
                }, null, 8, ["text"])]),
                _: 2
            }, 1032, ["onClick"]))), 128))])
        }
    }
}
  , U = x(D, [["__scopeId", "data-v-65701adc"]]);
export {U as M};
