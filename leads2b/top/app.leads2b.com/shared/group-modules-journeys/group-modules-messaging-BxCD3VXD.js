import {L as x, aj as St, k as Z, o as D, c as F, a as S, m as Ye, n as Fe, b as a, R as le, u as C, a1 as ge, as as mt, r as m, F as fe, f as Te, d as he, Q as xt, p as E, aa as xe, H as h, W as Me, t as ye, _ as Je, a2 as Ne, e as H, P as Ve, ab as _e, y as We, a6 as kt, a9 as it, w as Le, af as ze, M as Ee, ag as Pt, S as ke, bu as Vt, a0 as pt, bk as ft, b1 as zt, i as vt, bg as At, co as Bt, aL as Mt, D as gt, a3 as at, U as Ue, bj as Et, a5 as ht, G as jt, av as Ot} from "../../vendor-DIc2GtcL.js";
import {pU as It, jK as Ut, g8 as et, cs as Nt, M as Rt, cp as dt, h as Lt, d4 as J, u as Xe, b6 as Wt, pV as Ht, pW as Ft, R as qt, f as je, da as st, g9 as Gt, ga as Qt, gb as Yt, gc as Jt, cb as Kt, a_ as Xt, pX as Zt, bq as ea, pY as ta, x as rt, mn as Ze, mo as Qe, dJ as bt, g6 as yt, ko as aa, g4 as la, g5 as na, g7 as oa, t as ia, mk as sa, aZ as da, pZ as ra} from "../../common-CYe7udOS.js";
import {h as ua, i as ca, P as nt, _ as Re, f as Ce, u as qe, M as ma, b as pa} from "../../@vue-flow/core-DMJFMrVN.js";
import {_ as fa} from "../../@vue-flow/background-CVoofwkP.js";
import {D as va} from "../../@vue-flow/node-toolbar-DciS3HMA.js";
const ga = {
    class: "workflows-wrapper design-system h-100"
}
  , Vs = {
    __name: "BaseWorkflowListPage",
    props: {
        newWorkflowModalProps: {
            type: Object,
            default: () => ({
                title: "Nova jornada de automação",
                labelText: "Digite o nome da jornada",
                buttonText: "Criar jornada"
            })
        }
    },
    setup(e, {expose: t}) {
        const n = e
          , d = x(null)
          , l = St(d)
          , u = x(!1)
          , p = Z( () => ({
            maxHeight: `calc(100% - ${l.height.value || 0}px)`,
            height: `calc(100% - ${l.height.value || 0}px)`
        }));
        async function r() {
            u.value = !0
        }
        return t({
            showNewJourneyModal: r
        }),
        (c, y) => (D(),
        F("div", ga, [S("div", {
            ref_key: "header",
            ref: d
        }, [Ye(c.$slots, "default")], 512), S("div", {
            class: "p-3 pb-0",
            ref: "datatable",
            style: Fe(p.value)
        }, [Ye(c.$slots, "view")], 4), a(C(It), le(n.newWorkflowModalProps, {
            show: u.value,
            onClose: y[0] || (y[0] = o => u.value = !1)
        }), null, 16, ["show"])]))
    }
}
  , ha = {
    class: "list__header pt-2 px-3 bg-white d-flex f-justify-space-between border-bottom"
}
  , ba = {
    class: "nav nav-tabs"
}
  , ya = {
    class: "pb-2 d-flex"
}
  , wa = {
    __name: "BaseWorkflowHeader",
    props: {
        tabs: {
            type: Array,
            default: () => []
        },
        searchInputProps: {
            type: Object,
            default: () => {}
        },
        createButtonProps: {
            type: Object,
            default: () => {}
        }
    },
    emits: ["create"],
    setup(e, {emit: t}) {
        const n = t
          , d = mt()
          , l = e;
        function u(p) {
            d.replace({
                name: p.route,
                params: p.routeParams
            })
        }
        return (p, r) => {
            const c = m("DsButton")
              , y = m("DsInput");
            return D(),
            F("div", ha, [S("ul", ba, [(D(!0),
            F(fe, null, Te(l.tabs, o => (D(),
            F("li", {
                class: he(["nav-item me-4", {
                    active: o.active
                }]),
                key: o.name
            }, [a(c, {
                text: o.text,
                "data-testid": o.dataTestId,
                variant: "link",
                class: "px-0 bold",
                onClick: b => u(o)
            }, null, 8, ["text", "data-testid", "onClick"])], 2))), 128))]), S("div", ya, [a(y, le({
                inputClass: "bg-white",
                ref: "search",
                icon: "search-line",
                resizeByPlaceholder: ""
            }, l.searchInputProps, {
                "onUpdate:modelValue": r[0] || (r[0] = o => n("search", o))
            }), null, 16), a(c, le({
                text: p.$t("journey.tabs.create_journey"),
                "data-testid": "btn-flow-create",
                class: "ms-2",
                size: "md",
                variant: "green-normal",
                type: "button",
                icon: "add-circle-line",
                onClick: r[1] || (r[1] = o => {
                    n("create")
                }
                )
            }, l.createButtonProps), null, 16, ["text"])])])
        }
    }
}
  , zs = ge(wa, [["__scopeId", "data-v-cfe8d426"]])
  , _a = "/no-data-CT_HgMjy.svg"
  , Da = {
    __name: "CustomEdge",
    props: {
        id: {
            type: String,
            required: !0
        },
        sourceX: {
            type: Number,
            required: !0
        },
        sourceY: {
            type: Number,
            required: !0
        },
        targetX: {
            type: Number,
            required: !0
        },
        targetY: {
            type: Number,
            required: !0
        },
        sourcePosition: {
            type: String,
            required: !0
        },
        targetPosition: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !1
        },
        markerEnd: {
            type: String,
            required: !1
        },
        style: {
            type: Object,
            required: !1
        },
        label: {
            type: String,
            required: !1
        },
        offsetX: {
            type: Number,
            required: !1,
            default: 0
        },
        offsetY: {
            type: Number,
            required: !1,
            default: 0
        }
    },
    setup(e) {
        const t = xt()
          , n = e
          , d = Z( () => {
            var l, u, p, r;
            return ua({
                ...n,
                centerX: (u = (l = n.data) == null ? void 0 : l.center) == null ? void 0 : u.x,
                centerY: (r = (p = n.data) == null ? void 0 : p.center) == null ? void 0 : r.y
            })
        }
        );
        return (l, u) => (D(),
        E(C(ca), le({
            ...C(t),
            ...n
        }, {
            path: d.value[0],
            labelX: d.value[1] + e.offsetX,
            labelY: d.value[2] + e.offsetY
        }), null, 16, ["path", "labelX", "labelY"]))
    }
}
  , Ta = {
    class: "text-justify"
}
  , $a = {
    class: "text-justify bg-blue-light p-2 mt-2 rounded-3"
}
  , Ca = {
    class: "list-style"
}
  , Sa = {
    class: "text-justify"
}
  , xa = {
    __name: "ConfirmSyncedEmailModal",
    props: {
        show: Boolean
    },
    emits: ["hideModal", "confirm", "close"],
    setup(e) {
        const {t} = xe();
        return (n, d) => {
            const l = m("DsIcon")
              , u = m("DsTypography")
              , p = m("DsButton")
              , r = m("DsModal");
            return D(),
            E(r, {
                show: e.show,
                size: "md",
                onHide: d[2] || (d[2] = c => n.$emit("close")),
                appendToBody: ""
            }, {
                header: h( () => [S("div", null, [a(l, {
                    icon: "mail-send-line",
                    fontSize: "4",
                    class: "me-2"
                }), a(u, {
                    tag: "span",
                    fontSize: "4",
                    fontWeight: "semibold",
                    text: C(t)("journey.modals.synced_email.title")
                }, null, 8, ["text"])])]),
                body: h( () => [S("div", Ta, [a(u, {
                    fontSize: "2",
                    color: "gray",
                    class: "mb-2 lh-sm",
                    innerHTML: C(t)("journey.modals.synced_email.description_1")
                }, null, 8, ["innerHTML"]), a(u, {
                    fontSize: "2",
                    color: "gray",
                    class: "mb-1 lh-sm",
                    innerHTML: C(t)("journey.modals.synced_email.description_2")
                }, null, 8, ["innerHTML"])]), S("div", $a, [S("ul", Ca, [S("li", null, [a(u, {
                    fontSize: "2",
                    color: "gray-700",
                    class: "mb-1 lh-sm",
                    text: C(t)("journey.modals.synced_email.list.message_1")
                }, null, 8, ["text"])]), S("li", null, [a(u, {
                    fontSize: "2",
                    color: "gray-700",
                    class: "mb-1 lh-sm",
                    text: C(t)("journey.modals.synced_email.list.message_2")
                }, null, 8, ["text"])]), S("li", null, [a(u, {
                    fontSize: "2",
                    color: "gray-700",
                    class: "mb-1 lh-sm",
                    innerHTML: C(t)("journey.modals.synced_email.list.message_3")
                }, null, 8, ["innerHTML"])])])]), S("div", Sa, [a(u, {
                    fontSize: "2",
                    color: "gray",
                    class: "mt-2 mb-0 lh-sm",
                    innerHTML: C(t)("journey.modals.synced_email.footer_message")
                }, null, 8, ["innerHTML"])])]),
                footer: h( () => [a(p, {
                    text: C(t)("confirm"),
                    class: "w-100",
                    disabled: n.loading,
                    loading: n.loading,
                    onClick: d[0] || (d[0] = c => n.$emit("confirm"))
                }, null, 8, ["text", "disabled", "loading"]), a(p, {
                    text: C(t)("cancel"),
                    variant: "transparent",
                    class: "w-100",
                    disabled: n.loading,
                    onClick: d[1] || (d[1] = c => n.$emit("close"))
                }, null, 8, ["text", "disabled"])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , ka = ge(xa, [["__scopeId", "data-v-1e2d3b21"]])
  , Pa = {
    emits: ["close", "templatesUpdated"],
    name: "modal-template",
    components: {
        EmailTemplateForm: Ut
    },
    props: {
        id: {
            type: null
        },
        show: {
            type: Boolean
        },
        disableFields: {
            type: Object,
            default() {
                return {
                    name: {
                        value: !1
                    },
                    description: {
                        value: !1
                    },
                    subject: {
                        value: !1
                    },
                    content: {
                        value: !1
                    }
                }
            }
        }
    },
    data() {
        return {
            loading: !1,
            triggerSave: 0
        }
    },
    computed: {
        title() {
            return this.id ? this.$t("templates.title_edit") : this.$t("templates.title_create")
        }
    },
    methods: {
        notifyAction(e) {
            this.$emit("templatesUpdated", e),
            this.$emit("close")
        }
    }
}
  , Va = {
    class: "d-flex justify-content-end"
};
function za(e, t, n, d, l, u) {
    const p = m("email-template-form")
      , r = m("DsButton")
      , c = m("DsModal");
    return D(),
    E(c, {
        show: n.show,
        size: "lg",
        title: u.title,
        appendToBody: "",
        scrollable: "",
        onHide: t[4] || (t[4] = y => e.$emit("close"))
    }, {
        body: h( () => [a(p, {
            id: n.id,
            triggerSave: l.triggerSave,
            disableFields: n.disableFields,
            onEdited: t[0] || (t[0] = y => u.notifyAction(y)),
            onSaved: t[1] || (t[1] = y => u.notifyAction(y))
        }, null, 8, ["id", "triggerSave", "disableFields"])]),
        footer: h( () => [S("div", Va, [a(r, {
            variant: "green-normal",
            onClick: t[2] || (t[2] = y => l.triggerSave += 1)
        }, {
            default: h( () => [Me(ye(e.$t("save")), 1)]),
            _: 1
        }), a(r, {
            variant: "outline-green-normal",
            onClick: t[3] || (t[3] = y => e.$emit("close"))
        }, {
            default: h( () => [Me(ye(e.$t("close")), 1)]),
            _: 1
        })])]),
        _: 1
    }, 8, ["show", "title"])
}
const Aa = ge(Pa, [["render", za], ["__scopeId", "data-v-64753539"]])
  , Ba = {
    emits: ["showTemplateModal", "updateDescription", "updateAction", "close", "updateData"],
    name: "action-email-modal",
    components: {
        TimeInput: et,
        ModalBeeFree: Nt,
        ModalTemplate: Aa,
        ModalGallery: Rt,
        ConfirmSyncedEmailModal: ka
    },
    props: {
        show: Boolean,
        action: Object,
        domains: Array,
        leadVariables: Array,
        editable: Boolean
    },
    data() {
        const e = {
            userid: null,
            syncedEmail: !1,
            accountIndex: null,
            senderName: "",
            senderAddress: "",
            subject: "",
            domain: "",
            template: "",
            dynamicPrefix: !1,
            weekdays: [{
                active: !1,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !1,
                start: "00:00",
                end: "23:59"
            }]
        };
        return {
            default: e,
            actionData: e,
            subject: "",
            loadingTemplates: !1,
            selectedTemplate: null,
            templates: [],
            selectedRecipientType: "main_contact",
            userVariables: [{
                value: "name",
                label: this.$t("flow.selected_actions_texts.email.name")
            }, {
                value: "firstName",
                label: this.$t("flow.selected_actions_texts.email.first_name")
            }, {
                value: "lastName",
                label: this.$t("flow.selected_actions_texts.email.last_name")
            }],
            recipientTypes: [{
                value: "main_contact",
                label: this.$t("flow.selected_actions_texts.email.main_contact")
            }, {
                value: "fixed_email",
                label: this.$t("flow.selected_actions_texts.email.fixed_email")
            }],
            weekdaysList: this.$tm("dates.weekdays_short"),
            dynamicPrefix: !1,
            showModalGallery: !1,
            showTemplateModal: !1,
            showModalTemplateBuilder: !1,
            useSyncedEmail: !1,
            showConfirmSyncedEmail: !1,
            disableTemplateFields: {
                name: {
                    value: !1
                },
                description: {
                    value: !1
                },
                subject: {
                    value: !0,
                    info: this.$t("flow.messages.info.disabled_subject")
                },
                content: {
                    value: !1
                }
            }
        }
    },
    computed: {
        ...Je(["user", "showSyncedEmail", "showWorkflowSyncedEmail"]),
        ...Je({
            account: "mail/accounts/account"
        }),
        ...Je({
            syncedEmailConfirmed: "flows/syncedEmailConfirmed"
        }),
        modalStyle() {
            return this.showModalGallery ? {
                display: "none !important"
            } : {}
        },
        getAccountUrl() {
            return this.$router.resolve({
                name: "mail.activation"
            }).href
        },
        selectedDomain: {
            get() {
                var e;
                return (e = this.domains.find(t => t.value === this.actionData.domain)) == null ? void 0 : e.value
            },
            set(e) {
                this.setDomain(e)
            }
        },
        senderAddressRules() {
            let e = /^[a-zA-Z0-9_.+-]+$/;
            return this.dynamicPrefix && (e = /^[a-zA-Z0-9{}}_.+-]+$/),
            {
                required: !0,
                regex: e
            }
        },
        emailSample() {
            if (!this.selectedDomain)
                return "";
            let e = this.actionData.senderAddress;
            if (this.dynamicPrefix) {
                const t = this.user.name.split(" ");
                e = e.replace("{firstName}", t[0].toLowerCase()),
                e = e.replace("{lastName}", (t[1] || "").toLowerCase()),
                e.endsWith(".") && (e = e.slice(0, -1)),
                e = `${this.$t("flow.selected_actions_labels.email.dynamic_prefix_description")}. ${this.$t("example")}: ${e}`
            } else
                e = `${this.$t("example")}: ${e}`;
            return `${e}@${this.actionData.domain}`
        }
    },
    async mounted() {
        this.selectedRecipientType = this.recipientTypes[0].value,
        Object.keys(this.action).length ? (this.actionData = {
            ...this.actionData,
            ...this.action
        },
        this.dynamicPrefix = this.actionData.dynamicPrefix,
        this.subject = this.action.subject || "",
        this.syncedEmail = this.actionData.syncedEmail || !1,
        this.useSyncedEmail = this.actionData.syncedEmail || !1,
        this.actionData.recipientType ? this.selectedRecipientType = this.actionData.recipientType : this.selectedRecipientType = this.recipientTypes[0].value,
        this.action.template ? await this.setTemplate() : this.loadEmailTemplates(),
        this.$nextTick( () => {
            this.$emit("updateData", this.actionData, !0)
        }
        )) : (this.$emit("updateData", this.actionData, !0),
        this.loadEmailTemplates())
    },
    methods: {
        setDomain(e) {
            typeof e == "object" && (this.actionData.domain = (e == null ? void 0 : e.value) || null)
        },
        handleRecipientTypeInput(e) {
            this.selectedRecipientType = e
        },
        addToSubject(e) {
            if (e) {
                const t = `${this.subject || ""} {{${e}}}`;
                this.subject = t
            }
        },
        addToSenderName(e) {
            if (e) {
                let t = this.actionData.senderName || "";
                t && (t += " "),
                t += `{{${e}}}`,
                this.actionData.senderName = t
            }
        },
        editTemplate() {
            this.selectedTemplate.json_content ? this.showModalTemplateBuilder = !0 : this.showTemplateModal = !0
        },
        updateTemplate(e, t) {
            if (this.selectedTemplate = e,
            this.selectedTemplate) {
                let n = this.subject || "";
                t && (n = this.selectedTemplate.subject || ""),
                this.subject = n
            }
        },
        loadEmailTemplates() {
            this.templates.length || (this.loadingTemplates = !0,
            dt().then(e => {
                this.templates = e.map(t => ({
                    ...t,
                    label: t.name,
                    value: t.id
                }))
            }
            ).finally( () => {
                this.loadingTemplates = !1
            }
            ))
        },
        setTemplate() {
            return dt().then(e => {
                this.templates = e,
                this.selectedTemplate = this.templates.find(t => t.id === this.action.template),
                this.updateTemplate(this.selectedTemplate)
            }
            )
        },
        save() {
            var t;
            if (this.useSyncedEmail && !this.syncedEmailConfirmed) {
                this.showConfirmSyncedEmail = !0;
                return
            }
            let e = this.actionData.recipientAddress;
            this.selectedRecipientType === "main_contact" && (e = ""),
            this.$emit("updateData", {
                subject: this.subject,
                senderName: this.actionData.senderName.trim(),
                senderAddress: this.actionData.senderAddress,
                domain: this.actionData.domain,
                dynamicPrefix: this.dynamicPrefix,
                recipientAddress: e,
                recipientType: this.selectedRecipientType,
                template: this.selectedTemplate.id,
                weekdays: this.actionData.weekdays,
                syncedEmail: this.useSyncedEmail,
                accountIndex: ((t = this.account) == null ? void 0 : t.accountIndex) ?? null,
                userId: this.user.id
            })
        },
        async validate() {
            var n;
            const {valid: e} = await this.$refs.observer.validate()
              , t = this.useSyncedEmail && ((n = this.account) == null ? void 0 : n.accountIndex) == null;
            return e && !t
        },
        async saveBeeTemplate() {
            const e = {
                id: this.selectedTemplate.id,
                save: !0,
                jsonContent: this.selectedTemplate.json_content,
                name: this.selectedTemplate.name,
                subject: this.selectedTemplate.subject,
                description: this.selectedTemplate.description
            };
            await Lt(this.selectedTemplate.id, e),
            this.showModalTemplateBuilder = !1,
            this.$notification.notifySuccess("templates.messages.success.edit")
        },
        setDynamicPrefix(e) {
            this.actionData.senderAddress = e ? "{firstName}.{lastName}" : ""
        },
        handleSyncedEmailModalReturn(e) {
            this.$store.commit("flows/setSyncedEmailConfirmed", e),
            this.showConfirmSyncedEmail = !1
        }
    }
}
  , Ma = {
    class: "mt-2 mb-1"
}
  , Ea = {
    class: "mb-2 d-flex"
}
  , ja = {
    class: "bg-white shadow p-3 rounded max-vh-20 overflow-auto ds-scrollbar"
}
  , Oa = ["data-testid", "onClick"]
  , Ia = {
    class: "d-flex mb-2"
}
  , Ua = {
    class: "bg-white shadow p-3 rounded max-vh-20 overflow-auto ds-scrollbar"
}
  , Na = ["data-testid", "onClick"]
  , Ra = {
    key: 0,
    class: "d-flex align-items-center mt-3 mb-2"
}
  , La = {
    key: 0
}
  , Wa = {
    key: 1,
    class: "d-flex align-items-center gap-1 mt-1 mb-1",
    "data-testid": "no-account-error"
}
  , Ha = {
    key: 2,
    class: "d-flex align-items-center mt-3 mb-2"
}
  , Fa = {
    key: 3,
    class: "mb-2"
}
  , qa = {
    class: "d-flex mb-1"
}
  , Ga = {
    class: "flex-fill"
}
  , Qa = {
    class: "d-flex align-items-end mx-2"
}
  , Ya = {
    class: "w-50"
}
  , Ja = {
    href: "https://ajuda.leads2b.com/pt-BR/articles/9786673-como-cadastrar-um-dominio-ou-subdominio-na-leads2b",
    class: "ms-2 fw-semibold text-blue-normal text-decoration-underline fs-2",
    target: "_blank"
}
  , Ka = {
    class: "d-flex align-items-center mt-3 mb-1"
}
  , Xa = {
    class: "d-flex"
}
  , Za = {
    key: 4,
    class: "mt-2"
}
  , el = {
    class: "d-flex justify-content-center align-items-center timer-checkbox"
}
  , tl = {
    class: "d-flex mb-2"
}
  , al = {
    class: "d-flex w-100"
};
function ll(e, t, n, d, l, u) {
    var L, N;
    const p = m("DsTypography")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsSelect")
      , o = m("Field")
      , b = m("DsButton")
      , v = m("DsInput")
      , s = m("DsParagraph")
      , f = m("DsDropdown")
      , g = m("DsCheckbox")
      , _ = m("DsRadio")
      , i = m("time-input")
      , T = m("Form")
      , w = m("DsModal")
      , P = m("ModalGallery")
      , k = m("ModalTemplate")
      , V = m("ModalBeeFree")
      , R = m("ConfirmSyncedEmailModal");
    return D(),
    F("div", null, [a(w, {
        size: "lg",
        title: e.$t("journey.modals.action_email.title"),
        style: Fe(u.modalStyle),
        show: n.show,
        appendToBody: "",
        scrollable: "",
        alwaysRender: "",
        onHide: t[15] || (t[15] = oe => e.$emit("close"))
    }, {
        body: h( () => [a(T, {
            ref: "observer",
            class: "bg-white design-system"
        }, {
            default: h( () => {
                var oe, re, Pe;
                return [a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    class: "mb-1",
                    text: e.$t("flow.selected_actions_labels.email.email_template")
                }, null, 8, ["text"]), a(c, {
                    text: e.$t("journey.information_icons.email_template"),
                    placement: "top-end",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "fw-normal information-tooltip"
                }, {
                    default: h( () => [a(r, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"]), a(o, {
                    modelValue: l.selectedTemplate,
                    "onUpdate:modelValue": t[1] || (t[1] = W => l.selectedTemplate = W),
                    rules: "required",
                    name: "template"
                }, {
                    default: h( ({errors: W, componentField: K}) => [a(y, le(K, {
                        "data-testid": "multiselect-template",
                        hasError: W.length > 0,
                        options: l.templates,
                        loading: l.loadingTemplates,
                        placeholder: e.$t("select"),
                        useSelectionLabels: !1,
                        disabled: !n.editable,
                        filterable: "",
                        class: "flex-fill me-2",
                        trackBy: "id",
                        label: "name",
                        "onUpdate:modelValue": t[0] || (t[0] = G => u.updateTemplate(G, !0))
                    }), null, 16, ["hasError", "options", "loading", "placeholder", "disabled"])]),
                    _: 1
                }, 8, ["modelValue"]), S("div", Ma, [a(b, {
                    disabled: !n.editable,
                    size: "sm",
                    class: "me-2",
                    onClick: t[2] || (t[2] = Ne(W => l.showModalGallery = !0, ["prevent"]))
                }, {
                    default: h( () => [Me(ye(e.$t("flow.actions.email.new_template")), 1)]),
                    _: 1
                }, 8, ["disabled"]), a(b, {
                    size: "sm",
                    variant: "outline-green-normal",
                    disabled: !l.selectedTemplate || !n.editable,
                    onClick: Ne(u.editTemplate, ["prevent"])
                }, {
                    default: h( () => [Me(ye(e.$t("flow.actions.email.edit_template")), 1)]),
                    _: 1
                }, 8, ["disabled", "onClick"])]), a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    class: "mb-1",
                    text: e.$t("flow.selected_actions_labels.email.subject")
                }, null, 8, ["text"]), a(c, {
                    text: e.$t("journey.information_icons.subject"),
                    placement: "top-start",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "col-4 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(r, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"]), S("div", Ea, [a(o, {
                    modelValue: l.subject,
                    "onUpdate:modelValue": t[3] || (t[3] = W => l.subject = W),
                    rules: "required",
                    name: "subject"
                }, {
                    default: h( ({errors: W, componentField: K}) => [a(v, le(K, {
                        type: "text",
                        class: "flex-fill me-2",
                        hasError: W.length > 0,
                        disabled: !n.editable,
                        placeholder: e.$t("flow.selected_actions_texts.email.subject_placeholder")
                    }), null, 16, ["hasError", "disabled", "placeholder"])]),
                    _: 1
                }, 8, ["modelValue"]), a(f, {
                    class: "d-inline-flex",
                    controlClass: "text-truncate",
                    placement: "bottom",
                    appendToBody: ""
                }, {
                    control: h( () => [a(b, {
                        text: e.$t("new_mail_template.modal.variables"),
                        disabled: !n.editable,
                        rightIcon: "arrow-down-s-line",
                        variant: "outline-green-normal",
                        onClick: t[4] || (t[4] = Ne( () => {}
                        , ["prevent"]))
                    }, null, 8, ["text", "disabled"])]),
                    container: h( () => [S("div", ja, [(D(!0),
                    F(fe, null, Te(n.leadVariables, (W, K) => (D(),
                    F("div", {
                        key: W[0],
                        "data-testid": `template-variable-${K}`,
                        class: "cursor-pointer",
                        onClick: G => u.addToSubject(W[0])
                    }, [a(s, {
                        text: W[2] ? W[1] : e.$t(`templates.variables.${W[0]}`),
                        size: "sm",
                        color: "gray-600",
                        class: "mb-1"
                    }, null, 8, ["text"])], 8, Oa))), 128))])]),
                    _: 1
                })]), a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    class: "mb-1",
                    text: e.$t("flow.selected_actions_labels.email.senders_name")
                }, null, 8, ["text"]), a(c, {
                    text: e.$t("journey.information_icons.sender_name"),
                    placement: "top-end",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "fw-normal information-tooltip"
                }, {
                    default: h( () => [a(r, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"]), S("div", Ia, [a(o, {
                    modelValue: l.actionData.senderName,
                    "onUpdate:modelValue": t[5] || (t[5] = W => l.actionData.senderName = W),
                    rules: "required",
                    name: "senderName"
                }, {
                    default: h( ({errors: W, componentField: K}) => [a(v, le(K, {
                        hasError: W.length > 0,
                        disabled: !n.editable,
                        type: "text",
                        class: "flex-fill me-2",
                        placeholder: e.$t("flow.selected_actions_labels.email.senders_name_placeholder")
                    }), null, 16, ["hasError", "disabled", "placeholder"])]),
                    _: 1
                }, 8, ["modelValue"]), a(f, {
                    class: "d-inline-flex",
                    controlClass: "text-truncate",
                    placement: "bottom",
                    appendToBody: ""
                }, {
                    control: h( () => [a(b, {
                        text: e.$t("new_mail_template.modal.variables"),
                        disabled: !n.editable,
                        rightIcon: "arrow-down-s-line",
                        variant: "outline-green-normal",
                        onClick: t[6] || (t[6] = Ne( () => {}
                        , ["prevent"]))
                    }, null, 8, ["text", "disabled"])]),
                    container: h( () => [S("div", Ua, [(D(!0),
                    F(fe, null, Te(l.userVariables, (W, K) => (D(),
                    F("div", {
                        key: W.value,
                        "data-testid": `sender-variable-${K}`,
                        onClick: G => u.addToSenderName(W.value)
                    }, [a(s, {
                        text: W.label,
                        size: "sm",
                        color: "gray-600",
                        class: "cursor-pointer mb-1"
                    }, null, 8, ["text"])], 8, Na))), 128))])]),
                    _: 1
                })]), e.showWorkflowSyncedEmail ? (D(),
                F("div", Ra, [a(g, {
                    label: e.$t("history.send_email.use_synced_email", {
                        email: (oe = e.account) == null ? void 0 : oe.emailAddress
                    }),
                    modelValue: l.useSyncedEmail,
                    "onUpdate:modelValue": t[7] || (t[7] = W => l.useSyncedEmail = W),
                    isSwitch: ""
                }, null, 8, ["label", "modelValue"]), (re = e.account) != null && re.emailAddress ? H("", !0) : (D(),
                F("div", La, [a(c, {
                    text: e.$t("flow.selected_actions_labels.email.connect_account_info"),
                    appendToBody: ""
                }, {
                    default: h( () => [a(b, {
                        tag: "a",
                        class: "fs-2 fw-semibold text-decoration-underline pe-0 text-green-normal",
                        variant: "link",
                        size: "sm",
                        href: u.getAccountUrl,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        text: e.$t("flow.selected_actions_labels.email.connect_account"),
                        disabled: null
                    }, null, 8, ["href", "text"])]),
                    _: 1
                }, 8, ["text"])]))])) : H("", !0), l.useSyncedEmail && ((Pe = e.account) == null ? void 0 : Pe.accountIndex) == null ? (D(),
                F("div", Wa, [a(r, {
                    icon: "error-warning-line",
                    class: "text-red-normal fs-3"
                }), a(p, {
                    tag: "span",
                    color: "red-normal",
                    fontSize: "2",
                    text: e.$t("flow.selected_actions_labels.email.no_synced_account")
                }, null, 8, ["text"])])) : H("", !0), l.useSyncedEmail ? H("", !0) : (D(),
                F("div", Ha, [a(g, {
                    modelValue: l.dynamicPrefix,
                    "onUpdate:modelValue": [t[8] || (t[8] = W => l.dynamicPrefix = W), u.setDynamicPrefix],
                    label: e.$t("flow.selected_actions_labels.email.dynamic_prefix"),
                    disabled: !n.editable,
                    labelClass: "fw-bold",
                    isSwitch: ""
                }, null, 8, ["modelValue", "label", "disabled", "onUpdate:modelValue"]), a(c, {
                    text: e.$t("journey.information_icons.prefix"),
                    class: "mb-1",
                    placement: "top-start",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "w-25 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(r, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])])), l.useSyncedEmail ? H("", !0) : (D(),
                F("div", Fa, [S("div", qa, [S("div", Ga, [a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    class: "mb-1",
                    text: e.$t("flow.selected_actions_labels.email.prefix")
                }, null, 8, ["text"]), a(o, {
                    modelValue: l.actionData.senderAddress,
                    "onUpdate:modelValue": t[9] || (t[9] = W => l.actionData.senderAddress = W),
                    rules: u.senderAddressRules,
                    name: "senderAddress"
                }, {
                    default: h( ({errors: W, componentField: K}) => [a(v, le(K, {
                        hasError: W.length > 0,
                        disabled: !n.editable,
                        type: "text",
                        placeholder: e.$t("journey.modals.type_address.title")
                    }), null, 16, ["hasError", "disabled", "placeholder"])]),
                    _: 1
                }, 8, ["modelValue", "rules"])]), S("div", Qa, [a(v, {
                    class: "small-input",
                    inputClass: "px-1",
                    value: "@",
                    disabled: ""
                })]), S("div", Ya, [a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    class: "mb-1",
                    text: e.$t("flow.selected_actions_labels.email.domain")
                }, null, 8, ["text"]), S("a", Ja, "(" + ye(e.$t("flow.selected_actions_texts.email.email_link")) + ")", 1), a(o, {
                    modelValue: u.selectedDomain,
                    "onUpdate:modelValue": [t[10] || (t[10] = W => u.selectedDomain = W), u.setDomain],
                    rules: l.useSyncedEmail ? null : "required",
                    name: "domain"
                }, {
                    default: h( ({errors: W, componentField: K}) => [a(y, le(K, {
                        class: "journey-email-domain__select",
                        hasError: W.length > 0,
                        disabled: !n.editable,
                        options: n.domains,
                        onSelect: u.setDomain
                    }), null, 16, ["hasError", "disabled", "options", "onSelect"])]),
                    _: 1
                }, 8, ["modelValue", "rules", "onUpdate:modelValue"])])]), a(p, {
                    tag: "span",
                    color: "gray",
                    fontSize: "2",
                    class: "mb-2",
                    text: u.emailSample
                }, null, 8, ["text"])])), S("div", Ka, [a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    text: e.$t("flow.selected_actions_labels.email.recipient_type")
                }, null, 8, ["text"]), a(c, {
                    text: e.$t("journey.information_icons.reciever"),
                    placement: "top-start",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "w-25 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(r, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]), S("div", Xa, [a(_, {
                    class: "me-2",
                    name: "recipientType",
                    modelValue: l.selectedRecipientType,
                    "onUpdate:modelValue": t[11] || (t[11] = W => l.selectedRecipientType = W),
                    label: l.recipientTypes[0].label,
                    inputValue: l.recipientTypes[0].value,
                    disabled: !n.editable
                }, null, 8, ["modelValue", "label", "inputValue", "disabled"]), a(_, {
                    class: "me-2",
                    name: "recipientType",
                    modelValue: l.selectedRecipientType,
                    "onUpdate:modelValue": t[12] || (t[12] = W => l.selectedRecipientType = W),
                    label: l.recipientTypes[1].label,
                    inputValue: l.recipientTypes[1].value,
                    disabled: !n.editable
                }, null, 8, ["modelValue", "label", "inputValue", "disabled"])]), l.selectedRecipientType === "fixed_email" ? (D(),
                F("div", Za, [a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    class: "mb-1",
                    text: e.$t("flow.selected_actions_labels.email.recipient_address")
                }, null, 8, ["text"]), a(o, {
                    modelValue: l.actionData.recipientAddress,
                    "onUpdate:modelValue": t[13] || (t[13] = W => l.actionData.recipientAddress = W),
                    rules: "required|email",
                    name: "recipientAddress"
                }, {
                    default: h( ({errors: W, componentField: K}) => [a(v, le(K, {
                        hasError: W.length > 0,
                        disabled: !n.editable,
                        type: "text",
                        placeholder: e.$t("journey.modals.mail_receiver")
                    }), null, 16, ["hasError", "disabled", "placeholder"])]),
                    _: 1
                }, 8, ["modelValue"])])) : H("", !0), a(p, {
                    tag: "label",
                    fontWeight: "bold",
                    class: "mt-3 mb-2",
                    fontSize: "2",
                    text: e.$t("flow.selected_actions_labels.email.schedule")
                }, null, 8, ["text"]), (D(!0),
                F(fe, null, Te(l.actionData.weekdays, (W, K) => (D(),
                F("div", {
                    key: K,
                    class: "d-flex align-items-center mb-2 ms-2"
                }, [S("div", el, [a(g, {
                    class: "timer-checkbox",
                    isSwitch: "",
                    modelValue: W.active,
                    "onUpdate:modelValue": G => W.active = G,
                    label: e.$rt(l.weekdaysList[K]),
                    checked: W.active,
                    disabled: !n.editable
                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "checked", "disabled"])]), S("div", tl, [a(i, {
                    modelValue: W.start,
                    "onUpdate:modelValue": G => W.start = G,
                    "data-testid": `weekday-start-${K}`,
                    name: `weekday-start-${K}`,
                    class: he([{
                        inactive: !W.active
                    }, "weekday__time me-3"]),
                    disabled: !W.active || !n.editable,
                    right: !0
                }, null, 8, ["modelValue", "onUpdate:modelValue", "data-testid", "name", "class", "disabled"]), a(i, {
                    modelValue: W.end,
                    "onUpdate:modelValue": G => W.end = G,
                    "data-testid": `weekday-end-${K}`,
                    name: `weekday-end-${K}`,
                    class: he([{
                        inactive: !W.active
                    }, "weekday__time"]),
                    disabled: !W.active || !n.editable,
                    right: !0
                }, null, 8, ["modelValue", "onUpdate:modelValue", "data-testid", "name", "class", "disabled"])])]))), 128))]
            }
            ),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", al, [a(b, {
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: Ne(u.save, ["prevent"])
        }, null, 8, ["text", "disabled", "onClick"]), a(b, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[14] || (t[14] = Ne(oe => e.$emit("close"), ["prevent"]))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["title", "style", "show"]), l.showModalGallery ? (D(),
    E(P, {
        key: 0,
        show: l.showModalGallery,
        onHideModal: t[16] || (t[16] = oe => l.showModalGallery = !1)
    }, null, 8, ["show"])) : H("", !0), l.showTemplateModal ? (D(),
    E(k, {
        key: 1,
        id: (L = l.selectedTemplate) == null ? void 0 : L.id,
        show: l.showTemplateModal,
        disableFields: l.disableTemplateFields,
        onClose: t[17] || (t[17] = oe => l.showTemplateModal = !1)
    }, null, 8, ["id", "show", "disableFields"])) : H("", !0), l.showModalTemplateBuilder ? (D(),
    E(V, {
        key: 2,
        id: (N = l.selectedTemplate) == null ? void 0 : N.id,
        currentData: l.selectedTemplate,
        onClose: t[18] || (t[18] = oe => l.showModalTemplateBuilder = !1),
        onSave: u.saveBeeTemplate
    }, null, 8, ["id", "currentData", "onSave"])) : H("", !0), a(R, {
        show: l.showConfirmSyncedEmail,
        onClose: t[19] || (t[19] = oe => u.handleSyncedEmailModalReturn(!1)),
        onConfirm: t[20] || (t[20] = oe => u.handleSyncedEmailModalReturn(!0))
    }, null, 8, ["show"])])
}
const nl = ge(Ba, [["render", ll], ["__scopeId", "data-v-e8482e79"]])
  , ol = {
    __name: "CustomNodeToolbar",
    props: {
        show: Boolean,
        dimensions: Object,
        node: Object,
        disableDelete: Boolean,
        disableEdit: Boolean,
        disableDrill: Boolean
    },
    emits: ["openConfig", "openDrillData"],
    setup(e) {
        const t = e
          , n = () => {
            J.$emit("removeNode", t.node)
        }
        ;
        return (d, l) => {
            const u = m("DsButton");
            return D(),
            E(C(va), {
                class: "mb-n2 d-flex flex-column",
                isVisible: e.show,
                position: C(nt).Right
            }, {
                default: h( () => [e.disableDelete ? H("", !0) : (D(),
                E(u, {
                    key: 0,
                    "data-testid": "delete-button",
                    icon: "delete-bin-7-line",
                    rounded: "circle",
                    variant: "outline-red-normal",
                    iconClass: "fs-4",
                    class: "mb-2",
                    onClick: n
                })), t.disableDrill ? H("", !0) : (D(),
                E(u, {
                    key: 1,
                    "data-testid": "edit-button",
                    icon: "bar-chart-2-line",
                    rounded: "circle",
                    variant: "outline-green-normal",
                    iconClass: "fs-4",
                    class: "mb-2",
                    onClick: l[0] || (l[0] = p => d.$emit("openDrillData"))
                })), t.disableEdit ? H("", !0) : (D(),
                E(u, {
                    key: 2,
                    "data-testid": "config-button",
                    icon: "settings-4-line",
                    rounded: "circle",
                    variant: "outline-green-normal",
                    iconClass: "fs-4",
                    onClick: l[1] || (l[1] = p => d.$emit("openConfig"))
                }))]),
                _: 1
            }, 8, ["isVisible", "position"])
        }
    }
}
  , il = {
    class: "d-flex justify-content-end"
}
  , sl = {
    class: "border border-gray-400 rounded-1"
}
  , dl = ["onClick"]
  , rl = ["onClick"]
  , ul = ["onClick"]
  , cl = ["onClick"]
  , ml = {
    __name: "DrillDataModal",
    props: {
        idVersion: [Number, String],
        steps: Array,
        workflowType: String
    },
    emits: ["close"],
    setup(e) {
        const {notifyError: t} = Xe()
          , n = e
          , d = mt()
          , l = x([{
            key: "id",
            visible: !1
        }, {
            key: "created_at",
            visible: !0,
            label: "Data de execução",
            sortable: !0,
            sort: "created_at"
        }, {
            key: "instance_email",
            label: "E-mail",
            visible: !0,
            sortable: !0,
            sort: "instance_email"
        }, {
            key: "phone",
            label: "Telefone",
            visible: !0,
            sortable: !0,
            sort: "phone"
        }, {
            key: "contact_id",
            label: "Cód. Negócio",
            visible: !0
        }])
          , u = x("")
          , p = x({
            column: null,
            value: null
        })
          , r = x(!1)
          , c = x([])
          , y = x({
            perPage: 10,
            page: 1
        })
          , o = x(0);
        function b() {
            r.value = !0;
            let i = null;
            p.value.column && (i = {
                column: p.value.column.key,
                value: p.value.value.value
            }),
            Ht({
                idVersion: n.idVersion,
                steps: n.steps,
                pagination: y.value,
                search: u.value,
                filters: {
                    type: n.workflowType
                },
                ...i && {
                    sorting: i
                }
            }).then(T => {
                c.value = T.data,
                o.value = T.total
            }
            ).finally( () => {
                r.value = !1
            }
            )
        }
        function v(i) {
            y.value = i,
            b()
        }
        function s(i) {
            p.value = {
                column: l.value.find(T => T.key === i.column),
                value: {
                    value: i.value
                }
            },
            b()
        }
        Ve( () => {
            b()
        }
        );
        const f = _e.debounce( () => {
            y.value.page = 1,
            b()
        }
        , 350);
        We( () => u.value, () => {
            f()
        }
        );
        async function g(i) {
            var T;
            try {
                if (!i.contact_type)
                    return;
                let w, P = (T = i == null ? void 0 : i.contact_type) == null ? void 0 : T.toLowerCase();
                if (P === "prospect" && (P = "list"),
                P === "contact") {
                    P = "customer";
                    const {id_customer: k} = await Ft(i.contact_id);
                    w = {
                        name: "customer.view",
                        params: {
                            id: k
                        }
                    }
                } else
                    P !== "customer" ? w = {
                        name: `deal.${P}`,
                        params: {
                            id: i.contact_id,
                            type: P
                        }
                    } : w = {
                        name: "customer.view",
                        params: {
                            id: i.contact_id
                        }
                    };
                d.push(w)
            } catch {
                t("journey.messages.error.redirect_error")
            }
        }
        function _(i) {
            return kt(i).format("L HH:mm:ss")
        }
        return (i, T) => {
            const w = m("DsInput")
              , P = m("DsTypography")
              , k = m("DsTable")
              , V = m("DsPagination")
              , R = m("DsModal");
            return D(),
            E(R, {
                show: !0,
                headerClass: "pb-2",
                titleSize: "md",
                size: "xl",
                title: "Instâncias",
                appendToBody: "",
                onHide: T[1] || (T[1] = L => i.$emit("close"))
            }, {
                body: h( () => [S("div", il, [a(w, {
                    modelValue: u.value,
                    "onUpdate:modelValue": T[0] || (T[0] = L => u.value = L),
                    placeholder: i.$t("search"),
                    "data-testid": "search-input",
                    class: "mb-2"
                }, null, 8, ["modelValue", "placeholder"])]), S("div", sl, [a(k, {
                    fieldOptions: l.value,
                    loading: r.value,
                    items: c.value,
                    sort: p.value,
                    onSort: s
                }, {
                    "cell(created_at)": h( ({row: L, data: N}) => [S("div", {
                        onClick: oe => g(L),
                        class: "cursor-pointer"
                    }, [a(P, {
                        fontSize: "2",
                        class: "mb-0",
                        text: _(N)
                    }, null, 8, ["text"])], 8, dl)]),
                    "cell(instance_email)": h( ({row: L, data: N}) => [S("div", {
                        onClick: oe => g(L),
                        class: "cursor-pointer"
                    }, [a(P, {
                        fontSize: "2",
                        class: "mb-0",
                        text: N
                    }, null, 8, ["text"])], 8, rl)]),
                    "cell(phone)": h( ({row: L}) => [S("div", {
                        onClick: N => g(L),
                        class: "cursor-pointer"
                    }, [a(P, {
                        fontSize: "2",
                        class: "mb-0",
                        text: C(Wt)(L.phone)
                    }, null, 8, ["text"])], 8, ul)]),
                    "cell(contact_id)": h( ({row: L}) => [S("div", {
                        onClick: N => g(L),
                        class: "cursor-pointer"
                    }, [a(P, {
                        fontSize: "2",
                        class: "mb-0",
                        text: L.contact_id
                    }, null, 8, ["text"])], 8, cl)]),
                    _: 1
                }, 8, ["fieldOptions", "loading", "items", "sort"]), a(V, {
                    class: "pe-6",
                    "data-testid": "pagination",
                    total: o.value,
                    pagination: y.value,
                    onChange: v
                }, null, 8, ["total", "pagination"])])]),
                _: 1
            })
        }
    }
}
  , Ke = {
    __name: "BaseNodeDescription",
    props: {
        description: String,
        descriptionColor: String,
        truncate: {
            type: Boolean,
            default: !0
        }
    },
    setup(e) {
        const t = e;
        return (n, d) => {
            const l = m("DsTypography")
              , u = it("tooltip");
            return Le((D(),
            E(l, {
                "data-testid": "node-description",
                fontSize: "2",
                tag: "span",
                class: he({
                    "text-truncate": t.truncate
                }),
                text: t.description,
                color: t.descriptionColor
            }, null, 8, ["class", "text", "color"])), [[u, t.description, void 0, {
                "bottom-start": !0
            }]])
        }
    }
}
  , pl = {
    key: 3,
    class: "d-flex ps-2"
}
  , fl = {
    key: 1,
    class: "d-flex flex-column ps-0 p-3"
}
  , vl = {
    __name: "BaseNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        handleTargetPosition: String,
        handleSourcePosition: String,
        baseColor: String,
        icon: String,
        hideTargetHandle: Boolean,
        hideSourceHandle: Boolean,
        disableDelete: Boolean,
        disableEdit: Boolean,
        iconColor: {
            type: String,
            default: "text-white"
        },
        title: String,
        titleColor: {
            type: String,
            default: "black"
        },
        description: String,
        descriptionColor: {
            type: String,
            default: "gray"
        },
        bodyPadding: {
            type: String,
            default: "p-3 ps-2"
        },
        bodyColor: {
            type: String,
            default: "bg-white"
        },
        shortTitle: {
            type: String,
            default: ""
        },
        valid: {
            type: Boolean,
            default: !0
        },
        alertMessage: String,
        node: Object,
        disableToolbar: {
            type: Boolean,
            default: !1
        },
        locked: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["openConfig", "isOpenDrillDataModal"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , l = ze()
          , u = Z( () => d.id ? `#${d.id.split("-")[1]}` : "")
          , p = Z( () => {
            var i;
            return (i = d.node) == null ? void 0 : i.selected
        }
        )
          , r = Z( () => d.draggable || d.locked)
          , c = Z( () => l.getters["flows/selectedVersion"])
          , y = Z( () => {
            var i;
            return (i = l.getters["flows/flowData"]) == null ? void 0 : i.type
        }
        )
          , o = Z( () => l.getters["flows/stepsCountData"] !== null)
          , b = Z( () => {
            const {node: i} = d;
            return i ? [i.id] : []
        }
        )
          , v = Z( () => {
            const i = ["p-0", "h-100", "d-flex", "flex-row", `bg-${d.baseColor}`, "rounded"];
            return o.value && i.push("statistic-node"),
            i
        }
        )
          , s = Z( () => {
            const i = l.getters["flows/stepsCountData"];
            return i && i[d.id] || 0
        }
        )
          , f = x(!1)
          , g = () => {
            o.value && (f.value = !0,
            n("isOpenDrillDataModal"))
        }
          , _ = Z( () => l.getters["flows/isLoadingNodes"]);
        return Ve(async () => {
            var i;
            (i = d.node) != null && i.dropped && (await Ee(),
            n("openConfig"))
        }
        ),
        (i, T) => {
            const w = m("DsIcon")
              , P = m("DsSkeletonItem")
              , k = m("DsTypography")
              , V = m("DsCard")
              , R = it("tooltip");
            return D(),
            F("div", null, [a(V, {
                class: he(["process-node rounded", {
                    "statistic-node": o.value,
                    minimized: e.minimized,
                    "compact-node": r.value
                }]),
                bodyClass: v.value,
                draggable: e.draggable && !e.locked
            }, {
                default: h( () => {
                    var L;
                    return [e.disableToolbar ? H("", !0) : (D(),
                    E(C(ol), {
                        key: 0,
                        "data-testid": "node-toolbar",
                        show: p.value,
                        dimensions: (L = e.node) == null ? void 0 : L.dimensions,
                        node: e.node,
                        disableDelete: e.disableDelete || o.value,
                        disableEdit: e.disableEdit,
                        disableDrill: !o.value,
                        onOpenConfig: T[0] || (T[0] = N => {
                            i.$emit("openConfig"),
                            e.node.selected = !1
                        }
                        ),
                        onOpenDrillData: g
                    }, null, 8, ["show", "dimensions", "node", "disableDelete", "disableEdit", "disableDrill"])), e.locked ? Le((D(),
                    E(w, {
                        key: 1,
                        class: "node-locked fs-4 text-yellow-dark bg-yellow-light border border-yellow-dark rounded-circle",
                        icon: "lock-line"
                    }, null, 512)), [[R, "Esta ação não está habilitada em seu plano atual", void 0, {
                        "top-start": !0
                    }]]) : H("", !0), !e.valid && !e.draggable ? Le((D(),
                    E(w, {
                        key: 2,
                        "data-testid": "node-alert",
                        icon: "alert-line",
                        class: "node-alert fs-4 text-yellow-dark bg-yellow-light border border-yellow-dark rounded-circle"
                    }, null, 512)), [[R, e.alertMessage || "Campos inválidos", void 0, {
                        "top-start": !0
                    }]]) : H("", !0), Ye(i.$slots, "handleTarget", {}, () => [!e.draggable && !e.hideTargetHandle ? (D(),
                    E(C(Re), {
                        key: 0,
                        type: "target",
                        position: e.handleTargetPosition,
                        connectable: !1
                    }, null, 8, ["position"])) : H("", !0)], !0), Ye(i.$slots, "handleSource", {}, () => [!e.draggable && !e.hideSourceHandle ? (D(),
                    E(C(Re), {
                        key: 0,
                        type: "source",
                        position: e.handleSourcePosition,
                        connectable: !1
                    }, null, 8, ["position"])) : H("", !0)], !0), e.draggable ? (D(),
                    F("div", pl, [a(w, {
                        class: "fs-6 text-white",
                        icon: "drag-and-drop"
                    })])) : H("", !0), S("div", {
                        class: he(["d-flex p-2 rounded-start", {
                            "statistic-node": s.value !== void 0
                        }])
                    }, [a(w, {
                        "data-testid": "node-icon",
                        icon: e.icon,
                        class: he(["fs-4", e.iconColor])
                    }, null, 8, ["icon", "class"])], 2), e.minimized ? H("", !0) : (D(),
                    F(fe, {
                        key: 4
                    }, [e.draggable ? (D(),
                    F("div", fl, [a(k, {
                        fontSize: "2",
                        fontWeight: "bold",
                        tag: "span",
                        text: e.shortTitle || e.title,
                        color: "white"
                    }, null, 8, ["text"])])) : (D(),
                    F("div", {
                        key: 0,
                        class: he(["d-flex flex-column rounded-end justify-content-center card-info", [e.bodyPadding, e.bodyColor]])
                    }, [_.value ? (D(),
                    E(P, {
                        key: 0,
                        width: "100",
                        height: "12"
                    })) : (D(),
                    F("div", {
                        key: 1,
                        class: he(["d-flex justify-content-between", {
                            "pb-2": !!e.description
                        }])
                    }, [a(k, {
                        "data-testid": "node-title",
                        fontSize: "3",
                        tag: "span",
                        text: e.title,
                        color: e.titleColor
                    }, null, 8, ["text", "color"]), a(k, {
                        "data-testid": "node-title-id",
                        fontSize: "3",
                        tag: "span",
                        text: u.value,
                        color: "gray"
                    }, null, 8, ["text"])], 2)), _.value ? (D(),
                    E(P, {
                        key: 2,
                        width: "100",
                        height: "12"
                    })) : e.description ? Ye(i.$slots, "description", Pt(le({
                        key: 3
                    }, {
                        description: e.description,
                        descriptionColor: e.descriptionColor
                    })), () => [a(C(Ke), {
                        description: e.description,
                        descriptionColor: e.descriptionColor,
                        truncate: ""
                    }, null, 8, ["description", "descriptionColor"])], !0) : H("", !0)], 2))], 64)), Ye(i.$slots, "default", {}, void 0, !0)]
                }
                ),
                _: 3
            }, 8, ["class", "bodyClass", "draggable"]), o.value && !e.draggable ? (D(),
            F("div", {
                key: 0,
                class: "d-flex p-2 bg-purple-dark rounded-bottom statistic-card border border-top-0",
                "data-testid": "node-count-wrapper",
                onClick: Ne(g, ["prevent"])
            }, [a(w, {
                "data-testid": "node-count-icon",
                icon: "user-line",
                class: "fs-4 text-white"
            }), a(k, {
                "data-testid": "node-count",
                fontSize: "2",
                fontWeight: "bold",
                tag: "span",
                text: s.value,
                color: "white",
                class: "ms-1"
            }, null, 8, ["text"])])) : H("", !0), f.value && !e.draggable ? (D(),
            E(C(ml), {
                key: 1,
                idVersion: c.value,
                steps: b.value,
                workflowType: y.value,
                onClose: T[1] || (T[1] = L => (f.value = !1,
                n("isOpenDrillDataModal")))
            }, null, 8, ["idVersion", "steps", "workflowType"])) : H("", !0)])
        }
    }
}
  , Se = ge(vl, [["__scopeId", "data-v-eba529c4"]])
  , gl = {
    __name: "ActionEmailNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        domains: Array,
        emailVariables: Array,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , {t: d} = xe()
          , l = ze()
          , u = x(!1)
          , p = x(!0)
          , r = x(null)
          , c = async () => {
            r.value && (p.value = await r.value.validate())
        }
        ;
        J.$on("validateAll", c);
        const {node: y} = Ce()
          , o = x("")
          , b = Z( () => l.getters["flows/stepsCountData"] === null)
          , v = async (s, f) => {
            o.value = (s == null ? void 0 : s.subject) || "",
            y.data = s,
            u.value = !1,
            await c(),
            n("updateNodeData", y, p.value),
            f && J.$emit("nodeReady", y)
        }
        ;
        return ke( () => {
            J.$off("validateAll", c)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(y),
            valid: p.value,
            baseColor: "blue-normal",
            icon: "mail-line",
            title: C(d)("journey.nodes.action_email.title"),
            description: o.value || C(d)("journey.nodes.action_email.description"),
            onOpenConfig: f[1] || (f[1] = g => u.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(nl), {
                key: 0,
                ref_key: "modal",
                ref: r,
                show: u.value,
                domains: e.domains,
                leadVariables: e.emailVariables,
                action: e.data,
                editable: b.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => u.value = !1)
            }, null, 8, ["show", "domains", "leadVariables", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , hl = {
    emits: ["close", "updateData"],
    name: "wait-item",
    components: {
        TimeInput: et
    },
    props: {
        action: Object,
        show: Boolean,
        editable: Boolean
    },
    data() {
        const e = {
            days: 0,
            hours: 0,
            minutes: 0,
            weekdays: [{
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }]
        };
        return {
            default: e,
            waitData: {
                ...e
            },
            weekdaysList: this.$tm("dates.weekdays_short")
        }
    },
    created() {
        const {days: e, hours: t, minutes: n, weekdays: d} = this.action || {};
        this.waitData = {
            days: e || this.default.days,
            hours: t || this.default.hours,
            minutes: n || this.default.minutes,
            weekdays: d || this.default.weekdays
        },
        this.$nextTick( () => {
            this.$emit("updateData", this.waitData, !0)
        }
        )
    },
    methods: {
        save() {
            this.$emit("updateData", {
                days: this.waitData.days,
                hours: this.waitData.hours,
                minutes: this.waitData.minutes,
                weekdays: this.waitData.weekdays
            })
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate()
              , t = this.waitData.days || this.waitData.hours || this.waitData.minutes;
            return e && !!t
        }
    }
}
  , bl = {
    class: "d-flex align-items-center"
}
  , yl = ["data-testid"]
  , wl = {
    class: "d-flex justify-content-center align-items-center timer-checkbox"
}
  , _l = {
    class: "d-flex justify-content-end mb-2"
}
  , Dl = {
    class: "d-flex w-100"
};
function Tl(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsTypography")
      , o = m("DsInput")
      , b = m("Field")
      , v = m("DsCheckbox")
      , s = m("time-input")
      , f = m("Form")
      , g = m("DsButton")
      , _ = m("DsModal");
    return D(),
    E(_, {
        "data-testid": "action-wait-modal",
        size: "md",
        show: n.show,
        appendToBody: "",
        alwaysRender: "",
        onHide: t[4] || (t[4] = i => e.$emit("close")),
        headerClass: "d-flex align-items-center"
    }, {
        header: h( () => [S("div", bl, [a(p, {
            "data-testid": "action-wait-modal-title",
            text: e.$t("journey.modals.action_wait.title"),
            size: "md"
        }, null, 8, ["text"]), a(c, {
            "data-testid": "action-wait-title-tooltip",
            class: "mb-2",
            text: e.$t("journey.information_icons.wait"),
            placement: "top",
            offset: "5",
            tooltipClass: "w-50 fw-normal information-tooltip"
        }, {
            default: h( () => [a(r, {
                icon: "information-line",
                class: "fs-3 ms-1 text-green-dark"
            })]),
            _: 1
        }, 8, ["text"])])]),
        body: h( () => [a(f, {
            ref: "observer",
            class: "bg-white design-system",
            "data-testid": "action-wait-form"
        }, {
            default: h( () => [a(y, {
                tag: "label",
                class: "text-black fw-semibold mb-1 mt-2",
                "data-testid": "action-wait-days-label"
            }, {
                default: h( () => [Me(ye(e.$t("flow.selected_actions_labels.wait.days")), 1)]),
                _: 1
            }), a(b, {
                modelValue: l.waitData.days,
                "onUpdate:modelValue": t[0] || (t[0] = i => l.waitData.days = i),
                modelModifiers: {
                    number: !0
                },
                rules: "required|integer",
                name: "days"
            }, {
                default: h( ({errors: i, componentField: T}) => [a(o, le({
                    "data-testid": "action-wait-days-input"
                }, T, {
                    class: {
                        "has-error": i.length > 0
                    },
                    disabled: !n.editable,
                    type: "number",
                    min: 0,
                    max: 365,
                    placeholder: "0"
                }), null, 16, ["class", "disabled"])]),
                _: 1
            }, 8, ["modelValue"]), a(y, {
                tag: "label",
                class: "text-black fw-semibold mb-1 mt-2",
                "data-testid": "action-wait-hours-label"
            }, {
                default: h( () => [Me(ye(e.$t("flow.selected_actions_labels.wait.hours")), 1)]),
                _: 1
            }), a(b, {
                modelValue: l.waitData.hours,
                "onUpdate:modelValue": t[1] || (t[1] = i => l.waitData.hours = i),
                modelModifiers: {
                    number: !0
                },
                rules: "required|integer",
                name: "hours"
            }, {
                default: h( ({errors: i, componentField: T}) => [a(o, le({
                    "data-testid": "action-wait-hours-input"
                }, T, {
                    class: {
                        "has-error": i.length > 0
                    },
                    disabled: !n.editable,
                    type: "number",
                    min: 0,
                    max: 24,
                    placeholder: "2h"
                }), null, 16, ["class", "disabled"])]),
                _: 1
            }, 8, ["modelValue"]), a(y, {
                tag: "label",
                class: "text-black fw-semibold mb-1 mt-2",
                "data-testid": "action-wait-minutes-label"
            }, {
                default: h( () => [Me(ye(e.$t("flow.selected_actions_labels.wait.minutes")), 1)]),
                _: 1
            }), a(b, {
                modelValue: l.waitData.minutes,
                "onUpdate:modelValue": t[2] || (t[2] = i => l.waitData.minutes = i),
                modelModifiers: {
                    number: !0
                },
                rules: "required|integer",
                name: "minutes"
            }, {
                default: h( ({errors: i, componentField: T}) => [a(o, le({
                    "data-testid": "action-wait-minutes-input"
                }, T, {
                    class: {
                        "has-error": i.length > 0
                    },
                    disabled: !n.editable,
                    type: "number",
                    min: 0,
                    max: 59,
                    placeholder: "0 min"
                }), null, 16, ["class", "disabled"])]),
                _: 1
            }, 8, ["modelValue"]), a(c, {
                "data-testid": "action-wait-weekdays-tooltip",
                text: e.$t("flow.selected_actions_labels.wait.tooltip")
            }, {
                default: h( () => [a(y, {
                    tag: "label",
                    class: "text-gray-900 fw-bold small mb-3 mt-3",
                    "data-testid": "action-wait-weekdays-label"
                }, {
                    default: h( () => [Me(ye(e.$t("flow.selected_actions_labels.wait.period_weekdays")), 1)]),
                    _: 1
                })]),
                _: 1
            }, 8, ["text"]), (D(!0),
            F(fe, null, Te(l.waitData.weekdays, (i, T) => (D(),
            F("div", {
                key: T,
                class: "d-flex align-items-center ms-2 mb-2",
                "data-testid": `action-wait-weekday-row-${T}`
            }, [S("div", wl, [a(v, {
                "data-testid": `action-wait-weekday-${T}-active-checkbox`,
                class: "timer-checkbox",
                isSwitch: "",
                modelValue: i.active,
                "onUpdate:modelValue": w => i.active = w,
                label: e.$rt(l.weekdaysList[T]),
                checked: i.active,
                disabled: !n.editable
            }, null, 8, ["data-testid", "modelValue", "onUpdate:modelValue", "label", "checked", "disabled"])]), S("div", _l, [a(s, {
                "data-testid": `action-wait-weekday-${T}-start-time-input`,
                modelValue: i.start,
                "onUpdate:modelValue": w => i.start = w,
                name: `weekday-start-${T}`,
                class: he([{
                    inactive: !i.active
                }, "weekday__time w-50"]),
                disabled: !i.active || !n.editable,
                right: !0,
                "data-vv-value-path": "date"
            }, null, 8, ["data-testid", "modelValue", "onUpdate:modelValue", "name", "class", "disabled"]), a(s, {
                "data-testid": `action-wait-weekday-${T}-end-time-input`,
                modelValue: i.end,
                "onUpdate:modelValue": w => i.end = w,
                name: `weekday-end-${T}`,
                class: he([{
                    inactive: !i.active
                }, "weekday__time w-50"]),
                disabled: !i.active || !n.editable,
                right: !0,
                "data-vv-value-path": "date"
            }, null, 8, ["data-testid", "modelValue", "onUpdate:modelValue", "name", "class", "disabled"])])], 8, yl))), 128))]),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", Dl, [a(g, {
            "data-testid": "action-wait-save-button",
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: u.save
        }, null, 8, ["text", "disabled", "onClick"]), a(g, {
            "data-testid": "action-wait-cancel-button",
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[3] || (t[3] = i => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const $l = ge(hl, [["render", Tl], ["__scopeId", "data-v-0358e6e6"]])
  , Cl = {
    __name: "ActionWaitNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , {t: d} = xe()
          , {node: l} = Ce()
          , u = ze()
          , p = x(!1)
          , r = x("")
          , c = x(!0)
          , y = x(null)
          , o = async () => {
            y.value && (c.value = await y.value.validate())
        }
        ;
        J.$on("validateAll", o);
        const b = Z( () => u.getters["flows/stepsCountData"] === null)
          , v = async (s, f) => {
            const g = [];
            s != null && s.days && g.push(d("flow.actions.ActionWait.display_days", s.days, {
                count: s.days
            })),
            s != null && s.hours && g.push(d("flow.actions.ActionWait.display_hours", s.hours, {
                count: s.hours
            })),
            s != null && s.minutes && g.push(d("flow.actions.ActionWait.display_minutes", s.minutes, {
                count: s.minutes
            })),
            g.length === 1 ? r.value = g[0] : g.length > 1 ? r.value = `${g.slice(0, -1).join(", ")} ${d("flow.actions.ActionWait.and")} ${g.slice(-1)}` : r.value = d("flow.actions.ActionWait.display_no_time"),
            l.data = s,
            p.value = !1,
            await o(),
            n("updateNodeData", l, c.value),
            f && J.$emit("nodeReady", l)
        }
        ;
        return ke( () => {
            J.$off("validateAll", o)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(l),
            valid: c.value,
            baseColor: "gray-900",
            bodyColor: "bg-gray-900",
            bodyPadding: "p-3 ps-0",
            icon: "timer-line",
            iconColor: "text-green-brand",
            title: s.$t("journey.sidebar.wait"),
            titleColor: "white",
            description: r.value || C(d)("flow.actions.ActionWait.display_no_time"),
            descriptionColor: "white",
            onOpenConfig: f[1] || (f[1] = g => p.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C($l), {
                key: 0,
                ref_key: "modal",
                ref: y,
                show: p.value,
                action: e.data,
                editable: b.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => p.value = !1)
            }, null, 8, ["show", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Sl = {
    emits: ["close", "updateData"],
    name: "activity-item",
    components: {
        Multiselect: qt,
        TimeInput: et
    },
    props: {
        show: Boolean,
        action: Object,
        activities: Array,
        users: Array,
        editable: Boolean
    },
    data() {
        const e = {
            action: "",
            selectedUser: null,
            router: null,
            days: 0,
            hours: 0,
            minutes: 0,
            weekdays: [{
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }]
        };
        return {
            default: e,
            activityData: {
                ...e
            },
            weekdaysList: this.$tm("dates.weekdays_short"),
            actionTo: "responsible"
        }
    },
    created() {
        if (!this.action)
            return;
        const {days: e, hours: t, minutes: n, weekdays: d, action: l, user: u, router: p} = this.action;
        this.activityData = {
            action: l || this.default.action,
            user: u || this.default.selectedUser,
            router: p || this.default.router,
            days: e || this.default.days,
            hours: t || this.default.hours,
            minutes: n || this.default.minutes,
            weekdays: d || this.default.weekdays
        },
        u ? this.actionTo = "user" : p ? this.actionTo = "router" : this.actionTo = "responsible",
        this.$nextTick( () => {
            this.$emit("updateData", this.activityData, !0)
        }
        )
    },
    methods: {
        setAction(e) {
            this.activityData.action = e
        },
        getActivityLabel(e) {
            var t;
            return (t = this.activities.find(n => n.id === e)) == null ? void 0 : t.name
        },
        save() {
            ["responsible", "router"].includes(this.actionTo) ? this.activityData.user = null : ["responsible", "user"].includes(this.actionTo) && (this.activityData.router = null),
            this.$emit("updateData", this.activityData)
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate();
            return e
        }
    }
}
  , xl = {
    class: "p-2"
}
  , kl = ["disabled"]
  , Pl = ["disabled"]
  , Vl = ["disabled"]
  , zl = {
    class: "my-3"
}
  , Al = {
    class: "text-gray-900 fw-bold small mb-2"
}
  , Bl = {
    class: "d-flex justify-content-center align-items-center timer-checkbox"
}
  , Ml = {
    class: "d-flex mb-2"
}
  , El = {
    class: "d-flex w-100"
};
function jl(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsTypography")
      , o = m("multiselect")
      , b = m("Field")
      , v = m("DsRadio")
      , s = m("DsEntityMultiselect")
      , f = m("DsCheckbox")
      , g = m("time-input")
      , _ = m("Form")
      , i = m("DsButton")
      , T = m("DsModal");
    return D(),
    E(T, {
        size: "md",
        show: n.show,
        appendToBody: "",
        alwaysRender: "",
        onHide: t[10] || (t[10] = w => e.$emit("close")),
        headerClass: "d-flex align-items-center"
    }, {
        header: h( () => [a(p, {
            size: "md",
            text: e.$t("journey.modals.create_activity.title")
        }, null, 8, ["text"]), a(c, {
            class: "mb-2",
            text: e.$t("journey.information_icons.config_activity"),
            placement: "bottom",
            offset: "5",
            appendToBody: "",
            tooltipClass: "w-25 fw-normal information-tooltip"
        }, {
            default: h( () => [a(r, {
                icon: "information-line",
                class: "fs-2 ms-1 text-green-dark"
            })]),
            _: 1
        }, 8, ["text"])]),
        body: h( () => [a(_, {
            ref: "observer",
            class: "bg-white design-system"
        }, {
            default: h( () => [S("div", xl, [a(y, {
                tag: "label",
                fontWeight: "bold",
                fontSize: "3",
                text: e.$t("flow.selected_actions_labels.activity.activity")
            }, null, 8, ["text"]), a(b, {
                modelValue: l.activityData.action,
                "onUpdate:modelValue": t[0] || (t[0] = w => l.activityData.action = w),
                rules: "required",
                name: "action"
            }, {
                default: h( ({errors: w, componentField: P}) => {
                    var k;
                    return [a(o, le(P, {
                        trackBy: "",
                        class: [{
                            "has-error": w.length > 0
                        }, "mb-3"],
                        options: ((k = n.activities) == null ? void 0 : k.map(V => V.id)) || [],
                        customLabel: V => u.getActivityLabel(V),
                        disabled: !n.editable,
                        onSelect: u.setAction
                    }), null, 16, ["class", "options", "customLabel", "disabled", "onSelect"])]
                }
                ),
                _: 1
            }, 8, ["modelValue"]), a(y, {
                tag: "label",
                fontWeight: "bold",
                fontSize: "3",
                text: e.$t("flow.selected_actions_labels.activity.days_activity")
            }, null, 8, ["text"]), a(b, {
                modelValue: l.activityData.days,
                "onUpdate:modelValue": t[1] || (t[1] = w => l.activityData.days = w),
                modelModifiers: {
                    number: !0
                },
                rules: "required|integer",
                name: "days"
            }, {
                default: h( ({errors: w, field: P}) => [S("input", le(P, {
                    class: [{
                        "has-error": w.length > 0
                    }, "p-2 w-100 text-gray-700 bg-white border border-gray-400 rounded-1 mb-3"],
                    disabled: !n.editable,
                    type: "number",
                    min: "0",
                    max: "180",
                    placeholder: "0"
                }), null, 16, kl)]),
                _: 1
            }, 8, ["modelValue"]), a(y, {
                tag: "label",
                fontWeight: "bold",
                fontSize: "3",
                text: e.$t("flow.selected_actions_labels.activity.hours")
            }, null, 8, ["text"]), a(b, {
                modelValue: l.activityData.hours,
                "onUpdate:modelValue": t[2] || (t[2] = w => l.activityData.hours = w),
                modelModifiers: {
                    number: !0
                },
                rules: "required|integer",
                name: "hours"
            }, {
                default: h( ({errors: w, field: P}) => [S("input", le(P, {
                    class: [{
                        "has-error": w.length > 0
                    }, "p-2 w-100 text-gray-700 bg-white border border-gray-400 rounded-1 mb-3"],
                    disabled: !n.editable,
                    type: "number",
                    min: "0",
                    max: "24",
                    placeholder: "0"
                }), null, 16, Pl)]),
                _: 1
            }, 8, ["modelValue"]), a(y, {
                tag: "label",
                fontWeight: "bold",
                fontSize: "3",
                text: e.$t("flow.selected_actions_labels.activity.minutes")
            }, null, 8, ["text"]), a(b, {
                modelValue: l.activityData.minutes,
                "onUpdate:modelValue": t[3] || (t[3] = w => l.activityData.minutes = w),
                modelModifiers: {
                    number: !0
                },
                rules: "required|integer",
                name: "minutes"
            }, {
                default: h( ({errors: w, field: P}) => [S("input", le(P, {
                    class: [{
                        "has-error": w.length > 0
                    }, "p-2 w-100 text-gray-700 bg-white border border-gray-400 rounded-1 mb-3"],
                    disabled: !n.editable,
                    type: "number",
                    min: "0",
                    max: "59",
                    placeholder: "0"
                }), null, 16, Vl)]),
                _: 1
            }, 8, ["modelValue"]), a(y, {
                tag: "label",
                fontWeight: "bold",
                text: e.$t("flow.selected_actions_labels.activity.create_action_to"),
                fontSize: "3"
            }, null, 8, ["text"]), a(c, {
                class: "mb-2",
                text: e.$t("journey.information_icons.activity_responsible"),
                placement: "top",
                offset: "5",
                appendToBody: "",
                tooltipClass: "w-25 fw-normal information-tooltip"
            }, {
                default: h( () => [a(r, {
                    icon: "information-line",
                    class: "fs-2 ms-1 text-green-dark"
                })]),
                _: 1
            }, 8, ["text"]), S("div", zl, [a(v, {
                modelValue: l.actionTo,
                "onUpdate:modelValue": t[4] || (t[4] = w => l.actionTo = w),
                "data-testid": "responsible-radio",
                name: "responsible",
                inputValue: "responsible",
                label: e.$t("flow.selected_actions_labels.activity.deal_responsible"),
                disabled: !n.editable,
                class: "flex-fill"
            }, null, 8, ["modelValue", "label", "disabled"]), a(v, {
                modelValue: l.actionTo,
                "onUpdate:modelValue": t[5] || (t[5] = w => l.actionTo = w),
                "data-testid": "user-radio",
                name: "user",
                inputValue: "user",
                label: e.$t("user"),
                disabled: !n.editable,
                class: "flex-fill mt-1"
            }, null, 8, ["modelValue", "label", "disabled"]), a(v, {
                modelValue: l.actionTo,
                "onUpdate:modelValue": t[6] || (t[6] = w => l.actionTo = w),
                "data-testid": "router-radio",
                name: "router",
                inputValue: "router",
                label: e.$t("flow.selected_actions_labels.activity.router"),
                disabled: !n.editable,
                class: "flex-fill mt-1"
            }, null, 8, ["modelValue", "label", "disabled"])]), l.actionTo === "user" ? (D(),
            E(b, {
                key: 0,
                modelValue: l.activityData.user,
                "onUpdate:modelValue": t[7] || (t[7] = w => l.activityData.user = w),
                name: "user",
                rules: "required"
            }, {
                default: h( ({errors: w, componentField: P}) => [a(y, {
                    tag: "span",
                    fontWeight: "bold",
                    text: e.$t("user"),
                    fontSize: "2"
                }, null, 8, ["text"]), a(s, le(P, {
                    "data-testid": "user-select",
                    size: "md",
                    class: "mb-2 mt-1",
                    hasError: w.length > 0,
                    placeholder: e.$t("flow.selected_actions_labels.activity.select_user_placeholder"),
                    disabled: !n.editable,
                    entity: "users",
                    closeOnSelect: "",
                    appendToBody: ""
                }), null, 16, ["hasError", "placeholder", "disabled"])]),
                _: 1
            }, 8, ["modelValue"])) : H("", !0), l.actionTo === "router" ? (D(),
            E(b, {
                key: 1,
                modelValue: l.activityData.router,
                "onUpdate:modelValue": t[8] || (t[8] = w => l.activityData.router = w),
                name: "router",
                rules: "required"
            }, {
                default: h( ({errors: w, componentField: P}) => [a(y, {
                    tag: "span",
                    fontWeight: "bold",
                    text: e.$t("flow.selected_actions_labels.activity.router"),
                    fontSize: "2"
                }, null, 8, ["text"]), a(s, le(P, {
                    "data-testid": "router-select",
                    size: "md",
                    class: "mb-2 mt-1",
                    hasError: w.length > 0,
                    placeholder: e.$t("flow.selected_actions_labels.activity.router_placeholder"),
                    disabled: !n.editable,
                    entity: "routers",
                    closeOnSelect: "",
                    appendToBody: ""
                }), null, 16, ["hasError", "placeholder", "disabled"])]),
                _: 1
            }, 8, ["modelValue"])) : H("", !0), S("label", Al, ye(e.$t("flow.actions.ActionCreateAction.valid_week_days")), 1), (D(!0),
            F(fe, null, Te(l.activityData.weekdays, (w, P) => (D(),
            F("div", {
                key: P,
                class: "d-flex align-items-center mb-2 ms-2"
            }, [S("div", Bl, [a(f, {
                class: "timer-checkbox",
                isSwitch: "",
                modelValue: w.active,
                "onUpdate:modelValue": k => w.active = k,
                label: e.$rt(l.weekdaysList[P]),
                checked: w.active,
                disabled: !n.editable
            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "checked", "disabled"])]), S("div", Ml, [a(g, {
                modelValue: w.start,
                "onUpdate:modelValue": k => w.start = k,
                name: `weekday-start-${P}`,
                class: he([{
                    inactive: !w.active || !n.editable
                }, "weekday__time me-3"]),
                disabled: !w.active || !n.editable,
                right: !0
            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "class", "disabled"]), a(g, {
                modelValue: w.end,
                "onUpdate:modelValue": k => w.end = k,
                name: `weekday-end-${P}`,
                class: he([{
                    inactive: !w.active || !n.editable
                }, "weekday__time"]),
                disabled: !w.active || !n.editable,
                right: !0
            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "class", "disabled"])])]))), 128))])]),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", El, [a(i, {
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: u.save
        }, null, 8, ["text", "disabled", "onClick"]), a(i, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[9] || (t[9] = w => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const Ol = ge(Sl, [["render", jl], ["__scopeId", "data-v-0410dc43"]])
  , Il = {
    __name: "ActionCreateActivityNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        activities: Array,
        users: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , l = x(!1)
          , u = x(!0)
          , p = x(null)
          , r = async () => {
            p.value && (u.value = await p.value.validate())
        }
        ;
        J.$on("validateAll", r);
        const {node: c} = Ce()
          , y = ze()
          , o = x("")
          , b = Z( () => y.getters["flows/stepsCountData"] === null)
          , v = async (s, f) => {
            var g, _, i;
            l.value = !1,
            c.data = {
                ...s,
                id_user: (g = s == null ? void 0 : s.user) == null ? void 0 : g.value,
                id_router: (_ = s == null ? void 0 : s.router) == null ? void 0 : _.value
            },
            s.action ? o.value = (i = d.activities.find(T => je(T.id) === je(s.action))) == null ? void 0 : i.name : o.value = "",
            await r(),
            n("updateNodeData", c, u.value),
            f && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", r)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: u.value,
            baseColor: "pink-dark",
            icon: "task-line",
            title: s.$t("journey.sidebar.create_activity"),
            description: o.value || s.$t("pipelineModals.selectActivity"),
            onOpenConfig: f[1] || (f[1] = g => l.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Ol), {
                key: 0,
                ref_key: "modal",
                ref: p,
                show: l.value,
                activities: e.activities,
                users: e.users,
                action: e.data,
                editable: b.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => l.value = !1)
            }, null, 8, ["show", "activities", "users", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Ul = {
    class: "my-2"
}
  , Nl = {
    class: "d-flex w-100"
}
  , Rl = {
    __name: "ActionCreateDealModal",
    props: {
        show: Boolean,
        initialData: Object,
        users: Array,
        routers: Array,
        pipelines: Array,
        editable: Boolean
    },
    emits: ["updateData", "close"],
    setup(e, {expose: t, emit: n}) {
        const d = e
          , l = n
          , {t: u} = xe()
          , p = Z( () => [{
            label: u("pipelineEntities.LEAD"),
            value: "LEAD"
        }, {
            label: u("pipelineEntities.OPPORTUNITY"),
            value: "OPPORTUNITY"
        }, {
            label: u("pipelineEntities.AFTER_SALE"),
            value: "AFTER_SALE"
        }])
          , r = x("router")
          , c = x(null)
          , y = x(null)
          , o = x(null)
          , b = x(null)
          , v = x(null)
          , s = x([])
          , f = x(!1)
          , g = async P => {
            s.value = [];
            const k = await st(P);
            s.value = (k || []).map(V => ({
                code: V.id,
                label: V.name
            }))
        }
          , _ = Z( () => {
            const {value: P} = c.value || {};
            return P ? d.pipelines.filter(k => k.entity.toUpperCase() === P.toUpperCase()) : []
        }
        );
        We(b, async P => {
            f.value = !0,
            v.value = null,
            P != null && P.code ? await g(P.code) : s.value = [],
            f.value = !1
        }
        ),
        Ve(async () => {
            const {initialData: P, pipelines: k, users: V, routers: R} = d;
            P != null && P.entity ? c.value = p.value.find(L => L.value === P.entity) : c.value = p.value[0],
            P != null && P.id_pipeline && (b.value = k.find(L => L.code === P.id_pipeline),
            await g(P.id_pipeline),
            v.value = s.value.find(L => L.code === P.id_pipeline_item)),
            P != null && P.id_user ? (y.value = V.find(L => L.code === P.id_user),
            r.value = "user") : P != null && P.id_router && (o.value = R.find(L => L.code === P.id_router),
            r.value = "router"),
            Ee( () => {
                var L;
                l("updateData", {
                    type: r.value,
                    entity: c.value,
                    user: (L = y.value) == null ? void 0 : L.code,
                    router: o.value,
                    pipeline: b.value,
                    pipeline_item: v.value
                }, !0)
            }
            )
        }
        );
        const i = () => {
            var P, k;
            l("updateData", {
                type: r.value,
                entity: c.value,
                user: ((P = y.value) == null ? void 0 : P.value) || ((k = y.value) == null ? void 0 : k.code),
                router: o.value,
                pipeline: b.value,
                pipeline_item: v.value
            }),
            l("close")
        }
          , T = x(null);
        return t({
            validate: async () => {
                if (!T.value)
                    return !1;
                const {valid: P} = await T.value.validate();
                return P
            }
        }),
        (P, k) => {
            const V = m("DsHeading")
              , R = m("DsIcon")
              , L = m("DsTooltip")
              , N = m("DsTypography")
              , oe = m("DsSelect")
              , re = m("Field")
              , Pe = m("DsRadio")
              , W = m("DsEntityMultiselect")
              , K = m("Form")
              , G = m("DsButton")
              , U = m("DsModal");
            return D(),
            E(U, {
                show: e.show,
                size: "md",
                appendToBody: "",
                alwaysRender: "",
                onHide: k[16] || (k[16] = z => P.$emit("close")),
                headerClass: "d-flex align-items-center"
            }, {
                header: h( () => [a(V, {
                    size: "md",
                    text: P.$t("journey.modals.create_deal.title")
                }, null, 8, ["text"]), a(L, {
                    class: "mb-2",
                    text: P.$t("journey.information_icons.create_deal"),
                    placement: "top",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "fw-normal information-tooltip"
                }, {
                    default: h( () => [a(R, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]),
                body: h( () => [a(K, {
                    ref_key: "observer",
                    ref: T
                }, {
                    default: h( () => [a(re, {
                        modelValue: c.value,
                        "onUpdate:modelValue": k[2] || (k[2] = z => c.value = z),
                        name: "entity",
                        rules: "required"
                    }, {
                        default: h( ({errors: z, componentField: A}) => [a(N, {
                            tag: "span",
                            fontWeight: "bold",
                            text: P.$t("journey.modals.create_deal.entity"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(oe, le(A, {
                            "data-testid": "entity-select",
                            class: "mb-2 mt-1",
                            options: p.value,
                            placeholder: P.$t("journey.modals.create_deal.select_entity"),
                            hasError: z.length > 0,
                            disabled: !e.editable,
                            filterable: "",
                            appendToBody: "",
                            "onOption:selected": k[0] || (k[0] = B => c.value = B),
                            "onOption:deselect": k[1] || (k[1] = B => c.value = null)
                        }), null, 16, ["options", "placeholder", "hasError", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(re, {
                        modelValue: b.value,
                        "onUpdate:modelValue": k[5] || (k[5] = z => b.value = z),
                        name: "pipeline",
                        rules: "required"
                    }, {
                        default: h( ({errors: z, componentField: A}) => [a(N, {
                            tag: "span",
                            fontWeight: "bold",
                            text: P.$t("journey.modals.create_deal.pipeline"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(oe, le(A, {
                            "data-testid": "pipeline-select",
                            id: "pipeline",
                            class: "mb-2 mt-1",
                            options: _.value,
                            placeholder: P.$t("journey.modals.create_deal.select_pipeline"),
                            hasError: z.length > 0,
                            disabled: !e.editable,
                            filterable: "",
                            appendToBody: "",
                            "onOption:selected": k[3] || (k[3] = B => b.value = B),
                            "onOption:deselect": k[4] || (k[4] = B => b.value = null)
                        }), null, 16, ["options", "placeholder", "hasError", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(re, {
                        modelValue: v.value,
                        "onUpdate:modelValue": k[8] || (k[8] = z => v.value = z),
                        name: "pipeline_item",
                        rules: "required"
                    }, {
                        default: h( ({errors: z, componentField: A}) => [a(N, {
                            tag: "span",
                            fontWeight: "bold",
                            text: P.$t("journey.modals.create_deal.pipeline_step"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(oe, le(A, {
                            "data-testid": "pipeline-item-select",
                            id: "pipelineItem",
                            class: "mb-2 mt-1",
                            options: s.value,
                            placeholder: P.$t("journey.modals.create_deal.select_pipeline_step"),
                            loading: f.value,
                            hasError: z.length > 0,
                            disabled: !e.editable,
                            filterable: "",
                            appendToBody: "",
                            "onOption:selected": k[6] || (k[6] = B => v.value = B),
                            "onOption:deselect": k[7] || (k[7] = B => v.value = null)
                        }), null, 16, ["options", "placeholder", "loading", "hasError", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(N, {
                        tag: "span",
                        fontWeight: "bold",
                        text: P.$t("journey.modals.create_deal.distribution_mode"),
                        fontSize: "2"
                    }, null, 8, ["text"]), S("div", Ul, [a(Pe, {
                        modelValue: r.value,
                        "onUpdate:modelValue": k[9] || (k[9] = z => r.value = z),
                        "data-testid": "router-radio",
                        name: "router",
                        inputValue: "router",
                        label: P.$t("journey.modals.create_deal.router"),
                        disabled: !e.editable,
                        class: "flex-fill"
                    }, null, 8, ["modelValue", "label", "disabled"]), a(Pe, {
                        modelValue: r.value,
                        "onUpdate:modelValue": k[10] || (k[10] = z => r.value = z),
                        "data-testid": "user-radio",
                        name: "user",
                        inputValue: "user",
                        label: P.$t("user"),
                        disabled: !e.editable,
                        class: "flex-fill mt-1"
                    }, null, 8, ["modelValue", "label", "disabled"])]), r.value === "user" ? (D(),
                    E(re, {
                        key: 0,
                        modelValue: y.value,
                        "onUpdate:modelValue": k[11] || (k[11] = z => y.value = z),
                        name: "user-create-deal",
                        rules: "required"
                    }, {
                        default: h( ({errors: z, componentField: A}) => [a(N, {
                            tag: "span",
                            fontWeight: "bold",
                            text: P.$t("user"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(W, le(A, {
                            "data-testid": "user-select",
                            class: "mb-2 mt-1",
                            entity: "users",
                            size: "md",
                            closeOnSelect: "",
                            hasError: z.length > 0,
                            placeholder: P.$t("journey.modals.create_deal.select_user"),
                            disabled: !e.editable,
                            appendToBody: ""
                        }), null, 16, ["hasError", "placeholder", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0), r.value === "router" ? (D(),
                    E(re, {
                        key: 1,
                        modelValue: o.value,
                        "onUpdate:modelValue": k[14] || (k[14] = z => o.value = z),
                        name: "router",
                        rules: "required"
                    }, {
                        default: h( ({errors: z, componentField: A}) => [a(N, {
                            tag: "span",
                            fontWeight: "bold",
                            text: P.$t("journey.modals.create_deal.router"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(oe, le(A, {
                            "data-testid": "router-select",
                            class: "mb-2 mt-1",
                            options: e.routers,
                            hasError: z.length > 0,
                            placeholder: C(u)("journey.modals.create_deal.select_router"),
                            disabled: !e.editable,
                            filterable: "",
                            appendToBody: "",
                            "onOption:selected": k[12] || (k[12] = B => o.value = B),
                            "onOption:deselect": k[13] || (k[13] = B => o.value = null)
                        }), null, 16, ["options", "hasError", "placeholder", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0)]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", Nl, [a(G, {
                    "data-testid": "save-create-deal-modal",
                    text: P.$t("save"),
                    disabled: !e.editable,
                    size: "lg",
                    class: "w-50",
                    onClick: i
                }, null, 8, ["text", "disabled"]), a(G, {
                    "data-testid": "close-create-deal-modal",
                    text: P.$t("cancel"),
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: k[15] || (k[15] = z => P.$emit("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , Ll = {
    __name: "ActionCreateDealNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        pipelines: Array,
        users: Array,
        routers: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , {t: l} = xe()
          , {node: u} = Ce()
          , p = ze()
          , r = Z( () => p.getters["flows/stepsCountData"] === null)
          , c = x(!0)
          , y = x("")
          , o = x(null)
          , b = async () => {
            o.value ? (c.value = await o.value.validate(),
            y.value = "") : c.value = !0
        }
        ;
        J.$on("validateAll", b);
        const v = x("");
        async function s(f, g) {
            var _, i, T, w;
            u.data = {
                entity: (_ = f == null ? void 0 : f.entity) == null ? void 0 : _.value,
                id_pipeline: (i = f == null ? void 0 : f.pipeline) == null ? void 0 : i.code,
                id_pipeline_item: (T = f == null ? void 0 : f.pipeline_item) == null ? void 0 : T.code,
                id_user: f == null ? void 0 : f.user,
                id_router: (w = f == null ? void 0 : f.router) == null ? void 0 : w.code
            },
            d.value = !1,
            f != null && f.pipeline && (v.value = f.pipeline.label,
            f != null && f.pipeline_item && (v.value += ` - ${f.pipeline_item.label}`)),
            await b(),
            n("updateNodeData", u, c.value),
            g && J.$emit("nodeReady", u)
        }
        return ke( () => {
            J.$off("validateAll", b)
        }
        ),
        (f, g) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(u),
            valid: c.value,
            alertMessage: y.value,
            baseColor: "cyan-dark",
            icon: "add-line",
            title: C(l)("journey.nodes.create_deal.title"),
            description: v.value || C(l)("journey.nodes.create_deal.description"),
            onOpenConfig: g[1] || (g[1] = _ => d.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Rl), {
                key: 0,
                ref_key: "modal",
                ref: o,
                show: d.value,
                initialData: e.data,
                pipelines: e.pipelines,
                users: e.users,
                routers: e.routers,
                editable: r.value,
                onUpdateData: s,
                onClose: g[0] || (g[0] = _ => d.value = !1)
            }, null, 8, ["show", "initialData", "pipelines", "users", "routers", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "title", "description"]))
    }
}
  , Wl = {
    class: "d-flex w-100"
}
  , Hl = {
    __name: "ActionMoveDealModal",
    props: {
        show: Boolean,
        entity: String,
        listType: String,
        initialData: Object,
        pipelines: Array,
        editable: Boolean
    },
    emits: ["updateData", "close"],
    setup(e, {expose: t, emit: n}) {
        const d = e
          , l = n
          , u = Z( () => {
            let {entity: f} = d;
            const g = ["PROSPECT", "LIST"].includes(f == null ? void 0 : f.toUpperCase());
            return d.listType === "fixed" && !g && (f = "LEAD"),
            f ? (g && (f = "PROSPECT"),
            d.pipelines.filter(_ => _.entity === f)) : []
        }
        )
          , p = x([])
          , r = x(null)
          , c = x(null)
          , y = x(!1)
          , o = async f => {
            p.value = [];
            const g = await st(f);
            p.value = (g || []).map(_ => ({
                code: _.id,
                label: _.name
            }))
        }
        ;
        We(r, async f => {
            y.value = !0,
            c.value = null,
            f != null && f.code ? await o(f.code) : p.value = [],
            y.value = !1
        }
        ),
        Ve(async () => {
            const {initialData: f, pipelines: g} = d;
            f && (f != null && f.id_pipeline && (r.value = g.find(_ => _.code === f.id_pipeline),
            await o(f.id_pipeline)),
            f != null && f.id_pipeline_item && (c.value = p.value.find(_ => _.code === f.id_pipeline_item)),
            Ee( () => {
                l("updateData", {
                    pipeline: r.value,
                    pipeline_item: c.value
                }, !0)
            }
            ))
        }
        );
        const b = () => {
            l("updateData", {
                pipeline: r.value,
                pipeline_item: c.value
            })
        }
          , v = x(null);
        return t({
            validate: async () => {
                if (!v.value)
                    return !1;
                const {valid: f} = await v.value.validate();
                return f
            }
        }),
        (f, g) => {
            const _ = m("DsHeading")
              , i = m("DsIcon")
              , T = m("DsTooltip")
              , w = m("DsTypography")
              , P = m("DsSelect")
              , k = m("Field")
              , V = m("Form")
              , R = m("DsButton")
              , L = m("DsModal");
            return D(),
            E(L, {
                show: e.show,
                size: "md",
                appendToBody: "",
                alwaysRender: "",
                onHide: g[7] || (g[7] = N => f.$emit("close")),
                headerClass: "d-flex align-items-center"
            }, {
                header: h( () => [a(_, {
                    size: "md",
                    text: f.$t("journey.modals.move_deal.title")
                }, null, 8, ["text"]), a(T, {
                    class: "mb-2",
                    text: f.$t("journey.information_icons.move_deal"),
                    placement: "top",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "w-25 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(i, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]),
                body: h( () => [a(V, {
                    ref_key: "observer",
                    ref: v
                }, {
                    default: h( () => [a(k, {
                        modelValue: r.value,
                        "onUpdate:modelValue": g[2] || (g[2] = N => r.value = N),
                        name: "pipeline",
                        rules: "required"
                    }, {
                        default: h( ({errors: N, componentField: oe}) => [a(w, {
                            tag: "span",
                            fontWeight: "bold",
                            text: f.$t("pipelines.multiple_actions.move_deal_modal.funnel"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(P, le(oe, {
                            id: "pipeline",
                            class: "mb-2 mt-1",
                            options: u.value,
                            disabled: !e.editable,
                            placeholder: f.$t("journey.modals.create_deal.select_pipeline"),
                            hasError: N.length > 0,
                            filterable: "",
                            appendToBody: "",
                            "onOption:selected": g[0] || (g[0] = re => r.value = re),
                            "onOption:deselect": g[1] || (g[1] = re => r.value = null)
                        }), null, 16, ["options", "disabled", "placeholder", "hasError"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(k, {
                        modelValue: c.value,
                        "onUpdate:modelValue": g[5] || (g[5] = N => c.value = N),
                        name: "pipeline_item",
                        rules: "required"
                    }, {
                        default: h( ({errors: N, componentField: oe}) => [a(w, {
                            tag: "span",
                            fontWeight: "bold",
                            text: f.$t("journey.modals.create_deal.pipeline_step"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(P, le(oe, {
                            id: "pipelineItem",
                            class: "mb-2 mt-1",
                            options: p.value,
                            disabled: !e.editable,
                            placeholder: f.$t("journey.modals.create_deal.select_pipeline_step"),
                            loading: y.value,
                            hasError: N.length > 0,
                            filterable: "",
                            appendToBody: "",
                            "onOption:selected": g[3] || (g[3] = re => c.value = re),
                            "onOption:deselect": g[4] || (g[4] = re => c.value = null)
                        }), null, 16, ["options", "disabled", "placeholder", "loading", "hasError"])]),
                        _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", Wl, [a(R, {
                    text: f.$t("save"),
                    disabled: !e.editable,
                    size: "lg",
                    class: "w-50",
                    onClick: b
                }, null, 8, ["text", "disabled"]), a(R, {
                    text: f.$t("cancel"),
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: g[6] || (g[6] = N => f.$emit("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , Fl = {
    __name: "ActionMoveDealNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        entity: String,
        listType: String,
        handleTargetPosition: String,
        handleSourcePosition: String,
        pipelines: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , l = x(!0)
          , u = x(null)
          , p = async () => {
            u.value && (l.value = await u.value.validate())
        }
        ;
        J.$on("validateAll", p);
        const {node: r} = Ce()
          , c = ze()
          , y = x("")
          , o = Z( () => c.getters["flows/stepsCountData"] === null);
        async function b(v, s) {
            var f, g;
            r.data = {
                id_pipeline: (f = v == null ? void 0 : v.pipeline) == null ? void 0 : f.code,
                id_pipeline_item: (g = v == null ? void 0 : v.pipeline_item) == null ? void 0 : g.code
            },
            d.value = !1,
            v != null && v.pipeline && (y.value = v.pipeline.label,
            v != null && v.pipeline_item && (y.value += ` - ${v.pipeline_item.label}`)),
            await p(),
            n("updateNodeData", r, l.value),
            s && J.$emit("nodeReady", r)
        }
        return ke( () => {
            J.$off("validateAll", p)
        }
        ),
        (v, s) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(r),
            valid: l.value,
            baseColor: "cyan-dark",
            icon: "arrow-left-right-line",
            title: v.$t("journey.sidebar.move_deal"),
            description: y.value || v.$t("pipeline_item.controls.select_pipeline"),
            onOpenConfig: s[1] || (s[1] = f => d.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Hl), {
                key: 0,
                ref_key: "modal",
                ref: u,
                entity: e.entity,
                listType: e.listType,
                show: d.value,
                initialData: e.data,
                pipelines: e.pipelines,
                editable: o.value,
                onUpdateData: b,
                onClose: s[0] || (s[0] = f => d.value = !1)
            }, null, 8, ["entity", "listType", "show", "initialData", "pipelines", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , ql = {
    emits: ["updateData", "close"],
    name: "lost-item",
    props: {
        action: Object,
        show: Boolean,
        entity: String,
        lossReasons: Array,
        editable: Boolean
    },
    data() {
        const e = {
            loss_reason: "",
            finish_instances: !1
        };
        return {
            default: e,
            lossData: e,
            finishInstances: !1
        }
    },
    computed: {
        lossReasonsOptions() {
            if (this.entity) {
                let e = this.entity;
                return e === "PROSPECT" && (e = "LIST"),
                this.lossReasons.filter(t => {
                    var n;
                    return ((n = t.entity) == null ? void 0 : n.toUpperCase()) === e
                }
                )
            }
            return this.lossReasons
        }
    },
    created() {
        if (!this.action)
            return;
        const e = this.action;
        e.loss_reason && (e.loss_reason = this.lossReasons.find(t => t.code === e.loss_reason)),
        this.lossData = {
            ...this.default,
            ...this.action
        },
        this.finishInstances = this.action.finish_instances || !1,
        this.$nextTick( () => {
            this.save(!0)
        }
        )
    },
    methods: {
        save(e) {
            var t;
            this.$emit("updateData", {
                loss_reason: (t = this.lossData.loss_reason) == null ? void 0 : t.code,
                finish_instances: this.finishInstances
            }, e)
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate();
            return e
        }
    }
}
  , Gl = {
    class: "d-flex"
}
  , Ql = {
    for: "remove-contacts",
    class: "small lh-1 m-0 p-0"
}
  , Yl = {
    class: "d-flex w-100"
};
function Jl(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsTypography")
      , o = m("DsSelect")
      , b = m("Field")
      , v = m("Form")
      , s = m("DsButton")
      , f = m("DsModal");
    return D(),
    E(f, {
        show: n.show,
        size: "md",
        appendToBody: "",
        alwaysRender: "",
        onHide: t[6] || (t[6] = g => e.$emit("close")),
        headerClass: "d-flex align-items-center"
    }, {
        header: h( () => [a(p, {
            size: "md",
            text: e.$t("journey.modals.lost_deal.title")
        }, null, 8, ["text"]), a(c, {
            class: "mb-2",
            text: e.$t("journey.information_icons.lose_deal"),
            placement: "top",
            offset: "5",
            appendToBody: "",
            tooltipClass: "w-25 fw-normal information-tooltip"
        }, {
            default: h( () => [a(r, {
                icon: "information-line",
                class: "fs-2 ms-1 text-green-dark"
            })]),
            _: 1
        }, 8, ["text"])]),
        body: h( () => [a(v, {
            ref: "observer",
            class: "bg-white design-system"
        }, {
            default: h( () => [a(b, {
                modelValue: l.lossData.loss_reason,
                "onUpdate:modelValue": t[2] || (t[2] = g => l.lossData.loss_reason = g),
                rules: "required",
                name: "loss_reason"
            }, {
                default: h( ({errors: g, componentField: _}) => [a(y, {
                    tag: "span",
                    fontWeight: "bold",
                    fontSize: "2",
                    text: e.$t("flow.selected_actions_labels.lost")
                }, null, 8, ["text"]), a(o, le(_, {
                    class: "mb-2 mt-1",
                    options: u.lossReasonsOptions,
                    hasError: g.length > 0,
                    disabled: !n.editable,
                    appendToBody: "",
                    filterable: "",
                    "onOption:selected": t[0] || (t[0] = i => l.lossData.loss_reason = i),
                    "onOption:deselect": t[1] || (t[1] = i => l.lossData.loss_reason = i)
                }), null, 16, ["options", "hasError", "disabled"])]),
                _: 1
            }, 8, ["modelValue"]), S("div", Gl, [Le(S("input", {
                class: "me-1",
                "onUpdate:modelValue": t[3] || (t[3] = g => l.finishInstances = g),
                type: "checkbox",
                id: "remove-contacts"
            }, null, 512), [[Vt, l.finishInstances]]), S("label", Ql, ye(e.$t("flow.selected_actions_texts.lost_checkbox")), 1)])]),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", Yl, [a(s, {
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: t[4] || (t[4] = g => u.save())
        }, null, 8, ["text", "disabled"]), a(s, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[5] || (t[5] = g => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const Kl = ge(ql, [["render", Jl]])
  , Xl = {
    __name: "ActionMarkLostNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        entity: String,
        lossReasons: Array,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , l = x(!1)
          , u = x(!0)
          , p = x(null)
          , r = async () => {
            p.value && (u.value = await p.value.validate())
        }
        ;
        J.$on("validateAll", r);
        const {node: c} = Ce()
          , y = ze()
          , o = x("")
          , b = Z( () => y.getters["flows/stepsCountData"] === null)
          , v = async (s, f) => {
            var g;
            c.data = s,
            l.value = !1,
            s != null && s.loss_reason ? o.value = (g = d.lossReasons.find(_ => je(_.code) === je(s.loss_reason))) == null ? void 0 : g.label : o.value = "",
            await r(),
            n("updateNodeData", c, u.value),
            f && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", r)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: u.value,
            baseColor: "red-normal",
            icon: "thumb-down-line",
            title: s.$t("journey.sidebar.lost_deal"),
            description: o.value || s.$t("lead.messages.error.select-reason"),
            onOpenConfig: f[1] || (f[1] = g => l.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Kl), {
                key: 0,
                ref_key: "modal",
                ref: p,
                show: l.value,
                lossReasons: e.lossReasons,
                action: e.data,
                entity: e.entity,
                editable: b.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => l.value = !1)
            }, null, 8, ["show", "lossReasons", "action", "entity", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Zl = {
    emits: ["selected", "close"],
    components: {
        TemplateCard: Gt,
        SelectCategories: Qt,
        SelectTypes: Yt,
        SelectGroups: Jt,
        MPopOver: Kt,
        Loader: Xt
    },
    props: {
        show: {
            type: Boolean,
            default: !1
        }
    },
    async mounted() {
        await this.loadOptions()
    },
    data() {
        return {
            loading: !1,
            validatedTemplates: [],
            templateAlert: !0,
            form: {
                categoriesSelected: null,
                groups: null,
                types: null,
                search: ""
            },
            active: !0,
            sort: {
                label: "label",
                options: ["newest", "oldest", "a_z", "z_a"]
            }
        }
    },
    watch: {
        form: {
            deep: !0,
            handler: async function() {
                await this.handlerLoadTemplates()
            }
        }
    },
    computed: {
        ...Je(["company", "user"]),
        ...Je({
            templates: "messaging/template/templates",
            canCreate: "messaging/template/canCreate",
            categories: "messaging/template/categories"
        })
    },
    methods: {
        ...pt({
            loadTemplates: "messaging/template/loadTemplates"
        }),
        async loadOptions(e) {
            if (!this.loading) {
                this.loading = !0;
                try {
                    await this.loadTemplates({
                        search: e,
                        status: ["approved"],
                        limit: 100
                    }),
                    this.validatedTemplates = this.templates.filter(t => {
                        var d;
                        return !(((d = t.template_params) == null ? void 0 : d.items) ?? t.template_params ?? []).some(l => l.value === "product_name")
                    }
                    )
                } catch {
                    this.$notification.notify({
                        type: "error",
                        title: "Ops",
                        text: this.$t("messaging_template.load_error")
                    })
                } finally {
                    this.loading = !1
                }
            }
        },
        async handlerLoadTemplates() {
            this.loading = !0;
            try {
                const e = {
                    search: this.form.search.trim(),
                    status: ["approved"],
                    idGroups: this.form.groups,
                    idCategories: this.form.categoriesSelected,
                    types: this.form.types,
                    limit: 100
                };
                await this.loadTemplates(e),
                this.validatedTemplates = this.templates.filter(t => {
                    var d;
                    return !(((d = t.template_params) == null ? void 0 : d.items) ?? t.template_params ?? []).some(l => l.value === "product_name")
                }
                )
            } catch {
                this.$notification.notify({
                    type: "error",
                    title: "Ops",
                    text: this.$t("messaging_template.load_error")
                })
            } finally {
                this.loading = !1
            }
        },
        handlerSort(e) {
            this.sort.label = e;
            const t = {
                a_z: {
                    field: "vertical",
                    type: "string"
                },
                z_a: {
                    field: "vertical",
                    desc: !0,
                    type: "string"
                },
                newest: {
                    field: "updated_at",
                    type: "date"
                },
                oldest: {
                    field: "updated_at",
                    desc: !0,
                    type: "date"
                }
            }[e];
            let n = this.validatedTemplates.sort( (d, l) => {
                const u = d.template[t.field] || ""
                  , p = l.template[t.field] || "";
                return t.type === "date" ? new Date(u) - new Date(p) : u.localeCompare(p)
            }
            );
            t.desc && (n = n.reverse()),
            this.validatedTemplates = n
        },
        closeModal() {
            this.form = {
                categoriesSelected: null,
                groups: null,
                types: null,
                search: ""
            },
            this.$emit("close")
        }
    }
}
  , en = {
    class: "w-100 d-flex flex-column"
}
  , tn = {
    class: "list__header d-flex justify-content-between mb-0 w-100 border-bottom"
}
  , an = {
    class: "nav"
}
  , ln = {
    class: "filters-row mt-4 d-flex align-items-center"
}
  , nn = {
    class: "filters-row d-flex justify-content-between w-100"
}
  , on = {
    class: "d-flex justify-content-start pe-0 h-100"
}
  , sn = {
    class: "d-flex justify-content-between w-100"
}
  , dn = {
    class: "messaging-select__container bg-white border w-100"
}
  , rn = {
    class: "mb-0"
}
  , un = ["onClick"]
  , cn = {
    class: "cards-content mt-4"
}
  , mn = {
    key: 0,
    class: "row pb-4"
}
  , pn = {
    key: 1
};
function fn(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsButton")
      , c = m("router-link")
      , y = m("DsInput")
      , o = m("select-categories")
      , b = m("select-groups")
      , v = m("select-types")
      , s = m("DsIcon")
      , f = m("DsTypography")
      , g = m("m-pop-over")
      , _ = m("TemplateCard")
      , i = m("loader")
      , T = m("DsModal");
    return D(),
    E(T, {
        show: n.show,
        onHide: u.closeModal,
        title: e.$t("activity.new"),
        headerClass: "box-header",
        bodyClass: "pt-1",
        extended: "",
        appendToBody: "",
        scrollable: "",
        size: "lg",
        titleSize: "sm",
        class: "template-gallery-modal"
    }, {
        header: h( () => [S("div", en, [a(p, {
            text: e.$t("messaging.chat.chat_editor.modal_template.title"),
            size: "md",
            class: "pb-2"
        }, null, 8, ["text"]), S("div", tn, [S("ul", an, [S("li", {
            class: he(["nav-item me-4", {
                actived: l.active
            }])
        }, [a(r, {
            text: `${e.$t("messaging.chat.chat_editor.modal_template.enabled_label")}`,
            variant: "link",
            onClick: t[0] || (t[0] = w => l.active = !0),
            class: "px-0"
        }, null, 8, ["text"])], 2)]), S("div", null, [e.canCreate ? (D(),
        E(c, {
            key: 0,
            class: "btn btn-green-normal small rounded fw-semibold mb-2",
            to: {
                name: "messaging_template.create"
            }
        }, {
            default: h( () => [t[5] || (t[5] = S("i", {
                class: "icon-add-line"
            }, null, -1)), Me(" " + ye(e.$t("messaging_template.list.create_button")), 1)]),
            _: 1,
            __: [5]
        })) : H("", !0)])]), S("div", ln, [a(y, {
            modelValue: l.form.search,
            "onUpdate:modelValue": t[1] || (t[1] = w => l.form.search = w),
            placeholder: e.$t("new_websites.model_gallery.header.search"),
            icon: "search-line",
            class: "bg-white me-3 h-100 w-50",
            inputClass: "border-gray-400 h-100"
        }, null, 8, ["modelValue", "placeholder"]), S("div", nn, [a(o, {
            class: "h-100 ms-auto me-3",
            selectClass: "btn-outline-green-normal bg-white",
            onChange: t[2] || (t[2] = w => l.form.categoriesSelected = w)
        }), a(b, {
            class: "h-100 me-3",
            selectClass: "btn-outline-green-normal bg-white",
            onChange: t[3] || (t[3] = w => l.form.groups = w)
        }), a(v, {
            class: "h-100 me-3",
            selectClass: "btn-outline-green-normal bg-white",
            onChange: t[4] || (t[4] = w => l.form.types = w)
        }), S("div", on, [a(g, {
            id: "select-sort-popover",
            class: "template-select__sorter",
            align: "left",
            closeOnClickInside: !0
        }, {
            "pop-over--controller": h(w => [a(r, {
                class: "messaging-select__controller h-100",
                variant: "outline-green-normal"
            }, {
                default: h( () => [S("div", sn, [a(s, {
                    icon: "arrow-up-down-line",
                    class: "text-green-normal me-2"
                }), a(f, {
                    tag: "span",
                    title: l.sort.label,
                    class: "text-truncate me-2",
                    color: "green-normal",
                    text: e.$t(`messaging.chat.chat_editor.modal_template.sort.${l.sort.label}`)
                }, null, 8, ["title", "text"]), a(s, {
                    class: "text-green-normal",
                    icon: w.visible ? "arrow-up-s-line" : "arrow-down-s-line"
                }, null, 8, ["icon"])])]),
                _: 2
            }, 1024)]),
            "pop-over--wrapper": h( () => [S("div", dn, [S("ul", rn, [(D(!0),
            F(fe, null, Te(l.sort.options, w => (D(),
            F("li", {
                class: "p-2 cursor-pointer fw-normal small",
                key: w,
                onClick: P => u.handlerSort(w)
            }, ye(e.$t(`messaging.chat.chat_editor.modal_template.sort.${w}`)), 9, un))), 128))])])]),
            _: 1
        })])])])])]),
        body: h( () => [S("div", cn, [l.loading ? (D(),
        F("div", pn, [a(i)])) : (D(),
        F("div", mn, [(D(!0),
        F(fe, null, Te(l.validatedTemplates, w => (D(),
        F("div", {
            key: w.id,
            class: "col-lg-4 mt-2"
        }, [a(_, {
            class: "rounded",
            templateObject: w,
            onSelect: P => e.$emit("selected", w)
        }, null, 8, ["templateObject", "onSelect"])]))), 128))]))])]),
        _: 1
    }, 8, ["show", "onHide", "title"])
}
const vn = ge(Zl, [["render", fn], ["__scopeId", "data-v-3d5a9a9a"]])
  , gn = {
    emits: ["close"],
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        message: {
            type: Object,
            default: () => {}
        }
    }
}
  , hn = {
    class: "auto-message-preview shadow-lg rounded-top m-3"
}
  , bn = {
    class: "auto-message-preview__body p-3 pb-5"
}
  , yn = {
    class: "auto-message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
};
function wn(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsTypography")
      , c = m("DsSubtitle")
      , y = m("DsModal");
    return D(),
    E(y, {
        show: n.show,
        onHide: t[0] || (t[0] = o => e.$emit("close")),
        size: "md",
        appendToBody: "",
        headerClass: "mx-2",
        bodyClass: "mx-2",
        footerClass: "mx-2"
    }, {
        header: h( () => [S("div", null, [a(p, {
            size: "md",
            text: n.message.name
        }, null, 8, ["text"])])]),
        body: h( () => [S("div", hn, [a(r, {
            tag: "div",
            class: "auto-message-preview__header p-3 text-white d-flex align-items-center fw-bold",
            color: "white"
        }, {
            default: h( () => [t[1] || (t[1] = S("div", {
                tag: "span",
                class: "p-3 bg-gray-300 me-2 rounded-3"
            }, null, -1)), Me(" " + ye(e.$t("messaging_template.create.preview.company")), 1)]),
            _: 1,
            __: [1]
        }), S("div", bn, [S("div", yn, [a(r, {
            tag: "span",
            innerHTML: n.message.content
        }, null, 8, ["innerHTML"]), a(c, {
            color: "gray-600",
            size: "sm",
            class: "mb-0 mt-2 text-end",
            text: e.$t("messaging_template.create.preview.now")
        }, null, 8, ["text"])])])])]),
        _: 1
    }, 8, ["show"])
}
const _n = ge(gn, [["render", wn], ["__scopeId", "data-v-8bc6d8ce"]])
  , Dn = {
    emits: ["updateAction", "continueSave", "close", "updateData"],
    props: {
        show: Boolean,
        action: Object,
        saving: Boolean,
        editable: Boolean
    },
    components: {
        WhatsappTemplatesModal: vn,
        WhatsappPreviewModal: _n,
        TimeInput: et
    },
    data() {
        const e = {
            template: null,
            canExceedLimit: !1,
            canCreateChatWithoutResponsible: !1,
            weekdays: [{
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }]
        };
        return {
            showWppTemplateModal: !1,
            showMsgPreview: !1,
            showLimitsModal: !1,
            whatsappData: {
                ...e
            },
            default: e,
            weekdaysList: this.$tm("dates.weekdays_short")
        }
    },
    mounted() {
        if (!this.action)
            return;
        const {template: e, weekdays: t, canExceedLimit: n, canCreateChatWithoutResponsible: d} = this.action;
        this.whatsappData = {
            template: e || this.default.template,
            canExceedLimit: n || this.default.canExceedLimit,
            canCreateChatWithoutResponsible: d || this.default.canCreateChatWithoutResponsible,
            weekdays: t || this.default.weekdays
        },
        this.$nextTick( () => {
            this.$emit("updateData", this.whatsappData, !0)
        }
        )
    },
    methods: {
        setWppTemplate(e) {
            this.whatsappData.template = {
                id: e.id,
                name: e.vertical,
                content: e.content
            },
            this.showWppTemplateModal = !1
        },
        removeWppTemplate() {
            this.whatsappData.template = null
        },
        save() {
            this.$emit("updateData", this.whatsappData)
        },
        async validate() {
            return !!this.whatsappData.template
        }
    }
}
  , Tn = {
    key: 0,
    class: "mb-3"
}
  , $n = {
    key: 1,
    class: "bg-green-light text-truncate p-2 d-flex align-items-center rounded-1 mb-3"
}
  , Cn = {
    class: "col-11"
}
  , Sn = {
    class: "border rounded d-flex flex-column align-items-start"
}
  , xn = {
    class: "d-flex align-items-center"
}
  , kn = {
    class: "d-flex align-items-center"
}
  , Pn = {
    class: "pt-3 w-100"
}
  , Vn = {
    class: "me-3"
}
  , zn = {
    class: "d-flex w-100"
};
function An(e, t, n, d, l, u) {
    var _, i;
    const p = m("DsTypography")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsButton")
      , o = m("DsButtonDropdown")
      , b = m("DsCheckbox")
      , v = m("time-input")
      , s = m("DsModal")
      , f = m("WhatsappTemplatesModal")
      , g = m("WhatsappPreviewModal");
    return D(),
    F(fe, null, [a(s, {
        show: n.show,
        size: "md",
        title: e.$t("journey.modals.whatsapp.title"),
        appendToBody: "",
        alwaysRender: "",
        onHide: t[7] || (t[7] = T => e.$emit("close"))
    }, {
        body: h( () => {
            var T, w, P, k, V;
            return [a(p, {
                tag: "span",
                class: "text-black fw-semibold mb-1 fs-3",
                text: e.$t("flow.selected_actions_labels.whatsapp.template")
            }, null, 8, ["text"]), a(c, {
                class: "mb-2",
                text: e.$t("journey.information_icons.whatsapp.template"),
                placement: "top",
                offset: "5",
                appendToBody: "",
                tooltipClass: "fw-normal information-tooltip"
            }, {
                default: h( () => [a(r, {
                    icon: "information-line",
                    class: "fs-2 ms-1 text-green-dark"
                })]),
                _: 1
            }, 8, ["text"]), (T = l.whatsappData) != null && T.template ? (D(),
            F("div", $n, [S("div", Cn, [a(p, {
                class: "text-black fw-semibold mb-1 fs-3",
                text: (P = (w = l.whatsappData) == null ? void 0 : w.template) == null ? void 0 : P.name
            }, null, 8, ["text"]), a(p, {
                class: "mb-1 fs-3 text-truncate",
                color: "gray-600",
                text: (V = (k = l.whatsappData) == null ? void 0 : k.template) == null ? void 0 : V.content
            }, null, 8, ["text"])]), a(o, {
                buttonDisabled: !n.editable,
                buttonVariant: "link",
                buttonIcon: "more-2-line",
                disableArrow: "",
                appendToBody: ""
            }, {
                default: h( () => [S("div", Sn, [a(y, {
                    icon: "eye-line",
                    variant: "link",
                    text: e.$t("messaging.configurations.modal_new_message.actions.view"),
                    onClick: t[1] || (t[1] = R => l.showMsgPreview = !0)
                }, null, 8, ["text"]), a(y, {
                    icon: "pencil-line",
                    variant: "link",
                    text: e.$t("messaging.configurations.modal_new_message.actions.edit"),
                    onClick: t[2] || (t[2] = R => l.showWppTemplateModal = !0)
                }, null, 8, ["text"]), a(y, {
                    icon: "delete-bin-2-line",
                    iconClass: "text-red-normal",
                    variant: "link",
                    text: e.$t("messaging.configurations.modal_new_message.actions.delete"),
                    onClick: t[3] || (t[3] = R => u.removeWppTemplate())
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["buttonDisabled"])])) : (D(),
            F("div", Tn, [a(y, {
                text: e.$t("flow.selected_actions_labels.whatsapp.select_template"),
                disabled: !n.editable,
                icon: "whatsapp-line",
                variant: "outline-green-normal",
                class: "reverse-hover",
                onClick: t[0] || (t[0] = R => l.showWppTemplateModal = !0)
            }, null, 8, ["text", "disabled"])])), S("div", xn, [a(b, {
                class: "align-items-center ms-0",
                modelValue: l.whatsappData.canExceedLimit,
                "onUpdate:modelValue": t[4] || (t[4] = R => l.whatsappData.canExceedLimit = R),
                disabled: !n.editable,
                labelClass: "mb-0",
                label: "Ao exceder limite de conversas, realizar cobrança automática"
            }, null, 8, ["modelValue", "disabled"]), a(c, {
                class: "mb-1",
                text: e.$t("journey.information_icons.whatsapp.limit"),
                placement: "top",
                offset: "5",
                appendToBody: "",
                tooltipClass: "fw-normal information-tooltip"
            }, {
                default: h( () => [a(r, {
                    icon: "information-line",
                    class: "fs-2 ms-1 text-green-dark"
                })]),
                _: 1
            }, 8, ["text"])]), S("div", kn, [a(b, {
                class: "align-items-center ms-0",
                modelValue: l.whatsappData.canCreateChatWithoutResponsible,
                "onUpdate:modelValue": t[5] || (t[5] = R => l.whatsappData.canCreateChatWithoutResponsible = R),
                disabled: !n.editable,
                labelClass: "mb-0",
                label: "Criar novas conversas sem atribuir responsável"
            }, null, 8, ["modelValue", "disabled"]), a(c, {
                class: "mb-1",
                text: "Ao criar novas conversas não será atribuída a um responsável, podendo ser utilizado com a fila de atendimento, chatbot, para atender a solicitações de clientes.",
                placement: "top",
                offset: "5",
                appendToBody: "",
                tooltipClass: "fw-normal information-tooltip"
            }, {
                default: h( () => [a(r, {
                    icon: "information-line",
                    class: "fs-2 ms-1 text-green-dark"
                })]),
                _: 1
            })]), S("div", Pn, [a(p, {
                tag: "span",
                class: "fw-semibold fs-3"
            }, {
                default: h( () => [Me(ye(e.$t("flow.selected_actions_labels.whatsapp.schedule")), 1)]),
                _: 1
            }), a(c, {
                class: "mb-1",
                text: e.$t("journey.information_icons.whatsapp.time"),
                placement: "top",
                offset: "5",
                appendToBody: "",
                tooltipClass: "w-25 fw-normal information-tooltip"
            }, {
                default: h( () => [a(r, {
                    icon: "information-line",
                    class: "fs-2 ms-1 text-green-dark"
                })]),
                _: 1
            }, 8, ["text"]), a(p, {
                class: "fs-2 text-gray-500 mb-3 mt-2",
                color: "gray-600",
                text: e.$t("flow.selected_actions_texts.whatsapp")
            }, null, 8, ["text"])]), (D(!0),
            F(fe, null, Te(l.whatsappData.weekdays, (R, L) => (D(),
            F("div", {
                key: L,
                class: "d-flex align-items-center mb-2"
            }, [S("div", Vn, [a(b, {
                class: "timer-checkbox",
                modelValue: R.active,
                "onUpdate:modelValue": N => R.active = N,
                label: e.$rt(l.weekdaysList[L]),
                isSwitch: !0,
                checked: R.active,
                disabled: !n.editable
            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "checked", "disabled"])]), a(v, {
                modelValue: R.start,
                "onUpdate:modelValue": N => R.start = N,
                name: `weekday-start-${L}`,
                class: he([{
                    inactive: !R.active
                }, "mb-1 weekday-timer"]),
                disabled: !R.active || !n.editable,
                right: !0,
                "data-vv-value-path": "date"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "class", "disabled"]), a(v, {
                modelValue: R.end,
                "onUpdate:modelValue": N => R.end = N,
                name: `weekday-end-${L}`,
                class: he([{
                    inactive: !R.active
                }, "mb-1 weekday-timer"]),
                disabled: !R.active || !n.editable,
                right: !0,
                "data-vv-value-path": "date"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "class", "disabled"])]))), 128))]
        }
        ),
        footer: h( () => [S("div", zn, [a(y, {
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: u.save
        }, null, 8, ["text", "disabled", "onClick"]), a(y, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[6] || (t[6] = T => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show", "title"]), l.showWppTemplateModal ? (D(),
    E(f, {
        key: 0,
        show: l.showWppTemplateModal,
        onClose: t[8] || (t[8] = T => l.showWppTemplateModal = !1),
        onSelected: t[9] || (t[9] = T => u.setWppTemplate(T))
    }, null, 8, ["show"])) : H("", !0), (_ = l.whatsappData) != null && _.template ? (D(),
    E(g, {
        key: 1,
        message: (i = l.whatsappData) == null ? void 0 : i.template,
        show: l.showMsgPreview,
        onClose: t[10] || (t[10] = T => l.showMsgPreview = !1)
    }, null, 8, ["message", "show"])) : H("", !0)], 64)
}
const Bn = ge(Dn, [["render", An], ["__scopeId", "data-v-0a8c1d5a"]])
  , Mn = {
    __name: "ActionSendWhatsappNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , l = x(!0)
          , u = x(null)
          , p = async () => {
            u.value && (l.value = await u.value.validate())
        }
        ;
        J.$on("validateAll", p);
        const {node: r} = Ce()
          , c = ze()
          , y = x("")
          , o = Z( () => c.getters["flows/stepsCountData"] === null)
          , b = Z( () => {
            var s, f;
            return !!((f = (s = c.getters) == null ? void 0 : s.subscriptionAddons) != null && f.find(g => g.fk_id.includes("2025_gtm_ai_basic")))
        }
        )
          , v = async (s, f) => {
            var g;
            r.data = s,
            (g = s == null ? void 0 : s.template) != null && g.name ? y.value = s.template.name : y.value = "",
            await p(),
            d.value = !1,
            n("updateNodeData", r, l.value),
            f && J.$emit("nodeReady", r)
        }
        ;
        return ke( () => {
            J.$off("validateAll", p)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(r),
            valid: l.value,
            locked: b.value,
            baseColor: "blue-normal",
            icon: "whatsapp-line",
            title: s.$t("journey.sidebar.whatsapp_message"),
            description: y.value || s.$t("journey.nodes.action_email.description"),
            onOpenConfig: f[1] || (f[1] = g => d.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Bn), {
                key: 0,
                ref_key: "modal",
                ref: u,
                show: d.value,
                action: e.data,
                editable: o.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => d.value = !1)
            }, null, 8, ["show", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "locked", "title", "description"]))
    }
}
  , En = {
    emits: ["updateData", "close"],
    name: "tag-item",
    props: {
        action: Object,
        tags: Array,
        show: Boolean,
        editable: Boolean
    },
    data() {
        const e = {
            tag: ""
        };
        return {
            default: e,
            tagData: e
        }
    },
    created() {
        var e;
        if ((e = this.action) != null && e.tag) {
            const t = this.tags.find(n => n.code === this.action.tag);
            this.tagData = {
                tag: t || null
            }
        }
        this.$nextTick( () => {
            this.save(!0)
        }
        )
    },
    methods: {
        save(e=!1) {
            var t;
            this.$emit("updateData", {
                tag: (t = this.tagData.tag) == null ? void 0 : t.code
            }, e)
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate();
            return e
        }
    }
}
  , jn = {
    class: "d-flex w-100"
};
function On(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsTypography")
      , o = m("DsSelect")
      , b = m("Field")
      , v = m("Form")
      , s = m("DsButton")
      , f = m("DsModal");
    return D(),
    E(f, {
        size: "md",
        show: n.show,
        appendToBody: "",
        alwaysRender: "",
        onHide: t[5] || (t[5] = g => e.$emit("close")),
        headerClass: "d-flex align-items-center"
    }, {
        header: h( () => [a(p, {
            size: "md",
            text: e.$t("journey.modals.add_tag.title")
        }, null, 8, ["text"]), a(c, {
            class: "mb-2",
            text: e.$t("journey.information_icons.tag"),
            placement: "top",
            offset: "5",
            appendToBody: "",
            tooltipClass: "w-25 fw-normal information-tooltip"
        }, {
            default: h( () => [a(r, {
                icon: "information-line",
                class: "fs-2 ms-1 text-green-dark"
            })]),
            _: 1
        }, 8, ["text"])]),
        body: h( () => [a(v, {
            ref: "observer",
            class: "bg-white design-system"
        }, {
            default: h( () => [a(b, {
                modelValue: l.tagData.tag,
                "onUpdate:modelValue": t[2] || (t[2] = g => l.tagData.tag = g),
                rules: "required",
                name: "tag"
            }, {
                default: h( ({errors: g, componentField: _}) => [a(y, {
                    tag: "label",
                    fontWeight: "bold",
                    fontSize: "2",
                    text: e.$t("flow.selected_actions_labels.tag")
                }, null, 8, ["text"]), a(o, le(_, {
                    class: "mb-2 mt-1",
                    options: n.tags,
                    hasError: g.length > 0,
                    disabled: !n.editable,
                    appendToBody: "",
                    filterable: "",
                    "onOption:selected": t[0] || (t[0] = i => l.tagData.tag = i),
                    "onOption:deselect": t[1] || (t[1] = i => l.tagData.tag = i)
                }), null, 16, ["options", "hasError", "disabled"])]),
                _: 1
            }, 8, ["modelValue"])]),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", jn, [a(s, {
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: t[3] || (t[3] = g => u.save())
        }, null, 8, ["text", "disabled"]), a(s, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[4] || (t[4] = g => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const In = ge(En, [["render", On]])
  , Un = {
    __name: "ActionAddTagNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        tags: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , l = x(!1)
          , u = x(!0)
          , p = x(null)
          , r = async () => {
            p.value && (u.value = await p.value.validate())
        }
        ;
        J.$on("validateAll", r);
        const {node: c} = Ce()
          , y = ze()
          , o = x("")
          , b = Z( () => y.getters["flows/stepsCountData"] === null)
          , v = async (s, f) => {
            var g;
            l.value = !1,
            c.data = s,
            s.tag ? o.value = (g = d.tags.find(_ => je(_.code) === je(s.tag))) == null ? void 0 : g.label : o.value = "",
            await r(),
            n("updateNodeData", c, u.value),
            f && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", r)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: u.value,
            baseColor: "green-normal",
            icon: "price-tag-3-line",
            title: s.$t("journey.sidebar.add_tag"),
            description: o.value || s.$t("flow.actions.tag.select"),
            onOpenConfig: f[1] || (f[1] = g => l.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(In), {
                key: 0,
                ref_key: "modal",
                ref: p,
                show: l.value,
                tags: e.tags,
                action: e.data,
                editable: b.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => l.value = !1)
            }, null, 8, ["show", "tags", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Nn = {
    class: "my-2"
}
  , Rn = {
    class: "d-flex w-100"
}
  , Ln = {
    __name: "ActionAssignDealModal",
    props: {
        show: Boolean,
        initialData: Object,
        users: Array,
        routers: Array,
        editable: Boolean
    },
    emits: ["updateData", "close"],
    setup(e, {expose: t, emit: n}) {
        const d = e
          , l = n
          , u = x("router")
          , p = x(null)
          , r = x(null);
        Ve( () => {
            const {initialData: b, users: v, routers: s} = d;
            b && (b.id_user ? (p.value = v.find(f => f.code === b.id_user),
            u.value = "user") : b.id_router && (r.value = s.find(f => f.code === b.id_router),
            u.value = "router"),
            Ee( () => {
                var f, g;
                l("updateData", {
                    type: u.value,
                    id_user: (f = p.value) == null ? void 0 : f.code,
                    id_router: (g = r.value) == null ? void 0 : g.code
                }, !0)
            }
            ))
        }
        );
        const c = () => {
            var b, v;
            l("updateData", {
                type: u.value,
                id_user: (b = p.value) == null ? void 0 : b.value,
                id_router: (v = r.value) == null ? void 0 : v.code
            }),
            l("close")
        }
          , y = x(null);
        return t({
            validate: async () => {
                if (!y.value)
                    return !1;
                const {valid: b} = await y.value.validate();
                return b
            }
        }),
        (b, v) => {
            const s = m("DsHeading")
              , f = m("DsIcon")
              , g = m("DsTooltip")
              , _ = m("DsTypography")
              , i = m("DsRadio")
              , T = m("DsEntityMultiselect")
              , w = m("Field")
              , P = m("DsSelect")
              , k = m("Form")
              , V = m("DsButton")
              , R = m("DsModal");
            return D(),
            E(R, {
                show: e.show,
                size: "md",
                appendToBody: "",
                alwaysRender: "",
                onHide: v[5] || (v[5] = L => b.$emit("close")),
                headerClass: "d-flex align-items-center"
            }, {
                header: h( () => [a(s, {
                    size: "md",
                    text: b.$t("journey.modals.assign_deal.title")
                }, null, 8, ["text"]), a(g, {
                    class: "mb-2",
                    text: b.$t("journey.information_icons.assign_deal"),
                    placement: "top",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "w-25 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(f, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]),
                body: h( () => [a(k, {
                    ref_key: "observer",
                    ref: y
                }, {
                    default: h( () => [a(_, {
                        tag: "span",
                        fontWeight: "bold",
                        text: b.$t("journey.modals.create_deal.distribution_mode"),
                        fontSize: "2"
                    }, null, 8, ["text"]), S("div", Nn, [a(i, {
                        modelValue: u.value,
                        "onUpdate:modelValue": v[0] || (v[0] = L => u.value = L),
                        name: "router",
                        inputValue: "router",
                        label: b.$t("pipelines.multiple_actions.change_responsible_modal.distributor"),
                        class: "flex-fill",
                        disabled: !e.editable
                    }, null, 8, ["modelValue", "label", "disabled"]), a(i, {
                        modelValue: u.value,
                        "onUpdate:modelValue": v[1] || (v[1] = L => u.value = L),
                        name: "user",
                        inputValue: "user",
                        label: b.$t("user"),
                        class: "flex-fill mt-1",
                        disabled: !e.editable
                    }, null, 8, ["modelValue", "label", "disabled"])]), u.value === "user" ? (D(),
                    E(w, {
                        key: 0,
                        modelValue: p.value,
                        "onUpdate:modelValue": v[2] || (v[2] = L => p.value = L),
                        rules: "required",
                        name: "user-assign-deal"
                    }, {
                        default: h( ({errors: L, componentField: N}) => [a(_, {
                            tag: "span",
                            fontWeight: "bold",
                            text: "Usuário",
                            fontSize: "2"
                        }), a(T, le(N, {
                            class: "mb-2 mt-1",
                            entity: "users",
                            size: "md",
                            closeOnSelect: "",
                            hasError: L.length > 0,
                            appendToBody: "",
                            placeholder: "Selecione um usuário",
                            disabled: !e.editable
                        }), null, 16, ["hasError", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0), u.value === "router" ? (D(),
                    E(w, {
                        key: 1,
                        modelValue: r.value,
                        "onUpdate:modelValue": v[3] || (v[3] = L => r.value = L),
                        rules: "required",
                        name: "router"
                    }, {
                        default: h( ({errors: L, componentField: N}) => [a(_, {
                            tag: "span",
                            fontWeight: "bold",
                            text: b.$t("email_list.router"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(P, le(N, {
                            class: "mb-2 mt-1",
                            options: e.routers,
                            hasError: L.length > 0,
                            disabled: !e.editable,
                            appendToBody: "",
                            placeholder: b.$t("lists.select_router")
                        }), null, 16, ["options", "hasError", "disabled", "placeholder"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0)]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", Rn, [a(V, {
                    text: b.$t("save"),
                    disabled: !e.editable,
                    size: "lg",
                    class: "w-50",
                    onClick: c
                }, null, 8, ["text", "disabled"]), a(V, {
                    text: b.$t("cancel"),
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: v[4] || (v[4] = L => b.$emit("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , Wn = {
    __name: "ActionAssignDealNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        users: Array,
        routers: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , l = x(!1)
          , u = x(!0)
          , p = x(null)
          , r = async () => {
            p.value && (u.value = await p.value.validate())
        }
        ;
        J.$on("validateAll", r);
        const {node: c} = Ce()
          , y = ze()
          , o = x("")
          , b = Z( () => y.getters["flows/stepsCountData"] === null)
          , v = async (s, f) => {
            var g, _;
            if (l.value = !1,
            c.data = s,
            s.id_router) {
                const i = (g = d.routers.find(T => je(T.code) === je(s.id_router))) == null ? void 0 : g.label;
                o.value = `Distribuidor ${i}`,
                delete c.data.id_user
            } else if (s.id_user) {
                const i = (_ = d.users.find(T => je(T.code) === je(s.id_user))) == null ? void 0 : _.label;
                o.value = `Usuário ${i}`,
                delete c.data.id_router
            } else
                o.value = "";
            await r(),
            n("updateNodeData", c, u.value),
            f && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", r)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: u.value,
            baseColor: "green-normal",
            icon: "user-add-line",
            title: s.$t("journey.sidebar.assign_deal"),
            description: o.value || s.$t("messaging.config.select_router_user"),
            onOpenConfig: f[1] || (f[1] = g => l.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Ln), {
                key: 0,
                ref_key: "modal",
                ref: p,
                show: l.value,
                initialData: e.data,
                users: e.users,
                routers: e.routers,
                editable: b.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => l.value = !1)
            }, null, 8, ["show", "initialData", "users", "routers", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Hn = {
    class: "my-2"
}
  , Fn = {
    class: "d-flex w-100"
}
  , qn = {
    __name: "ActionCreateDealChatbotModal",
    props: {
        show: Boolean,
        initialData: Object,
        users: Array,
        routers: Array,
        pipelines: Array
    },
    emits: ["updateData", "close"],
    setup(e, {expose: t, emit: n}) {
        const d = e
          , l = n
          , {t: u} = xe()
          , p = Z( () => [{
            label: u("pipelineEntities.LEAD"),
            value: "LEAD"
        }])
          , r = x("router")
          , c = x(null)
          , y = x(null)
          , o = x(null)
          , b = x(null)
          , v = x(null)
          , s = x(!1)
          , f = x([])
          , g = x(!1)
          , _ = async k => {
            f.value = [];
            const V = await st(k);
            f.value = (V || []).map(R => ({
                code: R.id,
                label: R.name
            }))
        }
          , i = Z( () => {
            const {value: k} = c.value || {};
            return k ? d.pipelines.filter(V => V.entity.toUpperCase() === k.toUpperCase()) : []
        }
        );
        We(b, async k => {
            g.value = !0,
            v.value = null,
            k != null && k.code ? await _(k.code) : f.value = [],
            g.value = !1
        }
        ),
        Ve(async () => {
            const {initialData: k, pipelines: V, users: R, routers: L} = d;
            k != null && k.entity ? c.value = p.value.find(N => N.value === k.entity) : c.value = p.value[0],
            k != null && k.id_pipeline && (b.value = V.find(N => N.code === k.id_pipeline),
            await _(k.id_pipeline),
            v.value = f.value.find(N => N.code === k.id_pipeline_item)),
            k != null && k.id_user ? (y.value = R.find(N => N.code === k.id_user),
            r.value = "user") : k != null && k.id_router && (o.value = L.find(N => N.code === k.id_router),
            r.value = "router"),
            s.value = !!(k != null && k.assign_chat_to_deal_owner),
            Ee( () => {
                var N;
                l("updateData", {
                    type: r.value,
                    entity: c.value,
                    user: (N = y.value) == null ? void 0 : N.code,
                    router: o.value,
                    pipeline: b.value,
                    pipeline_item: v.value,
                    assign_chat_to_deal_owner: s.value
                }, !0)
            }
            )
        }
        );
        const T = () => {
            var k, V;
            l("updateData", {
                type: r.value,
                entity: c.value,
                user: ((k = y.value) == null ? void 0 : k.value) || ((V = y.value) == null ? void 0 : V.code),
                router: o.value,
                pipeline: b.value,
                pipeline_item: v.value,
                assign_chat_to_deal_owner: s.value
            }),
            l("close")
        }
          , w = x(null);
        return t({
            validate: async () => {
                if (!w.value)
                    return !1;
                const {valid: k} = await w.value.validate();
                return k
            }
        }),
        (k, V) => {
            const R = m("DsTypography")
              , L = m("DsSelect")
              , N = m("Field")
              , oe = m("DsRadio")
              , re = m("DsEntityMultiselect")
              , Pe = m("DsCheckbox")
              , W = m("Form")
              , K = m("DsButton")
              , G = m("DsModal");
            return D(),
            E(G, {
                show: e.show,
                size: "md",
                title: k.$t("journey.modals.create_deal.title"),
                appendToBody: "",
                alwaysRender: "",
                onHide: V[9] || (V[9] = U => k.$emit("close"))
            }, {
                body: h( () => [a(W, {
                    ref_key: "observer",
                    ref: w
                }, {
                    default: h( () => [a(N, {
                        modelValue: c.value,
                        "onUpdate:modelValue": V[0] || (V[0] = U => c.value = U),
                        name: "entity",
                        rules: "required"
                    }, {
                        default: h( ({errors: U, componentField: z}) => [a(R, {
                            tag: "span",
                            fontWeight: "bold",
                            text: k.$t("journey.modals.create_deal.entity"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(L, le(z, {
                            "data-testid": "entity-select",
                            class: "mb-2 mt-1",
                            options: p.value,
                            placeholder: k.$t("journey.modals.create_deal.select_entity"),
                            hasError: U.length > 0,
                            appendToBody: ""
                        }), null, 16, ["options", "placeholder", "hasError"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(N, {
                        modelValue: b.value,
                        "onUpdate:modelValue": V[1] || (V[1] = U => b.value = U),
                        name: "pipeline",
                        rules: "required"
                    }, {
                        default: h( ({errors: U, componentField: z}) => [a(R, {
                            tag: "span",
                            fontWeight: "bold",
                            text: k.$t("journey.modals.create_deal.pipeline"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(L, le(z, {
                            "data-testid": "pipeline-select",
                            id: "pipeline",
                            class: "mb-2 mt-1",
                            options: i.value,
                            placeholder: k.$t("journey.modals.create_deal.select_pipeline"),
                            hasError: U.length > 0,
                            appendToBody: ""
                        }), null, 16, ["options", "placeholder", "hasError"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(N, {
                        modelValue: v.value,
                        "onUpdate:modelValue": V[2] || (V[2] = U => v.value = U),
                        name: "pipeline_item",
                        rules: "required"
                    }, {
                        default: h( ({errors: U, componentField: z}) => [a(R, {
                            tag: "span",
                            fontWeight: "bold",
                            text: k.$t("journey.modals.create_deal.pipeline_step"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(L, le(z, {
                            "data-testid": "pipeline-item-select",
                            id: "pipelineItem",
                            class: "mb-2 mt-1",
                            options: f.value,
                            placeholder: k.$t("journey.modals.create_deal.select_pipeline_step"),
                            loading: g.value,
                            hasError: U.length > 0,
                            appendToBody: ""
                        }), null, 16, ["options", "placeholder", "loading", "hasError"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(R, {
                        tag: "span",
                        fontWeight: "bold",
                        text: k.$t("journey.modals.create_deal.distribution_mode"),
                        fontSize: "2"
                    }, null, 8, ["text"]), S("div", Hn, [a(oe, {
                        modelValue: r.value,
                        "onUpdate:modelValue": V[3] || (V[3] = U => r.value = U),
                        "data-testid": "router-radio",
                        name: "router",
                        inputValue: "router",
                        label: k.$t("journey.modals.create_deal.router"),
                        class: "flex-fill"
                    }, null, 8, ["modelValue", "label"]), a(oe, {
                        modelValue: r.value,
                        "onUpdate:modelValue": V[4] || (V[4] = U => r.value = U),
                        "data-testid": "user-radio",
                        name: "user",
                        inputValue: "user",
                        label: k.$t("user"),
                        class: "flex-fill mt-1"
                    }, null, 8, ["modelValue", "label"])]), r.value === "user" ? (D(),
                    E(N, {
                        key: 0,
                        modelValue: y.value,
                        "onUpdate:modelValue": V[5] || (V[5] = U => y.value = U),
                        name: "user-deal-chatbot",
                        rules: "required"
                    }, {
                        default: h( ({errors: U, componentField: z}) => [a(R, {
                            tag: "span",
                            fontWeight: "bold",
                            text: k.$t("user"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(re, le(z, {
                            "data-testid": "user-select",
                            class: "mb-2 mt-1",
                            entity: "users",
                            size: "md",
                            closeOnSelect: "",
                            hasError: U.length > 0,
                            placeholder: k.$t("journey.modals.create_deal.select_user"),
                            appendToBody: "",
                            filterable: ""
                        }), null, 16, ["hasError", "placeholder"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0), r.value === "router" ? (D(),
                    E(N, {
                        key: 1,
                        modelValue: o.value,
                        "onUpdate:modelValue": V[6] || (V[6] = U => o.value = U),
                        name: "router",
                        rules: "required"
                    }, {
                        default: h( ({errors: U, componentField: z}) => [a(R, {
                            tag: "span",
                            fontWeight: "bold",
                            text: k.$t("journey.modals.create_deal.router"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(L, le(z, {
                            "data-testid": "router-select",
                            class: "mb-2 mt-1",
                            options: e.routers,
                            hasError: U.length > 0,
                            placeholder: C(u)("journey.modals.create_deal.select_router"),
                            appendToBody: ""
                        }), null, 16, ["options", "hasError", "placeholder"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0), a(Pe, {
                        class: "mt-4",
                        modelValue: s.value,
                        "onUpdate:modelValue": V[7] || (V[7] = U => s.value = U),
                        isSwitch: "",
                        label: C(u)("journey.modals.create_deal.assign_chat_to_deal_owner"),
                        labelClass: "fw-semibold text-black"
                    }, null, 8, ["modelValue", "label"])]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", Fn, [a(K, {
                    "data-testid": "save-create-deal-modal",
                    text: k.$t("save"),
                    size: "lg",
                    class: "w-50",
                    onClick: T
                }, null, 8, ["text"]), a(K, {
                    "data-testid": "close-create-deal-modal",
                    text: k.$t("cancel"),
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: V[8] || (V[8] = U => k.$emit("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show", "title"])
        }
    }
}
  , Gn = {
    __name: "ActionCreateDealChatbotNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        pipelines: Array,
        users: Array,
        routers: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , {t: l} = xe()
          , {node: u} = Ce()
          , p = x(!0)
          , r = x("")
          , c = x(null)
          , y = async () => {
            c.value && (p.value = await c.value.validate()),
            r.value = ""
        }
        ;
        J.$on("validateAll", y);
        const o = x("");
        async function b(v, s) {
            var f, g, _, i;
            u.data = {
                entity: (f = v == null ? void 0 : v.entity) == null ? void 0 : f.value,
                id_pipeline: (g = v == null ? void 0 : v.pipeline) == null ? void 0 : g.code,
                id_pipeline_item: (_ = v == null ? void 0 : v.pipeline_item) == null ? void 0 : _.code,
                id_user: v == null ? void 0 : v.user,
                id_router: (i = v == null ? void 0 : v.router) == null ? void 0 : i.code,
                assign_chat_to_deal_owner: (v == null ? void 0 : v.assign_chat_to_deal_owner) ?? !1
            },
            d.value = !1,
            v != null && v.pipeline && (o.value = v.pipeline.label,
            v != null && v.pipeline_item && (o.value += ` - ${v.pipeline_item.label}`)),
            await y(),
            n("updateNodeData", u, p.value),
            s && J.$emit("nodeReady", u)
        }
        return ke( () => {
            J.$off("validateAll", y)
        }
        ),
        (v, s) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(u),
            valid: p.value,
            alertMessage: r.value,
            baseColor: "cyan-dark",
            icon: "add-line",
            title: C(l)("journey.nodes.create_deal.title"),
            description: o.value || C(l)("journey.nodes.create_deal.description"),
            onOpenConfig: s[1] || (s[1] = f => d.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(qn), {
                key: 0,
                ref_key: "modal",
                ref: c,
                show: d.value,
                initialData: e.data,
                pipelines: e.pipelines,
                users: e.users,
                routers: e.routers,
                onUpdateData: b,
                onClose: s[0] || (s[0] = f => d.value = !1)
            }, null, 8, ["show", "initialData", "pipelines", "users", "routers"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "title", "description"]))
    }
}
  , Qn = {
    __name: "ActionCloseChatNode",
    setup(e) {
        const t = x(!0)
          , n = async () => !0;
        J.$on("validateAll", n);
        const {node: d} = Ce();
        return Ve( () => {
            J.$emit("nodeReady", d)
        }
        ),
        ke( () => {
            J.$off("validateAll", n)
        }
        ),
        (l, u) => (D(),
        E(C(Se), {
            node: C(d),
            valid: t.value,
            disableEdit: !0,
            baseColor: "red-normal",
            icon: "chat-delete-line",
            title: l.$t("journey.sidebar.close_chat")
        }, null, 8, ["node", "valid", "title"]))
    }
}
  , Yn = {
    class: "d-flex align-items-center gap-2 mb-3"
}
  , Jn = {
    class: "w-100"
}
  , Kn = {
    class: "w-100"
}
  , Xn = {
    key: 1,
    class: "p-3 bg-gray-normal rounded-1 mb-2 text-center"
}
  , Zn = {
    __name: "WhatsappChatbotListConfig",
    props: {
        modelValue: {},
        modelModifiers: {}
    },
    emits: ["update:modelValue"],
    setup(e) {
        const {notifyError: t} = Xe()
          , {t: n} = xe()
          , d = ft(e, "modelValue")
          , l = x({
            title: "",
            description: ""
        })
          , u = x(null)
          , p = async () => {
            const {valid: c} = await u.value.validate();
            if (c) {
                if (d.value.length >= 10) {
                    t("flow.actions.ActionSendMessageChatbot.messages.error.list_limit");
                    return
                }
                d.value.push({
                    id: vt(),
                    type: "text",
                    ...l.value
                }),
                l.value.title = "",
                l.value.description = "",
                u.value.resetForm()
            }
        }
          , r = c => {
            d.value.splice(c, 1)
        }
        ;
        return (c, y) => {
            const o = m("DsTypography")
              , b = m("DsInput")
              , v = m("Field")
              , s = m("DsButton")
              , f = m("Form");
            return D(),
            F("div", null, [a(o, {
                class: "mb-1",
                fontSize: "2",
                text: C(n)("flow.actions.ActionSendMessageChatbot.items_list")
            }, null, 8, ["text"]), a(f, {
                ref_key: "validator",
                ref: u,
                class: "p-2 bg-gray-normal rounded-1 mb-2",
                onKeydown: zt(Ne(p, ["prevent"]), ["enter"])
            }, {
                default: h( () => [S("div", Yn, [S("div", Jn, [a(v, {
                    modelValue: l.value.title,
                    "onUpdate:modelValue": y[0] || (y[0] = g => l.value.title = g),
                    name: "title",
                    rules: "required|max:24",
                    class: "w-100"
                }, {
                    default: h( ({errors: g, componentField: _}) => [a(o, {
                        class: "mb-1",
                        fontSize: "2",
                        text: `${C(n)("label")} *`
                    }, null, 8, ["text"]), a(b, le(_, {
                        hasError: !!g[0],
                        class: "bg-white",
                        placeholder: C(n)("type_here")
                    }), null, 16, ["hasError", "placeholder"])]),
                    _: 1
                }, 8, ["modelValue"])]), S("div", Kn, [a(v, {
                    modelValue: l.value.description,
                    "onUpdate:modelValue": y[1] || (y[1] = g => l.value.description = g),
                    name: "description",
                    rules: "max:72",
                    class: "w-100"
                }, {
                    default: h( ({errors: g, componentField: _}) => [a(o, {
                        class: "mb-1",
                        fontSize: "2",
                        text: C(n)("description")
                    }, null, 8, ["text"]), a(b, le(_, {
                        hasError: !!g[0],
                        class: "bg-white flex-fill",
                        placeholder: C(n)("type_here")
                    }), null, 16, ["hasError", "placeholder"])]),
                    _: 1
                }, 8, ["modelValue"])])]), a(s, {
                    icon: "add-line",
                    variant: "green-normal",
                    "data-testid": "btn-add-list-item",
                    text: C(n)("flow.actions.ActionSendMessageChatbot.add_list_item"),
                    onClick: Ne(p, ["prevent"])
                }, null, 8, ["text"])]),
                _: 1
            }, 8, ["onKeydown"]), d.value.length ? (D(!0),
            F(fe, {
                key: 0
            }, Te(d.value, (g, _) => (D(),
            F("div", {
                key: `action-button-${_}`,
                class: "d-flex align-items-center p-2 border border-gray-400 rounded-1 mb-2"
            }, [a(C(Zt), {
                modelValue: d.value[_],
                "onUpdate:modelValue": i => d.value[_] = i,
                onRemove: i => r(_)
            }, null, 8, ["modelValue", "onUpdate:modelValue", "onRemove"])]))), 128)) : (D(),
            F("div", Xn, [a(o, {
                class: "mb-1",
                fontSize: "2",
                color: "gray-600",
                text: C(n)("flow.actions.ActionSendMessageChatbot.empty_list")
            }, null, 8, ["text"])]))])
        }
    }
}
  , eo = {
    class: "whatsapp-chatbot-message-editor qeditor"
}
  , to = {
    __name: "WhatsappChatbotMessageEditor",
    props: {
        message: String,
        disabled: Boolean
    },
    setup(e, {expose: t}) {
        const n = e
          , d = x("")
          , l = x(null)
          , u = [["bold", "italic", "strike"]];
        function p(o, b) {
            return o === "text/plain" ? l.value.clipboard.dangerouslyPasteHTML(b) : !1
        }
        function r() {
            return {
                modules: {
                    toolbar: !1,
                    imageDropAndPaste: {
                        handler: (...o) => {
                            p(...o)
                        }
                    }
                }
            }
        }
        function c() {
            return [{
                name: "imageDropAndPaste",
                module: At,
                options: {
                    handler: (...o) => {
                        p(...o)
                    }
                }
            }]
        }
        function y(o) {
            l.value = o
        }
        return Ve( () => {
            d.value = n.message
        }
        ),
        t({
            quillEditorRef: l
        }),
        (o, b) => {
            const v = m("DsTypography")
              , s = m("quill-editor");
            return D(),
            F("div", eo, [a(v, {
                class: "mb-1",
                fontSize: "2",
                text: "Texto da mensagem"
            }), S("div", {
                class: he({
                    "bg-gray-dark": n.disabled
                })
            }, [a(s, {
                content: d.value,
                contentType: "html",
                toolbar: u,
                modules: c(),
                options: r(),
                enable: !n.disabled,
                readOnly: n.disabled,
                onReady: y
            }, null, 8, ["content", "modules", "options", "enable", "readOnly"])], 2)])
        }
    }
}
  , ao = {
    class: "d-flex border-bottom"
}
  , lo = {
    class: "col-6 p-4 pb-0 border-end"
}
  , no = {
    class: "overflow-auto ds-scrollbar mt-3",
    style: {
        "max-height": "500px"
    }
}
  , oo = ["onClick"]
  , io = {
    class: "col-6 p-4 pb-0"
}
  , so = {
    class: "chatbot-message-preview shadow-lg rounded-top"
}
  , ro = {
    class: "chatbot-message-preview__body overflow-auto ds-scrollbar p-3 pb-5",
    style: {
        "max-height": "500px"
    }
}
  , uo = {
    class: "chatbot-message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
}
  , co = {
    __name: "WhatsappChatbotMessageTemplate",
    props: {
        channelId: Number,
        selectedTemplate: Object
    },
    emits: ["selectTemplate"],
    setup(e, {emit: t}) {
        const n = e
          , d = t
          , l = ze()
          , u = x("")
          , {notifyError: p} = Xe()
          , r = Z( () => l.getters["messaging/template/templates"])
          , c = async _ => {
            await l.dispatch("messaging/template/loadTemplates", _)
        }
          , y = Z( () => ({
            search: "",
            status: ["approved"],
            id_channel: n.channelId,
            limit: 100
        }))
          , {state: o, isLoading: b, error: v, execute: s} = Bt(async _ => {
            await c(_);
            let i = r.value;
            return i = i.filter(T => {
                var P;
                return !(((P = T.template_params) == null ? void 0 : P.items) ?? T.template_params ?? []).some(k => k.value === "product_name")
            }
            ),
            i
        }
        , [], {
            immediate: !1
        });
        We(v, () => {
            p("Erro ao buscar templates")
        }
        );
        const f = Mt.debounce(_ => {
            s(0, {
                ...y.value,
                search: _
            })
        }
        , 300)
          , g = _ => {
            d("selectTemplate", _)
        }
        ;
        return Ve(async () => {
            s(0, y.value)
        }
        ),
        (_, i) => {
            var V;
            const T = m("DsInput")
              , w = m("DsIcon")
              , P = m("DsTypography")
              , k = m("DsSubtitle");
            return D(),
            F("div", ao, [S("div", lo, [a(T, {
                modelValue: u.value,
                placeholder: "Buscar modelo",
                icon: "search-line",
                class: "bg-white w-100",
                "onUpdate:modelValue": C(f)
            }, null, 8, ["modelValue", "onUpdate:modelValue"]), S("div", no, [C(b) ? (D(),
            E(C(ea), {
                key: 0
            })) : (D(!0),
            F(fe, {
                key: 1
            }, Te(C(o), R => {
                var L;
                return D(),
                F("div", {
                    class: he(["d-flex align-items-center border rounded-1 p-3 mb-2 cursor-pointer", {
                        "bg-green-light": ((L = e.selectedTemplate) == null ? void 0 : L.id) === R.id
                    }]),
                    onClick: N => g(R),
                    key: R.id
                }, [a(w, {
                    icon: "message-2-line",
                    class: "text-green-brand me-3"
                }), a(P, {
                    tag: "span",
                    text: R.vertical,
                    class: "no-wrap lh-sm",
                    fontWeight: "semibold",
                    fontSize: "2"
                }, null, 8, ["text"])], 10, oo)
            }
            ), 128))])]), S("div", io, [S("div", so, [a(P, {
                tag: "div",
                class: "chatbot-message-preview__header p-3 text-white d-flex align-items-center fw-bold",
                color: "white"
            }, {
                default: h( () => [i[0] || (i[0] = S("div", {
                    tag: "span",
                    class: "p-3 bg-gray-300 me-2 rounded-3"
                }, null, -1)), Me(" " + ye(_.$t("messaging_template.create.preview.company")), 1)]),
                _: 1,
                __: [0]
            }), S("div", ro, [S("div", uo, [a(P, {
                tag: "span",
                innerHTML: (V = e.selectedTemplate) == null ? void 0 : V.content
            }, null, 8, ["innerHTML"]), a(k, {
                color: "gray-600",
                size: "sm",
                class: "mb-0 mt-2 text-end",
                text: _.$t("messaging_template.create.preview.now")
            }, null, 8, ["text"])])])])])])
        }
    }
}
  , mo = ge(co, [["__scopeId", "data-v-e7ff6afe"]])
  , po = {
    emits: ["updateAction", "continueSave", "close", "updateData"],
    props: {
        show: Boolean,
        action: Object,
        saving: Boolean
    },
    components: {
        WhatsappChatbotListConfig: Zn,
        WhatsappChatbotMessageEditor: to,
        WhatsappChatbotMessageTemplate: mo
    },
    setup(e, {emit: t}) {
        var f, g;
        const n = {
            template: null,
            canExceedLimit: !1,
            textMessage: null,
            items: []
        }
          , d = [{
            key: "message",
            label: "Mensagem"
        }, {
            key: "template",
            label: "Modelos de conversa"
        }, {
            key: "list",
            label: "Mensagem com ações"
        }];
        function l(_) {
            let i = _ || "";
            return i = i.replaceAll(/\*(.*?)\*/g, "<strong>$1</strong>"),
            i = i.replaceAll(/_(.*?)_/g, "<em>$1</em>"),
            i = i.replaceAll(/~(.*?)~/g, "<s>$1</s>"),
            i = i.split(`
`).reduce( (w, P) => `${w}<p>${P}</p>`),
            i
        }
        const u = x("message")
          , p = x(null)
          , r = gt({
            ...n
        })
          , c = x(l((f = e.action) == null ? void 0 : f.textMessage) || n.textMessage)
          , y = x(((g = e.action) == null ? void 0 : g.items) || n.items);
        Ve( () => {
            var _, i;
            if (e.action) {
                (i = (_ = e.action) == null ? void 0 : _.items) != null && i.length && (u.value = "list");
                const {template: T, canExceedLimit: w, textMessage: P, items: k} = e.action;
                Object.assign(r, {
                    template: T || n.template,
                    canExceedLimit: w || n.canExceedLimit,
                    textMessage: P || n.textMessage,
                    items: _e.cloneDeep(k || n.items)
                }),
                Ee( () => {
                    t("updateData", r, !0)
                }
                )
            }
        }
        );
        const o = _ => {
            var i;
            if (_.id === ((i = r.template) == null ? void 0 : i.id)) {
                r.template = null;
                return
            }
            r.template = {
                id: _.id,
                name: _.vertical,
                content: _.content
            }
        }
        ;
        function b() {
            const {ops: _} = p.value.quillEditorRef.getContents();
            let i = "";
            return _.forEach(T => {
                var P, k, V;
                let w = "$content$";
                (P = T.attributes) != null && P.bold && (w = `*${w}*`),
                (k = T.attributes) != null && k.italic && (w = `_${w}_`),
                (V = T.attributes) != null && V.strike && (w = `~${w}~`),
                w = w.replace(/\$content\$/g, T.insert),
                i += w
            }
            ),
            i.lastIndexOf(`
`) === i.length - 1 && (i = i.slice(0, -1)),
            i
        }
        const v = () => {
            const _ = b();
            r.textMessage = _,
            u.value === "list" && (r.items = _e.cloneDeep(y.value)),
            t("updateData", r)
        }
        ;
        async function s() {
            return !!r.template || !!r.textMessage
        }
        return {
            itemsList: y,
            activeTab: u,
            tabs: d,
            whatsappData: r,
            messageTextHTML: c,
            setWppTemplate: o,
            save: v,
            validate: s,
            messageEditorRef: p
        }
    }
}
  , fo = {
    class: "px-4 d-flex w-100 bg-gray-normal border-top border-bottom border-gray-400"
}
  , vo = ["onClick"]
  , go = {
    class: "px-4 pt-2 mb-10"
}
  , ho = {
    key: 0,
    class: "my-3 px-3 py-3 bg-blue-light border-bottom border-blue-normal"
}
  , bo = {
    class: "mt-2"
}
  , yo = {
    class: "px-4 pt-2 mb-10"
}
  , wo = {
    class: "d-flex w-100"
};
function _o(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsParagraph")
      , c = m("DsTypography")
      , y = m("DsIcon")
      , o = m("WhatsappChatbotMessageEditor")
      , b = m("WhatsappChatbotMessageTemplate")
      , v = m("WhatsappChatbotListConfig")
      , s = m("DsButton")
      , f = m("DsModal")
      , g = it("sanitize-html");
    return D(),
    F("div", null, [a(f, {
        show: n.show,
        size: "lg",
        appendToBody: "",
        alwaysRender: "",
        bodyClass: "p-0",
        onHide: t[2] || (t[2] = _ => e.$emit("close")),
        scrollable: ""
    }, {
        header: h( () => [S("div", null, [a(p, {
            size: "md",
            text: "Enviar mensagem do whatsapp"
        }), a(r, {
            tag: "span",
            size: "sm",
            text: "Selecione o modelo de mensagem que será enviado ou digita sua própria mensagem."
        })])]),
        body: h( () => {
            var _, i, T;
            return [S("div", fo, [(D(!0),
            F(fe, null, Te(d.tabs, w => (D(),
            F("div", {
                key: w.key
            }, [S("div", {
                class: he(["cursor-pointer d-flex align-items-center pb-2 pt-3 me-2", {
                    "border-4 border-bottom border-green-brand": d.activeTab === w.key
                }]),
                onClick: P => d.activeTab = w.key
            }, [a(c, {
                tag: "span",
                class: "px-2",
                color: d.activeTab === w.key ? "gray-700" : "gray",
                fontWeight: d.activeTab === w.key ? "semibold" : "normal",
                fontSize: "2",
                text: w.label
            }, null, 8, ["color", "fontWeight", "text"])], 10, vo)]))), 128))]), S("div", null, [Le(S("div", go, [(_ = d.whatsappData.template) != null && _.id ? (D(),
            F("div", ho, [S("div", null, [a(y, {
                class: "fs-6 text-blue-dark",
                icon: "alert-line"
            })]), S("div", bo, [Le(a(c, {
                class: "mb-0 lh-sm",
                fontSize: "3"
            }, null, 512), [[g, "Um <b>modelo de conversa</b> está selecionado e será utilizado para o envio da mensagem. <br>Para utilizar o texto, desmarque o modelo selecionado na segunda aba."]])])])) : H("", !0), a(o, {
                ref: "messageEditorRef",
                disabled: (i = d.whatsappData.template) == null ? void 0 : i.id,
                message: d.messageTextHTML
            }, null, 8, ["disabled", "message"])], 512), [[at, d.activeTab === "message"]]), Le(S("div", null, [a(b, {
                selectedTemplate: d.whatsappData.template,
                onSelectTemplate: d.setWppTemplate
            }, null, 8, ["selectedTemplate", "onSelectTemplate"])], 512), [[at, d.activeTab === "template"]]), Le(S("div", yo, [d.activeTab === "list" ? (D(),
            E(o, {
                key: 0,
                ref: "messageEditorRef",
                disabled: (T = d.whatsappData.template) == null ? void 0 : T.id,
                message: d.messageTextHTML
            }, null, 8, ["disabled", "message"])) : H("", !0), a(v, {
                modelValue: d.itemsList,
                "onUpdate:modelValue": t[0] || (t[0] = w => d.itemsList = w),
                class: "mt-2"
            }, null, 8, ["modelValue"])], 512), [[at, d.activeTab === "list"]])])]
        }
        ),
        footer: h( () => [S("div", wo, [a(s, {
            text: e.$t("save"),
            size: "lg",
            class: "w-50",
            onClick: d.save
        }, null, 8, ["text", "onClick"]), a(s, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[1] || (t[1] = _ => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])])
}
const Do = ge(po, [["render", _o], ["__scopeId", "data-v-ba9049c2"]])
  , To = "Selecione um modelo ou digite o texto da mensagem"
  , $o = {
    __name: "ActionSendWhatsappChatbotNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , l = x(!0)
          , u = x(null)
          , p = async () => {
            u.value && (l.value = await u.value.validate())
        }
        ;
        J.$on("validateAll", p);
        const {node: r} = Ce()
          , c = x("")
          , y = async (o, b) => {
            var v;
            r.data = o,
            c.value = ((v = o.template) == null ? void 0 : v.content) || (o == null ? void 0 : o.textMessage) || "",
            c.value && (c.value = `Mensagem: ${c.value}`),
            d.value = !1,
            await p(),
            n("updateNodeData", r, l.value),
            b && J.$emit("nodeReady", r)
        }
        ;
        return ke( () => {
            J.$off("validateAll", p)
        }
        ),
        (o, b) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(r),
            valid: l.value,
            alertMessage: To,
            baseColor: "blue-normal",
            icon: "whatsapp-line",
            title: o.$t("history.whatsapp_button"),
            description: c.value || "Selecione um modelo ou mensagem de texto",
            onOpenConfig: b[1] || (b[1] = v => d.value = !0)
        }, {
            description: h( ({description: v, descriptionColor: s}) => [a(C(Ke), {
                class: "node-description",
                description: v,
                descriptionColor: s,
                truncate: !1
            }, null, 8, ["description", "descriptionColor"])]),
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Do), {
                key: 0,
                ref_key: "modal",
                ref: u,
                show: d.value,
                action: C(_e.cloneDeep)(e.data),
                onUpdateData: y,
                onClose: b[0] || (b[0] = v => d.value = !1)
            }, null, 8, ["show", "action"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Co = ge($o, [["__scopeId", "data-v-fe6c078e"]])
  , ce = {
    parallel: "parallel",
    chatbot: "chatbot",
    voice: "voice"
};
function wt({journeyType: e="", search: t=""}={}, {ListNode: n=null, ActionCreateActivityNode: d=null, ActionEmailNode: l=null, ActionWaitNode: u=null, ActionSendWhatsappNode: p=null, ActionSendWhatsappChatbotNode: r=null, ActionCreateDealNode: c=null, ActionCreateDealChatbotNode: y=null, ActionMoveDealNode: o=null, ActionMarkLostNode: b=null, ActionReactivateDealNode: v=null, ActionAddTagNode: s=null, ActionAssignDealNode: f=null, ActionAssignChatNode: g=null, ActionCloseChatNode: _=null, ActionAwaitAnswerNode: i=null, ActionGoToStepNode: T=null, ActionAgent: w=null, FinishNode: P=null, ActionCallAnswer: k=null, ActionCallHangup: V=null, ActionCallPlayAudio: R=null, ActionCallSendToExtension: L=null, EmailConditionNode: N=null, ContactConditionNode: oe=null, WorkflowVariablesConditionNode: re=null, TimeConditionNode: Pe=null, ActionCallIvrCondition: W=null}={}) {
    const {t: K} = xe()
      , G = ze();
    function U(te, Q) {
        const ie = ne => ne.label.toLowerCase().includes((Q ?? "").toLowerCase())
          , ue = ne => {
            var se;
            return e ? (se = ne.journeyType) == null ? void 0 : se.includes(Ue(e)) : !0
        }
          , I = ne => typeof ne.show == "function" ? ne.show() : !0;
        let ae = te.filter(ne => ue(ne) && I(ne));
        return Q && (ae = ae.filter(ie)),
        ae
    }
    const z = Z( () => {
        const te = [{
            type: "list",
            label: K("journey.modals.contact_condition.segmentation"),
            component: n
        }];
        return U(te, Ue(t))
    }
    )
      , A = Z( () => {
        const te = [{
            type: "ActionEmail",
            label: K("deals.deal.journey.send.email"),
            component: l,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionSendMessage",
            label: K("deals.deal.journey.send.whatsapp"),
            component: p,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionSendMessageChatbot",
            label: K("deals.deal.journey.send.chatbot"),
            component: r,
            journeyType: [ce.chatbot],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , B = Z( () => {
        const te = [{
            type: "ActionAgent",
            label: "Agentes",
            component: w,
            journeyType: [ce.parallel, ce.chatbot],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , j = Z( () => {
        const te = [{
            type: "ActionAssignDeal",
            label: K("journey.sidebar.assign_deal"),
            component: f,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionAssignChat",
            label: K("journey.sidebar.assign_chat"),
            component: g,
            journeyType: [ce.chatbot],
            canUseGoTo: !0
        }, {
            type: "ActionAddTag",
            label: K("journey.sidebar.add_tag"),
            component: s,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionCloseChat",
            label: K("journey.sidebar.close_chat"),
            component: _,
            journeyType: [ce.chatbot, ce.parallel],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , M = Z( () => {
        const te = [{
            type: "ActionGoToStep",
            label: K("journey.nodes.go_to_step.title"),
            component: T,
            journeyType: [ce.parallel, ce.chatbot, ce.voice],
            show: () => e !== ce.parallel ? !0 : G.getters.showGoToJourney
        }];
        return U(te, Ue(t))
    }
    )
      , X = Z( () => {
        const te = [{
            type: "ActionAwaitAnswer",
            label: K("journey.nodes.create_deal.wait_message"),
            component: i,
            journeyType: [ce.chatbot, ce.parallel],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , O = Z( () => {
        const te = [{
            type: "ActionCreateDeal",
            label: K("journey.nodes.create_deal.title"),
            component: c,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionCreateDealChatbot",
            label: K("journey.nodes.create_deal.title"),
            component: y,
            journeyType: [ce.chatbot],
            canUseGoTo: !0
        }, {
            type: "ActionMoveDeal",
            label: K("deals.move_deal"),
            component: o,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionReactivateDeal",
            label: K("deals.reactivate_deal"),
            component: v,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ActionMarkLost",
            label: K("journey.sidebar.lost_deal"),
            component: b,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , $ = Z( () => {
        const te = [{
            type: "ActionCreateAction",
            label: K("journey.sidebar.create_activity"),
            component: d,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , q = Z( () => {
        const te = [{
            type: "ActionCallAnswer",
            label: K("journey.nodes.call_answer.title"),
            component: k,
            journeyType: [ce.voice],
            canUseGoTo: !0
        }, {
            type: "ActionCallHangup",
            label: K("journey.nodes.call_hangup.title"),
            component: V,
            journeyType: [ce.voice],
            canUseGoTo: !0
        }, {
            type: "ActionCallPlayAudio",
            label: K("journey.nodes.can_play_audio.title"),
            component: R,
            journeyType: [ce.voice],
            canUseGoTo: !0
        }, {
            type: "ActionCallSendToExtension",
            label: K("journey.nodes.action_call_ivr_condition.title"),
            component: L,
            journeyType: [ce.voice],
            canUseGoTo: !0
        }, {
            type: "ActionCallIvrCondition",
            label: K("journey.nodes.action_call_ivr_condition.title"),
            component: W,
            journeyType: [ce.voice],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , Y = Z( () => {
        const te = [{
            type: "ActionWait",
            label: K("journey.sidebar.wait"),
            component: u,
            journeyType: [ce.parallel, ce.chatbot, ce.voice],
            canUseGoTo: !0
        }, {
            type: "EmailCondition",
            label: K("deals.deal.journey.conditions.email"),
            component: N,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "ContactCondition",
            label: K("deals.deal.journey.conditions.contact"),
            component: oe,
            journeyType: [ce.parallel],
            canUseGoTo: !0
        }, {
            type: "WorkflowVariablesCondition",
            label: K("deals.deal.journey.conditions.whatsapp"),
            component: re,
            journeyType: [ce.chatbot],
            canUseGoTo: !0
        }, {
            type: "TimeCondition",
            label: K("journey.nodes.time_condition.title"),
            component: Pe,
            journeyType: [ce.chatbot, ce.voice],
            canUseGoTo: !0
        }];
        return U(te, Ue(t))
    }
    )
      , ee = Z( () => {
        const te = [{
            type: "finish",
            label: K("journey.nodes.finish.title"),
            component: P,
            journeyType: [ce.parallel, ce.chatbot, ce.voice]
        }];
        return U(te, Ue(t))
    }
    )
      , ve = Z( () => [...z.value, ...A.value, ...B.value, ...j.value, ...q.value, ...M.value, ...X.value, ...O.value, ...$.value, ...Y.value, ...ee.value]);
    return {
        triggersList: z,
        sendActionsList: A,
        sendAgentsList: B,
        updateDealActionsList: j,
        callActionsList: q,
        navigationActionsList: M,
        dataInputActionsList: X,
        dealActionsList: O,
        actionsList: $,
        conditionsList: Y,
        finishList: ee,
        allSteps: ve
    }
}
const So = {
    emits: ["updateAction", "close", "updateData"],
    props: {
        show: Boolean,
        action: Object,
        saving: Boolean
    },
    setup(e, {emit: t}) {
        const {nodes: n} = qe()
          , {t: d} = xe()
          , l = x(null)
          , u = x(1)
          , p = x(!1)
          , {allSteps: r} = wt();
        function c() {
            var v;
            return {
                goTo: (v = l.value) == null ? void 0 : v.value,
                maxAttempts: p.value ? null : u.value
            }
        }
        const y = Z( () => n.value.filter(v => {
            var s;
            return (s = r.value.find(f => v.type === f.type)) == null ? void 0 : s.canUseGoTo
        }
        ).map(v => {
            var f;
            const s = v.data.textMessage && v.data.textMessage.length > 30 ? `${v.data.textMessage.substring(0, 30)}...` : v.data.textMessage;
            return {
                value: v.id,
                label: `${(f = r.value.find(g => v.type === g.type)) == null ? void 0 : f.label} #${v.id.split("-")[1]}${s ? ` - ${s}` : ""}`
            }
        }
        ));
        We(y, v => {
            l.value && (v.find(f => f.value === l.value.value) || (l.value = null,
            t("updateData", c())))
        }
        ),
        Ve( () => {
            const v = {
                goTo: null,
                maxAttempts: 10
            };
            l.value = v.goTo,
            u.value = v.maxAttempts,
            p.value = !1,
            e.action && (e.action.goTo && (l.value = y.value.find(s => s.value === e.action.goTo)),
            e.action.maxAttempts ? u.value = e.action.maxAttempts : e.action.maxAttempts === null && (p.value = !0),
            Ee( () => {
                t("updateData", c(), !0)
            }
            ))
        }
        );
        const o = () => {
            t("updateData", c())
        }
        ;
        async function b() {
            return !!c().goTo
        }
        return {
            t: d,
            save: o,
            validate: b,
            stepOptions: y,
            selectedStep: l,
            infiniteAttempts: p,
            maxAttempts: u
        }
    }
}
  , xo = {
    class: "px-4"
}
  , ko = {
    class: "d-flex align-items-left"
}
  , Po = {
    class: "d-flex w-100"
};
function Vo(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsParagraph")
      , c = m("DsTypography")
      , y = m("DsSelect")
      , o = m("DsIcon")
      , b = m("DsTooltip")
      , v = m("DsCheckbox")
      , s = m("DsInput")
      , f = m("DsButton")
      , g = m("DsModal");
    return D(),
    F("div", null, [a(g, {
        show: n.show,
        size: "lg",
        appendToBody: "",
        alwaysRender: "",
        bodyClass: "p-0",
        onHide: t[4] || (t[4] = _ => e.$emit("close")),
        scrollable: ""
    }, {
        header: h( () => [S("div", null, [a(p, {
            size: "md",
            text: d.t("journey.modals.go_to.title")
        }, null, 8, ["text"]), a(r, {
            tag: "span",
            size: "sm",
            text: d.t("journey.modals.go_to.subtitle")
        }, null, 8, ["text"])])]),
        body: h( () => [S("div", xo, [S("div", null, [a(c, {
            class: "mb-1 lh-sm",
            fontWeight: "bold",
            text: d.t("journey.modals.go_to.step"),
            fontSize: "2"
        }, null, 8, ["text"]), a(y, {
            id: "stepField",
            class: "mb-2 mt-1",
            modelValue: d.selectedStep,
            options: d.stepOptions,
            placeholder: d.t("journey.modals.go_to.step_placeholder"),
            "onOption:selected": t[0] || (t[0] = _ => d.selectedStep = _),
            appendToBody: "",
            filterable: ""
        }, null, 8, ["modelValue", "options", "placeholder"]), S("div", ko, [a(c, {
            class: "mb-1 lh-sm w-80",
            fontWeight: "bold",
            text: d.t("journey.modals.go_to.max_attempts"),
            fontSize: "2"
        }, null, 8, ["text"]), a(b, {
            offset: "0",
            text: d.t("journey.modals.go_to.max_attempts_tooltip")
        }, {
            default: h( () => [a(o, {
                icon: "question-line",
                class: "ms-1"
            })]),
            _: 1
        }, 8, ["text"])]), a(v, {
            isSwitch: "",
            modelValue: d.infiniteAttempts,
            "onUpdate:modelValue": t[1] || (t[1] = _ => d.infiniteAttempts = _),
            label: d.t("journey.modals.go_to.infinite_attempts"),
            class: "my-2"
        }, null, 8, ["modelValue", "label"]), d.infiniteAttempts ? H("", !0) : (D(),
        E(s, {
            key: 0,
            modelValue: d.maxAttempts,
            "onUpdate:modelValue": t[2] || (t[2] = _ => d.maxAttempts = _),
            type: "number",
            min: 1,
            max: 100,
            step: 1
        }, null, 8, ["modelValue"]))])])]),
        footer: h( () => [S("div", Po, [a(f, {
            text: d.t("save"),
            size: "lg",
            class: "w-50",
            onClick: d.save
        }, null, 8, ["text", "onClick"]), a(f, {
            text: d.t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[3] || (t[3] = _ => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])])
}
const zo = ge(So, [["render", Vo]])
  , Ao = {
    __name: "ActionGoToStepNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , l = x(!0)
          , u = x(null)
          , p = async () => {
            u.value && (l.value = await u.value.validate())
        }
        ;
        J.$on("validateAll", p);
        const {node: r} = Ce()
          , {nodes: c} = qe()
          , {allSteps: y} = wt()
          , o = x("")
          , b = async (v, s) => {
            var f, g;
            if (r.data = {
                ...r.data,
                ...v
            },
            (f = r == null ? void 0 : r.data) != null && f.goTo) {
                const _ = c.value.find(i => i.id === r.data.goTo);
                o.value = `${(g = y.value.find(i => _.type === i.type)) == null ? void 0 : g.label} #${_ == null ? void 0 : _.id.split("-")[1]}`
            } else
                o.value = "";
            d.value = !1,
            await p(),
            n("updateNodeData", r, l.value),
            s && J.$emit("nodeReady", r)
        }
        ;
        return ke( () => {
            J.$off("validateAll", p)
        }
        ),
        (v, s) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(r),
            valid: l.value,
            alertMessage: "Selecione uma etapa para redirecionar o fluxo",
            hideSourceHandle: "",
            baseColor: "cyan-dark",
            icon: "map-pin-line",
            title: v.$t("journey.nodes.go_to_step.title"),
            description: o.value || "Selecione a etapa",
            onOpenConfig: s[1] || (s[1] = f => d.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(zo), {
                key: 0,
                ref_key: "modal",
                ref: u,
                show: d.value,
                action: e.data,
                onUpdateData: b,
                onClose: s[0] || (s[0] = f => d.value = !1)
            }, null, 8, ["show", "action"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
};
function Bo(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s]/g, "").trim().replace(/\s+/g, "_").toLowerCase()
}
const ut = [{
    label: "Nome",
    value: "name"
}, {
    label: "Email",
    value: "email"
}, {
    label: "CNPJ",
    value: "cnpj"
}, {
    label: "CPF",
    value: "cpf"
}, {
    label: "CPF ou CNPJ",
    value: "cpf_cnpj"
}]
  , _t = function() {
    const t = x([...ut]);
    function n(o, b) {
        t.value.find(s => s.value === b) || t.value.push({
            label: o,
            value: b,
            canDelete: !0
        })
    }
    function d(o) {
        const b = {
            label: o,
            value: Bo(o),
            canDelete: !0
        };
        return t.value.push(b),
        b
    }
    function l(o) {
        t.value = t.value.filter(b => b.label !== o)
    }
    function u(o) {
        return t.value.find(b => b.value === o)
    }
    function p() {
        const o = ["name", "email", "cnpj", "cpf", "cpf_cnpj"]
          , b = t.value.filter(v => !o.includes(v.value));
        return JSON.stringify(b)
    }
    function r(o) {
        JSON.parse(o).forEach(v => {
            n(v.label, v.value)
        }
        )
    }
    function c() {
        t.value = [...ut]
    }
    const y = {
        variables: t,
        addVariable: n,
        createVariable: d,
        deleteVariable: l,
        getByValue: u,
        toString: p,
        parse: r,
        reset: c
    };
    return () => y
}()
  , Mo = {
    emits: ["updateAction", "continueSave", "close", "updateData"],
    props: {
        show: Boolean,
        action: Object,
        saving: Boolean,
        workflowType: String
    },
    setup(e, {emit: t}) {
        const n = {
            timeout: 5,
            waitTimeMeasure: "minute",
            answerVariableName: null
        }
          , d = x(5)
          , l = x({
            value: "minute",
            label: "Minutos"
        })
          , u = [{
            value: "minute",
            label: "Minutos"
        }, {
            value: "hour",
            label: "Horas"
        }]
          , p = {
            minute: 60 * 1e3,
            hour: 60 * 60 * 1e3
        };
        function r(_, i=!0) {
            const T = p[l.value.value];
            return i ? _ * T : _ / T
        }
        const c = x(null)
          , y = gt(_t());
        function o() {
            var _;
            return {
                answerVariableName: ((_ = c.value) == null ? void 0 : _.value) || null,
                timeout: r(d.value),
                waitTimeMeasure: l.value.value
            }
        }
        Ve( () => {
            if (e.action) {
                const {answerVariableName: _, condition: i, waitTimeMeasure: T} = e.action;
                c.value = y.getByValue(_),
                i != null && i.timeout && T ? (l.value = u.find(w => w.value === T),
                d.value = r(i.timeout, !1)) : (l.value = u.find(w => w.value === n.waitTimeMeasure),
                d.value = n.timeout),
                Ee( () => {
                    t("updateData", o(), !0)
                }
                )
            }
        }
        );
        const b = _ => {
            const i = y.getByValue(_.value);
            c.value = i
        }
          , v = (_, i) => {
            _.stopPropagation();
            const T = y.createVariable(i);
            b(T)
        }
          , s = (_, i) => {
            var T;
            _.stopPropagation(),
            ((T = c == null ? void 0 : c.value) == null ? void 0 : T.value) === i && (c.value = null),
            y.deleteVariable(i)
        }
          , f = () => {
            t("updateData", o())
        }
        ;
        async function g() {
            return !0
        }
        return {
            save: f,
            validate: g,
            workflowVariable: c,
            createWorkflowVariable: v,
            deleteWorkflowVariable: s,
            handleSelectWorkflowVariable: b,
            workflowVariables: y,
            maxWaitTime: d,
            maxWaitTimeMeasure: l,
            timeMeasureOptions: u
        }
    }
}
  , Eo = {
    class: "px-4"
}
  , jo = {
    class: "mb-3"
}
  , Oo = {
    class: "d-flex align-items-center rounded-2"
}
  , Io = {
    key: 0
}
  , Uo = {
    class: "d-flex align-items-center mb-1"
}
  , No = {
    class: "design-system"
}
  , Ro = {
    class: "design-system"
}
  , Lo = {
    class: "d-flex align-items-center justify-content-between"
}
  , Wo = {
    class: "d-flex w-100"
};
function Ho(e, t, n, d, l, u) {
    const p = m("DsHeading")
      , r = m("DsParagraph")
      , c = m("DsTypography")
      , y = m("DsInput")
      , o = m("DsSelect")
      , b = m("DsIcon")
      , v = m("DsTooltip")
      , s = m("DsButton")
      , f = m("DsModal");
    return D(),
    F("div", null, [a(f, {
        show: n.show,
        size: "lg",
        appendToBody: "",
        alwaysRender: "",
        bodyClass: "p-0",
        onHide: t[3] || (t[3] = g => e.$emit("close")),
        scrollable: ""
    }, {
        header: h( () => [S("div", null, [a(p, {
            size: "md",
            text: e.$t("flow.actions.ActionAwaitAnswerModal.title")
        }, null, 8, ["text"]), a(r, {
            tag: "span",
            size: "sm",
            text: e.$t("flow.actions.ActionAwaitAnswerModal.description")
        }, null, 8, ["text"])])]),
        body: h( () => [S("div", Eo, [S("div", jo, [a(c, {
            class: "mb-1 lh-sm",
            fontWeight: "bold",
            text: e.$t("flow.actions.ActionAwaitAnswerModal.max_duration"),
            fontSize: "2"
        }, null, 8, ["text"]), S("div", Oo, [a(y, {
            class: "col-4 bg-white",
            modelValue: d.maxWaitTime,
            "onUpdate:modelValue": t[0] || (t[0] = g => d.maxWaitTime = g),
            type: "number"
        }, null, 8, ["modelValue"]), a(o, {
            class: "ps-3 col-8",
            modelValue: d.maxWaitTimeMeasure,
            "onUpdate:modelValue": t[1] || (t[1] = g => d.maxWaitTimeMeasure = g),
            clearable: !1,
            placeholder: e.$t("flow.actions.ActionAwaitAnswerModal.select_time_measurement"),
            options: d.timeMeasureOptions
        }, null, 8, ["modelValue", "placeholder", "options"])])]), n.workflowType !== "parallel" ? (D(),
        F("div", Io, [S("div", Uo, [a(c, {
            class: "mb-0 lh-sm",
            fontWeight: "bold",
            text: e.$t("flow.actions.ActionAwaitAnswerModal.collect_info_answer"),
            fontSize: "2"
        }, null, 8, ["text"]), a(v, {
            text: e.$t("flow.actions.ActionAwaitAnswerModal.var_tooltip")
        }, {
            default: h( () => [a(b, {
                class: "ms-2",
                icon: "information-line",
                size: "sm",
                color: "green-normal"
            })]),
            _: 1
        }, 8, ["text"])]), a(o, {
            class: "mb-2 mt-1",
            modelValue: d.workflowVariable,
            options: d.workflowVariables.variables,
            placeholder: e.$t("flow.actions.ActionAwaitAnswerModal.select_var"),
            "onOption:selected": d.handleSelectWorkflowVariable,
            appendToBody: "",
            filterable: ""
        }, {
            "list-header": h( ({search: g}) => [S("li", No, [a(s, {
                disabled: !g,
                text: e.$t("flow.actions.ActionAwaitAnswerModal.create_var"),
                variant: "link",
                class: "fs-2 ps-3 text-green-normal fw-bold",
                onClick: _ => d.createWorkflowVariable(_, g)
            }, null, 8, ["disabled", "text", "onClick"])])]),
            option: h( ({label: g, canDelete: _}) => [S("div", Ro, [S("div", Lo, [a(c, {
                tag: "span",
                text: g
            }, null, 8, ["text"]), _ ? (D(),
            E(s, {
                key: 0,
                text: e.$t("delete"),
                variant: "outline-red-normal",
                size: "sm",
                onClick: i => d.deleteWorkflowVariable(i, g)
            }, null, 8, ["text", "onClick"])) : H("", !0)])])]),
            _: 1
        }, 8, ["modelValue", "options", "placeholder", "onOption:selected"])])) : H("", !0)])]),
        footer: h( () => [S("div", Wo, [a(s, {
            text: e.$t("save"),
            size: "lg",
            class: "w-50",
            onClick: d.save
        }, null, 8, ["text", "onClick"]), a(s, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[2] || (t[2] = g => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])])
}
const Fo = ge(Mo, [["render", Ho], ["__scopeId", "data-v-80f6545c"]])
  , qo = {
    __name: "ActionAwaitAnswerNode",
    props: {
        id: String,
        editable: Boolean,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        workflowType: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , {node: l} = Ce()
          , u = x(!1)
          , p = x(!0)
          , r = x(null)
          , c = async () => {
            r.value && (p.value = await r.value.validate()),
            n("updateNodeData", l, p.value)
        }
        ;
        J.$on("validateAll", c);
        const y = Z( () => d.handleSourcePosition === "bottom" ? {
            true: {
                left: "55%",
                background: "#01B89A"
            },
            false: {
                left: "45%",
                background: "#F44336"
            }
        } : {
            true: {
                top: "65%",
                background: "green"
            },
            false: {
                top: "35%",
                background: "red"
            }
        })
          , o = x("")
          , b = {
            minute: 60 * 1e3,
            hour: 60 * 60 * 1e3
        }
          , v = {
            minute: "Minutos",
            hour: "Horas"
        };
        function s(g, _) {
            const i = b[_];
            return g / i
        }
        const f = async (g, _) => {
            const i = _t()
              , T = s(g.timeout, g.waitTimeMeasure);
            if (o.value = `Tempo: ${T} ${v[g.waitTimeMeasure]}`,
            g.answerVariableName) {
                const w = i.getByValue(g.answerVariableName);
                o.value += `; Informação: ${w == null ? void 0 : w.label}`
            }
            l.data = {
                ...l.data,
                answerVariableName: g.answerVariableName,
                waitTimeMeasure: g.waitTimeMeasure,
                condition: {
                    timeout: g.timeout
                }
            },
            u.value = !1,
            await c(),
            n("updateNodeData", l, p.value),
            _ && J.$emit("nodeReady", l)
        }
        ;
        return ke( () => {
            J.$off("validateAll", c)
        }
        ),
        (g, _) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(l),
            valid: p.value,
            baseColor: "yellow-dark",
            icon: "timer-flash-line",
            title: "Aguardar resposta",
            description: o.value || "Aguarde pela resposta da mensagem",
            onOpenConfig: _[1] || (_[1] = i => u.value = !0)
        }, {
            handleSource: h( () => [!e.draggable && !e.minimized ? (D(),
            E(C(Re), {
                key: 0,
                id: `${e.id}-true`,
                type: "source",
                class: "border-gray-500",
                position: e.handleSourcePosition,
                style: Fe(y.value.true),
                connectable: !1
            }, null, 8, ["id", "position", "style"])) : H("", !0), !e.draggable && !e.minimized ? (D(),
            E(C(Re), {
                key: 1,
                id: `${e.id}-false`,
                type: "source",
                class: "border-gray-500",
                position: e.handleSourcePosition,
                style: Fe(y.value.false),
                connectable: !1
            }, null, 8, ["id", "position", "style"])) : H("", !0)]),
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Fo), {
                key: 0,
                ref_key: "modal",
                ref: r,
                workflowType: d.workflowType,
                show: u.value,
                action: e.data,
                editable: e.editable,
                onUpdateData: f,
                onClose: _[0] || (_[0] = i => u.value = !1)
            }, null, 8, ["workflowType", "show", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "description"]))
    }
}
  , Go = ge(qo, [["__scopeId", "data-v-2d776fbe"]])
  , Qo = {
    class: "my-2"
}
  , Yo = {
    class: "mt-3"
}
  , Jo = {
    class: "mt-2 p-3 bg-gray-light border rounded"
}
  , Ko = {
    class: "d-flex align-items-center gap-2 mt-3"
}
  , Xo = {
    class: "ms-4 mt-2"
}
  , Zo = {
    key: 0,
    class: "mt-3 p-3 bg-gray-light border rounded"
}
  , ei = {
    class: "d-flex w-100"
}
  , ti = {
    __name: "ActionAssignChatModal",
    props: {
        show: Boolean,
        initialData: Object,
        users: Array,
        routers: Array
    },
    emits: ["updateData", "close"],
    setup(e, {expose: t, emit: n}) {
        const {t: d} = xe()
          , l = e
          , u = n
          , p = x("router")
          , r = x(null)
          , c = x(null)
          , y = x("manual")
          , o = x("customer_and_deal")
          , b = Z( () => y.value === "auto")
          , v = x("")
          , s = Z( () => [{
            label: d("journey.modals.assign_chat.auto_assign_fallback_manual"),
            value: "manual_assign"
        }, {
            label: d("journey.modals.assign_chat.auto_assign_fallback_fail_flow"),
            value: "fail_flow"
        }, {
            label: d("journey.modals.assign_chat.auto_assign_fallback_ignore_and_continue"),
            value: "ignore_and_continue"
        }]);
        Ve( () => {
            const {initialData: i, users: T, routers: w} = l;
            i && (i.auto_assign ? (y.value = "auto",
            o.value = i.auto_assign_mode || "customer_and_deal",
            v.value = s.value.find(P => P.value === i.auto_assign_fallback_action) || s.value[0]) : (y.value = "manual",
            v.value = s.value[0]),
            i.id_user ? (r.value = T.find(P => P.code === i.id_user),
            p.value = "user") : i.id_router && (c.value = w.find(P => P.code === i.id_router),
            p.value = "router"),
            Ee( () => {
                var P, k, V, R;
                u("updateData", {
                    type: p.value,
                    id_user: ((P = r.value) == null ? void 0 : P.code) || ((k = r.value) == null ? void 0 : k.value),
                    id_router: (V = c.value) == null ? void 0 : V.code,
                    auto_assign: b.value,
                    auto_assign_mode: b.value ? o.value : void 0,
                    auto_assign_fallback_action: b.value ? (R = v.value) == null ? void 0 : R.value : void 0
                }, !0)
            }
            ))
        }
        );
        const f = () => {
            var i, T, w, P;
            u("updateData", {
                type: p.value,
                id_user: ((i = r.value) == null ? void 0 : i.code) || ((T = r.value) == null ? void 0 : T.value),
                id_router: (w = c.value) == null ? void 0 : w.code,
                auto_assign: b.value,
                auto_assign_mode: b.value ? o.value : void 0,
                auto_assign_fallback_action: b.value ? (P = v.value) == null ? void 0 : P.value : void 0
            }),
            u("close")
        }
          , g = x(null);
        return t({
            validate: async () => {
                if (!g.value)
                    return !1;
                const {valid: i} = await g.value.validate();
                return i
            }
        }),
        (i, T) => {
            const w = m("DsTypography")
              , P = m("DsRadio")
              , k = m("DsEntityMultiselect")
              , V = m("Field")
              , R = m("DsSelect")
              , L = m("DsIcon")
              , N = m("DsTooltip")
              , oe = m("Form")
              , re = m("DsButton")
              , Pe = m("DsModal");
            return D(),
            E(Pe, {
                show: e.show,
                size: "md",
                title: "Configurar atribuição de responsável ao chat",
                appendToBody: "",
                alwaysRender: "",
                onHide: T[10] || (T[10] = W => i.$emit("close"))
            }, {
                body: h( () => [a(oe, {
                    ref_key: "observer",
                    ref: g
                }, {
                    default: h( () => [a(w, {
                        tag: "span",
                        fontWeight: "bold",
                        text: i.$t("journey.modals.create_deal.distribution_mode"),
                        fontSize: "2"
                    }, null, 8, ["text"]), S("div", Qo, [a(P, {
                        modelValue: p.value,
                        "onUpdate:modelValue": T[0] || (T[0] = W => p.value = W),
                        name: "router",
                        inputValue: "router",
                        label: "Distribuidor",
                        class: "flex-fill"
                    }, null, 8, ["modelValue"]), a(P, {
                        modelValue: p.value,
                        "onUpdate:modelValue": T[1] || (T[1] = W => p.value = W),
                        name: "user",
                        inputValue: "user",
                        label: i.$t("user"),
                        class: "flex-fill mt-1"
                    }, null, 8, ["modelValue", "label"])]), p.value === "user" ? (D(),
                    E(V, {
                        key: 0,
                        modelValue: r.value,
                        "onUpdate:modelValue": T[2] || (T[2] = W => r.value = W),
                        rules: "required",
                        name: "user-assign-action"
                    }, {
                        default: h( ({errors: W, componentField: K}) => [a(w, {
                            tag: "span",
                            fontWeight: "bold",
                            text: "Usuário",
                            fontSize: "2"
                        }), a(k, le(K, {
                            class: "mb-2 mt-1",
                            size: "md",
                            entity: "users",
                            closeOnSelect: "",
                            hasError: W.length > 0,
                            appendToBody: "",
                            placeholder: "Selecione um usuário"
                        }), null, 16, ["hasError"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0), p.value === "router" ? (D(),
                    E(V, {
                        key: 1,
                        modelValue: c.value,
                        "onUpdate:modelValue": T[3] || (T[3] = W => c.value = W),
                        rules: "required",
                        name: "router"
                    }, {
                        default: h( ({errors: W, componentField: K}) => [a(w, {
                            tag: "span",
                            fontWeight: "bold",
                            text: i.$t("import_entity.fields.responsible_types.router.title"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(R, le(K, {
                            class: "mb-2 mt-1",
                            options: e.routers,
                            hasError: W.length > 0,
                            appendToBody: "",
                            placeholder: i.$t("lists.select_router")
                        }), null, 16, ["options", "hasError", "placeholder"])]),
                        _: 1
                    }, 8, ["modelValue"])) : H("", !0), S("div", Yo, [a(w, {
                        tag: "span",
                        fontWeight: "bold",
                        text: i.$t("journey.modals.assign_chat.validation_rules"),
                        fontSize: "2"
                    }, null, 8, ["text"]), S("div", Jo, [a(P, {
                        modelValue: y.value,
                        "onUpdate:modelValue": T[4] || (T[4] = W => y.value = W),
                        name: "assignRule",
                        inputValue: "manual",
                        label: i.$t("journey.modals.assign_chat.manual_assign")
                    }, null, 8, ["modelValue", "label"]), a(w, {
                        tag: "p",
                        fontSize: "1",
                        class: "mt-0 mb-2 text-muted",
                        text: i.$t("journey.modals.assign_chat.manual_assign_description")
                    }, null, 8, ["text"]), S("div", Ko, [a(P, {
                        modelValue: y.value,
                        "onUpdate:modelValue": T[5] || (T[5] = W => y.value = W),
                        name: "assignRule",
                        inputValue: "auto",
                        label: i.$t("journey.modals.assign_chat.auto_assign_based_on")
                    }, null, 8, ["modelValue", "label"]), a(N, {
                        text: i.$t("journey.information_icons.assign_chat.auto_assign")
                    }, {
                        default: h( () => [a(L, {
                            icon: "information-line"
                        })]),
                        _: 1
                    }, 8, ["text"])]), S("div", Xo, [a(P, {
                        disabled: !b.value,
                        modelValue: o.value,
                        "onUpdate:modelValue": T[6] || (T[6] = W => o.value = W),
                        name: "autoAssignMode",
                        inputValue: "customer",
                        label: i.$t("journey.modals.assign_chat.customer_only")
                    }, null, 8, ["disabled", "modelValue", "label"]), a(P, {
                        disabled: !b.value,
                        modelValue: o.value,
                        "onUpdate:modelValue": T[7] || (T[7] = W => o.value = W),
                        class: "mt-2",
                        name: "autoAssignMode",
                        inputValue: "customer_and_deal",
                        label: i.$t("journey.modals.assign_chat.customer_and_deal")
                    }, null, 8, ["disabled", "modelValue", "label"])]), b.value ? (D(),
                    F("div", Zo, [a(w, {
                        tag: "span",
                        fontWeight: "bold",
                        text: i.$t("journey.modals.assign_chat.auto_assign_fallback_label"),
                        fontSize: "2"
                    }, null, 8, ["text"]), a(V, {
                        modelValue: v.value,
                        "onUpdate:modelValue": T[8] || (T[8] = W => v.value = W),
                        rules: "required",
                        name: "auto-assign-fallback-action"
                    }, {
                        default: h( ({errors: W, componentField: K}) => [a(R, le(K, {
                            class: "mb-2 mt-1",
                            options: s.value,
                            hasError: W.length > 0,
                            appendToBody: "",
                            placeholder: "Selecione uma ação"
                        }), null, 16, ["options", "hasError"])]),
                        _: 1
                    }, 8, ["modelValue"])])) : H("", !0)])])]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", ei, [a(re, {
                    "data-testid": "save-assign-chat-modal",
                    text: i.$t("save"),
                    size: "lg",
                    class: "w-50",
                    onClick: f
                }, null, 8, ["text"]), a(re, {
                    "data-testid": "close-assign-chat-modal",
                    text: i.$t("cancel"),
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: T[9] || (T[9] = W => i.$emit("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , ai = {
    __name: "ActionAssignChatNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        users: Array,
        routers: Array
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = e
          , l = x(!1)
          , u = x(!0)
          , p = x(null)
          , r = x("")
          , {node: c} = Ce()
          , y = async () => {
            p.value && (u.value = await p.value.validate())
        }
        ;
        J.$on("validateAll", y);
        const o = x("")
          , b = async (v, s) => {
            var f, g;
            if (l.value = !1,
            c.data = v,
            v.id_router) {
                const _ = (f = d.routers.find(i => je(i.code) === je(v.id_router))) == null ? void 0 : f.label;
                o.value = `Distribuidor ${_}`,
                delete c.data.id_user
            } else if (v.id_user) {
                const _ = (g = d.users.find(i => je(i.code) === je(v.id_user))) == null ? void 0 : g.label;
                o.value = `Usuário ${_}`,
                delete c.data.id_router
            } else
                o.value = "";
            await y(),
            n("updateNodeData", c, u.value),
            s && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", y)
        }
        ),
        (v, s) => (D(),
        E(C(Se), {
            "data-testid": "action-assign-chat-base-node",
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: u.value,
            alertMessage: r.value,
            baseColor: "green-normal",
            icon: "user-add-line",
            title: v.$t("journey.sidebar.assign_chat"),
            description: o.value || v.$t("messaging.config.select_router_user"),
            onOpenConfig: s[1] || (s[1] = f => l.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(ti), {
                key: 0,
                "data-testid": "action-assign-chat-modal",
                ref_key: "modal",
                ref: p,
                show: l.value,
                initialData: e.data,
                users: e.users,
                routers: e.routers,
                onUpdateData: b,
                onClose: s[0] || (s[0] = f => l.value = !1)
            }, null, 8, ["show", "initialData", "users", "routers"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "title", "description"]))
    }
}
  , li = {
    class: "my-3 bg-gray-light border border-gray-400 rounded-2 p-3"
}
  , ni = {
    class: "condition-group my-3 bg-gray-light border border-gray-400 rounded-2 p-3"
}
  , oi = {
    class: "w-100 d-flex align-items-center"
}
  , ii = {
    key: 0,
    "data-testid": "group-separator",
    class: "d-flex align-items-center px-5"
}
  , si = {
    key: 0,
    class: "d-flex align-items-center"
}
  , Dt = {
    __name: "ConditionQueryBuilder",
    props: Et({
        disabled: Boolean,
        fieldsOptions: {
            type: Array,
            default: () => []
        },
        loading: Boolean,
        loadingFieldsOptions: Boolean
    }, {
        modelValue: {},
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e, {expose: t}) {
        const n = ft(e, "modelValue")
          , {t: d} = xe()
          , {notifyError: l} = Xe();
        function u() {
            let p = "";
            try {
                n.value.validate()
            } catch (r) {
                p = `query_builder.errors.${r.message}`
            }
            return n.value.hasDeletedField() && (p = "query_builder.errors.deleted_field"),
            p ? (l(p),
            !1) : !0
        }
        return t({
            validate: u
        }),
        (p, r) => {
            const c = m("DsSkeletonItem")
              , y = m("DsSkeleton")
              , o = m("DsSubtitle")
              , b = m("DsButton")
              , v = m("DsBadge")
              , s = m("DsIcon")
              , f = m("DsTooltip");
            return D(),
            F("div", null, [e.loading ? (D(),
            E(y, {
                key: 0,
                class: "mt-0"
            }, {
                default: h( () => [S("div", li, [(D(),
                F(fe, null, Te(3, g => S("div", {
                    class: "d-flex w-100 py-1",
                    key: g
                }, [(D(),
                F(fe, null, Te(3, _ => a(c, {
                    key: _,
                    class: "w-100 pe-3",
                    width: "100%",
                    height: "30px",
                    sizeUnit: "",
                    rounded: "1"
                })), 64)), a(c, {
                    class: "pe-3",
                    width: "30px",
                    height: "30px",
                    sizeUnit: "",
                    rounded: "1"
                })])), 64))])]),
                _: 1
            })) : (D(),
            F(fe, {
                key: 1
            }, [(D(!0),
            F(fe, null, Te(n.value.groups, (g, _) => (D(),
            F("div", {
                "data-testid": "query-builder-filters-group",
                key: _
            }, [S("div", ni, [S("div", oi, [a(o, {
                class: "m-0",
                size: "sm",
                text: C(d)("query_builder.filters.other_group_title")
            }, null, 8, ["text"]), n.value.groups.length > 1 && !e.disabled ? (D(),
            E(b, {
                key: 0,
                "data-testid": "btn-remove-group",
                variant: "outline-red-normal",
                text: C(d)("query_builder.filters.remove_group"),
                class: "ms-auto",
                icon: "delete-bin-2-line",
                onClick: i => n.value.deleteGroup(_)
            }, null, 8, ["text", "onClick"])) : H("", !0)]), (D(!0),
            F(fe, null, Te(g.conditions, (i, T) => (D(),
            F("div", {
                class: "d-flex flex-wrap align-items-center gap-1 py-3",
                key: i
            }, [a(C(ta), {
                condition: g.conditions[T],
                "onUpdate:condition": w => g.conditions[T] = w,
                builder: n.value,
                groupIndex: _,
                conditionIndex: T,
                disabled: e.disabled,
                fieldsOptions: e.fieldsOptions,
                loadingFieldsOptions: e.loadingFieldsOptions
            }, null, 8, ["condition", "onUpdate:condition", "builder", "groupIndex", "conditionIndex", "disabled", "fieldsOptions", "loadingFieldsOptions"]), g.conditions.length > 1 && !e.disabled ? (D(),
            E(b, {
                key: 0,
                "data-testid": "btn-remove-condition",
                variant: "red-light",
                icon: "delete-bin-2-line",
                onClick: w => n.value.deleteCondition(_, T)
            }, null, 8, ["onClick"])) : H("", !0)]))), 128)), e.disabled ? H("", !0) : (D(),
            E(b, {
                key: 0,
                "data-testid": "btn-add-condition",
                icon: "add-circle-line",
                text: C(d)("query_builder.filters.add_condition"),
                onClick: i => {
                    n.value.addCondition(_)
                }
            }, null, 8, ["text", "onClick"]))]), _ != n.value.groups.length - 1 ? (D(),
            F("div", ii, [r[1] || (r[1] = S("hr", {
                class: "flex-grow-1"
            }, null, -1)), a(v, {
                class: "mx-2 bg-white",
                isTag: !1,
                text: "OU"
            }), r[2] || (r[2] = S("hr", {
                class: "flex-grow-1"
            }, null, -1))])) : H("", !0)]))), 128)), e.disabled ? H("", !0) : (D(),
            F("div", si, [a(b, {
                "data-testid": "btn-add-group",
                variant: "outline-green-normal",
                icon: "add-line",
                text: C(d)("query_builder.filters.add_group"),
                onClick: r[0] || (r[0] = g => n.value.addGroup())
            }, null, 8, ["text"]), a(f, {
                class: "mb-1",
                text: p.$t("journey.information_icons.contact_condition.conditions"),
                placement: "top",
                offset: "5",
                appendToBody: "",
                tooltipClass: "w-25 fw-normal information-tooltip"
            }, {
                default: h( () => [a(s, {
                    icon: "information-line",
                    class: "fs-2 ms-1 text-green-dark"
                })]),
                _: 1
            }, 8, ["text"])]))], 64))])
        }
    }
};
let ot = null;
function di() {
    return {
        resolve: e => {
            ot && ot(e)
        }
    }
}
function Tt() {
    return {
        confirm() {
            return new Promise(e => {
                ot = e
            }
            )
        }
    }
}
const $t = {
    __name: "ConfirmRemoveNodeModal",
    props: {
        show: Boolean,
        count: Number
    },
    emits: ["close"],
    setup(e, {emit: t}) {
        const n = t
          , {resolve: d} = di();
        function l() {
            d(!0),
            n("close")
        }
        function u() {
            d(!1),
            n("close")
        }
        return (p, r) => {
            const c = m("DsTypography")
              , y = m("DsButton")
              , o = m("DsModal");
            return D(),
            E(o, {
                title: "Confirmar remoção",
                show: e.show,
                appendToBody: "",
                onHide: r[0] || (r[0] = b => p.$emit("close"))
            }, {
                body: h( () => [a(c, null, {
                    default: h( () => [Me(ye(p.$t("flow.messages.info.confirm_remove_node_1")) + " ", 1), S("strong", null, ye(p.$tc("flow.messages.info.confirm_remove_node_2", e.count, {
                        count: e.count
                    })), 1), Me(" " + ye(p.$tc("flow.messages.info.confirm_remove_node_3", e.count)), 1)]),
                    _: 1
                })]),
                footer: h( () => [a(y, {
                    text: "Confirmar",
                    class: "w-100",
                    onClick: l
                }), a(y, {
                    text: "Cancelar",
                    variant: "transparent",
                    class: "w-100",
                    onClick: u
                })]),
                _: 1
            }, 8, ["show"])
        }
    }
};
function tt() {
    const e = {
        type: "custom",
        selectable: !1,
        style: {
            strokeWidth: 2
        },
        markerEnd: void 0
    }
      , t = "#01B89A"
      , n = "#F44336"
      , d = {
        ...e,
        style: {
            stroke: "#b1b1b7",
            strokeWidth: 2
        },
        labelBgPadding: [8, 4],
        labelBgStyle: {
            fill: "#b1b1b7"
        },
        labelStyle: {
            fill: "white",
            fontWeight: "bold",
            padding: "5px",
            fontSize: 12
        }
    }
      , l = {
        markerEnd: {
            type: ma.Arrow,
            width: 12,
            height: 12
        }
    }
      , u = {
        position: {
            x: 0,
            y: 0
        },
        type: "placeholder",
        draggable: !1,
        selectable: !1,
        parents: [],
        children: []
    }
      , p = {
        position: {
            x: 0,
            y: 0
        },
        type: "finish",
        draggable: !1,
        selectable: !1,
        parents: [],
        children: []
    };
    function r(G, U=!0) {
        const A = {
            ...{
                type: "custom",
                label: U ? "Sim" : "Não",
                selectable: !1,
                style: {
                    stroke: U ? t : n,
                    strokeWidth: 2
                },
                labelBgPadding: [8, 4],
                labelBgStyle: {
                    fill: U ? t : n
                },
                labelStyle: {
                    fill: "white",
                    fontWeight: "bold",
                    padding: "5px",
                    fontSize: 12
                }
            }
        };
        switch (G) {
        case "ActionAwaitAnswer":
            A.label = U ? "Respondeu" : "Não respondeu";
            break;
        case "TimeCondition":
            A.label = U ? "Dentro do horário" : "Fora do horário";
            break
        }
        return A
    }
    function c() {
        return vt()
    }
    function y(G) {
        const U = new Map
          , z = [];
        for (let A = G.length - 1; A >= 0; A -= 1) {
            const B = G[A]
              , j = `${B.source}-${B.target}`;
            U.has(j) || (U.set(j, B),
            z.unshift(B))
        }
        return z
    }
    function o(G, U) {
        const z = {};
        G.forEach(M => {
            z[M.id] = {
                ...M,
                children: [],
                parents: []
            }
        }
        ),
        U.forEach(M => {
            var X;
            z[M.target] && ((X = M.data) != null && X.branchId) && (z[M.target].branchId = M.data.branchId,
            z[M.target].edgeData = M),
            z[M.source] && z[M.target] && (z[M.source].children.push(z[M.target]),
            z[M.target].sourceHandle = M.sourceHandle,
            z[M.target].parents.push(z[M.source]),
            z[M.target].edgeData = M)
        }
        );
        const A = new Set
          , B = Object.keys(z);
        for (let M = 0; M < B.length; M += 1) {
            const X = B[M]
              , O = z[X];
            if (O.children)
                for (let $ = 0; $ < O.children.length; $ += 1) {
                    const q = O.children[$];
                    A.add(q.id)
                }
        }
        return Object.values(z).find(M => !A.has(M.id))
    }
    function b(G, U) {
        const z = ($, q, Y, ee) => ({
            ...e,
            ...Y,
            id: `${$}-${q}`,
            source: $,
            target: q,
            ...ee && {
                data: {
                    branchId: ee
                }
            }
        })
          , A = ($, q) => ({
            ...u,
            ...q && {
                data: q
            },
            id: $
        })
          , B = o(G, U)
          , j = []
          , M = []
          , X = new Set;
        function O($, q=null, Y=[]) {
            var Q, ie, ue, I, ae, ne, se, de, Ae;
            X.has($.id) || j.push($);
            let ee = {
                ...$.edgeData,
                ...e
            };
            const ve = r(q == null ? void 0 : q.type, !1)
              , te = r(q == null ? void 0 : q.type, !0);
            if ($.type === "placeholder")
                (Q = $.sourceHandle) != null && Q.includes("-true") ? ee = {
                    ...ee,
                    ...te,
                    sourceHandle: $.sourceHandle
                } : (ie = $.sourceHandle) != null && ie.includes("-false") && (ee = {
                    ...ee,
                    ...ve,
                    sourceHandle: $.sourceHandle
                }),
                M.push(z(q.id, $.id, ee, $.branchId));
            else if (q != null && q.id) {
                const be = q.id
                  , De = q.type === "placeholder" && ((ue = q.data) == null ? void 0 : ue.conditionId)
                  , we = `placeholder-${be}-${$.id}`;
                (I = $.sourceHandle) != null && I.includes("-true") ? ee = {
                    ...ee,
                    ...te,
                    sourceHandle: $.sourceHandle
                } : (ae = $.sourceHandle) != null && ae.includes("-false") && (ee = {
                    ...ee,
                    ...ve,
                    sourceHandle: $.sourceHandle
                });
                let Ge = -1;
                for (let Ie = Y.length - 1; Ie >= 0; Ie -= 1)
                    if (Y[Ie].endOfBlockId === $.id) {
                        Ge = Ie;
                        break
                    }
                if (Ge !== -1 && Y[Ge].endOfBlockId === $.id) {
                    const {conditionId: Ie} = Y.pop();
                    let $e = `placeholder-${Ie}-end`;
                    if (((ne = Y[Ge - 1]) == null ? void 0 : ne.endOfBlockId) === $.id) {
                        let pe = be;
                        for (let me = Ge - 1; me >= 0; me -= 1) {
                            if (!j.find(Oe => Oe.id === $e)) {
                                const Oe = A($e);
                                j.push(Oe)
                            }
                            const He = Y[me]
                              , Be = `placeholder-${He.conditionId}-end`;
                            if ((He == null ? void 0 : He.endOfBlockId) !== $.id || $e === Be)
                                break;
                            if (!M.find(Oe => Oe.source === pe))
                                if (!j.find(Oe => Oe.id === we) && !De) {
                                    const Oe = A(we);
                                    j.push(Oe),
                                    M.push(z(pe, we, ee, $.branchId)),
                                    M.push(z(we, $e, e))
                                } else
                                    M.push(z(pe, $e, e));
                            pe = $e,
                            $e = Be
                        }
                        if (!j.find(me => me.id === $e)) {
                            const me = A($e);
                            j.push(me)
                        }
                        if (pe === be && !De) {
                            if (!j.find(me => me.id === we)) {
                                const me = A(we);
                                j.push(me)
                            }
                            M.push(z(be, we, ee, $.branchId)),
                            M.push(z(we, $e, e))
                        } else
                            M.find(me => me.source === pe) || M.push(z(pe, $e, ee));
                        M.find(me => me.target === $.id) || M.push(z($e, $.id, e))
                    } else if (De) {
                        if (!j.find(pe => pe.id === $e)) {
                            const pe = A($e);
                            j.push(pe)
                        }
                        M.push(z(be, $e, ee)),
                        M.find(pe => pe.target.nodeId) || M.push(z($e, $.id, e))
                    } else {
                        if (!j.find(pe => pe.id === $e)) {
                            const pe = A($e);
                            j.push(pe)
                        }
                        if (!j.find(pe => pe.id === we)) {
                            const pe = A(we);
                            j.push(pe)
                        }
                        M.push(z(be, we, ee, $.branchId)),
                        M.push(z(we, $e, e)),
                        M.find(pe => pe.target.nodeId) || M.push(z($e, $.id, e))
                    }
                } else if ($.type === "placeholder" && ((se = $.data) != null && se.label) || De)
                    M.push(z(be, $.id, ee, $.branchId));
                else if (!j.find(Ie => Ie.id === we)) {
                    const Ie = A(we);
                    j.push(Ie),
                    M.push(z(be, we, ee, $.branchId)),
                    M.push(z(we, $.id, e, $.branchId))
                }
            }
            if ($.children && !X.has($.id)) {
                X.add($.id);
                const be = $.children.sort( (De, we) => De.id > we.id ? -1 : De.id < we.id ? 1 : 0);
                for (let De = 0; De < be.length; De += 1)
                    (de = $.data) != null && de.endOfBlock && Y.push({
                        conditionId: $.id,
                        endOfBlockId: $.data.endOfBlock
                    }),
                    O(be[De], $, Y, Y.length ? (Ae = Y[Y.length - 1]) == null ? void 0 : Ae.conditionId : null)
            }
        }
        return B && O(B),
        {
            nodes: j,
            edges: y(M)
        }
    }
    function v(G, U) {
        const z = ($, q={}) => ({
            ...u,
            ...q,
            id: $
        })
          , A = ($, q, Y) => ({
            ...Y,
            id: `${$}-${q}`,
            type: "custom",
            source: $,
            target: q,
            selectable: !1,
            style: {
                strokeWidth: 2
            }
        })
          , B = []
          , j = [];
        let M = null;
        G.forEach($ => {
            B.push({
                position: {
                    x: 0,
                    y: 0
                },
                id: $.id,
                type: $.triggerType,
                data: {
                    type: $.type,
                    value: $.value,
                    entity: $.entity,
                    condition: $.condition,
                    allDeals: $.allDeals,
                    all_contacts: $.all_contacts,
                    ...($ == null ? void 0 : $.channel) && {
                        channel: $.channel
                    },
                    ...($ == null ? void 0 : $.did) && {
                        did: $.did
                    },
                    ...($ == null ? void 0 : $.events) && {
                        events: $.events
                    }
                },
                draggable: !1
            }),
            M = $.startAt,
            j.push(A($.id, M))
        }
        );
        const X = {};
        function O($) {
            var Y, ee, ve, te, Q, ie, ue;
            let q = $;
            for (; q; ) {
                const I = _e.cloneDeep(U[q]);
                if (!I || X[I.id])
                    break;
                if (X[I.id] = I,
                B.push({
                    id: I.id,
                    position: {
                        x: 0,
                        y: 0
                    },
                    type: I.type,
                    data: I.data || {},
                    draggable: !1
                }),
                q = I.next,
                ["EmailCondition", "TimeCondition", "ActionAwaitAnswer"].includes(I.type) && ((Y = I.data) != null && Y.condition)) {
                    const ae = r(I.type, !0)
                      , ne = r(I.type, !1);
                    if (I.type === "ActionAwaitAnswer") {
                        if (I.data.condition.next) {
                            const se = `placeholder-${I.id}-1`;
                            B.push(z(se, {
                                data: {
                                    conditionId: I.id
                                }
                            })),
                            j.push(A(I.id, se, {
                                ...ne,
                                sourceHandle: `${I.id}-false`
                            })),
                            j.push(A(se, I.data.condition.next, e)),
                            O(I.data.condition.next)
                        }
                        if (I.next) {
                            const se = `placeholder-${I.id}-0`;
                            B.push(z(se, {
                                data: {
                                    conditionId: I.id
                                }
                            })),
                            j.push(A(I.id, se, {
                                ...ae,
                                sourceHandle: `${I.id}-true`
                            })),
                            j.push(A(se, I.next, e))
                        }
                    } else {
                        if (I.data.condition.next) {
                            const se = `placeholder-${I.id}-0`;
                            B.push(z(se, {
                                data: {
                                    conditionId: I.id
                                }
                            })),
                            j.push(A(I.id, se, {
                                ...ae,
                                sourceHandle: `${I.id}-true`
                            })),
                            j.push(A(se, I.data.condition.next, e)),
                            O(I.data.condition.next)
                        }
                        if (I.next) {
                            const se = `placeholder-${I.id}-1`;
                            B.push(z(se, {
                                data: {
                                    conditionId: I.id
                                }
                            })),
                            j.push(A(I.id, se, {
                                ...ne,
                                sourceHandle: `${I.id}-false`
                            })),
                            j.push(A(se, I.next, e))
                        }
                    }
                } else if (I.type.includes("Condition") && I.next) {
                    const ae = {
                        ...d,
                        label: rt.global.t("journey.nodes.contact_condition.default_branch")
                    }
                      , ne = `placeholder-${I.id}-00`;
                    if (B.push(z(ne, {
                        data: {
                            conditionId: I.id
                        }
                    })),
                    j.push(A(I.id, ne, ae)),
                    j.push(A(ne, I.next, e)),
                    I.type === "ActionCallIvrCondition" && ((ee = I.data.condition) != null && ee.next)) {
                        ae.label = rt.global.t("journey.nodes.action_call_ivr_condition.timeout");
                        const se = `placeholder-${I.id}-00-condition`;
                        B.push(z(se, {
                            data: {
                                conditionId: I.id
                            }
                        })),
                        j.push(A(I.id, se, {
                            ...ae,
                            sourceHandle: `${I.id}-timeout`
                        })),
                        j.push(A(se, I.data.condition.next, e)),
                        O(I.data.condition.next)
                    }
                } else if (I.next && !j.find(ae => ae.id === `${I.id}-${I.next}`))
                    j.push(A(I.id, I.next, e));
                else if (!I.next && ((ve = I == null ? void 0 : I.data) != null && ve.conditionId)) {
                    const ae = X[I.data.conditionId];
                    (te = ae == null ? void 0 : ae.data) != null && te.endOfBlock && (q = ae.data.endOfBlock,
                    j.find(ne => ne.id === `${I.id}-${ae.data.endOfBlock}`) || j.push(A(I.id, ae.data.endOfBlock, e)))
                }
                if ((ie = (Q = I.data) == null ? void 0 : Q.branches) != null && ie.length)
                    for (let ae = 0; ae < I.data.branches.length; ae += 1) {
                        const ne = I.data.branches[ae]
                          , se = {
                            label: ne.name || ne.key,
                            ...d
                        }
                          , de = {
                            ...e,
                            data: {
                                branchId: ne.id
                            }
                        }
                          , Ae = ne.next || ((ue = I == null ? void 0 : I.data) == null ? void 0 : ue.endOfBlock);
                        if (Ae) {
                            const be = ae < 10 ? `0${ae + 1}` : ae + 1
                              , De = `placeholder-${I.id}-${be}`;
                            B.push(z(De, {
                                data: {
                                    conditionId: I.id
                                }
                            })),
                            j.push(A(I.id, De, {
                                ...de,
                                ...se
                            })),
                            j.push(A(De, Ae, de)),
                            O(Ae)
                        }
                    }
            }
        }
        return M && O(M),
        b(B, j)
    }
    const {addEdges: s, addNodes: f, nodes: g, edges: _, getOutgoers: i} = qe();
    function T(G, U, z, A, B) {
        const j = B < 10 ? `0${B}` : B
          , M = `placeholder-${G.id}-${j}`
          , X = `placeholder-${G.id}-end`
          , O = [{
            ...u,
            id: M,
            data: {
                conditionId: G.id
            },
            position: G.position,
            targetPosition: nt.Top
        }]
          , $ = [{
            ...d,
            id: `${G.id}-${M}`,
            source: G.id,
            target: M,
            data: {
                branchId: z
            },
            label: A
        }];
        if (U)
            $.push({
                ...e,
                id: `${M}-${X}`,
                source: M,
                target: X,
                data: {
                    branchId: z
                }
            });
        else {
            const q = c();
            O.push({
                ...p,
                id: q,
                targetPosition: nt.Top
            }),
            $.push({
                ...e,
                id: `${M}-${q}`,
                source: M,
                target: q,
                data: {
                    branchId: z
                }
            })
        }
        f(O),
        s($)
    }
    function w(G, U, z=null) {
        const A = _.value.find(j => j.source === G.id && j.data.branchId === U);
        if (!A)
            return;
        const B = g.value.find(j => j.id === A.target);
        J.$emit("removeNode", B, z || !0)
    }
    async function P(G, U, z) {
        const A = _.value.find(j => j.source === G.id && j.data.branchId === U);
        !g.value.find(j => j.id === (A == null ? void 0 : A.target)) || !A || (A.label = "",
        await Ee(),
        A.label = z)
    }
    function k(G, U, z, A=0, B="") {
        const j = ["placeholder", "layout"];
        if (B || j.push("finish"),
        G.id === B)
            return A;
        let M = A;
        const X = i(G.id, U, z);
        for (let O = 0; O < X.length; O += 1) {
            const $ = X[O];
            $.id !== B && (j.includes($.type) || (M += 1),
            M = k($, U, z, M, B))
        }
        return M
    }
    function V(G, U=[], z=null) {
        if (G.id === z)
            return U;
        let A = U;
        return i(G.id, g.value, _.value).forEach(j => {
            j.id !== z && (A.push(j),
            A = V(j, A, z))
        }
        ),
        A
    }
    function R(G, U) {
        const z = _.value.find(B => B.source === G.id && B.data.branchId === U);
        return z ? g.value.find(B => B.id === z.target) : null
    }
    const L = (G, U, z, A=[]) => {
        if (!G)
            return null;
        if (["placeholder", "layout"].includes(G == null ? void 0 : G.type) || A.includes(G.id)) {
            const B = z.find(M => M.source === G.id)
              , j = U.find(M => M.id === (B == null ? void 0 : B.target));
            return L(j, U, z, A)
        }
        return G
    }
    ;
    function N(G, U, z, A=0) {
        if (!G)
            return null;
        if (!G.id.endsWith("-end") || A === 0) {
            const B = z.find(M => M.source === G.id)
              , j = U.find(M => M.id === (B == null ? void 0 : B.target));
            return N(j, U, z, A + 1)
        }
        return G
    }
    function oe(G, U, z, A=[]) {
        if (!G)
            return [];
        if (G.id.endsWith("-end")) {
            A.push(G);
            const B = z.filter(j => j.target === G.id);
            for (let j = 0; j < B.length; j += 1) {
                const M = B[j]
                  , X = U.find(O => O.id === M.source);
                A.concat(oe(X, U, z, A))
            }
        }
        return A
    }
    function re(G, U, z, A) {
        const B = {};
        G.forEach(X => {
            B[X.id] = []
        }
        ),
        U.forEach(X => {
            B[X.source] && B[X.source].push(X.target)
        }
        );
        const j = {};
        function M(X, O) {
            if (X === A) {
                const q = O.length;
                if (q >= 2) {
                    const Y = O[q - 2]
                      , ee = Math.max(0, q - 3);
                    j[Y] = Math.max(j[Y] || 0, ee)
                }
                return
            }
            const $ = B[X] || [];
            for (let q = 0; q < $.length; q += 1) {
                const Y = $[q];
                O.includes(Y) || M(Y, O.concat([Y]))
            }
        }
        return B[z] && M(z, [z]),
        j
    }
    function Pe(G, U) {
        const z = new Set;
        let A = _e.cloneDeep(G);
        for (const j of A)
            j.type === "layout" && z.add(j.id);
        const B = [];
        for (const j of U) {
            let M = j.source
              , X = j.target;
            for (; z.has(M); ) {
                const O = U.find($ => $.source === M);
                if (!O)
                    break;
                M = O.target
            }
            for (; z.has(X); ) {
                const O = U.find($ => $.source === X);
                if (!O)
                    break;
                X = O.target
            }
            M !== X && !z.has(M) && !z.has(X) && B.push({
                id: j.id,
                ...j.data && {
                    data: {
                        ...j.data
                    }
                },
                source: M,
                target: X,
                ...j.sourceHandle && {
                    sourceHandle: j.sourceHandle
                }
            })
        }
        return A = G.filter(j => !z.has(j.id)),
        {
            nodes: A,
            edges: B
        }
    }
    function W(G) {
        const U = (O, $, q, Y, ee) => ({
            ...e,
            ...q,
            id: `${O}-${$}`,
            source: O,
            target: $,
            ...Y && {
                data: {
                    branchId: Y
                }
            },
            hidden: ee
        })
          , z = (O, $="placeholder") => ({
            ...u,
            hidden: !1,
            type: $,
            id: O
        })
          , A = []
          , B = []
          , j = (O, $, q, Y=!1) => {
            let ee = $;
            for (let ve = 0; ve < O.nodesToAdd; ve += 1) {
                const te = `layout-${O.id}-${ve}-1`;
                A.push(z(te, "layout")),
                B.push(U(ee, te, e, null, Y)),
                ee = te
            }
            B.push(U(ee, q, e, null, Y))
        }
          , M = new Set;
        function X(O, $=null, q=[], Y=!1) {
            var Q, ie, ue, I, ae;
            M.has(O.id) || A.push(O);
            let ee = {
                ...O.edgeData,
                ...e
            };
            const ve = r($ == null ? void 0 : $.type, !1)
              , te = r($ == null ? void 0 : $.type, !0);
            if (O.type === "placeholder")
                (Q = O.sourceHandle) != null && Q.includes("-true") ? ee = {
                    ...ee,
                    ...te,
                    sourceHandle: O.sourceHandle
                } : (ie = O.sourceHandle) != null && ie.includes("-false") && (ee = {
                    ...ee,
                    ...ve,
                    sourceHandle: O.sourceHandle
                }),
                $.nodesToAdd ? j($, $.id, O.id, Y) : B.push(U($.id, O.id, ee, O.branchId, Y));
            else if ($ != null && $.id) {
                const ne = $.id
                  , se = $.type === "placeholder"
                  , de = `placeholder-${ne}-${O.id}`;
                if ((ue = O.sourceHandle) != null && ue.includes("-true") ? ee = {
                    ...ee,
                    ...te,
                    sourceHandle: O.sourceHandle
                } : (I = O.sourceHandle) != null && I.includes("-false") && (ee = {
                    ...ee,
                    ...ve,
                    sourceHandle: O.sourceHandle
                }),
                O.type === "placeholder" || se)
                    $.nodesToAdd ? j($, ne, O.id, Y) : B.push(U(ne, O.id, ee, O.branchId, Y));
                else if (!A.find(Ae => Ae.id === de)) {
                    const Ae = z(de);
                    A.push(Ae),
                    $.nodesToAdd ? j($, ne, de, Y) : B.push(U(ne, de, ee, O.branchId, Y)),
                    B.push(U(de, O.id, e, O.branchId, Y))
                }
            }
            if (O.children && !M.has(O.id)) {
                M.add(O.id);
                const ne = O.children.sort( (se, de) => se.id > de.id ? -1 : se.id < de.id ? 1 : 0);
                for (let se = 0; se < ne.length; se += 1) {
                    (ae = O.data) != null && ae.endOfBlock && q.push({
                        conditionId: O.id,
                        endOfBlockId: O.data.endOfBlock
                    });
                    let de = Y || ["finish", "ActionGoToStep"].includes(O == null ? void 0 : O.type);
                    O.id.endsWith("-end") && (de = !1),
                    X(ne[se], O, q, de)
                }
            } else
                M.has(O.id) || M.add(O.id)
        }
        return X(G),
        {
            nodes: A,
            edges: y(B)
        }
    }
    function K(G, U) {
        const {nodes: z, edges: A} = Pe(_e.cloneDeep(G), _e.cloneDeep(U))
          , B = {};
        z.forEach($ => {
            B[$.id] = {
                ...$,
                nodesToAdd: 0,
                children: [],
                parents: []
            }
        }
        ),
        z.filter($ => {
            var q;
            return (q = $ == null ? void 0 : $.data) == null ? void 0 : q.endOfBlock
        }
        ).forEach($ => {
            const q = `placeholder-${$.id}-end`
              , Y = re(z, A, $.id, q);
            if (Object.keys(Y).length === 0)
                return;
            const ee = Object.keys(Y).reduce( (ve, te) => Y[ve] > Y[te] ? ve : te);
            Object.entries(Y).forEach( ([ve,te]) => {
                ve !== ee ? B[ve].nodesToAdd = Y[ee] - te : B[ve] && (B[ve].nodesToAdd = 0)
            }
            )
        }
        );
        const j = {};
        z.forEach($ => {
            var q;
            (q = $.data) != null && q.endOfBlock && (j[$.id] = $.data.endOfBlock)
        }
        ),
        A.forEach($ => {
            var q;
            B[$.target] && ((q = $.data) != null && q.branchId) && (B[$.target].branchId = $.data.branchId,
            B[$.target].edgeData = $),
            B[$.source] && B[$.target] && (B[$.source].children.push(B[$.target]),
            B[$.target].sourceHandle = $.sourceHandle,
            B[$.target].parents.push(B[$.source]),
            B[$.target].edgeData = $)
        }
        );
        const M = new Set
          , X = Object.keys(B);
        for (let $ = 0; $ < X.length; $ += 1) {
            const q = X[$]
              , Y = B[q];
            if (Y.children)
                for (let ee = 0; ee < Y.children.length; ee += 1) {
                    const ve = Y.children[ee];
                    M.add(ve.id)
                }
        }
        const O = Object.values(B).find($ => !M.has($.id));
        return W(O)
    }
    return {
        addPath: T,
        buildGraphData: v,
        createEdgeData: r,
        conditionEdgeData: d,
        defaultMarker: l,
        edgeData: e,
        falseColor: n,
        finishNode: p,
        insertPlaceholders: K,
        generateId: c,
        getNextEndPlaceholderNode: N,
        getNextValidNode: L,
        getNodeByBranchId: R,
        getNodeChildren: V,
        getNodeLength: k,
        getPreviousEndPlaceholderNodes: oe,
        placeholderNode: u,
        removePath: w,
        trueColor: t,
        updateNodeLabel: P
    }
}
const ri = {
    class: "d-flex align-items-center mt-3"
}
  , ui = {
    class: "mt-2"
}
  , ci = {
    class: "d-flex align-items-center"
}
  , mi = {
    class: "d-flex w-100"
}
  , pi = {
    __name: "ContactConditionModal",
    props: {
        show: Boolean,
        node: Object,
        entity: String,
        initialData: Object,
        fieldsOptions: Array,
        loadingFieldsOptions: Boolean,
        editable: Boolean
    },
    emits: ["close", "openConfig", "updateData"],
    setup(e, {expose: t, emit: n}) {
        const d = n
          , l = e
          , {t: u} = xe()
          , {notifyError: p} = Xe()
          , r = ze()
          , {generateId: c, addPath: y, removePath: o, updateNodeLabel: b, getNodeByBranchId: v, getNodeLength: s} = tt()
          , f = Tt()
          , {nodes: g, edges: _} = qe()
          , i = x([])
          , T = x(!1)
          , w = x([]);
        function P(Q, ie=!1) {
            (!Q || Q.length < 2) && !ie || (T.value = !0,
            yt(Q, l.entity, "segmentation").then(ue => {
                let I = [];
                ue != null && ue.length && (I = ue.map( ({id: ae, name: ne, entity: se}) => ({
                    value: ae,
                    label: ne,
                    entity: se
                }))),
                w.value = I
            }
            ).finally( () => {
                T.value = !1
            }
            ))
        }
        const k = _e.debounce(Q => {
            P(Q)
        }
        , 400)
          , V = x([]);
        function R() {
            i.value.push({
                name: `${u("journey.modals.contact_condition.branch")} ${"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i.value.length]}`,
                segmentation: null,
                id: c()
            }),
            V.value.push({
                id: null,
                draft: !0,
                entity: l.entity,
                useExistentSegmentation: !1,
                builder: Qe.getBuilder({
                    groupsNumber: 1
                })
            })
        }
        const L = Z( () => {
            const {entity: Q} = l;
            return ["PROSPECT", "LEAD"].includes(Q) ? "CONTACT" : Q
        }
        )
          , N = x([])
          , oe = x(!0);
        Ve(async () => {
            var Q, ie, ue, I, ae;
            !((ie = (Q = l.initialData) == null ? void 0 : Q.branches) != null && ie.length) && !((ue = i.value) != null && ue.length) ? (R(),
            y(l.node, !!((I = l.initialData) != null && I.endOfBlock), i.value[0].id, i.value[0].name, 1)) : i.value = l.initialData.branches,
            N.value = [...i.value];
            try {
                if ((ae = l.initialData.branches) != null && ae.length) {
                    const ne = i.value.map(de => {
                        var Ae;
                        return (Ae = de.segmentation) == null ? void 0 : Ae.value
                    }
                    ).filter(de => de);
                    let se = [];
                    ne.length && (se = (await r.dispatch("segmentation/getSegmentationsByIds", {
                        ids: ne
                    })).data);
                    for (let de = 0; de < i.value.length; de += 1) {
                        const Ae = i.value[de]
                          , be = se.find(De => {
                            var we;
                            return +De.id == +((we = Ae.segmentation) == null ? void 0 : we.value)
                        }
                        );
                        V.value.push({
                            id: null,
                            draft: !1,
                            entity: l.entity,
                            useExistentSegmentation: !1
                        }),
                        be ? (V.value[de].id = be.id,
                        V.value[de].entity = be.entity,
                        V.value[de].draft = be.draft,
                        V.value[de].useExistentSegmentation = !be.draft,
                        be.query ? V.value[de].builder = await Ze(be.query, be.entity.toLowerCase(), L.value) : V.value[de].builder = Qe.getBuilder({
                            groupsNumber: 1
                        }),
                        be.draft && i.value[de].segmentation && (i.value[de].segmentation.conditions = V.value[de].builder.getSegmentationQuery())) : (V.value[de].draft = !0,
                        V.value[de].entity = Ae.entity,
                        V.value[de].builder = Qe.getBuilder({
                            groupsNumber: 1
                        }))
                    }
                }
            } catch {} finally {
                oe.value = !1
            }
            P(null, !0),
            d("updateData", {
                condition: !0,
                branches: i.value
            }, !0)
        }
        );
        const re = x(null)
          , Pe = async () => {
            if (!re.value || !V.value.every( ({builder: ue}) => ue.groups.every(I => I.conditions.every(ae => ae.value))))
                return !1;
            const {valid: ie} = await re.value.validate();
            return ie
        }
          , W = x(!1)
          , K = x(0);
        async function G(Q) {
            if (!l.editable)
                return;
            const ie = v(l.node, i.value[Q].id);
            if (ie) {
                const ue = s(ie, g.value, _.value, 0, l.initialData.endOfBlock);
                if (ue >= 1 && (W.value = !0,
                K.value = ue,
                !await f.confirm()))
                    return
            }
            i.value.splice(Q, 1),
            V.value.splice(Q, 1)
        }
        const U = x(!1)
          , z = Z( () => l.show && !U.value && !W.value)
          , A = x(null)
          , B = x(!1);
        function j(Q) {
            B.value = !0,
            r.dispatch("segmentation/getSegmentation", Q.value).then(ie => {
                A.value = ie,
                U.value = !0
            }
            ).catch( () => {
                p("general.messages.error.load")
            }
            ).finally( () => {
                B.value = !1
            }
            )
        }
        function M() {
            i.value = [...N.value],
            d("close")
        }
        const X = x(null);
        function O(Q) {
            X.value = Q,
            U.value = !0
        }
        function $(Q, ie) {
            V.value[Q].id = null,
            V.value[Q].value = null,
            V.value[Q].draft = !ie,
            V.value[Q].builder = Qe.getBuilder({
                groupsNumber: 1
            }),
            i.value[Q].segmentation = null
        }
        async function q(Q, ie) {
            i.value[ie].segmentation = Q,
            V.value[ie].loading = !0;
            try {
                let ue = Q == null ? void 0 : Q.query;
                ue || (ue = (await r.dispatch("segmentation/getSegmentation", Q.value)).query),
                V.value[ie].builder = await Ze(ue, Q.entity.toLowerCase(), L.value)
            } catch {
                V.value[ie].builder = Qe.getBuilder({
                    groupsNumber: 1
                })
            } finally {
                V.value[ie].loading = !1
            }
        }
        function Y() {
            U.value = !1,
            A.value = null,
            X.value = null,
            d("openConfig")
        }
        function ee() {
            W.value = !1,
            d("openConfig")
        }
        async function ve({id: Q, name: ie}) {
            if (Q) {
                if (X.value !== null) {
                    const ue = {
                        value: Q == null ? void 0 : Q.toString(),
                        label: ie,
                        entity: l.entity
                    };
                    i.value[X.value].segmentation = ue,
                    q(ue, X.value)
                }
                Y()
            }
        }
        async function te() {
            N.value.forEach(Q => {
                var ue;
                if (!i.value.find(I => I.id === Q.id)) {
                    const I = (ue = l.initialData) != null && ue.endOfBlock ? `placeholder-${l.node.id}-end` : null;
                    o(l.node, Q.id, I)
                }
            }
            ),
            await Ee(),
            i.value.forEach( (Q, ie) => {
                var se;
                N.value.find(de => de.id === Q.id) ? b(l.node, Q.id, Q.name) : y(l.node, !!((se = l.initialData) != null && se.endOfBlock), Q.id, Q.name, ie + 1);
                const {segmentation: I} = Q;
                let ae = I;
                const ne = V.value[ie];
                if (ne) {
                    const de = ne.builder.getSegmentationQuery();
                    ae = {
                        id: (ae == null ? void 0 : ae.value) || ne.id,
                        label: (I == null ? void 0 : I.label) || null,
                        value: (ae == null ? void 0 : ae.value) || ne.id,
                        draft: V.value[ie].draft ?? !1,
                        entity: l.entity,
                        conditions: de
                    }
                }
                i.value[ie].segmentation = ae
            }
            ),
            N.value = [...i.value],
            d("updateData", {
                condition: !0,
                branches: i.value
            })
        }
        return t({
            validate: Pe
        }),
        (Q, ie) => {
            const ue = m("DsHeading")
              , I = m("DsIcon")
              , ae = m("DsTooltip")
              , ne = m("DsTypography")
              , se = m("DsInput")
              , de = m("Field")
              , Ae = m("DsCheckbox")
              , be = m("DsSelect")
              , De = m("DsButton")
              , we = m("DsAccordionItem")
              , Ge = m("DsAccordion")
              , Ie = m("Form")
              , $e = m("DsModal");
            return D(),
            F("div", null, [a($e, {
                show: z.value,
                size: "lg",
                class: "contact-condition-modal",
                appendToBody: "",
                alwaysRender: "",
                scrollable: "",
                onHide: M,
                headerClass: "d-flex align-items-center"
            }, {
                header: h( () => [a(ue, {
                    size: "md",
                    text: Q.$t("journey.modals.contact_condition.title")
                }, null, 8, ["text"]), a(ae, {
                    class: "mb-2",
                    text: Q.$t("journey.information_icons.contact_condition.title_info"),
                    placement: "bottom",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "w-25 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(I, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]),
                body: h( () => [a(Ie, {
                    as: "div",
                    ref_key: "observer",
                    ref: re
                }, {
                    default: h( () => [a(Ge, null, {
                        default: h( () => [(D(!0),
                        F(fe, null, Te(i.value, (pe, me) => (D(),
                        F(fe, {
                            key: pe.id
                        }, [a(we, {
                            title: pe.name,
                            startOpen: me === 0,
                            invertArrow: "",
                            alwaysRender: "",
                            icon: "mind-map",
                            headerClass: "px-0",
                            bodyClass: "p-2"
                        }, ht({
                            body: h( () => {
                                var He;
                                return [a(ne, {
                                    tag: "label",
                                    fontSize: "2",
                                    fontWeight: "bold",
                                    class: "mb-1",
                                    text: C(u)("journey.modals.contact_condition.branch_name")
                                }, null, 8, ["text"]), a(ae, {
                                    class: "mb-2",
                                    text: Q.$t("journey.information_icons.contact_condition.path"),
                                    placement: "bottom",
                                    offset: "5",
                                    appendToBody: "",
                                    tooltipClass: "w-25 fw-normal information-tooltip"
                                }, {
                                    default: h( () => [a(I, {
                                        icon: "information-line",
                                        class: "fs-2 ms-1 text-green-dark"
                                    })]),
                                    _: 1
                                }, 8, ["text"]), a(de, {
                                    modelValue: pe.name,
                                    "onUpdate:modelValue": Be => pe.name = Be,
                                    name: `branchName-${pe.id}`,
                                    rules: "required"
                                }, {
                                    default: h( ({componentField: Be, errors: Oe}) => [a(se, le({
                                        ref_for: !0
                                    }, Be, {
                                        disabled: !e.editable,
                                        "data-testid": `branch-name-${me}`,
                                        hasError: Oe.length > 0
                                    }), null, 16, ["disabled", "data-testid", "hasError"])]),
                                    _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "name"]), S("div", ri, [V.value[me] ? (D(),
                                E(Ae, {
                                    key: 0,
                                    "data-testid": "use-segmentation",
                                    labelClass: "fw-bold",
                                    isSwitch: "",
                                    label: C(u)("journey.modals.contact_condition.use_segmentation"),
                                    disabled: !e.editable,
                                    modelValue: V.value[me].useExistentSegmentation,
                                    "onUpdate:modelValue": [Be => V.value[me].useExistentSegmentation = Be, Be => $(me, Be)]
                                }, null, 8, ["label", "disabled", "modelValue", "onUpdate:modelValue"])) : H("", !0), a(ae, {
                                    class: "mb-1",
                                    text: Q.$t("journey.information_icons.contact_condition.segmentation"),
                                    placement: "bottom",
                                    offset: "5",
                                    appendToBody: "",
                                    tooltipClass: "w-25 fw-normal information-tooltip"
                                }, {
                                    default: h( () => [a(I, {
                                        icon: "information-line",
                                        class: "fs-2 ms-1 text-green-dark"
                                    })]),
                                    _: 1
                                }, 8, ["text"])]), (He = V.value[me]) != null && He.useExistentSegmentation ? (D(),
                                F(fe, {
                                    key: 0
                                }, [a(ne, {
                                    tag: "label",
                                    fontSize: "2",
                                    class: "mt-3",
                                    fontWeight: "bold",
                                    text: C(u)("journey.modals.contact_condition.segmentation")
                                }, null, 8, ["text"]), a(de, {
                                    modelValue: pe.segmentation,
                                    "onUpdate:modelValue": Be => pe.segmentation = Be,
                                    name: `segmentation-${pe.id}`,
                                    rules: "required"
                                }, {
                                    default: h( ({componentField: Be, errors: Oe}) => [a(be, le({
                                        ref_for: !0
                                    }, Be, {
                                        id: "list",
                                        class: "mt-1",
                                        "data-testid": `select-list-${me}`,
                                        options: w.value,
                                        placeholder: C(u)("flow.list_search"),
                                        loading: T.value,
                                        hasError: Oe.length > 0,
                                        disabled: !e.editable,
                                        onSearch: C(k),
                                        "onOption:selected": lt => q(lt, me),
                                        "onOption:deselect": lt => q(lt, me)
                                    }), null, 16, ["data-testid", "options", "placeholder", "loading", "hasError", "disabled", "onSearch", "onOption:selected", "onOption:deselect"])]),
                                    _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "name"]), S("div", ui, [a(De, {
                                    "data-testid": `btn-new-segmentation-${me}`,
                                    text: C(u)("journey.modals.contact_condition.new_segmentation"),
                                    disabled: !e.editable,
                                    size: "sm",
                                    onClick: Be => O(me)
                                }, null, 8, ["data-testid", "text", "disabled", "onClick"]), a(De, {
                                    "data-testid": `btn-edit-segmentation-${me}`,
                                    text: C(u)("journey.modals.contact_condition.edit_segmentation"),
                                    variant: "outline-green-normal",
                                    class: "ms-2",
                                    size: "sm",
                                    loading: B.value,
                                    disabled: !pe.segmentation || B.value || !e.editable,
                                    onClick: Be => j(pe.segmentation)
                                }, null, 8, ["data-testid", "text", "loading", "disabled", "onClick"])])], 64)) : H("", !0), a(ne, {
                                    tag: "label",
                                    fontSize: "2",
                                    class: "mt-3",
                                    fontWeight: "bold",
                                    text: C(u)("journey.modals.contact_condition.conditions")
                                }, null, 8, ["text"]), V.value[me] ? (D(),
                                E(C(Dt), {
                                    key: 1,
                                    modelValue: V.value[me].builder,
                                    "onUpdate:modelValue": Be => V.value[me].builder = Be,
                                    disabled: V.value[me].useExistentSegmentation || !e.editable,
                                    loading: oe.value || V.value[me].loading,
                                    fieldsOptions: e.fieldsOptions,
                                    loadingFieldsOptions: e.loadingFieldsOptions
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "loading", "fieldsOptions", "loadingFieldsOptions"])) : H("", !0)]
                            }
                            ),
                            _: 2
                        }, [i.value.length > 1 ? {
                            name: "badge",
                            fn: h( () => [a(I, {
                                "data-testid": `btn-remove-branch-${me}`,
                                icon: "delete-bin-line",
                                class: "text-red-normal ms-2",
                                onClick: He => G(me)
                            }, null, 8, ["data-testid", "onClick"])]),
                            key: "0"
                        } : void 0]), 1032, ["title", "startOpen"]), ie[0] || (ie[0] = S("hr", null, null, -1))], 64))), 128))]),
                        _: 1
                    }), S("div", ci, [a(De, {
                        "data-testid": "btn-new-branch",
                        class: "mt-2",
                        variant: "outline-green-normal",
                        size: "sm",
                        icon: "add-line",
                        text: C(u)("journey.modals.contact_condition.add_branch"),
                        disabled: !e.editable,
                        onClick: R
                    }, null, 8, ["text", "disabled"]), a(ae, {
                        class: "mt-2 ms-1",
                        text: Q.$t("journey.information_icons.contact_condition.branch"),
                        placement: "top",
                        offset: "5",
                        appendToBody: "",
                        tooltipClass: "w-25 fw-normal information-tooltip"
                    }, {
                        default: h( () => [a(I, {
                            icon: "information-line",
                            class: "fs-2 ms-1 text-green-dark"
                        })]),
                        _: 1
                    }, 8, ["text"])])]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", mi, [a(De, {
                    text: C(u)("save"),
                    disabled: !e.editable,
                    "data-testid": "btn-save",
                    size: "lg",
                    class: "w-50",
                    onClick: te
                }, null, 8, ["text", "disabled"]), a(De, {
                    text: C(u)("cancel"),
                    "data-testid": "btn-cancel",
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: M
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"]), U.value ? (D(),
            E(C(bt), {
                key: 0,
                show: U.value,
                entity: e.entity.toLowerCase(),
                customColumnEntity: L.value,
                showPreviewButton: !1,
                segmentation: A.value,
                showSave: !A.value,
                onSaved: ve,
                onHideModal: Y
            }, null, 8, ["show", "entity", "customColumnEntity", "segmentation", "showSave"])) : H("", !0), a(C($t), {
                show: W.value,
                count: K.value,
                onClose: ee
            }, null, 8, ["show", "count"])])
        }
    }
}
  , fi = {
    __name: "ContactConditionNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        fieldsOptions: Array,
        loadingFieldsOptions: Boolean
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = x(null)
          , d = t
          , {t: l} = xe()
          , {nodes: u, edges: p} = qe()
          , r = ze()
          , {node: c} = Ce()
          , y = Z( () => {
            var T, w, P, k, V;
            return !((T = u.value) != null && T.length) || !((w = p.value) != null && w.length) ? null : (V = (k = (P = u.value.filter(R => R.type === "list")[0]) == null ? void 0 : P.data) == null ? void 0 : k.entity) == null ? void 0 : V.toUpperCase()
        }
        )
          , o = Z( () => r.getters["flows/stepsCountData"] === null)
          , b = Z( () => {
            var i;
            return (i = r.getters.planSpecs) == null ? void 0 : i.includes("contact_condition")
        }
        )
          , v = x(!0)
          , s = x("")
          , f = async () => {
            await Ee(),
            n.value && (v.value = await n.value.validate(),
            s.value = ""),
            d("updateNodeData", c, v.value)
        }
        ;
        J.$on("validateAll", f);
        const g = x(!1)
          , _ = async (i, T) => {
            c.data || (c.data = {
                branches: []
            });
            const {endOfBlock: w} = c.data;
            c.data = {
                endOfBlock: w,
                ...i
            },
            g.value = !1,
            await f(),
            T && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", f)
        }
        ),
        (i, T) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: v.value,
            alertMessage: s.value,
            locked: !b.value,
            baseColor: "gray-900",
            icon: "user-line",
            iconColor: "text-green-brand",
            title: C(l)("journey.nodes.contact_condition.title"),
            titleColor: "white",
            bodyPadding: "p-3",
            bodyColor: "bg-gray-900",
            onOpenConfig: T[2] || (T[2] = w => g.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(pi), {
                key: 0,
                ref_key: "modal",
                ref: n,
                show: g.value,
                node: C(c),
                entity: y.value,
                initialData: e.data,
                fieldsOptions: e.fieldsOptions,
                loadingFieldsOptions: e.loadingFieldsOptions,
                editable: o.value,
                onUpdateData: _,
                onOpenConfig: T[0] || (T[0] = w => g.value = !0),
                onClose: T[1] || (T[1] = w => g.value = !1)
            }, null, 8, ["show", "node", "entity", "initialData", "fieldsOptions", "loadingFieldsOptions", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "locked", "title"]))
    }
}
  , vi = ge(fi, [["__scopeId", "data-v-df840559"]])
  , gi = {
    class: "d-flex w-100"
}
  , hi = {
    __name: "EmailConditionModal",
    props: {
        show: Boolean,
        emailsList: Array,
        initialData: Object,
        editable: Boolean
    },
    emits: ["close", "updateData"],
    setup(e, {expose: t, emit: n}) {
        const d = n
          , l = e
          , u = [{
            code: "opened",
            label: "Abriu"
        }, {
            code: "replied",
            label: "Respondeu"
        }, {
            code: "clicked",
            label: "Clicou"
        }]
          , p = x(null)
          , r = x(null);
        Ve( () => {
            var s, f;
            const {initialData: b, emailsList: v} = l;
            b && (b != null && b.emailStep && (p.value = v.find(g => g.code === b.emailStep)),
            (f = (s = b == null ? void 0 : b.condition) == null ? void 0 : s.data) != null && f.value && (r.value = u.find(g => g.code === b.condition.data.value)),
            Ee( () => {
                d("updateData", {
                    emailStep: p.value,
                    condition: r.value
                }, !0)
            }
            ))
        }
        );
        const c = () => {
            d("updateData", {
                emailStep: p.value,
                condition: r.value
            })
        }
          , y = x(null);
        return t({
            validate: async () => {
                if (!y.value)
                    return !1;
                const {valid: b} = await y.value.validate();
                return b
            }
        }),
        (b, v) => {
            const s = m("DsHeading")
              , f = m("DsIcon")
              , g = m("DsTooltip")
              , _ = m("DsTypography")
              , i = m("DsSelect")
              , T = m("Field")
              , w = m("Form")
              , P = m("DsButton")
              , k = m("DsModal");
            return D(),
            E(k, {
                size: "md",
                show: e.show,
                appendToBody: "",
                alwaysRender: "",
                onHide: v[3] || (v[3] = V => b.$emit("close")),
                headerClass: "d-flex align-items-center"
            }, {
                header: h( () => [a(s, {
                    size: "md",
                    text: b.$t("journey.modals.email_condition.title"),
                    "data-testid": "email-condition-modal-title"
                }, null, 8, ["text"]), a(g, {
                    class: "mb-2",
                    text: b.$t("journey.information_icons.email_conditional"),
                    placement: "top-start",
                    offset: "5",
                    appendToBody: "",
                    tooltipClass: "w-25 fw-normal information-tooltip"
                }, {
                    default: h( () => [a(f, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]),
                body: h( () => [a(w, {
                    ref_key: "observer",
                    ref: y
                }, {
                    default: h( () => [a(T, {
                        rules: "required",
                        name: "condition",
                        modelValue: r.value,
                        "onUpdate:modelValue": v[0] || (v[0] = V => r.value = V)
                    }, {
                        default: h( ({errors: V, componentField: R}) => [a(_, {
                            tag: "span",
                            fontWeight: "bold",
                            text: b.$t("journey.modals.condition.title"),
                            fontSize: "2"
                        }, null, 8, ["text"]), a(i, le(R, {
                            id: "condition",
                            class: "mb-2 mt-1",
                            options: u,
                            placeholder: b.$t("journey.modals.condition.placeholder"),
                            hasError: V.length > 0,
                            disabled: !e.editable
                        }), null, 16, ["placeholder", "hasError", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"]), a(T, {
                        rules: "required",
                        name: "emailStep",
                        modelValue: p.value,
                        "onUpdate:modelValue": v[1] || (v[1] = V => p.value = V)
                    }, {
                        default: h( ({errors: V, componentField: R}) => [a(_, {
                            tag: "span",
                            fontWeight: "bold",
                            text: "E-mail",
                            fontSize: "2"
                        }), a(i, le(R, {
                            id: "email",
                            class: "mb-2 mt-1",
                            options: e.emailsList,
                            placeholder: b.$t("journey.modals.mail.placeholder"),
                            clearable: !1,
                            hasError: V.length > 0,
                            disabled: !e.editable
                        }), null, 16, ["options", "placeholder", "hasError", "disabled"])]),
                        _: 1
                    }, 8, ["modelValue"])]),
                    _: 1
                }, 512)]),
                footer: h( () => [S("div", gi, [a(P, {
                    text: b.$t("save"),
                    disabled: !e.editable,
                    size: "lg",
                    class: "w-50",
                    onClick: c
                }, null, 8, ["text", "disabled"]), a(P, {
                    text: b.$t("cancel"),
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: v[2] || (v[2] = V => d("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , bi = {
    __name: "EmailConditionNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = x("")
          , d = x(null)
          , l = t
          , u = e
          , {t: p} = xe()
          , {getIncomers: r, nodes: c, edges: y} = qe()
          , o = ze()
          , {node: b} = Ce()
          , v = Z( () => u.handleSourcePosition === "bottom" ? {
            true: {
                left: "55%",
                background: "#01B89A"
            },
            false: {
                left: "45%",
                background: "#F44336"
            }
        } : {
            true: {
                top: "65%",
                background: "#01B89A"
            },
            false: {
                top: "35%",
                background: "#F44336"
            }
        });
        function s(V, R, L) {
            if (!V)
                return [];
            let N = [];
            const oe = r(V, R, L);
            for (let re = 0; re < oe.length; re += 1)
                oe[re].type === "ActionEmail" && N.push(oe[re]),
                N = N.concat(s(oe[re], R, L));
            return N
        }
        const f = Z( () => {
            var R, L;
            return !((R = c.value) != null && R.length) || !((L = y.value) != null && L.length) ? [] : s(b, c.value, y.value).map(N => ({
                code: N.id,
                label: N.data.subject
            }))
        }
        )
          , g = Z( () => {
            var R, L;
            if (!((R = c.value) != null && R.length) || !((L = y.value) != null && L.length))
                return null;
            let V = r(b, c.value, y.value);
            return V.length ? (V[0].type === "placeholder" && (V = r(V[0], c.value, y.value)),
            V[0]) : null
        }
        )
          , _ = Z( () => o.getters["flows/stepsCountData"] === null)
          , i = x(!0)
          , T = x("")
          , w = async () => {
            var V;
            f.value.length ? ((V = g.value) == null ? void 0 : V.type) !== "ActionWait" ? (i.value = !1,
            T.value = p("journey.nodes.email_condition.alert.required_wait_action")) : d.value && (i.value = await d.value.validate(),
            T.value = "") : (i.value = !1,
            T.value = p("journey.nodes.email_condition.alert.required_email_action")),
            l("updateNodeData", b, i.value)
        }
        ;
        J.$on("validateAll", w);
        const P = x(!1)
          , k = async (V, R) => {
            var L, N, oe, re, Pe;
            if (b.data || (b.data = {}),
            (L = V == null ? void 0 : V.emailStep) != null && L.code && (b.data.emailStep = V.emailStep.code),
            (N = V == null ? void 0 : V.condition) != null && N.code) {
                const {condition: W} = b.data;
                b.data.condition = {
                    ...W,
                    next: null,
                    operatorType: "emailProperty",
                    operator: "=",
                    data: {
                        property: "event",
                        propertyType: "string",
                        value: (oe = V == null ? void 0 : V.condition) == null ? void 0 : oe.code
                    }
                }
            }
            P.value = !1,
            V != null && V.emailStep && (V != null && V.condition) && (n.value = `${(re = V.condition) == null ? void 0 : re.label} o e-mail "${(Pe = V.emailStep) == null ? void 0 : Pe.label}"`),
            await w(),
            R && J.$emit("nodeReady", b)
        }
        ;
        return ke( () => {
            J.$off("validateAll", w)
        }
        ),
        (V, R) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(b),
            valid: i.value,
            alertMessage: T.value,
            baseColor: "gray-900",
            icon: "mail-line",
            iconColor: "text-green-brand",
            shortTitle: C(p)("journey.nodes.email_condition.short_title"),
            title: C(p)("journey.nodes.email_condition.title"),
            titleColor: "white",
            description: n.value || C(p)("journey.nodes.email_condition.description"),
            descriptionColor: "white",
            bodyPadding: "p-3",
            bodyColor: "bg-gray-900",
            onOpenConfig: R[1] || (R[1] = L => P.value = !0)
        }, {
            handleSource: h( () => [e.draggable ? H("", !0) : (D(),
            E(C(Re), {
                key: 0,
                id: `${e.id}-true`,
                type: "source",
                class: he(["border-white", {
                    minimized: e.minimized
                }]),
                position: e.handleSourcePosition,
                style: Fe(v.value.true),
                connectable: !1
            }, null, 8, ["id", "class", "position", "style"])), e.draggable ? H("", !0) : (D(),
            E(C(Re), {
                key: 1,
                id: `${e.id}-false`,
                type: "source",
                class: he(["border-white", {
                    minimized: e.minimized
                }]),
                position: e.handleSourcePosition,
                style: Fe(v.value.false),
                connectable: !1
            }, null, 8, ["id", "class", "position", "style"]))]),
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(hi), {
                key: 0,
                ref_key: "modal",
                ref: d,
                show: P.value,
                emailsList: f.value,
                initialData: e.data,
                editable: _.value,
                onUpdateData: k,
                onClose: R[0] || (R[0] = L => P.value = !1)
            }, null, 8, ["show", "emailsList", "initialData", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "shortTitle", "title", "description"]))
    }
}
  , yi = ge(bi, [["__scopeId", "data-v-0df20681"]])
  , wi = {
    class: "px-4 d-flex w-100 bg-gray-normal border-top border-bottom border-gray-400"
}
  , _i = ["onClick"]
  , Di = {
    class: "px-4 py-3"
}
  , Ti = {
    class: "d-flex w-100"
}
  , $i = {
    __name: "WorkflowVariablesConditionModal",
    props: {
        show: Boolean,
        node: Object,
        initialData: Object,
        fieldsOptions: Array,
        loadingFieldsOptions: Boolean,
        answerVariableName: String,
        messageDataItems: Array
    },
    emits: ["close", "openConfig", "updateData"],
    setup(e, {expose: t, emit: n}) {
        const d = n
          , l = e
          , {t: u} = xe()
          , {generateId: p, addPath: r, removePath: c, updateNodeLabel: y, getNodeByBranchId: o, getNodeLength: b} = tt()
          , v = Tt()
          , s = x([])
          , f = x("conditions")
          , g = x(!1)
          , _ = x([]);
        function i(A, B) {
            const j = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              , M = p();
            return s.value.push({
                name: A || `${u("journey.modals.contact_condition.branch")} ${j[s.value.length]}`,
                id: M
            }),
            _.value.push({
                id: null,
                builder: B || Qe.getBuilder({
                    groupsNumber: 1
                })
            }),
            M
        }
        const T = {
            combiner: "or",
            conditions: [{
                combiner: "and",
                conditions: [{
                    name: null,
                    operator: "=",
                    value: null,
                    type: "string"
                }]
            }]
        };
        let w = [];
        const P = x([])
          , k = x([])
          , V = x(!0);
        Ve(async () => {
            var A, B, j, M, X, O, $, q;
            !((B = (A = l.initialData) == null ? void 0 : A.branches) != null && B.length) && !((j = s.value) != null && j.length) ? ((!l.answerVariableName || !((M = l.messageDataItems) != null && M.length)) && (i(),
            r(l.node, !!((X = l.initialData) != null && X.endOfBlock), s.value[0].id, s.value[0].name, 1)),
            w = []) : (w = _e.cloneDeep(l.messageDataItems),
            s.value = l.initialData.branches),
            P.value = _e.cloneDeep(s.value),
            k.value = _e.cloneDeep(_.value);
            try {
                if ((O = l.initialData.branches) != null && O.length)
                    for (let Y = 0; Y < s.value.length; Y += 1)
                        _.value.push({
                            id: null
                        }),
                        ($ = l.initialData.branches[Y].data) != null && $.conditions ? _.value[Y].builder = await Ze((q = l.initialData.branches[Y].data) == null ? void 0 : q.conditions, "message", null, l.fieldsOptions) : _.value[Y].builder = Qe.getBuilder({
                            groupsNumber: 1
                        })
            } catch {} finally {
                V.value = !1
            }
            d("updateData", {
                condition: !0,
                branches: s.value
            }, !0)
        }
        );
        const R = x(null)
          , L = async () => {
            if (!R.value)
                return !1;
            const {valid: A} = await R.value.validate();
            return A
        }
          , N = x(!1)
          , oe = x(0);
        async function re(A, B=!1) {
            if (!B) {
                const j = o(l.node, s.value[A].id);
                if (j) {
                    const M = b(j);
                    if (M >= 1 && (N.value = !0,
                    oe.value = M,
                    !await v.confirm()))
                        return
                }
            }
            s.value.splice(A, 1),
            _.value.splice(A, 1)
        }
        const Pe = Z( () => l.show && !N.value);
        function W() {
            s.value = _e.cloneDeep(P.value),
            _.value = _e.cloneDeep(k.value),
            d("close")
        }
        async function K() {
            g.value = !0,
            P.value.forEach(A => {
                var j;
                if (!s.value.find(M => M.id === A.id)) {
                    const M = (j = l.initialData) != null && j.endOfBlock ? `placeholder-${l.node.id}-end` : null;
                    c(l.node, A.id, M)
                }
            }
            ),
            await Ee(),
            s.value.forEach( (A, B) => {
                var O;
                P.value.find($ => $.id === A.id) ? y(l.node, A.id, A.name) : r(l.node, !!((O = l.initialData) != null && O.endOfBlock), A.id, A.name, B + 1);
                let M = {};
                const X = _.value[B];
                if (X) {
                    M = {
                        id: X.id,
                        value: X.id
                    };
                    const $ = X.builder.getSegmentationQuery();
                    M.conditions = $
                }
                s.value[B].data = M
            }
            ),
            P.value = _e.cloneDeep(s.value),
            k.value = _e.cloneDeep(_.value),
            g.value = !1,
            d("updateData", {
                condition: !0,
                branches: s.value
            })
        }
        async function G() {
            var X;
            if (!l.answerVariableName || g.value)
                return;
            const A = l.messageDataItems
              , B = w.filter(O => !A.find($ => $.id === O.id));
            if (B.length > 0) {
                const O = s.value.map( ($, q) => ({
                    ...$,
                    index: q
                })).filter($ => B.find(q => q.title === $.name));
                for (let $ = 0; $ < O.length; $ += 1) {
                    const q = O[$];
                    await re(q.index, !0)
                }
            } else if (!w.length)
                for (let O = 0; O < s.value.length; O += 1)
                    await re(O, !0);
            const j = A.filter(O => !w.find($ => $.id === O.id));
            if (j.length > 0) {
                T.conditions[0].conditions[0].name = l.answerVariableName;
                for (let O = 0; O < j.length; O += 1) {
                    const $ = j[O];
                    T.conditions[0].conditions[0].value = $.title;
                    const q = await Ze(T, "message", null, l.fieldsOptions);
                    i($.title, q)
                }
            }
            const M = A.filter(O => w.find($ => $.id === O.id));
            if (M.length > 0) {
                T.conditions[0].conditions[0].name = l.answerVariableName;
                const O = s.value.map( ($, q) => {
                    var Y;
                    return {
                        ...$,
                        itemId: (Y = w.find(ee => ee.title === $.name)) == null ? void 0 : Y.id,
                        index: q
                    }
                }
                );
                for (let $ = 0; $ < O.length; $ += 1) {
                    const q = O[$]
                      , Y = (X = M.find(ee => ee.id === q.itemId)) == null ? void 0 : X.title;
                    if (Y) {
                        s.value[q.index].name = Y,
                        T.conditions[0].conditions[0].value = Y;
                        const ee = await Ze(T, "message", null, l.fieldsOptions);
                        _.value[q.index].builder = ee
                    }
                }
            }
            w = _e.cloneDeep(A),
            (j.length > 0 || B.length > 0 || M.length > 0) && (await Ee(),
            K())
        }
        We( () => l.answerVariableName, G),
        We( () => l.messageDataItems, G, {
            deep: !0
        });
        const U = Z( () => {
            var A;
            return !!(l.answerVariableName && ((A = l.messageDataItems) != null && A.length))
        }
        );
        function z() {
            N.value = !1,
            d("openConfig")
        }
        return t({
            validate: L
        }),
        (A, B) => {
            const j = m("DsTypography")
              , M = m("DsInput")
              , X = m("Field")
              , O = m("DsIcon")
              , $ = m("DsAccordionItem")
              , q = m("DsAccordion")
              , Y = m("DsButton")
              , ee = m("Form")
              , ve = m("DsModal");
            return D(),
            F("div", null, [a(ve, {
                title: "Configurar condição de variável",
                show: Pe.value,
                bodyClass: "p-0",
                size: "lg",
                class: "contact-condition-modal",
                appendToBody: "",
                alwaysRender: "",
                scrollable: "",
                onHide: W
            }, {
                body: h( () => [S("div", wi, [(D(),
                F(fe, null, Te([{
                    key: "conditions",
                    label: "Condições"
                }], te => S("div", {
                    key: te.key
                }, [S("div", {
                    class: he(["cursor-pointer d-flex align-items-center pb-2 pt-3 me-2", {
                        "border-4 border-bottom border-green-brand": f.value === te.key
                    }]),
                    onClick: Q => f.value = te.key
                }, [a(j, {
                    tag: "span",
                    class: "px-2",
                    color: f.value === te.key ? "gray-700" : "gray",
                    fontWeight: f.value === te.key ? "semibold" : "normal",
                    fontSize: "2",
                    text: te.label
                }, null, 8, ["color", "fontWeight", "text"])], 10, _i)])), 64))]), S("div", Di, [Le(S("div", null, [a(ee, {
                    as: "div",
                    ref_key: "observer",
                    ref: R
                }, {
                    default: h( () => [a(q, null, {
                        default: h( () => [(D(!0),
                        F(fe, null, Te(s.value, (te, Q) => (D(),
                        F(fe, {
                            key: te.id
                        }, [a($, {
                            title: te.name,
                            startOpen: Q === 0,
                            invertArrow: "",
                            alwaysRender: "",
                            icon: "mind-map",
                            headerClass: "px-0",
                            bodyClass: "p-2"
                        }, ht({
                            body: h( () => [a(j, {
                                tag: "label",
                                fontSize: "2",
                                fontWeight: "bold",
                                class: "mb-1",
                                text: C(u)("journey.modals.contact_condition.branch_name")
                            }, null, 8, ["text"]), a(X, {
                                modelValue: te.name,
                                "onUpdate:modelValue": ie => te.name = ie,
                                name: `branchName-${te.id}`,
                                rules: "required"
                            }, {
                                default: h( ({componentField: ie, errors: ue}) => [a(M, le({
                                    ref_for: !0
                                }, ie, {
                                    "data-testid": `branch-name-${Q}`,
                                    hasError: ue.length > 0,
                                    disabled: U.value
                                }), null, 16, ["data-testid", "hasError", "disabled"])]),
                                _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "name"]), S("div", null, [a(j, {
                                tag: "label",
                                fontSize: "2",
                                class: "mt-3",
                                fontWeight: "bold",
                                text: C(u)("journey.modals.contact_condition.conditions")
                            }, null, 8, ["text"]), _.value[Q] ? (D(),
                            E(C(Dt), {
                                key: 0,
                                modelValue: _.value[Q].builder,
                                "onUpdate:modelValue": ie => _.value[Q].builder = ie,
                                disabled: U.value,
                                loading: V.value || _.value[Q].loading,
                                fieldsOptions: e.fieldsOptions,
                                loadingFieldsOptions: e.loadingFieldsOptions
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "loading", "fieldsOptions", "loadingFieldsOptions"])) : H("", !0)])]),
                            _: 2
                        }, [s.value.length > 1 && !U.value ? {
                            name: "badge",
                            fn: h( () => [a(O, {
                                "data-testid": `btn-remove-branch-${Q}`,
                                icon: "delete-bin-line",
                                class: "text-red-normal ms-2",
                                onClick: ie => re(Q)
                            }, null, 8, ["data-testid", "onClick"])]),
                            key: "0"
                        } : void 0]), 1032, ["title", "startOpen"]), B[1] || (B[1] = S("hr", null, null, -1))], 64))), 128))]),
                        _: 1
                    }), a(Y, {
                        "data-testid": "btn-new-branch",
                        class: "mt-2",
                        variant: "outline-green-normal",
                        size: "sm",
                        icon: "add-line",
                        text: C(u)("journey.modals.contact_condition.add_branch"),
                        onClick: B[0] || (B[0] = te => i())
                    }, null, 8, ["text"])]),
                    _: 1
                }, 512)], 512), [[at, f.value === "conditions"]])])]),
                footer: h( () => [S("div", Ti, [a(Y, {
                    text: C(u)("save"),
                    "data-testid": "btn-save",
                    size: "lg",
                    class: "w-50",
                    onClick: K
                }, null, 8, ["text"]), a(Y, {
                    text: C(u)("cancel"),
                    "data-testid": "btn-cancel",
                    class: "w-50 text-green-normal",
                    variant: "transparent",
                    size: "lg",
                    onClick: W
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["show"]), a(C($t), {
                show: N.value,
                count: oe.value,
                onClose: z
            }, null, 8, ["show", "count"])])
        }
    }
}
  , Ci = {
    __name: "WorkflowVariablesConditionNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String,
        fieldsOptions: Array,
        loadingFieldsOptions: Boolean
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = x(null)
          , d = t
          , {t: l} = xe()
          , {getIncomers: u, nodes: p, edges: r} = qe()
          , {node: c} = Ce();
        function y(i, T, w, P, k=new Set) {
            if (!i || k.has(i.id))
                return [];
            k.add(i.id);
            let V = [];
            const R = u(i, T, w);
            for (let L = 0; L < R.length; L += 1)
                R[L].type === P && V.push(R[L]),
                V = V.concat(y(R[L], T, w, P, k));
            return V
        }
        const o = Z( () => {
            var T, w, P, k;
            return !((T = p.value) != null && T.length) || !((w = r.value) != null && w.length) ? null : (k = (P = y(c, p.value, r.value, "ActionAwaitAnswer")[0]) == null ? void 0 : P.data) == null ? void 0 : k.answerVariableName
        }
        )
          , b = Z( () => {
            var T, w, P, k;
            return !((T = p.value) != null && T.length) || !((w = r.value) != null && w.length) ? null : ((k = (P = y(c, p.value, r.value, "ActionSendMessageChatbot")[0]) == null ? void 0 : P.data) == null ? void 0 : k.items) || []
        }
        )
          , v = x(!0)
          , s = x("")
          , f = async () => {
            await Ee(),
            n.value && (v.value = await n.value.validate(),
            s.value = ""),
            d("updateNodeData", c, v.value)
        }
        ;
        J.$on("validateAll", f);
        const g = x(!1)
          , _ = async (i, T) => {
            c.data || (c.data = {
                branches: []
            }),
            g.value = !1,
            c.data = {
                ...c.data,
                ...i
            },
            await f(),
            T && J.$emit("nodeReady", c)
        }
        ;
        return ke( () => {
            J.$off("validateAll", f)
        }
        ),
        (i, T) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(c),
            valid: v.value,
            alertMessage: s.value,
            descriptionColor: "white",
            baseColor: "gray-900",
            icon: "whatsapp-line",
            iconColor: "text-green-brand",
            title: C(l)("journey.nodes.workflow_variable_condition.title"),
            titleColor: "white",
            bodyPadding: "p-3",
            bodyColor: "bg-gray-900",
            onOpenConfig: T[2] || (T[2] = w => g.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C($i), {
                key: 0,
                ref_key: "modal",
                ref: n,
                show: g.value,
                node: C(c),
                initialData: e.data,
                fieldsOptions: e.fieldsOptions,
                loadingFieldsOptions: e.loadingFieldsOptions,
                answerVariableName: o.value,
                messageDataItems: b.value,
                onUpdateData: _,
                onOpenConfig: T[0] || (T[0] = w => g.value = !0),
                onClose: T[1] || (T[1] = w => g.value = !1)
            }, null, 8, ["show", "node", "initialData", "fieldsOptions", "loadingFieldsOptions", "answerVariableName", "messageDataItems"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "title"]))
    }
}
  , Si = ge(Ci, [["__scopeId", "data-v-2ab090d5"]])
  , xi = {
    emits: ["close", "updateData"],
    name: "wait-item",
    components: {
        TimeInput: et
    },
    props: {
        action: Object,
        show: Boolean,
        editable: Boolean
    },
    data() {
        const e = {
            weekdays: [{
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }, {
                active: !0,
                start: "00:00",
                end: "23:59"
            }]
        };
        return {
            default: e,
            waitData: {
                ...e
            },
            weekdaysList: this.$tm("dates.weekdays_short")
        }
    },
    created() {
        var t, n, d, l, u;
        let e = [...this.default.weekdays];
        (d = (n = (t = this.action) == null ? void 0 : t.condition) == null ? void 0 : n.weekdays) != null && d.length && (e = (u = (l = this.action) == null ? void 0 : l.condition) == null ? void 0 : u.weekdays),
        this.waitData = {
            weekdays: e
        },
        this.$nextTick( () => {
            this.$emit("updateData", this.waitData, !0)
        }
        )
    },
    methods: {
        save() {
            this.$emit("updateData", {
                weekdays: this.waitData.weekdays
            })
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate();
            return e
        }
    }
}
  , ki = {
    class: "d-flex justify-content-center align-items-center timer-checkbox",
    "data-testid": "weekday-checkbox-container"
}
  , Pi = {
    class: "d-flex justify-content-end mb-2",
    "data-testid": "weekday-time-inputs-container"
}
  , Vi = {
    class: "d-flex w-100",
    "data-testid": "footer-buttons-container"
};
function zi(e, t, n, d, l, u) {
    const p = m("DsTypography")
      , r = m("DsTooltip")
      , c = m("DsCheckbox")
      , y = m("time-input")
      , o = m("Form")
      , b = m("DsButton")
      , v = m("DsModal");
    return D(),
    E(v, {
        "data-testid": "time-condition-modal",
        size: "md",
        title: "Configurar condição de horário",
        show: n.show,
        appendToBody: "",
        alwaysRender: "",
        onHide: t[1] || (t[1] = s => e.$emit("close"))
    }, {
        body: h( () => [a(o, {
            ref: "observer",
            class: "bg-white design-system",
            "data-testid": "time-condition-form"
        }, {
            default: h( () => [a(r, {
                "data-testid": "description-tooltip",
                text: e.$t("flow.selected_actions_labels.wait.tooltip")
            }, {
                default: h( () => [a(p, {
                    "data-testid": "description-typography",
                    tag: "label",
                    class: "text-gray-900 small mb-4"
                }, {
                    default: h( () => t[2] || (t[2] = [Me(ye('A configuração de horário permite que a automação direcione conforme o horário definido, seguindo caminhos "Sim" ou "Não".'))])),
                    _: 1,
                    __: [2]
                })]),
                _: 1
            }, 8, ["text"]), (D(!0),
            F(fe, null, Te(l.waitData.weekdays, (s, f) => (D(),
            F("div", {
                key: f,
                class: "d-flex align-items-center ms-2 mb-2",
                "data-testid": "weekday-row"
            }, [S("div", ki, [a(c, {
                "data-testid": "weekday-active-checkbox",
                class: "timer-checkbox",
                isSwitch: "",
                modelValue: s.active,
                "onUpdate:modelValue": g => s.active = g,
                label: e.$rt(l.weekdaysList[f]),
                checked: s.active,
                disabled: !n.editable
            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "checked", "disabled"])]), S("div", Pi, [a(y, {
                "data-testid": "weekday-start-time",
                modelValue: s.start,
                "onUpdate:modelValue": g => s.start = g,
                name: `weekday-start-${f}`,
                class: he([{
                    inactive: !s.active
                }, "weekday__time w-50"]),
                disabled: !s.active || !n.editable,
                right: !0,
                "data-vv-value-path": "date"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "class", "disabled"]), a(y, {
                "data-testid": "weekday-end-time",
                modelValue: s.end,
                "onUpdate:modelValue": g => s.end = g,
                name: `weekday-end-${f}`,
                class: he([{
                    inactive: !s.active
                }, "weekday__time w-50"]),
                disabled: !s.active || !n.editable,
                right: !0,
                "data-vv-value-path": "date"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "name", "class", "disabled"])])]))), 128))]),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", Vi, [a(b, {
            "data-testid": "save-button",
            text: e.$t("save"),
            disabled: !n.editable,
            size: "lg",
            class: "w-50",
            onClick: u.save
        }, null, 8, ["text", "disabled", "onClick"]), a(b, {
            "data-testid": "cancel-button",
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[0] || (t[0] = s => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const Ai = ge(xi, [["render", zi], ["__scopeId", "data-v-13719a22"]])
  , Bi = {
    key: 1
}
  , Mi = {
    class: "pt-1"
}
  , Ei = {
    __name: "TimeConditionNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleTargetPosition: String,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = x("")
          , d = x(null)
          , l = t
          , u = e
          , {node: p} = Ce()
          , r = ze()
          , c = Z( () => r.getters["flows/stepsCountData"] === null)
          , y = Z( () => u.handleSourcePosition === "bottom" ? {
            true: {
                left: "55%",
                background: "#01B89A"
            },
            false: {
                left: "45%",
                background: "#F44336"
            }
        } : {
            true: {
                top: "65%",
                background: "green"
            },
            false: {
                top: "35%",
                background: "red"
            }
        })
          , o = x(!0)
          , b = x("")
          , v = async () => {
            d.value && (o.value = await d.value.validate()),
            l("updateNodeData", p, o.value)
        }
        ;
        J.$on("validateAll", v);
        const s = x(!1)
          , f = Z( () => {
            var i, T;
            return (((T = (i = p.data) == null ? void 0 : i.condition) == null ? void 0 : T.weekdays) || []).map( (w, P) => w.active ? {
                day: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][P],
                time: `${w.start} - ${w.end}`
            } : null).filter(w => !!w)
        }
        )
          , g = async (_, i) => {
            if (p.data || (p.data = {}),
            _ != null && _.weekdays) {
                const {condition: T} = p.data;
                p.data.condition = {
                    ...T,
                    next: null,
                    weekdays: _.weekdays
                }
            }
            s.value = !1,
            n.value = f.value.map(T => T.day).join(""),
            await v(),
            i && J.$emit("nodeReady", p)
        }
        ;
        return ke( () => {
            J.$off("validateAll", v)
        }
        ),
        (_, i) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleTargetPosition: e.handleTargetPosition,
            handleSourcePosition: e.handleSourcePosition,
            node: C(p),
            valid: o.value,
            alertMessage: b.value,
            editable: c.value,
            baseColor: "gray-900",
            icon: "time-line",
            iconColor: "text-green-brand",
            title: _.$t("journey.nodes.time_condition.title"),
            shortTitle: _.$t("journey.nodes.time_condition.title"),
            titleColor: "white",
            description: n.value || "Nenhuma condição de horário selecionada",
            descriptionColor: "white",
            bodyPadding: "p-3",
            bodyColor: "bg-gray-900",
            onOpenConfig: i[1] || (i[1] = T => s.value = !0)
        }, {
            handleSource: h( () => [!e.draggable && !e.minimized ? (D(),
            E(C(Re), {
                key: 0,
                id: `${e.id}-true`,
                type: "source",
                class: "border-white",
                position: e.handleSourcePosition,
                style: Fe(y.value.true),
                connectable: !1
            }, null, 8, ["id", "position", "style"])) : H("", !0), !e.draggable && !e.minimized ? (D(),
            E(C(Re), {
                key: 1,
                id: `${e.id}-false`,
                type: "source",
                class: "border-white",
                position: e.handleSourcePosition,
                style: Fe(y.value.false),
                connectable: !1
            }, null, 8, ["id", "position", "style"])) : H("", !0)]),
            description: h( ({description: T, descriptionColor: w}) => {
                var P;
                return [(P = f.value) != null && P.length ? (D(),
                F("table", Bi, [i[2] || (i[2] = S("tr", null, [S("th"), S("th")], -1)), (D(!0),
                F(fe, null, Te(f.value, (k, V) => (D(),
                F("tr", {
                    key: V
                }, [S("td", Mi, [a(C(Ke), {
                    description: k == null ? void 0 : k.day,
                    descriptionColor: w
                }, null, 8, ["description", "descriptionColor"])]), S("td", null, [a(C(Ke), {
                    description: k == null ? void 0 : k.time,
                    descriptionColor: w
                }, null, 8, ["description", "descriptionColor"])])]))), 128))])) : (D(),
                E(C(Ke), {
                    key: 0,
                    description: T,
                    descriptionColor: w
                }, null, 8, ["description", "descriptionColor"]))]
            }
            ),
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Ai), {
                key: 0,
                ref_key: "modal",
                ref: d,
                show: s.value,
                action: e.data,
                editable: c.value,
                onUpdateData: g,
                onClose: i[0] || (i[0] = T => s.value = !1)
            }, null, 8, ["show", "action", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleTargetPosition", "handleSourcePosition", "node", "valid", "alertMessage", "editable", "title", "shortTitle", "description"]))
    }
}
  , ji = ge(Ei, [["__scopeId", "data-v-6694fd7d"]])
  , Oi = {
    emits: ["selected", "updateRestriction", "updateAction", "createNewSegmentation", "updateDescription", "setTagRestriction", "close", "openConfig", "updateData"],
    components: {
        QueryBuilder: bt,
        PreviewModal: aa
    },
    props: {
        id: String,
        disableFlowEntryValidation: Boolean,
        restriction: Object,
        show: Boolean,
        editable: Boolean
    },
    data() {
        return {
            data: {
                type: "dynamic",
                value: "",
                entity: "LEAD",
                condition: "on_list",
                events: []
            },
            allDeals: !1,
            allContacts: !1,
            lists: [],
            entities: [{
                value: "PROSPECT",
                label: _e.capitalize(this.$t("flow.actions.contact_entry.entities.PROSPECT"))
            }, {
                value: "LEAD",
                label: _e.capitalize(this.$t("flow.actions.contact_entry.entities.LEAD"))
            }, {
                value: "OPPORTUNITY",
                label: _e.capitalize(this.$t("flow.actions.contact_entry.entities.OPPORTUNITY"))
            }, {
                value: "AFTER_SALE",
                label: _e.capitalize(this.$t("flow.actions.contact_entry.entities.AFTER_SALE"))
            }, {
                value: "CUSTOMER",
                label: _e.capitalize(this.$t("flow.actions.contact_entry.entities.CUSTOMER"))
            }],
            eventsList: [{
                label: this.$t("flow.actions.contact_entry.events.lead_created"),
                value: "lead_created",
                entities: ["PROSPECT", "LEAD"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.lead_updated"),
                value: "lead_updated",
                entities: ["PROSPECT", "LEAD"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.lead_lost"),
                value: "lead_lost",
                entities: ["PROSPECT", "LEAD"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.opportunity_created"),
                value: "opportunity_created",
                entities: ["OPPORTUNITY"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.opportunity_updated"),
                value: "opportunity_updated",
                entities: ["OPPORTUNITY"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.opportunity_lost"),
                value: "opportunity_lost",
                entities: ["OPPORTUNITY"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.opportunity_won"),
                value: "opportunity_won",
                entities: ["OPPORTUNITY"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.after_sale_created"),
                value: "after_sale_created",
                entities: ["AFTER_SALE"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.after_sale_updated"),
                value: "after_sale_updated",
                entities: ["AFTER_SALE"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.after_sale_lost"),
                value: "after_sale_lost",
                entities: ["AFTER_SALE"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.after_sale_won"),
                value: "after_sale_won",
                entities: ["AFTER_SALE"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.pipeline_item_changed"),
                value: "pipeline_item_changed",
                entities: ["PROSPECT", "LEAD", "OPPORTUNITY", "AFTER_SALE"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.customer_created"),
                value: "customer_created",
                entities: ["CUSTOMER"]
            }, {
                label: this.$t("flow.actions.contact_entry.events.customer_updated"),
                value: "customer_updated",
                entities: ["CUSTOMER"]
            }],
            loading: !1,
            showSegmentationModal: !1,
            showPreviewModal: !1,
            deletedTagsMsg: "",
            selectedEntity: null,
            entryType: {
                value: "list",
                label: "List/Segmentation"
            },
            entryTypes: [{
                value: "list",
                label: "List/Segmentation"
            }, {
                value: "event",
                label: "Event (Trigger)"
            }],
            selectedTrigger: null,
            entityInitialized: !1
        }
    },
    computed: {
        ...Je(["permissions", "showWorkflowTrigger"]),
        allowedEntities() {
            return this.entities.filter(e => {
                var t, n;
                return e.value !== "AFTER_SALE" || e.value === "AFTER_SALE" && ((n = (t = this.permissions) == null ? void 0 : t.after_sale) == null ? void 0 : n.read)
            }
            )
        },
        allowedEvents() {
            return this.eventsList.filter(e => {
                var t;
                return e.entities.includes((t = this.selectedEntity) == null ? void 0 : t.value)
            }
            )
        },
        newSegmentationText() {
            const {value: e} = this.selectedEntity || {};
            return e ? this.$t("flow.actions.contact_entry.new_list", {
                entity: this.$t(`flow.actions.contact_entry.entities.${e}`)
            }) : ""
        },
        selectedList: {
            get() {
                return this.lists.find( ({value: e, type: t}) => +e == +this.data.value && t === this.data.type)
            },
            set(e) {
                e && typeof e == "object" && this.setRestriction(e)
            }
        },
        showListModal() {
            return this.show && !this.showSegmentationModal && !this.showPreviewModal
        },
        customColumnEntity() {
            var t, n;
            const e = (n = (t = this.selectedEntity) == null ? void 0 : t.value) == null ? void 0 : n.toUpperCase();
            return ["PROSPECT", "LEAD"].includes(e) ? "CONTACT" : e || null
        },
        isEvent() {
            return this.data.condition === "event"
        }
    },
    watch: {
        allDeals() {
            this.$emit("updateRestriction", {
                allDeals: this.allDeals
            })
        },
        allContacts() {
            this.$emit("updateRestriction", {
                all_contacts: this.allContacts
            })
        },
        restriction: {
            handler() {
                if (!this.restriction) {
                    this.data = {
                        ...this.data,
                        type: "dynamic",
                        value: "",
                        entity: "LEAD",
                        events: []
                    },
                    this.entryType = this.entryTypes[0],
                    this.selectedTrigger = null;
                    return
                }
                let e = [];
                this.restriction.condition === "event" ? (e = this.eventsList.filter(t => {
                    var n;
                    return (n = this.restriction.events) == null ? void 0 : n.includes(t.value)
                }
                ),
                this.entryType = this.entryTypes[1],
                this.selectedTrigger = this.eventsList.find(t => t.value === this.restriction.value)) : this.entryType = this.entryTypes[0],
                this.data = {
                    ...this.data,
                    ...this.restriction,
                    events: e
                },
                this.allDeals = this.restriction.allDeals || !1,
                this.allContacts = this.restriction.all_contacts || !1,
                this.getAvailableList(),
                this.selectedList && this.verifyListWithDeletedTags(this.restriction.value, this.selectedList.type)
            },
            deep: !0
        },
        selectedEntity(e, t) {
            this.entityInitialized && e !== t && (this.handleSelectEntity(),
            this.showWorkflowTrigger && (this.data.events = []))
        }
    },
    async mounted() {
        var e;
        if (this.restriction) {
            let t = [];
            this.restriction.condition === "event" && (t = this.eventsList.filter(n => {
                var d;
                return (d = this.restriction.events) == null ? void 0 : d.includes(n.value)
            }
            )),
            this.selectedEntity = this.entities.find(n => n.value === this.restriction.entity),
            this.data = {
                ...this.data,
                ...this.restriction,
                events: t
            },
            this.data.events = this.data.events || []
        }
        await this.getAvailableList(!0),
        this.allDeals = ((e = this.restriction) == null ? void 0 : e.allDeals) || !1,
        this.allContacts = this.restriction.all_contacts || !1,
        this.$nextTick( () => {
            this.$emit("updateData", this.getRestrictionData(), !0)
        }
        ),
        this.selectedList || this.getAvailableLists(null, !0),
        this.entityInitialized = !0
    },
    methods: {
        ...pt("segmentation", ["saveSegmentation"]),
        createNewSegmentation() {
            const {value: e} = this.selectedEntity || {};
            this.$emit("createNewSegmentation", e)
        },
        setRestriction(e) {
            var n;
            if (typeof e == "string")
                return;
            if (!e) {
                Object.assign(this.data, {
                    value: ""
                });
                return
            }
            let {entity: t} = e;
            (t == null ? void 0 : t.toUpperCase()) === "LIST" && (t = "PROSPECT"),
            Object.assign(this.data, {
                ...e,
                entity: t || ((n = this.selectedEntity) == null ? void 0 : n.value)
            }),
            this.verifyListWithDeletedTags(e.value, e.type)
        },
        async verifyListWithDeletedTags(e, t) {
            if (this.deletedTagsMsg = "",
            e) {
                const n = t === "segmentation" ? await la(e) : await na(e);
                if (n && n.length) {
                    const d = n.map(l => l.tag_name).join(", ");
                    this.deletedTagsMsg = `${this.$t("email_list.deleted_tags_warning")} ${d}`,
                    this.$emit("setTagRestriction", !0);
                    return
                }
            }
            this.$emit("setTagRestriction", !1)
        },
        reactSearchLists: _e.debounce(function(t) {
            const n = t.length === 0;
            this.getAvailableLists(t, n)
        }, 400),
        getAvailableLists(e, t=!1) {
            var d;
            if ((!e || e.length < 2) && !t)
                return;
            this.loading = !0;
            const n = ((d = this.selectedEntity) == null ? void 0 : d.value) || "";
            yt(e, n).then(l => {
                if (!l) {
                    this.lists = [];
                    return
                }
                const u = l.filter(p => {
                    const {entity: r, type: c} = p;
                    return !(c === "dynamic" && r === "LIST")
                }
                );
                this.lists = u.map( ({id: p, name: r, entity: c, type: y}) => ({
                    id: p,
                    value: p,
                    label: r,
                    entity: c,
                    name: r,
                    type: y
                })),
                this.data.value && !this.lists.find( ({value: p, type: r}) => +p == +this.data.value && r === this.data.type) && this.lists.push({
                    id: this.data.value,
                    value: this.data.value,
                    label: this.data.name,
                    name: this.data.name,
                    type: this.data.type,
                    entity: this.data.entity
                })
            }
            ).finally( () => {
                this.loading = !1
            }
            )
        },
        setLists(e) {
            const t = JSON.parse(e.parameters)
              , n = {
                id: e.id,
                label: e.name,
                name: e.name,
                type: e.type,
                value: e.id,
                entity: t.entity
            };
            this.lists = [n]
        },
        getAvailableList(e=!1) {
            var t;
            if (!this.selectedList && this.restriction && this.restriction.value)
                return this.loading = !0,
                oa(this.restriction.value, this.restriction.type).then(n => {
                    if (!n && e) {
                        this.$notification.notifyAlert("flow.actions.contact_entry.messages.alert.load"),
                        this.selectedEntity = this.entities[0];
                        return
                    }
                    const {id: d, name: l, entity: u, type: p} = n;
                    this.entities.find(c => c.value === u) ? this.selectedEntity = this.entities.find(c => c.value === u) : this.selectedEntity = this.entities[0],
                    this.lists = [{
                        id: d,
                        value: d,
                        label: l,
                        entity: u,
                        name: l,
                        type: p
                    }]
                }
                ).finally( () => {
                    this.loading = !1
                }
                );
            if (!((t = this.selectedEntity) != null && t.value)) {
                const n = this.entities.find(d => {
                    var l;
                    return d.value === ((l = this.restriction) == null ? void 0 : l.entity)
                }
                );
                n ? this.selectedEntity = n : this.selectedEntity = this.entities[0]
            }
            return Promise.resolve()
        },
        save() {
            this.$emit("updateData", this.getRestrictionData())
        },
        getRestrictionData() {
            var e, t, n;
            return {
                ...this.data,
                entity: (e = this.selectedEntity) == null ? void 0 : e.value,
                name: ((t = this.selectedList) == null ? void 0 : t.name) || "",
                allDeals: this.allDeals,
                all_contacts: this.allContacts,
                condition: this.isEvent ? "event" : "on_list",
                events: ((n = this.data.events) == null ? void 0 : n.map(d => d.value)) || []
            }
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate();
            return e
        },
        async savedSegmentationHandler({id: e, name: t}) {
            if (!e)
                return;
            ia.track("create_segmentation_journey", {
                entity: this.selectedEntity.value
            });
            const n = {
                id: e.toString(),
                label: t,
                type: "segmentation",
                name: t,
                entity: this.selectedEntity.value,
                value: e.toString()
            };
            this.selectedList = n,
            this.setLists({
                ...n,
                parameters: JSON.stringify(n)
            }),
            this.hideQueryBuilder()
        },
        hideQueryBuilder() {
            this.showSegmentationModal = !1,
            this.showPreviewModal = !1,
            this.$emit("openConfig")
        },
        openList() {
            var u, p, r;
            const e = (u = this.selectedList) == null ? void 0 : u.type
              , t = (p = this.data) == null ? void 0 : p.entity;
            if (e === "segmentation" && t !== "CUSTOMER") {
                this.showPreviewModal = !0;
                return
            }
            let n = null;
            const d = (r = this.selectedList) == null ? void 0 : r.value;
            if (e === "dynamic") {
                let c = null;
                t === "OPPORTUNITY" ? c = "opportunities.dynamic" : t === "LEAD" || t === "LIST" ? c = "leads.dynamic" : t === "AFTER_SALE" ? c = "after-sale.dynamic" : t === "ORDER" && (c = "orders.dynamic"),
                n = {
                    name: c,
                    params: {
                        isDynamicList: !0,
                        idList: d
                    }
                }
            } else
                t === "CUSTOMER" ? n = {
                    name: "segmentations.update",
                    params: {
                        id: d,
                        entityName: t.toLowerCase()
                    }
                } : n = {
                    name: "email-list.edit",
                    params: {
                        id: d
                    }
                };
            const l = this.$router.resolve(n);
            window.open(l.href, "_blank")
        },
        handleSelectEntity() {
            this.setRestriction(null),
            this.getAvailableLists(null, !0)
        },
        getOptionKey(e) {
            return typeof e == "object" && e.id && e.type ? `${e.id}-${e.type}` : e
        }
    }
}
  , Ii = {
    class: ""
}
  , Ui = {
    key: 0,
    class: "alert alert-danger my-1",
    role: "alert"
}
  , Ni = {
    class: "d-flex align-items-center"
}
  , Ri = {
    class: "d-flex align-items-center gap-2 my-2"
}
  , Li = {
    key: 0,
    class: "flex-grow-1"
}
  , Wi = {
    class: "d-flex align-items-center gap-2"
}
  , Hi = {
    class: "mt-3"
}
  , Fi = {
    class: "fw-normal text-gray"
}
  , qi = {
    class: "m-0 mt-2"
}
  , Gi = {
    class: "d-flex w-100"
};
function Qi(e, t, n, d, l, u) {
    var w, P, k, V;
    const p = m("DsTypography")
      , r = m("DsIcon")
      , c = m("DsTooltip")
      , y = m("DsSelect")
      , o = m("DsRadio")
      , b = m("Field")
      , v = m("DsBadge")
      , s = m("DsButton")
      , f = m("DsCheckbox")
      , g = m("Form")
      , _ = m("DsModal")
      , i = m("QueryBuilder")
      , T = m("PreviewModal");
    return D(),
    F("div", null, [a(_, {
        show: u.showListModal,
        size: "lg",
        title: e.$t("journey.modals.list.title"),
        appendToBody: "",
        alwaysRender: "",
        onHide: t[9] || (t[9] = R => {
            e.$emit("close")
        }
        )
    }, {
        body: h( () => [a(g, {
            ref: "observer"
        }, {
            default: h( () => {
                var R, L;
                return [S("div", Ii, [l.deletedTagsMsg ? (D(),
                F("div", Ui, ye(l.deletedTagsMsg), 1)) : H("", !0), S("div", null, [S("div", Ni, [a(p, {
                    tag: "span",
                    fontWeight: "bold",
                    text: e.$t("flow.actions.contact_entry.select_entity"),
                    fontSize: "2"
                }, null, 8, ["text"]), a(c, {
                    text: e.$t("journey.information_icons.entity"),
                    placement: "$top",
                    offset: "5",
                    tooltipClass: "fw-normal information-tooltip"
                }, {
                    default: h( () => [a(r, {
                        icon: "information-line",
                        class: "fs-2 ms-1 text-green-dark"
                    })]),
                    _: 1
                }, 8, ["text"])]), a(y, {
                    id: "entry-type",
                    class: "mb-2 mt-1",
                    modelValue: l.selectedEntity,
                    "onUpdate:modelValue": t[0] || (t[0] = N => l.selectedEntity = N),
                    options: u.allowedEntities,
                    placeholder: e.$t("flow.actions.contact_entry.select_entity"),
                    clearable: !1,
                    disabled: !n.editable
                }, null, 8, ["modelValue", "options", "placeholder", "disabled"]), e.showWorkflowTrigger ? (D(),
                F(fe, {
                    key: 0
                }, [a(p, {
                    tag: "span",
                    fontWeight: "bold",
                    text: e.$t("flow.actions.contact_entry.entry_type"),
                    fontSize: "2"
                }, null, 8, ["text"]), S("div", Ri, [a(o, {
                    modelValue: l.data.condition,
                    "onUpdate:modelValue": t[1] || (t[1] = N => l.data.condition = N),
                    name: "entry-type",
                    inputValue: "on_list",
                    label: e.$t("flow.actions.contact_entry.segmentation")
                }, null, 8, ["modelValue", "label"]), a(o, {
                    modelValue: l.data.condition,
                    "onUpdate:modelValue": t[2] || (t[2] = N => l.data.condition = N),
                    name: "entry-type",
                    inputValue: "event",
                    label: e.$t("flow.actions.contact_entry.event")
                }, null, 8, ["modelValue", "label"])]), u.isEvent ? (D(),
                F("hr", Li)) : H("", !0)], 64)) : H("", !0), S("div", Wi, [u.isEvent && e.showWorkflowTrigger ? (D(),
                F(fe, {
                    key: 0
                }, [a(b, {
                    modelValue: l.data.events,
                    "onUpdate:modelValue": t[3] || (t[3] = N => l.data.events = N),
                    rules: "required",
                    class: "w-50",
                    name: "event",
                    as: "div"
                }, {
                    default: h( ({errors: N, componentField: oe}) => [a(p, {
                        tag: "span",
                        fontWeight: "bold",
                        text: e.$t("flow.actions.contact_entry.events.title"),
                        fontSize: "2"
                    }, null, 8, ["text"]), a(c, {
                        text: e.$t("journey.information_icons.events"),
                        placement: "$top",
                        offset: "5",
                        tooltipClass: "fw-normal information-tooltip"
                    }, {
                        default: h( () => [a(r, {
                            icon: "information-line",
                            class: "fs-2 ms-1 text-green-dark"
                        })]),
                        _: 1
                    }, 8, ["text"]), a(y, le(oe, {
                        data: l.data.events,
                        options: u.allowedEvents,
                        placeholder: e.$t("flow.actions.contact_entry.events.description"),
                        disabled: !n.editable,
                        hasError: !!N.length,
                        multiple: "",
                        class: "mt-1"
                    }), null, 16, ["data", "options", "placeholder", "disabled", "hasError"])]),
                    _: 1
                }, 8, ["modelValue"]), S("div", Hi, [a(v, {
                    class: "mx-2 bg-white",
                    isTag: !1,
                    text: e.$t("flow.actions.contact_entry.and")
                }, null, 8, ["text"])])], 64)) : H("", !0), a(b, {
                    modelValue: u.selectedList,
                    "onUpdate:modelValue": t[4] || (t[4] = N => u.selectedList = N),
                    rules: {
                        required: l.data.condition === "on_list"
                    },
                    class: "flex-fill",
                    name: "list",
                    as: "div"
                }, {
                    default: h( ({errors: N, componentField: oe}) => [l.data.condition === "on_list" ? (D(),
                    E(p, {
                        key: 0,
                        tag: "span",
                        fontWeight: "bold",
                        text: e.$t("flow.actions.contact_entry.lists"),
                        fontSize: "2"
                    }, null, 8, ["text"])) : (D(),
                    E(p, {
                        key: 1,
                        tag: "span",
                        fontWeight: "bold",
                        fontSize: "2"
                    }, {
                        default: h( () => [Me(ye(e.$t("flow.actions.contact_entry.belongs_to_segmentation")) + " ", 1), S("span", Fi, "(" + ye(e.$t("flow.actions.contact_entry.optional")) + ")", 1)]),
                        _: 1
                    })), a(c, {
                        text: e.$t("journey.information_icons.lists"),
                        placement: "$top",
                        offset: "5",
                        tooltipClass: "fw-normal information-tooltip"
                    }, {
                        default: h( () => [a(r, {
                            icon: "information-line",
                            class: "fs-2 ms-1 text-green-dark"
                        })]),
                        _: 1
                    }, 8, ["text"]), a(y, le({
                        id: "list",
                        class: "mt-1"
                    }, oe, {
                        options: l.lists,
                        getOptionKey: u.getOptionKey,
                        placeholder: e.$t("flow.list_search"),
                        loading: l.loading,
                        class: {
                            "has-error": N.length > 0
                        },
                        disabled: !n.editable,
                        onSearch: u.reactSearchLists,
                        "onUpdate:modelValue": u.setRestriction
                    }), null, 16, ["options", "getOptionKey", "placeholder", "loading", "class", "disabled", "onSearch", "onUpdate:modelValue"])]),
                    _: 1
                }, 8, ["modelValue", "rules"])]), S("div", qi, [a(s, {
                    size: "sm",
                    "data-testid": "btn-new-segmentation",
                    text: u.newSegmentationText,
                    disabled: !((R = l.selectedEntity) != null && R.value) || !n.editable,
                    onClick: t[5] || (t[5] = Ne(N => l.showSegmentationModal = !0, ["prevent"]))
                }, null, 8, ["text", "disabled"]), a(s, {
                    "data-testid": "btn-open-list",
                    class: "ms-2",
                    size: "sm",
                    variant: "outline-green-normal",
                    text: e.$t("flow.actions.contact_entry.see_list"),
                    disabled: !u.selectedList || !n.editable,
                    onClick: Ne(u.openList, ["prevent"])
                }, null, 8, ["text", "disabled", "onClick"])])]), t[10] || (t[10] = S("hr", {
                    class: "flex-grow-1"
                }, null, -1)), ((L = l.selectedEntity) == null ? void 0 : L.value) === "CUSTOMER" ? (D(),
                E(f, {
                    key: 1,
                    class: "align-items-center m-auto ms-0",
                    modelValue: l.allContacts,
                    "onUpdate:modelValue": t[6] || (t[6] = N => l.allContacts = N),
                    labelClass: "mb-0",
                    label: e.$t("flow.all_contacts"),
                    disabled: !n.editable
                }, null, 8, ["modelValue", "label", "disabled"])) : H("", !0), a(f, {
                    class: "align-items-center m-auto ms-0 mt-2",
                    modelValue: l.allDeals,
                    "onUpdate:modelValue": t[7] || (t[7] = N => l.allDeals = N),
                    labelClass: "mb-0",
                    label: e.$t("flow.all_deals"),
                    disabled: n.disableFlowEntryValidation || !n.editable
                }, null, 8, ["modelValue", "label", "disabled"])])]
            }
            ),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", Gi, [a(s, {
            text: e.$t("save"),
            size: "lg",
            class: "w-50",
            disabled: !n.editable,
            onClick: u.save
        }, null, 8, ["text", "disabled", "onClick"]), a(s, {
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "$transparent",
            size: "lg",
            onClick: t[8] || (t[8] = R => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show", "title"]), l.showSegmentationModal ? (D(),
    E(i, {
        key: 0,
        show: l.showSegmentationModal,
        entity: (P = (w = l.selectedEntity) == null ? void 0 : w.value) == null ? void 0 : P.toLowerCase(),
        customColumnEntity: u.customColumnEntity,
        showPreviewButton: !1,
        onSaved: u.savedSegmentationHandler,
        onHideModal: u.hideQueryBuilder
    }, null, 8, ["show", "entity", "customColumnEntity", "onSaved", "onHideModal"])) : H("", !0), l.showPreviewModal ? (D(),
    E(T, {
        key: 1,
        show: l.showPreviewModal,
        segmentationId: (k = u.selectedList) == null ? void 0 : k.value,
        entity: (V = u.selectedList) == null ? void 0 : V.entity,
        onClose: u.hideQueryBuilder
    }, null, 8, ["show", "segmentationId", "entity", "onClose"])) : H("", !0)])
}
const Yi = ge(Oi, [["render", Qi]])
  , Ji = {
    __name: "ListNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = ze()
          , {t: l} = xe()
          , u = Z( () => d.getters["flows/stepsCountData"] === null)
          , p = x(!1)
          , r = x(!0)
          , c = x(null)
          , y = async () => {
            c.value && (r.value = await c.value.validate())
        }
        ;
        J.$on("validateAll", y);
        const {node: o} = Ce()
          , b = x("")
          , v = async (s, f) => {
            var g;
            b.value = (s == null ? void 0 : s.name) || ((g = s == null ? void 0 : s.events) == null ? void 0 : g.map(_ => l(`flow.actions.contact_entry.events.${_}`)).join(", ")) || "",
            o.data = {
                type: s.type,
                value: s.value,
                entity: s.entity,
                condition: s.condition,
                allDeals: s.allDeals,
                all_contacts: s.all_contacts,
                events: s.events
            },
            p.value = !1,
            await y(),
            n("updateNodeData", o, r.value),
            f && J.$emit("nodeReady", o)
        }
        ;
        return ke( () => {
            J.$off("validateAll", y)
        }
        ),
        (s, f) => (D(),
        E(C(Se), {
            id: e.id,
            draggable: e.draggable,
            minimized: e.minimized,
            handleSourcePosition: e.handleSourcePosition,
            node: C(o),
            valid: r.value,
            hideTargetHandle: "",
            disableDelete: "",
            baseColor: "green-brand",
            icon: "contacts-book-2-line",
            title: C(l)("flow.actions.contact_entry.title"),
            description: b.value || C(l)("flow.actions.contact_entry.select_segmentation"),
            onOpenConfig: f[2] || (f[2] = g => p.value = !0)
        }, {
            default: h( () => [!e.draggable && !e.readOnly ? (D(),
            E(C(Yi), {
                key: 0,
                ref_key: "modal",
                ref: c,
                show: p.value,
                restriction: C(o).data,
                editable: u.value,
                onUpdateData: v,
                onClose: f[0] || (f[0] = g => p.value = !1),
                onOpenConfig: f[1] || (f[1] = g => p.value = !0)
            }, null, 8, ["show", "restriction", "editable"])) : H("", !0)]),
            _: 1
        }, 8, ["id", "draggable", "minimized", "handleSourcePosition", "node", "valid", "title", "description"]))
    }
}
  , Ki = {
    emits: ["close", "updateData"],
    props: {
        id: String,
        restriction: Object,
        show: Boolean
    },
    data() {
        return {
            data: {
                channel: null
            },
            loading: !1,
            selectedChannel: null,
            availableChannels: []
        }
    },
    watch: {
        "restriction.channel": {
            handler(e) {
                var t;
                e && e !== ((t = this.selectedChannel) == null ? void 0 : t.value) ? (this.selectedChannel = this.availableChannels.find(n => `${n.value}` == `${e}`),
                this.setRestriction(this.selectedChannel)) : e || (this.selectedChannel = null,
                this.setRestriction(null))
            }
        }
    },
    async mounted() {
        var t;
        let e = await sa({
            includeWhatsappWeb: !0
        });
        e = e.map(n => {
            var r;
            const d = n.description ? `${n.description}` : ""
              , l = (r = n.parameters) != null && r.phone ? `${n.parameters.phone}` : "";
            return {
                label: `${d}${d && l ? " - " : ""}${l}`,
                value: `${n.id}`,
                type: n.type
            }
        }
        ),
        (t = this.restriction) != null && t.channel && (this.selectedChannel = e.find(n => `${n.value}` == `${this.restriction.channel}`)),
        this.availableChannels = e,
        this.restriction && (this.data = {
            ...this.data,
            ...this.restriction,
            selectedChannel: this.selectedChannel
        }),
        this.$nextTick( () => {
            this.$emit("updateData", this.getRestrictionData(), !0)
        }
        ),
        J.$on("syncModalChannel", this.onSyncModalChannel)
    },
    beforeUnmount() {
        J.$off("syncModalChannel", this.onSyncModalChannel)
    },
    methods: {
        onSyncModalChannel(e) {
            var t;
            ((t = this.selectedChannel) == null ? void 0 : t.value) !== (e == null ? void 0 : e.value) && (this.selectedChannel = this.availableChannels.find(n => `${n.value}` == `${e == null ? void 0 : e.value}`),
            this.setRestriction(this.selectedChannel))
        },
        setRestriction(e) {
            if (!e) {
                Object.assign(this.data, {
                    channel: null
                });
                return
            }
            Object.assign(this.data, {
                channel: e.value
            })
        },
        save() {
            this.$emit("updateData", this.getRestrictionData())
        },
        getRestrictionData() {
            return {
                ...this.data,
                selectedChannel: this.selectedChannel
            }
        },
        async validate() {
            if (!this.$refs.observer)
                return !1;
            const {valid: e} = await this.$refs.observer.validate();
            return e
        },
        handleSelectChannel(e) {
            this.selectedChannel = e,
            this.setRestriction(e),
            J.$emit("syncModalChannel", e)
        }
    }
}
  , Xi = {
    "data-testid": "info-banner",
    class: "mb-3 px-3 py-3 bg-blue-light border-bottom border-blue-normal"
}
  , Zi = {
    class: "mt-2"
}
  , es = {
    class: ""
}
  , ts = {
    class: "d-flex align-items-center"
}
  , as = {
    class: "d-flex align-items-center"
}
  , ls = {
    class: "d-flex w-100"
};
function ns(e, t, n, d, l, u) {
    const p = m("DsIcon")
      , r = m("DsTypography")
      , c = m("DsSelect")
      , y = m("Field")
      , o = m("Form")
      , b = m("DsButton")
      , v = m("DsModal");
    return D(),
    F("div", null, [a(v, {
        "data-testid": "chatbot-modal",
        show: n.show,
        size: "md",
        title: "Selecionar canal",
        appendToBody: "",
        alwaysRender: "",
        onHide: t[2] || (t[2] = s => {
            e.$emit("close")
        }
        )
    }, {
        body: h( () => [S("div", Xi, [S("div", null, [a(p, {
            "data-testid": "info-alert-icon",
            class: "fs-6 text-blue-dark",
            icon: "alert-line"
        })]), S("div", Zi, [a(r, {
            "data-testid": "info-alert-typography",
            class: "mb-0 lh-sm",
            fontSize: "3",
            text: "Somente é possível criar um chatbot por canal. Para criar um novo chatbot, você deverá primeiro excluir o chatbot existente para o canal desejado."
        })])]), a(o, {
            ref: "observer",
            "data-testid": "chatbot-form"
        }, {
            default: h( () => [S("div", es, [S("div", null, [a(y, {
                modelValue: l.selectedChannel,
                "onUpdate:modelValue": t[0] || (t[0] = s => l.selectedChannel = s),
                rules: "required",
                name: "channel"
            }, {
                default: h( ({errors: s, componentField: f}) => [a(r, {
                    "data-testid": "channel-select-label",
                    tag: "span",
                    fontWeight: "bold",
                    text: "Selecione o canal",
                    fontSize: "2"
                }), a(c, le({
                    "data-testid": "channel-select",
                    id: "channel",
                    class: "mb-2 mt-1"
                }, f, {
                    options: l.availableChannels,
                    placeholder: "Selecione o canal",
                    clearable: !1,
                    hasError: s && s.length > 0,
                    "onOption:selected": u.handleSelectChannel
                }), {
                    option: h( ({label: g, type: _}) => [S("div", ts, [_ === "whatsapp" || _ === "whatsapp-web" ? (D(),
                    E(p, {
                        key: 0,
                        class: "fs-4 me-2",
                        icon: "whatsapp-line"
                    })) : H("", !0), Me(" " + ye(g), 1)])]),
                    "selected-option": h( ({label: g, type: _}) => [S("div", as, [_ === "whatsapp" || _ === "whatsapp-web" ? (D(),
                    E(p, {
                        key: 0,
                        class: "fs-4 me-2",
                        icon: "whatsapp-line"
                    })) : H("", !0), Me(" " + ye(g), 1)])]),
                    _: 2
                }, 1040, ["options", "hasError", "onOption:selected"])]),
                _: 1
            }, 8, ["modelValue"])])])]),
            _: 1
        }, 512)]),
        footer: h( () => [S("div", ls, [a(b, {
            "data-testid": "save-button",
            text: e.$t("save"),
            size: "lg",
            class: "w-50",
            disabled: !l.selectedChannel,
            onClick: u.save
        }, null, 8, ["text", "disabled", "onClick"]), a(b, {
            "data-testid": "cancel-button",
            text: e.$t("cancel"),
            class: "w-50 text-green-normal",
            variant: "transparent",
            size: "lg",
            onClick: t[1] || (t[1] = s => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])])
}
const os = ge(Ki, [["render", ns]])
  , is = {
    class: "d-flex align-items-center"
}
  , ss = {
    __name: "ChatbotNode",
    props: {
        id: String,
        draggable: Boolean,
        minimized: Boolean,
        readOnly: Boolean,
        data: Object,
        handleSourcePosition: String
    },
    emits: ["updateNodeData"],
    setup(e, {emit: t}) {
        const n = t
          , d = x(!1)
          , l = x(!0)
          , u = x(null)
          , p = async () => {
            u.value && (l.value = await u.value.validate())
        }
        ;
        J.$on("validateAll", p);
        const {node: r} = Ce()
          , c = x(null)
          , y = Z( () => {
            var v;
            return `Canal: ${((v = c.value) == null ? void 0 : v.label) || "Selecione um canal"}`
        }
        )
          , o = v => {
            var s;
            ((s = c.value) == null ? void 0 : s.value) !== (v == null ? void 0 : v.value) && (c.value = v,
            r.data = {
                ...r.data,
                channel: v ? v.value : null
            },
            n("updateNodeData", r, l.value))
        }
        ;
        J.$on("syncChannel", o);
        const b = async (v, s) => {
            var g, _;
            const f = ((g = c.value) == null ? void 0 : g.value) !== ((_ = v.selectedChannel) == null ? void 0 : _.value);
            c.value = v.selectedChannel,
            r.data = {
                channel: v.channel
            },
            d.value = !1,
            await p(),
            n("updateNodeData", r, l.value),
            s ? J.$emit("nodeReady", r) : f && J.$emit("syncChannel", v.selectedChannel)
        }
        ;
        return ke( () => {
            J.$off("validateAll", p),
            J.$off("syncChannel", o)
        }
        ),
        (v, s) => {
            const f = m("DsIcon");
            return D(),
            E(C(Se), {
                id: e.id,
                draggable: e.draggable,
                minimized: e.minimized,
                handleSourcePosition: e.handleSourcePosition,
                node: C(r),
                valid: l.value,
                alertMessage: "Selecione um canal",
                hideTargetHandle: "",
                disableDelete: "",
                baseColor: "green-brand",
                icon: "message-2-line",
                title: "Conversa Criada",
                description: y.value || "Selecione o canal: ",
                onOpenConfig: s[1] || (s[1] = g => d.value = !0)
            }, {
                description: h( ({description: g, descriptionColor: _}) => {
                    var i;
                    return [S("div", is, [(i = c.value) != null && i.type && c.value.type === "whatsapp" ? (D(),
                    E(f, {
                        key: 0,
                        class: he(["fs-3 me-1", "text-" + _]),
                        icon: "whatsapp-line"
                    }, null, 8, ["class"])) : H("", !0), a(C(Ke), {
                        description: g,
                        descriptionColor: _
                    }, null, 8, ["description", "descriptionColor"])])]
                }
                ),
                default: h( () => [!e.draggable && !e.readOnly ? (D(),
                E(C(os), {
                    key: 0,
                    ref_key: "modal",
                    ref: u,
                    show: d.value,
                    restriction: C(r).data,
                    onUpdateData: b,
                    onClose: s[0] || (s[0] = g => d.value = !1)
                }, null, 8, ["show", "restriction"])) : H("", !0)]),
                _: 1
            }, 8, ["id", "draggable", "minimized", "handleSourcePosition", "node", "valid", "description"])
        }
    }
}
  , ds = {
    __name: "LayoutNode",
    props: {
        id: String,
        handleSourcePosition: String,
        handleTargetPosition: String,
        minimized: Boolean
    },
    setup(e) {
        return (t, n) => (D(),
        F("div", {
            class: he(["process-node rounded", {
                minimized: e.minimized
            }])
        }, [a(C(Re), {
            type: "target",
            position: e.handleTargetPosition,
            connectable: !1
        }, null, 8, ["position"]), a(C(Re), {
            type: "source",
            position: e.handleSourcePosition,
            connectable: !1
        }, null, 8, ["position"])], 2))
    }
}
  , ct = ge(ds, [["__scopeId", "data-v-69b0c6e2"]])
  , rs = {
    __name: "FinishNode",
    props: {
        id: String,
        handleTargetPosition: String
    },
    setup(e) {
        const {node: t} = Ce()
          , {t: n} = xe();
        return (d, l) => {
            var u, p;
            return D(),
            E(C(Se), {
                id: e.id,
                handleTargetPosition: e.handleTargetPosition,
                node: C(t),
                hideSourceHandle: "",
                disableEdit: "",
                disableDelete: !((p = (u = C(t)) == null ? void 0 : u.data) != null && p.canRemove),
                baseColor: "red-dark",
                icon: "flag-line",
                title: C(n)("journey.nodes.finish.title")
            }, null, 8, ["id", "handleTargetPosition", "node", "disableDelete", "title"])
        }
    }
}
  , us = {
    class: "journey-template-layout"
}
  , Ct = {
    __name: "JourneyTemplate",
    props: {
        initialData: {
            type: Object,
            required: !0
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        minimized: {
            type: Boolean,
            default: !1
        },
        disableBackground: {
            type: Boolean,
            default: !1
        },
        direction: {
            type: String,
            default: "LR"
        }
    },
    setup(e) {
        const t = e
          , n = x(t.initialData.nodes || [])
          , d = x(t.initialData.edges || [])
          , {fitView: l} = qe()
          , {layout: u} = da()
          , {insertPlaceholders: p} = tt();
        async function r() {
            const {initialData: c, direction: y} = t;
            let o = p(c.nodes, c.edges);
            o = u(o.nodes, o.edges, y, !1, !1, !0),
            n.value = o.nodes,
            d.value = o.edges,
            Ee( () => {
                l()
            }
            )
        }
        return Ve( () => {
            window.addEventListener("resize", l)
        }
        ),
        jt( () => {
            window.removeEventListener("resize", l)
        }
        ),
        (c, y) => (D(),
        F("div", us, [a(C(pa), {
            nodes: n.value,
            edges: d.value,
            minZoom: .2,
            maxZoom: 1,
            elementsSelectable: !1,
            panOnDrag: !e.disabled,
            zoomOnScroll: !e.disabled,
            zoomOnDoubleClick: !e.disabled,
            disabled: e.disabled,
            onNodesInitialized: r
        }, {
            "edge-custom": h(o => [a(C(Da), le(o, {
                label: e.minimized ? null : o.label
            }), null, 16, ["label"])]),
            "node-list": h(o => [a(C(Ji), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-chatbot": h(o => [a(C(ss), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionCreateDealChatbot": h(o => [a(C(Gn), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionCloseChat": h(o => [a(C(Qn), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionSendMessageChatbot": h(o => [a(C(Co), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionGoToStep": h(o => [a(C(Ao), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionAwaitAnswer": h(o => [a(C(Go), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionEmail": h(o => [a(C(gl), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionSendMessage": h(o => [a(C(Mn), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionWait": h(o => [a(C(Cl), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-WorkflowVariablesCondition": h(o => [a(C(Si), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-TimeCondition": h(o => [a(C(ji), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionAssignChat": h(o => [a(C(ai), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ContactCondition": h(o => [a(C(vi), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-EmailCondition": h(o => [a(C(yi), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionCreateAction": h(o => [a(C(Il), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionMoveDeal": h(o => [a(C(Fl), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionMarkLost": h(o => [a(C(Xl), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionAddTag": h(o => [a(C(Un), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionAssignDeal": h(o => [a(C(Wn), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-ActionCreateDeal": h(o => [a(C(Ll), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-finish": h(o => [a(C(rs), {
                id: o.id,
                data: o.data,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized,
                readOnly: ""
            }, null, 8, ["id", "data", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-placeholder": h(o => [a(C(ct), {
                id: o.id,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized
            }, null, 8, ["id", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            "node-layout": h(o => [a(C(ct), {
                id: o.id,
                handleSourcePosition: o.sourcePosition,
                handleTargetPosition: o.targetPosition,
                minimized: e.minimized
            }, null, 8, ["id", "handleSourcePosition", "handleTargetPosition", "minimized"])]),
            default: h( () => [e.disableBackground ? H("", !0) : (D(),
            E(C(fa), {
                key: 0
            }))]),
            _: 1
        }, 8, ["nodes", "edges", "panOnDrag", "zoomOnScroll", "zoomOnDoubleClick", "disabled"])]))
    }
}
  , cs = {
    class: "h-100 border-top border-bottom border-gray-400"
}
  , ms = {
    class: "d-flex"
}
  , ps = {
    __name: "JourneyTemplateCard",
    props: {
        id: [String, Number],
        title: String,
        data: Object
    },
    emits: ["openPreview"],
    setup(e, {emit: t}) {
        const {buildGraphData: n} = tt()
          , d = ze()
          , {t: l} = xe()
          , u = t
          , p = e
          , r = Z( () => {
            var b;
            return (b = d.getters) == null ? void 0 : b.freemium
        }
        )
          , c = x(!0)
          , y = x({
            nodes: [],
            edges: []
        });
        Ve( () => {
            const {restrictions: b, steps: v} = p.data;
            y.value = n(b, v),
            c.value = !1
        }
        );
        function o() {
            u("openPreview", {
                title: p.title,
                data: p.data
            })
        }
        return (b, v) => {
            const s = m("DsHeading")
              , f = m("DsButton")
              , g = m("DsCard");
            return D(),
            E(g, {
                class: "journey-template-card",
                bodyClass: "journey-template-card__body w-100 py-0",
                footerClass: "border-0"
            }, {
                header: h( () => [a(s, {
                    "data-testid": "journey-template-card-title",
                    text: e.title,
                    size: "sm"
                }, null, 8, ["text"])]),
                footer: h( () => [S("div", ms, [a(f, {
                    "data-testid": "btn-journey-select",
                    size: "md",
                    icon: "check-line",
                    text: C(l)("select"),
                    class: "border-0",
                    variant: "outline-green-normal",
                    disabled: r.value,
                    onClick: v[0] || (v[0] = _ => u("createJourney", {
                        data: e.data
                    }))
                }, null, 8, ["text", "disabled"]), a(f, {
                    "data-testid": "btn-journey-preview",
                    size: "md",
                    icon: "eye-line",
                    text: C(l)("journey.preview"),
                    class: "ms-2 border-0",
                    variant: "outline-green-normal",
                    onClick: o
                }, null, 8, ["text"])])]),
                default: h( () => [S("div", cs, [c.value ? H("", !0) : (D(),
                E(C(Ct), {
                    key: 0,
                    initialData: y.value,
                    minimized: "",
                    disabled: "",
                    disableBackground: ""
                }, null, 8, ["initialData"]))])]),
                _: 1
            })
        }
    }
}
  , fs = ge(ps, [["__scopeId", "data-v-8b7af646"]])
  , vs = {
    class: "d-flex"
}
  , gs = {
    __name: "JourneyTemplatePreview",
    props: {
        id: [String, Number],
        title: String,
        data: Object
    },
    emits: ["confirm", "close"],
    setup(e) {
        const t = e
          , n = x(!1)
          , d = x(null)
          , {buildGraphData: l} = tt()
          , u = ze()
          , p = Z( () => {
            var r;
            return (r = u.getters) == null ? void 0 : r.freemium
        }
        );
        return Ve( () => {
            const {restrictions: r, steps: c} = t.data;
            d.value = l(r, c),
            Ee( () => {
                n.value = !0
            }
            )
        }
        ),
        (r, c) => {
            const y = m("DsButton")
              , o = m("DsModal");
            return D(),
            E(o, {
                title: e.title,
                show: "",
                alwaysRender: "",
                class: "journey-template-preview",
                headerClass: "border-bottom border-gray-400",
                bodyClass: "bg-gray-dark p-0",
                footerClass: "border-top border-gray-400",
                size: "xl",
                onHide: c[2] || (c[2] = b => r.$emit("close"))
            }, {
                body: h( () => [n.value ? (D(),
                E(C(Ct), {
                    key: 0,
                    initialData: d.value,
                    direction: "TB"
                }, null, 8, ["initialData"])) : H("", !0)]),
                footer: h( () => [S("div", vs, [a(y, {
                    disabled: p.value,
                    class: "ms-auto",
                    size: "md",
                    variant: "green-normal",
                    text: r.$t("journey.template.use_template"),
                    onClick: c[0] || (c[0] = b => r.$emit("confirm", {
                        data: e.data
                    }))
                }, null, 8, ["disabled", "text"]), a(y, {
                    size: "md",
                    variant: "outline-green-normal",
                    text: r.$t("cancel"),
                    class: "ms-2 border-0",
                    onClick: c[1] || (c[1] = b => r.$emit("close"))
                }, null, 8, ["text"])])]),
                _: 1
            }, 8, ["title"])
        }
    }
}
  , hs = {
    class: "d-flex"
}
  , bs = {
    key: 1,
    class: "d-flex flex-wrap gap-3"
}
  , ys = {
    class: "border px-3 rounded-1"
}
  , ws = {
    class: "py-1"
}
  , _s = {
    class: "border-top border-bottom py-2"
}
  , Ds = {
    class: "d-flex py-2"
}
  , Ts = {
    key: 2,
    class: "w-100 flex-grow-1 d-flex align-items-center justify-content-center pt-5 flex-column"
}
  , $s = {
    __name: "BaseWorkflowTemplates",
    props: {
        search: String,
        type: {
            type: String,
            default: "workflow"
        }
    },
    emits: ["create"],
    setup(e, {emit: t}) {
        const n = e
          , d = t
          , {t: l} = xe()
          , {notifyError: u} = Xe();
        x([{
            label: "E-mail",
            value: "email",
            icon: "mail-line"
        }, {
            label: "Campanha",
            value: "campaign",
            icon: "focus-2-line"
        }, {
            label: "Atividade",
            value: "Activity",
            icon: "task-line"
        }, {
            label: "Negócio",
            value: "deal",
            icon: "money-dollar-circle-line"
        }, {
            label: "Lead",
            value: "lead",
            icon: "user-search-line"
        }][0].value);
        const r = x([])
          , c = x(!0)
          , y = Ot(function*(g, _, i) {
            c.value = !0;
            try {
                const {items: T} = yield ra(n.type, _, i);
                r.value = T.map( ({id: w, title: P, description: k, type: V, ...R}) => ({
                    id: w,
                    title: P,
                    data: R.content_json
                }))
            } catch {
                u("messages.error.load")
            } finally {
                c.value = !1
            }
        });
        We( () => n.search, _e.debounce( () => {
            y.restartable().perform(null, n.search)
        }
        , 300), {
            immediate: !0
        });
        const o = x(!1)
          , b = x({});
        function v(f) {
            o.value = !0,
            b.value = f
        }
        function s(f) {
            d("create", f.data)
        }
        return (f, g) => {
            m("DsButton");
            const _ = m("DsTypography")
              , i = m("DsSkeletonItem")
              , T = m("DsHeading");
            return D(),
            F("div", null, [H("", !0), S("div", hs, [a(_, {
                color: "gray-700",
                text: C(l)("journey.template.highlight_templates"),
                fontSize: "2",
                fontWeight: "bold",
                class: "text-center"
            }, null, 8, ["text"])]), c.value || r.value.length ? (D(),
            F("div", bs, [c.value ? (D(),
            F(fe, {
                key: 0
            }, Te(5, w => S("div", {
                key: w,
                class: "journey-loading-card"
            }, [S("div", ys, [S("div", ws, [a(i, {
                type: "line",
                width: "100",
                height: "24",
                rounded: "pill",
                margin: "0"
            })]), S("div", _s, [a(i, {
                margin: "0",
                itemClass: "w-100",
                height: "180"
            })]), S("div", Ds, [a(i, {
                width: "100",
                rounded: "1",
                margin: "0"
            }), a(i, {
                width: "100",
                rounded: "1"
            })])])])), 64)) : r.value.length ? (D(!0),
            F(fe, {
                key: 1
            }, Te(r.value, w => (D(),
            E(C(fs), le({
                key: w.id,
                ref_for: !0
            }, w, {
                onCreateJourney: s,
                onOpenPreview: v
            }), null, 16))), 128)) : H("", !0)])) : (D(),
            F("div", Ts, [g[2] || (g[2] = S("img", {
                src: _a,
                alt: "No Data"
            }, null, -1)), a(T, {
                text: C(l)("no_results"),
                size: "md",
                class: "mt-4"
            }, null, 8, ["text"])])), o.value ? (D(),
            E(C(gs), {
                key: 3,
                title: b.value.title,
                data: b.value.data,
                onConfirm: g[0] || (g[0] = (...w) => {
                    s(...w),
                    o.value = !1
                }
                ),
                onClose: g[1] || (g[1] = w => o.value = !1)
            }, null, 8, ["title", "data"])) : H("", !0)])
        }
    }
}
  , As = ge($s, [["__scopeId", "data-v-ed9b6e61"]]);
export {Co as A, Se as B, vi as C, yi as E, ct as L, ji as T, Si as W, $t as _, Tt as a, _t as b, Da as c, Ji as d, ss as e, gl as f, Mn as g, Go as h, Ao as i, Cl as j, Il as k, Fl as l, Xl as m, Un as n, Wn as o, ai as p, Ll as q, Gn as r, Qn as s, rs as t, tt as u, wt as v, zs as w, Vs as x, As as y};
