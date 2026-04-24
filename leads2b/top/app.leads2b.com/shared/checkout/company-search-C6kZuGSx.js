import {fz as I, t as l, p9 as P, pa as x, an as $, pb as E} from "../../common-CYe7udOS.js";
import {a1 as D, a$ as k, b0 as M, r as u, o as d, c, b as r, H as v, a as h, F as X, f as L, d as S, p as z, W as B, t as N} from "../../vendor-DIc2GtcL.js";
const R = {
    name: "password-form",
    mixins: [I],
    props: {
        data: {
            type: Object,
            required: !0
        },
        show: {
            type: Boolean,
            default: !1
        },
        isCheckout: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["verified", "close"],
    data() {
        return {
            phone: null,
            name: null,
            step: "phoneInput",
            triedPhones: [],
            provideNewPhoneNumber: !1,
            formErrors: {},
            timer: 180,
            newPhoneNumber: null,
            code: [null, null, null, null, null, null],
            waitToResendCode: !1,
            isVerifying: !1,
            intervalId: null,
            captchaToken: null,
            tryLimitExceeded: !1,
            sendingCode: !1
        }
    },
    mounted() {
        this.waitToResendCode = !0,
        l.track("Validação de Telefone - Iniciada")
    },
    computed: {
        attemptiesRemaining() {
            var t;
            return 3 - (((t = this.triedPhones.find(n => n.phone === this.phoneNumber)) == null ? void 0 : t.attempties) || 0)
        },
        phoneNumber() {
            return this.newPhoneNumber || this.phone
        },
        isPhoneStep() {
            return this.step === "phoneInput"
        },
        isAllNumbersFilled() {
            return this.code.some(e => !(e || e === 0))
        },
        title() {
            const e = this.isPhoneStep ? "signup.verifyCode.title_phone_step" : "signup.verifyCode.title";
            return `<span class="fw-bold">${this.name},</span> ${this.$t(e)}`
        },
        subtitle() {
            var t;
            if (this.isPhoneStep)
                return this.$t("signup.verifyCode.subtitle_phone_step");
            if (((t = this.phone) == null ? void 0 : t.length) < 2)
                return "";
            const e = k(`+55${this.phone}`);
            return `${this.$t("signup.verifyCode.subtitle")} <span class='fw-semibold'>${e.formatNational()}</span>`
        },
        inputLabel() {
            return this.isPhoneStep ? this.$t("signup.verifyCode.phone") : this.$t("signup.verifyCode.verify_code")
        },
        sendedCodeText() {
            return `${this.$t("signup.verifyCode.sended_code")} <span class="text-green-normal fw-semibold">${this.countdown} min</span>`
        },
        isValidPhoneNumber() {
            if (!this.phoneNumber || this.phoneNumber.length < 3)
                return !1;
            try {
                const e = k(`+55${this.phoneNumber}`);
                return M(e.formatNational(), "BR") && this.phoneNumber.length > 9
            } catch {
                return !1
            }
        },
        countdown() {
            const t = this.timer
              , n = Math.floor(t / 60)
              , o = t % 60;
            return `${n}:${o < 10 ? `0${o}` : o}`
        },
        captchaVerified() {
            return !!this.captchaToken
        }
    },
    watch: {
        captchaVerified(e) {
            e && this.handleSendVerificationCode()
        },
        show(e) {
            e && this.$nextTick( () => {
                this.phone = this.data.phone,
                this.name = this.data.name
            }
            )
        }
    },
    methods: {
        getCaptchaToken() {
            this.$refs.recaptchaPhoneVerificationModal.reset(),
            this.captchaToken = null,
            this.$refs.recaptchaPhoneVerificationModal.execute()
        },
        async handleSendVerificationCode() {
            var e;
            try {
                this.sendingCode = !0,
                this.triedPhones.filter(t => t.phone === this.phoneNumber).length > 0 ? (await P(this.phoneNumber, this.captchaToken),
                l.track("Validação de Telefone - Código Reenviado", {
                    phone: this.phoneNumber
                })) : (await x(this.phoneNumber, this.captchaToken),
                l.track("Validação de Telefone - Código Enviado", {
                    phone: this.phoneNumber
                }),
                this.step === "phoneInput" && (this.phone = this.newPhoneNumber,
                this.step = "codeInput",
                this.initTimer()),
                this.triedPhones.push({
                    phone: this.phoneNumber,
                    attempties: 0
                }))
            } catch (t) {
                const n = (e = t == null ? void 0 : t.response) == null ? void 0 : e.data
                  , o = (n == null ? void 0 : n.message) || "";
                let i = this.$t("signup.messages.error.send_verify_code");
                o === "send verification code interval" && (i = this.$t("signup.messages.error.verification-code-interval")),
                o === "already used phone number" && (i = this.$t("signup.messages.error.used_phone")),
                this.$notification.notifyError(i),
                l.track("Validação de Telefone - Erro ao enviar código", {
                    phone: this.phoneNumber,
                    errorMessage: o
                }),
                this.waitToResendCode = !1
            } finally {
                this.sendingCode = !1
            }
        },
        handleError() {
            this.$notification.notifyError("signup.messages.error.captcha")
        },
        phoneMask(e) {
            return $(e)
        },
        cleanCode() {
            this.code = [null, null, null, null, null, null],
            this.$refs.codeInput0[0].focus()
        },
        async verify() {
            var e, t;
            try {
                const n = await E({
                    phone: this.phoneNumber,
                    code: this.code.join("")
                });
                (e = n == null ? void 0 : n.data) != null && e.verified ? (this.$emit("verified", {
                    phone: this.phoneNumber
                }),
                l.track("Validação de Telefone - Finalizada")) : (l.track("Validação de Telefone - Tentativa inválida", {
                    phone: this.phoneNumber
                }),
                this.$notification.notifyError("signup.messages.error.invalid_code"),
                this.cleanCode(),
                this.triedPhones.find(o => o.phone === this.phoneNumber).attempties += 1,
                this.triedPhones.find(o => o.phone === this.phoneNumber).attempties === 3 && (this.tryLimitExceeded = !0,
                l.track("Validação de Telefone - Tentativas excedidas")))
            } catch (n) {
                const o = (t = n == null ? void 0 : n.response) == null ? void 0 : t.data
                  , i = (o == null ? void 0 : o.message) || "";
                i === "wrong phone or verification code" ? (l.track("Validação de Telefone - Tentativa inválida", {
                    phone: this.phoneNumber
                }),
                this.$notification.notifyError("signup.messages.error.invalid_code")) : i === "maximum attempts exceeded" ? (this.tryLimitExceeded = !0,
                l.track("Validação de Telefone - Tentativas excedidas")) : (l.track("Validação de Telefone - Erro ao validar código", {
                    phone: this.phoneNumber,
                    errorMessage: i
                }),
                this.$notification.notifyError("signup.messages.error.code"))
            }
        },
        onKeyDown(e, t) {
            if (e.key === "Backspace") {
                const n = this.code;
                if (n[t] = null,
                this.code = [...n],
                t > 0) {
                    const o = `codeInput${t - 1}`;
                    this.$refs[o][0].focus()
                }
            }
        },
        onInputCode(e, t) {
            var o;
            if (e.inputType !== "deleteContentBackward") {
                const i = parseInt(e.data, 10);
                if (t !== 5 && ((o = e.data) != null && o.length)) {
                    const f = `codeInput${t + 1}`;
                    this.$refs[f][0].focus(),
                    this.$refs[f][0].select()
                }
                const s = this.code;
                s[t] = i,
                this.code = [...s]
            }
            const n = `codeInput${t}`;
            this.$refs[n][0].value = this.code[t]
        },
        initTimer() {
            this.intervalId && clearInterval(this.intervalId);
            const e = 60;
            this.timer = e * 3,
            this.intervalId = setInterval(this.updateTime, 1e3)
        },
        updateTime() {
            this.timer -= 1,
            this.timer === 0 && (this.waitToResendCode = !1,
            clearInterval(this.intervalId))
        },
        async resendCode() {
            this.phone = this.newPhoneNumber,
            this.waitToResendCode = !0,
            this.provideNewPhoneNumber = !1,
            this.initTimer(),
            this.getCaptchaToken()
        }
    }
}
  , F = {
    id: "verify-phone-code-form"
}
  , H = {
    key: 0
}
  , K = {
    key: 1
}
  , U = {
    key: 0
}
  , W = {
    key: 1
}
  , j = {
    class: "container p-0 ms-n1",
    style: {
        "max-width": "520px"
    }
}
  , q = {
    class: "row m-0"
}
  , A = {
    class: "text-center my-2"
}
  , G = ["value", "onInput", "onKeydown"]
  , O = {
    key: 0,
    class: "d-inline-block border border-green-normal px-2 py-1 rounded-1"
}
  , J = {
    class: "d-flex align-items-center"
}
  , Q = {
    key: 2
};
function Y(e, t, n, o, i, s) {
    const f = u("VueImage")
      , p = u("DsTypography")
      , g = u("DsButton")
      , C = u("DsFormGroup")
      , w = u("DsIcon")
      , T = u("DsCard")
      , _ = u("ChallengeV2")
      , V = u("DsModal");
    return d(),
    c("div", null, [r(V, {
        show: n.show,
        size: "md",
        appendToBody: "",
        bodyClass: "py-1",
        onHide: t[5] || (t[5] = m => e.$emit("close"))
    }, {
        body: v( () => [h("div", F, [r(T, {
            class: "new-form border-0 pb-5"
        }, {
            default: v( () => {
                var m;
                return [r(f, {
                    src: "logo_gtm_black.png",
                    alt: "Leads2b Logo",
                    class: "logo mx-auto d-block"
                }), h("div", null, [i.tryLimitExceeded ? (d(),
                c("div", H, [h("div", null, [r(p, {
                    fontSize: "3",
                    class: "mt-5",
                    text: n.isCheckout ? e.$t("signup.verifyCode.tryLimitExceeded") : e.$t("signup.verifyCode.tryLimitExceededProspect")
                }, null, 8, ["text"])]), r(g, {
                    text: e.$t("signup.verifyCode.restart"),
                    size: "lg",
                    class: "py-3 px-6",
                    onClick: t[0] || (t[0] = a => e.$emit("close"))
                }, null, 8, ["text"])])) : (d(),
                c("div", K, [r(p, {
                    fontSize: "5",
                    class: "lh-base mt-3",
                    innerHTML: s.title
                }, null, 8, ["innerHTML"]), r(p, {
                    fontSize: "3",
                    class: "lh-base mt-3",
                    innerHTML: s.subtitle
                }, null, 8, ["innerHTML"]), r(p, {
                    fontSize: "3",
                    class: "lh-base mt-3 mb-2",
                    fontWeight: "bold",
                    text: s.inputLabel
                }, null, 8, ["text"]), h("div", null, [s.isPhoneStep ? (d(),
                c("div", U, [r(C, {
                    class: "mb-3",
                    inputClass: "bg-white",
                    modelValue: i.phone,
                    mask: s.phoneMask(),
                    placeholder: "(DDD) XXXXX-XXXX",
                    hasError: !s.isValidPhoneNumber && ((m = s.phoneNumber) == null ? void 0 : m.length) > 0,
                    ref: "phoneInput",
                    cleanValue: "",
                    "onUpdate:modelValue": t[1] || (t[1] = a => i.newPhoneNumber = a)
                }, null, 8, ["modelValue", "mask", "hasError"]), r(g, {
                    text: e.$t("signup.verifyCode.next"),
                    rightIcon: "arrow-right-line",
                    size: "lg",
                    class: "my-3 py-3 px-6",
                    onClick: s.getCaptchaToken,
                    disabled: !s.isValidPhoneNumber,
                    loading: i.sendingCode
                }, null, 8, ["text", "onClick", "disabled", "loading"])])) : (d(),
                c("div", W, [h("div", j, [h("div", q, [(d(!0),
                c(X, null, L(i.code, (a, b) => (d(),
                c("div", {
                    class: "code-input-container col-2 px-1",
                    key: b
                }, [h("div", A, [h("input", {
                    type: "number",
                    onClick: "this.select()",
                    ref_for: !0,
                    ref: `codeInput${b}`,
                    class: S([[{
                        "border-green-normal bg-green-light": a || a === 0
                    }, {
                        "border-gray-500": !(a || a === 0)
                    }], "code-input cursor-pointer text-center fs-9 fw-bold rounded-1 border w-100"]),
                    value: a,
                    onInput: y => s.onInputCode(y, b),
                    onKeydown: y => s.onKeyDown(y, b)
                }, null, 42, G)])]))), 128))])]), r(p, {
                    fontSize: "3",
                    class: "lh-base",
                    text: e.$t("signup.verifyCode.remaining_attempts", {
                        qty: s.attemptiesRemaining
                    })
                }, null, 8, ["text"]), r(g, {
                    text: e.$t("signup.verifyCode.next"),
                    rightIcon: "arrow-right-line",
                    size: "lg",
                    class: "my-3 py-3 px-6",
                    onClick: s.verify,
                    disabled: s.isAllNumbersFilled
                }, null, 8, ["text", "onClick", "disabled"]), i.waitToResendCode ? (d(),
                c("div", O, [h("div", J, [r(p, {
                    tag: "span",
                    fontSize: "3",
                    class: "lh-base",
                    color: "gray",
                    innerHTML: s.sendedCodeText
                }, null, 8, ["innerHTML"]), r(w, {
                    class: "text-green-normal ms-2",
                    icon: "timer-line"
                })])])) : i.provideNewPhoneNumber ? (d(),
                c("div", Q, [r(C, {
                    id: "phone",
                    class: "mb-3",
                    inputClass: "bg-white",
                    modelValue: i.phone,
                    mask: s.phoneMask(),
                    placeholder: "(DDD) XXXXX-XXXX",
                    label: e.$t("signup.verifyCode.confirm_number"),
                    hasError: !s.isValidPhoneNumber,
                    cleanValue: "",
                    ref: "phoneInput",
                    "onUpdate:modelValue": t[3] || (t[3] = a => i.newPhoneNumber = a)
                }, null, 8, ["modelValue", "mask", "label", "hasError"]), r(g, {
                    text: e.$t("signup.verifyCode.resend_code"),
                    rightIcon: "arrow-right-line",
                    variant: "green-light",
                    disabled: !s.isValidPhoneNumber,
                    onClick: s.resendCode
                }, null, 8, ["text", "disabled", "onClick"])])) : (d(),
                z(p, {
                    key: 1,
                    fontSize: "3",
                    class: "lh-base mt-3"
                }, {
                    default: v( () => [B(N(e.$t("signup.verifyCode.pending_code")) + " ", 1), h("span", {
                        onClick: t[2] || (t[2] = a => i.provideNewPhoneNumber = !0),
                        class: "text-green-normal fw-semibold cursor-pointer"
                    }, N(e.$t("signup.verifyCode.resend_code")), 1)]),
                    _: 1
                }))]))])]))])]
            }
            ),
            _: 1
        }), r(_, {
            ref: "recaptchaPhoneVerificationModal",
            modelValue: i.captchaToken,
            "onUpdate:modelValue": t[4] || (t[4] = m => i.captchaToken = m),
            autoExecute: !1
        }, null, 8, ["modelValue"])])]),
        _: 1
    }, 8, ["show"])])
}
const te = D(R, [["render", Y], ["__scopeId", "data-v-1d45b95d"]]);
export {te as V};
