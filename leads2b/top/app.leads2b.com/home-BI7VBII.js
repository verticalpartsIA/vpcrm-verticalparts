import {a1 as N, af as Y, k as L, r as m, o as l, c as u, p as D, d as T, H as C, e as P, b as n, a as r, aa as Q, as as X, ai as F, aQ as J, _ as I, a6 as q, a0 as K, W as R, t as V, F as O, f as W, a4 as ee, a8 as B, aV as te} from "./vendor-DIc2GtcL.js";
import {ar as oe, ov as ae, gQ as E, ow as ne, fS as ie, h3 as se, E as H, ox as re, G as le, t as ce} from "./common-CYe7udOS.js";
import {W as de, F as me} from "./shared/group-modules-agent-setup/home-DdBjprH-.js";
import {g as ue, a as U, b as pe} from "./shared/deals/home-tDwU3XNN.js";
const Z = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202C17.523%202%2022%206.477%2022%2012C22%2012.727%2021.923%2013.435%2021.775%2014.118L19.993%2012.335C20.0664%2010.5798%2019.5599%208.84915%2018.5519%207.41037C17.5438%205.97159%2016.0902%204.90464%2014.4154%204.37422C12.7406%203.84381%2010.9377%203.87943%209.28521%204.47559C7.63267%205.07175%206.22231%206.19529%205.27187%207.67277C4.32143%209.15025%203.88375%2010.8995%204.0264%2012.6505C4.16905%2014.4015%204.8841%2016.0568%206.06116%2017.361C7.23822%2018.6651%208.81184%2019.5455%2010.5391%2019.8664C12.2663%2020.1872%2014.0511%2019.9305%2015.618%2019.136C15.9997%2019.7409%2016.5367%2020.2323%2017.173%2020.559C15.6132%2021.5041%2013.8238%2022.0025%2012%2022C6.477%2022%202%2017.523%202%2012C2%206.477%206.477%202%2012%202ZM19%2014.172L20.414%2015.586C20.6893%2015.8612%2020.8783%2016.2107%2020.9578%2016.5916C21.0374%2016.9726%2021.004%2017.3685%2020.8619%2017.7309C20.7198%2018.0932%2020.475%2018.4062%2020.1576%2018.6314C19.8402%2018.8567%2019.464%2018.9845%2019.0751%2018.9991C18.6861%2019.0137%2018.3014%2018.9145%2017.968%2018.7136C17.6346%2018.5128%2017.3671%2018.2191%2017.1982%2017.8684C17.0293%2017.5178%2016.9664%2017.1255%2017.0171%2016.7396C17.0679%2016.3537%2017.2301%2015.991%2017.484%2015.696L17.586%2015.586L19%2014.172ZM12%2015C13.466%2015%2014.785%2015.631%2015.7%2016.637L14.755%2017.497C13.965%2017.182%2013.018%2017%2012%2017C10.982%2017%2010.035%2017.183%209.245%2017.496L8.3%2016.636C8.76821%2016.1199%209.33937%2015.7077%209.97666%2015.426C10.6139%2015.1442%2011.3032%2014.9991%2012%2015ZM8.5%2010C8.89782%2010%209.27936%2010.158%209.56066%2010.4393C9.84196%2010.7206%2010%2011.1022%2010%2011.5C10%2011.8978%209.84196%2012.2794%209.56066%2012.5607C9.27936%2012.842%208.89782%2013%208.5%2013C8.10218%2013%207.72064%2012.842%207.43934%2012.5607C7.15804%2012.2794%207%2011.8978%207%2011.5C7%2011.1022%207.15804%2010.7206%207.43934%2010.4393C7.72064%2010.158%208.10218%2010%208.5%2010ZM15.5%2010C15.8978%2010%2016.2794%2010.158%2016.5607%2010.4393C16.842%2010.7206%2017%2011.1022%2017%2011.5C17%2011.8978%2016.842%2012.2794%2016.5607%2012.5607C16.2794%2012.842%2015.8978%2013%2015.5%2013C15.1022%2013%2014.7206%2012.842%2014.4393%2012.5607C14.158%2012.2794%2014%2011.8978%2014%2011.5C14%2011.1022%2014.158%2010.7206%2014.4393%2010.4393C14.7206%2010.158%2015.1022%2010%2015.5%2010Z'%20fill='%234B5E67'/%3e%3c/svg%3e"
  , nt = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Z
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ge = {
    class: "d-flex align-items-center flex-column app-icon-wrapper"
}
  , he = {
    __name: "AppIcon",
    props: {
        id: String,
        name: String,
        icon: String,
        route: String,
        color: String,
        blocked: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["redirectTo"],
    setup(e, {emit: t}) {
        const i = Y()
          , c = t
          , a = e
          , o = L( () => a.blocked ? `${a.color} blocked-icon` : a.color)
          , d = L( () => i.getters["configSetup/percentages"])
          , g = L( () => (Number.isNaN(d.value.totalDone / d.value.total) ? 0 : d.value.totalDone / d.value.total).toLocaleString("pt-BR", {
            style: "percent",
            maximumFractionDigits: 0
        }));
        return (w, b) => {
            const v = m("DsButton")
              , f = m("DsIcon")
              , y = m("DsTypography");
            return l(),
            u("div", ge, [a.id === "company_setup" ? (l(),
            D(v, {
                key: 0,
                variant: "link",
                class: T(["app-icon shadow", o.value]),
                textClass: "d-flex align-items-center justify-content-center fw-regular fs-7",
                text: g.value,
                onClick: b[0] || (b[0] = p => c("redirectTo"))
            }, null, 8, ["class", "text"])) : a.icon !== "chrome" ? (l(),
            D(v, {
                key: 1,
                variant: "link",
                class: T(["app-icon shadow", o.value]),
                icon: a.icon,
                onClick: b[1] || (b[1] = p => c("redirectTo"))
            }, {
                default: C( () => [a.blocked ? (l(),
                D(f, {
                    key: 0,
                    icon: "lock-2-line",
                    class: "position-absolute top-right-icon fs-5 bg-orange-normal text-white rounded-circle p-1"
                })) : P("", !0), n(f, {
                    icon: a.icon,
                    class: "fs-9"
                }, null, 8, ["icon"])]),
                _: 1
            }, 8, ["class", "icon"])) : (l(),
            D(v, {
                key: 2,
                variant: "link",
                class: T(["app-icon shadow", a.color]),
                iconClass: "fs-9",
                icon: a.icon,
                onClick: b[2] || (b[2] = p => c("redirectTo", a.route))
            }, {
                default: C( () => b[3] || (b[3] = [r("i", {
                    class: "fa fa-chrome fs-8"
                }, null, -1)])),
                _: 1,
                __: [3]
            }, 8, ["class", "icon"])), n(y, {
                size: "sm",
                text: a.name,
                class: "mb-0 app-icon-label mt-2"
            }, null, 8, ["text"])])
        }
    }
}
  , be = N(he, [["__scopeId", "data-v-40276880"]])
  , fe = {
    class: "card-content rounded-circle p-1"
}
  , ve = {
    class: "d-flex align-items-center mb-2"
}
  , ye = {
    key: 1,
    class: "mt-auto d-flex"
}
  , Ce = {
    class: "image-wrapper ms-4"
}
  , ke = {
    class: "image-container"
}
  , we = {
    key: 0,
    class: "locked-overlay"
}
  , _e = {
    __name: "HomeObjectiveCard",
    props: {
        objective: {
            type: Object,
            required: !0
        },
        data: {
            type: Object,
            default: () => ({})
        },
        agentData: {
            type: Object,
            default: () => ({})
        },
        isChosen: {
            type: Boolean,
            default: !1
        },
        locked: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["showAgentWppSidemodal", "previewChat"],
    setup(e, {emit: t}) {
        const {t: i} = Q()
          , c = X()
          , a = e
          , o = t;
        function d() {
            return {
                prospect: i("home_objective_card.prospect"),
                crm: i("home_objective_card.crm"),
                marketing: i("home_objective_card.marketing"),
                automation: i("home_objective_card.automation"),
                agents: i("home_objective_card.agents")
            }[a.objective.key] || a.objective.value
        }
        function g() {
            return {
                prospect: i("home_objective_card.buttons.prospect"),
                crm: i("home_objective_card.buttons.funnel"),
                marketing: i("home_objective_card.buttons.marketing"),
                automation: i("home_objective_card.buttons.automation"),
                agents: i("market_configuration.starting.configure"),
                agentWpp: i("home_objective_card.buttons.try_on_wpp")
            }[a.objective.key] || "Selecionar"
        }
        function w() {
            var y, p, k;
            const v = ((k = (p = (y = a.data) == null ? void 0 : y.segment) == null ? void 0 : p.segments) == null ? void 0 : k.length) || 0;
            return {
                prospect: i("home_objective_card.descriptions.prospect", {
                    count: v
                }),
                crm: i("home_objective_card.descriptions.crm"),
                marketing: i("home_objective_card.descriptions.marketing"),
                automation: i("home_objective_card.descriptions.automation"),
                agents: i("signup.super_app_signup.qualify_step.objectives.agents.saved_agent"),
                agentWpp: i("home_objective_card.descriptions.agentWpp")
            }[a.objective.key] || ""
        }
        function b() {
            var v, f, y, p, k, S, j, h, A, z;
            if (a.objective.key === "agents" && ((v = a.agentData) != null && v.id)) {
                const _ = c.resolve({
                    name: "agent-setup.edit",
                    params: {
                        id: a.agentData.id
                    }
                }).href;
                window.open(_, "_blank")
            } else if (a.objective.key === "prospect" && ((y = (f = a.data) == null ? void 0 : f.segment) != null && y.id)) {
                const _ = c.resolve({
                    name: "company-search.search.companies.prospection",
                    query: {
                        segmentId: a.data.segment.id
                    }
                }).href;
                window.open(_, "_blank")
            } else if (a.objective.key === "crm" && ((S = (k = (p = a.data) == null ? void 0 : p.crm) == null ? void 0 : k.pipeline) != null && S.id)) {
                const _ = c.resolve({
                    name: "deals.index",
                    params: {
                        id: a.data.crm.pipeline.id
                    }
                }).href;
                window.open(_, "_blank")
            } else if (a.objective.key === "marketing" && ((h = (j = a.data) == null ? void 0 : j.landingPage) != null && h.address))
                window.open(`https://${a.data.landingPage.address}`, "_blank");
            else if (a.objective.key === "automation" && ((z = (A = a.data) == null ? void 0 : A.automation) != null && z.id)) {
                const _ = c.resolve({
                    name: "journeys.edit",
                    params: {
                        id: a.data.automation.id
                    }
                }).href;
                window.open(_, "_blank")
            } else if (a.objective.key === "apps") {
                const _ = document.querySelector(".all-apps-grid");
                _ && _.scrollIntoView({
                    behavior: "smooth"
                })
            } else
                a.objective.key === "agentWpp" && o("showAgentWppSidemodal")
        }
        return (v, f) => {
            const y = m("DsTypography")
              , p = m("DsButton")
              , k = m("DsBadge")
              , S = m("VueImage")
              , j = m("DsCard")
              , h = m("DsIcon");
            return l(),
            u("div", {
                class: T(["animated-border-wrapper", {
                    "animated-border-wrapper--active": e.isChosen
                }])
            }, [n(j, {
                class: T(["shadow-sm home-objective-card rounded-4", {
                    "bg-green-brand": e.objective.key === "agentWpp",
                    "locked-card": e.locked
                }]),
                bodyClass: "d-flex justify-content-between align-items-center p-0 px-3 pt-3"
            }, {
                default: C( () => [r("div", fe, [r("div", ve, [n(y, {
                    tag: "span",
                    text: d(),
                    fontWeight: "semibold",
                    fontSize: "3",
                    class: "mb-0"
                }, null, 8, ["text"])]), n(y, {
                    tag: "span",
                    text: w(),
                    fontWeight: "regular",
                    fontSize: "3",
                    color: e.objective.key === "agentWpp" ? "black" : "gray",
                    class: "mb-0 mt-2"
                }, null, 8, ["text", "color"]), e.objective.key !== "agentWpp" ? (l(),
                D(p, {
                    key: 0,
                    class: "mt-auto me-7 mb-2",
                    variant: e.objective.key === "agentWpp" ? "green-normal" : "outline-green-normal",
                    text: g(),
                    disabled: e.locked,
                    onClick: b
                }, null, 8, ["variant", "text", "disabled"])) : (l(),
                u("div", ye, [n(p, {
                    variant: e.objective.key === "agentWpp" ? "green-normal" : "outline-green-normal",
                    text: g(),
                    disabled: e.locked,
                    onClick: b
                }, null, 8, ["variant", "text", "disabled"]), n(p, {
                    class: "ms-2 w-25",
                    variant: e.objective.key === "agentWpp" ? "green-normal" : "outline-green-normal",
                    text: "Chat",
                    disabled: e.locked,
                    onClick: f[0] || (f[0] = A => o("previewChat"))
                }, null, 8, ["variant", "disabled"])]))]), r("div", null, [n(k, {
                    class: "m-0",
                    text: "Gerado por IA",
                    icon: "auto-awesome",
                    textColor: "purple-normal",
                    bgColor: e.objective.key === "agentWpp" ? "purple-light" : "white",
                    borderColor: e.objective.key === "agentWpp" ? "purple-light" : "white"
                }, null, 8, ["bgColor", "borderColor"]), r("div", Ce, [f[1] || (f[1] = r("svg", {
                    class: "shape-background",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "100",
                    height: "73",
                    viewBox: "0 0 100 73",
                    fill: "none"
                }, [r("path", {
                    d: "M7.47569 8.40916C7.90029 3.98918 11.844 0.754055 16.2618 1.20179L91.7336 8.8508C96.0702 9.29031 99.2504 13.1199 98.8858 17.4633L94.2857 72.2521L1.3427 72.2521L7.47569 8.40916Z",
                    fill: "url(#paint0_linear_2229_3868)",
                    stroke: "#CED4DA",
                    "stroke-linejoin": "round"
                }), r("defs", null, [r("linearGradient", {
                    id: "paint0_linear_2229_3868",
                    x1: "53.8942",
                    y1: "5.01581",
                    x2: "46.9579",
                    y2: "61.9049",
                    gradientUnits: "userSpaceOnUse"
                }, [r("stop", {
                    "stop-color": "white"
                }), r("stop", {
                    offset: "1",
                    "stop-color": "#FAF9F5"
                })])])], -1)), r("div", ke, [n(S, {
                    src: `signup/${e.objective.key}Icon.png`,
                    class: "objective-image",
                    alt: "Objective Icon"
                }, null, 8, ["src"])])])])]),
                _: 1
            }, 8, ["class"]), e.locked ? (l(),
            u("div", we, [n(h, {
                icon: "lock-line",
                class: "lock-icon"
            })])) : P("", !0)], 2)
        }
    }
}
  , xe = N(_e, [["__scopeId", "data-v-1f4b5c00"]]);
F.extend(J);
const Se = {
    name: "app-home",
    data() {
        return {
            search: "",
            searchText: "",
            currentTime: F().format("HH:mm:ss"),
            timer: null,
            userFavorites: [],
            onboardingCompletedData: null,
            agentData: null,
            objectivesLoading: !1,
            signupChosenObjective: null,
            showWppAgentPreviewSidemodal: !1,
            showAgentChatPreview: !1,
            integrationToken: null,
            baseObjectives: [{
                key: "prospect",
                value: "Prospectar empresas"
            }, {
                key: "crm",
                value: "CRM"
            }, {
                key: "marketing",
                value: "Inbound, Landing Pages e Formulários"
            }, {
                key: "automation",
                value: "Automação"
            }]
        }
    },
    components: {
        MUserInitials: oe,
        NavbarGlobalSearch: ae,
        AppIcon: be,
        HomeObjectiveCard: xe,
        WhatsappPreviewSideModal: de,
        FloatingChat: me
    },
    computed: {
        ...I(["user", "company", "showSuperAppOnboarding", "isTrial", "freemium", "subscriptionAddons", "pendingCheckout", "hasPendingCheckout", "permissions", "subscriptionPlanSpecs", "isCobrand", "showAllFeaturesCollapsed", "showAppHomeWithoutSearch", "showWorkflowAgent", "isGTMAi"]),
        ...I("sidebar", ["isOpen", "isLightMode"]),
        ...I("companyFeedback", ["userMood"]),
        ...I("mail/folders", ["inboxFolder"]),
        ...I({
            hasVoiceExtension: "voice/hasVoiceExtension"
        }),
        ...I({
            voiceConfig: "voice/config",
            isAdmin: "admin"
        }),
        hasVoicePermission() {
            var e, t;
            return (t = (e = this.permissions) == null ? void 0 : e.voice) == null ? void 0 : t.read
        },
        aiOnboardingDone() {
            if (Object.prototype.hasOwnProperty.call(this.company || {}, "aiOnboardingDone"))
                return this.company.aiOnboardingDone
        },
        allObjectives() {
            var t, i, c, a;
            const e = [...this.baseObjectives];
            return this.showWorkflowAgent && ((i = (t = this.permissions) == null ? void 0 : t.agent) != null && i.read) && e.push({
                key: "agents",
                value: this.$t("home_objective_card.agents")
            }),
            (a = (c = this.permissions) == null ? void 0 : c.agent) != null && a.read && e.unshift({
                key: "agentWpp",
                value: this.$t("home_objective_card.agentWpp")
            }),
            e
        },
        time() {
            return this.currentTime
        },
        day() {
            return F().format("DD [de] MMMM")
        },
        weekDay() {
            return F().format("dddd, YYYY")
        },
        userMoodScore() {
            return this.userMood ? this.userMood.score : 0
        },
        userMoodStyle() {
            return this.userMoodScore === 1 ? {
                icon: "emotion-line",
                variant: "green-brand"
            } : this.userMoodScore === -1 ? {
                icon: "emotion-laugh-line",
                variant: "outline-red-normal"
            } : {
                icon: "emotion-normal-line",
                variant: "outline-gray-700"
            }
        },
        trialItems() {
            var e;
            return ((e = this.subscriptionAddons) == null ? void 0 : e.filter(t => !!t.trial_end_date)) || []
        },
        maxTrialEndDate() {
            var e, t;
            return (e = this.trialItems) != null && e.length && ((t = this.trialItems) == null ? void 0 : t.reduce( (i, c) => c.trial_end_date > i ? c.trial_end_date : i, this.trialItems[0].trial_end_date)) || 0
        },
        remainingTrialDays() {
            return q(this.maxTrialEndDate).startOf("day").diff(q().startOf("day"), "days")
        },
        freemiumOrTrial() {
            return this.freemium || this.isTrial
        },
        planButtonConfig() {
            let e = "";
            this.isTrial && (this.remainingTrialDays <= 1 ? e = this.$t("menu_header.last_trial_day") : e = this.$t("menu_header.trial_days_super_app", {
                days: this.remainingTrialDays
            }));
            let t = this.remainingTrialDays > 5 ? "lock-unlock-line" : "alert-line";
            return this.freemium && (t = "rocket-2-line",
            e = this.$t("menu_header.subscribe_now")),
            {
                label: e,
                icon: t,
                iconClass: this.remainingTrialDays > 5 ? "text-orange-normal" : "text-black",
                variant: this.remainingTrialDays > 5 ? "orange-light" : "orange-normal",
                buttonTextClass: this.remainingTrialDays > 5 ? "text-black" : "text-white"
            }
        },
        appsFav() {
            return (this.userFavorites.length ? this.userFavorites : ue()).map(t => U[t.toUpperCase()]).filter(t => t && this.isPermissionValid(t.permission)).filter(t => t.id !== "company_setup" || this.freemiumOrTrial).map(t => ({
                ...t,
                blocked: !this.isSpecValidForPlan(t.spec)
            }))
        },
        apps() {
            return Object.values(U).filter(e => e.category === pe.ADDITIONAL).filter(e => this.isPermissionValid(e.permission)).map(e => ({
                ...e,
                blocked: !this.isSpecValidForPlan(e.spec),
                isFavorite: this.userFavorites.includes(e.id)
            }))
        },
        objectives() {
            var t, i, c, a, o, d, g, w, b, v, f, y, p, k, S, j;
            let e = [...this.baseObjectives];
            return (i = (t = this.onboardingCompletedData) == null ? void 0 : t.landingPage) != null && i.address || (e = e.filter(h => h.key !== "marketing")),
            (a = (c = this.onboardingCompletedData) == null ? void 0 : c.segment) != null && a.id || (e = e.filter(h => h.key !== "prospect")),
            (d = (o = this.onboardingCompletedData) == null ? void 0 : o.automation) != null && d.id || (e = e.filter(h => h.key !== "automation")),
            (b = (w = (g = this.onboardingCompletedData) == null ? void 0 : g.crm) == null ? void 0 : w.pipeline) != null && b.id || (e = e.filter(h => h.key !== "crm")),
            (v = this.agentData) != null && v.id || (e = e.filter(h => h.key !== "agents")),
            this.showWorkflowAgent && ((y = (f = this.permissions) == null ? void 0 : f.agent) != null && y.read) && ((p = this.agentData) != null && p.id) && e.unshift({
                key: "agents",
                value: this.$t("home_objective_card.agents")
            }),
            (k = this.agentData) != null && k.wppUrl && ((j = (S = this.permissions) == null ? void 0 : S.agent) != null && j.read) && e.unshift({
                key: "agentWpp",
                value: this.$t("home_objective_card.agentWpp")
            }),
            e
        },
        showAIPersonalization() {
            return this.objectives && this.objectives.length > 0
        },
        agent() {
            return E().agent
        }
    },
    async created() {
        this.updateTime(),
        this.timer = setInterval(this.updateTime, 1e3),
        await this.loadObjectivesData(),
        this.fetchVoiceConfig(this.company.id)
    },
    beforeUnmount() {
        this.timer && clearInterval(this.timer)
    },
    methods: {
        ...K("voice", {
            fetchVoiceConfig: "fetchConfig"
        }),
        redirectTo(e) {
            if (!this.isPermissionValid(e.permission)) {
                this.$notification.notifyError("configurations.messages.error.permission");
                return
            }
            e.id === "digital_phone" && !this.hasVoicePermission ? this.$notification.notifyAlert("messaging.configurations.voice.options.voice_permission") : e.id === "digital_phone" && this.hasVoicePermission ? this.$store.dispatch("setVoiceDialer", {
                show: !0
            }) : this.$router.push({
                name: e.route
            })
        },
        updateTime() {
            this.currentTime = F().format("HH:mm")
        },
        redirectToPlans() {
            this.$router.push({
                name: "plans.index"
            })
        },
        isPermissionValid(e) {
            var t;
            return e == null ? !0 : Array.isArray(e) ? e.some(i => {
                var c;
                return (c = this.permissions[i]) == null ? void 0 : c.read
            }
            ) : (t = this.permissions[e]) == null ? void 0 : t.read
        },
        isSpecValidForPlan(e) {
            var t;
            return e == null ? !0 : (t = this.subscriptionPlanSpecs) == null ? void 0 : t.includes(e)
        },
        async loadObjectivesData() {
            var e;
            if (!this.objectivesLoading) {
                this.objectivesLoading = !0;
                try {
                    const {data: t} = await ne();
                    this.onboardingCompletedData = t;
                    const i = E()
                      , {initSandboxAgent: c, initializeAgent: a} = i;
                    if (!i.agent.id) {
                        const o = await ie();
                        o.data && o.data.length > 0 && await a(o.data[o.data.length - 1].id)
                    }
                    i.agent.id && (await c(i.agent.id),
                    this.integrationToken = await se()),
                    this.agentData = {
                        id: i.agent.id,
                        wppUrl: (e = i.agent.config) == null ? void 0 : e.sandboxUrl
                    },
                    await this.assignChosenObjective()
                } catch {
                    this.onboardingCompletedData = {},
                    this.agentData = null
                } finally {
                    this.objectivesLoading = !1
                }
            }
        },
        async goToAgentPreview() {
            try {
                const e = E();
                this.showAgentChatPreview && e.agent.id && (this.showAgentChatPreview = !1,
                await this.$nextTick()),
                this.showAgentChatPreview = !0
            } catch {
                this.$notification.notifyError("agents.messages.error.load_agent")
            }
        },
        assignChosenObjective() {
            var i;
            const e = {
                agn: "agentWpp",
                "mkt-out": "prospect",
                "mkt-inb": "automation",
                crm: "crm",
                com: "marketing"
            }
              , {objective: t} = this.company;
            e[t] && (this.signupChosenObjective = e[t],
            this.signupChosenObjective === "agentWpp" && ((i = this.agentData) != null && i.wppUrl) && this.aiOnboardingDone && (this.showAgentChatPreview = !0))
        }
    }
}
  , je = {
    class: "design-system container w-100 h-100"
}
  , De = {
    class: "container"
}
  , Te = {
    class: "d-flex justify-content-between align-items-center pt-4"
}
  , Ae = {
    class: "mb-2"
}
  , Ie = {
    class: "d-flex align-items-center flex-row-reverse"
}
  , Pe = {
    class: "d-flex flex-column ms-3"
}
  , Oe = {
    key: 0,
    class: "ms-auto me-3"
}
  , Be = {
    key: 1,
    class: "ms-auto me-3"
}
  , Me = {
    class: "d-flex align-items-center my-0"
}
  , We = {
    key: 0,
    class: "text-center py-4"
}
  , Fe = {
    key: 1,
    class: "row g-3 border border-gray-400 p-4 rounded blocked-wrapper"
}
  , ze = {
    class: "col-12 text-center mb-4"
}
  , Ve = {
    class: "d-flex flex-column align-items-center"
}
  , Ne = {
    class: "gradient-icon-wrapper mb-3"
}
  , Le = {
    key: 2,
    class: "row g-3"
}
  , Ee = {
    class: "d-flex flex-wrap gap-4 my-4 favorites-grid"
}
  , Ge = {
    class: "d-flex align-items-center my-0"
}
  , $e = {
    class: "d-flex flex-wrap gap-4 all-apps-grid"
}
  , qe = {
    class: "d-flex align-items-center mb-4 mt-5"
}
  , He = {
    class: "d-flex flex-wrap gap-4 my-4 all-apps-grid"
};
function Ue(e, t, i, c, a, o) {
    var G, $;
    const d = m("DsTypography")
      , g = m("DsHeading")
      , w = m("DsButton")
      , b = m("router-link")
      , v = m("MUserInitials")
      , f = m("DsIcon")
      , y = m("NavbarGlobalSearch")
      , p = m("VueImage")
      , k = m("HomeObjectiveCard")
      , S = m("DsAccordionItem")
      , j = m("DsAccordion")
      , h = m("AppIcon")
      , A = m("DsTooltip")
      , z = m("WhatsappPreviewSideModal")
      , _ = m("FloatingChat");
    return l(),
    u("div", je, [r("div", De, [r("div", Te, [r("div", Ae, [r("div", Ie, [r("div", Pe, [n(d, {
        tag: "span",
        text: o.day,
        fontSize: "5",
        class: "mb-0 mb-1",
        color: "gray-700"
    }, null, 8, ["text"]), n(d, {
        tag: "span",
        text: o.weekDay,
        fontSize: "3",
        color: "gray"
    }, null, 8, ["text"])]), n(g, {
        tag: "span",
        text: o.time,
        class: "huge-heading",
        size: "display",
        fontWeight: "bold",
        color: "green-normal",
        "data-testid": "heading-time"
    }, null, 8, ["text"])]), n(w, {
        size: "sm",
        class: "mt-1",
        text: "Satisfação",
        rightIcon: o.userMoodStyle.icon,
        variant: o.userMoodStyle.variant,
        onClick: t[0] || (t[0] = s => e.$router.push({
            name: "company-feedback.index"
        })),
        "data-testid": "btn-feedback"
    }, null, 8, ["rightIcon", "variant"])]), e.hasPendingCheckout && e.$route.name !== "checkout" && e.$route.name !== "internal-checkout" ? (l(),
    u("div", Oe, [n(b, {
        to: {
            name: "checkout",
            params: {
                checkoutId: e.pendingCheckout.id
            }
        }
    }, {
        default: C( () => [n(w, {
            text: e.$t("checkout.complete_subscription"),
            type: "help large pl10 pr10",
            eventTracker: "go-external-checkout",
            icon: "rocket-2-line",
            variant: o.planButtonConfig.variant,
            class: "subscribeButton rounded-pill"
        }, null, 8, ["text", "variant"])]),
        _: 1
    }, 8, ["to"])])) : o.freemiumOrTrial && e.$route.name !== "internal-checkout" && e.$route.name !== "checkout" ? (l(),
    u("div", Be, [n(w, {
        text: o.planButtonConfig.label,
        iconClass: o.planButtonConfig.iconClass,
        icon: o.planButtonConfig.icon,
        variant: o.planButtonConfig.variant,
        class: T(["subscribeButton rounded-pill", o.planButtonConfig.buttonTextClass]),
        onClick: o.redirectToPlans
    }, null, 8, ["text", "iconClass", "icon", "variant", "class", "onClick"])])) : P("", !0), r("div", {
        class: T([[{
            "mood-profile-icon--positive": o.userMoodScore === 1
        }, {
            "mood-profile-icon--negative": o.userMoodScore === -1
        }], "d-flex align-items-center mood-profile-icon"])
    }, [r("div", null, [n(v, {
        class: "ms-auto user-avatar text-white cursor-pointer",
        tooltipPlacement: "left",
        userName: (G = e.user) == null ? void 0 : G.name,
        userId: ($ = e.user) == null ? void 0 : $.id,
        size: "xl",
        onClick: t[1] || (t[1] = s => e.$router.push({
            name: "account-new.profile.index"
        })),
        hiddenStatus: ""
    }, null, 8, ["userName", "userId"])]), n(f, {
        class: T(["mood-profile-icon__icon p-1 fs-3 cursor-pointer", [{
            "mood-profile-icon__icon--positive": o.userMoodScore === 1
        }, {
            "mood-profile-icon__icon--negative": o.userMoodScore === -1
        }]]),
        icon: o.userMoodStyle.icon,
        onClick: t[2] || (t[2] = s => e.$router.push({
            name: "company-feedback.index"
        }))
    }, null, 8, ["class", "icon"])], 2)]), r("div", {
        class: T(["mt-2", {
            "border-bottom border-gray-300 pb-3": e.showAppHomeWithoutSearch
        }])
    }, [e.showAppHomeWithoutSearch ? P("", !0) : (l(),
    D(y, {
        key: 0,
        class: "flex-fill w-100",
        classInput: e.isLightMode ? " bg-gray-200 border border-1 border-gray-600 text-black placeholder-black" : " bg-gray-700 border border-1 border-gray-600 text-white placeholder-white",
        maxWidth: "100%",
        iconColor: e.isLightMode ? "" : "text-white"
    }, null, 8, ["classInput", "iconColor"]))], 2), o.showAIPersonalization && (e.isTrial || e.isGTMAi) ? (l(),
    D(j, {
        key: 0,
        class: "mt-7"
    }, {
        default: C( () => [n(S, {
            headerClass: "ps-0 pt-0",
            bodyClass: "pt-0",
            invertArrow: "",
            startOpen: "",
            buttonContentClass: "d-flex justify-content-center"
        }, {
            header: C( () => [r("div", Me, [n(p, {
                src: "icons/lia-icon.svg",
                class: "my-1 rounded-circle img-logo img-logo__ia me-3",
                alt: "Tab Icon"
            }), n(d, {
                tag: "span",
                text: e.$t("menu.customized_by_ia"),
                color: "green-dark",
                fontWeight: "semibold",
                fontSize: "5"
            }, null, 8, ["text"])])]),
            body: C( () => [a.objectivesLoading ? (l(),
            u("div", We, t[10] || (t[10] = [r("div", {
                class: "spinner-border text-primary",
                role: "status"
            }, [r("span", {
                class: "visually-hidden"
            }, "Carregando...")], -1)]))) : o.aiOnboardingDone === !1 ? (l(),
            u("div", Fe, [r("div", ze, [r("div", Ve, [r("div", Ne, [n(p, {
                src: "icons/lia-icon.svg",
                alt: "AI Icon",
                class: "gradient-icon"
            })]), n(g, {
                size: "lg",
                text: e.$t("home_objective_card.unlock_title"),
                class: "mb-2"
            }, null, 8, ["text"]), n(d, {
                tag: "p",
                text: e.$t("home_objective_card.unlock_message"),
                color: "gray-700",
                fontSize: "4",
                class: "mb-4 text-center",
                style: {
                    maxWidth: "600px"
                }
            }, null, 8, ["text"]), n(w, {
                text: e.$t("home_objective_card.unlock_now"),
                size: "xl",
                class: "gradient-button",
                onClick: t[3] || (t[3] = s => e.$router.push({
                    name: "onboarding.website"
                }))
            }, {
                default: C( () => [n(p, {
                    src: "icons/lia-icon.svg",
                    style: {
                        width: "16px"
                    },
                    alt: "Tab Icon",
                    class: "me-2"
                }), R(" " + V(e.$t("home_objective_card.unlock_now")), 1)]),
                _: 1
            }, 8, ["text"])])]), (l(!0),
            u(O, null, W(o.allObjectives, s => (l(),
            u("div", {
                key: s.key,
                class: "col-xl-4 col-lg-6 col-md-6 col-12"
            }, [n(k, {
                isChosen: !1,
                objective: s,
                data: a.onboardingCompletedData,
                agentData: a.agentData,
                locked: !0,
                onShowAgentWppSidemodal: t[4] || (t[4] = x => a.showWppAgentPreviewSidemodal = !0),
                onPreviewChat: t[5] || (t[5] = x => o.goToAgentPreview(o.agent.id))
            }, null, 8, ["objective", "data", "agentData"])]))), 128)), n(d, {
                class: "text-center mt-5",
                color: "gray-600",
                fontSize: "3",
                text: e.$t("home_objective_card.footer_message")
            }, null, 8, ["text"])])) : (l(),
            u("div", Le, [(l(!0),
            u(O, null, W(o.objectives, s => (l(),
            u("div", {
                key: s.key,
                class: "col-xl-4 col-lg-6 col-md-6 col-12"
            }, [n(k, {
                isChosen: a.signupChosenObjective === s.key,
                objective: s,
                data: a.onboardingCompletedData,
                agentData: a.agentData,
                onShowAgentWppSidemodal: t[6] || (t[6] = x => a.showWppAgentPreviewSidemodal = !0),
                onPreviewChat: t[7] || (t[7] = x => o.goToAgentPreview(o.agent.id))
            }, null, 8, ["isChosen", "objective", "data", "agentData"])]))), 128))]))]),
            _: 1
        })]),
        _: 1
    })) : P("", !0), r("div", {
        class: T(["d-flex align-items-center mb-4", {
            "mt-4": o.showAIPersonalization && (e.isTrial || e.isGTMAi),
            "mt-7": !(o.showAIPersonalization && (e.isTrial || e.isGTMAi))
        }])
    }, [n(f, {
        class: "bg-purple-normal text-white p-2 me-3",
        style: {
            "border-radius": "50%"
        },
        variant: "",
        icon: "bookmark-line"
    }), n(d, {
        tag: "span",
        text: e.$t("menu.recommended"),
        color: "green-dark",
        fontWeight: "semibold",
        fontSize: "5"
    }, null, 8, ["text"])], 2), r("div", Ee, [(l(!0),
    u(O, null, W(o.appsFav, (s, x) => (l(),
    u("div", {
        class: "mb-3",
        key: x
    }, [n(A, {
        appendToBody: "",
        placement: "auto",
        text: e.$t("parametrizations.tooltip"),
        disable: o.isSpecValidForPlan(s.spec)
    }, {
        default: C( () => [n(h, {
            id: s.id,
            name: e.$t(s.name),
            icon: s.icon,
            route: s.route,
            color: s.color,
            blocked: !o.isSpecValidForPlan(s.spec),
            onRedirectTo: M => o.redirectTo(s)
        }, null, 8, ["id", "name", "icon", "route", "color", "blocked", "onRedirectTo"])]),
        _: 2
    }, 1032, ["text", "disable"])]))), 128))]), e.showAllFeaturesCollapsed ? (l(),
    D(j, {
        key: 1
    }, {
        default: C( () => [n(S, {
            headerClass: "ps-0 pt-0",
            bodyClass: "pt-0",
            invertArrow: "",
            buttonContentClass: "d-flex justify-content-center"
        }, {
            header: C( () => [r("div", Ge, [n(p, {
                src: "leads2b_gtm_fav.png",
                class: "corner-logo my-1 rounded-circle img-logo me-3 shadow",
                alt: "Tab Icon"
            }), n(d, {
                tag: "span",
                text: `Todos os Aplicativos${e.isCobrand ? "" : " Leads2b"}`,
                color: "green-dark",
                fontWeight: "semibold",
                fontSize: "5"
            }, null, 8, ["text"])])]),
            body: C( () => [r("div", $e, [(l(!0),
            u(O, null, W(o.apps, (s, x) => (l(),
            u("div", {
                class: "mb-3",
                key: x
            }, [n(A, {
                appendToBody: "",
                placement: "auto",
                text: e.$t("parametrizations.tooltip"),
                disable: o.isSpecValidForPlan(s.spec)
            }, {
                default: C( () => [n(h, {
                    id: s.id,
                    name: e.$t(s.name),
                    icon: s.icon,
                    route: s.route,
                    color: s.color,
                    blocked: !o.isSpecValidForPlan(s.spec),
                    onRedirectTo: M => o.redirectTo(s)
                }, null, 8, ["id", "name", "icon", "route", "color", "blocked", "onRedirectTo"])]),
                _: 2
            }, 1032, ["text", "disable"])]))), 128))])]),
            _: 1
        })]),
        _: 1
    })) : (l(),
    u(O, {
        key: 2
    }, [r("div", qe, [n(p, {
        src: "leads2b_gtm_fav.png",
        class: "corner-logo my-1 rounded-circle img-logo me-3 shadow",
        alt: "Tab Icon"
    }), n(d, {
        tag: "span",
        text: e.$t("signup.super_app_signup.qualify_step.objectives.apps.label") + (e.isCobrand ? "" : " Leads2b"),
        color: "green-dark",
        fontWeight: "semibold",
        fontSize: "5"
    }, null, 8, ["text"])]), r("div", He, [(l(!0),
    u(O, null, W(o.apps, (s, x) => (l(),
    u("div", {
        class: "mb-3",
        key: x
    }, [n(A, {
        appendToBody: "",
        placement: "auto",
        text: e.$t("parametrizations.tooltip"),
        disable: o.isSpecValidForPlan(s.spec)
    }, {
        default: C( () => [n(h, {
            id: s.id,
            name: e.$t(s.name),
            icon: s.icon,
            route: s.route,
            color: s.color,
            blocked: !o.isSpecValidForPlan(s.spec),
            onRedirectTo: M => o.redirectTo(s)
        }, null, 8, ["id", "name", "icon", "route", "color", "blocked", "onRedirectTo"])]),
        _: 2
    }, 1032, ["text", "disable"])]))), 128))])], 64))]), a.showWppAgentPreviewSidemodal ? (l(),
    D(z, {
        key: 0,
        show: a.showWppAgentPreviewSidemodal,
        onHidden: t[8] || (t[8] = s => a.showWppAgentPreviewSidemodal = !1)
    }, null, 8, ["show"])) : P("", !0), n(ee, {
        name: "fade",
        mode: "out-in"
    }, {
        default: C( () => {
            var s, x, M;
            return [a.showAgentChatPreview && o.agent.id && o.aiOnboardingDone ? (l(),
            D(_, {
                key: 0,
                ref: "floating-chat",
                preview: "",
                killable: "",
                display: "fixed",
                position: "bottom_right",
                bottom: "3vh",
                right: "7vh",
                agentName: o.agent.name,
                agentId: o.agent.id,
                primaryColor: ((s = o.agent.appearance) == null ? void 0 : s.primaryColor) || "#01B89A",
                integrationToken: a.integrationToken,
                requiresUserInfo: !1,
                size: ((x = o.agent.appearance) == null ? void 0 : x.size) || "md",
                initiallyExpanded: ((M = o.agent.appearance) == null ? void 0 : M.startExpanded) || !1,
                initiallyOpen: !0,
                onKill: t[9] || (t[9] = Ke => a.showAgentChatPreview = !1)
            }, null, 8, ["agentName", "agentId", "primaryColor", "integrationToken", "size", "initiallyExpanded"])) : P("", !0)]
        }
        ),
        _: 1
    })])
}
const Re = N(Se, [["render", Ue], ["__scopeId", "data-v-8d3d7862"]])
  , it = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Re
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ze = {
    name: "new-dashboard",
    data() {
        return {
            showModal: !1,
            loading: !1
        }
    },
    computed: {
        ...I(["company", "companyPlanName", "user"]),
        callToActionText() {
            return this.isSGM ? "Inscreva-se agora" : "Ative sua Dashboard"
        },
        isSGM() {
            return [H.pro, H.full].includes(this.companyPlanName)
        },
        subtitle() {
            return this.isSGM ? "Você pode testar este novo recurso antes dele se tornar público." : "Tenha acesso aos dados de toda a sua operação de ponta a ponta."
        },
        title() {
            return this.isSGM ? "Quer conhecer as novas Dashboards em primeira mão?" : "Conheça o novo Dashboard."
        }
    },
    methods: {
        callToAction() {
            this.isSGM ? this.requestDashboardSgm() : this.requestDashboardFree()
        },
        async requestDashboardFree() {
            const {company: e, user: t} = this
              , i = d => {
                const g = d.querySelector("#new-dashboard-phone");
                te(g, {
                    mask: "(00) 00000-0000"
                })
            }
              , c = (d="") => new Promise(g => {
                d.replace(/\D+/g, "").length < 11 ? g("Informe um telefone válido") : g()
            }
            )
              , a = async d => {
                const g = d.replace(/\D+/g, "")
                  , w = {
                    "Company ID": e.id,
                    "Company Name": e.name,
                    "Company Email": e.email,
                    "Company Phone": e.phone,
                    Plan: e == null ? void 0 : e.plan.name,
                    "User ID": t.id,
                    "User Name": t.name,
                    "User Email": t.email,
                    "User Phone": t.phone,
                    "Phone Informed": g
                };
                try {
                    await le.post("https://hook.integromat.com/j515tiuuumkgnc7ygl04xcse2rxmktu4", w),
                    ce.track("Solicitar Novos Dashboards", {
                        "Phone Informed": g
                    }),
                    B.fire({
                        icon: "success",
                        title: "Solicitação enviada com sucesso",
                        confirmButtonColor: "#08c1a7"
                    })
                } catch {
                    B.fire({
                        icon: "error",
                        title: "Sentimos muito",
                        text: "Não conseguimos finalizar sua solicitação devido a um problema desconhecido, nossa equipe técnica está trabalhando para resolver isso o mais rápido possível.",
                        confirmButtonColor: "#08c1a7"
                    })
                }
            }
            ;
            await B.fire({
                input: "text",
                inputPlaceholder: "Telefone (whatsapp)",
                title: `Olá, ${t.name}.`,
                showCancelButton: !0,
                cancelButtonText: "X",
                confirmButtonText: "Falar com um especialista",
                confirmButtonColor: "#08c1a7",
                showLoaderOnConfirm: !0,
                buttonsStyling: !1,
                inputAttributes: {
                    id: "new-dashboard-phone"
                },
                customClass: {
                    confirmButton: "btn-confirm-new-dashboard-swal",
                    cancelButton: "btn-cancel-new-dashboard-swal"
                },
                html: `
        <div class="text-left">
          Não temos informações suficientes para construir os gráficos do seu dashboard. :( <br><br>
          Caso tenha interesse nessa funcionalidade, fale com um dos nossos especialistas para te ajudar a organizar os dados em nosso CRM. <br><br>
          <strong>Informe seu telefone (whatsapp) para que nosso especialista possa entrar em contato:</strong>
        </div>
      `,
                didOpen: i,
                inputValidator: c,
                preConfirm: a
            })
        },
        async requestDashboardSgm() {
            try {
                await re({
                    feature: "analytics"
                });
                const {value: e} = await B.fire({
                    html: `
            <div class="text-left pt5">
              <strong>Olá, ${this.user.name}.</strong>
              <br><br>
              Recebemos sua solicitação para testar em primeira mão as novas Dashboards.
              <br><br>
              O resto é com a gente!
              <br><br>
              Em até 48h seu gerente de contas entrará em contato para te explicar como funcionará
              a ativação e os próximos passos.
            </div>
          `,
                    cancelButtonText: "X",
                    confirmButtonColor: "#08C1A7",
                    confirmButtonText: "Não recebi meu convite",
                    showCancelButton: !0,
                    customClass: {
                        confirmButton: "btn-confirm-new-dashboard-swal",
                        cancelButton: "btn-cancel-new-dashboard-swal"
                    }
                });
                if (!e)
                    return;
                B.fire({
                    html: `
            <div class="text-left pt5">
              <strong>Sentimos muito!</strong>
              <img src="${Z}">
              <br><br>
              Devido à alta demanda, algumas solicitações ainda não foram processadas.
              <br><br>
              Fique tranquilo(a) já estamos comunicando nosso time para priorizarem o contato com você.
            </div>
          `,
                    cancelButtonText: "X",
                    confirmButtonColor: "#08C1A7",
                    confirmButtonText: "Fechar mensagem",
                    showCancelButton: !0,
                    customClass: {
                        confirmButton: "btn-confirm-new-dashboard-swal",
                        cancelButton: "btn-cancel-new-dashboard-swal"
                    }
                })
            } catch {
                B.fire({
                    icon: "error",
                    title: "Sentimos muito",
                    text: "Não conseguimos finalizar sua solicitação devido a um problema desconhecido, nossa equipe técnica está trabalhando para resolver isso o mais rápido possível.",
                    confirmButtonColor: "#08c1a7"
                })
            }
        }
    }
}
  , Ye = {
    class: "new-dashboard"
}
  , Qe = {
    class: "new-dashboard__header"
};
function Xe(e, t, i, c, a, o) {
    const d = m("VueImage");
    return l(),
    u("div", Ye, [r("div", Qe, [r("h1", null, V(o.title), 1), r("h2", null, V(o.subtitle), 1), r("button", {
        class: "new-dashboard__button mt6 mb6",
        onClick: t[0] || (t[0] = (...g) => o.callToAction && o.callToAction(...g))
    }, [R(V(o.callToActionText) + " ", 1), t[1] || (t[1] = r("i", {
        class: "fa fa-arrow-right"
    }, null, -1))]), t[2] || (t[2] = r("h5", null, "*Os dados abaixo são ilustrativos, entre em contato com um de nossos consultores para saber como habilitar seu dashboard.", -1))]), n(d, {
        src: "new-dashboard.png",
        alt: "New Dashboard",
        class: "new-dashboard__image"
    })])
}
const Je = N(Ze, [["render", Xe]])
  , st = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Je
}, Symbol.toStringTag, {
    value: "Module"
}));
export {it as A, st as N, nt as e};
