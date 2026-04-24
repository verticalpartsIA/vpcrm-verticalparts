import {a1 as W, _ as ee, b5 as Ce, a0 as se, b4 as ms, r, o, c as m, b as a, p as x, e as b, H as w, bi as us, a as l, W as P, t as C, bn as ps, bo as gs, $ as et, ab as ft, a9 as Ie, d as Y, w as Z, a3 as bt, F as N, f as j, v as Se, m as hs, R as we, bt as Pe, V as _s, ae as fs, aa as oe, af as We, L as z, P as tt, u as T, bg as vt, as as yt, k as L, ag as wt, bj as Ne, bk as Me, b1 as bs, ai as dt, bR as Ct, y as xt, G as vs, cg as ys, a4 as ws, by as mt, a2 as Cs} from "./vendor-DIc2GtcL.js";
import {n4 as xs, n5 as ks, n6 as $s, n7 as kt, n8 as $t, ml as Ts, n1 as Ds, n9 as Ss, na as Ms, nb as Is, nc as Vs, nd as As, ne as Tt, nf as Fs, ng as Es, nh as Bs, ni as zs, t as X, nj as Dt, nk as Us, nl as Os, nm as Ls, d4 as ue, P as Ps, e3 as Ns, ar as js, nn as Ws, b5 as Hs, x as Rs, dE as qs, gN as ut, aM as Gs, gD as Ks, gE as Ys, E as Qs, u as He, ak as Zs, no as Js, np as Xs, an as St, S as Mt, b6 as st, hC as It, bg as pt, s as Re, nq as je, _ as ea, e as ta, mB as sa, mA as aa, nr as na, h0 as gt, ns as la, nt as ht, A as at, nu as ia, z as oa, ch as Vt, R as ra, nv as ca} from "./common-CYe7udOS.js";
import {M as da} from "./shared/group-modules-messaging/new-communication-DkL-Setg.js";
import {i as At} from "./vue-qrcode-qtjrIfKA.js";
import {w as ma, x as ua, y as pa} from "./shared/group-modules-journeys/group-modules-messaging-BxCD3VXD.js";
import {M as ga} from "./quill-mention-Bn9Wwih8.js";
const Ft = "/illustration-1-bcH9Ig5w.svg"
  , Ag = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ft
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Et = "/illustration-2-xcC-Tv4Z.svg"
  , Fg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Et
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Bt = "/illustration-3-fUQ-ZeTR.svg"
  , Eg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Bt
}, Symbol.toStringTag, {
    value: "Module"
}))
  , zt = "/illustration-error-BpE48-E6.svg"
  , Bg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zt
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ut = "/illustration-last-step-D9wNWAj9.svg"
  , zg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ut
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ha = {
    name: "messaging",
    components: {
        MessagingSidebar: xs,
        ChatContactInfo: ks,
        Chats: $s,
        ModalNoChannelFound: kt
    },
    props: {
        floatMode: {
            type: Boolean,
            default: !1
        }
    },
    async created() {
        this.getGroupedUsers(),
        Promise.all([this.loadSubscription(), this.handlerLoadChannels(), this.loadChannelStatus({
            channel: "whatsapp"
        })]).then( () => {
            this.loadingChannels = !1
        }
        )
    },
    data: () => ({
        loadingChannels: !0,
        loadingChannelsError: null,
        isActivating: !0
    }),
    beforeRouteLeave(e, t, n) {
        this.$store.commit("messaging/messages/setShowContactInfo", !1),
        n()
    },
    beforeUnmount() {
        localStorage.setItem("messagingSidebarFilter", JSON.stringify({
            statusFilter: this.statusFilter,
            situationFilter: this.situationFilter
        }))
    },
    computed: {
        ...ee({
            needsActivation: "messaging/messages/needsActivation",
            showContactInfo: "messaging/messages/showContactInfo",
            statusFilter: "messaging/chats/statusFilter",
            situationFilter: "messaging/chats/situationFilter",
            conversions: "messaging/openChat/conversions"
        }),
        ...Ce("messaging/channel", ["whatsappChannelStatus", "sandboxActive", "channels"])
    },
    methods: {
        ...se({
            loadListChannels: "messaging/channel/loadListChannels",
            loadChannels: "messaging/channel/loadChannels",
            loadChannelStatus: "messaging/channel/loadChannelStatus",
            loadSubscription: "limitsCenter/loadSubscription",
            toggleContactInfo: "messaging/messages/toggleContactInfo"
        }),
        ...ms($t, ["getGroupedUsers"]),
        async handlerLoadChannels() {
            this.loadingChannelsError = !1;
            try {
                await this.loadChannels({
                    reset: !0
                }),
                await this.loadListChannels()
            } catch (e) {
                this.loadingChannelsError = e
            }
        },
        async startVoiceCall(e) {
            const t = !!await Ts()
              , n = Ds(e.phone);
            return t ? this.$store.dispatch("setVoiceDialer", {
                phone: n,
                show: !0,
                id_deal: e.idEntity || null,
                type: e.type || null
            }) : this.$router.push({
                name: "voice.index"
            })
        }
    }
}
  , _a = {
    class: "messaging-page design-system"
}
  , fa = {
    key: 0,
    class: "messaging-wrapper"
}
  , ba = {
    key: 1,
    class: "text-center bg-white py-3"
}
  , va = {
    key: 2,
    class: "text-center bg-white p-3"
}
  , ya = {
    class: "text-gray-600 mb-3"
}
  , wa = {
    class: "text-gray-600 text-wrap"
};
function Ca(e, t, n, c, s, i) {
    const d = r("modal-no-channel-found")
      , u = r("messaging-sidebar")
      , h = r("chats")
      , _ = r("router-view")
      , p = r("ChatContactInfo")
      , g = r("VueImage");
    return o(),
    m("div", _a, [a(d, {
        show: e.channels.length < 1 && !e.needsActivation && !e.loadingChannels && !e.sandboxActive
    }, null, 8, ["show"]), !e.loadingChannels && !e.loadingChannelsError ? (o(),
    m("div", fa, [n.floatMode ? b("", !0) : (o(),
    x(u, {
        key: 0,
        floatMode: n.floatMode
    }, null, 8, ["floatMode"])), n.floatMode ? (o(),
    x(h, {
        key: 1,
        floatMode: n.floatMode
    }, null, 8, ["floatMode"])) : (o(),
    x(_, {
        key: 2,
        onStartVoiceCall: i.startVoiceCall
    }, null, 8, ["onStartVoiceCall"])), a(us, {
        name: "slide",
        mode: "out-in"
    }, {
        default: w( () => [a(p, {
            show: e.showContactInfo && !n.floatMode,
            conversions: e.conversions,
            key: "contact-info",
            onClose: e.toggleContactInfo,
            onStartVoiceCall: i.startVoiceCall
        }, null, 8, ["show", "conversions", "onClose", "onStartVoiceCall"])]),
        _: 1
    })])) : e.loadingChannels ? (o(),
    m("div", ba, [t[1] || (t[1] = l("i", {
        class: "fa fa-spin fa-spinner"
    }, null, -1)), P(" " + C(e.$t("messaging.loading")) + "... ", 1)])) : e.loadingChannelsError ? (o(),
    m("div", va, [l("div", ya, [a(g, {
        class: "ds-illustration unknown_error-illustration mb-3",
        src: "illustrations/unknown_error.svg",
        alt: "Illustrations Not Found"
    }), l("h6", wa, C(e.$t("messaging.loading_error")), 1)]), l("button", {
        class: "btn btn-sm btn-gray-200",
        onClick: t[0] || (t[0] = (...f) => i.handlerLoadChannels && i.handlerLoadChannels(...f))
    }, [t[2] || (t[2] = l("i", {
        class: "ds-icon icon-refresh-line me-1"
    }, null, -1)), P(" " + C(e.$t("messaging.try_again")), 1)])])) : b("", !0)])
}
const xa = W(ha, [["render", Ca], ["__scopeId", "data-v-fbb48fff"]])
  , Ug = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xa
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ka = {
    name: "messaging-contacts"
}
  , $a = {
    class: "messaging-contacts flex-fill d-flex flex-column bg-gray-100"
}
  , Ta = {
    class: "bg-white border-bottom px-3 d-flex align-items-center"
}
  , Da = {
    class: "mb-0 d-flex ms-5"
};
function Sa(e, t, n, c, s, i) {
    const d = r("router-link")
      , u = r("router-view");
    return o(),
    m("div", $a, [l("div", Ta, [t[0] || (t[0] = l("h6", {
        class: "mb-0 fw-semibold"
    }, "Contatos", -1)), l("ul", Da, [a(d, {
        class: "messaging-contacts__tab fw-semibold me-3 cursor-pointer pt-4 pb-2",
        to: {
            name: "messaging.contacts.deal",
            params: {
                type: "list"
            }
        }
    }, {
        default: w( () => [P(C(e.$t("deals.entities.PROSPECT")), 1)]),
        _: 1
    }), a(d, {
        class: "messaging-contacts__tab fw-semibold me-3 cursor-pointer pt-4 pb-2",
        to: {
            name: "messaging.contacts.deal",
            params: {
                type: "lead"
            }
        }
    }, {
        default: w( () => [P(C(e.$t("deals.entities.LEAD")), 1)]),
        _: 1
    }), a(d, {
        class: "messaging-contacts__tab fw-semibold me-3 cursor-pointer pt-4 pb-2",
        to: {
            name: "messaging.contacts.deal",
            params: {
                type: "opportunity"
            }
        }
    }, {
        default: w( () => [P(C(e.$t("deals.entities.OPPORTUNITY")), 1)]),
        _: 1
    }), a(d, {
        class: "messaging-contacts__tab fw-semibold me-3 cursor-pointer pt-4 pb-2",
        to: {
            name: "messaging.contacts.deal",
            params: {
                type: "after_sale"
            }
        }
    }, {
        default: w( () => [P(C(e.$t("deals.entities.AFTER_SALE")), 1)]),
        _: 1
    })])]), a(u)])
}
const Ma = W(ka, [["render", Sa], ["__scopeId", "data-v-6301e763"]])
  , Og = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ma
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ia = {
    emits: ["startVoiceCall"],
    name: "chats",
    components: {
        ChatItem: Ss,
        ChatFilterDropdown: Ms,
        Chat: Is,
        UserGroupFilter: Vs,
        NewChatMenu: As
    },
    directives: {
        clickOutside: ps.directive
    },
    data() {
        return {
            loadMore: !1,
            activeTab: null,
            showContactSearch: !1,
            tabs: [{
                index: 0,
                label: this.$t("messaging.filters.mine"),
                filter: "assigned"
            }, {
                index: 1,
                label: this.$t("messaging.filters.all.name"),
                filter: "all"
            }]
        }
    },
    mounted() {
        var e, t;
        this.registerWatchers(),
        (t = (e = this.permissions) == null ? void 0 : e["messaging.unassigned_chats"]) != null && t.read && this.tabs.push({
            index: 2,
            label: this.$t("messaging.filters.unassigned.name"),
            filter: "unassigned"
        })
    },
    created() {
        if (this.hasSandbox)
            this.selectFilter(this.tabs[1]);
        else {
            const e = JSON.parse(localStorage.getItem("messagingSidebarFilter") || "{}");
            e != null && e.statusFilter ? this.setStatusFilter(e.statusFilter) : this.setStatusFilter("assigned"),
            e != null && e.situationFilter && this.setSituationFilter(e.situationFilter);
            const t = this.$route.matched.find(c => c.name === "messaging.chats")
              , n = this.$route.params.chatId;
            !t && !this.floatMode && !this.hasSandbox && (n ? this.$router.push({
                name: "messaging.chat",
                params: {
                    chatId: n
                }
            }) : this.$router.push({
                name: "messaging.chats"
            }))
        }
        this.handlerLoadChats({
            reset: !0,
            resetCount: !0
        })
    },
    props: {
        floatMode: {
            type: Boolean,
            default: !1
        }
    },
    watch: {
        statusFilter: {
            handler(e) {
                const t = this.tabs.find(n => n.filter === e);
                t && this.selectFilter(t)
            }
        }
    },
    computed: {
        ...ee({
            chat: "messaging/openChat/chat",
            chats: "messaging/chats/chats",
            loading: "messaging/chats/loading",
            error: "messaging/chats/error",
            ended: "messaging/chats/ended",
            order: "messaging/chats/order",
            entity: "messaging/chats/entity",
            contact: "messaging/chats/contact",
            temperature: "messaging/chats/temperature",
            statusFilter: "messaging/chats/statusFilter",
            situationFilter: "messaging/chats/situationFilter",
            session: "messaging/chats/session",
            team: "messaging/chats/team",
            users: "messaging/chats/users",
            search: "messaging/chats/search",
            showNewChatMenu: "messaging/chats/showNewChatMenu",
            permissions: "permissions",
            isSidebarOpen: "sidebar/isPinned"
        }),
        ...Ce("messaging/channel", ["whatsappChannelStatus", "sandboxActive"]),
        ...gs($t, ["userAccessMultipleUsers"]),
        hasSandbox() {
            return this.sandboxActive
        },
        showSelectTeam() {
            return this.situationFilter !== "assigned" && this.situationFilter !== "unassigned"
        },
        tabClass() {
            return e => ({
                "header-chat-tabs--active shadow-sm": this.activeTab.index === e
            })
        }
    },
    methods: {
        ...se({
            loadChats: "messaging/chats/loadChats",
            setTemperature: "messaging/chats/setTemperature",
            setEntity: "messaging/chats/setEntity",
            setOrder: "messaging/chats/setOrder",
            setSearch: "messaging/chats/setSearch",
            setSession: "messaging/chats/setSession",
            openChat: "messaging/openChat/openChat",
            setStatusFilter: "messaging/chats/setStatusFilter",
            setSituationFilter: "messaging/chats/setSituationFilter"
        }),
        ...et({
            setChats: "messaging/chats/setChats"
        }),
        async toggleContactSearch(e) {
            var t, n, c, s;
            this.showContactSearch = !0,
            await this.$nextTick(),
            (s = (c = (n = (t = this.$refs) == null ? void 0 : t.contactSearchInput) == null ? void 0 : n.$refs) == null ? void 0 : c.input) == null || s.focus(),
            e.stopPropagation()
        },
        closeContactSearch() {
            this.showContactSearch && (this.showContactSearch = !1)
        },
        registerWatchers() {
            this.$watch(e => [e.statusFilter, e.situationFilter, e.team, e.users], () => {
                this.handlerLoadChats({
                    reset: !0
                }),
                this.setSession()
            }
            , {
                deep: !0
            })
        },
        async handlerLoadChats(e) {
            await this.loadChats(e),
            this.openFirstChatLoaded()
        },
        handleEntityFilter(e) {
            this.setEntity(e)
        },
        handleTemperatureFilter(e) {
            this.setTemperature(e)
        },
        handleSessionFilter(e) {
            this.setSession(e)
        },
        handleToggleOrder() {
            const e = this.order === "asc" ? "desc" : "asc";
            this.setOrder(e),
            this.handlerLoadChats({
                reset: !0
            })
        },
        handleContactFilter: ft.debounce(function(t) {
            this.setSearch(t),
            this.handlerLoadChats({
                reset: !0
            })
        }, 300),
        openFirstChatLoaded() {
            const {matched: e} = this.$route
              , [t] = this.chats
              , {$router: n} = this;
            this.floatMode && !this.chat && t && !this.sandboxActive ? this.openChat({
                chatId: t.id
            }) : this.floatMode || e.find(s => s.name === "messaging.chat" || s.name === "messaging.new_chat" || s.name === "messaging.chat_blank" || s.name === "messaging.chats_blank") || (t ? this.openChat({
                chatId: t.id,
                $router: n
            }) : n.replace({
                name: "messaging.chat_empty"
            }))
        },
        onScroll({target: {scrollTop: e, clientHeight: t, scrollHeight: n}}) {
            this.loadMore = !1,
            e + t + 1 >= n && (this.loadMore = !0,
            setTimeout( () => {
                this.loadMore && !this.loading && !this.error && this.chats.length && !this.ended && this.loadChats()
            }
            , 1e3))
        },
        selectFilter(e) {
            this.activeTab = e,
            this.setStatusFilter(e.filter)
        },
        handlerSubmit() {
            this.handlerLoadChats({
                reset: !0,
                resetCount: !0
            })
        }
    }
}
  , Va = {
    class: "flex-fill d-flex text-truncate"
}
  , Aa = {
    key: 0,
    class: "d-flex flex-column h-100 chats-container"
}
  , Fa = {
    key: 1,
    class: "position-relative px-2 mt-2 mb-2 d-flex justify-content-between align-items-center"
}
  , Ea = {
    class: "chats__sort pe-2 d-flex justify-content-end align-items-center small fw-semibold text-green-normal"
}
  , Ba = {
    class: "d-flex align-items-center"
}
  , za = {
    class: "d-flex align-items-center search-contact"
}
  , Ua = {
    class: "w-100 px-2 position-absolute start-0"
}
  , Oa = ["title"]
  , La = {
    key: 2,
    class: "text-center py-3 d-flex flex-column"
}
  , Pa = {
    key: 3,
    class: "text-center py-3"
}
  , Na = {
    class: "text-gray-600 mb-3",
    "data-testid": "error-text"
}
  , ja = {
    key: 0,
    class: "ms-1"
};
function Wa(e, t, n, c, s, i) {
    const d = r("UserGroupFilter")
      , u = r("chat-filter-dropdown")
      , h = r("DsButton")
      , _ = r("DsBadge")
      , p = r("DsInput")
      , g = r("chat-item")
      , f = r("DsIcon")
      , $ = r("DsTypography")
      , v = r("DsSubtitle")
      , y = r("NewChatMenu")
      , M = r("chat")
      , F = r("router-view")
      , O = Ie("click-outside");
    return o(),
    m("div", Va, [n.floatMode ? b("", !0) : (o(),
    m("div", {
        key: 0,
        class: Y(["chats-wrapper text-gray-700 bg-white h-100 border-end border-2", {
            "sidebar-open": e.isSidebarOpen
        }])
    }, [e.showNewChatMenu ? b("", !0) : (o(),
    m("div", Aa, [e.userAccessMultipleUsers ? (o(),
    x(d, {
        key: 0,
        class: "mt-2"
    })) : b("", !0), n.floatMode ? b("", !0) : (o(),
    m("div", Fa, [l("div", Ea, [l("span", null, C(e.$t(`messaging.order.${e.order}`)), 1), l("i", {
        class: "ds-icon icon-arrow-up-down-line ms-2 fs-4 cursor-pointer",
        onClick: t[0] || (t[0] = (...V) => i.handleToggleOrder && i.handleToggleOrder(...V))
    })]), l("div", Ba, [a(u, {
        onFilterSubmit: i.handlerSubmit,
        class: "me-1"
    }, null, 8, ["onFilterSubmit"]), l("div", za, [l("div", null, [a(h, {
        class: "search-contact__button position-relative",
        variant: "outline-green-normal",
        icon: "search-line",
        onClick: i.toggleContactSearch
    }, null, 8, ["onClick"]), e.search && !s.showContactSearch ? (o(),
    x(_, {
        key: 0,
        class: "search-contact__indicator m-0 p-1 position-absolute rounded-circle",
        bgColor: "green-normal",
        borderColor: "green-normal",
        textClass: "d-none",
        fontSize: "2",
        text: " "
    })) : b("", !0)]), Z((o(),
    m("div", Ua, [a(p, {
        ref: "contactSearchInput",
        class: "w-100 bg-white chat__filter",
        size: "md",
        modelValue: e.search,
        icon: "search-line",
        inputClass: "border-gray-600",
        placeholder: e.$t("messaging_template.list.search"),
        "onUpdate:modelValue": i.handleContactFilter
    }, null, 8, ["modelValue", "placeholder", "onUpdate:modelValue"])])), [[bt, s.showContactSearch], [O, i.closeContactSearch]])])])])), l("div", {
        onScroll: t[1] || (t[1] = (...V) => i.onScroll && i.onScroll(...V)),
        class: Y([this.floatMode ? "chat_float" : "min-vw-10", "chats__list__new mt-3 overflow-auto ds-scrollbar mx-2"])
    }, [l("ul", null, [(o(!0),
    m(N, null, j(e.chats, (V, B) => (o(),
    x(g, {
        key: V.id,
        chat: V,
        class: Y(["m-1", {
            "mb-3": B === 0,
            "my-3": B !== 0
        }]),
        floatMode: n.floatMode,
        "data-testid": "chat-item"
    }, null, 8, ["chat", "class", "floatMode"]))), 128)), !e.loading && !e.error && !e.chats.length ? (o(),
    m("li", {
        key: 0,
        class: "text-center py-3",
        title: e.$t("messaging.chats.empty")
    }, [n.floatMode ? (o(),
    x(f, {
        key: 0,
        icon: "checkbox-circle-line",
        class: "text-gray-500 fs-4"
    })) : (o(),
    x($, {
        key: 1,
        tag: "span",
        text: e.$t("messaging.chats.empty")
    }, null, 8, ["text"]))], 8, Oa)) : b("", !0), !e.loading && !e.error && e.chats.length && !e.ended ? (o(),
    x(h, {
        key: 1,
        class: "w-100 fw-semibold px-0",
        variant: "link",
        title: e.$t("messaging.load_more"),
        onClick: e.loadChats,
        "data-testid": "load-more"
    }, {
        default: w( () => [n.floatMode ? (o(),
        x(f, {
            key: 0,
            icon: "arrow-down-circle-line"
        })) : (o(),
        x($, {
            key: 1,
            tag: "span",
            text: e.$t("messaging.load_more")
        }, null, 8, ["text"]))]),
        _: 1
    }, 8, ["title", "onClick"])) : b("", !0), e.loading ? (o(),
    m("li", La, [a(f, {
        icon: "loader-4-line",
        class: "color-gray-500 ds-spinner"
    }), a($, {
        text: e.$t("messaging.loading"),
        color: "gray-500",
        fontWeight: "bold",
        fontSize: "4",
        class: "mb-0 py-2"
    }, null, 8, ["text"])])) : b("", !0), e.error && !e.loading ? (o(),
    m("li", Pa, [l("div", Na, [a(f, {
        title: e.$t("messaging.loading_error"),
        class: "mb-2",
        icon: "alert-line"
    }, null, 8, ["title"]), n.floatMode ? b("", !0) : (o(),
    x(v, {
        key: 0,
        color: "gray",
        text: e.$t("messaging.loading_error")
    }, null, 8, ["text"]))]), a(h, {
        variant: "gray-200",
        class: "btn-gray-200",
        title: e.$t("messaging.try_again"),
        onClick: e.loadChats
    }, {
        default: w( () => [a(f, {
            icon: "refresh-line"
        }), n.floatMode ? b("", !0) : (o(),
        m("span", ja, C(e.$t("messaging.try_again")), 1))]),
        _: 1
    }, 8, ["title", "onClick"])])) : b("", !0)])], 34)])), !n.floatMode && e.showNewChatMenu ? (o(),
    x(y, {
        key: 1,
        class: "h-100"
    })) : b("", !0)], 2)), n.floatMode ? (o(),
    x(M, {
        key: 1,
        floatMode: n.floatMode
    }, null, 8, ["floatMode"])) : (o(),
    x(F, {
        key: 2,
        onStartVoiceCall: t[2] || (t[2] = V => e.$emit("startVoiceCall", V))
    }))])
}
const Ha = W(Ia, [["render", Wa], ["__scopeId", "data-v-443a3163"]])
  , Lg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ha
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ra = {
    name: "chats-empty",
    computed: {
        ...Ce("messaging/channel", ["whatsappChannelStatus", "sandboxActive"]),
        channelStatus() {
            return this.$store.state.messaging.channel
        },
        isAnyChannelActivated() {
            return this.channelStatus.whatsappChannelStatus === "ACTIVATED" || this.channelStatus.sandboxActive
        }
    },
    methods: {
        ...et({
            setNewChatModal: "messaging/chats/setNewChatModal"
        }),
        handleNewChat(e) {
            this.whatsappChannelStatus === "ACTIVATED" ? this.setNewChatModal(e) : this.sandboxActive && this.$router.push({
                name: "messaging.chat_sandbox"
            })
        }
    }
}
  , qa = {
    class: "chat-empty-wrapper h-100"
}
  , Ga = {
    class: "d-flex align-items-center justify-content-center h-100"
}
  , Ka = {
    class: "p-3 rounded text-center"
}
  , Ya = {
    class: "mt-4"
};
function Qa(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("DsButton");
    return o(),
    m("div", qa, [l("div", Ga, [l("div", Ka, [l("div", Ya, [a(d, {
        class: "mb-4",
        text: e.$t("messaging.empty_chat_new"),
        size: "md"
    }, null, 8, ["text"]), a(u, {
        class: "m-auto",
        "data-testid": "new-chat-button",
        icon: "chat-4-line",
        text: e.$t("messaging.new_chat"),
        variant: "green-normal",
        onClick: t[0] || (t[0] = h => i.handleNewChat(!0)),
        disabled: !i.isAnyChannelActivated,
        size: "lg"
    }, null, 8, ["text", "disabled"])])])])])
}
const Za = W(Ra, [["render", Qa], ["__scopeId", "data-v-b55278df"]])
  , Pg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Za
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ja = {
    emits: ["startVoiceCall"],
    name: "messaging-chat",
    mixins: [Tt],
    components: {
        ChatMessages: Fs,
        ChatEditor: Es,
        ChatHeader: Bs,
        ChatsEmpty: zs
    },
    props: {
        chatId: {
            default: !1
        },
        floatMode: {
            type: Boolean,
            default: !1
        }
    },
    watch: {
        chatId() {
            this.handlerOpenChat()
        }
    },
    mounted() {
        this.handlerOpenChat()
    },
    data() {
        return {
            temperature: null,
            showSandboxChat: !1,
            showChatContactInfo: !1
        }
    },
    computed: {
        ...Ce("messaging/channel", ["whatsappChannelStatus", "sandboxActive", "metaBlocked", "metaViolation"]),
        ...ee({
            chat: "messaging/openChat/chat",
            error: "messaging/openChat/error",
            chatLoaded: "messaging/openChat/chatLoaded",
            chatLoading: "messaging/openChat/chatLoading",
            showContactInfo: "messaging/messages/showContactInfo",
            hasVoiceExtension: "voice/hasVoiceExtension"
        }),
        chatErrorStatus() {
            var e, t, n;
            return (n = (t = (e = this.error) == null ? void 0 : e.chat) == null ? void 0 : t.response) == null ? void 0 : n.status
        }
    },
    methods: {
        ...se({
            loadChat: "messaging/openChat/loadChat",
            closeChat: "messaging/openChat/closeChat",
            toggleContactInfo: "messaging/messages/toggleContactInfo",
            goToInbox: "messaging/openChat/goToInbox"
        }),
        handlerOpenChat() {
            this.loadChat && this.chatId && (this.loadChat({
                chatId: this.chatId
            }),
            this.showSandboxChat = !1)
        },
        async talkToSales() {
            this.loadingTalk = !0,
            X.track("activation_page_sandbox_whatsapp - Hand raised clicked");
            const {phone: e, site: t, modalDismiss: n} = await this.modalGetUserDetails();
            if (n)
                return this.loadingTalk = !1,
                !1;
            const c = this.feature;
            if (!c)
                return !1;
            const s = {
                type: "upgrade",
                item_fk_id: c.plan,
                featureName: this.$t(`freemium.block_modal.${c.name}.title`),
                phone: e,
                site: t
            };
            try {
                X.track("activation_page_sandbox_whatsapp", {
                    ...s,
                    buttonType: "SGM"
                }),
                await Dt(s),
                this.$notification.notify({
                    type: "success",
                    title: this.$t("plans.request_sent_modal.title"),
                    text: this.$t("plans.request_sent_modal.description")
                })
            } catch {
                this.$notification.notifyError("freemium.block_modal.messages.error")
            } finally {
                this.loadingTalk = !1
            }
            return !0
        },
        redirectToPolicy() {
            window.open("https://www.whatsapp.com/legal/business-policy/?lang=pt_br#:~:text=Se%20voc%C3%AA%20usar%20os%20Cat%C3%A1logos,os%20servi%C3%A7os%20do%20WhatsApp%20Business", "_blank")
        },
        goToChannelEvents() {
            this.$router.push({
                name: "messaging.channel.config",
                params: {
                    id: this.chat.last_id_channel
                }
            })
        }
    }
}
  , Xa = {
    class: "messaging-chat flex-fill text-gray-700 h-100 text-truncate"
}
  , en = {
    key: 0,
    class: "d-flex flex-column h-100"
}
  , tn = {
    class: "flex-fill overflow-auto ds-scrollbar d-flex chat-bg min-vw-10 border-top border-gray-400"
}
  , sn = {
    class: "flex-fill h-100 d-flex flex-column"
}
  , an = {
    key: 0,
    class: "sandbox-header"
}
  , nn = {
    class: "d-flex align-items-center"
}
  , ln = {
    class: "p-2"
}
  , on = {
    key: 1,
    class: "blocked-header"
}
  , rn = {
    class: "d-flex align-items-center"
}
  , cn = {
    class: "px-1 d-flex"
}
  , dn = {
    key: 2,
    class: "violation-header"
}
  , mn = {
    class: "d-flex align-items-center"
}
  , un = {
    class: "px-1 d-flex"
}
  , pn = {
    class: "messaging-chat__editor-container"
}
  , gn = {
    key: 1,
    class: "h-100"
}
  , hn = {
    class: "d-flex justify-content-center align-items-center bg-gray-200 h-100"
}
  , _n = {
    key: 0,
    class: "p-3 rounded text-center"
}
  , fn = {
    class: "row justify-content-center mt-3 text-gray-600"
}
  , bn = {
    class: "col-md-8 text-wrap"
}
  , vn = {
    key: 1,
    class: "p-3 rounded text-center"
}
  , yn = {
    class: "row justify-content-center mt-3 text-gray-600"
}
  , wn = {
    class: "col-md-8 text-wrap"
}
  , Cn = {
    key: 2,
    class: "p-3 rounded text-center"
}
  , xn = {
    class: "row justify-content-center mt-3 text-gray-600"
}
  , kn = {
    class: "col-md-8 text-wrap"
}
  , $n = {
    key: 2,
    class: "h-100"
}
  , Tn = {
    class: "d-flex justify-content-center align-items-center bg-gray-200 h-100"
}
  , Dn = {
    class: "text-center"
}
  , Sn = {
    class: "mb-0 mt-3 fw-semibold text-gray-600"
};
function Mn(e, t, n, c, s, i) {
    var v;
    const d = r("chat-header")
      , u = r("DsIcon")
      , h = r("DsTypography")
      , _ = r("DsButton")
      , p = r("chat-messages")
      , g = r("chat-editor")
      , f = r("VueImage")
      , $ = r("chats-empty");
    return o(),
    m("div", Xa, [e.chatLoaded && e.chat ? (o(),
    m("div", en, [a(d, {
        floatMode: n.floatMode,
        onStartVoiceCall: t[0] || (t[0] = y => e.$emit("startVoiceCall", y))
    }, null, 8, ["floatMode"]), l("div", tn, [l("div", sn, [e.sandboxActive && ((v = e.chat) == null ? void 0 : v.channel_type) === "whatsapp-sandbox" ? (o(),
    m("div", an, [l("div", nn, [a(u, {
        icon: "whatsapp-line",
        class: "text-orange-normal fs-6 ps-2"
    }), l("div", null, [a(h, {
        text: "Inicie novas conversas e desbloqueie todas as funcionalidades!",
        class: "ps-3",
        fontWeight: "bold",
        fontSize: "4"
    })])]), l("div", ln, [a(_, {
        variant: "orange-normal",
        text: "Assine agora",
        icon: "lock-line",
        onClick: i.talkToSales,
        size: "md"
    }, null, 8, ["onClick"])])])) : e.metaBlocked ? (o(),
    m("div", on, [l("div", rn, [a(u, {
        icon: "close-circle-line",
        class: "text-red-normal fs-6 ms-1"
    }), l("div", null, [a(h, {
        text: e.$t("messaging.chats.blocked_header.description"),
        class: "ps-3",
        fontWeight: "bold",
        fontSize: "1"
    }, null, 8, ["text"])])]), l("div", cn, [a(_, {
        class: "fs-2",
        variant: "outline-red-normal",
        text: e.$t("messaging.chats.blocked_header.view_events"),
        icon: "history-line",
        onClick: i.goToChannelEvents,
        size: "sm"
    }, null, 8, ["text", "onClick"]), a(_, {
        class: "text-red-normal text-decoration-underline fs-2",
        variant: "",
        text: e.$t("messaging.chats.blocked_header.policy"),
        onClick: i.redirectToPolicy,
        size: "sm"
    }, null, 8, ["text", "onClick"])])])) : e.metaViolation ? (o(),
    m("div", dn, [l("div", mn, [a(u, {
        icon: "alert-line",
        class: "text-yellow-dark fs-6 ms-1"
    }), l("div", null, [a(h, {
        text: e.$t("messaging.chats.violation_header.description"),
        class: "ps-3",
        fontWeight: "bold",
        fontSize: "1"
    }, null, 8, ["text"])])]), l("div", un, [a(_, {
        class: "fs-2",
        variant: "outline-yellow-dark",
        text: e.$t("messaging.chats.violation_header.view_events"),
        icon: "history-line",
        onClick: i.goToChannelEvents,
        size: "sm"
    }, null, 8, ["text", "onClick"]), a(_, {
        class: "text-yellow-dark text-decoration-underline fs-2",
        variant: "",
        text: e.$t("messaging.chats.violation_header.policy"),
        onClick: i.redirectToPolicy,
        size: "sm"
    }, null, 8, ["text", "onClick"])])])) : b("", !0), a(p), l("div", pn, [a(g, {
        floatMode: n.floatMode,
        contactInfo: s.showChatContactInfo
    }, null, 8, ["floatMode", "contactInfo"])])])])])) : e.error && e.error.chat ? (o(),
    m("div", gn, [l("div", hn, [i.chatErrorStatus === 404 ? (o(),
    m("div", _n, [a(f, {
        class: "ds-illustration mb-3",
        src: "illustrations/not_found.svg",
        alt: "Illustrations Not Found"
    }), t[1] || (t[1] = l("h5", {
        class: "mb-0 fw-semibold text-gray-600"
    }, "Ops", -1)), l("div", fn, [l("div", bn, C(e.$t("messaging.chat.not_found")), 1)])])) : i.chatErrorStatus === 403 ? (o(),
    m("div", vn, [a(f, {
        class: "ds-illustration mb-3",
        src: "illustrations/forbidden.svg",
        alt: "Illustrations Not Found"
    }), t[2] || (t[2] = l("h5", {
        class: "mb-0 fw-semibold text-gray-600"
    }, "Ops", -1)), l("div", yn, [l("div", wn, C(e.$t("messaging.chat.forbidden")), 1)])])) : (o(),
    m("div", Cn, [a(f, {
        class: "ds-illustration mb-3",
        src: "illustrations/unknown_error.svg",
        alt: "Illustrations Not Found"
    }), t[3] || (t[3] = l("h5", {
        class: "mb-0 fw-semibold text-gray-600"
    }, "Ops", -1)), l("div", xn, [l("div", kn, C(e.$t("messaging.chat.unknown_error")), 1)])]))])])) : e.chatLoading ? (o(),
    m("div", $n, [l("div", Tn, [l("div", Dn, [t[4] || (t[4] = l("i", {
        class: "fa fa-spin fa-spinner fs-6 text-gray-600"
    }, null, -1)), l("h6", Sn, C(e.$t("messaging.loading")) + "... ", 1)])])])) : (o(),
    x($, {
        key: 3
    }))])
}
const In = W(Ja, [["render", Mn], ["__scopeId", "data-v-243621a0"]])
  , Ng = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: In
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Vn = {
    name: "new-chat",
    components: {
        ModalTemplates: Us,
        MostUsedTemplates: da,
        ModalChannels: Os
    },
    props: {
        phone: {
            default: ""
        },
        id_channel: {
            default: null
        }
    },
    async created() {
        this.id_channel ? (this.id_user_channel = this.id_channel,
        await this.handlerExistChat()) : (this.channels.length === 1 && (this.id_user_channel = this.channels[0].id,
        await this.handlerExistChat()),
        !this.id_user_channel > 0 && (this.showModalChannels = !0))
    },
    watch: {
        id_channel: {
            handler: async function() {
                this.id_user_channel = this.id_channel,
                await this.handlerSelectChannel(this.id_channel)
            }
        }
    },
    data() {
        return {
            templateSelected: null,
            templateMessage: null,
            templateParams: null,
            showTemplateModal: !1,
            showModalChannels: !1,
            htmlMessage: "",
            loading: !1,
            fileMessage: {},
            id_user_channel: this.id_channel,
            validatedTemplates: [],
            entityData: null
        }
    },
    computed: {
        ...ee(["company", "user"]),
        ...ee({
            mostUsedTemplates: "messaging/template/mostUsedTemplates",
            templates: "messaging/template/templates",
            channels: "messaging/channel/channels"
        }),
        name() {
            return this.$route.query.name
        },
        entity() {
            return this.$route.query.entity
        },
        idEntity() {
            return this.$route.query.idEntity
        },
        idParent() {
            return this.$route.query.idParent
        },
        chatObj() {
            return {
                contact_name: this.name ? this.name : null,
                id_entity: this.idEntity ? this.idEntity : null,
                phone: this.phone ? this.phone : null,
                entity: this.idEntity && this.entity ? this.entity.toUpperCase() : null
            }
        },
        formIsInvalid() {
            const {templateSelected: e} = this;
            let t = null;
            return this.isWhatsappWeb ? this.htmlMessage || (t = "message_error") : e || (t = "template.select_error"),
            t
        },
        messageData() {
            const {htmlMessage: e, templateSelected: t, templateMessage: n, templateParams: c} = this
              , s = n || e
              , i = {
                id: t == null ? void 0 : t.id,
                id_template: t == null ? void 0 : t.template_id,
                params: c == null ? void 0 : c.map(d => d.text),
                payload: (t == null ? void 0 : t.payload) || null
            };
            return {
                message: s,
                template: i
            }
        },
        payload() {
            const {templateSelected: e} = this;
            return (e == null ? void 0 : e.payload) || null
        },
        templateDataUrl() {
            const {templateSelected: e} = this;
            return e != null && e.payload ? `/api/v2/messages/templates/${e.id}/media` : ""
        },
        templateType() {
            const {templateSelected: e} = this;
            return e == null ? void 0 : e.template_type.toLowerCase()
        },
        isWhatsappWeb() {
            const e = this.channels.find(t => t.id === Number(this.id_user_channel));
            return e && e.type === "whatsapp-web"
        }
    },
    methods: {
        ...se({
            openChat: "messaging/openChat/openChat",
            loadChat: "messaging/openChat/loadChat",
            createChat: "messaging/chats/createChat",
            createMessage: "messaging/messages/createMessage",
            createFileMessage: "messaging/messages/createFileMessage",
            loadTemplates: "messaging/template/loadTemplates"
        }),
        ...et({
            setModalPlans: "STATE/SET_MODAL_PLANS"
        }),
        async handlerExistChat() {
            const {$router: e} = this;
            let t = this.phone.replace(/\D/g, "");
            (!t.startsWith("55") || t.length <= 11) && (t = `55${t}`);
            const n = this.id_user_channel || this.id_channel
              , s = (await Ls(t, n)).find(i => i.status !== "closed");
            s && s.id && this.openChat({
                chatId: s.id,
                $router: e
            })
        },
        handlerSelectTemplate(e) {
            this.templateMessage = e.message,
            this.templateParams = e.params,
            this.templateSelected = e.template,
            this.showTemplateModal = !1
        },
        async handlerSelectChannel(e) {
            this.id_user_channel = e.value ? e.value : e,
            this.showModalChannels = !1,
            await this.handlerExistChat()
        },
        async handlerCreateMessage() {
            var e, t, n, c;
            if (!this.loading) {
                if (this.formIsInvalid) {
                    this.$notification.notify({
                        type: "error",
                        title: "Ops",
                        text: this.$t(`messaging.chat.chat_editor.${this.formIsInvalid}`)
                    });
                    return
                }
                try {
                    this.loading = !0;
                    const s = this.phone.replace(/\D/g, "")
                      , {chat: i} = await this.createChat({
                        phone: s,
                        entity: this.entity,
                        id_entity: this.idEntity,
                        contact_name: this.name,
                        id_parent: this.idParent,
                        id_channel: this.id_user_channel || this.id_channel
                    });
                    await this.loadChat({
                        chatId: i.id
                    });
                    const {message: d, template: u} = this.messageData;
                    if (this.isWhatsappWeb) {
                        await this.createMessage({
                            htmlMessage: d
                        }),
                        this.cleanForm(),
                        this.loading = !1;
                        const {$router: _} = this;
                        this.openChat({
                            chatId: i.id,
                            $router: _
                        }),
                        ue.$emit("communicationFinished");
                        return
                    }
                    if (u.payload) {
                        const p = {
                            key: u.payload.key
                        };
                        let g = (t = (e = this.fileMessage) == null ? void 0 : e.type) == null ? void 0 : t.split("/")[0];
                        ["image", "img", "video", "audio"].includes(g) || (g = "document"),
                        await this.createFileMessage({
                            caption: d || "",
                            template: u,
                            media: p,
                            type: g,
                            isNewFile: !1
                        })
                    } else
                        await this.createMessage({
                            htmlMessage: d,
                            template: u
                        });
                    this.cleanForm(),
                    this.loading = !1;
                    const {$router: h} = this;
                    this.openChat({
                        chatId: i.id,
                        $router: h
                    }),
                    ue.$emit("communicationFinished")
                } catch (s) {
                    if (s.message === "limit reached") {
                        const i = Ps.workflows.whatsappLimitReached;
                        this.setModalPlans({
                            open: !0,
                            plan: i,
                            ctaButtonText: i.ctaButtonText
                        })
                    }
                    if (s.message === "invalid_phone_format" && this.$notification.notify({
                        type: "error",
                        title: "Ops",
                        text: this.$t("messaging.chat.chat_editor.send_error.invalid_number")
                    }),
                    ((c = (n = s.response) == null ? void 0 : n.data) == null ? void 0 : c.type) === "UNSUBSCRIBED_CONTACT") {
                        this.$notification.notifyError("history.messages.error.unsubscribed_phone");
                        return
                    }
                    this.$notification.notify({
                        type: "error",
                        title: "Ops",
                        text: this.$t("messaging.chat.chat_editor.send_error.standard")
                    })
                } finally {
                    this.loading = !1
                }
            }
        },
        getFileSize(e) {
            if (e === 0)
                return "0 Bytes";
            const t = 1024
              , n = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
              , c = Math.floor(Math.log(e) / Math.log(t));
            return `${parseFloat((e / t ** c).toFixed(2))} ${n[c]}`
        },
        cleanForm() {
            this.htmlMessage = "",
            this.templateMessage = "",
            this.templateSelected = null,
            this.templateParams = null
        }
    }
}
  , An = {
    class: "messaging-chat flex-fill text-gray-700 h-100 text-truncate"
}
  , Fn = {
    class: "d-flex flex-column h-100"
}
  , En = {
    class: "chat-header-wrapper bg-white border-bottom d-flex align-items-center"
}
  , Bn = {
    class: "text-truncate"
}
  , zn = {
    class: "chat-header__contact-name fw-semibold mb-0 text-truncate"
}
  , Un = {
    class: "chat-header__phone-number mb-0 text-truncate"
}
  , On = {
    class: "flex-fill overflow-auto ds-scrollbar d-flex bg-gray-200"
}
  , Ln = {
    class: "flex-fill h-100 w-100 d-flex flex-column"
}
  , Pn = {
    class: "p-5 h-100 d-flex flex-column align-items-center justify-content-center"
}
  , Nn = {
    class: "text-center"
}
  , jn = {
    key: 0,
    class: "w-75 mt-2"
}
  , Wn = {
    class: "text-center mb-2"
}
  , Hn = {
    class: "messaging-chat__editor-container bg-white bg-gray-200 pb-3"
}
  , Rn = {
    class: "chat-editor bg-white rounded border"
}
  , qn = {
    class: "chat-editor__template border-top p-3"
}
  , Gn = {
    class: "chat-editor__template__content"
}
  , Kn = ["placeholder"]
  , Yn = ["innerHTML"]
  , Qn = {
    key: 2,
    class: "text-gray-600"
}
  , Zn = {
    key: 3,
    class: "d-flex mt-4 media-message"
}
  , Jn = {
    class: "d-flex align-items-center file-data"
}
  , Xn = ["src"]
  , el = {
    class: "chat-editor__footer border-top d-flex justify-content-end align-items-center p-3"
};
function tl(e, t, n, c, s, i) {
    const d = r("DsIcon")
      , u = r("DsTypography")
      , h = r("MostUsedTemplates")
      , _ = r("DsButton")
      , p = r("modal-templates")
      , g = r("modal-channels");
    return o(),
    m("div", An, [l("div", Fn, [l("div", En, [l("div", Bn, [l("h5", zn, C(i.name), 1), l("h6", Un, C(this.phone), 1)])]), l("div", On, [l("div", Ln, [l("div", Pn, [l("div", Nn, [a(d, {
        icon: "user-star-line",
        class: "fs-9"
    }), a(u, {
        color: "gray-600",
        text: e.$t("messaging.chat.send_first_message"),
        fontSize: "3",
        fontWeight: "bold"
    }, null, 8, ["text"]), a(u, {
        color: "gray-600",
        text: this.name || this.phone,
        fontSize: "3",
        fontWeight: "bold"
    }, null, 8, ["text"])]), e.mostUsedTemplates.length > 1 && !i.isWhatsappWeb ? (o(),
    m("div", jn, [l("div", Wn, [a(u, {
        color: "gray-700",
        tag: "span",
        text: e.$t("messaging.chat.most_used_templates"),
        fontSize: "4",
        fontWeight: "bold",
        class: "mb-2"
    }, null, 8, ["text"])]), a(h, {
        onSelectTemplate: i.handlerSelectTemplate
    }, null, 8, ["onSelectTemplate"])])) : b("", !0)]), l("div", Hn, [l("div", Rn, [l("div", qn, [l("div", Gn, [i.isWhatsappWeb ? Z((o(),
    m("textarea", {
        key: 0,
        class: "form-control border-0 bg-transparent resize-none",
        placeholder: e.$t("messaging.chat.chat_editor.write_message"),
        "onUpdate:modelValue": t[0] || (t[0] = f => s.htmlMessage = f),
        rows: "3"
    }, null, 8, Kn)), [[Se, s.htmlMessage]]) : s.templateMessage ? (o(),
    m("div", {
        key: 1,
        innerHTML: s.templateMessage
    }, null, 8, Yn)) : (o(),
    m("span", Qn, C(e.$t("messaging.chat.chat_editor.template.placeholder")), 1)), i.payload ? (o(),
    m("div", Zn, [l("div", Jn, [i.templateType === "image" ? (o(),
    m("img", {
        key: 0,
        class: "m-2 media-sm border",
        src: i.templateDataUrl
    }, null, 8, Xn)) : i.templateType === "document" ? (o(),
    x(d, {
        key: 1,
        class: "m-0 media-sm text-red-normal",
        icon: "file-line"
    })) : i.templateType === "video" ? (o(),
    x(d, {
        key: 2,
        class: "m-0 media-sm text-blue-normal",
        icon: "video-line"
    })) : b("", !0), a(u, {
        text: i.payload.name,
        class: "mx-2 m-0 file-text",
        fontSize: "1",
        color: "black"
    }, null, 8, ["text"]), a(u, {
        text: `(${i.getFileSize(i.payload.size)})`,
        class: "m-1",
        fontSize: "1",
        color: "gray"
    }, null, 8, ["text"])])])) : b("", !0)])]), l("div", el, [i.isWhatsappWeb ? b("", !0) : (o(),
    x(_, {
        key: 0,
        icon: "add-circle-line",
        variant: "link",
        size: "sm",
        class: "text-green-normal me-2",
        text: e.$t("messaging.menu_header.template"),
        onClick: t[1] || (t[1] = f => s.showTemplateModal = !0)
    }, null, 8, ["text"])), a(_, {
        size: "sm",
        class: "chat-editor__footer__send ms-3",
        rightIcon: "send-plane-line",
        loading: s.loading,
        text: s.loading ? e.$t("messaging.chat.chat_editor.sending") : e.$t("messaging.chat.chat_editor.send"),
        onClick: i.handlerCreateMessage
    }, null, 8, ["loading", "text", "onClick"])])])])])])]), a(p, {
        show: s.showTemplateModal,
        onSelect: i.handlerSelectTemplate,
        onClose: t[2] || (t[2] = f => s.showTemplateModal = !1),
        chat: i.chatObj,
        id_channel: s.id_user_channel
    }, null, 8, ["show", "onSelect", "chat", "id_channel"]), a(g, {
        show: s.showModalChannels,
        onSelect: i.handlerSelectChannel,
        onClose: t[3] || (t[3] = f => s.showModalChannels = !1)
    }, null, 8, ["show", "onSelect"])])
}
const sl = W(Vn, [["render", tl], ["__scopeId", "data-v-1be1d854"]])
  , jg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , al = {
    name: "messaging-deal",
    components: {
        MAccordion: Ns,
        MUserInitials: js
    },
    props: {
        type: {
            type: String,
            required: !0
        },
        id_channel: {
            type: Number,
            default: null
        }
    },
    watch: {
        type() {
            this.limit = 25,
            this.order = "desc",
            this.order_field = "id",
            this.search = "",
            this.deals = [],
            this.ended = !1,
            this.loadDeals()
        }
    },
    created() {
        this.loadDeals()
    },
    data() {
        return {
            loading: !1,
            ended: !1,
            limit: 25,
            search: "",
            order: "asc",
            order_field: "id",
            deals: []
        }
    },
    methods: {
        ...se({
            openNewChat: "messaging/openChat/openNewChat"
        }),
        async handlerCreateChat(e, t) {
            try {
                const {$router: n} = this;
                this.openNewChat({
                    phone: t.phone,
                    $router: n,
                    name: t.name,
                    entity: e.type,
                    idEntity: e.id,
                    id_channel: this.id_channel
                })
            } catch {
                this.$notification.notifyError("messaging.error.invalid_phone")
            }
        },
        async loadDeals(e) {
            this.loading = !0;
            try {
                const {order: t, limit: n, order_field: c} = this
                  , s = this.deals.length
                  , {deals: i} = await Ws(this.type, {
                    params: {
                        query: e,
                        order: t,
                        order_field: c,
                        limit: n
                    }
                });
                this.deals = i.map(d => ({
                    ...d,
                    contacts: []
                })),
                this.limit += 25,
                i.length === s && !e ? this.ended = !0 : this.ended = !1
            } catch {
                this.$notification.notifyError("messaging.error.load")
            } finally {
                this.loading = !1
            }
        },
        async loadContacts(e) {
            if (e.contacts.length)
                return;
            const t = await Hs({
                id: e.id,
                type: this.type
            });
            e.contacts = t.map(n => {
                var s, i;
                const c = (i = (s = n == null ? void 0 : n.parameters) == null ? void 0 : s.phones[0]) == null ? void 0 : i.number;
                return {
                    ...n,
                    phone: c
                }
            }
            )
        },
        handlerSearch(e) {
            this.limit = 10,
            this.loadDeals(e.target.value)
        },
        changeOrder() {
            this.order = this.order === "asc" ? "desc" : "asc",
            this.loadDeals(this.search)
        }
    }
}
  , nl = {
    class: "messaging-deal flex-fill overflow-auto d-flex flex-column bg-gray-100"
}
  , ll = {
    class: "px-3 mt-3 d-flex align-items-center small fw-semibold text-uppercase text-gray-600"
}
  , il = {
    class: "ms-auto"
}
  , ol = {
    class: "d-flex align-items-center bg-gray-200 rounded-3 px-3 py-2 py-2 w-100"
}
  , rl = ["placeholder"]
  , cl = {
    class: "flex-fill p-3 overflow-auto ds-scrollbar"
}
  , dl = {
    key: 0
}
  , ml = {
    key: 0,
    class: "row"
}
  , ul = {
    class: "border shadow-sm p-3 rounded"
}
  , pl = {
    key: 0,
    class: "ds-icon icon-star-fill text-secondary float-end",
    title: "Principal"
}
  , gl = {
    class: "d-flex align-items-center mb-4"
}
  , hl = {
    class: "ms-3"
}
  , _l = {
    class: "fw-semibold mb-0"
}
  , fl = {
    class: "text-gray-600"
}
  , bl = {
    class: "mb-3"
}
  , vl = {
    class: "fw-semibold text-gray-500"
}
  , yl = {
    class: "fw-semibold"
}
  , wl = ["onClick"]
  , Cl = {
    key: 1,
    class: "text-center p-3"
}
  , xl = {
    key: 1,
    class: "text-center p-3"
}
  , kl = {
    key: 2,
    class: "text-center py-4"
};
function $l(e, t, n, c, s, i) {
    const d = r("m-user-initials")
      , u = r("router-link")
      , h = r("m-accordion");
    return o(),
    m("div", nl, [l("div", ll, [l("div", null, [l("i", {
        class: "ds-icon icon-arrow-up-down-line me-2 fs-6 cursor-pointer",
        onClick: t[0] || (t[0] = (..._) => i.changeOrder && i.changeOrder(..._))
    }), l("span", null, C(e.$t("messaging.order.label")) + ": " + C(e.$t(`messaging.order.${s.order}`)), 1)]), l("div", il, [l("div", ol, [Z(l("input", {
        class: "flex-fill bg-transparent border-0 small outline-none",
        placeholder: e.$t("messaging.search"),
        "onUpdate:modelValue": t[1] || (t[1] = _ => s.search = _),
        onKeyup: t[2] || (t[2] = (..._) => i.handlerSearch && i.handlerSearch(..._))
    }, null, 40, rl), [[Se, s.search]]), t[4] || (t[4] = l("i", {
        class: "ds-icon icon-search-line ms-2"
    }, null, -1))])])]), l("div", cl, [s.deals.length ? (o(),
    m("div", dl, [(o(!0),
    m(N, null, j(s.deals, _ => (o(),
    x(h, {
        title: `${_.id} - ${_.name || "Sem nome"}`,
        withSlot: !0,
        key: _.id,
        onOpenAccordion: p => i.loadContacts(_)
    }, {
        default: w( () => [_.contacts.length ? (o(),
        m("div", ml, [(o(!0),
        m(N, null, j(_.contacts, p => (o(),
        m("div", {
            class: "col-md-4 mb-3 h-100",
            key: p.id
        }, [l("div", ul, [p.main === "1" ? (o(),
        m("i", pl)) : b("", !0), l("div", gl, [a(d, {
            userName: p.name || "S",
            size: "lg",
            class: "flex-shrink-0"
        }, null, 8, ["userName"]), l("div", hl, [l("div", _l, [a(u, {
            to: {
                name: `deal.${_.type.toLowerCase()}`,
                params: {
                    id: _.id,
                    typr: _.type.toLowerCase()
                }
            },
            class: "text-decoration-none"
        }, {
            default: w( () => [P(C(p.name) + " ", 1), t[5] || (t[5] = l("i", {
                class: "ds-icon icon-external-link-line ml-2"
            }, null, -1))]),
            _: 2,
            __: [5]
        }, 1032, ["to"])]), l("small", fl, C(p.job), 1)])]), l("div", bl, [l("h6", vl, C(e.$t("messaging.contact_info.phone")), 1), l("h6", yl, C(e.$filters.phone(p.phone || "Sem telefone")), 1)]), l("div", null, [p.phone ? (o(),
        m("button", {
            key: 0,
            onClick: g => i.handlerCreateChat(_, p),
            class: "btn btn-black btn-sm rounded px-3 border-1 fw-semibold me-3"
        }, [P(C(e.$t("messaging.message")) + " ", 1), t[6] || (t[6] = l("i", {
            class: "icon-send-plane-2-line ms-2 text-green-brand"
        }, null, -1))], 8, wl)) : b("", !0)])])]))), 128))])) : (o(),
        m("div", Cl, C(e.$t("messaging.no_records")), 1))]),
        _: 2
    }, 1032, ["title", "onOpenAccordion"]))), 128))])) : (o(),
    m("h6", xl, C(e.$t("messaging.no_records")), 1)), s.loading ? (o(),
    m("div", kl, t[7] || (t[7] = [l("i", {
        class: "fa fa-spin fa-spinner ms-2 fs-3"
    }, null, -1)]))) : b("", !0), !s.loading && !s.ended && !s.search ? (o(),
    m("button", {
        key: 3,
        class: "btn btn-link btn-block px-3 border-1 fw-semibold me-3",
        onClick: t[3] || (t[3] = _ => i.loadDeals())
    }, C(e.$t("messaging.load_more")), 1)) : b("", !0)])])
}
const Tl = W(al, [["render", $l]])
  , Wg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Tl
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Dl = {
    name: "steps-area",
    props: {
        steps: {
            type: Array,
            required: !0
        },
        currentStep: {
            type: [Number, String],
            required: !0
        }
    }
}
  , Sl = {
    class: "d-flex align-items-center steps-area-wrapper"
};
function Ml(e, t, n, c, s, i) {
    const d = r("DsParagraph");
    return o(),
    m("div", Sl, [(o(!0),
    m(N, null, j(n.steps, u => (o(),
    m("div", {
        key: u.index,
        class: "d-flex align-items-center"
    }, [a(d, {
        size: "sm",
        color: u.index === n.currentStep ? "black" : "text-gray-600",
        text: `${u.index + 1}. ${u.label}`,
        class: "fw-bold mb-0"
    }, null, 8, ["color", "text"])]))), 128))])
}
const Il = W(Dl, [["render", Ml], ["__scopeId", "data-v-8b214bbe"]])
  , Vl = {
    emits: ["submit", "next"],
    name: "tab-steps",
    components: {
        StepsArea: Il
    },
    props: {
        currentStep: {
            type: [Number, String],
            required: !0
        },
        steps: {
            type: Array,
            required: !0
        },
        disabled: {
            type: Boolean,
            default: !0
        },
        text: {
            type: String,
            default: function() {
                return Rs.global.t("channel_activation.messaging.activation.tab_steps.request_activation")
            }
        }
    },
    computed: {
        lastStep() {
            return this.steps.length === this.currentStep + 1
        }
    }
}
  , Al = {
    class: "bg-white border-top border-bottom"
};
function Fl(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("StepsArea")
      , h = r("DsButton")
      , _ = r("DsPageContainer");
    return o(),
    m("div", Al, [a(_, {
        class: "d-flex justify-content-between align-items-center py-2"
    }, {
        default: w( () => [a(d, {
            size: "md",
            text: n.text,
            class: "mb-0"
        }, null, 8, ["text"]), l("div", null, [a(u, {
            steps: n.steps,
            currentStep: n.currentStep
        }, null, 8, ["steps", "currentStep"])]), a(h, {
            text: e.$t("channel_activation.next"),
            rightIcon: "arrow-right-s-line",
            onClick: t[0] || (t[0] = p => i.lastStep ? e.$emit("submit") : e.$emit("next")),
            disabled: n.disabled,
            size: "lg"
        }, null, 8, ["text", "disabled"])]),
        _: 1
    })])
}
const Ot = W(Vl, [["render", Fl]])
  , El = {
    emits: ["back", "next", "disabled"],
    name: "card-activation",
    props: {
        currentStep: {
            type: [Number, String],
            required: !0
        },
        disabled: {
            type: Boolean,
            default: !0
        }
    },
    watch: {
        disabled() {
            this.$emit("disabled", this.disabled)
        }
    },
    mounted() {
        this.$emit("disabled", this.disabled)
    },
    computed: {
        stepInfos() {
            return {
                0: {
                    title: this.$t("channel_activation.messaging.activation.tab_steps.step_0"),
                    description: this.$t("channel_activation.messaging.activation.card.description_0")
                },
                1: {
                    title: this.$t("channel_activation.messaging.activation.tab_steps.step_1"),
                    description: this.$t("channel_activation.messaging.activation.card.description_1")
                },
                2: {
                    title: this.$t("channel_activation.messaging.activation.tab_steps.step_2"),
                    description: this.$t("channel_activation.messaging.activation.card.description_2")
                },
                3: {
                    title: this.$t("channel_activation.messaging.activation.tab_steps.step_3"),
                    description: this.$t("channel_activation.messaging.activation.card.description_3")
                }
            }[this.currentStep]
        }
    }
}
  , Bl = {
    class: "col-md-8 col-xl-6 mt-10 mb-10"
}
  , zl = {
    class: "shadow-lg bg-white rounded-1 p-5"
}
  , Ul = {
    class: "w-100 d-flex justify-content-end align-items-center mt-3"
};
function Ol(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("DsParagraph")
      , h = r("DsButton")
      , _ = Ie("sanitize-html");
    return o(),
    m("div", Bl, [l("div", zl, [a(d, {
        text: i.stepInfos.title,
        size: "md"
    }, null, 8, ["text"]), Z(a(u, {
        size: "md",
        class: "mb-4 lh-sm"
    }, null, 512), [[_, i.stepInfos.description]]), hs(e.$slots, "default")]), l("div", Ul, [n.currentStep > 0 ? (o(),
    x(h, {
        key: 0,
        text: e.$t("channel_activation.back"),
        size: "lg",
        class: "bg-transparent border-0 text-green-normal me-4",
        onClick: t[0] || (t[0] = p => e.$emit("back"))
    }, null, 8, ["text"])) : b("", !0), a(h, {
        rightIcon: "arrow-right-s-line",
        size: "lg",
        text: e.$t("channel_activation.next"),
        onClick: t[1] || (t[1] = p => e.$emit("next")),
        disabled: n.disabled
    }, null, 8, ["text", "disabled"])])])
}
const qe = W(El, [["render", Ol]])
  , Ll = "/company-verification-CnS77g-I.svg"
  , Pl = {
    emits: ["next", "back", "disabled", "helpAside"],
    name: "step-0",
    components: {
        CardActivation: qe
    },
    props: ["form"],
    computed: {
        disabled() {
            var e;
            return !((e = this.form) != null && e.acceptFacebookProcess)
        }
    }
}
  , Nl = {
    class: "mt-3"
}
  , jl = {
    href: "https://business.facebook.com/settings/security",
    target: "_blank",
    class: "text-blue-dark text-decoration-underline",
    rel: "noopener noreferrer"
}
  , Wl = {
    class: "mt-4"
}
  , Hl = {
    class: "mt-3"
}
  , Rl = {
    href: "https://www.facebook.com/business/help/1710077379203657?id=180505742745347&locale=pt_BR",
    target: "_blank",
    class: "text-blue-dark text-decoration-underline",
    rel: "noopener noreferrer"
}
  , ql = {
    href: "https://www.facebook.com/business/help/2058515294227817?id=180505742745347",
    target: "_blank",
    class: "text-blue-dark text-decoration-underline",
    rel: "noopener noreferrer"
}
  , Gl = {
    class: "mt-3"
}
  , Kl = {
    class: "mt-3 pt-4 border-top-1 border-end-0 border-start-0 border border-2 border-dark border-bottom-0"
};
function Yl(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("DsParagraph")
      , h = r("DsCheckbox")
      , _ = r("CardActivation");
    return o(),
    x(_, {
        currentStep: "0",
        disabled: i.disabled,
        onNext: t[1] || (t[1] = p => e.$emit("next")),
        onBack: t[2] || (t[2] = p => e.$emit("back")),
        onDisabled: t[3] || (t[3] = p => e.$emit("disabled", p))
    }, {
        default: w( () => [l("div", Nl, [a(d, {
            text: e.$t("channel_activation.messaging.activation.steps.step_0.stage_title"),
            size: "md",
            class: "lh-sm mb-0 mt-3 text-black text-lg"
        }, null, 8, ["text"]), a(u, {
            text: e.$t("channel_activation.messaging.activation.steps.step_0.stage_title_1"),
            size: "md",
            class: "lh-sm mb-0 mt-3 text-black text-lg fw-semibold"
        }, null, 8, ["text"]), a(u, {
            text: "",
            size: "sm",
            class: "lh-sm mb-0 mt-2 text-md fs-3"
        }, {
            default: w( () => [P(C(e.$t("channel_activation.messaging.activation.steps.step_0.stage_description_1")) + " ", 1), l("a", jl, C(e.$t("channel_activation.messaging.aside_steps.meta_business_create")), 1), P(" " + C(e.$t("channel_activation.messaging.activation.steps.step_0.stage_description_2")), 1)]),
            _: 1
        })]), l("div", Wl, [a(u, {
            text: e.$t("channel_activation.messaging.activation.steps.step_0.stage_title_2"),
            size: "md",
            class: "lh-sm mb-0 mt-3 text-black text-lg fw-semibold"
        }, null, 8, ["text"]), a(u, {
            text: e.$t("channel_activation.messaging.activation.steps.step_0.stage_description_3"),
            size: "sm",
            class: "lh-sm mb-0 mt-2 text-md fs-3"
        }, null, 8, ["text"])]), t[5] || (t[5] = l("div", {
            class: "mt-3"
        }, [l("img", {
            src: Ll,
            alt: "Company verification"
        })], -1)), l("div", Hl, [a(u, {
            text: "",
            size: "sm",
            class: "lh-sm mb-0 mt-3 text-md fs-3"
        }, {
            default: w( () => [P(C(e.$t("channel_activation.messaging.aside_steps.meta_business_verify")) + " ", 1), l("a", Rl, C(e.$t("channel_activation.messaging.aside_steps.meta_business_create")), 1), P(" " + C(e.$t("channel_activation.messaging.aside_steps.or")) + " ", 1), l("a", ql, C(e.$t("channel_activation.messaging.aside_steps.meta_business_config")), 1)]),
            _: 1
        })]), l("div", Gl, [a(u, {
            text: "",
            size: "sm",
            class: "fs-3",
            style: {
                display: "inline"
            }
        }, {
            default: w( () => [P(C(e.$t("channel_activation.messaging.activation.steps.step_0.help_leads2b")) + " ", 1), t[4] || (t[4] = l("span", {
                id: "supportCall_{index}",
                class: "text-blue-dark fw-semibold text-decoration-underline cursor-pointer",
                onclick: "window.openIntercomOnDomains"
            }, " suporte da Leads2b ", -1))]),
            _: 1,
            __: [4]
        })]), l("div", Kl, [a(h, {
            modelValue: n.form.acceptFacebookProcess,
            "onUpdate:modelValue": t[0] || (t[0] = p => n.form.acceptFacebookProcess = p),
            label: e.$t("channel_activation.messaging.activation.steps.step_0.facebook_process"),
            labelClass: "fs-3 text-gray-600"
        }, null, 8, ["modelValue", "label"])])]),
        _: 1,
        __: [5]
    }, 8, ["disabled"])
}
const Ql = W(Pl, [["render", Yl]])
  , Zl = {
    emits: ["next", "back", "disabled", "helpAside"],
    name: "step-1",
    components: {
        CardActivation: qe
    },
    data: () => ({
        openModal: !1
    }),
    props: ["form"],
    computed: {
        accountIsVerifiedBoolean() {
            var e;
            return {
                false: !1,
                true: !0
            }[(e = this.form) == null ? void 0 : e.accountIsVerified]
        },
        disabled() {
            var e;
            return !this.accountIsVerifiedBoolean || !((e = this.form) != null && e.acceptLGPDTerms)
        },
        hasAcceptedLGPDTerms() {
            var e;
            return (e = this.form) != null && e.acceptLGPDTerms ? "text-black" : "text-gray-600"
        }
    },
    watch: {
        "form.accountIsVerified": {
            handler(e) {
                e === "false" ? this.openModal = !0 : this.openModal = !1
            }
        }
    },
    activated() {
        const e = {
            color: "green-light",
            description: this.$t("channel_activation.messaging.activation.steps.step_1.activated_description"),
            icon: "checkbox-circle-line",
            image: "company-verification.svg",
            darkColor: "green-dark"
        };
        this.$emit("helpAside", e),
        this.$emit("disabled", this.disabled)
    }
}
  , Jl = {
    for: "radio-1",
    class: "d-flex mb-3"
}
  , Xl = {
    class: "mt-3"
}
  , ei = {
    key: 0,
    class: "d-flex justify-content-center w-100 bg-yellow-light py-1 mt-3 border-top-0 border-end-0 border-start-0 border border-2 border-dark"
}
  , ti = {
    href: "https://www.facebook.com/business/help/1710077379203657?id=180505742745347&locale=pt_BR",
    target: "_blank",
    class: "text-blue-dark text-decoration-underline",
    rel: "noopener noreferrer"
}
  , si = {
    href: "https://www.facebook.com/business/help/2058515294227817?id=180505742745347",
    target: "_blank",
    class: "text-blue-dark text-decoration-underline",
    rel: "noopener noreferrer"
}
  , ai = {
    class: "row w-100 mx-auto"
};
function ni(e, t, n, c, s, i) {
    const d = r("DsRadio")
      , u = r("DsBadge")
      , h = r("DsParagraph")
      , _ = r("DsCheckbox")
      , p = r("DsIcon")
      , g = r("DsButton")
      , f = r("DsModal")
      , $ = r("CardActivation");
    return o(),
    x($, {
        currentStep: "1",
        disabled: i.disabled,
        onNext: t[5] || (t[5] = v => e.$emit("next")),
        onBack: t[6] || (t[6] = v => e.$emit("back")),
        onDisabled: t[7] || (t[7] = v => e.$emit("disabled", v))
    }, {
        default: w( () => [l("div", null, [l("div", Jl, [a(d, {
            id: "radio-1",
            name: "have-account-verified",
            modelValue: n.form.accountIsVerified,
            "onUpdate:modelValue": t[0] || (t[0] = v => n.form.accountIsVerified = v),
            inputValue: "true",
            label: e.$t("channel_activation.messaging.activation.steps.step_1.radio_1_label")
        }, null, 8, ["modelValue", "label"]), a(u, {
            text: e.$t("channel_activation.messaging.activation.steps.step_1.radio_1_badge"),
            rightIcon: "shield-line"
        }, null, 8, ["text"])]), a(d, {
            id: "radio-2",
            name: "have-account-verified",
            modelValue: n.form.accountIsVerified,
            "onUpdate:modelValue": t[1] || (t[1] = v => n.form.accountIsVerified = v),
            inputValue: "false",
            label: e.$t("channel_activation.messaging.activation.steps.step_1.radio_2_label")
        }, null, 8, ["modelValue", "label"])]), a(h, {
            text: e.$t("channel_activation.messaging.activation.steps.step_1.lgpd_protection"),
            size: "sm",
            class: "lh-sm mb-0 mt-3",
            color: "gray-600"
        }, null, 8, ["text"]), l("div", Xl, [a(_, {
            modelValue: n.form.acceptLGPDTerms,
            "onUpdate:modelValue": t[2] || (t[2] = v => n.form.acceptLGPDTerms = v),
            label: e.$t("channel_activation.messaging.activation.steps.step_1.lgpd_terms"),
            class: Y(i.hasAcceptedLGPDTerms),
            labelClass: "fs-2 text-gray-600"
        }, null, 8, ["modelValue", "label", "class"])]), i.accountIsVerifiedBoolean ? (o(),
        m("div", ei, [a(p, {
            icon: "alert-line",
            class: "me-2 text-yellow-dark"
        }), a(h, {
            text: e.$t("channel_activation.messaging.activation.steps.step_1.verified_alert"),
            size: "sm",
            class: "fw-bold mb-0"
        }, null, 8, ["text"])])) : b("", !0), e.openModal ? (o(),
        x(f, {
            key: 1,
            show: !0,
            title: e.$t("channel_activation.messaging.activation.steps.step_1.account_not_verified"),
            size: "md"
        }, {
            body: w( () => [a(h, {
                text: "",
                size: "sm",
                class: "fs-3"
            }, {
                default: w( () => [P(C(e.$t("channel_activation.messaging.aside_steps.meta_business_verify")) + " ", 1), l("a", ti, C(e.$t("channel_activation.messaging.aside_steps.meta_business_create")), 1), P(" " + C(e.$t("channel_activation.messaging.aside_steps.or")) + " ", 1), l("a", si, C(e.$t("channel_activation.messaging.aside_steps.meta_business_config")), 1)]),
                _: 1
            }), a(h, {
                text: "",
                size: "sm",
                class: "fs-3"
            }, {
                default: w( () => [P(C(e.$t("channel_activation.messaging.aside_steps.help_leads2b")), 1)]),
                _: 1
            }), l("div", ai, [a(g, {
                text: e.$t("channel_activation.next"),
                size: "lg",
                class: "col-md-12 mb-3",
                onClick: t[3] || (t[3] = v => e.openModal = !1)
            }, null, 8, ["text"]), a(g, {
                text: e.$t("channel_activation.back"),
                size: "lg",
                class: "col-md-12 bg-transparent border-0 text-green-normal",
                onClick: t[4] || (t[4] = v => e.$router.push({
                    name: "messaging.chats"
                }))
            }, null, 8, ["text"])])]),
            _: 1
        }, 8, ["title"])) : b("", !0)]),
        _: 1
    }, 8, ["disabled"])
}
const li = W(Zl, [["render", ni]])
  , ii = {
    emits: ["back", "disabled", "next", "helpAside"],
    name: "step-2",
    props: ["form", "vertical"],
    components: {
        CardActivation: qe
    },
    async mounted() {
        let e = await qs();
        e = e.map(t => ({
            ...t,
            uf_descricao: t.uf_descricao.toLowerCase()
        })),
        this.inputs.state.states = e
    },
    watch: {
        "form.companyFields.state": {
            async handler() {
                if (!this.loading) {
                    this.loading = !0,
                    this.form.companyFields.city = "";
                    const e = await ut(this.form.companyFields.state);
                    this.inputs.city.cities = e,
                    this.loading = !1
                }
            },
            immediate: !0
        }
    },
    data() {
        return {
            error: !1,
            loading: !1,
            inputs: {
                state: {
                    states: []
                },
                city: {
                    cities: []
                },
                vertical: {
                    options: this.alphabeticalOrder(this.vertical)
                }
            }
        }
    },
    computed: {
        cnpjValid() {
            var e, t, n;
            return ((n = (t = (e = this.form.companyFields) == null ? void 0 : e.cnpj) == null ? void 0 : t.replace(/\D/g, "")) == null ? void 0 : n.length) === 14
        },
        zipValid() {
            var e, t, n;
            return ((n = (t = (e = this.form.companyFields) == null ? void 0 : e.zipcode) == null ? void 0 : t.replace(/\D/g, "")) == null ? void 0 : n.length) === 8
        },
        canContinue() {
            var d, u, h, _, p, g, f, $, v, y, M, F;
            if (this.error || this.loading)
                return !1;
            const e = (u = (d = this.form) == null ? void 0 : d.companyFields) == null ? void 0 : u.company_name
              , t = (_ = (h = this.form) == null ? void 0 : h.companyFields) == null ? void 0 : _.address
              , n = (g = (p = this.form) == null ? void 0 : p.companyFields) == null ? void 0 : g.vertical
              , c = ($ = (f = this.form) == null ? void 0 : f.companyFields) == null ? void 0 : $.description
              , s = (y = (v = this.form) == null ? void 0 : v.companyFields) == null ? void 0 : y.state
              , i = (F = (M = this.form) == null ? void 0 : M.companyFields) == null ? void 0 : F.city;
            return this.cnpjValid && this.zipValid && e && t && n && c && s && i
        }
    },
    methods: {
        alphabeticalOrder(e) {
            return e.sort( (t, n) => t.label.localeCompare(n.label))
        },
        captalizeFirstLetter(e) {
            let t = e.split(" ");
            return t.length === 1 ? t[0].charAt(0).toUpperCase() + t[0].slice(1) : (t = t.map(n => ["do", "da", "de"].includes(n) ? n : n.charAt(0).toUpperCase() + n.slice(1)),
            t.join(" "))
        },
        async handleGetZipcode() {
            if (this.form.companyFields.zipcode.replace(/[^\d]+/g, "").length === 8) {
                this.loading = !0;
                const {uf: t, localidade: n, logradouro: c} = await Gs(this.form.companyFields.zipcode);
                if (t) {
                    if (this.error = !1,
                    this.form.companyFields.state = t,
                    this.form.companyFields.state) {
                        this.form.companyFields.address = "",
                        this.$refs.address.inputValue = "";
                        const s = await ut(this.form.companyFields.state);
                        this.inputs.city.cities = s,
                        this.form.companyFields.city = n,
                        c && (this.form.companyFields.address = c,
                        this.$refs.address.inputValue = c)
                    }
                } else
                    this.error = !0,
                    this.$notification.notify({
                        type: "error",
                        title: "Oops!",
                        text: this.$t("channel_activation.errors.error", {
                            field: this.$t("channel_activation.errors.zipcode")
                        })
                    });
                this.loading = !1
            }
        },
        async validateBeforeContinue() {
            if (!this.canContinue)
                return !1;
            const {valid: e} = await this.$refs.validator.validate();
            return e ? this.$emit("next") : !1
        }
    },
    activated() {
        const e = {
            color: "blue-light",
            description: this.$t("channel_activation.messaging.activation.steps.step_2.help_aside_description"),
            icon: "information-line",
            darkColor: "blue-dark"
        };
        this.$emit("helpAside", e),
        this.$emit("disabled", !this.canContinue)
    }
}
  , oi = {
    class: "col-md-6 mb-3"
}
  , ri = {
    class: "fw-bold fs-2 mb-2"
}
  , ci = {
    class: "col-md-6 mb-3"
}
  , di = {
    class: "fw-bold fs-2 mb-2"
}
  , mi = {
    class: "col-md-6 mb-3"
}
  , ui = {
    class: "fw-bold fs-2 mb-2"
}
  , pi = {
    class: "col-md-6 mb-3"
}
  , gi = {
    class: "fw-bold fs-2 mb-2"
}
  , hi = {
    class: "col-md-6 mb-3"
}
  , _i = {
    class: "fw-bold fs-2 mb-2"
}
  , fi = {
    class: "col-md-6 mb-3"
}
  , bi = {
    class: "fw-bold fs-2 mb-2"
}
  , vi = {
    class: "col-md-6 mb-3"
}
  , yi = {
    class: "fw-bold fs-2 mb-2"
}
  , wi = {
    class: "col-md-6 mb-3"
}
  , Ci = {
    class: "fw-bold fs-2 mb-2"
}
  , xi = ["value"]
  , ki = {
    class: "col-md-6 mb-3"
}
  , $i = {
    class: "fw-bold fs-2 mb-2"
}
  , Ti = ["disabled"]
  , Di = {
    disabled: "",
    value: ""
}
  , Si = ["value"]
  , Mi = {
    class: "col-md-6 mb-3"
}
  , Ii = {
    class: "fw-bold fs-2 mb-2"
}
  , Vi = {
    disabled: "",
    value: ""
}
  , Ai = ["value"]
  , Fi = {
    class: "col-md-12 mb-3"
}
  , Ei = {
    class: "fw-bold fs-2 mb-2"
};
function Bi(e, t, n, c, s, i) {
    const d = r("DsInput")
      , u = r("Field")
      , h = r("DsTextarea")
      , _ = r("Form")
      , p = r("CardActivation");
    return o(),
    x(p, {
        class: "channel-activation-form",
        currentStep: "2",
        disabled: !i.canContinue,
        onNext: i.validateBeforeContinue,
        onBack: t[11] || (t[11] = g => e.$emit("back")),
        onDisabled: t[12] || (t[12] = g => e.$emit("disabled", g))
    }, {
        default: w( () => [a(_, {
            ref: "validator",
            tag: "div",
            class: "row"
        }, {
            default: w( () => [l("div", oi, [l("label", ri, C(e.$t("channel_activation.messaging.activation.steps.step_2.company_name_label")), 1), a(d, {
                size: "md",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.company_name_placeholder"),
                modelValue: n.form.companyFields.company_name,
                "onUpdate:modelValue": t[0] || (t[0] = g => n.form.companyFields.company_name = g),
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue"])]), l("div", ci, [l("label", di, C(e.$t("channel_activation.messaging.activation.steps.step_2.cnpj_label")), 1), a(d, {
                size: "md",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.cnpj_placeholder"),
                modelValue: n.form.companyFields.cnpj,
                "onUpdate:modelValue": t[1] || (t[1] = g => n.form.companyFields.cnpj = g),
                mask: "##.###.###/####-##",
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue"])]), l("div", mi, [l("label", ui, C(e.$t("channel_activation.messaging.activation.steps.step_2.website_main_label")), 1), a(u, {
                modelValue: n.form.companyFields.website_main,
                "onUpdate:modelValue": t[2] || (t[2] = g => n.form.companyFields.website_main = g),
                rules: {
                    url: {
                        require_protocol: !0
                    },
                    required: !0
                },
                name: "website_main"
            }, {
                default: w( ({errors: g, componentField: f}) => [a(d, we(f, {
                    size: "md",
                    placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.website_main_placeholder"),
                    required: !0,
                    type: "text",
                    hasError: !!g[0]
                }), null, 16, ["placeholder", "hasError"])]),
                _: 1
            }, 8, ["modelValue"])]), l("div", pi, [l("label", gi, C(e.$t("channel_activation.messaging.activation.steps.step_2.website_secondary_label")), 1), a(u, {
                modelValue: n.form.companyFields.website_secondary,
                "onUpdate:modelValue": t[3] || (t[3] = g => n.form.companyFields.website_secondary = g),
                rules: {
                    url: {
                        require_protocol: !0
                    },
                    required: !0
                },
                name: "website_secondary"
            }, {
                default: w( ({errors: g, componentField: f}) => [a(d, we(f, {
                    size: "md",
                    placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.website_secondary_placeholder"),
                    type: "text",
                    hasError: !!g[0]
                }), null, 16, ["placeholder", "hasError"])]),
                _: 1
            }, 8, ["modelValue"])]), l("div", hi, [l("label", _i, C(e.$t("channel_activation.messaging.activation.steps.step_2.zipcode_label")), 1), a(d, {
                size: "md",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.zipcode_placeholder"),
                modelValue: n.form.companyFields.zipcode,
                "onUpdate:modelValue": [t[4] || (t[4] = g => n.form.companyFields.zipcode = g), i.handleGetZipcode],
                mask: "#####-###",
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue"])]), l("div", fi, [l("label", bi, C(e.$t("channel_activation.messaging.activation.steps.step_2.address_label")), 1), a(d, {
                size: "md",
                ref: "address",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.address_placeholder"),
                modelValue: n.form.companyFields.address,
                "onUpdate:modelValue": t[5] || (t[5] = g => n.form.companyFields.address = g),
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue"])]), l("div", vi, [l("label", yi, C(e.$t("channel_activation.messaging.activation.steps.step_2.address_number_label")), 1), a(d, {
                size: "md",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.address_number_placeholder"),
                modelValue: n.form.companyFields.address_number,
                "onUpdate:modelValue": t[6] || (t[6] = g => n.form.companyFields.address_number = g),
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue"])]), l("div", wi, [l("label", Ci, C(e.$t("channel_activation.messaging.activation.steps.step_2.state_label")), 1), Z(l("select", {
                "onUpdate:modelValue": t[7] || (t[7] = g => n.form.companyFields.state = g),
                class: "d-block w-100 p-2 bg-white"
            }, [t[13] || (t[13] = l("option", {
                disabled: "",
                value: ""
            }, " Selecione ", -1)), (o(!0),
            m(N, null, j(s.inputs.state.states, g => (o(),
            m("option", {
                key: g.uf_codigo,
                value: g.uf_sigla
            }, C(i.captalizeFirstLetter(g.uf_descricao)), 9, xi))), 128))], 512), [[Pe, n.form.companyFields.state]])]), l("div", ki, [l("label", $i, C(e.$t("channel_activation.messaging.activation.steps.step_2.city_label")), 1), Z(l("select", {
                "onUpdate:modelValue": t[8] || (t[8] = g => n.form.companyFields.city = g),
                class: "d-block w-100 p-2 bg-white",
                disabled: s.loading
            }, [l("option", Di, C(s.loading ? e.$t("channel_activation.messaging.activation.steps.step_2.loading") : e.$t("channel_activation.messaging.activation.steps.step_2.select")), 1), (o(!0),
            m(N, null, j(s.inputs.city.cities, g => (o(),
            m("option", {
                key: g.id,
                value: g.name
            }, C(g.name), 9, Si))), 128))], 8, Ti), [[Pe, n.form.companyFields.city]])]), l("div", Mi, [l("label", Ii, C(e.$t("channel_activation.messaging.activation.steps.step_2.vertical_label")), 1), Z(l("select", {
                "onUpdate:modelValue": t[9] || (t[9] = g => n.form.companyFields.vertical = g),
                class: "d-block w-100 p-2 bg-white"
            }, [l("option", Vi, C(e.$t("channel_activation.messaging.activation.steps.step_2.select")), 1), (o(!0),
            m(N, null, j(s.inputs.vertical.options, (g, f) => (o(),
            m("option", {
                key: f,
                value: g.value
            }, C(g.label), 9, Ai))), 128))], 512), [[Pe, n.form.companyFields.vertical]])]), l("div", Fi, [l("label", Ei, C(e.$t("channel_activation.messaging.activation.steps.step_2.description_label")), 1), a(h, {
                modelValue: n.form.companyFields.description,
                "onUpdate:modelValue": t[10] || (t[10] = g => n.form.companyFields.description = g),
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_2.description_placeholder"),
                required: !0,
                class: "w-100"
            }, null, 8, ["modelValue", "placeholder"])])]),
            _: 1
        }, 512)]),
        _: 1
    }, 8, ["disabled", "onNext"])
}
const zi = W(ii, [["render", Bi], ["__scopeId", "data-v-cefe39cf"]])
  , Ui = {
    emits: ["back", "disabled", "helpAside", "submit"],
    name: "step-3",
    props: ["form"],
    data() {
        return {
            numberIs0800: !1
        }
    },
    components: {
        CardActivation: qe
    },
    computed: {
        wppTel() {
            var t, n, c;
            const e = (c = (n = (t = this.form) == null ? void 0 : t.metaFields) == null ? void 0 : n.whatsapp_number) == null ? void 0 : c.replace(/\D/g, "").length;
            return e >= 11 && e <= 13
        },
        canContinue() {
            var s, i, d, u, h, _, p, g;
            const e = (i = (s = this.form) == null ? void 0 : s.metaFields) == null ? void 0 : i.profile_name
              , t = (u = (d = this.form) == null ? void 0 : d.metaFields) == null ? void 0 : u.id_facebook
              , n = (_ = (h = this.form) == null ? void 0 : h.metaFields) == null ? void 0 : _.facebook_page_link
              , c = (g = (p = this.form) == null ? void 0 : p.metaFields) == null ? void 0 : g.profile_email;
            return this.wppTel && e && t && n && c
        },
        formatPlaceHolder() {
            return this.numberIs0800 ? this.$t("channel_activation.messaging.activation.steps.step_3.whatsapp_number_placeholder_0800") : this.$t("channel_activation.messaging.activation.steps.step_3.whatsapp_number_placeholder")
        },
        formatMask() {
            return this.numberIs0800 ? "+55(DDD)" : "(0800)"
        }
    },
    activated() {
        const e = {
            color: "yellow-light",
            description: this.$t("channel_activation.messaging.activation.steps.step_3.help_aside"),
            icon: "alert-line",
            darkColor: "yellow-dark"
        };
        this.$emit("helpAside", e),
        this.$emit("disabled", !this.canContinue)
    },
    methods: {
        maskWhatsappNumber() {
            return this.numberIs0800 ? "#### ### ####" : "+55 (##) #####-####"
        },
        async validateBeforeSubmit() {
            if (!this.canContinue)
                return !1;
            const {valid: e} = await this.$refs.validator.validate();
            return e ? this.$emit("submit") : !1
        }
    }
}
  , Oi = {
    class: "col-md-6 mb-3 pl-0 fs-2"
}
  , Li = {
    class: "fw-bold mb-2 fs-2"
}
  , Pi = {
    class: "col-md-6 mb-3 pl-0 fs-2"
}
  , Ni = {
    class: "fw-bold mb-2 fs-2"
}
  , ji = {
    class: "icon-question-line ms-1"
}
  , Wi = {
    class: "col-md-12 mb-3 pl-0 fs-2"
}
  , Hi = {
    class: "fw-bold mb-2 fs-2"
}
  , Ri = {
    class: "col-md-6 mb-3 pl-0 fs-2"
}
  , qi = {
    class: "fw-bold mb-2 fs-2"
}
  , Gi = {
    class: "col-md-6 mb-3 pl-0 fs-2"
}
  , Ki = {
    class: "d-flex align-items-center"
}
  , Yi = {
    class: "fw-bold fs-2"
};
function Qi(e, t, n, c, s, i) {
    const d = r("DsInput")
      , u = r("Field")
      , h = r("DsCheckbox")
      , _ = r("DsTypography")
      , p = r("Form")
      , g = r("CardActivation")
      , f = Ie("tooltip");
    return o(),
    x(g, {
        currentStep: "3",
        disabled: !i.canContinue,
        onNext: i.validateBeforeSubmit,
        onBack: t[6] || (t[6] = $ => e.$emit("back")),
        onDisabled: t[7] || (t[7] = $ => e.$emit("disabled", $))
    }, {
        default: w( () => [a(p, {
            ref: "validator",
            tag: "div",
            class: "d-flex justify-content-between w-100 flex-wrap"
        }, {
            default: w( () => [l("div", Oi, [l("label", Li, C(e.$t("channel_activation.messaging.activation.steps.step_3.profile_name_label")), 1), a(d, {
                size: "md",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_3.profile_name_placeholder"),
                modelValue: n.form.metaFields.profile_name,
                "onUpdate:modelValue": t[0] || (t[0] = $ => n.form.metaFields.profile_name = $),
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue"])]), l("div", Pi, [l("label", Ni, C(e.$t("channel_activation.messaging.activation.steps.step_3.id_facebook_label")), 1), Z(l("i", ji, null, 512), [[f, e.$t("channel_activation.messaging.activation.steps.step_3.id_facebook_tooltip")]]), a(d, {
                size: "md",
                placeholder: e.$t("channel_activation.messaging.activation.steps.step_3.id_facebook_placeholder"),
                mask: "###############",
                modelValue: n.form.metaFields.id_facebook,
                "onUpdate:modelValue": t[1] || (t[1] = $ => n.form.metaFields.id_facebook = $),
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "modelValue"])]), l("div", Wi, [l("label", Hi, C(e.$t("channel_activation.messaging.activation.steps.step_3.facebook_page_link_label")), 1), a(u, {
                modelValue: n.form.metaFields.facebook_page_link,
                "onUpdate:modelValue": t[2] || (t[2] = $ => n.form.metaFields.facebook_page_link = $),
                rules: "url|required",
                name: "facebook_page_link"
            }, {
                default: w( ({errors: $, componentField: v}) => [a(d, we(v, {
                    size: "md",
                    placeholder: e.$t("channel_activation.messaging.activation.steps.step_3.facebook_page_link_placeholder"),
                    required: !0,
                    type: "text",
                    hasError: !!$[0]
                }), null, 16, ["placeholder", "hasError"])]),
                _: 1
            }, 8, ["modelValue"])]), l("div", Ri, [l("label", qi, C(e.$t("channel_activation.messaging.activation.steps.step_3.profile_email_label")), 1), a(u, {
                modelValue: n.form.metaFields.profile_email,
                "onUpdate:modelValue": t[3] || (t[3] = $ => n.form.metaFields.profile_email = $),
                rules: "email|required",
                name: "profile_email"
            }, {
                default: w( ({errors: $, componentField: v}) => [a(d, we(v, {
                    size: "md",
                    placeholder: e.$t("channel_activation.messaging.activation.steps.step_3.profile_email_placeholder"),
                    required: !0,
                    type: "text",
                    hasError: !!$[0]
                }), null, 16, ["placeholder", "hasError"])]),
                _: 1
            }, 8, ["modelValue"])]), l("div", Gi, [l("div", Ki, [l("label", Yi, C(e.$t("channel_activation.messaging.activation.steps.step_3.whatsapp_number_label")), 1), a(h, {
                class: "ms-2",
                label: i.formatMask,
                modelValue: s.numberIs0800,
                "onUpdate:modelValue": t[4] || (t[4] = $ => {
                    s.numberIs0800 = !s.numberIs0800,
                    n.form.metaFields.whatsapp_number = ""
                }
                ),
                isSwitch: ""
            }, null, 8, ["label", "modelValue"])]), a(d, {
                size: "md",
                placeholder: i.formatPlaceHolder,
                mask: i.maskWhatsappNumber(),
                modelValue: n.form.metaFields.whatsapp_number,
                "onUpdate:modelValue": t[5] || (t[5] = $ => n.form.metaFields.whatsapp_number = $),
                required: !0,
                type: "text"
            }, null, 8, ["placeholder", "mask", "modelValue"]), a(_, {
                text: e.$t("channel_activation.messaging.activation.steps.step_3.whatsapp_number_subtitle"),
                color: "gray-500",
                class: "mt-1 lh-sm"
            }, null, 8, ["text"])])]),
            _: 1
        }, 512)]),
        _: 1
    }, 8, ["disabled", "onNext"])
}
const Zi = W(Ui, [["render", Qi]])
  , Ji = {
    name: "activation",
    components: {
        Tabsteps: Ot,
        Step0: Ql,
        Step1: li,
        Step2: zi,
        Step3: Zi
    },
    beforeMount() {
        X.track("Whatsapp Activation - Form Step", {
            stepName: "verified-account"
        })
    },
    data() {
        return {
            helpAside: {},
            currentStep: 0,
            disabled: !0,
            steps: [{
                index: 0,
                label: this.$t("channel_activation.messaging.activation.tab_steps.step_0")
            }, {
                index: 1,
                label: this.$t("channel_activation.messaging.activation.tab_steps.step_1")
            }, {
                index: 2,
                label: this.$t("channel_activation.messaging.activation.tab_steps.step_2")
            }, {
                index: 3,
                label: this.$t("channel_activation.messaging.activation.tab_steps.step_3")
            }],
            form: {
                companyFields: {
                    city: "",
                    state: "",
                    vertical: ""
                },
                metaFields: {}
            },
            vertical: [{
                label: this.$t("channel_activation.vertical.automotive"),
                value: "Automotive"
            }, {
                label: this.$t("channel_activation.vertical.beauty_spa_and_salon"),
                value: "Beauty, Spa and Salon"
            }, {
                label: this.$t("channel_activation.vertical.clothing_and_apparel"),
                value: "Clothing and Apparel"
            }, {
                label: this.$t("channel_activation.vertical.education"),
                value: "Education"
            }, {
                label: this.$t("channel_activation.vertical.entertainment"),
                value: "Entertainment"
            }, {
                label: this.$t("channel_activation.vertical.event_planning_and_service"),
                value: "Event Planning and Service"
            }, {
                label: this.$t("channel_activation.vertical.finance_and_banking"),
                value: "Finance and Banking"
            }, {
                label: this.$t("channel_activation.vertical.food_and_grocery"),
                value: "Food and Grocery"
            }, {
                label: this.$t("channel_activation.vertical.public_service"),
                value: "Public Service"
            }, {
                label: this.$t("channel_activation.vertical.hotel_and_lodging"),
                value: "Hotel and Lodging"
            }, {
                label: this.$t("channel_activation.vertical.medical_and_health"),
                value: "Medical and Health"
            }, {
                label: this.$t("channel_activation.vertical.non-profit"),
                value: "Non-profit"
            }, {
                label: this.$t("channel_activation.vertical.professional_services"),
                value: "Professional Services"
            }, {
                label: this.$t("channel_activation.vertical.shopping_and_retail"),
                value: "Shopping and Retail"
            }, {
                label: this.$t("channel_activation.vertical.travel_and_transportation"),
                value: "Travel and Transportation"
            }, {
                label: this.$t("channel_activation.vertical.restaurant"),
                value: "Restaurant"
            }, {
                label: this.$t("channel_activation.vertical.other"),
                value: "Other"
            }]
        }
    },
    computed: {
        ...Ce("messaging/channel", ["whatsappChannelStatus"]),
        currentStepComponent() {
            return `Step${this.currentStep}`
        },
        trackLabels() {
            return {
                0: "facebook-meta",
                1: "verified-account",
                2: "account-data",
                3: "facebook-data"
            }[this.currentStep]
        },
        tabStepsDisabled() {
            return this.disabled
        }
    },
    methods: {
        ...se("messaging/channel", ["sendUserInfos"]),
        nextStep() {
            this.currentStep += 1,
            X.track("Whatsapp Activation - Next Form Step", {
                stepName: this.trackLabels
            })
        },
        backStep() {
            this.currentStep > 0 && (this.currentStep -= 1,
            X.track("Whatsapp Activation - Back Form Step", {
                stepName: this.trackLabels
            }))
        },
        async submit() {
            if (this.form.acceptLGPDTerms && this.form.accountIsVerified === "true") {
                const e = {
                    ...this.form.companyFields,
                    ...this.form.metaFields
                };
                await this.sendUserInfos(e) && this.$router.push({
                    name: "messaging.chats_blank"
                })
            }
        }
    }
}
  , Xi = {
    class: "design-system"
}
  , eo = {
    class: "row w-100 m-0 justify-content-center"
}
  , to = {
    class: "col-md-9 col-xl-10 bg-gray-dark d-flex justify-content-center align-items-center activation-wrapper"
};
function so(e, t, n, c, s, i) {
    const d = r("Tabsteps");
    return o(),
    m("div", Xi, [a(d, {
        currentStep: s.currentStep,
        disabled: i.tabStepsDisabled,
        steps: s.steps,
        onNext: i.nextStep,
        onSubmit: i.submit
    }, null, 8, ["currentStep", "disabled", "steps", "onNext", "onSubmit"]), l("div", eo, [l("div", to, [(o(),
    x(fs, null, [(o(),
    x(_s(i.currentStepComponent), {
        currentStep: s.currentStep,
        form: s.form,
        vertical: s.vertical,
        onNext: i.nextStep,
        onBack: i.backStep,
        onDisabled: t[0] || (t[0] = u => s.disabled = u),
        onSubmit: i.submit,
        onHelpAside: t[1] || (t[1] = u => s.helpAside = u)
    }, null, 40, ["currentStep", "form", "vertical", "onNext", "onBack", "onSubmit"]))], 1024))])])])
}
const ao = W(Ji, [["render", so], ["__scopeId", "data-v-c8eb31c8"]])
  , Hg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ao
}, Symbol.toStringTag, {
    value: "Module"
}))
  , no = {
    name: "channel-activation",
    components: {
        ActivationPage: Ks
    },
    computed: {
        messaging() {
            return Ys.messaging
        },
        items() {
            return [{
                title: this.$t("activation_pages.messaging.item_1.title"),
                icon: "line-height",
                description: this.$t("activation_pages.messaging.item_1.description"),
                image: "messaging-centralize.gif",
                isVideo: !1
            }, {
                title: this.$t("activation_pages.messaging.item_2.title"),
                icon: "git-repository-commits-line",
                description: this.$t("activation_pages.messaging.item_2.description"),
                image: "messaging-templates.gif",
                isVideo: !1
            }, {
                title: this.$t("activation_pages.messaging.item_3.title"),
                icon: "function-line",
                description: this.$t("activation_pages.messaging.item_3.description"),
                image: "messaging-organize.gif",
                isVideo: !1
            }]
        }
    }
};
function lo(e, t, n, c, s, i) {
    const d = r("ActivationPage");
    return o(),
    x(d, {
        activationModule: i.messaging,
        items: i.items
    }, null, 8, ["activationModule", "items"])
}
const io = W(no, [["render", lo]])
  , Rg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: io
}, Symbol.toStringTag, {
    value: "Module"
}))
  , oo = {
    name: "rounded-step",
    props: {
        steps: {
            type: Array,
            required: !0
        },
        currentStep: {
            type: [Number, String],
            required: !0
        },
        error: {
            type: Boolean,
            default: !1
        }
    },
    computed: {
        computedSteps() {
            const e = !this.steps.find(t => t.index === this.currentStep);
            return this.steps.map(t => {
                let n;
                return this.error && t.index === this.currentStep ? n = "error" : t.index === this.currentStep ? n = "active" : e || t.index < this.currentStep ? n = "done" : n = "pending",
                {
                    ...t,
                    status: n
                }
            }
            )
        }
    },
    methods: {
        hasNextStep(e) {
            return e < this.steps.length
        }
    }
}
  , ro = {
    class: "d-flex"
};
function co(e, t, n, c, s, i) {
    const d = r("DsIcon");
    return o(),
    m("div", ro, [(o(!0),
    m(N, null, j(i.computedSteps, u => (o(),
    m("div", {
        key: u.index,
        class: "rounded-step-wrapper"
    }, [l("div", {
        class: Y({
            [u.status]: u.status,
            "has-next-step": i.hasNextStep(u.index)
        })
    }, [u.status === "done" ? (o(),
    x(d, {
        key: 0,
        icon: "check-line"
    })) : u.status === "error" ? (o(),
    x(d, {
        key: 1,
        icon: "close-line"
    })) : (o(),
    m(N, {
        key: 2
    }, [P(C(u.label), 1)], 64))], 2)]))), 128))])
}
const mo = W(oo, [["render", co], ["__scopeId", "data-v-82eacbde"]])
  , uo = {
    name: "modal-activation",
    components: {
        RoundedStep: mo
    },
    data() {
        return {
            steps: [{
                index: 1,
                label: "01"
            }, {
                index: 2,
                label: "02"
            }, {
                index: 3,
                label: "03"
            }],
            error: !1,
            loading: !1
        }
    },
    async mounted() {
        await this.loadChannelStatus({
            channel: "whatsapp"
        }),
        this.error = this.whatsappChannelStatus === "ACTIVATION_FAILED"
    },
    computed: {
        ...Ce("messaging/channel", ["whatsappChannelStatus", "authenticationLink", "currentActivationChannelId"]),
        ...ee(["company"]),
        canShowExitButton() {
            return this.step === 1 || this.step === 3
        },
        step() {
            return {
                NOT_CONFIGURED: 1,
                WAITING_BROKER_ACTIONS: 2,
                WAITING_USER_AUTHENTICATION: 3,
                WAITING_USER_CONFIRM: 4,
                ACTIVATION_FAILED: 3
            }[this.whatsappChannelStatus]
        },
        lastStep() {
            return this.step > this.steps.length
        },
        actualStep() {
            if (!this.error) {
                const e = {
                    1: {
                        titleTxt: this.$t("channel_activation.messaging.activation.modal.step_1.title_txt"),
                        subtitleTxt: this.$t("channel_activation.messaging.activation.modal.step_1.sub_txt"),
                        btnTxt: this.$t("channel_activation.messaging.activation.modal.step_1.btn_txt")
                    },
                    2: {
                        titleTxt: this.$t("channel_activation.messaging.activation.modal.step_2.title_txt"),
                        subtitleTxt: this.$t("channel_activation.messaging.activation.modal.step_2.sub_txt"),
                        btnTxt: this.$t("channel_activation.messaging.activation.modal.step_2.btn_txt")
                    },
                    3: {
                        titleTxt: this.$t("channel_activation.messaging.activation.modal.step_3.title_txt"),
                        subtitleTxt: this.$t("channel_activation.messaging.activation.modal.step_3.sub_txt"),
                        btnTxt: this.$t("channel_activation.messaging.activation.modal.step_3.btn_txt")
                    },
                    default: {
                        titleTxt: this.$t("channel_activation.messaging.activation.modal.default.title_txt"),
                        subtitleTxt: this.$t("channel_activation.messaging.activation.modal.default.sub_txt"),
                        btnTxt: this.$t("channel_activation.messaging.activation.modal.default.btn_txt")
                    }
                };
                return e[this.step] || e.default
            }
            return {
                titleTxt: this.$t("channel_activation.messaging.activation.modal.step_error.title_txt"),
                firstSubtitleTxt: this.$t("channel_activation.messaging.activation.modal.step_error.first_sub_txt"),
                secondSubtitleTxt: this.$t("channel_activation.messaging.activation.modal.step_error.second_sub_txt"),
                btnTxt: this.$t("channel_activation.messaging.activation.modal.step_error.btn_txt")
            }
        },
        icon() {
            return this.step === 3 && !this.lastStep && !this.error ? "facebook-box-fill" : null
        },
        imgSrc() {
            if (this.error)
                return zt;
            if (!this.lastStep) {
                if (this.step === 1)
                    return Ft;
                if (this.step === 2)
                    return Et;
                if (this.step === 3)
                    return Bt
            }
            return Ut
        },
        titleTxt() {
            return this.actualStep.titleTxt || ""
        },
        firstSubtitleTxt() {
            return this.actualStep.firstSubtitleTxt || ""
        },
        secondSubtitleTxt() {
            return this.actualStep.secondSubtitleTxt || ""
        },
        subtitleTxt() {
            return this.actualStep.subtitleTxt || ""
        },
        btnTxt() {
            return this.actualStep.btnTxt || ""
        }
    },
    methods: {
        ...se("messaging/channel", ["loadChannelStatus", "setWhatsappChannelStatusActive"]),
        async nextStep() {
            this.loading = !0;
            try {
                this.step === 1 ? (X.track("Whatsapp Activation - Start Activation Button"),
                this.$router.push({
                    name: "messaging.activation"
                })) : this.step === 2 ? this.$router.replace({
                    name: "messaging.channel"
                }) : this.step === 3 && this.error ? window.open("https://business.facebook.com/wa/manage/home", "_blank", "noopener") : this.lastStep ? (X.track("Whatsapp Activation - Complete Activation Button"),
                await this.setWhatsappChannelStatusActive({
                    id_channel: this.currentActivationChannelId
                })) : this.step === 3 && !this.error && this.authenticationLink && (X.track("Whatsapp Activation - Open Facebook Button"),
                window.open(this.authenticationLink, "popUpWindow", "toolbar=yes, scrollbars=yes, top=100, left=500, width=700, height=700"))
            } catch {
                this.error = !0
            } finally {
                this.loading = !1
            }
        }
    }
}
  , po = {
    class: "row pb-5"
}
  , go = {
    class: "d-flex flex-column align-items-center mx-auto"
}
  , ho = ["src"]
  , _o = {
    class: "d-flex mb-6"
}
  , fo = {
    class: "w-100 mt-4 ds-btn d-flex justify-content-center"
};
function bo(e, t, n, c, s, i) {
    const d = r("RoundedStep")
      , u = r("DsHeading")
      , h = r("DsParagraph")
      , _ = r("VueImage")
      , p = r("DsButton")
      , g = r("DsModal");
    return o(),
    x(g, {
        class: "modal-channel-activation",
        show: !0,
        backdrop: "static",
        centered: !1,
        hideCloseButton: ""
    }, {
        body: w( () => [l("div", po, [l("div", go, [l("img", {
            src: i.imgSrc
        }, null, 8, ho), l("div", _o, [a(d, {
            steps: s.steps,
            currentStep: i.step,
            lastStep: i.lastStep,
            error: s.error
        }, null, 8, ["steps", "currentStep", "lastStep", "error"])]), a(u, {
            text: i.titleTxt,
            size: "sm",
            class: "mb-4"
        }, null, 8, ["text"]), a(h, {
            text: i.firstSubtitleTxt || i.subtitleTxt,
            class: "text-center lh-sm col-md-11",
            size: "sm"
        }, null, 8, ["text"]), s.error ? (o(),
        x(_, {
            key: 0,
            src: "whatsapp-activation/phone-number-example.svg",
            class: "w-25"
        })) : b("", !0), i.secondSubtitleTxt ? (o(),
        x(h, {
            key: 1,
            text: i.secondSubtitleTxt,
            class: "text-center lh-sm col-md-11",
            size: "sm"
        }, null, 8, ["text"])) : b("", !0), s.error ? (o(),
        x(_, {
            key: 2,
            src: "whatsapp-activation/config-example.svg",
            class: "w-50"
        })) : b("", !0), l("div", fo, [a(p, {
            size: "lg",
            variant: "green-normal",
            text: i.btnTxt,
            class: "w-50 justify-content-center",
            onClick: i.nextStep,
            icon: i.icon,
            disabled: s.loading
        }, null, 8, ["text", "onClick", "icon", "disabled"])]), i.canShowExitButton ? (o(),
        x(p, {
            key: 3,
            text: e.$t("login.cancel"),
            variant: "link",
            class: "mt-3",
            onClick: t[0] || (t[0] = f => e.$router.push({
                name: "home"
            }))
        }, null, 8, ["text"])) : b("", !0)])])]),
        _: 1
    })
}
const vo = W(uo, [["render", bo]])
  , yo = {
    name: "messaging-sandbox",
    mixins: [Tt],
    components: {
        qrcode: At,
        ModalActivation: vo
    },
    async created() {
        await this.loadSubscription()
    },
    data() {
        return {
            qrCodeUrl: null,
            showActivationModal: !1
        }
    },
    computed: {
        ...ee({
            selectedChatSandbox: "messaging/messages/selectedChatSandbox",
            needsActivation: "messaging/messages/needsActivation"
        }),
        ...Ce("messaging/channel", ["whatsappChannelStatus", "sandboxActive"]),
        feature() {
            return {
                name: "messaging",
                plan: Qs.whatsapp_monthly
            }
        },
        userName() {
            return this.$store.state.user.name
        }
    },
    watch: {
        selectedChatSandbox: {
            handler() {
                if (this.$router.currentRoute.name === "messaging.sandboxHome" && this.selectedChatSandbox) {
                    const e = this.selectedChatSandbox.chatId;
                    this.openChat({
                        chatId: e,
                        $router: this.$router
                    })
                }
            },
            deep: !0
        }
    },
    mounted() {
        this.generateQRCode()
    },
    methods: {
        ...se({
            getSandboxStatus: "messaging/messages/getSandboxStatus",
            initSandbox: "messaging/messages/initSandbox",
            loadSubscription: "limitsCenter/loadSubscription",
            loadChannels: "messaging/channel/loadChannels",
            openChat: "messaging/openChat/openChat"
        }),
        async talkToSales() {
            this.loadingTalk = !0,
            X.track("Messaging - Hand raised clicked");
            const {phone: e, site: t, modalDismiss: n} = await this.modalGetUserDetails();
            if (n)
                return this.loadingTalk = !1,
                !1;
            const c = this.feature;
            if (!c)
                return !1;
            const s = {
                type: "upgrade",
                item_fk_id: c.plan,
                featureName: this.$t(`freemium.block_modal.${c.name}.title`),
                phone: e,
                site: t
            };
            try {
                X.track("activation_page_sandbox_whatsapp", {
                    ...s,
                    buttonType: "SGM"
                }),
                await Dt(s),
                this.$notification.notify({
                    type: "success",
                    title: this.$t("plans.request_sent_modal.title"),
                    text: this.$t("plans.request_sent_modal.description")
                })
            } catch {
                this.$notification.notifyError("freemium.block_modal.messages.error")
            } finally {
                this.loadingTalk = !1
            }
            return !0
        },
        async generateQRCode() {
            try {
                if (!await this.getSandboxStatus())
                    return;
                const t = await this.initSandbox();
                await this.loadChannels(),
                this.qrCodeUrl = t.data.sandbox_url
            } catch {
                this.$notification.notifyError("whatsapp_sandbox.error.qrcode")
            }
        },
        openWebWhatsapp() {
            window.open(this.qrCodeUrl, "_blank")
        }
    }
}
  , wo = {
    class: "sandbox design-system ds-scrollbar w-100"
}
  , Co = {
    class: "col-12 pe-2 sandbox__container"
}
  , xo = {
    class: "w-100 text-center"
}
  , ko = {
    class: "col-xl-6 col-10"
}
  , $o = {
    class: "d-flex align-items-sm-start ps-2"
}
  , To = {
    class: "pt-4"
}
  , Do = {
    class: "d-flex column-small-screen"
}
  , So = {
    class: "qrcode-box"
}
  , Mo = {
    class: "pt-2"
}
  , Io = {
    key: 0,
    class: "ps-4 pb-2"
}
  , Vo = {
    class: "d-flex column-small-screen"
}
  , Ao = {
    key: 0
}
  , Fo = {
    key: 1
}
  , Eo = {
    class: "pt-2"
}
  , Bo = {
    class: "d-flex align-items-sm-start ps-2"
}
  , zo = {
    class: "d-flex"
}
  , Uo = {
    class: "d-flex align-items-sm-start ps-2"
}
  , Oo = {
    class: "d-flex"
};
function Lo(e, t, n, c, s, i) {
    const d = r("ModalActivation")
      , u = r("DsHeading")
      , h = r("DsTypography")
      , _ = r("DsIcon")
      , p = r("DsButton")
      , g = r("DsPageContainer")
      , f = r("qrcode")
      , $ = r("DsSkeletonItem")
      , v = r("DsCard");
    return o(),
    m("div", wo, [s.showActivationModal ? (o(),
    x(d, {
        key: 0,
        class: "break-line"
    })) : b("", !0), a(g, {
        class: "px-4 py-3"
    }, {
        default: w( () => [l("div", Co, [l("div", xo, [a(u, {
            text: `Olá, ${i.userName}! Teste Gratuito da Ferramenta de WhatsApp Leads2b`,
            size: "lg",
            class: "pb-2 break-line"
        }, null, 8, ["text"]), a(h, {
            text: e.$t("whatsapp_sandbox.header.description"),
            color: "gray",
            fontSize: "4",
            class: "pb-2 break-line"
        }, null, 8, ["text"])]), l("div", ko, [a(v, {
            class: "sandbox__card-send pb-4"
        }, {
            default: w( () => [l("div", $o, [a(_, {
                icon: "send-plane-line",
                class: "text-green-normal fs-6"
            }), a(u, {
                text: e.$t("whatsapp_sandbox.card_send.title"),
                size: "md",
                class: "ps-2 break-line"
            }, null, 8, ["text"])]), l("div", To, [a(g, null, {
                default: w( () => [l("div", Do, [l("div", So, [a(_, {
                    icon: "whatsapp-fill",
                    class: "xl-icon text-green-normal"
                })]), l("div", Mo, [a(u, {
                    text: e.$t("whatsapp_sandbox.card_send.title_wpp"),
                    size: "md",
                    class: "ps-5 break-line"
                }, null, 8, ["text"]), a(h, {
                    text: e.$t("whatsapp_sandbox.card_send.description"),
                    color: "gray",
                    fontSize: "3",
                    class: "ps-5 break-line"
                }, null, 8, ["text"]), s.qrCodeUrl ? (o(),
                m("div", Io, [a(p, {
                    text: "Enviar mensagem",
                    variant: "green-normal",
                    size: "lg",
                    onClick: i.openWebWhatsapp,
                    rightIcon: "arrow-right-s-line",
                    "data-testid": "open-web-whatsapp"
                }, null, 8, ["onClick"])])) : b("", !0)])])]),
                _: 1
            }), t[1] || (t[1] = l("div", {
                class: "separator"
            }, [l("span", null, "OU")], -1)), a(g, {
                class: "pt-4"
            }, {
                default: w( () => [l("div", Vo, [s.qrCodeUrl ? (o(),
                m("div", Ao, [a(f, {
                    class: "qrcode-box",
                    value: s.qrCodeUrl
                }, null, 8, ["value"])])) : (o(),
                m("div", Fo, [a($, {
                    type: "square",
                    height: "200"
                })])), l("div", Eo, [a(u, {
                    text: e.$t("whatsapp_sandbox.card_send.qrcode_box.title"),
                    size: "md",
                    class: "ps-2 break-line"
                }, null, 8, ["text"]), a(h, {
                    text: e.$t("whatsapp_sandbox.card_send.qrcode_box.description"),
                    color: "gray",
                    fontSize: "3",
                    class: "ps-2 break-line"
                }, null, 8, ["text"])])])]),
                _: 1
            })])]),
            _: 1
        }), e.needsActivation ? (o(),
        x(v, {
            key: 1,
            class: "sandbox__card-send"
        }, {
            default: w( () => [l("div", Uo, [a(_, {
                icon: "check-line",
                class: "text-green-normal fs-6"
            }), a(u, {
                text: e.$t("whatsapp_sandbox.chat.card_activate.title"),
                size: "md",
                class: "ps-2"
            }, null, 8, ["text"])]), a(g, null, {
                default: w( () => [a(h, {
                    text: e.$t("whatsapp_sandbox.chat.card_activate.description"),
                    color: "gray",
                    fontSize: "3",
                    class: "pb-2 break-line"
                }, null, 8, ["text"]), l("div", Oo, [a(p, {
                    text: e.$t("whatsapp_sandbox.chat.card_activate.button"),
                    variant: "green-normal",
                    size: "md",
                    onClick: t[0] || (t[0] = y => s.showActivationModal = !0),
                    "data-testid": "show-activation-modal"
                }, null, 8, ["text"])])]),
                _: 1
            })]),
            _: 1
        })) : (o(),
        x(v, {
            key: 0,
            class: "sandbox__card-sign"
        }, {
            default: w( () => [l("div", Bo, [a(_, {
                icon: "shopping-cart-line",
                class: "text-orange-normal fs-6"
            }), a(u, {
                text: e.$t("whatsapp_sandbox.card_sales.title"),
                size: "md",
                class: "ps-2 break-line"
            }, null, 8, ["text"])]), a(g, null, {
                default: w( () => [a(h, {
                    text: e.$t("whatsapp_sandbox.card_sales.description"),
                    color: "gray",
                    fontSize: "3",
                    class: "pb-2 break-line"
                }, null, 8, ["text"]), l("div", zo, [a(p, {
                    text: e.$t("whatsapp_sandbox.card_sales.button_call_sales"),
                    icon: "whatsapp-line",
                    variant: "orange-normal",
                    size: "md",
                    class: "ml-10",
                    onClick: i.talkToSales
                }, null, 8, ["text", "onClick"])])]),
                _: 1
            })]),
            _: 1
        }))])])]),
        _: 1
    })])
}
const Po = W(yo, [["render", Lo], ["__scopeId", "data-v-e3615ccf"]])
  , qg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Po
}, Symbol.toStringTag, {
    value: "Module"
}))
  , No = {
    class: "d-flex justify-content-center mt-4"
}
  , jo = {
    class: "mt-4"
}
  , Wo = {
    class: "d-flex justify-content-between w-100"
}
  , Ho = {
    __name: "InfoChannelModal",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        channelId: {
            type: String,
            default: null
        }
    },
    emits: ["close"],
    setup(e, {emit: t}) {
        const n = e
          , {notifyError: c, notifySuccess: s} = He()
          , i = t
          , {t: d} = oe()
          , u = We()
          , h = [{
            label: "Whatsapp",
            value: "whatsapp"
        }]
          , _ = z(null)
          , p = z("")
          , g = z(null)
          , f = async () => {
            var v, y;
            n.channelId && (g.value = await u.dispatch("messaging/channel/getChannel", {
                id: n.channelId
            }),
            p.value = (v = g.value) == null ? void 0 : v.description,
            _.value = (y = g.value) != null && y.type ? g.value.type : "whatsapp")
        }
          , $ = async () => {
            var v, y;
            try {
                if (!p.value || !_.value) {
                    c("messaging.configurations.info_modal.error_fields");
                    return
                }
                await u.dispatch("messaging/channel/updateChannel", {
                    channelId: n.channelId,
                    description: p.value,
                    type: _.value,
                    users: (v = g.value) == null ? void 0 : v.users,
                    parameters: (y = g.value) == null ? void 0 : y.parameters
                }),
                s("messaging.success.updated")
            } catch {
                c("messaging.error.updated")
            } finally {
                i("close")
            }
        }
        ;
        return tt(async () => {
            await f()
        }
        ),
        (v, y) => {
            const M = r("DsHeading")
              , F = r("DsTypography")
              , O = r("DsInput")
              , V = r("DsSelect")
              , B = r("DsButton")
              , S = r("DsModal");
            return o(),
            x(S, {
                show: e.show,
                onHide: y[3] || (y[3] = D => v.$emit("close")),
                size: "md"
            }, {
                body: w( () => [a(M, {
                    text: T(d)("messaging.configurations.info_modal.title"),
                    size: "md"
                }, null, 8, ["text"]), l("div", No, [a(F, {
                    text: T(d)("messaging.configurations.info_modal.description"),
                    color: "gray-700"
                }, null, 8, ["text"])]), l("div", null, [a(F, {
                    text: T(d)("messaging.configurations.info_modal.channel_name"),
                    color: "black",
                    fontWeight: "bold",
                    class: "mb-2"
                }, null, 8, ["text"]), a(O, {
                    modelValue: p.value,
                    "onUpdate:modelValue": y[0] || (y[0] = D => p.value = D)
                }, null, 8, ["modelValue"])]), l("div", jo, [a(F, {
                    text: T(d)("messaging.configurations.info_modal.for"),
                    color: "black",
                    fontWeight: "bold",
                    class: "mb-2"
                }, null, 8, ["text"]), a(V, {
                    options: h,
                    modelValue: _.value,
                    "onUpdate:modelValue": y[1] || (y[1] = D => _.value = D)
                }, null, 8, ["modelValue"])])]),
                footer: w( () => [l("div", Wo, [a(B, {
                    text: T(d)("cancel"),
                    variant: "link",
                    size: "lg",
                    class: "text-gray",
                    onClick: y[2] || (y[2] = D => v.$emit("close"))
                }, null, 8, ["text"]), a(B, {
                    text: T(d)("save"),
                    size: "lg",
                    loading: v.loading,
                    onClick: $
                }, null, 8, ["text", "loading"])])]),
                _: 1
            }, 8, ["show"])
        }
    }
}
  , Ro = {
    emits: ["close", "save"],
    name: "modal-config",
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        channel: {
            type: Object,
            default: () => ({})
        },
        manualConfig: {
            type: Boolean,
            default: !1
        }
    },
    data: () => ({
        search_in_deals: "",
        use_last_deal: "",
        use_last_responsible_chat: "",
        use_router: "",
        router: {
            value: null,
            label: ""
        },
        loading: !1,
        localManualConfig: null
    }),
    async mounted() {
        var e, t, n, c, s, i, d, u, h, _, p, g;
        if (this.localManualConfig = this.manualConfig,
        this.search_in_deals = (t = (e = this.channel) == null ? void 0 : e.parameters) == null ? void 0 : t.search_in_deals,
        this.use_last_deal = (c = (n = this.channel) == null ? void 0 : n.parameters) == null ? void 0 : c.use_last_deal,
        this.use_last_responsible_chat = (i = (s = this.channel) == null ? void 0 : s.parameters) == null ? void 0 : i.use_last_responsible_chat,
        this.use_router = (u = (d = this.channel) == null ? void 0 : d.parameters) == null ? void 0 : u.use_router,
        (_ = (h = this.channel) == null ? void 0 : h.parameters) != null && _.use_router) {
            const f = await Zs((g = (p = this.channel) == null ? void 0 : p.parameters) == null ? void 0 : g.id_router);
            f && (f != null && f.id) && (this.router = {
                value: f.id,
                label: f.name
            })
        }
    },
    methods: {
        async confirm() {
            var t, n, c, s, i, d, u, h, _;
            const e = {
                id: (t = this.channel) == null ? void 0 : t.id,
                parameters: {
                    show_user_name_message: (c = (n = this.channel) == null ? void 0 : n.parameters) == null ? void 0 : c.show_user_name_message
                }
            };
            (i = (s = this.channel) == null ? void 0 : s.parameters) != null && i.automatic_messages && ((u = (d = this.channel) == null ? void 0 : d.parameters) == null ? void 0 : u.automatic_messages.length) > 0 && (e.parameters.automatic_messages = (_ = (h = this.channel) == null ? void 0 : h.parameters) == null ? void 0 : _.automatic_messages),
            this.localManualConfig ? (e.parameters.search_in_deals = !1,
            e.parameters.use_last_deal = !1,
            e.parameters.use_last_responsible_chat = !1,
            e.parameters.use_router = !1,
            e.parameters.id_router = null) : (e.parameters.search_in_deals = this.search_in_deals,
            e.parameters.use_last_deal = this.use_last_deal,
            e.parameters.use_last_responsible_chat = this.use_last_responsible_chat,
            e.parameters.use_router = this.use_router,
            e.parameters.id_router = this.router ? this.router.value : null),
            this.$emit("save", e),
            this.$emit("close")
        },
        toggleManualConfig() {
            this.localManualConfig && (this.search_in_deals = !1,
            this.use_last_deal = !1,
            this.use_last_responsible_chat = !1,
            this.use_router = !1,
            this.router = {
                value: null,
                label: ""
            })
        }
    }
}
  , qo = {
    class: "d-flex align-items-center justify-content-center"
}
  , Go = {
    class: "w-100 border-bottom"
}
  , Ko = {
    class: "col-12 border-bottom"
}
  , Yo = {
    key: 0,
    class: "w-100"
}
  , Qo = {
    class: "d-flex justify-content-between w-100"
};
function Zo(e, t, n, c, s, i) {
    const d = r("DsSubtitle")
      , u = r("DsIcon")
      , h = r("DsTooltip")
      , _ = r("DsTypography")
      , p = r("DsCheckbox")
      , g = r("DsEntitySelect")
      , f = r("DsButton")
      , $ = r("DsModal");
    return o(),
    x($, {
        show: n.show,
        overflow: "auto",
        size: "md",
        scrollable: "",
        bodyClass: "py-0",
        class: "modal-config",
        onHide: t[6] || (t[6] = v => e.$emit("close"))
    }, {
        header: w( () => [l("div", qo, [a(d, {
            text: e.$t("messaging.configurations.title"),
            color: "black",
            size: "lg"
        }, null, 8, ["text"]), a(h, {
            placement: "auto",
            offset: "0",
            appendToBody: "",
            text: e.$t("messaging.configurations.information"),
            class: "d-flex align-items-center justify-content-center",
            tooltipClass: "col-4 ms-1"
        }, {
            default: w( () => [a(u, {
                icon: "information-line",
                class: "fs-6 ms-2 mb-2"
            })]),
            _: 1
        }, 8, ["text"])])]),
        body: w( () => [l("div", Go, [a(_, {
            text: e.$t("messaging.config.description")
        }, null, 8, ["text"]), l("div", null, [a(p, {
            isSwitch: "",
            label: e.$t("messaging.config.search_in_deals"),
            class: "mb-1",
            disabled: e.localManualConfig,
            labelClass: e.search_in_deals ? "fw-bold" : "fw-normal",
            modelValue: e.search_in_deals,
            "onUpdate:modelValue": t[0] || (t[0] = v => e.search_in_deals = v)
        }, null, 8, ["label", "disabled", "labelClass", "modelValue"]), a(p, {
            isSwitch: "",
            label: e.$t("messaging.config.use_last_responsible_chat"),
            class: "mb-1",
            disabled: e.localManualConfig,
            labelClass: e.use_last_responsible_chat ? "fw-bold" : "fw-normal",
            modelValue: e.use_last_responsible_chat,
            "onUpdate:modelValue": t[1] || (t[1] = v => e.use_last_responsible_chat = v)
        }, null, 8, ["label", "disabled", "labelClass", "modelValue"]), a(p, {
            isSwitch: "",
            label: e.$t("messaging.config.use_router"),
            class: "mb-1",
            disabled: e.localManualConfig,
            labelClass: e.use_router ? "fw-bold" : "fw-normal",
            modelValue: e.use_router,
            "onUpdate:modelValue": t[2] || (t[2] = v => e.use_router = v)
        }, null, 8, ["label", "disabled", "labelClass", "modelValue"])]), l("div", Ko, [e.use_router ? (o(),
        m("label", Yo, [a(_, {
            text: e.$t("messaging.config.automatic_router"),
            class: "mb-0",
            fontWeight: "bold",
            fontSize: "2"
        }, null, 8, ["text"]), a(g, {
            size: "lg",
            class: "mb-2",
            placeholder: e.$t("messaging.config.select_router"),
            entity: "routers",
            modelValue: e.router,
            "onUpdate:modelValue": t[3] || (t[3] = v => e.router = v),
            closeOnSelect: !0,
            appendToBody: ""
        }, null, 8, ["placeholder", "modelValue"])])) : b("", !0)]), a(p, {
            isSwitch: "",
            label: e.$t("messaging.configurations.responsible.options.regular"),
            class: "pt-3 pb-2",
            labelClass: e.localManualConfig ? "fw-bold" : "fw-normal",
            modelValue: e.localManualConfig,
            "onUpdate:modelValue": [t[4] || (t[4] = v => e.localManualConfig = v), i.toggleManualConfig]
        }, null, 8, ["label", "labelClass", "modelValue", "onUpdate:modelValue"])])]),
        footer: w( () => [l("div", Qo, [a(f, {
            text: e.$t("messaging.config.update"),
            size: "lg",
            class: "w-25",
            loading: e.loading,
            onClick: i.confirm
        }, null, 8, ["text", "loading", "onClick"]), a(f, {
            text: e.$t("messaging.config.cancel"),
            variant: "link",
            size: "lg",
            class: "w-25 ms-auto text-green-normal",
            onClick: t[5] || (t[5] = v => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const Lt = W(Ro, [["render", Zo]])
  , Jo = {
    emits: ["templateSelected", "isNewTemplate"],
    name: "messaging-model",
    data() {
        return {
            search: null,
            filteredTemplates: [],
            templateSelected: {
                id: null,
                name: null,
                description: null,
                isNewTemplate: !1,
                json_content: null
            },
            templateId: null,
            total: 0,
            contactData: null,
            showTemplateModal: !1,
            loading: !1
        }
    },
    components: {},
    watch: {
        search: {
            deep: !0,
            handler: async function() {
                await this.loadOptions()
            }
        }
    },
    computed: {
        ...ee({
            channels: "messaging/channel/channels",
            templates: "messaging/template/templates"
        }),
        dropdown() {
            return this.$refs.dropdownRef.$el
        },
        newTemplateSelected() {
            return !!(this.templateSelected.id && this.templateSelected.isNewTemplate)
        }
    },
    methods: {
        ...se({
            loadTemplates: "messaging/template/loadTemplates"
        }),
        selectTemplate(e, t) {
            this.templateSelected = this.filteredTemplates[e],
            this.emitTemplateData(),
            t()
        },
        newTemplate() {
            window.open("#/messaging-template/create", "_blank"),
            this.templateId = null
        },
        async loadOptions() {
            if (!this.loading) {
                this.loading = !0;
                try {
                    await this.loadTemplates({
                        search: this.search,
                        status: ["approved"],
                        id_channel: this.channels[0].id,
                        limit: 100
                    }),
                    this.filteredTemplates = this.templates.filter(e => {
                        var t;
                        return (((t = e.template_params) == null ? void 0 : t.items) ?? e.template_params ?? []).length <= 0
                    }
                    )
                } catch (e) {
                    this.error = e
                } finally {
                    this.loading = !1
                }
            }
        },
        async activeScroll() {
            await this.loadOptions();
            const e = setTimeout( () => {
                const t = this.dropdown.querySelector("#dropdown");
                t == null || t.addEventListener("scroll", () => this.handleScroll(t)),
                clearTimeout(e)
            }
            , 10)
        },
        async emitTemplateData() {
            this.templateSelected && this.$emit("templateSelected", this.templateSelected)
        },
        cleanTemplate() {
            this.newTemplateSelected && this.$emit("isNewTemplate", !1),
            this.$emit("isNewTemplate", !1),
            this.templateSelected.id = null,
            this.templateSelected.name = null
        }
    }
}
  , Xo = {
    class: "d-flex align-items-center"
}
  , er = {
    id: "dropdown",
    class: "bg-white rounded-2 min-vw-20 shadow py-2 position-relative d-flex flex-column"
}
  , tr = {
    class: "overflow-auto ds-scrollbar max-vh-20 flex-grow-1"
}
  , sr = {
    class: "w-100 px-3 mb-3 pb-2 border-bottom"
}
  , ar = {
    key: 0
}
  , nr = {
    class: "d-flex align-items-center"
}
  , lr = ["onClick"]
  , ir = {
    key: 1,
    class: "d-flex justify-content-center"
}
  , or = {
    class: "w-100 bg-white d-flex justify-content-start"
}
  , rr = {
    class: "w-100"
}
  , cr = {
    key: 0,
    class: "position-relative"
};
function dr(e, t, n, c, s, i) {
    const d = r("DsInput")
      , u = r("DsTypography")
      , h = r("DsIcon")
      , _ = r("DsButton")
      , p = r("DsButtonDropdown")
      , g = r("DsTooltip");
    return o(),
    m("div", Xo, [a(p, {
        ref: "dropdownRef",
        buttonText: e.$t("mail.thread_list.mail_editor.model.add"),
        buttonVariant: "green-normal",
        buttonClass: "border-0 bg-transparent text-green-normal",
        rightIconClass: "ms-auto",
        onOpen: i.activeScroll,
        closeOnClickInside: !1,
        placement: "left"
    }, {
        default: w( ({close: f}) => [l("div", er, [l("div", tr, [l("div", sr, [a(d, {
            id: "search",
            key: "search",
            icon: "search-line",
            modelValue: s.search,
            "onUpdate:modelValue": t[0] || (t[0] = $ => s.search = $),
            class: "border-gray-400",
            placeholder: "Pesquisar"
        }, null, 8, ["modelValue"])]), s.loading ? (o(),
        m("div", ir, [a(h, {
            icon: "loader-4-line",
            class: "fs-9 text-green-normal ds-spinner"
        })])) : (o(),
        m("div", ar, [(o(!0),
        m(N, null, j(s.filteredTemplates, ($, v) => (o(),
        m("div", {
            key: v,
            class: Y(["cursor-pointer px-2 hover:bg-green-light", e.templates.length > 1 && "mb-2"])
        }, [l("div", nr, [l("div", {
            class: "d-flex align-items-center ps-2 flex-grow-1",
            onClick: y => i.selectTemplate(v, f)
        }, [a(u, {
            text: $.name,
            class: "mb-1 fs-2",
            color: s.templateSelected.id === $.id ? "green-normal" : "black"
        }, null, 8, ["text", "color"])], 8, lr)])], 2))), 128))]))]), l("div", or, [l("div", rr, [a(_, {
            text: e.$t("mail.thread_list.mail_editor.model.create"),
            variant: "outline-green-normal",
            class: "w-100 p-3 border-0 justify-content-start",
            icon: "add-circle-line",
            onClick: i.newTemplate
        }, null, 8, ["text", "onClick"])])])])]),
        _: 1
    }, 8, ["buttonText", "onOpen"]), i.newTemplateSelected ? (o(),
    m("div", cr, [a(g, {
        text: e.$t("messaging.configurations.modal_new_message.clear_model"),
        placement: "right",
        appendToBody: !1
    }, {
        default: w( () => [a(_, {
            icon: "delete-bin-line",
            variant: "transparent",
            class: "ms-2",
            onClick: i.cleanTemplate
        }, null, 8, ["onClick"])]),
        _: 1
    }, 8, ["text"])])) : b("", !0)])
}
const mr = W(Jo, [["render", dr]])
  , ur = {
    emits: ["close", "confirm"],
    props: {
        show: {
            type: Boolean,
            required: !0
        },
        channel: {
            type: Object,
            default: () => ({})
        },
        message: {
            type: Object,
            default: () => null
        }
    },
    components: {
        MessagingModel: mr
    },
    data() {
        return {
            msgTitle: "",
            startTime: "00:00",
            endTime: "23:59",
            messageContent: "",
            template: null,
            sendOncePerDay: !1,
            days: [{
                label: this.$t("messaging.configurations.modal_new_message.days.monday"),
                value: 1,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.tuesday"),
                value: 2,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.wednesday"),
                value: 3,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.thursday"),
                value: 4,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.friday"),
                value: 5,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.saturday"),
                value: 6,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.sunday"),
                value: 0,
                selected: !1
            }]
        }
    },
    watch: {
        show(e) {
            e && this.message ? (this.msgTitle = this.message.title,
            this.startTime = this.message.start_time,
            this.endTime = this.message.end_time,
            this.messageContent = Js(this.message.message, this.channel.type),
            this.template = this.message.template,
            this.sendOncePerDay = this.message.send_once_per_day,
            this.message.days.forEach(t => {
                const n = this.days.findIndex(c => c.value === t);
                this.days[n].selected = !0
            }
            )) : this.clearModal()
        }
    },
    computed: {
        ...se("messaging/messages", ["loadMessageAvailability"]),
        selectedDays() {
            return this.days.filter(e => e.selected)
        },
        editorConfig() {
            return {
                placeholder: this.$t("messaging.configurations.modal_new_message.editor_placeholder"),
                modules: {
                    toolbar: [["code-block"], ["bold", "italic"], ["link"], [{
                        list: "ordered"
                    }, {
                        list: "bullet"
                    }], [{
                        script: "sub"
                    }, {
                        script: "super"
                    }], [{
                        indent: "-1"
                    }, {
                        indent: "+1"
                    }], [{
                        align: ""
                    }, {
                        align: "center"
                    }, {
                        align: "right"
                    }, {
                        align: "justify"
                    }], [{
                        size: ["small", !1, "large", "huge"]
                    }], ["clean"]],
                    imageDropAndPaste: {
                        handler: this.imageHandler
                    }
                }
            }
        },
        editorDisabled() {
            return !!this.template
        },
        editorModules() {
            return {
                name: "imageDropAndPaste",
                module: vt,
                options: {
                    handler: this.imageHandler
                }
            }
        },
        editorToolbar() {
            return [["code-block"], ["bold", "italic"], ["link"], [{
                list: "ordered"
            }, {
                list: "bullet"
            }], [{
                script: "sub"
            }, {
                script: "super"
            }], [{
                indent: "-1"
            }, {
                indent: "+1"
            }], [{
                align: ""
            }, {
                align: "center"
            }, {
                align: "right"
            }, {
                align: "justify"
            }], [{
                size: ["small", !1, "large", "huge"]
            }], ["clean"]]
        }
    },
    methods: {
        activateDay(e) {
            e.selected = !e.selected
        },
        getDayVariant(e) {
            return e.selected ? "green-normal" : "outline-green-normal"
        },
        async saveAutoMessage() {
            if (!this.msgTitle || !this.startTime || !this.endTime || !this.messageContent) {
                this.$notification.notifyError("messaging.configurations.modal_new_message.empty_fields");
                return
            }
            if (this.startTime > this.endTime) {
                this.$notification.notifyError("messaging.configurations.modal_new_message.start_time_greater_than_end_time");
                return
            }
            const e = {
                edit: !!this.message,
                title: this.msgTitle,
                start_time: this.startTime,
                end_time: this.endTime,
                days: this.selectedDays.map(t => t.value),
                message: Xs(this.messageContent, this.channel.type),
                send_once_per_day: this.sendOncePerDay
            };
            this.clearModal(),
            this.$emit("confirm", e),
            this.$emit("close")
        },
        handleTemplateSelected(e) {
            this.template = e,
            this.messageContent = e.content,
            this.$nextTick( () => {
                this.$refs.quillEditor && this.$refs.quillEditor.setContents(this.messageContent)
            }
            )
        },
        removeTemplateSelected() {
            this.template = null,
            this.messageContent = "",
            this.$nextTick( () => {
                this.$refs.quillEditor && this.$refs.quillEditor.setContents("")
            }
            )
        },
        clearModal() {
            this.msgTitle = "",
            this.startTime = "00:00",
            this.endTime = "00:00",
            this.messageContent = "",
            this.template = null,
            this.sendOncePerDay = !1,
            this.days = [{
                label: this.$t("messaging.configurations.modal_new_message.days.monday"),
                value: 1,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.tuesday"),
                value: 2,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.wednesday"),
                value: 3,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.thursday"),
                value: 4,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.friday"),
                value: 5,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.saturday"),
                value: 6,
                selected: !1
            }, {
                label: this.$t("messaging.configurations.modal_new_message.days.sunday"),
                value: 0,
                selected: !1
            }]
        },
        imageHandler(e, t) {
            return e === "text/plain" ? this.$refs.quillEditor.quill.clipboard.dangerouslyPasteHTML(t) : !1
        }
    }
}
  , pr = {
    class: "d-flex my-3 justify-content-between col-12"
}
  , gr = {
    class: "col-6 pe-4"
}
  , hr = {
    class: "col-6"
}
  , _r = {
    class: "d-flex w-100 mt-2"
}
  , fr = {
    class: "d-flex w-100 mt-4"
}
  , br = {
    class: "d-flex mb-2 align-items-center mt-4"
}
  , vr = {
    class: "d-flex w-100 mx-3 mt-2"
};
function yr(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("DsTypography")
      , h = r("DsInput")
      , _ = r("DsDatePicker")
      , p = r("DsButton")
      , g = r("DsCheckbox")
      , f = r("MessagingModel")
      , $ = r("quill-editor")
      , v = r("DsModal");
    return o(),
    x(v, {
        show: n.show,
        size: "lg",
        scrollable: "",
        bodyClass: "mx-3 pt-0",
        headerClass: "mx-3 mt-2",
        footerClass: "shadow-sm",
        class: "modal-message-config",
        onHide: t[8] || (t[8] = y => e.$emit("close"))
    }, {
        header: w( () => [l("div", null, [a(d, {
            text: e.$t("messaging.configurations.modal_new_message.modal_title"),
            size: "md",
            class: "pe-2"
        }, null, 8, ["text"]), a(u, {
            color: "black",
            fontWeight: "normal",
            text: e.$t("messaging.configurations.modal_new_message.subtitle")
        }, null, 8, ["text"])])]),
        body: w( () => [a(d, {
            text: e.$t("messaging.configurations.modal_new_message.title"),
            size: "sm"
        }, null, 8, ["text"]), a(h, {
            modelValue: s.msgTitle,
            "onUpdate:modelValue": t[0] || (t[0] = y => s.msgTitle = y),
            type: "text",
            placeholder: e.$t("messaging.configurations.modal_new_message.title_placeholder")
        }, null, 8, ["modelValue", "placeholder"]), l("div", pr, [l("div", gr, [a(d, {
            text: e.$t("messaging.configurations.modal_new_message.start"),
            size: "sm"
        }, null, 8, ["text"]), a(_, {
            type: "time",
            class: "w-100",
            modelValue: s.startTime,
            "onUpdate:modelValue": t[1] || (t[1] = y => s.startTime = y),
            format: "HH:mm"
        }, null, 8, ["modelValue"])]), l("div", hr, [a(d, {
            text: e.$t("messaging.configurations.modal_new_message.end"),
            size: "sm"
        }, null, 8, ["text"]), a(_, {
            type: "time",
            class: "w-100",
            modelValue: s.endTime,
            "onUpdate:modelValue": t[2] || (t[2] = y => s.endTime = y),
            format: "HH:mm"
        }, null, 8, ["modelValue"])])]), a(d, {
            text: e.$t("messaging.configurations.modal_new_message.days.label"),
            size: "sm",
            class: "mt-4"
        }, null, 8, ["text"]), l("div", _r, [(o(!0),
        m(N, null, j(s.days, y => (o(),
        x(p, {
            key: y.value,
            text: y.label,
            variant: i.getDayVariant(y),
            size: "sm",
            class: "w-100 me-1 cursor-pointer btn-badge",
            onClick: M => i.activateDay(y)
        }, null, 8, ["text", "variant", "onClick"]))), 128))]), l("div", fr, [a(g, {
            class: "m-0",
            isSwitch: "",
            modelValue: s.sendOncePerDay,
            "onUpdate:modelValue": t[3] || (t[3] = y => s.sendOncePerDay = y),
            label: e.$t("messaging.configurations.responsible.options.unique_automatic_message"),
            labelClass: "text-black fw-semibold"
        }, null, 8, ["modelValue", "label"])]), l("div", br, [a(d, {
            text: e.$t("messaging.configurations.modal_new_message.message"),
            size: "sm",
            fontWeight: "bold"
        }, null, 8, ["text"]), s.template ? (o(),
        x(p, {
            key: 1,
            icon: "close-line",
            text: e.$t("messaging.chat.chat_editor.clean"),
            variant: "link",
            class: "ms-auto text-red-normal",
            onClick: t[5] || (t[5] = y => i.removeTemplateSelected())
        }, null, 8, ["text"])) : (o(),
        x(f, {
            key: 0,
            class: "ms-auto",
            onTemplateSelected: t[4] || (t[4] = y => i.handleTemplateSelected(y))
        }))]), a($, {
            ref: "quillEditor",
            content: s.messageContent,
            "onUpdate:content": t[6] || (t[6] = y => s.messageContent = y),
            contentType: "html",
            modules: i.editorModules,
            toolbar: i.editorToolbar,
            options: i.editorConfig,
            enable: !i.editorDisabled,
            readOnly: i.editorDisabled,
            onClick: e.loadMessageAvailability
        }, null, 8, ["content", "modules", "toolbar", "options", "enable", "readOnly", "onClick"])]),
        footer: w( () => [l("div", vr, [a(p, {
            icon: "check-line",
            text: e.$t("save"),
            size: "lg",
            class: "mb-2 me-auto w-50",
            onClick: i.saveAutoMessage
        }, null, 8, ["text", "onClick"]), a(p, {
            text: e.$t("cancel"),
            variant: "link",
            size: "lg",
            class: "mb-2 w-50 text-green-normal",
            onClick: t[7] || (t[7] = y => e.$emit("close"))
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const Pt = W(ur, [["render", yr]])
  , wr = {
    emits: ["close", "confirm"],
    name: "modal-choose-action",
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
  , Cr = {
    class: "d-flex justify-content-between w-100"
};
function xr(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("DsTypography")
      , h = r("DsButton")
      , _ = r("DsModal");
    return o(),
    x(_, {
        show: n.show,
        onHide: t[2] || (t[2] = p => e.$emit("close")),
        size: "md",
        headerClass: "mx-2",
        bodyClass: "mx-2",
        footerClass: "mx-2"
    }, {
        header: w( () => [l("div", null, [a(d, {
            class: "mb-4",
            size: "md",
            text: e.$t("messaging.configurations.modal_new_message.actions.delete")
        }, null, 8, ["text"]), a(u, {
            tag: "span",
            fontSize: "4",
            text: e.$t("messaging.configurations.modal_delete_message.subtitle")
        }, null, 8, ["text"]), a(u, {
            class: "fw-semibold text-gray-dark",
            fontSize: "4",
            text: `'${n.message.title}' ?`
        }, null, 8, ["text"])])]),
        body: w( () => [l("div", null, [a(u, {
            tag: "span",
            fontSize: "4",
            text: e.$t("messaging.configurations.modal_delete_message.cant_undo")
        }, null, 8, ["text"])])]),
        footer: w( () => [l("div", Cr, [a(h, {
            onClick: t[0] || (t[0] = p => e.$emit("confirm")),
            variant: "red-normal",
            text: e.$t("messaging.configurations.modal_delete_message.confirm")
        }, null, 8, ["text"]), a(h, {
            onClick: t[1] || (t[1] = p => e.$emit("close")),
            variant: "link",
            text: e.$t("cancel")
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const Nt = W(wr, [["render", xr]])
  , kr = {
    emits: ["close"],
    name: "modal-choose-action",
    computed: {
        ...ee({
            getHtmlMessage: "messaging/messages/getHtmlMessage"
        }),
        diplayedMessage() {
            return this.getHtmlMessage({
                message: this.message.message
            })
        }
    },
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
  , $r = {
    class: "auto-message-preview shadow-lg rounded-top"
}
  , Tr = {
    class: "auto-message-preview__body p-3 pb-5"
}
  , Dr = {
    class: "auto-message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
};
function Sr(e, t, n, c, s, i) {
    const d = r("DsHeading")
      , u = r("DsTypography")
      , h = r("DsSubtitle")
      , _ = r("DsModal");
    return o(),
    x(_, {
        show: n.show,
        onHide: t[0] || (t[0] = p => e.$emit("close")),
        size: "md",
        headerClass: "mx-2",
        bodyClass: "mx-2",
        footerClass: "mx-2"
    }, {
        header: w( () => [l("div", null, [a(d, {
            size: "md",
            text: n.message.title
        }, null, 8, ["text"])])]),
        body: w( () => [l("div", $r, [a(u, {
            tag: "div",
            class: "auto-message-preview__header p-3 text-white d-flex align-items-center fw-bold",
            color: "white"
        }, {
            default: w( () => [t[1] || (t[1] = l("div", {
                tag: "span",
                class: "p-3 bg-gray-300 me-2 rounded-3"
            }, null, -1)), P(" " + C(e.$t("messaging_template.create.preview.company")), 1)]),
            _: 1,
            __: [1]
        }), l("div", Tr, [l("div", Dr, [a(u, {
            tag: "span",
            innerHTML: i.diplayedMessage
        }, null, 8, ["innerHTML"]), a(h, {
            color: "gray-600",
            size: "sm",
            class: "mb-0 mt-2 text-end",
            text: e.$t("messaging_template.create.preview.now")
        }, null, 8, ["text"])])])])]),
        _: 1
    }, 8, ["show"])
}
const jt = W(kr, [["render", Sr], ["__scopeId", "data-v-a3cadd15"]])
  , Mr = {
    emits: ["close"],
    name: "config-side-bar",
    components: {
        MessagingModalConfig: Lt,
        ModalAutoMessage: Pt,
        ModalDeleteAutoMessage: Nt,
        ModalPreviewAutoMessage: jt
    },
    props: {
        channelId: {
            type: String,
            default: null
        },
        show: {
            type: Boolean,
            default: !1
        }
    },
    data() {
        return {
            channel: {},
            integrateForm: {
                idGupshupApp: {
                    value: "",
                    error: !1
                },
                nameGupshupApp: {
                    value: "",
                    error: !1
                },
                authenticationLink: {
                    value: "",
                    error: !1
                }
            },
            phone: "",
            users: [],
            showResponsibleConfigModal: !1,
            hasResponsibleConfig: !1,
            responsibleConfig: {
                search_in_deals: {
                    label: this.$t("messaging.configurations.responsible.options.deal"),
                    value: null
                },
                use_last_responsible_chat: {
                    label: this.$t("messaging.configurations.responsible.options.last_responsible"),
                    value: null
                },
                use_router: {
                    label: this.$t("messaging.configurations.responsible.options.router"),
                    value: null,
                    id_router: null
                },
                regular: {
                    label: this.$t("messaging.configurations.responsible.options.regular"),
                    value: null
                }
            },
            permissions: [{
                name: "chats",
                icon: "eye-line",
                route: "config.roles.index"
            }, {
                name: "template",
                icon: "question-answer-line",
                route: "messaging_template.list"
            }, {
                name: "tags",
                icon: "price-tag-3-line",
                route: "config.tags.index"
            }],
            showUserNameMessage: !1,
            useLastDeal: !1,
            useVoice: !1,
            voiceButton: !1,
            router: {
                value: null,
                label: ""
            },
            loading: !1,
            showAutoMessageModal: !1,
            showDeleteAutoMessageModal: !1,
            showPreviewAutoMessageModal: !1,
            selectedMessageIndex: null,
            autoMessages: []
        }
    },
    async mounted() {
        await this.loadData()
    },
    computed: {
        ...ee(["subscriptionPlanSpecs", "user", "super", "showVoiceWorkflow"]),
        showIntegrateSection() {
            return this.super
        },
        badgeColor() {
            return this.hasResponsibleConfig ? "green-light" : "yellow-dark"
        },
        hasScheduledMessagesSpec() {
            var e;
            return (e = this.subscriptionPlanSpecs) == null ? void 0 : e.includes("whatsapp_scheduled_answers")
        },
        badgeIcon() {
            return this.hasResponsibleConfig ? "checkbox-circle-line" : "alert-line"
        },
        badgeText() {
            return this.hasResponsibleConfig ? this.$t("messaging.configurations.responsible.configured") : this.$t("messaging.configurations.responsible.pending")
        },
        badgeTextColor() {
            return this.hasResponsibleConfig ? "green-normal" : "white"
        },
        disableLastDeal() {
            return this.responsibleConfig.search_in_deals.value === !1
        },
        lastDealTooltip() {
            return this.disableLastDeal ? this.$t("messaging.configurations.responsible.options.last_deal_disable_tooltip") : this.$t("messaging.configurations.responsible.options.last_deal_tooltip")
        },
        selectedMessage() {
            return this.autoMessages && this.selectedMessageIndex !== null ? this.autoMessages[this.selectedMessageIndex] : null
        }
    },
    methods: {
        ...se("messaging/channel", ["updateChannel", "getChannel", "createChannel", "integrateChannel"]),
        async integrate() {
            if (this.loading = !0,
            this.integrateForm.idGupshupApp.error = !1,
            this.integrateForm.nameGupshupApp.error = !1,
            this.integrateForm.authenticationLink.error = !1,
            !this.integrateForm.idGupshupApp.value) {
                this.integrateForm.idGupshupApp.error = !0,
                this.loading = !1;
                return
            }
            if (!this.integrateForm.nameGupshupApp.value) {
                this.integrateForm.nameGupshupApp.error = !0,
                this.loading = !1;
                return
            }
            if (!this.integrateForm.authenticationLink.value) {
                this.integrateForm.authenticationLink.error = !0,
                this.loading = !1;
                return
            }
            try {
                await this.integrateChannel({
                    id_channel: this.channel.id,
                    id_gupshup_app: this.integrateForm.idGupshupApp.value,
                    name_gupshup_app: this.integrateForm.nameGupshupApp.value,
                    authentication_link: this.integrateForm.authenticationLink.value
                }),
                this.$notification.notifySuccess("messaging.configurations.activation.integration_sent")
            } catch {
                this.$notification.notifyError("messaging.configurations.activation.integration_error")
            } finally {
                this.loading = !1
            }
        },
        goToPermission(e) {
            const t = this.$router.resolve({
                name: e
            });
            window.open(t.href, "_blank")
        },
        mask(e) {
            return St(e)
        },
        async saveAllConfigs() {
            this.loading = !0;
            try {
                this.channel.id ? await this.updateChannel({
                    channelId: this.channel.id,
                    description: this.channel.description,
                    users: this.users.map(e => e.code),
                    parameters: this.channel.parameters
                }) : await this.createChannel({
                    description: this.channel.description,
                    users: this.users.map(e => e.code),
                    parameters: this.channel.parameters
                }),
                this.$notification.notifySuccess("messaging.success.updated")
            } catch {
                this.$notification.notifyError("messaging.error.updated")
            } finally {
                this.loading = !1,
                this.$emit("close")
            }
        },
        async loadData() {
            var e, t, n, c, s;
            try {
                this.loading = !0;
                const i = await Mt();
                if (this.usersOptions = i.data.users.map(d => ({
                    code: parseInt(d.id, 10),
                    label: d.name
                })),
                this.channelId) {
                    const d = await this.getChannel({
                        id: this.channelId
                    });
                    this.channel = d,
                    this.confirmResponsibleConfig(),
                    this.users = this.usersOptions.filter(u => {
                        var h;
                        return (h = d == null ? void 0 : d.users) == null ? void 0 : h.includes(u.code)
                    }
                    ),
                    this.phone = (e = d == null ? void 0 : d.parameters) != null && e.phone ? st(d.parameters.phone) : "",
                    this.showUserNameMessage = (t = d == null ? void 0 : d.parameters) == null ? void 0 : t.show_user_name_message,
                    this.useLastDeal = (n = d == null ? void 0 : d.parameters) == null ? void 0 : n.use_last_deal,
                    this.autoMessages = ((c = d == null ? void 0 : d.parameters) == null ? void 0 : c.automatic_messages) || [],
                    this.useVoice = ((s = d == null ? void 0 : d.parameters) == null ? void 0 : s.use_voice) || !1
                } else
                    this.saveConfigs({}),
                    this.hasResponsibleConfig = !1
            } catch {
                this.$notification.notifyError("messaging.configurations.load_error"),
                this.$emit("close")
            } finally {
                this.loading = !1
            }
        },
        confirmResponsibleConfig() {
            var e, t, n, c, s, i, d, u;
            this.responsibleConfig.search_in_deals.value = (t = (e = this.channel) == null ? void 0 : e.parameters) == null ? void 0 : t.search_in_deals,
            this.responsibleConfig.use_last_responsible_chat.value = (c = (n = this.channel) == null ? void 0 : n.parameters) == null ? void 0 : c.use_last_responsible_chat,
            this.responsibleConfig.use_router.value = (i = (s = this.channel) == null ? void 0 : s.parameters) == null ? void 0 : i.use_router,
            this.responsibleConfig.use_router.id_router = (u = (d = this.channel) == null ? void 0 : d.parameters) == null ? void 0 : u.id_router,
            this.responsibleConfig.regular.value = !1,
            this.hasResponsibleConfig = Object.values(this.responsibleConfig).some(h => h.value && h.value !== null && h !== "" && h !== !1),
            this.hasResponsibleConfig || (this.responsibleConfig.regular.value = !0)
        },
        async saveConfigs(e) {
            var n, c, s, i, d;
            const t = {
                show_user_name_message: this.showUserNameMessage,
                use_last_deal: this.useLastDeal,
                search_in_deals: (n = e == null ? void 0 : e.parameters) == null ? void 0 : n.search_in_deals,
                use_last_responsible_chat: (c = e == null ? void 0 : e.parameters) == null ? void 0 : c.use_last_responsible_chat,
                use_router: (s = e == null ? void 0 : e.parameters) == null ? void 0 : s.use_router,
                id_router: ((i = e == null ? void 0 : e.parameters) == null ? void 0 : i.id_router) || null,
                automatic_messages: (d = e == null ? void 0 : e.parameters) == null ? void 0 : d.automatic_messages,
                use_voice: this.useVoice,
                voice_button: this.voiceButton
            };
            this.channel.parameters = {
                ...this.channel.parameters,
                ...t
            },
            this.confirmResponsibleConfig(),
            this.loading = !0;
            try {
                await this.updateChannel({
                    channelId: e.id,
                    parameters: t
                }),
                await this.loadData(),
                this.$notify({
                    type: "success",
                    title: this.$t("success"),
                    text: this.$t("messaging.success.updated")
                })
            } catch {
                this.$notify({
                    type: "error",
                    title: this.$t("error"),
                    text: this.$t("messaging.error.updated")
                })
            } finally {
                this.loading = !1
            }
        },
        async saveAutoMessage(e) {
            if (this.hasConflictingInterval(e)) {
                this.$notification.notifyError("messaging.configurations.modal_new_message.error_interval");
                return
            }
            e.edit ? this.channel.parameters.automatic_messages[this.selectedMessageIndex] = e : this.channel.parameters.automatic_messages ? this.channel.parameters.automatic_messages.push(e) : this.channel.parameters.automatic_messages = [e],
            this.autoMessages = this.channel.parameters.automatic_messages || []
        },
        validateLastDeal() {
            this.responsibleConfig.search_in_deals.value === !1 && (this.responsibleConfig.search_in_deals.value = !1)
        },
        toggleAccordion(e) {
            e.classList.toggle("bg-gray-light")
        },
        callDeleteMessage(e) {
            this.selectedMessageIndex = e,
            this.showDeleteAutoMessageModal = !0
        },
        callEditMessage(e) {
            this.selectedMessageIndex = e,
            this.showAutoMessageModal = !0
        },
        callPreviewMessage(e) {
            this.selectedMessageIndex = e,
            this.showPreviewAutoMessageModal = !0
        },
        closeAutoMessageModal() {
            this.showAutoMessageModal = !1,
            this.selectedMessageIndex = null
        },
        closeDeleteAutoMessageModal() {
            this.showDeleteAutoMessageModal = !1,
            this.selectedMessageIndex = null
        },
        closePreviewAutoMessageModal() {
            this.showPreviewAutoMessageModal = !1,
            this.selectedMessageIndex = null
        },
        handleDeleteMessage() {
            this.channel.parameters.automatic_messages.splice(this.selectedMessageIndex, 1),
            this.showDeleteAutoMessageModal = !1
        },
        getHourInterval(e) {
            const {start_time: t, end_time: n} = e;
            return `${t} - ${n}`
        },
        getDaysInterval(e) {
            const {days: t} = e
              , n = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            let s = t.map(i => this.$t(`messaging.configurations.modal_new_message.days_short.${n[i]}`)).join(", ");
            return s = s.replace(/, (\s*)$/, "$1"),
            s
        },
        convertToMinutes(e) {
            const [t,n] = e.split(":").map(Number);
            return t * 60 + n
        },
        hasConflictingInterval(e) {
            const t = {
                start: this.convertToMinutes(e.start_time),
                end: this.convertToMinutes(e.end_time)
            };
            return this.autoMessages.some(n => {
                const c = {
                    start: this.convertToMinutes(n.start_time),
                    end: this.convertToMinutes(n.end_time)
                }
                  , s = c.start < t.end && c.end > t.start
                  , i = e.days.some(d => n.days.includes(d));
                return !e.edit && s && i
            }
            )
        }
    }
}
  , Ir = {
    class: "mx-3 mt-3 w-100"
}
  , Vr = {
    class: "d-flex align-items-center mb-2"
}
  , Ar = {
    class: "bg-white h-100 chat-config-sidebar__body ds-scrollbar"
}
  , Fr = {
    class: "d-flex flex-column h-100"
}
  , Er = {
    class: "mx-3"
}
  , Br = {
    class: "mb-3"
}
  , zr = {
    class: "mb-1"
}
  , Ur = {
    class: "d-flex align-items-center"
}
  , Or = {
    key: 0
}
  , Lr = {
    class: "d-flex mb-3"
}
  , Pr = {
    class: "d-flex flex-column mb-2"
}
  , Nr = {
    key: 1
}
  , jr = {
    class: "d-flex align-items-center"
}
  , Wr = {
    class: "d-flex mb-1 mx-2 flex-column"
}
  , Hr = {
    key: 0,
    class: "border rounded bg-white my-3"
}
  , Rr = {
    class: "d-flex flex-column p-1"
}
  , qr = {
    class: "d-flex align-items-center"
}
  , Gr = {
    class: "border rounded d-flex flex-column align-items-start"
}
  , Kr = {
    key: 1
}
  , Yr = {
    class: "d-flex align-items-center"
}
  , Qr = {
    key: 0
}
  , Zr = {
    class: "d-flex mb-2"
}
  , Jr = {
    class: "d-flex flex-column mb-2"
}
  , Xr = {
    key: 1
}
  , ec = {
    class: "mx-3 mt-3 border rounded d-flex flex-column"
}
  , tc = {
    class: "m-3 border rounded"
}
  , sc = ["onClick"]
  , ac = {
    class: "d-flex"
}
  , nc = {
    class: "d-flex justify-content-between w-100"
};
function lc(e, t, n, c, s, i) {
    const d = r("DsSubtitle")
      , u = r("DsBadge")
      , h = r("DsTypography")
      , _ = r("DsInput")
      , p = r("DsButton")
      , g = r("DsAccordionItem")
      , f = r("DsIcon")
      , $ = r("DsCheckbox")
      , v = r("DsButtonDropdown")
      , y = r("DsSelect")
      , M = r("DsTooltip")
      , F = r("MessagingModalConfig")
      , O = r("ModalAutoMessage")
      , V = r("ModalPreviewAutoMessage")
      , B = r("ModalDeleteAutoMessage")
      , S = r("DsModal");
    return o(),
    x(S, {
        class: "rounded-start chat-config-sidebar",
        placement: "end",
        bodyClass: "pt-0 ds-scrollbar mb-4",
        show: n.show,
        onHide: t[26] || (t[26] = D => e.$emit("close", D)),
        size: "lg",
        scrollable: ""
    }, {
        header: w( () => [l("div", Ir, [l("div", Vr, [a(d, {
            class: "m-0",
            text: e.$t("messaging.configurations.title"),
            color: "black",
            size: "lg"
        }, null, 8, ["text"]), a(u, {
            color: "green",
            text: s.phone
        }, null, 8, ["text"])]), a(h, {
            text: e.$t("messaging.configurations.description"),
            color: "black",
            class: "fs-2 break-line"
        }, null, 8, ["text"])])]),
        body: w( () => [l("div", Ar, [l("div", Fr, [l("div", Er, [i.showIntegrateSection ? (o(),
        x(g, {
            key: 0,
            class: "border rounded-2 mb-4",
            onShow: t[3] || (t[3] = D => i.toggleAccordion(D)),
            onHide: t[4] || (t[4] = D => i.toggleAccordion(D)),
            invertArrow: ""
        }, {
            header: w( () => [a(h, {
                text: e.$t("messaging.configurations.activation.title"),
                color: "black",
                class: "fs-2 mb-0 ms-2 fw-semibold"
            }, null, 8, ["text"])]),
            body: w( () => [l("div", Br, [a(h, {
                class: "mb-0",
                text: e.$t("messaging.configurations.activation.id_gupshup_app_input"),
                fontSize: "2",
                fontWeight: "semibold"
            }, null, 8, ["text"]), a(_, {
                class: "bg-white",
                modelValue: s.integrateForm.idGupshupApp.value,
                "onUpdate:modelValue": t[0] || (t[0] = D => s.integrateForm.idGupshupApp.value = D),
                hasError: s.integrateForm.idGupshupApp.error && !s.integrateForm.idGupshupApp.value,
                disabled: s.loading,
                placeholder: e.$t("messaging.configurations.activation.id_gupshup_app_input")
            }, null, 8, ["modelValue", "hasError", "disabled", "placeholder"]), a(h, {
                class: "mb-0",
                text: e.$t("messaging.configurations.activation.name_gupshup_app_input"),
                fontSize: "2",
                fontWeight: "semibold"
            }, null, 8, ["text"]), a(_, {
                class: "bg-white",
                modelValue: s.integrateForm.nameGupshupApp.value,
                "onUpdate:modelValue": t[1] || (t[1] = D => s.integrateForm.nameGupshupApp.value = D),
                hasError: s.integrateForm.nameGupshupApp.error && !s.integrateForm.nameGupshupApp.value,
                disabled: s.loading,
                placeholder: e.$t("messaging.configurations.activation.name_gupshup_app_input")
            }, null, 8, ["modelValue", "hasError", "disabled", "placeholder"]), a(h, {
                class: "mb-0",
                text: e.$t("messaging.configurations.activation.authentication_link_input"),
                fontSize: "2",
                fontWeight: "semibold"
            }, null, 8, ["text"]), a(_, {
                class: "bg-white",
                modelValue: s.integrateForm.authenticationLink.value,
                "onUpdate:modelValue": t[2] || (t[2] = D => s.integrateForm.authenticationLink.value = D),
                hasError: s.integrateForm.authenticationLink.error && !s.integrateForm.authenticationLink.value,
                disabled: s.loading,
                placeholder: e.$t("messaging.configurations.activation.authentication_link_input")
            }, null, 8, ["modelValue", "hasError", "disabled", "placeholder"])]), l("div", zr, [a(p, {
                class: "ms-auto",
                text: e.$t("messaging.configurations.activation.send"),
                onClick: i.integrate
            }, null, 8, ["text", "onClick"])])]),
            _: 1
        })) : b("", !0), a(g, {
            invertArrow: "",
            onShow: t[6] || (t[6] = D => i.toggleAccordion(D)),
            onHide: t[7] || (t[7] = D => i.toggleAccordion(D))
        }, {
            header: w( () => [l("div", Ur, [a(f, {
                icon: "user-follow-line",
                class: "fs-7"
            }), a(h, {
                text: e.$t("messaging.configurations.responsible.title"),
                color: "black",
                class: "fs-2 mb-0 ms-2 fw-semibold"
            }, null, 8, ["text"]), s.hasResponsibleConfig ? (o(),
            x(f, {
                key: 0,
                icon: "checkbox-circle-fill",
                class: "text-green-normal fs-4 ms-2"
            })) : b("", !0)])]),
            body: w( () => [s.loading ? (o(),
            m("div", Nr, [a(f, {
                icon: "loader-4-line ds-spinner",
                class: "fs-8"
            })])) : (o(),
            m("div", Or, [l("div", Lr, [a(h, {
                text: e.$t("messaging.configurations.responsible.description"),
                color: "black",
                class: "fs-2 break-line m-0"
            }, null, 8, ["text"])]), a(u, {
                rightIcon: "checkbox-circle-line",
                class: "ms-0 mb-2",
                text: e.$t("messaging.configurations.responsible.configured"),
                bgColor: "green-light",
                textColor: "green-normal",
                borderColor: "green-normal"
            }, null, 8, ["text"]), l("div", Pr, [(o(!0),
            m(N, null, j(s.responsibleConfig, (D, I) => (o(),
            x($, {
                key: I,
                modelValue: D.value,
                class: Y(["mt-2", D.value ? "readonly" : ""]),
                disabled: !D.value,
                label: D.label,
                labelClass: D.value ? "text-green-normal fw-bold" : "fw-bold"
            }, null, 8, ["modelValue", "disabled", "class", "label", "labelClass"]))), 128))]), a(p, {
                class: "w-100",
                text: e.$t("messaging.configurations.responsible.button"),
                onClick: t[5] || (t[5] = D => s.showResponsibleConfigModal = !0)
            }, null, 8, ["text"])]))]),
            _: 1
        }), i.hasScheduledMessagesSpec ? (o(),
        x(g, {
            key: 1,
            invertArrow: "",
            onShow: t[9] || (t[9] = D => i.toggleAccordion(D)),
            onHide: t[10] || (t[10] = D => i.toggleAccordion(D))
        }, {
            header: w( () => [l("div", jr, [a(f, {
                icon: "chat-settings-line",
                class: "fs-7"
            }), a(h, {
                text: e.$t("messaging.configurations.options.auto_messages.title"),
                color: "black",
                class: "fs-2 mb-0 ms-2 fw-semibold"
            }, null, 8, ["text"])])]),
            body: w( () => [l("div", Wr, [a(h, {
                text: e.$t("messaging.configurations.options.auto_messages.description"),
                color: "black",
                class: "fs-2 break-line m-0"
            }, null, 8, ["text"]), s.autoMessages.length > 0 ? (o(),
            m("div", Hr, [(o(!0),
            m(N, null, j(s.autoMessages, (D, I) => (o(),
            m("div", {
                key: I,
                class: "p-2 h-100 w-100 border-bottom d-flex align-items-center"
            }, [l("div", Rr, [a(h, {
                tag: "span",
                text: D.title,
                color: "black",
                class: "fs-3 fw-bold mb-2"
            }, null, 8, ["text"]), l("div", qr, [a(h, {
                tag: "span",
                text: i.getHourInterval(D),
                color: "gray-800",
                class: "fs-2 fw-semibold"
            }, null, 8, ["text"]), a(h, {
                tag: "span",
                text: "|",
                color: "gray-500",
                class: "fs-2 fw-semibold mx-1"
            }), a(h, {
                tag: "span",
                text: i.getDaysInterval(D),
                color: "gray-800",
                class: "fs-2 mx-1"
            }, null, 8, ["text"])])]), a(v, {
                buttonVariant: "link",
                buttonIcon: "more-2-line",
                disableArrow: "",
                appendToBody: ""
            }, {
                default: w( () => [l("div", Gr, [a(p, {
                    icon: "eye-line",
                    variant: "link",
                    text: e.$t("messaging.configurations.modal_new_message.actions.view"),
                    onClick: re => i.callPreviewMessage(I)
                }, null, 8, ["text", "onClick"]), a(p, {
                    icon: "pencil-line",
                    variant: "link",
                    text: e.$t("messaging.configurations.modal_new_message.actions.edit"),
                    onClick: re => i.callEditMessage(I)
                }, null, 8, ["text", "onClick"]), a(p, {
                    icon: "delete-bin-2-line",
                    iconClass: "text-red-normal",
                    variant: "link",
                    text: e.$t("messaging.configurations.modal_new_message.actions.delete"),
                    onClick: re => i.callDeleteMessage(I)
                }, null, 8, ["text", "onClick"])])]),
                _: 2
            }, 1024)]))), 128))])) : (o(),
            m("div", Kr, [a(d, {
                class: "my-4",
                size: "sm",
                color: "gray-500",
                text: e.$t("messaging.configurations.options.auto_messages.no_msg")
            }, null, 8, ["text"])])), a(p, {
                class: "w-100",
                icon: "add-line",
                text: e.$t("messaging.configurations.options.auto_messages.new_msg"),
                onClick: t[8] || (t[8] = D => s.showAutoMessageModal = !0)
            }, null, 8, ["text"])])]),
            _: 1
        })) : b("", !0), a(g, {
            invertArrow: "",
            onShow: t[12] || (t[12] = D => i.toggleAccordion(D)),
            onHide: t[13] || (t[13] = D => i.toggleAccordion(D))
        }, {
            header: w( () => [l("div", Yr, [a(f, {
                icon: "user-line",
                class: "fs-7"
            }), a(h, {
                text: e.$t("messaging.configurations.access.title"),
                color: "black",
                class: "fs-2 mb-0 ms-2 fw-semibold"
            }, null, 8, ["text"])])]),
            body: w( () => [s.loading ? (o(),
            m("div", Xr, [a(f, {
                icon: "loader-4-line ds-spinner",
                class: "fs-8"
            })])) : (o(),
            m("div", Qr, [l("div", Zr, [a(h, {
                text: e.$t("messaging.configurations.access.description"),
                color: "black",
                class: "fs-2 break-line m-0"
            }, null, 8, ["text"])]), l("div", Jr, [a(y, {
                options: e.usersOptions,
                filterable: "",
                multiple: "",
                modelValue: s.users,
                "onUpdate:modelValue": t[11] || (t[11] = D => s.users = D),
                placeholder: e.$t("messaging.configurations.access.users_placeholder"),
                size: "md",
                appendToBody: ""
            }, null, 8, ["options", "modelValue", "placeholder"])])]))]),
            _: 1
        })]), l("div", ec, [a($, {
            class: "mt-3 mx-3 mb-2",
            isSwitch: "",
            modelValue: s.showUserNameMessage,
            "onUpdate:modelValue": [t[14] || (t[14] = D => s.showUserNameMessage = D), t[15] || (t[15] = D => i.saveConfigs(s.channel))],
            label: e.$t("messaging.configurations.responsible.options.show_user"),
            disabled: s.loading,
            labelClass: "text-black fw-semibold"
        }, null, 8, ["modelValue", "label", "disabled"]), a(M, {
            class: "tags__tooltip",
            "data-testid": "ds-tooltip-tags",
            text: i.lastDealTooltip
        }, {
            default: w( () => [a($, {
                class: "mt-3 mx-3 mb-2",
                isSwitch: "",
                modelValue: s.useLastDeal,
                "onUpdate:modelValue": [t[16] || (t[16] = D => s.useLastDeal = D), t[17] || (t[17] = D => i.saveConfigs(s.channel))],
                label: e.$t("messaging.configurations.responsible.options.last_deal"),
                disabled: s.loading || i.disableLastDeal,
                labelClass: "text-black fw-semibold"
            }, null, 8, ["modelValue", "label", "disabled"])]),
            _: 1
        }, 8, ["text"]), e.showVoiceWorkflow ? (o(),
        x(M, {
            key: 0,
            class: "tags__tooltip",
            "data-testid": "ds-tooltip-tags",
            text: e.$t("messaging.configurations.voice.options.enable_description")
        }, {
            default: w( () => [a($, {
                class: "mt-3 mx-3 mb-2",
                isSwitch: "",
                modelValue: s.useVoice,
                "onUpdate:modelValue": [t[18] || (t[18] = D => s.useVoice = D), t[19] || (t[19] = D => i.saveConfigs(s.channel))],
                label: e.$t("messaging.configurations.voice.options.enable"),
                disabled: s.loading,
                labelClass: "text-black fw-semibold"
            }, null, 8, ["modelValue", "label", "disabled"])]),
            _: 1
        }, 8, ["text"])) : b("", !0)]), a(h, {
            class: "mt-5 fs-2 ms-3 mb-0 break-line",
            color: "black",
            text: e.$t("messaging.configurations.usefull_links")
        }, null, 8, ["text"]), l("div", tc, [(o(!0),
        m(N, null, j(s.permissions, (D, I) => (o(),
        m("div", {
            key: I,
            class: "border-bottom"
        }, [l("div", {
            class: "m-3 d-flex align-items-center cursor-pointer",
            onClick: re => i.goToPermission(D.route)
        }, [a(f, {
            icon: D.icon,
            class: "fs-7"
        }, null, 8, ["icon"]), l("div", ac, [a(h, {
            text: e.$t(`messaging.configurations.options.${D.name}.title`),
            color: "black",
            class: "fs-2 mb-0 ms-2 fw-semibold"
        }, null, 8, ["text"]), D.name === "chats" ? (o(),
        x(h, {
            key: 0,
            class: "mb-0 fs-1 ms-1",
            color: "gray-600",
            text: e.$t("messaging.configurations.options.chats.subtitle")
        }, null, 8, ["text"])) : b("", !0), a(f, {
            icon: "external-link-line",
            class: "ms-2"
        })])], 8, sc)]))), 128))])]), s.showResponsibleConfigModal ? (o(),
        x(F, {
            key: 0,
            show: s.showResponsibleConfigModal,
            manualConfig: s.responsibleConfig.regular.value,
            channel: s.channel,
            onSave: t[20] || (t[20] = D => i.saveConfigs(D)),
            onClose: t[21] || (t[21] = D => s.showResponsibleConfigModal = !1)
        }, null, 8, ["show", "manualConfig", "channel"])) : b("", !0), a(O, {
            show: s.showAutoMessageModal,
            message: i.selectedMessage,
            channel: s.channel,
            onConfirm: t[22] || (t[22] = D => i.saveAutoMessage(D)),
            onClose: i.closeAutoMessageModal
        }, null, 8, ["show", "message", "channel", "onClose"]), i.selectedMessage ? (o(),
        x(V, {
            key: 1,
            message: i.selectedMessage,
            show: s.showPreviewAutoMessageModal,
            onClose: i.closePreviewAutoMessageModal
        }, null, 8, ["message", "show", "onClose"])) : b("", !0), i.selectedMessage ? (o(),
        x(B, {
            key: 2,
            show: s.showDeleteAutoMessageModal,
            message: i.selectedMessage,
            onConfirm: t[23] || (t[23] = D => i.handleDeleteMessage()),
            onClose: i.closeDeleteAutoMessageModal
        }, null, 8, ["show", "message", "onClose"])) : b("", !0)])]),
        footer: w( () => [l("div", nc, [a(p, {
            class: "px-3",
            onClick: t[24] || (t[24] = D => i.saveAllConfigs(s.channel)),
            size: "lg",
            variant: "green-normal",
            text: e.$t("messaging.configurations.save")
        }, null, 8, ["text"]), a(p, {
            class: "px-3",
            onClick: t[25] || (t[25] = D => e.$emit("close")),
            size: "lg",
            variant: "link",
            text: e.$t("cancel")
        }, null, 8, ["text"])])]),
        _: 1
    }, 8, ["show"])
}
const ic = W(Mr, [["render", lc]])
  , oc = {
    name: "NewChannelModal",
    props: {
        show: {
            type: Boolean,
            default: !1
        }
    },
    computed: {
        ...ee(["showWhatsappWeb", "admin", "permissions"]),
        canCreateBusiness() {
            var e, t;
            return this.admin || !!((t = (e = this.permissions) == null ? void 0 : e["messaging.channel_whatsapp_business"]) != null && t.create)
        },
        canCreateWeb() {
            var e, t;
            return this.showWhatsappWeb && (this.admin || !!((t = (e = this.permissions) == null ? void 0 : e["messaging.channel_whatsapp_web"]) != null && t.create))
        }
    },
    emits: ["close", "open-official"],
    methods: {
        onClose() {
            this.$emit("close")
        },
        selectOfficial() {
            this.$emit("open-official"),
            this.onClose()
        },
        selectWhatsappWeb() {
            this.$router.push({
                name: "messaging.activation_web"
            }),
            this.onClose()
        }
    }
}
  , rc = {
    class: "d-flex flex-wrap justify-content-center p-2 gap-4"
}
  , cc = {
    class: "icon-wrapper official"
}
  , dc = {
    class: "icon-wrapper web"
}
  , mc = {
    class: "d-flex justify-content-end w-100"
};
function uc(e, t, n, c, s, i) {
    const d = r("DsIcon")
      , u = r("DsTypography")
      , h = r("DsButton")
      , _ = r("DsModal");
    return o(),
    x(_, {
        show: n.show,
        onHide: i.onClose,
        size: "lg",
        title: e.$t("messaging.channel.new_channel_modal.title_select")
    }, {
        body: w( () => [l("div", rc, [i.canCreateBusiness ? (o(),
        m("div", {
            key: 0,
            class: "channel-card",
            onClick: t[0] || (t[0] = (...p) => i.selectOfficial && i.selectOfficial(...p))
        }, [l("div", cc, [a(d, {
            icon: "whatsapp-fill",
            class: "fs-7"
        })]), l("div", null, [a(u, {
            tag: "h5",
            fontSize: "5"
        }, {
            default: w( () => [P(C(e.$t("messaging.channel.new_channel_modal.official.title")), 1)]),
            _: 1
        }), a(u, {
            tag: "p",
            fontSize: "3",
            color: "gray-600"
        }, {
            default: w( () => [P(C(e.$t("messaging.channel.new_channel_modal.official.description")), 1)]),
            _: 1
        })])])) : b("", !0), i.canCreateWeb ? (o(),
        m("div", {
            key: 1,
            class: "channel-card",
            onClick: t[1] || (t[1] = (...p) => i.selectWhatsappWeb && i.selectWhatsappWeb(...p))
        }, [l("div", dc, [a(d, {
            icon: "qr-code-line",
            class: "fs-7"
        })]), l("div", null, [a(u, {
            tag: "h5",
            fontSize: "5"
        }, {
            default: w( () => [P(C(e.$t("messaging.channel.new_channel_modal.web.title")), 1)]),
            _: 1
        }), a(u, {
            tag: "p",
            fontSize: "3",
            color: "gray-600"
        }, {
            default: w( () => [P(C(e.$t("messaging.channel.new_channel_modal.web.description")), 1)]),
            _: 1
        })])])) : b("", !0)])]),
        footer: w( () => [l("div", mc, [a(h, {
            variant: "secondary",
            onClick: i.onClose,
            text: e.$t("cancel")
        }, null, 8, ["onClick", "text"])])]),
        _: 1
    }, 8, ["show", "onHide", "title"])
}
const pc = W(oc, [["render", uc], ["__scopeId", "data-v-b6ee0d47"]])
  , gc = {
    class: "channels-page bg-gray-normal design-system"
}
  , hc = {
    class: "channels-page__header bg-white border-bottom border-gray-400 px-4"
}
  , _c = {
    class: "d-flex h-100 d-flex align-items-center justify-content-between"
}
  , fc = {
    class: "d-flex align-items-center"
}
  , bc = {
    class: "w-100"
}
  , vc = {
    class: "pt-3 pb-2 d-flex justify-content-start w-100"
}
  , yc = {
    class: "bg-white w-100"
}
  , wc = {
    class: "d-flex align-items-center"
}
  , Cc = {
    class: "m-1 d-flex justify-content-center"
}
  , xc = {
    class: "d-flex justify-content-center"
}
  , kc = {
    class: "m-1 d-flex justify-content-center"
}
  , $c = {
    __name: "ChannelList",
    setup(e) {
        const t = We()
          , {t: n} = oe()
          , {notifyError: c, notifySuccess: s} = He()
          , i = yt()
          , d = L( () => t.getters.admin)
          , u = L( () => t.getters.permissions)
          , h = L( () => {
            var U, q, le, ae;
            return d.value ? !0 : !!((q = (U = u.value) == null ? void 0 : U["messaging.channel_whatsapp_business"]) != null && q.create) || !!((ae = (le = u.value) == null ? void 0 : le["messaging.channel_whatsapp_web"]) != null && ae.create)
        }
        )
          , _ = U => t.dispatch("messaging/channel/setWhatsappChannelStatusActive", U)
          , p = L( () => t.getters.subscriptionLimits)
          , g = L( () => t.getters["messaging/channel/loadingListChannels"])
          , f = L( () => t.getters["messaging/channel/listChannelsTotal"])
          , $ = L( () => t.getters["messaging/channel/listWhatsappChannelsTotal"])
          , v = L( () => t.getters.showChannelConfigPage)
          , y = L( () => t.getters["messaging/channel/listChannels"].map(U => {
            var q;
            return {
                ...U,
                phone_number: (q = U.parameters) != null && q.phone ? st(U.parameters.phone) : ""
            }
        }
        ))
          , M = z({
            perPage: 25,
            page: 1
        })
          , F = z("")
          , O = z(!1)
          , V = z(!1)
          , B = z(null)
          , S = z(!1)
          , D = z([])
          , I = z(!1)
          , re = L( () => t.getters.user.id);
        function xe(U) {
            var q;
            return I.value ? !0 : U.type === "whatsapp-web" && ((q = U.parameters) == null ? void 0 : q.id_created_user) === parseInt(re.value, 10)
        }
        async function K() {
            try {
                const U = (M.value.page - 1) * M.value.perPage;
                t.dispatch("messaging/channel/loadListChannels", {
                    offset: U,
                    limit: M.value.perPage,
                    ...F.value && {
                        search: F.value
                    }
                })
            } catch {
                c("messaging.channel.messages.error.loading")
            }
        }
        const Ge = ft.debounce(U => {
            M.value.page = 1,
            F.value = U,
            K()
        }
        , 350);
        function Ke(U) {
            M.value = U,
            K()
        }
        function ie(U) {
            if (B.value = U,
            v.value) {
                i.push({
                    name: "messaging.channel.config",
                    params: {
                        id: U
                    }
                });
                return
            }
            O.value = !0
        }
        function Te(U) {
            B.value = U,
            V.value = !0
        }
        function ge() {
            if ($.value >= p.value.whatsapp_channels) {
                t.dispatch("setUpsellModal", {
                    open: !0,
                    expansion: pt.whatsapp_channel
                });
                return
            }
            i.push({
                name: "messaging.activation"
            })
        }
        function he() {
            if ($.value >= p.value.whatsapp_channels) {
                t.dispatch("setUpsellModal", {
                    open: !0,
                    expansion: pt.whatsapp_channel
                });
                return
            }
            S.value = !0
        }
        function te(U) {
            var ae, ke, be, $e;
            const q = {
                WAITING_BROKER_ACTIONS: {
                    text: n("messaging.channel.status.waiting_broker_actions.text"),
                    tooltip: n("messaging.channel.status.waiting_broker_actions.tooltip"),
                    color: "blue"
                },
                WAITING_USER_AUTHENTICATION: {
                    text: n("messaging.channel.status.waiting_user_authentication.text"),
                    tooltip: n("messaging.channel.status.waiting_user_authentication.tooltip"),
                    color: "blue",
                    onClick: ((ae = U.activation) == null ? void 0 : ae.authentication_link) && ( () => {
                        X.track("Whatsapp Activation - Open Facebook Button"),
                        window.open(U.activation.authentication_link, "popUpWindow", "toolbar=yes, scrollbars=yes, top=100, left=500, width=700, height=700")
                    }
                    )
                },
                WAITING_USER_CONFIRM: {
                    buttonProps: {
                        text: n("messaging.channel.status.waiting_user_confirm.text"),
                        variant: "green-normal"
                    },
                    onClick: ((ke = U.activation) == null ? void 0 : ke.authentication_link) && ( () => {
                        X.track("Whatsapp Activation - Complete Activation Button"),
                        _({
                            id_channel: U.id
                        })
                    }
                    )
                },
                ACTIVATION_FAILED: {
                    text: n("messaging.channel.status.activation_failed.text"),
                    tooltip: n("messaging.channel.status.activation_failed.tooltip"),
                    color: "red",
                    onClick: () => {
                        window.open("https://business.facebook.com/wa/manage/home", "_blank", "noopener")
                    }
                },
                ACTIVATED: {
                    text: n("messaging.channel.status.active.text"),
                    color: "green"
                }
            }
              , le = (be = U.activation) == null ? void 0 : be.status;
            return U.type === "whatsapp-web" && (($e = U.parameters) == null ? void 0 : $e.connection_status) === "close" ? {
                tooltip: n("messaging.channel.status.disconnected.tooltip"),
                buttonProps: {
                    text: n("messaging.channel.status.reconnect"),
                    variant: "red-light",
                    icon: "refresh-line"
                },
                onClick: () => {
                    i.push({
                        name: "messaging.activation_web",
                        query: {
                            channelId: U.id
                        }
                    })
                }
            } : le ? q[le] : q.ACTIVATED
        }
        function Ye() {
            window.open("https://ajuda.leads2b.com/pt-BR/collections/3353155-leads2b-whatsapp", "_blank")
        }
        const ce = z(!1);
        async function _e(U) {
            if (ce.value)
                return;
            const {isConfirmed: q} = await Re.deleteConfirm(n("messaging.channel.messages.warning.delete_title"), n("messaging.channel.messages.warning.delete_message"), {
                confirmButtonText: n("delete")
            });
            try {
                if (!q)
                    return;
                ce.value = !0,
                await je(U) && (s("messaging.channel.messages.success.delete"),
                K(),
                t.dispatch("new-communication/chats/loadChats", {
                    reset: !0
                }),
                X.track("messaging-channel-delete", {
                    id: U
                }))
            } catch {
                c("messaging.channel.messages.error.delete")
            } finally {
                ce.value = !1
            }
        }
        return tt(async () => {
            K(),
            D.value = [{
                key: "description",
                label: n("messaging.channel.columns.description"),
                visible: !0
            }, {
                key: "actions",
                label: n("messaging.channel.columns.actions"),
                visible: !0
            }, {
                key: "phone_number",
                label: n("messaging.channel.columns.phone_number"),
                visible: !0
            }, {
                key: "type",
                label: n("messaging.channel.columns.type"),
                visible: !0
            }, {
                key: "status",
                label: n("messaging.channel.columns.status"),
                visible: !0
            }],
            D.value.push({
                key: "delete_channel",
                label: n("messaging.channel.messages.warning.delete_title"),
                visible: !0
            }),
            I.value = await It()
        }
        ),
        (U, q) => {
            const le = r("DsHeading")
              , ae = r("DsButton")
              , ke = r("DsInput")
              , be = r("VueImage")
              , $e = r("DsIcon")
              , Ae = r("DsBadge")
              , Qe = r("DsTooltip")
              , Fe = r("DsTable")
              , De = r("DsPagination")
              , Ee = r("DsPageContainer");
            return o(),
            m("div", gc, [l("div", hc, [l("div", _c, [a(le, {
                class: "m-0",
                text: T(n)("messaging.channel.title"),
                size: "md"
            }, null, 8, ["text"]), l("div", fc, [a(ae, {
                size: "md",
                class: "me-3 text-green-normal",
                variant: "transparent",
                text: T(n)("messaging.channel.help_center"),
                type: "button",
                icon: "external-link-line",
                onClick: Ye
            }, null, 8, ["text"]), h.value ? (o(),
            x(ae, {
                key: 0,
                size: "md",
                variant: "green-normal",
                text: T(n)("messaging.channel.new_button"),
                type: "button",
                icon: "add-line",
                onClick: q[0] || (q[0] = R => he())
            }, null, 8, ["text"])) : b("", !0)])])]), a(Ee, {
                class: "pb-2"
            }, {
                default: w( () => [l("div", bc, [l("div", vc, [a(ke, {
                    modelValue: F.value,
                    size: "md",
                    inputClass: "bg-white",
                    icon: "search-line",
                    placeholder: T(n)("messaging.channel.search"),
                    "onUpdate:modelValue": T(Ge)
                }, null, 8, ["modelValue", "placeholder", "onUpdate:modelValue"])]), l("div", yc, [a(Fe, {
                    tableClasses: "channels-page__datatable__table border border-gray-400 flex-column ds-scrollbar",
                    loading: g.value,
                    items: y.value,
                    fieldOptions: D.value,
                    editColumns: !1,
                    dynamicLoadingData: ""
                }, {
                    "cell(description)": w( ({data: R, row: pe}) => {
                        var ve, fe;
                        return [l("div", wc, [(ve = pe.parameters) != null && ve.profile_picture_url ? (o(),
                        x(be, {
                            key: 0,
                            src: (fe = pe.parameters) == null ? void 0 : fe.profile_picture_url,
                            style: {
                                width: "32px",
                                height: "28px"
                            },
                            alt: "",
                            class: "me-2 rounded shadow"
                        }, null, 8, ["src"])) : b("", !0), l("span", null, C(R), 1)])]
                    }
                    ),
                    "cell(actions)": w( ({row: R}) => [l("div", Cc, [a(ae, {
                        size: "md",
                        variant: "green-light",
                        icon: "settings-3-line",
                        onClick: pe => ie(R.id)
                    }, null, 8, ["onClick"]), v.value ? b("", !0) : (o(),
                    x(ae, {
                        key: 0,
                        class: "ms-2",
                        size: "md",
                        variant: "green-light",
                        icon: "pencil-line",
                        onClick: pe => Te(R.id)
                    }, null, 8, ["onClick"]))])]),
                    "cell(type)": w( ({data: R}) => [P(C(T(n)(`messaging.channel.type.${R}`)), 1)]),
                    "cell(status)": w( ({row: R}) => {
                        var pe, ve;
                        return [l("div", xc, [a(Qe, {
                            class: "d-flex align-items-center",
                            text: (pe = te(R)) == null ? void 0 : pe.tooltip,
                            disable: !((ve = te(R)) != null && ve.tooltip)
                        }, {
                            default: w( () => {
                                var fe, Be, ze, Ue, Oe;
                                return [(fe = te(R)) != null && fe.tooltip ? (o(),
                                x($e, {
                                    key: 0,
                                    class: "fs-5 text-blue-normal",
                                    icon: "question-line"
                                })) : b("", !0), (Be = te(R)) != null && Be.text ? (o(),
                                x(Ae, wt(we({
                                    key: 1
                                }, te(R))), null, 16)) : b("", !0), (ze = te(R)) != null && ze.onClick ? (o(),
                                x(ae, we({
                                    key: 2,
                                    class: "ms-2",
                                    size: "md",
                                    variant: "green-light",
                                    icon: "external-link-line"
                                }, (Ue = te(R)) == null ? void 0 : Ue.buttonProps, {
                                    onClick: (Oe = te(R)) == null ? void 0 : Oe.onClick
                                }), null, 16, ["onClick"])) : b("", !0)]
                            }
                            ),
                            _: 2
                        }, 1032, ["text", "disable"])])]
                    }
                    ),
                    "cell(delete_channel)": w( ({row: R}) => [l("div", kc, [xe(R) ? (o(),
                    x(ae, {
                        key: 0,
                        size: "md",
                        variant: "red-light",
                        icon: "delete-bin-6-line",
                        onClick: () => _e(R.id)
                    }, null, 8, ["onClick"])) : b("", !0)])]),
                    _: 1
                }, 8, ["loading", "items", "fieldOptions"]), a(De, {
                    class: "border-top-0 border border-gray-400",
                    total: f.value,
                    pagination: M.value,
                    onChange: Ke
                }, null, 8, ["total", "pagination"])])])]),
                _: 1
            }), V.value ? (o(),
            x(T(Ho), {
                key: 0,
                show: V.value,
                channelId: B.value,
                onClose: q[1] || (q[1] = R => V.value = !1)
            }, null, 8, ["show", "channelId"])) : b("", !0), O.value ? (o(),
            x(T(ic), {
                key: 1,
                show: O.value,
                channelId: B.value,
                onClose: q[2] || (q[2] = R => O.value = !1)
            }, null, 8, ["show", "channelId"])) : b("", !0), S.value ? (o(),
            x(T(pc), {
                key: 2,
                show: S.value,
                onClose: q[3] || (q[3] = R => S.value = !1),
                onOpenOfficial: ge
            }, null, 8, ["show"])) : b("", !0)])
        }
    }
}
  , Gg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $c
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Tc = {
    class: "bg-white"
}
  , Dc = {
    class: "nav nav-tabs bg-white border-0 mb-3 px-3"
}
  , Sc = ["disabled", "onClick"]
  , Ve = {
    __name: "ChannelConfigSectionTabs",
    props: {
        title: {
            type: String,
            required: !0
        },
        tabs: {
            type: Array,
            default: () => []
        },
        activeKey: {
            type: String,
            default: ""
        }
    },
    emits: ["select"],
    setup(e, {emit: t}) {
        const n = e
          , c = t;
        function s(d) {
            d.disabled || c("select", d)
        }
        function i(d) {
            const u = [];
            return d.disabled && u.push("text-gray-600"),
            n.activeKey === d.key && u.push("text-green-normal", "border-bottom", "border-3", "border-green-normal"),
            u
        }
        return (d, u) => {
            const h = r("DsHeading");
            return o(),
            m("div", Tc, [a(h, {
                text: e.title,
                size: "md",
                class: "px-3 pt-3"
            }, null, 8, ["text"]), l("ul", Dc, [(o(!0),
            m(N, null, j(e.tabs, _ => (o(),
            m("li", {
                key: _.key,
                class: "nav-item me-3"
            }, [l("button", {
                class: Y([i(_), "nav-link px-0 rounded-0 border-0 fw-semibold fs-2"]),
                type: "button",
                disabled: _.disabled,
                onClick: p => s(_)
            }, C(_.label), 11, Sc)]))), 128))])])
        }
    }
}
  , Mc = {
    class: "d-flex flex-column gap-3 m-3"
}
  , Ic = {
    key: 0,
    class: "bg-white border rounded p-3"
}
  , Vc = {
    class: "mb-3"
}
  , Ac = {
    class: "d-flex justify-content-end"
}
  , Fc = {
    class: "bg-white border rounded mt-4"
}
  , Ec = {
    class: "p-3"
}
  , Bc = {
    class: "mb-3"
}
  , zc = {
    class: "mb-4"
}
  , Uc = {
    class: "bg-white border rounded"
}
  , Oc = ["onClick"]
  , Lc = {
    class: "d-flex"
}
  , Pc = {
    __name: "ChannelConfigGeneralSection",
    props: {
        showIntegrateSection: {
            type: Boolean,
            default: !1
        },
        integrateForm: {
            type: Object,
            required: !0
        },
        channelDescription: {
            type: String,
            default: ""
        },
        channelType: {
            type: String,
            default: "whatsapp"
        },
        showUserNameMessage: {
            type: Boolean,
            default: !1
        },
        useLastDeal: {
            type: Boolean,
            default: !1
        },
        useVoice: {
            type: Boolean,
            default: !1
        },
        loading: {
            type: Boolean,
            default: !1
        },
        permissions: {
            type: Array,
            default: () => []
        },
        disableLastDeal: {
            type: Boolean,
            default: !1
        },
        lastDealTooltip: {
            type: String,
            default: ""
        },
        showVoiceWorkflow: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:integrateForm", "update:channelDescription", "update:channelType", "update:showUserNameMessage", "update:useLastDeal", "update:useVoice", "integrate", "permissionClick"],
    setup(e, {emit: t}) {
        const {t: n} = oe()
          , c = e
          , s = t
          , i = L( () => [{
            label: n("messaging.channel.type.whatsapp"),
            value: "whatsapp"
        }])
          , d = L( () => [{
            key: "general",
            label: n("messaging.configurations.page.tabs.general")
        }])
          , u = z("general");
        function h(g) {
            g.disabled || (u.value = g.key)
        }
        function _() {
            ue.$emit("save-all-configs")
        }
        function p(g, f) {
            const $ = c.integrateForm || {}
              , v = {
                ...$[g],
                value: f
            }
              , y = {
                ...$,
                [g]: v
            };
            s("update:integrateForm", y)
        }
        return (g, f) => {
            const $ = r("DsTypography")
              , v = r("DsInput")
              , y = r("DsButton")
              , M = r("DsSelect")
              , F = r("DsCheckbox")
              , O = r("DsTooltip")
              , V = r("DsIcon");
            return o(),
            m("div", null, [a(T(Ve), {
                title: T(n)("messaging.configurations.page.menu.general"),
                tabs: d.value,
                activeKey: u.value,
                onSelect: h
            }, null, 8, ["title", "tabs", "activeKey"]), l("div", Mc, [e.showIntegrateSection ? (o(),
            m("div", Ic, [l("div", Vc, [a($, {
                text: T(n)("messaging.configurations.activation.title"),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), a($, {
                class: "mb-0",
                text: T(n)("messaging.configurations.activation.id_gupshup_app_input"),
                fontSize: "2",
                fontWeight: "semibold"
            }, null, 8, ["text"]), a(v, {
                class: "bg-white",
                modelValue: e.integrateForm.idGupshupApp.value,
                hasError: e.integrateForm.idGupshupApp.error && !e.integrateForm.idGupshupApp.value,
                disabled: e.loading,
                placeholder: T(n)("messaging.configurations.activation.id_gupshup_app_input"),
                "onUpdate:modelValue": f[0] || (f[0] = B => p("idGupshupApp", B))
            }, null, 8, ["modelValue", "hasError", "disabled", "placeholder"]), a($, {
                class: "mb-0",
                text: T(n)("messaging.configurations.activation.name_gupshup_app_input"),
                fontSize: "2",
                fontWeight: "semibold"
            }, null, 8, ["text"]), a(v, {
                class: "bg-white",
                modelValue: e.integrateForm.nameGupshupApp.value,
                hasError: e.integrateForm.nameGupshupApp.error && !e.integrateForm.nameGupshupApp.value,
                disabled: e.loading,
                placeholder: T(n)("messaging.configurations.activation.name_gupshup_app_input"),
                "onUpdate:modelValue": f[1] || (f[1] = B => p("nameGupshupApp", B))
            }, null, 8, ["modelValue", "hasError", "disabled", "placeholder"]), a($, {
                class: "mb-0",
                text: T(n)("messaging.configurations.activation.authentication_link_input"),
                fontSize: "2",
                fontWeight: "semibold"
            }, null, 8, ["text"]), a(v, {
                class: "bg-white",
                modelValue: e.integrateForm.authenticationLink.value,
                hasError: e.integrateForm.authenticationLink.error && !e.integrateForm.authenticationLink.value,
                disabled: e.loading,
                placeholder: T(n)("messaging.configurations.activation.authentication_link_input"),
                "onUpdate:modelValue": f[2] || (f[2] = B => p("authenticationLink", B))
            }, null, 8, ["modelValue", "hasError", "disabled", "placeholder"])]), l("div", Ac, [a(y, {
                text: T(n)("messaging.configurations.activation.send"),
                onClick: f[3] || (f[3] = B => s("integrate"))
            }, null, 8, ["text"])])])) : b("", !0), l("div", Fc, [a($, {
                text: T(n)("messaging.configurations.general.title"),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), l("div", Ec, [l("div", Bc, [a($, {
                text: T(n)("messaging.configurations.info_modal.channel_name"),
                color: "black",
                fontWeight: "bold",
                class: "mb-2"
            }, null, 8, ["text"]), a(v, {
                modelValue: e.channelDescription,
                "onUpdate:modelValue": f[4] || (f[4] = B => s("update:channelDescription", B))
            }, null, 8, ["modelValue"])]), l("div", null, [a($, {
                text: T(n)("messaging.configurations.info_modal.for"),
                color: "black",
                fontWeight: "bold",
                class: "mb-2"
            }, null, 8, ["text"]), a(M, {
                options: i.value,
                modelValue: e.channelType,
                "onUpdate:modelValue": f[5] || (f[5] = B => s("update:channelType", B))
            }, null, 8, ["options", "modelValue"])])]), l("div", zc, [a(F, {
                class: "mt-3 mx-3 mb-2",
                isSwitch: "",
                modelValue: e.showUserNameMessage,
                label: T(n)("messaging.configurations.responsible.options.show_user"),
                disabled: e.loading,
                labelClass: "text-black fw-semibold",
                "onUpdate:modelValue": f[6] || (f[6] = B => s("update:showUserNameMessage", B))
            }, null, 8, ["modelValue", "label", "disabled"]), a(O, {
                class: "tags__tooltip",
                "data-testid": "ds-tooltip-tags",
                text: e.lastDealTooltip
            }, {
                default: w( () => [a(F, {
                    class: "mt-3 mx-3 mb-2",
                    isSwitch: "",
                    modelValue: e.useLastDeal,
                    label: T(n)("messaging.configurations.responsible.options.last_deal"),
                    disabled: e.loading || e.disableLastDeal,
                    labelClass: "text-black fw-semibold",
                    "onUpdate:modelValue": f[7] || (f[7] = B => s("update:useLastDeal", B))
                }, null, 8, ["modelValue", "label", "disabled"])]),
                _: 1
            }, 8, ["text"]), e.showVoiceWorkflow ? (o(),
            x(O, {
                key: 0,
                class: "tags__tooltip",
                "data-testid": "ds-tooltip-tags",
                text: T(n)("messaging.configurations.voice.options.enable_description")
            }, {
                default: w( () => [a(F, {
                    class: "mt-3 mx-3 mb-2",
                    isSwitch: "",
                    modelValue: e.useVoice,
                    label: T(n)("messaging.configurations.voice.options.enable"),
                    disabled: e.loading,
                    labelClass: "text-black fw-semibold",
                    "onUpdate:modelValue": f[8] || (f[8] = B => s("update:useVoice", B))
                }, null, 8, ["modelValue", "label", "disabled"])]),
                _: 1
            }, 8, ["text"])) : b("", !0)]), a(y, {
                text: T(n)("messaging.configurations.save"),
                class: "m-3 mt-0",
                onClick: _
            }, null, 8, ["text"])]), l("div", Uc, [(o(!0),
            m(N, null, j(e.permissions, (B, S) => (o(),
            m("div", {
                key: B.name || S,
                class: "border-bottom"
            }, [l("div", {
                class: "m-3 d-flex align-items-center cursor-pointer",
                onClick: D => s("permissionClick", B.route)
            }, [a(V, {
                icon: B.icon,
                class: "fs-7"
            }, null, 8, ["icon"]), l("div", Lc, [a($, {
                text: T(n)(`messaging.configurations.options.${B.name}.title`),
                color: "black",
                class: "fs-2 mb-0 ms-2 fw-semibold"
            }, null, 8, ["text"]), B.name === "chats" ? (o(),
            x($, {
                key: 0,
                class: "mb-0 fs-1 ms-1",
                color: "gray-600",
                text: T(n)("messaging.configurations.options.chats.subtitle")
            }, null, 8, ["text"])) : b("", !0)])], 8, Oc)]))), 128))])])])
        }
    }
}
  , Nc = {
    class: "d-flex align-items-center mb-3"
}
  , jc = {
    class: "d-flex flex-column mb-3"
}
  , Wc = {
    __name: "ChannelConfigResponsible",
    props: {
        responsibleConfig: {
            type: Object,
            required: !0
        },
        hasResponsibleConfig: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["openResponsibleConfig"],
    setup(e, {emit: t}) {
        const {t: n} = oe()
          , c = e
          , s = t
          , i = L( () => c.hasResponsibleConfig ? n("messaging.configurations.responsible.configured") : n("messaging.configurations.responsible.pending"))
          , d = L( () => c.hasResponsibleConfig ? "green-light" : "yellow-dark")
          , u = L( () => c.hasResponsibleConfig ? "green-normal" : "white")
          , h = L( () => c.hasResponsibleConfig ? "green-normal" : "yellow-dark");
        return (_, p) => {
            const g = r("DsTypography")
              , f = r("DsBadge")
              , $ = r("DsCheckbox")
              , v = r("DsButton");
            return o(),
            m("div", null, [a(g, {
                text: T(n)("messaging.configurations.responsible.title"),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), l("div", Nc, [a(g, {
                text: T(n)("messaging.configurations.responsible.description"),
                color: "gray",
                class: "fs-2 break-line m-0"
            }, null, 8, ["text"]), a(f, {
                class: "ms-3",
                text: i.value,
                bgColor: d.value,
                textColor: u.value,
                borderColor: h.value
            }, null, 8, ["text", "bgColor", "textColor", "borderColor"])]), l("div", jc, [(o(!0),
            m(N, null, j(e.responsibleConfig, (y, M) => (o(),
            x($, {
                key: M,
                modelValue: y.value,
                class: Y(["mt-2 readonly", y.value ? "readonly" : ""]),
                disabled: !y.value,
                label: T(n)(`messaging.config.${M}`),
                labelClass: y.value ? "text-green-normal fw-bold" : "fw-bold"
            }, null, 8, ["modelValue", "disabled", "class", "label", "labelClass"]))), 128))]), a(v, {
                class: "w-100",
                text: T(n)("messaging.configurations.responsible.button"),
                onClick: p[0] || (p[0] = y => s("openResponsibleConfig"))
            }, null, 8, ["text"])])
        }
    }
}
  , Hc = {
    class: "mb-4"
}
  , Rc = {
    class: "d-flex align-items-center gap-2 mb-3"
}
  , qc = {
    class: "d-flex align-items-center"
}
  , _t = {
    __name: "ChannelConfigKeyWords",
    props: Ne({
        type: {
            type: String,
            default: "key_words"
        }
    }, {
        modelValue: {
            default: []
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
        const {t} = oe()
          , n = Me(e, "modelValue")
          , c = z("");
        function s() {
            ue.$emit("save-configs")
        }
        function i(u) {
            const h = n.value.indexOf(u);
            n.value.splice(h, 1)
        }
        function d() {
            c.value && (n.value.find(u => u === c.value) || (n.value.push(c.value),
            c.value = ""))
        }
        return (u, h) => {
            const _ = r("DsTypography")
              , p = r("DsInput")
              , g = r("DsButton")
              , f = r("DsIcon")
              , $ = r("DsBadge");
            return o(),
            m("div", null, [l("div", Hc, [a(_, {
                text: T(t)(`messaging.configurations.${e.type}.title`),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), a(_, {
                text: T(t)(`messaging.configurations.${e.type}.description`),
                color: "gray",
                class: "fs-2"
            }, null, 8, ["text"]), a(_, {
                text: T(t)(`messaging.configurations.${e.type}.words`),
                color: "black",
                fontWeight: "bold",
                class: "fs-2 m-0"
            }, null, 8, ["text"]), l("div", Rc, [a(p, {
                value: c.value,
                "onUpdate:value": h[0] || (h[0] = v => c.value = v),
                class: "flex-fill",
                "onUpdate:modelValue": h[1] || (h[1] = v => c.value = v.trim()),
                onKeydown: h[2] || (h[2] = bs(v => d(), ["enter"]))
            }, null, 8, ["value"]), a(g, {
                icon: "add-line",
                onClick: h[3] || (h[3] = v => d())
            })]), a(_, {
                text: T(t)(`messaging.configurations.${e.type}.list`),
                color: "gray",
                fontWeight: "bold",
                class: "fs-3 m-0"
            }, null, 8, ["text"]), l("div", null, [(o(!0),
            m(N, null, j(n.value, v => (o(),
            x($, {
                key: v,
                bgColor: "green-light",
                borderColor: "green-light"
            }, {
                default: w( () => [l("div", qc, [P(C(v) + " ", 1), a(f, {
                    class: "ms-1 cursor-pointer",
                    icon: "close-line",
                    onClick: y => i(v)
                }, null, 8, ["onClick"])])]),
                _: 2
            }, 1024))), 128))])]), a(g, {
                text: T(t)("messaging.configurations.save"),
                onClick: s
            }, null, 8, ["text"])])
        }
    }
}
  , Gc = {
    class: "bg-white border rounded p-3 m-3"
}
  , Kc = {
    key: 0
}
  , Yc = {
    key: 1
}
  , Qc = {
    key: 2
}
  , Zc = {
    key: 3
}
  , Jc = {
    class: "d-flex flex-column gap-3"
}
  , Xc = {
    class: "d-flex"
}
  , ed = {
    class: "col-12 col-md-4"
}
  , td = {
    __name: "ChannelConfigAttendanceSection",
    props: Ne({
        loading: {
            type: Boolean,
            default: !1
        },
        responsibleConfig: {
            type: Object,
            required: !0
        },
        hasResponsibleConfig: {
            type: Boolean,
            default: !1
        },
        disableLastDeal: {
            type: Boolean,
            default: !1
        },
        lastDealTooltip: {
            type: String,
            default: ""
        },
        showVoiceWorkflow: {
            type: Boolean,
            default: !1
        }
    }, {
        keyWords: {
            default: () => []
        },
        keyWordsModifiers: {},
        blockedWords: {
            default: () => []
        },
        blockedWordsModifiers: {},
        autoFinishTimeout: {
            default: () => ({
                option: "hours",
                input: ""
            })
        },
        autoFinishTimeoutModifiers: {}
    }),
    emits: Ne(["openResponsibleConfig"], ["update:keyWords", "update:blockedWords", "update:autoFinishTimeout"]),
    setup(e, {emit: t}) {
        const {t: n} = oe()
          , c = Me(e, "keyWords")
          , s = Me(e, "blockedWords")
          , i = Me(e, "autoFinishTimeout")
          , d = t
          , u = L( () => [{
            key: "responsible",
            label: n("messaging.configurations.page.tabs.responsible")
        }, {
            key: "key_words",
            label: n("messaging.configurations.page.tabs.key_words")
        }, {
            key: "blocked_words",
            label: n("messaging.configurations.page.tabs.blocked_words")
        }, {
            key: "auto_finish",
            label: n("messaging.configurations.page.tabs.auto_finish")
        }])
          , h = L( () => i.value.option === "days" ? n("activity.edit_new_commons.period_options.days") : n("activity.edit_new_commons.period_options.hours"))
          , _ = L( () => i.value.option === "days" ? n("messaging.configurations.auto_finish.hint_days") : n("messaging.configurations.auto_finish.hint_hours"))
          , p = z("responsible");
        function g($) {
            $.disabled || (p.value = $.key)
        }
        function f() {
            ue.$emit("save-configs")
        }
        return ($, v) => {
            const y = r("DsTypography")
              , M = r("DsRadio")
              , F = r("DsInput")
              , O = r("DsButton");
            return o(),
            m("div", null, [a(T(Ve), {
                title: T(n)("messaging.configurations.page.menu.attendance"),
                tabs: u.value,
                activeKey: p.value,
                onSelect: g
            }, null, 8, ["title", "tabs", "activeKey"]), l("div", Gc, [p.value === "responsible" ? (o(),
            m("div", Kc, [a(T(Wc), {
                responsibleConfig: e.responsibleConfig,
                hasResponsibleConfig: e.hasResponsibleConfig,
                onOpenResponsibleConfig: v[0] || (v[0] = V => d("openResponsibleConfig"))
            }, null, 8, ["responsibleConfig", "hasResponsibleConfig"])])) : b("", !0), p.value === "key_words" ? (o(),
            m("div", Yc, [a(T(_t), {
                type: "key_words",
                modelValue: c.value,
                "onUpdate:modelValue": v[1] || (v[1] = V => c.value = V)
            }, null, 8, ["modelValue"])])) : b("", !0), p.value === "blocked_words" ? (o(),
            m("div", Qc, [a(T(_t), {
                type: "blocked_words",
                modelValue: s.value,
                "onUpdate:modelValue": v[2] || (v[2] = V => s.value = V)
            }, null, 8, ["modelValue"])])) : b("", !0), p.value === "auto_finish" ? (o(),
            m("div", Zc, [l("div", Jc, [l("div", null, [a(y, {
                text: T(n)("messaging.configurations.auto_finish.title"),
                color: "black",
                fontWeight: "bold",
                class: "mb-1"
            }, null, 8, ["text"]), a(y, {
                text: T(n)("messaging.configurations.auto_finish.description"),
                color: "gray-600",
                fontSize: "2",
                class: "mb-0"
            }, null, 8, ["text"])]), l("div", Xc, [a(M, {
                label: T(n)("activity.edit_new_commons.period_options.days"),
                name: "autoFinishTimeoutOption",
                modelValue: i.value.option,
                "onUpdate:modelValue": v[3] || (v[3] = V => i.value.option = V),
                inputValue: "days"
            }, null, 8, ["label", "modelValue"]), a(M, {
                class: "ms-3",
                label: T(n)("activity.edit_new_commons.period_options.hours"),
                name: "autoFinishTimeoutOption",
                modelValue: i.value.option,
                "onUpdate:modelValue": v[4] || (v[4] = V => i.value.option = V),
                inputValue: "hours"
            }, null, 8, ["label", "modelValue"])]), l("div", ed, [a(F, {
                size: "md",
                type: "number",
                min: "0",
                placeholder: h.value,
                modelValue: i.value.input,
                "onUpdate:modelValue": v[5] || (v[5] = V => i.value.input = V)
            }, null, 8, ["placeholder", "modelValue"])]), a(y, {
                text: _.value,
                color: "gray-600",
                fontSize: "1",
                class: "mb-0"
            }, null, 8, ["text"]), l("div", null, [a(O, {
                text: T(n)("messaging.configurations.save"),
                loading: e.loading,
                disabled: e.loading,
                onClick: f
            }, null, 8, ["text", "loading", "disabled"])])])])) : b("", !0)])])
        }
    }
}
  , sd = {
    class: "bg-white border rounded p-3 m-3"
}
  , ad = {
    class: "d-flex flex-column"
}
  , nd = {
    key: 0,
    class: "border rounded bg-white my-3"
}
  , ld = {
    class: "d-flex flex-column p-1"
}
  , id = {
    class: "d-flex align-items-center"
}
  , od = {
    class: "border rounded d-flex flex-column align-items-start"
}
  , rd = {
    key: 1
}
  , cd = {
    __name: "ChannelConfigAutoMessagesSection",
    props: {
        autoMessages: {
            type: Array,
            default: () => []
        }
    },
    emits: ["create", "preview", "edit", "delete"],
    setup(e, {emit: t}) {
        const {t: n} = oe()
          , c = t
          , s = L( () => [{
            key: "auto_messages",
            label: n("messaging.configurations.page.tabs.auto_responses")
        }])
          , i = z("auto_messages");
        function d(_) {
            _.disabled || (i.value = _.key)
        }
        function u(_) {
            const p = (_ == null ? void 0 : _.start_time) || ""
              , g = (_ == null ? void 0 : _.end_time) || "";
            return `${p} - ${g}`
        }
        function h(_) {
            const p = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            let $ = ((_ == null ? void 0 : _.days) || []).map(v => n(`messaging.configurations.modal_new_message.days_short.${p[v]}`)).join(", ");
            return $ = $.replace(/, (\s*)$/, "$1"),
            $
        }
        return (_, p) => {
            const g = r("DsTypography")
              , f = r("DsButton")
              , $ = r("DsButtonDropdown")
              , v = r("DsSubtitle");
            return o(),
            m("div", null, [a(T(Ve), {
                title: T(n)("messaging.configurations.page.menu.auto_messages"),
                tabs: s.value,
                activeKey: i.value,
                onSelect: d
            }, null, 8, ["title", "tabs", "activeKey"]), l("div", sd, [l("div", ad, [a(g, {
                text: T(n)("messaging.configurations.auto_responses.title"),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), a(g, {
                text: T(n)("messaging.configurations.auto_responses.description"),
                color: "gray",
                class: "fs-2 break-line m-0"
            }, null, 8, ["text"]), e.autoMessages.length > 0 ? (o(),
            m("div", nd, [(o(!0),
            m(N, null, j(e.autoMessages, (y, M) => (o(),
            m("div", {
                key: M,
                class: "p-2 h-100 w-100 border-bottom d-flex align-items-center"
            }, [l("div", ld, [a(g, {
                tag: "span",
                text: y.title,
                color: "black",
                class: "fs-3 fw-bold mb-2"
            }, null, 8, ["text"]), l("div", id, [a(g, {
                tag: "span",
                text: u(y),
                color: "gray-800",
                class: "fs-2 fw-semibold"
            }, null, 8, ["text"]), a(g, {
                tag: "span",
                text: "|",
                color: "gray-500",
                class: "fs-2 fw-semibold mx-1"
            }), a(g, {
                tag: "span",
                text: h(y),
                color: "gray-800",
                class: "fs-2 mx-1"
            }, null, 8, ["text"])])]), a($, {
                buttonVariant: "link",
                buttonIcon: "more-2-line",
                disableArrow: "",
                appendToBody: ""
            }, {
                default: w( () => [l("div", od, [a(f, {
                    icon: "eye-line",
                    variant: "link",
                    text: T(n)("messaging.configurations.modal_new_message.actions.view"),
                    onClick: F => c("preview", M)
                }, null, 8, ["text", "onClick"]), a(f, {
                    icon: "pencil-line",
                    variant: "link",
                    text: T(n)("messaging.configurations.modal_new_message.actions.edit"),
                    onClick: F => c("edit", M)
                }, null, 8, ["text", "onClick"]), a(f, {
                    icon: "delete-bin-2-line",
                    iconClass: "text-red-normal",
                    variant: "link",
                    text: T(n)("messaging.configurations.modal_new_message.actions.delete"),
                    onClick: F => c("delete", M)
                }, null, 8, ["text", "onClick"])])]),
                _: 2
            }, 1024)]))), 128))])) : (o(),
            m("div", rd, [a(v, {
                class: "my-4",
                size: "sm",
                color: "gray-500",
                text: T(n)("messaging.configurations.options.auto_messages.no_msg")
            }, null, 8, ["text"])])), a(f, {
                class: "w-100",
                icon: "add-line",
                text: T(n)("messaging.configurations.options.auto_messages.new_msg"),
                onClick: p[0] || (p[0] = y => c("create"))
            }, null, 8, ["text"])])])])
        }
    }
}
  , dd = {
    class: "bg-white border rounded p-3 m-3"
}
  , md = {
    key: 0
}
  , ud = {
    class: "d-flex mb-2"
}
  , pd = {
    class: "d-flex flex-column mb-4"
}
  , gd = {
    key: 1
}
  , hd = {
    __name: "ChannelConfigUsersSection",
    props: Ne({
        usersOptions: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: !1
        }
    }, {
        modelValue: {
            default: []
        },
        modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
        const {t} = oe()
          , n = Me(e, "modelValue")
          , c = L( () => [{
            key: "users",
            label: t("messaging.configurations.page.tabs.users")
        }])
          , s = z("users");
        function i(u) {
            u.disabled || (s.value = u.key)
        }
        function d() {
            ue.$emit("save-all-configs")
        }
        return (u, h) => {
            const _ = r("DsTypography")
              , p = r("DsSelect")
              , g = r("DsButton")
              , f = r("DsIcon");
            return o(),
            m("div", null, [a(T(Ve), {
                title: T(t)("messaging.configurations.page.menu.users"),
                tabs: c.value,
                activeKey: s.value,
                onSelect: i
            }, null, 8, ["title", "tabs", "activeKey"]), l("div", dd, [a(_, {
                text: T(t)("messaging.configurations.users.title"),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), e.loading ? (o(),
            m("div", gd, [a(f, {
                icon: "loader-4-line ds-spinner",
                class: "fs-8"
            })])) : (o(),
            m("div", md, [l("div", ud, [a(_, {
                text: T(t)("messaging.configurations.access.description"),
                color: "black",
                class: "fs-2 break-line m-0"
            }, null, 8, ["text"])]), l("div", pd, [a(p, {
                options: e.usersOptions,
                filterable: "",
                multiple: "",
                modelValue: n.value,
                "onUpdate:modelValue": h[0] || (h[0] = $ => n.value = $),
                placeholder: T(t)("messaging.configurations.access.users_placeholder"),
                size: "md",
                appendToBody: ""
            }, null, 8, ["options", "modelValue", "placeholder"])]), a(g, {
                text: T(t)("messaging.configurations.save"),
                onClick: d
            }, null, 8, ["text"])]))])])
        }
    }
}
  , _d = {
    class: "bg-white border rounded p-3 m-3"
}
  , fd = {
    class: "d-flex flex-column"
}
  , bd = {
    key: 0,
    class: "text-center py-4"
}
  , vd = {
    key: 1,
    class: "d-flex flex-column gap-3"
}
  , yd = {
    class: "d-flex align-items-center justify-content-between"
}
  , wd = {
    class: "d-flex align-items-center gap-2"
}
  , Cd = {
    class: "d-flex flex-column gap-2"
}
  , xd = {
    class: "d-flex align-items-center gap-2"
}
  , kd = {
    key: 0,
    class: "d-flex align-items-center gap-2"
}
  , $d = {
    key: 1,
    class: "mt-1"
}
  , Td = {
    __name: "ChannelConfigEventsSection",
    props: {
        events: {
            type: Array,
            default: () => []
        }
    },
    setup(e) {
        const {t} = oe()
          , n = {
            ACCOUNT_VIOLATION: "violation",
            ACCOUNT_RESTRICTED: "restricted",
            ACCOUNT_VERIFIED: "verified",
            CONNECTED: "connected",
            UNFLAGGED: "connected"
        };
        function c(y) {
            var M, F;
            return ((F = (M = y == null ? void 0 : y.payload) == null ? void 0 : M.payload) == null ? void 0 : F.payload) || {}
        }
        function s(y) {
            var M;
            return ((M = c(y)) == null ? void 0 : M.status) || ""
        }
        function i(y) {
            const M = s(y);
            return M === "ACCOUNT_VIOLATION" || M === "FLAGGED" ? "alert-line" : M === "ACCOUNT_RESTRICTED" ? "close-circle-line" : M === "CONNECTED" || M === "UNFLAGGED" ? "checkbox-circle-line" : "information-line"
        }
        function d(y) {
            const M = s(y);
            return M === "ACCOUNT_VIOLATION" || M === "FLAGGED" ? "text-yellow-dark" : M === "ACCOUNT_RESTRICTED" ? "text-red-normal" : M === "CONNECTED" || M === "UNFLAGGED" ? "text-green-normal" : "text-blue-normal"
        }
        function u(y) {
            const M = s(y)
              , F = n[M] || "unknown";
            return t(`messaging.configurations.events.status.${F}`)
        }
        function h(y) {
            const M = s(y)
              , F = n[M] || "unknown";
            return t(`messaging.configurations.events.badge.${F}`)
        }
        function _(y) {
            const M = s(y);
            return M === "ACCOUNT_VIOLATION" || M === "FLAGGED" ? "yellow" : M === "ACCOUNT_RESTRICTED" ? "red" : M === "CONNECTED" || M === "UNFLAGGED" ? "green" : "blue"
        }
        function p(y) {
            var M;
            return ((M = c(y)) == null ? void 0 : M["violation-type"]) || null
        }
        function g(y) {
            var M;
            return ((M = c(y)) == null ? void 0 : M.restrictionInfo) || []
        }
        function f(y) {
            var O;
            const M = (O = y.restrictionType) == null ? void 0 : O.replace("RESTRICTED_", "").toLowerCase().replace(/_/g, " ")
              , F = y.expiration ? dt(y.expiration).format("DD/MM/YYYY HH:mm") : "";
            return F ? `${$(M)} — ${t("messaging.configurations.events.expires_at")} ${F}` : $(M)
        }
        function $(y) {
            return y ? y.charAt(0).toUpperCase() + y.slice(1) : ""
        }
        function v(y) {
            return y ? dt(y).format("DD/MM/YYYY HH:mm:ss") : ""
        }
        return (y, M) => {
            const F = r("DsTypography")
              , O = r("DsIcon")
              , V = r("DsBadge")
              , B = r("DsCard");
            return o(),
            m("div", null, [a(T(Ve), {
                title: T(t)("messaging.configurations.page.menu.events"),
                tabs: [],
                activeKey: ""
            }, null, 8, ["title"]), l("div", _d, [l("div", fd, [a(F, {
                text: T(t)("messaging.configurations.events.title"),
                color: "black",
                fontWeight: "bold",
                class: "fs-4 mb-1"
            }, null, 8, ["text"]), a(F, {
                text: T(t)("messaging.configurations.events.description"),
                color: "gray",
                class: "fs-2 break-line m-0 mb-3"
            }, null, 8, ["text"]), e.events.length === 0 ? (o(),
            m("div", bd, [a(O, {
                icon: "checkbox-circle-line",
                class: "fs-8 text-green-normal mb-2"
            }), a(F, {
                text: T(t)("messaging.configurations.events.empty"),
                color: "gray",
                class: "fs-3"
            }, null, 8, ["text"])])) : (o(),
            m("div", vd, [(o(!0),
            m(N, null, j(e.events, S => (o(),
            x(B, {
                key: S.id
            }, {
                header: w( () => [l("div", yd, [l("div", wd, [a(O, {
                    icon: i(S),
                    class: Y([d(S), "fs-5"])
                }, null, 8, ["icon", "class"]), a(F, {
                    text: u(S),
                    fontWeight: "bold",
                    class: "fs-3 mb-0"
                }, null, 8, ["text"])]), a(V, {
                    text: h(S),
                    color: _(S)
                }, null, 8, ["text", "color"])])]),
                default: w( () => [l("div", Cd, [l("div", xd, [a(O, {
                    icon: "time-line",
                    class: "text-gray-600 fs-3"
                }), a(F, {
                    text: v(S.timestamp),
                    color: "gray-800",
                    class: "fs-2 mb-0"
                }, null, 8, ["text"])]), p(S) ? (o(),
                m("div", kd, [a(O, {
                    icon: "information-line",
                    class: "text-gray-600 fs-3"
                }), a(F, {
                    text: T(t)("messaging.configurations.events.violation_type", {
                        type: p(S)
                    }),
                    color: "gray-800",
                    class: "fs-2 mb-0"
                }, null, 8, ["text"])])) : b("", !0), g(S).length > 0 ? (o(),
                m("div", $d, [a(F, {
                    text: T(t)("messaging.configurations.events.restrictions"),
                    fontWeight: "semibold",
                    color: "gray-800",
                    class: "fs-2 mb-1"
                }, null, 8, ["text"]), (o(!0),
                m(N, null, j(g(S), (D, I) => (o(),
                m("div", {
                    key: I,
                    class: "d-flex align-items-center gap-2 ps-2 mb-1"
                }, [a(O, {
                    icon: "forbid-line",
                    class: "text-red-normal fs-2"
                }), a(F, {
                    text: f(D),
                    color: "gray-800",
                    class: "fs-2 mb-0"
                }, null, 8, ["text"])]))), 128))])) : b("", !0)])]),
                _: 2
            }, 1024))), 128))]))])])])
        }
    }
}
  , Dd = {
    class: "channel-config-page design-system h-100"
}
  , Sd = {
    class: "bg-white border-bottom border-gray-400 px-4"
}
  , Md = {
    class: "d-flex align-items-center justify-content-between py-2"
}
  , Id = {
    class: "d-flex align-items-center gap-2"
}
  , Vd = {
    class: "d-flex align-items-center gap-2"
}
  , Ad = {
    class: "row g-0 h-100"
}
  , Fd = {
    class: "col-12 col-lg-3"
}
  , Ed = {
    class: "bg-white h-100 border-end"
}
  , Bd = ["disabled", "onClick"]
  , zd = {
    class: "col-12 col-lg-9"
}
  , Ud = {
    class: "bg-white border rounded m-3"
}
  , Od = ["onClick"]
  , Ld = {
    __name: "ChannelConfig",
    setup(e) {
        const t = We()
          , n = yt()
          , c = Ct()
          , {t: s} = oe()
          , {notifyError: i, notifySuccess: d} = He()
          , {confirm: u, handleConfirm: h, loading: _} = ta()
          , p = z({})
          , g = z(!1)
          , f = z("")
          , $ = z([])
          , v = z([])
          , y = z(!1)
          , M = z(!1)
          , F = z(!1)
          , O = z(!1)
          , V = z(null)
          , B = z([])
          , S = z("attendance")
          , D = z("")
          , I = z(!1)
          , re = z(!1)
          , xe = z(!1)
          , K = z({
            idGupshupApp: {
                value: "",
                error: !1
            },
            nameGupshupApp: {
                value: "",
                error: !1
            },
            authenticationLink: {
                value: "",
                error: !1
            }
        })
          , Ge = z([{
            name: "chats",
            icon: "eye-line",
            route: "config.roles.index"
        }, {
            name: "template",
            icon: "question-answer-line",
            route: "messaging_template.list"
        }, {
            name: "tags",
            icon: "price-tag-3-line",
            route: "config.tags.index"
        }])
          , Ke = z([{
            name: "assistanceCenter",
            icon: "question-line",
            route: "https://ajuda.leads2b.com/"
        }, {
            name: "leadsAcademy",
            icon: "book-2-line",
            route: "https://leads2b.com/academy/"
        }])
          , ie = z({
            search_in_deals: {
                label: s("messaging.configurations.responsible.options.deal"),
                value: null
            },
            use_last_responsible_chat: {
                label: s("messaging.configurations.responsible.options.last_responsible"),
                value: null
            },
            use_router: {
                label: s("messaging.configurations.responsible.options.router"),
                value: null,
                id_router: null
            },
            regular: {
                label: s("messaging.configurations.responsible.options.regular"),
                value: null
            }
        })
          , Te = z(!1)
          , ge = z(!1)
          , he = z(!1)
          , te = z(!1)
          , Ye = z(!1)
          , ce = z([])
          , _e = z([])
          , U = z({
            option: "hours",
            input: ""
        })
          , q = z("")
          , le = z("whatsapp")
          , ae = L( () => t.getters.subscriptionPlanSpecs)
          , ke = L( () => t.getters.super)
          , be = L( () => t.getters.showVoiceWorkflow)
          , $e = L( () => c.params.id)
          , Ae = z([])
          , Qe = L( () => ke.value)
          , Fe = L( () => {
            var k;
            return (k = ae.value) == null ? void 0 : k.includes("whatsapp_scheduled_answers")
        }
        )
          , De = L( () => ie.value.search_in_deals.value === !1)
          , Ee = L( () => De.value ? s("messaging.configurations.responsible.options.last_deal_disable_tooltip") : s("messaging.configurations.responsible.options.last_deal_tooltip"))
          , R = L( () => B.value && V.value !== null ? B.value[V.value] : null)
          , pe = L( () => {
            var H;
            const k = s("messaging.configurations.title")
              , E = ((H = p.value) == null ? void 0 : H.description) || "";
            return E ? `${k} - ${E}` : k
        }
        )
          , ve = L( () => {
            var k, E;
            return ((k = p.value) == null ? void 0 : k.type) === "whatsapp" && ((E = p.value) == null ? void 0 : E.provider) === "GUPSHUP"
        }
        )
          , fe = L( () => {
            var H, G;
            const k = {
                WAITING_BROKER_ACTIONS: {
                    text: s("messaging.channel.status.waiting_broker_actions.text"),
                    color: "blue"
                },
                WAITING_USER_AUTHENTICATION: {
                    text: s("messaging.channel.status.waiting_user_authentication.text"),
                    color: "blue"
                },
                WAITING_USER_CONFIRM: {
                    text: s("messaging.channel.status.waiting_user_confirm.text"),
                    color: "green"
                },
                ACTIVATION_FAILED: {
                    text: s("messaging.channel.status.activation_failed.text"),
                    color: "red"
                },
                ACTIVATED: {
                    text: s("messaging.channel.status.active.text"),
                    color: "green"
                }
            }
              , E = (G = (H = p.value) == null ? void 0 : H.activation) == null ? void 0 : G.status;
            return E && k[E] || k.ACTIVATED
        }
        )
          , Be = L( () => [{
            key: "general",
            label: s("messaging.configurations.page.menu.general")
        }, {
            key: "attendance",
            label: s("messaging.configurations.page.menu.attendance")
        }, {
            key: "autoMessages",
            label: s("messaging.configurations.page.menu.auto_messages"),
            disabled: !Fe.value
        }, {
            key: "users",
            label: s("messaging.configurations.page.menu.users")
        }, {
            key: "events",
            label: s("messaging.configurations.page.menu.events"),
            remove: !ve.value
        }]);
        function ze(k) {
            K.value = k
        }
        function Ue(k) {
            q.value = k,
            p.value.description = k
        }
        function Oe(k) {
            le.value = k,
            p.value.type = k
        }
        function Ze(k, E) {
            k === "showUserNameMessage" && (ge.value = E),
            k === "useLastDeal" && (he.value = E),
            k === "useVoice" && (te.value = E)
        }
        function Wt(k) {
            k.disabled || (S.value = k.key)
        }
        function Ht(k) {
            return {
                "bg-green-light": S.value === k.key,
                disabled: k.disabled
            }
        }
        function nt() {
            var k, E, H, G, J, Q, ne, de;
            ie.value.search_in_deals.value = (E = (k = p.value) == null ? void 0 : k.parameters) == null ? void 0 : E.search_in_deals,
            ie.value.use_last_responsible_chat.value = (G = (H = p.value) == null ? void 0 : H.parameters) == null ? void 0 : G.use_last_responsible_chat,
            ie.value.use_router.value = (Q = (J = p.value) == null ? void 0 : J.parameters) == null ? void 0 : Q.use_router,
            ie.value.use_router.id_router = (de = (ne = p.value) == null ? void 0 : ne.parameters) == null ? void 0 : de.id_router,
            ie.value.regular.value = !1,
            Te.value = Object.values(ie.value).some(me => me.value && me.value !== null && me !== "" && me !== !1),
            Te.value || (ie.value.regular.value = !0)
        }
        function Rt() {
            y.value = !0
        }
        async function qt() {
            if (g.value = !0,
            K.value.idGupshupApp.error = !1,
            K.value.nameGupshupApp.error = !1,
            K.value.authenticationLink.error = !1,
            !K.value.idGupshupApp.value) {
                K.value.idGupshupApp.error = !0,
                g.value = !1;
                return
            }
            if (!K.value.nameGupshupApp.value) {
                K.value.nameGupshupApp.error = !0,
                g.value = !1;
                return
            }
            if (!K.value.authenticationLink.value) {
                K.value.authenticationLink.error = !0,
                g.value = !1;
                return
            }
            try {
                await t.dispatch("messaging/channel/integrateChannel", {
                    id_channel: p.value.id,
                    id_gupshup_app: K.value.idGupshupApp.value,
                    name_gupshup_app: K.value.nameGupshupApp.value,
                    authentication_link: K.value.authenticationLink.value
                }),
                d("messaging.configurations.activation.integration_sent")
            } catch {
                i("messaging.configurations.activation.integration_error")
            } finally {
                g.value = !1
            }
        }
        function Gt(k) {
            const E = n.resolve({
                name: k
            });
            window.open(E.href, "_blank")
        }
        function Kt(k) {
            window.open(k)
        }
        function Yt(k) {
            if (k && typeof k == "object")
                return {
                    option: k.option === "days" ? "days" : "hours",
                    input: k.input ? String(k.input) : ""
                };
            if (typeof k == "string" && k !== "disabled") {
                const E = k.match(/^(\d+)(h|d)$/);
                if (E)
                    return {
                        option: E[2] === "d" ? "days" : "hours",
                        input: E[1]
                    }
            }
            return {
                option: "hours",
                input: ""
            }
        }
        function lt() {
            var H, G;
            const k = String(((H = U.value) == null ? void 0 : H.input) || "").trim();
            if (!k)
                return "disabled";
            const E = parseInt(k, 10);
            return !Number.isFinite(E) || E <= 0 ? "disabled" : {
                option: ((G = U.value) == null ? void 0 : G.option) === "days" ? "days" : "hours",
                input: E
            }
        }
        function it() {
            var H;
            const k = String(((H = U.value) == null ? void 0 : H.input) || "").trim();
            if (!k)
                return !0;
            const E = parseInt(k, 10);
            return !Number.isFinite(E) || E <= 0 ? (i("messaging.configurations.auto_finish.validation_positive"),
            !1) : U.value.option === "hours" && E < 12 ? (i("messaging.configurations.auto_finish.validation_hours"),
            !1) : !0
        }
        async function Je(k) {
            var H, G, J, Q, ne;
            if (!it())
                return;
            const E = {
                show_user_name_message: ge.value,
                use_last_deal: he.value,
                search_in_deals: (H = k == null ? void 0 : k.parameters) == null ? void 0 : H.search_in_deals,
                use_last_responsible_chat: (G = k == null ? void 0 : k.parameters) == null ? void 0 : G.use_last_responsible_chat,
                use_router: (J = k == null ? void 0 : k.parameters) == null ? void 0 : J.use_router,
                id_router: ((Q = k == null ? void 0 : k.parameters) == null ? void 0 : Q.id_router) || null,
                automatic_messages: (ne = k == null ? void 0 : k.parameters) == null ? void 0 : ne.automatic_messages,
                use_voice: te.value,
                voice_button: Ye.value,
                key_words: ce.value,
                blocked_words: _e.value,
                auto_finish_timeout: lt()
            };
            p.value.parameters = {
                ...p.value.parameters,
                ...E
            },
            nt(),
            g.value = !0;
            try {
                await t.dispatch("messaging/channel/updateChannel", {
                    channelId: k.id,
                    users: v.value.map(de => de.code),
                    parameters: E
                }),
                await ot(),
                d("messaging.success.updated")
            } catch {
                i("messaging.error.updated")
            } finally {
                g.value = !1
            }
        }
        async function Qt() {
            if (it()) {
                p.value.parameters = {
                    ...p.value.parameters,
                    show_user_name_message: ge.value,
                    use_last_deal: he.value,
                    key_words: ce.value,
                    blocked_words: _e.value,
                    use_voice: te.value,
                    auto_finish_timeout: lt()
                },
                g.value = !0;
                try {
                    await t.dispatch("messaging/channel/updateChannel", {
                        channelId: p.value.id,
                        description: p.value.description,
                        type: p.value.type,
                        users: v.value.map(k => k.code),
                        parameters: p.value.parameters
                    }),
                    d("messaging.success.updated"),
                    ct(),
                    xe.value = !0,
                    n.push({
                        name: "messaging.channel"
                    })
                } catch {
                    i("messaging.error.updated")
                } finally {
                    g.value = !1
                }
            }
        }
        async function ot() {
            var k, E, H, G, J, Q, ne, de;
            try {
                g.value = !0,
                I.value = !1;
                const me = await Mt();
                $.value = me.data.users.map(ye => ({
                    code: parseInt(ye.id, 10),
                    label: ye.name
                }));
                const A = await t.dispatch("messaging/channel/getChannel", {
                    id: $e.value
                });
                p.value = A,
                p.value.parameters = (A == null ? void 0 : A.parameters) || {},
                nt(),
                v.value = $.value.filter(ye => {
                    var Xe;
                    return (Xe = A == null ? void 0 : A.users) == null ? void 0 : Xe.includes(ye.code)
                }
                ),
                f.value = (k = A == null ? void 0 : A.parameters) != null && k.phone ? st(A.parameters.phone) : "",
                q.value = (A == null ? void 0 : A.description) || "",
                le.value = (A == null ? void 0 : A.type) || "whatsapp",
                ge.value = (E = A == null ? void 0 : A.parameters) == null ? void 0 : E.show_user_name_message,
                he.value = (H = A == null ? void 0 : A.parameters) == null ? void 0 : H.use_last_deal,
                B.value = ((G = A == null ? void 0 : A.parameters) == null ? void 0 : G.automatic_messages) || [],
                te.value = ((J = A == null ? void 0 : A.parameters) == null ? void 0 : J.use_voice) || !1,
                ce.value = ((Q = A == null ? void 0 : A.parameters) == null ? void 0 : Q.key_words) || [],
                _e.value = ((ne = A == null ? void 0 : A.parameters) == null ? void 0 : ne.blocked_words) || [],
                U.value = Yt((de = A == null ? void 0 : A.parameters) == null ? void 0 : de.auto_finish_timeout),
                Ae.value = (A == null ? void 0 : A.logs) || [],
                ct()
            } catch {
                i("messaging.configurations.load_error"),
                n.push({
                    name: "messaging.channel"
                })
            } finally {
                g.value = !1,
                I.value = !0
            }
        }
        function rt() {
            var H, G, J;
            const k = v.value.map(Q => Q.code).sort( (Q, ne) => Q - ne)
              , E = {
                idGupshupApp: K.value.idGupshupApp.value,
                nameGupshupApp: K.value.nameGupshupApp.value,
                authenticationLink: K.value.authenticationLink.value
            };
            return JSON.stringify({
                description: ((H = p.value) == null ? void 0 : H.description) || "",
                type: ((G = p.value) == null ? void 0 : G.type) || "whatsapp",
                users: k,
                parameters: ((J = p.value) == null ? void 0 : J.parameters) || {},
                showUserNameMessage: ge.value,
                useLastDeal: he.value,
                useVoice: te.value,
                autoMessages: B.value,
                integrateForm: E,
                keyWords: ce.value,
                blockedWords: _e.value,
                autoFinishTimeout: U.value
            })
        }
        function ct() {
            D.value = rt()
        }
        const Zt = L( () => D.value && D.value !== rt());
        async function Jt() {
            return await u({
                title: s("general.unsaved_changes_title"),
                description: s("general.unsaved_changes_description")
            })
        }
        async function Xt() {
            return xe.value ? (xe.value = !1,
            !0) : Zt.value ? await Jt() : !0
        }
        async function es() {
            const {isConfirmed: k} = await Re.deleteConfirm(s("messaging.channel.messages.warning.delete_title"), s("messaging.channel.messages.warning.delete_message"), {
                confirmButtonText: s("delete")
            });
            if (k)
                try {
                    await je(p.value.id) && (d("messaging.channel.messages.success.delete"),
                    X.track("messaging-channel-delete", {
                        id: p.value.id
                    }),
                    xe.value = !0,
                    n.push({
                        name: "messaging.channel"
                    }))
                } catch {
                    i("messaging.channel.messages.error.delete")
                }
        }
        function ts() {
            V.value = null,
            M.value = !0
        }
        function ss(k) {
            V.value = k,
            F.value = !0
        }
        function as(k) {
            V.value = k,
            M.value = !0
        }
        function ns(k) {
            V.value = k,
            O.value = !0
        }
        function ls() {
            M.value = !1,
            V.value = null
        }
        function is() {
            F.value = !1,
            V.value = null
        }
        function os() {
            O.value = !1,
            V.value = null
        }
        function rs() {
            var k, E;
            V.value !== null && (E = (k = p.value) == null ? void 0 : k.parameters) != null && E.automatic_messages && (p.value.parameters.automatic_messages.splice(V.value, 1),
            B.value = p.value.parameters.automatic_messages || [],
            F.value = !1)
        }
        function Le(k) {
            const [E,H] = k.split(":").map(Number);
            return E * 60 + H
        }
        function cs(k) {
            const E = {
                start: Le(k.start_time),
                end: Le(k.end_time)
            };
            return B.value.some(H => {
                const G = {
                    start: Le(H.start_time),
                    end: Le(H.end_time)
                }
                  , J = G.start < E.end && G.end > E.start
                  , Q = k.days.some(ne => H.days.includes(ne));
                return !k.edit && J && Q
            }
            )
        }
        async function ds(k) {
            if (cs(k)) {
                i("messaging.configurations.modal_new_message.error_interval");
                return
            }
            p.value.parameters = p.value.parameters || {},
            k.edit ? p.value.parameters.automatic_messages[V.value] = k : p.value.parameters.automatic_messages ? p.value.parameters.automatic_messages.push(k) : p.value.parameters.automatic_messages = [k],
            B.value = p.value.parameters.automatic_messages || [],
            await Je(p.value)
        }
        return xt(Fe, k => {
            !k && S.value === "autoMessages" && (S.value = "attendance")
        }
        ),
        tt(async () => {
            ue.$on("save-configs", async () => {
                await Je(p.value)
            }
            ),
            ue.$on("save-all-configs", async () => {
                await Qt()
            }
            ),
            await ot();
            const k = await It();
            re.value = !!k
        }
        ),
        vs( () => {
            ue.$off("save-configs"),
            ue.$off("save-all-configs")
        }
        ),
        ys(async () => await Xt()),
        (k, E) => {
            var me;
            const H = r("DsHeading")
              , G = r("DsBadge")
              , J = r("DsTypography")
              , Q = r("DsButton")
              , ne = r("DsIcon")
              , de = r("DsPageContainer");
            return o(),
            m("div", Dd, [l("div", Sd, [l("div", Md, [l("div", null, [l("div", Id, [a(H, {
                size: "md",
                text: pe.value
            }, null, 8, ["text"]), f.value ? (o(),
            x(G, {
                key: 0,
                color: "green",
                text: f.value
            }, null, 8, ["text"])) : b("", !0)]), a(J, {
                text: T(s)("messaging.configurations.description"),
                color: "black",
                class: "fs-2 break-line"
            }, null, 8, ["text"])]), l("div", Vd, [(me = fe.value) != null && me.text ? (o(),
            x(G, wt(we({
                key: 0
            }, fe.value)), null, 16)) : b("", !0), re.value ? (o(),
            x(Q, {
                key: 1,
                size: "md",
                variant: "red-light",
                icon: "delete-bin-6-line",
                text: T(s)("messaging.channel.messages.warning.delete_title"),
                onClick: es
            }, null, 8, ["text"])) : b("", !0)])])]), l("div", Ad, [l("div", Fd, [l("div", Ed, [l("div", null, [(o(!0),
            m(N, null, j(Be.value, A => (o(),
            m("div", {
                key: A.key,
                class: Y(["d-flex p-3 w-100 text-decoration-none text-dark cursor-pointer", Ht(A)]),
                disabled: A.disabled,
                onClick: ye => Wt(A)
            }, [A.remove ? b("", !0) : (o(),
            x(J, {
                key: 0,
                tag: "span",
                class: "w-100",
                fontWeight: "semibold",
                fontSize: "2",
                color: S.value === A.key ? "green-normal" : "gray",
                text: A.label
            }, null, 8, ["color", "text"]))], 10, Bd))), 128))])])]), l("div", zd, [a(de, {
                class: "p-0"
            }, {
                default: w( () => [S.value === "general" ? (o(),
                x(T(Pc), {
                    key: 0,
                    showIntegrateSection: Qe.value,
                    integrateForm: K.value,
                    channelDescription: q.value,
                    channelType: le.value,
                    showUserNameMessage: ge.value,
                    useLastDeal: he.value,
                    useVoice: te.value,
                    loading: g.value,
                    permissions: Ge.value,
                    disableLastDeal: De.value,
                    lastDealTooltip: Ee.value,
                    showVoiceWorkflow: be.value,
                    "onUpdate:integrateForm": ze,
                    "onUpdate:channelDescription": Ue,
                    "onUpdate:channelType": Oe,
                    onIntegrate: qt,
                    onPermissionClick: Gt,
                    "onUpdate:showUserNameMessage": E[0] || (E[0] = A => Ze("showUserNameMessage", A)),
                    "onUpdate:useLastDeal": E[1] || (E[1] = A => Ze("useLastDeal", A)),
                    "onUpdate:useVoice": E[2] || (E[2] = A => Ze("useVoice", A))
                }, null, 8, ["showIntegrateSection", "integrateForm", "channelDescription", "channelType", "showUserNameMessage", "useLastDeal", "useVoice", "loading", "permissions", "disableLastDeal", "lastDealTooltip", "showVoiceWorkflow"])) : S.value === "attendance" ? (o(),
                x(T(td), {
                    key: 1,
                    loading: g.value,
                    responsibleConfig: ie.value,
                    hasResponsibleConfig: Te.value,
                    disableLastDeal: De.value,
                    lastDealTooltip: Ee.value,
                    showVoiceWorkflow: be.value,
                    keyWords: ce.value,
                    "onUpdate:keyWords": E[3] || (E[3] = A => ce.value = A),
                    blockedWords: _e.value,
                    "onUpdate:blockedWords": E[4] || (E[4] = A => _e.value = A),
                    autoFinishTimeout: U.value,
                    "onUpdate:autoFinishTimeout": E[5] || (E[5] = A => U.value = A),
                    onOpenResponsibleConfig: Rt
                }, null, 8, ["loading", "responsibleConfig", "hasResponsibleConfig", "disableLastDeal", "lastDealTooltip", "showVoiceWorkflow", "keyWords", "blockedWords", "autoFinishTimeout"])) : S.value === "autoMessages" ? (o(),
                x(T(cd), {
                    key: 2,
                    autoMessages: B.value,
                    onCreate: ts,
                    onPreview: ns,
                    onEdit: as,
                    onDelete: ss
                }, null, 8, ["autoMessages"])) : S.value === "users" ? (o(),
                x(T(hd), {
                    key: 3,
                    modelValue: v.value,
                    "onUpdate:modelValue": E[6] || (E[6] = A => v.value = A),
                    usersOptions: $.value,
                    loading: g.value
                }, null, 8, ["modelValue", "usersOptions", "loading"])) : S.value === "events" ? (o(),
                x(T(Td), {
                    key: 4,
                    events: Ae.value
                }, null, 8, ["events"])) : b("", !0), l("div", Ud, [(o(!0),
                m(N, null, j(Ke.value, (A, ye) => (o(),
                m("div", {
                    key: A.name || ye,
                    class: "border-bottom"
                }, [l("div", {
                    class: "m-3 d-flex align-items-center cursor-pointer",
                    onClick: Xe => Kt(A.route)
                }, [a(ne, {
                    icon: A.icon,
                    class: "fs-7"
                }, null, 8, ["icon"]), a(J, {
                    text: T(s)(`messaging.configurations.options.${A.name}`),
                    color: "black",
                    class: "fs-2 mb-0 ms-2 fw-semibold"
                }, null, 8, ["text"])], 8, Od)]))), 128))])]),
                _: 1
            })])]), y.value ? (o(),
            x(T(Lt), {
                key: 0,
                show: y.value,
                manualConfig: ie.value.regular.value,
                channel: p.value,
                onSave: Je,
                onClose: E[7] || (E[7] = A => y.value = !1)
            }, null, 8, ["show", "manualConfig", "channel"])) : b("", !0), a(T(Pt), {
                show: M.value,
                message: R.value,
                channel: p.value,
                onConfirm: ds,
                onClose: ls
            }, null, 8, ["show", "message", "channel"]), R.value ? (o(),
            x(T(jt), {
                key: 1,
                message: R.value,
                show: O.value,
                onClose: os
            }, null, 8, ["message", "show"])) : b("", !0), R.value ? (o(),
            x(T(Nt), {
                key: 2,
                show: F.value,
                message: R.value,
                onConfirm: rs,
                onClose: is
            }, null, 8, ["show", "message"])) : b("", !0), a(T(ea), null, {
                footer: w( () => [a(Q, {
                    text: T(s)("general.unsaved_changes_discard"),
                    class: "w-100",
                    disabled: T(_),
                    loading: T(_),
                    onClick: E[8] || (E[8] = A => T(h)(!0))
                }, null, 8, ["text", "disabled", "loading"]), a(Q, {
                    text: T(s)("general.unsaved_changes_stay"),
                    variant: "transparent",
                    class: "w-100",
                    disabled: T(_),
                    onClick: E[9] || (E[9] = A => T(h)(!1))
                }, null, 8, ["text", "disabled"])]),
                _: 1
            })])
        }
    }
}
  , Pd = W(Ld, [["__scopeId", "data-v-221a81f0"]])
  , Kg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Pd
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Nd = {
    class: "h-100"
}
  , jd = {
    __name: "Chatbots",
    setup(e) {
        const {t} = oe()
          , n = Ct()
          , c = We()
          , s = z("")
          , i = z(null)
          , d = L( () => ({
            title: t("plans.features.automation.new_chatbot"),
            labelText: t("plans.features.automation.chatbot_name"),
            buttonText: t("plans.features.automation.create_chatbot"),
            config: null,
            type: "chatbot"
        }))
          , u = L( () => {
            var p;
            return (p = c.getters) == null ? void 0 : p.freemium
        }
        );
        xt( () => n.name, () => {
            s.value = ""
        }
        , {
            immediate: !0
        });
        const h = L( () => {
            var p;
            return ["chatbot.list", "chatbot.index"].includes(n.name) ? ((p = n.params) == null ? void 0 : p.type) || "all" : n.name === "chatbot.templates" ? "templates" : "all"
        }
        );
        function _(p) {
            d.value.config = p,
            i.value.showNewJourneyModal()
        }
        return (p, g) => {
            const f = r("router-view");
            return o(),
            x(T(ua), {
                newWorkflowModalProps: d.value,
                ref_key: "workflowListPage",
                ref: i,
                class: "journeys-wrapper"
            }, {
                view: w( () => [l("div", Nd, [a(f, {
                    "data-testid": "router-view",
                    search: s.value,
                    onDuplicate: g[1] || (g[1] = $ => _($)),
                    onCreate: g[2] || (g[2] = $ => _($))
                }, null, 8, ["search"])])]),
                default: w( () => [a(T(ma), {
                    searchInputProps: {
                        placeholder: p.$t("plans.features.automation.search_chatbot"),
                        value: s.value
                    },
                    createButtonProps: {
                        disabled: u.value,
                        text: p.$t("plans.features.automation.create_chatbot")
                    },
                    tabs: [{
                        name: "all",
                        text: "Chatbots",
                        route: "chatbot.list",
                        dataTestId: "all-journeys-tab",
                        active: h.value === "all"
                    }, {
                        name: "my_chatbots",
                        text: p.$t("plans.features.automation.created_by_me"),
                        route: "chatbot.list",
                        dataTestId: "my-chatbots-tab",
                        routeParams: {
                            type: "my-chatbots"
                        },
                        active: h.value === "my-chatbots"
                    }, {
                        name: "templates",
                        text: p.$t("journey.tabs.templates"),
                        route: "chatbot.templates",
                        dataTestId: "templates-tab",
                        active: h.value === "templates"
                    }],
                    onCreate: _,
                    onSearch: g[0] || (g[0] = $ => s.value = $)
                }, null, 8, ["searchInputProps", "createButtonProps", "tabs"])]),
                _: 1
            }, 8, ["newWorkflowModalProps"])
        }
    }
}
  , Yg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: jd
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wd = {
    __name: "ChatbotList",
    props: {
        search: String,
        type: String
    },
    setup(e) {
        const t = e
          , n = z([])
          , c = z(0)
          , s = z(!1)
          , {notifyError: i} = He();
        async function d({search: u, limit: h, offset: _, sort: p, filter: g}) {
            s.value = !0;
            try {
                const f = await aa({
                    search: u,
                    limit: h,
                    offset: _,
                    sort: p,
                    filter: {
                        ...g,
                        type: "chatbot"
                    }
                });
                n.value = f.data,
                c.value = f.total
            } catch {
                i("messages.error.load"),
                n.value = []
            } finally {
                s.value = !1
            }
        }
        return (u, h) => (o(),
        x(T(sa), {
            class: "h-100",
            workflows: n.value,
            total: c.value,
            search: t.search,
            type: t.type,
            loading: s.value,
            onFetchData: d
        }, null, 8, ["workflows", "total", "search", "type", "loading"]))
    }
}
  , Qg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wd
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Hd = {
    __name: "ChatbotTemplates",
    props: {
        search: String
    },
    emits: ["create"],
    setup(e, {emit: t}) {
        const n = e
          , c = t;
        return (s, i) => (o(),
        m("div", null, [a(T(pa), {
            search: n.search,
            type: "chatbot",
            onCreate: i[0] || (i[0] = d => c("create", d))
        }, null, 8, ["search"])]))
    }
}
  , Zg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hd
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Rd = {
    name: "StepPrivacyConsent",
    props: {
        syncHistory: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["update:syncHistory"],
    computed: {
        privacyItems() {
            return [{
                icon: "eye-line",
                iconClass: "text-muted",
                text: this.$t("messaging.channel.new_channel_modal.web.privacy_consent.item_see")
            }, {
                icon: "checkbox-circle-line",
                iconClass: "text-success",
                text: this.$t("messaging.channel.new_channel_modal.web.privacy_consent.item_choose")
            }, {
                icon: "close-circle-line",
                iconClass: "text-danger",
                text: this.$t("messaging.channel.new_channel_modal.web.privacy_consent.item_no_send")
            }, {
                icon: "close-circle-line",
                iconClass: "text-danger",
                text: this.$t("messaging.channel.new_channel_modal.web.privacy_consent.item_no_share")
            }]
        }
    }
}
  , qd = {
    class: "text-center"
}
  , Gd = {
    class: "privacy-icon-wrapper mx-auto mb-4"
}
  , Kd = {
    class: "privacy-items-box rounded-2 p-4 text-start"
}
  , Yd = {
    class: "d-flex align-items-center gap-3 privacy-item pt-2 mt-2"
};
function Qd(e, t, n, c, s, i) {
    const d = r("DsIcon")
      , u = r("DsHeading")
      , h = r("DsParagraph")
      , _ = r("DsCheckbox");
    return o(),
    m("div", qd, [l("div", Gd, [a(d, {
        icon: "shield-line",
        class: "privacy-icon"
    })]), a(u, {
        text: e.$t("messaging.channel.new_channel_modal.web.privacy_consent.heading"),
        size: "lg",
        class: "mb-2"
    }, null, 8, ["text"]), a(h, {
        text: e.$t("messaging.channel.new_channel_modal.web.privacy_consent.subtitle"),
        size: "md",
        class: "text-muted mb-4 lh-sm"
    }, null, 8, ["text"]), l("div", Kd, [(o(!0),
    m(N, null, j(i.privacyItems, (p, g) => (o(),
    m("div", {
        key: g,
        class: "d-flex align-items-center gap-3 privacy-item"
    }, [a(d, {
        icon: p.icon,
        class: Y([p.iconClass, "privacy-item__icon flex-shrink-0"])
    }, null, 8, ["icon", "class"]), a(h, {
        text: p.text,
        size: "md",
        class: "mb-0"
    }, null, 8, ["text"])]))), 128)), l("div", Yd, [a(_, {
        id: "sync-history-checkbox",
        modelValue: n.syncHistory,
        "onUpdate:modelValue": t[0] || (t[0] = p => e.$emit("update:syncHistory", p)),
        class: "mb-0 flex-shrink-0",
        label: e.$t("messaging.channel.new_channel_modal.web.sync_full_history")
    }, null, 8, ["modelValue", "label"])])])])
}
const Zd = W(Rd, [["render", Qd], ["__scopeId", "data-v-b68ea5bd"]])
  , Jd = {
    name: "ActivationWeb",
    components: {
        VueQrcode: At,
        TabSteps: Ot,
        StepPrivacyConsent: Zd,
        StepSyncImport: na
    },
    data() {
        return {
            step: 1,
            loading: !1,
            form: {
                description: "",
                phone: ""
            },
            errors: {},
            qrCode: null,
            channelId: null,
            syncComplete: !1,
            selectedCount: 0,
            syncHistory: !0
        }
    },
    mounted() {
        gt.on("messaging.channel.qrcode.updated", this.handleQrCodeUpdate);
        const e = this.$route.query.channelId;
        e && (this.channelId = parseInt(e, 10),
        this.step = 3,
        this.handleReconnect())
    },
    async beforeUnmount() {
        gt.off("messaging.channel.qrcode.updated", this.handleQrCodeUpdate),
        this.channelId && (la(this.channelId),
        !this.connected && this.step < 4 && await je(this.channelId))
    },
    watch: {
        connected() {
            this.connected && this.step === 3 && (this.syncHistory ? this.step = 4 : (this.$notification.notifySuccess("messaging.channel.messages.success.create"),
            this.handleFinish()))
        }
    },
    computed: {
        ...ee("messaging/channel", ["connectionStatus"]),
        ...ee(["user"]),
        connected() {
            return this.connectionStatus === "open"
        },
        steps() {
            return [{
                index: 0,
                label: this.$t("messaging.channel.new_channel_modal.web.step_0_label")
            }, {
                index: 1,
                label: this.$t("messaging.channel.new_channel_modal.web.step_1_label")
            }, {
                index: 2,
                label: this.$t("messaging.channel.new_channel_modal.web.step_2_label")
            }, {
                index: 3,
                label: this.$t("messaging.channel.new_channel_modal.web.step_3_label")
            }]
        },
        currentStepTitle() {
            return this.step === 1 ? this.$t("messaging.channel.new_channel_modal.web.privacy_consent.heading") : this.step === 2 ? this.$t("messaging.channel.new_channel_modal.title_details") : this.step === 3 ? this.$t("messaging.channel.new_channel_modal.qrcode.title") : this.$t("messaging.channel.new_channel_modal.web.import_title")
        },
        currentStepDescription() {
            return this.step === 1 ? "" : this.step === 2 ? this.$t("messaging.channel.new_channel_modal.web.description") : this.step === 3 ? this.$t("messaging.channel.new_channel_modal.qrcode.instruction") : this.$t("messaging.channel.new_channel_modal.web.import_description")
        }
    },
    methods: {
        ...se("messaging/channel", ["createChannel", "reconnectChannel"]),
        goBack() {
            this.$router.push({
                name: "messaging.channel"
            })
        },
        handleFinish() {
            this.$router.push({
                name: "messaging.channel"
            })
        },
        async handleNext() {
            this.step === 1 ? this.step = 2 : this.step === 2 ? await this.createWebChannel() : this.handleFinish()
        },
        async createWebChannel() {
            if (this.errors = {},
            this.form.description || (this.errors.description = this.$t("required_field")),
            this.form.phone || (this.errors.phone = this.$t("required_field")),
            !(Object.keys(this.errors).length > 0)) {
                this.form.phone = this.form.phone.replace(/[^0-9]/g, ""),
                this.loading = !0;
                try {
                    const e = {
                        description: this.form.description,
                        parameters: {
                            phone: this.form.phone,
                            search_in_deals: !1,
                            use_last_deal: !1,
                            use_last_responsible_chat: !1,
                            use_router: !1,
                            show_user_name_message: !1
                        },
                        type: "whatsapp-web",
                        users: [this.user.id],
                        syncWppWebHistory: this.syncHistory
                    }
                      , t = await this.createChannel(e);
                    t && t.parameters && t.parameters.qrcode ? (this.qrCode = t.parameters.qrcode,
                    this.channelId = t.id,
                    ht(this.channelId),
                    this.step = 3) : (this.$notification.notifySuccess("messaging.channel.messages.success.create"),
                    this.handleFinish())
                } catch {
                    this.channelId && (await je(this.channelId),
                    this.channelId = null),
                    this.$notification.notifyError("messaging.channel.messages.error.create")
                } finally {
                    this.loading = !1
                }
            }
        },
        async handleReconnect() {
            this.loading = !0;
            try {
                const e = await this.reconnectChannel({
                    id: this.channelId
                });
                e && e.parameters && (e.parameters.syncHistory !== void 0 && (this.syncHistory = e.parameters.syncHistory),
                e.parameters.qrcode && (this.qrCode = e.parameters.qrcode,
                ht(this.channelId))),
                this.connected && this.step === 3 && (this.syncHistory ? this.step = 4 : this.handleFinish())
            } catch {
                this.$notification.notifyError("messaging.channel.messages.error.create")
            } finally {
                this.loading = !1
            }
        },
        handleQrCodeUpdate(e) {
            var t, n;
            if (this.channelId && e.channelId === this.channelId) {
                const c = e.qrcode || ((t = e.data) == null ? void 0 : t.qrcode) || ((n = e.payload) == null ? void 0 : n.qrcode);
                c && (this.qrCode = c.code || c.base64)
            }
        },
        phoneMask(e) {
            return St(e)
        }
    }
}
  , Xd = {
    class: "design-system"
}
  , em = {
    class: "row w-100 m-0 justify-content-center h-100"
}
  , tm = {
    class: "col-md-9 col-xl-10 bg-gray-dark d-flex justify-content-center align-items-center h-100 overflow-y"
}
  , sm = {
    class: "col-md-8 col-xl-6"
}
  , am = {
    class: "shadow-lg bg-white rounded-1 p-3"
}
  , nm = {
    key: 3,
    class: "row"
}
  , lm = {
    class: "col-md-6 mb-3"
}
  , im = {
    class: "fw-bold fs-2 mb-2"
}
  , om = {
    class: "col-md-6 mb-3"
}
  , rm = {
    class: "fw-bold fs-2 mb-2"
}
  , cm = {
    key: 4
}
  , dm = {
    class: "d-flex gap-2"
}
  , mm = {
    class: "d-flex gap-2 mt-3"
}
  , um = {
    class: "d-flex gap-2 mt-3"
}
  , pm = {
    key: 0,
    class: "d-flex justify-content-center mb-4 text-center"
}
  , gm = {
    key: 1,
    class: "text-center p-5"
}
  , hm = {
    class: "text-center"
}
  , _m = {
    class: "w-100 d-flex justify-content-end align-items-center mt-3"
};
function fm(e, t, n, c, s, i) {
    const d = r("TabSteps")
      , u = r("DsHeading")
      , h = r("DsTypography")
      , _ = r("StepPrivacyConsent")
      , p = r("DsInput")
      , g = r("DsBadge")
      , f = r("VueQrcode")
      , $ = r("DsIcon")
      , v = r("DsParagraph")
      , y = r("StepSyncImport")
      , M = r("DsButton");
    return o(),
    m("div", Xd, [a(d, {
        currentStep: s.step - 1,
        steps: i.steps,
        text: e.$t("messaging.channel.new_channel_modal.web.request_activation"),
        disabled: s.loading || s.step === 3 || s.step === 4 && !s.syncComplete,
        onNext: i.handleNext,
        onSubmit: i.handleFinish
    }, null, 8, ["currentStep", "steps", "text", "disabled", "onNext", "onSubmit"]), l("div", em, [l("div", tm, [l("div", sm, [l("div", am, [s.step !== 1 && s.step !== 4 ? (o(),
    x(u, {
        key: 0,
        text: i.currentStepTitle,
        size: "md"
    }, null, 8, ["text"])) : b("", !0), s.step !== 1 && s.step !== 4 && i.currentStepDescription ? (o(),
    x(h, {
        key: 1,
        text: i.currentStepDescription,
        fontSize: "4",
        class: "mb-4 lh-sm",
        color: "gray-600"
    }, null, 8, ["text"])) : b("", !0), s.step === 1 ? (o(),
    x(_, {
        key: 2,
        syncHistory: s.syncHistory,
        "onUpdate:syncHistory": t[0] || (t[0] = F => s.syncHistory = F)
    }, null, 8, ["syncHistory"])) : s.step === 2 ? (o(),
    m("div", nm, [l("div", lm, [l("label", im, C(e.$t("messaging.channel.new_channel_modal.form.name")), 1), a(p, {
        modelValue: s.form.description,
        "onUpdate:modelValue": t[1] || (t[1] = F => s.form.description = F),
        placeholder: e.$t("messaging.channel.new_channel_modal.form.name_placeholder"),
        error: s.errors.description,
        disabled: s.loading
    }, null, 8, ["modelValue", "placeholder", "error", "disabled"])]), l("div", om, [l("label", rm, C(e.$t("messaging.channel.new_channel_modal.form.phone")), 1), a(p, {
        modelValue: s.form.phone,
        "onUpdate:modelValue": t[2] || (t[2] = F => s.form.phone = F),
        placeholder: e.$t("messaging.channel.new_channel_modal.form.phone_placeholder"),
        error: s.errors.phone,
        mask: i.phoneMask(),
        disabled: s.loading
    }, null, 8, ["modelValue", "placeholder", "error", "mask", "disabled"])])])) : s.step === 3 ? (o(),
    m("div", cm, [l("div", dm, [a(g, {
        class: "circle-badge",
        bgColor: "green-normal",
        borderColor: "green-normal",
        textColor: "white",
        text: "1"
    }), a(h, {
        tag: "span",
        text: e.$t("messaging.channel.new_channel_modal.web.qr_step_1"),
        fontSize: "4",
        class: "mb-2 mt-1"
    }, null, 8, ["text"])]), l("div", mm, [a(g, {
        class: "circle-badge",
        bgColor: "green-normal",
        borderColor: "green-normal",
        textColor: "white",
        text: "2"
    }), a(h, {
        tag: "span",
        text: e.$t("messaging.channel.new_channel_modal.web.qr_step_2"),
        fontSize: "4",
        class: "mb-2 mt-1"
    }, null, 8, ["text"])]), l("div", um, [a(g, {
        class: "circle-badge",
        bgColor: "green-normal",
        borderColor: "green-normal",
        textColor: "white",
        text: "3"
    }), a(h, {
        tag: "span",
        text: e.$t("messaging.channel.new_channel_modal.web.qr_step_3"),
        fontSize: "4",
        class: "mb-2 mt-1"
    }, null, 8, ["text"])]), s.qrCode ? (o(),
    m("div", pm, [a(f, {
        value: s.qrCode,
        color: "white",
        options: {
            width: 150
        }
    }, null, 8, ["value"])])) : (o(),
    m("div", gm, [a($, {
        icon: "loader-4-line ds-spinner",
        size: "md"
    })])), l("div", hm, [a($, {
        icon: "loader-4-line ds-spinner",
        class: "fs-8 mt-4"
    }), a(v, {
        text: "Aguardando a conexão para continuar...",
        size: "md",
        class: "mb-2 mt-2 lh-sm"
    })])])) : s.step === 4 ? (o(),
    x(y, {
        key: 5,
        channelId: s.channelId,
        "onUpdate:syncComplete": t[3] || (t[3] = F => s.syncComplete = F),
        "onUpdate:selectedCount": t[4] || (t[4] = F => s.selectedCount = F),
        onCancel: i.goBack
    }, null, 8, ["channelId", "onCancel"])) : b("", !0)]), l("div", _m, [s.step === 1 ? (o(),
    x(M, {
        key: 0,
        text: e.$t("cancel"),
        size: "lg",
        class: "bg-transparent border-0 text-green-normal me-4",
        onClick: i.goBack
    }, null, 8, ["text", "onClick"])) : b("", !0), s.step === 1 ? (o(),
    x(M, {
        key: 1,
        leftIcon: "shield-check-line",
        size: "lg",
        text: e.$t("messaging.channel.new_channel_modal.web.privacy_consent.accept"),
        onClick: i.handleNext
    }, null, 8, ["text", "onClick"])) : b("", !0), s.step === 2 ? (o(),
    x(M, {
        key: 2,
        text: e.$t("cancel"),
        size: "lg",
        class: "bg-transparent border-0 text-green-normal me-4",
        onClick: i.goBack
    }, null, 8, ["text", "onClick"])) : b("", !0), s.step === 2 ? (o(),
    x(M, {
        key: 3,
        rightIcon: "arrow-right-s-line",
        size: "lg",
        text: e.$t("messaging.channel.new_channel_modal.actions.next"),
        loading: s.loading,
        onClick: i.handleNext
    }, null, 8, ["text", "loading", "onClick"])) : b("", !0)])])])])])
}
const bm = W(Jd, [["render", fm], ["__scopeId", "data-v-4ea79997"]])
  , Jg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: bm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , vm = {
    name: "messaging-template"
}
  , ym = {
    class: "messaging-template design-system"
};
function wm(e, t, n, c, s, i) {
    const d = r("router-view");
    return o(),
    m("div", ym, [a(d)])
}
const Cm = W(vm, [["render", wm]])
  , Xg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cm
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xm = {
    emits: ["activeTemplate", "openModal"],
    name: "template-card",
    props: {
        template: Object
    },
    components: {
        ABtn: at
    },
    computed: {
        ...ee({
            canUpdate: "messaging/template/canUpdate"
        }),
        status() {
            return (this.template.status || "").toLowerCase()
        },
        fileSize() {
            var e;
            return ia((e = this.template.payload) == null ? void 0 : e.size)
        },
        fileThumbnail() {
            return this.template.payload ? `/api/v2/messages/templates/${this.template.id}/media` : ""
        },
        templateActive() {
            return this.template.active === 1
        },
        templateApproved() {
            return this.template.status === "approved"
        },
        badgeColor() {
            if (!this.templateActive)
                return "gray";
            switch (this.status) {
            case "approved":
                return "green";
            case "rejected":
                return "red";
            case "pending":
                return "yellow";
            default:
                return "gray"
            }
        },
        qualityBadgeColor() {
            switch (this.template.template_params.quality) {
            case "high":
                return "green";
            case "low":
                return "red";
            case "medium":
                return "yellow";
            case "unknown":
                return "gray";
            default:
                return "gray"
            }
        }
    }
}
  , km = {
    class: "template-card__content"
}
  , $m = {
    class: "template-card__header d-flex justify-content-between mb-2"
}
  , Tm = {
    class: "d-flex align-items-center justify-content-between"
}
  , Dm = {
    class: "header__group d-flex align-items-center fw-semibold text-green-normal"
}
  , Sm = {
    class: "header__group d-flex align-items-center fw-semibold text-green-normal"
}
  , Mm = {
    key: 0,
    class: "icon-group-line pe-2"
}
  , Im = {
    class: "small"
}
  , Vm = {
    class: "template-card__message"
}
  , Am = ["src"]
  , Fm = ["src"]
  , Em = {
    class: "my-3 d-flex align-items-center"
}
  , Bm = {
    class: "template-card__footer d-flex justify-content-between align-items-center"
}
  , zm = {
    key: 0,
    class: "d-flex"
};
function Um(e, t, n, c, s, i) {
    var $, v;
    const d = r("DsIcon")
      , u = r("DsTypography")
      , h = r("DsBadge")
      , _ = r("DsSubtitle")
      , p = r("DsTooltip")
      , g = r("DsCheckbox")
      , f = r("a-btn");
    return o(),
    m("div", {
        class: Y(["template-card d-flex justify-content-between h-100 rounded py-4 px-3", i.templateActive ? "actived" : "disabled"])
    }, [l("div", km, [l("div", $m, [l("div", Tm, [l("div", Dm, [a(d, {
        class: "fs-4 me-1 text-gray-600",
        icon: "whatsapp-line"
    }), a(u, {
        class: "text-truncate",
        tag: "span",
        text: n.template.channel_name,
        color: "gray-600",
        fontSize: "2"
    }, null, 8, ["text"])])]), l("div", null, [a(h, {
        bgColor: i.badgeColor + "-light",
        textColor: i.badgeColor === "gray" ? "gray-700" : i.badgeColor + "-normal",
        borderColor: i.badgeColor === "gray" ? "gray-700" : i.badgeColor + "-normal",
        text: e.$t(`messaging_template.status.${i.status}.label`)
    }, null, 8, ["bgColor", "textColor", "borderColor", "text"])])]), Z(l("div", Sm, [n.template.group ? (o(),
    m("i", Mm)) : b("", !0), l("span", Im, C(($ = n.template.group) == null ? void 0 : $.name), 1)], 512), [[bt, n.template.group]]), a(_, {
        class: "template-card__title mb-3 text-wrap",
        text: n.template.vertical,
        size: "sm"
    }, null, 8, ["text"]), n.template.templateCategory ? (o(),
    x(u, {
        key: 0,
        class: "template-card__category fw-semibold mb-3",
        text: n.template.templateCategory.name
    }, null, 8, ["text"])) : b("", !0), l("div", Vm, [a(u, {
        class: "template-card__message__content",
        text: n.template.example,
        color: "gray"
    }, null, 8, ["text"])]), l("div", {
        class: Y([n.template.payload ? "" : "opacity-0", "d-flex mt-2 mb-2 template-card__media"])
    }, [n.template.template_type === "IMAGE" ? (o(),
    m("img", {
        key: 0,
        class: "m-2 media-sm",
        src: i.fileThumbnail
    }, null, 8, Am)) : n.template.template_type === "DOCUMENT" ? (o(),
    x(d, {
        key: 1,
        class: "m-0 media-sm text-red-normal",
        icon: "file-pdf-line"
    })) : n.template.template_type === "VIDEO" ? (o(),
    m("video", {
        key: 2,
        class: "m-2 media-sm",
        src: i.fileThumbnail
    }, null, 8, Fm)) : b("", !0), a(u, {
        text: (v = n.template.payload) == null ? void 0 : v.name,
        class: "m-0 file-text",
        fontSize: "1",
        color: "black"
    }, null, 8, ["text"]), a(u, {
        text: i.fileSize,
        class: "m-1",
        fontSize: "1",
        color: "gray"
    }, null, 8, ["text"])], 2)]), l("div", Em, [a(p, {
        text: e.$t("messaging_template.quality.tooltip")
    }, {
        default: w( () => [a(h, {
            class: "ms-0",
            textClass: "fs-1",
            bgColor: i.qualityBadgeColor + "-light",
            textColor: i.qualityBadgeColor === "gray" ? "gray-700" : i.qualityBadgeColor + "-normal",
            borderColor: i.qualityBadgeColor === "gray" ? "gray-700" : i.qualityBadgeColor + "-normal",
            text: e.$t(`messaging_template.quality.${n.template.template_params.quality ?? "unknown"}`)
        }, null, 8, ["bgColor", "textColor", "borderColor", "text"])]),
        _: 1
    }, 8, ["text"])]), l("div", Bm, [e.canUpdate ? (o(),
    m("div", zm, [a(g, {
        isSwitch: "",
        modelValue: i.templateActive,
        "onUpdate:modelValue": t[0] || (t[0] = y => e.$emit("activeTemplate", n.template)),
        labelClass: "mt-1 fw-bold",
        label: e.$t(`messaging_template.status.${i.templateActive ? "actived" : "disabled"}`)
    }, null, 8, ["modelValue", "label"])])) : b("", !0), a(f, {
        label: e.$t("messaging_template.list.view_button") + " >",
        type: "tertiary",
        class: "btn-small text-green-normal",
        onClick: t[1] || (t[1] = y => e.$emit("openModal", n.template))
    }, null, 8, ["label"])])], 2)
}
const Om = W(xm, [["render", Um], ["__scopeId", "data-v-ce3ddf9c"]])
  , Lm = {
    emits: ["setOffset", "setLimit"],
    name: "template-pagination",
    props: {
        limit: Number,
        offset: Number,
        length: Number
    },
    components: {
        ABtn: at
    },
    data() {
        return {
            limitSelected: this.limit
        }
    },
    watch: {
        limitSelected() {
            this.$emit("setLimit", this.limitSelected)
        }
    },
    computed: {
        getPages() {
            return Math.ceil(this.length / this.limit)
        },
        getButtons() {
            const n = [];
            if (this.getPages > 5 && this.offset > this.getPages - 3) {
                n.push(1),
                n.push("…");
                for (let c = 1; c <= 3; c += 1)
                    n.push(this.getPages - 3 + c);
                return n
            }
            if (this.getPages > 5 && this.offset < 2) {
                for (let c = 1; c <= 3; c += 1)
                    n.push(c);
                return n.push("…"),
                n.push(this.getPages),
                n
            }
            if (this.getPages > 5) {
                n.push(1),
                n.push("…");
                for (let c = 0; c < 3; c += 1)
                    n.push(this.offset + c);
                return n.push("…"),
                n.push(this.getPages),
                n
            }
            for (let c = 1; c <= this.getPages; c += 1)
                n.push(c);
            return n
        }
    }
}
  , Pm = {
    key: 0,
    class: "mx-3 d-flex justify-content-between align-items-center"
}
  , Nm = {
    class: "pagination_length"
}
  , jm = {
    value: "6"
}
  , Wm = {
    value: "15"
}
  , Hm = {
    value: "30"
}
  , Rm = {
    value: "50"
}
  , qm = {
    class: "pagination col-sm-8 col-md-5 col-lg-3"
}
  , Gm = {
    class: "d-flex justify-content-evenly align-items-center m-0 col-8"
}
  , Km = {
    class: "small"
};
function Ym(e, t, n, c, s, i) {
    const d = r("a-btn");
    return n.length ? (o(),
    m("div", Pm, [l("div", Nm, [l("label", null, [Z(l("select", {
        "onUpdate:modelValue": t[0] || (t[0] = u => s.limitSelected = u),
        class: "input-sm small fw-semibold rounded results-per-page px-2 px-1"
    }, [l("option", jm, "6 " + C(e.$t("messaging_template.list.pagination.per_page")), 1), l("option", Wm, "15 " + C(e.$t("messaging_template.list.pagination.per_page")), 1), l("option", Hm, "30 " + C(e.$t("messaging_template.list.pagination.per_page")), 1), l("option", Rm, "50 " + C(e.$t("messaging_template.list.pagination.per_page")), 1)], 512), [[Pe, s.limitSelected, void 0, {
        number: !0
    }]])])]), l("div", qm, [a(d, {
        icon: "icon-arrow-left-s-line",
        type: "tertiary",
        onClick: t[1] || (t[1] = u => e.$emit("setOffset", n.offset - 1)),
        class: "pages px-0 bg-transparent text-green-normal",
        disabled: n.offset === 0
    }, null, 8, ["disabled"]), l("ul", Gm, [(o(!0),
    m(N, null, j(i.getButtons, (u, h) => (o(),
    m("li", {
        key: h,
        class: Y({
            active: u === n.offset + 1
        })
    }, [a(d, {
        label: u.toString(),
        type: "tertiary",
        onClick: _ => e.$emit("setOffset", u - 1),
        class: "px-0 bg-transparent pages",
        disabled: isNaN(u)
    }, null, 8, ["label", "onClick", "disabled"])], 2))), 128))]), a(d, {
        icon: "icon-arrow-right-s-line",
        type: "tertiary",
        onClick: t[2] || (t[2] = u => e.$emit("setOffset", n.offset + 1)),
        class: "pages px-0 bg-transparent text-green-normal",
        disabled: n.offset === i.getPages - 1
    }, null, 8, ["disabled"])]), l("p", Km, C(e.$t("messaging_template.list.pagination.results_per_page", {
        from: `${n.offset * n.limit + 1} - ${Math.min(n.offset * n.limit + n.limit, n.length)}`,
        total: n.length
    })), 1)])) : b("", !0)
}
const Qm = W(Lm, [["render", Ym], ["__scopeId", "data-v-de238641"]])
  , Zm = {
    name: "template-list",
    components: {
        ABtn: at,
        MModal: oa,
        TemplateCard: Om,
        Pagination: Qm,
        ModalNoChannelFound: kt
    },
    data() {
        return {
            loading: !0,
            loadingDelete: !1,
            isApproved: !1,
            isPending: !1,
            isRejected: !1,
            templateInView: null,
            templateDelete: null,
            categoriesFilter: [],
            groupsFilter: [],
            segmentFilter: [],
            typeFilter: [],
            groups: [],
            cantDeleteTemplate: !1,
            workflowsUsingTemplate: [],
            channelsFilter: [],
            filters: {
                active: null,
                status: null,
                search: null
            },
            pagination: {
                limit: 6,
                offset: 0
            },
            metaTypes: [{
                id: 1,
                label: this.$t("messaging_template.create.meta_type.marketing"),
                value: "MARKETING"
            }, {
                id: 2,
                label: this.$t("messaging_template.create.meta_type.utility"),
                value: "UTILITY"
            }],
            mediaTypes: [{
                id: 1,
                label: this.$t("textLastMessagesFile.template.document"),
                value: "DOCUMENT"
            }, {
                id: 2,
                label: this.$t("textLastMessagesFile.template.image"),
                value: "IMAGE"
            }, {
                id: 3,
                label: this.$t("textLastMessagesFile.template.video"),
                value: "VIDEO"
            }, {
                id: 4,
                label: this.$t("data_types.String"),
                value: "TEXT"
            }]
        }
    },
    created() {
        this.loadChannels({
            reset: !0
        }),
        this.handlerLoadTemplates(),
        this.loadCategory(),
        this.loadGroups()
    },
    watch: {
        "pagination.limit": {
            handler() {
                this.handlerLoadTemplates()
            }
        },
        "pagination.offset": {
            handler() {
                this.handlerLoadTemplates()
            }
        },
        statusFilters() {
            this.resetPagination(),
            this.filters.status = this.getStatusFilter(),
            this.handlerLoadTemplates()
        },
        groupsFilter() {
            this.resetPagination(),
            this.filters.id_groups = this.groupsFilter.map(e => e.id),
            this.handlerLoadTemplates()
        },
        categoriesFilter() {
            this.resetPagination(),
            this.filters.id_categories = this.categoriesFilter.map(e => e.id),
            this.handlerLoadTemplates()
        },
        segmentFilter() {
            this.resetPagination(),
            this.filters.segments = this.segmentFilter.map(e => e.value),
            this.handlerLoadTemplates()
        },
        typeFilter() {
            this.resetPagination(),
            this.filters.types = this.typeFilter.map(e => e.value),
            this.handlerLoadTemplates()
        },
        channelsFilter: {
            handler() {
                this.resetPagination(),
                this.filters.id_channel = [...this.channelsFilter],
                this.handlerLoadTemplates()
            },
            deep: !0
        }
    },
    computed: {
        ...ee({
            channels: "messaging/channel/channels",
            categories: "messaging/template/categories",
            templates: "messaging/template/templates",
            templateCounts: "messaging/template/templateCounts",
            canCreate: "messaging/template/canCreate",
            canUpdate: "messaging/template/canUpdate",
            canDelete: "messaging/template/canDelete",
            getHtmlMessage: "messaging/messages/getHtmlMessage"
        }),
        channelOptions() {
            return this.channels.map(e => ({
                ...e,
                value: e.id,
                label: e.description
            }))
        },
        mediaUrl() {
            return this.templateInView.payload ? `/api/v2/messages/templates/${this.templateInView.id}/media` : ""
        },
        statusFilters() {
            return `${this.isApproved}${this.isPending}${this.isRejected}`
        },
        getPagesLength() {
            return this.filters.active === null ? this.templateCounts.all : this.filters.active ? this.templateCounts.active : this.templateCounts.inactive
        },
        msgHtml() {
            if (this.templateInView.payload) {
                let e = "";
                this.templateInView.template_type === "IMAGE" ? e = `<div class="image-box mb-4"><img class="absolute" src="${this.mediaUrl}"/></div>` : this.templateInView.template_type === "VIDEO" && this.templateInView.payload.key && (e = `<div class="image-box mb-4"><video class="absolute" controls src="${this.mediaUrl}"</video></div>`);
                const t = this.getHtmlMessage({
                    message: this.templateInView.example
                });
                return e + t
            }
            return this.getHtmlMessage({
                message: this.templateInView.example
            })
        },
        mediaHtml() {
            var t, n;
            let e = "";
            return (n = (t = this.templateInView) == null ? void 0 : t.payload) != null && n.key && this.templateInView.template_type === "DOCUMENT" && (e = `
          <div class="doc-box mt-4">
              <a class="doc-badge d-flex " href="${this.mediaUrl}" download>
              <i class="ds-icon icon-file-pdf-line m-4 text-red-normal"></i> ${this.templateInView.payload.name}
              </a>
          </div>
          `),
            e
        }
    },
    methods: {
        ...se({
            loadChannels: "messaging/channel/loadChannels",
            loadTemplates: "messaging/template/loadTemplates",
            loadCategory: "messaging/template/loadCategory",
            deleteTemplate: "messaging/template/deleteTemplate",
            updateActive: "messaging/template/updateActive"
        }),
        selectChannelFilter(e, t) {
            if (t) {
                this.channelsFilter.push(e);
                return
            }
            this.channelsFilter = this.channelsFilter.filter(n => n !== e)
        },
        getStatusFilter() {
            const e = [];
            return this.isApproved && e.push("approved"),
            this.isPending && e.push("pending"),
            this.isRejected && e.push("rejected"),
            e
        },
        async handlerLoadTemplates() {
            this.loading = !0;
            try {
                const e = {
                    search: this.filters.search,
                    status: this.filters.status,
                    active: this.filters.active,
                    idGroups: this.filters.id_groups,
                    idCategories: this.filters.id_categories,
                    categories: this.filters.segments,
                    types: this.filters.types,
                    id_channel: this.filters.id_channel,
                    page: this.pagination.offset,
                    limit: this.pagination.limit
                };
                await this.loadTemplates(e),
                X.track("message_template_search", e.types)
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
        async handlerSearch({target: e}) {
            this.resetPagination(),
            this.filters.search = e.value.trim(),
            await this.handlerLoadTemplates()
        },
        async handlerActive(e) {
            this.resetPagination(),
            this.filters.active = e,
            this.handlerLoadTemplates()
        },
        async handlerActiveTemplate(e) {
            try {
                const t = e;
                t.active = !t.active,
                await this.updateActive(t),
                this.$notification.notifySuccess("messaging_template.update.success")
            } catch {
                this.$notification.notifyError("messaging_template.update.error")
            }
        },
        async handlerDeleteTemplate(e) {
            try {
                this.loadingDelete = !0,
                await this.deleteTemplate(e),
                this.templateDelete = null,
                this.$notification.notifySuccess("messaging_template.delete_success"),
                this.loadTemplates()
            } catch (t) {
                t.response && t.response.data.code === 409 && (this.workflowsUsingTemplate = t.response.data.type,
                this.cantDeleteTemplate = !0,
                this.templateDelete = null),
                this.$notification.notifyError("messaging_template.delete_error")
            } finally {
                this.loadingDelete = !1
            }
        },
        async loadGroups() {
            const e = await Vt();
            this.groups = e.data.groups.map(t => ({
                id: t.id,
                value: t.id,
                label: t.name
            }))
        },
        removeSelectItem(e, t) {
            this[e] = this[e].filter(n => n.id !== t.id)
        },
        resetPagination() {
            this.pagination.offset = 0
        }
    }
}
  , Jm = {
    class: "template-list row g-0 bg-gray-dark h-100"
}
  , Xm = {
    class: "template-list__filters col-lg-3 h-100"
}
  , eu = {
    class: "bg-white py-4 border-end shadow-sm h-100"
}
  , tu = {
    class: "fw-bolder mb-4 fs-5"
}
  , su = {
    class: "d-flex align-items-center rounded p-2 border mb-4"
}
  , au = ["placeholder"]
  , nu = {
    class: "pb-3"
}
  , lu = {
    class: "fw-bolder mb-3"
}
  , iu = {
    key: 0,
    class: "pb-3"
}
  , ou = {
    class: "fw-bolder mb-3"
}
  , ru = {
    class: "mt-2 d-flex flex-wrap"
}
  , cu = ["onClick"]
  , du = {
    class: "mt-2 d-flex flex-wrap"
}
  , mu = ["onClick"]
  , uu = {
    class: "mt-2 d-flex flex-wrap"
}
  , pu = ["onClick"]
  , gu = {
    class: "mt-2 d-flex flex-wrap"
}
  , hu = ["onClick"]
  , _u = {
    key: 0,
    class: "template-list__list col-lg-9 ds-page-container min-vh-100 py-4"
}
  , fu = {
    class: "mb-4"
}
  , bu = {
    key: 0,
    class: "list__header d-flex justify-content-between"
}
  , vu = {
    class: "nav nav-tabs"
}
  , yu = {
    class: "list__body row pb-1"
}
  , wu = {
    key: 1
}
  , Cu = {
    class: "text-center py-5"
}
  , xu = {
    class: "text-gray-600"
}
  , ku = {
    class: "text-gray-600"
}
  , $u = {
    class: "list__footer mt-4 mb-5"
}
  , Tu = {
    key: 1,
    class: "min-vh-100 col-lg-9 ds-page-container d-flex align-items-center justify-content-center py-4"
}
  , Du = {
    class: "d-flex align-items-center"
}
  , Su = {
    class: "message-preview shadow-sm rounded-top mt-3"
}
  , Mu = {
    class: "message-preview__body p-3 pb-5"
}
  , Iu = {
    class: "message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
}
  , Vu = {
    key: 0,
    class: "message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
}
  , Au = {
    class: "d-flex align-items-center justify-content-between"
}
  , Fu = {
    key: 0,
    class: "d-flex align-items-center"
}
  , Eu = {
    class: "small fw-bold"
}
  , Bu = {
    class: ""
}
  , zu = {
    class: "fw-bolder mb-0 text-white"
}
  , Uu = {
    class: "text-black m-1"
}
  , Ou = {
    class: "d-flex align-items-center justify-content-between"
}
  , Lu = {
    class: ""
}
  , Pu = {
    class: "fw-bolder mb-0 text-white"
}
  , Nu = {
    class: "text-black m-1"
}
  , ju = {
    key: 0
}
  , Wu = {
    class: "d-flex align-items-center justify-content-between"
};
function Hu(e, t, n, c, s, i) {
    const d = r("DsCheckbox")
      , u = r("DsPageContainer")
      , h = r("DsSelect")
      , _ = r("DsBadge")
      , p = r("DsAccordionItem")
      , g = r("DsAccordion")
      , f = r("a-btn")
      , $ = r("DsIcon")
      , v = r("router-link")
      , y = r("TemplateCard")
      , M = r("pagination")
      , F = r("DsSubtitle")
      , O = r("DsTypography")
      , V = r("m-modal")
      , B = r("modal-no-channel-found");
    return o(),
    m("div", Jm, [l("div", Xm, [l("div", eu, [a(u, null, {
        default: w( () => {
            var S;
            return [l("h3", tu, C(e.$t("messaging_template.filters.label")), 1), l("div", su, [t[21] || (t[21] = l("i", {
                class: "ds-icon icon-search-line me-2"
            }, null, -1)), l("input", {
                placeholder: e.$t("messaging_template.list.search"),
                class: "flex-fill bg-transparent border-0 small outline-none",
                onKeyup: t[0] || (t[0] = (...D) => i.handlerSearch && i.handlerSearch(...D))
            }, null, 40, au)]), l("div", nu, [l("h6", lu, C(e.$t("messaging_template.filters.status")), 1), l("div", null, [a(d, {
                modelValue: s.isApproved,
                "onUpdate:modelValue": t[1] || (t[1] = D => s.isApproved = D),
                label: e.$t("messaging_template.status.approved.label"),
                class: "me-2 mb-3 d-flex align-items-center"
            }, null, 8, ["modelValue", "label"]), a(d, {
                modelValue: s.isPending,
                "onUpdate:modelValue": t[2] || (t[2] = D => s.isPending = D),
                label: e.$t("messaging_template.status.pending.label"),
                class: "me-2 mb-3 d-flex align-items-center"
            }, null, 8, ["modelValue", "label"]), a(d, {
                modelValue: s.isRejected,
                "onUpdate:modelValue": t[3] || (t[3] = D => s.isRejected = D),
                label: e.$t("messaging_template.status.rejected.label"),
                class: "me-2 mb-3 d-flex align-items-center"
            }, null, 8, ["modelValue", "label"])])]), (S = i.channelOptions) != null && S.length ? (o(),
            m("div", iu, [l("h6", ou, C(e.$t("messaging_template.filters.channels")), 1), l("div", null, [(o(!0),
            m(N, null, j(i.channelOptions, D => (o(),
            x(d, {
                key: D.value,
                modelValue: s.channelsFilter.find(I => I.value === D.value),
                "onUpdate:modelValue": I => i.selectChannelFilter(D.value, I),
                label: D.label,
                class: "me-2 mb-3 d-flex align-items-center"
            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]))), 128))])])) : b("", !0)]
        }
        ),
        _: 1
    }), a(g, {
        class: "border-top"
    }, {
        default: w( () => [a(p, {
            title: e.$t("messaging_template.filters.category"),
            icon: "stack-line",
            headerClass: "shadow-none",
            bodyClass: "pt-0",
            iconClass: "text-green-normal"
        }, {
            body: w( () => [a(h, {
                options: e.categories.map(S => ({
                    ...S,
                    label: S.name
                })),
                selectClass: "mt-3",
                modelValue: s.categoriesFilter,
                "onUpdate:modelValue": t[4] || (t[4] = S => s.categoriesFilter = S),
                multiple: ""
            }, null, 8, ["options", "modelValue"]), l("div", ru, [(o(!0),
            m(N, null, j(s.categoriesFilter, S => (o(),
            m("div", {
                key: S.id,
                onClick: D => i.removeSelectItem("categoriesFilter", S)
            }, [a(_, {
                text: S.label,
                borderColor: "green-light",
                rightIcon: "close-line",
                class: "cursor-pointer mb-2"
            }, null, 8, ["text"])], 8, cu))), 128))])]),
            _: 1
        }, 8, ["title"]), a(p, {
            title: e.$t("messaging_template.filters.groups"),
            icon: "group-line",
            headerClass: "shadow-none",
            bodyClass: "pt-0",
            iconClass: "text-green-normal",
            class: "rounded-0"
        }, {
            body: w( () => [a(h, {
                options: s.groups,
                selectClass: "mt-3",
                modelValue: s.groupsFilter,
                "onUpdate:modelValue": t[5] || (t[5] = S => s.groupsFilter = S),
                multiple: ""
            }, null, 8, ["options", "modelValue"]), l("div", du, [(o(!0),
            m(N, null, j(s.groupsFilter, S => (o(),
            m("div", {
                key: S.id,
                onClick: D => i.removeSelectItem("groupsFilter", S)
            }, [a(_, {
                text: S.label,
                borderColor: "green-light",
                rightIcon: "close-line",
                class: "cursor-pointer mb-2"
            }, null, 8, ["text"])], 8, mu))), 128))])]),
            _: 1
        }, 8, ["title"]), a(p, {
            title: e.$t("messaging_template.filters.segment"),
            icon: "barricade-line",
            headerClass: "shadow-none",
            bodyClass: "pt-0",
            iconClass: "text-green-normal",
            class: "rounded-0"
        }, {
            body: w( () => [a(h, {
                options: s.metaTypes,
                selectClass: "mt-3",
                modelValue: s.segmentFilter,
                "onUpdate:modelValue": t[6] || (t[6] = S => s.segmentFilter = S),
                multiple: ""
            }, null, 8, ["options", "modelValue"]), l("div", uu, [(o(!0),
            m(N, null, j(s.segmentFilter, S => (o(),
            m("div", {
                key: S.value,
                onClick: D => i.removeSelectItem("segmentFilter", S)
            }, [a(_, {
                text: S.label,
                borderColor: "green-light",
                rightIcon: "close-line",
                class: "cursor-pointer mb-2"
            }, null, 8, ["text"])], 8, pu))), 128))])]),
            _: 1
        }, 8, ["title"]), a(p, {
            title: e.$t("messaging_template.create.type"),
            icon: "tornado-line",
            headerClass: "shadow-none",
            bodyClass: "pt-0",
            iconClass: "text-green-normal",
            class: "rounded-0"
        }, {
            body: w( () => [a(h, {
                options: s.mediaTypes,
                selectClass: "mt-3",
                modelValue: s.typeFilter,
                "onUpdate:modelValue": t[7] || (t[7] = S => s.typeFilter = S),
                multiple: ""
            }, null, 8, ["options", "modelValue"]), l("div", gu, [(o(!0),
            m(N, null, j(s.typeFilter, S => (o(),
            m("div", {
                key: S.value,
                onClick: D => i.removeSelectItem("typeFilter", S)
            }, [a(_, {
                text: S.label,
                borderColor: "green-light",
                rightIcon: "close-line",
                class: "cursor-pointer mb-2"
            }, null, 8, ["text"])], 8, hu))), 128))])]),
            _: 1
        }, 8, ["title"])]),
        _: 1
    })])]), s.loading ? s.loading ? (o(),
    m("div", Tu, [a($, {
        icon: "loader-4-line",
        class: "fs-9 text-green-normal mb-4 ds-spinner"
    })])) : b("", !0) : (o(),
    m("div", _u, [l("h5", fu, C(e.$t("messaging_template.list.title")), 1), e.templateCounts ? (o(),
    m("div", bu, [l("ul", vu, [l("li", {
        class: Y(["nav-item me-4", {
            actived: s.filters.active === null
        }])
    }, [a(f, {
        label: `${e.$t("messaging_template.status.all")} (${e.templateCounts.all || 0})`,
        type: "tertiary",
        onClick: t[8] || (t[8] = S => i.handlerActive(null)),
        class: "px-0"
    }, null, 8, ["label"])], 2), l("li", {
        class: Y(["nav-item me-4", {
            actived: s.filters.active === 1
        }])
    }, [a(f, {
        label: `${e.$t("messaging_template.status.actived")}s (${e.templateCounts.active || 0})`,
        type: "tertiary",
        onClick: t[9] || (t[9] = S => i.handlerActive(1)),
        class: "px-0"
    }, null, 8, ["label"])], 2), l("li", {
        class: Y(["nav-item me-4", {
            actived: s.filters.active === 0
        }])
    }, [a(f, {
        label: `${e.$t("messaging_template.status.inactived")}s (${e.templateCounts.inactive || 0})`,
        type: "tertiary",
        onClick: t[10] || (t[10] = S => i.handlerActive(0)),
        class: "px-0"
    }, null, 8, ["label"])], 2)]), l("div", null, [e.canCreate ? (o(),
    x(v, {
        key: 0,
        class: "d-flex align-items-center btn btn-green-normal small fw-semibold mb-1",
        to: {
            name: "messaging_template.create"
        }
    }, {
        default: w( () => [a($, {
            icon: "add-line me-2"
        }), P(" " + C(e.$t("messaging_template.list.create_button")), 1)]),
        _: 1
    })) : b("", !0)])])) : b("", !0), l("div", yu, [(o(!0),
    m(N, null, j(e.templates, (S, D) => (o(),
    m("div", {
        key: D,
        class: "col-lg-4 mt-4"
    }, [a(y, {
        template: S,
        onActiveTemplate: i.handlerActiveTemplate,
        onOpenModal: I => s.templateInView = I
    }, null, 8, ["template", "onActiveTemplate", "onOpenModal"])]))), 128))]), !s.loading && e.templates && !e.templates.length ? (o(),
    m("div", wu, [l("div", Cu, [l("h3", xu, C(e.$t("messaging_template.list.empty")), 1), l("p", ku, C(e.$t("messaging_template.list.create_button")), 1)])])) : b("", !0), l("div", $u, [l("div", null, [a(M, {
        limit: s.pagination.limit,
        offset: s.pagination.offset,
        length: i.getPagesLength,
        onSetOffset: t[11] || (t[11] = S => {
            s.pagination.offset = S
        }
        ),
        onSetLimit: t[12] || (t[12] = S => {
            s.pagination.limit = S,
            s.pagination.offset = 0
        }
        )
    }, null, 8, ["limit", "offset", "length"])])])])), s.templateInView ? (o(),
    x(V, {
        key: 2,
        class: "modal-new-template",
        size: "small",
        overflow: "auto",
        visible: !0,
        onClose: t[15] || (t[15] = S => s.templateInView = null)
    }, {
        "modal-header": w( () => [a(F, {
            class: "fw-bold mb-0 mt-1",
            text: s.templateInView.vertical,
            size: "md"
        }, null, 8, ["text"]), a(O, {
            class: "template-card__category fw-semibold mt-3",
            text: e.$t(`messaging_template.types.${s.templateInView.category}`)
        }, null, 8, ["text"]), l("div", Du, [a(_, {
            class: Y(["badge", `badge__${s.templateInView.status.toLowerCase()}`]),
            bgColor: s.templateInView.status === "approved" ? "green-light" : "red-light",
            textColor: s.templateInView.status === "approved" ? "green-normal" : "red-normal",
            borderColor: s.templateInView.status === "approved" ? "green-normal" : "red-normal"
        }, {
            default: w( () => [P(C(e.$t(`messaging_template.status.${s.templateInView.status.toLowerCase()}.label`)), 1)]),
            _: 1
        }, 8, ["class", "bgColor", "textColor", "borderColor"]), a(O, {
            class: "small fw-normal badge-info ps-3",
            text: e.$t(`messaging_template.status.${s.templateInView.status.toLowerCase()}.info`),
            color: "gray"
        }, null, 8, ["text"])])]),
        "modal-content": w( () => [l("div", Su, [a(O, {
            tag: "div",
            class: "message-preview__header p-3 text-white d-flex align-items-center fw-bold",
            color: "white"
        }, {
            default: w( () => [t[22] || (t[22] = l("div", {
                tag: "span",
                class: "p-3 bg-gray-300 me-2 rounded-3"
            }, null, -1)), P(" " + C(e.$t("messaging_template.create.preview.company")), 1)]),
            _: 1,
            __: [22]
        }), l("div", Mu, [l("div", Iu, [a(O, {
            tag: "span",
            innerHTML: i.msgHtml
        }, null, 8, ["innerHTML"]), a(F, {
            color: "gray-600",
            size: "sm",
            class: "mb-0 mt-2 text-end",
            text: e.$t("messaging_template.create.preview.now")
        }, null, 8, ["text"])]), i.mediaHtml ? (o(),
        m("div", Vu, [a(O, {
            tag: "span",
            innerHTML: i.mediaHtml
        }, null, 8, ["innerHTML"]), a(F, {
            color: "gray-600",
            size: "sm",
            class: "mb-0 mt-2 text-end",
            text: e.$t("messaging_template.create.preview.now")
        }, null, 8, ["text"])])) : b("", !0), (o(!0),
        m(N, null, j(s.templateInView.buttons, S => (o(),
        m("div", {
            key: S.text,
            class: "bg-gray-100 p-3 text-gray-800 shadow-sm text-center fw-bold rounded cursor-pointer mb-3"
        }, [S.url ? (o(),
        x($, {
            key: 0,
            icon: "external-link-line",
            class: "me-2"
        })) : b("", !0), S.phone_number ? (o(),
        x($, {
            key: 1,
            icon: "phone-line",
            class: "me-2"
        })) : b("", !0), P(" " + C(S.text), 1)]))), 128))])])]),
        "modal-footer": w( () => [l("div", Au, [e.canUpdate ? (o(),
        m("div", Fu, [a(d, {
            isSwitch: "",
            modelValue: s.templateInView.active,
            "onUpdate:modelValue": t[13] || (t[13] = S => i.handlerActiveTemplate(s.templateInView))
        }, null, 8, ["modelValue"]), l("span", Eu, C(e.$t(`messaging_template.status.${s.templateInView.active ? "actived" : "disabled"}`)), 1)])) : b("", !0), e.canDelete ? (o(),
        x(f, {
            key: 1,
            label: e.$t("messaging_template.list.delete"),
            type: "tertiary",
            class: "btn-small red",
            onClick: t[14] || (t[14] = S => (s.templateDelete = s.templateInView,
            s.templateInView = null))
        }, null, 8, ["label"])) : b("", !0)])]),
        _: 1
    })) : b("", !0), s.templateDelete ? (o(),
    x(V, {
        key: 3,
        class: "design-system modal-new-template",
        size: "xsmall",
        overflow: "auto",
        alertType: "danger",
        visible: !0,
        onClose: t[18] || (t[18] = S => s.templateDelete = null)
    }, {
        "modal-header": w( () => [l("div", Bu, [l("h5", zu, C(e.$t("messaging_template.list.delete_modal.title")), 1)])]),
        "modal-content": w( () => [l("p", Uu, C(e.$t("messaging_template.list.delete_modal.info")), 1)]),
        "modal-footer": w( () => [l("div", Ou, [e.canDelete ? (o(),
        x(f, {
            key: 0,
            label: e.$t("messaging_template.list.delete"),
            type: "error-primary",
            class: "btn-small rounded px-5",
            disabled: s.loadingDelete,
            onClick: t[16] || (t[16] = S => i.handlerDeleteTemplate(s.templateDelete))
        }, null, 8, ["label", "disabled"])) : b("", !0), a(f, {
            label: e.$t("messaging_template.list.cancel"),
            type: "error-secondary",
            class: "btn-small rounded mt-0 px-5",
            disabled: s.loadingDelete,
            onClick: t[17] || (t[17] = S => s.templateDelete = null)
        }, null, 8, ["label", "disabled"])])]),
        _: 1
    })) : b("", !0), s.cantDeleteTemplate ? (o(),
    x(V, {
        key: 4,
        class: "design-system modal-new-template",
        size: "xsmall",
        overflow: "auto",
        alertType: "danger",
        visible: !0,
        onClose: t[20] || (t[20] = S => s.cantDeleteTemplate = !1)
    }, {
        "modal-header": w( () => [l("div", Lu, [l("h5", Pu, C(e.$t("messaging_template.list.cant_delete_modal.title")), 1)])]),
        "modal-content": w( () => [l("p", Nu, C(e.$t("messaging_template.list.cant_delete_modal.info")), 1), s.workflowsUsingTemplate.length ? (o(),
        m("div", ju, [(o(!0),
        m(N, null, j(s.workflowsUsingTemplate, S => (o(),
        m("p", {
            key: S,
            class: "text-black m-1"
        }, " #" + C(S.id) + " - " + C(S.name), 1))), 128))])) : b("", !0)]),
        "modal-footer": w( () => [l("div", Wu, [a(f, {
            label: e.$t("messaging_template.list.cancel"),
            type: "error-secondary",
            class: "btn-small rounded mt-0 px-5",
            disabled: s.loadingDelete,
            onClick: t[19] || (t[19] = S => s.cantDeleteTemplate = !1)
        }, null, 8, ["label", "disabled"])])]),
        _: 1
    })) : b("", !0), a(B, {
        show: e.channels.length < 1 && !s.loading
    }, null, 8, ["show"])])
}
const Ru = W(Zm, [["render", Hu]])
  , eh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ru
}, Symbol.toStringTag, {
    value: "Module"
}))
  , qu = {
    emits: ["delete", "sameValue", "editedCategory"],
    name: "edit-category",
    props: ["category"],
    data() {
        return {
            isEditing: !1
        }
    },
    methods: {
        editedCategory(e, t) {
            t.label === e || e === "" ? this.$emit("sameValue", t.value) : this.$emit("editedCategory", {
                id: t.value,
                name: e.trim()
            })
        }
    }
}
  , Gu = {
    class: "d-flex align-items-center my-2 py-2"
}
  , Ku = {
    key: 1,
    class: "text-truncate fs-2"
}
  , Yu = {
    class: "ms-auto ps-3"
};
function Qu(e, t, n, c, s, i) {
    const d = r("DsInput")
      , u = r("DsButton")
      , h = Ie("tooltip");
    return o(),
    m("div", Gu, [s.isEditing ? (o(),
    x(d, {
        key: 0,
        modelValue: n.category.label,
        id: String(n.category.id),
        "onUpdate:modelValue": t[0] || (t[0] = _ => i.editedCategory(_, n.category))
    }, null, 8, ["modelValue", "id"])) : Z((o(),
    m("span", Ku, [P(C(n.category.label), 1)])), [[h, n.category.label]]), l("div", Yu, [s.isEditing ? (o(),
    x(u, {
        key: 1,
        variant: "transparent",
        size: "sm",
        icon: "close-line",
        class: "text-red-normal",
        onClick: t[2] || (t[2] = _ => s.isEditing = !1)
    })) : (o(),
    x(u, {
        key: 0,
        variant: "transparent",
        size: "sm",
        icon: "edit-line",
        class: "text-green-normal",
        onClick: t[1] || (t[1] = _ => s.isEditing = !0)
    }))]), s.isEditing ? b("", !0) : (o(),
    x(u, {
        key: 2,
        variant: "transparent",
        size: "sm",
        icon: "delete-bin-7-line",
        class: "text-red-normal",
        onClick: t[3] || (t[3] = _ => e.$emit("delete", n.category))
    }))])
}
const Zu = W(qu, [["render", Qu]])
  , Ju = {
    emits: ["close", "customer", "reloadCategories"],
    name: "category-form-modal",
    components: {
        EditCategory: Zu
    },
    props: {
        show: {
            type: Boolean,
            default: !1
        },
        categoriesList: {
            type: Array
        },
        creationMode: {
            type: Boolean,
            default: !1
        }
    },
    data() {
        return {
            loading: !1,
            saving: !1,
            categoryName: null,
            editedCategories: []
        }
    },
    computed: {
        textButton() {
            return this.saving ? this.$t("saving") : this.$t("save")
        },
        isDisabled() {
            return this.saving || !this.categoryName && !this.editedCategories.length
        },
        headerTitle() {
            return this.creationMode ? this.$t("messaging_template.create.newCategory.title_create") : this.$t("messaging_template.create.newCategory.title_edit")
        }
    },
    methods: {
        ...se({
            createCategory: "messaging/template/createCategory",
            editCategory: "messaging/template/editCategory",
            deleteCategory: "messaging/template/deleteCategory"
        }),
        updateEditedCategories(e) {
            this.filterEditedCategoriesById(e.id),
            this.editedCategories.push(e)
        },
        filterEditedCategoriesById(e) {
            this.editedCategories = this.editedCategories.filter(t => t.id !== e)
        },
        async saveCategory() {
            const e = this.categoryName;
            this.loading = !0,
            this.saving = !0;
            try {
                this.creationMode && e && e !== "" && await this.createCategory(e),
                this.editedCategories.length && await Promise.all(this.editedCategories.map(t => this.editCategory(t))),
                this.$notification.notifySuccess("messaging_template.create.newCategory.save_success"),
                this.$emit("close")
            } catch {
                this.$notification.notifyError("messaging_template.create.save_error")
            } finally {
                this.loading = !1,
                this.saving = !1,
                this.categoryName = null,
                this.editedCategories = [],
                this.$emit("customer")
            }
        },
        async handlerDeleteCategory(e) {
            const {isConfirmed: t} = await Re.deleteConfirm(this.$t("messaging_template.create.newCategory.delete_confirm.title"), this.$t("messaging_template.create.newCategory.delete_confirm.text"));
            if (t)
                try {
                    await this.deleteCategory({
                        id: e.value
                    }),
                    this.$notification.notifySuccess("messaging_template.create.newCategory.delete_success"),
                    this.$emit("reloadCategories")
                } catch {
                    this.$notification.notifyError("messaging_template.create.newCategory.delete_error")
                }
        },
        cancel() {
            this.$emit("close"),
            this.editedCategories = [],
            this.categoryName = null
        }
    }
}
  , Xu = {
    key: 0
}
  , ep = {
    class: "fw-bold text-black my-1"
};
function tp(e, t, n, c, s, i) {
    const d = r("DsInput")
      , u = r("edit-category")
      , h = r("DsButton")
      , _ = r("DsModal");
    return o(),
    m("div", null, [a(_, {
        show: n.show,
        title: i.headerTitle,
        scrollable: !0,
        onHide: i.cancel,
        bodyClass: "max-vh-40 py-0",
        footerClass: "d-flex justify-content-between",
        size: "sm"
    }, {
        body: w( () => [n.creationMode ? (o(),
        m("div", Xu, [l("p", ep, C(e.$t("messaging_template.create.newCategory.title_input")), 1), a(d, {
            modelValue: s.categoryName,
            "onUpdate:modelValue": t[0] || (t[0] = p => s.categoryName = p),
            placeholder: e.$t("messaging_template.create.newCategory.placeholder")
        }, null, 8, ["modelValue", "placeholder"])])) : b("", !0), (o(!0),
        m(N, null, j(n.categoriesList, (p, g) => (o(),
        m("div", {
            key: g
        }, [a(u, {
            category: p,
            onEditedCategory: i.updateEditedCategories,
            onSameValue: i.filterEditedCategoriesById,
            onDelete: i.handlerDeleteCategory
        }, null, 8, ["category", "onEditedCategory", "onSameValue", "onDelete"])]))), 128))]),
        footer: w( () => [a(h, {
            text: i.textButton,
            disabled: i.isDisabled,
            onClick: t[1] || (t[1] = p => i.saveCategory())
        }, null, 8, ["text", "disabled"]), a(h, {
            text: e.$t("cancel"),
            "data-dismiss": "modal",
            "aria-hidden": "true",
            onClick: i.cancel,
            class: "bg-white text-gray-700 border-0"
        }, null, 8, ["text", "onClick"])]),
        _: 1
    }, 8, ["show", "title", "onHide"])])
}
const sp = W(Ju, [["render", tp]])
  , ap = {
    name: "messaging-template-create",
    emits: ["save", "cancel"],
    components: {
        Multiselect: ra,
        CategoryFormModal: sp,
        MInputCellphone: ca
    },
    data() {
        const e = [{
            value: "action",
            label: this.$t("messaging_template.create.button_types.action")
        }, {
            value: "reply",
            label: this.$t("messaging_template.create.button_types.reply")
        }]
          , t = [{
            value: "customer_name",
            label: this.$t("messaging_template.variables.customer_name"),
            example: "George Smith"
        }, {
            value: "customer_first_name",
            label: this.$t("messaging_template.variables.customer_first_name"),
            example: "George"
        }, {
            value: "customer_phone_number",
            label: this.$t("messaging_template.variables.customer_phone_number"),
            example: "+5511999999999"
        }, {
            value: "user_name",
            label: this.$t("messaging_template.variables.user_name"),
            example: "Mary Jane"
        }, {
            value: "user_first_name",
            label: this.$t("messaging_template.variables.user_first_name"),
            example: "Mary"
        }, {
            value: "user_calendar_url",
            label: this.$t("messaging_template.variables.user_calendar_url"),
            example: "https://calendar.example/example"
        }, {
            value: "copany_name",
            label: this.$t("messaging_template.variables.copany_name"),
            example: "Katasol"
        }, {
            value: "product_name",
            label: this.$t("messaging_template.variables.product_name"),
            example: "Placa solar"
        }]
          , n = this.$t("messaging_template.create.default_message", {
            ...t.reduce( (c, s) => ({
                ...c,
                [s.value]: `{${s.label}}`
            }), {})
        });
        return {
            name: null,
            categories: [],
            category: null,
            nameError: !1,
            categoryError: !1,
            groups: [],
            group: null,
            message: n,
            showNewCategory: !1,
            showContentTemplate: !1,
            buttonTypeOptions: e,
            variables: t,
            buttonType: null,
            inputValue: this.modelValue,
            showEditReplyButtonModal: !1,
            currentlyEditingButtonType: null,
            editingReplyText: "",
            actionButtons: {
                type: "URL",
                website: {},
                phone: {}
            },
            replyButtons: {
                callMe: !1,
                whatsapp: !1,
                email: !1
            },
            loading: !1,
            file: null,
            mediaFile: null,
            customFile: null,
            mediaTypes: [{
                label: this.$t("textLastMessagesFile.template.document"),
                value: "DOCUMENT"
            }, {
                label: this.$t("textLastMessagesFile.template.image"),
                value: "IMAGE"
            }, {
                label: this.$t("textLastMessagesFile.template.video"),
                value: "VIDEO"
            }],
            mediaType: null,
            metaTypes: [{
                label: this.$t("messaging_template.create.meta_type.marketing"),
                value: "MARKETING"
            }, {
                label: this.$t("messaging_template.create.meta_type.utility"),
                value: "UTILITY"
            }],
            entities: [{
                label: this.$t("pipelineEntities.LEAD"),
                value: "CONTACT"
            }, {
                label: this.$t("pipelineEntities.OPPORTUNITY"),
                value: "OPPORTUNITY"
            }, {
                label: this.$t("pipelineEntities.AFTER_SALE"),
                value: "AFTER_SALE"
            }, {
                label: this.$t("pipelineEntities.CHAT"),
                value: "CHAT"
            }],
            metaType: null,
            toggledType: "text",
            useCustomFields: !1,
            customFields: [],
            filteredCustomFields: [],
            selectedEntity: null,
            editorContents: [],
            customVariablesInEditor: [],
            id_channel: "",
            channelOptions: [],
            replyButtonList: [{
                type: "callMe",
                default: this.$t("messaging_template.create.reply_button.callMe")
            }, {
                type: "whatsapp",
                default: this.$t("messaging_template.create.reply_button.whatsapp")
            }, {
                type: "email",
                default: this.$t("messaging_template.create.reply_button.email")
            }],
            replyButtonTexts: {
                callMe: this.$t("messaging_template.create.reply_button.callMe"),
                whatsapp: this.$t("messaging_template.create.reply_button.whatsapp"),
                email: this.$t("messaging_template.create.reply_button.email")
            },
            enableOptout: !1
        }
    },
    async created() {
        await this.loadChannels(),
        this.channels.length === 1 && (this.id_channel = this.channels[0].id),
        this.channels.forEach(e => {
            this.channelOptions.push({
                value: e.id,
                label: e.description
            })
        }
        )
    },
    mounted() {
        this.metaType = this.metaTypes[0],
        this.loadData()
    },
    watch: {
        mediaType() {
            this.file && this.clearFile()
        },
        message() {
            this.editorContents = this.$refs.qEditor.getContents().ops,
            this.editorContents && (this.customVariablesInEditor = this.customVariablesInEditor.filter(e => this.editorContents.some(t => t.insert && t.insert.mention && t.insert.mention.value === (e.editorLabel ? e.editorLabel : e.label))))
        }
    },
    computed: {
        ...ee({
            channels: "messaging/channel/channels",
            getHtmlMessage: "messaging/messages/getHtmlMessage"
        }),
        disableAudioRecorder() {
            return this.mediaType.value === "AUDIO" && this.file
        },
        messageHtml() {
            let e = "";
            this.toggledType === "media" && this.mediaType && (this.mediaType.value === "IMAGE" && this.mediaFile ? e = `<div class="image-box mb-4"><img src="${this.mediaFile}"/></div>` : this.mediaType.value === "VIDEO" && this.mediaFile && (e = `<div class="image-box mb-4"><video controls src="${this.mediaFile}"</video></div>`));
            const t = this.getHtmlMessage({
                message: this.message
            });
            return e + t
        },
        mediaHtml() {
            let e = "";
            return this.toggledType === "media" && this.mediaType && this.mediaType.value === "DOCUMENT" && this.mediaFile && (e = `
            <div class="doc-box mt-4">
              <a class="doc-badge d-flex " href="${this.mediaFile}" download>
                <i class="ds-icon icon-file-pdf-line m-1 text-red-normal"></i> ${this.fileName}
              </a>
            </div>
          `),
            e
        },
        variablesWarning() {
            const e = []
              , t = this.variables.find(s => s.value === "customer_name" && this.message.includes(this.$t("messaging_template.create.tags_warning.customer_name")))
              , n = this.variables.find(s => s.value === "customer_first_name" && this.message.includes(this.$t("messaging_template.create.tags_warning.customer_first_name")))
              , c = this.variables.find(s => s.value === "product_name" && this.message.includes(this.$t("messaging_template.create.tags_warning.product_name")));
            return t && n ? e.push({
                variable: `{{${t.label}}}`,
                value: "customer"
            }) : (t && e.push({
                variable: `{{${t.label}}}`,
                value: "customer_name"
            }),
            n && e.push({
                variable: `{{${n.label}}}`,
                value: "customer_first_name"
            })),
            c && e.push({
                variable: `{{${c.label}}}`,
                value: "product_name"
            }),
            e
        },
        templateButtons() {
            var s, i;
            const e = []
              , {actionButtons: t} = this
              , {phone: n, website: c} = t;
            return ((s = this.buttonType) == null ? void 0 : s.value) === "reply" && this.replyButtonList.forEach(d => {
                this.replyButtons[d.type] && e.push({
                    type: "QUICK_REPLY",
                    text: this.replyButtonTexts[d.type]
                })
            }
            ),
            ((i = this.buttonType) == null ? void 0 : i.value) === "action" && (n && n.phone_number && n.text && e.push({
                type: "PHONE_NUMBER",
                phone_number: n.phone_number,
                text: n.text
            }),
            c && c.url && c.text && e.push({
                type: "URL",
                url: c.url,
                text: c.text
            })),
            e.length >= 3 && this.enableOptout ? this.enableOptout = !1 : this.enableOptout && e.length < 3 && e.push({
                type: "QUICK_REPLY",
                text: "Suspender comunicações"
            }),
            e
        },
        editorConfig() {
            return {
                placeholder: this.$t("messaging.chat.chat_editor.write_message"),
                modules: {
                    toolbar: !1,
                    imageDropAndPaste: {
                        handler: this.imageHandler
                    },
                    mention: {
                        allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                        mentionDenotationChars: ["@"],
                        source: (t, n) => {
                            const c = this.variables.filter(s => s.label.toLowerCase().includes(t.toLowerCase())).map(s => ({
                                value: s.value,
                                label: s.label,
                                example: s.example,
                                tag: `<span class="mention" data-denotation-char="" data-value="${s.label}">${s.label}</span>`
                            }));
                            n(c, t)
                        }
                    }
                }
            }
        },
        editorModules() {
            return [{
                name: "imageDropAndPaste",
                module: vt,
                options: {
                    handler: this.imageHandler
                }
            }, {
                name: "mention",
                module: ga
            }]
        },
        imageHandler(e, t) {
            return e === "text/plain" ? this.quill.clipboard.dangerouslyPasteHTML(t) : !1
        },
        typeText() {
            return this.toggledType === "text" ? this.$t("messaging_template.create.model_type.txt_description") : this.$t("messaging_template.create.model_type.media_description")
        },
        templateType() {
            return this.toggledType === "text" ? "TEXT" : this.mediaType.value
        },
        uploadButtonProperties() {
            return this.file ? {
                text: this.$t("new_websites.form_actions.download.delete"),
                icon: "delete-bin-2-line",
                variant: "outline-red-normal",
                clickHandler: this.clearFile
            } : {
                text: this.$t("new_websites.form_actions.download.send"),
                icon: "upload-2-line",
                variant: "outline-green-normal",
                clickHandler: () => {
                    this.$refs.file.click()
                }
            }
        },
        fileName() {
            var e, t, n, c, s, i;
            return (e = this.file) != null && e.name || (t = this.customFile) != null && t.name ? ((n = this.file) == null ? void 0 : n.name) || ((c = this.customFile) == null ? void 0 : c.name) : ((s = this.mediaType) == null ? void 0 : s.value) === "IMAGE" ? this.$t("new_websites.form_actions.download.placeholder_image") : ((i = this.mediaType) == null ? void 0 : i.value) === "DOCUMENT" ? this.$t("new_websites.form_actions.download.placeholder_document") : this.$t("new_websites.form_actions.download.placeholder")
        },
        fileAccept() {
            return this.mediaType && this.mediaType.value === "IMAGE" ? ".png, .jpeg" : this.mediaType && this.mediaType.value === "VIDEO" ? ".mp4, .3gp, .mpeg" : this.mediaType && this.mediaType.value === "DOCUMENT" ? ".pdf" : ""
        },
        uploadMedia() {
            return this.file || this.customFile
        },
        thumbnailIcon() {
            return this.mediaType.value === "IMAGE" ? "image-line" : "video-line"
        },
        enableExtraMsgPreview() {
            var e;
            return ((e = this.mediaType) == null ? void 0 : e.value) === "DOCUMENT"
        },
        containsCustomVariable() {
            return this.customVariablesInEditor.length > 0
        }
    },
    methods: {
        ...se({
            loadChannels: "messaging/channel/loadChannels",
            loadCategory: "messaging/template/loadCategory",
            loadCustomFields: "messaging/template/loadCustomFields",
            createTemplate: "messaging/template/createTemplate",
            uploadFileMessage: "messaging/messages/uploadFileMessage"
        }),
        startQuill(e) {
            var c;
            this.quill = e,
            (c = this.quill.getModule("toolbar")) == null || c.container.remove();
            const t = 1024;
            let n = null;
            this.quill.on("text-change", (s, i, d) => {
                if (d !== "user")
                    return;
                const u = this.quill.getLength();
                if (u > t + 1) {
                    const h = u - (t + 1);
                    this.quill.deleteText(t, h),
                    n && clearTimeout(n),
                    n = setTimeout( () => {
                        this.$notification.notifyAlert(this.$t("messaging_template.create.max_characters", {
                            count: t
                        }))
                    }
                    )
                }
            }
            ),
            this.quill.clipboard.addMatcher(Node.TEXT_NODE, (s, i) => {
                const d = this.quill.getLength() - 1
                  , u = t - d;
                if (u <= 0)
                    return {
                        ops: []
                    };
                const h = i.ops.map(_ => typeof _.insert == "string" ? _.insert : "").join("");
                return h.length <= u ? i : (this.$notification.notifyAlert(this.$t("messaging_template.create.max_characters", {
                    count: t
                })),
                {
                    ops: [{
                        insert: h.substring(0, u)
                    }]
                })
            }
            ),
            this.variablesReplace()
        },
        async loadData() {
            try {
                const e = await Vt();
                await this.loadAndHandleCustomFields(),
                this.groups = e.data.groups.map( (n, c) => ({
                    id: c,
                    value: n.id,
                    label: n.name
                }));
                const t = await this.loadCategory();
                this.categories = t.data.data.map( (n, c) => ({
                    id: c,
                    value: n.id,
                    label: n.name
                }))
            } catch {
                this.$notification.notifyError("filters_loading_error")
            }
        },
        selectAction(e) {
            this.replyButtons = {
                ...this.replyButtons,
                [e]: !this.replyButtons[e]
            }
        },
        async reloadSelectCategory() {
            try {
                const e = await this.loadCategory();
                this.categories = e.data.data.map( (t, n) => ({
                    id: n,
                    value: t.id,
                    label: t.name
                }))
            } catch {
                this.$notification.notifyError("filters_loading_error")
            }
        },
        async customerSaved() {
            this.category = null,
            await this.loadData()
        },
        nextStep() {
            if (this.nameError = !1,
            this.categoryError = !1,
            !this.name || !this.category) {
                this.name || (this.nameError = !0),
                this.category || (this.categoryError = !0),
                this.$notification.notifyError("messaging_template.create.empty_fields");
                return
            }
            this.showContentTemplate = !0
        },
        backStep() {
            this.$router.back()
        },
        prevStep() {
            this.showContentTemplate = !1
        },
        onVariableSelect(e) {
            const {quill: t} = this
              , {ops: n} = t.getContents();
            t.setContents([...n, {
                insert: {
                    mention: {
                        denotationChar: "",
                        value: e.editorLabel ? e.editorLabel : e.label
                    }
                }
            }, {
                insert: " "
            }]),
            t.setSelection(t.getLength(), 1),
            this.editorContents = t.getContents().ops,
            e.custom && this.customVariablesInEditor.push(e)
        },
        formIsValid() {
            const {name: e, message: t} = this;
            return !e || !t ? (this.$notification.notify({
                type: "error",
                title: "Ops",
                text: this.$t("messaging_template.create.field_validation")
            }),
            !1) : !0
        },
        getEditorHtmlElement() {
            const e = document.createElement("div");
            return e.innerHTML = this.message,
            e
        },
        buildTemplateData() {
            const {ops: e} = this.quill.getContents()
              , t = {
                items: []
            };
            let n = ""
              , c = ""
              , s = 1;
            return e.forEach(i => {
                var u;
                const d = (u = i == null ? void 0 : i.insert) == null ? void 0 : u.mention;
                if (d) {
                    const h = this.variables.find(_ => _.label === d.value || _.editorLabel === d.value);
                    if (h)
                        c = `${c.trim()} {{${s}}}`,
                        n = `${n.trim()} [${h.example}]`,
                        t.items.push({
                            number: s,
                            value: h.value,
                            custom: h.custom
                        }),
                        s += 1;
                    else {
                        const _ = this.customFields.find(p => p.editorLabel === d.value && p.entity === this.selectedEntity.value);
                        _ && (c = `${c.trim()} {{${s}}}`,
                        n = `${n.trim()} [${_.example}]`,
                        t.items.push({
                            number: s,
                            value: _.value,
                            custom: !0
                        }),
                        s += 1)
                    }
                } else
                    c += i.insert,
                    n += i.insert
            }
            ),
            {
                templateMessage: c,
                templateParams: t,
                templateExample: n
            }
        },
        buildTemplateName(e="") {
            return e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(t => t.toLowerCase()).join("_")
        },
        variablesReplace() {
            let e = this.message;
            this.variables.forEach(t => {
                e = e.replace(`{${t.label}}`, `<span class="mention" data-denotation-char="" data-value="${t.label}">${t.label}</span>`)
            }
            ),
            this.$nextTick( () => {
                this.$refs.qEditor.pasteHTML(e, "silent")
            }
            )
        },
        async saveTemplate() {
            var g, f, $, v, y, M, F, O;
            const {name: e, templateButtons: t, category: n, group: c} = this;
            if (this.metaType.value === "UTILITY") {
                const {isConfirmed: V} = await Re.deleteConfirm("Alerta!", this.$t("messaging_template.create.meta_type.warning"), {
                    confirmButtonText: "Continuar"
                });
                if (!V)
                    return
            }
            if (!this.formIsValid() || this.loading)
                return;
            if (this.uploadMedia && !this.isValidFileSize(this.uploadMedia)) {
                let V = "new_websites.form_actions.download.size_error";
                ((g = this.mediaType) == null ? void 0 : g.value) === "IMAGE" ? V = "new_websites.form_actions.download.size_error_image" : ((f = this.mediaType) == null ? void 0 : f.value) === "DOCUMENT" ? V = "new_websites.form_actions.download.size_error_document" : (($ = this.mediaType) == null ? void 0 : $.value) === "VIDEO" && (V = "new_websites.form_actions.download.size_error_video"),
                this.$notification.notify({
                    title: this.$t("error"),
                    type: "error",
                    text: this.$t(V)
                });
                return
            }
            const s = this.message.includes('<span class="mention" data-denotation-char="" data-value="Nome do produto">')
              , {templateMessage: i, templateParams: d, templateExample: u} = this.buildTemplateData()
              , h = this.buildTemplateName(e);
            let _ = null;
            if (this.uploadMedia) {
                const V = new FormData;
                V.append("type", this.uploadMedia.type),
                V.append("file", this.uploadMedia);
                const {data: B} = await this.uploadFileMessage({
                    formData: V
                });
                _ = {
                    name: this.fileName,
                    key: B.data.key,
                    type: this.uploadMedia.type,
                    file: this.uploadMedia
                }
            }
            const p = {
                id_channel: (v = this.id_channel) != null && v.value ? this.id_channel.value : this.id_channel,
                language: "pt_BR",
                template_type: this.templateType,
                vertical: e,
                name: h,
                category: this.metaType.value,
                mediaContent: _,
                content: i,
                example: u,
                template_params: d,
                id_category: n.value,
                id_group: c == null ? void 0 : c.value,
                productVariable: s
            };
            t && (p.buttons = t),
            this.loading = !0;
            try {
                await this.createTemplate(p),
                this.$notification.notifySuccess("messaging_template.create.save_success"),
                X.track("message_template_created", {
                    media: this.toggledType === "media",
                    category: this.metaType.value
                }),
                this.$router.push({
                    name: "messaging_template.list"
                })
            } catch (V) {
                let B = this.$t("messaging_template.create.save_error");
                V.response && ((y = V.response.data) == null ? void 0 : y.message) === "template already exists" ? B = this.$t("messaging_template.create.already_exists") : V.response && ((M = V.response.data) == null ? void 0 : M.message) === "There is no registered product" ? B = this.$t("messaging_template.create.product_not_exists") : V.response && ((F = V.response.data) == null ? void 0 : F.message) === "media not found" ? B = this.$t("messaging_template.create.empty_media") : V.response && ((O = V.response.data) == null ? void 0 : O.message) === "Invalid media" && (B = this.$t("messaging_template.create.invalid_media")),
                this.$notification.notifyError(B)
            } finally {
                this.loading = !1
            }
        },
        handleFileChange(e) {
            var s, i, d;
            const t = this;
            if (!e.target.files.length)
                return;
            const n = e.target.files[0];
            if (!t.isValidFileType(n)) {
                t.$notification.notify({
                    title: t.$t("error"),
                    type: "error",
                    text: t.$t("new_websites.form_actions.download.type_error")
                });
                return
            }
            if (!t.isValidFileSize(n)) {
                let u = "new_websites.form_actions.download.size_error";
                ((s = t.mediaType) == null ? void 0 : s.value) === "IMAGE" ? u = "new_websites.form_actions.download.size_error_image" : ((i = t.mediaType) == null ? void 0 : i.value) === "DOCUMENT" ? u = "new_websites.form_actions.download.size_error_document" : ((d = t.mediaType) == null ? void 0 : d.value) === "VIDEO" && (u = "new_websites.form_actions.download.size_error_video"),
                t.$notification.notify({
                    title: t.$t("error"),
                    type: "error",
                    text: t.$t(u)
                });
                return
            }
            t.file = n;
            const c = new FileReader;
            c.onload = async u => {
                const h = u.target.result;
                t.mediaFile = h
            }
            ,
            c.readAsDataURL(n)
        },
        isValidFileType(e) {
            return ["image/jpeg", "image/png", "application/pdf", "application/zip", "application/xml", "application/vnd.ms-excel", "application/vnd.ms-powerpoint", "application/x-rar-compressed", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/msword", "video/3gpp", "video/mp4", "audio/aac", "audio/mp4", "audio/amr", "audio/mpeg"].includes(e.type)
        },
        isValidFileSize(e) {
            var n, c, s;
            let t;
            return ((n = this.mediaType) == null ? void 0 : n.value) === "IMAGE" ? t = 5 * 1024 * 1024 : ((c = this.mediaType) == null ? void 0 : c.value) === "DOCUMENT" ? t = 100 * 1024 * 1024 : ((s = this.mediaType) == null || s.value,
            t = 16 * 1024 * 1024),
            e.size <= t
        },
        clearFile() {
            this.file = null,
            this.mediaFile = null,
            this.$refs.file.value = ""
        },
        handleAudioRecorded(e) {
            if (e) {
                this.customFile = e;
                const t = new FileReader;
                t.onload = async n => {
                    const c = n.target.result;
                    this.mediaFile = c
                }
                ,
                t.readAsDataURL(e)
            } else
                this.mediaFile = null,
                this.customFile = null
        },
        async loadAndHandleCustomFields() {
            const n = (await this.loadCustomFields()).filter(c => ["AFTER_SALE", "OPPORTUNITY", "CONTACT", "CHAT"].includes(c.regular_table_name)).map(c => ({
                value: c.id,
                label: `${c.label} - ${this.$t(`messaging_template.variables.custom_fields.${c.regular_table_name.toLowerCase()}`)}`,
                editorLabel: c.label,
                example: c.label,
                tag: `<span class="mention" data-denotation-char="" data-value="${c.label}">${c.label}</span>`,
                entity: c.regular_table_name,
                custom: !0
            }));
            this.customFields = n
        },
        onEntitySelect(e) {
            this.filteredCustomFields = this.customFields.filter(t => t.entity === e.value)
        },
        openReplyButtonEditor(e) {
            this.editingReplyText = this.replyButtonTexts[e],
            this.currentlyEditingButtonType = e,
            this.showEditReplyButtonModal = !0
        },
        saveEditedReplyButton() {
            if (this.nameError = !1,
            !this.editingReplyText || this.editingReplyText.trim() === "") {
                this.nameError = !0,
                this.$notification.notifyError("messaging_template.create.error_text_button");
                return
            }
            this.replyButtonTexts[this.currentlyEditingButtonType] = this.editingReplyText,
            this.showEditReplyButtonModal = !1,
            this.currentlyEditingButtonType = null
        },
        cancelReplyButtonEdit() {
            this.showEditReplyButtonModal = !1,
            this.currentlyEditingButtonType = null
        }
    }
}
  , np = {
    class: "design-system messaging-template-create"
}
  , lp = {
    class: "justify-content-between bg-white border-bottom d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom box-shadow"
}
  , ip = {
    class: "my-0 mr-md-auto font-weight-normal fw-bold col-md-4"
}
  , op = {
    class: "d-flex my-2 my-md-0 mr-md-3 col-md-5"
}
  , rp = {
    key: 0,
    class: "col-md-3 text-end"
}
  , cp = {
    key: 1,
    class: "col-md-3 text-end"
}
  , dp = {
    class: "d-flex justify-content-end"
}
  , mp = {
    class: "p-4 min-vh-100 bg-gray-light"
}
  , up = {
    key: 0,
    class: "row mt-4 justify-content-center"
}
  , pp = {
    class: "bg-white p-4 rounded w-30 header-first-step box-shadow"
}
  , gp = {
    class: "mb-3"
}
  , hp = {
    class: "d-flex justify-content-end pt-1"
}
  , _p = {
    class: "toggle-btn-group"
}
  , fp = {
    key: 1,
    class: "row mt-4 justify-content-center"
}
  , bp = {
    class: "bg-white rounded w-60 p-0"
}
  , vp = {
    class: "col-md-6 p-4 box-shadow"
}
  , yp = {
    class: "text-black fs-2"
}
  , wp = {
    key: 0,
    class: "mt-3"
}
  , Cp = {
    class: "d-flex align-items-center mb-2 mt-2"
}
  , xp = {
    key: 0
}
  , kp = {
    for: "form-file",
    class: "d-flex flex-column align-items-between"
}
  , $p = {
    class: "d-flex align-items-center"
}
  , Tp = {
    class: "position-relative"
}
  , Dp = {
    class: "normal-input input-file p-2 position-relative text-truncate"
}
  , Sp = ["placeholder", "accept"]
  , Mp = {
    class: "d-flex align-items-center mb-0"
}
  , Ip = {
    class: "mb-3"
}
  , Vp = {
    key: 0,
    class: "bg-gray-light p-2 rounded mt-2"
}
  , Ap = {
    key: 0
}
  , Fp = {
    class: "mb-3"
}
  , Ep = {
    class: "mb-3"
}
  , Bp = {
    class: "mb-4"
}
  , zp = {
    key: 1,
    class: "edit-text-modal-wrapper"
}
  , Up = {
    class: "card shadow-sm edit-text-modal-card mb-4"
}
  , Op = {
    class: "card-header card-header-text pt-2 pb-2"
}
  , Lp = {
    class: "col-md-12 p-3"
}
  , Pp = {
    class: "d-flex p-3 border-top"
}
  , Np = {
    key: 2,
    class: "mb-4"
}
  , jp = {
    key: 0
}
  , Wp = {
    class: "d-flex align-items-center mb-4"
}
  , Hp = {
    class: "radio m-0"
}
  , Rp = {
    for: "messaging-action-website"
}
  , qp = {
    class: "radio m-0"
}
  , Gp = {
    key: 0
}
  , Kp = {
    class: "mb-4"
}
  , Yp = {
    class: "d-flex mb-1 align-items-center"
}
  , Qp = {
    class: "mb-4"
}
  , Zp = {
    key: 1
}
  , Jp = {
    class: "mb-4"
}
  , Xp = {
    class: "fw-bold text-black"
}
  , eg = {
    class: "mb-4"
}
  , tg = {
    key: 1
}
  , sg = ["onClick"]
  , ag = {
    class: "reply-button-container"
}
  , ng = {
    key: 0,
    class: "ds-icon icon-checkbox-circle-line text-green-dark me-2"
}
  , lg = ["title"]
  , ig = ["onClick"]
  , og = {
    class: "col-md-6 p-0 h-100"
}
  , rg = {
    class: "bg-gray-dark p-4 overflow-hidden rounded-end h-100"
}
  , cg = {
    class: "message-preview shadow-sm rounded-top overflow-hidden mt-3"
}
  , dg = {
    class: "message-preview__header p-3 text-white d-flex align-items-center fw-bold"
}
  , mg = {
    class: "message-preview__body p-3 pb-5"
}
  , ug = {
    class: "message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
}
  , pg = {
    key: 0,
    class: "bg-gray-300 d-flex mb-4 justify-content-center"
}
  , gg = {
    key: 0,
    class: "message-preview__body__ballon p-3 bg-white shadow-sm rounded mb-3"
}
  , hg = {
    key: 0,
    class: "bg-gray-300 d-flex mb-4 justify-content-center"
}
  , _g = {
    key: 0,
    class: "ds-icon icon-external-link-line me-2"
}
  , fg = {
    key: 1,
    class: "ds-icon icon-phone-line me-2"
}
  , bg = ["innerHTML"]
  , vg = ["innerHTML"]
  , yg = ["innerHTML"]
  , wg = ["innerHTML"]
  , Cg = {
    class: "row mt-4 justify-content-center"
}
  , xg = {
    key: 0,
    class: "w-30 p-0"
};
function kg(e, t, n, c, s, i) {
    var B, S, D;
    const d = r("CategoryFormModal")
      , u = r("DsButton")
      , h = r("DsIcon")
      , _ = r("DsSubtitle")
      , p = r("DsHeading")
      , g = r("DsTypography")
      , f = r("DsSelect")
      , $ = r("DsInput")
      , v = r("DsParagraph")
      , y = r("quill-editor")
      , M = r("DsCheckbox")
      , F = r("multiselect")
      , O = r("m-input-cellphone")
      , V = Ie("tooltip");
    return o(),
    m("div", np, [a(d, {
        show: s.showNewCategory,
        creationMode: !0,
        categoriesList: s.categories,
        onClose: t[0] || (t[0] = I => (s.showNewCategory = !1,
        i.reloadSelectCategory())),
        onCustomer: i.customerSaved,
        onReloadCategories: i.reloadSelectCategory
    }, null, 8, ["show", "categoriesList", "onCustomer", "onReloadCategories"]), l("div", lp, [a(u, {
        icon: "arrow-left-s-line",
        onClick: t[1] || (t[1] = I => i.backStep()),
        class: "p-1",
        size: "sm",
        variant: "link"
    }), l("h4", ip, [P(C(e.$t("messaging_template.create.title_header")) + " ", 1), a(h, {
        icon: "question-line",
        class: "p-1 me-1 question-line"
    })]), l("nav", op, [l("a", {
        class: Y(["p-2 text-dark", s.showContentTemplate ? "" : "fw-bold"])
    }, C(e.$t("messaging_template.create.title_box_1")), 3), t[28] || (t[28] = l("i", {
        class: "ds-icon icon-arrow-right-s-line text-green-normal ms-2"
    }, null, -1)), l("a", {
        class: Y(["p-2 text-dark", s.showContentTemplate ? "fw-bold" : ""])
    }, C(e.$t("messaging_template.create.title_box_2")), 3)]), s.showContentTemplate ? (o(),
    m("div", cp, [l("div", dp, [l("button", {
        onClick: t[4] || (t[4] = I => i.prevStep()),
        class: "btn btn-link text-green-normal fw-bold me-3"
    }, C(e.$t("back")), 1), a(u, {
        text: e.$t("messaging_template.create.save"),
        loading: s.loading,
        disabled: s.loading,
        variant: "green-normal",
        onClick: t[5] || (t[5] = I => i.saveTemplate())
    }, null, 8, ["text", "loading", "disabled"])])])) : (o(),
    m("div", rp, [a(u, {
        variant: "link",
        onClick: t[2] || (t[2] = I => i.backStep())
    }, {
        default: w( () => [P(C(e.$t("back")), 1)]),
        _: 1
    }), a(u, {
        text: e.$t("continue"),
        class: "ms-auto me-4",
        variant: "green-normal",
        onClick: t[3] || (t[3] = I => i.nextStep())
    }, null, 8, ["text"])]))]), l("div", mp, [a(_, {
        size: "md",
        class: "mb-4 px-1"
    }), s.showContentTemplate ? (o(),
    m("div", fp, [l("div", bp, [l("div", vp, [a(g, {
        text: e.$t("messaging_template.create.title_box_2"),
        fontSize: "4",
        fontWeight: "bold",
        class: "mb-1 mt-2"
    }, null, 8, ["text"]), l("span", yp, C(e.$t("messaging_template.create.subtitle_box_2")), 1), s.toggledType === "media" ? (o(),
    m("div", wp, [l("div", Cp, [a(g, {
        text: e.$t("messaging_template.create.model_type.media"),
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-0"
    }, null, 8, ["text"]), a(g, {
        text: e.$t("messaging_template.create.optional"),
        tag: "span",
        fontSize: "2",
        fontWeight: "bold",
        color: "gray-600",
        class: "ms-1"
    }, null, 8, ["text"])]), a(f, {
        modelValue: s.mediaType,
        "onUpdate:modelValue": t[14] || (t[14] = I => s.mediaType = I),
        options: s.mediaTypes,
        class: "mb-2"
    }, null, 8, ["modelValue", "options"]), (B = s.mediaType) != null && B.value ? (o(),
    m("div", xp, [l("div", null, [l("label", kp, [l("div", $p, [a(g, {
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-1 mt-2"
    }, {
        default: w( () => [P(C(e.$t(`messaging_template.create.model_type.media_input.${s.mediaType.value.toLowerCase()}`)) + " ", 1), a(g, {
            tag: "span",
            color: "gray-600",
            text: `(${e.$t(`messaging_template.create.model_type.media_input.template_files.${s.mediaType.value.toLowerCase()}`)})`
        }, null, 8, ["text"])]),
        _: 1
    })]), l("div", Tp, [l("div", Dp, [a(v, {
        text: i.fileName,
        size: "sm",
        color: "gray-600",
        class: "mb-0"
    }, null, 8, ["text"]), a(u, {
        text: i.uploadButtonProperties.text,
        icon: i.uploadButtonProperties.icon,
        size: "md",
        variant: i.uploadButtonProperties.variant,
        class: "position-absolute top-0 end-0 me-1 mt-1",
        onClick: i.uploadButtonProperties.clickHandler
    }, null, 8, ["text", "icon", "variant", "onClick"])])])]), l("input", {
        type: "file",
        placeholder: e.$t("new_websites.form_actions.download.insert"),
        id: "form-file",
        ref: "file",
        accept: i.fileAccept,
        class: "d-none",
        onChange: t[15] || (t[15] = (...I) => i.handleFileChange && i.handleFileChange(...I))
    }, null, 40, Sp)])])) : b("", !0)])) : b("", !0), l("div", null, [l("div", Mp, [a(g, {
        text: e.$t("messaging_template.create.message"),
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-2 mt-2"
    }, null, 8, ["text"])]), a(y, {
        ref: "qEditor",
        content: s.message,
        "onUpdate:content": t[16] || (t[16] = I => s.message = I),
        contentType: "html",
        toolbar: [],
        modules: i.editorModules,
        options: i.editorConfig,
        class: "form-control rounded grey h-100 p-0",
        onReady: i.startQuill
    }, null, 8, ["content", "modules", "options", "onReady"])]), l("div", Ip, [a(g, {
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-1"
    }, {
        default: w( () => [P(C(e.$t("messaging_template.create.custom_fields")) + " ", 1), a(g, {
            tag: "span",
            color: "gray-600",
            text: e.$t("messaging_template.create.optional")
        }, null, 8, ["text"])]),
        _: 1
    }), a(M, {
        modelValue: s.useCustomFields,
        "onUpdate:modelValue": t[17] || (t[17] = I => s.useCustomFields = I),
        isSwitch: !0,
        disabled: i.containsCustomVariable
    }, null, 8, ["modelValue", "disabled"]), a(ws, {
        name: "slide"
    }, {
        default: w( () => [s.useCustomFields ? (o(),
        m("div", Vp, [a(g, {
            fontSize: "2",
            fontWeight: "bold",
            class: "mb-1 mt-2",
            text: e.$t("messaging_template.create.entities")
        }, null, 8, ["text"]), a(F, {
            modelValue: s.selectedEntity,
            "onUpdate:modelValue": t[18] || (t[18] = I => s.selectedEntity = I),
            options: s.entities,
            onSelect: i.onEntitySelect,
            placeholder: e.$t("messaging_template.create.entities"),
            trackBy: "value"
        }, null, 8, ["modelValue", "options", "onSelect", "placeholder"]), s.selectedEntity ? (o(),
        m("div", Ap, [a(g, {
            fontSize: "2",
            fontWeight: "bold",
            class: "mb-1 mt-2",
            text: e.$t("messaging_template.create.custom_fields_variable")
        }, null, 8, ["text"]), a(F, {
            options: s.filteredCustomFields,
            onSelect: i.onVariableSelect,
            placeholder: e.$t("messaging_template.create.custom_fields_variable"),
            trackBy: "value"
        }, null, 8, ["options", "onSelect", "placeholder"])])) : b("", !0)])) : b("", !0)]),
        _: 1
    })]), l("div", Fp, [a(g, {
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-1 mt-2",
        text: e.$t("messaging_template.create.optout")
    }, null, 8, ["text"]), a(M, {
        isSwitch: "",
        modelValue: s.enableOptout,
        "onUpdate:modelValue": t[19] || (t[19] = I => s.enableOptout = I)
    }, null, 8, ["modelValue"])]), l("div", Ep, [a(g, {
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-1 mt-2"
    }, {
        default: w( () => [P(C(e.$t("messaging_template.create.variable")) + " ", 1), a(g, {
            tag: "span",
            color: "gray-600",
            text: e.$t("messaging_template.create.optional")
        }, null, 8, ["text"])]),
        _: 1
    }), a(F, {
        options: s.variables,
        onSelect: i.onVariableSelect,
        placeholder: e.$t("messaging_template.create.button_variables.placeholder"),
        trackBy: "value"
    }, null, 8, ["options", "onSelect", "placeholder"])]), l("div", Bp, [a(g, {
        fontSize: "2",
        fontWeight: "bold",
        class: "mb-1 mt-2"
    }, {
        default: w( () => [P(C(e.$t("messaging_template.create.buttons")) + " ", 1), a(g, {
            tag: "span",
            color: "gray-600",
            text: e.$t("messaging_template.create.optional")
        }, null, 8, ["text"]), Z(a(h, {
            icon: "information-line",
            class: "ms-2"
        }, null, 512), [[V, e.$t("messaging_template.create.action_tooltip")]])]),
        _: 1
    }), a(F, {
        modelValue: s.buttonType,
        "onUpdate:modelValue": t[20] || (t[20] = I => s.buttonType = I),
        options: s.buttonTypeOptions,
        allowEmpty: !0,
        trackBy: ""
    }, null, 8, ["modelValue", "options"])]), s.showEditReplyButtonModal ? (o(),
    m("div", zp, [l("div", Up, [l("div", Op, [a(g, {
        text: e.$t("messaging_template.create.text_button")
    }, null, 8, ["text"])]), l("div", Lp, [s.currentlyEditingButtonType ? (o(),
    x($, {
        key: 0,
        modelValue: s.editingReplyText,
        "onUpdate:modelValue": t[21] || (t[21] = I => s.editingReplyText = I),
        class: "w-100",
        required: "",
        autofocus: "",
        hasError: s.nameError
    }, null, 8, ["modelValue", "hasError"])) : b("", !0)]), l("div", Pp, [a(u, {
        text: e.$t("messaging_template.create.change_message"),
        variant: "green-normal",
        size: "md",
        class: "px-4",
        onClick: i.saveEditedReplyButton
    }, null, 8, ["text", "onClick"]), a(u, {
        text: e.$t("messaging_template.create.cancel"),
        class: "ms-auto shadow-none",
        variant: "link",
        size: "md",
        onClick: i.cancelReplyButtonEdit
    }, null, 8, ["text", "onClick"])])])])) : b("", !0), s.buttonType ? (o(),
    m("div", Np, [s.buttonType.value === "action" ? (o(),
    m("div", jp, [l("div", Wp, [l("div", Hp, [Z(l("input", {
        id: "messaging-action-website",
        "onUpdate:modelValue": t[22] || (t[22] = I => s.actionButtons.type = I),
        value: "URL",
        type: "radio",
        name: "messaging-action"
    }, null, 512), [[mt, s.actionButtons.type]]), l("label", Rp, C(e.$t("messaging_template.create.action_website")), 1)]), l("div", qp, [Z(l("input", {
        id: "instance-consultacnpj",
        "onUpdate:modelValue": t[23] || (t[23] = I => s.actionButtons.type = I),
        value: "PHONE_NUMBER",
        type: "radio",
        name: "messaging-action"
    }, null, 512), [[mt, s.actionButtons.type]]), t[31] || (t[31] = l("label", {
        for: "instance-consultacnpj"
    }, "Fazer ligação", -1))])]), s.actionButtons.type === "URL" ? (o(),
    m("div", Gp, [l("div", Kp, [l("div", Yp, [a(g, {
        text: e.$t("messaging_template.create.button_text"),
        class: "bold m-0"
    }, null, 8, ["text"]), Z(a(h, {
        icon: "information-line",
        class: "ms-2 fs-2"
    }, null, 512), [[V, e.$t("messaging_template.create.button_text_tooltip")]])]), Z(l("input", {
        "onUpdate:modelValue": t[24] || (t[24] = I => s.actionButtons.website.text = I),
        class: "form-control",
        type: "text",
        maxlength: "25"
    }, null, 512), [[Se, s.actionButtons.website.text]])]), l("div", Qp, [a(g, {
        text: e.$t("messaging_template.create.button_link"),
        class: "mb-1"
    }, null, 8, ["text"]), Z(l("input", {
        "onUpdate:modelValue": t[25] || (t[25] = I => s.actionButtons.website.url = I),
        class: "form-control",
        type: "text"
    }, null, 512), [[Se, s.actionButtons.website.url]])])])) : b("", !0), s.actionButtons.type === "PHONE_NUMBER" ? (o(),
    m("div", Zp, [l("div", Jp, [l("h6", Xp, C(e.$t("messaging_template.create.button_text")), 1), Z(l("input", {
        "onUpdate:modelValue": t[26] || (t[26] = I => s.actionButtons.phone.text = I),
        class: "form-control rounded",
        type: "text",
        maxlength: "25"
    }, null, 512), [[Se, s.actionButtons.phone.text]])]), l("div", eg, [a(O, {
        modelValue: s.actionButtons.phone.phone_number,
        "onUpdate:modelValue": t[27] || (t[27] = I => s.actionButtons.phone.phone_number = I),
        label: e.$t("messaging_template.create.button_phone")
    }, null, 8, ["modelValue", "label"])])])) : b("", !0)])) : b("", !0), s.buttonType.value === "reply" ? (o(),
    m("div", tg, [(o(!0),
    m(N, null, j(s.replyButtonList, I => (o(),
    m("div", {
        class: "mb-2",
        key: I.type
    }, [l("button", {
        onClick: re => i.selectAction(I.type),
        class: "bg-white rounded border reply-button w-100 text-start d-flex align-items-center"
    }, [l("div", ag, [s.replyButtons[I.type] ? (o(),
    m("i", ng)) : b("", !0), l("span", {
        class: "me-2 text-truncate reply-button-text",
        title: s.replyButtonTexts[I.type]
    }, C(s.replyButtonTexts[I.type]), 9, lg), l("button", {
        onClick: Cs(re => i.openReplyButtonEditor(I.type), ["stop"]),
        class: "btn btn-link p-0 ms-2 edit-icon",
        type: "button"
    }, t[32] || (t[32] = [l("i", {
        class: "ds-icon icon-edit-line"
    }, null, -1)]), 8, ig)])], 8, sg)]))), 128))])) : b("", !0)])) : b("", !0)]), l("div", og, [l("div", rg, [l("h5", null, C(e.$t("messaging_template.create.preview.title")), 1), l("div", cg, [l("div", dg, [t[33] || (t[33] = l("span", {
        class: "p-3 bg-gray-100 me-2 rounded-circle"
    }, null, -1)), P(" " + C(e.$t("messaging_template.create.preview.company")), 1)]), l("div", mg, [l("div", ug, [(((S = s.mediaType) == null ? void 0 : S.value) === "IMAGE" || ((D = s.mediaType) == null ? void 0 : D.value) === "VIDEO") && !s.mediaFile ? (o(),
    m("div", pg, [a(h, {
        icon: i.thumbnailIcon,
        class: "xl-icon"
    }, null, 8, ["icon"])])) : b("", !0), a(g, {
        innerHTML: i.messageHtml
    }, null, 8, ["innerHTML"]), a(_, {
        class: "mb-0 mt-2 text-end",
        text: e.$t("messaging_template.create.preview.now"),
        color: "gray",
        size: "sm"
    }, null, 8, ["text"])]), i.enableExtraMsgPreview ? (o(),
    m("div", gg, [s.mediaType.value === "DOCUMENT" && !this.mediaFile ? (o(),
    m("div", hg, [a(h, {
        icon: "file-text-line",
        class: "xl-icon"
    })])) : s.mediaType.value === "DOCUMENT" && this.mediaFile ? (o(),
    x(g, {
        key: 1,
        innerHTML: i.mediaHtml
    }, null, 8, ["innerHTML"])) : b("", !0), a(_, {
        class: "mb-0 mt-2 text-end",
        text: e.$t("messaging_template.create.preview.now"),
        color: "gray",
        size: "sm"
    }, null, 8, ["text"])])) : b("", !0), (o(!0),
    m(N, null, j(i.templateButtons, I => (o(),
    m("div", {
        key: I.text,
        class: "message-preview__body__button p-3 shadow-sm text-center fw-bold rounded cursor-pointer mb-3"
    }, [I.url ? (o(),
    m("i", _g)) : b("", !0), I.phone_number ? (o(),
    m("i", fg)) : b("", !0), P(" " + C(I.text), 1)]))), 128))])]), l("ul", null, [(o(!0),
    m(N, null, j(i.variablesWarning, I => (o(),
    m("li", {
        class: "my-4",
        key: I.variable
    }, [I.value === "customer" ? (o(),
    m("div", {
        key: 0,
        class: "text-gray-700 small",
        innerHTML: e.$t("messaging_template.create.variable_warning.customer")
    }, null, 8, bg)) : I.value === "customer_name" ? (o(),
    m("div", {
        key: 1,
        class: "text-gray-700 small",
        innerHTML: e.$t("messaging_template.create.variable_warning.customer_name")
    }, null, 8, vg)) : I.value === "customer_first_name" ? (o(),
    m("div", {
        key: 2,
        class: "text-gray-700 small",
        innerHTML: e.$t("messaging_template.create.variable_warning.customer_first_name")
    }, null, 8, yg)) : I.value === "product_name" ? (o(),
    m("div", {
        key: 3,
        class: "text-gray-700 small",
        innerHTML: e.$t("messaging_template.create.variable_warning.product_name")
    }, null, 8, wg)) : b("", !0)]))), 128))])])])])])) : (o(),
    m("div", up, [l("div", pp, [a(p, {
        size: "md",
        class: "mb-3 px-1"
    }), l("div", gp, [a(g, {
        text: "Selecione o Canal",
        size: "sm",
        fontWeight: "bold",
        class: "mb-2"
    }), a(f, {
        id: "type",
        modelValue: s.id_channel,
        "onUpdate:modelValue": t[6] || (t[6] = I => s.id_channel = I),
        class: "mt-2 mb-5 select-color",
        options: s.channelOptions,
        placeholder: e.$t("signup.new_signup_flow.qualify.objective.placeholder"),
        searchable: !1,
        size: "md",
        filterable: ""
    }, null, 8, ["modelValue", "options", "placeholder"])]), t[29] || (t[29] = l("hr", null, null, -1)), a(g, {
        text: e.$t("messaging_template.create.name_model.title"),
        size: "sm",
        fontWeight: "bold",
        class: "mt-4 mb-2"
    }, null, 8, ["text"]), a($, {
        modelValue: s.name,
        "onUpdate:modelValue": t[7] || (t[7] = I => s.name = I),
        type: "text",
        placeholder: e.$t("messaging_template.create.name_model.placeholder"),
        class: "mb-3",
        hasError: s.nameError
    }, null, 8, ["modelValue", "placeholder", "hasError"]), a(g, {
        text: e.$t("messaging_template.create.meta_type.title"),
        size: "sm",
        fontWeight: "bold",
        class: "mb-2"
    }, null, 8, ["text"]), a(f, {
        options: s.metaTypes,
        placeholder: e.$t("activity.select"),
        modelValue: s.metaType,
        "onUpdate:modelValue": t[8] || (t[8] = I => s.metaType = I),
        size: "md"
    }, null, 8, ["options", "placeholder", "modelValue"]), a(g, {
        text: e.$t("messaging_template.create.category.title"),
        size: "sm",
        fontWeight: "bold",
        class: "mb-2 mt-3"
    }, null, 8, ["text"]), a(f, {
        modelValue: s.category,
        "onUpdate:modelValue": t[9] || (t[9] = I => s.category = I),
        options: s.categories,
        filterable: "",
        hasError: s.categoryError
    }, null, 8, ["modelValue", "options", "hasError"]), l("div", hp, [a(u, {
        class: "text-green-normal mt-3",
        icon: "add-line",
        size: "sm",
        fontWeight: "bold",
        variant: "link",
        onClick: t[10] || (t[10] = I => s.showNewCategory = !0),
        text: e.$t("messaging_template.create.newCategory.title")
    }, null, 8, ["text"])]), t[30] || (t[30] = l("hr", null, null, -1)), a(g, {
        text: e.$t("messaging_template.create.group.title"),
        size: "sm",
        fontWeight: "bold",
        class: "mb-2"
    }, null, 8, ["text"]), a(f, {
        modelValue: s.group,
        "onUpdate:modelValue": t[11] || (t[11] = I => s.group = I),
        options: s.groups
    }, null, 8, ["modelValue", "options"]), a(g, {
        text: e.$t("messaging_template.create.model_type.title"),
        size: "sm",
        fontWeight: "bold",
        class: "mb-2 mt-2"
    }, null, 8, ["text"]), l("div", _p, [a(u, {
        class: "border-0",
        variant: s.toggledType === "text" ? "outline-green-normal" : "link",
        text: e.$t("messaging_template.create.model_type.text_msg"),
        size: "md",
        onClick: t[12] || (t[12] = I => s.toggledType = "text")
    }, null, 8, ["variant", "text"]), a(u, {
        class: "border-0",
        variant: s.toggledType === "media" ? "outline-green-normal" : "link",
        text: e.$t("messaging_template.create.model_type.media_msg"),
        size: "md",
        onClick: t[13] || (t[13] = I => s.toggledType = "media")
    }, null, 8, ["variant", "text"])]), a(_, {
        text: i.typeText,
        size: "sm",
        class: "mt-2 px-1",
        color: "gray"
    }, null, 8, ["text"])])])), l("div", Cg, [s.showContentTemplate ? b("", !0) : (o(),
    m("div", xg))])])])
}
const $g = W(ap, [["render", kg], ["__scopeId", "data-v-777f200c"]])
  , th = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: $g
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Hg as A, Og as C, Wg as D, eh as L, Ug as M, jg as N, Fg as a, Eg as b, Bg as c, zg as d, Lg as e, Pg as f, Ng as g, Rg as h, Ag as i, qg as j, Gg as k, Kg as l, Yg as m, Qg as n, Zg as o, Jg as p, Xg as q, th as r};
