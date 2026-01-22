"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6353], {
        86353: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => l
            });
            var n = a(95155),
                s = a(12115);
            let c = "ga_consent_v1";

            function l() {
                let [e, t] = (0, s.useState)(!1);
                return ((0, s.useEffect)(() => {
                    try {
                        let e = localStorage.getItem(c);
                        e || t(!0), "accepted" === e && o()
                    } catch {}
                }, []), e) ? (0, n.jsx)("div", {
                    className: "fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6",
                    children: (0, n.jsxs)("div", {
                        role: "alert",
                        className: "alert shadow-xl mx-auto max-w-3xl sm:alert-horizontal",
                        children: [(0, n.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "flex-shrink-0",
                            children: [(0, n.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }), (0, n.jsx)("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12",
                                y2: "12"
                            }), (0, n.jsx)("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12.01",
                                y2: "8"
                            })]
                        }), (0, n.jsx)("span", {
                            className: "text-sm",
                            children: "We use Google Analytics to improve the site. Do you consent to anonymous usage analytics?"
                        }), (0, n.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, n.jsx)("button", {
                                onClick: function() {
                                    try {
                                        localStorage.setItem(c, "accepted"), o()
                                    } catch {}
                                    t(!1)
                                },
                                className: "btn btn-primary btn-sm",
                                children: "Accept"
                            }), (0, n.jsx)("button", {
                                onClick: function() {
                                    try {
                                        localStorage.setItem(c, "declined")
                                    } catch {}
                                    t(!1)
                                },
                                className: "btn btn-ghost btn-sm",
                                children: "Decline"
                            })]
                        })]
                    })
                }) : null
            }

            function o() {
                let e = "G-73ZH94R4PD";
                if (!e || window.__ga_loaded) return;
                window.__ga_loaded = !0;
                let t = document.createElement("script");
                t.async = !0, t.src = `https://www.googletagmanager.com/gtag/js?id=${e}`, document.head.appendChild(t);
                let a = document.createElement("script");
                a.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', '${e}', { anonymize_ip: true });
  `, document.head.appendChild(a)
            }
        }
    }
]);