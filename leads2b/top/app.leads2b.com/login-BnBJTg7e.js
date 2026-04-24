import {a1 as V, r as c, o as m, p as S, H as y, b as i, R as L, i as j, a as o, t as h, a2 as _, _ as O, a6 as W, c as v, bi as J, w as U, F as K, f as G, d as P, e as k, n as Q, W as M, a3 as I, b1 as Y} from "./vendor-DIc2GtcL.js";
import {bM as x, ea as Z, A as X, a_ as ee, R as se, aH as C, t as F, oz as te, oA as z, oB as oe, oC as ae, on as ie, oD as re} from "./common-CYe7udOS.js";
import "./vue-chartjs-tKbgf7iH.js";
import "./v-money3-Cd_ea9HJ.js";
import "./quill-mention-Bn9Wwih8.js";
import "./video.js-B2CvyAZU.js";
import "./papaparse-BxRlbsMi.js";
import "./@dagrejs/dagre-DFNdVaXt.js";
import "./@vue-flow/core-DMJFMrVN.js";
import "./v-network-graph-CnV1pdED.js";
import "./d3-dispatch-kxCwF96_.js";
import "./@cubejs-client/core-BZYQe96g.js";
import "./simple-statistics-CRXMWeXn.js";
const ne = {
    name: "m-input-email",
    components: {
        AInputText: x
    },
    emits: ["update:modelValue", "focus", "blur", "click", "keyup", "iconClick", "actionClicked"],
    props: {
        ...x.props,
        required: {
            type: Boolean,
            default: !1
        },
        name: {
            type: String,
            default: "email"
        },
        label: {
            type: String,
            default: "E-mail"
        },
        autocomplete: {
            type: String,
            default: "on"
        }
    },
    data() {
        return {
            email: this.modelValue
        }
    },
    computed: {
        validationRules() {
            return {
                email: !0,
                required: this.required
            }
        },
        inputValue: {
            get() {
                return this.modelValue
            },
            set(e) {
                this.email = e,
                this.$emit("update:modelValue", e)
            }
        },
        inputAttrs() {
            return {
                ...this.$attrs,
                class: null,
                style: null
            }
        }
    }
};
function le(e, s, n, r, t, a) {
    const p = c("a-input-text")
      , g = c("Field");
    return m(),
    S(g, {
        modelValue: a.inputValue,
        "onUpdate:modelValue": s[0] || (s[0] = l => a.inputValue = l),
        rules: a.validationRules,
        name: n.name
    }, {
        default: y( ({touched: l, errors: w, componentField: u}) => [i(p, L({
            ...a.inputAttrs,
            ...e.$props,
            ...u
        }, {
            ref: `email-input--${n.name}`,
            validationErrors: l ? w : [],
            autocomplete: n.autocomplete,
            label: n.label,
            placeholder: "pessoa@empresa.com"
        }), null, 16, ["validationErrors", "autocomplete", "label"])]),
        _: 1
    }, 8, ["modelValue", "rules", "name"])
}
const de = V(ne, [["render", le], ["__scopeId", "data-v-94a268a7"]])
  , ce = {
    name: "m-input-password",
    components: {
        AInputText: x
    },
    props: {
        required: Boolean,
        disabled: {
            type: Boolean,
            default: !1
        },
        minChar: {
            type: Number,
            default: 4
        },
        maxChar: {
            type: Number,
            default: null
        },
        label: String,
        autocomplete: {
            type: String,
            default: "on"
        },
        customErrors: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            password: "",
            errorMessage: "",
            type: "password",
            icon: "icon-eye-off-line",
            id: j()
        }
    },
    computed: {
        validationRules() {
            return {
                min: this.minChar,
                max: this.maxChar,
                required: this.required
            }
        },
        inputAttrs() {
            return {
                ...this.$attrs,
                class: null,
                style: null
            }
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.type === "password" ? (this.type = "text",
            this.icon = "icon-eye-line") : (this.type = "password",
            this.icon = "icon-eye-off-line")
        }
    }
}
  , ue = {
    class: "input-password-container mt2 mb2"
}
  , he = {
    class: "input-password--wrapper"
};
function me(e, s, n, r, t, a) {
    const p = c("a-input-text")
      , g = c("Field");
    return m(),
    S(g, {
        modelValue: t.password,
        "onUpdate:modelValue": s[0] || (s[0] = l => t.password = l),
        rules: a.validationRules,
        name: "password"
    }, {
        default: y( ({errors: l, componentField: w}) => [o("div", ue, [o("div", he, [i(p, L({
            ...a.inputAttrs,
            ...e.$props,
            ...w
        }, {
            id: t.id,
            type: t.type,
            placeholder: "********",
            label: n.label,
            fieldDescription: "Insira aqui sua senha.",
            icon: t.icon,
            iconPosition: "right",
            autocomplete: n.autocomplete,
            validationErrors: n.customErrors.length ? n.customErrors : l,
            onIconClick: a.togglePasswordVisibility
        }), null, 16, ["id", "type", "label", "icon", "autocomplete", "validationErrors", "onIconClick"])])])]),
        _: 1
    }, 8, ["modelValue", "rules"])
}
const pe = V(ce, [["render", me], ["__scopeId", "data-v-73806c6d"]])
  , ge = {
    emits: ["close", "endVacation"],
    name: "modal-vacation",
    components: {
        Modal: Z
    },
    props: ["show"]
}
  , fe = {
    class: "col-sm-11"
}
  , we = {
    class: "col-sm-1"
};
function be(e, s, n, r, t, a) {
    const p = c("modal");
    return m(),
    S(p, {
        show: n.show,
        class: "alert-modal"
    }, {
        header: y( () => [o("div", fe, [o("h2", null, h(e.$t("login.attention")), 1)]), o("div", we, [o("button", {
            type: "button",
            class: "close",
            "data-dismiss": "modal",
            "aria-hidden": "true",
            onClick: s[0] || (s[0] = g => e.$emit("close"))
        }, " × ")])]),
        body: y( () => [o("p", null, h(e.$t("login.messages.warning.vacation")), 1)]),
        footer: y( () => [o("button", {
            type: "button",
            class: "btn btn-danger pull-right",
            style: {
                "margin-right": "6px"
            },
            "data-dismiss": "modal",
            "aria-hidden": "true",
            onClick: s[1] || (s[1] = g => e.$emit("close"))
        }, h(e.$t("login.cancel")), 1), o("button", {
            type: "button",
            class: "btn btn-success pull-right",
            "data-dismiss": "modal",
            "aria-hidden": "true",
            onClick: s[2] || (s[2] = _(g => e.$emit("endVacation"), ["prevent"]))
        }, h(e.$t("login.back_vacation")), 1)]),
        _: 1
    }, 8, ["show"])
}
const _e = V(ge, [["render", be], ["__scopeId", "data-v-f1f57307"]])
  , ye = {
    name: "login",
    components: {
        ABtn: X,
        Loader: ee,
        MultiSelect: se,
        ModalVacation: _e,
        MInputEmail: de,
        MInputPassword: pe
    },
    data() {
        return {
            appTermsUrl: "https://leads2b.com/termos-de-uso/",
            appPrivacyUrl: "https://leads2b.com/politica-de-privacidade/",
            captchaToken: null,
            disableCaptcha: !1,
            formRightSide: !0,
            data: {
                login: "",
                password: "",
                language: "pt-br",
                ch: "",
                captchaToken: null
            },
            companies: [],
            companyHash: null,
            loading: !1,
            showVacationModal: !1,
            showResetPasswordForm: !1,
            showResetPasswordRequestForm: !1,
            newPassword: "",
            newPasswordConfirmation: "",
            emailResetPassword: ""
        }
    },
    beforeRouteEnter(e, s, n) {
        var g;
        const r = e.query
          , t = C.state && C.state.credentials || r && r.token
          , a = C.state && C.state.refreshToken || r && r.refresh_token
          , p = e.name;
        if ((g = r == null ? void 0 : r.redirect) != null && g.includes("meet/")) {
            const l = r.redirect.split("/")[2];
            window.location.href = `https://meet.leads2b.com/${l}`
        }
        if (!p.includes("login.reset-password") && t) {
            let l = {
                name: "home"
            };
            if (r.redirect) {
                if (l = {
                    path: r.redirect
                },
                r.params) {
                    const u = JSON.parse(decodeURI(window.atob(r.params)));
                    l.params = u
                }
                if (r.query) {
                    const u = JSON.parse(decodeURI(window.atob(r.query)));
                    l.query = u
                }
            }
            C.dispatch("getLoginDetails", {
                token: t,
                refreshToken: a
            }).then( () => {
                r.trackSignup && F.track("Account Created", {
                    "signup source": "consultacnpj"
                }),
                n(l)
            }
            ).catch( () => {
                n( () => {
                    C.dispatch("logout")
                }
                )
            }
            )
        } else
            n()
    },
    computed: {
        ...O(["user", "maintenanceMode"]),
        location() {
            return window.location.hostname
        },
        appUrl() {
            return this.$store.state.appUrl
        },
        captchaVerified() {
            return !!this.data.captchaToken
        },
        hasMinLength() {
            var e;
            return ((e = this.newPassword) == null ? void 0 : e.length) >= 8
        },
        hasLowerCase() {
            return /[a-z]/.test(this.newPassword)
        },
        hasUpperCase() {
            return /[A-Z]/.test(this.newPassword)
        },
        hasNumber() {
            return /[0-9]/.test(this.newPassword)
        },
        hasSpecialChar() {
            return /[!@#$%^&*()+=,?`~]/.test(this.newPassword)
        },
        isPasswordValid() {
            return /^\s|\s$/.test(this.newPassword) ? !1 : this.hasMinLength && this.hasLowerCase && this.hasUpperCase && this.hasNumber && this.hasSpecialChar
        },
        passwordRequirements() {
            return [{
                label: this.$t("users.profile.security.change_password.errors.min_length"),
                valid: this.hasMinLength
            }, {
                label: this.$t("users.profile.security.change_password.errors.lower_case"),
                valid: this.hasLowerCase
            }, {
                label: this.$t("users.profile.security.change_password.errors.upper_case"),
                valid: this.hasUpperCase
            }, {
                label: this.$t("users.profile.security.change_password.errors.number"),
                valid: this.hasNumber
            }, {
                label: this.$t("users.profile.security.change_password.errors.special_char"),
                valid: this.hasSpecialChar
            }]
        },
        passwordStrength() {
            if (!this.newPassword)
                return 0;
            let e = 0;
            return this.hasMinLength && (e += 1),
            this.hasLowerCase && (e += 1),
            this.hasUpperCase && (e += 1),
            this.hasNumber && (e += 1),
            this.hasSpecialChar && (e += 1),
            this.newPassword.length >= 15 && (e += 1),
            e
        },
        passwordStrengthPercentage() {
            return this.passwordStrength / 6 * 100
        },
        passwordStrengthLabel() {
            return this.passwordStrength <= 2 ? this.$t("users.profile.security.change_password.password_strength.weak") : this.passwordStrength <= 4 ? this.$t("users.profile.security.change_password.password_strength.medium") : this.passwordStrength === 5 ? this.$t("users.profile.security.change_password.password_strength.strong") : this.$t("users.profile.security.change_password.password_strength.very_strong")
        },
        passwordStrengthClass() {
            return this.passwordStrength <= 2 ? "strength-weak" : this.passwordStrength <= 4 ? "strength-medium" : this.passwordStrength === 5 ? "strength-strong" : "strength-very-strong"
        }
    },
    watch: {
        captchaVerified(e) {
            e && !this.showResetPasswordRequestForm && !this.showResetPasswordForm ? this.login() : e && this.showResetPasswordForm && this.requestPasswordReset()
        }
    },
    async mounted() {
        const e = window.navigator.userLanguage || window.navigator.language;
        e && this.$i18n.availableLocales.includes(e.toLowerCase()) && (this.data.language = e.toLowerCase()),
        this.$i18n.locale = this.data.language,
        this.$route.query.token && (this.showResetPasswordRequestForm = !0),
        this.$route.query.resetPassword && (this.showResetPasswordForm = !0);
        try {
            const s = await te();
            this.disableCaptcha = s == null ? void 0 : s.disable_captcha
        } catch {
            this.disableCaptcha = !1
        }
    },
    methods: {
        redirectToLeads2b() {
            window.location.href = "https://leads2b.com/"
        },
        resetState() {
            this.loading = !1,
            this.companyHash = null,
            this.data.login = "",
            this.data.password = "",
            this.showVacationModal = !1,
            this.hidePasswordResetFormSettings()
        },
        hidePasswordResetFormSettings() {
            this.showResetPasswordRequestForm = !1,
            this.showResetPasswordForm = !1,
            this.companies = []
        },
        login() {
            this.loading = !0,
            (this.companyHash ? z(Object.assign(this.data, {
                ch: this.companyHash
            })) : z(this.data)).then(s => {
                if (s.token) {
                    s.url_redirect ? this.$store.dispatch("setCredentials", {
                        credentials: s.token,
                        refreshToken: s.refresh_token
                    }).then( () => {
                        window.location.replace(s.url_redirect),
                        F.track("Login")
                    }
                    ) : this.$store.dispatch("getLoginDetails", {
                        token: s.token,
                        refreshToken: s.refresh_token,
                        promiseResolve: null,
                        promiseReject: null,
                        retryCount: 0,
                        setUserStatus: !0
                    }).then( () => {
                        this.validateVacation(),
                        this.$store.dispatch("live/joinCompanyRoom"),
                        F.track("Login")
                    }
                    ).catch( () => {
                        this.loading = !1,
                        this.companies = [],
                        this.companyHash = null,
                        this.$notification.notifyError("login.messages.error.login"),
                        this.$store.dispatch("logout")
                    }
                    );
                    return
                }
                if (this.loading = !1,
                s.companies) {
                    this.companies = s.companies,
                    this.$nextTick( () => {
                        this.$refs.companySelect.$el.focus()
                    }
                    );
                    return
                }
                throw Error()
            }
            ).catch(s => {
                var r, t;
                if (this.loading = !1,
                this.companies = [],
                this.companyHash = null,
                this.data.ch = null,
                this.maintenanceMode === !0)
                    return this.$router.push({
                        name: "maintenance"
                    });
                const n = oe(s);
                return ((t = (r = s == null ? void 0 : s.response) == null ? void 0 : r.data) == null ? void 0 : t.code) === "user_on_vacation" ? (this.$notification.notifyError("login.messages.error.user_on_vacation"),
                !0) : (!n || n.length === 0 ? this.$notification.notifyError("login.messages.error.invalid_user_or_password") : n.forEach(a => {
                    this.$notification.notifyError(a.codeError.qtdp_msg > 0 ? a.codeError.msg(a.field) : a.codeError.msg())
                }
                ),
                !0)
            }
            )
        },
        selectCompany(e) {
            this.companyHash = e.hash,
            this.disableCaptcha ? this.login() : (this.$refs.recaptchaLogin.reset(),
            this.data.captchaToken = null,
            this.$refs.recaptchaLogin.execute())
        },
        validateVacation() {
            if (this.user && this.user.parameters && this.user.parameters.vacation) {
                const {parameters: e} = this.user
                  , {vacation: s} = e;
                if (s && s.active && W().isBetween(s.begin, s.end)) {
                    this.showVacationModal = !0;
                    return
                }
            }
            if (this.$route.query.redirect) {
                let e = {};
                this.$route.query && this.$route.query.params && (e = JSON.parse(decodeURI(window.atob(this.$route.query.params)))),
                this.$router.push({
                    path: this.$route.query.redirect,
                    query: e
                })
            } else
                this.$router.push({
                    name: "home"
                })
        },
        returnFromVacation() {
            this.user && (this.user.parameters = {
                ...this.user.parameters,
                vacation: {
                    active: !1,
                    begin: null,
                    end: null,
                    responsible: null
                }
            },
            ae({
                id: this.user.id,
                parameters: this.user.parameters
            }).then( () => {
                this.$router.push({
                    name: "home"
                })
            }
            ).catch( () => {
                this.$notification.notifyError("login.messages.error.vacation")
            }
            ))
        },
        handleRequestPasswordReset(e, s) {
            s(),
            this.data.captchaToken = null,
            e()
        },
        handleLogin(e, s) {
            this.data.login = this.data.login.trim(),
            this.disableCaptcha ? this.login() : (s(),
            this.data.captchaToken = null,
            e())
        },
        requestPasswordReset() {
            this.loading = !0,
            ie({
                email: this.data.login,
                captchaToken: this.data.captchaToken
            }).then( () => {
                this.loading = !1,
                this.$notification.notifySuccess("login.messages.success.request_password_reset")
            }
            ).catch(e => {
                var t, a;
                const s = {
                    400: "login.messages.warning.invalid_email",
                    500: "login.messages.error.request_password_reset"
                }
                  , n = (t = e == null ? void 0 : e.response) == null ? void 0 : t.status
                  , r = s[n];
                if (r) {
                    const p = (a = e == null ? void 0 : e.response) == null ? void 0 : a.data
                      , g = this.$t(p && p.title || "error")
                      , l = p && p.type || "error";
                    this.$notification.notify({
                        title: g,
                        type: l,
                        text: this.$t(r)
                    })
                }
                this.loading = !1
            }
            )
        },
        async resetPassword() {
            if (this.newPassword !== this.newPasswordConfirmation) {
                this.$notification.notifyError("login.messages.error.divergence_password");
                return
            }
            const {valid: e} = await this.$refs["reset-password-observer"].validate();
            if (!e) {
                this.$notification.notifyError("messages.error.invalid_empty_fields");
                return
            }
            this.loading = !0,
            re({
                token: this.$route.query.token,
                password: this.newPassword
            }).then( () => {
                this.loading = !1,
                this.$notification.notifySuccess("login.messages.success.password_change"),
                this.resetState(),
                this.$router.replace({
                    name: "login"
                })
            }
            ).catch( () => {
                this.loading = !1,
                this.$notification.notifyError("login.messages.error.password_change"),
                this.resetState(),
                this.$router.replace({
                    name: "login"
                })
            }
            )
        }
    }
}
  , ve = {
    id: "login",
    class: "design-system"
}
  , ke = {
    id: "login-box",
    class: "login--box"
}
  , Pe = {
    id: "login-box-holder",
    class: "left-side p-6 justify-content-center"
}
  , Ce = {
    class: "mb-2 fs-8 lh-1"
}
  , Se = {
    class: "mb-2 fs-8 lh-1"
}
  , Re = {
    class: "fs-3 fw-semibold text-gray-700"
}
  , Ve = {
    class: "form-field"
}
  , $e = {
    class: "main-login"
}
  , qe = {
    key: "newPassword",
    class: "list-field-item"
}
  , Fe = {
    class: "form-group"
}
  , xe = {
    key: 0,
    class: "bg-gray-light p-3 rounded-2 mt-2 border border-1 border-gray-200"
}
  , Le = {
    class: "list-unstyled mb-0 ps-1"
}
  , Ee = {
    class: "small"
}
  , Te = {
    key: 1,
    class: "mt-3"
}
  , Ue = {
    class: "password-strength-bar"
}
  , Me = {
    class: "form-group"
}
  , Ie = {
    key: "login",
    class: "list-field-item"
}
  , ze = ["onKeyup", "onSubmit"]
  , Be = {
    class: "mt-4",
    style: {
        position: "relative"
    }
}
  , De = {
    class: "forget-a"
}
  , Ne = {
    class: "btns"
}
  , Ae = {
    class: "create-account"
}
  , He = {
    class: "text-center"
}
  , je = {
    key: "companies",
    class: "list-field-item"
}
  , Oe = {
    class: "form-group"
}
  , We = {
    key: 0,
    class: "form-group",
    style: {
        "margin-top": "60px"
    }
}
  , Je = {
    key: "logging",
    class: "list-field-item"
}
  , Ke = {
    style: {
        "margin-top": "60px"
    }
}
  , Ge = {
    key: "passwordReset",
    class: "list-field-item"
}
  , Qe = ["disabled", "onClick"]
  , Ye = {
    class: "right-side bg-green-light position-relative d-flex align-items-center"
}
  , Ze = {
    class: "info-container p-5 pe-0"
}
  , Xe = {
    class: "my-5"
}
  , es = {
    class: "d-flex align-items-center mb-4"
}
  , ss = {
    class: "d-flex align-items-center mb-4"
}
  , ts = {
    class: "d-flex align-items-center"
};
function os(e, s, n, r, t, a) {
    const p = c("modal-vacation")
      , g = c("VueImage")
      , l = c("m-input-password")
      , w = c("DsIcon")
      , u = c("DsTypography")
      , B = c("Field")
      , $ = c("a-btn")
      , D = c("Form")
      , E = c("m-input-email")
      , T = c("DsButton")
      , N = c("multi-select")
      , A = c("loader")
      , H = c("ChallengeV2");
    return m(),
    v("div", ve, [i(p, {
        show: t.showVacationModal,
        onClose: s[0] || (s[0] = b => a.resetState()),
        onEndVacation: s[1] || (s[1] = b => a.returnFromVacation())
    }, null, 8, ["show"]), o("div", ke, [o("div", Pe, [o("div", {
        class: "logo cursor-pointer",
        onClick: s[2] || (s[2] = (...b) => a.redirectToLeads2b && a.redirectToLeads2b(...b))
    }, [i(g, {
        src: "logo_gtm_black.png",
        alt: "logo"
    })]), o("header", null, [o("p", Ce, h(e.$t("login.welcome_back")), 1), o("p", Se, h(e.$t("login.make_login")), 1), o("small", Re, h(e.$t("login.login_with_account")), 1)]), o("div", Ve, [o("div", $e, [i(H, {
        ref: "recaptchaLogin",
        modelValue: t.data.captchaToken,
        "onUpdate:modelValue": s[15] || (s[15] = b => t.data.captchaToken = b),
        autoExecute: !1
    }, {
        default: y( ({execute: b, reset: R}) => [i(J, {
            name: "fade"
        }, {
            default: y( () => [U(o("div", qe, [i(D, {
                ref: "reset-password-observer"
            }, {
                default: y( ({meta: d}) => [o("div", Fe, [o("a", {
                    class: "pull-right",
                    style: {
                        "margin-right": "10px"
                    },
                    onClick: s[3] || (s[3] = _( (...f) => a.hidePasswordResetFormSettings && a.hidePasswordResetFormSettings(...f), ["prevent"]))
                }, h(e.$t("login.back")), 1), i(l, {
                    modelValue: t.newPassword,
                    "onUpdate:modelValue": s[4] || (s[4] = f => t.newPassword = f),
                    label: e.$t("login.new_pass"),
                    minChar: 8,
                    maxChar: 64,
                    required: "",
                    type: "password",
                    name: "password"
                }, null, 8, ["modelValue", "label"]), t.newPassword ? (m(),
                v("div", xe, [o("ul", Le, [(m(!0),
                v(K, null, G(a.passwordRequirements, (f, q) => (m(),
                v("li", {
                    key: q,
                    class: P(["d-flex align-items-center gap-1 mb-1", f.valid ? "text-success" : "text-danger"])
                }, [f.valid === !0 ? (m(),
                S(w, {
                    key: 0,
                    class: "text-green-brand small-icon",
                    icon: "checkbox-circle-fill"
                })) : k("", !0), f.valid === !1 ? (m(),
                S(w, {
                    key: 1,
                    class: "text-red-normal small-icon",
                    icon: "close-line"
                })) : k("", !0), o("span", Ee, h(f.label), 1)], 2))), 128))])])) : k("", !0), t.newPassword ? (m(),
                v("div", Te, [o("div", Ue, [o("div", {
                    class: P(["password-strength-fill", a.passwordStrengthClass]),
                    style: Q({
                        width: a.passwordStrengthPercentage + "%"
                    })
                }, null, 6)]), i(u, {
                    variant: "small",
                    class: "mt-1"
                }, {
                    default: y( () => [M(h(e.$t("users.profile.security.change_password.password_strength.label")) + ": " + h(a.passwordStrengthLabel), 1)]),
                    _: 1
                })])) : k("", !0)]), i(B, {
                    modelValue: t.newPasswordConfirmation,
                    "onUpdate:modelValue": s[5] || (s[5] = f => t.newPasswordConfirmation = f),
                    rules: "required|confirmed:@password",
                    name: "passwordConfirm"
                }, {
                    default: y( ({errors: f, field: q}) => [o("div", Me, [i(l, L(q, {
                        label: e.$t("login.confirm_pass"),
                        minChar: 8,
                        maxChar: 64,
                        type: "password"
                    }), null, 16, ["label"]), f[0] ? (m(),
                    S(u, {
                        key: 0,
                        text: e.$t("login.messages.error.divergence_password"),
                        color: "red-normal",
                        fontSize: "2",
                        class: "mt-1"
                    }, null, 8, ["text"])) : k("", !0)])]),
                    _: 1
                }, 8, ["modelValue"]), i($, {
                    type: "ds-button btn w-100 btn-green-normal btn-xl fs-3 full-width big",
                    label: t.loading ? `${e.$t("login.wait")}...` : e.$t("login.redefine_pass"),
                    disabled: t.loading || !a.isPasswordValid || !d.valid,
                    class: "mt3",
                    onClick: a.resetPassword
                }, null, 8, ["label", "disabled", "onClick"])]),
                _: 1
            }, 512)], 512), [[I, t.showResetPasswordRequestForm]]), !t.showResetPasswordForm && !t.showResetPasswordRequestForm && t.companies.length === 0 ? (m(),
            v("div", Ie, [o("form", {
                onKeyup: Y(d => a.handleLogin(b, R), ["enter"]),
                onSubmit: _(d => a.handleLogin(b, R), ["prevent"])
            }, [o("div", null, [i(E, {
                ref: "email",
                label: "Email*",
                modelValue: t.data.login,
                "onUpdate:modelValue": s[6] || (s[6] = d => t.data.login = d),
                required: "",
                autocomplete: "on",
                "data-testid": "input-email"
            }, null, 8, ["modelValue"])]), o("div", Be, [o("div", De, [o("a", {
                class: "text-green-dark",
                onClick: s[7] || (s[7] = _(d => t.showResetPasswordForm = !0, ["prevent"]))
            }, " Esqueci minha senha ")]), i(l, {
                ref: "password",
                modelValue: t.data.password,
                "onUpdate:modelValue": s[8] || (s[8] = d => t.data.password = d),
                label: "Senha*",
                required: "",
                autocomplete: "off",
                maxChar: 64,
                "data-testid": "input-password"
            }, null, 8, ["modelValue"])]), o("div", Ne, [i($, {
                label: t.loading ? `${e.$t("login.wait")}...` : e.$t("login.signin"),
                class: P("login-button ds-button btn w-100 btn-green-normal btn-xl fs-3"),
                disabled: t.loading,
                onClick: _(d => a.handleLogin(b, R), ["prevent"]),
                icon: "icon-arrow-right-line",
                IconRight: "",
                "data-testid": "btn-signin"
            }, null, 8, ["label", "disabled", "onClick"]), o("div", Ae, [i($, {
                class: P("ds-button btn w-100 text-green-normal btn-xl mt-4"),
                label: "Criar conta",
                onClick: s[9] || (s[9] = d => e.$router.push({
                    path: "/signup",
                    query: e.$route.query
                })),
                "data-testid": "btn-new-account"
            })])])], 40, ze), o("div", He, [i(T, {
                tag: "a",
                class: P(["fs-3 fw-semibold text-decoration-underline pe-0", `text-${e.color}-dark`]),
                variant: "link",
                size: "sm",
                href: t.appTermsUrl,
                rel: "noopener noreferrer",
                target: "_blank",
                text: "Termos de Uso",
                disabled: null
            }, null, 8, ["class", "href"]), s[16] || (s[16] = M(" e ")), i(T, {
                tag: "a",
                class: P(["fs-3 fw-semibold text-decoration-underline ps-0", `text-${e.color}-dark`]),
                variant: "link",
                size: "sm",
                href: t.appPrivacyUrl,
                rel: "noopener noreferrer",
                target: "_blank",
                text: "Política de Privacidade",
                disabled: null
            }, null, 8, ["class", "href"])])])) : k("", !0), !t.showResetPasswordForm && t.companies.length && !t.companyHash ? (m(),
            v("div", je, [o("div", Oe, [o("a", {
                class: "pull-right",
                style: {
                    "margin-right": "10px"
                },
                onClick: s[10] || (s[10] = _( (...d) => a.hidePasswordResetFormSettings && a.hidePasswordResetFormSettings(...d), ["prevent"]))
            }, h(e.$t("login.back")), 1)]), o("form", {
                onSubmit: s[11] || (s[11] = _( (...d) => a.login && a.login(...d), ["prevent"]))
            }, [t.companyHash ? k("", !0) : (m(),
            v("div", We, [o("label", null, h(e.$t("login.pick_company")) + ":", 1), i(N, {
                ref: "companySelect",
                useSelectionLabels: !1,
                options: t.companies,
                trackBy: "hash",
                label: "name",
                onSelect: a.selectCompany,
                openDirection: "bottom",
                "data-testid": "selector-company"
            }, null, 8, ["options", "onSelect"])]))], 32)])) : k("", !0), U(o("div", Je, [o("form", {
                onSubmit: s[12] || (s[12] = _( () => {}
                , ["prevent"]))
            }, [o("div", Ke, [o("span", null, h(e.$t("login.logging_in")) + "...", 1), i(A)])], 32)], 512), [[I, !t.showResetPasswordForm && t.companyHash]]), t.showResetPasswordForm ? (m(),
            v("div", Ge, [o("div", null, [i(E, {
                ref: "email",
                modelValue: t.data.login,
                "onUpdate:modelValue": s[13] || (s[13] = d => t.data.login = d),
                label: e.$t("login.forgot_label"),
                required: "",
                autocomplete: "on"
            }, null, 8, ["modelValue", "label"]), i(u, {
                class: "lh-1 mt-3",
                text: e.$t("login.forgot_message"),
                fontSize: "3"
            }, null, 8, ["text"]), o("a", {
                class: "back-to-login pull-right",
                onClick: s[14] || (s[14] = _( (...d) => a.hidePasswordResetFormSettings && a.hidePasswordResetFormSettings(...d), ["prevent"]))
            }, h(e.$t("login.back")), 1)]), o("button", {
                disabled: t.loading,
                class: "forgotpass-btn col-xs-12",
                onClick: _(d => a.handleRequestPasswordReset(b, R), ["prevent"])
            }, h(t.loading ? `${e.$t("login.wait")}...` : e.$t("login.request_pass")), 9, Qe)])) : k("", !0)]),
            _: 2
        }, 1024)]),
        _: 1
    }, 8, ["modelValue"])])])]), o("div", Ye, [s[17] || (s[17] = o("div", {
        class: "green-decoration-container bg-green-normal h-100 position-absolute w-25"
    }, null, -1)), i(g, {
        class: "product-img position-absolute",
        src: "homescreen/img-signin.png",
        alt: "Signin Image"
    }), o("div", Ze, [i(u, {
        class: "lh-1",
        text: `${new Date().getFullYear()} é o ano do sucesso comercial da sua empresa!`,
        fontSize: "8"
    }, null, 8, ["text"]), i(u, {
        class: "mb-4",
        text: "A Leads2b vai ajudar você a atingir os seus objetivos.",
        fontSize: "4"
    }), i(u, {
        text: "Que nós somos a ferramenta de vendas mais completa do mercado B2B é fato.",
        color: "gray",
        fontSize: "4"
    }), i(u, {
        text: "Porém preparamos ainda mais soluções para o seu time comercial ter:",
        color: "gray",
        fontSize: "4"
    }), o("div", Xe, [o("div", es, [i(w, {
        class: "bg-green-dark text-white p-2 me-2",
        style: {
            "border-radius": "50%"
        },
        variant: "",
        icon: "check-line"
    }), i(u, {
        tag: "span",
        text: "Performance",
        color: "green-dark",
        fontWeight: "bold",
        fontSize: "4"
    })]), o("div", ss, [i(w, {
        class: "bg-green-dark text-white p-2 me-2",
        style: {
            "border-radius": "50%"
        },
        variant: "",
        icon: "check-line"
    }), i(u, {
        tag: "span",
        text: "Assertividade ao fazer contato com os seus leads",
        color: "green-dark",
        fontWeight: "bold",
        fontSize: "4"
    })]), o("div", ts, [i(w, {
        class: "bg-green-dark text-white p-2 me-2",
        style: {
            "border-radius": "50%"
        },
        variant: "",
        icon: "check-line"
    }), i(u, {
        tag: "span",
        text: "Eficiência ao prospectar novos negócios",
        color: "green-dark",
        fontWeight: "bold",
        fontSize: "4"
    })])])])])])])
}
const ws = V(ye, [["render", os], ["__scopeId", "data-v-200f684c"]]);
export {ws as default};
