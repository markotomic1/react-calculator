(this["webpackJsonpreact-calc"]=this["webpackJsonpreact-calc"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Buttons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),Calc=function(_React$Component){Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calc,_React$Component);var _super=Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calc);function Calc(e){var _;return Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calc),(_=_super.call(this,e)).handleOperator=_.handleOperator.bind(Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDot=_.handleDot.bind(Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleClick=_.handleClick.bind(Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleClear=_.handleClear.bind(Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEquals=_.handleEquals.bind(Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.state={display:"0",operation:""},_}return Object(C_Users_Korisnik_Desktop_marko_Jscript_ReactCalculator_react_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calc,[{key:"handleClick",value:function(e){var _=this.state.display;"0"===_?this.setState({display:e.target.value}):this.setState({display:_+=e.target.value})}},{key:"handleDot",value:function(e){var _=this.state.display;-1===_.indexOf(".")?this.setState({display:_+=e.target.value}):-1===_.indexOf("+")&&-1===_.indexOf("-")&&-1===_.indexOf("/")&&-1===_.indexOf("*")||_.match(/\./gi).length<2&&this.setState({display:_+=e.target.value})}},{key:"handleOperator",value:function(e){var _=this.state.display.toString();if(!0===/\/(\+|-|\*|\/)|\*(\+|-|\*|\/)|-(\+|-|\*|\/)|\+(\+|-|\*|\/)/g.test(_)){var a=_.replace(/\+|-|\*|\//g,e.target.value);this.setState({display:a.slice(0,a.length-1)})}else _.charAt(_.length-1)!==e.target.value&&this.setState({display:_+=e.target.value})}},{key:"handleClear",value:function(){this.setState({display:"0"})}},{key:"handleEquals",value:function handleEquals(){try{var num=eval(this.state.display)}catch(e){console.errorg(e.lineNumber),console.error(e.message)}this.setState({display:num})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_6__.a,{onDot:this.handleDot,onClick:this.handleClick,display:this.state.display,onClear:this.handleClear,onEqual:this.handleEquals,onOperator:this.handleOperator}))}}]),Calc}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calc},function(e,_,a){"use strict";var t=a(2),r=a(3),s=a(5),l=a(4),n=a(0),o=a.n(n),c=(a(17),function(e){Object(s.a)(a,e);var _=Object(l.a)(a);function a(){return Object(t.a)(this,a),_.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"pad"},o.a.createElement("div",{id:"display"},this.props.display),o.a.createElement("button",{id:"clear",onClick:this.props.onClear},"AC"),o.a.createElement("button",{value:"/",id:"divide",onClick:this.props.onOperator,className:"operation"},"/"),o.a.createElement("button",{value:"*",id:"multiply",className:"operation",onClick:this.props.onOperator},"*"),o.a.createElement("button",{value:7,id:"seven",onClick:this.props.onClick,className:"number"},"7"),o.a.createElement("button",{id:"eight",value:8,className:"number",onClick:this.props.onClick},"8"),o.a.createElement("button",{id:"nine",value:9,className:"number",onClick:this.props.onClick},"9"),o.a.createElement("button",{value:"-",id:"subtract",className:"operation",onClick:this.props.onOperator},"-"),o.a.createElement("button",{id:"four",value:4,className:"number",onClick:this.props.onClick},"4"),o.a.createElement("button",{id:"five",value:5,className:"number",onClick:this.props.onClick},"5"),o.a.createElement("button",{id:"six",value:6,className:"number",onClick:this.props.onClick},"6"),o.a.createElement("button",{value:"+",id:"add",className:"operation",onClick:this.props.onOperator},"+"),o.a.createElement("button",{id:"one",value:1,className:"number",onClick:this.props.onClick},"1"),o.a.createElement("button",{id:"two",value:2,className:"number",onClick:this.props.onClick},"2"),o.a.createElement("button",{id:"three",value:3,className:"number",onClick:this.props.onClick},"3"),o.a.createElement("button",{id:"equals",className:"number",onClick:this.props.onEqual},"="),o.a.createElement("button",{id:"zero",value:0,className:"number",onClick:this.props.onClick},"0"),o.a.createElement("button",{value:".",id:"decimal",className:"number",onClick:this.props.onDot},"."))}}]),a}(o.a.Component));_.a=c},function(e,_,a){e.exports=a(18)},,,,,function(e,_,a){},function(e,_,a){},function(e,_,a){},function(e,_,a){"use strict";a.r(_);var t=a(0),r=a.n(t),s=a(7),l=a.n(s),n=(a(15),a(16),a(8));var o=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(n.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a9acc009.chunk.js.map