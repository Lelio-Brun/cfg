!(function () {
    return function e(t, n, r) {
        function i(o, s) {
            if (!n[o]) {
                if (!t[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(o, !0);
                    if (a) return a(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                }
                var d = (n[o] = { exports: {} });
                t[o][0].call(
                    d.exports,
                    function (e) {
                        return i(t[o][1][e] || e);
                    },
                    d,
                    d.exports,
                    e,
                    t,
                    n,
                    r
                );
            }
            return n[o].exports;
        }
        for (var a = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
        return i;
    };
})()(
    {
        1: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })();
                var i = (function (e) {
                    function t() {
                        return (
                            (function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                            (function (e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(t, Date),
                        r(t, [
                            {
                                key: "numberDaysOfYearXXX",
                                value: function (e) {
                                    return !(e > 365) && (e < 10 ? "00" + e : e < 100 ? "0" + e : e);
                                },
                            },
                            {
                                key: "convertDateToNumberDay",
                                value: function (e) {
                                    var t = new Date(e),
                                        n = new Date(t.getFullYear(), 0, 0),
                                        r = t - n,
                                        i = Math.floor(r / 864e5);
                                    return t.getFullYear() + "-" + this.numberDaysOfYearXXX(i);
                                },
                            },
                            {
                                key: "convertNumberDayToDate",
                                value: function (e) {
                                    var t = /(\d{4})(-)(\d{3})/.exec(e),
                                        n = new Date(t[1]).getTime() + 1e3 * t[3] * 60 * 60 * 24,
                                        r = new Date(n),
                                        i = r.getMonth() + 1,
                                        a = r.getDate();
                                    return (a < 10 ? "0" + a : a) + "." + (i < 10 ? "0" + i : i) + "." + r.getFullYear();
                                },
                            },
                            {
                                key: "formatDate",
                                value: function (e) {
                                    var t = new Date(e),
                                        n = t.getFullYear(),
                                        r = t.getMonth() + 1,
                                        i = t.getDate();
                                    return n + "-" + (r < 10 ? "0" + r : r) + " - " + (i < 10 ? "0" + i : i);
                                },
                            },
                            {
                                key: "getCurrentDate",
                                value: function () {
                                    var e = new Date();
                                    return this.formatDate(e);
                                },
                            },
                            {
                                key: "getDateLastThreeMonth",
                                value: function () {
                                    var e = new Date(),
                                        t = new Date().getFullYear(),
                                        n = new Date(e.getFullYear(), 0, 0),
                                        r = e - n,
                                        i = Math.floor(r / 864e5);
                                    return (i -= 90) < 0 && ((t -= 1), (i = 365 - i)), t + "-" + this.numberDaysOfYearXXX(i);
                                },
                            },
                            {
                                key: "getCurrentSummerDate",
                                value: function () {
                                    var e = new Date().getFullYear();
                                    return [this.convertDateToNumberDay(e + "-06-01"), this.convertDateToNumberDay(e + "-08-31")];
                                },
                            },
                            {
                                key: "getCurrentSpringDate",
                                value: function () {
                                    var e = new Date().getFullYear();
                                    return [this.convertDateToNumberDay(e + "-03-01"), this.convertDateToNumberDay(e + "-05-31")];
                                },
                            },
                            {
                                key: "getLastSummerDate",
                                value: function () {
                                    var e = new Date().getFullYear() - 1;
                                    return [this.convertDateToNumberDay(e + "-06-01"), this.convertDateToNumberDay(e + "-08-31")];
                                },
                            },
                            {
                                key: "getFirstDateCurYear",
                                value: function () {
                                    return new Date().getFullYear() + " - 001";
                                },
                            },
                            {
                                key: "timestampToDateTime",
                                value: function (e) {
                                    return new Date(1e3 * e).toLocaleString().replace(/,/, "").replace(/:\w+$/, "");
                                },
                            },
                            {
                                key: "timestampToTime",
                                value: function (e) {
                                    var t = new Date(1e3 * e),
                                        n = t.getHours(),
                                        r = t.getMinutes();
                                    return (n < 10 ? "0" + n : n) + " : " + (r < 10 ? "0" + r : r) + " ";
                                },
                            },
                            {
                                key: "getNumberDayInWeekByUnixTime",
                                value: function (e) {
                                    return new Date(1e3 * e).getDay();
                                },
                            },
                            {
                                key: "getDayNameOfWeekByDayNumber",
                                value: function (e) {
                                    return { 0: "Sun", 1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sat" }[e];
                                },
                            },
                            {
                                key: "getMonthNameByMonthNumber",
                                value: function (e) {
                                    if ("number" != typeof e || (e <= 0 && e >= 12)) return null;
                                    return { 0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug", 8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec" }[e];
                                },
                            },
                            {
                                key: "compareDatesWithToday",
                                value: function (e) {
                                    return e.toLocaleDateString() === new Date().toLocaleDateString();
                                },
                            },
                            {
                                key: "convertStringDateMMDDYYYHHToDate",
                                value: function (e) {
                                    var t = /(\d{2})(\.{1})(\d{2})(\.{1})(\d{4})/.exec(e);
                                    return 6 === t.length ? new Date(t[5] + "-" + t[3] + "-" + t[1]) : new Date();
                                },
                            },
                            {
                                key: "getTimeDateHHMMMonthDay",
                                value: function () {
                                    var e = new Date();
                                    return (
                                        (e.getHours() < 10 ? "0" + e.getHours() : e.getHours()) + ":" + (e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()) + " " + this.getMonthNameByMonthNumber(e.getMonth()) + " " + e.getDate()
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })();
                n.default = i;
            },
            {},
        ],
        2: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                n.naturalPhenomenon = {
                    en: {
                        name: "English",
                        main: "",
                        description: {
                            200: "thunderstorm with light rain",
                            201: "thunderstorm with rain",
                            202: "thunderstorm with heavy rain",
                            210: "light thunderstorm",
                            211: "thunderstorm",
                            212: "heavy thunderstorm",
                            221: "ragged thunderstorm",
                            230: "thunderstorm with light drizzle",
                            231: "thunderstorm with drizzle",
                            232: "thunderstorm with heavy drizzle",
                            300: "light intensity drizzle",
                            301: "drizzle",
                            302: "heavy intensity drizzle",
                            310: "light intensity drizzle rain",
                            311: "drizzle rain",
                            312: "heavy intensity drizzle rain",
                            313: "shower rain and drizzle",
                            314: "heavy shower rain and drizzle",
                            321: "shower drizzle",
                            500: "light rain",
                            501: "moderate rain",
                            502: "heavy intensity rain",
                            503: "very heavy rain",
                            504: "extreme rain",
                            511: "freezing rain",
                            520: "light intensity shower rain",
                            521: "shower rain",
                            522: "heavy intensity shower rain",
                            531: "ragged shower rain",
                            600: "light snow",
                            601: "snow",
                            602: "heavy snow",
                            611: "sleet",
                            612: "shower sleet",
                            615: "light rain and snow",
                            616: "rain and snow",
                            620: "light shower snow",
                            621: "shower snow",
                            622: "heavy shower snow",
                            701: "mist",
                            711: "smoke",
                            721: "haze",
                            731: "sand,dust whirls",
                            741: "fog",
                            751: "sand",
                            761: "dust",
                            762: "volcanic ash",
                            771: "squalls",
                            781: "tornado",
                            800: "clear sky",
                            801: "few clouds",
                            802: "scattered clouds",
                            803: "broken clouds",
                            804: "overcast clouds",
                            900: "tornado",
                            901: "tropical storm",
                            902: "hurricane",
                            903: "cold",
                            904: "hot",
                            905: "windy",
                            906: "hail",
                            950: "setting",
                            951: "calm",
                            952: "light breeze",
                            953: "gentle breeze",
                            954: "moderate breeze",
                            955: "fresh breeze",
                            956: "strong breeze",
                            957: "high wind, near gale",
                            958: "gale",
                            959: "severe gale",
                            960: "storm",
                            961: "violent storm",
                            962: "hurricane",
                        },
                    },
                    ru: {
                        name: "Russian",
                        main: "",
                        description: {
                            200: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð¼ÐµÐ»ÐºÐ¸Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
                            201: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
                            202: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð¿Ñ€Ð¾Ð»Ð¸Ð²Ð½Ñ‹Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
                            210: "Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð° Ð³Ñ€Ð¾Ð·Ð°",
                            211: "Ð³Ñ€Ð¾Ð·Ð°",
                            212: "Ð±ÑƒÑ€Ñ",
                            221: "Ð¶ÐµÑÑ‚Ð¾ÐºÐ°Ñ Ð³Ñ€Ð¾Ð·Ð°",
                            230: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð¼ÐµÐ»ÐºÐ¸Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
                            231: "Ð³Ñ€Ð¾Ð·Ð° Ñ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
                            232: "Ð³Ñ€Ð¾Ð·Ð° Ñ ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¼ Ð´Ð¾Ð¶Ð´Ñ‘Ð¼",
                            300: "ÑÑ‹Ñ€Ð¾",
                            301: "ÑÑ‹Ñ€Ð¾",
                            302: "Ð¾Ñ‡ÐµÐ½ÑŒ ÑÑ‹Ñ€Ð¾",
                            310: "Ð»Ñ‘Ð³ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            311: "Ð»Ñ‘Ð³ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            312: "Ð¸Ð½Ñ‚ÐµÐ½ÑÐ¸Ð²Ð½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            321: "Ð¼ÐµÐ»ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            500: "Ð»ÐµÐ³ÐºÐ¸Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            501: "Ð´Ð¾Ð¶Ð´ÑŒ",
                            502: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            503: "Ð¿Ñ€Ð¾Ð»Ð¸Ð²Ð½Ð¾Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            504: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            511: "Ñ…Ð¾Ð»Ð¾Ð´Ð½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            520: "Ð´Ð¾Ð¶Ð´ÑŒ",
                            521: "Ð´Ð¾Ð¶Ð´ÑŒ",
                            522: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð´Ð¾Ð¶Ð´ÑŒ",
                            600: "Ð½ÐµÐ±Ð¾Ð»ÑŒÑˆÐ¾Ð¹ ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
                            601: "ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
                            602: "ÑÐ¸Ð»ÑŒÐ½Ñ‹Ð¹ ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
                            611: "ÑÐ»ÑÐºÐ¾Ñ‚ÑŒ",
                            621: "ÑÐ½ÐµÐ³Ð¾Ð¿Ð°Ð´",
                            701: "Ñ‚ÑƒÐ¼Ð°Ð½",
                            711: "Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ð¾",
                            721: "Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ð¾",
                            731: "Ð¿ÐµÑÑ‡Ð°Ð½Ð°Ñ Ð±ÑƒÑ€Ñ",
                            741: "Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ð¾",
                            800: "ÑÑÐ½Ð¾",
                            801: "Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾",
                            802: "ÑÐ»ÐµÐ³ÐºÐ° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾",
                            803: "Ð¿Ð°ÑÐ¼ÑƒÑ€Ð½Ð¾",
                            804: "Ð¿Ð°ÑÐ¼ÑƒÑ€Ð½Ð¾",
                            900: "Ñ‚Ð¾Ñ€Ð½Ð°Ð´Ð¾",
                            901: "Ñ‚Ñ€Ð¾Ð¿Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ð±ÑƒÑ€Ñ",
                            902: "ÑƒÑ€Ð°Ð³Ð°Ð½",
                            903: "Ñ…Ð¾Ð»Ð¾Ð´Ð½Ð¾",
                            904: "Ð¶Ð°Ñ€Ð°",
                            905: "Ð²ÐµÑ‚Ñ€ÐµÐ½Ð½Ð¾",
                            906: "Ð³Ñ€Ð°Ð´",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    it: {
                        name: "Italian",
                        main: "",
                        description: {
                            200: "temporale con pioggerella",
                            201: "temporale con pioggia",
                            202: "temporale con pioggia forte",
                            210: "temporale",
                            211: "temporale",
                            212: "temporale forte",
                            221: "temporale",
                            230: "temporale con pioggerella",
                            231: "temporale con pioggerella",
                            232: "temporale con pioggerella",
                            300: "pioggerella",
                            301: "pioggerella",
                            302: "pioggerella",
                            310: "pioggerella",
                            311: "pioggerella",
                            312: "forte pioggerella",
                            321: "acquazzone",
                            500: "pioggia leggera",
                            501: "pioggia moderata",
                            502: "forte pioggia",
                            503: "pioggia fortissima",
                            504: "pioggia estrema",
                            511: "pioggia gelata",
                            520: "pioggerella",
                            521: "acquazzone",
                            522: "acquazzone",
                            600: "neve",
                            601: "neve",
                            602: "forte nevicata",
                            611: "nevischio",
                            621: "forte nevicata",
                            701: "foschia",
                            711: "fumo",
                            721: "foschia",
                            731: "mulinelli di sabbia/polvere",
                            741: "nebbia",
                            800: "cielo sereno",
                            801: "poche nuvole",
                            802: "nubi sparse",
                            803: "nubi sparse",
                            804: "cielo coperto",
                            900: "tornado",
                            901: "tempesta tropicale",
                            902: "uragano",
                            903: "freddo",
                            904: "caldo",
                            905: "ventoso",
                            906: "grandine",
                            950: "Setting",
                            951: "Calmo",
                            952: "Bava di vento",
                            953: "Brezza leggera",
                            954: "Brezza tesa",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Tempesta",
                            961: "Tempesta violenta",
                            962: "Uragano",
                        },
                    },
                    sp: {
                        name: "Spanish",
                        main: "",
                        description: {
                            200: "tormenta con lluvia ligera",
                            201: "tormenta con lluvia",
                            202: "tormenta con lluvia intensa",
                            210: "ligera tormenta",
                            211: "tormenta",
                            212: "fuerte tormenta",
                            221: "tormenta irregular",
                            230: "tormenta con llovizna ligera",
                            231: "tormenta con llovizna",
                            232: "tormenta con llovizna intensa",
                            300: "llovizna ligera",
                            301: "llovizna",
                            302: "llovizna de gran intensidad",
                            310: "lluvia y llovizna ligera",
                            311: "lluvia y llovizna",
                            312: "lluvia y llovizna de gran intensidad",
                            321: "chubasco",
                            500: "lluvia ligera",
                            501: "lluvia moderada",
                            502: "lluvia de gran intensidad",
                            503: "lluvia muy fuerte",
                            504: "lluvia muy fuerte",
                            511: "lluvia helada",
                            520: "chubasco de ligera intensidad",
                            521: "chubasco",
                            522: "chubasco de gran intensidad",
                            600: "nevada ligera",
                            601: "nieve",
                            602: "nevada intensa",
                            611: "aguanieve",
                            621: "chubasco de nieve",
                            701: "niebla",
                            711: "humo",
                            721: "niebla",
                            731: "torbellinos de arena/polvo",
                            741: "bruma",
                            800: "cielo claro",
                            801: "algo de nubes",
                            802: "nubes dispersas",
                            803: "nubes rotas",
                            804: "nubes",
                            900: "tornado",
                            901: "tormenta tropical",
                            902: "huracÃ¡n",
                            903: "frÃ­o",
                            904: "calor",
                            905: "ventoso",
                            906: "granizo",
                            950: "Setting",
                            951: "calma",
                            952: "Viento flojo",
                            953: "Viento suave",
                            954: "Viento moderado",
                            955: "Brisa",
                            956: "Viento fuerte",
                            957: "Viento fuerte, prÃ³ximo a vendaval",
                            958: "Vendaval",
                            959: "Vendaval fuerte",
                            960: "Tempestad",
                            961: "Tempestad violenta",
                            962: "HuracÃ¡n",
                        },
                    },
                    ua: {
                        name: "Ukrainian",
                        main: "",
                        description: {
                            200: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð»ÐµÐ³ÐºÐ¸Ð¼ Ð´Ð¾Ñ‰ÐµÐ¼",
                            201: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð´Ð¾Ñ‰ÐµÐ¼",
                            202: "Ð³Ñ€Ð¾Ð·Ð° Ð·Ñ– Ð·Ð»Ð¸Ð²Ð¾ÑŽ",
                            210: "Ð»ÐµÐ³ÐºÐ° Ð³Ñ€Ð¾Ð·Ð°",
                            211: "Ð³Ñ€Ð¾Ð·Ð°",
                            212: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð³Ñ€Ð¾Ð·Ð°",
                            221: "ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ñ‡Ð°ÑÐ½Ñ– Ð³Ñ€Ð¾Ð·Ð¸",
                            230: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¼ Ð´Ð¾Ñ‰ÐµÐ¼",
                            231: "Ð³Ñ€Ð¾Ð·Ð° Ð· Ð´Ð¾Ñ‰ÐµÐ¼",
                            232: "Ð³Ñ€Ð¾Ð·Ð° Ð· ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¼ Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¼ Ð´Ð¾Ñ‰ÐµÐ¼",
                            300: "Ð»ÐµÐ³ÐºÐ° Ð¼Ñ€ÑÐºÐ°",
                            301: "Ð¼Ñ€ÑÐºÐ°",
                            302: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð¼Ñ€ÑÐºÐ°",
                            310: "Ð»ÐµÐ³ÐºÐ¸Ð¹ Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            311: "Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            312: "ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¹ Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            321: "Ð´Ñ€Ñ–Ð±Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            500: "Ð»ÐµÐ³ÐºÐ° Ð·Ð»Ð¸Ð²Ð°",
                            501: "Ð¿Ð¾Ð¼Ñ–Ñ€Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            502: "ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            503: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð·Ð»Ð¸Ð²Ð°",
                            504: "Ð·Ð»Ð¸Ð²Ð°",
                            511: "ÐºÑ€Ð¸Ð¶Ð°Ð½Ð¸Ð¹ Ð´Ð¾Ñ‰",
                            520: "Ð´Ð¾Ñ‰",
                            521: "Ð´Ð¾Ñ‰",
                            522: "ÑÐ¸Ð»ÑŒÐ½Ð° Ð·Ð»Ð¸Ð²Ð°",
                            600: "Ð»ÐµÐ³ÐºÐ¸Ð¹ ÑÐ½Ñ–Ð³Ð¾Ð¿Ð°Ð´",
                            601: "ÑÐ½Ñ–Ð³ ",
                            602: "ÑÐ¸Ð»ÑŒÐ½Ð¸Ð¹ ÑÐ½Ñ–Ð³Ð¾Ð¿Ð°Ð´",
                            611: "Ð¼Ð¾ÐºÑ€Ð¸Ð¹ ÑÐ½Ñ–Ð³",
                            621: "ÑÐ½Ñ–Ð³Ð¾Ð¿Ð°Ð´",
                            701: "Ñ‚ÑƒÐ¼Ð°Ð½",
                            711: "Ñ‚ÑƒÐ¼Ð°Ð½",
                            721: "ÑÐµÑ€Ð¿Ð°Ð½Ð¾Ðº",
                            731: "Ð¿Ñ–Ñ‰Ð°Ð½Ð° Ð·Ð°Ð¼ÐµÑ‚Ñ–Ð»ÑŒ",
                            741: "Ñ‚ÑƒÐ¼Ð°Ð½",
                            800: "Ñ‡Ð¸ÑÑ‚Ðµ Ð½ÐµÐ±Ð¾",
                            801: "Ñ‚Ñ€Ð¾Ñ…Ð¸ Ñ…Ð¼Ð°Ñ€Ð½Ð¾",
                            802: "Ñ€Ð¾Ð·Ñ–Ñ€Ð²Ð°Ð½Ñ– Ñ…Ð¼Ð°Ñ€Ð¸",
                            803: "Ñ…Ð¼Ð°Ñ€Ð½Ð¾",
                            804: "Ñ…Ð¼Ð°Ñ€Ð½Ð¾",
                            900: "Ñ‚Ð¾Ñ€Ð½Ð°Ð´Ð¾",
                            901: "Ñ‚Ñ€Ð¾Ð¿Ñ–Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
                            902: "Ð±ÑƒÑ€ÐµÐ²Ñ–Ð¹",
                            903: "Ñ…Ð¾Ð»Ð¾Ð´Ð½Ð¾",
                            904: "ÑÐ¿ÐµÐºÐ°",
                            905: "Ð²Ñ–Ñ‚Ñ€ÑÐ½Ð¾",
                            906: "Ð³Ñ€Ð°Ð´",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    de: {
                        name: "German",
                        main: "",
                        description: {
                            200: "Gewitter mit leichtem Regen",
                            201: "Gewitter mit Regen",
                            202: "Gewitter mit starkem Regen",
                            210: "leichte Gewitter",
                            211: "Gewitter",
                            212: "schwere Gewitter",
                            221: "einige Gewitter",
                            230: "Gewitter mit leichtem Nieselregen",
                            231: "Gewitter mit Nieselregen",
                            232: "Gewitter mit starkem Nieselregen",
                            300: "leichtes Nieseln",
                            301: "Nieseln",
                            302: "starkes Nieseln",
                            310: "leichter Nieselregen",
                            311: "Nieselregen",
                            312: "starker Nieselregen",
                            321: "Nieselschauer",
                            500: "leichter Regen",
                            501: "mÃ¤ÃŸiger Regen",
                            502: "sehr starker Regen",
                            503: "sehr starker Regen",
                            504: "Starkregen",
                            511: "Eisregen",
                            520: "leichte Regenschauer",
                            521: "Regenschauer",
                            522: "heftige Regenschauer",
                            600: "mÃ¤ÃŸiger Schnee",
                            601: "Schnee",
                            602: "heftiger Schneefall",
                            611: "Graupel",
                            621: "Schneeschauer",
                            701: "trÃ¼b",
                            711: "Rauch",
                            721: "Dunst",
                            731: "Sand / Staubsturm",
                            741: "Nebel",
                            800: "klarer Himmel",
                            801: "ein paar Wolken",
                            802: "Ã¼berwiegend bewÃ¶lkt",
                            803: "Ã¼berwiegend bewÃ¶lkt",
                            804: "wolkenbedeckt",
                            900: "Tornado",
                            901: "Tropensturm",
                            902: "Hurrikan",
                            903: "kalt",
                            904: "heiÃŸ",
                            905: "windig",
                            906: "Hagel",
                            950: "Setting",
                            951: "Windstille",
                            952: "Leichte Brise",
                            953: "Milde Brise",
                            954: "MÃ¤ÃŸige Brise",
                            955: "Frische Brise",
                            956: "Starke Brise",
                            957: "Hochwind, annÃ¤hender Sturm",
                            958: "Sturm",
                            959: "Schwerer Sturm",
                            960: "Gewitter",
                            961: "Heftiges Gewitter",
                            962: "Orkan",
                        },
                    },
                    pt: {
                        name: "Portuguese",
                        main: "",
                        description: {
                            200: "trovoada com chuva leve",
                            201: "trovoada com chuva",
                            202: "trovoada com chuva forte",
                            210: "trovoada leve",
                            211: "trovoada",
                            212: "trovoada pesada",
                            221: "trovoada irregular",
                            230: "trovoada com garoa fraca",
                            231: "trovoada com garoa",
                            232: "trovoada com garoa pesada",
                            300: "garoa fraca",
                            301: "garoa",
                            302: "garoa intensa",
                            310: "chuva leve",
                            311: "chuva fraca",
                            312: "chuva forte",
                            321: "chuva de garoa",
                            500: "chuva fraca",
                            501: "Chuva moderada",
                            502: "chuva de intensidade pesado",
                            503: "chuva muito forte",
                            504: "Chuva Forte",
                            511: "chuva com congelamento",
                            520: "chuva moderada",
                            521: "chuva",
                            522: "chuva de intensidade pesada",
                            600: "Neve branda",
                            601: "neve",
                            602: "Neve pesada",
                            611: "chuva com neve",
                            621: "banho de neve",
                            701: "NÃ©voa",
                            711: "fumaÃ§a",
                            721: "neblina",
                            731: "turbilhÃµes de areia/poeira",
                            741: "Neblina",
                            800: "cÃ©u claro",
                            801: "Algumas nuvens",
                            802: "nuvens dispersas",
                            803: "nuvens quebrados",
                            804: "tempo nublado",
                            900: "tornado",
                            901: "tempestade tropical",
                            902: "furacÃ£o",
                            903: "frio",
                            904: "quente",
                            905: "com vento",
                            906: "granizo",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    ro: {
                        name: "Romanian",
                        main: "",
                        description: {
                            200: "furtunÄƒ cu ploaie uÈ™oarÄƒ",
                            201: "furtunÄƒ",
                            202: "furtunÄƒ cu ploaie puternicÄƒ",
                            210: "furtunÄƒ uÈ™oarÄƒ",
                            211: "furtunÄƒ",
                            212: "furtunÄƒ puternicÄƒ",
                            221: "furtunÄƒ aprigÄƒ",
                            230: "furtunÄƒ cu burniÈ›Äƒ",
                            231: "furtunÄƒ cu burniÈ›Äƒ",
                            232: "furtunÄƒ cu burniÈ›Äƒ",
                            300: "burniÈ›Äƒ de intensitate joasÄƒ",
                            301: "burniÈ›Äƒ",
                            302: "burniÈ›Äƒ de intensitate mare",
                            310: "burniÈ›Äƒ de intensitate joasÄƒ",
                            311: "burniÈ›Äƒ",
                            312: "burniÈ›Äƒ de intensitate mare",
                            321: "burniÈ›Äƒ",
                            500: "ploaie uÈ™oarÄƒ",
                            501: "ploaie",
                            502: "ploaie puternicÄƒ",
                            503: "ploaie torenÈ›ialÄƒ ",
                            504: "ploaie extremÄƒ",
                            511: "ploaie Ã®ngheÈ›atÄƒ",
                            520: "ploaie de scurtÄƒ duratÄƒ",
                            521: "ploaie de scurtÄƒ duratÄƒ",
                            522: "ploaie de scurtÄƒ duratÄƒ",
                            600: "ninsoare uÈ™oarÄƒ",
                            601: "ninsoare",
                            602: "ninsoare puternicÄƒ",
                            611: "lapoviÈ›Äƒ",
                            621: "ninsoare de scurtÄƒ duratÄƒ",
                            701: "ceaÈ›Äƒ",
                            711: "ceaÈ›Äƒ",
                            721: "ceaÈ›Äƒ",
                            731: "vÃ¢rtejuri de nisip",
                            741: "ceaÈ›Äƒ",
                            800: "cer senin",
                            801: "cÃ¢È›iva nori",
                            802: "nori Ã®mprÄƒÈ™tiaÈ›i",
                            803: "cer fragmentat",
                            804: "cer acoperit de nori",
                            900: "tornadÄƒ",
                            901: "furtuna tropicalÄƒ",
                            902: "uragan",
                            903: "rece",
                            904: "fierbinte",
                            905: "vant puternic",
                            906: "grindinÄƒ",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    pl: {
                        name: "Polish",
                        main: "",
                        description: {
                            200: "Burza z lekkimi opadami deszczu",
                            201: "Burza z opadami deszczu",
                            202: "Burza z intensywnymi opadami deszczu",
                            210: "Lekka burza",
                            211: "Burza",
                            212: "Silna burza",
                            221: "Burza",
                            230: "Burza z lekkÄ… mÅ¼awkÄ…",
                            231: "Burza z mÅ¼awka",
                            232: "Burza z intensywnÄ… mÅ¼awkÄ…",
                            300: "Lekka mÅ¼awka",
                            301: "MÅ¼awka",
                            302: "Intensywna mÅ¼awka",
                            310: "Lekkie opady drobnego deszczu",
                            311: "Deszcz / mÅ¼awka",
                            312: "Intensywny deszcz / mÅ¼awka",
                            321: "Silna mÅ¼awka",
                            500: "Lekki deszcz",
                            501: "Umiarkowany deszcz",
                            502: "Intensywny deszcz",
                            503: "bardzo silny deszcz",
                            504: "Ulewa",
                            511: "MarznÄ…cy deszcz",
                            520: "KrÃ³tka ulewa",
                            521: "Deszcz",
                            522: "Intensywny, lekki deszcz",
                            600: "Lekkie opady Å›niegu",
                            601: "Åšnieg",
                            602: "Mocne opady Å›niegu",
                            611: "Deszcz ze Å›niegem",
                            621: "ÅšnieÅ¼yca",
                            701: "MgieÅ‚ka",
                            711: "Smog",
                            721: "Zamglenia",
                            731: "ZamieÄ‡ piaskowa",
                            741: "MgÅ‚a",
                            800: "Bezchmurnie",
                            801: "Lekkie zachmurzenie",
                            802: "Rozproszone chmury",
                            803: "Pochmurno z przejaÅ›nieniami",
                            804: "Pochmurno",
                            900: "tornado",
                            901: "burza tropikalna",
                            902: "Huragan",
                            903: "ChÅ‚odno",
                            904: "GorÄ…co",
                            905: "wietrznie",
                            906: "Grad",
                            950: "Setting",
                            951: "Spokojnie",
                            952: "Lekka bryza",
                            953: "Delikatna bryza",
                            954: "Umiarkowana bryza",
                            955: "ÅšwieÅ¼a bryza",
                            956: "Silna bryza",
                            957: "Prawie wichura",
                            958: "Wichura",
                            959: "Silna wichura",
                            960: "Sztorm",
                            961: "GwaÅ‚towny sztorm",
                            962: "Huragan",
                        },
                    },
                    fi: {
                        name: "Finnish",
                        main: "",
                        description: {
                            200: "ukkosmyrsky ja kevyt sade",
                            201: "ukkosmyrsky ja sade",
                            202: "ukkosmyrsky ja kova sade",
                            210: "pieni ukkosmyrsky",
                            211: "ukkosmyrsky",
                            212: "kova ukkosmyrsky",
                            221: "lievÃ¤ ukkosmyrsky",
                            230: "ukkosmyrsky ja kevyt tihkusade",
                            231: "ukkosmyrsky ja tihkusade",
                            232: "ukkosmyrsky ja kova tihkusade",
                            300: "lievÃ¤ tihuttainen",
                            301: "tihuttaa",
                            302: "kova tihuttainen",
                            310: "lievÃ¤ tihkusade",
                            311: "tihkusade",
                            312: "kova tihkusade",
                            321: "tihkusade",
                            500: "pieni sade",
                            501: "kohtalainen sade",
                            502: "kova sade",
                            503: "erittÃ¤in runsasta sadetta",
                            504: "kova sade",
                            511: "jÃ¤Ã¤tÃ¤vÃ¤ sade",
                            520: "lievÃ¤ tihkusade",
                            521: "tihkusade",
                            522: "kova sade",
                            600: "pieni lumisade",
                            601: "lumi",
                            602: "paljon lunta",
                            611: "rÃ¤ntÃ¤",
                            621: "lumikuuro",
                            701: "sumu",
                            711: "savu",
                            721: "sumu",
                            731: "hiekka/pÃ¶ly pyÃ¶rre",
                            741: "sumu",
                            800: "taivas on selkeÃ¤",
                            801: "vÃ¤hÃ¤n pilviÃ¤",
                            802: "ajoittaisia pilviÃ¤",
                            803: "hajanaisia pilviÃ¤",
                            804: "pilvinen",
                            900: "tornado",
                            901: "trooppinen myrsky",
                            902: "hirmumyrsky",
                            903: "kylmÃ¤",
                            904: "kuuma",
                            905: "tuulinen",
                            906: "rakeita",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    nl: {
                        name: "Dutch",
                        main: "",
                        description: {
                            200: "onweersbui met lichte regen",
                            201: "onweersbui met regen",
                            202: "onweersbui met zware regenval",
                            210: "lichte onweersbui",
                            211: "onweersbui",
                            212: "zware onweersbui",
                            221: "onregelmatig onweersbui",
                            230: "onweersbui met lichte motregen",
                            231: "onweersbui met motregen",
                            232: "onweersbui met zware motregen",
                            300: "lichte motregen",
                            301: "motregen",
                            302: "zware motregen",
                            310: "lichte motregen/regen",
                            311: "motregen",
                            312: "zware motregen/regen",
                            321: "zware motregen",
                            500: "lichte regen",
                            501: "matige regen",
                            502: "zware regenval",
                            503: "zeer zware regenval",
                            504: "extreme regen",
                            511: "Koude buien",
                            520: "lichte stortregen",
                            521: "stortregen",
                            522: "zware stortregen",
                            600: "lichte sneeuw",
                            601: "sneeuw",
                            602: "hevige sneeuw",
                            611: "ijzel",
                            621: "natte sneeuw",
                            701: "mist",
                            711: "mist",
                            721: "nevel",
                            731: "zand/stof werveling",
                            741: "mist",
                            800: "onbewolkt",
                            801: "licht bewolkt",
                            802: "half bewolkt",
                            803: "zwaar bewolkt",
                            804: "geheel bewolkt",
                            900: "tornado",
                            901: "tropische storm",
                            902: "orkaan",
                            903: "koud",
                            904: "heet",
                            905: "stormachtig",
                            906: "hagel",
                            950: "Windstil",
                            951: "Kalm",
                            952: "Lichte bries",
                            953: "Zachte bries",
                            954: "Matige bries",
                            955: "Vrij krachtige wind",
                            956: "Krachtige wind",
                            957: "Harde wind",
                            958: "Stormachtig",
                            959: "Storm",
                            960: "Zware storm",
                            961: "Zeer zware storm",
                            962: "Orkaan",
                        },
                    },
                    fr: {
                        name: "French",
                        main: "",
                        description: {
                            200: "orage et pluie fine",
                            201: "orage et pluie",
                            202: "orage et fortes pluies",
                            210: "orages lÃ©gers",
                            211: "orages",
                            212: "gros orages",
                            221: "orages Ã©parses",
                            230: "Orage avec lÃ©gÃ¨re bruine",
                            231: "orages Ã©parses",
                            232: "gros orage",
                            300: "Bruine lÃ©gÃ¨re",
                            301: "Bruine",
                            302: "Fortes bruines",
                            310: "Pluie fine Ã©parse",
                            311: "pluie fine",
                            312: "Crachin intense",
                            321: "Averses de bruine",
                            500: "lÃ©gÃ¨res pluies",
                            501: "pluies modÃ©rÃ©es",
                            502: "Fortes pluies",
                            503: "trÃ¨s fortes prÃ©cipitations",
                            504: "grosses pluies",
                            511: "pluie verglaÃ§ante",
                            520: "petites averses",
                            521: "averses de pluie",
                            522: "averses intenses",
                            600: "lÃ©gÃ¨res neiges",
                            601: "neige",
                            602: "fortes chutes de neige",
                            611: "neige fondue",
                            621: "averses de neige",
                            701: "brume",
                            711: "Brouillard",
                            721: "brume",
                            731: "tempÃªtes de sable",
                            741: "brouillard",
                            800: "ensoleillÃ©",
                            801: "peu nuageux",
                            802: "partiellement ensoleillÃ©",
                            803: "nuageux",
                            804: "Couvert",
                            900: "tornade",
                            901: "tempÃªte tropicale",
                            902: "ouragan",
                            903: "froid",
                            904: "chaud",
                            905: "venteux",
                            906: "grÃªle",
                            950: "Setting",
                            951: "Calme",
                            952: "Brise lÃ©gÃ¨re",
                            953: "Brise douce",
                            954: "Brise modÃ©rÃ©e",
                            955: "Brise fraiche",
                            956: "Brise forte",
                            957: "Vent fort, presque violent",
                            958: "Vent violent",
                            959: "Vent trÃ¨s violent",
                            960: "TempÃªte",
                            961: "empÃªte violente",
                            962: "Ouragan",
                        },
                    },
                    bg: {
                        name: "Bulgarian",
                        main: "",
                        description: {
                            200: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ ÑÑŠÑ ÑÐ»Ð°Ð± Ð´ÑŠÐ¶Ð´",
                            201: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ Ñ Ð²Ð°Ð»ÐµÐ¶",
                            202: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ Ñ Ð¿Ð¾Ñ€Ð¾Ð¹",
                            210: "Ð¡Ð»Ð°Ð±Ð° Ð³Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
                            211: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
                            212: "Ð¡Ð¸Ð»Ð½Ð° Ð³Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ",
                            221: "Ð Ð°Ð·ÐºÑŠÑÐ°Ð½Ð° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
                            230: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ ÑÑŠÑ ÑÐ»Ð°Ð± Ñ€ÑŠÐ¼ÐµÐ¶",
                            231: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ Ñ Ñ€ÑŠÐ¼ÐµÐ¶",
                            232: "Ð“Ñ€ÑŠÐ¼Ð¾Ñ‚ÐµÐ²Ð¸Ñ‡Ð½Ð° Ð±ÑƒÑ€Ñ ÑÑŠÑ ÑÐ¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
                            300: "Ð¡Ð»Ð°Ð± Ñ€ÑŠÐ¼ÐµÐ¶",
                            301: "Ð ÑŠÐ¼Ð¸",
                            302: "Ð¡Ð¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
                            310: "Ð¡Ð»Ð°Ð± Ð´ÑŠÐ¶Ð´",
                            311: "Ð ÑŠÐ¼ÑÑ‰ Ð´ÑŠÐ¶Ð´",
                            312: "Ð¡Ð¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
                            321: "Ð¡Ð¸Ð»ÐµÐ½ Ñ€ÑŠÐ¼ÐµÐ¶",
                            500: "Ð¡Ð»Ð°Ð± Ð´ÑŠÐ¶Ð´",
                            501: "Ð£Ð¼ÐµÑ€ÐµÐ½ Ð´ÑŠÐ¶Ð´",
                            502: "Ð¡Ð¸Ð»ÐµÐ½ Ð´ÑŠÐ¶Ð´",
                            503: "ÐœÐ½Ð¾Ð³Ð¾ ÑÐ¸Ð»ÐµÐ½ Ð²Ð°Ð»ÐµÐ¶",
                            504: "Ð¡Ð¸Ð»ÐµÐ½ Ð´ÑŠÐ¶Ð´",
                            511: "Ð”ÑŠÐ¶Ð´ ÑÑŠÑ ÑÑ‚ÑƒÐ´",
                            520: "Ð¡Ð»Ð°Ð± Ð´ÑŠÐ¶Ð´",
                            521: "ÐžÐ±Ð¸Ð»ÐµÐ½ Ð´ÑŠÐ¶Ð´",
                            522: "ÐŸÐ¾Ñ€Ð¾Ð¹",
                            600: "Ð¡Ð»Ð°Ð± ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
                            601: "Ð¡Ð½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
                            602: "Ð¡Ð¸Ð»ÐµÐ½ ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
                            611: "Ð˜Ð·Ð½ÐµÐ½Ð°Ð´Ð²Ð°Ñ‰ Ð²Ð°Ð»ÐµÐ¶",
                            621: "ÐžÐ±Ð¸Ð»ÐµÐ½ ÑÐ½ÐµÐ³Ð¾Ð²Ð°Ð»ÐµÐ¶",
                            701: "ÐœÑŠÐ³Ð»Ð°",
                            711: "Ð”Ð¸Ð¼",
                            721: "ÐÐ¸ÑÐºÐ° Ð¼ÑŠÐ³Ð»Ð°",
                            731: "ÐŸÑÑÑŠÑ‡Ð½Ð°/ÐŸÑ€Ð°ÑˆÐ½Ð° Ð±ÑƒÑ€Ñ",
                            741: "ÐœÑŠÐ³Ð»Ð°",
                            800: "Ð¯ÑÐ½Ð¾ Ð½ÐµÐ±Ðµ",
                            801: "ÐÐ¸ÑÐºÐ° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
                            802: "Ð Ð°Ð·ÐºÑŠÑÐ°Ð½Ð° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
                            803: "Ð Ð°Ð·ÑÐµÑÐ½Ð° Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾ÑÑ‚",
                            804: "Ð¢ÑŠÐ¼Ð½Ð¸ Ð¾Ð±Ð»Ð°Ñ†Ð¸",
                            900: "Ð¢Ð¾Ñ€Ð½Ð°Ð´Ð¾/Ð£Ñ€Ð°Ð³Ð°Ð½",
                            901: "Ð¢Ñ€Ð¾Ð¿Ð¸Ñ‡ÐµÑÐºÐ° Ð±ÑƒÑ€Ñ",
                            902: "Ð£Ñ€Ð°Ð³Ð°Ð½",
                            903: "Ð¡Ñ‚ÑƒÐ´ÐµÐ½Ð¾",
                            904: "Ð“Ð¾Ñ€ÐµÑ‰Ð¾ Ð²Ñ€ÐµÐ¼Ðµ",
                            905: "Ð’ÐµÑ‚Ñ€Ð¾Ð²Ð¸Ñ‚Ð¾",
                            906: "Ð“Ñ€Ð°Ð´",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    se: {
                        name: "Swedish",
                        main: "",
                        description: {
                            200: "Ã¥skovÃ¤der",
                            201: "Ã¥skovÃ¤der",
                            202: "fullt Ã¥skovÃ¤der",
                            210: "Ã¥ska",
                            211: "Ã¥skovÃ¤der",
                            212: "Ã¥ska",
                            221: "ojÃ¤mnt ovÃ¤der",
                            230: "Ã¥skovÃ¤der",
                            231: "Ã¥skovÃ¤der",
                            232: "fullt Ã¥skovÃ¤der",
                            300: "mjukt duggregn",
                            301: "duggregn",
                            302: "hÃ¥rt duggregn",
                            310: "mjukt regn",
                            311: "regn",
                            312: "hÃ¥rt regn",
                            321: "duggregn",
                            500: "mjukt regn",
                            501: "MÃ¥ttlig regn",
                            502: "hÃ¥rt regn",
                            503: "mycket kraftigt regn",
                            504: "Ã¶sregn",
                            511: "underkylt regn",
                            520: "mjukt Ã¶sregn",
                            521: "dusch-regn",
                            522: "regnar smÃ¥spik",
                            600: "mjuk snÃ¶",
                            601: "snÃ¶",
                            602: "kraftigt snÃ¶fall",
                            611: "snÃ¶blandat regn",
                            621: "snÃ¶ovÃ¤der",
                            701: "dimma",
                            711: "smogg",
                            721: "dis",
                            731: "sandstorm",
                            741: "dimmigt",
                            800: "klar himmel",
                            801: "nÃ¥gra moln",
                            802: "spridda moln",
                            803: "molnigt",
                            804: "Ã¶verskuggande moln",
                            900: "storm",
                            901: "tropisk storm",
                            902: "orkan",
                            903: "kallt",
                            904: "varmt",
                            905: "blÃ¥sigt",
                            906: "hagel",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    zh_tw: {
                        name: "Chinese Traditional",
                        main: "",
                        description: {
                            200: "é›·é™£é›¨",
                            201: "é›·é™£é›¨",
                            202: "é›·é™£é›¨",
                            210: "é›·é™£é›¨",
                            211: "é›·é™£é›¨",
                            212: "é›·é™£é›¨",
                            221: "é›·é™£é›¨",
                            230: "é›·é™£é›¨",
                            231: "é›·é™£é›¨",
                            232: "é›·é™£é›¨",
                            300: "å°é›¨",
                            301: "å°é›¨",
                            302: "å¤§é›¨",
                            310: "å°é›¨",
                            311: "å°é›¨",
                            312: "å¤§é›¨",
                            321: "é™£é›¨",
                            500: "å°é›¨",
                            501: "ä¸­é›¨",
                            502: "å¤§é›¨",
                            503: "å¤§é›¨",
                            504: "æš´é›¨",
                            511: "å‡é›¨",
                            520: "é™£é›¨",
                            521: "é™£é›¨",
                            522: "å¤§é›¨",
                            600: "å°é›ª",
                            601: "é›ª",
                            602: "å¤§é›ª",
                            611: "é›¨å¤¾é›ª",
                            621: "é™£é›ª",
                            701: "è–„éœ§",
                            711: "ç…™éœ§",
                            721: "è–„éœ§",
                            731: "æ²™æ—‹é¢¨",
                            741: "å¤§éœ§",
                            800: "æ™´",
                            801: "æ™´ï¼Œå°‘é›²",
                            802: "å¤šé›²",
                            803: "å¤šé›²",
                            804: "é™°ï¼Œå¤šé›²",
                            900: "é¾æ²é¢¨",
                            901: "ç†±å¸¶é¢¨æš´",
                            902: "é¢¶é¢¨",
                            903: "å†·",
                            904: "ç†±",
                            905: "å¤§é¢¨",
                            906: "å†°é›¹",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    tr: {
                        name: "Turkish",
                        main: "",
                        description: {
                            200: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ hafif yaÄŸmurlu",
                            201: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ yaÄŸmurlu",
                            202: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ saÄŸanak yaÄŸÄ±ÅŸlÄ±",
                            210: "Hafif saÄŸanak",
                            211: "SaÄŸanak",
                            212: "Åžiddetli saÄŸanak",
                            221: "AralÄ±klÄ± saÄŸanak",
                            230: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ hafif yaÄŸÄ±ÅŸlÄ±",
                            231: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ yaÄŸÄ±ÅŸlÄ±",
                            232: "GÃ¶k gÃ¼rÃ¼ltÃ¼lÃ¼ ÅŸiddetli yaÄŸÄ±ÅŸlÄ±",
                            300: "Yer yer hafif yoÄŸunluklu yaÄŸÄ±ÅŸ",
                            301: "Yer yer yaÄŸÄ±ÅŸlÄ±",
                            302: "Yer yer yoÄŸun yaÄŸÄ±ÅŸlÄ±",
                            310: "Yer yer hafif yaÄŸÄ±ÅŸlÄ±",
                            311: "Yer yer yaÄŸÄ±ÅŸlÄ±",
                            312: "Yer yer yoÄŸun yaÄŸÄ±ÅŸlÄ±",
                            321: "Yer yer saÄŸanak yaÄŸÄ±ÅŸlÄ±",
                            500: "Hafif yaÄŸmur",
                            501: "Orta ÅŸiddetli yaÄŸmur",
                            502: "Åžiddetli yaÄŸmur",
                            503: "Ã‡ok ÅŸiddetli yaÄŸmur",
                            504: "AÅŸÄ±rÄ± yaÄŸmur",
                            511: "YaÄŸÄ±ÅŸlÄ± ve soÄŸuk hava",
                            520: "KÄ±sa sÃ¼reli hafif yoÄŸunluklu yaÄŸmur",
                            521: "KÄ±sa sÃ¼reli yaÄŸmur",
                            522: "KÄ±sa sÃ¼reli ÅŸiddetli yaÄŸmur",
                            600: "Hafif kar yaÄŸÄ±ÅŸlÄ±",
                            601: "Kar yaÄŸÄ±ÅŸlÄ±",
                            602: "YoÄŸun kar yaÄŸÄ±ÅŸlÄ±",
                            611: "Karla karÄ±ÅŸÄ±k yaÄŸmurlu",
                            621: "KÄ±sa sÃ¼relÃ¼ kar yaÄŸÄ±ÅŸÄ±",
                            701: "Sisli",
                            711: "Sisli",
                            721: "Hafif sisli",
                            731: "Kum/Toz fÄ±rtÄ±nasÄ±",
                            741: "Sisli",
                            800: "AÃ§Ä±k",
                            801: "Az bulutlu",
                            802: "ParÃ§alÄ± az bulutlu",
                            803: "ParÃ§alÄ± bulutlu",
                            804: "KapalÄ±",
                            900: "KasÄ±rga",
                            901: "Tropik fÄ±rtÄ±na",
                            902: "Hortum",
                            903: "Ã‡ok SoÄŸuk",
                            904: "Ã‡ok SÄ±cak",
                            905: "RÃ¼zgarlÄ±",
                            906: "Dolu yaÄŸÄ±ÅŸÄ±",
                            950: "Durgun",
                            951: "Sakin",
                            952: "Hafif RÃ¼zgarlÄ±",
                            953: "Az RÃ¼zgarlÄ±",
                            954: "Orta Seviye RÃ¼zgarlÄ±",
                            955: "RÃ¼zgarlÄ±",
                            956: "Kuvvetli RÃ¼zgar",
                            957: "Sert RÃ¼zgar",
                            958: "FÄ±rtÄ±na",
                            959: "Åžiddetli FÄ±rtÄ±na",
                            960: "KasÄ±rga",
                            961: "Åžiddetli KasÄ±rga",
                            962: "Ã‡ok Åžiddetli KasÄ±rga",
                        },
                    },
                    zh_cn: {
                        name: "Chinese Simplified",
                        main: "",
                        description: {
                            200: "é›·é˜µé›¨",
                            201: "é›·é˜µé›¨",
                            202: "é›·é˜µé›¨",
                            210: "é›·é˜µé›¨",
                            211: "é›·é˜µé›¨",
                            212: "é›·é˜µé›¨",
                            221: "é›·é˜µé›¨",
                            230: "é›·é˜µé›¨",
                            231: "é›·é˜µé›¨",
                            232: "é›·é˜µé›¨",
                            300: "å°é›¨",
                            301: "å°é›¨",
                            302: "å¤§é›¨",
                            310: "å°é›¨",
                            311: "å°é›¨",
                            312: "å¤§é›¨",
                            321: "é˜µé›¨",
                            500: "å°é›¨",
                            501: "ä¸­é›¨",
                            502: "å¤§é›¨",
                            503: "å¤§é›¨",
                            504: "æš´é›¨",
                            511: "å†»é›¨",
                            520: "é˜µé›¨",
                            521: "é˜µé›¨",
                            522: "å¤§é›¨",
                            600: "å°é›ª",
                            601: "é›ª",
                            602: "å¤§é›ª",
                            611: "é›¨å¤¹é›ª",
                            621: "é˜µé›ª",
                            701: "è–„é›¾",
                            711: "çƒŸé›¾",
                            721: "è–„é›¾",
                            731: "æ²™æ—‹é£Ž",
                            741: "å¤§é›¾",
                            800: "æ™´",
                            801: "æ™´ï¼Œå°‘äº‘",
                            802: "å¤šäº‘",
                            803: "å¤šäº‘",
                            804: "é˜´ï¼Œå¤šäº‘",
                            900: "é¾™å·é£Ž",
                            901: "çƒ­å¸¦é£Žæš´",
                            902: "é£“é£Ž",
                            903: "å†·",
                            904: "çƒ­",
                            905: "å¤§é£Ž",
                            906: "å†°é›¹",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    cz: {
                        name: "Czech",
                        main: "",
                        description: {
                            200: "bouÅ™ka se slabÃ½m deÅ¡tÄ›m",
                            201: "bouÅ™ka a dÃ©Å¡Å¥",
                            202: "bouÅ™ka se silnÃ½m deÅ¡tÄ›m",
                            210: "slabÅ¡Ã­ bouÅ™ka",
                            211: "bouÅ™ka",
                            212: "silnÃ¡ bouÅ™ka",
                            221: "bouÅ™kovÃ¡ pÅ™ehÃ¡Åˆka",
                            230: "bouÅ™ka se slabÃ½m mrholenÃ­m",
                            231: "bouÅ™ka s mrholenÃ­m",
                            232: "bouÅ™ka se silnÃ½m mrholenÃ­m",
                            300: "slabÃ© mrholenÃ­",
                            301: "mrholenÃ­",
                            302: "silnÃ© mrholenÃ­",
                            310: "slabÃ© mrholenÃ­ a dÃ©Å¡Å¥",
                            311: "mrholenÃ­ s deÅ¡tÄ›m",
                            312: "silnÃ© mrholenÃ­ a dÃ©Å¡Å¥",
                            313: "mrholenÃ­ a pÅ™ehÃ¡Åˆky",
                            314: "mrholenÃ­ a silnÃ© pÅ™ehÃ¡Åˆky",
                            321: "obÄasnÃ© mrholenÃ­",
                            500: "slabÃ½ dÃ©Å¡Å¥",
                            501: "dÃ©Å¡Å¥",
                            502: "prudkÃ½ dÃ©Å¡Å¥",
                            503: "pÅ™Ã­valovÃ½ dÃ©Å¡Å¥",
                            504: "prÅ¯trÅ¾ mraÄen",
                            511: "mrznoucÃ­ dÃ©Å¡Å¥",
                            520: "slabÃ© pÅ™ehÃ¡Åˆky",
                            521: "pÅ™ehÃ¡Åˆky",
                            522: "silnÃ© pÅ™ehÃ¡Åˆky",
                            531: "obÄasnÃ© pÅ™ehÃ¡Åˆky",
                            600: "mÃ­rnÃ© snÄ›Å¾enÃ­",
                            601: "snÄ›Å¾enÃ­",
                            602: "hustÃ© snÄ›Å¾enÃ­",
                            611: "zmrzlÃ½ dÃ©Å¡Å¥",
                            612: "smÃ­Å¡enÃ© pÅ™ehÃ¡Åˆky",
                            615: "slabÃ½ dÃ©Å¡Å¥ se snÄ›hem",
                            616: "dÃ©Å¡Å¥ se snÄ›hem",
                            620: "slabÃ© snÄ›hovÃ© pÅ™ehÃ¡Åˆky",
                            621: "snÄ›hovÃ© pÅ™ehÃ¡Åˆky",
                            622: "silnÃ© snÄ›hovÃ© pÅ™ehÃ¡Åˆky",
                            701: "mlha",
                            711: "kouÅ™",
                            721: "opar",
                            731: "pÃ­seÄnÃ© Äi prachovÃ© vÃ­ry",
                            741: "hustÃ¡ mlha",
                            751: "pÃ­sek",
                            761: "praÅ¡no",
                            762: "sopeÄnÃ½ popel",
                            771: "prudkÃ© bouÅ™e",
                            781: "tornÃ¡do",
                            800: "jasno",
                            801: "skoro jasno",
                            802: "polojasno",
                            803: "oblaÄno",
                            804: "zataÅ¾eno",
                            900: "tornÃ¡do",
                            901: "tropickÃ¡ bouÅ™e",
                            902: "hurikÃ¡n",
                            903: "zima",
                            904: "horko",
                            905: "vÄ›trno",
                            906: "krupobitÃ­",
                            950: "bezvÄ›tÅ™Ã­",
                            951: "vÃ¡nek",
                            952: "vÄ›tÅ™Ã­k",
                            953: "slabÃ½ vÃ­tr",
                            954: "mÃ­rnÃ½ vÃ­tr",
                            955: "ÄerstvÃ½ vÃ­tr",
                            956: "silnÃ½ vÃ­tr",
                            957: "prudkÃ½ vÃ­tr",
                            958: "bouÅ™livÃ½ vÃ­tr",
                            959: "vichÅ™ice",
                            960: "silnÃ¡ vichÅ™ice",
                            961: "mohutnÃ¡ vichÅ™ice",
                            962: "orkÃ¡n",
                        },
                    },
                    kr: {
                        name: "Korea",
                        main: "",
                        description: {
                            200: "thunderstorm with light rain",
                            201: "thunderstorm with rain",
                            202: "thunderstorm with heavy rain",
                            210: "light thunderstorm",
                            211: "thunderstorm",
                            212: "heavy thunderstorm",
                            221: "ragged thunderstorm",
                            230: "thunderstorm with light drizzle",
                            231: "thunderstorm with drizzle",
                            232: "thunderstorm with heavy drizzle",
                            300: "light intensity drizzle",
                            301: "drizzle",
                            302: "heavy intensity drizzle",
                            310: "light intensity drizzle rain",
                            311: "drizzle rain",
                            312: "heavy intensity drizzle rain",
                            321: "shower drizzle",
                            500: "light rain",
                            501: "moderate rain",
                            502: "heavy intensity rain",
                            503: "very heavy rain",
                            504: "extreme rain",
                            511: "freezing rain",
                            520: "light intensity shower rain",
                            521: "shower rain",
                            522: "heavy intensity shower rain",
                            600: "light snow",
                            601: "snow",
                            602: "heavy snow",
                            611: "sleet",
                            621: "shower snow",
                            701: "mist",
                            711: "smoke",
                            721: "haze",
                            731: "sand/dust whirls",
                            741: "fog",
                            800: "sky is clear",
                            801: "few clouds",
                            802: "scattered clouds",
                            803: "broken clouds",
                            804: "overcast clouds",
                            900: "tornado",
                            901: "tropical storm",
                            902: "hurricane",
                            903: "cold",
                            904: "hot",
                            905: "windy",
                            906: "hail",
                            950: "Setting",
                            951: "Calm",
                            952: "Light breeze",
                            953: "Gentle Breeze",
                            954: "Moderate breeze",
                            955: "Fresh Breeze",
                            956: "Strong breeze",
                            957: "High wind, near gale",
                            958: "Gale",
                            959: "Severe Gale",
                            960: "Storm",
                            961: "Violent Storm",
                            962: "Hurricane",
                        },
                    },
                    gl: {
                        name: "Galician",
                        main: "",
                        description: {
                            200: "tormenta elÃ©ctrica con choiva lixeira",
                            201: "tormenta elÃ©ctrica con choiva",
                            202: "tormenta elÃ©ctrica con choiva intensa",
                            210: "tormenta elÃ©ctrica lixeira",
                            211: "tormenta elÃ©ctrica",
                            212: "tormenta elÃ©ctrica forte",
                            221: "tormenta elÃ©ctrica irregular",
                            230: "tormenta elÃ©ctrica con orballo lixeiro",
                            231: "tormenta elÃ©ctrica con orballo",
                            232: "tormenta elÃ©ctrica con orballo intenso",
                            300: "orballo lixeiro",
                            301: "orballo",
                            302: "orballo de gran intensidade",
                            310: "choiva e orballo lixeiro",
                            311: "choiva e orballo",
                            312: "choiva e orballo de gran intensidade",
                            321: "orballo de ducha",
                            500: "choiva lixeira",
                            501: "choiva moderada",
                            502: "choiva de gran intensidade",
                            503: "choiva moi forte",
                            504: "choiva extrema",
                            511: "choiva xeada",
                            520: "choiva de ducha de baixa intensidade",
                            521: "choiva de ducha",
                            522: "choiva de ducha de gran intensidade",
                            600: "nevada lixeira",
                            601: "neve",
                            602: "nevada intensa",
                            611: "auganeve",
                            621: "neve de ducha",
                            701: "nÃ©boa",
                            711: "fume",
                            721: "nÃ©boa lixeira",
                            731: "remuiÃ±os de area e polvo",
                            741: "bruma",
                            800: "ceo claro",
                            801: "algo de nubes",
                            802: "nubes dispersas",
                            803: "nubes rotas",
                            804: "nubes",
                            900: "tornado",
                            901: "tormenta tropical",
                            902: "furacÃ¡n",
                            903: "frÃ­o",
                            904: "calor",
                            905: "ventoso",
                            906: "sarabia",
                            951: "calma",
                            952: "Vento frouxo",
                            953: "Vento suave",
                            954: "Vento moderado",
                            955: "Brisa",
                            956: "Vento forte",
                            957: "Vento forte, prÃ³ximo a vendaval",
                            958: "Vendaval",
                            959: "Vendaval forte",
                            960: "Tempestade",
                            961: "Tempestade violenta",
                            962: "FuracÃ¡n",
                        },
                    },
                    vi: {
                        name: "vietnamese",
                        main: "",
                        description: {
                            200: "GiÃ´ng bÃ£o vÃ  MÆ°a nháº¹",
                            201: "GiÃ´ng bÃ£o vÃ  MÆ°a",
                            202: "GiÃ´ng bÃ£o MÆ°a lá»›n",
                            210: "GiÃ´ng bÃ£o cÃ³ chá»›p giáº­t",
                            211: "BÃ£o",
                            212: "GiÃ´ng bÃ£o lá»›n",
                            221: "BÃ£o vÃ i nÆ¡i",
                            230: "GiÃ´ng bÃ£o vÃ  MÆ°a phÃ¹n nháº¹",
                            231: "GiÃ´ng bÃ£o vá»›i mÆ°a phÃ¹n",
                            232: "GiÃ´ng bÃ£o vá»›i mÆ°a phÃ¹n náº·ng",
                            300: "Ã¡nh sÃ¡ng cÆ°á»ng Ä‘á»™ mÆ°a phÃ¹n",
                            301: "mÆ°a phÃ¹n",
                            302: "mÆ°a phÃ¹n cÆ°á»ng Ä‘á»™ náº·ng",
                            310: "mÆ°a phÃ¹n nháº¹",
                            311: "mÆ°a vÃ  mÆ°a phÃ¹n",
                            312: "mÆ°a vÃ  mÆ°a phÃ¹n náº·ng",
                            321: "mÆ°a rÃ o vÃ  mÆ°a phÃ¹n",
                            500: "mÆ°a nháº¹",
                            501: "mÆ°a vá»«a",
                            502: "mÆ°a cÆ°á»ng Ä‘á»™ náº·ng",
                            503: "mÆ°a ráº¥t náº·ng",
                            504: "mÆ°a lá»‘c",
                            511: "mÆ°a láº¡nh",
                            520: "mÆ°a rÃ o nháº¹",
                            521: "mÆ°a rÃ o",
                            522: "mÆ°a rÃ o cÆ°á»ng Ä‘á»™ náº·ng",
                            600: "tuyáº¿t rÆ¡i nháº¹",
                            601: "tuyáº¿t",
                            602: "tuyáº¿t náº·ng háº¡t",
                            611: "mÆ°a Ä‘Ã¡",
                            621: "tuyáº¿t mÃ¹ trá»i",
                            701: "sÆ°Æ¡ng má»",
                            711: "khÃ³i bá»¥i",
                            721: "Ä‘Ã¡m mÃ¢y",
                            731: "bÃ£o cÃ¡t vÃ  lá»‘c xoÃ¡y",
                            741: "sÆ°Æ¡ng mÃ¹",
                            800: "báº§u trá»i quang Ä‘Ã£ng",
                            801: "mÃ¢y thÆ°a",
                            802: "mÃ¢y ráº£i rÃ¡c",
                            803: "mÃ¢y cá»¥m",
                            804: "mÃ¢y Ä‘en u Ã¡m",
                            900: "lá»‘c xoÃ¡y",
                            901: "cÆ¡n bÃ£o nhiá»‡t Ä‘á»›i",
                            902: "bÃ£o lá»‘c",
                            903: "láº¡nh",
                            904: "nÃ³ng",
                            905: "giÃ³",
                            906: "mÆ°a Ä‘Ã¡",
                            950: "Cháº¿ Ä‘á»",
                            951: "Nháº¹ nhÃ ng",
                            952: "Ãnh sÃ¡ng nháº¹",
                            953: "GÃ­o thoáº£ng",
                            954: "GiÃ³ nháº¹",
                            955: "GiÃ³ vá»«a pháº£i",
                            956: "GiÃ³ máº¡nh",
                            957: "GiÃ³ xoÃ¡y",
                            958: "Lá»‘c xoÃ¡y",
                            959: "Lá»‘c xoÃ¡y náº·ng",
                            960: "BÃ£o",
                            961: "BÃ£o cáº¥p lá»›n",
                            962: "BÃ£o lá»‘c",
                        },
                    },
                    ar: {
                        name: "Arabic",
                        main: "",
                        description: {
                            200: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø£Ù…Ø·Ø§Ø± Ø®ÙÙŠÙØ©",
                            201: "Ø§Ù„Ø¹ÙˆØ§ØµÙ Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø§Ù„Ù…Ø·Ø±",
                            202: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø§Ù…Ø·Ø§Ø± ØºØ²ÙŠØ±Ø©",
                            210: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ø®ÙÙŠÙØ©",
                            211: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ©",
                            212: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ø«Ù‚ÙŠÙ„Ø©",
                            221: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ø®Ø´Ù†Ø©",
                            230: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø±Ø°Ø§Ø° Ø®ÙÙŠÙ",
                            231: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø±Ø°Ø§Ø°",
                            232: "Ø¹Ø§ØµÙØ© Ø±Ø¹Ø¯ÙŠØ© Ù…Ø¹ Ø±Ø°Ø§Ø° ØºØ²ÙŠØ±Ø©",
                            300: "Ø±Ø°Ø§Ø° Ø®ÙÙŠÙ Ø§Ù„ÙƒØ«Ø§ÙØ©",
                            301: "Ø±Ø°Ø§Ø°",
                            302: "Ø±Ø°Ø§Ø° Ø´Ø¯ÙŠØ¯ Ø§Ù„ÙƒØ«Ø§ÙØ©",
                            310: "Ø±Ø°Ø§Ø° Ù…Ø·Ø± Ø®ÙÙŠÙ Ø§Ù„ÙƒØ«Ø§ÙØ©",
                            311: "Ø±Ø°Ø§Ø° Ù…Ø·Ø±",
                            312: "Ø±Ø°Ø§Ø° Ù…Ø·Ø± Ø´Ø¯ÙŠØ¯ Ø§Ù„ÙƒØ«Ø§ÙØ©",
                            321: "ÙˆØ§Ø¨Ù„ Ø±Ø°Ø§Ø°",
                            500: "Ù…Ø·Ø± Ø®ÙÙŠÙ",
                            501: "Ù…Ø·Ø± Ù…ØªÙˆØ³Ø· Ø§Ù„ØºØ²Ø§Ø±Ø©",
                            502: "Ù…Ø·Ø± ØºØ²ÙŠØ±",
                            503: "Ù…Ø·Ø± Ø´Ø¯ÙŠØ¯ Ø§Ù„ØºØ²Ø§Ø±Ø©",
                            504: "Ù…Ø·Ø± Ø¹Ø§Ù„ÙŠ Ø§Ù„ØºØ²Ø§Ø±Ø©",
                            511: "Ù…Ø·Ø± Ø¨Ø±Ø¯",
                            520: "ÙˆØ§Ø¨Ù„ Ù…Ø·Ø± Ø®ÙÙŠÙ",
                            521: "ÙˆØ§Ø¨Ù„ Ù…Ø·Ø±",
                            522: "ÙˆØ§Ø¨Ù„ Ù…Ø·Ø± Ø´Ø¯ÙŠØ¯ Ø§Ù„ÙƒØ«Ø§ÙØ©",
                            600: "Ø«Ù„ÙˆØ¬ Ø®ÙÙŠÙÙ‡",
                            601: "Ø«Ù„ÙˆØ¬",
                            602: "Ø«Ù„ÙˆØ¬ Ù‚ÙˆÙŠØ©",
                            611: "ØµÙ‚ÙŠØ¹",
                            621: "ÙˆØ§Ø¨Ù„ Ø«Ù„ÙˆØ¬",
                            701: "Ø¶Ø¨Ø§Ø¨",
                            711: "Ø¯Ø®Ø§Ù†",
                            721: "ØºÙŠÙˆÙ…",
                            731: "ØºØ¨Ø§Ø±",
                            741: "ØºÙŠÙ…",
                            800: "Ø³Ù…Ø§Ø¡ ØµØ§ÙÙŠØ©",
                            801: "ØºØ§Ø¦Ù… Ø¬Ø²Ø¦",
                            802: "ØºÙŠÙˆÙ… Ù…ØªÙØ±Ù‚Ø©",
                            803: "ØºÙŠÙˆÙ… Ù…ØªÙ†Ø§Ø«Ø±Ù‡",
                            804: "ØºÙŠÙˆÙ… Ù‚Ø§ØªÙ…Ø©",
                            900: "Ø¥Ø¹ØµØ§Ø±",
                            901: "Ø¹Ø§ØµÙØ© Ø§Ø³ØªÙˆØ§Ø¦ÙŠØ©",
                            902: "Ø²ÙˆÙŠØ¹Ø©",
                            903: "Ø¨Ø§Ø±Ø¯",
                            904: "Ø­Ø§Ø±",
                            905: "Ø±ÙŠØ§Ø­",
                            906: "ÙˆØ§Ø¨Ù„",
                            950: "Ø¥Ø¹Ø¯Ø§Ø¯",
                            951: "Ù‡Ø§Ø¯Ø¦",
                            952: "Ù†Ø³ÙŠÙ… Ø®ÙÙŠÙ",
                            953: "Ù†Ø³ÙŠÙ… Ù„Ø·ÙŠÙ",
                            954: "Ù†Ø³ÙŠÙ… Ù…Ø¹ØªØ¯Ù„",
                            955: "Ù†Ø³ÙŠÙ… Ø¹Ù„ÙŠÙ„",
                            956: "Ù†Ø³ÙŠÙ… Ù‚ÙˆÙŠ",
                            957: "Ø±ÙŠØ§Ø­ Ù‚ÙˆÙŠØ©",
                            958: "Ø¹Ø§ØµÙ",
                            959: "Ø¹Ø§ØµÙØ© Ø´Ø¯ÙŠØ¯Ø©",
                            960: "Ø¹Ø§ØµÙØ©",
                            961: "Ø¹Ø§ØµÙØ© Ø¹Ù†ÙŠÙØ©",
                            962: "Ø¥Ø¹ØµØ§Ø±",
                        },
                    },
                    mk: {
                        name: "Macedonian",
                        main: "",
                        description: {
                            200: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ»Ð°Ð± Ð´Ð¾Ð¶Ð´",
                            201: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ Ð´Ð¾Ð¶Ð´",
                            202: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
                            210: "ÑÐ»Ð°Ð±Ð¸ Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
                            211: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
                            212: "ÑÐ¸Ð»Ð½Ð¸ Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
                            221: "Ð¼Ð½Ð¾Ð³Ñƒ ÑÐ¸Ð»Ð½Ð¸ Ð³Ñ€Ð¼ÐµÐ¶Ð¸",
                            230: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            231: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            232: "Ð³Ñ€Ð¼ÐµÐ¶Ð¸ ÑÐ¾ ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            300: "ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            301: "Ñ€Ð¾ÑÐµÑšÐµ",
                            302: "ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            310: "ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            311: "Ñ€Ð¾ÑÐµÑšÐµ",
                            312: "ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            321: "Ð´Ð¾Ð¶Ð´",
                            500: "ÑÐ»Ð°Ð± Ð´Ð¾Ð¶Ð´",
                            501: "ÑÐ»Ð°Ð± Ð´Ð¾Ð¶Ð´",
                            502: "ÑÐ¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
                            503: "Ð¼Ð½Ð¾Ð³Ñƒ ÑÐ¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
                            504: "Ð¾Ð±Ð¸Ð»ÐµÐ½ Ð´Ð¾Ð¶Ð´",
                            511: "Ð³Ñ€Ð°Ð´",
                            520: "ÑÐ»Ð°Ð±Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            521: "Ñ€Ð¾ÑÐ¸",
                            522: "ÑÐ¸Ð»Ð½Ð¾ Ñ€Ð¾ÑÐµÑšÐµ",
                            600: "ÑÐ»Ð°Ð± ÑÐ½ÐµÐ³",
                            601: "ÑÐ½ÐµÐ³",
                            602: "ÑÐ¸Ð»ÐµÐ½ ÑÐ½ÐµÐ³",
                            611: "Ð»Ð°Ð¿Ð°Ð²Ð¸Ñ†Ð°",
                            621: "Ð»Ð°Ð¿Ð°Ð²Ð¸Ñ†Ð°",
                            701: "Ð¼Ð°Ð³Ð»Ð°",
                            711: "ÑÐ¼Ð¾Ð³",
                            721: "Ð·Ð°Ð¼Ð°Ð³Ð»ÐµÐ½Ð¾ÑÑ‚",
                            731: "Ð¿ÐµÑÐ¾Ñ‡ÐµÐ½ Ð²Ñ€Ñ‚Ð»Ð¾Ð³",
                            741: "Ð¼Ð°Ð³Ð»Ð°",
                            800: "Ñ‡Ð¸ÑÑ‚Ð¾ Ð½ÐµÐ±Ð¾",
                            801: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ Ð¾Ð±Ð»Ð°Ñ†Ð¸",
                            802: "Ð¾Ð´Ð²Ð¾ÐµÐ½Ð¸ Ð¾Ð±Ð»Ð°Ñ†Ð¸",
                            803: "Ð¾Ð±Ð»Ð°Ñ†Ð¸",
                            804: "Ð¾Ð±Ð»Ð°Ñ‡Ð½Ð¾",
                            900: "Ñ‚Ð¾Ñ€Ð½Ð°Ð´Ð¾",
                            901: "Ñ‚Ñ€Ð¾Ð¿ÑÐºÐ° Ð±ÑƒÑ€Ð°",
                            902: "ÑƒÑ€Ð°Ð³Ð°Ð½",
                            903: "Ð»Ð°Ð´Ð½Ð¾",
                            904: "Ñ‚Ð¾Ð¿Ð»Ð¾",
                            905: "Ð²ÐµÑ‚Ñ€Ð¾Ð²Ð¸Ñ‚Ð¾",
                            906: "Ð³Ñ€Ð°Ð´",
                            950: "Ð—Ð°Ð»ÐµÐ·",
                            951: "ÐœÐ¸Ñ€Ð½Ð¾",
                            952: "Ð¡Ð»Ð°Ð± Ð²ÐµÑ‚Ð°Ñ€",
                            953: "Ð¡Ð»Ð°Ð± Ð²ÐµÑ‚Ð°Ñ€",
                            954: "Ð’ÐµÑ‚Ð°Ñ€",
                            955: "Ð¡Ð²ÐµÐ¶ Ð²ÐµÑ‚Ð°Ñ€",
                            956: "Ð¡Ð¸Ð»ÐµÐ½ Ð²ÐµÑ‚Ð°Ñ€",
                            957: "ÐœÐ½Ð¾Ð³Ñƒ ÑÐ¸Ð»ÐµÐ½ Ð²ÐµÑ‚Ð°Ñ€",
                            958: "ÐÐµÐ²Ñ€ÐµÐ¼Ðµ",
                            959: "Ð¡Ð¸Ð»Ð½Ð¾ Ð½ÐµÐ²Ñ€ÐµÐ¼Ðµ",
                            960: "Ð‘ÑƒÑ€Ð°",
                            961: "Ð¡Ð¸Ð»Ð½Ð° Ð±ÑƒÑ€Ð°",
                            962: "Ð£Ñ€Ð°Ð³Ð°Ð½",
                        },
                    },
                    sk: {
                        name: "Slovak",
                        main: "",
                        description: {
                            200: "bÃºrka so slabÃ½m daÅ¾Äom",
                            201: "bÃºrka s daÅ¾Äom",
                            202: "bÃºrka so silnÃ½m daÅ¾Äom",
                            210: "mierna bÃºrka",
                            211: "bÃºrka",
                            212: "silnÃ¡ bÃºrka",
                            221: "prudkÃ¡ bÃºrka",
                            230: "bÃºrka so slabÃ½m mrholenÃ­m",
                            231: "bÃºrka s mrholenÃ­m",
                            232: "bÃºrka so silnÃ½m mrholenÃ­m",
                            300: "slabÃ© mrholenie",
                            301: "mrholenie",
                            302: "silnÃ© mrholenie",
                            310: "slabÃ© popÅ•chanie",
                            311: "popÅ•chanie",
                            312: "silnÃ© popÅ•chanie",
                            321: "jemnÃ© mrholenie",
                            500: "slabÃ½ dÃ¡Å¾Ä",
                            501: "mierny dÃ¡Å¾Ä",
                            502: "silnÃ½ dÃ¡Å¾Ä",
                            503: "veÄ¾mi silnÃ½ dÃ¡Å¾Ä",
                            504: "extrÃ©mny dÃ¡Å¾Ä",
                            511: "mrznÃºci dÃ¡Å¾Ä",
                            520: "slabÃ¡ prehÃ¡nka",
                            521: "prehÃ¡nka",
                            522: "silnÃ¡ prehÃ¡nka",
                            600: "slabÃ© sneÅ¾enie",
                            601: "sneÅ¾enie",
                            602: "silnÃ© sneÅ¾enie",
                            611: "dÃ¡Å¾Ä so snehom",
                            621: "snehovÃ¡ prehÃ¡nka",
                            701: "hmla",
                            711: "dym",
                            721: "opar",
                            731: "pieskovÃ©/praÅ¡nÃ© vÃ­ry",
                            741: "hmla",
                            800: "jasnÃ¡ obloha",
                            801: "takmer jasno",
                            802: "polojasno",
                            803: "oblaÄno",
                            804: "zamraÄenÃ©",
                            900: "tornÃ¡do",
                            901: "tropickÃ¡ bÃºrka",
                            902: "hurikÃ¡n",
                            903: "zima",
                            904: "horÃºco",
                            905: "veterno",
                            906: "krupobitie",
                            950: "Nastavenie",
                            951: "Bezvetrie",
                            952: "SlabÃ½ vÃ¡nok",
                            953: "JemnÃ½ vietor",
                            954: "StrednÃ½ vietor",
                            955: "ÄŒerstvÃ½ vietor",
                            956: "SilnÃ½ vietor",
                            957: "SilnÃ½ vietor, takmer vÃ­chrica",
                            958: "VÃ­chrica",
                            959: "SilnÃ¡ vÃ­chrica",
                            960: "BÃºrka",
                            961: "NiÄivÃ¡ bÃºrka",
                            962: "HurikÃ¡n",
                        },
                    },
                    hu: {
                        name: "Hungarian",
                        main: "",
                        description: {
                            200: "vihar enyhe esÅ‘vel",
                            201: "vihar esÅ‘vel",
                            202: "vihar heves esÅ‘vel",
                            210: "enyhe zivatar",
                            211: "vihar",
                            212: "heves vihar",
                            221: "durva vihar",
                            230: "vihar enyhe szitÃ¡lÃ¡ssal",
                            231: "vihar szitÃ¡lÃ¡ssal",
                            232: "vihar erÅ‘s szitÃ¡lÃ¡ssal",
                            300: "enyhe intenzitÃ¡sÃº szitÃ¡lÃ¡s",
                            301: "szitÃ¡lÃ¡s",
                            302: "erÅ‘s intenzitÃ¡sÃº szitÃ¡lÃ¡s",
                            310: "enyhe intenzitÃ¡sÃº szitÃ¡lÃ³ esÅ‘",
                            311: "szitÃ¡lÃ³ esÅ‘",
                            312: "erÅ‘s intenzitÃ¡sÃº szitÃ¡lÃ³ esÅ‘",
                            321: "zÃ¡por",
                            500: "enyhe esÅ‘",
                            501: "kÃ¶zepes esÅ‘",
                            502: "heves intenzitÃ¡sÃº esÅ‘",
                            503: "nagyon heves esÅ‘",
                            504: "extrÃ©m esÅ‘",
                            511: "Ã³nos esÅ‘",
                            520: "enyhe intenzitÃ¡sÃº zÃ¡por",
                            521: "zÃ¡por",
                            522: "erÅ‘s intenzitÃ¡sÃº zÃ¡por",
                            600: "enyhe havazÃ¡s",
                            601: "havazÃ¡s",
                            602: "erÅ‘s havazÃ¡s",
                            611: "havas esÅ‘",
                            621: "hÃ³zÃ¡por",
                            701: "gyenge kÃ¶d",
                            711: "kÃ¶d",
                            721: "kÃ¶d",
                            731: "homokvihar",
                            741: "kÃ¶d",
                            800: "tiszta Ã©gbolt",
                            801: "kevÃ©s felhÅ‘",
                            802: "szÃ³rvÃ¡nyos felhÅ‘zet",
                            803: "erÅ‘s felhÅ‘zet",
                            804: "borÃºs Ã©gbolt",
                            900: "tornÃ¡dÃ³",
                            901: "trÃ³pusi vihar",
                            902: "hurrikÃ¡n",
                            903: "hÅ±vÃ¶s",
                            904: "forrÃ³",
                            905: "szeles",
                            906: "jÃ©gesÅ‘",
                            950: "Nyugodt",
                            951: "Csendes",
                            952: "Enyhe szellÅ‘",
                            953: "Finom szellÅ‘",
                            954: "KÃ¶zepes szÃ©l",
                            955: "Ã‰lÃ©nk szÃ©l",
                            956: "ErÅ‘s szÃ©l",
                            957: "ErÅ‘s, mÃ¡r viharos szÃ©l",
                            958: "Viharos szÃ©l",
                            959: "ErÅ‘sen viharos szÃ©l",
                            960: "SzÃ©lvihar",
                            961: "TombolÃ³ szÃ©lvihar",
                            962: "HurrikÃ¡n",
                        },
                    },
                    ca: {
                        name: "Catalan",
                        main: "",
                        description: {
                            200: "Tempesta amb pluja suau",
                            201: "Tempesta amb pluja",
                            202: "Tempesta amb pluja intensa",
                            210: "Tempesta suau",
                            211: "Tempesta",
                            212: "Tempesta forta",
                            221: "Tempesta irregular",
                            230: "Tempesta amb plugim suau",
                            231: "Tempesta amb plugin",
                            232: "Tempesta amb molt plugim",
                            300: "Plugim suau",
                            301: "Plugim",
                            302: "Plugim intens",
                            310: "Plugim suau",
                            311: "Plugim",
                            312: "Plugim intens",
                            313: "Pluja",
                            314: "Pluja intensa",
                            321: "Plugim",
                            500: "Pluja suau",
                            501: "Pluja",
                            502: "Pluja intensa",
                            503: "Pluja molt intensa",
                            504: "Pluja extrema",
                            511: "Pluja glaÃ§ada",
                            520: "Pluja suau",
                            521: "Pluja suau",
                            522: "Pluja intensa",
                            531: "Pluja irregular",
                            600: "Nevada suau",
                            601: "Nevada",
                            602: "Nevada intensa",
                            611: "Aiguaneu",
                            612: "Pluja d'aiguaneu",
                            615: "Plugim i neu",
                            616: "Pluja i neu",
                            620: "Nevada suau",
                            621: "Nevada",
                            622: "Nevada intensa",
                            701: "Boira",
                            711: "Fum",
                            721: "Boirina",
                            731: "Sorra",
                            741: "Boira",
                            751: "Sorra",
                            761: "Pols",
                            762: "Cendra volcÃ nica",
                            771: "XÃ fec",
                            781: "Tornado",
                            800: "Cel net",
                            801: "Lleugerament ennuvolat",
                            802: "NÃºvols dispersos",
                            803: "Nuvolositat variable",
                            804: "Ennuvolat",
                            900: "Tornado",
                            901: "Tempesta tropical",
                            902: "HuracÃ ",
                            903: "Fred",
                            904: "Calor",
                            905: "Vent",
                            906: "Pedra",
                            950: "",
                            951: "Calmat",
                            952: "Brisa suau",
                            953: "Brisa agradable",
                            954: "Brisa moderada",
                            955: "Brisa fresca",
                            956: "Brisca fora",
                            957: "Vent intens",
                            958: "Vendaval",
                            959: "Vendaval sever",
                            960: "Tempesta",
                            961: "Tempesta violenta",
                            962: "HuracÃ ",
                        },
                    },
                    hr: {
                        name: "Croatian",
                        main: "",
                        description: {
                            200: "grmljavinska oluja s slabom kiÅ¡om",
                            201: "grmljavinska oluja s kiÅ¡om",
                            202: "grmljavinska oluja s jakom kiÅ¡om",
                            210: "slaba grmljavinska oluja",
                            211: "grmljavinska oluja",
                            212: "jaka grmljavinska oluja",
                            221: "orkanska grmljavinska oluja",
                            230: "grmljavinska oluja sa slabom rosuljom",
                            231: "grmljavinska oluja s rosuljom",
                            232: "grmljavinska oluja sa jakom rosuljom",
                            300: "rosulja slabog intenziteta",
                            301: "rosulja",
                            302: "rosulja jakog intenziteta",
                            310: "rosulja s kiÅ¡om slabog intenziteta",
                            311: "rosulja s kiÅ¡om",
                            312: "rosulja s kiÅ¡om jakog intenziteta",
                            313: "pljuskovi i rosulja",
                            314: "rosulja s jakim pljuskovima",
                            321: "rosulja s pljuskovima",
                            500: "slaba kiÅ¡a",
                            501: "umjerena kiÅ¡a",
                            502: "kiÅ¡a jakog intenziteta",
                            503: "vrlo jaka kiÅ¡a",
                            504: "ekstremna kiÅ¡a",
                            511: "ledena kiÅ¡a",
                            520: "pljusak slabog intenziteta",
                            521: "pljusak",
                            522: "pljusak jakog intenziteta",
                            531: "olujna kiÅ¡a s pljuskovima",
                            600: "slabi snijeg",
                            601: "snijeg",
                            602: "gusti snijeg",
                            611: "susnjeÅ¾ica",
                            612: "susnjeÅ¾ica s pljuskovima",
                            615: "slaba kiÅ¡a i snijeg",
                            616: "kiÅ¡a i snijeg",
                            620: "snijeg s povremenim pljuskovima",
                            621: "snijeg s pljuskovima",
                            622: "snijeg s jakim pljuskovima",
                            701: "sumaglica",
                            711: "dim",
                            721: "izmaglica",
                            731: "kovitlaci pijeska ili praÅ¡ine",
                            741: "magla",
                            751: "pijesak",
                            761: "praÅ¡ina",
                            762: "vulkanski pepeo",
                            771: "zapusi vjetra s kiÅ¡om",
                            781: "tornado",
                            800: "vedro",
                            801: "blaga naoblaka",
                            802: "raÅ¡trkani oblaci",
                            803: "isprekidani oblaci",
                            804: "oblaÄno",
                            900: "tornado",
                            901: "tropska oluja",
                            902: "orkan",
                            903: "hladno",
                            904: "vruÄ‡e",
                            905: "vjetrovito",
                            906: "tuÄa",
                            950: "",
                            951: "lahor",
                            952: "povjetarac",
                            953: "slab vjetar",
                            954: "umjeren vjetar",
                            955: "umjereno jak vjetar",
                            956: "jak vjetar",
                            957: "Å¾estok vjetar",
                            958: "olujni vjetar",
                            959: "jak olujni vjetar",
                            960: "orkanski vjetar",
                            961: "jak orkanski vjetar",
                            962: "orkan",
                        },
                    },
                    blank: {
                        name: "Catalan",
                        main: "",
                        description: {
                            200: "",
                            201: "",
                            202: "",
                            210: "",
                            211: "",
                            212: "",
                            221: "",
                            230: "",
                            231: "",
                            232: "",
                            300: "",
                            301: "",
                            302: "",
                            310: "",
                            311: "",
                            312: "",
                            313: "",
                            314: "",
                            321: "",
                            500: "",
                            501: "",
                            502: "",
                            503: "",
                            504: "",
                            511: "",
                            520: "",
                            521: "",
                            522: "",
                            531: "",
                            600: "",
                            601: "",
                            602: "",
                            611: "",
                            612: "",
                            615: "",
                            616: "",
                            620: "",
                            621: "",
                            622: "",
                            701: "",
                            711: "",
                            721: "",
                            731: "",
                            741: "",
                            751: "",
                            761: "",
                            762: "",
                            771: "",
                            781: "",
                            800: "",
                            801: "",
                            802: "",
                            803: "",
                            804: "",
                            900: "",
                            901: "",
                            902: "",
                            903: "",
                            904: "",
                            905: "",
                            906: "",
                            950: "",
                            951: "",
                            952: "",
                            953: "",
                            954: "",
                            955: "",
                            956: "",
                            957: "",
                            958: "",
                            959: "",
                            960: "",
                            961: "",
                            962: "",
                        },
                    },
                };
            },
            {},
        ],
        3: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                n.windSpeed = {
                    en: {
                        Settings: { speed_interval: [0, 0.3], desc: "0-1   Smoke rises straight up" },
                        Calm: { speed_interval: [0.3, 1.6], desc: "1-3 One can see downwind of the smoke drift" },
                        "Light breeze": { speed_interval: [1.6, 3.3], desc: "4-6 One can feel the wind. The leaves on the trees move, the wind can lift small streamers." },
                        "Gentle Breeze": { speed_interval: [3.4, 5.5], desc: "7-10 Leaves and twigs move. Wind extends light flag and pennants" },
                        "Moderate breeze": { speed_interval: [5.5, 8], desc: "11-16   The wind raises dust and loose papers, touches on the twigs and small branches, stretches larger flags and pennants" },
                        "Fresh Breeze": { speed_interval: [8, 10.8], desc: "17-21   Small trees in leaf begin to sway. The water begins little waves to peak" },
                        "Strong breeze": { speed_interval: [10.8, 13.9], desc: "22-27   Large branches and smaller tribes moves. The whiz of telephone lines. It is difficult to use the umbrella. A resistance when running." },
                        "High wind, near gale": { speed_interval: [13.9, 17.2], desc: "28-33   Whole trees in motion. It is hard to go against the wind." },
                        Gale: { speed_interval: [17.2, 20.7], desc: "34-40   The wind break twigs of trees. It is hard to go against the wind." },
                        "Severe Gale": { speed_interval: [20.8, 24.5], desc: "41-47   All large trees swaying and throws. Tiles can blow down." },
                        Storm: { speed_interval: [24.5, 28.5], desc: "48-55   Rare inland. Trees uprooted. Serious damage to houses." },
                        "Violent Storm": { speed_interval: [28.5, 32.7], desc: "56-63   Occurs rarely and is followed by destruction." },
                        Hurricane: { speed_interval: [32.7, 64], desc: "Occurs very rarely. Unusually severe damage." },
                    },
                };
            },
            {},
        ],
        4: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t;
                    };
                })();
                var i = (function () {
                    function e() {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.baseDomain = "openweathermap.phase.owm.io" === document.location.hostname ? "openweathermap.phase.owm.io" : "openweathermap.org"),
                        (this.baseURL = "https://" + this.baseDomain + "/themes/openweathermap/assets/vendor/owm"),
                            (this.scriptD3SRC = this.baseURL + "/js/libs/d3.min.js"),
                            (this.scriptSRC = this.baseURL + "/js/weather-widget-generator-2.0.js"),
                            (this.mapWidgets = {
                                "widget-1-left-blue": { code: '<script src="' + this.scriptD3SRC + '"></script>\n                       ' + this.getCodeForGenerateWidget(2, 524901, "Moscow", ""), schema: "blue" },
                                "widget-2-left-blue": {
                                    code:
                                        "<script type=\"text/javascript\">\n                            window.myWidgetParam = {\n                                id: 2,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " +
                                        this.scriptSRC +
                                        ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                      </script>",
                                    schema: "blue",
                                },
                                "widget-left-blue": { code: "script.js?type=left&schema=blue&id=3", schema: "blue" },
                                "widget-4-left-blue": { code: "script.js?type=left&schema=blue&id=4", schema: "blue" },
                                "widget-5-right-blue": { code: "script.js?type=right&schema=blue&id=5", schema: "blue" },
                                "widget-6-right-blue": { code: "script.js?type=right&schema=blue&id=6", schema: "blue" },
                                "widget-7-right-blue": { code: "script.js?type=right&schema=blue&id=7", schema: "blue" },
                                "widget-8-right-blue": { code: "script.js?type=right&schema=blue&id=8", schema: "blue" },
                                "widget-9-right-blue": { code: "script.js?type=right&schema=blue&id=9", schema: "blue" },
                                "widget-1-left-brown": {
                                    code:
                                        '<script src="' +
                                        this.scriptD3SRC +
                                        "\"></script>\n                            <script type=\"text/javascript\">\n                                    window.myWidgetParam = {\n                                    id: 10,\n                                    cityid: 524901,\n                                    containerid: 'openweathermap-widget',\n                                };\n                                (function() {\n                                    var script = document.createElement('script');\n                                    script.type = 'text/javascript';\n                                    script.async = true;\n                                    script.src = " +
                                        this.scriptSRC +
                                        ";\n                                    var s = document.getElementsByTagName('script')[0];\n                                    s.parentNode.insertBefore(script, s);\n                                })();\n                            </script>",
                                    schema: "brown",
                                },
                                "widget-2-left-brown": {
                                    code:
                                        "<script type=\"text/javascript\">\n                            window.myWidgetParam = {\n                                id: 11,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " +
                                        this.scriptSRC +
                                        ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                        </script>",
                                    schema: "brown",
                                },
                                "widget-left-brown": {
                                    code:
                                        "<script type=\"text/javascript\">\n                            window.myWidgetParam = {\n                                id: 12,\n                                cityid: 524901,\n                                containerid: 'openweathermap-widget',\n                            };\n                            (function() {\n                                var script = document.createElement('script');\n                                script.type = 'text/javascript';\n                                script.async = true;\n                                script.src = " +
                                        this.scriptSRC +
                                        ";\n                                var s = document.getElementsByTagName('script')[0];\n                                s.parentNode.insertBefore(script, s);\n                            })();\n                        </script>",
                                    schema: "brown",
                                },
                                "widget-4-left-brown": { code: "script.js?type=left&schema=brown&id=4", schema: "brown" },
                                "widget-5-right-brown": { code: "script.js?type=left&schema=brown&id=5", schema: "brown" },
                                "widget-6-right-brown": { code: "script.js?type=left&schema=brown&id=6", schema: "brown" },
                                "widget-7-right-brown": { code: "script.js?type=right&schema=brown&id=7", schema: "brown" },
                                "widget-8-right-brown": { code: "script.js?type=right&schema=brown&id=8", schema: "brown" },
                                "widget-9-right-brown": { code: "script.js?type=right&schema=brown&id=9", schema: "brown" },
                                "widget-1-left-white": { code: "script.js?type=left&schema=white&id=1", schema: "none" },
                                "widget-2-left-white": { code: "script.js?type=left&schema=white&id=2", schema: "none" },
                                "widget-left-white": { code: "script.js?type=left&schema=white&id=3", schema: "none" },
                                "widget-4-left-white": { code: "script.js?type=left&schema=white&id=4", schema: "none" },
                            }),
                            (this.domElements = {
                                id1: {
                                    id: 1,
                                    type: "left",
                                    schema: "blue",
                                    colorPolilyne: "#DDF730",
                                    domEmpty: '<div class="widget-left widget-left--blue">\n                     <i class="widget-left__loading" />\n                   </div>',
                                    dom:
                                        '\n                    <div class="widget-left widget-left--blue">\n                    <div class="widget-left-menu widget-left-menu--blue">\n                      <div class="widget-left-menu__layout">\n                        <h2 class="widget-left-menu__header"></h2>\n                        <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black"></div></a>\n                      </div>\n                    </div>\n                    <div class="widget-left__body">\n                      <div class="weather-left-card">\n                        <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="" class="weather-left-card__img"/>\n                          <div class="weather-left-card__col">\n                            <p class="weather-left-card__number"><sup class="weather-left-card__degree"></sup></p><span class="weather-left-card__rising">and rising</span>\n                          </div>\n                        </div>\n                        <div class="weather-left-card__row2">\n                          <p class="weather-left-card__means">-</p>\n                          <p class="weather-left-card__wind">Wind:</p>\n                        </div>\n                      </div>\n                      <div class="widget-left__calendar">\n                        <ul class="calendar">\n                          <li class="calendar__item">Today</li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                        </ul>\n                        <div id="graphic1" class="widget-left__graphic"></div>\n                      </div>\n                    </div>\n                  </div>',
                                },
                                id2: {
                                    id: 2,
                                    type: "left",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-left widget-left--compact widget-left--blue">\n                        <i class="widget-left__loading" />\n                    </div>',
                                    dom:
                                        '<div class="widget-left widget-left--compact widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--compact widget-left-menu--blue">\n                    <div class="widget-left-menu__layout widget-left-menu__layout--blue">\n                    <h2 class="widget-left-menu__header"></h2>\n                    </div>\n                </div>\n                <div class="widget-left__body widget-left__body--compact widget-left__body--blue">\n                    <div class="weather-left-card weather-left-card--compact">\n                    <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="" class="weather-left-card__img"/>\n                    <div class="weather-left-card__col">\n                        <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                    </div>\n                </div>\n                <div class="weather-left-card__row2">\n                    <p class="weather-left-card__means"></p>\n                    <p class="weather-left-card__wind">Wind:</p>\n                </div>\n                </div>\n                <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--blue">\n                    <div class="widget-left-menu__logo_container">\n                        <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black_small"></div></a>\n                    </div>\n                </div>\n                </div>\n              </div>',
                                },
                                id3: {
                                    id: 3,
                                    type: "left",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-left widget-left--small widget-left--blue">\n                    <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--small widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--blue">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--small calendar--blue">\n                    <img width="32" height="32" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left-menu__footer">\n                  <div class="widget-left-menu__logo_container_float_left widget-left-menu__negative_top_container">\n                    <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black_small"></div></a>\n                  </div>\n                </div>\n              </div>',
                                },
                                id4: {
                                    id: 4,
                                    type: "left",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-left widget-left--small widget-left--blue">\n                    <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--small2 widget-left--blue">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--blue">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--small2 calendar--blue">\n                    <img width="64" height="64" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left-menu__footer">\n                  <div class="widget-left-menu__logo_container_float_left widget-left-menu__negative_top_container">\n                    <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black_small"></div></a>\n                  </div>\n                </div>\n              </div>',
                                },
                                id5: {
                                    id: 5,
                                    type: "right",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-right weather-right--type1 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right weather-right--type1 widget-right--blue">\n                <div class="widget-right__header widget-right__header--blue">\n                  <div class="widget-right__layout">\n                    <div>\n                      <h2 class="widget-right__title"></h2>\n                      <p class="widget-right__description"></p>\n                    </div>\n                  </div><img width="128" height="128" alt="" class="weather-right__icon weather-right__icon--type1" src="">\n                </div>\n                <div class="weather-right weather-right--type1 weather-right--blue">\n                  <div class="weather-right__layout">\n                  <div class="weather-right__temperature"><span></span></div>\n                  <div class="weather-right__weather">\n                    <div class="weather-right-card">\n                    <table class="weather-right__table">\n                      <tbody><tr class="weather-right__items">\n                      <th colspan="2" class="weather-right__item">Details</th>\n                      </tr>\n                      <tr class="weather-right__items">\n                      <td class="weather-right__item">Feels like</td>\n                      <td class="weather-right__item weather-right__feels"><span></span></td>\n                      </tr>\n                      <tr class="weather-right__items">\n                      <td class="weather-right__item">Wind</td>\n                      <td class="weather-right__item weather-right__wind-speed"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Humidity</td>\n                      <td class="weather-right__item weather-right__humidity"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Precip</td>\n                      <td class="weather-right__item"></td>\n                      </tr>\n                      <tr class="weather-right-card__items">\n                      <td class="weather-right__item">Pressure</td>\n                      <td class="weather-right__item weather-right__pressure"></td>\n                      </tr>\n                    </tbody></table>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n                <div class="widget-right__footer widget-right__footer--blue">\n                  <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_small"></div></a>\n                  <div class="widget-right__date"></div>\n                  </div>\n                </div>\n              </div>',
                                },
                                id6: {
                                    id: 6,
                                    type: "right",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-right widget-right--type2 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type2 widget-right--blue">\n                          <div class="widget-right__header widget-right__header--blue">\n                            <div class="widget-right__layout">\n                              <div>\n                                <h2 class="widget-right__title"></h2>\n                                <p class="widget-right__description"></p>\n                              </div>\n                            </div>\n                          </div>\n                          <div class="weather-right weather-right--blue weather-right--type2">\n                            <div class="weather-right__layout">\n                              <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                            </div>\n                          </div>\n                          <div class="widget-right__footer widget-right__footer--blue">\n                            <div class="widget-right__layout">\n                                <div class="widget-right__logo_container_full_width">\n                                    <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_extra_small"></div></a>\n                                </div>\n                            </div>\n                          </div>\n                      </div>',
                                },
                                id7: {
                                    id: 7,
                                    type: "right",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-right widget-right--type3 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type3 widget-right--blue">\n                      <div class="widget-right__header widget-right__header--blue">\n                        <div class="widget-right__layout">\n                          <div>\n                            <h2 class="widget-right__title"></h2>\n                            <p class="widget-right__description"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--blue weather-right--type3">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                          <table class="weather-right-table weather-right-table--blue">\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Feels Like</td>\n                              <td class="weather-right-table__item weather-right__feels"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Wind</td>\n                              <td class="weather-right-table__item weather-right__wind-speed"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Pressure</td>\n                              <td class="weather-right-table__item weather-right__pressure"></td>\n                            </tr>\n                          </table>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--blue">\n                        <div class="widget-right__layout">\n                            <div class="widget-right__logo_container_full_width">\n                                <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_extra_small"></div></a>\n                            </div>\n                        </div>\n                      </div>\n                    </div>',
                                },
                                id8: {
                                    id: 8,
                                    type: "right",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-right widget-right--type5 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type5 widget-right--blue">\n                  <div class="widget-right__layout widget-right__layout--blue">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="64" height="64" alt="" class="weather-right__icon weather-right__icon--type5 weather-right__icon--blue"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--blue">\n                      <div class="widget-right__layout">\n                        <div class="widget-right__logo_container widget-right__negative_top_container">\n                            <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_small"></div></a>\n                        </div>\n                        <div class="widget-right__date"></div>\n                      </div>\n          \n                    </div>\n                  </div>\n                </div>',
                                },
                                id9: {
                                    id: 9,
                                    type: "right",
                                    schema: "blue",
                                    domEmpty: '<div class="widget-right widget-right--type4 widget-right--blue">\n                    <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type4 widget-right--blue">\n                  <div class="widget-right__layout widget-right__layout--blue">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="100" alt="" class="weather-right__icon weather-right__icon--type4 weather-right__icon--blue"/>\n                    <table class="weather-right-card weather-right-card--type4 weather-right-card--blue">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--blue">\n                      <div class="widget-right__layout">\n                        <div class="widget-right__logo_container widget-right__negative_top_container">\n                            <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_small"></div></a>\n                        </div>\n                        <div class="widget-right__date"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>',
                                },
                                id11: {
                                    id: 11,
                                    type: "left",
                                    schema: "brown",
                                    colorPolilyne: "#FEB020",
                                    domEmpty: '<div class="widget-left">\n                        <i class="widget-left__loading" />\n                    </div>',
                                    dom:
                                        '<div class="widget-left">\n                    <div class="widget-left-menu widget-left-menu--brown">\n                      <div class="widget-left-menu__layout">\n                        <h2 class="widget-left-menu__header"></h2>\n                        <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black"></div></a>\n                      </div>\n                    </div>\n                    <div class="widget-left__body">\n                      <div class="weather-left-card">\n                        <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                          <div class="weather-left-card__col">\n                            <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                          </div>\n                        </div>\n                        <div class="weather-left-card__row2">\n                          <p class="weather-left-card__means"></p>\n                          <p class="weather-left-card__wind">Wind:</p>\n                        </div>\n                      </div>\n                      <div class="widget-left__calendar">\n                        <ul class="calendar">\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                          <li class="calendar__item"></li>\n                        </ul>\n                        <div id="graphic2" class="widget-left__graphic"></div>\n                      </div>\n                    </div>\n                  </div>',
                                },
                                id12: {
                                    id: 12,
                                    type: "left",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-left widget-left--compact">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--compact">\n                      <div class="widget-left-menu widget-left-menu--compact widget-left-menu--brown">\n                        <div class="widget-left-menu__layout widget-left-menu__layout--brown">\n                          <h2 class="widget-left-menu__header">Weather</h2>\n                        </div>\n                      </div>\n                      <div class="widget-left__body widget-left__body--compact">\n                        <div class="weather-left-card weather-left-card--compact">\n                          <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                            <div class="weather-left-card__col">\n                              <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                            </div>\n                          </div>\n                          <div class="weather-left-card__row2">\n                            <p class="weather-left-card__means"></p>\n                            <p class="weather-left-card__wind">Wind:</p>\n                          </div>\n                        </div>\n                        <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--brown">\n                          <div class="widget-left-menu__logo_container">\n                              <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black_small"></div></a>\n                          </div>\n                        </div>\n                      </div>\n                    </div>',
                                },
                                id13: {
                                    id: 13,
                                    type: "left",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-left widget-left--small widget-left--brown">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--small widget-left--brown">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--brown">\n                <div class="widget-left-menu__header-container">\n                  <h2 class="widget-left-menu__header"></h2>\n                </div>\n                <p class="calendar calendar--small calendar--brown">\n                  <img width="32" height="32" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                </p>\n                <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left-menu__footer">\n                  <div class="widget-left-menu__logo_container_float_left widget-left-menu__negative_top_container">\n                    <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black_small"></div></a>\n                  </div>\n                </div>\n              </div>',
                                },
                                id14: {
                                    id: 14,
                                    type: "left",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-left widget-left--small2 widget-left--brown">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--small2 widget-left--brown">\n                <div class="widget-left-menu widget-left-menu--small widget-left-menu--brown">\n                <div class="widget-left-menu__header-container">\n                  <h2 class="widget-left-menu__header"></h2>\n                </div>\n                <p class="calendar calendar--small2 calendar--brown">\n                  <img width="64" height="64" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                </p>\n                <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left-menu__footer">\n                  <div class="widget-left-menu__logo_container_float_left widget-left-menu__negative_top_container">\n                    <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_black_small"></div></a>\n                  </div>\n                </div>\n              </div>',
                                },
                                id15: {
                                    id: 15,
                                    type: "right",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-right weather-right--type1 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right weather-right--type1 widget-right--brown">\n                    <div class="widget-right__header widget-right__header--brown">\n                      <div class="widget-right__layout">\n                        <div>\n                          <h2 class="widget-right__title"></h2>\n                          <p class="widget-right__description"></p>\n                        </div>\n                      </div><img src="" width="128" height="128" alt="" class="weather-right__icon weather-right__icon--type1"/>\n                    </div>\n                    <div class="weather-right weather-right--brown">\n                      <div class="weather-right__layout">\n                        <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                        <div class="weather-right__weather">\n                          <div class="weather-right-card">\n                            <table class="weather-right__table">\n                              <tr class="weather-right__items">\n                                <th colspan="2" class="weather-right__item">Details</th>\n                              </tr>\n                              <tr class="weather-right__items">\n                                <td class="weather-right__item">Feels like</td>\n                                <td class="weather-right__item weather-right__feels"><span class="widget-right-card__units"></span></td>\n                              </tr>\n                              <tr class="weather-right__items">\n                                <td class="weather-right__item">Wind</td>\n                                <td class="weather-right__item weather-right__wind-speed"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Humidity</td>\n                                <td class="weather-right__item weather-right__humidity"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Precip</td>\n                                <td class="weather-right__item"></td>\n                              </tr>\n                              <tr class="weather-right-card__items">\n                                <td class="weather-right__item">Pressure</td>\n                                <td class="weather-right__item weather-right__pressure"></td>\n                              </tr>\n                            </table>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class="widget-right__footer widget-right__footer--brown">\n                      <div class="widget-right__layout"><a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_small"></div></a>\n                        <div class="widget-right__date"></div>\n                      </div>\n                    </div>\n                  </div>',
                                },
                                id16: {
                                    id: 16,
                                    type: "right",
                                    schema: "brown",
                                    domEmpty: '<div class="wwidget-right widget-right--type2 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type2 widget-right--brown">\n                      <div class="widget-right__header widget-right__header--brown">\n                        <div class="widget-right__layout">\n                          <div>\n                            <h2 class="widget-right__title"></h2>\n                            <p class="widget-right__description"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--brown weather-right--type2">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--brown">\n                      <div class="widget-right__layout">\n                            <div class="widget-right__logo_container_full_width">\n                                <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_extra_small"></div>\n                            </div>\n                        </div>\n                      </div>\n                    </div>',
                                },
                                id17: {
                                    id: 17,
                                    type: "right",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-right widget-right--type3 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type3 widget-right--brown">\n                      <div class="widget-right__header widget-right__header--brown">\n                        <div class="widget-right__layout">\n                          <div>\n                            <h2 class="widget-right__title"></h2>\n                            <p class="widget-right__description"></p>\n                          </div>\n                        </div>\n                      </div>\n                      <div class="weather-right weather-right--brown weather-right--type3">\n                        <div class="weather-right__layout">\n                          <div class="weather-right__temperature"><span class="widget-right__units"></span></div>\n                          <table class="weather-right-table">\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Feels Like</td>\n                              <td class="weather-right-table__item weather-right__feels"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Wind</td>\n                              <td class="weather-right-table__item weather-right__wind-speed"></td>\n                            </tr>\n                            <tr class="weather-right-table__items">\n                              <td class="weather-right-table__item">Pressure</td>\n                              <td class="weather-right-table__item weather-right__pressure"></td>\n                            </tr>\n                          </table>\n                        </div>\n                      </div>\n                      <div class="widget-right__footer widget-right__footer--brown">\n                        <div class="widget-right__layout">\n                            <div class="widget-right__logo_container_full_width">\n                                <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_extra_small"></div></a>\n                            </div>\n                        </div>\n                      </div>\n                    </div>',
                                },
                                id18: {
                                    id: 18,
                                    type: "right",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-right widget-right--type5 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type5 widget-right--brown">\n                  <div class="widget-right__layout widget-right__layout--brown">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="64" height="64" alt="" class="weather-right__icon weather-right__icon--type5 weather-right__icon--brown"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--brown">\n                    <div class="widget-right__layout">\n                        <div class="widget-right__logo_container widget-right__negative_top_container">\n                            <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_small"></div></a>\n                        </div>\n                        <div class="widget-right__date"></div>\n                      </div>\n                  </div>\n                </div>',
                                },
                                id19: {
                                    id: 19,
                                    type: "right",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-right widget-right--type4 widget-right--brown">\n                     <i class="widget-right__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-right widget-right--type4 widget-right--brown">\n                  <div class="widget-right__layout widget-right__layout--brown">\n                    <div class="widget-right-card">\n                      <div class="widget-right__title"></div>\n                      <div class="widget-right__description"></div>\n                    </div><img src="" width="100" alt="" class="weather-right__icon weather-right__icon--type4 weather-right__icon--brown"/>\n                    <table class="weather-right-card">\n                      <tr class="weather-right-card__items">\n                        <td class="weather-right-card__item weather-right-card__temperature-min"></td>\n                        <td class="weather-right-card__item weather-right-card__temperature-max"></td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div class="widget-right__footer widget-right__footer--brown">\n                    <div class="widget-right__layout">\n                      <div class="widget-right__logo_container widget-right__negative_top_container">\n                          <a href="//openweathermap.org/" target="_blank"><div class="widget-right__logo_black_small"></div></a>\n                      </div>\n                      <div class="widget-right__date"></div>\n                    </div>\n                  </div>\n                </div>',
                                },
                                id21: {
                                    id: 21,
                                    type: "left",
                                    schema: "white",
                                    domEmpty: '<div class="widget-left">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left">\n                  <div class="widget-left-menu">\n                    <div class="widget-left-menu__layout">\n                      <h2 class="widget-left-menu__header"></h2>\n                      <div class="widget-left-menu__logo_bnw"></div>\n                    </div>\n                  </div>\n                  <div class="widget-left__body">\n                    <div class="weather-left-card weather-left-card--grayscale">\n                      <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                        <div class="weather-left-card__col">\n                          <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                        </div>\n                      </div>\n                      <div class="weather-left-card__row2">\n                        <p class="weather-left-card__means"></p>\n                        <p class="weather-left-card__wind">Wind:</p>\n                      </div>\n                    </div>\n                    <div class="widget-left__calendar">\n                      <ul class="calendar calendar--grayscale">\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                        <li class="calendar__item"></li>\n                      </ul>\n                      <div id="graphic" class="widget-left__graphic"></div>\n                    </div>\n                  </div>\n                </div>',
                                },
                                id22: {
                                    id: 22,
                                    type: "left",
                                    schema: "white",
                                    domEmpty: '<div class="widget-left widget-left--compact">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--compact">\n                  <div class="widget-left-menu widget-left-menu--compact">\n                    <div class="widget-left-menu__layout">\n                      <h2 class="widget-left-menu__header"></h2>\n                    </div>\n                  </div>\n                  <div class="widget-left__body widget-left__body--compact">\n                    <div class="weather-left-card weather-left-card--compact weather-left-card--grayscale">\n                      <div class="weather-left-card__row1"><img src="" width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                        <div class="weather-left-card__col">\n                          <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                        </div>\n                      </div>\n                      <div class="weather-left-card__row2">\n                        <p class="weather-left-card__means"></p>\n                        <p class="weather-left-card__wind">Wind:</p>\n                      </div>\n                    </div>\n                    <div class="widget-left-menu__links widget-left-menu__links--compact widget-left-menu__links--grey">\n                      <div class="widget-left-menu__logo_container">\n                          <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_bnw_small"></div></a>\n                      </div>\n                    </div>\n                  </div>\n                </div>',
                                },
                                id23: {
                                    id: 23,
                                    type: "left",
                                    schema: "white",
                                    domEmpty: '<div class="widget-left widget-left--small">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--small">\n                <div class="widget-left-menu widget-left-menu--small">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--grayscale calendar--small">\n                    <img width="32" height="32" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left-menu__footer">\n                  <div class="widget-left-menu__logo_container_float_left widget-left-menu__negative_top_container">\n                    <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_bnw_small"></div></a>\n                  </div>\n                </div>\n              </div>',
                                },
                                id24: {
                                    id: 24,
                                    type: "left",
                                    schema: "white",
                                    domEmpty: '<div class="widget-left widget-left--small2">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left widget-left--small2">\n                <div class="widget-left-menu widget-left-menu--small">\n                  <div class="widget-left-menu__header-container">\n                    <h2 class="widget-left-menu__header"></h2>\n                  </div>\n                  <p class="calendar calendar--grayscale calendar--small2">\n                    <img width="64" height="64" alt="" class="weather-left-card__img weather-left-card__img--small" src="">\n                  </p>\n                  <p class="weather-left-card__number weather-left-card__number--small"><span class="weather-left-card__degree"></span></p>\n                </div>\n                <div class="widget-left-menu__footer">\n                  <div class="widget-left-menu__logo_container_float_left widget-left-menu__negative_top_container">\n                    <a href="//openweathermap.org/" target="_blank"><div class="widget-left-menu__logo_bnw_small"></div></a>\n                  </div>\n                </div>\n              </div>',
                                },
                                id31: {
                                    id: 31,
                                    type: "left",
                                    schema: "brown",
                                    domEmpty: '<div class="widget-left">\n                     <i class="widget-left__loading" />\n                  </div>',
                                    dom:
                                        '<div class="widget-left">\n                <div class="widget-left-menu widget-left-menu--brown">\n                  <div class="widget-left-menu__layout">\n                    <h2 class="widget-left-menu__header">Weather</h2><img src="//openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/vetochki01.png" alt="Merry Christmas" class="widget-left-menu__christmas"/>\n                  </div>\n                </div>\n                <div class="widget-left__body">\n                  <div class="weather-left-card">\n                    <div class="weather-left-card__row1"><img width="128" height="128" alt="Weather" class="weather-left-card__img"/>\n                      <div class="weather-left-card__col">\n                        <p class="weather-left-card__number"><span class="weather-left-card__degree"></span></p><span class="weather-left-card__rising">and rising</span>\n                      </div>\n                    </div>\n                    <div class="weather-left-card__row2">\n                      <p class="weather-left-card__means"></p>\n                      <p class="weather-left-card__wind">Wind:</p>\n                    </div>\n                    <div class="widget-left-menu__links widget-left-menu__links--christmas"><span>More at</span><a href="//openweathermap.org/" class="widget-left-menu__link">OpenWeatherMap</a></div>\n                  </div>\n                  <div class="widget-left__calendar">\n                    <ul class="calendar">\n                      <li class="calendar__item">Today</li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                      <li class="calendar__item"></li>\n                    </ul>\n                    <div id="graphic3" class="widget-left__graphic"></div>\n                  </div>\n                </div>',
                                },
                            }),
                            (this.lincsCSS = {
                                all: '<link href="' + this.baseURL + '/css/style.min.css" rel="stylesheet" />',
                                left: '<link href="' + this.baseURL + '/css/openweathermap-widget-left.min.css" rel="stylesheet" />',
                                right: '<link href="' + this.baseURL + '/css/openweathermap-widget-right.min.css" rel="stylesheet" />',
                            });
                    }
                    return (
                        r(e, [
                            {
                                key: "getCodeForGenerateWidget",
                                value: function (e, t, n, r) {
                                    return e && (t || n) && r
                                        ? ' <script type="text/javascript">\n                                window.myWidgetParam = {\n                                    id: ' +
                                              e +
                                              ",\n                                    cityid: " +
                                              city_id +
                                              ",\n                                    containerid: 'openweathermap-widget',\n                                };\n                                (function() {\n                                    var script = document.createElement('script');\n                                    script.type = 'text/javascript';\n                                    script.async = true;\n                                    script.src = " +
                                              this.scriptSRC +
                                              ";\n                                    var s = document.getElementsByTagName('script')[0];\n                                    s.parentNode.insertBefore(script, s);\n                                })();\n            </script>"
                                        : null;
                                },
                            },
                            {
                                key: "render",
                                value: function (e) {
                                    if (e) {
                                        this.selDOMElement = this.domElements["id" + e.id];
                                        var t = document.getElementById(e.containerid);
                                        t.insertAdjacentHTML("afterbegin", this.selDOMElement.dom), t.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type]);
                                        t.insertAdjacentHTML(
                                            "beforeend",
                                            "<script>\n         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n         ga('create', 'UA1601618-11', 'auto');\n         ga('send', 'pageview');\n\n        </script>"
                                        );
                                    }
                                },
                            },
                            {
                                key: "getDocumentFragment",
                                value: function (e) {
                                    var t = document.createDocumentFragment(),
                                        n = document.createElement("div"),
                                        r = document.createElement("div");
                                    if (e) {
                                        (n.id = "container-" + e.containerid),
                                            (this.selDOMElement = this.domElements["id" + e.id]),
                                            n.insertAdjacentHTML("afterbegin", this.selDOMElement.dom),
                                            n.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type]);
                                        n.insertAdjacentHTML(
                                            "beforeend",
                                            "<script>\n         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n         ga('create', 'UA1601618-11', 'auto');\n         ga('send', 'pageview');\n\n        </script>"
                                        ),
                                            t.appendChild(n),
                                            r.insertAdjacentHTML("afterbegin", this.selDOMElement.domEmpty),
                                            r.insertAdjacentHTML("afterbegin", this.lincsCSS[this.selDOMElement.type]);
                                    }
                                    return { documentFragment: t, containerLoader: r };
                                },
                            },
                        ]),
                        e
                    );
                })();
                n.default = i;
            },
            {},
        ],
        5: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r,
                    i = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })(),
                    a = e("./custom-date"),
                    o = (r = a) && r.__esModule ? r : { default: r };
                var s = (function (e) {
                    function t(e) {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t);
                        var n = (function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return (
                            (n.params = e),
                            (n.temperaturePolygon = d3
                                .line()
                                .x(function (e) {
                                    return e.x;
                                })
                                .y(function (e) {
                                    return e.y;
                                })),
                            n
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(t, o.default),
                        i(t, [
                            {
                                key: "prepareData",
                                value: function () {
                                    var e = 0,
                                        t = [];
                                    return (
                                        this.params.data.forEach(function (n) {
                                            t.push({ x: e, date: e, maxT: n.max, minT: n.min }), (e += 1);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "makeSVG",
                                value: function () {
                                    return d3.select(this.params.id).append("svg").attr("class", "axis").attr("width", this.params.width).attr("height", this.params.height).attr("fill", this.params.colorPolilyne).style("stroke", "#ffffff");
                                },
                            },
                            {
                                key: "getMinMaxDate",
                                value: function (e) {
                                    var t = { maxDate: 0, minDate: 1e4 };
                                    return (
                                        e.forEach(function (e) {
                                            t.maxDate <= e.date && (t.maxDate = e.date), t.minDate >= e.date && (t.minDate = e.date);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "getMinMaxTemperature",
                                value: function (e) {
                                    var t = { min: 100, max: 0 };
                                    return (
                                        e.forEach(function (e) {
                                            t.min >= e.minT && (t.min = e.minT), t.max <= e.maxT && (t.max = e.maxT);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "getMinMaxWeather",
                                value: function (e) {
                                    var t = { min: 0, max: 0 };
                                    return (
                                        e.forEach(function (e) {
                                            t.min >= e.humidity && (t.min = e.humidity),
                                                t.min >= e.rainfallAmount && (t.min = e.rainfallAmount),
                                                t.max <= e.humidity && (t.max = e.humidity),
                                                t.max <= e.rainfallAmount && (t.max = e.rainfallAmount);
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "makeAxesXY",
                                value: function (e, t) {
                                    var n = t.width - 2 * t.margin,
                                        r = t.height - 2 * t.margin;
                                    return this.scaleAxesXYTemperature(e, n, r, t);
                                },
                            },
                            {
                                key: "scaleAxesXYTemperature",
                                value: function (e, t, n, r) {
                                    var i = this.getMinMaxDate(e),
                                        a = i.maxDate,
                                        o = i.minDate,
                                        s = this.getMinMaxTemperature(e),
                                        l = s.min,
                                        c = s.max,
                                        d = d3
                                            .scaleTime()
                                            .domain([new Date(o), new Date(a)])
                                            .range([0, t]),
                                        u = d3
                                            .scaleLinear()
                                            .domain([c + 5, l - 5])
                                            .range([0, n]),
                                        h = [];
                                    return (
                                        e.forEach(function (e) {
                                            h.push({ x: d(e.date) + r.offsetX, maxT: u(e.maxT) + r.offsetX, minT: u(e.minT) + r.offsetX });
                                        }),
                                        { scaleX: d, scaleY: u, data: h }
                                    );
                                },
                            },
                            {
                                key: "scaleAxesXYWeather",
                                value: function (e, t, n, r) {
                                    var i = this.getMinMaxDate(e),
                                        a = i.maxDate,
                                        o = i.minDate,
                                        s = this.getMinMaxWeather(e),
                                        l = s.min,
                                        c = s.max,
                                        d = d3
                                            .scaleTime()
                                            .domain([new Date(o), new Date(a)])
                                            .range([0, t]),
                                        u = d3.scaleLinear().domain([c, l]).range([0, n]),
                                        h = [];
                                    return (
                                        e.forEach(function (e) {
                                            h.push({ x: d(e.date) + r, humidity: u(e.humidity) + r, rainfallAmount: u(e.rainfallAmount) + r, color: e.color });
                                        }),
                                        { scaleX: d, scaleY: u, data: h }
                                    );
                                },
                            },
                            {
                                key: "makePolyline",
                                value: function (e, t, n, r) {
                                    var i = [];
                                    return (
                                        e.forEach(function (e) {
                                            i.push({ x: n(e.date) + t.offsetX, y: r(e.maxT) + t.offsetY });
                                        }),
                                        e.reverse().forEach(function (e) {
                                            i.push({ x: n(e.date) + t.offsetX, y: r(e.minT) + t.offsetY });
                                        }),
                                        i.push({ x: n(e[e.length - 1].date) + t.offsetX, y: r(e[e.length - 1].maxT) + t.offsetY }),
                                        i
                                    );
                                },
                            },
                            {
                                key: "drawPolyline",
                                value: function (e, t) {
                                    e.append("g")
                                        .append("path")
                                        .style("stroke-width", this.params.strokeWidth)
                                        .attr("d", this.temperaturePolygon(t))
                                        .style("stroke", this.params.colorPolilyne)
                                        .style("fill", this.params.colorPolilyne)
                                        .style("opacity", 1);
                                },
                            },
                            {
                                key: "drawLabelsTemperature",
                                value: function (e, t, n) {
                                    t.forEach(function (t, r, i) {
                                        e
                                            .append("text")
                                            .attr("x", t.x)
                                            .attr("y", t.maxT - 2 - n.offsetX / 2)
                                            .attr("text-anchor", "middle")
                                            .style("font-size", n.fontSize)
                                            .style("stroke", n.fontColor)
                                            .style("fill", n.fontColor)
                                            .text(n.data[r].max + "°"),
                                            e
                                                .append("text")
                                                .attr("x", t.x)
                                                .attr("y", t.minT + 7 + n.offsetY / 2)
                                                .attr("text-anchor", "middle")
                                                .style("font-size", n.fontSize)
                                                .style("stroke", n.fontColor)
                                                .style("fill", n.fontColor)
                                                .text(n.data[r].min + "°");
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.makeSVG(),
                                        t = this.prepareData(),
                                        n = this.makeAxesXY(t, this.params),
                                        r = n.scaleX,
                                        i = n.scaleY,
                                        a = n.data,
                                        o = this.makePolyline(t, this.params, r, i);
                                    this.drawPolyline(e, o), this.drawLabelsTemperature(e, a, this.params);
                                },
                            },
                        ]),
                        t
                    );
                })();
                n.default = s;
            },
            { "./custom-date": 1 },
        ],
        6: [
            function (e, t, n) {
                "use strict";
                var r = a(e("./weather-widget")),
                    i = a(e("./generator-widget"));
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                e("es6-promise").Promise;
                e("String.fromCodePoint");
                var o = new i.default();
                if (!window.myWidgetParam.length) {
                    var s = [];
                    s.push(window.myWidgetParam), (window.myWidgetParam = s);
                }
                window.myWidgetParam.forEach(function (e) {
                    if (!document.getElementById(e.containerid).textContent.trim()) {
                        var t = o.getDocumentFragment(e),
                            n = t.documentFragment,
                            i = t.containerLoader,
                            a = "";
                        a = e.cityid ? "?id=" + e.cityid : e.city_name ? "?q=" + e.city_name : "?q=London";
                        var s = "#000";
                        o.selDOMElement.colorPolilyne && (s = o.selDOMElement.colorPolilyne);
                        var l = void 0;
                        l = e.units && "imperial" === e.units ? ["imperial", "°F", "m/h"] : ["metric", "°C", "m/s"];
                        var c = e.schema ? e.schema : "default",
                            d = "openweathermap.phase.owm.io" === document.location.hostname ? "openweathermap.phase.owm.io" : "openweathermap.org",
                            u = { id: e.id, cityName: "Moscow", lang: "en", appid: e.appid, units: l[0], textUnitTemp: l[1], textUnitWind: l[2], colorPolilyne: s, baseURL: o.baseURL, urlDomain: "default" === c ? "https://api." + d : "https://" + d },
                            h = {
                                cityName: n.querySelectorAll(".widget-left-menu__header"),
                                temperature: n.querySelectorAll(".weather-left-card__number"),
                                naturalPhenomenon: n.querySelectorAll(".weather-left-card__means"),
                                windSpeed: n.querySelectorAll(".weather-left-card__wind"),
                                mainIconWeather: n.querySelectorAll(".weather-left-card__img"),
                                calendar: n.querySelector(".widget-left__calendar"),
                                calendarItem: n.querySelectorAll(".calendar__item"),
                                cityName2: n.querySelectorAll(".widget-right__title"),
                                temperature2: n.querySelectorAll(".weather-right__temperature"),
                                temperatureFeels: n.querySelectorAll(".weather-right__feels"),
                                temperatureMin: n.querySelectorAll(".weather-right-card__temperature-min"),
                                temperatureMax: n.querySelectorAll(".weather-right-card__temperature-max"),
                                naturalPhenomenon2: n.querySelectorAll(".widget-right__description"),
                                windSpeed2: n.querySelectorAll(".weather-right__wind-speed"),
                                mainIconWeather2: n.querySelectorAll(".weather-right__icon"),
                                humidity: n.querySelectorAll(".weather-right__humidity"),
                                pressure: n.querySelectorAll(".weather-right__pressure"),
                                dateReport: n.querySelectorAll(".widget-right__date"),
                                documentFragmentWidget: n,
                                containerWidget: document.getElementById(e.containerid),
                            },
                            p = n.querySelector("#graphic"),
                            f = n.querySelector("#graphic1"),
                            g = n.querySelector("#graphic2"),
                            m = n.querySelector("#graphic3");
                        p && (h.graphic = p), f && (h.graphic = f), g && (h.graphic = g), m && (h.graphic = m);
                        var v = {
                            urlWeatherAPI: u.urlDomain + "/data/2.5/widgets/weather" + a + "&units=" + u.units + "&appid=" + u.appid + "&callback=?",
                            paramsUrlForeDaily: u.urlDomain + "/data/2.5/widgets/forecast" + a + "&units=" + u.units + "&cnt=8&appid=" + u.appid + "&callback=?",
                            windSpeed: u.baseURL + "/data/wind-speed-data.json",
                            windDirection: u.baseURL + "/data/wind-direction-data.json",
                            clouds: u.baseURL + "data/clouds-data.json",
                            naturalPhenomenon: u.baseURL + "/data/natural-phenomenon-data.json",
                        };
                        (h.containerWidget.innerText = ""), h.containerWidget.appendChild(i);
                        var w = new r.default(u, h, v);
                        (h.cityName.length || h.cityName2.length) && w.render();
                    }
                });
            },
            { "./generator-widget": 4, "./weather-widget": 7, "String.fromCodePoint": 8, "es6-promise": 9 },
        ],
        7: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              },
                    i = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })(),
                    a = d(e("./custom-date")),
                    o = d(e("./graphic-d3js")),
                    s = e("./data/natural-phenomenon-data"),
                    l = e("./data/wind-speed-data"),
                    c = d(e("jquery"));
                function d(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                e("es6-promise").Promise;
                var u = (function (e) {
                    function t(e, n, r) {
                        !(function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t);
                        var i = (function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return (
                            (i.params = e),
                            (i.controls = n),
                            (i.urls = r),
                            (i.id = e.id),
                            (i.existGraphic = i.controls.graphic || i.controls.graphic1 || i.controls.graphic2 || i.controls.graphic3),
                            (i.weather = {
                                fromAPI: {
                                    coord: { lon: "0", lat: "0" },
                                    weather: [{ id: " ", main: " ", description: " ", icon: " " }],
                                    base: " ",
                                    main: { temp: 0, pressure: " ", humidity: " ", temp_min: " ", temp_max: " " },
                                    wind: { speed: 0, deg: " " },
                                    rain: {},
                                    clouds: { all: " " },
                                    dt: "",
                                    sys: { type: " ", id: " ", message: " ", country: " ", sunrise: " ", sunset: " " },
                                    id: " ",
                                    name: "Undefined",
                                    cod: " ",
                                },
                            }),
                            (i.naturalPhenomenon = s.naturalPhenomenon),
                            (i.windSpeed = l.windSpeed),
                            (i.windDirection = l.windDirection),
                            i
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(t, a.default),
                        i(t, [
                            {
                                key: "getWeatherFromApi",
                                value: function () {
                                    var e = this,
                                        t = void 0,
                                        n = void 0;
                                    this.getForecastCurrent().done(function (r) {
                                        (t = r),
                                            e.existGraphic
                                                ? e
                                                      .getForecastDaily()
                                                      .catch(function () {
                                                          return e.prepareToParseMetadata(e.weather, t);
                                                      })
                                                      .done(function (r) {
                                                          (n = r), e.prepareToParseMetadata(e.weather, t, n);
                                                      })
                                                : e.prepareToParseMetadata(e.weather, t);
                                    });
                                },
                            },
                            {
                                key: "getForecastCurrent",
                                value: function () {
                                    var e = { dataType: "jsonp", url: this.urls.urlWeatherAPI, context: this, xhrFields: { withCredentials: !1 } };
                                    return c.default.ajax(e);
                                },
                            },
                            {
                                key: "getForecastDaily",
                                value: function () {
                                    var e = { dataType: "jsonp", url: this.urls.paramsUrlForeDaily, context: this, xhrFields: { withCredentials: !1 } };
                                    return c.default.ajax(e);
                                },
                            },
                            {
                                key: "prepareToParseMetadata",
                                value: function (e, t, n) {
                                    (e.fromAPI = t), (e.naturalPhenomenon = this.naturalPhenomenon[this.params.lang].description), (e.windSpeed = this.windSpeed[this.params.lang]), (e.forecastDaily = n), this.parseDataFromServer(e);
                                },
                            },
                            {
                                key: "getParentSelectorFromObject",
                                value: function (e, t, n, i) {
                                    for (var a in e)
                                        if ("object" === r(e[a][n]) && null == i) {
                                            if (t >= e[a][n][0] && t < e[a][n][1]) return a;
                                        } else if (null != i && t >= e[a][n] && t < e[a][i]) return a;
                                },
                            },
                            {
                                key: "parseDataFromServer",
                                value: function (e) {
                                    if ("Undefined" !== e.fromAPI.name && "404" !== e.fromAPI.cod) {
                                        var t = {
                                                cloudiness: " ",
                                                dt: " ",
                                                cityName: " ",
                                                icon: " ",
                                                temperature: " ",
                                                temperatureMin: " ",
                                                temperatureMax: " ",
                                                pressure: " ",
                                                humidity: " ",
                                                sunrise: " ",
                                                sunset: " ",
                                                coord: " ",
                                                wind: " ",
                                                weather: " ",
                                            },
                                            n = parseInt(e.fromAPI.main.temp.toFixed(0), 10) + 0;
                                        (t.cityName = e.fromAPI.name + ", " + e.fromAPI.sys.country),
                                            (t.temperature = n),
                                            (t.temperatureMin = parseInt(e.fromAPI.main.temp_min.toFixed(0), 10) + 0),
                                            (t.temperatureMax = parseInt(e.fromAPI.main.temp_max.toFixed(0), 10) + 0),
                                            e.naturalPhenomenon && (t.weather = e.naturalPhenomenon[e.fromAPI.weather[0].id]),
                                            e.windSpeed &&
                                                ((t.windSpeed =
                                                    "Wind: " + e.fromAPI.wind.speed.toFixed(1) + " " + this.params.textUnitWind + " " + this.getParentSelectorFromObject(e.windSpeed, e.fromAPI.wind.speed.toFixed(1), "speed_interval")),
                                                (t.windSpeed2 = e.fromAPI.wind.speed.toFixed(1) + " " + this.params.textUnitWind)),
                                            e.windDirection && (t.windDirection = "" + this.getParentSelectorFromObject(e.windDirection, e.fromAPI.wind.deg, "deg_interval")),
                                            e.clouds && (t.clouds = "" + this.getParentSelectorFromObject(e.clouds, e.fromAPI.clouds.all, "min", "max")),
                                            (t.humidity = e.fromAPI.main.humidity + "%"),
                                            (t.pressure = e.fromAPI.main.pressure + " hPa"),
                                            (t.icon = "" + e.fromAPI.weather[0].icon),
                                            this.renderWidget(t);
                                    }
                                },
                            },
                            {
                                key: "renderWidget",
                                value: function (e) {
                                    for (var t in this.controls.cityName) this.controls.cityName.hasOwnProperty(t) && (this.controls.cityName[t].innerHTML = e.cityName);
                                    for (var n in this.controls.temperature)
                                        this.controls.temperature.hasOwnProperty(n) && (this.controls.temperature[n].innerHTML = e.temperature + "<span class='weather-left-card__degree'>" + this.params.textUnitTemp + "</span>");
                                    for (var r in this.controls.mainIconWeather)
                                        this.controls.mainIconWeather.hasOwnProperty(r) &&
                                            ((this.controls.mainIconWeather[r].src = this.getURLMainIcon(e.icon, !0)), (this.controls.mainIconWeather[r].alt = "Weather in " + (e.cityName ? e.cityName : "")));
                                    if (e.weather) for (var i in this.controls.naturalPhenomenon) this.controls.naturalPhenomenon.hasOwnProperty(i) && (this.controls.naturalPhenomenon[i].innerText = e.weather);
                                    if (e.windSpeed) for (var a in this.controls.windSpeed) this.controls.windSpeed.hasOwnProperty(a) && (this.controls.windSpeed[a].innerText = e.windSpeed);
                                    for (var o in this.controls.cityName2) this.controls.cityName2.hasOwnProperty(o) && (this.controls.cityName2[o].innerHTML = e.cityName);
                                    for (var s in this.controls.temperature2)
                                        this.controls.temperature2.hasOwnProperty(s) && this.controls.temperature2[s] && (this.controls.temperature2[s].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>"),
                                            this.controls.temperatureFeels.hasOwnProperty(s) && (this.controls.temperatureFeels[s].innerHTML = e.temperature + "<span>" + this.params.textUnitTemp + "</span>");
                                    for (var l in this.controls.temperatureMin)
                                        this.controls.temperatureMin.hasOwnProperty(l) && (this.controls.temperatureMin[l].innerHTML = e.temperatureMin + "<span>" + this.params.textUnitTemp + "</span>");
                                    for (var c in this.controls.temperatureMax)
                                        this.controls.temperatureMax.hasOwnProperty(c) && (this.controls.temperatureMax[c].innerHTML = e.temperatureMax + "<span>" + this.params.textUnitTemp + "</span>");
                                    if (e.weather) for (var d in this.controls.naturalPhenomenon2) this.controls.naturalPhenomenon2.hasOwnProperty(d) && (this.controls.naturalPhenomenon2[d].innerText = e.weather);
                                    if (e.windSpeed2) for (var u in this.controls.windSpeed2) this.controls.windSpeed2.hasOwnProperty(u) && (this.controls.windSpeed2[u].innerText = e.windSpeed2 + " " + (e.windDirection || ""));
                                    for (var h in this.controls.mainIconWeather2)
                                        this.controls.mainIconWeather2.hasOwnProperty(h) &&
                                            ((this.controls.mainIconWeather2[h].src = this.getURLMainIcon(e.icon, !0)), (this.controls.mainIconWeather2[h].alt = "Weather in " + (e.cityName ? e.cityName : "")));
                                    if (e.humidity) for (var p in this.controls.humidity) this.controls.humidity.hasOwnProperty(p) && (this.controls.humidity[p].innerText = e.humidity);
                                    if (e.pressure) for (var f in this.controls.pressure) this.controls.pressure.hasOwnProperty(f) && (this.controls.pressure[f].innerText = e.pressure);
                                    for (var g in this.controls.dateReport) this.controls.dateReport.hasOwnProperty(g) && (this.controls.dateReport[g].innerText = this.getTimeDateHHMMMonthDay());
                                    var m = this.controls.documentFragmentWidget.querySelector("#container-" + this.controls.containerWidget.id);
                                    m && ((this.controls.containerWidget.innerHTML = ""), this.controls.containerWidget.appendChild(m)),
                                        this.existGraphic && Object.keys(this.weather.forecastDaily).length > 0 && this.prepareDataForGraphic();
                                },
                            },
                            {
                                key: "prepareDataForGraphic",
                                value: function () {
                                    var e = this,
                                        t = [];
                                    return (
                                        this.weather.forecastDaily.list.forEach(function (n) {
                                            var r = e.getDayNameOfWeekByDayNumber(e.getNumberDayInWeekByUnixTime(n.dt)),
                                                i = new Date(1e3 * n.dt),
                                                a = new Date();
                                            t.push({
                                                min: Math.round(n.temp.min),
                                                max: Math.round(n.temp.max),
                                                day: i.getFullYear() === a.getFullYear() && i.getMonth() === a.getMonth() && i.getDate() === a.getDate() ? "Today" : r,
                                                icon: n.weather[0].icon,
                                                date: e.timestampToDateTime(n.dt),
                                                dt: n.dt,
                                            });
                                        }),
                                        this.drawGraphicD3(t.slice(0, 8))
                                    );
                                },
                            },
                            {
                                key: "renderIconsDaysOfWeek",
                                value: function (e) {
                                    var t = this,
                                        n = this.controls.calendar.querySelectorAll(".calendar__item");
                                    return (
                                        e.forEach(function (e, r) {
                                            var i = new Date(1e3 * e.dt);
                                            n[r].innerHTML =
                                                e.day +
                                                "<br>" +
                                                i.getDate() +
                                                " " +
                                                t.getMonthNameByMonthNumber(i.getMonth()) +
                                                '<img src="' +
                                                "https://openweathermap.org/img/w/" +
                                                e.icon +
                                                '.png" width="32" height="32" alt="' +
                                                e.day +
                                                '">';
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "getURLMainIcon",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = new Map();
                                    return t
                                        ? this.params.baseURL + "/img/widgets/" + e + ".png"
                                        : (n.set("01d", "01dbw"),
                                          n.set("02d", "02dbw"),
                                          n.set("03d", "03dbw"),
                                          n.set("03d", "03dbw"),
                                          n.set("04d", "04dbw"),
                                          n.set("05d", "05dbw"),
                                          n.set("06d", "06dbw"),
                                          n.set("07d", "07dbw"),
                                          n.set("08d", "08dbw"),
                                          n.set("09d", "09dbw"),
                                          n.set("10d", "10dbw"),
                                          n.set("11d", "11dbw"),
                                          n.set("13d", "13dbw"),
                                          n.set("01n", "01dbw"),
                                          n.set("02n", "02dbw"),
                                          n.set("03n", "03dbw"),
                                          n.set("03n", "03dbw"),
                                          n.set("04n", "04dbw"),
                                          n.set("05n", "05dbw"),
                                          n.set("06n", "06dbw"),
                                          n.set("07n", "07dbw"),
                                          n.set("08n", "08dbw"),
                                          n.set("09n", "09dbw"),
                                          n.set("10n", "10dbw"),
                                          n.set("11n", "11dbw"),
                                          n.set("13n", "13dbw"),
                                          n.get(e) ? this.params.baseURL + "/img/widgets/" + e + "img/" + n.get(e) + ".png" : "http://openweathermap.org/img/w/" + e + ".png");
                                },
                            },
                            {
                                key: "drawGraphicD3",
                                value: function (e) {
                                    this.renderIconsDaysOfWeek(e);
                                    var t = { id: "#graphic", data: e, offsetX: 15, offsetY: 10, width: 420, height: 79, rawData: [], margin: 10, colorPolilyne: "#333", fontSize: "12px", fontColor: "#333", strokeWidth: "1px" };
                                    if (1 === this.id) {
                                        var n = document.getElementById("graphic1");
                                        n && (n.querySelector("svg") && n.removeChild(n.querySelector("svg")), (t.id = "#graphic1"), (t.colorPolilyne = "#DDF730"));
                                    }
                                    if (11 === this.id) {
                                        var r = document.getElementById("graphic2");
                                        r && (r.querySelector("svg") && r.removeChild(r.querySelector("svg")), (t.id = "#graphic2"), (t.colorPolilyne = "#FEB020"));
                                    }
                                    if (21 === this.id) {
                                        var i = document.getElementById("graphic");
                                        i && i.querySelector("svg") && i.removeChild(i.querySelector("svg"));
                                    }
                                    if (31 === this.id) {
                                        var a = document.getElementById("graphic3");
                                        a && (a.querySelector("svg") && a.removeChild(a.querySelector("svg")), (t.id = "#graphic3"), (t.colorPolilyne = "#FEB020"));
                                    }
                                    new o.default(t).render();
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    this.getWeatherFromApi();
                                },
                            },
                        ]),
                        t
                    );
                })();
                n.default = u;
            },
            { "./custom-date": 1, "./data/natural-phenomenon-data": 2, "./data/wind-speed-data": 3, "./graphic-d3js": 5, "es6-promise": 9, jquery: 10 },
        ],
        8: [
            function (e, t, n) {
                var r, i, a, o;
                String.fromCodePoint ||
                    ((r = (function () {
                        try {
                            var e = {},
                                t = Object.defineProperty,
                                n = t(e, e, e) && t;
                        } catch (e) {}
                        return n;
                    })()),
                    (i = String.fromCharCode),
                    (a = Math.floor),
                    (o = function (e) {
                        var t,
                            n,
                            r = [],
                            o = -1,
                            s = arguments.length;
                        if (!s) return "";
                        for (var l = ""; ++o < s; ) {
                            var c = Number(arguments[o]);
                            if (!isFinite(c) || c < 0 || c > 1114111 || a(c) != c) throw RangeError("Invalid code point: " + c);
                            c <= 65535 ? r.push(c) : ((t = 55296 + ((c -= 65536) >> 10)), (n = (c % 1024) + 56320), r.push(t, n)), (o + 1 == s || r.length > 16384) && ((l += i.apply(null, r)), (r.length = 0));
                        }
                        return l;
                    }),
                    r ? r(String, "fromCodePoint", { value: o, configurable: !0, writable: !0 }) : (String.fromCodePoint = o));
            },
            {},
        ],
        9: [
            function (e, t, n) {
                (function (r, i) {
                    !(function (e, r) {
                        "object" == typeof n && void 0 !== t ? (t.exports = r()) : "function" == typeof define && define.amd ? define(r) : (e.ES6Promise = r());
                    })(this, function () {
                        "use strict";
                        function t(e) {
                            return "function" == typeof e;
                        }
                        var n = Array.isArray
                                ? Array.isArray
                                : function (e) {
                                      return "[object Array]" === Object.prototype.toString.call(e);
                                  },
                            a = 0,
                            o = void 0,
                            s = void 0,
                            l = function (e, t) {
                                (g[a] = e), (g[a + 1] = t), 2 === (a += 2) && (s ? s(m) : b());
                            };
                        var c = "undefined" != typeof window ? window : void 0,
                            d = c || {},
                            u = d.MutationObserver || d.WebKitMutationObserver,
                            h = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                            p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                        function f() {
                            var e = setTimeout;
                            return function () {
                                return e(m, 1);
                            };
                        }
                        var g = new Array(1e3);
                        function m() {
                            for (var e = 0; e < a; e += 2) {
                                (0, g[e])(g[e + 1]), (g[e] = void 0), (g[e + 1] = void 0);
                            }
                            a = 0;
                        }
                        var v,
                            w,
                            y,
                            _,
                            b = void 0;
                        function k(e, t) {
                            var n = this,
                                r = new this.constructor(S);
                            void 0 === r[T] && H(r);
                            var i = n._state;
                            if (i) {
                                var a = arguments[i - 1];
                                l(function () {
                                    return O(i, r, a, n._result);
                                });
                            } else M(n, r, e, t);
                            return r;
                        }
                        function x(e) {
                            if (e && "object" == typeof e && e.constructor === this) return e;
                            var t = new this(S);
                            return E(t, e), t;
                        }
                        h
                            ? (b = function () {
                                  return r.nextTick(m);
                              })
                            : u
                            ? ((w = 0),
                              (y = new u(m)),
                              (_ = document.createTextNode("")),
                              y.observe(_, { characterData: !0 }),
                              (b = function () {
                                  _.data = w = ++w % 2;
                              }))
                            : p
                            ? (((v = new MessageChannel()).port1.onmessage = m),
                              (b = function () {
                                  return v.port2.postMessage(0);
                              }))
                            : (b =
                                  void 0 === c && "function" == typeof e
                                      ? (function () {
                                            try {
                                                var e = Function("return this")().require("vertx");
                                                return void 0 !== (o = e.runOnLoop || e.runOnContext)
                                                    ? function () {
                                                          o(m);
                                                      }
                                                    : f();
                                            } catch (e) {
                                                return f();
                                            }
                                        })()
                                      : f());
                        var T = Math.random().toString(36).substring(2);
                        function S() {}
                        var j = void 0,
                            z = 1,
                            D = 2;
                        function C(e, n, r) {
                            n.constructor === e.constructor && r === k && n.constructor.resolve === x
                                ? (function (e, t) {
                                      t._state === z
                                          ? N(e, t._result)
                                          : t._state === D
                                          ? P(e, t._result)
                                          : M(
                                                t,
                                                void 0,
                                                function (t) {
                                                    return E(e, t);
                                                },
                                                function (t) {
                                                    return P(e, t);
                                                }
                                            );
                                  })(e, n)
                                : void 0 === r
                                ? N(e, n)
                                : t(r)
                                ? (function (e, t, n) {
                                      l(function (e) {
                                          var r = !1,
                                              i = (function (e, t, n, r) {
                                                  try {
                                                      e.call(t, n, r);
                                                  } catch (e) {
                                                      return e;
                                                  }
                                              })(
                                                  n,
                                                  t,
                                                  function (n) {
                                                      r || ((r = !0), t !== n ? E(e, n) : N(e, n));
                                                  },
                                                  function (t) {
                                                      r || ((r = !0), P(e, t));
                                                  },
                                                  e._label
                                              );
                                          !r && i && ((r = !0), P(e, i));
                                      }, e);
                                  })(e, n, r)
                                : N(e, n);
                        }
                        function E(e, t) {
                            if (e === t) P(e, new TypeError("You cannot resolve a promise with itself"));
                            else if (((i = typeof (r = t)), null === r || ("object" !== i && "function" !== i))) N(e, t);
                            else {
                                var n = void 0;
                                try {
                                    n = t.then;
                                } catch (t) {
                                    return void P(e, t);
                                }
                                C(e, t, n);
                            }
                            var r, i;
                        }
                        function A(e) {
                            e._onerror && e._onerror(e._result), L(e);
                        }
                        function N(e, t) {
                            e._state === j && ((e._result = t), (e._state = z), 0 !== e._subscribers.length && l(L, e));
                        }
                        function P(e, t) {
                            e._state === j && ((e._state = D), (e._result = t), l(A, e));
                        }
                        function M(e, t, n, r) {
                            var i = e._subscribers,
                                a = i.length;
                            (e._onerror = null), (i[a] = t), (i[a + z] = n), (i[a + D] = r), 0 === a && e._state && l(L, e);
                        }
                        function L(e) {
                            var t = e._subscribers,
                                n = e._state;
                            if (0 !== t.length) {
                                for (var r = void 0, i = void 0, a = e._result, o = 0; o < t.length; o += 3) (r = t[o]), (i = t[o + n]), r ? O(n, r, i, a) : i(a);
                                e._subscribers.length = 0;
                            }
                        }
                        function O(e, n, r, i) {
                            var a = t(r),
                                o = void 0,
                                s = void 0,
                                l = !0;
                            if (a) {
                                try {
                                    o = r(i);
                                } catch (e) {
                                    (l = !1), (s = e);
                                }
                                if (n === o) return void P(n, new TypeError("A promises callback cannot return that same promise."));
                            } else o = i;
                            n._state !== j || (a && l ? E(n, o) : !1 === l ? P(n, s) : e === z ? N(n, o) : e === D && P(n, o));
                        }
                        var q = 0;
                        function H(e) {
                            (e[T] = q++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
                        }
                        var B = (function () {
                            function e(e, t) {
                                (this._instanceConstructor = e),
                                    (this.promise = new e(S)),
                                    this.promise[T] || H(this.promise),
                                    n(t)
                                        ? ((this.length = t.length),
                                          (this._remaining = t.length),
                                          (this._result = new Array(this.length)),
                                          0 === this.length ? N(this.promise, this._result) : ((this.length = this.length || 0), this._enumerate(t), 0 === this._remaining && N(this.promise, this._result)))
                                        : P(this.promise, new Error("Array Methods must be provided an Array"));
                            }
                            return (
                                (e.prototype._enumerate = function (e) {
                                    for (var t = 0; this._state === j && t < e.length; t++) this._eachEntry(e[t], t);
                                }),
                                (e.prototype._eachEntry = function (e, t) {
                                    var n = this._instanceConstructor,
                                        r = n.resolve;
                                    if (r === x) {
                                        var i = void 0,
                                            a = void 0,
                                            o = !1;
                                        try {
                                            i = e.then;
                                        } catch (e) {
                                            (o = !0), (a = e);
                                        }
                                        if (i === k && e._state !== j) this._settledAt(e._state, t, e._result);
                                        else if ("function" != typeof i) this._remaining--, (this._result[t] = e);
                                        else if (n === F) {
                                            var s = new n(S);
                                            o ? P(s, a) : C(s, e, i), this._willSettleAt(s, t);
                                        } else
                                            this._willSettleAt(
                                                new n(function (t) {
                                                    return t(e);
                                                }),
                                                t
                                            );
                                    } else this._willSettleAt(r(e), t);
                                }),
                                (e.prototype._settledAt = function (e, t, n) {
                                    var r = this.promise;
                                    r._state === j && (this._remaining--, e === D ? P(r, n) : (this._result[t] = n)), 0 === this._remaining && N(r, this._result);
                                }),
                                (e.prototype._willSettleAt = function (e, t) {
                                    var n = this;
                                    M(
                                        e,
                                        void 0,
                                        function (e) {
                                            return n._settledAt(z, t, e);
                                        },
                                        function (e) {
                                            return n._settledAt(D, t, e);
                                        }
                                    );
                                }),
                                e
                            );
                        })();
                        var F = (function () {
                            function e(t) {
                                (this[T] = q++),
                                    (this._result = this._state = void 0),
                                    (this._subscribers = []),
                                    S !== t &&
                                        ("function" != typeof t &&
                                            (function () {
                                                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                                            })(),
                                        this instanceof e
                                            ? (function (e, t) {
                                                  try {
                                                      t(
                                                          function (t) {
                                                              E(e, t);
                                                          },
                                                          function (t) {
                                                              P(e, t);
                                                          }
                                                      );
                                                  } catch (t) {
                                                      P(e, t);
                                                  }
                                              })(this, t)
                                            : (function () {
                                                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                                              })());
                            }
                            return (
                                (e.prototype.catch = function (e) {
                                    return this.then(null, e);
                                }),
                                (e.prototype.finally = function (e) {
                                    var n = this.constructor;
                                    return t(e)
                                        ? this.then(
                                              function (t) {
                                                  return n.resolve(e()).then(function () {
                                                      return t;
                                                  });
                                              },
                                              function (t) {
                                                  return n.resolve(e()).then(function () {
                                                      throw t;
                                                  });
                                              }
                                          )
                                        : this.then(e, e);
                                }),
                                e
                            );
                        })();
                        return (
                            (F.prototype.then = k),
                            (F.all = function (e) {
                                return new B(this, e).promise;
                            }),
                            (F.race = function (e) {
                                var t = this;
                                return n(e)
                                    ? new t(function (n, r) {
                                          for (var i = e.length, a = 0; a < i; a++) t.resolve(e[a]).then(n, r);
                                      })
                                    : new t(function (e, t) {
                                          return t(new TypeError("You must pass an array to race."));
                                      });
                            }),
                            (F.resolve = x),
                            (F.reject = function (e) {
                                var t = new this(S);
                                return P(t, e), t;
                            }),
                            (F._setScheduler = function (e) {
                                s = e;
                            }),
                            (F._setAsap = function (e) {
                                l = e;
                            }),
                            (F._asap = l),
                            (F.polyfill = function () {
                                var e = void 0;
                                if (void 0 !== i) e = i;
                                else if ("undefined" != typeof self) e = self;
                                else
                                    try {
                                        e = Function("return this")();
                                    } catch (e) {
                                        throw new Error("polyfill failed because global object is unavailable in this environment");
                                    }
                                var t = e.Promise;
                                if (t) {
                                    var n = null;
                                    try {
                                        n = Object.prototype.toString.call(t.resolve());
                                    } catch (e) {}
                                    if ("[object Promise]" === n && !t.cast) return;
                                }
                                e.Promise = F;
                            }),
                            (F.Promise = F),
                            F
                        );
                    });
                }.call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
            },
            { _process: 11 },
        ],
        10: [
            function (e, t, n) {
                !(function (e, n) {
                    "use strict";
                    "object" == typeof t && "object" == typeof t.exports
                        ? (t.exports = e.document
                              ? n(e, !0)
                              : function (e) {
                                    if (!e.document) throw new Error("jQuery requires a window with a document");
                                    return n(e);
                                })
                        : n(e);
                })("undefined" != typeof window ? window : this, function (e, t) {
                    "use strict";
                    var n = [],
                        r = e.document,
                        i = Object.getPrototypeOf,
                        a = n.slice,
                        o = n.concat,
                        s = n.push,
                        l = n.indexOf,
                        c = {},
                        d = c.toString,
                        u = c.hasOwnProperty,
                        h = u.toString,
                        p = h.call(Object),
                        f = {},
                        g = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType;
                        },
                        m = function (e) {
                            return null != e && e === e.window;
                        },
                        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
                    function w(e, t, n) {
                        var i,
                            a,
                            o = (n = n || r).createElement("script");
                        if (((o.text = e), t)) for (i in v) (a = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, a);
                        n.head.appendChild(o).parentNode.removeChild(o);
                    }
                    function y(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[d.call(e)] || "object" : typeof e;
                    }
                    var _ = function (e, t) {
                            return new _.fn.init(e, t);
                        },
                        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    function k(e) {
                        var t = !!e && "length" in e && e.length,
                            n = y(e);
                        return !g(e) && !m(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                    }
                    (_.fn = _.prototype = {
                        jquery: "3.4.1",
                        constructor: _,
                        length: 0,
                        toArray: function () {
                            return a.call(this);
                        },
                        get: function (e) {
                            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
                        },
                        pushStack: function (e) {
                            var t = _.merge(this.constructor(), e);
                            return (t.prevObject = this), t;
                        },
                        each: function (e) {
                            return _.each(this, e);
                        },
                        map: function (e) {
                            return this.pushStack(
                                _.map(this, function (t, n) {
                                    return e.call(t, n, t);
                                })
                            );
                        },
                        slice: function () {
                            return this.pushStack(a.apply(this, arguments));
                        },
                        first: function () {
                            return this.eq(0);
                        },
                        last: function () {
                            return this.eq(-1);
                        },
                        eq: function (e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor();
                        },
                        push: s,
                        sort: n.sort,
                        splice: n.splice,
                    }),
                        (_.extend = _.fn.extend = function () {
                            var e,
                                t,
                                n,
                                r,
                                i,
                                a,
                                o = arguments[0] || {},
                                s = 1,
                                l = arguments.length,
                                c = !1;
                            for ("boolean" == typeof o && ((c = o), (o = arguments[s] || {}), s++), "object" == typeof o || g(o) || (o = {}), s === l && ((o = this), s--); s < l; s++)
                                if (null != (e = arguments[s]))
                                    for (t in e)
                                        (r = e[t]),
                                            "__proto__" !== t &&
                                                o !== r &&
                                                (c && r && (_.isPlainObject(r) || (i = Array.isArray(r)))
                                                    ? ((n = o[t]), (a = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {}), (i = !1), (o[t] = _.extend(c, a, r)))
                                                    : void 0 !== r && (o[t] = r));
                            return o;
                        }),
                        _.extend({
                            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (e) {
                                throw new Error(e);
                            },
                            noop: function () {},
                            isPlainObject: function (e) {
                                var t, n;
                                return !(!e || "[object Object]" !== d.call(e)) && (!(t = i(e)) || ("function" == typeof (n = u.call(t, "constructor") && t.constructor) && h.call(n) === p));
                            },
                            isEmptyObject: function (e) {
                                var t;
                                for (t in e) return !1;
                                return !0;
                            },
                            globalEval: function (e, t) {
                                w(e, { nonce: t && t.nonce });
                            },
                            each: function (e, t) {
                                var n,
                                    r = 0;
                                if (k(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                                return e;
                            },
                            trim: function (e) {
                                return null == e ? "" : (e + "").replace(b, "");
                            },
                            makeArray: function (e, t) {
                                var n = t || [];
                                return null != e && (k(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
                            },
                            inArray: function (e, t, n) {
                                return null == t ? -1 : l.call(t, e, n);
                            },
                            merge: function (e, t) {
                                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                                return (e.length = i), e;
                            },
                            grep: function (e, t, n) {
                                for (var r = [], i = 0, a = e.length, o = !n; i < a; i++) !t(e[i], i) !== o && r.push(e[i]);
                                return r;
                            },
                            map: function (e, t, n) {
                                var r,
                                    i,
                                    a = 0,
                                    s = [];
                                if (k(e)) for (r = e.length; a < r; a++) null != (i = t(e[a], a, n)) && s.push(i);
                                else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                                return o.apply([], s);
                            },
                            guid: 1,
                            support: f,
                        }),
                        "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]),
                        _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                            c["[object " + t + "]"] = t.toLowerCase();
                        });
                    var x = (function (e) {
                        var t,
                            n,
                            r,
                            i,
                            a,
                            o,
                            s,
                            l,
                            c,
                            d,
                            u,
                            h,
                            p,
                            f,
                            g,
                            m,
                            v,
                            w,
                            y,
                            _ = "sizzle" + 1 * new Date(),
                            b = e.document,
                            k = 0,
                            x = 0,
                            T = le(),
                            S = le(),
                            j = le(),
                            z = le(),
                            D = function (e, t) {
                                return e === t && (u = !0), 0;
                            },
                            C = {}.hasOwnProperty,
                            E = [],
                            A = E.pop,
                            N = E.push,
                            P = E.push,
                            M = E.slice,
                            L = function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            q = "[\\x20\\t\\r\\n\\f]",
                            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                            B = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]",
                            F = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
                            W = new RegExp(q + "+", "g"),
                            R = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                            I = new RegExp("^" + q + "*," + q + "*"),
                            G = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                            U = new RegExp(q + "|>"),
                            Y = new RegExp(F),
                            V = new RegExp("^" + H + "$"),
                            $ = {
                                ID: new RegExp("^#(" + H + ")"),
                                CLASS: new RegExp("^\\.(" + H + ")"),
                                TAG: new RegExp("^(" + H + "|[*])"),
                                ATTR: new RegExp("^" + B),
                                PSEUDO: new RegExp("^" + F),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + O + ")$", "i"),
                                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i"),
                            },
                            X = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            Q = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
                            ne = function (e, t, n) {
                                var r = "0x" + t - 65536;
                                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
                            },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ie = function (e, t) {
                                return t ? ("\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                            },
                            ae = function () {
                                h();
                            },
                            oe = _e(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            P.apply((E = M.call(b.childNodes)), b.childNodes), E[b.childNodes.length].nodeType;
                        } catch (e) {
                            P = {
                                apply: E.length
                                    ? function (e, t) {
                                          N.apply(e, M.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function se(e, t, r, i) {
                            var a,
                                s,
                                c,
                                d,
                                u,
                                f,
                                v,
                                w = t && t.ownerDocument,
                                k = t ? t.nodeType : 9;
                            if (((r = r || []), "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))) return r;
                            if (!i && ((t ? t.ownerDocument || t : b) !== p && h(t), (t = t || p), g)) {
                                if (11 !== k && (u = Z.exec(e)))
                                    if ((a = u[1])) {
                                        if (9 === k) {
                                            if (!(c = t.getElementById(a))) return r;
                                            if (c.id === a) return r.push(c), r;
                                        } else if (w && (c = w.getElementById(a)) && y(t, c) && c.id === a) return r.push(c), r;
                                    } else {
                                        if (u[2]) return P.apply(r, t.getElementsByTagName(e)), r;
                                        if ((a = u[3]) && n.getElementsByClassName && t.getElementsByClassName) return P.apply(r, t.getElementsByClassName(a)), r;
                                    }
                                if (n.qsa && !z[e + " "] && (!m || !m.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
                                    if (((v = e), (w = t), 1 === k && U.test(e))) {
                                        for ((d = t.getAttribute("id")) ? (d = d.replace(re, ie)) : t.setAttribute("id", (d = _)), s = (f = o(e)).length; s--; ) f[s] = "#" + d + " " + ye(f[s]);
                                        (v = f.join(",")), (w = (ee.test(e) && ve(t.parentNode)) || t);
                                    }
                                    try {
                                        return P.apply(r, w.querySelectorAll(v)), r;
                                    } catch (t) {
                                        z(e, !0);
                                    } finally {
                                        d === _ && t.removeAttribute("id");
                                    }
                                }
                            }
                            return l(e.replace(R, "$1"), t, r, i);
                        }
                        function le() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                            };
                        }
                        function ce(e) {
                            return (e[_] = !0), e;
                        }
                        function de(e) {
                            var t = p.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function ue(e, t) {
                            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
                        }
                        function he(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function pe(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        }
                        function fe(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        }
                        function ge(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function me(e) {
                            return ce(function (t) {
                                return (
                                    (t = +t),
                                    ce(function (n, r) {
                                        for (var i, a = e([], n.length, t), o = a.length; o--; ) n[(i = a[o])] && (n[i] = !(r[i] = n[i]));
                                    })
                                );
                            });
                        }
                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = se.support = {}),
                        (a = se.isXML = function (e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !X.test(t || (n && n.nodeName) || "HTML");
                        }),
                        (h = se.setDocument = function (e) {
                            var t,
                                i,
                                o = e ? e.ownerDocument || e : b;
                            return o !== p && 9 === o.nodeType && o.documentElement
                                ? ((f = (p = o).documentElement),
                                  (g = !a(p)),
                                  b !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ae, !1) : i.attachEvent && i.attachEvent("onunload", ae)),
                                  (n.attributes = de(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = de(function (e) {
                                      return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = Q.test(p.getElementsByClassName)),
                                  (n.getById = de(function (e) {
                                      return (f.appendChild(e).id = _), !p.getElementsByName || !p.getElementsByName(_).length;
                                  })),
                                  n.getById
                                      ? ((r.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (r.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((r.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (r.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n,
                                                    r,
                                                    i,
                                                    a = t.getElementById(e);
                                                if (a) {
                                                    if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                                    for (i = t.getElementsByName(e), r = 0; (a = i[r++]); ) if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                                }
                                                return [];
                                            }
                                        })),
                                  (r.find.TAG = n.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                r = [],
                                                i = 0,
                                                a = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = a[i++]); ) 1 === n.nodeType && r.push(n);
                                                return r;
                                            }
                                            return a;
                                        }),
                                  (r.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                      }),
                                  (v = []),
                                  (m = []),
                                  (n.qsa = Q.test(p.querySelectorAll)) &&
                                      (de(function (e) {
                                          (f.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + q + "*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || m.push("\\[" + q + "*(?:value|" + O + ")"),
                                              e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="),
                                              e.querySelectorAll(":checked").length || m.push(":checked"),
                                              e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]");
                                      }),
                                      de(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = p.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && m.push("name" + q + "*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                              (f.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              m.push(",.*:");
                                      })),
                                  (n.matchesSelector = Q.test((w = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                                      de(function (e) {
                                          (n.disconnectedMatch = w.call(e, "*")), w.call(e, "[s!='']:x"), v.push("!=", F);
                                      }),
                                  (m = m.length && new RegExp(m.join("|"))),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (t = Q.test(f.compareDocumentPosition)),
                                  (y =
                                      t || Q.test(f.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    r = t && t.parentNode;
                                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  (D = t
                                      ? function (e, t) {
                                            if (e === t) return (u = !0), 0;
                                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                r ||
                                                (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                                    ? e === p || (e.ownerDocument === b && y(b, e))
                                                        ? -1
                                                        : t === p || (t.ownerDocument === b && y(b, t))
                                                        ? 1
                                                        : d
                                                        ? L(d, e) - L(d, t)
                                                        : 0
                                                    : 4 & r
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (u = !0), 0;
                                            var n,
                                                r = 0,
                                                i = e.parentNode,
                                                a = t.parentNode,
                                                o = [e],
                                                s = [t];
                                            if (!i || !a) return e === p ? -1 : t === p ? 1 : i ? -1 : a ? 1 : d ? L(d, e) - L(d, t) : 0;
                                            if (i === a) return he(e, t);
                                            for (n = e; (n = n.parentNode); ) o.unshift(n);
                                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                                            for (; o[r] === s[r]; ) r++;
                                            return r ? he(o[r], s[r]) : o[r] === b ? -1 : s[r] === b ? 1 : 0;
                                        }),
                                  p)
                                : p;
                        }),
                        (se.matches = function (e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function (e, t) {
                            if (((e.ownerDocument || e) !== p && h(e), n.matchesSelector && g && !z[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                                try {
                                    var r = w.call(e, t);
                                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                } catch (e) {
                                    z(t, !0);
                                }
                            return se(t, p, null, [e]).length > 0;
                        }),
                        (se.contains = function (e, t) {
                            return (e.ownerDocument || e) !== p && h(e), y(e, t);
                        }),
                        (se.attr = function (e, t) {
                            (e.ownerDocument || e) !== p && h(e);
                            var i = r.attrHandle[t.toLowerCase()],
                                a = i && C.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== a ? a : n.attributes || !g ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
                        }),
                        (se.escape = function (e) {
                            return (e + "").replace(re, ie);
                        }),
                        (se.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (se.uniqueSort = function (e) {
                            var t,
                                r = [],
                                i = 0,
                                a = 0;
                            if (((u = !n.detectDuplicates), (d = !n.sortStable && e.slice(0)), e.sort(D), u)) {
                                for (; (t = e[a++]); ) t === e[a] && (i = r.push(a));
                                for (; i--; ) e.splice(r[i], 1);
                            }
                            return (d = null), e;
                        }),
                        (i = se.getText = function (e) {
                            var t,
                                n = "",
                                r = 0,
                                a = e.nodeType;
                            if (a) {
                                if (1 === a || 9 === a || 11 === a) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                                } else if (3 === a || 4 === a) return e.nodeValue;
                            } else for (; (t = e[r++]); ) n += i(t);
                            return n;
                        }),
                        ((r = se.selectors = {
                            cacheLength: 50,
                            createPseudo: ce,
                            match: $,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return $.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && Y.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = T[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) &&
                                            T(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (r) {
                                        var i = se.attr(r, e);
                                        return null == i
                                            ? "!=" === t
                                            : !t ||
                                                  ((i += ""),
                                                  "=" === t
                                                      ? i === n
                                                      : "!=" === t
                                                      ? i !== n
                                                      : "^=" === t
                                                      ? n && 0 === i.indexOf(n)
                                                      : "*=" === t
                                                      ? n && i.indexOf(n) > -1
                                                      : "$=" === t
                                                      ? n && i.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                                                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, r, i) {
                                    var a = "nth" !== e.slice(0, 3),
                                        o = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, l) {
                                              var c,
                                                  d,
                                                  u,
                                                  h,
                                                  p,
                                                  f,
                                                  g = a !== o ? "nextSibling" : "previousSibling",
                                                  m = t.parentNode,
                                                  v = s && t.nodeName.toLowerCase(),
                                                  w = !l && !s,
                                                  y = !1;
                                              if (m) {
                                                  if (a) {
                                                      for (; g; ) {
                                                          for (h = t; (h = h[g]); ) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                          f = g = "only" === e && !f && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((f = [o ? m.firstChild : m.lastChild]), o && w)) {
                                                      for (
                                                          y = (p = (c = (d = (u = (h = m)[_] || (h[_] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === k && c[1]) && c[2], h = p && m.childNodes[p];
                                                          (h = (++p && h && h[g]) || (y = p = 0) || f.pop());

                                                      )
                                                          if (1 === h.nodeType && ++y && h === t) {
                                                              d[e] = [k, p, y];
                                                              break;
                                                          }
                                                  } else if ((w && (y = p = (c = (d = (u = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === k && c[1]), !1 === y))
                                                      for (
                                                          ;
                                                          (h = (++p && h && h[g]) || (y = p = 0) || f.pop()) &&
                                                          ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++y || (w && ((d = (u = h[_] || (h[_] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [k, y]), h !== t));

                                                      );
                                                  return (y -= i) === r || (y % r == 0 && y / r >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return i[_]
                                        ? i(t)
                                        : i.length > 1
                                        ? ((n = [e, e, "", t]),
                                          r.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? ce(function (e, n) {
                                                    for (var r, a = i(e, t), o = a.length; o--; ) e[(r = L(e, a[o]))] = !(n[r] = a[o]);
                                                })
                                              : function (e) {
                                                    return i(e, 0, n);
                                                })
                                        : i;
                                },
                            },
                            pseudos: {
                                not: ce(function (e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace(R, "$1"));
                                    return r[_]
                                        ? ce(function (e, t, n, i) {
                                              for (var a, o = r(e, null, i, []), s = e.length; s--; ) (a = o[s]) && (e[s] = !(t[s] = a));
                                          })
                                        : function (e, i, a) {
                                              return (t[0] = e), r(t, null, a, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: ce(function (e) {
                                    return function (t) {
                                        return se(e, t).length > 0;
                                    };
                                }),
                                contains: ce(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || i(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: ce(function (e) {
                                    return (
                                        V.test(e || "") || se.error("unsupported lang: " + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === f;
                                },
                                focus: function (e) {
                                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !r.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return J.test(e.nodeName);
                                },
                                input: function (e) {
                                    return K.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: me(function () {
                                    return [0];
                                }),
                                last: me(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: me(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: me(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: me(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: me(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                    return e;
                                }),
                                gt: me(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                    return e;
                                }),
                            },
                        }).pseudos.nth = r.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            r.pseudos[t] = pe(t);
                        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = fe(t);
                        function we() {}
                        function ye(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r;
                        }
                        function _e(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                a = i || r,
                                o = n && "parentNode" === a,
                                s = x++;
                            return t.first
                                ? function (t, n, i) {
                                      for (; (t = t[r]); ) if (1 === t.nodeType || o) return e(t, n, i);
                                      return !1;
                                  }
                                : function (t, n, l) {
                                      var c,
                                          d,
                                          u,
                                          h = [k, s];
                                      if (l) {
                                          for (; (t = t[r]); ) if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                                      } else
                                          for (; (t = t[r]); )
                                              if (1 === t.nodeType || o)
                                                  if (((d = (u = t[_] || (t[_] = {}))[t.uniqueID] || (u[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                                  else {
                                                      if ((c = d[a]) && c[0] === k && c[1] === s) return (h[2] = c[2]);
                                                      if (((d[a] = h), (h[2] = e(t, n, l)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function be(e) {
                            return e.length > 1
                                ? function (t, n, r) {
                                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function ke(e, t, n, r, i) {
                            for (var a, o = [], s = 0, l = e.length, c = null != t; s < l; s++) (a = e[s]) && ((n && !n(a, r, i)) || (o.push(a), c && t.push(s)));
                            return o;
                        }
                        function xe(e, t, n, r, i, a) {
                            return (
                                r && !r[_] && (r = xe(r)),
                                i && !i[_] && (i = xe(i, a)),
                                ce(function (a, o, s, l) {
                                    var c,
                                        d,
                                        u,
                                        h = [],
                                        p = [],
                                        f = o.length,
                                        g =
                                            a ||
                                            (function (e, t, n) {
                                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                                return n;
                                            })(t || "*", s.nodeType ? [s] : s, []),
                                        m = !e || (!a && t) ? g : ke(g, h, e, s, l),
                                        v = n ? (i || (a ? e : f || r) ? [] : o) : m;
                                    if ((n && n(m, v, s, l), r)) for (c = ke(v, p), r(c, [], s, l), d = c.length; d--; ) (u = c[d]) && (v[p[d]] = !(m[p[d]] = u));
                                    if (a) {
                                        if (i || e) {
                                            if (i) {
                                                for (c = [], d = v.length; d--; ) (u = v[d]) && c.push((m[d] = u));
                                                i(null, (v = []), c, l);
                                            }
                                            for (d = v.length; d--; ) (u = v[d]) && (c = i ? L(a, u) : h[d]) > -1 && (a[c] = !(o[c] = u));
                                        }
                                    } else (v = ke(v === o ? v.splice(f, v.length) : v)), i ? i(null, o, v, l) : P.apply(o, v);
                                })
                            );
                        }
                        function Te(e) {
                            for (
                                var t,
                                    n,
                                    i,
                                    a = e.length,
                                    o = r.relative[e[0].type],
                                    s = o || r.relative[" "],
                                    l = o ? 1 : 0,
                                    d = _e(
                                        function (e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    u = _e(
                                        function (e) {
                                            return L(t, e) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    h = [
                                        function (e, n, r) {
                                            var i = (!o && (r || n !== c)) || ((t = n).nodeType ? d(e, n, r) : u(e, n, r));
                                            return (t = null), i;
                                        },
                                    ];
                                l < a;
                                l++
                            )
                                if ((n = r.relative[e[l].type])) h = [_e(be(h), n)];
                                else {
                                    if ((n = r.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                        for (i = ++l; i < a && !r.relative[e[i].type]; i++);
                                        return xe(
                                            l > 1 && be(h),
                                            l > 1 && ye(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(R, "$1"),
                                            n,
                                            l < i && Te(e.slice(l, i)),
                                            i < a && Te((e = e.slice(i))),
                                            i < a && ye(e)
                                        );
                                    }
                                    h.push(n);
                                }
                            return be(h);
                        }
                        return (
                            (we.prototype = r.filters = r.pseudos),
                            (r.setFilters = new we()),
                            (o = se.tokenize = function (e, t) {
                                var n,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l,
                                    c,
                                    d = S[e + " "];
                                if (d) return t ? 0 : d.slice(0);
                                for (s = e, l = [], c = r.preFilter; s; ) {
                                    for (o in ((n && !(i = I.exec(s))) || (i && (s = s.slice(i[0].length) || s), l.push((a = []))),
                                    (n = !1),
                                    (i = G.exec(s)) && ((n = i.shift()), a.push({ value: n, type: i[0].replace(R, " ") }), (s = s.slice(n.length))),
                                    r.filter))
                                        !(i = $[o].exec(s)) || (c[o] && !(i = c[o](i))) || ((n = i.shift()), a.push({ value: n, type: o, matches: i }), (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? s.length : s ? se.error(e) : S(e, l).slice(0);
                            }),
                            (s = se.compile = function (e, t) {
                                var n,
                                    i = [],
                                    a = [],
                                    s = j[e + " "];
                                if (!s) {
                                    for (t || (t = o(e)), n = t.length; n--; ) (s = Te(t[n]))[_] ? i.push(s) : a.push(s);
                                    (s = j(
                                        e,
                                        (function (e, t) {
                                            var n = t.length > 0,
                                                i = e.length > 0,
                                                a = function (a, o, s, l, d) {
                                                    var u,
                                                        f,
                                                        m,
                                                        v = 0,
                                                        w = "0",
                                                        y = a && [],
                                                        _ = [],
                                                        b = c,
                                                        x = a || (i && r.find.TAG("*", d)),
                                                        T = (k += null == b ? 1 : Math.random() || 0.1),
                                                        S = x.length;
                                                    for (d && (c = o === p || o || d); w !== S && null != (u = x[w]); w++) {
                                                        if (i && u) {
                                                            for (f = 0, o || u.ownerDocument === p || (h(u), (s = !g)); (m = e[f++]); )
                                                                if (m(u, o || p, s)) {
                                                                    l.push(u);
                                                                    break;
                                                                }
                                                            d && (k = T);
                                                        }
                                                        n && ((u = !m && u) && v--, a && y.push(u));
                                                    }
                                                    if (((v += w), n && w !== v)) {
                                                        for (f = 0; (m = t[f++]); ) m(y, _, o, s);
                                                        if (a) {
                                                            if (v > 0) for (; w--; ) y[w] || _[w] || (_[w] = A.call(l));
                                                            _ = ke(_);
                                                        }
                                                        P.apply(l, _), d && !a && _.length > 0 && v + t.length > 1 && se.uniqueSort(l);
                                                    }
                                                    return d && ((k = T), (c = b)), y;
                                                };
                                            return n ? ce(a) : a;
                                        })(a, i)
                                    )).selector = e;
                                }
                                return s;
                            }),
                            (l = se.select = function (e, t, n, i) {
                                var a,
                                    l,
                                    c,
                                    d,
                                    u,
                                    h = "function" == typeof e && e,
                                    p = !i && o((e = h.selector || e));
                                if (((n = n || []), 1 === p.length)) {
                                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && r.relative[l[1].type]) {
                                        if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                        h && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                                    }
                                    for (a = $.needsContext.test(e) ? 0 : l.length; a-- && ((c = l[a]), !r.relative[(d = c.type)]); )
                                        if ((u = r.find[d]) && (i = u(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                                            if ((l.splice(a, 1), !(e = i.length && ye(l)))) return P.apply(n, i), n;
                                            break;
                                        }
                                }
                                return (h || s(e, p))(i, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = _.split("").sort(D).join("") === _),
                            (n.detectDuplicates = !!u),
                            h(),
                            (n.sortDetached = de(function (e) {
                                return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
                            })),
                            de(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                ue("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                de(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                ue("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            de(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                ue(O, function (e, t, n) {
                                    var r;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                                }),
                            se
                        );
                    })(e);
                    (_.find = x), (_.expr = x.selectors), (_.expr[":"] = _.expr.pseudos), (_.uniqueSort = _.unique = x.uniqueSort), (_.text = x.getText), (_.isXMLDoc = x.isXML), (_.contains = x.contains), (_.escapeSelector = x.escape);
                    var T = function (e, t, n) {
                            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                if (1 === e.nodeType) {
                                    if (i && _(e).is(n)) break;
                                    r.push(e);
                                }
                            return r;
                        },
                        S = function (e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n;
                        },
                        j = _.expr.match.needsContext;
                    function z(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    }
                    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function C(e, t, n) {
                        return g(t)
                            ? _.grep(e, function (e, r) {
                                  return !!t.call(e, r, e) !== n;
                              })
                            : t.nodeType
                            ? _.grep(e, function (e) {
                                  return (e === t) !== n;
                              })
                            : "string" != typeof t
                            ? _.grep(e, function (e) {
                                  return l.call(t, e) > -1 !== n;
                              })
                            : _.filter(t, e, n);
                    }
                    (_.filter = function (e, t, n) {
                        var r = t[0];
                        return (
                            n && (e = ":not(" + e + ")"),
                            1 === t.length && 1 === r.nodeType
                                ? _.find.matchesSelector(r, e)
                                    ? [r]
                                    : []
                                : _.find.matches(
                                      e,
                                      _.grep(t, function (e) {
                                          return 1 === e.nodeType;
                                      })
                                  )
                        );
                    }),
                        _.fn.extend({
                            find: function (e) {
                                var t,
                                    n,
                                    r = this.length,
                                    i = this;
                                if ("string" != typeof e)
                                    return this.pushStack(
                                        _(e).filter(function () {
                                            for (t = 0; t < r; t++) if (_.contains(i[t], this)) return !0;
                                        })
                                    );
                                for (n = this.pushStack([]), t = 0; t < r; t++) _.find(e, i[t], n);
                                return r > 1 ? _.uniqueSort(n) : n;
                            },
                            filter: function (e) {
                                return this.pushStack(C(this, e || [], !1));
                            },
                            not: function (e) {
                                return this.pushStack(C(this, e || [], !0));
                            },
                            is: function (e) {
                                return !!C(this, "string" == typeof e && j.test(e) ? _(e) : e || [], !1).length;
                            },
                        });
                    var E,
                        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    ((_.fn.init = function (e, t, n) {
                        var i, a;
                        if (!e) return this;
                        if (((n = n || E), "string" == typeof e)) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : A.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (((t = t instanceof _ ? t[0] : t), _.merge(this, _.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(i[1]) && _.isPlainObject(t)))
                                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this;
                            }
                            return (a = r.getElementById(i[2])) && ((this[0] = a), (this.length = 1)), this;
                        }
                        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(_)) : _.makeArray(e, this);
                    }).prototype = _.fn),
                        (E = _(r));
                    var N = /^(?:parents|prev(?:Until|All))/,
                        P = { children: !0, contents: !0, next: !0, prev: !0 };
                    function M(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType; );
                        return e;
                    }
                    _.fn.extend({
                        has: function (e) {
                            var t = _(e, this),
                                n = t.length;
                            return this.filter(function () {
                                for (var e = 0; e < n; e++) if (_.contains(this, t[e])) return !0;
                            });
                        },
                        closest: function (e, t) {
                            var n,
                                r = 0,
                                i = this.length,
                                a = [],
                                o = "string" != typeof e && _(e);
                            if (!j.test(e))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                                            a.push(n);
                                            break;
                                        }
                            return this.pushStack(a.length > 1 ? _.uniqueSort(a) : a);
                        },
                        index: function (e) {
                            return e ? ("string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function (e, t) {
                            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))));
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                        },
                    }),
                        _.each(
                            {
                                parent: function (e) {
                                    var t = e.parentNode;
                                    return t && 11 !== t.nodeType ? t : null;
                                },
                                parents: function (e) {
                                    return T(e, "parentNode");
                                },
                                parentsUntil: function (e, t, n) {
                                    return T(e, "parentNode", n);
                                },
                                next: function (e) {
                                    return M(e, "nextSibling");
                                },
                                prev: function (e) {
                                    return M(e, "previousSibling");
                                },
                                nextAll: function (e) {
                                    return T(e, "nextSibling");
                                },
                                prevAll: function (e) {
                                    return T(e, "previousSibling");
                                },
                                nextUntil: function (e, t, n) {
                                    return T(e, "nextSibling", n);
                                },
                                prevUntil: function (e, t, n) {
                                    return T(e, "previousSibling", n);
                                },
                                siblings: function (e) {
                                    return S((e.parentNode || {}).firstChild, e);
                                },
                                children: function (e) {
                                    return S(e.firstChild);
                                },
                                contents: function (e) {
                                    return void 0 !== e.contentDocument ? e.contentDocument : (z(e, "template") && (e = e.content || e), _.merge([], e.childNodes));
                                },
                            },
                            function (e, t) {
                                _.fn[e] = function (n, r) {
                                    var i = _.map(this, t, n);
                                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (P[e] || _.uniqueSort(i), N.test(e) && i.reverse()), this.pushStack(i);
                                };
                            }
                        );
                    var L = /[^\x20\t\r\n\f]+/g;
                    function O(e) {
                        return e;
                    }
                    function q(e) {
                        throw e;
                    }
                    function H(e, t, n, r) {
                        var i;
                        try {
                            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                        } catch (e) {
                            n.apply(void 0, [e]);
                        }
                    }
                    (_.Callbacks = function (e) {
                        e =
                            "string" == typeof e
                                ? (function (e) {
                                      var t = {};
                                      return (
                                          _.each(e.match(L) || [], function (e, n) {
                                              t[n] = !0;
                                          }),
                                          t
                                      );
                                  })(e)
                                : _.extend({}, e);
                        var t,
                            n,
                            r,
                            i,
                            a = [],
                            o = [],
                            s = -1,
                            l = function () {
                                for (i = i || e.once, r = t = !0; o.length; s = -1) for (n = o.shift(); ++s < a.length; ) !1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = a.length), (n = !1));
                                e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
                            },
                            c = {
                                add: function () {
                                    return (
                                        a &&
                                            (n && !t && ((s = a.length - 1), o.push(n)),
                                            (function t(n) {
                                                _.each(n, function (n, r) {
                                                    g(r) ? (e.unique && c.has(r)) || a.push(r) : r && r.length && "string" !== y(r) && t(r);
                                                });
                                            })(arguments),
                                            n && !t && l()),
                                        this
                                    );
                                },
                                remove: function () {
                                    return (
                                        _.each(arguments, function (e, t) {
                                            for (var n; (n = _.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= s && s--;
                                        }),
                                        this
                                    );
                                },
                                has: function (e) {
                                    return e ? _.inArray(e, a) > -1 : a.length > 0;
                                },
                                empty: function () {
                                    return a && (a = []), this;
                                },
                                disable: function () {
                                    return (i = o = []), (a = n = ""), this;
                                },
                                disabled: function () {
                                    return !a;
                                },
                                lock: function () {
                                    return (i = o = []), n || t || (a = n = ""), this;
                                },
                                locked: function () {
                                    return !!i;
                                },
                                fireWith: function (e, n) {
                                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), o.push(n), t || l()), this;
                                },
                                fire: function () {
                                    return c.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!r;
                                },
                            };
                        return c;
                    }),
                        _.extend({
                            Deferred: function (t) {
                                var n = [
                                        ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                                        ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                                        ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"],
                                    ],
                                    r = "pending",
                                    i = {
                                        state: function () {
                                            return r;
                                        },
                                        always: function () {
                                            return a.done(arguments).fail(arguments), this;
                                        },
                                        catch: function (e) {
                                            return i.then(null, e);
                                        },
                                        pipe: function () {
                                            var e = arguments;
                                            return _.Deferred(function (t) {
                                                _.each(n, function (n, r) {
                                                    var i = g(e[r[4]]) && e[r[4]];
                                                    a[r[1]](function () {
                                                        var e = i && i.apply(this, arguments);
                                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                                    });
                                                }),
                                                    (e = null);
                                            }).promise();
                                        },
                                        then: function (t, r, i) {
                                            var a = 0;
                                            function o(t, n, r, i) {
                                                return function () {
                                                    var s = this,
                                                        l = arguments,
                                                        c = function () {
                                                            var e, c;
                                                            if (!(t < a)) {
                                                                if ((e = r.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                                (c = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                                    g(c)
                                                                        ? i
                                                                            ? c.call(e, o(a, n, O, i), o(a, n, q, i))
                                                                            : (a++, c.call(e, o(a, n, O, i), o(a, n, q, i), o(a, n, O, n.notifyWith)))
                                                                        : (r !== O && ((s = void 0), (l = [e])), (i || n.resolveWith)(s, l));
                                                            }
                                                        },
                                                        d = i
                                                            ? c
                                                            : function () {
                                                                  try {
                                                                      c();
                                                                  } catch (e) {
                                                                      _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== q && ((s = void 0), (l = [e])), n.rejectWith(s, l));
                                                                  }
                                                              };
                                                    t ? d() : (_.Deferred.getStackHook && (d.stackTrace = _.Deferred.getStackHook()), e.setTimeout(d));
                                                };
                                            }
                                            return _.Deferred(function (e) {
                                                n[0][3].add(o(0, e, g(i) ? i : O, e.notifyWith)), n[1][3].add(o(0, e, g(t) ? t : O)), n[2][3].add(o(0, e, g(r) ? r : q));
                                            }).promise();
                                        },
                                        promise: function (e) {
                                            return null != e ? _.extend(e, i) : i;
                                        },
                                    },
                                    a = {};
                                return (
                                    _.each(n, function (e, t) {
                                        var o = t[2],
                                            s = t[5];
                                        (i[t[1]] = o.add),
                                            s &&
                                                o.add(
                                                    function () {
                                                        r = s;
                                                    },
                                                    n[3 - e][2].disable,
                                                    n[3 - e][3].disable,
                                                    n[0][2].lock,
                                                    n[0][3].lock
                                                ),
                                            o.add(t[3].fire),
                                            (a[t[0]] = function () {
                                                return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                                            }),
                                            (a[t[0] + "With"] = o.fireWith);
                                    }),
                                    i.promise(a),
                                    t && t.call(a, a),
                                    a
                                );
                            },
                            when: function (e) {
                                var t = arguments.length,
                                    n = t,
                                    r = Array(n),
                                    i = a.call(arguments),
                                    o = _.Deferred(),
                                    s = function (e) {
                                        return function (n) {
                                            (r[e] = this), (i[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(r, i);
                                        };
                                    };
                                if (t <= 1 && (H(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || g(i[n] && i[n].then))) return o.then();
                                for (; n--; ) H(i[n], s(n), o.reject);
                                return o.promise();
                            },
                        });
                    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    (_.Deferred.exceptionHook = function (t, n) {
                        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
                    }),
                        (_.readyException = function (t) {
                            e.setTimeout(function () {
                                throw t;
                            });
                        });
                    var F = _.Deferred();
                    function W() {
                        r.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), _.ready();
                    }
                    (_.fn.ready = function (e) {
                        return (
                            F.then(e).catch(function (e) {
                                _.readyException(e);
                            }),
                            this
                        );
                    }),
                        _.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (e) {
                                (!0 === e ? --_.readyWait : _.isReady) || ((_.isReady = !0), (!0 !== e && --_.readyWait > 0) || F.resolveWith(r, [_]));
                            },
                        }),
                        (_.ready.then = F.then),
                        "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(_.ready) : (r.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
                    var R = function (e, t, n, r, i, a, o) {
                            var s = 0,
                                l = e.length,
                                c = null == n;
                            if ("object" === y(n)) for (s in ((i = !0), n)) R(e, t, s, n[s], !0, a, o);
                            else if (
                                void 0 !== r &&
                                ((i = !0),
                                g(r) || (o = !0),
                                c &&
                                    (o
                                        ? (t.call(e, r), (t = null))
                                        : ((c = t),
                                          (t = function (e, t, n) {
                                              return c.call(_(e), n);
                                          }))),
                                t)
                            )
                                for (; s < l; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
                            return i ? e : c ? t.call(e) : l ? t(e[0], n) : a;
                        },
                        I = /^-ms-/,
                        G = /-([a-z])/g;
                    function U(e, t) {
                        return t.toUpperCase();
                    }
                    function Y(e) {
                        return e.replace(I, "ms-").replace(G, U);
                    }
                    var V = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                    };
                    function $() {
                        this.expando = _.expando + $.uid++;
                    }
                    ($.uid = 1),
                        ($.prototype = {
                            cache: function (e) {
                                var t = e[this.expando];
                                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                            },
                            set: function (e, t, n) {
                                var r,
                                    i = this.cache(e);
                                if ("string" == typeof t) i[Y(t)] = n;
                                else for (r in t) i[Y(r)] = t[r];
                                return i;
                            },
                            get: function (e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)];
                            },
                            access: function (e, t, n) {
                                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                            },
                            remove: function (e, t) {
                                var n,
                                    r = e[this.expando];
                                if (void 0 !== r) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in r ? [t] : t.match(L) || []).length;
                                        for (; n--; ) delete r[t[n]];
                                    }
                                    (void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                }
                            },
                            hasData: function (e) {
                                var t = e[this.expando];
                                return void 0 !== t && !_.isEmptyObject(t);
                            },
                        });
                    var X = new $(),
                        K = new $(),
                        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        Q = /[A-Z]/g;
                    function Z(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (((r = "data-" + t.replace(Q, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                                try {
                                    n = (function (e) {
                                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e));
                                    })(n);
                                } catch (e) {}
                                K.set(e, t, n);
                            } else n = void 0;
                        return n;
                    }
                    _.extend({
                        hasData: function (e) {
                            return K.hasData(e) || X.hasData(e);
                        },
                        data: function (e, t, n) {
                            return K.access(e, t, n);
                        },
                        removeData: function (e, t) {
                            K.remove(e, t);
                        },
                        _data: function (e, t, n) {
                            return X.access(e, t, n);
                        },
                        _removeData: function (e, t) {
                            X.remove(e, t);
                        },
                    }),
                        _.fn.extend({
                            data: function (e, t) {
                                var n,
                                    r,
                                    i,
                                    a = this[0],
                                    o = a && a.attributes;
                                if (void 0 === e) {
                                    if (this.length && ((i = K.get(a)), 1 === a.nodeType && !X.get(a, "hasDataAttrs"))) {
                                        for (n = o.length; n--; ) o[n] && 0 === (r = o[n].name).indexOf("data-") && ((r = Y(r.slice(5))), Z(a, r, i[r]));
                                        X.set(a, "hasDataAttrs", !0);
                                    }
                                    return i;
                                }
                                return "object" == typeof e
                                    ? this.each(function () {
                                          K.set(this, e);
                                      })
                                    : R(
                                          this,
                                          function (t) {
                                              var n;
                                              if (a && void 0 === t) return void 0 !== (n = K.get(a, e)) ? n : void 0 !== (n = Z(a, e)) ? n : void 0;
                                              this.each(function () {
                                                  K.set(this, e, t);
                                              });
                                          },
                                          null,
                                          t,
                                          arguments.length > 1,
                                          null,
                                          !0
                                      );
                            },
                            removeData: function (e) {
                                return this.each(function () {
                                    K.remove(this, e);
                                });
                            },
                        }),
                        _.extend({
                            queue: function (e, t, n) {
                                var r;
                                if (e) return (t = (t || "fx") + "queue"), (r = X.get(e, t)), n && (!r || Array.isArray(n) ? (r = X.access(e, t, _.makeArray(n))) : r.push(n)), r || [];
                            },
                            dequeue: function (e, t) {
                                t = t || "fx";
                                var n = _.queue(e, t),
                                    r = n.length,
                                    i = n.shift(),
                                    a = _._queueHooks(e, t);
                                "inprogress" === i && ((i = n.shift()), r--),
                                    i &&
                                        ("fx" === t && n.unshift("inprogress"),
                                        delete a.stop,
                                        i.call(
                                            e,
                                            function () {
                                                _.dequeue(e, t);
                                            },
                                            a
                                        )),
                                    !r && a && a.empty.fire();
                            },
                            _queueHooks: function (e, t) {
                                var n = t + "queueHooks";
                                return (
                                    X.get(e, n) ||
                                    X.access(e, n, {
                                        empty: _.Callbacks("once memory").add(function () {
                                            X.remove(e, [t + "queue", n]);
                                        }),
                                    })
                                );
                            },
                        }),
                        _.fn.extend({
                            queue: function (e, t) {
                                var n = 2;
                                return (
                                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                                    arguments.length < n
                                        ? _.queue(this[0], e)
                                        : void 0 === t
                                        ? this
                                        : this.each(function () {
                                              var n = _.queue(this, e, t);
                                              _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e);
                                          })
                                );
                            },
                            dequeue: function (e) {
                                return this.each(function () {
                                    _.dequeue(this, e);
                                });
                            },
                            clearQueue: function (e) {
                                return this.queue(e || "fx", []);
                            },
                            promise: function (e, t) {
                                var n,
                                    r = 1,
                                    i = _.Deferred(),
                                    a = this,
                                    o = this.length,
                                    s = function () {
                                        --r || i.resolveWith(a, [a]);
                                    };
                                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (n = X.get(a[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                                return s(), i.promise(t);
                            },
                        });
                    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                        ne = ["Top", "Right", "Bottom", "Left"],
                        re = r.documentElement,
                        ie = function (e) {
                            return _.contains(e.ownerDocument, e);
                        },
                        ae = { composed: !0 };
                    re.getRootNode &&
                        (ie = function (e) {
                            return _.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
                        });
                    var oe = function (e, t) {
                            return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === _.css(e, "display"));
                        },
                        se = function (e, t, n, r) {
                            var i,
                                a,
                                o = {};
                            for (a in t) (o[a] = e.style[a]), (e.style[a] = t[a]);
                            for (a in ((i = n.apply(e, r || [])), t)) e.style[a] = o[a];
                            return i;
                        };
                    function le(e, t, n, r) {
                        var i,
                            a,
                            o = 20,
                            s = r
                                ? function () {
                                      return r.cur();
                                  }
                                : function () {
                                      return _.css(e, t, "");
                                  },
                            l = s(),
                            c = (n && n[3]) || (_.cssNumber[t] ? "" : "px"),
                            d = e.nodeType && (_.cssNumber[t] || ("px" !== c && +l)) && te.exec(_.css(e, t));
                        if (d && d[3] !== c) {
                            for (l /= 2, c = c || d[3], d = +l || 1; o--; ) _.style(e, t, d + c), (1 - a) * (1 - (a = s() / l || 0.5)) <= 0 && (o = 0), (d /= a);
                            (d *= 2), _.style(e, t, d + c), (n = n || []);
                        }
                        return n && ((d = +d || +l || 0), (i = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = c), (r.start = d), (r.end = i))), i;
                    }
                    var ce = {};
                    function de(e) {
                        var t,
                            n = e.ownerDocument,
                            r = e.nodeName,
                            i = ce[r];
                        return i || ((t = n.body.appendChild(n.createElement(r))), (i = _.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (ce[r] = i), i);
                    }
                    function ue(e, t) {
                        for (var n, r, i = [], a = 0, o = e.length; a < o; a++)
                            (r = e[a]).style &&
                                ((n = r.style.display),
                                t ? ("none" === n && ((i[a] = X.get(r, "display") || null), i[a] || (r.style.display = "")), "" === r.style.display && oe(r) && (i[a] = de(r))) : "none" !== n && ((i[a] = "none"), X.set(r, "display", n)));
                        for (a = 0; a < o; a++) null != i[a] && (e[a].style.display = i[a]);
                        return e;
                    }
                    _.fn.extend({
                        show: function () {
                            return ue(this, !0);
                        },
                        hide: function () {
                            return ue(this);
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e
                                ? e
                                    ? this.show()
                                    : this.hide()
                                : this.each(function () {
                                      oe(this) ? _(this).show() : _(this).hide();
                                  });
                        },
                    });
                    var he = /^(?:checkbox|radio)$/i,
                        pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        fe = /^$|^module$|\/(?:java|ecma)script/i,
                        ge = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""],
                        };
                    function me(e, t) {
                        var n;
                        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && z(e, t)) ? _.merge([e], n) : n;
                    }
                    function ve(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
                    }
                    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
                    var we,
                        ye,
                        _e = /<|&#?\w+;/;
                    function be(e, t, n, r, i) {
                        for (var a, o, s, l, c, d, u = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                            if ((a = e[p]) || 0 === a)
                                if ("object" === y(a)) _.merge(h, a.nodeType ? [a] : a);
                                else if (_e.test(a)) {
                                    for (o = o || u.appendChild(t.createElement("div")), s = (pe.exec(a) || ["", ""])[1].toLowerCase(), l = ge[s] || ge._default, o.innerHTML = l[1] + _.htmlPrefilter(a) + l[2], d = l[0]; d--; )
                                        o = o.lastChild;
                                    _.merge(h, o.childNodes), ((o = u.firstChild).textContent = "");
                                } else h.push(t.createTextNode(a));
                        for (u.textContent = "", p = 0; (a = h[p++]); )
                            if (r && _.inArray(a, r) > -1) i && i.push(a);
                            else if (((c = ie(a)), (o = me(u.appendChild(a), "script")), c && ve(o), n)) for (d = 0; (a = o[d++]); ) fe.test(a.type || "") && n.push(a);
                        return u;
                    }
                    (we = r.createDocumentFragment().appendChild(r.createElement("div"))),
                        (ye = r.createElement("input")).setAttribute("type", "radio"),
                        ye.setAttribute("checked", "checked"),
                        ye.setAttribute("name", "t"),
                        we.appendChild(ye),
                        (f.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (we.innerHTML = "<textarea>x</textarea>"),
                        (f.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue);
                    var ke = /^key/,
                        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        Te = /^([^.]*)(?:\.(.+)|)/;
                    function Se() {
                        return !0;
                    }
                    function je() {
                        return !1;
                    }
                    function ze(e, t) {
                        return (
                            (e ===
                                (function () {
                                    try {
                                        return r.activeElement;
                                    } catch (e) {}
                                })()) ==
                            ("focus" === t)
                        );
                    }
                    function De(e, t, n, r, i, a) {
                        var o, s;
                        if ("object" == typeof t) {
                            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) De(e, s, n, r, t[s], a);
                            return e;
                        }
                        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = je;
                        else if (!i) return e;
                        return (
                            1 === a &&
                                ((o = i),
                                ((i = function (e) {
                                    return _().off(e), o.apply(this, arguments);
                                }).guid = o.guid || (o.guid = _.guid++))),
                            e.each(function () {
                                _.event.add(this, t, i, r, n);
                            })
                        );
                    }
                    function Ce(e, t, n) {
                        n
                            ? (X.set(e, t, !1),
                              _.event.add(e, t, {
                                  namespace: !1,
                                  handler: function (e) {
                                      var r,
                                          i,
                                          o = X.get(this, t);
                                      if (1 & e.isTrigger && this[t]) {
                                          if (o.length) (_.event.special[t] || {}).delegateType && e.stopPropagation();
                                          else if (((o = a.call(arguments)), X.set(this, t, o), (r = n(this, t)), this[t](), o !== (i = X.get(this, t)) || r ? X.set(this, t, !1) : (i = {}), o !== i))
                                              return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                                      } else o.length && (X.set(this, t, { value: _.event.trigger(_.extend(o[0], _.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                                  },
                              }))
                            : void 0 === X.get(e, t) && _.event.add(e, t, Se);
                    }
                    (_.event = {
                        global: {},
                        add: function (e, t, n, r, i) {
                            var a,
                                o,
                                s,
                                l,
                                c,
                                d,
                                u,
                                h,
                                p,
                                f,
                                g,
                                m = X.get(e);
                            if (m)
                                for (
                                    n.handler && ((n = (a = n).handler), (i = a.selector)),
                                        i && _.find.matchesSelector(re, i),
                                        n.guid || (n.guid = _.guid++),
                                        (l = m.events) || (l = m.events = {}),
                                        (o = m.handle) ||
                                            (o = m.handle = function (t) {
                                                return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0;
                                            }),
                                        c = (t = (t || "").match(L) || [""]).length;
                                    c--;

                                )
                                    (p = g = (s = Te.exec(t[c]) || [])[1]),
                                        (f = (s[2] || "").split(".").sort()),
                                        p &&
                                            ((u = _.event.special[p] || {}),
                                            (p = (i ? u.delegateType : u.bindType) || p),
                                            (u = _.event.special[p] || {}),
                                            (d = _.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && _.expr.match.needsContext.test(i), namespace: f.join(".") }, a)),
                                            (h = l[p]) || (((h = l[p] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(e, r, f, o)) || (e.addEventListener && e.addEventListener(p, o))),
                                            u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                                            i ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                                            (_.event.global[p] = !0));
                        },
                        remove: function (e, t, n, r, i) {
                            var a,
                                o,
                                s,
                                l,
                                c,
                                d,
                                u,
                                h,
                                p,
                                f,
                                g,
                                m = X.hasData(e) && X.get(e);
                            if (m && (l = m.events)) {
                                for (c = (t = (t || "").match(L) || [""]).length; c--; )
                                    if (((p = g = (s = Te.exec(t[c]) || [])[1]), (f = (s[2] || "").split(".").sort()), p)) {
                                        for (u = _.event.special[p] || {}, h = l[(p = (r ? u.delegateType : u.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--; )
                                            (d = h[a]),
                                                (!i && g !== d.origType) ||
                                                    (n && n.guid !== d.guid) ||
                                                    (s && !s.test(d.namespace)) ||
                                                    (r && r !== d.selector && ("**" !== r || !d.selector)) ||
                                                    (h.splice(a, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                                        o && !h.length && ((u.teardown && !1 !== u.teardown.call(e, f, m.handle)) || _.removeEvent(e, p, m.handle), delete l[p]);
                                    } else for (p in l) _.event.remove(e, p + t[c], n, r, !0);
                                _.isEmptyObject(l) && X.remove(e, "handle events");
                            }
                        },
                        dispatch: function (e) {
                            var t,
                                n,
                                r,
                                i,
                                a,
                                o,
                                s = _.event.fix(e),
                                l = new Array(arguments.length),
                                c = (X.get(this, "events") || {})[s.type] || [],
                                d = _.event.special[s.type] || {};
                            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                            if (((s.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, s))) {
                                for (o = _.event.handlers.call(this, s, c), t = 0; (i = o[t++]) && !s.isPropagationStopped(); )
                                    for (s.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                        (s.rnamespace && !1 !== a.namespace && !s.rnamespace.test(a.namespace)) ||
                                            ((s.handleObj = a),
                                            (s.data = a.data),
                                            void 0 !== (r = ((_.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                                return d.postDispatch && d.postDispatch.call(this, s), s.result;
                            }
                        },
                        handlers: function (e, t) {
                            var n,
                                r,
                                i,
                                a,
                                o,
                                s = [],
                                l = t.delegateCount,
                                c = e.target;
                            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                                for (; c !== this; c = c.parentNode || this)
                                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                        for (a = [], o = {}, n = 0; n < l; n++) void 0 === o[(i = (r = t[n]).selector + " ")] && (o[i] = r.needsContext ? _(i, this).index(c) > -1 : _.find(i, this, null, [c]).length), o[i] && a.push(r);
                                        a.length && s.push({ elem: c, handlers: a });
                                    }
                            return (c = this), l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s;
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(_.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: g(t)
                                    ? function () {
                                          if (this.originalEvent) return t(this.originalEvent);
                                      }
                                    : function () {
                                          if (this.originalEvent) return this.originalEvent[e];
                                      },
                                set: function (t) {
                                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                },
                            });
                        },
                        fix: function (e) {
                            return e[_.expando] ? e : new _.Event(e);
                        },
                        special: {
                            load: { noBubble: !0 },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return he.test(t.type) && t.click && z(t, "input") && Ce(t, "click", Se), !1;
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return he.test(t.type) && t.click && z(t, "input") && Ce(t, "click"), !0;
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return (he.test(t.type) && t.click && z(t, "input") && X.get(t, "click")) || z(t, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                },
                            },
                        },
                    }),
                        (_.removeEvent = function (e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n);
                        }),
                        (_.Event = function (e, t) {
                            if (!(this instanceof _.Event)) return new _.Event(e, t);
                            e && e.type
                                ? ((this.originalEvent = e),
                                  (this.type = e.type),
                                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Se : je),
                                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                  (this.currentTarget = e.currentTarget),
                                  (this.relatedTarget = e.relatedTarget))
                                : (this.type = e),
                                t && _.extend(this, t),
                                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                                (this[_.expando] = !0);
                        }),
                        (_.Event.prototype = {
                            constructor: _.Event,
                            isDefaultPrevented: je,
                            isPropagationStopped: je,
                            isImmediatePropagationStopped: je,
                            isSimulated: !1,
                            preventDefault: function () {
                                var e = this.originalEvent;
                                (this.isDefaultPrevented = Se), e && !this.isSimulated && e.preventDefault();
                            },
                            stopPropagation: function () {
                                var e = this.originalEvent;
                                (this.isPropagationStopped = Se), e && !this.isSimulated && e.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var e = this.originalEvent;
                                (this.isImmediatePropagationStopped = Se), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                            },
                        }),
                        _.each(
                            {
                                altKey: !0,
                                bubbles: !0,
                                cancelable: !0,
                                changedTouches: !0,
                                ctrlKey: !0,
                                detail: !0,
                                eventPhase: !0,
                                metaKey: !0,
                                pageX: !0,
                                pageY: !0,
                                shiftKey: !0,
                                view: !0,
                                char: !0,
                                code: !0,
                                charCode: !0,
                                key: !0,
                                keyCode: !0,
                                button: !0,
                                buttons: !0,
                                clientX: !0,
                                clientY: !0,
                                offsetX: !0,
                                offsetY: !0,
                                pointerId: !0,
                                pointerType: !0,
                                screenX: !0,
                                screenY: !0,
                                targetTouches: !0,
                                toElement: !0,
                                touches: !0,
                                which: function (e) {
                                    var t = e.button;
                                    return null == e.which && ke.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && xe.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                                },
                            },
                            _.event.addProp
                        ),
                        _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            _.event.special[e] = {
                                setup: function () {
                                    return Ce(this, e, ze), !1;
                                },
                                trigger: function () {
                                    return Ce(this, e), !0;
                                },
                                delegateType: t,
                            };
                        }),
                        _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                            _.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var n,
                                        r = e.relatedTarget,
                                        i = e.handleObj;
                                    return (r && (r === this || _.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                                },
                            };
                        }),
                        _.fn.extend({
                            on: function (e, t, n, r) {
                                return De(this, e, t, n, r);
                            },
                            one: function (e, t, n, r) {
                                return De(this, e, t, n, r, 1);
                            },
                            off: function (e, t, n) {
                                var r, i;
                                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                                if ("object" == typeof e) {
                                    for (i in e) this.off(i, t, e[i]);
                                    return this;
                                }
                                return (
                                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                    !1 === n && (n = je),
                                    this.each(function () {
                                        _.event.remove(this, e, n, t);
                                    })
                                );
                            },
                        });
                    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                        Ae = /<script|<style|<link/i,
                        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function Me(e, t) {
                        return (z(e, "table") && z(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0]) || e;
                    }
                    function Le(e) {
                        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                    }
                    function Oe(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                    }
                    function qe(e, t) {
                        var n, r, i, a, o, s, l, c;
                        if (1 === t.nodeType) {
                            if (X.hasData(e) && ((a = X.access(e)), (o = X.set(t, a)), (c = a.events))) for (i in (delete o.handle, (o.events = {}), c)) for (n = 0, r = c[i].length; n < r; n++) _.event.add(t, i, c[i][n]);
                            K.hasData(e) && ((s = K.access(e)), (l = _.extend({}, s)), K.set(t, l));
                        }
                    }
                    function He(e, t, n, r) {
                        t = o.apply([], t);
                        var i,
                            a,
                            s,
                            l,
                            c,
                            d,
                            u = 0,
                            h = e.length,
                            p = h - 1,
                            m = t[0],
                            v = g(m);
                        if (v || (h > 1 && "string" == typeof m && !f.checkClone && Ne.test(m)))
                            return e.each(function (i) {
                                var a = e.eq(i);
                                v && (t[0] = m.call(this, i, a.html())), He(a, t, n, r);
                            });
                        if (h && ((a = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = a), a || r)) {
                            for (l = (s = _.map(me(i, "script"), Le)).length; u < h; u++) (c = i), u !== p && ((c = _.clone(c, !0, !0)), l && _.merge(s, me(c, "script"))), n.call(e[u], c, u);
                            if (l)
                                for (d = s[s.length - 1].ownerDocument, _.map(s, Oe), u = 0; u < l; u++)
                                    (c = s[u]),
                                        fe.test(c.type || "") &&
                                            !X.access(c, "globalEval") &&
                                            _.contains(d, c) &&
                                            (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }) : w(c.textContent.replace(Pe, ""), c, d));
                        }
                        return e;
                    }
                    function Be(e, t, n) {
                        for (var r, i = t ? _.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || _.cleanData(me(r)), r.parentNode && (n && ie(r) && ve(me(r, "script")), r.parentNode.removeChild(r));
                        return e;
                    }
                    _.extend({
                        htmlPrefilter: function (e) {
                            return e.replace(Ee, "<$1></$2>");
                        },
                        clone: function (e, t, n) {
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l,
                                c,
                                d = e.cloneNode(!0),
                                u = ie(e);
                            if (!(f.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || _.isXMLDoc(e)))
                                for (o = me(d), r = 0, i = (a = me(e)).length; r < i; r++)
                                    (s = a[r]), (l = o[r]), (c = void 0), "input" === (c = l.nodeName.toLowerCase()) && he.test(s.type) ? (l.checked = s.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = s.defaultValue);
                            if (t)
                                if (n) for (a = a || me(e), o = o || me(d), r = 0, i = a.length; r < i; r++) qe(a[r], o[r]);
                                else qe(e, d);
                            return (o = me(d, "script")).length > 0 && ve(o, !u && me(e, "script")), d;
                        },
                        cleanData: function (e) {
                            for (var t, n, r, i = _.event.special, a = 0; void 0 !== (n = e[a]); a++)
                                if (V(n)) {
                                    if ((t = n[X.expando])) {
                                        if (t.events) for (r in t.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                                        n[X.expando] = void 0;
                                    }
                                    n[K.expando] && (n[K.expando] = void 0);
                                }
                        },
                    }),
                        _.fn.extend({
                            detach: function (e) {
                                return Be(this, e, !0);
                            },
                            remove: function (e) {
                                return Be(this, e);
                            },
                            text: function (e) {
                                return R(
                                    this,
                                    function (e) {
                                        return void 0 === e
                                            ? _.text(this)
                                            : this.empty().each(function () {
                                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                              });
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return He(this, arguments, function (e) {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Me(this, e).appendChild(e);
                                });
                            },
                            prepend: function () {
                                return He(this, arguments, function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = Me(this, e);
                                        t.insertBefore(e, t.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return He(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this);
                                });
                            },
                            after: function () {
                                return He(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                });
                            },
                            empty: function () {
                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), (e.textContent = ""));
                                return this;
                            },
                            clone: function (e, t) {
                                return (
                                    (e = null != e && e),
                                    (t = null == t ? e : t),
                                    this.map(function () {
                                        return _.clone(this, e, t);
                                    })
                                );
                            },
                            html: function (e) {
                                return R(
                                    this,
                                    function (e) {
                                        var t = this[0] || {},
                                            n = 0,
                                            r = this.length;
                                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                        if ("string" == typeof e && !Ae.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                            e = _.htmlPrefilter(e);
                                            try {
                                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), (t.innerHTML = e));
                                                t = 0;
                                            } catch (e) {}
                                        }
                                        t && this.empty().append(e);
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var e = [];
                                return He(
                                    this,
                                    arguments,
                                    function (t) {
                                        var n = this.parentNode;
                                        _.inArray(this, e) < 0 && (_.cleanData(me(this)), n && n.replaceChild(t, this));
                                    },
                                    e
                                );
                            },
                        }),
                        _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                            _.fn[e] = function (e) {
                                for (var n, r = [], i = _(e), a = i.length - 1, o = 0; o <= a; o++) (n = o === a ? this : this.clone(!0)), _(i[o])[t](n), s.apply(r, n.get());
                                return this.pushStack(r);
                            };
                        });
                    var Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                        We = function (t) {
                            var n = t.ownerDocument.defaultView;
                            return (n && n.opener) || (n = e), n.getComputedStyle(t);
                        },
                        Re = new RegExp(ne.join("|"), "i");
                    function Ie(e, t, n) {
                        var r,
                            i,
                            a,
                            o,
                            s = e.style;
                        return (
                            (n = n || We(e)) &&
                                ("" !== (o = n.getPropertyValue(t) || n[t]) || ie(e) || (o = _.style(e, t)),
                                !f.pixelBoxStyles() &&
                                    Fe.test(o) &&
                                    Re.test(t) &&
                                    ((r = s.width), (i = s.minWidth), (a = s.maxWidth), (s.minWidth = s.maxWidth = s.width = o), (o = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = a))),
                            void 0 !== o ? o + "" : o
                        );
                    }
                    function Ge(e, t) {
                        return {
                            get: function () {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get;
                            },
                        };
                    }
                    !(function () {
                        function t() {
                            if (d) {
                                (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                    (d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                    re.appendChild(c).appendChild(d);
                                var t = e.getComputedStyle(d);
                                (i = "1%" !== t.top),
                                    (l = 12 === n(t.marginLeft)),
                                    (d.style.right = "60%"),
                                    (s = 36 === n(t.right)),
                                    (a = 36 === n(t.width)),
                                    (d.style.position = "absolute"),
                                    (o = 12 === n(d.offsetWidth / 3)),
                                    re.removeChild(c),
                                    (d = null);
                            }
                        }
                        function n(e) {
                            return Math.round(parseFloat(e));
                        }
                        var i,
                            a,
                            o,
                            s,
                            l,
                            c = r.createElement("div"),
                            d = r.createElement("div");
                        d.style &&
                            ((d.style.backgroundClip = "content-box"),
                            (d.cloneNode(!0).style.backgroundClip = ""),
                            (f.clearCloneStyle = "content-box" === d.style.backgroundClip),
                            _.extend(f, {
                                boxSizingReliable: function () {
                                    return t(), a;
                                },
                                pixelBoxStyles: function () {
                                    return t(), s;
                                },
                                pixelPosition: function () {
                                    return t(), i;
                                },
                                reliableMarginLeft: function () {
                                    return t(), l;
                                },
                                scrollboxSize: function () {
                                    return t(), o;
                                },
                            }));
                    })();
                    var Ue = ["Webkit", "Moz", "ms"],
                        Ye = r.createElement("div").style,
                        Ve = {};
                    function $e(e) {
                        var t = _.cssProps[e] || Ve[e];
                        return (
                            t ||
                            (e in Ye
                                ? e
                                : (Ve[e] =
                                      (function (e) {
                                          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Ye) return e;
                                      })(e) || e))
                        );
                    }
                    var Xe = /^(none|table(?!-c[ea]).+)/,
                        Ke = /^--/,
                        Je = { position: "absolute", visibility: "hidden", display: "block" },
                        Qe = { letterSpacing: "0", fontWeight: "400" };
                    function Ze(e, t, n) {
                        var r = te.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                    }
                    function et(e, t, n, r, i, a) {
                        var o = "width" === t ? 1 : 0,
                            s = 0,
                            l = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; o < 4; o += 2)
                            "margin" === n && (l += _.css(e, n + ne[o], !0, i)),
                                r
                                    ? ("content" === n && (l -= _.css(e, "padding" + ne[o], !0, i)), "margin" !== n && (l -= _.css(e, "border" + ne[o] + "Width", !0, i)))
                                    : ((l += _.css(e, "padding" + ne[o], !0, i)), "padding" !== n ? (l += _.css(e, "border" + ne[o] + "Width", !0, i)) : (s += _.css(e, "border" + ne[o] + "Width", !0, i)));
                        return !r && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - 0.5)) || 0), l;
                    }
                    function tt(e, t, n) {
                        var r = We(e),
                            i = (!f.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r),
                            a = i,
                            o = Ie(e, t, r),
                            s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Fe.test(o)) {
                            if (!n) return o;
                            o = "auto";
                        }
                        return (
                            ((!f.boxSizingReliable() && i) || "auto" === o || (!parseFloat(o) && "inline" === _.css(e, "display", !1, r))) &&
                                e.getClientRects().length &&
                                ((i = "border-box" === _.css(e, "boxSizing", !1, r)), (a = s in e) && (o = e[s])),
                            (o = parseFloat(o) || 0) + et(e, t, n || (i ? "border" : "content"), a, r, o) + "px"
                        );
                    }
                    function nt(e, t, n, r, i) {
                        return new nt.prototype.init(e, t, n, r, i);
                    }
                    _.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = Ie(e, "opacity");
                                        return "" === n ? "1" : n;
                                    }
                                },
                            },
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                        },
                        cssProps: {},
                        style: function (e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i,
                                    a,
                                    o,
                                    s = Y(t),
                                    l = Ke.test(t),
                                    c = e.style;
                                if ((l || (t = $e(s)), (o = _.cssHooks[t] || _.cssHooks[s]), void 0 === n)) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : c[t];
                                "string" === (a = typeof n) && (i = te.exec(n)) && i[1] && ((n = le(e, t, i)), (a = "number")),
                                    null != n &&
                                        n == n &&
                                        ("number" !== a || l || (n += (i && i[3]) || (_.cssNumber[s] ? "" : "px")),
                                        f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                        (o && "set" in o && void 0 === (n = o.set(e, n, r))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                            }
                        },
                        css: function (e, t, n, r) {
                            var i,
                                a,
                                o,
                                s = Y(t);
                            return (
                                Ke.test(t) || (t = $e(s)),
                                (o = _.cssHooks[t] || _.cssHooks[s]) && "get" in o && (i = o.get(e, !0, n)),
                                void 0 === i && (i = Ie(e, t, r)),
                                "normal" === i && t in Qe && (i = Qe[t]),
                                "" === n || n ? ((a = parseFloat(i)), !0 === n || isFinite(a) ? a || 0 : i) : i
                            );
                        },
                    }),
                        _.each(["height", "width"], function (e, t) {
                            _.cssHooks[t] = {
                                get: function (e, n, r) {
                                    if (n)
                                        return !Xe.test(_.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                            ? tt(e, t, r)
                                            : se(e, Je, function () {
                                                  return tt(e, t, r);
                                              });
                                },
                                set: function (e, n, r) {
                                    var i,
                                        a = We(e),
                                        o = !f.scrollboxSize() && "absolute" === a.position,
                                        s = (o || r) && "border-box" === _.css(e, "boxSizing", !1, a),
                                        l = r ? et(e, t, r, s, a) : 0;
                                    return (
                                        s && o && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - et(e, t, "border", !1, a) - 0.5)),
                                        l && (i = te.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = _.css(e, t))),
                                        Ze(0, n, l)
                                    );
                                },
                            };
                        }),
                        (_.cssHooks.marginLeft = Ge(f.reliableMarginLeft, function (e, t) {
                            if (t)
                                return (
                                    (parseFloat(Ie(e, "marginLeft")) ||
                                        e.getBoundingClientRect().left -
                                            se(e, { marginLeft: 0 }, function () {
                                                return e.getBoundingClientRect().left;
                                            })) + "px"
                                );
                        })),
                        _.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                            (_.cssHooks[e + t] = {
                                expand: function (n) {
                                    for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = a[r] || a[r - 2] || a[0];
                                    return i;
                                },
                            }),
                                "margin" !== e && (_.cssHooks[e + t].set = Ze);
                        }),
                        _.fn.extend({
                            css: function (e, t) {
                                return R(
                                    this,
                                    function (e, t, n) {
                                        var r,
                                            i,
                                            a = {},
                                            o = 0;
                                        if (Array.isArray(t)) {
                                            for (r = We(e), i = t.length; o < i; o++) a[t[o]] = _.css(e, t[o], !1, r);
                                            return a;
                                        }
                                        return void 0 !== n ? _.style(e, t, n) : _.css(e, t);
                                    },
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                        }),
                        (_.Tween = nt),
                        (nt.prototype = {
                            constructor: nt,
                            init: function (e, t, n, r, i, a) {
                                (this.elem = e), (this.prop = n), (this.easing = i || _.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = a || (_.cssNumber[n] ? "" : "px"));
                            },
                            cur: function () {
                                var e = nt.propHooks[this.prop];
                                return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
                            },
                            run: function (e) {
                                var t,
                                    n = nt.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                    (this.now = (this.end - this.start) * t + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                                    this
                                );
                            },
                        }),
                        (nt.prototype.init.prototype = nt.prototype),
                        (nt.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                },
                                set: function (e) {
                                    _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!_.cssHooks[e.prop] && null == e.elem.style[$e(e.prop)]) ? (e.elem[e.prop] = e.now) : _.style(e.elem, e.prop, e.now + e.unit);
                                },
                            },
                        }),
                        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                            set: function (e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                            },
                        }),
                        (_.easing = {
                            linear: function (e) {
                                return e;
                            },
                            swing: function (e) {
                                return 0.5 - Math.cos(e * Math.PI) / 2;
                            },
                            _default: "swing",
                        }),
                        (_.fx = nt.prototype.init),
                        (_.fx.step = {});
                    var rt,
                        it,
                        at = /^(?:toggle|show|hide)$/,
                        ot = /queueHooks$/;
                    function st() {
                        it && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, _.fx.interval), _.fx.tick());
                    }
                    function lt() {
                        return (
                            e.setTimeout(function () {
                                rt = void 0;
                            }),
                            (rt = Date.now())
                        );
                    }
                    function ct(e, t) {
                        var n,
                            r = 0,
                            i = { height: e };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i;
                    }
                    function dt(e, t, n) {
                        for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, o = i.length; a < o; a++) if ((r = i[a].call(n, t, e))) return r;
                    }
                    function ut(e, t, n) {
                        var r,
                            i,
                            a = 0,
                            o = ut.prefilters.length,
                            s = _.Deferred().always(function () {
                                delete l.elem;
                            }),
                            l = function () {
                                if (i) return !1;
                                for (var t = rt || lt(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), a = 0, o = c.tweens.length; a < o; a++) c.tweens[a].run(r);
                                return s.notifyWith(e, [c, r, n]), r < 1 && o ? n : (o || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1);
                            },
                            c = s.promise({
                                elem: e,
                                props: _.extend({}, t),
                                opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: rt || lt(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (t, n) {
                                    var r = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                    return c.tweens.push(r), r;
                                },
                                stop: function (t) {
                                    var n = 0,
                                        r = t ? c.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this;
                                },
                            }),
                            d = c.props;
                        for (
                            !(function (e, t) {
                                var n, r, i, a, o;
                                for (n in e)
                                    if (((i = t[(r = Y(n))]), (a = e[n]), Array.isArray(a) && ((i = a[1]), (a = e[n] = a[0])), n !== r && ((e[r] = a), delete e[n]), (o = _.cssHooks[r]) && ("expand" in o)))
                                        for (n in ((a = o.expand(a)), delete e[r], a)) (n in e) || ((e[n] = a[n]), (t[n] = i));
                                    else t[r] = i;
                            })(d, c.opts.specialEasing);
                            a < o;
                            a++
                        )
                            if ((r = ut.prefilters[a].call(c, e, d, c.opts))) return g(r.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
                        return (
                            _.map(d, dt, c),
                            g(c.opts.start) && c.opts.start.call(e, c),
                            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                            _.fx.timer(_.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                            c
                        );
                    }
                    (_.Animation = _.extend(ut, {
                        tweeners: {
                            "*": [
                                function (e, t) {
                                    var n = this.createTween(e, t);
                                    return le(n.elem, e, te.exec(t), n), n;
                                },
                            ],
                        },
                        tweener: function (e, t) {
                            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(L));
                            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ut.tweeners[n] = ut.tweeners[n] || []), ut.tweeners[n].unshift(t);
                        },
                        prefilters: [
                            function (e, t, n) {
                                var r,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l,
                                    c,
                                    d,
                                    u = "width" in t || "height" in t,
                                    h = this,
                                    p = {},
                                    f = e.style,
                                    g = e.nodeType && oe(e),
                                    m = X.get(e, "fxshow");
                                for (r in (n.queue ||
                                    (null == (o = _._queueHooks(e, "fx")).unqueued &&
                                        ((o.unqueued = 0),
                                        (s = o.empty.fire),
                                        (o.empty.fire = function () {
                                            o.unqueued || s();
                                        })),
                                    o.unqueued++,
                                    h.always(function () {
                                        h.always(function () {
                                            o.unqueued--, _.queue(e, "fx").length || o.empty.fire();
                                        });
                                    })),
                                t))
                                    if (((i = t[r]), at.test(i))) {
                                        if ((delete t[r], (a = a || "toggle" === i), i === (g ? "hide" : "show"))) {
                                            if ("show" !== i || !m || void 0 === m[r]) continue;
                                            g = !0;
                                        }
                                        p[r] = (m && m[r]) || _.style(e, r);
                                    }
                                if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(p))
                                    for (r in (u &&
                                        1 === e.nodeType &&
                                        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                        null == (c = m && m.display) && (c = X.get(e, "display")),
                                        "none" === (d = _.css(e, "display")) && (c ? (d = c) : (ue([e], !0), (c = e.style.display || c), (d = _.css(e, "display")), ue([e]))),
                                        ("inline" === d || ("inline-block" === d && null != c)) &&
                                            "none" === _.css(e, "float") &&
                                            (l ||
                                                (h.done(function () {
                                                    f.display = c;
                                                }),
                                                null == c && ((d = f.display), (c = "none" === d ? "" : d))),
                                            (f.display = "inline-block"))),
                                    n.overflow &&
                                        ((f.overflow = "hidden"),
                                        h.always(function () {
                                            (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
                                        })),
                                    (l = !1),
                                    p))
                                        l ||
                                            (m ? "hidden" in m && (g = m.hidden) : (m = X.access(e, "fxshow", { display: c })),
                                            a && (m.hidden = !g),
                                            g && ue([e], !0),
                                            h.done(function () {
                                                for (r in (g || ue([e]), X.remove(e, "fxshow"), p)) _.style(e, r, p[r]);
                                            })),
                                            (l = dt(g ? m[r] : 0, r, h)),
                                            r in m || ((m[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
                            },
                        ],
                        prefilter: function (e, t) {
                            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e);
                        },
                    })),
                        (_.speed = function (e, t, n) {
                            var r = e && "object" == typeof e ? _.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
                            return (
                                _.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in _.fx.speeds ? (r.duration = _.fx.speeds[r.duration]) : (r.duration = _.fx.speeds._default)),
                                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                                (r.old = r.complete),
                                (r.complete = function () {
                                    g(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue);
                                }),
                                r
                            );
                        }),
                        _.fn.extend({
                            fadeTo: function (e, t, n, r) {
                                return this.filter(oe).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                            },
                            animate: function (e, t, n, r) {
                                var i = _.isEmptyObject(e),
                                    a = _.speed(t, n, r),
                                    o = function () {
                                        var t = ut(this, _.extend({}, e), a);
                                        (i || X.get(this, "finish")) && t.stop(!0);
                                    };
                                return (o.finish = o), i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
                            },
                            stop: function (e, t, n) {
                                var r = function (e) {
                                    var t = e.stop;
                                    delete e.stop, t(n);
                                };
                                return (
                                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                    t && !1 !== e && this.queue(e || "fx", []),
                                    this.each(function () {
                                        var t = !0,
                                            i = null != e && e + "queueHooks",
                                            a = _.timers,
                                            o = X.get(this);
                                        if (i) o[i] && o[i].stop && r(o[i]);
                                        else for (i in o) o[i] && o[i].stop && ot.test(i) && r(o[i]);
                                        for (i = a.length; i--; ) a[i].elem !== this || (null != e && a[i].queue !== e) || (a[i].anim.stop(n), (t = !1), a.splice(i, 1));
                                        (!t && n) || _.dequeue(this, e);
                                    })
                                );
                            },
                            finish: function (e) {
                                return (
                                    !1 !== e && (e = e || "fx"),
                                    this.each(function () {
                                        var t,
                                            n = X.get(this),
                                            r = n[e + "queue"],
                                            i = n[e + "queueHooks"],
                                            a = _.timers,
                                            o = r ? r.length : 0;
                                        for (n.finish = !0, _.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                                        for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                        delete n.finish;
                                    })
                                );
                            },
                        }),
                        _.each(["toggle", "show", "hide"], function (e, t) {
                            var n = _.fn[t];
                            _.fn[t] = function (e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i);
                            };
                        }),
                        _.each({ slideDown: ct("show"), slideUp: ct("hide"), slideToggle: ct("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                            _.fn[e] = function (e, n, r) {
                                return this.animate(t, e, n, r);
                            };
                        }),
                        (_.timers = []),
                        (_.fx.tick = function () {
                            var e,
                                t = 0,
                                n = _.timers;
                            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || _.fx.stop(), (rt = void 0);
                        }),
                        (_.fx.timer = function (e) {
                            _.timers.push(e), _.fx.start();
                        }),
                        (_.fx.interval = 13),
                        (_.fx.start = function () {
                            it || ((it = !0), st());
                        }),
                        (_.fx.stop = function () {
                            it = null;
                        }),
                        (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (_.fn.delay = function (t, n) {
                            return (
                                (t = (_.fx && _.fx.speeds[t]) || t),
                                (n = n || "fx"),
                                this.queue(n, function (n, r) {
                                    var i = e.setTimeout(n, t);
                                    r.stop = function () {
                                        e.clearTimeout(i);
                                    };
                                })
                            );
                        }),
                        (function () {
                            var e = r.createElement("input"),
                                t = r.createElement("select").appendChild(r.createElement("option"));
                            (e.type = "checkbox"), (f.checkOn = "" !== e.value), (f.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (f.radioValue = "t" === e.value);
                        })();
                    var ht,
                        pt = _.expr.attrHandle;
                    _.fn.extend({
                        attr: function (e, t) {
                            return R(this, _.attr, e, t, arguments.length > 1);
                        },
                        removeAttr: function (e) {
                            return this.each(function () {
                                _.removeAttr(this, e);
                            });
                        },
                    }),
                        _.extend({
                            attr: function (e, t, n) {
                                var r,
                                    i,
                                    a = e.nodeType;
                                if (3 !== a && 8 !== a && 2 !== a)
                                    return void 0 === e.getAttribute
                                        ? _.prop(e, t, n)
                                        : ((1 === a && _.isXMLDoc(e)) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ht : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void _.removeAttr(e, t)
                                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                                  ? r
                                                  : (e.setAttribute(t, n + ""), n)
                                              : i && "get" in i && null !== (r = i.get(e, t))
                                              ? r
                                              : null == (r = _.find.attr(e, t))
                                              ? void 0
                                              : r);
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        if (!f.radioValue && "radio" === t && z(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t), n && (e.value = n), t;
                                        }
                                    },
                                },
                            },
                            removeAttr: function (e, t) {
                                var n,
                                    r = 0,
                                    i = t && t.match(L);
                                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                            },
                        }),
                        (ht = {
                            set: function (e, t, n) {
                                return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n;
                            },
                        }),
                        _.each(_.expr.match.bool.source.match(/\w+/g), function (e, t) {
                            var n = pt[t] || _.find.attr;
                            pt[t] = function (e, t, r) {
                                var i,
                                    a,
                                    o = t.toLowerCase();
                                return r || ((a = pt[o]), (pt[o] = i), (i = null != n(e, t, r) ? o : null), (pt[o] = a)), i;
                            };
                        });
                    var ft = /^(?:input|select|textarea|button)$/i,
                        gt = /^(?:a|area)$/i;
                    function mt(e) {
                        return (e.match(L) || []).join(" ");
                    }
                    function vt(e) {
                        return (e.getAttribute && e.getAttribute("class")) || "";
                    }
                    function wt(e) {
                        return Array.isArray(e) ? e : ("string" == typeof e && e.match(L)) || [];
                    }
                    _.fn.extend({
                        prop: function (e, t) {
                            return R(this, _.prop, e, t, arguments.length > 1);
                        },
                        removeProp: function (e) {
                            return this.each(function () {
                                delete this[_.propFix[e] || e];
                            });
                        },
                    }),
                        _.extend({
                            prop: function (e, t, n) {
                                var r,
                                    i,
                                    a = e.nodeType;
                                if (3 !== a && 8 !== a && 2 !== a)
                                    return (
                                        (1 === a && _.isXMLDoc(e)) || ((t = _.propFix[t] || t), (i = _.propHooks[t])),
                                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (e) {
                                        var t = _.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : ft.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                                    },
                                },
                            },
                            propFix: { for: "htmlFor", class: "className" },
                        }),
                        f.optSelected ||
                            (_.propHooks.selected = {
                                get: function (e) {
                                    var t = e.parentNode;
                                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                                },
                                set: function (e) {
                                    var t = e.parentNode;
                                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                },
                            }),
                        _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            _.propFix[this.toLowerCase()] = this;
                        }),
                        _.fn.extend({
                            addClass: function (e) {
                                var t,
                                    n,
                                    r,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l = 0;
                                if (g(e))
                                    return this.each(function (t) {
                                        _(this).addClass(e.call(this, t, vt(this)));
                                    });
                                if ((t = wt(e)).length)
                                    for (; (n = this[l++]); )
                                        if (((i = vt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
                                            for (o = 0; (a = t[o++]); ) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                                            i !== (s = mt(r)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            removeClass: function (e) {
                                var t,
                                    n,
                                    r,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l = 0;
                                if (g(e))
                                    return this.each(function (t) {
                                        _(this).removeClass(e.call(this, t, vt(this)));
                                    });
                                if (!arguments.length) return this.attr("class", "");
                                if ((t = wt(e)).length)
                                    for (; (n = this[l++]); )
                                        if (((i = vt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
                                            for (o = 0; (a = t[o++]); ) for (; r.indexOf(" " + a + " ") > -1; ) r = r.replace(" " + a + " ", " ");
                                            i !== (s = mt(r)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            toggleClass: function (e, t) {
                                var n = typeof e,
                                    r = "string" === n || Array.isArray(e);
                                return "boolean" == typeof t && r
                                    ? t
                                        ? this.addClass(e)
                                        : this.removeClass(e)
                                    : g(e)
                                    ? this.each(function (n) {
                                          _(this).toggleClass(e.call(this, n, vt(this), t), t);
                                      })
                                    : this.each(function () {
                                          var t, i, a, o;
                                          if (r) for (i = 0, a = _(this), o = wt(e); (t = o[i++]); ) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                                          else
                                              (void 0 !== e && "boolean" !== n) ||
                                                  ((t = vt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""));
                                      });
                            },
                            hasClass: function (e) {
                                var t,
                                    n,
                                    r = 0;
                                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + mt(vt(n)) + " ").indexOf(t) > -1) return !0;
                                return !1;
                            },
                        });
                    var yt = /\r/g;
                    _.fn.extend({
                        val: function (e) {
                            var t,
                                n,
                                r,
                                i = this[0];
                            return arguments.length
                                ? ((r = g(e)),
                                  this.each(function (n) {
                                      var i;
                                      1 === this.nodeType &&
                                          (null == (i = r ? e.call(this, n, _(this).val()) : e)
                                              ? (i = "")
                                              : "number" == typeof i
                                              ? (i += "")
                                              : Array.isArray(i) &&
                                                (i = _.map(i, function (e) {
                                                    return null == e ? "" : e + "";
                                                })),
                                          ((t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                                  }))
                                : i
                                ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                                    ? n
                                    : "string" == typeof (n = i.value)
                                    ? n.replace(yt, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                        _.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = _.find.attr(e, "value");
                                        return null != t ? t : mt(_.text(e));
                                    },
                                },
                                select: {
                                    get: function (e) {
                                        var t,
                                            n,
                                            r,
                                            i = e.options,
                                            a = e.selectedIndex,
                                            o = "select-one" === e.type,
                                            s = o ? null : [],
                                            l = o ? a + 1 : i.length;
                                        for (r = a < 0 ? l : o ? a : 0; r < l; r++)
                                            if (((n = i[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !z(n.parentNode, "optgroup"))) {
                                                if (((t = _(n).val()), o)) return t;
                                                s.push(t);
                                            }
                                        return s;
                                    },
                                    set: function (e, t) {
                                        for (var n, r, i = e.options, a = _.makeArray(t), o = i.length; o--; ) ((r = i[o]).selected = _.inArray(_.valHooks.option.get(r), a) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1), a;
                                    },
                                },
                            },
                        }),
                        _.each(["radio", "checkbox"], function () {
                            (_.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t)) return (e.checked = _.inArray(_(e).val(), t) > -1);
                                },
                            }),
                                f.checkOn ||
                                    (_.valHooks[this].get = function (e) {
                                        return null === e.getAttribute("value") ? "on" : e.value;
                                    });
                        }),
                        (f.focusin = "onfocusin" in e);
                    var _t = /^(?:focusinfocus|focusoutblur)$/,
                        bt = function (e) {
                            e.stopPropagation();
                        };
                    _.extend(_.event, {
                        trigger: function (t, n, i, a) {
                            var o,
                                s,
                                l,
                                c,
                                d,
                                h,
                                p,
                                f,
                                v = [i || r],
                                w = u.call(t, "type") ? t.type : t,
                                y = u.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (
                                ((s = f = l = i = i || r),
                                3 !== i.nodeType &&
                                    8 !== i.nodeType &&
                                    !_t.test(w + _.event.triggered) &&
                                    (w.indexOf(".") > -1 && ((y = w.split(".")), (w = y.shift()), y.sort()),
                                    (d = w.indexOf(":") < 0 && "on" + w),
                                    ((t = t[_.expando] ? t : new _.Event(w, "object" == typeof t && t)).isTrigger = a ? 2 : 3),
                                    (t.namespace = y.join(".")),
                                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (t.result = void 0),
                                    t.target || (t.target = i),
                                    (n = null == n ? [t] : _.makeArray(n, [t])),
                                    (p = _.event.special[w] || {}),
                                    a || !p.trigger || !1 !== p.trigger.apply(i, n)))
                            ) {
                                if (!a && !p.noBubble && !m(i)) {
                                    for (c = p.delegateType || w, _t.test(c + w) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (l = s);
                                    l === (i.ownerDocument || r) && v.push(l.defaultView || l.parentWindow || e);
                                }
                                for (o = 0; (s = v[o++]) && !t.isPropagationStopped(); )
                                    (f = s),
                                        (t.type = o > 1 ? c : p.bindType || w),
                                        (h = (X.get(s, "events") || {})[t.type] && X.get(s, "handle")) && h.apply(s, n),
                                        (h = d && s[d]) && h.apply && V(s) && ((t.result = h.apply(s, n)), !1 === t.result && t.preventDefault());
                                return (
                                    (t.type = w),
                                    a ||
                                        t.isDefaultPrevented() ||
                                        (p._default && !1 !== p._default.apply(v.pop(), n)) ||
                                        !V(i) ||
                                        (d &&
                                            g(i[w]) &&
                                            !m(i) &&
                                            ((l = i[d]) && (i[d] = null),
                                            (_.event.triggered = w),
                                            t.isPropagationStopped() && f.addEventListener(w, bt),
                                            i[w](),
                                            t.isPropagationStopped() && f.removeEventListener(w, bt),
                                            (_.event.triggered = void 0),
                                            l && (i[d] = l))),
                                    t.result
                                );
                            }
                        },
                        simulate: function (e, t, n) {
                            var r = _.extend(new _.Event(), n, { type: e, isSimulated: !0 });
                            _.event.trigger(r, null, t);
                        },
                    }),
                        _.fn.extend({
                            trigger: function (e, t) {
                                return this.each(function () {
                                    _.event.trigger(e, t, this);
                                });
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n) return _.event.trigger(e, t, n, !0);
                            },
                        }),
                        f.focusin ||
                            _.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                var n = function (e) {
                                    _.event.simulate(t, e.target, _.event.fix(e));
                                };
                                _.event.special[t] = {
                                    setup: function () {
                                        var r = this.ownerDocument || this,
                                            i = X.access(r, t);
                                        i || r.addEventListener(e, n, !0), X.access(r, t, (i || 0) + 1);
                                    },
                                    teardown: function () {
                                        var r = this.ownerDocument || this,
                                            i = X.access(r, t) - 1;
                                        i ? X.access(r, t, i) : (r.removeEventListener(e, n, !0), X.remove(r, t));
                                    },
                                };
                            });
                    var kt = e.location,
                        xt = Date.now(),
                        Tt = /\?/;
                    _.parseXML = function (t) {
                        var n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            n = new e.DOMParser().parseFromString(t, "text/xml");
                        } catch (e) {
                            n = void 0;
                        }
                        return (n && !n.getElementsByTagName("parsererror").length) || _.error("Invalid XML: " + t), n;
                    };
                    var St = /\[\]$/,
                        jt = /\r?\n/g,
                        zt = /^(?:submit|button|image|reset|file)$/i,
                        Dt = /^(?:input|select|textarea|keygen)/i;
                    function Ct(e, t, n, r) {
                        var i;
                        if (Array.isArray(t))
                            _.each(t, function (t, i) {
                                n || St.test(e) ? r(e, i) : Ct(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                            });
                        else if (n || "object" !== y(t)) r(e, t);
                        else for (i in t) Ct(e + "[" + i + "]", t[i], n, r);
                    }
                    (_.param = function (e, t) {
                        var n,
                            r = [],
                            i = function (e, t) {
                                var n = g(t) ? t() : t;
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || (e.jquery && !_.isPlainObject(e)))
                            _.each(e, function () {
                                i(this.name, this.value);
                            });
                        else for (n in e) Ct(n, e[n], t, i);
                        return r.join("&");
                    }),
                        _.fn.extend({
                            serialize: function () {
                                return _.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var e = _.prop(this, "elements");
                                    return e ? _.makeArray(e) : this;
                                })
                                    .filter(function () {
                                        var e = this.type;
                                        return this.name && !_(this).is(":disabled") && Dt.test(this.nodeName) && !zt.test(e) && (this.checked || !he.test(e));
                                    })
                                    .map(function (e, t) {
                                        var n = _(this).val();
                                        return null == n
                                            ? null
                                            : Array.isArray(n)
                                            ? _.map(n, function (e) {
                                                  return { name: t.name, value: e.replace(jt, "\r\n") };
                                              })
                                            : { name: t.name, value: n.replace(jt, "\r\n") };
                                    })
                                    .get();
                            },
                        });
                    var Et = /%20/g,
                        At = /#.*$/,
                        Nt = /([?&])_=[^&]*/,
                        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Mt = /^(?:GET|HEAD)$/,
                        Lt = /^\/\//,
                        Ot = {},
                        qt = {},
                        Ht = "*/".concat("*"),
                        Bt = r.createElement("a");
                    function Ft(e) {
                        return function (t, n) {
                            "string" != typeof t && ((n = t), (t = "*"));
                            var r,
                                i = 0,
                                a = t.toLowerCase().match(L) || [];
                            if (g(n)) for (; (r = a[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                        };
                    }
                    function Wt(e, t, n, r) {
                        var i = {},
                            a = e === qt;
                        function o(s) {
                            var l;
                            return (
                                (i[s] = !0),
                                _.each(e[s] || [], function (e, s) {
                                    var c = s(t, n, r);
                                    return "string" != typeof c || a || i[c] ? (a ? !(l = c) : void 0) : (t.dataTypes.unshift(c), o(c), !1);
                                }),
                                l
                            );
                        }
                        return o(t.dataTypes[0]) || (!i["*"] && o("*"));
                    }
                    function Rt(e, t) {
                        var n,
                            r,
                            i = _.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && _.extend(!0, e, r), e;
                    }
                    (Bt.href = kt.href),
                        _.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: kt.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: { "*": Ht, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML },
                                flatOptions: { url: !0, context: !0 },
                            },
                            ajaxSetup: function (e, t) {
                                return t ? Rt(Rt(e, _.ajaxSettings), t) : Rt(_.ajaxSettings, e);
                            },
                            ajaxPrefilter: Ft(Ot),
                            ajaxTransport: Ft(qt),
                            ajax: function (t, n) {
                                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                                var i,
                                    a,
                                    o,
                                    s,
                                    l,
                                    c,
                                    d,
                                    u,
                                    h,
                                    p,
                                    f = _.ajaxSetup({}, n),
                                    g = f.context || f,
                                    m = f.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                                    v = _.Deferred(),
                                    w = _.Callbacks("once memory"),
                                    y = f.statusCode || {},
                                    b = {},
                                    k = {},
                                    x = "canceled",
                                    T = {
                                        readyState: 0,
                                        getResponseHeader: function (e) {
                                            var t;
                                            if (d) {
                                                if (!s) for (s = {}; (t = Pt.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                t = s[e.toLowerCase() + " "];
                                            }
                                            return null == t ? null : t.join(", ");
                                        },
                                        getAllResponseHeaders: function () {
                                            return d ? o : null;
                                        },
                                        setRequestHeader: function (e, t) {
                                            return null == d && ((e = k[e.toLowerCase()] = k[e.toLowerCase()] || e), (b[e] = t)), this;
                                        },
                                        overrideMimeType: function (e) {
                                            return null == d && (f.mimeType = e), this;
                                        },
                                        statusCode: function (e) {
                                            var t;
                                            if (e)
                                                if (d) T.always(e[T.status]);
                                                else for (t in e) y[t] = [y[t], e[t]];
                                            return this;
                                        },
                                        abort: function (e) {
                                            var t = e || x;
                                            return i && i.abort(t), S(0, t), this;
                                        },
                                    };
                                if (
                                    (v.promise(T),
                                    (f.url = ((t || f.url || kt.href) + "").replace(Lt, kt.protocol + "//")),
                                    (f.type = n.method || n.type || f.method || f.type),
                                    (f.dataTypes = (f.dataType || "*").toLowerCase().match(L) || [""]),
                                    null == f.crossDomain)
                                ) {
                                    c = r.createElement("a");
                                    try {
                                        (c.href = f.url), (c.href = c.href), (f.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host);
                                    } catch (e) {
                                        f.crossDomain = !0;
                                    }
                                }
                                if ((f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), Wt(Ot, f, n, T), d)) return T;
                                for (h in ((u = _.event && f.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
                                (f.type = f.type.toUpperCase()),
                                (f.hasContent = !Mt.test(f.type)),
                                (a = f.url.replace(At, "")),
                                f.hasContent
                                    ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Et, "+"))
                                    : ((p = f.url.slice(a.length)),
                                      f.data && (f.processData || "string" == typeof f.data) && ((a += (Tt.test(a) ? "&" : "?") + f.data), delete f.data),
                                      !1 === f.cache && ((a = a.replace(Nt, "$1")), (p = (Tt.test(a) ? "&" : "?") + "_=" + xt++ + p)),
                                      (f.url = a + p)),
                                f.ifModified && (_.lastModified[a] && T.setRequestHeader("If-Modified-Since", _.lastModified[a]), _.etag[a] && T.setRequestHeader("If-None-Match", _.etag[a])),
                                ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : f.accepts["*"]),
                                f.headers))
                                    T.setRequestHeader(h, f.headers[h]);
                                if (f.beforeSend && (!1 === f.beforeSend.call(g, T, f) || d)) return T.abort();
                                if (((x = "abort"), w.add(f.complete), T.done(f.success), T.fail(f.error), (i = Wt(qt, f, n, T)))) {
                                    if (((T.readyState = 1), u && m.trigger("ajaxSend", [T, f]), d)) return T;
                                    f.async &&
                                        f.timeout > 0 &&
                                        (l = e.setTimeout(function () {
                                            T.abort("timeout");
                                        }, f.timeout));
                                    try {
                                        (d = !1), i.send(b, S);
                                    } catch (e) {
                                        if (d) throw e;
                                        S(-1, e);
                                    }
                                } else S(-1, "No Transport");
                                function S(t, n, r, s) {
                                    var c,
                                        h,
                                        p,
                                        b,
                                        k,
                                        x = n;
                                    d ||
                                        ((d = !0),
                                        l && e.clearTimeout(l),
                                        (i = void 0),
                                        (o = s || ""),
                                        (T.readyState = t > 0 ? 4 : 0),
                                        (c = (t >= 200 && t < 300) || 304 === t),
                                        r &&
                                            (b = (function (e, t, n) {
                                                for (var r, i, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                                if (r)
                                                    for (i in s)
                                                        if (s[i] && s[i].test(r)) {
                                                            l.unshift(i);
                                                            break;
                                                        }
                                                if (l[0] in n) a = l[0];
                                                else {
                                                    for (i in n) {
                                                        if (!l[0] || e.converters[i + " " + l[0]]) {
                                                            a = i;
                                                            break;
                                                        }
                                                        o || (o = i);
                                                    }
                                                    a = a || o;
                                                }
                                                if (a) return a !== l[0] && l.unshift(a), n[a];
                                            })(f, T, r)),
                                        (b = (function (e, t, n, r) {
                                            var i,
                                                a,
                                                o,
                                                s,
                                                l,
                                                c = {},
                                                d = e.dataTypes.slice();
                                            if (d[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                                            for (a = d.shift(); a; )
                                                if ((e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = d.shift())))
                                                    if ("*" === a) a = l;
                                                    else if ("*" !== l && l !== a) {
                                                        if (!(o = c[l + " " + a] || c["* " + a]))
                                                            for (i in c)
                                                                if ((s = i.split(" "))[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                                                                    !0 === o ? (o = c[i]) : !0 !== c[i] && ((a = s[0]), d.unshift(s[1]));
                                                                    break;
                                                                }
                                                        if (!0 !== o)
                                                            if (o && e.throws) t = o(t);
                                                            else
                                                                try {
                                                                    t = o(t);
                                                                } catch (e) {
                                                                    return { state: "parsererror", error: o ? e : "No conversion from " + l + " to " + a };
                                                                }
                                                    }
                                            return { state: "success", data: t };
                                        })(f, b, T, c)),
                                        c
                                            ? (f.ifModified && ((k = T.getResponseHeader("Last-Modified")) && (_.lastModified[a] = k), (k = T.getResponseHeader("etag")) && (_.etag[a] = k)),
                                              204 === t || "HEAD" === f.type ? (x = "nocontent") : 304 === t ? (x = "notmodified") : ((x = b.state), (h = b.data), (c = !(p = b.error))))
                                            : ((p = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                                        (T.status = t),
                                        (T.statusText = (n || x) + ""),
                                        c ? v.resolveWith(g, [h, x, T]) : v.rejectWith(g, [T, x, p]),
                                        T.statusCode(y),
                                        (y = void 0),
                                        u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, f, c ? h : p]),
                                        w.fireWith(g, [T, x]),
                                        u && (m.trigger("ajaxComplete", [T, f]), --_.active || _.event.trigger("ajaxStop")));
                                }
                                return T;
                            },
                            getJSON: function (e, t, n) {
                                return _.get(e, t, n, "json");
                            },
                            getScript: function (e, t) {
                                return _.get(e, void 0, t, "script");
                            },
                        }),
                        _.each(["get", "post"], function (e, t) {
                            _[t] = function (e, n, r, i) {
                                return g(n) && ((i = i || r), (r = n), (n = void 0)), _.ajax(_.extend({ url: e, type: t, dataType: i, data: n, success: r }, _.isPlainObject(e) && e));
                            };
                        }),
                        (_._evalUrl = function (e, t) {
                            return _.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: { "text script": function () {} },
                                dataFilter: function (e) {
                                    _.globalEval(e, t);
                                },
                            });
                        }),
                        _.fn.extend({
                            wrapAll: function (e) {
                                var t;
                                return (
                                    this[0] &&
                                        (g(e) && (e = e.call(this[0])),
                                        (t = _(e, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && t.insertBefore(this[0]),
                                        t
                                            .map(function () {
                                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                return e;
                                            })
                                            .append(this)),
                                    this
                                );
                            },
                            wrapInner: function (e) {
                                return g(e)
                                    ? this.each(function (t) {
                                          _(this).wrapInner(e.call(this, t));
                                      })
                                    : this.each(function () {
                                          var t = _(this),
                                              n = t.contents();
                                          n.length ? n.wrapAll(e) : t.append(e);
                                      });
                            },
                            wrap: function (e) {
                                var t = g(e);
                                return this.each(function (n) {
                                    _(this).wrapAll(t ? e.call(this, n) : e);
                                });
                            },
                            unwrap: function (e) {
                                return (
                                    this.parent(e)
                                        .not("body")
                                        .each(function () {
                                            _(this).replaceWith(this.childNodes);
                                        }),
                                    this
                                );
                            },
                        }),
                        (_.expr.pseudos.hidden = function (e) {
                            return !_.expr.pseudos.visible(e);
                        }),
                        (_.expr.pseudos.visible = function (e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                        }),
                        (_.ajaxSettings.xhr = function () {
                            try {
                                return new e.XMLHttpRequest();
                            } catch (e) {}
                        });
                    var It = { 0: 200, 1223: 204 },
                        Gt = _.ajaxSettings.xhr();
                    (f.cors = !!Gt && "withCredentials" in Gt),
                        (f.ajax = Gt = !!Gt),
                        _.ajaxTransport(function (t) {
                            var n, r;
                            if (f.cors || (Gt && !t.crossDomain))
                                return {
                                    send: function (i, a) {
                                        var o,
                                            s = t.xhr();
                                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) s[o] = t.xhrFields[o];
                                        for (o in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) s.setRequestHeader(o, i[o]);
                                        (n = function (e) {
                                            return function () {
                                                n &&
                                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                    "abort" === e
                                                        ? s.abort()
                                                        : "error" === e
                                                        ? "number" != typeof s.status
                                                            ? a(0, "error")
                                                            : a(s.status, s.statusText)
                                                        : a(
                                                              It[s.status] || s.status,
                                                              s.statusText,
                                                              "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                              s.getAllResponseHeaders()
                                                          ));
                                            };
                                        }),
                                            (s.onload = n()),
                                            (r = s.onerror = s.ontimeout = n("error")),
                                            void 0 !== s.onabort
                                                ? (s.onabort = r)
                                                : (s.onreadystatechange = function () {
                                                      4 === s.readyState &&
                                                          e.setTimeout(function () {
                                                              n && r();
                                                          });
                                                  }),
                                            (n = n("abort"));
                                        try {
                                            s.send((t.hasContent && t.data) || null);
                                        } catch (e) {
                                            if (n) throw e;
                                        }
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        }),
                        _.ajaxPrefilter(function (e) {
                            e.crossDomain && (e.contents.script = !1);
                        }),
                        _.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /\b(?:java|ecma)script\b/ },
                            converters: {
                                "text script": function (e) {
                                    return _.globalEval(e), e;
                                },
                            },
                        }),
                        _.ajaxPrefilter("script", function (e) {
                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                        }),
                        _.ajaxTransport("script", function (e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (i, a) {
                                        (t = _("<script>")
                                            .attr(e.scriptAttrs || {})
                                            .prop({ charset: e.scriptCharset, src: e.url })
                                            .on(
                                                "load error",
                                                (n = function (e) {
                                                    t.remove(), (n = null), e && a("error" === e.type ? 404 : 200, e.type);
                                                })
                                            )),
                                            r.head.appendChild(t[0]);
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        });
                    var Ut,
                        Yt = [],
                        Vt = /(=)\?(?=&|$)|\?\?/;
                    _.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Yt.pop() || _.expando + "_" + xt++;
                            return (this[e] = !0), e;
                        },
                    }),
                        _.ajaxPrefilter("json jsonp", function (t, n, r) {
                            var i,
                                a,
                                o,
                                s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
                            if (s || "jsonp" === t.dataTypes[0])
                                return (
                                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                    s ? (t[s] = t[s].replace(Vt, "$1" + i)) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                                    (t.converters["script json"] = function () {
                                        return o || _.error(i + " was not called"), o[0];
                                    }),
                                    (t.dataTypes[0] = "json"),
                                    (a = e[i]),
                                    (e[i] = function () {
                                        o = arguments;
                                    }),
                                    r.always(function () {
                                        void 0 === a ? _(e).removeProp(i) : (e[i] = a), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), o && g(a) && a(o[0]), (o = a = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (f.createHTMLDocument = (((Ut = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
                        (_.parseHTML = function (e, t, n) {
                            return "string" != typeof e
                                ? []
                                : ("boolean" == typeof t && ((n = t), (t = !1)),
                                  t || (f.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                                  (o = !n && []),
                                  (a = D.exec(e)) ? [t.createElement(a[1])] : ((a = be([e], t, o)), o && o.length && _(o).remove(), _.merge([], a.childNodes)));
                            var i, a, o;
                        }),
                        (_.fn.load = function (e, t, n) {
                            var r,
                                i,
                                a,
                                o = this,
                                s = e.indexOf(" ");
                            return (
                                s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
                                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                                o.length > 0 &&
                                    _.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                        .done(function (e) {
                                            (a = arguments), o.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e);
                                        })
                                        .always(
                                            n &&
                                                function (e, t) {
                                                    o.each(function () {
                                                        n.apply(this, a || [e.responseText, t, e]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                            _.fn[t] = function (e) {
                                return this.on(t, e);
                            };
                        }),
                        (_.expr.pseudos.animated = function (e) {
                            return _.grep(_.timers, function (t) {
                                return e === t.elem;
                            }).length;
                        }),
                        (_.offset = {
                            setOffset: function (e, t, n) {
                                var r,
                                    i,
                                    a,
                                    o,
                                    s,
                                    l,
                                    c = _.css(e, "position"),
                                    d = _(e),
                                    u = {};
                                "static" === c && (e.style.position = "relative"),
                                    (s = d.offset()),
                                    (a = _.css(e, "top")),
                                    (l = _.css(e, "left")),
                                    ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? ((o = (r = d.position()).top), (i = r.left)) : ((o = parseFloat(a) || 0), (i = parseFloat(l) || 0)),
                                    g(t) && (t = t.call(e, n, _.extend({}, s))),
                                    null != t.top && (u.top = t.top - s.top + o),
                                    null != t.left && (u.left = t.left - s.left + i),
                                    "using" in t ? t.using.call(e, u) : d.css(u);
                            },
                        }),
                        _.fn.extend({
                            offset: function (e) {
                                if (arguments.length)
                                    return void 0 === e
                                        ? this
                                        : this.each(function (t) {
                                              _.offset.setOffset(this, e, t);
                                          });
                                var t,
                                    n,
                                    r = this[0];
                                return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var e,
                                        t,
                                        n,
                                        r = this[0],
                                        i = { top: 0, left: 0 };
                                    if ("fixed" === _.css(r, "position")) t = r.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position"); ) e = e.parentNode;
                                        e && e !== r && 1 === e.nodeType && (((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0)), (i.left += _.css(e, "borderLeftWidth", !0)));
                                    }
                                    return { top: t.top - i.top - _.css(r, "marginTop", !0), left: t.left - i.left - _.css(r, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var e = this.offsetParent; e && "static" === _.css(e, "position"); ) e = e.offsetParent;
                                    return e || re;
                                });
                            },
                        }),
                        _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                            var n = "pageYOffset" === t;
                            _.fn[e] = function (r) {
                                return R(
                                    this,
                                    function (e, r, i) {
                                        var a;
                                        if ((m(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView), void 0 === i)) return a ? a[t] : e[r];
                                        a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : (e[r] = i);
                                    },
                                    e,
                                    r,
                                    arguments.length
                                );
                            };
                        }),
                        _.each(["top", "left"], function (e, t) {
                            _.cssHooks[t] = Ge(f.pixelPosition, function (e, n) {
                                if (n) return (n = Ie(e, t)), Fe.test(n) ? _(e).position()[t] + "px" : n;
                            });
                        }),
                        _.each({ Height: "height", Width: "width" }, function (e, t) {
                            _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                                _.fn[r] = function (i, a) {
                                    var o = arguments.length && (n || "boolean" != typeof i),
                                        s = n || (!0 === i || !0 === a ? "margin" : "border");
                                    return R(
                                        this,
                                        function (t, n, i) {
                                            var a;
                                            return m(t)
                                                ? 0 === r.indexOf("outer")
                                                    ? t["inner" + e]
                                                    : t.document.documentElement["client" + e]
                                                : 9 === t.nodeType
                                                ? ((a = t.documentElement), Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e]))
                                                : void 0 === i
                                                ? _.css(t, n, s)
                                                : _.style(t, n, i, s);
                                        },
                                        t,
                                        o ? i : void 0,
                                        o
                                    );
                                };
                            });
                        }),
                        _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                            e,
                            t
                        ) {
                            _.fn[t] = function (e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                            };
                        }),
                        _.fn.extend({
                            hover: function (e, t) {
                                return this.mouseenter(e).mouseleave(t || e);
                            },
                        }),
                        _.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n);
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t);
                            },
                            delegate: function (e, t, n, r) {
                                return this.on(t, e, n, r);
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                            },
                        }),
                        (_.proxy = function (e, t) {
                            var n, r, i;
                            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                                return (
                                    (r = a.call(arguments, 2)),
                                    ((i = function () {
                                        return e.apply(t || this, r.concat(a.call(arguments)));
                                    }).guid = e.guid = e.guid || _.guid++),
                                    i
                                );
                        }),
                        (_.holdReady = function (e) {
                            e ? _.readyWait++ : _.ready(!0);
                        }),
                        (_.isArray = Array.isArray),
                        (_.parseJSON = JSON.parse),
                        (_.nodeName = z),
                        (_.isFunction = g),
                        (_.isWindow = m),
                        (_.camelCase = Y),
                        (_.type = y),
                        (_.now = Date.now),
                        (_.isNumeric = function (e) {
                            var t = _.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                        }),
                        "function" == typeof define &&
                            define.amd &&
                            define("jquery", [], function () {
                                return _;
                            });
                    var $t = e.jQuery,
                        Xt = e.$;
                    return (
                        (_.noConflict = function (t) {
                            return e.$ === _ && (e.$ = Xt), t && e.jQuery === _ && (e.jQuery = $t), _;
                        }),
                        t || (e.jQuery = e.$ = _),
                        _
                    );
                });
            },
            {},
        ],
        11: [
            function (e, t, n) {
                var r,
                    i,
                    a = (t.exports = {});
                function o() {
                    throw new Error("setTimeout has not been defined");
                }
                function s() {
                    throw new Error("clearTimeout has not been defined");
                }
                function l(e) {
                    if (r === setTimeout) return setTimeout(e, 0);
                    if ((r === o || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
                    try {
                        return r(e, 0);
                    } catch (t) {
                        try {
                            return r.call(null, e, 0);
                        } catch (t) {
                            return r.call(this, e, 0);
                        }
                    }
                }
                !(function () {
                    try {
                        r = "function" == typeof setTimeout ? setTimeout : o;
                    } catch (e) {
                        r = o;
                    }
                    try {
                        i = "function" == typeof clearTimeout ? clearTimeout : s;
                    } catch (e) {
                        i = s;
                    }
                })();
                var c,
                    d = [],
                    u = !1,
                    h = -1;
                function p() {
                    u && c && ((u = !1), c.length ? (d = c.concat(d)) : (h = -1), d.length && f());
                }
                function f() {
                    if (!u) {
                        var e = l(p);
                        u = !0;
                        for (var t = d.length; t; ) {
                            for (c = d, d = []; ++h < t; ) c && c[h].run();
                            (h = -1), (t = d.length);
                        }
                        (c = null),
                            (u = !1),
                            (function (e) {
                                if (i === clearTimeout) return clearTimeout(e);
                                if ((i === s || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
                                try {
                                    i(e);
                                } catch (t) {
                                    try {
                                        return i.call(null, e);
                                    } catch (t) {
                                        return i.call(this, e);
                                    }
                                }
                            })(e);
                    }
                }
                function g(e, t) {
                    (this.fun = e), (this.array = t);
                }
                function m() {}
                (a.nextTick = function (e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    d.push(new g(e, t)), 1 !== d.length || u || l(f);
                }),
                    (g.prototype.run = function () {
                        this.fun.apply(null, this.array);
                    }),
                    (a.title = "browser"),
                    (a.browser = !0),
                    (a.env = {}),
                    (a.argv = []),
                    (a.version = ""),
                    (a.versions = {}),
                    (a.on = m),
                    (a.addListener = m),
                    (a.once = m),
                    (a.off = m),
                    (a.removeListener = m),
                    (a.removeAllListeners = m),
                    (a.emit = m),
                    (a.prependListener = m),
                    (a.prependOnceListener = m),
                    (a.listeners = function (e) {
                        return [];
                    }),
                    (a.binding = function (e) {
                        throw new Error("process.binding is not supported");
                    }),
                    (a.cwd = function () {
                        return "/";
                    }),
                    (a.chdir = function (e) {
                        throw new Error("process.chdir is not supported");
                    }),
                    (a.umask = function () {
                        return 0;
                    });
            },
            {},
        ],
    },
    {},
    [6]
);
