"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1626], {
        6489: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            let o = (0, n(78340).A)("palette", [
                ["path", {
                    d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
                    key: "e79jfc"
                }],
                ["circle", {
                    cx: "13.5",
                    cy: "6.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "1okk4w"
                }],
                ["circle", {
                    cx: "17.5",
                    cy: "10.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "f64h9f"
                }],
                ["circle", {
                    cx: "6.5",
                    cy: "12.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "qy21gx"
                }],
                ["circle", {
                    cx: "8.5",
                    cy: "7.5",
                    r: ".5",
                    fill: "currentColor",
                    key: "fotxhn"
                }]
            ])
        },
        8703: (e, t, n) => {
            let o, i;
            n.d(t, {
                Ay: () => eh
            });
            var r = "5.0.1";

            function a(e, t) {
                return new Promise(n => setTimeout(n, e, t))
            }

            function l(e) {
                return !!e && "function" == typeof e.then
            }

            function c(e, t) {
                try {
                    let n = e();
                    l(n) ? n.then(e => t(!0, e), e => t(!1, e)) : t(!0, n)
                } catch (e) {
                    t(!1, e)
                }
            }
            async function s(e, t, n = 16) {
                let o = Array(e.length),
                    i = Date.now();
                for (let r = 0; r < e.length; ++r) {
                    o[r] = t(e[r], r);
                    let a = Date.now();
                    a >= i + n && (i = a, await new Promise(e => {
                        let t = new MessageChannel;
                        t.port1.onmessage = () => e(), t.port2.postMessage(null)
                    }))
                }
                return o
            }

            function u(e) {
                return e.then(void 0, () => void 0), e
            }

            function d(e) {
                return parseInt(e)
            }

            function m(e) {
                return parseFloat(e)
            }

            function f(e, t) {
                return "number" == typeof e && isNaN(e) ? t : e
            }

            function p(e) {
                return e.reduce((e, t) => e + +!!t, 0)
            }

            function h(e, t = 1) {
                if (Math.abs(t) >= 1) return Math.round(e / t) * t; {
                    let n = 1 / t;
                    return Math.round(e * n) / n
                }
            }

            function y(e, t) {
                let n = e[0] >>> 16,
                    o = 65535 & e[0],
                    i = e[1] >>> 16,
                    r = 65535 & e[1],
                    a = t[0] >>> 16,
                    l = 65535 & t[0],
                    c = t[1] >>> 16,
                    s = 65535 & t[1],
                    u = 0,
                    d = 0,
                    m, f;
                m = 0 + ((f = 0 + (r + s)) >>> 16), f &= 65535, m += i + c, d += m >>> 16, m &= 65535, d += o + l, u += d >>> 16, d &= 65535, u += n + a, u &= 65535, e[0] = u << 16 | d, e[1] = m << 16 | f
            }

            function b(e, t) {
                let n = e[0] >>> 16,
                    o = 65535 & e[0],
                    i = e[1] >>> 16,
                    r = 65535 & e[1],
                    a = t[0] >>> 16,
                    l = 65535 & t[0],
                    c = t[1] >>> 16,
                    s = 65535 & t[1],
                    u = 0,
                    d = 0,
                    m, f;
                m = 0 + ((f = 0 + r * s) >>> 16), f &= 65535, m += i * s, d += m >>> 16, m &= 65535, m += r * c, d += m >>> 16, m &= 65535, d += o * s, u += d >>> 16, d &= 65535, d += i * c, u += d >>> 16, d &= 65535, d += r * l, u += d >>> 16, d &= 65535, u += n * s + o * c + i * l + r * a, u &= 65535, e[0] = u << 16 | d, e[1] = m << 16 | f
            }

            function v(e, t) {
                let n = e[0];
                32 == (t %= 64) ? (e[0] = e[1], e[1] = n) : t < 32 ? (e[0] = n << t | e[1] >>> 32 - t, e[1] = e[1] << t | n >>> 32 - t) : (t -= 32, e[0] = e[1] << t | n >>> 32 - t, e[1] = n << t | e[1] >>> 32 - t)
            }

            function g(e, t) {
                0 == (t %= 64) || (t < 32 ? (e[0] = e[1] >>> 32 - t, e[1] = e[1] << t) : (e[0] = e[1] << t - 32, e[1] = 0))
            }

            function w(e, t) {
                e[0] ^= t[0], e[1] ^= t[1]
            }
            let L = [0xff51afd7, 0xed558ccd],
                k = [0xc4ceb9fe, 0x1a85ec53];

            function V(e) {
                let t = [0, e[0] >>> 1];
                w(e, t), b(e, L), t[1] = e[0] >>> 1, w(e, t), b(e, k), t[1] = e[0] >>> 1, w(e, t)
            }
            let x = [0x87c37b91, 0x114253d5],
                S = [0x4cf5ad43, 0x2745937f],
                W = [0, 5],
                Z = [0, 0x52dce729],
                M = [0, 0x38495ab5];

            function R() {
                let e = window,
                    t = navigator;
                return p(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
            }

            function G() {
                let e = window,
                    t = navigator;
                return p(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === (t.vendor || "").indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function F() {
                let e = window;
                return p(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === navigator.vendor.indexOf("Apple"), "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
            }

            function I() {
                let e = window,
                    {
                        HTMLElement: t,
                        Document: n
                    } = e;
                return p(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), t && !("autocapitalize" in t.prototype), n && "pointerLockElement" in n.prototype]) >= 4
            }

            function Y() {
                var e;
                let t = window;
                return e = t.print, /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e)) && "[object WebPageNamespace]" === String(t.browser)
            }

            function C() {
                var e, t;
                let n = window;
                return p(["buildID" in navigator, "MozAppearance" in (null != (t = null == (e = document.documentElement) ? void 0 : e.style) ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
            }

            function j() {
                let e = window,
                    {
                        CSS: t,
                        HTMLButtonElement: n
                    } = e;
                return p([!("getStorageUpdates" in navigator), n && "popover" in n.prototype, "CSSCounterStyleRule" in e, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
            }

            function X() {
                let e = G(),
                    t = C(),
                    n = window,
                    o = navigator,
                    i = "connection";
                return e ? p([!("SharedWorker" in n), o[i] && "ontypechange" in o[i], !("sinkId" in new Audio)]) >= 2 : !!t && p(["onorientationchange" in n, "orientation" in n, /android/i.test(o.appVersion)]) >= 2
            }

            function P(e) {
                let t = Error(e);
                return t.name = e, t
            }
            async function A(e, t, n = 50) {
                var o, i, r;
                let l = document;
                for (; !l.body;) await a(n);
                let c = l.createElement("iframe");
                try {
                    for (await new Promise((e, n) => {
                            let o = !1,
                                i = () => {
                                    o = !0, e()
                                };
                            c.onload = i, c.onerror = e => {
                                o = !0, n(e)
                            };
                            let {
                                style: r
                            } = c;
                            r.setProperty("display", "block", "important"), r.position = "absolute", r.top = "0", r.left = "0", r.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", l.body.appendChild(c);
                            let a = () => {
                                var e, t;
                                o || ((null == (t = null == (e = c.contentWindow) ? void 0 : e.document) ? void 0 : t.readyState) === "complete" ? i() : setTimeout(a, 10))
                            };
                            a()
                        }); !(null == (i = null == (o = c.contentWindow) ? void 0 : o.document) ? void 0 : i.body);) await a(n);
                    return await e(c, c.contentWindow)
                } finally {
                    null == (r = c.parentNode) || r.removeChild(c)
                }
            }
            let E = ["monospace", "sans-serif", "serif"],
                H = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function N(e) {
                return e.toDataURL()
            }

            function J() {
                let e = screen;
                return [f(m(e.availTop), null), f(m(e.width) - m(e.availWidth) - f(m(e.availLeft), 0), null), f(m(e.height) - m(e.availHeight) - f(m(e.availTop), 0), null), f(m(e.availLeft), null)]
            }

            function _(e) {
                for (let t = 0; t < 4; ++t)
                    if (e[t]) return !1;
                return !0
            }
            async function D({
                debug: e
            } = {}) {
                let t;
                if (!(F() || X())) return;
                let n = {
                        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', (t = atob)("I0JveC1CYW5uZXItYWRz")],
                        abpvn: [".quangcao", "#mobileCatfish", t("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                        adBlockFinland: [".mainostila", t("LnNwb25zb3JpdA=="), ".ylamainos", t("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", t("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", t("LmhlYWRlci1ibG9ja2VkLWFk"), t("I2FkX2Jsb2NrZXI=")],
                        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                        adGuardBase: [".BetterJsPopOverlay", t("I2FkXzMwMFgyNTA="), t("I2Jhbm5lcmZsb2F0MjI="), t("I2NhbXBhaWduLWJhbm5lcg=="), t("I0FkLUNvbnRlbnQ=")],
                        adGuardChinese: [t("LlppX2FkX2FfSA=="), t("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", t("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), t("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                        adGuardFrench: ["#pavePub", t("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", t("LmFkc19iYW4=")],
                        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                        adGuardJapanese: ["#kauli_yad_1", t("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), t("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), t("LmFkZ29vZ2xl"), t("Ll9faXNib29zdFJldHVybkFk")],
                        adGuardMobile: [t("YW1wLWF1dG8tYWRz"), t("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", t("I2FkX2ludmlld19hcmVh")],
                        adGuardRussian: [t("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), t("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', t("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                        adGuardSocial: [t("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), t("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                        adGuardTrackingProtection: ["#qoo-counter", t("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), t("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), t("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                        adGuardTurkish: ["#backkapat", t("I3Jla2xhbWk="), t("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), t("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), t("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                        bulgarian: [t("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                        easyList: [".yb-floorad", t("LndpZGdldF9wb19hZHNfd2lkZ2V0"), t("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", t("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                        easyListChina: [t("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), t("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", t("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                        easyListCzechSlovak: ["#onlajny-stickers", t("I3Jla2xhbW5pLWJveA=="), t("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", t("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                        easyListDutch: [t("I2FkdmVydGVudGll"), t("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", t("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                        easyListGermany: ["#SSpotIMPopSlider", t("LnNwb25zb3JsaW5rZ3J1ZW4="), t("I3dlcmJ1bmdza3k="), t("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), t("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                        easyListItaly: [t("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", t("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                        easyListLithuania: [t("LnJla2xhbW9zX3RhcnBhcw=="), t("LnJla2xhbW9zX251b3JvZG9z"), t("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), t("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), t("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                        estonian: [t("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                        frellwitSwedish: [t("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), t("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", t("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                        greekAdBlock: [t("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), t("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), t("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", t("LmFkX19tYWlu"), t("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                        icelandicAbp: [t("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                        latvian: [t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), t("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                        listKr: [t("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), t("I2xpdmVyZUFkV3JhcHBlcg=="), t("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), t("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                        listeAr: [t("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", t("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), t("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), t("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                        listeFr: [t("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), t("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), t("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                        officialPolish: ["#ceneo-placeholder-ceneo-12", t("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), t("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), t("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), t("ZGl2I3NrYXBpZWNfYWQ=")],
                        ro: [t("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), t("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), t("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                        ruAd: [t("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), t("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), t("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                        thaiAds: ["a[href*=macau-uta-popup]", t("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), t("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", t("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    },
                    o = Object.keys(n),
                    i = [].concat(...o.map(e => n[e])),
                    r = await z(i);
                e && function(e, t) {
                    let n = "DOM blockers debug:\n```";
                    for (let o of Object.keys(e))
                        for (let i of (n += `
${o}:`, e[o])) n += `
  ${t[i]?"\uD83D\uDEAB":"➡️"} ${i}`;
                    console.log(`${n}
\`\`\``)
                }(n, r);
                let a = o.filter(e => {
                    let t = n[e];
                    return p(t.map(e => r[e])) > .6 * t.length
                });
                return a.sort(), a
            }
            async function z(e) {
                var t;
                let n = document,
                    o = n.createElement("div"),
                    i = Array(e.length),
                    r = {};
                T(o);
                for (let t = 0; t < e.length; ++t) {
                    let r = function(e) {
                        let [t, n] = function(e) {
                            var t, n;
                            let o = `Unexpected syntax '${e}'`,
                                i = /^\s*([a-z-]*)(.*)$/i.exec(e),
                                r = i[1] || void 0,
                                a = {},
                                l = /([.:#][\w-]+|\[.+?\])/gi,
                                c = (e, t) => {
                                    a[e] = a[e] || [], a[e].push(t)
                                };
                            for (;;) {
                                let e = l.exec(i[2]);
                                if (!e) break;
                                let r = e[0];
                                switch (r[0]) {
                                    case ".":
                                        c("class", r.slice(1));
                                        break;
                                    case "#":
                                        c("id", r.slice(1));
                                        break;
                                    case "[":
                                        {
                                            let e = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(r);
                                            if (e) c(e[1], null != (n = null != (t = e[4]) ? t : e[5]) ? n : "");
                                            else throw Error(o);
                                            break
                                        }
                                    default:
                                        throw Error(o)
                                }
                            }
                            return [r, a]
                        }(e), o = document.createElement(null != t ? t : "div");
                        for (let e of Object.keys(n)) {
                            let t = n[e].join(" ");
                            "style" === e ? function(e, t) {
                                for (let n of t.split(";")) {
                                    let t = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
                                    if (t) {
                                        let [, n, o, , i] = t;
                                        e.setProperty(n, o, i || "")
                                    }
                                }
                            }(o.style, t) : o.setAttribute(e, t)
                        }
                        return o
                    }(e[t]);
                    "DIALOG" === r.tagName && r.show();
                    let a = n.createElement("div");
                    T(a), a.appendChild(r), o.appendChild(a), i[t] = r
                }
                for (; !n.body;) await a(50);
                n.body.appendChild(o);
                try {
                    for (let t = 0; t < e.length; ++t) i[t].offsetParent || (r[e[t]] = !0)
                } finally {
                    null == (t = o.parentNode) || t.removeChild(o)
                }
                return r
            }

            function T(e) {
                e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
            }

            function B(e) {
                return matchMedia(`(inverted-colors: ${e})`).matches
            }

            function O(e) {
                return matchMedia(`(forced-colors: ${e})`).matches
            }

            function $(e) {
                return matchMedia(`(prefers-contrast: ${e})`).matches
            }

            function U(e) {
                return matchMedia(`(prefers-reduced-motion: ${e})`).matches
            }

            function Q(e) {
                return matchMedia(`(prefers-reduced-transparency: ${e})`).matches
            }

            function K(e) {
                return matchMedia(`(dynamic-range: ${e})`).matches
            }
            let q = Math,
                ee = () => 0,
                et = {
                    default: [],
                    apple: [{
                        font: "-apple-system-body"
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: "monospace"
                    }],
                    min: [{
                        fontSize: "1px"
                    }],
                    system: [{
                        fontFamily: "system-ui"
                    }]
                },
                en = function() {
                    let e = window;
                    for (;;) {
                        let t = e.parent;
                        if (!t || t === e) return !1;
                        try {
                            if (t.location.origin !== e.location.origin) return !0
                        } catch (e) {
                            if (e instanceof Error && "SecurityError" === e.name) return !0;
                            throw e
                        }
                        e = t
                    }
                },
                eo = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                ei = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                er = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                ea = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"],
                el = "WEBGL_debug_renderer_info";

            function ec(e) {
                let t;
                if (e.webgl) return e.webgl.context;
                let n = document.createElement("canvas");
                for (let e of (n.addEventListener("webglCreateContextError", () => t = void 0), ["webgl", "experimental-webgl"])) {
                    try {
                        t = n.getContext(e)
                    } catch (e) {}
                    if (t) break
                }
                return e.webgl = {
                    context: t
                }, t
            }

            function es(e) {
                return Object.keys(e.__proto__).filter(eu)
            }

            function eu(e) {
                return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
            }

            function ed(e) {
                return "function" == typeof e.getParameter
            }
            let em = {
                fonts: function() {
                    return A(async (e, {
                        document: t
                    }) => {
                        let n = t.body;
                        n.style.fontSize = "48px";
                        let o = t.createElement("div");
                        o.style.setProperty("visibility", "hidden", "important");
                        let i = {},
                            r = {},
                            a = e => {
                                let n = t.createElement("span"),
                                    {
                                        style: i
                                    } = n;
                                return i.position = "absolute", i.top = "0", i.left = "0", i.fontFamily = e, n.textContent = "mmMwWLliI0O&1", o.appendChild(n), n
                            },
                            l = (e, t) => a(`'${e}',${t}`),
                            c = E.map(a),
                            s = (() => {
                                let e = {};
                                for (let t of H) e[t] = E.map(e => l(t, e));
                                return e
                            })();
                        n.appendChild(o);
                        for (let e = 0; e < E.length; e++) i[E[e]] = c[e].offsetWidth, r[E[e]] = c[e].offsetHeight;
                        return H.filter(e => {
                            let t;
                            return t = s[e], E.some((e, n) => t[n].offsetWidth !== i[e] || t[n].offsetHeight !== r[e])
                        })
                    })
                },
                domBlockers: D,
                fontPreferences: function() {
                    return function(e, t = 4e3) {
                        return A((n, o) => {
                            let i = o.document,
                                r = i.body,
                                a = r.style;
                            a.width = `${t}px`, a.webkitTextSizeAdjust = a.textSizeAdjust = "none", G() ? r.style.zoom = `${1/o.devicePixelRatio}` : F() && (r.style.zoom = "reset");
                            let l = i.createElement("div");
                            return l.textContent = [...Array(t / 20 | 0)].map(() => "word").join(" "), r.appendChild(l), e(i, r)
                        }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
                    }((e, t) => {
                        let n = {},
                            o = {};
                        for (let o of Object.keys(et)) {
                            let [i = {}, r = "mmMwWLliI0fiflO&1"] = et[o], a = e.createElement("span");
                            for (let e of (a.textContent = r, a.style.whiteSpace = "nowrap", Object.keys(i))) {
                                let t = i[e];
                                void 0 !== t && (a.style[e] = t)
                            }
                            n[o] = a, t.append(e.createElement("br"), a)
                        }
                        for (let e of Object.keys(et)) o[e] = n[e].getBoundingClientRect().width;
                        return o
                    })
                },
                audio: function() {
                    return F() && j() && Y() || G() && function() {
                        let e = navigator,
                            t = window,
                            n = Audio.prototype,
                            {
                                visualViewport: o
                            } = t;
                        return p(["srLatency" in n, "srChannelCount" in n, "devicePosture" in e, o && "segments" in o, "getTextInformation" in Image.prototype]) >= 3
                    }() && function() {
                        let e = window,
                            {
                                URLPattern: t
                            } = e;
                        return p(["union" in Set.prototype, "Iterator" in e, t && "hasRegExpGroups" in t.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3
                    }() ? -4 : function() {
                        var e;
                        let t, n, o = window,
                            i = o.OfflineAudioContext || o.webkitOfflineAudioContext;
                        if (!i) return -2;
                        if (F() && !I() && !(p(["DOMRectList" in (t = window), "RTCPeerConnectionIceEvent" in t, "SVGGeometryElement" in t, "ontransitioncancel" in t]) >= 3)) return -1;
                        let r = new i(1, 5e3, 44100),
                            a = r.createOscillator();
                        a.type = "triangle", a.frequency.value = 1e4;
                        let c = r.createDynamicsCompressor();
                        c.threshold.value = -50, c.knee.value = 40, c.ratio.value = 12, c.attack.value = 0, c.release.value = .25, a.connect(c), c.connect(r.destination), a.start(0);
                        let [s, d] = (e = r, n = () => void 0, [new Promise((t, o) => {
                            let i = !1,
                                r = 0,
                                a = 0;
                            e.oncomplete = e => t(e.renderedBuffer);
                            let c = () => {
                                    setTimeout(() => o(P("timeout")), Math.min(500, a + 5e3 - Date.now()))
                                },
                                s = () => {
                                    try {
                                        let t = e.startRendering();
                                        switch (l(t) && u(t), e.state) {
                                            case "running":
                                                a = Date.now(), i && c();
                                                break;
                                            case "suspended":
                                                !document.hidden && r++, i && r >= 3 ? o(P("suspended")) : setTimeout(s, 500)
                                        }
                                    } catch (e) {
                                        o(e)
                                    }
                                };
                            s(), n = () => {
                                !i && (i = !0, a > 0 && c())
                            }
                        }), n]), m = u(s.then(e => (function(e) {
                            let t = 0;
                            for (let n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                            return t
                        })(e.getChannelData(0).subarray(4500)), e => {
                            if ("timeout" === e.name || "suspended" === e.name) return -3;
                            throw e
                        }));
                        return () => (d(), m)
                    }()
                },
                screenFrame: function() {
                    if (F() && j() && Y()) return () => Promise.resolve(void 0);
                    let e = (! function() {
                        if (void 0 !== i) return;
                        let e = () => {
                            let t = J();
                            _(t) ? i = setTimeout(e, 2500) : (o = t, i = void 0)
                        };
                        e()
                    }(), async () => {
                        let e = J();
                        if (_(e)) {
                            let t;
                            if (o) return [...o];
                            if ((t = document).fullscreenElement || t.msFullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement) {
                                let t;
                                await ((t = document).exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t), e = J()
                            }
                        }
                        return _(e) || (o = e), e
                    });
                    return async () => {
                        let t = await e(),
                            n = e => null === e ? null : h(e, 10);
                        return [n(t[0]), n(t[1]), n(t[2]), n(t[3])]
                    }
                },
                canvas: function() {
                    return function(e) {
                        var t, n, o, i, r, a;
                        let l, c, s, u, d, m = !1,
                            [f, p] = ((l = document.createElement("canvas")).width = 1, l.height = 1, [l, l.getContext("2d")]);
                        return (t = f, p && t.toDataURL) ? ((n = p).rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), m = !n.isPointInPath(5, 5, "evenodd"), e ? u = d = "skipped" : [u, d] = (o = f, i = p, r = o, a = i, r.width = 240, r.height = 60, a.textBaseline = "alphabetic", a.fillStyle = "#f60", a.fillRect(100, 1, 62, 20), a.fillStyle = "#069", a.font = '11pt "Times New Roman"', c = `Cwm fjordbank gly ${String.fromCharCode(55357,56835)}`, a.fillText(c, 2, 15), a.fillStyle = "rgba(102, 204, 0, 0.2)", a.font = "18pt Arial", a.fillText(c, 4, 45), (s = N(o)) !== N(o) ? ["unstable", "unstable"] : (function(e, t) {
                            for (let [n, o, i] of (e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply", [
                                    ["#f2f", 40, 40],
                                    ["#2ff", 80, 40],
                                    ["#ff2", 60, 80]
                                ])) t.fillStyle = n, t.beginPath(), t.arc(o, i, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill();
                            t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
                        }(o, i), [N(o), s]))) : u = d = "unsupported", {
                            winding: m,
                            geometry: u,
                            text: d
                        }
                    }(F() && j() && Y())
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    let e = navigator,
                        t = [],
                        n = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
                    if (void 0 !== n && t.push([n]), Array.isArray(e.languages)) {
                        let n;
                        G() && p([!("MediaSettingsRange" in (n = window)), "RTCEncodedAudioFrame" in n, "" + n.Intl == "[object Intl]", "" + n.Reflect == "[object Reflect]"]) >= 3 || t.push(e.languages)
                    } else if ("string" == typeof e.languages) {
                        let n = e.languages;
                        n && t.push(n.split(","))
                    }
                    return t
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return f(m(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    if (!(F() && j() && Y())) {
                        let e, t;
                        return (t = [f(d((e = screen).width), null), f(d(e.height), null)]).sort().reverse(), t
                    }
                },
                hardwareConcurrency: function() {
                    return f(d(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e;
                    let t, n = null == (e = window.Intl) ? void 0 : e.DateTimeFormat;
                    if (n) {
                        let e = new n().resolvedOptions().timeZone;
                        if (e) return e
                    }
                    let o = -Math.max(m(new Date(t = new Date().getFullYear(), 0, 1).getTimezoneOffset()), m(new Date(t, 6, 1).getTimezoneOffset()));
                    return `UTC${o>=0?"+":""}${o}`
                },
                sessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                localStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                indexedDB: function() {
                    let e, t;
                    if (!(R() || p(["msWriteProfilerMark" in (e = window), "MSStream" in e, "msLaunchUri" in (t = navigator), "msSaveBlob" in t]) >= 3 && !R())) try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                openDatabase: function() {
                    return !!window.openDatabase
                },
                cpuClass: function() {
                    return navigator.cpuClass
                },
                platform: function() {
                    let {
                        platform: e
                    } = navigator;
                    return "MacIntel" === e && F() && !I() ? ! function() {
                        if ("iPad" === navigator.platform) return !0;
                        let e = screen,
                            t = e.width / e.height;
                        return p(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
                    }() ? "iPhone" : "iPad" : e
                },
                plugins: function() {
                    let e = navigator.plugins;
                    if (!e) return;
                    let t = [];
                    for (let n = 0; n < e.length; ++n) {
                        let o = e[n];
                        if (!o) continue;
                        let i = [];
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e];
                            i.push({
                                type: t.type,
                                suffixes: t.suffixes
                            })
                        }
                        t.push({
                            name: o.name,
                            description: o.description,
                            mimeTypes: i
                        })
                    }
                    return t
                },
                touchSupport: function() {
                    let e, t = navigator,
                        n = 0;
                    void 0 !== t.maxTouchPoints ? n = d(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (t) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: n,
                        touchEvent: e,
                        touchStart: "ontouchstart" in window
                    }
                },
                vendor: function() {
                    return navigator.vendor || ""
                },
                vendorFlavors: function() {
                    let e = [];
                    for (let t of ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]) {
                        let n = window[t];
                        n && "object" == typeof n && e.push(t)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    let e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        let t = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
                    } catch (e) {
                        return !1
                    }
                },
                colorGamut: function() {
                    for (let e of ["rec2020", "p3", "srgb"])
                        if (matchMedia(`(color-gamut: ${e})`).matches) return e
                },
                invertedColors: function() {
                    return !!B("inverted") || !B("none") && void 0
                },
                forcedColors: function() {
                    return !!O("active") || !O("none") && void 0
                },
                monochrome: function() {
                    if (matchMedia("(min-monochrome: 0)").matches) {
                        for (let e = 0; e <= 100; ++e)
                            if (matchMedia(`(max-monochrome: ${e})`).matches) return e;
                        throw Error("Too high value")
                    }
                },
                contrast: function() {
                    return $("no-preference") ? 0 : $("high") || $("more") ? 1 : $("low") || $("less") ? -1 : $("forced") ? 10 : void 0
                },
                reducedMotion: function() {
                    return !!U("reduce") || !U("no-preference") && void 0
                },
                reducedTransparency: function() {
                    return !!Q("reduce") || !Q("no-preference") && void 0
                },
                hdr: function() {
                    return !!K("high") || !K("standard") && void 0
                },
                math: function() {
                    let e = q.acos || ee,
                        t = q.acosh || ee,
                        n = q.asin || ee,
                        o = q.asinh || ee,
                        i = q.atanh || ee,
                        r = q.atan || ee,
                        a = q.sin || ee,
                        l = q.sinh || ee,
                        c = q.cos || ee,
                        s = q.cosh || ee,
                        u = q.tan || ee,
                        d = q.tanh || ee,
                        m = q.exp || ee,
                        f = q.expm1 || ee,
                        p = q.log1p || ee;
                    return {
                        acos: e(.12312423423423424),
                        acosh: t(1e308),
                        acoshPf: q.log(1e154 + q.sqrt(1e154 * 1e154 - 1)),
                        asin: n(.12312423423423424),
                        asinh: o(1),
                        asinhPf: q.log(1 + q.sqrt(2)),
                        atanh: i(.5),
                        atanhPf: q.log(3) / 2,
                        atan: r(.5),
                        sin: a(-1e300),
                        sinh: l(1),
                        sinhPf: q.exp(1) - 1 / q.exp(1) / 2,
                        cos: c(10.000000000123),
                        cosh: s(1),
                        coshPf: (q.exp(1) + 1 / q.exp(1)) / 2,
                        tan: u(-1e300),
                        tanh: d(1),
                        tanhPf: (q.exp(2) - 1) / (q.exp(2) + 1),
                        exp: m(1),
                        expm1: f(1),
                        expm1Pf: q.exp(1) - 1,
                        log1p: p(10),
                        log1pPf: q.log(11),
                        powPI: q.pow(q.PI, -100)
                    }
                },
                pdfViewerEnabled: function() {
                    return navigator.pdfViewerEnabled
                },
                architecture: function() {
                    let e = new Float32Array(1),
                        t = new Uint8Array(e.buffer);
                    return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
                },
                applePay: function() {
                    let {
                        ApplePaySession: e
                    } = window;
                    if ("function" != typeof(null == e ? void 0 : e.canMakePayments)) return -1;
                    if (en()) return -3;
                    try {
                        return +!!e.canMakePayments()
                    } catch (e) {
                        var t = e;
                        if (t instanceof Error && "InvalidAccessError" === t.name && /\bfrom\b.*\binsecure\b/i.test(t.message)) return -2;
                        throw t
                    }
                },
                privateClickMeasurement: function() {
                    var e;
                    let t = document.createElement("a"),
                        n = null != (e = t.attributionSourceId) ? e : t.attributionsourceid;
                    return void 0 === n ? void 0 : String(n)
                },
                audioBaseLatency: function() {
                    if (!(X() || F())) return -2;
                    if (!window.AudioContext) return -1;
                    let e = new AudioContext().baseLatency;
                    return null == e ? -1 : isFinite(e) ? e : -3
                },
                dateTimeLocale: function() {
                    if (!window.Intl) return -1;
                    let e = window.Intl.DateTimeFormat;
                    if (!e) return -2;
                    let t = e().resolvedOptions().locale;
                    return t || "" === t ? t : -3
                },
                webGlBasics: function({
                    cache: e
                }) {
                    var t, n, o, i, r, a;
                    let l = ec(e);
                    if (!l) return -1;
                    if (!ed(l)) return -2;
                    let c = C() ? null : l.getExtension(el);
                    return {
                        version: (null == (t = l.getParameter(l.VERSION)) ? void 0 : t.toString()) || "",
                        vendor: (null == (n = l.getParameter(l.VENDOR)) ? void 0 : n.toString()) || "",
                        vendorUnmasked: c ? null == (o = l.getParameter(c.UNMASKED_VENDOR_WEBGL)) ? void 0 : o.toString() : "",
                        renderer: (null == (i = l.getParameter(l.RENDERER)) ? void 0 : i.toString()) || "",
                        rendererUnmasked: c ? null == (r = l.getParameter(c.UNMASKED_RENDERER_WEBGL)) ? void 0 : r.toString() : "",
                        shadingLanguageVersion: (null == (a = l.getParameter(l.SHADING_LANGUAGE_VERSION)) ? void 0 : a.toString()) || ""
                    }
                },
                webGlExtensions: function({
                    cache: e
                }) {
                    let t = ec(e);
                    if (!t) return -1;
                    if (!ed(t)) return -2;
                    let n = t.getSupportedExtensions(),
                        o = t.getContextAttributes(),
                        i = [],
                        r = [],
                        a = [],
                        l = [],
                        c = [];
                    if (o)
                        for (let e of Object.keys(o)) r.push(`${e}=${o[e]}`);
                    for (let e of es(t)) {
                        let n = t[e];
                        a.push(`${e}=${n}${eo.has(n)?`=${t.getParameter(n)}`:""}`)
                    }
                    if (n)
                        for (let e of n) {
                            if (e === el && C() || "WEBGL_polygon_mode" === e && (G() || F())) continue;
                            let n = t.getExtension(e);
                            if (!n) {
                                i.push(e);
                                continue
                            }
                            for (let e of es(n)) {
                                let o = n[e];
                                l.push(`${e}=${o}${ei.has(o)?`=${t.getParameter(o)}`:""}`)
                            }
                        }
                    for (let e of er)
                        for (let n of ea) {
                            let o = function(e, t, n) {
                                let o = e.getShaderPrecisionFormat(e[t], e[n]);
                                return o ? [o.rangeMin, o.rangeMax, o.precision] : []
                            }(t, e, n);
                            c.push(`${e}.${n}=${o.join(",")}`)
                        }
                    return l.sort(), a.sort(), {
                        contextAttributes: r,
                        parameters: a,
                        shaderPrecisions: c,
                        extensions: n,
                        extensionParameters: l,
                        unsupportedExtensions: i
                    }
                }
            };

            function ef(e) {
                return JSON.stringify(e, (e, t) => {
                    if (t instanceof Error) {
                        var n;
                        return {
                            name: t.name,
                            message: t.message,
                            stack: null == (n = t.stack) ? void 0 : n.split("\n"),
                            ...t
                        }
                    }
                    return t
                }, 2)
            }

            function ep(e) {
                return function(e, t) {
                    let n, o = function(e) {
                        let t = new Uint8Array(e.length);
                        for (let n = 0; n < e.length; n++) {
                            let o = e.charCodeAt(n);
                            if (o > 127) return new TextEncoder().encode(e);
                            t[n] = o
                        }
                        return t
                    }(e);
                    t = t || 0;
                    let i = [0, o.length],
                        r = i[1] % 16,
                        a = i[1] - r,
                        l = [0, t],
                        c = [0, t],
                        s = [0, 0],
                        u = [0, 0];
                    for (n = 0; n < a; n += 16) s[0] = o[n + 4] | o[n + 5] << 8 | o[n + 6] << 16 | o[n + 7] << 24, s[1] = o[n] | o[n + 1] << 8 | o[n + 2] << 16 | o[n + 3] << 24, u[0] = o[n + 12] | o[n + 13] << 8 | o[n + 14] << 16 | o[n + 15] << 24, u[1] = o[n + 8] | o[n + 9] << 8 | o[n + 10] << 16 | o[n + 11] << 24, b(s, x), v(s, 31), b(s, S), w(l, s), v(l, 27), y(l, c), b(l, W), y(l, Z), b(u, S), v(u, 33), b(u, x), w(c, u), v(c, 31), y(c, l), b(c, W), y(c, M);
                    s[0] = 0, s[1] = 0, u[0] = 0, u[1] = 0;
                    let d = [0, 0];
                    switch (r) {
                        case 15:
                            d[1] = o[n + 14], g(d, 48), w(u, d);
                        case 14:
                            d[1] = o[n + 13], g(d, 40), w(u, d);
                        case 13:
                            d[1] = o[n + 12], g(d, 32), w(u, d);
                        case 12:
                            d[1] = o[n + 11], g(d, 24), w(u, d);
                        case 11:
                            d[1] = o[n + 10], g(d, 16), w(u, d);
                        case 10:
                            d[1] = o[n + 9], g(d, 8), w(u, d);
                        case 9:
                            d[1] = o[n + 8], w(u, d), b(u, S), v(u, 33), b(u, x), w(c, u);
                        case 8:
                            d[1] = o[n + 7], g(d, 56), w(s, d);
                        case 7:
                            d[1] = o[n + 6], g(d, 48), w(s, d);
                        case 6:
                            d[1] = o[n + 5], g(d, 40), w(s, d);
                        case 5:
                            d[1] = o[n + 4], g(d, 32), w(s, d);
                        case 4:
                            d[1] = o[n + 3], g(d, 24), w(s, d);
                        case 3:
                            d[1] = o[n + 2], g(d, 16), w(s, d);
                        case 2:
                            d[1] = o[n + 1], g(d, 8), w(s, d);
                        case 1:
                            d[1] = o[n], w(s, d), b(s, x), v(s, 31), b(s, S), w(l, s)
                    }
                    return w(l, i), w(c, i), y(l, c), y(c, l), V(l), V(c), y(l, c), y(c, l), ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
                }(function(e) {
                    let t = "";
                    for (let n of Object.keys(e).sort()) {
                        let o = e[n],
                            i = "error" in o ? "error" : JSON.stringify(o.value);
                        t += `${t?"|":""}${n.replace(/([:|\\])/g,"\\$1")}:${i}`
                    }
                    return t
                }(e))
            }
            var eh = {
                load: async function(e = {}) {
                    var t, n, o, i;
                    let l, d, m;
                    (null == (t = e.monitoring) || t) && function() {
                        if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                            let e = new XMLHttpRequest;
                            e.open("get", `https://m1.openfpcdn.io/fingerprintjs/v${r}/npm-monitoring`, !0), e.send()
                        } catch (e) {
                            console.error(e)
                        }
                    }();
                    let {
                        delayFallback: f,
                        debug: p
                    } = e;
                    return await
                    function(e = 50) {
                        return function(e, t = 1 / 0) {
                            let {
                                requestIdleCallback: n
                            } = window;
                            return n ? new Promise(e => n.call(window, () => e(), {
                                timeout: t
                            })) : a(Math.min(e, t))
                        }(e, 2 * e)
                    }(f), n = {
                        cache: {},
                        debug: p
                    }, o = [], d = u(s(l = Object.keys(em).filter(e => ! function(e, t) {
                        for (let n = 0, o = e.length; n < o; ++n)
                            if (e[n] === t) return !0;
                        return !1
                    }(o, e)), e => {
                        var t;
                        let o;
                        return t = em[e], o = u(new Promise(e => {
                                let o = Date.now();
                                c(t.bind(null, n), (...t) => {
                                    let n = Date.now() - o;
                                    if (!t[0]) return e(() => ({
                                        error: t[1],
                                        duration: n
                                    }));
                                    let i = t[1];
                                    if ("function" != typeof i) return e(() => ({
                                        value: i,
                                        duration: n
                                    }));
                                    e(() => new Promise(e => {
                                        let t = Date.now();
                                        c(i, (...o) => {
                                            let i = n + Date.now() - t;
                                            if (!o[0]) return e({
                                                error: o[1],
                                                duration: i
                                            });
                                            e({
                                                value: o[1],
                                                duration: i
                                            })
                                        })
                                    }))
                                })
                            })),
                            function() {
                                return o.then(e => e())
                            }
                    }, void 0)), i = async function() {
                        let e = await d,
                            t = await s(e, e => u(e()), void 0),
                            n = await Promise.all(t),
                            o = {};
                        for (let e = 0; e < l.length; ++e) o[l[e]] = n[e];
                        return o
                    }, m = Date.now(), {
                        async get(e) {
                            var t;
                            let n, o, a, l = Date.now(),
                                c = await i(),
                                s = {
                                    get visitorId() {
                                        return void 0 === n && (n = ep(this.components)), n
                                    },
                                    set visitorId(visitorId) {
                                        n = visitorId
                                    },
                                    confidence: (a = h(.99 + .01 * (o = function(e) {
                                        if (X()) return .4;
                                        if (F()) return I() && !(j() && Y()) ? .5 : .3;
                                        let t = "value" in e.platform ? e.platform.value : "";
                                        return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                                    }(t = c)), 1e-4), {
                                        score: o,
                                        comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, `${a}`)
                                    }),
                                    components: t,
                                    version: r
                                };
                            return (p || (null == e ? void 0 : e.debug)) && console.log(`Copy the text below to get the debug data:

\`\`\`
version: ${s.version}
userAgent: ${navigator.userAgent}
timeBetweenLoadAndGet: ${l-m}
visitorId: ${s.visitorId}
components: ${ef(c)}
\`\`\``), s
                        }
                    }
                },
                hashComponents: ep,
                componentsToDebugString: ef
            }
        },
        80723: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            let o = (0, n(78340).A)("arrow-left", [
                ["path", {
                    d: "m12 19-7-7 7-7",
                    key: "1l729n"
                }],
                ["path", {
                    d: "M19 12H5",
                    key: "x3x0zl"
                }]
            ])
        },
        84980: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            let o = (0, n(78340).A)("clock", [
                ["path", {
                    d: "M12 6v6l4 2",
                    key: "mmk7yg"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        }
    }
]);