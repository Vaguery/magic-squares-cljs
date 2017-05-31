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
var G__33808__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33805 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33806 = cljs.core.seq.call(null,vec__33805);
var first__33807 = cljs.core.first.call(null,seq__33806);
var seq__33806__$1 = cljs.core.next.call(null,seq__33806);
var tag = first__33807;
var body = seq__33806__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33809__i = 0, G__33809__a = new Array(arguments.length -  0);
while (G__33809__i < G__33809__a.length) {G__33809__a[G__33809__i] = arguments[G__33809__i + 0]; ++G__33809__i;}
  args = new cljs.core.IndexedSeq(G__33809__a,0,null);
} 
return G__33808__delegate.call(this,args);};
G__33808.cljs$lang$maxFixedArity = 0;
G__33808.cljs$lang$applyTo = (function (arglist__33810){
var args = cljs.core.seq(arglist__33810);
return G__33808__delegate(args);
});
G__33808.cljs$core$IFn$_invoke$arity$variadic = G__33808__delegate;
return G__33808;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__27232__auto__ = (function sablono$core$update_arglists_$_iter__33815(s__33816){
return (new cljs.core.LazySeq(null,(function (){
var s__33816__$1 = s__33816;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33816__$1);
if(temp__4657__auto__){
var s__33816__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33816__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__33816__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__33818 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__33817 = (0);
while(true){
if((i__33817 < size__27231__auto__)){
var args = cljs.core._nth.call(null,c__27230__auto__,i__33817);
cljs.core.chunk_append.call(null,b__33818,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33819 = (i__33817 + (1));
i__33817 = G__33819;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33818),sablono$core$update_arglists_$_iter__33815.call(null,cljs.core.chunk_rest.call(null,s__33816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33818),null);
}
} else {
var args = cljs.core.first.call(null,s__33816__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33815.call(null,cljs.core.rest.call(null,s__33816__$2)));
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
var len__27557__auto___33825 = arguments.length;
var i__27558__auto___33826 = (0);
while(true){
if((i__27558__auto___33826 < len__27557__auto___33825)){
args__27564__auto__.push((arguments[i__27558__auto___33826]));

var G__33827 = (i__27558__auto___33826 + (1));
i__27558__auto___33826 = G__33827;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__27232__auto__ = (function sablono$core$iter__33821(s__33822){
return (new cljs.core.LazySeq(null,(function (){
var s__33822__$1 = s__33822;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33822__$1);
if(temp__4657__auto__){
var s__33822__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33822__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__33822__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__33824 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__33823 = (0);
while(true){
if((i__33823 < size__27231__auto__)){
var style = cljs.core._nth.call(null,c__27230__auto__,i__33823);
cljs.core.chunk_append.call(null,b__33824,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33828 = (i__33823 + (1));
i__33823 = G__33828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33824),sablono$core$iter__33821.call(null,cljs.core.chunk_rest.call(null,s__33822__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33824),null);
}
} else {
var style = cljs.core.first.call(null,s__33822__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33821.call(null,cljs.core.rest.call(null,s__33822__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq33820){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33820));
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
sablono.core.link_to33829 = (function sablono$core$link_to33829(var_args){
var args__27564__auto__ = [];
var len__27557__auto___33832 = arguments.length;
var i__27558__auto___33833 = (0);
while(true){
if((i__27558__auto___33833 < len__27557__auto___33832)){
args__27564__auto__.push((arguments[i__27558__auto___33833]));

var G__33834 = (i__27558__auto___33833 + (1));
i__27558__auto___33833 = G__33834;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to33829.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

sablono.core.link_to33829.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to33829.cljs$lang$maxFixedArity = (1);

sablono.core.link_to33829.cljs$lang$applyTo = (function (seq33830){
var G__33831 = cljs.core.first.call(null,seq33830);
var seq33830__$1 = cljs.core.next.call(null,seq33830);
return sablono.core.link_to33829.cljs$core$IFn$_invoke$arity$variadic(G__33831,seq33830__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33829);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to33835 = (function sablono$core$mail_to33835(var_args){
var args__27564__auto__ = [];
var len__27557__auto___33842 = arguments.length;
var i__27558__auto___33843 = (0);
while(true){
if((i__27558__auto___33843 < len__27557__auto___33842)){
args__27564__auto__.push((arguments[i__27558__auto___33843]));

var G__33844 = (i__27558__auto___33843 + (1));
i__27558__auto___33843 = G__33844;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to33835.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

sablono.core.mail_to33835.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__33838){
var vec__33839 = p__33838;
var content = cljs.core.nth.call(null,vec__33839,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__26444__auto__ = content;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to33835.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to33835.cljs$lang$applyTo = (function (seq33836){
var G__33837 = cljs.core.first.call(null,seq33836);
var seq33836__$1 = cljs.core.next.call(null,seq33836);
return sablono.core.mail_to33835.cljs$core$IFn$_invoke$arity$variadic(G__33837,seq33836__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33835);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list33845 = (function sablono$core$unordered_list33845(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__27232__auto__ = (function sablono$core$unordered_list33845_$_iter__33850(s__33851){
return (new cljs.core.LazySeq(null,(function (){
var s__33851__$1 = s__33851;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33851__$1);
if(temp__4657__auto__){
var s__33851__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33851__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__33851__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__33853 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__33852 = (0);
while(true){
if((i__33852 < size__27231__auto__)){
var x = cljs.core._nth.call(null,c__27230__auto__,i__33852);
cljs.core.chunk_append.call(null,b__33853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33854 = (i__33852 + (1));
i__33852 = G__33854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33853),sablono$core$unordered_list33845_$_iter__33850.call(null,cljs.core.chunk_rest.call(null,s__33851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33853),null);
}
} else {
var x = cljs.core.first.call(null,s__33851__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list33845_$_iter__33850.call(null,cljs.core.rest.call(null,s__33851__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33845);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list33855 = (function sablono$core$ordered_list33855(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__27232__auto__ = (function sablono$core$ordered_list33855_$_iter__33860(s__33861){
return (new cljs.core.LazySeq(null,(function (){
var s__33861__$1 = s__33861;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33861__$1);
if(temp__4657__auto__){
var s__33861__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33861__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__33861__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__33863 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__33862 = (0);
while(true){
if((i__33862 < size__27231__auto__)){
var x = cljs.core._nth.call(null,c__27230__auto__,i__33862);
cljs.core.chunk_append.call(null,b__33863,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33864 = (i__33862 + (1));
i__33862 = G__33864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33863),sablono$core$ordered_list33855_$_iter__33860.call(null,cljs.core.chunk_rest.call(null,s__33861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33863),null);
}
} else {
var x = cljs.core.first.call(null,s__33861__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list33855_$_iter__33860.call(null,cljs.core.rest.call(null,s__33861__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33855);
/**
 * Create an image element.
 */
sablono.core.image33865 = (function sablono$core$image33865(var_args){
var args33866 = [];
var len__27557__auto___33869 = arguments.length;
var i__27558__auto___33870 = (0);
while(true){
if((i__27558__auto___33870 < len__27557__auto___33869)){
args33866.push((arguments[i__27558__auto___33870]));

var G__33871 = (i__27558__auto___33870 + (1));
i__27558__auto___33870 = G__33871;
continue;
} else {
}
break;
}

var G__33868 = args33866.length;
switch (G__33868) {
case 1:
return sablono.core.image33865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image33865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33866.length)].join('')));

}
});

sablono.core.image33865.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image33865.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image33865.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33865);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__33873_SHARP_,p2__33874_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33873_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33874_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__33875_SHARP_,p2__33876_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33875_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33876_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var args33877 = [];
var len__27557__auto___33880 = arguments.length;
var i__27558__auto___33881 = (0);
while(true){
if((i__27558__auto___33881 < len__27557__auto___33880)){
args33877.push((arguments[i__27558__auto___33881]));

var G__33882 = (i__27558__auto___33881 + (1));
i__27558__auto___33881 = G__33882;
continue;
} else {
}
break;
}

var G__33879 = args33877.length;
switch (G__33879) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33877.length)].join('')));

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
sablono.core.color_field33884 = (function sablono$core$color_field33884(var_args){
var args33885 = [];
var len__27557__auto___33952 = arguments.length;
var i__27558__auto___33953 = (0);
while(true){
if((i__27558__auto___33953 < len__27557__auto___33952)){
args33885.push((arguments[i__27558__auto___33953]));

var G__33954 = (i__27558__auto___33953 + (1));
i__27558__auto___33953 = G__33954;
continue;
} else {
}
break;
}

var G__33887 = args33885.length;
switch (G__33887) {
case 1:
return sablono.core.color_field33884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field33884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33885.length)].join('')));

}
});

sablono.core.color_field33884.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33792__auto__);
});

sablono.core.color_field33884.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.color_field33884.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33884);

/**
 * Creates a date input field.
 */
sablono.core.date_field33888 = (function sablono$core$date_field33888(var_args){
var args33889 = [];
var len__27557__auto___33956 = arguments.length;
var i__27558__auto___33957 = (0);
while(true){
if((i__27558__auto___33957 < len__27557__auto___33956)){
args33889.push((arguments[i__27558__auto___33957]));

var G__33958 = (i__27558__auto___33957 + (1));
i__27558__auto___33957 = G__33958;
continue;
} else {
}
break;
}

var G__33891 = args33889.length;
switch (G__33891) {
case 1:
return sablono.core.date_field33888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field33888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33889.length)].join('')));

}
});

sablono.core.date_field33888.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33792__auto__);
});

sablono.core.date_field33888.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.date_field33888.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33888);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field33892 = (function sablono$core$datetime_field33892(var_args){
var args33893 = [];
var len__27557__auto___33960 = arguments.length;
var i__27558__auto___33961 = (0);
while(true){
if((i__27558__auto___33961 < len__27557__auto___33960)){
args33893.push((arguments[i__27558__auto___33961]));

var G__33962 = (i__27558__auto___33961 + (1));
i__27558__auto___33961 = G__33962;
continue;
} else {
}
break;
}

var G__33895 = args33893.length;
switch (G__33895) {
case 1:
return sablono.core.datetime_field33892.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field33892.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33893.length)].join('')));

}
});

sablono.core.datetime_field33892.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33792__auto__);
});

sablono.core.datetime_field33892.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.datetime_field33892.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33892);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field33896 = (function sablono$core$datetime_local_field33896(var_args){
var args33897 = [];
var len__27557__auto___33964 = arguments.length;
var i__27558__auto___33965 = (0);
while(true){
if((i__27558__auto___33965 < len__27557__auto___33964)){
args33897.push((arguments[i__27558__auto___33965]));

var G__33966 = (i__27558__auto___33965 + (1));
i__27558__auto___33965 = G__33966;
continue;
} else {
}
break;
}

var G__33899 = args33897.length;
switch (G__33899) {
case 1:
return sablono.core.datetime_local_field33896.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field33896.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33897.length)].join('')));

}
});

sablono.core.datetime_local_field33896.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33792__auto__);
});

sablono.core.datetime_local_field33896.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.datetime_local_field33896.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33896);

/**
 * Creates a email input field.
 */
sablono.core.email_field33900 = (function sablono$core$email_field33900(var_args){
var args33901 = [];
var len__27557__auto___33968 = arguments.length;
var i__27558__auto___33969 = (0);
while(true){
if((i__27558__auto___33969 < len__27557__auto___33968)){
args33901.push((arguments[i__27558__auto___33969]));

var G__33970 = (i__27558__auto___33969 + (1));
i__27558__auto___33969 = G__33970;
continue;
} else {
}
break;
}

var G__33903 = args33901.length;
switch (G__33903) {
case 1:
return sablono.core.email_field33900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field33900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33901.length)].join('')));

}
});

sablono.core.email_field33900.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33792__auto__);
});

sablono.core.email_field33900.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.email_field33900.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33900);

/**
 * Creates a file input field.
 */
sablono.core.file_field33904 = (function sablono$core$file_field33904(var_args){
var args33905 = [];
var len__27557__auto___33972 = arguments.length;
var i__27558__auto___33973 = (0);
while(true){
if((i__27558__auto___33973 < len__27557__auto___33972)){
args33905.push((arguments[i__27558__auto___33973]));

var G__33974 = (i__27558__auto___33973 + (1));
i__27558__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var G__33907 = args33905.length;
switch (G__33907) {
case 1:
return sablono.core.file_field33904.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field33904.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33905.length)].join('')));

}
});

sablono.core.file_field33904.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33792__auto__);
});

sablono.core.file_field33904.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.file_field33904.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33904);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field33908 = (function sablono$core$hidden_field33908(var_args){
var args33909 = [];
var len__27557__auto___33976 = arguments.length;
var i__27558__auto___33977 = (0);
while(true){
if((i__27558__auto___33977 < len__27557__auto___33976)){
args33909.push((arguments[i__27558__auto___33977]));

var G__33978 = (i__27558__auto___33977 + (1));
i__27558__auto___33977 = G__33978;
continue;
} else {
}
break;
}

var G__33911 = args33909.length;
switch (G__33911) {
case 1:
return sablono.core.hidden_field33908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field33908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33909.length)].join('')));

}
});

sablono.core.hidden_field33908.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33792__auto__);
});

sablono.core.hidden_field33908.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.hidden_field33908.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33908);

/**
 * Creates a month input field.
 */
sablono.core.month_field33912 = (function sablono$core$month_field33912(var_args){
var args33913 = [];
var len__27557__auto___33980 = arguments.length;
var i__27558__auto___33981 = (0);
while(true){
if((i__27558__auto___33981 < len__27557__auto___33980)){
args33913.push((arguments[i__27558__auto___33981]));

var G__33982 = (i__27558__auto___33981 + (1));
i__27558__auto___33981 = G__33982;
continue;
} else {
}
break;
}

var G__33915 = args33913.length;
switch (G__33915) {
case 1:
return sablono.core.month_field33912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field33912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33913.length)].join('')));

}
});

sablono.core.month_field33912.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33792__auto__);
});

sablono.core.month_field33912.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.month_field33912.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33912);

/**
 * Creates a number input field.
 */
sablono.core.number_field33916 = (function sablono$core$number_field33916(var_args){
var args33917 = [];
var len__27557__auto___33984 = arguments.length;
var i__27558__auto___33985 = (0);
while(true){
if((i__27558__auto___33985 < len__27557__auto___33984)){
args33917.push((arguments[i__27558__auto___33985]));

var G__33986 = (i__27558__auto___33985 + (1));
i__27558__auto___33985 = G__33986;
continue;
} else {
}
break;
}

var G__33919 = args33917.length;
switch (G__33919) {
case 1:
return sablono.core.number_field33916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field33916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33917.length)].join('')));

}
});

sablono.core.number_field33916.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33792__auto__);
});

sablono.core.number_field33916.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.number_field33916.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33916);

/**
 * Creates a password input field.
 */
sablono.core.password_field33920 = (function sablono$core$password_field33920(var_args){
var args33921 = [];
var len__27557__auto___33988 = arguments.length;
var i__27558__auto___33989 = (0);
while(true){
if((i__27558__auto___33989 < len__27557__auto___33988)){
args33921.push((arguments[i__27558__auto___33989]));

var G__33990 = (i__27558__auto___33989 + (1));
i__27558__auto___33989 = G__33990;
continue;
} else {
}
break;
}

var G__33923 = args33921.length;
switch (G__33923) {
case 1:
return sablono.core.password_field33920.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33920.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33921.length)].join('')));

}
});

sablono.core.password_field33920.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33792__auto__);
});

sablono.core.password_field33920.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.password_field33920.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33920);

/**
 * Creates a range input field.
 */
sablono.core.range_field33924 = (function sablono$core$range_field33924(var_args){
var args33925 = [];
var len__27557__auto___33992 = arguments.length;
var i__27558__auto___33993 = (0);
while(true){
if((i__27558__auto___33993 < len__27557__auto___33992)){
args33925.push((arguments[i__27558__auto___33993]));

var G__33994 = (i__27558__auto___33993 + (1));
i__27558__auto___33993 = G__33994;
continue;
} else {
}
break;
}

var G__33927 = args33925.length;
switch (G__33927) {
case 1:
return sablono.core.range_field33924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33925.length)].join('')));

}
});

sablono.core.range_field33924.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33792__auto__);
});

sablono.core.range_field33924.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.range_field33924.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33924);

/**
 * Creates a search input field.
 */
sablono.core.search_field33928 = (function sablono$core$search_field33928(var_args){
var args33929 = [];
var len__27557__auto___33996 = arguments.length;
var i__27558__auto___33997 = (0);
while(true){
if((i__27558__auto___33997 < len__27557__auto___33996)){
args33929.push((arguments[i__27558__auto___33997]));

var G__33998 = (i__27558__auto___33997 + (1));
i__27558__auto___33997 = G__33998;
continue;
} else {
}
break;
}

var G__33931 = args33929.length;
switch (G__33931) {
case 1:
return sablono.core.search_field33928.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33928.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33929.length)].join('')));

}
});

sablono.core.search_field33928.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33792__auto__);
});

sablono.core.search_field33928.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.search_field33928.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33928);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33932 = (function sablono$core$tel_field33932(var_args){
var args33933 = [];
var len__27557__auto___34000 = arguments.length;
var i__27558__auto___34001 = (0);
while(true){
if((i__27558__auto___34001 < len__27557__auto___34000)){
args33933.push((arguments[i__27558__auto___34001]));

var G__34002 = (i__27558__auto___34001 + (1));
i__27558__auto___34001 = G__34002;
continue;
} else {
}
break;
}

var G__33935 = args33933.length;
switch (G__33935) {
case 1:
return sablono.core.tel_field33932.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33932.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33933.length)].join('')));

}
});

sablono.core.tel_field33932.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33792__auto__);
});

sablono.core.tel_field33932.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.tel_field33932.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33932);

/**
 * Creates a text input field.
 */
sablono.core.text_field33936 = (function sablono$core$text_field33936(var_args){
var args33937 = [];
var len__27557__auto___34004 = arguments.length;
var i__27558__auto___34005 = (0);
while(true){
if((i__27558__auto___34005 < len__27557__auto___34004)){
args33937.push((arguments[i__27558__auto___34005]));

var G__34006 = (i__27558__auto___34005 + (1));
i__27558__auto___34005 = G__34006;
continue;
} else {
}
break;
}

var G__33939 = args33937.length;
switch (G__33939) {
case 1:
return sablono.core.text_field33936.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33936.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33937.length)].join('')));

}
});

sablono.core.text_field33936.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33792__auto__);
});

sablono.core.text_field33936.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.text_field33936.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33936);

/**
 * Creates a time input field.
 */
sablono.core.time_field33940 = (function sablono$core$time_field33940(var_args){
var args33941 = [];
var len__27557__auto___34008 = arguments.length;
var i__27558__auto___34009 = (0);
while(true){
if((i__27558__auto___34009 < len__27557__auto___34008)){
args33941.push((arguments[i__27558__auto___34009]));

var G__34010 = (i__27558__auto___34009 + (1));
i__27558__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var G__33943 = args33941.length;
switch (G__33943) {
case 1:
return sablono.core.time_field33940.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33941.length)].join('')));

}
});

sablono.core.time_field33940.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33792__auto__);
});

sablono.core.time_field33940.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.time_field33940.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33940);

/**
 * Creates a url input field.
 */
sablono.core.url_field33944 = (function sablono$core$url_field33944(var_args){
var args33945 = [];
var len__27557__auto___34012 = arguments.length;
var i__27558__auto___34013 = (0);
while(true){
if((i__27558__auto___34013 < len__27557__auto___34012)){
args33945.push((arguments[i__27558__auto___34013]));

var G__34014 = (i__27558__auto___34013 + (1));
i__27558__auto___34013 = G__34014;
continue;
} else {
}
break;
}

var G__33947 = args33945.length;
switch (G__33947) {
case 1:
return sablono.core.url_field33944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33945.length)].join('')));

}
});

sablono.core.url_field33944.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33792__auto__);
});

sablono.core.url_field33944.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.url_field33944.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33944);

/**
 * Creates a week input field.
 */
sablono.core.week_field33948 = (function sablono$core$week_field33948(var_args){
var args33949 = [];
var len__27557__auto___34016 = arguments.length;
var i__27558__auto___34017 = (0);
while(true){
if((i__27558__auto___34017 < len__27557__auto___34016)){
args33949.push((arguments[i__27558__auto___34017]));

var G__34018 = (i__27558__auto___34017 + (1));
i__27558__auto___34017 = G__34018;
continue;
} else {
}
break;
}

var G__33951 = args33949.length;
switch (G__33951) {
case 1:
return sablono.core.week_field33948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33949.length)].join('')));

}
});

sablono.core.week_field33948.cljs$core$IFn$_invoke$arity$1 = (function (name__33792__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33792__auto__);
});

sablono.core.week_field33948.cljs$core$IFn$_invoke$arity$2 = (function (name__33792__auto__,value__33793__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33792__auto__,value__33793__auto__);
});

sablono.core.week_field33948.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33948);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box34020 = (function sablono$core$check_box34020(var_args){
var args34021 = [];
var len__27557__auto___34024 = arguments.length;
var i__27558__auto___34025 = (0);
while(true){
if((i__27558__auto___34025 < len__27557__auto___34024)){
args34021.push((arguments[i__27558__auto___34025]));

var G__34026 = (i__27558__auto___34025 + (1));
i__27558__auto___34025 = G__34026;
continue;
} else {
}
break;
}

var G__34023 = args34021.length;
switch (G__34023) {
case 1:
return sablono.core.check_box34020.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box34020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box34020.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34021.length)].join('')));

}
});

sablono.core.check_box34020.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box34020.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34020.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box34020.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34020);
/**
 * Creates a radio button.
 */
sablono.core.radio_button34028 = (function sablono$core$radio_button34028(var_args){
var args34029 = [];
var len__27557__auto___34032 = arguments.length;
var i__27558__auto___34033 = (0);
while(true){
if((i__27558__auto___34033 < len__27557__auto___34032)){
args34029.push((arguments[i__27558__auto___34033]));

var G__34034 = (i__27558__auto___34033 + (1));
i__27558__auto___34033 = G__34034;
continue;
} else {
}
break;
}

var G__34031 = args34029.length;
switch (G__34031) {
case 1:
return sablono.core.radio_button34028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button34028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button34028.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34029.length)].join('')));

}
});

sablono.core.radio_button34028.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button34028.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34028.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button34028.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34028);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options34036 = (function sablono$core$select_options34036(coll){
var iter__27232__auto__ = (function sablono$core$select_options34036_$_iter__34053(s__34054){
return (new cljs.core.LazySeq(null,(function (){
var s__34054__$1 = s__34054;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34054__$1);
if(temp__4657__auto__){
var s__34054__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34054__$2)){
var c__27230__auto__ = cljs.core.chunk_first.call(null,s__34054__$2);
var size__27231__auto__ = cljs.core.count.call(null,c__27230__auto__);
var b__34056 = cljs.core.chunk_buffer.call(null,size__27231__auto__);
if((function (){var i__34055 = (0);
while(true){
if((i__34055 < size__27231__auto__)){
var x = cljs.core._nth.call(null,c__27230__auto__,i__34055);
cljs.core.chunk_append.call(null,b__34056,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34063 = x;
var text = cljs.core.nth.call(null,vec__34063,(0),null);
var val = cljs.core.nth.call(null,vec__34063,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34063,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34036.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__34069 = (i__34055 + (1));
i__34055 = G__34069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34056),sablono$core$select_options34036_$_iter__34053.call(null,cljs.core.chunk_rest.call(null,s__34054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34056),null);
}
} else {
var x = cljs.core.first.call(null,s__34054__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34066 = x;
var text = cljs.core.nth.call(null,vec__34066,(0),null);
var val = cljs.core.nth.call(null,vec__34066,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__34066,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options34036.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options34036_$_iter__34053.call(null,cljs.core.rest.call(null,s__34054__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34036);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down34070 = (function sablono$core$drop_down34070(var_args){
var args34071 = [];
var len__27557__auto___34074 = arguments.length;
var i__27558__auto___34075 = (0);
while(true){
if((i__27558__auto___34075 < len__27557__auto___34074)){
args34071.push((arguments[i__27558__auto___34075]));

var G__34076 = (i__27558__auto___34075 + (1));
i__27558__auto___34075 = G__34076;
continue;
} else {
}
break;
}

var G__34073 = args34071.length;
switch (G__34073) {
case 2:
return sablono.core.drop_down34070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down34070.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34071.length)].join('')));

}
});

sablono.core.drop_down34070.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down34070.call(null,name,options,null);
});

sablono.core.drop_down34070.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down34070.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34070);
/**
 * Creates a text area element.
 */
sablono.core.text_area34078 = (function sablono$core$text_area34078(var_args){
var args34079 = [];
var len__27557__auto___34082 = arguments.length;
var i__27558__auto___34083 = (0);
while(true){
if((i__27558__auto___34083 < len__27557__auto___34082)){
args34079.push((arguments[i__27558__auto___34083]));

var G__34084 = (i__27558__auto___34083 + (1));
i__27558__auto___34083 = G__34084;
continue;
} else {
}
break;
}

var G__34081 = args34079.length;
switch (G__34081) {
case 1:
return sablono.core.text_area34078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area34078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34079.length)].join('')));

}
});

sablono.core.text_area34078.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area34078.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__26444__auto__ = value;
if(cljs.core.truth_(or__26444__auto__)){
return or__26444__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area34078.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34078);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label34086 = (function sablono$core$label34086(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34086);
/**
 * Creates a submit button.
 */
sablono.core.submit_button34087 = (function sablono$core$submit_button34087(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34087);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button34088 = (function sablono$core$reset_button34088(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34088);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to34089 = (function sablono$core$form_to34089(var_args){
var args__27564__auto__ = [];
var len__27557__auto___34096 = arguments.length;
var i__27558__auto___34097 = (0);
while(true){
if((i__27558__auto___34097 < len__27557__auto___34096)){
args__27564__auto__.push((arguments[i__27558__auto___34097]));

var G__34098 = (i__27558__auto___34097 + (1));
i__27558__auto___34097 = G__34098;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((1) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to34089.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27565__auto__);
});

sablono.core.form_to34089.cljs$core$IFn$_invoke$arity$variadic = (function (p__34092,body){
var vec__34093 = p__34092;
var method = cljs.core.nth.call(null,vec__34093,(0),null);
var action = cljs.core.nth.call(null,vec__34093,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to34089.cljs$lang$maxFixedArity = (1);

sablono.core.form_to34089.cljs$lang$applyTo = (function (seq34090){
var G__34091 = cljs.core.first.call(null,seq34090);
var seq34090__$1 = cljs.core.next.call(null,seq34090);
return sablono.core.form_to34089.cljs$core$IFn$_invoke$arity$variadic(G__34091,seq34090__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34089);

//# sourceMappingURL=core.js.map?rel=1496186259027