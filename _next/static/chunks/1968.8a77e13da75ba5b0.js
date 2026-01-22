"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1968], {
        31968: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => c
            });
            var r = s(95155),
                a = s(98500),
                n = s.n(a),
                l = s(30610);

            function c() {
                let {
                    t: e
                } = (0, l.o)();
                return (0, r.jsx)("footer", {
                    className: "footer footer-center w-full py-12 text-base-content border-t border-base-300",
                    children: (0, r.jsxs)("div", {
                        className: "container mx-auto px-4 max-w-4xl",
                        children: [(0, r.jsxs)("div", {
                            className: "mb-4 flex items-center justify-center gap-4 flex-wrap",
                            children: [(0, r.jsx)(n(), {
                                href: "/museum",
                                className: "link link-hover hover:text-primary transition-colors text-sm text-base-content",
                                children: e("nav.museum")
                            }), (0, r.jsx)(n(), {
                                href: "/credits",
                                className: "link link-hover hover:text-primary transition-colors text-sm text-base-content",
                                children: e("nav.credits")
                            })]
                        }), (0, r.jsxs)("p", {
                            className: "text-sm opacity-70",
                            children: ["\xa9 ", new Date().getFullYear(), " ", e("footer.rights")]
                        })]
                    })
                })
            }
        }
    }
]);