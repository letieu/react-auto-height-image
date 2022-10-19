var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
export function AutoHeightImage(_a) {
    var loadingComponent = _a.loadingComponent, defaultHeight = _a.defaultHeight, style = _a.style, rest = __rest(_a, ["loadingComponent", "defaultHeight", "style"]);
    var _b = useState(false), loaded = _b[0], setLoaded = _b[1];
    function onLoad() {
        setLoaded(true);
    }
    function renderLoading() {
        if (loaded)
            return;
        return loadingComponent || (React.createElement("div", { style: { height: defaultHeight !== null && defaultHeight !== void 0 ? defaultHeight : "200px" } }));
    }
    return (React.createElement(React.Fragment, null,
        renderLoading(),
        React.createElement("img", __assign({}, rest, { style: !loaded ? __assign(__assign({}, style), { display: 'none' }) : style, onLoad: onLoad }))));
}
