"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3477], {
        3477: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => m
            });
            var i = a(95155),
                l = a(12115),
                s = a(82301),
                n = a(71833),
                r = a(69403),
                o = a(5772);
            let d = (0, l.memo)(function(e) {
                var t, a, d, c, u, m, h, v, f, x, p, b;
                let {
                    video: w,
                    index: g = 0
                } = e, [j, y] = (0, l.useState)(!1), N = "string" == typeof w.id ? w.id : (null == (t = w.id) ? void 0 : t.videoId) || w.videoId || null, k = w.thumbnail || (null == (c = w.snippet) || null == (d = c.thumbnails) || null == (a = d.high) ? void 0 : a.url) || (null == (h = w.snippet) || null == (m = h.thumbnails) || null == (u = m.medium) ? void 0 : u.url) || (null == (x = w.snippet) || null == (f = x.thumbnails) || null == (v = f.default) ? void 0 : v.url), M = w.title || (null == (p = w.snippet) ? void 0 : p.title) || "Untitled", C = w.publishedAt || (null == (b = w.snippet) ? void 0 : b.publishedAt), I = N ? `https://www.youtube.com/watch?v=${N}` : "#", $ = function(e) {
                    if (!e) return "";
                    let t = Math.floor((new Date - new Date(e)) / 1e3),
                        a = new Intl.RelativeTimeFormat("en", {
                            numeric: "auto"
                        });
                    return t < 60 ? a.format(-t, "second") : t < 3600 ? a.format(-Math.floor(t / 60), "minute") : t < 86400 ? a.format(-Math.floor(t / 3600), "hour") : t < 2592e3 ? a.format(-Math.floor(t / 86400), "day") : t < 31536e3 ? a.format(-Math.floor(t / 2592e3), "month") : a.format(-Math.floor(t / 31536e3), "year")
                }(C);
                return ((0, l.useCallback)(() => y(!0), []), (0, l.useCallback)(() => y(!1), []), N) ? (0, i.jsx)(n.F, {
                    features: r.l,
                    children: (0, i.jsx)(s.m.a, {
                        href: I,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "card bg-base-100 shadow-xl group overflow-hidden transition-transform duration-300 hover:shadow-2xl block relative",
                        onMouseEnter: () => y(!0),
                        onMouseLeave: () => y(!1),
                        initial: {
                            opacity: 1,
                            y: 0
                        },
                        whileHover: {
                            y: -8,
                            scale: 1.05,
                            rotate: 0
                        },
                        transition: {
                            duration: .3,
                            ease: [.34, 1.56, .64, 1]
                        },
                        style: {
                            transform: `translateZ(0) rotate(${g%2==0?-1.5:1.5}deg)`
                        },
                        children: (0, i.jsxs)("div", {
                            className: "relative aspect-video overflow-hidden bg-slate-200",
                            children: [k && (0, i.jsx)(o.default, {
                                src: k,
                                alt: M,
                                fill: !0,
                                className: `object-cover transition-transform duration-500 ${j?"scale-110":"scale-100"}`,
                                sizes: "(max-width: 768px) 100vw, 33vw",
                                style: {
                                    transform: "translateZ(0)"
                                }
                            }), (0, i.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/90 via-pink-900/20 to-transparent"
                            }), (0, i.jsx)(s.m.div, {
                                className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                initial: {
                                    opacity: 0,
                                    scale: .9
                                },
                                animate: {
                                    opacity: .9 * !!j,
                                    scale: j ? 1 : .9
                                },
                                transition: {
                                    duration: .2,
                                    ease: [.22, 1, .36, 1]
                                },
                                children: (0, i.jsx)("div", {
                                    className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg",
                                    children: (0, i.jsx)("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        className: "text-pink-600 ml-0.5",
                                        children: (0, i.jsx)("polygon", {
                                            points: "5 3 19 12 5 21 5 3"
                                        })
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "absolute bottom-0 left-0 right-0 p-4",
                                children: (0, i.jsxs)("div", {
                                    className: "flex items-end justify-between gap-2",
                                    children: [(0, i.jsx)("h3", {
                                        className: "text-sm font-semibold text-white line-clamp-2 drop-shadow-lg flex-1 min-w-0",
                                        children: M
                                    }), $ && (0, i.jsx)("span", {
                                        className: "badge badge-sm bg-base-content/50 text-base-100 border-0 whitespace-nowrap flex-shrink-0",
                                        children: $
                                    })]
                                })
                            })]
                        })
                    })
                }) : null
            });

            function c() {
                return (0, i.jsxs)("div", {
                    className: "card bg-base-100 shadow-xl rounded-2xl overflow-hidden",
                    children: [(0, i.jsx)("div", {
                        className: "relative aspect-video overflow-hidden bg-slate-200 animate-shimmer"
                    }), (0, i.jsxs)("div", {
                        className: "p-4 space-y-2",
                        children: [(0, i.jsx)("div", {
                            className: "h-4 bg-slate-200 rounded animate-pulse w-3/4"
                        }), (0, i.jsx)("div", {
                            className: "h-4 bg-slate-200 rounded animate-pulse w-1/2"
                        })]
                    })]
                })
            }
            var u = a(30610);

            function m() {
                let {
                    t: e
                } = (0, u.o)(), [t, a] = (0, l.useState)([]), [n, r] = (0, l.useState)(!0);
                (0, l.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await fetch("/api/youtube/videos?limit=3"),
                                t = await e.json();
                            a((null == t ? void 0 : t.videos) || [])
                        } catch (e) {
                            console.error("Failed to fetch videos:", e)
                        } finally {
                            r(!1)
                        }
                    })()
                }, []);
                let o = {
                        hidden: {
                            opacity: 1
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0,
                                delayChildren: 0
                            }
                        }
                    },
                    m = {
                        hidden: {
                            opacity: 1,
                            y: 0
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0,
                                ease: [.22, 1, .36, 1]
                            }
                        }
                    };
                return n || 0 !== t.length ? (0, i.jsx)(s.m.section, {
                    id: "videos",
                    className: "relative w-full overflow-hidden text-foreground",
                    "aria-label": e("videos.title"),
                    initial: "hidden",
                    animate: "visible",
                    variants: o,
                    children: (0, i.jsx)("div", {
                        className: "container mx-auto px-4 max-w-6xl space-organic",
                        children: (0, i.jsxs)(s.m.div, {
                            className: "flex flex-col items-center text-center",
                            variants: m,
                            children: [(0, i.jsx)(s.m.h2, {
                                className: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-foreground",
                                variants: m,
                                children: e("videos.title")
                            }), n ? (0, i.jsx)("div", {
                                className: "grid-organic w-full",
                                children: [1, 2, 3].map(e => (0, i.jsx)(c, {}, e))
                            }) : (0, i.jsx)(s.m.div, {
                                className: "grid-organic w-full",
                                variants: o,
                                children: t.map((e, t) => {
                                    var a;
                                    let l = "string" == typeof e.id ? e.id : (null == (a = e.id) ? void 0 : a.videoId) || e.videoId || `video-${t}`,
                                        n = t % 2 == 0 ? -1.5 : 1.5,
                                        r = 0 === t ? 1.05 : .98;
                                    return (0, i.jsx)(s.m.div, {
                                        variants: m,
                                        className: "relative",
                                        style: {
                                            transform: `rotate(${n}deg) scale(${r})`,
                                            zIndex: 0 === t ? 10 : 5
                                        },
                                        whileHover: {
                                            rotate: 0,
                                            scale: 1.02,
                                            zIndex: 20,
                                            transition: {
                                                duration: .3
                                            }
                                        },
                                        children: (0, i.jsx)(d, {
                                            video: e,
                                            index: t
                                        })
                                    }, l)
                                })
                            })]
                        })
                    })
                }) : null
            }
        }
    }
]);