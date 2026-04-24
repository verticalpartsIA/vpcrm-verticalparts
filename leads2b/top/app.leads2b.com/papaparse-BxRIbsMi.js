import {g as me, h as ge} from "./vendor-DIc2GtcL.js";
var de = {
    exports: {}
};
/* @license
Papa Parse
v5.1.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(le, _e) {
    (function(oe, b) {
        le.exports = b()
    }
    )(me, function oe() {
        var b = typeof self < "u" ? self : typeof window < "u" ? window : b !== void 0 ? b : {}
          , J = !b.document && !!b.postMessage
          , ie = J && /blob:/i.test((b.location || {}).protocol)
          , V = {}
          , ce = 0
          , f = {
            parse: function(t, e) {
                var r = (e = e || {}).dynamicTyping || !1;
                if (v(r) && (e.dynamicTypingFunction = r,
                r = {}),
                e.dynamicTyping = r,
                e.transform = !!v(e.transform) && e.transform,
                e.worker && f.WORKERS_SUPPORTED) {
                    var n = function() {
                        if (!f.WORKERS_SUPPORTED)
                            return !1;
                        var d = (O = b.URL || b.webkitURL || null,
                        w = oe.toString(),
                        f.BLOB_URL || (f.BLOB_URL = O.createObjectURL(new Blob(["(", w, ")();"],{
                            type: "text/javascript"
                        })))), c = new b.Worker(d), O, w;
                        return c.onmessage = pe,
                        c.id = ce++,
                        V[c.id] = c
                    }();
                    return n.userStep = e.step,
                    n.userChunk = e.chunk,
                    n.userComplete = e.complete,
                    n.userError = e.error,
                    e.step = v(e.step),
                    e.chunk = v(e.chunk),
                    e.complete = v(e.complete),
                    e.error = v(e.error),
                    delete e.worker,
                    void n.postMessage({
                        input: t,
                        config: e,
                        workerId: n.id
                    })
                }
                var a = null;
                return f.NODE_STREAM_INPUT,
                typeof t == "string" ? a = e.download ? new ee(e) : new Y(e) : t.readable === !0 && v(t.read) && v(t.on) ? a = new re(e) : (b.File && t instanceof File || t instanceof Object) && (a = new te(e)),
                a.stream(t)
            },
            unparse: function(t, e) {
                var r = !1
                  , n = !0
                  , a = ","
                  , d = `\r
`
                  , c = '"'
                  , O = c + c
                  , w = !1
                  , s = null;
                (function() {
                    if (typeof e == "object") {
                        if (typeof e.delimiter != "string" || f.BAD_DELIMITERS.filter(function(i) {
                            return e.delimiter.indexOf(i) !== -1
                        }).length || (a = e.delimiter),
                        (typeof e.quotes == "boolean" || typeof e.quotes == "function" || Array.isArray(e.quotes)) && (r = e.quotes),
                        typeof e.skipEmptyLines != "boolean" && typeof e.skipEmptyLines != "string" || (w = e.skipEmptyLines),
                        typeof e.newline == "string" && (d = e.newline),
                        typeof e.quoteChar == "string" && (c = e.quoteChar),
                        typeof e.header == "boolean" && (n = e.header),
                        Array.isArray(e.columns)) {
                            if (e.columns.length === 0)
                                throw new Error("Option columns is empty");
                            s = e.columns
                        }
                        e.escapeChar !== void 0 && (O = e.escapeChar + c)
                    }
                }
                )();
                var C = new RegExp(X(c),"g");
                if (typeof t == "string" && (t = JSON.parse(t)),
                Array.isArray(t)) {
                    if (!t.length || Array.isArray(t[0]))
                        return U(null, t, w);
                    if (typeof t[0] == "object")
                        return U(s || o(t[0]), t, w)
                } else if (typeof t == "object")
                    return typeof t.data == "string" && (t.data = JSON.parse(t.data)),
                    Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields),
                    t.fields || (t.fields = Array.isArray(t.data[0]) ? t.fields : o(t.data[0])),
                    Array.isArray(t.data[0]) || typeof t.data[0] == "object" || (t.data = [t.data])),
                    U(t.fields || [], t.data || [], w);
                throw new Error("Unable to serialize unrecognized input");
                function o(i) {
                    if (typeof i != "object")
                        return [];
                    var g = [];
                    for (var k in i)
                        g.push(k);
                    return g
                }
                function U(i, g, k) {
                    var A = "";
                    typeof i == "string" && (i = JSON.parse(i)),
                    typeof g == "string" && (g = JSON.parse(g));
                    var D = Array.isArray(i) && 0 < i.length
                      , x = !Array.isArray(g[0]);
                    if (D && n) {
                        for (var S = 0; S < i.length; S++)
                            0 < S && (A += a),
                            A += T(i[S], S);
                        0 < g.length && (A += d)
                    }
                    for (var h = 0; h < g.length; h++) {
                        var m = D ? i.length : g[h].length
                          , _ = !1
                          , y = D ? Object.keys(g[h]).length === 0 : g[h].length === 0;
                        if (k && !D && (_ = k === "greedy" ? g[h].join("").trim() === "" : g[h].length === 1 && g[h][0].length === 0),
                        k === "greedy" && D) {
                            for (var p = [], l = 0; l < m; l++) {
                                var R = x ? i[l] : l;
                                p.push(g[h][R])
                            }
                            _ = p.join("").trim() === ""
                        }
                        if (!_) {
                            for (var u = 0; u < m; u++) {
                                0 < u && !y && (A += a);
                                var I = D && x ? i[u] : u;
                                A += T(g[h][I], u)
                            }
                            h < g.length - 1 && (!k || 0 < m && !y) && (A += d)
                        }
                    }
                    return A
                }
                function T(i, g) {
                    if (i == null)
                        return "";
                    if (i.constructor === Date)
                        return JSON.stringify(i).slice(1, 25);
                    var k = i.toString().replace(C, O)
                      , A = typeof r == "boolean" && r || typeof r == "function" && r(i, g) || Array.isArray(r) && r[g] || function(D, x) {
                        for (var S = 0; S < x.length; S++)
                            if (-1 < D.indexOf(x[S]))
                                return !0;
                        return !1
                    }(k, f.BAD_DELIMITERS) || -1 < k.indexOf(a) || k.charAt(0) === " " || k.charAt(k.length - 1) === " ";
                    return A ? c + k + c : k
                }
            }
        };
        if (f.RECORD_SEP = "",
        f.UNIT_SEP = "",
        f.BYTE_ORDER_MARK = "\uFEFF",
        f.BAD_DELIMITERS = ["\r", `
`, '"', f.BYTE_ORDER_MARK],
        f.WORKERS_SUPPORTED = !J && !!b.Worker,
        f.NODE_STREAM_INPUT = 1,
        f.LocalChunkSize = 10485760,
        f.RemoteChunkSize = 5242880,
        f.DefaultDelimiter = ",",
        f.Parser = ne,
        f.ParserHandle = he,
        f.NetworkStreamer = ee,
        f.FileStreamer = te,
        f.StringStreamer = Y,
        f.ReadableStreamStreamer = re,
        b.jQuery) {
            var $ = b.jQuery;
            $.fn.parse = function(t) {
                var e = t.config || {}
                  , r = [];
                return this.each(function(d) {
                    if (!($(this).prop("tagName").toUpperCase() === "INPUT" && $(this).attr("type").toLowerCase() === "file" && b.FileReader) || !this.files || this.files.length === 0)
                        return !0;
                    for (var c = 0; c < this.files.length; c++)
                        r.push({
                            file: this.files[c],
                            inputElem: this,
                            instanceConfig: $.extend({}, e)
                        })
                }),
                n(),
                this;
                function n() {
                    if (r.length !== 0) {
                        var d, c, O, w, s = r[0];
                        if (v(t.before)) {
                            var C = t.before(s.file, s.inputElem);
                            if (typeof C == "object") {
                                if (C.action === "abort")
                                    return d = "AbortError",
                                    c = s.file,
                                    O = s.inputElem,
                                    w = C.reason,
                                    void (v(t.error) && t.error({
                                        name: d
                                    }, c, O, w));
                                if (C.action === "skip")
                                    return void a();
                                typeof C.config == "object" && (s.instanceConfig = $.extend(s.instanceConfig, C.config))
                            } else if (C === "skip")
                                return void a()
                        }
                        var o = s.instanceConfig.complete;
                        s.instanceConfig.complete = function(U) {
                            v(o) && o(U, s.file, s.inputElem),
                            a()
                        }
                        ,
                        f.parse(s.file, s.instanceConfig)
                    } else
                        v(t.complete) && t.complete()
                }
                function a() {
                    r.splice(0, 1),
                    n()
                }
            }
        }
        function N(t) {
            this._handle = null,
            this._finished = !1,
            this._completed = !1,
            this._halted = !1,
            this._input = null,
            this._baseIndex = 0,
            this._partialLine = "",
            this._rowCount = 0,
            this._start = 0,
            this._nextChunk = null,
            this.isFirstChunk = !0,
            this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            },
            (function(e) {
                var r = se(e);
                r.chunkSize = parseInt(r.chunkSize),
                e.step || e.chunk || (r.chunkSize = null),
                this._handle = new he(r),
                (this._handle.streamer = this)._config = r
            }
            ).call(this, t),
            this.parseChunk = function(e, r) {
                if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
                    var n = this._config.beforeFirstChunk(e);
                    n !== void 0 && (e = n)
                }
                this.isFirstChunk = !1,
                this._halted = !1;
                var a = this._partialLine + e;
                this._partialLine = "";
                var d = this._handle.parse(a, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var c = d.meta.cursor;
                    this._finished || (this._partialLine = a.substring(c - this._baseIndex),
                    this._baseIndex = c),
                    d && d.data && (this._rowCount += d.data.length);
                    var O = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (ie)
                        b.postMessage({
                            results: d,
                            workerId: f.WORKER_ID,
                            finished: O
                        });
                    else if (v(this._config.chunk) && !r) {
                        if (this._config.chunk(d, this._handle),
                        this._handle.paused() || this._handle.aborted())
                            return void (this._halted = !0);
                        d = void 0,
                        this._completeResults = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(d.data),
                    this._completeResults.errors = this._completeResults.errors.concat(d.errors),
                    this._completeResults.meta = d.meta),
                    this._completed || !O || !v(this._config.complete) || d && d.meta.aborted || (this._config.complete(this._completeResults, this._input),
                    this._completed = !0),
                    O || d && d.meta.paused || this._nextChunk(),
                    d
                }
                this._halted = !0
            }
            ,
            this._sendError = function(e) {
                v(this._config.error) ? this._config.error(e) : ie && this._config.error && b.postMessage({
                    workerId: f.WORKER_ID,
                    error: e,
                    finished: !1
                })
            }
        }
        function ee(t) {
            var e;
            (t = t || {}).chunkSize || (t.chunkSize = f.RemoteChunkSize),
            N.call(this, t),
            this._nextChunk = J ? function() {
                this._readChunk(),
                this._chunkLoaded()
            }
            : function() {
                this._readChunk()
            }
            ,
            this.stream = function(r) {
                this._input = r,
                this._nextChunk()
            }
            ,
            this._readChunk = function() {
                if (this._finished)
                    this._chunkLoaded();
                else {
                    if (e = new XMLHttpRequest,
                    this._config.withCredentials && (e.withCredentials = this._config.withCredentials),
                    J || (e.onload = H(this._chunkLoaded, this),
                    e.onerror = H(this._chunkError, this)),
                    e.open("GET", this._input, !J),
                    this._config.downloadRequestHeaders) {
                        var r = this._config.downloadRequestHeaders;
                        for (var n in r)
                            e.setRequestHeader(n, r[n])
                    }
                    if (this._config.chunkSize) {
                        var a = this._start + this._config.chunkSize - 1;
                        e.setRequestHeader("Range", "bytes=" + this._start + "-" + a)
                    }
                    try {
                        e.send()
                    } catch (d) {
                        this._chunkError(d.message)
                    }
                    J && e.status === 0 && this._chunkError()
                }
            }
            ,
            this._chunkLoaded = function() {
                e.readyState === 4 && (e.status < 200 || 400 <= e.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : e.responseText.length,
                this._finished = !this._config.chunkSize || this._start >= function(r) {
                    var n = r.getResponseHeader("Content-Range");
                    return n === null ? -1 : parseInt(n.substring(n.lastIndexOf("/") + 1))
                }(e),
                this.parseChunk(e.responseText)))
            }
            ,
            this._chunkError = function(r) {
                var n = e.statusText || r;
                this._sendError(new Error(n))
            }
        }
        function te(t) {
            var e, r;
            (t = t || {}).chunkSize || (t.chunkSize = f.LocalChunkSize),
            N.call(this, t);
            var n = typeof FileReader < "u";
            this.stream = function(a) {
                this._input = a,
                r = a.slice || a.webkitSlice || a.mozSlice,
                n ? ((e = new FileReader).onload = H(this._chunkLoaded, this),
                e.onerror = H(this._chunkError, this)) : e = new FileReaderSync,
                this._nextChunk()
            }
            ,
            this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
            }
            ,
            this._readChunk = function() {
                var a = this._input;
                if (this._config.chunkSize) {
                    var d = Math.min(this._start + this._config.chunkSize, this._input.size);
                    a = r.call(a, this._start, d)
                }
                var c = e.readAsText(a, this._config.encoding);
                n || this._chunkLoaded({
                    target: {
                        result: c
                    }
                })
            }
            ,
            this._chunkLoaded = function(a) {
                this._start += this._config.chunkSize,
                this._finished = !this._config.chunkSize || this._start >= this._input.size,
                this.parseChunk(a.target.result)
            }
            ,
            this._chunkError = function() {
                this._sendError(e.error)
            }
        }
        function Y(t) {
            var e;
            N.call(this, t = t || {}),
            this.stream = function(r) {
                return e = r,
                this._nextChunk()
            }
            ,
            this._nextChunk = function() {
                if (!this._finished) {
                    var r, n = this._config.chunkSize;
                    return n ? (r = e.substring(0, n),
                    e = e.substring(n)) : (r = e,
                    e = ""),
                    this._finished = !e,
                    this.parseChunk(r)
                }
            }
        }
        function re(t) {
            N.call(this, t = t || {});
            var e = []
              , r = !0
              , n = !1;
            this.pause = function() {
                N.prototype.pause.apply(this, arguments),
                this._input.pause()
            }
            ,
            this.resume = function() {
                N.prototype.resume.apply(this, arguments),
                this._input.resume()
            }
            ,
            this.stream = function(a) {
                this._input = a,
                this._input.on("data", this._streamData),
                this._input.on("end", this._streamEnd),
                this._input.on("error", this._streamError)
            }
            ,
            this._checkIsFinished = function() {
                n && e.length === 1 && (this._finished = !0)
            }
            ,
            this._nextChunk = function() {
                this._checkIsFinished(),
                e.length ? this.parseChunk(e.shift()) : r = !0
            }
            ,
            this._streamData = H(function(a) {
                try {
                    e.push(typeof a == "string" ? a : a.toString(this._config.encoding)),
                    r && (r = !1,
                    this._checkIsFinished(),
                    this.parseChunk(e.shift()))
                } catch (d) {
                    this._streamError(d)
                }
            }, this),
            this._streamError = H(function(a) {
                this._streamCleanUp(),
                this._sendError(a)
            }, this),
            this._streamEnd = H(function() {
                this._streamCleanUp(),
                n = !0,
                this._streamData("")
            }, this),
            this._streamCleanUp = H(function() {
                this._input.removeListener("data", this._streamData),
                this._input.removeListener("end", this._streamEnd),
                this._input.removeListener("error", this._streamError)
            }, this)
        }
        function he(t) {
            var e, r, n, a = Math.pow(2, 53), d = -a, c = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, O = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/, w = this, s = 0, C = 0, o = !1, U = !1, T = [], i = {
                data: [],
                errors: [],
                meta: {}
            };
            if (v(t.step)) {
                var g = t.step;
                t.step = function(h) {
                    if (i = h,
                    D())
                        A();
                    else {
                        if (A(),
                        i.data.length === 0)
                            return;
                        s += h.data.length,
                        t.preview && s > t.preview ? r.abort() : (i.data = i.data[0],
                        g(i, w))
                    }
                }
            }
            function k(h) {
                return t.skipEmptyLines === "greedy" ? h.join("").trim() === "" : h.length === 1 && h[0].length === 0
            }
            function A() {
                if (i && n && (S("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"),
                n = !1),
                t.skipEmptyLines)
                    for (var h = 0; h < i.data.length; h++)
                        k(i.data[h]) && i.data.splice(h--, 1);
                return D() && function() {
                    if (!i)
                        return;
                    function m(y) {
                        v(t.transformHeader) && (y = t.transformHeader(y)),
                        T.push(y)
                    }
                    if (Array.isArray(i.data[0])) {
                        for (var _ = 0; D() && _ < i.data.length; _++)
                            i.data[_].forEach(m);
                        i.data.splice(0, 1)
                    } else
                        i.data.forEach(m)
                }(),
                function() {
                    if (!i || !t.header && !t.dynamicTyping && !t.transform)
                        return i;
                    function m(y, p) {
                        var l, R = t.header ? {} : [];
                        for (l = 0; l < y.length; l++) {
                            var u = l
                              , I = y[l];
                            t.header && (u = l >= T.length ? "__parsed_extra" : T[l]),
                            t.transform && (I = t.transform(I, u)),
                            I = x(u, I),
                            u === "__parsed_extra" ? (R[u] = R[u] || [],
                            R[u].push(I)) : R[u] = I
                        }
                        return t.header && (l > T.length ? S("FieldMismatch", "TooManyFields", "Too many fields: expected " + T.length + " fields but parsed " + l, C + p) : l < T.length && S("FieldMismatch", "TooFewFields", "Too few fields: expected " + T.length + " fields but parsed " + l, C + p)),
                        R
                    }
                    var _ = 1;
                    return !i.data.length || Array.isArray(i.data[0]) ? (i.data = i.data.map(m),
                    _ = i.data.length) : i.data = m(i.data, 0),
                    t.header && i.meta && (i.meta.fields = T),
                    C += _,
                    i
                }()
            }
            function D() {
                return t.header && T.length === 0
            }
            function x(h, m) {
                return _ = h,
                t.dynamicTypingFunction && t.dynamicTyping[_] === void 0 && (t.dynamicTyping[_] = t.dynamicTypingFunction(_)),
                (t.dynamicTyping[_] || t.dynamicTyping) === !0 ? m === "true" || m === "TRUE" || m !== "false" && m !== "FALSE" && (function(y) {
                    if (c.test(y)) {
                        var p = parseFloat(y);
                        if (d < p && p < a)
                            return !0
                    }
                    return !1
                }(m) ? parseFloat(m) : O.test(m) ? new Date(m) : m === "" ? null : m) : m;
                var _
            }
            function S(h, m, _, y) {
                var p = {
                    type: h,
                    code: m,
                    message: _
                };
                y !== void 0 && (p.row = y),
                i.errors.push(p)
            }
            this.parse = function(h, m, _) {
                var y = t.quoteChar || '"';
                if (t.newline || (t.newline = function(R, u) {
                    R = R.substring(0, 1048576);
                    var I = new RegExp(X(u) + "([^]*?)" + X(u),"gm")
                      , q = (R = R.replace(I, "")).split("\r")
                      , j = R.split(`
`)
                      , P = 1 < j.length && j[0].length < q[0].length;
                    if (q.length === 1 || P)
                        return `
`;
                    for (var B = 0, F = 0; F < q.length; F++)
                        q[F][0] === `
` && B++;
                    return B >= q.length / 2 ? `\r
` : "\r"
                }(h, y)),
                n = !1,
                t.delimiter)
                    v(t.delimiter) && (t.delimiter = t.delimiter(h),
                    i.meta.delimiter = t.delimiter);
                else {
                    var p = function(R, u, I, q, j) {
                        var P, B, F, G;
                        j = j || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
                        for (var L = 0; L < j.length; L++) {
                            var Q = j[L]
                              , Z = 0
                              , E = 0
                              , K = 0;
                            F = void 0;
                            for (var z = new ne({
                                comments: q,
                                delimiter: Q,
                                newline: u,
                                preview: 10
                            }).parse(R), W = 0; W < z.data.length; W++)
                                if (I && k(z.data[W]))
                                    K++;
                                else {
                                    var M = z.data[W].length;
                                    E += M,
                                    F !== void 0 ? 0 < M && (Z += Math.abs(M - F),
                                    F = M) : F = M
                                }
                            0 < z.data.length && (E /= z.data.length - K),
                            (B === void 0 || Z <= B) && (G === void 0 || G < E) && 1.99 < E && (B = Z,
                            P = Q,
                            G = E)
                        }
                        return {
                            successful: !!(t.delimiter = P),
                            bestDelimiter: P
                        }
                    }(h, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
                    p.successful ? t.delimiter = p.bestDelimiter : (n = !0,
                    t.delimiter = f.DefaultDelimiter),
                    i.meta.delimiter = t.delimiter
                }
                var l = se(t);
                return t.preview && t.header && l.preview++,
                e = h,
                r = new ne(l),
                i = r.parse(e, m, _),
                A(),
                o ? {
                    meta: {
                        paused: !0
                    }
                } : i || {
                    meta: {
                        paused: !1
                    }
                }
            }
            ,
            this.paused = function() {
                return o
            }
            ,
            this.pause = function() {
                o = !0,
                r.abort(),
                e = v(t.chunk) ? "" : e.substring(r.getCharIndex())
            }
            ,
            this.resume = function() {
                w.streamer._halted ? (o = !1,
                w.streamer.parseChunk(e, !0)) : setTimeout(this.resume, 3)
            }
            ,
            this.aborted = function() {
                return U
            }
            ,
            this.abort = function() {
                U = !0,
                r.abort(),
                i.meta.aborted = !0,
                v(t.complete) && t.complete(i),
                e = ""
            }
        }
        function X(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }
        function ne(t) {
            var e, r = (t = t || {}).delimiter, n = t.newline, a = t.comments, d = t.step, c = t.preview, O = t.fastMode, w = e = t.quoteChar === void 0 ? '"' : t.quoteChar;
            if (t.escapeChar !== void 0 && (w = t.escapeChar),
            (typeof r != "string" || -1 < f.BAD_DELIMITERS.indexOf(r)) && (r = ","),
            a === r)
                throw new Error("Comment character same as delimiter");
            a === !0 ? a = "#" : (typeof a != "string" || -1 < f.BAD_DELIMITERS.indexOf(a)) && (a = !1),
            n !== `
` && n !== "\r" && n !== `\r
` && (n = `
`);
            var s = 0
              , C = !1;
            this.parse = function(o, U, T) {
                if (typeof o != "string")
                    throw new Error("Input must be a string");
                var i = o.length
                  , g = r.length
                  , k = n.length
                  , A = a.length
                  , D = v(d)
                  , x = []
                  , S = []
                  , h = []
                  , m = s = 0;
                if (!o)
                    return L();
                if (O || O !== !1 && o.indexOf(e) === -1) {
                    for (var _ = o.split(n), y = 0; y < _.length; y++) {
                        if (h = _[y],
                        s += h.length,
                        y !== _.length - 1)
                            s += n.length;
                        else if (T)
                            return L();
                        if (!a || h.substring(0, A) !== a) {
                            if (D) {
                                if (x = [],
                                P(h.split(r)),
                                Q(),
                                C)
                                    return L()
                            } else
                                P(h.split(r));
                            if (c && c <= y)
                                return x = x.slice(0, c),
                                L(!0)
                        }
                    }
                    return L()
                }
                for (var p = o.indexOf(r, s), l = o.indexOf(n, s), R = new RegExp(X(w) + X(e),"g"), u = o.indexOf(e, s); ; )
                    if (o[s] !== e)
                        if (a && h.length === 0 && o.substring(s, s + A) === a) {
                            if (l === -1)
                                return L();
                            s = l + k,
                            l = o.indexOf(n, s),
                            p = o.indexOf(r, s)
                        } else {
                            if (p !== -1 && (p < l || l === -1)) {
                                if (!(p < u)) {
                                    h.push(o.substring(s, p)),
                                    s = p + g,
                                    p = o.indexOf(r, s);
                                    continue
                                }
                                var I = Z(p, u, l);
                                if (I && I.nextDelim !== void 0) {
                                    p = I.nextDelim,
                                    u = I.quoteSearch,
                                    h.push(o.substring(s, p)),
                                    s = p + g,
                                    p = o.indexOf(r, s);
                                    continue
                                }
                            }
                            if (l === -1)
                                break;
                            if (h.push(o.substring(s, l)),
                            G(l + k),
                            D && (Q(),
                            C))
                                return L();
                            if (c && x.length >= c)
                                return L(!0)
                        }
                    else
                        for (u = s,
                        s++; ; ) {
                            if ((u = o.indexOf(e, u + 1)) === -1)
                                return T || S.push({
                                    type: "Quotes",
                                    code: "MissingQuotes",
                                    message: "Quoted field unterminated",
                                    row: x.length,
                                    index: s
                                }),
                                F();
                            if (u === i - 1)
                                return F(o.substring(s, u).replace(R, e));
                            if (e !== w || o[u + 1] !== w) {
                                if (e === w || u === 0 || o[u - 1] !== w) {
                                    p !== -1 && p < u + 1 && (p = o.indexOf(r, u + 1)),
                                    l !== -1 && l < u + 1 && (l = o.indexOf(n, u + 1));
                                    var q = B(l === -1 ? p : Math.min(p, l));
                                    if (o[u + 1 + q] === r) {
                                        h.push(o.substring(s, u).replace(R, e)),
                                        o[s = u + 1 + q + g] !== e && (u = o.indexOf(e, s)),
                                        p = o.indexOf(r, s),
                                        l = o.indexOf(n, s);
                                        break
                                    }
                                    var j = B(l);
                                    if (o.substring(u + 1 + j, u + 1 + j + k) === n) {
                                        if (h.push(o.substring(s, u).replace(R, e)),
                                        G(u + 1 + j + k),
                                        p = o.indexOf(r, s),
                                        u = o.indexOf(e, s),
                                        D && (Q(),
                                        C))
                                            return L();
                                        if (c && x.length >= c)
                                            return L(!0);
                                        break
                                    }
                                    S.push({
                                        type: "Quotes",
                                        code: "InvalidQuotes",
                                        message: "Trailing quote on quoted field is malformed",
                                        row: x.length,
                                        index: s
                                    }),
                                    u++
                                }
                            } else
                                u++
                        }
                return F();
                function P(E) {
                    x.push(E),
                    m = s
                }
                function B(E) {
                    var K = 0;
                    if (E !== -1) {
                        var z = o.substring(u + 1, E);
                        z && z.trim() === "" && (K = z.length)
                    }
                    return K
                }
                function F(E) {
                    return T || (E === void 0 && (E = o.substring(s)),
                    h.push(E),
                    s = i,
                    P(h),
                    D && Q()),
                    L()
                }
                function G(E) {
                    s = E,
                    P(h),
                    h = [],
                    l = o.indexOf(n, s)
                }
                function L(E) {
                    return {
                        data: x,
                        errors: S,
                        meta: {
                            delimiter: r,
                            linebreak: n,
                            aborted: C,
                            truncated: !!E,
                            cursor: m + (U || 0)
                        }
                    }
                }
                function Q() {
                    d(L()),
                    x = [],
                    S = []
                }
                function Z(E, K, z) {
                    var W = {
                        nextDelim: void 0,
                        quoteSearch: void 0
                    }
                      , M = o.indexOf(e, K + 1);
                    if (K < E && E < M && (M < z || z === -1)) {
                        var ae = o.indexOf(r, M);
                        if (ae === -1)
                            return W;
                        M < ae && (M = o.indexOf(e, M + 1)),
                        W = Z(ae, M, z)
                    } else
                        W = {
                            nextDelim: E,
                            quoteSearch: K
                        };
                    return W
                }
            }
            ,
            this.abort = function() {
                C = !0
            }
            ,
            this.getCharIndex = function() {
                return s
            }
        }
        function pe(t) {
            var e = t.data
              , r = V[e.workerId]
              , n = !1;
            if (e.error)
                r.userError(e.error, e.file);
            else if (e.results && e.results.data) {
                var a = {
                    abort: function() {
                        n = !0,
                        ue(e.workerId, {
                            data: [],
                            errors: [],
                            meta: {
                                aborted: !0
                            }
                        })
                    },
                    pause: fe,
                    resume: fe
                };
                if (v(r.userStep)) {
                    for (var d = 0; d < e.results.data.length && (r.userStep({
                        data: e.results.data[d],
                        errors: e.results.errors,
                        meta: e.results.meta
                    }, a),
                    !n); d++)
                        ;
                    delete e.results
                } else
                    v(r.userChunk) && (r.userChunk(e.results, a, e.file),
                    delete e.results)
            }
            e.finished && !n && ue(e.workerId, e.results)
        }
        function ue(t, e) {
            var r = V[t];
            v(r.userComplete) && r.userComplete(e),
            r.terminate(),
            delete V[t]
        }
        function fe() {
            throw new Error("Not implemented.")
        }
        function se(t) {
            if (typeof t != "object" || t === null)
                return t;
            var e = Array.isArray(t) ? [] : {};
            for (var r in t)
                e[r] = se(t[r]);
            return e
        }
        function H(t, e) {
            return function() {
                t.apply(e, arguments)
            }
        }
        function v(t) {
            return typeof t == "function"
        }
        return ie && (b.onmessage = function(t) {
            var e = t.data;
            if (f.WORKER_ID === void 0 && e && (f.WORKER_ID = e.workerId),
            typeof e.input == "string")
                b.postMessage({
                    workerId: f.WORKER_ID,
                    results: f.parse(e.input, e.config),
                    finished: !0
                });
            else if (b.File && e.input instanceof File || e.input instanceof Object) {
                var r = f.parse(e.input, e.config);
                r && b.postMessage({
                    workerId: f.WORKER_ID,
                    results: r,
                    finished: !0
                })
            }
        }
        ),
        (ee.prototype = Object.create(N.prototype)).constructor = ee,
        (te.prototype = Object.create(N.prototype)).constructor = te,
        (Y.prototype = Object.create(Y.prototype)).constructor = Y,
        (re.prototype = Object.create(N.prototype)).constructor = re,
        f
    })
}
)(de);
var ve = de.exports;
const ke = ge(ve);
export {ke as P};
