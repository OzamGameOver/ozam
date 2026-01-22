"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6461], {
        2421: (t, e, n) => {
            n.d(e, {
                n: () => i
            });
            let i = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        4132: (t, e, n) => {
            n.d(e, {
                h: () => p,
                q: () => d
            });
            var i = n(32766),
                r = n(27933);
            let s = new Set,
                a = !1,
                o = !1,
                l = !1;

            function u() {
                if (o) {
                    let t = Array.from(s).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        n = new Map;
                    e.forEach(t => {
                        let e = (0, i.W9)(t);
                        e.length && (n.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = n.get(t);
                        e && e.forEach(([e, n]) => {
                            t.getValue(e) ? .set(n)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                o = !1, a = !1, s.forEach(t => t.complete(l)), s.clear()
            }

            function h() {
                s.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (o = !0)
                })
            }

            function d() {
                l = !0, h(), u(), l = !1
            }
            class p {
                constructor(t, e, n, i, r, s = !1) {
                    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = n, this.motionValue = i, this.element = r, this.isAsync = s
                }
                scheduleResolve() {
                    this.state = "scheduled", this.isAsync ? (s.add(this), a || (a = !0, r.Gt.read(h), r.Gt.resolveKeyframes(u))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: n,
                        motionValue: i
                    } = this;
                    if (null === t[0]) {
                        let r = i ? .get(),
                            s = t[t.length - 1];
                        if (void 0 !== r) t[0] = r;
                        else if (n && e) {
                            let i = n.readValue(e, s);
                            null != i && (t[0] = i)
                        }
                        void 0 === t[0] && (t[0] = s), i && void 0 === r && i.set(t[0])
                    }
                    for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete(t = !1) {
                    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), s.delete(this)
                }
                cancel() {
                    "scheduled" === this.state && (s.delete(this), this.state = "pending")
                }
                resume() {
                    "pending" === this.state && this.scheduleResolve()
                }
            }
        },
        4524: (t, e, n) => {
            n.d(e, {
                E: () => r
            });
            var i = n(12115);
            let r = n(24846).B ? i.useLayoutEffect : i.useEffect
        },
        5556: (t, e, n) => {
            n.d(e, {
                $: () => i,
                V: () => r
            });
            let i = () => {},
                r = () => {}
        },
        6900: (t, e, n) => {
            n.d(e, {
                OQ: () => u,
                bt: () => o
            });
            var i = n(73852),
                r = n(79537),
                s = n(37035),
                a = n(27933);
            let o = {
                current: void 0
            };
            class l {
                constructor(t, e = {}) {
                    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
                        let e = s.k.now();
                        if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                            for (let t of this.dependents) t.dirty()
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = s.k.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new i.v);
                    let n = this.events[t].add(e);
                    return "change" === t ? () => {
                        n(), a.Gt.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : n
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t) {
                    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
                }
                setWithVelocity(t, e, n) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - n
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                dirty() {
                    this.events.change ? .notify(this.current)
                }
                addDependent(t) {
                    this.dependents || (this.dependents = new Set), this.dependents.add(t)
                }
                removeDependent(t) {
                    this.dependents && this.dependents.delete(t)
                }
                get() {
                    return o.current && o.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    let t = s.k.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, r.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function u(t, e) {
                return new l(t, e)
            }
        },
        7128: (t, e, n) => {
            n.d(e, {
                x: () => s
            });
            var i = n(51469),
                r = n(27405);

            function s(t, e, n) {
                let {
                    style: s
                } = t, a = {};
                for (let l in s) {
                    var o;
                    ((0, i.S)(s[l]) || e.style && (0, i.S)(e.style[l]) || (0, r.z)(l, t) || (null == n || null == (o = n.getValue(l)) ? void 0 : o.liveStyle) !== void 0) && (a[l] = s[l])
                }
                return a
            }
        },
        9247: (t, e, n) => {
            n.d(e, {
                $: () => i
            });
            let i = new Set(["width", "height", "top", "left", "right", "bottom", ...n(25952).U])
        },
        11048: (t, e, n) => {
            n.d(e, {
                KN: () => s,
                gQ: () => u,
                px: () => a,
                uj: () => r,
                vh: () => o,
                vw: () => l
            });
            let i = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                r = i("deg"),
                s = i("%"),
                a = i("px"),
                o = i("vh"),
                l = i("vw"),
                u = { ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        11493: (t, e, n) => {
            n.d(e, {
                X: () => i
            });

            function i(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
        },
        11698: (t, e, n) => {
            n.d(e, {
                Ib: () => p,
                ry: () => d,
                zs: () => h
            });
            let i = t => 180 * t / Math.PI,
                r = t => a(i(Math.atan2(t[1], t[0]))),
                s = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
                    rotate: r,
                    rotateZ: r,
                    skewX: t => i(Math.atan(t[1])),
                    skewY: t => i(Math.atan(t[2])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
                },
                a = t => ((t %= 360) < 0 && (t += 360), t),
                o = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                l = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
                u = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: o,
                    scaleY: l,
                    scale: t => (o(t) + l(t)) / 2,
                    rotateX: t => a(i(Math.atan2(t[6], t[5]))),
                    rotateY: t => a(i(Math.atan2(-t[2], t[0]))),
                    rotateZ: r,
                    rotate: r,
                    skewX: t => i(Math.atan(t[4])),
                    skewY: t => i(Math.atan(t[1])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
                };

            function h(t) {
                return +!!t.includes("scale")
            }

            function d(t, e) {
                let n, i;
                if (!t || "none" === t) return h(e);
                let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
                if (r) n = u, i = r;
                else {
                    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                    n = s, i = e
                }
                if (!i) return h(e);
                let a = n[e],
                    o = i[1].split(",").map(c);
                return "function" == typeof a ? a(o) : o[a]
            }
            let p = (t, e) => {
                let {
                    transform: n = "none"
                } = getComputedStyle(t);
                return d(n, e)
            };

            function c(t) {
                return parseFloat(t.trim())
            }
        },
        12266: (t, e, n) => {
            n.d(e, {
                G: () => i
            });
            let i = t => e => 1 - t(1 - e)
        },
        14582: (t, e, n) => {
            n.d(e, {
                N: () => i
            });

            function i(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
        },
        15131: (t, e, n) => {
            n.d(e, {
                t: () => i
            });
            let i = (0, n(12115).createContext)(null)
        },
        15582: (t, e, n) => {
            function i(t) {
                let {
                    top: e,
                    left: n,
                    right: i,
                    bottom: r
                } = t;
                return {
                    x: {
                        min: n,
                        max: i
                    },
                    y: {
                        min: e,
                        max: r
                    }
                }
            }

            function r(t) {
                let {
                    x: e,
                    y: n
                } = t;
                return {
                    top: n.min,
                    right: e.max,
                    bottom: n.max,
                    left: e.min
                }
            }

            function s(t, e) {
                if (!e) return t;
                let n = e({
                        x: t.left,
                        y: t.top
                    }),
                    i = e({
                        x: t.right,
                        y: t.bottom
                    });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: i.y,
                    right: i.x
                }
            }
            n.d(e, {
                FY: () => i,
                bS: () => s,
                pA: () => r
            })
        },
        18844: (t, e, n) => {
            n.d(e, {
                q: () => i
            });
            let i = (t, e, n) => {
                let i = e - t;
                return 0 === i ? 1 : (n - t) / i
            }
        },
        21620: (t, e, n) => {
            n.d(e, {
                S: () => i
            });
            let i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
        },
        21649: (t, e, n) => {
            n.d(e, {
                G: () => h
            });
            var i = n(28153),
                r = n(72025),
                s = n(34017),
                a = n(5556),
                o = n(18844),
                l = n(94712),
                u = n(86075);

            function h(t, e, {
                clamp: n = !0,
                ease: d,
                mixer: p
            } = {}) {
                let c = t.length;
                if ((0, a.V)(c === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === c) return () => e[0];
                if (2 === c && e[0] === e[1]) return () => e[1];
                let f = t[0] === t[1];
                t[0] > t[c - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let m = function(t, e, n) {
                        let a = [],
                            o = n || i.W.mix || u.j,
                            l = t.length - 1;
                        for (let n = 0; n < l; n++) {
                            let i = o(t[n], t[n + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[n] || r.l : e;
                                i = (0, s.F)(t, i)
                            }
                            a.push(i)
                        }
                        return a
                    }(e, d, p),
                    v = m.length,
                    g = n => {
                        if (f && n < t[0]) return e[0];
                        let i = 0;
                        if (v > 1)
                            for (; i < t.length - 2 && !(n < t[i + 1]); i++);
                        let r = (0, o.q)(t[i], t[i + 1], n);
                        return m[i](r)
                    };
                return n ? e => g((0, l.q)(t[0], t[c - 1], e)) : g
            }
        },
        24236: (t, e, n) => {
            n.d(e, {
                ge: () => a,
                xU: () => r
            });
            let i = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                r = () => ({
                    x: i(),
                    y: i()
                }),
                s = () => ({
                    min: 0,
                    max: 0
                }),
                a = () => ({
                    x: s(),
                    y: s()
                })
        },
        24846: (t, e, n) => {
            n.d(e, {
                B: () => i
            });
            let i = "undefined" != typeof window
        },
        24866: (t, e, n) => {
            n.d(e, {
                Q: () => i
            });
            let i = (0, n(12115).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        25952: (t, e, n) => {
            n.d(e, {
                U: () => i,
                f: () => r
            });
            let i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                r = new Set(i)
        },
        26077: (t, e, n) => {
            n.d(e, {
                W: () => o
            });
            var i = n(49637);
            let r = { ...i.ai,
                transform: Math.round
            };
            var s = n(11048);
            let a = {
                    rotate: s.uj,
                    rotateX: s.uj,
                    rotateY: s.uj,
                    rotateZ: s.uj,
                    scale: i.hs,
                    scaleX: i.hs,
                    scaleY: i.hs,
                    scaleZ: i.hs,
                    skew: s.uj,
                    skewX: s.uj,
                    skewY: s.uj,
                    distance: s.px,
                    translateX: s.px,
                    translateY: s.px,
                    translateZ: s.px,
                    x: s.px,
                    y: s.px,
                    z: s.px,
                    perspective: s.px,
                    transformPerspective: s.px,
                    opacity: i.X4,
                    originX: s.gQ,
                    originY: s.gQ,
                    originZ: s.px
                },
                o = {
                    borderWidth: s.px,
                    borderTopWidth: s.px,
                    borderRightWidth: s.px,
                    borderBottomWidth: s.px,
                    borderLeftWidth: s.px,
                    borderRadius: s.px,
                    radius: s.px,
                    borderTopLeftRadius: s.px,
                    borderTopRightRadius: s.px,
                    borderBottomRightRadius: s.px,
                    borderBottomLeftRadius: s.px,
                    width: s.px,
                    maxWidth: s.px,
                    height: s.px,
                    maxHeight: s.px,
                    top: s.px,
                    right: s.px,
                    bottom: s.px,
                    left: s.px,
                    padding: s.px,
                    paddingTop: s.px,
                    paddingRight: s.px,
                    paddingBottom: s.px,
                    paddingLeft: s.px,
                    margin: s.px,
                    marginTop: s.px,
                    marginRight: s.px,
                    marginBottom: s.px,
                    marginLeft: s.px,
                    backgroundPositionX: s.px,
                    backgroundPositionY: s.px,
                    ...a,
                    zIndex: r,
                    fillOpacity: i.X4,
                    strokeOpacity: i.X4,
                    numOctaves: r
                }
        },
        27405: (t, e, n) => {
            n.d(e, {
                z: () => s
            });
            var i = n(25952),
                r = n(63959);

            function s(t, e) {
                let {
                    layout: n,
                    layoutId: s
                } = e;
                return i.f.has(t) || t.startsWith("origin") || (n || void 0 !== s) && (!!r.H[t] || "opacity" === t)
            }
        },
        27475: (t, e, n) => {
            n.d(e, {
                O: () => o,
                e: () => a
            });
            var i = n(14582),
                r = n(78207),
                s = n(76134);

            function a(t) {
                return (0, i.N)(t.animate) || s._.some(e => (0, r.w)(t[e]))
            }

            function o(t) {
                return !!(a(t) || t.variants)
            }
        },
        27933: (t, e, n) => {
            n.d(e, {
                Gt: () => r,
                PP: () => o,
                WG: () => s,
                uv: () => a
            });
            var i = n(72025);
            let {
                schedule: r,
                cancel: s,
                state: a,
                steps: o
            } = (0, n(57835).I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : i.l, !0)
        },
        27994: (t, e, n) => {
            n.d(e, {
                B: () => l
            });
            var i = n(94712),
                r = n(49637),
                s = n(71939),
                a = n(82163);
            let o = { ...r.ai,
                    transform: t => Math.round((0, i.q)(0, 255, t))
                },
                l = {
                    test: (0, a.$)("rgb", "red"),
                    parse: (0, a.q)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: i = 1
                    }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(n) + ", " + (0, s.a)(r.X4.transform(i)) + ")"
                }
        },
        28153: (t, e, n) => {
            n.d(e, {
                W: () => i
            });
            let i = {}
        },
        28819: (t, e, n) => {
            n.d(e, {
                M: () => r
            });
            var i = n(12115);

            function r(t) {
                let e = (0, i.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        30281: (t, e, n) => {
            n.d(e, {
                u: () => r
            });
            var i = n(27994);
            let r = {
                test: (0, n(82163).$)("#"),
                parse: function(t) {
                    let e = "",
                        n = "",
                        i = "",
                        r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, i += i, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(n, 16),
                        blue: parseInt(i, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                },
                transform: i.B.transform
            }
        },
        32766: (t, e, n) => {
            n.d(e, {
                E4: () => o,
                Hr: () => d,
                W9: () => h
            });
            var i = n(11698),
                r = n(25952),
                s = n(49637),
                a = n(11048);
            let o = t => t === s.ai || t === a.px,
                l = new Set(["x", "y", "z"]),
                u = r.U.filter(t => !l.has(t));

            function h(t) {
                let e = [];
                return u.forEach(n => {
                    let i = t.getValue(n);
                    void 0 !== i && (e.push([n, i.get()]), i.set(+!!n.startsWith("scale")))
                }), e
            }
            let d = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: n = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: n = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(n),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: (t, {
                    transform: e
                }) => (0, i.ry)(e, "x"),
                y: (t, {
                    transform: e
                }) => (0, i.ry)(e, "y")
            };
            d.translateX = d.x, d.translateY = d.y
        },
        34017: (t, e, n) => {
            n.d(e, {
                F: () => r
            });
            let i = (t, e) => n => e(t(n)),
                r = (...t) => t.reduce(i)
        },
        37035: (t, e, n) => {
            let i;
            n.d(e, {
                k: () => o
            });
            var r = n(28153),
                s = n(27933);

            function a() {
                i = void 0
            }
            let o = {
                now: () => (void 0 === i && o.set(s.uv.isProcessing || r.W.useManualTiming ? s.uv.timestamp : performance.now()), i),
                set: t => {
                    i = t, queueMicrotask(a)
                }
            }
        },
        38621: (t, e, n) => {
            n.d(e, {
                X: () => r,
                f: () => i
            });
            let i = t => 1e3 * t,
                r = t => t / 1e3
        },
        38873: (t, e, n) => {
            n.d(e, {
                k: () => i
            });
            let {
                schedule: i
            } = (0, n(57835).I)(queueMicrotask, !1)
        },
        39551: (t, e, n) => {
            n.d(e, {
                L: () => i
            });
            let i = (0, n(12115).createContext)({})
        },
        39896: (t, e, n) => {
            n.d(e, {
                j: () => r,
                p: () => a
            });
            let i = t => e => "string" == typeof e && e.startsWith(t),
                r = i("--"),
                s = i("var(--"),
                a = t => !!s(t) && o.test(t.split("/*")[0].trim()),
                o = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        41342: (t, e, n) => {
            n.d(e, {
                Q: () => i
            });
            let i = {
                value: null,
                addProjectionMetrics: null
            }
        },
        41587: (t, e, n) => {
            n.d(e, {
                J: () => ts
            });
            var i = n(12115),
                r = n(25952),
                s = n(11698),
                a = n(39896),
                o = n(70711),
                l = n(51469),
                u = n(9247),
                h = n(49637),
                d = n(11048);
            let p = t => e => e.test(t),
                c = [h.ai, d.px, d.KN, d.uj, d.vw, d.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                f = t => c.find(p(t));
            var m = n(5556);
            let v = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var g = n(4132),
                y = n(83399),
                w = n(21620);
            let b = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function x(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [i] = n.match(w.S) || [];
                if (!i) return t;
                let r = n.replace(i, ""),
                    s = +!!b.has(e);
                return i !== n && (s *= 100), e + "(" + s + r + ")"
            }
            let S = /\b([a-z-]*)\(.*?\)/gu,
                T = { ...y.f,
                    getAnimatableNone: t => {
                        let e = t.match(S);
                        return e ? e.map(x).join(" ") : t
                    }
                };
            var M = n(77054);
            let V = { ...n(26077).W,
                    color: M.y,
                    backgroundColor: M.y,
                    outlineColor: M.y,
                    fill: M.y,
                    stroke: M.y,
                    borderColor: M.y,
                    borderTopColor: M.y,
                    borderRightColor: M.y,
                    borderBottomColor: M.y,
                    borderLeftColor: M.y,
                    filter: T,
                    WebkitFilter: T
                },
                A = t => V[t];

            function k(t, e) {
                let n = A(t);
                return n !== T && (n = y.f), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
            }
            let C = new Set(["auto", "none", "0"]);
            var P = n(32766);
            class E extends g.h {
                constructor(t, e, n, i, r) {
                    super(t, e, n, i, r, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: n
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let n = 0; n < t.length; n++) {
                        let i = t[n];
                        if ("string" == typeof i && (i = i.trim(), (0, a.p)(i))) {
                            let r = function t(e, n, i = 1) {
                                (0, m.V)(i <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                                let [r, s] = function(t) {
                                    let e = v.exec(t);
                                    if (!e) return [, ];
                                    let [, n, i, r] = e;
                                    return [`--${n??i}`, r]
                                }(e);
                                if (!r) return;
                                let o = window.getComputedStyle(n).getPropertyValue(r);
                                if (o) {
                                    let t = o.trim();
                                    return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ? parseFloat(t) : t
                                }
                                return (0, a.p)(s) ? t(s, n, i + 1) : s
                            }(i, e.current);
                            void 0 !== r && (t[n] = r), n === t.length - 1 && (this.finalKeyframe = i)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !u.$.has(n) || 2 !== t.length) return;
                    let [i, r] = t, s = f(i), o = f(r);
                    if (s !== o)
                        if ((0, P.E4)(s) && (0, P.E4)(o))
                            for (let e = 0; e < t.length; e++) {
                                let n = t[e];
                                "string" == typeof n && (t[e] = parseFloat(n))
                            } else P.Hr[n] && (this.needsMeasurement = !0)
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, n = [];
                    for (let e = 0; e < t.length; e++)(null === t[e] || function(t) {
                        if ("number" == typeof t) return 0 === t;
                        if (null === t) return !0;
                        return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t)
                    }(t[e])) && n.push(e);
                    n.length && function(t, e, n) {
                        let i, r = 0;
                        for (; r < t.length && !i;) {
                            let e = t[r];
                            "string" == typeof e && !C.has(e) && (0, y.V)(e).values.length && (i = t[r]), r++
                        }
                        if (i && n)
                            for (let r of e) t[r] = k(n, i)
                    }(t, n, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: n
                    } = this;
                    if (!t || !t.current) return;
                    "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = P.Hr[n](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let i = e[e.length - 1];
                    void 0 !== i && t.getValue(n, i).jump(i, !1)
                }
                measureEndState() {
                    let {
                        element: t,
                        name: e,
                        unresolvedKeyframes: n
                    } = this;
                    if (!t || !t.current) return;
                    let i = t.getValue(e);
                    i && i.jump(this.measuredOrigin, !1);
                    let r = n.length - 1,
                        s = n[r];
                    n[r] = P.Hr[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms ? .length && this.removedTransforms.forEach(([e, n]) => {
                        t.getValue(e).set(n)
                    }), this.resolveNoneKeyframes()
                }
            }
            var F = n(27933),
                O = n(6900);
            let I = [...c, M.y, y.f];
            var j = n(38873),
                B = n(37035),
                W = n(73852),
                N = n(80304),
                R = n(24236),
                X = n(24846);
            let $ = {
                    current: null
                },
                D = {
                    current: !1
                },
                L = new WeakMap;
            var q = n(27475),
                Y = n(62537);
            let K = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class U {
                scrapeMotionValuesFromProps(t, e, n) {
                    return {}
                }
                mount(t) {
                    var e;
                    this.current = t, L.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), D.current || function() {
                        if (D.current = !0, X.B)
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => $.current = t.matches;
                                t.addEventListener("change", e), e()
                            } else $.current = !1
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || $.current), null == (e = this.parent) || e.addChild(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    var t;
                    for (let e in this.projection && this.projection.unmount(), (0, F.WG)(this.notifyUpdate), (0, F.WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), null == (t = this.parent) || t.removeChild(this), this.events) this.events[e].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                addChild(t) {
                    this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(t)
                }
                removeChild(t) {
                    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
                }
                bindToMotionValue(t, e) {
                    let n;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let i = r.f.has(t);
                    i && this.onBindTransform && this.onBindTransform();
                    let s = e.on("change", e => {
                        this.latestValues[t] = e, this.props.onUpdate && F.Gt.preRender(this.notifyUpdate), i && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
                    });
                    window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        s(), n && n(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in N.B) {
                        let e = N.B[t];
                        if (!e) continue;
                        let {
                            isEnabled: n,
                            Feature: i
                        } = e;
                        if (!this.features[t] && i && n(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, R.ge)()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < K.length; e++) {
                        let n = K[e];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let i = t["on" + n];
                        i && (this.propEventSubscriptions[n] = this.on(n, i))
                    }
                    this.prevMotionValues = function(t, e, n) {
                        for (let i in e) {
                            let r = e[i],
                                s = n[i];
                            if ((0, l.S)(r)) t.addValue(i, r);
                            else if ((0, l.S)(s)) t.addValue(i, (0, O.OQ)(r, {
                                owner: t
                            }));
                            else if (s !== r)
                                if (t.hasValue(i)) {
                                    let e = t.getValue(i);
                                    !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                                } else {
                                    let e = t.getStaticValue(i);
                                    t.addValue(i, (0, O.OQ)(void 0 !== e ? e : r, {
                                        owner: t
                                    }))
                                }
                        }
                        for (let i in n) void 0 === e[i] && t.removeValue(i);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let n = this.values.get(t);
                    e !== n && (n && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let n = this.values.get(t);
                    return void 0 === n && void 0 !== e && (n = (0, O.OQ)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, n)), n
                }
                readValue(t, e) {
                    let n = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    if (null != n) {
                        let i, r;
                        if ("string" == typeof n && (i = n, /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i) || (r = n, /^0[^.\s]+$/u.test(r)))) n = parseFloat(n);
                        else {
                            let i;
                            i = n, !I.find(p(i)) && y.f.test(e) && (n = k(t, e))
                        }
                        this.setBaseTarget(t, (0, l.S)(n) ? n.get() : n)
                    }
                    return (0, l.S)(n) ? n.get() : n
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    let e, {
                        initial: n
                    } = this.props;
                    if ("string" == typeof n || "object" == typeof n) {
                        var i;
                        let r = (0, Y.a)(this.props, n, null == (i = this.presenceContext) ? void 0 : i.custom);
                        r && (e = r[t])
                    }
                    if (n && void 0 !== e) return e;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || (0, l.S)(r) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new W.v), this.events[t].add(e)
                }
                notify(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
                    this.events[t] && this.events[t].notify(...n)
                }
                scheduleRenderMicrotask() {
                    j.k.render(this.render)
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: n,
                    reducedMotionConfig: i,
                    blockInitialAnimation: r,
                    visualState: s
                }, a = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = g.h, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = B.k.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, F.Gt.render(this.render, !1, !0))
                    };
                    const {
                        latestValues: o,
                        renderState: u
                    } = s;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = u, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!r, this.isControllingVariants = (0, q.e)(e), this.isVariantNode = (0, q.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    const {
                        willChange: h,
                        ...d
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (const t in d) {
                        const e = d[t];
                        void 0 !== o[t] && (0, l.S)(e) && e.set(o[t])
                    }
                }
            }
            class G extends U {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, e) {
                    let {
                        vars: n,
                        style: i
                    } = e;
                    delete n[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, l.S)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                constructor() {
                    super(...arguments), this.KeyframeResolver = E
                }
            }
            var H = n(57449);

            function z(t, e, n, i) {
                let r, {
                        style: s,
                        vars: a
                    } = e,
                    o = t.style;
                for (r in s) o[r] = s[r];
                for (r in null == i || i.applyProjectionStyles(o, n), a) o.setProperty(r, a[r])
            }
            var Q = n(7128);
            class _ extends G {
                readValueFromInstance(t, e) {
                    var n;
                    if (r.f.has(e)) return (null == (n = this.projection) ? void 0 : n.isProjecting) ? (0, s.zs)(e) : (0, s.Ib)(t, e); {
                        let n = window.getComputedStyle(t),
                            i = ((0, a.j)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(t, e) {
                    let {
                        transformPagePoint: n
                    } = e;
                    return (0, o.m)(t, n)
                }
                build(t, e, n) {
                    (0, H.O)(t, e, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, n) {
                    return (0, Q.x)(t, e, n)
                }
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = z
                }
            }
            var Z = n(57044),
                J = n(42088);
            let tt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
            var te = n(2421),
                tn = n(60825);
            class ti extends G {
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (r.f.has(e)) {
                        let t = A(e);
                        return t && t.default || 0
                    }
                    return e = tt.has(e) ? e : (0, Z.I)(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, n) {
                    return (0, tn.x)(t, e, n)
                }
                build(t, e, n) {
                    (0, J.B)(t, e, this.isSVGTag, n.transformTemplate, n.style)
                }
                renderInstance(t, e, n, i) {
                    for (let n in z(t, e, void 0, i), e.attrs) t.setAttribute(tt.has(n) ? n : (0, Z.I)(n), e.attrs[n])
                }
                mount(t) {
                    this.isSVGTag = (0, te.n)(t.tagName), super.mount(t)
                }
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = R.ge
                }
            }
            var tr = n(95391);
            let ts = (t, e) => (0, tr.Q)(t) ? new ti(e) : new _(e, {
                allowProjection: t !== i.Fragment
            })
        },
        42088: (t, e, n) => {
            n.d(e, {
                B: () => o
            });
            var i = n(57449),
                r = n(11048);
            let s = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                a = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function o(t, e, n, o, l) {
                let {
                    attrX: u,
                    attrY: h,
                    attrScale: d,
                    pathLength: p,
                    pathSpacing: c = 1,
                    pathOffset: f = 0,
                    ...m
                } = e;
                if ((0, i.O)(t, m, o), n) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: v,
                    style: g
                } = t;
                v.transform && (g.transform = v.transform, delete v.transform), (g.transform || v.transformOrigin) && (g.transformOrigin = v.transformOrigin ? ? "50% 50%", delete v.transformOrigin), g.transform && (g.transformBox = (null == l ? void 0 : l.transformBox) ? ? "fill-box", delete v.transformBox), void 0 !== u && (v.x = u), void 0 !== h && (v.y = h), void 0 !== d && (v.scale = d), void 0 !== p && function(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    t.pathLength = 1;
                    let l = o ? s : a;
                    t[l.offset] = r.px.transform(-i);
                    let u = r.px.transform(e),
                        h = r.px.transform(n);
                    t[l.array] = `${u} ${h}`
                }(v, p, c, f, !1)
            }
        },
        49637: (t, e, n) => {
            n.d(e, {
                X4: () => s,
                ai: () => r,
                hs: () => a
            });
            var i = n(94712);
            let r = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...r,
                    transform: t => (0, i.q)(0, 1, t)
                },
                a = { ...r,
                    default: 1
                }
        },
        50154: (t, e, n) => {
            n.d(e, {
                H: () => L
            });
            var i, r = n(95155),
                s = n(12115),
                a = n(39551),
                o = n(64704),
                l = n(24866);
            let u = (0, s.createContext)({});
            var h = n(27475),
                d = n(78207);

            function p(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var c = n(51469),
                f = n(27405),
                m = n(57449);
            let v = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function g(t, e, n) {
                for (let i in e)(0, c.S)(e[i]) || (0, f.z)(i, n) || (t[i] = e[i])
            }
            var y = n(42088);
            let w = () => ({ ...v(),
                attrs: {}
            });
            var b = n(2421);
            let x = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function S(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || x.has(t)
            }
            let T = t => !S(t);
            try {
                i = require("@emotion/is-prop-valid").default, "function" == typeof i && (T = t => t.startsWith("on") ? !S(t) : i(t))
            } catch {}
            var M = n(95391),
                V = n(14582),
                A = n(15131),
                k = n(62537),
                C = n(28819),
                P = n(96084);
            let E = t => (e, n) => {
                    let i = (0, s.useContext)(u),
                        r = (0, s.useContext)(A.t),
                        a = () => (function(t, e, n, i) {
                            let {
                                scrapeMotionValuesFromProps: r,
                                createRenderState: s
                            } = t;
                            return {
                                latestValues: function(t, e, n, i) {
                                    let r = {},
                                        s = i(t, {});
                                    for (let t in s) r[t] = (0, P.u)(s[t]);
                                    let {
                                        initial: a,
                                        animate: o
                                    } = t, l = (0, h.e)(t), u = (0, h.O)(t);
                                    e && u && !l && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === o && (o = e.animate));
                                    let d = !!n && !1 === n.initial,
                                        p = (d = d || !1 === a) ? o : a;
                                    if (p && "boolean" != typeof p && !(0, V.N)(p)) {
                                        let e = Array.isArray(p) ? p : [p];
                                        for (let n = 0; n < e.length; n++) {
                                            let i = (0, k.a)(t, e[n]);
                                            if (i) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...n
                                                } = i;
                                                for (let t in n) {
                                                    let e = n[t];
                                                    if (Array.isArray(e)) {
                                                        let t = d ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (r[t] = e)
                                                }
                                                for (let e in t) r[e] = t[e]
                                            }
                                        }
                                    }
                                    return r
                                }(e, n, i, r),
                                renderState: s()
                            }
                        })(t, e, i, r);
                    return n ? a() : (0, C.M)(a)
                },
                F = E({
                    scrapeMotionValuesFromProps: n(7128).x,
                    createRenderState: v
                }),
                O = E({
                    scrapeMotionValuesFromProps: n(60825).x,
                    createRenderState: w
                });
            var I = n(24846),
                j = n(80304),
                B = n(66290);
            let W = Symbol.for("motionComponentSymbol");
            var N = n(11493),
                R = n(88618),
                X = n(59299),
                $ = n(4524);

            function D(t) {
                let {
                    forwardMotionProps: e = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0;
                n && (0, B.Y)(n);
                let f = (0, M.Q)(t) ? O : F;

                function x(n, x) {
                    var V;
                    let k, C = { ...(0, s.useContext)(l.Q),
                            ...n,
                            layoutId: function(t) {
                                let {
                                    layoutId: e
                                } = t, n = (0, s.useContext)(a.L).id;
                                return n && void 0 !== e ? n + "-" + e : e
                            }(n)
                        },
                        {
                            isStatic: P
                        } = C,
                        E = function(t) {
                            let {
                                initial: e,
                                animate: n
                            } = function(t, e) {
                                if ((0, h.e)(t)) {
                                    let {
                                        initial: e,
                                        animate: n
                                    } = t;
                                    return {
                                        initial: !1 === e || (0, d.w)(e) ? e : void 0,
                                        animate: (0, d.w)(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0, s.useContext)(u));
                            return (0, s.useMemo)(() => ({
                                initial: e,
                                animate: n
                            }), [p(e), p(n)])
                        }(n),
                        F = f(n, P);
                    if (!P && I.B) {
                        (0, s.useContext)(o.Y).strict;
                        let e = function(t) {
                            let {
                                drag: e,
                                layout: n
                            } = j.B;
                            if (!e && !n) return {};
                            let i = { ...e,
                                ...n
                            };
                            return {
                                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == n ? void 0 : n.isEnabled(t)) ? i.MeasureLayout : void 0,
                                ProjectionNode: i.ProjectionNode
                            }
                        }(C);
                        k = e.MeasureLayout, E.visualElement = function(t, e, n, i, r) {
                            var a, h, d, p;
                            let {
                                visualElement: c
                            } = (0, s.useContext)(u), f = (0, s.useContext)(o.Y), m = (0, s.useContext)(A.t), v = (0, s.useContext)(l.Q).reducedMotion, g = (0, s.useRef)(null);
                            i = i || f.renderer, !g.current && i && (g.current = i(t, {
                                visualState: e,
                                parent: c,
                                props: n,
                                presenceContext: m,
                                blockInitialAnimation: !!m && !1 === m.initial,
                                reducedMotionConfig: v
                            }));
                            let y = g.current,
                                w = (0, s.useContext)(X.N);
                            y && !y.projection && r && ("html" === y.type || "svg" === y.type) && function(t, e, n, i) {
                                let {
                                    layoutId: r,
                                    layout: s,
                                    drag: a,
                                    dragConstraints: o,
                                    layoutScroll: l,
                                    layoutRoot: u,
                                    layoutCrossfade: h
                                } = e;
                                t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)), t.projection.setOptions({
                                    layoutId: r,
                                    layout: s,
                                    alwaysMeasureLayout: !!a || o && (0, N.X)(o),
                                    visualElement: t,
                                    animationType: "string" == typeof s ? s : "both",
                                    initialPromotionConfig: i,
                                    crossfade: h,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(g.current, n, r, w);
                            let b = (0, s.useRef)(!1);
                            (0, s.useInsertionEffect)(() => {
                                y && b.current && y.update(n, m)
                            });
                            let x = n[R.n],
                                S = (0, s.useRef)(!!x && !(null == (a = (h = window).MotionHandoffIsComplete) ? void 0 : a.call(h, x)) && (null == (d = (p = window).MotionHasOptimisedAnimation) ? void 0 : d.call(p, x)));
                            return (0, $.E)(() => {
                                y && (b.current = !0, window.MotionIsMounted = !0, y.updateFeatures(), y.scheduleRenderMicrotask(), S.current && y.animationState && y.animationState.animateChanges())
                            }), (0, s.useEffect)(() => {
                                y && (!S.current && y.animationState && y.animationState.animateChanges(), S.current && (queueMicrotask(() => {
                                    var t, e;
                                    null == (t = (e = window).MotionHandoffMarkAsComplete) || t.call(e, x)
                                }), S.current = !1), y.enteringChildren = void 0)
                            }), y
                        }(t, F, C, i, e.ProjectionNode)
                    }
                    return (0, r.jsxs)(u.Provider, {
                        value: E,
                        children: [k && E.visualElement ? (0, r.jsx)(k, {
                            visualElement: E.visualElement,
                            ...C
                        }) : null, function(t, e, n, i, r) {
                            let {
                                latestValues: a
                            } = i, o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], l = ((0, M.Q)(t) ? function(t, e, n, i) {
                                let r = (0, s.useMemo)(() => {
                                    let n = w();
                                    return (0, y.B)(n, e, (0, b.n)(i), t.transformTemplate, t.style), { ...n.attrs,
                                        style: { ...n.style
                                        }
                                    }
                                }, [e]);
                                if (t.style) {
                                    let e = {};
                                    g(e, t.style, t), r.style = { ...e,
                                        ...r.style
                                    }
                                }
                                return r
                            } : function(t, e) {
                                let n, i, r = {},
                                    a = (n = t.style || {}, g(i = {}, n, t), Object.assign(i, function(t, e) {
                                        let {
                                            transformTemplate: n
                                        } = t;
                                        return (0, s.useMemo)(() => {
                                            let t = v();
                                            return (0, m.O)(t, e, n), Object.assign({}, t.vars, t.style)
                                        }, [e])
                                    }(t, e)), i);
                                return t.drag && !1 !== t.dragListener && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = a, r
                            })(e, a, r, t), u = function(t, e, n) {
                                let i = {};
                                for (let r in t)("values" !== r || "object" != typeof t.values) && (T(r) || !0 === n && S(r) || !e && !S(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
                                return i
                            }(e, "string" == typeof t, o), h = t !== s.Fragment ? { ...u,
                                ...l,
                                ref: n
                            } : {}, {
                                children: d
                            } = e, p = (0, s.useMemo)(() => (0, c.S)(d) ? d.get() : d, [d]);
                            return (0, s.createElement)(t, { ...h,
                                children: p
                            })
                        }(t, n, (V = E.visualElement, (0, s.useCallback)(t => {
                            t && F.onMount && F.onMount(t), V && (t ? V.mount(t) : V.unmount()), x && ("function" == typeof x ? x(t) : (0, N.X)(x) && (x.current = t))
                        }, [V])), F, P, e)]
                    })
                }
                x.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
                let V = (0, s.forwardRef)(x);
                return V[W] = t, V
            }

            function L(t, e) {
                if ("undefined" == typeof Proxy) return D;
                let n = new Map,
                    i = (n, i) => D(n, i, t, e);
                return new Proxy((t, e) => i(t, e), {
                    get: (r, s) => "create" === s ? i : (n.has(s) || n.set(s, D(s, void 0, t, e)), n.get(s))
                })
            }
        },
        51044: (t, e, n) => {
            n.d(e, {
                k: () => i
            });

            function i(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    passive: !0
                };
                return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
            }
        },
        51469: (t, e, n) => {
            n.d(e, {
                S: () => i
            });
            let i = t => !!(t && t.getVelocity)
        },
        56260: (t, e, n) => {
            n.d(e, {
                k: () => i
            });
            let i = (t, e, n) => t + (e - t) * n
        },
        57044: (t, e, n) => {
            n.d(e, {
                I: () => i
            });
            let i = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        57449: (t, e, n) => {
            n.d(e, {
                O: () => u
            });
            var i = n(25952),
                r = n(39896);
            let s = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var a = n(26077);
            let o = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                l = i.U.length;

            function u(t, e, n) {
                let {
                    style: u,
                    vars: h,
                    transformOrigin: d
                } = t, p = !1, c = !1;
                for (let t in e) {
                    let n = e[t];
                    if (i.f.has(t)) {
                        p = !0;
                        continue
                    }
                    if ((0, r.j)(t)) {
                        h[t] = n;
                        continue
                    } {
                        let e = s(n, a.W[t]);
                        t.startsWith("origin") ? (c = !0, d[t] = e) : u[t] = e
                    }
                }
                if (!e.transform && (p || n ? u.transform = function(t, e, n) {
                        let r = "",
                            u = !0;
                        for (let h = 0; h < l; h++) {
                            let l = i.U[h],
                                d = t[l];
                            if (void 0 === d) continue;
                            let p = !0;
                            if (!(p = "number" == typeof d ? d === +!!l.startsWith("scale") : 0 === parseFloat(d)) || n) {
                                let t = s(d, a.W[l]);
                                if (!p) {
                                    u = !1;
                                    let e = o[l] || l;
                                    r += `${e}(${t}) `
                                }
                                n && (e[l] = t)
                            }
                        }
                        return r = r.trim(), n ? r = n(e, u ? "" : r) : u && (r = "none"), r
                    }(e, t.transform, n) : u.transform && (u.transform = "none")), c) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: n = 0
                    } = d;
                    u.transformOrigin = `${t} ${e} ${n}`
                }
            }
        },
        57767: (t, e, n) => {
            let i;
            n.d(e, {
                f: () => tV
            });
            var r, s = n(75319);

            function a(t) {
                t.duration = 0, t.type = "keyframes"
            }
            var o = n(27933),
                l = n(34017),
                u = n(94712),
                h = n(38621),
                d = n(37035),
                p = n(67026),
                c = n(86075);
            let f = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: (t = !0) => o.Gt.update(e, t),
                        stop: () => (0, o.WG)(e),
                        now: () => o.uv.isProcessing ? o.uv.timestamp : d.k.now()
                    }
                },
                m = (t, e, n = 10) => {
                    let i = "",
                        r = Math.max(Math.round(e / n), 2);
                    for (let e = 0; e < r; e++) i += Math.round(1e4 * t(e / (r - 1))) / 1e4 + ", ";
                    return `linear(${i.substring(0,i.length-2)})`
                };

            function v(t) {
                let e = 0,
                    n = t.next(e);
                for (; !n.done && e < 2e4;) e += 50, n = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            var g = n(79537);

            function y(t, e, n) {
                let i = Math.max(e - 5, 0);
                return (0, g.f)(n - t(i), e - i)
            }
            let w = .01,
                b = 2,
                x = .005,
                S = .5;
            var T = n(5556);

            function M(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let V = ["duration", "bounce"],
                A = ["stiffness", "damping", "mass"];

            function k(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function C(t = .3, e = .3) {
                let n, i = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: r,
                        restDelta: s
                    } = i,
                    a = i.keyframes[0],
                    o = i.keyframes[i.keyframes.length - 1],
                    l = {
                        done: !1,
                        value: a
                    },
                    {
                        stiffness: d,
                        damping: p,
                        mass: c,
                        duration: f,
                        velocity: g,
                        isResolvedFromDuration: P
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!k(t, A) && k(t, V))
                            if (t.visualDuration) {
                                let n = 2 * Math.PI / (1.2 * t.visualDuration),
                                    i = n * n,
                                    r = 2 * (0, u.q)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                                e = { ...e,
                                    mass: 1,
                                    stiffness: i,
                                    damping: r
                                }
                            } else {
                                let n = function({
                                    duration: t = 800,
                                    bounce: e = .3,
                                    velocity: n = 0,
                                    mass: i = 1
                                }) {
                                    let r, s;
                                    (0, T.$)(t <= (0, h.f)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                                    let a = 1 - e;
                                    a = (0, u.q)(.05, 1, a), t = (0, u.q)(.01, 10, (0, h.X)(t)), a < 1 ? (r = e => {
                                        let i = e * a,
                                            r = i * t;
                                        return .001 - (i - n) / M(e, a) * Math.exp(-r)
                                    }, s = e => {
                                        let i = e * a * t,
                                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                            o = Math.exp(-i),
                                            l = M(Math.pow(e, 2), a);
                                        return (i * n + n - s) * o * (-r(e) + .001 > 0 ? -1 : 1) / l
                                    }) : (r = e => -.001 + Math.exp(-e * t) * ((e - n) * t + 1), s = e => t * t * (n - e) * Math.exp(-e * t));
                                    let o = function(t, e, n) {
                                        let i = n;
                                        for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                                        return i
                                    }(r, s, 5 / t);
                                    if (t = (0, h.f)(t), isNaN(o)) return {
                                        stiffness: 100,
                                        damping: 10,
                                        duration: t
                                    }; {
                                        let e = Math.pow(o, 2) * i;
                                        return {
                                            stiffness: e,
                                            damping: 2 * a * Math.sqrt(i * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = { ...e,
                                    ...n,
                                    mass: 1
                                }).isResolvedFromDuration = !0
                            }
                        return e
                    }({ ...i,
                        velocity: -(0, h.X)(i.velocity || 0)
                    }),
                    E = g || 0,
                    F = p / (2 * Math.sqrt(d * c)),
                    O = o - a,
                    I = (0, h.X)(Math.sqrt(d / c)),
                    j = 5 > Math.abs(O);
                if (r || (r = j ? w : b), s || (s = j ? x : S), F < 1) {
                    let t = M(I, F);
                    n = e => o - Math.exp(-F * I * e) * ((E + F * I * O) / t * Math.sin(t * e) + O * Math.cos(t * e))
                } else if (1 === F) n = t => o - Math.exp(-I * t) * (O + (E + I * O) * t);
                else {
                    let t = I * Math.sqrt(F * F - 1);
                    n = e => {
                        let n = Math.exp(-F * I * e),
                            i = Math.min(t * e, 300);
                        return o - n * ((E + F * I * O) * Math.sinh(i) + t * O * Math.cosh(i)) / t
                    }
                }
                let B = {
                    calculatedDuration: P && f || null,
                    next: t => {
                        let e = n(t);
                        if (P) l.done = t >= f;
                        else {
                            let i = 0 === t ? E : 0;
                            F < 1 && (i = 0 === t ? (0, h.f)(E) : y(n, t, e));
                            let a = Math.abs(o - e) <= s;
                            l.done = Math.abs(i) <= r && a
                        }
                        return l.value = l.done ? o : e, l
                    },
                    toString: () => {
                        let t = Math.min(v(B), 2e4),
                            e = m(e => B.next(t * e).value, t, 30);
                        return t + "ms " + e
                    },
                    toTransition: () => {}
                };
                return B
            }

            function P({
                keyframes: t,
                velocity: e = 0,
                power: n = .8,
                timeConstant: i = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: a,
                min: o,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let d, p, c = t[0],
                    f = {
                        done: !1,
                        value: c
                    },
                    m = n * e,
                    v = c + m,
                    g = void 0 === a ? v : a(v);
                g !== v && (m = g - c);
                let w = t => -m * Math.exp(-t / i),
                    b = t => g + w(t),
                    x = t => {
                        let e = w(t),
                            n = b(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? g : n
                    },
                    S = t => {
                        let e;
                        if (e = f.value, void 0 !== o && e < o || void 0 !== l && e > l) {
                            var n;
                            d = t, p = C({
                                keyframes: [f.value, (n = f.value, void 0 === o ? l : void 0 === l || Math.abs(o - n) < Math.abs(l - n) ? o : l)],
                                velocity: y(b, t, f.value),
                                damping: r,
                                stiffness: s,
                                restDelta: u,
                                restSpeed: h
                            })
                        }
                    };
                return S(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (p || void 0 !== d || (e = !0, x(t), S(t)), void 0 !== d && t >= d) ? p.next(t - d) : (e || x(t), f)
                    }
                }
            }
            C.applyToOptions = t => {
                let e = function(t, e = 100, n) {
                    let i = n({ ...t,
                            keyframes: [0, e]
                        }),
                        r = Math.min(v(i), 2e4);
                    return {
                        type: "keyframes",
                        ease: t => i.next(r * t).value / e,
                        duration: (0, h.X)(r)
                    }
                }(t, 100, C);
                return t.ease = e.ease, t.duration = (0, h.f)(e.duration), t.type = "keyframes", t
            };
            var E = n(72025);
            let F = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

            function O(t, e, n, i) {
                return t === e && n === i ? E.l : r => 0 === r || 1 === r ? r : F(function(t, e, n, i, r) {
                    let s, a, o = 0;
                    do(s = F(a = e + (n - e) / 2, i, r) - t) > 0 ? n = a : e = a; while (Math.abs(s) > 1e-7 && ++o < 12);
                    return a
                }(r, 0, 1, t, n), e, i)
            }
            let I = O(.42, 0, 1, 1),
                j = O(0, 0, .58, 1),
                B = O(.42, 0, .58, 1);
            var W = n(75887),
                N = n(12266);
            let R = O(.33, 1.53, .69, .99),
                X = (0, N.G)(R),
                $ = (0, W.V)(X),
                D = t => (t *= 2) < 1 ? .5 * X(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
            var L = n(89722);
            let q = t => Array.isArray(t) && "number" == typeof t[0],
                Y = {
                    linear: E.l,
                    easeIn: I,
                    easeInOut: B,
                    easeOut: j,
                    circIn: L.po,
                    circInOut: L.tn,
                    circOut: L.yT,
                    backIn: X,
                    backInOut: $,
                    backOut: R,
                    anticipate: D
                },
                K = t => {
                    if (q(t)) {
                        (0, T.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                        let [e, n, i, r] = t;
                        return O(e, n, i, r)
                    }
                    return "string" == typeof t ? ((0, T.V)(void 0 !== Y[t], `Invalid easing type '${t}'`, "invalid-easing-type"), Y[t]) : t
                };
            var U = n(21649),
                G = n(83931);

            function H({
                duration: t = 300,
                keyframes: e,
                times: n,
                ease: i = "easeInOut"
            }) {
                var r;
                let s = Array.isArray(i) && "number" != typeof i[0] ? i.map(K) : K(i),
                    a = {
                        done: !1,
                        value: e[0]
                    },
                    o = (r = n && n.length === e.length ? n : (0, G.Z)(e), r.map(e => e * t)),
                    l = (0, U.G)(o, e, {
                        ease: Array.isArray(s) ? s : e.map(() => s || B).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (a.value = l(e), a.done = e >= t, a)
                }
            }
            let z = t => null !== t;

            function Q(t, {
                repeat: e,
                repeatType: n = "loop"
            }, i, r = 1) {
                let s = t.filter(z),
                    a = r < 0 || e && "loop" !== n && e % 2 == 1 ? 0 : s.length - 1;
                return a && void 0 !== i ? i : s[a]
            }
            let _ = {
                decay: P,
                inertia: P,
                tween: H,
                keyframes: H,
                spring: C
            };

            function Z(t) {
                "string" == typeof t.type && (t.type = _[t.type])
            }
            class J {
                constructor() {
                    this.updateFinished()
                }
                get finished() {
                    return this._finished
                }
                updateFinished() {
                    this._finished = new Promise(t => {
                        this.resolve = t
                    })
                }
                notifyFinished() {
                    this.resolve()
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
            }
            let tt = t => t / 100;
            class te extends J {
                constructor(t) {
                    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                        let {
                            motionValue: t
                        } = this.options;
                        t && t.updatedAt !== d.k.now() && this.tick(d.k.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
                    }, p.q.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
                }
                initAnimation() {
                    let {
                        options: t
                    } = this;
                    Z(t);
                    let {
                        type: e = H,
                        repeat: n = 0,
                        repeatDelay: i = 0,
                        repeatType: r,
                        velocity: s = 0
                    } = t, {
                        keyframes: a
                    } = t, o = e || H;
                    o !== H && "number" != typeof a[0] && (this.mixKeyframes = (0, l.F)(tt, (0, c.j)(a[0], a[1])), a = [0, 100]);
                    let u = o({ ...t,
                        keyframes: a
                    });
                    "mirror" === r && (this.mirroredGenerator = o({ ...t,
                        keyframes: [...a].reverse(),
                        velocity: -s
                    })), null === u.calculatedDuration && (u.calculatedDuration = v(u));
                    let {
                        calculatedDuration: h
                    } = u;
                    this.calculatedDuration = h, this.resolvedDuration = h + i, this.totalDuration = this.resolvedDuration * (n + 1) - i, this.generator = u
                }
                updateTime(t) {
                    let e = Math.round(t - this.startTime) * this.playbackSpeed;
                    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
                }
                tick(t, e = !1) {
                    let {
                        generator: n,
                        totalDuration: i,
                        mixKeyframes: r,
                        mirroredGenerator: s,
                        resolvedDuration: a,
                        calculatedDuration: o
                    } = this;
                    if (null === this.startTime) return n.next(0);
                    let {
                        delay: l = 0,
                        keyframes: h,
                        repeat: d,
                        repeatType: p,
                        repeatDelay: c,
                        type: f,
                        onUpdate: m,
                        finalKeyframe: v
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
                    let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
                        y = this.playbackSpeed >= 0 ? g < 0 : g > i;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = i);
                    let w = this.currentTime,
                        b = n;
                    if (d) {
                        let t = Math.min(this.currentTime, i) / a,
                            e = Math.floor(t),
                            n = t % 1;
                        !n && t >= 1 && (n = 1), 1 === n && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (n = 1 - n, c && (n -= c / a)) : "mirror" === p && (b = s)), w = (0, u.q)(0, 1, n) * a
                    }
                    let x = y ? {
                        done: !1,
                        value: h[0]
                    } : b.next(w);
                    r && (x.value = r(x.value));
                    let {
                        done: S
                    } = x;
                    y || null === o || (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
                    let T = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
                    return T && f !== P && (x.value = Q(h, this.options, v, this.speed)), m && m(x.value), T && this.finish(), x
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
                get duration() {
                    return (0, h.X)(this.calculatedDuration)
                }
                get iterationDuration() {
                    let {
                        delay: t = 0
                    } = this.options || {};
                    return this.duration + (0, h.X)(t)
                }
                get time() {
                    return (0, h.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, h.f)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? .start(!1)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    this.updateTime(d.k.now());
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, h.X)(this.currentTime))
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        driver: t = f,
                        startTime: e
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay ? .();
                    let n = this.driver.now();
                    "finished" === this.state ? (this.updateFinished(), this.startTime = n) : null !== this.holdTime ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = e ? ? n), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    this.state = "paused", this.updateTime(d.k.now()), this.holdTime = this.currentTime
                }
                complete() {
                    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
                }
                cancel() {
                    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, p.q.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                attachTimeline(t) {
                    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this)
                }
            }
            var tn = n(28153),
                ti = n(4132),
                tr = n(69166),
                ts = n(41342),
                ta = n(96291);
            let to = {},
                tl = (r = () => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, i = (0, ta.p)(r), () => to.linearEasing ? ? i()),
                tu = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
                th = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: tu([0, .65, .55, 1]),
                    circOut: tu([.55, 0, 1, .45]),
                    backIn: tu([.31, .01, .66, -.59]),
                    backOut: tu([.33, 1.53, .69, .99])
                };

            function td(t) {
                return "function" == typeof t && "applyToOptions" in t
            }
            class tp extends J {
                constructor(t) {
                    if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
                    const {
                        element: e,
                        name: n,
                        keyframes: i,
                        pseudoElement: r,
                        allowFlatten: s = !1,
                        finalKeyframe: a,
                        onComplete: o
                    } = t;
                    this.isPseudoElement = !!r, this.allowFlatten = s, this.options = t, (0, T.V)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
                    const l = function({
                        type: t,
                        ...e
                    }) {
                        return td(t) && tl() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
                    }(t);
                    this.animation = function(t, e, n, {
                        delay: i = 0,
                        duration: r = 300,
                        repeat: s = 0,
                        repeatType: a = "loop",
                        ease: o = "easeOut",
                        times: l
                    } = {}, u) {
                        let h = {
                            [e]: n
                        };
                        l && (h.offset = l);
                        let d = function t(e, n) {
                            if (e) return "function" == typeof e ? tl() ? m(e, n) : "ease-out" : q(e) ? tu(e) : Array.isArray(e) ? e.map(e => t(e, n) || th.easeOut) : th[e]
                        }(o, r);
                        Array.isArray(d) && (h.easing = d), ts.Q.value && p.q.waapi++;
                        let c = {
                            delay: i,
                            duration: r,
                            easing: Array.isArray(d) ? "linear" : d,
                            fill: "both",
                            iterations: s + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        };
                        u && (c.pseudoElement = u);
                        let f = t.animate(h, c);
                        return ts.Q.value && f.finished.finally(() => {
                            p.q.waapi--
                        }), f
                    }(e, n, i, l, r), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                        if (this.finishedTime = this.time, !r) {
                            let t = Q(i, this.options, a, this.speed);
                            this.updateMotionValue ? this.updateMotionValue(t) : n.startsWith("--") ? e.style.setProperty(n, t) : e.style[n] = t, this.animation.cancel()
                        }
                        o ? .(), this.notifyFinished()
                    }
                }
                play() {
                    this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.finish ? .()
                }
                cancel() {
                    try {
                        this.animation.cancel()
                    } catch (t) {}
                }
                stop() {
                    if (this.isStopped) return;
                    this.isStopped = !0;
                    let {
                        state: t
                    } = this;
                    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
                }
                commitStyles() {
                    this.isPseudoElement || this.animation.commitStyles ? .()
                }
                get duration() {
                    let t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
                    return (0, h.X)(Number(t))
                }
                get iterationDuration() {
                    let {
                        delay: t = 0
                    } = this.options || {};
                    return this.duration + (0, h.X)(t)
                }
                get time() {
                    return (0, h.X)(Number(this.animation.currentTime) || 0)
                }
                set time(t) {
                    this.finishedTime = null, this.animation.currentTime = (0, h.f)(t)
                }
                get speed() {
                    return this.animation.playbackRate
                }
                set speed(t) {
                    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
                }
                get state() {
                    return null !== this.finishedTime ? "finished" : this.animation.playState
                }
                get startTime() {
                    return Number(this.animation.startTime)
                }
                set startTime(t) {
                    this.animation.startTime = t
                }
                attachTimeline({
                    timeline: t,
                    observe: e
                }) {
                    return (this.allowFlatten && this.animation.effect ? .updateTiming({
                        easing: "linear"
                    }), this.animation.onfinish = null, t && (0, tr.J)()) ? (this.animation.timeline = t, E.l) : e(this)
                }
            }
            let tc = {
                anticipate: D,
                backInOut: $,
                circInOut: L.tn
            };
            class tf extends tp {
                constructor(t) {
                    ! function(t) {
                        "string" == typeof t.ease && t.ease in tc && (t.ease = tc[t.ease])
                    }(t), Z(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
                }
                updateMotionValue(t) {
                    let {
                        motionValue: e,
                        onUpdate: n,
                        onComplete: i,
                        element: r,
                        ...s
                    } = this.options;
                    if (!e) return;
                    if (void 0 !== t) return void e.set(t);
                    let a = new te({ ...s,
                            autoplay: !1
                        }),
                        o = (0, h.f)(this.finishedTime ? ? this.time);
                    e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10), a.stop()
                }
            }
            var tm = n(83399);
            let tv = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tm.f.test(t) || "0" === t) && !t.startsWith("url(")),
                tg = new Set(["opacity", "clipPath", "filter", "transform"]),
                ty = (0, ta.p)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
            class tw extends J {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: n = "keyframes",
                    repeat: i = 0,
                    repeatDelay: r = 0,
                    repeatType: s = "loop",
                    keyframes: a,
                    name: o,
                    motionValue: l,
                    element: u,
                    ...h
                }) {
                    super(), this.stop = () => {
                        this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
                    }, this.createdAt = d.k.now();
                    const p = {
                            autoplay: t,
                            delay: e,
                            type: n,
                            repeat: i,
                            repeatDelay: r,
                            repeatType: s,
                            name: o,
                            motionValue: l,
                            element: u,
                            ...h
                        },
                        c = u ? .KeyframeResolver || ti.h;
                    this.keyframeResolver = new c(a, (t, e, n) => this.onKeyframesResolved(t, e, p, !n), o, l, u), this.keyframeResolver ? .scheduleResolve()
                }
                onKeyframesResolved(t, e, n, i) {
                    this.keyframeResolver = void 0;
                    let {
                        name: r,
                        type: s,
                        velocity: o,
                        delay: l,
                        isHandoff: u,
                        onUpdate: h
                    } = n;
                    this.resolvedAt = d.k.now(), ! function(t, e, n, i) {
                        let r = t[0];
                        if (null === r) return !1;
                        if ("display" === e || "visibility" === e) return !0;
                        let s = t[t.length - 1],
                            a = tv(r, e),
                            o = tv(s, e);
                        return (0, T.$)(a === o, `You are trying to animate ${e} from "${r}" to "${s}". "${a?s:r}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function(t) {
                            let e = t[0];
                            if (1 === t.length) return !0;
                            for (let n = 0; n < t.length; n++)
                                if (t[n] !== e) return !0
                        }(t) || ("spring" === n || td(n)) && i)
                    }(t, r, s, o) && ((tn.W.instantAnimations || !l) && h ? .(Q(t, n, e)), t[0] = t[t.length - 1], a(n), n.repeat = 0);
                    let p = {
                            startTime: i ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                            finalKeyframe: e,
                            ...n,
                            keyframes: t
                        },
                        c = !u && function(t) {
                            let {
                                motionValue: e,
                                name: n,
                                repeatDelay: i,
                                repeatType: r,
                                damping: s,
                                type: a
                            } = t;
                            if (!(e ? .owner ? .current instanceof HTMLElement)) return !1;
                            let {
                                onUpdate: o,
                                transformTemplate: l
                            } = e.owner.getProps();
                            return ty() && n && tg.has(n) && ("transform" !== n || !l) && !o && !i && "mirror" !== r && 0 !== s && "inertia" !== a
                        }(p) ? new tf({ ...p,
                            element: p.motionValue.owner.current
                        }) : new te(p);
                    c.finished.then(() => this.notifyFinished()).catch(E.l), this.pendingTimeline && (this.stopTimeline = c.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = c
                }
                get finished() {
                    return this._animation ? this.animation.finished : this._finished
                }
                then(t, e) {
                    return this.finished.finally(t).then(() => {})
                }
                get animation() {
                    return this._animation || (this.keyframeResolver ? .resume(), (0, ti.q)()), this._animation
                }
                get duration() {
                    return this.animation.duration
                }
                get iterationDuration() {
                    return this.animation.iterationDuration
                }
                get time() {
                    return this.animation.time
                }
                set time(t) {
                    this.animation.time = t
                }
                get speed() {
                    return this.animation.speed
                }
                get state() {
                    return this.animation.state
                }
                set speed(t) {
                    this.animation.speed = t
                }
                get startTime() {
                    return this.animation.startTime
                }
                attachTimeline(t) {
                    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
                }
                play() {
                    this.animation.play()
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.complete()
                }
                cancel() {
                    this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
                }
            }
            let tb = t => null !== t;
            var tx = n(25952);
            let tS = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                tT = {
                    type: "keyframes",
                    duration: .8
                },
                tM = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                tV = function(t, e, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        l = arguments.length > 5 ? arguments[5] : void 0;
                    return u => {
                        let d = (0, s.r)(i, t) || {},
                            p = d.delay || i.delay || 0,
                            {
                                elapsed: c = 0
                            } = i;
                        c -= (0, h.f)(p);
                        let f = {
                            keyframes: Array.isArray(n) ? n : [null, n],
                            ease: "easeOut",
                            velocity: e.getVelocity(),
                            ...d,
                            delay: -c,
                            onUpdate: t => {
                                e.set(t), d.onUpdate && d.onUpdate(t)
                            },
                            onComplete: () => {
                                u(), d.onComplete && d.onComplete()
                            },
                            name: t,
                            motionValue: e,
                            element: l ? void 0 : r
                        };
                        ! function(t) {
                            let {
                                when: e,
                                delay: n,
                                delayChildren: i,
                                staggerChildren: r,
                                staggerDirection: s,
                                repeat: a,
                                repeatType: o,
                                repeatDelay: l,
                                from: u,
                                elapsed: h,
                                ...d
                            } = t;
                            return !!Object.keys(d).length
                        }(d) && Object.assign(f, ((t, e) => {
                            let {
                                keyframes: n
                            } = e;
                            return n.length > 2 ? tT : tx.f.has(t) ? t.startsWith("scale") ? {
                                type: "spring",
                                stiffness: 550,
                                damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                                restSpeed: 10
                            } : tS : tM
                        })(t, f)), f.duration && (f.duration = (0, h.f)(f.duration)), f.repeatDelay && (f.repeatDelay = (0, h.f)(f.repeatDelay)), void 0 !== f.from && (f.keyframes[0] = f.from);
                        let m = !1;
                        if (!1 !== f.type && (0 !== f.duration || f.repeatDelay) || (a(f), 0 === f.delay && (m = !0)), (tn.W.instantAnimations || tn.W.skipAnimations) && (m = !0, a(f), f.delay = 0), f.allowFlatten = !d.type && !d.ease, m && !l && void 0 !== e.get()) {
                            let t = function(t, e, n) {
                                let {
                                    repeat: i,
                                    repeatType: r = "loop"
                                } = e, s = t.filter(tb), a = i && "loop" !== r && i % 2 == 1 ? 0 : s.length - 1;
                                return s[a]
                            }(f.keyframes, d);
                            if (void 0 !== t) return void o.Gt.update(() => {
                                f.onUpdate(t), f.onComplete()
                            })
                        }
                        return d.isSync ? new te(f) : new tw(f)
                    }
                }
        },
        57835: (t, e, n) => {
            n.d(e, {
                I: () => a
            });
            var i = n(28153);
            let r = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
            var s = n(41342);

            function a(t, e) {
                let n = !1,
                    a = !0,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    l = () => n = !0,
                    u = r.reduce((t, n) => (t[n] = function(t, e) {
                        let n = new Set,
                            i = new Set,
                            r = !1,
                            a = !1,
                            o = new WeakSet,
                            l = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            u = 0;

                        function h(e) {
                            o.has(e) && (d.schedule(e), t()), u++, e(l)
                        }
                        let d = {
                            schedule: (t, e = !1, s = !1) => {
                                let a = s && r ? n : i;
                                return e && o.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                i.delete(t), o.delete(t)
                            },
                            process: t => {
                                if (l = t, r) {
                                    a = !0;
                                    return
                                }
                                r = !0, [n, i] = [i, n], n.forEach(h), e && s.Q.value && s.Q.value.frameloop[e].push(u), u = 0, n.clear(), r = !1, a && (a = !1, d.process(t))
                            }
                        };
                        return d
                    }(l, e ? n : void 0), t), {}),
                    {
                        setup: h,
                        read: d,
                        resolveKeyframes: p,
                        preUpdate: c,
                        update: f,
                        preRender: m,
                        render: v,
                        postRender: g
                    } = u,
                    y = () => {
                        let r = i.W.useManualTiming ? o.timestamp : performance.now();
                        n = !1, i.W.useManualTiming || (o.delta = a ? 1e3 / 60 : Math.max(Math.min(r - o.timestamp, 40), 1)), o.timestamp = r, o.isProcessing = !0, h.process(o), d.process(o), p.process(o), c.process(o), f.process(o), m.process(o), v.process(o), g.process(o), o.isProcessing = !1, n && e && (a = !1, t(y))
                    };
                return {
                    schedule: r.reduce((e, i) => {
                        let r = u[i];
                        return e[i] = (e, i = !1, s = !1) => (!n && (n = !0, a = !0, o.isProcessing || t(y)), r.schedule(e, i, s)), e
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < r.length; e++) u[r[e]].cancel(t)
                    },
                    state: o,
                    steps: u
                }
            }
        },
        58392: (t, e, n) => {
            n.d(e, {
                K: () => i
            });

            function i(t, e, n) {
                if (t instanceof EventTarget) return [t];
                if ("string" == typeof t) {
                    let i = document;
                    e && (i = e.current);
                    let r = n ? .[t] ? ? i.querySelectorAll(t);
                    return r ? Array.from(r) : []
                }
                return Array.from(t)
            }
        },
        59299: (t, e, n) => {
            n.d(e, {
                N: () => i
            });
            let i = (0, n(12115).createContext)({})
        },
        60825: (t, e, n) => {
            n.d(e, {
                x: () => a
            });
            var i = n(51469),
                r = n(25952),
                s = n(7128);

            function a(t, e, n) {
                let a = (0, s.x)(t, e, n);
                for (let n in t)((0, i.S)(t[n]) || (0, i.S)(e[n])) && (a[-1 !== r.U.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n]);
                return a
            }
        },
        62537: (t, e, n) => {
            function i(t) {
                let e = [{}, {}];
                return null == t || t.values.forEach((t, n) => {
                    e[0][n] = t.get(), e[1][n] = t.getVelocity()
                }), e
            }

            function r(t, e, n, r) {
                if ("function" == typeof e) {
                    let [s, a] = i(r);
                    e = e(void 0 !== n ? n : t.custom, s, a)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [s, a] = i(r);
                    e = e(void 0 !== n ? n : t.custom, s, a)
                }
                return e
            }
            n.d(e, {
                a: () => r
            })
        },
        63959: (t, e, n) => {
            n.d(e, {
                $: () => s,
                H: () => r
            });
            var i = n(39896);
            let r = {};

            function s(t) {
                for (let e in t) r[e] = t[e], (0, i.j)(e) && (r[e].isCSSVariable = !0)
            }
        },
        64704: (t, e, n) => {
            n.d(e, {
                Y: () => i
            });
            let i = (0, n(12115).createContext)({
                strict: !1
            })
        },
        66290: (t, e, n) => {
            n.d(e, {
                Y: () => r
            });
            var i = n(80304);

            function r(t) {
                for (let e in t) i.B[e] = { ...i.B[e],
                    ...t[e]
                }
            }
        },
        67026: (t, e, n) => {
            n.d(e, {
                q: () => i
            });
            let i = {
                layout: 0,
                mainThread: 0,
                waapi: 0
            }
        },
        69166: (t, e, n) => {
            n.d(e, {
                J: () => i
            });
            let i = (0, n(96291).p)(() => void 0 !== window.ScrollTimeline)
        },
        69328: (t, e, n) => {
            n.d(e, {
                F: () => s,
                e: () => r
            });
            var i = n(77866);

            function r(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let s = t => e => (0, i.M)(e) && t(e, r(e))
        },
        70711: (t, e, n) => {
            n.d(e, {
                L: () => a,
                m: () => s
            });
            var i = n(15582),
                r = n(79953);

            function s(t, e) {
                return (0, i.FY)((0, i.bS)(t.getBoundingClientRect(), e))
            }

            function a(t, e, n) {
                let i = s(t, n),
                    {
                        scroll: a
                    } = e;
                return a && ((0, r.Ql)(i.x, a.offset.x), (0, r.Ql)(i.y, a.offset.y)), i
            }
        },
        71292: (t, e, n) => {
            function i(t) {
                return void 0 === t || 1 === t
            }

            function r(t) {
                let {
                    scale: e,
                    scaleX: n,
                    scaleY: r
                } = t;
                return !i(e) || !i(n) || !i(r)
            }

            function s(t) {
                return r(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function a(t) {
                var e, n;
                return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
            }
            n.d(e, {
                HD: () => s,
                vF: () => a,
                vk: () => r
            })
        },
        71939: (t, e, n) => {
            n.d(e, {
                a: () => i
            });
            let i = t => Math.round(1e5 * t) / 1e5
        },
        72025: (t, e, n) => {
            n.d(e, {
                l: () => i
            });
            let i = t => t
        },
        72252: (t, e, n) => {
            n.d(e, {
                P: () => r
            });
            var i = n(88618);

            function r(t) {
                return t.props[i.n]
            }
        },
        73852: (t, e, n) => {
            n.d(e, {
                v: () => r
            });
            var i = n(78170);
            class r {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, i.Kq)(this.subscriptions, t), () => (0, i.Ai)(this.subscriptions, t)
                }
                notify(t, e, n) {
                    let i = this.subscriptions.length;
                    if (i)
                        if (1 === i) this.subscriptions[0](t, e, n);
                        else
                            for (let r = 0; r < i; r++) {
                                let i = this.subscriptions[r];
                                i && i(t, e, n)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        74476: (t, e, n) => {
            n.d(e, {
                X: () => i
            });
            class i {
                update() {}
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
            }
        },
        75319: (t, e, n) => {
            n.d(e, {
                r: () => i
            });

            function i(t, e) {
                return t ? .[e] ? ? t ? .default ? ? t
            }
        },
        75887: (t, e, n) => {
            n.d(e, {
                V: () => i
            });
            let i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        76134: (t, e, n) => {
            n.d(e, {
                U: () => i,
                _: () => r
            });
            let i = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                r = ["initial", ...i]
        },
        77011: (t, e, n) => {
            n.d(e, {
                D: () => r,
                I: () => i
            });
            let i = {
                x: !1,
                y: !1
            };

            function r() {
                return i.x || i.y
            }
        },
        77054: (t, e, n) => {
            n.d(e, {
                y: () => a
            });
            var i = n(30281),
                r = n(88158),
                s = n(27994);
            let a = {
                test: t => s.B.test(t) || i.u.test(t) || r.V.test(t),
                parse: t => s.B.test(t) ? s.B.parse(t) : r.V.test(t) ? r.V.parse(t) : i.u.parse(t),
                transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? s.B.transform(t) : r.V.transform(t),
                getAnimatableNone: t => {
                    let e = a.parse(t);
                    return e.alpha = 0, a.transform(e)
                }
            }
        },
        77866: (t, e, n) => {
            n.d(e, {
                M: () => i
            });
            let i = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
        },
        78170: (t, e, n) => {
            function i(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r(t, e) {
                let n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            n.d(e, {
                Ai: () => r,
                Kq: () => i
            })
        },
        78207: (t, e, n) => {
            n.d(e, {
                w: () => i
            });

            function i(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        78757: (t, e, n) => {
            n.d(e, {
                s: () => r
            });
            var i = n(94601);

            function r(t) {
                return (0, i.G)(t) && "offsetHeight" in t
            }
        },
        79537: (t, e, n) => {
            n.d(e, {
                f: () => i
            });

            function i(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        79953: (t, e, n) => {
            n.d(e, {
                OU: () => u,
                Ql: () => h,
                Ww: () => p,
                hq: () => s,
                o4: () => l
            });
            var i = n(56260),
                r = n(71292);

            function s(t, e, n) {
                return n + e * (t - n)
            }

            function a(t, e, n, i, r) {
                return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e
            }

            function o(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                t.min = a(t.min, e, n, i, r), t.max = a(t.max, e, n, i, r)
            }

            function l(t, e) {
                let {
                    x: n,
                    y: i
                } = e;
                o(t.x, n.translate, n.scale, n.originPoint), o(t.y, i.translate, i.scale, i.originPoint)
            }

            function u(t, e, n) {
                let i, s, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    o = n.length;
                if (o) {
                    e.x = e.y = 1;
                    for (let u = 0; u < o; u++) {
                        s = (i = n[u]).projectionDelta;
                        let {
                            visualElement: o
                        } = i.options;
                        (!o || !o.props.style || "contents" !== o.props.style.display) && (a && i.options.layoutScroll && i.scroll && i !== i.root && p(t, {
                            x: -i.scroll.offset.x,
                            y: -i.scroll.offset.y
                        }), s && (e.x *= s.x.scale, e.y *= s.y.scale, l(t, s)), a && (0, r.HD)(i.latestValues) && p(t, i.latestValues))
                    }
                    e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                }
            }

            function h(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function d(t, e, n, r) {
                let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5,
                    a = (0, i.k)(t.min, t.max, s);
                o(t, e, n, a, r)
            }

            function p(t, e) {
                d(t.x, e.x, e.scaleX, e.scale, e.originX), d(t.y, e.y, e.scaleY, e.scale, e.originY)
            }
        },
        80304: (t, e, n) => {
            n.d(e, {
                B: () => r
            });
            let i = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                r = {};
            for (let t in i) r[t] = {
                isEnabled: e => i[t].some(t => !!e[t])
            }
        },
        82163: (t, e, n) => {
            n.d(e, {
                $: () => s,
                q: () => a
            });
            var i = n(21620);
            let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                s = (t, e) => n => !!("string" == typeof n && r.test(n) && n.startsWith(t) || e && null != n && Object.prototype.hasOwnProperty.call(n, e)),
                a = (t, e, n) => r => {
                    if ("string" != typeof r) return r;
                    let [s, a, o, l] = r.match(i.S);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(a),
                        [n]: parseFloat(o),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        83399: (t, e, n) => {
            n.d(e, {
                V: () => h,
                f: () => f
            });
            var i = n(77054);
            let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var s = n(21620),
                a = n(71939);
            let o = "number",
                l = "color",
                u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function h(t) {
                let e = t.toString(),
                    n = [],
                    r = {
                        color: [],
                        number: [],
                        var: []
                    },
                    s = [],
                    a = 0,
                    h = e.replace(u, t => (i.y.test(t) ? (r.color.push(a), s.push(l), n.push(i.y.parse(t))) : t.startsWith("var(") ? (r.var.push(a), s.push("var"), n.push(t)) : (r.number.push(a), s.push(o), n.push(parseFloat(t))), ++a, "${}")).split("${}");
                return {
                    values: n,
                    split: h,
                    indexes: r,
                    types: s
                }
            }

            function d(t) {
                return h(t).values
            }

            function p(t) {
                let {
                    split: e,
                    types: n
                } = h(t), r = e.length;
                return t => {
                    let s = "";
                    for (let u = 0; u < r; u++)
                        if (s += e[u], void 0 !== t[u]) {
                            let e = n[u];
                            e === o ? s += (0, a.a)(t[u]) : e === l ? s += i.y.transform(t[u]) : s += t[u]
                        }
                    return s
                }
            }
            let c = t => "number" == typeof t ? 0 : i.y.test(t) ? i.y.getAnimatableNone(t) : t,
                f = {
                    test: function(t) {
                        return isNaN(t) && "string" == typeof t && (t.match(s.S) ? .length || 0) + (t.match(r) ? .length || 0) > 0
                    },
                    parse: d,
                    createTransformer: p,
                    getAnimatableNone: function(t) {
                        let e = d(t);
                        return p(t)(e.map(c))
                    }
                }
        },
        83931: (t, e, n) => {
            n.d(e, {
                Z: () => s
            });
            var i = n(18844),
                r = n(56260);

            function s(t) {
                let e = [0];
                return ! function(t, e) {
                    let n = t[t.length - 1];
                    for (let s = 1; s <= e; s++) {
                        let a = (0, i.q)(0, e, s);
                        t.push((0, r.k)(n, 1, a))
                    }
                }(e, t.length - 1), e
            }
        },
        86075: (t, e, n) => {
            n.d(e, {
                j: () => M
            });
            var i = n(34017),
                r = n(5556),
                s = n(39896),
                a = n(77054),
                o = n(83399),
                l = n(30281),
                u = n(88158);

            function h(t, e, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }
            var d = n(27994);

            function p(t, e) {
                return n => n > 0 ? e : t
            }
            var c = n(56260);
            let f = (t, e, n) => {
                    let i = t * t,
                        r = n * (e * e - i) + i;
                    return r < 0 ? 0 : Math.sqrt(r)
                },
                m = [l.u, d.B, u.V];

            function v(t) {
                let e = m.find(e => e.test(t));
                if ((0, r.$)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
                let n = e.parse(t);
                return e === u.V && (n = function({
                    hue: t,
                    saturation: e,
                    lightness: n,
                    alpha: i
                }) {
                    t /= 360, n /= 100;
                    let r = 0,
                        s = 0,
                        a = 0;
                    if (e /= 100) {
                        let i = n < .5 ? n * (1 + e) : n + e - n * e,
                            o = 2 * n - i;
                        r = h(o, i, t + 1 / 3), s = h(o, i, t), a = h(o, i, t - 1 / 3)
                    } else r = s = a = n;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * a),
                        alpha: i
                    }
                }(n)), n
            }
            let g = (t, e) => {
                    let n = v(t),
                        i = v(e);
                    if (!n || !i) return p(t, e);
                    let r = { ...n
                    };
                    return t => (r.red = f(n.red, i.red, t), r.green = f(n.green, i.green, t), r.blue = f(n.blue, i.blue, t), r.alpha = (0, c.k)(n.alpha, i.alpha, t), d.B.transform(r))
                },
                y = new Set(["none", "hidden"]);

            function w(t, e) {
                return n => (0, c.k)(t, e, n)
            }

            function b(t) {
                return "number" == typeof t ? w : "string" == typeof t ? (0, s.p)(t) ? p : a.y.test(t) ? g : T : Array.isArray(t) ? x : "object" == typeof t ? a.y.test(t) ? g : S : p
            }

            function x(t, e) {
                let n = [...t],
                    i = n.length,
                    r = t.map((t, n) => b(t)(t, e[n]));
                return t => {
                    for (let e = 0; e < i; e++) n[e] = r[e](t);
                    return n
                }
            }

            function S(t, e) {
                let n = { ...t,
                        ...e
                    },
                    i = {};
                for (let r in n) void 0 !== t[r] && void 0 !== e[r] && (i[r] = b(t[r])(t[r], e[r]));
                return t => {
                    for (let e in i) n[e] = i[e](t);
                    return n
                }
            }
            let T = (t, e) => {
                let n = o.f.createTransformer(e),
                    s = (0, o.V)(t),
                    a = (0, o.V)(e);
                if (!(s.indexes.var.length === a.indexes.var.length && s.indexes.color.length === a.indexes.color.length && s.indexes.number.length >= a.indexes.number.length)) return (0, r.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), p(t, e);
                if (y.has(t) && !a.values.length || y.has(e) && !s.values.length) return y.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t;
                return (0, i.F)(x(function(t, e) {
                    let n = [],
                        i = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let r = 0; r < e.values.length; r++) {
                        let s = e.types[r],
                            a = t.indexes[s][i[s]],
                            o = t.values[a] ? ? 0;
                        n[r] = o, i[s]++
                    }
                    return n
                }(s, a), a.values), n)
            };

            function M(t, e, n) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof n ? (0, c.k)(t, e, n) : b(t)(t, e)
            }
        },
        86836: (t, e, n) => {
            n.d(e, {
                W: () => P
            });
            var i = n(14582),
                r = n(62537);

            function s(t, e, n) {
                let i = t.getProps();
                return (0, r.a)(i, e, void 0 !== n ? n : i.custom, t)
            }
            var a = n(75319),
                o = n(27933),
                l = n(9247),
                u = n(6900);
            let h = t => Array.isArray(t);
            var d = n(99031),
                p = n(72252),
                c = n(57767);

            function f(t, e) {
                let {
                    delay: n = 0,
                    transitionOverride: i,
                    type: r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                    transition: f = t.getDefaultTransition(),
                    transitionEnd: m,
                    ...v
                } = e;
                i && (f = i);
                let g = [],
                    y = r && t.animationState && t.animationState.getState()[r];
                for (let e in v) {
                    let i = t.getValue(e, t.latestValues[e] ? ? null),
                        r = v[e];
                    if (void 0 === r || y && function(t, e) {
                            let {
                                protectedKeys: n,
                                needsAnimating: i
                            } = t, r = n.hasOwnProperty(e) && !0 !== i[e];
                            return i[e] = !1, r
                        }(y, e)) continue;
                    let s = {
                            delay: n,
                            ...(0, a.r)(f || {}, e)
                        },
                        u = i.get();
                    if (void 0 !== u && !i.isAnimating && !Array.isArray(r) && r === u && !s.velocity) continue;
                    let h = !1;
                    if (window.MotionHandoffAnimation) {
                        let n = (0, p.P)(t);
                        if (n) {
                            let t = window.MotionHandoffAnimation(n, e, o.Gt);
                            null !== t && (s.startTime = t, h = !0)
                        }
                    }(0, d.g)(t, e), i.start((0, c.f)(e, i, r, t.shouldReduceMotion && l.$.has(e) ? {
                        type: !1
                    } : s, t, h));
                    let m = i.animation;
                    m && g.push(m)
                }
                return m && Promise.all(g).then(() => {
                    o.Gt.update(() => {
                        m && function(t, e) {
                            let {
                                transitionEnd: n = {},
                                transition: i = {},
                                ...r
                            } = s(t, e) || {};
                            for (let e in r = { ...r,
                                    ...n
                                }) {
                                var a;
                                let n = h(a = r[e]) ? a[a.length - 1] || 0 : a;
                                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, u.OQ)(n))
                            }
                        }(t, m)
                    })
                }), g
            }

            function m(t, e, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                    s = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
                    a = t.size,
                    o = (a - 1) * i;
                return "function" == typeof n ? n(s, a) : 1 === r ? s * i : o - s * i
            }

            function v(t, e) {
                var n;
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = s(t, e, "exit" === i.type ? null == (n = t.presenceContext) ? void 0 : n.custom : void 0),
                    {
                        transition: a = t.getDefaultTransition() || {}
                    } = r || {};
                i.transitionOverride && (a = i.transitionOverride);
                let o = r ? () => Promise.all(f(t, r, i)) : () => Promise.resolve(),
                    l = t.variantChildren && t.variantChildren.size ? function() {
                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            {
                                delayChildren: r = 0,
                                staggerChildren: s,
                                staggerDirection: o
                            } = a;
                        return function(t, e) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                                a = arguments.length > 6 ? arguments[6] : void 0,
                                o = [];
                            for (let l of t.variantChildren) l.notify("AnimationStart", e), o.push(v(l, e, { ...a,
                                delay: n + ("function" == typeof i ? 0 : i) + m(t.variantChildren, l, i, r, s)
                            }).then(() => l.notify("AnimationComplete", e)));
                            return Promise.all(o)
                        }(t, e, n, r, s, o, i)
                    } : () => Promise.resolve(),
                    {
                        when: u
                    } = a;
                if (!u) return Promise.all([o(), l(i.delay)]); {
                    let [t, e] = "beforeChildren" === u ? [o, l] : [l, o];
                    return t().then(() => e())
                }
            }

            function g(t, e) {
                if (!Array.isArray(e)) return !1;
                let n = e.length;
                if (n !== t.length) return !1;
                for (let i = 0; i < n; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }
            var y = n(78207),
                w = n(76134);
            let b = w._.length,
                x = [...w.U].reverse(),
                S = w.U.length;

            function T() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function M() {
                return {
                    animate: T(!0),
                    whileInView: T(),
                    whileHover: T(),
                    whileTap: T(),
                    whileDrag: T(),
                    whileFocus: T(),
                    exit: T()
                }
            }
            var V = n(74476);
            class A extends V.X {
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    (0, i.N)(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null == (t = this.unmountControls) || t.call(this)
                }
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(e => {
                                let {
                                    animation: n,
                                    options: i
                                } = e;
                                return function(t, e) {
                                    let n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => v(t, e, i)));
                                    else if ("string" == typeof e) n = v(t, e, i);
                                    else {
                                        let r = "function" == typeof e ? s(t, e, i.custom) : e;
                                        n = Promise.all(f(t, r, i))
                                    }
                                    return n.then(() => {
                                        t.notify("AnimationComplete", e)
                                    })
                                }(t, n, i)
                            })),
                            n = M(),
                            r = !0,
                            a = e => (n, i) => {
                                var r;
                                let a = s(t, i, "exit" === e ? null == (r = t.presenceContext) ? void 0 : r.custom : void 0);
                                if (a) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...i
                                    } = a;
                                    n = { ...n,
                                        ...i,
                                        ...e
                                    }
                                }
                                return n
                            };

                        function o(o) {
                            let {
                                props: l
                            } = t, u = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let n = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (n.initial = e.props.initial), n
                                }
                                let n = {};
                                for (let t = 0; t < b; t++) {
                                    let i = w._[t],
                                        r = e.props[i];
                                    ((0, y.w)(r) || !1 === r) && (n[i] = r)
                                }
                                return n
                            }(t.parent) || {}, d = [], p = new Set, c = {}, f = 1 / 0;
                            for (let e = 0; e < S; e++) {
                                var v, T;
                                let w = x[e],
                                    b = n[w],
                                    S = void 0 !== l[w] ? l[w] : u[w],
                                    M = (0, y.w)(S),
                                    V = w === o ? b.isActive : null;
                                !1 === V && (f = e);
                                let A = S === u[w] && S !== l[w] && M;
                                if (A && r && t.manuallyAnimateOnMount && (A = !1), b.protectedKeys = { ...c
                                    }, !b.isActive && null === V || !S && !b.prevProp || (0, i.N)(S) || "boolean" == typeof S) continue;
                                let k = (v = b.prevProp, "string" == typeof(T = S) ? T !== v : !!Array.isArray(T) && !g(T, v)),
                                    C = k || w === o && b.isActive && !A && M || e > f && M,
                                    P = !1,
                                    E = Array.isArray(S) ? S : [S],
                                    F = E.reduce(a(w), {});
                                !1 === V && (F = {});
                                let {
                                    prevResolvedValues: O = {}
                                } = b, I = { ...O,
                                    ...F
                                }, j = e => {
                                    C = !0, p.has(e) && (P = !0, p.delete(e)), b.needsAnimating[e] = !0;
                                    let n = t.getValue(e);
                                    n && (n.liveStyle = !1)
                                };
                                for (let t in I) {
                                    let e = F[t],
                                        n = O[t];
                                    if (!c.hasOwnProperty(t))(h(e) && h(n) ? g(e, n) : e === n) ? void 0 !== e && p.has(t) ? j(t) : b.protectedKeys[t] = !0 : null != e ? j(t) : p.add(t)
                                }
                                b.prevProp = S, b.prevResolvedValues = F, b.isActive && (c = { ...c,
                                    ...F
                                }), r && t.blockInitialAnimation && (C = !1);
                                let B = A && k,
                                    W = !B || P;
                                C && W && d.push(...E.map(e => {
                                    let n = {
                                        type: w
                                    };
                                    if ("string" == typeof e && r && !B && t.manuallyAnimateOnMount && t.parent) {
                                        let {
                                            parent: i
                                        } = t, r = s(i, e);
                                        if (i.enteringChildren && r) {
                                            let {
                                                delayChildren: e
                                            } = r.transition || {};
                                            n.delay = m(i.enteringChildren, t, e)
                                        }
                                    }
                                    return {
                                        animation: e,
                                        options: n
                                    }
                                }))
                            }
                            if (p.size) {
                                let e = {};
                                if ("boolean" != typeof l.initial) {
                                    let n = s(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                    n && n.transition && (e.transition = n.transition)
                                }
                                p.forEach(n => {
                                    let i = t.getBaseTarget(n),
                                        r = t.getValue(n);
                                    r && (r.liveStyle = !0), e[n] = i ? ? null
                                }), d.push({
                                    animation: e
                                })
                            }
                            let M = !!d.length;
                            return r && (!1 === l.initial || l.initial === l.animate) && !t.manuallyAnimateOnMount && (M = !1), r = !1, M ? e(d) : Promise.resolve()
                        }
                        return {
                            animateChanges: o,
                            setActive: function(e, i) {
                                var r;
                                if (n[e].isActive === i) return Promise.resolve();
                                null == (r = t.variantChildren) || r.forEach(t => {
                                    var n;
                                    return null == (n = t.animationState) ? void 0 : n.setActive(e, i)
                                }), n[e].isActive = i;
                                let s = o(e);
                                for (let t in n) n[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(n) {
                                e = n(t)
                            },
                            getState: () => n,
                            reset: () => {
                                n = M()
                            }
                        }
                    }(t))
                }
            }
            let k = 0;
            class C extends V.X {
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === n) return;
                    let i = this.node.animationState.setActive("exit", !t);
                    e && !t && i.then(() => {
                        e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.id = k++
                }
            }
            let P = {
                animation: {
                    Feature: A
                },
                exit: {
                    Feature: C
                }
            }
        },
        88158: (t, e, n) => {
            n.d(e, {
                V: () => o
            });
            var i = n(49637),
                r = n(11048),
                s = n(71939),
                a = n(82163);
            let o = {
                test: (0, a.$)("hsl", "hue"),
                parse: (0, a.q)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: n,
                    alpha: a = 1
                }) => "hsla(" + Math.round(t) + ", " + r.KN.transform((0, s.a)(e)) + ", " + r.KN.transform((0, s.a)(n)) + ", " + (0, s.a)(i.X4.transform(a)) + ")"
            }
        },
        88618: (t, e, n) => {
            n.d(e, {
                n: () => i
            });
            let i = "data-" + (0, n(57044).I)("framerAppearId")
        },
        89722: (t, e, n) => {
            n.d(e, {
                po: () => s,
                tn: () => o,
                yT: () => a
            });
            var i = n(75887),
                r = n(12266);
            let s = t => 1 - Math.sin(Math.acos(t)),
                a = (0, r.G)(s),
                o = (0, i.V)(s)
        },
        90249: (t, e, n) => {
            n.d(e, {
                n: () => F
            });
            var i = n(27933),
                r = n(77011),
                s = n(58392);

            function a(t, e) {
                let n = (0, s.K)(t),
                    i = new AbortController;
                return [n, {
                    passive: !0,
                    ...e,
                    signal: i.signal
                }, () => i.abort()]
            }

            function o(t) {
                return !("touch" === t.pointerType || (0, r.D)())
            }
            var l = n(69328),
                u = n(74476);

            function h(t, e, n) {
                let {
                    props: r
                } = t;
                t.animationState && r.whileHover && t.animationState.setActive("whileHover", "Start" === n);
                let s = r["onHover" + n];
                s && i.Gt.postRender(() => s(e, (0, l.e)(e)))
            }
            class d extends u.X {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, n = {}) {
                        let [i, r, s] = a(t, n), l = t => {
                            if (!o(t)) return;
                            let {
                                target: n
                            } = t, i = e(n, t);
                            if ("function" != typeof i || !n) return;
                            let s = t => {
                                o(t) && (i(t), n.removeEventListener("pointerleave", s))
                            };
                            n.addEventListener("pointerleave", s, r)
                        };
                        return i.forEach(t => {
                            t.addEventListener("pointerenter", l, r)
                        }), s
                    }(t, (t, e) => (h(this.node, e, "Start"), t => h(this.node, t, "End"))))
                }
                unmount() {}
            }
            var p = n(34017),
                c = n(51044);
            class f extends u.X {
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, p.F)((0, c.k)(this.node.current, "focus", () => this.onFocus()), (0, c.k)(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.isActive = !1
                }
            }
            var m = n(78757);
            let v = (t, e) => !!e && (t === e || v(t, e.parentElement));
            var g = n(77866);
            let y = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                w = new WeakSet;

            function b(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function x(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }

            function S(t) {
                return (0, g.M)(t) && !(0, r.D)()
            }

            function T(t, e, n) {
                let {
                    props: r
                } = t;
                if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                t.animationState && r.whileTap && t.animationState.setActive("whileTap", "Start" === n);
                let s = r["onTap" + ("End" === n ? "" : n)];
                s && i.Gt.postRender(() => s(e, (0, l.e)(e)))
            }
            class M extends u.X {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, n = {}) {
                        let [i, r, s] = a(t, n), o = t => {
                            let i = t.currentTarget;
                            if (!S(t)) return;
                            w.add(i);
                            let s = e(i, t),
                                a = (t, e) => {
                                    window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", l), w.has(i) && w.delete(i), S(t) && "function" == typeof s && s(t, {
                                        success: e
                                    })
                                },
                                o = t => {
                                    a(t, i === window || i === document || n.useGlobalTarget || v(i, t.target))
                                },
                                l = t => {
                                    a(t, !1)
                                };
                            window.addEventListener("pointerup", o, r), window.addEventListener("pointercancel", l, r)
                        };
                        return i.forEach(t => {
                            ((n.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r), (0, m.s)(t)) && (t.addEventListener("focus", t => ((t, e) => {
                                let n = t.currentTarget;
                                if (!n) return;
                                let i = b(() => {
                                    if (w.has(n)) return;
                                    x(n, "down");
                                    let t = b(() => {
                                        x(n, "up")
                                    });
                                    n.addEventListener("keyup", t, e), n.addEventListener("blur", () => x(n, "cancel"), e)
                                });
                                n.addEventListener("keydown", i, e), n.addEventListener("blur", () => n.removeEventListener("keydown", i), e)
                            })(t, r)), y.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                        }), s
                    }(t, (t, e) => (T(this.node, e, "Start"), (t, e) => {
                        let {
                            success: n
                        } = e;
                        return T(this.node, t, n ? "End" : "Cancel")
                    }), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let V = new WeakMap,
                A = new WeakMap,
                k = t => {
                    let e = V.get(t.target);
                    e && e(t)
                },
                C = t => {
                    t.forEach(k)
                },
                P = {
                    some: 0,
                    all: 1
                };
            class E extends u.X {
                startObserver() {
                    var t;
                    let e;
                    this.unmount();
                    let {
                        viewport: n = {}
                    } = this.node.getProps(), {
                        root: i,
                        margin: r,
                        amount: s = "some",
                        once: a
                    } = n, o = {
                        root: i ? i.current : void 0,
                        rootMargin: r,
                        threshold: "number" == typeof s ? s : P[s]
                    }, l = t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, a && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: n,
                            onViewportLeave: i
                        } = this.node.getProps(), r = e ? n : i;
                        r && r(t)
                    };
                    return t = this.node.current, e = function(t) {
                        let {
                            root: e,
                            ...n
                        } = t, i = e || document;
                        A.has(i) || A.set(i, {});
                        let r = A.get(i),
                            s = JSON.stringify(n);
                        return r[s] || (r[s] = new IntersectionObserver(C, {
                            root: e,
                            ...n
                        })), r[s]
                    }(o), V.set(t, l), e.observe(t), () => {
                        V.delete(t), e.unobserve(t)
                    }
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function(t) {
                        let {
                            viewport: e = {}
                        } = t, {
                            viewport: n = {}
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return t => e[t] !== n[t]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
            }
            let F = {
                inView: {
                    Feature: E
                },
                tap: {
                    Feature: M
                },
                focus: {
                    Feature: f
                },
                hover: {
                    Feature: d
                }
            }
        },
        94601: (t, e, n) => {
            n.d(e, {
                G: () => i
            });

            function i(t) {
                return "object" == typeof t && null !== t
            }
        },
        94712: (t, e, n) => {
            n.d(e, {
                q: () => i
            });
            let i = (t, e, n) => n > e ? e : n < t ? t : n
        },
        95391: (t, e, n) => {
            n.d(e, {
                Q: () => r
            });
            let i = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function r(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (i.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
        },
        96084: (t, e, n) => {
            n.d(e, {
                u: () => r
            });
            var i = n(51469);

            function r(t) {
                return (0, i.S)(t) ? t.get() : t
            }
        },
        96291: (t, e, n) => {
            n.d(e, {
                p: () => i
            });

            function i(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
        },
        99031: (t, e, n) => {
            n.d(e, {
                g: () => s
            });
            var i = n(28153),
                r = n(51469);

            function s(t, e) {
                let n = t.getValue("willChange");
                if ((0, r.S)(n) && n.add) return n.add(e);
                if (!n && i.W.WillChange) {
                    let n = new i.W.WillChange("auto");
                    t.addValue("willChange", n), n.add(e)
                }
            }
        }
    }
]);