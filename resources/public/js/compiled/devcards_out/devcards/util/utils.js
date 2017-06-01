// Compiled by ClojureScript 1.9.562 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__27438__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30784_30786 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30785_30787 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30784_30786,_STAR_print_fn_STAR_30785_30787,sb__27438__auto__){
return (function (x__27439__auto__){
return sb__27438__auto__.append(x__27439__auto__);
});})(_STAR_print_newline_STAR_30784_30786,_STAR_print_fn_STAR_30785_30787,sb__27438__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30785_30787;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30784_30786;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__27438__auto__)].join('');
}catch (e30782){if((e30782 instanceof Error)){
var e1 = e30782;
try{return obj.toString();
}catch (e30783){if((e30783 instanceof Error)){
var e2 = e30783;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e30783;

}
}} else {
throw e30782;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_30789 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_30789;
}});

//# sourceMappingURL=utils.js.map?rel=1496284140713