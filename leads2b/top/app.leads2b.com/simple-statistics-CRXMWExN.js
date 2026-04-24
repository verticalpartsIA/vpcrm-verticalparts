function c(v) {
    var n, l, r = v.length;
    if (r === 1)
        n = 0,
        l = v[0][1];
    else {
        for (var e = 0, f = 0, o = 0, t = 0, g, a, b, h = 0; h < r; h++)
            g = v[h],
            a = g[0],
            b = g[1],
            e += a,
            f += b,
            o += a * a,
            t += a * b;
        n = (r * t - e * f) / (r * o - e * e),
        l = f / r - n * e / r
    }
    return {
        m: n,
        b: l
    }
}
export {c as l};
