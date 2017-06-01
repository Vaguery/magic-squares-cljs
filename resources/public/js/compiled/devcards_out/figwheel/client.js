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
var args38974 = [];
var len__27557__auto___38977 = arguments.length;
var i__27558__auto___38978 = (0);
while(true){
if((i__27558__auto___38978 < len__27557__auto___38977)){
args38974.push((arguments[i__27558__auto___38978]));

var G__38979 = (i__27558__auto___38978 + (1));
i__27558__auto___38978 = G__38979;
continue;
} else {
}
break;
}

var G__38976 = args38974.length;
switch (G__38976) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38974.length)].join('')));

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
var len__27557__auto___38982 = arguments.length;
var i__27558__auto___38983 = (0);
while(true){
if((i__27558__auto___38983 < len__27557__auto___38982)){
args__27564__auto__.push((arguments[i__27558__auto___38983]));

var G__38984 = (i__27558__auto___38983 + (1));
i__27558__auto___38983 = G__38984;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38981){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38981));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27564__auto__ = [];
var len__27557__auto___38986 = arguments.length;
var i__27558__auto___38987 = (0);
while(true){
if((i__27558__auto___38987 < len__27557__auto___38986)){
args__27564__auto__.push((arguments[i__27558__auto___38987]));

var G__38988 = (i__27558__auto___38987 + (1));
i__27558__auto___38987 = G__38988;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38985){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38985));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38989){
var map__38992 = p__38989;
var map__38992__$1 = ((((!((map__38992 == null)))?((((map__38992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38992):map__38992);
var message = cljs.core.get.call(null,map__38992__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38992__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31784__auto___39154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___39154,ch){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___39154,ch){
return (function (state_39123){
var state_val_39124 = (state_39123[(1)]);
if((state_val_39124 === (7))){
var inst_39119 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39125_39155 = state_39123__$1;
(statearr_39125_39155[(2)] = inst_39119);

(statearr_39125_39155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (1))){
var state_39123__$1 = state_39123;
var statearr_39126_39156 = state_39123__$1;
(statearr_39126_39156[(2)] = null);

(statearr_39126_39156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (4))){
var inst_39076 = (state_39123[(7)]);
var inst_39076__$1 = (state_39123[(2)]);
var state_39123__$1 = (function (){var statearr_39127 = state_39123;
(statearr_39127[(7)] = inst_39076__$1);

return statearr_39127;
})();
if(cljs.core.truth_(inst_39076__$1)){
var statearr_39128_39157 = state_39123__$1;
(statearr_39128_39157[(1)] = (5));

} else {
var statearr_39129_39158 = state_39123__$1;
(statearr_39129_39158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (15))){
var inst_39083 = (state_39123[(8)]);
var inst_39098 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39083);
var inst_39099 = cljs.core.first.call(null,inst_39098);
var inst_39100 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39099);
var inst_39101 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39100)].join('');
var inst_39102 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39101);
var state_39123__$1 = state_39123;
var statearr_39130_39159 = state_39123__$1;
(statearr_39130_39159[(2)] = inst_39102);

(statearr_39130_39159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (13))){
var inst_39107 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39131_39160 = state_39123__$1;
(statearr_39131_39160[(2)] = inst_39107);

(statearr_39131_39160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (6))){
var state_39123__$1 = state_39123;
var statearr_39132_39161 = state_39123__$1;
(statearr_39132_39161[(2)] = null);

(statearr_39132_39161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (17))){
var inst_39105 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39133_39162 = state_39123__$1;
(statearr_39133_39162[(2)] = inst_39105);

(statearr_39133_39162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (3))){
var inst_39121 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39123__$1,inst_39121);
} else {
if((state_val_39124 === (12))){
var inst_39082 = (state_39123[(9)]);
var inst_39096 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39082,opts);
var state_39123__$1 = state_39123;
if(cljs.core.truth_(inst_39096)){
var statearr_39134_39163 = state_39123__$1;
(statearr_39134_39163[(1)] = (15));

} else {
var statearr_39135_39164 = state_39123__$1;
(statearr_39135_39164[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (2))){
var state_39123__$1 = state_39123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39123__$1,(4),ch);
} else {
if((state_val_39124 === (11))){
var inst_39083 = (state_39123[(8)]);
var inst_39088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39089 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39083);
var inst_39090 = cljs.core.async.timeout.call(null,(1000));
var inst_39091 = [inst_39089,inst_39090];
var inst_39092 = (new cljs.core.PersistentVector(null,2,(5),inst_39088,inst_39091,null));
var state_39123__$1 = state_39123;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39123__$1,(14),inst_39092);
} else {
if((state_val_39124 === (9))){
var inst_39083 = (state_39123[(8)]);
var inst_39109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39110 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39083);
var inst_39111 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39110);
var inst_39112 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39111)].join('');
var inst_39113 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39112);
var state_39123__$1 = (function (){var statearr_39136 = state_39123;
(statearr_39136[(10)] = inst_39109);

return statearr_39136;
})();
var statearr_39137_39165 = state_39123__$1;
(statearr_39137_39165[(2)] = inst_39113);

(statearr_39137_39165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (5))){
var inst_39076 = (state_39123[(7)]);
var inst_39078 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39079 = (new cljs.core.PersistentArrayMap(null,2,inst_39078,null));
var inst_39080 = (new cljs.core.PersistentHashSet(null,inst_39079,null));
var inst_39081 = figwheel.client.focus_msgs.call(null,inst_39080,inst_39076);
var inst_39082 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39081);
var inst_39083 = cljs.core.first.call(null,inst_39081);
var inst_39084 = figwheel.client.autoload_QMARK_.call(null);
var state_39123__$1 = (function (){var statearr_39138 = state_39123;
(statearr_39138[(9)] = inst_39082);

(statearr_39138[(8)] = inst_39083);

return statearr_39138;
})();
if(cljs.core.truth_(inst_39084)){
var statearr_39139_39166 = state_39123__$1;
(statearr_39139_39166[(1)] = (8));

} else {
var statearr_39140_39167 = state_39123__$1;
(statearr_39140_39167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (14))){
var inst_39094 = (state_39123[(2)]);
var state_39123__$1 = state_39123;
var statearr_39141_39168 = state_39123__$1;
(statearr_39141_39168[(2)] = inst_39094);

(statearr_39141_39168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (16))){
var state_39123__$1 = state_39123;
var statearr_39142_39169 = state_39123__$1;
(statearr_39142_39169[(2)] = null);

(statearr_39142_39169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (10))){
var inst_39115 = (state_39123[(2)]);
var state_39123__$1 = (function (){var statearr_39143 = state_39123;
(statearr_39143[(11)] = inst_39115);

return statearr_39143;
})();
var statearr_39144_39170 = state_39123__$1;
(statearr_39144_39170[(2)] = null);

(statearr_39144_39170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39124 === (8))){
var inst_39082 = (state_39123[(9)]);
var inst_39086 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39082,opts);
var state_39123__$1 = state_39123;
if(cljs.core.truth_(inst_39086)){
var statearr_39145_39171 = state_39123__$1;
(statearr_39145_39171[(1)] = (11));

} else {
var statearr_39146_39172 = state_39123__$1;
(statearr_39146_39172[(1)] = (12));

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
});})(c__31784__auto___39154,ch))
;
return ((function (switch__31672__auto__,c__31784__auto___39154,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31673__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31673__auto____0 = (function (){
var statearr_39150 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39150[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31673__auto__);

(statearr_39150[(1)] = (1));

return statearr_39150;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31673__auto____1 = (function (state_39123){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_39123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e39151){if((e39151 instanceof Object)){
var ex__31676__auto__ = e39151;
var statearr_39152_39173 = state_39123;
(statearr_39152_39173[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39174 = state_39123;
state_39123 = G__39174;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31673__auto__ = function(state_39123){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31673__auto____1.call(this,state_39123);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31673__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31673__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___39154,ch))
})();
var state__31786__auto__ = (function (){var statearr_39153 = f__31785__auto__.call(null);
(statearr_39153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___39154);

return statearr_39153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___39154,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39175_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39175_SHARP_));
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
var base_path_39178 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39178){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39177){if((e39177 instanceof Error)){
var e = e39177;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39178], null));
} else {
var e = e39177;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39178))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39179){
var map__39188 = p__39179;
var map__39188__$1 = ((((!((map__39188 == null)))?((((map__39188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39188):map__39188);
var opts = map__39188__$1;
var build_id = cljs.core.get.call(null,map__39188__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39188,map__39188__$1,opts,build_id){
return (function (p__39190){
var vec__39191 = p__39190;
var seq__39192 = cljs.core.seq.call(null,vec__39191);
var first__39193 = cljs.core.first.call(null,seq__39192);
var seq__39192__$1 = cljs.core.next.call(null,seq__39192);
var map__39194 = first__39193;
var map__39194__$1 = ((((!((map__39194 == null)))?((((map__39194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39194):map__39194);
var msg = map__39194__$1;
var msg_name = cljs.core.get.call(null,map__39194__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39192__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39191,seq__39192,first__39193,seq__39192__$1,map__39194,map__39194__$1,msg,msg_name,_,map__39188,map__39188__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39191,seq__39192,first__39193,seq__39192__$1,map__39194,map__39194__$1,msg,msg_name,_,map__39188,map__39188__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39188,map__39188__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39202){
var vec__39203 = p__39202;
var seq__39204 = cljs.core.seq.call(null,vec__39203);
var first__39205 = cljs.core.first.call(null,seq__39204);
var seq__39204__$1 = cljs.core.next.call(null,seq__39204);
var map__39206 = first__39205;
var map__39206__$1 = ((((!((map__39206 == null)))?((((map__39206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39206):map__39206);
var msg = map__39206__$1;
var msg_name = cljs.core.get.call(null,map__39206__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39204__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39208){
var map__39220 = p__39208;
var map__39220__$1 = ((((!((map__39220 == null)))?((((map__39220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39220):map__39220);
var on_compile_warning = cljs.core.get.call(null,map__39220__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39220__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39220,map__39220__$1,on_compile_warning,on_compile_fail){
return (function (p__39222){
var vec__39223 = p__39222;
var seq__39224 = cljs.core.seq.call(null,vec__39223);
var first__39225 = cljs.core.first.call(null,seq__39224);
var seq__39224__$1 = cljs.core.next.call(null,seq__39224);
var map__39226 = first__39225;
var map__39226__$1 = ((((!((map__39226 == null)))?((((map__39226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39226):map__39226);
var msg = map__39226__$1;
var msg_name = cljs.core.get.call(null,map__39226__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39224__$1;
var pred__39228 = cljs.core._EQ_;
var expr__39229 = msg_name;
if(cljs.core.truth_(pred__39228.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39229))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39228.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39229))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39220,map__39220__$1,on_compile_warning,on_compile_fail))
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
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__,msg_hist,msg_names,msg){
return (function (state_39457){
var state_val_39458 = (state_39457[(1)]);
if((state_val_39458 === (7))){
var inst_39377 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39377)){
var statearr_39459_39509 = state_39457__$1;
(statearr_39459_39509[(1)] = (8));

} else {
var statearr_39460_39510 = state_39457__$1;
(statearr_39460_39510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (20))){
var inst_39451 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39461_39511 = state_39457__$1;
(statearr_39461_39511[(2)] = inst_39451);

(statearr_39461_39511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (27))){
var inst_39447 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39462_39512 = state_39457__$1;
(statearr_39462_39512[(2)] = inst_39447);

(statearr_39462_39512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (1))){
var inst_39370 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39370)){
var statearr_39463_39513 = state_39457__$1;
(statearr_39463_39513[(1)] = (2));

} else {
var statearr_39464_39514 = state_39457__$1;
(statearr_39464_39514[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (24))){
var inst_39449 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39465_39515 = state_39457__$1;
(statearr_39465_39515[(2)] = inst_39449);

(statearr_39465_39515[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (4))){
var inst_39455 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39457__$1,inst_39455);
} else {
if((state_val_39458 === (15))){
var inst_39453 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39466_39516 = state_39457__$1;
(statearr_39466_39516[(2)] = inst_39453);

(statearr_39466_39516[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (21))){
var inst_39406 = (state_39457[(2)]);
var inst_39407 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39408 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39407);
var state_39457__$1 = (function (){var statearr_39467 = state_39457;
(statearr_39467[(7)] = inst_39406);

return statearr_39467;
})();
var statearr_39468_39517 = state_39457__$1;
(statearr_39468_39517[(2)] = inst_39408);

(statearr_39468_39517[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (31))){
var inst_39436 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39436)){
var statearr_39469_39518 = state_39457__$1;
(statearr_39469_39518[(1)] = (34));

} else {
var statearr_39470_39519 = state_39457__$1;
(statearr_39470_39519[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (32))){
var inst_39445 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39471_39520 = state_39457__$1;
(statearr_39471_39520[(2)] = inst_39445);

(statearr_39471_39520[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (33))){
var inst_39432 = (state_39457[(2)]);
var inst_39433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39434 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39433);
var state_39457__$1 = (function (){var statearr_39472 = state_39457;
(statearr_39472[(8)] = inst_39432);

return statearr_39472;
})();
var statearr_39473_39521 = state_39457__$1;
(statearr_39473_39521[(2)] = inst_39434);

(statearr_39473_39521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (13))){
var inst_39391 = figwheel.client.heads_up.clear.call(null);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(16),inst_39391);
} else {
if((state_val_39458 === (22))){
var inst_39412 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39413 = figwheel.client.heads_up.append_warning_message.call(null,inst_39412);
var state_39457__$1 = state_39457;
var statearr_39474_39522 = state_39457__$1;
(statearr_39474_39522[(2)] = inst_39413);

(statearr_39474_39522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (36))){
var inst_39443 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39475_39523 = state_39457__$1;
(statearr_39475_39523[(2)] = inst_39443);

(statearr_39475_39523[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (29))){
var inst_39423 = (state_39457[(2)]);
var inst_39424 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39425 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39424);
var state_39457__$1 = (function (){var statearr_39476 = state_39457;
(statearr_39476[(9)] = inst_39423);

return statearr_39476;
})();
var statearr_39477_39524 = state_39457__$1;
(statearr_39477_39524[(2)] = inst_39425);

(statearr_39477_39524[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (6))){
var inst_39372 = (state_39457[(10)]);
var state_39457__$1 = state_39457;
var statearr_39478_39525 = state_39457__$1;
(statearr_39478_39525[(2)] = inst_39372);

(statearr_39478_39525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (28))){
var inst_39419 = (state_39457[(2)]);
var inst_39420 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39421 = figwheel.client.heads_up.display_warning.call(null,inst_39420);
var state_39457__$1 = (function (){var statearr_39479 = state_39457;
(statearr_39479[(11)] = inst_39419);

return statearr_39479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(29),inst_39421);
} else {
if((state_val_39458 === (25))){
var inst_39417 = figwheel.client.heads_up.clear.call(null);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(28),inst_39417);
} else {
if((state_val_39458 === (34))){
var inst_39438 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(37),inst_39438);
} else {
if((state_val_39458 === (17))){
var inst_39397 = (state_39457[(2)]);
var inst_39398 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39399 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39398);
var state_39457__$1 = (function (){var statearr_39480 = state_39457;
(statearr_39480[(12)] = inst_39397);

return statearr_39480;
})();
var statearr_39481_39526 = state_39457__$1;
(statearr_39481_39526[(2)] = inst_39399);

(statearr_39481_39526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (3))){
var inst_39389 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39389)){
var statearr_39482_39527 = state_39457__$1;
(statearr_39482_39527[(1)] = (13));

} else {
var statearr_39483_39528 = state_39457__$1;
(statearr_39483_39528[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (12))){
var inst_39385 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39484_39529 = state_39457__$1;
(statearr_39484_39529[(2)] = inst_39385);

(statearr_39484_39529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (2))){
var inst_39372 = (state_39457[(10)]);
var inst_39372__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39457__$1 = (function (){var statearr_39485 = state_39457;
(statearr_39485[(10)] = inst_39372__$1);

return statearr_39485;
})();
if(cljs.core.truth_(inst_39372__$1)){
var statearr_39486_39530 = state_39457__$1;
(statearr_39486_39530[(1)] = (5));

} else {
var statearr_39487_39531 = state_39457__$1;
(statearr_39487_39531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (23))){
var inst_39415 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39415)){
var statearr_39488_39532 = state_39457__$1;
(statearr_39488_39532[(1)] = (25));

} else {
var statearr_39489_39533 = state_39457__$1;
(statearr_39489_39533[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (35))){
var state_39457__$1 = state_39457;
var statearr_39490_39534 = state_39457__$1;
(statearr_39490_39534[(2)] = null);

(statearr_39490_39534[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (19))){
var inst_39410 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39410)){
var statearr_39491_39535 = state_39457__$1;
(statearr_39491_39535[(1)] = (22));

} else {
var statearr_39492_39536 = state_39457__$1;
(statearr_39492_39536[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (11))){
var inst_39381 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39493_39537 = state_39457__$1;
(statearr_39493_39537[(2)] = inst_39381);

(statearr_39493_39537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (9))){
var inst_39383 = figwheel.client.heads_up.clear.call(null);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(12),inst_39383);
} else {
if((state_val_39458 === (5))){
var inst_39374 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39457__$1 = state_39457;
var statearr_39494_39538 = state_39457__$1;
(statearr_39494_39538[(2)] = inst_39374);

(statearr_39494_39538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (14))){
var inst_39401 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39401)){
var statearr_39495_39539 = state_39457__$1;
(statearr_39495_39539[(1)] = (18));

} else {
var statearr_39496_39540 = state_39457__$1;
(statearr_39496_39540[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (26))){
var inst_39427 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39457__$1 = state_39457;
if(cljs.core.truth_(inst_39427)){
var statearr_39497_39541 = state_39457__$1;
(statearr_39497_39541[(1)] = (30));

} else {
var statearr_39498_39542 = state_39457__$1;
(statearr_39498_39542[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (16))){
var inst_39393 = (state_39457[(2)]);
var inst_39394 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39395 = figwheel.client.heads_up.display_exception.call(null,inst_39394);
var state_39457__$1 = (function (){var statearr_39499 = state_39457;
(statearr_39499[(13)] = inst_39393);

return statearr_39499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(17),inst_39395);
} else {
if((state_val_39458 === (30))){
var inst_39429 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39430 = figwheel.client.heads_up.display_warning.call(null,inst_39429);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(33),inst_39430);
} else {
if((state_val_39458 === (10))){
var inst_39387 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39500_39543 = state_39457__$1;
(statearr_39500_39543[(2)] = inst_39387);

(statearr_39500_39543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (18))){
var inst_39403 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39404 = figwheel.client.heads_up.display_exception.call(null,inst_39403);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(21),inst_39404);
} else {
if((state_val_39458 === (37))){
var inst_39440 = (state_39457[(2)]);
var state_39457__$1 = state_39457;
var statearr_39501_39544 = state_39457__$1;
(statearr_39501_39544[(2)] = inst_39440);

(statearr_39501_39544[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39458 === (8))){
var inst_39379 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39457__$1 = state_39457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39457__$1,(11),inst_39379);
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
});})(c__31784__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31672__auto__,c__31784__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto____0 = (function (){
var statearr_39505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39505[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto__);

(statearr_39505[(1)] = (1));

return statearr_39505;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto____1 = (function (state_39457){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_39457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e39506){if((e39506 instanceof Object)){
var ex__31676__auto__ = e39506;
var statearr_39507_39545 = state_39457;
(statearr_39507_39545[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39546 = state_39457;
state_39457 = G__39546;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto__ = function(state_39457){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto____1.call(this,state_39457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__,msg_hist,msg_names,msg))
})();
var state__31786__auto__ = (function (){var statearr_39508 = f__31785__auto__.call(null);
(statearr_39508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_39508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__,msg_hist,msg_names,msg))
);

return c__31784__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31784__auto___39609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto___39609,ch){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto___39609,ch){
return (function (state_39592){
var state_val_39593 = (state_39592[(1)]);
if((state_val_39593 === (1))){
var state_39592__$1 = state_39592;
var statearr_39594_39610 = state_39592__$1;
(statearr_39594_39610[(2)] = null);

(statearr_39594_39610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39593 === (2))){
var state_39592__$1 = state_39592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39592__$1,(4),ch);
} else {
if((state_val_39593 === (3))){
var inst_39590 = (state_39592[(2)]);
var state_39592__$1 = state_39592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39592__$1,inst_39590);
} else {
if((state_val_39593 === (4))){
var inst_39580 = (state_39592[(7)]);
var inst_39580__$1 = (state_39592[(2)]);
var state_39592__$1 = (function (){var statearr_39595 = state_39592;
(statearr_39595[(7)] = inst_39580__$1);

return statearr_39595;
})();
if(cljs.core.truth_(inst_39580__$1)){
var statearr_39596_39611 = state_39592__$1;
(statearr_39596_39611[(1)] = (5));

} else {
var statearr_39597_39612 = state_39592__$1;
(statearr_39597_39612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39593 === (5))){
var inst_39580 = (state_39592[(7)]);
var inst_39582 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39580);
var state_39592__$1 = state_39592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39592__$1,(8),inst_39582);
} else {
if((state_val_39593 === (6))){
var state_39592__$1 = state_39592;
var statearr_39598_39613 = state_39592__$1;
(statearr_39598_39613[(2)] = null);

(statearr_39598_39613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39593 === (7))){
var inst_39588 = (state_39592[(2)]);
var state_39592__$1 = state_39592;
var statearr_39599_39614 = state_39592__$1;
(statearr_39599_39614[(2)] = inst_39588);

(statearr_39599_39614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39593 === (8))){
var inst_39584 = (state_39592[(2)]);
var state_39592__$1 = (function (){var statearr_39600 = state_39592;
(statearr_39600[(8)] = inst_39584);

return statearr_39600;
})();
var statearr_39601_39615 = state_39592__$1;
(statearr_39601_39615[(2)] = null);

(statearr_39601_39615[(1)] = (2));


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
});})(c__31784__auto___39609,ch))
;
return ((function (switch__31672__auto__,c__31784__auto___39609,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31673__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31673__auto____0 = (function (){
var statearr_39605 = [null,null,null,null,null,null,null,null,null];
(statearr_39605[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31673__auto__);

(statearr_39605[(1)] = (1));

return statearr_39605;
});
var figwheel$client$heads_up_plugin_$_state_machine__31673__auto____1 = (function (state_39592){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_39592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e39606){if((e39606 instanceof Object)){
var ex__31676__auto__ = e39606;
var statearr_39607_39616 = state_39592;
(statearr_39607_39616[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39617 = state_39592;
state_39592 = G__39617;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31673__auto__ = function(state_39592){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31673__auto____1.call(this,state_39592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31673__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31673__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto___39609,ch))
})();
var state__31786__auto__ = (function (){var statearr_39608 = f__31785__auto__.call(null);
(statearr_39608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto___39609);

return statearr_39608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto___39609,ch))
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
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__){
return (function (state_39638){
var state_val_39639 = (state_39638[(1)]);
if((state_val_39639 === (1))){
var inst_39633 = cljs.core.async.timeout.call(null,(3000));
var state_39638__$1 = state_39638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39638__$1,(2),inst_39633);
} else {
if((state_val_39639 === (2))){
var inst_39635 = (state_39638[(2)]);
var inst_39636 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39638__$1 = (function (){var statearr_39640 = state_39638;
(statearr_39640[(7)] = inst_39635);

return statearr_39640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39638__$1,inst_39636);
} else {
return null;
}
}
});})(c__31784__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31673__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31673__auto____0 = (function (){
var statearr_39644 = [null,null,null,null,null,null,null,null];
(statearr_39644[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31673__auto__);

(statearr_39644[(1)] = (1));

return statearr_39644;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31673__auto____1 = (function (state_39638){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_39638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e39645){if((e39645 instanceof Object)){
var ex__31676__auto__ = e39645;
var statearr_39646_39648 = state_39638;
(statearr_39646_39648[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39649 = state_39638;
state_39638 = G__39649;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31673__auto__ = function(state_39638){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31673__auto____1.call(this,state_39638);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31673__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31673__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__))
})();
var state__31786__auto__ = (function (){var statearr_39647 = f__31785__auto__.call(null);
(statearr_39647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_39647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__))
);

return c__31784__auto__;
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
var c__31784__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31784__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31785__auto__ = (function (){var switch__31672__auto__ = ((function (c__31784__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39672){
var state_val_39673 = (state_39672[(1)]);
if((state_val_39673 === (1))){
var inst_39666 = cljs.core.async.timeout.call(null,(2000));
var state_39672__$1 = state_39672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39672__$1,(2),inst_39666);
} else {
if((state_val_39673 === (2))){
var inst_39668 = (state_39672[(2)]);
var inst_39669 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39670 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39669);
var state_39672__$1 = (function (){var statearr_39674 = state_39672;
(statearr_39674[(7)] = inst_39668);

return statearr_39674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39672__$1,inst_39670);
} else {
return null;
}
}
});})(c__31784__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31672__auto__,c__31784__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto____0 = (function (){
var statearr_39678 = [null,null,null,null,null,null,null,null];
(statearr_39678[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto__);

(statearr_39678[(1)] = (1));

return statearr_39678;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto____1 = (function (state_39672){
while(true){
var ret_value__31674__auto__ = (function (){try{while(true){
var result__31675__auto__ = switch__31672__auto__.call(null,state_39672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31675__auto__;
}
break;
}
}catch (e39679){if((e39679 instanceof Object)){
var ex__31676__auto__ = e39679;
var statearr_39680_39682 = state_39672;
(statearr_39680_39682[(5)] = ex__31676__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31674__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39683 = state_39672;
state_39672 = G__39683;
continue;
} else {
return ret_value__31674__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto__ = function(state_39672){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto____1.call(this,state_39672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31673__auto__;
})()
;})(switch__31672__auto__,c__31784__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31786__auto__ = (function (){var statearr_39681 = f__31785__auto__.call(null);
(statearr_39681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31784__auto__);

return statearr_39681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31786__auto__);
});})(c__31784__auto__,figwheel_version,temp__4657__auto__))
);

return c__31784__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39684){
var map__39688 = p__39684;
var map__39688__$1 = ((((!((map__39688 == null)))?((((map__39688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39688):map__39688);
var file = cljs.core.get.call(null,map__39688__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39688__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39688__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39690 = "";
var G__39690__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39690),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39690);
var G__39690__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39690__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39690__$1);
if(cljs.core.truth_((function (){var and__26432__auto__ = line;
if(cljs.core.truth_(and__26432__auto__)){
return column;
} else {
return and__26432__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39690__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39690__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39691){
var map__39698 = p__39691;
var map__39698__$1 = ((((!((map__39698 == null)))?((((map__39698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39698):map__39698);
var ed = map__39698__$1;
var formatted_exception = cljs.core.get.call(null,map__39698__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39698__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39698__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39700_39704 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39701_39705 = null;
var count__39702_39706 = (0);
var i__39703_39707 = (0);
while(true){
if((i__39703_39707 < count__39702_39706)){
var msg_39708 = cljs.core._nth.call(null,chunk__39701_39705,i__39703_39707);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39708);

var G__39709 = seq__39700_39704;
var G__39710 = chunk__39701_39705;
var G__39711 = count__39702_39706;
var G__39712 = (i__39703_39707 + (1));
seq__39700_39704 = G__39709;
chunk__39701_39705 = G__39710;
count__39702_39706 = G__39711;
i__39703_39707 = G__39712;
continue;
} else {
var temp__4657__auto___39713 = cljs.core.seq.call(null,seq__39700_39704);
if(temp__4657__auto___39713){
var seq__39700_39714__$1 = temp__4657__auto___39713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39700_39714__$1)){
var c__27263__auto___39715 = cljs.core.chunk_first.call(null,seq__39700_39714__$1);
var G__39716 = cljs.core.chunk_rest.call(null,seq__39700_39714__$1);
var G__39717 = c__27263__auto___39715;
var G__39718 = cljs.core.count.call(null,c__27263__auto___39715);
var G__39719 = (0);
seq__39700_39704 = G__39716;
chunk__39701_39705 = G__39717;
count__39702_39706 = G__39718;
i__39703_39707 = G__39719;
continue;
} else {
var msg_39720 = cljs.core.first.call(null,seq__39700_39714__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39720);

var G__39721 = cljs.core.next.call(null,seq__39700_39714__$1);
var G__39722 = null;
var G__39723 = (0);
var G__39724 = (0);
seq__39700_39704 = G__39721;
chunk__39701_39705 = G__39722;
count__39702_39706 = G__39723;
i__39703_39707 = G__39724;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39725){
var map__39728 = p__39725;
var map__39728__$1 = ((((!((map__39728 == null)))?((((map__39728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39728):map__39728);
var w = map__39728__$1;
var message = cljs.core.get.call(null,map__39728__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39740 = cljs.core.seq.call(null,plugins);
var chunk__39741 = null;
var count__39742 = (0);
var i__39743 = (0);
while(true){
if((i__39743 < count__39742)){
var vec__39744 = cljs.core._nth.call(null,chunk__39741,i__39743);
var k = cljs.core.nth.call(null,vec__39744,(0),null);
var plugin = cljs.core.nth.call(null,vec__39744,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39750 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39740,chunk__39741,count__39742,i__39743,pl_39750,vec__39744,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39750.call(null,msg_hist);
});})(seq__39740,chunk__39741,count__39742,i__39743,pl_39750,vec__39744,k,plugin))
);
} else {
}

var G__39751 = seq__39740;
var G__39752 = chunk__39741;
var G__39753 = count__39742;
var G__39754 = (i__39743 + (1));
seq__39740 = G__39751;
chunk__39741 = G__39752;
count__39742 = G__39753;
i__39743 = G__39754;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39740);
if(temp__4657__auto__){
var seq__39740__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39740__$1)){
var c__27263__auto__ = cljs.core.chunk_first.call(null,seq__39740__$1);
var G__39755 = cljs.core.chunk_rest.call(null,seq__39740__$1);
var G__39756 = c__27263__auto__;
var G__39757 = cljs.core.count.call(null,c__27263__auto__);
var G__39758 = (0);
seq__39740 = G__39755;
chunk__39741 = G__39756;
count__39742 = G__39757;
i__39743 = G__39758;
continue;
} else {
var vec__39747 = cljs.core.first.call(null,seq__39740__$1);
var k = cljs.core.nth.call(null,vec__39747,(0),null);
var plugin = cljs.core.nth.call(null,vec__39747,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39759 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39740,chunk__39741,count__39742,i__39743,pl_39759,vec__39747,k,plugin,seq__39740__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39759.call(null,msg_hist);
});})(seq__39740,chunk__39741,count__39742,i__39743,pl_39759,vec__39747,k,plugin,seq__39740__$1,temp__4657__auto__))
);
} else {
}

var G__39760 = cljs.core.next.call(null,seq__39740__$1);
var G__39761 = null;
var G__39762 = (0);
var G__39763 = (0);
seq__39740 = G__39760;
chunk__39741 = G__39761;
count__39742 = G__39762;
i__39743 = G__39763;
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
var args39764 = [];
var len__27557__auto___39771 = arguments.length;
var i__27558__auto___39772 = (0);
while(true){
if((i__27558__auto___39772 < len__27557__auto___39771)){
args39764.push((arguments[i__27558__auto___39772]));

var G__39773 = (i__27558__auto___39772 + (1));
i__27558__auto___39772 = G__39773;
continue;
} else {
}
break;
}

var G__39766 = args39764.length;
switch (G__39766) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39764.length)].join('')));

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

var seq__39767_39775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39768_39776 = null;
var count__39769_39777 = (0);
var i__39770_39778 = (0);
while(true){
if((i__39770_39778 < count__39769_39777)){
var msg_39779 = cljs.core._nth.call(null,chunk__39768_39776,i__39770_39778);
figwheel.client.socket.handle_incoming_message.call(null,msg_39779);

var G__39780 = seq__39767_39775;
var G__39781 = chunk__39768_39776;
var G__39782 = count__39769_39777;
var G__39783 = (i__39770_39778 + (1));
seq__39767_39775 = G__39780;
chunk__39768_39776 = G__39781;
count__39769_39777 = G__39782;
i__39770_39778 = G__39783;
continue;
} else {
var temp__4657__auto___39784 = cljs.core.seq.call(null,seq__39767_39775);
if(temp__4657__auto___39784){
var seq__39767_39785__$1 = temp__4657__auto___39784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39767_39785__$1)){
var c__27263__auto___39786 = cljs.core.chunk_first.call(null,seq__39767_39785__$1);
var G__39787 = cljs.core.chunk_rest.call(null,seq__39767_39785__$1);
var G__39788 = c__27263__auto___39786;
var G__39789 = cljs.core.count.call(null,c__27263__auto___39786);
var G__39790 = (0);
seq__39767_39775 = G__39787;
chunk__39768_39776 = G__39788;
count__39769_39777 = G__39789;
i__39770_39778 = G__39790;
continue;
} else {
var msg_39791 = cljs.core.first.call(null,seq__39767_39785__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39791);

var G__39792 = cljs.core.next.call(null,seq__39767_39785__$1);
var G__39793 = null;
var G__39794 = (0);
var G__39795 = (0);
seq__39767_39775 = G__39792;
chunk__39768_39776 = G__39793;
count__39769_39777 = G__39794;
i__39770_39778 = G__39795;
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
var len__27557__auto___39800 = arguments.length;
var i__27558__auto___39801 = (0);
while(true){
if((i__27558__auto___39801 < len__27557__auto___39800)){
args__27564__auto__.push((arguments[i__27558__auto___39801]));

var G__39802 = (i__27558__auto___39801 + (1));
i__27558__auto___39801 = G__39802;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39797){
var map__39798 = p__39797;
var map__39798__$1 = ((((!((map__39798 == null)))?((((map__39798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39798):map__39798);
var opts = map__39798__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39796){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39796));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39804){if((e39804 instanceof Error)){
var e = e39804;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39804;

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
return (function (p__39808){
var map__39809 = p__39808;
var map__39809__$1 = ((((!((map__39809 == null)))?((((map__39809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39809):map__39809);
var msg_name = cljs.core.get.call(null,map__39809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1496284152744