"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9592], {
        69592: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => u
            });
            var a = r(95155),
                n = r(12115),
                d = r(47650),
                i = r(5772),
                o = r(84515);
            let l = [(0, o.s)("dancing%20emotes/DANCE-1_112px.webp"), (0, o.s)("dancing%20emotes/DANCE-3_112px.webp"), (0, o.s)("dancing%20emotes/DANCE-4_112px.webp"), (0, o.s)("dancing%20emotes/RAVE-1_112px.webp")];

            function u(e) {
                let {
                    playing: t = !1
                } = e, [r, o] = (0, n.useState)([]), [u, s] = (0, n.useState)(!1), c = (0, n.useRef)(0), m = (0, n.useRef)(null);
                return ((0, n.useEffect)(() => {
                    s(!0)
                }, []), (0, n.useEffect)(() => {
                    if (!t) {
                        o([]), m.current && (clearInterval(m.current), m.current = null);
                        return
                    }
                    let e = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                        r = window.innerWidth < 768,
                        a = e ? 6 : r ? 10 : 16,
                        n = e ? 800 : r ? 380 : 260,
                        d = () => {
                            o(e => {
                                if (e.length >= a) return e;
                                let t = ++c.current;
                                return [...e, {
                                    id: t,
                                    src: l[Math.floor(Math.random() * l.length)],
                                    x: 100 * Math.random(),
                                    y: 100 * Math.random(),
                                    driftX: 240 * Math.random() - 120,
                                    driftY: 240 * Math.random() - 120,
                                    rot: 180 * Math.random() - 90,
                                    scale: .8 + 1.6 * Math.random(),
                                    duration: 1200 + 2e3 * Math.random(),
                                    delay: 120 * Math.random()
                                }]
                            })
                        };
                    for (let e = 0; e < 4; e++) d();
                    let i = () => {
                        t && (d(), .4 > Math.random() && d(), m.current = setTimeout(i, n + 140 * Math.random()))
                    };
                    return m.current = setTimeout(i, n), () => {
                        m.current && (clearTimeout(m.current), m.current = null)
                    }
                }, [t]), u) ? (0, d.createPortal)((0, a.jsx)("div", {
                    className: "dancing-emotes-layer",
                    "aria-hidden": !0,
                    children: r.map(e => (0, a.jsx)(i.default, {
                        src: e.src,
                        alt: "",
                        width: 112,
                        height: 112,
                        className: "dancing-emote",
                        style: {
                            left: e.x + "vw",
                            top: e.y + "vh",
                            "--dx": e.driftX + "px",
                            "--dy": e.driftY + "px",
                            "--rot": e.rot + "deg",
                            "--scale": String(e.scale),
                            animationDuration: e.duration + "ms",
                            animationDelay: e.delay + "ms"
                        },
                        onAnimationEnd: () => {
                            let t;
                            return t = e.id, o(e => e.filter(e => e.id !== t))
                        },
                        draggable: "false",
                        unoptimized: !0
                    }, e.id))
                }), document.body) : null
            }
        }
    }
]);