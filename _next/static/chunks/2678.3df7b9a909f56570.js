"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2678, 5252], {
        12678: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => d
            });
            var n = r(95155),
                l = r(12115),
                o = r(71833),
                i = r(69403),
                u = r(80642),
                c = r(82301),
                s = r(72069),
                a = r(35252);

            function d() {
                let {
                    scrollY: e
                } = (0, s.L)(), [t, r] = (0, l.useState)(!1), d = (0, a.useLenis)();
                return (0, l.useEffect)(() => {
                    r(e > 300)
                }, [e]), (0, n.jsx)(o.F, {
                    features: i.l,
                    children: (0, n.jsx)(u.N, {
                        children: t && (0, n.jsx)(c.m.button, {
                            initial: {
                                opacity: 0,
                                scale: .8,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: .8,
                                y: 20
                            },
                            transition: {
                                duration: .2,
                                ease: [.22, 1, .36, 1]
                            },
                            onClick: () => {
                                (null == d ? void 0 : d.current) ? d.current.scrollTo(0, {
                                    duration: 1.2
                                }): window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            },
                            className: "fixed bottom-6 right-6 z-40 btn btn-circle btn-primary shadow-lg hover:shadow-xl transition-shadow duration-200",
                            "aria-label": "Scroll to top",
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: .9
                            },
                            children: (0, n.jsx)("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: (0, n.jsx)("polyline", {
                                    points: "18 15 12 9 6 15"
                                })
                            })
                        })
                    })
                })
            }
        },
        35252: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => c,
                useLenis: () => u
            });
            var n = r(95155),
                l = r(12115),
                o = r(65792);
            let i = (0, l.createContext)(null);

            function u() {
                return (0, l.useContext)(i)
            }

            function c(e) {
                let {
                    children: t
                } = e, r = (0, l.useRef)(null), u = (0, l.useRef)(null), c = (0, l.useRef)(null), s = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        let e = new o.A({
                            duration: 1.2,
                            easing: e => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
                            direction: "vertical",
                            gestureDirection: "vertical",
                            smooth: !0,
                            mouseMultiplier: 1,
                            smoothTouch: !1,
                            touchMultiplier: 2,
                            autoResize: !0
                        });
                        r.current = e, u.current = requestAnimationFrame(function t(r) {
                            e.raf(r), u.current = requestAnimationFrame(t)
                        })
                    };
                    return "undefined" != typeof requestIdleCallback ? c.current = requestIdleCallback(() => {
                        e()
                    }) : s.current = setTimeout(() => {
                        e()
                    }, 100), () => {
                        c.current && cancelIdleCallback(c.current), s.current && clearTimeout(s.current), u.current && cancelAnimationFrame(u.current), r.current && (r.current.destroy(), r.current = null)
                    }
                }, []), (0, n.jsx)(i.Provider, {
                    value: r,
                    children: t
                })
            }
        },
        72069: (e, t, r) => {
            r.d(t, {
                L: () => u,
                ScrollProvider: () => i
            });
            var n = r(95155),
                l = r(12115);
            let o = (0, l.createContext)({
                scrollY: 0,
                scrollProgress: 0,
                scrollDirection: "down",
                scrollVelocity: 0,
                activeSection: null
            });

            function i(e) {
                let {
                    children: t
                } = e, [r, i] = (0, l.useState)({
                    scrollY: 0,
                    scrollProgress: 0,
                    scrollDirection: "down",
                    scrollVelocity: 0,
                    activeSection: null
                }), u = (0, l.useRef)(0), c = (0, l.useRef)(Date.now()), s = (0, l.useRef)(0), a = (0, l.useRef)(!1), d = (0, l.useRef)(null), f = (0, l.useRef)(null), h = (0, l.useRef)(window.innerHeight), m = (0, l.useRef)(document.documentElement.scrollHeight), p = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = !1,
                        t = null,
                        r = null,
                        n = () => {
                            let t = Date.now();
                            if (t - s.current < 150) {
                                e = !1;
                                return
                            }
                            let r = window.scrollY,
                                n = Math.abs(r - u.current),
                                l = t - c.current,
                                o = l > 0 && n > 0 ? n / l : 0,
                                a = h.current,
                                d = m.current - a,
                                p = d > 0 ? r / d : 0,
                                v = f.current;
                            i(n => {
                                let l = n.scrollDirection;
                                r > u.current + 1 ? l = "down" : r < u.current - 1 && (l = "up");
                                let i = Math.round(100 * o) / 100,
                                    c = Math.round(1e4 * Math.min(1, Math.max(0, p))) / 1e4,
                                    a = Math.abs(n.scrollVelocity - i) > .02,
                                    d = Math.abs(n.scrollProgress - c) > .001;
                                return !(1 > Math.abs(n.scrollY - r)) || d || n.scrollDirection !== l || n.activeSection !== v || a ? (s.current = t, {
                                    scrollY: r,
                                    scrollProgress: c,
                                    scrollDirection: l,
                                    scrollVelocity: i,
                                    activeSection: v
                                }) : (e = !1, n)
                            }), u.current = r, c.current = t, e = !1
                        },
                        l = () => {
                            e || (t = requestAnimationFrame(() => {
                                n()
                            }), e = !0)
                        };
                    window.addEventListener("scroll", l, {
                        passive: !0
                    });
                    let o = () => {
                        p.current = new ResizeObserver(() => {
                            h.current = window.innerHeight, m.current = document.documentElement.scrollHeight, e || (t = requestAnimationFrame(n), e = !0)
                        }), p.current.observe(document.documentElement), d.current = new IntersectionObserver(e => {
                            let t = null,
                                r = 0;
                            e.forEach(e => {
                                let n = e.intersectionRatio,
                                    l = h.current,
                                    o = e.boundingClientRect,
                                    i = 1 / (1 + Math.abs(o.top + o.height / 2 - l / 2) / l) * n;
                                i > r && e.isIntersecting && (r = i, t = e.target.id)
                            }), t && (f.current = t)
                        }, {
                            threshold: [.5],
                            rootMargin: "-40% 0px -40% 0px"
                        }), ["intro", "socials", "videos", "about", "dictionary"].forEach(e => {
                            let t = document.getElementById(e);
                            t && d.current && d.current.observe(t)
                        })
                    };
                    "undefined" != typeof requestIdleCallback ? requestIdleCallback(o, {
                        timeout: 500
                    }) : setTimeout(o, 0);
                    let v = () => {
                        h.current = window.innerHeight, m.current = document.documentElement.scrollHeight, a.current && n()
                    };
                    return window.addEventListener("resize", v, {
                        passive: !0
                    }), a.current || (r = setTimeout(() => {
                        a.current || (h.current = window.innerHeight, m.current = document.documentElement.scrollHeight, n(), a.current = !0)
                    }, 150)), () => {
                        t && cancelAnimationFrame(t), r && clearTimeout(r), window.removeEventListener("scroll", l), window.removeEventListener("resize", v), d.current && d.current.disconnect(), p.current && p.current.disconnect()
                    }
                }, []), (0, n.jsx)(o.Provider, {
                    value: {
                        scrollY: r.scrollY,
                        scrollProgress: r.scrollProgress,
                        scrollDirection: r.scrollDirection,
                        scrollVelocity: r.scrollVelocity,
                        activeSection: r.activeSection
                    },
                    children: t
                })
            }

            function u() {
                let e = (0, l.useContext)(o);
                if (!e) throw Error("useScroll must be used within ScrollProvider");
                return e
            }
        },
        79196: (e, t, r) => {
            r.d(t, {
                xQ: () => o
            });
            var n = r(12115),
                l = r(15131);

            function o() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = (0, n.useContext)(l.t);
                if (null === t) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: o,
                    register: i
                } = t, u = (0, n.useId)();
                (0, n.useEffect)(() => {
                    if (e) return i(u)
                }, [e]);
                let c = (0, n.useCallback)(() => e && o && o(u), [u, o, e]);
                return !r && o ? [!1, c] : [!0]
            }
        },
        80642: (e, t, r) => {
            r.d(t, {
                N: () => x
            });
            var n = r(95155),
                l = r(12115),
                o = r(39551),
                i = r(28819),
                u = r(4524),
                c = r(15131),
                s = r(78757),
                a = r(24866);

            function d(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            class f extends l.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            r = (0, s.s)(e) && e.offsetWidth || 0,
                            n = this.props.sizeRef.current;
                        n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft, n.right = r - n.width - n.left
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function h(e) {
                let {
                    children: t,
                    isPresent: r,
                    anchorX: o,
                    root: i
                } = e, u = (0, l.useId)(), c = (0, l.useRef)(null), s = (0, l.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }), {
                    nonce: h
                } = (0, l.useContext)(a.Q), m = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return l.useCallback(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return e => {
                            let r = !1,
                                n = t.map(t => {
                                    let n = d(t, e);
                                    return r || "function" != typeof n || (r = !0), n
                                });
                            if (r) return () => {
                                for (let e = 0; e < n.length; e++) {
                                    let r = n[e];
                                    "function" == typeof r ? r() : d(t[e], null)
                                }
                            }
                        }
                    }(...t), t)
                }(c, null == t ? void 0 : t.ref);
                return (0, l.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: t,
                        top: n,
                        left: l,
                        right: a
                    } = s.current;
                    if (r || !c.current || !e || !t) return;
                    let d = "left" === o ? `left: ${l}` : `right: ${a}`;
                    c.current.dataset.motionPopId = u;
                    let f = document.createElement("style");
                    h && (f.nonce = h);
                    let m = i ? ? document.head;
                    return m.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            top: ${n}px !important;
          }
        `), () => {
                        m.contains(f) && m.removeChild(f)
                    }
                }, [r]), (0, n.jsx)(f, {
                    isPresent: r,
                    childRef: c,
                    sizeRef: s,
                    children: l.cloneElement(t, {
                        ref: m
                    })
                })
            }
            let m = e => {
                let {
                    children: t,
                    initial: r,
                    isPresent: o,
                    onExitComplete: u,
                    custom: s,
                    presenceAffectsLayout: a,
                    mode: d,
                    anchorX: f,
                    root: m
                } = e, v = (0, i.M)(p), w = (0, l.useId)(), g = !0, x = (0, l.useMemo)(() => (g = !1, {
                    id: w,
                    initial: r,
                    isPresent: o,
                    custom: s,
                    onExitComplete: e => {
                        for (let t of (v.set(e, !0), v.values()))
                            if (!t) return;
                        u && u()
                    },
                    register: e => (v.set(e, !1), () => v.delete(e))
                }), [o, v, u]);
                return a && g && (x = { ...x
                }), (0, l.useMemo)(() => {
                    v.forEach((e, t) => v.set(t, !1))
                }, [o]), l.useEffect(() => {
                    o || v.size || !u || u()
                }, [o]), "popLayout" === d && (t = (0, n.jsx)(h, {
                    isPresent: o,
                    anchorX: f,
                    root: m,
                    children: t
                })), (0, n.jsx)(c.t.Provider, {
                    value: x,
                    children: t
                })
            };

            function p() {
                return new Map
            }
            var v = r(79196);
            let w = e => e.key || "";

            function g(e) {
                let t = [];
                return l.Children.forEach(e, e => {
                    (0, l.isValidElement)(e) && t.push(e)
                }), t
            }
            let x = e => {
                let {
                    children: t,
                    custom: r,
                    initial: c = !0,
                    onExitComplete: s,
                    presenceAffectsLayout: a = !0,
                    mode: d = "sync",
                    propagate: f = !1,
                    anchorX: h = "left",
                    root: p
                } = e, [x, E] = (0, v.xQ)(f), b = (0, l.useMemo)(() => g(t), [t]), y = f && !x ? [] : b.map(w), R = (0, l.useRef)(!0), C = (0, l.useRef)(b), M = (0, i.M)(() => new Map), [P, k] = (0, l.useState)(b), [S, j] = (0, l.useState)(b);
                (0, u.E)(() => {
                    R.current = !1, C.current = b;
                    for (let e = 0; e < S.length; e++) {
                        let t = w(S[e]);
                        y.includes(t) ? M.delete(t) : !0 !== M.get(t) && M.set(t, !1)
                    }
                }, [S, y.length, y.join("-")]);
                let L = [];
                if (b !== P) {
                    let e = [...b];
                    for (let t = 0; t < S.length; t++) {
                        let r = S[t],
                            n = w(r);
                        y.includes(n) || (e.splice(t, 0, r), L.push(r))
                    }
                    return "wait" === d && L.length && (e = L), j(g(e)), k(b), null
                }
                let {
                    forceRender: I
                } = (0, l.useContext)(o.L);
                return (0, n.jsx)(n.Fragment, {
                    children: S.map(e => {
                        let t = w(e),
                            l = (!f || !!x) && (b === S || y.includes(t));
                        return (0, n.jsx)(m, {
                            isPresent: l,
                            initial: (!R.current || !!c) && void 0,
                            custom: r,
                            presenceAffectsLayout: a,
                            mode: d,
                            root: p,
                            onExitComplete: l ? void 0 : () => {
                                if (!M.has(t)) return;
                                M.set(t, !0);
                                let e = !0;
                                M.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == I || I(), j(C.current), f && (null == E || E()), s && s())
                            },
                            anchorX: h,
                            children: e
                        }, t)
                    })
                })
            }
        }
    }
]);