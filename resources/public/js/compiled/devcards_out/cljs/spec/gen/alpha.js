// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27055__auto__,writer__27056__auto__,opt__27057__auto__){
return cljs.core._write.call(null,writer__27056__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37000 = arguments.length;
var i__27558__auto___37001 = (0);
while(true){
if((i__27558__auto___37001 < len__27557__auto___37000)){
args__27564__auto__.push((arguments[i__27558__auto___37001]));

var G__37002 = (i__27558__auto___37001 + (1));
i__27558__auto___37001 = G__37002;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq36999){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36999));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37004 = arguments.length;
var i__27558__auto___37005 = (0);
while(true){
if((i__27558__auto___37005 < len__27557__auto___37004)){
args__27564__auto__.push((arguments[i__27558__auto___37005]));

var G__37006 = (i__27558__auto___37005 + (1));
i__27558__auto___37005 = G__37006;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37003){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37003));
});

var g_QMARK__37007 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_37008 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37007){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__37007))
,null));
var mkg_37009 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37007,g_37008){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__37007,g_37008))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37007,g_37008,mkg_37009){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37007).call(null,x);
});})(g_QMARK__37007,g_37008,mkg_37009))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37007,g_37008,mkg_37009){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37009).call(null,gfn);
});})(g_QMARK__37007,g_37008,mkg_37009))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37007,g_37008,mkg_37009){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37008).call(null,generator);
});})(g_QMARK__37007,g_37008,mkg_37009))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__36971__auto___37029 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__36971__auto___37029){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37030 = arguments.length;
var i__27558__auto___37031 = (0);
while(true){
if((i__27558__auto___37031 < len__27557__auto___37030)){
args__27564__auto__.push((arguments[i__27558__auto___37031]));

var G__37032 = (i__27558__auto___37031 + (1));
i__27558__auto___37031 = G__37032;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37029))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37029),args);
});})(g__36971__auto___37029))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__36971__auto___37029){
return (function (seq37010){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37010));
});})(g__36971__auto___37029))
;


var g__36971__auto___37033 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__36971__auto___37033){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37034 = arguments.length;
var i__27558__auto___37035 = (0);
while(true){
if((i__27558__auto___37035 < len__27557__auto___37034)){
args__27564__auto__.push((arguments[i__27558__auto___37035]));

var G__37036 = (i__27558__auto___37035 + (1));
i__27558__auto___37035 = G__37036;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37033))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37033),args);
});})(g__36971__auto___37033))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__36971__auto___37033){
return (function (seq37011){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37011));
});})(g__36971__auto___37033))
;


var g__36971__auto___37037 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__36971__auto___37037){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37038 = arguments.length;
var i__27558__auto___37039 = (0);
while(true){
if((i__27558__auto___37039 < len__27557__auto___37038)){
args__27564__auto__.push((arguments[i__27558__auto___37039]));

var G__37040 = (i__27558__auto___37039 + (1));
i__27558__auto___37039 = G__37040;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37037))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37037),args);
});})(g__36971__auto___37037))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__36971__auto___37037){
return (function (seq37012){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37012));
});})(g__36971__auto___37037))
;


var g__36971__auto___37041 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__36971__auto___37041){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37042 = arguments.length;
var i__27558__auto___37043 = (0);
while(true){
if((i__27558__auto___37043 < len__27557__auto___37042)){
args__27564__auto__.push((arguments[i__27558__auto___37043]));

var G__37044 = (i__27558__auto___37043 + (1));
i__27558__auto___37043 = G__37044;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37041))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37041),args);
});})(g__36971__auto___37041))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__36971__auto___37041){
return (function (seq37013){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37013));
});})(g__36971__auto___37041))
;


var g__36971__auto___37045 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__36971__auto___37045){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37046 = arguments.length;
var i__27558__auto___37047 = (0);
while(true){
if((i__27558__auto___37047 < len__27557__auto___37046)){
args__27564__auto__.push((arguments[i__27558__auto___37047]));

var G__37048 = (i__27558__auto___37047 + (1));
i__27558__auto___37047 = G__37048;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37045))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37045),args);
});})(g__36971__auto___37045))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__36971__auto___37045){
return (function (seq37014){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37014));
});})(g__36971__auto___37045))
;


var g__36971__auto___37049 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__36971__auto___37049){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37050 = arguments.length;
var i__27558__auto___37051 = (0);
while(true){
if((i__27558__auto___37051 < len__27557__auto___37050)){
args__27564__auto__.push((arguments[i__27558__auto___37051]));

var G__37052 = (i__27558__auto___37051 + (1));
i__27558__auto___37051 = G__37052;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37049))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37049),args);
});})(g__36971__auto___37049))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__36971__auto___37049){
return (function (seq37015){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37015));
});})(g__36971__auto___37049))
;


var g__36971__auto___37053 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__36971__auto___37053){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37054 = arguments.length;
var i__27558__auto___37055 = (0);
while(true){
if((i__27558__auto___37055 < len__27557__auto___37054)){
args__27564__auto__.push((arguments[i__27558__auto___37055]));

var G__37056 = (i__27558__auto___37055 + (1));
i__27558__auto___37055 = G__37056;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37053))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37053),args);
});})(g__36971__auto___37053))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__36971__auto___37053){
return (function (seq37016){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37016));
});})(g__36971__auto___37053))
;


var g__36971__auto___37057 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__36971__auto___37057){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37058 = arguments.length;
var i__27558__auto___37059 = (0);
while(true){
if((i__27558__auto___37059 < len__27557__auto___37058)){
args__27564__auto__.push((arguments[i__27558__auto___37059]));

var G__37060 = (i__27558__auto___37059 + (1));
i__27558__auto___37059 = G__37060;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37057))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37057),args);
});})(g__36971__auto___37057))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__36971__auto___37057){
return (function (seq37017){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37017));
});})(g__36971__auto___37057))
;


var g__36971__auto___37061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__36971__auto___37061){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37062 = arguments.length;
var i__27558__auto___37063 = (0);
while(true){
if((i__27558__auto___37063 < len__27557__auto___37062)){
args__27564__auto__.push((arguments[i__27558__auto___37063]));

var G__37064 = (i__27558__auto___37063 + (1));
i__27558__auto___37063 = G__37064;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37061))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37061),args);
});})(g__36971__auto___37061))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__36971__auto___37061){
return (function (seq37018){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37018));
});})(g__36971__auto___37061))
;


var g__36971__auto___37065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__36971__auto___37065){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37066 = arguments.length;
var i__27558__auto___37067 = (0);
while(true){
if((i__27558__auto___37067 < len__27557__auto___37066)){
args__27564__auto__.push((arguments[i__27558__auto___37067]));

var G__37068 = (i__27558__auto___37067 + (1));
i__27558__auto___37067 = G__37068;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37065))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37065),args);
});})(g__36971__auto___37065))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__36971__auto___37065){
return (function (seq37019){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37019));
});})(g__36971__auto___37065))
;


var g__36971__auto___37069 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__36971__auto___37069){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37070 = arguments.length;
var i__27558__auto___37071 = (0);
while(true){
if((i__27558__auto___37071 < len__27557__auto___37070)){
args__27564__auto__.push((arguments[i__27558__auto___37071]));

var G__37072 = (i__27558__auto___37071 + (1));
i__27558__auto___37071 = G__37072;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37069))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37069),args);
});})(g__36971__auto___37069))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__36971__auto___37069){
return (function (seq37020){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37020));
});})(g__36971__auto___37069))
;


var g__36971__auto___37073 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__36971__auto___37073){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37074 = arguments.length;
var i__27558__auto___37075 = (0);
while(true){
if((i__27558__auto___37075 < len__27557__auto___37074)){
args__27564__auto__.push((arguments[i__27558__auto___37075]));

var G__37076 = (i__27558__auto___37075 + (1));
i__27558__auto___37075 = G__37076;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37073))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37073),args);
});})(g__36971__auto___37073))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__36971__auto___37073){
return (function (seq37021){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37021));
});})(g__36971__auto___37073))
;


var g__36971__auto___37077 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__36971__auto___37077){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37078 = arguments.length;
var i__27558__auto___37079 = (0);
while(true){
if((i__27558__auto___37079 < len__27557__auto___37078)){
args__27564__auto__.push((arguments[i__27558__auto___37079]));

var G__37080 = (i__27558__auto___37079 + (1));
i__27558__auto___37079 = G__37080;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37077))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37077),args);
});})(g__36971__auto___37077))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__36971__auto___37077){
return (function (seq37022){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37022));
});})(g__36971__auto___37077))
;


var g__36971__auto___37081 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__36971__auto___37081){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37082 = arguments.length;
var i__27558__auto___37083 = (0);
while(true){
if((i__27558__auto___37083 < len__27557__auto___37082)){
args__27564__auto__.push((arguments[i__27558__auto___37083]));

var G__37084 = (i__27558__auto___37083 + (1));
i__27558__auto___37083 = G__37084;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37081))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37081),args);
});})(g__36971__auto___37081))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__36971__auto___37081){
return (function (seq37023){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37023));
});})(g__36971__auto___37081))
;


var g__36971__auto___37085 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__36971__auto___37085){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37086 = arguments.length;
var i__27558__auto___37087 = (0);
while(true){
if((i__27558__auto___37087 < len__27557__auto___37086)){
args__27564__auto__.push((arguments[i__27558__auto___37087]));

var G__37088 = (i__27558__auto___37087 + (1));
i__27558__auto___37087 = G__37088;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37085))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37085),args);
});})(g__36971__auto___37085))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__36971__auto___37085){
return (function (seq37024){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37024));
});})(g__36971__auto___37085))
;


var g__36971__auto___37089 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__36971__auto___37089){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37090 = arguments.length;
var i__27558__auto___37091 = (0);
while(true){
if((i__27558__auto___37091 < len__27557__auto___37090)){
args__27564__auto__.push((arguments[i__27558__auto___37091]));

var G__37092 = (i__27558__auto___37091 + (1));
i__27558__auto___37091 = G__37092;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37089))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37089),args);
});})(g__36971__auto___37089))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__36971__auto___37089){
return (function (seq37025){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37025));
});})(g__36971__auto___37089))
;


var g__36971__auto___37093 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__36971__auto___37093){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37094 = arguments.length;
var i__27558__auto___37095 = (0);
while(true){
if((i__27558__auto___37095 < len__27557__auto___37094)){
args__27564__auto__.push((arguments[i__27558__auto___37095]));

var G__37096 = (i__27558__auto___37095 + (1));
i__27558__auto___37095 = G__37096;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37093))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37093),args);
});})(g__36971__auto___37093))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__36971__auto___37093){
return (function (seq37026){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37026));
});})(g__36971__auto___37093))
;


var g__36971__auto___37097 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__36971__auto___37097){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37098 = arguments.length;
var i__27558__auto___37099 = (0);
while(true){
if((i__27558__auto___37099 < len__27557__auto___37098)){
args__27564__auto__.push((arguments[i__27558__auto___37099]));

var G__37100 = (i__27558__auto___37099 + (1));
i__27558__auto___37099 = G__37100;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37097))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37097),args);
});})(g__36971__auto___37097))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__36971__auto___37097){
return (function (seq37027){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37027));
});})(g__36971__auto___37097))
;


var g__36971__auto___37101 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__36971__auto___37101){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37102 = arguments.length;
var i__27558__auto___37103 = (0);
while(true){
if((i__27558__auto___37103 < len__27557__auto___37102)){
args__27564__auto__.push((arguments[i__27558__auto___37103]));

var G__37104 = (i__27558__auto___37103 + (1));
i__27558__auto___37103 = G__37104;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36971__auto___37101))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36971__auto___37101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__36971__auto___37101),args);
});})(g__36971__auto___37101))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__36971__auto___37101){
return (function (seq37028){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37028));
});})(g__36971__auto___37101))
;

var g__36984__auto___37126 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__36984__auto___37126){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37127 = arguments.length;
var i__27558__auto___37128 = (0);
while(true){
if((i__27558__auto___37128 < len__27557__auto___37127)){
args__27564__auto__.push((arguments[i__27558__auto___37128]));

var G__37129 = (i__27558__auto___37128 + (1));
i__27558__auto___37128 = G__37129;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37126))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37126){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37126);
});})(g__36984__auto___37126))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__36984__auto___37126){
return (function (seq37105){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37105));
});})(g__36984__auto___37126))
;


var g__36984__auto___37130 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__36984__auto___37130){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37131 = arguments.length;
var i__27558__auto___37132 = (0);
while(true){
if((i__27558__auto___37132 < len__27557__auto___37131)){
args__27564__auto__.push((arguments[i__27558__auto___37132]));

var G__37133 = (i__27558__auto___37132 + (1));
i__27558__auto___37132 = G__37133;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37130))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37130){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37130);
});})(g__36984__auto___37130))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__36984__auto___37130){
return (function (seq37106){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37106));
});})(g__36984__auto___37130))
;


var g__36984__auto___37134 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__36984__auto___37134){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37135 = arguments.length;
var i__27558__auto___37136 = (0);
while(true){
if((i__27558__auto___37136 < len__27557__auto___37135)){
args__27564__auto__.push((arguments[i__27558__auto___37136]));

var G__37137 = (i__27558__auto___37136 + (1));
i__27558__auto___37136 = G__37137;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37134))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37134){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37134);
});})(g__36984__auto___37134))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__36984__auto___37134){
return (function (seq37107){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37107));
});})(g__36984__auto___37134))
;


var g__36984__auto___37138 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__36984__auto___37138){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37139 = arguments.length;
var i__27558__auto___37140 = (0);
while(true){
if((i__27558__auto___37140 < len__27557__auto___37139)){
args__27564__auto__.push((arguments[i__27558__auto___37140]));

var G__37141 = (i__27558__auto___37140 + (1));
i__27558__auto___37140 = G__37141;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37138))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37138){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37138);
});})(g__36984__auto___37138))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__36984__auto___37138){
return (function (seq37108){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37108));
});})(g__36984__auto___37138))
;


var g__36984__auto___37142 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__36984__auto___37142){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37143 = arguments.length;
var i__27558__auto___37144 = (0);
while(true){
if((i__27558__auto___37144 < len__27557__auto___37143)){
args__27564__auto__.push((arguments[i__27558__auto___37144]));

var G__37145 = (i__27558__auto___37144 + (1));
i__27558__auto___37144 = G__37145;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37142))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37142){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37142);
});})(g__36984__auto___37142))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__36984__auto___37142){
return (function (seq37109){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37109));
});})(g__36984__auto___37142))
;


var g__36984__auto___37146 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__36984__auto___37146){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37147 = arguments.length;
var i__27558__auto___37148 = (0);
while(true){
if((i__27558__auto___37148 < len__27557__auto___37147)){
args__27564__auto__.push((arguments[i__27558__auto___37148]));

var G__37149 = (i__27558__auto___37148 + (1));
i__27558__auto___37148 = G__37149;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37146))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37146){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37146);
});})(g__36984__auto___37146))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__36984__auto___37146){
return (function (seq37110){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37110));
});})(g__36984__auto___37146))
;


var g__36984__auto___37150 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__36984__auto___37150){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37151 = arguments.length;
var i__27558__auto___37152 = (0);
while(true){
if((i__27558__auto___37152 < len__27557__auto___37151)){
args__27564__auto__.push((arguments[i__27558__auto___37152]));

var G__37153 = (i__27558__auto___37152 + (1));
i__27558__auto___37152 = G__37153;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37150))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37150){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37150);
});})(g__36984__auto___37150))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__36984__auto___37150){
return (function (seq37111){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37111));
});})(g__36984__auto___37150))
;


var g__36984__auto___37154 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__36984__auto___37154){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37155 = arguments.length;
var i__27558__auto___37156 = (0);
while(true){
if((i__27558__auto___37156 < len__27557__auto___37155)){
args__27564__auto__.push((arguments[i__27558__auto___37156]));

var G__37157 = (i__27558__auto___37156 + (1));
i__27558__auto___37156 = G__37157;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37154))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37154){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37154);
});})(g__36984__auto___37154))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__36984__auto___37154){
return (function (seq37112){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37112));
});})(g__36984__auto___37154))
;


var g__36984__auto___37158 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__36984__auto___37158){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37159 = arguments.length;
var i__27558__auto___37160 = (0);
while(true){
if((i__27558__auto___37160 < len__27557__auto___37159)){
args__27564__auto__.push((arguments[i__27558__auto___37160]));

var G__37161 = (i__27558__auto___37160 + (1));
i__27558__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37158))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37158){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37158);
});})(g__36984__auto___37158))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__36984__auto___37158){
return (function (seq37113){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37113));
});})(g__36984__auto___37158))
;


var g__36984__auto___37162 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__36984__auto___37162){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37163 = arguments.length;
var i__27558__auto___37164 = (0);
while(true){
if((i__27558__auto___37164 < len__27557__auto___37163)){
args__27564__auto__.push((arguments[i__27558__auto___37164]));

var G__37165 = (i__27558__auto___37164 + (1));
i__27558__auto___37164 = G__37165;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37162))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37162){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37162);
});})(g__36984__auto___37162))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__36984__auto___37162){
return (function (seq37114){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37114));
});})(g__36984__auto___37162))
;


var g__36984__auto___37166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__36984__auto___37166){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37167 = arguments.length;
var i__27558__auto___37168 = (0);
while(true){
if((i__27558__auto___37168 < len__27557__auto___37167)){
args__27564__auto__.push((arguments[i__27558__auto___37168]));

var G__37169 = (i__27558__auto___37168 + (1));
i__27558__auto___37168 = G__37169;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37166))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37166){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37166);
});})(g__36984__auto___37166))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__36984__auto___37166){
return (function (seq37115){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37115));
});})(g__36984__auto___37166))
;


var g__36984__auto___37170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__36984__auto___37170){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37171 = arguments.length;
var i__27558__auto___37172 = (0);
while(true){
if((i__27558__auto___37172 < len__27557__auto___37171)){
args__27564__auto__.push((arguments[i__27558__auto___37172]));

var G__37173 = (i__27558__auto___37172 + (1));
i__27558__auto___37172 = G__37173;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37170))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37170){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37170);
});})(g__36984__auto___37170))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__36984__auto___37170){
return (function (seq37116){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37116));
});})(g__36984__auto___37170))
;


var g__36984__auto___37174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__36984__auto___37174){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37175 = arguments.length;
var i__27558__auto___37176 = (0);
while(true){
if((i__27558__auto___37176 < len__27557__auto___37175)){
args__27564__auto__.push((arguments[i__27558__auto___37176]));

var G__37177 = (i__27558__auto___37176 + (1));
i__27558__auto___37176 = G__37177;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37174))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37174){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37174);
});})(g__36984__auto___37174))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__36984__auto___37174){
return (function (seq37117){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37117));
});})(g__36984__auto___37174))
;


var g__36984__auto___37178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__36984__auto___37178){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37179 = arguments.length;
var i__27558__auto___37180 = (0);
while(true){
if((i__27558__auto___37180 < len__27557__auto___37179)){
args__27564__auto__.push((arguments[i__27558__auto___37180]));

var G__37181 = (i__27558__auto___37180 + (1));
i__27558__auto___37180 = G__37181;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37178))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37178){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37178);
});})(g__36984__auto___37178))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__36984__auto___37178){
return (function (seq37118){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37118));
});})(g__36984__auto___37178))
;


var g__36984__auto___37182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__36984__auto___37182){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37183 = arguments.length;
var i__27558__auto___37184 = (0);
while(true){
if((i__27558__auto___37184 < len__27557__auto___37183)){
args__27564__auto__.push((arguments[i__27558__auto___37184]));

var G__37185 = (i__27558__auto___37184 + (1));
i__27558__auto___37184 = G__37185;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37182))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37182){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37182);
});})(g__36984__auto___37182))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__36984__auto___37182){
return (function (seq37119){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37119));
});})(g__36984__auto___37182))
;


var g__36984__auto___37186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__36984__auto___37186){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37187 = arguments.length;
var i__27558__auto___37188 = (0);
while(true){
if((i__27558__auto___37188 < len__27557__auto___37187)){
args__27564__auto__.push((arguments[i__27558__auto___37188]));

var G__37189 = (i__27558__auto___37188 + (1));
i__27558__auto___37188 = G__37189;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37186))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37186){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37186);
});})(g__36984__auto___37186))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__36984__auto___37186){
return (function (seq37120){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37120));
});})(g__36984__auto___37186))
;


var g__36984__auto___37190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__36984__auto___37190){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37191 = arguments.length;
var i__27558__auto___37192 = (0);
while(true){
if((i__27558__auto___37192 < len__27557__auto___37191)){
args__27564__auto__.push((arguments[i__27558__auto___37192]));

var G__37193 = (i__27558__auto___37192 + (1));
i__27558__auto___37192 = G__37193;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37190))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37190){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37190);
});})(g__36984__auto___37190))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__36984__auto___37190){
return (function (seq37121){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37121));
});})(g__36984__auto___37190))
;


var g__36984__auto___37194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__36984__auto___37194){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37195 = arguments.length;
var i__27558__auto___37196 = (0);
while(true){
if((i__27558__auto___37196 < len__27557__auto___37195)){
args__27564__auto__.push((arguments[i__27558__auto___37196]));

var G__37197 = (i__27558__auto___37196 + (1));
i__27558__auto___37196 = G__37197;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37194))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37194){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37194);
});})(g__36984__auto___37194))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__36984__auto___37194){
return (function (seq37122){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37122));
});})(g__36984__auto___37194))
;


var g__36984__auto___37198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__36984__auto___37198){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37199 = arguments.length;
var i__27558__auto___37200 = (0);
while(true){
if((i__27558__auto___37200 < len__27557__auto___37199)){
args__27564__auto__.push((arguments[i__27558__auto___37200]));

var G__37201 = (i__27558__auto___37200 + (1));
i__27558__auto___37200 = G__37201;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37198))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37198){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37198);
});})(g__36984__auto___37198))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__36984__auto___37198){
return (function (seq37123){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37123));
});})(g__36984__auto___37198))
;


var g__36984__auto___37202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__36984__auto___37202){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37203 = arguments.length;
var i__27558__auto___37204 = (0);
while(true){
if((i__27558__auto___37204 < len__27557__auto___37203)){
args__27564__auto__.push((arguments[i__27558__auto___37204]));

var G__37205 = (i__27558__auto___37204 + (1));
i__27558__auto___37204 = G__37205;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37202))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37202){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37202);
});})(g__36984__auto___37202))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__36984__auto___37202){
return (function (seq37124){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37124));
});})(g__36984__auto___37202))
;


var g__36984__auto___37206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__36984__auto___37206){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37207 = arguments.length;
var i__27558__auto___37208 = (0);
while(true){
if((i__27558__auto___37208 < len__27557__auto___37207)){
args__27564__auto__.push((arguments[i__27558__auto___37208]));

var G__37209 = (i__27558__auto___37208 + (1));
i__27558__auto___37208 = G__37209;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});})(g__36984__auto___37206))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__36984__auto___37206){
return (function (args){
return cljs.core.deref.call(null,g__36984__auto___37206);
});})(g__36984__auto___37206))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__36984__auto___37206){
return (function (seq37125){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37125));
});})(g__36984__auto___37206))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27564__auto__ = [];
var len__27557__auto___37212 = arguments.length;
var i__27558__auto___37213 = (0);
while(true){
if((i__27558__auto___37213 < len__27557__auto___37212)){
args__27564__auto__.push((arguments[i__27558__auto___37213]));

var G__37214 = (i__27558__auto___37213 + (1));
i__27558__auto___37213 = G__37214;
continue;
} else {
}
break;
}

var argseq__27565__auto__ = ((((0) < args__27564__auto__.length))?(new cljs.core.IndexedSeq(args__27564__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27565__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37210_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37210_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37211){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37211));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37215_SHARP_){
return (new Date(p1__37215_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1496186265774