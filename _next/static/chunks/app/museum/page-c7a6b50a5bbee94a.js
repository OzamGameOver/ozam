(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3123, 5252], {
        5772: (e, t, s) => {
            "use strict";
            s.d(t, {
                default: () => i.a
            });
            var r = s(97651),
                i = s.n(r)
        },
        17243: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r
            });
            let r = (0, s(78340).A)("image", [
                ["rect", {
                    width: "18",
                    height: "18",
                    x: "3",
                    y: "3",
                    rx: "2",
                    ry: "2",
                    key: "1m3agn"
                }],
                ["circle", {
                    cx: "9",
                    cy: "9",
                    r: "2",
                    key: "af1f0g"
                }],
                ["path", {
                    d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
                    key: "1xmnt7"
                }]
            ])
        },
        20291: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 20975))
        },
        20975: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => p
            });
            var r = s(95155),
                i = s(12115),
                l = s(74921),
                n = s(98500),
                a = s.n(n),
                o = s(71833),
                d = s(69403),
                c = s(82301),
                u = s(5772);
            let m = () => (0, r.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"
                }),
                h = (0, i.memo)(function(e) {
                    var t, s;
                    let {
                        museumImage: l,
                        onOpenModal: n
                    } = e, a = null == (t = l.museumUrls) ? void 0 : t[0], h = (null == (s = l.userInfo) ? void 0 : s.username) || "Anonymous", g = (0, i.useCallback)(() => {
                        n(l)
                    }, [n, l]);
                    return (0, r.jsx)(o.F, {
                        features: d.l,
                        children: (0, r.jsxs)(c.m.article, {
                            initial: {
                                opacity: 1
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0
                            },
                            whileHover: {
                                y: -4,
                                scale: 1.01
                            },
                            onClick: g,
                            className: "card bg-base-100 shadow-xl overflow-hidden cursor-pointer group relative aspect-square",
                            style: {
                                willChange: "auto",
                                transform: "translateZ(0)"
                            },
                            children: [(0, r.jsxs)("figure", {
                                className: "absolute inset-0",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5",
                                    children: (0, r.jsx)(u.default, {
                                        src: a,
                                        alt: `Art by ${h}`,
                                        fill: !0,
                                        className: "object-cover",
                                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw",
                                        loading: "lazy",
                                        priority: !1,
                                        unoptimized: !0
                                    })
                                }), (0, r.jsx)(m, {})]
                            }), (0, r.jsx)("div", {
                                className: "card-body relative h-full flex flex-col justify-end z-10 pb-6",
                                children: (0, r.jsx)("h2", {
                                    className: "card-title text-white mb-0",
                                    children: h
                                })
                            })]
                        })
                    })
                });
            var g = s(35252);

            function f(e) {
                var t, s, l, n;
                let {
                    museumImage: a,
                    museumImages: o = [],
                    currentIndex: d = -1,
                    isOpen: c,
                    onClose: m,
                    onNavigate: h
                } = e, f = (0, g.useLenis)(), b = (0, i.useRef)(null), x = (0, i.useRef)(!1);
                if ((0, i.useEffect)(() => {
                        let e = e => {
                                ("INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || e.target.isContentEditable) && (x.current = !0)
                            },
                            t = () => {
                                x.current = !1
                            };
                        return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                        }
                    }, []), (0, i.useEffect)(() => {
                        let e = b.current;
                        if (e)
                            if (c && a) {
                                e.open || e.showModal(), document.body.style.overflow = "hidden", (null == f ? void 0 : f.current) && f.current.stop();
                                let t = () => {
                                    m()
                                };
                                return e.addEventListener("close", t), () => {
                                    e.removeEventListener("close", t)
                                }
                            } else !c && (e.open && e.close(), document.body.style.overflow = "unset", (null == f ? void 0 : f.current) && f.current.start())
                    }, [c, m, f]), !a) return null;
                let v = null == (t = a.museumUrls) ? void 0 : t[0],
                    p = (null == (s = a.userInfo) ? void 0 : s.username) || "Anonymous",
                    y = new Date((null == (l = a.addedAt) ? void 0 : l.$date) || a.addedAt || (null == (n = a.createdAt) ? void 0 : n.$date) || a.createdAt);
                return (0, r.jsxs)("dialog", {
                    ref: b,
                    id: "museum-modal",
                    className: "modal",
                    "aria-labelledby": "museum-modal-title",
                    onKeyDown: e => {
                        if (!x.current) {
                            if ("ArrowLeft" === e.key && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) return e.preventDefault(), e.stopPropagation(), o.length > 0 && d >= 0 && h("prev"), !1;
                            if ("ArrowRight" === e.key && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) return e.preventDefault(), e.stopPropagation(), o.length > 0 && d >= 0 && h("next"), !1
                        }
                    },
                    children: [(0, r.jsx)("div", {
                        className: "modal-box max-w-5xl w-full p-0",
                        style: {
                            maxHeight: "90vh",
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: (0, r.jsx)("div", {
                            className: "relative p-6 z-10 overflow-visible",
                            "data-lenis-prevent": !0,
                            children: (0, r.jsxs)("div", {
                                className: "relative rounded-3xl overflow-visible md:overflow-hidden",
                                children: [(0, r.jsx)("div", {
                                    className: "absolute top-4 right-4 z-50",
                                    children: (0, r.jsx)("form", {
                                        method: "dialog",
                                        children: (0, r.jsx)("button", {
                                            type: "submit",
                                            className: "btn btn-sm btn-circle btn-ghost bg-base-100/80 hover:bg-base-100",
                                            "aria-label": "Close modal",
                                            children: (0, r.jsx)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: (0, r.jsx)("path", {
                                                    d: "M18 6L6 18M6 6l12 12"
                                                })
                                            })
                                        })
                                    })
                                }), o.length > 1 && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => h("prev"),
                                        className: "absolute left-4 top-1/2 -translate-y-1/2 z-50 btn btn-circle btn-ghost bg-base-100/80 hover:bg-base-100 border border-white/20",
                                        "aria-label": "Previous image",
                                        children: (0, r.jsx)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, r.jsx)("path", {
                                                d: "M19 12H5M12 19l-7-7 7-7"
                                            })
                                        })
                                    }), (0, r.jsx)("button", {
                                        onClick: () => h("next"),
                                        className: "absolute right-4 top-1/2 -translate-y-1/2 z-50 btn btn-circle btn-ghost bg-base-100/80 hover:bg-base-100 border border-white/20",
                                        "aria-label": "Next image",
                                        children: (0, r.jsx)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: (0, r.jsx)("path", {
                                                d: "M5 12h14M12 5l7 7-7 7"
                                            })
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-40 rounded-3xl md:block"
                                }), (0, r.jsxs)("div", {
                                    className: "absolute bottom-4 left-4 md:bottom-8 md:left-8 z-50 space-y-2 md:space-y-3 pointer-events-none",
                                    children: [(0, r.jsx)("h2", {
                                        className: "text-xl md:text-3xl font-bold text-white group-hover:text-pink-300 transition-colors",
                                        children: p
                                    }), (0, r.jsx)("p", {
                                        className: "text-sm md:text-base text-white/80",
                                        children: y.toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "rounded-3xl overflow-hidden border border-white/20 min-h-[60vh] md:min-h-[550px] flex items-center justify-center relative",
                                    style: {
                                        background: "linear-gradient(to bottom, #ffffff 0%, #fff8fc 15%, #fff0f8 30%, #ffe8f5 45%, #ffe3f3 60%, #ffdff0 75%, #ffd9ed 90%, #ffd5eb 100%)"
                                    },
                                    children: (0, r.jsx)(u.default, {
                                        src: v,
                                        alt: `Art by ${p}`,
                                        fill: !0,
                                        className: "object-contain",
                                        sizes: "(max-width: 1280px) 100vw, 1280px",
                                        priority: !0,
                                        unoptimized: !0
                                    })
                                })]
                            })
                        })
                    }), (0, r.jsx)("form", {
                        method: "dialog",
                        className: "modal-backdrop",
                        children: (0, r.jsx)("button", {
                            type: "submit",
                            "aria-label": "Close dialog",
                            children: "close"
                        })
                    })]
                })
            }
            s(24455);
            var b = s(17243),
                x = s(30610),
                v = s(41463);

            function p() {
                let {
                    t: e,
                    language: t
                } = (0, x.o)(), [s, n] = (0, i.useState)([]), [o, d] = (0, i.useState)(!0), [c, u] = (0, i.useState)(null), [m, g] = (0, i.useState)(null), [p, y] = (0, i.useState)(-1), [w, j] = (0, i.useState)(!1), [N, k] = (0, i.useState)(1), [L, M] = (0, i.useState)(1), [A, S] = (0, i.useState)(!1), [C, E] = (0, i.useState)(!1), [P, I] = (0, i.useState)("newest"), T = async function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "newest";
                    d(!0), u(null);
                    try {
                        let r = await fetch(`/api/museum?page=${t}&limit=20&sort=${s}`),
                            i = await r.json();
                        if (i.success) n(i.data), k(i.pagination.currentPage), M(i.pagination.totalPages), S(i.pagination.hasNextPage), E(i.pagination.hasPrevPage);
                        else {
                            let t = i.error || e("museum.error");
                            u(t)
                        }
                    } catch (e) {
                        console.error("Museum fetch error:", e), u("Failed to connect to server.")
                    } finally {
                        d(!1)
                    }
                };
                (0, i.useEffect)(() => {
                    T(1, P)
                }, []);
                let _ = e => {
                        k(e), T(e, P), window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    },
                    z = e => {
                        let t = s.findIndex(t => {
                            var s, r;
                            return ((null == (s = t._id) ? void 0 : s.$oid) || t._id) === ((null == (r = e._id) ? void 0 : r.$oid) || e._id)
                        });
                        g(e), y(t), j(!0)
                    };
                return (0, r.jsx)("div", {
                    className: "unified-page-background",
                    children: (0, r.jsx)("main", {
                        className: "relative min-h-screen",
                        children: (0, r.jsxs)("div", {
                            className: "container mx-auto px-4 max-w-6xl space-organic",
                            children: [(0, r.jsx)(a(), {
                                href: "/",
                                className: "btn btn-ghost btn-sm btn-circle absolute top-4 left-4 z-10",
                                "aria-label": "Back to Home",
                                children: (0, r.jsx)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: (0, r.jsx)("path", {
                                        d: "M19 12H5M12 19l-7-7 7-7"
                                    })
                                })
                            }), (0, r.jsxs)("div", {
                                className: "text-center mb-10",
                                children: [(0, r.jsx)("h1", {
                                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4",
                                    lang: t,
                                    dir: "auto",
                                    children: e("museum.title")
                                }), "true" === v.env.NEXT_PUBLIC_ENABLE_SUBMIT && (0, r.jsxs)(a(), {
                                    href: "/submit",
                                    className: "btn btn-primary btn-lg gap-2 mt-4",
                                    children: [(0, r.jsxs)("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [(0, r.jsx)("path", {
                                            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        }), (0, r.jsx)("polyline", {
                                            points: "17 8 12 3 7 8"
                                        }), (0, r.jsx)("line", {
                                            x1: "12",
                                            y1: "3",
                                            x2: "12",
                                            y2: "15"
                                        })]
                                    }), (0, r.jsx)("span", {
                                        lang: t,
                                        dir: "auto",
                                        children: e("museum.submit")
                                    })]
                                })]
                            }), o && (0, r.jsx)("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                children: [...Array(8)].map((e, t) => (0, r.jsxs)("div", {
                                    className: "card bg-base-100 shadow-xl overflow-hidden",
                                    children: [(0, r.jsx)("div", {
                                        className: "aspect-square bg-base-200 animate-pulse"
                                    }), (0, r.jsx)("div", {
                                        className: "card-body p-4",
                                        children: (0, r.jsx)("div", {
                                            className: "h-4 bg-base-200 rounded animate-pulse mb-2"
                                        })
                                    })]
                                }, t))
                            }), c && !o && (0, r.jsxs)("div", {
                                className: "alert alert-error shadow-xl max-w-2xl mx-auto",
                                dir: "auto",
                                children: [(0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "stroke-current shrink-0 h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    })
                                }), (0, r.jsxs)("div", {
                                    children: [(0, r.jsx)("div", {
                                        className: "font-semibold",
                                        children: e("museum.error")
                                    }), (0, r.jsx)("div", {
                                        className: "text-sm",
                                        children: c
                                    })]
                                })]
                            }), !o && !c && 0 === s.length && (0, r.jsxs)("div", {
                                className: "text-center py-20",
                                dir: "auto",
                                children: [(0, r.jsx)(b.A, {
                                    className: "w-16 h-16 mx-auto mb-4 text-primary",
                                    strokeWidth: 2,
                                    "aria-hidden": "true"
                                }), (0, r.jsx)("h2", {
                                    className: "text-2xl font-bold mb-2",
                                    children: e("museum.emptyTitle")
                                }), (0, r.jsx)("p", {
                                    className: "text-base-content/60 mb-6",
                                    children: e("museum.emptyDesc")
                                }), "true" === v.env.NEXT_PUBLIC_ENABLE_SUBMIT && (0, r.jsx)(a(), {
                                    href: "/submit",
                                    className: "btn btn-primary",
                                    children: (0, r.jsx)("span", {
                                        lang: t,
                                        dir: "auto",
                                        children: e("museum.submit")
                                    })
                                })]
                            }), !o && !c && s.length > 0 && (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(l.P.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                    children: s.map(e => {
                                        var t;
                                        return (0, r.jsx)(h, {
                                            museumImage: e,
                                            onOpenModal: z
                                        }, (null == (t = e._id) ? void 0 : t.$oid) || e._id)
                                    })
                                }), L > 1 && (0, r.jsxs)("div", {
                                    className: "flex justify-center items-center gap-2 mt-12",
                                    dir: "auto",
                                    children: [(0, r.jsxs)("button", {
                                        onClick: () => _(N - 1),
                                        disabled: !C,
                                        className: "btn btn-primary btn-sm",
                                        children: ["\xab ", e("museum.prev")]
                                    }), (0, r.jsx)("div", {
                                        className: "flex items-center gap-2",
                                        children: [...Array(L)].map((e, t) => {
                                            let s = t + 1;
                                            return 1 === s || s === L || s >= N - 1 && s <= N + 1 ? (0, r.jsx)("button", {
                                                onClick: () => _(s),
                                                className: `btn btn-sm ${s===N?"btn-primary":"btn-ghost"}`,
                                                children: s
                                            }, s) : s === N - 2 || s === N + 2 ? (0, r.jsx)("span", {
                                                className: "px-2",
                                                children: "..."
                                            }, s) : null
                                        })
                                    }), (0, r.jsxs)("button", {
                                        onClick: () => _(N + 1),
                                        disabled: !A,
                                        className: "btn btn-primary btn-sm",
                                        children: [e("museum.next"), " \xbb"]
                                    })]
                                })]
                            }), (0, r.jsx)(f, {
                                museumImage: m,
                                museumImages: s,
                                currentIndex: p,
                                isOpen: w,
                                onClose: () => {
                                    j(!1), setTimeout(() => {
                                        g(null), y(-1)
                                    }, 300)
                                },
                                onNavigate: e => {
                                    let t;
                                    0 !== s.length && -1 !== p && (y(t = "next" === e ? (p + 1) % s.length : 0 === p ? s.length - 1 : p - 1), g(s[t]))
                                }
                            })]
                        })
                    })
                })
            }
        },
        24455: (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => i
            });
            var r = s(95155);

            function i(e) {
                let {
                    height: t = "min-h-screen"
                } = e;
                return (0, r.jsx)("div", {
                    className: `w-full ${t} flex flex-col items-center justify-center p-4`,
                    children: (0, r.jsxs)("div", {
                        className: "w-full max-w-6xl animate-pulse space-y-8",
                        children: [(0, r.jsx)("div", {
                            className: "h-8 bg-slate-200/50 rounded w-1/4 mx-auto"
                        }), (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: [(0, r.jsx)("div", {
                                className: "h-64 bg-slate-200/50 rounded-2xl"
                            }), (0, r.jsx)("div", {
                                className: "h-64 bg-slate-200/50 rounded-2xl hidden md:block"
                            }), (0, r.jsx)("div", {
                                className: "h-64 bg-slate-200/50 rounded-2xl hidden lg:block"
                            })]
                        })]
                    })
                })
            }
        },
        30610: (e, t, s) => {
            "use strict";
            s.d(t, {
                LanguageProvider: () => o,
                o: () => a
            });
            var r = s(95155),
                i = s(12115);
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

            function a() {
                let e = (0, i.useContext)(n);
                if (!e) throw Error("useLanguage must be used within a LanguageProvider");
                return e
            }

            function o(e) {
                let {
                    children: t,
                    initialLanguage: s = "en"
                } = e, [a, o] = (0, i.useState)(s);
                return (0, r.jsx)(n.Provider, {
                    value: {
                        language: a,
                        direction: "ar" === a ? "rtl" : "ltr",
                        switchLanguage: e => {
                            ("en" === e || "ar" === e) && (o(e), document.cookie = `NEXT_LOCALE=${e}; path=/; max-age=31536000; SameSite=Lax`, window.location.reload())
                        },
                        t: e => {
                            let t = e.split("."),
                                s = l[a];
                            for (let r of t)
                                if (s && s[r]) s = s[r];
                                else {
                                    let s = l.en;
                                    for (let r of t)
                                        if (!s || !s[r]) return e;
                                        else s = s[r];
                                    return "string" == typeof s ? s : e
                                }
                            return s
                        }
                    },
                    children: t
                })
            }
        },
        35252: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => o,
                useLenis: () => a
            });
            var r = s(95155),
                i = s(12115),
                l = s(65792);
            let n = (0, i.createContext)(null);

            function a() {
                return (0, i.useContext)(n)
            }

            function o(e) {
                let {
                    children: t
                } = e, s = (0, i.useRef)(null), a = (0, i.useRef)(null), o = (0, i.useRef)(null), d = (0, i.useRef)(null);
                return (0, i.useEffect)(() => {
                    let e = () => {
                        let e = new l.A({
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
                        s.current = e, a.current = requestAnimationFrame(function t(s) {
                            e.raf(s), a.current = requestAnimationFrame(t)
                        })
                    };
                    return "undefined" != typeof requestIdleCallback ? o.current = requestIdleCallback(() => {
                        e()
                    }) : d.current = setTimeout(() => {
                        e()
                    }, 100), () => {
                        o.current && cancelIdleCallback(o.current), d.current && clearTimeout(d.current), a.current && cancelAnimationFrame(a.current), s.current && (s.current.destroy(), s.current = null)
                    }
                }, []), (0, r.jsx)(n.Provider, {
                    value: s,
                    children: t
                })
            }
        },
        69403: (e, t, s) => {
            "use strict";
            s.d(t, {
                l: () => l
            });
            var r = s(86836),
                i = s(90249);
            let l = {
                renderer: s(41587).J,
                ...r.W,
                ...i.n
            }
        },
        71833: (e, t, s) => {
            "use strict";
            s.d(t, {
                F: () => a
            });
            var r = s(95155),
                i = s(12115),
                l = s(64704),
                n = s(66290);

            function a(e) {
                let {
                    children: t,
                    features: s,
                    strict: a = !1
                } = e, [, d] = (0, i.useState)(!o(s)), c = (0, i.useRef)(void 0);
                if (!o(s)) {
                    let {
                        renderer: e,
                        ...t
                    } = s;
                    c.current = e, (0, n.Y)(t)
                }
                return (0, i.useEffect)(() => {
                    o(s) && s().then(e => {
                        let {
                            renderer: t,
                            ...s
                        } = e;
                        (0, n.Y)(s), c.current = t, d(!0)
                    })
                }, []), (0, r.jsx)(l.Y.Provider, {
                    value: {
                        renderer: c.current,
                        strict: a
                    },
                    children: t
                })
            }

            function o(e) {
                return "function" == typeof e
            }
        },
        82301: (e, t, s) => {
            "use strict";
            s.d(t, {
                m: () => r
            });
            let r = (0, s(50154).H)()
        },
        97651: (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = {
                default: function() {
                    return c
                },
                getImageProps: function() {
                    return d
                }
            };
            for (var i in r) Object.defineProperty(t, i, {
                enumerable: !0,
                get: r[i]
            });
            let l = s(73623),
                n = s(95413),
                a = s(38437),
                o = l._(s(36095));

            function d(e) {
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
                for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e];
                return {
                    props: t
                }
            }
            let c = a.Image
        }
    },
    e => {
        e.O(0, [8500, 6461, 8437, 5792, 7258, 8441, 3794, 7358], () => e(e.s = 20291)), _N_E = e.O()
    }
]);