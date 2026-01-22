"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1171], {
        17064: (e, t, n) => {
            n.d(t, {
                CP: () => eo,
                Jv: () => er,
                CI: () => ea,
                wV: () => ee
            });
            var s, r = n(95155),
                a = n(12115),
                o = n.t(a, 2);
            class i extends Error {
                constructor(e, t) {
                    e instanceof Error ? super(void 0, {
                        cause: {
                            err: e,
                            ...e.cause,
                            ...t
                        }
                    }) : "string" == typeof e ? (t instanceof Error && (t = {
                        err: t,
                        ...t.cause
                    }), super(e, t)) : super(void 0, e), this.name = this.constructor.name, this.type = this.constructor.type ? ? "AuthError", this.kind = this.constructor.kind ? ? "error", Error.captureStackTrace ? .(this, this.constructor);
                    const n = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
                    this.message += `${this.message?". ":""}Read more at ${n}`
                }
            }
            class l extends i {}
            l.kind = "signIn";
            class c extends i {}
            c.type = "AdapterError";
            class d extends i {}
            d.type = "AccessDenied";
            class u extends i {}
            u.type = "CallbackRouteError";
            class h extends i {}
            h.type = "ErrorPageLoop";
            class p extends i {}
            p.type = "EventError";
            class v extends i {}
            v.type = "InvalidCallbackUrl";
            class f extends l {
                constructor() {
                    super(...arguments), this.code = "credentials"
                }
            }
            f.type = "CredentialsSignin";
            class w extends i {}
            w.type = "InvalidEndpoints";
            class g extends i {}
            g.type = "InvalidCheck";
            class y extends i {}
            y.type = "JWTSessionError";
            class E extends i {}
            E.type = "MissingAdapter";
            class m extends i {}
            m.type = "MissingAdapterMethods";
            class x extends i {}
            x.type = "MissingAuthorize";
            class S extends i {}
            S.type = "MissingSecret";
            class b extends l {}
            b.type = "OAuthAccountNotLinked";
            class _ extends l {}
            _.type = "OAuthCallbackError";
            class L extends i {}
            L.type = "OAuthProfileParseError";
            class U extends i {}
            U.type = "SessionTokenError";
            class R extends l {}
            R.type = "OAuthSignInError";
            class k extends l {}
            k.type = "EmailSignInError";
            class A extends i {}
            A.type = "SignOutError";
            class P extends i {}
            P.type = "UnknownAction";
            class C extends i {}
            C.type = "UnsupportedStrategy";
            class T extends i {}
            T.type = "InvalidProvider";
            class $ extends i {}
            $.type = "UntrustedHost";
            class N extends i {}
            N.type = "Verification";
            class I extends l {}
            I.type = "MissingCSRF";
            class M extends i {}
            M.type = "DuplicateConditionalUI";
            class O extends i {}
            O.type = "MissingWebAuthnAutocomplete";
            class X extends i {}
            X.type = "WebAuthnVerificationError";
            class H extends l {}
            H.type = "AccountNotLinked";
            class j extends i {}
            j.type = "ExperimentalFeatureNotEnabled";
            class F extends i {}
            class W extends i {}
            async function V(e, t, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = `${D(t)}/${e}`;
                try {
                    var a;
                    let e = {
                        headers: {
                            "Content-Type": "application/json",
                            ...(null == s || null == (a = s.headers) ? void 0 : a.cookie) ? {
                                cookie: s.headers.cookie
                            } : {}
                        }
                    };
                    (null == s ? void 0 : s.body) && (e.body = JSON.stringify(s.body), e.method = "POST");
                    let t = await fetch(r, e),
                        n = await t.json();
                    if (!t.ok) throw n;
                    return n
                } catch (e) {
                    return n.error(new F(e.message, e)), null
                }
            }

            function D(e) {
                return e.basePath
            }

            function J() {
                return Math.floor(Date.now() / 1e3)
            }

            function B(e) {
                let t = new URL("http://localhost:3000/api/auth");
                e && !e.startsWith("http") && (e = `https://${e}`);
                let n = new URL(e || t),
                    s = ("/" === n.pathname ? t.pathname : n.pathname).replace(/\/$/, ""),
                    r = `${n.origin}${s}`;
                return {
                    origin: n.origin,
                    host: n.host,
                    path: s,
                    base: r,
                    toString: () => r
                }
            }
            var q = n(41463);
            let z = {
                    baseUrl: B(q.env.NEXTAUTH_URL ? ? q.env.VERCEL_URL).origin,
                    basePath: B(q.env.NEXTAUTH_URL).path,
                    baseUrlServer: B(q.env.NEXTAUTH_URL_INTERNAL ? ? q.env.NEXTAUTH_URL ? ? q.env.VERCEL_URL).origin,
                    basePathServer: B(q.env.NEXTAUTH_URL_INTERNAL ? ? q.env.NEXTAUTH_URL).path,
                    _lastSync: 0,
                    _session: void 0,
                    _getSession: () => {}
                },
                G = null;

            function K() {
                return "undefined" == typeof BroadcastChannel ? {
                    postMessage: () => {},
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    name: "next-auth",
                    onmessage: null,
                    onmessageerror: null,
                    close: () => {},
                    dispatchEvent: () => !1
                } : new BroadcastChannel("next-auth")
            }

            function Q() {
                return null === G && (G = K()), G
            }
            let Y = {
                    debug: console.debug,
                    error: console.error,
                    warn: console.warn
                },
                Z = null == (s = a.createContext) ? void 0 : s.call(o, void 0);

            function ee(e) {
                if (!Z) throw Error("React Context is unavailable in Server Components");
                let t = a.useContext(Z),
                    {
                        required: n,
                        onUnauthenticated: s
                    } = e ? ? {},
                    r = n && "unauthenticated" === t.status;
                return (a.useEffect(() => {
                    if (r) {
                        let e = `${z.basePath}/signin?${new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href})}`;
                        s ? s() : window.location.href = e
                    }
                }, [r, s]), r) ? {
                    data: t.data,
                    update: t.update,
                    status: "loading"
                } : t
            }
            async function et(e) {
                let t = await V("session", z, Y, e);
                return ((null == e ? void 0 : e.broadcast) ? ? !0) && K().postMessage({
                    event: "session",
                    data: {
                        trigger: "getSession"
                    }
                }), t
            }
            async function en() {
                let e = await V("csrf", z, Y);
                return (null == e ? void 0 : e.csrfToken) ? ? ""
            }
            async function es() {
                return V("providers", z, Y)
            }
            async function er(e, t, n) {
                let {
                    callbackUrl: s,
                    ...r
                } = t ? ? {}, {
                    redirect: a = !0,
                    redirectTo: o = s ? ? window.location.href,
                    ...i
                } = r, l = D(z), c = await es();
                if (!c) {
                    let e = `${l}/error`;
                    window.location.href = e;
                    return
                }
                if (!e || !c[e]) {
                    let e = `${l}/signin?${new URLSearchParams({callbackUrl:o})}`;
                    window.location.href = e;
                    return
                }
                let d = c[e].type;
                if ("webauthn" === d) throw TypeError(`Provider id "${e}" refers to a WebAuthn provider.
Please use \`import { signIn } from "next-auth/webauthn"\` instead.`);
                let u = `${l}/${"credentials"===d?"callback":"signin"}/${e}`,
                    h = await en(),
                    p = await fetch(`${u}?${new URLSearchParams(n)}`, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "X-Auth-Return-Redirect": "1"
                        },
                        body: new URLSearchParams({ ...i,
                            csrfToken: h,
                            callbackUrl: o
                        })
                    }),
                    v = await p.json();
                if (a) {
                    let e = v.url ? ? o;
                    window.location.href = e, e.includes("#") && window.location.reload();
                    return
                }
                let f = new URL(v.url).searchParams.get("error") ? ? void 0,
                    w = new URL(v.url).searchParams.get("code") ? ? void 0;
                return p.ok && await z._getSession({
                    event: "storage"
                }), {
                    error: f,
                    code: w,
                    status: p.status,
                    ok: p.ok,
                    url: f ? null : v.url
                }
            }
            async function ea(e) {
                let {
                    redirect: t = !0,
                    redirectTo: n = (null == e ? void 0 : e.callbackUrl) ? ? window.location.href
                } = e ? ? {}, s = D(z), r = await en(), a = await fetch(`${s}/signout`, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-Auth-Return-Redirect": "1"
                    },
                    body: new URLSearchParams({
                        csrfToken: r,
                        callbackUrl: n
                    })
                }), o = await a.json();
                if (Q().postMessage({
                        event: "session",
                        data: {
                            trigger: "signout"
                        }
                    }), t) {
                    let e = o.url ? ? n;
                    window.location.href = e, e.includes("#") && window.location.reload();
                    return
                }
                return await z._getSession({
                    event: "storage"
                }), o
            }

            function eo(e) {
                if (!Z) throw Error("React Context is unavailable in Server Components");
                let {
                    children: t,
                    basePath: n,
                    refetchInterval: s,
                    refetchWhenOffline: o
                } = e;
                n && (z.basePath = n);
                let i = void 0 !== e.session;
                z._lastSync = i ? J() : 0;
                let [l, c] = a.useState(() => (i && (z._session = e.session), e.session)), [d, u] = a.useState(!i);
                a.useEffect(() => (z._getSession = async function() {
                    let {
                        event: e
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    try {
                        let t = "storage" === e;
                        if (t || void 0 === z._session) {
                            z._lastSync = J(), z._session = await et({
                                broadcast: !t
                            }), c(z._session);
                            return
                        }
                        if (!e || null === z._session || J() < z._lastSync) return;
                        z._lastSync = J(), z._session = await et(), c(z._session)
                    } catch (e) {
                        Y.error(new W(e.message, e))
                    } finally {
                        u(!1)
                    }
                }, z._getSession(), () => {
                    z._lastSync = 0, z._session = void 0, z._getSession = () => {}
                }), []), a.useEffect(() => {
                    let e = () => z._getSession({
                        event: "storage"
                    });
                    return Q().addEventListener("message", e), () => Q().removeEventListener("message", e)
                }, []), a.useEffect(() => {
                    let {
                        refetchOnWindowFocus: t = !0
                    } = e, n = () => {
                        t && "visible" === document.visibilityState && z._getSession({
                            event: "visibilitychange"
                        })
                    };
                    return document.addEventListener("visibilitychange", n, !1), () => document.removeEventListener("visibilitychange", n, !1)
                }, [e.refetchOnWindowFocus]);
                let h = function() {
                        let [e, t] = a.useState("undefined" != typeof navigator && navigator.onLine), n = () => t(!0), s = () => t(!1);
                        return a.useEffect(() => (window.addEventListener("online", n), window.addEventListener("offline", s), () => {
                            window.removeEventListener("online", n), window.removeEventListener("offline", s)
                        }), []), e
                    }(),
                    p = !1 !== o || h;
                a.useEffect(() => {
                    if (s && p) {
                        let e = setInterval(() => {
                            z._session && z._getSession({
                                event: "poll"
                            })
                        }, 1e3 * s);
                        return () => clearInterval(e)
                    }
                }, [s, p]);
                let v = a.useMemo(() => ({
                    data: l,
                    status: d ? "loading" : l ? "authenticated" : "unauthenticated",
                    async update(e) {
                        if (d) return;
                        u(!0);
                        let t = await V("session", z, Y, void 0 === e ? void 0 : {
                            body: {
                                csrfToken: await en(),
                                data: e
                            }
                        });
                        return u(!1), t && (c(t), Q().postMessage({
                            event: "session",
                            data: {
                                trigger: "getSession"
                            }
                        })), t
                    }
                }), [l, d]);
                return (0, r.jsx)(Z.Provider, {
                    value: v,
                    children: t
                })
            }
        },
        73321: (e, t, n) => {
            var s = n(74645);
            n.o(s, "notFound") && n.d(t, {
                notFound: function() {
                    return s.notFound
                }
            }), n.o(s, "usePathname") && n.d(t, {
                usePathname: function() {
                    return s.usePathname
                }
            }), n.o(s, "useRouter") && n.d(t, {
                useRouter: function() {
                    return s.useRouter
                }
            }), n.o(s, "useSearchParams") && n.d(t, {
                useSearchParams: function() {
                    return s.useSearchParams
                }
            })
        }
    }
]);