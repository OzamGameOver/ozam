(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6636], {
        21453: (e, s, t) => {
            "use strict";
            t.d(s, {
                A: () => o
            });
            var a = t(95155),
                l = t(12115),
                n = t(17064),
                i = t(80642),
                r = t(74921),
                c = t(6296),
                d = t(94514),
                x = t(33210),
                m = t(13545);

            function o(e) {
                let {
                    onComplete: s
                } = e, {
                    data: t,
                    update: o
                } = (0, n.wV)(), [h, u] = (0, l.useState)(""), [b, j] = (0, l.useState)(!1), [p, N] = (0, l.useState)(null), [f, y] = (0, l.useState)(""), [g, v] = (0, l.useState)(!1), [w, A] = (0, l.useState)(!1);
                (0, l.useEffect)(() => {
                    (null == t ? void 0 : t.user) && !t.user.displayName && A(!0)
                }, [t]), (0, l.useEffect)(() => {
                    if (!h || h.length < 3) {
                        N(null), y("");
                        return
                    }
                    let e = setTimeout(async () => {
                        j(!0), y("");
                        try {
                            let e = await fetch("/api/user/check-display-name", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        displayName: h
                                    })
                                }),
                                s = await e.json();
                            s.success ? (N(s.available), s.available || y(s.error)) : y("فشل التحقق من الاسم")
                        } catch (e) {
                            y("حدث خطأ أثناء التحقق")
                        } finally {
                            j(!1)
                        }
                    }, 500);
                    return () => clearTimeout(e)
                }, [h]);
                let S = async () => {
                    if (p && !g) {
                        v(!0), y("");
                        try {
                            let e = await fetch("/api/user/profile", {
                                    method: "PATCH",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        displayName: h
                                    })
                                }),
                                t = await e.json();
                            t.success ? (await o({
                                displayName: t.displayName
                            }), A(!1), null == s || s(t.displayName)) : y(t.error || "فشل حفظ الاسم")
                        } catch (e) {
                            y("حدث خطأ أثناء الحفظ")
                        } finally {
                            v(!1)
                        }
                    }
                };
                return w ? (0, a.jsx)(i.N, {
                    children: (0, a.jsxs)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                        children: [(0, a.jsx)(r.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                        }), (0, a.jsxs)(r.P.div, {
                            initial: {
                                opacity: 0,
                                scale: .95,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: .95,
                                y: 20
                            },
                            className: "relative w-full max-w-md bg-base-100 rounded-3xl shadow-2xl p-6 md:p-8",
                            dir: "rtl",
                            children: [(0, a.jsxs)("div", {
                                className: "text-center mb-6",
                                children: [(0, a.jsx)("div", {
                                    className: "w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center",
                                    children: (0, a.jsx)("span", {
                                        className: "text-3xl",
                                        children: "✨"
                                    })
                                }), (0, a.jsx)("h2", {
                                    className: "text-2xl md:text-3xl font-bold text-base-content mb-2",
                                    children: "اختر اسم العرض"
                                }), (0, a.jsx)("p", {
                                    className: "text-base-content/70",
                                    children: "هذا الاسم سيظهر مع إرسالاتك"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "space-y-4",
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("label", {
                                        htmlFor: "displayName",
                                        className: "label justify-end",
                                        children: (0, a.jsx)("span", {
                                            className: "label-text font-semibold",
                                            children: "اسم العرض"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, a.jsx)("input", {
                                            type: "text",
                                            id: "displayName",
                                            value: h,
                                            onChange: e => u(e.target.value),
                                            placeholder: "اختر اسم فريد (3-20 حرف)",
                                            className: `input input-bordered w-full pr-10 ${h.length>=3?p?"input-success":!1===p?"input-error":"":""}`,
                                            maxLength: 20,
                                            disabled: g,
                                            autoFocus: !0,
                                            dir: "ltr"
                                        }), (0, a.jsx)("div", {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2",
                                            children: b ? (0, a.jsx)(c.A, {
                                                className: "w-5 h-5 animate-spin text-base-content/40"
                                            }) : h.length >= 3 ? p ? (0, a.jsx)(d.A, {
                                                className: "w-5 h-5 text-success"
                                            }) : !1 === p ? (0, a.jsx)(x.A, {
                                                className: "w-5 h-5 text-error"
                                            }) : null : null
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "label",
                                        children: [(0, a.jsx)("span", {
                                            className: "label-text-alt text-base-content/60",
                                            children: "حروف وأرقام و _ فقط"
                                        }), (0, a.jsxs)("span", {
                                            className: "label-text-alt",
                                            children: [h.length, "/20"]
                                        })]
                                    })]
                                }), f && (0, a.jsxs)("div", {
                                    className: "alert alert-error",
                                    children: [(0, a.jsx)(m.A, {
                                        className: "w-5 h-5"
                                    }), (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children: f
                                    })]
                                }), (0, a.jsx)("button", {
                                    onClick: S,
                                    disabled: !p || g || h.length < 3,
                                    className: "btn btn-primary w-full",
                                    children: g ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(c.A, {
                                            className: "w-5 h-5 animate-spin"
                                        }), "جاري الحفظ..."]
                                    }) : "حفظ الاسم"
                                }), (0, a.jsx)("div", {
                                    className: "text-center text-xs text-base-content/60",
                                    children: "يمكنك تغيير اسم العرض لاحقاً من صفحة الملف الشخصي"
                                })]
                            })]
                        })]
                    })
                }) : null
            }
        },
        66030: (e, s, t) => {
            "use strict";
            t.r(s), t.d(s, {
                default: () => w
            });
            var a = t(95155),
                l = t(17064),
                n = t(12115),
                i = t(74921),
                r = t(42869),
                c = t(6296),
                d = t(94514),
                x = t(33210),
                m = t(92289),
                o = t(57420),
                h = t(13545),
                u = t(17243),
                b = t(68459),
                j = t(98500),
                p = t.n(j),
                N = t(73321),
                f = t(21453),
                y = t(80642),
                g = t(41585);

            function v(e) {
                let {
                    isOpen: s,
                    onClose: t,
                    onConfirm: l
                } = e, [r, d] = (0, n.useState)(1), [m, o] = (0, n.useState)(""), [h, u] = (0, n.useState)(!1), [j, p] = (0, n.useState)(""), N = "DELETE", f = () => {
                    h || (d(1), o(""), p(""), t())
                }, v = async () => {
                    if (m === N && !h) {
                        u(!0), p("");
                        try {
                            await l()
                        } catch (e) {
                            p(e.message || "حدث خطأ أثناء حذف الحساب"), u(!1)
                        }
                    }
                };
                return s ? (0, a.jsx)(y.N, {
                    children: (0, a.jsxs)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                        children: [(0, a.jsx)(i.P.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            onClick: f,
                            className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
                        }), (0, a.jsxs)(i.P.div, {
                            initial: {
                                opacity: 0,
                                scale: .95,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: .95,
                                y: 20
                            },
                            className: "relative w-full max-w-md bg-base-100 rounded-3xl shadow-2xl p-6 md:p-8",
                            dir: "rtl",
                            children: [(0, a.jsx)("button", {
                                onClick: f,
                                disabled: h,
                                className: "btn btn-ghost btn-sm btn-circle absolute left-4 top-4",
                                "aria-label": "Close",
                                children: (0, a.jsx)(x.A, {
                                    className: "w-5 h-5"
                                })
                            }), 1 === r && (0, a.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, a.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center",
                                        children: (0, a.jsx)(g.A, {
                                            className: "w-8 h-8 text-error"
                                        })
                                    }), (0, a.jsx)("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-base-content mb-2",
                                        children: "حذف الحساب"
                                    }), (0, a.jsx)("p", {
                                        className: "text-base-content/70",
                                        children: "هل أنت متأكد من رغبتك في حذف حسابك؟"
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "alert alert-error",
                                    children: [(0, a.jsx)(g.A, {
                                        className: "w-5 h-5"
                                    }), (0, a.jsxs)("div", {
                                        className: "text-sm text-right",
                                        children: [(0, a.jsx)("strong", {
                                            children: "تحذير:"
                                        }), " هذا الإجراء لا رجعة فيه. سيتم حذف حسابك بشكل دائم ولن تتمكن من استعادته."]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "bg-base-200 rounded-2xl p-4",
                                    children: [(0, a.jsx)("h3", {
                                        className: "font-semibold mb-3 text-base-content",
                                        children: "سيتم حذف:"
                                    }), (0, a.jsxs)("ul", {
                                        className: "space-y-2 text-sm text-base-content/80",
                                        children: [(0, a.jsxs)("li", {
                                            className: "flex items-start gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-error mt-1",
                                                children: "•"
                                            }), (0, a.jsx)("span", {
                                                children: "معلومات حسابك الشخصية"
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "flex items-start gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-error mt-1",
                                                children: "•"
                                            }), (0, a.jsx)("span", {
                                                children: "جميع جلسات تسجيل الدخول"
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "flex items-start gap-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-error mt-1",
                                                children: "•"
                                            }), (0, a.jsx)("span", {
                                                children: "الحسابات المرتبطة (Google، Discord)"
                                            })]
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [(0, a.jsx)("button", {
                                        onClick: f,
                                        className: "btn btn-ghost flex-1",
                                        disabled: h,
                                        children: "إلغاء"
                                    }), (0, a.jsx)("button", {
                                        onClick: () => {
                                            d(2), p("")
                                        },
                                        className: "btn btn-error flex-1",
                                        disabled: h,
                                        children: "متابعة"
                                    })]
                                })]
                            }), 2 === r && (0, a.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, a.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0, a.jsx)("div", {
                                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center",
                                        children: (0, a.jsx)(b.A, {
                                            className: "w-8 h-8 text-error"
                                        })
                                    }), (0, a.jsx)("h2", {
                                        className: "text-2xl md:text-3xl font-bold text-base-content mb-2",
                                        children: "تأكيد الحذف"
                                    }), (0, a.jsxs)("p", {
                                        className: "text-base-content/70",
                                        children: ["اكتب ", (0, a.jsx)("strong", {
                                            className: "text-error",
                                            children: N
                                        }), " للتأكيد"]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("label", {
                                        htmlFor: "confirmText",
                                        className: "label justify-end",
                                        children: (0, a.jsxs)("span", {
                                            className: "label-text font-semibold",
                                            children: ['اكتب "', N, '" للتأكيد']
                                        })
                                    }), (0, a.jsx)("input", {
                                        type: "text",
                                        id: "confirmText",
                                        value: m,
                                        onChange: e => o(e.target.value.toUpperCase()),
                                        placeholder: N,
                                        className: `input input-bordered w-full text-center font-mono ${m&&m!==N?"input-error":""} ${m===N?"input-success":""}`,
                                        disabled: h,
                                        autoFocus: !0,
                                        dir: "ltr"
                                    })]
                                }), j && (0, a.jsxs)("div", {
                                    className: "alert alert-error",
                                    children: [(0, a.jsx)(g.A, {
                                        className: "w-5 h-5"
                                    }), (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children: j
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "flex gap-3",
                                    children: [(0, a.jsx)("button", {
                                        onClick: () => {
                                            d(1), o(""), p("")
                                        },
                                        className: "btn btn-ghost flex-1",
                                        disabled: h,
                                        children: "رجوع"
                                    }), (0, a.jsx)("button", {
                                        onClick: v,
                                        disabled: m !== N || h,
                                        className: "btn btn-error flex-1",
                                        children: h ? (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(c.A, {
                                                className: "w-5 h-5 animate-spin"
                                            }), "جاري الحذف..."]
                                        }) : (0, a.jsxs)(a.Fragment, {
                                            children: [(0, a.jsx)(b.A, {
                                                className: "w-5 h-5"
                                            }), "حذف الحساب نهائياً"]
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }) : null
            }

            function w() {
                let {
                    data: e,
                    status: s,
                    update: t
                } = (0, l.wV)(), j = (0, N.useRouter)(), [y, g] = (0, n.useState)(""), [w, A] = (0, n.useState)(!1), [S, C] = (0, n.useState)(!1), [k, E] = (0, n.useState)(null), [T, O] = (0, n.useState)(""), [P, _] = (0, n.useState)(!1), [D, F] = (0, n.useState)(""), [L, U] = (0, n.useState)(!1), [$, J] = (0, n.useState)([]), [G, z] = (0, n.useState)(!0), [H, V] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    "unauthenticated" === s && j.push("/submit")
                }, [s, j]), (0, n.useEffect)(() => {
                    "authenticated" === s && q()
                }, [s]), (0, n.useEffect)(() => {
                    var s;
                    w && (null == e || null == (s = e.user) ? void 0 : s.displayName) && g(e.user.displayName)
                }, [w, e]), (0, n.useEffect)(() => {
                    var s;
                    if (!w || !y || y.length < 3) {
                        E(null), O("");
                        return
                    }
                    if (y === (null == e || null == (s = e.user) ? void 0 : s.displayName)) {
                        E(!0), O("");
                        return
                    }
                    let t = setTimeout(async () => {
                        C(!0), O("");
                        try {
                            let e = await fetch("/api/user/check-display-name", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        displayName: y
                                    })
                                }),
                                s = await e.json();
                            s.success ? (E(s.available), s.available || O(s.error)) : O("فشل التحقق من الاسم")
                        } catch (e) {
                            O("حدث خطأ أثناء التحقق")
                        } finally {
                            C(!1)
                        }
                    }, 500);
                    return () => clearTimeout(t)
                }, [y, w, e]);
                let I = async () => {
                        if (k && !P) {
                            _(!0), O(""), F("");
                            try {
                                let e = await fetch("/api/user/profile", {
                                        method: "PATCH",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            displayName: y
                                        })
                                    }),
                                    s = await e.json();
                                s.success ? (await t({
                                    displayName: s.displayName
                                }), F("تم تحديث اسم العرض بنجاح"), A(!1), setTimeout(() => F(""), 3e3)) : O(s.error || "فشل حفظ الاسم")
                            } catch (e) {
                                O("حدث خطأ أثناء الحفظ")
                            } finally {
                                _(!1)
                            }
                        }
                    },
                    R = async () => {
                        try {
                            let e = await fetch("/api/user/delete-account", {
                                    method: "DELETE"
                                }),
                                s = await e.json();
                            if (s.success) await (0, l.CI)({
                                callbackUrl: "/"
                            });
                            else throw Error(s.error || "فشل حذف الحساب")
                        } catch (e) {
                            throw e
                        }
                    },
                    q = async () => {
                        try {
                            z(!0);
                            let e = await fetch("/api/user/submissions"),
                                s = await e.json();
                            s.success && J(s.submissions)
                        } catch (e) {
                            console.error("Error fetching submissions:", e)
                        } finally {
                            z(!1)
                        }
                    },
                    B = async () => {
                        if (H) try {
                            let e = await fetch(`/api/user/submissions/${H}`, {
                                    method: "DELETE"
                                }),
                                s = await e.json();
                            if (s.success) J($.filter(e => e._id.toString() !== H)), V(null), F("تم حذف المساهمة بنجاح"), setTimeout(() => F(""), 3e3);
                            else throw Error(s.error || "فشل حذف المساهمة")
                        } catch (e) {
                            throw e
                        }
                    };
                return "loading" === s ? (0, a.jsx)("div", {
                    className: "unified-page-background min-h-screen flex items-center justify-center",
                    children: (0, a.jsx)("span", {
                        className: "loading loading-spinner loading-lg text-primary"
                    })
                }) : e ? (0, a.jsxs)("div", {
                    className: "unified-page-background",
                    dir: "rtl",
                    lang: "ar",
                    children: [(0, a.jsx)("main", {
                        className: "relative min-h-screen",
                        children: (0, a.jsxs)("div", {
                            className: "container mx-auto container-padding max-w-2xl section-spacing",
                            children: [(0, a.jsxs)("div", {
                                className: "text-center mb-10",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4",
                                    children: "الملف الشخصي"
                                }), (0, a.jsx)("p", {
                                    className: "text-lg text-base-content/70",
                                    children: "إدارة معلومات حسابك"
                                })]
                            }), (0, a.jsxs)(i.P.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "card bg-base-100 shadow-xl p-6 md:p-8 space-y-6",
                                children: [(0, a.jsx)("div", {
                                    className: "flex justify-center",
                                    children: (0, a.jsx)("div", {
                                        className: "w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center",
                                        children: (0, a.jsx)(r.A, {
                                            className: "w-12 h-12 text-primary"
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("label", {
                                        className: "label justify-end",
                                        children: (0, a.jsx)("span", {
                                            className: "label-text font-semibold",
                                            children: "اسم العرض"
                                        })
                                    }), w ? (0, a.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [(0, a.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, a.jsx)("input", {
                                                type: "text",
                                                value: y,
                                                onChange: e => g(e.target.value),
                                                placeholder: "اختر اسم فريد (3-20 حرف)",
                                                className: `input input-bordered w-full pr-10 ${y.length>=3?k?"input-success":!1===k?"input-error":"":""}`,
                                                maxLength: 20,
                                                dir: "ltr"
                                            }), (0, a.jsx)("div", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2",
                                                children: S ? (0, a.jsx)(c.A, {
                                                    className: "w-5 h-5 animate-spin text-base-content/40"
                                                }) : y.length >= 3 ? k ? (0, a.jsx)(d.A, {
                                                    className: "w-5 h-5 text-success"
                                                }) : !1 === k ? (0, a.jsx)(x.A, {
                                                    className: "w-5 h-5 text-error"
                                                }) : null : null
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex gap-2",
                                            children: [(0, a.jsx)("button", {
                                                onClick: () => {
                                                    A(!1), g(""), O("")
                                                },
                                                className: "btn btn-ghost btn-sm flex-1",
                                                disabled: P,
                                                children: "إلغاء"
                                            }), (0, a.jsx)("button", {
                                                onClick: I,
                                                disabled: !k || P || y.length < 3,
                                                className: "btn btn-primary btn-sm flex-1",
                                                children: P ? (0, a.jsxs)(a.Fragment, {
                                                    children: [(0, a.jsx)(c.A, {
                                                        className: "w-4 h-4 animate-spin"
                                                    }), "جاري الحفظ..."]
                                                }) : "حفظ"
                                            })]
                                        })]
                                    }) : (0, a.jsxs)("div", {
                                        className: "flex items-center gap-2 p-3 bg-base-200 rounded-xl",
                                        children: [(0, a.jsx)("button", {
                                            onClick: () => A(!0),
                                            className: "btn btn-primary btn-sm",
                                            children: "تغيير"
                                        }), (0, a.jsx)("div", {
                                            className: "flex-1 text-right font-bold text-base-content",
                                            children: e.user.displayName || "لم يتم تعيين اسم العرض"
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("label", {
                                        className: "label justify-end",
                                        children: (0, a.jsx)("span", {
                                            className: "label-text font-semibold",
                                            children: "البريد الإلكتروني"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center gap-2 p-3 bg-base-200 rounded-xl",
                                        children: [(0, a.jsx)(m.A, {
                                            className: "w-5 h-5 text-base-content/60"
                                        }), (0, a.jsx)("div", {
                                            className: "flex-1 text-right text-base-content",
                                            dir: "ltr",
                                            children: e.user.email
                                        })]
                                    })]
                                }), e.user.createdAt && (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("label", {
                                        className: "label justify-end",
                                        children: (0, a.jsx)("span", {
                                            className: "label-text font-semibold",
                                            children: "تاريخ الإنشاء"
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: "flex items-center gap-2 p-3 bg-base-200 rounded-xl",
                                        children: [(0, a.jsx)(o.A, {
                                            className: "w-5 h-5 text-base-content/60"
                                        }), (0, a.jsx)("div", {
                                            className: "flex-1 text-right text-base-content",
                                            children: new Date(e.user.createdAt).toLocaleDateString("ar-EG")
                                        })]
                                    })]
                                }), D && (0, a.jsxs)("div", {
                                    className: "alert alert-success",
                                    children: [(0, a.jsx)(d.A, {
                                        className: "w-5 h-5"
                                    }), (0, a.jsx)("span", {
                                        children: D
                                    })]
                                }), T && (0, a.jsxs)("div", {
                                    className: "alert alert-error",
                                    children: [(0, a.jsx)(h.A, {
                                        className: "w-5 h-5"
                                    }), (0, a.jsx)("span", {
                                        children: T
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "pt-6 mt-6 border-t border-base-300",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-lg font-semibold text-base-content mb-4 text-right",
                                        children: "مساهماتي"
                                    }), G ? (0, a.jsx)("div", {
                                        className: "flex justify-center py-8",
                                        children: (0, a.jsx)(c.A, {
                                            className: "w-8 h-8 animate-spin text-primary"
                                        })
                                    }) : 0 === $.length ? (0, a.jsxs)("div", {
                                        className: "text-center py-8 bg-base-200 rounded-xl",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-base-content/60",
                                            children: "لم تقم بإرسال أي مساهمات بعد"
                                        }), (0, a.jsx)(p(), {
                                            href: "/submit",
                                            className: "btn btn-primary btn-sm mt-4",
                                            children: "إرسال مساهمة"
                                        })]
                                    }) : (0, a.jsx)("div", {
                                        className: "space-y-3",
                                        children: $.map(e => {
                                            var s;
                                            return (0, a.jsxs)("div", {
                                                className: "bg-base-200 rounded-xl p-4 flex items-start gap-4",
                                                children: [(0, a.jsx)("div", {
                                                    className: "flex-shrink-0",
                                                    children: e.mediaUrls && e.mediaUrls.length > 0 ? (0, a.jsx)("div", {
                                                        className: "w-16 h-16 rounded-lg overflow-hidden bg-base-300",
                                                        children: (0, a.jsx)("img", {
                                                            src: e.mediaUrls[0],
                                                            alt: "Submission",
                                                            className: "w-full h-full object-cover"
                                                        })
                                                    }) : (0, a.jsx)("div", {
                                                        className: "w-16 h-16 rounded-lg bg-base-300 flex items-center justify-center",
                                                        children: (0, a.jsx)(u.A, {
                                                            className: "w-6 h-6 text-base-content/40"
                                                        })
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "flex-1 min-w-0 text-right",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "mb-2",
                                                        children: (0, a.jsx)("span", {
                                                            className: `badge ${"approved"===e.status?"badge-success":"rejected"===e.status?"badge-error":"badge-warning"} badge-sm`,
                                                            children: "approved" === e.status ? "موافق عليه" : "rejected" === e.status ? "مرفوض" : "قيد المراجعة"
                                                        })
                                                    }), e.message && (0, a.jsx)("p", {
                                                        className: "text-sm text-base-content/80 mb-2 line-clamp-2",
                                                        children: e.message
                                                    }), (0, a.jsxs)("div", {
                                                        className: "flex items-center gap-3 text-xs text-base-content/60",
                                                        children: [(0, a.jsx)("span", {
                                                            children: new Date(e.createdAt).toLocaleDateString("ar-EG")
                                                        }), (0, a.jsxs)("span", {
                                                            children: [(null == (s = e.mediaUrls) ? void 0 : s.length) || 0, " ملف"]
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("button", {
                                                    onClick: () => V(e._id.toString()),
                                                    className: "btn btn-ghost btn-sm btn-circle text-error",
                                                    title: "حذف المساهمة",
                                                    children: (0, a.jsx)(b.A, {
                                                        className: "w-4 h-4"
                                                    })
                                                })]
                                            }, e._id)
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "pt-6 mt-6 border-t border-error/20",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-lg font-semibold text-error mb-3 text-right",
                                        children: "منطقة الخطر"
                                    }), (0, a.jsxs)("div", {
                                        className: "bg-error/5 border border-error/20 rounded-xl p-4",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-sm text-base-content/70 mb-3 text-right",
                                            children: "حذف حسابك سيؤدي إلى إزالة جميع بياناتك بشكل دائم. هذا الإجراء لا رجعة فيه."
                                        }), (0, a.jsxs)("button", {
                                            onClick: () => U(!0),
                                            className: "btn btn-error btn-outline w-full",
                                            children: [(0, a.jsx)(b.A, {
                                                className: "w-5 h-5"
                                            }), "حذف الحساب"]
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "pt-4",
                                    children: (0, a.jsx)(p(), {
                                        href: "/submit",
                                        className: "btn btn-ghost w-full",
                                        children: "العودة إلى صفحة الإرسال"
                                    })
                                })]
                            })]
                        })
                    }), (0, a.jsx)(f.A, {}), (0, a.jsx)(v, {
                        isOpen: L,
                        onClose: () => U(!1),
                        onConfirm: R
                    }), (0, a.jsx)(v, {
                        isOpen: !!H,
                        onClose: () => V(null),
                        onConfirm: B
                    })]
                }) : null
            }
        },
        91392: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 66030))
        }
    },
    e => {
        e.O(0, [8500, 6461, 1171, 7258, 5528, 8441, 3794, 7358], () => e(e.s = 91392)), _N_E = e.O()
    }
]);