import {g as B} from "./vendor-DIc2GtcL.js";
var c = {
    exports: {}
};
/**
 * @name creditcard.js 3.0.29
 * @license MIT
 * @author ContaAzul (contaazul.com)
 */
(function(S, f) {
    (function(i, u) {
        u(f)
    }
    )(B, function(i) {
        var u = [{
            name: "Banescard",
            bins: /^(603182)[0-9]{10,12}/,
            codeLength: 3
        }, {
            name: "Maxxvan",
            bins: /^(603182)[0-9]{10,12}/,
            codeLength: 3
        }, {
            name: "Cabal",
            bins: /^(604324|604330|604337|604203|604338)[0-9]{10,12}/,
            codeLength: 3
        }, {
            name: "GoodCard",
            bins: /^(606387|605680|605674|603574)[0-9]{10,12}/,
            codeLength: 3
        }, {
            name: "Elo",
            bins: /^(401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636368|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(6509[0-9])|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12}/,
            codeLength: 3
        }, {
            name: "Diners",
            bins: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            codeLength: 3
        }, {
            name: "Discover",
            bins: /^6(?:011|5[0-9]{2}|4[4-9][0-9]{1}|(22(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5]$)[0-9]{10}$))[0-9]{12}$/,
            codeLength: 4
        }, {
            name: "Amex",
            bins: /^3[47][0-9]{13}$/,
            codeLength: 4
        }, {
            name: "Aura",
            bins: /^50[0-9]{14,17}$/,
            codeLength: 3
        }, {
            name: "Mastercard",
            bins: /^(603136|603689|608619|606200|603326|605919|608783|607998|603690|604891|603600|603134|608718|603680|608710|604998)|(5[1-5][0-9]{14}|2221[0-9]{12}|222[2-9][0-9]{12}|22[3-9][0-9]{13}|2[3-6][0-9]{14}|27[01][0-9]{13}|2720[0-9]{12})$/,
            codeLength: 3
        }, {
            name: "Visa",
            bins: /^4[0-9]{12}(?:[0-9]{3})?$/,
            codeLength: 3
        }, {
            name: "Hipercard",
            bins: /^(38[0-9]{17}|60[0-9]{14})$/,
            codeLength: 3
        }, {
            name: "JCB",
            bins: /^(?:2131|1800|35\d{3})\d{11}$/,
            codeLength: 3
        }]
          , o = 1e3
          , v = 3
          , l = function(n) {
            return g(n).name || "Credit card is invalid!"
        }
          , C = function(n, r) {
            var t = $(n);
            return new RegExp("^[0-9]{".concat(t, "}$")).test(r)
        }
          , h = function(n, r) {
            return x(n) && Y(r) && M(n, r)
        }
          , L = function(n) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , t = r.cards
              , a = D(n);
            if (V(n) || !N(a))
                return !1;
            var d = y(a);
            return w(d) && b(n, t)
        };
        function b(e, n) {
            return !n || !n.length || p(e, n)
        }
        function p(e, n) {
            return E(n) && n.map(function(r) {
                return r.toLowerCase()
            }).includes(l(e).toLowerCase())
        }
        function N(e) {
            return e && e.length <= 19
        }
        function D(e) {
            return e.replace(/\D/g, "")
        }
        function V(e) {
            var n = new RegExp("[^0-9- ]");
            return n.test(e)
        }
        function w(e) {
            return e > 0 && e % 10 === 0
        }
        function E(e) {
            var n = u.map(function(r) {
                return r.name.toLowerCase()
            });
            return e.every(function(r) {
                return n.includes(r.toLowerCase())
            })
        }
        function g(e) {
            if (!e)
                return {};
            var n = e.replace(/[^\d]/g, "");
            return u.find(function(r) {
                return r.bins.test(n) && r
            }) || {}
        }
        function $(e) {
            return g(e).codeLength || v
        }
        function x(e) {
            return !isNaN(e) && e >= 1 && e <= 12
        }
        function Y(e) {
            return !isNaN(e) && F(m(e))
        }
        function m(e) {
            return e.length === 2 ? s(e) : e.length === 4 ? e : 0
        }
        function s() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0
              , n = parseInt(e)
              , r = new Date;
            return Math.floor(r.getFullYear() / o) * o + n
        }
        function F(e) {
            return e >= s() && e <= s(o)
        }
        function M(e, n) {
            var r = m(n)
              , t = new Date
              , a = new Date;
            return t.setFullYear(t.getFullYear(), t.getMonth(), 1),
            a.setFullYear(r, e - 1, 1),
            t <= a
        }
        function y(e) {
            for (var n = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9], r = 0, t = 0, a = e.length, d = !0; a--; )
                t = Number(e[a]),
                r += (d = !d) ? n[t] : t;
            return r
        }
        i.getCreditCardNameByNumber = l,
        i.isExpirationDateValid = h,
        i.isSecurityCodeValid = C,
        i.isValid = L,
        Object.defineProperty(i, "__esModule", {
            value: !0
        })
    })
}
)(c, c.exports);
var R = c.exports;
export {R as c};
