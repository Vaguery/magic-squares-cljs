// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38799 = [];
var len__27557__auto___38802 = arguments.length;
var i__27558__auto___38803 = (0);
while(true){
if((i__27558__auto___38803 < len__27557__auto___38802)){
args38799.push((arguments[i__27558__auto___38803]));

var G__38804 = (i__27558__auto___38803 + (1));
i__27558__auto___38803 = G__38804;
continue;
} else {
}
break;
}

var G__38801 = args38799.length;
switch (G__38801) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38799.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27564__auto__ = [];
var len__27557__auto___38807 = arguments.length;
var i__27558__auto___38808 = (0);
while(true){
if((i__27558__auto___38808 < len__27557__auto___38807)){
args__27564__auto__.push((arguments[i__27558__auto___38808]));

var G__38809 = (i__27558__auto___38808 + (1));
i__27558__auto___38808 = G__38809;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38806){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38806));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27564__auto__ = [];
var len__27557__auto___38811 = arguments.length;
var i__27558__auto___38812 = (0);
while(true){
if((i__27558__auto___38812 < len__27557__auto___38811)){
args__27564__auto__.push((arguments[i__27558__auto___38812]));

var G__38813 = (i__27558__auto___38812 + (1));
i__27558__auto___38812 = G__38813;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38810){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38810));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38814){
var map__38817 = p__38814;
var map__38817__$1 = ((((!((map__38817 == null)))?((((map__38817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38817):map__38817);
var message = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38817__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__26444__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__26432__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__26432__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__26432__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30326__auto___38979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___38979,ch){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___38979,ch){
return (function (state_38948){
var state_val_38949 = (state_38948[(1)]);
if((state_val_38949 === (7))){
var inst_38944 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38950_38980 = state_38948__$1;
(statearr_38950_38980[(2)] = inst_38944);

(statearr_38950_38980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (1))){
var state_38948__$1 = state_38948;
var statearr_38951_38981 = state_38948__$1;
(statearr_38951_38981[(2)] = null);

(statearr_38951_38981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (4))){
var inst_38901 = (state_38948[(7)]);
var inst_38901__$1 = (state_38948[(2)]);
var state_38948__$1 = (function (){var statearr_38952 = state_38948;
(statearr_38952[(7)] = inst_38901__$1);

return statearr_38952;
})();
if(cljs.core.truth_(inst_38901__$1)){
var statearr_38953_38982 = state_38948__$1;
(statearr_38953_38982[(1)] = (5));

} else {
var statearr_38954_38983 = state_38948__$1;
(statearr_38954_38983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (15))){
var inst_38908 = (state_38948[(8)]);
var inst_38923 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38908);
var inst_38924 = cljs.core.first.call(null,inst_38923);
var inst_38925 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38924);
var inst_38926 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38925)].join('');
var inst_38927 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38926);
var state_38948__$1 = state_38948;
var statearr_38955_38984 = state_38948__$1;
(statearr_38955_38984[(2)] = inst_38927);

(statearr_38955_38984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (13))){
var inst_38932 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38956_38985 = state_38948__$1;
(statearr_38956_38985[(2)] = inst_38932);

(statearr_38956_38985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (6))){
var state_38948__$1 = state_38948;
var statearr_38957_38986 = state_38948__$1;
(statearr_38957_38986[(2)] = null);

(statearr_38957_38986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (17))){
var inst_38930 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38958_38987 = state_38948__$1;
(statearr_38958_38987[(2)] = inst_38930);

(statearr_38958_38987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (3))){
var inst_38946 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38948__$1,inst_38946);
} else {
if((state_val_38949 === (12))){
var inst_38907 = (state_38948[(9)]);
var inst_38921 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38907,opts);
var state_38948__$1 = state_38948;
if(cljs.core.truth_(inst_38921)){
var statearr_38959_38988 = state_38948__$1;
(statearr_38959_38988[(1)] = (15));

} else {
var statearr_38960_38989 = state_38948__$1;
(statearr_38960_38989[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (2))){
var state_38948__$1 = state_38948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38948__$1,(4),ch);
} else {
if((state_val_38949 === (11))){
var inst_38908 = (state_38948[(8)]);
var inst_38913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38914 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38908);
var inst_38915 = cljs.core.async.timeout.call(null,(1000));
var inst_38916 = [inst_38914,inst_38915];
var inst_38917 = (new cljs.core.PersistentVector(null,2,(5),inst_38913,inst_38916,null));
var state_38948__$1 = state_38948;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38948__$1,(14),inst_38917);
} else {
if((state_val_38949 === (9))){
var inst_38908 = (state_38948[(8)]);
var inst_38934 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38935 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38908);
var inst_38936 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38935);
var inst_38937 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38936)].join('');
var inst_38938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38937);
var state_38948__$1 = (function (){var statearr_38961 = state_38948;
(statearr_38961[(10)] = inst_38934);

return statearr_38961;
})();
var statearr_38962_38990 = state_38948__$1;
(statearr_38962_38990[(2)] = inst_38938);

(statearr_38962_38990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (5))){
var inst_38901 = (state_38948[(7)]);
var inst_38903 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38904 = (new cljs.core.PersistentArrayMap(null,2,inst_38903,null));
var inst_38905 = (new cljs.core.PersistentHashSet(null,inst_38904,null));
var inst_38906 = figwheel.client.focus_msgs.call(null,inst_38905,inst_38901);
var inst_38907 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38906);
var inst_38908 = cljs.core.first.call(null,inst_38906);
var inst_38909 = figwheel.client.autoload_QMARK_.call(null);
var state_38948__$1 = (function (){var statearr_38963 = state_38948;
(statearr_38963[(8)] = inst_38908);

(statearr_38963[(9)] = inst_38907);

return statearr_38963;
})();
if(cljs.core.truth_(inst_38909)){
var statearr_38964_38991 = state_38948__$1;
(statearr_38964_38991[(1)] = (8));

} else {
var statearr_38965_38992 = state_38948__$1;
(statearr_38965_38992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (14))){
var inst_38919 = (state_38948[(2)]);
var state_38948__$1 = state_38948;
var statearr_38966_38993 = state_38948__$1;
(statearr_38966_38993[(2)] = inst_38919);

(statearr_38966_38993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (16))){
var state_38948__$1 = state_38948;
var statearr_38967_38994 = state_38948__$1;
(statearr_38967_38994[(2)] = null);

(statearr_38967_38994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (10))){
var inst_38940 = (state_38948[(2)]);
var state_38948__$1 = (function (){var statearr_38968 = state_38948;
(statearr_38968[(11)] = inst_38940);

return statearr_38968;
})();
var statearr_38969_38995 = state_38948__$1;
(statearr_38969_38995[(2)] = null);

(statearr_38969_38995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38949 === (8))){
var inst_38907 = (state_38948[(9)]);
var inst_38911 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38907,opts);
var state_38948__$1 = state_38948;
if(cljs.core.truth_(inst_38911)){
var statearr_38970_38996 = state_38948__$1;
(statearr_38970_38996[(1)] = (11));

} else {
var statearr_38971_38997 = state_38948__$1;
(statearr_38971_38997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30326__auto___38979,ch))
;
return ((function (switch__30214__auto__,c__30326__auto___38979,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30215__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30215__auto____0 = (function (){
var statearr_38975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38975[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30215__auto__);

(statearr_38975[(1)] = (1));

return statearr_38975;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30215__auto____1 = (function (state_38948){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_38948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e38976){if((e38976 instanceof Object)){
var ex__30218__auto__ = e38976;
var statearr_38977_38998 = state_38948;
(statearr_38977_38998[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38999 = state_38948;
state_38948 = G__38999;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30215__auto__ = function(state_38948){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30215__auto____1.call(this,state_38948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30215__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30215__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___38979,ch))
})();
var state__30328__auto__ = (function (){var statearr_38978 = f__30327__auto__.call(null);
(statearr_38978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___38979);

return statearr_38978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___38979,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39000_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39000_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39003 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39003){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39002){if((e39002 instanceof Error)){
var e = e39002;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39003], null));
} else {
var e = e39002;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39003))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39004){
var map__39013 = p__39004;
var map__39013__$1 = ((((!((map__39013 == null)))?((((map__39013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39013):map__39013);
var opts = map__39013__$1;
var build_id = cljs.core.get.call(null,map__39013__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39013,map__39013__$1,opts,build_id){
return (function (p__39015){
var vec__39016 = p__39015;
var seq__39017 = cljs.core.seq.call(null,vec__39016);
var first__39018 = cljs.core.first.call(null,seq__39017);
var seq__39017__$1 = cljs.core.next.call(null,seq__39017);
var map__39019 = first__39018;
var map__39019__$1 = ((((!((map__39019 == null)))?((((map__39019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39019):map__39019);
var msg = map__39019__$1;
var msg_name = cljs.core.get.call(null,map__39019__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39017__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39016,seq__39017,first__39018,seq__39017__$1,map__39019,map__39019__$1,msg,msg_name,_,map__39013,map__39013__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39016,seq__39017,first__39018,seq__39017__$1,map__39019,map__39019__$1,msg,msg_name,_,map__39013,map__39013__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39013,map__39013__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39027){
var vec__39028 = p__39027;
var seq__39029 = cljs.core.seq.call(null,vec__39028);
var first__39030 = cljs.core.first.call(null,seq__39029);
var seq__39029__$1 = cljs.core.next.call(null,seq__39029);
var map__39031 = first__39030;
var map__39031__$1 = ((((!((map__39031 == null)))?((((map__39031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39031):map__39031);
var msg = map__39031__$1;
var msg_name = cljs.core.get.call(null,map__39031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39029__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39033){
var map__39045 = p__39033;
var map__39045__$1 = ((((!((map__39045 == null)))?((((map__39045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39045):map__39045);
var on_compile_warning = cljs.core.get.call(null,map__39045__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39045__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39045,map__39045__$1,on_compile_warning,on_compile_fail){
return (function (p__39047){
var vec__39048 = p__39047;
var seq__39049 = cljs.core.seq.call(null,vec__39048);
var first__39050 = cljs.core.first.call(null,seq__39049);
var seq__39049__$1 = cljs.core.next.call(null,seq__39049);
var map__39051 = first__39050;
var map__39051__$1 = ((((!((map__39051 == null)))?((((map__39051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39051):map__39051);
var msg = map__39051__$1;
var msg_name = cljs.core.get.call(null,map__39051__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39049__$1;
var pred__39053 = cljs.core._EQ_;
var expr__39054 = msg_name;
if(cljs.core.truth_(pred__39053.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39054))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39053.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39054))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39045,map__39045__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__,msg_hist,msg_names,msg){
return (function (state_39282){
var state_val_39283 = (state_39282[(1)]);
if((state_val_39283 === (7))){
var inst_39202 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39202)){
var statearr_39284_39334 = state_39282__$1;
(statearr_39284_39334[(1)] = (8));

} else {
var statearr_39285_39335 = state_39282__$1;
(statearr_39285_39335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (20))){
var inst_39276 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39286_39336 = state_39282__$1;
(statearr_39286_39336[(2)] = inst_39276);

(statearr_39286_39336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (27))){
var inst_39272 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39287_39337 = state_39282__$1;
(statearr_39287_39337[(2)] = inst_39272);

(statearr_39287_39337[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (1))){
var inst_39195 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39195)){
var statearr_39288_39338 = state_39282__$1;
(statearr_39288_39338[(1)] = (2));

} else {
var statearr_39289_39339 = state_39282__$1;
(statearr_39289_39339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (24))){
var inst_39274 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39290_39340 = state_39282__$1;
(statearr_39290_39340[(2)] = inst_39274);

(statearr_39290_39340[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (4))){
var inst_39280 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39282__$1,inst_39280);
} else {
if((state_val_39283 === (15))){
var inst_39278 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39291_39341 = state_39282__$1;
(statearr_39291_39341[(2)] = inst_39278);

(statearr_39291_39341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (21))){
var inst_39231 = (state_39282[(2)]);
var inst_39232 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39233 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39232);
var state_39282__$1 = (function (){var statearr_39292 = state_39282;
(statearr_39292[(7)] = inst_39231);

return statearr_39292;
})();
var statearr_39293_39342 = state_39282__$1;
(statearr_39293_39342[(2)] = inst_39233);

(statearr_39293_39342[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (31))){
var inst_39261 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39261)){
var statearr_39294_39343 = state_39282__$1;
(statearr_39294_39343[(1)] = (34));

} else {
var statearr_39295_39344 = state_39282__$1;
(statearr_39295_39344[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (32))){
var inst_39270 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39296_39345 = state_39282__$1;
(statearr_39296_39345[(2)] = inst_39270);

(statearr_39296_39345[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (33))){
var inst_39257 = (state_39282[(2)]);
var inst_39258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39259 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39258);
var state_39282__$1 = (function (){var statearr_39297 = state_39282;
(statearr_39297[(8)] = inst_39257);

return statearr_39297;
})();
var statearr_39298_39346 = state_39282__$1;
(statearr_39298_39346[(2)] = inst_39259);

(statearr_39298_39346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (13))){
var inst_39216 = figwheel.client.heads_up.clear.call(null);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(16),inst_39216);
} else {
if((state_val_39283 === (22))){
var inst_39237 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39238 = figwheel.client.heads_up.append_warning_message.call(null,inst_39237);
var state_39282__$1 = state_39282;
var statearr_39299_39347 = state_39282__$1;
(statearr_39299_39347[(2)] = inst_39238);

(statearr_39299_39347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (36))){
var inst_39268 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39300_39348 = state_39282__$1;
(statearr_39300_39348[(2)] = inst_39268);

(statearr_39300_39348[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (29))){
var inst_39248 = (state_39282[(2)]);
var inst_39249 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39250 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39249);
var state_39282__$1 = (function (){var statearr_39301 = state_39282;
(statearr_39301[(9)] = inst_39248);

return statearr_39301;
})();
var statearr_39302_39349 = state_39282__$1;
(statearr_39302_39349[(2)] = inst_39250);

(statearr_39302_39349[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (6))){
var inst_39197 = (state_39282[(10)]);
var state_39282__$1 = state_39282;
var statearr_39303_39350 = state_39282__$1;
(statearr_39303_39350[(2)] = inst_39197);

(statearr_39303_39350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (28))){
var inst_39244 = (state_39282[(2)]);
var inst_39245 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39246 = figwheel.client.heads_up.display_warning.call(null,inst_39245);
var state_39282__$1 = (function (){var statearr_39304 = state_39282;
(statearr_39304[(11)] = inst_39244);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(29),inst_39246);
} else {
if((state_val_39283 === (25))){
var inst_39242 = figwheel.client.heads_up.clear.call(null);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(28),inst_39242);
} else {
if((state_val_39283 === (34))){
var inst_39263 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(37),inst_39263);
} else {
if((state_val_39283 === (17))){
var inst_39222 = (state_39282[(2)]);
var inst_39223 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39224 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39223);
var state_39282__$1 = (function (){var statearr_39305 = state_39282;
(statearr_39305[(12)] = inst_39222);

return statearr_39305;
})();
var statearr_39306_39351 = state_39282__$1;
(statearr_39306_39351[(2)] = inst_39224);

(statearr_39306_39351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (3))){
var inst_39214 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39214)){
var statearr_39307_39352 = state_39282__$1;
(statearr_39307_39352[(1)] = (13));

} else {
var statearr_39308_39353 = state_39282__$1;
(statearr_39308_39353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (12))){
var inst_39210 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39309_39354 = state_39282__$1;
(statearr_39309_39354[(2)] = inst_39210);

(statearr_39309_39354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (2))){
var inst_39197 = (state_39282[(10)]);
var inst_39197__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39282__$1 = (function (){var statearr_39310 = state_39282;
(statearr_39310[(10)] = inst_39197__$1);

return statearr_39310;
})();
if(cljs.core.truth_(inst_39197__$1)){
var statearr_39311_39355 = state_39282__$1;
(statearr_39311_39355[(1)] = (5));

} else {
var statearr_39312_39356 = state_39282__$1;
(statearr_39312_39356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (23))){
var inst_39240 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39240)){
var statearr_39313_39357 = state_39282__$1;
(statearr_39313_39357[(1)] = (25));

} else {
var statearr_39314_39358 = state_39282__$1;
(statearr_39314_39358[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (35))){
var state_39282__$1 = state_39282;
var statearr_39315_39359 = state_39282__$1;
(statearr_39315_39359[(2)] = null);

(statearr_39315_39359[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (19))){
var inst_39235 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39235)){
var statearr_39316_39360 = state_39282__$1;
(statearr_39316_39360[(1)] = (22));

} else {
var statearr_39317_39361 = state_39282__$1;
(statearr_39317_39361[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (11))){
var inst_39206 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39318_39362 = state_39282__$1;
(statearr_39318_39362[(2)] = inst_39206);

(statearr_39318_39362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (9))){
var inst_39208 = figwheel.client.heads_up.clear.call(null);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(12),inst_39208);
} else {
if((state_val_39283 === (5))){
var inst_39199 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39282__$1 = state_39282;
var statearr_39319_39363 = state_39282__$1;
(statearr_39319_39363[(2)] = inst_39199);

(statearr_39319_39363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (14))){
var inst_39226 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39226)){
var statearr_39320_39364 = state_39282__$1;
(statearr_39320_39364[(1)] = (18));

} else {
var statearr_39321_39365 = state_39282__$1;
(statearr_39321_39365[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (26))){
var inst_39252 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39282__$1 = state_39282;
if(cljs.core.truth_(inst_39252)){
var statearr_39322_39366 = state_39282__$1;
(statearr_39322_39366[(1)] = (30));

} else {
var statearr_39323_39367 = state_39282__$1;
(statearr_39323_39367[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (16))){
var inst_39218 = (state_39282[(2)]);
var inst_39219 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39220 = figwheel.client.heads_up.display_exception.call(null,inst_39219);
var state_39282__$1 = (function (){var statearr_39324 = state_39282;
(statearr_39324[(13)] = inst_39218);

return statearr_39324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(17),inst_39220);
} else {
if((state_val_39283 === (30))){
var inst_39254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39255 = figwheel.client.heads_up.display_warning.call(null,inst_39254);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(33),inst_39255);
} else {
if((state_val_39283 === (10))){
var inst_39212 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39325_39368 = state_39282__$1;
(statearr_39325_39368[(2)] = inst_39212);

(statearr_39325_39368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (18))){
var inst_39228 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39229 = figwheel.client.heads_up.display_exception.call(null,inst_39228);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(21),inst_39229);
} else {
if((state_val_39283 === (37))){
var inst_39265 = (state_39282[(2)]);
var state_39282__$1 = state_39282;
var statearr_39326_39369 = state_39282__$1;
(statearr_39326_39369[(2)] = inst_39265);

(statearr_39326_39369[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39283 === (8))){
var inst_39204 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39282__$1 = state_39282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39282__$1,(11),inst_39204);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30326__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30214__auto__,c__30326__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto____0 = (function (){
var statearr_39330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39330[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto__);

(statearr_39330[(1)] = (1));

return statearr_39330;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto____1 = (function (state_39282){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_39282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e39331){if((e39331 instanceof Object)){
var ex__30218__auto__ = e39331;
var statearr_39332_39370 = state_39282;
(statearr_39332_39370[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39371 = state_39282;
state_39282 = G__39371;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto__ = function(state_39282){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto____1.call(this,state_39282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__,msg_hist,msg_names,msg))
})();
var state__30328__auto__ = (function (){var statearr_39333 = f__30327__auto__.call(null);
(statearr_39333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_39333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,msg_hist,msg_names,msg))
);

return c__30326__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30326__auto___39434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto___39434,ch){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto___39434,ch){
return (function (state_39417){
var state_val_39418 = (state_39417[(1)]);
if((state_val_39418 === (1))){
var state_39417__$1 = state_39417;
var statearr_39419_39435 = state_39417__$1;
(statearr_39419_39435[(2)] = null);

(statearr_39419_39435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (2))){
var state_39417__$1 = state_39417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39417__$1,(4),ch);
} else {
if((state_val_39418 === (3))){
var inst_39415 = (state_39417[(2)]);
var state_39417__$1 = state_39417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39417__$1,inst_39415);
} else {
if((state_val_39418 === (4))){
var inst_39405 = (state_39417[(7)]);
var inst_39405__$1 = (state_39417[(2)]);
var state_39417__$1 = (function (){var statearr_39420 = state_39417;
(statearr_39420[(7)] = inst_39405__$1);

return statearr_39420;
})();
if(cljs.core.truth_(inst_39405__$1)){
var statearr_39421_39436 = state_39417__$1;
(statearr_39421_39436[(1)] = (5));

} else {
var statearr_39422_39437 = state_39417__$1;
(statearr_39422_39437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (5))){
var inst_39405 = (state_39417[(7)]);
var inst_39407 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39405);
var state_39417__$1 = state_39417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39417__$1,(8),inst_39407);
} else {
if((state_val_39418 === (6))){
var state_39417__$1 = state_39417;
var statearr_39423_39438 = state_39417__$1;
(statearr_39423_39438[(2)] = null);

(statearr_39423_39438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (7))){
var inst_39413 = (state_39417[(2)]);
var state_39417__$1 = state_39417;
var statearr_39424_39439 = state_39417__$1;
(statearr_39424_39439[(2)] = inst_39413);

(statearr_39424_39439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39418 === (8))){
var inst_39409 = (state_39417[(2)]);
var state_39417__$1 = (function (){var statearr_39425 = state_39417;
(statearr_39425[(8)] = inst_39409);

return statearr_39425;
})();
var statearr_39426_39440 = state_39417__$1;
(statearr_39426_39440[(2)] = null);

(statearr_39426_39440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30326__auto___39434,ch))
;
return ((function (switch__30214__auto__,c__30326__auto___39434,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30215__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30215__auto____0 = (function (){
var statearr_39430 = [null,null,null,null,null,null,null,null,null];
(statearr_39430[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30215__auto__);

(statearr_39430[(1)] = (1));

return statearr_39430;
});
var figwheel$client$heads_up_plugin_$_state_machine__30215__auto____1 = (function (state_39417){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_39417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e39431){if((e39431 instanceof Object)){
var ex__30218__auto__ = e39431;
var statearr_39432_39441 = state_39417;
(statearr_39432_39441[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39442 = state_39417;
state_39417 = G__39442;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30215__auto__ = function(state_39417){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30215__auto____1.call(this,state_39417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30215__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30215__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto___39434,ch))
})();
var state__30328__auto__ = (function (){var statearr_39433 = f__30327__auto__.call(null);
(statearr_39433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto___39434);

return statearr_39433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto___39434,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__){
return (function (state_39463){
var state_val_39464 = (state_39463[(1)]);
if((state_val_39464 === (1))){
var inst_39458 = cljs.core.async.timeout.call(null,(3000));
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39463__$1,(2),inst_39458);
} else {
if((state_val_39464 === (2))){
var inst_39460 = (state_39463[(2)]);
var inst_39461 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39463__$1 = (function (){var statearr_39465 = state_39463;
(statearr_39465[(7)] = inst_39460);

return statearr_39465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39463__$1,inst_39461);
} else {
return null;
}
}
});})(c__30326__auto__))
;
return ((function (switch__30214__auto__,c__30326__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30215__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30215__auto____0 = (function (){
var statearr_39469 = [null,null,null,null,null,null,null,null];
(statearr_39469[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30215__auto__);

(statearr_39469[(1)] = (1));

return statearr_39469;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30215__auto____1 = (function (state_39463){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_39463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e39470){if((e39470 instanceof Object)){
var ex__30218__auto__ = e39470;
var statearr_39471_39473 = state_39463;
(statearr_39471_39473[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39474 = state_39463;
state_39463 = G__39474;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30215__auto__ = function(state_39463){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30215__auto____1.call(this,state_39463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30215__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30215__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__))
})();
var state__30328__auto__ = (function (){var statearr_39472 = f__30327__auto__.call(null);
(statearr_39472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_39472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__))
);

return c__30326__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30326__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30326__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30327__auto__ = (function (){var switch__30214__auto__ = ((function (c__30326__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39497){
var state_val_39498 = (state_39497[(1)]);
if((state_val_39498 === (1))){
var inst_39491 = cljs.core.async.timeout.call(null,(2000));
var state_39497__$1 = state_39497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39497__$1,(2),inst_39491);
} else {
if((state_val_39498 === (2))){
var inst_39493 = (state_39497[(2)]);
var inst_39494 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39495 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39494);
var state_39497__$1 = (function (){var statearr_39499 = state_39497;
(statearr_39499[(7)] = inst_39493);

return statearr_39499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39497__$1,inst_39495);
} else {
return null;
}
}
});})(c__30326__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30214__auto__,c__30326__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto____0 = (function (){
var statearr_39503 = [null,null,null,null,null,null,null,null];
(statearr_39503[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto__);

(statearr_39503[(1)] = (1));

return statearr_39503;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto____1 = (function (state_39497){
while(true){
var ret_value__30216__auto__ = (function (){try{while(true){
var result__30217__auto__ = switch__30214__auto__.call(null,state_39497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30217__auto__;
}
break;
}
}catch (e39504){if((e39504 instanceof Object)){
var ex__30218__auto__ = e39504;
var statearr_39505_39507 = state_39497;
(statearr_39505_39507[(5)] = ex__30218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39508 = state_39497;
state_39497 = G__39508;
continue;
} else {
return ret_value__30216__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto__ = function(state_39497){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto____1.call(this,state_39497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30215__auto__;
})()
;})(switch__30214__auto__,c__30326__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30328__auto__ = (function (){var statearr_39506 = f__30327__auto__.call(null);
(statearr_39506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30326__auto__);

return statearr_39506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30328__auto__);
});})(c__30326__auto__,figwheel_version,temp__4657__auto__))
);

return c__30326__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39509){
var map__39513 = p__39509;
var map__39513__$1 = ((((!((map__39513 == null)))?((((map__39513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39513):map__39513);
var file = cljs.core.get.call(null,map__39513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39513__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39515 = "";
var G__39515__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39515),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39515);
var G__39515__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39515__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39515__$1);
if(cljs.core.truth_((function (){var and__26432__auto__ = line;
if(cljs.core.truth_(and__26432__auto__)){
return column;
} else {
return and__26432__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39515__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39515__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39516){
var map__39523 = p__39516;
var map__39523__$1 = ((((!((map__39523 == null)))?((((map__39523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39523):map__39523);
var ed = map__39523__$1;
var formatted_exception = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39523__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39525_39529 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39526_39530 = null;
var count__39527_39531 = (0);
var i__39528_39532 = (0);
while(true){
if((i__39528_39532 < count__39527_39531)){
var msg_39533 = cljs.core._nth.call(null,chunk__39526_39530,i__39528_39532);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39533);

var G__39534 = seq__39525_39529;
var G__39535 = chunk__39526_39530;
var G__39536 = count__39527_39531;
var G__39537 = (i__39528_39532 + (1));
seq__39525_39529 = G__39534;
chunk__39526_39530 = G__39535;
count__39527_39531 = G__39536;
i__39528_39532 = G__39537;
continue;
} else {
var temp__4657__auto___39538 = cljs.core.seq.call(null,seq__39525_39529);
if(temp__4657__auto___39538){
var seq__39525_39539__$1 = temp__4657__auto___39538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39525_39539__$1)){
var c__27263__auto___39540 = cljs.core.chunk_first.call(null,seq__39525_39539__$1);
var G__39541 = cljs.core.chunk_rest.call(null,seq__39525_39539__$1);
var G__39542 = c__27263__auto___39540;
var G__39543 = cljs.core.count.call(null,c__27263__auto___39540);
var G__39544 = (0);
seq__39525_39529 = G__39541;
chunk__39526_39530 = G__39542;
count__39527_39531 = G__39543;
i__39528_39532 = G__39544;
continue;
} else {
var msg_39545 = cljs.core.first.call(null,seq__39525_39539__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39545);

var G__39546 = cljs.core.next.call(null,seq__39525_39539__$1);
var G__39547 = null;
var G__39548 = (0);
var G__39549 = (0);
seq__39525_39529 = G__39546;
chunk__39526_39530 = G__39547;
count__39527_39531 = G__39548;
i__39528_39532 = G__39549;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39550){
var map__39553 = p__39550;
var map__39553__$1 = ((((!((map__39553 == null)))?((((map__39553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39553):map__39553);
var w = map__39553__$1;
var message = cljs.core.get.call(null,map__39553__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__26432__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__26432__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__26432__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39565 = cljs.core.seq.call(null,plugins);
var chunk__39566 = null;
var count__39567 = (0);
var i__39568 = (0);
while(true){
if((i__39568 < count__39567)){
var vec__39569 = cljs.core._nth.call(null,chunk__39566,i__39568);
var k = cljs.core.nth.call(null,vec__39569,(0),null);
var plugin = cljs.core.nth.call(null,vec__39569,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39575 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39565,chunk__39566,count__39567,i__39568,pl_39575,vec__39569,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39575.call(null,msg_hist);
});})(seq__39565,chunk__39566,count__39567,i__39568,pl_39575,vec__39569,k,plugin))
);
} else {
}

var G__39576 = seq__39565;
var G__39577 = chunk__39566;
var G__39578 = count__39567;
var G__39579 = (i__39568 + (1));
seq__39565 = G__39576;
chunk__39566 = G__39577;
count__39567 = G__39578;
i__39568 = G__39579;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39565);
if(temp__4657__auto__){
var seq__39565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39565__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__39565__$1);
var G__39580 = cljs.core.chunk_rest.call(null,seq__39565__$1);
var G__39581 = c__27263__auto__;
var G__39582 = cljs.core.count.call(null,c__27263__auto__);
var G__39583 = (0);
seq__39565 = G__39580;
chunk__39566 = G__39581;
count__39567 = G__39582;
i__39568 = G__39583;
continue;
} else {
var vec__39572 = cljs.core.first.call(null,seq__39565__$1);
var k = cljs.core.nth.call(null,vec__39572,(0),null);
var plugin = cljs.core.nth.call(null,vec__39572,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39584 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39565,chunk__39566,count__39567,i__39568,pl_39584,vec__39572,k,plugin,seq__39565__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39584.call(null,msg_hist);
});})(seq__39565,chunk__39566,count__39567,i__39568,pl_39584,vec__39572,k,plugin,seq__39565__$1,temp__4657__auto__))
);
} else {
}

var G__39585 = cljs.core.next.call(null,seq__39565__$1);
var G__39586 = null;
var G__39587 = (0);
var G__39588 = (0);
seq__39565 = G__39585;
chunk__39566 = G__39586;
count__39567 = G__39587;
i__39568 = G__39588;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39589 = [];
var len__27557__auto___39596 = arguments.length;
var i__27558__auto___39597 = (0);
while(true){
if((i__27558__auto___39597 < len__27557__auto___39596)){
args39589.push((arguments[i__27558__auto___39597]));

var G__39598 = (i__27558__auto___39597 + (1));
i__27558__auto___39597 = G__39598;
continue;
} else {
}
break;
}

var G__39591 = args39589.length;
switch (G__39591) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39589.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39592_39600 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39593_39601 = null;
var count__39594_39602 = (0);
var i__39595_39603 = (0);
while(true){
if((i__39595_39603 < count__39594_39602)){
var msg_39604 = cljs.core._nth.call(null,chunk__39593_39601,i__39595_39603);
figwheel.client.socket.handle_incoming_message.call(null,msg_39604);

var G__39605 = seq__39592_39600;
var G__39606 = chunk__39593_39601;
var G__39607 = count__39594_39602;
var G__39608 = (i__39595_39603 + (1));
seq__39592_39600 = G__39605;
chunk__39593_39601 = G__39606;
count__39594_39602 = G__39607;
i__39595_39603 = G__39608;
continue;
} else {
var temp__4657__auto___39609 = cljs.core.seq.call(null,seq__39592_39600);
if(temp__4657__auto___39609){
var seq__39592_39610__$1 = temp__4657__auto___39609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39592_39610__$1)){
var c__27263__auto___39611 = cljs.core.chunk_first.call(null,seq__39592_39610__$1);
var G__39612 = cljs.core.chunk_rest.call(null,seq__39592_39610__$1);
var G__39613 = c__27263__auto___39611;
var G__39614 = cljs.core.count.call(null,c__27263__auto___39611);
var G__39615 = (0);
seq__39592_39600 = G__39612;
chunk__39593_39601 = G__39613;
count__39594_39602 = G__39614;
i__39595_39603 = G__39615;
continue;
} else {
var msg_39616 = cljs.core.first.call(null,seq__39592_39610__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39616);

var G__39617 = cljs.core.next.call(null,seq__39592_39610__$1);
var G__39618 = null;
var G__39619 = (0);
var G__39620 = (0);
seq__39592_39600 = G__39617;
chunk__39593_39601 = G__39618;
count__39594_39602 = G__39619;
i__39595_39603 = G__39620;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27564__auto__ = [];
var len__27557__auto___39625 = arguments.length;
var i__27558__auto___39626 = (0);
while(true){
if((i__27558__auto___39626 < len__27557__auto___39625)){
args__27564__auto__.push((arguments[i__27558__auto___39626]));

var G__39627 = (i__27558__auto___39626 + (1));
i__27558__auto___39626 = G__39627;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39622){
var map__39623 = p__39622;
var map__39623__$1 = ((((!((map__39623 == null)))?((((map__39623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39623):map__39623);
var opts = map__39623__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39621){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39621));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39629){if((e39629 instanceof Error)){
var e = e39629;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39629;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39633){
var map__39634 = p__39633;
var map__39634__$1 = ((((!((map__39634 == null)))?((((map__39634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39634):map__39634);
var msg_name = cljs.core.get.call(null,map__39634__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496186271013