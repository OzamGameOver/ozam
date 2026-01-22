(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        8931: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(12115);

            function s() {
                return (0, r.useEffect)(() => {
                    let e = console.error,
                        t = console.warn,
                        n = console.log,
                        r = console.info,
                        s = console.debug,
                        l = [/normal\?lang=auto/i, /challenges\.cloudflare\.com/i, /Private Access Token/i, /preloaded using link preload/i, /turnstile/i, /^Ko\s*@/i, /^Ky\s*@/i, /^NaN$/, /script-src.*default-src/i, /No available adapters/i],
                        o = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            let r = t.map(e => {
                                if ("string" == typeof e) return e;
                                if (e instanceof Error) return e.message;
                                try {
                                    return String(e)
                                } catch {
                                    return ""
                                }
                            }).join(" ");
                            return l.some(e => e.test(r))
                        };
                    return console.error = function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        o(...n) || e.apply(console, n)
                    }, console.warn = function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        o(...n) || t.apply(console, n)
                    }, console.log = function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        o(...t) || n.apply(console, t)
                    }, console.info = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        o(...t) || r.apply(console, t)
                    }, console.debug = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        o(...t) || s.apply(console, t)
                    }, () => {
                        console.error = e, console.warn = t, console.log = n, console.info = r, console.debug = s
                    }
                }, []), null
            }
        },
        19467: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => s
            });
            var r = n(12115);

            function s() {
                return (0, r.useEffect)(() => {
                    let e = () => {
                        document.querySelectorAll('link[rel="stylesheet"]').forEach(e => {
                            if (e.hasAttribute("data-async") || !e.href || !e.href.includes("/_next/static/css/") && !e.href.includes(".css")) return;
                            e.setAttribute("data-async", "true");
                            let t = e.media || "all";
                            e.media = "print";
                            let n = () => {
                                e.media = t, e.removeEventListener("load", n)
                            };
                            e.sheet || e.styleSheet ? e.media = t : (e.addEventListener("load", n), setTimeout(() => {
                                "print" === e.media && (e.media = t)
                            }, 100))
                        })
                    };
                    "complete" === document.readyState || "interactive" === document.readyState ? requestAnimationFrame(() => {
                        setTimeout(e, 0)
                    }) : document.addEventListener("DOMContentLoaded", () => {
                        requestAnimationFrame(() => {
                            setTimeout(e, 0)
                        })
                    }), window.addEventListener("load", e);
                    let t = new MutationObserver(t => {
                        let n = !1;
                        t.forEach(e => {
                            e.addedNodes.forEach(e => {
                                1 === e.nodeType && "LINK" === e.tagName && "stylesheet" === e.rel && (n = !0)
                            })
                        }), n && setTimeout(e, 0)
                    });
                    return t.observe(document.head, {
                        childList: !0,
                        subtree: !1
                    }), () => {
                        t.disconnect()
                    }
                }, []), null
            }
        },
        30299: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l
            });
            var r = n(95155);
            let s = (0, n(37206).default)(() => Promise.all([n.e(5792), n.e(5252)]).then(n.bind(n, 35252)), {
                loadableGenerated: {
                    webpack: () => [35252]
                },
                ssr: !1
            });

            function l(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(s, {
                    children: t
                })
            }
        },
        43532: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l
            });
            var r = n(95155),
                s = n(17064);

            function l(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(s.CP, {
                    children: t
                })
            }
        },
        48462: e => {
            e.exports = {
                style: {
                    fontFamily: "'Geist', 'Geist Fallback', system-ui, arial",
                    fontStyle: "normal"
                },
                className: "__className_188709",
                variable: "__variable_188709"
            }
        },
        56487: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => N
            });
            var r = n(95155),
                s = n(12115),
                l = n(17064),
                o = n(98500),
                i = n.n(o),
                a = n(73321),
                c = n(86901),
                d = n(54452),
                u = n(33210);
            let h = (0, n(78340).A)("menu", [
                ["path", {
                    d: "M4 5h16",
                    key: "1tepv9"
                }],
                ["path", {
                    d: "M4 12h16",
                    key: "1lakjw"
                }],
                ["path", {
                    d: "M4 19h16",
                    key: "1djgab"
                }]
            ]);
            var m = n(66341),
                x = n(82572),
                f = n(71833),
                v = n(69403),
                b = n(82301),
                p = n(80642),
                g = n(85003),
                w = n(44550),
                y = n(21453),
                j = n(30610),
                k = n(41463);

            function N() {
                var e, t, n;
                let {
                    data: o,
                    status: N
                } = (0, l.wV)(), {
                    scrollY: _
                } = (0, m.L)(), E = "/" === (0, a.usePathname)(), [L, C] = (0, s.useState)(!E), [M, S] = (0, s.useState)(!1), [A, P] = (0, s.useState)(!1), [T, B] = (0, s.useState)(!1), {
                    language: I,
                    switchLanguage: F,
                    t: z
                } = (0, j.o)();
                (0, s.useEffect)(() => {
                    E ? C(_.get() > 20) : C(!0)
                }, [E, _]), n = e => {
                    E && C(e > 20)
                }, (0, s.useInsertionEffect)(() => _.on("change", n), [_, "change", n]), (0, s.useEffect)(() => {
                    (null == o ? void 0 : o.user) && !o.user.displayName && P(!0)
                }, [o]), (0, s.useEffect)(() => {
                    let e = () => {
                        window.innerWidth >= 640 && B(!1)
                    };
                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, []);
                let G = (0, x.G)(_, [100, 250], E ? [0, 1] : [1, 1]),
                    R = (0, x.G)(_, [100, 250], E ? [20, 0] : [0, 0]),
                    q = (0, x.G)(_, e => !E || e > 150 ? "auto" : "none");
                return (0, r.jsxs)(f.F, {
                    features: v.l,
                    children: [(0, r.jsxs)("header", {
                        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${L?"py-2 bg-white/70 backdrop-blur-lg shadow-sm border-b border-pink-100/30":"py-2 bg-transparent"}`,
                        children: [(0, r.jsxs)("div", {
                            className: "container mx-auto px-2 sm:px-6 flex items-center justify-between",
                            children: [(0, r.jsx)(b.m.div, {
                                style: {
                                    opacity: G,
                                    y: R,
                                    pointerEvents: q
                                },
                                className: "flex items-center gap-2",
                                children: (0, r.jsxs)(i(), {
                                    href: "/",
                                    className: "text-xl sm:text-2xl font-bold flex items-center gap-1 text-foreground hover:scale-105 transition-transform",
                                    onClick: () => window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    }),
                                    children: [(0, r.jsxs)("div", {
                                        className: `flex items-center ${"en"===I?"gap-0.5":"gap-0"}`,
                                        children: [(0, r.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: z("nav.logoMain")
                                            }
                                        }), z("nav.logoSuffix") && (0, r.jsx)("span", {
                                            className: "text-pink-600",
                                            children: z("nav.logoSuffix")
                                        })]
                                    }), (0, r.jsx)(c.A, {
                                        className: "w-5 h-5 text-primary hidden sm:block"
                                    })]
                                })
                            }), (0, r.jsxs)("nav", {
                                className: "flex items-center gap-2 ms-auto",
                                children: [(0, r.jsxs)("div", {
                                    className: "hidden sm:flex bg-base-200 rounded-full p-1 items-center relative mr-2 text-sm",
                                    dir: "ltr",
                                    role: "group",
                                    "aria-label": "Language Switcher",
                                    children: [(0, r.jsx)(b.m.div, {
                                        className: "absolute bg-white shadow-sm rounded-full h-[calc(100%-8px)] top-1 bottom-1 w-[calc(50%-4px)] z-0",
                                        initial: !1,
                                        animate: {
                                            left: "en" === I ? "4px" : "calc(50%)"
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30
                                        }
                                    }), (0, r.jsx)("button", {
                                        onClick: () => F("en"),
                                        className: `relative z-10 px-3 py-1 text-xs font-bold rounded-full transition-colors ${"en"===I?"text-primary":"text-base-content/60"}`,
                                        children: "EN"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => F("ar"),
                                        className: `relative z-10 px-3 py-1 text-xs font-bold rounded-full transition-colors ${"ar"===I?"text-primary":"text-base-content/60"}`,
                                        children: "عربي"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "hidden sm:flex items-center gap-2",
                                    children: ["true" === k.env.NEXT_PUBLIC_ENABLE_GAMES && (0, r.jsxs)(i(), {
                                        href: "/games",
                                        className: "btn btn-ghost btn-sm gap-2 font-normal hover:bg-pink-50/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105 transition-all duration-500 ease-out",
                                        "aria-label": z("nav.games"),
                                        children: [(0, r.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, r.jsx)("rect", {
                                                x: "2",
                                                y: "6",
                                                width: "20",
                                                height: "12",
                                                rx: "2"
                                            }), (0, r.jsx)("path", {
                                                d: "M12 10v4"
                                            }), (0, r.jsx)("path", {
                                                d: "M8 10v4"
                                            }), (0, r.jsx)("path", {
                                                d: "M16 10v4"
                                            }), (0, r.jsx)("path", {
                                                d: "M7 6V4a1,1 0 0,1 1,-1h8a1,1 0 0,1 1,1v2"
                                            })]
                                        }), z("nav.games")]
                                    }), !1, !1, (0, r.jsxs)(i(), {
                                        href: "/museum",
                                        className: "btn btn-ghost btn-sm gap-2 font-normal hover:bg-pink-50/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105 transition-all duration-300",
                                        children: [(0, r.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, r.jsx)("rect", {
                                                x: "3",
                                                y: "3",
                                                width: "18",
                                                height: "18",
                                                rx: "2",
                                                ry: "2"
                                            }), (0, r.jsx)("line", {
                                                x1: "9",
                                                y1: "3",
                                                x2: "9",
                                                y2: "21"
                                            }), (0, r.jsx)("line", {
                                                x1: "15",
                                                y1: "3",
                                                x2: "15",
                                                y2: "21"
                                            }), (0, r.jsx)("line", {
                                                x1: "3",
                                                y1: "9",
                                                x2: "21",
                                                y2: "9"
                                            }), (0, r.jsx)("line", {
                                                x1: "3",
                                                y1: "15",
                                                x2: "21",
                                                y2: "15"
                                            })]
                                        }), (0, r.jsx)("span", {
                                            children: z("nav.museum")
                                        })]
                                    }), (0, r.jsxs)(i(), {
                                        href: "/credits",
                                        className: "btn btn-ghost btn-sm gap-2 font-normal hover:bg-pink-50/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105 transition-all duration-300",
                                        children: [(0, r.jsx)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, r.jsx)("path", {
                                                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                            })
                                        }), z("nav.credits")]
                                    }), (null == o || null == (e = o.user) ? void 0 : e.isAdmin) && (0, r.jsxs)(i(), {
                                        href: "/admin",
                                        className: "btn btn-ghost btn-sm gap-2 font-normal hover:bg-pink-50/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:scale-105 transition-all duration-300 text-purple-600",
                                        children: [(0, r.jsx)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, r.jsx)("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            })
                                        }), z("nav.admin")]
                                    })]
                                }), "loading" === N ? (0, r.jsx)("div", {
                                    className: "w-10 h-10 rounded-full bg-base-300 animate-pulse"
                                }) : (null == o ? void 0 : o.user) ? (0, r.jsx)(g.A, {
                                    user: o.user
                                }) : (0, r.jsxs)("button", {
                                    onClick: () => S(!0),
                                    className: "btn btn-primary btn-sm gap-2",
                                    children: [(0, r.jsx)(d.A, {
                                        className: "w-4 h-4"
                                    }), (0, r.jsx)("span", {
                                        className: "hidden sm:inline",
                                        children: z("nav.signIn")
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "sm:hidden ml-1",
                                    children: (0, r.jsx)("button", {
                                        className: "btn btn-ghost btn-circle btn-sm text-foreground",
                                        onClick: () => B(!T),
                                        "aria-label": "Toggle menu",
                                        children: T ? (0, r.jsx)(u.A, {
                                            className: "w-5 h-5"
                                        }) : (0, r.jsx)(h, {
                                            className: "w-5 h-5"
                                        })
                                    })
                                })]
                            })]
                        }), (0, r.jsx)(p.N, {
                            children: T && (0, r.jsx)(b.m.div, {
                                initial: {
                                    opacity: 0,
                                    height: 0
                                },
                                animate: {
                                    opacity: 1,
                                    height: "auto"
                                },
                                exit: {
                                    opacity: 0,
                                    height: 0
                                },
                                transition: {
                                    duration: .2
                                },
                                className: "sm:hidden bg-base-100 border-t border-base-200 shadow-xl overflow-hidden",
                                children: (0, r.jsxs)("nav", {
                                    className: "flex flex-col p-4 gap-2",
                                    children: ["true" === k.env.NEXT_PUBLIC_ENABLE_GAMES && (0, r.jsxs)(i(), {
                                        href: "/games",
                                        className: "btn btn-ghost w-full justify-start gap-3",
                                        onClick: () => B(!1),
                                        children: [(0, r.jsxs)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, r.jsx)("rect", {
                                                x: "2",
                                                y: "6",
                                                width: "20",
                                                height: "12",
                                                rx: "2"
                                            }), (0, r.jsx)("path", {
                                                d: "M12 10v4"
                                            }), (0, r.jsx)("path", {
                                                d: "M8 10v4"
                                            }), (0, r.jsx)("path", {
                                                d: "M16 10v4"
                                            }), (0, r.jsx)("path", {
                                                d: "M7 6V4a1,1 0 0,1 1,-1h8a1,1 0 0,1 1,1v2"
                                            })]
                                        }), z("nav.games")]
                                    }), !1, !1, (0, r.jsxs)(i(), {
                                        href: "/museum",
                                        className: "btn btn-ghost w-full justify-start gap-3",
                                        onClick: () => B(!1),
                                        children: [(0, r.jsxs)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [(0, r.jsx)("rect", {
                                                x: "3",
                                                y: "3",
                                                width: "18",
                                                height: "18",
                                                rx: "2",
                                                ry: "2"
                                            }), (0, r.jsx)("line", {
                                                x1: "9",
                                                y1: "3",
                                                x2: "9",
                                                y2: "21"
                                            }), (0, r.jsx)("line", {
                                                x1: "15",
                                                y1: "3",
                                                x2: "15",
                                                y2: "21"
                                            }), (0, r.jsx)("line", {
                                                x1: "3",
                                                y1: "9",
                                                x2: "21",
                                                y2: "9"
                                            }), (0, r.jsx)("line", {
                                                x1: "3",
                                                y1: "15",
                                                x2: "21",
                                                y2: "15"
                                            })]
                                        }), z("nav.museum")]
                                    }), (0, r.jsxs)(i(), {
                                        href: "/credits",
                                        className: "btn btn-ghost w-full justify-start gap-3",
                                        onClick: () => B(!1),
                                        children: [(0, r.jsx)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, r.jsx)("path", {
                                                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                            })
                                        }), z("nav.credits")]
                                    }), (null == o || null == (t = o.user) ? void 0 : t.isAdmin) && (0, r.jsxs)(i(), {
                                        href: "/admin",
                                        className: "btn btn-ghost w-full justify-start gap-3 text-purple-600",
                                        onClick: () => B(!1),
                                        children: [(0, r.jsx)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, r.jsx)("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            })
                                        }), z("nav.admin")]
                                    }), (0, r.jsx)("div", {
                                        className: "divider my-1"
                                    }), (0, r.jsxs)("div", {
                                        className: "flex bg-base-200 rounded-lg p-1",
                                        children: [(0, r.jsx)("button", {
                                            onClick: () => {
                                                F("en"), B(!1)
                                            },
                                            className: `flex-1 py-2 text-sm font-bold rounded-md transition-colors ${"en"===I?"bg-white shadow-sm text-primary":"text-base-content/60"}`,
                                            children: "English"
                                        }), (0, r.jsx)("button", {
                                            onClick: () => {
                                                F("ar"), B(!1)
                                            },
                                            className: `flex-1 py-2 text-sm font-bold rounded-md transition-colors ${"ar"===I?"bg-white shadow-sm text-primary":"text-base-content/60"}`,
                                            children: "عربي"
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), (0, r.jsx)(w.A, {
                        isOpen: M,
                        onClose: () => S(!1)
                    }), (0, r.jsx)(y.A, {
                        isOpen: A,
                        onClose: () => P(!1)
                    })]
                })
            }
        },
        61325: (e, t, n) => {
            Promise.resolve().then(n.t.bind(n, 66872, 23)), Promise.resolve().then(n.bind(n, 19467)), Promise.resolve().then(n.bind(n, 43532)), Promise.resolve().then(n.bind(n, 8931)), Promise.resolve().then(n.bind(n, 84064)), Promise.resolve().then(n.bind(n, 93917)), Promise.resolve().then(n.bind(n, 30299)), Promise.resolve().then(n.bind(n, 56487)), Promise.resolve().then(n.bind(n, 30610)), Promise.resolve().then(n.bind(n, 72069)), Promise.resolve().then(n.bind(n, 57953)), Promise.resolve().then(n.t.bind(n, 48462, 23)), Promise.resolve().then(n.t.bind(n, 85224, 23)), Promise.resolve().then(n.t.bind(n, 84172, 23)), Promise.resolve().then(n.t.bind(n, 84566, 23))
        },
        66872: () => {},
        72069: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => i,
                ScrollProvider: () => o
            });
            var r = n(95155),
                s = n(12115);
            let l = (0, s.createContext)({
                scrollY: 0,
                scrollProgress: 0,
                scrollDirection: "down",
                scrollVelocity: 0,
                activeSection: null
            });

            function o(e) {
                let {
                    children: t
                } = e, [n, o] = (0, s.useState)({
                    scrollY: 0,
                    scrollProgress: 0,
                    scrollDirection: "down",
                    scrollVelocity: 0,
                    activeSection: null
                }), i = (0, s.useRef)(0), a = (0, s.useRef)(Date.now()), c = (0, s.useRef)(0), d = (0, s.useRef)(!1), u = (0, s.useRef)(null), h = (0, s.useRef)(null), m = (0, s.useRef)(window.innerHeight), x = (0, s.useRef)(document.documentElement.scrollHeight), f = (0, s.useRef)(null);
                return (0, s.useEffect)(() => {
                    let e = !1,
                        t = null,
                        n = null,
                        r = () => {
                            let t = Date.now();
                            if (t - c.current < 150) {
                                e = !1;
                                return
                            }
                            let n = window.scrollY,
                                r = Math.abs(n - i.current),
                                s = t - a.current,
                                l = s > 0 && r > 0 ? r / s : 0,
                                d = m.current,
                                u = x.current - d,
                                f = u > 0 ? n / u : 0,
                                v = h.current;
                            o(r => {
                                let s = r.scrollDirection;
                                n > i.current + 1 ? s = "down" : n < i.current - 1 && (s = "up");
                                let o = Math.round(100 * l) / 100,
                                    a = Math.round(1e4 * Math.min(1, Math.max(0, f))) / 1e4,
                                    d = Math.abs(r.scrollVelocity - o) > .02,
                                    u = Math.abs(r.scrollProgress - a) > .001;
                                return !(1 > Math.abs(r.scrollY - n)) || u || r.scrollDirection !== s || r.activeSection !== v || d ? (c.current = t, {
                                    scrollY: n,
                                    scrollProgress: a,
                                    scrollDirection: s,
                                    scrollVelocity: o,
                                    activeSection: v
                                }) : (e = !1, r)
                            }), i.current = n, a.current = t, e = !1
                        },
                        s = () => {
                            e || (t = requestAnimationFrame(() => {
                                r()
                            }), e = !0)
                        };
                    window.addEventListener("scroll", s, {
                        passive: !0
                    });
                    let l = () => {
                        f.current = new ResizeObserver(() => {
                            m.current = window.innerHeight, x.current = document.documentElement.scrollHeight, e || (t = requestAnimationFrame(r), e = !0)
                        }), f.current.observe(document.documentElement), u.current = new IntersectionObserver(e => {
                            let t = null,
                                n = 0;
                            e.forEach(e => {
                                let r = e.intersectionRatio,
                                    s = m.current,
                                    l = e.boundingClientRect,
                                    o = 1 / (1 + Math.abs(l.top + l.height / 2 - s / 2) / s) * r;
                                o > n && e.isIntersecting && (n = o, t = e.target.id)
                            }), t && (h.current = t)
                        }, {
                            threshold: [.5],
                            rootMargin: "-40% 0px -40% 0px"
                        }), ["intro", "socials", "videos", "about", "dictionary"].forEach(e => {
                            let t = document.getElementById(e);
                            t && u.current && u.current.observe(t)
                        })
                    };
                    "undefined" != typeof requestIdleCallback ? requestIdleCallback(l, {
                        timeout: 500
                    }) : setTimeout(l, 0);
                    let v = () => {
                        m.current = window.innerHeight, x.current = document.documentElement.scrollHeight, d.current && r()
                    };
                    return window.addEventListener("resize", v, {
                        passive: !0
                    }), d.current || (n = setTimeout(() => {
                        d.current || (m.current = window.innerHeight, x.current = document.documentElement.scrollHeight, r(), d.current = !0)
                    }, 150)), () => {
                        t && cancelAnimationFrame(t), n && clearTimeout(n), window.removeEventListener("scroll", s), window.removeEventListener("resize", v), u.current && u.current.disconnect(), f.current && f.current.disconnect()
                    }
                }, []), (0, r.jsx)(l.Provider, {
                    value: {
                        scrollY: n.scrollY,
                        scrollProgress: n.scrollProgress,
                        scrollDirection: n.scrollDirection,
                        scrollVelocity: n.scrollVelocity,
                        activeSection: n.activeSection
                    },
                    children: t
                })
            }

            function i() {
                let e = (0, s.useContext)(l);
                if (!e) throw Error("useScroll must be used within ScrollProvider");
                return e
            }
        },
        84064: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var r = n(95155),
                s = n(12115);
            let l = (0, n(37206).default)(() => n.e(6353).then(n.bind(n, 86353)), {
                loadableGenerated: {
                    webpack: () => [86353]
                },
                ssr: !1
            });

            function o() {
                let [e, t] = (0, s.useState)(!1);
                return ((0, s.useEffect)(() => {
                    if ("undefined" != typeof requestIdleCallback) {
                        let e = requestIdleCallback(() => {
                            t(!0)
                        }, {
                            timeout: 3e3
                        });
                        return () => cancelIdleCallback(e)
                    }
                    if ("complete" === document.readyState) {
                        let e = setTimeout(() => {
                            t(!0)
                        }, 500);
                        return () => clearTimeout(e)
                    } {
                        let e = () => {
                            setTimeout(() => {
                                t(!0)
                            }, 500)
                        };
                        return window.addEventListener("load", e, {
                            once: !0
                        }), () => {
                            window.removeEventListener("load", e)
                        }
                    }
                }, []), e) ? (0, r.jsx)(l, {}) : null
            }
        },
        84172: e => {
            e.exports = {
                style: {
                    fontFamily: "'Tajawal', 'Tajawal Fallback', Arial, Helvetica, sans-serif",
                    fontStyle: "normal"
                },
                className: "__className_55e5a1",
                variable: "__variable_55e5a1"
            }
        },
        84566: e => {
            e.exports = {
                style: {
                    fontFamily: "'Baloo Bhaijaan 2', 'Baloo Bhaijaan 2 Fallback', Arial, Helvetica, sans-serif",
                    fontStyle: "normal"
                },
                className: "__className_1d86b9",
                variable: "__variable_1d86b9"
            }
        },
        85224: e => {
            e.exports = {
                style: {
                    fontFamily: "'Geist Mono', 'Geist Mono Fallback', monospace",
                    fontStyle: "normal"
                },
                className: "__className_9a8899",
                variable: "__variable_9a8899"
            }
        },
        93917: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var r = n(95155),
                s = n(12115);
            let l = (0, n(37206).default)(() => n.e(172).then(n.bind(n, 20172)), {
                loadableGenerated: {
                    webpack: () => [20172]
                },
                ssr: !1
            });

            function o() {
                let [e, t] = (0, s.useState)(!1);
                return ((0, s.useEffect)(() => {
                    "undefined" != typeof requestIdleCallback ? requestIdleCallback(() => {
                        t(!0)
                    }, {
                        timeout: 2e3
                    }) : setTimeout(() => {
                        t(!0)
                    }, 200)
                }, []), e) ? (0, r.jsx)(l, {}) : null
            }
        }
    },
    e => {
        e.O(0, [7513, 4373, 8500, 6461, 1171, 7258, 9817, 9298, 2328, 8441, 3794, 7358], () => e(e.s = 61325)), _N_E = e.O()
    }
]);