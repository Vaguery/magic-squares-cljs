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
var G__28575__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28572 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28573 = cljs.core.seq.call(null,vec__28572);
var first__28574 = cljs.core.first.call(null,seq__28573);
var seq__28573__$1 = cljs.core.next.call(null,seq__28573);
var tag = first__28574;
var body = seq__28573__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28576__i = 0, G__28576__a = new Array(arguments.length -  0);
while (G__28576__i < G__28576__a.length) {G__28576__a[G__28576__i] = arguments[G__28576__i + 0]; ++G__28576__i;}
  args = new cljs.core.IndexedSeq(G__28576__a,0,null);
} 
return G__28575__delegate.call(this,args);};
G__28575.cljs$lang$maxFixedArity = 0;
G__28575.cljs$lang$applyTo = (function (arglist__28577){
var args = cljs.core.seq(arglist__28577);
return G__28575__delegate(args);
});
G__28575.cljs$core$IFn$_invoke$arity$variadic = G__28575__delegate;
return G__28575;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__27493__auto__ = (function sablono$core$update_arglists_$_iter__28582(s__28583){
return (new cljs.core.LazySeq(null,(function (){
var s__28583__$1 = s__28583;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28583__$1);
if(temp__4657__auto__){
var s__28583__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28583__$2)){
var c__27491__auto__ = cljs.core.chunk_first.call(null,s__28583__$2);
var size__27492__auto__ = cljs.core.count.call(null,c__27491__auto__);
var b__28585 = cljs.core.chunk_buffer.call(null,size__27492__auto__);
if((function (){var i__28584 = (0);
while(true){
if((i__28584 < size__27492__auto__)){
var args = cljs.core._nth.call(null,c__27491__auto__,i__28584);
cljs.core.chunk_append.call(null,b__28585,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28586 = (i__28584 + (1));
i__28584 = G__28586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28585),sablono$core$update_arglists_$_iter__28582.call(null,cljs.core.chunk_rest.call(null,s__28583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28585),null);
}
} else {
var args = cljs.core.first.call(null,s__28583__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28582.call(null,cljs.core.rest.call(null,s__28583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27493__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__27825__auto__ = [];
var len__27818__auto___28592 = arguments.length;
var i__27819__auto___28593 = (0);
while(true){
if((i__27819__auto___28593 < len__27818__auto___28592)){
args__27825__auto__.push((arguments[i__27819__auto___28593]));

var G__28594 = (i__27819__auto___28593 + (1));
i__27819__auto___28593 = G__28594;
continue;
} else {
}
break;
}

var argseq__27826__auto__ = ((((0) < args__27825__auto__.length))?(new cljs.core.IndexedSeq(args__27825__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__27826__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__27493__auto__ = (function sablono$core$iter__28588(s__28589){
return (new cljs.core.LazySeq(null,(function (){
var s__28589__$1 = s__28589;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28589__$1);
if(temp__4657__auto__){
var s__28589__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28589__$2)){
var c__27491__auto__ = cljs.core.chunk_first.call(null,s__28589__$2);
var size__27492__auto__ = cljs.core.count.call(null,c__27491__auto__);
var b__28591 = cljs.core.chunk_buffer.call(null,size__27492__auto__);
if((function (){var i__28590 = (0);
while(true){
if((i__28590 < size__27492__auto__)){
var style = cljs.core._nth.call(null,c__27491__auto__,i__28590);
cljs.core.chunk_append.call(null,b__28591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28595 = (i__28590 + (1));
i__28590 = G__28595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28591),sablono$core$iter__28588.call(null,cljs.core.chunk_rest.call(null,s__28589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28591),null);
}
} else {
var style = cljs.core.first.call(null,s__28589__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28588.call(null,cljs.core.rest.call(null,s__28589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27493__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28587){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28587));
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
sablono.core.link_to28596 = (function sablono$core$link_to28596(var_args){
var args__27825__auto__ = [];
var len__27818__auto___28599 = arguments.length;
var i__27819__auto___28600 = (0);
while(true){
if((i__27819__auto___28600 < len__27818__auto___28599)){
args__27825__auto__.push((arguments[i__27819__auto___28600]));

var G__28601 = (i__27819__auto___28600 + (1));
i__27819__auto___28600 = G__28601;
continue;
} else {
}
break;
}

var argseq__27826__auto__ = ((((1) < args__27825__auto__.length))?(new cljs.core.IndexedSeq(args__27825__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28596.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27826__auto__);
});

sablono.core.link_to28596.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28596.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28596.cljs$lang$applyTo = (function (seq28597){
var G__28598 = cljs.core.first.call(null,seq28597);
var seq28597__$1 = cljs.core.next.call(null,seq28597);
return sablono.core.link_to28596.cljs$core$IFn$_invoke$arity$variadic(G__28598,seq28597__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28596);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28602 = (function sablono$core$mail_to28602(var_args){
var args__27825__auto__ = [];
var len__27818__auto___28609 = arguments.length;
var i__27819__auto___28610 = (0);
while(true){
if((i__27819__auto___28610 < len__27818__auto___28609)){
args__27825__auto__.push((arguments[i__27819__auto___28610]));

var G__28611 = (i__27819__auto___28610 + (1));
i__27819__auto___28610 = G__28611;
continue;
} else {
}
break;
}

var argseq__27826__auto__ = ((((1) < args__27825__auto__.length))?(new cljs.core.IndexedSeq(args__27825__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28602.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27826__auto__);
});

sablono.core.mail_to28602.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28605){
var vec__28606 = p__28605;
var content = cljs.core.nth.call(null,vec__28606,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__26705__auto__ = content;
if(cljs.core.truth_(or__26705__auto__)){
return or__26705__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28602.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28602.cljs$lang$applyTo = (function (seq28603){
var G__28604 = cljs.core.first.call(null,seq28603);
var seq28603__$1 = cljs.core.next.call(null,seq28603);
return sablono.core.mail_to28602.cljs$core$IFn$_invoke$arity$variadic(G__28604,seq28603__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28602);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28612 = (function sablono$core$unordered_list28612(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27493__auto__ = (function sablono$core$unordered_list28612_$_iter__28617(s__28618){
return (new cljs.core.LazySeq(null,(function (){
var s__28618__$1 = s__28618;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28618__$1);
if(temp__4657__auto__){
var s__28618__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28618__$2)){
var c__27491__auto__ = cljs.core.chunk_first.call(null,s__28618__$2);
var size__27492__auto__ = cljs.core.count.call(null,c__27491__auto__);
var b__28620 = cljs.core.chunk_buffer.call(null,size__27492__auto__);
if((function (){var i__28619 = (0);
while(true){
if((i__28619 < size__27492__auto__)){
var x = cljs.core._nth.call(null,c__27491__auto__,i__28619);
cljs.core.chunk_append.call(null,b__28620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28621 = (i__28619 + (1));
i__28619 = G__28621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28620),sablono$core$unordered_list28612_$_iter__28617.call(null,cljs.core.chunk_rest.call(null,s__28618__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28620),null);
}
} else {
var x = cljs.core.first.call(null,s__28618__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28612_$_iter__28617.call(null,cljs.core.rest.call(null,s__28618__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27493__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28612);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28622 = (function sablono$core$ordered_list28622(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__27493__auto__ = (function sablono$core$ordered_list28622_$_iter__28627(s__28628){
return (new cljs.core.LazySeq(null,(function (){
var s__28628__$1 = s__28628;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28628__$1);
if(temp__4657__auto__){
var s__28628__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28628__$2)){
var c__27491__auto__ = cljs.core.chunk_first.call(null,s__28628__$2);
var size__27492__auto__ = cljs.core.count.call(null,c__27491__auto__);
var b__28630 = cljs.core.chunk_buffer.call(null,size__27492__auto__);
if((function (){var i__28629 = (0);
while(true){
if((i__28629 < size__27492__auto__)){
var x = cljs.core._nth.call(null,c__27491__auto__,i__28629);
cljs.core.chunk_append.call(null,b__28630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28631 = (i__28629 + (1));
i__28629 = G__28631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28630),sablono$core$ordered_list28622_$_iter__28627.call(null,cljs.core.chunk_rest.call(null,s__28628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28630),null);
}
} else {
var x = cljs.core.first.call(null,s__28628__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28622_$_iter__28627.call(null,cljs.core.rest.call(null,s__28628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27493__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28622);
/**
 * Create an image element.
 */
sablono.core.image28632 = (function sablono$core$image28632(var_args){
var args28633 = [];
var len__27818__auto___28636 = arguments.length;
var i__27819__auto___28637 = (0);
while(true){
if((i__27819__auto___28637 < len__27818__auto___28636)){
args28633.push((arguments[i__27819__auto___28637]));

var G__28638 = (i__27819__auto___28637 + (1));
i__27819__auto___28637 = G__28638;
continue;
} else {
}
break;
}

var G__28635 = args28633.length;
switch (G__28635) {
case 1:
return sablono.core.image28632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28633.length)].join('')));

}
});

sablono.core.image28632.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28632.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28632.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28632);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28640_SHARP_,p2__28641_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28640_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28641_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28642_SHARP_,p2__28643_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28642_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28643_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args28644 = [];
var len__27818__auto___28647 = arguments.length;
var i__27819__auto___28648 = (0);
while(true){
if((i__27819__auto___28648 < len__27818__auto___28647)){
args28644.push((arguments[i__27819__auto___28648]));

var G__28649 = (i__27819__auto___28648 + (1));
i__27819__auto___28648 = G__28649;
continue;
} else {
}
break;
}

var G__28646 = args28644.length;
switch (G__28646) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28644.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26705__auto__ = value;
if(cljs.core.truth_(or__26705__auto__)){
return or__26705__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field28651 = (function sablono$core$color_field28651(var_args){
var args28652 = [];
var len__27818__auto___28719 = arguments.length;
var i__27819__auto___28720 = (0);
while(true){
if((i__27819__auto___28720 < len__27818__auto___28719)){
args28652.push((arguments[i__27819__auto___28720]));

var G__28721 = (i__27819__auto___28720 + (1));
i__27819__auto___28720 = G__28721;
continue;
} else {
}
break;
}

var G__28654 = args28652.length;
switch (G__28654) {
case 1:
return sablono.core.color_field28651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28652.length)].join('')));

}
});

sablono.core.color_field28651.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28559__auto__);
});

sablono.core.color_field28651.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.color_field28651.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28651);

/**
 * Creates a date input field.
 */
sablono.core.date_field28655 = (function sablono$core$date_field28655(var_args){
var args28656 = [];
var len__27818__auto___28723 = arguments.length;
var i__27819__auto___28724 = (0);
while(true){
if((i__27819__auto___28724 < len__27818__auto___28723)){
args28656.push((arguments[i__27819__auto___28724]));

var G__28725 = (i__27819__auto___28724 + (1));
i__27819__auto___28724 = G__28725;
continue;
} else {
}
break;
}

var G__28658 = args28656.length;
switch (G__28658) {
case 1:
return sablono.core.date_field28655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28656.length)].join('')));

}
});

sablono.core.date_field28655.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28559__auto__);
});

sablono.core.date_field28655.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.date_field28655.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28655);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28659 = (function sablono$core$datetime_field28659(var_args){
var args28660 = [];
var len__27818__auto___28727 = arguments.length;
var i__27819__auto___28728 = (0);
while(true){
if((i__27819__auto___28728 < len__27818__auto___28727)){
args28660.push((arguments[i__27819__auto___28728]));

var G__28729 = (i__27819__auto___28728 + (1));
i__27819__auto___28728 = G__28729;
continue;
} else {
}
break;
}

var G__28662 = args28660.length;
switch (G__28662) {
case 1:
return sablono.core.datetime_field28659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28660.length)].join('')));

}
});

sablono.core.datetime_field28659.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28559__auto__);
});

sablono.core.datetime_field28659.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.datetime_field28659.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28659);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28663 = (function sablono$core$datetime_local_field28663(var_args){
var args28664 = [];
var len__27818__auto___28731 = arguments.length;
var i__27819__auto___28732 = (0);
while(true){
if((i__27819__auto___28732 < len__27818__auto___28731)){
args28664.push((arguments[i__27819__auto___28732]));

var G__28733 = (i__27819__auto___28732 + (1));
i__27819__auto___28732 = G__28733;
continue;
} else {
}
break;
}

var G__28666 = args28664.length;
switch (G__28666) {
case 1:
return sablono.core.datetime_local_field28663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28664.length)].join('')));

}
});

sablono.core.datetime_local_field28663.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28559__auto__);
});

sablono.core.datetime_local_field28663.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.datetime_local_field28663.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28663);

/**
 * Creates a email input field.
 */
sablono.core.email_field28667 = (function sablono$core$email_field28667(var_args){
var args28668 = [];
var len__27818__auto___28735 = arguments.length;
var i__27819__auto___28736 = (0);
while(true){
if((i__27819__auto___28736 < len__27818__auto___28735)){
args28668.push((arguments[i__27819__auto___28736]));

var G__28737 = (i__27819__auto___28736 + (1));
i__27819__auto___28736 = G__28737;
continue;
} else {
}
break;
}

var G__28670 = args28668.length;
switch (G__28670) {
case 1:
return sablono.core.email_field28667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28668.length)].join('')));

}
});

sablono.core.email_field28667.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28559__auto__);
});

sablono.core.email_field28667.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.email_field28667.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28667);

/**
 * Creates a file input field.
 */
sablono.core.file_field28671 = (function sablono$core$file_field28671(var_args){
var args28672 = [];
var len__27818__auto___28739 = arguments.length;
var i__27819__auto___28740 = (0);
while(true){
if((i__27819__auto___28740 < len__27818__auto___28739)){
args28672.push((arguments[i__27819__auto___28740]));

var G__28741 = (i__27819__auto___28740 + (1));
i__27819__auto___28740 = G__28741;
continue;
} else {
}
break;
}

var G__28674 = args28672.length;
switch (G__28674) {
case 1:
return sablono.core.file_field28671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28672.length)].join('')));

}
});

sablono.core.file_field28671.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28559__auto__);
});

sablono.core.file_field28671.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.file_field28671.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28671);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28675 = (function sablono$core$hidden_field28675(var_args){
var args28676 = [];
var len__27818__auto___28743 = arguments.length;
var i__27819__auto___28744 = (0);
while(true){
if((i__27819__auto___28744 < len__27818__auto___28743)){
args28676.push((arguments[i__27819__auto___28744]));

var G__28745 = (i__27819__auto___28744 + (1));
i__27819__auto___28744 = G__28745;
continue;
} else {
}
break;
}

var G__28678 = args28676.length;
switch (G__28678) {
case 1:
return sablono.core.hidden_field28675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28676.length)].join('')));

}
});

sablono.core.hidden_field28675.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28559__auto__);
});

sablono.core.hidden_field28675.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.hidden_field28675.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28675);

/**
 * Creates a month input field.
 */
sablono.core.month_field28679 = (function sablono$core$month_field28679(var_args){
var args28680 = [];
var len__27818__auto___28747 = arguments.length;
var i__27819__auto___28748 = (0);
while(true){
if((i__27819__auto___28748 < len__27818__auto___28747)){
args28680.push((arguments[i__27819__auto___28748]));

var G__28749 = (i__27819__auto___28748 + (1));
i__27819__auto___28748 = G__28749;
continue;
} else {
}
break;
}

var G__28682 = args28680.length;
switch (G__28682) {
case 1:
return sablono.core.month_field28679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28680.length)].join('')));

}
});

sablono.core.month_field28679.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28559__auto__);
});

sablono.core.month_field28679.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.month_field28679.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28679);

/**
 * Creates a number input field.
 */
sablono.core.number_field28683 = (function sablono$core$number_field28683(var_args){
var args28684 = [];
var len__27818__auto___28751 = arguments.length;
var i__27819__auto___28752 = (0);
while(true){
if((i__27819__auto___28752 < len__27818__auto___28751)){
args28684.push((arguments[i__27819__auto___28752]));

var G__28753 = (i__27819__auto___28752 + (1));
i__27819__auto___28752 = G__28753;
continue;
} else {
}
break;
}

var G__28686 = args28684.length;
switch (G__28686) {
case 1:
return sablono.core.number_field28683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28684.length)].join('')));

}
});

sablono.core.number_field28683.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28559__auto__);
});

sablono.core.number_field28683.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.number_field28683.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28683);

/**
 * Creates a password input field.
 */
sablono.core.password_field28687 = (function sablono$core$password_field28687(var_args){
var args28688 = [];
var len__27818__auto___28755 = arguments.length;
var i__27819__auto___28756 = (0);
while(true){
if((i__27819__auto___28756 < len__27818__auto___28755)){
args28688.push((arguments[i__27819__auto___28756]));

var G__28757 = (i__27819__auto___28756 + (1));
i__27819__auto___28756 = G__28757;
continue;
} else {
}
break;
}

var G__28690 = args28688.length;
switch (G__28690) {
case 1:
return sablono.core.password_field28687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28688.length)].join('')));

}
});

sablono.core.password_field28687.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28559__auto__);
});

sablono.core.password_field28687.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.password_field28687.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28687);

/**
 * Creates a range input field.
 */
sablono.core.range_field28691 = (function sablono$core$range_field28691(var_args){
var args28692 = [];
var len__27818__auto___28759 = arguments.length;
var i__27819__auto___28760 = (0);
while(true){
if((i__27819__auto___28760 < len__27818__auto___28759)){
args28692.push((arguments[i__27819__auto___28760]));

var G__28761 = (i__27819__auto___28760 + (1));
i__27819__auto___28760 = G__28761;
continue;
} else {
}
break;
}

var G__28694 = args28692.length;
switch (G__28694) {
case 1:
return sablono.core.range_field28691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28692.length)].join('')));

}
});

sablono.core.range_field28691.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28559__auto__);
});

sablono.core.range_field28691.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.range_field28691.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28691);

/**
 * Creates a search input field.
 */
sablono.core.search_field28695 = (function sablono$core$search_field28695(var_args){
var args28696 = [];
var len__27818__auto___28763 = arguments.length;
var i__27819__auto___28764 = (0);
while(true){
if((i__27819__auto___28764 < len__27818__auto___28763)){
args28696.push((arguments[i__27819__auto___28764]));

var G__28765 = (i__27819__auto___28764 + (1));
i__27819__auto___28764 = G__28765;
continue;
} else {
}
break;
}

var G__28698 = args28696.length;
switch (G__28698) {
case 1:
return sablono.core.search_field28695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28696.length)].join('')));

}
});

sablono.core.search_field28695.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28559__auto__);
});

sablono.core.search_field28695.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.search_field28695.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28695);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28699 = (function sablono$core$tel_field28699(var_args){
var args28700 = [];
var len__27818__auto___28767 = arguments.length;
var i__27819__auto___28768 = (0);
while(true){
if((i__27819__auto___28768 < len__27818__auto___28767)){
args28700.push((arguments[i__27819__auto___28768]));

var G__28769 = (i__27819__auto___28768 + (1));
i__27819__auto___28768 = G__28769;
continue;
} else {
}
break;
}

var G__28702 = args28700.length;
switch (G__28702) {
case 1:
return sablono.core.tel_field28699.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28699.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28700.length)].join('')));

}
});

sablono.core.tel_field28699.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28559__auto__);
});

sablono.core.tel_field28699.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.tel_field28699.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28699);

/**
 * Creates a text input field.
 */
sablono.core.text_field28703 = (function sablono$core$text_field28703(var_args){
var args28704 = [];
var len__27818__auto___28771 = arguments.length;
var i__27819__auto___28772 = (0);
while(true){
if((i__27819__auto___28772 < len__27818__auto___28771)){
args28704.push((arguments[i__27819__auto___28772]));

var G__28773 = (i__27819__auto___28772 + (1));
i__27819__auto___28772 = G__28773;
continue;
} else {
}
break;
}

var G__28706 = args28704.length;
switch (G__28706) {
case 1:
return sablono.core.text_field28703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28704.length)].join('')));

}
});

sablono.core.text_field28703.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28559__auto__);
});

sablono.core.text_field28703.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.text_field28703.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28703);

/**
 * Creates a time input field.
 */
sablono.core.time_field28707 = (function sablono$core$time_field28707(var_args){
var args28708 = [];
var len__27818__auto___28775 = arguments.length;
var i__27819__auto___28776 = (0);
while(true){
if((i__27819__auto___28776 < len__27818__auto___28775)){
args28708.push((arguments[i__27819__auto___28776]));

var G__28777 = (i__27819__auto___28776 + (1));
i__27819__auto___28776 = G__28777;
continue;
} else {
}
break;
}

var G__28710 = args28708.length;
switch (G__28710) {
case 1:
return sablono.core.time_field28707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28708.length)].join('')));

}
});

sablono.core.time_field28707.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28559__auto__);
});

sablono.core.time_field28707.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.time_field28707.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28707);

/**
 * Creates a url input field.
 */
sablono.core.url_field28711 = (function sablono$core$url_field28711(var_args){
var args28712 = [];
var len__27818__auto___28779 = arguments.length;
var i__27819__auto___28780 = (0);
while(true){
if((i__27819__auto___28780 < len__27818__auto___28779)){
args28712.push((arguments[i__27819__auto___28780]));

var G__28781 = (i__27819__auto___28780 + (1));
i__27819__auto___28780 = G__28781;
continue;
} else {
}
break;
}

var G__28714 = args28712.length;
switch (G__28714) {
case 1:
return sablono.core.url_field28711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28712.length)].join('')));

}
});

sablono.core.url_field28711.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28559__auto__);
});

sablono.core.url_field28711.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.url_field28711.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28711);

/**
 * Creates a week input field.
 */
sablono.core.week_field28715 = (function sablono$core$week_field28715(var_args){
var args28716 = [];
var len__27818__auto___28783 = arguments.length;
var i__27819__auto___28784 = (0);
while(true){
if((i__27819__auto___28784 < len__27818__auto___28783)){
args28716.push((arguments[i__27819__auto___28784]));

var G__28785 = (i__27819__auto___28784 + (1));
i__27819__auto___28784 = G__28785;
continue;
} else {
}
break;
}

var G__28718 = args28716.length;
switch (G__28718) {
case 1:
return sablono.core.week_field28715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28716.length)].join('')));

}
});

sablono.core.week_field28715.cljs$core$IFn$_invoke$arity$1 = (function (name__28559__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28559__auto__);
});

sablono.core.week_field28715.cljs$core$IFn$_invoke$arity$2 = (function (name__28559__auto__,value__28560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28559__auto__,value__28560__auto__);
});

sablono.core.week_field28715.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28715);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28787 = (function sablono$core$check_box28787(var_args){
var args28788 = [];
var len__27818__auto___28791 = arguments.length;
var i__27819__auto___28792 = (0);
while(true){
if((i__27819__auto___28792 < len__27818__auto___28791)){
args28788.push((arguments[i__27819__auto___28792]));

var G__28793 = (i__27819__auto___28792 + (1));
i__27819__auto___28792 = G__28793;
continue;
} else {
}
break;
}

var G__28790 = args28788.length;
switch (G__28790) {
case 1:
return sablono.core.check_box28787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28787.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28788.length)].join('')));

}
});

sablono.core.check_box28787.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box28787.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28787.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28787.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28787);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28795 = (function sablono$core$radio_button28795(var_args){
var args28796 = [];
var len__27818__auto___28799 = arguments.length;
var i__27819__auto___28800 = (0);
while(true){
if((i__27819__auto___28800 < len__27818__auto___28799)){
args28796.push((arguments[i__27819__auto___28800]));

var G__28801 = (i__27819__auto___28800 + (1));
i__27819__auto___28800 = G__28801;
continue;
} else {
}
break;
}

var G__28798 = args28796.length;
switch (G__28798) {
case 1:
return sablono.core.radio_button28795.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28795.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28796.length)].join('')));

}
});

sablono.core.radio_button28795.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button28795.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28795.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28795.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28795);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28803 = (function sablono$core$select_options28803(coll){
var iter__27493__auto__ = (function sablono$core$select_options28803_$_iter__28820(s__28821){
return (new cljs.core.LazySeq(null,(function (){
var s__28821__$1 = s__28821;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28821__$1);
if(temp__4657__auto__){
var s__28821__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28821__$2)){
var c__27491__auto__ = cljs.core.chunk_first.call(null,s__28821__$2);
var size__27492__auto__ = cljs.core.count.call(null,c__27491__auto__);
var b__28823 = cljs.core.chunk_buffer.call(null,size__27492__auto__);
if((function (){var i__28822 = (0);
while(true){
if((i__28822 < size__27492__auto__)){
var x = cljs.core._nth.call(null,c__27491__auto__,i__28822);
cljs.core.chunk_append.call(null,b__28823,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28830 = x;
var text = cljs.core.nth.call(null,vec__28830,(0),null);
var val = cljs.core.nth.call(null,vec__28830,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28830,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28803.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28836 = (i__28822 + (1));
i__28822 = G__28836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28823),sablono$core$select_options28803_$_iter__28820.call(null,cljs.core.chunk_rest.call(null,s__28821__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28823),null);
}
} else {
var x = cljs.core.first.call(null,s__28821__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28833 = x;
var text = cljs.core.nth.call(null,vec__28833,(0),null);
var val = cljs.core.nth.call(null,vec__28833,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28833,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28803.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28803_$_iter__28820.call(null,cljs.core.rest.call(null,s__28821__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27493__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28803);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28837 = (function sablono$core$drop_down28837(var_args){
var args28838 = [];
var len__27818__auto___28841 = arguments.length;
var i__27819__auto___28842 = (0);
while(true){
if((i__27819__auto___28842 < len__27818__auto___28841)){
args28838.push((arguments[i__27819__auto___28842]));

var G__28843 = (i__27819__auto___28842 + (1));
i__27819__auto___28842 = G__28843;
continue;
} else {
}
break;
}

var G__28840 = args28838.length;
switch (G__28840) {
case 2:
return sablono.core.drop_down28837.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28837.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28838.length)].join('')));

}
});

sablono.core.drop_down28837.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28837.call(null,name,options,null);
});

sablono.core.drop_down28837.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28837.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28837);
/**
 * Creates a text area element.
 */
sablono.core.text_area28845 = (function sablono$core$text_area28845(var_args){
var args28846 = [];
var len__27818__auto___28849 = arguments.length;
var i__27819__auto___28850 = (0);
while(true){
if((i__27819__auto___28850 < len__27818__auto___28849)){
args28846.push((arguments[i__27819__auto___28850]));

var G__28851 = (i__27819__auto___28850 + (1));
i__27819__auto___28850 = G__28851;
continue;
} else {
}
break;
}

var G__28848 = args28846.length;
switch (G__28848) {
case 1:
return sablono.core.text_area28845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28846.length)].join('')));

}
});

sablono.core.text_area28845.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area28845.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26705__auto__ = value;
if(cljs.core.truth_(or__26705__auto__)){
return or__26705__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28845.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28845);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28853 = (function sablono$core$label28853(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28853);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28854 = (function sablono$core$submit_button28854(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28854);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28855 = (function sablono$core$reset_button28855(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28855);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28856 = (function sablono$core$form_to28856(var_args){
var args__27825__auto__ = [];
var len__27818__auto___28863 = arguments.length;
var i__27819__auto___28864 = (0);
while(true){
if((i__27819__auto___28864 < len__27818__auto___28863)){
args__27825__auto__.push((arguments[i__27819__auto___28864]));

var G__28865 = (i__27819__auto___28864 + (1));
i__27819__auto___28864 = G__28865;
continue;
} else {
}
break;
}

var argseq__27826__auto__ = ((((1) < args__27825__auto__.length))?(new cljs.core.IndexedSeq(args__27825__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28856.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27826__auto__);
});

sablono.core.form_to28856.cljs$core$IFn$_invoke$arity$variadic = (function (p__28859,body){
var vec__28860 = p__28859;
var method = cljs.core.nth.call(null,vec__28860,(0),null);
var action = cljs.core.nth.call(null,vec__28860,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28856.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28856.cljs$lang$applyTo = (function (seq28857){
var G__28858 = cljs.core.first.call(null,seq28857);
var seq28857__$1 = cljs.core.next.call(null,seq28857);
return sablono.core.form_to28856.cljs$core$IFn$_invoke$arity$variadic(G__28858,seq28857__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28856);

//# sourceMappingURL=core.js.map?rel=1496186905171