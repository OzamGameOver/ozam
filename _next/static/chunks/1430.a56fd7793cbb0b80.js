"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1430], {
        21430: (e, s, t) => {
            t.r(s), t.d(s, {
                default: () => r
            });
            var a = t(95155),
                o = t(71833),
                i = t(69403),
                d = t(82301);

            function r() {
                return (0, a.jsx)(o.F, {
                    features: i.l,
                    children: (0, a.jsxs)("dialog", {
                        id: "keyboard-shortcuts-help",
                        className: "modal",
                        "aria-labelledby": "keyboard-shortcuts-title",
                        children: [(0, a.jsxs)("div", {
                            className: "modal-box max-w-md",
                            children: [(0, a.jsx)("form", {
                                method: "dialog",
                                children: (0, a.jsx)("button", {
                                    type: "submit",
                                    className: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
                                    "aria-label": "Close dialog",
                                    children: "✕"
                                })
                            }), (0, a.jsx)("h3", {
                                id: "keyboard-shortcuts-title",
                                className: "font-bold text-lg mb-4 text-foreground",
                                children: "Keyboard Shortcuts"
                            }), (0, a.jsx)("div", {
                                className: "space-y-3",
                                children: [{
                                    key: "/",
                                    description: "Focus dictionary search"
                                }, {
                                    key: "?",
                                    description: "Show keyboard shortcuts"
                                }, {
                                    key: "Esc",
                                    description: "Close modals/dropdowns"
                                }, {
                                    key: "↑↓",
                                    description: "Navigate sections (when focused)"
                                }, {
                                    key: "Tab",
                                    description: "Navigate interactive elements"
                                }].map((e, s) => (0, a.jsxs)(d.m.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: .05 * s
                                    },
                                    className: "flex items-center justify-between gap-4 py-2 border-b border-base-200 last:border-0",
                                    children: [(0, a.jsx)("span", {
                                        className: "text-sm text-foreground-muted",
                                        children: e.description
                                    }), (0, a.jsx)("kbd", {
                                        className: "kbd kbd-sm bg-base-200 text-foreground font-mono",
                                        children: e.key
                                    })]
                                }, e.key))
                            }), (0, a.jsx)("div", {
                                className: "modal-action",
                                children: (0, a.jsx)("form", {
                                    method: "dialog",
                                    children: (0, a.jsx)("button", {
                                        type: "submit",
                                        className: "btn btn-primary btn-sm",
                                        children: "Close"
                                    })
                                })
                            })]
                        }), (0, a.jsx)("form", {
                            method: "dialog",
                            className: "modal-backdrop",
                            children: (0, a.jsx)("button", {
                                type: "submit",
                                "aria-label": "Close dialog",
                                children: "close"
                            })
                        })]
                    })
                })
            }
        }
    }
]);