'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">front-certif documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"' : 'data-target="#xs-components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"' : 'id="xs-components-links-module-AppModule-c41173c6339c80500d280470092c16aea82699635fa0aa86d27339368a4744b98719dde145bc45c8fe88430017ea73b78a98e6b6abee07c46c6bb1105d0c04ee"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"' : 'data-target="#xs-components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"' : 'id="xs-components-links-module-CoreModule-b41be55726b47efe0e7d6bd447330078e6153191313c7f817c29e458c693eb6f546934d0f9d3c64e4da686d53c6de6c2430f8db9ec849b5842baf79d2ff977d2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageNotFoundModule.html\" data-type=\"entity-link\" >PageNotFoundModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' : 'data-target="#xs-components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"' : 'id="xs-components-links-module-PageNotFoundModule-fccb7226b6bf0809a77e78e9eafbfa2af0b1cfe9ffd092dfdac3112eaa4288cef14ed2fbbcd5aa377007fd81f929987a61dee76de1481492219a56d0f3d4e6db"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/PageNotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageNotFoundComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PageNotFoundRoutingModule.html\" data-type=\"entity-link\" >PageNotFoundRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' : 'data-target="#xs-components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' : 'id="xs-components-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BtnComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BtnComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' : 'data-target="#xs-directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"' : 'id="xs-directives-links-module-SharedModule-c85d18b86e049037ccbb35d970a8ceea30511dea41997d63c294d3623dc6fc3c1beba48147123be1da106326490c72e9f190864d810f27c9918338e7f940cac0"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/StateDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StateDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TasksModule.html\" data-type=\"entity-link\" >TasksModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"' : 'data-target="#xs-components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"' : 'id="xs-components-links-module-TasksModule-b1a007f038851f9bee1c83e8b017d095d2ce0e690919817679ce4c4300246cec6be5ea491f2ab3dcb43a3e17fa48a3dc77fe6498ca9b811883357a29df080d7b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ColumnTasksComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ColumnTasksComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormTaskComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormTaskComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageAddTaskComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageAddTaskComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageEditTaskComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageEditTaskComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageListTasksComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageListTasksComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TasksRoutingModule.html\" data-type=\"entity-link\" >TasksRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UiModule.html\" data-type=\"entity-link\" >UiModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"' : 'data-target="#xs-components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"' : 'id="xs-components-links-module-UiModule-30cf17e6703a21304a02b3b4c9bfb229b63494db5ad0f900b11ae92b3438ca8adbf3d52c4ef7c72697afe4ff1695c8b1f37b5b1e088e34a69d2272dc1b1d5249"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/UiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UiComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Task.html\" data-type=\"entity-link\" >Task</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/TasksService.html\" data-type=\"entity-link\" >TasksService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/TaskI.html\" data-type=\"entity-link\" >TaskI</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));