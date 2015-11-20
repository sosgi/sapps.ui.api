System.register([], function (_export) {
    "use strict";

    var IApp, IRouter, IRoute, IBrowser;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [],
        execute: function () {
            IApp = (function () {
                function IApp() {
                    _classCallCheck(this, IApp);
                }

                _createClass(IApp, [{
                    key: "reload",
                    value: function reload() {}
                }, {
                    key: "show",
                    value: function show($dom) {}
                }, {
                    key: "hide",
                    value: function hide() {}
                }, {
                    key: "name",
                    get: function get() {}
                }, {
                    key: "url",
                    get: function get() {}
                }]);

                return IApp;
            })();

            _export("IApp", IApp);

            IRouter = (function () {
                function IRouter() {
                    _classCallCheck(this, IRouter);
                }

                _createClass(IRouter, [{
                    key: "addRoute",
                    value: function addRoute(route) {}
                }, {
                    key: "removeRoute",
                    value: function removeRoute(route) {}
                }]);

                return IRouter;
            })();

            _export("IRouter", IRouter);

            IRoute = (function () {
                function IRoute() {
                    _classCallCheck(this, IRoute);
                }

                _createClass(IRoute, [{
                    key: "match",
                    value: function match(url) {}
                }]);

                return IRoute;
            })();

            _export("IRoute", IRoute);

            IBrowser = (function () {
                function IBrowser() {
                    _classCallCheck(this, IBrowser);
                }

                _createClass(IBrowser, [{
                    key: "url",

                    /**
                     *
                     * @param {String{ url New url (when use as setter)
                     * @param (boolean) replace
                     */
                    value: function url(_url, replace) {}
                }, {
                    key: "feature",
                    value: function feature(name) {}
                }]);

                return IBrowser;
            })();

            _export("IBrowser", IBrowser);
        }
    };
});