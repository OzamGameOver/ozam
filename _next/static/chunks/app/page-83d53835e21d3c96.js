(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8974], {
        5214: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return a.workAsyncStorageInstance
                }
            });
            let a = r(17828)
        },
        5772: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i.a
            });
            var a = r(97651),
                i = r.n(a)
        },
        7686: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = (0, r(78340).A)("heart", [
                ["path", {
                    d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
                    key: "mvr1a0"
                }]
            ])
        },
        9981: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => _
            });
            var a = r(95155),
                i = r(12115),
                l = r(37206),
                n = r(5772);
            r(98500);
            let s = (0, l.default)(() => r.e(9592).then(r.bind(r, 69592)), {
                loadableGenerated: {
                    webpack: () => [69592]
                },
                ssr: !1
            });

            function o(e) {
                let {
                    src: t = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                    label: r = "Play"
                } = e, l = (0, i.useRef)(null), n = (0, i.useRef)(null), [o, c] = (0, i.useState)(!1), [d, u] = (0, i.useState)(!1);
                async function m() {
                    let e = l.current;
                    if (e) try {
                        e.paused ? await e.play() : e.pause()
                    } catch (e) {}
                }(0, i.useEffect)(() => {
                    let e = l.current;
                    if (!e) return;
                    let t = () => c(!0),
                        r = () => c(!1),
                        a = () => c(!1),
                        i = () => u(!0);
                    e.addEventListener("play", t), e.addEventListener("pause", r), e.addEventListener("ended", a), e.addEventListener("canplay", i), e.addEventListener("error", () => u(!1));
                    try {
                        "auto" !== e.preload && (e.preload = "auto"), "function" == typeof e.load && e.load()
                    } catch {}
                    return () => {
                        e.removeEventListener("play", t), e.removeEventListener("pause", r), e.removeEventListener("ended", a), e.removeEventListener("canplay", i)
                    }
                }, []), (0, i.useEffect)(() => {
                    if (!o) return;
                    let e = n.current;
                    if (!e) return;
                    let t = !1;

                    function r() {
                        if (t || !e) return;
                        let r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        r.setAttribute("viewBox", "0 0 24 24"), r.setAttribute("width", "18"), r.setAttribute("height", "18"), r.classList ? r.classList.add("music-note") : r.setAttribute("class", "music-note");
                        let a = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        a.setAttribute("d", "M12 3v10.55A4 4 0 1 1 10 9h2V5l6-2v6.55A4 4 0 1 1 16 9V4.5L12 6V3z"), a.setAttribute("fill", "currentColor"), r.appendChild(a);
                        let i = 50 + (34 * Math.random() - 17),
                            l = .9 + .8 * Math.random(),
                            n = 1200 + 900 * Math.random(),
                            s = 140 + 20 * Math.random(),
                            c = 70 + 20 * Math.random(),
                            d = 55 + 10 * Math.random(),
                            u = (24 * Math.random() - 12).toFixed(1) + "px";
                        r.style.left = `${i}%`, r.style.setProperty("--note-scale", String(l)), r.style.setProperty("--drift", u);
                        let m = o ? "#ffffff" : `hsl(${s} ${c}% ${d}%)`;
                        r.style.setProperty("--note-color", m), r.style.animationDuration = `${n}ms`, e.appendChild(r);
                        let f = () => {
                            r.removeEventListener("animationend", f), r.remove()
                        };
                        r.addEventListener("animationend", f)
                    }
                    for (let e = 0; e < 3; e++) r();
                    let a = setInterval(() => {
                        e.querySelectorAll(".music-note").length < 5 && r()
                    }, 360);
                    return () => {
                        t = !0, clearInterval(a)
                    }
                }, [o]);
                let f = o ? "Pause" : "Play";
                return (0, a.jsxs)("div", {
                    ref: n,
                    className: "relative inline-flex items-center",
                    "aria-live": "polite",
                    children: [(0, a.jsx)(s, {
                        playing: o
                    }), (0, a.jsxs)("button", {
                        type: "button",
                        onClick: m,
                        "aria-pressed": o,
                        "aria-label": f,
                        className: `btn btn-accent btn-sm gap-2 ${o?"is-playing":""} ${!d?"opacity-90":""}`,
                        children: [(0, a.jsx)("span", {
                            className: `inline-flex items-center justify-center w-5 h-5 rounded-full ${o?"bg-[#0b0b0b]/80 text-white":"bg-[rgba(242,47,152,0.14)] text-[#a82273]"}`,
                            children: o ? (0, a.jsxs)("svg", {
                                viewBox: "0 0 24 24",
                                width: "12",
                                height: "12",
                                "aria-hidden": "true",
                                children: [(0, a.jsx)("rect", {
                                    x: "6",
                                    y: "5",
                                    width: "4",
                                    height: "14",
                                    fill: "currentColor"
                                }), (0, a.jsx)("rect", {
                                    x: "14",
                                    y: "5",
                                    width: "4",
                                    height: "14",
                                    fill: "currentColor"
                                })]
                            }) : (0, a.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                width: "12",
                                height: "12",
                                "aria-hidden": "true",
                                children: (0, a.jsx)("path", {
                                    d: "M8 5v14l11-7z",
                                    fill: "currentColor"
                                })
                            })
                        }), (0, a.jsx)("span", {
                            className: "whitespace-nowrap font-medium",
                            children: r
                        })]
                    }), (0, a.jsx)("audio", {
                        ref: l,
                        src: t,
                        preload: "auto"
                    })]
                })
            }
            var c = r(57953),
                d = r(84515),
                u = r(86901),
                m = r(7686),
                f = r(92289),
                h = r(66341),
                p = r(82572),
                g = r(71833),
                b = r(69403),
                x = r(82301),
                v = r(30610);

            function w() {
                let {
                    showToast: e
                } = (0, c.d)(), {
                    language: t,
                    t: r
                } = (0, v.o)(), [l, s] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    let e = !1,
                        t = async () => {
                            try {
                                let t = await fetch("/api/twitch/live");
                                if (t.ok) {
                                    let r = await t.json();
                                    !e && r.isLive && s(!0)
                                }
                            } catch (e) {
                                console.error("Failed to check Twitch status", e)
                            }
                        };
                    if ("undefined" != typeof requestIdleCallback) {
                        let r = requestIdleCallback(() => {
                            e || t()
                        }, {
                            timeout: 3e3
                        });
                        return () => {
                            e = !0, cancelIdleCallback(r)
                        }
                    } {
                        let r = setTimeout(() => {
                            e || t()
                        }, 2e3);
                        return () => {
                            e = !0, clearTimeout(r)
                        }
                    }
                }, []);
                let w = (0, i.useCallback)(async () => {
                        try {
                            await navigator.clipboard.writeText("meowlyva@gmail.com"), e("Email copied to clipboard!", "success")
                        } catch (t) {
                            e("Failed to copy email", "error")
                        }
                    }, [e]),
                    {
                        scrollY: y
                    } = (0, h.L)(),
                    j = (0, p.G)(y, [0, 300], [1, 0]),
                    k = (0, p.G)(y, [0, 300], [0, -50]);
                return (0, a.jsx)(g.F, {
                    features: b.l,
                    children: (0, a.jsx)("section", {
                        id: "intro",
                        className: "intro-panel relative flex min-h-[calc(100vh-5rem)] w-full items-stretch text-slate-900 overflow-hidden lg:items-end",
                        "aria-label": "MeowlyVA introduction",
                        children: (0, a.jsxs)("div", {
                            className: "relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-between gap-8 container-padding pb-0 pt-4 sm:pt-6 lg:flex-row lg:items-end lg:gap-12 lg:pb-6",
                            children: [(0, a.jsxs)(x.m.div, {
                                style: {
                                    opacity: j,
                                    y: k
                                },
                                className: "flex-1 text-start lg:max-w-lg lg:pb-10 relative z-10",
                                children: [(0, a.jsxs)("a", {
                                    href: "https://www.twitch.tv/meowlyva",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: `badge badge-sm gap-1.5 cursor-pointer group/live hover:scale-105 transition-transform duration-200 mb-4 inline-flex items-center ${l?"badge-error":"badge-ghost"}`,
                                    children: [(0, a.jsx)("span", {
                                        className: "relative flex h-2 w-2",
                                        children: l ? (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)("span", {
                                                className: "animate-ping-optimized absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"
                                            }), (0, a.jsx)("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-red-500"
                                            })]
                                        }) : (0, a.jsx)("span", {
                                            className: "relative inline-flex rounded-full h-2 w-2 bg-slate-400"
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: `text-[10px] uppercase font-bold tracking-wider group-hover/live:opacity-80 transition-opacity ${l?"text-white":"text-gray-700"}`,
                                        children: r(l ? "intro.live" : "intro.offline")
                                    })]
                                }), (0, a.jsxs)("h1", {
                                    className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground flex items-center gap-2 mb-4 overflow-visible",
                                    children: ["en" === t ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("span", {
                                            className: "inline-block transform hover:scale-110 hover:rotate-3 transition-transform",
                                            children: "Meowly"
                                        }), (0, a.jsx)("span", {
                                            className: "text-pink-600 inline-block transform hover:rotate-12 transition-transform",
                                            children: "VA"
                                        })]
                                    }) : (0, a.jsxs)("span", {
                                        className: "inline-block transform hover:scale-105 hover:rotate-2 transition-transform",
                                        children: [(0, a.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                                __html: r("nav.logoMain")
                                            }
                                        }), (0, a.jsx)("span", {
                                            className: "text-pink-600",
                                            children: r("nav.logoSuffix")
                                        })]
                                    }), (0, a.jsx)(u.A, {
                                        className: "icon-responsive text-primary",
                                        strokeWidth: 2,
                                        "aria-hidden": "true"
                                    })]
                                }), (0, a.jsxs)("h2", {
                                    className: "intro-headline text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#f22f98] relative inline-flex items-center gap-3 mb-6 overflow-visible",
                                    dir: "auto",
                                    children: [(0, a.jsx)(m.A, {
                                        className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary opacity-60 animate-pulse",
                                        strokeWidth: 2,
                                        "aria-hidden": "true"
                                    }), r("intro.tagline"), (0, a.jsx)(m.A, {
                                        className: "w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary opacity-60 animate-pulse animation-delay-500",
                                        strokeWidth: 2,
                                        "aria-hidden": "true"
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex justify-start",
                                    children: (0, a.jsxs)("span", {
                                        className: "badge badge-lg badge-primary gap-2 flex items-center mb-6",
                                        children: [(0, a.jsx)(u.A, {
                                            className: "w-4 h-4",
                                            strokeWidth: 2,
                                            "aria-hidden": "true"
                                        }), r("intro.roles"), (0, a.jsx)(u.A, {
                                            className: "w-4 h-4",
                                            strokeWidth: 2,
                                            "aria-hidden": "true"
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "flex flex-wrap items-center gap-3 justify-center lg:justify-start",
                                    children: [(0, a.jsx)("div", {
                                        className: "tooltip tooltip-top",
                                        "data-tip": "meowlyva@gmail.com (Click to copy)",
                                        children: (0, a.jsxs)("button", {
                                            onClick: w,
                                            className: "btn btn-primary btn-sm gap-2",
                                            "aria-label": `${r("intro.business")} - Copy email to clipboard`,
                                            type: "button",
                                            children: [(0, a.jsx)(f.A, {
                                                className: "w-4 h-4",
                                                strokeWidth: 2.5,
                                                "aria-hidden": "true"
                                            }), (0, a.jsx)("span", {
                                                className: "whitespace-nowrap",
                                                children: r("intro.business")
                                            })]
                                        })
                                    }), (0, a.jsx)(o, {
                                        src: (0, d.s)(d.k.MEOWLY_AUDIO),
                                        label: r("intro.listen")
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "flex-1 w-full self-stretch sm:self-auto mt-auto lg:mt-0 lg:self-end lg:flex lg:justify-end overlap-up relative min-h-[50vh] flex items-end justify-center lg:justify-end",
                                children: (0, a.jsxs)("a", {
                                    href: "https://www.instagram.com/thevarooon",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group relative block cursor-pointer z-0 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300",
                                    title: r("intro.artwork"),
                                    children: [(0, a.jsx)(n.default, {
                                        src: (0, d.s)(d.k.HEADER_1),
                                        alt: "MeowlyVA illustrated portrait by Varoon",
                                        loading: "eager",
                                        width: 1024,
                                        height: 1024,
                                        sizes: "(max-width: 640px) 90vw, (max-width: 1024px) min(80vw, 900px), min(75vw, 900px)",
                                        className: "block w-[min(90vw,960px)] self-end object-contain object-bottom sm:w-[min(80vw,900px)] lg:w-[min(75vw,900px)] transition-transform duration-300 ease-out group-hover:scale-[1.05] group-hover:-rotate-1",
                                        style: {
                                            transform: "translateZ(0)"
                                        },
                                        priority: !0
                                    }), (0, a.jsxs)("span", {
                                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap flex items-center gap-1.5",
                                        children: [r("intro.artwork"), (0, a.jsx)(u.A, {
                                            className: "w-3 h-3",
                                            strokeWidth: 2,
                                            "aria-hidden": "true"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            var y = r(24455),
                j = r(41463);
            let k = (0, l.default)(() => r.e(9733).then(r.bind(r, 79733)), {
                    loadableGenerated: {
                        webpack: () => [79733]
                    },
                    loading: () => (0, a.jsx)(y.A, {
                        height: "min-h-[400px]"
                    }),
                    ssr: !1
                }),
                A = (0, l.default)(() => r.e(3477).then(r.bind(r, 3477)), {
                    loadableGenerated: {
                        webpack: () => [3477]
                    },
                    loading: () => (0, a.jsx)(y.A, {
                        height: "min-h-[400px]"
                    }),
                    ssr: !1
                }),
                N = (0, l.default)(() => Promise.all([r.e(3341), r.e(2054)]).then(r.bind(r, 12054)), {
                    loadableGenerated: {
                        webpack: () => [12054]
                    },
                    loading: () => (0, a.jsx)(y.A, {
                        height: "min-h-screen"
                    })
                }),
                E = (0, l.default)(() => r.e(8017).then(r.bind(r, 38017)), {
                    loadableGenerated: {
                        webpack: () => [38017]
                    },
                    loading: () => (0, a.jsx)(y.A, {
                        height: "min-h-[500px]"
                    }),
                    ssr: !1
                }),
                M = (0, l.default)(() => r.e(1968).then(r.bind(r, 31968)), {
                    loadableGenerated: {
                        webpack: () => [31968]
                    },
                    loading: () => (0, a.jsx)("div", {
                        className: "min-h-[200px]"
                    })
                }),
                S = (0, l.default)(() => Promise.all([r.e(5792), r.e(2678)]).then(r.bind(r, 12678)), {
                    loadableGenerated: {
                        webpack: () => [12678]
                    },
                    ssr: !1
                }),
                L = (0, l.default)(() => r.e(1430).then(r.bind(r, 21430)), {
                    loadableGenerated: {
                        webpack: () => [21430]
                    },
                    ssr: !1
                });

            function _() {
                let e;
                e = (0, i.useRef)(!1), (0, i.useEffect)(() => {
                    let t = t => {
                            ("INPUT" === t.target.tagName || "TEXTAREA" === t.target.tagName || t.target.isContentEditable) && (e.current = !0)
                        },
                        r = () => {
                            e.current = !1
                        },
                        a = t => {
                            if (!e.current) {
                                if ("/" === t.key && !t.ctrlKey && !t.metaKey && !t.shiftKey && !t.altKey) {
                                    t.preventDefault();
                                    let e = document.querySelector('#dictionary input[type="text"]');
                                    e && e.focus()
                                }
                                if ("?" === t.key && !t.ctrlKey && !t.metaKey && t.shiftKey && !t.altKey) {
                                    t.preventDefault();
                                    let e = document.getElementById("keyboard-shortcuts-help");
                                    e && e.showModal()
                                }
                                "Escape" === t.key && document.querySelectorAll("[open]").forEach(e => {
                                    "DIALOG" === e.tagName && e.close()
                                })
                            }
                        };
                    return document.addEventListener("focusin", t), document.addEventListener("focusout", r), document.addEventListener("keydown", a), () => {
                        document.removeEventListener("focusin", t), document.removeEventListener("focusout", r), document.removeEventListener("keydown", a)
                    }
                }, []);
                let [t, r] = (0, i.useState)(null), [l] = (0, i.useState)(j.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || "UCZqJO-vJ98ZFRs6DPAeETyg");
                return (0, i.useEffect)(() => {
                    let e = !1,
                        t = async () => {
                            try {
                                let t = "youtube_channel_data",
                                    a = null;
                                try {
                                    a = localStorage.getItem(t)
                                } catch (e) {
                                    console.error("Failed to read from localStorage:", e)
                                }
                                if (a) try {
                                    let {
                                        data: t,
                                        timestamp: i
                                    } = JSON.parse(a);
                                    if (!(Date.now() - i > 36e5)) {
                                        e || r(t);
                                        return
                                    }
                                } catch (e) {
                                    console.error("Failed to parse cached data:", e)
                                }
                                let i = await fetch("/api/youtube/channel"),
                                    l = await i.json();
                                if (e) return;
                                try {
                                    localStorage.setItem(t, JSON.stringify({
                                        data: l,
                                        timestamp: Date.now()
                                    }))
                                } catch (e) {
                                    console.error("Failed to write to localStorage:", e)
                                }
                                r(l)
                            } catch (e) {
                                console.error("Failed to fetch channel data:", e)
                            }
                        };
                    if ("undefined" != typeof requestIdleCallback) {
                        let r = requestIdleCallback(() => {
                            e || t()
                        }, {
                            timeout: 2500
                        });
                        return () => {
                            e = !0, cancelIdleCallback(r)
                        }
                    } {
                        let r = setTimeout(() => {
                            e || t()
                        }, 1500);
                        return () => {
                            e = !0, clearTimeout(r)
                        }
                    }
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(S, {}), (0, a.jsx)(L, {}), (0, a.jsx)("div", {
                        className: "unified-page-background",
                        children: (0, a.jsxs)("main", {
                            id: "main-content",
                            className: "relative",
                            children: [(0, a.jsx)(w, {}), (0, a.jsx)(k, {
                                initialChannel: t,
                                channelId: l
                            }), (0, a.jsx)(A, {}), (0, a.jsx)(N, {}), (0, a.jsx)(E, {}), (0, a.jsx)(M, {})]
                        })
                    })]
                })
            }
        },
        15260: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 9981))
        },
        17828: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = (0, r(64054).createAsyncLocalStorage)()
        },
        21957: (e, t, r) => {
            "use strict";

            function a(e) {
                let {
                    moduleIds: t
                } = e;
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), r(95155), r(47650), r(5214), r(2451), r(53887)
        },
        24455: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var a = r(95155);

            function i(e) {
                let {
                    height: t = "min-h-screen"
                } = e;
                return (0, a.jsx)("div", {
                    className: `w-full ${t} flex flex-col items-center justify-center p-4`,
                    children: (0, a.jsxs)("div", {
                        className: "w-full max-w-6xl animate-pulse space-y-8",
                        children: [(0, a.jsx)("div", {
                            className: "h-8 bg-slate-200/50 rounded w-1/4 mx-auto"
                        }), (0, a.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: [(0, a.jsx)("div", {
                                className: "h-64 bg-slate-200/50 rounded-2xl"
                            }), (0, a.jsx)("div", {
                                className: "h-64 bg-slate-200/50 rounded-2xl hidden md:block"
                            }), (0, a.jsx)("div", {
                                className: "h-64 bg-slate-200/50 rounded-2xl hidden lg:block"
                            })]
                        })]
                    })
                })
            }
        },
        30610: (e, t, r) => {
            "use strict";
            r.d(t, {
                LanguageProvider: () => o,
                o: () => s
            });
            var a = r(95155),
                i = r(12115);
            let l = {
                    en: {
                        nav: {
                            logoMain: "Meowly",
                            logoSuffix: "VA",
                            games: "Games",
                            lore: "Lore",
                            models: "Models",
                            museum: "Museum",
                            credits: "Credits",
                            admin: "Admin",
                            signIn: "Sign In",
                            home: "Home",
                            profile: "Profile",
                            settings: "Settings",
                            logout: "Sign Out",
                            displayName: "Display Name"
                        },
                        common: {
                            loading: "Loading...",
                            error: "Error",
                            success: "Success",
                            save: "Save",
                            cancel: "Cancel",
                            delete: "Delete",
                            edit: "Edit",
                            submit: "Submit",
                            view: "View"
                        },
                        home: {
                            heroTitle: "MeowlyVA",
                            heroSubtitle: "Egyptian VTuber, Voice Actress & Streamer"
                        },
                        footer: {
                            rights: "All rights reserved."
                        },
                        intro: {
                            live: "Live on Twitch",
                            offline: "Not Live",
                            tagline: "خليك حد ملهلب",
                            roles: "VTuber • Voice Actress • Streamer",
                            business: "Business Inquiries",
                            listen: "Listen",
                            artwork: "Artwork by Varoon"
                        },
                        socials: {
                            title: "Find Me Everywhere",
                            subscribers: "Subscribers",
                            views: "Views",
                            officialAccount: "Official Account",
                            officialPage: "Official Page"
                        },
                        videos: {
                            title: "Latest Videos",
                            viewMore: "View More on YouTube"
                        },
                        dictionary: {
                            title: "Meowly Dictionary",
                            subtitle: "Learn the spicy Meowly language!",
                            searchPlaceholder: "Search for a word...",
                            noResults: "No results found for",
                            clearSearch: "Clear search",
                            result: "result",
                            results: "results"
                        },
                        museum: {
                            title: "Museum of MeowlyVA",
                            submit: "Submit",
                            emptyTitle: "No items in the museum yet",
                            emptyDesc: "The museum is empty currently. Check back soon!",
                            prev: "Previous",
                            next: "Next",
                            error: "Error"
                        },
                        submit: {
                            title: "Media Submission",
                            desc: "Here you can submit art for MeowlyVA to see!",
                            uploadLabel: "Upload Media",
                            dropLabel: "Drop files here!",
                            clickLabel: "Click or drag files here",
                            limits: "Max 3 files • Max 10MB per file • JPEG, PNG, GIF, WebP",
                            displayName: "Display Name",
                            message: "Message (Optional)",
                            messagePlaceholder: "Add a message...",
                            send: "Send Media",
                            sending: "Sending...",
                            loginRequired: "Login Required",
                            loginDesc: "Log in to share media",
                            loginBtn: "Sign In",
                            success: "Submission received! Thanks for sharing your art!",
                            guidelines: "But make sure to follow the rules:",
                            rule1: "No inappropriate content.",
                            rule2: "Only artwork you own or have permission for.",
                            rule3: "Do not spam submissions."
                        },
                        about: {
                            title: "Get to Know Me"
                        },
                        credits: {
                            title: "Credits",
                            subtitle: "Special thanks to the amazing people who contributed to MeowlyVA",
                            back: "Back to Home",
                            mainTeam: "Main Team",
                            contributors: "Contributors",
                            manager: "Manager",
                            mainArtist: "Main Artist",
                            mainEditor: "Main Editor",
                            stinger: "Stinger Animation",
                            gifs: "Animated GIFs",
                            chibi: "Pixel Chibi Live2D Model",
                            emote: "Animated Emote"
                        }
                    },
                    ar: {
                        nav: {
                            logoMain: "مياولي&zwj;",
                            logoSuffix: "ڤا",
                            games: "ألعاب",
                            lore: "القصة",
                            models: "الموديلات",
                            museum: "المتحف",
                            credits: "الحقوق",
                            admin: "الإدارة",
                            signIn: "تسجيل الدخول",
                            home: "الرئيسية",
                            profile: "الملف الشخصي",
                            settings: "الإعدادات",
                            logout: "تسجيل الخروج",
                            displayName: "اسم العرض"
                        },
                        common: {
                            loading: "جاري التحميل...",
                            error: "خطأ",
                            success: "تم بنجاح",
                            save: "حفظ",
                            cancel: "إلغاء",
                            delete: "حذف",
                            edit: "تعديل",
                            submit: "إرسال",
                            view: "عرض"
                        },
                        home: {
                            heroTitle: "مياوليڤا",
                            heroSubtitle: "فيتيوبر مصرية، مؤدية صوت وستريمر"
                        },
                        footer: {
                            rights: "جميع الحقوق محفوظة."
                        },
                        intro: {
                            live: "مباشر على تويتش",
                            offline: "غير متصل",
                            tagline: "خليك حد ملهلب",
                            roles: "فيتيوبر • مؤدية صوت • ستريمر",
                            business: "للاعلانات",
                            listen: "استمع",
                            artwork: "رسم بواسطة ڤارون"
                        },
                        socials: {
                            title: "تابعني في كل مكان",
                            subscribers: "مشترك",
                            views: "مشاهدة",
                            officialAccount: "الحساب الرسمي",
                            officialPage: "الصفحة الرسمية"
                        },
                        videos: {
                            title: "أحدث الفيديوهات",
                            viewMore: "شاهد المزيد على يوتيوب"
                        },
                        dictionary: {
                            title: "قاموس مياوليڤا",
                            subtitle: "تعلم لغة المياوليڤا الملهلبة!",
                            searchPlaceholder: "ابحث عن كلمة...",
                            noResults: "لم يتم العثور على نتائج لـ",
                            clearSearch: "مسح البحث",
                            result: "نتيجة",
                            results: "نتائج"
                        },
                        museum: {
                            title: "متحف المياوليڤا",
                            submit: "مشاركة",
                            emptyTitle: "لا توجد عناصر في المتحف بعد",
                            emptyDesc: "المتحف فارغ حالياً. تحقق مرة أخرى قريباً!",
                            prev: "السابق",
                            next: "التالي",
                            error: "خطأ"
                        },
                        submit: {
                            title: "مشاركة الميديا",
                            desc: "هنا تقدر ترسل صور لمياوليڤا علشان تشوفها",
                            uploadLabel: "رفع الميديا",
                            dropLabel: "أسقط الملفات هنا!",
                            clickLabel: "انقر أو اسحب الملفات هنا",
                            limits: "حد أقصى 3 ملفات • حد أقصى 10 ميجابايت لكل ملف • JPEG, PNG, GIF, WebP",
                            displayName: "اسم العرض",
                            message: "رسالة (اختياري)",
                            messagePlaceholder: "أضف رسالة لإرسالك…",
                            send: "إرسال الميديا",
                            sending: "جاري الإرسال…",
                            loginRequired: "يجب تسجيل الدخول",
                            loginDesc: "سجل دخول لمشاركة الميديا",
                            loginBtn: "تسجيل الدخول",
                            success: "تم استلام إرسالك! شكراً لمشاركة فنك!",
                            guidelines: "لكن تأكد من اتباع القوانين:",
                            rule1: "لا ترسل صور غير لائقة أو تحتوي على محتوى مسيء.",
                            rule2: "لا ترسل صور مو ملكك أو مسروقة من فنانين بدون إذن.",
                            rule3: "لا تكرر نفس الصورة أكثر من مرة."
                        },
                        about: {
                            title: "تعرف عليّ"
                        },
                        credits: {
                            title: "الحقوق",
                            subtitle: "شكر خاص للأشخاص الرائعين الذين ساهموا في مياوليڤا",
                            back: "العودة للرئيسية",
                            mainTeam: "الفريق الرئيسي",
                            contributors: "المساهمون",
                            manager: "Manager",
                            mainArtist: "Main Artist",
                            mainEditor: "Main Editor",
                            stinger: "Stinger Animation",
                            gifs: "Animated GIFs",
                            chibi: "Pixel Chibi Live2D Model",
                            emote: "Animated Emote"
                        }
                    }
                },
                n = (0, i.createContext)();

            function s() {
                let e = (0, i.useContext)(n);
                if (!e) throw Error("useLanguage must be used within a LanguageProvider");
                return e
            }

            function o(e) {
                let {
                    children: t,
                    initialLanguage: r = "en"
                } = e, [s, o] = (0, i.useState)(r);
                return (0, a.jsx)(n.Provider, {
                    value: {
                        language: s,
                        direction: "ar" === s ? "rtl" : "ltr",
                        switchLanguage: e => {
                            ("en" === e || "ar" === e) && (o(e), document.cookie = `NEXT_LOCALE=${e}; path=/; max-age=31536000; SameSite=Lax`, window.location.reload())
                        },
                        t: e => {
                            let t = e.split("."),
                                r = l[s];
                            for (let a of t)
                                if (r && r[a]) r = r[a];
                                else {
                                    let r = l.en;
                                    for (let a of t)
                                        if (!r || !r[a]) return e;
                                        else r = r[a];
                                    return "string" == typeof r ? r : e
                                }
                            return r
                        }
                    },
                    children: t
                })
            }
        },
        37206: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => i.a
            });
            var a = r(75707),
                i = r.n(a)
        },
        41112: (e, t, r) => {
            "use strict";

            function a(e) {
                let {
                    reason: t,
                    children: r
                } = e;
                return r
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return a
                }
            }), r(1980)
        },
        57953: (e, t, r) => {
            "use strict";
            r.d(t, {
                ToastProvider: () => s,
                d: () => o
            });
            var a = r(95155),
                i = r(12115);
            let l = (0, r(37206).default)(() => Promise.all([r.e(6461), r.e(5385)]).then(r.bind(r, 35385)), {
                    loadableGenerated: {
                        webpack: () => [35385]
                    },
                    ssr: !1
                }),
                n = (0, i.createContext)(null);

            function s(e) {
                let {
                    children: t
                } = e, [r, s] = (0, i.useState)([]), o = (0, i.useCallback)(function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3,
                        a = Date.now() + Math.random(),
                        i = {
                            id: a,
                            message: e,
                            type: t
                        };
                    s(e => [...e, i]), setTimeout(() => {
                        s(e => e.filter(e => e.id !== a))
                    }, r)
                }, []), c = (0, i.useCallback)(e => {
                    s(t => t.filter(t => t.id !== e))
                }, []);
                return (0, a.jsxs)(n.Provider, {
                    value: {
                        showToast: o,
                        removeToast: c
                    },
                    children: [t, r.length > 0 && (0, a.jsx)(l, {
                        toasts: r,
                        onRemove: c
                    })]
                })
            }

            function o() {
                let e = (0, i.useContext)(n);
                return e || {
                    showToast: e => console.log("Toast:", e),
                    removeToast: () => {}
                }
            }
        },
        64054: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                bindSnapshot: function() {
                    return o
                },
                createAsyncLocalStorage: function() {
                    return s
                },
                createSnapshot: function() {
                    return c
                }
            };
            for (var a in r) Object.defineProperty(t, a, {
                enumerable: !0,
                get: r[a]
            });
            let i = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
                value: "E504",
                enumerable: !1,
                configurable: !0
            });
            class l {
                disable() {
                    throw i
                }
                getStore() {}
                run() {
                    throw i
                }
                exit() {
                    throw i
                }
                enterWith() {
                    throw i
                }
                static bind(e) {
                    return e
                }
            }
            let n = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

            function s() {
                return n ? new n : new l
            }

            function o(e) {
                return n ? n.bind(e) : l.bind(e)
            }

            function c() {
                return n ? n.snapshot() : function(e, ...t) {
                    return e(...t)
                }
            }
        },
        68635: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let a = r(95155),
                i = r(12115),
                l = r(41112);

            function n(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            r(21957);
            let s = {
                    loader: () => Promise.resolve(n(() => null)),
                    loading: null,
                    ssr: !0
                },
                o = function(e) {
                    let t = { ...s,
                            ...e
                        },
                        r = (0, i.lazy)(() => t.loader().then(n)),
                        o = t.loading;

                    function c(e) {
                        let n = o ? (0, a.jsx)(o, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            s = !t.ssr || !!t.loading,
                            c = s ? i.Suspense : i.Fragment,
                            d = t.ssr ? (0, a.jsxs)(a.Fragment, {
                                children: [null, (0, a.jsx)(r, { ...e
                                })]
                            }) : (0, a.jsx)(l.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, a.jsx)(r, { ...e
                                })
                            });
                        return (0, a.jsx)(c, { ...s ? {
                                fallback: n
                            } : {},
                            children: d
                        })
                    }
                    return c.displayName = "LoadableComponent", c
                }
        },
        69028: (e, t, r) => {
            "use strict";
            r.d(t, {
                x: () => i
            });
            var a = r(94601);

            function i(e) {
                return (0, a.G)(e) && "ownerSVGElement" in e
            }
        },
        75707: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let a = r(73623)._(r(68635));

            function i(e, t) {
                var r;
                let i = {};
                "function" == typeof e && (i.loader = e);
                let l = { ...i,
                    ...t
                };
                return (0, a.default)({ ...l,
                    modules: null == (r = l.loadableGenerated) ? void 0 : r.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        78340: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var a = r(12115);
            let i = e => {
                    let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
                    return t.charAt(0).toUpperCase() + t.slice(1)
                },
                l = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return t.filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
                };
            var n = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let s = (0, a.forwardRef)((e, t) => {
                    let {
                        color: r = "currentColor",
                        size: i = 24,
                        strokeWidth: s = 2,
                        absoluteStrokeWidth: o,
                        className: c = "",
                        children: d,
                        iconNode: u,
                        ...m
                    } = e;
                    return (0, a.createElement)("svg", {
                        ref: t,
                        ...n,
                        width: i,
                        height: i,
                        stroke: r,
                        strokeWidth: o ? 24 * Number(s) / Number(i) : s,
                        className: l("lucide", c),
                        ...!d && !(e => {
                            for (let t in e)
                                if (t.startsWith("aria-") || "role" === t || "title" === t) return !0
                        })(m) && {
                            "aria-hidden": "true"
                        },
                        ...m
                    }, [...u.map(e => {
                        let [t, r] = e;
                        return (0, a.createElement)(t, r)
                    }), ...Array.isArray(d) ? d : [d]])
                }),
                o = (e, t) => {
                    let r = (0, a.forwardRef)((r, n) => {
                        let {
                            className: o,
                            ...c
                        } = r;
                        return (0, a.createElement)(s, {
                            ref: n,
                            iconNode: t,
                            className: l(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`, `lucide-${e}`, o),
                            ...c
                        })
                    });
                    return r.displayName = i(e), r
                }
        },
        84515: (e, t, r) => {
            "use strict";

            function a(e) {
                let t = "https://cdn.meowlyva.com/assets";
                if (!t) return console.warn("⚠️ NEXT_PUBLIC_R2_ASSETS_URL is not set, falling back to local assets"), `/${e}`;
                let r = e.startsWith("/") ? e.slice(1) : e;
                return `${t}/${r}`
            }
            r.d(t, {
                k: () => i,
                s: () => a
            });
            let i = {
                HEADER_1: "images/MeowlyVA-Header.webp",
                HEADER_2: "images/MeowlyVA-Header2.webp",
                HEADER_3: "images/MeowlyVA-Header3.webp",
                MEOWLY_GIF: "images/Meowly(B)-GIF.webp",
                MEOWLY_GIF_STATIC: "images/Meowly(B)-GIF-static.webp",
                MEOWLY_AUDIO: "audio/meowlyva.mp3",
                WSHAK_AUDIO: "audio/wshak.mp3",
                OG_IMAGE: "images/og.webp"
            }
        },
        86901: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = (0, r(78340).A)("sparkles", [
                ["path", {
                    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                    key: "1s2grr"
                }],
                ["path", {
                    d: "M20 2v4",
                    key: "1rf3ol"
                }],
                ["path", {
                    d: "M22 4h-4",
                    key: "gwowj6"
                }],
                ["circle", {
                    cx: "4",
                    cy: "20",
                    r: "2",
                    key: "6kqj1y"
                }]
            ])
        },
        92289: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = (0, r(78340).A)("mail", [
                ["path", {
                    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
                    key: "132q7q"
                }],
                ["rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "2",
                    key: "izxlao"
                }]
            ])
        },
        97651: (e, t, r) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                default: function() {
                    return d
                },
                getImageProps: function() {
                    return c
                }
            };
            for (var i in a) Object.defineProperty(t, i, {
                enumerable: !0,
                get: a[i]
            });
            let l = r(73623),
                n = r(95413),
                s = r(38437),
                o = l._(r(36095));

            function c(e) {
                let {
                    props: t
                } = (0, n.getImgProps)(e, {
                    defaultLoader: o.default,
                    imgConf: {
                        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
                        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                        qualities: [75],
                        path: "/_next/image",
                        loader: "default",
                        dangerouslyAllowSVG: !1,
                        unoptimized: !1
                    }
                });
                for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                return {
                    props: t
                }
            }
            let d = s.Image
        }
    },
    e => {
        e.O(0, [8500, 6461, 8437, 9298, 8441, 3794, 7358], () => e(e.s = 15260)), _N_E = e.O()
    }
]);