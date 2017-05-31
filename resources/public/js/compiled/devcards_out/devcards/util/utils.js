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
var _STAR_print_newline_STAR_29326_29328 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29327_29329 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29326_29328,_STAR_print_fn_STAR_29327_29329,sb__27438__auto__){
return (function (x__27439__auto__){
return sb__27438__auto__.append(x__27439__auto__);
});})(_STAR_print_newline_STAR_29326_29328,_STAR_print_fn_STAR_29327_29329,sb__27438__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29327_29329;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29326_29328;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__27438__auto__)].join('');
}catch (e29324){if((e29324 instanceof Error)){
var e1 = e29324;
try{return obj.toString();
}catch (e29325){if((e29325 instanceof Error)){
var e2 = e29325;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<<Un-printable Type>>")].join('');
} else {
throw e29325;

}
}} else {
throw e29324;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_29331 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_29331;
}});

//# sourceMappingURL=utils.js.map?rel=1496186253185