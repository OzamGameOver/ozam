(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1731], {
        59759: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 84540))
        },
        84540: (e, s, a) => {
            "use strict";
            a.r(s), a.d(s, {
                default: () => y
            });
            var t = a(95155),
                l = a(12115),
                i = a(17064),
                r = a(74921),
                n = a(80642),
                d = a(98500),
                c = a.n(d);
            a(73321);
            var o = a(8703),
                m = a(61723),
                u = a(80723),
                x = a(84980),
                h = a(54452),
                p = a(6489),
                b = a(86901),
                g = a(44550),
                j = a(21453),
                f = a(85003),
                N = a(30610),
                v = a(57953);

            function y() {
                var e, s, a, d;
                let y, w, S, {
                        showToast: A
                    } = (0, v.d)(),
                    {
                        t: k,
                        language: P
                    } = (0, N.o)(),
                    {
                        data: D,
                        status: E
                    } = (0, i.wV)(),
                    [C, I] = (0, l.useState)(!1),
                    [O, T] = (0, l.useState)([]),
                    [F, L] = (0, l.useState)([]),
                    [M, $] = (0, l.useState)(""),
                    [_, z] = (0, l.useState)(!1),
                    [R, U] = (0, l.useState)(!1),
                    [W, H] = (0, l.useState)(""),
                    [q, B] = (0, l.useState)(!1),
                    [G, J] = (0, l.useState)(""),
                    [V, Y] = (0, l.useState)(""),
                    [K, X] = (0, l.useState)(""),
                    [Q, Z] = (0, l.useState)(!1),
                    [ee, es] = (0, l.useState)(0),
                    [ea, et] = (0, l.useState)(""),
                    [el, ei] = (0, l.useState)(0),
                    [er, en] = (0, l.useState)(!1),
                    [ed, ec] = (0, l.useState)(""),
                    [eo, em] = (0, l.useState)(!1),
                    [eu, ex] = (0, l.useState)(!0),
                    [eh, ep] = (0, l.useState)(""),
                    [eb, eg] = (0, l.useState)(!1),
                    ej = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    var e;
                    (null == D || null == (e = D.user) ? void 0 : e.id) && (async () => {
                        try {
                            let e = await fetch("/api/user/ban-status"),
                                s = await e.json();
                            s.banned && (en(!0), ec(s.reason), em(s.hasAppealed))
                        } catch (e) {
                            console.error("Failed to check ban status", e)
                        }
                    })()
                }, [D]);
                let ef = async () => {
                    if (!(eh.trim().length < 3)) {
                        eg(!0);
                        try {
                            let e = await fetch("/api/user/appeal", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        message: eh
                                    })
                                }),
                                s = await e.json();
                            s.success ? (em(!0), ep(""), A("Appeal submitted successfully", "success")) : A(s.error || "Failed to submit appeal", "error")
                        } catch (e) {
                            console.error("Appeal error", e), A("An error occurred submitting your appeal", "error")
                        } finally {
                            eg(!1)
                        }
                    }
                };
                (0, l.useEffect)(() => {
                    let e = O.length > 0 || M.trim(),
                        s = s => {
                            !e || R || q || (s.preventDefault(), s.returnValue = "")
                        };
                    return window.addEventListener("beforeunload", s), () => window.removeEventListener("beforeunload", s)
                }, [O.length, M, R, q]);
                let eN = ["image/jpeg", "image/png", "image/gif", "image/webp"];
                (0, l.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await o.Ay.load(),
                                s = await e.get();
                            X(s.visitorId)
                        } catch (e) {}
                    })()
                }, []), (0, l.useEffect)(() => {
                    let e = () => {
                        let e = localStorage.getItem("lastSubmission");
                        if (e) {
                            let s = Date.now() - parseInt(e);
                            s < 216e5 ? (Z(!0), es(216e5 - s)) : (Z(!1), es(0))
                        }
                    };
                    e();
                    let s = setInterval(() => {
                        e()
                    }, 1e3);
                    return () => clearInterval(s)
                }, []);
                let ev = e => {
                        if (H(""), O.length + e.length > 4) return void H("Max 4 files allowed");
                        for (let s of e) {
                            if (!eN.includes(s.type)) return void H(`Invalid file type: ${s.name}. Only JPEG, PNG, GIF, and WebP allowed.`);
                            if (s.size > 5242880) return void H(`File too large: ${s.name}. Max size is 5MB.`)
                        }
                        T([...O, ...e]), e.forEach(e => {
                            let s = new FileReader;
                            s.onloadend = () => {
                                L(a => [...a, {
                                    name: e.name,
                                    url: s.result
                                }])
                            }, s.readAsDataURL(e)
                        })
                    },
                    ey = async e => {
                        if (e.preventDefault(), H(""), Y(""), B(!1), !D || !D.user) {
                            H(k("submit.loginRequired")), I(!0);
                            return
                        }
                        if (!D.user.displayName) return void H("Display name required");
                        if (D.user.blocked) return void H("Account blocked");
                        if (0 === O.length) {
                            H("Please select at least one file");
                            let e = document.getElementById("upload-area");
                            null == e || e.scrollIntoView({
                                behavior: "smooth"
                            });
                            return
                        }
                        U(!0);
                        try {
                            let e = new FormData;
                            O.forEach(s => {
                                e.append("files", s)
                            });
                            let s = await fetch("/api/submit/upload", {
                                    method: "POST",
                                    body: e
                                }),
                                a = await s.json();
                            if (!a.success) {
                                let e = a.error || "Upload failed";
                                H(e), U(!1);
                                return
                            }
                            let t = await fetch("/api/submit/create", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        mediaUrls: a.mediaUrls,
                                        filenames: a.filenames,
                                        message: M.trim() || null,
                                        fingerprint: K,
                                        turnstileToken: ea
                                    })
                                }),
                                l = await t.json();
                            if (!l.success) {
                                429 === t.status && Y(l.message);
                                let e = l.error || "Submission failed";
                                H(e), U(!1);
                                return
                            }
                            B(!0), J(l.submissionId), T([]), L([]), $(""), et(""), ei(e => e + 1), localStorage.setItem("lastSubmission", Date.now().toString()), Z(!0), es(216e5), ej.current && (ej.current.value = ""), setTimeout(() => {
                                B(!1), J("")
                            }, 5e3)
                        } catch (e) {
                            H("An unexpected error occurred. Please try again later."), et(""), ei(e => e + 1)
                        } finally {
                            U(!1)
                        }
                    };
                return (0, t.jsxs)("div", {
                    className: "unified-page-background",
                    children: [(0, t.jsx)("main", {
                        className: "relative min-h-screen",
                        children: (0, t.jsxs)("div", {
                            className: "container mx-auto container-padding max-w-3xl section-spacing",
                            children: [(0, t.jsx)(c(), {
                                href: "/",
                                className: "btn btn-ghost btn-sm btn-circle absolute top-4 left-4 z-10",
                                "aria-label": "Back to Home",
                                children: (0, t.jsx)(u.A, {
                                    className: "w-5 h-5",
                                    strokeWidth: 2,
                                    "aria-hidden": "true"
                                })
                            }), (0, t.jsxs)("div", {
                                className: "text-center mb-10",
                                children: [(0, t.jsx)("h1", {
                                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4",
                                    lang: P,
                                    dir: "auto",
                                    children: k("submit.title")
                                }), (0, t.jsx)("p", {
                                    className: "text-lg text-base-content/70 max-w-md mx-auto",
                                    lang: P,
                                    dir: "auto",
                                    children: k("submit.desc")
                                })]
                            }), (0, t.jsxs)(r.P.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: .1
                                },
                                className: "card bg-base-100 shadow-xl p-6 md:p-8",
                                children: [(0, t.jsx)(n.N, {
                                    children: Q && ee > 0 && (0, t.jsx)(r.P.div, {
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
                                        className: "mb-6",
                                        children: (0, t.jsxs)("div", {
                                            role: "alert",
                                            className: "alert alert-warning",
                                            children: [(0, t.jsx)(x.A, {
                                                className: "w-6 h-6 text-warning",
                                                strokeWidth: 2,
                                                "aria-hidden": "true"
                                            }), (0, t.jsxs)("div", {
                                                className: "flex-1",
                                                children: [(0, t.jsx)("div", {
                                                    className: "font-bold mb-1",
                                                    children: "Wait"
                                                }), (0, t.jsxs)("div", {
                                                    className: "text-sm",
                                                    children: ["You can submit again in: ", (0, t.jsx)("span", {
                                                        className: "font-mono font-bold",
                                                        children: (y = Math.floor(ee / 36e5), w = Math.floor(ee % 36e5 / 6e4), S = Math.floor(ee % 6e4 / 1e3), `${y}h ${w}m ${S}s`)
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, t.jsxs)("form", {
                                    id: "submit-form",
                                    onSubmit: ey,
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                    children: [(0, t.jsxs)("div", {
                                        className: "space-y-4 md:space-y-6 order-1 lg:order-1",
                                        children: ["loading" === E ? (0, t.jsx)("div", {
                                            className: "text-center py-4",
                                            children: (0, t.jsx)("span", {
                                                className: "loading loading-spinner loading-lg text-primary"
                                            })
                                        }) : D ? (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("label", {
                                                className: "label justify-end",
                                                children: (0, t.jsx)("span", {
                                                    className: "label-text font-semibold",
                                                    children: k("submit.displayName")
                                                })
                                            }), (0, t.jsxs)("div", {
                                                className: "flex items-center gap-2 p-3 bg-base-200 rounded-xl",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "flex-1 text-right",
                                                    children: [(0, t.jsx)("div", {
                                                        className: "font-bold text-base-content",
                                                        children: D.user.displayName || "Display Name Not Set"
                                                    }), !D.user.displayName && (0, t.jsx)("div", {
                                                        className: "text-xs text-error",
                                                        children: "Set display name required"
                                                    })]
                                                }), (0, t.jsx)(f.A, {
                                                    user: D.user
                                                })]
                                            })]
                                        }) : (0, t.jsxs)("div", {
                                            role: "alert",
                                            className: "alert alert-info",
                                            children: [(0, t.jsx)(h.A, {
                                                className: "w-6 h-6"
                                            }), (0, t.jsxs)("div", {
                                                className: "flex-1",
                                                children: [(0, t.jsx)("div", {
                                                    className: "font-bold mb-1",
                                                    children: k("submit.loginRequired")
                                                }), (0, t.jsx)("div", {
                                                    className: "text-sm",
                                                    children: k("submit.loginDesc")
                                                })]
                                            }), (0, t.jsx)("button", {
                                                type: "button",
                                                onClick: () => I(!0),
                                                className: "btn btn-primary btn-sm",
                                                children: k("submit.loginBtn")
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("label", {
                                                htmlFor: "message",
                                                className: "label justify-end",
                                                children: (0, t.jsx)("span", {
                                                    className: "label-text font-semibold",
                                                    children: k("submit.message")
                                                })
                                            }), (0, t.jsx)("textarea", {
                                                id: "message",
                                                value: M,
                                                onChange: e => $(e.target.value),
                                                maxLength: 1e3,
                                                rows: 3,
                                                placeholder: k("submit.messagePlaceholder"),
                                                className: "textarea textarea-bordered w-full resize-none",
                                                disabled: R,
                                                spellCheck: !0,
                                                lang: P,
                                                dir: "auto"
                                            }), (0, t.jsx)("div", {
                                                className: "label",
                                                children: (0, t.jsxs)("span", {
                                                    className: "label-text-alt text-left",
                                                    children: [M.length, "/1000"]
                                                })
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "flex justify-end",
                                            children: (0, t.jsx)(m.Xs, {
                                                siteKey: "0x4AAAAAACMHeNU_M1rMTOSi",
                                                onSuccess: e => et(e),
                                                onError: () => {
                                                    et("")
                                                },
                                                onExpire: () => {
                                                    et("")
                                                },
                                                options: {
                                                    theme: "auto"
                                                }
                                            }, el)
                                        }), (0, t.jsx)("div", {
                                            className: "pt-2 hidden lg:block",
                                            children: (0, t.jsx)(r.P.button, {
                                                type: "submit",
                                                disabled: R || 0 === O.length || !D || !(null == (e = D.user) ? void 0 : e.displayName) || Q || !ea,
                                                whileHover: {
                                                    scale: Q ? 1 : 1.02
                                                },
                                                whileTap: {
                                                    scale: Q ? 1 : .98
                                                },
                                                className: `btn btn-primary w-full ${R||0===O.length||!D||!(null==(s=D.user)?void 0:s.displayName)||Q||!ea?"btn-disabled":""}`,
                                                children: R ? (0, t.jsxs)(t.Fragment, {
                                                    children: [(0, t.jsx)("span", {
                                                        className: "loading loading-spinner loading-md",
                                                        "aria-hidden": "true"
                                                    }), (0, t.jsx)("span", {
                                                        "aria-live": "polite",
                                                        children: k("submit.sending")
                                                    })]
                                                }) : k("submit.send")
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "space-y-4 md:space-y-6 order-2 lg:order-2",
                                        children: [(0, t.jsxs)("div", {
                                            children: [(0, t.jsx)("label", {
                                                className: "label justify-end",
                                                children: (0, t.jsxs)("span", {
                                                    className: "label-text font-semibold",
                                                    children: [k("submit.uploadLabel"), " ", (0, t.jsx)("span", {
                                                        className: "text-error",
                                                        children: "*"
                                                    })]
                                                })
                                            }), (0, t.jsxs)("div", {
                                                id: "upload-area",
                                                onDragEnter: e => {
                                                    e.preventDefault(), e.stopPropagation(), z(!0)
                                                },
                                                onDragOver: e => {
                                                    e.preventDefault(), e.stopPropagation()
                                                },
                                                onDragLeave: e => {
                                                    e.preventDefault(), e.stopPropagation(), z(!1)
                                                },
                                                onDrop: e => {
                                                    e.preventDefault(), e.stopPropagation(), z(!1), ev(Array.from(e.dataTransfer.files))
                                                },
                                                onClick: () => {
                                                    var e;
                                                    return !Q && (null == (e = ej.current) ? void 0 : e.click())
                                                },
                                                className: `relative border-2 border-dashed rounded-2xl p-6 md:p-8 text-center transition-all ${Q?"border-base-300 bg-base-200 cursor-not-allowed opacity-50":_?"border-primary bg-primary/10 cursor-pointer":"border-base-300 hover:border-primary bg-base-200/50 cursor-pointer"}`,
                                                children: [(0, t.jsx)("input", {
                                                    ref: ej,
                                                    type: "file",
                                                    multiple: !0,
                                                    accept: "image/*",
                                                    onChange: e => {
                                                        ev(Array.from(e.target.files))
                                                    },
                                                    className: "hidden",
                                                    disabled: R || Q
                                                }), (0, t.jsxs)("div", {
                                                    className: "space-y-2 md:space-y-3",
                                                    children: [(0, t.jsx)(p.A, {
                                                        className: "w-12 h-12 md:w-16 md:h-16 mx-auto text-primary",
                                                        strokeWidth: 2,
                                                        "aria-hidden": "true"
                                                    }), (0, t.jsx)("div", {
                                                        className: "text-base md:text-lg font-semibold text-base-content",
                                                        lang: P,
                                                        dir: "auto",
                                                        children: _ ? k("submit.dropLabel") : k("submit.clickLabel")
                                                    }), (0, t.jsx)("div", {
                                                        className: "text-xs md:text-sm text-base-content/60",
                                                        lang: P,
                                                        dir: "auto",
                                                        children: k("submit.limits")
                                                    })]
                                                })]
                                            })]
                                        }), (0, t.jsx)(n.N, {
                                            children: F.length > 0 && (0, t.jsx)(r.P.div, {
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
                                                className: "grid grid-cols-2 gap-3",
                                                children: F.map((e, s) => (0, t.jsxs)(r.P.div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: .8
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        scale: .8
                                                    },
                                                    className: "relative group",
                                                    children: [(0, t.jsx)("img", {
                                                        src: e.url,
                                                        alt: e.name,
                                                        className: "w-full h-32 md:h-40 object-cover rounded-xl border-2 border-base-300"
                                                    }), (0, t.jsx)("button", {
                                                        type: "button",
                                                        onClick: () => {
                                                            T(O.filter((e, a) => a !== s)), L(F.filter((e, a) => a !== s)), H("")
                                                        },
                                                        className: "btn btn-error btn-circle btn-xs absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                                        disabled: R,
                                                        children: "\xd7"
                                                    }), (0, t.jsx)("div", {
                                                        className: "text-xs text-base-content/70 mt-1 truncate",
                                                        children: e.name
                                                    })]
                                                }, s))
                                            })
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2 order-3 lg:hidden",
                                        children: (0, t.jsx)(r.P.button, {
                                            type: "submit",
                                            disabled: R || 0 === O.length || !D || !(null == (a = D.user) ? void 0 : a.displayName) || Q || !ea,
                                            whileHover: {
                                                scale: Q ? 1 : 1.02
                                            },
                                            whileTap: {
                                                scale: Q ? 1 : .98
                                            },
                                            className: `btn btn-primary w-full ${R||0===O.length||!D||!(null==(d=D.user)?void 0:d.displayName)||Q||!ea?"btn-disabled":""}`,
                                            children: R ? (0, t.jsxs)(t.Fragment, {
                                                children: [(0, t.jsx)("span", {
                                                    className: "loading loading-spinner loading-md",
                                                    "aria-hidden": "true"
                                                }), (0, t.jsx)("span", {
                                                    "aria-live": "polite",
                                                    children: k("submit.sending")
                                                })]
                                            }) : k("submit.send")
                                        })
                                    })]
                                }), (0, t.jsx)(n.N, {
                                    children: W && (0, t.jsx)(r.P.div, {
                                        initial: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -10
                                        },
                                        className: "mt-4 md:mt-6",
                                        children: (0, t.jsx)("div", {
                                            role: "alert",
                                            className: "alert alert-error",
                                            children: (0, t.jsxs)("div", {
                                                children: [(0, t.jsx)("div", {
                                                    className: "font-semibold",
                                                    children: k("museum.error")
                                                }), (0, t.jsx)("div", {
                                                    className: "text-sm",
                                                    children: W
                                                }), V && (0, t.jsx)("div", {
                                                    className: "text-sm mt-2 font-medium",
                                                    children: V
                                                })]
                                            })
                                        })
                                    })
                                }), (0, t.jsx)(n.N, {
                                    children: q && (0, t.jsx)(r.P.div, {
                                        initial: {
                                            opacity: 0,
                                            y: -50
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: -50
                                        },
                                        className: "toast toast-top toast-center z-50",
                                        children: (0, t.jsxs)("div", {
                                            className: "alert alert-success flex items-center gap-2",
                                            children: [(0, t.jsx)(b.A, {
                                                className: "w-5 h-5",
                                                strokeWidth: 2,
                                                "aria-hidden": "true"
                                            }), (0, t.jsx)("span", {
                                                children: k("submit.success")
                                            })]
                                        })
                                    })
                                }), er && (0, t.jsx)(r.P.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: .95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    className: "fixed inset-0 z-50 flex items-center justify-center bg-base-300/80 backdrop-blur-sm p-4",
                                    children: (0, t.jsx)("div", {
                                        className: "card w-full max-w-lg bg-base-100 shadow-2xl border border-error/50",
                                        children: (0, t.jsxs)("div", {
                                            className: "card-body text-center items-center",
                                            children: [(0, t.jsx)("div", {
                                                className: "w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mb-4",
                                                children: (0, t.jsx)("span", {
                                                    className: "text-3xl",
                                                    children: "\uD83D\uDEAB"
                                                })
                                            }), (0, t.jsx)("h2", {
                                                className: "card-title text-2xl text-error mb-2",
                                                children: "Access Denied"
                                            }), (0, t.jsx)("p", {
                                                className: "text-base-content/70 mb-6",
                                                children: ed || "You have been permanently blocked from making submissions."
                                            }), eu && !eo ? (0, t.jsxs)("div", {
                                                className: "w-full text-left",
                                                children: [(0, t.jsx)("div", {
                                                    className: "divider",
                                                    children: "Appeal Decision"
                                                }), (0, t.jsx)("p", {
                                                    className: "text-sm text-base-content/60 mb-2",
                                                    children: "If you believe this is a mistake, you can submit one appeal. Please explain why:"
                                                }), (0, t.jsx)("textarea", {
                                                    value: eh,
                                                    onChange: e => ep(e.target.value),
                                                    placeholder: "I believe this ban was incorrect because...",
                                                    className: "textarea textarea-bordered w-full h-32 mb-4",
                                                    maxLength: 500
                                                }), (0, t.jsxs)("div", {
                                                    className: "text-xs text-right text-base-content/60 mb-2",
                                                    children: [eh.length, "/500"]
                                                }), (0, t.jsx)("button", {
                                                    onClick: ef,
                                                    disabled: eb || eh.trim().length < 1,
                                                    className: `btn btn-primary w-full ${eb||eh.trim().length<1?"btn-disabled":""}`,
                                                    children: eb ? (0, t.jsx)("span", {
                                                        className: "loading loading-spinner"
                                                    }) : "Submit Appeal"
                                                })]
                                            }) : eo ? (0, t.jsxs)("div", {
                                                className: "alert alert-warning mt-4",
                                                children: [(0, t.jsx)(x.A, {
                                                    className: "w-5 h-5"
                                                }), (0, t.jsx)("span", {
                                                    children: "Your appeal is currently pending review by our moderators."
                                                })]
                                            }) : (0, t.jsx)(c(), {
                                                href: "/",
                                                className: "btn btn-outline mt-4",
                                                children: "Return Home"
                                            })]
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "mt-4 md:mt-6 pt-4 md:pt-6 border-t border-base-300",
                                    children: (0, t.jsxs)("div", {
                                        className: "space-y-3",
                                        lang: P,
                                        dir: "auto",
                                        children: [(0, t.jsx)("p", {
                                            className: "text-sm md:text-base font-semibold text-base-content mb-2",
                                            children: k("submit.guidelines")
                                        }), (0, t.jsxs)("div", {
                                            className: "space-y-2 text-sm md:text-base text-base-content/90",
                                            children: [(0, t.jsxs)("div", {
                                                className: "flex items-start gap-2",
                                                children: [(0, t.jsx)("span", {
                                                    className: "text-error text-lg",
                                                    children: "\uD83D\uDEAB"
                                                }), (0, t.jsx)("span", {
                                                    children: k("submit.rule1")
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "flex items-start gap-2",
                                                children: [(0, t.jsx)("span", {
                                                    className: "text-error text-lg",
                                                    children: "\uD83E\uDDE0"
                                                }), (0, t.jsx)("span", {
                                                    children: k("submit.rule2")
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "flex items-start gap-2",
                                                children: [(0, t.jsx)("span", {
                                                    className: "text-error text-lg",
                                                    children: "\uD83D\uDD01"
                                                }), (0, t.jsx)("span", {
                                                    children: k("submit.rule3")
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    }), (0, t.jsx)(g.A, {
                        isOpen: C,
                        onClose: () => I(!1),
                        callbackUrl: "/submit"
                    }), (0, t.jsx)(j.A, {})]
                })
            }
        }
    },
    e => {
        e.O(0, [8500, 6461, 1171, 7258, 9817, 1626, 2328, 8441, 3794, 7358], () => e(e.s = 59759)), _N_E = e.O()
    }
]);