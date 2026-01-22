"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8017], {
        38017: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => p
            });
            var n = r(95155),
                a = r(5772),
                i = r(12115),
                l = r(73321),
                s = r(71833),
                o = r(69403),
                c = r(82301),
                u = r(80642),
                d = r(84515);

            function m() {
                var e;
                return (null == (e = globalThis.scheduler) ? void 0 : e.yield) ? scheduler.yield() : new Promise(e => {
                    setTimeout(e, 0)
                })
            }
            var h = r(30610);

            function p() {
                var e;
                let {
                    t,
                    language: r
                } = (0, h.o)(), p = (0, i.useRef)([]), f = (0, i.useRef)(null), x = (0, i.useRef)(null), g = (0, l.useSearchParams)(), v = (0, l.usePathname)(), {
                    replace: y
                } = (0, l.useRouter)(), b = (null == (e = g.get("q")) ? void 0 : e.toString()) || "", [w, k] = (0, i.useState)(b), [j, E] = (0, i.useState)([]), [R, L] = (0, i.useState)(!1), [N, S] = (0, i.useState)(!0), [M, C] = (0, i.useState)(!1), [P, T] = (0, i.useState)(!1), A = (0, i.useRef)(0), $ = (0, i.useRef)(0), z = (0, i.useRef)(!1);
                (0, i.useRef)(null);
                let B = (0, i.useRef)(320),
                    D = (0, i.useRef)(null),
                    _ = (0, i.useRef)([]),
                    F = (0, i.useRef)(null),
                    I = (0, i.useRef)(null),
                    q = (0, i.useRef)(null),
                    W = (0, i.useRef)(null),
                    H = (0, i.useRef)(new Map),
                    V = (0, i.useRef)(new Map),
                    X = [{
                        arabic: "ملهلبة",
                        english: "Something so beautiful it burns from its intensity.",
                        arabicDef: "شيء من شدة جمالة احترق",
                        transliteration: "mulhalaba"
                    }, {
                        arabic: "كذارة",
                        english: "Something bad that ruins the mood.",
                        arabicDef: "شيء سيء يكذر الانسان",
                        transliteration: "kazara"
                    }, {
                        arabic: "صغروم",
                        english: "A tiny, cute, lovely person.",
                        arabicDef: "شخص لطيف و صغنن",
                        transliteration: "saghroom"
                    }, {
                        arabic: "وشك",
                        english: "A playful word with no fixed meaning - depends on the other person's face, vibe, or beauty level.",
                        arabicDef: "كلمة بدون معنى تعتمد على وجه الشخص",
                        transliteration: "weshak"
                    }, {
                        arabic: "ذكاء",
                        english: "Something that helps build a better society.",
                        arabicDef: "شيء يساهم في بناء مجتمع أفضل",
                        transliteration: "zakaa'"
                    }, {
                        arabic: "شوكولالة",
                        english: "Something hard to describe, but delicious or enjoyable.",
                        arabicDef: "شيء صعب وصفه، لكنه لذيذ أو ممتع",
                        transliteration: "Shokalala"
                    }];
                (0, i.useEffect)(() => {
                    if (!w.trim()) return void E(X);
                    let e = w.toLowerCase().trim();
                    E(X.filter(t => t.arabic.toLowerCase().includes(e) || t.transliteration.toLowerCase().includes(e) || t.english.toLowerCase().includes(e) || t.arabicDef.toLowerCase().includes(e)))
                }, [w]), (0, i.useEffect)(() => {
                    E(X)
                }, []), (0, i.useEffect)(() => {
                    let e = f.current;
                    if (!e) return;
                    let t = null,
                        r = () => {
                            let t = e.querySelector("article");
                            t && (B.current = t.offsetWidth)
                        },
                        n = setTimeout(r, 100);
                    I.current = new ResizeObserver(() => {
                        t && clearTimeout(t), t = setTimeout(() => {
                            requestAnimationFrame(r)
                        }, 150)
                    }), I.current.observe(e);
                    let a = e.querySelector("article");
                    return a && I.current.observe(a), () => {
                        clearTimeout(n), t && clearTimeout(t), F.current && cancelAnimationFrame(F.current), I.current && I.current.disconnect()
                    }
                }, [j]), (0, i.useEffect)(() => {
                    let e = p.current;
                    if (!e.length) return;
                    let t = null,
                        r = async () => {
                            await m(), requestAnimationFrame(() => {
                                let t = [];
                                e.forEach((e, r) => {
                                    e && (t[r] = e.getBoundingClientRect())
                                }), _.current = t
                            })
                        },
                        n = setTimeout(r, 100);
                    return q.current = new ResizeObserver(() => {
                        t && clearTimeout(t), t = setTimeout(r, 150)
                    }), e.forEach(e => {
                        e && q.current && q.current.observe(e)
                    }), () => {
                        clearTimeout(n), t && clearTimeout(t), q.current && q.current.disconnect()
                    }
                }, [j]);
                let U = async () => {
                    F.current && cancelAnimationFrame(F.current), F.current = requestAnimationFrame(async () => {
                        let e = f.current;
                        if (!e) return;
                        let {
                            scrollLeft: t,
                            scrollWidth: r,
                            clientWidth: n
                        } = e;
                        await m(), L(t > 1), S(t + n < r - 1), F.current = null
                    })
                };
                (0, i.useEffect)(() => {
                    let e = f.current;
                    if (!e) return;
                    let t = !1,
                        r = null,
                        n = performance.now(),
                        a = async () => {
                            t || (r = requestAnimationFrame(async () => {
                                let {
                                    scrollLeft: a,
                                    scrollWidth: i,
                                    clientWidth: l
                                } = e, s = performance.now();
                                s - n > 50 && (await m(), n = s), L(a > 1), S(a + l < i - 1), t = !1, r = null
                            }), t = !0)
                        },
                        i = setTimeout(() => {
                            a()
                        }, 100);
                    return e.addEventListener("scroll", a, {
                        passive: !0
                    }), window.addEventListener("resize", a, {
                        passive: !0
                    }), () => {
                        clearTimeout(i), r && cancelAnimationFrame(r), e.removeEventListener("scroll", a), window.removeEventListener("resize", a)
                    }
                }, [j]), (0, i.useEffect)(() => {
                    let e = e => {
                        let t = f.current;
                        if (!t) return;
                        let r = D.current;
                        r || (D.current = r = t.getBoundingClientRect(), setTimeout(() => {
                            D.current = null
                        }, 1e3)), r.top < window.innerHeight && r.bottom > 0 && ("ArrowLeft" === e.key && R ? (e.preventDefault(), (() => {
                            let e = f.current;
                            if (!e) return;
                            let t = B.current;
                            e.scrollBy({
                                left: -(t + 24),
                                behavior: "smooth"
                            }), setTimeout(() => {
                                U()
                            }, 300)
                        })()) : "ArrowRight" === e.key && N && (e.preventDefault(), (() => {
                            let e = f.current;
                            if (!e) return;
                            let t = B.current;
                            e.scrollBy({
                                left: t + 24,
                                behavior: "smooth"
                            }), setTimeout(() => {
                                U()
                            }, 300)
                        })()))
                    };
                    return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
                }, [R, N]), (0, i.useEffect)(() => {
                    let e = e => {
                            if (!M) return;
                            let t = f.current;
                            if (!t) return;
                            e.preventDefault();
                            let r = D.current || t.getBoundingClientRect(),
                                n = (e.clientX - r.left - A.current) * 1.5;
                            t.scrollLeft = $.current - n
                        },
                        t = () => {
                            if (!M) return;
                            let e = f.current;
                            e && (e.style.cursor = "grab", e.style.userSelect = ""), C(!1), z.current = !1, D.current = null, U()
                        };
                    if (M) return document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), () => {
                        document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t)
                    }
                }, [M]), (0, i.useEffect)(() => {
                    let e = p.current,
                        t = () => {
                            if (0 === H.current.size) {
                                W.current = null;
                                return
                            }
                            requestAnimationFrame(() => {
                                H.current.forEach((t, r) => {
                                    let n = e[r];
                                    if (n) try {
                                        let {
                                            relX: e,
                                            relY: a,
                                            glowIntensity: i
                                        } = t, l = V.current.get(r) || 0;
                                        (Math.abs(i - l) > .05 || 0 === i) && (n.style.setProperty("--mouse-x", e), n.style.setProperty("--mouse-y", a), n.style.setProperty("--glow-intensity", i), V.current.set(r, i))
                                    } catch (e) {}
                                }), H.current.clear(), W.current = null
                            })
                        },
                        r = (r, n) => {
                            if (e[n]) try {
                                let e = _.current[n];
                                if (!e) return;
                                let a = r.clientX - e.left,
                                    i = r.clientY - e.top,
                                    l = Math.max(0, Math.min(1, a / e.width)),
                                    s = Math.max(0, Math.min(1, i / e.height)),
                                    o = Math.min(Math.min(l, 1 - l), Math.min(s, 1 - s)),
                                    c = Math.max(0, 1 - 2 * o);
                                H.current.set(n, {
                                    relX: l,
                                    relY: s,
                                    glowIntensity: c
                                }), W.current || (W.current = requestAnimationFrame(t))
                            } catch (e) {}
                        },
                        n = t => {
                            let r = e[t];
                            if (r) try {
                                r.style.setProperty("--glow-intensity", "0"), V.current.set(t, 0), H.current.delete(t)
                            } catch (e) {}
                        };
                    return e.forEach((e, t) => {
                        e && (e.addEventListener("mousemove", e => r(e, t), {
                            passive: !0
                        }), e.addEventListener("mouseleave", () => n(t), {
                            passive: !0
                        }))
                    }), () => {
                        W.current && cancelAnimationFrame(W.current), e.forEach((e, t) => {
                            e && (e.removeEventListener("mousemove", e => r(e, t)), e.removeEventListener("mouseleave", () => n(t)))
                        }), H.current.clear(), V.current.clear()
                    }
                }, []), (0, i.useEffect)(() => {
                    p.current.forEach(e => {
                        e && (e.style.opacity = "1", e.style.maskImage = "none", e.style.webkitMaskImage = "none")
                    })
                }, [j]);
                let O = {
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
                return (0, n.jsx)(s.F, {
                    features: o.l,
                    children: (0, n.jsx)("section", {
                        id: "dictionary",
                        className: "dictionary-section relative w-full",
                        "aria-labelledby": "dictionary-title",
                        itemScope: !0,
                        itemType: "https://schema.org/CollectionPage",
                        children: (0, n.jsxs)("div", {
                            className: "mx-auto flex w-full max-w-7xl flex-col items-center gap-8 container-padding section-spacing lg:relative",
                            children: [(0, n.jsxs)("div", {
                                className: "w-full lg:min-w-0",
                                children: [(0, n.jsxs)("header", {
                                    className: "mb-10 text-center max-w-2xl mx-auto",
                                    children: [(0, n.jsx)(c.m.h2, {
                                        id: "dictionary-title",
                                        className: "arabic-text mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground",
                                        itemProp: "name",
                                        variants: O,
                                        dir: "ar" === r ? "rtl" : "ltr",
                                        children: t("dictionary.title")
                                    }), (0, n.jsxs)(c.m.div, {
                                        variants: O,
                                        className: "relative max-w-md mx-auto",
                                        children: [(0, n.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, n.jsx)("input", {
                                                type: "text",
                                                value: w,
                                                onChange: e => {
                                                    let t = e.target.value;
                                                    k(t);
                                                    let r = new URLSearchParams(g);
                                                    t ? r.set("q", t) : r.delete("q"), y(`${v}?${r.toString()}`, {
                                                        scroll: !1
                                                    })
                                                },
                                                placeholder: t("dictionary.searchPlaceholder"),
                                                className: "input input-bordered input-primary w-full pl-10 pr-10 text-sm",
                                                "aria-label": "Search dictionary entries",
                                                autoComplete: "off",
                                                inputMode: "search",
                                                spellCheck: !1
                                            }), (0, n.jsxs)("svg", {
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted",
                                                children: [(0, n.jsx)("circle", {
                                                    cx: "11",
                                                    cy: "11",
                                                    r: "8"
                                                }), (0, n.jsx)("path", {
                                                    d: "m21 21-4.35-4.35"
                                                })]
                                            }), w && (0, n.jsx)("button", {
                                                onClick: () => {
                                                    k("");
                                                    let e = new URLSearchParams(g);
                                                    e.delete("q"), y(`${v}?${e.toString()}`, {
                                                        scroll: !1
                                                    })
                                                },
                                                className: "btn btn-ghost btn-circle btn-xs absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform",
                                                "aria-label": "Clear search",
                                                type: "button",
                                                children: (0, n.jsxs)("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [(0, n.jsx)("line", {
                                                        x1: "18",
                                                        y1: "6",
                                                        x2: "6",
                                                        y2: "18"
                                                    }), (0, n.jsx)("line", {
                                                        x1: "6",
                                                        y1: "6",
                                                        x2: "18",
                                                        y2: "18"
                                                    })]
                                                })
                                            })]
                                        }), w && (0, n.jsxs)(c.m.p, {
                                            initial: {
                                                opacity: 0,
                                                y: -5
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: "mt-2 text-sm text-foreground-muted text-center",
                                            children: [j.length, " ", t(1 === j.length ? "dictionary.result" : "dictionary.results")]
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-center lg:hidden",
                                    children: (0, n.jsx)(c.m.div, {
                                        className: "flex flex-col items-center gap-2",
                                        variants: O,
                                        children: (0, n.jsxs)("a", {
                                            href: "https://www.instagram.com/thevarooon",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "group relative block cursor-pointer",
                                            title: t("intro.artwork"),
                                            children: [(0, n.jsx)(a.default, {
                                                src: (0, d.s)(d.k.HEADER_3),
                                                alt: "MeowlyVA holding notes by Varoon",
                                                width: 320,
                                                height: 420,
                                                sizes: "(max-width: 1023px) 240px, 1vw",
                                                className: "mb-2 w-[220px] sm:w-[240px] transition-transform duration-200 group-hover:scale-[1.02]",
                                                priority: !1,
                                                style: {
                                                    transform: "translateZ(0)"
                                                }
                                            }), (0, n.jsx)("span", {
                                                className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10",
                                                children: t("intro.artwork")
                                            })]
                                        })
                                    })
                                }), (0, n.jsx)(u.N, {
                                    mode: "wait",
                                    children: j.length > 0 ? (0, n.jsx)("div", {
                                        className: "relative",
                                        style: {
                                            overflow: "visible",
                                            paddingTop: "2rem",
                                            paddingBottom: "3rem"
                                        },
                                        children: (0, n.jsxs)("div", {
                                            className: "lg:max-w-[calc(100%-140px)] xl:max-w-[calc(100%-170px)] relative",
                                            style: {
                                                overflow: "visible"
                                            },
                                            children: [R && (0, n.jsx)("div", {
                                                className: "lg:hidden absolute left-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none",
                                                children: (0, n.jsx)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "text-pink-400 opacity-60",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M15 18l-6-6 6-6",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })
                                            }), N && (0, n.jsx)("div", {
                                                className: "lg:hidden absolute right-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none",
                                                children: (0, n.jsx)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "text-pink-400 opacity-60",
                                                    children: (0, n.jsx)("path", {
                                                        d: "M9 18l6-6-6-6",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })
                                            }), (0, n.jsx)("div", {
                                                ref: f,
                                                className: "flex overflow-x-auto gap-6 scrollbar-hide -mx-4 cursor-grab active:cursor-grabbing",
                                                style: {
                                                    scrollbarWidth: "none",
                                                    msOverflowStyle: "none",
                                                    scrollBehavior: "auto",
                                                    WebkitOverflowScrolling: "touch",
                                                    overscrollBehaviorX: "contain",
                                                    overflowY: "visible",
                                                    paddingTop: "2rem",
                                                    paddingBottom: "3rem",
                                                    paddingLeft: "clamp(2rem, 30vw, 20rem)",
                                                    paddingRight: "clamp(2rem, 30vw, 20rem)",
                                                    maskImage: "linear-gradient(to right, transparent 0%, black 6rem, black calc(100% - 8rem), transparent 100%)",
                                                    WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6rem, black calc(100% - 8rem), transparent 100%)",
                                                    contain: "layout style paint"
                                                },
                                                onMouseDown: e => {
                                                    let t = f.current;
                                                    if (!t || e.target.closest("button") || e.target.closest("a")) return;
                                                    z.current = !1;
                                                    let r = t.getBoundingClientRect();
                                                    D.current = r, A.current = e.clientX - r.left, $.current = t.scrollLeft, t.style.cursor = "grab"
                                                },
                                                onMouseMove: e => {
                                                    let t = f.current;
                                                    if (!t) return;
                                                    let r = D.current || t.getBoundingClientRect();
                                                    Math.abs(e.clientX - r.left - A.current) > 5 && !M && 0 !== A.current && (C(!0), z.current = !0, t.style.cursor = "grabbing", t.style.userSelect = "none")
                                                },
                                                onMouseUp: e => {
                                                    let t = f.current;
                                                    M && (t && (t.style.cursor = "grab", t.style.userSelect = ""), C(!1), U()), A.current = 0, z.current = !1
                                                },
                                                onMouseLeave: () => {},
                                                children: j.map((e, t) => {
                                                    let a = X.findIndex(t => t.arabic === e.arabic);
                                                    return (0, n.jsxs)(c.m.article, {
                                                        ref: e => p.current[a] = e,
                                                        className: "card bg-base-100 shadow-lg group p-6 transition-transform duration-200 hover:scale-105 flex-shrink-0 w-[300px] sm:w-[320px] flex flex-col relative z-10",
                                                        style: {
                                                            marginTop: "2rem",
                                                            marginBottom: "2rem",
                                                            transform: "translateZ(0)",
                                                            contain: "layout style paint"
                                                        },
                                                        itemScope: !0,
                                                        itemType: "https://schema.org/Definition",
                                                        "aria-labelledby": `term-${a}`,
                                                        initial: {
                                                            opacity: 0,
                                                            scale: .9
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            scale: 1
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            scale: .9
                                                        },
                                                        transition: {
                                                            duration: .2,
                                                            ease: [.22, 1, .36, 1]
                                                        },
                                                        children: [(0, n.jsx)("h3", {
                                                            id: `term-${a}`,
                                                            className: "arabic-text mb-3 text-center text-2xl font-bold text-foreground",
                                                            itemProp: "name",
                                                            lang: "ar",
                                                            dir: "rtl",
                                                            dangerouslySetInnerHTML: w ? {
                                                                __html: e.arabic.replace(RegExp(`(${w})`, "gi"), '<mark class="bg-pink-200/60 text-pink-900 rounded px-1">$1</mark>')
                                                            } : void 0,
                                                            children: !w && e.arabic
                                                        }), (0, n.jsx)("p", {
                                                            className: "mb-3 text-center font-mono text-sm text-pink-600",
                                                            itemProp: "alternateName",
                                                            dangerouslySetInnerHTML: w ? {
                                                                __html: e.transliteration.replace(RegExp(`(${w})`, "gi"), '<mark class="bg-pink-200/60 text-pink-900 rounded px-1">$1</mark>')
                                                            } : void 0,
                                                            children: !w && e.transliteration
                                                        }), "en" === r && (0, n.jsx)("p", {
                                                            className: "mb-3 text-sm leading-relaxed text-foreground",
                                                            itemProp: "description",
                                                            dangerouslySetInnerHTML: w ? {
                                                                __html: e.english.replace(RegExp(`(${w})`, "gi"), '<mark class="bg-pink-200/60 text-pink-900 rounded px-1">$1</mark>')
                                                            } : void 0,
                                                            children: !w && e.english
                                                        }), "ar" === r && (0, n.jsx)("p", {
                                                            className: "arabic-text text-sm leading-relaxed text-foreground",
                                                            itemProp: "text",
                                                            lang: "ar",
                                                            dir: "rtl",
                                                            dangerouslySetInnerHTML: w ? {
                                                                __html: e.arabicDef.replace(RegExp(`(${w})`, "gi"), '<mark class="bg-pink-200/60 text-pink-900 rounded px-1">$1</mark>')
                                                            } : void 0,
                                                            children: !w && e.arabicDef
                                                        })]
                                                    }, e.arabic)
                                                })
                                            })]
                                        })
                                    }, "results") : (0, n.jsxs)(c.m.div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        className: "text-center py-12",
                                        children: [(0, n.jsxs)("p", {
                                            className: "text-foreground-muted text-lg",
                                            children: [t("dictionary.noResults"), ' "', w, '"']
                                        }), (0, n.jsx)("button", {
                                            onClick: () => k(""),
                                            className: "btn btn-link btn-primary mt-4",
                                            type: "button",
                                            children: t("dictionary.clearSearch")
                                        })]
                                    }, "no-results")
                                })]
                            }), (0, n.jsx)("div", {
                                ref: x,
                                className: "hidden lg:block absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 pointer-events-none z-30",
                                children: (0, n.jsxs)("a", {
                                    href: "https://www.instagram.com/thevarooon",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "group relative block cursor-pointer pointer-events-auto",
                                    title: "Artwork by Varoon",
                                    children: [(0, n.jsx)(a.default, {
                                        src: (0, d.s)(d.k.HEADER_3),
                                        alt: "MeowlyVA holding notes by Varoon",
                                        width: 384,
                                        height: 505,
                                        sizes: "(min-width: 1024px) 320px, 1vw",
                                        className: "w-[260px] xl:w-[320px] transition-transform duration-300 group-hover:scale-[1.02]",
                                        priority: !1,
                                        style: {
                                            transform: "translateZ(0)"
                                        }
                                    }), (0, n.jsx)("span", {
                                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10",
                                        children: "Artwork by Varoon"
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        73321: (e, t, r) => {
            var n = r(74645);
            r.o(n, "notFound") && r.d(t, {
                notFound: function() {
                    return n.notFound
                }
            }), r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            }), r.o(n, "useRouter") && r.d(t, {
                useRouter: function() {
                    return n.useRouter
                }
            }), r.o(n, "useSearchParams") && r.d(t, {
                useSearchParams: function() {
                    return n.useSearchParams
                }
            })
        },
        79196: (e, t, r) => {
            r.d(t, {
                xQ: () => i
            });
            var n = r(12115),
                a = r(15131);

            function i() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = (0, n.useContext)(a.t);
                if (null === t) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: i,
                    register: l
                } = t, s = (0, n.useId)();
                (0, n.useEffect)(() => {
                    if (e) return l(s)
                }, [e]);
                let o = (0, n.useCallback)(() => e && i && i(s), [s, i, e]);
                return !r && i ? [!1, o] : [!0]
            }
        },
        80642: (e, t, r) => {
            r.d(t, {
                N: () => y
            });
            var n = r(95155),
                a = r(12115),
                i = r(39551),
                l = r(28819),
                s = r(4524),
                o = r(15131),
                c = r(78757),
                u = r(24866);

            function d(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }
            class m extends a.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            r = (0, c.s)(e) && e.offsetWidth || 0,
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
                    anchorX: i,
                    root: l
                } = e, s = (0, a.useId)(), o = (0, a.useRef)(null), c = (0, a.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }), {
                    nonce: h
                } = (0, a.useContext)(u.Q), p = function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    return a.useCallback(function() {
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
                }(o, null == t ? void 0 : t.ref);
                return (0, a.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: t,
                        top: n,
                        left: a,
                        right: u
                    } = c.current;
                    if (r || !o.current || !e || !t) return;
                    let d = "left" === i ? `left: ${a}` : `right: ${u}`;
                    o.current.dataset.motionPopId = s;
                    let m = document.createElement("style");
                    h && (m.nonce = h);
                    let p = l ? ? document.head;
                    return p.appendChild(m), m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            top: ${n}px !important;
          }
        `), () => {
                        p.contains(m) && p.removeChild(m)
                    }
                }, [r]), (0, n.jsx)(m, {
                    isPresent: r,
                    childRef: o,
                    sizeRef: c,
                    children: a.cloneElement(t, {
                        ref: p
                    })
                })
            }
            let p = e => {
                let {
                    children: t,
                    initial: r,
                    isPresent: i,
                    onExitComplete: s,
                    custom: c,
                    presenceAffectsLayout: u,
                    mode: d,
                    anchorX: m,
                    root: p
                } = e, x = (0, l.M)(f), g = (0, a.useId)(), v = !0, y = (0, a.useMemo)(() => (v = !1, {
                    id: g,
                    initial: r,
                    isPresent: i,
                    custom: c,
                    onExitComplete: e => {
                        for (let t of (x.set(e, !0), x.values()))
                            if (!t) return;
                        s && s()
                    },
                    register: e => (x.set(e, !1), () => x.delete(e))
                }), [i, x, s]);
                return u && v && (y = { ...y
                }), (0, a.useMemo)(() => {
                    x.forEach((e, t) => x.set(t, !1))
                }, [i]), a.useEffect(() => {
                    i || x.size || !s || s()
                }, [i]), "popLayout" === d && (t = (0, n.jsx)(h, {
                    isPresent: i,
                    anchorX: m,
                    root: p,
                    children: t
                })), (0, n.jsx)(o.t.Provider, {
                    value: y,
                    children: t
                })
            };

            function f() {
                return new Map
            }
            var x = r(79196);
            let g = e => e.key || "";

            function v(e) {
                let t = [];
                return a.Children.forEach(e, e => {
                    (0, a.isValidElement)(e) && t.push(e)
                }), t
            }
            let y = e => {
                let {
                    children: t,
                    custom: r,
                    initial: o = !0,
                    onExitComplete: c,
                    presenceAffectsLayout: u = !0,
                    mode: d = "sync",
                    propagate: m = !1,
                    anchorX: h = "left",
                    root: f
                } = e, [y, b] = (0, x.xQ)(m), w = (0, a.useMemo)(() => v(t), [t]), k = m && !y ? [] : w.map(g), j = (0, a.useRef)(!0), E = (0, a.useRef)(w), R = (0, l.M)(() => new Map), [L, N] = (0, a.useState)(w), [S, M] = (0, a.useState)(w);
                (0, s.E)(() => {
                    j.current = !1, E.current = w;
                    for (let e = 0; e < S.length; e++) {
                        let t = g(S[e]);
                        k.includes(t) ? R.delete(t) : !0 !== R.get(t) && R.set(t, !1)
                    }
                }, [S, k.length, k.join("-")]);
                let C = [];
                if (w !== L) {
                    let e = [...w];
                    for (let t = 0; t < S.length; t++) {
                        let r = S[t],
                            n = g(r);
                        k.includes(n) || (e.splice(t, 0, r), C.push(r))
                    }
                    return "wait" === d && C.length && (e = C), M(v(e)), N(w), null
                }
                let {
                    forceRender: P
                } = (0, a.useContext)(i.L);
                return (0, n.jsx)(n.Fragment, {
                    children: S.map(e => {
                        let t = g(e),
                            a = (!m || !!y) && (w === S || k.includes(t));
                        return (0, n.jsx)(p, {
                            isPresent: a,
                            initial: (!j.current || !!o) && void 0,
                            custom: r,
                            presenceAffectsLayout: u,
                            mode: d,
                            root: f,
                            onExitComplete: a ? void 0 : () => {
                                if (!R.has(t)) return;
                                R.set(t, !0);
                                let e = !0;
                                R.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == P || P(), M(E.current), m && (null == b || b()), c && c())
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