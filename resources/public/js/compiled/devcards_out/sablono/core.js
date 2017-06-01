// Compiled by ClojureScript 1.9.562 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28319__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28316 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28317 = cljs.core.seq.call(null,vec__28316);
var first__28318 = cljs.core.first.call(null,seq__28317);
var seq__28317__$1 = cljs.core.next.call(null,seq__28317);
var tag = first__28318;
var body = seq__28317__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28319 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28320__i = 0, G__28320__a = new Array(arguments.length -  0);
while (G__28320__i < G__28320__a.length) {G__28320__a[G__28320__i] = arguments[G__28320__i + 0]; ++G__28320__i;}
  args = new cljs.core.IndexedSeq(G__28320__a,0,null);
} 
return G__28319__delegate.call(this,args);};
G__28319.cljs$lang$maxFixedArity = 0;
G__28319.cljs$lang$applyTo = (function (arglist__28321){
var args = cljs.core.seq(arglist__28321);
return G__28319__delegate(args);
});
G__28319.cljs$core$IFn$_invoke$arity$variadic = G__28319__delegate;
return G__28319;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__27232__auto__ = (function sablono$core$update_arglists_$_iter__28326(s__28327){
return (new cljs.core.LazySeq(null,(function (){
var s__28327__$1 = s__28327;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28327__$1);
if(temp__4657__auto__){
var s__28327__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28327__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__28327__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__28329 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__28328 = (0);
while(true){
if((i__28328 < size__27231__auto__)){
var args = cljs.core._nth.call(null,c__27230__auto__,i__28328);
cljs.core.chunk_append.call(null,b__28329,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28330 = (i__28328 + (1));
i__28328 = G__28330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28329),sablono$core$update_arglists_$_iter__28326.call(null,cljs.core.chunk_rest.call(null,s__28327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28329),null);
}
} else {
var args = cljs.core.first.call(null,s__28327__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28326.call(null,cljs.core.rest.call(null,s__28327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27232__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__27564__auto__ = [];
var len__27557__auto___28336 = arguments.length;
var i__27558__auto___28337 = (0);
while(true){
if((i__27558__auto___28337 < len__27557__auto___28336)){
args__27564__auto__.push((arguments[i__27558__auto___28337]));

var G__28338 = (i__27558__auto___28337 + (1));
i__27558__auto___28337 = G__28338;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__27232__auto__ = (function sablono$core$iter__28332(s__28333){
return (new cljs.core.LazySeq(null,(function (){
var s__28333__$1 = s__28333;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28333__$1);
if(temp__4657__auto__){
var s__28333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28333__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__28333__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__28335 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__28334 = (0);
while(true){
if((i__28334 < size__27231__auto__)){
var style = cljs.core._nth.call(null,c__27230__auto__,i__28334);
cljs.core.chunk_append.call(null,b__28335,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28339 = (i__28334 + (1));
i__28334 = G__28339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28335),sablono$core$iter__28332.call(null,cljs.core.chunk_rest.call(null,s__28333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28335),null);
}
} else {
var style = cljs.core.first.call(null,s__28333__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28332.call(null,cljs.core.rest.call(null,s__28333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27232__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28331){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28331));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28340 = (function sablono$core$link_to28340(var_args){
var args__27564__auto__ = [];
var len__27557__auto___28343 = arguments.length;
var i__27558__auto___28344 = (0);
while(true){
if((i__27558__auto___28344 < len__27557__auto___28343)){
args__27564__auto__.push((arguments[i__27558__auto___28344]));

var G__28345 = (i__27558__auto___28344 + (1));
i__27558__auto___28344 = G__28345;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28340.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

sablono.core.link_to28340.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28340.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28340.cljs$lang$applyTo = (function (seq28341){
var G__28342 = cljs.core.first.call(null,seq28341);
var seq28341__$1 = cljs.core.next.call(null,seq28341);
return sablono.core.link_to28340.cljs$core$IFn$_invoke$arity$variadic(G__28342,seq28341__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28340);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28346 = (function sablono$core$mail_to28346(var_args){
var args__27564__auto__ = [];
var len__27557__auto___28353 = arguments.length;
var i__27558__auto___28354 = (0);
while(true){
if((i__27558__auto___28354 < len__27557__auto___28353)){
args__27564__auto__.push((arguments[i__27558__auto___28354]));

var G__28355 = (i__27558__auto___28354 + (1));
i__27558__auto___28354 = G__28355;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28346.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

sablono.core.mail_to28346.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28349){
var vec__28350 = p__28349;
var content = cljs.core.nth.call(null,vec__28350,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__26444__auto__ = content;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28346.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28346.cljs$lang$applyTo = (function (seq28347){
var G__28348 = cljs.core.first.call(null,seq28347);
var seq28347__$1 = cljs.core.next.call(null,seq28347);
return sablono.core.mail_to28346.cljs$core$IFn$_invoke$arity$variadic(G__28348,seq28347__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28346);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28356 = (function sablono$core$unordered_list28356(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27232__auto__ = (function sablono$core$unordered_list28356_$_iter__28361(s__28362){
return (new cljs.core.LazySeq(null,(function (){
var s__28362__$1 = s__28362;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28362__$1);
if(temp__4657__auto__){
var s__28362__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28362__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__28362__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__28364 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__28363 = (0);
while(true){
if((i__28363 < size__27231__auto__)){
var x = cljs.core._nth.call(null,c__27230__auto__,i__28363);
cljs.core.chunk_append.call(null,b__28364,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28365 = (i__28363 + (1));
i__28363 = G__28365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28364),sablono$core$unordered_list28356_$_iter__28361.call(null,cljs.core.chunk_rest.call(null,s__28362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28364),null);
}
} else {
var x = cljs.core.first.call(null,s__28362__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28356_$_iter__28361.call(null,cljs.core.rest.call(null,s__28362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27232__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28356);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28366 = (function sablono$core$ordered_list28366(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__27232__auto__ = (function sablono$core$ordered_list28366_$_iter__28371(s__28372){
return (new cljs.core.LazySeq(null,(function (){
var s__28372__$1 = s__28372;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28372__$1);
if(temp__4657__auto__){
var s__28372__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28372__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__28372__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__28374 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__28373 = (0);
while(true){
if((i__28373 < size__27231__auto__)){
var x = cljs.core._nth.call(null,c__27230__auto__,i__28373);
cljs.core.chunk_append.call(null,b__28374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28375 = (i__28373 + (1));
i__28373 = G__28375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28374),sablono$core$ordered_list28366_$_iter__28371.call(null,cljs.core.chunk_rest.call(null,s__28372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28374),null);
}
} else {
var x = cljs.core.first.call(null,s__28372__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28366_$_iter__28371.call(null,cljs.core.rest.call(null,s__28372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27232__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28366);
/**
 * Create an image element.
 */
sablono.core.image28376 = (function sablono$core$image28376(var_args){
var args28377 = [];
var len__27557__auto___28380 = arguments.length;
var i__27558__auto___28381 = (0);
while(true){
if((i__27558__auto___28381 < len__27557__auto___28380)){
args28377.push((arguments[i__27558__auto___28381]));

var G__28382 = (i__27558__auto___28381 + (1));
i__27558__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var G__28379 = args28377.length;
switch (G__28379) {
case 1:
return sablono.core.image28376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28377.length)].join('')));

}
});

sablono.core.image28376.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28376.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28376.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28376);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28384_SHARP_,p2__28385_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28384_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28385_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28386_SHARP_,p2__28387_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28386_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28387_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args28388 = [];
var len__27557__auto___28391 = arguments.length;
var i__27558__auto___28392 = (0);
while(true){
if((i__27558__auto___28392 < len__27557__auto___28391)){
args28388.push((arguments[i__27558__auto___28392]));

var G__28393 = (i__27558__auto___28392 + (1));
i__27558__auto___28392 = G__28393;
continue;
} else {
}
break;
}

var G__28390 = args28388.length;
switch (G__28390) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28388.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26444__auto__ = value;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field28395 = (function sablono$core$color_field28395(var_args){
var args28396 = [];
var len__27557__auto___28463 = arguments.length;
var i__27558__auto___28464 = (0);
while(true){
if((i__27558__auto___28464 < len__27557__auto___28463)){
args28396.push((arguments[i__27558__auto___28464]));

var G__28465 = (i__27558__auto___28464 + (1));
i__27558__auto___28464 = G__28465;
continue;
} else {
}
break;
}

var G__28398 = args28396.length;
switch (G__28398) {
case 1:
return sablono.core.color_field28395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28396.length)].join('')));

}
});

sablono.core.color_field28395.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28303__auto__);
});

sablono.core.color_field28395.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.color_field28395.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28395);

/**
 * Creates a date input field.
 */
sablono.core.date_field28399 = (function sablono$core$date_field28399(var_args){
var args28400 = [];
var len__27557__auto___28467 = arguments.length;
var i__27558__auto___28468 = (0);
while(true){
if((i__27558__auto___28468 < len__27557__auto___28467)){
args28400.push((arguments[i__27558__auto___28468]));

var G__28469 = (i__27558__auto___28468 + (1));
i__27558__auto___28468 = G__28469;
continue;
} else {
}
break;
}

var G__28402 = args28400.length;
switch (G__28402) {
case 1:
return sablono.core.date_field28399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28400.length)].join('')));

}
});

sablono.core.date_field28399.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28303__auto__);
});

sablono.core.date_field28399.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.date_field28399.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28399);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28403 = (function sablono$core$datetime_field28403(var_args){
var args28404 = [];
var len__27557__auto___28471 = arguments.length;
var i__27558__auto___28472 = (0);
while(true){
if((i__27558__auto___28472 < len__27557__auto___28471)){
args28404.push((arguments[i__27558__auto___28472]));

var G__28473 = (i__27558__auto___28472 + (1));
i__27558__auto___28472 = G__28473;
continue;
} else {
}
break;
}

var G__28406 = args28404.length;
switch (G__28406) {
case 1:
return sablono.core.datetime_field28403.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28403.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28404.length)].join('')));

}
});

sablono.core.datetime_field28403.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28303__auto__);
});

sablono.core.datetime_field28403.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.datetime_field28403.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28403);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28407 = (function sablono$core$datetime_local_field28407(var_args){
var args28408 = [];
var len__27557__auto___28475 = arguments.length;
var i__27558__auto___28476 = (0);
while(true){
if((i__27558__auto___28476 < len__27557__auto___28475)){
args28408.push((arguments[i__27558__auto___28476]));

var G__28477 = (i__27558__auto___28476 + (1));
i__27558__auto___28476 = G__28477;
continue;
} else {
}
break;
}

var G__28410 = args28408.length;
switch (G__28410) {
case 1:
return sablono.core.datetime_local_field28407.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28408.length)].join('')));

}
});

sablono.core.datetime_local_field28407.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28303__auto__);
});

sablono.core.datetime_local_field28407.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.datetime_local_field28407.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28407);

/**
 * Creates a email input field.
 */
sablono.core.email_field28411 = (function sablono$core$email_field28411(var_args){
var args28412 = [];
var len__27557__auto___28479 = arguments.length;
var i__27558__auto___28480 = (0);
while(true){
if((i__27558__auto___28480 < len__27557__auto___28479)){
args28412.push((arguments[i__27558__auto___28480]));

var G__28481 = (i__27558__auto___28480 + (1));
i__27558__auto___28480 = G__28481;
continue;
} else {
}
break;
}

var G__28414 = args28412.length;
switch (G__28414) {
case 1:
return sablono.core.email_field28411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28412.length)].join('')));

}
});

sablono.core.email_field28411.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28303__auto__);
});

sablono.core.email_field28411.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.email_field28411.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28411);

/**
 * Creates a file input field.
 */
sablono.core.file_field28415 = (function sablono$core$file_field28415(var_args){
var args28416 = [];
var len__27557__auto___28483 = arguments.length;
var i__27558__auto___28484 = (0);
while(true){
if((i__27558__auto___28484 < len__27557__auto___28483)){
args28416.push((arguments[i__27558__auto___28484]));

var G__28485 = (i__27558__auto___28484 + (1));
i__27558__auto___28484 = G__28485;
continue;
} else {
}
break;
}

var G__28418 = args28416.length;
switch (G__28418) {
case 1:
return sablono.core.file_field28415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28416.length)].join('')));

}
});

sablono.core.file_field28415.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28303__auto__);
});

sablono.core.file_field28415.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.file_field28415.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28415);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28419 = (function sablono$core$hidden_field28419(var_args){
var args28420 = [];
var len__27557__auto___28487 = arguments.length;
var i__27558__auto___28488 = (0);
while(true){
if((i__27558__auto___28488 < len__27557__auto___28487)){
args28420.push((arguments[i__27558__auto___28488]));

var G__28489 = (i__27558__auto___28488 + (1));
i__27558__auto___28488 = G__28489;
continue;
} else {
}
break;
}

var G__28422 = args28420.length;
switch (G__28422) {
case 1:
return sablono.core.hidden_field28419.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28419.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28420.length)].join('')));

}
});

sablono.core.hidden_field28419.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28303__auto__);
});

sablono.core.hidden_field28419.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.hidden_field28419.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28419);

/**
 * Creates a month input field.
 */
sablono.core.month_field28423 = (function sablono$core$month_field28423(var_args){
var args28424 = [];
var len__27557__auto___28491 = arguments.length;
var i__27558__auto___28492 = (0);
while(true){
if((i__27558__auto___28492 < len__27557__auto___28491)){
args28424.push((arguments[i__27558__auto___28492]));

var G__28493 = (i__27558__auto___28492 + (1));
i__27558__auto___28492 = G__28493;
continue;
} else {
}
break;
}

var G__28426 = args28424.length;
switch (G__28426) {
case 1:
return sablono.core.month_field28423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28424.length)].join('')));

}
});

sablono.core.month_field28423.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28303__auto__);
});

sablono.core.month_field28423.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.month_field28423.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28423);

/**
 * Creates a number input field.
 */
sablono.core.number_field28427 = (function sablono$core$number_field28427(var_args){
var args28428 = [];
var len__27557__auto___28495 = arguments.length;
var i__27558__auto___28496 = (0);
while(true){
if((i__27558__auto___28496 < len__27557__auto___28495)){
args28428.push((arguments[i__27558__auto___28496]));

var G__28497 = (i__27558__auto___28496 + (1));
i__27558__auto___28496 = G__28497;
continue;
} else {
}
break;
}

var G__28430 = args28428.length;
switch (G__28430) {
case 1:
return sablono.core.number_field28427.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28427.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28428.length)].join('')));

}
});

sablono.core.number_field28427.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28303__auto__);
});

sablono.core.number_field28427.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.number_field28427.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28427);

/**
 * Creates a password input field.
 */
sablono.core.password_field28431 = (function sablono$core$password_field28431(var_args){
var args28432 = [];
var len__27557__auto___28499 = arguments.length;
var i__27558__auto___28500 = (0);
while(true){
if((i__27558__auto___28500 < len__27557__auto___28499)){
args28432.push((arguments[i__27558__auto___28500]));

var G__28501 = (i__27558__auto___28500 + (1));
i__27558__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28434 = args28432.length;
switch (G__28434) {
case 1:
return sablono.core.password_field28431.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28431.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28432.length)].join('')));

}
});

sablono.core.password_field28431.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28303__auto__);
});

sablono.core.password_field28431.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.password_field28431.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28431);

/**
 * Creates a range input field.
 */
sablono.core.range_field28435 = (function sablono$core$range_field28435(var_args){
var args28436 = [];
var len__27557__auto___28503 = arguments.length;
var i__27558__auto___28504 = (0);
while(true){
if((i__27558__auto___28504 < len__27557__auto___28503)){
args28436.push((arguments[i__27558__auto___28504]));

var G__28505 = (i__27558__auto___28504 + (1));
i__27558__auto___28504 = G__28505;
continue;
} else {
}
break;
}

var G__28438 = args28436.length;
switch (G__28438) {
case 1:
return sablono.core.range_field28435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28436.length)].join('')));

}
});

sablono.core.range_field28435.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28303__auto__);
});

sablono.core.range_field28435.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.range_field28435.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28435);

/**
 * Creates a search input field.
 */
sablono.core.search_field28439 = (function sablono$core$search_field28439(var_args){
var args28440 = [];
var len__27557__auto___28507 = arguments.length;
var i__27558__auto___28508 = (0);
while(true){
if((i__27558__auto___28508 < len__27557__auto___28507)){
args28440.push((arguments[i__27558__auto___28508]));

var G__28509 = (i__27558__auto___28508 + (1));
i__27558__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var G__28442 = args28440.length;
switch (G__28442) {
case 1:
return sablono.core.search_field28439.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28439.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28440.length)].join('')));

}
});

sablono.core.search_field28439.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28303__auto__);
});

sablono.core.search_field28439.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.search_field28439.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28439);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28443 = (function sablono$core$tel_field28443(var_args){
var args28444 = [];
var len__27557__auto___28511 = arguments.length;
var i__27558__auto___28512 = (0);
while(true){
if((i__27558__auto___28512 < len__27557__auto___28511)){
args28444.push((arguments[i__27558__auto___28512]));

var G__28513 = (i__27558__auto___28512 + (1));
i__27558__auto___28512 = G__28513;
continue;
} else {
}
break;
}

var G__28446 = args28444.length;
switch (G__28446) {
case 1:
return sablono.core.tel_field28443.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28443.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28444.length)].join('')));

}
});

sablono.core.tel_field28443.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28303__auto__);
});

sablono.core.tel_field28443.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.tel_field28443.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28443);

/**
 * Creates a text input field.
 */
sablono.core.text_field28447 = (function sablono$core$text_field28447(var_args){
var args28448 = [];
var len__27557__auto___28515 = arguments.length;
var i__27558__auto___28516 = (0);
while(true){
if((i__27558__auto___28516 < len__27557__auto___28515)){
args28448.push((arguments[i__27558__auto___28516]));

var G__28517 = (i__27558__auto___28516 + (1));
i__27558__auto___28516 = G__28517;
continue;
} else {
}
break;
}

var G__28450 = args28448.length;
switch (G__28450) {
case 1:
return sablono.core.text_field28447.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28447.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28448.length)].join('')));

}
});

sablono.core.text_field28447.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28303__auto__);
});

sablono.core.text_field28447.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.text_field28447.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28447);

/**
 * Creates a time input field.
 */
sablono.core.time_field28451 = (function sablono$core$time_field28451(var_args){
var args28452 = [];
var len__27557__auto___28519 = arguments.length;
var i__27558__auto___28520 = (0);
while(true){
if((i__27558__auto___28520 < len__27557__auto___28519)){
args28452.push((arguments[i__27558__auto___28520]));

var G__28521 = (i__27558__auto___28520 + (1));
i__27558__auto___28520 = G__28521;
continue;
} else {
}
break;
}

var G__28454 = args28452.length;
switch (G__28454) {
case 1:
return sablono.core.time_field28451.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28451.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28452.length)].join('')));

}
});

sablono.core.time_field28451.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28303__auto__);
});

sablono.core.time_field28451.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.time_field28451.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28451);

/**
 * Creates a url input field.
 */
sablono.core.url_field28455 = (function sablono$core$url_field28455(var_args){
var args28456 = [];
var len__27557__auto___28523 = arguments.length;
var i__27558__auto___28524 = (0);
while(true){
if((i__27558__auto___28524 < len__27557__auto___28523)){
args28456.push((arguments[i__27558__auto___28524]));

var G__28525 = (i__27558__auto___28524 + (1));
i__27558__auto___28524 = G__28525;
continue;
} else {
}
break;
}

var G__28458 = args28456.length;
switch (G__28458) {
case 1:
return sablono.core.url_field28455.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28455.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28456.length)].join('')));

}
});

sablono.core.url_field28455.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28303__auto__);
});

sablono.core.url_field28455.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.url_field28455.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28455);

/**
 * Creates a week input field.
 */
sablono.core.week_field28459 = (function sablono$core$week_field28459(var_args){
var args28460 = [];
var len__27557__auto___28527 = arguments.length;
var i__27558__auto___28528 = (0);
while(true){
if((i__27558__auto___28528 < len__27557__auto___28527)){
args28460.push((arguments[i__27558__auto___28528]));

var G__28529 = (i__27558__auto___28528 + (1));
i__27558__auto___28528 = G__28529;
continue;
} else {
}
break;
}

var G__28462 = args28460.length;
switch (G__28462) {
case 1:
return sablono.core.week_field28459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28460.length)].join('')));

}
});

sablono.core.week_field28459.cljs$core$IFn$_invoke$arity$1 = (function (name__28303__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28303__auto__);
});

sablono.core.week_field28459.cljs$core$IFn$_invoke$arity$2 = (function (name__28303__auto__,value__28304__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28303__auto__,value__28304__auto__);
});

sablono.core.week_field28459.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28459);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28531 = (function sablono$core$check_box28531(var_args){
var args28532 = [];
var len__27557__auto___28535 = arguments.length;
var i__27558__auto___28536 = (0);
while(true){
if((i__27558__auto___28536 < len__27557__auto___28535)){
args28532.push((arguments[i__27558__auto___28536]));

var G__28537 = (i__27558__auto___28536 + (1));
i__27558__auto___28536 = G__28537;
continue;
} else {
}
break;
}

var G__28534 = args28532.length;
switch (G__28534) {
case 1:
return sablono.core.check_box28531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28531.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28532.length)].join('')));

}
});

sablono.core.check_box28531.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box28531.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28531.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28531.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28531);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28539 = (function sablono$core$radio_button28539(var_args){
var args28540 = [];
var len__27557__auto___28543 = arguments.length;
var i__27558__auto___28544 = (0);
while(true){
if((i__27558__auto___28544 < len__27557__auto___28543)){
args28540.push((arguments[i__27558__auto___28544]));

var G__28545 = (i__27558__auto___28544 + (1));
i__27558__auto___28544 = G__28545;
continue;
} else {
}
break;
}

var G__28542 = args28540.length;
switch (G__28542) {
case 1:
return sablono.core.radio_button28539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28539.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28540.length)].join('')));

}
});

sablono.core.radio_button28539.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button28539.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28539.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28539.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28539);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28547 = (function sablono$core$select_options28547(coll){
var iter__27232__auto__ = (function sablono$core$select_options28547_$_iter__28564(s__28565){
return (new cljs.core.LazySeq(null,(function (){
var s__28565__$1 = s__28565;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28565__$1);
if(temp__4657__auto__){
var s__28565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28565__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__28565__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__28567 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__28566 = (0);
while(true){
if((i__28566 < size__27231__auto__)){
var x = cljs.core._nth.call(null,c__27230__auto__,i__28566);
cljs.core.chunk_append.call(null,b__28567,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28574 = x;
var text = cljs.core.nth.call(null,vec__28574,(0),null);
var val = cljs.core.nth.call(null,vec__28574,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28574,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28547.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28580 = (i__28566 + (1));
i__28566 = G__28580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28567),sablono$core$select_options28547_$_iter__28564.call(null,cljs.core.chunk_rest.call(null,s__28565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28567),null);
}
} else {
var x = cljs.core.first.call(null,s__28565__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28577 = x;
var text = cljs.core.nth.call(null,vec__28577,(0),null);
var val = cljs.core.nth.call(null,vec__28577,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28577,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28547.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28547_$_iter__28564.call(null,cljs.core.rest.call(null,s__28565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27232__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28547);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28581 = (function sablono$core$drop_down28581(var_args){
var args28582 = [];
var len__27557__auto___28585 = arguments.length;
var i__27558__auto___28586 = (0);
while(true){
if((i__27558__auto___28586 < len__27557__auto___28585)){
args28582.push((arguments[i__27558__auto___28586]));

var G__28587 = (i__27558__auto___28586 + (1));
i__27558__auto___28586 = G__28587;
continue;
} else {
}
break;
}

var G__28584 = args28582.length;
switch (G__28584) {
case 2:
return sablono.core.drop_down28581.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28581.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28582.length)].join('')));

}
});

sablono.core.drop_down28581.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28581.call(null,name,options,null);
});

sablono.core.drop_down28581.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28581.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28581);
/**
 * Creates a text area element.
 */
sablono.core.text_area28589 = (function sablono$core$text_area28589(var_args){
var args28590 = [];
var len__27557__auto___28593 = arguments.length;
var i__27558__auto___28594 = (0);
while(true){
if((i__27558__auto___28594 < len__27557__auto___28593)){
args28590.push((arguments[i__27558__auto___28594]));

var G__28595 = (i__27558__auto___28594 + (1));
i__27558__auto___28594 = G__28595;
continue;
} else {
}
break;
}

var G__28592 = args28590.length;
switch (G__28592) {
case 1:
return sablono.core.text_area28589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28590.length)].join('')));

}
});

sablono.core.text_area28589.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area28589.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26444__auto__ = value;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28589.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28589);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28597 = (function sablono$core$label28597(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28597);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28598 = (function sablono$core$submit_button28598(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28598);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28599 = (function sablono$core$reset_button28599(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28599);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28600 = (function sablono$core$form_to28600(var_args){
var args__27564__auto__ = [];
var len__27557__auto___28607 = arguments.length;
var i__27558__auto___28608 = (0);
while(true){
if((i__27558__auto___28608 < len__27557__auto___28607)){
args__27564__auto__.push((arguments[i__27558__auto___28608]));

var G__28609 = (i__27558__auto___28608 + (1));
i__27558__auto___28608 = G__28609;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28600.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

sablono.core.form_to28600.cljs$core$IFn$_invoke$arity$variadic = (function (p__28603,body){
var vec__28604 = p__28603;
var method = cljs.core.nth.call(null,vec__28604,(0),null);
var action = cljs.core.nth.call(null,vec__28604,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28600.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28600.cljs$lang$applyTo = (function (seq28601){
var G__28602 = cljs.core.first.call(null,seq28601);
var seq28601__$1 = cljs.core.next.call(null,seq28601);
return sablono.core.form_to28600.cljs$core$IFn$_invoke$arity$variadic(G__28602,seq28601__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28600);

//# sourceMappingURL=core.js.map?rel=1496284135015