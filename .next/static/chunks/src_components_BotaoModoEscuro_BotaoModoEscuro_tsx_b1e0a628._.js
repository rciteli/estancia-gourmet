(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_BotaoModoEscuro_BotaoModoEscuro_tsx_b1e0a628._.js", {

"[project]/src/components/BotaoModoEscuro/BotaoModoEscuro.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ModoEscuro = ()=>{
    _s();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ModoEscuro.useState": ()=>{
            // Lê do localStorage ou da preferência do sistema
            return localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
    }["ModoEscuro.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModoEscuro.useEffect": ()=>{
            if (darkMode) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem("darkMode", darkMode.toString());
        }
    }["ModoEscuro.useEffect"], [
        darkMode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setDarkMode(!darkMode),
        className: "bg-emerald-600 hover:bg-emerald-700 dark:bg-gray-800 dark:hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-all",
        children: darkMode ? "🌞 Claro" : "🌙 Escuro"
    }, void 0, false, {
        fileName: "[project]/src/components/BotaoModoEscuro/BotaoModoEscuro.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
_s(ModoEscuro, "tK0f1sQOQCxuKdnxlAltGrTY8ys=");
_c = ModoEscuro;
const __TURBOPACK__default__export__ = ModoEscuro;
var _c;
__turbopack_context__.k.register(_c, "ModoEscuro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_BotaoModoEscuro_BotaoModoEscuro_tsx_b1e0a628._.js.map