"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_localize_redux_1 = require("react-localize-redux");
var server_1 = require("react-dom/server");
var react_router_dom_1 = require("react-router-dom");
var views_1 = require("./views");
var context_1 = require("./context");
var index_1 = require("./index");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.languages = [
            { name: 'Русский', code: 'ru' },
            { name: 'English', code: 'en' },
        ];
        _this.initialize = {
            languages: _this.languages,
            translation: context_1.globalTranslations,
            options: {
                renderToStaticMarkup: server_1.renderToStaticMarkup,
                defaultLanguage: 'ru',
                onMissingTranslation: function () { return "Text not translated"; },
                ignoreTranslateChildren: true
            }
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(react_localize_redux_1.LocalizeProvider, { initialize: this.initialize, store: index_1.store },
                React.createElement(views_1.ViewPage, null))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map