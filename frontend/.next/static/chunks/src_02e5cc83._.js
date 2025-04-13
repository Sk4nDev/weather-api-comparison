(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/stores/weatherStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useWeatherStore": (()=>useWeatherStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useWeatherStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        city: '',
        provider: 'openweathermap',
        data: null,
        setCity: (city)=>set({
                city
            }),
        setProvider: (provider)=>set({
                provider
            }),
        setData: (data)=>set({
                data
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/iconmap.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ICON_MAP": (()=>ICON_MAP)
});
const ICON_MAP = {
    "200": "thunderstorm",
    "201": "thunderstorm",
    "202": "thunderstorm",
    "210": "lightning",
    "211": "lightning",
    "212": "lightning",
    "221": "lightning",
    "230": "thunderstorm",
    "231": "thunderstorm",
    "232": "thunderstorm",
    "300": "sprinkle",
    "301": "sprinkle",
    "302": "rain",
    "310": "rain-mix",
    "311": "rain",
    "312": "rain",
    "313": "showers",
    "314": "rain",
    "321": "sprinkle",
    "500": "sprinkle",
    "501": "rain",
    "502": "rain",
    "503": "rain",
    "504": "rain",
    "511": "rain-mix",
    "520": "showers",
    "521": "showers",
    "522": "showers",
    "531": "storm-showers",
    "600": "snow",
    "601": "snow",
    "602": "sleet",
    "611": "rain-mix",
    "612": "rain-mix",
    "615": "rain-mix",
    "616": "rain-mix",
    "620": "rain-mix",
    "621": "snow",
    "622": "snow",
    "701": "showers",
    "711": "smoke",
    "721": "day-haze",
    "731": "dust",
    "741": "fog",
    "761": "dust",
    "762": "dust",
    "771": "cloudy-gusts",
    "781": "tornado",
    "800": "day-sunny",
    "801": "cloudy-gusts",
    "802": "cloudy-gusts",
    "803": "cloudy-gusts",
    "804": "cloudy",
    "900": "tornado",
    "901": "storm-showers",
    "902": "hurricane",
    "903": "snowflake-cold",
    "904": "hot",
    "905": "windy",
    "906": "hail",
    "957": "strong-wind",
    "200d": "day-thunderstorm",
    "201d": "day-thunderstorm",
    "202d": "day-thunderstorm",
    "210d": "day-lightning",
    "211d": "day-lightning",
    "212d": "day-lightning",
    "221d": "day-lightning",
    "230d": "day-thunderstorm",
    "231d": "day-thunderstorm",
    "232d": "day-thunderstorm",
    "300d": "day-sprinkle",
    "301d": "day-sprinkle",
    "302d": "day-rain",
    "310d": "day-rain",
    "311d": "day-rain",
    "312d": "day-rain",
    "313d": "day-rain",
    "314d": "day-rain",
    "321d": "day-sprinkle",
    "500d": "day-sprinkle",
    "501d": "day-rain",
    "502d": "day-rain",
    "503d": "day-rain",
    "504d": "day-rain",
    "511d": "day-rain-mix",
    "520d": "day-showers",
    "521d": "day-showers",
    "522d": "day-showers",
    "531d": "day-storm-showers",
    "600d": "day-snow",
    "601d": "day-sleet",
    "602d": "day-snow",
    "611d": "day-rain-mix",
    "612d": "day-rain-mix",
    "615d": "day-rain-mix",
    "616d": "day-rain-mix",
    "620d": "day-rain-mix",
    "621d": "day-snow",
    "622d": "day-snow",
    "701d": "day-showers",
    "711d": "smoke",
    "721d": "day-haze",
    "731d": "dust",
    "741d": "day-fog",
    "761d": "dust",
    "762d": "dust",
    "781d": "tornado",
    "800d": "day-sunny",
    "801d": "day-cloudy-gusts",
    "802d": "day-cloudy-gusts",
    "803d": "day-cloudy-gusts",
    "804d": "day-sunny-overcast",
    "900d": "tornado",
    "902d": "hurricane",
    "903d": "snowflake-cold",
    "904d": "hot",
    "906d": "day-hail",
    "957d": "strong-wind",
    "200n": "night-alt-thunderstorm",
    "201n": "night-alt-thunderstorm",
    "202n": "night-alt-thunderstorm",
    "210n": "night-alt-lightning",
    "211n": "night-alt-lightning",
    "212n": "night-alt-lightning",
    "221n": "night-alt-lightning",
    "230n": "night-alt-thunderstorm",
    "231n": "night-alt-thunderstorm",
    "232n": "night-alt-thunderstorm",
    "300n": "night-alt-sprinkle",
    "301n": "night-alt-sprinkle",
    "302n": "night-alt-rain",
    "310n": "night-alt-rain",
    "311n": "night-alt-rain",
    "312n": "night-alt-rain",
    "313n": "night-alt-rain",
    "314n": "night-alt-rain",
    "321n": "night-alt-sprinkle",
    "500n": "night-alt-sprinkle",
    "501n": "night-alt-rain",
    "502n": "night-alt-rain",
    "503n": "night-alt-rain",
    "504n": "night-alt-rain",
    "511n": "night-alt-rain-mix",
    "520n": "night-alt-showers",
    "521n": "night-alt-showers",
    "522n": "night-alt-showers",
    "531n": "night-alt-storm-showers",
    "600n": "night-alt-snow",
    "601n": "night-alt-sleet",
    "602n": "night-alt-snow",
    "611n": "night-alt-rain-mix",
    "612n": "night-alt-rain-mix",
    "615n": "night-alt-rain-mix",
    "616n": "night-alt-rain-mix",
    "620n": "night-alt-rain-mix",
    "621n": "night-alt-snow",
    "622n": "night-alt-snow",
    "701n": "night-alt-showers",
    "711n": "smoke",
    "721n": "day-haze",
    "731n": "dust",
    "741n": "night-fog",
    "761n": "dust",
    "762n": "dust",
    "781n": "tornado",
    "800n": "night-clear",
    "801n": "night-alt-cloudy-gusts",
    "802n": "night-alt-cloudy-gusts",
    "803n": "night-alt-cloudy-gusts",
    "804n": "night-alt-cloudy",
    "900n": "tornado",
    "902n": "hurricane",
    "903n": "snowflake-cold",
    "904n": "hot",
    "906n": "night-alt-hail",
    "957n": "strong-wind"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/WeatherIcon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeatherIcon": (()=>WeatherIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$iconmap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/iconmap.ts [app-client] (ecmascript)");
;
;
;
const WeatherIcon = ({ code, pod, className, ...props })=>{
    const key = pod ? `${code}${pod}` : code;
    const name = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$iconmap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICON_MAP"][key];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(`wi wi-${name}`, "flex items-center justify-center", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/WeatherIcon.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
_c = WeatherIcon;
var _c;
__turbopack_context__.k.register(_c, "WeatherIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Weather/WeatherOverview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$weatherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/weatherStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WeatherIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/WeatherIcon.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const WeatherOverview = ()=>{
    _s();
    const today = new Date();
    const formattedDate = today.toLocaleString('default', {
        month: 'long',
        day: 'numeric'
    });
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$weatherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherStore"])();
    if (!data || !data.current) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-black text-center px-8 py-10 mb-10 w-[400px] mx-auto text-xl2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-700",
                children: "No data found"
            }, void 0, false, {
                fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-md text-black border-2 border-gray-200 text-center px-8 py-10 mb-10 w-[400]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-md font-bold flex flex-col text-gray-900 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "uppercase",
                        children: [
                            "Today - ",
                            data.provider
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-normal text-gray-700 text-sm",
                        children: formattedDate
                    }, void 0, false, {
                        fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-700 capitalize font-semibold text-md mb-2",
                children: [
                    "data.current.description: ",
                    data.current.description,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$WeatherIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeatherIcon"], {
                        code: data.current.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    data.current.description || 'No description available'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl font-bold text-gray-900 mb-6",
                children: [
                    data.current.temperature,
                    "º"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Humidity:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    " ",
                    data.current.humidity,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Wind Speed:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    " ",
                    data.current.windSpeed,
                    " km/h"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Weather/WeatherOverview.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
};
_s(WeatherOverview, "PMdAFs57ir9ItLayVoW61DhlxGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$weatherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherStore"]
    ];
});
_c = WeatherOverview;
const __TURBOPACK__default__export__ = WeatherOverview;
var _c;
__turbopack_context__.k.register(_c, "WeatherOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/SearchForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fontawesome$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fontawesome.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$weatherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/weatherStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3001/api/weather");
const SearchForm = ({ buttonText })=>{
    _s();
    const { setCity, setProvider, setData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$weatherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherStore"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [provider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('openweathermap');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!input) return;
        try {
            setIsLoading(true);
            setCity(input);
            setProvider(provider);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${API_BASE_URL}?location=${input}&source=${provider}`);
            setData(res.data);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "max-w-lg mx-auto flex gap-3",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white",
                children: buttonText
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SearchForm.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                            icon: [
                                'fa',
                                'search'
                            ],
                            className: "w-4 h-4 text-gray-500 dark:text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SearchForm.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SearchForm.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        placeholder: "Search Location",
                        className: "block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[#5626f3] dark:bg-gray-700",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SearchForm.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: !input || isLoading,
                        className: `text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer ${isLoading ? 'bg-[#999]' : 'bg-[#5626f3]'}`,
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                            icon: [
                                'fa',
                                'spinner'
                            ],
                            spin: true,
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/SearchForm.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this) : buttonText
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SearchForm.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SearchForm.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: provider,
                onChange: (e)=>setSelectedProvider(e.target.value),
                className: "block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "openweathermap",
                        children: "OpenWeatherMap"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SearchForm.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "weatherapi",
                        children: "WeatherAPI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SearchForm.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "tomorrow",
                        children: "Tomorrow.io"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SearchForm.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SearchForm.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SearchForm.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
};
_s(SearchForm, "l3ioghwBKLEwWywrbHxgmYUnMoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$weatherStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWeatherStore"]
    ];
});
_c = SearchForm;
const __TURBOPACK__default__export__ = SearchForm;
var _c;
__turbopack_context__.k.register(_c, "SearchForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_02e5cc83._.js.map